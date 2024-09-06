import React from "react";
import { useTranslation } from "@/app/i18n/useTranslation";
import useConjugateExerciseStore from "./store/ConjugateExerciseStore";
import Textarea from "@/app/components/Textarea";

const ConjugateExerciseSettings = () => {
  const t = useTranslation();
  const { verbList, setVerbList } = useConjugateExerciseStore();

  return (
    <div className="p-4 border rounded-lg border-pBorder">
      <Textarea
        value={verbList}
        onChange={(e) => setVerbList(e.target.value)}
        placeholder={t("set_verb_list")}
        className="w-full"
      />
    </div>
  );
};

export default ConjugateExerciseSettings;
