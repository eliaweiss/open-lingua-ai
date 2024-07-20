import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import ControlButton from "../../components/ControlButton";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";
import { useScrambleContext } from "../context/ScrambleContext";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { BackspaceIcon } from "@heroicons/react/24/outline";

export const ScramblePhrase = () => {
  const { isTargetRtl } = useAppContext();

  const { readAloud_target, randomPermutation, splitIntoSubSentences } =
    useSpeechSynthesis();

  const {
    increasePhraseIndex,
    currentPhrase,
    isPlaying,
    userBuffer,
    setUserBuffer,
    isReading,
  } = useScrambleContext();

  const [scrambledWords, setScrambledWords] = useState([]);
  const [words, setWords] = useState([]);
  const [numberOfWordClicked, setNumberOfWordClicked] = useState(0);
  const [currentSentence, setCurrentSentence] = useState("");
  const [showSuccessNotice, setShowSuccessNotice] = useState(1);

  ////////////////////////////////////////////////////////////////

  const scrambleSentence = () => {
    if (!currentPhrase) return;
    // Get the current Portuguese sentence
    const { words, currentSentence } = splitToWords(currentPhrase.target); // Split into words
    setWords(words);
    setCurrentSentence(currentSentence);

    // Randomly scramble the words
    const scrambledWordsTmp = removeDuplicates(randomPermutation(words));
    console.log("scrambledWords", scrambledWordsTmp);
    setScrambledWords(scrambledWordsTmp);

    // Clear user buffer and display area
    setUserBuffer("");
  };
  ////////////////////////////////////////////////////////////////

  useEffect(() => {
    scrambleSentence();
  }, [currentPhrase]);

  ////////////////////////////////////////////////////////////////

  function getCurrentUserBuffer() {
    return userBuffer
      .trim()
      .replace(/punctuation/g, "")
      .toLocaleLowerCase();
  }
  ////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (numberOfWordClicked === 0) return;
    // console.log("numberOfWordClicked", numberOfWordClicked);
    if (numberOfWordClicked == words.length) {
      // Check if user buffer matches the original sentence (excluding punctuation)
      if (getCurrentUserBuffer() === currentSentence.toLocaleLowerCase()) {
        setScrambledWords([]);
        setShowSuccessNotice(true);
        setTimeout(() => {
          increasePhraseIndex();
          setShowSuccessNotice(false);
        }, 1000);
      }

      setUserBuffer(""); // Reset user buffer for next sentence
      setNumberOfWordClicked(0);
    }
  }, [numberOfWordClicked]);

  ////////////////////////////////////////////////////////////////
  const handleWordClick = async (word) => {
    setNumberOfWordClicked(numberOfWordClicked + 1);
    setUserBuffer(userBuffer + " " + word);
    await readAloud_target(word, 1.25);
  };

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

  return (
    <div>
      {isPlaying && (
        <div className="flex flex-col">
          {showSuccessNotice && (
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white text-3xl text-[#1994ff] font-bold border-2 border-[#035797] px-2 py-5 rounded-lg">
              Correct! <br /> Move to next sentence
            </div>
          )}
          <div className="flex flex-wrap  space-x-2">
            {!isReading &&
              scrambledWords.map((word, index) => (
                <WordButton key={index} onClick={() => handleWordClick(word)}>
                  {word}
                </WordButton>
              ))}
          </div>
          <div className={`${isTargetRtl ? "text-right" : "text-left"}`}>
            {userBuffer}
          </div>
          <div className="flex space-x-10 my-5 justify-center items-center">
            {numberOfWordClicked > 0 && (
              <div className="">
                {numberOfWordClicked}/{words.length}
              </div>
            )}
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
          </div>
        </div>
      )}
    </div>
  );
};

const WordButton = ({ children, ...prop }) => {
  return (
    <div
      className="px-4 py-2 my-2 rounded-lg bg-[#6a97d3] flex items-center text-white hover:bg-[#4976b1] "
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

function splitToWords(currentSentence) {
  currentSentence = removeDotAtEnd(currentSentence)
    .replace(", ", " ")
    .replace(". ", " ")
    .replace("?", "")
    .replace(/punctuation/g, "");
  let words = currentSentence.toLocaleLowerCase().split(" "); // Split into words
  return { words, currentSentence };
}

function removeDotAtEnd(sentence) {
  if (sentence.endsWith(".")) {
    return sentence.slice(0, -1); // Remove the last character
  }
  return sentence;
}
