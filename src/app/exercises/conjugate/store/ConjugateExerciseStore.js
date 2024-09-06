import { create } from "zustand";

const useConjugateExerciseStore = create((set, get) => ({
  // State
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

  currentExercise: null,
  setCurrentExercise: (exercise) => set({ currentExercise: exercise }),

  showTense: false,
  setShowTense: (show) => set({ showTense: show }),

  getCurrentExercise: () => {
    const { exerciseData, exerciseIndex } = get();
    return exerciseData[exerciseIndex];
  },
  verbList: "",
  setVerbList: (list) => set({ verbList: list }),

  resetExercise: () =>
    set({
      checkAnswerResponse: "",
      answer: "",
      showCorrectAnswer: false,
      showTense: false,
    }),
}));

export default useConjugateExerciseStore;
