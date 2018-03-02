console.log('hello');


let h1 = document.getElementById('home');
h1.addEventListener('click',function(){
  alert(h1.innerHTML);
});

$('h1').attr('class','Hello')


$('#input').on('keydown',function(){
 let x = $('#input').val();
  if ($('#input').val().length >= 3) {
    $.ajax({
       url: 'http://www.omdbapi.com/?apikey=9ca25e95&t='+x,
       success: function(response){
         console.log(response);
         console.log(response.Actors);
         $("#omdbPoster").attr('src',response.Poster);
         $("#omdbTitle").html(response.Title);
         $("#omdbActors").html(response.Actors);
         $("#omdbYear").html(response.Year);
       }
     });
  }



});

// var arr = ["nissan",'toyota','honda'];
//
// var newArr = arr.map(x=>{
//   return x.toUpperCase();
// })
//
// console.log(newArr);
//
//
// function isEven(x) {
//   if(x%2 > 0) {
//     console.log('odd');
//   } else {
//     console.log('even');
//   }
// }
//
// var arr1 = [6,3,6,8,2];
//
// var arr1total = arr1.reduce((x,y)=>x+y);
// var arr1length = arr1.length;
//
// console.log(arr1total/arr1length);
//
// console.log(Math.max(...arr1))
//
// var maxGet = (x)=>{
//   return Math.max(...x);
// }
//
// // es6 function declaration
// // var foo = (x) => return bar;
//
// var arr3 = [3,8,34,20,45];
//
// var numsUnder20 = arr3.filter(x=>{return x > 10 && x < 40});
// console.log(numsUnder20);
//
// var thd = 'third';
// var cars ={
//   second:'toyota',
//   third:'honda'
// }
//
// let state = 0;
//
// function flash() {
//   if (state===0) {
//     console.log('green');
//     state++
//   } else if(state===4) {
//     console.log('yellow');
//     state++
//   } else if(state===6){
//     console.log('red');
//     state++
//   } else {
//     state++
//   }
//   if (state >10) {
//     state = 0;
//   }
// }
// setInterval(flash,1000);

// var diff = (x,y)=>{console.log(Math.abs(x-y))};
//
// var myString = (x)=>{
//   str = '';
//   for (let i=0;i<10;i++) {
//     for (let j=0;j<10;j++) {
//       str += x;
//     }
//     str += '\n'
//   }
//   console.log(str);
// }


var myString2 = (x)=> {
  var str = '';
  for (var i = 1; i < 11; i++) {
    for (var j = 0; j < i; j++) {
      str += x;
    }
    str += '\n';
  }
  console.log(str);
}
