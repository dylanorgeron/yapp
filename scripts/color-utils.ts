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
        this.b + amount > 255 ? 255 : this.b + amount
        this.g + amount > 255 ? 255 : this.g + amount
    }

    public updateHex() {
        this.hex = '#' + [this.r, this.g, this.b].map(x => {
            const hex = x.toString(16)
            return hex.length === 1 ? '0' + hex : hex
        }).join('')
    }

    public hexToRgb(hex: string) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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
    public clone(c: Color){
        this.r = c.r
        this.g = c.g
        this.b = c.b
        this.contrastScore = c.contrastScore
        this.hex = c.hex
    }
}

export { Color }