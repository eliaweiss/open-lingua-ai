"use client";

import { ScrambleProvider } from "./context/ScrambleContext";
import { ScrambleExercise } from "./ScrambleExercise";
import { SpeechSynthesisProvider } from "../../context/SpeechSynthesisContext";

const Page = () => {
  return (
    <div>
      <SpeechSynthesisProvider>
        <ScrambleProvider>
          <ScrambleExercise />
        </ScrambleProvider>
      </SpeechSynthesisProvider>
    </div>
  );
};

export default Page;
