'use strict';

const burgerMenu = document.querySelector('.menu-burger');
if (burgerMenu) {
    const containerMenu = document.querySelector('.container-nav');
    burgerMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        containerMenu.classList.toggle('container-nav_active');
        burgerMenu.classList.toggle('menu-burger_active');
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

        const containerMenu = document.querySelector('.container-nav');
        const burgerMenu = document.querySelector('.menu-burger');
        burgerMenu.classList.remove('menu-burger_active');
        containerMenu.classList.remove('container-nav_active');
        document.body.classList.remove('_lock');
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