console.log('lets rock');

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

//get array of all objects with song class, i.e. all of the listed songs in the mother ul
let songs = document.getElementsByClassName('song');
//get the player element which will contain the title of the song
let songTitle = document.getElementById('songTitle');
//get the player element which will contain the artist of the song
let songArtist = document.getElementById('songArtist');
// define two empty variables for global context
// current track will contain a reference to whatever the most recently chosen track is
// so that we can control it, i.e. pause and play the selected track. Current index
// gets the position of the current track in the tracks array. This gives us the
// neseceary information to move backwards and forwards through our track list
let currentTrack,currentIndex;

for (let i in songs) {
  // loop for every element in songs
  songs[i].onclick = function(){
    // assign values to the artist and song name elements in the player
    songTitle.innerHTML = this.innerHTML;
    songArtist.innerHTML = this.dataset.artist;
    // get the current index of the selected song
    currentIndex = this.dataset.index;
  if (currentTrack) {
    // if their is a predefined element as the current track we pause that track
    currentTrack.pause();
    // and then we set the playback of the song to the beginning
    currentTrack.currentTime =0;
  }
  // we play the selected track based on matching the index of where we are in Songs
  // to where the track is in tracks. By organizing them in the same order where song[1]
  // corresponds to track 1, we can seamlessly apply the click event and teather the
  // correct audio object
  tracks[i].play();
  // then we assign the selected track as our current track for future reference
  currentTrack = tracks[i];
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
    songTitle.innerHTML = songs[0].innerHTML;
    songArtist.innerHTML = songs[0].dataset.artist;
    currentIndex = songs[0].dataset.index;
    // set selected track to current track
    currentTrack = tracks[0];
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
  // same deal as next button but the position in the array is found by subtracting one,
  // remember to check if it can exist or you may throw errors
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
