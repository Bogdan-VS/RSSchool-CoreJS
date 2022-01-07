import './style/style.scss';
import { Api } from './project/api/api';
import { Garage } from './project/components/garage/garage.component';

const api = new Api();
new Garage('garage');
api.getEmloyees();

