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
  const { appInitFlag, currentPhrase, isSrcRtl, isTargetRtl, getLanguageName } =
    useAppStore();
  const {
    setOriginalText,
    translateDirection,
    setIsOriginalTextRtl,
    setTargetLanguage,
    setSourceLanguage,
    setSuggestedTranslatedText,
    resetExercise,
  } = useTranslateExerciseStore();

  useEffect(() => {
    if (!currentPhrase) {
      cancelSpeech();
      return;
    }
    if (translateDirection === TranslateDirection.TARGET_TO_SOURCE) {
      setOriginalText(currentPhrase.target);
      setSuggestedTranslatedText(currentPhrase.src);
      setIsOriginalTextRtl(isTargetRtl);
      setTargetLanguage(getLanguageName("target"));
      setSourceLanguage(getLanguageName("src"));
    } else {
      setOriginalText(currentPhrase.src);
      setSuggestedTranslatedText(currentPhrase.target);
      setIsOriginalTextRtl(isSrcRtl);
      setTargetLanguage(getLanguageName("src"));
      setSourceLanguage(getLanguageName("target"));
    }
    resetExercise();
  }, [currentPhrase, translateDirection]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("translateDirection", translateDirection);
  }, [translateDirection]);

  return (
    <TranslateExerciseContext.Provider value={{}}>
      {children}
    </TranslateExerciseContext.Provider>
  );
};
