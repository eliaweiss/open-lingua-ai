import React, { useState } from "react";
import { useTranslation } from "@/app/i18n/useTranslation";
import useConjugateExerciseStore from "./store/ConjugateExerciseStore";
import Textarea from "@/app/components/Textarea";
import ControlButton from "@/app/components/ControlButton";
import { createConjugation } from "./store/createConjugation";
import TenseSelector from "./component/TenseSelector";

const ConjugateExerciseSettings = () => {
  const t = useTranslation();
  const { verbList, setVerbList, setExerciseCounter } =
    useConjugateExerciseStore();
  const [selectedTenses, setSelectedTenses] = useState([]);

  return (
    <div className="p-4 border rounded-lg border-pBorder">
      <ControlButton
        onClick={() => setExerciseCounter(0)}
        className="bg-sBg"
        toolTip={t("reset_exercise_counter")}
      >
        {t("reset_exercise_counter")}
      </ControlButton>
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
      </div>
      <div className="flex flex-col gap-2 space-y-2">
        <TenseSelector
          selectedTenses={selectedTenses}
          setSelectedTenses={setSelectedTenses}
        />
      </div>
    </div>
  );
};

export default ConjugateExerciseSettings;
