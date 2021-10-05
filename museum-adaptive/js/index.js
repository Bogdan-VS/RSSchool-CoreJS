'use strict';

const containerMenu = document.querySelector('.container-nav');
const burgerMenu = document.querySelector('.menu-burger');
const sliderActive = document.querySelector('.louvre-slider-wrapper');
const sliderWrapActive = document.querySelector('.slider-wrap');


if (burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        containerMenu.classList.toggle('container-nav_active');
        burgerMenu.classList.toggle('menu-burger_active');
        sliderActive.classList.toggle('slider_active');
        sliderWrapActive.classList.toggle('slider-wrap_active');
    });
}

const menuLink = document.querySelectorAll('.navigation-item[data-goto]');
if (menuLink.length > 0) {
    console.log(1);
    menuLink.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        console.log(1);
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
        }

        console.log(1);
        document.body.classList.remove('_lock');
        containerMenu.classList.remove('container-nav_active');
        burgerMenu.classList.remove('menu-burger_active');
        sliderActive.classList.remove('slider_active');
        sliderWrapActive.classList.remove('slider-wrap_active');
    }
}


/***SLIDER */
let sliderContainer = document.querySelector('.slider-wrap');
let slides = document.querySelector('.slider-wrap-wrap');
let Slide = document.querySelector('.louvre-image');
let height = sliderContainer.clientWidth;
let left = document.querySelector('.arrow-left');
let right = document.querySelector('.arrow-right');

let last = slides.querySelector('.louvre-image:last-of-type');

let flagUp;

left.addEventListener('click', function() {
    slides.style.transform = 'translate(' + -40 + '%, 0)';
    flagUp = false;
});

right.addEventListener('click', function() {
    slides.style.transform = 'translate(0, 0)';
    console.log(slides.style.transform);
    flagUp = true;
});

slides.addEventListener('transitionend', function() {
    if (flagUp) {
      slides.style.transition = 'none';
      slides.style.transform = 'translate(-20%, 0)';

        let last = slides.querySelector('.louvre-image:last-of-type');

        last.remove();
    
        slides.prepend(last);
    
        setTimeout(function(){
          slides.style.transition = '';
        });
    } else if (!flagUp) {
      slides.style.transition = 'none';
      slides.style.transform = 'translate(-20%, 0)';
    
        let first = slides.querySelector('.louvre-image:first-of-type');
        first.remove();
    
        slides.append(first);
    
        setTimeout(function(){
          slides.style.transition = '';
        });
    }

});

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

/**Video */
const moveLine = document.querySelector('.move-line'),
      volumeLine = document.querySelector('.volume-line')
const volumeLineAdaptive768 = document.querySelector('.volume-line__adaptive-768');      
const moveLineAdaptive1024 = document.querySelector('.move-line__adaptive-1024');
const moveLineAdaptive768 = document.querySelector('.move-line__adaptive-768');
const moveLineAdaptive420 = document.querySelector('.move-line__adaptive-420');


moveLine.addEventListener('input', function() {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
})
moveLineAdaptive1024.addEventListener('input', function() {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
})
moveLineAdaptive768.addEventListener('input', function() {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
})
moveLineAdaptive420.addEventListener('input', function() {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
})

volumeLine.addEventListener('input', function() {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
})
volumeLineAdaptive768.addEventListener('input', function() {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
})

/**Video End */

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

/**Booking-tickets */

const ticket = document.querySelector('.booking-tickets'),
      overlay = document.querySelector('.overlay'),
      btnTicket = document.querySelector('.amount-button'),
      btnClose = document.querySelector('.close');

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

