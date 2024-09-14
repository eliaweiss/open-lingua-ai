import { create } from "zustand";

// Zustand store
const useScrambleStore = create((set) => ({
  // words txt buffers original and scramble
  wordsTxt: [],
  setWordsTxt: (wordsTxt) => set({ wordsTxt }),
  scrambledWordsTxt: [],
  setScrambledWordsTxt: (scrambledWordsTxt) => set({ scrambledWordsTxt }),

  // flags
  showSuccessNotice: false,
  setShowSuccessNotice: (showSuccessNotice) => set({ showSuccessNotice }),
  showFailNotice: false,
  setShowFailNotice: (showFailNotice) => set({ showFailNotice }),

  // exercise play/pause
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),

  // true if the current phrase is playing - use to show/hide words btns
  isReading_playSentence: false,
  setIsReading_playSentence: (isReading_playSentence) =>
    set({ isReading_playSentence }),

  // isReading_wordClick and isReading_partOfSentence is used to synchronize reading words clicks
  isReading_wordClick: false,
  setIsReading_wordClick: (isReading_wordClick) => set({ isReading_wordClick }),

  isReading_partOfSentence: false,
  setIsReading_partOfSentence: (isReading_partOfSentence) =>
    set({ isReading_partOfSentence }),

  // buffer the words
  wordClickBufferRef: null,
  setWordClickBufferRef: (wordClickBufferRef) => set({ wordClickBufferRef }),

  // user buffer
  userBufferArray: [],
  setUserBufferArray: (userBufferArray) => set({ userBufferArray }),
  userBufferArrayRef: [],

  // handle double click
  hintClickCounter: 0,
  setHintClickCounter: (hintClickCounter) => set({ hintClickCounter }),

  // exercise counter
  exerciseCounter: null,
  setExerciseCounter: (exerciseCounter) => set({ exerciseCounter }),

  // store initialization flag
  isScrambleExerciseStoreInit: false,
  setIsScrambleExerciseStoreInit: (isScrambleExerciseStoreInit) =>
    set({ isScrambleExerciseStoreInit }),
}));

export default useScrambleStore;
