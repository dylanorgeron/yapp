import { Color } from './color-utils'

class ColorTable{
    public colors: Color[] = []

    generateTable() {
        //put colors in hash
        if(this.colors.length){
            let hash = ''
            this.colors.forEach(c => {
                hash += `${c.hex},`
            });
            window.location.hash = hash
        } 
        //build table
        const table = document.getElementById('color-table')
        let tableCoreHtml = ``
        let tableHeaderHtml = `<div class="color-row color-header">`
        this.colors.forEach((bgColor, index) => {
            tableHeaderHtml +=
                `<div 
                id="header-${index}"
                class="color-cell" 
                style="background: ${bgColor.hex};color: white">
                ${index}
                </div><input style="display:none" type="color" id="input-${index}" value="${bgColor.hex}"/>`
            tableCoreHtml +=
                `<div class="color-row" style='background: ${bgColor.hex}'>`
            this.colors.forEach(fgColor =>
                tableCoreHtml +=
                `<div class="color-cell" style="color: ${fgColor.hex}">${fgColor.hex}</div>`
            )
            tableCoreHtml += `</div>`
        })
        tableHeaderHtml += `</div>`
        if (table){
            table.innerHTML = tableHeaderHtml + tableCoreHtml  
            table.style.backgroundColor = this.colors[0].hex
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
                    this.colors[i].hex = inputEl.value
                    this.generateTable()
                })
            }
        }
    }
}

export default ColorTable