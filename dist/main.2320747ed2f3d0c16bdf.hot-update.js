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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_documents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/documents */ \"./js/modules/documents.js\");\n/* harmony import */ var _modules_modalCall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalCall */ \"./js/modules/modalCall.js\");\n/* harmony import */ var _modules_ourServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ourServices */ \"./js/modules/ourServices.js\");\n/* harmony import */ var _modules_sliderProfits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sliderProfits */ \"./js/modules/sliderProfits.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./js/modules/timer.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scroll */ \"./js/modules/scroll.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/form */ \"./js/modules/form.js\");\n\n\n\n\n\n\n //========заказать звонок============\n\n(0,_modules_modalCall__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); //========ourServices================\n\n(0,_modules_ourServices__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); //=========sliderProfits=============\n\n(0,_modules_sliderProfits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); //=========timer=====================\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('21 September 2021'); //========documents==================\n\n(0,_modules_documents__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); //=========scroll====================\n\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); //===========form===================\n\n(0,_modules_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack://middleDiplom/./js/index.js?");

/***/ }),

/***/ "./js/modules/documents.js":
/*!*********************************!*\
  !*** ./js/modules/documents.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"smoothScroll\": () => (/* binding */ smoothScroll),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modalCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalCall */ \"./js/modules/modalCall.js\");\n\nvar smoothScroll = document.querySelector('.smooth-scroll');\n\n\nvar documents = function documents() {\n  var documents = document.getElementById('documents');\n  var documentOverlay = document.querySelectorAll('.document-overlay');\n  var divModal = document.createElement('div');\n  var img = document.createElement('img');\n  divModal.classList.add('documents-modal');\n  divModal.style.cssText = 'max-width: 849px; height: 100%; position: fixed; top: 0; left: 33%; display: none';\n  smoothScroll.after(divModal);\n  img.setAttribute('src', './images/documents/original/document4.jpg');\n  img.style.cssText = 'height: 100%;';\n  divModal.append(img);\n  documents.addEventListener('click', function (event) {\n    var target = event.target;\n    event.preventDefault();\n\n    if (target.closest('.sertificate-document')) {\n      _modalCall__WEBPACK_IMPORTED_MODULE_0__.overlay.style.display = 'block';\n      divModal.style.display = 'block';\n    }\n  });\n  documentOverlay.forEach(function (item) {\n    item.addEventListener('mouseover', function () {\n      if (item.closest('.sertificate-document')) {\n        item.style.cssText = 'opacity: 1; width: 200px; left: 97px;';\n      }\n    });\n    item.addEventListener('mouseout', function () {\n      item.style.opacity = '0';\n    });\n  });\n  document.body.addEventListener('click', function (event) {\n    if (event.target.closest('.documents-modal') || event.target === _modalCall__WEBPACK_IMPORTED_MODULE_0__.overlay) {\n      _modalCall__WEBPACK_IMPORTED_MODULE_0__.overlay.style.display = 'none';\n      divModal.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (documents);\n\n//# sourceURL=webpack://middleDiplom/./js/modules/documents.js?");

/***/ }),

/***/ "./js/modules/modalCall.js":
/*!*********************************!*\
  !*** ./js/modules/modalCall.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"overlay\": () => (/* binding */ overlay),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar overlay = document.querySelector('.overlay');\n\n\nvar requestCall = function requestCall() {\n  var callBtn = document.querySelector('.button>.btn-warning');\n  var headerModal = document.querySelector('.header-modal');\n  var headerModalClose = document.querySelector('.header-modal__close');\n  callBtn.addEventListener('click', function (event) {\n    event.preventDefault();\n    overlay.style.display = 'block';\n    headerModal.style.display = 'block';\n  });\n  document.body.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target === headerModalClose || target === overlay) {\n      overlay.style.display = 'none';\n      headerModal.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestCall);\n\n//# sourceURL=webpack://middleDiplom/./js/modules/modalCall.js?");

/***/ }),

/***/ "./js/modules/ourServices.js":
/*!***********************************!*\
  !*** ./js/modules/ourServices.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modalCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalCall */ \"./js/modules/modalCall.js\");\n\n\nvar callOurServices = function callOurServices() {\n  var serviceBtns = document.querySelectorAll('.service-button>.btn-success');\n  console.log(serviceBtns);\n  var servicesModal = document.querySelector('.services-modal');\n  var servicesModalClose = document.querySelector('.services-modal__close');\n  serviceBtns.forEach(function (item) {\n    item.addEventListener('click', function () {\n      servicesModal.style.display = 'block';\n      _modalCall__WEBPACK_IMPORTED_MODULE_0__.overlay.style.display = 'block';\n    });\n  });\n  document.body.addEventListener('click', function (event) {\n    if (event.target === servicesModalClose || event.target === _modalCall__WEBPACK_IMPORTED_MODULE_0__.overlay) {\n      servicesModal.style.display = 'none';\n      _modalCall__WEBPACK_IMPORTED_MODULE_0__.overlay.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callOurServices);\n\n//# sourceURL=webpack://middleDiplom/./js/modules/ourServices.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("36b09bdeae0f67573ac2")
/******/ })();
/******/ 
/******/ }
);