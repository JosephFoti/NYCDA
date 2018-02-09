function Animal(name,legs,age,type,sound) {
  //initial constructor
  this.name = name;
  this.legs = legs;
  this.age = age;
  this.type = type;
  this.sound = sound;
  this.makeSound = function() {
    // method
    return this.sound + " " + this.sound;
  }
}

var myCat = new Animal('Catty',4,10,'cat','meow');
// console.log(myCat.name);
// console.log(myCat.makeSound());

function Dog() {
  this.breed = "";
  this.description = function(){
    return `${this.name} is a dog and it's of breed is ${this.breed}`;
    //template litteral `${x}`
  }
  Animal.apply(this, arguments);
  // applys animal arguments to dog subclass
}


Dog.prototype = new Animal();
// creates a template for a subclass within greater object


Animal.prototype.owner = function() {
    if (this.type == 'cat') {
    return `The owner of ${this.name} is Miss Cat Lover`;
  } else if (this.type == 'dog') {
    return `The owner of ${this.name} is Mr. Doggy Man`;
  } else {
    return 'No owner found';
  }
}

var myDog = new Dog('Jack',4,6,'dog','woof');
// takes attributes of animal with additional slot for breed and method description

var myElephant = new Animal('Babo',4,60,'Elephant','brrraaa');

myDog.breed = 'greyhound';

// console.log(myDog.description());
//
// console.log(myDog.owner());
// console.log(myCat.owner());
// console.log(myElephant.owner());
// console.log(myElephant.name);


function House(name,doors,windows) {
  this.name = name;
  this.doors = doors;
  this.windows = windows;
  this.description = function() {
    return `${this.name} has ${this.doors} doors and ${this.windows} windows`
  }
}

var franksHouse = new House("Falling Water",8,10);
var myHouse = new House('479 Clinton',9,5);

console.log(myHouse.description());
console.log(franksHouse.description());


function Room(sqrft,type){
  // Room is subclass of House
  this.sqrft = sqrft;
  this.type = type;
  this.roomDescription = function(){
    return `this room is the ${this.type}. It has ${this.sqrft} square feet of space`;
  }

  this.legal = function(){
    if (this.type == 'bedroom' && this.sqrft > 300) {
      return `this is a legal bedroom`
    } else {
      return `this is an illegal bedroom`
    }
  }

  House.apply(this,arguments);
}

Room.prototype = new House();

var kitchen = new Room(150,'kitchen');
console.log(kitchen.roomDescription());

var masterBed = new Room(450,'bedroom');
var basement = new Room(600,'basement');

// console.log(kitchen.legal());
// console.log(masterBed.legal());
// console.log(basement.legal());

function Creature(name,legs,cls,size,endangered) {
  this.name = name;
  this.legs = legs;
  this.cls = cls;
  this.size = size;
  this.endangered = endangered;
  this.isEndangered = function(){
    if (endangered) {
      return `${this.name} is endangered`
    } else {
      return `${this.name} is not endangered`
    }
  }
}

function Mammal(...dwells) {
  // ... = spread operator, cocatonates subclass attr to class attr and takes
  // many arguments as single point in array. index corresponds to position in
  // global array, not local!

  this.dwells = dwells[5];
  this.smells = dwells[6];

  this.landOrSea = function(){
    if (landOrSea == "sea") {
      return `${this.name} is a waterdwelling creature`
    } else {
      return `${this.name} is a landdwelling creature`
    }
  }
  Creature.apply(this,arguments);
}

Mammal.prototype = new Creature();

var narwhal = new Mammal('narwhal',0,'porpus','large',true,'sea','fishy');

console.log(narwhal.dwells);
console.log(narwhal.landOrSea());


function Employee(sal,start,vacation) {
  this.sal = sal;
  this.start = start;
  this.vacation = vacation;
}

function Developer(...j) {
  this.freelanceRate = j[3];
  Employee.apply(this,arguments);
}

Developer.prototype = new Employee();
//new is lowercase!


var joe = new Developer(60000,'never','no',35);
console.log(joe.freelanceRate);
