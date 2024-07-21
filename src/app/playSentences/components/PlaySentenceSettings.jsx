import { useAppContext } from "../../context/AppContext";
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
        <div className="">
          <div className="flex space-x-2 max-w-[500px] border-b-2 border-pText">
            <div className="flex-1">Lang</div>
            <div className="flex-1">Speed</div>
            <div className="flex-1">Wait After</div>
          </div>
          {readSettingsArray.list.map((rSetting, key) => (
            <div
              key={key}
              className="cursor-pointer bg-card rounded mt-2 px-2 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex space-x-2 max-w-[500px] ">
                <div className="flex-1 ">{getLanguageName(rSetting.lang)}</div>
                <div className="flex-1">{rSetting.rate}</div>
                <div className="flex-1">{rSetting.waitAfter}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
