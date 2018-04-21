// Registration Form, User profile Form, User Search Form
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
// Make app
const myApp = new express();
// Default node settings with body parser
myApp.use(bodyParser.urlencoded({extended:true}));
myApp.use(bodyParser.json());
myApp.use(express.static('public'));

// get data from form in static html with action /login and method POST
myApp.post('/register',(req,res)=>{
  // user data storage
  var userData;
  // read file user data
  let getUserData = new Promise((res,rej)=>{
    let done;

    fs.readFile('user-data.json','utf-8',(err,data)=>{
      // get user data from db
      // console.log(data);
      userData = JSON.parse(data);
      console.log('json parsed');
      // get input information
      userData.push(req.body);
      console.log('body pushed');

      fs.writeFile('user-data.json',JSON.stringify(userData),(err)=>{
        if (err) throw err;
        done = true;
      });

    });

    let isDone = setInterval(function(){
      if (done) {
        clearInterval(isDone);
        res(userData);
      }
    },500);


  }).then(x=>{
    let html = '';
    for (let person in x) {
      html += `<div class="person" data-index="${person}"><h3 class="user">${userData[person].firstName} ${userData[person].lastName}</h3></div>`
    }
    // console.log(JSON.stringify(x));
    res.send(html);

  });

  // fs.appendFile('user-data.json',JSON.stringify(req.body));
// {"firstName":"Joseph","lastName":"Foti","address":"457 FDR Drive Apt 1901A","city":"New York","state":"NY","zip":"10002","gender":"male","button":""}

});

// making a page that allows for user to 'login', bounce incorrect attempts to login.html
myApp.post('/login',(req,res)=>{
  console.log('login');
  let getUserData = new Promise((res,rej)=>{
    let done;

    fs.readFile('user-data.json','utf-8',(err,data)=>{
      // get user data from db
      // console.log(data);
      userData = JSON.parse(data);
      console.log('json parsed');
      // get input information
      done = true;
    });

    let isDone = setInterval(function(){
      if (done) {
        clearInterval(isDone);
        res(userData);
      }
    },500);


  }).then(x=>{
    console.log('resolved');
    let html = '';
    let found;
    for (let person in x) {
      console.log(`${req.body.firstName} was submited, is it equal to ${x[person].firstName}`);
      if (req.body.firstName === x[person].firstName && req.body.lastName === x[person].lastName) {
        html += `<div class="person" data-index="${person}"><h3 class="user">Welcome ${x[person].firstName} ${x[person].lastName}</h3><h5 class="address"> who lives at ${x[person].address} | ${x[person].city} | ${x[person].state} | ${x[person].zip} </h5></div>`
        found = true;
        break;
      }
    }
    // console.log(JSON.stringify(x));
    if (found) {
      res.send(html);
    } else {
      fs.readFile('public/login.html','utf-8',(err,data)=>{
        console.log('user not found');
        if (err) throw err;
        res.send(data);
      })
    }

  });

})


myApp.get('/users',(req,res)=>{
  console.log('on users');
  let userDataCheck = new Promise((resolve,reject)=>{

    var userData;

    fs.readFile('user-data.json','utf-8',(err,data)=>{
      userData = JSON.parse(data);
      console.log('got Data');
      if (err) throw err;
    });

    let check = setInterval(function() {
      console.log('no data');
      if (userData) {
        clearInterval(check);
        resolve(userData);
      };
    },500);

  }).then(x=>{
    console.log('resolve');
    let html = '';
    for (let person in x) {
      html += `<div class="person" data-index="${person}"><h3 class="user">${x[person].firstName} ${x[person].lastName}</h3></br><h5 class="address">${x[person].address} | ${x[person].city} | ${x[person].state} | ${x[person].zip} </h5></br><h5 class="gender">${x[person].gender}</h5><hr></div>`
    }
    // console.log(JSON.stringify(x));
    res.send(html);
  });


})


myApp.listen(8080,function(){
  console.log('Server is running');
})
