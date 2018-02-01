

var usr = document.getElementById('usr');
var pwr = document.getElementById('pwr');
var eml = document.getElementById('eml');
var btn = document.getElementById('btn');
var resp = document.getElementById('resp');
var kt = document.getElementById('keyTrack');

btn.onclick = function() {
  var check = [false,false];
  resp.innerHTML = ' ';

  if (resp.innerHTML.length > 0) {
    console.log('cheers!');
    // console.log(check[0]+" "+check[1]);
  }

  (pwr.value == '12345678') ? check[0] = true : resp.innerHTML += "Password Incorrect" ;
  var x = false;

  for (var i = 0; i < usr.value.length; i++) {
    var int = parseInt(usr.value[i]);
    if (int) {
      console.log(usr.value[i]);
      // resp.innerHTML += " and user has a number"
      check[1] = true;
      x = true;
      break
    }
  }

  if (x == false && check[0] == false ) {
    resp.innerHTML += " and username does not have a number"
  } else if (x == false && check[0] == false ) {
    resp.innerHTML = 'username does not have a number';
  } else {
    // check[1] = true;
  }

  if (check[0]&&check[1]) {
    resp.innerHTML = 'Log in successful'
  } else if (!check[0] && !check[1]) {
    alert('Credentials Incorrect')
  }



}


document.body.addEventListener('keypress',function(e){
  var x = String.fromCharCode(e.keyCode)
  kt.innerHTML += x;


})
