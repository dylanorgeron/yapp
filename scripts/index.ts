import ColorThief from 'colorthief'

let colors = [
    '#121920',
    '#121E28',
    '#242E34',
    '#243C51',
    '#A4A392',
    '#9B6152',
    '#E4DEC1',
    '#E5C27A',
    '#C4C1A9',
    '#DFCA9D',
    '#444C4B',
    '#AA662D',
    '#9A4731',
    '#B08664',
    '#E8DEAE',
    '#646963'
]

function generateTable() {
    const table = document.getElementById('color-table')
    let tableCoreHtml = ``
    let tableHeaderHtml = `<div class="color-row color-header">`
    colors.forEach((bgColor, index) => {
        tableHeaderHtml +=
            `<div 
            id="header-${index}"
            class="color-cell" 
            style="background: ${bgColor};color: ${bgColor}">
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
    if (table) table.innerHTML = tableHeaderHtml + tableCoreHtml
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
                generateTable()
            })
        }
    }
}

generateTable()