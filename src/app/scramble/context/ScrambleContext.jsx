import { createContext, useState, useContext, useEffect, useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";

const ScrambleContext = createContext();

export const ScrambleProvider = ({ children }) => {
  const { increasePhraseIndex, currentPhraseIndex, currentPhrase } =
    useAppContext();
  const { readAloud_target, cancel, isReading } = useSpeechSynthesis();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isReading_playSentence, setIsReading_playSentence] = useState(false);

  const [userBufferArray, setUserBufferArray] = useState([]);
  const [wordClickBuffer, setWordClickBuffer] = useState([]);
  const wordClickBufferRef = useRef(wordClickBuffer);

  useEffect(() => {
    wordClickBufferRef.current = wordClickBuffer;
  }, [wordClickBuffer]);

  const addToWordClickBuffer = (word) => {
    const newBuff = [...wordClickBuffer, word];
    setWordClickBuffer(newBuff);
    console.log("getWordClickBuffer", getWordClickBuffer(newBuff));
  };


  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playSentence = async () => {
    setIsReading_playSentence(true);
    await readAloud_target(currentPhrase.target);
    setIsReading_playSentence(false);
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
    addToWordClickBuffer(word.word);
  };

  function getWordClickBuffer(wordClickBuffer) {
    let buffer = "";
    for (const word of wordClickBuffer) {
      buffer += " " + word;
    }
    return buffer;
  }

  useEffect(() => {
    if (isReading) return;
    const readClickBuffer = async () => {
      while (wordClickBufferRef.current.length > 0) {
        let buffer = getWordClickBuffer(wordClickBufferRef.current);
        console.log("buffer", buffer);
        setWordClickBuffer([]);
        await readAloud_target(buffer, 1.25);
      }
    };
    readClickBuffer();
  }, [wordClickBuffer]);

  const addToUserBuffer = ({ word, newUserBufferArray = [] }) => {
    setUserBufferArray([...newUserBufferArray, word]);
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
        isReading_playSentence,
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
