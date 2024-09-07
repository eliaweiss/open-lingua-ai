import React from "react";
import useTranslateExerciseStore from "./store/TranslateExerciseStore";
import ControlButton from "@/app/components/ControlButton";
import { useTranslation } from "@/app/i18n/useTranslation";

const TranslateExerciseSettings = () => {
  const t = useTranslation();
  const { setExerciseCounter } = useTranslateExerciseStore();

  return (
    <div className="p-4 border rounded">
      <ControlButton
        onClick={() => setExerciseCounter(0)}
        className="bg-sBg"
        toolTip={t("reset_exercise_counter")}
      >
        {t("reset_exercise_counter")}
      </ControlButton>
    </div>
  );
};

export default TranslateExerciseSettings;
