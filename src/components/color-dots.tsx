import { Color } from "../lib/color";

type props = {
  colors: Color[]
}
export default function ColorDots({ colors }: props) {
  return (
    <div className="mt-5">{colors.map(c => (
      <div>
        <div key={c.key} className="w-[35px] h-[35px] rounded-full inline-block" style={{'backgroundColor': c.hex}}></div>
        <span>{c.key}</span>
        <hr />
      </div>
    ))}</div>
  )
}