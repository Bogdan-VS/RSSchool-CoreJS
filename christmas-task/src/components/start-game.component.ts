import { App } from '../app/app'

export class StartGame extends App {
  constructor(id: string) {
    super(id);
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