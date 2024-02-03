import React, { useState } from "react";
import ImageInput from "./components/image-input";
import { Color } from "./lib/color";
import ColorDots from "./components/color-dots";
import DownloadBtn from "./components/download-btn";

function App() {
  const [colorPalette, setColorPalette] = useState([] as Color[]);
  const [isProcessing, setIsProcessing] = useState(false);
  const onColorsChange = (newColors: Color[]) => {
    setColorPalette(newColors);
  };
  return (
    <div className="py-6">
      <div
        className="
      bg-white
      shadow-md
      m-auto
      max-w-[700px]
      rounded"
      >
        <div className="p-6 bg-slate-800 text-white rounded-t">
          <div className="text-4xl font-bold tracking-wider mb-2">Yapp</div>
          <div className="text-slate-400">Upload image, download theme.</div>
        </div>
        <div className="flex items-start justify-content p-6">
          {colorPalette.length ? (
            <div className="w-full">
              <ColorDots colors={colorPalette} setColors={setColorPalette} />
            </div>
          ) : (
            ""
          )}
          <div className="w-full mr-4">
            <ImageInput
              onColorsChange={onColorsChange}
              setIsProcessing={setIsProcessing}
            />
            {colorPalette.length ? (
              <DownloadBtn colors={colorPalette} isProcessing={isProcessing} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div
        className="
    bg-white
    shadow-md
    m-auto
    mt-16
    max-w-[700px]
    p-6
    rounded"
      >
        <h1>FAQ</h1>
        <h3>Yapp? What's that mean?</h3>
        <p className="text-slate-600 mb-4">
          Yet Another Palette Picker. I also considered Appy McAppface, Rooty
          Tooty Themey Whemey, and The Themebook.
        </p>
        <h3>How's this work?</h3>
        <p className="text-slate-600 mb-4">
          The selected image is processed using{" "}
          <a href="https://lokeshdhakar.com/projects/color-thief/">
            color thief
          </a>
          . The 16 resulting colors are then sorted and tweaked to pull
          appropriate colors for background and foreground shades. The remaining
          colors are sorted by contrasted and then written to a Visual Studio
          Code theme template.
        </p>
        <p className="text-slate-600 mb-10">
          Images and themes are processed locally. Nothing is saved when a theme
          is generated because nothing uploaded.
        </p>
        <h3>Can I download a theme for another editor?</h3>
        <p className="text-slate-600 mb-10">
          At the moment, only Visual Studio Code themes are supported. Feel free
          to open a PR with a template for another editor.
        </p>
        <h3>Why make this?</h3>
        <p className="text-slate-600 mb-10">
          Fun, mostly. I've also always enjoyed ensuring the various programs I
          use regularly have a coherent look to them. It was a hassle to
          manually edit my color theme every time I changed my wallpaper, so I
          started tinkering with this as a personal project. It's become more of
          a portfolio piece now, but it's still something I use regularly.
        </p>
      </div>
    </div>
  );
}

export default App;
