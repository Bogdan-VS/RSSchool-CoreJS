import { artistList } from "./artist-list";
import { numberQuestion } from "./artist-quetion";
import { cardNumber } from "./artist-quetion";

const popapContainer = document.createElement('div');
const main = document.querySelector('main');

export const drawSucsses = () => {

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
                <button>Next</button>
            </div>
        </div>
    `;
}

export const generationData = () => {

    const popapContentTitle = document.querySelector('.popap-content h4');
    const popapContentSubtitle = document.querySelector('.popap-content p');
    const popapImage = document.querySelector('.popap-image');
    popapContentTitle.textContent = `Картина называется "${artistList[cardNumber][numberQuestion].name}"`;
    popapContentSubtitle.textContent = `${artistList[cardNumber][numberQuestion].author}, ${artistList[cardNumber][numberQuestion].year}`;
    popapImage.style.background = `top 0 left 0 / 100% 100% url(${artistList[cardNumber][numberQuestion].src})`;
}


