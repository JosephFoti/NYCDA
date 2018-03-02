console.log('morning');


$('#movie').on('keyup',function(){
  $('span').text("");
  var movie = $('#movie').val();
    $.getJSON('http://www.omdbapi.com/?apikey=9ca25e95&t='+movie,function(data){
      console.log(data);
      var poster = data["Poster"];
      var year = data["Year"];
      var rated = data["Rated"];
      var runtime = data["Runtime"];
      var genre = data["Genre"];
      $('#poster').attr('src',poster);
      $('#year').html(year);
      $('#rated').html(rated);
      $('#runtime').html(runtime);
      $('#genre').html(genre);
    })
})

var apiKey = '179e27ffd2c44de98c1a826ba59e4dd9';
var source = 'cnn';
var s = {
  news: "cnn"
}

s['news'];
$('li').click(function(){
  var source = $(this).data('pull');
  $('.news-article').fadeOut(250);
  setTimeout(function(){
    $('.news-article').html('');
    $.getJSON('https://newsapi.org/v1/articles?source='+ source +'&apiKey=' + apiKey,
     function(data) {
       console.log(data);

       for (var i = 0; i < data.articles.length; i++) {

       var author = data["articles"][i]["author"];
       var content = data["articles"][i]["description"];
       var date = data["articles"][i]["publishedAt"];
       var title = data["articles"][i]["title"];
       var pic = data["articles"][i]["urlToImage"];
       var link = data["articles"][i]["url"];


       $(".news-article").append(`<article class="${source}${i}"><img src="${pic}"/><h1>${title}</h1><h3>${author}</h3><p>${content}</p><a href="${link}">More...</a></article>`);

       }
       // if ($(this).readyState == 4)

     }).done(function(){
       setTimeout(function(){
         $('.news-article').fadeIn(250);
       },500)
     })
  },250);



})


 $.getJSON('https://newsapi.org/v1/articles?source='+ source +'&apiKey=' + apiKey,
  function(data) {
    console.log(data);

    for (var i = 0; i < data.articles.length; i++) {

    var author = data["articles"][i]["author"];
    var content = data["articles"][i]["description"];
    var date = data["articles"][i]["publishedAt"];
    var title = data["articles"][i]["title"];
    var pic = data["articles"][i]["urlToImage"];
    var link = data["articles"][i]["url"];


    $(".news-article").append('<article id="'+source+i+'">' + author + "<br>" +title + "<br>" +content + "<br>" +date + "<br>" +"<img src="+ pic + "></div>");

    }

  })




// Codefights 17


  function boxBlur(image) {
    var blurStore = [];
    var blur = [];
    var avs = [];
    var htick=0,wtick=0;
    var dementions = [image.length,image[0].length];
    for (var i=0;i<image.length;i++) {
        for (var j=0;j<image[i].length;j++) {

            if ((i > 0 && j > 0) && (i < image.length-1 && j < image[i].length-1)) {
                blur = [image[i-1][j-1],image[i-1][j],image[i-1][j+1],image[i][j-1],image[i][j],image[i][j+1],image[i+1][j-1],image[i+1][j],image[i+1][j+1]];
                blurStore.push(blur);
                console.log(i +" "+j)
            }
        }
    }
    for (var k=0;k<blurStore.length;k++) {
        let total = 0;
        let reducer = (accumulator, currentValue) => accumulator + currentValue;
        total = blurStore[k].reduce(reducer);
        avs.push(Math.floor(total/9));


    }
    for (var l=0;l<avs.length;l++) {
        while(dementions[0]>htick) {
            while(dementions[1]>wtick) {

            }
        }
    }
    console.log(avs +' '+ dementions)
}
