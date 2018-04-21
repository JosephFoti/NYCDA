var playlistHappy;
var playlistNotSo;
// variables to store soundcloud playlist data

var playlistHappyObjects = [];
var playlistNotSoObjects = [];
// empty arrays for track data objects (from soundcloud);

var playlists = [playlistHappy,playlistNotSo];
// both playlists [happy and not so happy]

var tracks = document.getElementsByClassName('track');
// track html class array

var trackObjects = [];
// contains our song custom objects.

var chosenPlaylist;
// this will be set on click of playlist option
// var chosenPlaylist = playlistHappy;

// song controllers
var currentlyPlaying;
var currentIndex;

var clickCount = 0;
var ready = true;


// Sasha's Fix
function convertTime (millis) {
 var minutes = Math.floor(millis / 60000);
 var seconds = ((millis % 60000) / 1000).toFixed(0);
 return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}



// Step 1 initialize our sc key -----------------------------------------------------/

SC.initialize ({
 client_id: 'ebe2d1362a92fc057ac484fcfb265049'
});

// Step 2 write constructor -----------------------------------------------------/


// This is our 'roadmap', object constructor taking three properties
var Song = function(html,individualTrackData,index){

  this.html = html;
  if (individualTrackData['user']['username']) {
    this.artist = individualTrackData['user']['username'];
  };
  if (individualTrackData['user']['permalink_url']) {
    this.artistUrl = individualTrackData['user']['permalink_url'];
  };
  if (individualTrackData["description"]) {
    this.description = individualTrackData["description"];
  };
  if (individualTrackData["genre"]) {
    this.genre = individualTrackData["genre"];
  };
  if (individualTrackData["artwork_url"]) {
    this.link = individualTrackData["artwork_url"];
  };

  this.title = individualTrackData["title"];
  this.id = individualTrackData["id"];
  this.duration = convertTime(individualTrackData["duration"]);

  this.index = index;
  // console.log('hey im not special! im just a function!');

}

// Step 3 get data -----------------------------------------------------/

$.getJSON('http://api.soundcloud.com/playlists/468828561?client_id=ebe2d1362a92fc057ac484fcfb265049',function(data){
  playlistHappy = data['tracks'];
  // soundcloud api, gets json data for the playlist information for playlistHappy
});

$.getJSON('http://api.soundcloud.com/playlists/468763257?client_id=ebe2d1362a92fc057ac484fcfb265049',function(data){
  playlistNotSo = data['tracks'];
  // soundcloud api, gets json data for the playlist information for playlistNotSo
});

var promise = new Promise(function(resolve, reject) {

  let check1 = setInterval(function(){
  if (playlistHappy && playlistNotSo) {
    // is playlist data available for both playlists
    clearInterval(check1);
    // stop the check interval function
    resolve();
    // finished the promise
  } else {
  console.log("Error getting playlist.");
  }
  },250);

}).then(function(x){
  // Step 4 create custom objects -----------------------------------------------------/

  // for loop that we created to go through the array of playlist happy and create our custom objects Song.
  for (let i=0;i<playlistHappy.length;i++) {

    window['song'+i] = new Song(tracks[i],playlistHappy[i],i);
    window['song'+i].playlist = 'playlistHappy';
    // Creating a variable in the window that is the equivalent of the string 'song' + the current index of the loop and
    // assigning it to all our future objects.

    trackObjects.push(window['song'+i]);
    // push this custom object into an array with the added parameter of playlist
    playlistHappyObjects.push(window['song'+i]);
    // push this custom object into an array of song objects separated by playlist

    // repeated object creation process for each element in an array of soundcloud track data.
  }

  // loop again for our second playlist 'notsohappy'
  for (let i=0; i<playlistNotSo.length;i++) {

    window['song'+(i+playlistHappy.length)] = new Song(tracks[(i+playlistHappy.length)],playlistNotSo[i],(i+playlistHappy.length));
    window['song'+(i+playlistHappy.length)].playlist = 'playlistNotSo';
    // we are creating new song objects defined by

    trackObjects.push(window['song'+(i+playlistHappy.length)]);
    // pushes custom objects to trackObjects array
    playlistNotSoObjects.push(window['song'+(i+playlistHappy.length)]);
    // pushes custom objects that belong in the notso playlist
  }

}).then(function(){
  console.log(trackObjects.length);

  // Step 5 manipulate objects -----------------------------------------------------/

  // loop that goes through our master list of objects, trackObjects

  for (let i=0;i<trackObjects.length;i++) {

    // if you leave the string empty it will not change the html, if their is something defined, add data value
    // to html export.
    let curr = window['song' + i]; // let curr = song0,song1,song2...
    if (curr.genre) {
      let currGenre = curr.genre;
    } else {
      let currGenre = '';
    }
    console.log(curr.duration);
    if (curr.duration) {
      let currDuration = curr.duration;
    } else {
      let currDuration = 0;
    }
    if (curr.link) {
      let currLink = curr.link;
    } else {
      let currLink = '';
    }
    if (curr.genre) {
      let currGenre = curr.genre;
    } else {
      let currGenre = '';
    }
    let currentArtistUrl = curr.artistUrl;
    let currentHTML = curr.html;
    let currentTitle = curr.title;
    let currArtist = curr.artist;

    // html string we take all track details and assign them to spans to be inserted into discrete li html tags.
    let trackDetails = `<span class="songTitle">${currentTitle}</span><a class="currentArtistUrl" href="${currentArtistUrl}"> <span class="songArtist">${currArtist}</span></a> <span class="currDuration">${curr.duration}</span> <span class="currGenre">${curr.genre}</span>`;

    // end html prep
    // add click event

    curr.html.addEventListener('click',function(){
      // assign our current object to the currentlyPlaying variable to queue it for play onclick
        currentlyPlaying = curr;
        // assign our current objects index to our currently playling song's index for our queue function to be able to loop through existingPlaylist
        currentIndex = curr.index;

        if (clickCount > 0) {
          ready = false;
          setTimeout(function(){
            clickCount = 0;
            ready = true;
          },1250);
          if(clickCount > 5) {
            alert('woah there turbo!');
          }
        } else {
          clickCount++;
        }

        if (ready) {
          queue(currentlyPlaying);
        }
        // call our queue function which is our contains our player,

    });



    $(currentHTML).append(trackDetails);
    // print track trackDetails. Lil' bit of NOTE jQuery NOTE
  }


}).then(function(){
// joe's fix
$('.currGenre').each(function(){
  if ($(this).text()=='undefined'){
    $(this).text('');
  };

// playlistHappy;


});

});

// Step 6 write play controller --------------------------------------------------/

function queue(x){
  // function to play and queue next song, takes a full song object as x.

  // new promise
  var queuePromise = new Promise(function(resolve,reject){

  // set up a system that will play the next song in the Index
  // check if have the next song.
  // if no next song, lets loop our playlist

  // SC streams /tracks/currentlyPlaying.id
  SC.stream("/tracks/" + x.id).then(function(player) {

  myPlayer = player;
  // we define myPlayer as our player variable, so we can reference our player. The player is the soundcloud
  // controller for manipulation of playing songs. allows us to use methods such as play/pause/seek
  myPlayer.play();
  // method that plays the song from soundcloud player object.
  });

  let currPlaylist = window[currentlyPlaying.playlist];
  // create local variable assigned the value of one of the arrays of the soundcloud data stacks


  // get our data from currently playing, push it into the container for current song
  $('.currTitle').text(currentlyPlaying.artist);
  $('.currArtist').text(currentlyPlaying.title);
  $('#featImg').attr('src',currentlyPlaying.link);



  var isDone = setInterval(function(){
    // variable that stores a set interval function, that has a conditional that tests if myPlayer.isEnded returns true
    // my player.isEnded will return true if the current song in the player has the ended status code. if true it will
    // resolve the promise
    if(myPlayer.isEnded()) {
      resolve(currPlaylist);
    } else {
      // console.log('not done yet');
    }

  },1000);

  // var currentTimeSpitter = setInterval(function(){
  //   let newTime=convertTime(myPlayer.currentTime());
  //   $('#time').text(newTime);
  // },100)

  var currentTimeSpitter = setInterval(function(){
    let newTime=convertTime(Math.abs(myPlayer.currentTime() - myPlayer.getDuration()));
    let oldTime = convertTime(myPlayer.getDuration());
    $('#time').text(newTime+' / '+oldTime);
  },100)



}).then(x=>{
  console.log('resolved again');

  currentIndex++;
  // increases the index, refering to the next song in the playlist.

  // if the next song object exists and if if the song object is assigned to the same playlist
  if (window['song'+currentIndex] && window['song'+currentIndex].playlist == currentlyPlaying.playlist) {

    // get currently playing, change it to next song
    currentlyPlaying = window['song'+currentIndex];
    queue(currentlyPlaying);
  } else {
    // loop playlist
    currentIndex = x[0].index;
    currentlyPlaying = x[0];
    queue(currentlyPlaying);

  }

  clearInterval(isDone);

});

};

// Step 7 write interface links -------------------------------------/
// Creating buttons based off our HTML (Player Functionality)
var btnPlay = document.getElementById('play');
// var btnPause = document.getElementById('pause');
var btnNext = document.getElementById('next');
var btnPrev = document.getElementById('prev');
var btnShuf = document.getElementById('shuf');

btnPlay.addEventListener('click',function() {
  if (currentlyPlaying) { // IF statement checking if you there is something currently playing.
//  solution for one button for play/pause
    let switcher;
    if (myPlayer.isActuallyPlaying()) {
      myPlayer.pause()
    switcher = './Images/if_play-music-triangle-media_2203515.png';
    } else {
      myPlayer.play()
     switcher = './Images/media-pause.png';
    }
     $('#play').fadeOut(250);
 let ttp = setTimeout (function() {
   $('#play').attr("src", switcher);
   $('#play').fadeIn(250)
 },250)
  } else {
    // console.log(song0);
    currentlyPlaying = song0;
    currentIndex = song0.index;

    // If play button is pressed, playing song 0 from index of (playlistHappy).

    // multiclick protection
    if (clickCount > 0) {
      ready = false;
      setTimeout(function(){
        clickCount = 0;
        ready = true;
      },1250);
      if(clickCount > 5) {
        alert('woah there turbo!');
      }
    } else {
      clickCount++;
    }

    if (ready) {
      queue(currentlyPlaying); // calling our function to play song.
    }

  }
});

// btnPause.addEventListener('click',function() { // Call a built-in method to pause songs.
//   myPlayer.pause();
//   if (currentTimeSpitter) {
//     clearInterval(currentTimeSpitter);
//   }
// });


btnNext.addEventListener('click',function(){
  console.log(`${currentlyPlaying} with index ${currentIndex}`);
  currentIndex++;
  let rightPlaylist;

  if (currentlyPlaying.playlist == 'playlistHappy') {
    rightPlaylist = playlistHappyObjects;
  } else {
    rightPlaylist = playlistNotSoObjects;
  }

  if (window['song'+currentIndex] && window['song'+currentIndex].playlist == currentlyPlaying.playlist) {
    // loop playlist
    // get currently playing, change it to next song
    currentlyPlaying = window['song'+currentIndex];
    // currentlyPlaying =trackObjects[currentIndex]);

    queue(currentlyPlaying);
  } else {
    currentIndex = rightPlaylist[0].index;
    currentlyPlaying = rightPlaylist[0];
    queue(currentlyPlaying);
  }
  // queue()
});

btnPrev.addEventListener('click',function(){
  console.log(`${currentlyPlaying} with index ${currentIndex}`);
  currentIndex--;

  let rightPlaylist;

  if (currentlyPlaying.playlist == 'playlistHappy') {
    rightPlaylist = playlistHappyObjects;
  } else {
    rightPlaylist = playlistNotSoObjects;
  }

  if (window['song'+currentIndex] && window['song'+currentIndex].playlist == currentlyPlaying.playlist) {
    // loop playlist
    // get currently playing, change it to next song
    currentlyPlaying = window['song'+currentIndex];
    // currentlyPlaying =trackObjects[currentIndex]);

    queue(currentlyPlaying);
  } else {
    currentIndex = rightPlaylist[chosenPlaylist.length - 1].index;
    currentlyPlaying = rightPlaylist[chosenPlaylist.length - 1];
    queue(currentlyPlaying);

  }
  // queue()
});



// Step 8 Click event overlay ------------------------------/
// clear overlay, bring up correct playlist, and assign chosenPlaylist to selection

$('#happyBtn').click(function(){
  console.log(chosenPlaylist);

  if ($('.overlay').is(':visible')) {
    $('.overlay').fadeOut(500);
    $('html').css('overflow','scroll');
  }

  $('.trackHolder').eq(1).hide();
  if (chosenPlaylist == 'playlistNotSo') {
    $('.trackHolder').eq(0).fadeIn();

  }

  chosenPlaylist = 'playlistHappy';
  currentlyPlaying = playlistHappyObjects[0];
  currentIndex = playlistHappyObjects[0].index;

  queue(currentlyPlaying);
});


$('#sadBtn').click(function(){
  console.log(chosenPlaylist);

  if ($('.overlay').is(':visible')) {
    $('.overlay').fadeOut(500);
    $('html').css('overflow','scroll');
  }

  $('.trackHolder').eq(0).hide();
  if (chosenPlaylist == 'playlistHappy') {
    $('.trackHolder').eq(1).fadeIn(500);
  }

  chosenPlaylist = 'playlistNotSo';
  currentlyPlaying = playlistNotSoObjects[0];
  currentIndex = playlistNotSoObjects[0].index;

  queue(currentlyPlaying);
});

// Step 9, Get currently playing song ----------------------------------------/
