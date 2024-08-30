import { Bars3Icon } from "@heroicons/react/24/outline"; // Correct import syntax for v2
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "../i18n/useTranslation";
import useAppStore from "../store/appStore";

export function AppHeader({}) {
  const t = useTranslation(); // Use the translation hook

  const { isMenuOpen, setIsMenuOpen, dailyCount, toggleTheme } = useAppStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering mismatched content

  return (
    <div className="flex space-x-5">
      <ThemeToggle className="" onClick={toggleTheme} />

      {!isMenuOpen && (
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <Bars3Icon className="h-6 w-6" /> {/* Hamburger menu icon */}
        </button>
      )}
      <div>
        {t("daily")} # {dailyCount}
      </div>
    </div>
  );
}
