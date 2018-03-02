console.log('Crash!');

var editor = CodeMirror(document.getElementById('codeeditor'));

var Questions = function(catagory,definition,q,res){
  this.catagory = catagory;
  this.definition = definition;
  this.q = q;
  this.res = res;
}

// var string1 = New Question(
//   'Strings and their ever-expanding chaotic web of lies',
//   ''
// )
