import { artistList } from "./artist-list";
import { drawSucsses } from "./popaps";
import { generationData } from "./popaps";
// import { correctAnswer } from "./popaps";
import { appFlags } from "./artist";

const settings = document.querySelector('.settings');
const main = document.querySelector('main');
const artistWrapper = document.querySelector('.artist-wrapper');
export const timeConteiner = document.createElement('div');
export const containerQuestionsArtist = document.createElement('div');
export const containerQuestionsPictures = document.createElement('div');
const artistTitle = document.querySelector('.artist-title');
const body = document.querySelector('body');



const getlistPictures = async () => {
    const list = './pictures.json';
    const res = await fetch(list);
    const data = await res.json();
    return data
}

const listPictures = getlistPictures();
console.log(listPictures);

export const counter = {
    numberQuestion: 0,
}
export let cardNumber;
export const drawArtistQuestion = () => {

    timeConteiner.classList.add('time-container');
    settings.prepend(timeConteiner);
    timeConteiner.innerHTML = `
        <div class="time-content">
            <div class="bg-timer"></div>
            <div>
                <input type="range" value="0" min="0" max="100" step="1" class="time-line">
            </div>
            <div class="time">0:20</div>
        </div>
    `;
    

    containerQuestionsArtist.classList.add('container-question');
    main.append(containerQuestionsArtist);
    containerQuestionsArtist.innerHTML = `
        <div class="container-content">
            <h4 class="title"></h4>
            <div class="pictures-container">
                <div class="pictures-item"></div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="answer-buttons">
                <button class="button"></button>
                <button class="button"></button>
                <button class="button"></button>
                <button class="button"></button>
            </div>
        </div>
    `;

    containerQuestionsPictures.classList.add('container-questions-pictures');
    main.prepend(containerQuestionsPictures);

    containerQuestionsPictures.innerHTML = `
        <div class="container-content">
            <h4 class="title-pictures"></h4>
            <div class="answer-pictures">
                <div class="picture-item"></div>
                <div class="picture-item"></div>
                <div class="picture-item"></div>
                <div class="picture-item"></div>
            </div>
        </div>
    `;
    
}


drawArtistQuestion();

artistWrapper.addEventListener('click', (event) => {
    let target = event.target.closest('section');
    cardNumber = Number(target.dataset.artist) - 1;
    
    document.querySelector('.settings-item').style.display = 'none';
    settings.classList.add('settings-center');
    openQuestionPage();
    addData();
    getRandom(0, 9);
})

// console.log(artistContainer[`${cardNumber}`].querySelector('.item-top p'));

// export const getResult = () => {

//     const artistContainer = document.querySelectorAll('.artist-container');
//     artistContainer[`${cardNumber}`].querySelector('.item-top p').textContent = `${correctAnswer} / 10`
// }

const openQuestionPage = () => {

    
    if (appFlags.activeArtistPage) {
        containerQuestionsArtist.classList.add('container-question__active');
        containerQuestionsPictures.classList.remove('container-questions-pictures__active');
    }
    if (appFlags.activePicturesPage) {
        containerQuestionsPictures.classList.add('container-questions-pictures__active');
        containerQuestionsArtist.classList.remove('container-question__active');
    }
    timeConteiner.classList.add('time-container__active');
    settings.classList.toggle('settings-artist__active');
    artistTitle.classList.toggle('artist-title__active');
    artistWrapper.classList.toggle('artist-wrapper__active');

}

export const addData = () => {

    if (appFlags.activeArtistPage) {
        const title = document.querySelector('.title');
        const pictures = document.querySelector('.pictures-container')
        title.textContent = `Какой автор нарисовал картину "${artistList[cardNumber][counter.numberQuestion].name}" ?`;
        pictures.style.background = `top 0 left 0 / 100% 100% url(${artistList[cardNumber][counter.numberQuestion].src})`;
    }
    if (appFlags.activePicturesPage) {
        const titlePictures = document.querySelector('.title-pictures');
        titlePictures.textContent = `Какую картину нарисовал ${artistList[cardNumber][counter.numberQuestion].author} ?`
    }
    // const title = document.querySelector('.title');
    // const pictures = document.querySelector('.pictures-container')
    // title.textContent = `Какой автор нарисовал картину "${artistList[cardNumber][counter.numberQuestion].name}" ?`;
    // pictures.style.background = `top 0 left 0 / 100% 100% url(${artistList[cardNumber][counter.numberQuestion].src})`;
    
}


export const getRandom = (min, max) => {
    
    const mass = [counter.numberQuestion];

    for (let i = 0; mass.length < 4; i++) {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        if (number !== counter.numberQuestion) {
            if (!(mass.includes(number))) {
                mass.push(number);
            }
            
        }
    }

    let randomNumbers = mass.map(i=>[Math.random(), i]).sort().map(i=>i[1]);

    if (appFlags.activeArtistPage) {
        const Buttons = document.querySelectorAll('.button');

        Buttons.forEach((element, index) => {
            element.textContent = `${artistList[cardNumber][randomNumbers[index]].author}`;
            element.setAttribute('data-btn', `${randomNumbers[index]}`);
        });
    }

    if (appFlags.activePicturesPage) {
        const pictureItems = document.querySelectorAll('.picture-item');

        pictureItems.forEach((element, index) => {
            element.style.background = `top 0 left 0 / 100% 100% url(${listPictures[cardNumber][randomNumbers[index]].src})`;
        });
    }

    if (counter.numberQuestion > 9) {
        counter.numberQuestion = 0;
    } else {
        counter.numberQuestion++;
    }
}

export let sucssesCard;

body.onclick = function(event) {
    let target = event.target;
    sucssesCard = target.dataset.btn;
    if (target.dataset.btn) {
        drawSucsses();
        generationData();
    }
}

