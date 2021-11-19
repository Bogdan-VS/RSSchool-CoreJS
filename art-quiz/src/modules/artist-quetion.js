import { artistList } from "./artist-list";
import { drawSucsses } from "./popaps";
import { generationData } from "./popaps";

const settings = document.querySelector('.settings');
const main = document.querySelector('main');
const artistWrapper = document.querySelector('.artist-wrapper');
const timeConteiner = document.createElement('div');
const containerQuestions = document.createElement('div');
const artistTitle = document.querySelector('.artist-title');
const body = document.querySelector('body');




export let cardNumber;
export let numberQuestion = 0;

const drawArtistQuestion = () => {

    timeConteiner.classList.add('time-container');
    settings.prepend(timeConteiner);
    timeConteiner.innerHTML = `
        <div class="bg-timer"></div>
        <input type="range" value="0" min="0" max="100" step="1" class="time-line">
        <div class="time">0:20</div>
    `;
    


    containerQuestions.classList.add('container-question');
    main.prepend(containerQuestions);
    containerQuestions.innerHTML = `
        <div class="container-content">
            <h4 class="title">Who is the author of this picture?</h4>
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
    
}

drawArtistQuestion();



artistWrapper.onclick = function(event) {
    let target = event.target.closest('section');
    console.log(target.dataset.artist);
    cardNumber = Number(target.dataset.artist) - 1;
    
    openQuestionPage();
    addData();
    getRandom(0, 9);
}

const openQuestionPage = () => {

    timeConteiner.classList.add('time-container__active');
    containerQuestions.classList.add('container-question__active');
    settings.classList.toggle('settings-artist__active');
    artistTitle.classList.toggle('artist-title__active');
    artistWrapper.classList.toggle('artist-wrapper__active');
    // document.querySelector('.main-container').classList.toggle('main-container__active');
}

const addData = () => {

    const title = document.querySelector('.title');
    const pictures = document.querySelector('.pictures-container')
    title.textContent = `Какой автор нарисовал картину${artistList[cardNumber][numberQuestion].name}?`;
    pictures.style.background = `top 0 left 0 / 100% 100% url(${artistList[cardNumber][numberQuestion].src})`;
    
}


const getRandom = (min, max) => {
    console.log(typeof max)

    const mass = [numberQuestion];

    for (let i = 0; mass.length < 4; i++) {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        if (number !== numberQuestion) {
            if (!(mass.includes(number))) {
                mass.push(number);
            }
            
        }
    }

    const Buttons = document.querySelectorAll('.button');

    Buttons.forEach((element, index) => {
        element.textContent = `${artistList[cardNumber][mass[index]].author}`;
        element.setAttribute('data-btn', `${mass[index]}`);
    });

    // console.log(mass);
}

body.onclick = function(event) {
    let target = event.target;
    if (target.dataset.btn) {
        drawSucsses();
        generationData();
    }
}



console.log()

