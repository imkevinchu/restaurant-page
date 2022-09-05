/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createContactPage = function createContactPage() {
  var contactPage = document.createElement("div");
  contactPage.classList.add("contact");
  var phone = document.createElement("p");
  phone.textContent = "(310) 867-5309";
  var address = document.createElement("p");
  address.textContent = "585 Venice Blvd, Venice, CA 90291";
  contactPage.appendChild(phone);
  contactPage.appendChild(address);
  return contactPage;
};

var loadContactPage = function loadContactPage() {
  var main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContactPage());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createHomePage = function createHomePage() {
  var homePage = document.createElement("div");
  homePage.classList.add("home");
  var heading = document.createElement("h2");
  var subtitle = document.createElement("p");
  heading.textContent = "Quality that doesn't go to waste";
  subtitle.textContent = "Since 1989";
  homePage.appendChild(heading);
  homePage.appendChild(subtitle);
  return homePage;
};

var loadHomePage = function loadHomePage() {
  var main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHomePage());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/burger.png */ "./src/img/burger.png");
/* harmony import */ var _img_fries_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/fries.png */ "./src/img/fries.png");
/* harmony import */ var _img_coffee_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/coffee.png */ "./src/img/coffee.png");
/* harmony import */ var _img_icecream_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/icecream.png */ "./src/img/icecream.png");





var createMenuPage = function createMenuPage() {
  var menuPage = document.createElement("div");
  menuPage.classList.add("menu");
  var Burger = new Image();
  var Fries = new Image();
  var Coffee = new Image();
  var IceCream = new Image();
  Burger.src = _img_burger_png__WEBPACK_IMPORTED_MODULE_0__;
  Coffee.src = _img_coffee_png__WEBPACK_IMPORTED_MODULE_2__;
  Fries.src = _img_fries_png__WEBPACK_IMPORTED_MODULE_1__;
  IceCream.src = _img_icecream_png__WEBPACK_IMPORTED_MODULE_3__;
  menuPage.appendChild(createMenuItem(Burger, "Burger", "600"));
  menuPage.appendChild(createMenuItem(Fries, "Fries", "300"));
  menuPage.appendChild(createMenuItem(Coffee, "Coffee", "100"));
  menuPage.appendChild(createMenuItem(IceCream, "Ice Cream", "400"));
  return menuPage;
};

var createMenuItem = function createMenuItem(img, name, cal) {
  var menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  var title = document.createElement("h3");
  var calories = document.createElement("p");
  title.textContent = name;
  calories.textContent = "".concat(cal, " calories");
  img.alt = name;
  menuItem.appendChild(title);
  menuItem.appendChild(calories);
  menuItem.appendChild(img);
  return menuItem;
};

var loadMenuPage = function loadMenuPage() {
  var main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenuPage());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
var _this = undefined;





var createHeader = function createHeader() {
  var header = document.createElement("header");
  header.classList.add("header");
  header.setAttribute("id", "header");
  var title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Out-N-In Burger";
  header.appendChild(title);
  header.appendChild(createNav());
  return header;
};

var createNav = function createNav() {
  var nav = document.createElement("nav");
  nav.classList.add("nav");
  nav.setAttribute("id", "nav");
  var homeBtn = document.createElement("button");
  homeBtn.classList.add("nav-btn");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setBtn(homeBtn);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  var menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-btn");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setBtn(menuBtn);
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  var contactBtn = document.createElement("button");
  contactBtn.classList.add("nav-btn");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setBtn(contactBtn);
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  return nav;
};

var createMain = function createMain() {
  var main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
};

var setBtn = function setBtn(btn) {
  var btnList = document.querySelectorAll(".nav-btn");
  btnList.forEach(function (btn) {
    if (btn !== _this) {
      btn.classList.remove("active");
    }
  });
  btn.classList.add("active");
};

var loadWebsite = function loadWebsite() {
  var content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebsite);

/***/ }),

/***/ "./src/img/burger.png":
/*!****************************!*\
  !*** ./src/img/burger.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1919583412c9ef5670df.png";

/***/ }),

/***/ "./src/img/coffee.png":
/*!****************************!*\
  !*** ./src/img/coffee.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e2c64556b8cc3a1e2ad4.png";

/***/ }),

/***/ "./src/img/fries.png":
/*!***************************!*\
  !*** ./src/img/fries.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6835eff704091ce212a2.png";

/***/ }),

/***/ "./src/img/icecream.png":
/*!******************************!*\
  !*** ./src/img/icecream.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/43bb0c51368bf7397624.png";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");

(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map