import ColorThief from 'colorthief'
import { colorTable } from './index'

class ImagePaletteGenerator{
    private colorThief = new ColorThief()
    constructor(){
        const imageUploader = document.getElementById('image-uploader')
        const imageContainer = document.getElementById('image-container')
        if(imageUploader && imageContainer){
            imageUploader.addEventListener('change', (e: Event) => {
                const file = e.target.files[0]
                const img = document.createElement('img')
                const reader = new FileReader()
                reader.onloadend = () => img.src = reader.result
                reader.readAsDataURL(file)
                imageContainer.innerHTML = ''
                imageContainer.append(img)
                if(img.complete){
                    this.generateColors(img)
                }else{
                    img.addEventListener('load', () => {
                        this.generateColors(img)
                    })
                }
            })
        }
    }
    generateColors(img: HTMLImageElement){
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

    convertColorsToHex(colors: []){
        let hexColors: string[] = []
        colors.forEach(color => {
            hexColors.push(this.rgbToHex(color[0], color[1], color[2]))       
        });
        return hexColors
    }
    rgbToHex (r: number, g: number, b:number) {
        return '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')
    }

    sortColors(colors: []){
        //lets sort dem colors
        let darkestValue = 1000
        let darkestIndex = 0
        let secondDarkestValue = 1000
        let secondDarkestIndex = 0
        let redIndex = 0
        let redRatio = 0
        colors.forEach((color, index) => {
            //darkest value
            const sum = color[0] + color[1] + color[2]
            if(sum < darkestValue){
                darkestValue = sum
                darkestIndex = index
            }
            //red
            if(color[0] / (color[1] + color[2]) > redRatio){
                redRatio = color[0] / (color[1] + color[2])
                redIndex = index
            }
        });
        //set bg color
        this.swapColor(0, darkestIndex, colors)
        //set secondary bg color
        this.lightenColor(colors[1], colors[0], 5)
        //red
        this.swapColor(8, redIndex, colors)
        
        return colors
    }
    swapColor(index1: any, index2: number, arr: []){
        const colorToSwap = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = colorToSwap
        return arr
    }

    lightenColor(colorToLighten: [], colorToSample: [], amount: number){
        colorToLighten[0] = colorToSample[0] + amount > 255 ? 255 : colorToSample[0] + amount
        colorToLighten[1] = colorToSample[1] + amount > 255 ? 255 : colorToSample[1] + amount
        colorToLighten[2] = colorToSample[2] + amount > 255 ? 255 : colorToSample[2] + amount
    }
}

export default ImagePaletteGenerator