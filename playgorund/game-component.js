export class GameComponentBase extends HTMLElement {
  constructor(parameters) {
    super();
    this.onUpdate();
  }
  update(){}
  onUpdate(){
    this.update();
    requestAnimationFrame(() => this.onUpdate());
  }
}