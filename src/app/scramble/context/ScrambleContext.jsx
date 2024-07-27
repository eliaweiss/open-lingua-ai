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
  const { readAloud_target, cancel, randomPermutation, splitIntoSubSentences } =
    useSpeechSynthesis();

  const [scrambledWords, setScrambledWords] = useState([]);
  const [words, setWords] = useState([]);
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);
  const [showFailNotice, setShowFailNotice] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isReading_playSentence, setIsReading_playSentence] = useState(false);
  const [isReading_wordClick, setIsReading_wordClick] = useState(false);

  const [userBufferArray, setUserBufferArray] = useState([]);
  const userBufferArrayRef = useRef(userBufferArray);
  const [wordClickBuffer, setWordClickBuffer] = useState([]);
  const wordClickBufferRef = useRef(wordClickBuffer);

  const [isPlaying_partOfSentence, setIsPlaying_partOfSentence] =
    useState(false);

  const addToWordClickBuffer = (word) => {
    const newBuff = [...wordClickBuffer, word];
    setWordClickBuffer(newBuff);
    // console.log("getWordClickBuffer", getWordClickBuffer(newBuff));
  };

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
  ////////////////////////////////////////////////////////////////

  const readClickBuffer = async () => {
    if (isReading_wordClick) return;
    setIsReading_wordClick(true);
    try {
      while (wordClickBufferRef.current.length > 0) {
        let buffer = getWordClickBuffer(wordClickBufferRef.current);
        // console.log("buffer", buffer);
        setWordClickBuffer([]);
        await readAloud_target(buffer, 1.25);
      }
    } finally {
      setIsReading_wordClick(false);
    }
    checkIfBufferIsComplete();
  };

  useEffect(() => {
    wordClickBufferRef.current = wordClickBuffer;

    readClickBuffer();
  }, [wordClickBuffer]);

  ////////////////////////////////////////////////////////////////
  function isBufferComplete() {
    const wordsInBuffer = userBufferArrayRef.current;
    // console.log(wordsInBuffer.length, words.length);
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
    const currentUserBuff = userBufferArrayRef.current;
    if (currentUserBuff.length === 0) return;
    if (currentUserBuff.length >= words.length) {
      // Check if user buffer matches the original sentence (excluding punctuation)
      if (isBufferComplete()) {
        setShowFailNotice(false);
        setWordClickBuffer([]);
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

  ////////////////////////////////////////////////////////////////
  const playPartOfSentence = async () => {
    if (isPlaying_partOfSentence) {
      cancel();
      setIsPlaying_partOfSentence(false);
      return;
    }
    setIsPlaying_partOfSentence(true);
    const doPlay = async () => {
      try {
        const text = currentPhrase.target.toLocaleLowerCase();
        const subSentenceList = splitIntoSubSentences(text);
        for (let subSentence of subSentenceList) {
          await readAloud_target(subSentence);
          if (!getCurrentUserBuffer().includes(subSentence)) {
            break;
          }
        }
      } finally {
        setIsPlaying_partOfSentence(false);
        setIsReading_wordClick(false);
        readClickBuffer();
      }
    };

    doPlay();
  };
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
        playPartOfSentence,
        isPlaying_partOfSentence,
      }}
    >
      {children}
    </ScrambleContext.Provider>
  );
};

export const useScrambleContext = () => useContext(ScrambleContext);
