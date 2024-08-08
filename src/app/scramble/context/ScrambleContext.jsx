import { createContext, useState, useContext, useEffect, useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";
import {
  randomPermutation,
  removeDuplicates,
  splitToWords,
} from "../../helpers";

const ScrambleContext = createContext();

////////////////////////////////////////////////////////////////
// provider
export const ScrambleProvider = ({ children }) => {
  const { increasePhraseIndex, currentPhraseIndex, currentPhrase } =
    useAppContext();
  const { readAloud_target, cancelSpeech, splitIntoSubSentences } =
    useSpeechSynthesis();

  // words txt buffers original and scramble
  const [wordsTxt, setWordsTxt] = useState([]);
  const [scrambledWordsTxt, setScrambledWordsTxt] = useState([]);

  // flags
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);
  const [showFailNotice, setShowFailNotice] = useState(false);
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

  // handle double click
  const [hintClickCounter, setHintClickCounter] = useState(0);

  ////////////////////////////////////////////////////////////////
  // manage the exercise play/pause/skip functionality
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
      cancelSpeech();
      return;
    }
    playSentence();
  }, [isPlaying, currentPhraseIndex]);

  const skip = () => {
    cancelSpeech();
    increasePhraseIndex();
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

  const readClickBuffer = async () => {
    if (
      isReading_wordClick ||
      isReading_partOfSentence ||
      wordClickBufferRef.current.length == 0
    )
      return;
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

  useEffect(() => {
    readClickBuffer();
  }, [wordClickBuffer]);

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  async function checkIfBufferIsComplete() {
    function checkIfBufferIsComplete_helper() {
      const wordsInBuffer = userBufferArrayRef.current;
      // console.log(wordsInBuffer.length, words.length);
      if (wordsInBuffer.length !== wordsTxt.length) {
        return false;
      }

      for (let i = 0; i < wordsInBuffer.length; i++) {
        if (wordsInBuffer[i].txt !== wordsTxt[i]) {
          return false;
        }
      }

      return true;
    }

    const currentUserBuff = userBufferArrayRef.current;
    if (currentUserBuff.length === 0) return;
    if (currentUserBuff.length >= wordsTxt.length) {
      // Check if user buffer matches the original sentence (excluding punctuation)
      if (checkIfBufferIsComplete_helper()) {
        setShowFailNotice(false);
        setShowSuccessNotice(true);
        setTimeout(() => {
          increasePhraseIndex();
          setShowSuccessNotice(false);
        }, 1000); // show success notice for 1 second
      } else {
        setShowFailNotice(true);
        await playSentence();
        setShowFailNotice(false);
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

  const resetUserBuffer = () => {
    setUserBufferArray([]);
    setWordClickBuffer([]);
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
    for (const { txt } of userBufferArray) {
      buffer += " " + txt;
    }
    return buffer;
  }

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  // scramble sentence

  const scrambleSentence = () => {
    if (!currentPhrase) return;
    setShowFailNotice(false);

    // Get the current target sentence
    const newWordsTxt = splitToWords(currentPhrase.target); // Split into words
    setWordsTxt(newWordsTxt);

    // Randomly scramble the words
    setScrambledWordsTxt(removeDuplicates(randomPermutation(newWordsTxt)));

    // Clear user buffer and display area
    resetUserBuffer();
  };

  ////////////////////////////////////////////////////////////////
  // handle new phrase trigger
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
      cancelSpeech();
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
      setIsReading_wordClick(false);
      setTimeout(() => {
        readClickBuffer();
      }, 100);
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
        if (wordInBuffer[i].txt != wordsTxt[i]) {
          break;
        }
        newUserBufferArray.push(wordInBuffer[i]);
      }
      if (i >= wordsTxt.length) {
        return;
      }
      handleWordClickBtn({
        word: { txt: wordsTxt[i], isHint: true },
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
        scrambledWordsTxt,
        wordsTxt,
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
