const audioPlayer = document.querySelector('audio');
const play = document.querySelector('.play');
const audioLine = document.querySelector('.audio-line');
const audioTime = document.querySelector('.audio-time');
const playList = document.querySelector('.play-list')
const playNext = document.querySelector('.play-next');
const playPrev = document.querySelector('.play-prev');

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

const addPlay = () => {
    const trackList = document.querySelector(`.track-list:nth-child(${counter + 1})`); 
    if (audioPlayer.paused) {
        audioPlayer.play();
        trackList.classList.add('track-list__active');
        trackList.classList.add('track-list__active::before');
        play.classList.add('pause');
    } else {
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

const changeAudioLine = () => {
    audioLine.value = audioPlayer.currentTime * 100 / audioPlayer.duration;
    const value = audioLine.value;
    audioLine.style.background = `linear-gradient(to right, rgb(169 18 18) 0%, rgb(169 18 18) ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
    
    let minutes = Math.floor(audioPlayer.currentTime / 60);
    let seconds = Math.floor(audioPlayer.currentTime - minutes * 60);
    let minutesVal = minutes;
    let secondsVal = seconds;

    if (minutes < 10) {
        minutesVal = '0' + minutes;
    }

    if (secondsVal < 10) {
        secondsVal = '0' + seconds;
    }

    audioTime.innerHTML = `${minutesVal}:${secondsVal}`;
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