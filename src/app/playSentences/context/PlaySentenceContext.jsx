import { createContext, useState, useContext, useEffect, useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";

const PlaySentenceContext = createContext();

export const PlaySentenceProvider = ({ children }) => {
  const {
    phrases,
    incrDailyCount,
    increasePhraseIndex,
    currentPhraseIndexRef,
    currentPhraseIndex,
    currentPhrase,
  } = useAppContext();

  const {
    readAloud_slow_target,
    readAloud_target,
    readAloud_src,
    waitForSeconds,
    cancel,
  } = useSpeechSynthesis();

  const [isPlaying, setIsPlaying] = useState(false);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const doExerciseLoop = async () => {
    if (!isPlayingRef.current) return;
    incrDailyCount();
    try {
      console.log(
        "index: " +
          currentPhraseIndex +
          "/" +
          phrases.length +
          " - " +
          currentPhrase.src
      );
      const shouldContinue = () =>
        !isPlayingRef.current ||
        currentPhraseIndexRef.current != currentPhraseIndex;
      await readAloud_target(currentPhrase.target);
      if (shouldContinue()) return;
      await waitForSeconds(2);
      if (shouldContinue()) return;

      await readAloud_slow_target(currentPhrase.target);
      if (shouldContinue()) return;

      await waitForSeconds(1);
      if (shouldContinue()) return;

      if (currentPhrase.src) {
        await readAloud_src(currentPhrase.src, 1.25);
        await waitForSeconds(1);
      }
      if (shouldContinue()) return;

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

  const skip = () => {
    cancel();
    // Assuming `index` and `skipFlag` are part of your state
    increasePhraseIndex();
  };

  return (
    <PlaySentenceContext.Provider
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
    </PlaySentenceContext.Provider>
  );
};

export const usePlaySentenceContext = () => useContext(PlaySentenceContext);
