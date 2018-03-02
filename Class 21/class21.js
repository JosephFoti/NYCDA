console.log('dsaf')


// create a promise
var promise = new Promise(function (x, y) {
  // after a waiting a second,
  setTimeout(function() {
    // resolve the promise with a message
    y(new Error('goodbye world!'));

}, 1000);
x('hello world!');
});


promise.then(function(a){
  // prints "hello world!" after 1s
  console.log(a);
});
promise.catch(function(a){
  console.log(a);
})
