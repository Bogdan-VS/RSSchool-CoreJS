import { App } from "../app/app";
import { api } from "./garage.component";
import {
  basicLayout,
  countWinnerToPage,
  scoreParams,
  scoreSortState,
  winnerParam,
} from "../description/const";
import {
  IScoreParams,
  IWinner
} from "../description/interface";
import { garage } from "../..";

export class Winners extends App{
  scoreConteiner: HTMLDivElement;
  nextPage: HTMLButtonElement;
  prevPage: HTMLButtonElement;
  winnerPage: HTMLElement;
  countWinnersCars: HTMLElement;
  constructor(id: string) {
    super(id);
    this.scoreConteiner = document.getElementById('score-conteiner') as HTMLDivElement;
    this.nextPage = document.getElementById('next-page-win') as HTMLButtonElement;
    this.prevPage = document.getElementById('prev-page-win') as HTMLButtonElement;
    this.winnerPage = document.getElementById('winner-page');
    this.countWinnersCars = document.getElementById('count-winners-cars');
  }

  init(): void {
    const carId = document.getElementById('car-id');
    const win = document.getElementById('win');
    const time = document.getElementById('best-time');
    const winnersPageBtn = document.getElementById('winners-page-btn');
    const garagePageBtn = document.getElementById('garage-page-btn');
    const nextPage = document.getElementById('next-page-win') as HTMLButtonElement;
    const prevPage = document.getElementById('prev-page-win') as HTMLButtonElement;

    carId.addEventListener('click', this.sortById.bind(this));
    win.addEventListener('click', this.sortByWin.bind(this));
    time.addEventListener('click', this.sortByTime.bind(this));
    winnersPageBtn.addEventListener('click', this.openWinners.bind(this));
    garagePageBtn.addEventListener('click', this.openGarage.bind(this));
    nextPage.addEventListener('click', this.addNextPage.bind(this));
    prevPage.addEventListener('click', this.addPrevPage.bind(this));

    this.getWinner();
    this.addDefaultSort();
  }
  async getWinner(id: number = 1) {
    const winner = await api.getWinner(id);

    return winner;
  }

  clearWinnerScore() {
    const winConteiner = document.querySelectorAll('.winner-container');

    winConteiner.forEach(element => {
      element.remove();
    });
  }

  async hendlingRequire(id: number, scoreParam: IScoreParams) {
    const winner: IWinner = await this.getWinner(winnerParam.id);
    
    if (winner.id) {
      await this.getUpdateWinner(winner.wins + 1, winnerParam.time, winner.id);
    } else {
      api.createWinner(winnerParam);
      this.getWinner(winnerParam.id);
    }

    const winnersCars = await this.getWinners(scoreParam.sort, scoreParam.order);

    this.clearWinnerScore();
    this.getWinnerConteiner(winnersCars.winner);
  }

  async getCurrentWinners(scoreParam: IScoreParams) {
    const winnersCars = await this.getWinners(scoreParam.sort, scoreParam.order);

    this.clearWinnerScore();
    this.getWinnerConteiner(winnersCars.winner);
  }

  async getWinners(sort: string, order: string) {
    const winners = await api.getWinners(scoreParams.page, scoreParams.countToPage, sort, order);
    countWinnerToPage.count = winners.winner.length;
    this.countWinnersCars.textContent = `Winners (${winners.count})`;
    this.openNextPage(winners.count);

    return winners;
  }

  openNextPage(countWin: number) {
    if (countWin > 10) {
      garage.removeDisabled(this.nextPage);
    }

    if (countWinnerToPage.count < 10) {
      garage.addDisabled(this.nextPage);
    }
  }

  openPrevPage() {
    if (scoreParams.page === 1) {
      garage.addDisabled(this.prevPage);
    } else {
      garage.removeDisabled(this.prevPage);
    }
  }

  async getUpdateWinner(winsCar: number, timeCar: number, id: number) {
    const updateWinner = await api.updateWinners({ wins: winsCar, time: timeCar }, id);

    return updateWinner;
  }

  async getWinnerConteiner(winParam: IWinner[]) {
    for (let i = 0; i < winParam.length; i++) {
      const winnerCar = await api.getEmployee(winParam[i].id);
      const winnerConteiner = document.createElement('div')

      winnerConteiner.classList.add('winner-container');
      winnerConteiner.setAttribute('id', `conteiner-${winnerCar.id}`);
      winnerConteiner.innerHTML = `
        <p class="conteiner-content">${winParam[i].id}</p>
        <svg display="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
          <symbol id="win-car-${winParam[i].id}" viewBox="0 0 100 42.591">
            <path d="M19.525,24.44c-5,0-9.069,4.075-9.069,9.089c0,4.986,4.069,9.062,9.069,9.062c5.013,0,9.088-4.076,9.088-9.062  C28.613,28.515,24.538,24.44,19.525,24.44z M19.525,38.412c-2.676,0-4.876-2.201-4.876-4.883c0-2.695,2.201-4.896,4.876-4.896  c2.695,0,4.889,2.201,4.889,4.896C24.414,36.21,22.22,38.412,19.525,38.412z"></path>
            <path d="M80.632,24.44c-5.007,0-9.076,4.075-9.076,9.089c0,4.986,4.069,9.062,9.076,9.062c5.006,0,9.068-4.076,9.068-9.062  C89.7,28.515,85.638,24.44,80.632,24.44z M80.632,38.412c-2.695,0-4.89-2.201-4.89-4.883c0-2.695,2.194-4.896,4.89-4.896  s4.889,2.201,4.889,4.896C85.521,36.21,83.327,38.412,80.632,38.412z"></path>
            <path d="M98.249,26.732c0-8.815-5.495-9.87-5.495-9.87c-8.079-1.133-21.999-1.719-21.999-1.719C69.479,12.93,63.581,0,60.149,0  c-1.158,0-25.781,0-30.143,0c-4.368,0-11.523,12.604-13.092,15.456c0,0-5.482,0.938-8.066,1.537c-1.432,0.325-5.41,0.403-5.41,11.51  H0v5.026h8.366c0-6.172,5.007-11.172,11.159-11.172c6.178,0,11.172,5,11.172,11.172H69.46c0-6.172,4.986-11.172,11.172-11.172  c6.165,0,11.165,5,11.165,11.172H100v-6.797H98.249z M44.746,14.284H27.344c2.35-7.331,6.712-12.565,8.555-12.565  c2.311,0,8.848,0,8.848,0V14.284z M47.988,14.284V1.719c0,0,8.978,0,11.289,0c2.324,0,7.422,10.638,8.854,13.359L47.988,14.284z"></path>
          </symbol>
        </svg>
        <svg class="win-car" id="winner-car-${winParam[i].id}">
          <use xlink:href="#win-car-${winParam[i].id}"></use>
        <svg/>
        <p class="conteiner-content">${winnerCar.name}</p>
        <p class="conteiner-content" id="count-wins-${winParam[i].id}">${winParam[i].wins}</p>
        <p class="conteiner-content" id="best-time-${winParam[i].id}">${winParam[i].time}</p>
      `
  
      this.scoreConteiner.append(winnerConteiner);
      document.getElementById(`winner-car-${winnerCar.id}`).style.fill = `${winnerCar.color}`;
    }
  }

  addArrow() {
    basicLayout.arrow.classList.add('arrow');
    basicLayout.arrow.setAttribute('id', 'arrow');
    basicLayout.arrow.textContent = '⇑';
  }

  addDefaultSort() {
    const numberConteiner = document.getElementById('number-conteiner');

    this.addArrow();
    numberConteiner.append(basicLayout.arrow);
    this.addDrawSort('id');
  }

  sortById() {
    this.addActiveSort('number-conteiner');
    this.addDrawSort('id');
  }

  sortByWin() {
    this.addActiveSort('win-conteiner');
    this.addDrawSort('wins');
  }

  sortByTime() {
    this.addActiveSort('time-conteiner');
    this.addDrawSort('time');
  }

  async addDrawSort(item: string) {
    scoreParams.sort = item;
    const winnersCars = await this.getWinners(scoreParams.sort, scoreParams.order);
    this.clearWinnerScore();
    this.getWinnerConteiner(winnersCars.winner);
  }

  addActiveSort(id: string) {
    basicLayout.arrow.remove();
    const stateConteiner = document.getElementById(`${id}`);
    this.addArrow();
    stateConteiner.append(basicLayout.arrow);
    this.addActiveStateToSort(stateConteiner);
    scoreSortState.sortState = stateConteiner.getAttribute('id');
  }

  addActiveStateToSort(className: HTMLElement) {
    if (basicLayout.arrow.classList.contains('arrow-down') ||
      className.getAttribute('id') !== scoreSortState.sortState) {
      basicLayout.arrow.classList.remove('arrow-down');
      scoreParams.order = 'ASC';
    } else {
      basicLayout.arrow.classList.add('arrow-down');
      scoreParams.order = 'DESC';
    }
  }

  async addNextPage() {
    scoreParams.page++;
    const winnersCars = await this.getWinners(scoreParams.sort, scoreParams.order);
    this.getPage(winnersCars.winner);
    this.openNextPage(winnersCars.count);
  }

  async addPrevPage() {
    scoreParams.page--;
    const winnersCars = await this.getWinners(scoreParams.sort, scoreParams.order);
    this.getPage(winnersCars.winner);
  }

  async getPage(winner: IWinner[]) {
    this.winnerPage.textContent = `Page #${scoreParams.page}`;
    this.clearWinnerScore();
    this.getWinnerConteiner(winner);
    this.openPrevPage();
  }

  openWinners() {
    this.show();
  }

  openGarage() {
    this.hide();
  }
}
