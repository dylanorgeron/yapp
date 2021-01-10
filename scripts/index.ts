import ColorTable from './color-table'
import VSCodeTheme from './vs-code-theme'
import NotepadPPTheme from './notepadpp-theme'
import ImagePaletteGenerator from './image-palette-generator'
import { Color } from './color-utils'

//build table
export const colorTable = new ColorTable()
if(window.location.hash){
    let colors: Color[] = []
    //set colors from hash
    const hashColors = window.location.hash.split(',')
    hashColors.forEach(hashColor => {
        const color = new Color()
        color.hex = hashColor
        color.updateRGB()
        colors.push(color)
    });

    //set color names. this should eventually be refactored
    colors[0].name = 'background-default'
    colors[1].name = 'background-lighter'
    colors[2].name = 'background-selection'
    colors[3].name = 'foreground-comments'
    colors[4].name = 'background-selection'
    colors[5].name = 'foreground-default'
    colors[6].name = 'foreground-light'
    colors[8].name = 'red'
    colors[9].name = 'orange'
    colors[10].name = 'yellow'
    colors[11].name = 'green'
    colors[12].name = 'cyan'
    colors[13].name = 'blue'
    colors[14].name = 'violet'
    colors[15].name = 'brown'
    colorTable.colors = colors
    
    //build color panel
    colorTable.generatePanel()
    //update vscode preview with colors
    colorTable.updatePreview()
}

//image uploader
const imagePaletteGenerator = new ImagePaletteGenerator()

//click events
//export vscode
const vsCodeTheme = new VSCodeTheme()
const vsCodeExportBtn = document.getElementById('vs-code-export-btn')
if(vsCodeExportBtn) vsCodeExportBtn.addEventListener('click', () => {
    vsCodeTheme.exportTheme(colorTable.colors)
})
//export notepad++
const notepadppTheme = new NotepadPPTheme()
const notepadPPExportBtn = document.getElementById('notepadpp-export-btn')
if(notepadPPExportBtn) notepadPPExportBtn.addEventListener('click', () => {
    notepadppTheme.exportTheme(colorTable.colors)
})
//suggest colors
const suggestBtn = document.getElementById('suggest-btn')
if(suggestBtn) suggestBtn.addEventListener('click', () => {
    // colorTable.suggestColors()
    alert('not implemented')
})
//add image
const imageContainer = document.getElementById('image-container')
if(imageContainer) imageContainer.addEventListener('click', () => {
    const imageUploader = document.getElementById('image-uploader')
    if(imageUploader) imageUploader.click()
})

//add line numbers because im not doing that shit by hand
const lineNumbers = document.getElementById('line-numbers')
if(lineNumbers){
    let html = ``
    for (let i = 0; i < 100; i++) {
        html += `<div class='line-number'>${i + 1}</div>`
    }
    lineNumbers.innerHTML = html
}