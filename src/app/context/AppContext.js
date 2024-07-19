import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(myLocalStorage.get("theme", "dark"));
  const [phrases, setPhrases] = useState([]);

  const saveExercise = (exercise) => {
    setExercises((prevExercises) => {
      const updatedExercises = [...prevExercises, exercise];
      storage.set("exercises", updatedExercises);
      return updatedExercises;
    });
  };

  const loadExercises = () => {
    const storedExercises = storage.get("exercises", []).then((exercises) => {
      setExercises(storedExercises);
    });
  };

  const saveTheme = (theme) => {
    storage.set("theme", theme);
  };

  const loadTheme = () => {
    storage.get("theme", "dark").then((storedTheme) => {
      setTheme(storedTheme);
    });
  };
  const loadPhrase = async () => {
    const phrases = (await import("../../data/phrases.js")).default;
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
        exercises,
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
    const storedValue = localStorage.getItem(key);
    if (!storedValue) {
      return defaultValue;
    }
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key) => {
    localStorage.removeItem(key);
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
