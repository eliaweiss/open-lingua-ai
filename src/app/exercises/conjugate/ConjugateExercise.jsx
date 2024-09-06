import React, { useEffect, useMemo, useRef } from "react";
import { useConjugateExercise } from "./context/ConjugateContext";
import { useTranslation } from "@/app/i18n/useTranslation";
import HorizontalRule from "@/app/components/HorizontalRule";
import { createConjugationApi } from "./createConjugationApi";
import useConjugateExerciseStore from "./store/ConjugateExerciseStore";
import useAppStore from "@/app/store/appStore";
import { Input } from "@/app/components/Input";

export const ConjugateExercise = () => {
  const { appInitFlag, isTargetRtl } = useAppStore();
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

  return (
    <div>
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
        <div>
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
          {/* {showHint && (
            <div className="text-sText text-2xl text-left fixed top-10 bg-pBg p-2 border border-pBorder rounded-sm ">
              {suggestedTranslatedText}
            </div>
          )} */}
          <div className="">Verb: {currentExercise.verb}</div>
          <div className="">Tense: {currentExercise.tense}</div>
          {showCorrectAnswer && (
            <div className="">
              Correct Answer: {currentExercise.completeSentence}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
