import ControlButton from "../components/ControlButton";
import HorizontalRule from "../components/HorizontalRule";
import TooltipWrapper from "../components/TooltipWrapper";
import { useAppContext } from "../context/AppContext";
import { usePlaySentenceContext } from "./context/PlaySentenceContext";
import { PlayIcon, PauseIcon, ForwardIcon } from "@heroicons/react/24/solid"; // or '@heroicons/react/24/outline'

export const PlaySentencesExercise = () => {
  const { isSrcRtl, isTargetRtl, theme } = useAppContext();
  const {
    currentPhraseIndex,
    playPause,
    skip,
    phrases,
    currentPhrase,
    isPlaying,
  } = usePlaySentenceContext();

  return (
    <div className="flex flex-col justify-center items-center text-center w-full">
      <div className="text-left">
        <div className=" text-sText text-sm">Exercise:</div>
        <div className="font-bold text-xl text-sText">
          Play Sentences in a loop
        </div>
      </div>
      <HorizontalRule />

      {/* Exercise Panel */}
      <div className="flex flex-col space-y-4 mt-4 text-3xl">
        <div className={`${isSrcRtl ? "text-right" : "text-left"}`}>
          {currentPhrase?.target}
        </div>
        <div
          className={`text-sText ${isTargetRtl ? "text-right" : "text-left"}`}
        >
          {currentPhrase?.src}
        </div>
      </div>
      <HorizontalRule />

      {/* Button Panel */}
      <div className="flex flex-col space-y-4 mt-4 ">
        <div className="flex space-x-4 mt-4 border border-pBorder rounded-lg p-4">
          <ControlButton toolTip="Play/Pause" onClick={playPause}>
            {isPlaying ? (
              <PauseIcon className={`w-6 h-6 `} />
            ) : (
              <PlayIcon className={`w-6 h-6 `} />
            )}
          </ControlButton>

          <ControlButton toolTip="Skip" onClick={skip}>
            <ForwardIcon className={`w-6 h-6 `} />
          </ControlButton>
        </div>
        {isPlaying && <div>Playing ...</div>}
      </div>

      {/* Statistic Panel */}
      <div className="mt-4 flex flex-col items-center text-xl">
        <TooltipWrapper text="played-sentences/total-sentences">
          <div className="text-sm">
            {currentPhraseIndex}/{phrases.length}
          </div>
        </TooltipWrapper>
      </div>
    </div>
  );
};
