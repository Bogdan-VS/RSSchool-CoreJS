import { IDataParametrs, ISnowProperties, ISnowSettings } from "./interface"

export const dataParametrs: IDataParametrs = {
  activeData: null,
  currentData: []
}

export const snowSettings: ISnowSettings = {
  snowMax: 40,
  snowColor: new Array('#b9dff5', '#7fc7ff', '#7fb1ff', '#7fc7ff', '#b9dff5'),
  snowType: new Array('Times'),
  snowLetter: '&#10052;',
  sinkSpeed: 0.4,
  snowMaxSize: 20,
  snowMinSize: 5,
  snow: new Array()
}

export const snowProperties: ISnowProperties = {
  marginBottom: null,
  marginRight: null,
  timer: null,
  xMv: new Array(),
  crds: new Array(),
  leftRight: new Array(),
  snowFlag: false,
  init: true
}