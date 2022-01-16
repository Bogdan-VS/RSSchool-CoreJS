import { carModels, newCar } from "../../description/const";
import { carId, arrPropertiesOfCars } from "../../description/const";

export class CreateCars {

  createCar() {
    const carName = document.getElementById('create-name') as HTMLInputElement;
    const carColor = document.getElementById('create-color') as HTMLInputElement;
    newCar.name = carName.value;
    newCar.color = carColor.value;
    return newCar;
  }

  updateCarProperty() {
    const updateName = document.getElementById('update-name') as HTMLInputElement;
    const updateColor = document.getElementById('update-color') as HTMLInputElement;
    carId.color = updateColor.value;
    carId.name = updateName.value;
  }

  getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createRandomCarsNames() {
    const carsName = new Array(100);
    return carsName.fill(0, 0, carsName.length).map(() => {
      const firstNumber = this.getRandomIntInclusive(0, 9);
      const secondNumber = this.getRandomIntInclusive(0, 9);
      return carModels.firstName[firstNumber] + ' ' + carModels.secondName[secondNumber];
    })
  }

  createRandomColors() {
    const carsColors = new Array(100);
    return carsColors.fill(0, 0, carsColors.length).map(() => {
      const color = Math.floor(Math.random() * 16777216).toString(16);
      return '#000000'.slice(0, -color.length) + color;
    })
  }

  getPropertiesOfCars() {
    arrPropertiesOfCars.name = this.createRandomCarsNames();
    arrPropertiesOfCars.color = this.createRandomColors();
  }
}