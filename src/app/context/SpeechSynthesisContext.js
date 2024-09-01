// SpeechSynthesisContext.js

import React, { createContext, useContext, useState } from "react";
import {
  loadVoices,
  waitForSeconds,
  cancelSpeech,
  splitIntoSubSentences,
} from "../utils/speechUtils";
import {
  readAloud_src,
  readAloud_target,
  readAloud_slow_target,
} from "../utils/speechUtils";
import useSpeechSynthesisStore from "./SpeechSynthesisStore";

let voices = [];

if (typeof window !== "undefined") {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

const SpeechSynthesisContext = createContext();

export const SpeechSynthesisProvider = ({ children }) => {
  const { isReading } = useSpeechSynthesisStore();

  const value = {
    readAloud_slow_target,
    readAloud_target,
    readAloud_src,
    waitForSeconds,
    cancelSpeech,
    splitIntoSubSentences,
    isReading,
  };

  return (
    <SpeechSynthesisContext.Provider value={value}>
      {children}
    </SpeechSynthesisContext.Provider>
  );
};

export const useSpeechSynthesis = () => useContext(SpeechSynthesisContext);
