// SpeechSynthesisContext.js

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAppContext } from "./AppContext";

let voices = [];

function loadVoices() {
  voices = window.speechSynthesis.getVoices();
}
if (typeof window !== "undefined") {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

const SpeechSynthesisContext = createContext();

export const SpeechSynthesisProvider = ({ children }) => {
  const [isReading, setIsReading] = useState(false);

  const {
    sourceLanguage,
    targetLanguage,
    sourceLanguageRate,
    targetLanguageRate,
  } = useAppContext();

  ////////////////////////////////////////////////////////////////

  function splitIntoSubSentences(text) {
    return text.split(/[,.?] /);
  }

  ////////////////////////////////////////////////////////////////

  async function readAloud_slow(text, lang) {
    const groups = splitIntoSubSentences(text);
    for (const sentence of groups) {
      await readAloud_helper(addCommas(sentence), lang);
    }
  }

  ////////////////////////////////////////////////////////////////

  async function readAloud(text, lang, rate) {
    setIsReading(true);
    if (!rate) rate = 1;
    const groups = splitIntoSubSentences(text);
    for (const sentence of groups) {
      await readAloud_helper(sentence, lang, rate);
    }
    setIsReading(false);
  }

  ////////////////////////////////////////////////////////////////

  async function readAloud_helper(text, lang, rate) {
    if (!rate) rate = 1;

    return new Promise((resolve, reject) => {
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = rate;
        utterance.lang = lang;

        const selectedVoice = voices.find(
          (voice) => voice.lang === lang && voice.name.includes("Google")
        );
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }

        // myTimeout = setTimeout(myTimer, sleepTime);
        utterance.onend = function () {
          resolve();
        };

        utterance.onerror = function (event) {
          console.log("Speech error: " + event.error);
          reject(event.error);
        };

        if (typeof window !== "undefined") {
          window.speechSynthesis.speak(utterance);
        }
      } catch {
        reject();
      }
    });
  }

  ////////////////////////////////////////////////////////////////

  function addCommas(text) {
    const words = text.split(/\s+/);
    return words.join(", ");
  }
  ////////////////////////////////////////////////////////////////

  async function waitForSeconds(ss) {
    await new Promise((resolve) => setTimeout(resolve, ss * 1000));
  }

  ////////////////////////////////////////////////////////////////

  function cancel() {
    if (typeof window !== "undefined") {
      window.speechSynthesis.cancel();
    }
  }
  ////////////////////////////////////////////////////////////////
  const readAloud_src = async (text, rate) => {
    if (!rate) {
      rate = sourceLanguageRate;
    }
    await readAloud(text, sourceLanguage, rate);
  };

  ////////////////////////////////////////////////////////////////

  const readAloud_target = async (text, rate) => {
    if (!rate) {
      rate = targetLanguageRate;
    }
    await readAloud(text, targetLanguage, rate);
  };

  ////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////

export function randomPermutation(data) {
  const perm = data.slice();
  for (let i = perm.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [perm[i], perm[j]] = [perm[j], perm[i]];
  }
  return perm;
}
