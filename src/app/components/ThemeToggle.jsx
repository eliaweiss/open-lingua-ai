// components/ThemeToggle.js
"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";

const ThemeToggle = ({ children }) => {
  const { theme, toggleTheme } = useAppContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering mismatched content

  return (
    <div className="flex space-x-2 items-center" onClick={toggleTheme}>
      <button className="">
        <div className="flex space-x-2">
          {/* <div>Change Theme</div> */}
          <div>
            {theme === "dark" ? (
              <SunIcon className="h-6 w-6 text-sText" />
            ) : (
              <MoonIcon className="h-6 w-6 text-sText" />
            )}
          </div>
        </div>
      </button>
      <div className="h-6 ">{children}</div>
    </div>
  );
};

export default ThemeToggle;
