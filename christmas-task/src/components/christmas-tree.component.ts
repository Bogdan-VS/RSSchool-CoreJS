import { App } from '../app/app';
import { favorite } from '..';
import { toys } from '..';
import { Data } from '../modules/interface';
import { Garland } from './garland.component';
import { Audio } from './audio.component';


export class ChristmasTree extends App {
  count: number;
  allDataToys: Data[];
  leaveFlag: boolean;
  garland: Garland;
  audio: Audio;
  constructor(id: string) {
    super(id);
    this.count = 0;
    this.allDataToys;
    this.leaveFlag;
    this.garland = new Garland;
    this.audio = new Audio;
  }

  init(): void {
    const toys = document.getElementById('toys-page')
    const tree = document.getElementById('tree-page');
    const area = document.querySelector('.area');
    const startPage = document.getElementById('start-page');
    const garlandBtn = document.querySelector('.switch input');

    garlandBtn.addEventListener('input', this.garlandBtnOn.bind(this));
    startPage.addEventListener('click', this.openStartPage.bind(this));
    tree.addEventListener('click', this.openChristmasTreePage.bind(this));
    toys.addEventListener('click', this.openToysPages.bind(this));
    this.$el.addEventListener('click', this.playMusic.bind(this));
    this.$el.addEventListener('click', this.addBackground.bind(this));
    this.$el.addEventListener('click', this.addTree.bind(this));
    this.$el.addEventListener('dragstart', this.startDrag);
    this.$el.addEventListener('dragend', this.endDrag.bind(this));
    this.$el.addEventListener('dragenter', this.enterDrag.bind(this));
    this.$el.addEventListener('click', this.garlandOn.bind(this));
    area.addEventListener('dragleave', this.dragLeave.bind(this));
    area.addEventListener('dragover', this.dragOver.bind(this));
    area.addEventListener('drop', this.drop.bind(this));
  }

  dragLeave(event: DragEvent) {
    const tree = document.getElementById('tree') as HTMLTemplateElement;
    this.leaveFlag = false;
  }

  enterDrag(event: DragEvent) {
    const tree = document.getElementById('tree') as HTMLTemplateElement;
  }

  drop(event: DragEvent) {
    event.preventDefault();
    const data1 = event.dataTransfer.getData('elemDrag1');
    const data2 = event.dataTransfer.getData('elemDrag2');
    const toyElement2: HTMLDivElement = document.querySelector(`.toy-on-tree[data-active="${data2}"]`);   
    if (data2) {
      
      // const toyElement2: HTMLDivElement = document.querySelector(`.toy-on-tree[data-active="${data2}"]`);
      toyElement2.style.position = 'absolute';
      toyElement2.style.width = '30px';
      toyElement2.style.height = '30px';
      (event.target as any).appendChild(toyElement2);
      moveAt(event.offsetX, event.offsetY, toyElement2);
      console.log('drop');
    }

    if (data1) {
      const elemCount = document.querySelector(`[data-itemcount="${data1}"]`);
      const elemToy = document.querySelector(`[data-itemtoy="${data1}"]`) as HTMLTemplateElement;
      const currentCount = +elemCount.textContent;

      if (elemCount.textContent !== '0') {
        elemCount.textContent = `${currentCount - 1}`;
      }
      if (elemCount.textContent === '0') {
        elemToy.style.display = 'none';
      }

      const toyElement1 = document.createElement('div');
      toyElement1.classList.add('toy-on-tree');
      toyElement1.setAttribute('draggable', 'true');
      toyElement1.setAttribute('data-active', `${this.count}`);
      toyElement1.setAttribute('data-toycount', `${data1}`);
      toyElement1.style.position = 'absolute';
      toyElement1.style.width = '35px';
      toyElement1.style.height = '35px';
      toyElement1.style.zIndex = '100';
      toyElement1.style.background = `top 0 left 0 / 100% 100% url(./assets/images/toys/${data1}.png)`;
      (event.target as any).appendChild(toyElement1);
      moveAt(event.offsetX, event.offsetY, toyElement1);
      
      this.count++;
    }
    function moveAt(pageX: any, pageY: any, element: HTMLElement) {
      element.style.left = pageX - element.offsetWidth / 2 + 'px';
      element.style.top = pageY - element.offsetHeight / 2 + 'px';
    }
  }

  dragOver(event: any) {
    event.preventDefault();
    this.leaveFlag = true;
  }

  startDrag(event: { target: any; }) {
    const dragElement1 = (event.target as any).closest('.toy-icon');
    const dragElement2 = (event.target as any).closest('.toy-on-tree');

    if (dragElement1) {
      (event as any).dataTransfer.setData('elemDrag1', `${dragElement1.dataset.itemtoy}`);
      dragElement1.classList.add('selected');
    }
    if (dragElement2) {
      (event as any).dataTransfer.setData('elemDrag2', `${dragElement2.dataset.active}`);
    }

  }

  endDrag(event: DragEvent) {
    const dragElement: HTMLElement = (event.target as any).closest('.toy-on-tree');
    const upItem = document.querySelector(`[data-itemcount="${dragElement.dataset.toycount}"]`);
    const elemCount = document.querySelector(`[data-itemtoy="${dragElement.dataset.toycount}"]`) as HTMLTemplateElement;
    console.log(elemCount);
    if (dragElement) {
      if (!this.leaveFlag) {
        dragElement.remove();
        upItem.textContent = `${+upItem.textContent + 1}`;
        elemCount.style.display = 'block';
      }
    }
  }

  async getAllDataToys() {
    this.allDataToys = await toys.getData();
    return this.allDataToys;
  }

  async drawCurrentdataToys() {
    const allData = await toys.getData();
    const currentData: Data[] = [];
    const activeToys = this.getActiveData();

    allData.forEach((element, index) => {
      if (activeToys.includes(allData[index].num)) {
        currentData.push(element);
      }
    });
    
    const activeToy = document.querySelectorAll('.toy-for-tree');

    if (activeToy) {
      activeToy.forEach(element => {
        element.remove();
      });
    }

    let activeData: Data[];

    if (currentData.length === 0) {
      activeData = this.allDataToys.slice(0, 20);
    } else {
      activeData = currentData;
    }
    const toysTreeContainer = document.querySelector('.toys-tree-container');

    for (let i = 0; i < activeData.length; i++) {
      const toy = document.createElement('div');
      toy.classList.add('toy-for-tree');
      toy.setAttribute('data-treeToy', `${activeData[i].name}`);
      toy.innerHTML = `
        <div class="toy-icon icon${i}" draggable="true" data-itemToy="${activeData[i].num}"></div>
        <div class="toy-count" data-itemcount="${activeData[i].num}">${activeData[i].count}</div>
      `

      toysTreeContainer.append(toy);
      const iconToy = document.querySelector(`.icon${i}`) as HTMLDivElement;

      iconToy.style.background = `top 0 left 0 / 100% 100% url(./assets/images/toys/${activeData[i].num}.png)`;
    }

  }

  getActiveData() {
    const toys = document.querySelectorAll('.container-content');
    const activeToys: string[] = [];

    toys.forEach(element => {
      if (element.classList.contains('active-toy')) {
        activeToys.push(element.getAttribute('data-set'));
      }
    });

    return activeToys;
  }

  addBackground() {
    const bgContainers = (event.target as HTMLElement).closest('.conteiner-content-bg');
    const currentBg = (bgContainers as HTMLTemplateElement)?.dataset.bg;

    if (currentBg) {
      this.addActiveItem(currentBg, bgContainers, 'christmas-bg-current', 'conteiner-content-bg', 'conteiner-content-bg__active');
    }
  }

  addTree() {
    const treeContainers = (event.target as HTMLElement).closest('.conteiner-item');
    const currentTree = (treeContainers as HTMLTemplateElement)?.dataset.tree;

    if (currentTree) {
      this.addActiveItem(currentTree, treeContainers, 'christmas-tree-carrent', 'conteiner-item', 'conteiner-content__active');
    }
  }

  addActiveItem(data: string, className: Element, currentItem: string, allItems: string, activeItem: string) {
    const currentElem = document.querySelector(`.${currentItem}`);
    const allElem = document.querySelectorAll(`.${allItems}`);

    allElem.forEach(element => {
      element.classList.remove(`${activeItem}`);   
    });

    className.classList.add(`${activeItem}`);

    if (currentElem.classList.contains('christmas-tree-carrent')) {
      currentElem.setAttribute('src', `./assets/images/tree/${data}.png`);
    }
    
    if (currentElem.classList.contains('christmas-bg-current')) {
      (currentElem as HTMLTemplateElement).style.background = `center / cover url(./assets/images/bg/${data}.jpg)`;
    }
  }

  garlandBtnOn() {
    const garlandBtn = document.querySelector('.switch input') as HTMLInputElement;
    const garland = document.querySelector('.garland') as HTMLTemplateElement;
    const redGarland = document.querySelector('.garland-2');

    if (garlandBtn.checked) {
      garland.style.display = 'block';
      redGarland.classList.add('garland-item__active');
    } else {
      garland.style.display = 'none';
      this.cleanGarlandActiveClass();
    }
  }

  playMusic() {
    const musicBtn = (event as any).target.closest('.audio');
    const currentBtn = musicBtn?.dataset.audio;

    if (musicBtn) {
      switch (currentBtn) {
        case 'tree':
          this.audio.playMusic();
          break;
      }
    }
  }

  garlandOn() {
    const garlands = (event as any).target.closest('.garland-container-item');
    const garlandItem = garlands?.dataset.garland;

    if (garlands) {
      this.cleanGarlandActiveClass();
      switch (garlandItem) {
        case 'red':
          this.garland.addColorGarland('red_1', 'red_2');
          garlands.classList.toggle('garland-item__active');
        break;
        case 'blue':
          this.garland.addColorGarland('blue_1', 'blue_2');
          garlands.classList.toggle('garland-item__active');
        break;
        case 'yellow':
          this.garland.addColorGarland('yellow_1', 'yellow_2');
          garlands.classList.toggle('garland-item__active');
        break;
        case 'green':
          this.garland.addColorGarland('green_1', 'green_2');
          garlands.classList.toggle('garland-item__active');
        break;
        case 'all':
          this.garland.addAllColorGarland('green', 'yellow', 'red', 'blue');
          garlands.classList.toggle('garland-item__active');
        break;
      }
    }
  }

  cleanGarlandActiveClass() {
    const garlands = document.querySelectorAll('.garland-container-item');

    garlands.forEach(element => {
      element.classList.remove('garland-item__active');
    });
  }

  openToysPages() {
    this.hide();
  }

  openChristmasTreePage() {
    this.show();
    this.getAllDataToys();
    this.drawCurrentdataToys();
  }

  openStartPage() {
    this.hide();
  }
}