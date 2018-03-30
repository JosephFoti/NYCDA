const express = require('express');
const app = express();
// const fs = require('fs');
const bodyParser = require('body-parser');

// let localJava;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'))

app.post('/login', function(req,res){
  res.send(req.body.username)
})

// app.get('/hello/:name', function(req,res){
//   res.send(`hello ${req.params.name}`);
// });
//
// app.get('/', function(req,res){
//   console.log(req.query);
//   res.send(`<a href="/hello/${req.query.name}">Say Hi to ${req.query.name}, who is ${req.query.age}</a>`);
//   // req.query.[query name defined in url];
// });
//
// app.get('/a(pp)?le', function(req,res){
//   res.send(`<h1>HEY!</h1>`);
// });
//
// app.get('/reverse/:somevar',function(req,res){
//   let newWord = (req.params.somevar).split('').reverse().join('');
//   res.send(newWord);
// });

app.listen(8080, function(){
  console.log('running');
});
