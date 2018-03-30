const http = require('http');
const fs = require('fs');
let myData;
let content = '';

let promise = new Promise((resolve,reject)=>{
  fs.readFile('ceo-data.json','utf-8',function(err,data){
     myData = JSON.parse(data);
     resolve(myData);
  });
}).then(x=>{
  console.log(x);
  http.createServer(function(req,res){
    for (let i=0;i<x.length;i++) {
      let thisItem = x[i];
      content += `<img src="${thisItem.image}"/><h1>${thisItem.name}</h1><h3>${thisItem.job}</h3><h5>${thisItem.born}</h5>`;
    };
      res.writeHead(200,{'Content-type':'text/html'});
      res.end(content);

  }).listen(8080,function(){
    console.log('running!');
  })
})
