// function stringsRearrangement(inputArray) {
//     function getPerms(arr){
//         var permutations = [];
//         var sequence = [];
//         var fullLength = arr.length;
//         var FullResult;
//
//         function permute(a) {
//         // how to recursive - credit to https://www.youtube.com/watch?v=PFOE2CAEA5E
//         // We are running a function within a looped function where each itteration redefines the scope of whats being examined
//             for(var i=0;i<a.length;i++) {
//                 var initialString = a[i];
//                 // console.log(`${a[i]} has been captured`)
//                 sequence.push(initialString);
//                 if (fullLength == sequence.length) {
//                     // console.log(`${sequence} has been pushed`)
//                     permutations.push([...sequence]);
//                 } else {
//                     let remaining = [...a.slice(0,i),...a.slice(i+1)];
//                     permute(remaining);
//                 }
//                 sequence.pop();
//             }
//         }
//         permute(arr);
//         return permutations;
//     }
//
//
//     function checkChange(aPerm) {
//         var res = true;
//                 // console.log(inputArray.sort());
//                 for(var i=1; i<aPerm.length; i++) {
//                     let thisErrorCount = 0;
//                     for (var j=0; j<aPerm[i].length; j++) {
//
//                         if (aPerm[i-1][j] != aPerm[i][j]) {
//                             thisErrorCount++;
//                             // console.log(`the error waS ${aPerm[i-1][j]} does not equal ${aPerm[i][j]}`)
//                         }
//                     }
//                     if (thisErrorCount != 1) {
//                             // console.log('false! with '+thisErrorCount)
//                             res = false;
//                             // console.log(`comparing ${aPerm[i-1]} to ${aPerm[i]} and stumbling on ${j}`)
//                             break;
//                     }
//                 }
//                 return res;
//     }
//
//
//
//     var permutations = getPerms(inputArray);
//
//     function findDiffs(perms) {
//         for (let k=0;k<perms.length;k++) {
//             if (checkChange(perms[k])) {
//                 return true;
//             }
//         }
//         return false;
//     }
//
//     return findDiffs(permutations);
//

var knapsackHevy = function(){

    let res = [];
   let permutations = [];
   //get all possible sets that are possible based on the weight
   function permute(x1,x2,y1,y2,z) {
       let maxPermsX = Math.floor(z/x2);
       console.log(maxPermsX + ' is the maximum times you can take item x')
       let bestValue = 0;
       for (let i=0;i<=maxPermsX;i++) {
           let testValue = 0;
           let testWeight = 0;
           for (let j=0;j<i;j++) {
               testValue += x1;
               testWeight += x2;
           }
           console.log(`with ${i} item x(s) we start with total value ${testValue}`)
           while (testWeight<z) {
               testValue += y1;
               testWeight += y2;
               if (testWeight>z && bestValue < testValue) {
                   bestValue = testValue;
               }
           }
       }
       console.log(bestValue);
   }

   permute(value1,weight1,value2,weight2,maxW);




}
