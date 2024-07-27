import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import ControlButton from "../../components/ControlButton";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";
import { useScrambleContext } from "../context/ScrambleContext";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { UserBufferDisplay } from "./UserBufferDisplay";
import {
  BackspaceIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";

export const ScramblePhrase = () => {
  const { isTargetRtl } = useAppContext();

  const { readAloud_target, randomPermutation, splitIntoSubSentences } =
    useSpeechSynthesis();

  const {
    increasePhraseIndex,
    currentPhrase,
    isPlaying,
    resetUserBuffer,
    isReading_playSentence,
    playSentence,
    deleteWord,
    getCurrentUserBuffer,
    getCurrentUserBufferArray,
    userBufferArray,
    handleWordClick,
  } = useScrambleContext();

  const [scrambledWords, setScrambledWords] = useState([]);
  const [words, setWords] = useState([]);
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);
  const [showFailNotice, setShowFailNotice] = useState(false);
  const [hintClickCounter, setHintClickCounter] = useState(0);

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

  useEffect(() => {
    scrambleSentence();
  }, [currentPhrase]);

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

  useEffect(() => {
    if (getCurrentUserBufferArray().length === 0) return;
    if (getCurrentUserBufferArray().length == words.length) {
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

      resetUserBuffer(); // Reset user buffer for next sentence
    }
  }, [userBufferArray]);

  ////////////////////////////////////////////////////////////////
  const playPartOfSentence = async () => {
    const text = currentPhrase.target.toLocaleLowerCase();
    const subSentenceList = splitIntoSubSentences(text);
    for (let subSentence of subSentenceList) {
      await readAloud_target(subSentence);
      if (!getCurrentUserBuffer().includes(subSentence)) {
        break;
      }
    }
  };

  function giveHint() {
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
        if (wordInBuffer[i].word != words[i]) {
          break;
        }
        newUserBufferArray.push(wordInBuffer[i]);
      }
      handleWordClick({
        word: { word: words[i], isHint: true },
        newUserBufferArray,
      });
    }
  }

  return (
    <div>
      {isPlaying && (
        <div className="flex flex-col">
          {showSuccessNotice && (
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white text-3xl text-[#1994ff] font-bold border-2 border-[#035797] px-2 py-5 rounded-lg">
              Correct! <br /> Move to next sentence
            </div>
          )}

          <div className="flex flex-wrap ">
            {!isReading_playSentence &&
              scrambledWords.map((word, index) => (
                <WordButton
                  className="mr-2"
                  key={index}
                  onClick={() => handleWordClick({ word: { word } })}
                >
                  {word}
                </WordButton>
              ))}
          </div>
          {showFailNotice && (
            <div className=" text-[#ff5a19]  rounded-lg">
              {`Almost, Let's try again...`}
            </div>
          )}
          <div className={`${isTargetRtl ? "text-right" : "text-left"}`}>
            <UserBufferDisplay />
          </div>
          <div className="flex space-x-10 my-5 justify-center items-center">
            <ControlButton
              toolTip="Play Part of sentence"
              onClick={playPartOfSentence}
              className="p-4 rounded-lg border border-pBorder"
            >
              <ChevronDoubleRightIcon className="w-6 h-6 " />
            </ControlButton>

            <ControlButton
              toolTip="Backspace"
              onClick={deleteWord}
              className="p-4 rounded-lg border border-pBorder"
            >
              <BackspaceIcon className="w-6 h-6 " />
            </ControlButton>

            <ControlButton
              toolTip="Give hint (double click)"
              onClick={giveHint}
              className="p-4 rounded-lg border border-pBorder"
            >
              {hintClickCounter == 0 ? (
                <QuestionMarkCircleIcon className="w-6 h-6 " />
              ) : (
                <div className="text-base h-6">click again</div>
              )}
            </ControlButton>
          </div>
          {userBufferArray.length > 0 && (
            <div className="">
              {userBufferArray.length}/{words.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const WordButton = ({ className, children, ...prop }) => {
  return (
    <div
      className={classNames(
        `px-4 py-2 my-2 rounded-lg bg-[#6a97d3] flex items-center text-white hover:bg-[#4976b1]`,
        className
      )}
      {...prop}
    >
      {children}
    </div>
  );
};
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
