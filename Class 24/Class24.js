console.log('24');


let evenOrOdd = function(num){
 (num % 2 == 0) ? console.log("even") : console.log("odd")
}
evenOrOdd(92)
evenOrOdd(93)


//-----------Output "John is 24 years old" -------

let person = {
 name: "John",
 age: 24
}
function personDescription(obj){
 return `${obj.name} is ${obj.age} years old`;
}
console.log(personDescription(person));


// NOTE logs path to node and file;
console.log(process.argv);
// NOTE additional argvs pull variables from the console array
console.log(parseInt(process.argv[2])-parseInt(process.argv[3]));



var add = (x,y) => {
  console.log(x+y);
}

var subtract = (x,y) => {
  console.log(x-y);

}

if (process.argv[2] == '+') {
  add(parseInt(process.argv[3]),parseInt(process.argv[4]));
}
if (process.argv[2] == '-') {
  subtract(process.argv[3],process.argv[4]);
}


// let direction = 'down';
// let count = 10;
// function countDownToTen(){
//   if (direction == 'down') {
//     return count--
//   } else {
//     return count++
//   }
//
// }
//
// var start = setInterval(function(){
//  console.log(countDownToTen());
// },1000)
//
// setTimeout(function(){
//   if (direction = 'down') {
//     direction = 'up';
//   } else {
//     direction = 'down';
//   }
// }, 10000);


//---------Output 'This Ford truck has 2 doors'----

let Cars = [
 {
   name: 'Nissan',
   types: 'sedan',
   doors: 4
 },
  {
   name: 'Ford',
   types: ['sedan', 'truck', 'suv'],
   doors: [2, 4]
 },
  {
   name: 'Nissan',
   types: 'sedan',
   doors: 4
 },
]
console.log(`This ${Cars[1].name} ${Cars[1].types[1]} has ${Cars[1].doors[0]} doors`)



// codefightsNotes
function hello(){
    for (let name in names) {
        this['file'+name] = new Files(names[name]);
        // console.log(this['file'+name])
    }


    let uniqueNames = new Set(names);
    let itterator = uniqueNames.values();

    for (let i=0;i<uniqueNames.size;i++) {
        let count = 0;
        var setVal = itterator.next().value;
        for (let name in names) {
            if (setVal == this['file'+name].name && count > 0) {
                this['file'+name].count = count++;
                console.log(`attemp to set ${this['file'+name].name} to count ${count}`)
            } else if (setVal == this['file'+name].name && count == 0) {
                count++;
                console.log(`added to the count ${count}`)
            }
        }
    }

    for (let name in names) {
       let newFileName = this['file'+name].name;
       if (this['file'+name].count > 0) {
           newFileName += '('+ this['file'+name].count +')'
       }
        res.push(newFileName);
        // console.log(this['file'+name])
    }
    return res;
  }




  function fileNaming(names) {
    var res = [];
    var getFirstString = /^([a-z])+/gi;
    var getIndices = /\(\d\)/g;
    var maxIndLength = [];
    var Files = function(x) {
        //get name string
        this.name = x.match(getFirstString)[0];
        let indexArray = x.match(getIndices);
        //get current indecies
        if(indexArray && indexArray.length>0) {
          this.indeces = indexArray.map(x=>{
            //indeces to ints
          return parseInt(x[1]);
          })
        } else {
            // empty indeces marked with 0
            this.indeces = [0];
        }
        maxIndLength.push(this.indeces.length);
    }
    // container for array of file objects
    let FilesArr = [];

    for (let i in names) {
        // Loop constructor, push to Files arr
        this['file'+i] = new Files(names[i]);
        FilesArr.push(this['file'+i]);
    }
    // console.log(FilesArr);

    //filter out all indeces that are complex
    let complexIndeces = FilesArr.filter(x=>{
        if (x.indeces[0] != 0 || x.indeces.length > 1) {
            return x;
        }
    })
    let lengthLimit=true;
    let sorterCount = 1;

    maxIndLength = Math.max(...maxIndLength);

    // for (let i=maxIndLength;i>-1;i--) {
        complexIndeces.sort((a,b)=>{
            // console.log(`${a.indeces[i]} - ${b.indeces[i]}`)
            return a.indeces[0] - b.indeces[0];
        })
        console.log(complexIndeces);
    // }



    console.log(complexIndeces)

    // next we have to push each element to the next level of complexity. First we have to find all the values existing to fill out the index


}

// series of separators, first initial file string, then itteration1,


function fileNaming(names) {
       var res = [];
    var getFirstString = /^([a-z])+/gi;
    var getIndices = /\(\d\)/g;
    var maxIndLength = [];
    var Files = function(x) {
        //get name string
        this.name = x.match(getFirstString)[0];
        let indexArray = x.match(getIndices);
        //get current indecies
        if(indexArray && indexArray.length>0) {
          this.indeces = indexArray.map(x=>{
            //indeces to ints
          return parseInt(x[1]);

          })
          this.indLength = this.indeces.length;

        } else {
            // empty indeces marked with 0
            this.indeces = [0];
            this.indLength = 0;
        }

        maxIndLength.push(this.indeces.length);
    }
    // container for array of file objects
    let FilesArr = [];

    for (let i in names) {
        // Loop constructor, push to Files arr
        this['file'+i] = new Files(names[i]);
        FilesArr.push(this['file'+i]);
    }
    console.log(FilesArr)
    filterLimiter = Math.max(...maxIndLength);
    let filterArray = [];
    //dynamic filters
    for (let i=0;i<filterLimiter+1;i++) {
        this['filter'+i] = FilesArr.filter(x=>{
            if (x.indLength == i) {
                return x;
            }
        })
        filterArray.push(this['filter'+i]);

    }
    for (let i=0;i<filterArray.length;i++) {
        if (i == 0) {
            filterArray[0].sort()
            console.log(filterArray[0])
        }

        for (let j=0;j<filterArray[i].length;j++) {

        }
    }
}


#content_609600 > div > div > ul > li.group.in-view.bottom-of-page.has-been-viewed.center-of-page.center-has-been-viewed

$('#content_609600').children('div').children('div').children('ul').children('li').eq(1).click(function(){

$(this).children('a').removeAttr('href')
$('body').append('<div style="display:none;" id="overlay"><span id="xOut">x</span><p style="color:white;" id="overlayTxt">The Facebook Alumni Group is created and maintained by Friends Seminary alumni.  It provides a social media group for alumni to connect and communicate.  The School shares the link below as a convenience to its alumni, but Facebook Alumni Group has no association with and is not sponsored or endorsed by Friends Seminary and Friends Seminary has no responsibility for its content.  To leave the Friends Seminary website and connect to the unaffiliated Facebook Alumni Group, click on this <a href="https://www.facebook.com/groups/31228644992">link</a></p></div>');
$('body, html').scrollTop(0);
$('#overlay').fadeIn(1000);

$('#xOut').click(function(){
  $('#overlay').fadeOut(1000);
  $('#overlay').hide();
})

});
