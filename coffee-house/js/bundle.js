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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sliderHandler() {\n  //slider consts\n  var articlesArray = document.querySelectorAll('.slider__article'),\n    //slides\n    sliderLine = document.querySelector('.slider__articles'),\n    //slider track\n    sliderPaginationPoints = document.querySelectorAll('.pagination-fill'),\n    sliderBtnNext = document.querySelector('.button-right'),\n    //btn next\n    sliderBtnPrev = document.querySelector('.button-left'),\n    //btn prev\n    swipeArea = document.querySelector('.slider__content'),\n    //slider\n    slider = document.querySelector('.slider__content-wrap'); //slider-list\n\n  //timer\n  var timerId = setInterval(automatic, 6000);\n\n  //slider variables\n  var count = 0,\n    slideWidth,\n    width;\n\n  //make slider change with the window resizing\n  window.addEventListener('resize', resize);\n  window.addEventListener('resize', currentSlide(count));\n\n  //slider move \n  function rollSlider() {\n    sliderLine.style.transform = 'translateX(-' + count * width + 'px)';\n  }\n\n  //adaptive slider size -xyeta-\n  function resize() {\n    width = document.querySelector('.slider__content-wrap').offsetWidth;\n    console.log(width);\n    sliderLine.style.width = \"\".concat(width * articlesArray.length, \"px\");\n    articlesArray.forEach(function (elem) {\n      elem.style.width = \"\".concat(width);\n      elem.style.height = \"auto\";\n    });\n    rollSlider();\n  }\n  resize();\n\n  //button-switch \n  function buttonClick() {\n    sliderBtnPrev.addEventListener('click', function (event) {\n      count--;\n      if (count < 0) {\n        count = articlesArray.length - 1;\n      }\n      currentSlide(count);\n      rollSlider();\n      clearInterval(timerId);\n      timerId = setInterval(automatic, 6000);\n      setInterval(timerId);\n    });\n    sliderBtnNext.addEventListener('click', function (event) {\n      count++;\n      if (count >= articlesArray.length) {\n        count = 0;\n      }\n      currentSlide(count);\n      rollSlider();\n      clearInterval(timerId);\n      timerId = setInterval(automatic, 6000);\n      setInterval(timerId);\n    });\n  }\n  buttonClick();\n\n  //make pagination button colored\n  function currentSlide(index) {\n    // console.log(`pagination works! now index is at ${index} point`)\n    sliderPaginationPoints.forEach(function (elem) {\n      return elem.classList.remove('js-coloring');\n    });\n    sliderPaginationPoints[index].classList.add('js-coloring');\n  }\n  currentSlide(count);\n\n  // nobody controls that, it's totally automatic\n  function automatic() {\n    count++;\n    if (count >= articlesArray.length) {\n      count = 0;\n    }\n    currentSlide(count);\n    rollSlider();\n    setInterval(timerId, 0);\n  }\n  ;\n  automatic();\n\n  //mobile devices swiping \n  function mobileSwipe() {\n    //some usefull variables\n    var posX1 = 0,\n      posInt = 0,\n      posX2 = 0,\n      slideIndex = 0,\n      posFinal = 0,\n      slideWidth = width,\n      //one article = slider content wrap width\n      posThreshold = slideWidth * .35,\n      trfRegExp = /[-0-9.]+(?=px)/;\n    function getEvent() {\n      return event.type.search('touch') !== -1 ? event.touches[0] : event;\n    }\n    swipeArea.addEventListener('touchstart', swipeStart);\n    swipeArea.addEventListener('touchmove', swipeAction);\n    swipeArea.addEventListener('touchend', swipeEnd);\n\n    //function on touchStart\n    function swipeStart(event) {\n      event.preventDefault();\n      var evt = getEvent();\n      posInt = posX1 = evt.clientX; //initial position of the cursor \n    }\n\n    //function on touchChange\n    function swipeAction(event) {\n      var evt = getEvent();\n      event.preventDefault();\n      posX2 = posX1 - evt.clientX;\n      posX1 = evt.clientX;\n    }\n\n    //function on touchEnd\n    function swipeEnd(event) {\n      event.preventDefault();\n      posFinal = posInt - posX1;\n      if (posX2 < 0) {\n        count--;\n        if (count < 0) {\n          count = articlesArray.length - 1;\n        }\n        currentSlide(count);\n        rollSlider();\n        clearInterval(timerId);\n        timerId = setInterval(automatic, 6000);\n        setInterval(timerId);\n      }\n      if (posX2 > 0) {\n        count++;\n        if (count >= articlesArray.length) {\n          count = 0;\n        }\n        currentSlide(count);\n        rollSlider();\n        clearInterval(timerId);\n        timerId = setInterval(automatic, 6000);\n        setInterval(timerId);\n      }\n    }\n  }\n  mobileSwipe();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderHandler);\n\n//# sourceURL=webpack://coffee-house/./coffee-house/js/handlers/slider-handler.js?");

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