import { App } from '../app/app';
import { favorite } from '..';
import { toys } from '..';
import { Data } from '../modules/interface';


export class ChristmasTree extends App {
  count: number;
  allDataToys: Data[];
  leaveFlag: boolean;
  constructor(id: string) {
    super(id);
    this.count = 0;
    this.allDataToys;
    this.leaveFlag;
  }

  init(): void {
    const toys = document.getElementById('toys-page')
    const tree = document.getElementById('tree-page');
    const area = document.querySelector('.area');
    const startPage = document.getElementById('start-page');

    startPage.addEventListener('click', this.openStartPage.bind(this));
    tree.addEventListener('click', this.openChristmasTreePage.bind(this));
    toys.addEventListener('click', this.openToysPages.bind(this));
    this.$el.addEventListener('click', this.addBackground.bind(this));
    this.$el.addEventListener('click', this.addTree.bind(this));
    this.$el.addEventListener('dragstart', this.startDrag);
    this.$el.addEventListener('dragend', this.endDrag.bind(this));
    this.$el.addEventListener('dragenter', this.enterDrag.bind(this));
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
      toyElement1.style.width = '30px';
      toyElement1.style.height = '30px';
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
      console.log(this.allDataToys);
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
      (currentElem as HTMLTemplateElement).style.background = `center / cover url(../assets/images/bg/${data}.jpg)`;
    }
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