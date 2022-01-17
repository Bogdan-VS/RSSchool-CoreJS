import { IDistanceParam } from "../../description/interface";
import { api } from "../garage/garage.component";
import { htmlElements } from "../../description/const";

export class CarControl {

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

      if (isCarWithError || startPosition >= endPosition) {
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

        if (isCarWithError || startPosition >= endPosition) {
          window.cancelAnimationFrame(requestAnimationFrame(tickAnimation));
        } else {
          window.requestAnimationFrame(tickAnimation);
          console.log(endPosition);
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
    htmlElements.winnerCar.textContent = `${winnerName.textContent} winner. Time ${time} seconds`;
    htmlElements.winnerCar.classList.add('winner_active');
  }

  carEnd(id: number) {
    const car = document.getElementById(`car-${id}`);
    car.style.transform = 'translateX(0)';
    api.error = [];
  }

  carsEnd() {
    const cars: NodeListOf<HTMLTemplateElement> = document.querySelectorAll('.car');
    api.error = [];
    cars.forEach(element => {
      element.style.transform = 'translateX(0)';
    });
  }

  getError(error: number) {
    if (error === 500) {
      return error;
    } 
  }
}