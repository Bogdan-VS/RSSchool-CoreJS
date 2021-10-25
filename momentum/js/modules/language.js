const langContainer = document.querySelector('.lang');

let DEFAULT_LANGUAGE = 'en';

// langContainer.addEventListener('click', fff);

langContainer.onclick = function(event) {
    let target = event.target;
    DEFAULT_LANGUAGE = target.dataset.lang
    console.log(target.dataset.lang);
}

export {DEFAULT_LANGUAGE};

function setLocalStorage() {
    localStorage.setItem('lang', DEFAULT_LANGUAGE);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('lang')) {
        city.value = localStorage.getItem('lang');
    }
}


window.addEventListener('load', getLocalStorage);
