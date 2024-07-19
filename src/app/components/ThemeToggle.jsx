// components/ThemeToggle.js
"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering mismatched content

  return (
    <button onClick={toggleTheme} className="p-2 w-full">
      <div className="flex space-x-2">
        <div>Change Theme</div>
        <div>
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6 text-sText" />
          ) : (
            <MoonIcon className="h-6 w-6 text-sText" />
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
