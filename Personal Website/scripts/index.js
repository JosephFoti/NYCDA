
$('document').ready(function(){

})


function OverIn(a,b) {
  var OverInGo = TweenMax.to($(a),.5,{css:{width:"100%",height:"100%",left:"0%",top:"0%"},paused:true,ease:Power2.easeInOut});
  var Color = TweenLite.to($(b),.5,{css:{fill:"#ffffff"}});
  OverInGo.play();
  Color.play();
}

function OverOut(a,b) {
  var OverInGo = TweenMax.to($(a),.5,{css:{width:"0px",height:"0px",left:"50%",top:"50%"},paused:true,ease:Power2.easeInOut});
  var Color = TweenLite.to($(b),.5,{css:{fill:"#204582"}});
  OverInGo.play();
  Color.play();
}




$('document').ready(function(){
  console.log('hello')
  $('.portCon').mouseenter(function(){
    var bkg = $(this).children(".bkgAni");
    var childSVG = $(this).children('div').children('div').children('a').children('svg').children('g').children('g').children('.st3');
    OverIn(bkg,childSVG);
  })
  $('.portCon').mouseleave(function(){
    var bkg = $(this).children(".bkgAni");
    var childSVG = $(this).children('div').children('div').children('a').children('svg').children('g').children('g').children('.st3');
    OverOut(bkg,childSVG);
  })
});
