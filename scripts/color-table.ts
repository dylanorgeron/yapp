class ColorTable{
    public colors = [
        '#121920',
        '#121E28',
        '#302823',
        '#646963',
        '#243C51',
        '#444C4B',
        '#E4DEC1',
        '#E8DEAE',
        '#242E34',
        '#B08664',
        '#9A4731',
        '#E5C27A',
        '#C4C1A9',
        '#DFCA9D',
        '#A4A392',
        '#AA662D',
    ]
    generateTable() {
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
                </div>
                <input style="display:none" type="color" id="input-${index}" value="${bgColor}"/>`
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
            const inputEl = document.getElementById(`input-${i.toString()}`)
            if(inputEl){
                inputEl.addEventListener('change', (e: any) =>{
                    this.colors[i] = inputEl.value
                    this.generateTable()
                })
            }
        }
    }
}

export default ColorTable