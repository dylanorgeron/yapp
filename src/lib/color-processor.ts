import ColorThief from 'colorthief'
import { Color, colorKeys } from './color'

const processColors = (fileInput: HTMLImageElement) => {
  const colorThief = new ColorThief()

  const colorThiefColors = colorThief.getPalette(fileInput, 16)
  let unsortedColors: Color[] = []
  colorThiefColors.forEach((c: number[], i: number) => {
    unsortedColors.push(new Color(
      c[0],
      c[1],
      c[2],
    ))
  });
  const sortedColors = sortColors(unsortedColors)
  return sortedColors
}

const convertColorsToHex = (colors: []) => {
  let hexColors: string[] = []
  colors.forEach(color => {
    hexColors.push(rgbToHex(color))
  });
  return hexColors
}

const rgbToHex = (color: number[]) => {
  const r = color[0]
  const g = color[1]
  const b = color[2]
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
}

const sortColors = (colors: Color[]) => {
  let processedColors: Color[] = []

  let darkestValue = 1000
  let darkestIndex = 0
  let redIndex = 0
  let redRatio = 0
  let lightestValue = 0
  let lightestIndex = 0

  colors.forEach((color, index) => {
    //darkest value to use for background
    //shades will be generated later based on this value
    const sum = color.rgbSum()
    if (sum < darkestValue) {
      darkestValue = sum
      darkestIndex = index
    }
    //foreground color
    if (sum > lightestValue) {
      lightestValue = sum
      lightestIndex = index
    }
    //red, for errors
    if (color.r / (color.g + color.b) > redRatio) {
      redRatio = color.r / (color.g + color.b)
      redIndex = index
    }
  });

  //red
  processedColors[8] = new Color(colors[redIndex].r, colors[redIndex].g, colors[redIndex].b, colorKeys[8])

  //foreground colors
  processedColors[5] = new Color(colors[lightestIndex].r, colors[lightestIndex].g, colors[lightestIndex].b, colorKeys[5])
  processedColors[6] = new Color(colors[lightestIndex].r, colors[lightestIndex].g, colors[lightestIndex].b, colorKeys[6])
  processedColors[7] = new Color(colors[lightestIndex].r, colors[lightestIndex].g, colors[lightestIndex].b, colorKeys[7])
  processedColors[6].adjustColor(-50)
  processedColors[5].adjustColor(-100)

  //background
  processedColors[0] = new Color(colors[darkestIndex].r, colors[darkestIndex].g, colors[darkestIndex].b, colorKeys[0])
  processedColors[1] = new Color(colors[darkestIndex].r, colors[darkestIndex].g, colors[darkestIndex].b, colorKeys[1])
  processedColors[2] = new Color(colors[darkestIndex].r, colors[darkestIndex].g, colors[darkestIndex].b, colorKeys[2])
  processedColors[3] = new Color(colors[darkestIndex].r, colors[darkestIndex].g, colors[darkestIndex].b, colorKeys[3])
  processedColors[4] = new Color(colors[darkestIndex].r, colors[darkestIndex].g, colors[darkestIndex].b, colorKeys[4])

  //secondary shades
  processedColors[1].adjustColor(5)
  processedColors[2].adjustColor(15)
  processedColors[3].adjustColor(50)
  processedColors[4].adjustColor(25)

  //colors 9-15 are based on contrast score
  //now that we have a background color, we can compute contrast scores
  colors.forEach((color) => {
    color.computeContrast(processedColors[0])
  })

  colors.sort((a: Color, b: Color) => {
    if (a.contrastScore < b.contrastScore) {
      return 1
    } else if (a.contrastScore === b.contrastScore) {
      return 0
    } else {
      return -1
    }
  })

  let i = 0
  while (processedColors.length < 16) {
    if (i !== lightestIndex) {
      processedColors.push(new Color(
        colors[i].r,
        colors[i].g,
        colors[i].b,
        colorKeys[i + 9]
      ))
    }
    i++
  }

  return processedColors
}


export { processColors }