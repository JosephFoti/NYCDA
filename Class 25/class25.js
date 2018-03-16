console.log('hello')


// /-Output ["Maria", "Stacey", "Tania", "James", "David", "Sasha", "Mike", "Joe", "Hossam", "Brian"]
var group1 = ["Maria", "Stacey", "Tania", "James", "David"];
var group2 = ["Sasha", "Mike", "Joe", "Hossam", "Brian"];
let z = [...group1,...group2];
console.log(z);

console.log(group1.sort())
console.log(group2.sort())

var group3 = 'John, James, Mathew';
console.log((group3.split(', ')).sort())
