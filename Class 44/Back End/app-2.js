const express = require('express');
const ejs = require('ejs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080
const app = express()

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cookieParser());

var butter = 0;
var almond = 0;
var oatmeal = 0;

app.get('/', (req,res)=>{

  butter = req.cookies.butter || 0
  almond = req.cookies.almond || 0
  oatmeal = req.cookies.oatmeal || 0

  return res.render('bakery',{butter, almond, oatmeal})

});

app.post('/butter',(req,res)=>{
  butter++;
  res.cookie('butter', butter, {maxAge:9000000});
  res.redirect('/');
})

app.post('/almond',(req,res)=>{
  almond++;
  res.cookie('almond', almond, {maxAge:9000000});
  res.redirect('/');
})

app.post('/oatmeal',(req,res)=>{
  oatmeal++;
  res.cookie('oatmeal', oatmeal, {maxAge:9000000});
  res.redirect('/');
})

app.post('/reset',(req,res)=>{

  butter = 0;
  almond = 0;
  oatmeal = 0;

  res.cookie('butter', butter, {maxAge:9000000});
  res.cookie('almond', almond, {maxAge:9000000});
  res.cookie('oatmeal', oatmeal, {maxAge:9000000});

  res.redirect('/');

})


app.listen(PORT, function(){
  console.log('hello');
})
