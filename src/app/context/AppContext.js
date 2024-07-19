import { createContext, useState, useContext, useEffect } from "react";

// Utility functions for local storage operations
const storage = {
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

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(storage.get("theme", "dark"));

  const saveExercise = (exercise) => {
    setExercises((prevExercises) => {
      const updatedExercises = [...prevExercises, exercise];
      storage.set("exercises", updatedExercises);
      return updatedExercises;
    });
  };

  const loadExercises = () => {
    const storedExercises = storage.get("exercises", []);
    setExercises(storedExercises);
  };

  const saveTheme = (theme) => {
    storage.set("theme", theme);
  };

  const loadTheme = () => {
    const storedTheme = storage.get("theme", "dark");
    setTheme(storedTheme);
  };

  useEffect(() => {
    loadExercises();
    loadTheme();
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
        saveExercise,
        loadExercises,
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
