import React from "react";
import { useTranslation } from "@/app/i18n/useTranslation";
import CheckboxComponent from "@/app/components/CheckboxComponent";

const tenses = [
  "simple_past",
  "past_imperfect",
  "present",
  "future",
  "past_perfect",
  "future_subjunctive",
  "present_subjunctive",
  "gerund",
];

const TenseSelector = ({ selectedTenses, setSelectedTenses }) => {
  const t = useTranslation();

  const handleCheckboxChange = (tense) => {
    setSelectedTenses((prev) =>
      prev.includes(tense) ? prev.filter((t) => t !== tense) : [...prev, tense]
    );
  };

  return (
    <div className="flex flex-col gap-2">
      {tenses.map((tense) => (
        <CheckboxComponent
          key={tense}
          label={t(tense)}
          checked={selectedTenses.includes(tense)}
          onChange={() => handleCheckboxChange(tense)}
        />
      ))}
    </div>
  );
};

export default TenseSelector;
