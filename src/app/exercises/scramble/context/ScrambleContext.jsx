import { createContext, useContext, useEffect, useRef } from "react";
import { useAppContext } from "../../../context/AppContext";
import { useSpeechSynthesis } from "../../../context/SpeechSynthesisContext";
import {
  randomPermutation,
  removeDuplicates,
  splitToWords,
} from "../../../helpers";
import { storage } from "@/app/utils/storageUtils";
import useScrambleStore from "../store/useScrambleStore";
import { useScrambleFunctions } from "./scrambleFunctions";

const ScrambleContext = createContext();

////////////////////////////////////////////////////////////////
// provider
export const ScrambleProvider = ({ children }) => {
  const {
    increasePhraseIndex,
    currentPhraseIndex,
    currentPhrase,
    appInitFlag,
  } = useAppContext();

  const { readAloud_target, cancelSpeech, splitIntoSubSentences } =
    useSpeechSynthesis();

  const {
    playSentence,
    addToUserBuffer,
    getCurrentUserBufferArray,
    getCurrentUserBuffer,
    getWordClickBuffer,
  } = useScrambleFunctions();

  // Zustand store hooks to access state
  const {
    wordsTxt,
    setWordsTxt,
    setScrambledWordsTxt,
    setShowSuccessNotice,
    setShowFailNotice,
    isPlaying,
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
    showTranslationSettings,
    setShowTranslationSettings,
    setShowTranslation,
  } = useScrambleStore();

  const wordClickBufferRef = useRef([]);
  const userBufferArrayRef = useRef([]);

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

  ////////////////////////////////////////////////////////////////
  // word click related functions
  async function handleWordClickBtn({ word, newUserBufferArray }) {
    addToUserBuffer({ word, newUserBufferArray });
    addToWordClickBuffer(word.txt);
  }

  const addToWordClickBuffer = (word) => {
    wordClickBufferRef.current = [...wordClickBufferRef.current, word];
  };

  const readClickBuffer = async (force = false) => {
    if (
      !force &&
      (isReading_wordClick ||
        isReading_partOfSentence ||
        wordClickBufferRef.current.length == 0)
    )
      return;
    setIsReading_wordClick(true);
    try {
      while (wordClickBufferRef.current.length > 0) {
        let buffer = getWordClickBuffer(wordClickBufferRef.current); // NOTE: useRef is essential here
        wordClickBufferRef.current = [];
        await readAloud_target(buffer, 1.25);
      }
    } finally {
      setIsReading_wordClick(false);
    }
    checkIfBufferIsComplete();
  };

  async function checkIfBufferIsComplete() {
    function checkIfBufferIsComplete_helper() {
      const wordsInBuffer = userBufferArrayRef.current;
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
      if (checkIfBufferIsComplete_helper()) {
        setShowFailNotice(false);
        setShowSuccessNotice(true);
        setTimeout(() => {
          increasePhraseIndex();
          setShowSuccessNotice(false);
        }, 1000);
      } else {
        setShowFailNotice(true);
        await playSentence();
        setShowFailNotice(false);
      }

      resetUserBuffer();
    }
  }

  const resetUserBuffer = () => {
    setUserBufferArray([]);
    wordClickBufferRef.current = [];
  };

  const doScrambleSentence = () => {
    if (!currentPhrase) return;
    setShowFailNotice(false);
    const newWordsTxt = splitToWords(currentPhrase.target);
    setWordsTxt(newWordsTxt);
    setScrambledWordsTxt(removeDuplicates(randomPermutation(newWordsTxt)));
    resetUserBuffer();
    setShowTranslation(false);
  };

  async function playPartOfSentenceBtn() {
    if (isReading_partOfSentence) {
      cancelSpeech();
      setIsReading_partOfSentence(false);
      return;
    }

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
        readClickBuffer(true);
      }, 100);
    }
  }

  ////////////////////////////////////////////////////////////////

  useEffect(() => {
    doScrambleSentence();
  }, [currentPhrase]);

  useEffect(() => {
    if (!currentPhrase || !isPlaying) {
      cancelSpeech();
      return;
    }
    playSentence();
  }, [isPlaying, currentPhraseIndex]);

  useEffect(() => {
    if (appInitFlag) {
      setExerciseCounter(exerciseCounter + 1);
    }
  }, [currentPhraseIndex]);

  useEffect(() => {
    userBufferArrayRef.current = userBufferArray;
  }, [userBufferArray]);

  useEffect(() => {
    readClickBuffer();
  }, [wordClickBufferRef.current]);

  useEffect(() => {
    if (appInitFlag) {
      async function init() {
        const scrambleExerciseCounter = await storage.get(
          "scrambleExerciseCounter"
        );
        setExerciseCounter(Number(scrambleExerciseCounter, 0) || 0);
        setIsScrambleExerciseStoreInit(true);

        const showTranslationSettings = await storage.get(
          "showTranslationSettings_scramble",
          true
        );
        setShowTranslationSettings(showTranslationSettings);
      }
      init();
    }
  }, [appInitFlag]);

  useEffect(() => {
    if (isScrambleExerciseStoreInit) {
      storage.set("scrambleExerciseCounter", exerciseCounter);
    }
  }, [exerciseCounter]);

  useEffect(() => {
    if (isScrambleExerciseStoreInit) {
      storage.set("showTranslationSettings_scramble", showTranslationSettings);
    }
  }, [showTranslationSettings]);

  return (
    <ScrambleContext.Provider
      value={{
        handleWordClickBtn,
        playPartOfSentenceBtn,
        handleGiveHintBtn,
      }}
    >
      {children}
    </ScrambleContext.Provider>
  );
};

export const useScrambleContext = () => useContext(ScrambleContext);
