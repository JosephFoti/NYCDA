
// 1. Define a subtract function that has two parameters. Pass two numbers to the function using the spread operator.

var sub = (x,y)=>{
  return x - y;
}

console.log(sub(6,2));


// 2. Create an array of animals and add more animals to it using the spread operator.

var animals = ['a','b','c'];
var animals2 = ['d','e','f'];

var zoo = [...animals,...animals2];

console.log(zoo);
