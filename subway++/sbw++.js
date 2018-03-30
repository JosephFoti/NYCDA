const http = require('http');
const fs = require('fs');
const exp = require('express');

const app = express();

var Mta = require('mta-gtfs');
var mta = new Mta({
  key: '59226e4f5d3fa1244428c5b178a32d47', // only needed for mta.schedule() method
  feed_id: 1                               // optional, default = 1
});

// let lineCall = new RegExp('^.','g');
// get a regexp that can filter though array of line data and collect possible stations

// [ '1','2','3','4','5','6','7','9','1','2','3','4','5','6','7','9','A','B','D','E','F','G','H','J','L','M','N','Q','R','S' ];
let lineNames = [ '1','2','3','4','5','6','7','9','A','B','D','E','F','G','H','J','L','M','N','Q','R','S' ];
let html = '';


function LineUp(line) {
  this.line = line;
  this.stop = [];
}

let myJS;

fs.readFile('sbw_Events.js','utf-8',function(err,res){
  myJS = res;
})

http.createServer(function(req,res){

    res.writeHead(200,{'Content-type':'text/html'});

    for (let name of lineNames) {
      html += `<button type="button" class="btn" onclick="doAThing(this)">${name}</button>`
    }
    html += myJS;
    res.end(html);
}).listen(8080,function(){
  console.log('running!');
})



module.exports = lines;

// Object.entries(result)[0][1]['stop_name']
