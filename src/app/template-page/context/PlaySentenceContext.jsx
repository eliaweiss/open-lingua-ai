"use client";
import { createContext, useState, useContext, useEffect } from "react";

const PlaySentenceContext = createContext();

export const PlaySentenceProvider = ({ children }) => {
  const t = 1;
  return (
    <PlaySentenceContext.Provider value={{ t }}>
      {children}
    </PlaySentenceContext.Provider>
  );
};

export const usePlaySentenceContext = () => useContext(PlaySentenceContext);
