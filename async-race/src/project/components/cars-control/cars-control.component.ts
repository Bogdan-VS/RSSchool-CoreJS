import { IDistanceParam, ISuccses } from "../../description/interface";
import { api } from "../garage/garage.component";

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
      console.log(car.dataset.id);
      console.log(api.error);
      car.style.transform = `translateX(${startPosition}px)`;

      if (isCarWithError || startPosition >= endPosition) {
        console.log(isCarWithError);
        window.cancelAnimationFrame(requestAnimationFrame(tickAnimation));
      } else {
        window.requestAnimationFrame(tickAnimation);
      }
    }

    tickAnimation();
  }

  carsStart(endPosition: number, veloDistance: IDistanceParam[]) {
    const cars = document.querySelectorAll('.car');
    cars.forEach((element, index) => {
      let startPosition = element.clientLeft;
      const duration = veloDistance[index].distance / veloDistance[index].velocity;
      const countDuration = +duration / 1000 * 60;
      const currentOffset = (endPosition - startPosition) / countDuration;

      const tickAnimation = () => {
        startPosition += currentOffset;
        const isCarWithError = api.error.includes(Number((element as any).dataset.id));
        (element as HTMLElement).style.transform = `translateX(${startPosition}px)`;

        if (isCarWithError || startPosition >= endPosition) {
          window.cancelAnimationFrame(requestAnimationFrame(tickAnimation));
        } else {
          window.requestAnimationFrame(tickAnimation);
        }
      }
      
      tickAnimation();
    });
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