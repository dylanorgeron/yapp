class ColorTable{
    generateTable(colors: string[]) {
        const table = document.getElementById('color-table')
        let tableCoreHtml = ``
        let tableHeaderHtml = `<div class="color-row color-header">`
        colors.forEach((bgColor, index) => {
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
            colors.forEach(fgColor =>
                tableCoreHtml +=
                `<div class="color-cell" style="color: ${fgColor}">${fgColor}</div>`
            )
            tableCoreHtml += `</div>`
        })
        tableHeaderHtml += `</div>`
        if (table){
            table.innerHTML = tableHeaderHtml + tableCoreHtml  
            table.style.backgroundColor = colors[0]
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
                    colors[i] = inputEl.value
                    this.generateTable(colors)
                })
            }
        }
    }
}

export default ColorTable