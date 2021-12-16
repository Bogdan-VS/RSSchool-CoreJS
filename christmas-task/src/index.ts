import './styles/style.scss';
import { StartGame } from './components/start-game.component';
import { Toys } from './components/toys.component';
import { FavoriteToys } from './components/favorite-toys.component';
import noUiSlider from 'noUiSlider';
import 'nouislider/dist/nouislider.css';
import './components/snow-component.ts';

new StartGame('start');
new Toys('toys');
new FavoriteToys('collection');

export const range = document.getElementById('range');
export const rangeYear = document.getElementById('range-year');

noUiSlider.create(range, {

  start: [1, 12],
  connect: true,
  range: {
      'min': 1,
      'max': 12
  },
  step: 1,
  tooltips: true,
  format: {
    to: function (value: any) {
      return parseInt(value);
    },
    from: function (value) {
      return parseInt(value);
    }
  }
});

noUiSlider.create(rangeYear, {

  start: [1940, 2021],
  connect: true,
  range: {
      'min': 1940,
      'max': 2021
  },
  step: 1,
  tooltips: true,
  format: {
    to: function (value: any) {
      return parseInt(value);
    },
    from: function (value) {
      return parseInt(value);
    }
  }
});



