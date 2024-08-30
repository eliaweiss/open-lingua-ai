import { createContext, useState, useContext, useEffect, useRef } from "react";
import useAppStore from "../store/appStore";
import {
  getLanguagesFromFileName,
  getLanguageName,
} from "../utils/languageUtils";
import { myLocalStorage, storage } from "../utils/storageUtils";
import { todayStartTime, isSameDay } from "../utils/dateUtils";
import { getUniquePhrases, setPhrasesTargetSrc } from "../utils/phraseUtils";
import { randomPermutation } from "../helpers";
import { BEGINNER_READ_SETTINGS } from "../playSentences/components/PlaySentenceSettings";
import loadPhraseFromDataFolder from "./loadPhraseFromDataFolder";
import { deepCopy } from "../utils/deepCopy";

// Add this line to define STORAGE_VERSION
const STORAGE_VERSION = "1.0"; // You can adjust this version as needed

const AppContext = createContext();

const LANGUAGE = {
  IL_HE: "he-IL",
  EN_US: "en-US",
  PT_BR: "pt-BR",
};

const RTL_LANG = [LANGUAGE.IL_HE];

export const AppProvider = ({ children }) => {
  const {
    locale,
    setLocale,
    appInitFlag,
    setAppInitFlag,
    phraseRange,
    setPhraseRange,
    isMenuOpen,
    setIsMenuOpen,
    theme,
    setTheme,
    allPhrases,
    setAllPhrases,
    phrases,
    setPhrases,
    readSettingsArray,
    setReadSettingsArray,
    phraseTranslation,
    setPhraseTranslation,
    availablePhraseTranslation,
    setAvailablePhraseTranslation,
    sourceLanguage,
    setSourceLanguage,
    targetLanguage,
    setTargetLanguage,
    sourceLanguageRate,
    setSourceLanguageRate,
    targetLanguageRate,
    setTargetLanguageRate,
    isSrcRtl,
    setIsSrcRtl,
    isTargetRtl,
    setIsTargetRtl,
    dailyCount,
    setDailyCount,
    currentPhraseIndex,
    setCurrentPhraseIndex,
    currentPhrase,
    setCurrentPhrase,
    toggleTheme,
    handleReverseLang,
    increasePhraseIndex,
  } = useAppStore();

  const currentPhraseIndexRef = useRef(currentPhraseIndex);

  const loadPhrasesTranslationFromStorage = async (
    phraseTranslation,
    inputLangList
  ) => {
    const languages =
      inputLangList ?? getLanguagesFromFileName(phraseTranslation);
    const phraseFromStorage = await storage.get(phraseTranslation);
    const storedAllPhrases = setPhrasesTargetSrc(
      phraseFromStorage,
      languages,
      targetLanguage,
      sourceLanguage
    );
    setAllPhrases(storedAllPhrases);
    setPhraseTranslation(phraseTranslation);
  };

  const initFlagRef = useRef(false);
  useEffect(() => {
    if (initFlagRef.current) return;
    initFlagRef.current = true;
    const initializeState = async () => {
      const storageVersion = myLocalStorage.get("STORAGE_VERSION");
      if (storageVersion !== STORAGE_VERSION) {
        localStorage.clear();
        myLocalStorage.set("STORAGE_VERSION", STORAGE_VERSION);
      }
      const storedTheme = myLocalStorage.get("theme", "light");
      setTheme(storedTheme);

      /// init language rate src/target
      setSourceLanguageRate(await storage.get("sourceLanguageRate", 1));
      setTargetLanguageRate(await storage.get("targetLanguageRate", 1));

      const translationFromFiles = (
        await import("@/data/availablePhraseTranslation.json")
      ).default;
      /// init Available Phrase Translation
      const storedAvailablePhraseTranslation = await storage.get(
        "availablePhraseTranslation",
        translationFromFiles
      );
      const allTranslations = [
        ...new Set([
          ...storedAvailablePhraseTranslation,
          ...translationFromFiles,
        ]),
      ];
      setAvailablePhraseTranslation(allTranslations);

      for (const avt of allTranslations) {
        const phrasesFromData = await loadPhraseFromDataFolder(avt);
        storage.set(avt, phrasesFromData);
      }

      /// init phrase range
      const storedPhraseRange = await storage.get("phraseRange", [
        1,
        phrases.length,
      ]);

      /// init all phrase
      let storedAllPhrases = myLocalStorage.get("allPhrases", null);
      if (!storedAllPhrases) {
        await loadPhrasesTranslationFromStorage(
          storedAvailablePhraseTranslation[0]
        );
      } else {
        setPhraseTranslation(
          await storage.get(
            "phraseTranslation",
            storedAvailablePhraseTranslation[0]
          )
        );

        setAllPhrases(storedAllPhrases);
      }

      ///
      setReadSettingsArray(
        await storage.get("readSettingsArray", deepCopy(BEGINNER_READ_SETTINGS))
      );

      const storedDailyCount = await storage.get("dailyCount", 0);
      setDailyCount(storedDailyCount);

      setLocale(
        await storage.get("locale", navigator.language.substring(0, 2))
      );

      ////////////////////////////////

      const todayTimestamp = todayStartTime();
      const storedCurrentDaytimeStamp = await storage.get(
        "currentDaytimeStamp"
      );
      if (!isSameDay(todayTimestamp, storedCurrentDaytimeStamp)) {
        // Reset the count if the current timestamp is not the same day as stored timestamp
        setDailyCount(0);
        storage.set("dailyCount", 0);
        storage.set("currentDaytimeStamp", todayTimestamp);
      }

      ////////////////////////////////
      setAppInitFlag(true);
    };

    initializeState();
  }, []);

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
    // debugger;
    setPhrases(randomPermutation(getPhrasesInRange()));
  }, [allPhrases, phraseRange, appInitFlag]);

  useEffect(() => {
    currentPhraseIndexRef.current = currentPhraseIndex;
  }, [currentPhraseIndex]);

  useEffect(() => {
    if (!phrases || !phrases.length) return;
    setCurrentPhrase(phrases[currentPhraseIndex]);
  }, [phrases]);

  const getPhrasesInRange = () =>
    allPhrases.slice(phraseRange[0], phraseRange[1] + 1);

  return (
    <AppContext.Provider
      value={{
        sourceLanguage,
        targetLanguage,
        sourceLanguageRate,
        targetLanguageRate,
        isSrcRtl,
        isTargetRtl,
        phrases,
        isMenuOpen,
        setIsMenuOpen,
        theme,
        toggleTheme,
        dailyCount,
        phraseRange,
        setPhraseRange,
        getPhrasesInRange,
        increasePhraseIndex,
        currentPhraseIndex,
        currentPhrase,
        allPhrases,
        readSettingsArray,
        setReadSettingsArray,
        getLanguageName: (type) =>
          getLanguageName(type, sourceLanguage, targetLanguage),
        locale,
        setLocale,
        availablePhraseTranslation,
        phraseTranslation,
        setPhraseTranslation,
        setTargetLanguage,
        setSourceLanguage,
        handleReverseLang,
        setAllPhrases,
        currentPhraseIndexRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
