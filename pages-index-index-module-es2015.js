(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index-module"],{

/***/ "./node_modules/ngx-slider/ngx-slider.js":
/*!***********************************************!*\
  !*** ./node_modules/ngx-slider/ngx-slider.js ***!
  \***********************************************/
/*! exports provided: Slider, SliderModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderModule", function() { return SliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



class SliderComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.currentItemIndex = 0;
        this.activeTitle = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sliderItems = this.init.items;
        this.config = this.init.config;
        this.setTitle();
        this.resize();
        this.setSliderStyle();
    }
    /**
     * @return {?}
     */
    onResize() {
        this.resize();
    }
    /**
     * @return {?}
     */
    resize() {
        this.componentWidth = this.el.nativeElement.parentElement.clientWidth - (this.getPreviewWidth() * this.getNumberOfPreview());
        this.setSlideStyle();
    }
    /**
     * @return {?}
     */
    setSliderStyle() {
        const /** @type {?} */ width = `${this.getWrapperWidth()}px`;
        const /** @type {?} */ left = this.getWrapperLeft() ? `-${this.getWrapperLeft() - this.getPreviewWidth()}px` : 0;
        this.sliderStyle = {
            width: width,
            left: left,
            transition: `left ${this.config.transitionDuration}s`
        };
    }
    /**
     * @return {?}
     */
    setSlideStyle() {
        this.slideStyle = {
            width: `${this.componentWidth}px`
        };
    }
    /**
     * @return {?}
     */
    setTitle() {
        this.activeTitle =
            this.sliderItems.length ? this.sliderItems[this.currentItemIndex].title : '';
    }
    /**
     * @return {?}
     */
    getNumberOfPreview() {
        return this.config.showPreview ? this.config.numberOfPreview : 0;
    }
    /**
     * @return {?}
     */
    getPreviewWidth() {
        return this.config.showPreview ? this.config.previewWidth : 0;
    }
    /**
     * @return {?}
     */
    getWrapperWidth() {
        return this.sliderItems.length ? this.sliderItems.length * this.componentWidth : this.componentWidth;
    }
    /**
     * @return {?}
     */
    getWrapperLeft() {
        return this.currentItemIndex * this.componentWidth;
    }
    /**
     * @param {?} action
     * @return {?}
     */
    goTo(action) {
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
    }
}
SliderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-slider',
                template: `
    <h4 *ngIf="config.showTitle" class="slide-title" [innerHTML]="activeTitle"></h4>
    <div class="slider-container">
      <div class="slider-row">
        <div [ngStyle]="sliderStyle" class="slide-wrapper">
          <div *ngFor="let slide of sliderItems; let i=index;" 
               [class.active]="i === currentItemIndex"
               [ngStyle]="slideStyle" 
               class="slide-item">
               <div [ngStyle]="{'background-image': 'url(' + slide.src + ')'}" class="slide"></div>
          </div>
        </div>
      </div>
      <ng-container *ngIf="sliderItems.length > 1 && config.showNavigator">
          <button (click)="goTo('next')" class="slider-nav next">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button (click)="goTo('previous')" class="slider-nav previous">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
      </ng-container>
      <div *ngIf="sliderItems.length > 1 && config.showDots" class="slider-dots">
        <ul>
          <li *ngFor="let slide of sliderItems; let i=index;" [class.active]="i === currentItemIndex">
            <button (click)="goTo(i)" class="dots">
              <i class="fa fa-circle" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  `,
                styles: [`
    .slider-container {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .slider-row {
        width: 100%;
        height: 100%;
    }
    .slide-wrapper {
        position: absolute;
        height: 100%;
    }
    .slide-wrapper .active {
        opacity: 1;
        -webkit-transition: opacity 1s, -webkit-transform 1s;
        transition: opacity 1s, -webkit-transform 1s;
        transition: opacity 1s, transform 1s;
        transition: opacity 1s, transform 1s, -webkit-transform 1s;
    }
    .slide-item {
        display: inline-block;
        height: 100%;
        opacity: 0.5;
        -webkit-transition: opacity 1s, -webkit-transform 1s;
        transition: opacity 1s, -webkit-transform 1s;
        transition: opacity 1s, transform 1s;
        transition: opacity 1s, transform 1s, -webkit-transform 1s;
    }
    .slide {
        height: 100%;
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center;
        margin: 0 5px;
    }
    .slide-title {
        font-size: 1.5rem;
        padding: 10px;
    }
    .slider-nav {
        background-color: rgba(0,0,0,0.2);
        position: absolute;
        top: 35%;
        border: none;
        -webkit-box-shadow: none;
                box-shadow: none;
        color: white;
        font-size: 2rem;
        padding: 1.5rem;
    }

    .next {
        right: 0;
    }

    .previous {
        left: 0;
    }

    .slider-dots {
        position: absolute;
        bottom: 3%;
        width: 100%;
        text-align: center;
    }

    .slider-dots ul {
        margin: 0;
        padding: 0;
    }

    .slider-dots ul li {
        display: inline-block;
        list-style: none;
        margin: 0 3px;
    } 

    .slider-dots ul li.active i {
        color: #00C24F;
    }

    .dots {
        padding: 0;
        border: 0;
        -webkit-box-shadow: none;
                box-shadow: none;
        background: none;
    }
  `]
            },] },
];
/**
 * @nocollapse
 */
SliderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
];
SliderComponent.propDecorators = {
    'init': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onResize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event.target'],] },],
};

class SliderModule {
}
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
SliderModule.ctorParameters = () => [];

class SliderConfig {
    constructor() {
        this.showDots = true;
        this.showNavigator = true;
        this.showTitle = true;
        this.loop = true;
        this.showPreview = true;
        this.numberOfPreview = 2;
        this.previewWidth = 50;
        this.transitionDuration = 1;
    }
}

class Slider {
    constructor() {
        this.items = [];
        this.config = new SliderConfig();
    }
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-slider.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/index/banner/banner.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/index/banner/banner.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\r\n  <ngx-slider [init]=\"slider\"></ngx-slider>\r\n  <div class=\"banner-info\" [ngClass]=\"{ close: infoClose }\">\r\n    <span class=\"title\">{{ slideItems[bannerIndex].title }}</span>\r\n    <span class=\"cont\">\r\n      <span *ngFor=\"let item of slideItems[bannerIndex].info\">{{ item }}</span>\r\n    </span>\r\n    <button>了解更多</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/index/content/content.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/index/content/content.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-layout\">\r\n  <div class=\"record-layout\">\r\n    <div class=\"container\">\r\n      <h1 class=\"animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\">關於我們</h1>\r\n      <div class=\"record-block\">\r\n        <section class=\"record animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\" *ngFor=\"let item of recordList\" [@routerTransition]>\r\n          <span class=\"info\" [innerHTML]=\"item.info\"></span>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--業務範圍-->\r\n  <div class=\"practices-layout\">\r\n    <div class=\"practices-block\">\r\n      <h1 class=\"animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\">業務範圍</h1>\r\n      <span class=\"info animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\">。</span>\r\n      <div class=\"cont-layout\">\r\n        <section class=\"block animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\" *ngFor=\"let item of businessList\">\r\n          <img src=\"{{item.icon}}\">\r\n          <div class=\"content\">\r\n            <span class=\"title\"> {{item.title}} </span>\r\n            <span class=\"cont\" style=\"color: #4c4c4c\"> {{item.info}} </span>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--顧問陣容-->\r\n  <div class=\"news-layout\">\r\n    <div class=\"container\">\r\n      <h1 class=\"animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\">顧問陣容</h1>\r\n      <ul class=\"news-tabs\">\r\n        <li [ngClass]=\"{ active: tabIndex === 0 }\" (click)=\"changeTab(0)\">陣容履歷</li>\r\n        <li [ngClass]=\"{ active: tabIndex === 1 }\" (click)=\"changeTab(1)\">法律新知</li>\r\n      </ul>\r\n      <div class=\"activity-layout\" *ngIf=\"tabIndex === 1\">\r\n        <div class=\"activity-block\">\r\n          <span class=\"title\">授獎榮耀</span>\r\n          <span class=\"info\">蔡玉玲律師于 2019 年 7 月獲 Advisory Excellence 頒發 2019 FinTech Law Expert in Taiwan 獎項。</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"role-layout\" *ngIf=\"tabIndex === 0\">\r\n        <section class=\"role-block\" *ngFor=\"let item of roleList\">\r\n          <div class=\"cont\">\r\n            <span class=\"title\" [innerHTML]=\"item.title\"></span>\r\n            <span class=\"info\" [innerHTML]=\"item.info\"></span>\r\n          </div>\r\n        </section>\r\n      </div>\r\n      <div class=\"buttons animatedFadeInUp\" animateOnScroll animationName=\"animated fadeInUp\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/index/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/index/footer/footer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-layout\">\r\n  <div class=\"content\">\r\n    <div class=\"container\">\r\n      <section class=\"block\">\r\n        <span class=\"info\">\r\n          <span>Mobile: 886.968-583-768</span>\r\n          <span>Tax ID: 509.526.70</span>\r\n          <span>E-mail: nadinehcheng@gmail.com</span>\r\n        </span>\r\n      </section>\r\n    </div>\r\n  </div>\r\n  <div class=\"copy\">\r\n    <div class=\"container\">©2019 FXL INTERNATIONAL CONSUTING. 福軒萊國際顧問管理有限公司</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/index/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/index/header/header.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-layout\">\r\n  <div class=\"header-logo\">\r\n    <img src=\"assets/images/logo.png\" width=\"237px\">\r\n  </div>\r\n  <!-- <ul class=\"header-menu\">\r\n    <li *ngFor=\"let item of menu\">{{ item.name }}</li>\r\n  </ul> -->\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/index/index.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/index/index.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"content-layout\">\r\n  <app-banner></app-banner>\r\n  <app-content></app-content>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/index/banner/banner.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/index/banner/banner.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner-layout {\n  background-image: url(\"https://JackieChu.github.io/fxlweb/assets/images/banner.jpg\");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 592px;\n}\n\n.banner {\n  height: 592px;\n  position: relative;\n}\n\n.banner .banner-info {\n  min-height: 432px;\n  min-width: 286px;\n  max-height: 150px;\n  max-width: 286px;\n  background-color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  padding: 80px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n\n.banner .banner-info.close {\n  left: -446px;\n}\n\n@media only screen and (max-width: 446px) {\n  .banner .banner-info {\n    background-color: rgba(255, 255, 255, 0.45);\n    min-width: calc(50% - 400px);\n    width: 100px;\n  }\n}\n\n.banner .banner-info .title {\n  font-size: 13px;\n  line-height: 20px;\n  font-weight: 400;\n  color: #132541;\n}\n\n.banner .banner-info .cont {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-size: 39px;\n  line-height: 49px;\n  font-weight: 700;\n  color: #132541;\n}\n\n.banner .banner-info button {\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: 700;\n  color: white;\n  background-color: #e5bd66;\n  border: 0;\n  padding: 9px 25px;\n  cursor: pointer;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n\n.banner .banner-info button:hover {\n  background-color: #e5ab2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvYmFubmVyL0M6XFxMaWdodFVwXFxmeGx3ZWIvc3JjXFxhcHBcXHBhZ2VzXFxpbmRleFxcYmFubmVyXFxiYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luZGV4L2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvRkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBQ0NKOztBRENJO0VBQ0UsWUFBQTtBQ0NOOztBREVJO0VBcEJGO0lBcUJJLDJDQUFBO0lBQ0EsNEJBQUE7SUFDQSxZQUFBO0VDQ0o7QUFDRjs7QURDSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NOOztBREVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQU47O0FER0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FDRE47O0FER007RUFDRSx5QkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5kZXgvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXItbGF5b3V0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vSmFja2llQ2h1LmdpdGh1Yi5pby9meGx3ZWIvYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiA1OTJweDtcclxufVxyXG5cclxuLmJhbm5lciB7XHJcbiAgaGVpZ2h0OiA1OTJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5iYW5uZXItaW5mbyB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MzJweDtcclxuICAgIG1pbi13aWR0aDogMjg2cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG1heC13aWR0aDogMjg2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuY2xvc2Uge1xyXG4gICAgICBsZWZ0OiAtNDQ2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDZweCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgICBtaW4td2lkdGg6IGNhbGMoNTAlIC0gNDAwcHgpO1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgY29sb3I6IHJnYigxOSwgMzcsIDY1KTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZvbnQtc2l6ZTogMzlweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQ5cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTksIDM3LCA2NSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAxODksIDEwMik7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgcGFkZGluZzogOXB4IDI1cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDE3MSwgNDUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5iYW5uZXItbGF5b3V0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9KYWNraWVDaHUuZ2l0aHViLmlvL2Z4bHdlYi9hc3NldHMvaW1hZ2VzL2Jhbm5lci5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTkycHg7XG59XG5cbi5iYW5uZXIge1xuICBoZWlnaHQ6IDU5MnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmFubmVyIC5iYW5uZXItaW5mbyB7XG4gIG1pbi1oZWlnaHQ6IDQzMnB4O1xuICBtaW4td2lkdGg6IDI4NnB4O1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgbWF4LXdpZHRoOiAyODZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cbi5iYW5uZXIgLmJhbm5lci1pbmZvLmNsb3NlIHtcbiAgbGVmdDogLTQ0NnB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDZweCkge1xuICAuYmFubmVyIC5iYW5uZXItaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbiAgICBtaW4td2lkdGg6IGNhbGMoNTAlIC0gNDAwcHgpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxufVxuLmJhbm5lciAuYmFubmVyLWluZm8gLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMxMzI1NDE7XG59XG4uYmFubmVyIC5iYW5uZXItaW5mbyAuY29udCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMzlweDtcbiAgbGluZS1oZWlnaHQ6IDQ5cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMTMyNTQxO1xufVxuLmJhbm5lciAuYmFubmVyLWluZm8gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTViZDY2O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDlweCAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uYmFubmVyIC5iYW5uZXItaW5mbyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVhYjJkO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-slider */ "./node_modules/ngx-slider/ngx-slider.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let BannerComponent = class BannerComponent {
    constructor() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.slider = new ngx_slider__WEBPACK_IMPORTED_MODULE_2__["Slider"]();
        this.slideItems = [
            {
                src: 'assets/images/banner2.jpg',
                title: 'FXL INTERNATIONAL CONSULTING',
                info: ['您可信賴的', '守護者'],
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
    ngOnInit() {
        this.slider.items = this.slideItems;
    }
    ngAfterViewInit() {
        this.dots = [...document.getElementsByClassName('dots')];
        this.bindDotsEvent();
        this.autoPlay();
    }
    bindDotsEvent() {
        this.dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                this.infoClose = true;
                setTimeout(() => {
                    this.bannerIndex = i;
                    this.infoClose = false;
                }, 30);
            });
        });
    }
    autoPlay() {
        const ngxSlider = document.getElementsByTagName('ngx-slider')[0];
        const enter$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(ngxSlider, 'mouseenter');
        const leave$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(ngxSlider, 'mouseleave');
        leave$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            if (++this.bannerIndex === this.slideItems.length) {
                this.bannerIndex = 0;
            }
            this.dots[this.bannerIndex].click();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(enter$))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner',
        template: __webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/index/banner/banner.component.html"),
        styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/pages/index/banner/banner.component.scss")]
    })
], BannerComponent);



/***/ }),

/***/ "./src/app/pages/index/content/content.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/index/content/content.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-layout .record-layout {\n  background-color: #132540;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 60px;\n}\n.content-layout .record-layout .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .content-layout .record-layout .container {\n    max-width: 940px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .content-layout .record-layout .container {\n    max-width: 708px;\n  }\n}\n.content-layout .record-layout .container h1 {\n  margin: 0;\n  color: #ffffff;\n  font-size: 50px;\n  line-height: 55px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  margin-bottom: 65px;\n}\n.content-layout .record-layout .container .record-block {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 767px) {\n  .content-layout .record-layout .container .record-block {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n.content-layout .record-layout .container .record-block .record {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 40px;\n}\n@media only screen and (max-width: 767px) {\n  .content-layout .record-layout .container .record-block .record {\n    width: 100%;\n  }\n}\n.content-layout .record-layout .container .record-block .record img {\n  max-width: 100%;\n  padding-top: 5px;\n  margin-bottom: 25px;\n}\n.content-layout .record-layout .container .record-block .record .info {\n  color: #fff;\n  text-align: left;\n  font-size: 16px;\n  line-height: 54px;\n  font-weight: 400;\n  letter-spacing: 0px;\n}\n.content-layout .record-layout .container button {\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: 700;\n  color: white;\n  background-color: #e5bd66;\n  border: 0;\n  padding: 11px 20px;\n  cursor: pointer;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n.content-layout .record-layout .container button:hover {\n  background-color: #e5ab2d;\n}\n.content-layout .news-layout {\n  background-color: #f2f3f5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 60px;\n}\n.content-layout .news-layout .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .content-layout .news-layout .container {\n    max-width: 940px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .content-layout .news-layout .container {\n    max-width: 708px;\n  }\n}\n.content-layout .news-layout .container h1 {\n  margin: 0;\n  color: #132541;\n  font-size: 50px;\n  line-height: 55px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  margin-bottom: 65px;\n}\n.content-layout .news-layout .container .news-tabs {\n  width: 100%;\n  border-bottom: 1px solid #00000014;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.content-layout .news-layout .container .news-tabs li {\n  font-size: 16px;\n  font-weight: 400;\n  padding: 14px 30px !important;\n  cursor: pointer;\n}\n.content-layout .news-layout .container .news-tabs li.active {\n  color: #cca353;\n  border-bottom: 1px solid #cca353;\n}\n.content-layout .news-layout .container .activity-layout {\n  width: 100%;\n  height: 410px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.content-layout .news-layout .container .activity-layout .activity-block {\n  min-height: 278px;\n  min-width: 671px;\n  max-height: 278px;\n  max-width: 671px;\n  background-color: rgba(0, 0, 0, 0);\n  border-color: #cca353;\n  border-style: solid;\n  border-width: 2px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .content-layout .news-layout .container .activity-layout .activity-block {\n    min-height: 204px;\n    min-width: 494px;\n    max-height: 204px;\n    max-width: 494px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .content-layout .news-layout .container .activity-layout .activity-block {\n    min-height: 144px;\n    min-width: 347px;\n    max-height: 144px;\n    max-width: 347px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .content-layout .news-layout .container .activity-layout .activity-block {\n    min-height: 133px;\n    min-width: 323px;\n    max-height: 133px;\n    max-width: 323px;\n  }\n}\n.content-layout .news-layout .container .activity-layout .activity-block .title {\n  font-size: 31px;\n  line-height: 19px;\n  font-weight: 400;\n  color: #132541;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .content-layout .news-layout .container .activity-layout .activity-block .title {\n    font-size: 23px;\n    line-height: 14px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .content-layout .news-layout .container .activity-layout .activity-block .title {\n    font-size: 16px;\n    line-height: 10px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .content-layout .news-layout .container .activity-layout .activity-block .title {\n    font-size: 16px;\n    line-height: 9px;\n  }\n}\n.content-layout .news-layout .container .activity-layout .activity-block .info {\n  text-align: center;\n  min-width: 401px;\n  max-width: 401px;\n  font-size: 15px;\n  line-height: 21px;\n  font-weight: 400;\n  color: #cca353;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .content-layout .news-layout .container .activity-layout .activity-block .info {\n    min-width: 296px;\n    max-width: 296px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .content-layout .news-layout .container .activity-layout .activity-block .info {\n    min-width: 208px;\n    max-width: 208px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .content-layout .news-layout .container .activity-layout .activity-block .info {\n    min-width: 202px;\n    max-width: 202px;\n  }\n}\n.content-layout .news-layout .container .role-layout {\n  width: 100%;\n  padding: 15px 20px 20px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n@media only screen and (max-width: 768px) {\n  .content-layout .news-layout .container .role-layout {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n.content-layout .news-layout .container .role-layout .role-block {\n  background-color: #fff;\n  width: calc((100% / 4) - 40px);\n  margin: 10px 20px;\n}\n@media only screen and (max-width: 960px) {\n  .content-layout .news-layout .container .role-layout .role-block {\n    width: calc((100% / 3) - 40px);\n  }\n}\n@media only screen and (max-width: 768px) {\n  .content-layout .news-layout .container .role-layout .role-block {\n    width: 100%;\n    margin: 10px 0;\n  }\n}\n.content-layout .news-layout .container .role-layout .role-block .cont {\n  padding: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.content-layout .news-layout .container .role-layout .role-block .cont .title {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 24px;\n  margin-bottom: 15px;\n  text-decoration: underline;\n}\n.content-layout .news-layout .container .role-layout .role-block .cont .info {\n  color: #696969;\n}\n.content-layout .news-layout .container .role-layout .role-block .foot {\n  background: rgba(0, 0, 0, 0.02);\n  padding: 7px 15px;\n  overflow: hidden;\n  line-height: 30px;\n  color: #a8a8a8;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.content-layout .news-layout .container .role-layout .role-block .foot .foot-cont {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-left: 1px solid #00000014;\n  padding-left: 10px;\n}\n.content-layout .news-layout .container .role-layout .role-block .foot .foot-cont span {\n  cursor: pointer;\n  color: #cca353;\n}\n.content-layout .news-layout .container .role-layout .role-block .foot .foot-cont span:hover {\n  text-decoration: underline;\n}\n.content-layout .news-layout .container .buttons {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.content-layout .news-layout .container .buttons button {\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: 700;\n  border: 0;\n  padding: 11px 20px;\n  margin-bottom: 15px;\n  margin-right: 7px;\n  cursor: pointer;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n.content-layout .news-layout .container .buttons button.activity {\n  color: #060a13;\n  background-color: #dcdde0;\n}\n.content-layout .news-layout .container .buttons button.role {\n  color: white;\n  background-color: #e5bd66;\n}\n.content-layout .practices-layout {\n  padding-top: 120px;\n  padding-bottom: 120px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.content-layout .practices-layout .practices-block {\n  max-width: 1220px;\n  width: calc(100% - 80px);\n  padding: 60px 0 30px 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .content-layout .practices-layout .practices-block {\n    max-width: 940px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .content-layout .practices-layout .practices-block {\n    max-width: 708px;\n  }\n}\n.content-layout .practices-layout .practices-block h1 {\n  margin: 0;\n  color: #132541;\n  font-size: 50px;\n  line-height: 55px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  margin-bottom: 45px;\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .content-layout .practices-layout .practices-block h1 {\n    font-size: 43px;\n    line-height: 47px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .content-layout .practices-layout .practices-block h1 {\n    font-size: 24px !important;\n  }\n}\n.content-layout .practices-layout .practices-block .info {\n  text-align: center;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  margin-bottom: 15px;\n  color: #4c4c4c;\n  width: 58%;\n}\n@media only screen and (max-width: 768px) {\n  .content-layout .practices-layout .practices-block .info {\n    width: 90%;\n  }\n}\n.content-layout .practices-layout .practices-block .cont-layout {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 768px) {\n  .content-layout .practices-layout .practices-block .cont-layout {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n.content-layout .practices-layout .practices-block .cont-layout .block {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: flex-start;\n  width: calc((100% / 3) - 80px);\n  padding: 40px;\n}\n@media only screen and (max-width: 1239px) {\n  .content-layout .practices-layout .practices-block .cont-layout .block {\n    width: calc((100% / 3) - 20px);\n    padding: 10px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .content-layout .practices-layout .practices-block .cont-layout .block {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 450px) {\n  .content-layout .practices-layout .practices-block .cont-layout .block {\n    width: calc(100% - 20px);\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n  }\n}\n.content-layout .practices-layout .practices-block .cont-layout .block .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 0 20px;\n}\n.content-layout .practices-layout .practices-block .cont-layout .block .content .title {\n  font-size: 22px;\n  line-height: 26px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvY29udGVudC9DOlxcTGlnaHRVcFxcZnhsd2ViL3NyY1xcYXBwXFxwYWdlc1xcaW5kZXhcXGNvbnRlbnRcXGNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luZGV4L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0FDREo7QURHSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRE47QURHTTtFQU5GO0lBT0ksZ0JBQUE7RUNBTjtBQUNGO0FERU07RUFWRjtJQVdJLGdCQUFBO0VDQ047QUFDRjtBRENNO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREVNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ0FSO0FERVE7RUFKRjtJQUtJLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQ0NSO0FBQ0Y7QURDUTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDVjtBRENVO0VBUEY7SUFRSSxXQUFBO0VDRVY7QUFDRjtBREFVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFWjtBRENVO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7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ZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1sYXlvdXQge1xyXG5cclxuICAucmVjb3JkLWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNTQwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDYwcHg7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIG1heC13aWR0aDogOTQwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1heC13aWR0aDogNzA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2NXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVjb3JkLWJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZWNvcmQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1NHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMTg5LCAxMDIpO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4IDIwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAxNzEsIDQ1KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uZXdzLWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDYwcHg7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIG1heC13aWR0aDogOTQwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1heC13aWR0aDogNzA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICMxMzI1NDE7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2NXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmV3cy10YWJzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDE0O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDE0cHggMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNjY2EzNTM7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NhMzUzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGl2aXR5LWxheW91dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5hY3Rpdml0eS1ibG9jayB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyNzhweDtcclxuICAgICAgICAgIG1pbi13aWR0aDogNjcxcHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyNzhweDtcclxuICAgICAgICAgIG1heC13aWR0aDogNjcxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2NhMzUzO1xyXG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDRweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA0OTRweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjA0cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDk0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE0NHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDM0N3B4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNDRweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzNDdweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEzM3B4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMyM3B4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMzNweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMjNweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMxcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE5LCAzNywgNjUpO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA0MDFweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDFweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgY29sb3I6ICNjY2EzNTM7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzlweCkgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyOTZweDtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI5NnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwOHB4O1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwMnB4O1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yb2xlLWxheW91dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm9sZS1ibG9jayB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLyA0KSAtIDQwcHgpO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAvIDMpIC0gNDBweCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2OTY5Njk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZm9vdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAxNXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNhOGE4YTg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAuZm9vdC1jb250IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NhMzUzO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b25zIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMXB4IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgICAgJi5hY3Rpdml0eSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDYwYTEzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZGUwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYucm9sZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMTg5LCAxMDIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByYWN0aWNlcy1sYXlvdXQge1xyXG4gICAgcGFkZGluZy10b3A6IDEyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAucHJhY3RpY2VzLWJsb2NrIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMjIwcHg7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcclxuICAgICAgcGFkZGluZzogNjBweCAwIDMwcHggMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIG1heC13aWR0aDogOTQwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1heC13aWR0aDogNzA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICMxMzI1NDE7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDNweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5mbyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBjb2xvcjogIzRjNGM0YztcclxuICAgICAgICB3aWR0aDogNTglO1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnQtbGF5b3V0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jayB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAvIDMpIC0gODBweCk7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzOXB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC8gMykgLSAyMHB4KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRlbnQtbGF5b3V0IC5yZWNvcmQtbGF5b3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjU0MDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYwcHg7XG59XG4uY29udGVudC1sYXlvdXQgLnJlY29yZC1sYXlvdXQgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAuY29udGVudC1sYXlvdXQgLnJlY29yZC1sYXlvdXQgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5NDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250ZW50LWxheW91dCAucmVjb3JkLWxheW91dCAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDcwOHB4O1xuICB9XG59XG4uY29udGVudC1sYXlvdXQgLnJlY29yZC1sYXlvdXQgLmNvbnRhaW5lciBoMSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDY1cHg7XG59XG4uY29udGVudC1sYXlvdXQgLnJlY29yZC1sYXlvdXQgLmNvbnRhaW5lciAucmVjb3JkLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVudC1sYXlvdXQgLnJlY29yZC1sYXlvdXQgLmNvbnRhaW5lciAucmVjb3JkLWJsb2NrIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uY29udGVudC1sYXlvdXQgLnJlY29yZC1sYXlvdXQgLmNvbnRhaW5lciAucmVjb3JkLWJsb2NrIC5yZWNvcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW50LWxheW91dCAucmVjb3JkLWxheW91dCAuY29udGFpbmVyIC5yZWNvcmQtYmxvY2sgLnJlY29yZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5jb250ZW50LWxheW91dCAucmVjb3JkLWxheW91dCAuY29udGFpbmVyIC5yZWNvcmQtYmxvY2sgLnJlY29yZCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uY29udGVudC1sYXlvdXQgLnJlY29yZC1sYXlvdXQgLmNvbnRhaW5lciAucmVjb3JkLWJsb2NrIC5yZWNvcmQgLmluZm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogNTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cbi5jb250ZW50LWxheW91dCAucmVjb3JkLWxheW91dCAuY29udGFpbmVyIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1YmQ2NjtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxMXB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jb250ZW50LWxheW91dCAucmVjb3JkLWxheW91dCAuY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWFiMmQ7XG59XG4uY29udGVudC1sYXlvdXQgLm5ld3MtbGF5b3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYwcHg7XG59XG4uY29udGVudC1sYXlvdXQgLm5ld3MtbGF5b3V0IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzOXB4KSBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDk0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDcwOHB4O1xuICB9XG59XG4uY29udGVudC1sYXlvdXQgLm5ld3MtbGF5b3V0IC5jb250YWluZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMTMyNTQxO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2NXB4O1xufVxuLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5uZXdzLXRhYnMge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDAxNDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGVudC1sYXlvdXQgLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLm5ld3MtdGFicyBsaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMTRweCAzMHB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250ZW50LWxheW91dCAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAubmV3cy10YWJzIGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjY2NhMzUzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYTM1Mztcbn1cbi5jb250ZW50LWxheW91dCAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAuYWN0aXZpdHktbGF5b3V0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIHtcbiAgbWluLWhlaWdodDogMjc4cHg7XG4gIG1pbi13aWR0aDogNjcxcHg7XG4gIG1heC1oZWlnaHQ6IDI3OHB4O1xuICBtYXgtd2lkdGg6IDY3MXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXItY29sb3I6ICNjY2EzNTM7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzOXB4KSBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIHtcbiAgICBtaW4taGVpZ2h0OiAyMDRweDtcbiAgICBtaW4td2lkdGg6IDQ5NHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwNHB4O1xuICAgIG1heC13aWR0aDogNDk0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudC1sYXlvdXQgLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLmFjdGl2aXR5LWxheW91dCAuYWN0aXZpdHktYmxvY2sge1xuICAgIG1pbi1oZWlnaHQ6IDE0NHB4O1xuICAgIG1pbi13aWR0aDogMzQ3cHg7XG4gICAgbWF4LWhlaWdodDogMTQ0cHg7XG4gICAgbWF4LXdpZHRoOiAzNDdweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVudC1sYXlvdXQgLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLmFjdGl2aXR5LWxheW91dCAuYWN0aXZpdHktYmxvY2sge1xuICAgIG1pbi1oZWlnaHQ6IDEzM3B4O1xuICAgIG1pbi13aWR0aDogMzIzcHg7XG4gICAgbWF4LWhlaWdodDogMTMzcHg7XG4gICAgbWF4LXdpZHRoOiAzMjNweDtcbiAgfVxufVxuLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMTMyNTQxO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAuY29udGVudC1sYXlvdXQgLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLmFjdGl2aXR5LWxheW91dCAuYWN0aXZpdHktYmxvY2sgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudC1sYXlvdXQgLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLmFjdGl2aXR5LWxheW91dCAuYWN0aXZpdHktYmxvY2sgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA5cHg7XG4gIH1cbn1cbi5jb250ZW50LWxheW91dCAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAuYWN0aXZpdHktbGF5b3V0IC5hY3Rpdml0eS1ibG9jayAuaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiA0MDFweDtcbiAgbWF4LXdpZHRoOiA0MDFweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNjY2EzNTM7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzlweCkgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5jb250ZW50LWxheW91dCAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAuYWN0aXZpdHktbGF5b3V0IC5hY3Rpdml0eS1ibG9jayAuaW5mbyB7XG4gICAgbWluLXdpZHRoOiAyOTZweDtcbiAgICBtYXgtd2lkdGg6IDI5NnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIC5pbmZvIHtcbiAgICBtaW4td2lkdGg6IDIwOHB4O1xuICAgIG1heC13aWR0aDogMjA4cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5hY3Rpdml0eS1sYXlvdXQgLmFjdGl2aXR5LWJsb2NrIC5pbmZvIHtcbiAgICBtaW4td2lkdGg6IDIwMnB4O1xuICAgIG1heC13aWR0aDogMjAycHg7XG4gIH1cbn1cbi5jb250ZW50LWxheW91dCAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAucm9sZS1sYXlvdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAyMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250ZW50LWxheW91dCAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAucm9sZS1sYXlvdXQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5jb250ZW50LWxheW91dCAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAucm9sZS1sYXlvdXQgLnJvbGUtYmxvY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogY2FsYygoMTAwJSAvIDQpIC0gNDBweCk7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuY29udGVudC1sYXlvdXQgLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLnJvbGUtbGF5b3V0IC5yb2xlLWJsb2NrIHtcbiAgICB3aWR0aDogY2FsYygoMTAwJSAvIDMpIC0gNDBweCk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5yb2xlLWxheW91dCAucm9sZS1ibG9jayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbn1cbi5jb250ZW50LWxheW91dCAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAucm9sZS1sYXlvdXQgLnJvbGUtYmxvY2sgLmNvbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5yb2xlLWxheW91dCAucm9sZS1ibG9jayAuY29udCAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5jb250ZW50LWxheW91dCAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAucm9sZS1sYXlvdXQgLnJvbGUtYmxvY2sgLmNvbnQgLmluZm8ge1xuICBjb2xvcjogIzY5Njk2OTtcbn1cbi5jb250ZW50LWxheW91dCAubmV3cy1sYXlvdXQgLmNvbnRhaW5lciAucm9sZS1sYXlvdXQgLnJvbGUtYmxvY2sgLmZvb3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjYThhOGE4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5yb2xlLWxheW91dCAucm9sZS1ibG9jayAuZm9vdCAuZm9vdC1jb250IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDAwMDE0O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uY29udGVudC1sYXlvdXQgLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLnJvbGUtbGF5b3V0IC5yb2xlLWJsb2NrIC5mb290IC5mb290LWNvbnQgc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNjY2EzNTM7XG59XG4uY29udGVudC1sYXlvdXQgLm5ld3MtbGF5b3V0IC5jb250YWluZXIgLnJvbGUtbGF5b3V0IC5yb2xlLWJsb2NrIC5mb290IC5mb290LWNvbnQgc3Bhbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5idXR0b25zIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMTFweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5idXR0b25zIGJ1dHRvbi5hY3Rpdml0eSB7XG4gIGNvbG9yOiAjMDYwYTEzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZGUwO1xufVxuLmNvbnRlbnQtbGF5b3V0IC5uZXdzLWxheW91dCAuY29udGFpbmVyIC5idXR0b25zIGJ1dHRvbi5yb2xlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTViZDY2O1xufVxuLmNvbnRlbnQtbGF5b3V0IC5wcmFjdGljZXMtbGF5b3V0IHtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRlbnQtbGF5b3V0IC5wcmFjdGljZXMtbGF5b3V0IC5wcmFjdGljZXMtYmxvY2sge1xuICBtYXgtd2lkdGg6IDEyMjBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICBwYWRkaW5nOiA2MHB4IDAgMzBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzlweCkgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5jb250ZW50LWxheW91dCAucHJhY3RpY2VzLWxheW91dCAucHJhY3RpY2VzLWJsb2NrIHtcbiAgICBtYXgtd2lkdGg6IDk0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQtbGF5b3V0IC5wcmFjdGljZXMtbGF5b3V0IC5wcmFjdGljZXMtYmxvY2sge1xuICAgIG1heC13aWR0aDogNzA4cHg7XG4gIH1cbn1cbi5jb250ZW50LWxheW91dCAucHJhY3RpY2VzLWxheW91dCAucHJhY3RpY2VzLWJsb2NrIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzEzMjU0MTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudC1sYXlvdXQgLnByYWN0aWNlcy1sYXlvdXQgLnByYWN0aWNlcy1ibG9jayBoMSB7XG4gICAgZm9udC1zaXplOiA0M3B4O1xuICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250ZW50LWxheW91dCAucHJhY3RpY2VzLWxheW91dCAucHJhY3RpY2VzLWJsb2NrIGgxIHtcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgfVxufVxuLmNvbnRlbnQtbGF5b3V0IC5wcmFjdGljZXMtbGF5b3V0IC5wcmFjdGljZXMtYmxvY2sgLmluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICB3aWR0aDogNTglO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudC1sYXlvdXQgLnByYWN0aWNlcy1sYXlvdXQgLnByYWN0aWNlcy1ibG9jayAuaW5mbyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuLmNvbnRlbnQtbGF5b3V0IC5wcmFjdGljZXMtbGF5b3V0IC5wcmFjdGljZXMtYmxvY2sgLmNvbnQtbGF5b3V0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQtbGF5b3V0IC5wcmFjdGljZXMtbGF5b3V0IC5wcmFjdGljZXMtYmxvY2sgLmNvbnQtbGF5b3V0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uY29udGVudC1sYXlvdXQgLnByYWN0aWNlcy1sYXlvdXQgLnByYWN0aWNlcy1ibG9jayAuY29udC1sYXlvdXQgLmJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC8gMykgLSA4MHB4KTtcbiAgcGFkZGluZzogNDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzOXB4KSB7XG4gIC5jb250ZW50LWxheW91dCAucHJhY3RpY2VzLWxheW91dCAucHJhY3RpY2VzLWJsb2NrIC5jb250LWxheW91dCAuYmxvY2sge1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC8gMykgLSAyMHB4KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250ZW50LWxheW91dCAucHJhY3RpY2VzLWxheW91dCAucHJhY3RpY2VzLWJsb2NrIC5jb250LWxheW91dCAuYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250ZW50LWxheW91dCAucHJhY3RpY2VzLWxheW91dCAucHJhY3RpY2VzLWJsb2NrIC5jb250LWxheW91dCAuYmxvY2sge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbi5jb250ZW50LWxheW91dCAucHJhY3RpY2VzLWxheW91dCAucHJhY3RpY2VzLWJsb2NrIC5jb250LWxheW91dCAuYmxvY2sgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uY29udGVudC1sYXlvdXQgLnByYWN0aWNlcy1sYXlvdXQgLnByYWN0aWNlcy1ibG9jayAuY29udC1sYXlvdXQgLmJsb2NrIC5jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentComponent = class ContentComponent {
    constructor() {
        this.recordList = [
            {
                cover: 'assets/images/record1.jpg',
                // tslint:disable-next-line:max-line-length
                info: '整體戰略管理 風險防範與控制<br> 預防勝於治療 多一分事前風險管控 少一分事後爭議損失<br> 預防可能存在的法律風險及問題 避免或大幅降低解決糾紛的成本 <br> 全面提升營運績效 同時將風險降至最低以 <br>客戶需求為導向 針對個別產業特性 提供客製化解決方案'
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
                info: `<p><b>證照|學歷</b></p>
      <ul style="list-style-type:disc;">
      <li>● 中華人民共和國律師證書</li>

      <li>● 中華人民共和國法律執業資格</li>

      <li>● 英國City & Guilds Level 4 Higher Professional Diploma in Business Administration</li>

      <li>● 法國史特拉斯堡大學國際智慧財產權研究中心 智慧財產法法學碩士</li>

      <li>● 國立高雄第一科技大學應用英語系學士</li>

      <li>● 文藻外語大學法語系副學士</li>

      <p><b>經歷</b></p>

      <li>● 上海福一律師事務所</li>

      <li>● 上海理慈律師事務所</li>

      <li>● 理慈國際科技法律事務所</li>

      <li>● 宏景智權專利商標法律事務所</li>

      <li>● 統立開發股份有限公司</li>

      <li>● 2009世界運動會組委會基金會</li>

      <p><b>專長</b></p>
      <li>● 公司法律業務、智慧財產權、跨境投資、企業管理</li>
      <p><b>語言</b></p>
      <li>● 中文、英語、法語</li></ul>`
            },
            {
                title: 'Joy <small>顧問</small>',
                info: `<p><b>證照|學歷</b></p>
      <ul style="list-style-type:disc;">
      <li>● 東吳大學法學碩士</li>

      <li>● 國防管理學院法學士</li>

      <li>● 考試院乙等特考及格</li>

      <li>● 政府採購法採購專業人員考試及格</li>

      <p><b>經歷</b></p>

      <li>● 國防部最高軍事法院法官</li>

      <li>● 國防部高等軍事法院法官</li>

      <li>● 國防部高等軍事法院檢察署檢察官</li>

      <li>● 國防部法制司法制官</li>

      <li>● 國防部訴願委員會秘書</li>

      <li>● 國防部南部地方軍事法院檢察署檢察官</li>

      <p><b>專長</b></p>
      <li>● 公司制度規章制定、 政府機關行政實務 、行政訴訟、公共工程採購實務、 工程合約擬定與審查、工程履約管理、法院審檢實務</li></ul>`
            },
            {
                title: '黃玟錡  <small>律師</small>',
                info: `<p><b>證照|學歷</b></p>
      <ul style="list-style-type:disc;">
      <li>● 中華民國律師執照</li>

      <li>●中華人民共和國法律執業資格</li>

      <li>● 公務人員特種考試司法人員四等考試及格證書</li>

      <li>● 國際貿易大會考合格證書</li>

      <li>● 東吳大學 科技法律研究所</li>

      <li>●文藻外語學院英文系學士</li>

      <p><b>經歷</b></p>

      <li>● 臺灣高等法院</li>

      <li>● 衡律法律事務所</li>

      <li>● 財團法人法律扶助基金會台北、新北、士林分會</li>

      <li>● 台北市政府勞動局</li>

      <li>● 台北市勞動力重建運用處</li>

      <li>● 經濟部智慧財產局「智慧財產權服務團」</li>

      <p><b>專長</b></p>
      <li>● 智慧財產權、勞資爭議、金融科技法律、一般民事/刑事/行政訴訟代理</li>
      </ul>`
            },
            {
                title: '宮少朋  <small>律師</small>',
                info: `<p><b>證照|經歷</b></p>
      <ul style="list-style-type:disc;">
      <li>● 中華人民共和國律師證書</li>

      <li>● 中華人民共和國法律執業資格</li>

      <li>● 上海福一律師事務所 高級合夥人、主任</li>

      <li>● 上海法學會海商法研究會 理事</li>

      <p><b>榮譽</b></p>

      <li>● 2018年上海市普陀區十大優秀青年律師 成功主辦數百起經濟糾紛、信用管理法律服務案件，服務過的客戶包括：科法斯、安卓、金沙江創投、中國平安、西門子、藍格賽喜利得、默克中國、格蘭富水泵、愛普科斯照明、中遠佐敦、海虹老人、金剛化工、PPG塗料、莊信萬豐、北京星和眾工、開利空調、機械工業出版社、東芝照明、北京科華麥太保、貝卡爾特麥克斯特、聖戈斑、上海精泰等</li>

      <p><b>專長</b></p>
      <li>● 公司法律業務、企業信用管理、海商法業務</li></ul>`
            },
            {
                title: '黃敬堯  <small>顧問</small>',
                info: `<p><b>證照|學歷</b></p>
      <ul style="list-style-type:disc;">
      <li>● 澳洲阿德雷德大學法學院 商法碩士</li>

      <li>● 台灣彰化師範大學翻譯研究所 口譯組</li>

      <li>● IAEE註冊會展經理證照</li>

      <li>● 澳洲NAATI專業級口譯證照</li>

      <p><b>經歷</b></p>

      <li>● 四川十六加一文化產業發展有限公司 CEO</li>

      <li>● 四川衡力商務咨詢有限公司創始人、總經理</li>

      <li>● 四川語言橋翻譯有限公司會議會展部總監</li>

      <li>● 台灣最高行政法院 法官助理</li>

      <p><b>榮譽</b></p>
      <li>● 成都市對外文化交流與貿易培訓講師</li>
      <li>● 大陸西南民族大學專業學位研究生課程建設團隊負責人、校外導師</li>
      <li>● 大陸西南民族大學碩士專業學位授權點申報答辯專家</li>
      <li>● 大陸三峽大學外國語學院翻譯碩士兼職導師</li>
      <li>● 大陸電子科技大學外國語學院MTI校外導師</li>
      <li>● 四川大學外國語學院校外兼職教師</li>
      <li>● 台灣教育部學海飛揚獎學金</li>
      <p><b>專長</b></p>
      <li>● 堅實的專業知識佐以嫻熟的翻譯技能，擁有10年以上會議口譯經驗，擅長財經商貿、人文法政等領域。長期為UNESCO、UNDP、使（領）館、各級政府部門大型國際會議、論壇、研討會及商務洽談等活動組織、策劃、並實施相關服務</li></ul>`
            },
            {
                title: '黃正榮  <small>顧問</small>',
                info: `<p><b>證照|經歷</b></p>
      <ul style="list-style-type:disc;">
      <li>● 台灣經濟部中小企業榮譽指導員</li>

      <li>● 加拿大Seneca College營銷管理</li>

      <li>● 政府顧問全職4年</li>

      <li>● 政府顧問兼職2年</li>
      <li>● 台灣與大陸製造業進出口經驗6年</li>
      <li>● 資訊系統管理經驗23年</li>
      <li>● 歐美經驗27年</li>
      <li>● 民間機構組織經驗18年</li>
      <li>● 輔導近百家協會公會(台灣及國際)</li>
      <li>● 加拿大多倫多非營利機構</li>


      <p><b>榮譽</b></p>

      <li>● 台灣政府頒發大功令及小功令(台灣專案、市政推動、區域整合)</li>

      <p><b>專長</b></p>
      <li>● 全方位經營管理、跨產、官、學、民整合、國際英語談判、協商會議、商業活動、精通英語、中文、廣東話、閩南語</li></ul>`
            },
            {
                title: '合作夥伴',
                info: `<p><b>上海福一律師事務所</b></p>
      <ul style="list-style-type:disc;">
      <li>● 主要業務範圍涉及爭端解決、公司業務、商業合同審核、房地產、智慧財產權、證券與資本市場、境外投資。傳統業務及核心優勢為爭端解決，擁有高素質且經驗豐富的專業訴訟律師團隊</li>
      </ul>`
            },
        ];
        this.tabIndex = 0;
    }
    ngOnInit() {
    }
    changeTab(value) {
        this.tabIndex = value;
    }
};
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: __webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/index/content/content.component.html"),
        styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/pages/index/content/content.component.scss")]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/pages/index/footer/footer.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/index/footer/footer.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-layout {\n  color: #fff;\n  background-color: #132541;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.footer-layout .content {\n  padding: 80px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.footer-layout .content .container {\n  width: 100%;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .footer-layout .content .container {\n    max-width: 940px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .footer-layout .content .container {\n    max-width: 708px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .footer-layout .content .container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    max-width: 700px !important;\n    padding-left: 33px !important;\n    padding-right: 33px !important;\n  }\n}\n.footer-layout .content .container .block {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  margin: 0 40px;\n  width: calc((100% / 4) - 80px);\n}\n@media only screen and (max-width: 768px) {\n  .footer-layout .content .container .block {\n    width: 100%;\n  }\n}\n.footer-layout .content .container .block .title {\n  font-size: 18px;\n  line-height: 26px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  color: #cca353;\n}\n.footer-layout .content .container .block .address {\n  margin: 15px 0;\n}\n.footer-layout .content .container .block .info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.footer-layout .content .container .block img {\n  width: 100%;\n  padding: 15px;\n}\n@media only screen and (max-width: 768px) {\n  .footer-layout .content .container .block img {\n    width: 200px;\n  }\n}\n.footer-layout .copy {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.footer-layout .copy .container {\n  max-width: 1220px;\n  width: 100%;\n  margin-bottom: 20px;\n  padding-top: 30px;\n  min-height: 33px;\n}\n@media only screen and (max-width: 1239px) and (min-width: 960px) {\n  .footer-layout .copy .container {\n    max-width: 940px;\n  }\n}\n@media only screen and (max-width: 959px) and (min-width: 768px) {\n  .footer-layout .copy .container {\n    max-width: 708px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .footer-layout .copy .container {\n    padding-left: 33px !important;\n    padding-right: 33px !important;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvZm9vdGVyL0M6XFxMaWdodFVwXFxmeGx3ZWIvc3JjXFxhcHBcXHBhZ2VzXFxpbmRleFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luZGV4L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0FDQ047QURDTTtFQUhGO0lBSUksZ0JBQUE7RUNFTjtBQUNGO0FEQU07RUFQRjtJQVFJLGdCQUFBO0VDR047QUFDRjtBRERNO0VBWEY7SUFZSSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSwyQkFBQTtJQUNBLDZCQUFBO0lBQ0EsOEJBQUE7RUNJTjtBQUNGO0FERk07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FDSVI7QURGUTtFQVBGO0lBUUksV0FBQTtFQ0tSO0FBQ0Y7QURIUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDS1Y7QURGUTtFQUNFLGNBQUE7QUNJVjtBRERRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDR1Y7QURBUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDRVY7QURBVTtFQUpGO0lBS0ksWUFBQTtFQ0dWO0FBQ0Y7QURHRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7QURHSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ROO0FER007RUFQRjtJQVFJLGdCQUFBO0VDQU47QUFDRjtBREVNO0VBWEY7SUFZSSxnQkFBQTtFQ0NOO0FBQ0Y7QURDTTtFQWZGO0lBZ0JJLDZCQUFBO0lBQ0EsOEJBQUE7SUFDQSxrQkFBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmRleC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1sYXlvdXQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI1NDE7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzOXB4KSBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDk0MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDcwOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBtYXJnaW46IDAgNDBweDtcclxuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAvIDQpIC0gODBweCk7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI2NjYTM1MztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvcHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMjIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgbWluLWhlaWdodDogMzNweDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzOXB4KSBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDk0MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDcwOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZm9vdGVyLWxheW91dCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNTQxO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9vdGVyLWxheW91dCAuY29udGVudCB7XG4gIHBhZGRpbmc6IDgwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9vdGVyLWxheW91dCAuY29udGVudCAuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzlweCkgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5mb290ZXItbGF5b3V0IC5jb250ZW50IC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTQwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyLWxheW91dCAuY29udGVudCAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDcwOHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mb290ZXItbGF5b3V0IC5jb250ZW50IC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiA3MDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMzNweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMzcHggIWltcG9ydGFudDtcbiAgfVxufVxuLmZvb3Rlci1sYXlvdXQgLmNvbnRlbnQgLmNvbnRhaW5lciAuYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwIDQwcHg7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC8gNCkgLSA4MHB4KTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3Rlci1sYXlvdXQgLmNvbnRlbnQgLmNvbnRhaW5lciAuYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZm9vdGVyLWxheW91dCAuY29udGVudCAuY29udGFpbmVyIC5ibG9jayAudGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBjb2xvcjogI2NjYTM1Mztcbn1cbi5mb290ZXItbGF5b3V0IC5jb250ZW50IC5jb250YWluZXIgLmJsb2NrIC5hZGRyZXNzIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG4uZm9vdGVyLWxheW91dCAuY29udGVudCAuY29udGFpbmVyIC5ibG9jayAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9vdGVyLWxheW91dCAuY29udGVudCAuY29udGFpbmVyIC5ibG9jayBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3Rlci1sYXlvdXQgLmNvbnRlbnQgLmNvbnRhaW5lciAuYmxvY2sgaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbn1cbi5mb290ZXItbGF5b3V0IC5jb3B5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9vdGVyLWxheW91dCAuY29weSAuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgbWluLWhlaWdodDogMzNweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzOXB4KSBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLmZvb3Rlci1sYXlvdXQgLmNvcHkgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5NDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb290ZXItbGF5b3V0IC5jb3B5IC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzA4cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3Rlci1sYXlvdXQgLmNvcHkgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAzM3B4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMzNweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/index/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/index/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/pages/index/header/header.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/index/header/header.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-layout {\n  color: #fff;\n  background-color: #132541;\n  padding: 0 15px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: calc(100% - 30px);\n  height: 100px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 100;\n}\n@media only screen and (max-width: 680px) {\n  .header-layout {\n    height: 60px;\n  }\n}\n.header-layout .header-logo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header-layout .header-logo img {\n  padding: 15px 0;\n  cursor: pointer;\n}\n.header-layout .header-menu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header-layout .header-menu li {\n  padding: 15px 20px;\n  line-height: 60px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n.header-layout .header-menu li:hover {\n  color: #e5bd66;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvaGVhZGVyL0M6XFxMaWdodFVwXFxmeGx3ZWIvc3JjXFxhcHBcXHBhZ2VzXFxpbmRleFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luZGV4L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBZEY7SUFlSSxZQUFBO0VDRUY7QUFDRjtBREFFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNFSjtBREFJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNFTjtBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjtBREVJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FDQU47QURFTTtFQUNFLGNBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxheW91dCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjU0MTtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkZXItbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2U1YmQ2NjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaGVhZGVyLWxheW91dCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNTQxO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XG4gIC5oZWFkZXItbGF5b3V0IHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbn1cbi5oZWFkZXItbGF5b3V0IC5oZWFkZXItbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXItbGF5b3V0IC5oZWFkZXItbG9nbyBpbWcge1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFkZXItbGF5b3V0IC5oZWFkZXItbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlci1sYXlvdXQgLmhlYWRlci1tZW51IGxpIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uaGVhZGVyLWxheW91dCAuaGVhZGVyLW1lbnUgbGk6aG92ZXIge1xuICBjb2xvcjogI2U1YmQ2Njtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
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
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/index/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/index/header/header.component.scss")]
    })
], HeaderComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.component */ "./src/app/pages/index/index.component.ts");




const routes = [
    { path: '', pathMatch: 'full', component: _index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] }
];
let IndexRoutingModule = class IndexRoutingModule {
};
IndexRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], IndexRoutingModule);



/***/ }),

/***/ "./src/app/pages/index/index.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/index/index.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-layout {\n  margin-top: 100px;\n  background-image: url(\"/assets/images/IMG_2343.jpeg\");\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-attachment: fixed;\n  background-size: cover;\n}\n@media only screen and (max-width: 680px) {\n  .content-layout {\n    margin-top: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvQzpcXExpZ2h0VXBcXGZ4bHdlYi9zcmNcXGFwcFxccGFnZXNcXGluZGV4XFxpbmRleC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLHFEQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREFFO0VBUEY7SUFRSSxnQkFBQTtFQ0dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWxheW91dCB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvSU1HXzIzNDMuanBlZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5jb250ZW50LWxheW91dCB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9JTUdfMjM0My5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2ODBweCkge1xuICAuY29udGVudC1sYXlvdXQge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/index/index.component.html"),
        styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/pages/index/index.component.scss")]
    })
], IndexComponent);



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-animate-on-scroll */ "./node_modules/ng2-animate-on-scroll/dist/index.js");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slider */ "./node_modules/ngx-slider/ngx-slider.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/pages/index/banner/banner.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.component */ "./src/app/pages/index/content/content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/pages/index/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/pages/index/header/header.component.ts");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-routing.module */ "./src/app/pages/index/index-routing.module.ts");











let IndexModule = class IndexModule {
};
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



/***/ })

}]);
//# sourceMappingURL=pages-index-index-module-es2015.js.map