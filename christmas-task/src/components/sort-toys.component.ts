import { Data } from "../modules/interface";

export class SortToys {
  constructor() {
  }

  sortToName(data: Data[]) {
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortToNameReverse(data: Data[]) {
    return data.sort((a, b) => b.name.localeCompare(a.name));
  }

  sortToIncrease(data: Data[]) {
    return data.sort((a, b) => (+(a.year) - +(b.year)));
  }

  sortToIncreaseReverse(data: Data[]) {
    return data.sort((a, b) => (+(b.year) - +(a.year)));
  }

  sortALL(data: Data[]) {
    return data.sort((a, b) => (+(a.num) - +(b.num)));
  }

  getCurrentActiveElements() {
    const dataActiveItem: string[] = [];

    const massForm = document.querySelectorAll('.form-icon');
    const countCopyes = document.querySelectorAll('#range .noUi-handle');
    const year = document.querySelectorAll('#range-year .noUi-handle');
    const colorContainer = document.querySelectorAll('.color-item');
    const sizeItem: NodeListOf<HTMLInputElement> = document.querySelectorAll('.size-item');
    const favoriteToys: HTMLInputElement = document.querySelector('.favorite-item');

    massForm.forEach(element => {
      if (element.classList.contains('form-icon__active')) {
        dataActiveItem.push(element.getAttribute('data-form'));
      }
    });

    for (let i = +countCopyes[0].ariaValueNow; i <= +countCopyes[1].ariaValueNow; i++) {
      dataActiveItem.push(String(i));
    }

    for (let i = +year[0].ariaValueNow; i <= +year[1].ariaValueNow; i++) {
      dataActiveItem.push(String(i));
    }

    colorContainer.forEach(element => {
      if (element.classList.contains('color-item__active')) {
        dataActiveItem.push(element.getAttribute('data-color'));
      }
    });

    sizeItem.forEach(element => {
      if (element.checked) {
        dataActiveItem.push(element.getAttribute('data-check'));
      }
    });

    if (favoriteToys.checked) {
      dataActiveItem.push('true');
    } else {
      dataActiveItem.push('true');
      dataActiveItem.push('false');
    }

    return dataActiveItem;
  }
} 
