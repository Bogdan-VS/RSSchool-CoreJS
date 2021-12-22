import { App } from '../app/app';

export class ChristmasTree extends App {
  constructor(id: string) {
    super(id);
  }

  init(): void {
    const toys = document.getElementById('toys-page')
    const tree = document.getElementById('tree-page');

    tree.addEventListener('click', this.openChristmasTreePage.bind(this));
    toys.addEventListener('click', this.openToysPages.bind(this));
    this.$el.addEventListener('click', this.addBackground.bind(this));
    this.$el.addEventListener('click', this.addTree.bind(this));
  }

  addBackground() {
    const bgContainers = (event.target as HTMLElement).closest('.conteiner-content-bg');
    const currentBg = (bgContainers as HTMLTemplateElement)?.dataset.bg;

    if (currentBg) {
      this.addActiveItem(currentBg, bgContainers, 'christmas-bg-current', 'conteiner-content-bg', 'conteiner-content-bg__active', 'bg', 'jpg');
    }
  }

  addTree() {
    const treeContainers = (event.target as HTMLElement).closest('.conteiner-item');
    const currentTree = (treeContainers as HTMLTemplateElement)?.dataset.tree;

    if (currentTree) {
      this.addActiveItem(currentTree, treeContainers, 'christmas-tree-carrent', 'conteiner-item', 'conteiner-content__active', 'tree', 'png');
    }
  }

  addActiveItem(data: string, className: Element, currentItem: string, allItems: string, activeItem: string, folder: string, format: string) {
    const currentBg = document.querySelector(`.${currentItem}`);
    const bgContainers = document.querySelectorAll(`.${allItems}`);
    let activeBg: string;

    switch (folder) {
      case 'tree':
        activeBg = `top 0 left 0 / 100% 100% url(../assets/images/${folder}/${data}.${format})`;
      break
      case 'bg':
        activeBg = `center / cover url(../assets/images/${folder}/${data}.${format})`;
      break
    }

    bgContainers.forEach(element => {
      element.classList.remove(`${activeItem}`);   
    });

    className.classList.add(`${activeItem}`);

    if (className.classList.contains(`${activeItem}`)) {
      (currentBg as HTMLTemplateElement).style.background = activeBg;
    } else {
      (currentBg as HTMLTemplateElement).style.background = '';
    }
  }

  // addActiveTree(treeName: string, conteinerTree: Element) {
  //   const currentTree = document.querySelector('.christmas-tree-carrent');
  //   const treeContainers = document.querySelectorAll('.conteiner-item');

  //   treeContainers.forEach(element => {
  //     element.classList.remove('conteiner-content-bg__active');   
  //   });

  //   conteinerTree.classList.add('conteiner-content-bg__active');

  //   if (conteinerTree.classList.contains('conteiner-content-bg__active')) {
  //     (currentTree as HTMLTemplateElement).style.background = `center / cover url(../assets/images/bg/${treeName}.jpg)`;
  //   } else {
  //     (currentTree as HTMLTemplateElement).style.background = '';
  //   }
  // }

  openToysPages() {
    this.hide();
  }

  openChristmasTreePage() {
    this.show();
  }
}