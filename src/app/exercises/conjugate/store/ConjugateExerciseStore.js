import { create } from "zustand";

const useConjugateExerciseStore = create((set, get) => ({
  isConjugateExerciseStoreInit: false,
  setIsConjugateExerciseStoreInit: (isInit) => set({ isInit: isInit }),

  // State
  exerciseCounter: 0,
  setExerciseCounter: (counter) => set({ exerciseCounter: counter }),

  exerciseData: [],
  setExerciseData: (data) => set({ exerciseData: data }),
  exerciseIndex: 0,
  setExerciseIndex: (index) => set({ exerciseIndex: index }),
  answer: "",
  setAnswer: (answer) => set({ answer: answer }),
  showCorrectAnswer: false,
  setShowCorrectAnswer: (show) => set({ showCorrectAnswer: show }),
  checkAnswerResponse: "",
  setCheckAnswerResponse: (response) => set({ checkAnswerResponse: response }),

  tenses: [],
  setTenses: (tenses) => set({ tenses: tenses }),

  currentExercise: null,
  setCurrentExercise: (exercise) => set({ currentExercise: exercise }),

  showTranslation: false,
  setShowTranslation: (show) => set({ showTranslation: show }),

  showTense: false,
  setShowTense: (show) => set({ showTense: show }),

  explanation: "",
  setExplanation: (explanation) => set({ explanation: explanation }),

  getCurrentExercise: () => {
    const { exerciseData, exerciseIndex } = get();
    return exerciseData[exerciseIndex];
  },
  verbList: "",
  setVerbList: (list) => set({ verbList: list }),

  resetExercise: () =>
    set({
      showTranslation: false,
      checkAnswerResponse: "",
      answer: "",
      showCorrectAnswer: false,
      showTense: false,
    }),
  resetExerciseCounter: () => set({ exerciseCounter: 0 }),
}));

export default useConjugateExerciseStore;
