import ColorThief from 'colorthief'
import ColorContrastChecker from 'color-contrast-checker'
import { colorTable } from './index'

class ImagePaletteGenerator {
    private colorThief = new ColorThief()
    private ccc = new ColorContrastChecker()
    constructor() {
        const imageUploader = document.getElementById('image-uploader')
        const imageContainer = document.getElementById('image-container')
        if (imageUploader && imageContainer) {
            imageUploader.addEventListener('change', (e: Event) => {
                if(!e.target) return
                const file = e.target.files[0]
                const img = document.createElement('img')
                const reader = new FileReader()
                reader.onloadend = () => img.src = typeof reader.result === 'string' ? reader.result : ""
                reader.readAsDataURL(file)
                imageContainer.innerHTML = ''
                imageContainer.append(img)
                const generateColorsIfRendered = () => {
                    if (img.height && img.width) {
                        this.generateColors(img)
                    } else {
                        requestAnimationFrame(generateColorsIfRendered)
                    }
                }
                generateColorsIfRendered()
            })
        }
    }
    generateColors(img: HTMLImageElement) {
        //fetch the starting palette from the image
        let rgbColors = this.colorThief.getPalette(img, 16)
        //try and line the colors up
        rgbColors = this.sortColors(rgbColors)
        //convert rgb to hex
        const hexColors = this.convertColorsToHex(rgbColors)
        //update the table
        colorTable.colors = hexColors
        colorTable.generateTable()
    }

    convertColorsToHex(colors: []) {
        let hexColors: string[] = []
        colors.forEach(color => {
            hexColors.push(this.rgbToHex(color))
        });
        return hexColors
    }
    rgbToHex(color: number[]) {
        const r = color[0]
        const g = color[1]
        const b = color[2]
        return '#' + [r, g, b].map(x => {
            const hex = x.toString(16)
            return hex.length === 1 ? '0' + hex : hex
        }).join('')
    }

    sortColors(colors: number[][]) {
        let processedColors: number[][] = []
        //lets sort dem colors
        let darkestValue = 1000
        let redIndex = 0
        let redRatio = 0
        let lightestValue = 0
        let lightestIndex = 0
        let contrastColors: number[][] = []
        colors.forEach((color, index) => {
            //darkest value to use for background
            //shades will be generated later based on this value
            const sum = color[0] + color[1] + color[2]
            if (sum < darkestValue) {
                darkestValue = sum
                processedColors[0] = color
                processedColors[1] = color
                processedColors[2] = color
                processedColors[3] = color
                processedColors[4] = color
            }
            //foreground color
            if(sum > lightestValue){
                lightestValue = sum
                lightestIndex = index
            }
            //red, for errors
            if (color[0] / (color[1] + color[2]) > redRatio) {
                redRatio = color[0] / (color[1] + color[2])
                redIndex = index
            }
        });

        //now that we have our background color, we can check contrast
        colors.forEach((color, index) => {
            if(index === lightestIndex || index === redIndex) return
            if(this.ccc.isLevelCustom(this.rgbToHex(color), this.rgbToHex(processedColors[0]), 3)){
                contrastColors.push(color)
            }
        })

        //red
        processedColors[8] = colors[redIndex]

        //foreground colors
        processedColors[5] = colors[lightestIndex]
        processedColors[6] = colors[lightestIndex]
        processedColors[7] = colors[lightestIndex]
        processedColors[6] = this.adjustColor(processedColors[6], -50)
        processedColors[5] = this.adjustColor(processedColors[6], -50)

        //secondary shades
        processedColors[1] = this.adjustColor(processedColors[0], 5)
        processedColors[2] = this.adjustColor(processedColors[1], 15)
        processedColors[3] = this.adjustColor(processedColors[2], 25)
        processedColors[4] = this.adjustColor(processedColors[3], 25)

        //start using contrast approved colors
        contrastColors.forEach(color => {
            if(processedColors.length < 16){
                processedColors.push(color)
            }
        })

        return processedColors
    }
    swapColor(index1: any, index2: number, arr: []) {
        const colorToSwap = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = colorToSwap
        return arr
    }

    adjustColor(color: number[], amount: number) {
        return [
            color[0] + amount > 255 ? 255 : color[0] + amount,
            color[1] + amount > 255 ? 255 : color[1] + amount,
            color[2] + amount > 255 ? 255 : color[2] + amount,
        ]
    }
}

export default ImagePaletteGenerator