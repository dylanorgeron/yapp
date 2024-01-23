import { useRef, useState } from "react"
import { Color } from "../lib/color"
import { processColors } from "../lib/color-processor"


type props = {
  onColorsChange: (val: Color[]) => void
}

export default function ImageInput({ onColorsChange }: props) {
  const fileUploaderRef = useRef<HTMLInputElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [imgSrc, setImgSrc] = useState('')

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target || !e.target.files || !e.target.files[0]) return
    const src = URL.createObjectURL(e.target.files[0])
    setImgSrc(src)
    if (!imageRef.current) {
      console.error("No input element found on imageRef")
      return
    }
    const processedColors = processColors(imageRef.current)
    onColorsChange(processedColors)
  }

  return (
    <div className="
            text-center
            text-6xl
            py-16
            border
            rounded
            border-slate-400
            cursor-pointer
        "
      onClick={() => { fileUploaderRef.current?.click() }}
    >
      <input
        type="file"
        className='hidden'
        ref={fileUploaderRef}
        onChange={onInputChange}
      />
      {!imgSrc && <span>+</span>}
      {imgSrc && <img src={imgSrc} ref={imageRef} alt="Image the user uploads to be processed into a color theme." />}

    </div>
  )
}