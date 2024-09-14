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
import useScrambleStore from "../store/useScrambleStore";

export const ScramblePhrase = () => {
  const t = useTranslation();
  const { isTargetRtl } = useAppContext();

  const { handleWordClickBtn, handleGiveHintBtn, playPartOfSentenceBtn } =
    useScrambleContext();

  const { handleDeleteWordBtn } = useScrambleFunctions();
  const {
    showFailNotice,
    showSuccessNotice,
    isReading_partOfSentence,
    hintClickCounter,
    scrambledWordsTxt,
    wordsTxt,
    userBufferArray,
    isReading_playSentence,
    isPlaying,
  } = useScrambleStore();

  return (
    <div>
      {isPlaying && (
        <div className="flex flex-col">
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
            <div className=" text-[#ff5a19] ">
              {`Almost, Let's try again...`}
            </div>
          )}
          {showSuccessNotice && (
            <div className=" text-[#1994ff]">
              Correct! <br /> Move to next sentence
            </div>
          )}
          <div className={`${isTargetRtl ? "text-right" : "text-left"}`}>
            <UserBufferDisplay />
          </div>
          <div className="flex space-x-10 my-5 justify-center items-center">
            <ControlButton
              id="part-of-sentence-btn"
              toolTip="Play Part of sentence"
              onClick={playPartOfSentenceBtn}
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
