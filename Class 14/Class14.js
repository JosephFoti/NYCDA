// class Car {
//   constructor(color,make,miles,year) {
//     this.color = color;
//     this.make = make;
//     this.miles = miles;
//     this.year = year;
//   }
// }
//
// class SportsCar extends Car {
//   // NOTE extends links subclass to class
//   constructor(color,make,miles,year) {
//     super(color,make,miles,year);
//     this.door = 2;
//     // NOTE super refers to parent class
//   }
// }
//
// var mySportsCar = new SportsCar('red','ferrari',232,2018);
// console.log(mySportsCar.door);
// console.log(mySportsCar.make);
//
// class House {
//   constructor(doors,windows) {
//     this.doors = doors;
//     this.windows = windows;
//   }
// }
//
// class Room extends House{
//   constructor(doors,windows,type,sqrft,closet) {
//     super(doors,windows);
//     this.type = type;
//     this.sqrft = sqrft;
//     this.closet = closet;
//     this.setDoors = function(newDoors){
//     this.doors = newDoors;
//     }
//   }
// }
//
// var bedroom = new Room(2,1,'bedroom',340,true);
//
// console.log(bedroom.type);
// console.log(bedroom.setDoors(5));
// console.log(bedroom.doors);
//
//

$(document).ready(function(){


$('button').click(function(){
  if ($('#fade').is(':visible')) {
    $('#fade').fadeOut();
  } else {
    $('#fade').fadeIn();
  }
  $('#hide').hide(5000);
  $('img').slideUp(1000);
  $('img').slideDown(1000);
});

$('h1').css("color","red");
$('h1').css({
  color:'green',
  textDecoration: 'underline'
});

$('.exerciseWrap').css({
  backgroundColor:'gray',
  height:'0px',
  overflow:'scroll',
  position:'absolute',
  width:'100vw',
  top:'0px',
  left:'0px'
 })
$('.exerciseWrap').children().hide();

$(document).click(function(){
  $('html,body').css('overflow','hidden');
  $('.exerciseWrap').animate({
    height:"100vh"
  },1000);

  var x = 0;

  $('.exerciseWrap').children().each(function(){
    let y = $(this).children()
    console.log($(this));

    setTimeout(function(){
      $(y).show();
      $(y).fadeIn(1000);
      console.log('loop');
    },x);
    x += 1000;
  });

});





});
