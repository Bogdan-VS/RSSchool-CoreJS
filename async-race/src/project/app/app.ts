import { BasicHtml } from "../components/basic-html.component";

export class App {
  $el: HTMLElement;
  constructor(id: string) {
    this.$el = document.getElementById(id);
    this.init();
  }

  init() {
  }

  hide() {
    this.$el.classList.add('hide');
  }

  show() {
    this.$el.classList.remove('hide');
  }

}