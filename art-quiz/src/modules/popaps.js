import { artistList } from "./data/artist-list";
import { counter } from "./artist-quetion";
import { cardNumber } from "./artist-quetion";
import { addData } from "./artist-quetion";
import { getRandom } from "./artist-quetion";
import { sucssesCard } from "./artist-quetion";
import { drawEndGame } from "./the-end-popap";
import { endGame } from "./the-end-popap";
import { listPictures } from "./artist-quetion";
import { appFlags } from "./artist";

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
    popapContainer.classList.toggle('popap-container__active');
    overlay.classList.toggle('overlay__active');

    if (appFlags.activeArtistPage) {
        toggleActiveCard(artistList);
    }

    if (appFlags.activePicturesPage) {
        toggleActiveCard(listPictures);
    }

    if (+sucssesCard === counter.numberQuestion - 1) {
        correctAnswer++;
        toggleCheckmark('checkmark__succses', 'checkmark__error');
    } else {
        toggleCheckmark('checkmark__error', 'checkmark__succses');
    }

    setTimeout(() => {
        document.querySelector('.popap-container__active').style.opacity = '1';
    },300);
}

const toggleActiveCard = (source) => {
    const popapContentTitle = document.querySelector('.popap-content h4');
    const popapContentSubtitle = document.querySelector('.popap-content p');
    const popapImage = document.querySelector('.popap-image');
    popapContentTitle.textContent = `Картина называется "${source[cardNumber][counter.numberQuestion - 1].name}"`;
    popapContentSubtitle.textContent = `${source[cardNumber][counter.numberQuestion - 1].author}, ${artistList[cardNumber][counter.numberQuestion - 1].year}`;
    popapImage.style.background = `top 0 left 0 / 100% 100% url(${source[cardNumber][counter.numberQuestion - 1].src})`;
}

const toggleCheckmark = (addClass, removeClass) => {
    const checkmark = document.querySelector('.checkmark');
    checkmark.classList.add(`${addClass}`);
    checkmark.classList.remove(`${removeClass}`);
}

popapContainer.onclick = function(event) {
    let target = event.target;
    if (target.dataset.next === 'next' && counter.numberQuestion === 10) {
        setTimeout(() => {
            counter.numberQuestion = 0;
            togglePopapContainer();
            endGame.classList.toggle('end-game-popap__active');
            drawEndGame();
        },300);
    }
    if (target.dataset.next === 'next' && counter.numberQuestion < 10) {
        setTimeout(() => {
            togglePopapContainer();
            overlay.classList.toggle('overlay__active');
            addData();
            getRandom(0, 9);
        },300);
    }
}

const togglePopapContainer = () => {
    document.querySelector('.popap-container__active').style.opacity = '0';
    popapContainer.classList.toggle('popap-container__active');
}



