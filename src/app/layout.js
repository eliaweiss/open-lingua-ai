"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider, useAppContext } from "./context/AppContext";

import { useState } from "react";
import { NavMenu } from "./components/NavMenu";
import { AppHeader } from "./components/AppHeader";

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
    <div
      className={`bg-globalBg  text-pText min-h-screen h-full overflow-hidden`}
    >
      <aside
        className={`bg-menuBg z-50 md:w-64 fixed top-0 left-0 h-full transition-all duration-300 ${
          isMenuOpen ? "w-64" : "w-0"
        } `}
      >
        <NavMenu isMenuOpen={isMenuOpen} />
      </aside>
      <main className={`flex-1 ml-0 md:ml-64 h-full min-h-screen `}>
        <header className="p-4 bg-[#8196db44]">
          <AppHeader />
        </header>
        <div
          className="p-4  relative  h-full"
          onClick={() => setIsMenuOpen(false)}
        >
          {children}
        </div>
      </main>
    </div>
  );
};
