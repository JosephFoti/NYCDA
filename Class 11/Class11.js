console.log('hello');

var h1 = document.createElement('h1');
var p = document.createElement('p');
var p2 = document.createElement('p');
var div = document.createElement('div');
var img = document.createElement('img');
var btn = document.createElement('button');
var ul = document.createElement('ul');
var li = document.createElement('li');

var ul2 = document.createElement('ul');
var li2 = document.createElement('li');

var imgs = ["https://media.giphy.com/media/xThta0ebgsTIumg4dG/giphy.gif","https://media.giphy.com/media/l0IpCHwpFfVCRfyzC/giphy.gif","https://media.giphy.com/media/xThtanCZAf2Lyu1da8/giphy.gif","https://media.giphy.com/media/xThtapBt5ytjzceN0c/giphy.gif","https://media.giphy.com/media/3o8doVAxrMjXbIHaU0/giphy.gif"]

btn.innerHTML = "new img";
btn.setAttribute = ("type","button");

var ticker = 0;

btn.onclick = function(){

  var gifSRC = imgs[ticker];
  if (ticker < 4) {
    ticker++
  } else {
    ticker = 0;
  }

  img.setAttribute('src',gifSRC)
  var lastGif = gifSRC;

  // RANDOM IMAGES
  // var gifSRC = imgs[Math.floor(Math.random()*5)];
  // while (lastGif == gifSRC) {
  //   gifSRC = imgs[Math.floor(Math.random()*5)];
  // }
}

document.body.addEventListener('keypress',function(e){
  var x = String.fromCharCode(e.keyCode);
  if (x == " ") {

    var gifSRC = imgs[ticker];
    if (ticker < 4) {
      ticker++
    } else {
      ticker = 0;
    }

    // var gifSRC = imgs[Math.floor(Math.random()*5)];
    // while (lastGif == gifSRC) {
    //   gifSRC = imgs[Math.floor(Math.random()*5)];
    // }
    // img.setAttribute('src',gifSRC)
    // var lastGif = gifSRC;


    img.setAttribute('src',gifSRC)
    var lastGif = gifSRC;
  }
})

h1.innerHTML = "hello";
h1.id = "firstChild";
img.setAttribute('src','https://media.giphy.com/media/3o8doVAxrMjXbIHaU0/giphy.gif');
p.innerHTML = "Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph";
p2.innerHTML = "Paragraph2 Paragraph2 Paragraph2 Paragraph2 Paragraph2 Paragraph2 Paragraph2 Paragraph2 Paragraph2 Paragraph2 Paragraph2 Paragraph2 Paragraph2 Paragraph2";
li.innerHTML = "List";
li2.innerHTML = "List2";


document.body.appendChild(h1);
document.body.appendChild(img);
document.body.appendChild(p);
document.body.insertBefore(p2,img);
document.body.appendChild(btn);

document.body.appendChild(ul);
ul.appendChild(li);
li.appendChild(ul2);
ul2.appendChild(li2);

document.body.style.background = 'gray'
