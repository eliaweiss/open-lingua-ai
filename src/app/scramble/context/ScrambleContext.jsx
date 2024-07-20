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

  const [userBufferArray, setUserBufferArray] = useState([]);

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

  ////////////////////////////////////////////////////////////////

  const resetUserBuffer = () => {
    setUserBufferArray([]);
  };

  ////////////////////////////////////////////////////////////////
  const handleWordClick = async ({ word, newUserBufferArray }) => {
    if (!newUserBufferArray) newUserBufferArray = userBufferArray;
    addToUserBuffer({ word, newUserBufferArray });
    await readAloud_target(word, 1.25);
  };

  const addToUserBuffer = ({ word, newUserBufferArray = [] }) => {
    setUserBufferArray([...newUserBufferArray, { word }]);
  };

  ////////////////////////////////////////////////////////////////
  function deleteWord() {
    if (userBufferArray.length <= 0) return;
    setUserBufferArray(userBufferArray.slice(0, userBufferArray.length - 1));
  }

  ////////////////////////////////////////////////////////////////

  function getCurrentUserBufferArray() {
    return userBufferArray;
  }
  function getCurrentUserBuffer() {
    let buffer = "";
    for (const { word } of userBufferArray) {
      buffer += " " + word;
    }
    return buffer;
  }

  return (
    <ScrambleContext.Provider
      value={{
        playPause,
        skip,
        currentPhrase,
        currentPhraseIndex,
        isPlaying,
        addToUserBuffer,
        resetUserBuffer,
        deleteWord,
        isReading,
        increasePhraseIndex,
        playSentence,
        deleteWord,
        getCurrentUserBuffer,
        getCurrentUserBufferArray,
        userBufferArray,
        handleWordClick,
      }}
    >
      {children}
    </ScrambleContext.Provider>
  );
};

export const useScrambleContext = () => useContext(ScrambleContext);
