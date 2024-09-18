import React, { useState } from "react";
import { useTranslation } from "@/app/i18n/useTranslation";
import useConjugateExerciseStore from "./store/ConjugateExerciseStore";
import Textarea from "@/app/components/Textarea";
import ControlButton from "@/app/components/ControlButton";
import { createConjugation } from "./store/createConjugation";
import TenseSelector from "./component/TenseSelector";
import SwitchComponent from "@/app/components/SwitchComponent";

const ConjugateExerciseSettings = () => {
  const t = useTranslation();
  const {
    verbList,
    setVerbList,
    setExerciseCounter,
    autoReadAloud,
    setAutoReadAloud,
  } = useConjugateExerciseStore();

  return (
    <div className="p-4 border rounded-lg border-pBorder flex flex-col gap-2 space-y-2">
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
      <div className="flex flex-col gap-2 space-y-2">
        <div className="text-xl font-bold text-sText">{t("set_verb_list")}</div>
        <Textarea
          value={verbList}
          onChange={(e) => setVerbList(e.target.value)}
          placeholder={t("set_verb_list")}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-2 space-y-2">
        <TenseSelector />
      </div>
      <div className="flex flex-col gap-2 space-y-2">
        <ControlButton
          onClick={createConjugation}
          className="bg-sBg"
          toolTip={t("create_conjugation")}
        >
          {t("create_conjugation")}
        </ControlButton>
      </div>
    </div>
  );
};

export default ConjugateExerciseSettings;
