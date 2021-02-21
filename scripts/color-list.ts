import $ from 'jquery'
import { Color } from './color'

class Sidebar {
  public colors: Color[] = []

  generatePanel() {
    //put colors in hash
    this.updateHash()

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
        this.updateHash()
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

  updateHash(){
    //put colors in hash
    if (this.colors.length) {
      let hash = ''
      this.colors.forEach((c, i) => {
        hash += `${c.hex}`
        if (i !== 15) hash += ','
      });
      window.location.hash = hash
    }
  }
}

export default Sidebar