import { createContext, useState, useContext, useEffect, useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";

const ScrambleContext = createContext();

export const ScrambleProvider = ({ children }) => {
  const { phrases: appPhrase } = useAppContext();
  const { readAloud_target, randomPermutation, cancel } = useSpeechSynthesis();
  const [phrases, setPhrases] = useState(randomPermutation(appPhrase));
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(
    phrases[currentPhraseIndex]
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const [userBuffer, setUserBuffer] = useState("");


  const playPause = () => {
    setIsPlaying(true);
  };
  
  const playSentence = async () => {
    setIsReading(true);
    await readAloud_target(currentPhrase.target);
    setIsReading(false);
  };

  useEffect(() => {
    if (!currentPhrase || !isPlaying) return;
    playSentence();
  }, [isPlaying, currentPhraseIndex]);

  function increasePhraseIndex() {
    let nextIndex = currentPhraseIndex + 1;
    if (nextIndex >= phrases.length) {
      nextIndex = 0;
      setPhrases(randomPermutation(phrases));
    }
    setCurrentPhraseIndex(nextIndex);
    setCurrentPhrase(phrases[nextIndex]);

    return nextIndex;
  }

  const skip = () => {
    cancel();
    increasePhraseIndex();
  };

  useEffect(() => {
    if (!phrases || !phrases.length) return;
    setCurrentPhrase(phrases[0]);
  }, [phrases]);

  useEffect(() => {
    if (!appPhrase || !appPhrase.length) return;
    setPhrases(randomPermutation(appPhrase));
  }, [appPhrase]);

  return (
    <ScrambleContext.Provider
      value={{
        phrases,
        playPause,
        skip,
        currentPhrase,
        currentPhraseIndex,
        isPlaying,
        userBuffer,
        setUserBuffer,
        isReading,
        increasePhraseIndex,
      }}
    >
      {children}
    </ScrambleContext.Provider>
  );
};

export const useScrambleContext = () => useContext(ScrambleContext);
