import { createContext, useState, useContext, useEffect, useRef } from "react";
import {
  randomPermutation,
  useSpeechSynthesis,
} from "./SpeechSynthesisContext";

const AppContext = createContext();

const LANGUAGE = {
  EN_US: "en-US",
  PT_BR: "pt-BR",
};

const todayStartTime = () => new Date().setHours(0, 0, 0, 0); // Midnight of the current day

export const AppProvider = ({ children }) => {
  const [appInitFlag, setAppInitFlag] = useState(false);
  const [phraseRange, setPhraseRange] = useState([0, 0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [allPhrases, setAllPhrases] = useState([]);
  const [phrases, setPhrases] = useState([]);

  const [sourceLanguage, setSourceLanguage] = useState(LANGUAGE.EN_US);
  const [targetLanguage, setTargetLanguage] = useState(LANGUAGE.PT_BR);
  const [sourceLanguageRate, setSourceLanguageRate] = useState(1);
  const [targetLanguageRate, setTargetLanguageRate] = useState(1);
  const [isSrcRtl, setIsSrcRtl] = useState(false);
  const [isTargetRtl, setIsTargetRtl] = useState(false);
  const [dailyCount, setDailyCount] = useState(0);
  const [currentDaytimeStamp, setCurrentDaytimeStamp] = useState(
    todayStartTime()
  );

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const currentPhraseIndexRef = useRef(currentPhraseIndex);
  const [currentPhrase, setCurrentPhrase] = useState(null);

  ////////////////////////////////////////////////////////////////
  // init app
  useEffect(() => {
    const initializeState = async () => {
      const phrases = await loadPhrase();
      const storedPhraseRange = await storage.get("phraseRange", [
        1,
        phrases.length,
      ]);
      setPhraseRange(storedPhraseRange);

      const storedTheme = localStorage.getItem("theme", "light");
      setTheme(storedTheme);

      const storedSourceLanguage = await storage.get(
        "sourceLanguage",
        LANGUAGE.EN_US
      );
      setSourceLanguage(storedSourceLanguage);

      const storedTargetLanguage = await storage.get(
        "targetLanguage",
        LANGUAGE.PT_BR
      );
      setTargetLanguage(storedTargetLanguage);

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

      const storedCurrentDaytimeStamp = await storage.get(
        "currentDaytimeStamp",
        todayStartTime()
      );
      setCurrentDaytimeStamp(storedCurrentDaytimeStamp);
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

  useEffect(() => {
    const todayTimestamp = todayStartTime();

    if (!isSameDay(todayTimestamp, currentDaytimeStamp)) {
      // Reset the count if the current timestamp is not the same day as stored timestamp
      setDailyCount(0);
      setCurrentDaytimeStamp(todayTimestamp);
      storage.set("dailyCount", 0);
      storage.set("currentDaytimeStamp", todayTimestamp);
    }
  }, [currentDaytimeStamp]);

  const incrDailyCount = () => {
    const newCount = dailyCount + 1;
    setDailyCount(newCount);
    storage.set("dailyCount", newCount);
  };

  const loadPhrase = async () => {
    const src_target = `${sourceLanguage}.${targetLanguage}`;
    const phrases = (await import(`../../data/phrases.${src_target}.js`))
      .default;
    console.log("loadPhrase", phrases.length);
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
    return storedValue ? JSON.parse(storedValue) : defaultValue;
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
