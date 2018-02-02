console.log(' ');
console.log('Challenge 5');
console.log(' ');
//

// NOTE: Dynamic object creation based on loop, returning objects as array elements.

var d1 = document.getElementById('door1');
var d2 = document.getElementById('door2');
var d3 = document.getElementById('door3');
var doors = [d1,d2,d3];
var prizes = ["100 Used Band-aids","Four Baby Ocelotts","A New Car with old tires"];
function door(el,pr,ind) {
  this.element = el;
  this.prize = pr;
  this.index = ind;
};

for (var i = 0; i < doors.length; i++) {
  var prz = Math.floor(Math.random()*3);
  window["DoorObj"+i] = door(doors[i],prizes[prz],i);
  console.log(["DoorObj"+i]);
  prizes.splice(prz,1);
  doors[i].addEventListener('onclick',function(){
    // alert(door[i].doorPrize);
    console.log(door[i].prize)
  });

prizes = ["100 Used Band-aids","Four Baby Ocelotts","A New Car with old tires"];
}
