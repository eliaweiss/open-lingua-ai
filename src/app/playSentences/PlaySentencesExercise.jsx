import { useState } from "react";
import { PlaySentenceSettings } from "./components/PlaySentenceSettings";
import ControlButton from "../components/ControlButton";
import HorizontalRule from "../components/HorizontalRule";
import TooltipWrapper from "../components/TooltipWrapper";
import { useAppContext } from "../context/AppContext";
import { usePlaySentenceContext } from "./context/PlaySentenceContext";
import { PlayIcon, PauseIcon, ForwardIcon } from "@heroicons/react/24/solid"; // or '@heroicons/react/24/outline'
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "@/app/i18n/useTranslation";

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
  const [showSettings, setShowSettings] = useState(false);
  const t = useTranslation(); // Use the translation hook

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center text-center w-full">
        <div className="text-left">
          <div className="text-sText text-sm">{t("exercise_title")}:</div>
          <div className="font-bold text-xl text-sText">
            {t("play_sentences_in_loop")}
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
            <ControlButton
              toolTip={t("play_pause_tooltip")}
              onClick={playPause}
            >
              {isPlaying ? (
                <PauseIcon className={`w-6 h-6 `} />
              ) : (
                <PlayIcon className={`w-6 h-6 `} />
              )}
            </ControlButton>

            <ControlButton toolTip={t("skip_tooltip")} onClick={skip}>
              <ForwardIcon className={`w-6 h-6 `} />
            </ControlButton>
          </div>
          {isPlaying && <div>{t("playing_text")}</div>}
        </div>

        {/* Statistic Panel */}
        <div className="mt-4 flex flex-col items-center text-xl">
          <TooltipWrapper text={t("played_sentences_tooltip")}>
            <div className="text-sm">
              {currentPhraseIndex}/{phrases.length}
            </div>
          </TooltipWrapper>
        </div>
      </div>
      <div className="mb-2">
        <div
          className="flex space-x-2 cursor-pointer"
          onClick={() => setShowSettings(!showSettings)}
        >
          <Cog6ToothIcon className="w-5" />
          <div>{t("settings_title")}</div>
        </div>
      </div>

      <div
        className={`transition-opacity duration-1000 ${
          showSettings ? "opacity-100" : "opacity-0"
        }`}
      >
        {showSettings && <PlaySentenceSettings />}
      </div>
    </div>
  );
};
