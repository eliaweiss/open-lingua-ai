import { createContext, useState, useContext } from "react";

const PlaySentenceContext = createContext();

export const PlaySentenceProvider = ({ children }) => {
  const [state, setState] = useState({
    totalSentences: 0,
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
    <PlaySentenceContext.Provider value={{ state, playPause, skip }}>
      {children}
    </PlaySentenceContext.Provider>
  );
};

export const usePlaySentenceContext = () => useContext(PlaySentenceContext);
