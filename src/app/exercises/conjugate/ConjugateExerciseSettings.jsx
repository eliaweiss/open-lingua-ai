import React from "react";
import { useTranslation } from "@/app/i18n/useTranslation";
import useConjugateExerciseStore from "./store/ConjugateExerciseStore";
import Textarea from "@/app/components/Textarea";
import ControlButton from "@/app/components/ControlButton";
import { createConjugation } from "./store/createConjugation";

const ConjugateExerciseSettings = () => {
  const t = useTranslation();
  const { verbList, setVerbList, setExerciseCounter } =
    useConjugateExerciseStore();

  return (
    <div className="p-4 border rounded-lg border-pBorder">
      <div className="flex flex-col gap-2 space-y-2">
        <Textarea
          value={verbList}
          onChange={(e) => setVerbList(e.target.value)}
          placeholder={t("set_verb_list")}
          className="w-full"
        />
        <ControlButton
          onClick={createConjugation}
          className="bg-sBg"
          toolTip={t("create_conjugation")}
        >
          {t("create_conjugation")}
        </ControlButton>
        <ControlButton
          onClick={() => setExerciseCounter(0)}
          className="bg-sBg"
          toolTip={t("reset_exercise_counter")}
        >
          {t("reset_exercise_counter")}
        </ControlButton>
      </div>
    </div>
  );
};

export default ConjugateExerciseSettings;
