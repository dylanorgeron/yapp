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
                imageContainer.append(img)
                if(img.complete){
                    const hexColors = this.convertColors(this.colorThief.getPalette(img, 16))
                    colorTable.colors = hexColors
                    colorTable.generateTable()
                }else{
                    img.addEventListener('load', () => {
                        const hexColors = this.convertColors(this.colorThief.getPalette(img, 16))
                        colorTable.colors = hexColors
                        colorTable.generateTable()
                    })
                }
            })
        }
    }
    convertColors(colors: []){
        let hexColors = []
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
}

export default ImagePaletteGenerator