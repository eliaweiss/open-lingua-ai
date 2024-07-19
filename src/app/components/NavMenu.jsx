import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"; // Correct import syntax for v2
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
        <ul className="p-4 mt-10">
          <MenuItem href="/exercise1">Exercise 1</MenuItem>
          <MenuItem href="/exercise2">Exercise 2</MenuItem>
          <MenuItem href="/settings">Settings</MenuItem>
          <MenuItem>
            <ThemeToggle />
          </MenuItem>
        </ul>
      </nav>
    </>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useAppContext();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2"
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-800" />
      )}
    </button>
  );
}
