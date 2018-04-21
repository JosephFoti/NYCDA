const express = require('express');
const ejs = require('ejs');
const Sequelize = require('sequelize');
//    ^ upper case?
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();

// connection to client
const sequelize = new Sequelize('sqz','postgres','Giraffes94',{
  host: 'localhost',
  port: '5432',
  dialect: 'postgres'
//       ^ type of database used
})



// Create table
const Hat = sequelize.define('hat',
  {
  name: Sequelize.STRING,
  material: Sequelize.STRING,
  height: Sequelize.INTEGER,
  brim: Sequelize.BOOLEAN
  }
);


// Create records
sequelize.sync()
// .then(() => Hat.create({
//   name: 'fez',
//   material: 'cheap cotton',
//   height: 3,
//   brim: true
// }));

//Find all hats
// Hat.findAll().then((hat)=>{
//   console.log(hat[0].dataValues.material);
// })

Hat.findById(9).then((hat)=>{
  console.log("A hat " + hat.dataValues.name);

  console.log("           ^   Find  ID   ^              ");
  console.log(" --------------------------------------- ");
  console.log("     ");



});

Hat.findAll({
  where: {
    brim: true
  }
})
.then(rows=>{


  for (let i = 0; i < rows.length; i++) {
    console.log(`a ${rows[i].dataValues.name} has a brim`)
  };


  console.log("         ^   Find One Param  ^           ");
  console.log(" --------------------------------------- ");
  console.log("     ");


})


Hat.findAll({
  where: {
    name: 'fez',
    brim: false
  }
})
.then(rows=>{


  for (let i = 0; i < rows.length; i++) {
    console.log(`a ${rows[i].dataValues.name} has a brim`)
  };


  console.log("         ^   Find Two Params   ^         ");
  console.log(" --------------------------------------- ");
  console.log("     ");


})


Hat.findOne({
  where: {
    brim: true
  }
})
.then(rows=>{

  console.log(rows.dataValues.name);

  console.log("           ^   Find One   ^              ");
  console.log(" --------------------------------------- ");
  console.log("     ");


})



app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{

  Hat.findAll().then(result=>{
    res.render('fernandoFezado',{result});
  });

});

app.post('/donate',(req,res)=>{

  Hat.create({
    name: req.body.name,
    material: req.body.material,
    height: req.body.height,
    brim: req.body.brim
  }).then(function(){
    res.redirect('/');
  })

});

app.listen(8080,function(){
  console.log('app!');
})
