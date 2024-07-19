import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ isMenuOpen, setIsMenuOpen,theme, setTheme, children }) => {
  const [exercises, setExercises] = useState([]);

  const saveExercise = (exercise) => {
    setExercises((prevExercises) => {
      const updatedExercises = [...prevExercises, exercise];
      localStorage.setItem("exercises", JSON.stringify(updatedExercises));
      return updatedExercises;
    });
  };

  const loadExercises = () => {
    const storedExercises = JSON.parse(localStorage.getItem("exercises")) || [];
    setExercises(storedExercises);
  };

  useEffect(() => {
    loadExercises();
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
