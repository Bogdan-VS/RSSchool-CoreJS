import { scoreParams, path } from "../description/const";
import {
  ICarId,
  IDataCar,
  IDistanceParam,
  INewCar,
  IPagination,
  ISuccses,
  IWinner,
} from "../description/interface";

export class Api {
  error: number[];

  constructor() {
    this.error = [];
  }

  getEmloyees = async () => {
    const responce = await fetch(`${path.garage}`);
    const data: IDataCar[] = await responce.json();

    return data;
  }

  getEmployee = async (id: number) => {
    const responce = await fetch(`${path.garage}/${id}`);
    const data: IDataCar = await responce.json();

    return data;
  }

  getStartStopEngine = async (id: number, status: string) => {
    const responce = await fetch(`${path.start}?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    const data: IDistanceParam = await responce.json();

    return data;
  }

  getSwitchEngine = async (id: number, status: string) => {
    const responce = await fetch(`${path.start}?id=${id}&status=${status}`, {
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
    const responce = await fetch(`${path.garage}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    const carProperties: ICarId = await responce.json();

    return carProperties;
  }

  removeCar = async (id: number) => {
    const responce = await fetch(`${path.garage}/${id}`, {
      method: 'DELETE',
    })
    const carProperties: {} = await responce.json();

    return carProperties;
  }

  getCountPages = async (pageParam: IPagination) => {
    const responce = await fetch(`${path.garage}/?_page=${pageParam.page}&_limit=${pageParam.limit}`);
    const items: ICarId[] = await responce.json();
    const count = Number(responce.headers.get('X-Total-Count'));

    return {items, count}
  }

  createNewCar = async (carParametrs: INewCar) => {
    const responce = await fetch(`${path.garage}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(carParametrs),
    })
    const carProperties: IDataCar = await responce.json();

    return carProperties;
  }

  getWinner = async (id: number) => {
    const responce = await fetch(`${path.winners}/${id}`);
    const winner: IWinner = await responce.json();

    return winner;
  }

  getWinners = async (
    page: number,
    limit: number = scoreParams.countToPage,
    sort: string,
    order: string
  ) => {
    const responce = await fetch(`${path.winners}/?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
    const winner: IWinner[] = await responce.json();
    const count = Number(responce.headers.get('X-Total-Count'));

    return { winner, count };
  }

  createWinner = async (winnerParam: IWinner) => {
    const responce = await fetch(`${path.winners}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(winnerParam),
    });
    const winnerData: IWinner = await responce.json();

    return winnerData;
  }

  updateWinners = async (updateCar: IWinner, id: number) => {
    const responce = await fetch(`${path.winners}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateCar),
    });
    const updateDataCar: IWinner = await responce.json();

    return updateDataCar;
  }

  deleteWinner = async (id: number) => {
    const responce = await fetch(`${path.winners}/${id}`, {
      method: 'DELETE',
    });
    const deleteCar: {} = await responce.json();

    return deleteCar;
  }
}
