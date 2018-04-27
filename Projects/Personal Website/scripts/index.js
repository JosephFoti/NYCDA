
// $('document').ready(function(){

//
// var scrollZipper = new ScrollMagic.Controller();
//
//
// tween1 = TweenMax.from($('#pc1'), 1.2, {alpha:0, y:15, ease: Power2.easeInOut})
// tween2 = TweenMax.from($('#pc2'), 1.2, {alpha:0, y:15, ease: Power2.easeInOut})
// tween3 = TweenMax.from($('.portCon').eq(2), 1.2, {alpha:0, y:15, ease: Power2.easeInOut})
// tween4 = TweenMax.from($('.portCon').eq(3), 1.2, {alpha:0, y:15, ease: Power2.easeInOut})
//
// scene1 = new ScrollMagic.Scene({  triggerElement:$('#pc1'), offset: -100   }).setTween(tween1).addTo(scrollZipper);
// scene2 = new ScrollMagic.Scene({  triggerElement:$('#pc2'), offset: -100   }).setTween(tween2).addTo(scrollZipper);

// })



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
    TweenMax.to($(this).children('h6'), 1.2, {alpha:1, y:-15, ease: Power2.easeInOut,});

  })
  $('.portCon').mouseleave(function(){
    var bkg = $(this).children(".bkgAni");
    var childSVG = $(this).children('div').children('div').children('a').children('svg').children('g').children('g').children('.st3');
    OverOut(bkg,childSVG);
    TweenMax.to($(this).children('h6'), 1.2, {alpha:0, y:0, ease: Power2.easeInOut,});

  })
});
