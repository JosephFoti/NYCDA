
// $('document').ready(function(){
//   console.log('class 16');
//
// $('.btn').click(function(){
//   let x = $('#Farenheit').val();
//   let y = ((x-32)*(5/9)).toFixed(2);
//   $('#res').html(`${x} Farenheit is equal to ${y} Celcius`)
// })
//
// $('.drink').change(function(){
//   let drink = $('.drink').val();
//   var drinks = {
//     Wine: 123,
//     Soda: 100,
//     Beer: 180,
//     Sake: 105
//   }
//
//   $('#result').html(drinks[drink]);
// })
//
//
// })
//
// $(".bankBtn").click(function(){
//   let loan = parseInt($('#in1').val());
//   let rate = parseInt($('#in3').val())/100/12;
//   let years = parseInt($('#in2').val());
//   var pay = (rate*loan)/(1 - Math.pow((1+rate),(-(years * 12))));
//   console.log(loan);
//   console.log(rate);
//   console.log(years);
//
//   $('#bankRes').html(pay.toFixed(2));
// })

var on = false;

$('document,body').on('dblclick',function(){
  if (on) {
    on = false;
  } else {
    on = true;
  }
})

for (var i = 0; i < 325; i++) {
  $('.boxWrap').append('<div class="dragBox" id="'+i+'"></div>')
}

$('.dragBox').on('mouseenter',function(){
  if (on) {
    let color = $('.color').val();
    $(this).css('background',color);
  }
})

//
// 		n = years * 12
//
// 		P = monthly payment
// 		L = principal loan
// 		r = rate per period
// 		n = number of periods
