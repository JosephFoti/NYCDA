console.log('hello');


// defiine

var h1 = document.createElement('h1');
var h3 = document.createElement('h3');
var s1 = document.createElement('span');
var s2 = document.createElement('span');
var img = document.createElement('img');
var p = document.createElement('p');
var br1 = document.createElement('br');
var br2 = br1.cloneNode();
var br3 = br1.cloneNode();

// add content

h1.innerHTML = "The Power of Coding";
h3.innerHTML = "Introducing Kids to Coding at an Early Age";
s1.innerHTML = "by Jane Smith";
s2.innerHTML = "Feb 1, 2018";
s2.id = "date";
img.setAttribute('src','https://timedotcom.files.wordpress.com/2016/09/gettyimages-4975998901.jpg');
p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// append

document.body.appendChild(h1);
document.body.appendChild(h3);
document.body.appendChild(s1);
document.body.appendChild(br1);
document.body.appendChild(s2);
document.body.appendChild(br2);
document.body.appendChild(img);
document.body.appendChild(br3);
document.body.appendChild(p);
