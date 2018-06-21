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

app.get('/login', (req,res)=>{
  // return res.render('login', {username: ""})
  // read empty string for safety

  return res.render('login', {username: req.cookies.username})
  //                                  ^ Safe if no cookie
});

app.post('/login', (req,res)=>{
  let username = req.body.username
  // use bp to get data from post, assign it to cookie
  res.cookie('username', username, {maxAge: 900000});
  return res.redirect('/login');
  // res.cookie assigns
})

app.listen(PORT, function(){
  console.log('hello');
})
