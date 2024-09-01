import { myLocalStorage, storage } from "./storageUtils";
import { todayStartTime, isSameDay } from "./dateUtils";
import { loadPhrasesTranslationFromStorage } from "./loadPhrasesTranslationFromStorage";
import loadPhraseFromDataFolder from "../context/loadPhraseFromDataFolder";
import { deepCopy } from "./deepCopy";
import { BEGINNER_READ_SETTINGS } from "../exercises/playSentences/components/PlaySentenceSettings";
import { getLanguagesFromFileName } from "./languageUtils";

const STORAGE_VERSION = "1.0"; // You can adjust this version as needed

export const initializeState = async (useAppStore) => {
  const {
    setTheme,
    setSourceLanguageRate,
    setTargetLanguageRate,
    setAvailablePhraseTranslation,
    setPhraseTranslation,
    setAllPhrases,
    setReadSettingsArray,
    setDailyCount,
    setLocale,
    setAppInitFlag,
    setPhraseRange,
    setMaxNumberOfWordsInPhrase,
    setLlmApiKey,
    setLlmModel,
    setGoogleTranslatorApiKey,
  } = useAppStore.getState();

  const storageVersion = myLocalStorage.get("STORAGE_VERSION");
  if (storageVersion !== STORAGE_VERSION) {
    localStorage.clear();
    myLocalStorage.set("STORAGE_VERSION", STORAGE_VERSION);
  }
  const storedTheme = myLocalStorage.get("theme", "light");
  setTheme(storedTheme);

  setSourceLanguageRate(await storage.get("sourceLanguageRate", 1));
  setTargetLanguageRate(await storage.get("targetLanguageRate", 1));

  const translationFromFiles = (
    await import("@/data/availablePhraseTranslation.json")
  ).default;
  const storedAvailablePhraseTranslation = await storage.get(
    "availablePhraseTranslation",
    translationFromFiles
  );
  const allTranslations = [
    ...new Set([...storedAvailablePhraseTranslation, ...translationFromFiles]),
  ];
  setAvailablePhraseTranslation(allTranslations);

  for (const avt of allTranslations) {
    const phrasesFromData = await loadPhraseFromDataFolder(avt);
    storage.set(avt, phrasesFromData);
  }

  let storedAllPhrases = myLocalStorage.get("allPhrases", null);
  if (!storedAllPhrases) {
    storedAllPhrases = await loadPhrasesTranslationFromStorage(
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

  setReadSettingsArray(
    await storage.get("readSettingsArray", deepCopy(BEGINNER_READ_SETTINGS))
  );

  const storedDailyCount = await storage.get("dailyCount", 0);
  setDailyCount(storedDailyCount);

  setLocale(await storage.get("locale", navigator.language.substring(0, 2)));

  const todayTimestamp = todayStartTime();
  const storedCurrentDaytimeStamp = await storage.get("currentDaytimeStamp");
  if (!isSameDay(todayTimestamp, storedCurrentDaytimeStamp)) {
    setDailyCount(0);
    storage.set("dailyCount", 0);
    storage.set("currentDaytimeStamp", todayTimestamp);
  }

  // Initialize phraseRange from storage or set default
  const storedPhraseRange = await storage.get("phraseRange", [
    0,
    storedAllPhrases.length,
  ]);
  setPhraseRange(storedPhraseRange);

  // Initialize maxNumberOfWordsInPhrase from storage or set default
  const storedMaxWords = await storage.get("maxNumberOfWordsInPhrase", null);
  setMaxNumberOfWordsInPhrase(storedMaxWords <= 0 ? null : storedMaxWords);

  // Initialize new parameters from storage or set default
  const storeLlmApiKey = await storage.get("llmApiKey", "");
  console.log("storeLlmApiKey", storeLlmApiKey);
  setLlmApiKey(storeLlmApiKey);
  setLlmModel(await storage.get("llmModel", "gpt-3.5-turbo"));
  setGoogleTranslatorApiKey(await storage.get("googleTranslatorApiKey", ""));

  setAppInitFlag(true);
};
