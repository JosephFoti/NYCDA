const EventEmitter = require('events');

const myEmitter = new EventEmitter();
// contains both emitters and listeners

myEmitter.on('sometrigger',function(x){
  console.log("Hey! I got triggered! " + x.name);
});

myEmitter.emit('sometrigger',{name:'John'});


// function still pulls data from the emitter
function jubilee(x){
  console.log("buy me lunch for $"+x.money);
}

myEmitter.on('buyfood',jubilee);
myEmitter.emit('buyfood',{money:10})
