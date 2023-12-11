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

/***/ "./coffee-house/js/handlers/burger-menu-handler.js":
/*!*********************************************************!*\
  !*** ./coffee-house/js/handlers/burger-menu-handler.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction burgerMenuHandler() {\n  //burger handler variables\n  var body = document.body;\n  var buttonOpen = document.querySelector('.burger');\n  var menu = document.querySelector('.header-block__nav');\n  var menuItems = menu.querySelectorAll('.navigation-item');\n\n  //event with buttons (close/open)\n  buttonOpen.addEventListener('click', function (event) {\n    buttonOpen.classList.toggle('js-burger-button_become-close');\n    menu.classList.toggle('js-menu_active');\n    body.classList.toggle('js-body_no-scroll');\n  });\n\n  //event with menu items\n  menuItems.forEach(function (element) {\n    element.addEventListener('click', function (event) {\n      menu.classList.remove('js-menu_active');\n      buttonOpen.classList.remove('js-burger-button_become-close');\n      body.classList.remove('js-body_no-scroll');\n    });\n  });\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenuHandler);\n\n//# sourceURL=webpack://coffee-house/./coffee-house/js/handlers/burger-menu-handler.js?");

/***/ }),


/***/ "./coffee-house/js/handlers/slider-handler.js":
/*!****************************************************!*\
  !*** ./coffee-house/js/handlers/slider-handler.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sliderHandler() {\n  //slider consts\n  var slider = document.querySelector('.slider__content-wrap'),\n    articlesArray = document.querySelectorAll('.slider__article'),\n    sliderLine = document.querySelector('.slider__articles'),\n    sliderPaginationPoints = document.querySelectorAll('.slider__pagination-button'),\n    sliderBtnNext = document.querySelector('.button-right'),\n    sliderBtnPrev = document.querySelector('.button-left');\n\n  //slider variables\n  var sliderCount = 0,\n    width,\n    itemWidth,\n    offset = 0;\n\n  //make slider change with the window resizing\n\n  //adaptive slider size \n  function sliderAdaptize() {\n    width = slider.offsetWidth;\n    itemWidth = width;\n    articlesArray.forEach(function (item) {\n      item.style.width = \"\".concat(itemWidth, \"px\");\n      item.style.height = 'auto';\n    });\n    sliderLine.style.width = \"\".concat(itemWidth * articlesArray.length, \"px\");\n  }\n  ;\n  sliderAdaptize();\n  window.addEventListener('resize', sliderAdaptize);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderHandler);\n\n//# sourceURL=webpack://coffee-house/./coffee-house/js/handlers/slider-handler.js?");

/***/ }),


/***/ "./coffee-house/js/index.js":
/*!**********************************!*\
  !*** ./coffee-house/js/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handlers_burger_menu_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/burger-menu-handler */ \"./coffee-house/js/handlers/burger-menu-handler.js\");\n/* harmony import */ var _handlers_slider_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/slider-handler */ \"./coffee-house/js/handlers/slider-handler.js\");\n\n\n(0,_handlers_burger_menu_handler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_handlers_slider_handler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://coffee-house/./coffee-house/js/index.js?");


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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./coffee-house/js/index.js");
/******/ 	
/******/ })()
;