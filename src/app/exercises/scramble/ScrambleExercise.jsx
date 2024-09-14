import React, { useState } from "react"; // Add this import
import HorizontalRule from "../../components/HorizontalRule";
import TooltipWrapper from "../../components/TooltipWrapper";
import ControlButton from "../../components/ControlButton";
import { useAppContext } from "../../context/AppContext";
import {
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid"; // or '@heroicons/react/24/outline'
import { ScramblePhrase } from "./component/ScramblePhrase";
import { useTranslation } from "../../i18n/useTranslation";
import ScrambleExerciseSettings from "./ScrambleExerciseSettings"; // Add this import
import { useScrambleFunctions } from "./context/scrambleFunctions";
import useScrambleStore from "./store/useScrambleStore";

export const ScrambleExercise = () => {
  const t = useTranslation(); // Use the translation hook

  const { isSrcRtl, phrases, currentPhraseIndex, currentPhrase } =
    useAppContext();

  const { playPause, skip } = useScrambleFunctions();
  const {
    isPlaying,
    exerciseCounter,
    showTranslationSettings,
    showTranslation,
    setShowTranslation,
  } = useScrambleStore();

  const [showSettings, setShowSettings] = useState(false); // Add this state

  function ifShowTranslation() {
    if (showTranslation) {
      return true;
    }
    if (showTranslationSettings) {
      return true;
    }
    return false;
  }
  return (
    <div>
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
          {ifShowTranslation() ? (
            <div
              className={`text-sText ${
                isSrcRtl ? "text-right text-rtl" : "text-left"
              }`}
            >
              {currentPhrase?.src}
            </div>
          ) : (
            <div>
              <ControlButton
                className="bg-sBg text-bText"
                toolTip={t("click_to_show_translation")}
                onClick={() => setShowTranslation(true)}
              >
                {t("click_to_show_translation")}
              </ControlButton>
            </div>
          )}
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
        <div className="mt-4 flex flex-col items-center text-xl">
          <div className="text-sm">
            {t("exercise_counter")}: {exerciseCounter}
          </div>
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
        {showSettings && <ScrambleExerciseSettings />}
      </div>
    </div>
  );
};
