export interface IDataCar {
  name: string;
  id: number;
  color: string;
}

export interface IStarts {
  status: string;
}

export interface IConrtols {
  start?: IDistanceParam;
  switch?: ISuccses;
}

export interface IDistanceParam {
  distance: number;
  velocity: number;
}

export interface ISuccses {
  success?: boolean,
  status?: number
}

export interface IDistanceTrack {
  currentDistance: number;
}

export interface INewCar {
  name: string;
  color: string
}

export interface ICarId {
  id: number,
  name: string;
  color: string
}

export interface IPagination {
  page: number;
  limit: number;
}

export interface IDataPages {
  count: number;
  items: IDataCar[];
}

export interface IArrPropertiesOfCars {
  name: string[];
  color: string[];
}

export interface IWinner {
  id?: number;
  wins: number;
  time: number;
}

export interface IStopAnimation {
  stopAllCars: boolean;
  stopCar: boolean;
}

export interface IBasicLayout {
  body: HTMLBodyElement;
  header: HTMLElement;
  main: HTMLElement;
  arrow: HTMLSpanElement;
}

export interface IWinnerId {
  id: number;
}

export interface IScoreSortState {
  sortState: string;
}

export interface IScoreParams {
  sort: string;
  order: string;
  page: number;
  countToPage: number;
}

export interface ICountWinnerToPage {
  count: number;
}
