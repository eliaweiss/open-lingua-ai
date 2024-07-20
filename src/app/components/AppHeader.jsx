import { Bars3Icon } from "@heroicons/react/24/outline"; // Correct import syntax for v2
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";

export function AppHeader({}) {
  const { theme, isMenuOpen, setIsMenuOpen, dailyCount } = useAppContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering mismatched content

  return (
    <div className="flex space-x-5">
      {!isMenuOpen && (
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <Bars3Icon className="h-6 w-6" /> {/* Hamburger menu icon */}
        </button>
      )}
      <div>Daily # {dailyCount}</div>
    </div>
  );
}
