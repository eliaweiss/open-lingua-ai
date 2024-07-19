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
import { NavMenu } from "./components/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <AppWrapper>{children}</AppWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
const AppWrapper = ({ children }) => {
  const { theme, isMenuOpen, setIsMenuOpen } = useAppContext();

  return (
    <div className={`bg-globalBg flex min-h-screen text-pText`}>
      <aside
        className={`bg-menuBg z-50 md:w-64 fixed top-0 left-0 h-full transition-all duration-300 ${
          isMenuOpen ? "w-64" : "w-0"
        } `}
      >
        <NavMenu isMenuOpen={isMenuOpen} />
      </aside>
      <main className={`flex-1 ml-0 md:ml-64`}>
        <header className="p-4 bg-[#8196db44]">
          {!isMenuOpen && (
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
              <Bars3Icon className="h-6 w-6" /> {/* Hamburger menu icon */}
            </button>
          )}
        </header>
        <div
          className="p-4 h-screen relative"
          onClick={() => setIsMenuOpen(false)}
        >
          {children}
        </div>
      </main>
    </div>
  );
};
