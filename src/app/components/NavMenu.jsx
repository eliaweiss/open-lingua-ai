"use client";
import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline"; // Correct import syntax for v2
import { useAppContext } from "../context/AppContext";

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
        <div className="p-4 mt-10">
          <div>Exercise:</div>
          <MenuItem href="/playSentences">Play Sentence Exercise</MenuItem>
          <MenuItem href="/scramble">Scramble Exercise</MenuItem>
          <div>General:</div>

          <MenuItem href="/settings">
            <div className="flex space-x-2">
              <Cog6ToothIcon className="w-5" />
              <div>Settings</div>
            </div>
          </MenuItem>
        </div>
      </nav>
    </>
  );
}
