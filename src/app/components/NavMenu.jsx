"use client";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Correct import syntax for v2
import { useAppContext } from "../context/AppContext";

import ThemeToggle from "./ThemeToggle";
import MenuItem from "./MenuItem";

export function NavMenu({}) {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();
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
        <ul className="p-4 mt-10">
          <MenuItem href="/playSentences">Play Sentence Exercise</MenuItem>
          <MenuItem href="/scramble">Scramble Exercise</MenuItem>
          <MenuItem href="/settings">Settings</MenuItem>
          <MenuItem>
            <ThemeToggle className="" />
          </MenuItem>
        </ul>
      </nav>
    </>
  );
}
