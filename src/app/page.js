"use client";

import MenuItem from "./components/MenuItem";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center lg:w-[60%] mx-auto">
        <div className="text-lg font-bold">Exercise:</div>
        <MenuItem href="/playSentences">Play Sentence Exercise</MenuItem>
        <MenuItem href="/scramble">Scramble Exercise</MenuItem>
        <div className="mt-10 font-semibold">
          Welcome to{" "}
          <span className="font-bold text-lg">Open-Lingua-AI.org</span>
        </div>
        <div className="mt-4 ">
          This is an open source project that allow you practice a new language
          for free.
        </div>
        <div className="mt-2 ">
          The project is in early development stage and only support{" "}
          <span className="font-bold">
            English
            {"->"}Portuguese
          </span>
          , but it is meant to support any language pair using Language-Model
          (LLM)
        </div>
        <div className="mt-2 ">
          Please give it a try and{" "}
          <a
            className="underline text-blue-500"
            href="mailto:elia.weiss@gmail.com"
          >
            send me feedback{" "}
          </a>
        </div>
        <div className="mt-2 ">
          We currently support only two exercises that are easy to understand.
          Therefore, the explanation provided is brief. However, I plan to
          elaborate on the text and the exercises in the future.
        </div>
        <div className="mt-2 ">
          {`Note: The app does not store any information remotely. All data is stored locally, and there is no backup available.`}
        </div>
      </div>
    </div>
  );
}
