import { useState } from "react";
import { Color } from "../lib/color";
import {
  updateBackgroundColors,
  updateForegroundColors,
} from "../lib/color-processing";

type props = {
  colors: Color[];
  setColors: (newVal: Color[]) => void;
};
export default function ColorDots({ colors, setColors }: props) {
  const [lockBackgroundColors, setlockBackgroundColors] = useState(true);
  const [lockForegroundColors, setlockForegroundColors] = useState(true);

  const backgrounds = colors.slice(0, 4);
  const foregrounds = colors.slice(4, 8);
  const extraColors = colors.slice(8, 16);

  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    let newArray = [...colors];
    const newHex = e.target.value;
    if (i < 4 && lockBackgroundColors) {
      updateBackgroundColors(newHex, newArray, i);
    } else if (4 <= i && i < 8 && lockForegroundColors) {
      updateForegroundColors(newHex, newArray, i);
    } else {
      newArray[i].setHex(newHex);
    }
    setColors(newArray);
  };

  const getColorDots = (colorsToMap: Color[], offset: number) => {
    return colorsToMap.map((c, i) => (
      <div key={c.key} className="flex mb-2 items-center">
        <input
          value={c.hex}
          onChange={(e) => onColorChange(e, i + offset)}
          type="color"
          className="
            w-[35px]
            h-[35px]
            rounded-full
            inline-block
            cursor-pointer
          "
        />
        <div className="ml-2">{c.key}</div>
      </div>
    ));
  };
  return (
    <div>
      {/* background colors */}
      <div className="mb-4">
        <div className="font-bold text-slate-600 text-lg mb-2">
          Background Colors
        </div>
        <div className="flex mb-2">
          <label className="cursor-pointer mr-2">
            <input
              type="checkbox"
              checked={lockBackgroundColors}
              onChange={() => setlockBackgroundColors(!lockBackgroundColors)}
            />{" "}
            Lock colors
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {getColorDots(backgrounds, 0)}
      </div>
      {/* foreground colors */}
      <div className="mb-4">
        <div className="font-bold text-slate-600 text-lg mb-2">
          Foreground Colors
        </div>
        <div className="flex mb-2">
          <label className="cursor-pointer mr-2">
            <input
              type="checkbox"
              checked={lockForegroundColors}
              onChange={() => setlockForegroundColors(!lockForegroundColors)}
            />{" "}
            Lock colors
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {getColorDots(foregrounds, 4)}
      </div>
      {/* extra colors */}
      <div className="mb-4">
        <div className="font-bold text-slate-600 text-lg mb-2">
          Other Colors
        </div>
        {getColorDots(extraColors, 8)}
      </div>
    </div>
  );
}
