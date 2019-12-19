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
    let tableHeaderHtml = `<div class="color-row">`
    colors.forEach(bgColor => {
        tableHeaderHtml += `<div class="color-cell" style="background: ${bgColor};color: ${bgColor}">${bgColor}</div>`
        tableCoreHtml += `<div class="color-row" style='background: ${bgColor}'>`
        colors.forEach(fgColor => tableCoreHtml += `<div class="color-cell" style="color: ${fgColor}">${fgColor}</div>`)
        tableCoreHtml += `</div>`
    })
    tableHeaderHtml += `</div>`
    if (table) table.innerHTML = tableHeaderHtml + tableCoreHtml
}

generateTable()