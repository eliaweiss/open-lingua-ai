import React, { useEffect, useMemo, useRef } from "react";
import { useConjugateExercise } from "./context/ConjugateContext";
import { useTranslation } from "@/app/i18n/useTranslation";
import HorizontalRule from "@/app/components/HorizontalRule";
import { createConjugationApi } from "./createConjugationApi";
import useConjugateExerciseStore from "./store/ConjugateExerciseStore";
import useAppStore from "@/app/store/appStore";
import { Input } from "@/app/components/Input";
import ControlButton from "@/app/components/ControlButton";
import {
  CheckBadgeIcon,
  ForwardIcon,
  NoSymbolIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { readAloud } from "@/app/utils/speechUtils";
import { compareWords } from "@/app/utils/compareWords";

export const ConjugateExercise = () => {
  const { appInitFlag, isTargetRtl, targetLanguage } = useAppStore();
  const t = useTranslation(); // Add this line
  const {
    exerciseData,
    setExerciseData,
    exerciseIndex,
    setExerciseIndex,
    answer,
    setAnswer,
    showCorrectAnswer,
    setShowCorrectAnswer,
    resetExercise,
    showTense,
    setShowTense,
  } = useConjugateExerciseStore();

  const currentExercise = useMemo(() => {
    if (!exerciseData) return null;
    return exerciseData[exerciseIndex];
  }, [exerciseData, exerciseIndex]);

  const handleSubmit = () => {
    setShowCorrectAnswer(true);
    // e.preventDefault();
    // Add logic to check the answer
    // console.log("Submitted:", { verb, tense, answer });
  };

  const moveToNextExercise = () => {
    resetExercise();
    setExerciseIndex(exerciseIndex + 1);
  };

  const playCompleteSentence = async () => {
    await readAloud(currentExercise.completeSentence, targetLanguage, 1);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col justify-center items-center text-center w-full">
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
            <div className="">({currentExercise.verb})</div>
          </div>
          {/* {showHint && (
            <div className="text-sText text-2xl text-left fixed top-10 bg-pBg p-2 border border-pBorder rounded-sm ">
              {suggestedTranslatedText}
            </div>
          )} */}

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
          {showCorrectAnswer && (
            <div className="flex flex-col">
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
                  {compareWords(currentExercise.solution, answer) ? (
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
                <div className="w-10 h-10 border rounded-lg border-pBorder">
                  <ControlButton
                    toolTip={t("play")}
                    onClick={playCompleteSentence}
                  >
                    <PlayIcon className="w-6 h-6" />
                  </ControlButton>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="mt-4 border rounded-lg p-4 border-pBorder">
                  <ControlButton
                    toolTip={t("next")}
                    onClick={moveToNextExercise}
                  >
                    <ForwardIcon className="w-6 h-6" />
                  </ControlButton>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
