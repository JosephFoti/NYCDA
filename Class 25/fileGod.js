const fs = require('fs');
// adds built in module 'fs' with require

fs.writeFile("saturn.txt", 'I am Saturn, Bourn of no-one',function(err){
  // first takes name, second takes content, third is callback error with err
  if(err){
    console.log(err);
  } else {
    console.log("A new God is bourn. Praise be upon it");
  }
})
