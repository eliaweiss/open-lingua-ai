import { useTranslation } from "@/app/i18n/useTranslation";
import { useAppContext } from "../../context/AppContext";

import ReadSettingDnd from "./ReadSettingDnd";
import { deepCopy } from "@/app/utils/deepCopy";
export const BEGINNER_READ_SETTINGS = {
  level: "BEGINNER",
  list: [
    { lang: "src", waitAfter: 1, rate: 1, isAccented: false },
    { lang: "target", waitAfter: 1, rate: 1, isAccented: false },
    { lang: "target", waitAfter: 2, rate: 1, isAccented: true },
    { lang: "target", waitAfter: 1, rate: 1, isAccented: false },
  ],
};
export const MEDIUM_READ_SETTINGS = {
  level: "MEDIUM",
  list: [
    { lang: "src", waitAfter: 1, rate: 1.1, isAccented: false },
    { lang: "target", waitAfter: 1, rate: 1, isAccented: false },
    { lang: "target", waitAfter: 2, rate: 1, isAccented: true },
  ],
};
export const ADVANCE_READ_SETTINGS = {
  level: "ADVANCE",
  list: [
    { lang: "target", waitAfter: 1, rate: 1, isAccented: false },
    { lang: "target", waitAfter: 2, rate: 1, isAccented: true },
    { lang: "src", waitAfter: 1, rate: 1.15, isAccented: false },
  ],
};

export function PlaySentenceSettings() {
  const t = useTranslation(); // Use the translation hook

  const { readSettingsArray, setReadSettingsArray } = useAppContext();
  return (
    <div className="px-2 py-2 bg-menuBg rounded-lg">
      <div className="mb-6">
        <div className="flex space-x-2 mb-1 items-center">
          <button
            className={`rounded-lg text-pText text-sm px-1 py-1 border border-bg-pBg ${
              readSettingsArray.level == "BEGINNER" ? "bg-sBg" : "bg-pBg"
            }`}
            onClick={() =>
              setReadSettingsArray(deepCopy(BEGINNER_READ_SETTINGS))
            }
          >
            {t("beginner")}
          </button>
          <button
            className={`rounded-lg text-pText text-sm px-1 py-1 border border-bg-pBg ${
              readSettingsArray.level == "MEDIUM" ? "bg-sBg" : "bg-pBg"
            }`}
            onClick={() => setReadSettingsArray(deepCopy(MEDIUM_READ_SETTINGS))}
          >
            {t("medium")}
          </button>
          <button
            className={`rounded-lg text-pText text-sm px-1 py-1 border border-bg-pBg ${
              readSettingsArray.level == "ADVANCE" ? "bg-sBg" : "bg-pBg"
            }`}
            onClick={() =>
              setReadSettingsArray(deepCopy(ADVANCE_READ_SETTINGS))
            }
          >
            {t("advance")}
          </button>
        </div>
        <div className="">
          <ReadSettingDnd />
        </div>
      </div>
    </div>
  );
}
