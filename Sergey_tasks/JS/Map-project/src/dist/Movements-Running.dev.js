"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _const = require("./const");

var _Movements2 = _interopRequireDefault(require("./Movements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Running =
/*#__PURE__*/
function (_Movements) {
  _inherits(Running, _Movements);

  function Running(newCoords, type, distance, duration, cadence, elevation, date) {
    _classCallCheck(this, Running);

    return _possibleConstructorReturn(this, _getPrototypeOf(Running).call(this, newCoords, type, distance, duration, cadence, elevation, date));
  }

  _createClass(Running, [{
    key: "buildRunning",
    value: function buildRunning() {
      _const.containerWorkouts.innerHTML += "\n            <li class=\"workout workout--running\" data-id=\"".concat(JSON.stringify(this.newCoords), "\">\n                     <h2 class=\"workout__title\">").concat(this.type, " on ").concat(this.date, "</h2>\n                     <div class=\"workout__details\">\n                        <span class=\"workout__icon\"> \uD83C\uDFC3\u200D\u2642\uFE0F</span>\n                        <span class=\"workout__value\">").concat(this.distance, "</span>\n                        <span class=\"workout__unit\">km</span>\n                     </div>\n                     <div class=\"workout__details\">\n                        <span class=\"workout__icon\">\u23F1</span>\n                        <span class=\"workout__value\">").concat(this.duration, "</span>\n                        <span class=\"workout__unit\">min</span>\n                     </div>\n                     <div class=\"workout__details\">\n                        <span class=\"workout__icon\">\u26A1\uFE0F</span>\n                        <span class=\"workout__value\">").concat(this.distance / this.duration, "</span>\n                        <span class=\"workout__unit\">km/h</span>\n                     </div>\n                     <div class=\"workout__details\">\n                        <span class=\"workout__icon\">\uD83E\uDDB6\uD83C\uDFFC</span>\n                        <span class=\"workout__value\">").concat(this.elevation, "</span>\n                        <span class=\"workout__unit\">stm</span>\n                     </div>\n            </li>\n         ");
    }
  }]);

  return Running;
}(_Movements2["default"]);

var _default = Running;
exports["default"] = _default;