const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const {Client} = require('pg');

const connectionString = 'postgresql://postgres:Giraffes94@localhost:5432/school';
//                                      ^ username          ^ server:port
//                                              ^ password               ^ database

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');

app.get('/',(req,res)=>{

  const client = new Client({
    connectionString: connectionString,
  })
  client.connect()
  .then(()=>{
    return client.query('SELECT * FROM students');
  })
  .then((result)=>{
    for ( let i in result.rows ) {
      // console.log(result.rows[i].id)
    }
    return res.render('studentTable',{result});

  })

});

app.post('/delete/student/:id',(req,res)=>{

  const client = new Client({
    connectionString: connectionString,
  });
  client.connect()
  .then(()=>{
    return client.query('DELETE FROM students WHERE id=$1',[req.params.id]);
    //                                                 ^ Inline variable declariation set equal to ...
    //                                                     ^ ... the continuation of the query declariation

  })
  .then((result)=>{
    return res.redirect('/');

  });

});

app.post('/add',(req,res)=>{

  const client = new Client({
    connectionString: connectionString,
  });
  client.connect()
  .then(()=>{
    return client.query('INSERT INTO students (name, email) values ($1,$2)',[req.body.name,req.body.email]);
    //                                                 ^ Inline variable declariation set equal to ...
    //                                                     ^ ... the continuation of the query declariation

  })
  .then((result)=>{
    return res.redirect('/');
  })

});

app.get('/edit/student/:id', (req,res)=>{

  const client = new Client({
    connectionString: connectionString,
  });

  client.connect()
  .then(()=>{
    console.log(req.params.id);
    return client.query(`SELECT * FROM students WHERE id=$1`,[req.params.id])
  })
  .then((result)=>{
      return res.render('edit-student',{result});
  });


});

// update
app.post('/update',(req,res)=>{

  const client = new Client({
    connectionString: connectionString,
  });
  client.connect()
  .then(()=>{
    return client.query('UPDATE students SET name=$1, email=$2 WHERE id=$3',[req.body.name,req.body.email,req.body.id]);
  })
  .then((result)=>{
    return res.redirect('/');

});
});


app.listen(8080,function(){
  console.log('server');
});
