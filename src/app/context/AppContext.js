import { createContext, useState, useContext, useEffect, useRef } from "react";
import { randomPermutation } from "../helpers";

import { BEGINNER_READ_SETTINGS } from "../playSentences/components/PlaySentenceSettings";

const AppContext = createContext();

const LANGUAGE = {
  EN_US: "en-US",
  PT_BR: "pt-BR",
};

export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const todayStartTime = () => new Date().setHours(0, 0, 0, 0); // Midnight of the current day

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

  const [defaultSourceLanguage, setDefaultSourceLanguage] = useState(
    LANGUAGE.EN_US
  );
  const [defaultTargetLanguage, setDefaultTargetLanguage] = useState(
    LANGUAGE.PT_BR
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
  // init app
  useEffect(() => {
    const initializeState = async () => {
      const storedTheme = myLocalStorage.get("theme", "light");
      setTheme(storedTheme);

      const storedDefaultSourceLanguage = myLocalStorage.get(
        "DefaultSourceLanguage",
        LANGUAGE.EN_US
      );
      setDefaultSourceLanguage(storedDefaultSourceLanguage);

      const storedDefaultTargetLanguage = myLocalStorage.get(
        "DefaultTargetLanguage",
        LANGUAGE.PT_BR
      );
      setDefaultTargetLanguage(storedDefaultTargetLanguage);

      const phrases = await loadPhrase({
        storedDefaultSourceLanguage,
        storedDefaultTargetLanguage,
      });
      const storedPhraseRange = await storage.get("phraseRange", [
        1,
        phrases.length,
      ]);
      setPhraseRange(storedPhraseRange);

      setReadSettingsArray(
        await storage.get("readSettingsArray", deepCopy(BEGINNER_READ_SETTINGS))
      );

      const storedSourceLanguageRate = await storage.get(
        "sourceLanguageRate",
        1
      );
      setSourceLanguageRate(storedSourceLanguageRate);

      const storedTargetLanguageRate = await storage.get(
        "targetLanguageRate",
        1
      );
      setTargetLanguageRate(storedTargetLanguageRate);

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

  const loadPhrase = async ({
    storedDefaultSourceLanguage,
    storedDefaultTargetLanguage,
  }) => {
    // const src_target = `${sourceLanguage}.${targetLanguage}`;
    // const phrases = (await import(`../../data/phrases.${src_target}.js`))
    //   .default;
    const translation = (await import(`../../data/translation.en-US.pt-BR.js`))
      .default;
    console.log("loadPhrase", translation.phrases.length);
    let [targetLang, sourceLang] = Object.keys(translation.langs).reverse();
    if (
      translation.langs[targetLang].tag === storedDefaultSourceLanguage &&
      translation.langs[sourceLang].tag === storedDefaultTargetLanguage
    ) {
      [targetLang, sourceLang] = [sourceLang, targetLang];
    }
    setTargetLanguage(translation.langs[targetLang].tag);
    setSourceLanguage(translation.langs[sourceLang].tag);
    const phrases = translation.phrases.map((phrase) => {
      return {
        target: phrase[targetLang],
        src: phrase[sourceLang],
      };
    });
    setAllPhrases(phrases);
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

  ////////////////////////////////////////////////////////////////////////
  // save to storage
  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("locale", locale);
  }, [locale]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("readSettingsArray", readSettingsArray);
  }, [readSettingsArray]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("phraseRange", phraseRange);
  }, [phraseRange]);

  useEffect(() => {
    if (!appInitFlag) return;
    setPhrases(randomPermutation(getPhrasesInRange()));
  }, [allPhrases, phraseRange]);

  const getPhrasesInRange = () => {
    return allPhrases.slice(phraseRange[0], phraseRange[1] + 1);
  };

  useEffect(() => {
    currentPhraseIndexRef.current = currentPhraseIndex;
  }, [currentPhraseIndex]);

  useEffect(() => {
    if (!phrases || !phrases.length) return;
    setCurrentPhrase(phrases[currentPhraseIndex]);
  }, [phrases]);

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
