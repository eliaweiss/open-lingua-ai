import React, { createContext, useState, useContext, useEffect } from "react";
import useConjugateExerciseStore from "../store/ConjugateExerciseStore";
import useAppStore from "@/app/store/appStore";
import { createConjugationApi } from "../createConjugationApi";
import { storage } from "@/app/utils/storageUtils";
const ConjugateContext = createContext();

export const useConjugateExercise = () => useContext(ConjugateContext);

export const ConjugateProvider = ({ children }) => {
  const { appInitFlag } = useAppStore();
  const { exerciseData, setExerciseData, exerciseIndex, setExerciseIndex } =
    useConjugateExerciseStore();

  useEffect(() => {
    if (!appInitFlag) return;
    async function initExercise() {
      const storedExerciseData = await storage.get("exerciseData");
      if (storedExerciseData) {
        setExerciseData(storedExerciseData);
      }
      const storedExerciseIndex = await storage.get("exerciseIndex");
      if (storedExerciseIndex) {
        setExerciseIndex(storedExerciseIndex);
      }
    }
    initExercise();
  }, [appInitFlag]);

  async function createConjugation() {
    const exerciseData = await createConjugationApi();
    setExerciseData(exerciseData);
    setExerciseIndex(0);
  }

  // const apiSubmitted = useRef(false);
  useEffect(() => {
    if (!appInitFlag) return;
    // apiSubmitted.current = true;
    // if (!apiSubmitted.current) {
    if (exerciseData.length <= exerciseIndex) {
      createConjugation();
    }
    // }
  }, [exerciseIndex]);

  useEffect(() => {
    if (!appInitFlag) return;
    if (exerciseData && exerciseData.length > 0) {
      storage.set("exerciseData", exerciseData);
    }
  }, [exerciseData]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("exerciseIndex", exerciseIndex);
  }, [exerciseIndex]);

  return (
    <ConjugateContext.Provider value={{}}>{children}</ConjugateContext.Provider>
  );
};
