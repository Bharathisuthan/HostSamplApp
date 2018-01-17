webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication/auth.module": [
		"../../../../../src/app/authentication/auth.module.ts",
		"auth.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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

module.exports = "<app-header></app-header>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_index__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_services_auth_service__ = __webpack_require__("../../../../../src/app/authentication/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__authentication_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/authentication/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_speech_recognition_service__ = __webpack_require__("../../../../../src/app/service/speech-recognition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__node_modules_ngx_treeview_src_index__ = __webpack_require__("../../../../ngx-treeview/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__aside_aside_component__ = __webpack_require__("../../../../../src/app/aside/aside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__chart_chart_component__ = __webpack_require__("../../../../../src/app/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__kendo_grid_kendo_grid_component__ = __webpack_require__("../../../../../src/app/kendo-grid/kendo-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__kendo_treeview_kendo_treeview_component__ = __webpack_require__("../../../../../src/app/kendo-treeview/kendo-treeview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__js_in_ng_js_in_ng_component__ = __webpack_require__("../../../../../src/app/js-in-ng/js-in-ng.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ngx_treeview_ngx_treeview_component__ = __webpack_require__("../../../../../src/app/ngx-treeview/ngx-treeview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__mat_dialogue_mat_dialogue_component__ = __webpack_require__("../../../../../src/app/mat-dialogue/mat-dialogue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__register_form_register_form_component__ = __webpack_require__("../../../../../src/app/register-form/register-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__web_speech_api_web_speech_api_component__ = __webpack_require__("../../../../../src/app/web-speech-api/web-speech-api.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_19__home_home_component__["a" /* HomeComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_17__main_main_component__["a" /* MainComponent */] },
    { path: 'chart', component: __WEBPACK_IMPORTED_MODULE_20__chart_chart_component__["a" /* ChartComponent */] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_21__upload_upload_component__["a" /* UploadComponent */] },
    { path: 'kendo-grid', component: __WEBPACK_IMPORTED_MODULE_22__kendo_grid_kendo_grid_component__["a" /* KendoGridComponent */] },
    { path: 'kendo-treeview', component: __WEBPACK_IMPORTED_MODULE_23__kendo_treeview_kendo_treeview_component__["a" /* KendoTreeviewComponent */] },
    { path: 'js-in-ng', component: __WEBPACK_IMPORTED_MODULE_24__js_in_ng_js_in_ng_component__["a" /* JsInNgComponent */] },
    { path: 'ngx-treeview', component: __WEBPACK_IMPORTED_MODULE_25__ngx_treeview_ngx_treeview_component__["a" /* NgxTreeviewComponent */] },
    { path: 'mat-dialogue', component: __WEBPACK_IMPORTED_MODULE_26__mat_dialogue_mat_dialogue_component__["a" /* MatDialogueComponent */] },
    { path: 'register-form', component: __WEBPACK_IMPORTED_MODULE_27__register_form_register_form_component__["a" /* RegisterFormComponent */] },
    { path: 'web-speech-api', component: __WEBPACK_IMPORTED_MODULE_28__web_speech_api_web_speech_api_component__["a" /* WebSpeechApiComponent */] },
    { path: 'auth', loadChildren: './authentication/auth.module#AuthModule' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_18__aside_aside_component__["a" /* AsideComponent */],
                __WEBPACK_IMPORTED_MODULE_19__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__chart_chart_component__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_21__upload_upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_22__kendo_grid_kendo_grid_component__["a" /* KendoGridComponent */],
                __WEBPACK_IMPORTED_MODULE_23__kendo_treeview_kendo_treeview_component__["a" /* KendoTreeviewComponent */],
                __WEBPACK_IMPORTED_MODULE_24__js_in_ng_js_in_ng_component__["a" /* JsInNgComponent */],
                __WEBPACK_IMPORTED_MODULE_25__ngx_treeview_ngx_treeview_component__["a" /* NgxTreeviewComponent */],
                __WEBPACK_IMPORTED_MODULE_26__mat_dialogue_mat_dialogue_component__["a" /* MatDialogueComponent */],
                __WEBPACK_IMPORTED_MODULE_27__register_form_register_form_component__["a" /* RegisterFormComponent */],
                __WEBPACK_IMPORTED_MODULE_28__web_speech_api_web_speech_api_component__["a" /* WebSpeechApiComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_8__shared_index__["b" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_8__shared_index__["a" /* KendoModule */],
                __WEBPACK_IMPORTED_MODULE_13__node_modules_ngx_treeview_src_index__["a" /* TreeviewModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__service_index__["b" /* GridService */], __WEBPACK_IMPORTED_MODULE_9__service_index__["a" /* CategoriesService */], __WEBPACK_IMPORTED_MODULE_12__service_speech_recognition_service__["a" /* SpeechRecognitionService */], __WEBPACK_IMPORTED_MODULE_10__authentication_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__authentication_services_auth_guard_service__["a" /* AuthGuardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/aside/aside.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aside/aside.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <mat-list-item>\n    <a mat-line routerLink=\"home\">Home</a>\n    <mat-icon>home</mat-icon>\n  </mat-list-item>\n  <mat-list-item>\n    <a mat-line routerLink=\"main\">Main</a>\n    <mat-icon>favorite</mat-icon>\n  </mat-list-item>\n  <mat-list-item>\n    <a mat-line routerLink=\"chart\">NG2 chart</a>\n    <mat-icon>show_chart</mat-icon>\n  </mat-list-item>\n  <mat-list-item>\n    <a mat-line routerLink=\"upload\">File Upload</a>\n    <mat-icon>file_upload</mat-icon>\n  </mat-list-item>\n  <mat-list-item>\n    <a mat-line routerLink=\"kendo-grid\">Kendo Grid</a>\n    <mat-icon>grid_on</mat-icon>\n  </mat-list-item>\n  <mat-list-item>\n    <a mat-line routerLink=\"kendo-treeview\">Kendo Treeview</a>\n    <mat-icon>sort</mat-icon>\n  </mat-list-item>\n  <mat-list-item>\n    <a mat-line routerLink=\"js-in-ng\">Js in Angular 4</a>\n    <mat-icon>code</mat-icon>\n  </mat-list-item>\n  <mat-list-item>\n    <a mat-line routerLink=\"ngx-treeview\">NGX TreeView</a>\n    <mat-icon>code</mat-icon>\n  </mat-list-item>\n  <mat-list-item>\n    <a mat-line routerLink=\"mat-dialogue\">Mat Dialogue</a>\n    <mat-icon>code</mat-icon>\n  </mat-list-item>\n  <mat-list-item>\n    <a mat-line routerLink=\"web-speech-api\">Web Speech API</a>\n    <mat-icon>mic</mat-icon>\n  </mat-list-item>\n</mat-nav-list>\n"

/***/ }),

/***/ "../../../../../src/app/aside/aside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideComponent = (function () {
    function AsideComponent() {
    }
    AsideComponent.prototype.ngOnInit = function () {
    };
    AsideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aside',
            template: __webpack_require__("../../../../../src/app/aside/aside.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aside/aside.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AsideComponent);
    return AsideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/authentication/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        console.log('Url:' + url);
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        this.authService.setRedirectUrl(url);
        this.router.navigate([this.authService.getLoginUrl()]);
        return false;
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        var loggedInUser = this.authService.getLoggedInUser();
        if (loggedInUser.role === 'ADMIN') {
            return true;
        }
        else {
            console.log('Unauthorized to open link: ' + state.url);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/authentication/services/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var USERS = [
    new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */](1, 'mahesh', 'm123', 'ADMIN'),
    new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */](2, 'krishna', 'k123', 'USER')
];
var usersObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(USERS);
var AuthService = (function () {
    function AuthService() {
        this.redirectUrl = '/';
        this.loginUrl = '/login';
        this.isloggedIn = false;
    }
    AuthService.prototype.getAllUsers = function () {
        return usersObservable;
    };
    AuthService.prototype.isUserAuthenticated = function (username, password) {
        var _this = this;
        return this.getAllUsers()
            .map(function (users) {
            var user = users.find(function (user) { return (user.username === username) && (user.password === password); });
            if (user) {
                _this.isloggedIn = true;
                _this.loggedInUser = user;
            }
            else {
                _this.isloggedIn = false;
            }
            return _this.isloggedIn;
        });
    };
    AuthService.prototype.isUserLoggedIn = function () {
        return this.isloggedIn;
    };
    AuthService.prototype.getRedirectUrl = function () {
        return this.redirectUrl;
    };
    AuthService.prototype.setRedirectUrl = function (url) {
        this.redirectUrl = url;
    };
    AuthService.prototype.getLoginUrl = function () {
        return this.loginUrl;
    };
    AuthService.prototype.getLoggedInUser = function () {
        return this.loggedInUser;
    };
    AuthService.prototype.logoutUser = function () {
        this.isloggedIn = false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/services/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(userId, username, password, role) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.role = role;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/chart/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n  \t<mat-form-field>\n      <mat-select [(value)]=\"lineChartType\">\n        <mat-option value=\"line\">line Chart</mat-option>\n        <mat-option value=\"bar\">Bar Chart</mat-option>\n        <mat-option value=\"pie\">Pie Chart</mat-option>\n        <mat-option value=\"radar\">Radar Chart </mat-option>\n        <mat-option value=\"polarArea\">polarArea</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <p>You selected: {{lineChartType}}</p>\n    <div style=\"display: block; width: 70%; height: 400px;\">\n      <canvas baseChart [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n  <div class=\"col-md-6\" style=\"margin-bottom: 10px\">\n    <table class=\"table table-responsive table-condensed\">\n      <tr>\n        <th *ngFor=\"let label of lineChartLabels\">{{label}}</th>\n      </tr>\n      <tr *ngFor=\"let d of lineChartData\">\n        <td *ngFor=\"let label of lineChartLabels; let j=index\">{{d && d.data[j]}}</td>\n      </tr>\n    </table>\n    <button (click)=\"randomize()\">CLICK</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartComponent = (function () {
    function ChartComponent() {
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(21,127,0,0.5)',
                borderColor: 'rgba(21,127,0,1)',
                pointBackgroundColor: 'rgba(21,127,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(21,127,0,0.8)'
            },
            {
                backgroundColor: 'rgba(25,153,0,0.5)',
                borderColor: 'rgba(25,153,0,1)',
                pointBackgroundColor: 'rgba(25,153,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(25,153,0,1)'
            },
            {
                backgroundColor: 'rgba(32,191,0,0.5)',
                borderColor: 'rgba(32,191,0,1)',
                pointBackgroundColor: 'rgba(32,191,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(32,191,0,1)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'bar';
    }
    ChartComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    ChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__("../../../../../src/app/chart/chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chart/chart.component.css")]
        })
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar{\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\twidth: 100%;\r\n\theight: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">Copyright &copy; 2017 | SampleApp</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right {\r\n  height: 100%;\r\n  position: absolute;\r\n  right: 0px;\r\n}\r\n\r\nmat-toolbar {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 999;\r\n}\r\n\r\nmat-sidenav-container {\r\n  margin-top: 56px;\r\n  height: calc(100vh - 56px);\r\n}\r\n\r\n.sidenav {\r\n  width: 218px;\r\n}\r\n\r\n.content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: column nowrap;\r\n          flex-flow: column nowrap;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  min-height: calc(100vh - 128px);\r\n  max-width: 100%;\r\n}\r\n\r\n.main-content {\r\n\r\n  max-width: 1100px;\r\n  width: 90%;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  min-height: calc(100vh - 192px);\r\n  max-height: 50%;\r\n  padding: 10px 10px;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n\r\n  mat-sidenav-container {\r\n    margin-top: 64px;\r\n    height: calc(100vh - 64px);\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n  <div routerLink=\"home\">SampleApp</div>\r\n  <span></span>\r\n  <button class=\"right\" mat-button [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>account_circle</mat-icon>\r\n    <span>Account</span>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button routerLink=\"register-form\" mat-menu-item>\r\n      <mat-icon>add</mat-icon>\r\n      <span>Register</span>\r\n    </button>\r\n    <button routerLink=\"auth/login\" mat-menu-item>\r\n      <mat-icon>lock_open</mat-icon>\r\n      <span>Log In</span>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <mat-icon>person</mat-icon>\r\n      <span>Profile</span>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <mat-icon>lock</mat-icon>\r\n      <span>Log Out</span>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <mat-icon>settings</mat-icon>\r\n      <span>Settings</span>\r\n    </button>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n<mat-sidenav-container class=\"container\">\r\n  <mat-sidenav #sidenav class=\"sidenav\" [opened]=\"sidenavOpened\" align=\"start\" [mode]=\"dynamicMode\">\r\n    <app-aside></app-aside>\r\n  </mat-sidenav>\r\n  <div class=\"content\">\r\n    <div class=\"main-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner></mat-spinner>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/js-in-ng/js-in-ng.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/js-in-ng/js-in-ng.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Hello {{name}}</h2>\n  <button mat-raised-button color=\"primary\" (click)=\"CallFunction1()\">Call Function 1</button>\n  <button mat-raised-button color=\"primary\" (click)=\"CallFunction2()\">Call Function 2</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/js-in-ng/js-in-ng.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsInNgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_javascript_sample_js__ = __webpack_require__("../../../../../src/assets/javascript/sample.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_javascript_sample_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_javascript_sample_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JsInNgComponent = (function () {
    function JsInNgComponent() {
        this.name = 'Angular2';
        webGlObject.init();
    }
    JsInNgComponent.prototype.ngOnInit = function () {
    };
    JsInNgComponent.prototype.CallFunction1 = function () {
        myExtObject.func1();
    };
    JsInNgComponent.prototype.CallFunction2 = function () {
        myExtObject.func2();
    };
    JsInNgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-js-in-ng',
            template: __webpack_require__("../../../../../src/app/js-in-ng/js-in-ng.component.html"),
            styles: [__webpack_require__("../../../../../src/app/js-in-ng/js-in-ng.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JsInNgComponent);
    return JsInNgComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kendo-grid/kendo-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kendo-grid/kendo-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"!GridData\" color=\"primary\"></mat-spinner>\n\n<kendo-grid *ngIf=\"GridData\" \n\t\t[kendoGridBinding]=\"GridData\" \n\t\t[pageSize]=\"state.take\" \n\t\t[skip]=\"state.skip\" \n\t\t[sort]=\"state.sort\" \n\t\t[sortable]=\"true\" \n\t\t[pageable]=\"true\" \n\t\t[filterable]=\"true\"\n\t\t[groupable]=\"true\"\n\t\t[scrollable]=\"'none'\" \n\t\t(dataStateChange)=\"dataStateChange($event)\">\n  <kendo-grid-column field=\"VSRMenuEnum\" title=\"VSR ID\" filter=\"numeric\" [filterable]=\"true\" width=\"130\"></kendo-grid-column>\n  <kendo-grid-column field=\"VSRMenuName\" title=\"VSR Menu Name\" width=\"200\"></kendo-grid-column>\n  <kendo-grid-column field=\"NumberOfFiles\" title=\"No of Files\" filter=\"numeric\" [sortable]=\"false\"></kendo-grid-column>\n  <kendo-grid-column field=\"AudioLength\" title=\"Audio Length\" [sortable]=\"false\"></kendo-grid-column>\n</kendo-grid>\n"

/***/ }),

/***/ "../../../../../src/app/kendo-grid/kendo-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KendoGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_index__ = __webpack_require__("../../../../../src/app/service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KendoGridComponent = (function () {
    function KendoGridComponent(gridService) {
        this.gridService = gridService;
        this.state = {
            skip: 0,
            take: 5
        };
    }
    KendoGridComponent.prototype.dataStateChange = function (state) {
        this.state = state;
    };
    KendoGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridService.getGrid().subscribe(function (gridData) {
            console.log(gridData);
            _this.GridData = gridData;
            console.log(_this.GridData);
        });
    };
    KendoGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kendo-grid',
            template: __webpack_require__("../../../../../src/app/kendo-grid/kendo-grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kendo-grid/kendo-grid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_index__["b" /* GridService */]])
    ], KendoGridComponent);
    return KendoGridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kendo-treeview/kendo-treeview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kendo-treeview/kendo-treeview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12\">\n      <div class=\"card\">\n        <div class=\"header\">\n          <h4 class=\"title\">&nbsp;&nbsp; Web Speech API in Angular2</h4>\n        </div>\n        <div class=\"content\">\n          <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n                {{speechData}}\n              </div>\n            </div>\n            <div class=\"col-md-2\"></div>\n          </div>\n          <br />\n          <div class=\"text-center\">\n            <button mat-raised-button name=\"btnActivateSpeechSearchMovie\" id=\"btnActivateSpeechSearchMovie\" (click)=\"activateSpeechSearchMovie()\" [disabled]=\"!showSearchButton\">\n              <mat-icon>mic</mat-icon>\n              Enable Speech Search\n            </button>\n          </div>\n          <br />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/kendo-treeview/kendo-treeview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KendoTreeviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_speech_recognition_service__ = __webpack_require__("../../../../../src/app/service/speech-recognition.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KendoTreeviewComponent = (function () {
    function KendoTreeviewComponent(speechRecognitionService) {
        this.speechRecognitionService = speechRecognitionService;
        this.showSearchButton = true;
        this.speechData = "";
    }
    KendoTreeviewComponent.prototype.ngOnInit = function () {
        console.log("hello");
    };
    KendoTreeviewComponent.prototype.ngOnDestroy = function () {
        this.speechRecognitionService.DestroySpeechObject();
    };
    KendoTreeviewComponent.prototype.activateSpeechSearchMovie = function () {
        var _this = this;
        this.showSearchButton = false;
        this.speechRecognitionService.record()
            .subscribe(
        //listener
        function (value) {
            _this.speechData = value;
            console.log(value);
        }, 
        //errror
        function (err) {
            console.log(err);
            if (err.error == "no-speech") {
                console.log("--restatring service--");
                _this.activateSpeechSearchMovie();
            }
        }, 
        //completion
        function () {
            _this.showSearchButton = true;
            console.log("--complete--");
            _this.activateSpeechSearchMovie();
        });
    };
    KendoTreeviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kendo-treeview',
            template: __webpack_require__("../../../../../src/app/kendo-treeview/kendo-treeview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kendo-treeview/kendo-treeview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_speech_recognition_service__["a" /* SpeechRecognitionService */]])
    ], KendoTreeviewComponent);
    return KendoTreeviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n  margin-top: 64px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: column nowrap;\r\n          flex-flow: column nowrap;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  min-height: calc(100vh - 64px);\r\n  width: 100%;\r\n}\r\n\r\n.main-content {\r\n  max-width: 1200px;\r\n  width: 100%;\r\n  min-height: calc(100vh - 192px);\r\n  max-height: 50%;\r\n  padding: 10px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"main-content\">\n    <div style=\"text-align:center\">\n      <h1>\n        Welcome to {{ title }}!\n      </h1>\n      <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n    </div>\n    <h2>Here are some links to help you start: </h2>\n    <ul>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n      </li>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n      </li>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mat-dialogue/mat-dialogue.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mat-dialogue/mat-dialogue.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Show Kendo UI Grid in MatDialogue</button>\n"

/***/ }),

/***/ "../../../../../src/app/mat-dialogue/mat-dialogue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatDialogueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kendo_grid_kendo_grid_component__ = __webpack_require__("../../../../../src/app/kendo-grid/kendo-grid.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatDialogueComponent = (function () {
    function MatDialogueComponent(dialog) {
        this.dialog = dialog;
    }
    MatDialogueComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__kendo_grid_kendo_grid_component__["a" /* KendoGridComponent */], {
            width: '700px',
            height: '80%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    MatDialogueComponent.prototype.ngOnInit = function () {
    };
    MatDialogueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mat-dialogue',
            template: __webpack_require__("../../../../../src/app/mat-dialogue/mat-dialogue.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mat-dialogue/mat-dialogue.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], MatDialogueComponent);
    return MatDialogueComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-treeview/ngx-treeview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-wrapper\">\n  <button kendoButton *ngIf=\"!opened\" [icon]=\"'folder'\" [look]=\"'outline'\" [primary]=\"true\" (click)=\"open()\">Open dialog</button>\n  <kendo-dialog title=\"Register\" *ngIf=\"opened\" (close)=\"close('cancel')\" [minWidth]=\"250\" [width]=\"450\">\n  <div class=\"example-container\">\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <input matInput placeholder=\"Simple placeholder\" required>\n  </mat-form-field>\n\n  <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n    <mat-label>Both a label and a placeholder</mat-label>\n    <input matInput placeholder=\"Simple placeholder\">\n  </mat-form-field>\n\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <mat-select required>\n      <mat-option>-- None --</mat-option>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-placeholder><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> placeholder</i></mat-placeholder>\n  </mat-form-field>\n</div>\n    <kendo-dialog-actions>\n      <button kendoButton (click)=\"close('no')\">No</button>\n      <button kendoButton (click)=\"close('yes')\" primary=\"true\">Yes</button>\n    </kendo-dialog-actions>\n  </kendo-dialog>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ngx-treeview/ngx-treeview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown {\n  width: 100%;\n  display: inline-block; }\n  .dropdown button {\n    width: 100%;\n    margin-right: .9rem;\n    text-align: left; }\n    .dropdown button::after {\n      position: absolute;\n      right: .6rem;\n      margin-top: .6rem; }\n  .dropdown .dropdown-menu .dropdown-container {\n    padding: 0 .6rem; }\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.example-container form {\n  margin-bottom: 20px; }\n\n.example-container form > * {\n  margin: 5px 0; }\n\n.example-container .mat-radio-button {\n  margin: 0 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngx-treeview/ngx-treeview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxTreeviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgxTreeviewComponent = (function () {
    function NgxTreeviewComponent(fb) {
        this.opened = true;
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    NgxTreeviewComponent.prototype.ngOnInit = function () {
    };
    NgxTreeviewComponent.prototype.close = function (status) {
        console.log("Dialog result: " + status);
        this.opened = false;
    };
    NgxTreeviewComponent.prototype.open = function () {
        this.opened = true;
    };
    NgxTreeviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ngx-treeview',
            template: __webpack_require__("../../../../../src/app/ngx-treeview/ngx-treeview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ngx-treeview/ngx-treeview.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], NgxTreeviewComponent);
    return NgxTreeviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card{\r\n\tpadding:0;\r\n}\r\n.card-inside{\r\n\tpadding:15px;\r\n}\r\n\r\n.card-title{\r\n\tborder-radius: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"card-title\" color=\"primary\">\n    User Register Form\n  </mat-toolbar>\n  <div class=\"card-inside\">\n    <form [formGroup]=\"heroForm\" novalidate>\n      <kendo-textbox-container floatingLabel=\"Name\">\n        <input kendoTextBox formControlName=\"name\" placeholder=\"Name\" required>\n      </kendo-textbox-container>\n      <kendo-textbox-container floatingLabel=\"User Name\">\n        <input kendoTextBox formControlName=\"username\" placeholder=\"User Name\" required>\n      </kendo-textbox-container>\n      <kendo-textbox-container floatingLabel=\"Email ID\">\n        <input kendoTextBox formControlName=\"email\" placeholder=\"Email ID\" required>\n      </kendo-textbox-container>\n      <kendo-textbox-container floatingLabel=\"Mobile Number\">\n        <input kendoTextBox formControlName=\"mobile\" placeholder=\"Mobile Number\" required>\n      </kendo-textbox-container>\n      <div formGroupName=\"address\" required>\n        <kendo-textbox-container floatingLabel=\"Street\">\n          <input kendoTextBox formControlName=\"street\" placeholder=\"Street\" required>\n        </kendo-textbox-container>\n        <kendo-textbox-container floatingLabel=\"City\">\n          <input kendoTextBox formControlName=\"city\" placeholder=\"City\" required>\n        </kendo-textbox-container>\n        <kendo-textbox-container floatingLabel=\"State\">\n          <mat-select matSelect formControlName=\"state\" placeholder=\"State\" required>\n            <mat-option *ngFor=\"let state of states\" [value]=\"state.value\">{{state.viewValue}}</mat-option>\n          </mat-select>\n        </kendo-textbox-container>\n        <kendo-textbox-container floatingLabel=\"ZIP Code\">\n          <input kendoTextBox #zip type=\"number\" formControlName=\"zip\" placeholder=\"ZIP Code\" required>\n          <mat-hint align=\"end\">{{zip.value.length}} / 5</mat-hint>\n        </kendo-textbox-container>\n      </div>\n      <kendo-textbox-container floatingLabel=\"Password\">\n        <input kendoTextBox type=\"password\" formControlName=\"password\" placeholder=\"Password\" required>\n      </kendo-textbox-container>\n      <label>Status</label>\n      <kendo-switch [(ngModel)]=\"checked\"></kendo-switch>\n      <div>\n        <div>\n          <p>DateInput</p>\n          <kendo-dateinput [value]=\"value\"></kendo-dateinput>\n          <p>(use <code>←</code> and <code>→</code> to navigate, <code>↑</code> and <code>↓</code> to update)</p>\n          <p>DatePicker</p>\n          <kendo-datepicker [value]=\"value\"></kendo-datepicker>\n          <p>(use <code>Alt</code>+<code>↓</code> to open the Calendar)</p>\n          <p>TimePicker</p>\n          <kendo-timepicker [value]=\"value\"></kendo-timepicker>\n          <p>(use Alt+↓ to open the time list, Tab to move to the next time section in the popup, ↑ to increment and ↓ to decrement the value)</p>\n        </div>\n        <div>\n          <p>Calendar</p>\n          <kendo-calendar [value]=\"value\"></kendo-calendar>\n        </div>\n      </div>\n    </form>\n  </div>\n</mat-card>\n<p>Form value: {{ heroForm.value | json }}</p>\n<p>Form status: {{ heroForm.status | json }}</p>\n"

/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterFormComponent = (function () {
    function RegisterFormComponent(fb) {
        this.fb = fb;
        this.value = new Date();
        this.states = [
            { value: 'TamilNadu', viewValue: 'TamilNadu' },
            { value: 'Kerala', viewValue: 'Kerala' },
            { value: 'Delhi', viewValue: 'Delhi' },
            { value: 'MadhyaPradesh', viewValue: 'MadhyaPradesh' },
            { value: 'AndhraPradsh', viewValue: 'AndhraPradsh' },
            { value: 'Karnataka', viewValue: 'Karnataka' },
            { value: 'JammuKashmir', viewValue: 'JammuKashmir' }
        ];
        this.createForm();
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
    };
    RegisterFormComponent.prototype.createForm = function () {
        this.heroForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            address: this.fb.group({
                street: '',
                city: '',
                state: '',
                zip: ''
            }),
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
    };
    RegisterFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__("../../../../../src/app/register-form/register-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register-form/register-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/grid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GridService = (function () {
    function GridService(http) {
        this.http = http;
        this.grid_endpoint = "VSR";
    }
    GridService.prototype.getGrid = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].end_point_url + this.grid_endpoint + "/")
            .map(function (resp) {
            return resp.json();
        })
            .catch(this.handleError);
    };
    GridService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error');
    };
    GridService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GridService);
    return GridService;
}());



/***/ }),

/***/ "../../../../../src/app/service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_service__ = __webpack_require__("../../../../../src/app/service/grid.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__grid_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__northwind_service__ = __webpack_require__("../../../../../src/app/service/northwind.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__northwind_service__["a"]; });




/***/ }),

/***/ "../../../../../src/app/service/northwind.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NorthwindService */
/* unused harmony export ProductsService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_data_query__ = __webpack_require__("../../../../@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NorthwindService = (function (_super) {
    __extends(NorthwindService, _super);
    function NorthwindService(http, tableName) {
        var _this = _super.call(this, null) || this;
        _this.http = http;
        _this.tableName = tableName;
        _this.BASE_URL = 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/';
        return _this;
    }
    NorthwindService.prototype.query = function (state) {
        var _this = this;
        this.fetch(this.tableName, state)
            .subscribe(function (x) { return _super.prototype.next.call(_this, x); });
        console.log("THE QUERY EXECUTERD");
    };
    NorthwindService.prototype.fetch = function (tableName, state) {
        var queryStr = Object(__WEBPACK_IMPORTED_MODULE_2__progress_kendo_data_query__["e" /* toODataString */])(state) + "&$count=true";
        return this.http
            .get("" + this.BASE_URL + tableName + "?" + queryStr)
            .map(function (response) { return ({
            data: response['value'],
            total: parseInt(response["@odata.count"], 10)
        }); });
    };
    return NorthwindService;
}(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));

var ProductsService = (function (_super) {
    __extends(ProductsService, _super);
    function ProductsService(http) {
        return _super.call(this, http, "Products") || this;
    }
    ProductsService.prototype.queryForCategory = function (_a, state) {
        var CategoryID = _a.CategoryID;
        this.query(Object.assign({}, state, {
            filter: {
                filters: [{
                        field: "CategoryID", operator: "eq", value: CategoryID
                    }],
                logic: "and"
            }
        }));
    };
    ProductsService.prototype.queryForProductName = function (ProductName, state) {
        this.query(Object.assign({}, state, {
            filter: {
                filters: [{
                        field: "ProductName", operator: "contains", value: ProductName
                    }],
                logic: "and"
            }
        }));
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductsService);
    return ProductsService;
}(NorthwindService));

var CategoriesService = (function (_super) {
    __extends(CategoriesService, _super);
    function CategoriesService(http) {
        return _super.call(this, http, "Categories") || this;
    }
    CategoriesService.prototype.queryAll = function (st) {
        var state = Object.assign({}, st);
        delete state.skip;
        delete state.take;
        return this.fetch(this.tableName, state);
    };
    CategoriesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CategoriesService);
    return CategoriesService;
}(NorthwindService));



/***/ }),

/***/ "../../../../../src/app/service/speech-recognition.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognitionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeechRecognitionService = (function () {
    function SpeechRecognitionService(zone) {
        this.zone = zone;
    }
    SpeechRecognitionService.prototype.record = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].create(function (observer) {
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            _this.speechRecognition = new webkitSpeechRecognition();
            _this.speechRecognition.continuous = true;
            //this.speechRecognition.interimResults = true;
            _this.speechRecognition.lang = 'en-us';
            _this.speechRecognition.maxAlternatives = 1;
            _this.speechRecognition.onresult = function (speech) {
                var term = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log("Unrecognized result - Please try again");
                        }
                        else {
                            term = __WEBPACK_IMPORTED_MODULE_2_lodash__["trim"](transcript);
                            console.log("Did you said? -> " + term + " , If not then say something else...");
                        }
                    }
                }
                _this.zone.run(function () {
                    observer.next(term);
                });
            };
            _this.speechRecognition.onerror = function (error) {
                observer.error(error);
            };
            _this.speechRecognition.onend = function () {
                observer.complete();
            };
            _this.speechRecognition.start();
            console.log("Say something - We are listening !!!");
        });
    };
    SpeechRecognitionService.prototype.DestroySpeechObject = function () {
        if (this.speechRecognition)
            this.speechRecognition.stop();
    };
    SpeechRecognitionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], SpeechRecognitionService);
    return SpeechRecognitionService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_module__ = __webpack_require__("../../../../../src/app/shared/material.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__material_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kendo_module__ = __webpack_require__("../../../../../src/app/shared/kendo.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__kendo_module__["a"]; });




/***/ }),

/***/ "../../../../../src/app/shared/kendo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KendoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_upload__ = __webpack_require__("../../../../@progress/kendo-angular-upload/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dialog__ = __webpack_require__("../../../../@progress/kendo-angular-dialog/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_buttons__ = __webpack_require__("../../../../@progress/kendo-angular-buttons/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__ = __webpack_require__("../../../../@progress/kendo-angular-inputs/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dateinputs__ = __webpack_require__("../../../../@progress/kendo-angular-dateinputs/dist/es/main.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var KendoModule = (function () {
    function KendoModule() {
    }
    KendoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_upload__["a" /* UploadModule */],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dialog__["a" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_buttons__["a" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__["a" /* InputsModule */],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dateinputs__["a" /* DateInputsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_upload__["a" /* UploadModule */],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dialog__["a" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_buttons__["a" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__["a" /* InputsModule */],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dateinputs__["a" /* DateInputsModule */]
            ]
        })
    ], KendoModule);
    return KendoModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatMenuModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatMenuModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-preview {\r\n  position: relative;\r\n  padding: 10px;\r\n  top: 20px;\r\n}\r\n\r\nevent-log {\r\n  position: relative;\r\n  top: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = " <kendo-upload\n        [autoUpload]=\"false\"\n        [saveUrl]=\"uploadSaveUrl\"\n        [removeUrl]=\"uploadRemoveUrl\"\n        [restrictions]=\"uploadRestrictions\"\n        (clear)=\"clearEventHandler($event)\"\n        (remove)=\"removeEventHandler($event)\"\n        (complete)=\"completeEventHandler($event)\">\n      </kendo-upload>\n    \n    \n      <div *ngIf=\"imagePreviews.length\" class=\"img-preview example-config\">\n        <h3>Preview selected images</h3>\n        <img *ngFor=\"let image of imagePreviews\" \n          [src]=\"image.src\" \n          alt=\"image preview\" \n          style=\"width: 200px; margin: 10px;\" />\n      </div>"

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UploadComponent = (function () {
    function UploadComponent() {
        this.events = [];
        this.imagePreviews = [];
        this.uploadRemoveUrl = "removeUrl";
        this.uploadRestrictions = {
            allowedExtensions: [".jpg", ".png"]
        };
        this.uploadSaveUrl = "saveUrl";
    }
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__("../../../../../src/app/upload/upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload/upload.component.css")]
        })
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web-speech-api/web-speech-api.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web-speech-api/web-speech-api.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12\">\n      <div class=\"card\">\n        <div class=\"header\">\n          <h4 class=\"title\">&nbsp;&nbsp; Web Speech API in Angular2</h4>\n        </div>\n        <div class=\"content\">\n          <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n                {{speechData}}\n              </div>\n            </div>\n            <div class=\"col-md-2\"></div>\n          </div>\n          <br />\n          <div class=\"text-center\">\n            <button mat-raised-button name=\"btnActivateSpeechSearchMovie\" id=\"btnActivateSpeechSearchMovie\" (click)=\"activateSpeechSearchMovie()\" [disabled]=\"!showSearchButton\">\n              <mat-icon>mic</mat-icon>\n              Enable Speech Search\n            </button>\n          </div>\n          <br />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/web-speech-api/web-speech-api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSpeechApiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_speech_recognition_service__ = __webpack_require__("../../../../../src/app/service/speech-recognition.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebSpeechApiComponent = (function () {
    function WebSpeechApiComponent(speechRecognitionService) {
        this.speechRecognitionService = speechRecognitionService;
        this.showSearchButton = true;
        this.speechData = "";
    }
    WebSpeechApiComponent.prototype.ngOnInit = function () {
        console.log("hello");
    };
    WebSpeechApiComponent.prototype.ngOnDestroy = function () {
        this.speechRecognitionService.DestroySpeechObject();
    };
    WebSpeechApiComponent.prototype.activateSpeechSearchMovie = function () {
        var _this = this;
        this.showSearchButton = false;
        this.speechRecognitionService.record()
            .subscribe(
        //listener
        function (value) {
            _this.speechData = value;
            console.log(value);
        }, 
        //errror
        function (err) {
            console.log(err);
            if (err.error == "no-speech") {
                console.log("--restatring service--");
                _this.activateSpeechSearchMovie();
            }
        }, 
        //completion
        function () {
            _this.showSearchButton = true;
            console.log("--complete--");
            _this.activateSpeechSearchMovie();
        });
    };
    WebSpeechApiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-web-speech-api',
            template: __webpack_require__("../../../../../src/app/web-speech-api/web-speech-api.component.html"),
            styles: [__webpack_require__("../../../../../src/app/web-speech-api/web-speech-api.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_speech_recognition_service__["a" /* SpeechRecognitionService */]])
    ], WebSpeechApiComponent);
    return WebSpeechApiComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/javascript/sample.js":
/***/ (function(module, exports) {

var myExtObject = (function() {

  return {
    func1: function() {
      alert('function 1 called');
    },
    func2: function() {
      alert('function 2 called');
    }
  }

})(myExtObject || {})


var webGlObject = (function() {
  return {
    init: function() {
      alert('webGlObject initialized');
    }
  }
})(webGlObject || {})


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    end_point_url: "http://localhost:5000/"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map