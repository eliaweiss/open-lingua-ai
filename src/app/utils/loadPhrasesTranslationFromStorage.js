import { storage } from "./storageUtils";
import { getLanguagesFromFileName } from "./languageUtils";
import { setPhrasesTargetSrc } from "./phraseUtils";
import useAppStore from "../store/appStore";

export const loadPhrasesTranslationFromStorage = async (
  phraseTranslation,
  inputLangList
) => {
  const {
    targetLanguage,
    sourceLanguage,
    setAllPhrases,
    setPhraseTranslation,
    resetPhraseRangeFlag,
    setResetPhraseRangeFlag,
    setPhraseRange,
  } = useAppStore.getState();

  const languages =
    inputLangList ?? getLanguagesFromFileName(phraseTranslation);
  const phraseFromStorage = await storage.get(phraseTranslation);
  const storedAllPhrases = setPhrasesTargetSrc(
    phraseFromStorage,
    languages,
    targetLanguage,
    sourceLanguage
  );
  setPhraseTranslation(phraseTranslation);
  const phrases = setAllPhrases(storedAllPhrases);
  if (resetPhraseRangeFlag) {
    setPhraseRange([0, phrases.length]);
    setResetPhraseRangeFlag(false);
  }
  return phrases;
};
