import { deepCopy, useAppContext } from "../../context/AppContext";
import DndComponent from "./DndComponent";
export const BEGINNER_READ_SETTINGS = {
  level: "BEGINNER",
  list: [
    { lang: "src", waitAfter: 1, rate: 1.1, isAccented: false },
    { lang: "target", waitAfter: 1, rate: 1, isAccented: false },
    { lang: "target", waitAfter: 2, rate: 1, isAccented: true },
  ],
};
export const ADVANCE_READ_SETTINGS = {
  level: "ADVANCE",
  list: [
    { lang: "target", waitAfter: 1, rate: 1, isAccented: false },
    { lang: "target", waitAfter: 2, rate: 1, isAccented: true },
    { lang: "src", waitAfter: 1, rate: 1.15, isAccented: false },
  ],
};

export function PlaySentenceSettings() {
  const { readSettingsArray, setReadSettingsArray, getLanguageName } =
    useAppContext();
  return (
    <div className="px-2 py-6 bg-menuBg rounded-lg">
      <div className="mb-6">
        <h2 className="text-xl mb-2">Play sentences level</h2>
        <div className="flex space-x-2">
          <button
            className={`rounded-lg text-pText  px-4 py-2 border border-bg-pBg ${
              readSettingsArray.level == "BEGINNER" ? "bg-sBg" : "bg-pBg"
            }`}
            onClick={() =>
              setReadSettingsArray(deepCopy(BEGINNER_READ_SETTINGS))
            }
          >
            Beginner
          </button>
          <button
            className={`rounded-lg text-pText  px-4 py-2 border border-bg-pBg ${
              readSettingsArray.level == "ADVANCE" ? "bg-sBg" : "bg-pBg"
            }`}
            onClick={() =>
              setReadSettingsArray(deepCopy(ADVANCE_READ_SETTINGS))
            }
          >
            Advance
          </button>
        </div>
        <div className="">
          <DndComponent />
        </div>
      </div>
    </div>
  );
}