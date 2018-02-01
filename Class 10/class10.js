console.log('linked');

// var pass  = document.getElementById('pass');
// var btn = document.getElementById('btn');
// var res = document.getElementById('result1');
// var res2 = document.getElementById('result2');
// var res3 = document.getElementById('result3');
// var res4 = document.getElementById('result4');
//
// var r1 = document.getElementById('r1');
// var r2 = document.getElementById('r2');
//
//  var lc = document.getElementById('loc');
//
//
// btn.addEventListener("click", function(){
//
// })
//
// btn.onclick = function() {
// pass.value=='123' ? res.innerHTML = 'you are logged in' : res.innerHTML = 'password failed';
// r1.checked == true ? res2.innerHTML = "You are a memeber of the staff" : res2.innerHTML = "You are not staff";
// r2.checked == true ? res3.innerHTML = "You are a client" : res3.innerHTML = "You are not a client";
// }

// lc.addEventListener('change', function(){
//   var x = lc.value;
//   alert('Change is gonna come' + x)
// });


var wp = document.getElementById('wordpad');

document.body.addEventListener('keypress',function(e){
  console.log(e.keyCode);
  var x = e.keyCode;
  var y = String.fromCharCode(x);
  var z = [];
  z.push(y);
  wp.innerHTML += z;


})
