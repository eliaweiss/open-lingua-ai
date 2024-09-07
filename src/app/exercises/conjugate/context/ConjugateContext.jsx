import React, { createContext, useState, useContext, useEffect } from "react";
import useConjugateExerciseStore from "../store/ConjugateExerciseStore";
import useAppStore from "@/app/store/appStore";
import { createConjugationApi } from "../store/createConjugationApi";
import { storage } from "@/app/utils/storageUtils";
import { createConjugation } from "../store/createConjugation";
const ConjugateContext = createContext();
import { marked } from "marked";

export const useConjugateExercise = () => useContext(ConjugateContext);

export const ConjugateProvider = ({ children }) => {
  const { appInitFlag } = useAppStore();
  const {
    exerciseData,
    setExerciseData,
    exerciseIndex,
    setExerciseIndex,
    verbList,
    setVerbList,
    setCurrentExercise,
    setExplanation,
  } = useConjugateExerciseStore();

  useEffect(() => {
    setCurrentExercise(exerciseData[exerciseIndex]);
    if (exerciseData && exerciseData.length > 0) {
      const htmlTxt = marked(exerciseData[exerciseIndex].explanation);
      console.log(htmlTxt);
      setExplanation(htmlTxt);
    }
  }, [exerciseData, exerciseIndex]);

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
      const storedVerbList = await storage.get(
        "verbList",
        `Tomar, Levar, Ter , Pegar, encher`
      );
      if (storedVerbList) {
        setVerbList(storedVerbList);
      }
    }
    initExercise();
  }, [appInitFlag]);

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

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("verbList", verbList);
  }, [verbList]);

  return (
    <ConjugateContext.Provider value={{}}>{children}</ConjugateContext.Provider>
  );
};
