import { createContext, useState, useContext, useEffect, useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";

const PlaySentenceContext = createContext();

export const PlaySentenceProvider = ({ children }) => {
  const {
    phrases,
    readSettingsArray,
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
    try {
      console.log(
        "index: " +
          currentPhraseIndex +
          "/" +
          phrases.length +
          " - " +
          currentPhrase.src
      );
      const shouldReturn = () =>
        !isPlayingRef.current ||
        currentPhraseIndexRef.current != currentPhraseIndex;

      for (const readObj of readSettingsArray.list) {
        if (readObj.lang == "target") {
          if (readObj.isAccented) {
            await readAloud_slow_target(currentPhrase.target, readObj.rate);
          } else {
            await readAloud_target(currentPhrase.target, readObj.rate);
          }
        } else {
          await readAloud_src(currentPhrase.src, readObj.rate);
        }
        await waitForSeconds(readObj.waitAfter);
        if (shouldReturn()) return;
      }

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
