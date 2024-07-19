"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider, useAppContext } from "./context/AppContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Correct import syntax for v2
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider {...{ isMenuOpen, setIsMenuOpen }}>
          <div className="flex min-h-screen">
            <aside
              className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${
                isMenuOpen ? "w-64" : "w-0"
              } md:w-64`}
            >
              <NavMenu isMenuOpen={isMenuOpen} />
            </aside>
            <main className="flex-1 ml-0 md:ml-64">
              <header className="p-4 bg-gray-200">
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
        <ul>
          <li>Exercise 1</li>
          <li>Exercise 2</li>
          <li>Settings</li>
        </ul>
      </nav>
    </>
  );
}
