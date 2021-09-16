"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemiddleDiplom"]("main",{

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calcTotal = document.getElementById('calc-total');\n\nvar calc = function calc() {\n  var calc = document.getElementById('calc');\n  var calcType = document.getElementById('calc-type');\n  var calcTypeMaterial = document.getElementById('calc-type-material');\n  var calcInput = document.getElementById('calc-input');\n\n  function isNumber(n) {\n    return !isNaN(parseFloat(n)) && isFinite(n);\n  }\n\n  if (calc) {\n    var calcTotalValue = function calcTotalValue() {\n      var total;\n\n      if (isNumber(calcType.value) && isNumber(calcTypeMaterial.value)) {\n        total = Math.ceil(calcType.value * calcTypeMaterial.value);\n        calc.addEventListener('input', function () {\n          calcTotal.value = total * calcInput.value;\n        });\n      }\n    };\n\n    calcTotalValue();\n    calc.addEventListener('change', calcTotalValue);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://middleDiplom/./js/modules/calc.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("94f17bd76571054954f0")
/******/ })();
/******/ 
/******/ }
);