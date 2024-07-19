import { createContext, useState, useContext, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";

const PlaySentenceContext = createContext();

export const PlaySentenceProvider = ({ children }) => {
  const { phrases: appPhrase } = useAppContext();
  const {
    readAloud_slow_target,
    readAloud_target,
    readAloud_src,
    waitForSeconds,
    randomPermutation,
    cancel,
    skipLoop,
  } = useSpeechSynthesis();
  const [phrases, setPhrases] = useState(randomPermutation(appPhrase));
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(currentPhraseIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [state, setState] = useState({
    playedSentences: 0,
  });

  const doExerciseLoop = async () => {
    if (!isPlaying) return;
    try {
      console.log(
        "index: " +
          currentPhraseIndex +
          "/" +
          phrases.length +
          " - " +
          phrases[currentPhraseIndex].src
      );

      await readAloud_target(phrases[currentPhraseIndex].target);
      if (!isPlaying) return;
      await waitForSeconds(2);
      if (!isPlaying) return;

      await readAloud_slow_target(phrases[currentPhraseIndex].target);
      if (!isPlaying) return;

      // await waitForSeconds(2);
      // if (!isPlaying) return;
      // await readAloud_target(phrases[index].target);
      if (!isPlaying) return;

      await waitForSeconds(1);
      if (!isPlaying) return;

      if (phrases[currentPhraseIndex].src) {
        await readAloud_src(phrases[currentPhraseIndex].src);
        await waitForSeconds(1);
      }
      if (!isPlaying) return;

      increasePhraseIndex(currentPhraseIndex);
    } catch (e) {
      console.log(e);
    }
  };

  function increasePhraseIndex(currentPhraseIndex) {
    let nextIndex = currentPhraseIndex + 1;
    if (nextIndex >= phrases.length) {
      nextIndex = 0;
      setPhrases(randomPermutation(phrases));
    }
    setCurrentPhraseIndex(nextIndex);

    return nextIndex;
  }

  const playPause = () => {
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      doExerciseLoop();
    }
  }, [isPlaying, currentPhraseIndex]);

  const skip = () => {
    setState((prevState) => ({
      ...prevState,
      playedSentences: prevState.playedSentences + 1,
    }));
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
    <PlaySentenceContext.Provider
      value={{
        phrases,
        state,
        playPause,
        skip,
        currentPhrase,
        setCurrentPhrase,
        setPhrases,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </PlaySentenceContext.Provider>
  );
};

export const usePlaySentenceContext = () => useContext(PlaySentenceContext);
