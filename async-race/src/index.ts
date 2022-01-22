import './style/style.scss';
import { Api } from './project/api/api';
import { Garage } from './project/components/garage.component';
import { BasicHtml } from './project/components/basic-html.component';
import { Winners } from './project/components/winners.component';

const basicHtml = new BasicHtml;
const api = new Api();

api.getEmloyees();
basicHtml.generateHeader();
basicHtml.generateMain();

export const garage = new Garage('garage');
export const winner = new Winners('winners');


