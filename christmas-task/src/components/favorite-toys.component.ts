import { Toys } from './toys.component';

export class FavoriteToys extends Toys {
  count: number;
  constructor(id: string) {
    super(id);
    this.count = 0;
  }

  init(): void {
    const start: HTMLElement = document.querySelector('.start');

    start.addEventListener('click', this.buttonHandler.bind(this));
    this.$el.addEventListener('click', this.addFavoriteToys.bind(this));
  }

  addFavoriteToys() {
    const target = (event.target as HTMLElement).closest('.container-content');
    const currentTarget = (target as HTMLTemplateElement)?.dataset.set;
    if (target) {
      if (this.count === 20 && !(target.classList.contains('active-toy'))) {
        alert("Извините, все слоты заполнены");
      } else {
        target.classList.toggle('active-toy');
        if (target.classList.contains('active-toy')) {
          this.count++;
        } else {
          this.count--;
      }
    }

    const countToys: HTMLElement = document.getElementById('count-toys');
    countToys.textContent = `${this.count}`;
    this.localStorage.setDataLocalStorage('dataFavorite', currentTarget);
      this.setfavoriteCountToLocalStorage('dataCount', this.count);
    }

  }

  setfavoriteCountToLocalStorage(index: string, count: number) {
    localStorage.setItem(index, JSON.stringify(count));
  }

  getFavoriteCountToLacalStaorage(index: string, id: string) {
    const count = localStorage.getItem(index);
    const currentCount = document.getElementById('count-toys');
    currentCount.textContent = `${count}`;
    this.count = +count;
  }

  buttonHandler(): void {
    if (localStorage.getItem('dataCount')) {
      this.getFavoriteCountToLacalStaorage('dataCount', 'count-toys');
    }
  }
}
