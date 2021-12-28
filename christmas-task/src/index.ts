import './styles/style.scss';
import { StartGame } from './components/start-game.component';
import { Toys } from './components/toys.component';
import { FavoriteToys } from './components/favorite-toys.component';
import { ChristmasTree } from './components/christmas-tree.component';
import './components/snow-component.ts';
import { Audio } from './components/audio.component';


new StartGame('start');
export const toys: Toys = new Toys('toys');
const christmasTree = new ChristmasTree('christmas-tree');
export const favorite = new FavoriteToys('collection');
const audio = new Audio();









