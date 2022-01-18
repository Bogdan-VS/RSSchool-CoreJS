import { Path } from "../description/enum";
import { IDataCar, IDistanceParam, INewCar, IPagination, ISuccses, IWinner } from "../description/interface";

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
      }
    }
  }

  updateCarProperty = async (params: INewCar, id: number) => {
    const responce = await fetch(`${this.baseLink}${Path.garage}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    const carProperties = await responce.json();
    return carProperties;
  }

  removeCar = async (id: number) => {
    const responce = await fetch(`${this.baseLink}${Path.garage}/${id}`, {
      method: 'DELETE',
    })
    const carProperties = await responce.json();
    return carProperties;
  }

  getCountPages = async (pageParam: IPagination) => {
    const responce = await fetch(`${this.baseLink}${Path.garage}/?_page=${pageParam.page}&_limit=${pageParam.limit}`);
    const items = await responce.json();
    const count = Number(responce.headers.get('X-Total-Count'));
    return {items, count}
  }

  createNewCar = async (carParametrs: INewCar) => {
    const responce = await fetch(`${this.baseLink}${Path.garage}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(carParametrs)
    })
    const carProperties: IDataCar = await responce.json();
    return carProperties;
  }

  getWinner = async (id: number) => {
    const responce = await fetch(`${this.baseLink}${Path.winner}/${id}`);
    const winner: IWinner = await responce.json();
    console.log(winner);
    return winner;
  }

  // getWinners = async ()
}