"use client";

import { PlaySentenceProvider } from "./context/PlaySentenceContext";
import { PlaySentencesExercise } from "./PlaySentencesExercise";

const Page = () => {
  return (
    <div>
      <PlaySentenceProvider>
        <PlaySentencesExercise />
      </PlaySentenceProvider>
    </div>
  );
};

export default Page;
