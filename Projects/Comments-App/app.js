const express = require("express");
const bodyParser = require('body-parser');
const ejs = require("ejs");
const {Client} = require("pg");

const app = express();
// const connectionString = 'postgresql://postgres:Giraffes94@localhost:5432/school';

var loginString = 'postgresql://postgres:Giraffes94@localhost:5432/comments';

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{

  const client = new Client({
    connectionString:loginString,
  });
  client.connect()
  .then(()=>{
    console.log('database connection');
    return client.query(`SELECT * FROM userComments`)
  }).then(x=>{
    res.render("_article", {x} );
  })


});

app.post('/comment',(req,res)=>{

  const client = new Client({
    connectionString:loginString,
  });
  client.connect()
  .then(()=>{
    console.log('database connection');
    let date = new Date();
    date = date.toLocaleString();
    return client.query(`INSERT INTO userComments (username,title,body,date) values ($1,$2,$3,$4)`,[req.body.username,req.body.title,req.body.comment,date]);
  }).then(x=>{
    res.redirect('/');
  })

});


app.listen(8080,function(){
  console.log('Let Troll!');
})
