"use client";
import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline"; // Correct import syntax for v2
import { useAppContext } from "../context/AppContext";
import MenuItem from "./MenuItem";
import { useTranslation } from "@/app/i18n/useTranslation";

export function NavMenu({}) {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();
  const t = useTranslation();

  return (
    <>
      <nav
        className={`transition-all duration-300 ${
          isMenuOpen || "md:block hidden"
        }`}
      >
        <button onClick={() => setIsMenuOpen(false)} className="md:hidden p-4">
          <XMarkIcon className="h-6 w-6" /> {/* Close icon */}
        </button>
        <div className="p-4 mt-10" onClick={() => setIsMenuOpen(false)}>
          <div>{t("exercise_title")}:</div>
          <MenuItem href="/playSentences">
            {t("play_sentence_exercise")}
          </MenuItem>
          <MenuItem href="/scramble">{t("scramble_exercise")}</MenuItem>
          <MenuItem href="/exercises/translate">
            {t("translate_exercise")}
          </MenuItem>
          <div>{t("general_title")}:</div>
          <MenuItem href="/settings">
            <div className="flex space-x-2">
              <Cog6ToothIcon className="w-5" />
              <div>{t("settings_title")}</div>
            </div>
          </MenuItem>
        </div>
      </nav>
    </>
  );
}
