import React, { createContext, useContext, useEffect } from "react";
import useTranslateExerciseStore, {
  TranslateDirection,
} from "../store/TranslateExerciseStore";
import { useSpeechSynthesis } from "@/app/context/SpeechSynthesisContext";
import useAppStore from "@/app/store/appStore";
import { storage } from "@/app/utils/storageUtils";

const TranslateExerciseContext = createContext();

export const useTranslateExercise = () => useContext(TranslateExerciseContext);

export const TranslateExerciseProvider = ({ children }) => {
  const { cancelSpeech } = useSpeechSynthesis();
  const {
    appInitFlag,
    currentPhrase,
    isSrcRtl,
    isTargetRtl,
    targetLanguage,
    sourceLanguage,
  } = useAppStore();
  const {
    setOriginalText,
    translateDirection,
    setIsOriginalTextRtl,
    setOriginLanguage,
    setTranslateToLanguage,
    setSuggestedTranslatedText,
    resetExercise,
    exerciseCounter,
    setExerciseCounter,
    autoReadAloud,
    setAutoReadAloud,
    initTranslateExercise,
    setInitTranslateExercise,
  } = useTranslateExerciseStore();

  useEffect(() => {
    if (appInitFlag) {
      async function init() {
        setExerciseCounter(
          Number(await storage.get("translateExerciseCounter")) || 0
        );
        const translateAutoReadAloud = await storage.get(
          "translateAutoReadAloud",
          true
        );
        setAutoReadAloud(translateAutoReadAloud);
        setInitTranslateExercise(true);
      }
      init();
    }
  }, [appInitFlag]);

  useEffect(() => {
    if (!currentPhrase) {
      cancelSpeech();
      return;
    }
    if (translateDirection === TranslateDirection.TARGET_TO_SOURCE) {
      setOriginalText(currentPhrase.target);
      setSuggestedTranslatedText(currentPhrase.src);
      setIsOriginalTextRtl(isTargetRtl);
      setOriginLanguage(targetLanguage);
      setTranslateToLanguage(sourceLanguage);
    } else {
      setOriginalText(currentPhrase.src);
      setSuggestedTranslatedText(currentPhrase.target);
      setIsOriginalTextRtl(isSrcRtl);
      setOriginLanguage(sourceLanguage);
      setTranslateToLanguage(targetLanguage);
    }
    resetExercise();
  }, [currentPhrase, translateDirection]);

  useEffect(() => {
    if (!initTranslateExercise) return;
    storage.set("translateDirection", translateDirection);
  }, [translateDirection]);

  useEffect(() => {
    if (!initTranslateExercise) return;
    storage.set("translateExerciseCounter", exerciseCounter);
  }, [exerciseCounter]);

  useEffect(() => {
    if (!initTranslateExercise) return;
    storage.set("translateAutoReadAloud", autoReadAloud);
  }, [autoReadAloud]);

  return (
    <TranslateExerciseContext.Provider value={{}}>
      {children}
    </TranslateExerciseContext.Provider>
  );
};
