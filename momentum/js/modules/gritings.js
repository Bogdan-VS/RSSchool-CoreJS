const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');


let timeOfDay;
let randomNum;

slideNext.addEventListener('click', function () {
    slideNext.disabled = true;
    setTimeout(function() { 
        slideNext.disabled = false;
    }, 1000);
    getSlideNext();
})

slidePrev.addEventListener('click', function () {
    slidePrev.disabled = true;
    setTimeout(function() { 
        slidePrev.disabled = false;
    }, 1000);
    getSlidePrev();
})


function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 6 && hours <= 11) {
        timeOfDay = 'morning';
        greeting.innerHTML = `Good ${timeOfDay}, `;
    }

    if (hours >= 12 && hours <= 17) {
        timeOfDay = 'afternoon';
        greeting.innerHTML = `Good ${timeOfDay}, `;
    }

    if (hours >= 18 && hours <= 23) {
        timeOfDay = 'evening';
        greeting.innerHTML = `Good ${timeOfDay}, `;
    }

    if (hours >= 0 && hours <= 5) {
        timeOfDay = 'night';
        greeting.innerHTML = `Good ${timeOfDay}, `;
    }

    setTimeout(getTimeOfDay, 1000);

}

getTimeOfDay();

function getRandomNum() {
    randomNum = getRandomArbitrary(1, 21);
}

getRandomNum();

function setBg() {
    let img = new Image();
    randomNum = String(randomNum).padStart(2, '0');
    console.log(randomNum);
    img.src = `https://raw.githubusercontent.com/Bogdan-VS/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = body.style.backgroundImage = `url('https://raw.githubusercontent.com/Bogdan-VS/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg')`;
    }
}

setBg();

function setLocalStorage() {
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}

window.addEventListener('load', getLocalStorage);

function getRandomArbitrary(min, max) {
    let number = String(Math.floor(Math.random() * (max - min) + min));
    return number.padStart(2, '0');
}

getRandomArbitrary(1, 20);

function getSlideNext() {
    if (randomNum < 20) {
        randomNum++;
    } else {
        randomNum = 1;
    }

    setBg();
}

function getSlidePrev() {
    if (randomNum > 1) {
        randomNum--;
    } else {
        randomNum = 20;
    }

    setBg();
}

