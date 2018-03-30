let s = '* * * * * * * * * *';

var int = setInterval(function(){
  console.log(s);
  s=s.split(' ');
  s.pop();
  s=s.join(' ');
  if (s.length === 0) {
    clearInterval(int);
  }
},1000);
