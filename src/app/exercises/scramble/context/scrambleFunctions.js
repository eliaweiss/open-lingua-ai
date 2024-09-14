import { useAppContext } from "../../../context/AppContext";
import { useSpeechSynthesis } from "../../../context/SpeechSynthesisContext";

import useScrambleStore from "../store/useScrambleStore";

export function useScrambleFunctions() {
  const { increasePhraseIndex, currentPhrase } = useAppContext();
  const { readAloud_target, cancelSpeech } = useSpeechSynthesis();

  const {
    isPlaying,
    setIsPlaying,
    setIsReading_playSentence,
    userBufferArray,
    setUserBufferArray,
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
