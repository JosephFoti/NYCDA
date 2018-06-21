'use strict';

var _module = require('./module1.js');

var _module2 = _interopRequireDefault(_module);

var _Prescription = require('./Prescription');

var _Prescription2 = _interopRequireDefault(_Prescription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rx = new _Prescription2.default('Advil', 40);

console.log(rx.getDrug());

(0, _module2.default)('Mantis');