"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider, useAppContext } from "./context/AppContext";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"; // Correct import syntax for v2
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider {...{ isMenuOpen, setIsMenuOpen, theme, setTheme }}>
          <div
            className={`flex min-h-screen ${
              theme === "dark" ? "text-white" : "text-black"
            } `}
          >
            <aside
              className={`md:w-64 fixed top-0 left-0 h-full transition-all duration-300 ${
                isMenuOpen ? "w-64" : "w-0"
              }  ${theme === "dark" ? "bg-black" : "bg-[#d7dfed]"}`}
            >
              <NavMenu isMenuOpen={isMenuOpen} />
            </aside>
            <main
              className={`flex-1 ml-0 md:ml-64 ${
                theme === "dark" ? "bg-[#1a1a1e]" : ""
              }
            `}
            >
              <header className="p-4 bg-[#8196db44]">
                {!isMenuOpen && (
                  <button
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden"
                  >
                    <Bars3Icon className="h-6 w-6" />{" "}
                    {/* Hamburger menu icon */}
                  </button>
                )}
              </header>
              <div className="p-4">{children}</div>
            </main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}

function NavMenu({}) {
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
          <li>Exercise 1</li>
          <li>Exercise 2</li>
          <li>Settings</li>
          <li>
            <ThemeToggle />
          </li>
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
