import React, { useState } from 'react';
import ImageInput from './components/image-input';
import { Color } from './lib/color';
import ColorDots from './components/color-dots';
import DownloadBtn from './components/download-btn';

function App() {
  const [colorPalette, setColorPalette] = useState([] as Color[])
  const [isProcessing, setIsProcessing] = useState(false)
  const onColorsChange = (newColors: Color[]) => {
    setColorPalette(newColors)
  }

  return (
    <div className='
      bg-white
      shadow-md
      m-auto
      mt-16
      max-w-[700px]
      p-6
      rounded'>
      <div className="flex items-center justify-content">
        <div className="w-full">
          <h1>Yapp</h1>
          <div className='text-slate-500'>Upload image, download theme.</div>
        </div>
        <div className="w-full">
          <ImageInput
            onColorsChange={onColorsChange}
            isProcessing={isProcessing}
            setIsProcessing={setIsProcessing}
          />
        </div>
      </div>
      <ColorDots colors={colorPalette} />
      <DownloadBtn colors={colorPalette} isProcessing={isProcessing} />
    </div>
  );
}

export default App;
