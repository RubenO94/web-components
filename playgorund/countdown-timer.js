import {GameComponentBase} from './game-component.js'

class VisualCountdownTimer extends GameComponentBase {

  connectedCallback(){
    this.timer = 200;
    this.style.backgroundColor = 'green';
    this.style.display = 'inline-block';
    this.style.height = '50px';
  }

  update(){
    this.timer --;
    if(this.timer <= 0){
      this.timer = 200
    }
    this.style.width = `${this.timer}px`;
    this.innerHTML = this.timer;
  }
}

if(!customElements.get('countdown-timer')){
  customElements.define('countdown-timer', VisualCountdownTimer);
}