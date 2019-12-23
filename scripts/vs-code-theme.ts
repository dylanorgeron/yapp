import JSZip from 'jszip'
import { saveAs } from 'file-saver'

import Package from './vs-code-package'
import ColorTheme from './vs-code-color-theme'

class VSCodeTheme{
    public exportTheme(colors: string[]){
        let themePackage = new Package()
        let themeColors = new ColorTheme("yapp-theme", "dark", colors)
        //transform theme json for export

        //convert to base64 for export
        const packageString = btoa(JSON.stringify(themePackage))
        const themeString = btoa(JSON.stringify(themeColors))
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