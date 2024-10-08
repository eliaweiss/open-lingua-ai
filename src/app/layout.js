"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider, useAppContext } from "./context/AppContext";

import { NavMenu } from "./components/NavMenu";
import { AppHeader } from "./components/AppHeader";
// src/app.js
import { I18nProvider } from "./i18n";
import { LoadingOverlay } from "./components/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <I18nProvider>
            <AppWrapper>{children}</AppWrapper>
          </I18nProvider>
        </AppProvider>
      </body>
    </html>
  );
}
const AppWrapper = ({ children }) => {
  const { isMenuOpen, setIsMenuOpen, isLoadingAppFlag } = useAppContext();

  return (
    <div
      className={`bg-globalBg  text-pText min-h-screen h-full overflow-hidden`}
    >
      <aside
        className={`bg-menuBg z-10 md:w-64 fixed top-0 left-0 h-full transition-all duration-300 ${
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
        {isLoadingAppFlag && <LoadingOverlay />}
      </main>
    </div>
  );
};
