export class Audio {
  audioFlag: boolean;
  constructor() {
    this.audioFlag = true;
  }

  playMusic() {
    const audioPlayer = document.getElementById('beep') as HTMLAudioElement;
    this.audioFlag = false;

    if (audioPlayer.paused) {
      audioPlayer.play();
      this.addActiveBtn();
    } else {
      audioPlayer.pause();
      this.addActiveBtn();
    }
  }

  addActiveBtn() {
    const audioBtn = document.querySelectorAll('.audio');

    audioBtn.forEach(element => {
      element.classList.toggle('audio_active');
    });
  }
}