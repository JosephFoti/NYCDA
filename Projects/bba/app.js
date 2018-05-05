const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const {Client} = require('pg');
const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  throw result.error
}

console.log(result.parsed.USR_NAME);
console.log(result.parsed.USR_PWD);


// -------------------------------- Step 1 | Require resources --------------------------

const serverString = `postgresql://${result.parsed.USR_NAME}:${result.parsed.USR_PWD}@localhost:5432/bba`;
// const serverString = `postgresql://postres:Giraffes94localhost:5432/bba`;


// ---------------- NOTE to be changed into private variables ---------------

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs")


// -------------------------------- Step 2 | Get data from newPosts --------------------------

app.post('/add',(req,res)=>{

  const client = new Client({
    connectionString: serverString,
  });
  client.connect()
  .then(()=>{
    return client.query(`INSERT INTO messages (title, body) values ($1,$2)`,[req.body.title,req.body.body]);
  })
  .then(result=>{
    return res.redirect('/');
  })

});

// -------------------------------- Step 3 | Render Posts Page --------------------------

app.get('/posts',(req,res)=>{

  const client = new Client({
    connectionString: serverString,
  });
  client.connect()
  .then(()=>{
    return client.query(`SELECT * FROM messages`);
  })
  .then(result=>{
    console.log({result});
    return res.render('posts',{result});
  })


})
















app.listen(8080,function(){
  console.log("Post Up!");
})
