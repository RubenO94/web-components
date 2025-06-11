import MIDI from '../../midijs.wrapper.js';

export default class WebHarpString extends HTMLElement {
  strum(params) {
    if (this.timer) clearTimeout(this.timer);

    let dur = params.power * 10 + 250;
    this.classList.add('shake', 'shake-constant', 'shake-horizontal');

    if (dur < 500) {
      this.classList.add('shake-little');
    }

    this.timer = setTimeout(() => this.stopStrum(), dur);
    this.playSound(params);
  }

  stopStrum() {
    this.classList.remove(
      'shake',
      'shake-constant',
      'shake-horizontal',
      'shake-little'
    );
  }

  playSound(params) {
    if (!this._ready) return;
    console.log(params)

    let note = 60 + params.string * 5;
    MIDI.setVolume(0, 127);
    MIDI.noteOn(0, note, params.power, 0);
    MIDI.noteOff(0, note, 0.75);
  }

  connectedCallback() {
    MIDI.loadPlugin({
      soundfontUrl: './',
      instrument: 'acoustic_grand_piano',
      onsuccess: () => this.onLoaded(),
    });

    this.innerHTML = `<div class="line"></div>
      <style>
        webharp-string > .line {
          background-color: white;
          height: 100%;
          width: 2px;
        }
      </style>
    `;
  }

  onLoaded() {
    this._ready = true;
  }
}

if (!customElements.get('webharp-string')) {
  customElements.define('webharp-string', WebHarpString);
}
