const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.render('grocery-list',{ 'groceries':['bananas','milk','lettuce']});
});

app.listen(8080,function(err){
  if (err) throw err;
  console.log('Server!');
})
