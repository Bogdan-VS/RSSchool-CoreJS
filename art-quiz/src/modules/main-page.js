const header = document.querySelector('header');
const main = document.querySelector('main');

export const getHeader = () => {

    header.innerHTML = `
        <div class="settings">
            <div class="settings-item"></div>
        </div>
    `;
}

getHeader();

 export const getMain = () => {

    main.innerHTML = `
    <div class="main-container main-container__active">
        <div class="logo-container">
            <div class="logo-item"></div>
        </div>
        <div class="button-container">
            <button class="artist">Artist quiz</button>
            <button class="pictures">Pictures quiz</button>
        </div>
    </div>
    `;
}

window.onload = getMain();



