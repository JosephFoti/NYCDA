console.log("Javascript Challenges");


//     Challenge One
// Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.

console.log('Challenge 1');
console.log(' ');


var a=1,b=2;
c = a+b;

console.log(`var a is ${a}, var b is ${b}. var a plus var b is obviously... `);
console.log(c);

var d="Can't",e=" Stop me now"
f = d+e;

console.log(`var d is ${d}, var e is ${e}. the strings together make... `);
console.log(f);


//     Challenge Two
//     Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

console.log(' ');
console.log('Challenge 2');
console.log(' ');

var bands = [["The Black Keys","The Strokes","The Who"],["Kiss","ACDC","Led Zeplin"],["The Greatful Dead","The Killers"]];
var x = 'I like the bands '

for (var i1 = 0; i1 < bands.length; i1++) {
  for (var j = 0; j < bands[i1].length; j++) {
    if (j == (i1 - 1)) {
      x += 'and ' + bands[i1][j] + '.';
    } else {
      x +=  bands[i1][j] + ', ';
    }
  }
}

console.log(x);
console.log("I've seen " + bands[0][0] + " and " + bands[0][1] + ", but I haven't seen " + bands[2][0]);



//     Challenge Three
//     Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.

console.log(' ');
console.log('Challenge 3');
console.log(' ');

var x = Math.floor(Math.random()*150);
x<100 ? alert("x is less than 100") : alert(`x is ${x}, so its greater  than 100`);
x<100 ? console.log("x is less than 100") : console.log(`x is ${x}, so its greater than 100`);



//     Challenge Four
//     Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.

console.log(' ');
console.log('Challenge 4');
console.log(' ');

var nameCall = document.getElementById('nameCall');
var btn = document.getElementById('btn');


btn.onclick = function() {
  alert("your name is " + nameCall.value);
}





//     Challenge Five
//     Declare a function that returns a prize from choosing a door. 3 boxes, random prize in each of 3 subset.


//
// var d1 = document.getElementById('door1');
// var d2 = document.getElementById('door2');
// var d3 = document.getElementById('door3');
// var doors = [d1,d2,d3];
// var prizes = ["100 Used Band-aids","Four Baby Ocelotts","A New Car with old tires"];
// function door(el,pr,ind) {
//   this.element = e;
//   this.prize = pr;
//   this.index = ind;
// };
//
// for (var i = 0; i < doors.length; i++) {
//   var prz = Math.floor(Math.random()*3);
//   window["DoorObj"+i] = door(doors[i],prizes[prz],i);
//   console.log(["DoorObj"+i]);
//   prizes.splice(prz,1);
//   doors[i].addEventListener('onclick',function(){
//     alert(door[i].doorPrize);
//   });
//
// prizes = ["100 Used Band-aids","Four Baby Ocelotts","A New Car with old tires"];
// }

console.log(' ');
console.log('Challenge 5');
console.log(' ');

var d1 = document.getElementById('door1');
var d2 = document.getElementById('door2');
var d3 = document.getElementById('door3');
var resp1 = document.getElementById('resp1');

var doors = [d1,d2,d3];
var prizes = ["<strong>100 Used Band-aids</strong>","<strong>Four Baby Ocelotts</strong>","<strong>A rusty penny</strong>","<strong>A make a wish child</strong>","<strong>PTSD</strong>","<strong>Permanent Cheedo fingers</strong>","<strong>A lifetime supply of coffee filters</strong>","<strong>The socks that I'm currently wearing</strong>"];

function clearBkg(){
  for (var i = 0; i < doors.length; i++) {
    doors[i].style.background = "white";
  }
}

d1.onclick = function(){
  clearBkg();
    var prz = Math.floor(Math.random()*8);
    resp1.innerHTML = "You won "+ prizes[prz];
    door1.style.background = "#0000ff17";

    prizes.splice(prz,1);
    var otherPrize = Math.floor(Math.random()*7);
    resp2.innerHTML = "You could have won " + prizes[otherPrize] + ",";
    prizes.splice(otherPrize,1);
    var lastPrize = Math.floor(Math.random()*6);
    resp3.innerHTML = " or " + prizes[lastPrize];

prizes = ["<strong>100 Used Band-aids</strong>","<strong>Four Baby Ocelotts</strong>","<strong>A New Car with old tires</strong>","<strong>A make a wish child</strong>","<strong>PTSD</strong>","<strong>Permanent Cheedo fingers</strong>","<strong>A lifetime supply of coffee filters</strong>","<strong>The socks that I'm currently wearing</strong>"];
}

d2.onclick = function(){
  clearBkg();
    var prz = Math.floor(Math.random()*8);
    resp2.innerHTML = "You won "+ prizes[prz];
    door2.style.background = "#0000ff17";
    prizes.splice(prz,1);
    var otherPrize = Math.floor(Math.random()*7);
    resp1.innerHTML = "You could have won " + prizes[otherPrize] + ",";
    prizes.splice(otherPrize,1);
    var lastPrize = Math.floor(Math.random()*6);
    resp3.innerHTML = " or " + prizes[lastPrize];

prizes = ["<strong>100 Used Band-aids</strong>","<strong>Four Baby Ocelotts</strong>","<strong>A New Car with old tires</strong>","<strong>A make a wish child</strong>","<strong>PTSD</strong>","<strong>Permanent Cheedo fingers</strong>","<strong>A lifetime supply of coffee filters</strong>","<strong>The socks that I'm currently wearing</strong>"];
}


d3.onclick = function(){
  clearBkg();
    var prz = Math.floor(Math.random()*8);
    resp3.innerHTML = "You won "+ prizes[prz];
    door3.style.background = "#0000ff17";

    prizes.splice(prz,1);
    var otherPrize = Math.floor(Math.random()*7);
    resp1.innerHTML = "You could have won " + prizes[otherPrize] + ",";
    prizes.splice(otherPrize,1);
    var lastPrize = Math.floor(Math.random()*6);
    resp2.innerHTML = " or " + prizes[lastPrize];


prizes = ["<strong>100 Used Band-aids</strong>","<strong>Four Baby Ocelotts</strong>","<strong>A New Car with old tires</strong>","<strong>A make a wish child</strong>","<strong>PTSD</strong>","<strong>Permanent Cheedo fingers</strong>","<strong>A lifetime supply of coffee filters</strong>","<strong>The socks that I'm currently wearing</strong>"];
}
