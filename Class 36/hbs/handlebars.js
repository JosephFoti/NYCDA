const express = require('express');
const handlebars = require('hbs');

const app = express();
app.set('view engine','hbs');

app.get('/',(req,res)=>{
  res.render('list',{ 'groceries':['bananas','milk','lettuce']});
});

app.listen(8080,function(){
  console.log('I can ride my bike');
});
