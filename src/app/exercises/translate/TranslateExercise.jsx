import React from "react";

import SelectComponent from "@/app/components/SelectComponent";
import useAppStore from "@/app/store/appStore";
import useTranslateExerciseStore, {
  TranslateDirection,
} from "./store/TranslateExerciseStore";

const TranslateExercise = () => {
  const { getLanguageName } = useAppStore();
  const {
    originalText,
    setOriginalText,
    translatedText,
    setTranslatedText,
    sourceLanguage,
    setSourceLanguage,
    targetLanguage,
    setTargetLanguage,
    translateDirection,
    setTranslateDirection,
  } = useTranslateExerciseStore();

  const handleTranslate = () => {
    // Implement translation logic here
    // This could involve calling an API or using a library
    console.log("Translate button clicked");
  };
  const options = [
    {
      value: TranslateDirection.TARGET_TO_SOURCE,
      label: (
        <div>
          {getLanguageName("target")} → {getLanguageName("src")}
        </div>
      ),
    },
    {
      value: TranslateDirection.SOURCE_TO_TARGET,
      label: (
        <div>
          {getLanguageName("src")} → {getLanguageName("target")}
        </div>
      ),
    },
  ];
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Translation Exercise</h1>

      <div className="mb-4">
        <label className="block mb-2">Source Language:</label>
        <SelectComponent
          value={translateDirection}
          onChange={(value) => setTranslateDirection(value)}
          className="w-full p-2 border rounded"
          options={options}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Original Text:</label>
        {originalText}
      </div>

      <button
        onClick={handleTranslate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Translate
      </button>

      <div className="mb-4 mt-4">
        <label className="block mb-2">Target Language:</label>
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="es">Spanish</option>
          <option value="en">English</option>
          {/* Add more language options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Translated Text:</label>
        <textarea
          value={translatedText}
          readOnly
          className="w-full p-2 border rounded bg-gray-100"
          rows="4"
        />
      </div>
    </div>
  );
};

export default TranslateExercise;
