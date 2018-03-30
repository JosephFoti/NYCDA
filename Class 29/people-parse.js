const fs = require('fs');

fs.readFile('parseData.js','utf-8',function(err,data){
  var x=JSON.parse(data)
  let a1 = x[0];
  let a2 = x[1];
  console.log(`${a1.name} is a ${a1.age} year old ${a1.job}`);
  console.log(`${a2.name} is a ${a2.age} year old ${a2.job}`);

});

console.log('hello')
