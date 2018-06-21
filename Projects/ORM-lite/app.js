const express = require('express');
const ejs = require('ejs');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const orm = require('./scripts/ORM.js');

const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


var connect = ['ormdata','postgres','Giraffes94'];


// ----------------------------- initialize

orm.initialize(connect);

// ----------------------------- get all

orm.getAll().then(data=>{
  console.log(data[0].dataValues);
  console.log(data[1].dataValues);
  console.log(data[2].dataValues);

});

// ------------------------------ find by id


orm.findById(1).then(data=>{
  console.log(data.dataValues);
});

app.get('/',(req,res)=>{
  res.send('Let me know if this should have had a front end')
});

app.listen(8080,function(){
  console.log('hiya');
});





// const Op = Sequelize.Op;
//
//
// const sequelize = new Sequelize(connect[0], connect[1], connect[2], {
//   host : 'localhost',
//   port : '5432',
//   dialect : 'postgres',
//   operatorsAliases : {
//     $and : Op.and,
//     $or : Op.or,
//     $eq : Op.eq,
//     $like : Op.like,
//     $iLike : Op.iLike
//   }
// });
//
// const Users = sequelize.define('user',
//
//   {
//     firstname: Sequelize.TEXT,
//     lastname: Sequelize.TEXT
//   }
//
// );

// sequelize.sync().then(()=>{
//   Users.create({
//     firstname: 'Jakob',
//     lastname: 'Sacsofsky-Berk'
//   });
// })
