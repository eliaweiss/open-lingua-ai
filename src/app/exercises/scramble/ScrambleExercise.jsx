import HorizontalRule from "../../components/HorizontalRule";
import TooltipWrapper from "../../components/TooltipWrapper";
import ControlButton from "../../components/ControlButton";
import { useAppContext } from "../../context/AppContext";
import { useScrambleContext } from "./context/ScrambleContext";
import { PlayIcon, PauseIcon, ForwardIcon } from "@heroicons/react/24/solid"; // or '@heroicons/react/24/outline'
import { ScramblePhrase } from "./component/ScramblePhrase";
import { useTranslation } from "../../i18n/useTranslation";

export const ScrambleExercise = () => {
  const t = useTranslation(); // Use the translation hook

  const { isSrcRtl, phrases } = useAppContext();
  const { currentPhraseIndex, playPause, skip, currentPhrase, isPlaying } =
    useScrambleContext();

  return (
    <div className="flex flex-col justify-center items-center text-center w-full">
      <div className="text-left">
        <div className="text-sText text-sm">{t("exercise_title")}:</div>
        <div className="font-bold text-xl text-sText">
          {t("rebuild_a_scrambled_phrase")}
        </div>
      </div>
      <HorizontalRule />

      {/* Exercise Panel */}
      <div className="flex flex-col space-y-4 mt-4 text-3xl">
        <div
          className={`text-sText ${
            isSrcRtl ? "text-right text-rtl" : "text-left"
          }`}
        >
          {currentPhrase?.src}
        </div>
        <ScramblePhrase />
      </div>
      <HorizontalRule />

      {/* Button Panel */}
      <div className="flex flex-col space-y-4 mt-4 ">
        <div
          className={`flex space-x-4 mt-4 border  rounded-lg p-4 border-pBorder`}
        >
          <ControlButton toolTip="Play/Pause" onClick={playPause}>
            {isPlaying ? (
              <PauseIcon className="w-6 h-6  " />
            ) : (
              <PlayIcon className="w-6 h-6  " />
            )}
          </ControlButton>
          <ControlButton toolTip={t("skip_tooltip")} onClick={skip}>
            <ForwardIcon className="w-6 h-6 " />
          </ControlButton>
        </div>
      </div>

      {/* Statistic Panel */}
      <div className="mt-4 flex flex-col items-center text-xl">
        <TooltipWrapper text="played-sentences/total-sentences">
          <div className="text-sm">
            {currentPhraseIndex}/{phrases?.length || 0}
          </div>
        </TooltipWrapper>
      </div>
    </div>
  );
};
