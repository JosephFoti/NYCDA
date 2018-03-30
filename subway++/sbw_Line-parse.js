var Mta = require('mta-gtfs');
const fs = require('fs');

var lineData;
let haveLineData;
let haveMTAData;

fs.readFile('./eachLine.json','utf-8',function(err,res){
  res = JSON.parse(res);
  lineData = res;
  console.log(lineData);
  haveLineData = true
})
//
// if (lineData) {
//   console.log('we got json');
// }
// console.log(lineData);

var mta = new Mta({
  key: '59226e4f5d3fa1244428c5b178a32d47', // only needed for mta.schedule() method
  feed_id: 1                               // optional, default = 1
});

let clumps = [];
let lines = [[],[],[]];
// empty array for line clump object containing all relevant information to
// same type objects


let regs = ['^[123]'];
// array containing clump call in RegExp ,'^[456]','^[ACE]','^[BDFM]'

function LineBuilder(name,data,stopNames,stopIds) {
  // build line clump object
  this.name = name;
  // name of lines contained
  this.data = data
  // station objects
  this.stopNames = stopNames;
  // stop names
  this.stopIds = stopIds;
  // stop Ids
}

function lineFilter(reg,data){
  let set1 = new Set();
  // unique stop names
  let set2 = new Set();
  // unique stop IDs
  let set3 = new Set();
  // NOTE shitty way of getting the name

  let x = data.filter(x=>{
    if(!x[0].search(reg)) {
      // get stop names and stop ids
      set1.add(x[1].stop_name);
      set2.add(x[0]);
      set3.add(x[0][0]);
      return x;
    };
  });

  let stopNames = [...set1];
  let stopIds = [...set2];
  let name = [...set3];
  name.join('');
  let lineClump =  new LineBuilder(name,x,stopNames,stopIds)
  // constructor
  clumps.push(lineClump);
  // collection
}



mta.stop().then(function (result) {
  let byStopId = Object.entries(result);
  for (let reg of regs) {
    lineFilter(reg,byStopId);
  }
  console.log('stop data!')
  haveMTAData = true;
  // Loops through all regexp strings to call clumps
  // let check = setInterval(function(){
  //   if (clumps.length == regs.length) {
  //     clearInterval(check);
  //     return;
  //   }
  // },200);

}).catch(function (err) {
  console.log(err);
}).then(x=>{
  // parse through clumps to create line subObjects

});

let promise = new Promise((resolve,reject)=>{

  let check1 = setInterval(function(){
    console.log(haveMTAData + ' ' + haveLineData);
    if (haveMTAData && haveLineData) {
      console.log('both data sets recieved');
      clearInterval(check1);
      resolve();
    }
  },200);

}).then(x=>{

  console.log('-----------------resolve!--------------------');
  console.log(clumps);
  for (let i = 0; i<clumps.length;i++) {
    // console.log(clumps[i]['stopNames']);
    for (let j = 0 ; j<clumps[i]['stopNames'].length;j++) {
      if(lineData['line1'].includes(clumps[i]['stopNames'][j])) {
        lines[0].push(clumps[i]['data'][j]);
      }
      if(lineData['line2'].includes(clumps[i]['stopNames'][j])) {
        lines[1].push(clumps[i]['data'][j]);
      }
      if(lineData['line3'].includes(clumps[i]['stopNames'][j])) {
        lines[2].push(clumps[i]['data'][j]);
      }

      // if ()
    }

    // for (let stop of clump) {
    //   console.log(stop);
    // }
  }
  console.log(lines[2]);

})
