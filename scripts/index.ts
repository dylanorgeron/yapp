let colors = [
    '#002b36',
    '#073642',
    '#586e75',
    '#657b83',
    '#839496',
    '#93a1a1',
    '#eee8d5',
    '#fdf6e3',
    '#b58900',
    '#cb4b16',
    '#d30102',
    '#d33682',
    '#6c71c4',
    '#268bd2',
    '#2aa198',
    '#859900'
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
            ${bgColor}
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