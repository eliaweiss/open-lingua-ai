import React, { createContext, useState, useContext } from 'react';

const TranslateExerciseContext = createContext();

export const useTranslateExercise = () => useContext(TranslateExerciseContext);

export const TranslateExerciseProvider = ({ children }) => {
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');

  const value = {
    originalText,
    setOriginalText,
    translatedText,
    setTranslatedText,
    sourceLanguage,
    setSourceLanguage,
    targetLanguage,
    setTargetLanguage,
    // Add any other state or functions needed for the translation exercise
  };

  return (
    <TranslateExerciseContext.Provider value={value}>
      {children}
    </TranslateExerciseContext.Provider>
  );
};