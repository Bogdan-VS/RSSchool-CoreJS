import { settingsWrapper } from "./settings";
import { overlay } from "./popaps";
import { containerQuestionsArtist } from "./artist-quetion";
import { timeConteiner } from "./artist-quetion";
import { appFlags } from "./artist";
import { correctAnswer } from "./popaps";
import { getResult } from "./artist-quetion";


export const endGame = document.createElement('div');
const main = document.querySelector('main');



export const drawEndGame = () => {

    endGame.classList.add('end-game-popap');
    main.prepend(endGame);

    endGame.innerHTML = `
        <div class="end-game-container">
            <div>
                <div class="end-game-logo"></div>
            </div>
            <h4>Congratulations!</h4>
            <div class="result">
                <span class="result-counts"></span>
                <span>/</span>
                <span>10</span>
            </div>
            <div class="end-game-btn">
                <button class="home-btn" data-homeBtn="home">Home</button>
                <button class="next-btn" data-homeBtn="next">Next Quiz</button>
            </div>
        </div>
    `;

    document.querySelector('.result-counts').textContent = `${correctAnswer}`;
}



endGame.addEventListener('click', (event) => {
    let target  = event.target;
    if (target.dataset.homebtn === 'home') {
        appFlags.activeArtistPage = false;
        document.querySelector('.settings-item').style.display = 'block';
        settingsWrapper.classList.remove('settings-wrapper__active');
        endGame.classList.toggle('end-game-popap__active');
        containerQuestionsArtist.classList.remove('container-question__active');
        document.querySelector('.settings').classList.remove('settings-center');
        timeConteiner.classList.remove('time-container__active');
        document.querySelector('.main-container').classList.toggle('main-container__active');
        overlay.classList.toggle('overlay__active');
        // getResult();
    }

    // if (target.dataset.homeBtn === 'Next') {

    // }
})
