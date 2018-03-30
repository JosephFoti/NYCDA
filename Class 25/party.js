const EventEmitter = require('events');
const myEmitter = new EventEmitter();

let people = [
  {
    name:'Penny',
    age:27
  },
  {
    name:'Kelly',
    age:5
  },
  {
    name:'Lewis',
    age:17
  }
];

console.log(people);

function greet(x){
  if(x.age>18) {
    console.log(`Hello, ${x.name}. Welcome to my party at the ripe old age of ${x.age}`);
  } else {
    console.log(`Hello, ${x.name}. You are a bit too young for my party at the age of ${x.age}`);
  }
}

myEmitter.on('ring',greet);

myEmitter.emit('ring',people[0]);
myEmitter.emit('ring',people[1]);
myEmitter.emit('ring',people[2]);
