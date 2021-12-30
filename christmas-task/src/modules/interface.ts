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
  posx: number;
  posy: number;
  sink: number;
  size: number;
}

export interface IRange {
  noUiSlider: typeof noUiSlider;
}