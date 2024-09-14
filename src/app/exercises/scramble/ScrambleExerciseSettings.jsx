import React from "react";
import ControlButton from "../../components/ControlButton";
import { useTranslation } from "../../i18n/useTranslation";
import useScrambleStore from "./store/useScrambleStore";
import SwitchComponent from "@/app/components/SwitchComponent";

const ScrambleExerciseSettings = () => {
  const t = useTranslation();
  const {
    setExerciseCounter,
    showTranslationSettings,
    setShowTranslationSettings,
  } = useScrambleStore();

  return (
    <div className="p-4 border rounded flex flex-col gap-2">
      <ControlButton
        onClick={() => setExerciseCounter(0)}
        className="bg-sBg"
        toolTip={t("reset_exercise_counter")}
      >
        {t("reset_exercise_counter")}
      </ControlButton>
      <SwitchComponent
        label={t("show_translation")}
        initialChecked={showTranslationSettings}
        onChange={(checked) => setShowTranslationSettings(checked)}
      />
    </div>
  );
};

export default ScrambleExerciseSettings;
