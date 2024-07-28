// src/i18n/index.js
import { IntlProvider } from "react-intl";
import React, { useState } from "react";
// import * as messages from "./locales"; // Assuming locale files are in the 'locales' folder

const availableLocales = ["en", "es"]; // Add more locales as needed

const I18nContext = React.createContext();

const loadLocale = async (locale) => {
  const localeModule = await import(`./locales/${locale}.json`);
  return localeModule.default;
};

function I18nProvider({ children }) {
  const [locale, setLocale] = useState(navigator.language.substring(0, 2)); // Default to browser locale

  const handleLocaleChange = (newLocale) => {
    if (availableLocales.includes(newLocale)) {
      setLocale(newLocale);
    }
  };

  return (
    <I18nContext.Provider value={{ locale, handleLocaleChange }}>
      <IntlProvider locale={locale} messages={loadLocale(locale)}>
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
}

export { I18nProvider, I18nContext };
