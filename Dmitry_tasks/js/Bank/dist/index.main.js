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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n/*\\n * Use this CSS to learn some intersting techniques,\\n * in case you're wondering how I built the UI.\\n * Have fun! 😁\\n */\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  color: #444;\\n  background-color: #f3f3f3;\\n  height: 100vh;\\n  padding: 2rem;\\n}\\n\\nnav {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 2rem;\\n}\\n\\n.welcome {\\n  font-size: 1.9rem;\\n  font-weight: 500;\\n}\\n\\n.logo {\\n  height: 5.25rem;\\n}\\n\\n.login {\\n  display: flex;\\n}\\n\\n.login__input {\\n  border: none;\\n  padding: 0.5rem 2rem;\\n  font-size: 1.6rem;\\n  font-family: inherit;\\n  text-align: center;\\n  width: 12rem;\\n  border-radius: 10rem;\\n  margin-right: 1rem;\\n  color: inherit;\\n  border: 1px solid #fff;\\n  transition: all 0.3s;\\n}\\n\\n.login__input:focus {\\n  outline: none;\\n  border: 1px solid #ccc;\\n}\\n\\n.login__input::placeholder {\\n  color: #bbb;\\n}\\n\\n.login__btn {\\n  border: none;\\n  background: none;\\n  font-size: 2.2rem;\\n  color: inherit;\\n  cursor: pointer;\\n  transition: all 0.3s;\\n}\\n\\n.login__btn:hover,\\n.login__btn:focus,\\n.btn--sort:hover,\\n.btn--sort:focus {\\n  outline: none;\\n  color: #777;\\n}\\n\\n/* MAIN */\\n.app {\\n  position: relative;\\n  max-width: 100rem;\\n  margin: 4rem auto;\\n  display: grid;\\n  grid-template-columns: 4fr 3fr;\\n  grid-template-rows: auto repeat(3, 15rem) auto;\\n  gap: 2rem;\\n  /* NOTE This creates the fade in/out anumation */\\n  opacity: 0;\\n  transition: all 1s;\\n}\\n\\n.balance {\\n  grid-column: 1/span 2;\\n  display: flex;\\n  align-items: flex-end;\\n  justify-content: space-between;\\n  margin-bottom: 2rem;\\n}\\n\\n.balance__label {\\n  font-size: 2.2rem;\\n  font-weight: 500;\\n  margin-bottom: -0.2rem;\\n}\\n\\n.balance__date {\\n  font-size: 1.4rem;\\n  color: #888;\\n}\\n\\n.balance__value {\\n  font-size: 4.5rem;\\n  font-weight: 400;\\n}\\n\\n/* MOVEMENTS */\\n.movements {\\n  grid-row: 2/span 3;\\n  background-color: #fff;\\n  border-radius: 1rem;\\n  overflow: scroll;\\n}\\n\\n.movements__row, .movements__row-withdrawl {\\n  padding: 2.25rem 4rem;\\n  display: flex;\\n  align-items: center;\\n  border-bottom: 1px solid #eee;\\n}\\n\\n.movements__type {\\n  font-size: 1.1rem;\\n  text-transform: uppercase;\\n  font-weight: 500;\\n  color: #fff;\\n  padding: 0.1rem 1rem;\\n  border-radius: 10rem;\\n  margin-right: 2rem;\\n}\\n\\n.movements__date {\\n  font-size: 1.1rem;\\n  text-transform: uppercase;\\n  font-weight: 500;\\n  color: #666;\\n}\\n\\n.movements__type--deposit {\\n  background-image: linear-gradient(to top left, #39b385, #9be15d);\\n}\\n\\n.movements__type--withdrawal {\\n  background-image: linear-gradient(to top left, #e52a5a, #ff585f);\\n}\\n\\n.movements__value, .movements__value--minus {\\n  font-size: 1.7rem;\\n  margin-left: auto;\\n}\\n\\n/* SUMMARY */\\n.summary {\\n  grid-row: 5/6;\\n  display: flex;\\n  align-items: baseline;\\n  padding: 0 0.3rem;\\n  margin-top: 1rem;\\n}\\n\\n.summary__label {\\n  font-size: 1.2rem;\\n  font-weight: 500;\\n  text-transform: uppercase;\\n  margin-right: 0.8rem;\\n}\\n\\n.summary__value {\\n  font-size: 2.2rem;\\n  margin-right: 2.5rem;\\n}\\n\\n.summary__value--in,\\n.summary__value--interest {\\n  color: #66c873;\\n}\\n\\n.summary__value--out {\\n  color: #f5465d;\\n}\\n\\n.btn--sort {\\n  margin-left: auto;\\n  border: none;\\n  background: none;\\n  font-size: 1.3rem;\\n  font-weight: 500;\\n  cursor: pointer;\\n}\\n\\n/* OPERATIONS */\\n.operation {\\n  border-radius: 1rem;\\n  padding: 3rem 4rem;\\n  color: #333;\\n}\\n\\n.operation--transfer {\\n  background-image: linear-gradient(to top left, #ffb003, #ffcb03);\\n}\\n\\n.operation--loan {\\n  background-image: linear-gradient(to top left, #39b385, #9be15d);\\n}\\n\\n.operation--close {\\n  background-image: linear-gradient(to top left, #e52a5a, #ff585f);\\n}\\n\\nh2 {\\n  margin-bottom: 1.5rem;\\n  font-size: 1.7rem;\\n  font-weight: 600;\\n  color: #333;\\n}\\n\\n.form {\\n  display: grid;\\n  grid-template-columns: 2.5fr 2.5fr 1fr;\\n  grid-template-rows: auto auto;\\n  gap: 0.4rem 1rem;\\n}\\n\\n/* Exceptions for interst */\\n.form.form--loan {\\n  grid-template-columns: 2.5fr 1fr 2.5fr;\\n}\\n\\n.form__label--loan {\\n  grid-row: 2;\\n}\\n\\n/* End exceptions */\\n.form__input {\\n  width: 100%;\\n  border: none;\\n  background-color: rgba(255, 255, 255, 0.4);\\n  font-family: inherit;\\n  font-size: 1.5rem;\\n  text-align: center;\\n  color: #333;\\n  padding: 0.3rem 1rem;\\n  border-radius: 0.7rem;\\n  transition: all 0.3s;\\n}\\n\\n.form__input:focus {\\n  outline: none;\\n  background-color: rgba(255, 255, 255, 0.6);\\n}\\n\\n.form__label {\\n  font-size: 1.3rem;\\n  text-align: center;\\n}\\n\\n.form__btn {\\n  border: none;\\n  border-radius: 0.7rem;\\n  font-size: 1.8rem;\\n  background-color: #fff;\\n  cursor: pointer;\\n  transition: all 0.3s;\\n}\\n\\n.form__btn:focus {\\n  outline: none;\\n  background-color: rgba(255, 255, 255, 0.8);\\n}\\n\\n.logout-timer {\\n  padding: 0 0.3rem;\\n  margin-top: 1.9rem;\\n  text-align: right;\\n  font-size: 1.25rem;\\n}\\n\\n.timer {\\n  font-weight: 600;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bank/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://bank/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://bank/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://bank/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://bank/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://bank/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://bank/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://bank/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://bank/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://bank/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n\r\n// Elements\r\n\r\n\r\nconst imgLogo = document.getElementById('logoTip');\r\nimgLogo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;\r\ndocument.querySelector('.welcome').textContent = \"Log in to get started\";\r\nconst labelDate = document.querySelector('.date');\r\nconst labelBalance = document.querySelector('.balance__value');\r\n\r\nconst containerApp = document.querySelector('.app');\r\nconst containerMovements = document.querySelector('.movements');\r\n\r\nconst btnLogin = document.querySelector('.login__btn');\r\nconst btnTransfer = document.querySelector('.form__btn--transfer');\r\nconst btnLoan = document.querySelector('.form__btn--loan');\r\nconst btnClose = document.querySelector('.form__btn--close');\r\nconst btnSort = document.querySelector('.btn--sort');\r\n\r\nconst inputLoginUsername = document.querySelector('.login__input--user');\r\nconst inputLoginPin = document.querySelector('.login__input--pin');\r\nconst inputTransferTo = document.querySelector('.form__input--to');\r\nconst inputTransferAmount = document.querySelector('.form__input--amount');\r\nconst inputLoanAmount = document.querySelector('.form__input--loan-amount');\r\nconst inputCloseUsername = document.querySelector('.form__input--user');\r\nconst inputClosePin = document.querySelector('.form__input--pin');\r\nlet today = new Date();\r\nconst todayDate = `${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}, ${today.getHours()}:${today.getMinutes()}`;\r\nlet start;\r\nconst account1 = {\r\n  owner: 'Jonas Schmedtmann',\r\n  movements: [1300, 300],\r\n  interestRate: 1.2,\r\n  login: 'js',\r\n  pin: 1,\r\n};\r\n\r\nconst account2 = {\r\n  owner: 'Jessica Davis',\r\n  movements: [400, -50, 8000, 360, 100, -500],\r\n  interestRate: 1.5,\r\n  login: 'jd',\r\n  pin: 2,\r\n};\r\n\r\nconst account3 = {\r\n  owner: 'Steven Thomas Williams',\r\n  movements: [100, -700, 1500, 900, -200, 300],\r\n  interestRate: 0.7,\r\n  login: 'stw',\r\n  pin: 3,\r\n};\r\n\r\nconst account4 = {\r\n  owner: 'Sarah Smith',\r\n  movements: [400, -400, 340, -320, 560],\r\n  interestRate: 1,\r\n  login: 'ss',\r\n  pin: 4,\r\n};\r\n\r\nconst accounts = [account1, account2, account3, account4];\r\n// Регистрация\r\nbtnLogin.addEventListener('click', () => {\r\n  const localAccounts = JSON.parse(localStorage.getItem('accounts'));\r\n  const activeUser = localAccounts.find(elem => elem.login === inputLoginUsername.value && elem.pin === Number(inputLoginPin.value))\r\n  if (activeUser.login){\r\n    inputLoginUsername.value = \"\";\r\n    inputLoginPin.value = \"\";\r\n    containerApp.style.opacity = \"1\";\r\n    labelDate.textContent = `${today.getDate()}/0${today.getMonth() + 1}/${today.getFullYear()}`;\r\n    localStorage.setItem(\"activeUser\", activeUser.login);\r\n    const startedTime = Number(new Date()) + 10000;\r\n    localStorage.setItem('startedTime', JSON.stringify(startedTime));\r\n    start = setInterval(startTimer, 1000);\r\n    movements()\r\n  } else {\r\n    inputLoginUsername.value = \"\";\r\n    inputLoginPin.value = \"\";\r\n    alert(\"Неправильный логин или пароль!\")\r\n  }\r\n})\r\nfunction init() {\r\n  if (!JSON.parse(localStorage.getItem('accounts'))) {\r\n    localStorage.setItem('accounts', JSON.stringify(accounts));\r\n  }\r\n  if (localStorage.getItem(\"activeUser\")){\r\n    inputLoginUsername.value = \"\";\r\n    inputLoginPin.value = \"\";\r\n    containerApp.style.opacity = \"1\";\r\n    labelDate.textContent = `${today.getDate()}/0${today.getMonth() + 1}/${today.getFullYear()}`;\r\n    start = setInterval(startTimer, 1000);\r\n    movements()\r\n  }\r\n}\r\ninit()\r\nfunction startTimer() {\r\n  const now = Number(new Date())\r\n  const minutes1 = document.querySelector('.minutes');\r\n  const seconds1 = document.querySelector('.seconds');\r\n  const timer = JSON.parse(localStorage.getItem('startedTime')) - now;\r\n  const minutes = timer > 0 ? Math.floor(timer / 1000 / 60) % 60 : 0;\r\n  const seconds = timer > 0 ? Math.floor(timer /1000) % 60 : 0;\r\n  minutes1.textContent = minutes < 10 ? '0' + minutes : minutes;\r\n  seconds1.textContent = seconds < 10 ? '0' + seconds : seconds;\r\n  if (timer <= 0) {\r\n    containerApp.style.opacity = \"0\";\r\n    clearInterval(start);\r\n  }\r\n}\r\n// Денежные операции\r\nfunction movements(){\r\n  const persons = JSON.parse(localStorage.getItem('accounts'));\r\n  const neededPerson = persons.find(elem => elem.login === localStorage.getItem('activeUser'));\r\n  containerMovements.innerHTML = \"\";\r\n  neededPerson.movements.forEach(elem => {\r\n    if (elem > 0){\r\n      containerMovements.innerHTML +=\r\n          `<div class=\"movements__row\">\r\n          <div class=\"movements__type movements__type--deposit\">deposit</div>\r\n          <div class=\"movements__date\">${todayDate}</div>\r\n          <div class=\"movements__value\">${elem}</div\r\n        </div>`\r\n    } else {\r\n      containerMovements.innerHTML +=\r\n          `<div class=\"movements__row-withdrawl\">\r\n          <div class=\"movements__type movements__type--withdrawal\">withdrawal</div>\r\n          <div class=\"movements__date\">${todayDate}</div>\r\n          <div class=\"movements__value--minus\">${elem}</div>\r\n        </div>`\r\n    }\r\n    const balance = neededPerson.movements.reduce((a,b) => a + b, 0)\r\n    labelBalance.textContent = balance + \"€\";\r\n  });\r\n}\r\n// Перевод денег\r\nbtnTransfer.addEventListener('click', transfer);\r\nfunction transfer() {\r\n  const persons = JSON.parse(localStorage.getItem('accounts'));\r\n  const balance = persons.find(elem => elem.login === localStorage.getItem('activeUser')).movements.reduce((a, b) => a + b);\r\n  const newPersons = persons.map(elem => {\r\n    if (elem.login === inputTransferTo.value && inputTransferTo.value !== localStorage.getItem('activeUser')) {\r\n      if (Number(inputTransferAmount.value) <= balance && Number(inputTransferAmount.value) > 0) {\r\n        elem.movements.push(Number(inputTransferAmount.value));\r\n        inputTransferAmount.value = \"\";\r\n        inputTransferTo.value = \"\";\r\n      }\r\n      if (Number(inputTransferAmount.value) > balance) alert(\"Недостаточно средств!\");\r\n    }\r\n    if (elem.login === localStorage.getItem('activeUser') && Number(inputTransferAmount.value) > 0){\r\n        elem.movements.push(Number(-inputTransferAmount.value));\r\n    }\r\n    return{...elem,}\r\n  })\r\n  containerMovements.innerHTML = \"\";\r\n  localStorage.setItem('accounts', JSON.stringify(newPersons));\r\n  movements()\r\n}\r\n// Взять в кредит\r\nbtnLoan.addEventListener('click', () => {\r\n  const persons = JSON.parse(localStorage.getItem('accounts'));\r\n  const newPersons = persons.map(elem =>{\r\n    const balance = persons.find(elem => elem.login === localStorage.getItem('activeUser')).movements.reduce((a, b) => a + b);\r\n    if (elem.login === localStorage.getItem('activeUser') && Number(inputLoanAmount.value) <= balance) {\r\n        elem.movements.push(Number(inputLoanAmount.value));\r\n        inputLoanAmount.value = \"\"\r\n        containerMovements.innerHTML = \"\";\r\n    }\r\n    if (Number(inputLoanAmount.value) > balance) {\r\n      inputLoanAmount.value = \"\"\r\n      alert(\"Слишком большой кредит!\")\r\n    }\r\n    return {...elem,}\r\n  })\r\n  localStorage.setItem('accounts', JSON.stringify(newPersons));\r\n  movements();\r\n})\r\nbtnSort.addEventListener('click', () =>{\r\n  const persons = JSON.parse(localStorage.getItem('accounts'));\r\n  const neededPerson = persons.find(elem => elem.login === localStorage.getItem('activeUser'));\r\n  neededPerson.movements.sort((a, b) => a - b);\r\n  localStorage.setItem('accounts', JSON.stringify(persons))\r\n  movements()\r\n})\r\n\r\nbtnClose.addEventListener('click', () =>{\r\n  const persons = JSON.parse(localStorage.getItem('accounts'))\r\n  const neededPerson = persons.find(elem => elem.login === localStorage.getItem('activeUser'));\r\n  if (inputCloseUsername.value === neededPerson.login && Number(inputClosePin.value) === neededPerson.pin){\r\n    const index = persons.indexOf(neededPerson)\r\n    persons.splice(index, 1);\r\n    localStorage.setItem('accounts', JSON.stringify(persons))\r\n    localStorage.removeItem('activeUser');\r\n    containerApp.style.opacity = \"0\";\r\n    init()\r\n  }\r\n})\n\n//# sourceURL=webpack://bank/./src/index.js?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"logo.png\";\n\n//# sourceURL=webpack://bank/./src/images/logo.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;