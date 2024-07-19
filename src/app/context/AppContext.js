import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

const LANGUAGE = {
  EN_US: "en-US",
  PT_BR: "pt-BR",
};

export const AppProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? myLocalStorage.get("theme", "dark")
      : "light"
  );
  const [phrases, setPhrases] = useState([]);
  const [sourceLanguage, setSourceLanguage] = useState(
    typeof window !== "undefined"
      ? myLocalStorage.get("sourceLanguage", LANGUAGE.EN_US)
      : LANGUAGE.EN_US
  );
  const [targetLanguage, setTargetLanguage] = useState(
    typeof window !== "undefined"
      ? myLocalStorage.get("targetLanguage", LANGUAGE.PT_BR)
      : LANGUAGE.PT_BR
  );
  const [sourceLanguageRate, setSourceLanguageRate] = useState(
    typeof window !== "undefined"
      ? myLocalStorage.get("sourceLanguageRate", 1)
      : 1
  );
  const [targetLanguageRate, setTargetLanguageRate] = useState(
    typeof window !== "undefined"
      ? myLocalStorage.get("targetLanguageRate", 1)
      : 1
  );

  const [isSrcRtl, setIsSrcRtl] = useState(false);
  const [isTargetRtl, setIsTargetRtl] = useState(false);

  const saveExercise = (exercise) => {
    setExercises((prevExercises) => {
      const updatedExercises = [...prevExercises, exercise];
      if (typeof window !== "undefined") {
        storage.set("exercises", updatedExercises);
      }
      return updatedExercises;
    });
  };

  const loadExercises = () => {
    if (typeof window !== "undefined") {
      storage.get("exercises", []).then((exercises) => {
        setExercises(exercises);
      });
    }
  };

  const saveTheme = (theme) => {
    if (typeof window !== "undefined") {
      storage.set("theme", theme);
    }
  };

  const loadTheme = () => {
    if (typeof window !== "undefined") {
      storage.get("theme", "dark").then((storedTheme) => {
        setTheme(storedTheme);
      });
    }
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
    loadTheme();
    loadPhrase();
  }, []);

  useEffect(() => {
    if (!theme) return;
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    saveTheme(theme); // Save theme to local storage whenever it changes
  }, [theme]);

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
        setTheme,
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
