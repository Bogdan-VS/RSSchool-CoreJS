import { App } from '../app/app'

export class StartGame extends App {
  constructor(id: string) {
    super(id);
  }

  init() {
    const start: HTMLElement = document.querySelector('.start');
    start.addEventListener('click', buttonHandler.bind(this));
  }

}

function buttonHandler() {
  this.hide();
  const search: HTMLElement = document.getElementById('search');
  search.focus();
  console.log('focus');
}