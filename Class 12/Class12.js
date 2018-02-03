console.log("hello");


var t = {
  name:"Tom",
  age:28
}

console.log(t.name);
console.log(t['name']);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var z = new Person("Zane",36)
console.log(z);



function User(email,password,username,accountAge) {
  this.email = email;
  this.password = password;
  this.username = username;
  this.age = accountAge;
  this.logIn = function(){
    return name + " " + age;
  }
  this.els = ['h1','div','p'];
  // this.writePortal = function(){
  //   for (var i = 0; i < this.els.length; i++) {
  //     this.els[i]
  //     var el1 = document.createElement();
  //   }
  // }
}

var Usef =  new User("Usefurself@gmail.com","mcdagger2992","usefurself",12);
var Paula = new User("PowerfulPaula@gmail.com","paulapaulapaula1","PowerfulPaula",5);
var Marcus = new User("MarkyMark@thefunkybunch.com","YesImMarcussPassword","MarkyMark",8);

var users = [Usef, Paula, Marcus];

var p = document.getElementById('p');

for (var i = 0; i < users.length; i++) {
  p.innerHTML += '<h2>' + users[i].email + "</h2> " + users[i].age + '<br>';
  p.id = users[i].username;
 }


// [objectName].prototype.[newAttribute] = [value]
// all children of the object inherit prototype

Person.prototype.student = true;
User.prototype.status = true;
User.prototype.logOut = function(status) {
  this.status ? alert("logging out") : alert('done')
}


var george = {
  fname: "George",
  lname: "Clooney",
  age: 56,
  height: "5ft 11in",
  url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/George_Clooney_2016.jpg"
}

var jane = {
  fname: "Jane",
  lname: "Seymour",
  age: 66,
  height: "5ft 3in",
  url: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzY2NDk3Mjk0/jane-seymour-9542468-1-402.jpg"
}

var halle = {
  fname: "Halle",
  lname: "Berry",
  age: 51,
  height: "5ft 5in",
  url: "https://www.biography.com/.image/t_share/MTE1ODA0OTcxODYxNjQwNzE3/halle-berry-9542339-1-402.jpg"
}

var brad = {
  fname: "Brad",
  lname: "Pitt",
  age: 54,
  height: "5ft 11in",
  url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Brad_Pitt_Fury_2014.jpg"
}

var celebs = [george,jane,halle,brad];

for (var i = 0; i < celebs.length; i++) {
  var x = document.createElement('div');
  x.innerHTML = "<img style='width:250px;' src='" + celebs[i].url + "'><h1>" + celebs[i].fname + " " + celebs[i].lname + ":</h1><br><h4>"+celebs[i].age+"</h4><br><h4>"+celebs[i].height+"</h4><br><br>"
  document.body.appendChild(x);
}


for (var i = 0; i < celebs.length; i++) {
  let h1 = document.createElement('h1');
  let h3 = document.createElement('h3');
  let img  = document.createElement('img');
  let div = document.createElement('div');

  h1.innerHTML = celebs[i].fname + ' ' + celebs[i].lname;
  h3.innerHTML = celebs[i].age + '<br>' + celebs[i].height;
  img.setAttribute('src',celebs[i].url);
  img.style.width = "100px";

  document.body.appendChild(div);
  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(h3);
}

celebs.map(celeb, i) => {
  let h1 = document.createElement('h1');
  let h3 = document.createElement('h3');
  let img  = document.createElement('img');
  let div = document.createElement('div');

  h1.innerHTML = celeb[i].fname + ' ' + celebs[i].lname;
  h3.innerHTML = celeb[i].age + '<br>' + celebs[i].height;
  img.setAttribute('src',celebs[i].url);
  img.style.width = "100px";

  document.body.appendChild(div);
  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(h3);
}

// for (var i = 0; i < celebs.length; i++) {
//   let h1 = document.createElement('h1');
//   let h3 = document.createElement('h3');
//   let img  = document.createElement('img');
//   let div = document.createElement('div');
//
//   h1.innerHTML = celebs[i].fname + ' ' + celebs[i].lname;
//   h3.innerHTML = celebs[i].age + '<br>' + celebs[i].height;
//   img.setAttribute('src',celebs[i].url);
//   img.style.width = "100px";
//
//   document.body.appendChild(div);
//   div.appendChild(img);
//   div.appendChild(h1);
//   div.appendChild(h3);
// }
