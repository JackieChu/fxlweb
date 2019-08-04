(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index-module"],{

/***/ "./node_modules/ngx-slider/ngx-slider.es5.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-slider/ngx-slider.es5.js ***!
  \***************************************************/
/*! exports provided: Slider, SliderModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderModule", function() { return SliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


var SliderComponent = (function () {
    /**
     * @param {?} el
     */
    function SliderComponent(el) {
        this.el = el;
        this.currentItemIndex = 0;
        this.activeTitle = '';
    }
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngOnInit = function () {
        this.sliderItems = this.init.items;
        this.config = this.init.config;
        this.setTitle();
        this.resize();
        this.setSliderStyle();
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.onResize = function () {
        this.resize();
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.resize = function () {
        this.componentWidth = this.el.nativeElement.parentElement.clientWidth - (this.getPreviewWidth() * this.getNumberOfPreview());
        this.setSlideStyle();
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.setSliderStyle = function () {
        var /** @type {?} */ width = this.getWrapperWidth() + "px";
        var /** @type {?} */ left = this.getWrapperLeft() ? "-" + (this.getWrapperLeft() - this.getPreviewWidth()) + "px" : 0;
        this.sliderStyle = {
            width: width,
            left: left,
            transition: "left " + this.config.transitionDuration + "s"
        };
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.setSlideStyle = function () {
        this.slideStyle = {
            width: this.componentWidth + "px"
        };
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.setTitle = function () {
        this.activeTitle =
            this.sliderItems.length ? this.sliderItems[this.currentItemIndex].title : '';
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.getNumberOfPreview = function () {
        return this.config.showPreview ? this.config.numberOfPreview : 0;
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.getPreviewWidth = function () {
        return this.config.showPreview ? this.config.previewWidth : 0;
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.getWrapperWidth = function () {
        return this.sliderItems.length ? this.sliderItems.length * this.componentWidth : this.componentWidth;
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.getWrapperLeft = function () {
        return this.currentItemIndex * this.componentWidth;
    };
    /**
     * @param {?} action
     * @return {?}
     */
    SliderComponent.prototype.goTo = function (action) {
        if (action === 'next') {
            if (this.sliderItems.length - 1 > this.currentItemIndex) {
                this.currentItemIndex++;
            }
            else {
                this.currentItemIndex = this.config.loop ? 0 : this.currentItemIndex;
            }
        }
        else if (action === 'previous') {
            if (this.currentItemIndex > 0) {
                this.currentItemIndex--;
            }
            else {
                this.currentItemIndex = this.config.loop ? this.sliderItems.length - 1 : this.currentItemIndex;
            }
        }
        else {
            this.currentItemIndex = action;
        }
        this.setSliderStyle();
        this.setTitle();
    };
    return SliderComponent;
}());
SliderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-slider',
                template: "\n    <h4 *ngIf=\"config.showTitle\" class=\"slide-title\" [innerHTML]=\"activeTitle\"></h4>\n    <div class=\"slider-container\">\n      <div class=\"slider-row\">\n        <div [ngStyle]=\"sliderStyle\" class=\"slide-wrapper\">\n          <div *ngFor=\"let slide of sliderItems; let i=index;\" \n               [class.active]=\"i === currentItemIndex\"\n               [ngStyle]=\"slideStyle\" \n               class=\"slide-item\">\n               <div [ngStyle]=\"{'background-image': 'url(' + slide.src + ')'}\" class=\"slide\"></div>\n          </div>\n        </div>\n      </div>\n      <ng-container *ngIf=\"sliderItems.length > 1 && config.showNavigator\">\n          <button (click)=\"goTo('next')\" class=\"slider-nav next\">\n              <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\n            </button>\n            <button (click)=\"goTo('previous')\" class=\"slider-nav previous\">\n              <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\n            </button>\n      </ng-container>\n      <div *ngIf=\"sliderItems.length > 1 && config.showDots\" class=\"slider-dots\">\n        <ul>\n          <li *ngFor=\"let slide of sliderItems; let i=index;\" [class.active]=\"i === currentItemIndex\">\n            <button (click)=\"goTo(i)\" class=\"dots\">\n              <i class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n            </button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  ",
                styles: ["\n    .slider-container {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        overflow: hidden;\n    }\n    .slider-row {\n        width: 100%;\n        height: 100%;\n    }\n    .slide-wrapper {\n        position: absolute;\n        height: 100%;\n    }\n    .slide-wrapper .active {\n        opacity: 1;\n        -webkit-transition: opacity 1s, -webkit-transform 1s;\n        transition: opacity 1s, -webkit-transform 1s;\n        transition: opacity 1s, transform 1s;\n        transition: opacity 1s, transform 1s, -webkit-transform 1s;\n    }\n    .slide-item {\n        display: inline-block;\n        height: 100%;\n        opacity: 0.5;\n        -webkit-transition: opacity 1s, -webkit-transform 1s;\n        transition: opacity 1s, -webkit-transform 1s;\n        transition: opacity 1s, transform 1s;\n        transition: opacity 1s, transform 1s, -webkit-transform 1s;\n    }\n    .slide {\n        height: 100%;\n        background-repeat: no-repeat;\n        background-size: auto;\n        background-position: center;\n        margin: 0 5px;\n    }\n    .slide-title {\n        font-size: 1.5rem;\n        padding: 10px;\n    }\n    .slider-nav {\n        background-color: rgba(0,0,0,0.2);\n        position: absolute;\n        top: 35%;\n        border: none;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: white;\n        font-size: 2rem;\n        padding: 1.5rem;\n    }\n\n    .next {\n        right: 0;\n    }\n\n    .previous {\n        left: 0;\n    }\n\n    .slider-dots {\n        position: absolute;\n        bottom: 3%;\n        width: 100%;\n        text-align: center;\n    }\n\n    .slider-dots ul {\n        margin: 0;\n        padding: 0;\n    }\n\n    .slider-dots ul li {\n        display: inline-block;\n        list-style: none;\n        margin: 0 3px;\n    } \n\n    .slider-dots ul li.active i {\n        color: #00C24F;\n    }\n\n    .dots {\n        padding: 0;\n        border: 0;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        background: none;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
SliderComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
SliderComponent.propDecorators = {
    'init': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onResize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event.target'],] },],
};
var SliderModule = (function () {
    function SliderModule() {
    }
    return SliderModule;
}());
SliderModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    SliderComponent
                ],
                exports: [
                    SliderComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
SliderModule.ctorParameters = function () { return []; };
var SliderConfig = (function () {
    function SliderConfig() {
        this.showDots = true;
        this.showNavigator = true;
        this.showTitle = true;
        this.loop = true;
        this.showPreview = true;
        this.numberOfPreview = 2;
        this.previewWidth = 50;
        this.transitionDuration = 1;
    }
    return SliderConfig;
}());
var Slider = (function () {
    function Slider() {
        this.items = [];
        this.config = new SliderConfig();
    }
    return Slider;
}());
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-slider.es5.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/index/banner/banner.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/index/banner/banner.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n  <ngx-slider [init]=\"slider\"></ngx-slider>\n  <div class=\"banner-info\" [ngClass]=\"{ close: infoClose }\">\n    <span class=\"title\">{{ slideItems[bannerIndex].title }}</span>\n    <span class=\"cont\">\n      <span *ngFor=\"let item of slideItems[bannerIndex].info\">{{ item }}</span>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/index/content/content.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/index/content/content.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-layout\">\n  <div class=\"record-layout\">\n    <div class=\"container\">\n      <h1 class=\"animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\">關於我們</h1>\n      <div class=\"record-block\">\n        <section class=\"record animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\" *ngFor=\"let item of recordList\" [@routerTransition]>\n          <span class=\"info\" [innerHTML]=\"item.info\"></span>\n        </section>\n      </div>\n    </div>\n  </div>\n  <!--業務範圍-->\n  <div class=\"practices-layout\">\n    <div class=\"practices-block\">\n      <h1 class=\"animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\">業務範圍</h1>\n      <span class=\"info animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\"></span>\n      <div class=\"cont-layout\">\n        <section class=\"block animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\" *ngFor=\"let item of businessList\">\n          <img src=\"{{item.icon}}\">\n          <div class=\"content\">\n            <span class=\"title\"> {{item.title}} </span>\n            <span class=\"cont\" style=\"color: #4c4c4c\"> {{item.info}} </span>\n          </div>\n        </section>\n      </div>\n    </div>\n  </div>\n  <!--顧問陣容-->\n  <div class=\"news-layout\">\n    <div class=\"container\">\n      <h1 class=\"animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\">顧問陣容</h1>\n      <ul class=\"news-tabs\">\n        <!--<li [ngClass]=\"{ active: tabIndex === 0 }\" (click)=\"changeTab(0)\">陣容履歷</li>\n        <li [ngClass]=\"{ active: tabIndex === 1 }\" (click)=\"changeTab(1)\">服務對象</li>-->\n      </ul>\n      <div class=\"activity-layout\" *ngIf=\"tabIndex === 1\">\n        <div class=\"activity-block\">\n          <span class=\"title\">我們的服務對象</span>\n          <span class=\"info\">\n            <ol style=\"list-style-type:disc\">\n              <li>▲ 準備設立公司者</li>\n              <li>▲ 經營管理者</li>\n              <li>▲ 有交易對象者</li>\n              <li>▲ 與政府部門交涉者</li>\n              <li>▲ 投資大陸及涉大陸法律事務</li>\n              <li>▲ 企業轉型</li>\n              <li>▲ 正臨各類營運疑難雜症者</li>\n            </ol>\n          </span>\n        </div>\n      </div>\n      <div class=\"role-layout\" *ngIf=\"tabIndex === 0\">\n        <section class=\"role-block\" *ngFor=\"let item of roleList\">\n          <div class=\"cont\">\n            <span class=\"title\" [innerHTML]=\"item.title\"></span>\n            <span class=\"info\" [innerHTML]=\"item.info\"></span>\n          </div>\n        </section>\n      </div>\n      <h1 class=\"animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\">合作夥伴</h1>\n      <ul class=\"news-tabs\"></ul>\n      <div class=\"role-layout\" *ngIf=\"tabIndex === 0\">\n          <section class=\"role-block\" *ngFor=\"let item of helpmateList\">\n            <div class=\"cont\">\n              <span class=\"title\" [innerHTML]=\"item.title\"></span>\n              <span class=\"info\" [innerHTML]=\"item.info\"></span>\n            </div>\n          </section>\n        </div>\n      <div class=\"buttons animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/index/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/index/footer/footer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-layout\">\n  <div class=\"content\">\n    <div class=\"container\">\n      <section class=\"block\">\n        <span class=\"info\">\n          <span>TEL: ＋886-968-583-768</span>\n          <span>TAX ID: 50952670</span>\n          <span>E-mail: <a href=\"mailto:fxlconsulting@gmail.com\" style=\"color: #ffff\">fxlconsulting@gmail.com</a></span>\n        </span>\n      </section>\n    </div>\n  </div>\n  <div class=\"copy\">\n    <div class=\"container\">\n      <span>\n        <span>\n            ©2019 FXL INTERNATIONAL CONSULTING\n        </span>\n        <span>\n            福軒萊國際顧問管理有限公司\n        </span>\n      </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/index/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/index/header/header.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-layout\">\n  <div class=\"header-logo\">\n    <img src=\"assets/images/logo.png\" width=\"237px\">\n  </div>\n  <!-- <ul class=\"header-menu\">\n    <li *ngFor=\"let item of menu\">{{ item.name }}</li>\n  </ul> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/index/index.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/index/index.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"content-layout\">\n  <app-banner></app-banner>\n  <app-content></app-content>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/index/banner/banner.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/index/banner/banner.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner-layout {\n  background-image: url(\"https://jackie.github.io/fxlweb/assets/images/banner.jpg\");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 592px;\n}\n\n.banner {\n  height: 630px;\n  position: relative;\n}\n\n@media only screen and (max-width: 446px) {\n  .banner {\n    height: 416px;\n  }\n}\n\n.banner .banner-info {\n  min-height: 470px;\n  min-width: 286px;\n  max-height: 150px;\n  max-width: 286px;\n  background-color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  padding: 80px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n\n.banner .banner-info.close {\n  left: -446px;\n}\n\n@media only screen and (max-width: 446px) {\n  .banner .banner-info {\n    background-color: rgba(255, 255, 255, 0.45);\n    min-width: calc(50% - 400px);\n    width: 100px;\n    min-height: calc(416px - 160px);\n  }\n  .banner .banner-info .title {\n    font-size: 12px;\n    line-height: 20px;\n    font-weight: 400;\n    color: #132541;\n  }\n  .banner .banner-info .cont {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    font-size: 23px !important;\n    line-height: 49px;\n    font-weight: 700;\n    color: #132541;\n  }\n}\n\n.banner .banner-info .title {\n  font-size: 13px;\n  line-height: 20px;\n  font-weight: 400;\n  color: #132541;\n  margin-bottom: 3rem;\n}\n\n.banner .banner-info .cont {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-size: 39px;\n  line-height: 49px;\n  font-weight: 700;\n  color: #132541;\n}\n\n.banner .banner-info button {\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: 700;\n  color: white;\n  background-color: #e5bd66;\n  border: 0;\n  padding: 9px 25px;\n  cursor: pointer;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n\n.banner .banner-info button:hover {\n  background-color: #e5ab2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNpZmVyL0Rlc2t0b3AvTGlnaHRVcC/lsIjmoYgvRnhsQ29uc3VsdGluZy9zcmMvYXBwL3BhZ2VzL2luZGV4L2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luZGV4L2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpRkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBSkY7SUFLSSxhQUFBO0VDRUY7QUFDRjs7QURERTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBQ0dKOztBRERJO0VBQ0UsWUFBQTtBQ0dOOztBREFJO0VBcEJGO0lBcUJJLDJDQUFBO0lBQ0EsNEJBQUE7SUFDQSxZQUFBO0lBQ0EsK0JBQUE7RUNHSjtFRERJO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDR047RURBSTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLDBCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUNFTjtBQUNGOztBRENJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDTjs7QURFSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FOOztBREdJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBQ0ROOztBREdNO0VBQ0UseUJBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyLWxheW91dCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vamFja2llLmdpdGh1Yi5pby9meGx3ZWIvYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU5MnB4O1xufVxuXG4uYmFubmVyIHtcbiAgaGVpZ2h0OiA2MzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQ2cHgpIHtcbiAgICBoZWlnaHQ6IDQxNnB4O1xuICB9XG4gIC5iYW5uZXItaW5mbyB7XG4gICAgbWluLWhlaWdodDogNDcwcHg7XG4gICAgbWluLXdpZHRoOiAyODZweDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDI4NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAmLmNsb3NlIHtcbiAgICAgIGxlZnQ6IC00NDZweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0NnB4KSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xuICAgICAgbWluLXdpZHRoOiBjYWxjKDUwJSAtIDQwMHB4KTtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoNDE2cHggLSAxNjBweCk7XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiByZ2IoMTksIDM3LCA2NSk7XG4gICAgICB9XG5cbiAgICAgIC5jb250IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogcmdiKDE5LCAzNywgNjUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBjb2xvcjogcmdiKDE5LCAzNywgNjUpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB9XG5cbiAgICAuY29udCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZvbnQtc2l6ZTogMzlweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiByZ2IoMTksIDM3LCA2NSk7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDE4OSwgMTAyKTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHBhZGRpbmc6IDlweCAyNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDE3MSwgNDUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmJhbm5lci1sYXlvdXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2phY2tpZS5naXRodWIuaW8vZnhsd2ViL2Fzc2V0cy9pbWFnZXMvYmFubmVyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1OTJweDtcbn1cblxuLmJhbm5lciB7XG4gIGhlaWdodDogNjMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQ2cHgpIHtcbiAgLmJhbm5lciB7XG4gICAgaGVpZ2h0OiA0MTZweDtcbiAgfVxufVxuLmJhbm5lciAuYmFubmVyLWluZm8ge1xuICBtaW4taGVpZ2h0OiA0NzBweDtcbiAgbWluLXdpZHRoOiAyODZweDtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIG1heC13aWR0aDogMjg2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uYmFubmVyIC5iYW5uZXItaW5mby5jbG9zZSB7XG4gIGxlZnQ6IC00NDZweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQ2cHgpIHtcbiAgLmJhbm5lciAuYmFubmVyLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG4gICAgbWluLXdpZHRoOiBjYWxjKDUwJSAtIDQwMHB4KTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWluLWhlaWdodDogY2FsYyg0MTZweCAtIDE2MHB4KTtcbiAgfVxuICAuYmFubmVyIC5iYW5uZXItaW5mbyAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMTMyNTQxO1xuICB9XG4gIC5iYW5uZXIgLmJhbm5lci1pbmZvIC5jb250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDQ5cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzEzMjU0MTtcbiAgfVxufVxuLmJhbm5lciAuYmFubmVyLWluZm8gLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMxMzI1NDE7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4uYmFubmVyIC5iYW5uZXItaW5mbyAuY29udCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMzlweDtcbiAgbGluZS1oZWlnaHQ6IDQ5cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMTMyNTQxO1xufVxuLmJhbm5lciAuYmFubmVyLWluZm8gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTViZDY2O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDlweCAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uYmFubmVyIC5iYW5uZXItaW5mbyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVhYjJkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/index/banner/banner.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/index/banner/banner.component.ts ***!
  \********************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-slider */ "./node_modules/ngx-slider/ngx-slider.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.slider = new ngx_slider__WEBPACK_IMPORTED_MODULE_2__["Slider"]();
        this.slideItems = [
            {
                src: 'assets/images/banner2.jpg',
                title: 'FXL INTERNATIONAL CONSULTING',
                info: ['您可信賴', '的守護者'],
            },
            {
                src: 'assets/images/banner1.jpg',
                title: 'FXL INTERNATIONAL CONSULTING',
                info: ['整合專業', '創新服務'],
            },
            {
                src: 'assets/images/banner3.jpg',
                title: 'FXL INTERNATIONAL CONSULTING',
                info: ['多元化顧問團體'],
            },
        ];
        this.bannerIndex = 0;
        this.infoClose = false;
        this.slider.config.loop = true;
        this.slider.config.showPreview = false;
        this.slider.config.showTitle = false;
        this.slider.config.showNavigator = false;
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.slider.items = this.slideItems;
    };
    BannerComponent.prototype.ngAfterViewInit = function () {
        this.dots = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](document.getElementsByClassName('dots'));
        this.bindDotsEvent();
        this.autoPlay();
    };
    BannerComponent.prototype.bindDotsEvent = function () {
        var _this = this;
        this.dots.forEach(function (dot, i) {
            dot.addEventListener('click', function () {
                _this.infoClose = true;
                setTimeout(function () {
                    _this.bannerIndex = i;
                    _this.infoClose = false;
                }, 30);
            });
        });
    };
    BannerComponent.prototype.autoPlay = function () {
        var _this = this;
        var ngxSlider = document.getElementsByTagName('ngx-slider')[0];
        var enter$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(ngxSlider, 'mouseenter');
        var leave$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(ngxSlider, 'mouseleave');
        leave$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                if (++_this.bannerIndex === _this.slideItems.length) {
                    _this.bannerIndex = 0;
                }
                _this.dots[_this.bannerIndex].click();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(enter$));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe();
    };
    BannerComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/index/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/pages/index/banner/banner.component.scss")]
        })
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/pages/index/content/content.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/index/content/content.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-layout .record-layout {\n  background-color: #262626;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 60px;\n}\n.content-layout .record-layout .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .content-layout .record-layout .container {\n    max-width: 940px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .content-layout .record-layout .container {\n    max-width: 708px;\n  }\n}\n.content-layout .record-layout .container h1 {\n  margin: 0;\n  color: #ffffff;\n  font-size: 24px;\n  line-height: 55px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  margin-bottom: 65px;\n}\n.content-layout .record-layout .container .record-block {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 767px) {\n  .content-layout .record-layout .container .record-block {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n.content-layout .record-layout .container .record {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 40px;\n}\n@media only screen and (max-width: 767px) {\n  .content-layout .record-layout .container .record {\n    width: 100%;\n  }\n}\n.content-layout .record-layout .container .record img {\n  max-width: 100%;\n  padding-top: 5px;\n  margin-bottom: 25px;\n}\n.content-layout .record-layout .container .record .info {\n  color: #fff;\n  text-align: left;\n  font-size: 16px;\n  line-height: 54px;\n  font-weight: 400;\n  letter-spacing: 0px;\n}\n.content-layout .record-layout button {\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: 700;\n  color: white;\n  background-color: #e5bd66;\n  border: 0;\n  padding: 11px 20px;\n  cursor: pointer;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n.content-layout .record-layout button:hover {\n  background-color: #e5ab2d;\n}\n.news-layout {\n  background-color: #f2f3f5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 60px;\n}\n.news-layout .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .news-layout .container {\n    max-width: 940px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .news-layout .container {\n    max-width: 708px;\n  }\n}\n.news-layout .container h1 {\n  margin: 0;\n  color: #262626;\n  font-size: 24px;\n  line-height: 55px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  margin-bottom: 18px;\n}\n.news-layout .container .news-tabs {\n  width: 44%;\n  border-bottom: 1px solid #00000014;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.news-layout .container .news-tabs li {\n  font-size: 16px;\n  font-weight: 400;\n  padding: 14px 30px !important;\n  cursor: pointer;\n}\n.news-layout .container .news-tabs li.active {\n  color: #cca353;\n  border-bottom: 1px solid #cca353;\n}\n.news-layout .container .activity-layout {\n  width: 100%;\n  height: 410px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.news-layout .container .activity-layout .activity-block {\n  min-height: 278px;\n  min-width: 671px;\n  max-height: 278px;\n  max-width: 671px;\n  background-color: rgba(0, 0, 0, 0);\n  border-color: #cca353;\n  border-style: solid;\n  border-width: 2px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .news-layout .container .activity-layout .activity-block {\n    min-height: 204px;\n    min-width: 494px;\n    max-height: 204px;\n    max-width: 494px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .news-layout .container .activity-layout .activity-block {\n    min-height: 144px;\n    min-width: 347px;\n    max-height: 144px;\n    max-width: 347px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .news-layout .container .activity-layout .activity-block {\n    min-height: 133px;\n    min-width: 323px;\n    max-height: 133px;\n    max-width: 323px;\n  }\n}\n.news-layout .container .activity-layout .activity-block .title {\n  font-size: 31px;\n  line-height: 19px;\n  font-weight: 400;\n  color: #132541;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .news-layout .container .activity-layout .activity-block .title {\n    font-size: 23px;\n    line-height: 14px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .news-layout .container .activity-layout .activity-block .title {\n    font-size: 16px;\n    line-height: 10px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .news-layout .container .activity-layout .activity-block .title {\n    font-size: 16px;\n    line-height: 9px;\n  }\n}\n.news-layout .container .activity-layout .activity-block .info {\n  text-align: left;\n  min-width: 401px;\n  max-width: 401px;\n  font-size: 15px;\n  line-height: 21px;\n  font-weight: 400;\n  color: #cca353;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .news-layout .container .activity-layout .activity-block .info {\n    min-width: 296px;\n    max-width: 296px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .news-layout .container .activity-layout .activity-block .info {\n    min-width: 208px;\n    max-width: 208px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .news-layout .container .activity-layout .activity-block .info {\n    min-width: 202px;\n    max-width: 202px;\n  }\n}\n.news-layout .container .role-layout {\n  width: 44%;\n  padding: 15px 20px 20px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n@media only screen and (max-width: 768px) {\n  .news-layout .container .role-layout {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 100%;\n    padding: 0;\n  }\n}\n.news-layout .container .role-layout .role-block {\n  background-color: #fff;\n  width: 100%;\n  margin: 10px 0;\n}\n@media only screen and (max-width: 768px) {\n  .news-layout .container .role-layout .role-block {\n    width: 100%;\n    margin: 10px 0;\n  }\n}\n.news-layout .container .role-layout .role-block .cont {\n  padding: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.news-layout .container .role-layout .role-block .cont .title {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 24px;\n  margin-bottom: 15px;\n  text-decoration: underline;\n}\n.news-layout .container .role-layout .role-block .cont .info {\n  color: #696969;\n}\n.news-layout .container .role-layout .role-block .foot {\n  background: rgba(0, 0, 0, 0.02);\n  padding: 7px 15px;\n  overflow: hidden;\n  line-height: 30px;\n  color: #a8a8a8;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.news-layout .container .role-layout .role-block .foot .foot-cont {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-left: 1px solid #00000014;\n  padding-left: 10px;\n}\n.news-layout .container .role-layout .role-block .foot .foot-cont span {\n  cursor: pointer;\n  color: #cca353;\n}\n.news-layout .container .role-layout .role-block .foot .foot-cont span:hover {\n  text-decoration: underline;\n}\n.news-layout .container .buttons {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.news-layout .container .buttons button {\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: 700;\n  border: 0;\n  padding: 11px 20px;\n  margin-bottom: 15px;\n  margin-right: 7px;\n  cursor: pointer;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n.news-layout .container .buttons button.activity {\n  color: #060a13;\n  background-color: #dcdde0;\n}\n.news-layout .container .buttons button.role {\n  color: white;\n  background-color: #e5bd66;\n}\n.practices-layout {\n  padding-top: 120px;\n  padding-bottom: 120px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.practices-layout .practices-block {\n  max-width: 1220px;\n  width: calc(100% - 80px);\n  padding: 60px 0 30px 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .practices-layout .practices-block {\n    max-width: 940px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .practices-layout .practices-block {\n    max-width: 708px;\n  }\n}\n.practices-layout .practices-block h1 {\n  margin: 0;\n  color: #262626;\n  font-size: 24px;\n  line-height: 55px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  margin-bottom: 45px;\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .practices-layout .practices-block h1 {\n    font-size: 43px;\n    line-height: 47px;\n  }\n}\n.practices-layout .practices-block .info {\n  text-align: center;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  margin-bottom: 15px;\n  color: #4c4c4c;\n  width: 58%;\n}\n@media only screen and (max-width: 768px) {\n  .practices-layout .practices-block .info {\n    width: 90%;\n  }\n}\n.practices-layout .practices-block .cont-layout {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 180px;\n}\n@media only screen and (max-width: 768px) {\n  .practices-layout .practices-block .cont-layout {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 100%;\n    padding: 0;\n    margin-left: 35px;\n  }\n}\n.practices-layout .practices-block .cont-layout .block {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  width: calc((100% / 2) - 80px);\n  padding: 40px;\n}\n@media only screen and (max-width: 1239px) {\n  .practices-layout .practices-block .cont-layout .block {\n    width: calc((100% / 3) - 20px);\n    padding: 10px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .practices-layout .practices-block .cont-layout .block {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 450px) {\n  .practices-layout .practices-block .cont-layout .block {\n    width: calc(100% - 20px);\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n  }\n}\n.practices-layout .practices-block .cont-layout .block .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 0 20px;\n}\n.practices-layout .practices-block .cont-layout .block .content .title {\n  font-size: 22px;\n  line-height: 26px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n@media only screen and (max-width: 450px) {\n  .practices-layout .practices-block .cont-layout .block .content {\n    font-size: 15px;\n  }\n  .practices-layout .practices-block .cont-layout .block .content .title {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNpZmVyL0Rlc2t0b3AvTGlnaHRVcC/lsIjmoYgvRnhsQ29uc3VsdGluZy9zcmMvYXBwL3BhZ2VzL2luZGV4L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5kZXgvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7QUNBSjtBREVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBTjtBREVNO0VBTkY7SUFPSSxnQkFBQTtFQ0NOO0FBQ0Y7QURDTTtFQVZGO0lBV0ksZ0JBQUE7RUNFTjtBQUNGO0FEQU07RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0VSO0FEQ007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQ1I7QURDUTtFQUpGO0lBS0ksNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDRVI7QUFDRjtBRENNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQ1E7RUFQRjtJQVFJLFdBQUE7RUNFUjtBQUNGO0FEQVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VWO0FEQ1E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ1Y7QURJSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUNGTjtBRElNO0VBQ0UseUJBQUE7QUNGUjtBRFFBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7QUNMRjtBRE9FO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNMSjtBRE9JO0VBTkY7SUFPSSxnQkFBQTtFQ0pKO0FBQ0Y7QURNSTtFQVZGO0lBV0ksZ0JBQUE7RUNISjtBQUNGO0FES0k7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0hOO0FETUk7RUFDRSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0pOO0FET007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNMUjtBRE9RO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0FDTFY7QURVSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNSTjtBRFVNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1JSO0FEVVE7RUFkRjtJQWVJLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDUFI7QUFDRjtBRFNRO0VBckJGO0lBc0JJLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDTlI7QUFDRjtBRFFRO0VBNUJGO0lBNkJJLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDTFI7QUFDRjtBRE9RO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTFY7QURPVTtFQU5GO0lBT0ksZUFBQTtJQUNBLGlCQUFBO0VDSlY7QUFDRjtBRE1VO0VBWEY7SUFZSSxlQUFBO0lBQ0EsaUJBQUE7RUNIVjtBQUNGO0FES1U7RUFoQkY7SUFpQkksZUFBQTtJQUNBLGdCQUFBO0VDRlY7QUFDRjtBREtRO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSFY7QURLVTtFQVRGO0lBVUksZ0JBQUE7SUFDQSxnQkFBQTtFQ0ZWO0FBQ0Y7QURJVTtFQWRGO0lBZUksZ0JBQUE7SUFDQSxnQkFBQTtFQ0RWO0FBQ0Y7QURHVTtFQW5CRjtJQW9CSSxnQkFBQTtJQUNBLGdCQUFBO0VDQVY7QUFDRjtBREtJO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNITjtBREtNO0VBUkY7SUFTSSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQ0ZOO0FBQ0Y7QURJTTtFQUNFLHNCQUFBO0VBRUEsV0FBQTtFQUNBLGNBQUE7QUNIUjtBRFNRO0VBVkY7SUFXSSxXQUFBO0lBQ0EsY0FBQTtFQ05SO0FBQ0Y7QURRUTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNOVjtBRFFVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDTlo7QURTVTtFQUNFLGNBQUE7QUNQWjtBRFdRO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNUVjtBRFdVO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDVFo7QURXWTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDVGQ7QURXYztFQUNFLDBCQUFBO0FDVGhCO0FEaUJJO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDZk47QURpQk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBQ2ZSO0FEaUJRO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FDZlY7QURrQlE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNoQlY7QUR1QkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNwQkY7QURzQkU7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNwQko7QURzQkk7RUFURjtJQVVJLGdCQUFBO0VDbkJKO0FBQ0Y7QURxQkk7RUFiRjtJQWNJLGdCQUFBO0VDbEJKO0FBQ0Y7QURvQkk7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ2xCTjtBRG9CTTtFQVRGO0lBVUksZUFBQTtJQUNBLGlCQUFBO0VDakJOO0FBQ0Y7QUR1Qkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDckJOO0FEdUJNO0VBVkY7SUFXSSxVQUFBO0VDcEJOO0FBQ0Y7QUR1Qkk7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUN0Qk47QUR3Qk07RUFORjtJQU9JLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7RUNyQk47QUFDRjtBRHVCTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUVBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUN0QlI7QUR3QlE7RUFQRjtJQVFJLDhCQUFBO0lBQ0EsYUFBQTtFQ3JCUjtBQUNGO0FEdUJRO0VBWkY7SUFhSSxXQUFBO0VDcEJSO0FBQ0Y7QURzQlE7RUFoQkY7SUFpQkksd0JBQUE7SUFDQSx1QkFBQTtZQUFBLDJCQUFBO0VDbkJSO0FBQ0Y7QURxQlE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0FDbkJWO0FEcUJVO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ25CWjtBRHFCVTtFQWJGO0lBY0ksZUFBQTtFQ2xCVjtFRG1CVTtJQUNFLGVBQUE7RUNqQlo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWxheW91dCB7XG4gIC5yZWNvcmQtbGF5b3V0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2MHB4O1xuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgICAgICBtYXgtd2lkdGg6IDk0MHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWF4LXdpZHRoOiA3MDhweDtcbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2NXB4O1xuICAgICAgfVxuXG4gICAgICAucmVjb3JkLWJsb2NrIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yZWNvcmQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAxODksIDEwMik7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBwYWRkaW5nOiAxMXB4IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMTcxLCA0NSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uZXdzLWxheW91dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4O1xuXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgICAgbWF4LXdpZHRoOiA5NDBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIG1heC13aWR0aDogNzA4cHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6ICMyNjI2MjY7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBsaW5lLWhlaWdodDogNTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICB9XG5cbiAgICAubmV3cy10YWJzIHtcbiAgICAgIHdpZHRoOiA0NCU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDE0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG4gICAgICBsaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgcGFkZGluZzogMTRweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICNjY2EzNTM7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2EzNTM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aXZpdHktbGF5b3V0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA0MTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5hY3Rpdml0eS1ibG9jayB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI3OHB4O1xuICAgICAgICBtaW4td2lkdGg6IDY3MXB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAyNzhweDtcbiAgICAgICAgbWF4LXdpZHRoOiA2NzFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2NhMzUzO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwNHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogNDk0cHg7XG4gICAgICAgICAgbWF4LWhlaWdodDogMjA0cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0OTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDE0NHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogMzQ3cHg7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTQ0cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzNDdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMzNweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDMyM3B4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDEzM3B4O1xuICAgICAgICAgIG1heC13aWR0aDogMzIzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzFweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiByZ2IoMTksIDM3LCA2NSk7XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzlweCkgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgbWluLXdpZHRoOiA0MDFweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiAjY2NhMzUzO1xuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyOTZweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjk2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwOHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMnB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucm9sZS1sYXlvdXQge1xuICAgICAgd2lkdGg6IDQ0JTtcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweCAyMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgLnJvbGUtYmxvY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcblxuICAgICAgICAvLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICAgIC8vICAgd2lkdGg6IGNhbGMoKDEwMCUgLyAzKSAtIDQwcHgpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICBjb2xvcjogIzY5Njk2OTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgICAgICAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGNvbG9yOiAjYThhOGE4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgLmZvb3QtY29udCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMDAwMTQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjY2NhMzUzO1xuXG4gICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbnMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIHBhZGRpbmc6IDExcHggMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcblxuICAgICAgICAmLmFjdGl2aXR5IHtcbiAgICAgICAgICBjb2xvcjogIzA2MGExMztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZGUwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5yb2xlIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMTg5LCAxMDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5wcmFjdGljZXMtbGF5b3V0IHtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5wcmFjdGljZXMtYmxvY2sge1xuICAgIG1heC13aWR0aDogMTIyMHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICBwYWRkaW5nOiA2MHB4IDAgMzBweCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzOXB4KSBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICAgIG1heC13aWR0aDogOTQwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBtYXgtd2lkdGg6IDcwOHB4O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmb250LXNpemU6IDQzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICBjb2xvcjogIzRjNGM0YztcbiAgICAgIHdpZHRoOiA1OCU7XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udC1sYXlvdXQge1xuICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgcGFkZGluZzogMCAxODBweDtcblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICB9XG5cbiAgICAgIC5ibG9jayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLyAyKSAtIDgwcHgpO1xuICAgICAgICBwYWRkaW5nOiA0MHB4O1xuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzOXB4KSB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLyAzKSAtIDIwcHgpO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250ZW50LWxheW91dCAucmVjb3JkLWxheW91dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4O1xufVxuLmNvbnRlbnQtbGF5b3V0IC5yZWNvcmQtbGF5b3V0IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzOXB4KSBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLmNvbnRlbnQtbGF5b3V0IC5yZWNvcmQtbGF5b3V0IC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTQwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudC1sYXlvdXQgLnJlY29yZC1sYXlvdXQgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA3MDhweDtcbiAgfVxufVxuLmNvbnRlbnQtbGF5b3V0IC5yZWNvcmQtbGF5b3V0IC5jb250YWluZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2NXB4O1xufVxuLmNvbnRlbnQtbGF5b3V0IC5yZWNvcmQtbGF5b3V0IC5jb250YWluZXIgLnJlY29yZC1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbnQtbGF5b3V0IC5yZWNvcmQtbGF5b3V0IC5jb250YWluZXIgLnJlY29yZC1ibG9jayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmNvbnRlbnQtbGF5b3V0IC5yZWNvcmQtbGF5b3V0IC5jb250YWluZXIgLnJlY29yZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbnQtbGF5b3V0IC5yZWNvcmQtbGF5b3V0IC5jb250YWluZXIgLnJlY29yZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5jb250ZW50LWxheW91dCAucmVjb3JkLWxheW91dCAuY29udGFpbmVyIC5yZWNvcmQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmNvbnRlbnQtbGF5b3V0IC5yZWNvcmQtbGF5b3V0IC5jb250YWluZXIgLnJlY29yZCAuaW5mbyB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xufVxuLmNvbnRlbnQtbGF5b3V0IC5yZWNvcmQtbGF5b3V0IGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1YmQ2NjtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxMXB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jb250ZW50LWxheW91dCAucmVjb3JkLWxheW91dCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVhYjJkO1xufVxuXG4ubmV3cy1sYXlvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNjBweDtcbn1cbi5uZXdzLWxheW91dCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzlweCkgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5uZXdzLWxheW91dCAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDk0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5ld3MtbGF5b3V0IC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzA4cHg7XG4gIH1cbn1cbi5uZXdzLWxheW91dCAuY29udGFpbmVyIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzI2MjYyNjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cbi5uZXdzLWxheW91dCAuY29udGFpbmVyIC5uZXdzLXRhYnMge1xuICB3aWR0aDogNDQlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDE0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uZXdzLWxheW91dCAuY29udGFpbmVyIC5uZXdzLXRhYnMgbGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDE0cHggMzBweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAubmV3cy10YWJzIGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjY2NhMzUzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYTM1Mztcbn1cbi5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAuYWN0aXZpdHktbGF5b3V0IC5hY3Rpdml0eS1ibG9jayB7XG4gIG1pbi1oZWlnaHQ6IDI3OHB4O1xuICBtaW4td2lkdGg6IDY3MXB4O1xuICBtYXgtaGVpZ2h0OiAyNzhweDtcbiAgbWF4LXdpZHRoOiA2NzFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyLWNvbG9yOiAjY2NhMzUzO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzlweCkgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIHtcbiAgICBtaW4taGVpZ2h0OiAyMDRweDtcbiAgICBtaW4td2lkdGg6IDQ5NHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwNHB4O1xuICAgIG1heC13aWR0aDogNDk0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAuYWN0aXZpdHktbGF5b3V0IC5hY3Rpdml0eS1ibG9jayB7XG4gICAgbWluLWhlaWdodDogMTQ0cHg7XG4gICAgbWluLXdpZHRoOiAzNDdweDtcbiAgICBtYXgtaGVpZ2h0OiAxNDRweDtcbiAgICBtYXgtd2lkdGg6IDM0N3B4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIHtcbiAgICBtaW4taGVpZ2h0OiAxMzNweDtcbiAgICBtaW4td2lkdGg6IDMyM3B4O1xuICAgIG1heC1oZWlnaHQ6IDEzM3B4O1xuICAgIG1heC13aWR0aDogMzIzcHg7XG4gIH1cbn1cbi5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMTMyNTQxO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAuYWN0aXZpdHktbGF5b3V0IC5hY3Rpdml0eS1ibG9jayAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA5cHg7XG4gIH1cbn1cbi5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIC5pbmZvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWluLXdpZHRoOiA0MDFweDtcbiAgbWF4LXdpZHRoOiA0MDFweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNjY2EzNTM7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzlweCkgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIC5pbmZvIHtcbiAgICBtaW4td2lkdGg6IDI5NnB4O1xuICAgIG1heC13aWR0aDogMjk2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAuYWN0aXZpdHktbGF5b3V0IC5hY3Rpdml0eS1ibG9jayAuaW5mbyB7XG4gICAgbWluLXdpZHRoOiAyMDhweDtcbiAgICBtYXgtd2lkdGg6IDIwOHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIC5pbmZvIHtcbiAgICBtaW4td2lkdGg6IDIwMnB4O1xuICAgIG1heC13aWR0aDogMjAycHg7XG4gIH1cbn1cbi5uZXdzLWxheW91dCAuY29udGFpbmVyIC5yb2xlLWxheW91dCB7XG4gIHdpZHRoOiA0NCU7XG4gIHBhZGRpbmc6IDE1cHggMjBweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAucm9sZS1sYXlvdXQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLnJvbGUtbGF5b3V0IC5yb2xlLWJsb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAucm9sZS1sYXlvdXQgLnJvbGUtYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG59XG4ubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAucm9sZS1sYXlvdXQgLnJvbGUtYmxvY2sgLmNvbnQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLnJvbGUtbGF5b3V0IC5yb2xlLWJsb2NrIC5jb250IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLnJvbGUtbGF5b3V0IC5yb2xlLWJsb2NrIC5jb250IC5pbmZvIHtcbiAgY29sb3I6ICM2OTY5Njk7XG59XG4ubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAucm9sZS1sYXlvdXQgLnJvbGUtYmxvY2sgLmZvb3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjYThhOGE4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLnJvbGUtbGF5b3V0IC5yb2xlLWJsb2NrIC5mb290IC5mb290LWNvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMDAwMTQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5uZXdzLWxheW91dCAuY29udGFpbmVyIC5yb2xlLWxheW91dCAucm9sZS1ibG9jayAuZm9vdCAuZm9vdC1jb250IHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjY2NhMzUzO1xufVxuLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLnJvbGUtbGF5b3V0IC5yb2xlLWJsb2NrIC5mb290IC5mb290LWNvbnQgc3Bhbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLmJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAuYnV0dG9ucyBidXR0b24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDExcHggMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cbi5uZXdzLWxheW91dCAuY29udGFpbmVyIC5idXR0b25zIGJ1dHRvbi5hY3Rpdml0eSB7XG4gIGNvbG9yOiAjMDYwYTEzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZGUwO1xufVxuLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLmJ1dHRvbnMgYnV0dG9uLnJvbGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWJkNjY7XG59XG5cbi5wcmFjdGljZXMtbGF5b3V0IHtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByYWN0aWNlcy1sYXlvdXQgLnByYWN0aWNlcy1ibG9jayB7XG4gIG1heC13aWR0aDogMTIyMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gIHBhZGRpbmc6IDYwcHggMCAzMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzOXB4KSBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLnByYWN0aWNlcy1sYXlvdXQgLnByYWN0aWNlcy1ibG9jayB7XG4gICAgbWF4LXdpZHRoOiA5NDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5wcmFjdGljZXMtbGF5b3V0IC5wcmFjdGljZXMtYmxvY2sge1xuICAgIG1heC13aWR0aDogNzA4cHg7XG4gIH1cbn1cbi5wcmFjdGljZXMtbGF5b3V0IC5wcmFjdGljZXMtYmxvY2sgaDEge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5wcmFjdGljZXMtbGF5b3V0IC5wcmFjdGljZXMtYmxvY2sgaDEge1xuICAgIGZvbnQtc2l6ZTogNDNweDtcbiAgICBsaW5lLWhlaWdodDogNDdweDtcbiAgfVxufVxuLnByYWN0aWNlcy1sYXlvdXQgLnByYWN0aWNlcy1ibG9jayAuaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICM0YzRjNGM7XG4gIHdpZHRoOiA1OCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcmFjdGljZXMtbGF5b3V0IC5wcmFjdGljZXMtYmxvY2sgLmluZm8ge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbi5wcmFjdGljZXMtbGF5b3V0IC5wcmFjdGljZXMtYmxvY2sgLmNvbnQtbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAwIDE4MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJhY3RpY2VzLWxheW91dCAucHJhY3RpY2VzLWJsb2NrIC5jb250LWxheW91dCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICB9XG59XG4ucHJhY3RpY2VzLWxheW91dCAucHJhY3RpY2VzLWJsb2NrIC5jb250LWxheW91dCAuYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLyAyKSAtIDgwcHgpO1xuICBwYWRkaW5nOiA0MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIHtcbiAgLnByYWN0aWNlcy1sYXlvdXQgLnByYWN0aWNlcy1ibG9jayAuY29udC1sYXlvdXQgLmJsb2NrIHtcbiAgICB3aWR0aDogY2FsYygoMTAwJSAvIDMpIC0gMjBweCk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJhY3RpY2VzLWxheW91dCAucHJhY3RpY2VzLWJsb2NrIC5jb250LWxheW91dCAuYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5wcmFjdGljZXMtbGF5b3V0IC5wcmFjdGljZXMtYmxvY2sgLmNvbnQtbGF5b3V0IC5ibG9jayB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxufVxuLnByYWN0aWNlcy1sYXlvdXQgLnByYWN0aWNlcy1ibG9jayAuY29udC1sYXlvdXQgLmJsb2NrIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLnByYWN0aWNlcy1sYXlvdXQgLnByYWN0aWNlcy1ibG9jayAuY29udC1sYXlvdXQgLmJsb2NrIC5jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnByYWN0aWNlcy1sYXlvdXQgLnByYWN0aWNlcy1ibG9jayAuY29udC1sYXlvdXQgLmJsb2NrIC5jb250ZW50IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLnByYWN0aWNlcy1sYXlvdXQgLnByYWN0aWNlcy1ibG9jayAuY29udC1sYXlvdXQgLmJsb2NrIC5jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/index/content/content.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/index/content/content.component.ts ***!
  \**********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
        this.recordList = [
            {
                cover: 'assets/images/record1.jpg',
                // tslint:disable-next-line:max-line-length
                info: '整體戰略管理 風險防範與控制<br> 預防勝於治療 多一分事前風險管控 少一分事後爭議損失<br> 預防可能存在的法律風險及問題 避免或大幅降低解決糾紛的成本 <br> 全面提升營運績效 同時將風險降至最低 <br>以客戶需求為導向 針對個別產業特性 提供客製化解決方案'
            },
        ];
        this.businessList = [
            {
                icon: 'assets/images/visibility.svg',
                title: '風險控制',
                info: '風險規避、預防或降低損失',
            },
            {
                icon: 'assets/images/description.svg',
                title: '合約管理',
                info: '合約審閱、擬稿、修訂、歸檔等全方位管理',
            },
            {
                icon: 'assets/images/question_answer.svg',
                title: '爭議處理',
                info: '經營權、債務、勞資、智財權等常見爭議',
            },
            {
                icon: 'assets/images/camera.svg',
                title: '大陸事務',
                info: '大陸投資、商業活動、法律諮詢',
            },
        ];
        this.roleList = [
            {
                title: '鄭幸萊  <small>律師</small>',
                info: "<p><b>\u8B49\u7167/\u5B78\u6B77</b></p>\n      <ul style=\"list-style-type:disc;\">\n      <li>\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u570B\u5F8B\u5E2B\u8B49\u66F8</li>\n\n      <li>\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u570B\u6CD5\u5F8B\u57F7\u696D\u8CC7\u683C</li>\n\n      <li>\u82F1\u570BCity & Guilds Level 4 \u5C08\u6848\u7BA1\u7406\u8207\u8EDF\u9AD4\u8A8D\u8B49</li>\n\n      <li>\u6CD5\u570B\u53F2\u7279\u62C9\u65AF\u5821\u5927\u5B78\u570B\u969B\u667A\u6167\u8CA1\u7522\u6B0A\u7814\u7A76\u4E2D\u5FC3 \u667A\u6167\u8CA1\u7522\u6CD5\u6CD5\u5B78\u78A9\u58EB</li>\n\n      <li>\u570B\u7ACB\u9AD8\u96C4\u7B2C\u4E00\u79D1\u6280\u5927\u5B78\u61C9\u7528\u82F1\u8A9E\u7CFB\u5B78\u58EB</li>\n\n      <li>\u6587\u85FB\u5916\u8A9E\u5927\u5B78\u6CD5\u8A9E\u7CFB\u526F\u5B78\u58EB</li>\n\n      <p><b>\u7D93\u6B77</b></p>\n\n      <li>\u4E0A\u6D77\u798F\u4E00\u5F8B\u5E2B\u4E8B\u52D9\u6240</li>\n\n      <li>\u4E0A\u6D77\u7406\u6148\u5F8B\u5E2B\u4E8B\u52D9\u6240</li>\n\n      <li>\u7406\u6148\u570B\u969B\u79D1\u6280\u6CD5\u5F8B\u4E8B\u52D9\u6240</li>\n\n      <li>\u5B8F\u666F\u667A\u6B0A\u5C08\u5229\u5546\u6A19\u6CD5\u5F8B\u4E8B\u52D9\u6240</li>\n\n      <li>\u7D71\u7ACB\u958B\u767C\u80A1\u4EFD\u6709\u9650\u516C\u53F8</li>\n\n      <li>2009\u4E16\u754C\u904B\u52D5\u6703\u7D44\u59D4\u6703\u57FA\u91D1\u6703</li>\n\n      <p><b>\u5C08\u9577</b></p>\n      <li>\u516C\u53F8\u6CD5\u5F8B\u696D\u52D9\u3001\u667A\u6167\u8CA1\u7522\u6B0A\u3001\u8DE8\u5883\u6295\u8CC7\u3001\u4F01\u696D\u7BA1\u7406</li>\n      <p><b>\u8A9E\u8A00</b></p>\n      <li>\u4E2D\u6587\u3001\u82F1\u8A9E\u3001\u6CD5\u8A9E</li></ul>"
            },
            {
                title: 'Joy <small>顧問</small>',
                info: "<p><b>\u8B49\u7167/\u5B78\u6B77</b></p>\n      <ul style=\"list-style-type:disc;\">\n      <li>\u6771\u5433\u5927\u5B78\u6CD5\u5B78\u78A9\u58EB</li>\n\n      <li>\u570B\u9632\u7BA1\u7406\u5B78\u9662\u6CD5\u5B78\u58EB</li>\n\n      <li>\u8003\u8A66\u9662\u4E59\u7B49\u7279\u8003\u53CA\u683C</li>\n\n      <li>\u653F\u5E9C\u63A1\u8CFC\u6CD5\u63A1\u8CFC\u5C08\u696D\u4EBA\u54E1\u8003\u8A66\u53CA\u683C</li>\n\n      <p><b>\u7D93\u6B77</b></p>\n\n      <li>\u570B\u9632\u90E8\u6700\u9AD8\u8ECD\u4E8B\u6CD5\u9662\u6CD5\u5B98</li>\n\n      <li>\u570B\u9632\u90E8\u9AD8\u7B49\u8ECD\u4E8B\u6CD5\u9662\u6CD5\u5B98</li>\n\n      <li>\u570B\u9632\u90E8\u9AD8\u7B49\u8ECD\u4E8B\u6CD5\u9662\u6AA2\u5BDF\u7F72\u6AA2\u5BDF\u5B98</li>\n\n      <li>\u570B\u9632\u90E8\u5357\u90E8\u5730\u65B9\u8ECD\u4E8B\u6CD5\u9662\u6AA2\u5BDF\u7F72\u4E3B\u4EFB\u6AA2\u5BDF\u5B98</li>\n\n      <li>\u570B\u9632\u90E8\u6CD5\u5236\u53F8\u6CD5\u5236\u5B98</li>\n\n      <li>\u570B\u9632\u90E8\u8A34\u9858\u59D4\u54E1\u6703\u79D8\u66F8</li>\n\n      <p><b>\u5C08\u9577</b></p>\n      <li>\u516C\u53F8\u5236\u5EA6\u898F\u7AE0\u5236\u5B9A\u3001 \u653F\u5E9C\u6A5F\u95DC\u884C\u653F\u5BE6\u52D9 \u3001\u884C\u653F\u8A34\u8A1F\u3001\u516C\u5171\u5DE5\u7A0B\u63A1\u8CFC\u5BE6\u52D9\u3001 \u5DE5\u7A0B\u5408\u7D04\u64EC\u5B9A\u8207\u5BE9\u67E5\u3001\u5DE5\u7A0B\u5C65\u7D04\u7BA1\u7406\u3001\u6CD5\u9662\u5BE9\u6AA2\u5BE6\u52D9</li></ul>"
            },
            {
                title: '黃玟錡  <small>律師</small>',
                info: "<p><b>\u8B49\u7167/\u5B78\u6B77</b></p>\n      <ul style=\"list-style-type:disc;\">\n      <li>\u4E2D\u83EF\u6C11\u570B\u5F8B\u5E2B\u57F7\u7167</li>\n\n      <li>\u516C\u52D9\u4EBA\u54E1\u7279\u7A2E\u8003\u8A66\u53F8\u6CD5\u4EBA\u54E1\u56DB\u7B49\u8003\u8A66\u53CA\u683C\u8B49\u66F8</li>\n\n      <li>\u570B\u969B\u8CBF\u6613\u5927\u6703\u8003\u5408\u683C\u7167\u66F8</li>\n\n      <li>\u6771\u5433\u5927\u5B78 \u79D1\u6280\u6CD5\u5F8B\u7814\u7A76\u6240</li>\n\n      <li>\u6587\u85FB\u5916\u8A9E\u5B78\u9662\u82F1\u6587\u7CFB\u5B78\u58EB</li>\n\n\n      <p><b>\u7D93\u6B77</b></p>\n\n      <li>\u81FA\u7063\u9AD8\u7B49\u6CD5\u9662</li>\n\n      <li>\u8CA1\u5718\u6CD5\u4EBA\u6CD5\u5F8B\u6276\u52A9\u57FA\u91D1\u6703\u53F0\u5317\u3001\u65B0\u5317\u3001\u58EB\u6797\u5206\u6703</li>\n\n      <li>\u53F0\u5317\u5E02\u653F\u5E9C\u52DE\u52D5\u5C40</li>\n\n      <li>\u53F0\u5317\u5E02\u52DE\u52D5\u529B\u91CD\u5EFA\u904B\u7528\u8655</li>\n\n      <li>\u7D93\u6FDF\u90E8\u667A\u6167\u8CA1\u7522\u5C40\u300C\u667A\u6167\u8CA1\u7522\u6B0A\u670D\u52D9\u5718\u300D</li>\n\n      <p><b>\u5C08\u9577</b></p>\n      <li>\u667A\u6167\u8CA1\u7522\u6B0A\u3001\u52DE\u8CC7\u722D\u8B70\u3001\u91D1\u878D\u79D1\u6280\u6CD5\u5F8B\u3001\u4E00\u822C\u6C11\u4E8B/\u5211\u4E8B/\u884C\u653F\u8A34\u8A1F\u4EE3\u7406</li>\n      </ul>"
            },
            {
                title: '宮少朋  <small>律師</small>',
                info: "<p><b>\u8B49\u7167/\u7D93\u6B77</b></p>\n      <ul style=\"list-style-type:disc;\">\n      <li>\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u570B\u5F8B\u5E2B\u8B49\u66F8</li>\n\n      <li>\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u570B\u6CD5\u5F8B\u57F7\u696D\u8CC7\u683C</li>\n\n      <li>\u4E0A\u4E0A\u6D77\u798F\u4E00\u5F8B\u5E2B\u4E8B\u52D9\u6240 \u9AD8\u7D1A\u5408\u5925\u4EBA\u3001\u4E3B\u4EFB</li>\n\n      <li>\u4E0A\u6D77\u6CD5\u5B78\u6703\u6D77\u5546\u6CD5\u7814\u7A76\u6703 \u7406\u4E8B</li>\n\n      <p><b>\u69AE\u8B7D</b></p>\n\n      <li>2018\u5E74\u4E0A\u6D77\u5E02\u666E\u9640\u5340\u5341\u5927\u512A\u79C0\u9752\u5E74\u5F8B\u5E2B\n      \u6210\u529F\u4E3B\u8FA6\u6578\u767E\u8D77\u7D93\u6FDF\u7CFE\u7D1B\u3001\u4FE1\u7528\u7BA1\u7406\u6CD5\u5F8B\u670D\u52D9\u6848\u4EF6\uFF0C\u670D\u52D9\u904E\u7684\u5BA2\u6236\u5305\u62EC\uFF1A\u79D1\u6CD5\u65AF\u3001\u5B89\u5353\u3001\u91D1\u6C99\u6C5F\u5275\u6295\u3001\u4E2D\u570B\u5E73\u5B89\u3001\u897F\u9580\u5B50\u3001\u85CD\u683C\u8CFD\u559C\u5229\u5F97\u3001\u9ED8\u514B\u4E2D\u570B\u3001\u683C\u862D\u5BCC\u6C34\u6CF5\u3001\u611B\u666E\u79D1\u65AF\u7167\u660E\u3001\u4E2D\u9060\u4F50\u6566\u3001\u6D77\u8679\u8001\u4EBA\u3001\u91D1\u525B\u5316\u5DE5\u3001PPG\u5857\u6599\u3001\u838A\u4FE1\u842C\u8C50\u3001\u5317\u4EAC\u661F\u548C\u773E\u5DE5\u3001\u958B\u5229\u7A7A\u8ABF\u3001\u6A5F\u68B0\u5DE5\u696D\u51FA\u7248\u793E\u3001\u6771\u829D\u7167\u660E\u3001\u5317\u4EAC\u79D1\u83EF\u9EA5\u592A\u4FDD\u3001\u8C9D\u5361\u723E\u7279\u9EA5\u514B\u65AF\u7279\u3001\u8056\u6208\u6591\u3001\u4E0A\u6D77\u7CBE\u6CF0\u7B49</li>\n\n      <p><b>\u5C08\u9577</b></p>\n      <li>\u516C\u53F8\u6CD5\u5F8B\u696D\u52D9\u3001\u4F01\u696D\u4FE1\u7528\u7BA1\u7406\u3001\u6D77\u5546\u6CD5\u696D\u52D9</li></ul>"
            },
            {
                title: '黃敬堯  <small>顧問</small>',
                info: "<p><b>\u8B49\u7167/\u5B78\u6B77</b></p>\n      <ul style=\"list-style-type:disc;\">\n      <li>\u6FB3\u6D32\u963F\u5FB7\u96F7\u5FB7\u5927\u5B78\u6CD5\u5B78\u9662 \u5546\u6CD5\u78A9\u58EB</li>\n\n      <li>\u53F0\u7063\u5F70\u5316\u5E2B\u7BC4\u5927\u5B78\u7FFB\u8B6F\u7814\u7A76\u6240 \u53E3\u8B6F\u7D44</li>\n\n      <li>IAEE\u8A3B\u518A\u6703\u5C55\u7D93\u7406\u8B49\u7167</li>\n\n      <li>\u6FB3\u6D32NAATI\u5C08\u696D\u7D1A\u53E3\u8B6F\u8B49\u7167</li>\n\n      <p><b>\u7D93\u6B77</b></p>\n\n      <li>\u56DB\u5DDD\u5341\u516D\u52A0\u4E00\u6587\u5316\u7522\u696D\u767C\u5C55\u6709\u9650\u516C\u53F8 CEO</li>\n      <li>\u56DB\u5DDD\u8861\u529B\u5546\u52D9\u54A8\u8A62\u6709\u9650\u516C\u53F8\u5275\u59CB\u4EBA\u3001\u7E3D\u7D93\u7406</li>\n      <li>\u56DB\u5DDD\u8A9E\u8A00\u6A4B\u7FFB\u8B6F\u6709\u9650\u516C\u53F8\u6703\u8B70\u6703\u5C55\u90E8\u7E3D\u76E3</li>\n      <li>\u53F0\u7063\u6700\u9AD8\u884C\u653F\u6CD5\u9662 \u6CD5\u5B98\u52A9\u7406</li>\n\n      <p><b>\u69AE\u8B7D</b></p>\n      <li>\u6210\u90FD\u5E02\u5C0D\u5916\u6587\u5316\u4EA4\u6D41\u8207\u8CBF\u6613\u57F9\u8A13\u8B1B\u5E2B</li>\n      <li>\u5927\u9678\u897F\u5357\u6C11\u65CF\u5927\u5B78\u5C08\u696D\u5B78\u4F4D\u7814\u7A76\u751F\u8AB2\u7A0B\u5EFA\u8A2D\u5718\u968A\u8CA0\u8CAC\u4EBA\u3001\u6821\u5916\u5C0E\u5E2B</li>\n      <li>\u5927\u9678\u897F\u5357\u6C11\u65CF\u5927\u5B78\u78A9\u58EB\u5C08\u696D\u5B78\u4F4D\u6388\u6B0A\u9EDE\u7533\u5831\u7B54\u8FAF\u5C08\u5BB6</li>\n      <li>\u5927\u9678\u4E09\u5CFD\u5927\u5B78\u5916\u570B\u8A9E\u5B78\u9662\u7FFB\u8B6F\u78A9\u58EB\u517C\u8077\u5C0E\u5E2B</li>\n      <li>\u5927\u9678\u96FB\u5B50\u79D1\u6280\u5927\u5B78\u5916\u570B\u8A9E\u5B78\u9662MTI\u6821\u5916\u5C0E\u5E2B</li>\n      <li>\u56DB\u5DDD\u5927\u5B78\u5916\u570B\u8A9E\u5B78\u9662\u6821\u5916\u517C\u8077\u6559\u5E2B</li>\n      <li>\u53F0\u7063\u6559\u80B2\u90E8\u5B78\u6D77\u98DB\u63DA\u734E\u5B78\u91D1</li>\n      <p><b>\u5C08\u9577</b></p>\n      <li>\u5805\u5BE6\u7684\u5C08\u696D\u77E5\u8B58\u4F50\u4EE5\u5AFB\u719F\u7684\u7FFB\u8B6F\u6280\u80FD\uFF0C\u64C1\u670910\u5E74\u4EE5\u4E0A\u6703\u8B70\u53E3\u8B6F\u7D93\u9A57\uFF0C\u64C5\u9577\u8CA1\u7D93\u5546\u8CBF\u3001\u4EBA\u6587\u6CD5\u653F\u7B49\u9818\u57DF\u3002\u9577\u671F\u70BAUNESCO\u3001UNDP\u3001\u4F7F\uFF08\u9818\uFF09\u9928\u3001\u5404\u7D1A\u653F\u5E9C\u90E8\u9580\u5927\u578B\u570B\u969B\u6703\u8B70\u3001\u8AD6\u58C7\u3001\u7814\u8A0E\u6703\u53CA\u5546\u52D9\u6D3D\u8AC7\u7B49\u6D3B\u52D5\u7D44\u7E54\u3001\u7B56\u5283\u3001\u4E26\u5BE6\u65BD\u76F8\u95DC\u670D\u52D9</li></ul>"
            },
            {
                title: '黃正榮  <small>顧問</small>',
                info: "<p><b>\u8B49\u7167/\u7D93\u6B77</b></p>\n      <ul style=\"list-style-type:disc;\">\n      <li>\u53F0\u7063\u7D93\u6FDF\u90E8\u4E2D\u5C0F\u4F01\u696D\u69AE\u8B7D\u6307\u5C0E\u54E1</li>\n\n      <li>\u52A0\u62FF\u5927Seneca College\u71DF\u92B7\u7BA1\u7406</li>\n\n      <li>\u653F\u5E9C\u9867\u554F\u5168\u80774\u5E74</li>\n\n      <li>\u653F\u5E9C\u9867\u554F\u517C\u80772\u5E74</li>\n      <li>\u53F0\u7063\u8207\u5927\u9678\u88FD\u9020\u696D\u9032\u51FA\u53E3\u7D93\u9A576\u5E74</li>\n      <li>\u8CC7\u8A0A\u7CFB\u7D71\u7BA1\u7406\u7D93\u9A5723\u5E74</li>\n      <li>\u5A92\u9AD4\u7D93\u9A5714\u5E74</li>\n      <li>\u570B\u969B\u7D93\u7D00\u4EBA6\u5E74</li>\n      <li>\u6B50\u7F8E\u7D93\u9A5727\u5E74</li>\n      <li>\u6C11\u9593\u6A5F\u69CB\u7D44\u7E54\u7D93\u9A5718\u5E74</li>\n      <li>\u8F14\u5C0E\u8FD1\u767E\u5BB6\u5354\u6703\u516C\u6703(\u53F0\u7063\u53CA\u570B\u969B)</li>\n      <li>\u52A0\u62FF\u5927\u591A\u502B\u591A\u975E\u71DF\u5229\u6A5F\u69CB</li>\n\n      <p><b>\u69AE\u8B7D</b></p>\n      <li>\u53F0\u7063\u653F\u5E9C\u9812\u767C\u5927\u529F\u4EE4\u53CA\u5C0F\u529F\u4EE4(\u53F0\u7063\u5C08\u6848\u3001\u5E02\u653F\u63A8\u52D5\u3001\u5340\u57DF\u6574\u5408)</li>\n\n      <p><b>\u5C08\u9577</b></p>\n      <li>\u5168\u65B9\u4F4D\u7D93\u71DF\u7BA1\u7406\u3001\u8DE8\u7522\u3001\u5B98\u3001\u5B78\u3001\u6C11\u6574\u5408\u3001\u570B\u969B\u82F1\u8A9E\u8AC7\u5224\u3001\u5354\u5546\u6703\u8B70\u3001\u5546\u696D\u6D3B\u52D5\u3001\u7CBE\u901A\u82F1\u8A9E\u3001\u4E2D\u6587\u3001\u5EE3\u6771\u8A71\u3001\u95A9\u5357\u8A9E</li></ul>"
            },
        ];
        this.helpmateList = [
            {
                title: '上海福一律師事務所',
                info: "<ul style=\"list-style-type:disc;\">\n      <li>\u4E3B\u8981\u696D\u52D9\u7BC4\u570D\u6D89\u53CA\u722D\u7AEF\u89E3\u6C7A\u3001\u516C\u53F8\u696D\u52D9\u3001\u5546\u696D\u5408\u540C\u5BE9\u6838\u3001\u623F\u5730\u7522\u3001\u667A\u6167\u8CA1\u7522\u6B0A\u3001\u8B49\u5238\u8207\u8CC7\u672C\u5E02\u5834\u3001\u5883\u5916\u6295\u8CC7\u3002\u50B3\u7D71\u696D\u52D9\u53CA\u6838\u5FC3\u512A\u52E2\u70BA\u722D\u7AEF\u89E3\u6C7A\uFF0C\u64C1\u6709\u9AD8\u7D20\u8CEA\u4E14\u7D93\u9A57\u8C50\u5BCC\u7684\u5C08\u696D\u8A34\u8A1F\u5F8B\u5E2B\u5718\u968A\u3002</li>\n      </ul>"
            },
        ];
        this.tabIndex = 0;
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.prototype.changeTab = function (value) {
        this.tabIndex = value;
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/index/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/pages/index/content/content.component.scss")]
        })
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/pages/index/footer/footer.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/index/footer/footer.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-layout {\n  color: #fff;\n  background-color: #262626;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.footer-layout .content {\n  padding: 80px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.footer-layout .content .container {\n  width: 100%;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .footer-layout .content .container {\n    max-width: 940px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .footer-layout .content .container {\n    max-width: 708px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .footer-layout .content .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    max-width: 700px !important;\n    padding-left: 33px !important;\n    padding-right: 33px !important;\n  }\n}\n.footer-layout .content .container .block {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  margin: 0 40px;\n}\n.footer-layout .content .container .block .title {\n  font-size: 18px;\n  line-height: 26px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  color: #cca353;\n}\n.footer-layout .content .container .block .address {\n  margin: 15px 0;\n}\n.footer-layout .content .container .block .info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.footer-layout .content .container .block img {\n  width: 100%;\n  padding: 15px;\n}\n@media only screen and (max-width: 768px) {\n  .footer-layout .content .container .block img {\n    width: 200px;\n  }\n}\n.footer-layout .copy {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.footer-layout .copy .container {\n  max-width: 1220px;\n  width: 100%;\n  margin-bottom: 20px;\n  padding-top: 30px;\n  min-height: 33px;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .footer-layout .copy .container {\n    max-width: 940px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .footer-layout .copy .container {\n    max-width: 708px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .footer-layout .copy .container {\n    padding-left: 33px !important;\n    padding-right: 33px !important;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNpZmVyL0Rlc2t0b3AvTGlnaHRVcC/lsIjmoYgvRnhsQ29uc3VsdGluZy9zcmMvYXBwL3BhZ2VzL2luZGV4L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luZGV4L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0FDQ047QURDTTtFQUhGO0lBSUksZ0JBQUE7RUNFTjtBQUNGO0FEQU07RUFQRjtJQVFJLGdCQUFBO0VDR047QUFDRjtBRERNO0VBWEY7SUFZSSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSwyQkFBQTtJQUNBLDZCQUFBO0lBQ0EsOEJBQUE7RUNJTjtBQUNGO0FERk07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsY0FBQTtBQ0lSO0FERFE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0dWO0FEQVE7RUFDRSxjQUFBO0FDRVY7QURDUTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NWO0FERVE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0FWO0FERVU7RUFKRjtJQUtJLFlBQUE7RUNDVjtBQUNGO0FES0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0hKO0FES0k7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNITjtBREtNO0VBUEY7SUFRSSxnQkFBQTtFQ0ZOO0FBQ0Y7QURJTTtFQVhGO0lBWUksZ0JBQUE7RUNETjtBQUNGO0FER007RUFmRjtJQWdCSSw2QkFBQTtJQUNBLDhCQUFBO0lBQ0Esa0JBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5kZXgvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItbGF5b3V0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogODBweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzOXB4KSBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5NDBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIG1heC13aWR0aDogNzA4cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMzcHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzNweCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuYmxvY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgbWFyZ2luOiAwIDQwcHg7XG5cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgICAgICAgY29sb3I6ICNjY2EzNTM7XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkcmVzcyB7XG4gICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb3B5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogMTIyMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAzM3B4O1xuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzlweCkgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgICAgIG1heC13aWR0aDogOTQwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXgtd2lkdGg6IDcwOHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzNweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5mb290ZXItbGF5b3V0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb290ZXItbGF5b3V0IC5jb250ZW50IHtcbiAgcGFkZGluZzogODBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb290ZXItbGF5b3V0IC5jb250ZW50IC5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzOXB4KSBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLmZvb3Rlci1sYXlvdXQgLmNvbnRlbnQgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5NDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb290ZXItbGF5b3V0IC5jb250ZW50IC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzA4cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3Rlci1sYXlvdXQgLmNvbnRlbnQgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtd2lkdGg6IDcwMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzM3B4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMzNweCAhaW1wb3J0YW50O1xuICB9XG59XG4uZm9vdGVyLWxheW91dCAuY29udGVudCAuY29udGFpbmVyIC5ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDAgNDBweDtcbn1cbi5mb290ZXItbGF5b3V0IC5jb250ZW50IC5jb250YWluZXIgLmJsb2NrIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjY2NhMzUzO1xufVxuLmZvb3Rlci1sYXlvdXQgLmNvbnRlbnQgLmNvbnRhaW5lciAuYmxvY2sgLmFkZHJlc3Mge1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5mb290ZXItbGF5b3V0IC5jb250ZW50IC5jb250YWluZXIgLmJsb2NrIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb290ZXItbGF5b3V0IC5jb250ZW50IC5jb250YWluZXIgLmJsb2NrIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyLWxheW91dCAuY29udGVudCAuY29udGFpbmVyIC5ibG9jayBpbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuLmZvb3Rlci1sYXlvdXQgLmNvcHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb290ZXItbGF5b3V0IC5jb3B5IC5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBtaW4taGVpZ2h0OiAzM3B4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAuZm9vdGVyLWxheW91dCAuY29weSAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDk0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3Rlci1sYXlvdXQgLmNvcHkgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA3MDhweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyLWxheW91dCAuY29weSAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMzcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzM3B4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/index/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/index/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/index/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/index/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/index/header/header.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/index/header/header.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-layout {\n  color: #fff;\n  background-color: #262626;\n  padding: 0 15px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: calc(100% - 30px);\n  height: 100px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 100;\n}\n@media only screen and (max-width: 680px) {\n  .header-layout {\n    height: 60px;\n  }\n  .header-layout img {\n    width: 50%;\n  }\n}\n.header-layout .header-logo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header-layout .header-logo img {\n  padding: 15px 0;\n  cursor: pointer;\n}\n.header-layout .header-menu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header-layout .header-menu li {\n  padding: 15px 20px;\n  line-height: 60px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n.header-layout .header-menu li:hover {\n  color: #e5bd66;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNpZmVyL0Rlc2t0b3AvTGlnaHRVcC/lsIjmoYgvRnhsQ29uc3VsdGluZy9zcmMvYXBwL3BhZ2VzL2luZGV4L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luZGV4L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBZEY7SUFlSSxZQUFBO0VDRUY7RURERTtJQUNFLFVBQUE7RUNHSjtBQUNGO0FEQUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0VKO0FEQUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0VOO0FERUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUNBTjtBREVNO0VBQ0UsY0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5kZXgvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbGF5b3V0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDo1MCU7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlci1sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAuaGVhZGVyLW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGxpIHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2U1YmQ2NjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5oZWFkZXItbGF5b3V0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcbiAgLmhlYWRlci1sYXlvdXQge1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuICAuaGVhZGVyLWxheW91dCBpbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbi5oZWFkZXItbGF5b3V0IC5oZWFkZXItbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXItbGF5b3V0IC5oZWFkZXItbG9nbyBpbWcge1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFkZXItbGF5b3V0IC5oZWFkZXItbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlci1sYXlvdXQgLmhlYWRlci1tZW51IGxpIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uaGVhZGVyLWxheW91dCAuaGVhZGVyLW1lbnUgbGk6aG92ZXIge1xuICBjb2xvcjogI2U1YmQ2Njtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/index/header/header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/index/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.menu = [
            { name: '首頁' },
            { name: '關於我們' },
            { name: '最新消息' },
            { name: '獲獎紀錄' },
            { name: '專業領域' },
            { name: '專業律師群' },
            { name: '人事募集' },
            { name: '理慈據點' },
            { name: '社群' },
            { name: '繁體中文' }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/index/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/index/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/index/index-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/index/index-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: IndexRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRoutingModule", function() { return IndexRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.component */ "./src/app/pages/index/index.component.ts");




var routes = [
    { path: '', pathMatch: 'full', component: _index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] }
];
var IndexRoutingModule = /** @class */ (function () {
    function IndexRoutingModule() {
    }
    IndexRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], IndexRoutingModule);
    return IndexRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/index/index.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/index/index.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-layout {\n  margin-top: 100px;\n  background-image: url(\"https://jackiechu.github.io/fxlweb/assets/images/IMG_2406.jpg\");\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-attachment: fixed;\n  background-size: cover;\n}\n@media only screen and (max-width: 680px) {\n  .content-layout {\n    margin-top: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNpZmVyL0Rlc2t0b3AvTGlnaHRVcC/lsIjmoYgvRnhsQ29uc3VsdGluZy9zcmMvYXBwL3BhZ2VzL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esc0ZBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQUU7RUFQRjtJQVFJLGdCQUFBO0VDR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtbGF5b3V0IHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vamFja2llY2h1LmdpdGh1Yi5pby9meGx3ZWIvYXNzZXRzL2ltYWdlcy9JTUdfMjQwNi5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG59XG4iLCIuY29udGVudC1sYXlvdXQge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9qYWNraWVjaHUuZ2l0aHViLmlvL2Z4bHdlYi9hc3NldHMvaW1hZ2VzL0lNR18yNDA2LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcbiAgLmNvbnRlbnQtbGF5b3V0IHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/pages/index/index.component.scss")]
        })
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/pages/index/index.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/index/index.module.ts ***!
  \*********************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-animate-on-scroll */ "./node_modules/ng2-animate-on-scroll/dist/index.js");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slider */ "./node_modules/ngx-slider/ngx-slider.es5.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/pages/index/banner/banner.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.component */ "./src/app/pages/index/content/content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/pages/index/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/pages/index/header/header.component.ts");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-routing.module */ "./src/app/pages/index/index-routing.module.ts");











var IndexModule = /** @class */ (function () {
    function IndexModule() {
    }
    IndexModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _index_routing_module__WEBPACK_IMPORTED_MODULE_10__["IndexRoutingModule"],
                ngx_slider__WEBPACK_IMPORTED_MODULE_4__["SliderModule"],
                ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__["AnimateOnScrollModule"],
            ],
        })
    ], IndexModule);
    return IndexModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-index-index-module-es5.js.map