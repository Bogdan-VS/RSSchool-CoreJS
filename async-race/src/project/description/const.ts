import { BaseLink, Path } from "./enum"
import {
  IArrPropertiesOfCars,
  IBasicLayout,
  ICarId,
  IConrtols,
  ICountWinnerToPage,
  IDataPages,
  IDistanceTrack,
  INewCar,
  IPagination,
  IScoreParams,
  IScoreSortState,
  ISortParams,
  IStopAnimation,
  IWinner,
  IWinnerId
} from "./interface"


export const controls: IConrtols = {
  start: null,
  switch: null
}

export const distanceTrack: IDistanceTrack = {
  currentDistance: null
}

export const newCar: INewCar = {
  name: null,
  color: null
}

export const carId: ICarId = {
  id: null,
  name: null,
  color: null
}

export const pagination: IPagination = {
  page: 1,
  limit: 7
}

export const dataPages: IDataPages = {
  count: null,
  items: null
}

export const carModels = {
  firstName: ['Audi', 'BMW', 'Bugatti', 'Cadillac', 'Chevrolet', 'Citroen', 'Dodge', 'Ferrari', 'Ford', 'Honda'],
  secondName: ['Q8', 'X6', 'Chiron', 'Fleetwood', 'Montana', 'DS3', 'Challenger', 'Testarossa', 'Mondeo', 'Accord']
}

export const arrPropertiesOfCars: IArrPropertiesOfCars = {
  name: null,
  color: null
}

export const stopAnimation: IStopAnimation = {
  stopAllCars: false,
  stopCar: false
}

export const basicLayout: IBasicLayout = {
  body: document.querySelector('body'),
  header: document.createElement('header'),
  main: document.createElement('main'),
  arrow: document.createElement('span'),
}

export const winnerId: IWinnerId = {
  id: null
}

export const winnerParam: IWinner = {
  id: 1,
  wins: 1,
  time: 10,
} 

export const scoreSortState: IScoreSortState = {
sortState: 'number-conteiner',
}

export const scoreParams: IScoreParams = {
  sort: 'id',
  order: 'ASC',
  page: 1,
  countToPage: 10,
}

export const sortParams: ISortParams = {
  asc: 'ASC',
  desc: 'DESC',
  sortId: 'id',
  sortWins: 'wins',
  sortTime: 'time',
}

export const countWinnerToPage: ICountWinnerToPage = {
  count: 1,
}

export const path = {
  garage: `${BaseLink.link}${Path.garage}`,
  winners: `${BaseLink.link}${Path.winner}`,
  start: `${BaseLink.link}${Path.start}`,
} 