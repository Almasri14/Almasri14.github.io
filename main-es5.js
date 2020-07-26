function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  <button mat-icon-button><span class=\"material-icons\" (click)=\"showSearch = !showSearch\">search</span></button>\n  <input *ngIf=\"showSearch\" [@enterAnimation] class=\"input-field\" type=\"text\" placeholder=\"بحث...\" name=\"search\">\n  <span *ngIf=\"!showSideMenu\">\n    <button mat-button class=\"roundedBtn\" (click)=\"openSignInDialog()\">تسجيل الدخول</button>\n    <button mat-button class=\"roundedBtn\">تواصل معنا</button>\n    <button mat-button class=\"roundedBtn\"><span class=\"material-icons\">keyboard_arrow_down</span>خدماتنا</button>\n    <button mat-button class=\"roundedBtn\">حول</button>\n    <button mat-button class=\"roundedBtn\">الرئيسة</button>\n  </span>\n  <!-- <button rounded mat-raised-button class=\"signInBtn roundedBtn mat-elevation-z0\">تسجيل الدخول</button> -->\n  <div class=\"spacer\"></div>\n  <h2>{{title}}</h2>\n  <img width=\"40\" alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\" />\n  <div *ngIf=\"showSideMenu\">\n    <button mat-icon-button (click)=\"sidenav.toggle()\">\n      <span class=\"material-icons\">menu</span>\n    </button>\n  </div>\n</div>\n\n<!-- Sidebar -->\n<mat-sidenav-container>\n  <mat-sidenav #sidenav position=\"end\">\n    <!--this is a place for us to add side-nav code-->\n    <mat-nav-list style=\"text-align: right;\">\n      <div mat-list-item>\n        <div mat-button class=\"sideBarElement\" (click)=\"sidenav.close(); openSignInDialog()\">تسجيل الدخول</div>\n      </div>\n      <div mat-list-item>\n        <div mat-button class=\"sideBarElement\" (click)=\"sidenav.close() // will have more logic here\">الرئيسة</div>\n      </div>\n      <div mat-list-item>\n        <div mat-button class=\"sideBarElement\" (click)=\"sidenav.close() // will have more logic here\">تواصل\n          معنا</div>\n      </div>\n      <div mat-list-item>\n        <div mat-button class=\"sideBarElement\" (click)=\"sidenav.close() // will have more logic here\">خدماتنا</div>\n      </div>\n      <div mat-list-item>\n        <div mat-button class=\"sideBarElement\" (click)=\"sidenav.close() // will have more logic here\">حول</div>\n      </div>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <!-- Header -->\n  <!-- <mat-grid-list cols=\"2\" rowHeight=\"300px\">\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n      <img src=\"../assets/puzzleConnect.jpg\" class=\"landingPic\" alt=\"connect\" width=\"100%\" height=\"100%\">\n    </mat-grid-tile>\n  </mat-grid-list> -->\n  <header class=\"header__image\" [ngStyle]=\"{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\n    url(' + photos[photoIndex % photos.length] + ')'}\">\n    <div class=\"header__text\">\n      <h1>شبكني و لا تلبكني</h1>\n      <p>اكبر تجمع للشركات في كافة المجالات بين يديك</p>\n    </div>\n  </header>\n\n  <!-- About us -->\n  <section id=\"about\" class=\"about\">\n    <div class=\"welcome\">\n      <h5>\n        أهلا وسهلا بك في\n        <span>شبكني</span>\n      </h5>\n    </div>\n    <mat-grid-list [cols]=\"aboutContainerColumns\" [rowHeight]=\"aboutRowHeight\" style=\"height: 150px;\">\n      <mat-grid-tile [colspan]=\"aboutLogoColumns\" [rowspan]=\"1\" *ngIf=\"aboutLogoColumns > 0\">\n        <img width=\"40\" alt=\"Angular Logo\" style=\"opacity: 0.7;\"\n          src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\" />\n      </mat-grid-tile>\n      <mat-grid-tile [colspan]=\"aboutTextColumns\" [rowspan]=\"1\">\n        <div class=\"aboutUs\">\n          <h5>حولنا</h5>\n          <p> شبكني هي شركة تعمل كحلقة وصل بين الاشخاص الراغبة بشراء منتج او خدمة معينة و الشركات المسؤولة عن هذه\n            الخدمات\n          </p>\n        </div>\n      </mat-grid-tile>\n      <mat-grid-tile [colspan]=\"aboutLogoColumns\" [rowspan]=\"1\" *ngIf=\"aboutLogoColumns > 0\">\n        <img width=\"40\" alt=\"Angular Logo\" style=\"opacity: 0.7;\"\n          src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\" />\n      </mat-grid-tile>\n    </mat-grid-list>\n  </section>\n\n  <!-- General Info -->\n  <section class=\"cardsContainer\">\n    <mat-grid-list [cols]=\"3\" rowHeight=\"150px\">\n      <mat-grid-tile [colspan]=\"breakpoint === 'xs' ? 3 : 1\" [rowspan]=\"1\">\n        <div class=\"infoCard\">\n          <h2>+10k</h2>\n          <p>طلب</p>\n        </div>\n      </mat-grid-tile>\n      <mat-grid-tile [colspan]=\"breakpoint === 'xs' ? 3 : 1\" [rowspan]=\"1\">\n        <div class=\"infoCard\">\n          <h2>+100k</h2>\n          <p>خدمة</p>\n        </div>\n      </mat-grid-tile>\n      <mat-grid-tile [colspan]=\"breakpoint === 'xs' ? 3 : 1\" [rowspan]=\"1\">\n        <div class=\"infoCard\">\n          <h2>+500k</h2>\n          <p>مستخدم سعيد</p>\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </section>\n\n  <!-- Products/services -->\n  <section id=\"services\">\n    <div class=\"welcome\">\n      <h5>\n        <span>خدماتنا</span>\n      </h5>\n    </div>\n\n    <section class=\"popularQuizzesCardsContainer\">\n      <mat-grid-list [cols]=\"4\" rowHeight=\"300px\">\n        <mat-grid-tile [colspan]=\"breakpoint === 'xs' ? 4 : breakpoint === 'sm' ? 2 : 1\" [rowspan]=\"1\">\n          <div class=\"popularQuizzesCard\">\n            <div class=\"popularQuizzesCard__header\"\n              style=\"background-image: url('https://www.chieflearningofficer.com/wp-content/uploads/sites/3/2016/06/CO_0716_Feature1_WEB.jpg');\">\n            </div>\n            <div class=\"popularQuizzesCard__circle\">\n              <img src=\"https://img.icons8.com/plasticine/100/000000/cash-.png\" alt=\"Avatar\"\n                class=\"popularQuizzesCard__avatar\" />\n            </div>\n            <p>استشارات قانونية</p>\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"breakpoint === 'xs' ? 4 : breakpoint === 'sm' ? 2 : 1\" [rowspan]=\"1\">\n          <div class=\"popularQuizzesCard\">\n            <div class=\"popularQuizzesCard__header\"\n              style=\"background-image: url('https://i.udemycdn.com/course/750x422/2035498_57a1.jpg');\"></div>\n            <div class=\"popularQuizzesCard__circle\">\n              <img src=\"https://img.icons8.com/nolan/64/robot-3.png\" alt=\"Avatar\" class=\"popularQuizzesCard__avatar\" />\n            </div>\n            <p>مواقع، برامج</p>\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"breakpoint === 'xs' ? 4 : breakpoint === 'sm' ? 2 : 1\" [rowspan]=\"1\">\n          <div class=\"popularQuizzesCard\">\n            <div class=\"popularQuizzesCard__header\"\n              style=\"background-image: url('https://www.accolo.com/wp-content/uploads/2017/06/Mind-Map_001.jpeg');\">\n            </div>\n            <div class=\"popularQuizzesCard__circle\">\n              <img src=\"https://img.icons8.com/officel/64/000000/physics.png\" alt=\"Avatar\"\n                class=\"popularQuizzesCard__avatar\" />\n            </div>\n            <p>مزود انترنت</p>\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"breakpoint === 'xs' ? 4 : breakpoint === 'sm' ? 2 : 1\" [rowspan]=\"1\">\n          <div class=\"popularQuizzesCard\">\n            <div class=\"popularQuizzesCard__header\"\n              style=\"background-image: url('https://trojantimes.net/wp-content/uploads/2019/03/top-10-confidence-books.jpg');\">\n            </div>\n            <div class=\"popularQuizzesCard__circle\">\n              <img src=\"https://img.icons8.com/cute-clipart/64/000000/user-manual.png\" alt=\"Avatar\"\n                class=\"popularQuizzesCard__avatar\" />\n            </div>\n            <p>دورات تدريبة/تعليمية</p>\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n      <div style=\"text-align: center;\">\n        <a href=\"#\" class=\"gradientTextColor\">\n          <span class=\"material-icons gradientTextColor\">more_horiz</span>\n        </a>\n      </div>\n    </section>\n  </section>\n\n  <!-- Contact -->\n  <section id=\"contact\">\n    <h2 class=\"w3-center\">تواصل معنا</h2>\n\n    <p class=\"w3-opacity w3-center\">\n      <i>للاستفسار تواصل معنا عبر</i>\n    </p>\n    <div class=\"w3-row w3-padding-32 w3-container\" class=\"contactSection\">\n      <div class=\"w3-col s12 m5 w3-large w3-margin-bottom\">\n        <div>\n          <div class=\"contactBackground\" style=\"background: #42A5F5\">\n            <span class=\"material-icons w3-text-white\">\n              call\n            </span>\n          </div>+972599XXXXXX\n          <br />00229XXXXX\n        </div>\n        <div style=\"margin-top: 10px;\">\n          <div class=\"contactBackground\" style=\"background: #1E88E5\">\n            <span class=\"material-icons w3-text-white\">\n              mail\n            </span>\n          </div>\n          <div style=\"padding-top: 10px\">info@shabikny.com</div>\n        </div>\n        <div style=\"margin-top: 25px;\">\n          <div class=\"contactBackground\" style=\"background: #1976D2\">\n            <span class=\"material-icons w3-text-white\">\n              location_on\n            </span>\n          </div>Palestine - Rammallah\n          <br />Alquds St. BId.\n        </div>\n      </div>\n\n      <div class=\"w3-col s12 m7\">\n        <form>\n          <div class=\"w3-row-padding\" style=\"margin:0 -16px 8px -16px\">\n            <div class=\"w3-half\" style=\"margin-top: 5px;\">\n              <div style=\"padding: 2px;\" class=\"gradientBackground\">\n                <input class=\"w3-input\" style=\"background-color: #FAFAFA; border: none; color: black\" type=\"text\"\n                  placeholder=\"Name\" required name=\"Name\" v-model=\"contactName\" />\n              </div>\n            </div>\n            <div class=\"w3-half\" style=\"margin-top: 5px;\">\n              <div style=\"padding: 2px;\" class=\"gradientBackground\">\n                <input class=\"w3-input\" style=\"background-color: #FAFAFA; border: none; color: black\" type=\"email\"\n                  placeholder=\"Email\" required name=\"Email\" v-model=\"contactEmail\" />\n              </div>\n            </div>\n          </div>\n          <div style=\"padding: 2px;\" class=\"gradientBackground\">\n            <input class=\"w3-input\" style=\"background-color: #FAFAFA; border: none; color: black\" type=\"text\"\n              placeholder=\"Message\" required name=\"Message\" v-model=\"contactMessage\" />\n          </div>\n          <button class=\"w3-button w3-section w3-right gradientBackground\" type=\"submit\">SEND</button>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"w3-row w3-padding-16 w3-container\" style=\"width: 80%; margin: 200px auto auto auto;\">\n      <div class=\"w3-col s4\">\n        <div style=\"margin: auto; text-align: right; width: 50px\">\n          <div class=\"contactBackground\" style=\"background: #3B5998; cursor: pointer\">\n            <i class=\"fa fa-facebook\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"w3-col s4\">\n        <div style=\"margin: auto; text-align: center; width: 50px\">\n          <div class=\"contactBackground\" style=\"background: #0073B0; cursor: pointer\">\n            <i class=\"fa fa-linkedin\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"w3-col s4\">\n        <div style=\"margin: auto; text-align: left; width: 50px\">\n          <div class=\"contactBackground\" style=\"background: #FF0000; cursor: pointer\">\n            <i class=\"fa fa-youtube\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n</mat-sidenav-container>\n\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signIn/sign-in.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signIn/sign-in.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignInSignInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"imgcontainer\">\r\n  <span (click)=\"onNoClick()\" class=\"close\">&times;</span>\r\n  <img width=\"40\" alt=\"Angular Logo\"\r\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\" />\r\n</div>\r\n<h1 mat-dialog-title dir=\"rtl\" style=\"text-align: center;\">تسجيل الدخول</h1>\r\n<div mat-dialog-content dir=\"rtl\">\r\n  <form (ngSubmit)=\"login(f)\" #f=\"ngForm\">\r\n    <label for=\"loginEmail\">\r\n      <b>البريد الإلكتروني</b>\r\n    </label>\r\n    <input email type=\"email\" placeholder=\"أدخل البريد الإلكتروني\" name=\"loginEmail\" required ngModel />\r\n    <p *ngIf=\"f.controls.loginEmail?.invalid && f.submitted\" style=\"color: red;\">الرجاء ادخال بريد الكتروني صالح</p>\r\n    <label for=\"loginPassword\">\r\n      <b>كلمة المرور</b>\r\n    </label>\r\n    <input type=\"password\" placeholder=\"أدخل كلمة المرور\" name=\"loginPassword\" class=\"psw\" required ngModel />\r\n    <p *ngIf=\"f.controls.loginPassword?.invalid && f.submitted\" style=\"color: red;\">الرجاء ادخال كلمة السر</p>\r\n    <button type=\"submit\" *ngIf=\"!loginPressed\">\r\n      <i class=\"fa fa-check\"></i>\r\n      تسجيل الدخول\r\n    </button>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Tajawal&display=swap\");\r\n\r\nbutton,\r\ninput,\r\nlabel {\r\n  font-family: \"Tajawal\", sans-serif;\r\n}\r\n\r\n:host {\r\n  font-family: \"Tajawal\", sans-serif;\r\n  /* font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; */\r\n  font-size: 14px;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: \"Tajawal\", sans-serif;\r\n  font-weight: bold;\r\n  margin: 8px 0;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\n.spacer {\r\n  flex: 1;\r\n}\r\n\r\n/* Header */\r\n\r\n.toolbar {\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.toolbar img {\r\n  margin: auto 16px;\r\n}\r\n\r\n.toolbar .searchCompanies {\r\n  text-align: right;\r\n  font-family: \"Tajawal\", sans-serif;\r\n  color: white;\r\n}\r\n\r\n.input-field {\r\n  direction: rtl;\r\n  width: 250px;\r\n  padding: 10px;\r\n  border: 1px solid dodgerblue;\r\n  border-radius: 20px;\r\n  outline: none;\r\n}\r\n\r\n.roundedBtn {\r\n  border-radius: 25px;\r\n  opacity: 0.95;\r\n}\r\n\r\n.roundedBtn:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.signInBtn {\r\n  background-color: #dd0031;\r\n  color: white;\r\n}\r\n\r\n/* Side nav */\r\n\r\n/* mat-sidenav-container,\r\nmat-sidenav {\r\n  height: 100vh;\r\n} */\r\n\r\nmat-sidenav {\r\n  width: 250px;\r\n}\r\n\r\n.sideBarElement {\r\n  padding: 10px;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sideBarElement:hover {\r\n  background-color: lightgray;\r\n}\r\n\r\n/* Landing Pictures Section*/\r\n\r\n.header__image {\r\n  height: 300px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.header__text {\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: white;\r\n  width: 100%;\r\n}\r\n\r\n.header__text h1 {\r\n  font-size: 60px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.header__text p {\r\n  font-size: 25px;\r\n}\r\n\r\n/* about style starts here */\r\n\r\n.about {\r\n  margin-top: 20px;\r\n  padding: 10px;\r\n  direction: rtl;\r\n}\r\n\r\n.welcome {\r\n  text-align: center;\r\n}\r\n\r\n.welcome h5 {\r\n  text-transform: capitalize;\r\n  font-size: 20px;\r\n}\r\n\r\n.welcome span {\r\n  color: dodgerblue;\r\n}\r\n\r\n.aboutUs {\r\n  margin: 50px;\r\n  padding-right: 15px;\r\n  border-right: 2px solid dodgerblue;\r\n}\r\n\r\n.aboutUs h5 {\r\n  text-transform: capitalize;\r\n  font-size: 20px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.aboutUs p {\r\n  font-size: 16px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .aboutUs {\r\n    margin: 20px;\r\n    padding-right: 10px;\r\n  }\r\n}\r\n\r\n/* about style ends here */\r\n\r\n/* general info style */\r\n\r\n.cardsContainer {\r\n  width: 90%;\r\n  padding: 20px;\r\n  margin: 20px auto;\r\n}\r\n\r\n.cardsContainer .infoCard {\r\n  text-align: center;\r\n  transition: transform 0.2s;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.14);\r\n  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.14);\r\n  border: none;\r\n  padding: 10px;\r\n  margin: 20px auto;\r\n  width: 80%;\r\n}\r\n\r\n.cardsContainer .infoCard:hover {\r\n  /* IE 9 */\r\n  /* Safari 3-8 */\r\n  transform: scale(1.07);\r\n}\r\n\r\n.cardsContainer .infoCard h2 {\r\n  color: #1e88e5;\r\n  font-size: 45px;\r\n}\r\n\r\n.cardsContainer .infoCard p {\r\n  font-size: 26px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .cardsContainer .infoCard h2 {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .cardsContainer .infoCard p {\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .cardsContainer {\r\n    width: 80%;\r\n    padding: 10px;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .cardsContainer .infoCard h2 {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .cardsContainer .infoCard p {\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n/* Services style */\r\n\r\n.popularQuizzesCardsContainer {\r\n  width: 90%;\r\n  margin: 20px auto;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .popularQuizzesCardsContainer {\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n.popularQuizzesCardsContainer .popularQuizzesCard {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: transform 0.2s;\r\n  border-radius: 5px;\r\n  padding-bottom: 10px;\r\n  text-align: center;\r\n  margin-top: 20px;\r\n  height: 250px;\r\n  width: 80%;\r\n  margin: 20px auto;\r\n}\r\n\r\n.popularQuizzesCardsContainer .popularQuizzesCard:hover {\r\n  /* IE 9 */\r\n  /* Safari 3-8 */\r\n  transform: scale(1.07);\r\n}\r\n\r\n.popularQuizzesCardsContainer .popularQuizzesCard .popularQuizzesCard__header {\r\n  width: 100%;\r\n  height: 150px;\r\n  border-radius: 5px 5px 0 0;\r\n  /* background-position: center; */\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.popularQuizzesCardsContainer .popularQuizzesCard .popularQuizzesCard__circle {\r\n  /*box-shadow: 0 1px 1px 0 rgba(250, 250, 250, 0.1);*/\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 50%;\r\n  line-height: 60px;\r\n  text-align: center;\r\n  background-color: #fffcfb;\r\n  margin: -30px auto 5px auto;\r\n}\r\n\r\n.popularQuizzesCardsContainer .popularQuizzesCard .popularQuizzesCard__avatar {\r\n  vertical-align: middle;\r\n  margin: auto;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.popularQuizzesCardsContainer .popularQuizzesCard p {\r\n  text-align: right;\r\n  margin: 5px 10px;\r\n  font-size: 20px;\r\n}\r\n\r\n.gradientTextColor {\r\n  background: linear-gradient(to left, #56acf2, #56ccf2);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  margin: 10px;\r\n}\r\n\r\n.gradientTextColor:hover,\r\n.gradientTextColor:hover > .gradientTextColor {\r\n  -webkit-text-fill-color: #054e82;\r\n}\r\n\r\n/* contact style starts here */\r\n\r\n.gradientBackground {\r\n  width: 100%;\r\n  color: white !important;\r\n  background: #05b0a7;\r\n  background: linear-gradient(to right, #1976d2, #56ccf2);\r\n}\r\n\r\n.contactBackground {\r\n  height: 3rem;\r\n  width: 3rem;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #1976d2;\r\n  background: linear-gradient(to right, #1976d2, #56ccf2);\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n\r\n.contactBackground i {\r\n  font-size: 1.5rem;\r\n  color: white;\r\n}\r\n\r\n.contactSection {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n@media (max-width: 599px) {\r\n  .contactSection {\r\n    width: 95%;\r\n  }\r\n}\r\n\r\n/* contact style starts here */\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFOztBQUU1RTs7O0VBR0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdLQUFnSztFQUNoSyxlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDOztBQUVBOzs7Ozs7RUFNRSxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQSxXQUFXOztBQUNYO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUEsYUFBYTs7QUFDYjs7O0dBR0c7O0FBRUg7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUEsNEJBQTRCOztBQUM1QjtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSw0QkFBNEI7O0FBQzVCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtBQUNGOztBQUNBLDBCQUEwQjs7QUFFMUIsdUJBQXVCOztBQUV2QjtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixtRUFBbUU7RUFDbkUsMkVBQTJFO0VBQzNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUVFLFNBQVM7RUFFVCxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsbUJBQW1COztBQUNuQjtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFFRSxTQUFTO0VBRVQsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BELFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUVFLHNEQUFzRDtFQUN0RCxxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZ0NBQWdDO0FBQ2xDOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUVuQix1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFFbkIsdURBQXVEO0VBQ3ZELFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0EsOEJBQThCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGFqYXdhbCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVGFqYXdhbFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVGFqYXdhbFwiLCBzYW5zLXNlcmlmO1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjsgKi9cclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICBmb250LWZhbWlseTogXCJUYWphd2FsXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuLnRvb2xiYXIge1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRvb2xiYXIgaW1nIHtcclxuICBtYXJnaW46IGF1dG8gMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgLnNlYXJjaENvbXBhbmllcyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiVGFqYXdhbFwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBkaXJlY3Rpb246IHJ0bDtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBkb2RnZXJibHVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnJvdW5kZWRCdG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgb3BhY2l0eTogMC45NTtcclxufVxyXG5cclxuLnJvdW5kZWRCdG46aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zaWduSW5CdG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDAwMzE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBTaWRlIG5hdiAqL1xyXG4vKiBtYXQtc2lkZW5hdi1jb250YWluZXIsXHJcbm1hdC1zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59ICovXHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uc2lkZUJhckVsZW1lbnQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNpZGVCYXJFbGVtZW50OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi8qIExhbmRpbmcgUGljdHVyZXMgU2VjdGlvbiovXHJcbi5oZWFkZXJfX2ltYWdlIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhZGVyX190ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3RleHQgaDEge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmhlYWRlcl9fdGV4dCBwIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi8qIGFib3V0IHN0eWxlIHN0YXJ0cyBoZXJlICovXHJcbi5hYm91dCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcblxyXG4ud2VsY29tZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ud2VsY29tZSBoNSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ud2VsY29tZSBzcGFuIHtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxufVxyXG5cclxuLmFib3V0VXMge1xyXG4gIG1hcmdpbjogNTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbn1cclxuXHJcbi5hYm91dFVzIGg1IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmFib3V0VXMgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuYWJvdXRVcyB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4vKiBhYm91dCBzdHlsZSBlbmRzIGhlcmUgKi9cclxuXHJcbi8qIGdlbmVyYWwgaW5mbyBzdHlsZSAqL1xyXG5cclxuLmNhcmRzQ29udGFpbmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkc0NvbnRhaW5lciAuaW5mb0NhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uY2FyZHNDb250YWluZXIgLmluZm9DYXJkOmhvdmVyIHtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcclxuICAvKiBJRSA5ICovXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xyXG4gIC8qIFNhZmFyaSAzLTggKi9cclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xyXG59XHJcblxyXG4uY2FyZHNDb250YWluZXIgLmluZm9DYXJkIGgyIHtcclxuICBjb2xvcjogIzFlODhlNTtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbn1cclxuXHJcbi5jYXJkc0NvbnRhaW5lciAuaW5mb0NhcmQgcCB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmNhcmRzQ29udGFpbmVyIC5pbmZvQ2FyZCBoMiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZHNDb250YWluZXIgLmluZm9DYXJkIHAge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5jYXJkc0NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZHNDb250YWluZXIgLmluZm9DYXJkIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkc0NvbnRhaW5lciAuaW5mb0NhcmQgcCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTZXJ2aWNlcyBzdHlsZSAqL1xyXG4ucG9wdWxhclF1aXp6ZXNDYXJkc0NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLnBvcHVsYXJRdWl6emVzQ2FyZHNDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5wb3B1bGFyUXVpenplc0NhcmRzQ29udGFpbmVyIC5wb3B1bGFyUXVpenplc0NhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG4ucG9wdWxhclF1aXp6ZXNDYXJkc0NvbnRhaW5lciAucG9wdWxhclF1aXp6ZXNDYXJkOmhvdmVyIHtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcclxuICAvKiBJRSA5ICovXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xyXG4gIC8qIFNhZmFyaSAzLTggKi9cclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xyXG59XHJcblxyXG4ucG9wdWxhclF1aXp6ZXNDYXJkc0NvbnRhaW5lciAucG9wdWxhclF1aXp6ZXNDYXJkIC5wb3B1bGFyUXVpenplc0NhcmRfX2hlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucG9wdWxhclF1aXp6ZXNDYXJkc0NvbnRhaW5lciAucG9wdWxhclF1aXp6ZXNDYXJkIC5wb3B1bGFyUXVpenplc0NhcmRfX2NpcmNsZSB7XHJcbiAgLypib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMSk7Ki9cclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmY2ZiO1xyXG4gIG1hcmdpbjogLTMwcHggYXV0byA1cHggYXV0bztcclxufVxyXG5cclxuLnBvcHVsYXJRdWl6emVzQ2FyZHNDb250YWluZXIgLnBvcHVsYXJRdWl6emVzQ2FyZCAucG9wdWxhclF1aXp6ZXNDYXJkX19hdmF0YXIge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnBvcHVsYXJRdWl6emVzQ2FyZHNDb250YWluZXIgLnBvcHVsYXJRdWl6emVzQ2FyZCBwIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW46IDVweCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmdyYWRpZW50VGV4dENvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNTZhY2YyLCAjNTZjY2YyKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzU2YWNmMiwgIzU2Y2NmMik7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5ncmFkaWVudFRleHRDb2xvcjpob3ZlcixcclxuLmdyYWRpZW50VGV4dENvbG9yOmhvdmVyID4gLmdyYWRpZW50VGV4dENvbG9yIHtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIzA1NGU4MjtcclxufVxyXG5cclxuLyogY29udGFjdCBzdHlsZSBzdGFydHMgaGVyZSAqL1xyXG4uZ3JhZGllbnRCYWNrZ3JvdW5kIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjMDViMGE3O1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTk3NmQyLCAjNTZjY2YyKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxOTc2ZDIsICM1NmNjZjIpO1xyXG59XHJcblxyXG4uY29udGFjdEJhY2tncm91bmQge1xyXG4gIGhlaWdodDogM3JlbTtcclxuICB3aWR0aDogM3JlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMxOTc2ZDI7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxOTc2ZDIsICM1NmNjZjIpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE5NzZkMiwgIzU2Y2NmMik7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFjdEJhY2tncm91bmQgaSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29udGFjdFNlY3Rpb24ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAuY29udGFjdFNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcbn1cclxuLyogY29udGFjdCBzdHlsZSBzdGFydHMgaGVyZSAqL1xyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _signIn_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signIn/sign-in.component */
    "./src/app/signIn/sign-in.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(breakpointObserver, dialog) {
        _classCallCheck(this, AppComponent);

        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.search = '';
        this.title = 'شبكني';
        this.showSearch = false;
        this.showSideMenu = false;
        this.photoIndex = 0;
        this.photos = ['../assets/header-background-puzzle.webp', '../assets/header-background-blue.png'];
        this.photosIndexInterval = null;
      }

      _createClass(AppComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.photosIndexInterval);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.photosIndexInterval = setInterval(function () {
            _this.photoIndex++;
          }, 20000); // this.showSideMenu = this.breakpointObserver.isMatched('(max-width: 960px)');

          var layoutChanges = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XLarge]).subscribe(function (state) {
            _this.updateView(state);
          });
        }
      }, {
        key: "updateView",
        value: function updateView(state) {
          if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XSmall]) {
            this.showSideMenu = true;
            this.breakpoint = 'xs';
            this.aboutContainerColumns = 1;
            this.aboutLogoColumns = 0;
            this.aboutTextColumns = 1;
            this.aboutRowHeight = '150px';
          }

          if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Small]) {
            this.showSideMenu = true;
            this.breakpoint = 'sm';
            this.aboutContainerColumns = 5;
            this.aboutLogoColumns = 1;
            this.aboutTextColumns = 3;
            this.aboutRowHeight = '150px';
          }

          if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Medium]) {
            this.showSideMenu = false;
            this.breakpoint = 'm';
            this.aboutContainerColumns = 5;
            this.aboutLogoColumns = 1;
            this.aboutTextColumns = 3;
            this.aboutRowHeight = '100px';
          }

          if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Large]) {
            this.showSideMenu = false;
            this.breakpoint = 'l';
            this.aboutContainerColumns = 5;
            this.aboutLogoColumns = 1;
            this.aboutTextColumns = 3;
            this.aboutRowHeight = '100px';
          }

          if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XLarge]) {
            this.showSideMenu = false;
            this.breakpoint = 'xl';
            this.aboutContainerColumns = 4;
            this.aboutLogoColumns = 1;
            this.aboutTextColumns = 2;
            this.aboutRowHeight = '100px';
          }
        }
      }, {
        key: "openSignInDialog",
        value: function openSignInDialog() {
          var dialogRef = this.dialog.open(_signIn_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["DialogSignInComponent"], {
            width: '350px'
          }); // dialogRef.afterClosed().subscribe(result => {
          //   console.log('The dialog was closed');
          // });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('enterAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        width: '0px'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        width: '250px'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        width: '250px'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        width: '0px'
      }))])])],
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _signIn_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signIn/sign-in.component */
    "./src/app/signIn/sign-in.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _signIn_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["DialogSignInComponent"]],
      entryComponents: [_signIn_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["DialogSignInComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var MaterialComponents = [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [MaterialComponents],
      exports: [MaterialComponents]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/signIn/sign-in.component.css":
  /*!**********************************************!*\
    !*** ./src/app/signIn/sign-in.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignInSignInComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Center the image and position the close button */\r\nbutton,\r\ninput,\r\nlabel,\r\nh1 {\r\n  font-family: \"Tajawal\", sans-serif;\r\n}\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 0;\r\n  position: relative;\r\n}\r\n/* The Close Button (x) */\r\n.close {\r\n  position: absolute;\r\n  right: -10px;\r\n  top: -30px;\r\n  color: #000;\r\n  font-size: 35px;\r\n  font-weight: bold;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\ninput.ng-invalid.ng-touched {\r\n  border: 1px solid red !important;\r\n}\r\ninput.ng-touched.ng-dirty.ng-valid{\r\n  border: 1px solid #ccc !important;\r\n}\r\n/* Full-width input fields */\r\ninput[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"password\"] {\r\n  width: 100%;\r\n  padding: 8px 15px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n  border-radius: 20px;\r\n}\r\ninput[type=\"number\"] {\r\n  width: 100%;\r\n  padding: 8px 15px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n  border-radius: 20px;\r\n}\r\ninput[type=\"number\"]::-webkit-inner-spin-button,\r\ninput[type=\"number\"]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n/* Set a style for all buttons */\r\nbutton:not(.messageDialog) {\r\n  background-color: #4b9ac7;\r\n  border-radius: 20px;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n.modal button:hover {\r\n  opacity: 0.8;\r\n}\r\n/* Extra styles for the cancel button */\r\n.cancelbtn:not(.messageDialog) {\r\n  border-radius: 20px;\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336 !important;\r\n}\r\n.container {\r\n  padding: 16px;\r\n}\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\ninput.psw {\r\n  -webkit-text-security: disc;\r\n}\r\ninput, button {\r\n  outline: none;\r\n}\r\n/* Add Zoom Animation */\r\n/*\r\n.animate {\r\n  -webkit-animation: animatezoom 0.6s;\r\n  animation: animatezoom 0.6s;\r\n}\r\n\r\n@-webkit-keyframes animatezoom {\r\n  from {\r\n    -webkit-transform: scale(0);\r\n  }\r\n  to {\r\n    -webkit-transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes animatezoom {\r\n  from {\r\n    transform: scale(0);\r\n  }\r\n  to {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes animatezoomout {\r\n  from {\r\n    -webkit-transform: scale(1);\r\n  }\r\n  to {\r\n    -webkit-transform: scale(0);\r\n  }\r\n}\r\n\r\n@keyframes animatezoomout {\r\n  from {\r\n    transform: scale(1);\r\n  }\r\n  to {\r\n    transform: scale(0);\r\n  }\r\n}\r\n\r\n.zoomout {\r\n  -webkit-animation: animatezoomout 0.6s;\r\n  animation: animatezoomout 0.6s;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbkluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtREFBbUQ7QUFDbkQ7Ozs7RUFJRSxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUdBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQSw0QkFBNEI7QUFDNUI7OztFQUdFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYO0FBRUEsZ0NBQWdDO0FBQy9CO0VBQ0MseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUEsdUJBQXVCO0FBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2Q0ciLCJmaWxlIjoic3JjL2FwcC9zaWduSW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2VudGVyIHRoZSBpbWFnZSBhbmQgcG9zaXRpb24gdGhlIGNsb3NlIGJ1dHRvbiAqL1xyXG5idXR0b24sXHJcbmlucHV0LFxyXG5sYWJlbCxcclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRhamF3YWxcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmltZ2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTBweDtcclxuICB0b3A6IC0zMHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQubmctdG91Y2hlZC5uZy1kaXJ0eS5uZy12YWxpZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbiBidXR0b246bm90KC5tZXNzYWdlRGlhbG9nKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiOWFjNztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubW9kYWwgYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cclxuLmNhbmNlbGJ0bjpub3QoLm1lc3NhZ2VEaWFsb2cpIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbnNwYW4ucHN3IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbmlucHV0LnBzdyB7XHJcbiAgLXdlYmtpdC10ZXh0LXNlY3VyaXR5OiBkaXNjO1xyXG59XHJcblxyXG5pbnB1dCwgYnV0dG9uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBBZGQgWm9vbSBBbmltYXRpb24gKi9cclxuLypcclxuLmFuaW1hdGUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlem9vbSAwLjZzO1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZXpvb20gMC42cztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV6b29tIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlem9vbSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV6b29tb3V0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlem9vbW91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxufVxyXG5cclxuLnpvb21vdXQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlem9vbW91dCAwLjZzO1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZXpvb21vdXQgMC42cztcclxufSAqL1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/signIn/sign-in.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/signIn/sign-in.component.ts ***!
    \*********************************************/

  /*! exports provided: DialogSignInComponent */

  /***/
  function srcAppSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogSignInComponent", function () {
      return DialogSignInComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var DialogSignInComponent = /*#__PURE__*/function () {
      function DialogSignInComponent(dialogRef) {
        _classCallCheck(this, DialogSignInComponent);

        this.dialogRef = dialogRef;
        this.loginPressed = false;
      }

      _createClass(DialogSignInComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "login",
        value: function login(f) {
          console.log(f);

          if (f.valid) {
            var loginObject = f.value;
            console.log(loginObject);
          }
        }
      }]);

      return DialogSignInComponent;
    }();

    DialogSignInComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    DialogSignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signIn/sign-in.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in.component.css */
      "./src/app/signIn/sign-in.component.css"))["default"]]
    })], DialogSignInComponent);

    var LogIn = function LogIn() {
      _classCallCheck(this, LogIn);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Shabikny\shabikny\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map