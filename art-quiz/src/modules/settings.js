const settingsItem = document.querySelector('.settings-item');
const main = document.querySelector('main');
const settings = document.querySelector('.settings');

export const settingsWrapper = document.createElement('div');

let settingsFlag = false;

settingsItem.addEventListener('click', function() {
    openSettings();
});


const drowSettings = () => {

    //header
    const settingsTitle = document.createElement('div');
    settingsTitle.classList.add('settings-title');
    settingsTitle.innerHTML = '<div class="settings-logo"></div><h3>Settings</h3>'
    settings.prepend(settingsTitle);

    //main
    settingsWrapper.classList.add('settings-wrapper');
    settingsWrapper.innerHTML = `
        <div class="settings-container">
            <div class="volume-container">
                <h4>Volume</h4>
                <input class="volume-line" type="range" min="0" max="100" value="25">
                <div class="volume-logo">
                    <div class="volume-item volume-mute"></div>
                    <div class="volume-item volume-full"></div>
                </div>
            </div>
            <div class="time-game-container">
                <h4>Time game</h4>
                <div class="time-settings">
                    <div class="option">
                        <p class="on active">On</p>
                        <p class="off">Off</p>
                    </div>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <div class="time-answer-container">
                <h4>Time to answer</h4>
                <div class="time-counter">
                    <button type="button" onclick="this.nextElementSibling.stepDown()">–</button>
                    <input type="number" min="0" max="20" value="20" readonly class="number">
                    <button type="button" onclick="this.previousElementSibling.stepUp()">+</button>
                </div>
            </div>
        </div>
        <div class="button-wrapper">
            <div class="button-container">
                <button>Default</button>
                <button>Save</button>
            </div>
        </div>
    `;
    main.prepend(settingsWrapper);
    
}
drowSettings();


const openSettings = () => {

    if (!settingsFlag) {
        settingsFlag = true;
        settings.classList.toggle('settings-active');
        settingsItem.classList.toggle('settings-item__active');
        settingsWrapper.classList.toggle('settings-wrapper__active');
        document.querySelector('.settings-title').classList.toggle('settings-title__active');
        document.querySelector('.main-container').classList.toggle('main-container__active');
    } else {
        settings.classList.toggle('settings-active');
        settingsItem.classList.toggle('settings-item__active');
        settingsWrapper.classList.toggle('settings-wrapper__active');
        document.querySelector('.settings-title').classList.toggle('settings-title__active');
        document.querySelector('.main-container').classList.toggle('main-container__active');
    }

}
