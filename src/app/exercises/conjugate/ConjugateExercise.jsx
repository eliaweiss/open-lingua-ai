import React, { useEffect, useMemo, useRef } from "react";
import { useConjugateExercise } from "./context/ConjugateContext";
import { useTranslation } from "@/app/i18n/useTranslation";
import HorizontalRule from "@/app/components/HorizontalRule";
import { createConjugationApi } from "./createConjugationApi";
import useConjugateExerciseStore from "./store/ConjugateExerciseStore";
import useAppStore from "@/app/store/appStore";

export const ConjugateExercise = () => {
  const { appInitFlag } = useAppStore();
  const t = useTranslation(); // Add this line
  const { exerciseData, setExerciseData, exerciseIndex, setExerciseIndex } =
    useConjugateExerciseStore();

  const currentExercise = useMemo(() => {
    if (!exerciseData) return null;
    return exerciseData[exerciseIndex];
  }, [exerciseData, exerciseIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to check the answer
    console.log("Submitted:", { verb, tense, answer });
  };

  async function createConjugation() {
    const exerciseData = await createConjugationApi();
    setExerciseData(exerciseData);
    setExerciseIndex(0);
  }

  const apiSubmitted = useRef(false);
  useEffect(() => {
    if (!appInitFlag) return;
    if (!apiSubmitted.current) {
      createConjugation();
      apiSubmitted.current = true;
    }
  }, [appInitFlag]);

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
          <div>{currentExercise.verb}</div>
          <div>{currentExercise.tense}</div>
          <div>{currentExercise.answer}</div>
        </div>
      )}
    </div>
  );
};
