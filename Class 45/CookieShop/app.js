const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cookieParser());

var username,shoes,bags,pants,shirts;

app.get('/',(req,res)=>{

  if (req.cookies) {

    let orderKey = Object.keys(req.cookies);
    resNumber = orderKey.length
    let orderValue = Object.values(req.cookies);

    res.cookie('username','',{maxAge:1});
    res.cookie('bags','',{maxAge:1});
    res.cookie('shoes','',{maxAge:1});
    res.cookie('shirts','',{maxAge:1});
    res.cookie('pants','',{maxAge:1});


    return res.render('order',{orderKey,resNumber,orderValue});

  }

  return res.render('order');

});

app.post('/order',(req,res)=>{

  let order = req.body

  if (order.username) {
    res.cookie('username',order.username,{maxAge:9000000});
  } 

  if (order.shoes) {
    res.cookie('shoes',order.shoes,{maxAge:9000000});
  }

  if (order.bags) {
    res.cookie('bags',order.bags,{maxAge:9000000});
  }

  if (order.pants) {
    res.cookie('pants',order.pants,{maxAge:9000000});
  }

  if (order.shirts) {
    res.cookie('shirts',order.shirts,{maxAge:9000000});
  }

  res.redirect('/order')
  // console.log(req.body);
});

app.get('/order',(req,res)=>{

  let orderKey = Object.keys(req.cookies);
  let resNumber = orderKey.length
  let orderValue = Object.values(req.cookies);

  res.render('confirmation',{orderKey,resNumber,orderValue})

});



app.listen(8080,function(){

  console.log('Shop On');

});
