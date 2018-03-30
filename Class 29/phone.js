const EventEmitter = require('events');
let myEmitter = new EventEmitter();

let ringCount = 0;

function ring(){
  ringCount++;
  if (ringCount == 4) {
    myEmitter.removeListener('call',ring);
  } else {
    console.log('brrrrring');
  }
}


myEmitter.on('call',ring);

myEmitter.emit('call');
myEmitter.emit('call');
myEmitter.emit('call');
myEmitter.emit('call');
