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
    const countCopyes = document.querySelector('.count-copy-item');
    const year = document.querySelector('.year-purchase-item');
    const colorContainer = document.querySelectorAll('.color-item');
    const sizeItem = document.querySelectorAll('.size-item');
    const favoriteToys = document.querySelector('.favorite-item');

    massForm.forEach(element => {
      if (element.classList.contains('form-icon__active')) {
        dataActiveItem.push(element.getAttribute('data-form'));
      }
    });

    for (let i = 1; i <= +(countCopyes as any).value; i++) {
      dataActiveItem.push(String(i));
    }

    for (let i = 1940; i <= (+(year as any).value + 1940); i++) {
      dataActiveItem.push(String(i));
    }

    colorContainer.forEach(element => {
      if (element.classList.contains('color-item__active')) {
        dataActiveItem.push(element.getAttribute('data-color'));
      }
    });

    sizeItem.forEach(element => {
      if ((element as any).checked) {
        dataActiveItem.push(element.getAttribute('data-size'));
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
