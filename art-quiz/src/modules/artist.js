import { category } from "./category";

const artist = document.querySelector('.artist');
const pictures = document.querySelector('.pictures');
const settings = document.querySelector('.settings');
const main = document.querySelector('main');
const settingsItem = document.querySelector('.settings-item');
const body = document.querySelector('body');


const artistWrapper = document.createElement('div');
const artistTitle = document.createElement('div');

let activeSetting = true;
let activeArtistPage = false;
let activePicturesPage = false;

artist.addEventListener('click', function() {
    activeArtistPage = true;
    activePicturesPage = false;
    openArtistPage();
})

pictures.addEventListener('click', function() {
    activePicturesPage = true;
    activeArtistPage = false;
    openArtistPage();
})

settingsItem.addEventListener('click', function() {
    openSettings();
})

body.onclick = function(event) {
    let target = event.target
    if (target.dataset.set === 'home') {
        openMainPage();
    }
}

const drowArtistPage = () => {


    //main
    artistWrapper.classList.add('artist-wrapper');
    main.prepend(artistWrapper);

    for (let i = 0; i < 12; i++) {
        const artistContainer = document.createElement('section');
        artistContainer.classList.add('artist-container');
        artistContainer.innerHTML = `
            <div class="item-top">
                <h3></h3>
                <p></p>
            </div>
            <div class="item-bottom">
                <div class="card"></div>
                 <div class="card-text"></div>
            </div>
        `;
        artistWrapper.prepend(artistContainer);
        document.querySelector('.item-top h3').textContent = `${category[i].name}`;
        document.querySelector('.item-top p').textContent = `${category[i].points}`;
        document.querySelector('.card').style.background = `top 0 left 0 / 100% 100% url(${category[i].src})`;

    }


    //header
    artistTitle.classList.add('artist-title');
    artistTitle.innerHTML = `
        <div class="artist-container">
            <div class="artist-logo-item"></div>
            <h3 class="home-title" data-set="home">Home</h3>
            <h3 class="category-title">Category</h3>
        </div>     
    `;

    settings.prepend(artistTitle);
    document.querySelector('.category-title').classList.add('active-page');
}

drowArtistPage();


const openArtistPage = () => {

    // activeArtistPage = true;
    settings.classList.toggle('settings-artist__active');
    artistTitle.classList.toggle('artist-title__active');
    artistWrapper.classList.toggle('artist-wrapper__active');
    document.querySelector('.main-container').classList.toggle('main-container__active');
    const artistCont = document.querySelectorAll('.artist-container')

    console.log(activeArtistPage);

    if (activeArtistPage) {

        artistCont.forEach((element, index) => {
            element.classList.add('artistCurrent');
            element.classList.remove('picturesCurrent');
            element.setAttribute('data-artist', `${index}`);
            element.removeAttribute('data-pictures');
        });
    }

    if (activePicturesPage) {
        artistCont.forEach((element, index) => {
            element.classList.add('picturesCurrent');
            element.classList.remove('artistCurrent');
            element.setAttribute('data-pictures', `${index}`);
            element.removeAttribute('data-artist');
        });
    }
}

const openSettings = () => {

    if (activeArtistPage) {
        if (activeSetting) {
            activeSetting = false;
            settings.classList.toggle('settings-artist__active');
            artistTitle.classList.toggle('artist-title__active');
            artistWrapper.classList.toggle('artist-wrapper__active');
            document.querySelector('.main-container').classList.toggle('main-container__active');
            settings.classList.add('settings-active');
            settingsItem.classList.toggle('settings-item__active');
            document.querySelector('.settings-title').classList.add('settings-title__active');
        } else {
            activeSetting = true;
            document.querySelector('.settings-title').classList.remove('settings-title__active');
            settings.classList.remove('settings-active');
            settings.classList.toggle('settings-artist__active');
            artistTitle.classList.toggle('artist-title__active');
            artistWrapper.classList.toggle('artist-wrapper__active');
            document.querySelector('.main-container').classList.toggle('main-container__active');
            settingsItem.classList.toggle('settings-item__active');
        }
    }

}

const openMainPage = () => {

    activeArtistPage = false;

    settings.classList.toggle('settings-artist__active');
    artistTitle.classList.toggle('artist-title__active');
    artistWrapper.classList.toggle('artist-wrapper__active');
    document.querySelector('.main-container').classList.toggle('main-container__active');

}




