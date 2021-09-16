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

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar submitForm = function submitForm() {\n  var form = document.querySelectorAll('form'); //console.log(form);\n  // const callbackForm = document.querySelectorAll('form[name=\"callback-form\"]');\n  // console.log(callbackForm);\n  // const applicationForm = document.querySelector('form[name=\"application-form\"]');\n  // console.log(applicationForm);\n\n  var formHorizontal = document.querySelectorAll('.form-horizontal'); // console.log(formHorizontal);\n\n  var inputsName = document.querySelectorAll('input[name=\"fio\"]');\n  console.log(inputsName);\n  var inputsPhone = document.querySelectorAll('input[name=\"phone\"]');\n  console.log(inputsPhone);\n  inputsName.forEach(function (item) {\n    item.setAttribute('required', true);\n    item.addEventListener('input', function (event) {\n      var target = event.target;\n\n      if (item === target) {\n        if (item.value.trim() === '') {\n          item.value = '';\n          return;\n        }\n\n        item.value = item.value.replace(/[^а-яa-z]/ig, '');\n      }\n    });\n  });\n  inputsPhone.forEach(function (item) {\n    item.setAttribute('required', true);\n    item.addEventListener('input', function (event) {\n      var target = event.target;\n\n      if (item === target) {\n        if (item.value.trim() === '') {\n          item.value = '';\n          return;\n        }\n\n        item.value = item.value.replace(/[^0-9\\+]/ig, '');\n      }\n    });\n  });\n  inputsPhone.forEach(function (item) {\n    item.addEventListener('blur', function (event) {\n      if (item === event.target) {\n        if (item.value.length < 4 || item.value.length > 16) {\n          item.value = '';\n        }\n      }\n    });\n  });\n  form.forEach(function (item) {\n    item.addEventListener('submit', function (event) {\n      event.preventDefault();\n      var formData = new FormData(item);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      submitData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error();\n        }\n\n        return response.text();\n      }).then(function (data) {\n        console.log(data);\n      })[\"catch\"](function (error) {\n        console.error(error);\n      });\n    });\n  });\n\n  var submitData = function submitData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitForm);\n\n//# sourceURL=webpack://middleDiplom/./js/modules/form.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("04da097187f5f690deb6")
/******/ })();
/******/ 
/******/ }
);