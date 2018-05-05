const express = require('express');
// const ejs = require('ejs');
// const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000
// const {Client} = require('pg');

const app = express();

// app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

app.get('/',(reg,res)=>{
  res.send('Hello Heroku')
})


app.listen(PORT,function(){
  console.log("server");
})
