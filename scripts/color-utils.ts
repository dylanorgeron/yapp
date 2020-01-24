import { hex } from 'wcag-contrast'

class Color{
    public hex:string = ''
    public contrastScore:number = 0
    constructor(
        public r: number = 0,
        public g: number = 0,
        public b:number = 0
    ){
        this.updateHex()
    }

    public adjustColor(amount: number) {
        this.r = this.r + amount > 255 ? 255 : this.r + amount
        this.b = this.b + amount > 255 ? 255 : this.b + amount
        this.g = this.g + amount > 255 ? 255 : this.g + amount
        this.updateHex()
    }

    public updateHex() {
        this.hex = '#' + [this.r, this.g, this.b].map(x => {
            const hex = x.toString(16)
            return hex.length === 1 ? '0' + hex : hex
        }).join('')
    }

    public updateRGB(){
        const rgb = this.hexToRgb()
        this.r = rgb[0]
        this.g = rgb[1]
        this.b = rgb[2]
    }

    public hexToRgb() {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.hex);
        return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
        ] : [];
    }
    public rgbSum(){
        return this.r + this.b + this.g
    }

    public computeContrast(backgroundColor: Color){
        this.contrastScore = hex(this.hex, backgroundColor.hex)
    }
}

export { Color }