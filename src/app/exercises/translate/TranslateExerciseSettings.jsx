import React from "react";
import useTranslateExerciseStore from "./store/TranslateExerciseStore";
import ControlButton from "@/app/components/ControlButton";
import { useTranslation } from "@/app/i18n/useTranslation";
import SwitchComponent from "@/app/components/SwitchComponent";

const TranslateExerciseSettings = () => {
  const t = useTranslation();
  const { setExerciseCounter, autoReadAloud, setAutoReadAloud } =
    useTranslateExerciseStore();

  console.log("autoReadAloud", autoReadAloud);  

  return (
    <div className="p-4 border rounded">
      <div className="flex flex-col gap-2 space-y-2">
        <SwitchComponent
          label={t("auto_read_aloud")}
          initialChecked={autoReadAloud}
          onChange={(checked) => setAutoReadAloud(checked)}
        />
      </div>
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
