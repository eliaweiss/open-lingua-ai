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
  const [hintClickCounter, setHintClickCounter] = useState(0);

  // exercise play/pause
  const [isPlaying, setIsPlaying] = useState(false);
  // true if the current phrase is playing - use to show/hide words btns
  const [isReading_playSentence, setIsReading_playSentence] = useState(false);

  // isReading_wordClick and isReading_partOfSentence is used to synchronize reading words clicks
  // if we are reading a word or part of a sentence, then we buffer the word clicks
  const [isReading_wordClick, setIsReading_wordClick] = useState(false);
  const [isReading_partOfSentence, setIsReading_partOfSentence] =
    useState(false);
  // buffer the words, useRef is needed in case a word was clicked while we were reading
  // in such case we continue reading until the word buffer is empty (see readClickBuffer)
  const [wordClickBuffer, setWordClickBuffer] = useState([]);
  const wordClickBufferRef = useRef(wordClickBuffer);

  const [userBufferArray, setUserBufferArray] = useState([]);
  // after wordClickBuffer we check if the user buffer is complete,
  // useRef is used to track changes to the user buffer while we are reading (see readClickBuffer)
  const userBufferArrayRef = useRef(userBufferArray);

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
  ////////////////////////////////////////////////////////////////
  // word click related functions
  async function handleWordClickBtn({ word, newUserBufferArray }) {
    addToUserBuffer({ word, newUserBufferArray });
    addToWordClickBuffer(word.txt);
  }

  function getWordClickBuffer(wordClickBuffer) {
    let buffer = "";
    for (const word of wordClickBuffer) {
      buffer += " " + word;
    }
    return buffer;
  }

  const addToWordClickBuffer = (word) => {
    const newBuff = [...wordClickBuffer, word];
    setWordClickBuffer(newBuff);
  };

  useEffect(() => {
    userBufferArrayRef.current = userBufferArray;
  }, [userBufferArray]);

  // NOTE: I deliberately separated the 2 useEffect to emphasize that they are not dependent
  useEffect(() => {
    wordClickBufferRef.current = wordClickBuffer;
  }, [wordClickBuffer]);

  useEffect(() => {
    const readClickBuffer = async () => {
      if (isReading_wordClick) return;
      setIsReading_wordClick(true);
      try {
        while (wordClickBufferRef.current.length > 0) {
          let buffer = getWordClickBuffer(wordClickBufferRef.current); // NOTE: useRef is essential here
          // console.log("buffer", buffer);
          setWordClickBuffer([]);
          await readAloud_target(buffer, 1.25);
        }
      } finally {
        setIsReading_wordClick(false);
      }
      checkIfBufferIsComplete();
    };

    readClickBuffer();
  }, [wordClickBuffer]);

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  function checkIfBufferIsComplete() {
    function checkIfBufferIsComplete_helper() {
      const wordsInBuffer = userBufferArrayRef.current;
      // console.log(wordsInBuffer.length, words.length);
      if (wordsInBuffer.length !== words.length) {
        return false;
      }

      for (let i = 0; i < wordsInBuffer.length; i++) {
        if (wordsInBuffer[i].txt !== words[i]) {
          return false;
        }
      }

      return true;
    }

    const currentUserBuff = userBufferArrayRef.current;
    if (currentUserBuff.length === 0) return;
    if (currentUserBuff.length >= words.length) {
      // Check if user buffer matches the original sentence (excluding punctuation)
      if (checkIfBufferIsComplete_helper()) {
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
  ////////////////////////////////////////////////////////////////
  // manage user buffer
  const addToUserBuffer = ({ word, newUserBufferArray }) => {
    if (!newUserBufferArray) newUserBufferArray = userBufferArray;
    setUserBufferArray([...newUserBufferArray, word]);
  };

  ////////////////////////////////////////////////////////////////
  function handleDeleteWordBtn() {
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
  ////////////////////////////////////////////////////////////////
  // scramble sentence

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
  ////////////////////////////////////////////////////////////////
  // handle play/pause of part-of-sentence-btn
  async function handlePartOfSentenceBtn() {
    ///////
    // pause
    if (isReading_partOfSentence) {
      cancel();
      setIsReading_partOfSentence(false);
      return;
    }

    ///////
    // play
    setIsReading_partOfSentence(true);
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
      setIsReading_partOfSentence(false);
    }
  }

  ////////////////////////////////////////////////////////////////
  function handleGiveHintBtn() {
    if (hintClickCounter == 0) {
      setHintClickCounter(1);
      setTimeout(() => {
        setHintClickCounter(0);
      }, 1000);
    } else {
      const wordInBuffer = getCurrentUserBufferArray();
      let newUserBufferArray = [];
      let i = 0;
      for (; i < wordInBuffer.length; i++) {
        if (wordInBuffer[i].txt != words[i]) {
          break;
        }
        newUserBufferArray.push(wordInBuffer[i]);
      }
      handleWordClickBtn({
        word: { txt: words[i], isHint: true },
        newUserBufferArray,
      });
    }
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
        handleDeleteWordBtn,
        isReading_playSentence,
        increasePhraseIndex,
        playSentence,
        handleDeleteWordBtn,
        getCurrentUserBuffer,
        getCurrentUserBufferArray,
        userBufferArray,
        handleWordClickBtn,
        showFailNotice,
        showSuccessNotice,
        scrambledWords,
        words,
        scrambleSentence,
        handlePartOfSentenceBtn,
        isReading_partOfSentence,
        handleGiveHintBtn,
        hintClickCounter,
      }}
    >
      {children}
    </ScrambleContext.Provider>
  );
};

export const useScrambleContext = () => useContext(ScrambleContext);
