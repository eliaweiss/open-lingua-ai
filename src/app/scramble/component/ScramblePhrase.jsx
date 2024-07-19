import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import ControlButton from "../../components/ControlButton";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";
import { useScrambleContext } from "../context/ScrambleContext";
import { useEffect, useState } from "react";
import {
  readAloud_helper,
  splitIntoSubSentences,
} from "../../tts-service/SpeechSynthesisService";

export const ScramblePhrase = () => {
  const { readAloud_target, randomPermutation } = useSpeechSynthesis();

  const {
    currentPhraseIndex,
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
    if (numberOfWordClicked == scrambledWords.length) {
      // Check if user buffer matches the original sentence (excluding punctuation)
      if (getCurrentUserBuffer() === currentSentence.toLocaleLowerCase()) {
        // console.log("Correct! Move to next sentence.");
        // document.querySelector("#scrambled-result").classList.remove("hidden"); // Toggle hidden class
        // moveToNextSentence();
      } else {
        setUserBuffer(""); // Reset user buffer for next sentence
        setNumberOfWordClicked(0);
        // setTimeout(playScrambledSentence, 1000);
      }
    }
  }, [numberOfWordClicked]);

  const handleWordClick = async (word) => {
    setNumberOfWordClicked(numberOfWordClicked + 1);
    setUserBuffer(userBuffer + " " + word);
    await readAloud_target(word, 1.25);
  };

  const playPartOfSentence = async () => {
    const subSentenceList = splitIntoSubSentences(currentSentence);
    for (let subSentence of subSentenceList) {
      await readAloud_target(subSentence);
      if (!getCurrentUserBuffer().includes(subSentence)) {
        break;
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap  space-x-2">
        {showSuccessNotice && <div className=""></div>}
        {scrambledWords.map((word, index) => (
          <WordButton key={index} onClick={() => handleWordClick(word)}>
            {word}
          </WordButton>
        ))}
      </div>
      <div className="">{userBuffer}</div>
      <div className="">
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
