import { IArrPropertiesOfCars, IBasicLayout, ICarId, IConrtols, IDataPages, IDistanceTrack, INewCar, IPagination, IStopAnimation } from "./interface"


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
}