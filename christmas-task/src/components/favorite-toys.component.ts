import { Toys } from './toys.component';

export class FavoriteToys extends Toys {
  count: number;
  activeToys: string[];
  constructor(id: string) {
    super(id);
    this.count = 0;
    this.activeToys = [];
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
          this.activeToys.push(target.getAttribute('data-set'));
        } else {
          this.count--;
          const index = this.activeToys.indexOf((target.getAttribute('data-set')));
          this.activeToys.splice(index, 1);
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

  addCurrentFavotiteToys(): void {
    const toysContainers = document.querySelectorAll('.container-content');
    const countToys: HTMLElement = document.getElementById('count-toys');
    

    this.count = 0;
    toysContainers.forEach(element => {
      if (this.activeToys.includes(element.getAttribute('data-set'))) {
        console.log(element);
        element.classList.add('active-toy');
        this.count++;
      }
    });

    countToys.textContent = `${this.count}`;
  }
}
