// call back function

function canYouGetIn(age,ticket,callback) {
  if (age<18) {
    // Calls function
    callback('Stop acting so grown!');
  } else if (!ticket) {
    callback('Buy a ticket');
  } else {
    callback('Come on in');
  }
  console.log('end');
}

canYouGetIn(17,false,function(x){
  // Defines function
  console.log(x);
});

function canYouBuyIt(item,kindle,callback) {
  if (!item) {
    callback('please select an item');
  } else if (!kindle) {
    callback('you need a kindle to purchase this product');
  } else {
    callback('order recieved');
  }
}

canYouBuyIt('Ready Player One',false, x=>{
  console.log(x);
});

canYouBuyIt('A Clockwork Orange',true, x=>{
  console.log(x);
});

canYouBuyIt(null,false, x=>{
  console.log(x);
});
