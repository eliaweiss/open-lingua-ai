"use client";

import { ExerciseMenuItems } from "./components/ExerciseMenuItems";
import { useTranslation } from "./i18n/useTranslation";

export default function Home() {
  const t = useTranslation();
  return (
    <div>
      <div className="flex flex-col justify-center lg:w-[60%] mx-auto">
        <div className="text-lg font-bold">{t("exercise_title")}:</div>
        <ExerciseMenuItems />

        <div className="mt-10 font-semibold">
          {t("welcome_to")}{" "}
          <span className="font-bold text-lg">Open-Lingua-AI.org</span>
        </div>
        <div className="mt-4 ">{t("open_source_project_description")}</div>
        <div className="mt-2 ">
          {t("project_stage_description")}
          <ul className="space-y-2 my-2">
            <li>
              <span className="font-bold">
                {t("english_to_portuguese")}
                {"->"}
                {t("portuguese_to_english")}
              </span>
            </li>
            <li>
              <span className="font-bold">
                {t("portuguese_to_english")}
                {"->"}
                {t("english_to_portuguese")}
              </span>
            </li>
          </ul>
          {t("support_any_language_pair")}
        </div>
        <div className="mt-2 ">
          {t("please_give_it_a_try")}{" "}
          <a
            className="underline text-blue-500"
            href="mailto:elia.weiss@gmail.com"
          >
            {t("send_me_feedback")}{" "}
          </a>
        </div>
        <div className="mt-2 ">{t("current_support_exercises")}</div>
        <div className="mt-2 ">{t("note_app_data_storage")}</div>
      </div>
    </div>
  );
}
