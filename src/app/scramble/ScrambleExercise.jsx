import HorizontalRule from "../components/HorizontalRule";
import TooltipWrapper from "../components/TooltipWrapper";
import ControlButton from "../components/ControlButton";
import { useAppContext } from "../context/AppContext";
import { useScrambleContext } from "./context/ScrambleContext";
import { PlayIcon, PauseIcon, ForwardIcon } from "@heroicons/react/24/solid"; // or '@heroicons/react/24/outline'
import { ScramblePhrase } from "./component/ScramblePhrase";

export const ScrambleExercise = () => {
  const { isSrcRtl, isTargetRtl } = useAppContext();
  const {
    currentPhraseIndex,
    playPause,
    skip,
    phrases,
    currentPhrase,
    isPlaying,
  } = useScrambleContext();

  return (
    <div className="flex flex-col justify-center items-center text-center w-full">
      <div className="text-left">
        <div className=" text-[#222223] text-sm">Exercise:</div>
        <div className="font-bold text-xl text-[#808080]">
          Rebuild a scrambled phrase
        </div>
      </div>
      <HorizontalRule />

      {/* Exercise Panel */}
      <div className="flex flex-col space-y-4 mt-4 text-3xl">
        {/* <div className={`${isSrcRtl ? "text-right" : "text-left"}`}>
          {currentPhrase?.target}
        </div> */}
        <div
          className={`text-[#808080] ${
            isTargetRtl ? "text-right" : "text-left"
          }`}
        >
          {currentPhrase?.src}
        </div>
        <ScramblePhrase />
      </div>
      <HorizontalRule />

      {/* Button Panel */}
      <div className="flex flex-col space-y-4 mt-4 ">
        <div className="flex space-x-4 mt-4 border border-[#020689] rounded-lg p-4">
          <button
            onClick={playPause}
            className="relative p-2 hover:bg-gray-200 rounded-full group"
          >
            <TooltipWrapper text="Play/Pause">
              {isPlaying ? (
                <PauseIcon className="w-6 h-6 text-gray-600 " />
              ) : (
                <PlayIcon className="w-6 h-6 text-gray-600 " />
              )}
            </TooltipWrapper>
          </button>
          <ControlButton
            toolTip="Skip"
            onClick={skip}
            className="relative p-2 hover:bg-gray-200 rounded-full group"
          >
            <ForwardIcon className="w-6 h-6 text-gray-600" />
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
