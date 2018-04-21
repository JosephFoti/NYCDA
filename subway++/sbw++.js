const http = require('http');
const fs = require('fs');
const express = require('express');
const lineParse = require('./sbw_Line-parse');
const app = express();

let linesCheck = setInterval(function(){
  if(lineParse.lines) {
    console.log('=--=-=-=-=-=- got lines! =--=-=-=-=-=-');
    console.log(lineParse.lines[0][0][1]['stop_name']);
    clearInterval(linesCheck);
  }
},150)

app.use(express.static('public'));

var Mta = require('mta-gtfs');
var mta = new Mta({
  key: '59226e4f5d3fa1244428c5b178a32d47', // only needed for mta.schedule() method
  feed_id: 1                               // optional, default = 1
});

// let lineCall = new RegExp('^.','g');
// get a regexp that can filter though array of line data and collect possible stations

// [ '1','2','3','4','5','6','7','9','1','2','3','4','5','6','7','9','A','B','D','E','F','G','H','J','L','M','N','Q','R','S' ];
// [ '1','2','3','4','5','6','7','9','A','B','D','E','F','G','H','J','L','M','N','Q','R','S' ];
let lineNames = [ '1','2','3','4','5','6','7'];
let dataOfTheLines = '';


function LineUp(line) {
  this.line = line;
  this.stop = [];
}

var eachLine;

fs.readFile('eachLine.json','utf-8',function(err,res){
  eachLine = JSON.parse(res);
})



for (let name of lineNames) {
  dataOfTheLines += `<a href="/lines/line${name}"><button type="button" class="btn">${name}</button></a>`;
}


fs.writeFile('./public/index.html',dataOfTheLines,(err)=>{
  if (err) throw err;
  console.log('index writen');
})

app.get('/register',(req,res)=>{
  res.send(`<div class='wrap'>Route!</div>`)
});

app.get('/lines/:line',(req,res)=>{

  let html = `<div class="lineWrap" data-line="${req.params.line}"><h1 class="title" style="text-align:center;">${req.params.line} contains ${eachLine[req.params.line].length} lines </h1></div>`;
  html += `</ul>`;
  for (let stop of eachLine[req.params.line]) {
    html += `<a href="/stops/${stop}&${req.params.line}"><li class='stop'>${stop}</li></a>`;
  }
  html += `</ul>`;
  res.send(html);

});

app.get('/stops/:stop&:line',(req,res)=>{
  let lineInt = (parseInt(req.params.line[4]) - 1);
  console.log(req.params.line);
  console.log(lineInt);

  if (lineInt < 6) {
    var thisLineId = 1;
  } else {
    var thisLineId = 51;
  }

  var thisStop;

  // Get the stop and line from req params and use them to plug in the correct datapoint in the stops.json
  // data file. Use the data-tester to make a dictionary, use dictionary as href and call the stop.
  fs.readFile('stops.json','utf-8',(err,data)=>{
    if (err) throw err;
    var simpleData = JSON.parse(data)[lineInt].map(x=>{
      let y = {};
      y[x[1]['stop_id']] = x[1]['stop_name'];
      return y;
    });

    console.log(simpleData);

    thisStopObject = simpleData.filter(x=>{
      if ((Object.values(x)[0]) === req.params.stop) {
        thisStop = parseInt(Object.keys(x)[0]);
        return x;
      }
    });

    console.log(thisStop);

  });

  let test = setInterval(function(){
    if(thisStop) {
      clearInterval(test);
      mta.schedule(thisStop,thisLineId).then(function (result) {
        // console.log(result['schedule'][thisStop]["S"]);
        let Station1 = result['schedule'][thisStop]["N"];
        let Station2 = result['schedule'][thisStop]["S"];

        let html1 = `<ul><h2>Northbound</h2>`
        let html2 = `<ul><h2>Southbound</h2>`

        let time = new Date();
        time = time.getTime();

        for (let i = 0; i<3; i++) {
        if (Station1[i]) {
          let est1 = (Station1[i]['departureTime']).toString() + '000';
          est1 = Math.floor((parseInt(est1) - time)/60000);
          if (est1<0) {
            est1 = 0;
          }
          html1 += `<li><strong style="margin:20px;">${Station1[i]['routeId']}</strong><span class="est" data-index="${i}">${est1} Minutes</span></li>`
        }

        if (Station2[i]) {
          let est2 = (Station2[i]['departureTime']).toString() + '000';
          est2 = Math.floor((parseInt(est2) - time)/60000);
          if (est2<0) {
            est2 = 0;
          }
          html2 += `<li><strong style="margin:20px;">${Station2[i]['routeId']}</strong><span class="est" data-index="${i}">${est2} Minutes</span></li>`
        }

        console.log(Station2[i]);
        };

        html1 += `</ul>`;
        html2 += `</ul>`;

        res.send(html1+html2);
      });
    }
  },500);


  console.log(`clicked ${req.params.stop}, found id ${thisStop}`);


})

app.listen(8080,function(err){
  if (err) throw err;
  console.log('server');
});


// getTime v1 ------------------- /
// app.get('/stops/:stop&:line',(req,res)=>{
//   let lineInt = (parseInt(req.params.line[4]) - 1);
//   console.log(req.params.line);
//   console.log(lineInt);
//   var thisStop;
//   for (let stop of lineParse.lines[lineInt]) {
//     console.log(`${stop[1]['stop_name']} and ${req.params.stop}`);
//     if (stop[1]['stop_name'] == req.params.stop) {
//       thisStop = stop[1]['stop_id'];
//       break;
//     }
//   }
//   let test = setInterval(function(){
//     if(thisStop) {
//       mta.schedule(thisStop).then(function (result) {
//         console.log(result);
//         clearInterval(test);
//       })
//     }
//   },500);
//
//
//   console.log(`clicked ${req.params.stop}, found id ${thisStop}`);
//
//
// })
// -------------------------------------- /
