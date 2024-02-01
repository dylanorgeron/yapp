import { Color } from "../lib/color";
import exportTheme from "../lib/themes/vs-code-theme";

type props = {
  colors: Color[],
  isProcessing: boolean
}
export default function DownloadBtn({ colors, isProcessing }: props) {
  const handleClick = () => {
    exportTheme(colors)
  }
  return (
    <button className="
      w-full
      mt-6
      bg-slate-800
      text-white
      p-2
      rounded
    "
    disabled={isProcessing || !colors.length}
    onClick={handleClick}
    >{isProcessing ? 'Processing...' : 'Download'}</button>
  )
}