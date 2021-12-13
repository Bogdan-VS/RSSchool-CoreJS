import { Toys } from './toys.component';

export class FavoriteToys extends Toys {
  count: number;
  constructor(id: string) {
    super(id);
    this.count = 0;
  }

  init(): void {
    this.$el.addEventListener('click', this.addFavoriteToys.bind(this));
  }

  addFavoriteToys() {
    const target = (event.target as HTMLElement).closest('.container-content');
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
  }

  }
}
