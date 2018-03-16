const http = require('http');
const request = require('request');

var omdbData;
console.log('hello');
var x = new Promise((x,y)=>{
  request("https://www.omdbapi.com/?apikey=9ca25e95&t=jaws",function(err,response,body){
    if(!err && response.statusCode == 200) {
      omdbData = JSON.parse(body);
      x(omdbData);
    }
  })
}).then(x=>{
  console.log(x);
}).then(x=>{

http.createServer((req,res)=>{
  let content = '<img src="';
  content += omdbData['Poster'];
  content += `"/><ul><li>${omdbData['Title']}</li><li>${omdbData['Year']}</li><li>${omdbData['Actors']}</li>`;

  res.writeHead(200,{'Content-type':'text/html'});
  res.end(content);

}).listen(8080,function(){
  console.log('running!')
})

})
