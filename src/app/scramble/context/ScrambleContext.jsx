import { createContext, useState, useContext, useEffect, useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";

const ScrambleContext = createContext();

function removeDuplicates(words) {
  // Use a Set to automatically handle duplicates
  let uniqueWords = new Set(words);

  // Convert the Set back to an array
  return Array.from(uniqueWords);
}

function removeDotAtEnd(sentence) {
  if (sentence.endsWith(".")) {
    return sentence.slice(0, -1); // Remove the last character
  }
  return sentence;
}

export const ScrambleProvider = ({ children }) => {
  const { increasePhraseIndex, currentPhraseIndex, currentPhrase } =
    useAppContext();
  const { readAloud_target, cancel, isReading, randomPermutation } =
    useSpeechSynthesis();
  const [scrambledWords, setScrambledWords] = useState([]);
  const [words, setWords] = useState([]);
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);
  const [showFailNotice, setShowFailNotice] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isReading_playSentence, setIsReading_playSentence] = useState(false);

  const [userBufferArray, setUserBufferArray] = useState([]);
  const userBufferArrayRef = useRef(userBufferArray);
  const [wordClickBuffer, setWordClickBuffer] = useState([]);
  const wordClickBufferRef = useRef(wordClickBuffer);

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
    userBufferArrayRef.current = userBufferArray;
  }, [userBufferArray]);

  useEffect(() => {
    wordClickBufferRef.current = wordClickBuffer;
    if (isReading) return;
    const readClickBuffer = async () => {
      while (wordClickBufferRef.current.length > 0) {
        let buffer = getWordClickBuffer(wordClickBufferRef.current);
        console.log("buffer", buffer);
        setWordClickBuffer([]);
        await readAloud_target(buffer, 1.25);
      }
      checkIfBufferIsComplete();
    };
    readClickBuffer();
  }, [wordClickBuffer]);

  ////////////////////////////////////////////////////////////////
  function isBufferComplete() {
    const wordsInBuffer = getCurrentUserBufferArray();
    if (wordsInBuffer.length !== words.length) {
      return false;
    }

    for (let i = 0; i < wordsInBuffer.length; i++) {
      if (wordsInBuffer[i].word !== words[i]) {
        return false;
      }
    }

    return true;
  }

  ////////////////////////////////////////////////////////////////

  function checkIfBufferIsComplete() {
    const currentUserBuff = getCurrentUserBufferArray();
    if (currentUserBuff.length === 0) return;
    if (currentUserBuff.length == words.length) {
      // Check if user buffer matches the original sentence (excluding punctuation)
      if (isBufferComplete()) {
        setShowFailNotice(false);

        setScrambledWords([]);
        setShowSuccessNotice(true);
        setTimeout(() => {
          increasePhraseIndex();
          setShowSuccessNotice(false);
        }, 1000);
      } else {
        setShowFailNotice(true);
        playSentence().then(() => {
          setShowFailNotice(false);
        });
      }

      resetUserBuffer();
    }
  }
  ////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   if (getCurrentUserBufferArray().length === 0) return;
  //   checkIfBufferIsComplete();

  // }, [userBufferArray]);

  ////////////////////////////////////////////////////////////////

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
    return userBufferArrayRef.current;
  }
  function getCurrentUserBuffer() {
    let buffer = "";
    for (const { word } of userBufferArray) {
      buffer += " " + word;
    }
    return buffer;
  }

  ////////////////////////////////////////////////////////////////

  const scrambleSentence = () => {
    if (!currentPhrase) return;
    setShowFailNotice(false);

    // Get the current Portuguese sentence
    const words = splitToWords(currentPhrase.target); // Split into words

    // Randomly scramble the words
    const scrambledWordsTmp = removeDuplicates(randomPermutation(words));
    console.log("scrambledWords", scrambledWordsTmp);
    setScrambledWords(scrambledWordsTmp);

    // Clear user buffer and display area
    resetUserBuffer();
  };

  ////////////////////////////////////////////////////////////////
  function splitToWords(currentSentence) {
    currentSentence = removeDotAtEnd(currentSentence)
      .replace(", ", " ")
      .replace(". ", " ")
      .replace("?", "")
      .replace(/punctuation/g, "");
    let words = currentSentence.toLocaleLowerCase().split(" "); // Split into words
    setWords(words);
    return words;
  }

  ////////////////////////////////////////////////////////////////

  useEffect(() => {
    scrambleSentence();
  }, [currentPhrase]);

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
        showFailNotice,
        showSuccessNotice,
        scrambledWords,
        words,
        scrambleSentence,
      }}
    >
      {children}
    </ScrambleContext.Provider>
  );
};

export const useScrambleContext = () => useContext(ScrambleContext);
