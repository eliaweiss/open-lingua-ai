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
    isSrcRtl,
    isTargetRtl,
    getLanguageName,
  } = useAppStore();
  const {
    originalText,
    setOriginalText,
    translatedText,
    setTranslatedText,
    translateDirection,
    setIsOriginalTextRtl,
    setTargetLanguage,
    setSourceLanguage,
  } = useTranslateExerciseStore();

  useEffect(() => {
    if (!currentPhrase) {
      cancelSpeech();
      return;
    }
    if (translateDirection === TranslateDirection.TARGET_TO_SOURCE) {
      setOriginalText(currentPhrase.target);
      setIsOriginalTextRtl(isTargetRtl);
      setTargetLanguage(getLanguageName("target"));
      setSourceLanguage(getLanguageName("src"));
    } else {
      setOriginalText(currentPhrase.src);
      setIsOriginalTextRtl(isSrcRtl);
      setTargetLanguage(getLanguageName("src"));
      setSourceLanguage(getLanguageName("target"));
    }
  }, [currentPhrase, translateDirection]);

  return (
    <TranslateExerciseContext.Provider value={{}}>
      {children}
    </TranslateExerciseContext.Provider>
  );
};
