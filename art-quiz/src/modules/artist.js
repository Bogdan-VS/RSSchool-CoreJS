import { category } from "./data/category";

const artist = document.querySelector('.artist');
const pictures = document.querySelector('.pictures');
const settings = document.querySelector('.settings');
const main = document.querySelector('main');
const settingsItem = document.querySelector('.settings-item');
const body = document.querySelector('body');
const mainContainer = document.querySelector('.main-container');
const settingsTitle = document.querySelector('.settings-title');
const artistWrapper = document.createElement('div');
const artistTitle = document.createElement('div');
export const appFlags = {
    activeSetting: true,
    activeArtistPage: false,
    activePicturesPage: false,
}

artist.addEventListener('click', function() {
    appFlags.activeArtistPage = true;
    appFlags.activePicturesPage = false;
    openArtistPage();
})

pictures.addEventListener('click', function() {
    appFlags.activePicturesPage = true;
    appFlags.activeArtistPage = false;
    openArtistPage();
})

settingsItem.addEventListener('click', function() {
    openSettings();
})

body.addEventListener('click', (event) => {
    const target = event.target;
    if (target.dataset.set === 'home') {
        openMainPage();
    }
})

const drowArtistPage = () => {
    artistWrapper.classList.add('artist-wrapper');
    main.prepend(artistWrapper);

    for (let i = 0; i < 12; i++) {
        const artistContainer = document.createElement('section');
        artistContainer.classList.add('artist-container');
        artistContainer.innerHTML = `
            <div class="item-top">
                <h3>${category[i].name}</h3>
                <p>${category[i].points}</p>
            </div>
            <div class="item-bottom">
                <div class="card" style="background: top 0 left 0 / 100% 100% url(${category[i].src})"></div>
                 <div class="card-text"></div>
            </div>
        `;
        artistWrapper.prepend(artistContainer);
    }

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

const openArtistPage = () => {
    settings.classList.toggle('settings-artist__active');
    artistTitle.classList.toggle('artist-title__active');
    artistWrapper.classList.toggle('artist-wrapper__active');
    document.querySelector('.main-container').classList.toggle('main-container__active');

    if (appFlags.activeArtistPage) {
        toggleClassArtistPage('data-artist', 'data-pictures', 'artistCurrent', 'picturesCurrent');
    }

    if (appFlags.activePicturesPage) {
        toggleClassArtistPage('data-pictures', 'data-artist', 'picturesCurrent', 'artistCurrent');
    }
}

const toggleClassArtistPage = (setAttibute, removeAttribute, addClass, removeClass) => {
    const artistCont = document.querySelectorAll('.artist-container');

    artistCont.forEach((element, index) => {
        element.classList.add(`${addClass}`);
        element.classList.remove(`${removeClass}`);
        element.setAttribute(`${setAttibute}`, `${index}`);
        element.removeAttribute(`${removeAttribute}`);
    });
}

const openSettings = () => {
    if (appFlags.activeArtistPage) {
        if (appFlags.activeSetting) {
            appFlags.activeSetting = false;
            toggleActiveSettings();
            settings.classList.add('settings-active');
            settingsTitle.classList.add('settings-title__active');
        } else {
            appFlags.activeSetting = true;
            toggleActiveSettings();
            settingsTitle.classList.remove('settings-title__active');
            settings.classList.remove('settings-active');
        }
    }

    if (appFlags.activePicturesPage) {
        if (appFlags.activeSetting) {
            appFlags.activeSetting = false;
            toggleActiveSettings();
            settings.classList.add('settings-active');
            settingsTitle.classList.add('settings-title__active');
        } else {
            appFlags.activeSetting = true;
            toggleActiveSettings();
            settingsTitle.classList.remove('settings-title__active');
            settings.classList.remove('settings-active');
        }
    }
}

const toggleActiveSettings = () => {
    settings.classList.toggle('settings-artist__active');
    artistTitle.classList.toggle('artist-title__active');
    artistWrapper.classList.toggle('artist-wrapper__active');
    mainContainer.classList.toggle('main-container__active');
    settingsItem.classList.toggle('settings-item__active');
}

const openMainPage = () => {
    appFlags.activeArtistPage = false;
    settings.classList.toggle('settings-artist__active');
    artistTitle.classList.toggle('artist-title__active');
    artistWrapper.classList.toggle('artist-wrapper__active');
    document.querySelector('.main-container').classList.toggle('main-container__active');
}

window.onload = drowArtistPage();




