'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _russia = require('./russia');

var _russia2 = _interopRequireDefault(_russia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Soviet = function (_Russia) {
  _inherits(Soviet, _Russia);

  function Soviet(place, drunk) {
    _classCallCheck(this, Soviet);

    var _this = _possibleConstructorReturn(this, (Soviet.__proto__ || Object.getPrototypeOf(Soviet)).call(this, place, drunk));

    _this.gov = 'Communist';

    return _this;
  }

  _createClass(Soviet, [{
    key: 'isBear',
    value: function isBear() {
      console.log('Yea, thats a fucking bear!');
    }
  }]);

  return Soviet;
}(_russia2.default);

exports.default = Soviet;