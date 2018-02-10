console.log('adsfn');


// values
// element.val() gives value of input boxes
// element.is(":checked")
$(document).ready(function(){

  // $('#btn').click(function(){
  //   switch ($('#opts').val()) {
  //     case "Add":
  //     var x = parseInt($('#num1').val()) + parseInt($('#num2').val());
  //       break;
  //     case "Subtract":
  //     var x = parseInt($('#num1').val()) - parseInt($('#num2').val());
  //       break;
  //     case "Multiply":
  //     var x = parseInt($('#num1').val()) * parseInt($('#num2').val());
  //       break;
  //     case "Divide":
  //     var x = parseInt($('#num1').val()) / parseInt($('#num2').val());
  //       break;
  //   }
  //   $('#result').html(x);
  // })
  //
  // $('#btn2').click(function(){
  //     $('#result2').html('');
  //     if ($('#qty').val() == 0) {
  //       $('#qty').val(1);
  //     }
  //     $('#result2').append($('#name').val() + '<br>');
  //     $('#result2').append($('#qty').val()+" ");
  //     $('#result2').append($('#size').val()+" ");
  //
  //
  //   var size = {
  //     small: 9.99,
  //     medium: 10.99,
  //     large: 11.99
  //   }
  //
  //   if ($('#check1').is(':checked')) {
  //     $('#result2').append("cheese pizza for " + size[$('#size').val()] + "<br>");;
  //   }
  //
  //   if ($('#check2').is(':checked')) {
  //     $('#result2').append("pepperoni pizza for " + size[$('#size').val()] + "<br>");;
  //   }
  //
  //   if (!$('#check2').is(':checked') && !$('#check1').is(':checked')) {
  //     alert('Please select type of pizza')
  //   }
  //
  //   console.log($('#address').val().length);
  //
  //   if ($('#address').is(':visible') && $('#adVal').val().length > 0) {
  //     $('#result2').append("<br>to "+$('#adVal').val());
  //   } else if ($('#adVal').val().length < 1 && $('#address').is(':visible')) {
  //     alert('please enter address')
  //   }
  //
  //
  //
  // })
  //
  // $('#check3').click(function(){
  //   if ($('#address').is(':hidden')) {
  //     $('#address').show(1000);
  //   }
  // })

  // NOTE: Exercise 1 and classwork

  $('#sub').click(function(){
    $('h4').fadeIn(1000);
    setTimeout(function(){
      $('#ignore').show(1000);
    },1200)
    var age = $('#smokeAge').val();
    var more = $('#smokeAge').val();
    var rate = $('#aDay').val();
    var minutes = 365*14*rate*(age + more);
    var days = (minutes/1440).toFixed(2);
    var years = (minutes/525600).toFixed(2);
    console.log(`${minutes} minutes, ${days} days ${years} years`);
    $('#res1').html(minutes);
    $('#res2').html(years);
  });

  $('#ignore').click(function(){
    $('.igWrap').hide(250);
    $('h2').show(100);
  })




});
