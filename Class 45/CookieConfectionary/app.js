const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieParser());

var sugar = 0;
var chocolate = 0;
var lemon = 0;

app.get('/',(req,res)=>{


  sugar = req.cookies.sugar || 0
  chocolate = req.cookies.chocolate || 0
  lemon = req.cookies.lemon || 0

  res.render('confectionaryHome', {sugar, chocolate, lemon});

});

app.post('/sugar',(req,res)=>{

  sugar++;
  res.cookie('sugar',sugar, {maxAge:9000000});
  res.redirect('/');

});

app.post('/chocolate',(req,res)=>{

  chocolate++;
  res.cookie('chocolate', chocolate, {maxAge:9000000});
  res.redirect('/');

})

app.post('/lemon',(req,res)=>{

  lemon++;
  res.cookie('lemon',lemon, {maxAge:9000000});
  res.redirect('/');

})

app.post('/clear',(req,res)=>{

  sugar = 0;
  chocolate = 0;
  lemon = 0;

  res.cookie('sugar', sugar, {maxAge:9000000});
  res.cookie('chocolate', chocolate, {maxAge:9000000});
  res.cookie('lemon',lemon, {maxAge:9000000});

  res.redirect('/');
})

app.listen(8080,function(){
  console.log('Cookie Confectionary!');
})
