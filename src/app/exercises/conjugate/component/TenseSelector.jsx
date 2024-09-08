import React from "react";
import { useTranslation } from "@/app/i18n/useTranslation";
import CheckboxComponent from "@/app/components/CheckboxComponent";
import useConjugateExerciseStore from "../store/ConjugateExerciseStore";

const TENSES = [
  "simple_past",
  "past_imperfect",
  "present",
  "future",
  "past_perfect",
  "future_subjunctive",
  "present_subjunctive",
  "gerund",
];

const TenseSelector = () => {
  const t = useTranslation();
  const { tenses, setTenses } = useConjugateExerciseStore();

  const handleCheckboxChange = (tense) => {
    setTenses((prev) =>
      prev.includes(tense) ? prev.filter((t) => t !== tense) : [...prev, tense]
    );
  };

  return (
    <div className="flex flex-col gap-2">
      {TENSES.map((tense) => (
        <CheckboxComponent
          key={tense}
          label={t(tense)}
          checked={tenses.includes(tense)}
          onChange={() => handleCheckboxChange(tense)}
        />
      ))}
    </div>
  );
};

export default TenseSelector;
