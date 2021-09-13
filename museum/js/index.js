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
        const bgImage = document.querySelectorAll('.background-image');
        // console.log(bgImage[0].classList.contains());
        if (bgImage[0].classList.contains('background-image-burger')) {
            bgImage.forEach(element => {
                element.classList.remove('background-image-burger');
            })
        } else {
            bgImage.forEach(element => {
                console.log(1);
                element.classList.add('background-image-burger');
            })
        }
        // if (bgImage[0].style.position === 'absolute') {
        //     bgImage.forEach(element => {
        //         element.classList.remove('background-image-burger');
        //     })
        // } else if (bgImage[0].style.position === 'relative'){
        //     bgImage.forEach(element => {
        //         element.classList.add('background-image-burger');
        //     })
        // } else {
        //     bgImage.forEach(element => {
        //         element.classList.add('background-image-burger');
        //     })
        // }
    });
}

const menuLink = document.querySelectorAll('.navigation-item[data-goto]');
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
console.log(last);

console.log(slides);
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
        console.log(slides.style.transform);

        let last = slides.querySelector('.louvre-image:last-of-type');
        console.log(last);

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
        console.log('down');
    }

});

/***Slider End */