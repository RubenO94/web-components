import WebHarpString from '../string/string.js'; //es-lint disable
export default class WebHarpStrings extends HTMLElement {
  connectedCallback() {
    console.log(WebHarpString);
    let strings = `<div class="spacer"></div>`;
    for (let c = 0; c < this.getAttribute('strings'); c++) {
      strings += `<webharp-string></webharp-string>`;
    }

    strings += `
       <style>
        webharp-strings {
          height: 100%;
          display: flex;
        }
        webharp-strings > webharp-string, div.spacer {
         flex: 1;
        }
      </style>
     `;
    this.innerHTML = strings;
    this.stringsElement = this.querySelectorAll('webharp-string');
  }

  set points(pts) {
    if (!this.stringsElement) return;

    if (!pts.last || !pts.current) return;

    let magnitude = Math.abs(pts.current.x - pts.last.x);
    let xMin = Math.min(pts.current.x, pts.last.x);
    let xMax = Math.max(pts.current.x, pts.last.x);

    for (let d = 0; d < this.stringsElement.length; d++) {
      if (
        xMin <= this.stringsElement[d].offsetLeft &&
        xMax >= this.stringsElement[d].offsetLeft
      ) {
        let strum = { power: magnitude, string: d };
        this.stringsElement[d].strum(strum);
      }
    }

    return pts;
  }
}

if (!customElements.get('webharp-strings')) {
  customElements.define('webharp-strings', WebHarpStrings);
}
