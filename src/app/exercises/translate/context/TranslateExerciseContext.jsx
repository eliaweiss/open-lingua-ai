import React, { createContext, useContext, useEffect } from "react";
import useTranslateExerciseStore from "../store/TranslateExerciseStore";
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
  const { originalText, setOriginalText, translatedText, setTranslatedText } =
    useTranslateExerciseStore();

  useEffect(() => {
    if (!currentPhrase) {
      cancelSpeech();
      return;
    }
    playSentence();
  }, [currentPhraseIndex]);

  const skip = () => {};

  return (
    <TranslateExerciseContext.Provider
      value={{
        originalText,
        setOriginalText,
        translatedText,
        setTranslatedText,
        sourceLanguage,
        targetLanguage,
      }}
    >
      {children}
    </TranslateExerciseContext.Provider>
  );
};
