import { useEffect, useRef, useState } from "react";
import { Color } from "../lib/color";
import { processColors } from "../lib/color-processing";

type props = {
  onColorsChange: (val: Color[]) => void;
  setIsProcessing: (val: boolean) => void;
};

export default function ImageInput({ onColorsChange, setIsProcessing }: props) {
  const fileUploaderRef = useRef<HTMLInputElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imgSrc, setImgSrc] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target || !e.target.files || !e.target.files[0]) return;
    const src = URL.createObjectURL(e.target.files[0]);
    setImgSrc(src);
  };

  useEffect(() => {
    if (!imgSrc) return;
    setIsProcessing(true);
    if (loaderRef.current) {
      loaderRef.current.style.opacity = "80%";
      loaderRef.current.style.width = "100%";
    }
    setTimeout(() => {
      if (!imageRef.current) {
        console.error("No input element found on imageRef");
        return;
      }
      const processedColors = processColors(imageRef.current);
      onColorsChange(processedColors);
      if (loaderRef.current) {
        loaderRef.current.style.width = "0%";
        loaderRef.current.style.opacity = "0%";
      }
      setIsProcessing(false);
    }, 1000);
  }, [imgSrc]);

  return (
    <div
      className="
            text-center
            text-6xl
            border
            rounded
            border-slate-400
            cursor-pointer
            relative
        "
      onClick={() => {
        fileUploaderRef.current?.click();
      }}
    >
      <input
        type="file"
        className="hidden"
        ref={fileUploaderRef}
        onChange={onInputChange}
      />
      {!imgSrc && <div className="py-16 text-slate-600">+</div>}
      {imgSrc && (
        <img
          src={imgSrc}
          ref={imageRef}
          alt="Image the user uploads to be processed into a color theme."
        />
      )}
      <div
        className="
        bg-white
        opacity-80
        absolute
        top-0
        left-0
        h-full
        w-0
        transition-[width]
        duration-1000"
        ref={loaderRef}
      ></div>
    </div>
  );
}
