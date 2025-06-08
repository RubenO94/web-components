import WebHarpStrings from  "../strings/strings.js"

export default class WebHarpApp extends HTMLElement {

  connectedCallback(){
   this.innerHTML = `<webharp-strings strings="${this.getAttribute('strings')}"></webharp-strings>`;
   this.stringsElement = this.querySelector('webharp-strings');
   this.addEventListener('mousemove', e => this.OnMouseMove()) 
  }


  OnMouseMove(event){
    this.stringsElement.points = {
      last: this.lastPoint,
      current: {x: event.pageX, y: event.pageY}
    };
    this.lastPoint = {x: event.pageX, y: event.pageY}
  }

  set points(pts){
    // TODO
  }

}

if(!customElements.get('webharp-app')){
  customElements.define('webharp-app', WebHarpApp);
}