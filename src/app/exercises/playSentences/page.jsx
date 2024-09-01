"use client";

import { PlaySentenceProvider } from "./context/PlaySentenceContext";
import { PlaySentencesExercise } from "./PlaySentencesExercise";
import { SpeechSynthesisProvider } from "../../context/SpeechSynthesisContext";

const Page = () => {
  return (
    <div>
      <SpeechSynthesisProvider>
        <PlaySentenceProvider>
          <PlaySentencesExercise />
        </PlaySentenceProvider>
      </SpeechSynthesisProvider>
    </div>
  );
};

export default Page;
