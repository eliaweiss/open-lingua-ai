// src/i18n/index.js
import { IntlProvider } from "react-intl";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
// import * as messages from "./locales"; // Assuming locale files are in the 'locales' folder
import enTranslations from "./locales/en.json";

export const availableLocales = ["en", "pt"]; // Add more locales as needed

const I18nContext = React.createContext();

const loadLocale = async (locale) => {
  const localeModule = await import(`./locales/${locale}.json`);
  return localeModule.default;
};

function I18nProvider({ children }) {
  const { locale } = useAppContext();
  const [messages, setMessages] = useState(enTranslations); // Default to

  useEffect(() => {
    const newLocale = locale ?? navigator.language.substring(0, 2);
    // console.log("newLocale: ", newLocale);
    loadLocale(newLocale).then((newMessages) => {
      setMessages(newMessages);
    });
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
}

export { I18nProvider, I18nContext };
