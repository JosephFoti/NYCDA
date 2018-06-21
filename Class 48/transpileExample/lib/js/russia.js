"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Russia = function () {
  function Russia(place, drunk, government) {
    _classCallCheck(this, Russia);

    this.place = place;
    this.drunk = drunk;
    this.gov = government;
  }

  _createClass(Russia, [{
    key: "getGovernment",
    value: function getGovernment() {
      return this.gov;
    }
  }, {
    key: "isDrunk",
    value: function isDrunk() {
      return this.drunk;
    }
  }]);

  return Russia;
}();

exports.default = Russia;