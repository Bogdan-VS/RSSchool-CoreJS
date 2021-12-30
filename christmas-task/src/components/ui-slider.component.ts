import { LocalStorage } from './local-storage.component';
import noUiSlider from 'noUiSlider';
import 'nouislider/dist/nouislider.css';
import { toys } from '../index';
import { IRange } from '../modules/interface';

const rangeLocalStorage = new LocalStorage();
const StartBtn = document.querySelector('.start');
export const range = document.getElementById('range') as any; // Не понятно как протипизироввать, создал интерфейс, но он не получается абсолютно не корректен.
export const rangeYear = document.getElementById('range-year') as any; // Аналогичная ситуация

noUiSlider.create(range, {
  start: [1, 12],
  connect: true,
  range: {
    min: 1,
    max: 12,
  },
  step: 1,
  tooltips: true,
  format: {
    to: function (value: number) {
      return parseInt(String(value));
    },
    from: function (value) {
      return parseInt(value);
    },
  },
});

noUiSlider.create(rangeYear, {
  start: [1940, 2021],
  connect: true,
  range: {
    min: 1940,
    max: 2021,
  },
  step: 1,
  tooltips: true,
  format: {
    to: function (value: number) {
      return parseInt(String(value));
    },
    from: function (value) {
      return parseInt(value);
    },
  },
});

range.noUiSlider.on('change', () => {
  rangeLocalStorage.setRangeToLocalStorage('dataRangeCount', '#range .noUi-handle');
  toys.addResultData();
});

rangeYear.noUiSlider.on('change', () => {
  rangeLocalStorage.setRangeToLocalStorage('dataRangeYear', '#range-year .noUi-handle');
  toys.addResultData();
});

StartBtn.addEventListener('click', () => {
  if (localStorage.getItem('dataRangeCount')) {
    const currentValues: string[] = JSON.parse(localStorage.getItem('dataRangeCount'));
    (range as any).noUiSlider.set([`${currentValues[0]}`, `${currentValues[currentValues.length - 1]}`]);
  }
  if (localStorage.getItem('dataRangeYear')) {
    const currentValues: string[] = JSON.parse(localStorage.getItem('dataRangeYear'));
    (rangeYear as any).noUiSlider.set([`${currentValues[0]}`, `${currentValues[currentValues.length - 1]}`]);
  }
});
