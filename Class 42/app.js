const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.get('/',(req,res)=>{
  console.log(__dirname);
  res.sendFile(__dirname + '/public/hello.html');
  //           ^ absolute path of where the projet lives
});

app.listen(PORT,()=>{
  console.log('hello');
})
