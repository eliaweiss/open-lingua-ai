import React from "react";
import { useTranslation } from "@/app/i18n/useTranslation";
import CheckboxComponent from "@/app/components/CheckboxComponent";
import useConjugateExerciseStore from "../store/ConjugateExerciseStore";

const TENSES = [
  "simple_past",
  "past_imperfect",
  "present",
  "future",
  "periphrastic_future",
  "past_perfect",
  "past_subjunctive",
  "present_subjunctive",
  "future_subjunctive",
  "gerund",
  "conditional",
  "affirmative_imperative",
  "negative_imperative",
];

const TenseSelector = () => {
  const t = useTranslation();
  const { tenses, setTenses } = useConjugateExerciseStore();

  const handleCheckboxChange = (tense) => {
    const newTenses = tenses.includes(tense)
      ? tenses.filter((t) => t !== tense)
      : [...tenses, tense];
    setTenses(newTenses);
  };

  return (
    <div className="flex flex-col gap-2 space-y-2">
      <div className="text-xl font-bold text-sText">{t("select_tenses")}</div>
      <div className="flex flex-wrap gap-2">
        {TENSES.map((tense) => (
          <CheckboxComponent
            key={tense}
            label={t(tense)}
            checked={tenses.includes(tense)}
            onChange={() => handleCheckboxChange(tense)}
          />
        ))}
      </div>
    </div>
  );
};

export default TenseSelector;
