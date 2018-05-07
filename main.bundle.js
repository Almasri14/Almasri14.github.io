webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store_component__ = __webpack_require__("../../../../../src/app/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_block_service__ = __webpack_require__("../../../../../src/app/login/block.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_list_users_list_component__ = __webpack_require__("../../../../../src/app/users-list/users-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', redirectTo: '/store', pathMatch: 'full' },
    { path: 'store', component: __WEBPACK_IMPORTED_MODULE_1__store_store_component__["a" /* StoreComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_2__cart_cart_component__["a" /* CartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__login_block_service__["a" /* BlockService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_7__users_list_users_list_component__["a" /* UsersListComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"position: absolute;\n     z-index: 0; width: 110%; height: 110%;opacity: 0.4\" *ngIf=\"!loginService.IsAdmin()\">\n  <img src=\"https://blog.caranddriver.com/wp-content/uploads/2009/07/Cinque-Roadster-02-CUT1.jpg\"\n       style=\"width: 110%; height: 110%;\">\n</div>\n<div style=\"position: absolute;\n     z-index: 0; width: 110%; height: 110%;opacity: 0.5\" *ngIf=\"loginService.IsAdmin()\">\n  <img src=\"http://www.f1wax.com/images/f1waxpic330.jpg?305\"\n       style=\"width: 100%; height: 200%;\">\n</div>\n<app-header></app-header>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(loginService) {
        this.loginService = loginService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zone_js__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_zone_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reflect_metadata__ = __webpack_require__("../../../../reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_store_component__ = __webpack_require__("../../../../../src/app/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_store_list_store_list_component__ = __webpack_require__("../../../../../src/app/store/store-list/store-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_store_list_store_item_store_item_component__ = __webpack_require__("../../../../../src/app/store/store-list/store-item/store-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_store_service__ = __webpack_require__("../../../../../src/app/store/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_store_detail_store_detail_component__ = __webpack_require__("../../../../../src/app/store/store-detail/store-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_store_list_filter_pipe__ = __webpack_require__("../../../../../src/app/store/store-list/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cart_cart_service__ = __webpack_require__("../../../../../src/app/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_block_service__ = __webpack_require__("../../../../../src/app/login/block.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__servers_service__ = __webpack_require__("../../../../../src/app/servers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__homeServer_service__ = __webpack_require__("../../../../../src/app/homeServer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__cart_cart_component_cart_component_component__ = __webpack_require__("../../../../../src/app/cart/cart-component/cart-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__store_store_list_store_add_store_add_component__ = __webpack_require__("../../../../../src/app/store/store-list/store-add/store-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__cart_pipe__ = __webpack_require__("../../../../../src/app/cart.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__store_store_admin_store_admin_component__ = __webpack_require__("../../../../../src/app/store/store-admin/store-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__store_store_admin_store_admin_item_store_admin_item_component__ = __webpack_require__("../../../../../src/app/store/store-admin/store-admin-item/store-admin-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__users_list_users_list_component__ = __webpack_require__("../../../../../src/app/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__users_list_users_store_user_user_component__ = __webpack_require__("../../../../../src/app/users-list/users-store/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__users_list_user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/users-list/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__users_list_users_store_users_store_component__ = __webpack_require__("../../../../../src/app/users-list/users-store/users-store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__cart_buy_component_buy_component_component__ = __webpack_require__("../../../../../src/app/cart/buy-component/buy-component.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__store_store_component__["a" /* StoreComponent */],
            __WEBPACK_IMPORTED_MODULE_8__store_store_list_store_list_component__["a" /* StoreListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__store_store_list_store_item_store_item_component__["a" /* StoreItemComponent */],
            __WEBPACK_IMPORTED_MODULE_11__store_store_detail_store_detail_component__["a" /* StoreDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_13__store_store_list_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_19__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_23__cart_cart_component_cart_component_component__["a" /* CartComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_24__store_store_list_store_add_store_add_component__["a" /* StoreAddComponent */],
            __WEBPACK_IMPORTED_MODULE_25__cart_pipe__["a" /* CartPipe */],
            __WEBPACK_IMPORTED_MODULE_26__store_store_admin_store_admin_component__["a" /* StoreAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_27__store_store_admin_store_admin_item_store_admin_item_component__["a" /* StoreAdminItemComponent */],
            __WEBPACK_IMPORTED_MODULE_28__users_list_users_list_component__["a" /* UsersListComponent */],
            __WEBPACK_IMPORTED_MODULE_29__users_list_users_store_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_30__users_list_user_edit_user_edit_component__["a" /* UserEditComponent */],
            __WEBPACK_IMPORTED_MODULE_31__users_list_users_store_users_store_component__["a" /* UsersStoreComponent */],
            __WEBPACK_IMPORTED_MODULE_32__cart_buy_component_buy_component_component__["a" /* BuyComponentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__store_store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_15__cart_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_17__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_18__login_block_service__["a" /* BlockService */], __WEBPACK_IMPORTED_MODULE_20__servers_service__["a" /* ServersService */], __WEBPACK_IMPORTED_MODULE_22__homeServer_service__["a" /* HomeServerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cart.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CartPipe = (function () {
    function CartPipe() {
    }
    CartPipe.prototype.transform = function (value, args) {
        return null;
    };
    return CartPipe;
}());
CartPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'cart'
    })
], CartPipe);

//# sourceMappingURL=cart.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/cart/buy-component/buy-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/buy-component/buy-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"position: fixed;\n     z-index: 1; width: 200%; height: 200%;background-color: gray;opacity: 0.1\" (click)=\"Cancel()\">\n</div>\n<div class=\"col-md-10\" style=\"position: fixed; margin: 0% 35%;\n z-index: 2; width: 250px; height: 370px; border: solid 2px red ; background-color: lightgray\">\n  <form (ngSubmit)=\"OnBuy(f)\" #f=\"ngForm\">\n    <div class=\"col-xs-10 form-group\">\n      <br>\n      <label>Email:</label>\n      <input type=\"email\" id=\"email\" name=\"email\" ngModel=\"\" required email #email=\"ngModel\">\n      <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter a valid email!!</span>\n      <label>Password:</label>\n      <input type=\"password\" id=\"password\" name=\"password\" ngModel required>\n      <hr>\n      <label>Visa Card:</label>\n      <input type=\"visa\" id=\"visa\" name=\"visa\" ngModel required>\n      <br>\n      <label>Address:</label>\n      <input type=\"Address\" id=\"Address\" name=\"Address\" ngModel required>\n      <hr>\n      <button type=\"submit\" class=\"btn btn-success dropdown-toggle\" style=\"cursor: pointer\" [disabled]=\"f.invalid\"\n         >Buy</button>\n      <button type=\"submit\" class=\"btn btn-success dropdown-toggle\" style=\"cursor: pointer; float: right\" (click)=\"Cancel()\"\n      >Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cart/buy-component/buy-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../src/app/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servers_service__ = __webpack_require__("../../../../../src/app/servers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuyComponentComponent = (function () {
    function BuyComponentComponent(cartService, serverService, loginServer) {
        this.cartService = cartService;
        this.serverService = serverService;
        this.loginServer = loginServer;
    }
    BuyComponentComponent.prototype.ngOnInit = function () {
    };
    BuyComponentComponent.prototype.OnBuy = function (form) {
        if (this.cartService.getItemsToBuy() !== null) {
            for (var i = 0; i < this.cartService.getItemsToBuy().length; i++) {
                if (this.cartService.getItemsToBuy()[i].owner === this.loginServer.CurrentUser) {
                    console.log('You bought the car');
                    this.cartService.ordersFromDataBase.push(this.cartService.getItemsToBuy()[i]);
                    this.serverService.OrderItems(this.cartService.getOrdersFromDataBase()).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
                    console.log(this.cartService.getOrdersFromDataBase());
                }
            }
            this.Cancel();
        }
    };
    BuyComponentComponent.prototype.Cancel = function () {
        if (this.cartService.buyNow = 1) {
            this.cartService.initializeItemsToBuy();
        }
        this.cartService.buyAll = 0;
        this.cartService.buyNow = 0;
    };
    return BuyComponentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], BuyComponentComponent.prototype, "car", void 0);
BuyComponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-buy-component',
        template: __webpack_require__("../../../../../src/app/cart/buy-component/buy-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cart/buy-component/buy-component.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__servers_service__["a" /* ServersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servers_service__["a" /* ServersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], BuyComponentComponent);

var _a, _b, _c;
//# sourceMappingURL=buy-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/cart/cart-component/cart-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div .ng-touched {\nborder: 1px solid red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart-component/cart-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=car style=\"display: inline\">\n  <label><input type=\"checkbox\" *ngIf=\"!cartService.onCheckAll\" [(value)]=checkBoxValue (click)=\"OnCheck()\"/></label>\n  <div routerLink=\"/cart\" class=\"list-group-item clearfix\" style=\"width: 100%;\" (click)=\"onSelected()\">\n    <div class=\"pull-left\">\n      <h4 class=\"list-group-item-heading\">{{car.name}}</h4>\n      <p class=\"list-group-item-heading\">{{car.description}}</p>\n      <p class=\"list-group-item-text\">{{car.price}}</p>\n     <p class=\"list-group-item-text\">({{car.amount}})</p>\n     <!--<img src=\"{{car.imagePath[0]}}\" alt=\"{{car.name}}\" class=\"img-responsive\" style=\"max-height: 50px;\">-->\n   </div>\n   <span class=\"pull-right\">\n         <button type=\"button\" class=\"btn btn-primary\" style=\"float: right ; margin-bottom: 5px; margin-right: 5px\" (click)=\"OnDeleteAll()\">X</button>\n     <br>\n     <br>\n     <br>\n          <button type=\"button\" class=\"btn btn-primary\" style=\"float: right ; margin-bottom: 5px; margin-right: 5px\" (click)=\"OnBuy()\">Buy</button>\n   </span>\n  </div>\n  <hr>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cart/cart-component/cart-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store_model__ = __webpack_require__("../../../../../src/app/store/store.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_service__ = __webpack_require__("../../../../../src/app/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servers_service__ = __webpack_require__("../../../../../src/app/servers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponentComponent = (function () {
    function CartComponentComponent(cartService, serversService) {
        this.cartService = cartService;
        this.serversService = serversService;
        this.spliced = 0;
    }
    CartComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.cartService.getItems();
        this.sub = this.cartService.cartChanged.subscribe(function (cars) {
            _this.items = cars;
        });
    };
    CartComponentComponent.prototype.OnCheck = function () {
        this.cartService.onCheck = 1;
        this.cartService.addItemsToBuy(this.car);
    };
    CartComponentComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CartComponentComponent.prototype.onSelected = function () {
        this.cartService.carsSelected.next(this.car);
    };
    CartComponentComponent.prototype.OnBuy = function () {
        this.cartService.buyNow = 1;
        this.cartService.addNowItemsToBuy(this.car);
    };
    CartComponentComponent.prototype.OnDeleteAll = function () {
        if (this.car !== null) {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items !== null) {
                    if (this.items[i].name === this.car.name) {
                        if (i !== (this.items.length) - 1) {
                            for (var j = i; j < this.items.length; j++) {
                                this.items[j] = this.items[j + 1];
                            }
                        }
                        else {
                            this.items[i].amount = 1;
                            this.items.splice(i, 1);
                            this.spliced = 1;
                        }
                        break;
                    }
                }
            }
            if (!this.spliced) {
                this.items.splice((this.items.length) - 1, 1);
            }
            if (this.items !== null) {
                this.serversService.storeServers(this.items).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
            }
            this.cartService.cartChanged.next(this.items);
            console.log(this.items);
        }
    };
    return CartComponentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_store_model__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_store_model__["a" /* Store */]) === "function" && _a || Object)
], CartComponentComponent.prototype, "car", void 0);
CartComponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cart-component',
        template: __webpack_require__("../../../../../src/app/cart/cart-component/cart-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cart/cart-component/cart-component.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__servers_service__["a" /* ServersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__servers_service__["a" /* ServersService */]) === "function" && _c || Object])
], CartComponentComponent);

var _a, _b, _c;
//# sourceMappingURL=cart-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\" *ngIf=\"IsEmpty()\">\n  <h1>{{appName | async}}</h1>\n  <br>\n  <h3>The cart is empty</h3>\n</div>\n<div class=\"col-xs-12\" *ngIf=\"!IsEmpty()\">\n    <button type=\"button\" class=\"btn btn-danger\" style=\"float: right ; margin-bottom: 5px\" (click)=\"OnDelete()\">Delete one peice</button>\n    <!--<button type=\"button\" class=\"btn btn-danger\" style=\"float: right ; margin-bottom: 5px; margin-right: 5px\" (click)=\"OnDeleteAll()\">Delete</button>-->\n    <button type=\"button\" class=\"btn btn-danger\" style=\"float: right ; margin-bottom: 5px ;margin-right: 5px\"  (click)=\"OnDeleteAllItems()\">Delete All</button>\n</div>\n<br>\n<div class=\"col-xs-12\" *ngIf=\"!IsEmpty()\">\n  <label><input type=\"checkbox\" *ngIf=\"!cartService.onCheck\" [(value)]=checkBox (click)=\"OnCheckAll()\"/></label>\n  <br>\n  <br>\n</div>\n<div *ngFor=\"let item  of items\">\n  <div *ngIf=\"item.owner === loginService.getEmail()\">\n    <app-cart-component [car]=item class=\"col-xs-12\"></app-cart-component>\n  </div>\n</div>\n<div *ngIf=\"cartService.buyNow\">\n<app-buy-component [car]=cartService.getItemsToBuy()></app-buy-component>\n</div>\n<div class=\"col-xs-12\" *ngIf=\"checkBox\">\n  <button type=\"button\" class=\"btn btn-success\" style=\"float: right ; margin-bottom: 5px; margin-right: 5px\" (click)=\"OnBuyAll()\">BuyAll</button>\n</div>\n<div *ngIf=\"!checkBox\">\n  <div class=\"col-xs-12\" *ngIf=\"cartService.checkBoxValue\">\n    <button type=\"button\" class=\"btn btn-success\" style=\"float: right ; margin-bottom: 5px; margin-right: 5px\" (click)=\"OnBuyAll()\">BuyAll</button>\n  </div>\n</div>\n<div *ngIf=\"cartService.buyAll\">\n  <app-buy-component [car]=cartService.getItemsToBuy()></app-buy-component>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../src/app/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servers_service__ = __webpack_require__("../../../../../src/app/servers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = (function () {
    function CartComponent(cartService, serversService, loginService) {
        this.cartService = cartService;
        this.serversService = serversService;
        this.loginService = loginService;
        this.appName = this.serversService.getAppName();
        this.selectedCar = null;
        this.spliced = 0;
        this.moreThanOne = 0;
        this.first = 0;
        this.buyAll = 0;
        this.checkBox = false;
        this.itemsToBuy = this.cartService.getItemsToBuy();
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.cartService.getItems();
        console.log(this.items);
        this.subscription = this.cartService.carsSelected.subscribe(function (car) {
            _this.selectedCar = car;
            console.log(car);
        });
        this.sub = this.cartService.cartChanged.subscribe(function (cars) {
            _this.items = cars;
        });
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.sub.unsubscribe();
    };
    CartComponent.prototype.OnCheckAll = function () {
        this.cartService.onCheckAll = 1;
        for (var i = 0; i < this.items.length; i++) {
            this.cartService.addItemsToBuy(this.items[i]);
        }
    };
    CartComponent.prototype.OnBuyAll = function () {
        this.cartService.buyAll = 1;
    };
    CartComponent.prototype.OnDelete = function () {
        if (this.selectedCar !== null) {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items !== null) {
                    if (this.items[i].name === this.selectedCar.name) {
                        if (this.items[i].amount === 1) {
                            if (i !== (this.items.length) - 1) {
                                for (var j = i; j < this.items.length; j++) {
                                    this.items[j] = this.items[j + 1];
                                }
                            }
                            else {
                                this.items[i].amount = 1;
                                this.items.splice(i, 1);
                                this.spliced = 1;
                            }
                        }
                        else {
                            this.items[i].amount--;
                            this.moreThanOne = 1;
                        }
                        break;
                    }
                }
            }
            if (!this.spliced && !this.moreThanOne) {
                this.items.splice((this.items.length) - 1, 1);
                this.moreThanOne = 0;
            }
            if (this.items !== null) {
                this.serversService.storeServers(this.items).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
            }
            this.cartService.cartChanged.next(this.items);
            console.log(this.items);
        }
        else {
            alert('No item is selected, please select an item');
        }
    };
    CartComponent.prototype.OnDeleteAll = function () {
        if (this.selectedCar !== null) {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items !== null) {
                    if (this.items[i].name === this.selectedCar.name) {
                        if (i !== (this.items.length) - 1) {
                            for (var j = i; j < this.items.length; j++) {
                                this.items[j] = this.items[j + 1];
                            }
                        }
                        else {
                            this.items[i].amount = 1;
                            this.items.splice(i, 1);
                            this.spliced = 1;
                        }
                        break;
                    }
                }
            }
            if (!this.spliced) {
                this.items.splice((this.items.length) - 1, 1);
            }
            if (this.items !== null) {
                this.serversService.storeServers(this.items).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
            }
            this.cartService.cartChanged.next(this.items);
            console.log(this.items);
        }
        else {
            alert('No item is selected, please select an item');
        }
    };
    CartComponent.prototype.OnDeleteAllItems = function () {
        if (!this.first) {
            var length = this.items.length;
            this.first = 1;
        }
        var j = 0;
        for (var i = 0; i < length;) {
            if (this.loginService.CurrentUser === this.items[i].owner) {
                this.items.splice(this.items.length - 1, 1);
            }
            if (j === length) {
                break;
            }
        }
        if (this.items !== null) {
            this.serversService.storeServers(this.items).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        }
        console.log(this.items);
        this.cartService.cartChanged.next(this.items);
    };
    CartComponent.prototype.IsEmpty = function () {
        if (this.items) {
            var count = 0;
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].owner === this.loginService.CurrentUser) {
                    count++;
                }
            }
            if (count === 0) {
                return true;
            }
            return false;
        }
        return true;
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cart',
        template: __webpack_require__("../../../../../src/app/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__servers_service__["a" /* ServersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servers_service__["a" /* ServersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], CartComponent);

var _a, _b, _c;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/cart/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servers_service__ = __webpack_require__("../../../../../src/app/servers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = (function () {
    function CartService(serverService, loginServer) {
        var _this = this;
        this.serverService = serverService;
        this.loginServer = loginServer;
        this.carsSelected = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.cartChanged = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.ordersChanged = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.items = [];
        this.itemsToBuy = [];
        this.buyNow = 0;
        this.buyAll = 0;
        this.i = 0;
        this.exist = 0;
        this.ex = 0;
        this.checkBoxValue = false;
        this.ordersFromDataBase = [];
        this.onCheckAll = 0;
        this.onCheck = 0;
        this.serverService.getServers().subscribe(function (items) {
            console.log(items);
            _this.items = items;
            if (_this.items !== null) {
                _this.cartChanged.next(_this.items);
            }
        }, function (error) { return console.log(error); });
        this.items = this.getItems();
        this.serverService.getOrders().subscribe(function (items) {
            console.log(items);
            if (items !== null) {
                _this.ordersFromDataBase = items;
            }
            if (_this.ordersFromDataBase !== null) {
                _this.ordersChanged.next(_this.itemsToBuy);
            }
        }, function (error) { return console.log(error); });
        this.itemsToBuy = this.getItemsToBuy();
    }
    CartService.prototype.addItem = function (item) {
        item.owner = this.loginServer.getEmail();
        console.log(item.owner);
        if (this.items === null) {
            this.items = [];
            this.items.push(item);
            this.serverService.storeServers(this.getItems()).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
            this.cartChanged.next(this.items);
        }
        else {
            for (this.i = 0; this.i < this.items.length; this.i++) {
                if (this.items[this.i].name === item.name) {
                    console.log(this.items[this.i].owner);
                    console.log(item.owner);
                    if (this.items[this.i].owner === item.owner) {
                        this.items[this.i].amount++;
                        this.serverService.storeServers(this.getItems()).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
                        this.cartChanged.next(this.items);
                        this.exist = 1;
                        break;
                    }
                }
            }
            if (!this.exist) {
                this.items.push(item);
                this.serverService.storeServers(this.getItems()).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
                this.cartChanged.next(this.items);
            }
        }
        this.exist = 0;
        console.log('Items are: ');
        console.log(this.items);
    };
    CartService.prototype.getItems = function () {
        if (this.items !== null) {
            return this.items;
        }
    };
    CartService.prototype.getOrdersFromDataBase = function () {
        if (this.ordersFromDataBase !== null) {
            return this.ordersFromDataBase;
        }
        else {
            return [];
        }
    };
    CartService.prototype.getItemsToBuy = function () {
        if (this.itemsToBuy !== null) {
            return this.itemsToBuy;
        }
        else {
            return [];
        }
    };
    CartService.prototype.initializeItemsToBuy = function () {
        this.itemsToBuy = [];
    };
    CartService.prototype.addItemsToBuy = function (item) {
        console.log(this.itemsToBuy);
        if (this.itemsToBuy === null) {
            this.itemsToBuy = [];
        }
        for (this.i = 0; this.i < this.itemsToBuy.length; this.i++) {
            if (this.itemsToBuy[this.i].name === item.name && this.itemsToBuy[this.i].owner === item.owner) {
                console.log('Exist');
                this.ex = 1;
                this.onCheckAll = 0;
            }
        }
        if (!this.ex) {
            console.log('Dose not Exist');
            this.itemsToBuy.push(item);
            this.checkBoxValue = true;
        }
        else {
            this.deleteItemsToBuy(item);
        }
        console.log(this.itemsToBuy);
        console.log(this.itemsToBuy.length);
        if (this.itemsToBuy.length === 0) {
            console.log('Empty');
            this.checkBoxValue = false;
            this.onCheck = 0;
        }
        this.ex = 0;
    };
    CartService.prototype.addNowItemsToBuy = function (item) {
        if (this.itemsToBuy === null) {
            this.itemsToBuy = [];
        }
        console.log(this.itemsToBuy);
        this.itemsToBuy.push(item);
        console.log(this.itemsToBuy);
    };
    CartService.prototype.deleteItemsToBuy = function (car) {
        if (car !== null) {
            for (var i = 0; i < this.itemsToBuy.length; i++) {
                if (this.itemsToBuy[i].name === car.name && this.itemsToBuy[i].owner === car.owner) {
                    this.itemsToBuy.splice(i, 1);
                    break;
                }
            }
        }
        console.log(this.itemsToBuy);
    };
    return CartService;
}());
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servers_service__["a" /* ServersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servers_service__["a" /* ServersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], CartService);

var _a, _b;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" style=\"background-color: lightgray\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a routerLink=\"\" class=\"navbar-brand\">Java Store</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/store\">Store</a></li>\n        <template [ngIf]=\"loginService.IsSignedIn()\">\n          <template [ngIf]=\"!loginService.IsAdmin()\">\n            <li><a routerLink=\"/cart\">Cart</a></li>\n          </template>\n        </template>\n        <template [ngIf]=\"!loginService.IsSignedIn()\">\n          <li><a routerLink=\"/login\">LogIn</a></li>\n        </template>\n        <template [ngIf]=\"loginService.IsAdmin()\">\n          <li><a routerLink=\"/users\">Users</a></li>\n        </template>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"\" style=\"cursor: pointer\" (click)=\"onLogOut()\" *ngIf=\"loginService.IsSignedIn()\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogOut = function () {
        this.loginService.logOut();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/homeServer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeServerService = (function () {
    function HomeServerService(http) {
        this.http = http;
    }
    HomeServerService.prototype.storeUsers = function (servers) {
        return this.http.put('https://store-14.firebaseio.com/users.json', servers);
    };
    HomeServerService.prototype.storeServers = function (servers) {
        return this.http.put('https://store-14.firebaseio.com/home.json', servers);
    };
    HomeServerService.prototype.getServers = function () {
        return this.http.get('https://store-14.firebaseio.com/home.json')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    HomeServerService.prototype.getUsers = function () {
        return this.http.get('https://store-14.firebaseio.com/users.json')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return HomeServerService;
}());
HomeServerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HomeServerService);

var _a;
//# sourceMappingURL=homeServer.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/block.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockService = (function () {
    function BlockService(loginService) {
        this.loginService = loginService;
    }
    BlockService.prototype.canActivate = function (route, state) {
        return this.loginService.IsSignedIn();
    };
    return BlockService;
}());
BlockService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object])
], BlockService);

var _a;
//# sourceMappingURL=block.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched {\n   border: 1px solid red;\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"OnSignIn(a)\" #a=\"ngForm\" style=\"z-index: 1\">\n  <div class=\"col-xs-2 form-group\" style=\"margin: 13% 40%;\">\n    <label>Email:</label>\n    <input type=\"email\" id=\"em\" name=\"email\" ngModel required email #email=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter a valid email!!</span>\n    <hr>\n    <label>Password:</label>\n    <input type=\"password\" id=\"pass\" name=\"password\" ngModel required>\n    <br>\n    <br>\n    <button type=\"submit\" class=\"btn btn-primary dropdown-toggle\" style=\"cursor: pointer\" [disabled]=\"a.invalid\"\n    >Sign In</button>\n    <button type=\"button\" class=\"btn btn-success dropdown-toggle\" style=\"cursor: pointer\" routerLink=\"/signup\"\n    >Sign Up</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.OnSignIn = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        var pass = __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(password);
        this.loginService.signInUser(email, pass);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_model__ = __webpack_require__("../../../../../src/app/login/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homeServer_service__ = __webpack_require__("../../../../../src/app/homeServer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(router, homeServer) {
        var _this = this;
        this.router = router;
        this.homeServer = homeServer;
        this.i = 0;
        this.signedIn = false;
        this.Admin = false;
        this.user = [];
        this.usersChanged = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.usersSelected = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.homeServer.getUsers().subscribe(function (users) {
            console.log(users);
            _this.user = users;
            if (_this.user !== null) {
                _this.usersChanged.next(_this.user);
            }
        }, function (error) { return console.log(error); });
        this.user = this.getUsers();
    }
    LoginService.prototype.editUser = function (currentEmail, newEmail, status) {
        this.user = this.getUsers();
        for (this.i = 0; this.i < this.user.length; this.i++) {
            if (this.user[this.i].email === currentEmail) {
                this.user[this.i].email = newEmail;
                this.user[this.i].status = status;
            }
        }
        this.homeServer.storeUsers(this.user).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        this.usersChanged.next(this.user);
    };
    LoginService.prototype.signUpUser = function (email, password, status) {
        if (this.user === null) {
            this.user = [];
        }
        this.user.push(new __WEBPACK_IMPORTED_MODULE_1__user_model__["a" /* User */](email, password, status));
        this.homeServer.storeUsers(this.user).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        this.usersChanged.next(this.user);
        this.router.navigate(['/login']);
    };
    LoginService.prototype.signInUser = function (email, password) {
        this.user = this.getUsers();
        for (this.i = 0; this.i < this.user.length; this.i++) {
            if (this.user[this.i].email === email && this.user[this.i].password === password) {
                this.signedIn = true;
                this.CurrentUser = email;
                this.router.navigate(['/store']);
                if (this.user[this.i].status === 'Admin') {
                    this.Admin = true;
                    console.log('Welcome Admin Osama');
                }
            }
        }
        if (email !== '' && password !== '' && this.signedIn === false) {
            alert('Wrong email or password');
        }
        if (email !== '' && password === '' && this.signedIn === false) {
            alert('Enter password please');
        }
        if (password !== '' && email === '' && this.signedIn === false) {
            alert('Enter email please');
        }
        if (password === '' && email === '' && this.signedIn === false) {
            alert('Enter email and password please');
        }
    };
    LoginService.prototype.IsSignedIn = function () {
        return this.signedIn;
    };
    LoginService.prototype.IsAdmin = function () {
        return this.Admin;
    };
    LoginService.prototype.logOut = function () {
        this.Admin = false;
        this.signedIn = false;
        this.CurrentUser = '';
        // this.router.navigate(['/store']);
    };
    LoginService.prototype.getUsers = function () {
        if (this.user !== null) {
            return this.user;
        }
    };
    LoginService.prototype.getEmail = function () {
        return this.CurrentUser;
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__homeServer_service__["a" /* HomeServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__homeServer_service__["a" /* HomeServerService */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(email, password, status) {
        this.email = email;
        this.password = password;
        this.status = status;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/servers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServersService = (function () {
    function ServersService(http) {
        this.http = http;
    }
    ServersService.prototype.storeServers = function (servers) {
        return this.http.put('https://store-14.firebaseio.com/data.json', servers);
    };
    ServersService.prototype.OrderItems = function (servers) {
        return this.http.put('https://store-14.firebaseio.com/order.json', servers);
    };
    ServersService.prototype.deleteServers = function (servers) {
        console.log('deleted');
        return this.http.delete('https://store-14.firebaseio.com/data.json');
    };
    ServersService.prototype.getOrders = function () {
        return this.http.get('https://store-14.firebaseio.com/order.json')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ServersService.prototype.getServers = function () {
        return this.http.get('https://store-14.firebaseio.com/data.json')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ServersService.prototype.getAppName = function () {
        return this.http.get('https://store-14.firebaseio.com/appName.json')
            .map(function (response) {
            return response.json();
        });
    };
    return ServersService;
}());
ServersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ServersService);

var _a;
//# sourceMappingURL=servers.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"OnSignUp(f)\" #f=\"ngForm\">\n  <div class=\"col-xs-2 form-group\" style=\"margin: 13% 40%;\">\n    <label>Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" ngModel=\"\" required email #email=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter a valid email!!</span>\n    <hr>\n    <label>Password:</label>\n    <input type=\"password\" id=\"password\" name=\"password\" ngModel required>\n    <br>\n    <input type=\"radio\" name=\"gender\" value=\"Admin\" ngModel>Admin<br>\n    <input type=\"radio\" name=\"gender\" value=\"User\" ngModel>User<br>\n    <br>\n    <button type=\"submit\" class=\"btn btn-success dropdown-toggle\" style=\"cursor: pointer\" [disabled]=\"f.invalid\"\n    >Sign Up</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(loginService) {
        this.loginService = loginService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.OnSignUp = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        var status = form.value.gender;
        var pass;
        pass = __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(password);
        console.log(pass);
        console.log(status);
        if (password !== '' && email !== '') {
            this.loginService.signUpUser(email, pass, status);
        }
        if (email !== '' && password === '') {
            alert('Enter password please');
        }
        if (password !== '' && email === '') {
            alert('Enter email please');
        }
        if (password === '' && email === '') {
            alert('Enter email and password please');
        }
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], SignupComponent);

var _a;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/store/store-admin/store-admin-item/store-admin-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, td  {\n  border: 1px solid grey;\n  border-collapse: collapse;\n  padding: 5px;\n}\ntable {\n  width: 100%;\n}\ntd {\n  width: 33%;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/store-admin/store-admin-item/store-admin-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"\" class=\"list-group-item clearfix\" style=\"width: 100%\" (click)=\"onSelected()\">\n  <table>\n    <tr>\n      <td>\n        <h4 class=\"list-group-item-heading\">{{store.name}}</h4>\n      </td>\n      <td>\n        <p class=\"list-group-item-text\">{{store.price}}</p>\n      </td>\n      <td>\n        <img src=\"{{store.imagePath[0]}}\" alt=\"{{store.name}}\" class=\"img-responsive\" style=\"max-height: 50px; width: 70px\">\n      </td>\n    </tr>\n  </table>\n</a>\n<br>\n"

/***/ }),

/***/ "../../../../../src/app/store/store-admin/store-admin-item/store-admin-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreAdminItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__("../../../../../src/app/store/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_model__ = __webpack_require__("../../../../../src/app/store/store.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart_service__ = __webpack_require__("../../../../../src/app/cart/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoreAdminItemComponent = (function () {
    function StoreAdminItemComponent(storeService, cartService) {
        this.storeService = storeService;
        this.cartService = cartService;
    }
    StoreAdminItemComponent.prototype.ngOnInit = function () {
    };
    StoreAdminItemComponent.prototype.onSelected = function () {
        this.storeService.emitCar(this.store);
    };
    return StoreAdminItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__store_model__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__store_model__["a" /* Store */]) === "function" && _a || Object)
], StoreAdminItemComponent.prototype, "store", void 0);
StoreAdminItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-store-admin-item',
        template: __webpack_require__("../../../../../src/app/store/store-admin/store-admin-item/store-admin-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/store/store-admin/store-admin-item/store-admin-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__cart_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cart_cart_service__["a" /* CartService */]) === "function" && _c || Object])
], StoreAdminItemComponent);

var _a, _b, _c;
//# sourceMappingURL=store-admin-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/store/store-admin/store-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, th , td  {\n  border: 1px solid grey;\n  border-collapse: collapse;\n  padding: 5px;\n  width: 100%;\n}\ntable tr:nth-child(odd) {\n  background-color: grey;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/store-admin/store-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-10 form-group\">\n  <label>Search</label>\n  <input [(ngModel)]=\"query\">\n  <hr>\n  <template [ngIf]=\"loginService.IsAdmin()\">\n    <button type=\"button\" class=\"btn btn-danger\" style=\"margin-bottom: 5px\" (click)=\"OnAddNewCar()\">Add new car</button>\n  </template>\n  <template [ngIf]=\"storeService.add\">\n    <app-store-add></app-store-add>\n  </template>\n  <div *ngFor=\"let car of cars | filter:query\">\n    <table>\n      <tr>\n        <app-store-admin-item [store]=\"car\"></app-store-admin-item>\n      </tr>\n    </table>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/store/store-admin/store-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_service__ = __webpack_require__("../../../../../src/app/store/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreAdminComponent = (function () {
    function StoreAdminComponent(storeService, loginService) {
        this.storeService = storeService;
        this.loginService = loginService;
        this.query = '';
    }
    StoreAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cars = this.storeService.getCars();
        this.subscription = this.storeService.storeChanged.subscribe(function (cars) {
            _this.cars = cars;
        });
    };
    StoreAdminComponent.prototype.OnAddNewCar = function () {
        this.storeService.SetAddNewCar(true);
    };
    return StoreAdminComponent;
}());
StoreAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-store-admin',
        template: __webpack_require__("../../../../../src/app/store/store-admin/store-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/store/store-admin/store-admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__store_service__["a" /* StoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], StoreAdminComponent);

var _a, _b;
//# sourceMappingURL=store-admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/store/store-detail/store-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/store-detail/store-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"position: absolute;\n     z-index: 1; width: 200%; height: 200%;background-color: gray;opacity: 0.1\" (click)=\"Cancel()\">\n</div>\n<div class=\"col-md-1\" style=\"position: absolute; margin: 0% 30%;\n z-index: 2; width: 500px; height: 640px; border: solid 2px red ; background-color: lightgray\">\n  <br>\n  <template [ngIf]=\"!loginService.IsSignedIn()\">\n    <p style=\"color: red\">You are not signed in!!</p>\n  </template>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img #image\n         [src]=\"store.imagePath[i]\"\n         alt=\"{{store.name}}\"\n         class=\"img-responsive\"\n         style=\"height: 230px;width: 480px\">\n  </div>\n  <div style=\"position: absolute;z-index: 3;margin: 20% 3%\">\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"OnPrev()\"> << </button>\n  </div>\n  <div style=\"position: absolute;z-index: 3;margin: 20% 88.5%\">\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"OnNext()\"> >> </button>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>{{store.name}}</h1> <p>{{store.price}}$</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    {{store.description}}\n  </div>\n</div>\n  <hr>\n  <template [ngIf]=\"!loginService.IsAdmin()\">\n    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" (click)=\"onAddToCartList()\" style=\"cursor: pointer\"\n    >Add to Cart list</button>\n    <hr>\n    <button  type=\"button\" class=\"btn btn-danger dropdown-toggle\" style=\"cursor: pointer\" routerLink=\"/cart\"\n             (click)=\"viewCart()\">view cart</button>\n  </template>\n    <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" style=\"cursor: pointer\" (click)=\"Cancel()\"\n    >Cancel</button>\n  <template [ngIf]=\"loginService.IsAdmin()\">\n    <br>\n    <hr>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteCar()\">Delete the car for ever</button>\n  </template>\n  <br>\n  <hr>\n    <button type=\"button\" class=\"btn btn-success dropdown-toggle\" style=\"cursor: pointer\" (click)=\"Previous()\">\n      << previous</button>\n    <button type=\"button\" class=\"btn btn-success dropdown-toggle\" style=\"cursor: pointer; float: right\" (click)=\"Next()\"\n    >next >></button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/store/store-detail/store-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_model__ = __webpack_require__("../../../../../src/app/store/store.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_service__ = __webpack_require__("../../../../../src/app/store/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homeServer_service__ = __webpack_require__("../../../../../src/app/homeServer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StoreDetailComponent = (function () {
    function StoreDetailComponent(storeService, loginService, homeServerService) {
        this.storeService = storeService;
        this.loginService = loginService;
        this.homeServerService = homeServerService;
    }
    StoreDetailComponent.prototype.ngOnInit = function () {
        this.i = 0;
    };
    StoreDetailComponent.prototype.onAddToCartList = function () {
        if (this.loginService.IsSignedIn()) {
            this.storeService.addItemsToCartList(this.store);
        }
        else {
            alert('You are not signed in');
        }
    };
    StoreDetailComponent.prototype.viewCart = function () {
        if (!this.loginService.IsSignedIn()) {
            alert('You are not signed in');
        }
    };
    StoreDetailComponent.prototype.DeleteCar = function () {
        var index = this.storeService.cars.indexOf(this.store);
        this.storeService.cars.splice(index, 1);
        this.storeService.storeChanged.next(this.storeService.getCars());
        this.homeServerService.storeServers(this.storeService.getCars()).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        this.Cancel();
        alert('The car has been deleted');
    };
    StoreDetailComponent.prototype.Cancel = function () {
        this.storeService.emitCar(null);
    };
    StoreDetailComponent.prototype.Next = function () {
        this.storeService.emitNextCar(this.store);
    };
    StoreDetailComponent.prototype.Previous = function () {
        this.storeService.emitPrevCar(this.store);
    };
    StoreDetailComponent.prototype.OnNext = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isUndefined"])(this.store.imagePath[1])) {
            this.i = 0;
        }
        else {
            this.i = 1;
        }
    };
    StoreDetailComponent.prototype.OnPrev = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isUndefined"])(this.store.imagePath[0])) {
            this.i = 1;
        }
        else {
            this.i = 0;
        }
    };
    return StoreDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_model__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_model__["a" /* Store */]) === "function" && _a || Object)
], StoreDetailComponent.prototype, "store", void 0);
StoreDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-store-detail',
        template: __webpack_require__("../../../../../src/app/store/store-detail/store-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/store/store-detail/store-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__store_service__["a" /* StoreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__homeServer_service__["a" /* HomeServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__homeServer_service__["a" /* HomeServerService */]) === "function" && _d || Object])
], StoreDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=store-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/store/store-list/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, input) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (element) {
                return element.name.toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/store/store-list/store-add/store-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/store-list/store-add/store-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"position: absolute;\n     z-index: 1; width: 200%; height: 200%\" (click)=\"Cancel()\">\n</div>\n<div class=\"col-xs-1\" style=\"position: absolute; margin: 0% 40%;\n z-index: 2; width: 300px; height: 400px; background-color: lightgray; border: 2px solid red\">\n  <form (ngSubmit)=\"OnAdd(f)\" #f=\"ngForm\">\n    <div class=\"col-xs-2 form-group\" style=\"margin: 5% 5%;\">\n      <label>Car name:</label>\n      <input type=\"car\" id=\"car\" name=\"car\" ngModel=\"\" required>\n      <br>\n      <label>price:</label>\n      <input type=\"price\" id=\"price\" name=\"price\" ngModel required>\n      <br>\n      <label>Description:</label>\n      <input type=\"Description\" id=\"Description\" name=\"Description\" ngModel required>\n      <br>\n      <label>Path:</label>\n      <input type=\"Path\" id=\"Path\" name=\"Path\" ngModel required>\n      <br>\n      <br>\n      <button type=\"submit\" class=\"btn btn-success dropdown-toggle\" style=\"cursor: pointer\" [disabled]=\"f.invalid\"\n      >Add</button>\n      <hr>\n      <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" style=\"cursor: pointer\" (click)=\"Cancel()\"\n      >cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/store/store-list/store-add/store-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__("../../../../../src/app/store/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_model__ = __webpack_require__("../../../../../src/app/store/store.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreAddComponent = (function () {
    function StoreAddComponent(storeService) {
        this.storeService = storeService;
        this.Path = [];
    }
    StoreAddComponent.prototype.ngOnInit = function () {
    };
    StoreAddComponent.prototype.OnAdd = function (form) {
        var car = form.value.car;
        var price = form.value.price;
        var Description = form.value.Description;
        this.Path.push(form.value.Path);
        this.storeService.addItem(new __WEBPACK_IMPORTED_MODULE_2__store_model__["a" /* Store */](car, price, Description, this.Path));
        alert('The car has been added');
    };
    StoreAddComponent.prototype.Cancel = function () {
        this.storeService.SetAddNewCar(false);
    };
    return StoreAddComponent;
}());
StoreAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-store-add',
        template: __webpack_require__("../../../../../src/app/store/store-list/store-add/store-add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/store/store-list/store-add/store-add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */]) === "function" && _a || Object])
], StoreAddComponent);

var _a;
//# sourceMappingURL=store-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/store/store-list/store-item/store-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/store-list/store-item/store-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"\" class=\"list-group-item clearfix\" style=\"width: 300px;\" (click)=\"onSelected()\">\n    <div class=\"pull-left\">\n      <h4 class=\"list-group-item-heading\">{{store.name}}</h4>\n      <p class=\"list-group-item-text\">{{store.price}}</p>\n      <br>\n    </div>\n    <span class=\"pull-right\">\n        <img src=\"{{store.imagePath[0]}}\" alt=\"{{store.name}}\" class=\"img-responsive\" style=\"max-height: 50px;\">\n      </span>\n  </a>\n<br>\n"

/***/ }),

/***/ "../../../../../src/app/store/store-list/store-item/store-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_model__ = __webpack_require__("../../../../../src/app/store/store.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_service__ = __webpack_require__("../../../../../src/app/store/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreItemComponent = (function () {
    function StoreItemComponent(storeService) {
        this.storeService = storeService;
    }
    StoreItemComponent.prototype.ngOnInit = function () {
    };
    StoreItemComponent.prototype.onSelected = function () {
        this.storeService.emitCar(this.store);
    };
    return StoreItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_model__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_model__["a" /* Store */]) === "function" && _a || Object)
], StoreItemComponent.prototype, "store", void 0);
StoreItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-store-item',
        template: __webpack_require__("../../../../../src/app/store/store-list/store-item/store-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/store/store-list/store-item/store-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__store_service__["a" /* StoreService */]) === "function" && _b || Object])
], StoreItemComponent);

var _a, _b;
//# sourceMappingURL=store-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/store/store-list/store-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/store-list/store-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-10 form-group\">\n  <label>Search</label>\n  <input [(ngModel)]=\"query\">\n  <hr>\n  <template [ngIf]=\"loginService.IsAdmin()\">\n    <button type=\"button\" class=\"btn btn-primary\" style=\"margin-bottom: 5px\" (click)=\"OnAddNewCar()\">Add new car</button>\n  </template>\n  <template [ngIf]=\"storeService.add\">\n    <app-store-add></app-store-add>\n  </template>\n</div>\n<div *ngFor=\"let car of cars | filter:query\" class=\"col-xs-4\">\n  <app-store-item [store]=\"car\"></app-store-item>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/store/store-list/store-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__("../../../../../src/app/store/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreListComponent = (function () {
    function StoreListComponent(storeService, loginService) {
        this.storeService = storeService;
        this.loginService = loginService;
        this.query = '';
    }
    StoreListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cars = this.storeService.getCars();
        this.subscription = this.storeService.storeChanged.subscribe(function (cars) {
            _this.cars = cars;
        });
    };
    StoreListComponent.prototype.OnAddNewCar = function () {
        this.storeService.SetAddNewCar(true);
    };
    return StoreListComponent;
}());
StoreListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-store-list',
        template: __webpack_require__("../../../../../src/app/store/store-list/store-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/store/store-list/store-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], StoreListComponent);

var _a, _b;
//# sourceMappingURL=store-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/store/store.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/store.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"row\">\n  <template [ngIf]=\"!loginService.IsAdmin()\">\n  <div class=\"col-xs-12\">\n    <app-store-list></app-store-list>\n    <br><br>\n  </div>\n  <app-store-detail *ngIf=\"selectedCar;else infoText\"\n                    [store]=\"selectedCar\"></app-store-detail>\n    </template>\n</div>\n<template [ngIf]=\"loginService.IsAdmin()\">\n  <app-store-admin></app-store-admin>\n  <app-store-detail *ngIf=\"selectedCar;else infoText\"\n                    [store]=\"selectedCar\"></app-store-detail>\n</template>\n"

/***/ }),

/***/ "../../../../../src/app/store/store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__("../../../../../src/app/store/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreComponent = (function () {
    function StoreComponent(storeService, loginService) {
        this.storeService = storeService;
        this.loginService = loginService;
    }
    StoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.storeService.carsSelected.subscribe(function (car) {
            _this.selectedCar = car;
        });
    };
    StoreComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return StoreComponent;
}());
StoreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-store',
        template: __webpack_require__("../../../../../src/app/store/store.component.html"),
        styles: [__webpack_require__("../../../../../src/app/store/store.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], StoreComponent);

var _a, _b;
//# sourceMappingURL=store.component.js.map

/***/ }),

/***/ "../../../../../src/app/store/store.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Store; });
var Store = (function () {
    function Store(name, price, description, imagePath) {
        this.amount = 1;
        this.imagePath = [];
        this.name = name;
        this.price = price;
        this.description = description;
        this.imagePath = imagePath;
    }
    return Store;
}());

//# sourceMappingURL=store.model.js.map

/***/ }),

/***/ "../../../../../src/app/store/store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_cart_service__ = __webpack_require__("../../../../../src/app/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__homeServer_service__ = __webpack_require__("../../../../../src/app/homeServer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StoreService = (function () {
    function StoreService(cartService, homeServerService) {
        var _this = this;
        this.cartService = cartService;
        this.homeServerService = homeServerService;
        this.storeChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.carsSelected = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.cars = [];
        this.add = false;
        this.i = 0;
        this.exist = 0;
        this.homeServerService.getServers().subscribe(function (items) {
            console.log(items);
            _this.cars = items;
            _this.storeChanged.next(_this.cars.slice());
        }, function (error) { return console.log(error); });
    }
    StoreService.prototype.ngOnInit = function () {
    };
    // cars: Store[] = [
    //   new Store('BMW',
    //     300000,
    //     'The best preformance you have ever seen',
    //     ['https://avisassets.abgemea.com/.imaging/flexibleIntroLarge/dms/DMS/' +
    //     'local/ZA/fleet/fleet-page/luxury-cars-feature.jpg',
    //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
    //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
    //   ),
    //   new Store('Golf',
    //     40000,
    //     'The best preformance you have ever seen',
    //     ['https://avisassets.abgemea.com/.imaging/flexibleIntroLarge/dms/DMS/' +
    //     'local/ZA/fleet/fleet-page/luxury-cars-feature.jpg',
    //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
    //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
    //   ),
    //   new Store('Mari',
    //     80000,
    //     'The best preformance you have ever seen',
    //     ['https://avisassets.abgemea.com/.imaging/flexibleIntroLarge/dms/DMS/' +
    //     'local/ZA/fleet/fleet-page/luxury-cars-feature.jpg',
    //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
    //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
    //   ),
    //   new Store('Masri',
    //     80000,
    //     'The best preformance you have ever seen',
    //     ['https://avisassets.abgemea.com/.imaging/flexibleIntroLarge/dms/DMS/' +
    //     'local/ZA/fleet/fleet-page/luxury-cars-feature.jpg',
    //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
    //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
    //   ),
    //   new Store('Massari',
    //     80000,
    //     'The best preformance you have ever seen',
    //     ['https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
    //     '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png',
    //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
    //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
    //   ),
    //   new Store('Nissan',
    //     30000,
    //     'The best preformance you have ever seen',
    //     ['https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
    //     '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png',
    //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
    //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
    //   ),
    //   new Store('Ferrari',
    //     400000,
    //     'The best preformance you have ever seen',
    //     ['https://avisassets.abgemea.com/.imaging/flexibleIntroLarge/dms/DMS/' +
    //     'local/ZA/fleet/fleet-page/luxury-cars-feature.jpg',
    //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
    //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
    //   ),
    //   new Store('Lamborghini',
    //     1000000,
    //     'The fastest car ever',
    //     ['https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
    //     '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg',
    //       'https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
    //     '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png']
    //   ),
    //   new Store('Lambo',
    //     1000000,
    //     'The fastest car ever',
    //     ['https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
    //     '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg',
    //       'https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
    //       '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png']
    //   ),
    //   new Store('ghini',
    //     1000000,
    //     'The fastest car ever',
    //     ['https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
    //     '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg',
    //       'https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
    //       '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png']
    //   ),
    //   new Store('Lamb',
    //     10000,
    //     'The fastest car ever',
    //     ['https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
    //     '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg',
    //       'https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
    //       '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png']
    //   ),
    //   new Store('GTI',
    //     10000,
    //     'The fastest car ever',
    //     ['https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
    //     '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg',
    //       'https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
    //       '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png']
    //   )];
    StoreService.prototype.addItem = function (item) {
        if (this.cars === null) {
            this.cars = [];
            this.cars.push(item);
            this.homeServerService.storeServers(this.getCars()).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
            this.storeChanged.next(this.cars);
        }
        else {
            for (this.i = 0; this.i < this.cars.length; this.i++) {
                if (this.cars[this.i].name === item.name) {
                    this.cars[this.i].amount++;
                    this.homeServerService.storeServers(this.getCars()).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
                    this.storeChanged.next(this.cars);
                    this.exist = 1;
                }
            }
            if (!this.exist) {
                this.cars.push(item);
                this.homeServerService.storeServers(this.getCars()).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
                this.storeChanged.next(this.cars);
            }
        }
        this.exist = 0;
        console.log('Items are: ');
        console.log(this.cars);
    };
    StoreService.prototype.SetAddNewCar = function (add) {
        this.add = add;
    };
    StoreService.prototype.emitCar = function (car) {
        console.log(car);
        this.carsSelected.next(car);
    };
    StoreService.prototype.emitNextCar = function (car) {
        if (car === null) {
            this.carsSelected.next(car);
        }
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i] === car) {
                console.log(this.cars[i + 1]);
                this.carsSelected.next(this.cars[i + 1]);
            }
        }
    };
    StoreService.prototype.emitPrevCar = function (car) {
        if (car === null) {
            this.carsSelected.next(car);
        }
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i] === car) {
                console.log(this.cars[i - 1]);
                this.carsSelected.next(this.cars[i - 1]);
            }
        }
    };
    StoreService.prototype.getCars = function () {
        return this.cars.slice();
    };
    StoreService.prototype.addItemsToCartList = function (item) {
        this.cartService.addItem(item);
    };
    return StoreService;
}());
StoreService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cart_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cart_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__homeServer_service__["a" /* HomeServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__homeServer_service__["a" /* HomeServerService */]) === "function" && _b || Object])
], StoreService);

var _a, _b;
//# sourceMappingURL=store.service.js.map

/***/ }),

/***/ "../../../../../src/app/users-list/user-edit/user-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label , input , button {\n  margin: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users-list/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"position: fixed;\n     z-index: 1; width: 200%; height: 200%;background-color: gray;opacity: 0.1\" (click)=\"Cancel()\">\n</div>\n<form (ngSubmit)=\"OnEdit(a)\" #a=\"ngForm\" class=\"col-md-1\" style=\"position: fixed; margin: 0% 50%;\n z-index: 2; width: 300px; height: 350px; border: solid 2px red ; background-color: lightgray\">\n    <br>\n    <label>Email:</label>\n    <br>\n    <input type=\"email\" id=\"em\" name=\"email\" ngModel required email #email=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter a valid email!!</span>\n    <hr>\n    <label>Status:</label>\n    <br>\n    <input type=\"status\" id=\"status\" name=\"status\" ngModel required>\n    <br>\n    <br>\n    <button type=\"submit\" class=\"btn btn-primary dropdown-toggle\" style=\"cursor: pointer\" [disabled]=\"a.invalid\"\n    >Edit</button>\n    <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" style=\"cursor: pointer; float: right\" (click)=\"Cancel()\"\n    >Cancel</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/users-list/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_user_model__ = __webpack_require__("../../../../../src/app/login/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserEditComponent = (function () {
    function UserEditComponent(loginService) {
        this.loginService = loginService;
    }
    UserEditComponent.prototype.ngOnInit = function () {
    };
    UserEditComponent.prototype.Cancel = function () {
        this.loginService.usersSelected.next(null);
    };
    UserEditComponent.prototype.OnEdit = function (form) {
        var email = form.value.email;
        var status = form.value.status;
        this.loginService.editUser(this.user.email, email, status);
        this.Cancel();
    };
    return UserEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_user_model__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_user_model__["a" /* User */]) === "function" && _a || Object)
], UserEditComponent.prototype, "user", void 0);
UserEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-edit',
        template: __webpack_require__("../../../../../src/app/users-list/user-edit/user-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users-list/user-edit/user-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], UserEditComponent);

var _a, _b;
//# sourceMappingURL=user-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/users-list/users-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users-list/users-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-5\">\n  <template [ngIf]=\"loginService.IsAdmin()\">\n    <app-users-store></app-users-store>\n  </template>\n</div>\n<app-user-edit *ngIf=\"selectedUser\" [user]=\"selectedUser\"></app-user-edit>\n\n"

/***/ }),

/***/ "../../../../../src/app/users-list/users-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListComponent = (function () {
    function UsersListComponent(loginService) {
        this.loginService = loginService;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.loginService.usersSelected.subscribe(function (user) {
            _this.selectedUser = user;
        });
    };
    UsersListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return UsersListComponent;
}());
UsersListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users-list',
        template: __webpack_require__("../../../../../src/app/users-list/users-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users-list/users-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], UsersListComponent);

var _a;
//# sourceMappingURL=users-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/users-list/users-store/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  margin: 10px 10px 10px 10px;\n  background-color: gray;\n}\np {\n  padding: 2px;\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users-list/users-store/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/users\" class=\"list-group-item clearfix\" style=\"width: 300px;\" (click)=\"onSelected()\">\n  <div class=\"pull-left\">\n    <p class=\"list-group-item-text\">{{user.email}}</p>\n    <p class=\"list-group-item-text\">{{user.status}}</p>\n  </div>\n</a>\n<hr>\n\n"

/***/ }),

/***/ "../../../../../src/app/users-list/users-store/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_user_model__ = __webpack_require__("../../../../../src/app/login/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(loginService) {
        this.loginService = loginService;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.onSelected = function () {
        console.log(this.user);
        this.loginService.usersSelected.next(this.user);
    };
    return UserComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_user_model__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_user_model__["a" /* User */]) === "function" && _a || Object)
], UserComponent.prototype, "user", void 0);
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/users-list/users-store/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users-list/users-store/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/users-list/users-store/users-store.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users-list/users-store/users-store.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let user of users\">\n  <app-user [user]=\"user\"></app-user>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/users-list/users-store/users-store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersStoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersStoreComponent = (function () {
    function UsersStoreComponent(loginService) {
        this.loginService = loginService;
    }
    UsersStoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.loginService.getUsers();
        this.subscription = this.loginService.usersChanged.subscribe(function (users) {
            _this.users = users;
        });
    };
    return UsersStoreComponent;
}());
UsersStoreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users-store',
        template: __webpack_require__("../../../../../src/app/users-list/users-store/users-store.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users-list/users-store/users-store.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], UsersStoreComponent);

var _a;
//# sourceMappingURL=users-store.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map