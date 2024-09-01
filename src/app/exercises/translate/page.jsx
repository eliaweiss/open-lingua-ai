"use client";

import { SpeechSynthesisProvider } from "../../context/SpeechSynthesisContext";
import { TranslateExerciseProvider } from "./context/TranslateExerciseContext";
import TranslateExercise from "./TranslateExercise";

const Page = () => {
  return (
    <div>
      <SpeechSynthesisProvider>
        <TranslateExerciseProvider>
          <TranslateExercise />
        </TranslateExerciseProvider>
      </SpeechSynthesisProvider>
    </div>
  );
};

export default Page;
