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

function greetOld(x){

    console.log(`Hello, ${x.name}. Welcome to my party at the ripe old age of ${x.age}`);
}
function greetYoung(x){
  console.log(`Hello, ${x.name}. You are a bit too young for my party at the age of ${x.age}`);
}


myEmitter.on('ringOld',greetOld);
myEmitter.on('ringYoung',greetYoung);

for (let p in people) {
  if (people[p].age > 18) {
    myEmitter.emit('ringOld',people[p]);
  } else {
    myEmitter.emit('ringYoung',people[p]);
  }
}
