import { createContext, useState, useContext, useEffect, useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";

const ScrambleContext = createContext();

export const ScrambleProvider = ({ children }) => {
  const { phrases: appPhrase } = useAppContext();
  const {
    readAloud_slow_target,
    readAloud_target,
    readAloud_src,
    waitForSeconds,
    randomPermutation,
    cancel,
  } = useSpeechSynthesis();
  const [phrases, setPhrases] = useState(randomPermutation(appPhrase));
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(
    phrases[currentPhraseIndex]
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [userBuffer, setUserBuffer] = useState("");
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const playPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      doExerciseLoop();
    } else {
      cancel();
    }
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
    // Assuming `index` and `skipFlag` are part of your state
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

        increasePhraseIndex,
      }}
    >
      {children}
    </ScrambleContext.Provider>
  );
};

export const useScrambleContext = () => useContext(ScrambleContext);
