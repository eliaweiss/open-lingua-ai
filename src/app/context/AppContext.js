import { createContext, useState, useContext, useEffect, useRef } from "react";
import useAppStore from "../store/appStore";
import { initializeState } from "../utils/initializeState";
import { getLanguagesFromFileName } from "../utils/languageUtils";

import { randomPermutation } from "../helpers";

const AppContext = createContext();

const LANGUAGE = {
  IL_HE: "he-IL",
  EN_US: "en-US",
  PT_BR: "pt-BR",
};

const RTL_LANG = [LANGUAGE.IL_HE];

export const AppProvider = ({ children }) => {
  const {
    appInitFlag,
    phraseRange,
    setTheme,
    allPhrases,
    phrases,
    setPhrases,
    phraseTranslation,
    sourceLanguage,
    setSourceLanguage,
    targetLanguage,
    setTargetLanguage,
    setIsSrcRtl,
    setIsTargetRtl,
    currentPhraseIndex,
    setCurrentPhrase,
    getPhrasesInRange,
    currentPhraseIndexRef,
    updateCurrentPhraseIndexRef,
  } = useAppStore();

  const initFlagRef = useRef(false);

  useEffect(() => {
    if (initFlagRef.current) return;
    initFlagRef.current = true;
    initializeState(useAppStore);
  }, []);

  useEffect(() => {
    updateCurrentPhraseIndexRef();
  }, [currentPhraseIndex, updateCurrentPhraseIndexRef]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add("light");
    }
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (!appInitFlag) return;
    if (RTL_LANG.includes(sourceLanguage)) {
      setIsSrcRtl(true);
    } else {
      setIsSrcRtl(false);
    }
  }, [sourceLanguage]);

  useEffect(() => {
    if (!appInitFlag) return;
    if (RTL_LANG.includes(targetLanguage)) {
      setIsTargetRtl(true);
    } else {
      setIsTargetRtl(false);
    }
  }, [targetLanguage]);

  useEffect(() => {
    if (!appInitFlag) return;
    loadPhrasesTranslationFromStorage(phraseTranslation, [
      sourceLanguage,
      targetLanguage,
    ]);
  }, [targetLanguage, sourceLanguage]);

  useEffect(() => {
    if (!appInitFlag) return;
    const [sourceLanguage, targetLanguage] =
      getLanguagesFromFileName(phraseTranslation);
    setSourceLanguage(sourceLanguage);
    setTargetLanguage(targetLanguage);
    loadPhrasesTranslationFromStorage(phraseTranslation, [
      sourceLanguage,
      targetLanguage,
    ]);
  }, [phraseTranslation]);

  useEffect(() => {
    if (!appInitFlag) return;
    setPhrases(randomPermutation(getPhrasesInRange()));
  }, [allPhrases, phraseRange, appInitFlag, getPhrasesInRange]);

  useEffect(() => {
    currentPhraseIndexRef.current = currentPhraseIndex;
  }, [currentPhraseIndex]);

  useEffect(() => {
    if (!phrases || !phrases.length) return;
    setCurrentPhrase(phrases[currentPhraseIndex]);
  }, [phrases]);

  return (
    <AppContext.Provider value={useAppStore()}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
