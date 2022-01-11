export interface IDataCar {
  name: string;
  id: number;
  color: string;
}

export interface IStarts {
  status: string;
}

export interface IConrtols {
  start: IDistanceParam;
  switch: ISuccses;
}

export interface IDistanceParam {
  distance: number;
  velocity: number;
}

export interface ISuccses {
  success?: boolean,
  status?: number
}
