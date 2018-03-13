var player;
var playlistHappy = [];
var playlistSad = [];
var playlists = [playlistHappy,playlistSad];
var currentlyPlaying;
var currentIndex;


// Step 1 initialize our sc key -----------------------------------------------------/

var play = document.querySelector("#play");
SC.initialize ({
 client_id: 'ebe2d1362a92fc057ac484fcfb265049'
});

// Step 2 write constructor -----------------------------------------------------/

let Track = function(id,html,index,dur,details,playlist) {
  // ID calls specific track from playlist. Used to stream and play
  this.id = id;
  // HTML links to html element for displaying information and clicking to switch songs
  this.html = html;
  // Index is a local index of the song. Used to move backwards and forwards through array of songs
  this.index = index;
  // Durr is duration of song, used to create the timeout that will trigger next song transition
  this.dur = dur;
  // Details includes all of the additional attributes of the song, including title, artist (link to artist), genre,
  // href to artwork. Added as an array.
  this.details = details;
  // Playlist indicates which playlist our track is a part of
  this.playlist = playlist;
}

// NOTE need to adjust for true dynamic playlist pull by adding a promise that creates the li track holders
// when the playlist is loaded so that there are always the right amount of list


// Step 3 get data -----------------------------------------------------/

let stack = [];
var getSongs = new Promise(function(resolve,reject){
// Call both sets of data
$.getJSON('http://api.soundcloud.com/playlists/468828561?client_id=ebe2d1362a92fc057ac484fcfb265049',function(data){
  stack.push(data['tracks']);
});

$.getJSON('http://api.soundcloud.com/playlists/468763257?client_id=ebe2d1362a92fc057ac484fcfb265049',function(data){
  stack.push(data['tracks']);
});

// write an interval which repeatedly checks if the length of my array stack is 2.
//If yes, resolve the promise, clear the interval
let check = setInterval(function(){
  console.log(stack.length);
  if (stack.length == 2) {
    resolve(stack);
    clearInterval(check);
  }
},250);

// Step 4 create custom objects -----------------------------------------------------/
}).then(x=>{

  // full data set
  console.log(x);
  // first element in the data set
  let thisPlaylist = x[0];
  console.log(thisPlaylist.length)
  for (let i=0;i<thisPlaylist.length;i++) {
    // Create object constructor loop

    // Test if the details about the track exist. If they do, push them to an array of details with slots defined
    let thisPlaylistDetails = ['','','',''];

    // Calls title of first element, always assigned to position 0
    if (thisPlaylist[i].title) {
      thisPlaylistDetails[0]=thisPlaylist[i].title;
    }
    // Calls username of account that posted song. NOTE Not sure about a more exact way of getting 'artist' persay
    // always assigned to position 1
    if (thisPlaylist[i].user.username) {
      thisPlaylistDetails[1]=thisPlaylist[i].user.username;
    }
    // Calls genre
    // always assigned to position 2
    if (thisPlaylist[i].genre) {
      thisPlaylistDetails[2]=thisPlaylist[i].genre;
    }

    // Calls artwork url
    // always assigned to position 3
    if (thisPlaylist[i].artwork_url) {
      thisPlaylistDetails[3]=thisPlaylist[i].artwork_url;
    }

    // window[] will define a variable with a variable. this allows for dynamic
    // variable name generation so that we can make a boatload of objects with our constructor
    // otherwise we would have to manually give each object a unique name.
    // within the brackets you can evaluate functions, concatonation and all the typical
    // coding things we love so dearly. Here I add the string 'track' to the current
    // index of the loop to ensure different names each time.
    window['track'+i] = new Track(
      // get song id
      thisPlaylist[i].id,
      // get the html element which is the grandchild of list1 and has index i
      $('#list1').children().children().eq(i),
      // index
      i,
      // get durration of the song so that we can start next song after this song is completed
      thisPlaylist[i].duration,
      // additional details
      thisPlaylistDetails,
      // which playlist the track is in
      'playlistHappy'
    )
    playlistHappy.push(window['track'+i]);
    // End of First Loop
  }
  console.log(playlistHappy);


  // start second Loop
  // get what index we left off at so that we dont name our objects the same thing
  let lastTrack = thisPlaylist.length;
  // get second half of data
  thisPlaylist = x[1];
  for (let i=0;i<thisPlaylist.length;i++) {
    // Create object constructor loop

    // Test if the details about the track exist. If they do, push them to an array of details, with specific spots defined
    let thisPlaylistDetails = ['','','',''];

    // Calls title of first element, always assigned to position 0
    if (thisPlaylist[i].title) {
      thisPlaylistDetails[0]=thisPlaylist[i].title;
    }
    // Calls username of account that posted song. NOTE Not sure about a more exact way of getting 'artist' persay
    // always assigned to position 1
    if (thisPlaylist[i].user.username) {
      thisPlaylistDetails[1]=thisPlaylist[i].user.username;
    }
    // Calls genre
    // always assigned to position 2
    if (thisPlaylist[i].genre) {
      thisPlaylistDetails[2]=thisPlaylist[i].genre;
    }

    // Calls artwork url
    // always assigned to position 3
    if (thisPlaylist[i].artwork_url) {
      thisPlaylistDetails[3]=thisPlaylist[i].artwork_url;
    }

    // define the variable as the index of the loop (0-3) plus the last index from the first loop (lastTrack)
    window['track'+(i+lastTrack)] = new Track(
      // get song id
      thisPlaylist[i].id,
      // get the html element which is the grandchild of list1 and has index i
      $('#list2').children().children().eq(i),
      // index
      i,
      // get durration of the song so that we can start next song after this song is completed
      thisPlaylist[i].duration,
      // additional details
      thisPlaylistDetails,
      // which playlist this track belongs to
      'playlistSad'
    )
    playlistSad.push(window['track'+(i+lastTrack)]);
    // End of First Loop
  }
  console.log(playlistSad);
}).then(x=>{

  // Step 5 manipulate objects -----------------------------------------------------/
  // NOTE Wrapped in a then function because it requires data fetch -> object creation to be functional

  for (let i=0; i<$('.songItem').length; i++) {
    // get the object paired with the HTML
    let currentObject = window['track'+i];
    // Add all of the string elements to a series of spans inside the li
    let newHtml = `<span class='title'>${currentObject.details[0]}</span> <span class='artist'>${currentObject.details[1]}</span> <span class='genre'>${currentObject.details[2]}</span>`
    // if their is a data entry for the image source push it, else leave it alone
    if (currentObject.details[3].length > 0) {
      $('.songItem').eq(i).attr('data-imgsrc',currentObject.details[3]);
    }
    // append the html string from before into the html element
    $('.songItem').eq(i).append(newHtml);

    // assign click event to element
    $('.songItem').eq(i).click(function(){
        currentlyPlaying = undefined;
        currentIndex = undefined;
        // clearInterval(songDuration);
        // streams the track, establishes currentlyPlaying, continues playing playlist
        // launch player function
        queue(currentObject);
      });
      // End click event
  };
  // End loop

  // NOTE preloader would end here

});



// Step 6 write play controller --------------------------------------------------/

function queue(x) {

  var keepPlaying = new Promise((resolve,reject)=>{
    // if there is a song currently playing, add one to the current index to access the
    // next song
    if (currentlyPlaying) {
      currentIndex++;
      // dynamic name template. Adds one to current index, pulls the object with corresponding
      // index in the local array
      currentlyPlaying = window[currentlyPlaying.playlist][currentIndex];
    } else {
      // if there is nothing currentlyPlaying, make this thing the currentlyPlaying song
      // make this index the current index
      currentlyPlaying = x;
      currentIndex = currentlyPlaying.index;
    }

    // SC protocol for playing. starts track from begining
    SC.stream("/tracks/"+currentlyPlaying.id).then(function(player) {
      // takes its own variable, assigns it to myPlayer NOTE may be reserved, I dont really
      // know why this is like this. possible queuing functionality yet to be discovered
    myPlayer = player;
    myPlayer.play();

    });
    // set an interval to check on the status of the player. If player returns true to is ended
    // resolve the promise
    var onEnded = setInterval(function(){
      if (myPlayer.isEnded()) {
      resolve();
      }
    },250);


  }).then(function(){
    // if we are at the end of our current playlist, end the promise loop, otherwise, launch the
    // promise again. Clear the interval.
    // clearInterval(onEnd);
    console.log('resolve triggers in then');
    if ((currentIndex + 1) >= currentlyPlaying.playlist.length || currentIndex < 0) {
      currentlyPlaying = undefined;
      currentIndex = undefined;
      return;
    } else {
      // launch function again with promise
      queue();
    }
  });
// End Promise
};
// end function




// Step 7 write interface links -------------------------------------?


var pauseBtn = $('#pause');
var playBtn = $('#play');
var nextBtn = $('#next');
var prevBtn = $('#prev');
var stopBtn = $('#stop');
var shufBtn = $('#shuffle');
// NOTE the soundcloud api is grabbing my variables before i link them to html. Very strange.
// all this jquery on top ^^^ is acutally not linked

play.addEventListener("click", function(){
  if (currentlyPlaying) {
    // play whatever is in the player
    myPlayer.play()
  } else {
    // NOTE on playlist prompt we need to push a varaible to let the play button know which array to play from.
    // currentlyPlaying = window[aPlaylistVariable][0]

    // play first item in chosen playlist;
    currentlyPlaying = playlistHappy[0];
    // I subtract 1 from the index because if queue sees that their is a currently playing object
    // like the one i just defined, it will add 1 to the index. to level this out, we subtract one from the index

    currentIndex = (currentlyPlaying.index - 1);

    queue(currentlyPlaying);

  }

});

pause.addEventListener("click", function(){
myPlayer.pause();
});

next.addEventListener("click", function(){
  if (currentlyPlaying) {
    // play whatever is in the player
    myPlayer.pause();
    queue(currentlyPlaying);
  } else {
    // NOTE on playlist prompt we need to push a varaible to let the play button know which array to play from.
    // currentlyPlaying = window[aPlaylistVariable][0]

    // play first item in chosen playlist;
    currentlyPlaying = playlistHappy[0];
    // I subtract 1 from the index because if queue sees that their is a currently playing object
    // like the one i just defined, it will add 1 to the index. to level this out, we subtract one from the index

    currentIndex = (currentlyPlaying.index - 1);

    queue(currentlyPlaying);

  }

});

prev.addEventListener("click", function(){
  if (currentlyPlaying) {
    // play whatever is in the player
    myPlayer.pause();
    // decrease index by two, it will have one added in the queue, effectively traverses backwards without having to write another code
    // for the queuing function.
    currentIndex = (currentlyPlaying.index - 2);

    queue(currentlyPlaying);
  } else {
    // NOTE on playlist prompt we need to push a varaible to let the play button know which array to play from.
    // currentlyPlaying = window[aPlaylistVariable][0]

    // play first item in chosen playlist;
    currentlyPlaying = playlistHappy[0];
    // I subtract 1 from the index because if queue sees that their is a currently playing object
    // like the one i just defined, it will add 1 to the index. to level this out, we subtract one from the index

    currentIndex = (currentlyPlaying.index - 1);

    queue(currentlyPlaying);

  }

});
