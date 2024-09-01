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
  translatedText: "",
  setTranslatedText: (text) => set({ translatedText: text }),
  hintClickCounter: 0,
  setHintClickCounter: (counter) => set({ hintClickCounter: counter }),
  translateDirection: TranslateDirection.TARGET_TO_SOURCE,
  setTranslateDirection: (direction) => set({ translateDirection: direction }),
  isOriginalTextRtl: false,
  setIsOriginalTextRtl: (isRtl) => set({ isOriginalTextRtl: isRtl }),
  targetLanguage: "",
  setTargetLanguage: (language) => set({ targetLanguage: language }),
  sourceLanguage: "",
  setSourceLanguage: (language) => set({ sourceLanguage: language }),

  ////////////////////////////////////////////////////////////////
  // manage the exercise play/pause/skip functionality
  skip: () => {
    const { increasePhraseIndex } = useAppStore.getState();
    cancelSpeech();
    increasePhraseIndex();
  },
}));

export default useTranslateExerciseStore;
