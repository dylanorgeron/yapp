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
                const file = e.target.files[0]
                const img = document.createElement('img')
                const reader = new FileReader()
                reader.onloadend = () => img.src = reader.result
                reader.readAsDataURL(file)
                imageContainer.innerHTML = ''
                imageContainer.append(img)
                if (img.complete) {
                    this.generateColors(img)
                } else {
                    img.addEventListener('load', () => {
                        this.generateColors(img)
                    })
                }
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
    rgbToHex(color: []) {
        const r = color[0]
        const g = color[1]
        const b = color[2]
        return '#' + [r, g, b].map(x => {
            const hex = x.toString(16)
            return hex.length === 1 ? '0' + hex : hex
        }).join('')
    }

    sortColors(colors: []) {
        
        //lets sort dem colors
        let darkestValue = 1000
        let darkestIndex = 0
        let redIndex = 0
        let redRatio = 0
        let lightestValue = 0
        let lightestIndex = 0
        let contrastColors: [] = []
        colors.forEach((color, index) => {
            //darkest value to use for background
            //shades will be generated later based on this value
            const sum = color[0] + color[1] + color[2]
            if (sum < darkestValue) {
                darkestValue = sum
                darkestIndex = index
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
            if(this.ccc.isLevelCustom(this.rgbToHex(color), this.rgbToHex(colors[darkestIndex]), 3)){
                contrastColors.push(color)
            }
        })
        console.log(contrastColors)

        //red
        this.swapColor(8, redIndex, colors)

        //bg color
        this.swapColor(0, darkestIndex, colors)

        //foreground color
        this.swapColor(6, lightestIndex, colors)

        //secondary foreground
        this.swapColor(6, lightestIndex, colors)
        this.adjustColor(colors[5], colors[6], -50)

        //secondary shades
        this.adjustColor(colors[1], colors[0], 5)
        this.adjustColor(colors[2], colors[1], 15)
        this.adjustColor(colors[3], colors[2], 25)
        this.adjustColor(colors[4], colors[3], 25)

        //start using contrast approved colors
        return colors
    }
    swapColor(index1: any, index2: number, arr: []) {
        const colorToSwap = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = colorToSwap
        return arr
    }

    adjustColor(colorToLighten: [], colorToSample: [], amount: number) {
        colorToLighten[0] = colorToSample[0] + amount > 255 ? 255 : colorToSample[0] + amount
        colorToLighten[1] = colorToSample[1] + amount > 255 ? 255 : colorToSample[1] + amount
        colorToLighten[2] = colorToSample[2] + amount > 255 ? 255 : colorToSample[2] + amount
    }
}

export default ImagePaletteGenerator