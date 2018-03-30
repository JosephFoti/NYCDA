const express = require('express');
// create an express application
var app = express();

// parameter in path, start with colon. Allows for dynamic page access.
// calls with request.params.name
app.get('/hell+o*/:name',function(request,response){
  console.log('got request for a page');
  let p =  request.params;
  console.log(p);
  response.send(`Hello ${request.params.name}`);
});

app.get('/products',function(request,response){
  console.log('got request for products');
  response.send('<h1>This is the products page!</h1>')
});

// * -> catch all unnamed pages
app.get('*',function(request,response){
  // conditional 404 catch, sends custom 404 response
  response.status(404).send('<h1><strong>uh oh</strong> page not found</h1>');
});

app.listen(3000, function(){
  console.log('server!');
});






// function drinkRefill(drinkType,hasIce,callback) {
//
//   if (!drinkType) {
//     callback('Choose a drink');
//   } else if (drinkType == 'lemonade' && !hasIce) {
//     callback('Drink needs ice');
//   } else {
//     callback('drink choice accepted')
//     setTimeout(function(){
//       callback('drink filled');
//     },1000);
//   }
//
// }
//
//
// drinkRefill('soda',true,x=>{
//   console.log(x);
// });
//
// drinkRefill(null,true,x=>{
//   console.log(x);
// });
//
// drinkRefill('lemonade',false,x=>{
//   console.log(x);
// });
//
// drinkRefill('lemonade',true,x=>{
//   console.log(x);
// });
