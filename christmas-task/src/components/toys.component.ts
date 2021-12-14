import { App } from '../app/app';
import { SortToys } from './sort-toys.component';

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
    const countCopy: HTMLElement = document.querySelector('.count-copy-item');
    const yearPurchase: HTMLElement = document.querySelector('.year-purchase-item');

    countCopy.addEventListener('input', this.changeCountCopy.bind(this));
    yearPurchase.addEventListener('input', this.chageYearPurchase.bind(this));
    start.addEventListener('click', buttonHandler.bind(this));
    chooseItem.addEventListener('click', this.addSortToys.bind(this));
    this.$el.addEventListener('click', this.getSortToys.bind(this));
    this.$el.addEventListener('click', this.getFilterForm.bind(this));
    this.$el.addEventListener('click', this.applyBtnSucsses.bind(this));
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

    // if (target) {
    //   if ((target as HTMLTemplateElement).dataset.sort === 'По году выпуска') {
    //     currentCategories.textContent = 'По году выпуска';
    //     this.addSortToys();
    //   }
    //   if ((target as HTMLTemplateElement).dataset.sort === 'Все игрушки') {
    //     currentCategories.textContent = 'Все игрушки';
    //     this.addSortToys();
    //   }
    //   if ((target as HTMLTemplateElement).dataset.sort === 'По имени') {
    //     currentCategories.textContent = 'По имени';
    //     this.addSortToys();
    //   }
    // }
  }

  applyBtnSucsses() {
    const target = (event.target as HTMLElement).closest('#apply-filter');
    const allCategories = document.getElementById('all');
    if (target) {

      const massFilter: string[] = this.sortToys.getCurrentActiveElements();
      console.log(massFilter);

      let succsessFilterForm = this.dataToys.filter((el: any) => {
        return massFilter.includes(el.shape) &&
          massFilter.includes(el.count) &&
          massFilter.includes(el.year) &&
          massFilter.includes(el.color) &&
          massFilter.includes(el.size) &&
          massFilter.includes(el.favorite);
      })

      if ((allCategories as any).checked) {
        this.getResult(this.dataToys);
      } else {
        this.getResult(succsessFilterForm);
      }
    }
  }

  getFilterForm() {
    const target = (event.target as HTMLElement).closest('.form-icon');

    if (target && (target as HTMLTemplateElement).dataset.form === 'колокольчик') {
      target.classList.toggle('form-icon__active');
    }
    if (target && (target as HTMLTemplateElement).dataset.form === 'шар') {
      target.classList.toggle('form-icon__active');
    }
    if (target && (target as HTMLTemplateElement).dataset.form === 'шишка') {
      target.classList.toggle('form-icon__active');
    }
    if (target && (target as HTMLTemplateElement).dataset.form === 'звезда') {
      target.classList.toggle('form-icon__active');
    }
    if (target && (target as HTMLTemplateElement).dataset.form === 'снежинка') {
      target.classList.toggle('form-icon__active');
    }
    if (target && (target as HTMLTemplateElement).dataset.form === 'фигурка') {
      target.classList.toggle('form-icon__active');
    }

  }

  getResult(arg: any[]) {

    if (arg.length === 0) {
      alert('Я еще не успел сделать нормальное окошно. Но не смотря на это, нужных тебе игрушек нет. Попробуй изменить критерии поиска. Удачи:)')
    }
    let sortData;
    const currentCategories = document.getElementById('current-categories');
    if (currentCategories.textContent === 'По году выпуска') {
      sortData = this.sortToys.sortToIncrease(arg);
    }
    if (currentCategories.textContent === 'Все игрушки') {
      sortData = this.sortToys.sortALL(arg);
    }
    if (currentCategories.textContent === 'По имени') {
      sortData = this.sortToys.sortALL(arg);
    }

    this.removeData();
    this.drawToys(sortData);
  }

  changeCountCopy() {
    const countCopy = document.querySelector('.count-copy-item');
    const maxCount = document.querySelector('.count-max');

    const value = String((countCopy as any).value * 100 / (countCopy as any).max);
    const currentValue = (countCopy as any).value;
    maxCount.textContent = `${+currentValue + 1}`;
    (countCopy as any).style.background = `linear-gradient(to right, #24c5db 0%, #24c5db ${value}%, rgb(196, 196, 196) ${value}%, rgb(196, 196, 196) 100%)`;
    console.log(value);
  }

  chageYearPurchase() {
    const yearPurchase: HTMLElement = document.querySelector('.year-purchase-item');
    const maxYear = document.querySelector('.year-max');

    const value = String((yearPurchase as any).value * 100 / (yearPurchase as any).max);
    const currentValue = +(yearPurchase as any).value + 1940;
    maxYear.textContent = `${+currentValue}`;
    (yearPurchase as any).style.background = `linear-gradient(to right, #24c5db 0%, #24c5db ${value}%, rgb(196, 196, 196) ${value}%, rgb(196, 196, 196) 100%)`;
    console.log(value);
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
      case "зеленый":
        target.classList.toggle('color-item__active');
        break
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

