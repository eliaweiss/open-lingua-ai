import { createContext, useState, useContext } from "react";
import { useAppContext } from "../../context/AppContext";

const PlaySentenceContext = createContext();

export const PlaySentenceProvider = ({ children }) => {
  const { phrases } = useAppContext();
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

  return (
    <PlaySentenceContext.Provider value={{ phrases, state, playPause, skip }}>
      {children}
    </PlaySentenceContext.Provider>
  );
};

export const usePlaySentenceContext = () => useContext(PlaySentenceContext);
