// SpeechSynthesisContext.js

import React, { createContext, useContext } from "react";
import { useAppContext } from "./AppContext";
import {
  readAloud_slow,
  readAloud,
  waitForSeconds,
  randomPermutation,
  cancel,
  skipLoop,
} from "../tts-service/SpeechSynthesisService";

const SpeechSynthesisContext = createContext();

export const SpeechSynthesisProvider = ({ children }) => {
  const {
    sourceLanguage,
    targetLanguage,
    sourceLanguageRate,
    targetLanguageRate,
  } = useAppContext();
  const readAloud_src = async (text) => {
    await readAloud(text, sourceLanguage, sourceLanguageRate);
  };
  const readAloud_target = async (text) => {
    await readAloud(text, targetLanguage, targetLanguageRate);
  };
  const readAloud_slow_target = async (text) => {
    await readAloud_slow(text, targetLanguage, targetLanguageRate);
  };

  const value = {
    readAloud_slow_target,
    readAloud_target,
    readAloud_src,
    waitForSeconds,
    randomPermutation,
    cancel,
    skipLoop,
  };

  return (
    <SpeechSynthesisContext.Provider value={value}>
      {children}
    </SpeechSynthesisContext.Provider>
  );
};

export const useSpeechSynthesis = () => useContext(SpeechSynthesisContext);