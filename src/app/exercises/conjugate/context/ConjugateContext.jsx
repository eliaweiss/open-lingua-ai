import React, { createContext, useState, useContext } from 'react';

const ConjugateContext = createContext();

export const useConjugate = () => useContext(ConjugateContext);

export const ConjugateProvider = ({ children }) => {
  const [verb, setVerb] = useState('');
  const [tense, setTense] = useState('');
  const [answer, setAnswer] = useState('');

  const value = {
    verb,
    setVerb,
    tense,
    setTense,
    answer,
    setAnswer,
  };

  return (
    <ConjugateContext.Provider value={value}>
      {children}
    </ConjugateContext.Provider>
  );
};