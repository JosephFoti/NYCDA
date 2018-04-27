const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const pg = require('pg');

const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const Op = Sequelize.Op;
const sequelize = new Sequelize('sqzshoes','postgres','Giraffes94', {
  host : 'localhost',
  port : '5432',
  dialect: 'postgres',
  operatorsAliases : {
    $and : Op.and,
    $or : Op.or,
    $eq : Op.eq,
    $like : Op.like,
    $iLike: Op.iLike
  }
});

const Shoe = sequelize.define('shoe',
  {
    name: Sequelize.TEXT,
    material: Sequelize.TEXT,
    size: Sequelize.INTEGER,
    color: Sequelize.TEXT,
    qty: Sequelize.INTEGER
  }
);

sequelize.sync()
.then(() => Shoe.create({
  name: 'Sneakers',
  material: 'Synthetic',
  size: 6,
  color: "White",
  qty: 342
}));

// NOTE What does this do really?

var message = "";

app.get('/',(req,res)=>{
  Shoe.findAll().then(result=>{
    res.render('inventory',{result});
    console.log(result[0].dataValues.id)
  })
});

app.get('/search', (req, res)=>{
    let s = req.query.search
    Shoe.findAll({
        where:
        {
            name:
            {
                $iLike: `${s}`
            }
        }
    })
    .then(result =>{
        if(result == ""){
            return res.render('inventory', {result, message: "Not found"})
        }
        return res.render('inventory', {result, message})
    })
});


app.post('/delete/:id',(req,res)=>{
  let id = req.params.id;
  console.log(id);
  Shoe.findById(id).then(result=>{
    result.destroy(result);
  }).then(()=>{
    res.redirect('/')
  })
});

app.get('/add',(req,res)=>{
  res.render('addShoe');
});

app.post('/addShoe', (req,res)=>{
  Shoe.create({
    name: req.body.name,
    material: req.body.material,
    size: req.body.size,
    color: req.body.color,
    qty: req.body.qty
  }).then(()=>{
    res.redirect('/');
  })
})

app.get('/edit/:id',(req,res)=>{
  Shoe.findById(req.params.id).then(result=>{
    return result
  }).then(result=>{
    res.render('addShoe',{result});
  })
  res.render()

})

app.post('/update',(req,res)=>{
  Shoe.update({
    name: req.body.name,
    material: req.body.material,
    size: req.body.size,
    color: req.body.color,
    qty: req.body.qty
  }).then(()=>{
    res.redirect('/');
  })
})





app.listen(8080,function(){
  console.log('shoes shoes shoes');
})
