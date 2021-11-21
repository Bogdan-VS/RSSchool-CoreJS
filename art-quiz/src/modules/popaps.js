import { artistList } from "./artist-list";
import { counter } from "./artist-quetion";
import { cardNumber } from "./artist-quetion";
import { addData } from "./artist-quetion";
import { getRandom } from "./artist-quetion";
import { sucssesCard } from "./artist-quetion";
import { drawEndGame } from "./the-end-popap";
import { endGame } from "./the-end-popap";

const popapContainer = document.createElement('div');
const main = document.querySelector('main');
export const overlay = document.createElement('div');
const body = document.querySelector('body');

export let correctAnswer = 0;

export const drawSucsses = () => {
    
    overlay.classList.add('overlay');
    body.prepend(overlay);
    popapContainer.classList.add('popap-container');
    main.prepend(popapContainer);

    popapContainer.innerHTML = `
        <div class="popap-content">
            <div class="popap-block">
                <div class="popap-image"></div>
                <div class="checkmark"></div>
            </div>
            <h4></h4>
            <p></p>
            <div class="button-container">
                <button data-next="next">Next</button>
            </div>
        </div>
    `;
}

export const generationData = () => {

    const popapContentTitle = document.querySelector('.popap-content h4');
    const popapContentSubtitle = document.querySelector('.popap-content p');
    const popapImage = document.querySelector('.popap-image');
    const checkmark = document.querySelector('.checkmark');
    popapContainer.classList.toggle('popap-container__active');
    overlay.classList.toggle('overlay__active');
    popapContentTitle.textContent = `Картина называется "${artistList[cardNumber][counter.numberQuestion - 1].name}"`;
    popapContentSubtitle.textContent = `${artistList[cardNumber][counter.numberQuestion - 1].author}, ${artistList[cardNumber][counter.numberQuestion - 1].year}`;
    popapImage.style.background = `top 0 left 0 / 100% 100% url(${artistList[cardNumber][counter.numberQuestion - 1].src})`;

    if (+sucssesCard === counter.numberQuestion - 1) {
        correctAnswer++;
        checkmark.classList.add('checkmark__succses');
        checkmark.classList.remove('checkmark__error');
    } else {
        checkmark.classList.add('checkmark__error');
        checkmark.classList.remove('checkmark__succses');
    }

    setTimeout(() => {
        document.querySelector('.popap-container__active').style.opacity = '1';
    },300);
}

popapContainer.onclick = function(event) {
    let target = event.target;
    if (target.dataset.next === 'next' && counter.numberQuestion === 10) {
        setTimeout(() => {
            counter.numberQuestion = 0;
            document.querySelector('.popap-container__active').style.opacity = '0';
            popapContainer.classList.toggle('popap-container__active');
            endGame.classList.toggle('end-game-popap__active');
            drawEndGame();
        },300);
    }
    if (target.dataset.next === 'next' && counter.numberQuestion < 10) {
        setTimeout(() => {
            document.querySelector('.popap-container__active').style.opacity = '0';
            popapContainer.classList.toggle('popap-container__active');
            overlay.classList.toggle('overlay__active');
            addData();
            getRandom(0, 9);
        },300);

    }
}
;


