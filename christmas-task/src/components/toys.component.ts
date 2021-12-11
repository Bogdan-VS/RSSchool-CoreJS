import { App } from '../app/app';

export class Toys extends App {
  dataToys: any;

  constructor(id: string) {
    super(id);
    this.dataToys;
  }

  init() {
    const start: HTMLElement = document.querySelector('.start');
    start.addEventListener('click', buttonHandler.bind(this));
  }

  async getData() {
    let url: string = ('https://raw.githubusercontent.com/Bogdan-VS/image-data/master/data.json');
    const res: Response = await fetch(url);
    const data = await res.json();
    this.dataToys = data;
    this.drawToys();
  }

  drawToys() {
    console.log(this.dataToys);

    const collection = document.querySelector('.collection-container-wrapper');
    for (let i = 0; i < 60; i++) {
      const content = document.createElement('div');
      content.classList.add('container-content');
      content.innerHTML = `
        <h4>${this.dataToys[i].name}</h4>
        <div class="icon-toy-container">
          <div class="icon-toy toy${i}"></div>
        </div>
        <ul class="data-toy">
          <li>Количество: ${this.dataToys[i].count}</li>
          <li>Год покупки: ${this.dataToys[i].year}</li>
          <li>Форма игрушки: ${this.dataToys[i].shape}</li>
          <li>Цвет игрушки: ${this.dataToys[i].color}</li>
          <li>Размер игрушки: ${this.dataToys[i].size}</li>
          <li>Любимая: ${this.dataToys[i].favorite}</li>
        </ul>
      `
      collection.append(content);
      const iconToy = document.querySelector(`.toy${i}`) as HTMLTemplateElement;
      iconToy.style.background = `top 0 left 0 / 100% 100% url(../assets/images/toys/${i+1}.png)`;
    }
    
  }
}

function buttonHandler() {
  this.show();
}

