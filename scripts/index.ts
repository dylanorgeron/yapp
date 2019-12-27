// import ColorThief from 'colorthief'
import ColorTable from './color-table'
import VSCodeTheme from './vs-code-theme'

//initial palette
//lioness
let colors = [
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

// colors = [
//     '#121920',
//     '#121E28',
//     '#242E34',
//     '#243C51',
//     '#A4A392',
//     '#9B6152',
//     '#E4DEC1',
//     '#E5C27A',
//     '#C4C1A9',
//     '#DFCA9D',
//     '#444C4B',
//     '#AA662D',
//     '#9A4731',
//     '#B08664',
//     '#E8DEAE',
//     '#646963'
// ]

//solarized
// colors = [
//     '#002b36',
//     '#073642',
//     '#586e75',
//     '#657b83',
//     '#839496',
//     '#93a1a1',
//     '#eee8d5',
//     '#fdf6e3',
//     '#b58900',
//     '#cb4b16',
//     '#d30102',
//     '#d33682',
//     '#6c71c4',
//     '#268bd2',
//     '#2aa198',
//     '#859900'
// ]

//build table
const colorTable = new ColorTable()
colorTable.generateTable(colors)

//click events
const vsCodeTheme = new VSCodeTheme()
const vsCodeExportBtn = document.getElementById('vs-code-export-btn')
if(vsCodeExportBtn) vsCodeExportBtn.addEventListener('click', () => {
    vsCodeTheme.exportTheme(colors)
})