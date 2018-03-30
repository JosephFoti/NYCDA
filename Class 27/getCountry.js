const fs = require('fs');
const country = process.argv[2];

fs.readFile('countries.json','utf-8',function(err,data){
  let myData = JSON.parse(data);
  for(let i in myData){
    if(myData[i]['name'].toLowerCase()==country.toLowerCase()){
      console.log(myData[i]['name']);
      console.log(myData[i]['capital']);
      console.log(myData[i]['region']);
      console.log(myData[i]['population']);
    }
  }
})
