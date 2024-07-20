import { createContext, useState, useContext, useEffect, useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";

const ScrambleContext = createContext();

export const ScrambleProvider = ({ children }) => {
  const { increasePhraseIndex, currentPhraseIndex, currentPhrase } =
    useAppContext();
  const { readAloud_target, cancel } = useSpeechSynthesis();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const [userBuffer, setUserBuffer] = useState("");
  const [numberOfWordClicked, setNumberOfWordClicked] = useState(0);

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playSentence = async () => {
    setIsReading(true);
    await readAloud_target(currentPhrase.target);
    setIsReading(false);
  };

  useEffect(() => {
    if (!currentPhrase || !isPlaying) {
      cancel();
      return;
    }
    playSentence();
  }, [isPlaying, currentPhraseIndex]);

  const skip = () => {
    cancel();
    increasePhraseIndex();
  };

  const resetUserBuffer = () => {
    setUserBuffer("");
  };
  const addToUserBuffer = ({ word, newUserBuffer }) => {
    setUserBuffer(newUserBuffer + " " + word);
  };

  ////////////////////////////////////////////////////////////////
  function deleteLastWord_helper(str) {
    const lastSpaceIndex = str.lastIndexOf(" ");
    if (lastSpaceIndex !== -1) {
      return str.slice(0, lastSpaceIndex);
    } else {
      // Handle case where there's no space (single word sentence)
      return "";
    }
  }

  ////////////////////////////////////////////////////////////////
  function deleteWord() {
    if (numberOfWordClicked <= 0) return;
    setNumberOfWordClicked(numberOfWordClicked - 1);
    setUserBuffer(deleteLastWord_helper(userBuffer.trim()));
  }

  ////////////////////////////////////////////////////////////////

  function getCurrentUserBufferArray() {
    return getCurrentUserBuffer().split(" ");
  }
  function getCurrentUserBuffer() {
    return userBuffer
      .trim()
      .replace(/punctuation/g, "")
      .toLocaleLowerCase();
  }
  return (
    <ScrambleContext.Provider
      value={{
        playPause,
        skip,
        currentPhrase,
        currentPhraseIndex,
        isPlaying,
        userBuffer,
        addToUserBuffer,
        resetUserBuffer,
        deleteWord,
        isReading,
        increasePhraseIndex,
        playSentence,
        numberOfWordClicked,
        setNumberOfWordClicked,
        deleteWord,
        getCurrentUserBuffer,
        getCurrentUserBufferArray,
      }}
    >
      {children}
    </ScrambleContext.Provider>
  );
};

export const useScrambleContext = () => useContext(ScrambleContext);
