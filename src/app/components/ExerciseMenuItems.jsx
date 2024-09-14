import React from "react";
import MenuItem from "./MenuItem";
import { useTranslation } from "@/app/i18n/useTranslation";

export function ExerciseMenuItems() {
  const t = useTranslation();

  return (
    <>
      <MenuItem href="/exercises/playSentences">
        {t("play_sentence_exercise")}
      </MenuItem>
      <MenuItem href="/exercises/scramble">
        {t("scramble_exercise")}
      </MenuItem>
      <MenuItem href="/exercises/translate">
        {t("translate_exercise")}
      </MenuItem>
      <MenuItem href="/exercises/conjugate">
        {t("conjugate_exercise")}
      </MenuItem>
    </>
  );
}