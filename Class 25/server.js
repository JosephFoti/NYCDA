const http = require('http');
const request = require('request');
// get http to make local server

// Test ---------------------------/
// http.createServer(function(req,res){
//   res.end('<h1>Hello Node, you are a lovely host</h1>');
// }).listen(8080, function(){
//   // creates port to listen to. By default webservers listen on port 80
//   // when developing can use from 3000 to 8000
//   // https is port 443
//   console.log(data);
//   console.log('Welcome to my home...');
// })


// two

// global var for data


// let myNYCDA;

// requests body html from nycda ---------------------------/
// request('https://www.nycda.com',function(err,response,body){
//   if(!err && response.statusCode == 200) {
//     myNYCDA = body;
//   } else {
//     console.log(err);
//   }
// })
//
// http.createServer(function(req,res){
//   res.writeHead(200, {'Content-type':'text/html'});
//   res.end(myNYCDA);
// }).listen(8080,function(){
//   console.log('nycda server is running');
// })
