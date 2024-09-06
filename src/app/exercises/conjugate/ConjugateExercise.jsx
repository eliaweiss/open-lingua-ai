import React from "react";
import { useConjugateExercise } from "./context/ConjugateContext";
import { useTranslation } from "@/app/i18n/useTranslation";
import HorizontalRule from "@/app/components/HorizontalRule";

export const ConjugateExercise = () => {
  const t = useTranslation(); // Add this line
  const { verb, setVerb, tense, setTense, answer, setAnswer } =
    useConjugateExercise();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to check the answer
    console.log("Submitted:", { verb, tense, answer });
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
    </div>
  );
};
