export class LocalStorage {

  setDataLocalStorage(index: string, value: string) {
    const currentValue: string[] = JSON.parse(localStorage.getItem(index));
    if (currentValue) {
      if (currentValue.includes(value)) {
        const index = currentValue.indexOf(value);
        currentValue.splice(index, 1);
      } else {
        currentValue.push(value);
      }

      localStorage.setItem(index, JSON.stringify(currentValue));
    } else {
      localStorage.setItem(index, JSON.stringify([value]));
    }
  }

  setRangeToLocalStorage(index: string, className: string) {
    const currentValue: string[] = JSON.parse(localStorage.getItem(index));
    const currentRange = document.querySelectorAll(`${className}`);
    if (currentValue) {
      let currentCopyes: string[] = [];
      for (let i = +currentRange[0].ariaValueNow; i <= +currentRange[1].ariaValueNow; i++) {
        currentCopyes.push(String(i));
      }
      localStorage.setItem(index, JSON.stringify(currentCopyes));
    } else {
      let currentCopyes: string[] = [];
      for (let i = +currentRange[0].ariaValueNow; i <= +currentRange[1].ariaValueNow; i++) {
        currentCopyes.push(String(i));
      }
      localStorage.setItem(index, JSON.stringify(currentCopyes));
    }

  }

  getDataLocalStorage(index: string, set: string, className: string, activeClass: string) {
    const values = document.querySelectorAll(`${className}`);
    const currentValues = localStorage.getItem(index);
    values.forEach(element => {
      if (currentValues.includes(element.getAttribute(`data-${set}`))) {
        element.classList.toggle(`${activeClass}`);
      }
    });

  }

  getCheckedLocalStorage(index: string, set: string, className: string) {
    const sizeItem: NodeListOf<HTMLInputElement> = document.querySelectorAll(`${className}`);
    const currentCheck = localStorage.getItem(`${index}`);

    sizeItem.forEach(element => {
      if (currentCheck.includes(element.getAttribute(`data-${set}`))) {
        if (element.getAttribute(`data-${set}`) === 'true') {
          element.checked = true;
        } else {
          element.checked = false;
        }
      }
    });
  }
}