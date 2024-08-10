import { createContext, useState, useContext, useEffect, useRef } from "react";
import { randomPermutation } from "../helpers";

import { BEGINNER_READ_SETTINGS } from "../playSentences/components/PlaySentenceSettings";
import loadPhraseFromDataFolder from "./loadPhraseFromDataFolder";

const AppContext = createContext();

const LANGUAGE = {
  IL_HE: "he-IL",
  EN_US: "en-US",
  PT_BR: "pt-BR",
};

const RTL_LANG = [LANGUAGE.IL_HE];

export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const todayStartTime = () => new Date().setHours(0, 0, 0, 0); // Midnight of the current day

const STORAGE_VERSION = "0.1";
export const AppProvider = ({ children }) => {
  const [locale, setLocale] = useState("en"); // Default to browser locale

  const [appInitFlag, setAppInitFlag] = useState(false);
  const [phraseRange, setPhraseRange] = useState([0, 0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [allPhrases, setAllPhrases] = useState([]);
  const [phrases, setPhrases] = useState([]);
  const [readSettingsArray, setReadSettingsArray] = useState(
    deepCopy(BEGINNER_READ_SETTINGS)
  );

  const [phraseTranslation, setPhraseTranslation] = useState();
  const [availablePhraseTranslation, setAvailablePhraseTranslation] = useState(
    []
  );

  const [sourceLanguage, setSourceLanguage] = useState(LANGUAGE.EN_US);
  const [targetLanguage, setTargetLanguage] = useState(LANGUAGE.PT_BR);
  const [sourceLanguageRate, setSourceLanguageRate] = useState(1);
  const [targetLanguageRate, setTargetLanguageRate] = useState(1);
  const [isSrcRtl, setIsSrcRtl] = useState(false);
  const [isTargetRtl, setIsTargetRtl] = useState(false);
  const [dailyCount, setDailyCount] = useState(0);

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const currentPhraseIndexRef = useRef(currentPhraseIndex);
  const [currentPhrase, setCurrentPhrase] = useState(null);

  ////////////////////////////////////////////////////////////////
  function getLanguagesFromFileName(filename) {
    // Regular expression to match language codes in the format "xx-XX"
    const regex = /\b[a-z]{2}-[A-Z]{2}\b/g;
    const languages = filename.match(regex);
    return languages;
  }
  ////////////////////////////////////////////////////////////////
  const loadPhrasesTranslationFromStorage = async (
    phraseTranslation,
    inputLangList
  ) => {
    const languages =
      inputLangList ?? getLanguagesFromFileName(phraseTranslation); //Object.keys(phraseFromStorage[0]);
    const phraseFromStorage = await storage.get(phraseTranslation);
    const storedAllPhrases = setPhrasesTargetSrc(phraseFromStorage, languages);
    setPhraseRange([0, storedAllPhrases.length]);
    setAllPhrases(storedAllPhrases);
    setPhraseTranslation(phraseTranslation);
  };

  ////////////////////////////////////////////////////////////////
  // init app
  const initFlagRef = useRef(false);
  useEffect(() => {
    if (initFlagRef.current) return;
    initFlagRef.current = true;
    const initializeState = async () => {
      const storageVersion = myLocalStorage.get("STORAGE_VERSION");
      if (storageVersion !== STORAGE_VERSION) {
        localStorage.clear();
        myLocalStorage.set("STORAGE_VERSION", STORAGE_VERSION);
      }
      const storedTheme = myLocalStorage.get("theme", "light");
      setTheme(storedTheme);

      /// init language rate src/target
      setSourceLanguageRate(await storage.get("sourceLanguageRate", 1));
      setTargetLanguageRate(await storage.get("targetLanguageRate", 1));

      const translationFromFiles = (
        await import("@/data/availablePhraseTranslation.json")
      ).default;
      /// init Available Phrase Translation
      const storedAvailablePhraseTranslation = await storage.get(
        "availablePhraseTranslation",
        translationFromFiles
      );
      const allTranslations = [
        ...new Set([
          ...storedAvailablePhraseTranslation,
          ...translationFromFiles,
        ]),
      ];
      setAvailablePhraseTranslation(allTranslations);

      for (const avt of allTranslations) {
        const phrasesFromData = await loadPhraseFromDataFolder(avt);
        storage.set(avt, phrasesFromData);
      }

      /// init phrase range
      const storedPhraseRange = await storage.get("phraseRange", [
        1,
        phrases.length,
      ]);
      setPhraseRange(storedPhraseRange);

      /// init all phrase
      let storedAllPhrases = myLocalStorage.get("allPhrases", null);
      if (!storedAllPhrases) {
        await loadPhrasesTranslationFromStorage(
          storedAvailablePhraseTranslation[0]
        );
      } else {
        setPhraseTranslation(
          await storage.get(
            "phraseTranslation",
            storedAvailablePhraseTranslation[0]
          )
        );

        setAllPhrases(storedAllPhrases);
      }

      ///
      setReadSettingsArray(
        await storage.get("readSettingsArray", deepCopy(BEGINNER_READ_SETTINGS))
      );

      const storedDailyCount = await storage.get("dailyCount", 0);
      setDailyCount(storedDailyCount);

      setLocale(
        await storage.get("locale", navigator.language.substring(0, 2))
      );

      ////////////////////////////////

      const todayTimestamp = todayStartTime();
      const storedCurrentDaytimeStamp = await storage.get(
        "currentDaytimeStamp"
      );
      if (!isSameDay(todayTimestamp, storedCurrentDaytimeStamp)) {
        // Reset the count if the current timestamp is not the same day as stored timestamp
        setDailyCount(0);
        storage.set("dailyCount", 0);
        storage.set("currentDaytimeStamp", todayTimestamp);
      }

      ////////////////////////////////
      setAppInitFlag(true);
    };

    initializeState();
  }, []);

  // Function to check if the stored timestamp is for today
  const isSameDay = (timestamp1, timestamp2) => {
    const date1 = new Date(timestamp1);
    const date2 = new Date(timestamp2);
    return date1.toDateString() === date2.toDateString();
  };

  const incrDailyCount = () => {
    const newCount = dailyCount + 1;
    setDailyCount(newCount);
    storage.set("dailyCount", newCount);
  };

  const setPhrasesTargetSrc = (newPhrases, languages) => {
    const [newSourceLanguage, newTargetLanguage] = languages ?? [
      targetLanguage,
      sourceLanguage,
    ];
    setTargetLanguage(newTargetLanguage);
    setSourceLanguage(newSourceLanguage);
    const phrases = newPhrases.map((phrase) => {
      return {
        target: phrase[newTargetLanguage],
        src: phrase[newSourceLanguage],
      };
    });
    return phrases;
  };

  const toggleTheme = () => {
    if (typeof window === "undefined") return;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add("light");
    }
    setTheme(storedTheme);
  }, []);

  function handleReverseLang() {
    setTargetLanguage(sourceLanguage);
    setSourceLanguage(targetLanguage);
  }

  ////////////////////////////////////////////////////////////////////////
  // save to storage
  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("phraseTranslation", phraseTranslation);
  }, [phraseTranslation]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("availablePhraseTranslation", availablePhraseTranslation);
  }, [availablePhraseTranslation]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("allPhrases", allPhrases);
  }, [allPhrases]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("locale", locale);
    if (locale === targetLanguage.substring(0, 2)) {
      handleReverseLang();
    }
  }, [locale]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("readSettingsArray", readSettingsArray);
  }, [readSettingsArray]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("phraseRange", phraseRange);
  }, [phraseRange]);
  ////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (!appInitFlag) return;
    if (RTL_LANG.includes(sourceLanguage)) {
      setIsSrcRtl(true);
    } else {
      setIsSrcRtl(false);
    }
  }, [sourceLanguage]);

  useEffect(() => {
    if (!appInitFlag) return;
    if (RTL_LANG.includes(targetLanguage)) {
      setIsTargetRtl(true);
    } else {
      setIsTargetRtl(false);
    }
  }, [targetLanguage]);

  ////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (!appInitFlag) return;
    loadPhrasesTranslationFromStorage(phraseTranslation, [
      sourceLanguage,
      targetLanguage,
    ]);
  }, [targetLanguage, sourceLanguage]);

  ////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (!appInitFlag) return;
    const [sourceLanguage, targetLanguage] =
      getLanguagesFromFileName(phraseTranslation);
    setSourceLanguage(sourceLanguage);
    setTargetLanguage(targetLanguage);
  }, [phraseTranslation]);

  ////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (!appInitFlag) return;
    setPhrases(randomPermutation(getPhrasesInRange()));
  }, [allPhrases, phraseRange]);

  ////////////////////////////////////////////////////////////////////////

  const getPhrasesInRange = () => {
    return allPhrases.slice(phraseRange[0], phraseRange[1] + 1);
  };
  ////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    currentPhraseIndexRef.current = currentPhraseIndex;
  }, [currentPhraseIndex]);
  ////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (!phrases || !phrases.length) return;
    setCurrentPhrase(phrases[currentPhraseIndex]);
  }, [phrases]);

  ////////////////////////////////////////////////////////////////////////

  function increasePhraseIndex() {
    let nextIndex = currentPhraseIndex + 1;
    if (nextIndex >= phrases.length) {
      nextIndex = 0;
      setPhrases(randomPermutation(phrases));
    }
    setCurrentPhraseIndex(nextIndex);
    setCurrentPhrase(phrases[nextIndex]);
    incrDailyCount();
    return nextIndex;
  }

  const getLanguageName = (type) => {
    if (type === "target") return targetLanguage;
    if (type === "src") return sourceLanguage;
  };
  return (
    <AppContext.Provider
      value={{
        sourceLanguage,
        targetLanguage,
        sourceLanguageRate,
        targetLanguageRate,
        isSrcRtl,
        isTargetRtl,
        phrases,
        isMenuOpen,
        setIsMenuOpen,
        theme,
        toggleTheme,
        dailyCount,
        phraseRange,
        setPhraseRange,
        getPhrasesInRange,
        increasePhraseIndex,
        currentPhraseIndexRef,
        currentPhraseIndex,
        currentPhrase,
        allPhrases,
        readSettingsArray,
        setReadSettingsArray,
        getLanguageName,
        locale,
        setLocale,
        availablePhraseTranslation,
        phraseTranslation,
        setPhraseTranslation,
        targetLanguage,
        setTargetLanguage,
        sourceLanguage,
        setSourceLanguage,
        handleReverseLang,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

// Utility functions for local storage operations
const myLocalStorage = {
  get: (key, defaultValue = []) => {
    if (typeof window === "undefined") return defaultValue;
    const storedValue = localStorage.getItem(key);
    if (!storedValue) {
      return defaultValue;
    }
    try {
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch {
      return storedValue;
    }
  },
  set: (key, value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  remove: (key) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  },
};
// Utility functions for local storage operations
const storage = {
  get: async (key, defaultValue = []) => {
    return await myLocalStorage.get(key, defaultValue);
  },
  set: async (key, value) => {
    myLocalStorage.set(key, value);
  },
  remove: async (key) => {
    myLocalStorage.remove(key);
  },
};
