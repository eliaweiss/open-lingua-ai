import { createContext, useState, useContext, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";

const PlaySentenceContext = createContext();

export const PlaySentenceProvider = ({ children }) => {
  const { phrases: appPhrase } = useAppContext();
  const { randomPermutation } = useSpeechSynthesis();
  const [phrases, setPhrases] = useState(randomPermutation(appPhrase));
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [state, setState] = useState({
    playedSentences: 0,
    isPlaying: false,
  });

  const playPause = () => {
    setState((prevState) => ({
      ...prevState,
      isPlaying: !prevState.isPlaying,
    }));
  };

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
      }}
    >
      {children}
    </PlaySentenceContext.Provider>
  );
};

export const usePlaySentenceContext = () => useContext(PlaySentenceContext);