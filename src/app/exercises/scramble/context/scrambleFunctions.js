import { useRef } from "react";
import { useAppContext } from "../../../context/AppContext";
import { useSpeechSynthesis } from "../../../context/SpeechSynthesisContext";
import {
  randomPermutation,
  removeDuplicates,
  splitToWords,
} from "../../../helpers";
import { storage } from "@/app/utils/storageUtils";
import useScrambleStore from "../store/useScrambleStore";

export function useScrambleFunctions() {
  const {
    increasePhraseIndex,
    currentPhraseIndex,
    currentPhrase,
    appInitFlag,
  } = useAppContext();
  const { readAloud_target, cancelSpeech, splitIntoSubSentences } =
    useSpeechSynthesis();

  const {
    wordsTxt,
    setWordsTxt,
    scrambledWordsTxt,
    setScrambledWordsTxt,
    showSuccessNotice,
    setShowSuccessNotice,
    showFailNotice,
    setShowFailNotice,
    isPlaying,
    setIsPlaying,
    isReading_playSentence,
    setIsReading_playSentence,
    isReading_wordClick,
    setIsReading_wordClick,
    isReading_partOfSentence,
    setIsReading_partOfSentence,
    userBufferArray,
    setUserBufferArray,

    hintClickCounter,
    setHintClickCounter,
    exerciseCounter,
    setExerciseCounter,
    isScrambleExerciseStoreInit,
    setIsScrambleExerciseStoreInit,
  } = useScrambleStore();

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playSentence = async () => {
    setIsReading_playSentence(true);
    try {
      await readAloud_target(currentPhrase.target);
    } finally {
      setIsReading_playSentence(false);
    }
  };

  const skip = () => {
    cancelSpeech();
    increasePhraseIndex();
  };

  function getWordClickBuffer(wordClickBuffer) {
    let buffer = "";
    for (const word of wordClickBuffer) {
      buffer += " " + word;
    }
    return buffer;
  }

  const addToUserBuffer = ({ word, newUserBufferArray }) => {
    if (!newUserBufferArray) newUserBufferArray = userBufferArray;
    setUserBufferArray([...newUserBufferArray, word]);
  };

  function getCurrentUserBufferArray() {
    return userBufferArray;
  }

  function getCurrentUserBuffer() {
    let buffer = "";
    for (const { txt } of userBufferArray) {
      buffer += " " + txt;
    }
    return buffer;
  }

  function handleDeleteWordBtn() {
    if (userBufferArray.length <= 0) return;
    setUserBufferArray(userBufferArray.slice(0, userBufferArray.length - 1));
  }

  return {
    playPause,
    playSentence,
    skip,
    addToUserBuffer,
    getCurrentUserBufferArray,
    getCurrentUserBuffer,
    handleDeleteWordBtn,
    getWordClickBuffer,
  };
}
