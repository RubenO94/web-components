   class MyCyustomTag extends HTMLElement {
      constructor() {
        super();
        alert('Hi from MyCustomTag constructor');
         this.innerHTML = 'Hello from MysCustomTag';
      }

      connectedCallback(){ 
        alert('Hi from MyCustomTag connectedCallback');
       
      }
    }

    if(!customElements.get('my-custom-tag')){
      customElements.define('my-custom-tag', MyCyustomTag);
    }