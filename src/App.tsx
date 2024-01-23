import React, { useState } from 'react';
import ImageInput from './components/image-input';
import { Color } from './lib/color';
import ColorDots from './components/color-dots';

function App() {
  const [colorPalette, setColorPalette] = useState([] as Color[])
  const onColorsChange = (newColors: Color[]) => {
    console.log(newColors)
    setColorPalette(newColors)
  }

  return (
    <div className='m-auto mt-16 max-w-[700px] bg-slate-600 p-6 text-slate-200 rounded'>
      <div className="flex items-center justify-content">
        <div className="w-full">
          <h1>Yapp</h1>
          <div>Upload Image</div>
          <div>Download Theme</div>
        </div>
        <div className="w-full">
          <ImageInput onColorsChange={onColorsChange}/>
        </div>
      </div>
      <ColorDots colors={colorPalette}/>
    </div>
  );
}

export default App;
