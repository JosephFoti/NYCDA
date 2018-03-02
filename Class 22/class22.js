var arrlength = x=>{
  return x.length;
}

var makeUpperCase = x=>{
  if (typeof x == 'objectm') {
    let res = [];
    for (var i = 0; i < x.length; i++) {
      res.push(x[i].toUpperCase());
    }
    return res;
  } else {
    return x.toUpperCase();
  }

}


var promise =  Promise.resolve('HelloWorld');
// only information on what to do on success.
promise.then(function(x){
  console.log(x);
  // NOTE: to chain then results you must return, next then will take returned value
})

let brokenPromise = Promise.reject(new Error('uh oh'));

brokenPromise.catch((x)=>{
  console.log(x);
});

var anotherPromise = Promise.resolve('hello')
  .then(str=>{
    return new Promise((resolve,reject)=>{
      setTimeout(function(){
        resolve(`${str} there`);
      },1000);
    });
  })
  .then(str=>{
    return `${str} world!`
  })
  .then(str=>{
    console.log(str);
    return Promise.resolve(str)
  })
//
// var promise = Promise.resolve('hello')
//   .then(function(str) {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         resolve(`${str} there`);
//       }, 1000);
// }); })
//   .then(function(str) {
//     return `${str} world!`;
//   })
//   .then(function(str) {
//     //prints "hello there world!"
//     console.log(str);
//     //the `promise` variable above will eventually
//     //be a fulfilled promise with `str` as its value
//     return Promise.resolve(str);
// });


var coolCity = new Promise((x,y)=>{
  let startString = 'NYC';
  x(startString);
}).then(function(x){
  var moreString = x + ' is a '
  return moreString;
}).then(function(x){
  console.log(x + 'cool city');
})

30234
var addingPromise = new Promise((x,y)=>{
  let total = 1000;
  x(total);
}).then(x=>{
  x -= 200;
  return x
}).then(x=>{
  x += 300;
  console.log(x);
});

let testSubject = Math.random()*10;

var isItBig = new Promise((x,y)=>{

  setTimeout(function(){
    if (testSubject>4) {
      x('its Big! it was '+testSubject);
    } else {
      y(new Error('its Small! it was '+testSubject));
    }
  },1000);

}).then(x=>{
  console.log(x);
}).catch(x=>{
  console.log(x);
})
