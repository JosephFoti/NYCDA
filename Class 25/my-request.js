// npm install request -- external package
// requests data like ajax
const request = require('request');

request('https://www.omdbapi.com/?apikey=9ca25e95&t=titanic',function(err,response,body){
  // error, response that you get from the web server, and the content of the website
  // status 200 - successful connection
  let actors = JSON.parse(body)['Actors'];
  let released = JSON.parse(body)['Released'];

  if(!err && response.statusCode == 200) {
    // console.log(actors);
    // console.log(released);
  }
})

let myNYCDA;

request('https://www.nycda.com',function(err,response,body){
  if(!err && response.statusCode == 200) {
    module.exports = {body};
    console.log(body);
  }
})

// console.log(request);
