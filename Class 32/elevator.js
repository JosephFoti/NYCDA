const Events = require('events');
const myEmitter = new Events();
var floor = 1;
var user = 0;
var direction = 'up';

// ----------------------- Globals

var people = [{ name: 'Jerry', destination: 4 }, { name: 'Kramer', destination: 10 }, { name: 'Newman', destination: 2 }];

// ----------------------- Data

function switchDir() {

  console.log('Switching Directions');

  setTimeout(function () {

    if (direction == 'up') {
      console.log('going down!');
      direction = 'down';
      myEmitter.emit('down');
    } else {
      user++;
      console.log('going up!');
      direction = 'up';
      if (people[user]) {
          myEmitter.emit('up',people[user]);
      } else {
        console.log('Waiting for next passenger');
      }
    }

  }, 1000);

}

// ------------------------ Switch operator

myEmitter.on('up',function(passenger){
  console.log(`${passenger.name} boards the elevator and presses ${passenger.destination}`);
  while(floor !== passenger.destination) {
    floor++;
    if (floor == passenger.destination) {
      console.log(`${passenger.name} arrives at floor ${passenger.destination}`);
      switchDir();
      break;
    } else {
      console.log('elevator reaches floor ' + floor);
    }
  }

})

myEmitter.on('down',function(passenger){
  console.log('down listner')
  while(floor !== 0) {
    console.log(`Floor ${floor}, going down`);
    floor--;
    if (floor == 0) {
      switchDir();
    }
  }
})

// --------------------- Up and Down

myEmitter.emit('up',people[0]);

// --------------------- Call
