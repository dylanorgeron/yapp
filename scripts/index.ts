import ColorTable from './color-table'
import VSCodeTheme from './vs-code-theme'
import ImagePaletteGenerator from './image-palette-generator'

//build table
export const colorTable = new ColorTable()
colorTable.generateTable()

//image uploader
const imagePaletteGenerator = new ImagePaletteGenerator()

//click events
const vsCodeTheme = new VSCodeTheme()
const vsCodeExportBtn = document.getElementById('vs-code-export-btn')
if(vsCodeExportBtn) vsCodeExportBtn.addEventListener('click', () => {
    vsCodeTheme.exportTheme(colorTable.colors)
})
