import { App } from '../app/app';
import { Audio } from './audio.component';

export class StartGame extends App {
  audioStart: Audio;
  constructor(id: string) {
    super(id);
    this.audioStart = new Audio;
  }

  init() {
    const start: HTMLElement = document.querySelector('.start');
    const toys = document.getElementById('toys-page');
    const startPage = document.getElementById('start-page');
    const tree = document.getElementById('tree-page');

    tree.addEventListener('click', this.openChristmasTreePage.bind(this));
    toys.addEventListener('click', buttonHandler.bind(this));
    start.addEventListener('click', buttonHandler.bind(this));
    startPage.addEventListener('click', this.openStartPage.bind(this));

    this.$el.addEventListener('click', () => {
      if (this.audioStart.audioFlag)
        this.audioStart.playMusic();
    })
  }

  openStartPage() {
    this.show();
  }

  openChristmasTreePage() {
    this.hide();
  }

}

function buttonHandler() {
  this.hide();
  const search: HTMLElement = document.getElementById('search');
  search.focus();
}
