import React, { useState, useRef, useEffect } from "react";

import SelectComponent from "@/app/components/SelectComponent";
import useAppStore from "@/app/store/appStore";
import useTranslateExerciseStore, {
  TranslateDirection,
} from "./store/TranslateExerciseStore";
import HorizontalRule from "@/app/components/HorizontalRule";
import ControlButton from "@/app/components/ControlButton";
import {
  ForwardIcon,
  MicrophoneIcon,
  PlayIcon,
  StopIcon,
} from "@heroicons/react/24/outline";
import TooltipWrapper from "@/app/components/TooltipWrapper";
import { useTranslation } from "@/app/i18n/useTranslation";
import { checkUserTranslate } from "./checkUserTranslate";
import { transcribeAudio } from "@/app/utils/api/clientApi";
import { readAloud } from "@/app/utils/speechUtils";
import { cleanPunctuation, removeDotAtEnd } from "@/app/helpers";

const TranslateExercise = () => {
  const t = useTranslation(); // Use the translation hook
  const [correctText, setCorrectText] = useState(t("correct") || "Correct");

  const { currentPhraseIndex, phrases } = useAppStore();
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
    suggestedTranslatedText,
    showSuggestedTranslatedText,
    setShowSuggestedTranslatedText,
    isTranslationCorrect,
    setIsTranslationCorrect,
  } = useTranslateExerciseStore();

  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const audioChunks = useRef([]);

  async function playSuggestedTranslation() {
    await readAloud(suggestedTranslatedText, sourceLanguage, 1);
  }

  function cleanSentence(currentSentence) {
    const res = removeDotAtEnd(currentSentence)
      .replaceAll(", ", " ")
      .replaceAll(". ", " ")
      .replaceAll("?", "")
      .replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .toLowerCase();
    console.log("cleanSentence", res);
    return res;
  }

  function isSameSentence(sentence1, sentence2) {
    return cleanSentence(sentence1) === cleanSentence(sentence2);
  }
  useEffect(() => {
    if (isSameSentence(yourTranslatedText, suggestedTranslatedText)) {
      setLlmResponse(correctText);
    }
  }, [yourTranslatedText, suggestedTranslatedText]);

  useEffect(() => {
    if (
      cleanSentence(llmResponse) === cleanSentence(correctText) &&
      cleanSentence(llmResponse) !== "correct"
    ) {
      setLlmResponse(correctText);
    }
    if (cleanSentence(llmResponse) === cleanSentence(correctText)) {
      setIsTranslationCorrect(true);
    }
  }, [llmResponse]);

  const handleCheckUserTranslate = async () => {
    setShowSuggestedTranslatedText(true);
    if (isSameSentence(yourTranslatedText, suggestedTranslatedText)) {
      setLlmResponse(correctText);
    } else {
      const { response } = await checkUserTranslate();
      setLlmResponse(response);
    }
  };

  const handleStartRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        recorder.ondataavailable = (event) => {
          audioChunks.current.push(event.data);
        };
        recorder.start();
        setIsRecording(true);
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
      });
  };

  const handleStopRecording = async () => {
    mediaRecorder.stop();
    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
      audioChunks.current = [];
      const transcription = await transcribeAudio(audioBlob);
      setYourTranslatedText(transcription?.text);

      // Stop all media tracks to release the microphone
      const tracks = mediaRecorder.stream.getTracks();
      tracks.forEach((track) => track.stop());
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

      <div className=" flex items-center justify-left ">
        <div className="text-left ">{t("translate_the_following")}</div>
        <div className="w-1/2">
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
        <div className="flex space-x-2">
          <textarea
            value={yourTranslatedText}
            className="w-full p-2 border rounded text-black"
            rows="4"
            placeholder={t("your_translation")}
            onChange={(e) => {
              setYourTranslatedText(e.target.value);
            }}
          />
          {!isTranslationCorrect && (
            <div className="flex flex-col space-y-4 mt-4">
              <div className="flex space-x-4 border rounded-lg p-1 border-pBorder">
                <ControlButton
                  toolTip={
                    isRecording ? t("stop_recording") : t("start_recording")
                  }
                  onClick={
                    isRecording ? handleStopRecording : handleStartRecording
                  }
                  className="p-4 bg-card text-card-foreground rounded hover:bg-pHov text-lg font-bold"
                >
                  {isRecording ? (
                    <StopIcon className="w-6 h-6" />
                  ) : (
                    <MicrophoneIcon className="w-6 h-6" />
                  )}
                </ControlButton>
              </div>
            </div>
          )}
        </div>
      </div>

      {!isTranslationCorrect && (
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
      )}

      {showSuggestedTranslatedText && (
        <div className="flex flex-col space-y-4 mt-4">
          <div className="text-sText text text-left">
            {t("suggested_translation")}
          </div>
          <div className="flex space-x-4 items-center">
            <div className="text-sText text-2xl text-left">
              {suggestedTranslatedText}
            </div>
            <div className=" border rounded-lg border-pBorder">
              <ControlButton
                toolTip={t("play")}
                onClick={playSuggestedTranslation}
              >
                <PlayIcon className="w-6 h-6" />
              </ControlButton>
            </div>
          </div>
        </div>
      )}

      {llmResponse && (
        <>
          <HorizontalRule />
          <div className="text-sText text-lg text-left mx-2">{llmResponse}</div>
        </>
      )}

      {/* Button Panel */}
      <div className="flex flex-col space-y-4 mt-4">
        <div className="flex space-x-4 mt-4 border rounded-lg p-4 border-pBorder">
          <ControlButton toolTip={t("next")} onClick={skip}>
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
