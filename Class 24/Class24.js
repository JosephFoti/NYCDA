console.log('24');


let evenOrOdd = function(num){
 (num % 2 == 0) ? console.log("even") : console.log("odd")
}
evenOrOdd(92)
evenOrOdd(93)


//-----------Output "John is 24 years old" -------

let person = {
 name: "John",
 age: 24
}
function personDescription(obj){
 return `${obj.name} is ${obj.age} years old`;
}
console.log(personDescription(person));


// NOTE logs path to node and file;
console.log(process.argv);
// NOTE additional argvs pull variables from the console array
console.log(parseInt(process.argv[2])-parseInt(process.argv[3]));



var add = (x,y) => {
  console.log(x+y);
}

var subtract = (x,y) => {
  console.log(x-y);
}

if (process.argv[2] == '+') {
  add(parseInt(process.argv[3]),parseInt(process.argv[4]));
}
if (process.argv[2] == '-') {
  subtract(process.argv[3],process.argv[4]);
}


// let direction = 'down';
// let count = 10;
// function countDownToTen(){
//   if (direction == 'down') {
//     return count--
//   } else {
//     return count++
//   }
//
// }
//
// var start = setInterval(function(){
//  console.log(countDownToTen());
// },1000)
//
// setTimeout(function(){
//   if (direction = 'down') {
//     direction = 'up';
//   } else {
//     direction = 'down';
//   }
// }, 10000);


//---------Output 'This Ford truck has 2 doors'----

let Cars = [
 {
   name: 'Nissan',
   types: 'sedan',
   doors: 4
 },
  {
   name: 'Ford',
   types: ['sedan', 'truck', 'suv'],
   doors: [2, 4]
 },
  {
   name: 'Nissan',
   types: 'sedan',
   doors: 4
 },
]
console.log(`This ${Cars[1].name} ${Cars[1].types[1]} has ${Cars[1].doors[0]} doors`)
