//using js to get ajax1
//
// ready states
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.

// status 200 = success

var x = "Pulp Fiction"

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(this.responseText);
//     console.log(JSON.parse(this.responseText));
//     var data = JSON.parse(this.responseText);
//     document.getElementById('omdbActors').innerHTML = data.Actors;
//     document.getElementById('omdbTitle').innerHTML = data.Title;
//     document.getElementById('omdbPoster').src = data.Poster;
//     document.getElementById('omdbYear').innerHTML = data.Year;
//   }
// }
//
// xhttp.open("GET",'http://www.omdbapi.com/?apikey=9ca25e95&t='+x,true);
// xhttp.send();


// instagram 6e7c513a2ff645c48382e91fc8a4eb94

// $('document').ready(function(){
//   $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=9ca25e95&t='+x,
//     success: function(response){
//       console.log(response);
//       console.log(response.Actors);
//       $("#omdbPoster").attr('src',response.Poster);
//       $("#omdbTitle").html(response.Title);
//       $("#omdbActors").html(response.Actors);
//       $("#omdbYear").html(response.Year);
//     }
//   });
// })
//
// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=9ca25e95&t='+x,
//   method: 'GET'
// }).done(function() {
//   console.log('Got it')
// })
//
// $('#btn').click(function(){
//   var city2 = $('#city2').val();
//   $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+city2+',us&units=imperial&APPID=55940fef855b890547195f9eb5599b05',function(data){
//     var city = data["name"];
//     var temp = data["main"]["temp"];
//     var pres = data["main"]["pressure"];
//
//     $("#city").html(city);
//     $("#temp").html(temp);
//     $("#pressure").html(pres);
//   })
// })
//
// $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=New+York,us&units=imperial&APPID=55940fef855b890547195f9eb5599b05',function(data){
//   console.log(data)
//   var city = data["name"];
//   var temp = data["main"]["temp"];
//   var pres = data["main"]["pressure"];
//
//   $("#city").html(city);
//   $("#temp").html(temp);
//   $("#pressure").html(pres);
//
// })

// var token = 'c66bf9cf01dd47e09cfe301bc16321ef',
//     username = 'foticus_iii', // rudrastyh - my username :)
//     num_photos = 4;
//
// $.ajax({ // the first ajax request returns the ID of user rudrastyh
// 	url: 'https://api.instagram.com/v1/users/search',
// 	dataType: 'jsonp',
// 	type: 'GET',
// 	data: {access_token: token, q: username}, // actually it is just the search by username
// 	success: function(data){
// 		console.log(data);
// 		$.ajax({
// 			url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent', // specify the ID of the first found user
// 			dataType: 'jsonp',
// 			type: 'GET',
// 			data: {access_token: token, count: num_photos},
// 			success: function(data2){
// 				console.log(data2);
// 				for(x in data2.data){
// 					$('ul').append('<li><img src="'+data2.data[x].images.thumbnail.url+'"></li>');
// 				}
//     			},
// 			error: function(data2){
// 				console.log(data2);
// 			}
// 		});
// 	},
// 	error: function(data){
// 		console.log(data);
// 	}
// });
//
// $.ajax('https://api.instagram.com/v1/users/self/?access_token=6e7c513a2ff645c48382e91fc8a4eb94',function(data){
//   console.log(InstagramAPI.LastResponse.text);
//   console.log(data);
//
//
// })

$('.btn').click(function(){
  var city = $('.input').val();

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+city+',us&units=imperial&APPID=55940fef855b890547195f9eb5599b05',function(data){
    console.log(data)
    var temp = data["main"]["temp"];
    var wind = data["wind"]["speed"];
    var humi = data["main"]["humidity"];
    var desc = data["weather"][0]["description"];
    var icon = data["weather"][0]["icon"];

    $('#res1').html(temp);
    $('#res2').html(wind);
    $('#res3').html(humi);
    $('#res4').html(desc);
    $('#icon4').attr('src',"http://openweathermap.org/img/w/" + icon + ".png");

    console.log(icon);


    // $("#city").html(city);
    // $("#temp").html(temp);
    // $("#pressure").html(pres);

  })
})
