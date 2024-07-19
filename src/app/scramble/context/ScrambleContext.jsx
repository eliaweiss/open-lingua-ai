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
  const [currentPhrase, setCurrentPhrase] = useState(currentPhraseIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const doExerciseLoop = async () => {
    if (!isPlayingRef.current) return;
    const nowPlayingPhrase = phrases[currentPhraseIndex];
    setCurrentPhrase(nowPlayingPhrase);

    try {
      console.log(
        "index: " +
          currentPhraseIndex +
          "/" +
          phrases.length +
          " - " +
          nowPlayingPhrase.src
      );

      await readAloud_target(nowPlayingPhrase.target);
      if (!isPlayingRef.current) return;
      await waitForSeconds(2);
      if (!isPlayingRef.current) return;

      await readAloud_slow_target(nowPlayingPhrase.target);
      if (!isPlayingRef.current) return;

      await waitForSeconds(1);
      if (!isPlayingRef.current) return;

      if (nowPlayingPhrase.src) {
        await readAloud_src(nowPlayingPhrase.src);
        await waitForSeconds(1);
      }
      if (!isPlayingRef.current) return;

      increasePhraseIndex();
    } catch (e) {
      console.log(e);
    }
  };

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
      }}
    >
      {children}
    </ScrambleContext.Provider>
  );
};

export const useScrambleContext = () => useContext(ScrambleContext);
