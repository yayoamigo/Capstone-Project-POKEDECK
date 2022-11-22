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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  margin:0;\\r\\n  padding: 0;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n box-sizing: border-box;\\r\\n background: linear-gradient(#ff473d, #ff7770);\\r\\n background-repeat: no-repeat;\\r\\n min-height: 100vh;\\r\\n margin: 0;\\r\\n padding: 0;\\r\\n position: relative;\\r\\n overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.none {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#footer-div {\\r\\n display: flex;\\r\\n border: 1px solid black;\\r\\n bottom: 0;\\r\\n width: 100%;  \\r\\n justify-content: center;\\r\\n margin-top: 2%;\\r\\n}\\r\\n\\r\\n.header-container {\\r\\n  position: sticky;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  height: 72px;\\r\\n  background-color: white;\\r\\n  color: black;\\r\\n  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;\\r\\n  padding-inline: 5%;\\r\\n}\\r\\n\\r\\n.header-nav {\\r\\n  display: flex;\\r\\n  padding: 10px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.page-title {\\r\\n  font-size: 38px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.header-links-container {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  gap: 12px;\\r\\n  padding-left: 40px;\\r\\n}\\r\\n\\r\\n.header-link {\\r\\n  font-size: 22px;\\r\\n  padding: 10px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 8px;\\r\\n}\\r\\n\\r\\n.link-icon {\\r\\n  height: 25px;\\r\\n}\\r\\n\\r\\n#poke{\\r\\n  background: none;\\r\\n\\tcolor: inherit;\\r\\n\\tborder: none;\\r\\n\\tpadding: 0;\\r\\n\\tfont: inherit;\\r\\n\\tcursor: pointer;\\r\\n\\toutline: inherit;\\r\\n}\\r\\n\\r\\n#catego {\\r\\n  background: none;\\r\\n\\tcolor: inherit;\\r\\n\\tborder: none;\\r\\n\\tpadding: 0;\\r\\n\\tfont: inherit;\\r\\n\\tcursor: pointer;\\r\\n\\toutline: inherit;\\r\\n}\\r\\n\\r\\n.header-link:hover {\\r\\n  cursor: pointer;\\r\\n  padding-bottom: 7px;\\r\\n  border-bottom: 3px solid red;\\r\\n}\\r\\n\\r\\n@media (width<768px) {\\r\\n  .header-container {\\r\\n    padding: 0;\\r\\n  }\\r\\n  .header-links-container {\\r\\n    padding: 12px;\\r\\n    gap:0;\\r\\n  }\\r\\n  .header-link {\\r\\n    font-size: 16px;\\r\\n  }\\r\\n}\\r\\n\\r\\n.pokemon-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n  gap: 30px;\\r\\n  width: 80%;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  margin-bottom: 40px;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n.pokemon-container-group {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n  gap: 30px;\\r\\n  width: 80%;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  margin-bottom: 40px;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n.pokemonBlock {\\r\\n  border-radius: 10px;\\r\\n  padding: 10px;\\r\\n  background-color: white;\\r\\n  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.gifcontainer {\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center;\\r\\n}\\r\\n\\r\\n .gifcontainer img {\\r\\n  size: 150px;\\r\\n }\\r\\n\\r\\n.pokemonBlock p {\\r\\n  margin: 5px;\\r\\n}\\r\\n\\r\\n.name {\\r\\n  text-transform: capitalize;\\r\\n  font-weight: bold;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n#spinner {\\r\\n  display: none;\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n}\\r\\n\\r\\n.card-container {\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  text-align: center;\\r\\n} \\r\\n\\r\\n.fire {\\r\\n  background: radial-gradient(#FF675C 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.electric {\\r\\n  background: radial-gradient(#FFEA70 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.normal {\\r\\n  background: radial-gradient(#B09398 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.water {\\r\\n  background: radial-gradient(#0596C7 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.ice {\\r\\n  background: radial-gradient(#AFEAFD 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.rock {\\r\\n  background: radial-gradient(#999799 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.flying {\\r\\n  background: radial-gradient(#7AE7C7 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.grass {\\r\\n  background: radial-gradient(#4A9681 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.psychic {\\r\\n  background: radial-gradient(#FFC6D9 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.ghost {\\r\\n  background: radial-gradient(#561D25 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.bug {\\r\\n  background: radial-gradient(#A2FAA3 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.poison{\\r\\n  background: radial-gradient(#795663 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.ground{\\r\\n  background: radial-gradient(#D2B074 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.dragon{\\r\\n  background: radial-gradient(#DA627D 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.steel{\\r\\n  background: radial-gradient(#1D8A99 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.fighting{\\r\\n  background: radial-gradient(#2F2F2F 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.fairy {\\r\\n  background: radial-gradient(#c8753e 50%, #2A1A1F 33%);\\r\\n  background-size: 5px 5px;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#btns {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n  gap: 30px;\\r\\n  margin-bottom: 19%;\\r\\n  padding-top: 4%;\\r\\n}\\r\\n\\r\\n#btns * {\\r\\n    border: 1px solid black;\\r\\n    font-weight: 800;\\r\\n    font-size: 1.1rem;\\r\\n    letter-spacing: 0.05rem;\\r\\n    padding: 1.25em 2.5rem;\\r\\n    border-radius: 1rem;\\r\\n    cursor: pointer;\\r\\n    color: #3466AF;\\r\\n    background: #FFCB05;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-project-pokedeck/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone-project-pokedeck/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-project-pokedeck/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-project-pokedeck/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-project-pokedeck/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-project-pokedeck/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-project-pokedeck/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-project-pokedeck/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-project-pokedeck/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-project-pokedeck/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/categories/fire.js":
/*!********************************!*\
  !*** ./src/categories/fire.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loopFirePokemons\": () => (/* binding */ loopFirePokemons)\n/* harmony export */ });\n const fetchFirePokemons = async (id) => {\r\n const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);\r\n const data = await response.json();\r\n renderfirePokemons(data);\r\n}\r\n\r\nconst loopFirePokemons= (number) => {\r\n const pokemonContainerGroup = document.querySelector(\".pokemon-container-group\");\r\n // removeChildNodes(pokemonContainerGroup);\r\n for (let i = 1; i<= number; i++){\r\n  fetchFirePokemons(i);\r\n }\r\n}\r\n\r\nfunction removeChildNodes(parent) {\r\n while (parent.firstChild) {\r\n   parent.removeChild(parent.firstChild);\r\n }\r\n}\r\n\r\nconst renderfirePokemons = (pokemon) => {\r\n let  types  = pokemon.types[0].type.name;\r\n if(types == 'fire'){\r\n const pokemonContainerGroup = document.querySelector(\".pokemon-container-group\");\r\n const card = document.createElement('div');\r\n card.classList.add('pokemonBlock');\r\n \r\n const gifContainer = document.createElement('div');\r\n gifContainer.classList.add('gifContainer')\r\n\r\n const gif = document.createElement('img');\r\n gif.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`\r\n gif.classList.add(`${types}`)\r\n gifContainer.appendChild(gif);\r\n\r\n const number = document.createElement('p');\r\n number.textContent = `#${pokemon.id}`;\r\n\r\n const name = document.createElement('p');\r\n name.classList.add('name');\r\n name.textContent = pokemon.name;\r\n\r\n const TYPE = document.createElement('p');\r\n TYPE.classList.add('TYPE');\r\n TYPE.textContent = types.toUpperCase();\r\n\r\n card.appendChild(gifContainer);\r\n card.appendChild(number);\r\n card.appendChild(name);\r\n card.appendChild(TYPE);\r\n\r\n pokemonContainerGroup.appendChild(card);\r\n }\r\n}\n\n//# sourceURL=webpack://capstone-project-pokedeck/./src/categories/fire.js?");

/***/ }),

/***/ "./src/categories/water.js":
/*!*********************************!*\
  !*** ./src/categories/water.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loopWaterPokemons\": () => (/* binding */ loopWaterPokemons)\n/* harmony export */ });\nconst fetchWaterPokemons = async (id) => {\r\n const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);\r\n const data = await response.json();\r\n renderWaterPokemons(data);\r\n}\r\n\r\nconst loopWaterPokemons= (number) => {\r\n const pokemonContainerGroup = document.querySelector(\".pokemon-container-group\");\r\n // removeChildNodes(pokemonContainerGroup);\r\n for (let i = 1; i<= number; i++){\r\n  fetchWaterPokemons(i);\r\n }\r\n}\r\n\r\nfunction removeChildNodes(parent) {\r\n while (parent.firstChild) {\r\n   parent.removeChild(parent.firstChild);\r\n }\r\n}\r\n\r\n\r\n\r\n const renderWaterPokemons = (pokemon) => {\r\n let  types  = pokemon.types[0].type.name;\r\n if(types == 'water'){\r\n const pokemonContainerGroup = document.querySelector(\".pokemon-container-group\");\r\n const card = document.createElement('div');\r\n card.classList.add('pokemonBlock');\r\n \r\n const gifContainer = document.createElement('div');\r\n gifContainer.classList.add('gifContainer')\r\n\r\n const gif = document.createElement('img');\r\n gif.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`\r\n gif.classList.add(`${types}`)\r\n gifContainer.appendChild(gif);\r\n\r\n const number = document.createElement('p');\r\n number.textContent = `#${pokemon.id}`;\r\n\r\n const name = document.createElement('p');\r\n name.classList.add('name');\r\n name.textContent = pokemon.name;\r\n\r\n const TYPE = document.createElement('p');\r\n TYPE.classList.add('TYPE');\r\n TYPE.textContent = types.toUpperCase();\r\n\r\n card.appendChild(gifContainer);\r\n card.appendChild(number);\r\n card.appendChild(name);\r\n card.appendChild(TYPE);\r\n\r\n pokemonContainerGroup.appendChild(card);\r\n }\r\n}\n\n//# sourceURL=webpack://capstone-project-pokedeck/./src/categories/water.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_pokemons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pokemons */ \"./src/modules/pokemons.js\");\n/* harmony import */ var _categories_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/fire */ \"./src/categories/fire.js\");\n/* harmony import */ var _categories_water__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/water */ \"./src/categories/water.js\");\n\r\n\r\n\r\n\r\n\r\nconst pokebtn = document.getElementById('poke');\r\nconst catebtn = document.getElementById('catego');\r\nconst home = document.querySelector('.home');\r\nconst catego = document.querySelector('.categories');\r\nconst activebtn = document.querySelectorAll('.activebtn');\r\nconst parentDiv = document.querySelector('.pokemon-container');\r\nconst electric = document.querySelectorAll('.electric');\r\nconst normal = document.querySelectorAll('.normal');\r\nconst fire = document.querySelectorAll('.fire');\r\nconst water = document.querySelectorAll('.water');\r\nconst ice = document.querySelectorAll('.ice');\r\nconst rock = document.querySelectorAll('.rock');\r\nconst flying = document.querySelectorAll('.flying');\r\nconst grass = document.querySelectorAll('.grass');\r\nconst ghost = document.querySelectorAll('.ghost');\r\nconst bug = document.querySelectorAll('.bug');\r\nconst poison = document.querySelectorAll('.poison');\r\nconst ground = document.querySelectorAll('.ground');\r\nconst fighting = document.querySelectorAll('.fighting');\r\nconst dragon = document.querySelectorAll('.dragon');\r\nconst steel= document.querySelectorAll('.steel');\r\n\r\n\r\n\r\n \r\n\r\n//Toogle pages --start--\r\nconst addDisplayPoke = () => {\r\n home.classList.replace('none', 'active');\r\n catego.classList.replace('active', 'none');\r\n }\r\n \r\n const addDisplayBtn = () => {\r\n  home.classList.replace('active', 'none');\r\n catego.classList.replace('none', 'active');\r\n }\r\n\r\npokebtn.addEventListener('click', addDisplayPoke);\r\ncatebtn.addEventListener('click', addDisplayBtn);\r\n\r\n//Toogle pages --end--\r\n\r\nconst firebtn = document.getElementById('Fire');\r\n firebtn.addEventListener('click', (0,_categories_fire__WEBPACK_IMPORTED_MODULE_2__.loopFirePokemons)(200));\r\n const waterbtn = document.getElementById('Water');\r\n waterbtn.addEventListener('click', (0,_categories_water__WEBPACK_IMPORTED_MODULE_3__.loopWaterPokemons)(200));\r\n\r\n\r\n\r\n(0,_modules_pokemons__WEBPACK_IMPORTED_MODULE_1__.loopPokemons)(180)\r\n\n\n//# sourceURL=webpack://capstone-project-pokedeck/./src/index.js?");

/***/ }),

/***/ "./src/modules/pokemons.js":
/*!*********************************!*\
  !*** ./src/modules/pokemons.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loopPokemons\": () => (/* binding */ loopPokemons)\n/* harmony export */ });\nconst fetchPokemons = async (id) => {\r\n const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);\r\n const data = await response.json();\r\n renderPokemons(data);\r\n}\r\n\r\nconst loopPokemons = (number) => {\r\n for (let i = 1; i<= number; i++){\r\n  fetchPokemons(i);\r\n }\r\n}\r\n\r\n\r\nconst renderPokemons = (pokemon) => {\r\n const pokemonContainer = document.querySelector(\".pokemon-container\");\r\n const card = document.createElement('div');\r\n card.classList.add('pokemonBlock');\r\n let  types  = pokemon.types[0].type.name;\r\n \r\n const gifContainer = document.createElement('div');\r\n gifContainer.classList.add('gifContainer')\r\n\r\n const gif = document.createElement('img');\r\n gif.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`\r\n gif.classList.add(`${types}`)\r\n gifContainer.appendChild(gif);\r\n\r\n const number = document.createElement('p');\r\n number.textContent = `#${pokemon.id}`;\r\n\r\n const name = document.createElement('p');\r\n name.classList.add('name');\r\n name.textContent = pokemon.name;\r\n\r\n const TYPE = document.createElement('p');\r\n TYPE.classList.add('TYPE');\r\n TYPE.textContent = types.toUpperCase();\r\n\r\n card.appendChild(gifContainer);\r\n card.appendChild(number);\r\n card.appendChild(name);\r\n card.appendChild(TYPE);\r\n\r\n pokemonContainer.appendChild(card);\r\n}\r\n\n\n//# sourceURL=webpack://capstone-project-pokedeck/./src/modules/pokemons.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;