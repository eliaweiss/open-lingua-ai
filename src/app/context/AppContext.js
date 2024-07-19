import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ isMenuOpen, setIsMenuOpen, children }) => {
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

  return (
    <AppContext.Provider value={{ exercises, saveExercise, loadExercises }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
