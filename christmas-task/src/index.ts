import './styles/style.scss';
import { StartGame } from './components/start-game.component';
import { Toys } from './components/toys.component';
import { FavoriteToys } from './components/favorite-toys.component';
import { ChristmasTree } from './components/christmas-tree.component';

new StartGame('start');
new FavoriteToys('collection');
export const toys = new Toys('toys');
const christmasTree = new ChristmasTree('christmas-tree');



