const fs = require('fs');
// adds built in module 'fs' with require

fs.readFile("movies.txt",'utf-8',function(err,data){
  // first takes name, second takes encoding, third is callback with data and error
  if(err){
    console.log(err);
  } else {
    let x = JSON.parse(data);
    console.log(x[0]);
  }
});
