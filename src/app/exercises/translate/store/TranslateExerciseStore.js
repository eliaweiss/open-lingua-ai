import create from "zustand";

const useTranslateExerciseStore = create((set) => ({
  originalText: "",
  setOriginalText: (text) => set({ originalText: text }),
  translatedText: "",
  setTranslatedText: (text) => set({ translatedText: text }),
  hintClickCounter: 0,
  setHintClickCounter: (counter) => set({ hintClickCounter: counter }),
  //   skip: () => {
  //     cancelSpeech();
  //     increasePhraseIndex();
  //   },
}));

export default useTranslateExerciseStore;
