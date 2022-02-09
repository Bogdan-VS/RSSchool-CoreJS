import { IDistanceParam } from "../description/interface";
import { api } from "./garage.component";
import {
  scoreParams,
  stopAnimation,
  winnerParam,
} from "../description/const";
import { winner } from "../..";

export class CarControl {
  winnerCar: HTMLElement;
  constructor() {
    this.winnerCar = document.getElementById('winner-car');
  }

  carStart(endPosition: number, veloDistance: IDistanceParam, id: number) {
    const car = document.getElementById(`car-${id}`);
    let startPosition = car.clientLeft;
    const duration = veloDistance.distance / veloDistance.velocity;
    const countDuration = +duration / 1000 * 60;
    const currentOffset = (endPosition - startPosition) / countDuration;

    const tickAnimation = () => {
      startPosition += currentOffset;
      const isCarWithError = api.error.includes(Number(car.dataset.id));
      car.style.transform = `translateX(${startPosition}px)`;

      if (stopAnimation.stopCar) {
        window.cancelAnimationFrame(requestAnimationFrame(tickAnimation));
        const car = document.getElementById(`car-${id}`);
        car.style.transform = 'translateX(0)';
      }

      if (isCarWithError || startPosition >= endPosition || stopAnimation.stopCar) {
        window.cancelAnimationFrame(requestAnimationFrame(tickAnimation));
      } else {
        window.requestAnimationFrame(tickAnimation);
      }
    }

    tickAnimation();
  }

  carsStart(endPosition: number, veloDistance: IDistanceParam[]) {
    const cars: NodeListOf<HTMLElement> = document.querySelectorAll('.car');
    let winner = true;
    cars.forEach((element, index) => {
      let startPosition = element.clientLeft;
      const duration = veloDistance[index].distance / veloDistance[index].velocity;
      const countDuration = +duration / 1000 * 60;
      const currentOffset = (endPosition - startPosition) / countDuration;

      const tickAnimation = () => {
        startPosition += currentOffset;
        const isCarWithError = api.error.includes(Number(element.dataset.id));
        element.style.transform = `translateX(${startPosition}px)`;

        if (stopAnimation.stopAllCars) {
          window.cancelAnimationFrame(requestAnimationFrame(tickAnimation));
          const cars: NodeListOf<HTMLTemplateElement> = document.querySelectorAll('.car');
          cars.forEach(element => {
            element.style.transform = 'translateX(0)';
          });
        }

        if (isCarWithError || startPosition >= endPosition || stopAnimation.stopAllCars) {
          window.cancelAnimationFrame(requestAnimationFrame(tickAnimation));
        } else {
          window.requestAnimationFrame(tickAnimation);
          if (startPosition > (endPosition - 120) && winner) {
            winner = false;
            this.showWinnerCar(element.dataset.id, (duration / 1000).toFixed(2));
          }  
        }
      }
      
      tickAnimation();
    });
  }

  showWinnerCar(id: string, time: string) {
    const winnerName = document.getElementById(`car-name-${id}`);
    this.winnerCar.textContent = `${winnerName.textContent} winner. Time ${time} seconds`;
    this.winnerCar.classList.add('winner_active');
    winnerParam.id = +id;
    winnerParam.time = +time;
    winner.hendlingRequire(winnerParam.id, scoreParams);
  }

  carEnd(id: number) {
    stopAnimation.stopCar = true;
    const car = document.getElementById(`car-${id}`);
    car.style.transform = 'translateX(0)';
    api.error = [];
  }

  carsEnd() {
    const cars: NodeListOf<HTMLTemplateElement> = document.querySelectorAll('.car');
    stopAnimation.stopAllCars = true;
    api.error = [];

    cars.forEach(element => {
      element.style.transform = 'translateX(0)';
    });
  }
}
