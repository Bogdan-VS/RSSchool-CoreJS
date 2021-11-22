import { artistList } from "./artist-list";
import { drawSucsses } from "./popaps";
import { generationData } from "./popaps";
import { appFlags } from "./artist";

const settings = document.querySelector('.settings');
const main = document.querySelector('main');
const artistWrapper = document.querySelector('.artist-wrapper');
export const timeConteiner = document.createElement('div');
export const containerQuestionsArtist = document.createElement('div');
export const containerQuestionsPictures = document.createElement('div');
const artistTitle = document.querySelector('.artist-title');
const body = document.querySelector('body');

export let listPictures;
const getListPictures = async () => {
    const list = 'https://raw.githubusercontent.com/Bogdan-VS/image-data/master/pictures.json';
    const res = await fetch(list);
    const data = await res.json();
    listPictures = data;
    return data
}

getListPictures();


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

    if (target.dataset.artist) {
        cardNumber = Number(target.dataset.artist) - 1;
    }
    if (target.dataset.pictures) {
        cardNumber = Number(target.dataset.pictures) - 1;
    }
    
    document.querySelector('.settings-item').style.display = 'none';
    settings.classList.add('settings-center');

    openQuestionPage();
    addData();
    getRandom(0, 9);
})

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
        console.log(cardNumber);
        const titlePictures = document.querySelector('.title-pictures');
        titlePictures.textContent = `Какую картину нарисовал ${listPictures[cardNumber][counter.numberQuestion].author} ?`
    }
    
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
            element.setAttribute('data-pictureSucsses', `${randomNumbers[index]}`);
        });
    }

    if (counter.numberQuestion > 9) {
        counter.numberQuestion = 0;
    } else {
        counter.numberQuestion++;
    }
}

export let sucssesCard;

body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.dataset.btn) {
        sucssesCard = target.dataset.btn;
        drawSucsses();
        generationData();
    }
    if (target.dataset.picturesucsses) {
        sucssesCard = target.dataset.picturesucsses;
        console.log(sucssesCard);
        drawSucsses();
        generationData();
    }
})

