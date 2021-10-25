const audioPlayer = document.querySelector('audio');
const play = document.querySelector('.play');
const audioLine = document.querySelector('.audio-line');
const audioTime = document.querySelector('.audio-time');
const playList = document.querySelector('.play-list')
const playNext = document.querySelector('.play-next');
const playPrev = document.querySelector('.play-prev');
const trackTitle = document.querySelector('.track-title');
const volumeLine = document.querySelector('.volume-line');
const microphone = document.querySelector('.microphone');

const valueB = volumeLine.value;

let counter = 0;

const playNextTrack = async () => {
    clearTrack();

    if (!audioPlayer.paused) {
        play.classList.toggle('pause');
    }
    
    counter++;
    const list = 'js/modules/audio.json';
    const res = await fetch(list);
    const data = await res.json();
    if (counter < 6) {
        audioPlayer.src = `${data[counter].src}`;
        addPlay();
    } else {
        counter = 0;
        audioPlayer.src = `${data[counter].src}`;
        addPlay();
    }
}

const playPrevTrack = async () => {
    clearTrack();

    if (!audioPlayer.paused) {
        play.classList.toggle('pause');
    }
    
    counter--;
    const list = 'js/modules/audio.json';
    const res = await fetch(list);
    const data = await res.json();
    if (counter >= 0) {
        audioPlayer.src = `${data[counter].src}`;
        addPlay();
    } else {
        counter = 5;
        audioPlayer.src = `${data[counter].src}`;
        addPlay();
    }
}

const addPlay = async () => {
    const trackList = document.querySelector(`.track-list:nth-child(${counter + 1})`);
    const list = 'js/modules/audio.json';
    const res = await fetch(list);
    const data = await res.json();
    
    trackTitle.innerHTML = `${data[counter].title}`;
    if (audioPlayer.paused) {
        console.log('play')
        audioPlayer.play();
        trackList.classList.add('track-list__active');
        trackList.classList.add('track-list__active::before');
        play.classList.add('pause');
    } else {
        console.log('pause')
        audioPlayer.pause();
        trackList.classList.remove('track-list__active');
        trackList.classList.remove('track-list__active::before');
        play.classList.remove('pause');
    }
}

const clearTrack = () => {
    const trackListAll = document.querySelectorAll('.track-list');

    trackListAll.forEach(element => {
        element.classList.remove('track-list__active');
    });
}

const changeAudioLine = () => {
    audioLine.value = audioPlayer.currentTime * 100 / audioPlayer.duration;
    const value = audioLine.value;
    audioLine.style.background = `linear-gradient(to right, rgb(169 18 18) 0%, rgb(169 18 18) ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
    
    let minutes = Math.floor(audioPlayer.currentTime / 60);
    let seconds = Math.floor(audioPlayer.currentTime - minutes * 60);
    let minutesVal = minutes;
    let secondsVal = seconds;

    let generalMin = Math.floor(audioPlayer.duration / 60);
    let generalSec = Math.floor(audioPlayer.duration - generalMin * 60);
    let generalMinVal = generalMin;
    let generalSecVal = generalSec;

    if (generalMin < 10) {
        generalMinVal = '0' + generalMin;
    }

    if (generalSec < 10) {
        generalSecVal = '0' + generalSec;
    }

    if (minutes < 10) {
        minutesVal = '0' + minutes;
    }

    if (secondsVal < 10) {
        secondsVal = '0' + seconds;
    }

    audioTime.innerHTML = `${minutesVal}:${secondsVal} / ${generalMinVal}:${generalSecVal}`;
}

audioPlayer.ontimeupdate = changeAudioLine;

const rewindAudioLine = () => {
    let lineWith = audioLine.offsetWidth;
    let offsetTrack = event.offsetX;
    let position = offsetTrack * 100 / lineWith;
    audioPlayer.currentTime = (position * Math.floor(audioPlayer.duration) / 100);
}

const addPlayList = async () => {
    const list = 'js/modules/audio.json';
    const res = await fetch(list);
    const data = await res.json();

    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.classList.add('track-list');
        li.setAttribute('data-set', `${i}`);
        li.innerHTML = `${data[i].title}`;
        playList.appendChild(li);
    }
}

addPlayList();

audioPlayer.addEventListener('ended', function() {
    play.classList.toggle('pause');
    playNextTrack();
})




playList.onclick = async function(event) {
    console.log(playList);
    let target = event.target;
    counter = +(target.dataset.set);
    
    const list = 'js/modules/audio.json';
    const res = await fetch(list);
    const data = await res.json();
    clearTrack();
    if (counter >= 0) {
        audioPlayer.src = `${data[counter].src}`;
        addPlay();
    } else {
        counter = 5;
        audioPlayer.src = `${data[counter].src}`;
        addPlay();
    }
}

playNext.addEventListener('click', function() {
    playNextTrack();
})

playPrev.addEventListener('click', function() {
    playPrevTrack();
})

play.addEventListener('click', function() {
    Audio.currentTime = 0;
    addPlay();
})

audioLine.addEventListener('click', function() {
    rewindAudioLine();
})

audioLine.addEventListener('input', function() {
    let value = this.value;
    this.style.background = `linear-gradient(to right, rgb(169 18 18) 0%, rgb(169 18 18) ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
})


volumeLine.addEventListener('input', function() {
    changeVolumeLine();
    let value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
    if (value == 0) {
        microphone.classList.add('mute');
    } else {
        microphone.classList.remove('mute');
    }
})

const changeVolumeLine = () => {
    audioPlayer.volume = volumeLine.value / 100;
}

const addMute = () => {
    const valueMute = 0;

    if (audioPlayer.muted === false) {
        audioPlayer.muted = true;
        volumeLine.value = valueMute;
        volumeLine.style.background = `linear-gradient(to right, rgb(169 18 18) 0%, rgb(169 18 18) ${valueMute}%, #C4C4C4 ${valueMute}%, #C4C4C4 100%)`;
        microphone.classList.toggle('mute');
    } else {
        audioPlayer.muted = false;
        volumeLine.value = valueB;
        volumeLine.style.background = `linear-gradient(to right, rgb(169 18 18) 0%, rgb(169 18 18) ${valueB}%, #C4C4C4 ${valueB}%, #C4C4C4 100%)`;
        microphone.classList.toggle('mute');
    }
}

microphone.addEventListener('click', function() {
    addMute();
})
