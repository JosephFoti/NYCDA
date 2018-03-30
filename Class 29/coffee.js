const EventEmitter = require('events');
myEvent = new EventEmitter();


let packsOfSugar = 0;

function adding(){
  packsOfSugar++;
  console.log(packsOfSugar + ' of sugar added')
  if (packsOfSugar == 2){
    // removes listener
    myEvent.removeListener("order",adding);
  }
}

myEvent.on('order',adding);
myEvent.emit('order');
myEvent.emit('order');
// after two listener is removed
myEvent.emit('order');
