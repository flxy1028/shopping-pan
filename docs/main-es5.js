function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: PAGE_COMPONENTS, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGE_COMPONENTS", function () {
      return PAGE_COMPONENTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages_home_shopping_location_shopping_location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/home/shopping-location/shopping-location.component */
    "./src/app/pages/home/shopping-location/shopping-location.component.ts");

    var PAGE_COMPONENTS = [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _pages_home_shopping_location_shopping_location_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingLocationComponent"]];
    var appRoutes = [{
      path: 'home',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
      path: 'localtion/:id',
      component: _pages_home_shopping_location_shopping_location_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingLocationComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, {
        useHash: true,
        enableTracing: false
      })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, {
            useHash: true,
            enableTracing: false
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ShopPlan';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_home_shopping_location_shopping_location_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/home/shopping-location/shopping-location.component */
    "./src/app/pages/home/shopping-location/shopping-location.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _pages_home_shopping_location_shopping_location_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingLocationComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]].concat(_toConsumableArray(_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["PAGE_COMPONENTS"])),
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 6,
      vars: 0,
      consts: [[2, "margin-top", "30px", "text-align", "center"], ["routerLink", "/localtion/1"], ["routerLink", "/localtion/2"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u5F00\u5FC3\u82B1\u7532");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u7231\u4E50\u513F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/shopping-location/shopping-location.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/home/shopping-location/shopping-location.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ShoppingLocationComponent */

  /***/
  function srcAppPagesHomeShoppingLocationShoppingLocationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingLocationComponent", function () {
      return ShoppingLocationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ShoppingLocationComponent =
    /*#__PURE__*/
    function () {
      function ShoppingLocationComponent(route) {
        _classCallCheck(this, ShoppingLocationComponent);

        this.route = route;
        this.colorObj = {
          color1: '',
          color2: '',
          color11: '',
          color22: ''
        };
      }

      _createClass(ShoppingLocationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (params) {
            if (params.id === '1') {
              _this.colorChange('color1', 'color2');
            }

            if (params.id === '2') {
              _this.colorChange('color11', 'color22');
            }
          });
        }
      }, {
        key: "colorChange",
        value: function colorChange(name1, name2) {
          for (var item in this.colorObj) {
            if (this.colorObj.hasOwnProperty(item)) {
              this.colorObj[item] = '';
            }
          }

          this.colorObj[name1] = 'color1';
          this.colorObj[name2] = 'color2';
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {// const svgPan = svgPanZoom('#localtion-svg', {
          //   zoomEnabled: true,
          //   controlIconsEnabled: false,
          //   fit: true,
          //   center: true,
          // });
          // svgPan.zoomAtPointBy({x: 500, y: 500});
        }
      }]);

      return ShoppingLocationComponent;
    }();

    ShoppingLocationComponent.ɵfac = function ShoppingLocationComponent_Factory(t) {
      return new (t || ShoppingLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ShoppingLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShoppingLocationComponent,
      selectors: [["app-shopping-location"]],
      decls: 1969,
      vars: 18,
      consts: [[1, "svg-box"], ["id", "localtion-svg", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 395.41 217.39"], ["id", "gg_43", "x1", "-64.17", "y1", "471.07", "x2", "-59.9", "y2", "475.36", "gradientTransform", "matrix(2.83, 0, 0, -2.83, 195.67, 1386.07)", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#acb0b4"], ["offset", "1", "stop-color", "#fff"], ["id", "gg_44", "x1", "-59.75", "y1", "474.63", "x2", "-63.99", "y2", "472.17", "gradientTransform", "matrix(2.83, 0, 0, -2.83, 195.67, 1386.07)", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#5498c7"], ["offset", "0.54", "stop-color", "#497db1"], ["offset", "1", "stop-color", "#35649d"], ["id", "gg_43-2", "x1", "-47.38", "y1", "477.38", "x2", "-43.11", "y2", "481.68", 0, "xlink", "href", "#gg_43"], ["id", "gg_44-2", "x1", "-42.95", "y1", "480.95", "x2", "-47.2", "y2", "478.48", 0, "xlink", "href", "#gg_44"], ["id", "gg_43-3", "x1", "-37.17", "y1", "450.34", "x2", "-33.86", "y2", "453.66", 0, "xlink", "href", "#gg_43"], ["id", "gg_44-3", "x1", "-33.74", "y1", "453.1", "x2", "-37.03", "y2", "451.19", 0, "xlink", "href", "#gg_44"], ["id", "gg_43-4", "x1", "-23.64", "y1", "453.62", "x2", "-20.8", "y2", "456.48", 0, "xlink", "href", "#gg_43"], ["id", "gg_44-4", "x1", "-20.69", "y1", "456", "x2", "-23.52", "y2", "454.35", 0, "xlink", "href", "#gg_44"], ["id", "gg_43-5", "x1", "-5.04", "y1", "470.83", "x2", "-2.19", "y2", "473.69", 0, "xlink", "href", "#gg_43"], ["id", "gg_44-5", "x1", "-2.09", "y1", "473.21", "x2", "-4.92", "y2", "471.56", 0, "xlink", "href", "#gg_44"], ["id", "gg_43-6", "x1", "-9.26", "y1", "469.59", "x2", "-6.41", "y2", "472.45", 0, "xlink", "href", "#gg_43"], ["id", "gg_44-6", "x1", "-6.31", "y1", "471.97", "x2", "-9.14", "y2", "470.32", 0, "xlink", "href", "#gg_44"], ["id", "gg_43-7", "x1", "-15.07", "y1", "469.87", "x2", "-12.22", "y2", "472.74", 0, "xlink", "href", "#gg_43"], ["id", "gg_44-7", "x1", "-12.12", "y1", "472.25", "x2", "-14.95", "y2", "470.61", 0, "xlink", "href", "#gg_44"], ["id", "gg_43-8", "x1", "-19.36", "y1", "471.99", "x2", "-22.21", "y2", "474.85", 0, "xlink", "href", "#gg_43"], ["id", "gg_44-8", "x1", "-22.31", "y1", "474.37", "x2", "-19.48", "y2", "472.72", 0, "xlink", "href", "#gg_44"], ["id", "gg_43-9", "x1", "-29.77", "y1", "478.94", "x2", "-26.92", "y2", "481.81", 0, "xlink", "href", "#gg_43"], ["id", "gg_44-9", "x1", "-26.82", "y1", "481.32", "x2", "-29.65", "y2", "479.68", 0, "xlink", "href", "#gg_44"], ["id", "gg_43-10", "x1", "-32.82", "y1", "475.32", "x2", "-29.98", "y2", "478.19", 0, "xlink", "href", "#gg_43"], ["id", "gg_44-10", "x1", "-29.87", "y1", "477.7", "x2", "-32.7", "y2", "476.05", 0, "xlink", "href", "#gg_44"], ["id", "gg_43-11", "x1", "-11.83", "y1", "472.42", "x2", "-8.98", "y2", "475.28", 0, "xlink", "href", "#gg_43"], ["id", "gg_44-11", "x1", "-8.88", "y1", "474.8", "x2", "-11.71", "y2", "473.15", 0, "xlink", "href", "#gg_44"], ["id", "gg_43-12", "x1", "-33.43", "y1", "447.64", "x2", "-30.11", "y2", "450.98", 0, "xlink", "href", "#gg_43"], ["id", "gg_44-12", "x1", "-29.99", "y1", "450.41", "x2", "-33.29", "y2", "448.49", 0, "xlink", "href", "#gg_44"], ["id", "gg_43-13", "x1", "57.46", "y1", "441.23", "x2", "62.47", "y2", "441.23", 0, "xlink", "href", "#gg_43"], ["id", "gg_40", "x1", "62.09", "y1", "442.81", "x2", "57.84", "y2", "440.35", "gradientTransform", "matrix(2.83, 0, 0, -2.83, 195.67, 1386.07)", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#e1553e"], ["offset", "1", "stop-color", "#da251d"], ["id", "gg_43-14", "x1", "13.47", "y1", "471.9", "x2", "18.49", "y2", "471.9", 0, "xlink", "href", "#gg_43"], ["id", "gg_40-2", "x1", "18.1", "y1", "473.49", "x2", "13.86", "y2", "471.02", 0, "xlink", "href", "#gg_40"], ["id", "gg_43-15", "x1", "39.42", "y1", "441.99", "x2", "43.64", "y2", "441.99", 0, "xlink", "href", "#gg_43"], ["id", "gg_40-3", "x1", "43.32", "y1", "443.32", "x2", "39.74", "y2", "441.24", 0, "xlink", "href", "#gg_40"], ["id", "gg_43-16", "x1", "52.07", "y1", "467.85", "x2", "55.35", "y2", "472.28", 0, "xlink", "href", "#gg_43"], ["id", "gg_38", "x1", "55.99", "y1", "471.53", "x2", "51.75", "y2", "469.07", "gradientTransform", "matrix(2.83, 0, 0, -2.83, 195.67, 1386.07)", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#e6994b"], ["offset", "0.54", "stop-color", "#de7840"], ["offset", "1", "stop-color", "#d95836"], ["id", "gg_43-17", "x1", "62.44", "y1", "455.83", "x2", "66.11", "y2", "460.77", 0, "xlink", "href", "#gg_43"], ["id", "gg_34", "x1", "66.82", "y1", "459.93", "x2", "62.08", "y2", "457.18", "gradientTransform", "matrix(2.83, 0, 0, -2.83, 195.67, 1386.07)", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#937539"], ["offset", "0.54", "stop-color", "#9d7c3b"], ["offset", "1", "stop-color", "#a7833e"], ["id", "gg_43-18", "x1", "45.12", "y1", "468.06", "x2", "48.51", "y2", "468.06", 0, "xlink", "href", "#gg_43"], ["id", "gg_38-2", "x1", "48.25", "y1", "469.13", "x2", "45.38", "y2", "467.47", 0, "xlink", "href", "#gg_38"], ["id", "gg_43-19", "x1", "35.13", "y1", "463.34", "x2", "37.59", "y2", "463.34", 0, "xlink", "href", "#gg_43"], ["id", "gg_38-3", "x1", "37.4", "y1", "464.11", "x2", "35.32", "y2", "462.9", 0, "xlink", "href", "#gg_38"], ["id", "gg_43-20", "x1", "39.42", "y1", "446.92", "x2", "43.64", "y2", "446.92", 0, "xlink", "href", "#gg_43"], ["id", "gg_40-4", "x1", "35.67", "y1", "456.47", "x2", "32.1", "y2", "454.4", 0, "xlink", "href", "#gg_40"], ["id", "gg_43-21", "x1", "-19.89", "y1", "449.89", "x2", "-17.04", "y2", "452.75", 0, "xlink", "href", "#gg_43"], ["id", "gg_44-13", "x1", "-18.11", "y1", "451.55", "x2", "-20.94", "y2", "449.9", 0, "xlink", "href", "#gg_44"], ["id", "gg_43-22", "x1", "-14.98", "y1", "475.55", "x2", "-12.13", "y2", "478.41", 0, "xlink", "href", "#gg_43"], ["id", "gg_44-14", "x1", "-10.6", "y1", "477.75", "x2", "-13.43", "y2", "476.1", 0, "xlink", "href", "#gg_44"], ["id", "coverage"], ["points", "76.24 6.77 77.15 8.46 72.83 28.9 71.88 27.27 76.24 6.77", 1, "cls-1"], ["d", "M51.24,41.92l1,1.58h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l-.12.25c0,.08-.07.15-.11.22h0l0,0h0v0h0v0h0l0,0h-.08v0h0l-.06.12h0l-.08.14h-.3l0,.05h0v0h0v0h-.06v0H51l-.27-.39L50,44.34l.14-.23h.32l0,0h0v0h0v0h0l0,0h0l0,0v0h.06l0-.07h0a1,1,0,0,1,.1-.17h0l0-.11h0l0,0h0l0,0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0v0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0Z", 1, "cls-2"], ["d", "M50,44.34l.92,1.38.14.2,0,0h-.05l0,.07h0a13,13,0,0,1-.81,1.28h0l-.18.26h0l0,0h0v0H49.8l-1.07-1.57a2.83,2.83,0,0,1,.2-.28h0v0h0v0h.13l0-.06h.1l0,0h0v0h0l.24-.38h0l0,0h0l0,0h.06a.75.75,0,0,1,.07-.12h0l0,0h0v0h0v0h0v0h0v0H50Z", 1, "cls-2"], ["d", "M48.73,46.27l1.07,1.57-.2.27h0l-.06.08h0l-.3.39h0c-.13.16-.25.33-.38.48h0c-.26.33-.52.65-.76.93h0l0,0H48v0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,.05h0v0h-.06v0h-.29l0,0h0l0,0h0l-.07.07h0l0,.05h0l0,0H47l-.28.3h-.11v0h-.08v0h0v0h0v0h0v0h0l0,0h0v0h0l0,0h0l-.07.07h0l-.1.1h0l-.12.14h0l-.06.06h0l0,0h0l0,0h0l0,0h0v0h0v0h0l0,0h0l0,0h0l0,0h0v0h0v0h0l0,0h0v0l0,0h0v0h0l0,0v0h0v0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0,0,0,0,0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l-.07.07h0l0,0h0l-.13.13h0v0h0l0,0h0l0,0h0l0,0h0l0,0v0l0,0,0,0,0,0h0v0l0,0h0l0,0,0,0v0h0l0,0h0l0,0h0l0,0v0h0l0,0,0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0v0h0l0,0,0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0v0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0l-.83-1.17-.28-.38.31-.33h0l.16-.18h0l0,0h0l.09-.09h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0,0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0l.14-.15h0l.21-.23h0l0-.05h0l0,0,0,0h0l0,0h0v0h0l0,0,0,0v0h0l0,0h0l0,0h0v0h0l0,0h0v0h0l0,0h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0v0h0l0,0h0l0,0h0v0h0l0,0h0v0h0v0h0l0,0h0l0,0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0l0,0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0l0,0h0l.11-.11.23-.26h0l0,0h0v0h0l0,0h.11l0,0h0l.27-.3h0l.06-.06h.07l0,0h0l.21-.23h0l.49-.58h0l0,0h0v0h0v0h0v0h0v0h0l.17-.21h0l.11-.13h.15v0h0l0,0h0c.22-.27.44-.55.65-.83h0l0,0h0l0,0h0v0h0v0h0v0h.05a1.09,1.09,0,0,1,.13-.17Z", 1, "cls-3"], ["points", "146.25 26.71 146.88 28.39 145.11 41.26 144.46 39.62 146.25 26.71", 1, "cls-4"], ["d", "M42.88,54l.68.94H43.5l-.24.3h-.1l-.17.22h-.06l-.16.21-.14.18h0l0,0h0v0h-.06l-.07.1-1.12-1.54.35-.46h0v0h.13l0,0h0l.2-.26h.18l.21-.25.43.61Z", 1, "cls-3"], ["d", "M41.34,54.8l1.12,1.55-.1.13h0l0,0h0v0h0v0h0v0h0a2.43,2.43,0,0,0-.14.2h0l0,0h0L42,57h0v0h0v0h-.05l0,.09h0l-.36.51h0l-.08.12h0l0,0v0h0v0h0v0h-.05l-.1.14c-.2.3-.4.59-.59.89h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0H40v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0l0,.07h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,.05v0l0,0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v.08h0l0,0h0v0h0v0l0,0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0l0,.11h0l0,.08h0l-.05.1h0l-.1.19h0c-.14.29-.29.6-.43.91h0v0h0l0,.06h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0l0,.06h0l-.06.14-.12.27h0v0h0l0,.06h0l0,.08h0l0,.06h0v0h0L38,64h0v0h0v0h0l0,.06h0l0,.06h0v0h0l0,.06h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,.09v0h0l0,0h0v0h0v0h0l0,.06h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v.12l0,0v.12l0,0v.12h0v0h0l0,0v.14l0,0v.17l0,0v.12h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0l0,0h0v0l0,.08h0l0,.08h0v0h0l0,.06h0v0h0v0h0v0l0,.06h0v.06h0c-.07.24-.14.48-.2.74h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.06h0v0h0v0c-.06.3-.13.6-.18.9h0l0,.11v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0L34.5,69.65l.06-.32h0l0-.09h0c0-.17.06-.34.1-.51v0l0-.11c.08-.36.15-.72.24-1.06s.17-.68.27-1l0-.11h.06v0h0v0h0v0h0l0-.07h0v0h0v0h0l0-.1h0l0-.05h0v0h0v0h0v0h0v0h0v0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0q.24-.59.48-1.2h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0v0h0v0h0v0l0,0h0v-.09h0l0,0h0v0h0v0h0v0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0-.09h0l0,0h0l0-.06h0l.3-.68h0l.18-.4h0l0,0h0l0-.06h0l0,0h0v0h0v0h0l0,0h0v-.06l0,0h0v0h0v0l0,0v0h0v0h0l0-.06v-.05h0l0,0h0v0h0v0l0,0h0v0h0v0l0,0h0v0h0v0l0,0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l.06-.11h0l0-.1h0l0-.08h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0l0,0v0h0v0l0,0v0l0,0v-.07h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0l0,0h0l0,0c.11-.2.22-.39.33-.56l.47-.72h0l.05-.07h0l0,0h0v0h0l0,0h0v0h0l0-.06h0L39.8,57v0h0v0h0v0h0v0h0v0h0l0-.05h0l.51-.74h0l0,0h0l0,0h0v0h0v0h0v0h0v0l.09-.12c.1-.14.19-.28.29-.41h.08v0h0l0,0h0l.22-.31Z", 1, "cls-2"], ["points", "32.55 88.86 33.74 90.29 1.34 98.14 0 96.74 32.55 88.86", 1, "cls-3"], ["points", "209.14 17.18 209.49 18.91 207.34 47.38 206.97 45.73 209.14 17.18", 1, "cls-5"], ["d", "M225,76.13h-.7l0,0H224l0,0h-.1l-.06,0h0l-.05,0h-.11l-.06,0h-.06l-.06,0h0l-.06,0h-.06l-.06,0h-.06l-.07,0h0l-.06,0H223l-.06,0h0l-.07,0h0l-.14,0h0l-.06,0h0l-.22-.06h0l-.29-.08h0l-.08,0h0l-.08,0h0l-.07,0h0l-.08,0h0l-.08,0h0l-.08,0h0l-.08,0h0l-.08,0h0l-.08,0h0l-.09,0h0l-.08,0h0l-.08,0h0l-.09,0h0l-.17,0h0l-.08,0h0l-.18,0h0l-2.25-.59h0l-.09,0h0l-.2-.06h0l-.2,0h0l-.1,0h0l-.1,0h0l-.11,0h0l-.1,0h0l-.1,0h0l-.1,0h0l-.1,0h0l-.1,0h0L217,74h0l-.1,0h0l-.1,0h0l-.1,0h0l-.11,0h0l-.1,0h0l-.1,0h0l-.11,0h0l-.1,0h0l-.1,0h0l-.11,0h0l-.1,0h0l-.11,0h0l-.1,0h0l-.1,0h0l-.11,0h0l-.1,0h0l-.11,0h0l-.1,0h0l-.1,0h0l-.11,0-.1,0-.11,0-.1,0-.1,0h0l-.11,0-.1,0-.11,0-.1,0-.1,0-.11,0-.1,0-.11,0-.1,0-.1,0-.1,0h0l-.11,0L213,73h0l-.1,0h0l-.2,0h0l-2.54-.67-1.25-.32h0l-.17,0h0l-.24-.06h0l-.17,0h0l-.08,0h0l-.08,0h0l-.07,0h0l-.08,0h0l-.08,0h0l-.08,0h0l-.07,0h0l-.22-.06-.08,0h-.07l-.07,0h0l-.07,0h0l-.07,0h0l-.07,0h0l-.07,0H207l-.07,0-.06,0h-.07l-.06,0h0l-.07,0h-.06l-.06,0h-.06l-.06,0,0,0h-.12l-.05,0h-.06l0,0H206l0,0h-.1l-.05,0h-.22l-.05,0h-.1l0,0h-.09l-.05,0h-.05l0,0H205l-.05,0h0l0,0h0l-.05,0h0l-.05,0h0l0,0h0l-.1,0h0l-.13,0h0c-.59-.2-1.14-.42-1.67-.65l-.87-.41h0l-.23-.12-.07,0,0,0h0l-.07,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l-.25-.15h0l0,0-.18-.11h0l0,0h0l0,0h0l-.06,0h0l-.06,0h0l0,0h0l-.06,0h0l-.06,0h0l-.06,0h0l0,0h0l0,0h0l0,0h0l0,0h0l-.05,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h-.05l-.09-.07h0c-.29-.21-.48-.36-.55-.42l-.42-1.58,0,0h0l0,0h.07l0,0h.05l0,0h0l0,0h0l0,0h0l0,0h0l.27.2h0l.12.09h0l0,0h0l0,0h0l0,0h0l0,0h0l.07,0h0l0,0h0l0,0h0c.32.22.7.46,1.13.72l.3.16h0l0,0h0l0,0h0l.07,0h0l0,0h0l0,0h0l0,0h0l0,0,0,0,0,0,0,0,0,0h0l0,0h0l0,0,0,0,0,0h0l0,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0h0l0,0,.08,0h0l0,0,0,0h0l0,0,0,0h0l0,0h0l0,0,0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l.08,0h0l.4.18h0l.34.15h0l0,0h.05l0,0h0l0,0h0l.05,0h0l0,0,.05,0,0,0h0l0,0h0l0,0h.05l0,0,0,0h0l0,0h0l.05,0h0l0,0h.05l0,0,.05,0h0l.05,0h0l.05,0h0l.09,0,.05,0h0l.05,0h.05l0,0,0,0h.05l0,0h.05l.05,0h0l0,0h.1l0,0h0l.05,0h.14l.1,0h0l.24.07h0l1.38.35h0l.13,0h0l.07,0h0l.29.07h0l.07,0h0l.07,0h0l.08,0h0l.07,0h0l.08,0h0l.08,0h0l.07,0h0l.08,0h0l.08,0h0l.08,0h0l.08,0h0l.08,0h0l.08,0h0l.09,0h0l.08,0h0l.08,0h0l.09,0h0l.08,0h0l.09,0h0l.08,0h0l.18,0h0l.09,0h0l.08,0h0l.09,0h0l.09,0h0l.09,0h0l.09,0h0l.1,0h0l.09,0h0l.09,0h0l.09,0h0l.1,0h0l.09,0h0l.09,0h0l.1,0h0l.09,0,.1,0h0l.1,0h0l.09,0h0l.1,0,.1,0h0l.09,0h0l.1,0h0l.1,0,.1,0h0l.1,0h0l.1,0h0l.2.05h0l.4.11h0l.1,0h0l.1,0h0l.1,0h0l.11,0h0l.1,0h0l.1,0h0l.1,0h0l.11,0h0l.2.06h0l.31.08h0l.11,0h0l.31.08h0l.1,0h0l.53.14h0l.1,0h0l.11,0h0l.1,0h0l.21.06h0l.11,0h0l.1,0h0l.1,0h0l.11,0h0l.1,0h0l.11,0h0l.1,0h0l.11,0h0l.2.06h0l.42.11,1.33.34h0l.89.24h0l.68.17h0l.19,0h0l.28.07h0l.18.05h0l.09,0h0l.09,0h0l.09,0h0l.09,0h0l.09,0h0l.09,0h0l.09,0h0l.08,0h0l.09,0h0l.09,0h0l.08,0h0l.09,0h0l.08,0h0l.08,0h0l.09,0h0l.08,0h0l.16,0h0l.77.2h0l.35.09h0l.27.07h0l.25.06h0l.06,0h.06l.06,0h0l.06,0h0l.11,0,.06,0h.05l.05,0h.11l.05,0h.14l.05,0h.82", 1, "cls-6"], ["points", "332.45 51.9 332.21 53.59 332.08 51.71 332.32 50.01 332.45 51.9", 1, "cls-7"], ["d", "M297.45,79.34l-.06,1.58-.13-.07h0l-.07,0h0l0,0h-.06l0,0H297l0,0h-.08l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0c-.19-.12-.37-.25-.54-.38l-.29-.23h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0v0h0v0h0v0l0,0h0v0l0,0,0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0l-.05,0h0l0,0,0,0h0v0h0l0,0h0l0,0h0v0h0v0h0v0h0l0,0h0l0,0v0h0v0h0l0,0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0l0,0h0v0h0v0l0,0h0v0h0v0h0l0,0h0l-.13-.17h0c-.08-.12-.16-.23-.23-.35h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l-.12-.21h0l0,0h0v0h0v0h0v0h0v0h0m.05-1.6v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,.06h0v0h0l0,.05h0l0,0h0l.12.17h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0v0h0l0,0h0l.29.31h0l0,0h0v0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l.06,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h.06l0,0h.05l0,0h0l0,0h.06l0,0H297l0,0h.06l0,0h.08l0,0h.06l.06,0h0l.12.07", 1, "cls-6"], ["d", "M315.11,81.38h-8.43l-.11,0h-2l-.48,0h-1l-.77,0h-1.28a12.47,12.47,0,0,1-1.68-.42,11.71,11.71,0,0,1-1.24-.5h-.77l.07-1.58h0l.4.22H298l.18.09.32.15h0l.13,0h.06l.06,0h0l.08,0h0l0,0h0l.06,0h0l.13.05h1.12l.11,0h.05l.14,0h0l.6.13.7.1h0l.22,0h3.77l.3,0h0l.18,0h.5l.14,0h0l.63-.07h.05l.25,0h1l1.5-.15H311l.85-.07h0l1.77-.12h.16l.32,0h1.13", 1, "cls-6"], ["d", "M332.32,50h37.9L373,83.42l-3.06.41c-.73.1-1.48.18-2.27.25s-1.59.13-2.43.17-1.69.08-2.57.1-1.79,0-2.72,0c-1.66,0-3.26-.07-4.74-.15s-2.82-.18-4-.28-2.14-.2-2.86-.28-1.2-.15-1.37-.17c-.8-.09-1.75-.24-2.75-.41s-2-.38-3-.58-1.86-.38-2.57-.54l-1.44-.32-1-.17-1.88-.32-2.57-.4-3.06-.44c-.54-.07-1.17-.14-1.89-.19s-1.52-.11-2.4-.16-1.82-.08-2.83-.1-2.08,0-3.2-.06h-3.15c-1.08,0-2.24.08-3.39.16s-2.27.21-3.26.32-1.86.22-2.47.31l-1,.14a3.86,3.86,0,0,1-.49.06l-.48,0-.48,0h-.48a13,13,0,0,1-2.06-.19,14.29,14.29,0,0,1-1.69-.43,12.94,12.94,0,0,1-1.25-.5c-.34-.16-.6-.3-.77-.4a9.73,9.73,0,0,1-1.26-.81,9.16,9.16,0,0,1-1-.91,8.11,8.11,0,0,1-.82-1,7.4,7.4,0,0,1-.64-1,7.8,7.8,0,0,1-.37,1.66,7.48,7.48,0,0,1-.59,1.33,7.58,7.58,0,0,1-.64,1,5.42,5.42,0,0,1-.54.62,8.3,8.3,0,0,1-1.76,1.55,10,10,0,0,1-2,1,11.59,11.59,0,0,1-2.07.56,11.93,11.93,0,0,1-1.92.16l-15.24-.09-1.29-.07-2-.14-2.06-.15-1.33-.1c-2.18-.21-4.29-.5-6.24-.83s-3.75-.69-5.3-1-2.85-.66-3.81-.91-1.6-.43-1.81-.5l-20-5.16-2.55-.67-5.87-1.52-6.51-1.7-4.54-1.19a19,19,0,0,1-2.9-1A21.21,21.21,0,0,1,200,67.25c-.68-.39-1.23-.76-1.64-1l-.75-.56A15.41,15.41,0,0,1,193,59a15.8,15.8,0,0,1-.73-2.69,11.74,11.74,0,0,1-.18-1.52,8,8,0,0,1,0-.88c0-.34,0-.73,0-1.14s.05-.84.09-1.28.07-.89.12-1.33h-4.46l-.09.83a12,12,0,0,1-1.07,3.38A12.89,12.89,0,0,1,185,56.89a13.54,13.54,0,0,1-1.67,1.7,12.84,12.84,0,0,1-1.12.86A15.26,15.26,0,0,1,179.36,61a15.82,15.82,0,0,1-2.63.84,16.93,16.93,0,0,1-2,.35c-.54.05-.93.06-1.09.06a17.61,17.61,0,0,1-2.18-.15c-.71-.09-1.4-.21-2-.34s-1.17-.26-1.61-.38-.76-.21-.93-.26l-.6-.15-1.37-.33-2.35-.57L159,59.24c-1.61-.39-3.69-.81-5.9-1.23s-4.54-.82-6.67-1.18L140.93,56c-1.41-.23-2.29-.36-2.33-.36-.65-.13-1.41-.25-2.22-.37s-1.7-.23-2.61-.35L131,54.54l-2.66-.3-.63-.07-.61-.07-.58-.06L126,54c-.93-.1-2-.21-3.1-.3s-2.29-.18-3.43-.26l-3.25-.2-2.6-.11c-.71,0-1.67-.05-2.72-.07L107.65,53l-2.84-.05-1.51,0-8.83.17-1,0-2.13.11-3.18.17-4.1.23c-1.57.09-3.36.23-5.16.39s-3.6.35-5.22.52l-4,.45L68,55.17l-.57,0-.52,0h-1c-.49,0-.94,0-1.34-.05s-.76-.06-1.07-.1L62.73,55l-.49-.11A14.65,14.65,0,0,1,57.5,53.1a13.31,13.31,0,0,1-3.07-2.5,12.59,12.59,0,0,1-1.71-2.37,10.78,10.78,0,0,1-.65-1.39,9.29,9.29,0,0,1-.43-1.29,11.44,11.44,0,0,1-.26-1.27c-.06-.42-.1-.83-.12-1.22a11,11,0,0,1,0-1.14c-.14.3-.26.56-.39.81l-.34.66-.31.54-.25.41a10.34,10.34,0,0,1-.92,1.5c-.38.55-.82,1.13-1.25,1.67s-.85,1-1.18,1.42l-.67.76-.43.45-.82.87-1.07,1.14-1.16,1.24c-.21.24-.47.57-.76,1s-.62.83-.95,1.31-.68,1-1,1.47-.67,1-1,1.47-.55.93-.83,1.48-.57,1.16-.85,1.78-.55,1.28-.81,1.92-.52,1.27-.76,1.87A17.5,17.5,0,0,0,35,67.47c-.16.67-.3,1.37-.43,2s-.22,1.34-.29,1.9-.14,1-.17,1.36,0,.45,0,.73,0,.61,0,.93,0,.66,0,1v.83c0,.25,0,.64,0,1.1s0,1,0,1.46,0,.95,0,1.3v.62c0,.41-.09.93-.18,1.5S33.6,83.4,33.5,84s-.21,1.15-.3,1.61-.16.81-.19,1l-.46,2.28L0,96.74,18.4,26.35l2.77-8.12,10.65,0,.72-2.79,2.64,0,2-7.68,39.1-1-4.36,20.5,74.37-.56-1.79,12.91,30.22-.07,2.28-22,32.18-.33L207,45.73l55.4-.09.32-14.83,18.36-.11V26l27.26-.2.09,2.78c0,.18,0,.61,0,1.19s.05,1.33.07,2.15.06,1.71.09,2.59.05,1.75.08,2.53l.59,0,.49,0,.33,0h.12l3.63-.21.29,9.62h2.62l.18,5.52h15.51L332.32,50Z", 1, "cls-8"], ["points", "264.4 201.53 265.06 203.14 262.11 202.73 261.44 201.13 264.4 201.53", 1, "cls-9"], ["points", "268.11 201.98 268.76 203.58 265.06 203.14 264.4 201.53 268.11 201.98", 1, "cls-9"], ["points", "268.65 202.84 269.29 204.43 268.76 203.58 268.11 201.98 268.65 202.84", 1, "cls-7"], ["points", "268.38 209.22 269.03 210.79 267.9 209.81 267.25 208.23 268.38 209.22", 1, "cls-7"], ["d", "M274.53,212.52l.43,1.09.19.48h-.1l-.07,0h0l0,0h-.63l-.15-.06-.23-.1h0l-.29-.13h0l-.05,0h-.12l-.08,0h0l-.05,0h-.05l-.08,0h0l-.06,0h0l-.05,0H273l0,0h0l-.05,0h0l-.37-.17-.26-.13h0l-.06,0h0l-.05,0h0l-.06,0h0l-.06,0h0l0,0h0l0,0h0l0,0h0l-.06,0h0l0,0h0l0,0h0l-.09-.05h0l-.06,0h0l0,0h0l0,0h0c-.26-.14-.51-.28-.75-.43l-.58-.36h0l-.05,0h0l-.06,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l-.05,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0a.69.69,0,0,1-.13-.11l-.47-1.13-.18-.44.18.14h0l0,0h0l0,0h0l.07,0h0l.05,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l.05,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0,0,0,0,0h0l0,0,0,0h0l0,0,0,0h0l0,0,0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l.06,0h0l.09.05.17.1h0l0,0h0l.17.1h0l0,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0h0l0,0,0,0h0l0,0h0l0,0,0,0h0l0,0h0l.06,0h0l.06,0h0l.06,0h0l0,0h0l.06,0h0l0,0h0l0,0,.06,0h0l0,0h0l0,0h0l0,0h0l0,0h.05l0,0h0l.09.05.61.29h0l.11,0h0l.05,0h0l0,0h.11l0,0H273l0,0h.36l.07,0h0l.11,0h.08l.06,0H274l.06,0h.35l.09,0Z", 1, "cls-10"], ["points", "278.04 213.88 278.65 215.44 275.15 214.09 274.53 212.52 278.04 213.88", 1, "cls-7"], ["points", "278.99 210.87 279.59 212.45 278.65 215.44 278.04 213.88 278.99 210.87", 1, "cls-4"], ["points", "294.04 212.63 294.56 214.21 279.59 212.45 278.99 210.87 294.04 212.63", 1, "cls-9"], ["points", "339.1 190.75 339.41 192.41 339.01 204.04 338.69 202.4 339.1 190.75", 1, "cls-2"], ["points", "328.21 212.9 328.58 214.49 294.56 214.21 294.04 212.63 328.21 212.9", 1, "cls-9"], ["points", "343.19 202.44 343.48 204.07 342.68 215.31 342.37 213.72 343.19 202.44", 1, "cls-2"], ["d", "M266.23,183.75l18.62,1.85,54.25,5.14-.41,11.66,4.5,0-.82,11.29L327.6,215.8l.61-2.9L294,212.63l-15-1.76-.95,3-3.51-1.36-1-.41c-.47-.2-1-.46-1.66-.76s-1.25-.63-1.86-1a11,11,0,0,1-1.62-1.15l-1.14-1,1.41-5.39-.54-.86-3.71-.45-3-.4,4.79-17.38Z", 1, "cls-8"], ["points", "342.37 213.72 342.68 215.32 327.98 217.39 327.6 215.8 342.37 213.72", 1, "cls-11"], ["d", "M343.89,154.87l.55,1.65H344v0H344v0h0l0,0h0l0,0h0v0h0l0,0h0v0h0l0,0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0l0,0h0v0h0v0l0,0h0l0,0h0v0h0l0,0h0l-.07-.1h0l0-.05h0v0h0l0,0h0l0-.05h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0l0,0h0v0h0v0h0v0h0v0h0v0h0l-.06-.08h0v0h0a.83.83,0,0,0-.08-.12h0l-.16-.27h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-.06h0v0h0v-.06h0v0h0v-.06h0v0h0v0h0v0h0v0h0v0h0v0h-.17v0h0v0h0l0,0h0v0h0v0h0v0h-.36v-.13l0-.05v0l-.46-1.4v0h0v0h.58v0h0v0h0v0h0v0h0v0h0v0h0v.06h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0l.08.12h0l.23.34h0v0h0l0,0h0v0h0l0,.05h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0v0h0v0h0l0,.05v0h0l0,0v0h0v0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h.06v0h.35l.05.05Z", 1, "cls-10"], ["d", "M345.35,157.66h.14v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l.12.37h0v0h0v0h0a1.87,1.87,0,0,0-.07-.18h0v0h0l-.06-.15h0v0h0v0h0v0h0v0h0v0h0v0h0v0h-.05v0h0l0-.05,0-.06h0l0,0h0v0h0l0,0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0l0-.06,0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0-.06h0v0h0v0h0v0h0l0,0h0l-.07-.09-.55-1.65a2.43,2.43,0,0,1,.2.25h0a.61.61,0,0,1,.07.1h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0a.22.22,0,0,1,0,.08h0l.05.08h0l0,0h0l0,0h.06v0h0v0h0v0h0v0h0v0h.06v0h0v0h0v0h0v0h0l0,0h0v0h0l0,0h0v0h0c0,.07.07.15.11.22h0v0h0v0h0v0h0s0,.1,0,.13h0v0h0v0h0l.1.33h0l0,.09Zm.4,1.21Zm0,0Zm0,0Zm0,0Zm0,0Zm0,0h0m0,0Zm0,0h0", 1, "cls-10"], ["points", "376.92 133.81 377.3 135.54 373.49 152.41 373.08 150.73 376.92 133.81", 1, "cls-12"], ["points", "343.8 166.89 344.35 168.5 343.96 168.45 343.41 166.84 343.8 166.89", 1, "cls-9"], ["points", "358.18 199.28 358.68 200.8 358.08 202.61 357.58 201.1 358.18 199.28", 1, "cls-12"], ["points", "357.58 201.1 358.08 202.61 333.13 202.31 332.51 200.82 357.58 201.1", 1, "cls-9"], ["points", "377.99 151.2 378.37 152.88 368.86 200.91 368.4 199.39 377.99 151.2", 1, "cls-13"], ["d", "M350.84,131.53l26.07,2.28-3.83,16.92,4.91.47-9.59,48.19-10.22-.11-.6,1.82-25.07-.28,1.74-14.51,1.93-.73a7.13,7.13,0,0,0,.78-.41,8.51,8.51,0,0,0,1.42-1,7.61,7.61,0,0,0,1.44-1.73,6,6,0,0,0,.82-2.45l3.16-13.06-.39,0,1.16-3c.11-.28.24-.69.38-1.2s.27-1.08.37-1.7a12.07,12.07,0,0,0,.15-1.9,6,6,0,0,0-.25-1.78s0-.09-.09-.23-.14-.34-.25-.57-.25-.5-.41-.77a7,7,0,0,0-.58-.8l-.47-.55c-.21-.24-.46-.55-.72-.89s-.53-.71-.77-1.08a7.54,7.54,0,0,1-.6-1.1c-.15-.33-.33-.75-.51-1.25a12.86,12.86,0,0,1-.5-1.77,13.72,13.72,0,0,1-.25-2.3,15.39,15.39,0,0,1,.21-2.84,9.4,9.4,0,0,1,.4-1.57,13.72,13.72,0,0,1,1.36-2.8,16.8,16.8,0,0,1,2.88-3.38,22.1,22.1,0,0,1,5-3.33l.95-.48Z", 1, "cls-8"], ["points", "368.4 199.39 368.86 200.91 358.68 200.8 358.18 199.28 368.4 199.39", 1, "cls-9"], ["points", "309.58 132.35 310.03 134 301.52 132.39 301.03 130.73 309.58 132.35", 1, "cls-9"], ["d", "M311.8,135.44a2,2,0,0,0-.28-.49h0l0,0h0l0,0h-.07l0,0h-.07l0,0h0l0,0h0v0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h-.25l0,0h-.07l-.06,0h0l-.15-.07H310l-.09-.35-.36-1.31h0l.18.06h.12l.08,0h.28l.05,0h0l.08.05.1.06h0l0,0h.29l0,0h0l0,0h0l0,0h0l0,0h0v0h.14v0h0v0h0l0,0h0l0,0h0s0,0,0,.08h0a.14.14,0,0,1,0,.06h0l.05.1.44,1.65Z", 1, "cls-10"], ["d", "M317.73,132.46h0m0,0h0m0,0v0h0Zm0,0Zm0,0v.67l0,.13v.21l0,.13v.12l0,.08v.29h0v0h0l-.41-1.66h0v0h0Zm.43,1.7Zm0,0Zm0,0Zm0,0Zm0,0Zm0,0Zm-.42-1.7h0m0,0h0", 1, "cls-3"], ["d", "M317.75,132.54l.41,1.65h0v0h0l-.41-1.65h0Zm.42,1.71h0", 1, "cls-3"], ["points", "317.76 132.6 318.17 134.26 318.25 134.59 317.83 132.93 317.76 132.6", 1, "cls-11"], ["points", "301.03 130.73 301.52 132.39 298.32 145.68 297.81 144.06 301.03 130.73", 1, "cls-12"], ["points", "297.81 144.06 298.32 145.68 294.23 145.09 293.71 143.48 297.81 144.06", 1, "cls-9"], ["points", "311.36 133.79 311.8 135.44 310.99 146.14 310.54 144.52 311.36 133.79", 1, "cls-13"], ["points", "293.71 143.48 294.23 145.09 292.47 152.54 291.94 150.96 293.71 143.48", 1, "cls-12"], ["points", "317.83 132.93 318.25 134.59 317.44 146.2 317.02 144.57 317.83 132.93", 1, "cls-5"], ["points", "310.54 144.52 310.99 146.14 310.27 151.82 309.82 150.22 310.54 144.52", 1, "cls-13"], ["points", "306.7 152.53 307.17 154.12 292.47 152.54 291.94 150.96 306.7 152.53", 1, "cls-9"], ["d", "M309.82,150.22l.45,1.6h0v0h0a1.86,1.86,0,0,1-.05.19h0l-.07.2h0v0l0,.06H310a1,1,0,0,1-.08.14l-.45-1.6h0l0,0h0v0h0v0h0a.76.76,0,0,0,.09-.18,2.66,2.66,0,0,0,.11-.28l0-.12h0Z", 1, "cls-2"], ["d", "M309.47,151.09l.46,1.6a.41.41,0,0,0-.07.11h-.1l0,0h-.07l0,0h0l-.06.06-.45-1.59.06-.07h0l0,0h0l0-.05h0v0h0v0h.11Z", 1, "cls-3"], ["d", "M309.1,151.57l.46,1.6h0l-.05.05-.07.06h0a.46.46,0,0,0-.07.07l-.09.06-.46-1.59,0,0h0l.07-.06H309l0,0h0l.06-.06h0Z", 1, "cls-3"], ["d", "M308.8,151.85l.46,1.59v0h0l0,0-.07.05h0l-.07,0-.08.05-.46-1.59.08-.05h0l0,0h.18Z", 1, "cls-11"], ["d", "M308.51,152.06l.46,1.59,0,0h0l-.06,0h-.15l0,0-.46-1.59h0l.1,0h.07l.06,0h0l.07,0Z", 1, "cls-14"], ["d", "M308.18,152.24l.47,1.59h-.07l-.05,0h0l-.46-1.59h0l.11,0Z", 1, "cls-9"], ["points", "308.07 152.28 308.53 153.88 308.51 153.8 308.05 152.21 308.07 152.28", 1, "cls-7"], ["d", "M301,130.73l8.54,1.62a1.79,1.79,0,0,1,.34.11,3.38,3.38,0,0,1,.51.25,2.74,2.74,0,0,1,.54.44,2.17,2.17,0,0,1,.4.64l-.82,10.73-.72,5.7a2.33,2.33,0,0,1-.06.24,3.15,3.15,0,0,1-.25.56,2.62,2.62,0,0,1-.53.68,3,3,0,0,1-.91.59l0-.08-.26.19-.16,0-.23,0-.31,0-.39,0L291.93,151l1.78-7.48,4.11.59L301,130.73Z", 1, "cls-8"], ["points", "308.05 152.21 308.51 153.8 308.25 153.99 307.79 152.4 308.05 152.21", 1, "cls-13"], ["d", "M308.25,154h0l-.05,0h-.07l-.06,0H308l-.47-1.59.14,0h.16", 1, "cls-6"], ["d", "M307.49,152.46l.47,1.59h-.79l-.47-1.59h.69l.1,0Z", 1, "cls-10"], ["points", "317.02 144.57 317.44 146.2 316.75 152.01 316.32 150.41 317.02 144.57", 1, "cls-13"], ["points", "305.75 158.33 306.22 159.9 284.81 157.56 284.23 155.99 305.75 158.33", 1, "cls-9"], ["points", "306.1 158.33 306.57 159.91 306.22 159.9 305.75 158.33 306.1 158.33", 1, "cls-9"], ["d", "M316.74,152h0v0h0a1,1,0,0,1,0,.16h0v0h0a.29.29,0,0,1,0,.09h0v.05h0v.06h0v0h0v0h0v0h0v0h0v0h0v0h0c0,.11-.07.22-.11.33l0,.11h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,.06h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0v0h0l0,.07v0h0l0,.06h0c-.05.1-.11.2-.17.3l-.43-1.59.18-.31v0l0,0h0l0,0v0h0V153h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0l0-.08h0l0,0v-.05h0v0h0l0,0h0a5.11,5.11,0,0,0,.16-.58,4.65,4.65,0,0,0,.12-.66l.43,1.61h0Z", 1, "cls-2"], ["d", "M315.19,153.5l.43,1.59c-.08.14-.16.27-.25.4h0l0,0h0m-.2.27h0l0,0h-.05v0h0c-.18.22-.36.45-.57.68h0l0,0h0l-.44-1.58,0,0h0c.08-.08.15-.17.23-.26h.09v0h0l0,0h.16l0,0h0l0-.05h.17l.06-.09.18-.27h0l0-.05", 1, "cls-6"], ["d", "M314,155.07l.43,1.58h0l0,0h0a.6.6,0,0,1-.08.08h0l0,0h0l-.05.06h0l0,0h0l-.23.23h0l-.24.22-.27.23L313,156l0,0h.08l.08-.06h0l0,0h.07l.26-.23h.08l.23-.23h.06l.11-.11Z", 1, "cls-3"], ["d", "M313,156l.45,1.58h0a1.09,1.09,0,0,1-.17.13h0l0,0,0,0h0l0,0h-.2l-.15.1h-.06l-.07,0h-.1l-.12.07-.45-1.58a.41.41,0,0,0,.11-.07h.08l0,0h.1l0,0h0l.19-.13h.19l0,0h0l0,0h.1L313,156h0Z", 1, "cls-11"], ["d", "M312,156.74l.45,1.57-.24.15H312l0,0h0l-.05,0-.28.15-.06,0h-.14l-.09,0-.45-1.58.15-.07h.21l.36-.19h.16l.23-.13Z", 1, "cls-14"], ["d", "M310.88,157.33l.45,1.58,0,0h0l0,0h-.13l-.06,0h0l-.15-.52m-.3-1h.08l.17-.08h0", 1, "cls-6"], ["d", "M309.82,150.22l.72-5.7.82-10.73a1.9,1.9,0,0,0-.41-.64,2.43,2.43,0,0,0-.53-.44,3.32,3.32,0,0,0-.5-.25,1.79,1.79,0,0,0-.34-.11L301,130.73l-3.22,13.33-4.1-.58L291.93,151l14.77,1.58.38,0,.31,0,.24,0,.16,0,.26-.19,0,.08a3.11,3.11,0,0,0,.91-.59,3.15,3.15,0,0,0,.53-.68,4,4,0,0,0,.25-.56c0-.14.06-.24.06-.24Zm8-17.29L317,144.57l-.7,5.83a7.22,7.22,0,0,1-.4,1.61,9.16,9.16,0,0,1-1,1.92,9.51,9.51,0,0,1-1.72,1.93,10.46,10.46,0,0,1-2.58,1.59c-.17.08-.39.18-.66.28s-.59.2-1,.29a12.13,12.13,0,0,1-1.29.23,13,13,0,0,1-1.59.08h-.35L284.23,156l4.62-19,4.11.58,3.33-13.48L311.53,127a7.72,7.72,0,0,1,1.67.53,9,9,0,0,1,1.85,1.06,7.36,7.36,0,0,1,1.66,1.68,6.66,6.66,0,0,1,1.05,2.37l.08.33Z", 1, "cls-8"], ["d", "M310.61,157.46l.15.52m.3,1.05h0l-.45-1.57h0", 1, "cls-6"], ["d", "M310.57,157.48l.45,1.57-.17.08h-.17l-.27.1h0l-.1,0h-.13l-.05,0-.46-1.58h.09l.06,0H310l.21-.08.14-.06h0l.1,0h.06l.06,0Z", 1, "cls-9"], ["d", "M309.67,157.82l.46,1.58-.07,0h0l-.15,0h-.06l-.05,0h0l-.07,0h-.18l-.06,0h0l-.15,0h-.6l-.47-1.58h.05l.46-.08h.11l.18,0,.12,0h.33l.22-.07Z", 1, "cls-9"], ["d", "M308.21,158.17l.46,1.58H308c-.41,0-.85.07-1.33.08h-.11l-.15-.5-.32-1.08h.71l.41,0,.51,0h.09l.35,0h0Z", 1, "cls-10"], ["points", "180.57 151.66 181.33 153.2 176.29 153.17 175.51 151.64 180.57 151.66", 1, "cls-9"], ["points", "214.4 147.17 214.99 148.74 214.38 153.86 213.78 152.31 214.4 147.17", 1, "cls-12"], ["points", "213.78 152.31 214.38 153.86 181.26 153.66 180.5 152.12 213.78 152.31", 1, "cls-9"], ["points", "254.73 147.35 255.14 148.94 214.99 148.74 214.4 147.17 254.73 147.35", 1, "cls-9"], ["points", "270.35 148.99 270.68 150.58 255.14 148.94 254.73 147.35 270.35 148.99", 1, "cls-9"], ["points", "291.12 156.29 291.36 157.87 269.83 155.53 269.49 153.96 291.12 156.29", 1, "cls-9"], ["points", "296.85 122.99 297.05 124.68 291.36 157.87 291.12 156.29 296.85 122.99", 1, "cls-2"], ["d", "M201.2,111.21h.48l.6,0,.68.1.74.18,20.68,5.5,8.08,2.15.74.17c.46.11,1.13.24,2,.38s1.83.27,2.94.38,2.36.18,3.68.19l6.79-.14,6.68-.18,10.71-.21h1.13c.38,0,.8,0,1.25,0l1.43,0,1.53.07,1.54.12,1.82.19,4.72.52c1.95.22,4.23.49,6.69.8s5.09.66,7.73,1l3,.44-5.72,33.3L269.49,154l.85-5-15.61-1.64-40.34-.18-.61,5.14-33.28-.19.07-.46-5.06,0L178.75,131l10.41.07,2.65-18,3.37-.07a11.49,11.49,0,0,1,1-.6,11.1,11.1,0,0,1,1.29-.56,10.75,10.75,0,0,1,1.54-.43,9.75,9.75,0,0,1,1.77-.21h.4Z", 1, "cls-8"], ["points", "74.83 101.41 75.45 103.05 74.25 112.24 73.62 110.63 74.83 101.41", 1, "cls-4"], ["points", "121.48 98.42 121.88 100.1 120.85 112.22 120.43 110.58 121.48 98.42", 1, "cls-13"], ["d", "M190.74,113.5h0v0h0l-.08-1.67v0h0v0h0v0h0l.08,1.64h0v0Zm-.08-1.67h0m0,0h0", 1, "cls-2"], ["points", "190.4 130.56 190.48 132.17 22.53 131.27 21.65 129.74 190.4 130.56", 1, "cls-9"], ["points", "190.66 112.12 190.75 113.79 190.48 132.17 190.4 130.56 190.66 112.12", 1, "cls-11"], ["d", "M140.11,96.3c.59,0,1.32,0,2.14,0s1.75,0,2.73.09,2,.11,3.06.2,2.11.21,3.15.36l1,.12c.47.06,1.1.16,1.87.29s1.68.3,2.73.52,2.25.49,3.58.82l16.79,3.88,6.34,1.49a7.24,7.24,0,0,1,1.08.27,9.27,9.27,0,0,1,1.55.65,9,9,0,0,1,1.74,1.17,9.33,9.33,0,0,1,1.63,1.85c.06.11.17.3.29.55a7.61,7.61,0,0,1,.4.92,7.53,7.53,0,0,1,.35,1.21,7.19,7.19,0,0,1,.15,1.42l-.27,18.44-168.74-.82,3.64-20.23,4.57-1.37,11-2.62,10-2.43.9-.21c.49-.12,1.15-.26,2-.42s1.72-.33,2.73-.5,2.11-.32,3.25-.45c.94-.11,1.82-.19,2.64-.26s1.56-.12,2.25-.16,1.31-.06,1.86-.08l1.46,0h1l.48,0,.43,0,1.05.06.67,0,.37,0h.13l2.76.24-1.21,9.22h2l.91-7,2.51-1.7,1.44.25s.37.07,1,.16,1.52.22,2.6.34,2.35.26,3.72.35,2.87.17,4.38.19h.5l1.73,0c.75,0,1.64,0,2.59-.07s2-.09,2.93-.16,1.93-.16,2.76-.28c0,0,.56-.06,1.41-.18s2-.29,3.44-.53,3-.54,4.61-.9,3.33-.79,4.94-1.29l4.4-1.36-1,12.16h1.69l1-12.39,2.54-.49c.06,0,.5-.1,1.23-.22s1.74-.28,2.95-.44,2.63-.33,4.17-.46,3.18-.23,4.85-.27h1.2Z", 1, "cls-8"], ["d", "M39.38,28.06h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.05h0v0h0V29h0l-.05.54,0,.35h0v0h0v0h0V30h0v.16h0v.09h0v.12h0v.05h0v0h0v0h0v.05h0v.09h0v0h0v.05h0V31h0V31h0v.19h0v.09h0v.05h0v.14h0v0h0v0h0l-.06.72-.06.73h0l0,.29h0v.1h0v0h0v.05h0v0h0v.05h0v0h0v0h0v.05h0v0h0v.09h0V34h0v.13h0v0h0v0h0v0h0v.09h0v.09h0v.09h0v0h0v.05h0v0h0q0,.33-.06.63c0,.44-.08.82-.11,1.12h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.06h0v0h0v0h0v.08h0v0h0v0h0v0h0v0h0l-.41-1.62h0v0h0v0h0v0h0V35h0v-.07h0v0h0v0h0v-.05h0v-.06h0v0h0v-.08h0v-.06h0v0h0v-.07h0v0h0v0h0v0h0V34.2h0v0h0v0h0v0h0v0h0v0h0v0h0v-.07h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-.05h0v0h0v0h0v0h0v-.09h0V33h0v0h0v-.05h0v0h0v0h0v0h0v-.05h0v0h0v-.09h0v-.05h0v-.14h0v-.09h0V31.9h0v-.09h0v-.1h0v-.05h0v-.05h0v-.09h0v-.05h0v0h0v-.05h0v-.05h0v0h0v0h0v-.05h0v-.05h0v-.05h0v0h0V31h0v-.05h0v0h0v-.05h0v-.05h0v-.05h0v0h0v-.05h0v-.05h0v-.05h0v0h0v-.05h0V30.4h0v0h0V30.3h0v-.09h0v-.05h0v-.05h0l0-.19h0v-.05h0l0-.42h0l0-.32h0l0-.48h0l.07-.8h0l.06-.72h0v0h0v0h0v0h0v0h0V27h0v0h0v0h0v-.07h0v-.1h0v0h0v0h0v0h0v0h0v-.06h0v0h0l.41,1.64Z", 1, "cls-15"], ["points", "38.17 35.35 38.59 36.97 3.87 36.92 3.3 35.31 38.17 35.35", 1, "cls-16"], ["d", "M39,26.42c0,.1,0,.65-.11,1.43s-.15,1.8-.24,2.84-.18,2.09-.26,2.94-.15,1.5-.19,1.72l-34.87,0,.71-6,27.7,0L32,26.43Z", 1, "cls-17"], ["d", "M38.81,37l.41,1.64h0v0h0l-.12.62c0,.15-.07.31-.11.48h0v.07h0v0h0l0,.07h0v0h0v.06h0v0h0l0,.08h0v.05h0v0h0v0h0v0h0v0h0v.05h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.06h0v0h0v0h0v0h0v.07h0v0h0v0h0v.06h0l0,.06h0v0h0l0,0v0h0l0,.06h0v0h0l0,.06h0v0h0v0h0v0h0V42h0v0h0v0h0v0h0v0h0l0,0h0l0,.07h0v.06h0c0,.05,0,.1-.05.15h0l0,.07h0v0h0v0h0c-.1.28-.22.56-.35.84h0c-.11.26-.24.52-.37.77v.08h0v0h0v0h0l0,0h0l0,.09h0v0h0v.06h0v0c-.06.11-.12.22-.19.33l-.42-1.63a15.08,15.08,0,0,0,1.06-2.13c0-.07,0-.13.08-.19h0v0l0,0h0v0h0v0h0v0h0v0h0v-.11h0l0-.13h0l0,0c.12-.33.22-.66.32-1h0l.09-.32h0v0l0-.06h0v0h0l0-.08h0v0l0,0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-.05h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0c0-.16.07-.31.1-.44h0c0-.15.06-.27.08-.38h0l0-.07h0v0h0v-.06h0v0h0v0h0v0h0Z", 1, "cls-15"], ["d", "M36.54,43.32,37,44.94v0h-.08l0,.08h-.09l-.06.08H36.6v0l0,0h0l-.09.12L36,44.09l.14-.19.12-.19h0l.09-.15.12-.19Z", 1, "cls-18"], ["points", "36.03 44.09 36.45 45.71 3.98 45.67 3.4 44.06 36.03 44.09", 1, "cls-16"], ["d", "M38.81,37c0,.05-.06.34-.16.8s-.25,1.06-.46,1.76a21.58,21.58,0,0,1-.85,2.26A13.48,13.48,0,0,1,36,44.09l-32.63,0L4.23,37l34.58,0Z", 1, "cls-17"], ["d", "M36.72,46.69l.13.55h0l0,0h0v0h0l0,0h0v0h0v0h-.08v0h0l0,0h0l-.27.4h0l0,.05h0l0,0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0l0,0h0v0h0v0h0l0,0h0l0,0h0l0,0h0l-.08.11h0l-.07.08h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,.06h0l-.11.13h0v0h0l0,0h0l0,0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0l-.05.06h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0v0h0l-.05.06h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0v0l0,0h0l0,0h0v0h0l0,0h0l0,0v0l0,0,0,0h0l0,0v0l0,0,0,0v0l0,0h0l0,0h0v0h0l0,0h0v0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0l0,0h0v0h0l0,0h0l0,0h0v0h0l0,0v0h0l0,0,0,0h0v0h0l0,0v0l0,0h0v0h0l0,0,0,0h0v0h0l0,0v0h0l0,0v0h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0v0h0l0,0h0l0,0h0v0h0v0h0l-.06.07h0v0h0l0,0h0l0,.05h0v0h0l0,0h0v0h0v0h0v0h0l-.07.09h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h-.05v0H31.5v0h0l0,0h0v0h0l-.14.2-.1-.35-.34-1.26v0h0v0h.25v0h.05v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0l0,0h0l0,0v0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0l0,0,.09-.12v0l0-.05,0,0h0v0h0l0,0h0l.07-.1h0l.06-.08h0l0,0h0l.06-.07h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0v0h0l.1-.12h0v0h0l0-.06h0v0h0l.1-.12h0v0h0l.07-.08h0v0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0l0,0h0l0,0h0v0l0,0h0l0,0v0h0l0,0,0,0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0,0,0,0,0v0h0l0,0h0l0,0,0,0h0l0,0h0l0,0,0,0h0l0,0,0,0h0v0h0l0,0h0l0,0,0,0v0l0,0,0,0,0,0v0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0l.06-.06h0v0l.06-.06h0v0h0l0,0h0l0,0h0l0,0h0v0h0l0,0,0,0v0l0,0,0,0v0l0,0,0,0,0,0v0h0l0,0h0v0l0,0,0,0h0v0h0l0,0,0,0h0c.2-.23.39-.47.57-.69h0l.32-.41h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l0-.07h0l.17-.22.07-.09h0l.12-.18h0l0,0h0l0,0h0v0h0l0,0h0v0h0l0,0h0v0h0l0,0h0l0-.06h0v0h0l0,0h0l0,0h0l0-.08,0,0h.17v0h0v0l.28,1.1Z", 1, "cls-18"], ["points", "30.86 52.78 31.3 54.41 3.94 54.37 3.37 52.77 30.86 52.78", 1, "cls-16"], ["d", "M36.44,45.59l-.22.33c-.13.2-.31.46-.54.77s-.5.68-.81,1.07-.66.8-1,1.21-.74.85-1.09,1.27-.66.84-.93,1.21l-.67.92-.28.41H3.37l.83-7.14,32.24,0Z", 1, "cls-17"], ["d", "M31.27,54.31,31.69,56l0,0h0v0h-.05l-.07.1,0,.07h-.05l0,0h0l-.06.09h0v0h0l-.12.2h0l-.06.09-.42-1.64.22-.36,0,0h0l0,0H31l0,0h0l.06-.09h0l0-.06h0l.07-.11h0Z", 1, "cls-18"], ["d", "M30.68,55.25l.42,1.64c-.06.11-.13.22-.2.33v0h0l0,.06,0,0h0v0h0l0,0h0l0,0h0l0,0h0l0,.06h0v0h0v0h0v0h0v0h0v0h0l-.07.12h0l-.32.56h0m-.13.23h0v0h0l0,0c-.26.46-.52,1-.78,1.46h0v0l0,.05h0v0h0v0h0v0h0l0,0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0v0h0v0h0l0,0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,.05v0h0v0h0v0h0v0l0,.08h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,.06h0v0h0v0h0v0h0l0,.06h0v0h0v0h0v0h0v0h0v.12h0l0,.06h0l0,.09h0a1.21,1.21,0,0,1,0,.18l-.44-1.62h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0v0l0,0h0l0-.09h0v0l0,0v0h0v0h0l.15-.32h0l.05-.11h0l.09-.19h0l.16-.32h0l0-.07h0l.07-.14h0v0l.1-.19h0l0-.08v0l.33-.61h0l.17-.31h0l.18-.31h0l.05-.09h0v0h0l0,0h0v0h0v0h0l.11-.19.4-.69h0v0h0v0h0l0,0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h.05v0h0l0,0h0v0h0l0,0", 1, "cls-6"], ["points", "27.57 61.5 28.01 63.12 3.95 63.09 3.39 61.48 27.57 61.5", 1, "cls-16"], ["d", "M31.27,54.31s-.24.37-.54.85-.68,1.12-1.08,1.85-.84,1.52-1.21,2.3a15.48,15.48,0,0,0-.87,2.19l-24.18,0,.74-7.14,27.14,0Z", 1, "cls-17"], ["d", "M28.12,63l.43,1.65s-.1.27-.22.64l-.09.29h0l0,.11h0v0h0v0h0l0,.06h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.22h0v.11h0v.06l0,.08h0v0h0l0,.05,0,.09h0v0h0c0,.06,0,.12-.05.18s-.08.31-.13.47h0l0,.1h0v0h0v0h0v0h0v.07h0l0,.06h0l0,.1h0v0h0v.07h0l0,.07h0v0h0V68h0v0h0v0l0,.07h0v.08h0v0h0v0h0v0h0v0h0v.07h0v.08h0v0h0v0h0v0h0v0h0v0h0v.07h0v0h0l0,.08h0v0h0v0h0v.07h0c-.08.37-.15.76-.22,1.15h0l0,.09h0l0,.13h0v0h0v.09h0v0h0v.17h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.09h0a1,1,0,0,0,0,.17h0c0,.12,0,.24-.05.36l-.44-1.61h0v-.1h0v0h0V70h0v0h0v0h0v0h0v0h0v-.05h0v-.08h0v-.09h0v0h0v0h0v0h0v0h0v-.48h0v0h0v-.09h0v-.21h0v0h0v0h0v0h0v0h0v0h0v-.09h0v0h0v-.12h0v0h0V67.9h0v0h0v-.08h0v0h0v0h0v0h0v0h0v0h0v0h0l0-.08c.07-.35.15-.67.22-1h0v0h0l0-.15h0l.06-.21h0l0-.1h0v0h0v0h0l0-.07h0v-.06h0c0-.2.11-.39.16-.58l0-.15h0V65h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0-.09h0v0h0a1.72,1.72,0,0,0,.07-.21h0v0h0v0h0l0-.08h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0Z", 1, "cls-15"], ["points", "26.43 70.2 26.87 71.81 3.97 71.8 3.42 70.19 26.43 70.2", 1, "cls-16"], ["d", "M28.12,63s-.1.27-.22.65-.29.92-.46,1.56-.37,1.41-.55,2.26-.34,1.77-.46,2.74h-23l.78-7.14L28.12,63Z", 1, "cls-17"], ["d", "M27.06,71.69l.43,1.64h0v0h0v0h0v0h0v0h0v0h0v.1h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.07h0v.07h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0c0,.19,0,.39,0,.61l-.43-1.64h0v-.17h0v0h0v0h0v0h0v-.07h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0V73.5h0v0h0v-.11h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-.12h0v0h0v0h0v0h0v0h0v0h0q0-.23,0-.39h0v0h0v0h0v0h0v-.07Z", 1, "cls-15"], ["d", "M26.89,74.46l.43,1.64v.49h0v.18h0v.07h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.07h0v.1h0v.11h0v.2h0v.07h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0l.06.87h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0l-.43-1.62c-.07-.34-.12-.7-.16-1.06s-.05-.59-.07-.88h0v0h0v0h0v0h0v0h0v0h0v0h0v-.15h0c0-.17,0-.34,0-.51h0v-.07h0v0h0v0h0v0h0v0h0V75c0-.16,0-.32,0-.47v-.08Z", 1, "cls-18"], ["points", "27.16 78.71 27.59 80.33 3.96 80.3 3.41 78.69 27.16 78.71", 1, "cls-16"], ["d", "M27.06,71.69s0,.33-.07.76-.07,1-.09,1.71,0,1.45,0,2.23a17.52,17.52,0,0,0,.25,2.32l-23.75,0,.78-6.94Z", 1, "cls-17"], ["d", "M28.25,81.75h0V82h0v0h0v0h0v0h0l0,.15,0,.21h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0c0,.08,0,.16.05.24h0v0h0l0,.12h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.1h0v0h0v0h0l-.43-1.63h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-.07h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-.06h0v0h0v0h0v0h0v-.06h0l0-.13h0v0h0l0-.09h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-.07h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0c0-.12-.05-.23-.07-.35h0l0-.11h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-.09c0-.12,0-.21,0-.26h0l.44,1.63h0v0Zm-.44-1.66h0", 1, "cls-18"], ["points", "28.81 85.78 29.24 87.4 4.13 87.37 3.58 85.76 28.81 85.78", 1, "cls-16"], ["d", "M27.81,80.08s0,.13.05.29.06.38.11.63.09.54.14.82.12.58.18.84.12.57.17.88.12.63.17.93.09.57.13.8,0,.41,0,.5H3.58l.56-5.64,23.67,0Z", 1, "cls-17"], ["d", "M30.06,89.27h0c0,.07,0,.16,0,.28h0c0,.17,0,.38,0,.63,0,.07,0,.15,0,.23h0v0h0v0h0v0h0v0h0v0h0v0h0v.18h0v.16h0v0h0v0h0v0h0c0,.29,0,.59,0,.89h0v0h0v0h0v0h0v0h0v0h0l-.42-1.64h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0c0-.31,0-.59,0-.81h0a1.09,1.09,0,0,1,0-.18h0v-.14h0v0h0l.42,1.65h0a1.05,1.05,0,0,1,0,.12Z", 1, "cls-18"], ["d", "M29.74,90.76l.42,1.64h0v.18h0v.08h0v0c0,.09,0,.17,0,.26h0v0h0v0h0v0h0v.06h0s0,.1,0,.14h0l0,.23-.24-.91-.19-.73h0v0h0s0-.06,0-.09h0v0h0V92h0l0-.32c0-.14,0-.29,0-.43s0-.28,0-.42h0Z", 1, "cls-15"], ["points", "29.61 92.42 30.04 94.06 3.9 100.34 3.35 98.74 29.61 92.42", 1, "cls-19"], ["d", "M29.63,87.5s0,.26,0,.6,0,.79.06,1.29,0,1,0,1.57a10.38,10.38,0,0,1-.12,1.46L3.35,98.74,4.54,87.55Z", 1, "cls-17"], ["points", "28.31 119.84 28.8 121.46 25.21 121.46 24.7 119.84 28.31 119.84", 1, "cls-3"], ["points", "33.66 127.55 34.14 129.15 28.03 129.13 27.53 127.53 33.66 127.55", 1, "cls-3"], ["points", "35.36 109.84 35.82 111.49 34.14 129.15 33.66 127.55 35.36 109.84", 1, "cls-20"], ["points", "35.36 109.84 33.66 127.55 27.53 127.53 28.31 119.84 24.7 119.84 25.49 112.3 35.36 109.84", 1, "cls-21"], ["points", "46.34 107.04 46.79 108.7 45.63 120.9 45.17 119.28 46.34 107.04", 1, "cls-20"], ["points", "45.17 119.28 45.63 120.9 42.18 120.89 41.7 119.28 45.17 119.28", 1, "cls-3"], ["points", "41.7 119.28 42.18 120.89 41.39 128.96 40.9 127.36 41.7 119.28", 1, "cls-20"], ["points", "40.9 127.36 41.39 128.95 34.51 128.93 33.99 127.34 40.9 127.36", 1, "cls-3"], ["points", "46.34 107.04 45.17 119.28 41.7 119.28 40.9 127.36 33.99 127.34 35.87 109.56 46.34 107.04", 1, "cls-21"], ["points", "56.83 104.81 57.28 106.47 55.19 128.83 54.73 127.24 56.83 104.81", 1, "cls-20"], ["points", "54.73 127.24 55.19 128.83 41.8 128.78 41.27 127.2 54.73 127.24", 1, "cls-3"], ["d", "M56.83,104.81l-2.1,22.43-13.46,0,.82-7.69,3.43,0,1.32-12.71,1.41-.33c.78-.18,1.81-.42,2.9-.65s2.23-.47,3.24-.65A20.43,20.43,0,0,1,56.83,104.81Z", 1, "cls-21"], ["points", "69.77 104.29 70.22 105.96 69.33 115.38 68.87 113.75 69.77 104.29", 1, "cls-20"], ["points", "68.87 113.75 69.33 115.38 65.13 115.38 64.65 113.75 68.87 113.75", 1, "cls-3"], ["points", "64.65 113.75 65.13 115.38 63.69 128.77 63.2 127.18 64.65 113.75", 1, "cls-20"], ["points", "63.2 127.18 63.69 128.77 55.71 128.74 55.18 127.16 63.2 127.18", 1, "cls-3"], ["d", "M65.82,104.17l1.62,0,1.22,0,.79,0,.32,0-.9,9.45H64.65L63.2,127.18l-8,0,2.39-22.41c.77-.11,1.54-.2,2.29-.28s1.47-.13,2.17-.17,1.37-.08,2-.1l1.79,0Z", 1, "cls-21"], ["points", "82.41 113.85 82.9 115.49 79.1 115.49 78.58 113.86 82.41 113.85", 1, "cls-16"], ["points", "89.8 127.28 90.27 128.87 81.54 128.84 81.03 127.25 89.8 127.28", 1, "cls-16"], ["points", "91.75 106.61 92.2 108.27 90.27 128.87 89.8 127.28 91.75 106.61", 1, "cls-22"], ["d", "M79.47,105.55l1.3.18c.75.1,1.76.23,2.94.36s2.51.25,3.89.35,2.8.16,4.15.17l-2,20.67-8.77,0,1.38-13.4H78.58l.89-8.31Z", 1, "cls-17"], ["points", "100.45 106.38 100.91 108.04 99.16 126.29 98.68 124.69 100.45 106.38", 1, "cls-22"], ["points", "98.68 124.69 99.16 126.29 96.75 126.29 96.26 124.69 98.68 124.69", 1, "cls-16"], ["points", "96.26 124.69 96.75 126.29 96.49 128.91 96 127.32 96.26 124.69", 1, "cls-23"], ["points", "96 127.32 96.49 128.91 90.8 128.89 90.28 127.3 96 127.32", 1, "cls-16"], ["d", "M100.45,106.38l-1.77,18.31H96.26L96,127.32l-5.72,0,2.15-20.59h1.75c.6,0,1.31,0,2,0s1.52-.05,2.25-.1,1.41-.1,2-.17Z", 1, "cls-17"], ["points", "109.14 105.15 109.6 106.81 107.46 128.84 106.98 127.25 109.14 105.15", 1, "cls-22"], ["points", "106.98 127.25 107.46 128.84 99.35 128.81 98.83 127.22 106.98 127.25", 1, "cls-16"], ["d", "M109.14,105.15,107,127.25l-8.15,0,2.19-21,1.17-.13c.64-.08,1.48-.17,2.37-.29s1.82-.23,2.64-.36,1.51-.24,1.94-.35Z", 1, "cls-17"], ["points", "117.83 102.99 118.29 104.66 115.98 128.7 115.5 127.12 117.83 102.99", 1, "cls-20"], ["points", "115.5 127.12 115.98 128.7 107.86 128.67 107.34 127.09 115.5 127.12", 1, "cls-3"], ["d", "M117.83,103l-2.33,24.13-8.16,0,2.32-22.17,1.11-.23c.62-.12,1.43-.3,2.3-.49s1.8-.4,2.64-.61,1.59-.42,2.12-.6Z", 1, "cls-21"], ["points", "133.96 98.1 134.43 99.74 133.48 109.6 133 107.99 133.96 98.1", 1, "cls-23"], ["points", "133 107.99 133.48 109.6 125.82 109.59 125.31 107.98 133 107.99", 1, "cls-16"], ["d", "M134,98.1,133,108h-7.69l.93-8.9L127,99c.44-.08,1-.18,1.76-.28s1.54-.22,2.43-.32S133,98.16,134,98.1Z", 1, "cls-17"], ["points", "143.78 99.44 144.24 101.11 141.62 128.48 141.14 126.9 143.78 99.44", 1, "cls-23"], ["points", "141.14 126.9 141.62 128.48 133.07 128.44 132.55 126.86 141.14 126.9", 1, "cls-16"], ["points", "152.34 100.23 152.8 101.89 150.24 128.49 149.75 126.9 152.34 100.23", 1, "cls-23"], ["points", "149.75 126.9 150.24 128.49 142.11 128.45 141.59 126.87 149.75 126.9", 1, "cls-16"], ["d", "M141.66,99.38h1.21l.5,0,.41,0-2.64,27.46-8.59,0,2.85-27.27.69,0,1.52-.07,2-.07,2.06,0Z", 1, "cls-17"], ["d", "M144.45,99.49l1,.05,2.18.14c.83.06,1.72.14,2.54.23a21.52,21.52,0,0,1,2.13.32l-2.58,26.67-8.17,0,2.86-27.38Z", 1, "cls-17"], ["points", "160.79 102.06 161.25 103.72 158.86 128.54 158.38 126.96 160.79 102.06", 1, "cls-20"], ["points", "158.38 126.96 158.86 128.54 150.74 128.51 150.21 126.93 158.38 126.96", 1, "cls-3"], ["d", "M153,100.41l.94.16c.53.1,1.24.22,2,.38s1.66.33,2.5.51,1.65.39,2.33.6L158.38,127l-8.17,0L153,100.41Z", 1, "cls-21"], ["points", "169.29 104.23 169.75 105.89 167.57 128.66 167.09 127.08 169.29 104.23", 1, "cls-20"], ["points", "167.09 127.08 167.57 128.66 159.44 128.63 158.93 127.05 167.09 127.08", 1, "cls-3"], ["points", "161.51 102.36 169.29 104.23 167.09 127.08 158.93 127.05 161.51 102.36", 1, "cls-21"], ["points", "177.81 106.39 178.27 108.05 176.28 128.8 175.8 127.21 177.81 106.39", 1, "cls-20"], ["points", "175.8 127.21 176.28 128.8 168.17 128.77 167.65 127.18 175.8 127.21", 1, "cls-3"], ["points", "170.02 104.52 177.81 106.39 175.8 127.21 167.65 127.18 170.02 104.52", 1, "cls-21"], ["d", "M186.4,111c.15.55.31,1.1.46,1.65,0,.06,0,.12,0,.18a1.29,1.29,0,0,1,0,.19,1.42,1.42,0,0,1,0,.2,1.55,1.55,0,0,1,0,.21l-.47-1.64,0-.21c0-.07,0-.13,0-.2a1.33,1.33,0,0,0-.05-.19C186.43,111.09,186.41,111,186.4,111Z", 1, "cls-20"], ["d", "M186.46,111.2v.35l0,.1v0l.26.93h0v0a.29.29,0,0,0,0,.09v0h0v0l-.47-1.64h0v0h0v0h0V111l.05.17Z", 1, "cls-20"], ["d", "M186.48,111.32Zm0,0L187,113h0l0,.09h0a.36.36,0,0,1,0,.11h0v0h0s0,.07,0,.1l-.47-1.63h0v-.08h0v0h0v0h0s0,0,0-.07v-.06h0v-.06h0Z", 1, "cls-20"], ["points", "186.56 111.75 187.03 113.39 187 114.15 186.54 112.51 186.56 111.75", 1, "cls-20"], ["points", "186.54 112.51 187 114.15 185.81 126.62 185.33 125.02 186.54 112.51", 1, "cls-20"], ["points", "185.33 125.02 185.81 126.62 176.97 126.59 176.46 125 185.33 125.02", 1, "cls-3"], ["d", "M178.39,106.52l4.27,1a3,3,0,0,1,.6.13,4.78,4.78,0,0,1,1.2.56,4.45,4.45,0,0,1,1.27,1.26,5.41,5.41,0,0,1,.83,2.24l0,.76L185.33,125l-8.87,0Z", 1, "cls-21"], ["points", "194.75 119.3 195.25 120.93 191.84 120.93 191.32 119.3 194.75 119.3", 1, "cls-3"], ["points", "202.32 132.88 202.79 134.47 193.87 134.44 193.36 132.85 202.32 132.88", 1, "cls-24"], ["points", "204.14 113.55 204.6 115.2 202.79 134.47 202.32 132.88 204.14 113.55", 1, "cls-25"], ["points", "204.89 133.23 205.39 134.83 203.56 134.82 203.05 133.22 204.89 133.23", 1, "cls-24"], ["points", "210.82 137.23 211.3 138.82 204.99 138.79 204.48 137.21 210.82 137.23", 1, "cls-24"], ["points", "212.85 116.27 213.31 117.92 211.3 138.82 210.82 137.23 212.85 116.27", 1, "cls-25"], ["points", "224.57 119.97 225.03 121.63 222.79 145.29 222.31 143.7 224.57 119.97", 1, "cls-25"], ["points", "222.31 143.7 222.79 145.29 211.59 145.24 211.07 143.66 222.31 143.7", 1, "cls-24"], ["points", "240.97 123.13 241.41 124.79 239.5 145.5 239.04 143.91 240.97 123.13", 1, "cls-25"], ["points", "239.04 143.91 239.5 145.5 223.46 145.44 222.93 143.85 239.04 143.91", 1, "cls-24"], ["points", "250.37 123.17 250.83 124.83 248.88 145.67 248.41 144.07 250.37 123.17", 1, "cls-25"], ["points", "248.41 144.07 248.88 145.67 240.17 145.63 239.65 144.04 248.41 144.07", 1, "cls-24"], ["points", "255.19 144.07 255.68 145.66 249.39 145.64 248.88 144.05 255.19 144.07", 1, "cls-24"], ["points", "256.16 144.25 256.64 145.84 255.68 145.66 255.19 144.07 256.16 144.25", 1, "cls-24"], ["points", "258.22 123.05 258.68 124.71 256.64 145.84 256.16 144.25 258.22 123.05", 1, "cls-25"], ["points", "267.87 122.94 268.32 124.6 263.36 146.46 262.87 144.87 267.87 122.94", 1, "cls-25"], ["points", "262.87 144.87 263.36 146.46 257.18 145.84 256.66 144.25 262.87 144.87", 1, "cls-24"], ["points", "276 123.58 276.46 125.24 271.44 147.35 270.94 145.76 276 123.58", 1, "cls-25"], ["points", "270.94 145.76 271.44 147.35 263.86 146.55 263.34 144.97 270.94 145.76", 1, "cls-24"], ["points", "293.21 126.27 293.64 127.94 292.97 130.36 292.53 128.7 293.21 126.27", 1, "cls-25"], ["points", "292.53 128.7 292.97 130.36 282.9 129.33 282.42 127.67 292.53 128.7", 1, "cls-24"], ["points", "274.77 146.49 275.3 148.09 272.33 147.79 271.79 146.2 274.77 146.49", 1, "cls-24"], ["points", "276.76 151.67 277.29 153.25 274.14 152.91 273.61 151.34 276.76 151.67", 1, "cls-24"], ["points", "282.42 127.67 282.9 129.33 277.29 153.25 276.76 151.67 282.42 127.67", 1, "cls-25"], ["d", "M198,112.17l.41,0a3.11,3.11,0,0,1,.43,0l.45.06.47.1,4.36,1.17-1.82,19.33-9,0,1.39-13.55h-3.43l.57-5.33h1.54a3,3,0,0,1,.34-.32,6.33,6.33,0,0,1,2.31-1.2,7,7,0,0,1,1.94-.28Z", 1, "cls-26"], ["points", "205.04 114.17 212.85 116.27 210.82 137.23 204.48 137.21 204.89 133.23 203.05 133.22 205.04 114.17", 1, "cls-26"], ["points", "213.88 117.1 224.57 119.97 222.31 143.7 211.07 143.66 213.88 117.1", 1, "cls-26"], ["d", "M225.47,120.38c.11,0,.71.22,1.66.49s2.23.6,3.71.94,3.16.67,4.87.92a34.39,34.39,0,0,0,5.09.4H241L239,143.91l-16.11-.06,2.54-23.47Z", 1, "cls-26"], ["points", "250.37 123.17 248.41 144.07 239.65 144.04 241.83 123.39 250.37 123.17", 1, "cls-26"], ["points", "258.22 123.05 256.16 144.25 255.19 144.07 248.88 144.05 251.04 123.28 258.22 123.05", 1, "cls-26"], ["points", "267.87 122.94 262.87 144.87 256.66 144.25 258.9 123.09 267.87 122.94", 1, "cls-26"], ["d", "M268.5,123l.95,0,2,.11c.78,0,1.62.1,2.41.16s1.55.14,2.13.23l-5.06,22.18-7.6-.79Z", 1, "cls-26"], ["d", "M277,124.21l.93.09,2.74.31c1.26.15,2.88.35,4.94.63s4.56.61,7.56,1l-.68,2.42-10.11-1-5.66,24-3.15-.33,1.16-4.84-3-.3,5.25-22Z", 1, "cls-26"], ["points", "303.58 126.96 304.05 128.59 302.66 134.63 302.18 133.01 303.58 126.96", 1, "cls-27"], ["points", "302.18 133.01 302.66 134.63 296.91 134.06 296.4 132.44 302.18 133.01", 1, "cls-24"], ["points", "297.94 125.93 303.58 126.96 302.18 133.01 296.4 132.44 297.94 125.93", 1, "cls-26"], ["points", "310.25 128.56 310.71 130.19 309.1 137.29 308.62 135.68 310.25 128.56", 1, "cls-27"], ["points", "308.62 135.68 309.1 137.29 302.96 136.67 302.45 135.06 308.62 135.68", 1, "cls-24"], ["points", "304.26 127.33 310.25 128.56 308.62 135.68 302.45 135.06 304.26 127.33", 1, "cls-26"], ["d", "M313.76,131.84h0m0,0v1.58h0l0,.06h0v0h0v0h0l-.48-1.63h0a.24.24,0,0,0,0-.08h0v-.06h0Zm0,0h0", 1, "cls-28"], ["d", "M313.84,132.14l.48,1.63h0v0h0v0h0s0,.06,0,.1v0h0v0h0l0,.24h0v0h0v0h0v0h0v.09h0v0h0v0h0L314,133.2h0v0h0v0h0v0h0v0h-.05a.29.29,0,0,0,0-.09h0Z", 1, "cls-29"], ["points", "313.95 133.2 314.43 134.82 314.18 137.93 313.7 136.32 313.95 133.2", 1, "cls-30"], ["points", "313.7 136.32 314.18 137.93 309.66 137.49 309.16 135.88 313.7 136.32", 1, "cls-24"], ["d", "M310.8,128.85a5,5,0,0,1,.56.23,4.59,4.59,0,0,1,1.06.69,4.17,4.17,0,0,1,1.05,1.32,4.57,4.57,0,0,1,.48,2.11l-.25,3.12-4.54-.44,1.64-7Z", 1, "cls-26"], ["points", "314.28 137.73 314.74 139.37 314.06 146 313.59 144.38 314.28 137.73", 1, "cls-30"], ["points", "313.59 144.38 314.06 146 302.16 144.8 301.64 143.18 313.59 144.38", 1, "cls-24"], ["points", "303.2 136.65 314.28 137.73 313.59 144.38 301.64 143.18 303.2 136.65", 1, "cls-26"], ["points", "314.12 145.68 314.57 147.31 313.86 152.67 313.4 151.05 314.12 145.68", 1, "cls-25"], ["points", "313.4 151.05 313.86 152.67 299.32 151.16 298.8 149.54 313.4 151.05", 1, "cls-24"], ["points", "300.03 144.27 314.12 145.68 313.4 151.05 298.8 149.54 300.03 144.27", 1, "cls-26"], ["d", "M314,152.26l.47,1.64h0a3.78,3.78,0,0,1-.09.39h0v0h0a2.93,2.93,0,0,1-.18.44,2.14,2.14,0,0,1-.1.22h0v0h0v0h0l-.14.23-.47-1.63a4.23,4.23,0,0,0,.31-.59l.13-.31h0l0,0h0v0h0l0-.06,0-.06h0v0h0a.36.36,0,0,1,0-.11s0,0,0-.06h0v0h0Z", 1, "cls-31"], ["d", "M313.34,153.82l.47,1.63-.06.1h0v0h0v0h0l0,0,0,0h0a.36.36,0,0,1-.07.1h-.09l-.06.07h0l0,0h-.07l-.2.22-.48-1.62a2.25,2.25,0,0,0,.21-.24l.17-.2h.05l.08-.11h0l0,0h0l0,0h0l0,0h0l.08-.12Z", 1, "cls-29"], ["d", "M312.62,154.75l.48,1.63,0,0h0c-.1.11-.21.21-.33.32h-.12l0,0-.05,0h0l-.11.09-.48-1.62.18-.15.18-.16.16-.15.13-.14h0l0,0Z", 1, "cls-28"], ["d", "M312,155.37l.48,1.62-.08.07h-.05l0,0-.15.11h-.05l-.16.11h0l-.18.11-.48-1.62.19-.12h.12l.08-.06,0,0h.14l.16-.13Z", 1, "cls-32"], ["d", "M311.21,155.89l.48,1.62-.14.08-.48-1.62,0,0,0,0,0,0h0Z", 1, "cls-33"], ["d", "M311.54,157.6h0l-.48-1.62h0l.49,1.62h0Z", 1, "cls-32"], ["d", "M311.05,156l.49,1.62,0,0h0l-.05,0h0l-.11.06h0l-.12.05-.49-1.62.07,0h0l0,0,0,0h0A.5.5,0,0,0,311,156h.05Z", 1, "cls-33"], ["d", "M310.65,156.19l.49,1.62,0,0h0l0,0h-.24l-.15,0-.2.07-.5-1.62.21-.06.18-.07.1,0h.16l0,0Z", 1, "cls-34"], ["d", "M310,156.47l.49,1.61h-.22l-.28.08h-.08l-.1,0h-.18l-.12,0-.49-1.61.12,0h.27l.13,0h.12l.12,0,.22-.06Z", 1, "cls-35"], ["d", "M309,156.7l.49,1.62h-.14l-.14,0-.11,0h-1.72l-.26-.8-.25-.81h1.94l.19,0Z", 1, "cls-36"], ["d", "M308.08,151.68l5.88.58s0,.18-.1.41a4.52,4.52,0,0,1-.39.92,5.8,5.8,0,0,1-.87,1.18,6.79,6.79,0,0,1-1.53,1.2l-.27.15a5.46,5.46,0,0,1-.67.28,7.86,7.86,0,0,1-1,.28,8,8,0,0,1-1.36.12h-.44l-.23,0-.23,0,1.24-5.07Z", 1, "cls-26"], ["points", "307.54 151.6 308.02 153.24 306.88 158.29 306.4 156.67 307.54 151.6", 1, "cls-27"], ["points", "306.4 156.67 306.88 158.29 302.9 157.92 302.39 156.3 306.4 156.67", 1, "cls-24"], ["points", "303.59 151.19 307.54 151.6 306.4 156.67 302.39 156.3 303.59 151.19", 1, "cls-26"], ["points", "303.06 151.09 303.53 152.72 302.39 157.83 301.91 156.21 303.06 151.09", 1, "cls-27"], ["points", "301.91 156.21 302.39 157.83 298.42 157.4 297.92 155.78 301.91 156.21", 1, "cls-24"], ["points", "299.11 150.7 303.06 151.09 301.91 156.21 297.92 155.79 299.11 150.7", 1, "cls-26"], ["points", "289.01 188.75 289.46 190.4 285.04 209.89 284.55 208.3 289.01 188.75", 1, "cls-37"], ["points", "284.55 208.3 285.04 209.89 276.72 208.93 276.19 207.33 284.55 208.3", 1, "cls-3"], ["points", "280.75 187.94 289.01 188.75 284.55 208.3 276.19 207.33 280.75 187.94", 1, "cls-21"], ["points", "297.93 189.76 298.38 191.41 296.62 199 296.15 197.37 297.93 189.76", 1, "cls-37"], ["points", "296.15 197.37 296.62 199 293.9 198.75 293.42 197.12 296.15 197.37", 1, "cls-2"], ["points", "293.42 197.12 293.9 198.75 291.19 210.59 290.7 209 293.42 197.12", 1, "cls-37"], ["points", "290.7 209 291.19 210.59 285.53 209.97 285.01 208.38 290.7 209", 1, "cls-3"], ["points", "289.67 188.96 297.93 189.76 296.15 197.37 293.42 197.12 290.7 209 285.01 208.38 289.67 188.96", 1, "cls-21"], ["points", "295.2 209.54 295.72 211.13 294.59 210.92 294.07 209.33 295.2 209.54", 1, "cls-14"], ["points", "302.6 209.56 303.08 211.15 295.72 211.13 295.2 209.54 302.6 209.56", 1, "cls-5"], ["points", "306.88 190.73 307.33 192.39 303.08 211.15 302.6 209.56 306.88 190.73", 1, "cls-37"], ["points", "298.62 189.93 306.88 190.73 302.6 209.56 295.2 209.54 294.07 209.33 298.62 189.93", 1, "cls-21"], ["points", "314.98 191.61 315.44 193.27 311.38 211.21 310.9 209.62 314.98 191.61", 1, "cls-37"], ["points", "310.9 209.62 311.38 211.21 303.64 211.19 303.12 209.6 310.9 209.62", 1, "cls-5"], ["points", "307.5 190.89 314.98 191.61 310.9 209.62 303.12 209.6 307.5 190.89", 1, "cls-21"], ["points", "324.7 192.62 325.15 194.28 321.34 211.23 320.85 209.63 324.7 192.62", 1, "cls-37"], ["points", "320.85 209.63 321.34 211.23 311.96 211.24 311.43 209.65 320.85 209.63", 1, "cls-5"], ["points", "315.64 191.76 324.7 192.62 320.85 209.63 311.43 209.65 315.64 191.76", 1, "cls-21"], ["points", "335.76 193.76 336.23 195.41 335.08 207.39 334.61 205.78 335.76 193.76", 1, "cls-38"], ["points", "332.49 208.56 332.98 210.17 332.7 211.33 332.21 209.74 332.49 208.56", 1, "cls-37"], ["points", "332.21 209.74 332.7 211.33 321.94 211.31 321.4 209.71 332.21 209.74", 1, "cls-5"], ["points", "338.77 209.24 339.23 210.84 332.98 210.17 332.49 208.56 338.77 209.24", 1, "cls-3"], ["points", "339.09 205.78 339.54 207.4 339.23 210.84 338.77 209.24 339.09 205.78", 1, "cls-38"], ["points", "325.42 192.79 335.76 193.76 334.61 205.78 339.09 205.78 338.77 209.24 332.49 208.56 332.21 209.74 321.4 209.71 325.42 192.79", 1, "cls-21"], ["points", "360.3 187.03 360.74 188.68 360.49 189.74 360.05 188.09 360.3 187.03", 1, "cls-20"], ["points", "361.25 188.2 361.69 189.84 361.42 191.07 360.98 189.43 361.25 188.2", 1, "cls-20"], ["points", "360.98 189.43 361.42 191.07 360.24 191.02 359.79 189.38 360.98 189.43", 1, "cls-5"], ["points", "359.79 189.38 360.24 191.02 357.75 202.07 357.29 200.47 359.79 189.38", 1, "cls-20"], ["points", "357.29 200.47 357.75 202.07 339.96 202.03 339.42 200.43 357.29 200.47", 1, "cls-5"], ["d", "M346.11,185.63,360.3,187l-.25,1.06,1.2.11-.27,1.23-1.19-.05-2.5,11.09-17.87,0,1-8.83a7.49,7.49,0,0,0,.86-.44A13.49,13.49,0,0,0,343,190a10.83,10.83,0,0,0,1.86-1.85,6.92,6.92,0,0,0,1.26-2.53Z", 1, "cls-21"], ["points", "360.71 179.7 361.16 181.33 359.95 186.79 359.49 185.17 360.71 179.7", 1, "cls-20"], ["points", "359.49 185.17 359.95 186.79 345.76 185.31 345.24 183.69 359.49 185.17", 1, "cls-3"], ["points", "346.52 178.26 360.71 179.7 359.49 185.17 345.24 183.69 346.52 178.26", 1, "cls-21"], ["points", "361.44 172.57 361.89 174.2 360.71 180.03 360.25 178.41 361.44 172.57", 1, "cls-20"], ["points", "360.25 178.41 360.71 180.03 346.49 178.57 345.96 176.96 360.25 178.41", 1, "cls-3"], ["points", "347.36 171.08 361.44 172.57 360.25 178.41 345.96 176.96 347.36 171.08", 1, "cls-21"], ["points", "359.48 158.68 359.94 160.32 358.52 166.44 358.06 164.83 359.48 158.68", 1, "cls-20"], ["points", "358.06 164.83 358.52 166.44 347.94 165.39 347.42 163.77 358.06 164.83", 1, "cls-3"], ["d", "M348.44,157.57l11,1.11-1.43,6.15-10.63-1.05.18-.6c.1-.35.23-.83.35-1.4s.25-1.23.34-1.95a18.12,18.12,0,0,0,.15-2.26Z", 1, "cls-21"], ["d", "M346.24,152.15l.52,1.62-.35-.42c-.19-.23-.45-.53-.7-.85l-.74-.89c-.21-.26-.38-.47-.44-.57l-.54-1.63.45.57.74.9.7.84.36.43Z", 1, "cls-3"], ["d", "M346.24,152.15h0l0,.14.48,1.48-.33-.4h0l0,0,0,0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0v0h0l0,0,0,0h0v0h0l0,0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0l0,0,0,0h0l0,0h0l-.14-.17-.07-.1h0l0,0h0v0h-.29v0l-.54-1.63,0,0h0v0h0l.37.46h0l.15.18h0v0h0v0h0v0h0v0h.05v0h0v0h0v0h0l.05.06h0v0h0l0,0h0l0,0h0l.16.19h0l.07.08.12.15h0l0,0h0l0,0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0l0,0h0l0,0h0l.25.3h0l.05.06h0l0,0h0l0,0h0l0,0h0l0,0h.19Z", 1, "cls-3"], ["d", "M347.37,154.61c.18.54.35,1.08.52,1.61-.05-.16-.11-.34-.18-.53s-.16-.39-.25-.59-.2-.42-.31-.64l-.39-.69-.52-1.62c.14.23.27.46.38.68s.23.44.32.65.17.4.25.59.13.37.18.54Z", 1, "cls-3"], ["d", "M347.55,155.16V156l0,.05v0l0,.1s0-.08,0-.12h0l0-.05h0l0-.05h0v0h0l0,0h0l0-.07h0l0-.07h-.18v0h0l0-.07h0l0,0h0v0h-.1v0h0v0h0v0h0l-.15-.3-.12-.2h0v0h0l0,0H347l0,0h0v0h0v0h0l0,0h0v0h-.08v0h0l-.52-1.62m0,0h0l0,0h.06v0h.07v0h0v0h0v0h0l0,0h0l0,.05h0v0h0l0,0h0v0h.08v0h.23v0h0v0h0l0,0h0l0,.09h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,.08h0v0h0l.09.27h0l.17.55", 1, "cls-6"], ["points", "363.37 157.79 363.81 159.41 348.23 157.77 347.71 156.16 363.37 157.79", 1, "cls-3"], ["points", "364.74 151.49 365.18 153.13 363.81 159.41 363.37 157.79 364.74 151.49", 1, "cls-20"], ["d", "M344,149.41l20.75,2.08-1.38,6.3-15.64-1.63a2.5,2.5,0,0,0-.05-.35,7.05,7.05,0,0,0-.19-.86,10.39,10.39,0,0,0-.45-1.26,12.59,12.59,0,0,0-.79-1.54l-.36-.43-.7-.84-.74-.9c-.21-.26-.38-.47-.45-.57Z", 1, "cls-21"], ["d", "M343.25,148.88l.18.53,0,0h-.05l0-.06,0,0h0c-.06-.09-.12-.2-.2-.34h0v-.06h0a2.42,2.42,0,0,1-.12-.23h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0-.05h0s0-.07,0-.11h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0V147l0-.08v-.2l0-.13v-.5l-.07-.21h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h.07v0h0l0,0h0l.11.23h0l.08.13h0v0h0v0h0a1.6,1.6,0,0,0,.11.19h0v0h.09l0,0,.36,1.08Zm-1.31-3.06h0v0", 1, "cls-36"], ["points", "367.36 150.32 367.79 151.94 343.43 149.41 342.89 147.8 367.36 150.32", 1, "cls-24"], ["points", "369.15 142 369.57 143.64 367.79 151.94 367.36 150.32 369.15 142", 1, "cls-25"], ["d", "M341.76,139.27,369.15,142l-1.8,8.32-24.46-2.52a6.46,6.46,0,0,1-.42-.71,10.32,10.32,0,0,1-.68-1.77,10.52,10.52,0,0,1-.42-2.66,11.36,11.36,0,0,1,.39-3.39Z", 1, "cls-26"], ["points", "370.39 131.7 370.81 133.34 368.94 141.97 368.5 140.36 370.39 131.7", 1, "cls-25"], ["points", "368.5 140.36 368.94 141.97 341.57 139.1 341.01 137.49 368.5 140.36", 1, "cls-24"], ["d", "M348.23,129.47l22.16,2.23-1.89,8.66L341,137.49c0-.06.14-.42.38-1a14.54,14.54,0,0,1,1.17-2.09,14.85,14.85,0,0,1,2.2-2.56,15.22,15.22,0,0,1,3.47-2.4Z", 1, "cls-26"], ["points", "360.24 55.84 360.7 57.51 358.32 82.35 357.84 80.76 360.24 55.84", 1, "cls-39"], ["d", "M358.32,82.35l-1,.09-.79.06h-7.17l-.52-1.59h3c.95,0,1.91-.1,2.79-.16h1.22l.28,0h.09l.64-.05h0l.68-.06h.34l.48,1.59Z", 1, "cls-40"], ["d", "M360.24,55.84l-2.4,24.92-1,.09c-.58.05-1.36.11-2.23.16s-1.84.12-2.79.16-1.87.07-2.68.07h-.3l2.66-25.36,8.76,0Z", 1, "cls-41"], ["points", "350.81 55.84 351.26 57.5 348.86 82.84 348.38 81.25 350.81 55.84", 1, "cls-39"], ["d", "M348.38,81.25l.48,1.59h-.11l-.88,0H345.5c-.91,0-1.92-.12-2.94-.21h-1.67l-.14,0h-.5l-.14,0h-.53m-.52-1.58h.49l.09,0h.14c.73.1,1.5.18,2.27.25h1.19l.33,0h2.1l1.4.06h1.31", 1, "cls-6"], ["d", "M350.81,55.84l-2.43,25.41-1.05,0c-.6,0-1.41,0-2.32-.11s-1.94-.11-3-.2-2.06-.21-3-.34l2.58-24.69,9.17,0Z", 1, "cls-41"], ["points", "340.94 55.78 341.4 57.44 339.06 82.08 338.58 80.5 340.94 55.78", 1, "cls-39"], ["d", "M339.06,82.08l-.37-.06h-.87l-.14,0h0l-.15,0h0l-.21,0h0l-.22,0H337l-.14,0h-5.76l-.05-.16-.46-1.43h1.35l.08,0h.5l.08,0h.17l.42.09h0l.49.1h0l.09,0h.81l.08,0h.2l.08,0h0l.11,0h3.31l.22,0h0l.48,1.58Z", 1, "cls-40"], ["d", "M340.94,55.78l-2.36,24.71-.89-.14c-.51-.08-1.2-.2-2-.35s-1.67-.31-2.55-.49-1.78-.38-2.6-.59L333,55.81l8,0Z", 1, "cls-41"], ["points", "332.23 57.53 332.69 59.19 330.64 80.44 330.15 78.85 332.23 57.53", 1, "cls-39"], ["d", "M330.15,78.85l.48,1.59-.71-.12-1.5-.25-1.8-.29-1.6-.23L324.51,78l1.61.23,1.8.29,1.52.25Z", 1, "cls-40"], ["d", "M330.45,79.85l.19.59h-.38l-.33-.06h-1.09l-.07,0h0l-.35-.05L328,80h0l-.26,0h-.51l-.11,0h-.26l-.28,0-1.6-.23L324.51,78l.15,0h.42l.08,0h.12l.16,0h0l.66.1,1.81.29.4.06h1.58l.14,0h.1l.3,1Z", 1, "cls-40"], ["d", "M332.23,57.53l-2.08,21.32-.71-.12-1.52-.25-1.8-.29c-.6-.09-1.16-.18-1.61-.23l2.11-20.41,5.61,0Z", 1, "cls-41"], ["points", "319.23 64.99 319.72 66.62 316.01 66.62 315.5 64.99 319.23 64.99", 1, "cls-5"], ["d", "M324,77.86l.47,1.6c-.78-.1-1.55-.17-2.25-.24s-1.34-.12-1.89-.16L319,79l-.56,0-.5-1.59.56,0,1.33.09,1.9.17c.71.06,1.48.14,2.27.23Z", 1, "cls-40"], ["d", "M324,77.86l.47,1.6-.4,0h-3.34l-.25,0h-2L318,77.33h5.19l.11,0h.54l.19,0h0Z", 1, "cls-40"], ["points", "325.99 57.44 326.45 59.1 324.51 79.45 324.04 77.86 325.99 57.44", 1, "cls-39"], ["d", "M326,57.44,324,77.86c-.79-.09-1.56-.17-2.27-.23l-1.9-.17-1.33-.09-.56,0L319.23,65H315.5l.79-7.51,9.7,0Z", 1, "cls-41"], ["points", "315.61 57.47 316.06 59.13 315.35 66.64 314.89 65.01 315.61 57.47", 1, "cls-20"], ["points", "314.89 65.01 315.35 66.64 311.66 66.65 311.19 65.01 314.89 65.01", 1, "cls-3"], ["points", "311.19 65.01 311.66 66.65 310.46 78.96 309.97 77.36 311.19 65.01", 1, "cls-20"], ["d", "M310,77.36l.49,1.6-1.11.05-2.4.16c-.93.07-1.95.16-2.93.26s-1.95.23-2.75.38l-.53-1.59c.81-.14,1.77-.27,2.76-.38s2-.19,2.95-.26l2.41-.16,1.11-.06Z", 1, "cls-3"], ["d", "M310.46,79h-.33l-.72,0h-2.54l-.31,0H304l-.14,0h0l-.57.07h-.05l-.26,0h-.08l-.09,0h-.21l-.12,0h-.88l-.53-1.59,1-.14h0l.17,0h2.08l.22,0h.1l.22,0h4.08l1,0H310l.49,1.6Z", 1, "cls-3"], ["d", "M301.07,78.16l.53,1.59h0l-.3,0h0l-.53-1.59h.08l.08,0h.17Z", 1, "cls-3"], ["d", "M315.61,57.47,314.9,65h-3.71L310,77.36l-1.12.06-2.41.16c-.93.07-2,.16-2.95.26s-1.95.23-2.76.38l2.19-20.71,12.68,0Z", 1, "cls-21"], ["points", "301.65 65.98 302.11 67.62 301.32 75.84 300.85 74.22 301.65 65.98", 1, "cls-39"], ["points", "300.85 74.22 301.32 75.84 294.26 75.83 293.75 74.22 300.85 74.22", 1, "cls-40"], ["d", "M301.65,66l-.8,8.24h-7.1s0-.16,0-.36,0-.46,0-.74,0-.57.07-.84.05-.5.07-.66l.59-5.63Z", 1, "cls-41"], ["points", "282.84 82.65 283.34 84.27 281.13 84.32 280.62 82.71 282.84 82.65", 1, "cls-42"], ["d", "M287.9,79.19l.47,1.63a3.21,3.21,0,0,1-.24.5,5.65,5.65,0,0,1-.79,1,6.53,6.53,0,0,1-1.53,1.13,8.73,8.73,0,0,1-2.47.81l-.49-1.62a8.48,8.48,0,0,0,2.48-.82,6.25,6.25,0,0,0,1.53-1.12,5.14,5.14,0,0,0,.79-1,4,4,0,0,0,.25-.5Z", 1, "cls-42"], ["d", "M287.9,79.19l.47,1.63h0v0h0v0h0s0,.09-.06.15h0l0,.05,0,0h-.08l0,0-.47-1.63,0,0h.24l0-.06h0Z", 1, "cls-42"], ["d", "M287.6,79.77l.47,1.64a.21.21,0,0,1,0,.06h0l-.08.11a2.43,2.43,0,0,1-.14.2l-.12.15h-.05l-.19.2h0L287,80.61l.2-.23,0,0h0l.05-.06h.05l.09-.12h0v0h0l.09-.13h.07v0Z", 1, "cls-42"], ["d", "M287,80.61l.48,1.62h-.13l-.1.1h-.12l0,0h0l-.24.2-.48-1.62h.16l.08-.06h.14l0,0h.14l.07-.07Z", 1, "cls-42"], ["d", "M286.35,81.17l.48,1.62-.2.15h0l0,0h0l0,0h0l0,0h0l-.21.14h-.1l-.05,0-.48-1.62h0l0,0h.2l0,0h.07l0,0h.06l.1-.07h.09Z", 1, "cls-42"], ["d", "M284.1,82.34l.49,1.62h-.16l-.1,0H284l-.18,0h-.18l-.27,0-.5-1.62h.06l.21,0h.05l.1,0h.32l.3-.08h.06l.16,0Z", 1, "cls-42"], ["d", "M287.9,79.19a4,4,0,0,1-.25.5,5.14,5.14,0,0,1-.79,1,6.25,6.25,0,0,1-1.53,1.12,8.48,8.48,0,0,1-2.48.82l-2.23.06.34-3.49,6.94,0Z", 1, "cls-26"], ["points", "288.14 73.55 288.61 75.19 288.44 78.32 287.97 76.7 288.14 73.55", 1, "cls-30"], ["d", "M288,76.7l.27.92m.2.7h0v0h-.06v0h-.1v0h-.14a.34.34,0,0,1,0,.08h0l-.22-.75-.26-.87h.07a1.45,1.45,0,0,0,.06-.19h.06v0h0v0h0v0h0v-.07l0-.09h0v0h0v0h0v0h0v0h0V76.7", 1, "cls-6"], ["points", "287.6 78.17 288.08 79.79 281.05 79.78 280.55 78.17 287.6 78.17", 1, "cls-42"], ["d", "M288.14,73.55,288,76.7c0,.21-.06.41-.1.59s-.08.33-.12.45-.07.23-.1.31a1,1,0,0,0,0,.12h-7.06l.48-4.6Z", 1, "cls-26"], ["points", "288.42 62.3 288.89 63.94 287.95 73.65 287.48 72.04 288.42 62.3", 1, "cls-25"], ["points", "287.48 72.04 287.95 73.65 280.79 73.64 280.28 72.03 287.48 72.04", 1, "cls-42"], ["points", "288.42 62.3 287.48 72.04 280.28 72.03 281.29 62.31 288.42 62.3", 1, "cls-26"], ["points", "281.13 63.05 281.59 64.7 279.82 83.25 279.34 81.66 281.13 63.05", 1, "cls-30"], ["points", "279.34 81.66 279.82 83.25 271.52 83.28 271 81.69 279.34 81.66", 1, "cls-42"], ["points", "281.13 63.05 279.34 81.66 271 81.69 272.95 63.07 281.13 63.05", 1, "cls-26"], ["points", "272.35 63.05 272.81 64.71 271.01 83.31 270.53 81.71 272.35 63.05", 1, "cls-25"], ["d", "M270.81,82.63l.2.68h-6.15l-.51-1.6.51,0h3.75l1.18,0h.74l.28.92Z", 1, "cls-36"], ["d", "M272.35,63.05l-1.82,18.66h-.74l-1.61,0-2-.05c-.67,0-1.31-.06-1.86-.11l1.91-18.45,6.09,0Z", 1, "cls-26"], ["points", "266.23 51.21 266.68 52.88 263.84 82.35 263.36 80.78 266.23 51.21", 1, "cls-25"], ["d", "M263.72,82l.12.39h-2.45l-.2,0h0c-.71-.06-1.5-.15-2.28-.25h0l-.14,0h-1.52l-.55-.1L256.18,80c.21,0,.43.09.65.12h1l.14,0h.07l.11,0h0l.22,0,2,.22h.07l.2,0,.23,0h2.43l.37,1.19Z", 1, "cls-36"], ["d", "M266.22,51.21l-2.86,29.57-.84-.06c-.48,0-1.11-.08-1.83-.15s-1.51-.14-2.29-.24-1.55-.22-2.22-.36l3-28.72,7.06,0Z", 1, "cls-26"], ["points", "258.48 51.14 258.94 52.81 256.18 81.49 255.69 79.91 258.48 51.14", 1, "cls-25"], ["d", "M255.69,79.91l.49,1.58h-2.62l-.1,0h0l-2.26-.46h0l-1.2-.26h0l-.13,0h0l-.06,0h-.69l-.4-1.23m-.12-.35h.48l.06,0h0l.09,0h.16l.07,0h.67l.14,0h0l.39.08h0l.39.08h0l.25,0h.22l.1,0h1.06l.11,0h.1l.13,0h.36l.07,0h.6l.12,0h.11l.08,0h0l.1,0h.15l.12,0h0l.39.07h0l.1,0h.06l.09,0h.23", 1, "cls-6"], ["d", "M258.48,51.14l-2.79,28.77-.87-.16L253,79.4l-2.27-.46c-.76-.16-1.49-.32-2.09-.47l2.84-27.3Z", 1, "cls-26"], ["points", "250.73 51.01 251.19 52.67 248.57 79.9 248.09 78.32 250.73 51.01", 1, "cls-30"], ["points", "248.09 78.32 248.57 79.9 240.65 77.85 240.13 76.27 248.09 78.32", 1, "cls-36"], ["points", "250.73 51.01 248.09 78.32 240.13 76.27 242.77 51.04 250.73 51.01", 1, "cls-26"], ["points", "242.02 50.82 242.48 52.48 240.06 77.63 239.58 76.05 242.02 50.82", 1, "cls-30"], [3, "click", "touchstart"], ["points", "239.58 76.05 240.06 77.63 232.15 75.59 231.63 74 239.58 76.05"], ["points", "242.02 50.82 239.58 76.05 231.63 74 234.05 50.85 242.02 50.82"], ["points", "233.36 50.63 233.82 52.3 231.59 75.36 231.1 73.77 233.36 50.63", 1, "cls-25"], ["points", "231.1 73.77 231.59 75.36 225.25 73.74 224.73 72.14 231.1 73.77", 1, "cls-36"], ["points", "233.36 50.63 231.1 73.77 224.73 72.14 226.96 50.66 233.36 50.63", 1, "cls-26"], ["points", "226.26 50.43 226.71 52.09 224.67 73.53 224.19 71.94 226.26 50.43", 1, "cls-30"], ["points", "224.19 71.94 224.67 73.53 215.58 71.19 215.06 69.59 224.19 71.94", 1, "cls-36"], ["points", "226.26 50.43 224.19 71.94 215.06 69.59 217.07 50.51 226.26 50.43", 1, "cls-26"], ["d", "M207.22,67.88l.38,1.19-.09,0h-.38l-.07,0-.26-.09h-.05l-.05,0h-1.22l-.06,0h-.19l0,0h0l0,0h0l-.06,0h0l-.12,0h0l-.24-.1h0l-.06,0h-1l0,0h-.08l-.51-1.59h0l.11.08h0l.05,0h0l0,0h0l0,0h0l0,0h.86l0,0h0l0,0h0l.08,0h0l.08,0h0l0,0h0l.08,0h0l.18.07h0l.51.19h0l.3.11h0l.08,0h1.26l0,0,.12.4Z", 1, "cls-36"], ["points", "214.49 69.37 214.96 70.97 207.6 69.08 207.1 67.47 214.49 69.37", 1, "cls-36"], ["points", "216.3 50.27 216.75 51.93 214.96 70.97 214.49 69.37 216.3 50.27", 1, "cls-30"], ["d", "M216.3,50.27l-1.81,19.1-7.39-1.89-.55-.17-1.13-.38c-.43-.16-.89-.34-1.3-.52a6.44,6.44,0,0,1-1-.58l1.62-15.52Z", 1, "cls-26"], ["points", "203.7 54.16 204.17 55.8 203.06 67.28 202.58 65.67 203.7 54.16", 1, "cls-25"], ["d", "M202.58,65.67h0l.48,1.61,0,0h0l0,0h0a6,6,0,0,1-.51-.33h0l-.06,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l-.06,0h0l0,0h0l-.09-.07h0c-.13-.1-.26-.2-.39-.32h0l-.13-.11h0l-.1-.09h0l0,0h0l-.05-.05h0l0,0-.06,0,0,0h0l0,0h0l0,0h0l0,0h0l0,0,0,0,0,0,0,0,0,0h0l0,0,0,0,0,0,0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0-.17-.18h0l0,0h0l0-.06h0l-.06-.06h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0h0l0,0,0,0h0l0,0,0,0h0l0,0,0,0,0,0,0,0h0l0,0,0,0h0l0,0,0,0,0,0,0,0,0,0,0,0h0l0,0h0l0,0h0l0-.08h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l-.1-.17h0l0-.05h0l-.07-.13h0l-.05-.09h0l0,0h0l-.05-.09h0l0-.05h0l0,0h0l0,0h0l0-.05h0l-.05-.09h0l0-.05h0l0-.09h0l0-.05h0l0-.09h0l0,0,0-.05h0s-.05-.09-.07-.14h0l0,0h0l0-.1h0l0,0h0l0-.05h0l0,0h0l0-.05h0l0,0h0l0,0h0l0-.05h0v0h0l0-.05h0l0,0h0l0-.06h0l0,0h0v0h0l0-.05h0l0-.11h0v0h0a.36.36,0,0,1,0-.11h0c-.13-.44-.27-.88-.4-1.32V58.7h0l0,0h0v.06h0l0,0h0l0,0h0l0,.05h0V59l0,0h0l0,0h0l0,.05h0l0,0h0l0,.05h0v0h0l0,0h0l0,.06h0a.3.3,0,0,1,0,.1h0l0,0h0l0,0h0a1,1,0,0,0,.07.15h0l0,0h0l0,0h0l0,.05h0l0,0h0l0,0h0l0,.05h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,.05h0l0,0h0l0,0h0l0,0h0l0,.05,0,0h0l0,0h0l0,0,0,0h0l0,0h0l0,0,0,.05,0,0,0,0,0,0,0,0,0,0h0l0,0,0,0,0,0h0l0,0h0l0,0h0l0,0h0l.1.17h0l.14.19h0l0,0h0l.06.08h0l0,0h0l.05.08h0l0,0h0l0,0h0l0,0h0l0,0h0l.06.07h0c.05.08.11.15.16.22h0l0,0h0l.06.07h0l0,0h0l.06.07h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l.06,0h0l0,0h0a13.54,13.54,0,0,0,1.33,1.1h0l.37.26h0l.05,0h0l0,0h.18l.06,0h.08Zm-4.15-3.25-.05-.09", 1, "cls-36"], ["d", "M203.7,54.16l-1.12,11.51a11.86,11.86,0,0,1-1.18-.82,14.36,14.36,0,0,1-2.21-2.18,12.14,12.14,0,0,1-2-3.56,11.53,11.53,0,0,1-.61-4.94Z", 1, "cls-26"], ["points", "203.8 38.34 204.27 39.98 202.96 53.54 202.48 51.93 203.8 38.34", 1, "cls-25"], ["points", "202.48 51.93 202.96 53.54 195.89 53.49 195.38 51.89 202.48 51.93", 1, "cls-42"], ["points", "203.8 38.34 202.48 51.93 195.38 51.89 196.78 38.38 203.8 38.34", 1, "cls-26"], ["points", "185.07 35.75 185.53 37.4 184.17 51.52 183.69 49.91 185.07 35.75", 1, "cls-23"], ["points", "183.69 49.91 184.17 51.52 176.8 51.5 176.29 49.9 183.69 49.91", 1, "cls-16"], ["points", "185.07 35.75 183.69 49.91 176.29 49.9 177.76 35.77 185.07 35.75", 1, "cls-17"], ["d", "M184.73,52l.47,1.64a5.05,5.05,0,0,1-.13.62,7.37,7.37,0,0,1-.54,1.42,9.63,9.63,0,0,1-1.23,1.88,11.71,11.71,0,0,1-2.22,2L180.59,58a11.82,11.82,0,0,0,2.23-2A9.48,9.48,0,0,0,184.06,54a7.13,7.13,0,0,0,.54-1.42A4.68,4.68,0,0,0,184.73,52Z", 1, "cls-43"], ["d", "M184.73,52l.47,1.64h-.15c-.05.18-.11.4-.2.64h0l0,.07h0v0h0v0h0v0h0v0h0v0h0v.05h0a.36.36,0,0,0,0,.09h0a7.67,7.67,0,0,1-.48.87l-.47-1.63c.17-.28.32-.55.44-.8v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0-.07h0v0h0v0h0v0h0l0,0h0a1,1,0,0,0,.05-.16v0h0v0h0v0h0v0h0a3,3,0,0,0,.08-.32c0-.12,0-.21,0-.25h0Z", 1, "cls-43"], ["d", "M181.19,57.5l.49,1.62h-.1l-.15.11h0l-.06,0h0l-.25.18h0L180.59,58h0l.37-.27h0l0,0h.07l.06,0Z", 1, "cls-43"], ["d", "M180.59,58l.49,1.62-.41.23c-.23.13-.55.3-.93.49s-.8.37-1.24.55a11.94,11.94,0,0,1-1.36.44l-.51-1.61a9.84,9.84,0,0,0,1.36-.45c.45-.17.88-.37,1.25-.55s.7-.35.94-.48l.41-.24Z", 1, "cls-43"], ["d", "M181.08,59.57h-.41l-.4.22h-.09l-.14.07-.64.31-.5-1.62h0l0,0h0l.24-.12h0c.38-.18.7-.35.94-.48h0l.17-.1h0l0,0h.05l0,0h.12l.49,1.62Z", 1, "cls-43"], ["d", "M178.9,58.84l.5,1.61-.07,0h-.24l-.08,0,0,0h-.33l-.14.06h0l-.21.08H178l-.14.05h-.11l-.51-1.61.05,0h0l.07,0h0l.32-.11h0l.05,0h.31l.05,0,0,0h0l.33-.14.06,0h.33Z", 1, "cls-43"], ["d", "M177.26,59.49l.51,1.61h-.32l-.2.06h-.11l-.38-1.19-.13-.42h0l.2-.06h0l.36-.1h0Z", 1, "cls-43"], ["d", "M184.73,52a4.68,4.68,0,0,1-.13.62,7.13,7.13,0,0,1-.54,1.42,9.48,9.48,0,0,1-1.24,1.89,11.82,11.82,0,0,1-2.23,2l-.41.24c-.24.13-.56.3-.94.48s-.8.38-1.25.55a9.84,9.84,0,0,1-1.36.45l.8-7.67Z", 1, "cls-17"], ["points", "170.5 58.98 171.01 60.57 168.59 59.94 168.07 58.34 170.5 58.98", 1, "cls-43"], ["d", "M175.7,59.16l.48,1.6-.17,0c-.1,0-.24.05-.42.07s-.4.06-.66.08-.55,0-.87,0l-.67,0-.74-.07-.79-.12-.85-.19L170.5,59c.3.07.58.14.86.19l.8.12.74.07.67,0c.33,0,.62,0,.88,0s.48-.05.66-.08l.42-.07.17,0Z", 1, "cls-43"], ["d", "M175.7,59.16l.21.71.27.89h-.29l-.15,0-.48-1.6.27,0h0l.1,0h.07Z", 1, "cls-43"], ["d", "M175.26,59.25l.48,1.6-.15,0h0a5.15,5.15,0,0,1-.66.07H171l-.2-.63-.31-1h0l.13,0h0l.23.05h3.24l.28,0h.27l.39,0h.22Z", 1, "cls-43"], ["points", "177.29 42.72 177.75 44.38 176.18 60.76 175.7 59.16 177.29 42.72", 1, "cls-22"], ["d", "M177.29,42.72,175.7,59.16l-.17,0-.42.07c-.18,0-.4.06-.66.08s-.55,0-.88,0l-.67,0-.74-.07-.8-.12c-.28-.05-.56-.12-.86-.19l-2.43-.63,1.63-15.61,7.59,0Z", 1, "cls-17"], ["points", "169.04 42.63 169.51 44.28 168.03 59.78 167.56 58.18 169.04 42.63", 1, "cls-22"], ["points", "167.56 58.18 168.03 59.78 160.4 58.02 159.89 56.41 167.56 58.18", 1, "cls-43"], ["points", "169.04 42.63 167.56 58.18 159.89 56.41 161.32 42.65 169.04 42.63", 1, "cls-17"], ["points", "160.67 42.47 161.13 44.12 159.82 57.81 159.35 56.2 160.67 42.47", 1, "cls-22"], ["points", "159.35 56.2 159.82 57.81 151.99 56.24 151.48 54.63 159.35 56.2", 1, "cls-43"], ["points", "160.67 42.47 159.35 56.2 151.48 54.63 152.75 42.49 160.67 42.47", 1, "cls-17"], ["points", "152.09 42.34 152.56 43.98 151.39 56.05 150.91 54.44 152.09 42.34", 1, "cls-22"], ["points", "150.91 54.44 151.39 56.05 145.44 54.99 144.94 53.38 150.91 54.44", 1, "cls-44"], ["points", "152.09 42.34 150.91 54.44 144.94 53.38 146.08 42.35 152.09 42.34", 1, "cls-17"], ["points", "138.95 39.79 139.44 41.43 139.21 43.7 138.72 42.07 138.95 39.79", 1, "cls-23"], ["points", "145.35 42.05 145.81 43.7 144.77 54.7 144.3 53.09 145.35 42.05", 1, "cls-22"], ["points", "144.3 53.09 144.77 54.7 134.43 53.16 133.91 51.55 144.3 53.09", 1, "cls-44"], ["points", "138.95 39.79 138.72 42.07 145.35 42.05 144.3 53.09 133.91 51.55 135.14 39.8 138.95 39.79", 1, "cls-17"], ["points", "139.24 27.63 139.69 29.29 138.69 40.01 138.23 38.38 139.24 27.63", 1, "cls-20"], ["points", "138.23 38.38 138.69 40.01 134.44 40.01 133.96 38.38 138.23 38.38", 1, "cls-3"], ["points", "133.96 38.38 134.44 40.01 133.25 52.22 132.75 50.63 133.96 38.38", 1, "cls-20"], ["points", "132.75 50.63 133.25 52.22 125.24 51.28 124.71 49.69 132.75 50.63", 1, "cls-3"], ["points", "139.24 27.63 138.23 38.38 133.96 38.38 132.75 50.63 124.71 49.69 127.06 27.68 139.24 27.63", 1, "cls-21"], ["points", "126.34 27.55 126.8 29.21 124.69 51.2 124.21 49.61 126.34 27.55", 1, "cls-20"], ["d", "M124.21,49.61l.48,1.59-1.06-.11-2.24-.2-2.6-.23c-.84-.07-1.61-.13-2.17-.16l-.52-1.58c.57,0,1.34.08,2.18.15l2.62.23,2.24.2,1.07.11Z", 1, "cls-3"], ["d", "M124.69,51.2H122l-.23,0h0l-.4,0h0L120,50.76h-.13l-.28,0h0l-.17,0h-.16l-.2,0h-1.64l-.81-.06-.52-1.59", 1, "cls-6"], ["d", "M126.34,27.55l-2.13,22.06-1.07-.11-2.24-.21-2.62-.22c-.84-.07-1.61-.13-2.18-.15l2.23-21.34,8,0Z", 1, "cls-21"], ["points", "117.7 27.49 118.16 29.15 116.11 50.45 115.63 48.86 117.7 27.49", 1, "cls-22"], ["d", "M115.63,48.86,116,50l.13.43h-8.06l-.52-1.59h2.78l.52,0h3.67l.25,0h.88Z", 1, "cls-45"], ["d", "M117.7,27.49l-2.07,21.37-.88-.06-2-.13-2.48-.12-2.49-.06h-.29l2.19-21,8,0Z", 1, "cls-17"], ["points", "109.06 27.46 109.53 29.12 107.51 50.09 107.03 48.49 109.06 27.46", 1, "cls-22"], ["points", "107.03 48.49 107.51 50.09 99.42 50 98.9 48.41 107.03 48.49"], ["points", "109.06 27.46 107.03 48.49 98.9 48.41 101.08 27.49 109.06 27.46"], ["points", "100.43 27.48 100.89 29.14 98.91 50.05 98.43 48.45 100.43 27.48", 1, "cls-20"], ["d", "M98.43,48.45l.48,1.6h-1.3l-2.76,0-3.32.07c-1.09,0-2.14.06-3,.1L88,48.68l3-.1,3.33-.07,2.77,0,1.3,0Z", 1, "cls-3"], ["d", "M98.43,48.45l.48,1.6m0,0H97.61l-2.76,0-2.17,0H89.26l-.7,0L88,48.68h10.4", 1, "cls-6"], ["d", "M100.43,27.48l-2,21-1.3,0-2.77,0L91,48.58c-1.11,0-2.16.06-3,.1l2.24-21.17Z", 1, "cls-21"], ["points", "89.63 27.52 90.09 29.18 88.09 50.34 87.61 48.75 89.63 27.52", 1, "cls-20"], ["d", "M87.6,48.75l.49,1.59-1,0-2,.1-2.42.13-2.16.11L80,49.15,82.17,49l2.44-.13,2-.1.95,0Z", 1, "cls-3"], ["d", "M88.09,50.34h-.42l-.54,0h0l-.26,0H84.28l-1.6.08h0l-.6,0H80.52l-.23-.7L80,49.14h0l.77,0h1l.41,0,.3,0h4.89l.24,0,.49,1.6Z", 1, "cls-3"], ["d", "M89.63,27.52l-2,21.23-.95,0-2,.11L82.17,49,80,49.15l2.25-21.6,7.38,0Z", 1, "cls-21"], ["points", "72.2 39.53 72.7 41.16 68.09 41.15 67.57 39.53 72.2 39.53", 1, "cls-16"], ["d", "M79.59,49.25,80,50.47l.11.38h-1l-.17,0H75.66l-.17,0H75.1l-.17,0H73.84l-.93.07H71.65l-.51-1.59h2.2l.21,0h2.52l.29,0h3.23Z", 1, "cls-45"], ["points", "81.64 27.57 82.08 29.23 80.06 50.85 79.59 49.25 81.64 27.57", 1, "cls-22"], ["d", "M81.63,27.57l-2,21.68-1.14.08-2.38.18-2.73.2-2.2.18L72.2,39.54H67.57l1.28-11.92,12.78,0Z", 1, "cls-17"], ["points", "68.27 27.68 68.74 29.34 67.54 41.61 67.06 39.98 68.27 27.68", 1, "cls-23"], ["d", "M64.07,52.33h-.29l-.1,0H63l-.21,0-1.2.09h-.2l-.66,0H57.54L57.4,52,57,50.8h.44l.14,0h0l.55.06h.12l.29,0h1c.26,0,.51,0,.76,0h1.38l.63,0h0l.36,0h.94", 1, "cls-6"], ["points", "70.77 50.01 71.24 51.6 64.07 52.33 63.57 50.74 70.77 50.01", 1, "cls-47"], ["points", "71.71 39.98 72.17 41.61 71.24 51.6 70.77 50.01 71.71 39.98", 1, "cls-22"], ["d", "M68.27,27.68,67.06,40h4.65l-.94,10-7.2.73-.39,0-.91.09c-.38,0-.81.07-1.28.09s-1,0-1.49,0h-.65l-.65,0a6.2,6.2,0,0,1-.62-.06L57,50.8l2.48-23.09,8.79,0Z", 1, "cls-17"], ["points", "57.88 26.12 58.34 27.75 57.87 32.73 57.41 31.11 57.88 26.12", 1, "cls-22"], ["points", "57.41 31.11 57.87 32.73 45.07 32.71 44.55 31.1 57.41 31.11", 1, "cls-16"], ["points", "57.88 26.12 57.41 31.11 44.55 31.1 45.08 26.13 57.88 26.12", 1, "cls-17"], ["points", "57.88 32.26 58.34 33.9 57.87 38.87 57.41 37.25 57.88 32.26", 1, "cls-22"], ["points", "57.41 37.25 57.87 38.87 45.13 38.86 44.61 37.24 57.41 37.25", 1, "cls-16"], ["points", "57.88 32.26 57.41 37.25 44.61 37.24 45.08 32.28 57.88 32.26", 1, "cls-17"], ["d", "M46.7,44.85h-.06v0h-.08v0h0l0-.06h0l-.09-.24h0v0h0v0h0v0h0v0h0l0-.1h0v0h0v0h0a1.35,1.35,0,0,1-.08-.24h0l-.11-.35v-.41L45.72,42V41.9h0v0h0v0h0v0h0v0s0,.09,0,.13l0,.07H46l0,.05h0v0h0l0,0h0v0h.11l.51,1.61Zm-1-3h0Zm0,0h0", 1, "cls-45"], ["points", "57.42 43.24 57.88 44.86 46.7 44.85 46.19 43.24 57.42 43.24", 1, "cls-16"], ["points", "57.88 38.4 58.33 40.03 57.88 44.86 57.42 43.24 57.88 38.4", 1, "cls-22"], ["d", "M57.88,38.4l-.46,4.84H46.19a5.62,5.62,0,0,1-.22-.56c-.12-.31-.27-.73-.41-1.21a13.25,13.25,0,0,1-.34-1.53,5.68,5.68,0,0,1,0-1.53Z", 1, "cls-17"], ["points", "58.01 44.57 58.46 46.21 57.78 53.47 57.32 51.85 58.01 44.57", 1, "cls-22"], ["d", "M57.32,51.85l.43,1.52,0,.1h-.41l-.07,0h-.22l-.08,0h0l-.53-.12-.18-.05h0l-.12,0h-.27l0,0h-.12l0,0h-.08l0,0h-.09l0,0h0l-.05,0h0l0,0h0l0,0h0l0,0H55l0,0h0l0,0h0l0,0h0l0,0h0l0,0h-.05l0,0h0l0,0h0l0,0h0l-.05,0h0l0,0h0l0,0h0l-.05,0h0l0,0h0l-.05,0h0l0,0h0l0,0h0l0,0h0l-.05,0h0l0,0h0l-.05,0h0l0,0h0l0,0h0l-.05,0h0l0,0h0l-.05,0h0l0,0h0l0,0h0l-.05,0h0l0,0h0l-.05,0h0l0,0h0l0,0h0l-.05,0h0l0,0h0l-.05,0h0l0,0h0l0,0h0l-.05,0h0l-.06,0h0l0,0h0l0,0h0l-.05,0h0l0,0h0l-.05,0h0l0,0h0l0,0h0l-.06,0,0,0h0l-.05,0h0l0,0h0l-.05,0,0,0h0l-.06,0h0l0,0h0l-.05,0,0,0,0,0-.06,0,0,0-.05,0,0,0-.05,0-.06,0-.05,0h0l0,0,0,0-.05,0,0,0-.06,0h0l0,0h0l-.05,0,0,0h0l-.05,0,0,0h0l-.06,0,0,0,0,0-.05,0h0l0,0h0l-.05,0h0l0,0h0l0,0h0l-.06,0h0l-.05,0h0l-.2-.18h0l-.05,0h0l-.1-.1h0l-.05,0h0l0-.05h0l-.05,0h0l0-.05h0l0,0-.05,0h0l0,0,0-.05-.05,0,0-.05,0,0-.05,0,0-.05-.05-.06,0,0,0,0h0l-.05-.05,0-.06,0-.05,0-.06h0l-.05,0,0-.06h0l0,0h0l-.05-.06h0l0,0h0l0-.06,0-.06h0L49,48.46h0l0-.06h0l0,0h0l0-.06h0l-.05-.06h0l0-.06h0l0-.06h0l0-.06h0l0-.07h0l0-.06h0l0-.06,0-.06h0l-.05-.07h0l0-.06h0l0-.06,0-.07h0l0-.06,0-.07,0-.07h0l0-.06,0-.07,0-.07,0-.07L48,47l0-.07,0-.07h0l0-.07h0l0-.07,0-.07h0l-.08-.15h0a2.59,2.59,0,0,1-.14-.29l-.51-1.63a1,1,0,0,0,.07.15h0l0,.07h0l0,.07h0l0,.07h0l0,.07h0l0,.08,0,.07,0,.07h0l0,.07,0,.07h0l0,.06,0,.07,0,.07,0,.07,0,.06,0,.07h0l0,.07h0l0,.06,0,.07,0,.06h0l0,.06h0a.57.57,0,0,0,.08.13h0l0,.06,0,.07h0l0,.06h0l.05.06h0l0,.06h0l.09.12h0l.09.12h0l0,.06h0l.13.17h0l.24.28h0l0,.05h0l.19.22h0l0,0h0l.15.15,0,.06h0l0,0h0l0,.05h0l.05,0,0,0,.05.05h0l0,0h0l0,0h0l.05.05,0,0h0l.05,0h0l0,.05h0l0,0h0l.05,0h0l0,0h0l.05.05h0l0,0,.06,0h0l0,0h0l.05,0h0l0,0h0l.1.08h0l0,0h0l.11.09h0l.1.08h0a15.75,15.75,0,0,0,1.4,1h0l.26.15h0l0,0h0l.06,0h0l0,0h0l0,0,.05,0h0l0,0h0l.05,0h0l0,0h0l0,0h0l.05,0h0l.06,0h0l.05,0h0l0,0h0l.05,0h0l0,0h0l0,0h0l.05,0h0l0,0h0l.05,0h0l0,0h0l0,0h0l.05,0h0l0,0h0l0,0h0l.05,0h0l0,0h0l.05,0h0l0,0h0l0,0h0l.05,0h0l0,0h0l0,0h0l.05,0h0l0,0h0l0,0h0l.05,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h.05l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0H55l0,0h.08l.05,0h.08l0,0h.2l0,0h1.16l.11,0h0l.4.06h.09Z", 1, "cls-45"], ["d", "M58,44.57l-.68,7.28A9.86,9.86,0,0,1,56,51.59a14.56,14.56,0,0,1-2.79-1,13.64,13.64,0,0,1-3.3-2.2,12.47,12.47,0,0,1-2.84-3.8l10.93,0Z", 1, "cls-17"], ["points", "378.22 88.88 378.67 90.55 376.76 110.86 376.29 109.25 378.22 88.88", 1, "cls-48"], ["d", "M357.19,109.2c-.19-.54-.37-1.07-.56-1.6a12.11,12.11,0,0,0,2,3.58,13.74,13.74,0,0,0,3.13,2.84,15.33,15.33,0,0,0,4.08,1.86,17.48,17.48,0,0,0,4.82.69,19,19,0,0,0,8.55-2,18.43,18.43,0,0,0,3.54-2.31,16.82,16.82,0,0,0,2.81-3l.43,1.61a17.44,17.44,0,0,1-2.8,3,18.32,18.32,0,0,1-3.53,2.3,18.63,18.63,0,0,1-4.07,1.48,19.11,19.11,0,0,1-4.43.52,17.34,17.34,0,0,1-4.8-.69,15.51,15.51,0,0,1-4.06-1.86,13.43,13.43,0,0,1-3.12-2.83,12,12,0,0,1-2-3.57Z", 1, "cls-49"], ["d", "M385.79,111.12h-.06v0h0l0,0h0l-.44.54h-.06l-.09.1-.07.08h0l-.21.24-.43-1.61.32-.36,0,0h0v0h.12v0h0L385,110l.08-.09h0l0,0h0v0h0l0,0h0a.39.39,0,0,0,.08-.1h0l0,0c.1-.13.2-.25.29-.38l.42,1.61h0l-.18.24Z", 1, "cls-49"], ["d", "M384.33,110.74l.43,1.6,0,0h0l0,0h0l-.08.09h0l0,0h0l-.2.21h0l0,0h0l-.08.08h0v0H384l-.13.12-.15.14h-.14l-.25.22h-.05L383,114H383l-.44-1.6h.31c.1-.1.21-.19.32-.28h0l.1-.09h.26l0,0h0l0,0h0l0,0h0l0,0h0l0,0h.11l.1-.1H384c.11-.1.2-.2.3-.31Z", 1, "cls-49"], ["d", "M382.52,112.43,383,114l-.07,0h-.06l0,0h0l0,0h0l-.26.21-.08.05h0l-.36.27-.46.32-.07,0h0l-.06,0h0l0,0h0l0,0h-.11l-.05,0h0l-.11.07-.45-1.59h.1l.05,0h0l.33-.21.47-.32.35-.25h.35l.13-.11h0l0,0h0Z", 1, "cls-49"], ["d", "M380.67,113.74l.45,1.59-.14.09h0l0,0h0l-.26.16-.09,0h-.23l0,0h-.1l0,0,0,0H380l-.35.17h0l-.29.15h-.11l-.08,0-.46-1.58.05,0h0l.05,0h0l.18-.09h0l.21-.1.38-.2h.1l0,0h.35l.05,0h0l.05,0h0l.21-.13h0l.05,0h.16Z", 1, "cls-49"], ["d", "M378.71,114.8l.46,1.59-.35.15h-.19l0,0h0l0,0h0l-.07,0h0l-.09,0h-.44l-.43.16h-.17l-.27.09H377l-.47-1.58h.09l.08,0h.08l0,0H377l.35-.13h.11l.22-.08.19-.08h0l.35-.14.1-.05h0l.05,0h.38Z", 1, "cls-49"], ["d", "M376.52,115.66l.47,1.58h-.13l-.54.16-.67.18-.14,0h-.57l-.39.08h-.19l-.08,0-.48-1.59.13,0h.17l.39-.07.55-.12h0l.14,0,.53-.13h.1l.15,0h.56Z", 1, "cls-49"], ["d", "M373.8,116.32l.48,1.58-.12,0h-.11l-.53.08h-.24l-.38,0h-3.85l-.15,0h-.3l-.08,0h0l-.22,0h0a16.56,16.56,0,0,1-1.88-.43h0l-.07,0h0l-.21-.06h0l-.13,0-.07,0h0l-.07,0h0l-.07,0h0l-.07,0h0l-.07,0h0l-.06,0h0l-.14,0h0l-.07,0h0l-.06,0h0l-.07,0h0l-.07,0h0l-.06,0h0l-.07,0h0l-.06,0h0l-.06,0h0l-.07,0h0l-.06,0h0l-.07,0h0l-.06,0h0l-.07,0h0l-.06,0h0l-.07,0h0l-.06,0h0l-.07,0h0l-.06,0h0l-.06,0h0l-.07,0h0l-.06,0h0l-.06,0h0l-.07,0h0l-.12-.06h0l-.06,0h0l-.06,0h0l-.13-.06h0l-.06,0h0l-.06,0h0l-.06,0h0l-.18-.1h0l-.06,0h0c-.3-.17-.6-.34-.88-.53h0l-.06,0h0l-.27-.19h0l-.11-.07h0l-.06,0h0l-.05,0h0l-.06,0-.05,0-.06,0-.05,0,0,0h0l-.06,0h0l-.05,0h0l-.05,0h0l-.05,0h0l-.05,0h0l-.06,0h0l0,0h0l-.05,0h0l-.05,0h0l-.05,0h0l-.05,0,0,0h0l-.05,0h0l-.05,0h0l-.05-.05h0l-.05,0h0l0,0h0l-.05,0h0l-.05,0h0l0,0h0l0,0h0l-.05-.05h0l-.05,0h0l-.09-.1h0a10.47,10.47,0,0,1-1.05-1.16h0l-.39-.51h0l-.07-.1h0l0-.06h0l0,0h0l0,0h0l0-.06,0,0h0l0,0h0l0-.06,0,0h0l0-.06,0,0,0-.05,0-.06,0-.05,0-.06,0-.05,0-.06h0l0-.05,0-.06,0-.06h0l0-.05h0l0-.06,0-.05h0l0-.06,0-.06,0,0,0-.06,0-.06h0l0,0h0l0-.06h0l0-.06h0l0-.06,0,0h0l0-.06h0l0-.06h0l0-.06,0-.06h0l0-.05h0l0-.06h0l0-.06h0l0-.06h0l0-.06h0l0-.06h0l0-.06h0l0-.06h0l0-.06h0l0-.06h0l0-.06h0l0-.06h0l0-.06h0l0-.06h0l0-.06h0l0-.06h0v-.12l-.28-.83v0l0,0v-.05l0,0v-.46h0l0,0h0l0,.06h0l0,.06h0l0,.06h0l0,.06h0l0,.06h0l0,.06h0l0,.06h0l0,.06h0l0,.06,0,.06h0l0,.06,0,.06h0l0,.06h0l0,.06,0,.06h0l0,0h0l0,.06,0,.06h0l0,.06h0l0,.06h0l0,.05h0l0,.06h0l0,.06h0l0,.06h0l0,0h0l0,.06h0l.06.11h0l.06.12h0l0,0h0a6.32,6.32,0,0,0,.33.56h0l.07.11h0l.21.32h0l.07.1h0l0,.06h0l0,0h0l0,0h0l0,0h0l0,.06h0l0,0h0l0,.05h0l0,0h0l0,0h0l0,0h0l0,0h0l0,.05h0l0,.06,0,.05h0l0,0,0,0h0l.05,0h0l0,0h0l0,.05h0l0,0h0l.13.15h0l.05,0h0l.31.33h0l.18.19h0l.24.23h0l.15.13h0l.05,0,.05,0h0l0,0h0l.05,0h0l.05,0,.05.05.06,0h0l.1.09.05,0,.05,0h0l.05,0,.05,0h0l.06,0h0l0,0h0l.05,0h0l.05,0h0l.06,0h0l.05,0h0l0,0h0l.06,0h0l.05,0h0l.06,0h0l.05,0h0l.06,0h0l.05,0h0l.06,0h0l.05,0h0l.06,0h0l.05,0h0l.06,0h0l.11.08.12.07h0l.05,0h0l.06,0h0l.06,0h0l.06,0h0l.06,0h0l.06,0h0l0,0h0l.06,0h0l.06,0h0l.06,0h0l.06,0h0l.06,0h0l.06,0h0l.06,0h0l.06,0h0l.06,0h0l.07,0h0l.06,0h0l.06,0h0l.06,0,.06,0h0l.06,0h0l.07,0h0l.06,0h0l.06,0h0l.06,0h0l.07,0h0l.06,0h0l.06,0h0l.07,0h0l.06,0,.07,0,.06,0h0l.07,0,.06,0,.07,0,.06,0,.07,0,.06,0,.07,0h0l.06,0,.07,0h0l.07,0,.06,0h0l.07,0h0l.07,0,.06,0h0l.07,0h0l.07,0h0l.07,0h0l.13,0h0l.21.06h0a4.42,4.42,0,0,0,.48.15l.28.08h0l.07,0h0l.07,0h0l.07,0h0l.07,0h0l.07,0h0l.07,0h0l.15,0h0l.07,0h.07l.29.07h0l.37.07h0c.4.07.8.13,1.21.18h0l.38,0h1.59c.48,0,1,0,1.43,0h.23l.4,0h.68l.33,0h.06Z", 1, "cls-49"], ["d", "M376.29,109.25l9.26,0a16.82,16.82,0,0,1-2.81,3,18.43,18.43,0,0,1-3.54,2.31,18.68,18.68,0,0,1-4.09,1.49,19.37,19.37,0,0,1-4.46.52,17.09,17.09,0,0,1-6.22-1.17,14.31,14.31,0,0,1-4.81-3.11,12.3,12.3,0,0,1-2.94-4.55,12.1,12.1,0,0,1-.63-5.52,13.73,13.73,0,0,1,1.88-5.45,16.34,16.34,0,0,1,3.89-4.42,18.83,18.83,0,0,1,5.36-3,19.08,19.08,0,0,1,6.29-1.11c.42,0,.83,0,1.24,0s.81.06,1.21.12.79.12,1.17.19.76.17,1.13.27l-1.93,20.37Z", 1, "cls-50"], ["points", "381.03 102.75 381.51 104.38 381.21 107.38 380.73 105.76 381.03 102.75", 1, "cls-51"], ["points", "380.73 105.76 381.21 107.38 377.8 107.38 377.31 105.76 380.73 105.76", 1, "cls-51"], ["points", "381.03 102.75 380.73 105.76 377.31 105.76 377.61 102.75 381.03 102.75", 1, "cls-52"], ["points", "381.03 106.65 381.51 108.28 381.21 111.28 380.73 109.66 381.03 106.65", 1, "cls-51"], ["points", "380.73 109.66 381.21 111.28 377.8 111.28 377.31 109.66 380.73 109.66", 1, "cls-51"], ["points", "381.03 106.65 380.73 109.66 377.31 109.66 377.61 106.65 381.03 106.65", 1, "cls-52"], ["points", "388.52 96.04 389.02 97.66 387.46 97.66 386.96 96.04 388.52 96.04", 1, "cls-51"], ["points", "393.54 97.75 394.02 99.37 390.86 99.36 390.37 97.75 393.54 97.75", 1, "cls-51"], ["points", "393.32 93.5 393.79 95.14 394.02 99.37 393.54 97.75 393.32 93.5", 1, "cls-51"], ["points", "390.26 98.82 390.75 100.44 388.74 100.43 388.24 98.82 390.26 98.82", 1, "cls-51"], ["points", "390.37 97.75 390.86 99.36 390.75 100.44 390.26 98.82 390.37 97.75", 1, "cls-51"], ["points", "393.32 93.5 393.54 97.75 390.37 97.75 390.26 98.82 388.24 98.82 388.52 96.04 386.96 96.04 387.22 93.51 393.32 93.5", 1, "cls-52"], ["points", "394.03 98.7 394.51 100.33 394.78 106.33 394.3 104.72 394.03 98.7", 1, "cls-51"], ["points", "394.3 104.72 394.78 106.33 390.98 106.33 390.48 104.71 394.3 104.72", 1, "cls-51"], ["points", "394.03 98.7 394.3 104.72 390.48 104.71 391.1 98.7 394.03 98.7", 1, "cls-52"], ["points", "394.86 105.88 395.34 107.51 395.41 109.33 394.93 107.7 394.86 105.88", 1, "cls-51"], ["points", "394.93 107.7 395.41 109.33 395.24 111.4 394.76 109.78 394.93 107.7", 1, "cls-51"], ["points", "394.76 109.78 395.24 111.4 391.09 111.43 390.59 109.81 394.76 109.78", 1, "cls-51"], ["points", "394.86 105.88 394.93 107.7 394.76 109.78 390.59 109.81 390.99 105.88 394.86 105.88", 1, "cls-52"], ["points", "378.5 99.41 379.01 101.03 378.02 101.03 377.51 99.41 378.5 99.41", 1, "cls-51"], ["d", "M378.23,101.14l.51,1.62a.82.82,0,0,0-.24-.37,1,1,0,0,0-.32-.21,2.75,2.75,0,0,0-.3-.08l-.15,0-.52-1.61h.16a1.88,1.88,0,0,1,.3.09.85.85,0,0,1,.32.2.82.82,0,0,1,.24.37Z", 1, "cls-51"], ["d", "M378.73,102.74a.43.43,0,0,1,0,0h0l0,0h0v0h0v0h0v0h0a1.36,1.36,0,0,0-.12-.12h0v0H378l-.15,0h-.15l-.52-1.61h.65l0,0H378l0,0h0a.8.8,0,0,1,.23.35h0l.5,1.6Z", 1, "cls-51"], ["points", "387.73 101.72 388.19 103.34 377.78 103.33 377.26 101.71 387.73 101.72", 1, "cls-51"], ["points", "387.78 101.72 388.25 103.34 388.19 103.34 387.73 101.72 387.78 101.72", 1, "cls-51"], ["points", "388.25 96.84 388.71 98.48 388.25 103.34 387.78 101.72 388.25 96.84", 1, "cls-51"], ["d", "M388.25,96.85l-.47,4.87H377.26l0-.17h1a1,1,0,0,0-.13-.6.89.89,0,0,0-.35-.32,1.43,1.43,0,0,0-.38-.13l-.2,0a1.67,1.67,0,0,0,.71-.19,1.18,1.18,0,0,0,.38-.35,1.33,1.33,0,0,0,.17-.34c0-.1,0-.17,0-.18h-1l.26-2.49v0Z", 1, "cls-52"], ["points", "357.27 201.49 357.78 203.1 355.84 203.1 355.32 201.49 357.27 201.49", 1, "cls-51"], ["points", "366.34 200.67 366.81 202.29 365.07 202.12 364.59 200.5 366.34 200.67", 1, "cls-51"], ["points", "368.55 191.13 369 192.78 366.81 202.29 366.34 200.67 368.55 191.13", 1, "cls-51"], ["d", "M365.14,203l-.48-1.61a1.06,1.06,0,0,1,0-.19.64.64,0,0,1,0-.2,1.55,1.55,0,0,1,0-.22,2.18,2.18,0,0,1,0-.25l.48,1.62a2.09,2.09,0,0,0,0,.24,1.69,1.69,0,0,0,0,.23,1.36,1.36,0,0,0,0,.2,1.21,1.21,0,0,0,.05.18Z", 1, "cls-51"], ["d", "M364.7,200.87l.37,1.25v.15h0l-.48-1.61h0v-.08h0v0h0l.11.37Z", 1, "cls-51"], ["d", "M364.58,200.66l.48,1.61v0h0v.07h0a1.09,1.09,0,0,0,0,.18h0v0h0v0h0a.36.36,0,0,1,0,.1h0l-.47-1.61h-.05v-.13h0v-.05Z", 1, "cls-51"], ["d", "M364.63,201.23l.47,1.61h0v0h0v0l-.42-1.42v-.17h0v0h0v0h0v0Z", 1, "cls-51"], ["d", "M356.88,204.19c.1.32.21.64.31,1a.75.75,0,0,0,.05.16l0,.08.12.4a1.27,1.27,0,0,0-.39-.58,1.7,1.7,0,0,0-.56-.3,2.45,2.45,0,0,0-.51-.12l-.26,0-.53-1.61.27,0a2.36,2.36,0,0,1,.51.11,1.94,1.94,0,0,1,.56.31A1.17,1.17,0,0,1,356.88,204.19Z", 1, "cls-51"], ["d", "M356.88,204.19h0v.05h0m.29.9h0l0,.11h0l0,.08h0l.12.38a1.15,1.15,0,0,0-.26-.43h0v0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h-.41l-.06,0-.25-.07h-.52l-.53-1.61h.26l.17,0h1l0,0h0v0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0v0h0v0h0", 1, "cls-6"], ["d", "M366.09,202.44l.47,1.62h-.15l-.47-1.61h.15Z", 1, "cls-51"], ["d", "M366.17,202.45h0Z", 1, "cls-51"], ["d", "M366.17,202.45l.47,1.61h-.08l-.47-1.61h.08Z", 1, "cls-51"], ["d", "M366.64,204.06h-.08l-.16-.53-.31-1.09h.08l.47,1.61Z", 1, "cls-51"], ["d", "M365.94,202.44l.47,1.61a2.56,2.56,0,0,0-1.13.24,1.91,1.91,0,0,0-.64.53,2.36,2.36,0,0,0-.3.55,1.63,1.63,0,0,0-.07.29l-.49-1.61a2,2,0,0,1,.38-.84,1.86,1.86,0,0,1,.65-.53,2.56,2.56,0,0,1,1.13-.24Z", 1, "cls-51"], ["d", "M366.41,204.05h-.1l-.27,0h-.12l-.48-1.61h.5l.47,1.61Z", 1, "cls-51"], ["d", "M365.44,202.48l.48,1.61h-.34l-.48-1.61h.08l.08,0h.09l.07,0h0Z", 1, "cls-51"], ["d", "M365.1,202.56l.48,1.61-.06,0h0l0,0h0l-.06,0h0l0,0-.48-1.61.06,0h.1l.08,0Z", 1, "cls-51"], ["d", "M364.86,202.66l.48,1.61-.06,0h0l0,0h-.1l-.47-1.61,0,0,.05,0,.06,0,.05,0Z", 1, "cls-51"], ["d", "M364.66,202.76l.48,1.61h0l-.09.06H365l-.48-1.61h0l0,0,.05,0,0,0h0l.05,0Z", 1, "cls-51"], ["d", "M364.47,202.9l.48,1.61h0l-.11.11h0l0,0h0l0,0-.48-1.6h0l0,0,.05,0h.06l0,0Z", 1, "cls-51"], ["d", "M364.28,203.07l.48,1.61,0,0h0l-.06.08-.06.08,0,0h0v0h0l0,0-.48-1.6.06-.1h.06l0,0h0l0-.05h0Z", 1, "cls-51"], ["d", "M364,203.39l.48,1.6-.06.11h0v0h0v0h0v0h0s0,0,0,.06h0v0h0a.74.74,0,0,0,0,.15h0m-.49-1.61h0s0,0,0-.09h0s0-.05,0-.07v0h.06l0-.05h0v0h0v0h0l0-.06h0v0h0", 1, "cls-6"], ["points", "365.45 204.23 365.93 205.83 365.85 206.6 365.38 205 365.45 204.23", 1, "cls-51"], ["points", "365.38 205 365.85 206.6 355.47 206.57 354.95 204.97 365.38 205", 1, "cls-51"], ["d", "M368.55,191.13l-2.2,9.54-1.76-.17a2.2,2.2,0,0,0,.13,1,1.42,1.42,0,0,0,.44.58,1.48,1.48,0,0,0,.53.27,2.3,2.3,0,0,0,.4.08h-.15a2.56,2.56,0,0,0-1.13.24,1.88,1.88,0,0,0-.65.54,2,2,0,0,0-.3.55,1.43,1.43,0,0,0-.07.28l1.66.18-.07.77L355,205v-.11h2a1.34,1.34,0,0,0-.8-1.47,2.38,2.38,0,0,0-.65-.2,2.23,2.23,0,0,0-.34,0,3.74,3.74,0,0,0,1.22-.38,1.84,1.84,0,0,0,.63-.55,1.58,1.58,0,0,0,.24-.5,1.19,1.19,0,0,0,0-.25h-1.95v-.08h2.82l2.56-11,7.84.73Z", 1, "cls-52"], ["points", "364.7 173.75 365.2 175.4 364.82 176.92 364.33 175.28 364.7 173.75", 1, "cls-51"], ["d", "M367.22,176.2l-.48-1.65a1,1,0,0,1-.05-.28,2.26,2.26,0,0,1,0-.25.72.72,0,0,1,0-.17.44.44,0,0,0,0-.09l.49,1.65s0,0,0,.08,0,.11,0,.18a2.09,2.09,0,0,0,0,.24,1.6,1.6,0,0,0,.05.29Z", 1, "cls-51"], ["d", "M367.2,175.41h0v0s0,0,0,.06h0v0h0v.06l-.48-1.65V174h0s0,0,0-.06h0", 1, "cls-6"], ["d", "M366.68,174.05l.48,1.65v.05h0v.06h0v0h0l-.48-1.64a.36.36,0,0,1,0-.1h0v0h0v0h0v-.06h0v0h0v0h0v0h0Z", 1, "cls-51"], ["d", "M366.72,174.45l.48,1.64h0v0h0v-1.64h0v0Zm.5,1.73h0", 1, "cls-51"], ["points", "368.48 188.72 368.97 190.32 361.1 189.53 360.58 187.93 368.48 188.72", 1, "cls-51"], ["points", "371.72 174.51 372.18 176.16 368.97 190.32 368.48 188.72 371.72 174.51", 1, "cls-51"], ["d", "M368.63,174.15l3.09.36-3.23,14.21-7.91-.8,3.21-14.24.91.07-.37,1.53h.19a3.18,3.18,0,0,0,.48,0,3,3,0,0,0,.63-.2,2,2,0,0,0,.62-.46,2.3,2.3,0,0,0,.47-.82,1.31,1.31,0,0,0,0,.29,1.61,1.61,0,0,0,.09.58,1.33,1.33,0,0,0,.45.62,2.44,2.44,0,0,0,1.07.41Z", 1, "cls-52"], ["points", "320.58 177.67 321.11 179.29 319.28 176.29 318.75 174.67 320.58 177.67", 1, "cls-51"], ["points", "337.79 179.36 338.24 180.98 321.11 179.29 320.58 177.68 337.79 179.36", 1, "cls-51"], ["points", "338.39 176.62 338.84 178.25 338.24 180.98 337.79 179.36 338.39 176.62", 1, "cls-51"], ["points", "318.75 174.67 338.39 176.62 337.79 179.36 320.58 177.67 318.75 174.67", 1, "cls-52"], ["points", "322.77 181.17 323.29 182.79 321.54 179.94 321.01 178.31 322.77 181.17", 1, "cls-51"], ["points", "337.43 182.72 337.88 184.34 323.29 182.79 322.77 181.17 337.43 182.72", 1, "cls-51"], ["points", "338.04 179.99 338.48 181.62 337.88 184.34 337.43 182.72 338.04 179.99", 1, "cls-51"], ["points", "321.01 178.31 338.04 179.99 337.43 182.72 322.77 181.17 321.01 178.31", 1, "cls-52"], ["points", "271.47 186.29 271.95 187.93 271.85 188.29 271.38 186.65 271.47 186.29", 1, "cls-51"], ["d", "M273.34,186.89l.46,1.65a1.25,1.25,0,0,1-.07.23,1.65,1.65,0,0,1-.26.45,1.57,1.57,0,0,1-.55.45,2,2,0,0,1-.93.19h-.15l-.48-1.64h.16a2.07,2.07,0,0,0,.93-.2,1.57,1.57,0,0,0,.55-.45,1.65,1.65,0,0,0,.26-.45c.05-.13.07-.22.08-.24Z", 1, "cls-51"], ["d", "M273.34,186.89l.46,1.65h0a.18.18,0,0,1,0,.05h0l0,.09h0v0h0l0,.08,0,0h-.08l-.47-1.64.08-.13h.05v0h0a.16.16,0,0,0,0-.08h0v0h0v0h0Z", 1, "cls-51"], ["d", "M273.12,187.41l.47,1.64,0,.06h0l0,0h-.13l-.47-1.64.06-.07.06-.07.05-.07,0-.06h0Z", 1, "cls-51"], ["d", "M272.91,187.69l.47,1.64h0s0,0-.05,0h0l0,0h0l-.47-1.64h0l0,0h0l0,0,0,0Z", 1, "cls-51"], ["d", "M272.75,187.84l.47,1.64h-.05l-.05,0h-.07l-.47-1.64h0l0,0h0l0,0h.08Z", 1, "cls-51"], ["d", "M272.58,188l.47,1.64H273l0,0h0l-.05,0-.47-1.64,0,0h0m0,0h.12", 1, "cls-6"], ["d", "M272.41,188.05l.47,1.64-.05,0-.05,0h-.1l-.48-1.64h0l.09,0h.1Z", 1, "cls-51"], ["d", "M272.21,188.13l.47,1.63h-.28l-.48-1.63.1,0h.07l.09,0h0Z", 1, "cls-51"], ["d", "M271.92,188.19l.48,1.64h-.56l-.36-1.23-.12-.41h.29a1.18,1.18,0,0,0,.27,0Z", 1, "cls-51"], ["d", "M272.62,189.27l.24.82c.07.27.15.54.23.81a.76.76,0,0,1,0,.16.88.88,0,0,1,0,.17,1.1,1.1,0,0,1,0,.18,1.62,1.62,0,0,1,0,.2l-.47-1.64,0-.19a.62.62,0,0,0,0-.19,1,1,0,0,0,0-.17l0-.15Z", 1, "cls-51"], ["d", "M272.62,189.28Zm0,0,0,.1v.07h0l0,0h0l0,.06h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l.28,1v0h0l-.47-1.64h0", 1, "cls-51"], ["d", "M272.64,189.34Zm0,0,.47,1.64h0v0h0v0h0v0h0v.05l-.47-1.64v-.08h0v0h0Z", 1, "cls-51"], ["d", "M272.66,189.64l.47,1.64v0h0a.15.15,0,0,0,0,.07v0h0a.36.36,0,0,1,0,.1h0l-.47-1.64h0v0h0a.52.52,0,0,0,0-.11h0v0h0v0h0v-.05Z", 1, "cls-51"], ["points", "272.61 189.97 273.08 191.61 271.26 191.44 270.79 189.81 272.61 189.97", 1, "cls-51"], ["points", "265.72 193.29 266.23 194.91 265.67 194.83 265.16 193.21 265.72 193.29", 1, "cls-51"], ["points", "268.76 198.16 269.25 199.77 265.2 199.36 264.68 197.76 268.76 198.16", 1, "cls-51"], ["points", "268.9 198.22 269.39 199.82 269.25 199.77 268.76 198.16 268.9 198.22", 1, "cls-51"], ["d", "M266.88,185.83l4.6.46-.1.36,2,.24a1.48,1.48,0,0,1-.08.24,1.65,1.65,0,0,1-.26.45,1.57,1.57,0,0,1-.55.45,2.07,2.07,0,0,1-.93.2h-.16l.28.1a2.09,2.09,0,0,1,.51.29,1.31,1.31,0,0,1,.42.53,1.21,1.21,0,0,1,0,.83l-1.82-.16-1.89,8.41-.14-.06-4.08-.4,1-4.47-.56-.08,1.72-7.38Z", 1, "cls-52"], ["points", "270.79 189.81 271.26 191.44 269.39 199.82 268.9 198.22 270.79 189.81", 1, "cls-51"], ["d", "M276.93,197.36c-.07-.28-.15-.55-.23-.83l-.24-.82a1.57,1.57,0,0,1,0-.27.88.88,0,0,1,0-.23.7.7,0,0,1,0-.16.24.24,0,0,1,0-.07l.48,1.64s0,0,0,.08a.7.7,0,0,0,0,.16v.23c0,.08,0,.17.05.27Z", 1, "cls-51"], ["d", "M276.92,196.62h0v.05h0v0l-.48-1.65v-.06h0v0h0l.48,1.65Z", 1, "cls-51"], ["d", "M276.4,195.26l.48,1.65h0v0h0v.12h0s0,0,0,.07l-.47-1.65h0s0-.05,0-.07,0-.05,0-.07h0v0h0v0Z", 1, "cls-51"], ["d", "M276.44,195.62l.47,1.64v0h0v0h0v0l-.06-.21h0l0-.12h0v-.07l-.06-.23h0v0h0v0h0v0h0v0h0v-.06h0v0h0v0h0l0-.07h0v-.1h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0Z", 1, "cls-51"], ["points", "274.41 194.98 274.89 196.63 274.55 198.12 274.07 196.48 274.41 194.98", 1, "cls-51"], ["points", "272.81 199.07 273.31 200.71 270.84 200.43 270.33 198.8 272.81 199.07", 1, "cls-51"], ["d", "M275.61,209.94l.49,1.6a4.09,4.09,0,0,1-.41-.13c-.23-.08-.57-.21-1-.4a14.8,14.8,0,0,1-1.48-.75,21.46,21.46,0,0,1-1.86-1.19l-.5-1.6a21.46,21.46,0,0,0,1.86,1.19c.57.32,1.07.56,1.48.75a10.74,10.74,0,0,0,1,.4l.4.13Z", 1, "cls-51"], ["d", "M276.1,211.54H276l-.32-.11h-.05l-.06,0h-.81l-.07,0h0l-.14-.06h0l-.08,0h0l-.05,0h0l0,0h0l-.09,0h-.09l0,0h-.09l-.05,0h0l0,0h-.09l0,0h0l0,0h0l0,0h0l-.05,0h0l0,0h0l-.05,0h0l-.13-.07h0l-.05,0h0l-.21-.12h0l-.16-.09h0l-.21-.13h0l-.06,0h0l-.06,0h0l-.05,0h0l0,0h0l0,0h0l-.05,0h0l-.06,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0h0l-.06,0h0l0,0,0,0h0l-.06,0h0l0,0h0l0,0h0l0,0h0l0,0h0l-.5-.35-.43-1.37-.07-.23.12.09h0l.1.06h0l0,0h0l0,0h0l0,0,0,0,0,0h0l0,0,0,0h0l0,0,0,0,0,0,0,0,0,0,0,0,0,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l.06,0h0l0,0h0l.06,0h0l.06,0h0l0,0h0l.06,0h0l0,0h0l.14.08h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l.05,0h0l0,0h0l0,0h0l0,0h.05l0,0h0l0,0h0l0,0h.05l0,0h.08l0,0h.07l0,0h.11l0,0h.13l0,0h0l0,0h0l.09,0h0l.13.06h0l.18.08h0l.13.06h.05l0,0h.3l0,0H275l.05,0h0l.07,0h0l.09,0,.17.06h0l.06,0h.17l.49,1.6Z", 1, "cls-51"], ["points", "278.66 196.44 279.12 198.09 276.1 211.54 275.61 209.94 278.66 196.44", 1, "cls-51"], ["d", "M278.13,196.39l.53.05-3.05,13.5-.4-.13a9.74,9.74,0,0,1-1-.4c-.42-.19-.92-.44-1.49-.76a21.17,21.17,0,0,1-1.86-1.18l1.95-8.4-2.49-.27,1-4.14,3.11.32-.34,1.5h.18a3.55,3.55,0,0,0,.48-.05,2.43,2.43,0,0,0,.64-.19,2.17,2.17,0,0,0,.62-.46,2,2,0,0,0,.45-.82,1.5,1.5,0,0,0,0,.27,1.26,1.26,0,0,0,.08.55,1.4,1.4,0,0,0,.45.63,2.61,2.61,0,0,0,1.07.47l.12-.5Z", 1, "cls-52"], ["points", "286.27 171.72 286.75 173.35 285.58 178.38 285.1 176.76 286.27 171.72", 1, "cls-51"], ["points", "285.1 176.76 285.58 178.37 281.04 177.89 280.53 176.28 285.1 176.76", 1, "cls-51"], ["points", "281.72 171.28 286.27 171.72 285.1 176.76 280.53 176.28 281.72 171.28", 1, "cls-52"], ["points", "287 165.33 287.47 166.96 286.29 172.15 285.81 170.53 287 165.33", 1, "cls-51"], ["points", "285.81 170.53 286.29 172.15 281.74 171.67 281.24 170.05 285.81 170.53", 1, "cls-51"], ["points", "282.44 164.88 287 165.33 285.81 170.53 281.24 170.05 282.44 164.88", 1, "cls-52"], ["points", "282.47 164.34 282.93 165.99 279.48 181.29 279 179.69 282.47 164.34", 1, "cls-51"], ["points", "279 179.69 279.48 181.29 270.72 180.36 270.2 178.76 279 179.69", 1, "cls-51"], ["points", "273.82 163.47 282.47 164.34 279 179.69 270.2 178.76 273.82 163.47", 1, "cls-52"], ["points", "264.25 169.4 264.74 171.02 264.69 171.22 264.2 169.6 264.25 169.4", 1, "cls-51"], ["points", "271.27 170.14 271.73 171.76 264.74 171.02 264.25 169.4 271.27 170.14", 1, "cls-51"], ["points", "272.88 162.91 273.32 164.56 271.73 171.76 271.27 170.14 272.88 162.91", 1, "cls-51"], ["points", "267.25 169.91 267.72 171.53 266.62 176.31 266.13 174.7 267.25 169.91", 1, "cls-51"], ["points", "266.13 174.7 266.62 176.31 256.93 175.29 256.4 173.69 266.13 174.7", 1, "cls-51"], ["points", "259.26 161.58 272.88 162.91 271.27 170.14 264.25 169.4 264.2 169.6 267.25 169.91 266.13 174.7 256.4 173.69 259.26 161.58", 1, "cls-52"], ["d", "M267.64,158.71c-.16-.55-.32-1.09-.47-1.63a1.8,1.8,0,0,1-.05-.19c0-.06,0-.11,0-.15a.34.34,0,0,0,0-.11v0l.48,1.63v.16a1,1,0,0,0,0,.15,1.62,1.62,0,0,0,0,.19Z", 1, "cls-51"], ["d", "M267.09,156.58l.48,1.63h0v0h0v0h0s0,0,0,.06l-.47-1.63m0,0h0a.31.31,0,0,1,0-.09h0v-.06h0v0h0", 1, "cls-6"], ["d", "M267.14,157l.47,1.63v.06h0l-.4-1.41v-.22h0Zm.49,1.72h0m0,0Zm0,0h0", 1, "cls-51"], ["points", "268.72 158.32 269.19 159.95 268.63 162.45 268.16 160.83 268.72 158.32", 1, "cls-51"], ["points", "268.16 160.83 268.63 162.45 258.93 161.46 258.42 159.84 268.16 160.83", 1, "cls-51"], ["d", "M259.39,155.8l7.71.78a1,1,0,0,0,0,.27,1.74,1.74,0,0,0,.17.54,1.58,1.58,0,0,0,.48.57,2.08,2.08,0,0,0,1,.36l-.56,2.51-9.74-1,1-4Z", 1, "cls-52"], ["points", "282.42 150.39 282.92 152 278.94 151.59 278.42 149.99 282.42 150.39", 1, "cls-51"], ["points", "282.69 150.94 283.19 152.54 282.73 154.53 282.22 152.93 282.69 150.94", 1, "cls-51"], ["points", "282.22 152.93 282.73 154.53 282.32 154.5 281.81 152.9 282.22 152.93", 1, "cls-51"], ["d", "M284.65,152.34c.17.53.33,1.07.5,1.6a2.07,2.07,0,0,0-.2-.43,1.67,1.67,0,0,0-.36-.4,2.1,2.1,0,0,0-.57-.34,3.42,3.42,0,0,0-.83-.23l-.5-1.61a4.91,4.91,0,0,1,.83.23,2.22,2.22,0,0,1,.57.35,1.67,1.67,0,0,1,.36.4A1.39,1.39,0,0,1,284.65,152.34Z", 1, "cls-51"], ["d", "M284.65,152.34v.07l0,.13v0l.42,1.36a.25.25,0,0,1,0-.07h0a.14.14,0,0,1,0-.06h0l0-.05H285v0h0l0,0h0v0h-.15v0h0l0,0h0v0h0l0,0h0l-.08-.08h0l-.05,0,0,0h0l0,0h0l0,0h-.38l-.11,0h0a2.75,2.75,0,0,0-.46-.16h-.36l-.5-1.61h.58l0,0h.27l0,0h.06l0,0h.35l0,0,0,0h.34v0h.18Z", 1, "cls-51"], ["d", "M287.63,151.57l.48,1.6h-.44a2.93,2.93,0,0,0-.62.06,2.38,2.38,0,0,0-.72.25,2.1,2.1,0,0,0-.67.54,2.61,2.61,0,0,0-.47,1l-.5-1.59a2.54,2.54,0,0,1,.48-1,2,2,0,0,1,.67-.55,2.38,2.38,0,0,1,.72-.25,3.08,3.08,0,0,1,.63-.06h.31l.09,0Z", 1, "cls-51"], ["d", "M287.63,151.57l.19.64.29,1h-.83l-.11,0h0l-.49-1.6.18,0h.81Z", 1, "cls-51"], ["d", "M286.65,151.58h0l.48,1.6h-.08l-.1,0h-.05l-.07,0-.1,0-.49-1.6h.08l.1,0h0l.08,0h.13Z", 1, "cls-51"], ["d", "M286.24,151.68l.48,1.6-.05,0h-.23l-.49-1.61h0l0,0h0l0,0h.15Z", 1, "cls-51"], ["d", "M286,151.79l.49,1.6h0l0,0h-.05l0,0h-.06l0,0-.49-1.6.06,0,.05,0h0l.06,0,0,0h0Z", 1, "cls-51"], ["d", "M285.71,151.92l.49,1.6-.06,0,0,0h0l0,0h0l0,0-.49-1.6h0v0h0l.06,0,0,0h0l0,0Z", 1, "cls-51"], ["d", "M285.49,152.08l.49,1.6-.05,0h0l-.06.05-.06,0-.05.06-.49-1.6h0l0,0h.06l0,0h.07Z", 1, "cls-51"], ["d", "M285.27,152.28l.49,1.6-.07.08-.07.09-.07.09-.06.1-.5-1.6h.06l0,0h0l0,0,0,0h0l0,0,0,0h0Z", 1, "cls-51"], ["d", "M285,152.65l.5,1.59-.09.16a.89.89,0,0,0-.08.17v0h0v0h0v0h0l-.5-1.59h0l.09-.27h0v0h0a.59.59,0,0,1,0-.08H285v0Z", 1, "cls-51"], ["points", "287.81 153.66 288.29 155.26 287.55 155.22 287.06 153.63 287.81 153.66", 1, "cls-51"], ["points", "291.84 135.71 292.29 137.36 288.29 155.26 287.81 153.66 291.84 135.71", 1, "cls-51"], ["d", "M282.22,134.74l9.62,1-4,17.95-.75,0,.57-2.06h-.44a2.93,2.93,0,0,0-.62.06,2.35,2.35,0,0,0-.73.25,2,2,0,0,0-.67.55,2.54,2.54,0,0,0-.48,1,1.81,1.81,0,0,0,.05-.37,2.31,2.31,0,0,0-.11-.73,1.81,1.81,0,0,0-.58-.79,3,3,0,0,0-1.36-.53l-.47,2-.41,0,.61-2.51-4-.4,3.6-15.25Z", 1, "cls-52"], ["points", "285.47 177.82 285.95 179.45 285.18 182.76 284.7 181.14 285.47 177.82", 1, "cls-51"], ["points", "284.7 181.14 285.18 182.76 280.63 182.31 280.13 180.69 284.7 181.14", 1, "cls-51"], ["points", "281.04 177.32 285.47 177.82 284.7 181.14 280.13 180.69 281.04 177.32", 1, "cls-52"], ["d", "M294.54,144.06c-.16-.55-.32-1.09-.49-1.64a1.51,1.51,0,0,1-.05-.28,2.32,2.32,0,0,1,0-.24c0-.07,0-.13,0-.17a.54.54,0,0,1,0-.08l.48,1.64a.32.32,0,0,1,0,.08s0,.11,0,.17a2,2,0,0,0,0,.24,1.57,1.57,0,0,0,.06.28Z", 1, "cls-51"], ["d", "M294,141.65l.48,1.64h0v0h0v0h0l-.49-1.64s0,0,0-.06h0v-.05h0Z", 1, "cls-51"], ["d", "M294,141.87l.48,1.64v0h0a1.93,1.93,0,0,0,0,.23h0a.13.13,0,0,1,0,.06h0L294,142.3h0v0h0v0h0a2.09,2.09,0,0,1,0-.24h0v0Z", 1, "cls-51"], ["d", "M294,142.3l.49,1.64h0a.25.25,0,0,0,0,.07l-.16-.53v-.28l-.25-.82h0v0h0v0Z", 1, "cls-51"], ["points", "291.99 141.6 292.49 143.24 292.14 144.8 291.64 143.16 291.99 141.6", 1, "cls-51"], ["points", "295.57 143.57 296.06 145.21 295.96 145.57 295.48 143.93 295.57 143.57", 1, "cls-51"], ["points", "297.05 154.93 297.53 156.53 289.33 155.58 288.81 153.98 297.05 154.93", 1, "cls-51"], ["points", "299.46 144.31 299.92 145.95 297.53 156.53 297.05 154.93 299.46 144.31", 1, "cls-51"], ["d", "M295.48,143.93l4,.38-2.41,10.62-8.23-1,2.76-12.38H292l-.35,1.56h.27a2.23,2.23,0,0,0,.48,0,2.06,2.06,0,0,0,.59-.2,2.21,2.21,0,0,0,.58-.46,2.49,2.49,0,0,0,.45-.81.77.77,0,0,0,0,.28,1.59,1.59,0,0,0,.09.57,1.43,1.43,0,0,0,.43.62,2.09,2.09,0,0,0,1,.42l.09,0Z", 1, "cls-52"], ["d", "M208.74,150c.16.53.32,1.07.49,1.61a2.41,2.41,0,0,0-.2-.44,1.89,1.89,0,0,0-.39-.42,2.06,2.06,0,0,0-.63-.32,3.52,3.52,0,0,0-.94-.14l-.5-1.61a3.52,3.52,0,0,1,.94.14,2,2,0,0,1,.64.32,1.7,1.7,0,0,1,.39.42A2.41,2.41,0,0,1,208.74,150Z", 1, "cls-51"], ["d", "M208.74,150l0,.15v.22l.22.73v.49h0v0h0v0h-.08s0,0,0-.08l-.06-.08h0l0,0h-.18v0h0l-.09-.08a1.4,1.4,0,0,0-.24-.15h0l0,0h-.26l-.11,0h0l-.3-.07h-.64l-.5-1.61h.56a1.93,1.93,0,0,1,.38.09h0a1.67,1.67,0,0,1,.52.24h0l0,0h.35v0h0l.1.14a.47.47,0,0,1,.05.1h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0s0,.09.05.14Z", 1, "cls-51"], ["points", "206.57 148.69 207.07 150.3 206.86 152.36 206.36 150.76 206.57 148.69", 1, "cls-51"], ["points", "206.36 150.76 206.86 152.36 205.66 152.19 205.16 150.58 206.36 150.76", 1, "cls-51"], ["points", "211.47 150.51 211.94 152.12 209.31 152.2 208.82 150.59 211.47 150.51", 1, "cls-51"], ["points", "212.48 140.12 212.95 141.77 211.95 152.12 211.47 150.51 212.48 140.12", 1, "cls-51"], ["d", "M212.48,140.12l-1,10.39-2.65.08a3.07,3.07,0,0,0,0-.33,2,2,0,0,0-.23-.64,1.71,1.71,0,0,0-.67-.63,2.78,2.78,0,0,0-1.33-.3l-.21,2.06-1.21-.17,1.09-10.43,6.24,0Z", 1, "cls-52"], ["points", "197.37 139.67 197.84 141.31 197.35 146.36 196.87 144.74 197.37 139.67", 1, "cls-51"], ["points", "196.87 144.74 197.35 146.35 192.72 146.35 192.22 144.74 196.87 144.74", 1, "cls-51"], ["points", "197.37 139.67 196.87 144.74 192.22 144.74 192.74 139.68 197.37 139.67", 1, "cls-52"], ["points", "197.37 145.92 197.84 147.55 197.35 152.6 196.87 150.98 197.37 145.92", 1, "cls-51"], ["points", "196.87 150.98 197.35 152.6 192.72 152.59 192.22 150.98 196.87 150.98", 1, "cls-51"], ["points", "197.37 145.92 196.87 150.98 192.22 150.98 192.74 145.92 197.37 145.92", 1, "cls-52"], ["points", "197.82 135.92 198.31 137.56 196.55 137.56 196.04 135.92 197.82 135.92", 1, "cls-51"], ["d", "M197.46,138.38c.16.54.33,1.09.5,1.63a.89.89,0,0,0-.15-.29,1.06,1.06,0,0,0-.28-.28,1.89,1.89,0,0,0-.45-.24,3.57,3.57,0,0,0-.67-.14l-.51-1.64a2.87,2.87,0,0,1,.68.15,1.58,1.58,0,0,1,.45.23,1.24,1.24,0,0,1,.28.28,1.05,1.05,0,0,1,.15.3Z", 1, "cls-51"], ["d", "M197.53,138.63v.31l.25.82v.17l0,.06h-.1a.21.21,0,0,0,0-.06h0l-.07-.09h-.13l-.08-.06h-.35l-.07,0h0l0,0H197l-.07,0h0l-.24-.06h-.15l-.1,0h-.05l-.26-.82-.25-.82h.28a2.66,2.66,0,0,1,.39.11l.1,0h.59l0,.05h0l0,0h0a1,1,0,0,1,.14.3h0l.08.25ZM198,140h0", 1, "cls-51"], ["points", "197.8 139.21 198.29 140.84 196.39 140.84 195.89 139.21 197.8 139.21", 1, "cls-51"], ["points", "204.64 146.86 205.11 148.47 197.51 148.45 197.01 146.85 204.64 146.86", 1, "cls-51"], ["points", "205.71 135.65 206.17 137.29 205.11 148.47 204.64 146.86 205.71 135.65", 1, "cls-51"], ["d", "M205.71,135.65l-1.07,11.21H197l.79-7.64h-1.92l0-.2h1.57a1.27,1.27,0,0,0,0-.24,1.14,1.14,0,0,0-.08-.49,1.17,1.17,0,0,0-.46-.52,2.44,2.44,0,0,0-1.06-.34,1.59,1.59,0,0,0,.29,0,3,3,0,0,0,.58-.17,2,2,0,0,0,.62-.45,1.84,1.84,0,0,0,.42-.85H196l0-.26,9.64,0Z", 1, "cls-52"], ["d", "M120.1,114.73l.49,1.64h0v0h0v0h0v0h0v0h0v0l-.49-1.64h0v0h0v0h0v0h0Z", 1, "cls-1"], ["d", "M120.13,115l.49,1.64a.09.09,0,0,0,0,0h0v0h0l-.48-1.63h0v0h0Zm.51,1.73Z", 1, "cls-53"], ["points", "118.45 114.93 118.94 116.57 118.83 117.73 118.33 116.09 118.45 114.93", 1, "cls-20"], ["points", "124.04 127.86 124.52 129.47 117.14 129.45 116.63 127.85 124.04 127.86", 1, "cls-51"], ["points", "125.16 114.91 125.63 116.56 124.38 129.47 123.91 127.86 125.16 114.91", 1, "cls-51"], ["d", "M120.1,114.73s0,.1,0,.21a1.35,1.35,0,0,0,.15.44,1.25,1.25,0,0,0,.4.44,1.88,1.88,0,0,0,.82.27l.12-1.17h3.56l-1.25,13H116.5l1.34-12.92h.61l-.12,1.16.31,0a2.63,2.63,0,0,0,.57-.16,1.59,1.59,0,0,0,.57-.41,1.43,1.43,0,0,0,.32-.77Z", 1, "cls-52"], ["d", "M128.06,113.66h0v0h.07l.23.76h0v.09h0v0h0l0,.19v0h-.06v0h0v0h0a.43.43,0,0,0,0-.07h0l0,0h0v0h0l-.07-.08h0l0,0h0l0,0h0l-.08-.06-.19-.12h0l0,0h-1l-.13-.42-.37-1.23h.57l.19.06.15.06h.11l0,0h0l0,0h.15l0,0h0l0,0h.28a.16.16,0,0,0,0,.07h0v0h0a.56.56,0,0,1,0,.12h0l0,.14Z", 1, "cls-9"], ["points", "132.65 127.59 133.13 129.19 124.71 129.17 124.2 127.57 132.65 127.59", 1, "cls-51"], ["points", "134.3 110.52 134.76 112.17 133.13 129.19 132.65 127.59 134.3 110.52", 1, "cls-51"], ["d", "M134.3,110.52l-1.65,17.07-8.45,0,1.35-13h.7l0-.36H128a2,2,0,0,0,0-.27,1.36,1.36,0,0,0-.1-.56,1.28,1.28,0,0,0-.51-.6,2.89,2.89,0,0,0-1.19-.4,1.74,1.74,0,0,0,.3,0,2,2,0,0,0,.63-.2,2.2,2.2,0,0,0,.72-.55,3,3,0,0,0,.6-1.09Z", 1, "cls-52"], ["points", "71.87 114.72 72.35 116.36 72.35 116.36 72.35 116.36 72.35 116.36 72.35 116.36 72.35 116.36 72.35 116.37 72.35 116.37 72.35 116.37 72.35 116.37 72.35 116.37 72.35 116.37 72.35 116.37 71.87 114.72 71.87 114.72 71.87 114.72 71.87 114.72 71.87 114.72 71.87 114.72", 1, "cls-54"], ["d", "M71.87,114.72l.48,1.65h0v0h0v0h0a.13.13,0,0,0,0,.06h0s0,0,0,.08l-.47-1.64h0a.13.13,0,0,1,0-.06v0h0v0h0Z", 1, "cls-1"], ["d", "M71.91,115.05l.47,1.65h0v0h0v-.31l-.38-1.31v0h0v0h0v0h0Zm.49,1.73h0", 1, "cls-53"], ["points", "69.94 114.92 70.42 116.57 70.29 117.92 69.8 116.28 69.94 114.92", 1, "cls-55"], ["points", "72.74 127.86 73.22 129.47 64.92 129.45 64.4 127.85 72.74 127.86", 1, "cls-51"], ["points", "73.86 114.91 74.32 116.56 73.08 129.47 72.61 127.86 73.86 114.91", 1, "cls-51"], ["d", "M71.87,114.72a1.86,1.86,0,0,0,0,.25,1.51,1.51,0,0,0,.17.49,1.43,1.43,0,0,0,.48.51,2.21,2.21,0,0,0,1,.31l.13-1.37h.23l-1.25,13H64.27l1.35-12.92h4.32l-.14,1.36.33,0a3.09,3.09,0,0,0,.66-.19,2.19,2.19,0,0,0,.68-.47,1.64,1.64,0,0,0,.4-.86Z", 1, "cls-52"], ["points", "76.52 114.79 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.44 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.45 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77.01 116.46 77 116.46 77 116.47 77 116.47 77 116.47 77 116.47 77 116.47 77 116.47 77 116.47 77 116.47 77 116.47 77 116.47 77 116.48 77 116.48 77 116.51 77 116.51 77 116.51 77 116.51 77 116.51 77 116.52 77 116.52 77 116.52 77 116.52 76.51 114.87 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.84 76.51 114.83 76.51 114.83 76.51 114.83 76.51 114.83 76.51 114.83 76.51 114.83 76.51 114.83 76.51 114.83 76.51 114.83 76.51 114.83 76.51 114.83 76.52 114.81 76.52 114.81 76.52 114.81 76.52 114.81 76.52 114.81 76.52 114.81 76.52 114.81 76.52 114.81 76.52 114.81 76.52 114.81 76.52 114.81 76.52 114.81 76.52 114.81 76.52 114.81 76.52 114.8 76.52 114.8 76.52 114.8 76.52 114.8 76.52 114.79 76.52 114.79", 1, "cls-54"], ["d", "M76.51,114.87l.49,1.65h0v0h0s0,.05,0,.07l-.49-1.64v0h0v0h0v-.1h0v0Z", 1, "cls-1"], ["d", "M76.54,115.14l.49,1.64h0v-.41l0-.05v0l0-.08v0l-.27-.87v-.15h0v0h0Zm.51,1.72h0m0,0h0m0,0h0m0,0h0", 1, "cls-53"], ["points", "74.65 114.93 75.15 116.58 75.01 117.91 74.51 116.27 74.65 114.93", 1, "cls-20"], ["points", "81.04 127.87 81.51 129.47 73.72 129.46 73.21 127.86 81.04 127.87", 1, "cls-51"], ["points", "82.15 114.95 82.62 116.59 81.38 129.47 80.9 127.87 82.15 114.95", 1, "cls-51"], ["d", "M78.22,115h3.93L80.9,127.87l-7.82,0,1.34-12.92h.23l-.14,1.34a2,2,0,0,0,.36,0,2.48,2.48,0,0,0,.6-.18,1.78,1.78,0,0,0,.62-.44,1.91,1.91,0,0,0,.43-.83.72.72,0,0,0,0,.22,1,1,0,0,0,.13.43,1.31,1.31,0,0,0,.46.49,2.61,2.61,0,0,0,1,.37l.13-1.34Z", 1, "cls-52"], ["points", "26.11 107.68 26.58 109.33 26.6 109.5 26.13 107.84 26.11 107.68", 1, "cls-54"], ["d", "M27.81,107.49l.47,1.66a1,1,0,0,1,0,.18,1.05,1.05,0,0,1-.07.4,1.31,1.31,0,0,1-.34.5,2.32,2.32,0,0,1-.78.45L26.64,109a2.32,2.32,0,0,0,.79-.46,1.17,1.17,0,0,0,.41-.89.68.68,0,0,0,0-.19Z", 1, "cls-51"], ["d", "M27.81,107.49l.47,1.66h0l-.46-1.65h0Z", 1, "cls-51"], ["d", "M27.82,107.51l.46,1.65h0v0h0v.06h0l-.46-1.65v0h0v-.05h0v0h0Z", 1, "cls-51"], ["d", "M27.84,107.73l.46,1.66h0s0,0,0,.07v0h0a.88.88,0,0,1-.05.15h0a.67.67,0,0,1-.1.21l-.46-1.66h0l0-.08s0-.08,0-.12h0s0-.06,0-.08h0v0h0Z", 1, "cls-51"], ["d", "M27.67,108.29l.46,1.65,0,0h0l0,.05h0l0,0h0v0l-.47-1.66.05,0,0,0h.1Z", 1, "cls-51"], ["d", "M27.5,108.5l.46,1.66h0l0,0-.05,0,0,0h0l0,0-.46-1.65h0l0,0h0l0,0h0l0,0Zm-.15.14,0,0h0", 1, "cls-51"], ["d", "M27.33,108.66l.46,1.65,0,0-.05,0-.05,0-.06,0-.47-1.65h.1l0,0h.09Z", 1, "cls-51"], ["d", "M27.12,108.8l.47,1.65-.06,0h0l0,0-.07,0-.07,0-.47-1.65.05,0H27l0,0h.06l.05,0h0Z", 1, "cls-51"], ["d", "M26.86,108.94l.47,1.65,0,0-.06,0,0,0h-.07L26.64,109h.22Z", 1, "cls-51"], ["points", "28.34 109.97 28.8 111.62 27.17 112.01 26.7 110.36 28.34 109.97", 1, "cls-51"], ["points", "26.94 111.36 27.41 113 25.35 113.51 24.87 111.86 26.94 111.36", 1, "cls-51"], ["points", "26.7 110.36 27.17 112.01 27.41 113 26.94 111.36 26.7 110.36", 1, "cls-53"], ["points", "19.7 127.39 20.22 128.98 19.51 128.98 19 127.39 19.7 127.39", 1, "cls-51"], ["points", "19.82 126.24 20.34 127.84 20.22 128.98 19.7 127.39 19.82 126.24", 1, "cls-51"], ["d", "M21.15,127.09c.17.53.34,1.06.5,1.59a1.19,1.19,0,0,0-.36-.56,1,1,0,0,0-.36-.2,1.58,1.58,0,0,0-.52-.08h-.07l-.52-1.6h.08a1.58,1.58,0,0,1,.52.08,1.18,1.18,0,0,1,.37.2,1.43,1.43,0,0,1,.23.27A1.3,1.3,0,0,1,21.15,127.09Z", 1, "cls-51"], ["d", "M21.15,127.09h0v.12l.07.22v0l.28.89v.18l0,.13h-.06l-.07-.11a.21.21,0,0,0,0-.06h0l0,0h0l0,0h-.1l-.05,0h0a.83.83,0,0,0-.18-.13h-.18l-.05,0h-.54l-.32-1-.2-.6h.06m1.77,2.42Zm-1.75-2.42h.68a1.07,1.07,0,0,1,.21.13s0,0,0,0h.1l0,0h.2", 1, "cls-51"], ["d", "M22.85,126.25l.5,1.6h-.18a1.53,1.53,0,0,0-.33,0,1.18,1.18,0,0,0-.4.18,1.47,1.47,0,0,0-.4.39,2.17,2.17,0,0,0-.31.7l-.51-1.59a2.41,2.41,0,0,1,.31-.7,1.38,1.38,0,0,1,.4-.4,1.28,1.28,0,0,1,.41-.17,1.53,1.53,0,0,1,.33,0h.18Z", 1, "cls-51"], ["d", "M22.85,126.25l.5,1.6h-.41l-.5-1.59h.41Z", 1, "cls-51"], ["d", "M22.44,126.25l.5,1.6h-.19l-.5-1.6h.19Z", 1, "cls-51"], ["d", "M22.25,126.3l.5,1.6H22.6l-.5-1.6h0l0,0h.08Z", 1, "cls-51"], ["d", "M22.1,126.36l.5,1.6h-.09l0,0h0l-.5-1.59h.14Z", 1, "cls-51"], ["d", "M22,126.44l.5,1.59,0,0h0l-.07,0h0l-.5-1.6h.09m0,0h0", 1, "cls-6"], ["d", "M21.83,126.53l.5,1.59,0,0h-.06l0,0h0l-.5-1.6,0,0h0l.09-.07Z", 1, "cls-51"], ["d", "M21.68,126.67l.5,1.59h0l0,0,0,.05h0l0,0,0,0h0l0,0-.5-1.59h.09l.05-.07h.06Z", 1, "cls-51"], ["d", "M21.48,126.93l.5,1.59a.83.83,0,0,1-.07.13l0,0h0l0,0h0v0h0v0h0s0,.1,0,.15l-.41-1.29-.1-.3h.05v0l.06-.17v0h0l0-.06h0l0-.06a.2.2,0,0,1,0-.08h0Z", 1, "cls-51"], ["points", "24.87 111.86 25.35 113.51 23.81 128.99 23.31 127.4 24.87 111.86", 1, "cls-51"], ["points", "23.45 127.4 23.95 128.99 23.24 128.99 22.74 127.39 23.45 127.4", 1, "cls-51"], ["d", "M27.81,107.49a.68.68,0,0,1,0,.19,1.17,1.17,0,0,1-.41.89,2.32,2.32,0,0,1-.79.46h0l.08,0H27l.36,0a1.53,1.53,0,0,1,.39.14,1.07,1.07,0,0,1,.35.29,1.34,1.34,0,0,1,.24.51l-1.63.39.24,1-2.07.5L23.31,127.4H22.6l.12-1.14h-.18a1.05,1.05,0,0,0-.33,0,1.28,1.28,0,0,0-.41.17,1.38,1.38,0,0,0-.4.4,2,2,0,0,0-.31.7,1.41,1.41,0,0,0,0-.23,1.53,1.53,0,0,0-.14-.45,1.16,1.16,0,0,0-.4-.43,1.36,1.36,0,0,0-.77-.2h-.07l-.12,1.15h-.71l1.92-18.44,5.33-1.26,0,.16,1.68-.35Z", 1, "cls-52"], ["points", "15.56 23.25 16.03 24.88 15.99 25.24 15.53 23.61 15.56 23.25", 1, "cls-51"], ["points", "19.41 23.25 19.86 24.88 16.03 24.88 15.56 23.25 19.41 23.25", 1, "cls-51"], ["points", "19.64 20.77 20.09 22.41 19.86 24.88 19.41 23.25 19.64 20.77", 1, "cls-51"], ["points", "19.38 23.61 19.83 25.24 19.42 29.66 18.96 28.05 19.38 23.61", 1, "cls-51"], ["points", "18.96 28.05 19.42 29.66 3.7 29.64 3.17 28.03 18.96 28.05", 1, "cls-51"], ["points", "19.64 20.77 19.41 23.25 15.56 23.25 15.53 23.61 19.38 23.61 18.96 28.05 3.17 28.03 3.89 20.8 19.64 20.77", 1, "cls-52"], ["points", "24.26 20.78 24.73 22.42 24.02 29.66 23.54 28.04 24.26 20.78", 1, "cls-51"], ["points", "23.54 28.04 24.02 29.66 19.99 29.65 19.49 28.04 23.54 28.04", 1, "cls-51"], ["points", "24.26 20.78 23.54 28.04 19.49 28.04 20.24 20.79 24.26 20.78", 1, "cls-52"], ["points", "30.78 5.57 31.26 7.19 31.23 7.52 30.74 5.9 30.78 5.57", 1, "cls-51"], ["points", "38.45 5.57 38.9 7.19 31.26 7.19 30.78 5.57 38.45 5.57", 1, "cls-51"], ["points", "38.98 0.2 39.42 1.84 38.9 7.19 38.45 5.57 38.98 0.2", 1, "cls-51"], ["points", "34.78 5.9 35.25 7.53 34.95 10.72 34.48 9.11 34.78 5.9", 1, "cls-51"], ["points", "34.48 9.11 34.95 10.72 20.86 10.7 20.32 9.09 34.48 9.11", 1, "cls-51"], ["points", "38.98 0.2 38.45 5.57 30.78 5.57 30.74 5.9 34.78 5.9 34.48 9.11 20.32 9.09 21.29 0.23 38.98 0.2", 1, "cls-52"], ["points", "46.32 1.89 46.83 3.51 45.59 3.51 45.08 1.89 46.32 1.89", 1, "cls-51"], ["d", "M46,4l.51,1.62a1.59,1.59,0,0,0-.12-.27,1.09,1.09,0,0,0-.24-.24,1.42,1.42,0,0,0-.37-.19,2.18,2.18,0,0,0-.55-.09l-.52-1.62a2,2,0,0,1,.55.09,1.23,1.23,0,0,1,.38.19,1,1,0,0,1,.23.24A1.11,1.11,0,0,1,46,4Z", 1, "cls-51"], ["d", "M46.08,4.15v.66l0,.05V5l0,.06v.57h-.09v0h-.09a.88.88,0,0,0-.17-.16L46,5h0l0,0h-.13l-.06,0-.1,0h-.08l-.06,0h-.31l-.18-.55-.34-1.07a2,2,0,0,1,.55.09h0a1.23,1.23,0,0,1,.38.19H46l0,0h0l0,.17Zm.46,1.44Zm0,0Zm0,0h0Z", 1, "cls-51"], ["points", "56.92 6.39 57.39 8.01 45.12 8 44.6 6.39 56.92 6.39", 1, "cls-51"], ["points", "57.53 0 57.99 1.64 57.39 8.01 56.92 6.39 57.53 0", 1, "cls-51"], ["d", "M57.53,0l-.61,6.4H44.6l.19-1.83,1.28-.06a.59.59,0,0,0,0-.22,1,1,0,0,0-.49-.87,1.81,1.81,0,0,0-.85-.22l.25,0a2,2,0,0,0,.5-.15A1.58,1.58,0,0,0,46,2.62a1.4,1.4,0,0,0,.31-.73H45.08L45.28,0Z", 1, "cls-52"], ["points", "49.76 7.69 50.24 9.32 49.73 14.47 49.25 12.85 49.76 7.69", 1, "cls-51"], ["points", "49.25 12.85 49.73 14.47 45.1 14.47 44.6 12.85 49.25 12.85", 1, "cls-51"], ["points", "49.76 7.69 49.25 12.85 44.6 12.85 45.13 7.71 49.76 7.69", 1, "cls-52"], ["points", "49.76 14.04 50.24 15.68 49.73 20.81 49.25 19.2 49.76 14.04", 1, "cls-51"], ["points", "49.25 19.2 49.73 20.81 45.1 20.81 44.6 19.19 49.25 19.2", 1, "cls-51"], ["points", "49.76 14.04 49.25 19.2 44.6 19.19 45.13 14.05 49.76 14.04", 1, "cls-52"], ["points", "51.68 17.66 52.18 19.27 52.07 20.41 51.57 18.8 51.68 17.66", 1, "cls-51"], ["points", "51.57 18.8 52.07 20.41 49.96 20.4 49.45 18.8 51.57 18.8", 1, "cls-51"], ["d", "M53,18.51l.5,1.61a1.05,1.05,0,0,0-.31-.48,1.54,1.54,0,0,0-.44-.26,1.84,1.84,0,0,0-.4-.09l-.21,0-.5-1.61.21,0a1.84,1.84,0,0,1,.4.09,1.42,1.42,0,0,1,.44.26.92.92,0,0,1,.31.48Z", 1, "cls-51"], ["d", "M53,18.51l.06.18v.25l.36,1.17a1,1,0,0,0-.12-.26h0v0h0l0,0h-.17l0,0h0l0,0h-.25l-.12-.06h-.61l-.34-1.09-.16-.52h.44l.11,0h0l.06,0h0a1.58,1.58,0,0,1,.42.23h0l0,0h0a.08.08,0,0,1,0,0h0a.41.41,0,0,1,.12.14h0l.06.08H53a.43.43,0,0,0,0,.05Z", 1, "cls-51"], ["d", "M54.74,17.66l.48,1.62a1.86,1.86,0,0,0-.85.22,1.59,1.59,0,0,0-.72.86c0,.11,0,.2-.06.21L53.1,19a1.24,1.24,0,0,1,.06-.22,1.59,1.59,0,0,1,.72-.86,2,2,0,0,1,.86-.23Z", 1, "cls-51"], ["d", "M54.74,17.66l.48,1.62m0,0H55l-.49-1.62h.28", 1, "cls-6"], ["d", "M54.46,17.69,55,19.31h-.22l-.07,0-.49-1.61h.08l.06,0h.15Z", 1, "cls-51"], ["d", "M54.17,17.76l.49,1.61,0,0,0,0h-.1L54,17.84l0,0h.06l0,0,.05,0Z", 1, "cls-51"], ["d", "M54,17.84l.48,1.61,0,0h0l0,0h0l0,0-.49-1.61h0l0,0H54Z", 1, "cls-51"], ["d", "M53.81,17.93l.49,1.61h0l0,0h0l0,0h-.08L53.66,18h.15Z", 1, "cls-51"], ["d", "M53.66,18l.49,1.61h0l-.11.1h0v0h0l-.49-1.61h0l0,0h0l0,0h0l0,0h0Z", 1, "cls-51"], ["d", "M53.5,18.18,54,19.79h-.07l0,0,0,.07v0h0l-.49-1.61h0l0-.06,0,0h0l0,0h0l0,0Z", 1, "cls-51"], ["d", "M53.31,18.43,53.8,20l0,.05h0v0h0l0,0h0l0,.05a.7.7,0,0,0-.06.17v0h0l-.44-1.44,0-.16h0a.24.24,0,0,0,0-.08l0-.09h.12v0Z", 1, "cls-51"], ["points", "56.75 18.8 57.23 20.41 55.11 20.41 54.62 18.8 56.75 18.8", 1, "cls-51"], ["points", "57.78 8.16 58.25 9.81 57.23 20.41 56.75 18.8 57.78 8.16", 1, "cls-51"], ["d", "M57.78,8.17l-1,10.64H54.62l.12-1.14a2,2,0,0,0-.86.23,1.59,1.59,0,0,0-.72.86,1.24,1.24,0,0,0-.06.22,1.18,1.18,0,0,0-.2-.75,1.1,1.1,0,0,0-.47-.39,2.24,2.24,0,0,0-.49-.15l-.26,0-.11,1.14H49.45l1.1-10.62Z", 1, "cls-52"], ["points", "194.67 76.09 195.13 77.71 190.95 81.86 190.47 80.25 194.67 76.09", 1, "cls-51"], ["points", "190.47 80.25 190.95 81.86 182.35 75.27 181.83 73.65 190.47 80.25", 1, "cls-51"], ["points", "186.05 69.54 194.67 76.09 190.47 80.25 181.83 73.65 186.05 69.54", 1, "cls-52"], ["points", "248.87 94.37 249.28 96 245.62 104.58 245.19 102.97 248.87 94.37", 1, "cls-51"], ["points", "245.19 102.97 245.62 104.58 213.78 95.8 213.21 94.18 245.19 102.97", 1, "cls-51"], ["points", "217.06 85.82 248.87 94.37 245.19 102.97 213.21 94.18 217.06 85.82", 1, "cls-52"], ["points", "230.32 84.91 230.77 86.53 227.16 88.45 226.7 86.83 230.32 84.91", 1, "cls-51"], ["points", "226.7 86.83 227.16 88.45 211.04 84.03 210.51 82.4 226.7 86.83", 1, "cls-51"], ["points", "211.69 79.78 230.32 84.91 226.7 86.83 210.51 82.4 211.69 79.78", 1, "cls-52"], ["points", "234.12 82.42 234.56 84.04 230.94 85.96 230.49 84.34 234.12 82.42", 1, "cls-51"], ["points", "230.49 84.34 230.94 85.96 212.1 80.84 211.56 79.21 230.49 84.34", 1, "cls-51"], ["points", "212.74 76.62 234.12 82.42 230.49 84.34 211.56 79.21 212.74 76.62", 1, "cls-52"], ["points", "189.98 15.1 190.46 16.73 189.98 21.64 189.5 20.02 189.98 15.1", 1, "cls-51"], ["points", "189.5 20.02 189.98 21.64 185.45 21.64 184.94 20.02 189.5 20.02", 1, "cls-51"], ["points", "189.98 15.1 189.5 20.02 184.94 20.02 185.45 15.11 189.98 15.1", 1, "cls-52"], ["points", "190.09 21.35 190.56 22.99 190.07 28.04 189.59 26.42 190.09 21.35", 1, "cls-51"], ["points", "189.59 26.42 190.07 28.04 185.44 28.03 184.94 26.41 189.59 26.42", 1, "cls-51"], ["points", "190.09 21.35 189.59 26.42 184.94 26.41 185.46 21.36 190.09 21.35", 1, "cls-52"], ["points", "185.4 32.34 185.88 33.96 185.74 35.35 185.26 33.74 185.4 32.34", 1, "cls-51"], ["points", "185.26 33.74 185.74 35.35 177.29 35.34 176.77 33.73 185.26 33.74", 1, "cls-51"], ["d", "M187,33.34l0,.08c.15.52.29,1,.45,1.54a2.14,2.14,0,0,0-.16-.35,1.3,1.3,0,0,0-.73-.56,2.13,2.13,0,0,0-.67-.09h0l-.48-1.62h0a2.13,2.13,0,0,1,.67.09,1.33,1.33,0,0,1,.46.24,1.37,1.37,0,0,1,.28.32,1.48,1.48,0,0,1,.15.35Z", 1, "cls-51"], ["d", "M187,33.34h0l0,.07h0c.14.51.29,1,.44,1.52h0v0h0l0-.06h0v0h0v0h0l0,0h0v0h0v0h-1.47l-.48-1.62H186l.09,0h0l.09,0h0l0,0h0l.05,0h.31l0,0h0v0h0a1,1,0,0,1,.16.2h0v0h.06v0h0v0h0v0H187Zm.48,1.62h0", 1, "cls-51"], ["d", "M189,32.35l.46,1.63h-.17a1.65,1.65,0,0,0-.41,0,2.12,2.12,0,0,0-.52.2,1.82,1.82,0,0,0-.5.47,2.26,2.26,0,0,0-.35.84l-.47-1.62a2.26,2.26,0,0,1,.35-.84,1.82,1.82,0,0,1,.5-.47,1.73,1.73,0,0,1,.53-.2,1.68,1.68,0,0,1,.41,0H189Z", 1, "cls-51"], ["d", "M189,32.35l.46,1.63H189l-.46-1.62h0a.82.82,0,0,1,.21,0H189Z", 1, "cls-51"], ["d", "M188.54,32.37,189,34h-.26l-.47-1.63h.14l.06,0h.07Z", 1, "cls-51"], ["d", "M188.27,32.43l.47,1.63h-.2l-.46-1.62h0l.1,0h.08Z", 1, "cls-51"], ["d", "M188.08,32.51l.46,1.62h-.17l-.46-1.62h0l0,0h0l0,0h0l.05,0Z", 1, "cls-51"], ["d", "M187.9,32.6l.47,1.62h-.05l0,0h0l0,0h0l-.47-1.62,0,0h0l0,0h.07Z", 1, "cls-51"], ["d", "M187.74,32.72l.47,1.62a.41.41,0,0,0-.1.09h0l0,.05h0l-.47-1.62a.08.08,0,0,0,0,0h0l0,0h.08Z", 1, "cls-51"], ["d", "M187.57,32.87l.47,1.62h0l0,0h0l-.08.1h0l-.06.1-.48-1.62.06-.08.05-.07,0-.07.06-.07Z", 1, "cls-51"], ["d", "M187.35,33.16l.47,1.62h-.07v0h0l0,.07h0l0,.09h0a1.17,1.17,0,0,0,0,.2h0v0h0l-.47-1.62h.11v-.06h0v0h0l0,0h.1v0Z", 1, "cls-51"], ["points", "189.51 33.74 189.97 35.36 189.36 35.36 188.89 33.74 189.51 33.74", 1, "cls-51"], ["points", "190.07 27.71 190.53 29.35 189.97 35.36 189.51 33.74 190.07 27.71", 1, "cls-51"], ["d", "M190.07,27.71l-.56,6h-.62l.13-1.39h-.17a2,2,0,0,0-.93.25,1.69,1.69,0,0,0-.5.47,2.26,2.26,0,0,0-.35.84,1.5,1.5,0,0,0,0-.28,1.57,1.57,0,0,0-.16-.53,1.18,1.18,0,0,0-.48-.52,1.86,1.86,0,0,0-1-.23h0l-.14,1.4h-8.49l.64-6,12.66,0Z", 1, "cls-52"], ["d", "M199.29,17.64c-.17-.55-.33-1.1-.49-1.64,0-.07,0-.13,0-.18a1,1,0,0,1,0-.15.49.49,0,0,1,0-.11v-.05l.49,1.64v.05a.45.45,0,0,0,0,.11,1,1,0,0,0,0,.15,1.49,1.49,0,0,0,0,.18Z", 1, "cls-51"], ["d", "M199.22,17.16l-.49-1.64h0l.49,1.64h0Z", 1, "cls-51"], ["d", "M198.73,15.52l.49,1.64h0v0h0v0h0a.44.44,0,0,0,0,.1l-.49-1.64h0v0h0v-.08Z", 1, "cls-51"], ["d", "M198.77,15.88Zm0,0,.49,1.64v0h0v0h0v0h0c-.12-.4-.24-.79-.35-1.19v-.25l0-.18V16h0Z", 1, "cls-51"], ["points", "196.89 15.7 197.39 17.34 197.25 18.69 196.75 17.06 196.89 15.7", 1, "cls-51"], ["points", "202.54 27.93 203.02 29.53 195.97 29.52 195.46 27.91 202.54 27.93", 1, "cls-51"], ["points", "203.73 15.68 204.2 17.33 203.02 29.53 202.54 27.93 203.73 15.68", 1, "cls-51"], ["d", "M198.73,15.51a1.86,1.86,0,0,0,0,.26,1.44,1.44,0,0,0,.16.5,1.36,1.36,0,0,0,.48.51,2.12,2.12,0,0,0,1,.27l.13-1.36h3.22l-1.19,12.25h-7.08L196.7,15.7h.19l-.14,1.37.3,0a2.54,2.54,0,0,0,.61-.18,1.89,1.89,0,0,0,.65-.46,1.73,1.73,0,0,0,.42-.87Z", 1, "cls-52"], ["points", "274.86 44.76 275.33 46.4 275.07 49.11 274.59 47.48 274.86 44.76", 1, "cls-51"], ["points", "274.98 52.04 275.46 53.66 275.27 53.66 274.79 52.04 274.98 52.04", 1, "cls-51"], ["points", "274.79 52.04 275.27 53.66 275.17 54.7 274.68 53.09 274.79 52.04", 1, "cls-51"], ["points", "274.68 53.09 275.17 54.7 265.46 54.69 264.93 53.08 274.68 53.09", 1, "cls-51"], ["points", "279.2 52.04 279.65 53.66 275.46 53.66 274.98 52.04 279.2 52.04", 1, "cls-51"], ["points", "279.88 44.75 280.33 46.39 279.65 53.66 279.2 52.04 279.88 44.75", 1, "cls-51"], ["points", "279.88 44.75 279.2 52.04 274.98 52.04 274.79 52.04 274.68 53.09 264.93 53.08 265.82 44.77 274.86 44.76 274.59 47.48 274.98 47.48 275.25 44.76 279.88 44.75", 1, "cls-52"], ["points", "279.82 53.47 280.27 55.1 279.62 62.14 279.16 60.52 279.82 53.47", 1, "cls-51"], ["points", "279.16 60.52 279.62 62.14 279.61 62.21 279.15 60.6 279.16 60.52", 1, "cls-51"], ["points", "279.15 60.6 279.61 62.21 265.52 62.19 265 60.58 279.15 60.6", 1, "cls-51"], ["points", "279.82 53.47 279.16 60.52 279.15 60.6 265 60.58 265.65 54.54 275.53 54.53 275.64 53.47 279.82 53.47", 1, "cls-52"], ["points", "284.11 56.13 284.59 57.77 284.14 62.39 283.65 60.77 284.11 56.13", 1, "cls-51"], ["points", "283.65 60.77 284.14 62.39 280.3 62.39 279.81 60.77 283.65 60.77", 1, "cls-51"], ["points", "284.11 56.13 283.65 60.77 279.81 60.77 280.28 56.14 284.11 56.13", 1, "cls-52"], ["points", "288.22 32.01 288.69 33.65 288.2 38.67 287.72 37.05 288.22 32.01", 1, "cls-51"], ["points", "287.72 37.05 288.2 38.67 283.57 38.66 283.07 37.05 287.72 37.05", 1, "cls-51"], ["points", "288.22 32.01 287.72 37.05 283.07 37.05 283.59 32.02 288.22 32.01", 1, "cls-52"], ["points", "296.77 27.31 297.26 28.96 295.23 28.96 294.72 27.32 296.77 27.31", 1, "cls-51"], ["points", "303.08 27.69 303.54 29.34 301.8 29.34 301.33 27.69 303.08 27.69", 1, "cls-51"], ["points", "303.13 27.16 303.59 28.81 303.54 29.34 303.08 27.69 303.13 27.16", 1, "cls-51"], ["d", "M301.87,29.9c-.16-.54-.31-1.09-.47-1.64l0-.13,0-.14s0-.09,0-.14v-.16l.47,1.65v.15c0,.05,0,.1,0,.15a.68.68,0,0,0,0,.14l0,.12Z", 1, "cls-51"], ["d", "M301.33,27.69l.47,1.65v.1h0v.07h0a.17.17,0,0,0,0,.07h0s0,.06,0,.09h0v0l-.48-1.64m0-.05h0a.11.11,0,0,1,0-.05h0m0-.05h0v0h0", 1, "cls-6"], ["d", "M301.37,28.16l.47,1.64h0v0h0l-.47-1.63v0h0v0h0Zm.5,1.73Zm0,0Z", 1, "cls-51"], ["d", "M296.31,30.24c.17.54.33,1.09.5,1.63a1.37,1.37,0,0,0-.41-.64,1.76,1.76,0,0,0-.57-.34,2.62,2.62,0,0,0-.52-.13l-.27,0-.5-1.64.26,0a2.54,2.54,0,0,1,.53.13,1.92,1.92,0,0,1,.58.34,1.41,1.41,0,0,1,.4.65Z", 1, "cls-51"], ["d", "M296.34,30.31v.16l0,.05v0l.11.36v0l0,.1v.36l0,.05v.08l.06.17v0l0,.05v.08h0v0h0v0h0l0-.08h0a1.27,1.27,0,0,0-.07-.12h0a1.3,1.3,0,0,0-.26-.31,1.57,1.57,0,0,0-.26-.19h-.73l-.1,0H295l-.5-1.64h1.21l0,0h0l.09.07h0v0h0l0,0h.24v0h0v0h0v0h0v0h0a.19.19,0,0,1,0,.07h0l0,.07Zm.47,1.56h0Z", 1, "cls-51"], ["points", "301.81 40.84 302.29 42.45 294.01 42.43 293.5 40.83 301.81 40.84", 1, "cls-51"], ["points", "302.91 29.44 303.38 31.08 302.28 42.45 301.81 40.84 302.91 29.44", 1, "cls-51"], ["d", "M303.13,27.16l-.05.53h-1.75a1.66,1.66,0,0,0,.23.94,1.61,1.61,0,0,0,.52.52,2.3,2.3,0,0,0,.55.24,1.43,1.43,0,0,0,.28.05l-1.1,11.4H293.5l1-9.87h1.85a1.75,1.75,0,0,0-.22-1.06,1.46,1.46,0,0,0-.61-.55,2.82,2.82,0,0,0-.66-.22,2.32,2.32,0,0,0-.35,0,3,3,0,0,0,1.22-.32,2.07,2.07,0,0,0,.67-.59,2,2,0,0,0,.28-.58,1.26,1.26,0,0,0,.06-.3h-2l0-.14,8.39,0Z", 1, "cls-52"], ["points", "301.92 48.67 302.41 50.29 302.25 51.92 301.76 50.31 301.92 48.67", 1, "cls-51"], ["points", "301.76 50.31 302.25 51.92 294.35 51.91 293.83 50.3 301.76 50.31", 1, "cls-51"], ["d", "M303.81,49.87l.48,1.62a2,2,0,0,0-.18-.4,1.3,1.3,0,0,0-.34-.37,1.68,1.68,0,0,0-.55-.3,3.39,3.39,0,0,0-.81-.14l-.48-1.61a2.62,2.62,0,0,1,.81.14,1.64,1.64,0,0,1,.56.29,1.52,1.52,0,0,1,.34.38A1.65,1.65,0,0,1,303.81,49.87Z", 1, "cls-51"], ["d", "M304,50.54l.27.93a1.07,1.07,0,0,0-.07-.19h0v0h0l0,0h-.1a1.1,1.1,0,0,0-.14-.18h-.14l0,0-.09-.07h-.83a2.87,2.87,0,0,0-.44,0l-.29-1-.19-.66h.71l.1,0H303l0,0h0a1.41,1.41,0,0,1,.29.18l.1.09h0l0,0h0l0,0h0l0,0h0l0,0h0a.86.86,0,0,0,.07.1h0v0h0l0,0h0v0h.16l.2.67Z", 1, "cls-51"], ["d", "M306.16,48.67l.47,1.62a2,2,0,0,0-.42,0,2.32,2.32,0,0,0-.67.21,2.17,2.17,0,0,0-.7.54,2.47,2.47,0,0,0-.49,1l-.47-1.62a2.36,2.36,0,0,1,.49-1,2.07,2.07,0,0,1,.7-.54,2.67,2.67,0,0,1,.68-.22A2.6,2.6,0,0,1,306.16,48.67Z", 1, "cls-51"], ["d", "M306.16,48.67l.47,1.62h-.18l-.23,0-.46-1.62h.4Z", 1, "cls-51"], ["d", "M305.76,48.7l.47,1.62h0a2.1,2.1,0,0,0-.36.09l-.46-1.63.1,0h0l.07,0h0l.1,0h0Z", 1, "cls-51"], ["d", "M305.39,48.8l.46,1.62-.07,0h-.12l-.05,0h0l-.47-1.62h.1l.1,0h0l.05,0Zm.27,1.69h0l0,0", 1, "cls-51"], ["d", "M305.11,48.9l.47,1.62h0l0,0h-.16L304.87,49h0l.07,0h0l.07,0h0l0,0Z", 1, "cls-51"], ["d", "M304.87,49l.48,1.62h-.22l-.47-1.62h0l0,0h0l.08-.06h.06Z", 1, "cls-51"], ["d", "M304.66,49.18l.47,1.62h-.07l0,0h-.09l0,0-.48-1.61h.05l.13-.12h0Z", 1, "cls-51"], ["d", "M304.45,49.38l.47,1.61,0,0h0l0,0h-.11l0,0h-.05v0l-.48-1.62h.06l0,0h.05l.05-.06h0l.07-.09Z", 1, "cls-51"], ["d", "M304.18,49.72l.48,1.62,0,0h0v0h-.08a1.47,1.47,0,0,0-.1.22h0l0,.11h0l0,.1h0l0-.12-.44-1.5.06-.22a.14.14,0,0,1,0-.06h.12v0s0,0,0-.08h0l0,0Z", 1, "cls-51"], ["points", "306.96 50.23 307.42 51.84 306.49 51.84 306.02 50.23 306.96 50.23", 1, "cls-51"], ["points", "307.65 42.85 308.1 44.49 307.42 51.84 306.96 50.23 307.65 42.85", 1, "cls-51"], ["d", "M307.65,42.85,307,50.23H306l.15-1.56a2,2,0,0,0-.42,0,2.28,2.28,0,0,0-.68.21,2.07,2.07,0,0,0-.7.55,2.37,2.37,0,0,0-.49,1,1.84,1.84,0,0,0,0-.31,1.62,1.62,0,0,0-.17-.6,1.57,1.57,0,0,0-.58-.6,2.46,2.46,0,0,0-1.19-.31l-.17,1.64h-7.93l.8-7.43,13,0Z", 1, "cls-52"], ["points", "369.1 159.75 369.57 161.39 368.41 166.38 367.93 164.76 369.1 159.75", 1, "cls-51"], ["points", "367.93 164.76 368.41 166.38 363.86 165.93 363.36 164.31 367.93 164.76", 1, "cls-51"], ["points", "364.54 159.31 369.1 159.75 367.93 164.76 363.36 164.31 364.54 159.31", 1, "cls-52"], ["points", "319.1 65.85 319.57 67.5 318.51 78.14 318.03 76.53 319.1 65.85", 1, "cls-51"], ["points", "315 76.44 315.49 78.05 315.36 79.18 314.87 77.57 315 76.44", 1, "cls-51"], ["points", "314.87 77.57 315.36 79.18 311.37 79.33 310.86 77.72 314.87 77.57", 1, "cls-51"], ["d", "M316.37,77.45c.16.54.33,1.08.49,1.61,0-.08-.07-.18-.12-.29a1.25,1.25,0,0,0-.25-.33,1.08,1.08,0,0,0-.4-.27,1.73,1.73,0,0,0-.6-.12L315,76.44a1.68,1.68,0,0,1,.6.12,1.22,1.22,0,0,1,.41.27,1.46,1.46,0,0,1,.24.33,1.28,1.28,0,0,1,.12.29Z", 1, "cls-51"], ["d", "M316.37,77.45l0,.08v0l0,.07v0l0,.08v0l0,.1v0l0,.12v0l0,.13v.07l0,.1v.08l.05.15v0l.11.36h-.05l0,0h-.08l0,0h0l0,0h0v0h0v0h0l0,0h-1.06l-.2-.65-.3-1h.42l.19.07.13.06H316l0,0h.13v0h0l0,0h0a1,1,0,0,1,.12.19h0v0h0v0h.08Zm.48,1.6h0", 1, "cls-51"], ["d", "M317.94,76.48l.48,1.61-.21,0a1.5,1.5,0,0,0-.42.13,1.59,1.59,0,0,0-.48.33,1.87,1.87,0,0,0-.42.65l-.48-1.6a1.91,1.91,0,0,1,.41-.66,2.07,2.07,0,0,1,.49-.34,1.84,1.84,0,0,1,.42-.12Z", 1, "cls-51"], ["d", "M317.94,76.48l.48,1.61h-.21l-.47-1.62h.2Z", 1, "cls-51"], ["d", "M317.74,76.5l.48,1.61H318l-.48-1.61.06,0h.18Z", 1, "cls-51"], ["d", "M317.49,76.55l.48,1.62h-.09l-.05,0-.05,0-.48-1.61,0,0h.06l0,0h0l0,0Z", 1, "cls-51"], ["d", "M317.3,76.63l.48,1.61,0,0h-.05l-.05,0h0l-.48-1.61,0,0,.05,0,0,0,0,0Z", 1, "cls-51"], ["d", "M317.13,76.72l.48,1.62,0,0h0l0,0h0L317,76.84H317l0,0h0l0,0,0,0Z", 1, "cls-51"], ["d", "M317,76.84l.49,1.61h0l0,0,0,0s0,0,0,0h0l0,0L316.79,77l0,0h0l0,0h.1Z", 1, "cls-51"], ["d", "M316.79,77l.48,1.61h0l0,0h0l0,0h-.06l0,.06h0v0h0l0,0h0l-.49-1.6,0,0h0l0,0,0,0h0l0,0h.12Z", 1, "cls-51"], ["d", "M316.58,77.29l.48,1.6,0,.07h0l0,0v0h0s0,0,0,.06l-.49-1.61h0v0h0l0,0v0h0l0,0h0Z", 1, "cls-51"], ["points", "318.03 76.53 318.51 78.14 318.39 79.35 317.91 77.74 318.03 76.53", 1, "cls-51"], ["d", "M319.1,65.85,318,76.53l-.12,1.21-.09-.08.12-1.18-.21,0a1.5,1.5,0,0,0-.42.13,1.61,1.61,0,0,0-.49.34,1.86,1.86,0,0,0-.41.65,1.45,1.45,0,0,0-.25-.61,1.37,1.37,0,0,0-.43-.39,1.56,1.56,0,0,0-.74-.17l-.12,1.12-4,.15,1.21-11.85,7,0Z", 1, "cls-52"], ["points", "288.22 38.26 288.69 39.89 288.2 44.94 287.72 43.32 288.22 38.26", 1, "cls-51"], ["points", "287.72 43.32 288.2 44.94 283.57 44.93 283.07 43.32 287.72 43.32", 1, "cls-51"], ["points", "288.22 38.26 287.72 43.32 283.07 43.32 283.59 38.26 288.22 38.26", 1, "cls-52"], ["d", "M26.36,39.6H14.23a1,1,0,0,0-1.05,1v7.11a1,1,0,0,0,1.05,1h1.26v1.89l4.07-1.89h6.8a1,1,0,0,0,1.05-1h0V40.65a1,1,0,0,0-1.05-1Z", 1, "cls-56"], ["id", "_288972760", "data-name", " 288972760"], ["id", "_301280896", "data-name", " 301280896", "d", "M26.36,39.6H14.23a1.05,1.05,0,0,0-.79.36,1,1,0,0,1,.69-.25H26.26a1,1,0,0,1,1,1v7.11a1,1,0,0,1-.25.69,1.05,1.05,0,0,0,.36-.79V40.65a1,1,0,0,0-1-1Z", 1, "cls-57"], ["d", "M25.52,40.65H15.07a.78.78,0,0,0-.79.78v5.44a.78.78,0,0,0,.79.78H25.52a.78.78,0,0,0,.79-.78h0V41.43A.78.78,0,0,0,25.52,40.65Z", 1, "cls-58"], ["id", "_288972472", "data-name", " 288972472"], ["id", "_301283032", "data-name", " 301283032", "d", "M25.52,40.65H15.07a.78.78,0,0,0-.63.31.75.75,0,0,1,.47-.15H25.37a.76.76,0,0,1,.76.78V47a.78.78,0,0,1-.15.47.79.79,0,0,0,.31-.63V41.43A.77.77,0,0,0,25.52,40.65Z", 1, "cls-59"], ["d", "M15.26,43.36v-.24h.56l-.17-.23.3-.06.21.28h.37l0-.06a1.4,1.4,0,0,0,.16-.23l.31.06a1.27,1.27,0,0,1-.11.15l-.06.08h.55v.24h-.94v.16h.83v.22h-.83v.18h1v.22H15.2v-.22h1v-.18h-.81v-.22h.81v-.16Zm0,1.21v-.22h.93v0a.43.43,0,0,0,0-.12h.3v.06a.25.25,0,0,0,0,.08h1v.22h-.93c.12.19.45.29,1,.32l-.09.16a.3.3,0,0,1-.05.1,1.46,1.46,0,0,1-1-.4,1.66,1.66,0,0,1-1.05.44l-.13-.28c.56,0,.87-.15.95-.34Z", 1, "cls-57"], ["d", "M18.25,44.88l.28-.06.21,0-.26-.09.12-.2.35.12.19.07.19-.11.14-.08H18.25v.4Zm0-.6h1.12V44.1H18.25Zm0-.36h1.12v-.17H18.25Zm.76-.38h.42a2.07,2.07,0,0,1-.58-.44,2.67,2.67,0,0,1-.61.44h.5a.39.39,0,0,0,0-.14.51.51,0,0,1,0-.09l.26,0A.9.9,0,0,1,19,43.54Zm.76,1.62-1-.36V45l-.43.08-.15,0h0l-.2.07L17.88,45a.23.23,0,0,0,.1-.19V43.68l-.06,0a.49.49,0,0,0-.17.06,2.72,2.72,0,0,0-.12-.25,2.32,2.32,0,0,0,1.1-.69l.34,0-.06.09a2.24,2.24,0,0,0,1,.54l-.05.13-.06.12-.24-.08v.78l.14.15-.1.05a1.29,1.29,0,0,1-.27.14l.47.16-.13.23Z", 1, "cls-57"], ["d", "M20.41,45.17l-.06-.05L20.13,45a1.07,1.07,0,0,0,.22-.44,2.32,2.32,0,0,0,.06-.62v-.74h.89s0-.12-.08-.22a.24.24,0,0,0,0-.07l.37,0a.2.2,0,0,0,0,.08c0,.12.07.2.08.25h.8v.29H20.72v.46a3.49,3.49,0,0,1-.06.73,1.58,1.58,0,0,1-.25.53Z", 1, "cls-57"], ["d", "M22.66,43.74v-.29h.23v-.6h.28v.6h.22v.29h-.22v.72l.2-.05s0,.07,0,.1a1.05,1.05,0,0,0,.31-.52h-.25v-.27l.86-.49h-.79V43h1.25v.29l-.83.48h1l0,1c0,.28-.11.42-.36.41h-.31l-.06-.26h.26c.13,0,.2-.06.2-.22s0-.2,0-.41,0-.2,0-.25h-.19a1.76,1.76,0,0,1-.65,1.19l-.07-.08L23.58,45a1.38,1.38,0,0,0,.59-1H24a1.58,1.58,0,0,1-.56.88l-.12-.14-.13,0a3.09,3.09,0,0,1-.48.15l-.05-.27.09,0,.18-.06v-.81Z", 1, "cls-57"], ["d", "M60.79,22.74v7.11a1,1,0,0,0,1,1h1.26v1.88l4.07-1.88H74a1,1,0,0,0,1.05-1h0V22.74a1,1,0,0,0-1.05-1H61.83a1,1,0,0,0-1,1Z", 1, "cls-60"], ["id", "_288971800", "data-name", " 288971800"], ["id", "_301282384", "data-name", " 301282384", "d", "M74,21.69H61.83a1.06,1.06,0,0,0-.79.37,1.05,1.05,0,0,1,.69-.26H73.86a1,1,0,0,1,1,1V30a1,1,0,0,1-.26.68,1,1,0,0,0,.36-.79V22.74a1,1,0,0,0-1-1Z", 1, "cls-57"], ["d", "M73.13,22.74H62.67a.79.79,0,0,0-.79.79V29a.79.79,0,0,0,.79.79H73.13a.78.78,0,0,0,.78-.79h0V23.53A.78.78,0,0,0,73.13,22.74Z", 1, "cls-61"], ["id", "_288971728", "data-name", " 288971728"], ["id", "_301282936", "data-name", " 301282936", "d", "M73.13,22.74H62.67a.76.76,0,0,0-.63.32.76.76,0,0,1,.47-.16H73a.77.77,0,0,1,.77.78v5.44a.76.76,0,0,1-.16.47.78.78,0,0,0,.31-.63V23.53a.77.77,0,0,0-.76-.79Z", 1, "cls-59"], ["d", "M62.86,25.45v-.23h.56L63.25,25l.3-.06c.07.09.14.18.21.29h.37l0-.06a1.85,1.85,0,0,0,.16-.24l.31.06a.5.5,0,0,1-.11.16l-.06.08H65v.23h-.94v.16h.83v.23h-.83V26h1v.22H62.8V26h1v-.17H63v-.23h.81v-.16Zm0,1.21v-.22h.93v0a.37.37,0,0,0,0-.12h.3v.06a.25.25,0,0,0,0,.08h1v.22h-.93c.12.19.45.3,1,.32l-.09.17s0,.08,0,.09a1.45,1.45,0,0,1-1-.39,1.73,1.73,0,0,1-1.06.43L62.76,27c.56,0,.87-.14,1-.34Z", 1, "cls-57"], ["d", "M65.85,27l.28-.06.21,0-.26-.1.12-.2.35.12.19.07.2-.11.13-.08H65.85V27Zm0-.6H67V26.2H65.85Zm0-.36H67v-.16H65.85Zm.77-.38H67a2,2,0,0,1-.58-.43,3,3,0,0,1-.61.43h.5a.36.36,0,0,0,0-.13.84.84,0,0,1,0-.1l.26,0a2,2,0,0,1,.09.25Zm.75,1.62c-.31-.13-.64-.25-1-.35v.2a3,3,0,0,0-.43.09l-.15,0h0l-.19.06-.14-.22a.21.21,0,0,0,.1-.18V25.77l-.06,0a.59.59,0,0,0-.17.07,2,2,0,0,0-.12-.26,2.17,2.17,0,0,0,1.1-.69l.34,0,0,.09a2,2,0,0,0,1,.54.53.53,0,0,0-.06.13l-.06.13-.24-.09v.79l.14.14-.1,0a1.44,1.44,0,0,1-.27.15c.16.05.31.11.47.15l-.13.23Z", 1, "cls-57"], ["d", "M68,27.26a.15.15,0,0,0-.06,0l-.22-.17a1,1,0,0,0,.22-.44A2.32,2.32,0,0,0,68,26v-.74h.89s0-.12-.08-.22l0-.07.37,0s0,0,0,.08l.09.25h.79v.3H68.32V26a3.43,3.43,0,0,1-.06.73,1.49,1.49,0,0,1-.25.53Z", 1, "cls-57"], ["d", "M70.26,25.83v-.28h.23v-.61h.28v.61H71v.28h-.22v.73l.2-.06s0,.07,0,.1a1.05,1.05,0,0,0,.31-.52H71v-.27l.86-.49h-.79v-.26h1.25v.29l-.83.48h1l0,1q0,.42-.36.42h-.31c0-.06,0-.14-.06-.27H72c.13,0,.2-.06.2-.22s0-.2,0-.41,0-.2,0-.25H72a1.74,1.74,0,0,1-.65,1.19l-.07-.07a.94.94,0,0,0-.13-.14,1.35,1.35,0,0,0,.59-1h-.21A1.58,1.58,0,0,1,71,27l-.12-.14-.13,0-.47.14-.06-.27.09,0,.18-.06v-.81Z", 1, "cls-57"], ["d", "M100.87,107.2v-5.51a.81.81,0,0,0-.81-.8H90.67a.8.8,0,0,0-.81.8h0v5.51a.81.81,0,0,0,.81.81h1v1.45L94.8,108h5.26A.82.82,0,0,0,100.87,107.2Z", 1, "cls-62"], ["id", "_288971416", "data-name", " 288971416"], ["id", "_301280152", "data-name", " 301280152", "d", "M100.06,100.89H90.67a.82.82,0,0,0-.61.28.78.78,0,0,1,.53-.2H100a.8.8,0,0,1,.79.81v5.5a.78.78,0,0,1-.2.53.82.82,0,0,0,.28-.61v-5.5a.8.8,0,0,0-.79-.81Z", 1, "cls-57"], ["d", "M99.41,101.7H91.32a.6.6,0,0,0-.61.6v4.21a.61.61,0,0,0,.61.61h8.09a.62.62,0,0,0,.61-.61h0V102.3A.61.61,0,0,0,99.41,101.7Z", 1, "cls-63"], ["id", "_288971320", "data-name", " 288971320"], ["id", "_301280632", "data-name", " 301280632", "d", "M99.41,101.7H91.32a.6.6,0,0,0-.49.24.59.59,0,0,1,.37-.12h8.09a.59.59,0,0,1,.59.6v4.21a.56.56,0,0,1-.12.36.58.58,0,0,0,.24-.48V102.3A.59.59,0,0,0,99.41,101.7Z", 1, "cls-59"], ["d", "M94.09,105.2a2.38,2.38,0,0,0-.18-.3l.21,0,.06.09.12.19-.21,0Zm-.49,0-.11-.24a0,0,0,0,1,0,0l.2,0,.11.19,0,.07Zm-.45,0c0-.09-.05-.18-.08-.26l.2,0c0,.08.07.17.1.26l-.22,0Zm-.35-.55H94v.18H92.8Zm1.47.06a1.18,1.18,0,0,1-.68-.47h0v.13q0,.21-.21.21h-.22a1.36,1.36,0,0,0,0-.17h.17c.07,0,.11,0,.1-.09v-.17l.29-.15H92.8v-.15H94V104l-.24.13.11.12.29-.23.14.14-.14.1-.14.1a1.26,1.26,0,0,0,.33.13l-.08.2Zm-1.5.51-.22,0c.06-.12.11-.22.16-.3l.21,0-.15.3Zm-.23-1.5v-.18H93v-.12h.22v.12h.41v-.12h.22v.12h.47v.18h-.47v.09h-.22v-.09h-.41v.09H93v-.09Zm0,1a.86.86,0,0,0-.07-.21,1,1,0,0,0,.44-.24h-.39v-.16h.64v.17a1.34,1.34,0,0,1-.62.44Z", 1, "cls-57"], ["d", "M95.72,105.16a.77.77,0,0,0,0-.19h.21c.08,0,.12,0,.11-.11v-1.45h.21v1.51c0,.16-.07.24-.23.24Zm-.07-1.56h.19v1.15h-.19Zm-.74.31v-.21h.26s0,0,0,0l-.06-.22.21,0s0,.08,0,.15,0,.11,0,.14h.19v.21H95.5a2.56,2.56,0,0,1-.14.65l.23.42-.17.12-.17-.31a1.61,1.61,0,0,1-.31.4l0-.08-.08-.1a1.69,1.69,0,0,0,.33-.44l-.12-.21c-.06-.11-.1-.19-.13-.23l.16-.11.18.31a2.29,2.29,0,0,0,.07-.42Zm-.22-.1-.1-.15-.1-.15.19-.09c.08.11.14.21.2.3Zm0,1.36-.21-.06a4.27,4.27,0,0,0,.13-.54.39.39,0,0,0,0-.13l.14,0,.06,0-.15.66Zm0-.85a3.11,3.11,0,0,0-.2-.3l.18-.09.07.09a1.86,1.86,0,0,1,.14.21Z", 1, "cls-57"], ["d", "M97.4,105.13c-.22,0-.33-.09-.32-.29v-.75h.76v-.4h-.79v-.22h1v.84h-.76v.47c0,.12.05.17.16.16h.26a.16.16,0,0,0,.19-.14s0,0,0-.08a1.62,1.62,0,0,0,0-.18l.24.08a2,2,0,0,1,0,.27s0,0,0,0-.14.22-.35.21Zm-.68-1.26a1.93,1.93,0,0,0-.17-.24l-.08-.1.19-.12s.13.15.24.29c0,0,0,0,0,0Zm-.09,1.29-.14-.18a.21.21,0,0,0,.07-.18v-.58h-.18V104h.4v.76l.18-.15a1.06,1.06,0,0,1,0,.14l0,.09-.12.09-.15.11-.06,0a.17.17,0,0,1-.06.06Z", 1, "cls-57"], ["d", "M128.26,93.48v4.74a.7.7,0,0,0,.7.7h.84v1.25l2.71-1.25h4.54a.69.69,0,0,0,.69-.7h0V93.48a.7.7,0,0,0-.69-.7H129A.7.7,0,0,0,128.26,93.48Z", 1, "cls-64"], ["id", "_288970480", "data-name", " 288970480"], ["id", "_301281736", "data-name", " 301281736", "d", "M137.05,92.78H129a.73.73,0,0,0-.53.24.74.74,0,0,1,.46-.17H137a.69.69,0,0,1,.68.7v4.74a.69.69,0,0,1-.17.46.7.7,0,0,0,.24-.53V93.48a.69.69,0,0,0-.68-.7Z", 1, "cls-57"], ["d", "M137,97.63V94a.52.52,0,0,0-.52-.52h-7A.52.52,0,0,0,129,94h0v3.63a.52.52,0,0,0,.53.52h7A.52.52,0,0,0,137,97.63Z", 1, "cls-65"], ["id", "_288971008", "data-name", " 288971008"], ["id", "_301284616", "data-name", " 301284616", "d", "M136.49,93.48h-7a.51.51,0,0,0-.42.21.48.48,0,0,1,.31-.1h7a.51.51,0,0,1,.51.52v3.62a.51.51,0,0,1-.1.32.53.53,0,0,0,.21-.42V94a.51.51,0,0,0-.51-.52Z", 1, "cls-59"], ["d", "M130.41,96.12h.6V96h-.6Zm0-.21h.6v-.09h-.6Zm-.18.58v-.8h1v.58c0,.14-.07.21-.22.21h-.25a.33.33,0,0,0,0-.1.07.07,0,0,0,0,0h.22c.07,0,.11,0,.1-.07v0h-.6v.26Zm-.06-1.3v-.13h.44V95h.19v.11h.47v.13h-.47v.08h.42v.12h-.42v.09h.5v.12h-1.16v-.12h.47v-.09h-.4v-.12h.4v-.08Zm-.17.13a2.5,2.5,0,0,0-.23-.23l.13-.12.25.21-.15.14Zm-.07,1.16-.18-.06c0-.15.1-.34.16-.57l.12,0,.07,0c0,.09-.07.23-.12.41A1.66,1.66,0,0,1,129.93,96.48Zm0-.75a.45.45,0,0,0-.07-.07l-.16-.14.13-.13.25.21-.15.13Z", 1, "cls-57"], ["d", "M131.83,95.36v-.18h.44V95h.19v.23h.46v.18h-.46v.21h.41v.18h-.37a1.21,1.21,0,0,0,.46.44l-.05.07-.08.1a1.22,1.22,0,0,1-.37-.41v.54h-.19V96a1.59,1.59,0,0,1-.39.44l-.07-.09a.33.33,0,0,1-.06-.08,1.54,1.54,0,0,0,.48-.47h-.35v-.18h.39v-.21Zm-.14,0a3.28,3.28,0,0,0-.26-.22l.13-.14a1.71,1.71,0,0,1,.26.21Zm-.08,1.17-.2-.07q.1-.28.18-.57l.19.06c0,.12-.09.29-.16.54C131.63,96.44,131.62,96.45,131.61,96.49Zm0-.74-.26-.23.13-.14.28.22Z", 1, "cls-57"], ["d", "M134.48,96.42a1.93,1.93,0,0,0-.24-.14l-.2-.12.11-.12.1,0,.35.19-.12.14ZM133.25,96v-.16h.5v-.2h.19v.2h.47V96h-.47v.28c0,.14-.06.21-.2.21h-.22a1.54,1.54,0,0,0-.05-.17h.18c.07,0,.1,0,.1-.09V96Zm.81-.6v-.13h-.46v.13h-.2v-.13h-.33V95.1h.33V95h.2v.15h.46V95h.19v.15h.34v.16h-.34v.13Zm-.9,1-.11-.13a4.81,4.81,0,0,0,.41-.27l.12.13a4.32,4.32,0,0,1-.42.27Zm1.38-.57a1.32,1.32,0,0,1-.7-.37,1.88,1.88,0,0,1-.72.39.41.41,0,0,1,0-.09l0-.09a1.44,1.44,0,0,0,.73-.39l.21,0,0,.05a1.3,1.3,0,0,0,.68.3l-.06.14s0,0,0,0Z", 1, "cls-57"], ["d", "M135.5,95.18V95h.76v.17H136l0,.16h.3v.77h-.16V95.5h-.4v.61h-.15v-.77h.22l0-.16Zm.65,1.31a2.54,2.54,0,0,0-.29-.28.82.82,0,0,1-.33.3l-.11-.14a.9.9,0,0,0,.28-.21.65.65,0,0,0,.08-.32v-.27H136a1.79,1.79,0,0,1,0,.27,1.5,1.5,0,0,1,0,.22l.16.14.2.15Zm-1.06-1.07-.11,0h.16l.06-.12.05-.09H135Zm-.08.78a.15.15,0,0,1,0-.07l0-.08a1.37,1.37,0,0,0,.42-.2l.09.12a1.69,1.69,0,0,1-.44.23Zm0,.3-.07-.16a1.18,1.18,0,0,0,.48-.22l.1.12a2,2,0,0,1-.51.26Zm-.23-1.25v-.16H135l0-.13.18,0s0,.07,0,.12a0,0,0,0,1,0,0h.24v.16h-.22l.15,0,0,.08-.05.09h.15v.15h-.12l.07.12a1.76,1.76,0,0,1-.39.18.41.41,0,0,1,0-.09.09.09,0,0,1,0,0,1.28,1.28,0,0,0,.38-.16h-.4v.23a1.3,1.3,0,0,1-.12.66l-.12-.12a1.28,1.28,0,0,0,.08-.54v-.38h.16a.08.08,0,0,1,0,0,.72.72,0,0,1-.07-.11l.14,0Z", 1, "cls-57"], ["d", "M190.48,49.44V44.7a.69.69,0,0,0-.69-.7H181.7a.7.7,0,0,0-.7.7h0v4.74a.7.7,0,0,0,.7.7h.83v1.25l2.72-1.25h4.54A.7.7,0,0,0,190.48,49.44Z", 1, "cls-66"], ["id", "_288971056", "data-name", " 288971056"], ["id", "_301286320", "data-name", " 301286320", "d", "M189.79,44H181.7a.7.7,0,0,0-.53.24.67.67,0,0,1,.46-.17h8.09a.69.69,0,0,1,.68.7v4.74a.66.66,0,0,1-.17.45.68.68,0,0,0,.24-.52V44.7a.69.69,0,0,0-.68-.7Z", 1, "cls-57"], ["d", "M182.26,49.37h7a.52.52,0,0,0,.52-.53V45.22a.52.52,0,0,0-.52-.52h-7a.52.52,0,0,0-.53.52h0v3.62A.53.53,0,0,0,182.26,49.37Z", 1, "cls-67"], ["id", "_288970192", "data-name", " 288970192"], ["id", "_301280176", "data-name", " 301280176", "d", "M189.23,44.7h-7a.5.5,0,0,0-.42.21.49.49,0,0,1,.31-.11h7a.51.51,0,0,1,.51.52V49a.55.55,0,0,1-.1.31.5.5,0,0,0,.21-.42V45.22a.51.51,0,0,0-.51-.52Z", 1, "cls-59"], ["points", "182.56 46.46 182.56 46.27 183.97 46.27 183.97 46.46 183.45 46.46 183.45 46.84 183.91 46.84 183.91 47.02 183.45 47.02 183.45 47.46 184.02 47.46 184.02 47.63 182.49 47.63 182.49 47.46 182.71 47.46 182.71 46.66 182.92 46.66 182.92 47.46 183.24 47.46 183.24 46.46 182.56 46.46", 1, "cls-57"], ["d", "M184.81,47.49l-.14-.24.14-.06.14.22a1.69,1.69,0,0,0,.06-.51v-.62a5.07,5.07,0,0,0,.6-.06l.06.16-.48.06v.28h.51v.18h-.16v.79h-.18V46.9h-.17v0a1.37,1.37,0,0,1-.17.78.15.15,0,0,1-.08-.05l-.08,0,0-.06a.54.54,0,0,1,.06-.11l-.14.06Zm-.31-.85-.1.06h.18l.13-.23h-.33l.07.1Zm-.33-.17v-.16h.29a.23.23,0,0,0,0-.09.08.08,0,0,1,0,0l.2,0c0,.06,0,.11,0,.15h.26v.16h-.21l.16.06-.11.17H185v.15h-.3V47h.28v.15h-.28v.36a.17.17,0,0,1-.18.19h-.16a.61.61,0,0,0,0-.17h.12c.06,0,.08,0,.08-.07v-.31h-.3V47h.3v-.14h-.34V46.7h.21l-.11-.17.12-.06Zm.08,1.09-.14-.05c0-.1.1-.2.15-.32l.14.06A1.48,1.48,0,0,1,184.25,47.56Z", 1, "cls-57"], ["d", "M186.84,46.73l-.09-.12-.05-.06.12-.07a1.07,1.07,0,0,1,.14.16l-.12.09Zm-.09,1s0-.07,0-.14a0,0,0,0,1,0,0H187c.1,0,.15,0,.16-.13v-.26h-.67v-.82h.22l0-.16.21,0a.16.16,0,0,1,0,.08l0,.06h.35v.38c0,.15-.07.22-.23.22h-.21s0-.1,0-.15H187c.06,0,.1,0,.1-.08a.72.72,0,0,1,0-.13v-.1h-.44V47h.69c0,.17,0,.32,0,.44s-.1.27-.3.27Zm-.88-.06a.56.56,0,0,0-.08-.15l0,0a1.21,1.21,0,0,0,.25-.37,2,2,0,0,0-.12-.2l-.12-.19.14-.09.18.28a1.59,1.59,0,0,0,.07-.38h-.37v-.19h.55v.19a1.88,1.88,0,0,1-.12.57l.2.32v-.14H187v.15h-.6l0,0-.16.09a2.79,2.79,0,0,0-.17-.25,1.63,1.63,0,0,1-.26.36Z", 1, "cls-57"], ["d", "M188.52,47.71V46.17h.18v.26H189v.17h-.28v.21H189V47h-.25v.22H189v.17h-.31v.33ZM188,46.6v-.17h.22v-.26h.19v1.54h-.19v-.33h-.28v-.17h.28V47H188v-.18h.21V46.6Zm-.5,0v-.18h.15v-.29h.18v.29h.11v.18h-.11v.23l.12,0a1,1,0,0,0,0,.18l-.07,0-.06,0v.45a.16.16,0,0,1-.16.18h-.15a1.39,1.39,0,0,0,0-.17h.1s.06,0,.06-.07v-.33l-.15,0,0-.2.17,0v-.28Z", 1, "cls-57"], ["d", "M169,48.21V53a.71.71,0,0,0,.7.7h.84V54.9l2.72-1.25h4.53a.7.7,0,0,0,.69-.7h0V48.21a.69.69,0,0,0-.69-.7h-8.09a.7.7,0,0,0-.7.7Z", 1, "cls-68"], ["id", "_288970312", "data-name", " 288970312"], ["id", "_301284904", "data-name", " 301284904", "d", "M177.83,47.51h-8.09a.7.7,0,0,0-.53.24.76.76,0,0,1,.46-.17h8.09a.69.69,0,0,1,.68.7V53a.66.66,0,0,1-.17.45.66.66,0,0,0,.24-.52V48.21A.69.69,0,0,0,177.83,47.51Z", 1, "cls-57"], ["d", "M170.3,52.88h7a.52.52,0,0,0,.52-.53h0V48.73a.52.52,0,0,0-.52-.52h-7a.52.52,0,0,0-.52.52v3.62A.52.52,0,0,0,170.3,52.88Z", 1, "cls-69"], ["id", "_288969760", "data-name", " 288969760"], ["id", "_301285264", "data-name", " 301285264", "d", "M177.27,48.21h-7a.53.53,0,0,0-.42.21.51.51,0,0,1,.31-.11h7a.52.52,0,0,1,.51.53v3.62a.47.47,0,0,1-.11.31.49.49,0,0,0,.21-.41V48.73a.51.51,0,0,0-.51-.52Z", 1, "cls-59"], ["d", "M172.24,50.54h.16v-.23h-.16Zm.2.31a.64.64,0,0,1,0-.09.2.2,0,0,1,0-.07h-.17v.24c0,.07,0,.1.1.1h.26c.08,0,.12,0,.13-.09a.08.08,0,0,1,0,0s0-.08,0-.11a.26.26,0,0,1-.15.06Zm-.18-.85a1,1,0,0,1-.09.15h.38v.53c.08,0,.11,0,.11-.11s0-.39,0-.57Zm-.51.74h.09v-.17h-.09Zm.09-.48h-.09v.17h.09Zm-.3.48h.09v-.17h-.09Zm0-.31h.09v-.17h-.09Zm.21-.47h-.15l-.09.15h.16Zm-.39,1.22,0-.17h.15l.51,0c0,.06,0,.11,0,.15l-.63.06Zm0-.92,0-.1a.22.22,0,0,0,0-.08,1.78,1.78,0,0,0,.22-.41l.18,0,0,0,0,.07h.25V50l-.08.16H172v0a1.38,1.38,0,0,0,.24-.47l.18,0a.67.67,0,0,1-.06.15h.5c0,.36,0,.62,0,.77s0,.14-.06.17l.13,0h0c0,.08,0,.14,0,.19s-.11.16-.25.15h-.32a.2.2,0,0,1-.23-.22v-.7l0,0-.09-.11v.69h-.57v-.63Z", 1, "cls-57"], ["d", "M173.62,49.92v-.17h.95v.17h-.4v.2h.35v.69c0,.12-.05.18-.16.19h-.14a1.15,1.15,0,0,0,0-.14,0,0,0,0,1,0,0h.09c.05,0,.07,0,.07-.06v-.48h-.18v.93H174v-.93h-.17V51h-.17v-.89H174v-.2Zm-.38,1.31-.08,0-.09-.06a.66.66,0,0,0,.22-.3,1.28,1.28,0,0,0,.06-.45v-.69h.18v.69a1,1,0,0,1-.29.86Zm-.17-1.41h.14v1h-.14Zm0,1v-1", 1, "cls-57"], ["d", "M175.73,50.47H176v-.08h-.23Zm.23-.29h-.23v.09H176Zm-.64.29h.23v-.08h-.23Zm0-.2h.23v-.09h-.23Zm.26.94a.35.35,0,0,1,0-.06.53.53,0,0,0,0-.11h.19c.07,0,.1,0,.1-.09v-.08h-.48l.09.07.09.06-.12.12-.14-.11-.08-.06.07-.08h-.2v-.14h.77v-.08H176v-.07h-.23v.08h-.18v-.08h-.23v.09h-.17v-.63h.4V50h-.45v-.15h.45v-.14h.18v.14h.16l0,0a.16.16,0,0,1,0-.06l.16,0,.06.15h.14V50h-.47v.08h.4v.61H176v.08h.21v.14H176V51q0,.23-.21.21Zm-.76,0v-.8a1.59,1.59,0,0,1-.13.22.67.67,0,0,0,0-.17s0-.07,0-.08a3,3,0,0,0,.27-.72l.18,0A1.83,1.83,0,0,1,175,50v1.18Z", 1, "cls-57"], ["d", "M152.56,47.41v4.74a.69.69,0,0,0,.7.69h.83V54.1l2.72-1.26h4.53a.69.69,0,0,0,.7-.69h0V47.41a.7.7,0,0,0-.7-.7h-8.08A.7.7,0,0,0,152.56,47.41Z", 1, "cls-70"], ["id", "_288969136", "data-name", " 288969136"], ["id", "_301281304", "data-name", " 301281304", "d", "M161.34,46.71h-8.08a.7.7,0,0,0-.53.24.67.67,0,0,1,.46-.17h8.08a.69.69,0,0,1,.69.7v4.74a.71.71,0,0,1-.17.45.68.68,0,0,0,.24-.52V47.41a.69.69,0,0,0-.69-.7Z", 1, "cls-57"], ["d", "M161.31,51.55V47.93a.52.52,0,0,0-.52-.52h-7a.52.52,0,0,0-.52.52h0v3.62a.53.53,0,0,0,.52.53h7A.53.53,0,0,0,161.31,51.55Z", 1, "cls-71"], ["id", "_288969016", "data-name", " 288969016"], ["id", "_301278496", "data-name", " 301278496", "d", "M160.79,47.41h-7a.49.49,0,0,0-.41.21.47.47,0,0,1,.31-.11h7a.51.51,0,0,1,.51.52v3.63a.55.55,0,0,1-.1.31.54.54,0,0,0,.21-.42V47.93a.51.51,0,0,0-.51-.52Z", 1, "cls-59"], ["d", "M155.4,50.05c-.08-.21-.18-.47-.31-.77l.2-.06a1.26,1.26,0,0,0,.09.21c.11.26.18.44.22.55Zm-1,.34a1.17,1.17,0,0,0-.05-.2h.21c.09,0,.13,0,.12-.13V48.89h.22v1.25c0,.17-.08.25-.25.24Zm-.22-.32A.89.89,0,0,0,154,50a5.68,5.68,0,0,0,.28-.78l.21.06C154.43,49.54,154.34,49.81,154.22,50.07Z", 1, "cls-57"], ["d", "M156.84,49.41l-.15-.13L157,49l.16.12C157,49.2,156.94,49.31,156.84,49.41Zm-.74,0-.24-.26-.06-.06L156,49l.11.11.19.2-.15.13Zm-.39.26v-.19h.66v-.6h.21v.6h.64v.19h-.56a1.25,1.25,0,0,0,.59.45l-.05.11a.25.25,0,0,0,0,.08,1.34,1.34,0,0,1-.57-.49v.6h-.21v-.6a1.55,1.55,0,0,1-.58.51l0-.09-.06-.08a1.67,1.67,0,0,0,.6-.49Z", 1, "cls-57"], ["d", "M158,49.69l-.08.14h.55v-.14Zm0,.6-.23-.18.11-.12,0,0a1.45,1.45,0,0,1,.2.15l-.12.12Zm-.63-1.13V49h.6a.45.45,0,0,0,0-.12h.2l0,.12h.67v.16h-.7a.18.18,0,0,1,0,.06s0,0,0,.06h.63v.15h-.67l0,.11h.85v.15h-.25v.14h.25V50h-.25v.21c0,.14-.07.21-.22.21h-.26a.56.56,0,0,1,0-.1.45.45,0,0,1,0-.08h.22c.08,0,.11,0,.11-.09V50h-.66a1.86,1.86,0,0,1-.36.33l-.11-.14h0a1.37,1.37,0,0,0,.44-.47h-.41v-.15h.49a1.17,1.17,0,0,1,.05-.11h-.41v-.15h.45l0-.12Z", 1, "cls-57"], ["d", "M159.35,50h.48v-.23h-.48Zm-.2.26v-.65H160v.56h-.68v.09Zm.8.17c0-.06,0-.12,0-.18h.25c.09,0,.14,0,.13-.12v-1h-1.19V49h1.39v1.22c0,.15-.07.23-.23.23ZM159,49.27h1.15v.17H159Zm0,.17v-.17", 1, "cls-57"], ["d", "M131.7,41.41v4.74a.69.69,0,0,0,.7.69h4.53l2.72,1.26V46.84h.84a.69.69,0,0,0,.69-.69h0V41.41a.69.69,0,0,0-.69-.7H132.4A.7.7,0,0,0,131.7,41.41Z", 1, "cls-72"], ["id", "_288969208", "data-name", " 288969208"], ["id", "_301280320", "data-name", " 301280320", "d", "M132.4,40.71h8.09A.66.66,0,0,1,141,41a.66.66,0,0,0-.45-.17h-8.09a.69.69,0,0,0-.69.69v4.75a.71.71,0,0,0,.17.45.71.71,0,0,1-.24-.52V41.41A.69.69,0,0,1,132.4,40.71Z", 1, "cls-57"], ["d", "M133,46.08h7a.52.52,0,0,0,.52-.53V41.93a.52.52,0,0,0-.52-.52h-7a.52.52,0,0,0-.53.52h0v3.62A.53.53,0,0,0,133,46.08Z", 1, "cls-73"], ["id", "_288969112", "data-name", " 288969112"], ["id", "_301283176", "data-name", " 301283176", "d", "M133,41.41h7a.55.55,0,0,1,.42.2.58.58,0,0,0-.32-.1h-7a.51.51,0,0,0-.51.52v3.63a.49.49,0,0,0,.11.31.51.51,0,0,1-.21-.42V41.93a.51.51,0,0,1,.51-.52Z", 1, "cls-59"], ["d", "M136.07,42.45h-.33v.28h.32Zm.34,0-.06,0-.06,0,0,.41h.23c0,.08,0,.19,0,.34a.18.18,0,0,0,0,.06c0,.16-.08.24-.25.24H136s0-.06,0-.12,0,0,0-.06h.22q.15,0,.15-.12v-.18h-.54v.62h-.21v-.62H135v-.18h.54v-.28h-.43v-.18h.43V42h.21v.28h.48l-.17-.13.13-.13.35.25-.12.15Z", 1, "cls-57"], ["d", "M138.05,43.13s0-.08-.07-.14-.13-.25-.18-.33l.16-.08c.09.15.18.3.26.45Zm-1.37-.71v-.18h.68l-.08-.23.22,0a.46.46,0,0,1,0,.09c0,.07,0,.12.05.17h.61v.18h-.43v.84q0,.24-.21.24h-.25a.86.86,0,0,0,0-.18h.2c.08,0,.11,0,.11-.11v-.79h-.25v.26a.91.91,0,0,1-.46.87l-.15-.15a.94.94,0,0,0,.32-.3,1.07,1.07,0,0,0,.09-.43v-.12a.72.72,0,0,0,0-.13Zm.11.69-.07,0s0,0-.1-.06a3.11,3.11,0,0,0,.22-.45l.17.07A4.12,4.12,0,0,1,136.79,43.11Z", 1, "cls-57"], ["d", "M134.77,44.36l0-.16.19,0c0-.06,0-.12,0-.19h.18a.07.07,0,0,1,0,.05.68.68,0,0,0,0,.12l.52-.07,0,.16-.5.07a.67.67,0,0,1,0,.07l0,.07a2,2,0,0,0,.3-.18l.1.11a1.62,1.62,0,0,1-.31.19.35.35,0,0,0,.12.07.09.09,0,0,0,.1,0l.07-.12.12.11-.06.11,0,0a.21.21,0,0,1-.19.09.35.35,0,0,1-.3-.16,2.8,2.8,0,0,1-.38.13l0-.05-.05-.1a2.57,2.57,0,0,0,.36-.11l-.09-.19-.2,0Zm-.05.66v-.16h1V45h-.28v.25s0,.06.06.06h0s.06,0,.07-.07v-.15l.15.06a1.11,1.11,0,0,1,0,.17.17.17,0,0,1-.2.14h-.1c-.12,0-.18,0-.18-.17V45h-.15a.52.52,0,0,1-.35.51l-.13-.14c.21-.08.32-.2.3-.37Zm-.07.26a1.36,1.36,0,0,1-.1-.14l-.05-.07a1.85,1.85,0,0,1-.22.45l-.08-.11,0,0a1.14,1.14,0,0,0,.23-.77V44h.18c0,.18,0,.32,0,.42a1.2,1.2,0,0,0,.11-.17l.1.14-.07.09-.15.17a1.4,1.4,0,0,1,0,.23l.24.27-.12.14Zm-.42-.55c0-.16,0-.31-.08-.42l.13,0c0,.11,0,.25.08.43l-.13,0Z", 1, "cls-57"], ["d", "M136.34,45.41V44.32h.18v.91h.21V44h.19v1.24h.2v-.91h.19v1.19h-.19v-.1Zm-.5-.47s0-.1,0-.18a.64.64,0,0,0,0-.09,2.58,2.58,0,0,0,.3-.69l.19.05a2.37,2.37,0,0,1-.13.34v1.15H136v-.79l-.07.1Z", 1, "cls-57"], ["d", "M137.83,44.9h.84v-.12h-.84Zm0-.25h.84v-.11h-.84Zm-.35-.39V44.1h.41V44h.19v.12h.35V44h.18v.12H139v.16h-.42v.09h-.18v-.09h-.35v.09h-.19v-.09Zm.16.79v-.66h1.22v.66h-.51v.11H139v.16h-.68v.2h-.2v-.2h-.68v-.16h.68v-.11Z", 1, "cls-57"], ["d", "M110.89,21.7v4.74a.69.69,0,0,0,.7.69h.84v1.26l2.71-1.26h4.54a.69.69,0,0,0,.69-.69h0V21.7a.69.69,0,0,0-.69-.7h-8.09A.7.7,0,0,0,110.89,21.7Z", 1, "cls-74"], ["id", "_288968872", "data-name", " 288968872"], ["id", "_301283440", "data-name", " 301283440", "d", "M119.68,21h-8.09a.7.7,0,0,0-.53.24.69.69,0,0,1,.46-.17h8.09a.69.69,0,0,1,.68.7v4.74a.66.66,0,0,1-.17.45.66.66,0,0,0,.24-.52V21.7a.69.69,0,0,0-.68-.7Z", 1, "cls-57"], ["d", "M119.12,21.7h-7a.52.52,0,0,0-.53.52v3.62a.53.53,0,0,0,.53.53h7a.52.52,0,0,0,.52-.53h0V22.22A.52.52,0,0,0,119.12,21.7Z", 1, "cls-75"], ["id", "_288968824", "data-name", " 288968824"], ["id", "_301284016", "data-name", " 301284016", "d", "M119.12,21.7h-7a.51.51,0,0,0-.42.21.49.49,0,0,1,.31-.11h7a.52.52,0,0,1,.52.52V26a.49.49,0,0,1-.11.31.5.5,0,0,0,.21-.42V22.22a.51.51,0,0,0-.51-.52Z", 1, "cls-59"], ["d", "M115.43,23a3,3,0,0,0-.18-.25l.14-.08.09.11.11.12-.16.1Zm-.16.6,0,0,.1-.06h-.43v.11Zm0-.33h-.33v.12h.33Zm-.84.12h.33V23.3h-.33Zm.37-.69a1.55,1.55,0,0,0-.13-.17h-.37v.1h0l.13.09a1.83,1.83,0,0,1-.17.2l0,0-.1-.09,0,0,.16-.17h-.16V22.4h.64l0-.06a.17.17,0,0,1,0-.05l.22,0s0,0,0,.07,0,.05,0,.06h.61v.28h-.19v-.13h-.54l.09.1Zm-.67.43A1.17,1.17,0,0,0,114,23l.12,0,.31-.08v-.27h.18v.21a2.86,2.86,0,0,0,.55-.28l.11.11a4,4,0,0,1-.59.29H115c.07,0,.1,0,.11-.07s0,0,0-.05v0h0l.13,0a.27.27,0,0,1,0,.12.18.18,0,0,1-.21.12h-.13v.1h.51v.34h0l.2.2-.14.1-.06-.08-1.32,0,0-.15h.67v-.11h-.33v.06h-.18v-.4h.51v-.1h0c-.08,0-.14,0-.17-.05l-.11,0-.3.08Z", 1, "cls-57"], ["d", "M116.4,23h.53v-.18h-.53Zm-.19-.33h.9v.48h-.9Zm-.07-.28h1v.16h-1Zm0,1.16v-.17h.28a1.36,1.36,0,0,0-.12-.17l.18-.06.14.22h.12a1.58,1.58,0,0,0,.14-.23l.19.06-.12.17h.28v.17Zm-.18-.81a2.53,2.53,0,0,0-.2-.3l.16-.1a1.74,1.74,0,0,0,.11.15l.1.15Zm-.19,1.11-.08-.2a1.92,1.92,0,0,1,.19-.17V23h-.18v-.18h.37v.62a.37.37,0,0,0,.37.17c.24,0,.52,0,.83,0,0,.07,0,.13-.06.18l-.81,0a.57.57,0,0,1-.43-.16,1.1,1.1,0,0,0-.19.19Z", 1, "cls-57"], ["d", "M114.27,25.31h.24v-.09h-.24Zm.24-.25h-.24v.07h.24Zm-.64.25h.23v-.09h-.23Zm0-.18h.23v-.07h-.23Zm-.24-.64v-.12h.26v-.1h.18v.1h.24v-.1h.16v.1h.28v.12h-.28v.06h-.16v-.06h-.24v.08h-.18v-.08Zm.09.22,0-.11,1,0v.11h-.4v.07h.48v.12h-.48V25h.4v.46h-.4v.07h.44v.1h-.44v.06h.48v.13h-1.14v-.13h.49v-.06h-.43v-.1h.43v-.07h-.41V25h.41v-.06h-.47v-.12h.47V24.7Zm-.35,1.1V24.27h.17v.28l.14.09-.07.16-.07-.06v1.07Zm-.09-.75-.11,0c0-.17.06-.32.07-.44h.11C113.33,24.77,113.31,24.92,113.28,25.06Z", 1, "cls-57"], ["d", "M116.23,25.57s0-.06,0-.11L116,25l.18-.05.21.55Zm-.68.22s0,0,0-.08a.84.84,0,0,1,0-.1h.17a.08.08,0,0,0,.09-.09v-.76H116v.8c0,.14-.06.21-.2.22Zm-.08-.22h0l-.13-.06a5,5,0,0,0,.22-.54l.17.06C115.63,25.2,115.55,25.39,115.47,25.57Zm.82-.64-.15,0h0l.09-.22h-.57a3.21,3.21,0,0,1-.19.31.86.86,0,0,0-.14-.13,1.87,1.87,0,0,0,.27-.57l.21,0a.56.56,0,0,0,0,.08.46.46,0,0,1,0,.09h.68v.17Zm-1.39.31a1.23,1.23,0,0,1,0-.16.51.51,0,0,1,0-.09,2.23,2.23,0,0,0,.33-.73l.2,0a.11.11,0,0,1,0,.05c-.06.14-.1.25-.14.32v1.13H115V25l-.14.2Z", 1, "cls-57"], ["d", "M116.74,25.36h.14v-.79h-.14Zm.34.33-.12-.15h-.22v.11h-.17V24.39H117v1.09a1.18,1.18,0,0,0,.35-.42h-.31v-.18h.38v-.2h-.33v-.17h.33v-.24h.18v.24H118v.17h-.34v.2H118v.18h-.33a1.09,1.09,0,0,0,.39.44l-.06.09a.28.28,0,0,0,0,.08,1.19,1.19,0,0,1-.34-.42v.56h-.18v-.56a1.25,1.25,0,0,1-.38.44Z", 1, "cls-57"], ["d", "M111.72,36.7V32a.7.7,0,0,0-.7-.7h-8.08a.7.7,0,0,0-.7.7h0V36.7a.7.7,0,0,0,.7.7h.83v1.25l2.72-1.25H111A.7.7,0,0,0,111.72,36.7Z", 1, "cls-76"], ["id", "_288967624", "data-name", " 288967624"], ["id", "_301285648", "data-name", " 301285648", "d", "M111,31.27h-8.08a.7.7,0,0,0-.53.24.68.68,0,0,1,.46-.18H111a.69.69,0,0,1,.69.7v4.74a.72.72,0,0,1-.17.46.7.7,0,0,0,.24-.53V32a.69.69,0,0,0-.69-.69Z", 1, "cls-57"], ["d", "M110.47,32h-7a.53.53,0,0,0-.52.52v3.63a.52.52,0,0,0,.52.52h7a.52.52,0,0,0,.52-.52h0V32.48A.53.53,0,0,0,110.47,32Z", 3, "click", "touchstart"], ["id", "_288967480", "data-name", " 288967480"], ["id", "_301280584", "data-name", " 301280584", "d", "M110.47,32h-7a.49.49,0,0,0-.41.21.52.52,0,0,1,.31-.1h7a.51.51,0,0,1,.51.52v3.62a.58.58,0,0,1-.1.32.56.56,0,0,0,.21-.42V32.48a.52.52,0,0,0-.51-.52Z", 1, "cls-59"], ["d", "M104.3,34.28h.43v-.41h-.43Zm-.5-.41v-.18h1.41v.18h-.27v.41h.34v.18h-.34v.67h-.21v-.67h-.44a.73.73,0,0,1-.39.69l-.07-.07-.08-.08a.57.57,0,0,0,.34-.54h-.37v-.18h.37v-.41Z", 1, "cls-57"], ["d", "M106.75,34.67a4.81,4.81,0,0,0-.28-.53l.19-.09s0,0,0,0c.13.23.22.39.26.48Zm-.46-.58c-.15-.15-.28-.26-.38-.35l.13-.15.4.34-.15.16Zm-.24,1c-.19,0-.28-.08-.27-.26V34h.2v.83c0,.09,0,.14.13.13h.18q.12,0,.15-.12a1.36,1.36,0,0,0,0-.21l.21.07a1.5,1.5,0,0,1,0,.26c0,.12-.13.18-.29.18Zm-.51-.32-.19-.07c.05-.15.11-.36.18-.62l.19.06a1,1,0,0,0,0,.12q-.09.35-.15.51Z", 1, "cls-57"], ["d", "M107.6,34.84l-.1-.18a1.92,1.92,0,0,0,.32-.14V34.1h.2v.32a4.07,4.07,0,0,0,.38-.28l.14.13a5.08,5.08,0,0,1-.52.37v.2c0,.07,0,.1.1.1h.13c.08,0,.12,0,.13-.08l0-.26a.7.7,0,0,0,.19.06,1.79,1.79,0,0,1,0,.29c0,.1-.11.15-.26.15h-.24c-.16,0-.23-.07-.23-.23v-.14l-.14.07-.08,0Zm-.56-.91v-.17h.37v-.17h.2v.17h.4v-.17h.2v.17h.37v.17h-.37v.12H108v-.12h-.4V34h-.2v-.11Zm.06.83-.09-.2a1.84,1.84,0,0,0,.42-.49l.19.07-.15.22v.79h-.19v-.56Z", 1, "cls-57"], ["d", "M109.56,34.5h.38v-.24h-.38Zm.38-.64h-.38v.23h.38Zm-1,.64h.38v-.24H109Zm0-.41h.38v-.23H109Zm.38,1.06v-.47H109v.09h-.19V33.68h1.35v1.09h-.2v-.09h-.38v.47Z", 1, "cls-57"], ["d", "M171.23,44.93V40.19a.7.7,0,0,0-.7-.7h-8.09a.7.7,0,0,0-.7.7h0v4.74a.71.71,0,0,0,.7.7h.84v1.25L166,45.63h4.53A.71.71,0,0,0,171.23,44.93Z", 1, "cls-78"], ["id", "_288967888", "data-name", " 288967888"], ["id", "_301281328", "data-name", " 301281328", "d", "M170.53,39.49h-8.09a.69.69,0,0,0-.52.24.71.71,0,0,1,.45-.17h8.09a.69.69,0,0,1,.69.7V45a.72.72,0,0,1-.18.46.7.7,0,0,0,.24-.53V40.19a.69.69,0,0,0-.68-.7Z", 1, "cls-57"], ["d", "M170,40.19h-7a.52.52,0,0,0-.52.52v3.63a.52.52,0,0,0,.52.52h7a.52.52,0,0,0,.52-.52h0V40.71A.52.52,0,0,0,170,40.19Z", 1, "cls-79"], ["id", "_288967696", "data-name", " 288967696"], ["id", "_301281544", "data-name", " 301281544", "d", "M170,40.19h-7a.53.53,0,0,0-.42.21.52.52,0,0,1,.32-.11h7a.52.52,0,0,1,.51.53v3.62a.52.52,0,0,1-.11.32.53.53,0,0,0,.21-.42V40.71a.51.51,0,0,0-.51-.52Z", 1, "cls-59"], ["d", "M164.16,41.15V41h1.34v.19h-.57v.15c0,.08,0,.13,0,.16h.67v.19h-.65a.8.8,0,0,0,.67.55l-.1.18v0a1,1,0,0,1-.68-.56,1,1,0,0,1-.65.58s0,0,0,0-.08-.12-.1-.15c.38-.14.6-.33.64-.58h-.63v-.19h.65v-.15a1.1,1.1,0,0,0,0-.16Z", 1, "cls-57"], ["d", "M165.76,41.21v-.16h.38L166,40.9l.2,0a1.56,1.56,0,0,1,.14.19h.25l0,0,.11-.15.21,0-.08.1,0,0h.37v.16h-.62v.11h.55v.15h-.55v.11h.66v.15h-1.52v-.15h.66v-.11h-.54v-.15h.54v-.11Zm0,.81v-.15h.62v0a.15.15,0,0,0,0-.07h.2v.09h.64V42h-.62q.12.18.66.21l-.06.11a.16.16,0,0,1,0,.06,1,1,0,0,1-.68-.26,1.12,1.12,0,0,1-.71.29c0-.06-.05-.12-.08-.19.37,0,.58-.1.63-.22Z", 1, "cls-57"], ["d", "M167.87,42.33V41h1v.19h-.82v1h.84v.17Zm-.19-1.07-.25-.22,0,0,.13-.13.07,0a2.16,2.16,0,0,1,.22.16l-.14.16Zm-.08,1.15-.2-.07c0-.14.11-.33.17-.57l.19.06c0,.06,0,.15-.08.29S167.62,42.34,167.6,42.41Zm0-.74-.18-.15-.09-.08.13-.14.09.06.19.16-.14.15Z", 1, "cls-57"], ["d", "M164.27,43.42l-.09-.12,0,0,.11-.08a1.15,1.15,0,0,1,.14.17l-.12.08Zm-.09,1a.58.58,0,0,0,0-.14v0h.26a.14.14,0,0,0,.16-.14v-.26h-.67V43h.22l0-.16.21,0a.16.16,0,0,1,0,.08l0,.06h.36c0,.19,0,.32,0,.38s-.07.23-.23.22h-.21c0-.05,0-.1,0-.15h.22c.06,0,.09,0,.09-.08a.57.57,0,0,1,0-.12v-.11h-.44v.53h.69c0,.17,0,.32,0,.44s-.1.27-.3.27Zm-.88-.06a1.2,1.2,0,0,0-.08-.15l0,0a1.25,1.25,0,0,0,.26-.37l-.13-.19-.12-.2.14-.09.18.28a2.12,2.12,0,0,0,.08-.38h-.38V43h.56v.18a2,2,0,0,1-.13.57l.2.32V44h.61v.14h-.6a.05.05,0,0,1,0,0l-.16.09-.16-.26a2.11,2.11,0,0,1-.27.36Z", 1, "cls-57"], ["d", "M166.06,43.49a.13.13,0,0,0,0-.07,1.78,1.78,0,0,0-.08-.18l.13-.06.08.16,0,.07Zm0,.62a1.15,1.15,0,0,0,0-.14v0h.14c.06,0,.08,0,.08-.09v-.18l-.05,0-.15.11-.07-.17.18-.1.09,0v-.4H166v-.16h.4v1a.16.16,0,0,1-.17.2H166Zm-.41-.62c0-.08-.07-.16-.11-.23l.13-.06a.64.64,0,0,0,.06.11l.05.12Zm-.07.35-.07-.15.29-.17V43.1h-.23v-.16h.39v1c0,.13-.06.19-.18.19h-.18l0-.11a.43.43,0,0,0,0,0h.14c.07,0,.1,0,.09-.08V43.7l-.22.14Zm-.68-.61v-.16h.24v-.21h.17v.21h.22v.16h-.22v.22h.22v.06a1.37,1.37,0,0,1-.18.56.52.52,0,0,0,.36.12h.77l0,.07a1,1,0,0,1,0,.12h-.73a.71.71,0,0,1-.46-.15l-.27.21-.08-.17a1,1,0,0,0,.24-.17,1.49,1.49,0,0,1-.19-.38l.15-.06a1.5,1.5,0,0,0,.15.31,1.2,1.2,0,0,0,.13-.33h-.44v-.16h.22v-.22Z", 1, "cls-57"], ["d", "M166.91,43.72h.39v-.21h-.39Zm0-.53-.12.15h.67v.49a.11.11,0,0,0,.08,0h0c.08,0,.12,0,.12-.11s0-.28,0-.53Zm.06,1.17c-.2,0-.29-.09-.28-.27v-.63l-.13.12a1.18,1.18,0,0,0-.07-.2,1.52,1.52,0,0,0,.38-.53l.22,0-.07.14h.88c0,.26,0,.5,0,.73s-.09.28-.26.28h-.23s0-.09,0-.14h-.48v.17c0,.1,0,.15.14.14h.67c.09,0,.14,0,.16-.11a.92.92,0,0,0,0-.19l.2.06a1.85,1.85,0,0,1,0,.23c0,.12-.12.17-.29.17Z", 1, "cls-57"], ["d", "M169.49,43.51h-.29a1,1,0,0,0,.15.38,1.21,1.21,0,0,0,.14-.38Zm-.51.89s0,0,0-.06l-.07-.1a1.3,1.3,0,0,0,.35-.21,1.17,1.17,0,0,1-.18-.45l.12-.07H169v.07a1.12,1.12,0,0,1-.25.82l-.15-.14a.85.85,0,0,0,.22-.68V43c.32,0,.61,0,.86-.07l0,.18h-.11l-.62,0v.2h.68v.16a1.49,1.49,0,0,1-.22.54,1.09,1.09,0,0,0,.3.18l-.09.14,0,0a1.66,1.66,0,0,1-.31-.21,2,2,0,0,1-.36.23Zm-.73-.82-.08-.2a2,2,0,0,0,.19-.52l.18,0s0,0,0,0a1.55,1.55,0,0,1,0,.15h.27v.15l-.08.27-.15,0V44l.16-.11a.82.82,0,0,0,0,.14.11.11,0,0,1,0,0l-.09.06-.14.08-.08.07-.09-.13a.2.2,0,0,0,.06-.15v-.64h.16v0l.08-.21h-.18a2.9,2.9,0,0,1-.17.35Z", 1, "cls-57"], ["d", "M110.69,108.5h-9.43a.82.82,0,0,0-.81.82v5.53a.81.81,0,0,0,.81.81h1v1.46l3.17-1.46h5.28a.81.81,0,0,0,.81-.81h0v-5.53a.82.82,0,0,0-.81-.82Z", 1, "cls-80"], ["id", "_288967024", "data-name", " 288967024"], ["id", "_301284136", "data-name", " 301284136", "d", "M110.69,108.5h-9.43a.79.79,0,0,0-.61.28.8.8,0,0,1,.53-.19h9.43a.8.8,0,0,1,.8.81v5.53a.83.83,0,0,1-.2.53.82.82,0,0,0,.28-.61v-5.53A.81.81,0,0,0,110.69,108.5Z", 1, "cls-57"], ["d", "M101.3,109.93v4.22a.61.61,0,0,0,.61.61H110a.61.61,0,0,0,.61-.61h0v-4.22a.61.61,0,0,0-.61-.61h-8.13a.61.61,0,0,0-.61.61Z", 1, "cls-81"], ["id", "_288967336", "data-name", " 288967336"], ["id", "_301281592", "data-name", " 301281592", "d", "M110,109.32h-8.13a.6.6,0,0,0-.49.24.65.65,0,0,1,.37-.12h8.13a.6.6,0,0,1,.59.61v4.23a.58.58,0,0,1-.12.36.61.61,0,0,0,.25-.49v-4.22a.6.6,0,0,0-.6-.61Z", 1, "cls-59"], ["d", "M372.76,138v-7.12a1,1,0,0,0-1-1H359.59a1,1,0,0,0-1,1h0V138a1,1,0,0,0,1,1h1.25v1.88l4.08-1.88h6.8A1,1,0,0,0,372.76,138Z", 1, "cls-82"], ["id", "_288967216", "data-name", " 288967216"], ["id", "_301282864", "data-name", " 301282864", "d", "M371.72,129.84H359.59a1,1,0,0,0-.79.36,1,1,0,0,1,.68-.26h12.13a1,1,0,0,1,1,1v7.11a1,1,0,0,1-.25.68,1,1,0,0,0,.36-.78v-7.12A1,1,0,0,0,371.72,129.84Z", 1, "cls-57"], ["d", "M360.42,137.85h10.46a.78.78,0,0,0,.78-.78v-5.44a.79.79,0,0,0-.78-.79H360.42a.79.79,0,0,0-.78.79h0v5.44A.78.78,0,0,0,360.42,137.85Z", 1, "cls-83"], ["id", "_288966544", "data-name", " 288966544"], ["id", "_301283080", "data-name", " 301283080", "d", "M370.88,130.88H360.42a.78.78,0,0,0-.62.32.76.76,0,0,1,.47-.16h10.45a.74.74,0,0,1,.77.75v5.43a.76.76,0,0,1-.16.47.78.78,0,0,0,.32-.62v-5.44A.75.75,0,0,0,370.88,130.88Z", 1, "cls-59"], ["d", "M363.7,134.59h-.81a1.5,1.5,0,0,0,.4.25,2.15,2.15,0,0,0,.41-.25Zm-1.54-1.26c0-.07,0-.15-.05-.23q.88,0,2.07-.06l0,.24h-.37l-1.69,0Zm-.07.6v-.34h.36l-.12-.2.28,0a.28.28,0,0,1,.05.08,1.14,1.14,0,0,1,.08.16h.36s0-.08-.07-.14l0-.08.28,0,.12.26h.24l.15-.27.28.05-.14.22h.33v.34H364v-.13h-1.62v.13Zm-.07.3V134h.67l.06-.18.3,0L363,134h1.33v.22H362.9a.78.78,0,0,1,0,.07.24.24,0,0,1,0,.07h1.24v.25a3.72,3.72,0,0,1-.45.33,4.37,4.37,0,0,0,.71.08l-.12.25a3.82,3.82,0,0,1-.92-.21,4.35,4.35,0,0,1-.9.25.9.9,0,0,0-.07-.14,1.17,1.17,0,0,0-.05-.11A5,5,0,0,0,363,135a3,3,0,0,1-.35-.27,2.63,2.63,0,0,1-.54.49A.85.85,0,0,1,362,135l-.06-.11a1.86,1.86,0,0,0,.62-.7Z", 1, "cls-57"], ["d", "M366.57,135.17l-.16-.31a.66.66,0,0,1-.06-.12l.25-.09.12.22a1.46,1.46,0,0,0,.11.2l-.26.1Zm-.79-.82h.5v-.16h-.5Zm.5-.52h-.5V134h.5Zm-.94,1.42c-.21,0-.31-.1-.31-.3v-.29h.28v.22c0,.1.05.15.18.14h.33c.11,0,.18,0,.19-.11a.86.86,0,0,0,0-.13s0-.06,0-.08l.27.11,0,.07a.64.64,0,0,1-.06.16c0,.15-.15.21-.35.21Zm-.33-.9h.51v-.16H365Zm0-.36h.51v-.16H365Zm-.27.57v-.93h1.82v.93h-.9l.17.2.06.06-.21.15c-.06-.1-.14-.19-.22-.3l.17-.11Zm-.08-1.07v-.42H365v.21h.56V133h.29v.29h.55v-.21h.29v.42Zm0,1.72a1.27,1.27,0,0,0-.23-.12,1.92,1.92,0,0,0,.21-.44l.24.08a3.41,3.41,0,0,1-.22.48Z", 1, "cls-57"], ["d", "M369.05,135.17a2.73,2.73,0,0,0-.15-.31l-.06-.12.25-.09s.06.12.12.22a1.78,1.78,0,0,0,.1.2l-.26.1Zm-.79-.82h.51v-.16h-.51Zm.51-.52h-.51V134h.51Zm-.94,1.42c-.21,0-.31-.1-.31-.3v-.29h.28v.22c0,.1.05.15.17.14h.33c.12,0,.18,0,.2-.11a.45.45,0,0,1,0-.13.19.19,0,0,1,0-.08l.27.11a.12.12,0,0,0,0,.07.64.64,0,0,1-.06.16c0,.15-.15.21-.36.21Zm-.33-.9h.5v-.16h-.5Zm0-.36h.5v-.16h-.5Zm-.27.57v-.93H369v.93h-.89l.16.2.06.06-.2.15-.23-.3.18-.11Zm-.08-1.07v-.42h.29v.21H368V133h.29v.29h.56v-.21h.29v.42Zm0,1.72a1.34,1.34,0,0,0-.24-.12,2.57,2.57,0,0,0,.22-.44l.24.08a5.11,5.11,0,0,1-.22.48Z", 1, "cls-57"], ["d", "M248.08,51V43.9a1,1,0,0,0-1.05-1H234.9a1,1,0,0,0-1,1h0V51a1,1,0,0,0,1,1h1.26v1.88l4.08-1.88H247A1,1,0,0,0,248.08,51Z", 1, "cls-84"], ["id", "_288966424", "data-name", " 288966424"], ["id", "_301283872", "data-name", " 301283872", "d", "M247,42.89H234.9a1.07,1.07,0,0,0-.79.36,1.07,1.07,0,0,1,.69-.26h12.13a1,1,0,0,1,1,1v7.11a1,1,0,0,1-.26.68,1,1,0,0,0,.36-.78V43.89a1,1,0,0,0-1-1Z", 1, "cls-57"], ["d", "M246.2,43.89H235.74a.78.78,0,0,0-.78.79v5.44a.78.78,0,0,0,.78.78H246.2a.78.78,0,0,0,.78-.78h0V44.68A.78.78,0,0,0,246.2,43.89Z", 3, "click", "touchstart"], ["id", "_288966592", "data-name", " 288966592"], ["id", "_301286800", "data-name", " 301286800", "d", "M246.2,43.93H235.74a.8.8,0,0,0-.63.32.78.78,0,0,1,.47-.16H246a.74.74,0,0,1,.77.75v5.43a.76.76,0,0,1-.16.47.77.77,0,0,0,.31-.62V44.68A.74.74,0,0,0,246.2,43.93Z", 1, "cls-59"], ["d", "M239,47.64h-.81a1.5,1.5,0,0,0,.4.25A2.15,2.15,0,0,0,239,47.64Zm-1.55-1.26c0-.07,0-.15,0-.23.58,0,1.27,0,2.06,0l0,.23h-.37l-1.7,0Zm-.06.6v-.34h.36l-.12-.2.28,0,0,.08c0,.07.06.13.08.16h.36l-.07-.14,0-.08.28,0,.12.26H239l.15-.27.28.05-.14.22h.33V47h-.27v-.13h-1.62V47Zm-.07.3v-.22H238l.06-.18.3,0-.06.16h1.33v.22h-1.42l0,.07s0,.06,0,.07h1.25v.25a3.72,3.72,0,0,1-.45.33,4.24,4.24,0,0,0,.71.08l-.12.25a3.82,3.82,0,0,1-.92-.21,4.35,4.35,0,0,1-.9.25l-.07-.14,0-.11a5.2,5.2,0,0,0,.71-.12,3,3,0,0,1-.35-.27,2.63,2.63,0,0,1-.54.49.53.53,0,0,1-.06-.13l-.06-.11a2,2,0,0,0,.62-.7Z", 1, "cls-57"], ["d", "M241.49,48.28c-.27,0-.4-.12-.39-.4V46.07h.31v1.77c0,.11,0,.16.13.16h.1c.1,0,.16,0,.17-.18s0-.07,0-.13,0-.21,0-.28l.19,0,.1,0a3.4,3.4,0,0,1-.06.52c0,.2-.17.3-.43.29Zm-1.46.06-.16-.16-.08-.08a1.36,1.36,0,0,0,.44-.52,2,2,0,0,0,.11-.76v-.74h.31v.81a1.55,1.55,0,0,1-.62,1.45Z", 1, "cls-57"], ["d", "M244.37,48.23l-.53-.66.23-.15c.14.15.33.37.56.65l-.26.16Zm-2-.91.13-1.12c.56,0,1.15,0,1.79-.09l.08.28c-.47,0-1,.07-1.6.08l-.07.58h.59v-.46h.31v.46h.86v.27h-.86V48c0,.25-.1.36-.34.36l-.36,0s0-.11,0-.22a.64.64,0,0,0,0-.07h.3c.11,0,.15-.05.15-.17v-.57Zm.08.92a.79.79,0,0,0-.23-.17,5.63,5.63,0,0,0,.53-.66l.26.14a6.16,6.16,0,0,1-.56.69Z", 1, "cls-57"], ["d", "M319.38,135.4v-6a.88.88,0,0,0-.88-.88H308.3a.88.88,0,0,0-.88.88h0v6a.88.88,0,0,0,.88.88h1.05v1.58l3.43-1.58h5.72A.88.88,0,0,0,319.38,135.4Z", 1, "cls-86"], ["id", "_288966304", "data-name", " 288966304"], ["id", "_301279312", "data-name", " 301279312", "d", "M318.5,128.57H308.3a.9.9,0,0,0-.67.3.92.92,0,0,1,.58-.21h10.2a.84.84,0,0,1,.87.84v6a.85.85,0,0,1-.22.58.87.87,0,0,0,.31-.66v-6a.84.84,0,0,0-.87-.84Z", 1, "cls-57"], ["d", "M309,135.31h8.8a.67.67,0,0,0,.66-.66v-4.58a.67.67,0,0,0-.66-.66H309a.66.66,0,0,0-.66.66h0v4.58A.66.66,0,0,0,309,135.31Z", 1, "cls-87"], ["id", "_288965800", "data-name", " 288965800"], ["id", "_301280224", "data-name", " 301280224", "d", "M317.8,129.45H309a.67.67,0,0,0-.53.26.68.68,0,0,1,.4-.13h8.8a.62.62,0,0,1,.64.63v4.57a.65.65,0,0,1-.13.39.65.65,0,0,0,.26-.52v-4.58a.62.62,0,0,0-.64-.62Z", 1, "cls-59"], ["d", "M311.9,131.54v1.2H312c.08,0,.12-.05.11-.17a.7.7,0,0,0-.16-.46l.15-.58Zm-.72,1.35h.24v-.17h-.24Zm0-.33h.24v-.18h-.24Zm-.61.07h.12v-1h-.12Zm.34-.06-.05-.19v.6h-.17v-.13h-.12V133h-.19v-1.62h.48v1a1.68,1.68,0,0,0,.34-.32h-.3v-.19h.22v-.21H311v-.19h.17v-.23h.19v.23h.15v.19h-.15v.21h0a3.92,3.92,0,0,0,.24-.42l.12.06v-.16h.56v.21l-.14.54a.87.87,0,0,1,.16.5c0,.23-.07.35-.21.35h-.18v.23h-.19v-1.63a1.79,1.79,0,0,1-.16.31h.1V132h-.23a.7.7,0,0,1-.13.16h.3v1h-.17v-.1h-.24v.11H311v-.67l-.09.08Z", 1, "cls-57"], ["d", "M312.86,132.46h.46V132h-.46Zm-.25.34v-1h.95v.84h-.7v.14Zm-.2-1.23v-.23h2v.23h-.26v1.24c0,.2-.1.31-.31.32h-.39a1.57,1.57,0,0,0,0-.23h.31c.13,0,.19,0,.18-.17v-1.17Z", 1, "cls-57"], ["d", "M315.94,132.56h-.68a1.33,1.33,0,0,0,.34.22,2.11,2.11,0,0,0,.34-.22Zm-1.3-1.06a1.62,1.62,0,0,0,0-.19c.49,0,1.07,0,1.74,0l0,.19h-.31l-1.43,0Zm-.06.51v-.29h.3l-.09-.16.23,0a.43.43,0,0,1,0,.07.92.92,0,0,1,.07.13h.3l-.05-.11,0-.07.24,0,.1.22h.2a2.53,2.53,0,0,0,.12-.23l.24,0-.11.18h.27V132h-.22v-.11h-1.37V132Zm-.05.25v-.19h.56l.05-.14h.25l-.05.13h1.12v.19h-1.19l0,.06a.15.15,0,0,1,0,.06h1.05v.21a2.66,2.66,0,0,1-.38.28,3.37,3.37,0,0,0,.6.06l-.1.21a3.32,3.32,0,0,1-.77-.17,4.24,4.24,0,0,1-.76.21s0-.07-.06-.12l0-.09a3.78,3.78,0,0,0,.59-.1,2.09,2.09,0,0,1-.29-.23,1.88,1.88,0,0,1-.46.41.88.88,0,0,0-.05-.1l0-.1a1.57,1.57,0,0,0,.53-.59Z", 1, "cls-57"], ["d", "M354.44,48.4H342.32a1,1,0,0,0-1,1.05v7.1a1,1,0,0,0,1,1.05h1.26v1.88l4.07-1.88h6.79a1,1,0,0,0,1-1.05h0v-7.1A1,1,0,0,0,354.44,48.4Z", 1, "cls-88"], ["id", "_288965776", "data-name", " 288965776"], ["id", "_301281424", "data-name", " 301281424", "d", "M354.44,48.39H342.32a1.07,1.07,0,0,0-.79.36,1.07,1.07,0,0,1,.69-.26h12.11a1,1,0,0,1,1,1.06v7.1a1.08,1.08,0,0,1-.25.69,1.05,1.05,0,0,0,.36-.79v-7.1a1,1,0,0,0-1-1.06Z", 1, "cls-57"], ["d", "M343.16,56.45H353.6a.8.8,0,0,0,.79-.79h0V50.23a.79.79,0,0,0-.79-.78H343.16a.78.78,0,0,0-.79.78v5.43A.79.79,0,0,0,343.16,56.45Z", 1, "cls-89"], ["id", "_288965680", "data-name", " 288965680"], ["id", "_301285816", "data-name", " 301285816", "d", "M353.6,49.44H343.16a.78.78,0,0,0-.63.31.76.76,0,0,1,.47-.16h10.45a.78.78,0,0,1,.76.8v5.43a.76.76,0,0,1-.16.47.79.79,0,0,0,.32-.63V50.23a.77.77,0,0,0-.77-.79Z", 1, "cls-59"], ["d", "M345.25,54.15c-.33,0-.5-.09-.49-.29s.08-.24.25-.37a8,8,0,0,1,.9-.49h-1.08v-.27h1.68V53a9.58,9.58,0,0,0-1.3.67c-.07.05-.1.09-.1.13s.07.09.19.09h.87c.24,0,.36-.07.38-.2s0-.22,0-.35l.14,0a.58.58,0,0,0,.17.05s0,.11,0,.19,0,.19,0,.22c-.05.2-.26.3-.62.29Zm-.67-1.73v-.27h.58v-.26h.31v.26H346v-.26h.3v.26h.58v.27h-.58v.2H346v-.2h-.56v.2h-.31v-.2Z", 1, "cls-57"], ["d", "M347.15,52.41v-.24h.56l-.17-.23.3-.06.21.28h.37l0-.06a1.4,1.4,0,0,0,.16-.23l.31.06a.91.91,0,0,1-.11.16l-.06.07h.55v.24h-.94v.16h.83v.22h-.83V53h1v.22h-2.28V53h1v-.18h-.81v-.22h.81v-.16Zm0,1.21V53.4h.93v0a.43.43,0,0,0,0-.12h.3v.06a.25.25,0,0,0,0,.08h1v.22h-.93c.12.19.45.29,1,.32l-.09.16a.3.3,0,0,1-.05.1,1.41,1.41,0,0,1-1-.4,1.72,1.72,0,0,1-1.06.44l-.13-.28c.56,0,.87-.15.95-.34Z", 1, "cls-57"], ["d", "M351.08,52.23a2,2,0,0,1-.39.48h.81A1.91,1.91,0,0,1,351.08,52.23Zm-.69,1.22V53.2h1.38v.25h-.71l-.06.09-.24.35h.59l-.09-.14a.54.54,0,0,0-.07-.12l.21-.12.31.44c.05.06.08.12.11.15l-.24.14-.07-.14-.78,0-.27,0-.11-.22a.64.64,0,0,0,.19-.18,2.79,2.79,0,0,0,.2-.31Zm-.82.63,0-.26.27,0,.52-.07V54a3.5,3.5,0,0,0-.44.07l-.32,0Zm2.21-1.15-.24-.18V53h-.92v-.21a.92.92,0,0,1-.14.13l-.08.07-.12-.22-.2.31c-.07.09-.11.17-.15.22l.37,0a.57.57,0,0,1,0,.12.35.35,0,0,1,0,.12h-.13l-.3,0-.19,0-.09-.25a.6.6,0,0,0,.16-.16l.06-.08.13-.21-.32,0-.06-.24a.57.57,0,0,0,.12-.18,3.75,3.75,0,0,0,.26-.56l.29.09q-.21.39-.36.63h.21l.13-.23.24.11-.11.18a2.35,2.35,0,0,0,.65-.77l.29,0,0,.08a1.93,1.93,0,0,0,.67.66l-.12.27Z", 1, "cls-57"], ["d", "M55.3,10.74h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.61h3a.6.6,0,0,0,.6-.61v-3A.6.6,0,0,0,55.3,10.74Z", 1, "cls-90"], ["d", "M52.27,15a.61.61,0,0,1-.61-.62v-3a.61.61,0,0,1,.61-.61h0a.58.58,0,0,0-.59.59v3a.58.58,0,0,0,.59.59h3a.58.58,0,0,0,.58-.59v-3a.58.58,0,0,0-.58-.59h0a.61.61,0,0,1,.61.61v3a.62.62,0,0,1-.61.62Z", 1, "cls-91"], ["d", "M51.94,14.74h3.71a.45.45,0,0,1-.26.08h-3.2a.44.44,0,0,1-.25-.08Z", 1, "cls-92"], ["d", "M51.83,14.63h3.92a.52.52,0,0,1-.1.11H51.94l-.11-.11Z", 1, "cls-92"], ["d", "M51.78,14.51h4a.61.61,0,0,1,0,.12H51.83A.61.61,0,0,1,51.78,14.51Z", 1, "cls-93"], ["d", "M51.77,14.4h4a.36.36,0,0,1,0,.11h-4s0-.06,0-.09Z", 1, "cls-93"], ["points", "51.77 14.28 55.82 14.28 55.82 14.4 51.77 14.4 51.77 14.28", 1, "cls-94"], ["points", "51.77 14.17 55.82 14.17 55.82 14.28 51.77 14.28 51.77 14.17", 1, "cls-94"], ["points", "51.77 14.05 55.82 14.05 55.82 14.17 51.77 14.17 51.77 14.05", 1, "cls-94"], ["points", "51.77 13.94 55.82 13.94 55.82 14.05 51.77 14.05 51.77 13.94", 1, "cls-95"], ["points", "51.77 13.83 55.82 13.83 55.82 13.94 51.77 13.94 51.77 13.83", 1, "cls-95"], ["points", "51.77 13.71 55.82 13.71 55.82 13.83 51.77 13.83 51.77 13.71", 1, "cls-96"], ["points", "51.77 13.6 55.82 13.6 55.82 13.71 51.77 13.71 51.77 13.6", 1, "cls-96"], ["points", "51.77 13.48 55.82 13.48 55.82 13.6 51.77 13.6 51.77 13.48", 1, "cls-96"], ["points", "51.77 13.37 55.82 13.37 55.82 13.48 51.77 13.48 51.77 13.37", 1, "cls-97"], ["points", "51.77 13.26 55.82 13.26 55.82 13.37 51.77 13.37 51.77 13.26", 1, "cls-97"], ["points", "51.77 13.14 55.82 13.14 55.82 13.26 51.77 13.26 51.77 13.14", 1, "cls-98"], ["points", "51.77 13.03 55.82 13.03 55.82 13.14 51.77 13.14 51.77 13.03", 1, "cls-98"], ["points", "51.77 12.91 55.82 12.91 55.82 13.03 51.77 13.03 51.77 12.91", 1, "cls-98"], ["d", "M51.77,12.8H53a6.7,6.7,0,0,0,1.9,0h.91v.11h-4Z", 1, "cls-99"], ["d", "M51.77,12.69h.68l.56.11H51.77Zm3.67,0h.38v.11h-.91A4,4,0,0,0,55.44,12.69Z", 1, "cls-99"], ["d", "M51.77,12.57h.32l.36.12h-.68Zm3.93,0h.12v.12h-.38A1.29,1.29,0,0,0,55.7,12.57Z", 1, "cls-100"], ["d", "M51.77,12.46h.07l.25.11h-.32Zm4,0h0v.11H55.7C55.76,12.53,55.8,12.5,55.81,12.46Z", 1, "cls-100"], ["d", "M55.82,12.43h0Zm0,0h0s0,0,0,0Zm-4,0h-.07v0Z", 1, "cls-100"], ["d", "M53.09,11.65a.19.19,0,1,0-.19-.19A.2.2,0,0,0,53.09,11.65Zm-.76,2.46v.25h.78v-.53h.53V13.3h.53v-.53h.53v-.53h.53V12h-.78v.53h-.53v.53h-.53v.53h-.53v.53Zm1-1.67a.07.07,0,0,0,.11,0,.07.07,0,0,0,0-.11l-.23-.24v-.15h0v.14l0,.05V11.9a.2.2,0,0,0-.2-.21.2.2,0,0,0-.14.06h0l-.53.53a.09.09,0,0,0,0,.12.08.08,0,0,0,.11,0l.36-.36v.55H53v.26l-.24.1a.11.11,0,0,0,.09.21l.15-.07v.36a.11.11,0,1,0,.22,0V13l.11-.05a.11.11,0,0,0,0-.16l-.15-.19h.08v-.11L53,12.22v-.34h0v.32c0,.05.21.21.24.24Z", 1, "cls-101"], ["d", "M184.82,28.85H182a.56.56,0,0,0-.56.55v2.81a.55.55,0,0,0,.56.55h2.8a.55.55,0,0,0,.56-.55V29.4A.56.56,0,0,0,184.82,28.85Z", 1, "cls-90"], ["d", "M182,32.78a.58.58,0,0,1-.57-.57V29.4a.58.58,0,0,1,.57-.57h2.8v0H182a.55.55,0,0,0-.55.54v2.81a.55.55,0,0,0,.55.54h2.8a.54.54,0,0,0,.55-.54V29.4a.54.54,0,0,0-.55-.54h0v0a.57.57,0,0,1,.57.57v2.81a.57.57,0,0,1-.57.57Z", 1, "cls-91"], ["d", "M181.71,32.56h3.44a.48.48,0,0,1-.23.07h-3A.48.48,0,0,1,181.71,32.56Z", 1, "cls-92"], ["d", "M181.62,32.45h3.63a.52.52,0,0,1-.1.11h-3.44a.31.31,0,0,1-.09-.11Z", 1, "cls-92"], ["d", "M181.57,32.34h3.72a.36.36,0,0,1,0,.11h-3.63a.22.22,0,0,1-.05-.11Z", 1, "cls-93"], ["d", "M181.56,32.24h3.75a.3.3,0,0,1,0,.1h-3.72a.31.31,0,0,1,0-.1Z", 1, "cls-93"], ["points", "181.56 32.13 185.31 32.13 185.31 32.24 181.56 32.24 181.56 32.13", 1, "cls-94"], ["points", "181.56 32.03 185.31 32.03 185.31 32.13 181.56 32.13 181.56 32.03", 1, "cls-94"], ["points", "181.56 31.92 185.31 31.92 185.31 32.03 181.56 32.03 181.56 31.92", 1, "cls-94"], ["points", "181.56 31.82 185.31 31.82 185.31 31.92 181.56 31.92 181.56 31.82", 1, "cls-95"], ["points", "181.56 31.71 185.31 31.71 185.31 31.82 181.56 31.82 181.56 31.71", 1, "cls-95"], ["points", "181.56 31.6 185.31 31.6 185.31 31.71 181.56 31.71 181.56 31.6", 1, "cls-96"], ["points", "181.56 31.5 185.31 31.5 185.31 31.6 181.56 31.6 181.56 31.5", 1, "cls-96"], ["points", "181.56 31.39 185.31 31.39 185.31 31.5 181.56 31.5 181.56 31.39", 1, "cls-96"], ["points", "181.56 31.29 185.31 31.29 185.31 31.39 181.56 31.39 181.56 31.29", 1, "cls-97"], ["points", "181.56 31.18 185.31 31.18 185.31 31.29 181.56 31.29 181.56 31.18", 1, "cls-97"], ["points", "181.56 31.07 185.31 31.07 185.31 31.18 181.56 31.18 181.56 31.07", 1, "cls-98"], ["points", "181.56 30.97 185.31 30.97 185.31 31.07 181.56 31.07 181.56 30.97", 1, "cls-98"], ["points", "181.56 30.86 185.31 30.86 185.31 30.97 181.56 30.97 181.56 30.86", 1, "cls-98"], ["d", "M181.56,30.76h1.14a6.54,6.54,0,0,0,1.77,0h.84v.1h-3.75Z", 1, "cls-99"], ["d", "M181.56,30.65h.63a4,4,0,0,0,.52.11h-1.15Zm3.4,0h.35v.11h-.84A4,4,0,0,0,185,30.65Z", 1, "cls-99"], ["d", "M181.56,30.54h.3a1.6,1.6,0,0,0,.33.11h-.63v-.11Zm3.64,0h.11v.11H185a.9.9,0,0,0,.24-.11Z", 1, "cls-100"], ["d", "M181.56,30.44h.06l.24.1h-.3Zm3.74,0h0v.1h-.11C185.26,30.51,185.29,30.48,185.3,30.44Z", 1, "cls-100"], ["d", "M185.31,30.44h0s0,0,0,0Zm-3.69,0h-.06v0Zm3.69,0Z", 1, "cls-100"], ["d", "M182.78,29.69a.17.17,0,0,0,.17-.17.17.17,0,1,0-.34,0A.17.17,0,0,0,182.78,29.69ZM182.07,32v.23h.72v-.49h.5v-.49h.49v-.49h.49v-.49h.49V30H184v.5h-.49V31h-.5v.49h-.49V32Zm.92-1.54a.08.08,0,1,0,.11-.11l-.22-.22V30h0v.13l.05,0v-.21a.19.19,0,0,0-.32-.14l-.49.5a.07.07,0,1,0,.1.1s.21-.2.33-.33v.51h.09v.24l-.23.1a.1.1,0,0,0,0,.13.11.11,0,0,0,.14.06l.14-.07v.34a.1.1,0,1,0,.2,0v-.43l.11-.05a.09.09,0,0,0,0-.14l-.14-.18H183v-.1l-.24-.24v-.31h0v.29l.22.23Z", 1, "cls-101"], ["d", "M201,20.54h-2.81a.55.55,0,0,0-.56.55V23.9a.56.56,0,0,0,.56.55H201a.55.55,0,0,0,.55-.55V21.09A.55.55,0,0,0,201,20.54Z", 1, "cls-90"], ["d", "M198.19,24.46a.57.57,0,0,1-.57-.56V21.09a.58.58,0,0,1,.57-.57H201v0h-2.81a.54.54,0,0,0-.54.54V23.9a.54.54,0,0,0,.54.54H201a.54.54,0,0,0,.54-.54V21.09a.54.54,0,0,0-.54-.54h0v0a.58.58,0,0,1,.57.57V23.9a.57.57,0,0,1-.57.56Z", 1, "cls-91"], ["d", "M197.89,24.25h3.43a.42.42,0,0,1-.23.07h-3A.42.42,0,0,1,197.89,24.25Z", 1, "cls-92"], ["d", "M197.79,24.14h3.63a.52.52,0,0,1-.1.11h-3.44A.48.48,0,0,1,197.79,24.14Z", 1, "cls-92"], ["d", "M197.74,24h3.73a.37.37,0,0,1-.05.11h-3.63A.37.37,0,0,1,197.74,24Z", 1, "cls-93"], ["d", "M197.73,23.93h3.75s0,.07,0,.1h-3.73a.31.31,0,0,1,0-.1Z", 1, "cls-93"], ["points", "197.73 23.82 201.48 23.82 201.48 23.93 197.73 23.93 197.73 23.82", 1, "cls-94"], ["points", "197.73 23.72 201.48 23.72 201.48 23.82 197.73 23.82 197.73 23.72", 1, "cls-94"], ["points", "197.73 23.61 201.48 23.61 201.48 23.72 197.73 23.72 197.73 23.61", 1, "cls-94"], ["points", "197.73 23.5 201.48 23.5 201.48 23.61 197.73 23.61 197.73 23.5", 1, "cls-95"], ["points", "197.73 23.4 201.48 23.4 201.48 23.5 197.73 23.5 197.73 23.4", 1, "cls-95"], ["points", "197.73 23.29 201.48 23.29 201.48 23.4 197.73 23.4 197.73 23.29", 1, "cls-96"], ["points", "197.73 23.19 201.48 23.19 201.48 23.29 197.73 23.29 197.73 23.19", 1, "cls-96"], ["points", "197.73 23.08 201.48 23.08 201.48 23.19 197.73 23.19 197.73 23.08", 1, "cls-96"], ["points", "197.73 22.98 201.48 22.98 201.48 23.08 197.73 23.08 197.73 22.98", 1, "cls-97"], ["points", "197.73 22.87 201.48 22.87 201.48 22.98 197.73 22.98 197.73 22.87", 1, "cls-97"], ["points", "197.73 22.76 201.48 22.76 201.48 22.87 197.73 22.87 197.73 22.76", 1, "cls-98"], ["points", "197.73 22.66 201.48 22.66 201.48 22.76 197.73 22.76 197.73 22.66", 1, "cls-98"], ["points", "197.73 22.55 201.48 22.55 201.48 22.66 197.73 22.66 197.73 22.55", 1, "cls-98"], ["d", "M197.73,22.45h1.15a6.47,6.47,0,0,0,1.76,0h.84v.1h-3.75Z", 1, "cls-99"], ["d", "M197.73,22.34h.63a4,4,0,0,0,.52.11h-1.15Zm3.4,0h.35v.11h-.84A3.65,3.65,0,0,0,201.13,22.34Z", 1, "cls-99"], ["d", "M197.73,22.23h.3l.33.11h-.63v-.11Zm3.64,0h.11v.11h-.35a.77.77,0,0,0,.24-.11Z", 1, "cls-100"], ["d", "M197.73,22.13h.06l.24.1h-.3v-.1Zm3.74,0h0v.1h-.1A.17.17,0,0,0,201.47,22.13Z", 1, "cls-100"], ["d", "M201.48,22.1Zm0,0h0v0Zm-3.69,0h-.06v0Z", 1, "cls-100"], ["d", "M199,21.38a.18.18,0,0,0,.18-.18A.18.18,0,0,0,199,21a.18.18,0,0,0-.17.17A.18.18,0,0,0,199,21.38Zm-.7,2.28v.24H199v-.5h.49v-.49H200v-.49h.49v-.49h.5v-.24h-.73v.5h-.49v.49h-.49v.49h-.5v.49Zm.91-1.54a.08.08,0,1,0,.11-.11l-.22-.22v-.14h0v.13l0,0v-.21a.18.18,0,0,0-.19-.19.21.21,0,0,0-.13,0l-.49.5a.07.07,0,0,0,0,.1.08.08,0,0,0,.11,0l.32-.33v.51h.09v.24l-.22.1a.09.09,0,0,0,0,.13.1.1,0,0,0,.13.06l.14-.07v.34a.1.1,0,0,0,.1.1.09.09,0,0,0,.1-.1v-.43l.11-.05a.1.1,0,0,0,.05-.14l-.15-.18h.08v-.1l-.24-.25v-.3h0v.29l.22.23Z", 1, "cls-101"], ["d", "M299.22,35h-3a.6.6,0,0,0-.6.61v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,299.22,35Z", 1, "cls-90"], ["d", "M296.2,39.2a.61.61,0,0,1-.62-.61v-3a.62.62,0,0,1,.62-.61h3v0h-3a.58.58,0,0,0-.59.58v3a.59.59,0,0,0,.59.59h3a.59.59,0,0,0,.59-.59v-3a.58.58,0,0,0-.59-.58v0h0a.61.61,0,0,1,.61.61v3a.61.61,0,0,1-.61.61Z", 1, "cls-91"], ["d", "M295.86,39h3.71a.44.44,0,0,1-.25.08h-3.2a.45.45,0,0,1-.26-.08Z", 1, "cls-92"], ["d", "M295.76,38.85h3.92a.63.63,0,0,1-.11.12h-3.71a.58.58,0,0,1-.1-.12Z", 1, "cls-92"], ["d", "M295.71,38.74h4a.36.36,0,0,1,0,.11h-3.92A.37.37,0,0,1,295.71,38.74Z", 1, "cls-93"], ["d", "M295.69,38.62h4.05a.43.43,0,0,1,0,.11h-4a.3.3,0,0,1,0-.1v0Z", 1, "cls-93"], ["points", "295.69 38.51 299.74 38.51 299.74 38.62 295.69 38.62 295.69 38.51", 1, "cls-94"], ["points", "295.69 38.4 299.74 38.4 299.74 38.51 295.69 38.51 295.69 38.4", 1, "cls-94"], ["points", "295.69 38.28 299.74 38.28 299.74 38.4 295.69 38.4 295.69 38.28", 1, "cls-94"], ["points", "295.69 38.17 299.74 38.17 299.74 38.28 295.69 38.28 295.69 38.17", 1, "cls-95"], ["points", "295.69 38.05 299.74 38.05 299.74 38.17 295.69 38.17 295.69 38.05", 1, "cls-95"], ["points", "295.69 37.94 299.74 37.94 299.74 38.05 295.69 38.05 295.69 37.94", 1, "cls-96"], ["points", "295.69 37.83 299.74 37.83 299.74 37.94 295.69 37.94 295.69 37.83", 1, "cls-96"], ["points", "295.69 37.71 299.74 37.71 299.74 37.83 295.69 37.83 295.69 37.71", 1, "cls-96"], ["points", "295.69 37.59 299.74 37.59 299.74 37.71 295.69 37.71 295.69 37.59", 1, "cls-97"], ["points", "295.69 37.48 299.74 37.48 299.74 37.59 295.69 37.59 295.69 37.48", 1, "cls-97"], ["points", "295.69 37.37 299.74 37.37 299.74 37.48 295.69 37.48 295.69 37.37", 1, "cls-98"], ["points", "295.69 37.25 299.74 37.25 299.74 37.37 295.69 37.37 295.69 37.25", 1, "cls-98"], ["points", "295.69 37.14 299.74 37.14 299.74 37.25 295.69 37.25 295.69 37.14", 1, "cls-98"], ["d", "M295.69,37h1.24a7.17,7.17,0,0,0,1.91,0h.9v.11h-4.05Z", 1, "cls-99"], ["d", "M295.69,36.91h.68a5.05,5.05,0,0,0,.56.12h-1.24Zm3.67,0h.38V37h-.9A2.87,2.87,0,0,0,299.36,36.91Z", 1, "cls-99"], ["d", "M295.69,36.8H296l.35.11h-.68Zm3.94,0h.11v.11h-.38A1.16,1.16,0,0,0,299.63,36.8Z", 1, "cls-100"], ["d", "M295.69,36.68h.07l.26.12h-.33Zm4,0h0v.12h-.11A.27.27,0,0,0,299.73,36.68Z", 1, "cls-100"], ["d", "M299.74,36.68h0v0Zm-4,0h-.06v0Zm4,0Z", 1, "cls-100"], ["d", "M297,35.87a.18.18,0,0,0,.19-.18.18.18,0,0,0-.19-.19.18.18,0,0,0-.18.19A.18.18,0,0,0,297,35.87Zm-.76,2.47v.25H297v-.53h.53v-.53h.53V37h.53v-.53h.53v-.26h-.78v.53h-.53v.54h-.53v.53h-.53v.53Zm1-1.67a.08.08,0,0,0,.12-.12l-.24-.23v-.16h.05v.14l.05.05v-.23a.2.2,0,0,0-.21-.2.2.2,0,0,0-.14.06h0l-.53.53a.08.08,0,0,0,0,.11.09.09,0,0,0,.12,0l.35-.35v.55h.09v.25l-.24.11a.11.11,0,0,0-.05.15.1.1,0,0,0,.14.05l.15-.07v.37a.11.11,0,0,0,.11.11.1.1,0,0,0,.11-.11v-.46l.12-.06a.12.12,0,0,0,.05-.16l-.16-.18h.09V36.7l-.26-.26v-.33h0v.32c.05,0,.21.21.24.24Z", 1, "cls-101"], ["d", "M316.58,69h-2.81a.56.56,0,0,0-.55.56v2.8a.56.56,0,0,0,.55.56h2.81a.56.56,0,0,0,.56-.56v-2.8A.56.56,0,0,0,316.58,69Z", 1, "cls-90"], ["d", "M313.78,72.88a.57.57,0,0,1-.57-.57V69.5a.56.56,0,0,1,.57-.56h0a.54.54,0,0,0-.55.54v2.81a.55.55,0,0,0,.55.55h2.8a.56.56,0,0,0,.55-.55V69.5a.55.55,0,0,0-.55-.54h0a.57.57,0,0,1,.57.56v2.81a.58.58,0,0,1-.57.57Z", 1, "cls-91"], ["d", "M313.47,72.66h3.43a.39.39,0,0,1-.21.08h-3a.39.39,0,0,1-.21-.08Z", 1, "cls-92"], ["d", "M313.37,72.56H317a.43.43,0,0,1-.09.1h-3.44a.47.47,0,0,1-.1-.1Z", 1, "cls-92"], ["d", "M313.32,72.45h3.73a.31.31,0,0,1-.05.1h-3.63Z", 1, "cls-93"], ["d", "M313.31,72.34h3.75a.34.34,0,0,1,0,.1h-3.73s0-.07,0-.1Z", 1, "cls-93"], ["points", "313.31 72.24 317.06 72.24 317.06 72.34 313.31 72.34 313.31 72.24", 1, "cls-94"], ["points", "313.31 72.13 317.06 72.13 317.06 72.24 313.31 72.24 313.31 72.13", 1, "cls-94"], ["points", "313.31 72.03 317.06 72.03 317.06 72.13 313.31 72.13 313.31 72.03", 1, "cls-94"], ["points", "313.31 71.92 317.06 71.92 317.06 72.03 313.31 72.03 313.31 71.92", 1, "cls-95"], ["points", "313.31 71.81 317.06 71.81 317.06 71.92 313.31 71.92 313.31 71.81", 1, "cls-95"], ["points", "313.31 71.71 317.06 71.71 317.06 71.81 313.31 71.81 313.31 71.71", 1, "cls-96"], ["points", "313.31 71.6 317.06 71.6 317.06 71.71 313.31 71.71 313.31 71.6", 1, "cls-96"], ["points", "313.31 71.5 317.06 71.5 317.06 71.6 313.31 71.6 313.31 71.5", 1, "cls-96"], ["points", "313.31 71.39 317.06 71.39 317.06 71.5 313.31 71.5 313.31 71.39", 1, "cls-97"], ["points", "313.31 71.28 317.06 71.28 317.06 71.39 313.31 71.39 313.31 71.28", 1, "cls-97"], ["points", "313.31 71.18 317.06 71.18 317.06 71.28 313.31 71.28 313.31 71.18", 1, "cls-98"], ["points", "313.31 71.07 317.06 71.07 317.06 71.18 313.31 71.18 313.31 71.07", 1, "cls-98"], ["points", "313.31 70.97 317.06 70.97 317.06 71.07 313.31 71.07 313.31 70.97", 1, "cls-98"], ["d", "M313.31,70.86h1.15a6.54,6.54,0,0,0,1.77,0h.83V71h-3.75v-.11Z", 1, "cls-99"], ["d", "M313.31,70.76h.63l.52.1h-1.15Zm3.4,0h.35v.1h-.83a4,4,0,0,0,.48-.1Z", 1, "cls-99"], ["d", "M313.31,70.65h.3l.33.11h-.63Zm3.65,0h.1v.11h-.35a1.53,1.53,0,0,0,.25-.11Z", 1, "cls-100"], ["d", "M313.31,70.54h.06l.24.11h-.3Zm3.75,0h0v.11H317A.33.33,0,0,0,317.06,70.54Z", 1, "cls-100"], ["d", "M317.06,70.54h0v0Zm-3.68,0h-.07v0Zm3.68,0h0Z", 1, "cls-100"], ["d", "M314.54,69.79a.17.17,0,0,0,0-.34.17.17,0,1,0,0,.34Zm-.71,2.29v.23h.72v-.49H315v-.49h.49v-.5h.5v-.49h.49v-.23h-.73v.49h-.49v.49h-.49v.5h-.49v.49Zm.92-1.55a.07.07,0,0,0,.1,0,.08.08,0,0,0,0-.11l-.21-.21v-.15h0v.13l0,0V70a.18.18,0,0,0-.18-.18.19.19,0,0,0-.13,0h0l-.5.49a.08.08,0,0,0,.11.11l.33-.33v.51h.08v.23l-.22.1a.11.11,0,0,0,0,.14.1.1,0,0,0,.13,0l.14-.06v.33a.11.11,0,0,0,.11.11.11.11,0,0,0,.1-.11V71l.1-.05a.11.11,0,0,0,.05-.15l-.14-.17h.07v-.11l-.24-.24V70h0v.3l.23.22Z", 1, "cls-101"], ["d", "M353.7,112.6c-.17-.55-.33-1.1-.49-1.65a1.36,1.36,0,0,1-.07-.25c0-.07,0-.14-.05-.19s0-.1,0-.14,0-.06,0-.08l.49,1.65a.54.54,0,0,1,0,.08s0,.08,0,.13,0,.12.05.2,0,.16.07.25Z", 1, "cls-51"], ["points", "353.04 110.29 353.23 110.93 353.53 111.94 353.53 111.94 353.53 111.94 353.53 111.94 353.53 111.94 353.53 111.94 353.53 111.94 353.53 111.94 353.53 111.94 353.53 111.94 353.53 111.95 353.53 111.95 353.53 111.95 353.53 111.95 353.53 111.95 353.53 111.95 353.53 111.95 353.53 111.95 353.53 111.95 353.53 111.95 353.53 111.95 353.53 111.95 353.53 111.95 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.96 353.53 111.97 353.53 111.97 353.53 111.97 353.53 111.97 353.53 111.97 353.53 111.97 353.53 111.97 353.53 111.97 353.53 111.97 353.53 111.97 353.53 111.97 353.53 111.97 353.53 111.97 353.53 111.97 353.53 111.97 353.54 111.97 353.54 111.97 353.54 111.97 353.54 111.97 353.54 111.97 353.54 111.97 353.54 111.97 353.54 111.97 353.54 111.97 353.54 111.97 353.54 111.97 353.54 111.98 353.54 111.98 353.54 111.98 353.54 111.98 353.54 111.98 353.54 111.98 353.54 111.98 353.54 111.98 353.54 111.98 353.54 111.98 353.54 111.98 353.54 111.98 353.54 111.98 353.54 111.98 353.55 112.01 353.06 110.37 353.05 110.35 353.05 110.35 353.05 110.35 353.05 110.35 353.05 110.35 353.05 110.35 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.34 353.05 110.33 353.05 110.33 353.05 110.33 353.05 110.33 353.05 110.33 353.05 110.33 353.05 110.33 353.05 110.33 353.05 110.33 353.05 110.33 353.05 110.33 353.05 110.33 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.32 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.31 353.04 110.3 353.04 110.3 353.04 110.3 353.04 110.3 353.04 110.3 353.04 110.3 353.04 110.3 353.04 110.3 353.04 110.3 353.04 110.3 353.04 110.3 353.04 110.29 353.04 110.29 353.04 110.29 353.04 110.29", 1, "cls-51"], ["d", "M353.06,110.37l.49,1.64h0v0h0s0,.07,0,.1h0v0h0v0l0,.06h0l-.05-.17v-1.34l0-.1a1.54,1.54,0,0,1,0-.17h0v0h0v0h0v0h0Zm.63,2.19h0m0,0h0m0,0h0", 1, "cls-51"], ["points", "363.77 121.21 364.21 122.83 360.14 126.74 359.67 125.13 363.77 121.21", 1, "cls-51"], ["d", "M359.67,125.13l.47,1.61c-.13,0-.85-.27-1.93-.69a40.19,40.19,0,0,1-4-1.86,31.08,31.08,0,0,1-4.76-3.07,18.77,18.77,0,0,1-4.07-4.32l-.53-1.63a18.93,18.93,0,0,0,4.09,4.34,30.74,30.74,0,0,0,4.78,3.07,39.23,39.23,0,0,0,4.06,1.86c1.08.42,1.81.65,1.94.69Z", 1, "cls-51"], ["d", "M360.07,126.51l.07.23-.15,0h0l-.06,0h0l-.06,0h-.51l0,0h-.11l0,0h-.07l0,0h0l0,0h0l-.05,0h0l-.65-.25-.42-.17h0l-.05,0h0l-.06,0h0l-.05,0h0l-.06,0h0l-.11-.05h0l-.06,0h0l-.06,0h0l-.06,0h0l-.06,0h0l-.05,0h0l-.06,0h0l-.06,0h0l-.06,0h0l-.06,0h0l-.07,0h0l-.06,0h0l-.06,0h0l-.06,0h0l-.06,0h0l-.07,0h0l-.06,0h0l-.06,0h0l-.07,0h0l-.06,0h0l-.07,0h0l-.33-.15h0c-.55-.26-1.14-.55-1.74-.87h0l-.73-.4h0l-.08,0h0l-.07,0h0l-.07,0h0l-.08,0h0l-.07,0h0l-.08,0h0l-.07,0h0l-.08,0-.07,0h0l-.08,0h0l-.07-.05h0l-.08,0h0l-.07,0h0l-.08,0h0l-.07,0h0l-.08,0h0l-.07,0h0L352,123h0l-.15-.09h0l-.08,0h0l-.22-.14h0l-.15-.1h0l-.31-.2h0l-.07-.05h0l-.15-.1h0l-.08-.06h0l-.07,0h0l-.07,0h0l-.08,0-.07-.06-.08,0-.07-.05-.08-.06h0l-.07-.05-.08-.06h0l-.14-.11h0l-.15-.11h0l-.44-.34h0l-.5-.41h0l-.07-.06h0l-.08-.06h0l-.07-.06-.07-.06-.07-.06h0l-.07-.06-.07-.06-.07-.07h0l-.07-.06h0l-.13-.12h0l-.07-.07h0l-.27-.25h0l-.14-.13h0a1.89,1.89,0,0,0-.2-.2h0l-.13-.14h0c-.17-.17-.34-.36-.51-.54h0l-.31-.35h0l-.18-.22a1.71,1.71,0,0,1-.11-.14h0l-.06-.07h0l-.06-.08h0l-.06-.07,0-.07h0l-.06-.08h0l-.06-.07h0l-.05-.08h0l-.06-.07h0l-.05-.08h0l-.06-.07h0l-.05-.08h0l0-.07h0l-.06-.08h0l-.05-.08h0l-.05-.08h0l-.05-.07-.18-.55-.35-1.08a16,16,0,0,0,1.87,2.33h0l.39.4h0l.27.26h0l.07.06h0l.14.13h0l.07.07h0l.2.18h0l.07.07.07.06h0l.08.06h0l.07.06h0l.14.12h0l.07.06h0l.07.06h0l.07.06h0l.07.06h0l.15.12h0l.07.06h0l.07.06h0l.08.06h0l.07,0h0l.07.06h0l.08.06h0l.07,0h0l.07.06h0l.08.06h0l.07.05,1.05.75h0a32.88,32.88,0,0,0,3.21,1.93h0c.37.2.73.38,1.08.55h0l.48.23h0l.2.09h0l.06,0h0l.07,0h0l.13.06h0l.13.06.32.15h0l.07,0h0l.12.06h0l.06,0h0l.06,0h0l.06,0h0l.06,0h0l.06,0h0l.06,0,.06,0h0l.06,0h0l.06,0h0l.12,0h0l0,0h0l.12,0h0l.05,0h0l.06,0h0l.05,0h0l.06,0h0l.21.08h0l.15.06h0l.3.12h0l.05,0h0l.05,0h0l0,0h.05l0,0,.05,0h0l.12,0h0l0,0h.05l0,0h.07l0,0h0l0,0h.14l0,0h.37l.05,0h0l0,0h0l0,0h0l.12,0,.4,1.38Z", 1, "cls-51"], ["d", "M353,110.29a9.52,9.52,0,0,0,.4,1.36,13.65,13.65,0,0,0,1.5,2.89,16.51,16.51,0,0,0,3.23,3.51,20.51,20.51,0,0,0,5.6,3.16l-4.1,3.92c-.13,0-.86-.26-1.94-.69a39.84,39.84,0,0,1-4.06-1.85,30.83,30.83,0,0,1-4.78-3.08,18.73,18.73,0,0,1-4.09-4.34l8.24-4.88Z", 1, "cls-52"], ["d", "M354.85,116h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,354.85,116Z", 1, "cls-90"], ["d", "M351.82,120.27a.61.61,0,0,1-.61-.61v-3a.61.61,0,0,1,.61-.61h3v0h-3a.58.58,0,0,0-.59.58v3a.58.58,0,0,0,.59.59h3a.58.58,0,0,0,.58-.59v-3a.58.58,0,0,0-.58-.58v0h0a.62.62,0,0,1,.61.61v3a.61.61,0,0,1-.61.61Z", 1, "cls-91"], ["d", "M351.49,120h3.71a.44.44,0,0,1-.25.08h-3.21A.44.44,0,0,1,351.49,120Z", 1, "cls-92"], ["d", "M351.39,119.92h3.91a.38.38,0,0,1-.1.12h-3.71a.38.38,0,0,1-.1-.12Z", 1, "cls-92"], ["d", "M351.33,119.81h4a.54.54,0,0,1-.05.11h-3.92l-.05-.11Z", 1, "cls-93"], ["d", "M351.32,119.69h4.05a.52.52,0,0,1,0,.11h-4a.52.52,0,0,1,0-.11Z", 1, "cls-93"], ["points", "351.32 119.58 355.37 119.58 355.37 119.69 351.32 119.69 351.32 119.58", 1, "cls-94"], ["points", "351.32 119.47 355.37 119.47 355.37 119.58 351.32 119.58 351.32 119.47", 1, "cls-94"], ["points", "351.32 119.35 355.37 119.35 355.37 119.47 351.32 119.47 351.32 119.35", 1, "cls-94"], ["points", "351.32 119.24 355.37 119.24 355.37 119.35 351.32 119.35 351.32 119.24", 1, "cls-95"], ["points", "351.32 119.12 355.37 119.12 355.37 119.24 351.32 119.24 351.32 119.12", 1, "cls-95"], ["points", "351.32 119.01 355.37 119.01 355.37 119.12 351.32 119.12 351.32 119.01", 1, "cls-96"], ["points", "351.32 118.89 355.37 118.89 355.37 119.01 351.32 119.01 351.32 118.89", 1, "cls-96"], ["points", "351.32 118.78 355.37 118.78 355.37 118.89 351.32 118.89 351.32 118.78", 1, "cls-96"], ["points", "351.32 118.67 355.37 118.67 355.37 118.78 351.32 118.78 351.32 118.67", 1, "cls-97"], ["points", "351.32 118.55 355.37 118.55 355.37 118.66 351.32 118.66 351.32 118.55", 1, "cls-97"], ["points", "351.32 118.44 355.37 118.44 355.37 118.55 351.32 118.55 351.32 118.44", 1, "cls-98"], ["points", "351.32 118.32 355.37 118.32 355.37 118.44 351.32 118.44 351.32 118.32", 1, "cls-98"], ["points", "351.32 118.21 355.37 118.21 355.37 118.32 351.32 118.32 351.32 118.21", 1, "cls-98"], ["d", "M351.32,118.09h1.24a6.77,6.77,0,0,0,1.91,0h.9v.12h-4.05Z", 1, "cls-99"], ["d", "M351.32,118H352a3.47,3.47,0,0,0,.56.11h-1.24Zm3.67,0h.38v.11h-.9A4.22,4.22,0,0,0,355,118Z", 1, "cls-99"], ["d", "M351.32,117.87h.33l.35.11h-.68Zm3.93,0h.12V118H355a.92.92,0,0,0,.26-.11Z", 1, "cls-100"], ["d", "M351.32,117.75h.07l.26.11h-.33Zm4,0h0v.11h-.11A.21.21,0,0,0,355.36,117.75Z", 1, "cls-100"], ["d", "M355.37,117.75h0a0,0,0,0,0,0,0Zm-4,0h-.07v0Zm4,0h0Z", 1, "cls-100"], ["d", "M352.59,116.86a.2.2,0,1,0-.2-.2A.2.2,0,0,0,352.59,116.86Zm-.81,2.64v.27h.83v-.57h.57v-.57h.57v-.57h.57v-.57h.57v-.27h-.84v.57h-.57v.57h-.57v.57h-.57v.57Zm1.06-1.79a.09.09,0,0,0,.12,0,.07.07,0,0,0,0-.12,2.73,2.73,0,0,0-.25-.25v-.17h.05v.15l.05.05v-.25a.21.21,0,0,0-.22-.21.2.2,0,0,0-.15.06h0l-.57.57a.09.09,0,0,0,0,.12.11.11,0,0,0,.13,0s.23-.23.38-.38v.59h.1v.27l-.26.12a.11.11,0,0,0-.06.15.11.11,0,0,0,.15.06l.17-.07v.39a.12.12,0,0,0,.11.12.12.12,0,0,0,.12-.12v-.5l.12-.05a.13.13,0,0,0,.06-.17l-.17-.2h.09v-.12l-.28-.28v-.36h.05v.34Z", 1, "cls-101"], ["d", "M384.81,97.26h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.61-.6v-3A.6.6,0,0,0,384.81,97.26Z", 1, "cls-90"], ["d", "M381.79,101.49a.61.61,0,0,1-.62-.61v-3a.62.62,0,0,1,.62-.61h3v0h-3a.58.58,0,0,0-.59.58v3a.58.58,0,0,0,.59.59h3a.58.58,0,0,0,.59-.59v-3a.58.58,0,0,0-.59-.58v0h0a.62.62,0,0,1,.62.61v3a.61.61,0,0,1-.62.61Z", 1, "cls-91"], ["d", "M381.46,101.26h3.7a.36.36,0,0,1-.23.08h-3.24A.36.36,0,0,1,381.46,101.26Z", 1, "cls-92"], ["d", "M381.35,101.14h3.92a.32.32,0,0,1-.11.12h-3.7A.32.32,0,0,1,381.35,101.14Z", 1, "cls-92"], ["d", "M381.3,101h4a.37.37,0,0,1-.05.11h-3.92A.37.37,0,0,1,381.3,101Z", 1, "cls-93"], ["d", "M381.29,100.92h4a.43.43,0,0,1,0,.11h-4a.28.28,0,0,1,0-.09Z", 1, "cls-93"], ["points", "381.29 100.8 385.34 100.8 385.34 100.92 381.29 100.92 381.29 100.8", 1, "cls-94"], ["points", "381.29 100.69 385.34 100.69 385.34 100.8 381.29 100.8 381.29 100.69", 1, "cls-94"], ["points", "381.29 100.57 385.34 100.57 385.34 100.69 381.29 100.69 381.29 100.57", 1, "cls-94"], ["points", "381.29 100.46 385.34 100.46 385.34 100.57 381.29 100.57 381.29 100.46", 1, "cls-95"], ["points", "381.29 100.34 385.34 100.34 385.34 100.46 381.29 100.46 381.29 100.34", 1, "cls-95"], ["points", "381.29 100.23 385.34 100.23 385.34 100.34 381.29 100.34 381.29 100.23", 1, "cls-96"], ["points", "381.29 100.12 385.34 100.12 385.34 100.23 381.29 100.23 381.29 100.12", 1, "cls-96"], ["points", "381.29 100 385.34 100 385.34 100.12 381.29 100.12 381.29 100", 1, "cls-96"], ["points", "381.29 99.89 385.34 99.89 385.34 100 381.29 100 381.29 99.89", 1, "cls-97"], ["points", "381.29 99.77 385.34 99.77 385.34 99.89 381.29 99.89 381.29 99.77", 1, "cls-97"], ["points", "381.29 99.66 385.34 99.66 385.34 99.77 381.29 99.77 381.29 99.66", 1, "cls-98"], ["points", "381.29 99.54 385.34 99.54 385.34 99.66 381.29 99.66 381.29 99.54", 1, "cls-98"], ["points", "381.29 99.43 385.34 99.43 385.34 99.54 381.29 99.54 381.29 99.43", 1, "cls-98"], ["d", "M381.29,99.32h1.24a7.09,7.09,0,0,0,1.9,0h.91v.11h-4v-.11Z", 1, "cls-99"], ["d", "M381.29,99.2H382a4.61,4.61,0,0,0,.56.12h-1.24Zm3.67,0h.38v.12h-.9A3.08,3.08,0,0,0,385,99.2Z", 1, "cls-99"], ["d", "M381.29,99.09h.32l.36.11h-.68Zm3.93,0h.12v.11H385A.92.92,0,0,0,385.22,99.09Z", 1, "cls-100"], ["d", "M381.29,99h.07a1.92,1.92,0,0,0,.25.12h-.32V99Zm4,0h0v.12h-.12A.24.24,0,0,0,385.33,99Z", 1, "cls-100"], ["d", "M385.34,99h0a0,0,0,0,1,0,0Zm-4,0h-.07v0Zm4,0h0Z", 1, "cls-100"], ["d", "M382.61,98.17a.19.19,0,1,0-.19-.19A.2.2,0,0,0,382.61,98.17Zm-.76,2.46v.25h.77v-.53h.54v-.53h.53v-.53h.53v-.53h.53V98.5H384V99h-.53v.53h-.53v.53h-.54v.53Zm1-1.67a.08.08,0,1,0,.11-.11l-.23-.24v-.15h0v.14l.05.05v-.24a.2.2,0,0,0-.2-.2.18.18,0,0,0-.14.06h0l-.53.53a.07.07,0,0,0,0,.11.07.07,0,0,0,.11,0l.36-.35v.55h.09v.25l-.24.11a.12.12,0,0,0-.06.15.11.11,0,0,0,.15,0l.15-.06V100a.11.11,0,1,0,.22,0v-.46l.11-.06a.1.1,0,0,0,.05-.15l-.15-.19h.08V99l-.26-.27V98.4h0v.32l.25.24Z", 1, "cls-101"], ["d", "M368.48,178.73h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.61-.6v-3A.6.6,0,0,0,368.48,178.73Z", 1, "cls-90"], ["d", "M365.46,183a.61.61,0,0,1-.61-.61v-3a.61.61,0,0,1,.61-.62h3v0h-3a.58.58,0,0,0-.59.59v3a.58.58,0,0,0,.59.59h3a.58.58,0,0,0,.58-.59v-3a.58.58,0,0,0-.58-.59v0h0a.62.62,0,0,1,.61.62v3a.61.61,0,0,1-.61.61Z", 1, "cls-91"], ["d", "M365.13,182.73h3.71a.41.41,0,0,1-.24.08h-3.23a.38.38,0,0,1-.24-.08Z", 1, "cls-92"], ["d", "M365,182.62h3.92a.52.52,0,0,1-.1.11h-3.71a.57.57,0,0,1-.11-.11Z", 1, "cls-92"], ["d", "M365,182.5h4a.61.61,0,0,1-.05.12H365a.61.61,0,0,1,0-.12Z", 1, "cls-93"], ["d", "M365,182.39H369a.36.36,0,0,1,0,.11h-4a.37.37,0,0,1,0-.11Z", 1, "cls-93"], ["points", "364.96 182.27 369.01 182.27 369.01 182.39 364.96 182.39 364.96 182.27", 1, "cls-94"], ["points", "364.96 182.16 369.01 182.16 369.01 182.27 364.96 182.27 364.96 182.16", 1, "cls-94"], ["points", "364.96 182.04 369.01 182.04 369.01 182.16 364.96 182.16 364.96 182.04", 1, "cls-94"], ["points", "364.96 181.93 369.01 181.93 369.01 182.04 364.96 182.04 364.96 181.93", 1, "cls-95"], ["points", "364.96 181.82 369.01 181.82 369.01 181.93 364.96 181.93 364.96 181.82", 1, "cls-95"], ["points", "364.96 181.7 369.01 181.7 369.01 181.82 364.96 181.82 364.96 181.7", 1, "cls-96"], ["points", "364.96 181.59 369.01 181.59 369.01 181.7 364.96 181.7 364.96 181.59", 1, "cls-96"], ["points", "364.96 181.47 369.01 181.47 369.01 181.59 364.96 181.59 364.96 181.47", 1, "cls-96"], ["points", "364.96 181.36 369.01 181.36 369.01 181.47 364.96 181.47 364.96 181.36", 1, "cls-97"], ["points", "364.96 181.24 369.01 181.24 369.01 181.36 364.96 181.36 364.96 181.24", 1, "cls-97"], ["points", "364.96 181.13 369.01 181.13 369.01 181.24 364.96 181.24 364.96 181.13", 1, "cls-98"], ["points", "364.96 181.02 369.01 181.02 369.01 181.13 364.96 181.13 364.96 181.02", 1, "cls-98"], ["points", "364.96 180.9 369.01 180.9 369.01 181.02 364.96 181.02 364.96 180.9", 1, "cls-98"], ["d", "M365,180.79h1.23a6.84,6.84,0,0,0,1.92,0h.9v.11H365Z", 1, "cls-99"], ["d", "M365,180.67h.68a4.44,4.44,0,0,0,.55.12H365Zm3.67,0H369v.12h-.9A2.87,2.87,0,0,0,368.63,180.67Z", 1, "cls-99"], ["d", "M365,180.56h.32l.35.11H365Zm3.93,0H369v.11h-.38A.92.92,0,0,0,368.89,180.56Z", 1, "cls-100"], ["d", "M365,180.45H365l.25.11H365Zm4,0h0v.11h-.12C369,180.52,369,180.49,369,180.45Z", 1, "cls-100"], ["d", "M369,180.45h0s0,0,0,0Zm-4,0H365v0Zm4,0h0Z", 1, "cls-100"], ["d", "M366.28,179.64a.19.19,0,1,0-.19-.19A.2.2,0,0,0,366.28,179.64Zm-.76,2.46v.25h.77v-.53h.54v-.53h.53v-.53h.53v-.53h.53V180h-.78v.53h-.53V181h-.54v.53H366v.53Zm1-1.67a.08.08,0,0,0,.11-.11l-.23-.24v-.15h0v.14l.05.05v-.24a.2.2,0,0,0-.2-.2.17.17,0,0,0-.14.06h0l-.53.53a.07.07,0,0,0,0,.11.07.07,0,0,0,.11,0l.36-.35v.55h.09v.25l-.24.11a.12.12,0,0,0-.06.15.11.11,0,0,0,.15,0l.15-.06v.36a.11.11,0,1,0,.22,0V181l.11,0a.11.11,0,0,0,.05-.16l-.15-.19h.08v-.11l-.26-.27v-.33h0v.32l.25.24Z", 1, "cls-101"], ["d", "M277.54,199.19h-3.62a.72.72,0,0,0-.72.72v3.62a.72.72,0,0,0,.72.72h3.62a.72.72,0,0,0,.72-.72v-3.62A.72.72,0,0,0,277.54,199.19Z", 1, "cls-90"], ["d", "M273.91,204.27a.74.74,0,0,1-.73-.74v-3.62a.73.73,0,0,1,.73-.73h0a.72.72,0,0,0-.7.71v3.62a.71.71,0,0,0,.7.71h3.63a.7.7,0,0,0,.7-.71v-3.62a.71.71,0,0,0-.7-.71h0a.73.73,0,0,1,.73.73v3.62a.74.74,0,0,1-.73.74Z", 1, "cls-91"], ["d", "M273.52,204H278a.45.45,0,0,1-.3.1h-3.84a.47.47,0,0,1-.3-.1Z", 1, "cls-92"], ["d", "M273.39,203.85h4.69a.37.37,0,0,1-.12.13h-4.44A.53.53,0,0,1,273.39,203.85Z", 1, "cls-92"], ["d", "M273.33,203.71h4.82l-.06.14h-4.7Z", 1, "cls-93"], ["d", "M273.32,203.58h4.84a.57.57,0,0,1,0,.13h-4.82a.57.57,0,0,1,0-.13Z", 1, "cls-93"], ["points", "273.32 203.44 278.16 203.44 278.16 203.57 273.32 203.57 273.32 203.44", 1, "cls-94"], ["points", "273.32 203.3 278.16 203.3 278.16 203.44 273.32 203.44 273.32 203.3", 1, "cls-94"], ["points", "273.32 203.16 278.16 203.16 278.16 203.3 273.32 203.3 273.32 203.16", 1, "cls-94"], ["points", "273.32 203.03 278.16 203.03 278.16 203.16 273.32 203.16 273.32 203.03", 1, "cls-95"], ["points", "273.32 202.89 278.16 202.89 278.16 203.03 273.32 203.03 273.32 202.89", 1, "cls-95"], ["points", "273.32 202.75 278.16 202.75 278.16 202.89 273.32 202.89 273.32 202.75", 1, "cls-96"], ["points", "273.32 202.62 278.16 202.62 278.16 202.75 273.32 202.75 273.32 202.62", 1, "cls-96"], ["points", "273.32 202.48 278.16 202.48 278.16 202.61 273.32 202.61 273.32 202.48", 1, "cls-96"], ["points", "273.32 202.34 278.16 202.34 278.16 202.48 273.32 202.48 273.32 202.34", 1, "cls-97"], ["points", "273.32 202.21 278.16 202.21 278.16 202.34 273.32 202.34 273.32 202.21", 1, "cls-97"], ["points", "273.32 202.07 278.16 202.07 278.16 202.21 273.32 202.21 273.32 202.07", 1, "cls-98"], ["points", "273.32 201.93 278.16 201.93 278.16 202.07 273.32 202.07 273.32 201.93", 1, "cls-98"], ["points", "273.32 201.79 278.16 201.79 278.16 201.93 273.32 201.93 273.32 201.79", 1, "cls-98"], ["d", "M273.32,201.66h1.48a7.9,7.9,0,0,0,2.28,0h1.08v.14h-4.84v-.14Z", 1, "cls-99"], ["d", "M273.32,201.52h.81a4.67,4.67,0,0,0,.67.14h-1.48Zm4.39,0h.45v.14h-1.07A3.84,3.84,0,0,0,277.71,201.52Z", 1, "cls-99"], ["d", "M273.32,201.39h.39l.42.13h-.81v-.13Zm4.71,0h.13v.13h-.45A1.41,1.41,0,0,0,278,201.39Z", 1, "cls-100"], ["d", "M273.32,201.25h.08l.31.14h-.39v-.14Zm4.84,0h0v.14H278A.33.33,0,0,0,278.16,201.25Z", 1, "cls-100"], ["d", "M278.16,201.25h0v0Zm-4.76,0h-.08v0Zm4.76,0h0Z", 1, "cls-100"], ["d", "M274.9,200.28a.22.22,0,0,0,.22-.23.22.22,0,0,0-.22-.22.23.23,0,1,0,0,.45Zm-.91,2.95v.3h.93v-.64h.63v-.63h.64v-.64h.63V201h.64v-.31h-.94v.64h-.63V202h-.64v.63h-.63v.64Zm1.18-2a.1.1,0,0,0,.14-.14l-.28-.28v-.18h.05v.16l.06.06v-.27a.25.25,0,0,0-.24-.25.24.24,0,0,0-.17.07h0l-.64.64a.09.09,0,0,0,0,.13.1.1,0,0,0,.14,0l.43-.42v.66h.11v.3l-.29.13a.14.14,0,0,0-.07.18.14.14,0,0,0,.18.06l.18-.08v.44a.13.13,0,0,0,.26,0v-.56l.14-.06a.13.13,0,0,0,.06-.19l-.19-.22h.1v-.14l-.31-.31v-.4h.05v.38l.29.29Z", 1, "cls-101"], ["d", "M265.5,156.3h-3a.61.61,0,0,0-.61.61v3a.6.6,0,0,0,.61.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,265.5,156.3Z", 1, "cls-90"], ["d", "M262.47,160.55a.62.62,0,0,1-.61-.62v-3a.62.62,0,0,1,.61-.62h3v0h-3a.58.58,0,0,0-.58.59v3a.58.58,0,0,0,.58.59h3a.58.58,0,0,0,.59-.59v-3a.58.58,0,0,0-.59-.59v0h0a.61.61,0,0,1,.61.62v3a.61.61,0,0,1-.61.62Z", 1, "cls-91"], ["d", "M262.15,160.31h3.7a.41.41,0,0,1-.25.08h-3.2a.41.41,0,0,1-.25-.08Z", 1, "cls-92"], ["d", "M262,160.19H266a.32.32,0,0,1-.11.12h-3.7a.32.32,0,0,1-.11-.12Z", 1, "cls-92"], ["d", "M262,160.08h4a.37.37,0,0,1-.05.11H262a.37.37,0,0,1-.05-.11Z", 1, "cls-93"], ["d", "M262,160h4a.37.37,0,0,1,0,.11h-4a.37.37,0,0,1,0-.11Z", 1, "cls-93"], ["points", "261.98 159.85 266.02 159.85 266.02 159.97 261.98 159.97 261.98 159.85", 1, "cls-94"], ["points", "261.98 159.74 266.02 159.74 266.02 159.85 261.98 159.85 261.98 159.74", 1, "cls-94"], ["points", "261.98 159.62 266.02 159.62 266.02 159.74 261.98 159.74 261.98 159.62", 1, "cls-94"], ["points", "261.98 159.51 266.02 159.51 266.02 159.62 261.98 159.62 261.98 159.51", 1, "cls-95"], ["points", "261.98 159.39 266.02 159.39 266.02 159.51 261.98 159.51 261.98 159.39", 1, "cls-95"], ["points", "261.98 159.28 266.02 159.28 266.02 159.39 261.98 159.39 261.98 159.28", 1, "cls-96"], ["points", "261.98 159.17 266.02 159.17 266.02 159.28 261.98 159.28 261.98 159.17", 1, "cls-96"], ["points", "261.98 159.05 266.02 159.05 266.02 159.17 261.98 159.17 261.98 159.05", 1, "cls-96"], ["points", "261.98 158.94 266.02 158.94 266.02 159.05 261.98 159.05 261.98 158.94", 1, "cls-97"], ["points", "261.98 158.82 266.02 158.82 266.02 158.94 261.98 158.94 261.98 158.82", 1, "cls-97"], ["points", "261.98 158.71 266.02 158.71 266.02 158.82 261.98 158.82 261.98 158.71", 1, "cls-98"], ["points", "261.98 158.59 266.02 158.59 266.02 158.71 261.98 158.71 261.98 158.59", 1, "cls-98"], ["points", "261.98 158.48 266.02 158.48 266.02 158.59 261.98 158.59 261.98 158.48", 1, "cls-98"], ["d", "M262,158.37h1.23a6.77,6.77,0,0,0,1.91,0h.9v.11h-4v-.11Z", 1, "cls-99"], ["d", "M262,158.25h.68a4.88,4.88,0,0,0,.55.12H262Zm3.67,0H266v.12h-.9A3.22,3.22,0,0,0,265.65,158.25Z", 1, "cls-99"], ["d", "M262,158.14h.32l.36.11H262v-.11Zm3.93,0H266v.11h-.37A.92.92,0,0,0,265.91,158.14Z", 1, "cls-100"], ["d", "M262,158H262l.26.11H262Zm4,0h0v.11h-.11A.37.37,0,0,0,266,158Z", 1, "cls-100"], ["d", "M266,158h0v0Zm-4,0H262v0Zm4,0h0Z", 1, "cls-100"], ["d", "M263.3,157.21a.18.18,0,0,0,.18-.18.18.18,0,0,0-.18-.19.18.18,0,0,0-.19.19A.18.18,0,0,0,263.3,157.21Zm-.77,2.47v.25h.78v-.53h.53v-.53h.53v-.53h.54v-.53h.53v-.26h-.79v.54h-.53v.53h-.53v.53h-.53v.53Zm1-1.67a.08.08,0,0,0,.12-.12,2.28,2.28,0,0,1-.23-.23v-.16h0v.14l.05.05v-.23a.2.2,0,0,0-.2-.2.17.17,0,0,0-.14.06l-.54.53a.08.08,0,0,0,0,.11.09.09,0,0,0,.12,0l.35-.35v.55h.1v.25l-.24.11a.12.12,0,0,0-.06.15.11.11,0,0,0,.15.05l.15-.07V159a.11.11,0,0,0,.22,0v-.46l.11-.06a.11.11,0,0,0,.05-.16l-.16-.18h.09v-.11l-.26-.27v-.33h0v.32c.05,0,.21.21.24.24Z", 1, "cls-101"], ["d", "M287.7,139.69h-3.62a.72.72,0,0,0-.72.72V144a.72.72,0,0,0,.72.72h3.62a.72.72,0,0,0,.72-.72v-3.63A.72.72,0,0,0,287.7,139.69Z", 1, "cls-90"], ["d", "M284.08,144.77a.73.73,0,0,1-.73-.73v-3.63a.73.73,0,0,1,.73-.73h3.62v0h-3.62a.7.7,0,0,0-.7.7V144a.7.7,0,0,0,.7.7h3.62a.7.7,0,0,0,.71-.7v-3.63a.7.7,0,0,0-.71-.7v0h0a.74.74,0,0,1,.74.73V144a.74.74,0,0,1-.74.73Z", 1, "cls-91"], ["d", "M283.68,144.49h4.45a.55.55,0,0,1-.31.1H284A.55.55,0,0,1,283.68,144.49Z", 1, "cls-92"], ["d", "M283.56,144.35h4.69a.4.4,0,0,1-.13.13h-4.44A.37.37,0,0,1,283.56,144.35Z", 1, "cls-92"], ["d", "M283.5,144.21h4.81a.59.59,0,0,1-.06.14h-4.69a.35.35,0,0,1-.06-.14Z", 1, "cls-93"], ["d", "M283.48,144.08h4.85a.51.51,0,0,1,0,.13H283.5a.27.27,0,0,1,0-.13Z", 1, "cls-93"], ["points", "283.48 143.94 288.33 143.94 288.33 144.08 283.48 144.08 283.48 143.94", 1, "cls-94"], ["points", "283.48 143.8 288.33 143.8 288.33 143.94 283.48 143.94 283.48 143.8", 1, "cls-94"], ["points", "283.48 143.66 288.33 143.66 288.33 143.8 283.48 143.8 283.48 143.66", 1, "cls-94"], ["points", "283.48 143.53 288.33 143.53 288.33 143.66 283.48 143.66 283.48 143.53", 1, "cls-95"], ["points", "283.48 143.39 288.33 143.39 288.33 143.53 283.48 143.53 283.48 143.39", 1, "cls-95"], ["points", "283.48 143.26 288.33 143.26 288.33 143.39 283.48 143.39 283.48 143.26", 1, "cls-96"], ["points", "283.48 143.12 288.33 143.12 288.33 143.26 283.48 143.26 283.48 143.12", 1, "cls-96"], ["points", "283.48 142.98 288.33 142.98 288.33 143.12 283.48 143.12 283.48 142.98", 1, "cls-96"], ["points", "283.48 142.85 288.33 142.85 288.33 142.98 283.48 142.98 283.48 142.85", 1, "cls-97"], ["points", "283.48 142.71 288.33 142.71 288.33 142.85 283.48 142.85 283.48 142.71", 1, "cls-97"], ["points", "283.48 142.57 288.33 142.57 288.33 142.71 283.48 142.71 283.48 142.57", 1, "cls-98"], ["points", "283.48 142.44 288.33 142.44 288.33 142.57 283.48 142.57 283.48 142.44", 1, "cls-98"], ["points", "283.48 142.3 288.33 142.3 288.33 142.44 283.48 142.44 283.48 142.3", 1, "cls-98"], ["d", "M283.48,142.16H285a8,8,0,0,0,2.29,0h1.08v.14h-4.85Z", 1, "cls-99"], ["d", "M283.48,142h.81c.22.05.44.1.67.13h-1.48Zm4.39,0h.46v.13h-1.08a3.92,3.92,0,0,0,.62-.13Z", 1, "cls-99"], ["d", "M283.48,141.89h.39l.42.13h-.81Zm4.71,0h.14V142h-.46A1.24,1.24,0,0,0,288.19,141.89Z", 1, "cls-100"], ["d", "M283.48,141.75h.08l.31.14h-.39Zm4.84,0h0v.14h-.14A.33.33,0,0,0,288.32,141.75Z", 1, "cls-100"], ["d", "M288.33,141.72h0Zm0,0h0v0Zm-4.77,0h-.08v0Z", 1, "cls-100"], ["d", "M285.06,140.78a.23.23,0,1,0-.22-.22A.22.22,0,0,0,285.06,140.78Zm-.91,2.95v.3h.93v-.63h.64v-.64h.63v-.64H287v-.63h.63v-.3h-.93v.63h-.64v.64h-.63v.64h-.64v.63Zm1.18-2a.11.11,0,0,0,.14,0,.1.1,0,0,0,0-.14l-.28-.28v-.19h.05v.17l.06.06v-.28a.23.23,0,0,0-.24-.24.27.27,0,0,0-.17.06h0l-.63.64a.1.1,0,0,0,0,.14.09.09,0,0,0,.13,0l.43-.43v.66h.11v.31l-.29.13a.13.13,0,0,0,.11.24l.18-.08v.43a.13.13,0,0,0,.26,0v-.55l.14-.07a.13.13,0,0,0,.06-.19l-.19-.22h.1v-.13l-.31-.32v-.4H285v.38l.29.29Z", 1, "cls-101"], ["d", "M331.92,175.76h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,331.92,175.76Z", 1, "cls-90"], ["d", "M328.9,180a.61.61,0,0,1-.62-.61v-3a.61.61,0,0,1,.62-.61h0a.58.58,0,0,0-.59.59v3a.6.6,0,0,0,.59.59h3a.6.6,0,0,0,.59-.59v-3a.58.58,0,0,0-.59-.59h0a.61.61,0,0,1,.61.61v3a.61.61,0,0,1-.61.61Z", 1, "cls-91"], ["d", "M328.56,179.76h3.71a.45.45,0,0,1-.25.09h-3.2A.45.45,0,0,1,328.56,179.76Z", 1, "cls-92"], ["d", "M328.46,179.65h3.92a.57.57,0,0,1-.11.11h-3.71A.52.52,0,0,1,328.46,179.65Z", 1, "cls-92"], ["d", "M328.41,179.53h4a.61.61,0,0,1-.05.12h-3.92A.61.61,0,0,1,328.41,179.53Z", 1, "cls-93"], ["d", "M328.39,179.42h4.05a.37.37,0,0,1,0,.11h-4a.36.36,0,0,1,0-.11Z", 1, "cls-93"], ["points", "328.39 179.31 332.44 179.31 332.44 179.42 328.39 179.42 328.39 179.31", 1, "cls-94"], ["points", "328.39 179.19 332.44 179.19 332.44 179.31 328.39 179.31 328.39 179.19", 1, "cls-94"], ["points", "328.39 179.07 332.44 179.07 332.44 179.19 328.39 179.19 328.39 179.07", 1, "cls-94"], ["points", "328.39 178.96 332.44 178.96 332.44 179.07 328.39 179.07 328.39 178.96", 1, "cls-95"], ["points", "328.39 178.85 332.44 178.85 332.44 178.96 328.39 178.96 328.39 178.85", 1, "cls-95"], ["points", "328.39 178.73 332.44 178.73 332.44 178.85 328.39 178.85 328.39 178.73", 1, "cls-96"], ["points", "328.39 178.62 332.44 178.62 332.44 178.73 328.39 178.73 328.39 178.62", 1, "cls-96"], ["points", "328.39 178.51 332.44 178.51 332.44 178.62 328.39 178.62 328.39 178.51", 1, "cls-96"], ["points", "328.39 178.39 332.44 178.39 332.44 178.51 328.39 178.51 328.39 178.39", 1, "cls-97"], ["points", "328.39 178.28 332.44 178.28 332.44 178.39 328.39 178.39 328.39 178.28", 1, "cls-97"], ["points", "328.39 178.16 332.44 178.16 332.44 178.28 328.39 178.28 328.39 178.16", 1, "cls-98"], ["points", "328.39 178.05 332.44 178.05 332.44 178.16 328.39 178.16 328.39 178.05", 1, "cls-98"], ["points", "328.39 177.93 332.44 177.93 332.44 178.05 328.39 178.05 328.39 177.93", 1, "cls-98"], ["d", "M328.39,177.82h1.25a6.7,6.7,0,0,0,1.9,0h.9v.11h-4.05Z", 1, "cls-99"], ["d", "M328.39,177.71h.68l.56.11h-1.24Zm3.67,0h.38v.11h-.9A4.22,4.22,0,0,0,332.06,177.71Z", 1, "cls-99"], ["d", "M328.39,177.59h.33a3.59,3.59,0,0,0,.35.12h-.68v-.12Zm3.94,0h.11v.12h-.38Z", 1, "cls-100"], ["d", "M328.39,177.48h.07l.26.11h-.33Zm4.05,0h0v.11h-.11A.29.29,0,0,0,332.44,177.48Z", 1, "cls-100"], ["d", "M332.44,177.48h0v0Zm-4,0h-.07v0Zm4,0h0Z", 1, "cls-100"], ["d", "M329.71,176.67a.18.18,0,0,0,.19-.19.19.19,0,1,0-.37,0A.18.18,0,0,0,329.71,176.67Zm-.76,2.46v.25h.78v-.53h.53v-.53h.53v-.53h.53v-.53h.54V177h-.79v.53h-.53v.53H330v.53h-.53v.53Zm1-1.67a.07.07,0,0,0,.12,0,.08.08,0,0,0,0-.11l-.23-.23V177h0v.14l.05.05v-.23a.21.21,0,0,0-.21-.21.25.25,0,0,0-.14.06l-.53.53a.08.08,0,1,0,.12.12l.35-.36v.55h.1v.26l-.25.11a.1.1,0,0,0-.05.14.11.11,0,0,0,.15.06.72.72,0,0,1,.15-.07v.36a.1.1,0,0,0,.1.11.11.11,0,0,0,.12-.11V178l.11,0a.12.12,0,0,0,.05-.16l-.16-.19h.09v-.11l-.26-.26v-.33h0v.31l.24.24Z", 1, "cls-101"], ["d", "M34.5,69.65l1.16,1.49-.06.37h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.11h0V72h0v.1h0c0,.28-.08.56-.11.81h0c0,.28-.07.54-.1.77h0v0h0v0h-.05v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0V75h0v.11h0v0h0v0h0v0h0v0h0v0h0v0h0v.07h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.09h0v0h0v0h0v0h0v0h0v0h0v.49h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.1h0V77h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.11h0v.11h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.06h0v0h0v0h0v0h0v.08h0v0h0v0h0v.06h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.07h0v0h0v.14h0v.11h0v0h0v0h0v.07h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.1h0v0h0v0h0v0h0v0h0v.07h0v.06h0v0h0V82h0v0h0v0h0L34,80.71h0v0h0v0h0v0h0v-.06h0v-.16h0v-.15h0v-.36h0v-.11h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-.13h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-.06c0-.37,0-.68,0-.89v-.1h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-.07h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-.1h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-.07h0c0-.12,0-.24,0-.37h0c0-.07,0-.13,0-.21h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0-.23c0-.14,0-.29.07-.44h0v0c0-.16,0-.32.08-.48Z", 1, "cls-3"], ["d", "M34,80.72l1.17,1.45s0,.09,0,.14h0c0,.16,0,.34,0,.52V83h0v0h0v.09h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v.08h0v.08h0c0,.24-.07.49-.11.75h0v0h0v0h0v.12h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0l-1.18-1.45c0-.29.1-.58.14-.87s.09-.57.13-.84.08-.53.1-.78,0-.22,0-.32h0v0h0v0h0a.31.31,0,0,1,0-.1Z", 1, "cls-3"], ["d", "M33.52,83.86,34.7,85.3v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,.15h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,.2h0v0h0v.09h0v0h0v0h0v0h0v0h0v0h0v0h0l0,.24h0l0,.12h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0L33,86.58h0c0-.09,0-.22.08-.39v-.07h0c0-.13.05-.28.08-.44h0v0h0l.09-.47h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0-.11h0l.09-.47Z", 1, "cls-2"], ["points", "33.01 86.58 34.19 88.02 33.74 90.29 32.55 88.86 33.01 86.58", 1, "cls-1"], ["points", "70.83 79.09 71.28 80.72 71.03 83.48 70.58 81.86 70.83 79.09", 1, "cls-51"], ["points", "70.58 81.86 71.03 83.48 51.57 83.47 51.04 81.85 70.58 81.86", 1, "cls-51"], ["points", "70.83 79.09 70.58 81.86 51.04 81.85 54.24 79.1 70.83 79.09", 1, "cls-52"], ["points", "70.82 82.47 71.26 84.1 71.01 86.86 70.57 85.23 70.82 82.47", 1, "cls-51"], ["points", "70.57 85.23 71.01 86.86 49.39 86.84 48.85 85.23 70.57 85.23", 1, "cls-51"], ["points", "70.82 82.47 70.57 85.23 48.85 85.23 51.28 82.79 51.47 82.62 51.53 82.54 70.82 82.47", 1, "cls-52"], ["points", "65.22 62.41 65.63 64.07 64.41 78.46 63.99 76.86 65.22 62.41", 1, "cls-51"], ["points", "63.99 76.86 64.41 78.46 33.65 78.38 33.09 76.79 63.99 76.86", 1, "cls-51"], ["points", "53.85 59.98 65.22 62.41 63.99 76.86 33.09 76.78 34.65 63.23 53.85 59.98", 1, "cls-52"], ["d", "M51.93,65.33h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,51.93,65.33Z", 1, "cls-90"], ["d", "M48.91,69.57a.61.61,0,0,1-.62-.61v-3a.61.61,0,0,1,.62-.61h0a.59.59,0,0,0-.59.59v3a.6.6,0,0,0,.59.59h3a.6.6,0,0,0,.59-.59v-3a.59.59,0,0,0-.59-.59h0a.61.61,0,0,1,.62.61v3a.61.61,0,0,1-.62.61Z", 1, "cls-91"], ["d", "M48.58,69.33h3.7a.37.37,0,0,1-.25.09h-3.2a.37.37,0,0,1-.25-.09Z", 1, "cls-92"], ["d", "M48.47,69.22h3.92a.38.38,0,0,1-.11.11h-3.7a.38.38,0,0,1-.11-.11Z", 1, "cls-92"], ["d", "M48.42,69.11h4a.54.54,0,0,1,0,.11H48.47A.54.54,0,0,1,48.42,69.11Z", 1, "cls-93"], ["d", "M48.41,69h4a.37.37,0,0,1,0,.11h-4a.37.37,0,0,1,0-.11Z", 1, "cls-93"], ["points", "48.41 68.88 52.45 68.88 52.45 68.99 48.41 68.99 48.41 68.88", 1, "cls-94"], ["points", "48.41 68.76 52.45 68.76 52.45 68.88 48.41 68.88 48.41 68.76", 1, "cls-94"], ["points", "48.41 68.65 52.45 68.65 52.45 68.76 48.41 68.76 48.41 68.65", 1, "cls-94"], ["points", "48.41 68.53 52.45 68.53 52.45 68.65 48.41 68.65 48.41 68.53", 1, "cls-95"], ["points", "48.41 68.42 52.45 68.42 52.45 68.53 48.41 68.53 48.41 68.42", 1, "cls-95"], ["points", "48.41 68.31 52.45 68.31 52.45 68.42 48.41 68.42 48.41 68.31", 1, "cls-96"], ["points", "48.41 68.19 52.45 68.19 52.45 68.31 48.41 68.31 48.41 68.19", 1, "cls-96"], ["points", "48.41 68.08 52.45 68.08 52.45 68.19 48.41 68.19 48.41 68.08", 1, "cls-96"], ["points", "48.41 67.96 52.45 67.96 52.45 68.08 48.41 68.08 48.41 67.96", 1, "cls-97"], ["points", "48.41 67.85 52.45 67.85 52.45 67.96 48.41 67.96 48.41 67.85", 1, "cls-97"], ["points", "48.41 67.74 52.45 67.74 52.45 67.85 48.41 67.85 48.41 67.74", 1, "cls-98"], ["points", "48.41 67.62 52.45 67.62 52.45 67.74 48.41 67.74 48.41 67.62", 1, "cls-98"], ["points", "48.41 67.51 52.45 67.51 52.45 67.62 48.41 67.62 48.41 67.51", 1, "cls-98"], ["d", "M48.41,67.39h1.23a6.84,6.84,0,0,0,1.92,0h.89v.12h-4v-.12Z", 1, "cls-99"], ["d", "M48.41,67.28h.68a3.15,3.15,0,0,0,.55.11H48.41Zm3.66,0h.38v.11h-.89A4,4,0,0,0,52.07,67.28Z", 1, "cls-99"], ["d", "M48.41,67.16h.32l.36.12h-.68Zm3.93,0h.11v.12h-.38a1.18,1.18,0,0,0,.27-.12Z", 1, "cls-100"], ["d", "M48.41,67.05h.06l.26.11h-.32Zm4,0h0v.11h-.11A.19.19,0,0,0,52.45,67.05Z", 1, "cls-100"], ["d", "M52.45,67h0Zm0,0h0v0Zm-4,0h-.06v0Z", 1, "cls-100"], ["d", "M49.73,66.24a.18.18,0,0,0,.18-.19.19.19,0,1,0-.37,0A.18.18,0,0,0,49.73,66.24ZM49,68.7V69h.78v-.53h.53v-.53h.53v-.53h.54v-.53h.53v-.25h-.79v.53h-.53v.53H50v.53h-.53v.53ZM50,67a.08.08,0,0,0,.12,0,.09.09,0,0,0,0-.12l-.23-.23v-.16h0v.14l0,0v-.23a.2.2,0,0,0-.34-.15l-.53.53a.08.08,0,0,0,0,.12.09.09,0,0,0,.12,0l.35-.36v.55h.1v.26l-.24.11a.11.11,0,0,0-.06.14.12.12,0,0,0,.15.06l.15-.07V68a.11.11,0,0,0,.22,0v-.46l.11,0a.11.11,0,0,0,0-.16l-.15-.19h.08v-.11l-.26-.26v-.33h0v.31L50,67Z", 1, "cls-101"], ["d", "M189.76,72.45h-3a.6.6,0,0,0-.6.6v3a.59.59,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,189.76,72.45Z", 1, "cls-90"], ["d", "M186.74,76.69a.61.61,0,0,1-.61-.62v-3a.61.61,0,0,1,.61-.61h0a.58.58,0,0,0-.59.59v3a.58.58,0,0,0,.59.59h3a.58.58,0,0,0,.58-.59v-3a.58.58,0,0,0-.58-.59h0a.61.61,0,0,1,.61.61v3a.62.62,0,0,1-.61.62Z", 1, "cls-91"], ["d", "M186.41,76.45h3.7a.41.41,0,0,1-.25.08h-3.2a.44.44,0,0,1-.25-.08Z", 1, "cls-92"], ["d", "M186.3,76.34h3.92a.38.38,0,0,1-.11.11h-3.7Z", 1, "cls-92"], ["d", "M186.25,76.22h4a.37.37,0,0,1-.05.11H186.3a.37.37,0,0,1-.05-.11Z", 1, "cls-93"], ["d", "M186.24,76.11h4a.37.37,0,0,1,0,.11h-4a.37.37,0,0,1,0-.11Z", 1, "cls-93"], ["points", "186.24 75.99 190.28 75.99 190.28 76.11 186.24 76.11 186.24 75.99", 1, "cls-94"], ["points", "186.24 75.88 190.28 75.88 190.28 75.99 186.24 75.99 186.24 75.88", 1, "cls-94"], ["points", "186.24 75.76 190.28 75.76 190.28 75.88 186.24 75.88 186.24 75.76", 1, "cls-94"], ["points", "186.24 75.65 190.28 75.65 190.28 75.76 186.24 75.76 186.24 75.65", 1, "cls-95"], ["points", "186.24 75.54 190.28 75.54 190.28 75.65 186.24 75.65 186.24 75.54", 1, "cls-95"], ["points", "186.24 75.42 190.28 75.42 190.28 75.54 186.24 75.54 186.24 75.42", 1, "cls-96"], ["points", "186.24 75.31 190.28 75.31 190.28 75.42 186.24 75.42 186.24 75.31", 1, "cls-96"], ["points", "186.24 75.19 190.28 75.19 190.28 75.31 186.24 75.31 186.24 75.19", 1, "cls-96"], ["points", "186.24 75.08 190.28 75.08 190.28 75.19 186.24 75.19 186.24 75.08", 1, "cls-97"], ["points", "186.24 74.96 190.28 74.96 190.28 75.08 186.24 75.08 186.24 74.96", 1, "cls-97"], ["points", "186.24 74.85 190.28 74.85 190.28 74.96 186.24 74.96 186.24 74.85", 1, "cls-98"], ["points", "186.24 74.74 190.28 74.74 190.28 74.85 186.24 74.85 186.24 74.74", 1, "cls-98"], ["points", "186.24 74.62 190.28 74.62 190.28 74.74 186.24 74.74 186.24 74.62", 1, "cls-98"], ["d", "M186.24,74.51h1.23a6.77,6.77,0,0,0,1.91,0h.9v.11h-4Z", 1, "cls-99"], ["d", "M186.24,74.39h.68a4.44,4.44,0,0,0,.55.12h-1.23Zm3.66,0h.38v.12h-.89a2.75,2.75,0,0,0,.51-.12Z", 1, "cls-99"], ["d", "M186.24,74.28h.32l.36.12h-.68Zm3.93,0h.11v.12h-.38a1.18,1.18,0,0,0,.27-.12Z", 1, "cls-100"], ["d", "M186.24,74.17h.07l.25.11h-.32Zm4,0h0v.11h-.11a.23.23,0,0,0,.11-.11Z", 1, "cls-100"], ["d", "M190.28,74.17h0v0Zm-4,0h-.07v0Zm4,0h0Z", 1, "cls-100"], ["d", "M187.56,73.36a.19.19,0,0,0,0-.38.19.19,0,0,0,0,.38Zm-.76,2.46v.25h.77v-.53h.53V75h.54v-.53h.53V74h.53V73.7h-.78v.53h-.54v.53h-.53v.53h-.53v.53Zm1-1.67a.08.08,0,0,0,.11-.11l-.23-.24v-.15h0v.14l0,0V73.6a.2.2,0,0,0-.2-.2.17.17,0,0,0-.14.06h0l-.53.53a.07.07,0,0,0,0,.12.08.08,0,0,0,.11,0l.36-.36v.55h.09v.26l-.24.1a.12.12,0,0,0-.06.15.11.11,0,0,0,.15,0l.15-.06v.36a.11.11,0,1,0,.22,0V74.7l.11,0a.11.11,0,0,0,.05-.16l-.15-.19h.08v-.11l-.26-.26v-.34h0v.32l.25.24Z", 1, "cls-101"], ["d", "M232.8,90.57h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,232.8,90.57Z", 1, "cls-90"], ["d", "M229.77,94.8a.61.61,0,0,1-.61-.61v-3a.62.62,0,0,1,.61-.61h3v0h-3a.58.58,0,0,0-.58.58v3a.58.58,0,0,0,.58.59h3a.59.59,0,0,0,.59-.59v-3a.59.59,0,0,0-.59-.58v0h0a.61.61,0,0,1,.61.61v3a.61.61,0,0,1-.61.61Z", 1, "cls-91"], ["d", "M229.44,94.57h3.71a.44.44,0,0,1-.25.08h-3.2A.47.47,0,0,1,229.44,94.57Z", 1, "cls-92"], ["d", "M229.34,94.45h3.92a.43.43,0,0,1-.11.12h-3.71A.4.4,0,0,1,229.34,94.45Z", 1, "cls-92"], ["d", "M229.29,94.34h4a.37.37,0,0,1-.05.11h-3.92a.37.37,0,0,1-.05-.11Z", 1, "cls-93"], ["d", "M229.27,94.23h4a.41.41,0,0,1,0,.11h-4a.43.43,0,0,1,0-.11Z", 1, "cls-93"], ["points", "229.28 94.11 233.32 94.11 233.32 94.23 229.28 94.23 229.28 94.11", 1, "cls-94"], ["points", "229.28 94 233.32 94 233.32 94.11 229.28 94.11 229.28 94", 1, "cls-94"], ["points", "229.28 93.88 233.32 93.88 233.32 94 229.28 94 229.28 93.88", 1, "cls-94"], ["points", "229.28 93.77 233.32 93.77 233.32 93.88 229.28 93.88 229.28 93.77", 1, "cls-95"], ["points", "229.28 93.66 233.32 93.66 233.32 93.77 229.28 93.77 229.28 93.66", 1, "cls-95"], ["points", "229.28 93.54 233.32 93.54 233.32 93.66 229.28 93.66 229.28 93.54", 1, "cls-96"], ["points", "229.28 93.43 233.32 93.43 233.32 93.54 229.28 93.54 229.28 93.43", 1, "cls-96"], ["points", "229.28 93.31 233.32 93.31 233.32 93.43 229.28 93.43 229.28 93.31", 1, "cls-96"], ["points", "229.28 93.2 233.32 93.2 233.32 93.31 229.28 93.31 229.28 93.2", 1, "cls-97"], ["points", "229.28 93.08 233.32 93.08 233.32 93.2 229.28 93.2 229.28 93.08", 1, "cls-97"], ["points", "229.28 92.97 233.32 92.97 233.32 93.08 229.28 93.08 229.28 92.97", 1, "cls-98"], ["points", "229.28 92.85 233.32 92.85 233.32 92.97 229.28 92.97 229.28 92.85", 1, "cls-98"], ["points", "229.28 92.74 233.32 92.74 233.32 92.86 229.28 92.86 229.28 92.74", 1, "cls-98"], ["d", "M229.27,92.63h1.24a7.17,7.17,0,0,0,1.91,0h.9v.11h-4Z", 1, "cls-99"], ["d", "M229.27,92.51H230a4.44,4.44,0,0,0,.55.12h-1.24Zm3.67,0h.38v.12h-.9A2.87,2.87,0,0,0,232.94,92.51Z", 1, "cls-99"], ["d", "M229.27,92.4h.33l.36.11h-.69Zm3.94,0h.11v.11h-.38A1.16,1.16,0,0,0,233.21,92.4Z", 1, "cls-100"], ["d", "M229.27,92.28h.07a2.06,2.06,0,0,0,.26.12h-.33Zm4,0h0v.12h-.11A.3.3,0,0,0,233.32,92.28Z", 1, "cls-100"], ["d", "M233.32,92.26h0Zm0,0h0v0Zm-4,0h-.07v0Z", 1, "cls-100"], ["d", "M230.6,91.47a.18.18,0,0,0,.18-.18.18.18,0,0,0-.18-.19.18.18,0,0,0-.19.19A.18.18,0,0,0,230.6,91.47Zm-.77,2.47v.25h.78v-.53h.53v-.53h.53v-.54h.53v-.53h.53v-.25H232v.53h-.53v.54h-.53v.53h-.53v.53Zm1-1.67a.08.08,0,1,0,.12-.12s-.13-.12-.23-.23v-.16h0v.14l.05,0v-.23a.2.2,0,0,0-.2-.2.2.2,0,0,0-.15.06h0l-.53.53a.08.08,0,0,0,0,.11.09.09,0,0,0,.12,0s.22-.21.35-.35v.55h.1v.25l-.24.11a.12.12,0,0,0-.06.15.11.11,0,0,0,.15,0l.15-.07v.37a.11.11,0,0,0,.22,0v-.47l.11,0a.11.11,0,0,0,.05-.16l-.16-.18h.09V92.3l-.26-.26v-.33h0V92l.24.24Z", 1, "cls-101"], ["d", "M23.8,115.09h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,23.8,115.09Z", 1, "cls-90"], ["d", "M20.77,119.33a.62.62,0,0,1-.61-.62v-3a.62.62,0,0,1,.61-.62h3v0h-3a.58.58,0,0,0-.58.59v3a.58.58,0,0,0,.58.59h3a.58.58,0,0,0,.59-.59v-3a.58.58,0,0,0-.59-.59h0v0a.61.61,0,0,1,.61.62v3a.61.61,0,0,1-.61.62Z", 1, "cls-91"], ["d", "M20.44,119.09h3.71a.38.38,0,0,1-.24.08H20.68A.41.41,0,0,1,20.44,119.09Z", 1, "cls-92"], ["d", "M20.34,119h3.92a.57.57,0,0,1-.11.11H20.44A.52.52,0,0,1,20.34,119Z", 1, "cls-92"], ["d", "M20.29,118.86h4a.61.61,0,0,1,0,.12H20.34A.61.61,0,0,1,20.29,118.86Z", 1, "cls-93"], ["d", "M20.27,118.75h4.05a.41.41,0,0,1,0,.11h-4a.43.43,0,0,1,0-.11Z", 1, "cls-93"], ["points", "20.27 118.63 24.32 118.63 24.32 118.75 20.27 118.75 20.27 118.63", 1, "cls-94"], ["points", "20.27 118.52 24.32 118.52 24.32 118.63 20.27 118.63 20.27 118.52", 1, "cls-94"], ["points", "20.27 118.41 24.32 118.41 24.32 118.52 20.27 118.52 20.27 118.41", 1, "cls-94"], ["points", "20.27 118.29 24.32 118.29 24.32 118.4 20.27 118.4 20.27 118.29", 1, "cls-95"], ["points", "20.27 118.18 24.32 118.18 24.32 118.29 20.27 118.29 20.27 118.18", 1, "cls-95"], ["points", "20.27 118.06 24.32 118.06 24.32 118.18 20.27 118.18 20.27 118.06", 1, "cls-96"], ["points", "20.27 117.95 24.32 117.95 24.32 118.06 20.27 118.06 20.27 117.95", 1, "cls-96"], ["points", "20.27 117.83 24.32 117.83 24.32 117.95 20.27 117.95 20.27 117.83", 1, "cls-96"], ["points", "20.27 117.72 24.32 117.72 24.32 117.83 20.27 117.83 20.27 117.72", 1, "cls-97"], ["points", "20.27 117.61 24.32 117.61 24.32 117.72 20.27 117.72 20.27 117.61", 1, "cls-97"], ["points", "20.27 117.49 24.32 117.49 24.32 117.61 20.27 117.61 20.27 117.49", 1, "cls-98"], ["points", "20.27 117.38 24.32 117.38 24.32 117.49 20.27 117.49 20.27 117.38", 1, "cls-98"], ["points", "20.27 117.26 24.32 117.26 24.32 117.38 20.27 117.38 20.27 117.26", 1, "cls-98"], ["d", "M20.27,117.15h1.24a6.77,6.77,0,0,0,1.91,0h.9v.11H20.27Z", 1, "cls-99"], ["d", "M20.27,117H21a5.05,5.05,0,0,0,.56.12H20.27Zm3.67,0h.38v.12h-.9A2.87,2.87,0,0,0,23.94,117Z", 1, "cls-99"], ["d", "M20.27,116.92h.33L21,117h-.68Zm3.94,0h.11V117h-.38A1.16,1.16,0,0,0,24.21,116.92Z", 1, "cls-100"], ["d", "M20.27,116.81h.07l.26.11h-.33v-.11Zm4.05,0h0v.11h-.11A.29.29,0,0,0,24.32,116.81Z", 1, "cls-100"], ["d", "M24.32,116.81h0v0Zm-4,0h-.07v0h0Zm4,0h0Z", 1, "cls-100"], ["d", "M21.59,116a.19.19,0,1,0-.18-.19A.19.19,0,0,0,21.59,116Zm-.76,2.46v.25h.78v-.53h.53v-.53h.53v-.53h.53v-.53h.53v-.26H23v.54h-.53v.53h-.53v.53h-.53v.53Zm1-1.67a.09.09,0,0,0,.12,0,.08.08,0,0,0,0-.11l-.24-.24v-.15h.05v.14l.05,0v-.24a.2.2,0,0,0-.21-.2.2.2,0,0,0-.14.06h0c0,.05-.49.5-.53.53a.08.08,0,0,0,0,.11.08.08,0,0,0,.12,0s.22-.21.35-.35v.55h.09v.25l-.24.11a.11.11,0,0,0,0,.15.1.1,0,0,0,.14,0l.15-.06v.36a.11.11,0,0,0,.11.11.1.1,0,0,0,.11-.11v-.46l.12-.06a.11.11,0,0,0,.05-.15l-.16-.19h.09v-.11l-.26-.27v-.33h0v.32l.24.24Z", 1, "cls-101"], ["d", "M75,120H72a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,75,120Z", 1, "cls-90"], ["d", "M72,124.27a.61.61,0,0,1-.61-.61v-3A.61.61,0,0,1,72,120h0a.59.59,0,0,0-.59.59v3a.59.59,0,0,0,.59.59h3a.59.59,0,0,0,.58-.59v-3A.59.59,0,0,0,75,120h0a.61.61,0,0,1,.61.61v3a.61.61,0,0,1-.61.61Z", 1, "cls-91"], ["d", "M71.62,124h3.71a.39.39,0,0,1-.26.09h-3.2A.38.38,0,0,1,71.62,124Z", 1, "cls-92"], ["d", "M71.51,123.92h3.92a.52.52,0,0,1-.1.11H71.62A.57.57,0,0,1,71.51,123.92Z", 1, "cls-92"], ["d", "M71.46,123.81h4a.54.54,0,0,1,0,.11H71.51l-.05-.11Z", 1, "cls-93"], ["d", "M71.45,123.69h4a.36.36,0,0,1,0,.11h-4a.37.37,0,0,1,0-.11Z", 1, "cls-93"], ["points", "71.45 123.58 75.5 123.58 75.5 123.69 71.45 123.69 71.45 123.58", 1, "cls-94"], ["points", "71.45 123.46 75.5 123.46 75.5 123.58 71.45 123.58 71.45 123.46", 1, "cls-94"], ["points", "71.45 123.35 75.5 123.35 75.5 123.46 71.45 123.46 71.45 123.35", 1, "cls-94"], ["points", "71.45 123.23 75.5 123.23 75.5 123.35 71.45 123.35 71.45 123.23", 1, "cls-95"], ["points", "71.45 123.12 75.5 123.12 75.5 123.23 71.45 123.23 71.45 123.12", 1, "cls-95"], ["points", "71.45 123.01 75.5 123.01 75.5 123.12 71.45 123.12 71.45 123.01", 1, "cls-96"], ["points", "71.45 122.89 75.5 122.89 75.5 123.01 71.45 123.01 71.45 122.89", 1, "cls-96"], ["points", "71.45 122.78 75.5 122.78 75.5 122.89 71.45 122.89 71.45 122.78", 1, "cls-96"], ["points", "71.45 122.66 75.5 122.66 75.5 122.78 71.45 122.78 71.45 122.66", 1, "cls-97"], ["points", "71.45 122.55 75.5 122.55 75.5 122.66 71.45 122.66 71.45 122.55", 1, "cls-97"], ["points", "71.45 122.43 75.5 122.43 75.5 122.55 71.45 122.55 71.45 122.43", 1, "cls-98"], ["points", "71.45 122.32 75.5 122.32 75.5 122.43 71.45 122.43 71.45 122.32", 1, "cls-98"], ["points", "71.45 122.21 75.5 122.21 75.5 122.32 71.45 122.32 71.45 122.21", 1, "cls-98"], ["d", "M71.45,122.09h1.23a6.84,6.84,0,0,0,1.92,0h.9v.12h-4Z", 1, "cls-99"], ["d", "M71.45,122h.68a4.86,4.86,0,0,0,.55.11H71.45Zm3.67,0h.38v.11h-.9a4.22,4.22,0,0,0,.52-.11Z", 1, "cls-99"], ["d", "M71.45,121.86h.32l.36.12h-.68Zm3.93,0h.12V122h-.38A1.29,1.29,0,0,0,75.38,121.86Z", 1, "cls-100"], ["d", "M71.45,121.75h.07l.25.11h-.32v-.11Zm4,0h0v.11h-.12A.19.19,0,0,0,75.49,121.75Z", 1, "cls-100"], ["d", "M75.5,121.72h0Zm0,0h0s0,0,0,0Zm-4,0h-.07v0Z", 1, "cls-100"], ["d", "M72.77,120.94a.19.19,0,0,0,.19-.19.19.19,0,0,0-.38,0A.19.19,0,0,0,72.77,120.94ZM72,123.4v.25h.78v-.53h.53v-.53h.53v-.53h.53v-.53h.53v-.25h-.78v.53H73.6v.53h-.53v.53h-.54v.53Zm1-1.67a.07.07,0,0,0,.11,0,.07.07,0,0,0,0-.12s-.12-.13-.23-.23v-.16h0v.14l0,0v-.23a.21.21,0,0,0-.2-.21.25.25,0,0,0-.14.06h0l-.53.53a.09.09,0,0,0,0,.12.08.08,0,0,0,.11,0l.36-.36v.55h.09v.26l-.24.11a.11.11,0,0,0-.06.14.12.12,0,0,0,.15.06l.15-.07v.36a.11.11,0,0,0,.22,0v-.46l.11,0a.11.11,0,0,0,.05-.16l-.15-.19H73v-.11l-.26-.26v-.33h0v.31l.25.24Z", 1, "cls-101"], ["d", "M126.33,119.18h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,126.33,119.18Z", 1, "cls-90"], ["d", "M123.31,123.42a.61.61,0,0,1-.62-.61v-3a.61.61,0,0,1,.62-.61h0a.59.59,0,0,0-.59.59v3a.59.59,0,0,0,.59.59h3a.59.59,0,0,0,.59-.59v-3a.59.59,0,0,0-.59-.59h0a.61.61,0,0,1,.61.61v3a.61.61,0,0,1-.61.61Z", 1, "cls-91"], ["d", "M123,123.18h3.71a.38.38,0,0,1-.25.09h-3.2A.39.39,0,0,1,123,123.18Z", 1, "cls-92"], ["d", "M122.87,123.07h3.92a.38.38,0,0,1-.11.11H123a.36.36,0,0,1-.1-.11Z", 1, "cls-92"], ["d", "M122.82,123h4a.54.54,0,0,1,0,.11h-3.92A.54.54,0,0,1,122.82,123Z", 1, "cls-93"], ["d", "M122.81,122.84h4a.45.45,0,0,1,0,.11h-4a.45.45,0,0,1,0-.11Z", 1, "cls-93"], ["points", "122.81 122.73 126.85 122.73 126.85 122.84 122.81 122.84 122.81 122.73", 1, "cls-94"], ["points", "122.81 122.61 126.85 122.61 126.85 122.73 122.81 122.73 122.81 122.61", 1, "cls-94"], ["points", "122.81 122.5 126.85 122.5 126.85 122.61 122.81 122.61 122.81 122.5", 1, "cls-94"], ["points", "122.81 122.39 126.85 122.39 126.85 122.5 122.81 122.5 122.81 122.39", 1, "cls-95"], ["points", "122.81 122.27 126.85 122.27 126.85 122.39 122.81 122.39 122.81 122.27", 1, "cls-95"], ["points", "122.81 122.16 126.85 122.16 126.85 122.27 122.81 122.27 122.81 122.16", 1, "cls-96"], ["points", "122.81 122.04 126.85 122.04 126.85 122.16 122.81 122.16 122.81 122.04", 1, "cls-96"], ["points", "122.81 121.93 126.85 121.93 126.85 122.04 122.81 122.04 122.81 121.93", 1, "cls-96"], ["points", "122.81 121.81 126.85 121.81 126.85 121.93 122.81 121.93 122.81 121.81", 1, "cls-97"], ["points", "122.81 121.7 126.85 121.7 126.85 121.81 122.81 121.81 122.81 121.7", 1, "cls-97"], ["points", "122.81 121.59 126.85 121.59 126.85 121.7 122.81 121.7 122.81 121.59", 1, "cls-98"], ["points", "122.81 121.47 126.85 121.47 126.85 121.59 122.81 121.59 122.81 121.47", 1, "cls-98"], ["points", "122.81 121.36 126.85 121.36 126.85 121.47 122.81 121.47 122.81 121.36", 1, "cls-98"], ["d", "M122.81,121.24H124a6.77,6.77,0,0,0,1.91,0h.9v.12h-4Z", 1, "cls-99"], ["d", "M122.81,121.13h.67a3.47,3.47,0,0,0,.56.11h-1.23v-.11Zm3.66,0h.38v.11H126A4.22,4.22,0,0,0,126.47,121.13Z", 1, "cls-99"], ["d", "M122.81,121h.32l.35.11h-.67V121Zm3.93,0h.11v.11h-.38A1.16,1.16,0,0,0,126.74,121Z", 1, "cls-100"], ["d", "M122.81,120.9h.06l.26.11h-.32Zm4,0h0V121h-.11A.23.23,0,0,0,126.85,120.9Z", 1, "cls-100"], ["d", "M126.85,120.87h0Zm0,0h0v0Zm-4,0h-.06v0h0Z", 1, "cls-100"], ["d", "M124.13,120.09a.18.18,0,0,0,.18-.19.18.18,0,0,0-.18-.18.18.18,0,0,0-.19.18A.18.18,0,0,0,124.13,120.09Zm-.77,2.47v.25h.78v-.53h.53v-.54h.53v-.53h.53v-.53h.53v-.25h-.78V121H125v.53h-.53V122h-.53v.54Zm1-1.67a.08.08,0,0,0,.12-.12l-.23-.23v-.16h0v.14l0,0v-.23a.2.2,0,0,0-.2-.2.25.25,0,0,0-.15,0l-.53.54a.08.08,0,0,0,0,.11.09.09,0,0,0,.12,0l.35-.35V121h.1v.26l-.24.11a.11.11,0,0,0-.06.14.12.12,0,0,0,.15.06l.15-.07v.36a.11.11,0,0,0,.22,0v-.46l.11-.05a.11.11,0,0,0,.05-.16l-.16-.19h.09v-.11l-.26-.26v-.33h0v.31l.24.25Z", 1, "cls-101"], ["d", "M204.06,138.26h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.59.59,0,0,0,.6-.6v-3A.6.6,0,0,0,204.06,138.26Z", 1, "cls-90"], ["d", "M201,142.5a.61.61,0,0,1-.61-.62v-3a.61.61,0,0,1,.61-.62h3v0h-3a.58.58,0,0,0-.59.59v3a.58.58,0,0,0,.59.59h3a.58.58,0,0,0,.58-.59v-3a.58.58,0,0,0-.58-.59h0v0a.62.62,0,0,1,.61.62v3a.62.62,0,0,1-.61.62Z", 1, "cls-91"], ["d", "M200.71,142.26h3.71a.41.41,0,0,1-.24.08h-3.24A.36.36,0,0,1,200.71,142.26Z", 1, "cls-92"], ["d", "M200.6,142.15h3.92a.52.52,0,0,1-.1.11h-3.71A.57.57,0,0,1,200.6,142.15Z", 1, "cls-92"], ["d", "M200.55,142h4a.37.37,0,0,1,0,.11H200.6a.37.37,0,0,1,0-.11Z", 1, "cls-93"], ["d", "M200.54,141.92h4a.37.37,0,0,1,0,.11h-4a.37.37,0,0,1,0-.11Z", 1, "cls-93"], ["points", "200.54 141.8 204.59 141.8 204.59 141.92 200.54 141.92 200.54 141.8", 1, "cls-94"], ["points", "200.54 141.69 204.59 141.69 204.59 141.8 200.54 141.8 200.54 141.69", 1, "cls-94"], ["points", "200.54 141.57 204.59 141.57 204.59 141.69 200.54 141.69 200.54 141.57", 1, "cls-94"], ["points", "200.54 141.46 204.59 141.46 204.59 141.57 200.54 141.57 200.54 141.46", 1, "cls-95"], ["points", "200.54 141.35 204.59 141.35 204.59 141.46 200.54 141.46 200.54 141.35", 1, "cls-95"], ["points", "200.54 141.23 204.59 141.23 204.59 141.35 200.54 141.35 200.54 141.23", 1, "cls-96"], ["points", "200.54 141.12 204.59 141.12 204.59 141.23 200.54 141.23 200.54 141.12", 1, "cls-96"], ["points", "200.54 141 204.59 141 204.59 141.12 200.54 141.12 200.54 141", 1, "cls-96"], ["points", "200.54 140.89 204.59 140.89 204.59 141 200.54 141 200.54 140.89", 1, "cls-97"], ["points", "200.54 140.77 204.59 140.77 204.59 140.89 200.54 140.89 200.54 140.77", 1, "cls-97"], ["points", "200.54 140.66 204.59 140.66 204.59 140.77 200.54 140.77 200.54 140.66", 1, "cls-98"], ["points", "200.54 140.55 204.59 140.55 204.59 140.66 200.54 140.66 200.54 140.55", 1, "cls-98"], ["points", "200.54 140.43 204.59 140.43 204.59 140.54 200.54 140.54 200.54 140.43", 1, "cls-98"], ["d", "M200.54,140.32h1.23a6.77,6.77,0,0,0,1.91,0h.9v.11h-4Z", 1, "cls-99"], ["d", "M200.54,140.2h.68a4.88,4.88,0,0,0,.55.12h-1.23Zm3.66,0h.38v.12h-.9a2.68,2.68,0,0,0,.52-.12Z", 1, "cls-99"], ["d", "M200.54,140.09h.32l.36.11h-.68Zm3.93,0h.11v.11h-.37A.92.92,0,0,0,204.47,140.09Z", 1, "cls-100"], ["d", "M200.54,140h.07a1.92,1.92,0,0,0,.25.12h-.32Zm4,0h0v.12h-.11A.24.24,0,0,0,204.58,140Z", 1, "cls-100"], ["d", "M204.59,140h0v0Zm-4,0h-.07v0Zm4,0h0Z", 1, "cls-100"], ["d", "M201.86,139.17a.2.2,0,0,0,.19-.19.19.19,0,0,0-.38,0A.2.2,0,0,0,201.86,139.17Zm-.76,2.46v.25h.77v-.53h.53v-.53h.54v-.53h.53v-.53H204v-.25h-.78V140h-.53v.53h-.54v.53h-.53v.53Zm1-1.67a.08.08,0,0,0,.11-.11l-.23-.24v-.15h0v.14l.05.05v-.24a.2.2,0,0,0-.2-.2.17.17,0,0,0-.14.06l-.53.53a.08.08,0,1,0,.11.11l.36-.35v.55h.09v.26l-.24.1a.12.12,0,0,0-.06.15.11.11,0,0,0,.15,0l.15-.06V141a.11.11,0,1,0,.22,0v-.46l.11,0a.11.11,0,0,0,0-.16l-.15-.19h.08V140l-.26-.27v-.33h0v.32Z", 1, "cls-101"], ["d", "M48.69,8h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,48.69,8Z", 1, "cls-90"], ["d", "M45.66,12.22a.61.61,0,0,1-.61-.61v-3A.61.61,0,0,1,45.66,8h0a.6.6,0,0,0-.59.59v3a.6.6,0,0,0,.59.59h3a.6.6,0,0,0,.59-.59v-3A.6.6,0,0,0,48.69,8h0a.61.61,0,0,1,.61.61v3a.61.61,0,0,1-.61.61Z", 1, "cls-91"], ["d", "M45.33,12H49a.38.38,0,0,1-.25.09H45.58A.38.38,0,0,1,45.33,12Z", 1, "cls-92"], ["d", "M45.23,11.87h3.91A.35.35,0,0,1,49,12H45.33A.35.35,0,0,1,45.23,11.87Z", 1, "cls-92"], ["d", "M45.18,11.75h4a.26.26,0,0,1,0,.12H45.23a.26.26,0,0,1,0-.12Z", 1, "cls-93"], ["d", "M45.16,11.64h4.05a.36.36,0,0,1,0,.11h-4a.36.36,0,0,1,0-.11Z", 1, "cls-93"], ["points", "45.16 11.53 49.21 11.53 49.21 11.64 45.16 11.64 45.16 11.53", 1, "cls-94"], ["points", "45.16 11.41 49.21 11.41 49.21 11.53 45.16 11.53 45.16 11.41", 1, "cls-94"], ["points", "45.16 11.3 49.21 11.3 49.21 11.41 45.16 11.41 45.16 11.3", 1, "cls-94"], ["points", "45.16 11.18 49.21 11.18 49.21 11.3 45.16 11.3 45.16 11.18", 1, "cls-95"], ["points", "45.16 11.07 49.21 11.07 49.21 11.18 45.16 11.18 45.16 11.07", 1, "cls-95"], ["points", "45.16 10.96 49.21 10.96 49.21 11.07 45.16 11.07 45.16 10.96", 1, "cls-96"], ["points", "45.16 10.84 49.21 10.84 49.21 10.96 45.16 10.96 45.16 10.84", 1, "cls-96"], ["points", "45.16 10.73 49.21 10.73 49.21 10.84 45.16 10.84 45.16 10.73", 1, "cls-96"], ["points", "45.16 10.61 49.21 10.61 49.21 10.73 45.16 10.73 45.16 10.61", 1, "cls-97"], ["points", "45.16 10.5 49.21 10.5 49.21 10.61 45.16 10.61 45.16 10.5", 1, "cls-97"], ["points", "45.16 10.38 49.21 10.38 49.21 10.5 45.16 10.5 45.16 10.38", 1, "cls-98"], ["points", "45.16 10.27 49.21 10.27 49.21 10.38 45.16 10.38 45.16 10.27", 1, "cls-98"], ["points", "45.16 10.16 49.21 10.16 49.21 10.27 45.16 10.27 45.16 10.16", 1, "cls-98"], ["d", "M45.16,10H46.4a6.7,6.7,0,0,0,1.9,0h.91v.12H45.16Z", 1, "cls-99"], ["d", "M45.16,9.93h.68a5,5,0,0,0,.56.11H45.16Zm3.67,0h.38V10h-.9A4.22,4.22,0,0,0,48.83,9.93Z", 1, "cls-99"], ["d", "M45.16,9.81h.33a2.06,2.06,0,0,0,.35.12h-.68Zm3.94,0h.11v.12h-.38A1.14,1.14,0,0,0,49.1,9.81Z", 1, "cls-100"], ["d", "M45.16,9.7h.07l.26.11h-.33Zm4,0h0v.11H49.1A.21.21,0,0,0,49.2,9.7Z", 1, "cls-100"], ["d", "M49.21,9.67h0Zm0,0h0a0,0,0,0,0,0,0Zm-4,0h-.07v0Z", 1, "cls-100"], ["d", "M46.51,9.76a.22.22,0,0,0-.22.22v1.27a.22.22,0,0,0,.22.22h1.35a.22.22,0,0,0,.22-.22V10a.22.22,0,0,0-.22-.22Zm0-.18h1.35a.39.39,0,0,1,.39.4v1.27a.39.39,0,0,1-.39.4H46.51a.39.39,0,0,1-.39-.4V10A.39.39,0,0,1,46.51,9.58Z", 1, "cls-101"], ["points", "46.43 8.8 46.75 8.47 47.08 8.8 47.08 9.02 46.83 8.77 46.83 9.26 46.67 9.26 46.67 8.77 46.43 9.02 46.43 8.8", 1, "cls-101"], ["points", "47.29 8.93 47.62 9.26 47.94 8.93 47.94 8.71 47.69 8.96 47.69 8.47 47.54 8.47 47.53 8.96 47.29 8.71 47.29 8.93", 1, "cls-101"], ["d", "M46.53,10.22a.09.09,0,1,1,.18,0,.09.09,0,1,1-.18,0Z", 1, "cls-101"], ["d", "M46.5,11.3a.05.05,0,1,0,.1,0v-.47h0v.47a.06.06,0,0,0,0,.06.06.06,0,0,0,.05-.06v-.82h0v.3c0,.06.07.06.07,0v-.3a.13.13,0,0,0-.12-.14h-.21a.13.13,0,0,0-.11.14v.3c0,.06.07.06.07,0v-.3h0Z", 1, "cls-101"], ["d", "M47.26,10.36a.13.13,0,0,1,.11.09l.07.28c0,.06,0,.09-.07,0l-.06-.26h0l.11.46h-.11v.36a0,0,0,1,1-.08,0V11h0v.36a0,0,0,1,1-.08,0V11H47l.11-.46h0l-.06.26c0,.06-.09,0-.07,0l.07-.28a.13.13,0,0,1,.11-.09Z", 1, "cls-101"], ["d", "M47.19,10.32a.09.09,0,0,1-.09-.1.09.09,0,1,1,.18,0C47.28,10.28,47.25,10.32,47.19,10.32Z", 1, "cls-101"], ["d", "M47.66,10.22a.09.09,0,1,1,.18,0,.09.09,0,1,1-.18,0Z", 1, "cls-101"], ["d", "M47.63,11.3a.06.06,0,1,0,.11,0v-.47h0v.47a.05.05,0,1,0,.1,0v-.82h0v.3c0,.06.07.06.07,0v-.3c0-.07,0-.14-.11-.14h-.22a.13.13,0,0,0-.11.14v.3c0,.06.07.06.07,0v-.3h0Z", 1, "cls-101"], ["d", "M286.2,34.74h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,286.2,34.74Z", 1, "cls-90"], ["d", "M283.17,39a.61.61,0,0,1-.61-.62v-3a.61.61,0,0,1,.61-.62h3v0h-3a.59.59,0,0,0-.59.59v3a.59.59,0,0,0,.59.59h3a.58.58,0,0,0,.58-.59v-3a.58.58,0,0,0-.58-.59h0v0a.62.62,0,0,1,.61.62v3a.62.62,0,0,1-.61.62Z", 1, "cls-91"], ["d", "M282.84,38.74h3.71a.45.45,0,0,1-.25.09h-3.21A.45.45,0,0,1,282.84,38.74Z", 1, "cls-92"], ["d", "M282.74,38.62h3.91a.29.29,0,0,1-.1.12h-3.71A.29.29,0,0,1,282.74,38.62Z", 1, "cls-92"], ["d", "M282.69,38.51h4a.61.61,0,0,1-.05.12h-3.91a.31.31,0,0,1-.05-.12Z", 1, "cls-93"], ["d", "M282.67,38.4h4.05a.36.36,0,0,1,0,.11h-4a.36.36,0,0,1,0-.11Z", 1, "cls-93"], ["points", "282.67 38.28 286.72 38.28 286.72 38.4 282.67 38.4 282.67 38.28", 1, "cls-94"], ["points", "282.67 38.17 286.72 38.17 286.72 38.28 282.67 38.28 282.67 38.17", 1, "cls-94"], ["points", "282.67 38.05 286.72 38.05 286.72 38.17 282.67 38.17 282.67 38.05", 1, "cls-94"], ["points", "282.67 37.94 286.72 37.94 286.72 38.05 282.67 38.05 282.67 37.94", 1, "cls-95"], ["points", "282.67 37.83 286.72 37.83 286.72 37.94 282.67 37.94 282.67 37.83", 1, "cls-95"], ["points", "282.67 37.71 286.72 37.71 286.72 37.83 282.67 37.83 282.67 37.71", 1, "cls-96"], ["points", "282.67 37.6 286.72 37.6 286.72 37.71 282.67 37.71 282.67 37.6", 1, "cls-96"], ["points", "282.67 37.48 286.72 37.48 286.72 37.6 282.67 37.6 282.67 37.48", 1, "cls-96"], ["points", "282.67 37.37 286.72 37.37 286.72 37.48 282.67 37.48 282.67 37.37", 1, "cls-97"], ["points", "282.67 37.26 286.72 37.26 286.72 37.37 282.67 37.37 282.67 37.26", 1, "cls-97"], ["points", "282.67 37.14 286.72 37.14 286.72 37.26 282.67 37.26 282.67 37.14", 1, "cls-98"], ["points", "282.67 37.03 286.72 37.03 286.72 37.14 282.67 37.14 282.67 37.03", 1, "cls-98"], ["points", "282.67 36.91 286.72 36.91 286.72 37.03 282.67 37.03 282.67 36.91", 1, "cls-98"], ["d", "M282.67,36.8h1.24a6.7,6.7,0,0,0,1.9,0h.91v.11h-4.05Z", 1, "cls-99"], ["d", "M282.67,36.69h.68l.56.11h-1.24Zm3.67,0h.38v.11h-.91A4,4,0,0,0,286.34,36.69Z", 1, "cls-99"], ["d", "M282.67,36.57H283l.35.11h-.68Zm3.94,0h.11v.11h-.38A1.16,1.16,0,0,0,286.61,36.57Z", 1, "cls-100"], ["d", "M282.67,36.46h.07l.26.11h-.33Zm4,0h0v.11h-.11A.32.32,0,0,0,286.71,36.46Z", 1, "cls-100"], ["d", "M286.72,36.46h0v0Zm-4,0h-.07v0Zm4,0h0Z", 1, "cls-100"], ["d", "M284,36.51a.22.22,0,0,0-.22.22V38a.22.22,0,0,0,.22.22h1.35a.22.22,0,0,0,.22-.22V36.73a.22.22,0,0,0-.22-.22Zm0-.17h1.35a.39.39,0,0,1,.39.39V38a.39.39,0,0,1-.39.39H284a.38.38,0,0,1-.39-.39V36.73A.38.38,0,0,1,284,36.34Z", 1, "cls-101"], ["points", "283.94 35.55 284.26 35.23 284.59 35.55 284.59 35.77 284.34 35.52 284.34 36.01 284.19 36.01 284.19 35.52 283.94 35.77 283.94 35.55", 1, "cls-101"], ["points", "284.8 35.69 285.12 36.01 285.45 35.69 285.45 35.47 285.2 35.72 285.2 35.23 285.05 35.23 285.04 35.72 284.8 35.47 284.8 35.69", 1, "cls-101"], ["d", "M284,37a.09.09,0,1,1,.09.1A.09.09,0,0,1,284,37Z", 1, "cls-101"], ["d", "M284,38.06a.05.05,0,0,0,.1,0v-.48h0v.48a0,0,0,0,0,.05,0,.05.05,0,0,0,.05,0v-.82h0v.3c0,.06.07.06.07,0v-.31a.13.13,0,0,0-.12-.13H284a.12.12,0,0,0-.11.13v.31c0,.06.07.06.07,0v-.3h0v.82Z", 1, "cls-101"], ["d", "M284.77,37.11a.13.13,0,0,1,.11.09l.08.29c0,.06-.06.08-.07,0l-.07-.26h0l.11.47h-.11v.36a0,0,0,1,1-.08,0v-.37h0v.37a0,0,0,1,1-.08,0v-.36h-.11l.11-.47h0l-.06.26c0,.06-.09,0-.07,0l.07-.29a.13.13,0,0,1,.11-.09Z", 1, "cls-101"], ["d", "M284.7,37.08a.1.1,0,1,1,.09-.1C284.79,37,284.76,37.08,284.7,37.08Z", 1, "cls-101"], ["d", "M285.17,37a.09.09,0,1,1,.09.1A.09.09,0,0,1,285.17,37Z", 1, "cls-101"], ["d", "M285.14,38.06a.05.05,0,0,0,.05,0,0,0,0,0,0,.05,0v-.48h0v.48a0,0,0,0,0,.05,0,.05.05,0,0,0,.05,0v-.82h0v.3c0,.06.07.06.07,0v-.31a.13.13,0,0,0-.12-.13h-.21a.12.12,0,0,0-.11.13v.31c0,.06.07.06.07,0v-.3h0v.82Z", 1, "cls-101"], ["d", "M380.77,106.17h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,380.77,106.17Z", 1, "cls-90"], ["d", "M377.75,110.41a.61.61,0,0,1-.61-.61v-3a.61.61,0,0,1,.61-.61h0a.58.58,0,0,0-.59.59v3a.58.58,0,0,0,.59.58h3a.58.58,0,0,0,.59-.58v-3a.58.58,0,0,0-.59-.59h0a.61.61,0,0,1,.62.61v3a.62.62,0,0,1-.62.61Z", 1, "cls-91"], ["d", "M377.42,110.17h3.71a.48.48,0,0,1-.26.09h-3.2A.42.42,0,0,1,377.42,110.17Z", 1, "cls-92"], ["d", "M377.31,110.06h3.92a.52.52,0,0,1-.1.11h-3.71A.38.38,0,0,1,377.31,110.06Z", 1, "cls-92"], ["d", "M377.26,109.94h4a.61.61,0,0,1,0,.12h-3.92a.61.61,0,0,1-.05-.12Z", 1, "cls-93"], ["d", "M377.25,109.83h4a.49.49,0,0,1,0,.12h-4a.38.38,0,0,1,0-.1Z", 1, "cls-93"], ["points", "377.25 109.72 381.29 109.72 381.29 109.83 377.25 109.83 377.25 109.72", 1, "cls-94"], ["points", "377.25 109.6 381.29 109.6 381.29 109.72 377.25 109.72 377.25 109.6", 1, "cls-94"], ["points", "377.25 109.49 381.29 109.49 381.29 109.6 377.25 109.6 377.25 109.49", 1, "cls-94"], ["points", "377.25 109.37 381.29 109.37 381.29 109.49 377.25 109.49 377.25 109.37", 1, "cls-95"], ["points", "377.25 109.26 381.29 109.26 381.29 109.37 377.25 109.37 377.25 109.26", 1, "cls-95"], ["points", "377.25 109.14 381.29 109.14 381.29 109.26 377.25 109.26 377.25 109.14", 1, "cls-96"], ["points", "377.25 109.03 381.29 109.03 381.29 109.14 377.25 109.14 377.25 109.03", 1, "cls-96"], ["points", "377.25 108.92 381.29 108.92 381.29 109.03 377.25 109.03 377.25 108.92", 1, "cls-96"], ["points", "377.25 108.8 381.29 108.8 381.29 108.92 377.25 108.92 377.25 108.8", 1, "cls-97"], ["points", "377.25 108.69 381.29 108.69 381.29 108.8 377.25 108.8 377.25 108.69", 1, "cls-97"], ["points", "377.25 108.58 381.29 108.58 381.29 108.69 377.25 108.69 377.25 108.58", 1, "cls-98"], ["points", "377.25 108.46 381.29 108.46 381.29 108.57 377.25 108.57 377.25 108.46", 1, "cls-98"], ["points", "377.25 108.34 381.29 108.34 381.29 108.46 377.25 108.46 377.25 108.34", 1, "cls-98"], ["d", "M377.25,108.23h1.23a6.84,6.84,0,0,0,1.92,0h.89v.12h-4Z", 1, "cls-99"], ["d", "M377.25,108.12h.67l.56.11h-1.23Zm3.67,0h.37v.11h-.89a4.66,4.66,0,0,0,.52-.11Z", 1, "cls-99"], ["d", "M377.25,108h.32a3.59,3.59,0,0,0,.35.12h-.67Zm3.93,0h.11v.12h-.37A1.29,1.29,0,0,0,381.18,108Z", 1, "cls-100"], ["d", "M377.25,107.89h.06l.26.11h-.32Zm4,0h0V108h-.11A.19.19,0,0,0,381.29,107.89Z", 1, "cls-100"], ["d", "M381.29,107.86h0Zm0,0h0v0Zm-4,0h-.06v0Z", 1, "cls-100"], ["d", "M378.6,108a.21.21,0,0,0-.22.21v1.28a.22.22,0,0,0,.22.22h1.34a.22.22,0,0,0,.22-.22v-1.28a.21.21,0,0,0-.22-.21Zm0-.18h1.34a.4.4,0,0,1,.4.39v1.28a.4.4,0,0,1-.4.4H378.6a.4.4,0,0,1-.4-.4v-1.28A.4.4,0,0,1,378.6,107.77Z", 1, "cls-101"], ["points", "378.51 106.99 378.84 106.66 379.17 106.99 379.17 107.21 378.92 106.96 378.92 107.44 378.76 107.44 378.76 106.96 378.51 107.21 378.51 106.99", 1, "cls-101"], ["points", "379.38 107.12 379.7 107.44 380.03 107.12 380.03 106.9 379.78 107.15 379.78 106.66 379.62 106.66 379.62 107.15 379.38 106.9 379.38 107.12", 1, "cls-101"], ["d", "M378.62,108.41a.09.09,0,0,1,.08-.1.1.1,0,0,1,.09.1.09.09,0,0,1-.09.1C378.65,108.51,378.62,108.47,378.62,108.41Z", 1, "cls-101"], ["d", "M378.59,109.49a0,0,0,0,0,.05.05.05.05,0,0,0,.05-.05V109h0v.48a0,0,0,1,0,.1,0v-.82h0v.3c0,.06.07.06.07,0v-.31a.12.12,0,0,0-.11-.13h-.21a.12.12,0,0,0-.12.13V109c0,.06.07.06.07,0v-.3h0v.82Z", 1, "cls-101"], ["d", "M379.35,108.55a.11.11,0,0,1,.1.09l.08.28c0,.06,0,.09-.07,0l-.07-.26h0l.12.46h-.11v.36a0,0,0,1,1-.08,0v-.36h0v.36a0,0,0,1,1-.08,0v-.36h-.11l.12-.46h0l-.07.26c0,.06-.08,0-.07,0l.08-.28a.11.11,0,0,1,.1-.09Z", 1, "cls-101"], ["d", "M379.27,108.51a.09.09,0,0,1-.09-.1.09.09,0,1,1,.18,0C379.36,108.47,379.33,108.51,379.27,108.51Z", 1, "cls-101"], ["d", "M379.75,108.41a.1.1,0,0,1,.09-.1.09.09,0,0,1,.08.1c0,.06,0,.1-.08.1A.09.09,0,0,1,379.75,108.41Z", 1, "cls-101"], ["d", "M379.72,109.49a0,0,0,1,0,.1,0V109h0v.48a.05.05,0,0,0,0,.05,0,0,0,0,0,.05-.05v-.82h0v.3c0,.06.07.06.07,0v-.31a.13.13,0,0,0-.12-.13h-.21a.12.12,0,0,0-.11.13V109c0,.06.07.06.07,0v-.3h0v.82Z", 1, "cls-101"], ["d", "M368.63,159h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,368.63,159Z", 1, "cls-90"], ["d", "M365.6,163.28a.61.61,0,0,1-.61-.62v-3a.61.61,0,0,1,.61-.61h0a.58.58,0,0,0-.59.59v3a.58.58,0,0,0,.59.59h3a.58.58,0,0,0,.58-.59v-3a.58.58,0,0,0-.58-.59h0a.61.61,0,0,1,.61.61v3a.62.62,0,0,1-.61.62Z", 1, "cls-91"], ["d", "M365.27,163H369a.45.45,0,0,1-.26.08h-3.2a.44.44,0,0,1-.25-.08Z", 1, "cls-92"], ["d", "M365.16,162.93h3.92a.52.52,0,0,1-.1.11h-3.71A.57.57,0,0,1,365.16,162.93Z", 1, "cls-92"], ["d", "M365.11,162.81h4a.61.61,0,0,1-.05.12h-3.92Z", 1, "cls-93"], ["d", "M365.1,162.7h4a.36.36,0,0,1,0,.11h-4a.37.37,0,0,1,0-.11Z", 1, "cls-93"], ["points", "365.1 162.58 369.14 162.58 369.14 162.7 365.1 162.7 365.1 162.58", 1, "cls-94"], ["points", "365.1 162.47 369.14 162.47 369.14 162.58 365.1 162.58 365.1 162.47", 1, "cls-94"], ["points", "365.1 162.35 369.14 162.35 369.14 162.47 365.1 162.47 365.1 162.35", 1, "cls-94"], ["points", "365.1 162.24 369.14 162.24 369.14 162.35 365.1 162.35 365.1 162.24", 1, "cls-95"], ["points", "365.1 162.13 369.14 162.13 369.14 162.24 365.1 162.24 365.1 162.13", 1, "cls-95"], ["points", "365.1 162.01 369.14 162.01 369.14 162.13 365.1 162.13 365.1 162.01", 1, "cls-96"], ["points", "365.1 161.9 369.14 161.9 369.14 162.01 365.1 162.01 365.1 161.9", 1, "cls-96"], ["points", "365.1 161.78 369.14 161.78 369.14 161.9 365.1 161.9 365.1 161.78", 1, "cls-96"], ["points", "365.1 161.67 369.14 161.67 369.14 161.78 365.1 161.78 365.1 161.67", 1, "cls-97"], ["points", "365.1 161.56 369.14 161.56 369.14 161.67 365.1 161.67 365.1 161.56", 1, "cls-97"], ["points", "365.1 161.44 369.14 161.44 369.14 161.56 365.1 161.56 365.1 161.44", 1, "cls-98"], ["points", "365.1 161.33 369.14 161.33 369.14 161.44 365.1 161.44 365.1 161.33", 1, "cls-98"], ["points", "365.1 161.21 369.14 161.21 369.14 161.33 365.1 161.33 365.1 161.21", 1, "cls-98"], ["d", "M365.1,161.1h1.24a6.77,6.77,0,0,0,1.91,0h.9v.12h-4Z", 1, "cls-99"], ["d", "M365.1,161h.68a4.61,4.61,0,0,0,.56.12H365.1Zm3.67,0h.38v.12h-.9A2.87,2.87,0,0,0,368.77,161Z", 1, "cls-99"], ["d", "M365.1,160.87h.33l.35.12h-.68Zm3.93,0h.12V161h-.38A1.29,1.29,0,0,0,369,160.87Z", 1, "cls-100"], ["d", "M365.1,160.76h.07l.26.11h-.33Zm4,0h0v.11H369a.19.19,0,0,0,.11-.11Z", 1, "cls-100"], ["d", "M369.14,160.76h0v0Zm-4,0h-.06v0Zm4,0h0Z", 1, "cls-100"], ["d", "M366.45,160.81a.22.22,0,0,0-.22.22v1.28a.22.22,0,0,0,.22.22h1.34a.22.22,0,0,0,.22-.22V161a.22.22,0,0,0-.22-.22Zm0-.17h1.34a.4.4,0,0,1,.4.39v1.28a.39.39,0,0,1-.4.39h-1.34a.39.39,0,0,1-.4-.39V161A.4.4,0,0,1,366.45,160.64Z", 1, "cls-101"], ["points", "366.36 159.86 366.69 159.53 367.02 159.86 367.02 160.07 366.77 159.82 366.77 160.31 366.61 160.31 366.61 159.82 366.36 160.07 366.36 159.86", 1, "cls-101"], ["points", "367.23 159.99 367.55 160.31 367.88 159.99 367.88 159.77 367.63 160.02 367.63 159.53 367.48 159.53 367.47 160.02 367.23 159.77 367.23 159.99", 1, "cls-101"], ["d", "M366.47,161.28a.09.09,0,1,1,.09.1A.1.1,0,0,1,366.47,161.28Z", 1, "cls-101"], ["d", "M366.44,162.36a.05.05,0,1,0,.1,0v-.48h0v.48a.05.05,0,0,0,.05,0,0,0,0,0,0,.05,0v-.82h0v.3c0,.06.07.06.07,0v-.31a.13.13,0,0,0-.12-.13h-.21a.12.12,0,0,0-.11.13v.31c0,.06.07.06.07,0v-.3h0v.82Z", 1, "cls-101"], ["d", "M367.2,161.42a.12.12,0,0,1,.11.09l.07.28c0,.06-.05.09-.07,0l-.07-.26h0l.12.46h-.11v.36a0,0,0,1,1-.08,0V162h0v.36a0,0,0,1,1-.08,0V162h-.11l.12-.46h0l-.07.26c0,.06-.08,0-.07,0l.08-.28a.11.11,0,0,1,.11-.09Z", 1, "cls-101"], ["d", "M367.13,161.38a.1.1,0,1,1,.09-.1A.09.09,0,0,1,367.13,161.38Z", 1, "cls-101"], ["d", "M367.6,161.28a.09.09,0,1,1,.09.1A.1.1,0,0,1,367.6,161.28Z", 1, "cls-101"], ["d", "M367.57,162.36a.05.05,0,1,0,.1,0v-.48h0v.48a.05.05,0,0,0,.05,0,.06.06,0,0,0,.06,0v-.82h0v.3c0,.06.07.06.07,0v-.31a.13.13,0,0,0-.12-.13h-.21a.12.12,0,0,0-.11.13v.31c0,.06.07.06.07,0v-.3h0v.82Z", 1, "cls-101"], ["d", "M287.06,164.35h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.61-.6v-3A.6.6,0,0,0,287.06,164.35Z", 1, "cls-90"], ["d", "M284,168.59a.62.62,0,0,1-.62-.62v-3a.62.62,0,0,1,.62-.62h3v0h-3a.58.58,0,0,0-.59.59v3a.58.58,0,0,0,.59.59h3a.58.58,0,0,0,.59-.59v-3a.58.58,0,0,0-.59-.59h0v0a.62.62,0,0,1,.62.62v3a.62.62,0,0,1-.62.62Z", 1, "cls-91"], ["d", "M283.71,168.35h3.71a.41.41,0,0,1-.24.08h-3.24a.36.36,0,0,1-.23-.08Z", 1, "cls-92"], ["d", "M283.6,168.24h3.92a.52.52,0,0,1-.1.11h-3.71A.38.38,0,0,1,283.6,168.24Z", 1, "cls-92"], ["d", "M283.55,168.12h4a.61.61,0,0,1-.05.12H283.6A.61.61,0,0,1,283.55,168.12Z", 1, "cls-93"], ["d", "M283.54,168h4a.37.37,0,0,1,0,.11h-4a.37.37,0,0,1,0-.11Z", 1, "cls-93"], ["points", "283.54 167.89 287.58 167.89 287.58 168.01 283.54 168.01 283.54 167.89", 1, "cls-94"], ["points", "283.54 167.78 287.58 167.78 287.58 167.89 283.54 167.89 283.54 167.78", 1, "cls-94"], ["points", "283.54 167.67 287.58 167.67 287.58 167.78 283.54 167.78 283.54 167.67", 1, "cls-94"], ["points", "283.54 167.55 287.58 167.55 287.58 167.66 283.54 167.66 283.54 167.55", 1, "cls-95"], ["points", "283.54 167.44 287.58 167.44 287.58 167.55 283.54 167.55 283.54 167.44", 1, "cls-95"], ["points", "283.54 167.32 287.58 167.32 287.58 167.44 283.54 167.44 283.54 167.32", 1, "cls-96"], ["points", "283.54 167.21 287.58 167.21 287.58 167.32 283.54 167.32 283.54 167.21", 1, "cls-96"], ["points", "283.54 167.09 287.58 167.09 287.58 167.21 283.54 167.21 283.54 167.09", 1, "cls-96"], ["points", "283.54 166.98 287.58 166.98 287.58 167.09 283.54 167.09 283.54 166.98", 1, "cls-97"], ["points", "283.54 166.86 287.58 166.86 287.58 166.98 283.54 166.98 283.54 166.86", 1, "cls-97"], ["points", "283.54 166.75 287.58 166.75 287.58 166.86 283.54 166.86 283.54 166.75", 1, "cls-98"], ["points", "283.54 166.64 287.58 166.64 287.58 166.75 283.54 166.75 283.54 166.64", 1, "cls-98"], ["points", "283.54 166.52 287.58 166.52 287.58 166.64 283.54 166.64 283.54 166.52", 1, "cls-98"], ["d", "M283.54,166.41h1.23a6.77,6.77,0,0,0,1.91,0h.9v.11h-4v-.11Z", 1, "cls-99"], ["d", "M283.54,166.29h.68a4.88,4.88,0,0,0,.55.12h-1.23Zm3.66,0h.38v.12h-.9a2.87,2.87,0,0,0,.52-.12Z", 1, "cls-99"], ["d", "M283.54,166.18h.32l.35.11h-.67Zm3.93,0h.11v.11h-.37A.92.92,0,0,0,287.47,166.18Z", 1, "cls-100"], ["d", "M283.54,166.07h.06l.26.11h-.32Zm4,0h0v.11h-.11A.29.29,0,0,0,287.58,166.07Z", 1, "cls-100"], ["d", "M287.58,166.07h0v0Zm-4,0h-.06v0Zm4,0h0Z", 1, "cls-100"], ["d", "M284.89,166.12a.22.22,0,0,0-.22.22v1.28a.22.22,0,0,0,.22.22h1.34a.22.22,0,0,0,.22-.22v-1.28a.22.22,0,0,0-.22-.22Zm0-.17h1.34a.4.4,0,0,1,.4.39v1.28a.39.39,0,0,1-.4.39h-1.34a.39.39,0,0,1-.4-.39v-1.28A.4.4,0,0,1,284.89,166Z", 1, "cls-101"], ["points", "284.8 165.17 285.13 164.84 285.46 165.17 285.46 165.38 285.21 165.13 285.21 165.62 285.05 165.62 285.05 165.13 284.8 165.38 284.8 165.17", 1, "cls-101"], ["points", "285.67 165.3 285.99 165.62 286.32 165.3 286.32 165.08 286.07 165.33 286.07 164.84 285.91 164.84 285.91 165.33 285.67 165.08 285.67 165.3", 1, "cls-101"], ["d", "M284.9,166.59a.09.09,0,1,1,.18,0,.09.09,0,1,1-.18,0Z", 1, "cls-101"], ["d", "M284.88,167.67a.05.05,0,0,0,.1,0v-.48h0v.48a.05.05,0,0,0,.05.05,0,0,0,0,0,.05-.05v-.82h0v.3c0,.06.07.06.07,0v-.31a.13.13,0,0,0-.12-.13h-.21a.12.12,0,0,0-.11.13v.31c0,.06.07.06.07,0v-.3h0Z", 1, "cls-101"], ["d", "M285.64,166.72c.06,0,.09.06.1.09l.08.29c0,.06-.05.08-.07,0l-.07-.26h0l.12.47h-.11v.36a0,0,0,1,1-.08,0v-.36h0v.36a0,0,0,1,1-.08,0v-.36h-.11l.12-.47h0l-.07.27c0,.05-.09,0-.07,0l.08-.29s0-.09.1-.09Z", 1, "cls-101"], ["d", "M285.56,166.69a.1.1,0,0,1-.09-.1.09.09,0,1,1,.09.1Z", 1, "cls-101"], ["d", "M286,166.59a.09.09,0,1,1,.18,0,.09.09,0,1,1-.18,0Z", 1, "cls-101"], ["d", "M286,167.67a.05.05,0,0,0,.1,0v-.48h0v.48a.05.05,0,0,0,.05.05,0,0,0,0,0,.05-.05v-.82h0v.3c0,.06.07.06.07,0v-.31a.13.13,0,0,0-.12-.13H286a.13.13,0,0,0-.12.13v.31a0,0,0,1,0,.08,0v-.3h0v.82Z", 1, "cls-101"], ["d", "M189,15.6h-2.81a.56.56,0,0,0-.55.56V19a.55.55,0,0,0,.55.55H189a.55.55,0,0,0,.55-.55V16.16A.55.55,0,0,0,189,15.6Z", 1, "cls-90"], ["d", "M186.15,19.53a.57.57,0,0,1-.57-.56V16.16a.58.58,0,0,1,.57-.57h0a.55.55,0,0,0-.54.55V19a.54.54,0,0,0,.54.54H189a.54.54,0,0,0,.54-.54V16.16a.55.55,0,0,0-.54-.55h0a.57.57,0,0,1,.56.57V19a.56.56,0,0,1-.56.56Z", 1, "cls-91"], ["d", "M185.85,19.31h3.43a.36.36,0,0,1-.23.08h-3A.36.36,0,0,1,185.85,19.31Z", 1, "cls-92"], ["d", "M185.75,19.21h3.63a.32.32,0,0,1-.1.1h-3.43a.32.32,0,0,1-.1-.1Z", 1, "cls-92"], ["d", "M185.7,19.1h3.73a1.17,1.17,0,0,1-.05.11h-3.63A.37.37,0,0,1,185.7,19.1Z", 1, "cls-93"], ["d", "M185.69,19h3.75a.36.36,0,0,1,0,.1H185.7a.34.34,0,0,1,0-.1Z", 1, "cls-93"], ["points", "185.69 18.89 189.44 18.89 189.44 19 185.69 19 185.69 18.89", 1, "cls-94"], ["points", "185.69 18.79 189.44 18.79 189.44 18.89 185.69 18.89 185.69 18.79", 1, "cls-94"], ["points", "185.69 18.68 189.44 18.68 189.44 18.79 185.69 18.79 185.69 18.68", 1, "cls-94"], ["points", "185.69 18.57 189.44 18.57 189.44 18.68 185.69 18.68 185.69 18.57", 1, "cls-95"], ["points", "185.69 18.47 189.44 18.47 189.44 18.57 185.69 18.57 185.69 18.47", 1, "cls-95"], ["points", "185.69 18.36 189.44 18.36 189.44 18.47 185.69 18.47 185.69 18.36", 1, "cls-96"], ["points", "185.69 18.25 189.44 18.25 189.44 18.36 185.69 18.36 185.69 18.25", 1, "cls-96"], ["points", "185.69 18.15 189.44 18.15 189.44 18.25 185.69 18.25 185.69 18.15", 1, "cls-96"], ["points", "185.69 18.04 189.44 18.04 189.44 18.15 185.69 18.15 185.69 18.04", 1, "cls-97"], ["points", "185.69 17.94 189.44 17.94 189.44 18.04 185.69 18.04 185.69 17.94", 1, "cls-97"], ["points", "185.69 17.83 189.44 17.83 189.44 17.94 185.69 17.94 185.69 17.83", 1, "cls-98"], ["points", "185.69 17.73 189.44 17.73 189.44 17.83 185.69 17.83 185.69 17.73", 1, "cls-98"], ["points", "185.69 17.62 189.44 17.62 189.44 17.73 185.69 17.73 185.69 17.62", 1, "cls-98"], ["d", "M185.69,17.52h1.15a6.9,6.9,0,0,0,1.76,0h.84v.1h-3.75Z", 1, "cls-99"], ["d", "M185.69,17.41h.63l.52.11h-1.15Zm3.4,0h.35v.11h-.84A4,4,0,0,0,189.09,17.41Z", 1, "cls-99"], ["d", "M185.69,17.3h.3l.32.11h-.62Zm3.64,0h.11v.11h-.35A.9.9,0,0,0,189.33,17.3Z", 1, "cls-100"], ["d", "M185.69,17.2h.06a1.33,1.33,0,0,0,.24.1h-.3Zm3.74,0h0v.1h-.11A.19.19,0,0,0,189.43,17.2Z", 1, "cls-100"], ["d", "M189.44,17.2h0a0,0,0,0,0,0,0Zm-3.69,0h-.06v0Zm3.69,0h0Z", 1, "cls-100"], ["d", "M186.94,17.25a.2.2,0,0,0-.2.2v1.19a.2.2,0,0,0,.2.2h1.25a.2.2,0,0,0,.2-.2V17.45a.2.2,0,0,0-.2-.2Zm0-.16h1.25a.36.36,0,0,1,.36.36v1.19a.36.36,0,0,1-.36.36h-1.25a.37.37,0,0,1-.37-.36V17.45A.37.37,0,0,1,186.94,17.09Z", 1, "cls-101"], ["points", "186.86 16.36 187.16 16.06 187.47 16.36 187.47 16.56 187.24 16.33 187.24 16.79 187.09 16.79 187.09 16.33 186.86 16.56 186.86 16.36", 1, "cls-101"], ["points", "187.66 16.48 187.96 16.79 188.27 16.48 188.27 16.28 188.04 16.51 188.04 16.06 187.89 16.06 187.89 16.51 187.66 16.28 187.66 16.48", 1, "cls-101"], ["d", "M187,17.68a.08.08,0,0,1,.08-.09.09.09,0,0,1,.08.09.1.1,0,0,1-.08.1A.09.09,0,0,1,187,17.68Z", 1, "cls-101"], ["d", "M186.93,18.68a0,0,0,0,0,0,.05,0,0,0,0,0,0-.05v-.44h0v.44a0,0,0,0,0,0,.05,0,0,0,0,0,.05-.05v-.76h0v.28c0,.06.06.06.06,0v-.28c0-.06,0-.13-.1-.13h-.2a.12.12,0,0,0-.11.13v.28c0,.06.07.06.07,0v-.28h0v.76Z", 1, "cls-101"], ["d", "M187.63,17.81a.11.11,0,0,1,.1.08l.07.26c0,.06,0,.08-.06,0l-.06-.24h0l.11.43h-.1v.33a0,0,0,1,1-.08,0v-.34h0v.34a0,0,0,1,1-.08,0v-.33h-.1l.11-.43h0l-.06.24c0,.05-.08,0-.07,0l.07-.26a.12.12,0,0,1,.1-.08Z", 1, "cls-101"], ["d", "M187.57,17.77a.09.09,0,0,1,0-.18.09.09,0,0,1,.08.09A.08.08,0,0,1,187.57,17.77Z", 1, "cls-101"], ["d", "M188,17.68a.08.08,0,0,1,.08-.09.09.09,0,0,1,.08.09.1.1,0,0,1-.08.1A.09.09,0,0,1,188,17.68Z", 1, "cls-101"], ["d", "M188,18.68a0,0,0,0,0,.05.05,0,0,0,0,0,0-.05v-.44h0v.44a0,0,0,0,0,.1,0v-.76h0v.28c0,.06.06.06.06,0v-.28a.12.12,0,0,0-.11-.13H188a.12.12,0,0,0-.11.13v.28c0,.06.07.06.07,0v-.28h0v.76Z", 1, "cls-101"], ["d", "M197.3,145.45h-3a.6.6,0,0,0-.6.6v3a.59.59,0,0,0,.6.59h3a.59.59,0,0,0,.6-.59v-3A.6.6,0,0,0,197.3,145.45Z", 1, "cls-90"], ["d", "M194.27,149.69a.61.61,0,0,1-.61-.61v-3a.61.61,0,0,1,.61-.61h0a.6.6,0,0,0-.59.59v3a.6.6,0,0,0,.59.58h3a.59.59,0,0,0,.59-.58v-3a.59.59,0,0,0-.59-.59h0a.61.61,0,0,1,.61.61v3a.61.61,0,0,1-.61.61Z", 1, "cls-91"], ["d", "M193.94,149.45h3.71a.46.46,0,0,1-.23.09h-3.24A.5.5,0,0,1,193.94,149.45Z", 1, "cls-92"], ["d", "M193.84,149.34h3.92l-.11.11h-3.71A.52.52,0,0,1,193.84,149.34Z", 1, "cls-92"], ["d", "M193.79,149.22h4l-.05.12h-3.92a.61.61,0,0,1-.05-.12Z", 1, "cls-93"], ["d", "M193.77,149.11h4a.37.37,0,0,1,0,.11h-4a.36.36,0,0,1,0-.11Z", 1, "cls-93"], ["points", "193.77 148.99 197.82 148.99 197.82 149.11 193.77 149.11 193.77 148.99", 1, "cls-94"], ["points", "193.77 148.88 197.82 148.88 197.82 148.99 193.77 148.99 193.77 148.88", 1, "cls-94"], ["points", "193.77 148.77 197.82 148.77 197.82 148.88 193.77 148.88 193.77 148.77", 1, "cls-94"], ["points", "193.77 148.65 197.82 148.65 197.82 148.76 193.77 148.76 193.77 148.65", 1, "cls-95"], ["points", "193.77 148.54 197.82 148.54 197.82 148.65 193.77 148.65 193.77 148.54", 1, "cls-95"], ["points", "193.77 148.42 197.82 148.42 197.82 148.54 193.77 148.54 193.77 148.42", 1, "cls-96"], ["points", "193.77 148.31 197.82 148.31 197.82 148.42 193.77 148.42 193.77 148.31", 1, "cls-96"], ["points", "193.77 148.19 197.82 148.19 197.82 148.31 193.77 148.31 193.77 148.19", 1, "cls-96"], ["points", "193.77 148.08 197.82 148.08 197.82 148.19 193.77 148.19 193.77 148.08", 1, "cls-97"], ["points", "193.77 147.97 197.82 147.97 197.82 148.08 193.77 148.08 193.77 147.97", 1, "cls-97"], ["points", "193.77 147.85 197.82 147.85 197.82 147.97 193.77 147.97 193.77 147.85", 1, "cls-98"], ["points", "193.77 147.74 197.82 147.74 197.82 147.85 193.77 147.85 193.77 147.74", 1, "cls-98"], ["points", "193.77 147.63 197.82 147.63 197.82 147.74 193.77 147.74 193.77 147.63", 1, "cls-98"], ["d", "M193.77,147.51H195a6.77,6.77,0,0,0,1.91,0h.9v.11h-4Z", 1, "cls-99"], ["d", "M193.77,147.4h.68l.56.11h-1.24Zm3.67,0h.38v.11h-.9A4.22,4.22,0,0,0,197.44,147.4Z", 1, "cls-99"], ["d", "M193.77,147.28h.33a3.59,3.59,0,0,0,.35.12h-.68Zm3.94,0h.11v.12h-.38l.27-.12Z", 1, "cls-100"], ["d", "M193.77,147.17h.07l.26.11h-.33Zm4,0h0v.11h-.11A.29.29,0,0,0,197.82,147.17Z", 1, "cls-100"], ["d", "M197.82,147.14h0Zm0,0h0v0Zm-4,0h-.07v0Z", 1, "cls-100"], ["d", "M195.13,147.23a.21.21,0,0,0-.22.21v1.28a.22.22,0,0,0,.22.22h1.34a.22.22,0,0,0,.22-.22v-1.28a.21.21,0,0,0-.22-.21Zm0-.18h1.34a.4.4,0,0,1,.4.39v1.28a.4.4,0,0,1-.4.4h-1.34a.4.4,0,0,1-.4-.4v-1.28A.4.4,0,0,1,195.13,147.05Z", 1, "cls-101"], ["points", "195.04 146.27 195.37 145.94 195.7 146.27 195.7 146.48 195.45 146.24 195.45 146.72 195.29 146.72 195.29 146.24 195.04 146.48 195.04 146.27", 1, "cls-101"], ["points", "195.9 146.4 196.23 146.72 196.56 146.4 196.56 146.18 196.31 146.43 196.31 145.94 196.15 145.94 196.15 146.43 195.9 146.18 195.9 146.4", 1, "cls-101"], ["d", "M195.14,147.69a.09.09,0,1,1,.09.1A.09.09,0,0,1,195.14,147.69Z", 1, "cls-101"], ["d", "M195.11,148.77a.05.05,0,0,0,0,0,0,0,0,0,0,.05,0v-.48h0v.48a0,0,0,0,0,.1,0V148h0v.3c0,.06.07.06.07,0v-.31a.12.12,0,0,0-.11-.13h-.22a.12.12,0,0,0-.11.13v.31c0,.06.07.06.07,0V148h0v.82Z", 1, "cls-101"], ["d", "M195.87,147.83a.11.11,0,0,1,.11.09l.08.28c0,.06-.05.09-.07,0l-.07-.26h0l.12.46h-.11v.36a0,0,0,1,1-.08,0v-.36h0v.36a0,0,0,1,1-.08,0v-.36h-.11l.12-.46h0l-.07.26c0,.05-.09,0-.07,0l.07-.28a.12.12,0,0,1,.11-.09Z", 1, "cls-101"], ["d", "M195.8,147.79a.1.1,0,1,1,.09-.1C195.89,147.75,195.86,147.79,195.8,147.79Z", 1, "cls-101"], ["d", "M196.27,147.69a.09.09,0,1,1,.09.1A.09.09,0,0,1,196.27,147.69Z", 1, "cls-101"], ["d", "M196.25,148.77a0,0,0,0,0,.1,0v-.48h0v.48a.05.05,0,0,0,.1,0V148h0v.3a0,0,0,1,0,.08,0v-.31a.13.13,0,0,0-.12-.13h-.21a.13.13,0,0,0-.12.13v.31c0,.06.07.06.07,0V148h0Z", 1, "cls-101"], ["d", "M28.9,2.35h-3a.6.6,0,0,0-.6.6V6a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6V3A.6.6,0,0,0,28.9,2.35Z", 1, "cls-90"], ["d", "M25.88,6.59A.62.62,0,0,1,25.26,6V3a.62.62,0,0,1,.62-.62h3v0h-3a.58.58,0,0,0-.59.59V6a.58.58,0,0,0,.59.59h3A.58.58,0,0,0,29.49,6V3a.58.58,0,0,0-.59-.59h0v0a.62.62,0,0,1,.62.62V6a.62.62,0,0,1-.62.62Z", 1, "cls-91"], ["d", "M25.55,6.35h3.7a.41.41,0,0,1-.25.08H25.8A.41.41,0,0,1,25.55,6.35Z", 1, "cls-92"], ["d", "M25.44,6.24h3.92a.38.38,0,0,1-.11.11h-3.7A.38.38,0,0,1,25.44,6.24Z", 1, "cls-92"], ["d", "M25.39,6.12h4a.61.61,0,0,1-.05.12H25.44A.61.61,0,0,1,25.39,6.12Z", 1, "cls-93"], ["d", "M25.38,6h4a.37.37,0,0,1,0,.11h-4a.37.37,0,0,1,0-.11Z", 1, "cls-93"], ["points", "25.38 5.89 29.42 5.89 29.42 6.01 25.38 6.01 25.38 5.89", 1, "cls-94"], ["points", "25.38 5.78 29.42 5.78 29.42 5.89 25.38 5.89 25.38 5.78", 1, "cls-94"], ["points", "25.38 5.67 29.42 5.67 29.42 5.78 25.38 5.78 25.38 5.67", 1, "cls-94"], ["points", "25.38 5.55 29.42 5.55 29.42 5.67 25.38 5.67 25.38 5.55", 1, "cls-95"], ["points", "25.38 5.44 29.42 5.44 29.42 5.55 25.38 5.55 25.38 5.44", 1, "cls-95"], ["points", "25.38 5.32 29.42 5.32 29.42 5.44 25.38 5.44 25.38 5.32", 1, "cls-96"], ["points", "25.38 5.21 29.42 5.21 29.42 5.32 25.38 5.32 25.38 5.21", 1, "cls-96"], ["points", "25.38 5.09 29.42 5.09 29.42 5.21 25.38 5.21 25.38 5.09", 1, "cls-96"], ["points", "25.38 4.98 29.42 4.98 29.42 5.09 25.38 5.09 25.38 4.98", 1, "cls-97"], ["points", "25.38 4.87 29.42 4.87 29.42 4.98 25.38 4.98 25.38 4.87", 1, "cls-97"], ["points", "25.38 4.75 29.42 4.75 29.42 4.87 25.38 4.87 25.38 4.75", 1, "cls-98"], ["points", "25.38 4.64 29.42 4.64 29.42 4.75 25.38 4.75 25.38 4.64", 1, "cls-98"], ["points", "25.38 4.52 29.42 4.52 29.42 4.64 25.38 4.64 25.38 4.52", 1, "cls-98"], ["d", "M25.38,4.41h1.24a6.7,6.7,0,0,0,1.9,0h.9v.11h-4V4.41Z", 1, "cls-99"], ["d", "M25.38,4.29h.67a5.05,5.05,0,0,0,.56.12H25.38V4.29Zm3.67,0h.37v.12h-.9a3,3,0,0,0,.53-.12Z", 1, "cls-99"], ["d", "M25.38,4.18h.32l.36.11h-.68V4.18Zm3.93,0h.11v.11h-.37A.92.92,0,0,0,29.31,4.18Z", 1, "cls-100"], ["d", "M25.38,4.07h.06l.26.11h-.32Zm4,0h0v.11h-.11a.29.29,0,0,0,.11-.11Z", 1, "cls-100"], ["d", "M29.42,4.07h0v0Zm-4,0h-.06V4Zm4,0h0Z", 1, "cls-100"], ["d", "M28.06,3.82a.15.15,0,0,0,.16-.1.18.18,0,0,1,.16.17v.34l.1.31v0s0,0,0,0h0s0,0,0,0l-.11-.33V4s0,0,0,0h0s0,0,0,0v.27l.26.77h-.25v.64s0,.07-.06.07a.07.07,0,0,1-.06-.07V5H28v.64a.07.07,0,0,1-.07.07s-.06,0-.06-.07V5h-.24l.25-.77V4s0,0,0,0h0a.05.05,0,0,0,0,0v.26l-.12.33s0,0,0,0h0a0,0,0,0,1,0,0v0l.09-.31V3.89a.2.2,0,0,1,.16-.17.17.17,0,0,0,.16.1Zm0-.54a.18.18,0,0,1,.17.18.17.17,0,1,1-.34,0A.18.18,0,0,1,28.06,3.28Z", 1, "cls-101"], ["d", "M26.9,5.71s0,.06-.08.06-.08,0-.08-.06V4.63s0,0,0,0h0s0,0,0,0V5.71s0,.06-.09.06-.08,0-.08-.06V3.82l0,0h0l0,0v.77s0,0,0,0h0s0,0,0,0v-.9a.15.15,0,0,1,.14-.15h.5a.15.15,0,0,1,.14.15v.9s0,0,0,0h0s0,0,0,0V3.82l0,0h0l0,0V5.71Zm-.25-2.26s-.1-.05-.13-.12a.15.15,0,0,1,0-.07v0a.19.19,0,0,1,.18-.15h0a.18.18,0,0,1,.14.18.19.19,0,0,1,0,.07.16.16,0,0,1-.15.12h-.06Z", 1, "cls-101"], ["points", "27.35 3.08 27.43 3.08 27.43 5.77 27.35 5.77 27.35 3.08", 1, "cls-101"], ["d", "M13.3,21.68h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,13.3,21.68Z", 1, "cls-90"], ["d", "M10.28,25.92a.61.61,0,0,1-.62-.61v-3a.62.62,0,0,1,.62-.61h3v0h-3a.58.58,0,0,0-.59.58v3a.59.59,0,0,0,.59.59h3a.59.59,0,0,0,.59-.59v-3a.58.58,0,0,0-.59-.58v0h0a.62.62,0,0,1,.62.61v3a.61.61,0,0,1-.62.61Z", 1, "cls-91"], ["d", "M9.94,25.68h3.72a.36.36,0,0,1-.24.09H10.18a.36.36,0,0,1-.24-.09Z", 1, "cls-92"], ["d", "M9.84,25.57h3.92a.36.36,0,0,1-.1.11H9.94a.36.36,0,0,1-.1-.11Z", 1, "cls-92"], ["d", "M9.79,25.46h4a.37.37,0,0,1-.05.11H9.84a.37.37,0,0,1-.05-.11Z", 1, "cls-93"], ["d", "M9.78,25.34h4a.41.41,0,0,1,0,.11h-4a.28.28,0,0,1,0-.09Z", 1, "cls-93"], ["points", "9.78 25.23 13.82 25.23 13.82 25.34 9.78 25.34 9.78 25.23", 1, "cls-94"], ["points", "9.78 25.11 13.82 25.11 13.82 25.23 9.78 25.23 9.78 25.11", 1, "cls-94"], ["points", "9.78 25 13.82 25 13.82 25.11 9.78 25.11 9.78 25", 1, "cls-94"], ["points", "9.78 24.89 13.82 24.89 13.82 25 9.78 25 9.78 24.89", 1, "cls-95"], ["points", "9.78 24.77 13.82 24.77 13.82 24.89 9.78 24.89 9.78 24.77", 1, "cls-95"], ["points", "9.78 24.66 13.82 24.66 13.82 24.77 9.78 24.77 9.78 24.66", 1, "cls-96"], ["points", "9.78 24.54 13.82 24.54 13.82 24.66 9.78 24.66 9.78 24.54", 1, "cls-96"], ["points", "9.78 24.43 13.82 24.43 13.82 24.54 9.78 24.54 9.78 24.43", 1, "cls-96"], ["points", "9.78 24.32 13.82 24.32 13.82 24.43 9.78 24.43 9.78 24.32", 1, "cls-97"], ["points", "9.78 24.2 13.82 24.2 13.82 24.32 9.78 24.32 9.78 24.2", 1, "cls-97"], ["points", "9.78 24.09 13.82 24.09 13.82 24.2 9.78 24.2 9.78 24.09", 1, "cls-98"], ["points", "9.78 23.97 13.82 23.97 13.82 24.09 9.78 24.09 9.78 23.97", 1, "cls-98"], ["points", "9.78 23.86 13.82 23.86 13.82 23.97 9.78 23.97 9.78 23.86", 1, "cls-98"], ["d", "M9.78,23.74H11a6.49,6.49,0,0,0,1.92,0h.89v.12h-4Z", 1, "cls-99"], ["d", "M9.78,23.63h.68a3.35,3.35,0,0,0,.55.11H9.78Zm3.67,0h.37v.11h-.89A3.14,3.14,0,0,0,13.45,23.63Z", 1, "cls-99"], ["d", "M9.78,23.52h.32l.36.11H9.78v-.11Zm3.93,0h.11v.11h-.37A.92.92,0,0,0,13.71,23.52Z", 1, "cls-100"], ["d", "M9.78,23.4h.07l.25.12H9.78Zm4,0h0v.12h-.11A.3.3,0,0,0,13.82,23.4Z", 1, "cls-100"], ["d", "M13.82,23.4h0v0Zm-4,0H9.78v0Zm4,0Z", 1, "cls-100"], ["d", "M12.46,23.15a.15.15,0,0,0,.16-.1.19.19,0,0,1,.16.18v.34l.1.31v0s0,0,0,0h0l0,0-.11-.34v-.26a0,0,0,0,0,0,0h0a0,0,0,0,0,0,0v.27l.26.78h-.25V25a.06.06,0,1,1-.12,0v-.64h-.07V25s0,.06-.07.06A.06.06,0,0,1,12.3,25v-.64h-.24l.25-.78v-.27a0,0,0,0,0,0,0h0s0,0,0,0v.26l-.12.34s0,0,0,0h0s0,0,0,0v0l.09-.31v-.34a.22.22,0,0,1,.16-.18.17.17,0,0,0,.16.1Zm0-.53a.18.18,0,0,1,.17.17.17.17,0,1,1-.34,0A.18.18,0,0,1,12.46,22.62Z", 1, "cls-101"], ["d", "M11.3,25.05s0,.06-.08.06-.08,0-.08-.06V24a0,0,0,0,0,0,0h0a0,0,0,0,0,0,0v1.08s0,.06-.09.06-.08,0-.08-.06V23.16s0,0,0,0h0s0,0,0,0v.77s0,0,0,0h0s0,0,0,0V23c0-.09.06-.13.14-.15h.5c.08,0,.14.06.14.15v.91s0,0,0,0h0s0,0,0,0v-.77a0,0,0,0,0,0,0h0a0,0,0,0,0,0,0v1.89Zm-.25-2.27s-.1-.05-.13-.12a.13.13,0,0,1,0-.06v0a.19.19,0,0,1,.18-.16h.05a.17.17,0,0,1,.13.17.15.15,0,0,1,0,.07.16.16,0,0,1-.15.12h-.06Z", 1, "cls-101"], ["points", "11.74 22.41 11.83 22.41 11.83 25.11 11.74 25.11 11.74 22.41", 1, "cls-101"], ["d", "M273.19,46.81h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,273.19,46.81Z", 1, "cls-90"], ["d", "M270.16,51.05a.61.61,0,0,1-.61-.61v-3a.61.61,0,0,1,.61-.61h0a.58.58,0,0,0-.59.59v3a.58.58,0,0,0,.59.58h3a.58.58,0,0,0,.58-.58v-3a.58.58,0,0,0-.58-.59h0a.61.61,0,0,1,.61.61v3a.62.62,0,0,1-.61.61Z", 1, "cls-91"], ["d", "M269.83,50.81h3.71a.5.5,0,0,1-.24.09h-3.23a.5.5,0,0,1-.24-.09Z", 1, "cls-92"], ["d", "M269.73,50.7h3.91a.35.35,0,0,1-.1.11h-3.71a.35.35,0,0,1-.1-.11Z", 1, "cls-92"], ["d", "M269.67,50.58h4a.61.61,0,0,1-.05.12h-3.92l-.05-.12Z", 1, "cls-93"], ["d", "M269.66,50.47h4a.36.36,0,0,1,0,.11h-4s0-.07,0-.11Z", 1, "cls-93"], ["points", "269.66 50.35 273.71 50.35 273.71 50.47 269.66 50.47 269.66 50.35", 1, "cls-94"], ["points", "269.66 50.24 273.71 50.24 273.71 50.35 269.66 50.35 269.66 50.24", 1, "cls-94"], ["points", "269.66 50.12 273.71 50.12 273.71 50.24 269.66 50.24 269.66 50.12", 1, "cls-94"], ["points", "269.66 50.01 273.71 50.01 273.71 50.12 269.66 50.12 269.66 50.01", 1, "cls-95"], ["points", "269.66 49.9 273.71 49.9 273.71 50.01 269.66 50.01 269.66 49.9", 1, "cls-95"], ["points", "269.66 49.78 273.71 49.78 273.71 49.9 269.66 49.9 269.66 49.78", 1, "cls-96"], ["points", "269.66 49.67 273.71 49.67 273.71 49.78 269.66 49.78 269.66 49.67", 1, "cls-96"], ["points", "269.66 49.55 273.71 49.55 273.71 49.67 269.66 49.67 269.66 49.55", 1, "cls-96"], ["points", "269.66 49.44 273.71 49.44 273.71 49.55 269.66 49.55 269.66 49.44", 1, "cls-97"], ["points", "269.66 49.33 273.71 49.33 273.71 49.44 269.66 49.44 269.66 49.33", 1, "cls-97"], ["points", "269.66 49.21 273.71 49.21 273.71 49.33 269.66 49.33 269.66 49.21", 1, "cls-98"], ["points", "269.66 49.1 273.71 49.1 273.71 49.21 269.66 49.21 269.66 49.1", 1, "cls-98"], ["points", "269.66 48.98 273.71 48.98 273.71 49.1 269.66 49.1 269.66 48.98", 1, "cls-98"], ["d", "M269.66,48.87h1.23a6.84,6.84,0,0,0,1.92,0h.9V49h-4Z", 1, "cls-99"], ["d", "M269.66,48.76h.68l.55.11h-1.23Zm3.67,0h.38v.11h-.9a4.22,4.22,0,0,0,.52-.11Z", 1, "cls-99"], ["d", "M269.66,48.64H270a3.59,3.59,0,0,0,.35.12h-.68Zm3.93,0h.12v.12h-.38A1.29,1.29,0,0,0,273.59,48.64Z", 1, "cls-100"], ["d", "M269.66,48.53h.07l.25.11h-.32Zm4,0h0v.11h-.11S273.69,48.57,273.7,48.53Z", 1, "cls-100"], ["d", "M273.71,48.5h0Zm0,0h0a0,0,0,0,0,0,0Zm-4,0h-.07v0Z", 1, "cls-100"], ["d", "M272.35,48.28a.19.19,0,0,0,.16-.1.19.19,0,0,1,.15.17v.34l.1.32h0a0,0,0,0,1,0,0h0a0,0,0,0,1,0,0l-.12-.33v-.26a.05.05,0,0,0,0,0h0a.05.05,0,0,0,0,0v.27l.25.77h-.24v.65a.06.06,0,0,1-.06.06.07.07,0,0,1-.07-.06v-.65h-.07v.65a.06.06,0,0,1-.06.06.05.05,0,0,1-.06-.06v-.65h-.25l.26-.77v-.27s0,0,0,0h0a.05.05,0,0,0,0,0v.26L272,49s0,0,0,0h0s0,0,0,0h0l.1-.32v-.34a.19.19,0,0,1,.15-.17.19.19,0,0,0,.17.1Zm0-.54a.18.18,0,0,1,.17.18.18.18,0,0,1-.17.17.18.18,0,0,1-.18-.17A.18.18,0,0,1,272.35,47.74Z", 1, "cls-101"], ["d", "M271.19,50.17a.07.07,0,0,1-.08.07.08.08,0,0,1-.09-.07V49.1s0,0,0,0,0,0,0,0h0s0,0,0,0v1.07a.08.08,0,0,1-.08.07.07.07,0,0,1-.08-.07V48.29s0,0,0,0h0s0,0,0,0v.76s0,0,0,.05h0a0,0,0,0,1,0-.05v-.9c0-.09.07-.13.15-.15h.49c.08,0,.15.06.15.15v.9a.06.06,0,0,1,0,.05h0a.06.06,0,0,1,0-.05v-.76s0,0,0,0h0s0,0,0,0v1.88Zm-.26-2.26a.16.16,0,0,1-.12-.12.08.08,0,0,1,0-.07v0a.2.2,0,0,1,.19-.16h0a.16.16,0,0,1,.14.17.18.18,0,0,1-.16.19h-.07Z", 1, "cls-101"], ["points", "271.63 47.54 271.71 47.54 271.71 50.23 271.63 50.23 271.63 47.54", 1, "cls-101"], ["d", "M394.14,99.6h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.61h3a.6.6,0,0,0,.6-.61v-3A.6.6,0,0,0,394.14,99.6Z", 1, "cls-90"], ["d", "M391.12,103.84a.62.62,0,0,1-.62-.61v-3a.61.61,0,0,1,.62-.61h0a.58.58,0,0,0-.59.59v3a.58.58,0,0,0,.59.58h3a.58.58,0,0,0,.59-.58v-3a.58.58,0,0,0-.59-.59h0a.61.61,0,0,1,.62.61v3a.62.62,0,0,1-.62.61Z", 1, "cls-91"], ["d", "M390.79,103.6h3.71a.45.45,0,0,1-.26.08H391A.44.44,0,0,1,390.79,103.6Z", 1, "cls-92"], ["d", "M390.68,103.49h3.92a.52.52,0,0,1-.1.11h-3.71a.57.57,0,0,1-.11-.11Z", 1, "cls-92"], ["d", "M390.63,103.37h4a.61.61,0,0,1,0,.12h-3.92A.61.61,0,0,1,390.63,103.37Z", 1, "cls-93"], ["d", "M390.62,103.26h4.05a.36.36,0,0,1,0,.11h-4a.37.37,0,0,1,0-.11Z", 1, "cls-93"], ["points", "390.62 103.15 394.67 103.15 394.67 103.26 390.62 103.26 390.62 103.15", 1, "cls-94"], ["points", "390.62 103.03 394.67 103.03 394.67 103.14 390.62 103.14 390.62 103.03", 1, "cls-94"], ["points", "390.62 102.92 394.67 102.92 394.67 103.03 390.62 103.03 390.62 102.92", 1, "cls-94"], ["points", "390.62 102.8 394.67 102.8 394.67 102.92 390.62 102.92 390.62 102.8", 1, "cls-95"], ["points", "390.62 102.69 394.67 102.69 394.67 102.8 390.62 102.8 390.62 102.69", 1, "cls-95"], ["points", "390.62 102.57 394.67 102.57 394.67 102.69 390.62 102.69 390.62 102.57", 1, "cls-96"], ["points", "390.62 102.46 394.67 102.46 394.67 102.57 390.62 102.57 390.62 102.46", 1, "cls-96"], ["points", "390.62 102.34 394.67 102.34 394.67 102.46 390.62 102.46 390.62 102.34", 1, "cls-96"], ["points", "390.62 102.23 394.67 102.23 394.67 102.34 390.62 102.34 390.62 102.23", 1, "cls-97"], ["points", "390.62 102.12 394.67 102.12 394.67 102.23 390.62 102.23 390.62 102.12", 1, "cls-97"], ["points", "390.62 102 394.67 102 394.67 102.12 390.62 102.12 390.62 102", 1, "cls-98"], ["points", "390.62 101.89 394.67 101.89 394.67 102 390.62 102 390.62 101.89", 1, "cls-98"], ["points", "390.62 101.78 394.67 101.78 394.67 101.89 390.62 101.89 390.62 101.78", 1, "cls-98"], ["d", "M390.62,101.66h1.24a6.7,6.7,0,0,0,1.9,0h.91v.12h-4.05v-.12Z", 1, "cls-99"], ["d", "M390.62,101.54h.68a4.61,4.61,0,0,0,.56.12h-1.24Zm3.67,0h.38v.12h-.91A3,3,0,0,0,394.29,101.54Z", 1, "cls-99"], ["d", "M390.62,101.43H391l.35.12h-.68Zm3.93,0h.12v.12h-.38A1.29,1.29,0,0,0,394.55,101.43Z", 1, "cls-100"], ["d", "M390.62,101.32h.07l.25.11h-.32Zm4,0h0v.11h-.12A.19.19,0,0,0,394.66,101.32Z", 1, "cls-100"], ["d", "M394.67,101.32h0a0,0,0,0,1,0,0Zm-4,0h-.07v0Zm4,0h0Z", 1, "cls-100"], ["d", "M393.3,101.07a.17.17,0,0,0,.16-.1.18.18,0,0,1,.16.17v.34l.1.31v0s0,0,0,0h0s0,0,0,0l-.11-.33v-.26s0,0,0,0h0a.05.05,0,0,0,0,0v.27l.25.77h-.25v.65a.05.05,0,0,1-.06.06.06.06,0,0,1-.06-.06v-.65h-.07v.65a.07.07,0,0,1-.07.06.06.06,0,0,1-.06-.06v-.65h-.24l.25-.77v-.27a.05.05,0,0,0,0,0h0a.05.05,0,0,0,0,0v.26l-.12.33a0,0,0,0,1,0,0h0a0,0,0,0,1,0,0v0l.09-.31v-.34a.2.2,0,0,1,.16-.17.19.19,0,0,0,.16.1Zm0-.54a.18.18,0,0,1,.18.18.18.18,0,0,1-.18.17.18.18,0,0,1-.17-.17A.18.18,0,0,1,393.3,100.53Z", 1, "cls-101"], ["d", "M392.15,103c0,.05,0,.07-.09.07A.08.08,0,0,1,392,103v-1.07s0,0,0,0h0s0,0,0,0V103a.08.08,0,0,1-.08.07c-.05,0-.08,0-.08-.07v-1.88a0,0,0,0,0,0,0h0a0,0,0,0,0,0,0v.76a0,0,0,0,1,0,0h0a0,0,0,0,1,0,0v-.9c0-.09.06-.13.14-.15h.5c.08,0,.15.06.15.15v.9s0,0,0,0h0a0,0,0,0,1,0,0v-.76s0,0,0,0h0s0,0,0,0V103Zm-.26-2.26s-.1,0-.13-.12a.15.15,0,0,1,0-.07v0a.19.19,0,0,1,.18-.16H392a.17.17,0,0,1,.14.17.19.19,0,0,1,0,.07.15.15,0,0,1-.15.12h-.06Z", 1, "cls-101"], ["points", "392.59 100.33 392.67 100.33 392.67 103.03 392.59 103.03 392.59 100.33", 1, "cls-101"], ["d", "M278.12,168.81h-3a.6.6,0,0,0-.6.6v3a.6.6,0,0,0,.6.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,278.12,168.81Z", 1, "cls-90"], ["d", "M275.09,173.05a.61.61,0,0,1-.61-.61v-3a.61.61,0,0,1,.61-.61h3v0h-3a.58.58,0,0,0-.59.58v3a.58.58,0,0,0,.59.59h3a.58.58,0,0,0,.58-.59v-3a.58.58,0,0,0-.58-.58v0h0a.62.62,0,0,1,.61.61v3a.61.61,0,0,1-.61.61Z", 1, "cls-91"], ["d", "M274.76,172.82h3.71a.45.45,0,0,1-.26.08H275a.44.44,0,0,1-.25-.08Z", 1, "cls-92"], ["d", "M274.65,172.7h3.92a.29.29,0,0,1-.1.12h-3.71a.43.43,0,0,1-.11-.12Z", 1, "cls-92"], ["d", "M274.6,172.59h4a.37.37,0,0,1-.05.11h-3.92a.37.37,0,0,1,0-.11Z", 1, "cls-93"], ["d", "M274.59,172.47h4.05a.43.43,0,0,1,0,.11h-4a.41.41,0,0,1,0-.11Z", 1, "cls-93"], ["points", "274.59 172.36 278.64 172.36 278.64 172.47 274.59 172.47 274.59 172.36", 1, "cls-94"], ["points", "274.59 172.25 278.64 172.25 278.64 172.36 274.59 172.36 274.59 172.25", 1, "cls-94"], ["points", "274.59 172.13 278.64 172.13 278.64 172.25 274.59 172.25 274.59 172.13", 1, "cls-94"], ["points", "274.59 172.02 278.64 172.02 278.64 172.13 274.59 172.13 274.59 172.02", 1, "cls-95"], ["points", "274.59 171.9 278.64 171.9 278.64 172.02 274.59 172.02 274.59 171.9", 1, "cls-95"], ["points", "274.59 171.79 278.64 171.79 278.64 171.9 274.59 171.9 274.59 171.79", 1, "cls-96"], ["points", "274.59 171.67 278.64 171.67 278.64 171.79 274.59 171.79 274.59 171.67", 1, "cls-96"], ["points", "274.59 171.56 278.64 171.56 278.64 171.67 274.59 171.67 274.59 171.56", 1, "cls-96"], ["points", "274.59 171.44 278.64 171.44 278.64 171.56 274.59 171.56 274.59 171.44", 1, "cls-97"], ["points", "274.59 171.33 278.64 171.33 278.64 171.44 274.59 171.44 274.59 171.33", 1, "cls-97"], ["points", "274.59 171.22 278.64 171.22 278.64 171.33 274.59 171.33 274.59 171.22", 1, "cls-98"], ["points", "274.59 171.1 278.64 171.1 278.64 171.22 274.59 171.22 274.59 171.1", 1, "cls-98"], ["points", "274.59 170.99 278.64 170.99 278.64 171.1 274.59 171.1 274.59 170.99", 1, "cls-98"], ["d", "M274.59,170.87h1.23a6.49,6.49,0,0,0,1.92,0h.9V171h-4.05Z", 1, "cls-99"], ["d", "M274.59,170.76h.68a4.88,4.88,0,0,0,.55.12h-1.23v-.12Zm3.67,0h.38v.12h-.9A2.87,2.87,0,0,0,278.26,170.76Z", 1, "cls-99"], ["d", "M274.59,170.65h.33l.35.11h-.68Zm3.93,0h.12v.11h-.38A.92.92,0,0,0,278.52,170.65Z", 1, "cls-100"], ["d", "M274.59,170.53h.07l.25.12h-.32Zm4,0h0v.12h-.12A.24.24,0,0,0,278.63,170.53Z", 1, "cls-100"], ["d", "M278.64,170.5Zm0,0h0v0Zm-4,0h-.07v0Z", 1, "cls-100"], ["d", "M277.28,170.28a.18.18,0,0,0,.16-.09.17.17,0,0,1,.15.17v.34l.1.31v0s0,0,0,0h0s0,0,0,0l-.12-.33v-.27s0,0,0,0h0s0,0,0,0v.27l.25.78h-.24v.64a.06.06,0,0,1-.06.06s-.07,0-.07-.06v-.64h-.07v.64a.06.06,0,0,1-.06.06.05.05,0,0,1-.06-.06v-.64h-.25l.25-.78v-.27s0,0,0,0h0s0,0,0,0v.27l-.11.33a.05.05,0,0,1,0,0h0l0,0v0l.1-.31v-.34a.17.17,0,0,1,.15-.17.19.19,0,0,0,.17.09Zm0-.53a.18.18,0,0,1,.18.17.18.18,0,0,1-.18.18.18.18,0,0,1-.17-.18A.18.18,0,0,1,277.27,169.75Z", 1, "cls-101"], ["d", "M276.12,172.18s0,.06-.08.06-.09,0-.09-.06V171.1s0,0,0,0h0a0,0,0,0,0,0,0v1.08s0,.06-.08.06-.08,0-.08-.06v-1.89a0,0,0,0,0,0,0h0s0,0,0,0v.77s0,0,0,0h0s0,0,0,0v-.91c0-.09.07-.13.15-.15h.49c.08,0,.15.06.15.15v.91s0,0,0,0h0s0,0,0,0v-.77s0,0,0,0h0s0,0,0,0v1.89Zm-.26-2.27s-.1,0-.13-.12a.13.13,0,0,1,0-.06v0a.2.2,0,0,1,.19-.16h0a.17.17,0,0,1,.14.17.15.15,0,0,1,0,.07.17.17,0,0,1-.16.12h-.06Z", 1, "cls-101"], ["points", "276.56 169.54 276.64 169.54 276.64 172.24 276.56 172.24 276.56 169.54", 1, "cls-101"], ["d", "M280.47,60.24a.61.61,0,0,1-.61-.61v-3a.61.61,0,0,1,.61-.61h3v0h-3a.58.58,0,0,0-.59.58v3a.58.58,0,0,0,.59.59h3a.58.58,0,0,0,.58-.59v-3a.58.58,0,0,0-.58-.58v0h0a.62.62,0,0,1,.61.61v3a.61.61,0,0,1-.61.61Z", 1, "cls-91"], ["d", "M370.44,82.31v7.94a1.16,1.16,0,0,0,1.17,1.16H373v2.1l4.55-2.1h7.58a1.16,1.16,0,0,0,1.16-1.16h0V82.31a1.16,1.16,0,0,0-1.16-1.16H371.61A1.16,1.16,0,0,0,370.44,82.31Z", 1, "cls-102"], ["id", "_287808376", "data-name", " 287808376"], ["id", "_301277944", "data-name", " 301277944", "d", "M385.14,81.19H371.61a1.18,1.18,0,0,0-.88.4,1.18,1.18,0,0,1,.76-.28H385a1.11,1.11,0,0,1,1.15,1.12v7.93a1.16,1.16,0,0,1-.29.77,1.16,1.16,0,0,0,.4-.88V82.31A1.11,1.11,0,0,0,385.14,81.19Z", 1, "cls-57"], ["d", "M372.54,90.13H384.2a.87.87,0,0,0,.88-.87h0V83.19a.87.87,0,0,0-.88-.87H372.54a.87.87,0,0,0-.87.87v6.07A.87.87,0,0,0,372.54,90.13Z", 1, "cls-103"], ["id", "_287808256", "data-name", " 287808256"], ["id", "_301282888", "data-name", " 301282888", "d", "M384.2,82.36H372.54a.88.88,0,0,0-.7.35.88.88,0,0,1,.52-.18H384a.82.82,0,0,1,.85.83v6.07a.83.83,0,0,1-.17.52.88.88,0,0,0,.35-.7V83.19a.82.82,0,0,0-.86-.83Z", 1, "cls-59"], ["d", "M374.26,87.13l-.12-.1a1.56,1.56,0,0,1-.12-.11,1.2,1.2,0,0,0,.23-.45,3.54,3.54,0,0,0,.05-.68v-.66h.6l-.19-.35.29-.11a.46.46,0,0,1,.05.1,1.64,1.64,0,0,1,.15.27l-.21.09h.64v.28h-1v.39a3.7,3.7,0,0,1-.07.78,1.65,1.65,0,0,1-.27.55Zm-.72-.61h.3v-.58h-.3Zm0-.83h.3v-.57h-.3Zm-.26,1.25V84.87h.81v1.91h-.55v.16Z", 1, "cls-57"], ["d", "M376.79,85.76l-.2-.21,0,0h-.11V86l.21,0v.28a1.62,1.62,0,0,0,.47-.85H377Zm-.82.09-.21-.06a3.73,3.73,0,0,0,.13-.87l.22,0,0,.31h.14V84.7h.28v.55h.19v.17a3,3,0,0,0,.33-.72l.27.06a1,1,0,0,1-.08.22l0,.1h1l-.05,1.55a.37.37,0,0,1-.4.42h-.35s0,0,0-.11,0-.13,0-.16h.32c.14,0,.21-.07.21-.22s0-.45,0-1c0-.12,0-.21,0-.25h-.14a2,2,0,0,1-.82,1.74l-.22-.23a1.84,1.84,0,0,0,.84-1.51h-.16a1.83,1.83,0,0,1-.59,1.18l-.16-.16-.06-.06.12-.09-.19,0v.87h-.28v-.8l-.41.12,0-.32.14,0,.3-.07v-.52H376c0,.06,0,.15,0,.26a.31.31,0,0,0,0,.08Z", 1, "cls-57"], ["d", "M380.19,85.57l-.22-.2c.19-.2.34-.38.46-.52l.24.18q-.23.27-.48.54Zm-1.21,0a5.82,5.82,0,0,0-.45-.52l.23-.18.46.5-.24.2Zm-.59.42V85.7h1.06v-1h.31v1h1.06V86h-.76v.67c0,.11,0,.16.15.15h.15a.13.13,0,0,0,.15-.14.46.46,0,0,1,0-.1,1.44,1.44,0,0,0,0-.25l.3.11a3.74,3.74,0,0,1-.08.38c0,.19-.16.27-.38.27h-.28c-.25,0-.37-.11-.36-.35V86h-.41V86a1.1,1.1,0,0,1-.78,1.09l-.09-.13-.1-.14A.83.83,0,0,0,379,86a.08.08,0,0,1,0,0v0Z", 1, "cls-57"], ["d", "M382.82,85.55v1.1H383c.09,0,.14-.05.14-.15a.62.62,0,0,0-.24-.42l.2-.53Zm-.25,1.58V85.32h.79v.23l-.19.5a.63.63,0,0,1,.22.48.3.3,0,0,1-.31.35h-.19c0-.09-.05-.17-.07-.22v.47Zm-.74-1h.35V86h-.35Zm0-.37h.35v-.18h-.35ZM382.3,87l-.09-.19-.38.16a.78.78,0,0,0-.18.11l-.15-.22a.24.24,0,0,0,.07-.2V85.39h.31l-.05-.16.27,0a.47.47,0,0,1,0,.17v0h.27v1h-.58v.35l.13,0,.14,0a1.09,1.09,0,0,1-.08-.15l.2-.09.19.3a1.39,1.39,0,0,0,.11.19l-.22.12Zm-1.11.13-.22-.21a2,2,0,0,0,.19-1.06v-1h1l-.06-.21.36,0s0,.09.05.17,0,.05,0,.07h.91v.24h-2v.74a2.29,2.29,0,0,1-.23,1.25Z", 1, "cls-57"], ["id", "_287808304", "data-name", " 287808304"], ["id", "_301278880", "data-name", " 301278880", "d", "M317.22,51.63H306.77a.77.77,0,0,0-.62.31.76.76,0,0,1,.47-.16h10.44a.78.78,0,0,1,.77.8V58a.76.76,0,0,1-.16.47.79.79,0,0,0,.32-.63V52.42a.78.78,0,0,0-.77-.79Z", 1, "cls-59"], ["id", "_287807104", "data-name", " 287807104"], ["id", "_301284256", "data-name", " 301284256", "d", "M332.46,55.56h-8.19a.7.7,0,0,0-.53.24.71.71,0,0,1,.46-.17h8.19a.68.68,0,0,1,.7.68v4.8a.72.72,0,0,1-.17.46.73.73,0,0,0,.24-.53v-4.8A.68.68,0,0,0,332.46,55.56Z", 1, "cls-57"], ["d", "M323.57,56.24V61a.71.71,0,0,0,.71.71h.84V63l2.76-1.27h4.59a.7.7,0,0,0,.7-.71h0v-4.8a.7.7,0,0,0-.7-.71h-8.19A.71.71,0,0,0,323.57,56.24Z", 1, "cls-104"], ["d", "M324.84,61h7.06a.53.53,0,0,0,.53-.53h0V56.77a.53.53,0,0,0-.53-.53h-7.06a.53.53,0,0,0-.53.53v3.67A.53.53,0,0,0,324.84,61Z", 1, "cls-105"], ["id", "_287807728", "data-name", " 287807728"], ["id", "_301278472", "data-name", " 301278472", "d", "M331.9,56.26h-7.06a.52.52,0,0,0-.42.22.51.51,0,0,1,.31-.11h7.06a.49.49,0,0,1,.52.5v3.67a.58.58,0,0,1-.1.32.54.54,0,0,0,.21-.42V56.77A.5.5,0,0,0,331.9,56.26Z", 1, "cls-59"], ["d", "M326.06,58v-.27H327v-.36h.3v.36h.94V58h-.82a2.31,2.31,0,0,0,.9,1c-.05.1-.1.2-.14.3a2.61,2.61,0,0,1-.88-1V59h.47v.27h-.47v.4H327v-.4h-.48V59H327V58.3a2.66,2.66,0,0,1-.88,1,1.16,1.16,0,0,0-.06-.16c0-.06-.06-.11-.08-.14a2.71,2.71,0,0,0,.91-1Z", 1, "cls-57"], ["d", "M328.65,58.67a1.51,1.51,0,0,0-.21-.23,3.75,3.75,0,0,0,.9-1.07l.33.05a2.63,2.63,0,0,1-.2.33h1.16V58a2.91,2.91,0,0,1-1.87,1.68,1.87,1.87,0,0,0-.2-.28,3.9,3.9,0,0,0,1-.5c-.2-.19-.39-.35-.56-.49l.19-.23.31.26a2.38,2.38,0,0,1,.32.25,2,2,0,0,0,.48-.69h-1a5.18,5.18,0,0,1-.61.64Z", 1, "cls-57"], ["d", "M295.25,70.48V74a.51.51,0,0,0,.51.51h.62v.93l2-.93h3.34a.51.51,0,0,0,.51-.51h0V70.48a.51.51,0,0,0-.51-.52h-5.95a.51.51,0,0,0-.51.52Z", 1, "cls-106"], ["id", "_287807632", "data-name", " 287807632"], ["id", "_301283920", "data-name", " 301283920", "d", "M301.71,70h-5.95a.49.49,0,0,0-.38.18.48.48,0,0,1,.33-.12h6a.49.49,0,0,1,.5.49V74a.56.56,0,0,1-.12.34.53.53,0,0,0,.17-.39V70.48a.49.49,0,0,0-.5-.5Z", 1, "cls-57"], ["d", "M301.3,70.48h-5.13a.38.38,0,0,0-.38.38v2.67a.38.38,0,0,0,.38.38h5.13a.38.38,0,0,0,.38-.38h0V70.86A.38.38,0,0,0,301.3,70.48Z", 1, "cls-107"], ["d", "M298.48,72.31h-.13v.4h0c.05,0,.08,0,.08-.07Zm-.8-.56v-.37h.18v.21h.2V71.3h.17v.29h.2v-.21h.18v.37Zm-.05.27v-.16h1.05V72h-.47l0,.13h.47v.53c0,.12-.06.19-.17.19h-.16a.31.31,0,0,0,0-.08h-.09v-.48h-.12v.49h-.14v-.49h-.13v.57h-.16v-.73H298l0-.13Zm-.52-.44V71.4h.49v.18h-.15v.36h.13v.17h-.13v.37l.16,0v.18l-.49.1,0-.2h.18v-.41h-.14v-.17h.14v-.36Z", 1, "cls-57"], ["d", "M299.23,71.71v-.18h.45V71.3h.19v.23h.46v.18h-.46v.22h.42v.18h-.38a1.17,1.17,0,0,0,.46.45l-.12.19a1.53,1.53,0,0,1-.38-.43v.56h-.19v-.56a1.86,1.86,0,0,1-.41.45l-.07-.1-.06-.08a1.41,1.41,0,0,0,.49-.48h-.36v-.18h.41v-.22Zm-.15,0c-.07-.06-.15-.14-.26-.22l.13-.14a2.47,2.47,0,0,1,.27.21ZM299,72.88l-.2-.07a4,4,0,0,0,.18-.6l.2.07q-.07.21-.18.6Zm0-.77-.27-.23.14-.14.27.22Z", 1, "cls-57"], ["d", "M295.1,77.8l-.51-1.62a5.75,5.75,0,0,0,.31.75,4.49,4.49,0,0,0,.56.86,4.23,4.23,0,0,0,.9.82,5.08,5.08,0,0,0,1.3.64l.49,1.62a5.08,5.08,0,0,1-1.3-.64,4.42,4.42,0,0,1-.89-.82,4.49,4.49,0,0,1-.56-.86,3.9,3.9,0,0,1-.3-.75Z", 1, "cls-40"], ["d", "M298.16,80.87a4.77,4.77,0,0,1-.5-.19h0l-.09,0h0l-.08,0h-.24l0,0h-.16l0,0h-.11l0,0h-.08l0,0h-.06l0,0h-.05v0h0l0,0h0a3.94,3.94,0,0,1-.62-.6h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0c-.07-.12-.14-.24-.2-.36h0a4.49,4.49,0,0,1-.23-.53h0v0h0v0h0v0h0v-.4c-.11-.35-.21-.7-.32-1.05V76.2h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0l.11.23h0a2.28,2.28,0,0,0,.17.3h0l.05.07h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0l0,0h0l0,0h0l.07.06h0l.06,0h0l0,0h0l.06,0h0l.06.05h0l0,0h.06l0,0h.09a4,4,0,0,0,.8.43h0l.11,0h0l.21.08h0l.12,0,.49,1.62ZM294.6,76.2h0Zm0,0h0", 1, "cls-40"], ["d", "M301.09,79.53l.48,1.62-.35,0-.33,0-.3,0h-.29a8.52,8.52,0,0,1-.95,0l-.66-.12a3.49,3.49,0,0,1-.39-.13l-.14-.06-.49-1.62.14.06a3.14,3.14,0,0,0,.4.13l.66.12a8.39,8.39,0,0,0,.95,0h.29l.31,0,.32,0,.35,0Z", 1, "cls-40"], ["d", "M301.51,81l.06.18h-2l-.25,0h0l-.2,0h-.8l-.05,0h-.15l-.49-1.62h.23l.13,0h.64l.2,0,.26,0h2l.42,1.44Z", 1, "cls-40"], ["points", "301.44 75.56 301.92 77.19 301.57 81.15 301.09 79.53 301.44 75.56", 1, "cls-39"], ["d", "M301.44,75.56l-.35,4-.35,0-.33,0-.31,0h-.29a8.66,8.66,0,0,1-.95,0l-.66-.12a3.49,3.49,0,0,1-.39-.13l-.15-.06a4.76,4.76,0,0,1-1.7-1,4.46,4.46,0,0,1-1-1.19,4.8,4.8,0,0,1-.43-1,4.44,4.44,0,0,1-.11-.51Z", 1, "cls-41"], ["d", "M104.36,112.29H104v0a.07.07,0,0,1,0,.05l.18.16.17.15v-.39Zm-.77-.67h.65v-.3h-.65Zm-.1.67v.42a.53.53,0,0,0,.29-.42Zm-.25,1v-1.23h.56v-.2h-.45v-.76h1.15v.76h-.45v.2h.56v.86a.29.29,0,0,1-.33.35H104a1.49,1.49,0,0,0,0-.17.31.31,0,0,1,0-.08h.24c.12,0,.18-.06.17-.18v-.13l-.15.16-.07-.08a1.33,1.33,0,0,0-.22-.21.88.88,0,0,1-.33.35l-.1-.12v.46Zm-.75-1.31v-.12l-.11-.2a2.37,2.37,0,0,0,.28-.67l.26,0-.09.26h.36v.22h-.46l-.12.23h.51V112h-.23v.26h.26v.23h-.26v.41l.25-.16a1.15,1.15,0,0,0,0,.24v0l-.13.08-.21.13-.11.09-.13-.21a.43.43,0,0,0,.06-.22v-.38h-.25v-.23h.25V112Z", 1, "cls-57"], ["d", "M106.83,112.72c-.11-.31-.26-.69-.45-1.13l.29-.09c0,.06.07.16.13.31l.34.81-.31.1Zm-1.41.52c0-.12,0-.23-.06-.32h.3q.2,0,.18-.18V111h.32v1.84c0,.26-.11.39-.37.38Zm-.32-.49a1.15,1.15,0,0,0-.29-.11,7.23,7.23,0,0,0,.42-1.14l.31.08a11.14,11.14,0,0,1-.44,1.17Z", 1, "cls-57"], ["d", "M108,112.5v-.24h1V112h.27v.28h.25v.24h-.25v.4c0,.23-.09.35-.32.35h-.35a.94.94,0,0,0-.06-.28h.3a.13.13,0,0,0,.16-.16v-.33h-.65l.21.21.11.11-.21.17a4.57,4.57,0,0,0-.31-.34l.18-.15Zm.13-.77-.16-.22a1.71,1.71,0,0,0,.56-.54l.29.06,0,0-.09.14h.78v.26a2,2,0,0,1-1.34.74s0,0,0,0a.75.75,0,0,0-.12-.2h0l.5-.12-.21-.2c.06,0,.05,0,0,0l.18-.15.1.09.2.17a1,1,0,0,0,.37-.28h-.68A2.39,2.39,0,0,1,108.16,111.73Zm-.69.31c-.08-.24-.15-.46-.22-.65l.21-.08s0,0,0,.06l.2.56V111H108v2.28h-.28v-.75l-.16.15-.2.18-.08-.33a4.08,4.08,0,0,0,.44-.36V112l-.21.08Z", 1, "cls-57"], ["points", "348.87 82.84 348.5 82.78 348.5 82.78 348.47 82.78 348.47 82.78 348.45 82.77 348.45 82.77 348.42 82.77 348.42 82.77 348.38 82.76 348.38 82.76 348.36 82.76 348.36 82.76 348.32 82.75 348.32 82.75 348.3 82.75 348.3 82.75 348.28 82.75 348.28 82.75 348.26 82.74 348.26 82.74 348.24 82.74 348.24 82.74 348.22 82.74 348.22 82.74 348.2 82.73 348.2 82.73 348.18 82.73 348.18 82.73 339.58 82.15 339.2 80.59 348.36 81.25 348.36 81.25 348.37 81.25 348.37 81.25 348.38 81.25 348.38 81.25 348.39 81.25 348.87 82.84", 1, "cls-40"], ["d", "M257.59,121.42v-6a.87.87,0,0,0-.88-.88h-10.2a.87.87,0,0,0-.88.88h0v6a.88.88,0,0,0,.88.88h1.05v1.58L251,122.3h5.72A.88.88,0,0,0,257.59,121.42Z", 1, "cls-108"], ["id", "_287806696", "data-name", " 287806696"], ["id", "_301279912", "data-name", " 301279912", "d", "M256.71,114.59h-10.2a.9.9,0,0,0-.67.3.92.92,0,0,1,.58-.21h10.2a.84.84,0,0,1,.87.84v6a.83.83,0,0,1-.22.57.87.87,0,0,0,.31-.66v-6a.84.84,0,0,0-.87-.85Z", 1, "cls-57"], ["d", "M247.21,121.33H256a.66.66,0,0,0,.66-.66V116.1a.66.66,0,0,0-.66-.66h-8.8a.66.66,0,0,0-.66.66h0v4.57A.66.66,0,0,0,247.21,121.33Z", 1, "cls-109"], ["d", "M249.37,117.44h.3v1.48a.53.53,0,0,1-.06.28.23.23,0,0,1-.15.11H249A2.82,2.82,0,0,0,249,119a1.32,1.32,0,0,0,.27,0c.09,0,.14,0,.14-.16v-1.43Zm.75.42a9.37,9.37,0,0,1,.36.9l-.3.12q-.17-.51-.33-.93Zm-1.29,0,.3.07c-.1.35-.2.67-.31,1l-.29-.11a7.07,7.07,0,0,0,.3-.92Zm2.63-.34h1v.26h-1Zm-.76,1.6-.06-.26.23,0v-.45h-.17v-.23h.17v-.37h-.19v-.23h.64v.23h-.2v.37h.19v.23h-.19v.4l.22-.06a1,1,0,0,0,0,.25l-.64.17Zm.66-1.05h1.18v.26h-.31V119q0,.09.06.09a.07.07,0,0,0,.06,0,1.84,1.84,0,0,0,0-.32l.2.07a1,1,0,0,1-.1.46.22.22,0,0,1-.17.07h-.11c-.15,0-.22-.08-.22-.25v-.72h-.18a1.06,1.06,0,0,1-.46,1,2.31,2.31,0,0,0-.18-.23.83.83,0,0,0,.4-.8h-.2v-.26Zm1.52-.52h.71l-.05-.11.33,0,0,.14h.65v.18h-1.69Zm-.09.31h.44l-.08-.1h.31l.08.1h.37l.09-.1h.31l-.1.1h.47V118h-1.89v-.18Zm0,1.25h.83V119h-.71v-.16h.71v-.08H253v-.67h1.54v.67h-.64v.08h.72V119h-.72v.08h.84v.17h-1.93v-.17Zm.44-.73h.39v-.1h-.39Zm1-.1h-.39v.1h.39Zm0,.35v-.1h-.39v.1Zm-1,0h.39v-.1h-.39Z", 1, "cls-57"], ["d", "M138.67,104.3V109a.69.69,0,0,0,.69.7h.84V111l2.72-1.25h4.53a.7.7,0,0,0,.7-.7h0V104.3a.7.7,0,0,0-.7-.7h-8.09A.69.69,0,0,0,138.67,104.3Z", 1, "cls-110"], ["id", "_338718728", "data-name", " 338718728"], ["id", "_301281712", "data-name", " 301281712", "d", "M147.45,103.6h-8.09a.71.71,0,0,0-.52.24.71.71,0,0,1,.45-.17h8.09a.69.69,0,0,1,.69.7v4.74a.74.74,0,0,1-.17.46.73.73,0,0,0,.24-.53V104.3a.69.69,0,0,0-.69-.7Z", 1, "cls-57"], ["d", "M147.42,108.45v-3.63a.53.53,0,0,0-.53-.52h-7a.52.52,0,0,0-.52.52h0v3.63a.52.52,0,0,0,.52.52h7A.52.52,0,0,0,147.42,108.45Z", 1, "cls-111"], ["id", "_338718320", "data-name", " 338718320"], ["id", "_301285336", "data-name", " 301285336", "d", "M146.89,104.3h-7a.53.53,0,0,0-.42.21.51.51,0,0,1,.32-.1h7a.51.51,0,0,1,.51.52v3.62a.52.52,0,0,1-.11.32.53.53,0,0,0,.21-.42v-3.63a.51.51,0,0,0-.51-.52Z", 1, "cls-59"], ["d", "M141.36,107.13h.24v-.24h.21v.24H142v-.29h-.58v-.12h0l-.1-.15a.88.88,0,0,0,.28-.17h-.2v-.34h.28V106h-.32v-.15h.32v-.08h.18v.08h.31V106h-.31v.06h.29v.09a1.71,1.71,0,0,0,.17-.39l.18,0a.56.56,0,0,1,0,.12h.42v.16h-.07a1,1,0,0,1-.15.33.5.5,0,0,0,.25.09l-.1.18a.34.34,0,0,0-.56,0l-.1-.13-.07.12-.22-.12v.1h-.18v-.15a.76.76,0,0,1-.21.19h1.32v.14h-.55v.08h.46v.13h-.46v.08h.64v.15h-1.53v-.15Zm.51-.72v.1l.06-.09.23.11a.67.67,0,0,0,.24-.11.62.62,0,0,1-.1-.16l0,.06-.1-.07v.16Zm.76-.33h-.22a.66.66,0,0,0,.12.22.64.64,0,0,0,.1-.22Zm-1,.21h.11v-.1h-.11Zm.41,0v-.1h-.12v.1Zm3.45.45-.31.15a.86.86,0,0,0,.35.16l-.13.22a1.25,1.25,0,0,1-.53-.4v.25a.25.25,0,0,1,0,.13.17.17,0,0,1-.11.06,1.48,1.48,0,0,1-.29,0c0-.08,0-.14,0-.2h.17c.06,0,.09,0,.09-.08v-.5h-.53v-.66h.38a.74.74,0,0,0,0-.14l.25,0a.37.37,0,0,1-.05.11h.61v.66h-.49v0l.15.19.35-.21.12.18Zm-.35-.68h-.8v.1h.8Zm0,.34v-.1h-.8v.1Zm-1.12.42v-.16h.56v.16a1,1,0,0,1-.49.46c0-.07-.09-.14-.14-.2a1,1,0,0,0,.41-.26Z", 1, "cls-57"], ["points", "255.69 79.91 256.17 81.49 249.23 80.08 248.72 78.5 255.69 79.91", 1, "cls-36"], ["d", "M221.93,79.86h-3a.61.61,0,0,0-.61.61v3a.6.6,0,0,0,.61.6h3a.6.6,0,0,0,.6-.6v-3A.6.6,0,0,0,221.93,79.86Z", 1, "cls-112"], ["d", "M221.87,81h-.58a.57.57,0,0,0-.37.14l-.54.54v-.16a.25.25,0,1,0-.5,0v.65h0l-.47.47s0,0-.14,0H219a.48.48,0,0,0-.46.49.49.49,0,0,0,.49.49h.51a.55.55,0,0,0,.39-.16l1.5-1.49a.12.12,0,0,1,.11,0h.37a.5.5,0,0,0,.43-.49A.49.49,0,0,0,221.87,81Z"], ["d", "M221.85,81.68h-.32a.32.32,0,0,0-.27.1l-1.51,1.51a.32.32,0,0,1-.24.08H219a.25.25,0,0,1-.24-.25.22.22,0,0,1,.22-.22h.34a.29.29,0,0,0,.22-.08l1.54-1.54c.06-.07.13-.07.23-.07h.53a.24.24,0,0,1,.21.23C222.06,81.52,222,81.68,221.85,81.68Z", 1, "cls-57"], ["d", "M220.13,81.19a.26.26,0,1,0-.25-.25A.25.25,0,0,0,220.13,81.19Z"], ["d", "M155.55,42.85V38.11a.69.69,0,0,0-.7-.69h-8.09a.69.69,0,0,0-.69.69h0v4.74a.69.69,0,0,0,.69.7h.84v1.26l2.72-1.26h4.53A.7.7,0,0,0,155.55,42.85Z", 1, "cls-113"], ["id", "_337401528", "data-name", " 337401528"], ["id", "_301281376", "data-name", " 301281376", "d", "M154.85,37.42h-8.09a.68.68,0,0,0-.52.24.66.66,0,0,1,.45-.17h8.09a.69.69,0,0,1,.69.69v4.74a.72.72,0,0,1-.17.46.72.72,0,0,0,.24-.53V38.11a.69.69,0,0,0-.69-.69Z", 1, "cls-57"], ["d", "M154.29,38.11h-7a.52.52,0,0,0-.52.52v3.63a.52.52,0,0,0,.52.52h7a.52.52,0,0,0,.53-.52h0V38.63A.53.53,0,0,0,154.29,38.11Z", 1, "cls-114"], ["id", "_337401000", "data-name", " 337401000"], ["id", "_301282240", "data-name", " 301282240", "d", "M154.29,38.11h-7a.53.53,0,0,0-.42.21.51.51,0,0,1,.32-.1h7a.51.51,0,0,1,.51.52v3.62a.52.52,0,0,1-.11.32.53.53,0,0,0,.21-.42V38.63a.51.51,0,0,0-.51-.52Z", 1, "cls-59"], ["d", "M148.78,40.41v.15a1.51,1.51,0,0,1-.94.5l-.09-.16a1.59,1.59,0,0,0,.39-.1l-.15-.1.12-.11.21.13a1,1,0,0,0,.24-.16h-.51a2.43,2.43,0,0,1-.25.2l-.11-.13a1.14,1.14,0,0,0,.34-.31h-.27v-.44h1.08v.44h-.62l-.06.09Zm-.11-.23V40h-.14v.16Zm-.75,0h.14V40h-.14Zm.31,0h.13V40h-.13Zm1.19-.32.21,0s0,.07,0,.12h.46v.3H150v-.16h-.8v.16H149V40h.47A.46.46,0,0,0,149.42,39.86Zm.57.44.1.13-.2.09a.66.66,0,0,0,.27.32A1.85,1.85,0,0,0,150,41a1,1,0,0,1-.26-.4l0,0a.57.57,0,0,1,0,.18.45.45,0,0,1,0,.13.16.16,0,0,1-.06.08.12.12,0,0,1-.08,0h-.23c0-.06,0-.11,0-.15L149,41l-.1-.14a1.54,1.54,0,0,0,.59-.27s0,0,0-.05a1.5,1.5,0,0,1-.46.22l-.08-.13a1.5,1.5,0,0,0,.48-.18l0,0a1.91,1.91,0,0,1-.36.13l-.09-.13a2,2,0,0,0,.43-.12h-.21v-.14h.72v.14h-.27l-.08.05.09.12.34-.17Zm-.66.59h.13c.07,0,.11,0,.11-.12v0l-.24.15Zm1.86-.32,0,.07h.18v.13H151a.92.92,0,0,0,.45.14s0,.08-.07.14a.79.79,0,0,1-.54-.26.64.64,0,0,1-.54.27.77.77,0,0,0-.06-.15.63.63,0,0,0,.41-.14h-.4v-.13h.48l0-.08h-.39v-.63h.29a.51.51,0,0,0,0-.09h.19l0,.08h.48v.63h-.4s0,.06,0,.08H151l0,0,.17,0Zm-.07-.13v-.06h-.63v.06Zm0-.39h-.63v.06h.63Zm-.63.23h.63v-.07h-.63Zm1-.37h1.13v.16H151.5Zm0,.93h.32l-.12-.14.13-.07h-.2v-.46h.94v.46h-.22l.15,0-.12.16h.32V41h-1.2Zm.9-.36v-.16h-.6v.16Zm-.4.32-.07,0h.25l.13-.21h-.44A1.1,1.1,0,0,1,152,40.8Zm1-.4a1.46,1.46,0,0,1-.11.65l-.13-.11a1.57,1.57,0,0,0,.08-.57v-.45h.48l0-.06.21,0,0,.09h.43V40h-.73l.1.06-.06.07v.29h-.15v-.15l-.07.06-.05-.11v.14Zm.44.3.11,0,0,0,.19.09,0,.07c.06,0,.09,0,.09-.05V40.6h-.21l.18.07-.06.1a1.57,1.57,0,0,1-.21-.12.58.58,0,0,1-.17.14l-.09-.1a.38.38,0,0,0,.15-.09h-.15V41H153v-.55h.37a.22.22,0,0,0,0-.09l.12,0s0,0,0,.07h.37v.39c0,.1,0,.15-.13.16h-.24a.56.56,0,0,0,0-.12h.13l-.15-.09a.8.8,0,0,1-.21.15l-.07-.09a.44.44,0,0,0,.24-.19Zm-.13-.39.05-.08h-.05v-.11h.4v-.06h.15v.06h.1v.11h-.1v.06c0,.1-.06.15-.17.15h-.12a.53.53,0,0,0,0-.12h.1s.07,0,.07,0v-.05h-.31l.14.06-.06.11-.17-.09Zm-.11-.26H153v.18A1.71,1.71,0,0,0,153.15,40.05Z", 1, "cls-57"]],
      template: function ShoppingLocationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " .cls-1 { fill: #9e9d9c; } .cls-2 { fill: #8e8d8d; } .cls-3 { fill: #8c8b8a; } .cls-4 { fill: #969594; } .cls-5 { fill: #908f8e; } .cls-6 { fill: none; } .cls-7 { fill: #838281; } .cls-8 { fill: #a09f9f; } .cls-9 { fill: #878685; } .cls-10 { fill: #858483; } .cls-11 { fill: #8b8989; } .cls-12 { fill: #949292; } .cls-13 { fill: #929190; } .cls-14 { fill: #888787; } .cls-15 { fill: #006993; } .cls-16 { fill: #005e84; } .cls-17 { fill: #0084c2; } .cls-18 { fill: #006690; } .cls-19 { fill: #00648c; } .cls-20 { fill: #afaeae; } .cls-21 { fill: #dbdbdb; } .cls-22 { fill: #006d9a; } .cls-23 { fill: #006f9d; } .cls-24 { fill: #801f1b; } .cls-25 { fill: #9e231c; } .cls-26 { fill: #c2261d; } .cls-27 { fill: #a1241c; } .cls-28 { fill: #8d211b; } .cls-29 { fill: #91221b; } .cls-30 { fill: #9b231c; } .cls-31 { fill: #94221b; } .cls-32 { fill: #89211b; } .cls-33 { fill: #86201b; } .cls-34 { fill: #821f1b; } .cls-35 { fill: #7f1f1b; } .cls-36 { fill: #7b1e1a; } .cls-37 { fill: #b1b0af; } .cls-38 { fill: #aaa9a9; } .cls-39 { fill: #a36a1e; } .cls-40 { fill: #82571b; } .cls-41 { fill: #ce7e1e; } .cls-42 { fill: #84201b; } .cls-43 { fill: #005a7d; } .cls-44 { fill: #005b7f; } .cls-45 { fill: #00597c; } .cls-46 { fill: #005d82; } .cls-47 { fill: #006087; } .cls-48 { fill: #816733; } .cls-49 { fill: #5d4a27; } .cls-50 { fill: #a7833e; } .cls-51 { fill: #53636c; } .cls-52 { fill: #6c7880; } .cls-53 { fill: #9a9998; } .cls-54 { fill: #a2a1a0; } .cls-55 { fill: #adacab; } .cls-56 { fill: url(#gg_43); } .cls-112, .cls-57 { fill: #fff; } .cls-58 { fill: url(#gg_44); } .cls-59 { fill: #fbfafa; fill-opacity: 0.7; } .cls-60 { fill: url(#gg_43-2); } .cls-61 { fill: url(#gg_44-2); } .cls-62 { fill: url(#gg_43-3); } .cls-63 { fill: url(#gg_44-3); } .cls-64 { fill: url(#gg_43-4); } .cls-65 { fill: url(#gg_44-4); } .cls-66 { fill: url(#gg_43-5); } .cls-67 { fill: url(#gg_44-5); } .cls-68 { fill: url(#gg_43-6); } .cls-69 { fill: url(#gg_44-6); } .cls-70 { fill: url(#gg_43-7); } .cls-71 { fill: url(#gg_44-7); } .cls-72 { fill: url(#gg_43-8); } .cls-73 { fill: url(#gg_44-8); } .cls-74 { fill: url(#gg_43-9); } .cls-75 { fill: url(#gg_44-9); } .cls-76 { fill: url(#gg_43-10); } .cls-77 { fill: url(#gg_44-10); } .cls-78 { fill: url(#gg_43-11); } .cls-79 { fill: url(#gg_44-11); } .cls-80 { fill: url(#gg_43-12); } .cls-81 { fill: url(#gg_44-12); } .cls-82 { fill: url(#gg_43-13); } .cls-83 { fill: url(#gg_40); } .cls-84 { fill: url(#gg_43-14); } .cls-85 { fill: url(#gg_40-2); } .cls-86 { fill: url(#gg_43-15); } .cls-87 { fill: url(#gg_40-3); } .cls-88 { fill: url(#gg_43-16); } .cls-89 { fill: url(#gg_38); } .cls-90 { fill: #f0f3f6; } .cls-91 { fill: #4d4e50; } .cls-92 { fill: #f2f0f1; } .cls-93 { fill: #efeced; } .cls-94 { fill: #ece9ea; } .cls-95 { fill: #e8e5e6; } .cls-96 { fill: #e5e3e4; } .cls-97 { fill: #e2dfe0; } .cls-98 { fill: #dedbdc; } .cls-99 { fill: #dbd9d8; } .cls-100 { fill: #d8d3d3; } .cls-101 { fill: #1f1a17; } .cls-102 { fill: url(#gg_43-17); } .cls-103 { fill: url(#gg_34); } .cls-104 { fill: url(#gg_43-18); } .cls-105 { fill: url(#gg_38-2); } .cls-106 { fill: url(#gg_43-19); } .cls-107 { fill: url(#gg_38-3); } .cls-108 { fill: url(#gg_43-20); } .cls-109 { fill: url(#gg_40-4); } .cls-110 { fill: url(#gg_43-21); } .cls-111 { fill: url(#gg_44-13); } .cls-112 { stroke: #1f1a17; stroke-width: 0.02px; } .cls-113 { fill: url(#gg_43-22); } .cls-114 { fill: url(#gg_44-14); } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "linearGradient", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "stop", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "linearGradient", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "stop", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "stop", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "linearGradient", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "linearGradient", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "linearGradient", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "linearGradient", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "linearGradient", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "linearGradient", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "linearGradient", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "linearGradient", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "linearGradient", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "linearGradient", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "linearGradient", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "linearGradient", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "linearGradient", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "linearGradient", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "linearGradient", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "linearGradient", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "linearGradient", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "linearGradient", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "linearGradient", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "linearGradient", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "linearGradient", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "linearGradient", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "linearGradient", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "linearGradient", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "stop", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "stop", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "linearGradient", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "linearGradient", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "linearGradient", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "linearGradient", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "linearGradient", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "linearGradient", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "stop", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "stop", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "stop", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "linearGradient", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "linearGradient", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "stop", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "stop", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "stop", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "linearGradient", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "linearGradient", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "linearGradient", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "linearGradient", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "linearGradient", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "linearGradient", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "linearGradient", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "linearGradient", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "linearGradient", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "linearGradient", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "g", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "polygon", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "polygon", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "polygon", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "polygon", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "polygon", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "polygon", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "polygon", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "polygon", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "polygon", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "polygon", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "polygon", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "polygon", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "polygon", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "polygon", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "polygon", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "polygon", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "polygon", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "polygon", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "polygon", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "polygon", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "polygon", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "polygon", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "polygon", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "polygon", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "polygon", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "polygon", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "polygon", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "polygon", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "polygon", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "polygon", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "polygon", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "polygon", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "polygon", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "polygon", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "polygon", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "polygon", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "polygon", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "polygon", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "polygon", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "polygon", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "polygon", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "polygon", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "polygon", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "polygon", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "polygon", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "polygon", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "polygon", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "polygon", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "polygon", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "polygon", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "path", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "path", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "polygon", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "polygon", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "polygon", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "polygon", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "polygon", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "polygon", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "polygon", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "polygon", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "polygon", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "polygon", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "polygon", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "polygon", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "polygon", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "polygon", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "polygon", 184);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "polygon", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "path", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "polygon", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "polygon", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "polygon", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "polygon", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "path", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "polygon", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "polygon", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "polygon", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "polygon", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "polygon", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "polygon", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "polygon", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "path", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "polygon", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "polygon", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "path", 203);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "polygon", 204);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "polygon", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "path", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "polygon", 207);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "polygon", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "path", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "polygon", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "polygon", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "polygon", 212);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "polygon", 213);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "path", 214);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "path", 215);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "polygon", 216);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "polygon", 217);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "path", 218);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "polygon", 219);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "polygon", 220);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "polygon", 221);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "polygon", 222);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "polygon", 223);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "polygon", 224);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "path", 225);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "path", 226);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "path", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "polygon", 228);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "polygon", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "polygon", 230);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "path", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "polygon", 232);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "polygon", 233);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "polygon", 234);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "polygon", 235);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "polygon", 236);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "polygon", 237);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "polygon", 238);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "polygon", 239);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "polygon", 240);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "polygon", 241);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "polygon", 242);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "polygon", 243);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "polygon", 244);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "polygon", 245);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "polygon", 246);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "polygon", 247);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "polygon", 248);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "polygon", 249);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "polygon", 250);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "polygon", 251);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "polygon", 252);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "polygon", 253);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "polygon", 254);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "polygon", 255);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "path", 256);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "polygon", 257);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "polygon", 258);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "path", 259);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "polygon", 260);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "polygon", 261);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "polygon", 262);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "path", 263);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "path", 264);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "polygon", 265);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "polygon", 266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "polygon", 267);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "polygon", 268);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "polygon", 269);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "polygon", 270);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "path", 271);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "path", 272);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "polygon", 273);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "polygon", 274);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "path", 275);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "polygon", 276);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "polygon", 277);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "polygon", 278);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "polygon", 279);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "polygon", 280);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "polygon", 281);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "path", 282);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "path", 283);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "path", 284);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "path", 285);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "path", 286);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "path", 287);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "path", 288);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "path", 289);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "path", 290);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "path", 291);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "path", 292);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "polygon", 293);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "polygon", 294);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "polygon", 295);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "polygon", 296);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "polygon", 297);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "polygon", 298);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "polygon", 299);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "polygon", 300);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "polygon", 301);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "polygon", 302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "polygon", 303);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "polygon", 304);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "polygon", 305);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "polygon", 306);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "polygon", 307);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "polygon", 308);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "polygon", 309);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "polygon", 310);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "polygon", 311);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "polygon", 312);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "polygon", 313);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "polygon", 314);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "polygon", 315);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "polygon", 316);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "polygon", 317);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "polygon", 318);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "polygon", 319);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "polygon", 320);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "polygon", 321);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "polygon", 322);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "polygon", 323);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "polygon", 324);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "polygon", 325);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "polygon", 326);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "polygon", 327);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "path", 328);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "polygon", 329);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "polygon", 330);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "polygon", 331);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "polygon", 332);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "polygon", 333);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "polygon", 334);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "polygon", 335);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "polygon", 336);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "path", 337);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "path", 338);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "path", 339);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "path", 340);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "path", 341);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "polygon", 342);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "polygon", 343);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "path", 344);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "path", 345);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "polygon", 346);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "polygon", 347);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "path", 348);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "polygon", 349);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "polygon", 350);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "path", 351);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "polygon", 352);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "path", 353);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "path", 354);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "polygon", 355);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "path", 356);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "path", 357);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "polygon", 358);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "path", 359);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "path", 360);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "polygon", 361);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "path", 362);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "path", 363);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "path", 364);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "polygon", 365);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "path", 366);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "path", 367);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "polygon", 368);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "path", 369);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "polygon", 370);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "polygon", 371);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "polygon", 372);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "path", 373);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "path", 374);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "path", 375);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "path", 376);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "polygon", 377);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "polygon", 378);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "path", 379);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "polygon", 380);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "path", 381);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "path", 382);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "path", 383);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "path", 384);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "path", 385);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "path", 386);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "path", 387);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](391, "polygon", 388);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "path", 389);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "polygon", 390);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "path", 391);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "polygon", 392);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "polygon", 393);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "polygon", 394);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "polygon", 395);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](399, "polygon", 396);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "polygon", 397);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "polygon", 398);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](402, "path", 399);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](403, "path", 400);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "polygon", 401);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "path", 402);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "path", 403);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "polygon", 404);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](408, "path", 405);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "path", 406);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "polygon", 407);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](411, "polygon", 408);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](412, "polygon", 409);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "polygon", 410);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "g", 411);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingLocationComponent_Template__svg_g_click_414_listener() {
            return ctx.colorChange("color11", "color22");
          })("touchstart", function ShoppingLocationComponent_Template__svg_g_touchstart_414_listener() {
            return ctx.colorChange("color11", "color22");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "polygon", 412);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "polygon", 413);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "polygon", 414);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "polygon", 415);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](419, "polygon", 416);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "polygon", 417);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](421, "polygon", 418);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "polygon", 419);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](423, "path", 420);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "polygon", 421);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "polygon", 422);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](426, "path", 423);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](427, "polygon", 424);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "path", 425);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](429, "path", 426);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "polygon", 427);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](431, "polygon", 428);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](432, "polygon", 429);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "polygon", 430);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "polygon", 431);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "polygon", 432);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "path", 433);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "path", 434);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "path", 435);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "path", 436);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "path", 437);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "path", 438);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](442, "path", 439);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "path", 440);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "polygon", 441);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "path", 442);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "path", 443);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "path", 444);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "polygon", 445);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "path", 446);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](450, "polygon", 447);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "polygon", 448);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](452, "polygon", 449);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "polygon", 450);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](454, "polygon", 451);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "polygon", 452);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "polygon", 453);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "polygon", 454);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](458, "polygon", 455);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](459, "polygon", 456);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](460, "polygon", 457);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "polygon", 458);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](462, "polygon", 459);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](463, "polygon", 460);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](464, "polygon", 461);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "polygon", 462);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "polygon", 463);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](467, "polygon", 464);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](468, "polygon", 465);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](469, "path", 466);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](470, "path", 467);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "path", 468);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](473, "polygon", 469);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](474, "path", 470);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](475, "path", 471);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](476, "polygon", 472);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "g", 411);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingLocationComponent_Template__svg_g_click_477_listener() {
            return ctx.colorChange("color1", "color2");
          })("touchstart", function ShoppingLocationComponent_Template__svg_g_touchstart_477_listener() {
            return ctx.colorChange("color1", "color2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](478, "polygon", 473);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](479, "polygon", 474);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "polygon", 475);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](481, "path", 476);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](482, "path", 477);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](483, "path", 478);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](484, "polygon", 479);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](485, "path", 480);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](486, "path", 481);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "path", 482);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](488, "polygon", 483);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](489, "path", 484);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](490, "polygon", 485);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "path", 486);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](492, "polygon", 487);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](493, "path", 488);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](494, "polygon", 489);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "polygon", 490);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](496, "path", 491);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "polygon", 492);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](498, "polygon", 493);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "polygon", 494);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](500, "polygon", 495);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](501, "polygon", 496);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](502, "polygon", 497);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "path", 498);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](504, "polygon", 499);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](505, "polygon", 500);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](506, "path", 501);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](507, "polygon", 502);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](508, "path", 503);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](509, "path", 504);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](510, "polygon", 505);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](511, "path", 506);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](512, "path", 507);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](513, "path", 508);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](514, "path", 509);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "path", 510);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](516, "path", 511);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](517, "path", 512);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](518, "path", 513);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](519, "path", 514);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](520, "polygon", 515);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](521, "polygon", 516);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](522, "polygon", 517);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](523, "polygon", 518);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](524, "polygon", 519);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](525, "polygon", 520);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](526, "polygon", 521);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](527, "polygon", 522);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](528, "polygon", 523);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](529, "polygon", 524);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](530, "polygon", 525);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](531, "polygon", 526);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](532, "polygon", 527);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](533, "polygon", 528);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](534, "polygon", 529);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](535, "polygon", 530);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](536, "polygon", 531);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](537, "polygon", 532);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](538, "polygon", 533);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](539, "polygon", 534);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](540, "path", 535);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](541, "path", 536);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](542, "polygon", 537);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](543, "polygon", 538);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](544, "polygon", 539);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](545, "path", 540);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](546, "polygon", 541);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](547, "polygon", 542);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](548, "polygon", 543);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](549, "path", 544);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](550, "path", 545);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](551, "path", 546);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](552, "path", 547);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](553, "path", 548);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](554, "path", 549);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](555, "path", 550);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](556, "path", 550);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](557, "path", 551);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](558, "path", 552);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](559, "path", 553);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](560, "path", 554);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](561, "path", 555);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](562, "path", 556);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](563, "path", 557);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](564, "path", 558);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](565, "path", 559);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](566, "path", 560);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](567, "path", 561);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](568, "path", 562);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](569, "polygon", 563);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](570, "polygon", 564);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](571, "path", 565);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](572, "polygon", 566);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](573, "path", 567);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](574, "path", 568);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](575, "path", 569);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](576, "path", 570);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](577, "polygon", 571);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](578, "polygon", 572);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](579, "path", 573);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](580, "polygon", 574);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](581, "polygon", 575);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](582, "polygon", 576);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](583, "polygon", 577);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](584, "polygon", 578);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](585, "polygon", 579);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](586, "polygon", 580);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](587, "polygon", 581);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](588, "polygon", 582);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](589, "path", 583);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](590, "path", 584);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](591, "path", 585);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](592, "path", 586);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](593, "path", 587);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](594, "path", 588);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](595, "path", 589);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](596, "path", 590);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](597, "path", 591);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](598, "path", 592);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](599, "path", 593);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](600, "path", 594);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](601, "path", 595);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](602, "polygon", 596);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](603, "polygon", 597);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](604, "polygon", 598);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](605, "polygon", 599);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](606, "path", 600);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](607, "polygon", 601);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](608, "path", 602);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](609, "path", 603);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](610, "path", 604);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](611, "path", 605);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](612, "polygon", 606);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](613, "polygon", 607);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](614, "path", 608);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](615, "path", 609);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](616, "polygon", 610);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](617, "path", 611);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](618, "polygon", 612);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](619, "polygon", 613);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](620, "polygon", 614);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](621, "polygon", 615);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](622, "polygon", 616);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](623, "polygon", 617);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](624, "polygon", 618);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](625, "polygon", 619);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](626, "polygon", 620);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](627, "polygon", 621);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](628, "polygon", 622);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](629, "polygon", 623);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](630, "polygon", 624);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](631, "polygon", 625);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](632, "polygon", 626);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](633, "path", 627);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](634, "path", 628);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](635, "path", 629);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](636, "polygon", 630);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](637, "polygon", 631);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](638, "path", 632);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](639, "polygon", 633);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](640, "polygon", 634);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](641, "polygon", 635);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](642, "path", 636);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](643, "path", 637);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](644, "path", 638);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](645, "path", 639);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](646, "path", 640);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](647, "path", 641);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](648, "path", 642);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](649, "path", 643);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](650, "path", 644);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](651, "path", 645);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](652, "path", 646);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](653, "polygon", 647);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](654, "polygon", 648);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](655, "path", 649);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](656, "polygon", 650);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](657, "polygon", 651);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](658, "polygon", 652);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](659, "path", 653);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](660, "path", 654);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](661, "path", 655);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](662, "path", 656);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](663, "polygon", 657);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](664, "polygon", 658);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](665, "polygon", 659);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](666, "polygon", 660);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](667, "path", 661);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](668, "path", 662);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](669, "path", 663);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](670, "polygon", 664);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](671, "polygon", 665);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](672, "polygon", 666);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](673, "polygon", 667);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](674, "path", 668);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](675, "polygon", 669);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](676, "polygon", 670);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](677, "polygon", 671);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](678, "polygon", 672);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](679, "polygon", 673);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](680, "polygon", 674);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](681, "polygon", 675);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](682, "path", 676);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](683, "path", 677);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](684, "polygon", 678);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](685, "polygon", 679);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](686, "polygon", 680);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](687, "path", 681);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](688, "path", 682);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](689, "path", 683);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](690, "polygon", 684);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](691, "polygon", 685);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](692, "polygon", 686);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](693, "path", 687);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](694, "path", 688);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](695, "polygon", 689);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](696, "polygon", 690);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](697, "path", 691);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](698, "polygon", 692);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](699, "path", 693);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](700, "path", 694);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](701, "polygon", 695);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](702, "polygon", 696);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](703, "polygon", 697);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](704, "path", 698);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](705, "polygon", 699);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](706, "path", 700);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](707, "path", 701);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](708, "polygon", 702);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](709, "polygon", 703);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](710, "polygon", 704);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](711, "path", 705);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](712, "polygon", 706);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](713, "path", 707);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](714, "path", 708);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](715, "path", 709);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](716, "path", 710);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](717, "path", 711);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](718, "path", 712);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](719, "path", 713);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](720, "path", 714);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](721, "path", 715);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](722, "polygon", 716);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](723, "polygon", 717);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](724, "polygon", 718);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](725, "polygon", 719);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](726, "polygon", 720);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](727, "path", 721);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](728, "path", 722);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](729, "path", 723);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](730, "path", 724);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](731, "path", 725);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](732, "path", 726);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](733, "path", 727);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](734, "path", 728);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](735, "path", 729);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](736, "path", 730);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](737, "path", 731);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](738, "polygon", 732);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](739, "polygon", 733);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](740, "path", 734);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](741, "polygon", 735);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](742, "polygon", 736);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](743, "polygon", 737);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](744, "polygon", 738);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](745, "polygon", 739);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](746, "polygon", 740);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](747, "polygon", 741);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](748, "polygon", 742);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](749, "polygon", 743);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](750, "polygon", 744);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](751, "polygon", 745);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](752, "polygon", 746);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](753, "polygon", 747);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](754, "polygon", 748);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](755, "polygon", 749);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](756, "polygon", 750);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](757, "path", 751);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](758, "path", 752);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](759, "polygon", 753);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](760, "polygon", 754);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](761, "path", 755);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](762, "polygon", 756);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](763, "polygon", 757);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](764, "polygon", 758);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](765, "polygon", 759);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](766, "polygon", 760);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](767, "polygon", 761);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](768, "polygon", 762);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](769, "polygon", 763);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](770, "path", 764);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](771, "path", 765);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](772, "path", 766);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](773, "path", 767);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](774, "path", 768);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](775, "path", 769);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](776, "path", 770);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](777, "path", 771);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](778, "path", 772);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](779, "path", 773);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](780, "path", 774);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](781, "polygon", 775);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](782, "polygon", 776);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](783, "path", 777);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](784, "polygon", 778);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](785, "polygon", 779);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](786, "polygon", 780);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](787, "polygon", 781);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](788, "polygon", 782);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](789, "polygon", 783);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](790, "polygon", 784);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](791, "polygon", 785);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](792, "polygon", 786);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](793, "polygon", 787);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](794, "polygon", 788);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](795, "polygon", 789);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](796, "polygon", 790);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](797, "polygon", 791);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](798, "polygon", 792);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](799, "polygon", 793);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](800, "polygon", 794);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](801, "polygon", 795);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](802, "polygon", 796);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](803, "polygon", 797);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](804, "path", 798);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](805, "path", 799);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](806, "path", 800);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](807, "path", 801);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](808, "path", 802);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](809, "path", 803);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](810, "path", 804);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](811, "path", 805);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](812, "path", 806);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](813, "path", 807);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](814, "path", 808);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](815, "polygon", 809);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](816, "polygon", 810);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](817, "path", 811);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](818, "path", 812);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](819, "path", 813);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](820, "path", 814);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](821, "path", 815);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](822, "polygon", 816);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](823, "polygon", 817);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](824, "polygon", 818);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](825, "path", 819);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](826, "polygon", 820);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](827, "polygon", 821);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](828, "polygon", 822);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](829, "polygon", 823);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](830, "polygon", 824);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](831, "polygon", 825);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](832, "polygon", 826);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](833, "polygon", 827);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](834, "polygon", 828);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](835, "polygon", 829);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](836, "polygon", 830);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](837, "polygon", 831);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](838, "polygon", 832);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](839, "polygon", 833);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](840, "polygon", 834);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](841, "polygon", 835);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](842, "polygon", 836);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](843, "polygon", 837);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](844, "polygon", 838);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](845, "polygon", 839);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](846, "path", 840);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](847, "path", 841);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](848, "path", 842);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](849, "path", 843);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](850, "path", 844);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](851, "polygon", 845);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](852, "polygon", 846);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](853, "path", 847);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](854, "polygon", 848);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](855, "polygon", 849);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](856, "path", 850);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](857, "path", 851);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](858, "path", 852);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](859, "path", 853);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](860, "path", 854);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](861, "path", 855);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](862, "path", 856);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](863, "path", 857);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](864, "path", 858);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](865, "path", 859);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](866, "path", 860);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](867, "polygon", 861);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](868, "polygon", 862);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](869, "path", 863);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](870, "polygon", 864);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](871, "polygon", 865);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](872, "polygon", 866);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](873, "polygon", 867);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](874, "polygon", 868);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](875, "polygon", 869);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](876, "path", 870);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](877, "path", 871);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](878, "path", 872);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](879, "path", 873);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](880, "path", 874);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](881, "path", 875);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](882, "path", 876);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](883, "path", 877);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](884, "path", 878);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](885, "path", 879);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](886, "path", 880);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](887, "polygon", 881);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](888, "path", 882);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](889, "polygon", 883);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](890, "polygon", 884);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](891, "polygon", 885);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](892, "path", 886);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "g", 887);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](894, "path", 888);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](895, "path", 889);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "g", 890);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](897, "path", 891);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](898, "path", 892);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](899, "path", 893);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](900, "path", 894);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](901, "path", 895);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](902, "path", 896);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "g", 897);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](904, "path", 898);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](905, "path", 899);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](906, "g", 900);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](907, "path", 901);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](908, "path", 902);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](909, "path", 903);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](910, "path", 904);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](911, "path", 905);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](912, "path", 906);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "g", 907);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](914, "path", 908);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](915, "path", 909);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](916, "g", 910);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](917, "path", 911);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](918, "path", 912);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](919, "path", 913);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](920, "path", 914);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](921, "path", 915);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](922, "g", 916);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](923, "path", 917);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](924, "path", 918);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](925, "g", 919);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](926, "path", 920);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](927, "path", 921);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](928, "path", 922);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](929, "path", 923);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](930, "path", 924);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](931, "path", 925);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "g", 926);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](933, "path", 927);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](934, "path", 928);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "g", 929);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](936, "path", 930);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](937, "polygon", 931);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](938, "path", 932);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](939, "path", 933);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](940, "path", 934);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](941, "path", 935);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](942, "g", 936);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](943, "path", 937);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](944, "path", 938);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](945, "g", 939);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](946, "path", 940);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](947, "path", 941);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](948, "path", 942);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](949, "path", 943);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](950, "path", 944);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "g", 945);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](952, "path", 946);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](953, "path", 947);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](954, "g", 948);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](955, "path", 949);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](956, "path", 950);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](957, "path", 951);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](958, "path", 952);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](959, "path", 953);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](960, "path", 954);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "g", 955);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](962, "path", 956);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](963, "path", 957);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](964, "g", 958);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](965, "path", 959);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](966, "path", 960);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](967, "path", 961);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](968, "path", 962);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](969, "path", 963);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](970, "path", 964);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](971, "path", 965);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](972, "g", 966);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](973, "path", 967);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](974, "path", 968);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "g", 969);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](976, "path", 970);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](977, "path", 971);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](978, "path", 972);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](979, "path", 973);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](980, "path", 974);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](981, "path", 975);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](982, "path", 976);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](983, "g", 977);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](984, "path", 978);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](985, "path", 979);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingLocationComponent_Template__svg_path_click_985_listener() {
            return ctx.colorChange("color1", "color2");
          })("touchstart", function ShoppingLocationComponent_Template__svg_path_touchstart_985_listener() {
            return ctx.colorChange("color1", "color2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](986, "g", 980);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](987, "path", 981);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](988, "path", 982);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](989, "path", 983);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](990, "path", 984);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](991, "path", 985);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](992, "path", 986);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](993, "g", 987);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](994, "path", 988);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](995, "path", 989);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](996, "g", 990);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](997, "path", 991);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](998, "path", 992);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](999, "path", 993);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1000, "path", 994);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1001, "path", 995);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1002, "path", 996);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1003, "path", 997);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1004, "path", 998);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1005, "path", 999);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1006, "g", 1000);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1007, "path", 1001);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1008, "path", 1002);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1009, "g", 1003);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1010, "path", 1004);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1011, "path", 1005);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1012, "g", 1006);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1013, "path", 1007);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1014, "path", 1008);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1015, "g", 1009);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1016, "path", 1010);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1017, "path", 1011);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1018, "path", 1012);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1019, "path", 1013);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1020, "path", 1014);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1021, "g", 1015);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1022, "path", 1016);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1023, "path", 1017);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingLocationComponent_Template__svg_path_click_1023_listener() {
            return ctx.colorChange("color11", "color22");
          })("touchstart", function ShoppingLocationComponent_Template__svg_path_touchstart_1023_listener() {
            return ctx.colorChange("color11", "color22");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "g", 1018);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1025, "path", 1019);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1026, "path", 1020);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1027, "path", 1021);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1028, "path", 1022);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1029, "path", 1023);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1030, "g", 1024);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1031, "path", 1025);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1032, "path", 1026);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1033, "g", 1027);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1034, "path", 1028);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1035, "path", 1029);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1036, "path", 1030);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1037, "path", 1031);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1038, "path", 1032);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1039, "g", 1033);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1040, "path", 1034);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1041, "path", 1035);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1042, "g", 1036);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1043, "path", 1037);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1044, "path", 1038);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1045, "path", 1039);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1046, "path", 1040);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1047, "path", 1041);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1048, "path", 1042);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1049, "path", 1043);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1050, "path", 1044);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1051, "path", 1045);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1052, "path", 1046);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1053, "polygon", 1047);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1054, "polygon", 1048);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1055, "polygon", 1049);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1056, "polygon", 1050);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1057, "polygon", 1051);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1058, "polygon", 1052);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1059, "polygon", 1053);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1060, "polygon", 1054);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1061, "polygon", 1055);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1062, "polygon", 1056);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1063, "polygon", 1057);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1064, "polygon", 1058);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1065, "polygon", 1059);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1066, "path", 1060);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1067, "path", 1061);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1068, "path", 1062);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1069, "path", 1063);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1070, "path", 1064);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1071, "path", 1065);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1072, "path", 1066);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1073, "path", 1067);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1074, "path", 1068);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1075, "path", 1069);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1076, "path", 1070);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1077, "path", 1071);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1078, "polygon", 1072);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1079, "polygon", 1073);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1080, "polygon", 1074);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1081, "polygon", 1075);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1082, "polygon", 1076);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1083, "polygon", 1077);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1084, "polygon", 1078);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1085, "polygon", 1079);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1086, "polygon", 1080);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1087, "polygon", 1081);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1088, "polygon", 1082);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1089, "polygon", 1083);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1090, "polygon", 1084);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1091, "path", 1085);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1092, "path", 1086);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1093, "path", 1087);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1094, "path", 1088);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1095, "path", 1089);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1096, "path", 1090);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1097, "path", 1091);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1098, "path", 1092);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1099, "path", 1093);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1100, "path", 1094);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1101, "path", 1095);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1102, "path", 1096);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1103, "polygon", 1097);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1104, "polygon", 1098);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1105, "polygon", 1099);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1106, "polygon", 1100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1107, "polygon", 1101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1108, "polygon", 1102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1109, "polygon", 1103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1110, "polygon", 1104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1111, "polygon", 1105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1112, "polygon", 1106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1113, "polygon", 1107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1114, "polygon", 1108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1115, "polygon", 1109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1116, "path", 1110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1117, "path", 1111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1118, "path", 1112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1119, "path", 1113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1120, "path", 1114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1121, "path", 1115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1122, "path", 1116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1123, "path", 1117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1124, "path", 1118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1125, "path", 1119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1126, "path", 1120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1127, "path", 1121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1128, "polygon", 1122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1129, "polygon", 1123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1130, "polygon", 1124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1131, "polygon", 1125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1132, "polygon", 1126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1133, "polygon", 1127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1134, "polygon", 1128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1135, "polygon", 1129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1136, "polygon", 1130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1137, "polygon", 1131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1138, "polygon", 1132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1139, "polygon", 1133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1140, "polygon", 1134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1141, "path", 1135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1142, "path", 1136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1143, "path", 1137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1144, "path", 1138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1145, "path", 1139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1146, "path", 1140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1147, "path", 1141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1148, "path", 1142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1149, "path", 1143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1150, "path", 1144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1151, "path", 1145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1152, "path", 1146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1153, "polygon", 1147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1154, "polygon", 1148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1155, "polygon", 1149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1156, "polygon", 1150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1157, "polygon", 1151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1158, "polygon", 1152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1159, "polygon", 1153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1160, "polygon", 1154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1161, "polygon", 1155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1162, "polygon", 1156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1163, "polygon", 1157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1164, "polygon", 1158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1165, "polygon", 1159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1166, "path", 1160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1167, "path", 1161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1168, "path", 1162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1169, "path", 1163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1170, "path", 1164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1171, "path", 1165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1172, "path", 1166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1173, "polygon", 1167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1174, "path", 1168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1175, "polygon", 1169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1176, "path", 1170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1177, "path", 1171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1178, "path", 1172);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1179, "path", 1173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1180, "path", 1174);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1181, "path", 1175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1182, "path", 1176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1183, "path", 1177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1184, "path", 1178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1185, "polygon", 1179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1186, "polygon", 1180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1187, "polygon", 1181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1188, "polygon", 1182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1189, "polygon", 1183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1190, "polygon", 1184);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1191, "polygon", 1185);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1192, "polygon", 1186);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1193, "polygon", 1187);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1194, "polygon", 1188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1195, "polygon", 1189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1196, "polygon", 1190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1197, "polygon", 1191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1198, "path", 1192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1199, "path", 1193);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1200, "path", 1194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1201, "path", 1195);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1202, "path", 1196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1203, "path", 1197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1204, "path", 1198);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1205, "path", 1199);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1206, "path", 1200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1207, "path", 1201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1208, "path", 1202);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1209, "path", 1203);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1210, "polygon", 1204);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1211, "polygon", 1205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1212, "polygon", 1206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1213, "polygon", 1207);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1214, "polygon", 1208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1215, "polygon", 1209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1216, "polygon", 1210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1217, "polygon", 1211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1218, "polygon", 1212);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1219, "polygon", 1213);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1220, "polygon", 1214);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1221, "polygon", 1215);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1222, "polygon", 1216);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1223, "path", 1217);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1224, "path", 1218);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1225, "path", 1219);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1226, "path", 1220);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1227, "path", 1221);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1228, "path", 1222);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1229, "path", 1223);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1230, "path", 1224);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1231, "path", 1225);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1232, "path", 1226);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1233, "path", 1227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1234, "path", 1228);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1235, "polygon", 1229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1236, "polygon", 1230);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1237, "polygon", 1231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1238, "polygon", 1232);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1239, "polygon", 1233);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1240, "polygon", 1234);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1241, "polygon", 1235);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1242, "polygon", 1236);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1243, "polygon", 1237);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1244, "polygon", 1238);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1245, "polygon", 1239);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1246, "polygon", 1240);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1247, "polygon", 1241);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1248, "path", 1242);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1249, "path", 1243);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1250, "path", 1244);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1251, "path", 1245);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1252, "path", 1246);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1253, "path", 1247);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1254, "path", 1248);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1255, "path", 1249);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1256, "path", 1250);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1257, "path", 1251);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1258, "path", 1252);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1259, "path", 1253);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1260, "polygon", 1254);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1261, "polygon", 1255);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1262, "polygon", 1256);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1263, "polygon", 1257);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1264, "polygon", 1258);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1265, "polygon", 1259);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1266, "polygon", 1260);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1267, "polygon", 1261);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1268, "polygon", 1262);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1269, "polygon", 1263);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1270, "polygon", 1264);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1271, "polygon", 1265);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1272, "polygon", 1266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1273, "path", 1267);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1274, "path", 1268);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1275, "path", 1269);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1276, "path", 1270);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1277, "path", 1271);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1278, "path", 1272);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1279, "path", 1273);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1280, "path", 1274);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1281, "path", 1275);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1282, "path", 1276);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1283, "path", 1277);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1284, "path", 1278);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1285, "polygon", 1279);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1286, "polygon", 1280);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1287, "polygon", 1281);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1288, "polygon", 1282);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1289, "polygon", 1283);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1290, "polygon", 1284);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1291, "polygon", 1285);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1292, "polygon", 1286);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1293, "polygon", 1287);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1294, "polygon", 1288);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1295, "polygon", 1289);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1296, "polygon", 1290);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1297, "polygon", 1291);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1298, "path", 1292);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1299, "path", 1293);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1300, "path", 1294);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1301, "path", 1295);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1302, "path", 1296);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1303, "path", 1297);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1304, "path", 1298);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1305, "path", 1299);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1306, "path", 1300);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1307, "path", 1301);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1308, "path", 1302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1309, "path", 1303);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1310, "polygon", 1304);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1311, "polygon", 1305);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1312, "polygon", 1306);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1313, "polygon", 1307);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1314, "polygon", 1308);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1315, "polygon", 1309);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1316, "polygon", 1310);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1317, "polygon", 1311);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1318, "polygon", 1312);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1319, "polygon", 1313);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1320, "polygon", 1314);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1321, "polygon", 1315);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1322, "polygon", 1316);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1323, "path", 1317);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1324, "path", 1318);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1325, "path", 1319);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1326, "path", 1320);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1327, "path", 1321);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1328, "path", 1322);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1329, "path", 1323);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1330, "path", 1324);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1331, "path", 1325);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1332, "path", 1326);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1333, "path", 1327);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1334, "path", 1328);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1335, "polygon", 1329);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1336, "polygon", 1330);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1337, "polygon", 1331);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1338, "polygon", 1332);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1339, "polygon", 1333);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1340, "polygon", 1334);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1341, "polygon", 1335);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1342, "polygon", 1336);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1343, "polygon", 1337);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1344, "polygon", 1338);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1345, "polygon", 1339);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1346, "polygon", 1340);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1347, "polygon", 1341);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1348, "path", 1342);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1349, "path", 1343);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1350, "path", 1344);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1351, "path", 1345);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1352, "path", 1346);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1353, "path", 1347);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1354, "path", 1348);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1355, "path", 1349);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1356, "path", 1350);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1357, "polygon", 1351);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1358, "polygon", 1352);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1359, "polygon", 1353);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1360, "polygon", 1354);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1361, "polygon", 1355);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1362, "polygon", 1356);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1363, "polygon", 1357);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1364, "polygon", 1358);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1365, "polygon", 1359);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1366, "polygon", 1360);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1367, "path", 1361);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1368, "path", 1362);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1369, "path", 1363);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1370, "path", 1364);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1371, "path", 1365);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1372, "path", 1366);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1373, "polygon", 1367);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1374, "polygon", 1368);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1375, "polygon", 1369);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1376, "polygon", 1370);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1377, "polygon", 1371);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1378, "polygon", 1372);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1379, "polygon", 1373);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1380, "polygon", 1374);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1381, "polygon", 1375);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1382, "polygon", 1376);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1383, "polygon", 1377);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1384, "polygon", 1378);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1385, "polygon", 1379);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1386, "path", 1380);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1387, "path", 1381);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1388, "path", 1382);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1389, "path", 1383);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1390, "path", 1384);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1391, "path", 1385);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1392, "path", 1386);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1393, "path", 1387);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1394, "path", 1388);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1395, "path", 1389);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1396, "path", 1390);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1397, "path", 1391);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1398, "polygon", 1392);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1399, "polygon", 1393);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1400, "polygon", 1394);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1401, "polygon", 1395);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1402, "polygon", 1396);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1403, "polygon", 1397);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1404, "polygon", 1398);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1405, "polygon", 1399);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1406, "polygon", 1400);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1407, "polygon", 1401);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1408, "polygon", 1402);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1409, "polygon", 1403);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1410, "polygon", 1404);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1411, "path", 1405);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1412, "path", 1406);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1413, "path", 1407);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1414, "path", 1408);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1415, "path", 1409);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1416, "path", 1410);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1417, "path", 1411);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1418, "path", 1412);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1419, "path", 1413);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1420, "path", 1414);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1421, "path", 1415);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1422, "path", 1416);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1423, "polygon", 1417);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1424, "polygon", 1418);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1425, "polygon", 1419);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1426, "polygon", 1420);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1427, "polygon", 1421);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1428, "polygon", 1422);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1429, "polygon", 1423);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1430, "polygon", 1424);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1431, "polygon", 1425);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1432, "polygon", 1426);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1433, "polygon", 1427);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1434, "polygon", 1428);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1435, "polygon", 1429);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1436, "path", 1430);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1437, "path", 1431);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1438, "path", 1432);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1439, "path", 1433);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1440, "path", 1434);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1441, "path", 1435);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1442, "path", 1436);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1443, "path", 1437);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1444, "path", 1438);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1445, "path", 1439);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1446, "path", 1440);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1447, "path", 1441);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1448, "polygon", 1442);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1449, "polygon", 1443);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1450, "polygon", 1444);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1451, "polygon", 1445);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1452, "polygon", 1446);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1453, "polygon", 1447);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1454, "polygon", 1448);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1455, "polygon", 1449);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1456, "polygon", 1450);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1457, "polygon", 1451);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1458, "polygon", 1452);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1459, "polygon", 1453);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1460, "polygon", 1454);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1461, "path", 1455);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1462, "path", 1456);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1463, "path", 1457);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1464, "path", 1458);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1465, "path", 1459);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1466, "path", 1460);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1467, "path", 1461);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1468, "path", 1462);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1469, "path", 1463);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1470, "path", 1464);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1471, "path", 1465);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1472, "path", 1466);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1473, "polygon", 1467);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1474, "polygon", 1468);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1475, "polygon", 1469);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1476, "polygon", 1470);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1477, "polygon", 1471);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1478, "polygon", 1472);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1479, "polygon", 1473);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1480, "polygon", 1474);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1481, "polygon", 1475);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1482, "polygon", 1476);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1483, "polygon", 1477);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1484, "polygon", 1478);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1485, "polygon", 1479);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1486, "path", 1480);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1487, "path", 1481);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1488, "path", 1482);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1489, "path", 1483);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1490, "path", 1484);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1491, "path", 1485);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1492, "path", 1486);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1493, "path", 1487);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1494, "path", 1488);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1495, "path", 1489);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1496, "path", 1490);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1497, "path", 1491);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1498, "polygon", 1492);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1499, "polygon", 1493);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1500, "polygon", 1494);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1501, "polygon", 1495);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1502, "polygon", 1496);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1503, "polygon", 1497);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1504, "polygon", 1498);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1505, "polygon", 1499);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1506, "polygon", 1500);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1507, "polygon", 1501);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1508, "polygon", 1502);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1509, "polygon", 1503);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1510, "polygon", 1504);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1511, "path", 1505);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1512, "path", 1506);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1513, "path", 1507);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1514, "path", 1508);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1515, "path", 1509);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1516, "path", 1510);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1517, "path", 1511);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1518, "path", 1512);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1519, "path", 1513);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1520, "path", 1514);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1521, "path", 1515);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1522, "path", 1516);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1523, "polygon", 1517);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1524, "polygon", 1518);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1525, "polygon", 1519);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1526, "polygon", 1520);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1527, "polygon", 1521);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1528, "polygon", 1522);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1529, "polygon", 1523);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1530, "polygon", 1524);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1531, "polygon", 1525);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1532, "polygon", 1526);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1533, "polygon", 1527);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1534, "polygon", 1528);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1535, "polygon", 1529);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1536, "path", 1530);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1537, "path", 1531);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1538, "path", 1532);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1539, "path", 1533);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1540, "path", 1534);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1541, "path", 1535);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1542, "path", 1536);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1543, "path", 1537);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1544, "path", 1538);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1545, "path", 1539);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1546, "path", 1540);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1547, "path", 1541);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1548, "polygon", 1542);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1549, "polygon", 1543);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1550, "polygon", 1544);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1551, "polygon", 1545);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1552, "polygon", 1546);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1553, "polygon", 1547);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1554, "polygon", 1548);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1555, "polygon", 1549);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1556, "polygon", 1550);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1557, "polygon", 1551);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1558, "polygon", 1552);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1559, "polygon", 1553);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1560, "polygon", 1554);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1561, "path", 1555);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1562, "path", 1556);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1563, "path", 1557);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1564, "path", 1558);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1565, "path", 1559);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1566, "path", 1560);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1567, "polygon", 1561);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1568, "polygon", 1562);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1569, "path", 1563);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1570, "path", 1564);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1571, "path", 1565);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1572, "path", 1566);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1573, "path", 1567);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1574, "path", 1568);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1575, "path", 1569);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1576, "path", 1570);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1577, "path", 1571);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1578, "path", 1572);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1579, "path", 1573);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1580, "path", 1574);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1581, "polygon", 1575);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1582, "polygon", 1576);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1583, "polygon", 1577);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1584, "polygon", 1578);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1585, "polygon", 1579);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1586, "polygon", 1580);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1587, "polygon", 1581);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1588, "polygon", 1582);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1589, "polygon", 1583);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1590, "polygon", 1584);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1591, "polygon", 1585);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1592, "polygon", 1586);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1593, "polygon", 1587);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1594, "path", 1588);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1595, "path", 1589);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1596, "path", 1590);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1597, "path", 1591);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1598, "path", 1592);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1599, "path", 1593);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1600, "polygon", 1594);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1601, "polygon", 1595);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1602, "path", 1596);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1603, "path", 1597);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1604, "path", 1598);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1605, "path", 1599);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1606, "path", 1600);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1607, "path", 1601);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1608, "path", 1602);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1609, "path", 1603);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1610, "path", 1604);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1611, "path", 1605);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1612, "path", 1606);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1613, "path", 1607);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1614, "polygon", 1608);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1615, "polygon", 1609);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1616, "polygon", 1610);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1617, "polygon", 1611);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1618, "polygon", 1612);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1619, "polygon", 1613);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1620, "polygon", 1614);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1621, "polygon", 1615);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1622, "polygon", 1616);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1623, "polygon", 1617);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1624, "polygon", 1618);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1625, "polygon", 1619);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1626, "polygon", 1620);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1627, "path", 1621);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1628, "path", 1622);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1629, "path", 1623);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1630, "path", 1624);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1631, "path", 1625);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1632, "path", 1626);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1633, "polygon", 1627);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1634, "polygon", 1628);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1635, "path", 1629);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1636, "path", 1630);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1637, "path", 1631);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1638, "path", 1632);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1639, "path", 1633);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1640, "path", 1634);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1641, "path", 1635);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1642, "path", 1636);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1643, "path", 1637);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1644, "path", 1638);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1645, "path", 1639);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1646, "path", 1640);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1647, "polygon", 1641);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1648, "polygon", 1642);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1649, "polygon", 1643);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1650, "polygon", 1644);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1651, "polygon", 1645);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1652, "polygon", 1646);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1653, "polygon", 1647);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1654, "polygon", 1648);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1655, "polygon", 1649);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1656, "polygon", 1650);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1657, "polygon", 1651);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1658, "polygon", 1652);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1659, "polygon", 1653);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1660, "path", 1654);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1661, "path", 1655);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1662, "path", 1656);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1663, "path", 1657);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1664, "path", 1658);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1665, "path", 1659);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1666, "polygon", 1660);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1667, "polygon", 1661);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1668, "path", 1662);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1669, "path", 1663);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1670, "path", 1664);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1671, "path", 1665);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1672, "path", 1666);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1673, "path", 1667);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1674, "path", 1668);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1675, "path", 1669);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1676, "path", 1670);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1677, "path", 1671);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1678, "path", 1672);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1679, "path", 1673);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1680, "polygon", 1674);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1681, "polygon", 1675);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1682, "polygon", 1676);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1683, "polygon", 1677);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1684, "polygon", 1678);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1685, "polygon", 1679);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1686, "polygon", 1680);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1687, "polygon", 1681);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1688, "polygon", 1682);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1689, "polygon", 1683);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1690, "polygon", 1684);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1691, "polygon", 1685);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1692, "polygon", 1686);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1693, "path", 1687);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1694, "path", 1688);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1695, "path", 1689);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1696, "path", 1690);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1697, "path", 1691);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1698, "path", 1692);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1699, "polygon", 1693);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1700, "polygon", 1694);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1701, "path", 1695);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1702, "path", 1696);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1703, "path", 1697);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1704, "path", 1698);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1705, "path", 1699);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1706, "path", 1700);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1707, "path", 1701);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1708, "path", 1702);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1709, "path", 1703);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1710, "path", 1704);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1711, "path", 1705);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1712, "path", 1706);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1713, "polygon", 1707);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1714, "polygon", 1708);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1715, "polygon", 1709);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1716, "polygon", 1710);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1717, "polygon", 1711);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1718, "polygon", 1712);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1719, "polygon", 1713);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1720, "polygon", 1714);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1721, "polygon", 1715);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1722, "polygon", 1716);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1723, "polygon", 1717);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1724, "polygon", 1718);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1725, "polygon", 1719);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1726, "path", 1720);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1727, "path", 1721);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1728, "path", 1722);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1729, "path", 1723);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1730, "path", 1724);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1731, "path", 1725);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1732, "polygon", 1726);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1733, "polygon", 1727);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1734, "path", 1728);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1735, "path", 1729);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1736, "path", 1730);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1737, "path", 1731);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1738, "path", 1732);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1739, "path", 1733);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1740, "path", 1734);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1741, "path", 1735);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1742, "path", 1736);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1743, "path", 1737);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1744, "path", 1738);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1745, "path", 1739);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1746, "polygon", 1740);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1747, "polygon", 1741);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1748, "polygon", 1742);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1749, "polygon", 1743);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1750, "polygon", 1744);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1751, "polygon", 1745);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1752, "polygon", 1746);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1753, "polygon", 1747);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1754, "polygon", 1748);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1755, "polygon", 1749);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1756, "polygon", 1750);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1757, "polygon", 1751);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1758, "polygon", 1752);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1759, "path", 1753);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1760, "path", 1754);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1761, "path", 1755);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1762, "path", 1756);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1763, "path", 1757);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1764, "path", 1758);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1765, "polygon", 1759);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1766, "polygon", 1760);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1767, "path", 1761);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1768, "path", 1762);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1769, "path", 1763);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1770, "path", 1764);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1771, "path", 1765);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1772, "path", 1766);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1773, "path", 1767);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1774, "path", 1768);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1775, "path", 1769);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1776, "path", 1770);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1777, "path", 1771);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1778, "path", 1772);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1779, "polygon", 1773);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1780, "polygon", 1774);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1781, "polygon", 1775);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1782, "polygon", 1776);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1783, "polygon", 1777);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1784, "polygon", 1778);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1785, "polygon", 1779);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1786, "polygon", 1780);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1787, "polygon", 1781);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1788, "polygon", 1782);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1789, "polygon", 1783);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1790, "polygon", 1784);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1791, "polygon", 1785);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1792, "path", 1786);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1793, "path", 1787);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1794, "path", 1788);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1795, "path", 1789);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1796, "path", 1790);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1797, "path", 1791);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1798, "path", 1792);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1799, "polygon", 1793);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1800, "path", 1794);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1801, "path", 1795);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1802, "path", 1796);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1803, "path", 1797);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1804, "path", 1798);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1805, "path", 1799);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1806, "polygon", 1800);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1807, "polygon", 1801);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1808, "polygon", 1802);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1809, "polygon", 1803);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1810, "polygon", 1804);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1811, "polygon", 1805);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1812, "polygon", 1806);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1813, "polygon", 1807);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1814, "polygon", 1808);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1815, "polygon", 1809);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1816, "polygon", 1810);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1817, "polygon", 1811);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1818, "polygon", 1812);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1819, "path", 1813);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1820, "path", 1814);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1821, "path", 1815);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1822, "path", 1816);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1823, "path", 1817);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1824, "path", 1818);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1825, "path", 1819);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1826, "polygon", 1820);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1827, "path", 1821);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1828, "path", 1822);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1829, "path", 1823);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1830, "path", 1824);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1831, "path", 1825);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1832, "path", 1826);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1833, "polygon", 1827);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1834, "polygon", 1828);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1835, "polygon", 1829);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1836, "polygon", 1830);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1837, "polygon", 1831);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1838, "polygon", 1832);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1839, "polygon", 1833);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1840, "polygon", 1834);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1841, "polygon", 1835);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1842, "polygon", 1836);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1843, "polygon", 1837);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1844, "polygon", 1838);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1845, "polygon", 1839);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1846, "path", 1840);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1847, "path", 1841);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1848, "path", 1842);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1849, "path", 1843);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1850, "path", 1844);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1851, "path", 1845);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1852, "path", 1846);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1853, "polygon", 1847);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1854, "path", 1848);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1855, "path", 1849);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1856, "path", 1850);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1857, "path", 1851);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1858, "path", 1852);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1859, "path", 1853);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1860, "polygon", 1854);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1861, "polygon", 1855);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1862, "polygon", 1856);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1863, "polygon", 1857);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1864, "polygon", 1858);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1865, "polygon", 1859);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1866, "polygon", 1860);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1867, "polygon", 1861);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1868, "polygon", 1862);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1869, "polygon", 1863);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1870, "polygon", 1864);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1871, "polygon", 1865);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1872, "polygon", 1866);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1873, "path", 1867);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1874, "path", 1868);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1875, "path", 1869);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1876, "path", 1870);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1877, "path", 1871);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1878, "path", 1872);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1879, "path", 1873);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1880, "polygon", 1874);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1881, "path", 1875);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1882, "path", 1876);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1883, "path", 1877);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1884, "path", 1878);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1885, "path", 1879);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1886, "path", 1880);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1887, "polygon", 1881);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1888, "polygon", 1882);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1889, "polygon", 1883);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1890, "polygon", 1884);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1891, "polygon", 1885);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1892, "polygon", 1886);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1893, "polygon", 1887);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1894, "polygon", 1888);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1895, "polygon", 1889);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1896, "polygon", 1890);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1897, "polygon", 1891);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1898, "polygon", 1892);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1899, "polygon", 1893);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1900, "path", 1894);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1901, "path", 1895);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1902, "path", 1896);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1903, "path", 1897);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1904, "path", 1898);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1905, "path", 1899);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1906, "path", 1900);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1907, "polygon", 1901);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1908, "path", 1902);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1909, "path", 1903);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1910, "g", 1904);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1911, "path", 1905);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1912, "path", 1906);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1913, "g", 1907);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1914, "path", 1908);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1915, "path", 1909);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1916, "path", 1910);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1917, "path", 1911);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1918, "path", 1912);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1919, "g", 1913);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1920, "path", 1914);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1921, "g", 1915);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1922, "path", 1916);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1923, "path", 1917);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1924, "path", 1918);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1925, "g", 1919);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1926, "path", 1920);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1927, "path", 1921);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1928, "path", 1922);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1929, "path", 1923);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1930, "g", 1924);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1931, "path", 1925);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1932, "path", 1926);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1933, "path", 1927);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1934, "path", 1928);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1935, "path", 1929);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1936, "path", 1930);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1937, "path", 1931);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1938, "path", 1932);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1939, "polygon", 1933);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1940, "path", 1934);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1941, "path", 1935);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1942, "path", 1936);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1943, "path", 1937);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1944, "polygon", 1938);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1945, "path", 1939);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1946, "g", 1940);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1947, "path", 1941);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1948, "path", 1942);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1949, "path", 1943);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1950, "path", 1944);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1951, "g", 1945);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1952, "path", 1946);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1953, "path", 1947);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1954, "g", 1948);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1955, "path", 1949);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1956, "path", 1950);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1957, "polygon", 1951);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1958, "path", 1952);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1959, "path", 1953);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1960, "path", 1954);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1961, "path", 1955);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1962, "path", 1956);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1963, "g", 1957);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1964, "path", 1958);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1965, "path", 1959);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1966, "g", 1960);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1967, "path", 1961);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1968, "path", 1962);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](415);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("cls-36 ", ctx.colorObj.color22, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("cls-26 ", ctx.colorObj.color11, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("cls-46 ", ctx.colorObj.color2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("cls-17 ", ctx.colorObj.color1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](506);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("cls-77 ", ctx.colorObj.color1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("cls-85 ", ctx.colorObj.color11, "");
        }
      },
      styles: ["#localtion-svg[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rebeccapurple;\r\n\r\n}\r\n.svg-box[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.color1[_ngcontent-%COMP%] {\r\n    fill: rgba(194, 0, 132, 1);\r\n}\r\n.color2[_ngcontent-%COMP%] {\r\n    fill: rgba(194, 0, 132, .5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9zaG9wcGluZy1sb2NhdGlvbi9zaG9wcGluZy1sb2NhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCwrQkFBK0I7O0FBRW5DO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvc2hvcHBpbmctbG9jYXRpb24vc2hvcHBpbmctbG9jYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2NhbHRpb24tc3ZnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcclxuXHJcbn1cclxuLnN2Zy1ib3gge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2xvcjEge1xyXG4gICAgZmlsbDogcmdiYSgxOTQsIDAsIDEzMiwgMSk7XHJcbn1cclxuXHJcbi5jb2xvcjIge1xyXG4gICAgZmlsbDogcmdiYSgxOTQsIDAsIDEzMiwgLjUpO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingLocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shopping-location',
          templateUrl: './shopping-location.component.html',
          styleUrls: ['./shopping-location.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! D:\project\项目\ShopPlan\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map