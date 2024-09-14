import { ChevronDoubleRightIcon, PauseIcon } from "@heroicons/react/24/solid";
import ControlButton from "../../../components/ControlButton";
import { useScrambleContext } from "../context/ScrambleContext";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import { UserBufferDisplay } from "./UserBufferDisplay";
import {
  BackspaceIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useTranslation } from "@/app/i18n/useTranslation";
import { useScrambleFunctions } from "../context/scrambleFunctions";

export const ScramblePhrase = () => {
  const t = useTranslation();
  const { isTargetRtl } = useAppContext();

  const {
    // handle btns
    handleWordClickBtn,
    handleGiveHintBtn,
    handlePartOfSentenceBtn,
    //
    userBufferArray,
    // flags
    showFailNotice,
    showSuccessNotice,
    isReading_partOfSentence,
    isPlaying,
    isReading_playSentence,
    //
    scrambledWordsTxt,
    wordsTxt,
    hintClickCounter,
  } = useScrambleContext();
  
  const { handleDeleteWordBtn } = useScrambleFunctions();

  return (
    <div>
      {isPlaying && (
        <div className="flex flex-col">
          {showSuccessNotice && (
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white text-3xl text-[#1994ff] font-bold border-2 border-[#035797] px-2 py-5 rounded-lg">
              Correct! <br /> Move to next sentence
            </div>
          )}

          <div className="flex flex-wrap ">
            {!isReading_playSentence &&
              scrambledWordsTxt.map((txt, index) => (
                <WordButton
                  className="mr-2"
                  key={index}
                  onClick={() => handleWordClickBtn({ word: { txt } })}
                >
                  {txt}
                </WordButton>
              ))}
          </div>
          {showFailNotice && (
            <div className=" text-[#ff5a19]  rounded-lg">
              {`Almost, Let's try again...`}
            </div>
          )}
          <div className={`${isTargetRtl ? "text-right" : "text-left"}`}>
            <UserBufferDisplay />
          </div>
          <div className="flex space-x-10 my-5 justify-center items-center">
            <ControlButton
              id="part-of-sentence-btn"
              toolTip="Play Part of sentence"
              onClick={handlePartOfSentenceBtn}
              className="p-4 rounded-lg border border-pBorder"
            >
              {!isReading_partOfSentence && (
                <ChevronDoubleRightIcon className="w-6 h-6 " />
              )}
              {isReading_partOfSentence && <PauseIcon className="w-6 h-6 " />}
            </ControlButton>

            <ControlButton
              toolTip="Backspace"
              onClick={handleDeleteWordBtn}
              className="p-4 rounded-lg border border-pBorder"
            >
              <BackspaceIcon className="w-6 h-6 " />
            </ControlButton>

            <ControlButton
              toolTip={t("click_again_to_confirm")}
              onClick={handleGiveHintBtn}
              className="p-4 rounded-lg border border-pBorder"
            >
              {hintClickCounter == 0 ? (
                <QuestionMarkCircleIcon className="w-6 h-6 " />
              ) : (
                <div className="text-base h-6">{t("click_again")}</div>
              )}
            </ControlButton>
          </div>
          {userBufferArray.length > 0 && (
            <div className="">
              {userBufferArray.length}/{wordsTxt.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

////////////////////////////////////////////////////////////////
const WordButton = ({ className, children, ...prop }) => {
  return (
    <div
      className={classNames(
        `px-4 py-2 my-2 rounded-lg bg-[#6a97d3] flex items-center text-white hover:bg-[#4976b1]`,
        className
      )}
      {...prop}
    >
      {children}
    </div>
  );
};
