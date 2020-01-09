function adjustRGBColor(color: number[], amount: number) {
    return [
        color[0] + amount > 255 ? 255 : color[0] + amount,
        color[1] + amount > 255 ? 255 : color[1] + amount,
        color[2] + amount > 255 ? 255 : color[2] + amount,
    ]
}

function adjustHexColor(color: string, amount: number){
    const rgbColor: number[] = hexToRgb(color)
    return rgbToHex(adjustRGBColor(rgbColor, amount))
}

function rgbToHex(color: number[]) {
    const r = color[0]
    const g = color[1]
    const b = color[2]
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('')
}

function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
     ] : [];
  }

export {adjustRGBColor, adjustHexColor, rgbToHex}