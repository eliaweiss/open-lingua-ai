import useAppStore from "@/app/store/appStore";
import { cancelSpeech } from "@/app/utils/speechUtils";
import { create } from "zustand";

export const TranslateDirection = {
  TARGET_TO_SOURCE: "target_to_source",
  SOURCE_TO_TARGET: "source_to_target",
};

const useTranslateExerciseStore = create((set, get) => ({
  originalText: "",
  setOriginalText: (text) => set({ originalText: text }),
  suggestedTranslatedText: "",
  setSuggestedTranslatedText: (text) => set({ suggestedTranslatedText: text }),
  hintClickCounter: 0,
  setHintClickCounter: (counter) => set({ hintClickCounter: counter }),
  translateDirection: TranslateDirection.TARGET_TO_SOURCE,
  setTranslateDirection: (direction) => set({ translateDirection: direction }),
  isOriginalTextRtl: false,
  setIsOriginalTextRtl: (isRtl) => set({ isOriginalTextRtl: isRtl }),
  originLanguage: "",
  setOriginLanguage: (language) => set({ originLanguage: language }),
  translateToLanguage: "",
  setTranslateToLanguage: (language) => set({ translateToLanguage: language }),
  yourTranslatedText: "",
  setYourTranslatedText: (text) => set({ yourTranslatedText: text }),
  llmResponse: "",
  setLlmResponse: (response) => set({ llmResponse: response }),
  showSuggestedTranslatedText: false,
  setShowSuggestedTranslatedText: (show) =>
    set({ showSuggestedTranslatedText: show }),

  isTranslationCorrect: false,
  setIsTranslationCorrect: (correct) => set({ isTranslationCorrect: correct }),

  ////////////////////////////////////////////////////////////////
  // manage the exercise play/pause/skip functionality
  skip: () => {
    const { increasePhraseIndex } = useAppStore.getState();
    cancelSpeech();
    increasePhraseIndex();
  },

  resetExercise: () => {
    set({
      yourTranslatedText: "",
      llmResponse: "",
      showSuggestedTranslatedText: false,
      isTranslationCorrect: false,
    });
  },
}));

export default useTranslateExerciseStore;
