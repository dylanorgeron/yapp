import { adjustHexColor, rgbToHex } from './color-utils'

class ColorTable{
    public colors: string[] = []

    generateTable() {
        //put colors in hash
        if(this.colors.length) window.location.hash = this.colors.join(',')
        //build table
        const table = document.getElementById('color-table')
        let tableCoreHtml = ``
        let tableHeaderHtml = `<div class="color-row color-header">`
        this.colors.forEach((bgColor, index) => {
            tableHeaderHtml +=
                `<div 
                id="header-${index}"
                class="color-cell" 
                style="background: ${bgColor};color: white">
                ${index}
                </div><input style="display:none" type="color" id="input-${index}" value="${bgColor}"/>`
            tableCoreHtml +=
                `<div class="color-row" style='background: ${bgColor}'>`
            this.colors.forEach(fgColor =>
                tableCoreHtml +=
                `<div class="color-cell" style="color: ${fgColor}">${fgColor}</div>`
            )
            tableCoreHtml += `</div>`
        })
        tableHeaderHtml += `</div>`
        if (table){
            table.innerHTML = tableHeaderHtml + tableCoreHtml  
            table.style.backgroundColor = this.colors[0]
        } 
        for (let i = 0; i < 16; i++) {
            const headerEl = document.getElementById(`header-${i.toString()}`)
            if (headerEl) {
                headerEl.addEventListener('click', () => {
                    const el = document.getElementById(`input-${i}`)
                    if(el) el.click()
                })
            }
            const inputEl = (<HTMLInputElement>document.getElementById(`input-${i.toString()}`))
            if(inputEl){
                inputEl.addEventListener('change', (e: any) =>{
                    this.colors[i] = inputEl.value
                    this.generateTable()
                })
            }
        }
    }

    suggestColors(){
        this.colors[1] = adjustHexColor(this.colors[0], 5)
        this.colors[2] = adjustHexColor(this.colors[1], 15)
        this.colors[3] = adjustHexColor(this.colors[2], 25)
        this.colors[4] = adjustHexColor(this.colors[3], 25)
        this.generateTable()
    }
}

export default ColorTable