import noUiSlider from 'noUiSlider';

export interface Data {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: string;
  like: string;
}

export interface ISnow {
  posx?: number;
  posy?: number;
  sink?: number;
  size?: number;
}

export interface IRange {
  noUiSlider: typeof noUiSlider;
}

export interface IDataParametrs {
  activeData?: Data[];
  currentData?: Data[];
}

export interface ISnowSettings {
  snowMax: number;
  snowType: string[];
  snowColor: string[];
  snowLetter: string;
  sinkSpeed: number;
  snowMaxSize: number;
  snowMinSize: number;
  snow: Array<HTMLElement & ISnow>
}

export interface ISnowProperties {
  marginBottom: number;
  marginRight: number;
  timer: ReturnType<typeof setTimeout>;
  xMv: number[];
  crds: number[];
  leftRight: number[];
  snowFlag: boolean;
  init: boolean
}