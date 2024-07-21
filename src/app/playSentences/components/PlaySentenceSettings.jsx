import {
  ADVANCE_READ_SETTINGS,
  BEGINNER,
  BEGINNER_READ_SETTINGS,
  useAppContext,
} from "../../context/AppContext";

export function PlaySentenceSettings() {
  const { readSettingsArray, setReadSettingsArray } = useAppContext();
  return (
    <div className="px-2 py-6 bg-menuBg rounded-lg">
      <div className="mb-6">
        <h2 className="text-xl mb-2">Play sentences level</h2>
        <div className="flex space-x-2">
          <button
            className={`rounded-lg text-pText  px-4 py-2 border border-bg-pBg ${
              readSettingsArray.level == "BEGINNER" ? "bg-sBg" : "bg-pBg"
            }`}
            onClick={() => setReadSettingsArray(BEGINNER_READ_SETTINGS)}
          >
            Beginner
          </button>
          <button
            className={`rounded-lg text-pText  px-4 py-2 border border-bg-pBg ${
              readSettingsArray.level == "ADVANCE" ? "bg-sBg" : "bg-pBg"
            }`}
            onClick={() => setReadSettingsArray(ADVANCE_READ_SETTINGS)}
          >
            Advance
          </button>
        </div>
      </div>
    </div>
  );
}
