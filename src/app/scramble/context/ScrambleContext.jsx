import { createContext, useState, useContext, useEffect, useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import { useSpeechSynthesis } from "../../context/SpeechSynthesisContext";

const ScrambleContext = createContext();

export const ScrambleProvider = ({ children }) => {
  const { increasePhraseIndex, currentPhraseIndex, currentPhrase } =
    useAppContext();
  const { readAloud_target, cancel } = useSpeechSynthesis();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const [userBuffer, setUserBuffer] = useState("");

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playSentence = async () => {
    setIsReading(true);
    await readAloud_target(currentPhrase.target);
    setIsReading(false);
  };

  useEffect(() => {
    if (!currentPhrase || !isPlaying) {
      cancel();
      return;
    }
    playSentence();
  }, [isPlaying, currentPhraseIndex]);

  const skip = () => {
    cancel();
    increasePhraseIndex();
  };

  const resetUserBuffer = () => {
    setUserBuffer("");
  };
  const addToUserBuffer = ({ word, newUserBuffer }) => {
    setUserBuffer(newUserBuffer + " " + word);
  };
  return (
    <ScrambleContext.Provider
      value={{
        playPause,
        skip,
        currentPhrase,
        currentPhraseIndex,
        isPlaying,
        userBuffer,
        addToUserBuffer,
        resetUserBuffer,
        isReading,
        increasePhraseIndex,
        playSentence,
      }}
    >
      {children}
    </ScrambleContext.Provider>
  );
};

export const useScrambleContext = () => useContext(ScrambleContext);
