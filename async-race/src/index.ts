import './style/style.scss';
import { Api } from './project/api/api';
import { Garage } from './project/components/garage/garage.component';
import { BasicHtml } from './project/components/basic-html.component';

const basicHtml = new BasicHtml;
const api = new Api();

api.getEmloyees();
basicHtml.generateHeader();
basicHtml.generateMain();

new Garage('garage');


