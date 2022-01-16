import { App } from "../../app/app";
import { Api } from "../../api/api";
import { ICarId, IDataCar } from "../../description/interface";
import { CarControl } from "../cars-control/cars-control.component";
import { distanceTrack, newCar, carId, pagination, dataPages, htmlElements, arrPropertiesOfCars } from "../../description/const";
import { CreateCars } from "../create-cars/create-cars.component";
export const api = new Api;

export class Garage extends App {
  currentData: IDataCar[];
  carControl: CarControl;
  createCars: CreateCars;
  constructor(id: string) {
    super(id);
    this.currentData;
    this.createCars = new CreateCars;
    this.carControl = new CarControl;
  }

  init() {
    const race = document.getElementById('race');
    const reset = document.getElementById('reset');
    const createCar = document.getElementById('create-car');
    const updateCar = document.getElementById('update-car');
    const nextPage = document.getElementById('next-page');
    const prevPage = document.getElementById('prev-page');
    const generateCars = document.getElementById('generate-cars');

    this.getDataCar();
    this.$el.addEventListener('click', this.startRace.bind(this));
    this.$el.addEventListener('click', this.stopRace.bind(this));
    this.$el.addEventListener('click', this.getCurrentCarId.bind(this));
    this.$el.addEventListener('click', this.getIdRemoveCar.bind(this));
    race.addEventListener('click', this.startRaceForAll.bind(this));
    reset.addEventListener('click', this.getStatusStopAllCars.bind(this));
    createCar.addEventListener('click', this.getNewCar.bind(this));
    updateCar.addEventListener('click', this.getUpdateCarProperty.bind(this));
    nextPage.addEventListener('click', this.openNextPage.bind(this));
    prevPage.addEventListener('click', this.openPrevPage.bind(this));
    generateCars.addEventListener('click', this.getNewCars.bind(this));
  }

  startRace(event: Event) {
    const target = (event.target as HTMLElement).closest('.subtitle-car-btn') as HTMLElement;
    const startCar = target?.dataset.start;

    if (startCar) {
      this.getStatusStartCar(+startCar);
    }
  }

  stopRace(event: Event) {
    const target: HTMLElement = (event.target as HTMLElement).closest('.subtitle-car-btn');
    const stopCar = target?.dataset.stop;

    if (stopCar) {
      this.getStatusStopCar(+stopCar);
    }
  }

  startRaceForAll() {
    this.getStatusStartAllCars();
  }

  async openNextPage() {
    pagination.page++;

    const nextPage = document.getElementById('next-page') as HTMLButtonElement;
    const prevPage = document.getElementById('prev-page') as HTMLButtonElement;

    this.removeDisabled(prevPage);
    const count = `car-conteiner-${dataPages.count}`;

    await this.renderPage();
    const currentCount = document.getElementById(`${count}`)?.getAttribute('id');

    if (currentCount === count) {
      this.addDisabled(nextPage);
    } else {
      this.removeDisabled(nextPage);
    }
  }

  checkToPageCount(className: HTMLButtonElement) {
    const count = `car-conteiner-${dataPages.count}`;
    const currentCount = document.getElementById(`${count}`)?.getAttribute('id');
    const carConteiner = document.querySelectorAll('.car-conteiner');

    if (currentCount === count || carConteiner.length < pagination.limit) {
      this.addDisabled(className);
    } else {
      this.removeDisabled(className);
    }
  }

  async openPrevPage() {
    pagination.page--;
    console.log(dataPages.count);
    const prevPage = document.getElementById('prev-page') as HTMLButtonElement;
    const nextPage = document.getElementById('next-page') as HTMLButtonElement;

    this.removeDisabled(prevPage);
    this.removeDisabled(nextPage);
    await this.renderPage();
    this.checkToPageCount(nextPage);

    if (pagination.page === 1) {
      console.log('second');
      this.addDisabled(prevPage);
    }
  }

  addDisabled(className: HTMLButtonElement) {
    className.disabled = true;
    className.classList.add('disabled');
  }

  removeDisabled(className: HTMLButtonElement) {
    className.disabled = false;
    className.classList.remove('disabled');
  }

  async renderPage() {
    const page = document.getElementById('page');
    const carConteiner = document.querySelectorAll('.car-conteiner');

    page.textContent = `Page #${pagination.page}`;

    carConteiner.forEach(element => {
      element.remove();
    });

    await this.getPages();
    this.drawCarContainer(dataPages.items);
    console.log('first');
  }

  async getDataCar() {
    this.currentData = await api.getEmloyees();
    await this.getPages();
    this.drawCarContainer(dataPages.items);
  }

  async getStatusStartCar(id: number) {
    const distance = await api.getStartStopEngine((this.currentData)[id - 1].id, 'started');
    api.getSwitchEngine((this.currentData)[id - 1].id, 'drive');
    distanceTrack.currentDistance = this.getCurrentDistance();
    this.getCurrentDistance();
    this.carControl.carStart(distanceTrack.currentDistance, distance, id);
  }

  async getStatusStopCar(id: number) {
    api.getStartStopEngine((this.currentData)[id - 1].id, 'stopped');
    this.carControl.carEnd(id);
  }

  async getPages() {
    const dataPage = await api.getCountPages(pagination);
    dataPages.count = dataPage.count;
    dataPages.items = dataPage.items;
    return dataPages;
  }

  async getStatusStartAllCars() {
    const distance = dataPages.items.map((element, index) => {
      return api.getStartStopEngine((dataPages.items)[index].id, 'started');
    })

    dataPages.items.map((element, index) => {
      return api.getSwitchEngine((dataPages.items)[index].id, 'drive');
    })

    distanceTrack.currentDistance = this.getCurrentDistance();
    const dataParam = await Promise.all(distance);
    this.carControl.carsStart(distanceTrack.currentDistance, dataParam);
  }

  async getStatusStopAllCars() {
    dataPages.items.map((element, index) => {
      return api.getStartStopEngine((dataPages.items)[index].id, 'stopped');
    })

    this.carControl.carsEnd();
  }

  getCurrentDistance() {
    const track = document.querySelector('.track');
    return track.clientWidth - 110;
  }

  getIdRemoveCar(event: Event) {
    const target = (event.target as HTMLElement).closest('.title-car-btn') as HTMLElement;
    const remove = target?.dataset.remove;

    if (remove) {
      this.removeCar(+remove);
    }
  }

  async removeCar(id: number) {
    await api.removeCar(id);
    const car = document.getElementById(`car-conteiner-${id}`);
    const nextPage = document.getElementById('next-page') as HTMLButtonElement;
    car.remove();
    this.currentData = await api.getEmloyees();
    await this.getPages();
    this.checkToPageCount(nextPage);
    htmlElements.countCarsToGarage.textContent = `Garage (${dataPages.count})`;
  }

  async getNewCar() {
    this.createCars.createCar();
    const data: IDataCar = await api.createNewCar(newCar);
    const carConteiner = document.querySelectorAll('.car-conteiner');
    const nextPage = document.getElementById('next-page') as HTMLButtonElement;

    if (carConteiner.length < pagination.limit) {
      this.drawCarContainer([data]);
    }

    this.currentData = await api.getEmloyees();
    await this.getPages();
    this.checkToPageCount(nextPage);
    htmlElements.countCarsToGarage.textContent = `Garage (${dataPages.count})`;
    console.log(this.currentData);
    console.log(await this.getPages());
  }

  async getNewCars() {
    this.createCars.getPropertiesOfCars();
    const arrCars: number[] = new Array(100);
    const carConteiner = document.querySelectorAll('.car-conteiner');
    const nextPage = document.getElementById('next-page') as HTMLButtonElement;
    const dataArrCars: Promise<IDataCar>[] = arrCars.fill(0, 0, arrCars.length).map((value, index) => {
      return api.createNewCar({ name: arrPropertiesOfCars.name[index], color: arrPropertiesOfCars.color[index] });
    })

    const countCarsInPage = pagination.limit - carConteiner.length;
    const data = await Promise.all(dataArrCars);

    if (carConteiner.length < pagination.limit) {
      this.drawCarContainer(data.slice(0, countCarsInPage));
    }

    this.currentData = await api.getEmloyees();
    await this.getPages();
    this.checkToPageCount(nextPage);
    htmlElements.countCarsToGarage.textContent = `Garage (${dataPages.count})`;
  }

  async drawCarContainer(data = this.currentData) {
    const garageCarsConteiner = document.getElementById('garage-car');

    for (let i = 0; i < data.length; i++) {
      this.getPatternCar(data, i, garageCarsConteiner);
    }
    this.currentData = await api.getEmloyees();
  }

  async getUpdateCarProperty() {
    this.createCars.updateCarProperty();
    const data: ICarId = await api.updateCarProperty({ name: carId.name, color: carId.color }, carId.id);
    this.addCarProperty(data.id, data.name, data.color);
    this.currentData = await api.getEmloyees();
  }

  addCarProperty(id: number, name: string, color: string) {
    const carName = document.getElementById(`car-name-${id}`);
    const car = document.getElementById(`car-${id}`);
    carName.textContent = `${name}`;
    car.style.fill = `${color}`;
  }

  getCurrentCarId(event: Event) {
    const target = (event.target as HTMLElement).closest('.title-car-btn') as HTMLElement;
    const select = target?.dataset.select;

    if (select) {
      this.changesCarProperty(+select);
    }
  }

  changesCarProperty(select: number) {
    carId.id = select;
    const updateName = document.getElementById('update-name');
    updateName.focus();
  }

  getPatternCar(data: IDataCar[], index: number, className: HTMLElement) {
    const carConteiner = document.createElement('div');
    carConteiner.classList.add('car-conteiner');
    carConteiner.setAttribute('id', `car-conteiner-${data[index].id}`);
    carConteiner.innerHTML = `
      <div class="car-container-title">
        <button class="title-car-btn" data-select="${data[index].id}">Select</button>
        <button class="title-car-btn" data-remove="${data[index].id}">Remove</button>
        <h3 class="title-car-name" id="car-name-${data[index].id}">${data[index].name}</h3>
      </div>
      <div class="car-container-subtitle">
        <button class="subtitle-car-btn" data-start="${data[index].id}">A</button>
        <button class="subtitle-car-btn" data-stop="${data[index].id}">B</button>
        <div class="track">
          <svg display="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <symbol id="car${index}" viewBox="0 0 100 42.591">
              <path d="M19.525,24.44c-5,0-9.069,4.075-9.069,9.089c0,4.986,4.069,9.062,9.069,9.062c5.013,0,9.088-4.076,9.088-9.062  C28.613,28.515,24.538,24.44,19.525,24.44z M19.525,38.412c-2.676,0-4.876-2.201-4.876-4.883c0-2.695,2.201-4.896,4.876-4.896  c2.695,0,4.889,2.201,4.889,4.896C24.414,36.21,22.22,38.412,19.525,38.412z"></path>
              <path d="M80.632,24.44c-5.007,0-9.076,4.075-9.076,9.089c0,4.986,4.069,9.062,9.076,9.062c5.006,0,9.068-4.076,9.068-9.062  C89.7,28.515,85.638,24.44,80.632,24.44z M80.632,38.412c-2.695,0-4.89-2.201-4.89-4.883c0-2.695,2.194-4.896,4.89-4.896  s4.889,2.201,4.889,4.896C85.521,36.21,83.327,38.412,80.632,38.412z"></path>
              <path d="M98.249,26.732c0-8.815-5.495-9.87-5.495-9.87c-8.079-1.133-21.999-1.719-21.999-1.719C69.479,12.93,63.581,0,60.149,0  c-1.158,0-25.781,0-30.143,0c-4.368,0-11.523,12.604-13.092,15.456c0,0-5.482,0.938-8.066,1.537c-1.432,0.325-5.41,0.403-5.41,11.51  H0v5.026h8.366c0-6.172,5.007-11.172,11.159-11.172c6.178,0,11.172,5,11.172,11.172H69.46c0-6.172,4.986-11.172,11.172-11.172  c6.165,0,11.165,5,11.165,11.172H100v-6.797H98.249z M44.746,14.284H27.344c2.35-7.331,6.712-12.565,8.555-12.565  c2.311,0,8.848,0,8.848,0V14.284z M47.988,14.284V1.719c0,0,8.978,0,11.289,0c2.324,0,7.422,10.638,8.854,13.359L47.988,14.284z"></path>
            </symbol>
          </svg>
          <svg class="car" data-id="${data[index].id}" id="car-${data[index].id}">
            <use xlink:href="#car${index}"></use>
          <svg/>
          <div class="flag"></div>
        </div>
      </div>
    `

    className.append(carConteiner);
    document.getElementById(`car-${data[index].id}`).style.fill = `${data[index].color}`;
  }
}