
$('document').ready(function(){

})


function OverIn(a) {
  var OverInGo = TweenMax.to($(a),.75,{css:{width:"100%",height:"100%",left:"0%",top:"0%"},paused:true,ease:Power2.easeInOut});
  var Color = TweenLite.to($(".st3"),.75,{css:{fill:"#ffffff"}});
  OverInGo.play();
  Color.play();
}

function OverOut(a) {
  var OverInGo = TweenMax.to($(a),.75,{css:{width:"0px",height:"0px",left:"50%",top:"50%"},paused:true,ease:Power2.easeInOut});
  OverInGo.play();
}




$('document').ready(function(){
  console.log('hello')
  $('.portCon').mouseenter(function(){
    var bkg = $(this).children(".bkgAni");
    OverIn(bkg);
  })
  $('.portCon').mouseleave(function(){
    var bkg = $(this).children(".bkgAni");
    OverOut(bkg);
  })
});
