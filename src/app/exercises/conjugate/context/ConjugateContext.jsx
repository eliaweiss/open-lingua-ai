import React, { createContext, useState, useContext, useEffect } from "react";
import useConjugateExerciseStore from "../store/ConjugateExerciseStore";
import useAppStore from "@/app/store/appStore";
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
    exerciseCounter,
    setExerciseCounter,
    tenses,
    setTenses,
    isConjugateExerciseStoreInit,
    setIsConjugateExerciseStoreInit,
  } = useConjugateExerciseStore();

  useEffect(() => {
    setCurrentExercise(exerciseData[exerciseIndex]);
    if (exerciseData && exerciseData[exerciseIndex]) {
      const htmlTxt = marked(exerciseData[exerciseIndex].explanation);
      // console.log(htmlTxt);
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

      const storedExerciseCounter = await storage.get("exerciseCounter", 0);
      if (storedExerciseCounter) {
        setExerciseCounter(Number(storedExerciseCounter));
      }

      const storedVerbList = await storage.get("verbList", "");
      setVerbList(storedVerbList);

      const storedTenses = await storage.get("tenses", []);
      setTenses(storedTenses);
      setIsConjugateExerciseStoreInit(true);
    }
    initExercise();
  }, [appInitFlag]);

  // const apiSubmitted = useRef(false);
  useEffect(() => {
    if (!isConjugateExerciseStoreInit) return;
    // apiSubmitted.current = true;
    // if (!apiSubmitted.current) {
    if (exerciseData.length <= exerciseIndex) {
      createConjugation();
    }
    // }
  }, [exerciseIndex]);

  useEffect(() => {
    if (!isConjugateExerciseStoreInit) return;
    // console.log("store exerciseData", exerciseData);
    if (exerciseData && exerciseData.length > 0) {
      storage.set("exerciseData", exerciseData);
    }
  }, [exerciseData]);

  useEffect(() => {
    if (!isConjugateExerciseStoreInit) return;
    storage.set("exerciseIndex", exerciseIndex);
  }, [exerciseIndex]);

  useEffect(() => {
    if (!isConjugateExerciseStoreInit) return;
    storage.set("verbList", verbList);
  }, [verbList]);

  useEffect(() => {
    if (!isConjugateExerciseStoreInit) return;
    storage.set("exerciseCounter", exerciseCounter);
  }, [exerciseCounter]);

  useEffect(() => {
    if (!isConjugateExerciseStoreInit) return;
    storage.set("tenses", tenses);
  }, [tenses]);

  // note we dont set value because we use zustand store
  return <ConjugateContext.Provider>{children}</ConjugateContext.Provider>;
};
