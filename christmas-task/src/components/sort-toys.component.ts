export class SortToys {
  constructor() {
  }

  sortToName(data: any[]) {
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortToIncrease(data: any[]) {
    return data.sort((a, b) => (a.year - b.year));
  }

  sortALL(data: any[]) {
    return data.sort((a, b) => (a.num - b.num));
  }

  getCurrentActiveElements() {
    const dataActiveItem: string[] = [];

    const massForm = document.querySelectorAll('.form-icon');
    const countCopyes = document.querySelectorAll('#range .noUi-handle');
    const year = document.querySelectorAll('#range-year .noUi-handle');
    const colorContainer = document.querySelectorAll('.color-item');
    const sizeItem = document.querySelectorAll('.size-item');
    const favoriteToys = document.querySelector('.favorite-item');

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
      if ((element as any).checked) {
        dataActiveItem.push(element.getAttribute('data-check'));
      }
    });

    if ((favoriteToys as any).checked) {
      (dataActiveItem as any).push(true);
    } else {
      (dataActiveItem as any).push(true);
      (dataActiveItem as any).push(false);
    }

    return dataActiveItem;
  }
} 
