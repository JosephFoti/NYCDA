const express = require('express');
const fs = require('fs');

const app = express();


// Reads the custom json thats crafted from the line parser and maps from the main data simply stop_ids and stop_names
fs.readFile('stops.json','utf-8',(err,data)=>{
  if (err) throw err;
  var simpleData = JSON.parse(data)[6].map(x=>{
    let y = {};
    y[x[1]['stop_id']] = x[1]['stop_name'];
    return y;
  })
  console.log(simpleData);
  // console.log(JSON.parse(data)[0][0][1]);
});

app.listen(8080,function(){
  console.log("server");
});
