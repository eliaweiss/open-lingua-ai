import React, { useState, useRef } from "react";

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
import { checkUserTranslate } from "./checkUserTranslate";
import { queryTranscribe } from "@/app/utils/api/clientApi";

const TranslateExercise = () => {
  const t = useTranslation(); // Use the translation hook

  const { getLanguageName, currentPhraseIndex, phrases } = useAppStore();
  const {
    originalText,
    llmResponse,
    setLlmResponse,
    yourTranslatedText,
    setYourTranslatedText,
    translateDirection,
    setTranslateDirection,
    skip,
    isOriginalTextRtl,
    targetLanguage,
    sourceLanguage,
  } = useTranslateExerciseStore();

  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const audioChunks = useRef([]);

  const handleCheckUserTranslate = async () => {
    console.log("Translate button clicked");
    const { response } = await checkUserTranslate();
    console.log("response", response);
    setLlmResponse(response);
  };

  const handleStartRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        recorder.ondataavailable = event => {
          audioChunks.current.push(event.data);
        };
        recorder.start();
        setIsRecording(true);
      })
      .catch(error => {
        console.error("Error accessing microphone:", error);
      });
  };

  const handleStopRecording = async () => {
    mediaRecorder.stop();
    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
      audioChunks.current = [];
      const transcription = await queryTranscribe(audioBlob);
      setYourTranslatedText(transcription);
    };
    setIsRecording(false);
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

      <div className="mb-4 w-full">
        <label className="block mb-2">{t("your_translation")}</label>
        <textarea
          value={yourTranslatedText}
          className="w-full p-2 border rounded text-black"
          rows="4"
          placeholder={t("your_translation")}
          onChange={(e) => {
            setYourTranslatedText(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-col space-y-4 mt-4">
        <div className="flex space-x-4 border rounded-lg p-1 border-pBorder">
          <ControlButton
            toolTip={t("check_my_translation")}
            onClick={handleCheckUserTranslate}
            className="p-4 bg-card text-card-foreground rounded hover:bg-pHov text-lg font-bold"
          >
            {t("check_my_translation")}
          </ControlButton>
        </div>
      </div>

      <div className="flex flex-col space-y-4 mt-4">
        <div className="flex space-x-4 border rounded-lg p-1 border-pBorder">
          <ControlButton
            toolTip={isRecording ? t("stop_recording") : t("start_recording")}
            onClick={isRecording ? handleStopRecording : handleStartRecording}
            className="p-4 bg-card text-card-foreground rounded hover:bg-pHov text-lg font-bold"
          >
            {isRecording ? t("stop_recording") : t("start_recording")}
          </ControlButton>
        </div>
      </div>

      {llmResponse && (
        <>
          <HorizontalRule />
          <div className="text-sText text-lg text-left">{llmResponse}</div>
        </>
      )}

      {/* Button Panel */}
      <div className="flex flex-col space-y-4 mt-4">
        <div className="flex space-x-4 mt-4 border rounded-lg p-4 border-pBorder">
          <ControlButton toolTip={t("skip_tooltip")} onClick={skip}>
            <ForwardIcon className="w-6 h-6" />
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
