/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit;\\n}\\n\\nhtml {\\n  box-sizing: border-box;\\n  font-size: 62.5%;\\n}\\n@media only screen and (max-width: 61.25em) {\\n  html {\\n    font-size: 50%;\\n  }\\n}\\n\\nbody {\\n  font-family: \\\"Nunito Sans\\\", sans-serif;\\n  font-weight: 400;\\n  line-height: 1.6;\\n  color: #615551;\\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  min-height: calc(100vh - 8vw);\\n}\\n\\n.container {\\n  max-width: 120rem;\\n  min-height: 117rem;\\n  margin: 4vw auto;\\n  background-color: #fff;\\n  border-radius: 9px;\\n  overflow: hidden;\\n  box-shadow: 0 2rem 6rem 0.5rem rgba(97, 85, 81, 0.2);\\n  display: grid;\\n  grid-template-rows: 10rem minmax(100rem, auto);\\n  grid-template-columns: 1fr 2fr;\\n  grid-template-areas: \\\"head head\\\" \\\"list recipe\\\";\\n}\\n@media only screen and (max-width: 78.15em) {\\n  .container {\\n    max-width: 100%;\\n    margin: 0;\\n    border-radius: 0;\\n  }\\n}\\n\\n.btn--small, .btn--small:link, .btn--small:visited, .btn {\\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\\n  border-radius: 10rem;\\n  border: none;\\n  text-transform: uppercase;\\n  color: #fff;\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  transition: all 0.2s;\\n}\\n.btn--small:hover, .btn:hover {\\n  transform: scale(1.05);\\n}\\n.btn--small:focus, .btn:focus {\\n  outline: none;\\n}\\n.btn--small > *:first-child, .btn > *:first-child {\\n  margin-right: 1rem;\\n}\\n\\n.btn {\\n  padding: 1.5rem 4rem;\\n  font-size: 1.5rem;\\n  font-weight: 600;\\n}\\n.btn svg {\\n  height: 2.25rem;\\n  width: 2.25rem;\\n  fill: currentColor;\\n}\\n\\n.btn--small, .btn--small:link, .btn--small:visited {\\n  font-size: 1.4rem;\\n  font-weight: 600;\\n  padding: 1.25rem 2.25rem;\\n  text-decoration: none;\\n}\\n.btn--small svg, .btn--small:link svg, .btn--small:visited svg {\\n  height: 1.75rem;\\n  width: 1.75rem;\\n  fill: currentColor;\\n}\\n\\n.btn--inline {\\n  color: #f38e82;\\n  font-size: 1.3rem;\\n  font-weight: 600;\\n  border: none;\\n  background-color: #f9f5f3;\\n  padding: 0.8rem 1.2rem;\\n  border-radius: 10rem;\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  transition: all 0.2s;\\n}\\n.btn--inline svg {\\n  height: 1.6rem;\\n  width: 1.6rem;\\n  fill: currentColor;\\n  margin: 0 0.2rem;\\n}\\n.btn--inline span {\\n  margin: 0 0.4rem;\\n}\\n.btn--inline:hover {\\n  color: #f48982;\\n  background-color: #f2efee;\\n}\\n.btn--inline:focus {\\n  outline: none;\\n}\\n\\n.btn--round {\\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\\n  border-radius: 50%;\\n  border: none;\\n  cursor: pointer;\\n  height: 4.5rem;\\n  width: 4.5rem;\\n  transition: all 0.2s;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.btn--round:hover {\\n  transform: scale(1.07);\\n}\\n.btn--round:focus {\\n  outline: none;\\n}\\n.btn--round svg {\\n  height: 2.5rem;\\n  width: 2.5rem;\\n  fill: #fff;\\n}\\n\\n.btn--tiny {\\n  height: 2rem;\\n  width: 2rem;\\n  border: none;\\n  background: none;\\n  cursor: pointer;\\n}\\n.btn--tiny svg {\\n  height: 100%;\\n  width: 100%;\\n  fill: #f38e82;\\n  transition: all 0.3s;\\n}\\n.btn--tiny:focus {\\n  outline: none;\\n}\\n.btn--tiny:hover svg {\\n  fill: #f48982;\\n  transform: translateY(-1px);\\n}\\n.btn--tiny:active svg {\\n  fill: #f48982;\\n  transform: translateY(0);\\n}\\n.btn--tiny:not(:last-child) {\\n  margin-right: 0.3rem;\\n}\\n\\n.heading--2 {\\n  font-size: 2rem;\\n  font-weight: 700;\\n  color: #f38e82;\\n  text-transform: uppercase;\\n  margin-bottom: 2.5rem;\\n  text-align: center;\\n}\\n\\n.link:link,\\n.link:visited {\\n  color: #918581;\\n}\\n\\n.spinner {\\n  margin: 5rem auto;\\n  text-align: center;\\n}\\n.spinner svg {\\n  height: 6rem;\\n  width: 6rem;\\n  fill: #f38e82;\\n  animation: rotate 2s infinite linear;\\n}\\n\\n@keyframes rotate {\\n  0% {\\n    transform: rotate(0);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n.message,\\n.error {\\n  max-width: 40rem;\\n  margin: 0 auto;\\n  padding: 5rem 4rem;\\n  display: flex;\\n}\\n.message svg,\\n.error svg {\\n  height: 3rem;\\n  width: 3rem;\\n  fill: #f38e82;\\n  transform: translateY(-0.3rem);\\n}\\n.message p,\\n.error p {\\n  margin-left: 1.5rem;\\n  font-size: 1.8rem;\\n  line-height: 1.5;\\n  font-weight: 600;\\n}\\n\\n.header {\\n  grid-area: head;\\n  background-color: #f9f5f3;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.header__logo {\\n  margin-left: 4rem;\\n  height: 4.6rem;\\n  display: block;\\n}\\n\\n.search {\\n  background-color: #fff;\\n  border-radius: 10rem;\\n  display: flex;\\n  align-items: center;\\n  padding-left: 3rem;\\n  transition: all 0.3s;\\n}\\n.search:focus-within {\\n  transform: translateY(-2px);\\n  box-shadow: 0 0.7rem 3rem rgba(97, 85, 81, 0.08);\\n}\\n.search__field {\\n  border: none;\\n  background: none;\\n  font-family: inherit;\\n  color: inherit;\\n  font-size: 1.7rem;\\n  width: 30rem;\\n}\\n.search__field:focus {\\n  outline: none;\\n}\\n.search__field::placeholder {\\n  color: #d3c7c3;\\n}\\n@media only screen and (max-width: 61.25em) {\\n  .search__field {\\n    width: auto;\\n  }\\n  .search__field::placeholder {\\n    color: white;\\n  }\\n}\\n.search__btn {\\n  font-weight: 600;\\n  font-family: inherit;\\n}\\n\\n.nav {\\n  align-self: stretch;\\n  margin-right: 2.5rem;\\n}\\n.nav__list {\\n  list-style: none;\\n  display: flex;\\n  height: 100%;\\n}\\n.nav__item {\\n  position: relative;\\n}\\n.nav__btn {\\n  height: 100%;\\n  font-family: inherit;\\n  color: inherit;\\n  font-size: 1.4rem;\\n  font-weight: 700;\\n  text-transform: uppercase;\\n  background: none;\\n  border: none;\\n  cursor: pointer;\\n  padding: 0 1.5rem;\\n  transition: all 0.3s;\\n  display: flex;\\n  align-items: center;\\n}\\n.nav__btn svg {\\n  height: 2.4rem;\\n  width: 2.4rem;\\n  fill: #f38e82;\\n  margin-right: 0.7rem;\\n  transform: translateY(-1px);\\n}\\n.nav__btn:focus {\\n  outline: none;\\n}\\n.nav__btn:hover {\\n  background-color: #f2efee;\\n}\\n\\n.bookmarks {\\n  padding: 1rem 0;\\n  position: absolute;\\n  right: -2.5rem;\\n  z-index: 10;\\n  width: 40rem;\\n  background-color: #fff;\\n  box-shadow: 0 0.8rem 5rem 2rem rgba(97, 85, 81, 0.1);\\n  visibility: hidden;\\n  opacity: 0;\\n  transition: all 0.5s 0.2s;\\n}\\n.bookmarks__list {\\n  list-style: none;\\n}\\n.bookmarks__field {\\n  cursor: pointer;\\n  padding: 0 4rem;\\n  display: flex;\\n  align-items: center;\\n  height: 100%;\\n  transition: all 0.3s;\\n}\\n.bookmarks__field:hover {\\n  background-color: #f2efee;\\n}\\n.bookmarks:hover, .nav__btn--bookmarks:hover + .bookmarks {\\n  visibility: visible;\\n  opacity: 1;\\n}\\n\\n.preview__link:link, .preview__link:visited {\\n  display: flex;\\n  align-items: center;\\n  padding: 1.5rem 3.25rem;\\n  transition: all 0.3s;\\n  border-right: 1px solid #fff;\\n  text-decoration: none;\\n}\\n.preview__link:hover {\\n  background-color: #f9f5f3;\\n  transform: translateY(-2px);\\n}\\n.preview__link--active {\\n  background-color: #f9f5f3;\\n}\\n.preview__fig {\\n  flex: 0 0 5.8rem;\\n  border-radius: 50%;\\n  overflow: hidden;\\n  height: 5.8rem;\\n  margin-right: 2rem;\\n  position: relative;\\n  backface-visibility: hidden;\\n}\\n.preview__fig::before {\\n  content: \\\"\\\";\\n  display: block;\\n  height: 100%;\\n  width: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\\n  opacity: 0.4;\\n}\\n.preview__fig img {\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  transition: all 0.3s;\\n}\\n.preview__data {\\n  display: grid;\\n  width: 100%;\\n  grid-template-columns: 1fr 2rem;\\n  row-gap: 0.1rem;\\n  align-items: center;\\n}\\n.preview__title {\\n  grid-column: 1/-1;\\n  font-size: 1.45rem;\\n  color: #f38e82;\\n  text-transform: uppercase;\\n  font-weight: 600;\\n  text-overflow: ellipsis;\\n  max-width: 25rem;\\n  white-space: nowrap;\\n  overflow: hidden;\\n}\\n.preview__publisher {\\n  font-size: 1.15rem;\\n  color: #918581;\\n  text-transform: uppercase;\\n  font-weight: 600;\\n}\\n.preview__user-generated {\\n  background-color: #eeeae8;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: 2rem;\\n  width: 2rem;\\n  border-radius: 10rem;\\n  margin-left: auto;\\n  margin-right: 1.75rem;\\n}\\n.preview__user-generated svg {\\n  height: 1.2rem;\\n  width: 1.2rem;\\n  fill: #f38e82;\\n}\\n\\n.search-results {\\n  padding: 3rem 0;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.results {\\n  list-style: none;\\n  margin-bottom: 2rem;\\n}\\n\\n.pagination {\\n  margin-top: auto;\\n  padding: 0 3.5rem;\\n}\\n.pagination::after {\\n  content: \\\"\\\";\\n  display: table;\\n  clear: both;\\n}\\n.pagination__btn--prev {\\n  float: left;\\n}\\n.pagination__btn--next {\\n  float: right;\\n}\\n\\n.copyright {\\n  color: #918581;\\n  font-size: 1.2rem;\\n  padding: 0 3.5rem;\\n  margin-top: 4rem;\\n}\\n.copyright .twitter-link:link,\\n.copyright .twitter-link:visited {\\n  color: #918581;\\n}\\n\\n.recipe {\\n  background-color: #f9f5f3;\\n}\\n.recipe__fig {\\n  height: 32rem;\\n  position: relative;\\n  transform-origin: top;\\n}\\n.recipe__fig::before {\\n  content: \\\"\\\";\\n  display: block;\\n  height: 100%;\\n  width: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\\n  opacity: 0.6;\\n}\\n.recipe__img {\\n  width: 100%;\\n  display: block;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n.recipe__title {\\n  position: absolute;\\n  bottom: 0;\\n  left: 50%;\\n  transform: translate(-50%, 20%) skewY(-6deg);\\n  color: #fff;\\n  font-weight: 700;\\n  font-size: 3.25rem;\\n  text-transform: uppercase;\\n  width: 50%;\\n  line-height: 1.95;\\n  text-align: center;\\n}\\n.recipe__title span {\\n  -webkit-box-decoration-break: clone;\\n  box-decoration-break: clone;\\n  padding: 1.3rem 2rem;\\n  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);\\n}\\n@media only screen and (max-width: 61.25em) {\\n  .recipe__title {\\n    width: 70%;\\n  }\\n}\\n.recipe__details {\\n  display: flex;\\n  align-items: center;\\n  padding: 7.5rem 8rem 3.5rem 8rem;\\n}\\n.recipe__info {\\n  font-size: 1.65rem;\\n  text-transform: uppercase;\\n  display: flex;\\n  align-items: center;\\n}\\n.recipe__info:not(:last-child) {\\n  margin-right: 4.5rem;\\n}\\n.recipe__info-icon {\\n  height: 2.35rem;\\n  width: 2.35rem;\\n  fill: #f38e82;\\n  margin-right: 1.15rem;\\n}\\n.recipe__info-data {\\n  margin-right: 0.5rem;\\n  font-weight: 700;\\n}\\n.recipe__info-buttons {\\n  display: flex;\\n  margin-left: 1.6rem;\\n  transform: translateY(-1px);\\n}\\n.recipe__user-generated {\\n  background-color: #eeeae8;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: 4rem;\\n  width: 4rem;\\n  border-radius: 10rem;\\n  margin-left: auto;\\n  margin-right: 1.75rem;\\n}\\n.recipe__user-generated svg {\\n  height: 2.25rem;\\n  width: 2.25rem;\\n  fill: #f38e82;\\n}\\n.recipe__ingredients {\\n  padding: 5rem 8rem;\\n  font-size: 1.6rem;\\n  line-height: 1.4;\\n  background-color: #f2efee;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.recipe__ingredient-list {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: 2.5rem 3rem;\\n  list-style: none;\\n}\\n.recipe__ingredient {\\n  display: flex;\\n}\\n.recipe__icon {\\n  height: 2rem;\\n  width: 2rem;\\n  fill: #f38e82;\\n  margin-right: 1.1rem;\\n  flex: 0 0 auto;\\n  margin-top: 0.1rem;\\n}\\n.recipe__quantity {\\n  margin-right: 0.5rem;\\n  flex: 0 0 auto;\\n}\\n.recipe__directions {\\n  padding: 5rem 10rem;\\n  padding-bottom: 5rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.recipe__directions-text {\\n  font-size: 1.7rem;\\n  text-align: center;\\n  margin-bottom: 3.5rem;\\n  color: #918581;\\n}\\n.recipe__publisher {\\n  font-weight: 700;\\n}\\n\\n.add-recipe-window {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 100rem;\\n  background-color: white;\\n  border-radius: 9px;\\n  padding: 5rem 6rem;\\n  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.25);\\n  z-index: 1000;\\n  transition: all 0.5s;\\n}\\n.add-recipe-window .btn--close-modal {\\n  font-family: inherit;\\n  color: inherit;\\n  position: absolute;\\n  top: 0.5rem;\\n  right: 1.6rem;\\n  font-size: 3.5rem;\\n  cursor: pointer;\\n  border: none;\\n  background: none;\\n}\\n\\n.overlay {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.4);\\n  backdrop-filter: blur(4px);\\n  z-index: 100;\\n  transition: all 0.5s;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n  opacity: 0;\\n}\\n\\n.upload {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: 4rem 6rem;\\n}\\n.upload__column {\\n  display: grid;\\n  grid-template-columns: 1fr 2.8fr;\\n  align-items: center;\\n  gap: 1.5rem;\\n}\\n.upload__column label {\\n  font-size: 1.5rem;\\n  font-weight: 600;\\n  color: inherit;\\n}\\n.upload__column input {\\n  font-size: 1.5rem;\\n  padding: 0.8rem 1rem;\\n  border: 1px solid #ddd;\\n  border-radius: 0.5rem;\\n  transition: all 0.2s;\\n}\\n.upload__column input::placeholder {\\n  color: #d3c7c3;\\n}\\n.upload__column input:focus {\\n  outline: none;\\n  border: 1px solid #f38e82;\\n  background-color: #f9f5f3;\\n}\\n.upload__column button {\\n  grid-column: 1/span 2;\\n  justify-self: center;\\n  margin-top: 1rem;\\n}\\n.upload__heading {\\n  font-size: 2.25rem;\\n  font-weight: 700;\\n  text-transform: uppercase;\\n  margin-bottom: 1rem;\\n  grid-column: 1/-1;\\n}\\n.upload__btn {\\n  grid-column: 1/-1;\\n  justify-self: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://final/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://final/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://final/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://final/./src/sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./src/js/model.js\");\n/* harmony import */ var _views_listView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/listView */ \"./src/js/views/listView.js\");\n/* harmony import */ var _views_recipeView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/recipeView */ \"./src/js/views/recipeView.js\");\n/* harmony import */ var _views_bookmarkView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/bookmarkView */ \"./src/js/views/bookmarkView.js\");\n\r\n\r\n\r\n//----------------------------------------------------------------------\r\n\r\n\r\n\r\n\r\n\r\n//----------------------------------------------------------------------\r\nconst recipeContainer = document.querySelector('.recipe');\r\n\r\nconst timeout = function (s) {\r\n  return new Promise(function (_, reject) {\r\n    setTimeout(function () {\r\n      reject(new Error(`Request took too long! Timeout after ${s} second`));\r\n    }, s * 1000);\r\n  });\r\n};\r\n//----------------------------------------------------------------------\r\nconst model = new _model__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst listOfRecipes = new _views_listView__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst recipeView = new _views_recipeView__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\nconst bookmark = new _views_bookmarkView__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\n\r\n// https://forkify-api.herokuapp.com/v2\r\n// https://forkify-v2.netlify.app/\r\n\r\n//----------------------------------------------------------------------\r\n\r\nconst serchBtn = document.querySelector('.btn search__btn');\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//-------------------------------------------------------------------------------------------------------------------------\r\nclass App {\r\n  constructor() {\r\n    this.createRecipe();\r\n  }\r\n\r\n  createRecipe = () => {\r\n      model.getRecipeData().then((data) => recipeView.render(data));\r\n\r\n    recipeView.render(data);\r\n  }\r\n}\r\n//-------------------------------------------------------------------------------------------------------------------------\r\nlet data = [];\r\nlet recipeData = {};\r\n\r\n//-------------------------------------------------------------------------------------------------------------------------\r\n//!serch button pressed\r\nconst resultList = new RenderResults();\r\n\r\n\r\n\r\n//!page button pressed\r\nresultList.pagination()\r\n\r\n\r\n\r\n//*Check posibility of changing currentPage inside class\r\n//--------------------------------------------------------\r\n\n\n//# sourceURL=webpack://final/./src/js/controller.js?");

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass Model {\r\n    getResults(name) {\r\n        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${name}`)\r\n            .then((result) => {\r\n                return result.json()\r\n            })\r\n            .then((result) => {\r\n                data = result.data.recipes;\r\n            });\r\n    }\r\n    getRecipe(id) {\r\n        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)\r\n            .then((result) => {\r\n                return result.json()\r\n            })\r\n            .then((result) => {\r\n                recipeData = result.data.recipe;\r\n            });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);\n\n//# sourceURL=webpack://final/./src/js/model.js?");

/***/ }),

/***/ "./src/js/views/bookmarkView.js":
/*!**************************************!*\
  !*** ./src/js/views/bookmarkView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n\r\nclass Bookmark{\r\n    constructor() {\r\n        \r\n    }\r\n    \r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bookmark);\n\n//# sourceURL=webpack://final/./src/js/views/bookmarkView.js?");

/***/ }),

/***/ "./src/js/views/listView.js":
/*!**********************************!*\
  !*** ./src/js/views/listView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass ListOfResults {\r\n    constructor(data, parrentNode) {\r\n        this.data = data;\r\n        this.currentPage = 1;\r\n        this.parrentNode = parrentNode   /* document.querySelector('selector') */;\r\n        this.pagination(this.data, this.currentPage, this.parrentNode);\r\n    }\r\n    pagination(pageSize = 10) {\r\n        this.#renderData(this.data.slice((this.currentPage - 1 * pageSize, this.currentPage * pageSize)));\r\n        this.currentPage++;\r\n    }\r\n    #renderData(slicedData) {\r\n        this.parrentNode.innerHTML = '';\r\n        slicedData.forEach(element => {\r\n            this.parrentNode.insertAdjacentHTML('beforeend',\r\n                `\r\n                    ${element.id}\r\n                    ${element.publisher}\r\n                    ${element.image_url}\r\n                    ${element.title}\r\n                `\r\n            )\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListOfResults);\n\n//# sourceURL=webpack://final/./src/js/views/listView.js?");

/***/ }),

/***/ "./src/js/views/recipeView.js":
/*!************************************!*\
  !*** ./src/js/views/recipeView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass Recipe {\r\n    constructor(data, parrentNode) {\r\n        this.data = data;\r\n        this.parrentNode = parrentNode;\r\n        this.renderRecipe(this.data);\r\n        this.saveID();\r\n    }\r\n    renderRecipe(data) {\r\n        this.parrentNode.innerHTML = '';\r\n        this.parrentNode.insertAdjacentHTML('aftebegin',\r\n            `\r\n                ${data.cooking_time}\r\n                ${data.id}\r\n                ${data.image_url}\r\n                ${data.publisher}\r\n                ${data.servings}\r\n                ${data.source_url}\r\n                ${data.title}\r\n            `)\r\n    }\r\n    saveID() {\r\n        localStorage.setItem('recipeID', this.data.id)\r\n    }\r\n    servingsMath(action) {\r\n        const servingsNode = this.parrentNode.querySelector('.recipe__info-data--people');\r\n        const currentServings = Number(servingsNode).textContent;\r\n        servingsNode.textContent = currentServings + action;\r\n\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recipe);\r\n\r\n/*--------recipe data----------\r\ncooking_time\r\nid\r\nimage_url\r\n[ingredients]\r\npublisher\r\nservings\r\nsource_url\r\ntitle\r\n------------------------------*/\n\n//# sourceURL=webpack://final/./src/js/views/recipeView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/controller.js");
/******/ 	
/******/ })()
;