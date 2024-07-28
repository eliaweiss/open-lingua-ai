"use client";

import { Input } from "../components/Input";
import MenuItem from "../components/MenuItem";
import ThemeToggle from "../components/ThemeToggle";
import { useAppContext } from "../context/AppContext";
import { useTranslation } from "../i18n/useTranslation";

export function SettingsUi() {
  const { phraseRange, setPhraseRange, allPhrases } = useAppContext();
  const t = useTranslation();

  const handleRangeChange = (event) => {
    const { name, value } = event.target;
    setPhraseRange((prevRange) => {
      const newRange = [...prevRange];
      if (name === "start") {
        newRange[0] = Number(value);
      } else {
        const val = Math.min(allPhrases.length, value);
        newRange[1] = Number(val);
      }
      // if (newRange[0] >= newRange[1]) {
      //   newRange[1] = allPhrases.length;
      //   // throw new Error("Invalid phrase range");
      // }
      return newRange;
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 bg-muted p-2 rounded">
        {t("settings_title")}
      </h1>

      <div className="mb-6">
        <MenuItem>
          <ThemeToggle className="">
            <div className="text-xl mb-2">{t("toggle_theme")}</div>
          </ThemeToggle>
        </MenuItem>
      </div>

      <div className="mb-6">
        <h2 className="text-xl mb-2">{t("phrase_range_title")}</h2>
        <div className="flex space-x-2">
          <label>
            {t("start")}:
            <Input
              maxlength="4"
              size="4"
              name="start"
              value={phraseRange[0]}
              onChange={handleRangeChange}
            />
          </label>
          <label>
            {t("end")}:
            <Input
              size="4"
              name="end"
              value={phraseRange[1]}
              onChange={handleRangeChange}
            />
          </label>
        </div>
        {phraseRange[0] >= phraseRange[1] && (
          <div className="text-red-500">
            {t("start_is_must_be_less_than_end")}
          </div>
        )}
        <div className="text-sm">{t("phrase_range_description")}</div>
      </div>
    </div>
  );
}
