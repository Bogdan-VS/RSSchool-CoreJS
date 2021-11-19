'use strict';

/**Burger */

const containerMenu = document.querySelector('.burger-container');
const burgerMenu = document.querySelector('.menu-burger');
const sliderActive = document.querySelector('.louvre-slider-wrapper');
const sliderWrapActive = document.querySelector('.slider-wrap');


if (burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
        containerMenu.classList.toggle('burger-container__active');
        burgerMenu.classList.toggle('menu-burger_active');
        sliderActive.classList.toggle('slider_active');
        sliderWrapActive.classList.toggle('slider-wrap_active');
    });
}

const menuLink = document.querySelectorAll('.navigation-item__burger[data-goto]');
if (menuLink.length > 0) {
    menuLink.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
        }
        containerMenu.classList.toggle('burger-container__active');
        burgerMenu.classList.toggle('menu-burger_active');
        sliderActive.classList.toggle('slider_active');
        sliderWrapActive.classList.toggle('slider-wrap_active');
    }
}

/**Burger End*/


/***SLIDER */
let sliderContainer = document.querySelector('.slider-wrap');
let slides = document.querySelector('.slider-wrap-wrap');
let Slide = document.querySelector('.louvre-image');
let height = sliderContainer.clientWidth;
let left = document.querySelector('.arrow-left');
let right = document.querySelector('.arrow-right');

let last = slides.querySelector('.louvre-image:last-of-type');

let flagUp;
let countPagin = 0;
let countNumber = 1;
let flag = false;

left.addEventListener('click', function() {
    flag = false;
    left.disabled = true;
    setTimeout(function() { 
        left.disabled = false;
    }, 600);
    slides.style.transform = 'translate(0, 0)';
    addPaginationLeft();
    flagUp = false;
});

right.addEventListener('click', function() {
    flag = false;
    right.disabled = true;
    setTimeout(function() { 
        right.disabled = false;
    }, 600);
    slides.style.transform = 'translate(' + -40 + '%, 0)';
    addPaginationRight();
    flagUp = true;
});

slides.addEventListener('transitionend', function() {

    if (flag) {
        return;
    } else {
        if (!flagUp) {
            slides.style.transition = 'none';
            slides.style.transform = 'translate(-20%, 0)';
      
            let last = slides.querySelector('.louvre-image:last-of-type');
    
            last.remove();
        
            slides.prepend(last);
        
            setTimeout(function(){
            slides.style.transition = '';
            });
        } else if (flagUp) {
            slides.style.transition = 'none';
            slides.style.transform = 'translate(-20%, 0)';
          
            let first = slides.querySelector('.louvre-image:first-of-type');
            first.remove();
        
            slides.append(first);
        
            setTimeout(function(){
            slides.style.transition = '';
            });
        }
    }
});

const pagination = document.querySelectorAll('.control-tab-item');
const controlNumber = document.querySelector('.control-number span:nth-child(1)');

const addPaginationRight = () => {
    countPagin++;
    countNumber++;
    if (countPagin < 5) {
        pagination.forEach(element => {
            element.classList.remove('active');
        })

        pagination[countPagin].classList.add('active');
        
        setTimeout(function(){
            controlNumber.innerHTML = `0${countNumber}`;
          }, 500);
    } else if (countPagin > 4) {
        countPagin = 0;
        countNumber = 1;
        pagination.forEach(element => {
            element.classList.remove('active');
        })

        pagination[countPagin].classList.add('active');

        setTimeout(function(){
            controlNumber.innerHTML = `0${countNumber}`;
          }, 500);
    }

}

const controlTab = document.querySelector('.control-tab');

controlTab.onclick = function(event) {
    let target = event.target;
    flag = true;
    addSlide(target.dataset.count);
}

const addSlide = (num) => {
    if (num == 5) {
        countPagin = num - 1;
        slides.style.transform = 'translate(0, 0)';
        pagination.forEach(element => {
            element.classList.remove('active');
        })

        pagination[num - 1].classList.add('active');
    } else {
        countPagin = num - 1;
        slides.style.transform = 'translate('+'-20' * num + '%, 0)';
        pagination.forEach(element => {
            element.classList.remove('active');
        })

        pagination[num - 1].classList.add('active');
    }
    
    countNumber = num;
    controlNumber.innerHTML = `0${countNumber}`;
}

const addPaginationLeft = () => {
    countPagin--;
    countNumber--;
    if (countPagin < 0) {
        countPagin = 4;
        countNumber = 5;
        pagination.forEach(element => {
            element.classList.remove('active');
        })

        pagination[countPagin].classList.add('active');

        controlNumber.innerHTML = `0${countNumber}`;
    } else if (countPagin > -1) {
        pagination.forEach(element => {
            element.classList.remove('active');
        })

        pagination[countPagin].classList.add('active');

        controlNumber.innerHTML = `0${countNumber}`;
    }
}

/***Slider End */

/**Slider Explore */

const after = document.querySelector('.after'),
      slider = document.querySelector('.slider');


function moveAfter() {
    after.style.width = slider.value+"%";
}

window.onload = function() {
	moveAfter();
};

/**Slider explore end */

/**Video*/
const moveLine = document.querySelector('.move-line'),
      volumeLine = document.querySelector('.volume-line'),
      player = document.querySelector('.video'),
      start = document.querySelector('.video-start'),
      startBtn = document.querySelector('.start'),
      disabled = document.querySelectorAll('.disabled'),
      volume = document.querySelectorAll('.volume'),
      full = document.querySelector('.full'),
      fullscreen =document.querySelectorAll('.fullscreen'),
      controls = document.querySelector('.adjustment'),
      videoContainer = document.querySelector('.vidio-container'),
      mute = document.querySelector('.microphone');

const valueB = volumeLine.value;

start.addEventListener('click', function() {
  startPlayer();
});

startBtn.addEventListener('click', function() {
    startPlayer();
});

moveLine.addEventListener('click', function() {
    rewindMoveLine();
})

mute.addEventListener('click', function() {
    addMute();
})

full.addEventListener('click', function() {
    fullScreenBtn();
})

document.addEventListener('keydown', function(e) {
    if (event.code === 'Space') {
      e.stopPropagation();
      e.preventDefault();
      startPlayerBtn();
    }
}, false)

document.addEventListener('keydown', function() {
    fullScreen();
})

document.addEventListener('keydown', function() {
    addMuteBtn();
})

document.addEventListener('keydown', function() {
    addSpeedUp();
})

document.addEventListener('keydown', function() {
    addSpeedDown();
})

player.addEventListener('ended', function() {
    disabled[0].classList.toggle('current');
    disabled[1].classList.toggle('current');
    disabled[2].classList.toggle('current');
})

moveLine.addEventListener('input', function() {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
})

volumeLine.addEventListener('input', function() {
    changeVolumeLine();
    let value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
    if (value == 0) {
        volume[1].classList.toggle('current-volume');
        volume[0].classList.toggle('current-volume');
    } else {
        volume[0].classList.add('current-volume');
        volume[1].classList.remove('current-volume');
    }
})

const addSpeedUp = () => {
    if (event.code === 'Period') {
        if (player.playbackRate != 2) {
            player.playbackRate = 2;
        } else {
            player.playbackRate = 1;
        }
    }
}

const addSpeedDown = () => {
    if (event.code === 'Comma') {
        if (player.playbackRate != 0.5) {
            player.playbackRate = 0.5;
        } else {
            player.playbackRate = 1;
        }
    }
}

const changeMoveLine = () => {
    moveLine.value = player.currentTime * 100 / player.duration;
    const value = moveLine.value;
    moveLine.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
}

player.ontimeupdate = changeMoveLine;

const changeVolumeLine = () => {
    player.volume = volumeLine.value / 100;
}

const startPlayerBtn = () => {
    if (event.code === 'Space') {
        event.stopPropagation();
        if (player.paused) {
            player.play();
            disabled[0].classList.toggle('current');
            disabled[1].classList.toggle('current');
            disabled[2].classList.toggle('current');
        } else {
            player.pause();
            disabled[0].classList.toggle('current');
            disabled[1].classList.toggle('current');
            disabled[2].classList.toggle('current');
        }
    }
}
  
const startPlayer = () => {
    if (player.paused) {
      player.play();
      disabled[0].classList.toggle('current');
      disabled[1].classList.toggle('current');
      disabled[2].classList.toggle('current');
    } else {
      player.pause();
      disabled[0].classList.toggle('current');
      disabled[1].classList.toggle('current');
      disabled[2].classList.toggle('current');
    }
}

const rewindMoveLine = () => {
    let w = moveLine.offsetWidth;
    let o = event.offsetX;
    let p = o * 100 / w;
    player.currentTime = (p * Math.floor(player.duration) / 100);
}

const addMute = () => {
    const valueMute = 0;

    if (player.muted === false) {
      player.muted = true;
      volumeLine.value = valueMute;
      volumeLine.style.background = `linear-gradient(to right, #710707 0%, #710707 ${valueMute}%, #C4C4C4 ${valueMute}%, #C4C4C4 100%)`;
      volume[1].classList.toggle('current-volume');
      volume[0].classList.toggle('current-volume');
    } else {
      player.muted = false;
      volumeLine.value = valueB;
      volumeLine.style.background = `linear-gradient(to right, #710707 0%, #710707 ${valueB}%, #C4C4C4 ${valueB}%, #C4C4C4 100%)`;
      volume[1].classList.toggle('current-volume');
      volume[0].classList.toggle('current-volume');
    }
}

const addMuteBtn = () => {
    if (event.code === 'Keym' || event.code === 'KeyM') {
        const valueMute = 0;
    
        if (player.muted === false) {
          player.muted = true;
          volumeLine.value = valueMute;
          volumeLine.style.background = `linear-gradient(to right, #710707 0%, #710707 ${valueMute}%, #C4C4C4 ${valueMute}%, #C4C4C4 100%)`;
          volume[1].classList.toggle('current-volume');
          volume[0].classList.toggle('current-volume');
        } else {
          player.muted = false;
          volumeLine.value = valueB;
          volumeLine.style.background = `linear-gradient(to right, #710707 0%, #710707 ${valueB}%, #C4C4C4 ${valueB}%, #C4C4C4 100%)`;
          volume[1].classList.toggle('current-volume');
          volume[0].classList.toggle('current-volume');
        }
    }
}

const fullScreen = () => {
    if (event.code === 'Keyf' || event.code === 'KeyF') {
      if (!document.fullscreenElement) {
        videoContainer.requestFullscreen();
        controls.classList.toggle('adjustment__full');
        fullscreen[0].classList.toggle('fullscreen__exit');
        fullscreen[1].classList.toggle('fullscreen__exit');
      } else {
        document.exitFullscreen();
        controls.classList.toggle('adjustment__full');
        fullscreen[0].classList.toggle('fullscreen__exit');
        fullscreen[1].classList.toggle('fullscreen__exit');
      }
    }
}

const fullScreenBtn = () => {
    if (event.code !== 'undefined') {
      if (!document.fullscreenElement) {
        videoContainer.requestFullscreen();
        controls.classList.toggle('adjustment__full');
        fullscreen[0].classList.toggle('fullscreen__exit');
        fullscreen[1].classList.toggle('fullscreen__exit');
      } else {
        document.exitFullscreen();
        controls.classList.toggle('adjustment__full');
        fullscreen[0].classList.toggle('fullscreen__exit');
        fullscreen[1].classList.toggle('fullscreen__exit');
      }
    }
}


/**Video End */

/**Video Slider*/

new Swiper('.video-slider', {
    slidesPerView: 3,
    spaceBetween: 42,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        300: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        420: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 42
        }
    }
});

/**Video Slider End*/

/**Booking-tickets */

const ticket = document.querySelector('.booking-tickets'),
      overlay = document.querySelector('.overlay'),
      btnTicket = document.querySelector('.amount-button'),
      btnClose = document.querySelector('.close');

const buttonAmount = document.querySelectorAll('.button-amount');
const amountContainerBlock = document.querySelectorAll('.amount-container__block');
const check = document.querySelectorAll('.check');
const typeContayner = document.querySelector('.type-container');


amountContainerBlock[0].onclick = function(event) {
    let target = event.target;
    console.log(target.dataset.basic)
    if (target.dataset.basic == 'basic') {
        totalCountTickets();
    }
}

amountContainerBlock[1].onclick = function(event) {
    let target = event.target;
    console.log(target.dataset.sanior)
    if (target.dataset.basic == 'sanior') {
        totalCountTickets();
    }
}

typeContayner.onclick = function(event) {
    let target = event.target;
    if (target.dataset.check == 'check') {
        totalCountTickets();
    }
}

let save = totalCountTickets();

localStorage.setItem('saveTotalCount', save);
console.log(localStorage.getItem('saveTotalCount'));

function totalCountTickets () {

    const total = document.querySelector('.total span:nth-child(2)');
    const basic = document.querySelector('.basic');
    const sanior = document.querySelector('.sanior');    

    const permanentTicket = 20;
    const temporaryTicket = 25;
    const combinedTicket = 40;
    let basicCount;
    let seniorCount;
    let totalCount;
    let countCheck = 1;

    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            countCheck = check[i].value;
        }
    }

    if (countCheck == 1) {
        basicCount = permanentTicket * basic.value;
        seniorCount = permanentTicket / 2 * sanior.value;
        totalCount = +(basicCount) + +(seniorCount);
        localStorage.setItem("someVarKey", totalCount);
        total.innerHTML = localStorage.getItem("someVarKey");
        return total.innerHTML;
    } else if (countCheck == 2) {
        basicCount = temporaryTicket * basic.value;
        seniorCount = temporaryTicket / 2 * sanior.value;
        totalCount = +(basicCount) + +(seniorCount);
        return total.innerHTML = totalCount;
    } else {
        basicCount = combinedTicket * basic.value;
        seniorCount = combinedTicket / 2 * sanior.value;
        totalCount = +(basicCount) + +(seniorCount);
        return total.innerHTML = totalCount;
    }
}

let overlayActive;
    

btnTicket.addEventListener('click', function() {
    buyTickets();
})

btnClose.addEventListener('click', function() {
    buyTickets();
})

overlay.addEventListener('click', function() {
    closeOverlay();
})

const closeOverlay = () => {
    ticket.classList.toggle('booking-tickets__active');
    overlay.classList.toggle('overlay-active');
}

const buyTickets = () => {
    ticket.classList.toggle('booking-tickets__active');
    overlay.classList.toggle('overlay-active');
}

/**Booking-tickets End */

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVudml0ZSIsImEiOiJja3VsbWZra24wMjZhMm9vYWRoem96cXBvIn0.HmGq0Lvzh4rH_32pqeoS_A';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/denvite/ckumnz46aes3p17mp63vp3r0d',
    center: [2.3358, 48.8610],
    zoom: 15.8
});

map.addControl(new mapboxgl.NavigationControl());

const marker1 = new mapboxgl.Marker({color: 'gray'})
.setLngLat([2.3329, 48.8618])
.addTo(map);

const marker2 = new mapboxgl.Marker({color: 'gray'})
.setLngLat([2.3370991861181665,48.86309999936893])
.addTo(map);

const marker3 = new mapboxgl.Marker({color: 'gray'})
.setLngLat([2.333008687539632,48.86004893163957])
.addTo(map);

const marker4 = new mapboxgl.Marker({color: 'gray'})
.setLngLat([2.3397836022322736,48.86077918899949])
.addTo(map);

const marker5 = new mapboxgl.Marker({color: 'black'})
.setLngLat([2.336337893750624,48.86080124478542])
.addTo(map);

// console.log('Самооценка:');
// console.log('header, main, footer 2 / 2');
// console.log('семь элементов section (по количеству секций) 2 / 2');
// console.log('только один заголовок h1 2 / 2');
// console.log('семь заголовков h2 (по количеству секций) 2 / 2');
// console.log('шесть заголовков h3 (по количеству карточек) 2 / 2');
// console.log('три списка ul > li > a (основная и вспомогательная панель навигации, ссылки на соцсети) 2 / 2');
// console.log('тринадцать кнопок button (четыре из них в секции Video, пять в секции Tickets, по две - стрелки слайдера и плейлиста) 2 / 2');
// console.log('три тега input type="radio" (в секции Tickets) 2 / 2');
// console.log('два тега input type="number"(в секции Tickets) 2 / 2');
// console.log('два тега input type="range" (громкось и прогрес-бар видео) 2 / 2');
// console.log('для всех элементов img указан обязательный атрибут alt 2 / 2');
// console.log('блок header 5 / 5');
// console.log('секция Welcome 5 / 5');
// console.log('секция Visiting 5 / 5');
// console.log('секция Explore 5 / 5');
// console.log('секция Video 5 / 5');
// console.log('секция Gallery 5 / 5');
// console.log('секция Tickets 5 / 5');
// console.log('секция Contacts 5 / 5');
// console.log('блок footer 5 / 5');
// console.log('форма плавно выдвигается слева при открытии и плавно возвращается назад при закрытии. В открытом состоянии под формой есть полупрозрачный overlay, который занимает весь экран. Форма и overlay прокручиваются вместе со страницей 1 / 2');
// console.log('при вёрстке формы используются следующие элементы: form, input type="date", input type="time", input type="text", input type="email", input type="tel", input type="number", select 1 / 2');
// console.log('форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком в верхнем правом углу или кликом по overlay 8 / 8');
// console.log('вёрстка формы соответствует макету 10 / 10');
// console.log('добавлен favicon 2 / 2');
// console.log('для построения сетки используются флексы или гриды 2 / 2');
// console.log('при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону 2 / 2');
// console.log('фоновый цвет каждого блока и секции тянется на всю ширину страницы 2 / 2');
// console.log('иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления 2 / 2');
// console.log('расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing 2 / 2');
// console.log('переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка 2 / 2');
// console.log('в блоке Contacts правильно указанны ссылки на почту mailto и на телефон tel 2 / 2');
// console.log('в футере добавлены ссылки на соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css 2 / 2');
// console.log('плавная прокрутка по якорям 5 / 5');
// console.log('параллакс 5 / 5');
// console.log('при кликам по кнопке Discover the Louvre и карточкам секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницы вашего сайта при помощи iframe 5 / 5');
// console.log('изменение стиля интерактивных элементов при наведении и клике. 4 / 4');
// console.log('обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы 2 / 2');
// console.log('интерактивность при наведении карточек в секции Visiting предусматривает плавное растягивание подчёркивания заголовка карточки на всю ширину карточки 2 / 2');
// console.log('интерактивность при наведении иконок социальных сетей в футере предусматривает изменение цвета иконки и круглой границы вокруг иконки на золотистый 2 / 2');
// console.log('можно передвигать ползунки громкости и прогресс-бара видео, при этом цвет шкалы до и после ползунка отличается и соответствует макету 2 / 2');
// console.log('кликами по кнопкам + и - в секции Tiskets можно менять количество билетов Basic и Senior от 0 до 20 2 / 2');
// console.log('кнопке "Book" в форме покупки билетов добавлен ripple-эффект. Демо: https://50projects50days.com/projects/button-ripple-effect/ 0 / 2');
// console.log('при перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке 5 / 10');

