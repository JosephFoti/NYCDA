const express = require('express');
const pug = require('pug');

const app = express();

app.set('view engine','pug');

app.get('/',(req,res)=>{
  res.render('list.pug',{ 'groceries':['bananas','milk','lettuce']});
})

app.listen(8080,function(){
  console.log('pug server');
})
