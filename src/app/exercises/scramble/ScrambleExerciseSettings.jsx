import React from "react";
import ControlButton from "../../components/ControlButton";
import { useTranslation } from "../../i18n/useTranslation";
import useScrambleStore from "./store/useScrambleStore";

const ScrambleExerciseSettings = () => {
  const t = useTranslation();
  const { setExerciseCounter } = useScrambleStore();

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
