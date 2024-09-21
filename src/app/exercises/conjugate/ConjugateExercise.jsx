import React, { useEffect, useMemo, useRef, useState } from "react";
import { useConjugateExercise } from "./context/ConjugateContext";
import { useTranslation } from "@/app/i18n/useTranslation";
import HorizontalRule from "@/app/components/HorizontalRule";

import useConjugateExerciseStore from "./store/ConjugateExerciseStore";
import useAppStore from "@/app/store/appStore";
import { Input } from "@/app/components/Input";
import ControlButton from "@/app/components/ControlButton";
import {
  CheckBadgeIcon,
  Cog6ToothIcon,
  ForwardIcon,
  NoSymbolIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { readAloud } from "@/app/utils/speechUtils";
import { compareText } from "@/app/utils/compareText";
import ConjugateExerciseSettings from "./ConjugateExerciseSettings";
import { checkMyAnswer } from "./store/checkMyAnswer";
import { fixExerciseApi } from "./store/fixExerciseApi";

export const ConjugateExercise = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [fixClickCounter, setFixClickCounter] = useState(0);
  const { isTargetRtl, targetLanguage, dailyCount, setDailyCount } =
    useAppStore();
  const t = useTranslation(); // Add this line
  const {
    // exerciseData,
    exerciseIndex,
    setExerciseIndex,
    answer,
    setAnswer,
    showCorrectAnswer,
    setShowCorrectAnswer,
    resetExercise,
    showTense,
    setShowTense,
    checkAnswerResponse,
    currentExercise,
    showTranslation,
    setShowTranslation,
    exerciseCounter,
    setExerciseCounter,
    autoReadAloud,
  } = useConjugateExerciseStore();

  const handleSubmit = () => {
    setShowCorrectAnswer(true);
    setShowTense(true);
    setShowTranslation(true);
    // un focus the input - to close the keyboard on mobile
    document.activeElement.blur();
    if (autoReadAloud) {
      playCompleteSentence(1.1);
    }
  };

  const moveToNextExercise = () => {
    setExerciseCounter(exerciseCounter + 1);
    resetExercise();
    setExerciseIndex(exerciseIndex + 1);
    setDailyCount(dailyCount + 1);
  };

  const playCompleteSentence = async (rate = 1) => {
    await readAloud(currentExercise.completeSentence, targetLanguage, rate);
  };

  function isAnswerCorrect(currentExercise, answer) {
    if (compareText(currentExercise.solution, answer)) {
      return true;
    } else {
      const regex = /_+(?: \(\w+\))?/;
      const updatedSentence = currentExercise.exercise.replace(regex, answer);
      if (compareText(updatedSentence, currentExercise.completeSentence)) {
        return true;
      }
      return false;
    }
  }

  const handleFixExerciseClick = () => {
    if (fixClickCounter === 0) {
      setFixClickCounter(1);
      setTimeout(() => {
        setFixClickCounter(0);
      }, 1000);
    } else {
      fixExerciseApi();
      setFixClickCounter(0);
    }
  };

  return (
    <div>
      <div className="flex justify-center flex-col space-y-4">
        <div className="flex  flex-col justify-center items-center text-center w-full">
          <div className="text-left">
            <div className="text-sText text-sm">{t("exercise_title")}:</div>
            <div className="font-bold text-xl text-sText">
              {t("conjugate_a_verb")}
            </div>
          </div>
        </div>
        <HorizontalRule />
        {currentExercise && (
          <div className="flex flex-col space-y-4">
            {/* Exercise Panel */}
            <div className="flex flex-col space-y-4 mt-4 text-2xl">
              <div
                className={`text-sText ${
                  isTargetRtl ? "text-right text-rtl" : "text-left"
                }`}
              >
                {currentExercise.exercise}
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <Input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(e);
                  }
                }}
                placeholder="Enter your answer"
              />
              <div className="">
                {currentExercise.pronoun} {"<"}
                {currentExercise.verb}
                {">"}
              </div>
            </div>

            <div className="">
              {t("tense")}:{" "}
              {showTense ? (
                `${currentExercise.tense}`
              ) : (
                <ControlButton
                  toolTip={t("show_tense")}
                  onClick={() => setShowTense(true)}
                  className="bg-sBg border-pBorder"
                >
                  {t("show_tense")}
                </ControlButton>
              )}
            </div>
            <div className="">
              {showTranslation ? (
                `${currentExercise.translation}`
              ) : (
                <ControlButton
                  toolTip={t("show_translation")}
                  onClick={() => setShowTranslation(true)}
                  className="bg-sBg border-pBorder"
                >
                  {t("show_translation")}
                </ControlButton>
              )}
            </div>

            {showCorrectAnswer && (
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-2 items-center">
                  <div className="text-sText ">Correct Answer:</div>
                  <div
                    className={`text-sText text-3xl font-bold ${
                      isTargetRtl ? "text-right text-rtl" : "text-left"
                    }`}
                  >
                    {currentExercise.solution}
                  </div>
                  <div>
                    {isAnswerCorrect(currentExercise, answer) ? (
                      <CheckBadgeIcon className="w-6 h-6 text-green-400" />
                    ) : (
                      <NoSymbolIcon className="w-6 h-6 text-red-400" />
                    )}
                  </div>
                </div>
                <div className="flex">
                  <div
                    className={`text-sText text-2xl ${
                      isTargetRtl ? "text-right text-rtl" : "text-left"
                    }`}
                  >
                    {currentExercise.completeSentence}
                  </div>
                  <div className="w-10 h-10 border rounded-lg border-pBorder m-2">
                    <ControlButton
                      toolTip={t("play")}
                      onClick={() => playCompleteSentence()}
                    >
                      <PlayIcon className="w-6 h-6" />
                    </ControlButton>
                  </div>
                </div>

                {/* <div className="text-sText text-lg">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: explanation,
                    }}
                  />
                </div> */}
                <div className="text-sText text-lg">
                  {!checkAnswerResponse ? (
                    <ControlButton
                      className="bg-sBg text-sText"
                      toolTip={t("check_my_answer")}
                      onClick={checkMyAnswer}
                    >
                      {t("check_my_answer")}
                    </ControlButton>
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: checkAnswerResponse,
                      }}
                    />
                  )}
                </div>

                <div className="flex justify-center">
                  <div className="mt-4 border rounded-lg border-pBorder ">
                    <ControlButton
                      className="p-4"
                      toolTip={t("next")}
                      onClick={moveToNextExercise}
                    >
                      <ForwardIcon className="w-6 h-6 " />
                    </ControlButton>
                  </div>
                </div>
              </div>
            )}
            <div className="text-sText text-lg">
              {t("exercise_counter")}: {exerciseCounter}
            </div>
          </div>
        )}
        <div className="mb-2">
          <div
            className="flex space-x-2 cursor-pointer"
            onClick={() => setShowSettings(!showSettings)}
          >
            <Cog6ToothIcon className="w-5" />
            <div>{t("settings_title")}</div>
          </div>
        </div>
      </div>

      <div
        className={`transition-opacity duration-1000 ${
          showSettings ? "opacity-100" : "opacity-0"
        }`}
      >
        {showSettings && (
          <div className="flex flex-col space-y-2 max-w-[500px]">
            <div>
              <ControlButton
                className="bg-sBg border-pBorder"
                toolTip={t("fix_exercise_msg")}
                onClick={handleFixExerciseClick}
              >
                {fixClickCounter === 0 ? t("fix_exercise") : t("click_again")}
              </ControlButton>
            </div>
            <ConjugateExerciseSettings />
          </div>
        )}
      </div>
    </div>
  );
};
