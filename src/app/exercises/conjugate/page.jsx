"use client";

import { ConjugateProvider } from "./context/ConjugateContext";
import { ConjugateExercise } from "./ConjugateExercise";
import { SpeechSynthesisProvider } from "../../context/SpeechSynthesisContext";

const Page = () => {
  return (
    <div>
      <SpeechSynthesisProvider>
        <ConjugateProvider>
          <ConjugateExercise />
        </ConjugateProvider>
      </SpeechSynthesisProvider>
    </div>
  );
};

export default Page;
