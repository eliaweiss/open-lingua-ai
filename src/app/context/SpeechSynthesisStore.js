import { create } from "zustand";
const useSpeechSynthesisStore = create((set, get) => ({
  isReading: false,
  setIsReading: (isReading) => set({ isReading }),
}));

export default useSpeechSynthesisStore;
