import ColorTable from './color-table'
import VSCodeTheme from './vs-code-theme'
import NotepadPPTheme from './notepadpp-theme'
import ImagePaletteGenerator from './image-palette-generator'

//build table
export const colorTable = new ColorTable()
if(window.location.hash){
    //colorTable.colors = window.location.hash.split(',')
    console.log("UNABLE TO LOAD COLORS FROM HASH")
}
colorTable.generateTable()

//image uploader
const imagePaletteGenerator = new ImagePaletteGenerator()

//click events
const vsCodeTheme = new VSCodeTheme()
const vsCodeExportBtn = document.getElementById('vs-code-export-btn')
if(vsCodeExportBtn) vsCodeExportBtn.addEventListener('click', () => {
    vsCodeTheme.exportTheme(colorTable.colors)
})

const notepadppTheme = new NotepadPPTheme()
const notepadPPExportBtn = document.getElementById('notepadpp-export-btn')
if(notepadPPExportBtn) notepadPPExportBtn.addEventListener('click', () => {
    notepadppTheme.exportTheme(colorTable.colors)
})

const suggestBtn = document.getElementById('suggest-btn')
if(suggestBtn) suggestBtn.addEventListener('click', () => {
    // colorTable.suggestColors()
    alert('not implemented')
})