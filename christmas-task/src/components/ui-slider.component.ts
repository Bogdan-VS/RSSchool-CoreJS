import { LocalStorage } from './local-storage.component';
import noUiSlider from 'noUiSlider';
import 'nouislider/dist/nouislider.css';
import { toys } from '../index';
import { target } from 'noUiSlider';

const rangeLocalStorage = new LocalStorage();
const StartBtn = document.querySelector('.start');
export const range: target = document.getElementById('range');
export const rangeYear: target = document.getElementById('range-year');

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
    range.noUiSlider.set([`${currentValues[0]}`, `${currentValues[currentValues.length - 1]}`]);
  }
  if (localStorage.getItem('dataRangeYear')) {
    const currentValues: string[] = JSON.parse(localStorage.getItem('dataRangeYear'));
    rangeYear.noUiSlider.set([`${currentValues[0]}`, `${currentValues[currentValues.length - 1]}`]);
  }
});
