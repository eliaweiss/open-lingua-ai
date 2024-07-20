import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

const LANGUAGE = {
  EN_US: "en-US",
  PT_BR: "pt-BR",
};

const todayStartTime = () => new Date().setHours(0, 0, 0, 0); // Midnight of the current day

export const AppProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    typeof window === "undefined"
      ? "light"
      : localStorage.getItem("theme", "light")
  );
  const [phrases, setPhrases] = useState([]);
  const [sourceLanguage, setSourceLanguage] = useState(
    myLocalStorage.get("sourceLanguage", LANGUAGE.EN_US)
  );
  const [targetLanguage, setTargetLanguage] = useState(
    myLocalStorage.get("targetLanguage", LANGUAGE.PT_BR)
  );
  const [sourceLanguageRate, setSourceLanguageRate] = useState(
    myLocalStorage.get("sourceLanguageRate", 1)
  );
  const [targetLanguageRate, setTargetLanguageRate] = useState(
    myLocalStorage.get("targetLanguageRate", 1)
  );
  const [isSrcRtl, setIsSrcRtl] = useState(false);
  const [isTargetRtl, setIsTargetRtl] = useState(false);

  ////////////////////////////////////////////////////////////////
  // daily count
  const [dailyCount, setDailyCount] = useState(
    myLocalStorage.get("dailyCount", 0)
  );

  const [currentDaytimeStamp, setCurrentDaytimeStamp] = useState(
    myLocalStorage.get("currentDaytimeStamp", todayStartTime())
  );

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
      myLocalStorage.set("dailyCount", 0);
      myLocalStorage.set("currentDaytimeStamp", todayTimestamp);
    }
  }, [currentDaytimeStamp]);

  const incrDailyCount = () => {
    const newCount = dailyCount + 1;
    setDailyCount(newCount);
    myLocalStorage.set("dailyCount", newCount);
  };

  ////////////////////////////////////////////////////////////////

  const loadExercises = () => {
    const storedExercises = storage.get("exercises", []).then((exercises) => {
      setExercises(storedExercises);
    });
  };

  const loadPhrase = async () => {
    const src_target = `${sourceLanguage}.${targetLanguage}`;
    const phrases = (await import(`../../data/phrases.${src_target}.js`))
      .default;
    console.log("loadPhrase", phrases.length);
    setPhrases(phrases);
  };

  useEffect(() => {
    loadExercises();
    loadPhrase();
  }, []);

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
        setPhrases,
        isMenuOpen,
        setIsMenuOpen,
        theme,
        toggleTheme,
        dailyCount,
        incrDailyCount,
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
