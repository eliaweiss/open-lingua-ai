import React from "react";

import SelectComponent from "@/app/components/SelectComponent";
import useAppStore from "@/app/store/appStore";
import useTranslateExerciseStore, {
  TranslateDirection,
} from "./store/TranslateExerciseStore";
import HorizontalRule from "@/app/components/HorizontalRule";
import ControlButton from "@/app/components/ControlButton";
import { ForwardIcon } from "@heroicons/react/24/outline";
import TooltipWrapper from "@/app/components/TooltipWrapper";
import { useTranslation } from "@/app/i18n/useTranslation";

const TranslateExercise = () => {
  const t = useTranslation(); // Use the translation hook

  const { getLanguageName, currentPhraseIndex, phrases } = useAppStore();
  const {
    originalText,
    translatedText,
    yourTranslatedText,
    setYourTranslatedText,
    translateDirection,
    setTranslateDirection,
    skip,
    isOriginalTextRtl,
    targetLanguage,
    sourceLanguage,
  } = useTranslateExerciseStore();

  const handleTranslate = () => {
    // Implement translation logic here
    // This could involve calling an API or using a library
    console.log("Translate button clicked");
  };
  const options = [
    {
      value: TranslateDirection.TARGET_TO_SOURCE,
      label: `${targetLanguage} → ${sourceLanguage}`,
    },
    {
      value: TranslateDirection.SOURCE_TO_TARGET,
      label: `${sourceLanguage} → ${targetLanguage}`,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center text-center w-full space-y-4">
      <div className="text-left">
        <div className="text-sText text-sm">{t("exercise_title")}:</div>
        <div className="font-bold text-xl text-sText">
          {t("translate_exercise")}
        </div>
      </div>
      <HorizontalRule />

      <div className="mb-4 flex items-center justify-center space-x-2">
        <div className="block mb-2">{t("translate_the_following")}</div>
        <div>
          <SelectComponent
            value={translateDirection}
            onChange={(value) => setTranslateDirection(value)}
            className="w-full p-2 border rounded"
            options={options}
          />
        </div>
      </div>

      {/* Exercise Panel */}
      <div className="flex flex-col space-y-4 mt-4 text-3xl">
        <div
          className={`text-sText ${
            isOriginalTextRtl ? "text-right text-rtl" : "text-left"
          }`}
        >
          {originalText}
        </div>
      </div>

      <button
        onClick={handleTranslate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Translate
      </button>

      <div className="mb-4 w-full">
        <label className="block mb-2">{t("your_translation")}</label>
        <textarea
          value={yourTranslatedText}
          className="w-full p-2 border rounded text-black"
          rows="4"
          placeholder={t("your_translation")}
          onChange={(e) => {
            // console.log(e);
            setYourTranslatedText(e.target.value);
          }}
        />
      </div>
      <HorizontalRule />

      {/* Button Panel */}
      <div className="flex flex-col space-y-4 mt-4 ">
        <div
          className={`flex space-x-4 mt-4 border  rounded-lg p-4 border-pBorder`}
        >
          <ControlButton toolTip="Skip" onClick={skip}>
            <ForwardIcon className="w-6 h-6 " />
          </ControlButton>
        </div>
      </div>

      {/* Statistic Panel */}
      <div className="mt-4 flex flex-col items-center text-xl">
        <TooltipWrapper text="played-sentences/total-sentences">
          <div className="text-sm">
            {currentPhraseIndex}/{phrases?.length || 0}
          </div>
        </TooltipWrapper>
      </div>
    </div>
  );
};

export default TranslateExercise;
