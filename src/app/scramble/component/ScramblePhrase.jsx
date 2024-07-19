import { useScrambleContext } from "../context/ScrambleContext";
import { randomPermutation } from "../../tts-service/SpeechSynthesisService";
import { useEffect, useState } from "react";

export const ScramblePhrase = () => {
  const [scrambledWords, setScrambledWords] = useState([]);
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

  const scrambleSentence = () => {
    if (!currentPhrase) return;
    // Get the current Portuguese sentence
    const { words, currentSentence } = splitToWords(currentPhrase.target); // Split into words

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
  console.log("scrambledWords2", scrambledWords.length);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap  space-x-2">
        {scrambledWords.map((word, index) => (
          <WordButton key={index}>{word}</WordButton>
        ))}
      </div>
      <div className="">{userBuffer}</div>
    </div>
  );
};

const WordButton = ({ children }) => {
  return (
    <div className="px-4 py-2 my-2 rounded-lg bg-[#6a97d3] flex items-center text-white">
      <button className="">{children}</button>
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
