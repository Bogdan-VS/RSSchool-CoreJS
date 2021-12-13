import { App } from '../app/app';
import { SortToys } from './sort-toys.component';

export class Toys extends App {
  dataToys: any;
  sortToys: SortToys;
  constructor(id: string) {
    super(id);
    this.dataToys;
    this.sortToys = new SortToys();
  }

  init() {
    this.getData();
    const start: HTMLElement = document.querySelector('.start');
    const chooseItem: HTMLElement = document.querySelector('.choose-item');

    start.addEventListener('click', buttonHandler.bind(this));
    chooseItem.addEventListener('click', this.addSortToys.bind(this));
    this.$el.addEventListener('click', this.getSortToys.bind(this));
  }

  async getData() {
    let url: string = ('https://raw.githubusercontent.com/Bogdan-VS/image-data/master/data.json');
    const res: Response = await fetch(url);
    const data = await res.json();
    this.dataToys = data;
    return this.dataToys;
  }

  drawToys(data: any = this.dataToys) {
    console.log(this.dataToys);
    const collection = document.querySelector('.collection-container-wrapper');
    for (let i = 0; i < this.dataToys.length; i++) {
      const content = document.createElement('aside');
      content.classList.add('container-content');
      content.setAttribute('id', `toy-${i}`);
      content.setAttribute('data-set', `${i}`);
      content.innerHTML = `
        <h4>${this.dataToys[i].name}</h4>
        <div class="icon-toy-container">
          <div class="icon-toy toy${i}"></div>
        </div>
        <ul class="data-toy">
          <li>Количество: ${data[i].count}</li>
          <li>Год покупки: ${data[i].year}</li>
          <li>Форма игрушки: ${data[i].shape}</li>
          <li>Цвет игрушки: ${data[i].color}</li>
          <li>Размер игрушки: ${data[i].size}</li>
          <li>Любимая: ${data[i].favorite}</li>
        </ul>
      `
      collection.append(content);
      const iconToy = document.querySelector(`.toy${i}`) as HTMLTemplateElement;
      iconToy.style.background = `top 0 left 0 / 100% 100% url(../assets/images/toys/${data[i].num}.png)`;
    }
  }

  addSortToys() {
    const category: HTMLElement = document.getElementById('open-category');
    category.classList.toggle('hide');
  }

  getSortToys(event: Event) {
    const target = (event.target as HTMLElement).closest('.sort-item');
    if (target) {
      if ((target as HTMLTemplateElement).dataset.sort === 'По году выпуска') {
        const currentCategories = document.getElementById('current-categories');
        currentCategories.textContent = 'По году выпуска';
        const newData = this.sortToys.sortToIncrease(this.dataToys);
        this.removeData();
        this.drawToys(newData);
      }
      if ((target as HTMLTemplateElement).dataset.sort === 'Все игрушки') {
        this.removeData();
        this.drawToys(this.dataToys);
      }
      if ((target as HTMLTemplateElement).dataset.sort === 'По имени') {
        const currentCategories = document.getElementById('current-categories');
        currentCategories.textContent = 'По имени';
        const newData = this.sortToys.sortToName(this.dataToys);
        this.removeData();
        this.drawToys(newData);
      }
    }
  }

  removeData() {
    const cards = document.querySelectorAll('.container-content')
    cards.forEach(element => {
      element.remove();
    });
  }
}

function buttonHandler() {
  this.show();
  this.drawToys();
}

