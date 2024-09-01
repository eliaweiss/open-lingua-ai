import React, { createContext, useContext, useEffect } from "react";
import useTranslateExerciseStore, {
  TranslateDirection,
} from "../store/TranslateExerciseStore";
import { useSpeechSynthesis } from "@/app/context/SpeechSynthesisContext";
import useAppStore from "@/app/store/appStore";

const TranslateExerciseContext = createContext();

export const useTranslateExercise = () => useContext(TranslateExerciseContext);

export const TranslateExerciseProvider = ({ children }) => {
  const { readAloud_target, cancelSpeech, splitIntoSubSentences } =
    useSpeechSynthesis();
  const {
    sourceLanguage,
    targetLanguage,
    increasePhraseIndex,
    currentPhraseIndex,
    currentPhrase,
  } = useAppStore();
  const {
    originalText,
    setOriginalText,
    translatedText,
    setTranslatedText,
    translateDirection,
  } = useTranslateExerciseStore();

  useEffect(() => {
    if (!currentPhrase) {
      cancelSpeech();
      return;
    }
    if (translateDirection === TranslateDirection.TARGET_TO_SOURCE) {
      setOriginalText(currentPhrase.target);
    } else {
      setOriginalText(currentPhrase.source);
    }
  }, [currentPhrase, currentPhraseIndex]);

  return (
    <TranslateExerciseContext.Provider value={{}}>
      {children}
    </TranslateExerciseContext.Provider>
  );
};
