import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import ControlButton from "../../components/ControlButton";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";
import { useScrambleContext } from "../context/ScrambleContext";
import { useEffect, useState } from "react";
import {
  readAloud_helper,
  splitIntoSubSentences,
} from "../../tts-service/SpeechSynthesisService";
import { useAppContext } from "../../context/AppContext";
import { BackspaceIcon } from "@heroicons/react/24/outline";

export const ScramblePhrase = () => {
  const { isSrcRtl, isTargetRtl } = useAppContext();

  const { readAloud_target, randomPermutation } = useSpeechSynthesis();

  const {
    currentPhraseIndex,
    increasePhraseIndex,
    playPause,
    skip,
    phrases,
    currentPhrase,
    isPlaying,
    userBuffer,
    setUserBuffer,
  } = useScrambleContext();

  const [scrambledWords, setScrambledWords] = useState([]);
  const [numberOfWordClicked, setNumberOfWordClicked] = useState(0);
  const [currentSentence, setCurrentSentence] = useState("");
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);

  const scrambleSentence = () => {
    if (!currentPhrase) return;
    // Get the current Portuguese sentence
    const { words, currentSentence } = splitToWords(currentPhrase.target); // Split into words

    setCurrentSentence(currentSentence);

    // Randomly scramble the words
    const scrambledWordsTmp = removeDuplicates(randomPermutation(words));
    console.log("scrambledWords", scrambledWordsTmp);
    setScrambledWords(scrambledWordsTmp);

    // Clear user buffer and display area
    setUserBuffer("");
  };

  useEffect(() => {
    scrambleSentence();
  }, [currentPhrase]);

  function getCurrentUserBuffer() {
    return userBuffer
      .trim()
      .replace(/punctuation/g, "")
      .toLocaleLowerCase();
  }

  useEffect(() => {
    if (numberOfWordClicked === 0) return;
    if (numberOfWordClicked == scrambledWords.length) {
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

  const handleWordClick = async (word) => {
    setNumberOfWordClicked(numberOfWordClicked + 1);
    setUserBuffer(userBuffer + " " + word);
    await readAloud_target(word, 1.25);
  };

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

  function deleteLastWord_helper(str) {
    const lastSpaceIndex = str.lastIndexOf(" ");
    if (lastSpaceIndex !== -1) {
      return str.slice(0, lastSpaceIndex);
    } else {
      // Handle case where there's no space (single word sentence)
      return "";
    }
  }
  function deleteWord() {
    if (numberOfWordClicked <= 0) return;
    setNumberOfWordClicked(numberOfWordClicked - 1);
    setUserBuffer(deleteLastWord_helper(userBuffer.trim()));
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap  space-x-2">
        {showSuccessNotice && (
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white text-3xl text-[#2d0397] font-bold border-2 border-[#2d0397] p-2 rounded-lg">
            Correct! Move to next sentence...
          </div>
        )}
        {scrambledWords.map((word, index) => (
          <WordButton key={index} onClick={() => handleWordClick(word)}>
            {word}
          </WordButton>
        ))}
      </div>
      <div className={`${isTargetRtl ? "text-right" : "text-left"}`}>
        {userBuffer}
      </div>
      <div className="flex space-x-2 my-5 justify-center">
        <ControlButton toolTip="Backspace" onClick={deleteWord}>
          <BackspaceIcon className="w-6 h-6 text-gray-600 " />
        </ControlButton>

        <ControlButton
          toolTip="Play Part of sentence"
          onClick={playPartOfSentence}
        >
          <ChevronDoubleRightIcon className="w-6 h-6 text-gray-600 " />
        </ControlButton>
      </div>
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
