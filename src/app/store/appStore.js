import { create } from "zustand";
import { BEGINNER_READ_SETTINGS } from "../exercises/playSentences/components/PlaySentenceSettings";
import { deepCopy } from "../utils/deepCopy";
import { getUniquePhrases } from "../utils/phraseUtils";
import { randomPermutation } from "../helpers"; // Add this import

const useAppStore = create((set, get) => ({
  // llm settings
  llmApiKey: "",
  setLlmApiKey: (key) => set({ llmApiKey: key }),

  llmModel: "gpt-4o-mini",
  setLlmModel: (model) => set({ llmModel: model }),

  googleTranslatorApiKey: "",
  setGoogleTranslatorApiKey: (key) => set({ googleTranslatorApiKey: key }),

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
      //   phraseRange: [0, uniquePhrases.length],
    });
    return uniquePhrases;
  },

  phrases: [],
  setPhrases: (phrases) => {
    const uniquePhrases = getUniquePhrases(phrases);
    // console.log("setPhrases", uniquePhrases.length);
    set({ phrases: uniquePhrases });
  },

  readSettingsArray: deepCopy(BEGINNER_READ_SETTINGS),
  setReadSettingsArray: (settings) => set({ readSettingsArray: settings }),

  resetPhraseRangeFlag: false,
  setResetPhraseRangeFlag: (flag) => set({ resetPhraseRangeFlag: flag }),

  phraseTranslation: undefined,
  setPhraseTranslation: (translation, resetPhraseRangeFlag = false) => {
    set({ phraseTranslation: translation });
    set({ resetPhraseRangeFlag: resetPhraseRangeFlag });
  },

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

  currentPhraseIndexRef: { current: 0 },
  updateCurrentPhraseIndexRef: () => {
    get().currentPhraseIndexRef.current = get().currentPhraseIndex;
  },

  currentPhrase: null,
  setCurrentPhrase: (phrase) => set({ currentPhrase: phrase }),

  maxNumberOfWordsInPhrase: null,
  setMaxNumberOfWordsInPhrase: (max) => {
    if (max < 1) {
      max = null;
    }
    set({ maxNumberOfWordsInPhrase: max });
  },

  // Add other state variables and their setters here...

  //   // Some functions that directly manipulate the state can stay in the store
  toggleTheme: () => {
    const { theme } = get();
    const newTheme = theme === "light" ? "dark" : "light";
    set({ theme: newTheme });
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  },

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
      dailyCount,
      setDailyCount,
      setPhrases,
      getPhrasesInRange,
    } = get();
    let nextIndex = currentPhraseIndex + 1;
    if (nextIndex >= phrases.length) {
      nextIndex = 0;
      const newPhrases = randomPermutation(getPhrasesInRange());
      setPhrases(newPhrases); // Use getPhrasesInRange here
      //   debugger;
      setCurrentPhrase(newPhrases[nextIndex]);
    } else {
      setCurrentPhrase(phrases[nextIndex]);
    }

    setCurrentPhraseIndex(nextIndex);
    setDailyCount(dailyCount + 1);
    return nextIndex;
  },

  getPhrasesInRange: () => {
    const { allPhrases, phraseRange } = get();
    return allPhrases.slice(phraseRange[0], phraseRange[1] + 1);
  },

  // ... other functions that directly manipulate state
  getLanguageName: (type) => {
    const { sourceLanguage, targetLanguage } = get();
    if (type === "target") return targetLanguage;
    if (type === "src") return sourceLanguage;
  },

  isLoadingCounter: 0,
  isLoadingAppFlag: true,
  _setIsLoadingAppFlag: (value) => set({ isLoadingAppFlag: value }),
  setIsLoadingAppCounter: (value) => {
    let delta = 1;
    if (!value) {
      delta = -1;
    }
    const newCounter = get().isLoadingCounter + delta;
    set({
      isLoadingCounter: newCounter,
    });
    // set({ isLoadingAppFlag: newCounter > 0 });
  },
}));

export default useAppStore;
