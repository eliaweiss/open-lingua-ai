import { createContext, useState, useContext, useEffect, useRef } from "react";
import useAppStore from "../store/appStore";
import { initializeState } from "../utils/initializeState";
import { getLanguagesFromFileName } from "../utils/languageUtils";
import { randomPermutation } from "../helpers";
import { loadPhrasesTranslationFromStorage } from "../utils/loadPhrasesTranslationFromStorage";
import { storage } from "../utils/storageUtils";
import { isSameDay, todayStartTime } from "../utils/dateUtils";

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
    targetLanguage,
    setIsSrcRtl,
    setIsTargetRtl,
    currentPhraseIndex,
    setCurrentPhrase,
    getPhrasesInRange,
    currentPhraseIndexRef,
    updateCurrentPhraseIndexRef,
    availablePhraseTranslation,
    readSettingsArray,
    locale,
    handleReverseLang,
    maxNumberOfWordsInPhrase,
    dailyCount,
    setDailyCount,
    llmApiKey,
    llmModel,
    googleTranslatorApiKey,
    setIsLoadingAppCounter,
    isLoadingCounter,
    _setIsLoadingAppFlag,
  } = useAppStore();

  const initFlagRef = useRef(false);

  useEffect(() => {
    if (initFlagRef.current) return;
    initFlagRef.current = true;
    initializeState(useAppStore);
    // handleTest();
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
  }, [
    targetLanguage,
    sourceLanguage,
    appInitFlag,
    phraseTranslation,
    maxNumberOfWordsInPhrase,
  ]);

  useEffect(() => {
    if (!appInitFlag) return;
    const [newSourceLanguage, newTargetLanguage] =
      getLanguagesFromFileName(phraseTranslation);
    useAppStore.getState().setSourceLanguage(newSourceLanguage);
    useAppStore.getState().setTargetLanguage(newTargetLanguage);
    loadPhrasesTranslationFromStorage(phraseTranslation, [
      newSourceLanguage,
      newTargetLanguage,
    ]);
  }, [phraseTranslation, appInitFlag]);

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

  ////////////////////////////////////////////////////////////////////////
  // save to storage
  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("phraseTranslation", phraseTranslation);
  }, [phraseTranslation]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("availablePhraseTranslation", availablePhraseTranslation);
  }, [availablePhraseTranslation]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("allPhrases", allPhrases);
  }, [allPhrases]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("locale", locale);
    if (locale === targetLanguage.substring(0, 2)) {
      handleReverseLang();
    }
  }, [locale]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("readSettingsArray", readSettingsArray);
  }, [readSettingsArray]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("phraseRange", phraseRange);
  }, [phraseRange]);

  useEffect(() => {
    if (!appInitFlag) return;
    async function inlineFn() {
      const todayTimestamp = todayStartTime();
      const storedCurrentDaytimeStamp = await storage.get(
        "currentDaytimeStamp"
      );
      if (!isSameDay(todayTimestamp, storedCurrentDaytimeStamp)) {
        setDailyCount(1);
        storage.set("dailyCount", 1);
        storage.set("currentDaytimeStamp", todayTimestamp);
      } else {
        storage.set("dailyCount", dailyCount);
      }
    }
    inlineFn();
  }, [dailyCount]);

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
    storage.set("maxNumberOfWordsInPhrase", maxNumberOfWordsInPhrase);
  }, [maxNumberOfWordsInPhrase]);

  useEffect(() => {
    if (!appInitFlag) return;

    storage.set("llmApiKey", llmApiKey);
  }, [llmApiKey]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("llmModel", llmModel);
  }, [llmModel]);

  useEffect(() => {
    if (!appInitFlag) return;
    storage.set("googleTranslatorApiKey", googleTranslatorApiKey);
  }, [googleTranslatorApiKey]);

  // async function handleTest() {
  //   const data = await fetchWrapper("/api/tst", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       message: "Hello World " + Date.now(),
  //     }),
  //   });
  //   console.log(data);
  // }

  useEffect(() => {
    if (!appInitFlag) return;
    // handleQueryLLM();
    // setIsLoadingAppCounter(false);
  }, [appInitFlag]);

  useEffect(() => {
    _setIsLoadingAppFlag(isLoadingCounter > 0);
  }, [isLoadingCounter]);

  return (
    <AppContext.Provider value={useAppStore()}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
