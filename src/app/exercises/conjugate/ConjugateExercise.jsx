import React from "react";
import { useConjugate } from "./context/ConjugateContext";
import { useTranslation } from "@/app/i18n/useTranslation";

export const ConjugateExercise = () => {
  const t = useTranslation(); // Add this line
  const { verb, setVerb, tense, setTense, answer, setAnswer } = useConjugate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to check the answer
    console.log("Submitted:", { verb, tense, answer });
  };

  return (
    <div>
      <h1>{t("conjugate_exercise")}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="verb">{t("verb")}:</label>
          <input
            type="text"
            id="verb"
            value={verb}
            onChange={(e) => setVerb(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tense">{t("tense")}:</label>
          <select
            id="tense"
            value={tense}
            onChange={(e) => setTense(e.target.value)}
          >
            <option value="">{t("select_tense")}</option>
            <option value="present">{t("present")}</option>
            <option value="past">{t("past")}</option>
            <option value="future">{t("future")}</option>
          </select>
        </div>
        <div>
          <label htmlFor="answer">{t("your_answer")}:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <button type="submit">{t("check")}</button>
      </form>
    </div>
  );
};
