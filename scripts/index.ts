// import ColorThief from 'colorthief'
import ColorTable from './color-table'

//initial palette
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

//build table
const colorTable = new ColorTable()
colorTable.generateTable(colors)