"use client";

import { Input } from "../components/Input";
import MenuItem from "../components/MenuItem";
import ThemeToggle from "../components/ThemeToggle";
import {
  ADVANCE_READ_SETTINGS,
  BEGINNER,
  BEGINNER_READ_SETTINGS,
  useAppContext,
} from "../context/AppContext";

export function SettingsUi() {
  const { toggleTheme, phraseRange, setPhraseRange, allPhrases } =
    useAppContext();

  const handleRangeChange = (event) => {
    const { name, value } = event.target;
    setPhraseRange((prevRange) => {
      const newRange = [...prevRange];
      if (name === "start") {
        newRange[0] = Number(value);
      } else {
        const val = Math.min(allPhrases.length, value);
        newRange[1] = Number(val);
      }
      // if (newRange[0] >= newRange[1]) {
      //   newRange[1] = allPhrases.length;
      //   // throw new Error("Invalid phrase range");
      // }
      return newRange;
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Settings</h1>

      <div className="mb-6">
        <h2 className="text-xl mb-2">Toggle Theme</h2>
        <MenuItem>
          <ThemeToggle className="" onClick={toggleTheme} />
        </MenuItem>
      </div>

      <div className="mb-6">
        <h2 className="text-xl mb-2">Phrase Range</h2>
        <div className="flex space-x-2">
          <label>
            Start:
            <Input
              maxlength="4"
              size="4"
              name="start"
              value={phraseRange[0]}
              onChange={handleRangeChange}
            />
          </label>
          <label>
            End:
            <Input
              size="4"
              name="end"
              value={phraseRange[1]}
              onChange={handleRangeChange}
            />
          </label>
        </div>
        {/* <p>
          Current range: {phraseRange[0]} - {phraseRange[1]}
        </p> */}
        <div className="text-sm">
          You can choose the range of phrases you want to practice. <br />
          The initial phrases are easier, while the later ones are more
          challenging.
          <br />
          Adjusting the range allows you to set the difficulty level according
          to your preference.
        </div>
      </div>
    </div>
  );
}
