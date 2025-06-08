import WebHarpString from  "../string/string.js"

export default class WebHarpStrings extends HTMLElement {

  connectedCallback(){
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
    this.stringsElments = this.querySelectorAll('webharp-string')
  }

}

if(!customElements.get('webharp-strings')){
  customElements.define('webharp-strings', WebHarpStrings);
}