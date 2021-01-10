import ColorThief from 'colorthief'
import { colorTable } from './index'
import { Color } from './color-utils'

class ImagePaletteGenerator {
    private colorThief = new ColorThief()
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
        const colorThiefColors = this.colorThief.getPalette(img, 16)
        let colors: Color[] = []
        colorThiefColors.forEach((c: number[]) => {
            colors.push(new Color(c[0], c[1], c[2]))
        });
        //try and line the colors up
        colorTable.colors = this.sortColors(colors)
        //update the table
        // colorTable.generateTable()
        colorTable.generatePanel()
        //set the colors for the preview
        colorTable.updatePreview()
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

    sortColors(colors: Color[]) {
        let processedColors: Color[] = []
        //lets sort dem colors
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
            if(sum > lightestValue){
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
        processedColors[8] = new Color(colors[redIndex].r, colors[redIndex].g, colors[redIndex].b)

        //foreground colors
        processedColors[5] = new Color(colors[lightestIndex].r, colors[lightestIndex].g, colors[lightestIndex].b)
        processedColors[6] = new Color(colors[lightestIndex].r, colors[lightestIndex].g, colors[lightestIndex].b)
        processedColors[7] = new Color(colors[lightestIndex].r, colors[lightestIndex].g, colors[lightestIndex].b)
        processedColors[6].adjustColor(-50)
        processedColors[5].adjustColor(-100)
        
        //background
        processedColors[0] = new Color(colors[darkestIndex].r, colors[darkestIndex].g, colors[darkestIndex].b)
        processedColors[1] = new Color(colors[darkestIndex].r, colors[darkestIndex].g, colors[darkestIndex].b)
        processedColors[2] = new Color(colors[darkestIndex].r, colors[darkestIndex].g, colors[darkestIndex].b)
        processedColors[3] = new Color(colors[darkestIndex].r, colors[darkestIndex].g, colors[darkestIndex].b)
        processedColors[4] = new Color(colors[darkestIndex].r, colors[darkestIndex].g, colors[darkestIndex].b)

        //secondary shades
        processedColors[1].adjustColor(5)
        processedColors[2].adjustColor(15)
        processedColors[3].adjustColor(25)
        processedColors[4].adjustColor(25)

        //colors 9-15 are based on contrast score
        //now that we have a background color, we can compute contrast scores
        colors.forEach((color) => {
            color.computeContrast(processedColors[0])
        })
        console.log(colors)

        colors.sort((a: Color, b: Color) => {
            if(a.contrastScore < b.contrastScore){
                return 1
            }else if( a.contrastScore === b.contrastScore){
                return 0
            }else{
                return -1
            }
        })

        let i = 0
        while(processedColors.length < 16){
            if(i !== lightestIndex){
                processedColors.push(new Color(
                    colors[i].r,
                    colors[i].g,
                    colors[i].b
                ))
            }
            i++
        }
        //refactor this later
        processedColors[0].name = 'background-default'
        processedColors[1].name = 'background-lighter'
        processedColors[2].name = 'background-selection'
        processedColors[3].name = 'foreground-comments'
        processedColors[4].name = 'background-selection'
        processedColors[5].name = 'foreground-default'
        processedColors[6].name = 'foreground-light'
        processedColors[8].name = 'red'
        processedColors[9].name = 'orange'
        processedColors[10].name = 'yellow'
        processedColors[11].name = 'green'
        processedColors[12].name = 'cyan'
        processedColors[13].name = 'blue'
        processedColors[14].name = 'violet'
        processedColors[15].name = 'brown'

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