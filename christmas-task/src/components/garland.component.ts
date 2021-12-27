export class Garland {

  addColorGarland(class1: string, class2: string) {
    const garlandItems = document.querySelectorAll('.garland-item');

    garlandItems.forEach((element, index) => {
      (element as any).classList = 'garland-item';
      if (index % 2 === 1) {
        element.classList.add(`${class1}`);
      } else {
        element.classList.add(`${class2}`);
      }
    });
  }

  addAllColorGarland(class1: string, class2: string, class3: string, class4: string) {
    const garlandItems = document.querySelectorAll('.garland-item');

    garlandItems.forEach((element, index) => {
      (element as any).classList = 'garland-item';
      if (index % 2 === 1) {
        element.classList.add(`${class1}`);
      }
      if (index % 3 === 1)  {
        element.classList.add(`${class2}`);
      }
      if (index % 4 === 1 && index > 2) {
        element.classList.add(`${class3}`);
      }
      else {
        element.classList.add(`${class4}`);
      }
    });
  }
}