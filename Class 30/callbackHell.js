function hello(name, callback) {
  //if the name is not provided,
  if (!name) {
    //call back with an Error
    return callback(new Error('no name provided!'));
  }
  //otherwise, saying goodbye takes a moment
  setTimeout(function(){
    //call back with a friendly goodbye
    callback(null, `farewell, ${name}!`)
}, 500); };
//define `goodbye` as a callback
function goodbye(err, message) {
  //if there was a problem,
  if (err) {
    //handle the error
    //in this case, print the problem
    console.log(`Problem: ${err}`);
    return;
}
  //otherwise, log the message
  console.log(message);
};
//prints "farewell, Sally!" after ~500ms
// hello('Sally', goodbye);
// //prints "Problem: no name provided!"
// hello(null, goodbye);


function makeCall(contactInfo, isPhoneCharged, callback) {
  if (!isPhoneCharged) {
    // calls function
    callback("you need to charge",' now')
  } else if (contactInfo !== '911') {
    callback("you need the emergency number");
  } else {
    setTimeout(function(){
      callback('calling 911...');
    },1000);
  }
}
//                    Declairs function
makeCall("911",false,function(message,time){
  console.log(message+time);
})
