import { LocalStorage } from './local-storage.component';
import noUiSlider from 'noUiSlider';
import 'nouislider/dist/nouislider.css';
import { toys } from '../index';


const rangeLocalStorage = new LocalStorage();
const StartBtn = document.querySelector('.start');
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

(range as any).noUiSlider.on('change', () => {
  rangeLocalStorage.setRangeToLocalStorage('dataRangeCount', '#range .noUi-handle');
  toys.addResultData();
});
  
(rangeYear as any).noUiSlider.on('change', () => {
  rangeLocalStorage.setRangeToLocalStorage('dataRangeYear', '#range-year .noUi-handle');
  toys.addResultData();
});

StartBtn.addEventListener('click', () => {
  if (localStorage.getItem('dataRangeCount')) {
    const currentValues = JSON.parse(localStorage.getItem('dataRangeCount'));
    (range as any).noUiSlider.set([`${currentValues[0]}`, `${currentValues[currentValues.length - 1]}`]);
  }
  if (localStorage.getItem('dataRangeYear')) {
    const currentValues = JSON.parse(localStorage.getItem('dataRangeYear'));
    (rangeYear as any).noUiSlider.set([`${currentValues[0]}`, `${currentValues[currentValues.length - 1]}`]);
  }
})