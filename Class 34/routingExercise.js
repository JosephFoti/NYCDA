// Exercise: Routing
// • Create routes to do the following:
//
// (1) Accept "music" or "food", returning "Hmmm...I like both music and food".
//
// (2) Accept the word "huge" with an arbitrary number of u's and e's, returning "Is this from our president?!".
//
// (3) Take "George" and "Washington" as parameters, returning a greeting "Hello, President George Washington".  George Washington should be a variable.
//
// (4) Takes a name and convert it to UPPERCASE.
//
//
// (5) Create a html page with input boxes and a radio box, and return all the data via Express/Body-Parser/Node after the submit button has been clicked.
//
// Use input boxes for these:
//     - Name
//     - Stret Address
//     - City
//     - State
//     - Zip Code
//
// Select one (radio input):
// * Male
// * Female

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const myApp = express();
let arr = [];

myApp.use(bodyParser.urlencoded({extended:true}));
myApp.use(bodyParser.json());
myApp.use(express.static('public'));

fs.readFile('db.txt','utf-8',(err,data)=>{
  data  = JSON.parse(data);
  // let date = new Date();
  // data.createdDate = date;
  // data = JSON.stringify(data);
  arr.push(data);
})


myApp.post('/login', (req,res)=>{
  // stringify is specifically for JSON to string
  req.body.date = new Date();
  let data = req.body;
  arr.push(data);

  data = JSON.stringify(req.body);

  fs.writeFile('db.txt',arr,(err)=>{
    console.log('Data added');
  });
  res.status(200).send(req.body);

});

myApp.get(['/music','/food'], function(req,res){
  res.send(`<h1>Hmmm...I like both music and food</h1>`);
});

myApp.get('/hu+ge+', function(req,res){
  res.send(`<h1>Is this from our president?!</h1>`);
});

myApp.get('/president/:first/:last', function(req,res){
  res.send(`<h3>Hello, President ${req.params.first} ${req.params.last}</h3>`);
});

myApp.get('/upperCase/:words',function(req,res){
  res.send(`<h2>${req.params.words.toUpperCase()}</h2>`);
});

myApp.get('/',function(req,res){
  res.send(`<div class='wrap'></div>`)
})


myApp.listen(8080,function(err){
  if (err) throw err;
  console.log('server');
})
