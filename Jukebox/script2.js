console.log('lets 2 rock');

// Get all of the tracks and make them js Audio elements
let track1 = new Audio('./music/01 The King of Carrot Flowers, Pt. 1.mp3');
let track2 = new Audio('./music/08 Oh Comely.mp3');
let track3 = new Audio('./music/03 In the Aeroplane Over the Sea.mp3');
let track4 = new Audio('./music/Easy Easy.mp3');
let track5 = new Audio('./music/Neptune Estate.mp3');
let track6 = new Audio('./music/Out Getting Ribs.mp3');
let track7 = new Audio('./music/03 Youth.mp3');

//Create array of track collection
let tracks = [track1,track2,track3,track4,track5,track6,track7];
// console.log(tracks);
var Music = function(songTitle,songArtist,track,index) {
  this.songTitle = songTitle.split('<',1);
  this.songArtist = songArtist;
  this.track = track;
  this.index = parseInt(index);
  this.htmlLink = songs[index];
  this.nextIndex = parseInt(index) + 1;
  this.prevIndex = parseInt(index) - 1;
}


//get array of all objects with song class, i.e. all of the listed songs in the mother ul
let songs = document.getElementsByClassName('song');
//get the player element which will contain the title of the song
let songTitleHolder = document.getElementById('songTitle');
//get the player element which will contain the artist of the song
let songArtistHolder = document.getElementById('songArtist');
// define two empty variables for global context
// current track will contain a reference to whatever the most recently chosen track is
// so that we can control it, i.e. pause and play the selected track. Current index
// gets the position of the current track in the tracks array. This gives us the
// neseceary information to move backwards and forwards through our track list
let currentTrack,currentIndex;
// array container for my objects
let musicList = [];
let songQueue = [];
let playBtns = document.getElementsByClassName('inlinePlay');
let queueBtns = document.getElementsByClassName('queue');
let randBtn = document.getElementById('randBtn');

for (var i = 0; i < songs.length; i++) {
  let x = parseInt(songs[i].dataset.index) - 1;
  this['musicItem'+i] = new Music(songs[i].innerHTML,songs[i].dataset.artist,tracks[i],x);
  musicList.push(this['musicItem'+i]);
}

for (let i in playBtns) {
  // loop for every element in playBtns
  playBtns[i].onclick = function(){
    // assign values from object i to the artist and song name elements in the player
    songTitleHolder.innerHTML = musicList[i].songTitle;
    songArtistHolder.innerHTML = musicList[i].songArtist;
    // get the current index of the selected object
    currentIndex = musicList[i].index;
  if (currentTrack) {
    // if their is a predefined element as the current track we pause that track
    currentTrack.pause();
    // and then we set the playback of the song to the beginning
    currentTrack.currentTime =0;
  }
  // we play the selected track based the index of the object in the musicList array which
  // corresponds to the playBtns.
  musicList[i].track.play()
  // then we assign the selected track as our current track for future reference
  currentTrack = musicList[i].track;
  }
}

// controler button definitions
var playBtn = document.getElementById('play');
var pauseBtn = document.getElementById('pause');
var nxtBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');

playBtn.addEventListener('click',function(){
  // if we have a track selected, play that track, else, get the first track in
  // the playlist and play that.
  if (currentTrack) {
    currentTrack.play()
  } else {
    // tracks[0] is the first track in the playlist
    tracks[0].play();
    // append info from the songs list to the player to show what song is playing
    songTitleHolder.innerHTML = musicList[0].songTitle;
    songArtistHolder.innerHTML = musicList[0].songArtist;
    currentIndex = musicList[0].index;
    // set selected track to current track
    currentTrack = musicList[0].track;
  }


})

pauseBtn.addEventListener('click',function(){
  // get whatever we've assigned as the current track and pause it
  currentTrack.pause();
})

nxtBtn.addEventListener('click',function(){
  // using the track index to get the relative position of the current track
  // and then by adding one to the index call the next element in the array.
  if (currentTrack) {
    // if their is something playing, pause that thing by calling currentTrack
    // and reset that track to the start
    currentTrack.pause();
    currentTrack.currentTime = 0;
    // get a variable for the position in the index which is one more than the current index
    let nextCall = parseInt(currentIndex) + 1;
    if (tracks[nextCall]) {
      // if the song called by the current index + 1 exists then switch all the typical stuff
      // console.log(nextCall);
      currentTrack = tracks[nextCall];
      // it got a little wordy here, I'm trying to call the nextIndex value of the object
      // currently
      songTitleHolder.innerHTML = musicList[musicList[currentIndex].nextIndex].songTitle;
      songArtistHolder.innerHTML = musicList[musicList[currentIndex].nextIndex].songArtist;
      currentTrack.play();
      currentIndex++;
    }

  }
})


prevBtn.addEventListener('click',function(){
  // same deal as next button but the position in the array is found by subtracting one,
  // remember to check if it can exist or you may throw errors
  if (currentTrack) {
    currentTrack.pause();
    currentTrack.currentTime = 0;
    let nextCall = parseInt(currentIndex) - 1;
    if (tracks[nextCall]) {
      currentTrack = tracks[nextCall];
      songTitleHolder.innerHTML = musicList[musicList[currentIndex].prevIndex].songTitle;
      songArtistHolder.innerHTML = musicList[musicList[currentIndex].prevIndex].songArtist;
      currentTrack.play();
      currentIndex--;
    }

  }
})

// take the desired queue element and write a promise for when the lead element is completed,
// the function takes the first element in a queue array, makes a promise to play it on the current
// songs completion, plays it then pushes it from the array, and calls the function again. The funtion
// checks the length of the queue before fireing, if their is nothing left in the queue, it will not fire.

var queueExecuter = function(x){
    let nextTrackInQueue = x[0];
    currentTrack.onended = function(){
      if (songQueue.length > 0) {
      return new Promise((resolve,reject)=>{
      resolve(nextTrackInQueue);


    }).then(y=>{
      y.track.play();
      currentTrack = y.track;
      currentIndex = y.index;
      songTitleHolder.innerHTML = y.songTitle;
      songArtistHolder.innerHTML = y.songArtist;

      songQueue.shift();
      queueExecuter(songQueue);

    })
  }
  }

}

// write a loop for all of the queue buttons, add event listeners to each,
// if a track is currently playing, push the desired item to a queue array,
// else just play the thing! who wants to wait around?
for (let i in queueBtns) {
  queueBtns[i].onclick = function(){
    if (currentTrack) {

      songQueue.push(musicList[i]);

    } else {

      songTitleHolder.innerHTML = musicList[i].songTitle;
      songArtistHolder.innerHTML = musicList[i].songArtist;

      musicList[i].track.play();

      currentTrack = musicList[i].track;
      currentIndex = musicList[i].index;

    }

    queueExecuter(songQueue);
  }
}

randBtn.onclick = function(){
  let rand = Math.floor(parseInt(songs.length)*Math.random());
  if (currentTrack) {

    currentTrack.pause();
    currentTrack.currentTime = 0;
    }

    currentTrack = musicList[rand].track;
    currentIndex = musicList[rand].index;
    songTitleHolder.innerHTML = musicList[rand].songTitle;
    songArtistHolder.innerHTML = musicList[rand].songArtist;

    currentTrack.play();


}
