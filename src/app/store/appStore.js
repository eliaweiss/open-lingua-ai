import { create } from "zustand";
import { BEGINNER_READ_SETTINGS } from "../playSentences/components/PlaySentenceSettings";
import { deepCopy } from "../utils/deepCopy";
import { getUniquePhrases } from "../utils/phraseUtils";
import { randomPermutation } from "../helpers"; // Add this import

const useAppStore = create((set, get) => ({
  locale: "en",
  setLocale: (locale) => set({ locale }),

  appInitFlag: false,
  setAppInitFlag: (flag) => set({ appInitFlag: flag }),

  phraseRange: [0, 0],
  setPhraseRange: (range) => set({ phraseRange: range }),

  isMenuOpen: false,
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),

  theme: "light",
  setTheme: (theme) => set({ theme }),

  allPhrases: [],
  setAllPhrases: (newPhrases) => {
    const uniquePhrases = getUniquePhrases(newPhrases);
    // console.log("uniquePhrases", uniquePhrases.length);
    set({
      allPhrases: uniquePhrases,
      phraseRange: [0, uniquePhrases.length],
    });
  },

  phrases: [],
  setPhrases: (phrases) => {
    const uniquePhrases = getUniquePhrases(phrases);
    console.log("setPhrases", uniquePhrases.length);
    set({ phrases: uniquePhrases });
  },

  readSettingsArray: deepCopy(BEGINNER_READ_SETTINGS),
  setReadSettingsArray: (settings) => set({ readSettingsArray: settings }),

  phraseTranslation: undefined,
  setPhraseTranslation: (translation) =>
    set({ phraseTranslation: translation }),

  availablePhraseTranslation: [],
  setAvailablePhraseTranslation: (translations) =>
    set({ availablePhraseTranslation: translations }),

  sourceLanguage: "en-US",
  setSourceLanguage: (lang) => set({ sourceLanguage: lang }),

  targetLanguage: "pt-BR",
  setTargetLanguage: (lang) => set({ targetLanguage: lang }),

  sourceLanguageRate: 1,
  setSourceLanguageRate: (rate) => set({ sourceLanguageRate: rate }),

  targetLanguageRate: 1,
  setTargetLanguageRate: (rate) => set({ targetLanguageRate: rate }),

  isSrcRtl: false,
  setIsSrcRtl: (isRtl) => set({ isSrcRtl: isRtl }),

  isTargetRtl: false,
  setIsTargetRtl: (isRtl) => set({ isTargetRtl: isRtl }),

  dailyCount: 0,
  setDailyCount: (count) => set({ dailyCount: count }),

  currentPhraseIndex: 0,
  setCurrentPhraseIndex: (index) => set({ currentPhraseIndex: index }),

  currentPhrase: null,
  setCurrentPhrase: (phrase) => set({ currentPhrase: phrase }),

  // Add other state variables and their setters here...

  // Some functions that directly manipulate the state can stay in the store
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),

  handleReverseLang: () =>
    set((state) => ({
      targetLanguage: state.sourceLanguage,
      sourceLanguage: state.targetLanguage,
    })),

  increasePhraseIndex: () => {
    const {
      currentPhraseIndex,
      phrases,
      setCurrentPhraseIndex,
      setCurrentPhrase,
      setDailyCount,
      setPhrases,
      getPhrasesInRange,
    } = get();
    let nextIndex = currentPhraseIndex + 1;
    if (nextIndex >= phrases.length) {
      nextIndex = 0;
      setPhrases(randomPermutation(getPhrasesInRange())); // Use getPhrasesInRange here
    }
    setCurrentPhraseIndex(nextIndex);
    setCurrentPhrase(phrases[nextIndex]);
    setDailyCount((count) => count + 1);
    return nextIndex;
  },

  getPhrasesInRange: () => {
    const { allPhrases, phraseRange } = get();
    return allPhrases.slice(phraseRange[0], phraseRange[1] + 1);
  },

  // ... other functions that directly manipulate state
}));

export default useAppStore;
