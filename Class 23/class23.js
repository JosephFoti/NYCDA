var arr = [1,2,3,4,5];

for (var i in arr) {
  console.log(arr[i]);
}

var timesTen = x=>{
  return x*10;
}

var intToSqr = x=>{
  return x*x;
}

var doubleLength = x=>{
  return x.length*2;
}

let number = Math.floor(Math.random()*20);
let promise = new Promise((x,y)=>{
  if (number>10) {
    x(`${number} is greater than 10`);
  } else {
    y(`${number} is less than 10`);
  }
}).then(x=>{
  console.log(x);
}).catch(x=>{
  console.log(x);
})



//
// var counter = new Promise((resolve,reject)=>{
//   let number = 1;
//   resolve(number);
// }).then(number=>{
//   number+=1;
//   return number;
// }).then(number=>{
//   number+=2;
//   console.log(number);
// });

var myPlayer;

var play = document.querySelector('#play');
var pause = document.querySelector('#pause');

SC.initialize({
  client_id: 'ebe2d1362a92fc057ac484fcfb265049'
  // redirect_uri: 'http://example.com/callback'
});


play.addEventListener('click',function(){
  console.log('asdf')
  SC.stream("/tracks/328369979").then(function(player){
   // streams the track
   console.log(player);
   myPlayer = player;
   myPlayer.play();
  });
})

pause.addEventListener('click',function(){
  myPlayer.pause();
});
