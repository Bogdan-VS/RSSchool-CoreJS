import { Path } from "../description/enum";
import { IDataCar } from "../description/interface";

export class Api {
  baseLink: string;
  constructor() {
    this.baseLink = 'http://127.0.0.1:3000';
  }

  getEmloyees = async () => {
    const responce = await fetch(`${this.baseLink}${Path.garage}`);
    const data: IDataCar[] = await responce.json();
    return data;
  }
}