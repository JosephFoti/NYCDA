console.log('lets rock');


let track1 = new Audio('./music/01 The King of Carrot Flowers, Pt. 1.mp3');
let track2 = new Audio('./music/08 Oh Comely.mp3');
let track3 = new Audio('./music/03 In the Aeroplane Over the Sea.mp3');
let track4 = new Audio('./music/Easy Easy.mp3');
let track5 = new Audio('./music/Neptune Estate.mp3');
let track6 = new Audio('./music/Out Getting Ribs.mp3');
let track7 = new Audio('./music/03 Youth.mp3');


let tracks = [track1,track2,track3,track4,track5,track6,track7];
console.log(tracks);

let songs = document.getElementsByClassName('song');
let songTitle = document.getElementById('songTitle');
let songArtist = document.getElementById('songArtist');
let currentTrack,currentIndex;
let matching = {};

for (let i in songs) {
  songs[i].onclick = function(){
    songTitle.innerHTML = this.innerHTML;
    songArtist.innerHTML = this.dataset.artist;
    currentIndex = this.dataset.index;
  if (currentTrack) {
    currentTrack.pause();
    currentTrack.currentTime =0;
  }
  tracks[i].play();
  currentTrack = tracks[i];
  }
}

var playBtn = document.getElementById('play');
var pauseBtn = document.getElementById('pause');
var nxtBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');

playBtn.addEventListener('click',function(){
  if (currentTrack) {
    currentTrack.play()
  } else {
    tracks[0].play();
    songTitle.innerHTML = songs[0].innerHTML;
    songArtist.innerHTML = songs[0].dataset.artist;
    currentIndex = songs[0].dataset.index;
    currentTrack = tracks[0];
  }

})

pauseBtn.addEventListener('click',function(){
  currentTrack.pause();
})

nxtBtn.addEventListener('click',function(){
  if (currentTrack) {
    currentTrack.pause();
    currentTrack.currentTime = 0;
    let nextCall = parseInt(currentIndex) + 1;
    if (tracks[nextCall]) {
      console.log(nextCall);
      currentTrack = tracks[nextCall];
      songTitle.innerHTML = songs[nextCall].innerHTML;
      songArtist.innerHTML = songs[nextCall].dataset.artist;
      currentTrack.play();
      currentIndex++;
    }

  }
})


prevBtn.addEventListener('click',function(){
  if (currentTrack) {
    currentTrack.pause();
    currentTrack.currentTime = 0;
    let nextCall = parseInt(currentIndex) - 1;
    if (tracks[nextCall]) {
      currentTrack = tracks[nextCall];
      songTitle.innerHTML = songs[nextCall].innerHTML;
      songArtist.innerHTML = songs[nextCall].dataset.artist;
      currentTrack.play();
      currentIndex--;
    }

  }
})
