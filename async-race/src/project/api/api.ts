import { Path } from "../description/enum";
import { IDataCar, IDistanceParam, IStarts, ISuccses } from "../description/interface";

export class Api {
  baseLink: string;
  error: number[];
  constructor() {
    this.baseLink = 'http://127.0.0.1:3000';
    this.error = [];
  }

  getEmloyees = async () => {
    const responce = await fetch(`${this.baseLink}${Path.garage}`);
    const data: IDataCar[] = await responce.json();
    console.log(data);
    return data;
  }

  getStartStopEngine = async (id: number, status: string) => {
    const responce = await fetch(`${this.baseLink}${Path.start}?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    const data: IDistanceParam = await responce.json();
    return data;
  }

  getSwitchEngine = async (id: number, status: string) => {
    const responce = await fetch(`${this.baseLink}${Path.start}?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    try {
      const data: ISuccses = await responce.json();
      return data;
    } catch (error) {
      if (responce.status === 500) {
        this.error.push(id);
          // [...this.error, responce.status, id];
      }
    }
    // const data: IDistanceParam = await responce.json();
    // return data;
  }


}