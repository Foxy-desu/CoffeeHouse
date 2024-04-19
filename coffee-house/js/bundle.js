/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./coffee-house/js/handlers/burger-menu-handler.js":
/*!*********************************************************!*\
  !*** ./coffee-house/js/handlers/burger-menu-handler.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function burgerMenuHandler() {
  //burger handler variables
  var body = document.body;
  var buttonOpen = document.querySelector('.burger');
  var menu = document.querySelector('.header-block__nav');
  var menuItems = menu.querySelectorAll('.navigation-item');

  //event with buttons (close/open)
  buttonOpen.addEventListener('click', function (event) {
    buttonOpen.classList.toggle('js-burger-button_become-close');
    if (menu.classList.contains('js-menu_active')) {
      menu.classList.toggle('js-menu_active');
      body.classList.toggle('js-body_no-scroll');
      setTimeout(function () {
        menu.classList.toggle('js-reveal');
      }, 600);
    } else {
      menu.classList.toggle('js-reveal');
      setTimeout(function () {
        menu.classList.toggle('js-menu_active');
        body.classList.toggle('js-body_no-scroll');
      }, 0);
    }
    // menu.classList.toggle('js-menu_active');
    // body.classList.toggle('js-body_no-scroll');
  });

  //event with menu items
  menuItems.forEach(function (element) {
    element.addEventListener('click', function (event) {
      menu.classList.remove('js-menu_active');
      buttonOpen.classList.remove('js-burger-button_become-close');
      body.classList.remove('js-body_no-scroll');
      setTimeout(function () {
        menu.classList.remove('js-reveal');
      }, 100);
    });
  });

  //resize window
  var mobileWidthMediaQuery = window.matchMedia('(max-width: 768px)');
  mobileWidthMediaQuery.addEventListener('change', function () {
    body.classList.remove('js-body_no-scroll');
    menu.classList.remove('js-menu_active');
    buttonOpen.classList.remove('js-burger-button_become-close');
    menu.classList.remove('js-reveal');
  });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenuHandler);

/***/ }),

/***/ "./coffee-house/js/handlers/menu-handler.js":
/*!**************************************************!*\
  !*** ./coffee-house/js/handlers/menu-handler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _products_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products/products */ "./coffee-house/js/products/products.js");

function menuHandler() {
  //check if the right page is displayed
  if (document.querySelector('.menu-section')) {
    //show Items
    var renderItems = function renderItems() {
      var menuCards = Array.from(menu.childNodes);
      console.log(currentCategory);
      menuCards.forEach(function (elem) {
        elem.remove();
      });
      //not only add cards to the menu block, but also assign event listeners to them as created
      currentCategory.map(function (elem) {
        var cardTemplate = "\n                <!--article start-->\n                <article class=\"menu-section__article\" data-item-category=\"".concat(elem.category, "\" data-item-name=\"").concat(elem.name, "\">\n                    <div class=\"menu-section__item-image-wrap\">\n                        <img class=\"menu-section__item-image menu-section__image1\" src=\"").concat(elem.thumbnail, "\" alt=\"a photo of ").concat(elem.name, "\">\n                    </div>\n                    <div class=\"menu-section__item-info-wrap\">\n                        <h3 class=\"menu-section__item-heading\">\n                            ").concat(elem.name, "\n                        </h3>\n                        <p class=\"menu-section__item-description\">\n                            ").concat(elem.description, "\n                        </p>\n                        <p class=\"menu-section__item-price\">\n                            $").concat(elem.price, "\n                        </p>\n                    </div>\n                </article>\n                <!--article end-->\n                ");
        menu.insertAdjacentHTML('beforeend', cardTemplate);
        var cards = Array.from(menu.children);
        cards.forEach(function (card) {
          card.addEventListener('click', openPopUp);
          card.addEventListener('click', renderPopUp);
        });
      });
    };
    //change current category
    var currentCategoryChange = function currentCategoryChange() {
      var target = event.target.dataset.btnType;
      switch (target) {
        case 'coffee-btn':
          {
            currentCategory = coffeeList;
            break;
          }
          ;
        case 'tea-btn':
          {
            currentCategory = teaList;
            break;
          }
          ;
        case 'dessert-btn':
          {
            currentCategory = dessertList;
            break;
          }
          ;
        default:
          {
            break;
          }
          ;
      }
    };
    //change current button
    var currentBtnChange = function currentBtnChange() {
      var element = event.target;
      if (element.dataset.btnType) {
        currentBtn = element.closest('button');
      }
    };
    //colorize btns
    var colorizeCurrentBtn = function colorizeCurrentBtn() {
      categoryBtns.forEach(function (button) {
        button.classList.remove('menu-section__button--active');
        button.removeAttribute('disabled');
        if (button === currentBtn) {
          button.classList.add('menu-section__button--active');
          button.setAttribute('disabled', '');
        }
      });
    };
    //hide extra elems
    var hideLoadMoreBtn = function hideLoadMoreBtn() {
      // console.log(currentCategory);
      if (currentCategory.length <= 4 || window.innerWidth > 768) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'inline-block';
      }
    }; //handle load more button to show more
    var showMoreItems = function showMoreItems() {
      menu.classList.add('js-expose-hidden-cards');
      loadMoreBtn.classList.add('js-hide');
    }; //handle load more button to hide more
    var hideMoreItems = function hideMoreItems() {
      menu.classList.remove('js-expose-hidden-cards');
      loadMoreBtn.classList.remove('js-hide');
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                         POPUP HANDLING                                                     //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //open backdrop block on card click
    var openPopUp = function openPopUp() {
      backdrop.classList.remove('js-hide');
      body.classList.add('js-body_no-scroll');
    };
    //close popup
    var closePopUp = function closePopUp() {
      backdrop.classList.add('js-hide');
      body.classList.remove('js-body_no-scroll');
      Array.from(popupContent).forEach(function (elem) {
        return elem.remove();
      });
    };
    //renderPopup
    var renderPopUp = function renderPopUp() {
      currCard = event.target.closest('.menu-section__article');
      currItemName = currCard.dataset.itemName;
      function findItemObj() {
        currentCategory.forEach(function (elem) {
          if (elem.name === currItemName) {
            var renderContent = function renderContent() {
              var name = currObj.name,
                thumbnail = currObj.thumbnail,
                description = currObj.description,
                price = currObj.price,
                cizeS = currObj.sizes.s.size,
                sizeM = currObj.sizes.m.size,
                sizeL = currObj.sizes.l.size,
                addOne = currObj.additives[0].name,
                addTwo = currObj.additives[1].name,
                addThree = currObj.additives[2].name,
                popupContentTemplate = "\n                        <div class=\"popup__order-wrap\">\n                            <div class=\"popup__order-photo-wrap\">\n                                <img class=\"popup__order-photo\" src=\"".concat(thumbnail, "\" alt=\"").concat(name, " photo\">\n                            </div>\n                            <div class=\"popup__item-info-wrap\">\n                                <h3 class=\"popup__item-name\">\n                                    ").concat(name, "\n                                </h3>\n                                <div class=\"popup__order-info\">\n                                    <p class=\"popup__item-desc\">\n                                    ").concat(description, "\n                                    </p>\n                                    <form name=\"order:").concat(name, "\">\n                                        <div class=\"order-options\">\n                                            <div class=\"popup__order-sizes\">\n                                                <p for class=\"popup__order-heading\">Size</p>\n                                                <div class=\"popup__button-wrap\" id=\"size-buttons\">\n                                                    <button class=\"popup__order-button size-s popup__order-button--active\" type=\"button\" disabled><span class=\"button-inner-circle\">S</span><span class=\"button-text\">").concat(cizeS, "</span></button>\n                                                    <button class=\"popup__order-button size-m\" type=\"button\"><span class=\"button-inner-circle\">M</span><span class=\"button-text\">").concat(sizeM, "</span></button>\n                                                    <button class=\"popup__order-button size-l\" type=\"button\"><span class=\"button-inner-circle\">L</span><span class=\"button-text\">").concat(sizeL, "</span></button>\n                                                </div>\n                                            </div>\n                                            <div class=\"popup__order-additives\">\n                                                <p class=\"popup__order-heading\">Additives</p>\n                                                <div class=\"popup__button-wrap\" id=\"additives-buttons\">\n                                                    <button class=\"popup__order-button first-button\" type=\"button\"><span class=\"button-inner-circle\">1</span><span class=\"button-text\">").concat(addOne, "</span></button>\n                                                    <button class=\"popup__order-button second-button\" type=\"button\"><span class=\"button-inner-circle\">2</span><span class=\"button-text\">").concat(addTwo, "</span></button>\n                                                    <button class=\"popup__order-button third-button\" type=\"button\"><span class=\"button-inner-circle\">3</span><span class=\"button-text\">").concat(addThree, "</span></button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </form>\n                                    <div class=\"popup__order-total-wrap\">\n                                        <div class=\"popup__order-total-container\">\n                                            <span class=\"popup__order-total\">Total:</span>\n                                            <span class=\"popup__order-price\">$").concat(price, "</span>\n                                        </div>\n                                        <div class=\"popup__order-total-warning\">\n                                            <div class=\"popup__warning-sign\"></div>\n                                            <p class=\"popup__warning-text\">\n                                                The cost is not final. Download our mobile app to see the final price\n                                                and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <button form=\"order:").concat(name, "\" class=\"popup__order-button submit-button\">Close</button>\n                                </div>\n                            </div>\n                        </div>\n                        ");
              popUpBox.insertAdjacentHTML('beforeend', popupContentTemplate);
            };
            currObj = JSON.parse(JSON.stringify(elem));
            console.log(elem);
            console.log(currObj.name);
            renderContent();
          }
        });
      }
      findItemObj();
      if (darkScreen) {
        darkScreen.addEventListener('click', closePopUp);
        Array.from(closeBtn).forEach(function (elem) {
          elem.addEventListener('click', closePopUp);
          console.log(elem);
        });
      }
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                         MENU VARIABLES AND CONSTANTS                                       //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var body = document.body;

    //lists of menu items
    var coffeeList = _products_products__WEBPACK_IMPORTED_MODULE_0__["default"].menuPage.coffee,
      teaList = _products_products__WEBPACK_IMPORTED_MODULE_0__["default"].menuPage.tea,
      dessertList = _products_products__WEBPACK_IMPORTED_MODULE_0__["default"].menuPage.dessert;

    //menu controls
    var categoryBtnsBlock = document.querySelector('.menu-section__buttons'),
      categoryBtns = document.querySelectorAll('.menu-section__button'),
      defaultBtn = categoryBtnsBlock.firstElementChild,
      //shown as active on  page load
      loadMoreBtn = document.querySelector('.menu-section__refresh');

    //menu elements
    var menu = document.querySelector('.menu-section__articles');

    //variables;
    var currentCategory = coffeeList,
      currentBtn = defaultBtn;
    var currCard, currItemName, currObj;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                         POPUP VARIABLES AND CONSTANTS                                      //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //backdrop blocks
    var backdrop = document.querySelector('.backdrop');
    var popUpBox = document.querySelector('.popup');
    var darkScreen = document.querySelector('.backdrop__dark-screen');

    //popup elements
    var photoBlock = document.querySelector('.popup__order-photo');
    var itemName = document.querySelector('.popup__item-name');
    var itemDescription = document.querySelector('.popup__item-desc');
    var selectButtonsClasters = document.querySelectorAll('.popup__button-wrap');
    var sizeBtns = selectButtonsClasters[0];
    var additivesBtns = selectButtonsClasters[1];
    var totalPrice = document.querySelector('.popup__order-price');
    var popupContent = popUpBox.children;

    //buttons
    var closeBtn = document.getElementsByClassName('submit-button');
    var sizeSBtn = document.querySelector('.popup__order-button.size-s');
    var sizeMBtn = document.querySelector('.popup__order-button.size-m');
    var sizeLBtn = document.querySelector('.popup__order-button.size-l');
    var additiveOneBtn = document.querySelector('.popup__order-button.first-button');
    var additiveTwoBtn = document.querySelector('.popup__order-button.second-button');
    var additiveThreeBtn = document.querySelector('.popup__order-button.third-button');
    var sizeButtons = document.getElementById('size-buttons');
    var addButtons = document.getElementById('additive-buttons');

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                                  MENU HANDLING                                              //
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //event listening:
    categoryBtnsBlock.addEventListener('click', currentCategoryChange);
    categoryBtnsBlock.addEventListener('click', currentBtnChange);
    categoryBtnsBlock.addEventListener('click', colorizeCurrentBtn);
    categoryBtnsBlock.addEventListener('click', hideMoreItems);
    categoryBtnsBlock.addEventListener('click', renderItems);
    categoryBtnsBlock.addEventListener('click', hideLoadMoreBtn);
    //windoe event
    window.addEventListener('resize', hideLoadMoreBtn);
    window.addEventListener('resize', hideMoreItems);
    window.addEventListener('DOMContentLoaded', renderItems);
    //load more btn events
    loadMoreBtn.addEventListener('click', showMoreItems);
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;

    //order calculations
  }
  ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuHandler);

/***/ }),

/***/ "./coffee-house/js/handlers/popup-handler.js":
/*!***************************************************!*\
  !*** ./coffee-house/js/handlers/popup-handler.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _products_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products/products */ "./coffee-house/js/products/products.js");

function popupHandler() {
  if (document.querySelector('.menu-section')) {
    //backdrop blocks
    var backdrop = document.querySelector('.backdrop');
    var popUpBox = document.querySelector('.popup');
    var darkScreen = document.querySelector('.backdrop__dark-screen');

    //popup elements
    var photoBlock = document.querySelector('.popup__order-photo');
    var itemName = document.querySelector('.popup__item-name');
    var itemDescription = document.querySelector('.popup__item-desc');
    var selectButtonsClasters = document.querySelectorAll('.popup__button-wrap');
    var sizeBtns = selectButtonsClasters[0];
    var additivesBtns = selectButtonsClasters[1];
    var totalPrice = document.querySelector('.popup__order-price');

    //buttons
    var closeBtn = document.querySelector('.submit-button');
    var sizeSBtn = document.querySelector('.popup__order-button.size-s');
    var sizeMBtn = document.querySelector('.popup__order-button.size-m');
    var sizeLBtn = document.querySelector('.popup__order-button.size-l');
    var additiveOneBtn = document.querySelector('.popup__order-button.first-button');
    var additiveTwoBtn = document.querySelector('.popup__order-button.second-button');
    var additiveThreeBtn = document.querySelector('.popup__order-button.third-button');

    //menu burrons
    var categoryBtnsBlock = document.querySelector('.menu-section__buttons');

    //menu and cards
    var menu = document.querySelector('.menu-section__articles');
    var menuCards = document.getElementsByClassName('menu-section__article');

    //open backdrop block on card click
    // function openPopUp() {

    //     Array.from(menuCards).forEach((card) => {
    //             card.addEventListener('click', function clickCard() {
    //                 backdrop.classList.remove('js-hide');
    //             })
    //         });

    // }
    // togglePopUp();

    //close popup
    // function closePopUp() {
    //     const closeElements = [darkScreen, closeBtn];

    //     closeElements.forEach((element) => {
    //         element.addEventListener('click', (event) => {
    //             backdrop.classList.add('js-hide');
    //         });
    //     });
    // }
  }
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupHandler);

/***/ }),

/***/ "./coffee-house/js/handlers/slider-handler.js":
/*!****************************************************!*\
  !*** ./coffee-house/js/handlers/slider-handler.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sliderHandler() {
  if (document.querySelector('.favorites-coffee-section')) {
    //slider move 
    var rollSlider = function rollSlider() {
      sliderLine.style.transform = 'translateX(-' + count * width + 'px)';
    }; //adaptive slider size -xyeta-
    var resize = function resize() {
      width = document.querySelector('.slider__content-wrap').offsetWidth;
      console.log(width);
      sliderLine.style.width = "".concat(width * articlesArray.length, "px");
      articlesArray.forEach(function (elem) {
        elem.style.width = "".concat(width);
        elem.style.height = "auto";
      });
      rollSlider();
    };
    //button-switch 
    var buttonClick = function buttonClick() {
      sliderBtnPrev.addEventListener('click', function (event) {
        count--;
        if (count < 0) {
          count = articlesArray.length - 1;
        }
        currentSlide(count);
        rollSlider();
        clearInterval(timerId);
        timerId = setInterval(automatic, 6000);
        // setInterval(timerId);

        //clear timeout and set start variable for automatic scrolling proper handling (with pausing)
        clearTimeout(timeOutId);
        start = Date.now();
      });
      sliderBtnNext.addEventListener('click', function (event) {
        count++;
        if (count >= articlesArray.length) {
          count = 0;
        }
        currentSlide(count);
        rollSlider();
        clearInterval(timerId);
        timerId = setInterval(automatic, 6000);
        // setInterval(timerId);

        //clear timeout and set start variable for automatic scrolling proper handling (with pausing)
        clearTimeout(timeOutId);
        start = Date.now();
      });
    };
    //make pagination button colored
    var currentSlide = function currentSlide(index) {
      // console.log(`pagination works! now index is at ${index} point`)
      sliderPaginationPoints.forEach(function (elem) {
        return elem.classList.remove('js-coloring');
      });
      sliderPaginationPoints[index].classList.add('js-coloring');
    };
    //automatically change slides with certain interval and change start variable
    var automatic = function automatic(interval) {
      count++;
      if (count >= articlesArray.length) {
        count = 0;
      }
      currentSlide(count);
      rollSlider();

      //reset time left for next slide and reset start time to check when a slide should roll next time
      timeLeft = 6000;
      start = Date.now();
      interval !== null && interval !== void 0 ? interval : setInterval(interval, 0);
    };
    // on mouseenter
    // clear previously set timeout (if any exists) to prevent setting new interval
    // memorize current element (count index), 
    // calculate and memorize how much time of the interrupted interval is left
    // clear previously set interval to pause scrolling
    //on mouseleave
    //set new interval equal to the time left
    //set another interval after the previous one runs once by using set timeout and default 6000ms
    var automaticWithPause = function automaticWithPause() {
      function pauseSlider() {
        clearTimeout(timeOutId);
        clearInterval(timerId);
        timeLeft = timeLeft - (Date.now() - start);
        sliderPaginationPoints[count].classList.add('js-paused');
        console.log("full time: ".concat(timeLeft, "\ntime diff: ").concat(Date.now() - start, "\ntime left: ").concat(timeLeft));
      }
      function continueSlider() {
        timerId = setInterval(automatic, timeLeft);
        start = Date.now();
        timeOutId = setTimeout(function () {
          clearInterval(timerId);
          timerId = setInterval(automatic, 6000);
        }, timeLeft);
        sliderPaginationPoints[count].classList.remove('js-paused');
      }
      slider.addEventListener('mouseenter', function () {
        pauseSlider();
      });
      slider.addEventListener('mouseleave', function () {
        continueSlider();
      });
      slider.addEventListener('touchstart', pauseSlider, true);
      // slider.addEventListener('touchmove', continueSlider, true);
      slider.addEventListener('touchend', continueSlider, true);
    };
    //mobile devices swiping 
    var mobileSwipe = function mobileSwipe() {
      //some usefull variables
      var posX1 = 0,
        posInt = 0,
        posX2 = 0;
      function getEvent() {
        return event.type.search('touch') !== -1 ? event.touches[0] : event;
      }
      swipeArea.addEventListener('touchstart', swipeStart);
      swipeArea.addEventListener('touchmove', swipeAction);
      swipeArea.addEventListener('touchend', swipeEnd);

      //function on touchStart
      function swipeStart(event) {
        event.preventDefault();
        var evt = getEvent();
        posInt = posX1 = evt.clientX; //initial position of the cursor
        start = Date.now();
      }

      //function on touchChange
      function swipeAction(event) {
        var evt = getEvent();
        // event.preventDefault();

        posX2 = posX1 - evt.clientX; // difference between touch start point and current finger location
        posX1 = evt.clientX;
      }

      //function on touchEnd
      function swipeEnd(event) {
        // event.preventDefault();

        if (posX1 !== posInt) {
          if (posX2 < 0) {
            count--;
            if (count < 0) {
              count = articlesArray.length - 1;
            }
            currentSlide(count);
            rollSlider();
            clearInterval(timerId);
            timerId = setInterval(automatic, 6000);
          }
          if (posX2 > 0) {
            count++;
            if (count >= articlesArray.length) {
              count = 0;
            }
            currentSlide(count);
            rollSlider();
            clearInterval(timerId);
            timerId = setInterval(automatic, 6000);
          }
          //clear time out to prevent encreasing tnterval before next slide (because of pausing handler)
          clearTimeout(timeOutId);
        } else return;
      }
    };
    //slider consts
    var articlesArray = document.querySelectorAll('.slider__article'),
      //slides
      sliderLine = document.querySelector('.slider__articles'),
      //slider track
      sliderPaginationPoints = document.querySelectorAll('.pagination-fill'),
      sliderBtnNext = document.querySelector('.button-right'),
      //btn next
      sliderBtnPrev = document.querySelector('.button-left'),
      //btn prev
      swipeArea = document.querySelector('.slider__content'),
      //slider
      slider = document.querySelector('.slider__content-wrap'); //slider-list

    //timer
    var timerId = setInterval(automatic, 6000);

    //slider variables
    var count = 0,
      width;

    //some variables for automatic
    //start variable for checking when a slide has automatically changed
    //timeoutId variable for further timeout clearing
    var start = Date.now();
    var timeOutId;

    //time left before next slider roll
    var timeLeft = 6000;

    //make slider change with the window resizing
    window.addEventListener('resize', function () {
      resize();
      currentSlide(count);
    });
    resize();
    buttonClick();
    currentSlide(count);
    ;
    automaticWithPause();
    mobileSwipe();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderHandler);

/***/ }),

/***/ "./coffee-house/js/handlers/video-handler.js":
/*!***************************************************!*\
  !*** ./coffee-house/js/handlers/video-handler.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function videoHandler() {
  if (document.querySelector('.enjoy-section')) {
    var video = document.querySelector('#background-video');
    video.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (videoHandler);

/***/ }),

/***/ "./coffee-house/js/products/products.js":
/*!**********************************************!*\
  !*** ./coffee-house/js/products/products.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var store = {
  menuPage: {
    coffee: [{
      name: "Irish coffee",
      description: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      price: "7.00",
      category: "coffee",
      thumbnail: './images/png/coffee-1.png',
      sizes: {
        s: {
          size: "200 ml",
          addPrice: "0.00"
        },
        m: {
          size: "300 ml",
          addPrice: "0.50"
        },
        l: {
          size: "400 ml",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Sugar",
        addPrice: "0.50"
      }, {
        name: "Cinnamon",
        addPrice: "0.50"
      }, {
        name: "Syrup",
        addPrice: "0.50"
      }]
    }, {
      name: "Kahlua coffee",
      description: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      price: "7.00",
      category: "coffee",
      thumbnail: './images/png/coffee-2.png',
      sizes: {
        s: {
          size: "200 ml",
          addPrice: "0.00"
        },
        m: {
          size: "300 ml",
          addPrice: "0.50"
        },
        l: {
          size: "400 ml",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Sugar",
        addPrice: "0.50"
      }, {
        name: "Cinnamon",
        addPrice: "0.50"
      }, {
        name: "Syrup",
        addPrice: "0.50"
      }]
    }, {
      name: "Honey raf",
      description: "Espresso with frothed milk, cream and aromatic honey",
      price: "5.50",
      category: "coffee",
      thumbnail: './images/png/coffee-3.png',
      sizes: {
        s: {
          size: "200 ml",
          addPrice: "0.00"
        },
        m: {
          size: "300 ml",
          addPrice: "0.50"
        },
        l: {
          size: "400 ml",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Sugar",
        addPrice: "0.50"
      }, {
        name: "Cinnamon",
        addPrice: "0.50"
      }, {
        name: "Syrup",
        addPrice: "0.50"
      }]
    }, {
      name: "Ice cappuccino",
      description: "Cappuccino with soft thick foam in summer version with ice",
      price: "5.00",
      category: "coffee",
      thumbnail: './images/png/coffee-4.png',
      sizes: {
        s: {
          size: "200 ml",
          addPrice: "0.00"
        },
        m: {
          size: "300 ml",
          addPrice: "0.50"
        },
        l: {
          size: "400 ml",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Sugar",
        addPrice: "0.50"
      }, {
        name: "Cinnamon",
        addPrice: "0.50"
      }, {
        name: "Syrup",
        addPrice: "0.50"
      }]
    }, {
      name: "Espresso",
      description: "Classic black coffee",
      price: "4.50",
      category: "coffee",
      thumbnail: './images/png/coffee-5.png',
      sizes: {
        s: {
          size: "200 ml",
          addPrice: "0.00"
        },
        m: {
          size: "300 ml",
          addPrice: "0.50"
        },
        l: {
          size: "400 ml",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Sugar",
        addPrice: "0.50"
      }, {
        name: "Cinnamon",
        addPrice: "0.50"
      }, {
        name: "Syrup",
        addPrice: "0.50"
      }]
    }, {
      name: "Latte",
      description: "Espresso coffee with the addition of steamed milk and dense milk foam",
      price: "5.50",
      category: "coffee",
      thumbnail: './images/png/coffee-6.png',
      sizes: {
        s: {
          size: "200 ml",
          addPrice: "0.00"
        },
        m: {
          size: "300 ml",
          addPrice: "0.50"
        },
        l: {
          size: "400 ml",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Sugar",
        addPrice: "0.50"
      }, {
        name: "Cinnamon",
        addPrice: "0.50"
      }, {
        name: "Syrup",
        addPrice: "0.50"
      }]
    }, {
      name: "Latte macchiato",
      description: "Espresso with frothed milk and chocolate",
      price: "5.50",
      category: "coffee",
      thumbnail: './images/png/coffee-7.png',
      sizes: {
        s: {
          size: "200 ml",
          addPrice: "0.00"
        },
        m: {
          size: "300 ml",
          addPrice: "0.50"
        },
        l: {
          size: "400 ml",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Sugar",
        addPrice: "0.50"
      }, {
        name: "Cinnamon",
        addPrice: "0.50"
      }, {
        name: "Syrup",
        addPrice: "0.50"
      }]
    }, {
      name: "Coffee with cognac",
      description: "Fragrant black coffee with cognac and whipped cream",
      price: "6.50",
      category: "coffee",
      thumbnail: './images/png/coffee-8.png',
      sizes: {
        s: {
          size: "200 ml",
          addPrice: "0.00"
        },
        m: {
          size: "300 ml",
          addPrice: "0.50"
        },
        l: {
          size: "400 ml",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Sugar",
        addPrice: "0.50"
      }, {
        name: "Cinnamon",
        addPrice: "0.50"
      }, {
        name: "Syrup",
        addPrice: "0.50"
      }]
    }],
    tea: [{
      name: "Moroccan",
      description: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      price: "4.50",
      category: "tea",
      thumbnail: './images/png/tea-1.png',
      sizes: {
        s: {
          size: "200 ml",
          addPrice: "0.00"
        },
        m: {
          size: "300 ml",
          addPrice: "0.50"
        },
        l: {
          size: "400 ml",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Sugar",
        addPrice: "0.50"
      }, {
        name: "Lemon",
        addPrice: "0.50"
      }, {
        name: "Syrup",
        addPrice: "0.50"
      }]
    }, {
      name: "Ginger",
      description: "Original black tea with fresh ginger, lemon and honey",
      price: "5.00",
      category: "tea",
      thumbnail: './images/png/tea-2.png',
      sizes: {
        s: {
          size: "200 ml",
          addPrice: "0.00"
        },
        m: {
          size: "300 ml",
          addPrice: "0.50"
        },
        l: {
          size: "400 ml",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Sugar",
        addPrice: "0.50"
      }, {
        name: "Lemon",
        addPrice: "0.50"
      }, {
        name: "Syrup",
        addPrice: "0.50"
      }]
    }, {
      name: "Cranberry",
      description: "Invigorating black tea with cranberry and honey",
      price: "5.00",
      category: "tea",
      thumbnail: './images/png/tea-3.png',
      sizes: {
        s: {
          size: "200 ml",
          addPrice: "0.00"
        },
        m: {
          size: "300 ml",
          addPrice: "0.50"
        },
        l: {
          size: "400 ml",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Sugar",
        addPrice: "0.50"
      }, {
        name: "Lemon",
        addPrice: "0.50"
      }, {
        name: "Syrup",
        addPrice: "0.50"
      }]
    }, {
      name: "Sea buckthorn",
      description: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      price: "5.50",
      category: "tea",
      thumbnail: './images/png/tea-4.png',
      sizes: {
        s: {
          size: "200 ml",
          addPrice: "0.00"
        },
        m: {
          size: "300 ml",
          addPrice: "0.50"
        },
        l: {
          size: "400 ml",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Sugar",
        addPrice: "0.50"
      }, {
        name: "Lemon",
        addPrice: "0.50"
      }, {
        name: "Syrup",
        addPrice: "0.50"
      }]
    }],
    dessert: [{
      name: "Marble cheesecake",
      description: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      price: "3.50",
      category: "dessert",
      thumbnail: './images/png/dessert-1.png',
      sizes: {
        s: {
          size: "50 g",
          addPrice: "0.00"
        },
        m: {
          size: "100 g",
          addPrice: "0.50"
        },
        l: {
          size: "200 g",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Berries",
        addPrice: "0.50"
      }, {
        name: "Nuts",
        addPrice: "0.50"
      }, {
        name: "Jam",
        addPrice: "0.50"
      }]
    }, {
      name: "Red velvet",
      description: "Layer cake with cream cheese frosting",
      price: "4.00",
      category: "dessert",
      thumbnail: './images/png/dessert-2.png',
      sizes: {
        s: {
          size: "50 g",
          addPrice: "0.00"
        },
        m: {
          size: "100 g",
          addPrice: "0.50"
        },
        l: {
          size: "200 g",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Berries",
        addPrice: "0.50"
      }, {
        name: "Nuts",
        addPrice: "0.50"
      }, {
        name: "Jam",
        addPrice: "0.50"
      }]
    }, {
      name: "Cheesecakes",
      description: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      price: "4.50",
      category: "dessert",
      thumbnail: './images/png/dessert-3.png',
      sizes: {
        s: {
          "size": "50 g",
          addPrice: "0.00"
        },
        m: {
          "size": "100 g",
          addPrice: "0.50"
        },
        l: {
          "size": "200 g",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Berries",
        addPrice: "0.50"
      }, {
        name: "Nuts",
        addPrice: "0.50"
      }, {
        name: "Jam",
        addPrice: "0.50"
      }]
    }, {
      name: "Creme brulee",
      description: "Delicate creamy dessert in a caramel basket with wild berries",
      price: "4.00",
      category: "dessert",
      thumbnail: './images/png/dessert-4.png',
      sizes: {
        s: {
          size: "50 g",
          addPrice: "0.00"
        },
        m: {
          size: "100 g",
          addPrice: "0.50"
        },
        l: {
          size: "200 g",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Berries",
        addPrice: "0.50"
      }, {
        name: "Nuts",
        addPrice: "0.50"
      }, {
        name: "Jam",
        addPrice: "0.50"
      }]
    }, {
      name: "Pancakes",
      description: "Tender pancakes with strawberry jam and fresh strawberries",
      price: "4.50",
      category: "dessert",
      thumbnail: './images/png/dessert-5.png',
      sizes: {
        s: {
          "size": "50 g",
          addPrice: "0.00"
        },
        m: {
          "size": "100 g",
          addPrice: "0.50"
        },
        l: {
          "size": "200 g",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Berries",
        addPrice: "0.50"
      }, {
        name: "Nuts",
        addPrice: "0.50"
      }, {
        name: "Jam",
        addPrice: "0.50"
      }]
    }, {
      name: "Honey cake",
      description: "Classic honey cake with delicate custard",
      price: "4.50",
      category: "dessert",
      thumbnail: './images/png/dessert-6.png',
      sizes: {
        s: {
          size: "50 g",
          addPrice: "0.00"
        },
        m: {
          size: "100 g",
          addPrice: "0.50"
        },
        l: {
          size: "200 g",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Berries",
        addPrice: "0.50"
      }, {
        name: "Nuts",
        addPrice: "0.50"
      }, {
        name: "Jam",
        addPrice: "0.50"
      }]
    }, {
      name: "Chocolate cake",
      description: "Cake with hot chocolate filling and nuts with dried apricots",
      price: "5.50",
      category: "dessert",
      thumbnail: './images/png/dessert-7.png',
      sizes: {
        s: {
          size: "50 g",
          addPrice: "0.00"
        },
        m: {
          size: "100 g",
          addPrice: "0.50"
        },
        l: {
          size: "200 g",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Berries",
        addPrice: "0.50"
      }, {
        name: "Nuts",
        addPrice: "0.50"
      }, {
        name: "Jam",
        addPrice: "0.50"
      }]
    }, {
      name: "Black forest",
      description: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      price: "6.50",
      category: "dessert",
      thumbnail: './images/png/dessert-8.png',
      sizes: {
        s: {
          size: "50 g",
          addPrice: "0.00"
        },
        m: {
          size: "100 g",
          addPrice: "0.50"
        },
        l: {
          size: "200 g",
          addPrice: "1.00"
        }
      },
      additives: [{
        name: "Berries",
        addPrice: "0.50"
      }, {
        name: "Nuts",
        addPrice: "0.50"
      }, {
        name: "Jam",
        addPrice: "0.50"
      }]
    }]
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./coffee-house/js/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handlers_burger_menu_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/burger-menu-handler */ "./coffee-house/js/handlers/burger-menu-handler.js");
/* harmony import */ var _handlers_slider_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/slider-handler */ "./coffee-house/js/handlers/slider-handler.js");
/* harmony import */ var _handlers_menu_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/menu-handler */ "./coffee-house/js/handlers/menu-handler.js");
/* harmony import */ var _handlers_video_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/video-handler */ "./coffee-house/js/handlers/video-handler.js");
/* harmony import */ var _handlers_popup_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/popup-handler */ "./coffee-house/js/handlers/popup-handler.js");





(0,_handlers_burger_menu_handler__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_handlers_slider_handler__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_handlers_menu_handler__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_handlers_video_handler__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_handlers_popup_handler__WEBPACK_IMPORTED_MODULE_4__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map