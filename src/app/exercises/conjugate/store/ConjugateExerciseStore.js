import { create } from "zustand";

const useConjugateExerciseStore = create((set, get) => ({
  // State
  exerciseData: null,
  setExerciseData: (data) => set({ exerciseData: data }),
  exerciseIndex: 0,
  setExerciseIndex: (index) => set({ exerciseIndex: index }),

  getCurrentExercise: () => {
    const { exerciseData, exerciseIndex } = get();
    return exerciseData[exerciseIndex];
  },

  resetExercise: () => set({ exerciseData: null, exerciseIndex: 0 }),
}));

export default useConjugateExerciseStore;
