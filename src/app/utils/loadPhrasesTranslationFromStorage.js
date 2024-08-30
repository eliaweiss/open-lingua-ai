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
  return setAllPhrases(storedAllPhrases);
};
