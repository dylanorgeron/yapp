import { Color } from "../lib/color";

type props = {
  colors: Color[]
}
export default function ColorDots({ colors }: props) {
  return (
    <div>{colors.map(c => (
      <div key={c.key} style={{'backgroundColor': c.hex}}>{c.hex}</div>
    ))}</div>
  )
}