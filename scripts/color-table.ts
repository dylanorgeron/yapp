import $ from 'jquery'
import { Color } from './color-utils'

class ColorTable {
  public colors: Color[] = []

  // generateTable() {
  //   //put colors in hash
  //   if (this.colors.length) {
  //     let hash = ''
  //     this.colors.forEach((c, i) => {
  //       hash += `${c.hex}`
  //       if (i !== 15) hash += ','
  //     });
  //     window.location.hash = hash
  //   }
  //   //build table
  //   const table = document.getElementById('color-table')
  //   let tableCoreHtml = ``
  //   let tableHeaderHtml = `<div class="color-row color-header">`
  //   this.colors.forEach((bgColor, index) => {
  //     tableHeaderHtml +=
  //       `<div 
  //               id="header-${index}"
  //               class="color-cell" 
  //               style="background: ${bgColor.hex};color: white">
  //               ${index}
  //               </div><input style="display:none" type="color" id="input-${index}" value="${bgColor.hex}"/>`
  //     tableCoreHtml +=
  //       `<div class="color-row" style='background: ${bgColor.hex}'>`
  //     if (index < 5) {
  //       this.colors.forEach(fgColor =>
  //         tableCoreHtml +=
  //         `<div class="color-cell" style="color: ${fgColor.hex}">${fgColor.hex}</div>`
  //       )
  //     }
  //     tableCoreHtml += `</div>`
  //   })
  //   tableHeaderHtml += `</div>`
  //   if (table) {
  //     table.innerHTML = tableHeaderHtml + tableCoreHtml
  //     table.style.backgroundColor = this.colors[0].hex
  //   }
  //   for (let i = 0; i < 16; i++) {
  //     const headerEl = document.getElementById(`header-${i.toString()}`)
  //     if (headerEl) {
  //       headerEl.addEventListener('click', () => {
  //         const el = document.getElementById(`input-${i}`)
  //         if (el) el.click()
  //       })
  //     }
  //     const inputEl = (<HTMLInputElement>document.getElementById(`input-${i.toString()}`))
  //     if (inputEl) {
  //       inputEl.addEventListener('change', (e: any) => {
  //         this.colors[i].hex = inputEl.value
  //         this.generateTable()
  //       })
  //     }
  //   }
  // }

  generatePanel() {
    //put colors in hash
    if (this.colors.length) {
      let hash = ''
      this.colors.forEach((c, i) => {
        hash += `${c.hex}`
        if (i !== 15) hash += ','
      });
      window.location.hash = hash
    }

    //build circle list
    const colorsEl = $('#colors')
    colorsEl.html('')
    this.colors.forEach((color, index) => {
      //build html
      let html = `
        <div id="color-${index}" class="color">
          <div id="color-sample-${index}"class="color-sample"></div>
          <div class="color-text">${color.name}</div>
          <input style="display:none" type="color" id="input-${index}" value="${color.hex}"/>
        </div>
        `
      //append html
      colorsEl.html(colorsEl.html() + html)
      //element manipulation
      let colorEl = $('#color-sample-' + index)
      //set bg color
      colorEl.css('background-color', color.hex)
      //click event for changing color
      //circle click
      $('#color-panel').on('click', `#color-sample-${index}` ,() => {
        console.log('clicked')
        $(`#input-${index}`).click()
      })
      //simulated input click
      $('#color-panel').on('change', `#input-${index.toString()}`, (e: any) => {
        console.log('input value changed')
        $("#color-sample-"+e.target.id.split('-')[1]).css('background-color', e.target.value)
        this.colors[index].hex = e.target.value
        this.updatePreview()
      })
    })
  }

  updatePreview() {
    this.colors.forEach((c) => {
      let elements: any[] = Array.from(document.getElementsByClassName(c.name))
      elements.forEach(element => {
        if (c.name.indexOf("background") > -1) {
          element.style.background = c.hex
        } else {
          element.style.color = c.hex
        }
      });
    })
  }
}

export default ColorTable