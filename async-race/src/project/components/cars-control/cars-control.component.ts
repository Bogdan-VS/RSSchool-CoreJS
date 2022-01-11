import { IDistanceParam, ISuccses } from "../../description/interface";
import { api } from "../garage/garage.component";

export class CarControl {

  carStart(endPosition: number, duration: number) {
    const car = document.getElementById('cars0');
    let startPosition = car.clientLeft;
    const countDuration = +duration / 1000 * 60;
    const currentOffset = (endPosition - startPosition) / countDuration;

    const tickAnimation = () => {
      startPosition += currentOffset;
      car.style.transform = `translateX(${startPosition}px)`;

      if (startPosition < endPosition) {
        requestAnimationFrame(tickAnimation);
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
        const error = this.getError(api.error);
        startPosition += currentOffset;
        
        if (error) {
          endPosition = startPosition;
        }

        (element as HTMLElement).style.transform = `translateX(${startPosition}px)`;

        if (startPosition < endPosition) {
          window.requestAnimationFrame(tickAnimation);
        }
      }
      
      tickAnimation();
    });
  }

  getError(error: number) {
    if (error === 500) {
      return error;
    } 
  }
}