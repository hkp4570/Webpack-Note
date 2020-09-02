/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/event */ \"./src/pages/event.js\");\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/appendNumber.js":
/*!***********************************!*\
  !*** ./src/pages/appendNumber.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_radColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/radColor */ \"./src/utils/radColor.js\");\n\r\n\r\n\r\nconst divContainer = document.getElementById('divContainer');\r\nconst divCenter = document.getElementById('divCenter');\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (n, isPrime) {\r\n  const span = document.createElement('span');\r\n  if (isPrime) {\r\n    const color = Object(_utils_radColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    span.style.color = color;\r\n    createCenterPrimeNumber(n, color);\r\n  }\r\n  span.innerText = n;\r\n  divContainer.appendChild(span);\r\n  createCenterNumber(n);\r\n});\r\n\r\nfunction createCenterNumber (n) {\r\n  divCenter.innerText = n;\r\n}\r\n\r\nfunction createCenterPrimeNumber (n, color) {\r\n  const div = document.createElement('div');\r\n  div.className = 'center';\r\n  div.style.color = color;\r\n  div.innerText = n;\r\n  document.body.appendChild(div);\r\n  // 加入div后，强制页面重新渲染\r\n  getComputedStyle(div).left; // 只要读取某个元素的位置或尺寸信息，则会导致浏览器的重新渲染， reflow\r\n  \r\n  div.style.transform = `translate(${Object(_utils_radColor__WEBPACK_IMPORTED_MODULE_0__[\"getRandom\"])(-150,150)}px, ${Object(_utils_radColor__WEBPACK_IMPORTED_MODULE_0__[\"getRandom\"])(-150,150)}px)`;\r\n  div.style.opacity = 0;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/pages/appendNumber.js?");

/***/ }),

/***/ "./src/pages/event.js":
/*!****************************!*\
  !*** ./src/pages/event.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/number */ \"./src/utils/number.js\");\n/* harmony import */ var _appendNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendNumber */ \"./src/pages/appendNumber.js\");\n\r\n\r\n\r\nconst n = new _utils_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"](300);\r\nn.onNumberCreated = function (n,isPrime) {\r\n  Object(_appendNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(n,isPrime);\r\n}\r\n\r\nlet isStart = false;\r\n\r\nwindow.addEventListener('click',function () {\r\n  if (isStart) {\r\n    n.stop();\r\n    isStart = false;\r\n  } else {\r\n    n.start();\r\n    isStart = true;\r\n  }\r\n})\r\n\n\n//# sourceURL=webpack:///./src/pages/event.js?");

/***/ }),

/***/ "./src/utils/isPrime.js":
/*!******************************!*\
  !*** ./src/utils/isPrime.js ***!
  \******************************/
/*! exports provided: isPrime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPrime\", function() { return isPrime; });\n/**\r\n * 判断一个数是否是质数\r\n * @param num\r\n */\r\nfunction isPrime (num) {\r\n  if (num < 2) {\r\n    return false;\r\n  }\r\n  for (let i = 2; i <= num - 1; i++) {\r\n    if (num % i === 0) {\r\n      return false;\r\n    }\r\n  }\r\n  return true;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utils/isPrime.js?");

/***/ }),

/***/ "./src/utils/number.js":
/*!*****************************!*\
  !*** ./src/utils/number.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NumberTimer; });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/utils/isPrime.js\");\n\r\n\r\nclass NumberTimer {\r\n  constructor (duration = 500) {\r\n    this.duration = duration;\r\n    this.number = 1; // 当前数字\r\n    this.onNumberCreated = null; // 产生数字后的回调\r\n    this.timerId = null;\r\n  }\r\n  \r\n  start(){\r\n    if(this.timerId){\r\n      return;\r\n    }\r\n    this.timerId = setInterval(() => {\r\n      this.onNumberCreated && this.onNumberCreated(this.number, Object(_isPrime__WEBPACK_IMPORTED_MODULE_0__[\"isPrime\"])(this.number));\r\n      this.number++;\r\n    }, this.duration)\r\n  }\r\n  \r\n  stop(){\r\n    clearInterval(this.timerId);\r\n    this.onNumberCreated = null;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utils/number.js?");

/***/ }),

/***/ "./src/utils/radColor.js":
/*!*******************************!*\
  !*** ./src/utils/radColor.js ***!
  \*******************************/
/*! exports provided: getRandom, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return getRandom; });\nvar colors = [\"#f26395\", \"#62efab\", \"#ef7658\", \"#ffe868\", \"#80e3f7\", \"#d781f9\"];\r\nfunction getRandom(min, max) {\r\n  return Math.floor(Math.random() * (max - min) + min);\r\n}\r\n/**\r\n * 返回一个随机的颜色\r\n */\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n  var index = getRandom(0, colors.length);\r\n  return colors[index];\r\n});\r\n\n\n//# sourceURL=webpack:///./src/utils/radColor.js?");

/***/ })

/******/ });