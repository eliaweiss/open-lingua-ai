"use client";

import MenuItem from "../components/MenuItem";
import ThemeToggle from "../components/ThemeToggle";
import { useAppContext } from "../context/AppContext";

export default function Settings() {
  const { theme, toggleTheme, phraseRange, setPhraseRange } = useAppContext();

  const handleRangeChange = (event) => {
    const { name, value } = event.target;
    setPhraseRange((prevRange) => {
      const newRange = [...prevRange];
      if (name === "start") {
        newRange[0] = Number(value);
      } else {
        newRange[1] = Number(value);
      }
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
            <input
              type="number"
              name="start"
              value={phraseRange[0]}
              onChange={handleRangeChange}
              className="border p-1"
            />
          </label>
          <label>
            End:
            <input
              type="number"
              name="end"
              value={phraseRange[1]}
              onChange={handleRangeChange}
              className="border p-1"
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
