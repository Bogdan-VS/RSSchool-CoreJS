import './styles/style.scss';
import { StartGame } from './components/start-game.component';
import { Toys } from './components/toys.component';
import { FavoriteToys } from './components/favorite-toys.component';

new StartGame('start');

const toys = new Toys('toys');

const favoriteToys = new FavoriteToys('collection');







