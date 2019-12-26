import JSZip from 'jszip'
import { saveAs } from 'file-saver'

import Package from './vs-code-package'
import ColorTheme from './vs-code-color-theme'

class VSCodeTheme{
    public exportTheme(colors: string[]){
        let themePackage = new Package("yapp-theme-v2")
        let themeColors = new ColorTheme("yapp-theme-v2", "dark")
        //transform theme json for export

        //convert to base64 for export
        const packageString = btoa(JSON.stringify(themePackage))
        let themeString = JSON.stringify(themeColors)
        colors.forEach((color, index) => {
            const colorToReplace = index < 10 ? `color0${index}` : `color${index}`
            themeString = themeString.replace(new RegExp(colorToReplace, 'g'), color)
        });
        themeString = btoa(themeString)
        const zip = new JSZip()
        zip.file('package.json', packageString, {base64: true})
        const themesFolder = zip.folder('themes')
        themesFolder.file('foobar-color-theme.json', themeString, {base64: true})
        zip.generateAsync({type: 'blob'})
            .then((content) => {
                saveAs(content, "yapp-custom-theme.zip")
            })
    }
}

export default VSCodeTheme