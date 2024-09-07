import React from "react";
import { useScrambleContext } from "./context/ScrambleContext";
import ControlButton from "../../components/ControlButton";
import { useTranslation } from "../../i18n/useTranslation";

const ScrambleExerciseSettings = () => {
  const t = useTranslation();
  const { setExerciseCounter } = useScrambleContext();

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

export default ScrambleExerciseSettings;