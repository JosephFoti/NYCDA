import Soviet from './soviet'

var Stalin = new Soviet('Kremlin',true);
var Putin = new Russia('Kremlin',false,'Democracy?');

console.log(Stalin.getGovernment());
console.log(Putin.getGovernment());
console.log(Stalin.isBear());
