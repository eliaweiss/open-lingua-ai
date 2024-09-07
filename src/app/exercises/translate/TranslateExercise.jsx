import React, { useState, useRef, useEffect, useMemo } from "react";
import { marked } from "marked";
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
  QuestionMarkCircleIcon,
  StopIcon,
} from "@heroicons/react/24/outline";
import TooltipWrapper from "@/app/components/TooltipWrapper";
import { useTranslation } from "@/app/i18n/useTranslation";
import { checkUserTranslate } from "./checkUserTranslate";
import { transcribeAudio } from "@/app/utils/api/clientApi";
import { readAloud } from "@/app/utils/speechUtils";
import { removeDotAtEnd } from "@/app/helpers";
import Textarea from "@/app/components/Textarea";
import { compareText } from "@/app/utils/compareText";
import { Cog6ToothIcon } from "@heroicons/react/24/outline"; // Add this import
import TranslateExerciseSettings from "./TranslateExerciseSettings"; // Add this import

const TranslateExercise = () => {
  const t = useTranslation(); // Use the translation hook
  const correctText = useMemo(() => t("correct") || "Correct", [t]);

  const [showSettings, setShowSettings] = useState(false);

  const { currentPhraseIndex, phrases, getLanguageName } = useAppStore();
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
    showHint,
    setShowHint,
    translateToLanguage,
    suggestedTranslatedText,
    showSuggestedTranslatedText,
    setShowSuggestedTranslatedText,
    isTranslationCorrect,
    setIsTranslationCorrect,
    exerciseCounter,
    setExerciseCounter,
  } = useTranslateExerciseStore();

  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const audioChunks = useRef([]);

  async function playSuggestedTranslation() {
    await readAloud(suggestedTranslatedText, translateToLanguage, 1);
  }

  function cleanSentence(currentSentence) {
    const res = removeDotAtEnd(currentSentence)
      .replaceAll(", ", " ")
      .replaceAll(". ", " ")
      .replaceAll("?", "")
      .replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .toLowerCase()
      .trim();
    console.log("cleanSentence", res);
    return res;
  }

  function isSameSentence(sentence1, sentence2) {
    return compareText(cleanSentence(sentence1), cleanSentence(sentence2));
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
      setShowSuggestedTranslatedText(true);
    }
  }, [llmResponse]);

  const handleCheckUserTranslate = async () => {
    if (!yourTranslatedText) {
      return;
    }
    setShowSuggestedTranslatedText(true);
    if (isSameSentence(yourTranslatedText, suggestedTranslatedText)) {
      setLlmResponse(correctText);
    } else {
      const { response } = await checkUserTranslate();
      const htmlTxt = marked(response);
      // console.log("htmlTxt", htmlTxt);
      setLlmResponse(htmlTxt);
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

      // Stop all media tracks to release the microphone
      const tracks = mediaRecorder.stream.getTracks();
      tracks.forEach((track) => track.stop());

      const transcription = await transcribeAudio(
        audioBlob,
        suggestedTranslatedText
      );
      if (transcription?.text) {
        setYourTranslatedText(transcription?.text);
      }
    };
    setIsRecording(false);
  };

  const options = [
    {
      value: TranslateDirection.TARGET_TO_SOURCE,
      label: `${getLanguageName("target")} → ${getLanguageName("src")}`,
    },
    {
      value: TranslateDirection.SOURCE_TO_TARGET,
      label: `${getLanguageName("src")} → ${getLanguageName("target")}`,
    },
  ];

  const handleShowHint = (show) => {
    if (show) {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 8000);
    } else {
      setShowHint(false);
    }
  };

  return (
    <div className="">
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
        {showHint && (
          <div className="text-sText text-2xl text-left fixed top-10 bg-pBg p-2 border border-pBorder rounded-sm ">
            {suggestedTranslatedText}
          </div>
        )}

        <div className="mb-4 w-full">
          <label className="block mb-2">{t("your_translation")}</label>
          <div className="flex space-x-2">
            <Textarea
              value={yourTranslatedText}
              onChange={(e) => setYourTranslatedText(e.target.value)}
              placeholder={t("your_translation")}
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
            {/* <div className="text-sText text text-left">
            {t("suggested_translation")}
          </div> */}
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
            <div
              className="text-sText text-lg text-left mx-2"
              dangerouslySetInnerHTML={{
                __html: llmResponse,
              }}
            />
          </>
        )}

        {/* Button Panel */}
        <div className="flex  space-x-4 mt-4">
          <div className="flex space-x-4 mt-4 border rounded-lg p-4 border-pBorder">
            <ControlButton
              toolTip="Give hint (long click)"
              onMouseDown={() => handleShowHint(true)}
              onMouseUp={() => handleShowHint(false)}
              onTouchStart={() => handleShowHint(true)}
              onTouchEnd={() => handleShowHint(false)}
            >
              <QuestionMarkCircleIcon className="w-6 h-6 " />
            </ControlButton>
          </div>
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
        <div className="mt-4 flex flex-col items-center text-xl">
          <div className="text-sm">
            {t("exercise_counter")}: {exerciseCounter}
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div
          className="flex space-x-2 cursor-pointer"
          onClick={() => setShowSettings(!showSettings)}
        >
          <Cog6ToothIcon className="w-5" />
          <div>{t("settings_title")}</div>
        </div>
      </div>

      <div
        className={`transition-opacity duration-1000 ${
          showSettings ? "opacity-100" : "opacity-0"
        }`}
      >
        {showSettings && <TranslateExerciseSettings />}
      </div>
    </div>
  );
};

export default TranslateExercise;
