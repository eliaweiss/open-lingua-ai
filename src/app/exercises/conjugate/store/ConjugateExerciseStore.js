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

  getCurrentExercise: () => {
    const { exerciseData, exerciseIndex } = get();
    return exerciseData[exerciseIndex];
  },

  resetExercise: () =>
    set({
      answer: "",
      showCorrectAnswer: false,
    }),
}));

export default useConjugateExerciseStore;
