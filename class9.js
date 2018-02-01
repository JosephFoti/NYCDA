// console.log('linked')
//
// var p1 = document.getElementById('p1');
//
// p1.style.color = "red";
//
// var heading = document.getElementsByClassName('headline');
//
// heading[0].style.color = "blue";
//
// var para = document.getElementsByClassName('para');
//
// para[1].style.color = "pink";
//
// var h3 = document.getElementsByTagName("h3");
//
// h3[0].style.border = "2px solid black";
//
// var p2 = document.getElementById("p2");
//
// console.log(p2);

// function styler(key,value,element) {
//   var element2 = document.getElementById(element);
//   console.log(element2);
//   var a = element2 + ".style." + key + " = '" + value + "'";
//   console.log(a);
//   return a;
// }
//
// NOTE NOTE why wont this function work? NOTE NOTE
//
// var sect = document.getElementById('newsContainer');
// sect.style.backgroundColor = "#d8d8d8";
//
// var titles = document.getElementsByClassName('title');
//
// for (var i = 0; i < titles.length; i++) {
//   titles[i].style.color = "blue";
// }
//
// var img = document.querySelector('img');
// img.style.float = "left";
//
// var articles = document.getElementsByTagName('article');
//
// for (var i = 0; i < articles.length; i++) {
//   articles[i].style.clear = 'both';
//   articles[i].style.margin = '20px 0px';
//   articles[i].style.overflow = 'auto';
//
// }
//
// styler("color","purple","headline");
var para = document.getElementsByClassName('block');

for (let i = 0; i < para.length; i++) {
  para[i].addEventListener('mouseover',function() {
    para[i].style.visibility = "hidden";
  });
  para[i].addEventListener('mouseleave',function() {
    setTimeout(function(){ para[i].style.visibility = "block"; },1000);
  });
}
