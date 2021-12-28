import { App } from '../app/app';
import { SortToys } from './sort-toys.component';
import { LocalStorage } from './local-storage.component';
import { range } from './ui-slider.component';
import { rangeYear } from './ui-slider.component';
import { favorite } from '..';
import { Data } from '../modules/interface';
import { Audio } from './audio.component';

export class Toys extends App {
  newData: Data[];
  dataToys: Data[];
  sortToys: SortToys;
  localStorage: LocalStorage;
  countCopy: any;
  audio: Audio;
  constructor(id: string) {
    super(id);
    this.dataToys;
    this.newData;
    this.sortToys = new SortToys();
    this.localStorage = new LocalStorage;
    this.audio = new Audio;
  }

  init() {
    this.getData();
    const start: HTMLElement = document.querySelector('.start');
    const chooseItem: HTMLElement = document.querySelector('.choose-item');
    const search: HTMLElement = document.getElementById('search');
    const tree = document.getElementById('tree-page');
    const toys = document.getElementById('toys-page');
    const startPage = document.getElementById('start-page');

    toys.addEventListener('click', this.openToysPages.bind(this));
    tree.addEventListener('click', this.openChristmasTreePage.bind(this));
    startPage.addEventListener('click', this.openStartPage.bind(this));
    search.addEventListener('input', this.addSearch.bind(this));
    start.addEventListener('click', this.buttonHandler.bind(this));
    chooseItem.addEventListener('click', this.addSortToys.bind(this));
    this.$el.addEventListener('click', this.getSortToys.bind(this));
    this.$el.addEventListener('click', this.getFilterForm.bind(this));
    this.$el.addEventListener('click', this.addActiveColor.bind(this));
    this.$el.addEventListener('click', this.applySucsses.bind(this));
    this.$el.addEventListener('click', this.applyResetFilters.bind(this));
    this.$el.addEventListener('click', this.applyResetSettings.bind(this));
    this.$el.addEventListener('click', this.addCleanSearch.bind(this));
    this.$el.addEventListener('click', this.playMusic.bind(this));
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
    for (let i = 0; i < data.length; i++) {
      const content = document.createElement('aside');
      content.classList.add('container-content');
      content.setAttribute('id', `toy-${i}`);
      content.setAttribute('data-set', `${data[i].num}`);
      content.innerHTML = `
        <h4>${data[i].name}</h4>
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

      favorite.addCurrentFavotiteToys();
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
      case 'По возрастанию года выпуска':
        currentCategories.textContent = 'По возрастанию года выпуска';
        this.addSortToys();
        this.addResultData();
        break;
      case 'По убыванию года выпуска':
        currentCategories.textContent = 'По убыванию года выпуска';
        this.addSortToys();
        this.addResultData();
        break;
      case 'Все игрушки':
        currentCategories.textContent = 'Все игрушки';
        this.addSortToys();
        this.addResultData();
        break;
      case 'По имени А-Я':
        currentCategories.textContent = 'По имени А-Я';
        this.addSortToys();
        this.addResultData();
        break;
      case 'По имени Я-А':
        currentCategories.textContent = 'По имени Я-А';
        this.addSortToys();
        this.addResultData();
        break;
    }
  }

  addResultData() {
    const massFilter = this.sortToys.getCurrentActiveElements();

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

  applySucsses() {
    const formTarget = (event.target as HTMLElement).closest('.form-icon');
    const colorTarget = (event.target as HTMLElement).closest('.color-item');
    const checkTarget = (event.target as HTMLElement).closest('.checked');
    const currentCheck = (checkTarget as HTMLTemplateElement)?.dataset.check;

    if (formTarget ||
      colorTarget ||
      checkTarget) {
      if (currentCheck) {
        this.localStorage.setDataLocalStorage('dataChecked', currentCheck);
      }
      this.addResultData();
    }

  }

  getFilterForm() {
    const target = (event.target as HTMLElement).closest('.form-icon');
    const currentForm = (target as HTMLTemplateElement)?.dataset.form;

    if (currentForm) {
      switch (currentForm) {
        case 'колокольчик':
          target.classList.toggle('form-icon__active');
          break;
        case 'шар':
          target.classList.toggle('form-icon__active');
          break;
        case 'шишка':
          target.classList.toggle('form-icon__active');
          break;
        case 'снежинка':
          target.classList.toggle('form-icon__active');
          break;
        case 'фигурка':
          target.classList.toggle('form-icon__active');
          break;
      }
      this.localStorage.setDataLocalStorage('dataForm', currentForm);
    }
  }

  addActiveColor() {
    const target = (event.target as HTMLElement).closest('.color-item');
    const currentColor = (target as HTMLTemplateElement)?.dataset.color;

    if (currentColor) {
      switch (currentColor) {
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
          target.classList.toggle('color-item__active');
          break
        case "зелёный":
          target.classList.toggle('color-item__active');
          break
      }
      this.localStorage.setDataLocalStorage('dataColor', currentColor);
    }
  }

  getResult(arg: any[]) {
    const message = document.querySelector('.message');

    if (arg.length === 0) {
      message.classList.add('message_active');
    } else {
      message.classList.remove('message_active');
    }
    
    let sortData;
    const currentCategories = document.getElementById('current-categories');

    switch (currentCategories.textContent) {
      case 'По возрастанию года выпуска':
        sortData = this.sortToys.sortToIncrease(arg);
        break
      case 'По убыванию года выпуска':
        sortData = this.sortToys.sortToIncreaseReverse(arg);
        break
      case 'Все игрушки':
        sortData = this.sortToys.sortALL(arg);
        break
      case 'По имени А-Я':
        sortData = this.sortToys.sortToName(arg);
        break
      case 'По имени Я-А':
        sortData = this.sortToys.sortToNameReverse(arg);
        break
    }

    this.removeData();
    this.drawToys(sortData);
  }

  applyResetFilters() {
    const target = (event.target as HTMLElement).closest('#reset-filters');
    const colorContainer = document.querySelectorAll('.color-item');
    const massForm = document.querySelectorAll('.form-icon');
    const sizeItem = document.querySelectorAll('.size-item');
    const favorite = document.querySelector('.favorite-item');

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

      (favorite as any).checked = '';

      this.addResultData();
    }

  }

  applyResetSettings() {
    const resetSettings = (event.target as HTMLElement).closest('#reset-setting');
    if (resetSettings) {
      localStorage.clear();
    }
  }

  addSearch() {
    const search = document.getElementById('search') as HTMLInputElement;
    let value = search.value.trim();
    const massFilter: string[] = this.sortToys.getCurrentActiveElements();
    let massRequest: Data[] = [];

    const succsessFilterForm = this.dataToys.filter((el: any) => {
      return massFilter.includes(el.shape) &&
        massFilter.includes(el.count) &&
        massFilter.includes(el.year) &&
        massFilter.includes(el.color) &&
        massFilter.includes(el.size) &&
        massFilter.includes(el.favorite);
    })

    if (value != '') {
      succsessFilterForm.forEach((element: any) => {
        if (element.name.toLowerCase().search(value.toLowerCase()) != -1) {
          massRequest.push(element);
        }
      });
    } else {
      massRequest = succsessFilterForm;
    }

    this.getResult(massRequest);
  }

  addCleanSearch() {
    const cleanSearch = (event.target as HTMLElement).closest('.clean-icon');
    const search: HTMLElement = document.getElementById('search');

    if (cleanSearch) {
      (search as any).value = '';
      this.addSearch();
    }
  }

  removeData() {
    const cards = document.querySelectorAll('.container-content')
    cards.forEach(element => {
      element.remove();
    });
  }

  playMusic() {
    const musicBtn = (event as any).target.closest('.audio');
    const currentBtn = musicBtn?.dataset.audio;

    if (musicBtn) {
      switch (currentBtn) {
        case 'toys':
          this.audio.playMusic();
          break;
      }
    }
  }

  openChristmasTreePage() {
    this.hide();
  }

  openToysPages() {
    this.show();
  }

  openStartPage() {
    this.hide();
  }

  buttonHandler() {
    if (localStorage.getItem('dataColor')) {
      this.localStorage.getDataLocalStorage('dataColor', 'color', '.color-item', 'color-item__active');
    }
    if (localStorage.getItem('dataForm')) {
      this.localStorage.getDataLocalStorage('dataForm', 'form', '.form-icon', 'form-icon__active');
    }
    if (localStorage.getItem('dataChecked')) {
      this.localStorage.getCheckedLocalStorage('dataChecked', 'check', '.checked');
    }
    this.show();
    this.addResultData();
    if (localStorage.getItem('dataFavorite')) {
      this.localStorage.getDataLocalStorage('dataFavorite', 'set', '.container-content', 'active-toy');
    }
  }
}



