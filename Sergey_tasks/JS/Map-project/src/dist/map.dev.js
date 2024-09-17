"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("leaflet/dist/leaflet.css");

var _leaflet2 = _interopRequireDefault(require("leaflet"));

require("./map.html");

require("./map.css");

var _const = require("./const");

var _Movements = _interopRequireWildcard(require("./Movements"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// you can see demo on this page https://mapty.netlify.app/ ----------------------
var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.location();
    this.initMap();

    _const.inputType.addEventListener("click", this.checkTraning());

    this.checkTraning(); // this.showMarker();
    // this.updateTraningField();

    this.clickButton();
  }

  _createClass(App, [{
    key: "location",
    value: function location() {
      var myCoords = JSON.parse(localStorage.getItem("myCoords")) || [];
      navigator.geolocation.getCurrentPosition(function (_ref) {
        var coords = _ref.coords;
        var latitude = coords.latitude,
            longitude = coords.longitude;
        var currentCoords = [latitude, longitude];
        localStorage.setItem("myCoords", JSON.stringify(currentCoords));
      });

      if (JSON.parse(localStorage.getItem("movements"))) {
        this.updateTraningField();
      }
    }
  }, {
    key: "initMap",
    value: function initMap() {
      var map = _leaflet2["default"].map('map').setView(JSON.parse(localStorage.getItem("myCoords")), 13);

      _leaflet2["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      _leaflet2["default"].marker(JSON.parse(localStorage.getItem("myCoords"))).addTo(map).bindPopup('Ваше местоположение').openPopup();

      map.on("click", function (elem) {
        _const.form.style.opacity = "1";
        var newCoords = [elem.latlng.lat, elem.latlng.lng];
        localStorage.setItem("newCoords", JSON.stringify(newCoords)); // this.showMarker();
      });
      this.showMarker();
    } // clickMap(){
    //     this.map.on("click", (elem) => {
    //         form.style.opacity = "1";
    //         const newCoords = [elem.latlng.lat, elem.latlng.lng]; 
    //         localStorage.setItem("newCoords", JSON.stringify(newCoords));
    //         this.showMarker();
    //     });
    // }

  }, {
    key: "checkTraning",
    value: function checkTraning() {
      var cycling = document.querySelector(".form__row--cycling");
      var running = document.querySelector(".form__row--running");

      if (_const.inputType.value === "running") {
        cycling.classList.remove("form__row--hidden");
        running.classList.add("form__row--hidden");
      }

      if (_const.inputType.value === "cycling") {
        cycling.classList.add("form__row--hidden");
        running.classList.remove("form__row--hidden");
      }
    }
  }, {
    key: "clickButton",
    value: function clickButton() {
      var _this = this;

      _const.button.addEventListener("click", function () {
        _const.form.style.opacity = "0";

        _this.dataValidation();

        _this.showMarker();

        document.querySelectorAll("input").forEach(function (elem) {
          return elem.value = "";
        });
      });
    }
  }, {
    key: "showMarker",
    value: function showMarker() {
      var movements = JSON.parse(localStorage.getItem("movements")) || [];
      movements.forEach(function (elem) {
        var marker = _leaflet2["default"].marker([elem.newCoords[0], elem.newCoords[1]]);

        marker.addTo(map);
        marker.bindPopup("".concat(_const.inputType.value, " on ", "".concat(_const.today.getDate(), ".0").concat(_const.today.getMonth() + 1, ".").concat(_const.today.getFullYear())));
        marker.openPopup();
      });
    }
  }, {
    key: "dataValidation",
    value: function dataValidation() {
      var arrayMovements = JSON.parse(localStorage.getItem("movements")) || [];
      var newCoords = JSON.parse(localStorage.getItem("newCoords"));
      var type = _const.inputType.value;
      var distance = parseInt(_const.inputDistance.value);
      var duration = parseInt(_const.inputDuration.value);
      var cadence = parseInt(_const.inputCadence.value);
      var elevation = parseInt(_const.inputElevation.value);
      var date = "".concat(_const.today.getDate(), ".0").concat(_const.today.getMonth() + 1, ".").concat(_const.today.getFullYear());
      var newMovement = new _Movements["default"](newCoords, type, distance, duration, cadence, elevation, date);
      newMovement.buildField();
      arrayMovements.push(newMovement);
      localStorage.setItem("movements", JSON.stringify(arrayMovements));
      newMovement.clearLocalStorage();
    }
  }, {
    key: "updateTraningField",
    value: function updateTraningField() {
      var movements = JSON.parse(localStorage.getItem("movements"));
      movements.forEach(function (elem) {
        var newCoords = elem.newCoords;
        var type = elem.type;
        var distance = elem.distance;
        var duration = elem.duration;
        var cadence = elem.cadence;
        var elevation = elem.elevation;
        var updateMovement = new _Movements["default"](newCoords, type, distance, duration, cadence, elevation);
        updateMovement.buildField();
      });
    }
  }]);

  return App;
}();

new App();