import ColorTable from './color-table'
import VSCodeTheme from './vs-code-theme'
import NotepadPPTheme from './notepadpp-theme'
import ImagePaletteGenerator from './image-palette-generator'
import { Color } from './color-utils'

//build table
export const colorTable = new ColorTable()
if(window.location.hash){
    const hashColors = window.location.hash.split(',')
    let colors: Color[] = []
    hashColors.forEach(hashColor => {
        const color = new Color()
        color.hex = hashColor
        color.updateRGB()
        colors.push(color)
    });
    console.log(colors)
    colorTable.colors = colors
    // colorTable.generateTable()
    colorTable.generatePanel()
}

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

const imageContainer = document.getElementById('image-container')
if(imageContainer) imageContainer.addEventListener('click', () => {
    const imageUploader = document.getElementById('image-uploader')
    if(imageUploader) imageUploader.click()
})