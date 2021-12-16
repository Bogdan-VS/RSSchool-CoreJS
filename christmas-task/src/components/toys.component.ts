import { App } from '../app/app';
import { SortToys } from './sort-toys.component';
import { range } from '..';
import { rangeYear } from '..';

export class Toys extends App {
  newData: any;
  dataToys: any;
  sortToys: SortToys;
  countCopy: any;
  constructor(id: string) {
    super(id);
    this.dataToys;
    this.newData;
    this.sortToys = new SortToys();
  }

  init() {
    this.getData();
    const start: HTMLElement = document.querySelector('.start');
    const chooseItem: HTMLElement = document.querySelector('.choose-item');

    start.addEventListener('click', buttonHandler.bind(this));
    chooseItem.addEventListener('click', this.addSortToys.bind(this));
    this.$el.addEventListener('click', this.getSortToys.bind(this));
    this.$el.addEventListener('click', this.getFilterForm.bind(this));
    this.$el.addEventListener('click', this.applyBtnSucsses.bind(this));
    this.$el.addEventListener('click', this.applyBtnReset.bind(this));
    this.$el.addEventListener('click', this.addActiveColor.bind(this));
  }

  async getData() {
    const url: string = ('https://raw.githubusercontent.com/Bogdan-VS/image-data/master/data.json');
    const res: Response = await fetch(url);
    const data = await res.json();
    this.dataToys = data;
    return this.dataToys;
  }

  drawToys(data: any = this.dataToys) {
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
          <li>Любимая: ${data[i].like}</li>
        </ul>
      `
      collection.append(content);
      const iconToy = document.querySelector(`.toy${i}`) as HTMLTemplateElement;
      iconToy.style.background = `top 0 left 0 / 100% 100% url(./assets/images/toys/${data[i].num}.png)`;
    }
  }

  addSortToys() {
    const category: HTMLElement = document.getElementById('open-category');
    category.classList.toggle('hide');
  }

  getSortToys(event: Event) {
    const currentCategories = document.getElementById('current-categories');
    const target = (event.target as HTMLElement).closest('.sort-item');

    switch(target && (target as HTMLTemplateElement).dataset.sort) {
      case 'По году выпуска':
        currentCategories.textContent = 'По году выпуска';
        this.addSortToys();
        break;
      case 'Все игрушки':
        currentCategories.textContent = 'Все игрушки';
        this.addSortToys();
        break;
      case 'По имени':
        currentCategories.textContent = 'По имени';
        this.addSortToys();
        break;
    }
  }

  applyBtnSucsses() {
    const target = (event.target as HTMLElement).closest('#apply-filter');
    if (target) {
      const massFilter: string[] = this.sortToys.getCurrentActiveElements();

      const succsessFilterForm = this.dataToys.filter((el: any) => {
        return massFilter.includes(el.shape) &&
          massFilter.includes(el.count) &&
          massFilter.includes(el.year) &&
          massFilter.includes(el.color) &&
          massFilter.includes(el.size) &&
          massFilter.includes(el.favorite);
      })

      this.getResult(succsessFilterForm);
    }
  }

  getFilterForm() {
    const target = (event.target as HTMLElement).closest('.form-icon');

    switch (target && (target as HTMLTemplateElement).dataset.form) {
      case 'колокольчик':
        target.classList.toggle('form-icon__active');
        break;
      case 'шар':
        target.classList.toggle('form-icon__active');
        break;
      case 'шишка':
        target.classList.toggle('form-icon__active');
        break;
      case 'звезда':
        target.classList.toggle('form-icon__active');
        break;
      case 'снежинка':
        target.classList.toggle('form-icon__active');
        break;
      case 'фигурка':
        target.classList.toggle('form-icon__active');
        break;
    }

  }

  getResult(arg: any[]) {

    if (arg.length === 0) {
      alert('Я еще не успел сделать нормальное окошно. Но не смотря на это, нужных тебе игрушек нет. Попробуй изменить критерии поиска. Удачи:)')
    }
    let sortData;
    const currentCategories = document.getElementById('current-categories');

    switch (currentCategories.textContent) {
      case 'По году выпуска':
        sortData = this.sortToys.sortToIncrease(arg);
        break
      case 'Все игрушки':
        sortData = this.sortToys.sortALL(arg);
        break
      case 'По имени':
        sortData = this.sortToys.sortALL(arg);
        break
    }

    this.removeData();
    this.drawToys(sortData);
  }

  addActiveColor() {
    const target = (event.target as HTMLElement).closest('.color-item');

    switch (target && (target as HTMLTemplateElement).dataset.color) {
      case "белый":
        target.classList.toggle('color-item__active');
        break
      case "желтый":
        target.classList.toggle('color-item__active');
        break
      case "красный":
        target.classList.toggle('color-item__active');
        break
      case "синий":
        console.log('синий');
        target.classList.toggle('color-item__active');
        break
      case "зелёный":
        target.classList.toggle('color-item__active');
        break
    }
  }

  applyBtnReset() {
    const target = (event.target as HTMLElement).closest('#apply-settings');
    const colorContainer = document.querySelectorAll('.color-item');
    const massForm = document.querySelectorAll('.form-icon');
    const sizeItem = document.querySelectorAll('.size-item');

    if (target) {
      (range as any).noUiSlider.reset();
      (rangeYear as any).noUiSlider.reset();

      massForm.forEach(element => {
        element.classList.add('form-icon__active');
      });

      colorContainer.forEach(element => {
        element.classList.add('color-item__active');
      });

      sizeItem.forEach(element => {
        (element as any).checked = 'checked';
      });
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


