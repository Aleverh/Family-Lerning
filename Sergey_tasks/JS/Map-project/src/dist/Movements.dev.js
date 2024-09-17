"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _const = require("./const");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Movements =
/*#__PURE__*/
function () {
  function Movements(newCoords, type, distance, duration, cadence, elevation, date) {
    _classCallCheck(this, Movements);

    this.type = type;
    this.distance = distance;
    this.duration = duration;
    this.cadence = cadence;
    this.elevation = elevation;
    this.newCoords = newCoords;
    this.date = date;
  }

  _createClass(Movements, [{
    key: "buildCycling",
    value: function buildCycling() {
      _const.containerWorkouts.innerHTML += "\n            <li class=\"workout workout--cycling\" data-id=\"".concat(JSON.stringify(this.newCoords), "\">\n                     <h2 class=\"workout__title\">").concat(this.type, " on ").concat(this.date, "</h2>\n                     <div class=\"workout__details\">\n                        <span class=\"workout__icon\"> \uD83D\uDEB4\u200D\u2640\uFE0F</span>\n                        <span class=\"workout__value\">").concat(this.distance, "</span>\n                        <span class=\"workout__unit\">km</span>\n                     </div>\n                     <div class=\"workout__details\">\n                        <span class=\"workout__icon\">\u23F1</span>\n                        <span class=\"workout__value\">").concat(this.duration, "</span>\n                        <span class=\"workout__unit\">min</span>\n                     </div>\n                     <div class=\"workout__details\">\n                        <span class=\"workout__icon\">\u26A1\uFE0F</span>\n                        <span class=\"workout__value\">").concat(this.distance / this.duration, "</span>\n                        <span class=\"workout__unit\">km/h</span>\n                     </div>\n                     <div class=\"workout__details\">\n                        <span class=\"workout__icon\">\u26F0</span>\n                        <span class=\"workout__value\">").concat(this.elevation, "</span>\n                        <span class=\"workout__unit\">m</span>\n                     </div>\n            </li>\n         ");
    }
  }]);

  return Movements;
}();

var _default = Movements;
exports["default"] = _default;