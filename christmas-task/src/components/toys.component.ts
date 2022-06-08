import { App } from '../app/app';
import { SortToys } from './sort-toys.component';
import { LocalStorage } from './local-storage.component';
import { range } from './ui-slider.component';
import { rangeYear } from './ui-slider.component';
import { favorite } from '..';
import { Data } from '../modules/interface';
import { Audio } from './audio.component';
import { Sort } from '../modules/enum';

export class Toys extends App {
  newData: Data[];
  dataToys: Data[];
  sortToys: SortToys;
  localStorage: LocalStorage;
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
    const data: Data[] = await res.json();
    this.dataToys = data;
    return this.dataToys;
  }

  drawToys(data = this.dataToys) {
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

  getSortToys(event: IntersectionObserverEntryInit) {
    const currentCategories = document.getElementById('current-categories');
    const target = event.target.closest('.sort-item') as HTMLElement;

    if (target) {
      switch (target.dataset.sort) {
        case Sort.ascending:
          currentCategories.textContent = `${Sort.ascending}`;
          break;
        case Sort.descending:
          currentCategories.textContent = `${Sort.descending}`;
          break;
        case Sort.all:
          currentCategories.textContent = `${Sort.all}`;
          break;
        case Sort.fromAZ:
          currentCategories.textContent = `${Sort.fromAZ}`;
          break;
        case Sort.fromZA:
          currentCategories.textContent = `${Sort.fromZA}`;
          break;
      }

      this.addSortToys();
      this.addResultData();
    }
  }

  addResultData() {
    const massFilter: string[] = this.sortToys.getCurrentActiveElements();

    const succsessFilterForm = this.dataToys.filter((el: Data) => {
      return massFilter.includes(el.shape) &&
        massFilter.includes(el.count) &&
        massFilter.includes(el.year) &&
        massFilter.includes(el.color) &&
        massFilter.includes(el.size) &&
        massFilter.includes(el.favorite);
    })

    this.getResult(succsessFilterForm);
  }

  applySucsses(event: Event) {
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

  getFilterForm(event: Event) {
    const target = (event.target as HTMLElement).closest('.form-icon');
    const currentForm = (target as HTMLTemplateElement)?.dataset.form;

    if (currentForm) {
      target.classList.toggle('form-icon__active');
      this.localStorage.setDataLocalStorage('dataForm', currentForm);
    }
  }

  addActiveColor(event: Event) {
    const target = (event.target as HTMLElement).closest('.color-item');
    const currentColor = (target as HTMLTemplateElement)?.dataset.color;

    if (currentColor) {
      target.classList.toggle('color-item__active');
      this.localStorage.setDataLocalStorage('dataColor', currentColor);
    }
  }

  getResult(arg: Data[]) {
    const message = document.querySelector('.message');

    if (arg.length === 0) {
      message.classList.add('message_active');
    } else {
      message.classList.remove('message_active');
    }
    
    let sortData: Data[];
    const currentCategories = document.getElementById('current-categories');

    switch (currentCategories.textContent) {
      case Sort.ascending:
        sortData = this.sortToys.sortToIncrease(arg);
        break
      case Sort.descending:
        sortData = this.sortToys.sortToIncreaseReverse(arg);
        break
      case Sort.all:
        sortData = this.sortToys.sortALL(arg);
        break
      case Sort.fromAZ:
        sortData = this.sortToys.sortToName(arg);
        break
      case Sort.fromZA:
        sortData = this.sortToys.sortToNameReverse(arg);
        break
    }

    this.removeData();
    this.drawToys(sortData);
  }

  applyResetFilters(event: Event) {
    const target = (event.target as HTMLElement).closest('#reset-filters');
    const colorContainer = document.querySelectorAll('.color-item');
    const massForm = document.querySelectorAll('.form-icon');
    const sizeItem: NodeListOf<HTMLInputElement> = document.querySelectorAll('.size-item');
    const favorite: HTMLInputElement = document.querySelector('.favorite-item');

    if (target) {
      range.noUiSlider.reset();
      rangeYear.noUiSlider.reset();

      massForm.forEach(element => {
        element.classList.add('form-icon__active');
      });

      colorContainer.forEach(element => {
        element.classList.add('color-item__active');
      });

      sizeItem.forEach(element => {
        element.checked = true;
      });

      favorite.checked = false;

      this.addResultData();
    }

  }

  applyResetSettings(event: Event) {
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

    const succsessFilterForm = this.dataToys.filter((el: Data) => {
      return massFilter.includes(el.shape) &&
        massFilter.includes(el.count) &&
        massFilter.includes(el.year) &&
        massFilter.includes(el.color) &&
        massFilter.includes(el.size) &&
        massFilter.includes(el.favorite);
    })

    if (value != '') {
      succsessFilterForm.forEach((element: Data) => {
        if (element.name.toLowerCase().search(value.toLowerCase()) != -1) {
          massRequest.push(element);
        }
      });
    } else {
      massRequest = succsessFilterForm;
    }

    this.getResult(massRequest);
  }

  addCleanSearch(event: Event) {
    const cleanSearch = (event.target as HTMLElement).closest('.clean-icon');
    const search = document.getElementById('search') as HTMLInputElement;

    if (cleanSearch) {
      search.value = '';
      this.addSearch();
    }
  }

  removeData() {
    const cards = document.querySelectorAll('.container-content')
    cards.forEach(element => {
      element.remove();
    });
  }

  playMusic(event: IntersectionObserverEntryInit) {
    const musicBtn = event.target.closest('.audio') as HTMLElement;
    const currentBtn = musicBtn?.dataset.audio;

    if (currentBtn === 'toys') {
      this.audio.playMusic();
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
