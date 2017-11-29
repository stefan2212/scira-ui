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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nmain {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n    display: block;\r\n    min-height: 100vh;\r\n}\r\n.page-component{\r\n    min-height: 100vh;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <main class=\"main\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n  \r\n  \r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* unused harmony export Hero */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.hero = {
            id: 1,
            name: 'Lala'
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    })
], AppComponent);

var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_paper_paper_component__ = __webpack_require__("../../../../../src/app/components/paper/paper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_search_search_component__ = __webpack_require__("../../../../../src/app/pages/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_search_serach_service_provider__ = __webpack_require__("../../../../../src/app/services/search/serach-service-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_about_scira_about_scira_component__ = __webpack_require__("../../../../../src/app/pages/about-scira/about-scira.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_21__pages_about_scira_about_scira_component__["a" /* AboutSciraComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_19__pages_search_search_component__["a" /* SearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact_component__["a" /* ContactComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__pages_register_register_component__["a" /* RegisterComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_17__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_about_scira_about_scira_component__["a" /* AboutSciraComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_paper_paper_component__["a" /* PaperComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_about_scira_about_scira_component__["a" /* AboutSciraComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_20__services_search_serach_service_provider__["a" /* SearchProvider */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    \r\n    <div class=\"footer-copyright\">\r\n      <div class=\"container\">\r\n        © 2017 SciRA\r\n      </div>\r\n    </div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div class=\"nav-wrapper\">\r\n    <a routerLink=\"\" class=\"brand-logo\">SciRA</a>\r\n    <ul  class=\"right hide-on-med-and-down\">\r\n      <li>We make your research easier <a routerLink=\"\" class=\"secondary-content\"><i class=\"material-icons\">home</i></a></li>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div class=\"nav-wrapper\">\r\n    <a href=\"#!\" class=\"brand-logo\">\r\n      <i class=\"material-icons\">cloud</i>Logo</a>\r\n    <ul class=\"right hide-on-med-and-down\">\r\n      <li>\r\n        <a href=\"sass.html\">\r\n          <i class=\"material-icons\">search</i>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"badges.html\">\r\n          <i class=\"material-icons\">view_module</i>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"collapsible.html\">\r\n          <i class=\"material-icons\">refresh</i>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"mobile.html\">\r\n          <i class=\"material-icons\">more_vert</i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
        $('.button-collapse').sideNav({
            menuWidth: 300,
            edge: 'right',
            closeOnClick: true,
            draggable: true,
            onOpen: function (el) { },
            onClose: function (el) { },
        });
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/paper/paper.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n    display: inline-block;\r\n    /* margin: 10px; */\r\n    overflow: visible !important;\r\n   }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/paper/paper.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col m5\">\r\n  <div class=\"hoverable  card small\">\r\n    <div class=\"card-image waves-effect waves-block waves-light\">\r\n      <img class=\"activator\" src=\"assets/images/paper.jpg\">\r\n    </div>\r\n    <div class=\" card-content\">\r\n      <span class=\"card-title activator grey-text text-darken-4 \">{{paper.title}}\r\n        <i class=\"material-icons right\">more_vert</i>\r\n      </span>\r\n\r\n    </div>\r\n    <div class=\"card-reveal\">\r\n      <span class=\"card-title grey-text text-darken-4 \">{{paper.title}}\r\n        <i class=\"material-icons right\">close</i>\r\n      </span>\r\n      <ul class=\"collapsible popout\" data-collapsible=\"accordion\">\r\n          <li>\r\n            <div class=\"collapsible-header\"><i class=\"material-icons\">filter_drama</i>Authors</div>\r\n            <div class=\"collapsible-body\"><span>{{paper.authors.toString()}}</span></div>\r\n          </li>\r\n          <li>\r\n            <div class=\"collapsible-header\"><i class=\"material-icons\">place</i>University</div>\r\n            <div class=\"collapsible-body\"><span>{{paper.university}}</span></div>\r\n          </li>\r\n          <li>\r\n            <div class=\"collapsible-header\"><i class=\"material-icons\">place</i>Paper domain</div>\r\n            <div class=\"collapsible-body\"><span>{{paper.domain}}</span></div>\r\n          </li>\r\n          <li>\r\n            <div class=\"collapsible-header\"><i class=\"material-icons\">place</i>ContentUrl</div>\r\n            <div class=\"collapsible-body\"><a href=\"http://{{paper.contentUrl}}\" target=\"_blank\">paper url</a></div>\r\n          </li>\r\n          <li>\r\n            <div class=\"collapsible-header\"><i class=\"material-icons\">place</i>Publication date</div>\r\n            <div class=\"collapsible-body\"><span>{{paper.publishDate}}</span></div>\r\n          </li>\r\n        \r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/paper/paper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_paper__ = __webpack_require__("../../../../../src/app/models/paper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaperComponent = (function () {
    function PaperComponent() {
        console.log('paper-constructor');
    }
    PaperComponent.prototype.ngOnInit = function () {
        console.log('on init');
    };
    return PaperComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_paper__["a" /* Paper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_paper__["a" /* Paper */]) === "function" && _a || Object)
], PaperComponent.prototype, "paper", void 0);
PaperComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-paper',
        template: __webpack_require__("../../../../../src/app/components/paper/paper.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/paper/paper.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PaperComponent);

var _a;
//# sourceMappingURL=paper.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"slide-out\" class=\"side-nav\">\r\n  <li><div class=\"user-view\">\r\n    <div class=\"background\">\r\n      <img src=\"assets/images/background.png\">\r\n    </div>\r\n    <a href=\"#!user\"><img class=\"circle\" src=\"assets/images/logo.png\"></a>\r\n    <a href=\"#!name\"><span class=\"white-text name\">{{userService.currentUser?.username}}</span></a>\r\n    <a href=\"#!email\"><span class=\"white-text email\">example@gmail.com</span></a>\r\n  </div></li>\r\n  <li><a href=\"#!\"><i class=\"material-icons\">cloud</i>Welcome to SciRA</a></li>\r\n  <!-- <li><a href=\"#!\">Second Link</a></li> -->\r\n  <li><div class=\"divider\"></div></li>\r\n  <li><a class=\"subheader\">Subheader</a></li>\r\n  <li><a class=\"waves-effect\" routerLink=\"/\">Home</a></li>\r\n  <li><a class=\"waves-effect\" routerLink=\"/search\">Search</a></li>\r\n  <li><a class=\"waves-effect\" routerLink=\"/contact\">Contact</a></li>\r\n  <li><a class=\"waves-effect\" (click)=\"userService.invalidate()\" >Logout</a></li>\r\n</ul>\r\n<a href=\"#\" data-activates=\"slide-out\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBarComponent = (function () {
    function SideBarComponent(userService) {
        this.userService = userService;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        // $(".button-collapse").sideNav();
        $('.button-collapse').sideNav({
            menuWidth: 300,
            edge: 'left',
            closeOnClick: true,
            draggable: true,
            onOpen: function (el) { },
            onClose: function (el) { },
        });
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-side-bar',
        template: __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], SideBarComponent);

var _a;
//# sourceMappingURL=side-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/models/paper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paper; });
var Paper = (function () {
    function Paper(id, title, authors, university, domain, publlishDate, contentUrl) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.university = university;
        this.publishDate = publlishDate;
        this.domain = domain;
        this.contentUrl = contentUrl;
    }
    return Paper;
}());

//# sourceMappingURL=paper.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/pages/about-scira/about-scira.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/about-scira/about-scira.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <app-header></app-header>\r\n  <app-side-bar></app-side-bar>\r\n</header>\r\n<!-- HEADER END -->\r\n\r\n<div class=\"page-content\">\r\n  <div class=\"row\">\r\n      <h1 class=\"center-align\">About SciRA</h1>\r\n      <div class=\"center-align\">\r\n        <p class=\"flow-text\">\r\n          {{about}}\r\n        </p>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<footer class=\"page-footer\">\r\n  <app-footer></app-footer>\r\n</footer>\r\n<!-- FOOTER END -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/about-scira/about-scira.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutSciraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutSciraComponent = (function () {
    function AboutSciraComponent() {
        this.about = "When writing academic papers, searching for related literature and managing documents/references can be a burden. \n  We are developing a smart platform able to provide an innovative visual experience regarding the \n  references between papers, their genealogy, and various information about (co-)authors.\n  Additionally, the system will offer multple data/knowledge visualization solutions and filtering\n  techniques using several refinements (puplication year, subject, keywords, language).";
    }
    AboutSciraComponent.prototype.ngOnInit = function () {
    };
    return AboutSciraComponent;
}());
AboutSciraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about-scira',
        template: __webpack_require__("../../../../../src/app/pages/about-scira/about-scira.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/about-scira/about-scira.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutSciraComponent);

//# sourceMappingURL=about-scira.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <app-header></app-header>\r\n  <app-side-bar></app-side-bar>\r\n</header>\r\n<!-- HEADER END -->\r\n<div class=\"page-content\">\r\n\r\n  <div class=\"container\">\r\n    <ul class=\"collection\">\r\n      <li class=\"collection-item avatar\">\r\n        <img src=\"assets/images/stefan.jpg\" alt=\"\" class=\"circle\">\r\n        <span class=\"title\">Cernescu Stefan</span>\r\n        <p> Email: stefan.cernescu94@gmail.com <br>\r\n          Phone number: 075*******\r\n        </p>\r\n        <a href=\"https://github.com/stefan2212\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n      </li>\r\n      <li class=\"collection-item avatar\">\r\n        <img src=\"assets/images/groza.jpg\" alt=\"\" class=\"circle\">\r\n        <span class=\"title\">Groza Vasile</span>\r\n        <p>Email: vasilegroza3@gmail.com <br>\r\n          Phone number: 075*******\r\n        </p>\r\n        <a href=\"https://github.com/utilizatorvalid\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n      </li>\r\n      <li class=\"collection-item avatar\">\r\n        <img src=\"assets/images/gabor.jpg\" alt=\"\" class=\"circle\">\r\n        <span class=\"title\">Gabor Silviu</span>\r\n        <p>Email: <br>\r\n          Phone Number:\r\n        </p>\r\n        <a href=\"https://github.com/silviugabor\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n      </li>\r\n      <li class=\"collection-item avatar\">\r\n        <i class=\"material-icons circle red\">play_arrow</i>\r\n        <span class=\"title\">Coman Alexandru</span>\r\n        <p>Email: <br>\r\n          Phone Number:\r\n        </p>\r\n        <a href=\"https://github.com/alexcoman\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<footer class=\"page-footer\">\r\n  <app-footer></app-footer>\r\n</footer>\r\n<!-- FOOTER END -->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/pages/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-box{\r\n    min-height:100vh;\r\n    background-color:#00bcd4;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box valign-wrapper row\">\r\n  <div class=\"col s10 pull-s1 m6 pull-m3 l4 pull-l4 z-depth-4 card-panel\">\r\n    <form id=\"loginForm\" class=\"login-form\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 center\">\r\n          <img width=\"64\" height=\"64\" src=\"assets/images/logo.png\" alt=\"\" class=\"circle responsive-img valign profile-image-login\">\r\n          <p class=\"center login-form-text\">Log into the SciRA</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row margin\">\r\n        <div class=\"input-field col s12\">\r\n          <i class=\"material-icons prefix\">perm_identity</i>\r\n          <label class=\"center-align\" for=\"userTB\">Username</label>\r\n          <input id=\"userTB\" name=\"userTB\" type=\"text\" [(ngModel)]=\"model.username\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row margin\">\r\n        <div class=\"input-field col s12\">\r\n          <i class=\"material-icons prefix\">lock</i>\r\n          <label class=\"center-align\" for=\"passTB\">Password</label>\r\n          <input id=\"passTB\" name=\"passTB\" type=\"password\" [(ngModel)]=\"model.password\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"input-field  col s12\">\r\n          <a id=\"submitBtn\" class=\"btn waves-effect waves-light col s12 red darken-2\" (click)=\"doLogin()\">Login</a>\r\n        </div>\r\n        <div class=\"input-field col s12\">\r\n          <p class=\"margin center medium-small sign-up\">Don't have an account?\r\n            <a href=\"/register\">Register</a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
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
    function LoginComponent(userService) {
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('login-component init');
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
    };
    LoginComponent.prototype.doLogin = function () {
        console.log('login', this.model);
        this.userService.authenticate(this.model);
    };
    LoginComponent.prototype.doLogout = function () {
        this.userService.invalidate();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Styles of the 404 page of my website. */\r\n\r\n#error-page {\r\n    background: #081421;\r\n    color: #d3d7de;\r\n    font-family: \"Courier new\";\r\n    font-size: 18px;\r\n    line-height: 1.5em;\r\n    cursor: default;\r\n    min-height:100vh;\r\n  }\r\n  \r\n  .code-area {\r\n    position: absolute;\r\n    width: 320px;\r\n    min-width: 320px;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  \r\n  .code-area>span {\r\n    display: block;\r\n  }\r\n  \r\n  @media screen and (max-width: 320px) {\r\n    .code-area {\r\n      font-size: 5vw;\r\n      min-width: auto;\r\n      width: 95%;\r\n      margin: auto;\r\n      padding: 5px;\r\n      padding-left: 10px;\r\n      line-height: 6.5vw;\r\n    }\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"error-page\">\r\n  \r\n    <div class=\"code-area\">\r\n      <span style=\"color: #777;font-style:italic;\">\r\n        // 404 page not found.\r\n      </span>\r\n      <span>\r\n        <span style=\"color:#d65562;\">\r\n          if\r\n        </span>\r\n        (\r\n        <span style=\"color:#4ca8ef;\">!</span>\r\n        <span style=\"font-style: italic;color:#bdbdbd;\">found</span>) {{'{'}}\r\n      </span>\r\n      <span>\r\n        <span style=\"padding-left: 15px;color:#2796ec\">\r\n          <i style=\"width: 10px;display:inline-block\"></i>throw\r\n        </span>\r\n        <span>\r\n          (\r\n          <span style=\"color: #a6a61f\">\"(╯°□°)╯︵ ┻━┻\"</span>);\r\n        </span>\r\n        <span style=\"display:block\">{{'}'}}</span>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-box{\r\n    min-height:100vh;\r\n    background-color:#00bcd4;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"register-box valign-wrapper row\">\r\n  <div class=\"col s10 pull-s1 m6 pull-m3 l4 pull-l4 z-depth-4 card-panel\">\r\n    <form id=\"loginForm\" class=\"login-form\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 center\">\r\n          <img width=\"64\" height=\"64\" src=\"assets/images/logo.png\" alt=\"\" class=\"circle responsive-img valign profile-image-login\">\r\n          <p class=\"center login-form-text\">Register into the SciRA</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row margin\">\r\n        <div class=\"input-field col s12\">\r\n          <i class=\"material-icons prefix\">mailk</i>\r\n          <label class=\"center-align\" for=\"pass_sec\">Your email</label>\r\n          <input id=\"pass_sec\" name=\"pass_sec\" type=\"email\" [(ngModel)]=\"model.email\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row margin\">\r\n        <div class=\"input-field col s12\">\r\n          <i class=\"material-icons prefix\">perm_identity</i>\r\n          <label class=\"center-align\" for=\"userTB\">Please chose a username</label>\r\n          <input id=\"userTB\" name=\"userTB\" type=\"text\" [(ngModel)]=\"model.username\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row margin\">\r\n        <div class=\"input-field col s12\">\r\n          <i class=\"material-icons prefix\">lock</i>\r\n          <label class=\"center-align\" for=\"pass\">Set your password</label>\r\n          <input id=\"pass_firs\" name=\"pass\" type=\"password\" [(ngModel)]=\"model.password\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"input-field  col s12\">\r\n          <a id=\"submitBtn\" class=\"btn waves-effect waves-light col s12 red darken-2\" (click)=\"doRegister()\">Register</a>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(userService) {
        this.userService = userService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]();
    };
    RegisterComponent.prototype.doRegister = function () {
        console.log('register:', this.model);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/pages/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], RegisterComponent);

var _a;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-content {}\r\n\r\n.filter-container {\r\n  /* background-color: gray; */\r\n  min-height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n.paper-container {\r\n  /* background-color: yellowgreen; */\r\n  background-image: url('https://stefan2212.github.io/scira-ui/assets/images/notebook-background.jpg');\r\n  background-size: cover;\r\n  min-height: 100vh;\r\n}\r\n\r\n.filter-trigger-btn {\r\n  position: relative;\r\n  top: 5px;\r\n  left: -10px;\r\n  float: left;\r\n}\r\n\r\n.hide {\r\n  display: none\r\n}\r\n\r\n.filter-comands {\r\n  position: absolute;\r\n  margin-top: 25px;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\ndiv.search-box {\r\n  position: relative;\r\n}\r\n\r\ndiv.search {\r\n  position: absolute;\r\n  margin: 0 25px;\r\n  padding: 1px 0 0 0;\r\n  z-index: 2;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\ndiv.search-wrapper {\r\n  margin: 12px 10%;\r\n  transition: margin .25s ease;\r\n  border-radius: 10px;\r\n}\r\ndiv.search-wrapper.focused {\r\n  margin: 12px 5%;\r\n}\r\n\r\n\r\ndiv.search .search-wrapper input#search {\r\n  display: block;\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  width: 100%;\r\n  /* heisght: 45px; */\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  padding: 0 45px 0 15px;\r\n  border: 0;\r\n}\r\n\r\ndiv.search .search-wrapper input#search:focus {\r\n  outline: none;\r\n  box-shadow: none;\r\n}\r\n\r\ndiv.search .search-wrapper i.material-icons {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <app-header></app-header>\r\n  <app-side-bar></app-side-bar>\r\n</header>\r\n<!-- HEADER END -->\r\n\r\n<div class=\"page-content\">\r\n  <div class=\" row\">\r\n\r\n    <div class=\"{{filter_container_size}}\">\r\n      <div id=\"filter-container\" class=\"filter-container\">\r\n        <ul>\r\n          <li>\r\n            <div id=\"domain_filter\" class=\"chips chips-autocomplete\"></div>\r\n          </li>\r\n        </ul>\r\n        <div class=\" center-align filter-comands\">\r\n          <a class=\"btn-floating disabled\">\r\n            <i class=\"material-icons\">add</i>\r\n          </a>\r\n          <a class=\"waves-effect waves-light btn\">Apply</a>\r\n        </div>\r\n        <div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"paper-container {{paper_container_size}}\">\r\n\r\n      <a class=\" filter-trigger-btn  btn-floating btn-small waves-effect waves-light red tooltipped\" data-position=\"top\" data-delay=\"50\"\r\n        data-tooltip=\"Toggle Filters\" (click)=\"toggleFilters()\">\r\n        <i class=\"material-icons\">{{filter_arrow_type}}</i>\r\n      </a>\r\n      <!-- Teal page content  -->\r\n      <div class=\"row\">\r\n        <div class=\"search-box\">\r\n          <div class=\" search\">\r\n            <div class=\"search-wrapper card\">\r\n              <input id=\"search\" (focus)=\"onFocus()\" (focusout)=\"onFocusOut()\" placeholder=\"What do you wish to find?\">\r\n              <i class=\"material-icons\">search</i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col s12 cards-container\">\r\n          <div *ngFor=\"let paper of papers\">\r\n            <app-paper [paper]=\"paper\">\r\n              loading paper\r\n            </app-paper>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<footer class=\"page-footer\">\r\n  <app-footer></app-footer>\r\n</footer>\r\n<!-- FOOTER END -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_abstract_search__ = __webpack_require__("../../../../../src/app/services/search/abstract-search.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
        this.filter_visibility = true;
        this.paper_container_size = 'col s9';
        this.filter_container_size = 'col s3';
        this.filter_arrow_type = 'arrow_back';
        this.position = 'above';
        this.domains = {
            'Machine Learning': null,
            'Computer Science': null,
            'Security': null,
            'Artifical Inteligence': null
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this);
        console.log(this.searchService.search());
        this.searchService.getPages().subscribe(function (papers) { return _this.papers = papers; });
        console.log(JSON.parse(JSON.stringify(this.papers[0])));
        this.initFilters();
    };
    SearchComponent.prototype.initFilters = function () {
        var _this = this;
        $(document).ready(function () {
            $('#domain_filter.chips-autocomplete').material_chip({
                data: [],
                placeholder: 'Enter a domain',
                autocompleteOptions: {
                    data: _this.domains,
                    limit: Infinity,
                    minLength: 1
                }
            });
        });
    };
    SearchComponent.prototype.toggleFilters = function () {
        if (this.filter_visibility) {
            this.filter_arrow_type = 'arrow_forward';
            this.paper_container_size = 'col s12';
            this.filter_container_size = 'col s0';
            document.getElementById('filter-container').classList.add('hide');
        }
        else {
            this.filter_arrow_type = 'arrow_back';
            this.paper_container_size = 'col s9';
            this.filter_container_size = 'col s3';
            document.getElementById('filter-container').classList.remove('hide');
        }
        this.filter_visibility = !this.filter_visibility;
    };
    SearchComponent.prototype.onFocus = function () {
        var element = $('div.search-wrapper');
        element.addClass('focused');
    };
    SearchComponent.prototype.onFocusOut = function () {
        var element = $('div.search-wrapper');
        element.removeClass('focused');
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/pages/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_abstract_search__["a" /* AbstractSearch */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_abstract_search__["a" /* AbstractSearch */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService() {
        this.isLoggedIn = false;
        if (localStorage.getItem('currentUser')) {
            this.isLoggedIn = true;
        }
    }
    AuthService.prototype.login = function (user) {
        console.log('USER just logged in', user.username);
        localStorage.setItem('currentUser', user.username);
        this.isLoggedIn = true;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(true);
        // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    };
    AuthService.prototype.logout = function (user) {
        console.log('USER just logged out', user.username);
        localStorage.removeItem('currentUser');
        this.isLoggedIn = false;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
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



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        console.log('Data service connected..');
    }
    DataService.prototype.getPosts = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(function (res) { return res.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search/abstract-search.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AbstractSearch = (function () {
    function AbstractSearch() {
    }
    return AbstractSearch;
}());
AbstractSearch = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], AbstractSearch);

//# sourceMappingURL=abstract-search.js.map

/***/ }),

/***/ "../../../../../src/app/services/search/mock-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_paper__ = __webpack_require__("../../../../../src/app/models/paper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MockSearchService = (function () {
    function MockSearchService() {
        this.papers = [
            new __WEBPACK_IMPORTED_MODULE_1__models_paper__["a" /* Paper */](22, 'MachineLearning for Malware Detection', ['Liviu Ciortuz', 'Tom Michael'], 'Alexandru Ioan Cuza', 'Machine Learning', new Date('02-02-1999'), 'www.machinelearning.com'),
        ];
    }
    MockSearchService.prototype.getPages = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.papers);
    };
    MockSearchService.prototype.search = function () {
        return 'din mockuletz';
    };
    return MockSearchService;
}());
MockSearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MockSearchService);

//# sourceMappingURL=mock-search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchService = (function () {
    function SearchService() {
    }
    SearchService.prototype.getPages = function () {
        throw new Error('Method not implemented.');
    };
    SearchService.prototype.search = function () {
        return 'search normal';
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SearchService);

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search/serach-service-provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_search__ = __webpack_require__("../../../../../src/app/services/search/abstract-search.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_search_service__ = __webpack_require__("../../../../../src/app/services/search/mock-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_service__ = __webpack_require__("../../../../../src/app/services/search/search.service.ts");




function searchServiceFactory() {
    console.log(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].type);
    return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].type === 'DEV' ? new __WEBPACK_IMPORTED_MODULE_2__mock_search_service__["a" /* MockSearchService */]() : new __WEBPACK_IMPORTED_MODULE_3__search_service__["a" /* SearchService */]();
}
var SearchProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_0__abstract_search__["a" /* AbstractSearch */],
    useFactory: searchServiceFactory,
    deps: []
};
//# sourceMappingURL=serach-service-provider.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(authService, router) {
        this.authService = authService;
        this.router = router;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */];
    }
    UserService.prototype.create = function (user) {
        console.log(__WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]);
    };
    UserService.prototype.authenticate = function (user) {
        var _this = this;
        this.authService.login(user).subscribe(function () {
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/';
                _this.currentUser = user;
                // Redirect the user
                _this.router.navigate([redirect]);
            }
        });
    };
    UserService.prototype.invalidate = function () {
        this.authService.logout(this.currentUser);
        this.router.navigate(['login']);
        this.currentUser = null;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    type: 'DEV'
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