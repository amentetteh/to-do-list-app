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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* inter-regular - latin */\\r\\n@font-face {\\r\\n  font-family: 'Inter';\\r\\n  font-style: normal;\\r\\n  src: url('https://fonts.googleapis.com/css?family=Inter');\\r\\n}\\r\\n\\r\\n/* reset */\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n/* body settings */\\r\\nbody {\\r\\n  background: #fff;\\r\\n  font-family: 'Inter', sans-serif;\\r\\n  font-style: normal;\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-content: center;\\r\\n  flex: 1 1 auto;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nbody #content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-content: center;\\r\\n  flex: 1 1 auto;\\r\\n  width: 50%;\\r\\n  margin: auto;\\r\\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\\r\\n}\\r\\n\\r\\nbody #content h1 {\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n  margin: auto;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n#content #list-content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-content: center;\\r\\n  flex: 1 1 auto;\\r\\n  width: 100%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n#content #list-content #entete {\\r\\n  height: 50px;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-content: center;\\r\\n  flex: 1 1 auto;\\r\\n  align-items: center;\\r\\n  background: #fff;\\r\\n  width: 100%;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n#content #list-content #entete h2 {\\r\\n  color: #545862;\\r\\n  font-size: 15px;\\r\\n  font-weight: 400;\\r\\n  padding: 1rem;\\r\\n  line-height: 20px;\\r\\n  margin: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n#content #list-content .refresh,\\r\\n#content #list-content .home,\\r\\n#content #list-content .go-back {\\r\\n  width: 46px;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n  vertical-align: top;\\r\\n}\\r\\n\\r\\n#content #list-content .refresh .changes-count {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#content #task-list-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-content: center;\\r\\n  flex-direction: column;\\r\\n  flex: 1 1 auto;\\r\\n  width: 100%;\\r\\n  align-items: stretch;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n#content #task-list-container form {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-content: center;\\r\\n  flex: 1 1 auto;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n#content #task-list-container form #new-item-field {\\r\\n  width: 100%;\\r\\n  padding: 0 40px 0 1rem;\\r\\n  line-height: 50px;\\r\\n  height: 50px;\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#content #task-list-container form .add-new-task {\\r\\n  line-height: 50px;\\r\\n  height: 50px;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n#content #task-list-container form #new-item-field:hover {\\r\\n  border: transparent;\\r\\n  border-color: red;\\r\\n}\\r\\n\\r\\n#content #task-list-container button.clear-all-completed {\\r\\n  line-height: 50px;\\r\\n  height: 50px;\\r\\n  border: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#content #task-list-container ul li {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n#list-content #task-list-container #tasks-list li.task-item {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-content: center;\\r\\n  flex: 1 1 auto;\\r\\n  line-height: 50px;\\r\\n  height: 50px;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n#list-content #task-list-container #tasks-list li.task-item .check-input {\\r\\n  margin-left: 15px;\\r\\n  margin-right: 11px;\\r\\n}\\r\\n\\r\\n#list-content #task-list-container #tasks-list li.task-item .completed {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#list-content #task-list-container #tasks-list li.task-item .index {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#list-content #task-list-container #tasks-list li.task-item .description {\\r\\n  align-self: center;\\r\\n  width: 100%;\\r\\n  border: 1px solid #fff;\\r\\n}\\r\\n\\r\\n#list-content #task-list-container #tasks-list li.task-item .description:hover {\\r\\n  border: 1px solid transparent;\\r\\n}\\r\\n\\r\\n#list-content #task-list-container #tasks-list li.task-item .delete-icon,\\r\\n#list-content #task-list-container #tasks-list li.task-item .vertical-3-dot {\\r\\n  line-height: 50px;\\r\\n  height: 50px;\\r\\n  margin-right: 11px;\\r\\n  margin-left: 7px;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n\\r\\n#list-content #task-list-container #tasks-list li.task-item.editing {\\r\\n  background-color: #fffeca;\\r\\n}\\r\\n\\r\\n#list-content #task-list-container #tasks-list li.task-item .vertical-3-dot.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#list-content #task-list-container #tasks-list li.task-item .delete-icon {\\r\\n  display: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#list-content #task-list-container #tasks-list li.task-item .delete-icon.show {\\r\\n  display: inherit;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_controller_taskcontroller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/controller/taskcontroller.js */ \"./src/js/modules/controller/taskcontroller.js\");\n/* harmony import */ var _modules_model_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/model/task.js */ \"./src/js/modules/model/task.js\");\n\n\n\n\n// Add a new task\nconst taskList = document.querySelector('#tasks-list');\n\ndocument\n  .querySelector('#new-item-field')\n  .addEventListener('keypress', (event) => {\n    if (event.key === 'Enter') {\n      const desc = document.querySelector('#new-item-field').value;\n      event.preventDefault();\n      _modules_controller_taskcontroller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask(taskList, desc);\n    }\n  });\n\ndocument.querySelector('.clear-all-completed').addEventListener('click', () => {\n  _modules_controller_taskcontroller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeAllCompletedTask(taskList);\n});\n\nif (_modules_model_task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].count() > 0) {\n  document.addEventListener('DOMContentLoaded', () => {\n    const isDataOrdered = localStorage.getItem('isDataOrdered') || true;\n    localStorage.setItem('isDataOrdered', isDataOrdered);\n\n    // TaskController.buildTaskList(taskList, Task.getAll());\n    _modules_controller_taskcontroller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resetDisplayTasks(taskList);\n  });\n}\n\n\n//# sourceURL=webpack://to-do-list-app/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/controller/statuscontroller.js":
/*!*******************************************************!*\
  !*** ./src/js/modules/controller/statuscontroller.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/task.js */ \"./src/js/modules/model/task.js\");\n\n\nclass StatusController {\n  static taskList = document.querySelector('#tasks-list');\n\n  static updateStatus = (task, status) => {\n    const newTask = new _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task.index, task.description, task.completed);\n    if (newTask) {\n      newTask.setCompleted(status);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatusController);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/js/modules/controller/statuscontroller.js?");

/***/ }),

/***/ "./src/js/modules/controller/taskcontroller.js":
/*!*****************************************************!*\
  !*** ./src/js/modules/controller/taskcontroller.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/task.js */ \"./src/js/modules/model/task.js\");\n/* harmony import */ var _statuscontroller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statuscontroller.js */ \"./src/js/modules/controller/statuscontroller.js\");\n\n\n\nclass TaskController {\n  static taskList = document.querySelector('#tasks-list');\n\n  static createTag = (tagName, textContent = null, className = null) => {\n    const tag = document.createElement(tagName);\n    tag.textContent = textContent;\n    tag.className = className;\n    return tag;\n  };\n\n  static createTaskRow = (task) => {\n    const taskRow = TaskController.createTag('li', null, 'task-item');\n    const taskForm = TaskController.createTag('form', null, 'task-form');\n    const descriptionElement = TaskController.createTag(\n      'input',\n      null,\n      'item description',\n    );\n    descriptionElement.type = 'text';\n    descriptionElement.name = 'description';\n    const indexElement = TaskController.createTag('div', null, 'item index');\n    const completedElement = TaskController.createTag('div', null, 'item completed');\n\n    const dragNdrop = TaskController.createTag(\n      'span',\n      null,\n      'fas fa-ellipsis-v vertical-3-dot',\n    );\n    const deleteIcon = TaskController.createTag(\n      'span',\n      null,\n      'fa fa-trash-o delete-icon',\n    );\n\n    const checkboxElement = TaskController.createTag('input', null, 'check-input');\n    checkboxElement.type = 'checkbox';\n    checkboxElement.name = 'completed';\n\n    checkboxElement.checked = task.completed;\n\n    descriptionElement.value = task.description;\n    indexElement.innerText = task.index;\n    completedElement.innerText = task.completed;\n\n    const rowItems = [\n      checkboxElement,\n      descriptionElement,\n      indexElement,\n      completedElement,\n    ];\n\n    for (let j = 0; j < rowItems.length; j += 1) {\n      taskForm.appendChild(rowItems[j]);\n    }\n\n    taskForm.addEventListener('click', () => {\n      TaskController.resetForRemove();\n      taskRow.classList.toggle('editing');\n      dragNdrop.classList.toggle('hidden');\n      deleteIcon.classList.toggle('show');\n    });\n\n    taskForm.addEventListener('submit', (event) => {\n      event.preventDefault();\n    });\n\n    checkboxElement.addEventListener('change', (event) => {\n      TaskController.resetForRemove();\n      const form = event.target.parentElement;\n      const index = parseInt(form.getElementsByTagName('div')[0].innerText, 10);\n      const description = form.description.value;\n      const completed = (form.getElementsByTagName('div')[1].innerText === 'true');\n      const newTask = new _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](index, description, completed);\n      _statuscontroller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateStatus(newTask, checkboxElement.checked);\n    });\n\n    descriptionElement.addEventListener('change', (event) => {\n      event.preventDefault();\n      const form = event.target.parentElement;\n      const index = parseInt(form.getElementsByTagName('div')[0].innerText, 10);\n      const description = form.description.value;\n      const completed = (form.getElementsByTagName('div')[1].innerText === 'true');\n      const task = new _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](index, description, completed);\n      task.save();\n    });\n\n    deleteIcon.addEventListener('click', () => {\n      TaskController.removeTask(TaskController.taskList, task);\n    });\n\n    taskRow.appendChild(taskForm);\n    taskRow.appendChild(dragNdrop);\n    taskRow.appendChild(deleteIcon);\n    return taskRow;\n  };\n\n  static resetForRemove = () => {\n    document.querySelectorAll('.task-item').forEach((item) => {\n      item.classList.remove('editing');\n    });\n\n    document.querySelectorAll('.vertical-3-dot').forEach((item) => {\n      item.classList.remove('hidden');\n    });\n\n    document.querySelectorAll('.delete-icon').forEach((item) => {\n      item.classList.remove('show');\n    });\n  };\n\n  static buildTaskList = (table, tasks) => {\n    if (tasks && tasks.length > 0) {\n      for (let i = 0; i < tasks.length; i += 1) {\n        table.appendChild(TaskController.createTaskRow(tasks[i]));\n      }\n    }\n  };\n\n  static removeTask = (table, task) => {\n    const newTask = new _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task.index, task.description, task.completed);\n    newTask.remove();\n    TaskController.resetDisplayTasks(table);\n  };\n\n  static removeAllCompletedTask = (table) => {\n    _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteAllByStatus(true);\n    TaskController.resetDisplayTasks(table);\n  };\n\n  static addTaskToUI = (table, task) => {\n    table.appendChild(TaskController.createTaskRow(task));\n  };\n\n  static resetDisplayTasks =(table) => {\n    table.innerHTML = '';\n    _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateIndexes();\n    TaskController.buildTaskList(table, _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAll());\n  }\n\n  // Implement a function for adding a new task (add a new element to the array).\n  static addTask = (table, description) => {\n    if (description) {\n      const task = new _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](null, description, false);\n      task.add();\n      TaskController.addTaskToUI(table, task);\n      document.querySelector('#new-item-field').value = '';\n    }\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskController);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/js/modules/controller/taskcontroller.js?");

/***/ }),

/***/ "./src/js/modules/model/task.js":
/*!**************************************!*\
  !*** ./src/js/modules/model/task.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n  constructor(index, description, completed = false) {\n    this.index = index;\n    this.description = description;\n    this.completed = completed;\n  }\n\n  static getAll(order = 'ASC') {\n    const tasks = localStorage.getItem('tasks');\n    const finalTasks = tasks === null ? [] : JSON.parse(tasks);\n    if (tasks) {\n      if (order && order === 'ASC') {\n        return finalTasks.sort(\n          (t1, t2) => {\n            if (t1.index > t2.index) {\n              return 1;\n            }\n            if (t1.index < t2.index) {\n              return -1;\n            }\n            return 0;\n          },\n        );\n      }\n      return finalTasks.sort((t2, t1) => {\n        if (t1.index > t2.index) {\n          return 1;\n        }\n        if (t1.index < t2.index) {\n          return -1;\n        }\n        return 0;\n      });\n    }\n    return finalTasks;\n  }\n\n  add() {\n    const tasks = Task.getAll('ASC');\n    this.index = Task.count();\n    tasks.push(this);\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n    return this;\n  }\n\n  remove() {\n    const tasks = Task.getAll('ASC');\n    tasks.forEach((task, index) => {\n      if (parseInt(task.index, 10) === parseInt(this.index, 10)) {\n        tasks.splice(index, 1);\n      }\n    });\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n\n  static deleteAllByStatus(status) {\n    const tasks = Task.getAll('ASC');\n    localStorage.setItem('tasks', JSON.stringify(tasks.filter((task) => task.completed !== status)));\n  }\n\n  save() {\n    const tasks = Task.getAll();\n    tasks[this.index].description = this.description;\n    tasks[this.index].completed = this.completed;\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n\n  setCompleted(boolean) {\n    this.completed = boolean;\n    this.save();\n    return this;\n  }\n\n  static count() {\n    return this.getAll().length;\n  }\n\n  static isOrdered() {\n    return localStorage.getItem('isDataOrdered');\n  }\n\n  static updateIndexes() {\n    const sorted = this.getAll('ASC');\n    sorted.forEach((task, index) => {\n      task.index = index;\n    });\n    localStorage.setItem('tasks', JSON.stringify(sorted));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/js/modules/model/task.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;