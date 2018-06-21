'use strict';

var _soviet = require('./soviet');

var _soviet2 = _interopRequireDefault(_soviet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stalin = new _soviet2.default('Kremlin', true);
var Putin = new Russia('Kremlin', false, 'Democracy?');

console.log(Stalin.getGovernment());
console.log(Putin.getGovernment());
console.log(Stalin.isBear());