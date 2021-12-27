/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n}\n\n.noUi-target {\n  position: relative;\n}\n\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  transition: transform 0.3s;\n}\n\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n\n.noUi-vertical {\n  width: 18px;\n}\n\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n\n.noUi-connects {\n  border-radius: 3px;\n}\n\n.noUi-connect {\n  background: #3FB8AF;\n}\n\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n\n.noUi-handle:after {\n  left: 17px;\n}\n\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  box-sizing: border-box;\n}\n\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n\n.noUi-marker-sub {\n  background: #AAA;\n}\n\n.noUi-marker-large {\n  background: #AAA;\n}\n\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n\n.noUi-value-horizontal {\n  transform: translate(-50%, 50%);\n}\n\n.noUi-rtl .noUi-value-horizontal {\n  transform: translate(50%, 50%);\n}\n\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n\n.noUi-value-vertical {\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n\n.noUi-rtl .noUi-value-vertical {\n  transform: translate(0, 50%);\n}\n\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.noUi-horizontal .noUi-tooltip {\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n\n.noUi-vertical .noUi-tooltip {\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}", "",{"version":3,"sources":["webpack://./node_modules/nouislider/dist/nouislider.css"],"names":[],"mappings":"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","sourcesContent":["/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Neucha-Regular.ttf */ "./src/assets/fonts/Neucha-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Steppe.ttf */ "./src/assets/fonts/Steppe.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/tree.svg */ "./src/assets/images/svg/tree.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/tree-active.svg */ "./src/assets/images/svg/tree-active.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/bg.jpg */ "./src/assets/images/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/1.png */ "./src/assets/images/1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/2.png */ "./src/assets/images/2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/rs_school_js.png */ "./src/assets/images/rs_school_js.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/audio.svg */ "./src/assets/images/svg/audio.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/snow.svg */ "./src/assets/images/svg/snow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/close.svg */ "./src/assets/images/svg/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/arrow-down.svg */ "./src/assets/images/svg/arrow-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/bell.svg */ "./src/assets/images/svg/bell.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/ball.svg */ "./src/assets/images/svg/ball.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/cone.svg */ "./src/assets/images/svg/cone.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/snowflake.svg */ "./src/assets/images/svg/snowflake.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/toy.svg */ "./src/assets/images/svg/toy.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/tree/1.png */ "./src/assets/images/tree/1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/tree/2.png */ "./src/assets/images/tree/2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/tree/3.png */ "./src/assets/images/tree/3.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/tree/4.png */ "./src/assets/images/tree/4.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/tree/5.png */ "./src/assets/images/tree/5.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/tree/6.png */ "./src/assets/images/tree/6.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/bg/1.jpg */ "./src/assets/images/bg/1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/bg/2.jpg */ "./src/assets/images/bg/2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/bg/3.jpg */ "./src/assets/images/bg/3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/bg/4.jpg */ "./src/assets/images/bg/4.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/bg/5.jpg */ "./src/assets/images/bg/5.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/bg/6.jpg */ "./src/assets/images/bg/6.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/bg/7.jpg */ "./src/assets/images/bg/7.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/bg/8.jpg */ "./src/assets/images/bg/8.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/bg/9.jpg */ "./src/assets/images/bg/9.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/bg/10.jpg */ "./src/assets/images/bg/10.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*Обнуление*/\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\n:focus, :active {\n  outline: none;\n}\n\na:focus, a:active {\n  outline: none;\n}\n\nnav, footer, header, aside {\n  display: block;\n}\n\nhtml, body {\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  font-size: 10px;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\ninput, button, textarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na, a:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: 400;\n}\n\n/*--------------------*/\n@font-face {\n  font-family: \"Neucha-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Steppe\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: normal;\n  font-style: normal;\n}\nheader {\n  width: 100vw;\n  height: 50px;\n  background-color: #192f2d;\n}\n\n.header-container {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 30px;\n       column-gap: 30px;\n  padding-top: 5px;\n}\n.header-container .logo {\n  width: 30px;\n  height: 40px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  cursor: pointer;\n}\n.header-container .logo:hover {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  transform: scale(1.05);\n}\n.header-container .page {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.header-container .page:hover {\n  color: #009688;\n  transform: scale(1.05);\n}\n\nmain {\n  position: relative;\n  width: 100vw;\n  height: calc(100vh - 150px);\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\n.start-game {\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper {\n  width: calc(100% - 100px);\n  height: 100%;\n  margin: 0 auto;\n}\n\n.start-game .toys-circle-left {\n  position: absolute;\n  top: 0;\n  left: 20%;\n  width: 21.771vw;\n  padding-bottom: 39.886%;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.start-game .toys-circle-right {\n  position: absolute;\n  top: 10%;\n  right: 28%;\n  width: 12.771vw;\n  padding-bottom: 23.334%;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.start-game .title-conteiner h1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: inline-flex;\n  padding: 67px 85px;\n  font-family: \"Neucha-Regular\", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 53px;\n  line-height: 58px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n  letter-spacing: 0.05em;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n}\n.start-game .start {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 320px;\n  height: 54px;\n  top: 70%;\n  left: 50%;\n  font-family: \"Steppe\";\n  font-size: 24px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  transform: translateX(-50%);\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.start-game .start:hover {\n  opacity: 80%;\n}\n\nfooter {\n  width: 100vw;\n  height: 100px;\n  background-color: #192f2d;\n}\n\n.footer-container {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n.footer-container .left-element p {\n  font-family: \"Steppe\";\n  font-size: 18px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  opacity: 70%;\n}\n.footer-container .left-element p span {\n  margin-left: 20px;\n}\n.footer-container .right-element a {\n  display: block;\n  width: 180px;\n  height: 60px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n\n.hide {\n  display: none;\n}\n\n@media (max-width: 1024px) {\n  .wrapper {\n    width: calc(100% - 40px);\n    height: 100%;\n    margin: 0 auto;\n  }\n}\n.toys {\n  width: 100%;\n  height: 100%;\n}\n\n.toys-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 450px 1fr;\n  grid-template-rows: 1fr;\n  grid-column-gap: 10px;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n}\n\n.filter-conteiner {\n  overflow: hidden;\n}\n\n.filter-container-wrapper {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.filter-container-wrapper::-webkit-scrollbar {\n  width: 6px;\n}\n\n.filter-container-wrapper::-webkit-scrollbar-track {\n  background: none;\n}\n\n.filter-container-wrapper::-webkit-scrollbar-thumb {\n  border-radius: 6px;\n}\n\n.filter-container-content {\n  margin-right: 10px;\n  padding: 10px;\n}\n\n.settings {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin: 20px 0;\n}\n.settings .audio {\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n}\n.settings .audio:hover {\n  opacity: 75%;\n}\n.settings .snow {\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n}\n.settings .snow:hover {\n  opacity: 75%;\n}\n.settings .search {\n  position: relative;\n}\n.settings .search .search-item {\n  width: 260px;\n  height: 36px;\n  padding: 0 50px 0 20px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #fff;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n  border: 1px solid #03a9f4;\n}\n.settings .clean-icon {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n}\n.settings .search-icon:hover {\n  opacity: 75%;\n}\n\n.sort {\n  display: flex;\n  -moz-column-gap: 40px;\n       column-gap: 40px;\n  align-items: center;\n}\n.sort p {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.sort .sort-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 270px;\n  height: 36px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n  border: 1px solid #03a9f4;\n  z-index: 5;\n}\n.sort .sort-container p {\n  font-size: 16px;\n  text-transform: none;\n  padding-left: 20px;\n}\n.sort .sort-container .choose-item {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  width: 30px;\n  height: 20px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n}\n.sort .sort-container .choose-item:hover {\n  opacity: 75%;\n}\n.sort .sort-container .all-item {\n  position: absolute;\n  width: 90%;\n  left: 5%;\n  top: 110%;\n  border-radius: 6px;\n  border: 1px solid #2196f3;\n  background-color: #3e5857;\n}\n.sort .sort-container .all-item .sort-item {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #fff;\n  padding: 10px;\n  cursor: pointer;\n}\n.sort .sort-container .all-item .sort-item:hover {\n  background-color: #669396;\n}\n\n.sort-category {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.sort-category .category-container {\n  width: 24px;\n  height: 24px;\n  text-transform: none;\n}\n.sort-category .category-container .all {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.sort-category .category-container .all::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.sort-category .category-container .all:checked::before {\n  opacity: 1;\n}\n\n.toys-form {\n  margin: 20px 0;\n}\n.toys-form h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.toys-form .form-container {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.toys-form .form-container .form-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.toys-form .form-container .form-item .form-icon {\n  margin-bottom: 15px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.toys-form .form-container .form-item .form-icon:hover {\n  opacity: 85%;\n  transform: scale(1.1);\n}\n.toys-form .form-container .form-item .form-icon__active {\n  filter: invert(54%) sepia(107%) saturate(901%) hue-rotate(25deg) brightness(140%) contrast(93%);\n}\n.toys-form .form-container .form-item .icon-1 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n}\n.toys-form .form-container .form-item .icon-2 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n}\n.toys-form .form-container .form-item .icon-3 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n}\n.toys-form .form-container .form-item .icon-4 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n}\n.toys-form .form-container .form-item .icon-5 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n}\n.toys-form .form-container .form-item .icon-6 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\n}\n.toys-form .form-container .form-item .icon-name {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  color: #fff;\n}\n\n/*Slider*/\nmain .noUi-target {\n  background: #fafafa;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;\n  border: none;\n  cursor: pointer;\n}\n\nmain .noUi-horizontal {\n  height: 2px;\n}\n\nmain .noUi-handle:before,\n.noUi-handle:after {\n  content: none;\n  display: none !important;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  background: #e8e7e6;\n  left: 14px;\n  top: 6px;\n}\n\nmain .noUi-horizontal .noUi-handle {\n  width: 15px;\n  height: 15px;\n  right: -13px;\n  top: -6px;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), radial-gradient(57.23% 248.2% at 107.17%, at 104.02%, rgba(34, 153, 235, 0.92) 0%, rgba(34, 153, 235, 0.07) 100%), radial-gradient(104.22% 230.94% at -4.22%, at 0%, #24c5db 3.62%, rgba(36, 197, 219, 0.26) 55.1%);\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), radial-gradient(57.23% 248.2% at 107.17% 104.02%, rgba(34, 153, 235, 0.92) 0%, rgba(34, 153, 235, 0.07) 100%), radial-gradient(104.22% 230.94% at -4.22% 0%, #24c5db 3.62%, rgba(36, 197, 219, 0.26) 55.1%);\n  border-radius: 50%;\n  box-shadow: none;\n  border: none;\n  cursor: pointer;\n}\n\nmain .noUi-connect {\n  background: #24c5db;\n}\n\nmain .noUi-base,\n.noUi-connects {\n  width: 97%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\nmain .noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: none;\n  border-radius: none;\n  background: none;\n  color: #fff;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 14px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n}\n\n#range-year .noUi-tooltip {\n  left: 50%;\n}\n\n#range-year {\n  margin-top: 40px;\n}\n\n/*Slider-END*/\n.count-copy {\n  position: relative;\n  margin: 20px 0;\n}\n.count-copy h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.count-copy .count-copy-item {\n  margin-top: 40px;\n}\n.count-copy .min {\n  position: absolute;\n  top: 125%;\n  left: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n.count-copy .max {\n  position: absolute;\n  top: 125%;\n  right: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n\n.year-purchase {\n  position: relative;\n  margin: 40px 0 20px 0;\n}\n.year-purchase h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.year-purchase .year-purchase-item {\n  margin-top: 35px;\n}\n.year-purchase .min {\n  position: absolute;\n  top: 125%;\n  left: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n.year-purchase .max {\n  position: absolute;\n  top: 125%;\n  right: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n\n.color {\n  margin: 40px 0 20px 0;\n}\n.color h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.color .color-container {\n  display: flex;\n  -moz-column-gap: 25px;\n       column-gap: 25px;\n  margin-top: 15px;\n}\n.color .color-container .color-item {\n  width: 25px;\n  height: 25px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.color .color-container .color-item:hover {\n  opacity: 75%;\n}\n.color .color-container .color-item__active {\n  box-shadow: 0px 0px 6px 2px rgba(253, 215, 0, 0.8);\n}\n.color .color-container .item-1 {\n  background: #ffffff;\n}\n.color .color-container .item-2 {\n  background: #fdd700;\n}\n.color .color-container .item-3 {\n  background: #fd0000;\n}\n.color .color-container .item-4 {\n  background: #2299eb;\n}\n.color .color-container .item-5 {\n  background: #08aa05;\n}\n\n.size {\n  margin: 20px 0;\n}\n.size h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.size .size-container {\n  display: flex;\n  margin-top: 15px;\n  justify-content: space-between;\n}\n.size .size-container .container-item {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.size .size-container .size-item {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.size .size-container .size-item::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.size .size-container .size-item:checked::before {\n  opacity: 1;\n}\n\n.favorite {\n  margin: 20px 0;\n}\n.favorite .container-favorite {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.favorite .container-favorite .favorite-item {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.favorite .container-favorite .favorite-item::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.favorite .container-favorite .favorite-item:checked::before {\n  opacity: 1;\n}\n\n.sucsses {\n  display: flex;\n  margin: 25px 0;\n  justify-content: center;\n  -moz-column-gap: 40px;\n       column-gap: 40px;\n}\n.sucsses .apply-btn {\n  width: 180px;\n  height: 30px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.sucsses .apply-btn:hover {\n  opacity: 75%;\n}\n\n.toys-collection-container {\n  overflow: hidden;\n}\n.toys-collection-container .title {\n  display: flex;\n  -moz-column-gap: 50px;\n       column-gap: 50px;\n}\n.toys-collection-container .title h2 {\n  margin: 20px 0 20px 50px;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.toys-collection-container .collection-container {\n  position: relative;\n  height: calc(100% - 48px);\n  overflow: scroll;\n}\n.toys-collection-container .collection-container .message {\n  display: none;\n  width: 270px;\n  border-radius: 6px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .message .message-item {\n  padding: 30px;\n  background: rgba(67, 104, 106, 0.7);\n  color: #fafafa;\n  font-size: 20px;\n}\n.toys-collection-container .collection-container .collection-container-wrapper {\n  display: flex;\n  -moz-column-gap: 25px;\n       column-gap: 25px;\n  row-gap: 25px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-right: 10px;\n}\n.toys-collection-container .collection-container .container-content {\n  width: 225px;\n  padding: 10px;\n  margin: 10px 0 50px 0;\n  background: radial-gradient(109.56% 109.56% at 0%, at -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  border: rgba(121, 139, 144, 0.1) solid 5px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .container-content h4 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.toys-collection-container .collection-container .container-content .icon-toy-container {\n  margin-top: 15px;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n.toys-collection-container .collection-container .container-content .icon-toy-container .icon-toy {\n  width: 110px;\n  height: 110px;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .container-content .data-toy {\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n.toys-collection-container .collection-container .container-content .data-toy li {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  color: #ffffff;\n}\n.toys-collection-container .collection-container .active-toy {\n  box-sizing: border-box;\n  border: #4caf50 solid 5px;\n  background: radial-gradient(109.56% 109.56% at 0%, at -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(70, 109, 114, 0.4) 100%);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(70, 109, 114, 0.4) 100%);\n  box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\n}\n.toys-collection-container .collection-container .container-content:hover {\n  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.7);\n  background: radial-gradient(109.56% 109.56% at 0%, at -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(179, 246, 255, 0.4) 100%);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(179, 246, 255, 0.4) 100%);\n}\n.toys-collection-container .collection-container .container-content:hover .icon-toy-container .icon-toy {\n  transform: scale(1.1);\n}\n.toys-collection-container .collection-container .active-toy:hover {\n  box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\n}\n.toys-collection-container .collection-container .message_active {\n  display: block;\n  opacity: 1;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar {\n  width: 12px;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar-track {\n  background: none;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar-thumb {\n  background-color: #43686a;\n  border-radius: 6px;\n}\n\n.christmas-tree {\n  width: 100%;\n  height: 100%;\n}\n\n.christmas-tree-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2.3fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.settings-tree {\n  background: rgba(25, 47, 45, 0.7);\n  padding: 10px;\n  overflow: hidden;\n}\n\n.settings-container {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.settings-container::-webkit-scrollbar {\n  width: 6px;\n}\n\n.settings-container::-webkit-scrollbar-track {\n  background: none;\n}\n\n.settings-container::-webkit-scrollbar-thumb {\n  border-radius: 6px;\n}\n\n.settings-tree-page {\n  justify-content: center;\n  -moz-column-gap: 50px;\n       column-gap: 50px;\n}\n\n.christmas-tree-collection h2 {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.christmas-tree-collection .collection-continer {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 10px;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\n.christmas-tree-collection .collection-continer .conteiner-content {\n  padding-bottom: 100%;\n  background: radial-gradient(109.56% 109.56% at 0%, at -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-radius: 10px;\n  transition: 0.3s;\n  border: #172a29 2px solid;\n  cursor: pointer;\n}\n.christmas-tree-collection .collection-continer .conteiner-content .conteiner-item {\n  position: absolute;\n  width: 80%;\n  height: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-1 {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-2 {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-3 {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-4 {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-5 {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ");\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-6 {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n}\n.christmas-tree-collection .collection-continer .conteiner-content:hover {\n  box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\n}\n.christmas-tree-background h2 {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.christmas-tree-background .background-continer {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 10px;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\n.christmas-tree-background .background-continer .conteiner-content-bg {\n  padding-bottom: 100%;\n  border-radius: 9px;\n  border: #172a29 2px solid;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.christmas-tree-background .background-continer .conteiner-content-bg:hover {\n  box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\n}\n.christmas-tree-background .background-continer .bg-1 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\n}\n.christmas-tree-background .background-continer .bg-2 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");\n}\n.christmas-tree-background .background-continer .bg-3 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ");\n}\n.christmas-tree-background .background-continer .bg-4 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ");\n}\n.christmas-tree-background .background-continer .bg-5 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ");\n}\n.christmas-tree-background .background-continer .bg-6 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ");\n}\n.christmas-tree-background .background-continer .bg-7 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ");\n}\n.christmas-tree-background .background-continer .bg-8 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ");\n}\n.christmas-tree-background .background-continer .bg-9 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ");\n}\n.christmas-tree-background .background-continer .bg-10 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + ");\n}\n.christmas-tree-background .background-continer .conteiner-content-bg__active {\n  border: #03a9f4 2px solid;\n}\n\n.christmas-tree-garland h2 {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.christmas-tree-garland .garland-conteiner {\n  display: flex;\n  justify-content: space-around;\n}\n.christmas-tree-garland .garland-conteiner .garland-container-item {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: 0.3s;\n  opacity: 0.5;\n}\n.christmas-tree-garland .garland-conteiner .garland-1 {\n  background: linear-gradient(45deg, #dd0d0d, #e5f210, #0ae511);\n  box-shadow: 0px 0px 10px 2px rgba(251, 251, 251, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-1:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #fbfbfb;\n}\n.christmas-tree-garland .garland-conteiner .garland-2 {\n  background: linear-gradient(45deg, #f60707, #cc4c3f, #df7048);\n  box-shadow: 0px 0px 10px 2px rgba(255, 1, 1, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-2:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #ff0101;\n}\n.christmas-tree-garland .garland-conteiner .garland-3 {\n  background: linear-gradient(45deg, #0f00ff, #252ac3, #1b0d6f);\n  box-shadow: 0px 0px 10px 2px rgba(11, 60, 247, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-3:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #0b3cf7;\n}\n.christmas-tree-garland .garland-conteiner .garland-4 {\n  background: linear-gradient(45deg, #0fff00, #25c32a, #0d6f37);\n  box-shadow: 0px 0px 10px 2px rgba(35, 247, 11, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-4:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #23f70b;\n}\n.christmas-tree-garland .garland-conteiner .garland-5 {\n  background: linear-gradient(45deg, #e5ff00, #b3c325, #6f6c0d);\n  box-shadow: 0px 0px 10px 2px rgba(215, 227, 16, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-5:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #d7e310;\n}\n.christmas-tree-garland .garland-conteiner .garland-item__active {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #fbfbfb;\n}\n.christmas-tree-garland .garland-conteiner .switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n}\n.christmas-tree-garland .garland-conteiner .switch input {\n  display: none;\n}\n.christmas-tree-garland .garland-conteiner .switch .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.christmas-tree-garland .garland-conteiner .switch .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 13px;\n  width: 13px;\n  left: 4px;\n  bottom: 4px;\n  background-color: #f6d209;\n  transition: 0.4s;\n}\n.christmas-tree-garland .garland-conteiner .switch input:checked + .slider {\n  background-color: #0e6a62;\n}\n.christmas-tree-garland .garland-conteiner .switch input:focus + .slider {\n  box-shadow: 0 0 1px #0e6a62;\n}\n.christmas-tree-garland .garland-conteiner .switch input:checked + .slider:before {\n  transform: translateX(20px);\n}\n.christmas-tree-garland .garland-conteiner .switch .slider.round {\n  border-radius: 34px;\n}\n.christmas-tree-garland .garland-conteiner .switch .slider.round:before {\n  border-radius: 50%;\n}\n\n.main-tree {\n  height: calc(100vh - 150px);\n  position: relative;\n}\n.main-tree .christmas-bg-current {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: center/cover url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\n}\n.main-tree .christmas-tree-carrent {\n  position: absolute;\n  bottom: 1%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 300px;\n  height: 450px;\n  z-index: 10;\n}\n\n.toys-tree {\n  background: rgba(25, 47, 45, 0.7);\n}\n.toys-tree .title h2 {\n  margin: 20px 0 20px 50px;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.toys-tree-container {\n  display: grid;\n  padding: 5px;\n  width: 100%;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  grid-column-gap: 5px;\n  -moz-column-gap: 5px;\n       column-gap: 5px;\n  grid-row-gap: 5px;\n  row-gap: 5px;\n}\n.toys-tree-container .toy-for-tree {\n  position: relative;\n  padding-bottom: 100%;\n  background: radial-gradient(109.56% 109.56% at 0%, at -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  transition: 0.3s;\n  cursor: pointer;\n  border: #172a29 2px solid;\n}\n.toys-tree-container .toy-for-tree .toy-icon {\n  position: absolute;\n  width: 65%;\n  height: 65%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.toys-tree-container .toy-for-tree .toy-count {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  right: 0;\n  bottom: 0;\n  width: 20px;\n  height: 20px;\n  border-top-left-radius: 50%;\n  background-color: crimson;\n  color: #fff;\n  font-size: 11px;\n}\n.toys-tree-container .toy-for-tree:hover {\n  box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\n}\n\n.hide {\n  display: none;\n}\n\n.garland {\n  display: none;\n  position: absolute;\n  bottom: -4%;\n  left: 50%;\n  transform: translateX(-50%);\n  --red: #ff2c2c;\n  --yellow: #ffeb00;\n  --green: #00ff5d;\n  --blue: #0095ff;\n  --speed: 2s;\n  z-index: 15;\n  pointer-events: none;\n}\n\n.red {\n  fill: #f80606;\n  -webkit-animation: var(--speed) alternate 0s infinite blinkRedRed;\n          animation: var(--speed) alternate 0s infinite blinkRedRed;\n}\n\n.red_1 {\n  fill: #f80606;\n  -webkit-animation: var(--speed) alternate 0s infinite blinkRed_1;\n          animation: var(--speed) alternate 0s infinite blinkRed_1;\n}\n\n.red_2 {\n  fill: #f7b1b1;\n  -webkit-animation: var(--speed) alternate 0s infinite blinkRed_2;\n          animation: var(--speed) alternate 0s infinite blinkRed_2;\n}\n\n.yellow {\n  fill: var(--yellow);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkYellow;\n          animation: var(--speed) alternate 0s infinite blinkYellow;\n}\n\n.yellow_1 {\n  fill: var(--yellow);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkYellow_1;\n          animation: var(--speed) alternate 0s infinite blinkYellow_1;\n}\n\n.yellow_2 {\n  fill: var(--yellow);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkYellow_2;\n          animation: var(--speed) alternate 0s infinite blinkYellow_2;\n}\n\n.blue {\n  fill: var(--blue);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkBlue;\n          animation: var(--speed) alternate 0s infinite blinkBlue;\n}\n\n.blue_1 {\n  fill: var(--blue);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkBlue_1;\n          animation: var(--speed) alternate 0s infinite blinkBlue_1;\n}\n\n.blue_2 {\n  fill: var(--blue);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkBlue_2;\n          animation: var(--speed) alternate 0s infinite blinkBlue_2;\n}\n\n.green {\n  fill: var(--green);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkGreen;\n          animation: var(--speed) alternate 0s infinite blinkGreen;\n}\n\n.green_1 {\n  fill: var(--green);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkGreen_1;\n          animation: var(--speed) alternate 0s infinite blinkGreen_1;\n}\n\n.green_2 {\n  fill: var(--green);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkGreen_2;\n          animation: var(--speed) alternate 0s infinite blinkGreen_2;\n}\n\n@-webkit-keyframes blinkRed {\n  0% {\n    fill: var(--red);\n  }\n  25% {\n    fill: var(--blue);\n  }\n  50% {\n    fill: var(--green);\n  }\n  75% {\n    fill: var(--yellow);\n  }\n}\n\n@keyframes blinkRed {\n  0% {\n    fill: var(--red);\n  }\n  25% {\n    fill: var(--blue);\n  }\n  50% {\n    fill: var(--green);\n  }\n  75% {\n    fill: var(--yellow);\n  }\n}\n@-webkit-keyframes blinkRed_1 {\n  0% {\n    fill: #f80606;\n  }\n  25% {\n    fill: #f7b1b1;\n  }\n  50% {\n    fill: #f80606;\n  }\n  75% {\n    fill: #f7b1b1;\n  }\n}\n@keyframes blinkRed_1 {\n  0% {\n    fill: #f80606;\n  }\n  25% {\n    fill: #f7b1b1;\n  }\n  50% {\n    fill: #f80606;\n  }\n  75% {\n    fill: #f7b1b1;\n  }\n}\n@-webkit-keyframes blinkRed_2 {\n  0% {\n    fill: #f7b1b1;\n  }\n  25% {\n    fill: #f80606;\n  }\n  50% {\n    fill: #f7b1b1;\n  }\n  75% {\n    fill: #f80606;\n  }\n}\n@keyframes blinkRed_2 {\n  0% {\n    fill: #f7b1b1;\n  }\n  25% {\n    fill: #f80606;\n  }\n  50% {\n    fill: #f7b1b1;\n  }\n  75% {\n    fill: #f80606;\n  }\n}\n@-webkit-keyframes blinkYellow {\n  0% {\n    fill: var(--yellow);\n  }\n  25% {\n    fill: var(--red);\n  }\n  50% {\n    fill: var(--blue);\n  }\n  75% {\n    fill: var(--green);\n  }\n}\n@keyframes blinkYellow {\n  0% {\n    fill: var(--yellow);\n  }\n  25% {\n    fill: var(--red);\n  }\n  50% {\n    fill: var(--blue);\n  }\n  75% {\n    fill: var(--green);\n  }\n}\n@-webkit-keyframes blinkYellow_1 {\n  0% {\n    fill: #ffd904;\n  }\n  25% {\n    fill: #f7f3cd;\n  }\n  50% {\n    fill: #ffd904;\n  }\n  75% {\n    fill: #f7f3cd;\n  }\n}\n@keyframes blinkYellow_1 {\n  0% {\n    fill: #ffd904;\n  }\n  25% {\n    fill: #f7f3cd;\n  }\n  50% {\n    fill: #ffd904;\n  }\n  75% {\n    fill: #f7f3cd;\n  }\n}\n@-webkit-keyframes blinkYellow_2 {\n  0% {\n    fill: #f7f3cd;\n  }\n  25% {\n    fill: #ffd904;\n  }\n  50% {\n    fill: #f7f3cd;\n  }\n  75% {\n    fill: #ffd904;\n  }\n}\n@keyframes blinkYellow_2 {\n  0% {\n    fill: #f7f3cd;\n  }\n  25% {\n    fill: #ffd904;\n  }\n  50% {\n    fill: #f7f3cd;\n  }\n  75% {\n    fill: #ffd904;\n  }\n}\n@-webkit-keyframes blinkBlue {\n  0% {\n    fill: var(--blue);\n  }\n  25% {\n    fill: var(--green);\n  }\n  50% {\n    fill: var(--yellow);\n  }\n  75% {\n    fill: var(--red);\n  }\n}\n@keyframes blinkBlue {\n  0% {\n    fill: var(--blue);\n  }\n  25% {\n    fill: var(--green);\n  }\n  50% {\n    fill: var(--yellow);\n  }\n  75% {\n    fill: var(--red);\n  }\n}\n@-webkit-keyframes blinkBlue_1 {\n  0% {\n    fill: #1100ff;\n  }\n  25% {\n    fill: #92cdf7;\n  }\n  50% {\n    fill: #1100ff;\n  }\n  75% {\n    fill: #92cdf7;\n  }\n}\n@keyframes blinkBlue_1 {\n  0% {\n    fill: #1100ff;\n  }\n  25% {\n    fill: #92cdf7;\n  }\n  50% {\n    fill: #1100ff;\n  }\n  75% {\n    fill: #92cdf7;\n  }\n}\n@-webkit-keyframes blinkBlue_2 {\n  0% {\n    fill: #92cdf7;\n  }\n  25% {\n    fill: #1100ff;\n  }\n  50% {\n    fill: #92cdf7;\n  }\n  75% {\n    fill: #1100ff;\n  }\n}\n@keyframes blinkBlue_2 {\n  0% {\n    fill: #92cdf7;\n  }\n  25% {\n    fill: #1100ff;\n  }\n  50% {\n    fill: #92cdf7;\n  }\n  75% {\n    fill: #1100ff;\n  }\n}\n@-webkit-keyframes blinkGreen {\n  0% {\n    fill: var(--green);\n  }\n  25% {\n    fill: var(--yellow);\n  }\n  50% {\n    fill: var(--red);\n  }\n  75% {\n    fill: var(--blue);\n  }\n}\n@keyframes blinkGreen {\n  0% {\n    fill: var(--green);\n  }\n  25% {\n    fill: var(--yellow);\n  }\n  50% {\n    fill: var(--red);\n  }\n  75% {\n    fill: var(--blue);\n  }\n}\n@-webkit-keyframes blinkGreen_1 {\n  0% {\n    fill: #28c700;\n  }\n  25% {\n    fill: #bcffd5;\n  }\n  50% {\n    fill: #28c700;\n  }\n  75% {\n    fill: #bcffd5;\n  }\n}\n@keyframes blinkGreen_1 {\n  0% {\n    fill: #28c700;\n  }\n  25% {\n    fill: #bcffd5;\n  }\n  50% {\n    fill: #28c700;\n  }\n  75% {\n    fill: #bcffd5;\n  }\n}\n@-webkit-keyframes blinkGreen_2 {\n  0% {\n    fill: #bcffd5;\n  }\n  25% {\n    fill: #28c700;\n  }\n  50% {\n    fill: #bcffd5;\n  }\n  75% {\n    fill: #28c700;\n  }\n}\n@keyframes blinkGreen_2 {\n  0% {\n    fill: #bcffd5;\n  }\n  25% {\n    fill: #28c700;\n  }\n  50% {\n    fill: #bcffd5;\n  }\n  75% {\n    fill: #28c700;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/_reset.scss","webpack://./src/styles/_fonts.scss","webpack://./src/styles/_start-page.scss","webpack://./src/styles/_toys.scss","webpack://./src/styles/_tree.scss"],"names":[],"mappings":"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F;AK56BA;EACE;IACE,aAAA;ELg6BF;EK95BA;IACE,aAAA;ELg6BF;EK95BA;IACE,aAAA;ELg6BF;EK95BA;IACE,aAAA;ELg6BF;AACF;AK75BA;EACE;IACE,mBAAA;EL+5BF;EK75BA;IACE,gBAAA;EL+5BF;EK75BA;IACE,iBAAA;EL+5BF;EK75BA;IACE,kBAAA;EL+5BF;AACF;AK36BA;EACE;IACE,mBAAA;EL+5BF;EK75BA;IACE,gBAAA;EL+5BF;EK75BA;IACE,iBAAA;EL+5BF;EK75BA;IACE,kBAAA;EL+5BF;AACF;AK55BA;EACE;IACE,aAAA;EL85BF;EK55BA;IACE,aAAA;EL85BF;EK55BA;IACE,aAAA;EL85BF;EK55BA;IACE,aAAA;EL85BF;AACF;AK16BA;EACE;IACE,aAAA;EL85BF;EK55BA;IACE,aAAA;EL85BF;EK55BA;IACE,aAAA;EL85BF;EK55BA;IACE,aAAA;EL85BF;AACF;AK35BA;EACE;IACE,aAAA;EL65BF;EK35BA;IACE,aAAA;EL65BF;EK35BA;IACE,aAAA;EL65BF;EK35BA;IACE,aAAA;EL65BF;AACF;AKz6BA;EACE;IACE,aAAA;EL65BF;EK35BA;IACE,aAAA;EL65BF;EK35BA;IACE,aAAA;EL65BF;EK35BA;IACE,aAAA;EL65BF;AACF;AK15BA;EACE;IACE,iBAAA;EL45BF;EK15BA;IACE,kBAAA;EL45BF;EK15BA;IACE,mBAAA;EL45BF;EK15BA;IACE,gBAAA;EL45BF;AACF;AKx6BA;EACE;IACE,iBAAA;EL45BF;EK15BA;IACE,kBAAA;EL45BF;EK15BA;IACE,mBAAA;EL45BF;EK15BA;IACE,gBAAA;EL45BF;AACF;AKz5BA;EACE;IACE,aAAA;EL25BF;EKz5BA;IACE,aAAA;EL25BF;EKz5BA;IACE,aAAA;EL25BF;EKz5BA;IACE,aAAA;EL25BF;AACF;AKv6BA;EACE;IACE,aAAA;EL25BF;EKz5BA;IACE,aAAA;EL25BF;EKz5BA;IACE,aAAA;EL25BF;EKz5BA;IACE,aAAA;EL25BF;AACF;AKx5BA;EACE;IACE,aAAA;EL05BF;EKx5BA;IACE,aAAA;EL05BF;EKx5BA;IACE,aAAA;EL05BF;EKx5BA;IACE,aAAA;EL05BF;AACF;AKt6BA;EACE;IACE,aAAA;EL05BF;EKx5BA;IACE,aAAA;EL05BF;EKx5BA;IACE,aAAA;EL05BF;EKx5BA;IACE,aAAA;EL05BF;AACF;AKv5BA;EACE;IACE,kBAAA;ELy5BF;EKv5BA;IACE,mBAAA;ELy5BF;EKv5BA;IACE,gBAAA;ELy5BF;EKv5BA;IACE,iBAAA;ELy5BF;AACF;AKr6BA;EACE;IACE,kBAAA;ELy5BF;EKv5BA;IACE,mBAAA;ELy5BF;EKv5BA;IACE,gBAAA;ELy5BF;EKv5BA;IACE,iBAAA;ELy5BF;AACF;AKt5BA;EACE;IACE,aAAA;ELw5BF;EKt5BA;IACE,aAAA;ELw5BF;EKt5BA;IACE,aAAA;ELw5BF;EKt5BA;IACE,aAAA;ELw5BF;AACF;AKp6BA;EACE;IACE,aAAA;ELw5BF;EKt5BA;IACE,aAAA;ELw5BF;EKt5BA;IACE,aAAA;ELw5BF;EKt5BA;IACE,aAAA;ELw5BF;AACF;AKr5BA;EACE;IACE,aAAA;ELu5BF;EKr5BA;IACE,aAAA;ELu5BF;EKr5BA;IACE,aAAA;ELu5BF;EKr5BA;IACE,aAAA;ELu5BF;AACF;AKn6BA;EACE;IACE,aAAA;ELu5BF;EKr5BA;IACE,aAAA;ELu5BF;EKr5BA;IACE,aAAA;ELu5BF;EKr5BA;IACE,aAAA;ELu5BF;AACF","sourcesContent":["@charset \"UTF-8\";\n/*Обнуление*/\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*, *:before, *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:focus, :active {\n  outline: none;\n}\n\na:focus, a:active {\n  outline: none;\n}\n\nnav, footer, header, aside {\n  display: block;\n}\n\nhtml, body {\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  font-size: 10px;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\ninput, button, textarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na, a:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: 400;\n}\n\n/*--------------------*/\n@font-face {\n  font-family: \"Neucha-Regular\";\n  src: url(\"../assets/fonts/Neucha-Regular.ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Steppe\";\n  src: url(\"../assets/fonts/Steppe.ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\nheader {\n  width: 100vw;\n  height: 50px;\n  background-color: #192f2d;\n}\n\n.header-container {\n  display: flex;\n  align-items: center;\n  column-gap: 30px;\n  padding-top: 5px;\n}\n.header-container .logo {\n  width: 30px;\n  height: 40px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/tree.svg);\n  cursor: pointer;\n}\n.header-container .logo:hover {\n  background: top 0 left 0/100% 100% url(../assets/images/svg/tree-active.svg);\n  transform: scale(1.05);\n}\n.header-container .page {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.header-container .page:hover {\n  color: #009688;\n  transform: scale(1.05);\n}\n\nmain {\n  position: relative;\n  width: 100vw;\n  height: calc(100vh - 150px);\n  background: top 0 left 0/100% 100% url(../assets/images/bg.jpg);\n}\n\n.start-game {\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper {\n  width: calc(100% - 100px);\n  height: 100%;\n  margin: 0 auto;\n}\n\n.start-game .toys-circle-left {\n  position: absolute;\n  top: 0;\n  left: 20%;\n  width: 21.771vw;\n  padding-bottom: 39.886%;\n  background: top 0 left 0/100% 100% url(../assets/images/1.png);\n}\n.start-game .toys-circle-right {\n  position: absolute;\n  top: 10%;\n  right: 28%;\n  width: 12.771vw;\n  padding-bottom: 23.334%;\n  background: top 0 left 0/100% 100% url(../assets/images/2.png);\n}\n.start-game .title-conteiner h1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: inline-flex;\n  padding: 67px 85px;\n  font-family: \"Neucha-Regular\", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 53px;\n  line-height: 58px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n  letter-spacing: 0.05em;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n}\n.start-game .start {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 320px;\n  height: 54px;\n  top: 70%;\n  left: 50%;\n  font-family: \"Steppe\";\n  font-size: 24px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  transform: translateX(-50%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.start-game .start:hover {\n  opacity: 80%;\n}\n\nfooter {\n  width: 100vw;\n  height: 100px;\n  background-color: #192f2d;\n}\n\n.footer-container {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n.footer-container .left-element p {\n  font-family: \"Steppe\";\n  font-size: 18px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  opacity: 70%;\n}\n.footer-container .left-element p span {\n  margin-left: 20px;\n}\n.footer-container .right-element a {\n  display: block;\n  width: 180px;\n  height: 60px;\n  background: top 0 left 0/100% 100% url(../assets/images/rs_school_js.png);\n}\n\n.hide {\n  display: none;\n}\n\n@media (max-width: 1024px) {\n  .wrapper {\n    width: calc(100% - 40px);\n    height: 100%;\n    margin: 0 auto;\n  }\n}\n.toys {\n  width: 100%;\n  height: 100%;\n}\n\n.toys-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 450px 1fr;\n  grid-template-rows: 1fr;\n  column-gap: 10px;\n}\n\n.filter-conteiner {\n  overflow: hidden;\n}\n\n.filter-container-wrapper {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.filter-container-wrapper::-webkit-scrollbar {\n  width: 6px;\n}\n\n.filter-container-wrapper::-webkit-scrollbar-track {\n  background: none;\n}\n\n.filter-container-wrapper::-webkit-scrollbar-thumb {\n  border-radius: 6px;\n}\n\n.filter-container-content {\n  margin-right: 10px;\n  padding: 10px;\n}\n\n.settings {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin: 20px 0;\n}\n.settings .audio {\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/audio.svg);\n}\n.settings .audio:hover {\n  opacity: 75%;\n}\n.settings .snow {\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/snow.svg);\n}\n.settings .snow:hover {\n  opacity: 75%;\n}\n.settings .search {\n  position: relative;\n}\n.settings .search .search-item {\n  width: 260px;\n  height: 36px;\n  padding: 0 50px 0 20px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #fff;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n  border: 1px solid #03a9f4;\n}\n.settings .clean-icon {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/close.svg);\n}\n.settings .search-icon:hover {\n  opacity: 75%;\n}\n\n.sort {\n  display: flex;\n  column-gap: 40px;\n  align-items: center;\n}\n.sort p {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.sort .sort-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 270px;\n  height: 36px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n  border: 1px solid #03a9f4;\n  z-index: 5;\n}\n.sort .sort-container p {\n  font-size: 16px;\n  text-transform: none;\n  padding-left: 20px;\n}\n.sort .sort-container .choose-item {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  width: 30px;\n  height: 20px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/arrow-down.svg);\n}\n.sort .sort-container .choose-item:hover {\n  opacity: 75%;\n}\n.sort .sort-container .all-item {\n  position: absolute;\n  width: 90%;\n  left: 5%;\n  top: 110%;\n  border-radius: 6px;\n  border: 1px solid #2196f3;\n  background-color: #3e5857;\n}\n.sort .sort-container .all-item .sort-item {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #fff;\n  padding: 10px;\n  cursor: pointer;\n}\n.sort .sort-container .all-item .sort-item:hover {\n  background-color: #669396;\n}\n\n.sort-category {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.sort-category .category-container {\n  width: 24px;\n  height: 24px;\n  text-transform: none;\n}\n.sort-category .category-container .all {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.sort-category .category-container .all::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.sort-category .category-container .all:checked::before {\n  opacity: 1;\n}\n\n.toys-form {\n  margin: 20px 0;\n}\n.toys-form h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.toys-form .form-container {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.toys-form .form-container .form-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.toys-form .form-container .form-item .form-icon {\n  margin-bottom: 15px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.toys-form .form-container .form-item .form-icon:hover {\n  opacity: 85%;\n  transform: scale(1.1);\n}\n.toys-form .form-container .form-item .form-icon__active {\n  filter: invert(54%) sepia(107%) saturate(901%) hue-rotate(25deg) brightness(140%) contrast(93%);\n}\n.toys-form .form-container .form-item .icon-1 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/bell.svg);\n}\n.toys-form .form-container .form-item .icon-2 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/ball.svg);\n}\n.toys-form .form-container .form-item .icon-3 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/cone.svg);\n}\n.toys-form .form-container .form-item .icon-4 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/snowflake.svg);\n}\n.toys-form .form-container .form-item .icon-5 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% no-repeat url(../assets/images/svg/snow.svg);\n}\n.toys-form .form-container .form-item .icon-6 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/toy.svg);\n}\n.toys-form .form-container .form-item .icon-name {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  color: #fff;\n}\n\n/*Slider*/\nmain .noUi-target {\n  background: #fafafa;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;\n  border: none;\n  cursor: pointer;\n}\n\nmain .noUi-horizontal {\n  height: 2px;\n}\n\nmain .noUi-handle:before,\n.noUi-handle:after {\n  content: none;\n  display: none !important;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  background: #e8e7e6;\n  left: 14px;\n  top: 6px;\n}\n\nmain .noUi-horizontal .noUi-handle {\n  width: 15px;\n  height: 15px;\n  right: -13px;\n  top: -6px;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), radial-gradient(57.23% 248.2% at 107.17% 104.02%, rgba(34, 153, 235, 0.92) 0%, rgba(34, 153, 235, 0.07) 100%), radial-gradient(104.22% 230.94% at -4.22% 0%, #24c5db 3.62%, rgba(36, 197, 219, 0.26) 55.1%);\n  border-radius: 50%;\n  box-shadow: none;\n  border: none;\n  cursor: pointer;\n}\n\nmain .noUi-connect {\n  background: #24c5db;\n}\n\nmain .noUi-base,\n.noUi-connects {\n  width: 97%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\nmain .noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: none;\n  border-radius: none;\n  background: none;\n  color: #fff;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 14px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n}\n\n#range-year .noUi-tooltip {\n  left: 50%;\n}\n\n#range-year {\n  margin-top: 40px;\n}\n\n/*Slider-END*/\n.count-copy {\n  position: relative;\n  margin: 20px 0;\n}\n.count-copy h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.count-copy .count-copy-item {\n  margin-top: 40px;\n}\n.count-copy .min {\n  position: absolute;\n  top: 125%;\n  left: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n.count-copy .max {\n  position: absolute;\n  top: 125%;\n  right: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n\n.year-purchase {\n  position: relative;\n  margin: 40px 0 20px 0;\n}\n.year-purchase h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.year-purchase .year-purchase-item {\n  margin-top: 35px;\n}\n.year-purchase .min {\n  position: absolute;\n  top: 125%;\n  left: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n.year-purchase .max {\n  position: absolute;\n  top: 125%;\n  right: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n\n.color {\n  margin: 40px 0 20px 0;\n}\n.color h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.color .color-container {\n  display: flex;\n  column-gap: 25px;\n  margin-top: 15px;\n}\n.color .color-container .color-item {\n  width: 25px;\n  height: 25px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.color .color-container .color-item:hover {\n  opacity: 75%;\n}\n.color .color-container .color-item__active {\n  box-shadow: 0px 0px 6px 2px rgba(253, 215, 0, 0.8);\n}\n.color .color-container .item-1 {\n  background: #ffffff;\n}\n.color .color-container .item-2 {\n  background: #fdd700;\n}\n.color .color-container .item-3 {\n  background: #fd0000;\n}\n.color .color-container .item-4 {\n  background: #2299eb;\n}\n.color .color-container .item-5 {\n  background: #08aa05;\n}\n\n.size {\n  margin: 20px 0;\n}\n.size h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.size .size-container {\n  display: flex;\n  margin-top: 15px;\n  justify-content: space-between;\n}\n.size .size-container .container-item {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.size .size-container .size-item {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.size .size-container .size-item::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.size .size-container .size-item:checked::before {\n  opacity: 1;\n}\n\n.favorite {\n  margin: 20px 0;\n}\n.favorite .container-favorite {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.favorite .container-favorite .favorite-item {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.favorite .container-favorite .favorite-item::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.favorite .container-favorite .favorite-item:checked::before {\n  opacity: 1;\n}\n\n.sucsses {\n  display: flex;\n  margin: 25px 0;\n  justify-content: center;\n  column-gap: 40px;\n}\n.sucsses .apply-btn {\n  width: 180px;\n  height: 30px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.sucsses .apply-btn:hover {\n  opacity: 75%;\n}\n\n.toys-collection-container {\n  overflow: hidden;\n}\n.toys-collection-container .title {\n  display: flex;\n  column-gap: 50px;\n}\n.toys-collection-container .title h2 {\n  margin: 20px 0 20px 50px;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.toys-collection-container .collection-container {\n  position: relative;\n  height: calc(100% - 48px);\n  overflow: scroll;\n}\n.toys-collection-container .collection-container .message {\n  display: none;\n  width: 270px;\n  border-radius: 6px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .message .message-item {\n  padding: 30px;\n  background: rgba(67, 104, 106, 0.7);\n  color: #fafafa;\n  font-size: 20px;\n}\n.toys-collection-container .collection-container .collection-container-wrapper {\n  display: flex;\n  column-gap: 25px;\n  row-gap: 25px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-right: 10px;\n}\n.toys-collection-container .collection-container .container-content {\n  width: 225px;\n  padding: 10px;\n  margin: 10px 0 50px 0;\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  border: rgba(121, 139, 144, 0.1) solid 5px;\n  backdrop-filter: blur(4px);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .container-content h4 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.toys-collection-container .collection-container .container-content .icon-toy-container {\n  margin-top: 15px;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n.toys-collection-container .collection-container .container-content .icon-toy-container .icon-toy {\n  width: 110px;\n  height: 110px;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .container-content .data-toy {\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n.toys-collection-container .collection-container .container-content .data-toy li {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  color: #ffffff;\n}\n.toys-collection-container .collection-container .active-toy {\n  box-sizing: border-box;\n  border: #4caf50 solid 5px;\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(70, 109, 114, 0.4) 100%);\n  box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\n}\n.toys-collection-container .collection-container .container-content:hover {\n  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.7);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(179, 246, 255, 0.4) 100%);\n}\n.toys-collection-container .collection-container .container-content:hover .icon-toy-container .icon-toy {\n  transform: scale(1.1);\n}\n.toys-collection-container .collection-container .active-toy:hover {\n  box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\n}\n.toys-collection-container .collection-container .message_active {\n  display: block;\n  opacity: 1;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar {\n  width: 12px;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar-track {\n  background: none;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar-thumb {\n  background-color: #43686a;\n  border-radius: 6px;\n}\n\n.christmas-tree {\n  width: 100%;\n  height: 100%;\n}\n\n.christmas-tree-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2.3fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.settings-tree {\n  background: rgba(25, 47, 45, 0.7);\n  padding: 10px;\n  overflow: hidden;\n}\n\n.settings-container {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.settings-container::-webkit-scrollbar {\n  width: 6px;\n}\n\n.settings-container::-webkit-scrollbar-track {\n  background: none;\n}\n\n.settings-container::-webkit-scrollbar-thumb {\n  border-radius: 6px;\n}\n\n.settings-tree-page {\n  justify-content: center;\n  column-gap: 50px;\n}\n\n.christmas-tree-collection h2 {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.christmas-tree-collection .collection-continer {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  column-gap: 10px;\n  row-gap: 10px;\n}\n.christmas-tree-collection .collection-continer .conteiner-content {\n  padding-bottom: 100%;\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  backdrop-filter: blur(4px);\n  border-radius: 10px;\n  transition: 0.3s;\n  border: #172a29 2px solid;\n  cursor: pointer;\n}\n.christmas-tree-collection .collection-continer .conteiner-content .conteiner-item {\n  position: absolute;\n  width: 80%;\n  height: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-1 {\n  background: top 0 left 0/100% 100% url(../assets/images/tree/1.png);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-2 {\n  background: top 0 left 0/100% 100% url(../assets/images/tree/2.png);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-3 {\n  background: top 0 left 0/100% 100% url(../assets/images/tree/3.png);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-4 {\n  background: top 0 left 0/100% 100% url(../assets/images/tree/4.png);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-5 {\n  background: top 0 left 0/100% 100% url(../assets/images/tree/5.png);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-6 {\n  background: top 0 left 0/100% 100% url(../assets/images/tree/6.png);\n}\n.christmas-tree-collection .collection-continer .conteiner-content:hover {\n  box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\n}\n.christmas-tree-background h2 {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.christmas-tree-background .background-continer {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  column-gap: 10px;\n  row-gap: 10px;\n}\n.christmas-tree-background .background-continer .conteiner-content-bg {\n  padding-bottom: 100%;\n  border-radius: 9px;\n  border: #172a29 2px solid;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.christmas-tree-background .background-continer .conteiner-content-bg:hover {\n  box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\n}\n.christmas-tree-background .background-continer .bg-1 {\n  background: url(../assets/images/bg/1.jpg);\n}\n.christmas-tree-background .background-continer .bg-2 {\n  background: url(../assets/images/bg/2.jpg);\n}\n.christmas-tree-background .background-continer .bg-3 {\n  background: url(../assets/images/bg/3.jpg);\n}\n.christmas-tree-background .background-continer .bg-4 {\n  background: url(../assets/images/bg/4.jpg);\n}\n.christmas-tree-background .background-continer .bg-5 {\n  background: url(../assets/images/bg/5.jpg);\n}\n.christmas-tree-background .background-continer .bg-6 {\n  background: url(../assets/images/bg/6.jpg);\n}\n.christmas-tree-background .background-continer .bg-7 {\n  background: url(../assets/images/bg/7.jpg);\n}\n.christmas-tree-background .background-continer .bg-8 {\n  background: url(../assets/images/bg/8.jpg);\n}\n.christmas-tree-background .background-continer .bg-9 {\n  background: url(../assets/images/bg/9.jpg);\n}\n.christmas-tree-background .background-continer .bg-10 {\n  background: url(../assets/images/bg/10.jpg);\n}\n.christmas-tree-background .background-continer .conteiner-content-bg__active {\n  border: #03a9f4 2px solid;\n}\n\n.christmas-tree-garland h2 {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.christmas-tree-garland .garland-conteiner {\n  display: flex;\n  justify-content: space-around;\n}\n.christmas-tree-garland .garland-conteiner .garland-container-item {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: 0.3s;\n  opacity: 0.5;\n}\n.christmas-tree-garland .garland-conteiner .garland-1 {\n  background: linear-gradient(45deg, #dd0d0d, #e5f210, #0ae511);\n  box-shadow: 0px 0px 10px 2px rgba(251, 251, 251, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-1:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #fbfbfb;\n}\n.christmas-tree-garland .garland-conteiner .garland-2 {\n  background: linear-gradient(45deg, #f60707, #cc4c3f, #df7048);\n  box-shadow: 0px 0px 10px 2px rgba(255, 1, 1, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-2:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #ff0101;\n}\n.christmas-tree-garland .garland-conteiner .garland-3 {\n  background: linear-gradient(45deg, #0f00ff, #252ac3, #1b0d6f);\n  box-shadow: 0px 0px 10px 2px rgba(11, 60, 247, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-3:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #0b3cf7;\n}\n.christmas-tree-garland .garland-conteiner .garland-4 {\n  background: linear-gradient(45deg, #0fff00, #25c32a, #0d6f37);\n  box-shadow: 0px 0px 10px 2px rgba(35, 247, 11, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-4:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #23f70b;\n}\n.christmas-tree-garland .garland-conteiner .garland-5 {\n  background: linear-gradient(45deg, #e5ff00, #b3c325, #6f6c0d);\n  box-shadow: 0px 0px 10px 2px rgba(215, 227, 16, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-5:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #d7e310;\n}\n.christmas-tree-garland .garland-conteiner .garland-item__active {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #fbfbfb;\n}\n.christmas-tree-garland .garland-conteiner .switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n}\n.christmas-tree-garland .garland-conteiner .switch input {\n  display: none;\n}\n.christmas-tree-garland .garland-conteiner .switch .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.christmas-tree-garland .garland-conteiner .switch .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 13px;\n  width: 13px;\n  left: 4px;\n  bottom: 4px;\n  background-color: #f6d209;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.christmas-tree-garland .garland-conteiner .switch input:checked + .slider {\n  background-color: #0e6a62;\n}\n.christmas-tree-garland .garland-conteiner .switch input:focus + .slider {\n  box-shadow: 0 0 1px #0e6a62;\n}\n.christmas-tree-garland .garland-conteiner .switch input:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  -ms-transform: translateX(20px);\n  transform: translateX(20px);\n}\n.christmas-tree-garland .garland-conteiner .switch .slider.round {\n  border-radius: 34px;\n}\n.christmas-tree-garland .garland-conteiner .switch .slider.round:before {\n  border-radius: 50%;\n}\n\n.main-tree {\n  height: calc(100vh - 150px);\n  position: relative;\n}\n.main-tree .christmas-bg-current {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: center/cover url(../assets/images/bg/1.jpg);\n}\n.main-tree .christmas-tree-carrent {\n  position: absolute;\n  bottom: 1%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 300px;\n  height: 450px;\n  z-index: 10;\n}\n\n.toys-tree {\n  background: rgba(25, 47, 45, 0.7);\n}\n.toys-tree .title h2 {\n  margin: 20px 0 20px 50px;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.toys-tree-container {\n  display: grid;\n  padding: 5px;\n  width: 100%;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  column-gap: 5px;\n  row-gap: 5px;\n}\n.toys-tree-container .toy-for-tree {\n  position: relative;\n  padding-bottom: 100%;\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  backdrop-filter: blur(4px);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  transition: 0.3s;\n  cursor: pointer;\n  border: #172a29 2px solid;\n}\n.toys-tree-container .toy-for-tree .toy-icon {\n  position: absolute;\n  width: 65%;\n  height: 65%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.toys-tree-container .toy-for-tree .toy-count {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  right: 0;\n  bottom: 0;\n  width: 20px;\n  height: 20px;\n  border-top-left-radius: 50%;\n  background-color: crimson;\n  color: #fff;\n  font-size: 11px;\n}\n.toys-tree-container .toy-for-tree:hover {\n  box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\n}\n\n.hide {\n  display: none;\n}\n\n.garland {\n  display: none;\n  position: absolute;\n  bottom: -4%;\n  left: 50%;\n  transform: translateX(-50%);\n  --red: #ff2c2c;\n  --yellow: #ffeb00;\n  --green: #00ff5d;\n  --blue: #0095ff;\n  --speed: 2s;\n  z-index: 15;\n  pointer-events: none;\n}\n\n.red {\n  fill: #f80606;\n  animation: var(--speed) alternate 0s infinite blinkRedRed;\n}\n\n.red_1 {\n  fill: #f80606;\n  animation: var(--speed) alternate 0s infinite blinkRed_1;\n}\n\n.red_2 {\n  fill: #f7b1b1;\n  animation: var(--speed) alternate 0s infinite blinkRed_2;\n}\n\n.yellow {\n  fill: var(--yellow);\n  animation: var(--speed) alternate 0s infinite blinkYellow;\n}\n\n.yellow_1 {\n  fill: var(--yellow);\n  animation: var(--speed) alternate 0s infinite blinkYellow_1;\n}\n\n.yellow_2 {\n  fill: var(--yellow);\n  animation: var(--speed) alternate 0s infinite blinkYellow_2;\n}\n\n.blue {\n  fill: var(--blue);\n  animation: var(--speed) alternate 0s infinite blinkBlue;\n}\n\n.blue_1 {\n  fill: var(--blue);\n  animation: var(--speed) alternate 0s infinite blinkBlue_1;\n}\n\n.blue_2 {\n  fill: var(--blue);\n  animation: var(--speed) alternate 0s infinite blinkBlue_2;\n}\n\n.green {\n  fill: var(--green);\n  animation: var(--speed) alternate 0s infinite blinkGreen;\n}\n\n.green_1 {\n  fill: var(--green);\n  animation: var(--speed) alternate 0s infinite blinkGreen_1;\n}\n\n.green_2 {\n  fill: var(--green);\n  animation: var(--speed) alternate 0s infinite blinkGreen_2;\n}\n\n@keyframes blinkRed {\n  0% {\n    fill: var(--red);\n  }\n  25% {\n    fill: var(--blue);\n  }\n  50% {\n    fill: var(--green);\n  }\n  75% {\n    fill: var(--yellow);\n  }\n}\n@keyframes blinkRed_1 {\n  0% {\n    fill: #f80606;\n  }\n  25% {\n    fill: #f7b1b1;\n  }\n  50% {\n    fill: #f80606;\n  }\n  75% {\n    fill: #f7b1b1;\n  }\n}\n@keyframes blinkRed_2 {\n  0% {\n    fill: #f7b1b1;\n  }\n  25% {\n    fill: #f80606;\n  }\n  50% {\n    fill: #f7b1b1;\n  }\n  75% {\n    fill: #f80606;\n  }\n}\n@keyframes blinkYellow {\n  0% {\n    fill: var(--yellow);\n  }\n  25% {\n    fill: var(--red);\n  }\n  50% {\n    fill: var(--blue);\n  }\n  75% {\n    fill: var(--green);\n  }\n}\n@keyframes blinkYellow_1 {\n  0% {\n    fill: #ffd904;\n  }\n  25% {\n    fill: #f7f3cd;\n  }\n  50% {\n    fill: #ffd904;\n  }\n  75% {\n    fill: #f7f3cd;\n  }\n}\n@keyframes blinkYellow_2 {\n  0% {\n    fill: #f7f3cd;\n  }\n  25% {\n    fill: #ffd904;\n  }\n  50% {\n    fill: #f7f3cd;\n  }\n  75% {\n    fill: #ffd904;\n  }\n}\n@keyframes blinkBlue {\n  0% {\n    fill: var(--blue);\n  }\n  25% {\n    fill: var(--green);\n  }\n  50% {\n    fill: var(--yellow);\n  }\n  75% {\n    fill: var(--red);\n  }\n}\n@keyframes blinkBlue_1 {\n  0% {\n    fill: #1100ff;\n  }\n  25% {\n    fill: #92cdf7;\n  }\n  50% {\n    fill: #1100ff;\n  }\n  75% {\n    fill: #92cdf7;\n  }\n}\n@keyframes blinkBlue_2 {\n  0% {\n    fill: #92cdf7;\n  }\n  25% {\n    fill: #1100ff;\n  }\n  50% {\n    fill: #92cdf7;\n  }\n  75% {\n    fill: #1100ff;\n  }\n}\n@keyframes blinkGreen {\n  0% {\n    fill: var(--green);\n  }\n  25% {\n    fill: var(--yellow);\n  }\n  50% {\n    fill: var(--red);\n  }\n  75% {\n    fill: var(--blue);\n  }\n}\n@keyframes blinkGreen_1 {\n  0% {\n    fill: #28c700;\n  }\n  25% {\n    fill: #bcffd5;\n  }\n  50% {\n    fill: #28c700;\n  }\n  75% {\n    fill: #bcffd5;\n  }\n}\n@keyframes blinkGreen_2 {\n  0% {\n    fill: #bcffd5;\n  }\n  25% {\n    fill: #28c700;\n  }\n  50% {\n    fill: #bcffd5;\n  }\n  75% {\n    fill: #28c700;\n  }\n}","/*Обнуление*/\r\n*{\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n}\r\n*,*:before,*:after{\r\n\t-moz-box-sizing: border-box;\r\n\t-webkit-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,:active{outline: none;}\r\na:focus,a:active{outline: none;}\r\nnav,footer,header,aside{display: block;}\r\nhtml,body{\r\n\t// height: 100%;\r\n\twidth: 100%;\r\n\tfont-size: 100%;\r\n\tline-height: 1;\r\n\tfont-size: 10px;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n}\r\ninput,button,textarea{font-family:inherit;}\r\ninput::-ms-clear{display: none;}\r\nbutton{cursor: pointer;}\r\nbutton::-moz-focus-inner {padding:0;border:0;}\r\na, a:visited{text-decoration: none;}\r\na:hover{text-decoration: none;}\r\nul li{list-style: none;}\r\nimg{vertical-align: top;}\r\nh1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}\r\n/*--------------------*/","@font-face {\r\n  font-family: 'Neucha-Regular';\r\n  src: url('../assets/fonts/Neucha-Regular.ttf');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Steppe';\r\n  src: url('../assets/fonts/Steppe.ttf');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n","header {\r\n  width: 100vw;\r\n  height: 50px;\r\n  background-color: #192f2d;\r\n}\r\n\r\n.header-container {\r\n  display: flex;\r\n  align-items: center;\r\n  column-gap: 30px;\r\n  padding-top: 5px;\r\n  .logo {\r\n    width: 30px;\r\n    height: 40px;\r\n    transition: 0.3s;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/svg/tree.svg);\r\n    cursor: pointer;\r\n  }\r\n\r\n  .logo:hover {\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/svg/tree-active.svg);\r\n    transform: scale(1.05);\r\n  }\r\n\r\n  .page {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 25px;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .page:hover {\r\n    color: #009688;\r\n    transform: scale(1.05);\r\n  }\r\n}\r\n\r\nmain {\r\n  position: relative;\r\n  width: 100vw;\r\n  height: calc(100vh - 150px);\r\n  background: top 0 left 0 / 100% 100% url(../assets/images/bg.jpg);\r\n}\r\n\r\n.start-game {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n// .main-container {\r\n//   background: #192f2d;\r\n// }\r\n\r\n.wrapper {\r\n  width: calc(100% - 100px);\r\n  height: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.start-game {\r\n  .toys-circle-left {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 20%;\r\n    width: 21.771vw;\r\n    padding-bottom: 39.886%;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/1.png);\r\n  }\r\n\r\n  .toys-circle-right {\r\n    position: absolute;\r\n    top: 10%;\r\n    right: 28%;\r\n    width: 12.771vw;\r\n    padding-bottom: 23.334%;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/2.png);\r\n  }\r\n\r\n  .title-conteiner {\r\n    h1 {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      display: inline-flex;\r\n      padding: 67px 85px;\r\n      font-family: 'Neucha-Regular', sans-serif;\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 53px;\r\n      line-height: 58px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      color: #fff;\r\n      letter-spacing: 0.05em;\r\n      background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 30px;\r\n    }\r\n  }\r\n\r\n  .start {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 320px;\r\n    height: 54px;\r\n    top: 70%;\r\n    left: 50%;\r\n    font-family: 'Steppe';\r\n    font-size: 24px;\r\n    color: #fff;\r\n    letter-spacing: 0.05em;\r\n    transform: translateX(-50%);\r\n    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\r\n    backdrop-filter: blur(31px);\r\n    border-radius: 30px;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .start:hover {\r\n    opacity: 80%;\r\n  }\r\n}\r\n\r\nfooter {\r\n  width: 100vw;\r\n  height: 100px;\r\n  background-color: #192f2d;\r\n}\r\n\r\n.footer-container {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  .left-element {\r\n    p {\r\n      font-family: 'Steppe';\r\n      font-size: 18px;\r\n      color: #fff;\r\n      letter-spacing: 0.05em;\r\n      opacity: 70%;\r\n      span {\r\n        margin-left: 20px;\r\n      }\r\n    }\r\n  }\r\n  .right-element {\r\n    a {\r\n      display: block;\r\n      width: 180px;\r\n      height: 60px;\r\n      background: top 0 left 0 / 100% 100% url(../assets/images/rs_school_js.png);\r\n    }\r\n  }\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .wrapper {\r\n    width: calc(100% - 40px);\r\n    height: 100%;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n",".toys {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.toys-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: 450px 1fr;\r\n  grid-template-rows: 1fr;\r\n  column-gap: 10px;\r\n}\r\n\r\n.filter-conteiner {\r\n  overflow: hidden;\r\n}\r\n\r\n.filter-container-wrapper {\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.filter-container-wrapper::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.filter-container-wrapper::-webkit-scrollbar-track {\r\n  background: none;\r\n}\r\n\r\n.filter-container-wrapper::-webkit-scrollbar-thumb {\r\n  border-radius: 6px;\r\n}\r\n\r\n.filter-container-content {\r\n  margin-right: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.settings {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  margin: 20px 0;\r\n  .audio {\r\n    width: 36px;\r\n    height: 36px;\r\n    transition: 00.3s;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/svg/audio.svg);\r\n  }\r\n  .audio:hover {\r\n    opacity: 75%;\r\n  }\r\n\r\n  .snow {\r\n    width: 36px;\r\n    height: 36px;\r\n    transition: 00.3s;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/svg/snow.svg);\r\n  }\r\n  .snow:hover {\r\n    opacity: 75%;\r\n  }\r\n\r\n  .search {\r\n    position: relative;\r\n    .search-item {\r\n      width: 260px;\r\n      height: 36px;\r\n      padding: 0 50px 0 20px;\r\n      font-family: 'Steppe';\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 14px;\r\n      letter-spacing: 0.05em;\r\n      color: #fff;\r\n      background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 30px;\r\n      border: 1px solid #03a9f4;\r\n    }\r\n  }\r\n  .clean-icon {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 15px;\r\n    transform: translateY(-50%);\r\n    width: 15px;\r\n    height: 15px;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/svg/close.svg);\r\n  }\r\n  .search-icon:hover {\r\n    opacity: 75%;\r\n  }\r\n}\r\n\r\n.sort {\r\n  display: flex;\r\n  column-gap: 40px;\r\n  align-items: center;\r\n  p {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n  }\r\n\r\n  .sort-container {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    width: 270px;\r\n    height: 36px;\r\n    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\r\n    backdrop-filter: blur(31px);\r\n    border-radius: 30px;\r\n    border: 1px solid #03a9f4;\r\n    z-index: 5;\r\n    p {\r\n      font-size: 16px;\r\n      text-transform: none;\r\n      padding-left: 20px;\r\n    }\r\n\r\n    .choose-item {\r\n      position: absolute;\r\n      top: 50%;\r\n      right: 15px;\r\n      transform: translateY(-50%);\r\n      width: 30px;\r\n      height: 20px;\r\n      transition: 00.3s;\r\n      background: top 0 left 0 / 100% 100% url(../assets/images/svg/arrow-down.svg);\r\n    }\r\n    .choose-item:hover {\r\n      opacity: 75%;\r\n    }\r\n\r\n    .all-item {\r\n      position: absolute;\r\n      width: 90%;\r\n      left: 5%;\r\n      top: 110%;\r\n      border-radius: 6px;\r\n      border: 1px solid #2196f3;\r\n      background-color: #3e5857;\r\n      .sort-item {\r\n        font-family: 'Neucha-Regular';\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        font-size: 14px;\r\n        letter-spacing: 0.05em;\r\n        color: #fff;\r\n        padding: 10px;\r\n        cursor: pointer;\r\n      }\r\n\r\n      .sort-item:hover {\r\n        background-color: #669396;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.sort-category {\r\n  margin: 20px 0;\r\n  font-family: 'Neucha-Regular';\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 18px;\r\n  letter-spacing: 0.05em;\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n  .category-container {\r\n    width: 24px;\r\n    height: 24px;\r\n    text-transform: none;\r\n    .all {\r\n      -webkit-appearance: none;\r\n      -moz-appearance: none;\r\n      appearance: none;\r\n      border: 1px solid #d6d6cd;\r\n      width: 25px;\r\n      height: 25px;\r\n      margin-right: 15px;\r\n      cursor: pointer;\r\n      position: relative;\r\n      top: 7px;\r\n      background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 5px;\r\n    }\r\n    .all::before {\r\n      content: '🗸';\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n      position: absolute;\r\n      right: 50%;\r\n      bottom: 50%;\r\n      transform: translate(50%, 50%);\r\n      opacity: 0;\r\n      transition: 0.1s ease-in;\r\n    }\r\n    .all:checked::before {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n.toys-form {\r\n  margin: 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n\r\n  .form-container {\r\n    margin-top: 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    .form-item {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      .form-icon {\r\n        margin-bottom: 15px;\r\n        transition: 0.3s;\r\n        cursor: pointer;\r\n      }\r\n      .form-icon:hover {\r\n        opacity: 85%;\r\n        transform: scale(1.1);\r\n      }\r\n      .form-icon__active {\r\n        filter: invert(54%) sepia(107%) saturate(901%) hue-rotate(25deg) brightness(140%) contrast(93%);\r\n      }\r\n\r\n      .icon-1 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/bell.svg);\r\n      }\r\n      .icon-2 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/ball.svg);\r\n      }\r\n      .icon-3 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/cone.svg);\r\n      }\r\n      .icon-4 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/snowflake.svg);\r\n      }\r\n      .icon-5 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% no-repeat url(../assets/images/svg/snow.svg);\r\n      }\r\n      .icon-6 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/toy.svg);\r\n      }\r\n\r\n      .icon-name {\r\n        font-family: 'Steppe';\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        font-size: 12px;\r\n        line-height: 14px;\r\n        text-align: center;\r\n        color: #fff;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/*Slider*/\r\n\r\nmain .noUi-target {\r\n  background: #fafafa;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nmain .noUi-horizontal {\r\n  height: 2px;\r\n}\r\n\r\nmain .noUi-handle:before,\r\n.noUi-handle:after {\r\n  content: none;\r\n  display: none !important;\r\n  position: absolute;\r\n  height: 0px;\r\n  width: 0px;\r\n  background: #e8e7e6;\r\n  left: 14px;\r\n  top: 6px;\r\n}\r\n\r\nmain .noUi-horizontal .noUi-handle {\r\n  width: 15px;\r\n  height: 15px;\r\n  right: -13px;\r\n  top: -6px;\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),\r\n    radial-gradient(57.23% 248.2% at 107.17% 104.02%, rgba(34, 153, 235, 0.92) 0%, rgba(34, 153, 235, 0.07) 100%),\r\n    radial-gradient(104.22% 230.94% at -4.22% 0%, #24c5db 3.62%, rgba(36, 197, 219, 0.26) 55.1%);\r\n  border-radius: 50%;\r\n  box-shadow: none;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nmain .noUi-connect {\r\n  background: #24c5db;\r\n}\r\n\r\nmain .noUi-base,\r\n.noUi-connects {\r\n  width: 97%;\r\n  height: 100%;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\nmain .noUi-tooltip {\r\n  display: block;\r\n  position: absolute;\r\n  border: none;\r\n  border-radius: none;\r\n  background: none;\r\n  color: #fff;\r\n  padding: 5px;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  font-size: 14px;\r\n  font-family: 'Steppe';\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n#range-year .noUi-tooltip {\r\n  left: 50%;\r\n}\r\n\r\n#range-year {\r\n  margin-top: 40px;\r\n}\r\n\r\n/*Slider-END*/\r\n\r\n.count-copy {\r\n  position: relative;\r\n  margin: 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n  .count-copy-item {\r\n    margin-top: 40px;\r\n  }\r\n\r\n  .min {\r\n    position: absolute;\r\n    top: 125%;\r\n    left: 0;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.05em;\r\n    color: #ffffff;\r\n  }\r\n  .max {\r\n    position: absolute;\r\n    top: 125%;\r\n    right: 0;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.05em;\r\n    color: #ffffff;\r\n  }\r\n}\r\n\r\n.year-purchase {\r\n  position: relative;\r\n  margin: 40px 0 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n  .year-purchase-item {\r\n    margin-top: 35px;\r\n  }\r\n\r\n  .min {\r\n    position: absolute;\r\n    top: 125%;\r\n    left: 0;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.05em;\r\n    color: #ffffff;\r\n  }\r\n  .max {\r\n    position: absolute;\r\n    top: 125%;\r\n    right: 0;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.05em;\r\n    color: #ffffff;\r\n  }\r\n}\r\n\r\n.color {\r\n  margin: 40px 0 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n\r\n  .color-container {\r\n    display: flex;\r\n    column-gap: 25px;\r\n    margin-top: 15px;\r\n    .color-item {\r\n      width: 25px;\r\n      height: 25px;\r\n      border-radius: 5px;\r\n      cursor: pointer;\r\n      transition: 0.3s;\r\n    }\r\n    .color-item:hover {\r\n      opacity: 75%;\r\n    }\r\n\r\n    .color-item__active {\r\n      box-shadow: 0px 0px 6px 2px rgba(253, 215, 0, 0.8);\r\n    }\r\n    .item-1 {\r\n      background: #ffffff;\r\n    }\r\n    .item-2 {\r\n      background: #fdd700;\r\n    }\r\n    .item-3 {\r\n      background: #fd0000;\r\n    }\r\n    .item-4 {\r\n      background: #2299eb;\r\n    }\r\n    .item-5 {\r\n      background: #08aa05;\r\n    }\r\n  }\r\n}\r\n\r\n.size {\r\n  margin: 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n\r\n  .size-container {\r\n    display: flex;\r\n    margin-top: 15px;\r\n    justify-content: space-between;\r\n    .container-item {\r\n      font-family: 'Steppe';\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 14px;\r\n      letter-spacing: 0.02em;\r\n      text-align: center;\r\n      color: #ffffff;\r\n    }\r\n\r\n    .size-item {\r\n      -webkit-appearance: none;\r\n      -moz-appearance: none;\r\n      appearance: none;\r\n      border: 1px solid #d6d6cd;\r\n      width: 25px;\r\n      height: 25px;\r\n      margin-right: 15px;\r\n      cursor: pointer;\r\n      position: relative;\r\n      top: 7px;\r\n      background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 5px;\r\n    }\r\n    .size-item::before {\r\n      content: '🗸';\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n      position: absolute;\r\n      right: 50%;\r\n      bottom: 50%;\r\n      transform: translate(50%, 50%);\r\n      opacity: 0;\r\n      transition: 0.1s ease-in;\r\n    }\r\n    .size-item:checked::before {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n.favorite {\r\n  margin: 20px 0;\r\n  .container-favorite {\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.02em;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    .favorite-item {\r\n      -webkit-appearance: none;\r\n      -moz-appearance: none;\r\n      appearance: none;\r\n      border: 1px solid #d6d6cd;\r\n      width: 25px;\r\n      height: 25px;\r\n      margin-right: 15px;\r\n      cursor: pointer;\r\n      position: relative;\r\n      top: 7px;\r\n      background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 5px;\r\n    }\r\n    .favorite-item::before {\r\n      content: '🗸';\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n      position: absolute;\r\n      right: 50%;\r\n      bottom: 50%;\r\n      transform: translate(50%, 50%);\r\n      opacity: 0;\r\n      transition: 0.1s ease-in;\r\n    }\r\n    .favorite-item:checked::before {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n.sucsses {\r\n  display: flex;\r\n  margin: 25px 0;\r\n  justify-content: center;\r\n  column-gap: 40px;\r\n  .apply-btn {\r\n    width: 180px;\r\n    height: 30px;\r\n    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\r\n    backdrop-filter: blur(31px);\r\n    border-radius: 30px;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 12px;\r\n    letter-spacing: 0.02em;\r\n    text-align: center;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .apply-btn:hover {\r\n    opacity: 75%;\r\n  }\r\n}\r\n\r\n.toys-collection-container {\r\n  overflow: hidden;\r\n  .title {\r\n    display: flex;\r\n    column-gap: 50px;\r\n    h2 {\r\n      margin: 20px 0 20px 50px;\r\n      font-family: 'Neucha-Regular';\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 25px;\r\n      letter-spacing: 0.05em;\r\n      text-transform: uppercase;\r\n      color: #fff;\r\n      transition: 0.3s;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n  .collection-container {\r\n    position: relative;\r\n    height: calc(100% - 48px);\r\n    overflow: scroll;\r\n\r\n    .message {\r\n      display: none;\r\n      width: 270px;\r\n      border-radius: 6px;\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      transform: translate(-50%, -50%);\r\n      opacity: 0;\r\n      transition: 0.5s;\r\n      .message-item {\r\n        padding: 30px;\r\n        background: rgba(67, 104, 106, 0.7);\r\n        color: #fafafa;\r\n        font-size: 20px;\r\n      }\r\n    }\r\n    .collection-container-wrapper {\r\n      display: flex;\r\n      column-gap: 25px;\r\n      row-gap: 25px;\r\n      flex-wrap: wrap;\r\n      justify-content: center;\r\n      margin-right: 10px;\r\n    }\r\n    .container-content {\r\n      width: 225px;\r\n      padding: 10px;\r\n      margin: 10px 0 50px 0;\r\n      background: radial-gradient(\r\n        109.56% 109.56% at 0% -2.94%,\r\n        rgba(255, 255, 255, 0.5) 0%,\r\n        rgba(179, 246, 255, 0.5) 100%\r\n      );\r\n      border: rgba(121, 139, 144, 0.1) solid 5px;\r\n      backdrop-filter: blur(4px);\r\n      border-radius: 10px;\r\n      cursor: pointer;\r\n      transition: 0.5s;\r\n      h4 {\r\n        font-family: 'Neucha-Regular';\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        font-size: 16px;\r\n        letter-spacing: 0.05em;\r\n        color: #fff;\r\n      }\r\n      .icon-toy-container {\r\n        margin-top: 15px;\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: center;\r\n        .icon-toy {\r\n          width: 110px;\r\n          height: 110px;\r\n          transition: 0.5s;\r\n        }\r\n      }\r\n      .data-toy {\r\n        margin-top: 15px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        row-gap: 10px;\r\n        li {\r\n          font-family: 'Steppe';\r\n          font-style: normal;\r\n          font-weight: normal;\r\n          font-size: 14px;\r\n          letter-spacing: 0.02em;\r\n          color: #ffffff;\r\n        }\r\n      }\r\n    }\r\n\r\n    .active-toy {\r\n      box-sizing: border-box;\r\n      // padding: 5px 5px;\r\n      border: #4caf50 solid 5px;\r\n      background: radial-gradient(\r\n        109.56% 109.56% at 0% -2.94%,\r\n        rgba(255, 255, 255, 0.4) 0%,\r\n        rgba(70, 109, 114, 0.4) 100%\r\n      );\r\n      box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\r\n    }\r\n\r\n    .container-content:hover {\r\n      box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.7);\r\n      background: radial-gradient(\r\n        109.56% 109.56% at 0% -2.94%,\r\n        rgba(255, 255, 255, 0.4) 0%,\r\n        rgba(179, 246, 255, 0.4) 100%\r\n      );\r\n      .icon-toy-container {\r\n        .icon-toy {\r\n          transform: scale(1.1);\r\n        }\r\n      }\r\n    }\r\n    .active-toy:hover {\r\n      box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\r\n    }\r\n\r\n    .message_active {\r\n      display: block;\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  .collection-container::-webkit-scrollbar {\r\n    width: 12px;\r\n  }\r\n\r\n  .collection-container::-webkit-scrollbar-track {\r\n    background: none;\r\n  }\r\n\r\n  .collection-container::-webkit-scrollbar-thumb {\r\n    background-color: #43686a;\r\n    border-radius: 6px;\r\n  }\r\n}\r\n",".christmas-tree {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.christmas-tree-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 2.3fr 1fr;\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n.settings-tree {\r\n  background: rgba(25, 47, 45, 0.7);\r\n  padding: 10px;\r\n  overflow: hidden;\r\n}\r\n\r\n.settings-container {\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.settings-container::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.settings-container::-webkit-scrollbar-track {\r\n  background: none;\r\n}\r\n\r\n.settings-container::-webkit-scrollbar-thumb {\r\n  border-radius: 6px;\r\n}\r\n\r\n.settings-tree-page {\r\n  justify-content: center;\r\n  column-gap: 50px;\r\n}\r\n\r\n.christmas-tree-collection {\r\n  h2 {\r\n    margin: 20px 0;\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n  }\r\n  .collection-continer {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    column-gap: 10px;\r\n    row-gap: 10px;\r\n    .conteiner-content {\r\n      padding-bottom: 100%;\r\n      background: radial-gradient(\r\n        109.56% 109.56% at 0% -2.94%,\r\n        rgba(255, 255, 255, 0.5) 0%,\r\n        rgba(179, 246, 255, 0.5) 100%\r\n      );\r\n      backdrop-filter: blur(4px);\r\n      border-radius: 10px;\r\n      transition: 0.3s;\r\n      border: rgb(23 42 41) 2px solid;\r\n      cursor: pointer;\r\n      .conteiner-item {\r\n        position: absolute;\r\n        width: 80%;\r\n        height: 80%;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n      }\r\n\r\n      .tree-1 {\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/tree/1.png);\r\n      }\r\n      .tree-2 {\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/tree/2.png);\r\n      }\r\n      .tree-3 {\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/tree/3.png);\r\n      }\r\n      .tree-4 {\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/tree/4.png);\r\n      }\r\n      .tree-5 {\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/tree/5.png);\r\n      }\r\n      .tree-6 {\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/tree/6.png);\r\n      }\r\n    }\r\n\r\n    .conteiner-content:hover {\r\n      box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\r\n    }\r\n\r\n    .conteiner-content__active {\r\n    }\r\n  }\r\n}\r\n\r\n.christmas-tree-background {\r\n  h2 {\r\n    margin: 20px 0;\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n  }\r\n  .background-continer {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    column-gap: 10px;\r\n    row-gap: 10px;\r\n    .conteiner-content-bg {\r\n      padding-bottom: 100%;\r\n      border-radius: 9px;\r\n      border: rgb(23 42 41) 2px solid;\r\n      transition: 0.3s;\r\n      cursor: pointer;\r\n    }\r\n\r\n    .conteiner-content-bg:hover {\r\n      box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\r\n    }\r\n\r\n    .bg-1 {\r\n      background: url(../assets/images/bg/1.jpg);\r\n    }\r\n    .bg-2 {\r\n      background: url(../assets/images/bg/2.jpg);\r\n    }\r\n    .bg-3 {\r\n      background: url(../assets/images/bg/3.jpg);\r\n    }\r\n    .bg-4 {\r\n      background: url(../assets/images/bg/4.jpg);\r\n    }\r\n    .bg-5 {\r\n      background: url(../assets/images/bg/5.jpg);\r\n    }\r\n    .bg-6 {\r\n      background: url(../assets/images/bg/6.jpg);\r\n    }\r\n    .bg-7 {\r\n      background: url(../assets/images/bg/7.jpg);\r\n    }\r\n    .bg-8 {\r\n      background: url(../assets/images/bg/8.jpg);\r\n    }\r\n    .bg-9 {\r\n      background: url(../assets/images/bg/9.jpg);\r\n    }\r\n    .bg-10 {\r\n      background: url(../assets/images/bg/10.jpg);\r\n    }\r\n\r\n    .conteiner-content-bg__active {\r\n      border: #03a9f4 2px solid;\r\n    }\r\n  }\r\n}\r\n\r\n.christmas-tree-garland {\r\n  h2 {\r\n    margin: 20px 0;\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n  }\r\n  .garland-conteiner {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    .garland-container-item {\r\n      width: 20px;\r\n      height: 20px;\r\n      border-radius: 50%;\r\n      cursor: pointer;\r\n      transition: 0.3s;\r\n      opacity: 0.5;\r\n    }\r\n\r\n    .garland-1 {\r\n      background: linear-gradient(45deg, rgb(221, 13, 13), rgb(229, 242, 16), rgb(10, 229, 17));\r\n      box-shadow: 0px 0px 10px 2px rgba(251, 251, 251, 0.3);\r\n    }\r\n    .garland-1:hover {\r\n      opacity: 1;\r\n      box-shadow: 0px 0px 15px 2px rgba(251, 251, 251, 1);\r\n    }\r\n    .garland-2 {\r\n      background: linear-gradient(45deg, rgb(246, 7, 7), rgb(204, 76, 63), rgb(223, 112, 72));\r\n      box-shadow: 0px 0px 10px 2px rgba(255, 1, 1, 0.3);\r\n    }\r\n    .garland-2:hover {\r\n      opacity: 1;\r\n      box-shadow: 0px 0px 15px 2px rgb(255, 1, 1);\r\n    }\r\n    .garland-3 {\r\n      background: linear-gradient(45deg, rgb(15, 0, 255), rgb(37, 42, 195), rgb(27, 13, 111));\r\n      box-shadow: 0px 0px 10px 2px rgba(11, 60, 247, 0.3);\r\n    }\r\n    .garland-3:hover {\r\n      opacity: 1;\r\n      box-shadow: 0px 0px 15px 2px rgba(11, 60, 247, 1);\r\n    }\r\n    .garland-4 {\r\n      background: linear-gradient(45deg, rgb(15, 255, 0), rgb(37, 195, 42), rgb(13, 111, 55));\r\n      box-shadow: 0px 0px 10px 2px rgba(35, 247, 11, 0.3);\r\n    }\r\n    .garland-4:hover {\r\n      opacity: 1;\r\n      box-shadow: 0px 0px 15px 2px rgba(35, 247, 11, 1);\r\n    }\r\n    .garland-5 {\r\n      background: linear-gradient(45deg, rgb(229, 255, 0), rgb(179, 195, 37), rgb(111, 108, 13));\r\n      box-shadow: 0px 0px 10px 2px rgba(215, 227, 16, 0.3);\r\n    }\r\n    .garland-5:hover {\r\n      opacity: 1;\r\n      box-shadow: 0px 0px 15px 2px rgba(215, 227, 16, 1);\r\n    }\r\n\r\n    .garland-item__active {\r\n      opacity: 1;\r\n      box-shadow: 0px 0px 15px 2px rgba(251, 251, 251, 1);\r\n    }\r\n\r\n    .switch {\r\n      position: relative;\r\n      display: inline-block;\r\n      width: 40px;\r\n      height: 20px;\r\n      input {\r\n        display: none;\r\n      }\r\n\r\n      .slider {\r\n        position: absolute;\r\n        cursor: pointer;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        background-color: #ccc;\r\n        -webkit-transition: 0.4s;\r\n        transition: 0.4s;\r\n      }\r\n\r\n      .slider:before {\r\n        position: absolute;\r\n        content: '';\r\n        height: 13px;\r\n        width: 13px;\r\n        left: 4px;\r\n        bottom: 4px;\r\n        background-color: #f6d209;\r\n        -webkit-transition: 0.4s;\r\n        transition: 0.4s;\r\n      }\r\n\r\n      input:checked + .slider {\r\n        background-color: #0e6a62;\r\n      }\r\n\r\n      input:focus + .slider {\r\n        box-shadow: 0 0 1px #0e6a62;\r\n      }\r\n\r\n      input:checked + .slider:before {\r\n        -webkit-transform: translateX(20px);\r\n        -ms-transform: translateX(20px);\r\n        transform: translateX(20px);\r\n      }\r\n\r\n      .slider.round {\r\n        border-radius: 34px;\r\n      }\r\n\r\n      .slider.round:before {\r\n        border-radius: 50%;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.main-tree {\r\n  height: calc(100vh - 150px);\r\n  position: relative;\r\n  .christmas-bg-current {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: center / cover url(../assets/images/bg/1.jpg);\r\n  }\r\n\r\n  .christmas-tree-carrent {\r\n    position: absolute;\r\n    bottom: 1%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 300px;\r\n    height: 450px;\r\n    z-index: 10;\r\n  }\r\n}\r\n\r\n.toys-tree {\r\n  background: rgba(25, 47, 45, 0.7);\r\n  .title {\r\n    h2 {\r\n      margin: 20px 0 20px 50px;\r\n      font-family: 'Neucha-Regular';\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 25px;\r\n      letter-spacing: 0.05em;\r\n      text-transform: uppercase;\r\n      color: #fff;\r\n      transition: 0.3s;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n}\r\n\r\n.toys-tree-container {\r\n  display: grid;\r\n  padding: 5px;\r\n  width: 100%;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-template-rows: repeat(5, 1fr);\r\n  column-gap: 5px;\r\n  row-gap: 5px;\r\n  .toy-for-tree {\r\n    position: relative;\r\n    padding-bottom: 100%;\r\n    background: radial-gradient(\r\n      109.56% 109.56% at 0% -2.94%,\r\n      rgba(255, 255, 255, 0.5) 0%,\r\n      rgba(179, 246, 255, 0.5) 100%\r\n    );\r\n    backdrop-filter: blur(4px);\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    border-bottom-left-radius: 10px;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n    border: rgb(23 42 41) 2px solid;\r\n    .toy-icon {\r\n      position: absolute;\r\n      width: 65%;\r\n      height: 65%;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n    }\r\n\r\n    .toy-count {\r\n      position: absolute;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      right: 0;\r\n      bottom: 0;\r\n      width: 20px;\r\n      height: 20px;\r\n      border-top-left-radius: 50%;\r\n      background-color: crimson;\r\n      color: #fff;\r\n      font-size: 11px;\r\n    }\r\n  }\r\n\r\n  .toy-for-tree:hover {\r\n    box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\r\n  }\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.garland {\r\n  display: none;\r\n  position: absolute;\r\n  bottom: -4%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  --red: #ff2c2c;\r\n  --yellow: #ffeb00;\r\n  --green: #00ff5d;\r\n  --blue: #0095ff;\r\n  --speed: 2s;\r\n  z-index: 15;\r\n  pointer-events: none;\r\n}\r\n\r\n.red {\r\n  fill: #f80606;\r\n  animation: var(--speed) alternate 0s infinite blinkRedRed;\r\n}\r\n\r\n.red_1 {\r\n  fill: #f80606;\r\n  animation: var(--speed) alternate 0s infinite blinkRed_1;\r\n}\r\n.red_2 {\r\n  fill: #f7b1b1;\r\n  animation: var(--speed) alternate 0s infinite blinkRed_2;\r\n}\r\n\r\n.yellow {\r\n  fill: var(--yellow);\r\n  animation: var(--speed) alternate 0s infinite blinkYellow;\r\n}\r\n\r\n.yellow_1 {\r\n  fill: var(--yellow);\r\n  animation: var(--speed) alternate 0s infinite blinkYellow_1;\r\n}\r\n\r\n.yellow_2 {\r\n  fill: var(--yellow);\r\n  animation: var(--speed) alternate 0s infinite blinkYellow_2;\r\n}\r\n\r\n.blue {\r\n  fill: var(--blue);\r\n  animation: var(--speed) alternate 0s infinite blinkBlue;\r\n}\r\n\r\n.blue_1 {\r\n  fill: var(--blue);\r\n  animation: var(--speed) alternate 0s infinite blinkBlue_1;\r\n}\r\n\r\n.blue_2 {\r\n  fill: var(--blue);\r\n  animation: var(--speed) alternate 0s infinite blinkBlue_2;\r\n}\r\n\r\n.green {\r\n  fill: var(--green);\r\n  animation: var(--speed) alternate 0s infinite blinkGreen;\r\n}\r\n\r\n.green_1 {\r\n  fill: var(--green);\r\n  animation: var(--speed) alternate 0s infinite blinkGreen_1;\r\n}\r\n\r\n.green_2 {\r\n  fill: var(--green);\r\n  animation: var(--speed) alternate 0s infinite blinkGreen_2;\r\n}\r\n\r\n@keyframes blinkRed {\r\n  0% {\r\n    fill: var(--red);\r\n  }\r\n  25% {\r\n    fill: var(--blue);\r\n  }\r\n  50% {\r\n    fill: var(--green);\r\n  }\r\n  75% {\r\n    fill: var(--yellow);\r\n  }\r\n}\r\n\r\n@keyframes blinkRed_1 {\r\n  0% {\r\n    fill: #f80606;\r\n  }\r\n  25% {\r\n    fill: #f7b1b1;\r\n  }\r\n  50% {\r\n    fill: #f80606;\r\n  }\r\n  75% {\r\n    fill: #f7b1b1;\r\n  }\r\n}\r\n\r\n@keyframes blinkRed_2 {\r\n  0% {\r\n    fill: #f7b1b1;\r\n  }\r\n  25% {\r\n    fill: #f80606;\r\n  }\r\n  50% {\r\n    fill: #f7b1b1;\r\n  }\r\n  75% {\r\n    fill: #f80606;\r\n  }\r\n}\r\n\r\n@keyframes blinkYellow {\r\n  0% {\r\n    fill: var(--yellow);\r\n  }\r\n  25% {\r\n    fill: var(--red);\r\n  }\r\n  50% {\r\n    fill: var(--blue);\r\n  }\r\n  75% {\r\n    fill: var(--green);\r\n  }\r\n}\r\n\r\n@keyframes blinkYellow_1 {\r\n  0% {\r\n    fill: #ffd904;\r\n  }\r\n  25% {\r\n    fill: #f7f3cd;\r\n  }\r\n  50% {\r\n    fill: #ffd904;\r\n  }\r\n  75% {\r\n    fill: #f7f3cd;\r\n  }\r\n}\r\n\r\n@keyframes blinkYellow_2 {\r\n  0% {\r\n    fill: #f7f3cd;\r\n  }\r\n  25% {\r\n    fill: #ffd904;\r\n  }\r\n  50% {\r\n    fill: #f7f3cd;\r\n  }\r\n  75% {\r\n    fill: #ffd904;\r\n  }\r\n}\r\n\r\n@keyframes blinkBlue {\r\n  0% {\r\n    fill: var(--blue);\r\n  }\r\n  25% {\r\n    fill: var(--green);\r\n  }\r\n  50% {\r\n    fill: var(--yellow);\r\n  }\r\n  75% {\r\n    fill: var(--red);\r\n  }\r\n}\r\n\r\n@keyframes blinkBlue_1 {\r\n  0% {\r\n    fill: #1100ff;\r\n  }\r\n  25% {\r\n    fill: #92cdf7;\r\n  }\r\n  50% {\r\n    fill: #1100ff;\r\n  }\r\n  75% {\r\n    fill: #92cdf7;\r\n  }\r\n}\r\n\r\n@keyframes blinkBlue_2 {\r\n  0% {\r\n    fill: #92cdf7;\r\n  }\r\n  25% {\r\n    fill: #1100ff;\r\n  }\r\n  50% {\r\n    fill: #92cdf7;\r\n  }\r\n  75% {\r\n    fill: #1100ff;\r\n  }\r\n}\r\n\r\n@keyframes blinkGreen {\r\n  0% {\r\n    fill: var(--green);\r\n  }\r\n  25% {\r\n    fill: var(--yellow);\r\n  }\r\n  50% {\r\n    fill: var(--red);\r\n  }\r\n  75% {\r\n    fill: var(--blue);\r\n  }\r\n}\r\n\r\n@keyframes blinkGreen_1 {\r\n  0% {\r\n    fill: #28c700;\r\n  }\r\n  25% {\r\n    fill: #bcffd5;\r\n  }\r\n  50% {\r\n    fill: #28c700;\r\n  }\r\n  75% {\r\n    fill: #bcffd5;\r\n  }\r\n}\r\n\r\n@keyframes blinkGreen_2 {\r\n  0% {\r\n    fill: #bcffd5;\r\n  }\r\n  25% {\r\n    fill: #28c700;\r\n  }\r\n  50% {\r\n    fill: #bcffd5;\r\n  }\r\n  75% {\r\n    fill: #28c700;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/noUiSlider/dist/nouislider.js":
/*!****************************************************!*\
  !*** ./node_modules/noUiSlider/dist/nouislider.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
}(this, (function (exports) { 'use strict';

    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                }
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2]
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1]
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j]
                }
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria"
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes }
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [
            ["left", "top"],
            ["right", "bottom"]
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                }
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            to = scope_Spectrum.getStep(to);
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips"
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports['default'] = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.css":
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../sass-loader/dist/cjs.js!./nouislider.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
class App {
    constructor(id) {
        this.$el = document.getElementById(id);
        this.init();
    }
    init() { }
    hide() {
        this.$el.classList.add('hide');
    }
    show() {
        this.$el.classList.remove('hide');
    }
}
exports.App = App;


/***/ }),

/***/ "./src/components/christmas-tree.component.ts":
/*!****************************************************!*\
  !*** ./src/components/christmas-tree.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChristmasTree = void 0;
const app_1 = __webpack_require__(/*! ../app/app */ "./src/app/app.ts");
const __1 = __webpack_require__(/*! .. */ "./src/index.ts");
const garland_component_1 = __webpack_require__(/*! ./garland.component */ "./src/components/garland.component.ts");
class ChristmasTree extends app_1.App {
    constructor(id) {
        super(id);
        this.count = 0;
        this.allDataToys;
        this.leaveFlag;
        this.garland = new garland_component_1.Garland;
    }
    init() {
        const toys = document.getElementById('toys-page');
        const tree = document.getElementById('tree-page');
        const area = document.querySelector('.area');
        const startPage = document.getElementById('start-page');
        const garlandBtn = document.querySelector('.switch input');
        garlandBtn.addEventListener('input', this.garlandBtnOn.bind(this));
        startPage.addEventListener('click', this.openStartPage.bind(this));
        tree.addEventListener('click', this.openChristmasTreePage.bind(this));
        toys.addEventListener('click', this.openToysPages.bind(this));
        this.$el.addEventListener('click', this.addBackground.bind(this));
        this.$el.addEventListener('click', this.addTree.bind(this));
        this.$el.addEventListener('dragstart', this.startDrag);
        this.$el.addEventListener('dragend', this.endDrag.bind(this));
        this.$el.addEventListener('dragenter', this.enterDrag.bind(this));
        this.$el.addEventListener('click', this.garlandOn.bind(this));
        area.addEventListener('dragleave', this.dragLeave.bind(this));
        area.addEventListener('dragover', this.dragOver.bind(this));
        area.addEventListener('drop', this.drop.bind(this));
    }
    dragLeave(event) {
        const tree = document.getElementById('tree');
        this.leaveFlag = false;
    }
    enterDrag(event) {
        const tree = document.getElementById('tree');
    }
    drop(event) {
        event.preventDefault();
        const data1 = event.dataTransfer.getData('elemDrag1');
        const data2 = event.dataTransfer.getData('elemDrag2');
        const toyElement2 = document.querySelector(`.toy-on-tree[data-active="${data2}"]`);
        if (data2) {
            // const toyElement2: HTMLDivElement = document.querySelector(`.toy-on-tree[data-active="${data2}"]`);
            toyElement2.style.position = 'absolute';
            toyElement2.style.width = '30px';
            toyElement2.style.height = '30px';
            event.target.appendChild(toyElement2);
            moveAt(event.offsetX, event.offsetY, toyElement2);
            console.log('drop');
        }
        if (data1) {
            const elemCount = document.querySelector(`[data-itemcount="${data1}"]`);
            const elemToy = document.querySelector(`[data-itemtoy="${data1}"]`);
            const currentCount = +elemCount.textContent;
            if (elemCount.textContent !== '0') {
                elemCount.textContent = `${currentCount - 1}`;
            }
            if (elemCount.textContent === '0') {
                elemToy.style.display = 'none';
            }
            const toyElement1 = document.createElement('div');
            toyElement1.classList.add('toy-on-tree');
            toyElement1.setAttribute('draggable', 'true');
            toyElement1.setAttribute('data-active', `${this.count}`);
            toyElement1.setAttribute('data-toycount', `${data1}`);
            toyElement1.style.position = 'absolute';
            toyElement1.style.width = '35px';
            toyElement1.style.height = '35px';
            toyElement1.style.zIndex = '100';
            toyElement1.style.background = `top 0 left 0 / 100% 100% url(./assets/images/toys/${data1}.png)`;
            event.target.appendChild(toyElement1);
            moveAt(event.offsetX, event.offsetY, toyElement1);
            this.count++;
        }
        function moveAt(pageX, pageY, element) {
            element.style.left = pageX - element.offsetWidth / 2 + 'px';
            element.style.top = pageY - element.offsetHeight / 2 + 'px';
        }
    }
    dragOver(event) {
        event.preventDefault();
        this.leaveFlag = true;
    }
    startDrag(event) {
        const dragElement1 = event.target.closest('.toy-icon');
        const dragElement2 = event.target.closest('.toy-on-tree');
        if (dragElement1) {
            event.dataTransfer.setData('elemDrag1', `${dragElement1.dataset.itemtoy}`);
            dragElement1.classList.add('selected');
        }
        if (dragElement2) {
            event.dataTransfer.setData('elemDrag2', `${dragElement2.dataset.active}`);
        }
    }
    endDrag(event) {
        const dragElement = event.target.closest('.toy-on-tree');
        const upItem = document.querySelector(`[data-itemcount="${dragElement.dataset.toycount}"]`);
        const elemCount = document.querySelector(`[data-itemtoy="${dragElement.dataset.toycount}"]`);
        console.log(elemCount);
        if (dragElement) {
            if (!this.leaveFlag) {
                dragElement.remove();
                upItem.textContent = `${+upItem.textContent + 1}`;
                elemCount.style.display = 'block';
            }
        }
    }
    getAllDataToys() {
        return __awaiter(this, void 0, void 0, function* () {
            this.allDataToys = yield __1.toys.getData();
            return this.allDataToys;
        });
    }
    drawCurrentdataToys() {
        return __awaiter(this, void 0, void 0, function* () {
            const allData = yield __1.toys.getData();
            const currentData = [];
            const activeToys = this.getActiveData();
            allData.forEach((element, index) => {
                if (activeToys.includes(allData[index].num)) {
                    currentData.push(element);
                }
            });
            const activeToy = document.querySelectorAll('.toy-for-tree');
            if (activeToy) {
                activeToy.forEach(element => {
                    element.remove();
                });
            }
            let activeData;
            if (currentData.length === 0) {
                console.log(this.allDataToys);
                activeData = this.allDataToys.slice(0, 20);
            }
            else {
                activeData = currentData;
            }
            const toysTreeContainer = document.querySelector('.toys-tree-container');
            for (let i = 0; i < activeData.length; i++) {
                const toy = document.createElement('div');
                toy.classList.add('toy-for-tree');
                toy.setAttribute('data-treeToy', `${activeData[i].name}`);
                toy.innerHTML = `
        <div class="toy-icon icon${i}" draggable="true" data-itemToy="${activeData[i].num}"></div>
        <div class="toy-count" data-itemcount="${activeData[i].num}">${activeData[i].count}</div>
      `;
                toysTreeContainer.append(toy);
                const iconToy = document.querySelector(`.icon${i}`);
                iconToy.style.background = `top 0 left 0 / 100% 100% url(./assets/images/toys/${activeData[i].num}.png)`;
            }
        });
    }
    getActiveData() {
        const toys = document.querySelectorAll('.container-content');
        const activeToys = [];
        toys.forEach(element => {
            if (element.classList.contains('active-toy')) {
                activeToys.push(element.getAttribute('data-set'));
            }
        });
        return activeToys;
    }
    addBackground() {
        var _a;
        const bgContainers = event.target.closest('.conteiner-content-bg');
        const currentBg = (_a = bgContainers) === null || _a === void 0 ? void 0 : _a.dataset.bg;
        if (currentBg) {
            this.addActiveItem(currentBg, bgContainers, 'christmas-bg-current', 'conteiner-content-bg', 'conteiner-content-bg__active');
        }
    }
    addTree() {
        var _a;
        const treeContainers = event.target.closest('.conteiner-item');
        const currentTree = (_a = treeContainers) === null || _a === void 0 ? void 0 : _a.dataset.tree;
        if (currentTree) {
            this.addActiveItem(currentTree, treeContainers, 'christmas-tree-carrent', 'conteiner-item', 'conteiner-content__active');
        }
    }
    addActiveItem(data, className, currentItem, allItems, activeItem) {
        const currentElem = document.querySelector(`.${currentItem}`);
        const allElem = document.querySelectorAll(`.${allItems}`);
        allElem.forEach(element => {
            element.classList.remove(`${activeItem}`);
        });
        className.classList.add(`${activeItem}`);
        if (currentElem.classList.contains('christmas-tree-carrent')) {
            currentElem.setAttribute('src', `./assets/images/tree/${data}.png`);
        }
        if (currentElem.classList.contains('christmas-bg-current')) {
            currentElem.style.background = `center / cover url(./assets/images/bg/${data}.jpg)`;
        }
    }
    garlandBtnOn() {
        const garlandBtn = document.querySelector('.switch input');
        const garland = document.querySelector('.garland');
        const redGarland = document.querySelector('.garland-2');
        if (garlandBtn.checked) {
            garland.style.display = 'block';
            redGarland.classList.add('garland-item__active');
        }
        else {
            garland.style.display = 'none';
            this.cleanGarlandActiveClass();
        }
    }
    garlandOn() {
        const garlands = event.target.closest('.garland-container-item');
        const garlandItem = garlands.dataset.garland;
        console.log(garlandItem);
        if (garlands) {
            this.cleanGarlandActiveClass();
            switch (garlandItem) {
                case 'red':
                    this.garland.addColorGarland('red_1', 'red_2');
                    garlands.classList.toggle('garland-item__active');
                    break;
                case 'blue':
                    this.garland.addColorGarland('blue_1', 'blue_2');
                    garlands.classList.toggle('garland-item__active');
                    break;
                case 'yellow':
                    this.garland.addColorGarland('yellow_1', 'yellow_2');
                    garlands.classList.toggle('garland-item__active');
                    break;
                case 'green':
                    this.garland.addColorGarland('green_1', 'green_2');
                    garlands.classList.toggle('garland-item__active');
                    break;
                case 'all':
                    this.garland.addAllColorGarland('green', 'yellow', 'red', 'blue');
                    garlands.classList.toggle('garland-item__active');
                    break;
            }
        }
    }
    cleanGarlandActiveClass() {
        const garlands = document.querySelectorAll('.garland-container-item');
        garlands.forEach(element => {
            element.classList.remove('garland-item__active');
        });
    }
    openToysPages() {
        this.hide();
    }
    openChristmasTreePage() {
        this.show();
        this.getAllDataToys();
        this.drawCurrentdataToys();
    }
    openStartPage() {
        this.hide();
    }
}
exports.ChristmasTree = ChristmasTree;


/***/ }),

/***/ "./src/components/favorite-toys.component.ts":
/*!***************************************************!*\
  !*** ./src/components/favorite-toys.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FavoriteToys = void 0;
const toys_component_1 = __webpack_require__(/*! ./toys.component */ "./src/components/toys.component.ts");
class FavoriteToys extends toys_component_1.Toys {
    constructor(id) {
        super(id);
        this.count = 0;
        this.activeToys = [];
    }
    init() {
        const start = document.querySelector('.start');
        start.addEventListener('click', this.buttonHandler.bind(this));
        this.$el.addEventListener('click', this.addFavoriteToys.bind(this));
    }
    addFavoriteToys() {
        var _a;
        const target = event.target.closest('.container-content');
        const currentTarget = (_a = target) === null || _a === void 0 ? void 0 : _a.dataset.set;
        if (target) {
            if (this.count === 20 && !(target.classList.contains('active-toy'))) {
                alert("Извините, все слоты заполнены");
            }
            else {
                target.classList.toggle('active-toy');
                if (target.classList.contains('active-toy')) {
                    this.count++;
                    this.activeToys.push(target.getAttribute('data-set'));
                }
                else {
                    this.count--;
                    const index = this.activeToys.indexOf((target.getAttribute('data-set')));
                    this.activeToys.splice(index, 1);
                }
            }
            const countToys = document.getElementById('count-toys');
            countToys.textContent = `${this.count}`;
            this.localStorage.setDataLocalStorage('dataFavorite', currentTarget);
            this.setfavoriteCountToLocalStorage('dataCount', this.count);
        }
    }
    setfavoriteCountToLocalStorage(index, count) {
        localStorage.setItem(index, JSON.stringify(count));
    }
    getFavoriteCountToLacalStaorage(index, id) {
        const count = localStorage.getItem(index);
        const currentCount = document.getElementById('count-toys');
        currentCount.textContent = `${count}`;
        this.count = +count;
    }
    buttonHandler() {
        if (localStorage.getItem('dataCount')) {
            this.getFavoriteCountToLacalStaorage('dataCount', 'count-toys');
        }
    }
    addCurrentFavotiteToys() {
        const toysContainers = document.querySelectorAll('.container-content');
        const countToys = document.getElementById('count-toys');
        this.count = 0;
        toysContainers.forEach(element => {
            if (this.activeToys.includes(element.getAttribute('data-set'))) {
                console.log(element);
                element.classList.add('active-toy');
                this.count++;
            }
        });
        countToys.textContent = `${this.count}`;
    }
}
exports.FavoriteToys = FavoriteToys;


/***/ }),

/***/ "./src/components/garland.component.ts":
/*!*********************************************!*\
  !*** ./src/components/garland.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Garland = void 0;
class Garland {
    addColorGarland(class1, class2) {
        const garlandItems = document.querySelectorAll('.garland-item');
        garlandItems.forEach((element, index) => {
            element.classList = 'garland-item';
            if (index % 2 === 1) {
                element.classList.add(`${class1}`);
            }
            else {
                element.classList.add(`${class2}`);
            }
        });
    }
    addAllColorGarland(class1, class2, class3, class4) {
        const garlandItems = document.querySelectorAll('.garland-item');
        garlandItems.forEach((element, index) => {
            element.classList = 'garland-item';
            if (index % 2 === 1) {
                element.classList.add(`${class1}`);
            }
            if (index % 3 === 1) {
                element.classList.add(`${class2}`);
            }
            if (index % 4 === 1 && index > 2) {
                element.classList.add(`${class3}`);
            }
            else {
                element.classList.add(`${class4}`);
            }
        });
    }
}
exports.Garland = Garland;


/***/ }),

/***/ "./src/components/local-storage.component.ts":
/*!***************************************************!*\
  !*** ./src/components/local-storage.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStorage = void 0;
class LocalStorage {
    setDataLocalStorage(index, value) {
        const currentValue = JSON.parse(localStorage.getItem(index));
        if (currentValue) {
            if (currentValue.includes(value)) {
                const index = currentValue.indexOf(value);
                currentValue.splice(index, 1);
            }
            else {
                currentValue.push(value);
            }
            localStorage.setItem(index, JSON.stringify(currentValue));
        }
        else {
            localStorage.setItem(index, JSON.stringify([value]));
        }
    }
    setRangeToLocalStorage(index, className) {
        const currentValue = JSON.parse(localStorage.getItem(index));
        const currentRange = document.querySelectorAll(`${className}`);
        if (currentValue) {
            let currentCopyes = [];
            for (let i = +currentRange[0].ariaValueNow; i <= +currentRange[1].ariaValueNow; i++) {
                currentCopyes.push(String(i));
            }
            localStorage.setItem(index, JSON.stringify(currentCopyes));
        }
        else {
            let currentCopyes = [];
            for (let i = +currentRange[0].ariaValueNow; i <= +currentRange[1].ariaValueNow; i++) {
                currentCopyes.push(String(i));
            }
            localStorage.setItem(index, JSON.stringify(currentCopyes));
        }
    }
    getDataLocalStorage(index, set, className, activeClass) {
        const values = document.querySelectorAll(`${className}`);
        const currentValues = localStorage.getItem(index);
        values.forEach(element => {
            if (currentValues.includes(element.getAttribute(`data-${set}`))) {
                element.classList.toggle(`${activeClass}`);
            }
        });
    }
    getCheckedLocalStorage(index, set, className) {
        const sizeItem = document.querySelectorAll(`${className}`);
        const currentCheck = localStorage.getItem(`${index}`);
        sizeItem.forEach(element => {
            if (currentCheck.includes(element.getAttribute(`data-${set}`))) {
                if (element.getAttribute(`data-${set}`) === 'true') {
                    element.checked = true;
                }
                else {
                    element.checked = false;
                }
            }
        });
    }
}
exports.LocalStorage = LocalStorage;


/***/ }),

/***/ "./src/components/snow-component.ts":
/*!******************************************!*\
  !*** ./src/components/snow-component.ts ***!
  \******************************************/
/***/ (() => {

const snowmax = 40;
const snowcolor = new Array('#b9dff5', '#7fc7ff', '#7fb1ff', '#7fc7ff', '#b9dff5');
const snowtype = new Array('Times');
const snowletter = '&#10052;';
const sinkspeed = 0.4;
const snowmaxsize = 20;
const snowminsize = 5;
const snowingzone = 3;
// const treePage = document.getElementById('tree-page');
const toysPage = document.getElementById('toys-page');
const snowBtn = document.querySelector('.snow');
const christmasBg = document.querySelector('.christmas-bg-current');
let snowFlag = false;
let init = true;
const snow = new Array();
let marginbottom;
let marginright;
let timer;
let i_snow = 0;
let x_mv = new Array();
let crds = new Array();
let lftrght = new Array();
const randommaker = (range) => {
    const rand = Math.floor(range * Math.random());
    return rand;
};
const initsnow = () => {
    if (init) {
        snowFlag = true;
        init = false;
        marginbottom = document.documentElement.clientHeight + 50;
        marginright = document.body.clientWidth - 15;
        let snowsizerange = snowmaxsize - snowminsize;
        for (let i = 0; i <= snowmax; i++) {
            crds[i] = 0;
            lftrght[i] = Math.random() * 15;
            x_mv[i] = 0.03 + Math.random() / 10;
            snow[i] = document.getElementById('s' + i);
            snow[i].classList.add('snow-item');
            snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)];
            snow[i].size = randommaker(snowsizerange) + snowminsize;
            snow[i].style.fontSize = snow[i].size + 'px';
            snow[i].style.color = snowcolor[randommaker(snowcolor.length)];
            snow[i].style.zIndex = '1000';
            snow[i].sink = (sinkspeed * snow[i].size) / 5;
            snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4;
            snow[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * snow[i].size);
            snow[i].style.left = snow[i].posx + 'px';
            snow[i].style.top = snow[i].posy + 'px';
            christmasBg.append(snow[i]);
        }
    }
    movesnow();
};
const movesnow = () => {
    for (let i = 0; i <= snowmax; i++) {
        crds[i] += x_mv[i];
        snow[i].posy += snow[i].sink;
        snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + 'px';
        snow[i].style.top = snow[i].posy + 'px';
        if (snow[i].posy >= marginbottom - 2 * snow[i].size ||
            parseInt(snow[i].style.left) > marginright - 3 * lftrght[i]) {
            snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4;
            snow[i].posy = 0;
        }
    }
    timer = setTimeout(() => {
        movesnow();
    }, 50);
};
for (let i = 0; i <= snowmax; i++) {
    document.body.insertAdjacentHTML('beforeend', "<span id='s" + i + "' style='user-select:none;position:fixed;top:-" + snowmaxsize + "'>" + snowletter + '</span>');
}
window.onload = initsnow;
snowBtn.addEventListener('click', (event) => {
    const snowItems = document.querySelectorAll('.snow-item');
    OnOffSnow(snowItems);
});
const OnOffSnow = (items) => {
    if (snowFlag) {
        snowFlag = false;
        clearTimeout(timer);
        items.forEach(element => {
            element.style.display = 'none';
        });
    }
    else {
        snowFlag = true;
        initsnow();
        items.forEach(element => {
            element.style.display = 'block';
        });
    }
};
// treePage.addEventListener('click', () => {
//   const snowItems = document.querySelectorAll('.snow-item');
//   OnOffSnow(snowItems);
// })
toysPage.addEventListener('click', () => {
    const snowItems = document.querySelectorAll('.snow-item');
    snowFlag = false;
    clearTimeout(timer);
    snowItems.forEach(element => {
        element.style.display = 'none';
    });
});
// window.onload = initsnow;


/***/ }),

/***/ "./src/components/sort-toys.component.ts":
/*!***********************************************!*\
  !*** ./src/components/sort-toys.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SortToys = void 0;
class SortToys {
    constructor() {
    }
    sortToName(data) {
        return data.sort((a, b) => a.name.localeCompare(b.name));
    }
    sortToNameReverse(data) {
        return data.sort((a, b) => b.name.localeCompare(a.name));
    }
    sortToIncrease(data) {
        return data.sort((a, b) => (a.year - b.year));
    }
    sortToIncreaseReverse(data) {
        return data.sort((a, b) => (b.year - a.year));
    }
    sortALL(data) {
        return data.sort((a, b) => (a.num - b.num));
    }
    getCurrentActiveElements() {
        const dataActiveItem = [];
        const massForm = document.querySelectorAll('.form-icon');
        const countCopyes = document.querySelectorAll('#range .noUi-handle');
        const year = document.querySelectorAll('#range-year .noUi-handle');
        const colorContainer = document.querySelectorAll('.color-item');
        const sizeItem = document.querySelectorAll('.size-item');
        const favoriteToys = document.querySelector('.favorite-item');
        massForm.forEach(element => {
            if (element.classList.contains('form-icon__active')) {
                dataActiveItem.push(element.getAttribute('data-form'));
            }
        });
        for (let i = +countCopyes[0].ariaValueNow; i <= +countCopyes[1].ariaValueNow; i++) {
            dataActiveItem.push(String(i));
        }
        for (let i = +year[0].ariaValueNow; i <= +year[1].ariaValueNow; i++) {
            dataActiveItem.push(String(i));
        }
        colorContainer.forEach(element => {
            if (element.classList.contains('color-item__active')) {
                dataActiveItem.push(element.getAttribute('data-color'));
            }
        });
        sizeItem.forEach(element => {
            if (element.checked) {
                dataActiveItem.push(element.getAttribute('data-check'));
            }
        });
        if (favoriteToys.checked) {
            dataActiveItem.push(true);
        }
        else {
            dataActiveItem.push(true);
            dataActiveItem.push(false);
        }
        return dataActiveItem;
    }
}
exports.SortToys = SortToys;


/***/ }),

/***/ "./src/components/start-game.component.ts":
/*!************************************************!*\
  !*** ./src/components/start-game.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StartGame = void 0;
const app_1 = __webpack_require__(/*! ../app/app */ "./src/app/app.ts");
class StartGame extends app_1.App {
    constructor(id) {
        super(id);
    }
    init() {
        const start = document.querySelector('.start');
        const toys = document.getElementById('toys-page');
        const startPage = document.getElementById('start-page');
        const tree = document.getElementById('tree-page');
        tree.addEventListener('click', this.openChristmasTreePage.bind(this));
        toys.addEventListener('click', buttonHandler.bind(this));
        start.addEventListener('click', buttonHandler.bind(this));
        startPage.addEventListener('click', this.openStartPage.bind(this));
    }
    openStartPage() {
        this.show();
    }
    openChristmasTreePage() {
        this.hide();
    }
}
exports.StartGame = StartGame;
function buttonHandler() {
    this.hide();
    const search = document.getElementById('search');
    search.focus();
}


/***/ }),

/***/ "./src/components/toys.component.ts":
/*!******************************************!*\
  !*** ./src/components/toys.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Toys = void 0;
const app_1 = __webpack_require__(/*! ../app/app */ "./src/app/app.ts");
const sort_toys_component_1 = __webpack_require__(/*! ./sort-toys.component */ "./src/components/sort-toys.component.ts");
const local_storage_component_1 = __webpack_require__(/*! ./local-storage.component */ "./src/components/local-storage.component.ts");
const ui_slider_component_1 = __webpack_require__(/*! ./ui-slider.component */ "./src/components/ui-slider.component.ts");
const ui_slider_component_2 = __webpack_require__(/*! ./ui-slider.component */ "./src/components/ui-slider.component.ts");
const __1 = __webpack_require__(/*! .. */ "./src/index.ts");
class Toys extends app_1.App {
    constructor(id) {
        super(id);
        this.dataToys;
        this.newData;
        this.sortToys = new sort_toys_component_1.SortToys();
        this.localStorage = new local_storage_component_1.LocalStorage;
    }
    init() {
        this.getData();
        const start = document.querySelector('.start');
        const chooseItem = document.querySelector('.choose-item');
        const search = document.getElementById('search');
        const tree = document.getElementById('tree-page');
        const toys = document.getElementById('toys-page');
        const startPage = document.getElementById('start-page');
        toys.addEventListener('click', this.openToysPages.bind(this));
        tree.addEventListener('click', this.openChristmasTreePage.bind(this));
        startPage.addEventListener('click', this.openStartPage.bind(this));
        search.addEventListener('input', this.addSearch.bind(this));
        start.addEventListener('click', this.buttonHandler.bind(this));
        chooseItem.addEventListener('click', this.addSortToys.bind(this));
        this.$el.addEventListener('click', this.getSortToys.bind(this));
        this.$el.addEventListener('click', this.getFilterForm.bind(this));
        this.$el.addEventListener('click', this.addActiveColor.bind(this));
        this.$el.addEventListener('click', this.applySucsses.bind(this));
        this.$el.addEventListener('click', this.applyResetFilters.bind(this));
        this.$el.addEventListener('click', this.applyResetSettings.bind(this));
        this.$el.addEventListener('click', this.addCleanSearch.bind(this));
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = ('https://raw.githubusercontent.com/Bogdan-VS/image-data/master/data.json');
            const res = yield fetch(url);
            const data = yield res.json();
            this.dataToys = data;
            return this.dataToys;
        });
    }
    drawToys(data = this.dataToys) {
        const collection = document.querySelector('.collection-container-wrapper');
        for (let i = 0; i < data.length; i++) {
            const content = document.createElement('aside');
            content.classList.add('container-content');
            content.setAttribute('id', `toy-${i}`);
            content.setAttribute('data-set', `${data[i].num}`);
            content.innerHTML = `
        <h4>${data[i].name}</h4>
        <div class="icon-toy-container">
          <div class="icon-toy toy${i}"></div>
        </div>
        <ul class="data-toy">
          <li>Количество: ${data[i].count}</li>
          <li>Год покупки: ${data[i].year}</li>
          <li>Форма игрушки: ${data[i].shape}</li>
          <li>Цвет игрушки: ${data[i].color}</li>
          <li>Размер игрушки: ${data[i].size}</li>
          <li>Любимая: ${data[i].like}</li>
        </ul>
      `;
            collection.append(content);
            const iconToy = document.querySelector(`.toy${i}`);
            iconToy.style.background = `top 0 left 0 / 100% 100% url(./assets/images/toys/${data[i].num}.png)`;
            __1.favorite.addCurrentFavotiteToys();
        }
    }
    addSortToys() {
        const category = document.getElementById('open-category');
        category.classList.toggle('hide');
    }
    getSortToys(event) {
        const currentCategories = document.getElementById('current-categories');
        const target = event.target.closest('.sort-item');
        switch (target && target.dataset.sort) {
            case 'По возрастанию года выпуска':
                currentCategories.textContent = 'По возрастанию года выпуска';
                this.addSortToys();
                this.addResultData();
                break;
            case 'По убыванию года выпуска':
                currentCategories.textContent = 'По убыванию года выпуска';
                this.addSortToys();
                this.addResultData();
                break;
            case 'Все игрушки':
                currentCategories.textContent = 'Все игрушки';
                this.addSortToys();
                this.addResultData();
                break;
            case 'По имени А-Я':
                currentCategories.textContent = 'По имени А-Я';
                this.addSortToys();
                this.addResultData();
                break;
            case 'По имени Я-А':
                currentCategories.textContent = 'По имени Я-А';
                this.addSortToys();
                this.addResultData();
                break;
        }
    }
    addResultData() {
        const massFilter = this.sortToys.getCurrentActiveElements();
        const succsessFilterForm = this.dataToys.filter((el) => {
            return massFilter.includes(el.shape) &&
                massFilter.includes(el.count) &&
                massFilter.includes(el.year) &&
                massFilter.includes(el.color) &&
                massFilter.includes(el.size) &&
                massFilter.includes(el.favorite);
        });
        this.getResult(succsessFilterForm);
    }
    applySucsses() {
        var _a;
        const formTarget = event.target.closest('.form-icon');
        const colorTarget = event.target.closest('.color-item');
        const checkTarget = event.target.closest('.checked');
        const currentCheck = (_a = checkTarget) === null || _a === void 0 ? void 0 : _a.dataset.check;
        if (formTarget ||
            colorTarget ||
            checkTarget) {
            if (currentCheck) {
                this.localStorage.setDataLocalStorage('dataChecked', currentCheck);
            }
            this.addResultData();
        }
    }
    getFilterForm() {
        var _a;
        const target = event.target.closest('.form-icon');
        const currentForm = (_a = target) === null || _a === void 0 ? void 0 : _a.dataset.form;
        if (currentForm) {
            switch (currentForm) {
                case 'колокольчик':
                    target.classList.toggle('form-icon__active');
                    break;
                case 'шар':
                    target.classList.toggle('form-icon__active');
                    break;
                case 'шишка':
                    target.classList.toggle('form-icon__active');
                    break;
                case 'снежинка':
                    target.classList.toggle('form-icon__active');
                    break;
                case 'фигурка':
                    target.classList.toggle('form-icon__active');
                    break;
            }
            this.localStorage.setDataLocalStorage('dataForm', currentForm);
        }
    }
    addActiveColor() {
        var _a;
        const target = event.target.closest('.color-item');
        const currentColor = (_a = target) === null || _a === void 0 ? void 0 : _a.dataset.color;
        if (currentColor) {
            switch (currentColor) {
                case "белый":
                    target.classList.toggle('color-item__active');
                    break;
                case "желтый":
                    target.classList.toggle('color-item__active');
                    break;
                case "красный":
                    target.classList.toggle('color-item__active');
                    break;
                case "синий":
                    target.classList.toggle('color-item__active');
                    break;
                case "зелёный":
                    target.classList.toggle('color-item__active');
                    break;
            }
            this.localStorage.setDataLocalStorage('dataColor', currentColor);
        }
    }
    getResult(arg) {
        const message = document.querySelector('.message');
        if (arg.length === 0) {
            message.classList.add('message_active');
        }
        else {
            message.classList.remove('message_active');
        }
        let sortData;
        const currentCategories = document.getElementById('current-categories');
        switch (currentCategories.textContent) {
            case 'По возрастанию года выпуска':
                sortData = this.sortToys.sortToIncrease(arg);
                break;
            case 'По убыванию года выпуска':
                sortData = this.sortToys.sortToIncreaseReverse(arg);
                break;
            case 'Все игрушки':
                sortData = this.sortToys.sortALL(arg);
                break;
            case 'По имени А-Я':
                sortData = this.sortToys.sortToName(arg);
                break;
            case 'По имени Я-А':
                sortData = this.sortToys.sortToNameReverse(arg);
                break;
        }
        this.removeData();
        this.drawToys(sortData);
    }
    applyResetFilters() {
        const target = event.target.closest('#reset-filters');
        const colorContainer = document.querySelectorAll('.color-item');
        const massForm = document.querySelectorAll('.form-icon');
        const sizeItem = document.querySelectorAll('.size-item');
        const favorite = document.querySelector('.favorite-item');
        if (target) {
            ui_slider_component_1.range.noUiSlider.reset();
            ui_slider_component_2.rangeYear.noUiSlider.reset();
            massForm.forEach(element => {
                element.classList.add('form-icon__active');
            });
            colorContainer.forEach(element => {
                element.classList.add('color-item__active');
            });
            sizeItem.forEach(element => {
                element.checked = 'checked';
            });
            favorite.checked = '';
            this.addResultData();
        }
    }
    applyResetSettings() {
        const resetSettings = event.target.closest('#reset-setting');
        if (resetSettings) {
            localStorage.clear();
        }
    }
    addSearch() {
        const search = document.getElementById('search');
        let value = search.value.trim();
        const massFilter = this.sortToys.getCurrentActiveElements();
        let massRequest = [];
        const succsessFilterForm = this.dataToys.filter((el) => {
            return massFilter.includes(el.shape) &&
                massFilter.includes(el.count) &&
                massFilter.includes(el.year) &&
                massFilter.includes(el.color) &&
                massFilter.includes(el.size) &&
                massFilter.includes(el.favorite);
        });
        if (value != '') {
            succsessFilterForm.forEach((element) => {
                if (element.name.toLowerCase().search(value.toLowerCase()) != -1) {
                    massRequest.push(element);
                }
            });
        }
        else {
            massRequest = succsessFilterForm;
        }
        this.getResult(massRequest);
    }
    addCleanSearch() {
        const cleanSearch = event.target.closest('.clean-icon');
        const search = document.getElementById('search');
        if (cleanSearch) {
            search.value = '';
            this.addSearch();
        }
    }
    removeData() {
        const cards = document.querySelectorAll('.container-content');
        cards.forEach(element => {
            element.remove();
        });
    }
    openChristmasTreePage() {
        this.hide();
    }
    openToysPages() {
        this.show();
    }
    openStartPage() {
        this.hide();
    }
    buttonHandler() {
        if (localStorage.getItem('dataColor')) {
            this.localStorage.getDataLocalStorage('dataColor', 'color', '.color-item', 'color-item__active');
        }
        if (localStorage.getItem('dataForm')) {
            this.localStorage.getDataLocalStorage('dataForm', 'form', '.form-icon', 'form-icon__active');
        }
        if (localStorage.getItem('dataChecked')) {
            this.localStorage.getCheckedLocalStorage('dataChecked', 'check', '.checked');
        }
        this.show();
        this.addResultData();
        if (localStorage.getItem('dataFavorite')) {
            this.localStorage.getDataLocalStorage('dataFavorite', 'set', '.container-content', 'active-toy');
        }
    }
}
exports.Toys = Toys;


/***/ }),

/***/ "./src/components/ui-slider.component.ts":
/*!***********************************************!*\
  !*** ./src/components/ui-slider.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rangeYear = exports.range = void 0;
const local_storage_component_1 = __webpack_require__(/*! ./local-storage.component */ "./src/components/local-storage.component.ts");
const noUiSlider_1 = __importDefault(__webpack_require__(/*! noUiSlider */ "./node_modules/noUiSlider/dist/nouislider.js"));
__webpack_require__(/*! nouislider/dist/nouislider.css */ "./node_modules/nouislider/dist/nouislider.css");
const index_1 = __webpack_require__(/*! ../index */ "./src/index.ts");
const rangeLocalStorage = new local_storage_component_1.LocalStorage();
const StartBtn = document.querySelector('.start');
exports.range = document.getElementById('range');
exports.rangeYear = document.getElementById('range-year');
noUiSlider_1.default.create(exports.range, {
    start: [1, 12],
    connect: true,
    range: {
        'min': 1,
        'max': 12
    },
    step: 1,
    tooltips: true,
    format: {
        to: function (value) {
            return parseInt(value);
        },
        from: function (value) {
            return parseInt(value);
        }
    }
});
noUiSlider_1.default.create(exports.rangeYear, {
    start: [1940, 2021],
    connect: true,
    range: {
        'min': 1940,
        'max': 2021
    },
    step: 1,
    tooltips: true,
    format: {
        to: function (value) {
            return parseInt(value);
        },
        from: function (value) {
            return parseInt(value);
        }
    }
});
exports.range.noUiSlider.on('change', () => {
    rangeLocalStorage.setRangeToLocalStorage('dataRangeCount', '#range .noUi-handle');
    index_1.toys.addResultData();
});
exports.rangeYear.noUiSlider.on('change', () => {
    rangeLocalStorage.setRangeToLocalStorage('dataRangeYear', '#range-year .noUi-handle');
    index_1.toys.addResultData();
});
StartBtn.addEventListener('click', () => {
    if (localStorage.getItem('dataRangeCount')) {
        const currentValues = JSON.parse(localStorage.getItem('dataRangeCount'));
        exports.range.noUiSlider.set([`${currentValues[0]}`, `${currentValues[currentValues.length - 1]}`]);
    }
    if (localStorage.getItem('dataRangeYear')) {
        const currentValues = JSON.parse(localStorage.getItem('dataRangeYear'));
        exports.rangeYear.noUiSlider.set([`${currentValues[0]}`, `${currentValues[currentValues.length - 1]}`]);
    }
});


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.favorite = exports.toys = void 0;
__webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
const start_game_component_1 = __webpack_require__(/*! ./components/start-game.component */ "./src/components/start-game.component.ts");
const toys_component_1 = __webpack_require__(/*! ./components/toys.component */ "./src/components/toys.component.ts");
const favorite_toys_component_1 = __webpack_require__(/*! ./components/favorite-toys.component */ "./src/components/favorite-toys.component.ts");
const christmas_tree_component_1 = __webpack_require__(/*! ./components/christmas-tree.component */ "./src/components/christmas-tree.component.ts");
__webpack_require__(/*! ./components/snow-component.ts */ "./src/components/snow-component.ts");
new start_game_component_1.StartGame('start');
exports.toys = new toys_component_1.Toys('toys');
const christmasTree = new christmas_tree_component_1.ChristmasTree('christmas-tree');
exports.favorite = new favorite_toys_component_1.FavoriteToys('collection');


/***/ }),

/***/ "./src/assets/fonts/Neucha-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Neucha-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/264ebab953facb491d6cNeucha-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/Steppe.ttf":
/*!*************************************!*\
  !*** ./src/assets/fonts/Steppe.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/1db31022b5fc64323ae4Steppe.ttf";

/***/ }),

/***/ "./src/assets/images/1.png":
/*!*********************************!*\
  !*** ./src/assets/images/1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/c20a2a4d9ea9a7c773bf1.png";

/***/ }),

/***/ "./src/assets/images/2.png":
/*!*********************************!*\
  !*** ./src/assets/images/2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/0e58ca85eaefff77f2b12.png";

/***/ }),

/***/ "./src/assets/images/bg.jpg":
/*!**********************************!*\
  !*** ./src/assets/images/bg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/22ad08240b76e04221d5bg.jpg";

/***/ }),

/***/ "./src/assets/images/bg/1.jpg":
/*!************************************!*\
  !*** ./src/assets/images/bg/1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/2edf659aa2ce15b6027d1.jpg";

/***/ }),

/***/ "./src/assets/images/bg/10.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/bg/10.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/3cdf483e44dfeea519ee10.jpg";

/***/ }),

/***/ "./src/assets/images/bg/2.jpg":
/*!************************************!*\
  !*** ./src/assets/images/bg/2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/4a633ed09b32141738442.jpg";

/***/ }),

/***/ "./src/assets/images/bg/3.jpg":
/*!************************************!*\
  !*** ./src/assets/images/bg/3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/a7579227151cefbf16593.jpg";

/***/ }),

/***/ "./src/assets/images/bg/4.jpg":
/*!************************************!*\
  !*** ./src/assets/images/bg/4.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/93365c4b44c36c5db2604.jpg";

/***/ }),

/***/ "./src/assets/images/bg/5.jpg":
/*!************************************!*\
  !*** ./src/assets/images/bg/5.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/eef7dbc2106d2ceb29195.jpg";

/***/ }),

/***/ "./src/assets/images/bg/6.jpg":
/*!************************************!*\
  !*** ./src/assets/images/bg/6.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/cf2ddfa837b4497fd4d06.jpg";

/***/ }),

/***/ "./src/assets/images/bg/7.jpg":
/*!************************************!*\
  !*** ./src/assets/images/bg/7.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/bd143edab05a2524c8287.jpg";

/***/ }),

/***/ "./src/assets/images/bg/8.jpg":
/*!************************************!*\
  !*** ./src/assets/images/bg/8.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/251c9031b6f9eed341168.jpg";

/***/ }),

/***/ "./src/assets/images/bg/9.jpg":
/*!************************************!*\
  !*** ./src/assets/images/bg/9.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/cf884a6ca3480b42f6ef9.jpg";

/***/ }),

/***/ "./src/assets/images/rs_school_js.png":
/*!********************************************!*\
  !*** ./src/assets/images/rs_school_js.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/4ff28a69cc2041e1b0e1rs_school_js.png";

/***/ }),

/***/ "./src/assets/images/svg/arrow-down.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/svg/arrow-down.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/19d5097eb66e9b879fe7arrow-down.svg";

/***/ }),

/***/ "./src/assets/images/svg/audio.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/svg/audio.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/f77405bc333e162191f4audio.svg";

/***/ }),

/***/ "./src/assets/images/svg/ball.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/ball.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/02ba2b1b2ea99d65f6d4ball.svg";

/***/ }),

/***/ "./src/assets/images/svg/bell.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/bell.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/bb18e4cea62da25074aabell.svg";

/***/ }),

/***/ "./src/assets/images/svg/close.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/svg/close.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/b9f438218d88177e8becclose.svg";

/***/ }),

/***/ "./src/assets/images/svg/cone.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/cone.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/7a360a868157b82d2cdacone.svg";

/***/ }),

/***/ "./src/assets/images/svg/snow.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/snow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/127061e202b176f7aad1snow.svg";

/***/ }),

/***/ "./src/assets/images/svg/snowflake.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/svg/snowflake.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/a7de9f17453dbd7df734snowflake.svg";

/***/ }),

/***/ "./src/assets/images/svg/toy.svg":
/*!***************************************!*\
  !*** ./src/assets/images/svg/toy.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/d8ea3c174fc8fb9000e3toy.svg";

/***/ }),

/***/ "./src/assets/images/svg/tree-active.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/svg/tree-active.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/8e6d08cd726880345a70tree-active.svg";

/***/ }),

/***/ "./src/assets/images/svg/tree.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/tree.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/aee2e280228d283db3b6tree.svg";

/***/ }),

/***/ "./src/assets/images/tree/1.png":
/*!**************************************!*\
  !*** ./src/assets/images/tree/1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/f8724de1d5ef384cddea1.png";

/***/ }),

/***/ "./src/assets/images/tree/2.png":
/*!**************************************!*\
  !*** ./src/assets/images/tree/2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/212f97eac30c80e657522.png";

/***/ }),

/***/ "./src/assets/images/tree/3.png":
/*!**************************************!*\
  !*** ./src/assets/images/tree/3.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/62b63d8739c64a4337eb3.png";

/***/ }),

/***/ "./src/assets/images/tree/4.png":
/*!**************************************!*\
  !*** ./src/assets/images/tree/4.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/9723e94957e9678f555a4.png";

/***/ }),

/***/ "./src/assets/images/tree/5.png":
/*!**************************************!*\
  !*** ./src/assets/images/tree/5.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/85525b4c7f09d86940395.png";

/***/ }),

/***/ "./src/assets/images/tree/6.png":
/*!**************************************!*\
  !*** ./src/assets/images/tree/6.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/0310cfdee3d4675de0376.png";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLFFBQVEsV0FBVyxPQUFPLE9BQU8sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxN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MlIsV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsUUFBUSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxRQUFRLFlBQVksTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sV0FBVyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sV0FBVyxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxLQUFLLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9B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LEtBQUssU0FBUyx3QkFBd0IsS0FBSyxTQUFTLHlCQUF5QixLQUFLLFNBQVMsMEJBQTBCLEtBQUssR0FBRyx5QkFBeUIsUUFBUSxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxHQUFHLHlCQUF5QixRQUFRLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLEdBQUcsMEJBQTBCLFFBQVEsMEJBQTBCLEtBQUssU0FBUyx1QkFBdUIsS0FBSyxTQUFTLHdCQUF3QixLQUFLLFNBQVMseUJBQXlCLEtBQUssR0FBRyw0QkFBNEIsUUFBUSxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxHQUFHLDRCQUE0QixRQUFRLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLEdBQUcsd0JBQXdCLFFBQVEsd0JBQXdCLEtBQUssU0FBUyx5QkFBeUIsS0FBSyxTQUFTLDBCQUEwQixLQUFLLFNBQVMsdUJBQXVCLEtBQUssR0FBRywwQkFBMEIsUUFBUSxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxHQUFHLDBCQUEwQixRQUFRLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLEdBQUcseUJBQXlCLFFBQVEseUJBQXlCLEtBQUssU0FBUywwQkFBMEIsS0FBSyxTQUFTLHVCQUF1QixLQUFLLFNBQVMsd0JBQXdCLEtBQUssR0FBRywyQkFBMkIsUUFBUSxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxHQUFHLDJCQUEyQixRQUFRLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtB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LDRDQUE0QztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsNEJBQTRCLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUE4QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0YsZ0JBQWdCO0FBQ2hHO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztVRXJCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzcyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL3NyYy9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvbm9VaVNsaWRlci9kaXN0L25vdWlzbGlkZXIuanMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzP2M4YWQiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/YWI4NiIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vc3JjL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvY29tcG9uZW50cy9jaHJpc3RtYXMtdHJlZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvY29tcG9uZW50cy9mYXZvcml0ZS10b3lzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL3NyYy9jb21wb25lbnRzL2dhcmxhbmQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vc3JjL2NvbXBvbmVudHMvbG9jYWwtc3RvcmFnZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvY29tcG9uZW50cy9zbm93LWNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL3NyYy9jb21wb25lbnRzL3NvcnQtdG95cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvY29tcG9uZW50cy9zdGFydC1nYW1lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL3NyYy9jb21wb25lbnRzL3RveXMuY29tcG9uZW50LnRzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vc3JjL2NvbXBvbmVudHMvdWktc2xpZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZ1bmN0aW9uYWwgc3R5bGluZztcXG4gKiBUaGVzZSBzdHlsZXMgYXJlIHJlcXVpcmVkIGZvciBub1VpU2xpZGVyIHRvIGZ1bmN0aW9uLlxcbiAqIFlvdSBkb24ndCBuZWVkIHRvIGNoYW5nZSB0aGVzZSBydWxlcyB0byBhcHBseSB5b3VyIGRlc2lnbi5cXG4gKi9cXG4ubm9VaS10YXJnZXQsXFxuLm5vVWktdGFyZ2V0ICoge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ub1VpLXRhcmdldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ub1VpLWJhc2UsXFxuLm5vVWktY29ubmVjdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4vKiBXcmFwcGVyIGZvciBhbGwgY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLm5vVWktY29ubmVjdCxcXG4ubm9VaS1vcmlnaW4ge1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcbn1cXG5cXG4vKiBPZmZzZXQgZGlyZWN0aW9uXFxuICovXFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcblxcbi8qIEdpdmUgb3JpZ2lucyAwIGhlaWdodC93aWR0aCBzbyB0aGV5IGRvbid0IGludGVyZmVyZSB3aXRoIGNsaWNraW5nIHRoZVxcbiAqIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luIHtcXG4gIHRvcDogLTEwMCU7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4ubm9VaS1oYW5kbGUge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5ub1VpLXRvdWNoLWFyZWEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1jb25uZWN0LFxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1vcmlnaW4ge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbi5ub1VpLXN0YXRlLWRyYWcgKiB7XFxuICBjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU2xpZGVyIHNpemUgYW5kIGhhbmRsZSBwbGFjZW1lbnQ7XFxuICovXFxuLm5vVWktaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcblxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcmlnaHQ6IC0xN3B4O1xcbiAgdG9wOiAtNnB4O1xcbn1cXG5cXG4ubm9VaS12ZXJ0aWNhbCB7XFxuICB3aWR0aDogMThweDtcXG59XFxuXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgcmlnaHQ6IC02cHg7XFxuICBib3R0b206IC0xN3B4O1xcbn1cXG5cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIGxlZnQ6IC0xN3B4O1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcblxcbi8qIFN0eWxpbmc7XFxuICogR2l2aW5nIHRoZSBjb25uZWN0IGVsZW1lbnQgYSBib3JkZXIgcmFkaXVzIGNhdXNlcyBpc3N1ZXMgd2l0aCB1c2luZyB0cmFuc2Zvcm06IHNjYWxlXFxuICovXFxuLm5vVWktdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDNEM0QzO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNGMEYwRjAsIDAgM3B4IDZweCAtNXB4ICNCQkI7XFxufVxcblxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjM0ZCOEFGO1xcbn1cXG5cXG4vKiBIYW5kbGVzIGFuZCBjdXJzb3JzO1xcbiAqL1xcbi5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuXFxuLm5vVWktdmVydGljYWwgLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG5cXG4ubm9VaS1oYW5kbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRUJFQkVCLCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG5cXG4ubm9VaS1hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0RERCwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuXFxuLyogSGFuZGxlIHN0cmlwZXM7XFxuICovXFxuLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTRweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjRThFN0U2O1xcbiAgbGVmdDogMTRweDtcXG4gIHRvcDogNnB4O1xcbn1cXG5cXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgbGVmdDogMTdweDtcXG59XFxuXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGxlZnQ6IDZweDtcXG4gIHRvcDogMTRweDtcXG59XFxuXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHRvcDogMTdweDtcXG59XFxuXFxuLyogRGlzYWJsZWQgc3RhdGU7XFxuICovXFxuW2Rpc2FibGVkXSAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNCOEI4Qjg7XFxufVxcblxcbltkaXNhYmxlZF0ubm9VaS10YXJnZXQsXFxuW2Rpc2FibGVkXS5ub1VpLWhhbmRsZSxcXG5bZGlzYWJsZWRdIC5ub1VpLWhhbmRsZSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4vKiBCYXNlO1xcbiAqXFxuICovXFxuLm5vVWktcGlwcyxcXG4ubm9VaS1waXBzICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm5vVWktcGlwcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuXFxuLyogVmFsdWVzO1xcbiAqXFxuICovXFxuLm5vVWktdmFsdWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vVWktdmFsdWUtc3ViIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4vKiBNYXJraW5ncztcXG4gKlxcbiAqL1xcbi5ub1VpLW1hcmtlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjQ0NDO1xcbn1cXG5cXG4ubm9VaS1tYXJrZXItc3ViIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcblxcbi5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG5cXG4vKiBIb3Jpem9udGFsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtaG9yaXpvbnRhbCB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG59XFxuXFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbn1cXG5cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlciB7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDVweDtcXG59XFxuXFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuXFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG4vKiBWZXJ0aWNhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLXZlcnRpY2FsIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbi5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG59XFxuXFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyIHtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcblxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLm5vVWktdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLXRvb2x0aXAge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICBsZWZ0OiA1MCU7XFxuICBib3R0b206IDEyMCU7XFxufVxcblxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLXRvb2x0aXAge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxMjAlO1xcbn1cXG5cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gIGxlZnQ6IGF1dG87XFxuICBib3R0b206IDEwcHg7XFxufVxcblxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdG9wOiBhdXRvO1xcbiAgcmlnaHQ6IDI4cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUFBO0FBSUE7O0VBRUUsMkJBQUE7RUFDQSw2Q0FBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUdGOztBQURBO0VBQUE7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUlGOztBQUZBOztFQUVFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFIQTtFQUFBO0FBRUE7RUFDRSxPQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUpBOztFQUFBO0FBR0E7RUFDRSxVQUFBO0VBQ0EsUUFBQTtBQU9GOztBQUxBO0VBQ0UsU0FBQTtBQVFGOztBQU5BO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVVGOztBQVJBOztFQUdFLDBCQUFBO0FBV0Y7O0FBVEE7RUFDRSwwQkFBQTtBQVlGOztBQVZBO0VBQUE7QUFFQTtFQUNFLFlBQUE7QUFhRjs7QUFYQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFjRjs7QUFaQTtFQUNFLFdBQUE7QUFlRjs7QUFiQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFnQkY7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQWlCRjs7QUFmQTs7RUFBQTtBQUdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0RBQUE7QUFrQkY7O0FBaEJBO0VBQ0Usa0JBQUE7QUFtQkY7O0FBakJBO0VBQ0UsbUJBQUE7QUFvQkY7O0FBbEJBO0VBQUE7QUFFQTtFQUNFLGlCQUFBO0FBcUJGOztBQW5CQTtFQUNFLGlCQUFBO0FBc0JGOztBQXBCQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0RUFBQTtBQXVCRjs7QUFyQkE7RUFDRSx5RUFBQTtBQXdCRjs7QUF0QkE7RUFBQTtBQUVBOztFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUF5QkY7O0FBdkJBO0VBQ0UsVUFBQTtBQTBCRjs7QUF4QkE7O0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQTJCRjs7QUF6QkE7RUFDRSxTQUFBO0FBNEJGOztBQTFCQTtFQUFBO0FBRUE7RUFDRSxtQkFBQTtBQTZCRjs7QUEzQkE7OztFQUdFLG1CQUFBO0FBOEJGOztBQTVCQTs7RUFBQTtBQUdBOztFQUdFLHNCQUFBO0FBK0JGOztBQTdCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQWdDRjs7QUE5QkE7O0VBQUE7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWlDRjs7QUEvQkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQWtDRjs7QUFoQ0E7O0VBQUE7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFtQ0Y7O0FBakNBO0VBQ0UsZ0JBQUE7QUFvQ0Y7O0FBbENBO0VBQ0UsZ0JBQUE7QUFxQ0Y7O0FBbkNBOztFQUFBO0FBR0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQXNDRjs7QUFwQ0E7RUFFRSwrQkFBQTtBQXVDRjs7QUFyQ0E7RUFFRSw4QkFBQTtBQXdDRjs7QUF0Q0E7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBeUNGOztBQXZDQTtFQUNFLFlBQUE7QUEwQ0Y7O0FBeENBO0VBQ0UsWUFBQTtBQTJDRjs7QUF6Q0E7O0VBQUE7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUE0Q0Y7O0FBMUNBO0VBRUUsNkJBQUE7RUFDQSxrQkFBQTtBQTZDRjs7QUEzQ0E7RUFFRSw0QkFBQTtBQThDRjs7QUE1Q0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBK0NGOztBQTdDQTtFQUNFLFdBQUE7QUFnREY7O0FBOUNBO0VBQ0UsV0FBQTtBQWlERjs7QUEvQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFrREY7O0FBaERBO0VBRUUsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQW1ERjs7QUFqREE7RUFFRSw2QkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBb0RGOztBQWxEQTtFQUVFLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFxREY7O0FBbkRBO0VBRUUsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQXNERlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGdW5jdGlvbmFsIHN0eWxpbmc7XFxuICogVGhlc2Ugc3R5bGVzIGFyZSByZXF1aXJlZCBmb3Igbm9VaVNsaWRlciB0byBmdW5jdGlvbi5cXG4gKiBZb3UgZG9uJ3QgbmVlZCB0byBjaGFuZ2UgdGhlc2UgcnVsZXMgdG8gYXBwbHkgeW91ciBkZXNpZ24uXFxuICovXFxuLm5vVWktdGFyZ2V0LFxcbi5ub1VpLXRhcmdldCAqIHtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm5vVWktdGFyZ2V0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm5vVWktYmFzZSxcXG4ubm9VaS1jb25uZWN0cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi8qIFdyYXBwZXIgZm9yIGFsbCBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAwO1xcbn1cXG4ubm9VaS1jb25uZWN0LFxcbi5ub1VpLW9yaWdpbiB7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XFxufVxcbi8qIE9mZnNldCBkaXJlY3Rpb25cXG4gKi9cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG59XFxuLyogR2l2ZSBvcmlnaW5zIDAgaGVpZ2h0L3dpZHRoIHNvIHRoZXkgZG9uJ3QgaW50ZXJmZXJlIHdpdGggY2xpY2tpbmcgdGhlXFxuICogY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4ge1xcbiAgdG9wOiAtMTAwJTtcXG4gIHdpZHRoOiAwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLm5vVWktdG91Y2gtYXJlYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLWNvbm5lY3QsXFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLW9yaWdpbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcbi5ub1VpLXN0YXRlLWRyYWcgKiB7XFxuICBjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcXG59XFxuLyogU2xpZGVyIHNpemUgYW5kIGhhbmRsZSBwbGFjZW1lbnQ7XFxuICovXFxuLm5vVWktaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcmlnaHQ6IC0xN3B4O1xcbiAgdG9wOiAtNnB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCB7XFxuICB3aWR0aDogMThweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgcmlnaHQ6IC02cHg7XFxuICBib3R0b206IC0xN3B4O1xcbn1cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIGxlZnQ6IC0xN3B4O1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi8qIFN0eWxpbmc7XFxuICogR2l2aW5nIHRoZSBjb25uZWN0IGVsZW1lbnQgYSBib3JkZXIgcmFkaXVzIGNhdXNlcyBpc3N1ZXMgd2l0aCB1c2luZyB0cmFuc2Zvcm06IHNjYWxlXFxuICovXFxuLm5vVWktdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDNEM0QzO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNGMEYwRjAsIDAgM3B4IDZweCAtNXB4ICNCQkI7XFxufVxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjM0ZCOEFGO1xcbn1cXG4vKiBIYW5kbGVzIGFuZCBjdXJzb3JzO1xcbiAqL1xcbi5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRUJFQkVCLCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG4ubm9VaS1hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0RERCwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuLyogSGFuZGxlIHN0cmlwZXM7XFxuICovXFxuLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTRweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjRThFN0U2O1xcbiAgbGVmdDogMTRweDtcXG4gIHRvcDogNnB4O1xcbn1cXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgbGVmdDogMTdweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGxlZnQ6IDZweDtcXG4gIHRvcDogMTRweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHRvcDogMTdweDtcXG59XFxuLyogRGlzYWJsZWQgc3RhdGU7XFxuICovXFxuW2Rpc2FibGVkXSAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNCOEI4Qjg7XFxufVxcbltkaXNhYmxlZF0ubm9VaS10YXJnZXQsXFxuW2Rpc2FibGVkXS5ub1VpLWhhbmRsZSxcXG5bZGlzYWJsZWRdIC5ub1VpLWhhbmRsZSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4vKiBCYXNlO1xcbiAqXFxuICovXFxuLm5vVWktcGlwcyxcXG4ubm9VaS1waXBzICoge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm5vVWktcGlwcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuLyogVmFsdWVzO1xcbiAqXFxuICovXFxuLm5vVWktdmFsdWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm5vVWktdmFsdWUtc3ViIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4vKiBNYXJraW5ncztcXG4gKlxcbiAqL1xcbi5ub1VpLW1hcmtlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjQ0NDO1xcbn1cXG4ubm9VaS1tYXJrZXItc3ViIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcbi5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG4vKiBIb3Jpem9udGFsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtaG9yaXpvbnRhbCB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogNXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcbi8qIFZlcnRpY2FsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtdmVydGljYWwge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyIHtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuLm5vVWktdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgbGVmdDogNTAlO1xcbiAgYm90dG9tOiAxMjAlO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDEyMCU7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xcbiAgbGVmdDogYXV0bztcXG4gIGJvdHRvbTogMTBweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRvcDogYXV0bztcXG4gIHJpZ2h0OiAyOHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9OZXVjaGEtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvU3RlcHBlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3RyZWUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9zdmcvdHJlZS1hY3RpdmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzLzEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy8yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvcnNfc2Nob29sX2pzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2F1ZGlvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3Nub3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2Nsb3NlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3N2Zy9hcnJvdy1kb3duLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3N2Zy9iZWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3N2Zy9iYWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3N2Zy9jb25lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3N2Zy9zbm93Zmxha2Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3RveS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy90cmVlLzEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvdHJlZS8yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3RyZWUvMy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy90cmVlLzQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvdHJlZS81LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3RyZWUvNi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9iZy8xLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2JnLzIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmcvMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9iZy80LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yN19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2JnLzUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmcvNi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjlfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9iZy83LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2JnLzguanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMxX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmcvOS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9iZy8xMC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8q0J7QsdC90YPQu9C10L3QuNC1Ki9cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpmb2N1cywgOmFjdGl2ZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5hOmZvY3VzLCBhOmFjdGl2ZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5uYXYsIGZvb3RlciwgaGVhZGVyLCBhc2lkZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxufVxcblxcbmlucHV0LCBidXR0b24sIHRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dDo6LW1zLWNsZWFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG5hLCBhOnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxudWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTJmMmQ7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAzMHB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiAzMHB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuLmhlYWRlci1jb250YWluZXIgLmxvZ28ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGVhZGVyLWNvbnRhaW5lciAubG9nbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4uaGVhZGVyLWNvbnRhaW5lciAucGFnZSB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlci1jb250YWluZXIgLnBhZ2U6aG92ZXIge1xcbiAgY29sb3I6ICMwMDk2ODg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG59XFxuXFxuLnN0YXJ0LWdhbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnN0YXJ0LWdhbWUgLnRveXMtY2lyY2xlLWxlZnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMjAlO1xcbiAgd2lkdGg6IDIxLjc3MXZ3O1xcbiAgcGFkZGluZy1ib3R0b206IDM5Ljg4NiU7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxufVxcbi5zdGFydC1nYW1lIC50b3lzLWNpcmNsZS1yaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwJTtcXG4gIHJpZ2h0OiAyOCU7XFxuICB3aWR0aDogMTIuNzcxdnc7XFxuICBwYWRkaW5nLWJvdHRvbTogMjMuMzM0JTtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXG59XFxuLnN0YXJ0LWdhbWUgLnRpdGxlLWNvbnRlaW5lciBoMSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBwYWRkaW5nOiA2N3B4IDg1cHg7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDUzcHg7XFxuICBsaW5lLWhlaWdodDogNThweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlLCBhdCAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwKSAxMDAlKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG4uc3RhcnQtZ2FtZSAuc3RhcnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogNTRweDtcXG4gIHRvcDogNzAlO1xcbiAgbGVmdDogNTAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSwgYXQgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zdGFydC1nYW1lIC5zdGFydDpob3ZlciB7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MmYyZDtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5mb290ZXItY29udGFpbmVyIC5sZWZ0LWVsZW1lbnQgcCB7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBvcGFjaXR5OiA3MCU7XFxufVxcbi5mb290ZXItY29udGFpbmVyIC5sZWZ0LWVsZW1lbnQgcCBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG4uZm9vdGVyLWNvbnRhaW5lciAucmlnaHQtZWxlbWVudCBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAud3JhcHBlciB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG59XFxuLnRveXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50b3lzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRlaW5lciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5maWx0ZXItY29udGFpbmVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxufVxcblxcbi5maWx0ZXItY29udGFpbmVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5maWx0ZXItY29udGFpbmVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmZpbHRlci1jb250YWluZXItY29udGVudCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2V0dGluZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi5zZXR0aW5ncyAuYXVkaW8ge1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpO1xcbn1cXG4uc2V0dGluZ3MgLmF1ZGlvOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDc1JTtcXG59XFxuLnNldHRpbmdzIC5zbm93IHtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKTtcXG59XFxuLnNldHRpbmdzIC5zbm93OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDc1JTtcXG59XFxuLnNldHRpbmdzIC5zZWFyY2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2V0dGluZ3MgLnNlYXJjaCAuc2VhcmNoLWl0ZW0ge1xcbiAgd2lkdGg6IDI2MHB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCA1MHB4IDAgMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlLCBhdCAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwKSAxMDAlKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzYTlmNDtcXG59XFxuLnNldHRpbmdzIC5jbGVhbi1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpO1xcbn1cXG4uc2V0dGluZ3MgLnNlYXJjaC1pY29uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDc1JTtcXG59XFxuXFxuLnNvcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otY29sdW1uLWdhcDogNDBweDtcXG4gICAgICAgY29sdW1uLWdhcDogNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zb3J0IHAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnNvcnQgLnNvcnQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSwgYXQgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwM2E5ZjQ7XFxuICB6LWluZGV4OiA1O1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIgcCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuLnNvcnQgLnNvcnQtY29udGFpbmVyIC5jaG9vc2UtaXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyArIFwiKTtcXG59XFxuLnNvcnQgLnNvcnQtY29udGFpbmVyIC5jaG9vc2UtaXRlbTpob3ZlciB7XFxuICBvcGFjaXR5OiA3NSU7XFxufVxcbi5zb3J0IC5zb3J0LWNvbnRhaW5lciAuYWxsLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGxlZnQ6IDUlO1xcbiAgdG9wOiAxMTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxOTZmMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTU4NTc7XFxufVxcbi5zb3J0IC5zb3J0LWNvbnRhaW5lciAuYWxsLWl0ZW0gLnNvcnQtaXRlbSB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIgLmFsbC1pdGVtIC5zb3J0LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2OTM5NjtcXG59XFxuXFxuLnNvcnQtY2F0ZWdvcnkge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uc29ydC1jYXRlZ29yeSAuY2F0ZWdvcnktY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcbi5zb3J0LWNhdGVnb3J5IC5jYXRlZ29yeS1jb250YWluZXIgLmFsbCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZjZDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA3cHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlLCBhdCAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5zb3J0LWNhdGVnb3J5IC5jYXRlZ29yeS1jb250YWluZXIgLmFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLwn5e4XFxcIjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUwJTtcXG4gIGJvdHRvbTogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcXG59XFxuLnNvcnQtY2F0ZWdvcnkgLmNhdGVnb3J5LWNvbnRhaW5lciAuYWxsOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udG95cy1mb3JtIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4udG95cy1mb3JtIGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuZm9ybS1pY29uIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5mb3JtLWljb246aG92ZXIge1xcbiAgb3BhY2l0eTogODUlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5mb3JtLWljb25fX2FjdGl2ZSB7XFxuICBmaWx0ZXI6IGludmVydCg1NCUpIHNlcGlhKDEwNyUpIHNhdHVyYXRlKDkwMSUpIGh1ZS1yb3RhdGUoMjVkZWcpIGJyaWdodG5lc3MoMTQwJSkgY29udHJhc3QoOTMlKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi0xIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyArIFwiKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi0yIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyArIFwiKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi0zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyArIFwiKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi00IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyArIFwiKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi01IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi02IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyArIFwiKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi1uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKlNsaWRlciovXFxubWFpbiAubm9VaS10YXJnZXQge1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjZjBmMGYwLCAwIDNweCA2cHggLTVweCAjYmJiO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIC5ub1VpLWhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAycHg7XFxufVxcblxcbm1haW4gLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgY29udGVudDogbm9uZTtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMHB4O1xcbiAgd2lkdGg6IDBweDtcXG4gIGJhY2tncm91bmQ6ICNlOGU3ZTY7XFxuICBsZWZ0OiAxNHB4O1xcbiAgdG9wOiA2cHg7XFxufVxcblxcbm1haW4gLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICByaWdodDogLTEzcHg7XFxuICB0b3A6IC02cHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLCByYWRpYWwtZ3JhZGllbnQoNTcuMjMlIDI0OC4yJSBhdCAxMDcuMTclLCBhdCAxMDQuMDIlLCByZ2JhKDM0LCAxNTMsIDIzNSwgMC45MikgMCUsIHJnYmEoMzQsIDE1MywgMjM1LCAwLjA3KSAxMDAlKSwgcmFkaWFsLWdyYWRpZW50KDEwNC4yMiUgMjMwLjk0JSBhdCAtNC4yMiUsIGF0IDAlLCAjMjRjNWRiIDMuNjIlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4yNikgNTUuMSUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSwgcmFkaWFsLWdyYWRpZW50KDU3LjIzJSAyNDguMiUgYXQgMTA3LjE3JSAxMDQuMDIlLCByZ2JhKDM0LCAxNTMsIDIzNSwgMC45MikgMCUsIHJnYmEoMzQsIDE1MywgMjM1LCAwLjA3KSAxMDAlKSwgcmFkaWFsLWdyYWRpZW50KDEwNC4yMiUgMjMwLjk0JSBhdCAtNC4yMiUgMCUsICMyNGM1ZGIgMy42MiUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjI2KSA1NS4xJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIC5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogIzI0YzVkYjtcXG59XFxuXFxubWFpbiAubm9VaS1iYXNlLFxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIHdpZHRoOiA5NyU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5tYWluIC5ub1VpLXRvb2x0aXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbiNyYW5nZS15ZWFyIC5ub1VpLXRvb2x0aXAge1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4jcmFuZ2UteWVhciB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4vKlNsaWRlci1FTkQqL1xcbi5jb3VudC1jb3B5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4uY291bnQtY29weSBoMyB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jb3VudC1jb3B5IC5jb3VudC1jb3B5LWl0ZW0ge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuLmNvdW50LWNvcHkgLm1pbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEyNSU7XFxuICBsZWZ0OiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLmNvdW50LWNvcHkgLm1heCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEyNSU7XFxuICByaWdodDogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi55ZWFyLXB1cmNoYXNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogNDBweCAwIDIwcHggMDtcXG59XFxuLnllYXItcHVyY2hhc2UgaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ueWVhci1wdXJjaGFzZSAueWVhci1wdXJjaGFzZS1pdGVtIHtcXG4gIG1hcmdpbi10b3A6IDM1cHg7XFxufVxcbi55ZWFyLXB1cmNoYXNlIC5taW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMjUlO1xcbiAgbGVmdDogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi55ZWFyLXB1cmNoYXNlIC5tYXgge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMjUlO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uY29sb3Ige1xcbiAgbWFyZ2luOiA0MHB4IDAgMjBweCAwO1xcbn1cXG4uY29sb3IgaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAyNXB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiAyNXB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLmNvbG9yLWl0ZW0ge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuY29sb3ItaXRlbTpob3ZlciB7XFxuICBvcGFjaXR5OiA3NSU7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5jb2xvci1pdGVtX19hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMnB4IHJnYmEoMjUzLCAyMTUsIDAsIDAuOCk7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5pdGVtLTEge1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLml0ZW0tMiB7XFxuICBiYWNrZ3JvdW5kOiAjZmRkNzAwO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuaXRlbS0zIHtcXG4gIGJhY2tncm91bmQ6ICNmZDAwMDA7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5pdGVtLTQge1xcbiAgYmFja2dyb3VuZDogIzIyOTllYjtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLml0ZW0tNSB7XFxuICBiYWNrZ3JvdW5kOiAjMDhhYTA1O1xcbn1cXG5cXG4uc2l6ZSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLnNpemUgaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uc2l6ZSAuc2l6ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zaXplIC5zaXplLWNvbnRhaW5lciAuY29udGFpbmVyLWl0ZW0ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnNpemUgLnNpemUtY29udGFpbmVyIC5zaXplLWl0ZW0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2Y2Q7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogN3B4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSwgYXQgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2l6ZSAuc2l6ZS1jb250YWluZXIgLnNpemUtaXRlbTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLwn5e4XFxcIjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUwJTtcXG4gIGJvdHRvbTogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcXG59XFxuLnNpemUgLnNpemUtY29udGFpbmVyIC5zaXplLWl0ZW06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5mYXZvcml0ZSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLmZhdm9yaXRlIC5jb250YWluZXItZmF2b3JpdGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLmZhdm9yaXRlIC5jb250YWluZXItZmF2b3JpdGUgLmZhdm9yaXRlLWl0ZW0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2Y2Q7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogN3B4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSwgYXQgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uZmF2b3JpdGUgLmNvbnRhaW5lci1mYXZvcml0ZSAuZmF2b3JpdGUtaXRlbTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLwn5e4XFxcIjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUwJTtcXG4gIGJvdHRvbTogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcXG59XFxuLmZhdm9yaXRlIC5jb250YWluZXItZmF2b3JpdGUgLmZhdm9yaXRlLWl0ZW06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zdWNzc2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDI1cHggMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1vei1jb2x1bW4tZ2FwOiA0MHB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiA0MHB4O1xcbn1cXG4uc3Vjc3NlcyAuYXBwbHktYnRuIHtcXG4gIHdpZHRoOiAxODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUsIGF0IDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uc3Vjc3NlcyAuYXBwbHktYnRuOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDc1JTtcXG59XFxuXFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWNvbHVtbi1nYXA6IDUwcHg7XFxuICAgICAgIGNvbHVtbi1nYXA6IDUwcHg7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC50aXRsZSBoMiB7XFxuICBtYXJnaW46IDIwcHggMCAyMHB4IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDhweCk7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLm1lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5tZXNzYWdlIC5tZXNzYWdlLWl0ZW0ge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNjcsIDEwNCwgMTA2LCAwLjcpO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAyNXB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiAyNXB4O1xcbiAgcm93LWdhcDogMjVweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50IHtcXG4gIHdpZHRoOiAyMjVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMCA1MHB4IDA7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlLCBhdCAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCUpO1xcbiAgYm9yZGVyOiByZ2JhKDEyMSwgMTM5LCAxNDQsIDAuMSkgc29saWQgNXB4O1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCBoNCB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQgLmljb24tdG95LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQgLmljb24tdG95LWNvbnRhaW5lciAuaWNvbi10b3kge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgaGVpZ2h0OiAxMTBweDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQgLmRhdGEtdG95IHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJvdy1nYXA6IDEwcHg7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQgLmRhdGEtdG95IGxpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuYWN0aXZlLXRveSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAjNGNhZjUwIHNvbGlkIDVweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDkuNTYlIDEwOS41NiUgYXQgMCUsIGF0IC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIDAlLCByZ2JhKDcwLCAxMDksIDExNCwgMC40KSAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsIHJnYmEoNzAsIDEwOSwgMTE0LCAwLjQpIDEwMCUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjc1KTtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDkuNTYlIDEwOS41NiUgYXQgMCUsIGF0IC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNCkgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNCkgMTAwJSk7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQ6aG92ZXIgLmljb24tdG95LWNvbnRhaW5lciAuaWNvbi10b3kge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmFjdGl2ZS10b3k6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjc1KTtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5tZXNzYWdlX2FjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEycHg7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2ODZhO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4uY2hyaXN0bWFzLXRyZWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jaHJpc3RtYXMtdHJlZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi4zZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbi5zZXR0aW5ncy10cmVlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjUsIDQ3LCA0NSwgMC43KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnNldHRpbmdzLXRyZWUtcGFnZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tb3otY29sdW1uLWdhcDogNTBweDtcXG4gICAgICAgY29sdW1uLWdhcDogNTBweDtcXG59XFxuXFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gaDIge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiAuY29sbGVjdGlvbi1jb250aW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xcbiAgcm93LWdhcDogMTBweDtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSwgYXQgLTIuOTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMCUsIHJnYmEoMTc5LCAyNDYsIDI1NSwgMC41KSAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMCUsIHJnYmEoMTc5LCAyNDYsIDI1NSwgMC41KSAxMDAlKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBib3JkZXI6ICMxNzJhMjkgMnB4IHNvbGlkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiAuY29sbGVjdGlvbi1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQgLmNvbnRlaW5lci1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWNvbnRpbmVyIC5jb250ZWluZXItY29udGVudCAudHJlZS0xIHtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gKyBcIik7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWNvbnRpbmVyIC5jb250ZWluZXItY29udGVudCAudHJlZS0yIHtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gKyBcIik7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWNvbnRpbmVyIC5jb250ZWluZXItY29udGVudCAudHJlZS0zIHtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gKyBcIik7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWNvbnRpbmVyIC5jb250ZWluZXItY29udGVudCAudHJlZS00IHtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gKyBcIik7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWNvbnRpbmVyIC5jb250ZWluZXItY29udGVudCAudHJlZS01IHtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gKyBcIik7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWNvbnRpbmVyIC5jb250ZWluZXItY29udGVudCAudHJlZS02IHtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gKyBcIik7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWNvbnRpbmVyIC5jb250ZWluZXItY29udGVudDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNHB4IHJnYmEoMSwgMTMxLCA4NSwgMC45KSBpbnNldDtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgaDIge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XFxuICAtbW96LWNvbHVtbi1nYXA6IDEwcHg7XFxuICAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICBncmlkLXJvdy1nYXA6IDEwcHg7XFxuICByb3ctZ2FwOiAxMHB4O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQtYmcge1xcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6ICMxNzJhMjkgMnB4IHNvbGlkO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50LWJnOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA0cHggcmdiYSgxLCAxMzEsIDg1LCAwLjkpIGluc2V0O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctMSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyArIFwiKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmJnLTIge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX18gKyBcIik7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy0zIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19fICsgXCIpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctNCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNl9fXyArIFwiKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmJnLTUge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjdfX18gKyBcIik7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy02IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19fICsgXCIpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctNyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOV9fXyArIFwiKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmJnLTgge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzBfX18gKyBcIik7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy05IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMxX19fICsgXCIpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctMTAge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzJfX18gKyBcIik7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5jb250ZWluZXItY29udGVudC1iZ19fYWN0aXZlIHtcXG4gIGJvcmRlcjogIzAzYTlmNCAycHggc29saWQ7XFxufVxcblxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIGgyIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLWNvbnRhaW5lci1pdGVtIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLTEge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZGQwZDBkLCAjZTVmMjEwLCAjMGFlNTExKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggcmdiYSgyNTEsIDI1MSwgMjUxLCAwLjMpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtMTpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCAjZmJmYmZiO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtMiB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmNjA3MDcsICNjYzRjM2YsICNkZjcwNDgpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDI1NSwgMSwgMSwgMC4zKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLTI6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAycHggI2ZmMDEwMTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLTMge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGYwMGZmLCAjMjUyYWMzLCAjMWIwZDZmKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggcmdiYSgxMSwgNjAsIDI0NywgMC4zKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLTM6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAycHggIzBiM2NmNztcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLTQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGZmZjAwLCAjMjVjMzJhLCAjMGQ2ZjM3KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggcmdiYSgzNSwgMjQ3LCAxMSwgMC4zKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLTQ6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAycHggIzIzZjcwYjtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLTUge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZTVmZjAwLCAjYjNjMzI1LCAjNmY2YzBkKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggcmdiYSgyMTUsIDIyNywgMTYsIDAuMyk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC01OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMnB4ICNkN2UzMTA7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC1pdGVtX19hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAycHggI2ZiZmJmYjtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuc3dpdGNoIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuc3dpdGNoIC5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuc3dpdGNoIC5zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAxM3B4O1xcbiAgd2lkdGg6IDEzcHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmQyMDk7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2YTYyO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLnN3aXRjaCBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMGU2YTYyO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLnN3aXRjaCAuc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuc3dpdGNoIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1haW4tdHJlZSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tYWluLXRyZWUgLmNocmlzdG1hcy1iZy1jdXJyZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb3ZlciB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyArIFwiKTtcXG59XFxuLm1haW4tdHJlZSAuY2hyaXN0bWFzLXRyZWUtY2FycmVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDElO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4udG95cy10cmVlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjUsIDQ3LCA0NSwgMC43KTtcXG59XFxuLnRveXMtdHJlZSAudGl0bGUgaDIge1xcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCA1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b3lzLXRyZWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA1cHg7XFxuICAtbW96LWNvbHVtbi1nYXA6IDVweDtcXG4gICAgICAgY29sdW1uLWdhcDogNXB4O1xcbiAgZ3JpZC1yb3ctZ2FwOiA1cHg7XFxuICByb3ctZ2FwOiA1cHg7XFxufVxcbi50b3lzLXRyZWUtY29udGFpbmVyIC50b3ktZm9yLXRyZWUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlLCBhdCAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCUpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogIzE3MmEyOSAycHggc29saWQ7XFxufVxcbi50b3lzLXRyZWUtY29udGFpbmVyIC50b3ktZm9yLXRyZWUgLnRveS1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA2NSU7XFxuICBoZWlnaHQ6IDY1JTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi50b3lzLXRyZWUtY29udGFpbmVyIC50b3ktZm9yLXRyZWUgLnRveS1jb3VudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuLnRveXMtdHJlZS1jb250YWluZXIgLnRveS1mb3ItdHJlZTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNHB4IHJnYmEoMSwgMTMxLCA4NSwgMC45KSBpbnNldDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdhcmxhbmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTQlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLS1yZWQ6ICNmZjJjMmM7XFxuICAtLXllbGxvdzogI2ZmZWIwMDtcXG4gIC0tZ3JlZW46ICMwMGZmNWQ7XFxuICAtLWJsdWU6ICMwMDk1ZmY7XFxuICAtLXNwZWVkOiAycztcXG4gIHotaW5kZXg6IDE1O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5yZWQge1xcbiAgZmlsbDogI2Y4MDYwNjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rUmVkUmVkO1xcbiAgICAgICAgICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtSZWRSZWQ7XFxufVxcblxcbi5yZWRfMSB7XFxuICBmaWxsOiAjZjgwNjA2O1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtSZWRfMTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rUmVkXzE7XFxufVxcblxcbi5yZWRfMiB7XFxuICBmaWxsOiAjZjdiMWIxO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtSZWRfMjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rUmVkXzI7XFxufVxcblxcbi55ZWxsb3cge1xcbiAgZmlsbDogdmFyKC0teWVsbG93KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rWWVsbG93O1xcbiAgICAgICAgICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtZZWxsb3c7XFxufVxcblxcbi55ZWxsb3dfMSB7XFxuICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtZZWxsb3dfMTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rWWVsbG93XzE7XFxufVxcblxcbi55ZWxsb3dfMiB7XFxuICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtZZWxsb3dfMjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rWWVsbG93XzI7XFxufVxcblxcbi5ibHVlIHtcXG4gIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtCbHVlO1xcbiAgICAgICAgICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtCbHVlO1xcbn1cXG5cXG4uYmx1ZV8xIHtcXG4gIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtCbHVlXzE7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0JsdWVfMTtcXG59XFxuXFxuLmJsdWVfMiB7XFxuICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rQmx1ZV8yO1xcbiAgICAgICAgICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtCbHVlXzI7XFxufVxcblxcbi5ncmVlbiB7XFxuICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0dyZWVuO1xcbiAgICAgICAgICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtHcmVlbjtcXG59XFxuXFxuLmdyZWVuXzEge1xcbiAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtHcmVlbl8xO1xcbiAgICAgICAgICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtHcmVlbl8xO1xcbn1cXG5cXG4uZ3JlZW5fMiB7XFxuICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0dyZWVuXzI7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0dyZWVuXzI7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBibGlua1JlZCB7XFxuICAwJSB7XFxuICAgIGZpbGw6IHZhcigtLXJlZCk7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6IHZhcigtLWdyZWVuKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6IHZhcigtLXllbGxvdyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmtSZWQge1xcbiAgMCUge1xcbiAgICBmaWxsOiB2YXIoLS1yZWQpO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogdmFyKC0tYmx1ZSk7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtSZWRfMSB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICNmODA2MDY7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjZjdiMWIxO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogI2Y4MDYwNjtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICNmN2IxYjE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtSZWRfMSB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICNmODA2MDY7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjZjdiMWIxO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogI2Y4MDYwNjtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICNmN2IxYjE7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBibGlua1JlZF8yIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogI2Y3YjFiMTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICNmODA2MDY7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjZjdiMWIxO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogI2Y4MDYwNjtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua1JlZF8yIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogI2Y3YjFiMTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICNmODA2MDY7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjZjdiMWIxO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogI2Y4MDYwNjtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rWWVsbG93IHtcXG4gIDAlIHtcXG4gICAgZmlsbDogdmFyKC0teWVsbG93KTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6IHZhcigtLXJlZCk7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6IHZhcigtLWdyZWVuKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua1llbGxvdyB7XFxuICAwJSB7XFxuICAgIGZpbGw6IHZhcigtLXllbGxvdyk7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiB2YXIoLS1yZWQpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogdmFyKC0tYmx1ZSk7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBibGlua1llbGxvd18xIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogI2ZmZDkwNDtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICNmN2YzY2Q7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjZmZkOTA0O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogI2Y3ZjNjZDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua1llbGxvd18xIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogI2ZmZDkwNDtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICNmN2YzY2Q7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjZmZkOTA0O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogI2Y3ZjNjZDtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rWWVsbG93XzIge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjZjdmM2NkO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogI2ZmZDkwNDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICNmN2YzY2Q7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjZmZkOTA0O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rWWVsbG93XzIge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjZjdmM2NkO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogI2ZmZDkwNDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICNmN2YzY2Q7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjZmZkOTA0O1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtCbHVlIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogdmFyKC0tYmx1ZSk7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogdmFyKC0tcmVkKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua0JsdWUge1xcbiAgMCUge1xcbiAgICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6IHZhcigtLWdyZWVuKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6IHZhcigtLXllbGxvdyk7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiB2YXIoLS1yZWQpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtCbHVlXzEge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjMTEwMGZmO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogIzkyY2RmNztcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICMxMTAwZmY7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjOTJjZGY3O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rQmx1ZV8xIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogIzExMDBmZjtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICM5MmNkZjc7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjMTEwMGZmO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogIzkyY2RmNztcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rQmx1ZV8yIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogIzkyY2RmNztcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICMxMTAwZmY7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjOTJjZGY3O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogIzExMDBmZjtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua0JsdWVfMiB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICM5MmNkZjc7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjMTEwMGZmO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogIzkyY2RmNztcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICMxMTAwZmY7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBibGlua0dyZWVuIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogdmFyKC0teWVsbG93KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6IHZhcigtLXJlZCk7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua0dyZWVuIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogdmFyKC0teWVsbG93KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6IHZhcigtLXJlZCk7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rR3JlZW5fMSB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICMyOGM3MDA7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjYmNmZmQ1O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogIzI4YzcwMDtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICNiY2ZmZDU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtHcmVlbl8xIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogIzI4YzcwMDtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICNiY2ZmZDU7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjMjhjNzAwO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogI2JjZmZkNTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rR3JlZW5fMiB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICNiY2ZmZDU7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjMjhjNzAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogI2JjZmZkNTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICMyOGM3MDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtHcmVlbl8yIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogI2JjZmZkNTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICMyOGM3MDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjYmNmZmQ1O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogIzI4YzcwMDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19zdGFydC1wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3RveXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdHJlZS5z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O0VMKzVCRjtFSzc1QkE7SUFDRSxpQkFBQTtFTCs1QkY7RUs3NUJBO0lBQ0Usa0JBQUE7RUwrNUJGO0FBQ0Y7QUs1NUJBO0VBQ0U7SUFDRSxhQUFBO0VMODVCRjtFSzU1QkE7SUFDRSxhQUFBO0VMODVCRjtFSzU1QkE7SUFDRSxhQUFBO0VMODVCRjtFSzU1QkE7SUFDRSxhQUFBO0VMODVCRjtBQUNGO0FLMTZCQTtFQUNFO0lBQ0UsYUFBQTtFTDg1QkY7RUs1NUJBO0lBQ0UsYUFBQTtFTDg1QkY7RUs1NUJBO0lBQ0UsYUFBQTtFTDg1QkY7RUs1NUJBO0lBQ0UsYUFBQTtFTDg1QkY7QUFDRjtBSzM1QkE7RUFDRTtJQUNFLGFBQUE7RUw2NUJGO0VLMzVCQTtJQUNFLGFBQUE7RUw2NUJGO0VLMzVCQTtJQUNFLGFBQUE7RUw2NUJGO0VLMzVCQTtJQUNFLGFBQUE7RUw2NUJGO0FBQ0Y7QUt6NkJBO0VBQ0U7SUFDRSxhQUFBO0VMNjVCRjtFSzM1QkE7SUFDRSxhQUFBO0VMNjVCRjtFSzM1QkE7SUFDRSxhQUFBO0VMNjVCRjtFSzM1QkE7SUFDRSxhQUFBO0VMNjVCRjtBQUNGO0FLMTVCQTtFQUNFO0lBQ0UsaUJBQUE7RUw0NUJGO0VLMTVCQTtJQUNFLGtCQUFBO0VMNDVCRjtFSzE1QkE7SUFDRSxtQkFBQTtFTDQ1QkY7RUsxNUJBO0lBQ0UsZ0JBQUE7RUw0NUJGO0FBQ0Y7QUt4NkJBO0VBQ0U7SUFDRSxpQkFBQTtFTDQ1QkY7RUsxNUJBO0lBQ0Usa0JBQUE7RUw0NUJGO0VLMTVCQTtJQUNFLG1CQUFBO0VMNDVCRjtFSzE1QkE7SUFDRSxnQkFBQTtFTDQ1QkY7QUFDRjtBS3o1QkE7RUFDRTtJQUNFLGFBQUE7RUwyNUJGO0VLejVCQTtJQUNFLGFBQUE7RUwyNUJGO0VLejVCQTtJQUNFLGFBQUE7RUwyNUJGO0VLejVCQTtJQUNFLGFBQUE7RUwyNUJGO0FBQ0Y7QUt2NkJBO0VBQ0U7SUFDRSxhQUFBO0VMMjVCRjtFS3o1QkE7SUFDRSxhQUFBO0VMMjVCRjtFS3o1QkE7SUFDRSxhQUFBO0VMMjVCRjtFS3o1QkE7SUFDRSxhQUFBO0VMMjVCRjtBQUNGO0FLeDVCQTtFQUNFO0lBQ0UsYUFBQTtFTDA1QkY7RUt4NUJBO0lBQ0UsYUFBQTtFTDA1QkY7RUt4NUJBO0lBQ0UsYUFBQTtFTDA1QkY7RUt4NUJBO0lBQ0UsYUFBQTtFTDA1QkY7QUFDRjtBS3Q2QkE7RUFDRTtJQUNFLGFBQUE7RUwwNUJGO0VLeDVCQTtJQUNFLGFBQUE7RUwwNUJGO0VLeDVCQTtJQUNFLGFBQUE7RUwwNUJGO0VLeDVCQTtJQUNFLGFBQUE7RUwwNUJGO0FBQ0Y7QUt2NUJBO0VBQ0U7SUFDRSxrQkFBQTtFTHk1QkY7RUt2NUJBO0lBQ0UsbUJBQUE7RUx5NUJGO0VLdjVCQTtJQUNFLGdCQUFBO0VMeTVCRjtFS3Y1QkE7SUFDRSxpQkFBQTtFTHk1QkY7QUFDRjtBS3I2QkE7RUFDRTtJQUNFLGtCQUFBO0VMeTVCRjtFS3Y1QkE7SUFDRSxtQkFBQTtFTHk1QkY7RUt2NUJBO0lBQ0UsZ0JBQUE7RUx5NUJGO0VLdjVCQTtJQUNFLGlCQUFBO0VMeTVCRjtBQUNGO0FLdDVCQTtFQUNFO0lBQ0UsYUFBQTtFTHc1QkY7RUt0NUJBO0lBQ0UsYUFBQTtFTHc1QkY7RUt0NUJBO0lBQ0UsYUFBQTtFTHc1QkY7RUt0NUJBO0lBQ0UsYUFBQTtFTHc1QkY7QUFDRjtBS3A2QkE7RUFDRTtJQUNFLGFBQUE7RUx3NUJGO0VLdDVCQTtJQUNFLGFBQUE7RUx3NUJGO0VLdDVCQTtJQUNFLGFBQUE7RUx3NUJGO0VLdDVCQTtJQUNFLGFBQUE7RUx3NUJGO0FBQ0Y7QUtyNUJBO0VBQ0U7SUFDRSxhQUFBO0VMdTVCRjtFS3I1QkE7SUFDRSxhQUFBO0VMdTVCRjtFS3I1QkE7SUFDRSxhQUFBO0VMdTVCRjtFS3I1QkE7SUFDRSxhQUFBO0VMdTVCRjtBQUNGO0FLbjZCQTtFQUNFO0lBQ0UsYUFBQTtFTHU1QkY7RUtyNUJBO0lBQ0UsYUFBQTtFTHU1QkY7RUtyNUJBO0lBQ0UsYUFBQTtFTHU1QkY7RUtyNUJBO0lBQ0UsYUFBQTtFTHU1QkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8q0J7QsdC90YPQu9C10L3QuNC1Ki9cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpmb2N1cywgOmFjdGl2ZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5hOmZvY3VzLCBhOmFjdGl2ZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5uYXYsIGZvb3RlciwgaGVhZGVyLCBhc2lkZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxufVxcblxcbmlucHV0LCBidXR0b24sIHRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dDo6LW1zLWNsZWFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG5hLCBhOnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxudWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvTmV1Y2hhLVJlZ3VsYXIudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvU3RlcHBlLnR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTJmMmQ7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogMzBweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi5oZWFkZXItY29udGFpbmVyIC5sb2dvIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3RyZWUuc3ZnKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlci1jb250YWluZXIgLmxvZ286aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvdHJlZS1hY3RpdmUuc3ZnKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbi5oZWFkZXItY29udGFpbmVyIC5wYWdlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGVhZGVyLWNvbnRhaW5lciAucGFnZTpob3ZlciB7XFxuICBjb2xvcjogIzAwOTY4ODtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy5qcGcpO1xcbn1cXG5cXG4uc3RhcnQtZ2FtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uc3RhcnQtZ2FtZSAudG95cy1jaXJjbGUtbGVmdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAyMCU7XFxuICB3aWR0aDogMjEuNzcxdnc7XFxuICBwYWRkaW5nLWJvdHRvbTogMzkuODg2JTtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvMS5wbmcpO1xcbn1cXG4uc3RhcnQtZ2FtZSAudG95cy1jaXJjbGUtcmlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMCU7XFxuICByaWdodDogMjglO1xcbiAgd2lkdGg6IDEyLjc3MXZ3O1xcbiAgcGFkZGluZy1ib3R0b206IDIzLjMzNCU7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzLzIucG5nKTtcXG59XFxuLnN0YXJ0LWdhbWUgLnRpdGxlLWNvbnRlaW5lciBoMSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBwYWRkaW5nOiA2N3B4IDg1cHg7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDUzcHg7XFxuICBsaW5lLWhlaWdodDogNThweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwKSAxMDAlKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcbi5zdGFydC1nYW1lIC5zdGFydCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgaGVpZ2h0OiA1NHB4O1xcbiAgdG9wOiA3MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwKSAxMDAlKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3RhcnQtZ2FtZSAuc3RhcnQ6aG92ZXIge1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTJmMmQ7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZm9vdGVyLWNvbnRhaW5lciAubGVmdC1lbGVtZW50IHAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgb3BhY2l0eTogNzAlO1xcbn1cXG4uZm9vdGVyLWNvbnRhaW5lciAubGVmdC1lbGVtZW50IHAgc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuLmZvb3Rlci1jb250YWluZXIgLnJpZ2h0LWVsZW1lbnQgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxODBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvcnNfc2Nob29sX2pzLnBuZyk7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC53cmFwcGVyIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcbn1cXG4udG95cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRveXMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRlaW5lciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5maWx0ZXItY29udGFpbmVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxufVxcblxcbi5maWx0ZXItY29udGFpbmVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5maWx0ZXItY29udGFpbmVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmZpbHRlci1jb250YWluZXItY29udGVudCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2V0dGluZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi5zZXR0aW5ncyAuYXVkaW8ge1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvYXVkaW8uc3ZnKTtcXG59XFxuLnNldHRpbmdzIC5hdWRpbzpob3ZlciB7XFxuICBvcGFjaXR5OiA3NSU7XFxufVxcbi5zZXR0aW5ncyAuc25vdyB7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMzZweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9zbm93LnN2Zyk7XFxufVxcbi5zZXR0aW5ncyAuc25vdzpob3ZlciB7XFxuICBvcGFjaXR5OiA3NSU7XFxufVxcbi5zZXR0aW5ncyAuc2VhcmNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnNldHRpbmdzIC5zZWFyY2ggLnNlYXJjaC1pdGVtIHtcXG4gIHdpZHRoOiAyNjBweDtcXG4gIGhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDAgNTBweCAwIDIwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzYTlmNDtcXG59XFxuLnNldHRpbmdzIC5jbGVhbi1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9jbG9zZS5zdmcpO1xcbn1cXG4uc2V0dGluZ3MgLnNlYXJjaC1pY29uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDc1JTtcXG59XFxuXFxuLnNvcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc29ydCBwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5zb3J0IC5zb3J0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGhlaWdodDogMzZweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwM2E5ZjQ7XFxuICB6LWluZGV4OiA1O1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIgcCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuLnNvcnQgLnNvcnQtY29udGFpbmVyIC5jaG9vc2UtaXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvYXJyb3ctZG93bi5zdmcpO1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIgLmNob29zZS1pdGVtOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDc1JTtcXG59XFxuLnNvcnQgLnNvcnQtY29udGFpbmVyIC5hbGwtaXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogOTAlO1xcbiAgbGVmdDogNSU7XFxuICB0b3A6IDExMCU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNTg1NztcXG59XFxuLnNvcnQgLnNvcnQtY29udGFpbmVyIC5hbGwtaXRlbSAuc29ydC1pdGVtIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zb3J0IC5zb3J0LWNvbnRhaW5lciAuYWxsLWl0ZW0gLnNvcnQtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY5Mzk2O1xcbn1cXG5cXG4uc29ydC1jYXRlZ29yeSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5zb3J0LWNhdGVnb3J5IC5jYXRlZ29yeS1jb250YWluZXIge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuLnNvcnQtY2F0ZWdvcnkgLmNhdGVnb3J5LWNvbnRhaW5lciAuYWxsIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmNkO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDdweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc29ydC1jYXRlZ29yeSAuY2F0ZWdvcnktY29udGFpbmVyIC5hbGw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi8J+XuFxcXCI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBib3R0b206IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxufVxcbi5zb3J0LWNhdGVnb3J5IC5jYXRlZ29yeS1jb250YWluZXIgLmFsbDpjaGVja2VkOjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRveXMtZm9ybSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLnRveXMtZm9ybSBoMyB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmZvcm0taWNvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuZm9ybS1pY29uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDg1JTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuZm9ybS1pY29uX19hY3RpdmUge1xcbiAgZmlsdGVyOiBpbnZlcnQoNTQlKSBzZXBpYSgxMDclKSBzYXR1cmF0ZSg5MDElKSBodWUtcm90YXRlKDI1ZGVnKSBicmlnaHRuZXNzKDE0MCUpIGNvbnRyYXN0KDkzJSk7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tMSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2JlbGwuc3ZnKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi0yIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvYmFsbC5zdmcpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLTMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9jb25lLnN2Zyk7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tNCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3Nub3dmbGFrZS5zdmcpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLTUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIG5vLXJlcGVhdCB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvc25vdy5zdmcpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLTYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy90b3kuc3ZnKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi1uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKlNsaWRlciovXFxubWFpbiAubm9VaS10YXJnZXQge1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjZjBmMGYwLCAwIDNweCA2cHggLTVweCAjYmJiO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIC5ub1VpLWhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAycHg7XFxufVxcblxcbm1haW4gLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgY29udGVudDogbm9uZTtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMHB4O1xcbiAgd2lkdGg6IDBweDtcXG4gIGJhY2tncm91bmQ6ICNlOGU3ZTY7XFxuICBsZWZ0OiAxNHB4O1xcbiAgdG9wOiA2cHg7XFxufVxcblxcbm1haW4gLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICByaWdodDogLTEzcHg7XFxuICB0b3A6IC02cHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLCByYWRpYWwtZ3JhZGllbnQoNTcuMjMlIDI0OC4yJSBhdCAxMDcuMTclIDEwNC4wMiUsIHJnYmEoMzQsIDE1MywgMjM1LCAwLjkyKSAwJSwgcmdiYSgzNCwgMTUzLCAyMzUsIDAuMDcpIDEwMCUpLCByYWRpYWwtZ3JhZGllbnQoMTA0LjIyJSAyMzAuOTQlIGF0IC00LjIyJSAwJSwgIzI0YzVkYiAzLjYyJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMjYpIDU1LjElKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4gLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjMjRjNWRiO1xcbn1cXG5cXG5tYWluIC5ub1VpLWJhc2UsXFxuLm5vVWktY29ubmVjdHMge1xcbiAgd2lkdGg6IDk3JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbm1haW4gLm5vVWktdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuI3JhbmdlLXllYXIgLm5vVWktdG9vbHRpcCB7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbiNyYW5nZS15ZWFyIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi8qU2xpZGVyLUVORCovXFxuLmNvdW50LWNvcHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi5jb3VudC1jb3B5IGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmNvdW50LWNvcHkgLmNvdW50LWNvcHktaXRlbSB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG4uY291bnQtY29weSAubWluIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTI1JTtcXG4gIGxlZnQ6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uY291bnQtY29weSAubWF4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTI1JTtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnllYXItcHVyY2hhc2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiA0MHB4IDAgMjBweCAwO1xcbn1cXG4ueWVhci1wdXJjaGFzZSBoMyB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi55ZWFyLXB1cmNoYXNlIC55ZWFyLXB1cmNoYXNlLWl0ZW0ge1xcbiAgbWFyZ2luLXRvcDogMzVweDtcXG59XFxuLnllYXItcHVyY2hhc2UgLm1pbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEyNSU7XFxuICBsZWZ0OiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnllYXItcHVyY2hhc2UgLm1heCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEyNSU7XFxuICByaWdodDogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5jb2xvciB7XFxuICBtYXJnaW46IDQwcHggMCAyMHB4IDA7XFxufVxcbi5jb2xvciBoMyB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiAyNXB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLmNvbG9yLWl0ZW0ge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuY29sb3ItaXRlbTpob3ZlciB7XFxuICBvcGFjaXR5OiA3NSU7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5jb2xvci1pdGVtX19hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMnB4IHJnYmEoMjUzLCAyMTUsIDAsIDAuOCk7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5pdGVtLTEge1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLml0ZW0tMiB7XFxuICBiYWNrZ3JvdW5kOiAjZmRkNzAwO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuaXRlbS0zIHtcXG4gIGJhY2tncm91bmQ6ICNmZDAwMDA7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5pdGVtLTQge1xcbiAgYmFja2dyb3VuZDogIzIyOTllYjtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLml0ZW0tNSB7XFxuICBiYWNrZ3JvdW5kOiAjMDhhYTA1O1xcbn1cXG5cXG4uc2l6ZSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLnNpemUgaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uc2l6ZSAuc2l6ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zaXplIC5zaXplLWNvbnRhaW5lciAuY29udGFpbmVyLWl0ZW0ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnNpemUgLnNpemUtY29udGFpbmVyIC5zaXplLWl0ZW0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2Y2Q7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogN3B4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5zaXplIC5zaXplLWNvbnRhaW5lciAuc2l6ZS1pdGVtOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIvCfl7hcXFwiO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTAlO1xcbiAgYm90dG9tOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcbn1cXG4uc2l6ZSAuc2l6ZS1jb250YWluZXIgLnNpemUtaXRlbTpjaGVja2VkOjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZhdm9yaXRlIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4uZmF2b3JpdGUgLmNvbnRhaW5lci1mYXZvcml0ZSB7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uZmF2b3JpdGUgLmNvbnRhaW5lci1mYXZvcml0ZSAuZmF2b3JpdGUtaXRlbSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZjZDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA3cHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmZhdm9yaXRlIC5jb250YWluZXItZmF2b3JpdGUgLmZhdm9yaXRlLWl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi8J+XuFxcXCI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBib3R0b206IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxufVxcbi5mYXZvcml0ZSAuY29udGFpbmVyLWZhdm9yaXRlIC5mYXZvcml0ZS1pdGVtOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3Vjc3NlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAyNXB4IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbHVtbi1nYXA6IDQwcHg7XFxufVxcbi5zdWNzc2VzIC5hcHBseS1idG4ge1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnN1Y3NzZXMgLmFwcGx5LWJ0bjpob3ZlciB7XFxuICBvcGFjaXR5OiA3NSU7XFxufVxcblxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogNTBweDtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLnRpdGxlIGgyIHtcXG4gIG1hcmdpbjogMjBweCAwIDIwcHggNTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLm1lc3NhZ2UgLm1lc3NhZ2UtaXRlbSB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSg2NywgMTA0LCAxMDYsIDAuNyk7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiAyNXB4O1xcbiAgcm93LWdhcDogMjVweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50IHtcXG4gIHdpZHRoOiAyMjVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMCA1MHB4IDA7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJSk7XFxuICBib3JkZXI6IHJnYmEoMTIxLCAxMzksIDE0NCwgMC4xKSBzb2xpZCA1cHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50IGg0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCAuaWNvbi10b3ktY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCAuaWNvbi10b3ktY29udGFpbmVyIC5pY29uLXRveSB7XFxuICB3aWR0aDogMTEwcHg7XFxuICBoZWlnaHQ6IDExMHB4O1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCAuZGF0YS10b3kge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcm93LWdhcDogMTBweDtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCAuZGF0YS10b3kgbGkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5hY3RpdmUtdG95IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6ICM0Y2FmNTAgc29saWQgNXB4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAwJSwgcmdiYSg3MCwgMTA5LCAxMTQsIDAuNCkgMTAwJSk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IHJnYmEoNzYsIDE3NSwgODAsIDAuNzUpO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjQpIDEwMCUpO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50OmhvdmVyIC5pY29uLXRveS1jb250YWluZXIgLmljb24tdG95IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5hY3RpdmUtdG95OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggcmdiYSg3NiwgMTc1LCA4MCwgMC43NSk7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAubWVzc2FnZV9hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMnB4O1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNjg2YTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmNocmlzdG1hcy10cmVlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2hyaXN0bWFzLXRyZWUtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuM2ZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4uc2V0dGluZ3MtdHJlZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1LCA0NywgNDUsIDAuNyk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5zZXR0aW5ncy10cmVlLXBhZ2Uge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiA1MHB4O1xcbn1cXG5cXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiBoMiB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWNvbnRpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgcm93LWdhcDogMTBweDtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJvcmRlcjogIzE3MmEyOSAycHggc29saWQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWNvbnRpbmVyIC5jb250ZWluZXItY29udGVudCAuY29udGVpbmVyLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IC50cmVlLTEge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy90cmVlLzEucG5nKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IC50cmVlLTIge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy90cmVlLzIucG5nKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IC50cmVlLTMge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy90cmVlLzMucG5nKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IC50cmVlLTQge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy90cmVlLzQucG5nKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IC50cmVlLTUge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy90cmVlLzUucG5nKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IC50cmVlLTYge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy90cmVlLzYucG5nKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA0cHggcmdiYSgxLCAxMzEsIDg1LCAwLjkpIGluc2V0O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCBoMiB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxuICByb3ctZ2FwOiAxMHB4O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQtYmcge1xcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6ICMxNzJhMjkgMnB4IHNvbGlkO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50LWJnOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA0cHggcmdiYSgxLCAxMzEsIDg1LCAwLjkpIGluc2V0O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctMSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy8xLmpwZyk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy0yIHtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzIuanBnKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmJnLTMge1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvMy5qcGcpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctNCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy80LmpwZyk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy01IHtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzUuanBnKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmJnLTYge1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvNi5qcGcpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctNyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy83LmpwZyk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy04IHtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzguanBnKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmJnLTkge1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvOS5qcGcpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctMTAge1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvMTAuanBnKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50LWJnX19hY3RpdmUge1xcbiAgYm9yZGVyOiAjMDNhOWY0IDJweCBzb2xpZDtcXG59XFxuXFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgaDIge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtY29udGFpbmVyLWl0ZW0ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtMSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNkZDBkMGQsICNlNWYyMTAsICMwYWU1MTEpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDI1MSwgMjUxLCAyNTEsIDAuMyk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC0xOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMnB4ICNmYmZiZmI7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC0yIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2Y2MDcwNywgI2NjNGMzZiwgI2RmNzA0OCk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMjU1LCAxLCAxLCAwLjMpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtMjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCAjZmYwMTAxO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtMyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwZjAwZmYsICMyNTJhYzMsICMxYjBkNmYpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDExLCA2MCwgMjQ3LCAwLjMpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtMzpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCAjMGIzY2Y3O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtNCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwZmZmMDAsICMyNWMzMmEsICMwZDZmMzcpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDM1LCAyNDcsIDExLCAwLjMpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtNDpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCAjMjNmNzBiO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtNSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlNWZmMDAsICNiM2MzMjUsICM2ZjZjMGQpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDIxNSwgMjI3LCAxNiwgMC4zKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLTU6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAycHggI2Q3ZTMxMDtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLWl0ZW1fX2FjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCAjZmJmYmZiO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5zd2l0Y2ggaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5zd2l0Y2ggLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5zd2l0Y2ggLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDEzcHg7XFxuICB3aWR0aDogMTNweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZDIwOTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZhNjI7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuc3dpdGNoIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMwZTZhNjI7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuc3dpdGNoIC5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5zd2l0Y2ggLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubWFpbi10cmVlIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1haW4tdHJlZSAuY2hyaXN0bWFzLWJnLWN1cnJlbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogY2VudGVyL2NvdmVyIHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzEuanBnKTtcXG59XFxuLm1haW4tdHJlZSAuY2hyaXN0bWFzLXRyZWUtY2FycmVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDElO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4udG95cy10cmVlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjUsIDQ3LCA0NSwgMC43KTtcXG59XFxuLnRveXMtdHJlZSAudGl0bGUgaDIge1xcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCA1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b3lzLXRyZWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgY29sdW1uLWdhcDogNXB4O1xcbiAgcm93LWdhcDogNXB4O1xcbn1cXG4udG95cy10cmVlLWNvbnRhaW5lciAudG95LWZvci10cmVlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogIzE3MmEyOSAycHggc29saWQ7XFxufVxcbi50b3lzLXRyZWUtY29udGFpbmVyIC50b3ktZm9yLXRyZWUgLnRveS1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA2NSU7XFxuICBoZWlnaHQ6IDY1JTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi50b3lzLXRyZWUtY29udGFpbmVyIC50b3ktZm9yLXRyZWUgLnRveS1jb3VudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuLnRveXMtdHJlZS1jb250YWluZXIgLnRveS1mb3ItdHJlZTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNHB4IHJnYmEoMSwgMTMxLCA4NSwgMC45KSBpbnNldDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdhcmxhbmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTQlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLS1yZWQ6ICNmZjJjMmM7XFxuICAtLXllbGxvdzogI2ZmZWIwMDtcXG4gIC0tZ3JlZW46ICMwMGZmNWQ7XFxuICAtLWJsdWU6ICMwMDk1ZmY7XFxuICAtLXNwZWVkOiAycztcXG4gIHotaW5kZXg6IDE1O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5yZWQge1xcbiAgZmlsbDogI2Y4MDYwNjtcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1JlZFJlZDtcXG59XFxuXFxuLnJlZF8xIHtcXG4gIGZpbGw6ICNmODA2MDY7XFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtSZWRfMTtcXG59XFxuXFxuLnJlZF8yIHtcXG4gIGZpbGw6ICNmN2IxYjE7XFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtSZWRfMjtcXG59XFxuXFxuLnllbGxvdyB7XFxuICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rWWVsbG93O1xcbn1cXG5cXG4ueWVsbG93XzEge1xcbiAgZmlsbDogdmFyKC0teWVsbG93KTtcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1llbGxvd18xO1xcbn1cXG5cXG4ueWVsbG93XzIge1xcbiAgZmlsbDogdmFyKC0teWVsbG93KTtcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1llbGxvd18yO1xcbn1cXG5cXG4uYmx1ZSB7XFxuICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0JsdWU7XFxufVxcblxcbi5ibHVlXzEge1xcbiAgZmlsbDogdmFyKC0tYmx1ZSk7XFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtCbHVlXzE7XFxufVxcblxcbi5ibHVlXzIge1xcbiAgZmlsbDogdmFyKC0tYmx1ZSk7XFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtCbHVlXzI7XFxufVxcblxcbi5ncmVlbiB7XFxuICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtHcmVlbjtcXG59XFxuXFxuLmdyZWVuXzEge1xcbiAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rR3JlZW5fMTtcXG59XFxuXFxuLmdyZWVuXzIge1xcbiAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rR3JlZW5fMjtcXG59XFxuXFxuQGtleWZyYW1lcyBibGlua1JlZCB7XFxuICAwJSB7XFxuICAgIGZpbGw6IHZhcigtLXJlZCk7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6IHZhcigtLWdyZWVuKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6IHZhcigtLXllbGxvdyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtSZWRfMSB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICNmODA2MDY7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjZjdiMWIxO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogI2Y4MDYwNjtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICNmN2IxYjE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtSZWRfMiB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICNmN2IxYjE7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjZjgwNjA2O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogI2Y3YjFiMTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICNmODA2MDY7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtZZWxsb3cge1xcbiAgMCUge1xcbiAgICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogdmFyKC0tcmVkKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rWWVsbG93XzEge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjZmZkOTA0O1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogI2Y3ZjNjZDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICNmZmQ5MDQ7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjZjdmM2NkO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rWWVsbG93XzIge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjZjdmM2NkO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogI2ZmZDkwNDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICNmN2YzY2Q7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjZmZkOTA0O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rQmx1ZSB7XFxuICAwJSB7XFxuICAgIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogdmFyKC0teWVsbG93KTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6IHZhcigtLXJlZCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtCbHVlXzEge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjMTEwMGZmO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogIzkyY2RmNztcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICMxMTAwZmY7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjOTJjZGY3O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rQmx1ZV8yIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogIzkyY2RmNztcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICMxMTAwZmY7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjOTJjZGY3O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogIzExMDBmZjtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua0dyZWVuIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogdmFyKC0teWVsbG93KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6IHZhcigtLXJlZCk7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua0dyZWVuXzEge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjMjhjNzAwO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogI2JjZmZkNTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICMyOGM3MDA7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjYmNmZmQ1O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rR3JlZW5fMiB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICNiY2ZmZDU7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjMjhjNzAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogI2JjZmZkNTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICMyOGM3MDA7XFxuICB9XFxufVwiLFwiLyrQntCx0L3Rg9C70LXQvdC40LUqL1xcclxcbip7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcbn1cXHJcXG4qLCo6YmVmb3JlLCo6YWZ0ZXJ7XFxyXFxuXFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46Zm9jdXMsOmFjdGl2ZXtvdXRsaW5lOiBub25lO31cXHJcXG5hOmZvY3VzLGE6YWN0aXZle291dGxpbmU6IG5vbmU7fVxcclxcbm5hdixmb290ZXIsaGVhZGVyLGFzaWRle2Rpc3BsYXk6IGJsb2NrO31cXHJcXG5odG1sLGJvZHl7XFxyXFxuXFx0Ly8gaGVpZ2h0OiAxMDAlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRmb250LXNpemU6IDEwcHg7XFxyXFxuXFx0LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG59XFxyXFxuaW5wdXQsYnV0dG9uLHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7fVxcclxcbmlucHV0OjotbXMtY2xlYXJ7ZGlzcGxheTogbm9uZTt9XFxyXFxuYnV0dG9ue2N1cnNvcjogcG9pbnRlcjt9XFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtwYWRkaW5nOjA7Ym9yZGVyOjA7fVxcclxcbmEsIGE6dmlzaXRlZHt0ZXh0LWRlY29yYXRpb246IG5vbmU7fVxcclxcbmE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOiBub25lO31cXHJcXG51bCBsaXtsaXN0LXN0eWxlOiBub25lO31cXHJcXG5pbWd7dmVydGljYWwtYWxpZ246IHRvcDt9XFxyXFxuaDEsaDIsaDMsaDQsaDUsaDZ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6IDQwMDt9XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLSovXCIsXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInO1xcclxcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9OZXVjaGEtUmVndWxhci50dGYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9TdGVwcGUudHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cIixcImhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyZjJkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbHVtbi1nYXA6IDMwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgLmxvZ28ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3RyZWUuc3ZnKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ286aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3RyZWUtYWN0aXZlLnN2Zyk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGFnZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wYWdlOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICMwMDk2ODg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xcclxcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLmpwZyk7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1nYW1lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vLyAubWFpbi1jb250YWluZXIge1xcclxcbi8vICAgYmFja2dyb3VuZDogIzE5MmYyZDtcXHJcXG4vLyB9XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtZ2FtZSB7XFxyXFxuICAudG95cy1jaXJjbGUtbGVmdCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAyMCU7XFxyXFxuICAgIHdpZHRoOiAyMS43NzF2dztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDM5Ljg4NiU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy8xLnBuZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG95cy1jaXJjbGUtcmlnaHQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTAlO1xcclxcbiAgICByaWdodDogMjglO1xcclxcbiAgICB3aWR0aDogMTIuNzcxdnc7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMy4zMzQlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvMi5wbmcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlLWNvbnRlaW5lciB7XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICAgIHBhZGRpbmc6IDY3cHggODVweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXNpemU6IDUzcHg7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDU4cHg7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwKSAxMDAlKTtcXHJcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnN0YXJ0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDU0cHg7XFxyXFxuICAgIHRvcDogNzAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU3RlcHBlJztcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwKSAxMDAlKTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3RhcnQ6aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiA4MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MmYyZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAubGVmdC1lbGVtZW50IHtcXHJcXG4gICAgcCB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICAgIG9wYWNpdHk6IDcwJTtcXHJcXG4gICAgICBzcGFuIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLnJpZ2h0LWVsZW1lbnQge1xcclxcbiAgICBhIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9yc19zY2hvb2xfanMucG5nKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAud3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIudG95cyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRveXMtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDUwcHggMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWNvbnRlaW5lciB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItY29udGFpbmVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItY29udGFpbmVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItY29udGFpbmVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1jb250YWluZXItY29udGVudCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICAuYXVkaW8ge1xcclxcbiAgICB3aWR0aDogMzZweDtcXHJcXG4gICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwMC4zcztcXHJcXG4gICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9hdWRpby5zdmcpO1xcclxcbiAgfVxcclxcbiAgLmF1ZGlvOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogNzUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNub3cge1xcclxcbiAgICB3aWR0aDogMzZweDtcXHJcXG4gICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwMC4zcztcXHJcXG4gICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9zbm93LnN2Zyk7XFxyXFxuICB9XFxyXFxuICAuc25vdzpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDc1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC5zZWFyY2gtaXRlbSB7XFxyXFxuICAgICAgd2lkdGg6IDI2MHB4O1xcclxcbiAgICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgICBwYWRkaW5nOiAwIDUwcHggMCAyMHB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnU3RlcHBlJztcXHJcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwKSAxMDAlKTtcXHJcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDNhOWY0O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuY2xlYW4taWNvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHJpZ2h0OiAxNXB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9jbG9zZS5zdmcpO1xcclxcbiAgfVxcclxcbiAgLnNlYXJjaC1pY29uOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogNzUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc29ydCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sdW1uLWdhcDogNDBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zb3J0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDI3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwM2E5ZjQ7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICAgIHAge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNob29zZS1pdGVtIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgcmlnaHQ6IDE1cHg7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiAwMC4zcztcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2Fycm93LWRvd24uc3ZnKTtcXHJcXG4gICAgfVxcclxcbiAgICAuY2hvb3NlLWl0ZW06aG92ZXIge1xcclxcbiAgICAgIG9wYWNpdHk6IDc1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWxsLWl0ZW0ge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB3aWR0aDogOTAlO1xcclxcbiAgICAgIGxlZnQ6IDUlO1xcclxcbiAgICAgIHRvcDogMTEwJTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIxOTZmMztcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U1ODU3O1xcclxcbiAgICAgIC5zb3J0LWl0ZW0ge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnNvcnQtaXRlbTpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY5Mzk2O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc29ydC1jYXRlZ29yeSB7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICAuY2F0ZWdvcnktY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIC5hbGwge1xcclxcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmNkO1xcclxcbiAgICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICB0b3A6IDdweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXHJcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hbGw6OmJlZm9yZSB7XFxyXFxuICAgICAgY29udGVudDogJ/Cfl7gnO1xcclxcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgcmlnaHQ6IDUwJTtcXHJcXG4gICAgICBib3R0b206IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxyXFxuICAgIH1cXHJcXG4gICAgLmFsbDpjaGVja2VkOjpiZWZvcmUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRveXMtZm9ybSB7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIGgzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgLmZvcm0taXRlbSB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIC5mb3JtLWljb24ge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5mb3JtLWljb246aG92ZXIge1xcclxcbiAgICAgICAgb3BhY2l0eTogODUlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuZm9ybS1pY29uX19hY3RpdmUge1xcclxcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoNTQlKSBzZXBpYSgxMDclKSBzYXR1cmF0ZSg5MDElKSBodWUtcm90YXRlKDI1ZGVnKSBicmlnaHRuZXNzKDE0MCUpIGNvbnRyYXN0KDkzJSk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5pY29uLTEge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2JlbGwuc3ZnKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmljb24tMiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNDJweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvYmFsbC5zdmcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuaWNvbi0zIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9jb25lLnN2Zyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5pY29uLTQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3Nub3dmbGFrZS5zdmcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuaWNvbi01IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIG5vLXJlcGVhdCB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvc25vdy5zdmcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuaWNvbi02IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy90b3kuc3ZnKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmljb24tbmFtZSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLypTbGlkZXIqL1xcclxcblxcclxcbm1haW4gLm5vVWktdGFyZ2V0IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI2YwZjBmMCwgMCAzcHggNnB4IC01cHggI2JiYjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubm9VaS1ob3Jpem9udGFsIHtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5ub1VpLWhhbmRsZTpiZWZvcmUsXFxyXFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDBweDtcXHJcXG4gIHdpZHRoOiAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZThlN2U2O1xcclxcbiAgbGVmdDogMTRweDtcXHJcXG4gIHRvcDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgcmlnaHQ6IC0xM3B4O1xcclxcbiAgdG9wOiAtNnB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSxcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KDU3LjIzJSAyNDguMiUgYXQgMTA3LjE3JSAxMDQuMDIlLCByZ2JhKDM0LCAxNTMsIDIzNSwgMC45MikgMCUsIHJnYmEoMzQsIDE1MywgMjM1LCAwLjA3KSAxMDAlKSxcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwNC4yMiUgMjMwLjk0JSBhdCAtNC4yMiUgMCUsICMyNGM1ZGIgMy42MiUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjI2KSA1NS4xJSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5ub1VpLWNvbm5lY3Qge1xcclxcbiAgYmFja2dyb3VuZDogIzI0YzVkYjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubm9VaS1iYXNlLFxcclxcbi5ub1VpLWNvbm5lY3RzIHtcXHJcXG4gIHdpZHRoOiA5NyU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5ub1VpLXRvb2x0aXAge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU3RlcHBlJztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbiNyYW5nZS15ZWFyIC5ub1VpLXRvb2x0aXAge1xcclxcbiAgbGVmdDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jcmFuZ2UteWVhciB7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKlNsaWRlci1FTkQqL1xcclxcblxcclxcbi5jb3VudC1jb3B5IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbiAgaDMge1xcclxcbiAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbiAgLmNvdW50LWNvcHktaXRlbSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWluIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEyNSU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU3RlcHBlJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgfVxcclxcbiAgLm1heCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMjUlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi55ZWFyLXB1cmNoYXNlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbjogNDBweCAwIDIwcHggMDtcXHJcXG4gIGgzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG4gIC55ZWFyLXB1cmNoYXNlLWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1pbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMjUlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIH1cXHJcXG4gIC5tYXgge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTI1JTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU3RlcHBlJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29sb3Ige1xcclxcbiAgbWFyZ2luOiA0MHB4IDAgMjBweCAwO1xcclxcbiAgaDMge1xcclxcbiAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbG9yLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIC5jb2xvci1pdGVtIHtcXHJcXG4gICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb2xvci1pdGVtOmhvdmVyIHtcXHJcXG4gICAgICBvcGFjaXR5OiA3NSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbG9yLWl0ZW1fX2FjdGl2ZSB7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMnB4IHJnYmEoMjUzLCAyMTUsIDAsIDAuOCk7XFxyXFxuICAgIH1cXHJcXG4gICAgLml0ZW0tMSB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbS0yIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmRkNzAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5pdGVtLTMge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICNmZDAwMDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLml0ZW0tNCB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzIyOTllYjtcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbS01IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjMDhhYTA1O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zaXplIHtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbiAgaDMge1xcclxcbiAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNpemUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAuY29udGFpbmVyLWl0ZW0ge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnU3RlcHBlJztcXHJcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpemUtaXRlbSB7XFxyXFxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2Y2Q7XFxyXFxuICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHRvcDogN3B4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcclxcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNpemUtaXRlbTo6YmVmb3JlIHtcXHJcXG4gICAgICBjb250ZW50OiAn8J+XuCc7XFxyXFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICByaWdodDogNTAlO1xcclxcbiAgICAgIGJvdHRvbTogNTAlO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcXHJcXG4gICAgfVxcclxcbiAgICAuc2l6ZS1pdGVtOmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmF2b3JpdGUge1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICAuY29udGFpbmVyLWZhdm9yaXRlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgLmZhdm9yaXRlLWl0ZW0ge1xcclxcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmNkO1xcclxcbiAgICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICB0b3A6IDdweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXHJcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mYXZvcml0ZS1pdGVtOjpiZWZvcmUge1xcclxcbiAgICAgIGNvbnRlbnQ6ICfwn5e4JztcXHJcXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgICAgYm90dG9tOiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcclxcbiAgICB9XFxyXFxuICAgIC5mYXZvcml0ZS1pdGVtOmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3Vjc3NlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAyNXB4IDA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbHVtbi1nYXA6IDQwcHg7XFxyXFxuICAuYXBwbHktYnRuIHtcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU3RlcHBlJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXBwbHktYnRuOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogNzUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgLnRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sdW1uLWdhcDogNTBweDtcXHJcXG4gICAgaDIge1xcclxcbiAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggNTBweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuY29sbGVjdGlvbi1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDhweCk7XFxyXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuXFxyXFxuICAgIC5tZXNzYWdlIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIHdpZHRoOiAyNzBweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgICAgLm1lc3NhZ2UtaXRlbSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg2NywgMTA0LCAxMDYsIDAuNyk7XFxyXFxuICAgICAgICBjb2xvcjogI2ZhZmFmYTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbGxlY3Rpb24tY29udGFpbmVyLXdyYXBwZXIge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgY29sdW1uLWdhcDogMjVweDtcXHJcXG4gICAgICByb3ctZ2FwOiAyNXB4O1xcclxcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhaW5lci1jb250ZW50IHtcXHJcXG4gICAgICB3aWR0aDogMjI1cHg7XFxyXFxuICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICBtYXJnaW46IDEwcHggMCA1MHB4IDA7XFxyXFxuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICAgICAgMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSxcXHJcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSxcXHJcXG4gICAgICAgIHJnYmEoMTc5LCAyNDYsIDI1NSwgMC41KSAxMDAlXFxyXFxuICAgICAgKTtcXHJcXG4gICAgICBib3JkZXI6IHJnYmEoMTIxLCAxMzksIDE0NCwgMC4xKSBzb2xpZCA1cHg7XFxyXFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgICBoNCB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5pY29uLXRveS1jb250YWluZXIge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgLmljb24tdG95IHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDExMHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgICAuZGF0YS10b3kge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgcm93LWdhcDogMTBweDtcXHJcXG4gICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hY3RpdmUtdG95IHtcXHJcXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAgIC8vIHBhZGRpbmc6IDVweCA1cHg7XFxyXFxuICAgICAgYm9yZGVyOiAjNGNhZjUwIHNvbGlkIDVweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxyXFxuICAgICAgICAxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLFxcclxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIDAlLFxcclxcbiAgICAgICAgcmdiYSg3MCwgMTA5LCAxMTQsIDAuNCkgMTAwJVxcclxcbiAgICAgICk7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjc1KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFpbmVyLWNvbnRlbnQ6aG92ZXIge1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXHJcXG4gICAgICAgIDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsXFxyXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsXFxyXFxuICAgICAgICByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNCkgMTAwJVxcclxcbiAgICAgICk7XFxyXFxuICAgICAgLmljb24tdG95LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAuaWNvbi10b3kge1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5hY3RpdmUtdG95OmhvdmVyIHtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IHJnYmEoNzYsIDE3NSwgODAsIDAuNzUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZXNzYWdlX2FjdGl2ZSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbGxlY3Rpb24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbGxlY3Rpb24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29sbGVjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNjg2YTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi5jaHJpc3RtYXMtdHJlZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNocmlzdG1hcy10cmVlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjNmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzLXRyZWUge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNSwgNDcsIDQ1LCAwLjcpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5ncy1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MtdHJlZS1wYWdlIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY29sdW1uLWdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24ge1xcclxcbiAgaDIge1xcclxcbiAgICBtYXJnaW46IDIwcHggMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG4gIC5jb2xsZWN0aW9uLWNvbnRpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXHJcXG4gICAgcm93LWdhcDogMTBweDtcXHJcXG4gICAgLmNvbnRlaW5lci1jb250ZW50IHtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxyXFxuICAgICAgICAxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLFxcclxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLFxcclxcbiAgICAgICAgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCVcXHJcXG4gICAgICApO1xcclxcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgICBib3JkZXI6IHJnYigyMyA0MiA0MSkgMnB4IHNvbGlkO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAuY29udGVpbmVyLWl0ZW0ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIGhlaWdodDogODAlO1xcclxcbiAgICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnRyZWUtMSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvdHJlZS8xLnBuZyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC50cmVlLTIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3RyZWUvMi5wbmcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAudHJlZS0zIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy90cmVlLzMucG5nKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLnRyZWUtNCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvdHJlZS80LnBuZyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC50cmVlLTUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3RyZWUvNS5wbmcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAudHJlZS02IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy90cmVlLzYucG5nKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRlaW5lci1jb250ZW50OmhvdmVyIHtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNHB4IHJnYmEoMSwgMTMxLCA4NSwgMC45KSBpbnNldDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGVpbmVyLWNvbnRlbnRfX2FjdGl2ZSB7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQge1xcclxcbiAgaDIge1xcclxcbiAgICBtYXJnaW46IDIwcHggMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG4gIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgICByb3ctZ2FwOiAxMHB4O1xcclxcbiAgICAuY29udGVpbmVyLWNvbnRlbnQtYmcge1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG4gICAgICBib3JkZXI6IHJnYigyMyA0MiA0MSkgMnB4IHNvbGlkO1xcclxcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250ZWluZXItY29udGVudC1iZzpob3ZlciB7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDRweCByZ2JhKDEsIDEzMSwgODUsIDAuOSkgaW5zZXQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJnLTEge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzEuanBnKTtcXHJcXG4gICAgfVxcclxcbiAgICAuYmctMiB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvMi5qcGcpO1xcclxcbiAgICB9XFxyXFxuICAgIC5iZy0zIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy8zLmpwZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJnLTQge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzQuanBnKTtcXHJcXG4gICAgfVxcclxcbiAgICAuYmctNSB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvNS5qcGcpO1xcclxcbiAgICB9XFxyXFxuICAgIC5iZy02IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy82LmpwZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJnLTcge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzcuanBnKTtcXHJcXG4gICAgfVxcclxcbiAgICAuYmctOCB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvOC5qcGcpO1xcclxcbiAgICB9XFxyXFxuICAgIC5iZy05IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy85LmpwZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJnLTEwIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy8xMC5qcGcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250ZWluZXItY29udGVudC1iZ19fYWN0aXZlIHtcXHJcXG4gICAgICBib3JkZXI6ICMwM2E5ZjQgMnB4IHNvbGlkO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIHtcXHJcXG4gIGgyIHtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxuICAuZ2FybGFuZC1jb250ZWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgLmdhcmxhbmQtY29udGFpbmVyLWl0ZW0ge1xcclxcbiAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5nYXJsYW5kLTEge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDIyMSwgMTMsIDEzKSwgcmdiKDIyOSwgMjQyLCAxNiksIHJnYigxMCwgMjI5LCAxNykpO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggcmdiYSgyNTEsIDI1MSwgMjUxLCAwLjMpO1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXJsYW5kLTE6aG92ZXIge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCByZ2JhKDI1MSwgMjUxLCAyNTEsIDEpO1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXJsYW5kLTIge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDI0NiwgNywgNyksIHJnYigyMDQsIDc2LCA2MyksIHJnYigyMjMsIDExMiwgNzIpKTtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMjU1LCAxLCAxLCAwLjMpO1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXJsYW5kLTI6aG92ZXIge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCByZ2IoMjU1LCAxLCAxKTtcXHJcXG4gICAgfVxcclxcbiAgICAuZ2FybGFuZC0zIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNSwgMCwgMjU1KSwgcmdiKDM3LCA0MiwgMTk1KSwgcmdiKDI3LCAxMywgMTExKSk7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDExLCA2MCwgMjQ3LCAwLjMpO1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXJsYW5kLTM6aG92ZXIge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCByZ2JhKDExLCA2MCwgMjQ3LCAxKTtcXHJcXG4gICAgfVxcclxcbiAgICAuZ2FybGFuZC00IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNSwgMjU1LCAwKSwgcmdiKDM3LCAxOTUsIDQyKSwgcmdiKDEzLCAxMTEsIDU1KSk7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDM1LCAyNDcsIDExLCAwLjMpO1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXJsYW5kLTQ6aG92ZXIge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCByZ2JhKDM1LCAyNDcsIDExLCAxKTtcXHJcXG4gICAgfVxcclxcbiAgICAuZ2FybGFuZC01IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigyMjksIDI1NSwgMCksIHJnYigxNzksIDE5NSwgMzcpLCByZ2IoMTExLCAxMDgsIDEzKSk7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDIxNSwgMjI3LCAxNiwgMC4zKTtcXHJcXG4gICAgfVxcclxcbiAgICAuZ2FybGFuZC01OmhvdmVyIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAycHggcmdiYSgyMTUsIDIyNywgMTYsIDEpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5nYXJsYW5kLWl0ZW1fX2FjdGl2ZSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMnB4IHJnYmEoMjUxLCAyNTEsIDI1MSwgMSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN3aXRjaCB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnNsaWRlciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEzcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTNweDtcXHJcXG4gICAgICAgIGxlZnQ6IDRweDtcXHJcXG4gICAgICAgIGJvdHRvbTogNHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZDIwOTtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTZhNjI7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMwZTZhNjI7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXHJcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5zbGlkZXIucm91bmQge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi10cmVlIHtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIC5jaHJpc3RtYXMtYmctY3VycmVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy8xLmpwZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2hyaXN0bWFzLXRyZWUtY2FycmVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAxJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0NTBweDtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50b3lzLXRyZWUge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNSwgNDcsIDQ1LCAwLjcpO1xcclxcbiAgLnRpdGxlIHtcXHJcXG4gICAgaDIge1xcclxcbiAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggNTBweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50b3lzLXRyZWUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcclxcbiAgY29sdW1uLWdhcDogNXB4O1xcclxcbiAgcm93LWdhcDogNXB4O1xcclxcbiAgLnRveS1mb3ItdHJlZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXHJcXG4gICAgICAxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLFxcclxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSxcXHJcXG4gICAgICByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJVxcclxcbiAgICApO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiByZ2IoMjMgNDIgNDEpIDJweCBzb2xpZDtcXHJcXG4gICAgLnRveS1pY29uIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgICBoZWlnaHQ6IDY1JTtcXHJcXG4gICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRveS1jb3VudCB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICByaWdodDogMDtcXHJcXG4gICAgICBib3R0b206IDA7XFxyXFxuICAgICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcclxcbiAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnRveS1mb3ItdHJlZTpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA0cHggcmdiYSgxLCAxMzEsIDg1LCAwLjkpIGluc2V0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FybGFuZCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAtNCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAtLXJlZDogI2ZmMmMyYztcXHJcXG4gIC0teWVsbG93OiAjZmZlYjAwO1xcclxcbiAgLS1ncmVlbjogIzAwZmY1ZDtcXHJcXG4gIC0tYmx1ZTogIzAwOTVmZjtcXHJcXG4gIC0tc3BlZWQ6IDJzO1xcclxcbiAgei1pbmRleDogMTU7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZCB7XFxyXFxuICBmaWxsOiAjZjgwNjA2O1xcclxcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rUmVkUmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkXzEge1xcclxcbiAgZmlsbDogI2Y4MDYwNjtcXHJcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1JlZF8xO1xcclxcbn1cXHJcXG4ucmVkXzIge1xcclxcbiAgZmlsbDogI2Y3YjFiMTtcXHJcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1JlZF8yO1xcclxcbn1cXHJcXG5cXHJcXG4ueWVsbG93IHtcXHJcXG4gIGZpbGw6IHZhcigtLXllbGxvdyk7XFxyXFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtZZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi55ZWxsb3dfMSB7XFxyXFxuICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rWWVsbG93XzE7XFxyXFxufVxcclxcblxcclxcbi55ZWxsb3dfMiB7XFxyXFxuICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rWWVsbG93XzI7XFxyXFxufVxcclxcblxcclxcbi5ibHVlIHtcXHJcXG4gIGZpbGw6IHZhcigtLWJsdWUpO1xcclxcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rQmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdWVfMSB7XFxyXFxuICBmaWxsOiB2YXIoLS1ibHVlKTtcXHJcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0JsdWVfMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdWVfMiB7XFxyXFxuICBmaWxsOiB2YXIoLS1ibHVlKTtcXHJcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0JsdWVfMjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyZWVuIHtcXHJcXG4gIGZpbGw6IHZhcigtLWdyZWVuKTtcXHJcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0dyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZW5fMSB7XFxyXFxuICBmaWxsOiB2YXIoLS1ncmVlbik7XFxyXFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtHcmVlbl8xO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZW5fMiB7XFxyXFxuICBmaWxsOiB2YXIoLS1ncmVlbik7XFxyXFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtHcmVlbl8yO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rUmVkIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZmlsbDogdmFyKC0tcmVkKTtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGZpbGw6IHZhcigtLWJsdWUpO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgZmlsbDogdmFyKC0teWVsbG93KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGlua1JlZF8xIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZmlsbDogI2Y4MDYwNjtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGZpbGw6ICNmN2IxYjE7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBmaWxsOiAjZjgwNjA2O1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgZmlsbDogI2Y3YjFiMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGlua1JlZF8yIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZmlsbDogI2Y3YjFiMTtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGZpbGw6ICNmODA2MDY7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBmaWxsOiAjZjdiMWIxO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgZmlsbDogI2Y4MDYwNjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGlua1llbGxvdyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGZpbGw6IHZhcigtLXllbGxvdyk7XFxyXFxuICB9XFxyXFxuICAyNSUge1xcclxcbiAgICBmaWxsOiB2YXIoLS1yZWQpO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgZmlsbDogdmFyKC0tYmx1ZSk7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICBmaWxsOiB2YXIoLS1ncmVlbik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmtZZWxsb3dfMSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGZpbGw6ICNmZmQ5MDQ7XFxyXFxuICB9XFxyXFxuICAyNSUge1xcclxcbiAgICBmaWxsOiAjZjdmM2NkO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgZmlsbDogI2ZmZDkwNDtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGZpbGw6ICNmN2YzY2Q7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmtZZWxsb3dfMiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGZpbGw6ICNmN2YzY2Q7XFxyXFxuICB9XFxyXFxuICAyNSUge1xcclxcbiAgICBmaWxsOiAjZmZkOTA0O1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgZmlsbDogI2Y3ZjNjZDtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGZpbGw6ICNmZmQ5MDQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmtCbHVlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZmlsbDogdmFyKC0tYmx1ZSk7XFxyXFxuICB9XFxyXFxuICAyNSUge1xcclxcbiAgICBmaWxsOiB2YXIoLS1ncmVlbik7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgZmlsbDogdmFyKC0tcmVkKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGlua0JsdWVfMSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGZpbGw6ICMxMTAwZmY7XFxyXFxuICB9XFxyXFxuICAyNSUge1xcclxcbiAgICBmaWxsOiAjOTJjZGY3O1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgZmlsbDogIzExMDBmZjtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGZpbGw6ICM5MmNkZjc7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmtCbHVlXzIge1xcclxcbiAgMCUge1xcclxcbiAgICBmaWxsOiAjOTJjZGY3O1xcclxcbiAgfVxcclxcbiAgMjUlIHtcXHJcXG4gICAgZmlsbDogIzExMDBmZjtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIGZpbGw6ICM5MmNkZjc7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICBmaWxsOiAjMTEwMGZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rR3JlZW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBmaWxsOiB2YXIoLS1ncmVlbik7XFxyXFxuICB9XFxyXFxuICAyNSUge1xcclxcbiAgICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgZmlsbDogdmFyKC0tcmVkKTtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGZpbGw6IHZhcigtLWJsdWUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rR3JlZW5fMSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGZpbGw6ICMyOGM3MDA7XFxyXFxuICB9XFxyXFxuICAyNSUge1xcclxcbiAgICBmaWxsOiAjYmNmZmQ1O1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgZmlsbDogIzI4YzcwMDtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGZpbGw6ICNiY2ZmZDU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmtHcmVlbl8yIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZmlsbDogI2JjZmZkNTtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGZpbGw6ICMyOGM3MDA7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBmaWxsOiAjYmNmZmQ1O1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgZmlsbDogIzI4YzcwMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5ub1VpU2xpZGVyID0ge30pKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIGV4cG9ydHMuUGlwc01vZGUgPSB2b2lkIDA7XG4gICAgKGZ1bmN0aW9uIChQaXBzTW9kZSkge1xuICAgICAgICBQaXBzTW9kZVtcIlJhbmdlXCJdID0gXCJyYW5nZVwiO1xuICAgICAgICBQaXBzTW9kZVtcIlN0ZXBzXCJdID0gXCJzdGVwc1wiO1xuICAgICAgICBQaXBzTW9kZVtcIlBvc2l0aW9uc1wiXSA9IFwicG9zaXRpb25zXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiQ291bnRcIl0gPSBcImNvdW50XCI7XG4gICAgICAgIFBpcHNNb2RlW1wiVmFsdWVzXCJdID0gXCJ2YWx1ZXNcIjtcbiAgICB9KShleHBvcnRzLlBpcHNNb2RlIHx8IChleHBvcnRzLlBpcHNNb2RlID0ge30pKTtcbiAgICBleHBvcnRzLlBpcHNUeXBlID0gdm9pZCAwO1xuICAgIChmdW5jdGlvbiAoUGlwc1R5cGUpIHtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJOb25lXCJdID0gLTFdID0gXCJOb25lXCI7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTm9WYWx1ZVwiXSA9IDBdID0gXCJOb1ZhbHVlXCI7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTGFyZ2VWYWx1ZVwiXSA9IDFdID0gXCJMYXJnZVZhbHVlXCI7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiU21hbGxWYWx1ZVwiXSA9IDJdID0gXCJTbWFsbFZhbHVlXCI7XG4gICAgfSkoZXhwb3J0cy5QaXBzVHlwZSB8fCAoZXhwb3J0cy5QaXBzVHlwZSA9IHt9KSk7XG4gICAgLy9yZWdpb24gSGVscGVyIE1ldGhvZHNcbiAgICBmdW5jdGlvbiBpc1ZhbGlkRm9ybWF0dGVyKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkgJiYgdHlwZW9mIGVudHJ5LmZyb20gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpIHtcbiAgICAgICAgLy8gcGFydGlhbCBmb3JtYXR0ZXJzIG9ubHkgbmVlZCBhIHRvIGZ1bmN0aW9uIGFuZCBub3QgYSBmcm9tIGZ1bmN0aW9uXG4gICAgICAgIHJldHVybiB0eXBlb2YgZW50cnkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGVudHJ5LnRvID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWwpIHtcbiAgICAgICAgZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzU2V0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBCaW5kYWJsZSB2ZXJzaW9uXG4gICAgZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIFJlbW92ZXMgZHVwbGljYXRlcyBmcm9tIGFuIGFycmF5LlxuICAgIGZ1bmN0aW9uIHVuaXF1ZShhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXNbYV0gPyAodGhpc1thXSA9IHRydWUpIDogZmFsc2U7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgLy8gUm91bmQgYSB2YWx1ZSB0byB0aGUgY2xvc2VzdCAndG8nLlxuICAgIGZ1bmN0aW9uIGNsb3Nlc3QodmFsdWUsIHRvKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gdG8pICogdG87XG4gICAgfVxuICAgIC8vIEN1cnJlbnQgcG9zaXRpb24gb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXG4gICAgZnVuY3Rpb24gb2Zmc2V0KGVsZW0sIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIHZhciByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgICAgICAgdmFyIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgcGFnZU9mZnNldCA9IGdldFBhZ2VPZmZzZXQoZG9jKTtcbiAgICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGNvbnRhaW5zIGxlZnQgc2Nyb2xsIGluIENocm9tZSBvbiBBbmRyb2lkLlxuICAgICAgICAvLyBJIGhhdmVuJ3QgZm91bmQgYSBmZWF0dXJlIGRldGVjdGlvbiB0aGF0IHByb3ZlcyB0aGlzLiBXb3JzdCBjYXNlXG4gICAgICAgIC8vIHNjZW5hcmlvIG9uIG1pcy1tYXRjaDogdGhlICd0YXAnIGZlYXR1cmUgb24gaG9yaXpvbnRhbCBzbGlkZXJzIGJyZWFrcy5cbiAgICAgICAgaWYgKC93ZWJraXQuKkNocm9tZS4qTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcGFnZU9mZnNldC54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZW50YXRpb24gPyByZWN0LnRvcCArIHBhZ2VPZmZzZXQueSAtIGRvY0VsZW0uY2xpZW50VG9wIDogcmVjdC5sZWZ0ICsgcGFnZU9mZnNldC54IC0gZG9jRWxlbS5jbGllbnRMZWZ0O1xuICAgIH1cbiAgICAvLyBDaGVja3Mgd2hldGhlciBhIHZhbHVlIGlzIG51bWVyaWNhbC5cbiAgICBmdW5jdGlvbiBpc051bWVyaWMoYSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKGEpICYmIGlzRmluaXRlKGEpO1xuICAgIH1cbiAgICAvLyBTZXRzIGEgY2xhc3MgYW5kIHJlbW92ZXMgaXQgYWZ0ZXIgW2R1cmF0aW9uXSBtcy5cbiAgICBmdW5jdGlvbiBhZGRDbGFzc0ZvcihlbGVtZW50LCBjbGFzc05hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIExpbWl0cyBhIHZhbHVlIHRvIDAgLSAxMDBcbiAgICBmdW5jdGlvbiBsaW1pdChhKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihhLCAxMDApLCAwKTtcbiAgICB9XG4gICAgLy8gV3JhcHMgYSB2YXJpYWJsZSBhcyBhbiBhcnJheSwgaWYgaXQgaXNuJ3Qgb25lIHlldC5cbiAgICAvLyBOb3RlIHRoYXQgYW4gaW5wdXQgYXJyYXkgaXMgcmV0dXJuZWQgYnkgcmVmZXJlbmNlIVxuICAgIGZ1bmN0aW9uIGFzQXJyYXkoYSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSA/IGEgOiBbYV07XG4gICAgfVxuICAgIC8vIENvdW50cyBkZWNpbWFsc1xuICAgIGZ1bmN0aW9uIGNvdW50RGVjaW1hbHMobnVtU3RyKSB7XG4gICAgICAgIG51bVN0ciA9IFN0cmluZyhudW1TdHIpO1xuICAgICAgICB2YXIgcGllY2VzID0gbnVtU3RyLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgcmV0dXJuIHBpZWNlcy5sZW5ndGggPiAxID8gcGllY2VzWzFdLmxlbmd0aCA6IDA7XG4gICAgfVxuICAgIC8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNhZGRfY2xhc3NcbiAgICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QgJiYgIS9cXHMvLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NOYW1lICs9IFwiIFwiICsgY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNyZW1vdmVfY2xhc3NcbiAgICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QgJiYgIS9cXHMvLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxiKVwiICsgY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKSArIFwiKFxcXFxifCQpXCIsIFwiZ2lcIiksIFwiIFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBodHRwczovL3BsYWluanMuY29tL2phdmFzY3JpcHQvYXR0cmlidXRlcy9hZGRpbmctcmVtb3ZpbmctYW5kLXRlc3RpbmctZm9yLWNsYXNzZXMtOS9cbiAgICBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QgPyBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSA6IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgY2xhc3NOYW1lICsgXCJcXFxcYlwiKS50ZXN0KGVsLmNsYXNzTmFtZSk7XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvc2Nyb2xsWSNOb3Rlc1xuICAgIGZ1bmN0aW9uIGdldFBhZ2VPZmZzZXQoZG9jKSB7XG4gICAgICAgIHZhciBzdXBwb3J0UGFnZU9mZnNldCA9IHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgaXNDU1MxQ29tcGF0ID0gKGRvYy5jb21wYXRNb2RlIHx8IFwiXCIpID09PSBcIkNTUzFDb21wYXRcIjtcbiAgICAgICAgdmFyIHggPSBzdXBwb3J0UGFnZU9mZnNldFxuICAgICAgICAgICAgPyB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICAgICAgICAgIDogaXNDU1MxQ29tcGF0XG4gICAgICAgICAgICAgICAgPyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnRcbiAgICAgICAgICAgICAgICA6IGRvYy5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgIHZhciB5ID0gc3VwcG9ydFBhZ2VPZmZzZXRcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICA6IGlzQ1NTMUNvbXBhdFxuICAgICAgICAgICAgICAgID8gZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgICAgICAgICAgICA6IGRvYy5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIHdlIHByb3ZpZGUgYSBmdW5jdGlvbiB0byBjb21wdXRlIGNvbnN0YW50cyBpbnN0ZWFkXG4gICAgLy8gb2YgYWNjZXNzaW5nIHdpbmRvdy4qIGFzIHNvb24gYXMgdGhlIG1vZHVsZSBuZWVkcyBpdFxuICAgIC8vIHNvIHRoYXQgd2UgZG8gbm90IGNvbXB1dGUgYW55dGhpbmcgaWYgbm90IG5lZWRlZFxuICAgIGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZXZlbnRzIHRvIGJpbmQuIElFMTEgaW1wbGVtZW50cyBwb2ludGVyRXZlbnRzIHdpdGhvdXRcbiAgICAgICAgLy8gYSBwcmVmaXgsIHdoaWNoIGJyZWFrcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIElFMTAgaW1wbGVtZW50YXRpb24uXG4gICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBzdGFydDogXCJwb2ludGVyZG93blwiLFxuICAgICAgICAgICAgICAgIG1vdmU6IFwicG9pbnRlcm1vdmVcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwicG9pbnRlcnVwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIk1TUG9pbnRlckRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogXCJNU1BvaW50ZXJNb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCJNU1BvaW50ZXJVcFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJtb3VzZWRvd24gdG91Y2hzdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlOiBcIm1vdXNlbW92ZSB0b3VjaG1vdmVcIixcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBcIm1vdXNldXAgdG91Y2hlbmRcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4gICAgLy8gSXNzdWUgIzc4NVxuICAgIGZ1bmN0aW9uIGdldFN1cHBvcnRzUGFzc2l2ZSgpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgbnVsbCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LkNTUyAmJiBDU1Muc3VwcG9ydHMgJiYgQ1NTLnN1cHBvcnRzKFwidG91Y2gtYWN0aW9uXCIsIFwibm9uZVwiKTtcbiAgICB9XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBSYW5nZSBDYWxjdWxhdGlvblxuICAgIC8vIERldGVybWluZSB0aGUgc2l6ZSBvZiBhIHN1Yi1yYW5nZSBpbiByZWxhdGlvbiB0byBhIGZ1bGwgcmFuZ2UuXG4gICAgZnVuY3Rpb24gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpIHtcbiAgICAgICAgcmV0dXJuIDEwMCAvIChwYiAtIHBhKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIEhvdyBtYW55IHBlcmNlbnQgaXMgdGhpcyB2YWx1ZSBvZiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIGZyb21QZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSwgc3RhcnRSYW5nZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICogMTAwKSAvIChyYW5nZVtzdGFydFJhbmdlICsgMV0gLSByYW5nZVtzdGFydFJhbmdlXSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBXaGVyZSBpcyB0aGlzIHZhbHVlIG9uIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gdG9QZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnJvbVBlcmNlbnRhZ2UocmFuZ2UsIHJhbmdlWzBdIDwgMCA/IHZhbHVlICsgTWF0aC5hYnMocmFuZ2VbMF0pIDogdmFsdWUgLSByYW5nZVswXSwgMCk7XG4gICAgfVxuICAgIC8vICh2YWx1ZSkgSG93IG11Y2ggaXMgdGhpcyBwZXJjZW50YWdlIG9uIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICogKHJhbmdlWzFdIC0gcmFuZ2VbMF0pKSAvIDEwMCArIHJhbmdlWzBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRKKHZhbHVlLCBhcnIpIHtcbiAgICAgICAgdmFyIGogPSAxO1xuICAgICAgICB3aGlsZSAodmFsdWUgPj0gYXJyW2pdKSB7XG4gICAgICAgICAgICBqICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGo7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBJbnB1dCBhIHZhbHVlLCBmaW5kIHdoZXJlLCBvbiBhIHNjYWxlIG9mIDAtMTAwLCBpdCBhcHBsaWVzLlxuICAgIGZ1bmN0aW9uIHRvU3RlcHBpbmcoeFZhbCwgeFBjdCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID49IHhWYWwuc2xpY2UoLTEpWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gMTAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFZhbCk7XG4gICAgICAgIHZhciB2YSA9IHhWYWxbaiAtIDFdO1xuICAgICAgICB2YXIgdmIgPSB4VmFsW2pdO1xuICAgICAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIHBiID0geFBjdFtqXTtcbiAgICAgICAgcmV0dXJuIHBhICsgdG9QZXJjZW50YWdlKFt2YSwgdmJdLCB2YWx1ZSkgLyBzdWJSYW5nZVJhdGlvKHBhLCBwYik7XG4gICAgfVxuICAgIC8vICh2YWx1ZSkgSW5wdXQgYSBwZXJjZW50YWdlLCBmaW5kIHdoZXJlIGl0IGlzIG9uIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXG4gICAgZnVuY3Rpb24gZnJvbVN0ZXBwaW5nKHhWYWwsIHhQY3QsIHZhbHVlKSB7XG4gICAgICAgIC8vIFRoZXJlIGlzIG5vIHJhbmdlIGdyb3VwIHRoYXQgZml0cyAxMDBcbiAgICAgICAgaWYgKHZhbHVlID49IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHhWYWwuc2xpY2UoLTEpWzBdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgICAgIHZhciB2YSA9IHhWYWxbaiAtIDFdO1xuICAgICAgICB2YXIgdmIgPSB4VmFsW2pdO1xuICAgICAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIHBiID0geFBjdFtqXTtcbiAgICAgICAgcmV0dXJuIGlzUGVyY2VudGFnZShbdmEsIHZiXSwgKHZhbHVlIC0gcGEpICogc3ViUmFuZ2VSYXRpbyhwYSwgcGIpKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIEdldCB0aGUgc3RlcCB0aGF0IGFwcGxpZXMgYXQgYSBjZXJ0YWluIHZhbHVlLlxuICAgIGZ1bmN0aW9uIGdldFN0ZXAoeFBjdCwgeFN0ZXBzLCBzbmFwLCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgICAgIHZhciBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBiID0geFBjdFtqXTtcbiAgICAgICAgLy8gSWYgJ3NuYXAnIGlzIHNldCwgc3RlcHMgYXJlIHVzZWQgYXMgZml4ZWQgcG9pbnRzIG9uIHRoZSBzbGlkZXIuXG4gICAgICAgIGlmIChzbmFwKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IHBvc2l0aW9uLCBhIG9yIGIuXG4gICAgICAgICAgICBpZiAodmFsdWUgLSBhID4gKGIgLSBhKSAvIDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICAgIGlmICgheFN0ZXBzW2ogLSAxXSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4UGN0W2ogLSAxXSArIGNsb3Nlc3QodmFsdWUgLSB4UGN0W2ogLSAxXSwgeFN0ZXBzW2ogLSAxXSk7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gU3BlY3RydW1cbiAgICB2YXIgU3BlY3RydW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFNwZWN0cnVtKGVudHJ5LCBzbmFwLCBzaW5nbGVTdGVwKSB7XG4gICAgICAgICAgICB0aGlzLnhQY3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFZhbCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54U3RlcHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gW107XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwID0gW107XG4gICAgICAgICAgICB0aGlzLnhTdGVwcyA9IFtzaW5nbGVTdGVwIHx8IGZhbHNlXTtcbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gW2ZhbHNlXTtcbiAgICAgICAgICAgIHRoaXMuc25hcCA9IHNuYXA7XG4gICAgICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgICAgICB2YXIgb3JkZXJlZCA9IFtdO1xuICAgICAgICAgICAgLy8gTWFwIHRoZSBvYmplY3Qga2V5cyB0byBhbiBhcnJheS5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVudHJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIG9yZGVyZWQucHVzaChbYXNBcnJheShlbnRyeVtpbmRleF0pLCBpbmRleF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTb3J0IGFsbCBlbnRyaWVzIGJ5IHZhbHVlIChudW1lcmljIHNvcnQpLlxuICAgICAgICAgICAgb3JkZXJlZC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMF1bMF0gLSBiWzBdWzBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGFsbCBlbnRyaWVzIHRvIHN1YnJhbmdlcy5cbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IG9yZGVyZWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFbnRyeVBvaW50KG9yZGVyZWRbaW5kZXhdWzFdLCBvcmRlcmVkW2luZGV4XVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgYWN0dWFsIHN0ZXAgdmFsdWVzLlxuICAgICAgICAgICAgLy8geFN0ZXBzIGlzIHNvcnRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB4UGN0IGFuZCB4VmFsLlxuICAgICAgICAgICAgdGhpcy54TnVtU3RlcHMgPSB0aGlzLnhTdGVwcy5zbGljZSgwKTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgYWxsIG51bWVyaWMgc3RlcHMgdG8gdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIHN1YnJhbmdlIHRoZXkgcmVwcmVzZW50LlxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgdGhpcy54TnVtU3RlcHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGVwUG9pbnQoaW5kZXgsIHRoaXMueE51bVN0ZXBzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldERpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2VzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy54TnVtU3RlcHMubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlc1tpbmRleF0gPSBmcm9tUGVyY2VudGFnZSh0aGlzLnhWYWwsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VzO1xuICAgICAgICB9O1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb3ZlciB0aGUgd2hvbGUgc2NhbGUgb2YgcmFuZ2VzLlxuICAgICAgICAvLyBkaXJlY3Rpb246IDAgPSBiYWNrd2FyZHMgLyAxID0gZm9yd2FyZHNcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldEFic29sdXRlRGlzdGFuY2UgPSBmdW5jdGlvbiAodmFsdWUsIGRpc3RhbmNlcywgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgeFBjdF9pbmRleCA9IDA7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcmFuZ2Ugd2hlcmUgdG8gc3RhcnQgY2FsY3VsYXRpb25cbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAodmFsdWUgPiB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHhQY3RfaW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gdGhpcy54UGN0W3RoaXMueFBjdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgIHhQY3RfaW5kZXggPSB0aGlzLnhQY3QubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGxvb2tpbmcgYmFja3dhcmRzIGFuZCB0aGUgdmFsdWUgaXMgZXhhY3RseSBhdCBhIHJhbmdlIHNlcGFyYXRvciB0aGVuIGxvb2sgb25lIHJhbmdlIGZ1cnRoZXJcbiAgICAgICAgICAgIGlmICghZGlyZWN0aW9uICYmIHZhbHVlID09PSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgeFBjdF9pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgICAgIHZhciByZXN0X2ZhY3RvciA9IDE7XG4gICAgICAgICAgICB2YXIgcmVzdF9yZWxfZGlzdGFuY2UgPSBkaXN0YW5jZXNbeFBjdF9pbmRleF07XG4gICAgICAgICAgICB2YXIgcmFuZ2VfcGN0ID0gMDtcbiAgICAgICAgICAgIHZhciByZWxfcmFuZ2VfZGlzdGFuY2UgPSAwO1xuICAgICAgICAgICAgdmFyIGFic19kaXN0YW5jZV9jb3VudGVyID0gMDtcbiAgICAgICAgICAgIHZhciByYW5nZV9jb3VudGVyID0gMDtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB3aGF0IHBhcnQgb2YgdGhlIHN0YXJ0IHJhbmdlIHRoZSB2YWx1ZSBpc1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9ICh2YWx1ZSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHZhbHVlKSAvICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvIHVudGlsIHRoZSBjb21wbGV0ZSBkaXN0YW5jZSBhY3Jvc3MgcmFuZ2VzIGlzIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIHdoaWxlIChyZXN0X3JlbF9kaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnRhZ2Ugb2YgdG90YWwgcmFuZ2VcbiAgICAgICAgICAgICAgICByYW5nZV9wY3QgPSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDEgKyByYW5nZV9jb3VudGVyXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl07XG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IGlmIHRoZSBtYXJnaW4sIHBhZGRpbmcgb3IgbGltaXQgaXMgbGFyZ2VyIHRoZW4gdGhlIGN1cnJlbnQgcmFuZ2UgYW5kIGNhbGN1bGF0ZVxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3IgKyAxMDAgLSBzdGFydF9mYWN0b3IgKiAxMDAgPiAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbGFyZ2VyIHRoZW4gdGFrZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvZiB0aGUgd2hvbGUgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gcmFuZ2VfcGN0ICogc3RhcnRfZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXN0IGZhY3RvciBvZiByZWxhdGl2ZSBwZXJjZW50dWFsIGRpc3RhbmNlIHN0aWxsIHRvIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgcmVzdF9mYWN0b3IgPSAocmVzdF9yZWxfZGlzdGFuY2UgLSAxMDAgKiBzdGFydF9mYWN0b3IpIC8gZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHN0YXJ0IGZhY3RvciB0byAxIGFzIGZvciBuZXh0IHJhbmdlIGl0IGRvZXMgbm90IGFwcGx5LlxuICAgICAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc21hbGxlciBvciBlcXVhbCB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIGNhbGN1bGF0ZSBwZXJjZW50dWFsIHBhcnQgb2YgdGhhdCByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZWxfcmFuZ2VfZGlzdGFuY2UgPSAoKGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByYW5nZV9wY3QpIC8gMTAwKSAqIHJlc3RfZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAvLyBObyByZXN0IGxlZnQgYXMgdGhlIHJlc3QgZml0cyBpbiBjdXJyZW50IHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyIC0gcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBMaW1pdCByYW5nZSB0byBmaXJzdCByYW5nZSB3aGVuIGRpc3RhbmNlIGJlY29tZXMgb3V0c2lkZSBvZiBtaW5pbXVtIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhQY3QubGVuZ3RoICsgcmFuZ2VfY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZV9jb3VudGVyLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFic19kaXN0YW5jZV9jb3VudGVyID0gYWJzX2Rpc3RhbmNlX2NvdW50ZXIgKyByZWxfcmFuZ2VfZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIExpbWl0IHJhbmdlIHRvIGxhc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWF4aW11bSByYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCAtIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VfY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlc3Qgb2YgcmVsYXRpdmUgcGVyY2VudHVhbCBkaXN0YW5jZSBzdGlsbCB0byBiZSBjYWxjdWxhdGVkXG4gICAgICAgICAgICAgICAgcmVzdF9yZWxfZGlzdGFuY2UgPSBkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBhYnNfZGlzdGFuY2VfY291bnRlcjtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLnRvU3RlcHBpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZnJvbVN0ZXBwaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbVN0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXRTdGVwID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGdldFN0ZXAodGhpcy54UGN0LCB0aGlzLnhTdGVwcywgdGhpcy5zbmFwLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREZWZhdWx0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSwgaXNEb3duLCBzaXplKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgICAgICAvLyBXaGVuIGF0IHRoZSB0b3Agb3Igc3RlcHBpbmcgZG93biwgbG9vayBhdCB0aGUgcHJldmlvdXMgc3ViLXJhbmdlXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDEwMCB8fCAoaXNEb3duICYmIHZhbHVlID09PSB0aGlzLnhQY3RbaiAtIDFdKSkge1xuICAgICAgICAgICAgICAgIGogPSBNYXRoLm1heChqIC0gMSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMueFZhbFtqXSAtIHRoaXMueFZhbFtqIC0gMV0pIC8gc2l6ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldE5lYXJieVN0ZXBzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0ZXBCZWZvcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAyXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDJdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqIC0gMl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXNTdGVwOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2ogLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDFdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdGVwQWZ0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2pdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbal1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY291bnRTdGVwRGVjaW1hbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RlcERlY2ltYWxzID0gdGhpcy54TnVtU3RlcHMubWFwKGNvdW50RGVjaW1hbHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIHN0ZXBEZWNpbWFscyk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYXNOb1NpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy54VmFsWzBdID09PSB0aGlzLnhWYWxbdGhpcy54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICB9O1xuICAgICAgICAvLyBPdXRzaWRlIHRlc3RpbmdcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmNvbnZlcnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0ZXAodGhpcy50b1N0ZXBwaW5nKHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYW5kbGVFbnRyeVBvaW50ID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2U7XG4gICAgICAgICAgICAvLyBDb3ZlcnQgbWluL21heCBzeW50YXggdG8gMCBhbmQgMTAwLlxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gcGFyc2VGbG9hdChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgY29ycmVjdCBpbnB1dC5cbiAgICAgICAgICAgIGlmICghaXNOdW1lcmljKHBlcmNlbnRhZ2UpIHx8ICFpc051bWVyaWModmFsdWVbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyB2YWx1ZSBpc24ndCBudW1lcmljLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0b3JlIHZhbHVlcy5cbiAgICAgICAgICAgIHRoaXMueFBjdC5wdXNoKHBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgdGhpcy54VmFsLnB1c2godmFsdWVbMF0pO1xuICAgICAgICAgICAgdmFyIHZhbHVlMSA9IE51bWJlcih2YWx1ZVsxXSk7XG4gICAgICAgICAgICAvLyBOYU4gd2lsbCBldmFsdWF0ZSB0byBmYWxzZSB0b28sIGJ1dCB0byBrZWVwXG4gICAgICAgICAgICAvLyBsb2dnaW5nIGNsZWFyLCBzZXQgc3RlcCBleHBsaWNpdGx5LiBNYWtlIHN1cmVcbiAgICAgICAgICAgIC8vIG5vdCB0byBvdmVycmlkZSB0aGUgJ3N0ZXAnIHNldHRpbmcgd2l0aCBmYWxzZS5cbiAgICAgICAgICAgIGlmICghcGVyY2VudGFnZSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFsdWUxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnhTdGVwc1swXSA9IHZhbHVlMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhTdGVwcy5wdXNoKGlzTmFOKHZhbHVlMSkgPyBmYWxzZSA6IHZhbHVlMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwLnB1c2goMCk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYW5kbGVTdGVwUG9pbnQgPSBmdW5jdGlvbiAoaSwgbikge1xuICAgICAgICAgICAgLy8gSWdub3JlICdmYWxzZScgc3RlcHBpbmcuXG4gICAgICAgICAgICBpZiAoIW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGVwIG92ZXIgemVyby1sZW5ndGggcmFuZ2VzICgjOTQ4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnhWYWxbaV0gPT09IHRoaXMueFZhbFtpICsgMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhTdGVwc1tpXSA9IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSB0aGlzLnhWYWxbaV07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmFjdG9yIHRvIHJhbmdlIHJhdGlvXG4gICAgICAgICAgICB0aGlzLnhTdGVwc1tpXSA9XG4gICAgICAgICAgICAgICAgZnJvbVBlcmNlbnRhZ2UoW3RoaXMueFZhbFtpXSwgdGhpcy54VmFsW2kgKyAxXV0sIG4sIDApIC8gc3ViUmFuZ2VSYXRpbyh0aGlzLnhQY3RbaV0sIHRoaXMueFBjdFtpICsgMV0pO1xuICAgICAgICAgICAgdmFyIHRvdGFsU3RlcHMgPSAodGhpcy54VmFsW2kgKyAxXSAtIHRoaXMueFZhbFtpXSkgLyB0aGlzLnhOdW1TdGVwc1tpXTtcbiAgICAgICAgICAgIHZhciBoaWdoZXN0U3RlcCA9IE1hdGguY2VpbChOdW1iZXIodG90YWxTdGVwcy50b0ZpeGVkKDMpKSAtIDEpO1xuICAgICAgICAgICAgdmFyIHN0ZXAgPSB0aGlzLnhWYWxbaV0gKyB0aGlzLnhOdW1TdGVwc1tpXSAqIGhpZ2hlc3RTdGVwO1xuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtpXSA9IHN0ZXA7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBTcGVjdHJ1bTtcbiAgICB9KCkpO1xuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gT3B0aW9uc1xuICAgIC8qXHRFdmVyeSBpbnB1dCBvcHRpb24gaXMgdGVzdGVkIGFuZCBwYXJzZWQuIFRoaXMgd2lsbCBwcmV2ZW50XG4gICAgICAgIGVuZGxlc3MgdmFsaWRhdGlvbiBpbiBpbnRlcm5hbCBtZXRob2RzLiBUaGVzZSB0ZXN0cyBhcmVcbiAgICAgICAgc3RydWN0dXJlZCB3aXRoIGFuIGl0ZW0gZm9yIGV2ZXJ5IG9wdGlvbiBhdmFpbGFibGUuIEFuXG4gICAgICAgIG9wdGlvbiBjYW4gYmUgbWFya2VkIGFzIHJlcXVpcmVkIGJ5IHNldHRpbmcgdGhlICdyJyBmbGFnLlxuICAgICAgICBUaGUgdGVzdGluZyBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAgICAgICAgICAgIC0gVGhlIHByb3ZpZGVkIHZhbHVlIGZvciB0aGUgb3B0aW9uO1xuICAgICAgICAgICAgLSBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBvYmplY3Q7XG4gICAgICAgICAgICAtIFRoZSBuYW1lIGZvciB0aGUgb3B0aW9uO1xuXG4gICAgICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIHJldHVybnMgZmFsc2Ugd2hlbiBhbiBlcnJvciBpcyBkZXRlY3RlZCxcbiAgICAgICAgb3IgdHJ1ZSB3aGVuIGV2ZXJ5dGhpbmcgaXMgT0suIEl0IGNhbiBhbHNvIG1vZGlmeSB0aGUgb3B0aW9uXG4gICAgICAgIG9iamVjdCwgdG8gbWFrZSBzdXJlIGFsbCB2YWx1ZXMgY2FuIGJlIGNvcnJlY3RseSBsb29wZWQgZWxzZXdoZXJlLiAqL1xuICAgIC8vcmVnaW9uIERlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRGb3JtYXR0ZXIgPSB7XG4gICAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHZhbHVlLnRvRml4ZWQoMik7XG4gICAgICAgIH0sXG4gICAgICAgIGZyb206IE51bWJlclxuICAgIH07XG4gICAgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgICAgIHRhcmdldDogXCJ0YXJnZXRcIixcbiAgICAgICAgYmFzZTogXCJiYXNlXCIsXG4gICAgICAgIG9yaWdpbjogXCJvcmlnaW5cIixcbiAgICAgICAgaGFuZGxlOiBcImhhbmRsZVwiLFxuICAgICAgICBoYW5kbGVMb3dlcjogXCJoYW5kbGUtbG93ZXJcIixcbiAgICAgICAgaGFuZGxlVXBwZXI6IFwiaGFuZGxlLXVwcGVyXCIsXG4gICAgICAgIHRvdWNoQXJlYTogXCJ0b3VjaC1hcmVhXCIsXG4gICAgICAgIGhvcml6b250YWw6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICB2ZXJ0aWNhbDogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImJhY2tncm91bmRcIixcbiAgICAgICAgY29ubmVjdDogXCJjb25uZWN0XCIsXG4gICAgICAgIGNvbm5lY3RzOiBcImNvbm5lY3RzXCIsXG4gICAgICAgIGx0cjogXCJsdHJcIixcbiAgICAgICAgcnRsOiBcInJ0bFwiLFxuICAgICAgICB0ZXh0RGlyZWN0aW9uTHRyOiBcInR4dC1kaXItbHRyXCIsXG4gICAgICAgIHRleHREaXJlY3Rpb25SdGw6IFwidHh0LWRpci1ydGxcIixcbiAgICAgICAgZHJhZ2dhYmxlOiBcImRyYWdnYWJsZVwiLFxuICAgICAgICBkcmFnOiBcInN0YXRlLWRyYWdcIixcbiAgICAgICAgdGFwOiBcInN0YXRlLXRhcFwiLFxuICAgICAgICBhY3RpdmU6IFwiYWN0aXZlXCIsXG4gICAgICAgIHRvb2x0aXA6IFwidG9vbHRpcFwiLFxuICAgICAgICBwaXBzOiBcInBpcHNcIixcbiAgICAgICAgcGlwc0hvcml6b250YWw6IFwicGlwcy1ob3Jpem9udGFsXCIsXG4gICAgICAgIHBpcHNWZXJ0aWNhbDogXCJwaXBzLXZlcnRpY2FsXCIsXG4gICAgICAgIG1hcmtlcjogXCJtYXJrZXJcIixcbiAgICAgICAgbWFya2VySG9yaXpvbnRhbDogXCJtYXJrZXItaG9yaXpvbnRhbFwiLFxuICAgICAgICBtYXJrZXJWZXJ0aWNhbDogXCJtYXJrZXItdmVydGljYWxcIixcbiAgICAgICAgbWFya2VyTm9ybWFsOiBcIm1hcmtlci1ub3JtYWxcIixcbiAgICAgICAgbWFya2VyTGFyZ2U6IFwibWFya2VyLWxhcmdlXCIsXG4gICAgICAgIG1hcmtlclN1YjogXCJtYXJrZXItc3ViXCIsXG4gICAgICAgIHZhbHVlOiBcInZhbHVlXCIsXG4gICAgICAgIHZhbHVlSG9yaXpvbnRhbDogXCJ2YWx1ZS1ob3Jpem9udGFsXCIsXG4gICAgICAgIHZhbHVlVmVydGljYWw6IFwidmFsdWUtdmVydGljYWxcIixcbiAgICAgICAgdmFsdWVOb3JtYWw6IFwidmFsdWUtbm9ybWFsXCIsXG4gICAgICAgIHZhbHVlTGFyZ2U6IFwidmFsdWUtbGFyZ2VcIixcbiAgICAgICAgdmFsdWVTdWI6IFwidmFsdWUtc3ViXCJcbiAgICB9O1xuICAgIC8vIE5hbWVzcGFjZXMgb2YgaW50ZXJuYWwgZXZlbnQgbGlzdGVuZXJzXG4gICAgdmFyIElOVEVSTkFMX0VWRU5UX05TID0ge1xuICAgICAgICB0b29sdGlwczogXCIuX190b29sdGlwc1wiLFxuICAgICAgICBhcmlhOiBcIi5fX2FyaWFcIlxuICAgIH07XG4gICAgLy9lbmRyZWdpb25cbiAgICBmdW5jdGlvbiB0ZXN0U3RlcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3N0ZXAnIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgc3RlcCBvcHRpb24gY2FuIHN0aWxsIGJlIHVzZWQgdG8gc2V0IHN0ZXBwaW5nXG4gICAgICAgIC8vIGZvciBsaW5lYXIgc2xpZGVycy4gT3ZlcndyaXR0ZW4gaWYgc2V0IGluICdyYW5nZScuXG4gICAgICAgIHBhcnNlZC5zaW5nbGVTdGVwID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZFBhZ2VNdWx0aXBsaWVyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRQYWdlTXVsdGlwbGllcicgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZFBhZ2VNdWx0aXBsaWVyID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZE11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZE11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRNdWx0aXBsaWVyID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZERlZmF1bHRTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmREZWZhdWx0U3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZERlZmF1bHRTdGVwID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RSYW5nZShwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIEZpbHRlciBpbmNvcnJlY3QgaW5wdXQuXG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdyYW5nZScgaXMgbm90IGFuIG9iamVjdC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2F0Y2ggbWlzc2luZyBzdGFydCBvciBlbmQuXG4gICAgICAgIGlmIChlbnRyeS5taW4gPT09IHVuZGVmaW5lZCB8fCBlbnRyeS5tYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogTWlzc2luZyAnbWluJyBvciAnbWF4JyBpbiAncmFuZ2UnLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuc3BlY3RydW0gPSBuZXcgU3BlY3RydW0oZW50cnksIHBhcnNlZC5zbmFwIHx8IGZhbHNlLCBwYXJzZWQuc2luZ2xlU3RlcCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RTdGFydChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGVudHJ5ID0gYXNBcnJheShlbnRyeSk7XG4gICAgICAgIC8vIFZhbGlkYXRlIGlucHV0LiBWYWx1ZXMgYXJlbid0IHRlc3RlZCwgYXMgdGhlIHB1YmxpYyAudmFsIG1ldGhvZFxuICAgICAgICAvLyB3aWxsIGFsd2F5cyBwcm92aWRlIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgIWVudHJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3N0YXJ0JyBvcHRpb24gaXMgaW5jb3JyZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdG9yZSB0aGUgbnVtYmVyIG9mIGhhbmRsZXMuXG4gICAgICAgIHBhcnNlZC5oYW5kbGVzID0gZW50cnkubGVuZ3RoO1xuICAgICAgICAvLyBXaGVuIHRoZSBzbGlkZXIgaXMgaW5pdGlhbGl6ZWQsIHRoZSAudmFsIG1ldGhvZCB3aWxsXG4gICAgICAgIC8vIGJlIGNhbGxlZCB3aXRoIHRoZSBzdGFydCBvcHRpb25zLlxuICAgICAgICBwYXJzZWQuc3RhcnQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFNuYXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3NuYXAnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5mb3JjZSAxMDAlIHN0ZXBwaW5nIHdpdGhpbiBzdWJyYW5nZXMuXG4gICAgICAgIHBhcnNlZC5zbmFwID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBbmltYXRlKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRlJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxuICAgICAgICBwYXJzZWQuYW5pbWF0ZSA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYW5pbWF0aW9uRHVyYXRpb24nIG9wdGlvbiBtdXN0IGJlIGEgbnVtYmVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuYW5pbWF0aW9uRHVyYXRpb24gPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENvbm5lY3QocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICB2YXIgY29ubmVjdCA9IFtmYWxzZV07XG4gICAgICAgIHZhciBpO1xuICAgICAgICAvLyBNYXAgbGVnYWN5IG9wdGlvbnNcbiAgICAgICAgaWYgKGVudHJ5ID09PSBcImxvd2VyXCIpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW3RydWUsIGZhbHNlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbnRyeSA9PT0gXCJ1cHBlclwiKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFtmYWxzZSwgdHJ1ZV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIGJvb2xlYW4gb3B0aW9uc1xuICAgICAgICBpZiAoZW50cnkgPT09IHRydWUgfHwgZW50cnkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgcGFyc2VkLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbm5lY3QucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25uZWN0LnB1c2goZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlamVjdCBpbnZhbGlkIGlucHV0XG4gICAgICAgIGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoIHx8IGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMgKyAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY29ubmVjdCcgb3B0aW9uIGRvZXNuJ3QgbWF0Y2ggaGFuZGxlIGNvdW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbm5lY3QgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuY29ubmVjdCA9IGNvbm5lY3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RPcmllbnRhdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIFNldCBvcmllbnRhdGlvbiB0byBhbiBhIG51bWVyaWNhbCB2YWx1ZSBmb3IgZWFzeVxuICAgICAgICAvLyBhcnJheSBzZWxlY3Rpb24uXG4gICAgICAgIHN3aXRjaCAoZW50cnkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLm9ydCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidmVydGljYWxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQub3J0ID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ29yaWVudGF0aW9uJyBvcHRpb24gaXMgaW52YWxpZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdE1hcmdpbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ21hcmdpbicgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXNzdWUgIzU4MlxuICAgICAgICBpZiAoZW50cnkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQubWFyZ2luID0gcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdExpbWl0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5saW1pdCA9IHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeSk7XG4gICAgICAgIGlmICghcGFyc2VkLmxpbWl0IHx8IHBhcnNlZC5oYW5kbGVzIDwgMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2xpbWl0JyBvcHRpb24gaXMgb25seSBzdXBwb3J0ZWQgb24gbGluZWFyIHNsaWRlcnMgd2l0aCAyIG9yIG1vcmUgaGFuZGxlcy5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFBhZGRpbmcocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBudW1lcmljIG9yIGFycmF5IG9mIGV4YWN0bHkgMiBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkgJiYgIShlbnRyeS5sZW5ndGggPT09IDIgfHwgaXNOdW1lcmljKGVudHJ5WzBdKSB8fCBpc051bWVyaWMoZW50cnlbMV0pKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMgb3IgYXJyYXkgb2YgZXhhY3RseSAyIG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW2VudHJ5LCBlbnRyeV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gJ2dldERpc3RhbmNlJyByZXR1cm5zIGZhbHNlIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICAgICAgcGFyc2VkLnBhZGRpbmcgPSBbcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5WzBdKSwgcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5WzFdKV07XG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHBhcnNlZC5zcGVjdHJ1bS54TnVtU3RlcHMubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAgICAgLy8gbGFzdCBcInJhbmdlXCIgY2FuJ3QgY29udGFpbiBzdGVwIHNpemUgYXMgaXQgaXMgcHVyZWx5IGFuIGVuZHBvaW50LlxuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYWRkaW5nWzBdW2luZGV4XSA8IDAgfHwgcGFyc2VkLnBhZGRpbmdbMV1baW5kZXhdIDwgMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcihzKS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvdGFsUGFkZGluZyA9IGVudHJ5WzBdICsgZW50cnlbMV07XG4gICAgICAgIHZhciBmaXJzdFZhbHVlID0gcGFyc2VkLnNwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgIHZhciBsYXN0VmFsdWUgPSBwYXJzZWQuc3BlY3RydW0ueFZhbFtwYXJzZWQuc3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRvdGFsUGFkZGluZyAvIChsYXN0VmFsdWUgLSBmaXJzdFZhbHVlKSA+IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBub3QgZXhjZWVkIDEwMCUgb2YgdGhlIHJhbmdlLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0RGlyZWN0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gU2V0IGRpcmVjdGlvbiBhcyBhIG51bWVyaWNhbCB2YWx1ZSBmb3IgZWFzeSBwYXJzaW5nLlxuICAgICAgICAvLyBJbnZlcnQgY29ubmVjdGlvbiBmb3IgUlRMIHNsaWRlcnMsIHNvIHRoYXQgdGhlIHByb3BlclxuICAgICAgICAvLyBoYW5kbGVzIGdldCB0aGUgY29ubmVjdC9iYWNrZ3JvdW5kIGNsYXNzZXMuXG4gICAgICAgIHN3aXRjaCAoZW50cnkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJsdHJcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQuZGlyID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJydGxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQuZGlyID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2RpcmVjdGlvbicgb3B0aW9uIHdhcyBub3QgcmVjb2duaXplZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEJlaGF2aW91cihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW5wdXQgaXMgYSBzdHJpbmcuXG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdiZWhhdmlvdXInIG11c3QgYmUgYSBzdHJpbmcgY29udGFpbmluZyBvcHRpb25zLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIGFueSBrZXl3b3Jkcy5cbiAgICAgICAgLy8gTm9uZSBhcmUgcmVxdWlyZWQuXG4gICAgICAgIHZhciB0YXAgPSBlbnRyeS5pbmRleE9mKFwidGFwXCIpID49IDA7XG4gICAgICAgIHZhciBkcmFnID0gZW50cnkuaW5kZXhPZihcImRyYWdcIikgPj0gMDtcbiAgICAgICAgdmFyIGZpeGVkID0gZW50cnkuaW5kZXhPZihcImZpeGVkXCIpID49IDA7XG4gICAgICAgIHZhciBzbmFwID0gZW50cnkuaW5kZXhPZihcInNuYXBcIikgPj0gMDtcbiAgICAgICAgdmFyIGhvdmVyID0gZW50cnkuaW5kZXhPZihcImhvdmVyXCIpID49IDA7XG4gICAgICAgIHZhciB1bmNvbnN0cmFpbmVkID0gZW50cnkuaW5kZXhPZihcInVuY29uc3RyYWluZWRcIikgPj0gMDtcbiAgICAgICAgdmFyIGRyYWdBbGwgPSBlbnRyeS5pbmRleE9mKFwiZHJhZy1hbGxcIikgPj0gMDtcbiAgICAgICAgaWYgKGZpeGVkKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkLmhhbmRsZXMgIT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZml4ZWQnIGJlaGF2aW91ciBtdXN0IGJlIHVzZWQgd2l0aCAyIGhhbmRsZXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVc2UgbWFyZ2luIHRvIGVuZm9yY2UgZml4ZWQgc3RhdGVcbiAgICAgICAgICAgIHRlc3RNYXJnaW4ocGFyc2VkLCBwYXJzZWQuc3RhcnRbMV0gLSBwYXJzZWQuc3RhcnRbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmNvbnN0cmFpbmVkICYmIChwYXJzZWQubWFyZ2luIHx8IHBhcnNlZC5saW1pdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd1bmNvbnN0cmFpbmVkJyBiZWhhdmlvdXIgY2Fubm90IGJlIHVzZWQgd2l0aCBtYXJnaW4gb3IgbGltaXRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmV2ZW50cyA9IHtcbiAgICAgICAgICAgIHRhcDogdGFwIHx8IHNuYXAsXG4gICAgICAgICAgICBkcmFnOiBkcmFnLFxuICAgICAgICAgICAgZHJhZ0FsbDogZHJhZ0FsbCxcbiAgICAgICAgICAgIGZpeGVkOiBmaXhlZCxcbiAgICAgICAgICAgIHNuYXA6IHNuYXAsXG4gICAgICAgICAgICBob3ZlcjogaG92ZXIsXG4gICAgICAgICAgICB1bmNvbnN0cmFpbmVkOiB1bmNvbnN0cmFpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RUb29sdGlwcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmIChlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkgPT09IHRydWUgfHwgaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyc2VkLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVudHJ5ID0gYXNBcnJheShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IG11c3QgcGFzcyBhIGZvcm1hdHRlciBmb3IgYWxsIGhhbmRsZXMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW50cnkuZm9yRWFjaChmdW5jdGlvbiAoZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXR0ZXIgIT09IFwiYm9vbGVhblwiICYmICFpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihmb3JtYXR0ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd0b29sdGlwcycgbXVzdCBiZSBwYXNzZWQgYSBmb3JtYXR0ZXIgb3IgJ2ZhbHNlJy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0SGFuZGxlQXR0cmlidXRlcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmIChlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBtdXN0IHBhc3MgYSBhdHRyaWJ1dGVzIGZvciBhbGwgaGFuZGxlcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmhhbmRsZUF0dHJpYnV0ZXMgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFyaWFGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FyaWFGb3JtYXQnIHJlcXVpcmVzICd0bycgbWV0aG9kLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuYXJpYUZvcm1hdCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Rm9ybWF0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Zvcm1hdCcgcmVxdWlyZXMgJ3RvJyBhbmQgJ2Zyb20nIG1ldGhvZHMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5mb3JtYXQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkU3VwcG9ydChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRTdXBwb3J0JyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZFN1cHBvcnQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdERvY3VtZW50RWxlbWVudChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYW4gYWR2YW5jZWQgb3B0aW9uLiBQYXNzZWQgdmFsdWVzIGFyZSB1c2VkIHdpdGhvdXQgdmFsaWRhdGlvbi5cbiAgICAgICAgcGFyc2VkLmRvY3VtZW50RWxlbWVudCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q3NzUHJlZml4KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJzdHJpbmdcIiAmJiBlbnRyeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjc3NQcmVmaXgnIG11c3QgYmUgYSBzdHJpbmcgb3IgYGZhbHNlYC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmNzc1ByZWZpeCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q3NzQ2xhc3NlcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjc3NDbGFzc2VzJyBtdXN0IGJlIGFuIG9iamVjdC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWQuY3NzUHJlZml4ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW50cnkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzW2tleV0gPSBwYXJzZWQuY3NzUHJlZml4ICsgZW50cnlba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXMgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUZXN0IGFsbCBkZXZlbG9wZXIgc2V0dGluZ3MgYW5kIHBhcnNlIHRvIGFzc3VtcHRpb24tc2FmZSB2YWx1ZXMuXG4gICAgZnVuY3Rpb24gdGVzdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICAvLyBUbyBwcm92ZSBhIGZpeCBmb3IgIzUzNywgZnJlZXplIG9wdGlvbnMgaGVyZS5cbiAgICAgICAgLy8gSWYgdGhlIG9iamVjdCBpcyBtb2RpZmllZCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gICAgICAgIC8vIE9iamVjdC5mcmVlemUob3B0aW9ucyk7XG4gICAgICAgIHZhciBwYXJzZWQgPSB7XG4gICAgICAgICAgICBtYXJnaW46IG51bGwsXG4gICAgICAgICAgICBsaW1pdDogbnVsbCxcbiAgICAgICAgICAgIHBhZGRpbmc6IG51bGwsXG4gICAgICAgICAgICBhbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGFyaWFGb3JtYXQ6IGRlZmF1bHRGb3JtYXR0ZXIsXG4gICAgICAgICAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXR0ZXJcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVGVzdHMgYXJlIGV4ZWN1dGVkIGluIHRoZSBvcmRlciB0aGV5IGFyZSBwcmVzZW50ZWQgaGVyZS5cbiAgICAgICAgdmFyIHRlc3RzID0ge1xuICAgICAgICAgICAgc3RlcDogeyByOiBmYWxzZSwgdDogdGVzdFN0ZXAgfSxcbiAgICAgICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZFBhZ2VNdWx0aXBsaWVyIH0sXG4gICAgICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZE11bHRpcGxpZXIgfSxcbiAgICAgICAgICAgIGtleWJvYXJkRGVmYXVsdFN0ZXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZERlZmF1bHRTdGVwIH0sXG4gICAgICAgICAgICBzdGFydDogeyByOiB0cnVlLCB0OiB0ZXN0U3RhcnQgfSxcbiAgICAgICAgICAgIGNvbm5lY3Q6IHsgcjogdHJ1ZSwgdDogdGVzdENvbm5lY3QgfSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogeyByOiB0cnVlLCB0OiB0ZXN0RGlyZWN0aW9uIH0sXG4gICAgICAgICAgICBzbmFwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0U25hcCB9LFxuICAgICAgICAgICAgYW5pbWF0ZTogeyByOiBmYWxzZSwgdDogdGVzdEFuaW1hdGUgfSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24gfSxcbiAgICAgICAgICAgIHJhbmdlOiB7IHI6IHRydWUsIHQ6IHRlc3RSYW5nZSB9LFxuICAgICAgICAgICAgb3JpZW50YXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RPcmllbnRhdGlvbiB9LFxuICAgICAgICAgICAgbWFyZ2luOiB7IHI6IGZhbHNlLCB0OiB0ZXN0TWFyZ2luIH0sXG4gICAgICAgICAgICBsaW1pdDogeyByOiBmYWxzZSwgdDogdGVzdExpbWl0IH0sXG4gICAgICAgICAgICBwYWRkaW5nOiB7IHI6IGZhbHNlLCB0OiB0ZXN0UGFkZGluZyB9LFxuICAgICAgICAgICAgYmVoYXZpb3VyOiB7IHI6IHRydWUsIHQ6IHRlc3RCZWhhdmlvdXIgfSxcbiAgICAgICAgICAgIGFyaWFGb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RBcmlhRm9ybWF0IH0sXG4gICAgICAgICAgICBmb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RGb3JtYXQgfSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0VG9vbHRpcHMgfSxcbiAgICAgICAgICAgIGtleWJvYXJkU3VwcG9ydDogeyByOiB0cnVlLCB0OiB0ZXN0S2V5Ym9hcmRTdXBwb3J0IH0sXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQ6IHsgcjogZmFsc2UsIHQ6IHRlc3REb2N1bWVudEVsZW1lbnQgfSxcbiAgICAgICAgICAgIGNzc1ByZWZpeDogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzUHJlZml4IH0sXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiB7IHI6IHRydWUsIHQ6IHRlc3RDc3NDbGFzc2VzIH0sXG4gICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0SGFuZGxlQXR0cmlidXRlcyB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGNvbm5lY3Q6IGZhbHNlLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImx0clwiLFxuICAgICAgICAgICAgYmVoYXZpb3VyOiBcInRhcFwiLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB0cnVlLFxuICAgICAgICAgICAgY3NzUHJlZml4OiBcIm5vVWktXCIsXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiBjc3NDbGFzc2VzLFxuICAgICAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogNSxcbiAgICAgICAgICAgIGtleWJvYXJkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGtleWJvYXJkRGVmYXVsdFN0ZXA6IDEwXG4gICAgICAgIH07XG4gICAgICAgIC8vIEFyaWFGb3JtYXQgZGVmYXVsdHMgdG8gcmVndWxhciBmb3JtYXQsIGlmIGFueS5cbiAgICAgICAgaWYgKG9wdGlvbnMuZm9ybWF0ICYmICFvcHRpb25zLmFyaWFGb3JtYXQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYXJpYUZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIC8vIFJ1biBhbGwgb3B0aW9ucyB0aHJvdWdoIGEgdGVzdGluZyBtZWNoYW5pc20gdG8gZW5zdXJlIGNvcnJlY3RcbiAgICAgICAgLy8gaW5wdXQuIEl0IHNob3VsZCBiZSBub3RlZCB0aGF0IG9wdGlvbnMgbWlnaHQgZ2V0IG1vZGlmaWVkIHRvXG4gICAgICAgIC8vIGJlIGhhbmRsZWQgcHJvcGVybHkuIEUuZy4gd3JhcHBpbmcgaW50ZWdlcnMgaW4gYXJyYXlzLlxuICAgICAgICBPYmplY3Qua2V5cyh0ZXN0cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIG9wdGlvbiBpc24ndCBzZXQsIGJ1dCBpdCBpcyByZXF1aXJlZCwgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgICAgICBpZiAoIWlzU2V0KG9wdGlvbnNbbmFtZV0pICYmIGRlZmF1bHRzW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVzdHNbbmFtZV0ucikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnXCIgKyBuYW1lICsgXCInIGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVzdHNbbmFtZV0udChwYXJzZWQsICFpc1NldChvcHRpb25zW25hbWVdKSA/IGRlZmF1bHRzW25hbWVdIDogb3B0aW9uc1tuYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGb3J3YXJkIHBpcHMgb3B0aW9uc1xuICAgICAgICBwYXJzZWQucGlwcyA9IG9wdGlvbnMucGlwcztcbiAgICAgICAgLy8gQWxsIHJlY2VudCBicm93c2VycyBhY2NlcHQgdW5wcmVmaXhlZCB0cmFuc2Zvcm0uXG4gICAgICAgIC8vIFdlIG5lZWQgLW1zLSBmb3IgSUU5IGFuZCAtd2Via2l0LSBmb3Igb2xkZXIgQW5kcm9pZDtcbiAgICAgICAgLy8gQXNzdW1lIHVzZSBvZiAtd2Via2l0LSBpZiB1bnByZWZpeGVkIGFuZCAtbXMtIGFyZSBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAvLyBodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PXRyYW5zZm9ybXMyZFxuICAgICAgICB2YXIgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBtc1ByZWZpeCA9IGQuc3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIG5vUHJlZml4ID0gZC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgcGFyc2VkLnRyYW5zZm9ybVJ1bGUgPSBub1ByZWZpeCA/IFwidHJhbnNmb3JtXCIgOiBtc1ByZWZpeCA/IFwibXNUcmFuc2Zvcm1cIiA6IFwid2Via2l0VHJhbnNmb3JtXCI7XG4gICAgICAgIC8vIFBpcHMgZG9uJ3QgbW92ZSwgc28gd2UgY2FuIHBsYWNlIHRoZW0gdXNpbmcgbGVmdC90b3AuXG4gICAgICAgIHZhciBzdHlsZXMgPSBbXG4gICAgICAgICAgICBbXCJsZWZ0XCIsIFwidG9wXCJdLFxuICAgICAgICAgICAgW1wicmlnaHRcIiwgXCJib3R0b21cIl1cbiAgICAgICAgXTtcbiAgICAgICAgcGFyc2VkLnN0eWxlID0gc3R5bGVzW3BhcnNlZC5kaXJdW3BhcnNlZC5vcnRdO1xuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIGZ1bmN0aW9uIHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgICAgICB2YXIgc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgPSBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpO1xuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgJiYgZ2V0U3VwcG9ydHNQYXNzaXZlKCk7XG4gICAgICAgIC8vIEFsbCB2YXJpYWJsZXMgbG9jYWwgdG8gJ3Njb3BlJyBhcmUgcHJlZml4ZWQgd2l0aCAnc2NvcGVfJ1xuICAgICAgICAvLyBTbGlkZXIgRE9NIE5vZGVzXG4gICAgICAgIHZhciBzY29wZV9UYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHZhciBzY29wZV9CYXNlO1xuICAgICAgICB2YXIgc2NvcGVfSGFuZGxlcztcbiAgICAgICAgdmFyIHNjb3BlX0Nvbm5lY3RzO1xuICAgICAgICB2YXIgc2NvcGVfUGlwcztcbiAgICAgICAgdmFyIHNjb3BlX1Rvb2x0aXBzO1xuICAgICAgICAvLyBTbGlkZXIgc3RhdGUgdmFsdWVzXG4gICAgICAgIHZhciBzY29wZV9TcGVjdHJ1bSA9IG9wdGlvbnMuc3BlY3RydW07XG4gICAgICAgIHZhciBzY29wZV9WYWx1ZXMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfSGFuZGxlTnVtYmVycyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID0gMDtcbiAgICAgICAgdmFyIHNjb3BlX0V2ZW50cyA9IHt9O1xuICAgICAgICAvLyBEb2N1bWVudCBOb2Rlc1xuICAgICAgICB2YXIgc2NvcGVfRG9jdW1lbnQgPSB0YXJnZXQub3duZXJEb2N1bWVudDtcbiAgICAgICAgdmFyIHNjb3BlX0RvY3VtZW50RWxlbWVudCA9IG9wdGlvbnMuZG9jdW1lbnRFbGVtZW50IHx8IHNjb3BlX0RvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHNjb3BlX0JvZHkgPSBzY29wZV9Eb2N1bWVudC5ib2R5O1xuICAgICAgICAvLyBGb3IgaG9yaXpvbnRhbCBzbGlkZXJzIGluIHN0YW5kYXJkIGx0ciBkb2N1bWVudHMsXG4gICAgICAgIC8vIG1ha2UgLm5vVWktb3JpZ2luIG92ZXJmbG93IHRvIHRoZSBsZWZ0IHNvIHRoZSBkb2N1bWVudCBkb2Vzbid0IHNjcm9sbC5cbiAgICAgICAgdmFyIHNjb3BlX0Rpck9mZnNldCA9IHNjb3BlX0RvY3VtZW50LmRpciA9PT0gXCJydGxcIiB8fCBvcHRpb25zLm9ydCA9PT0gMSA/IDAgOiAxMDA7XG4gICAgICAgIC8vIENyZWF0ZXMgYSBub2RlLCBhZGRzIGl0IHRvIHRhcmdldCwgcmV0dXJucyB0aGUgbmV3IG5vZGUuXG4gICAgICAgIGZ1bmN0aW9uIGFkZE5vZGVUbyhhZGRUYXJnZXQsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdmFyIGRpdiA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoZGl2LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGVuZCBhIG9yaWdpbiB0byB0aGUgYmFzZVxuICAgICAgICBmdW5jdGlvbiBhZGRPcmlnaW4oYmFzZSwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5vcmlnaW4pO1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZE5vZGVUbyhvcmlnaW4sIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGUpO1xuICAgICAgICAgICAgYWRkTm9kZVRvKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnRvdWNoQXJlYSk7XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVcIiwgU3RyaW5nKGhhbmRsZU51bWJlcikpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMua2V5Ym9hcmRTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9HbG9iYWxfYXR0cmlidXRlcy90YWJpbmRleFxuICAgICAgICAgICAgICAgIC8vIDAgPSBmb2N1c2FibGUgYW5kIHJlYWNoYWJsZVxuICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXNfMSA9IG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXNfMSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzXzFbYXR0cmlidXRlXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInNsaWRlclwiKTtcbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLW9yaWVudGF0aW9uXCIsIG9wdGlvbnMub3J0ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZUxvd2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhbmRsZU51bWJlciA9PT0gb3B0aW9ucy5oYW5kbGVzIC0gMSkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZVVwcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5zZXJ0IG5vZGVzIGZvciBjb25uZWN0IGVsZW1lbnRzXG4gICAgICAgIGZ1bmN0aW9uIGFkZENvbm5lY3QoYmFzZSwgYWRkKSB7XG4gICAgICAgICAgICBpZiAoIWFkZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBoYW5kbGVzIHRvIHRoZSBzbGlkZXIgYmFzZS5cbiAgICAgICAgZnVuY3Rpb24gYWRkRWxlbWVudHMoY29ubmVjdE9wdGlvbnMsIGJhc2UpIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0QmFzZSA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMuY29ubmVjdHMpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcyA9IFtdO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMgPSBbXTtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbMF0pKTtcbiAgICAgICAgICAgIC8vIFs6Ojo6Tz09PT1PPT09PU89PT09XVxuICAgICAgICAgICAgLy8gY29ubmVjdE9wdGlvbnMgPSBbMCwgMSwgMSwgMV1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBLZWVwIGEgbGlzdCBvZiBhbGwgYWRkZWQgaGFuZGxlcy5cbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLnB1c2goYWRkT3JpZ2luKGJhc2UsIGkpKTtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzW2ldID0gaTtcbiAgICAgICAgICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3QoY29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zW2kgKyAxXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemUgYSBzaW5nbGUgc2xpZGVyLlxuICAgICAgICBmdW5jdGlvbiBhZGRTbGlkZXIoYWRkVGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBBcHBseSBjbGFzc2VzIGFuZCBkYXRhIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMubHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnJ0bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vcnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ob3Jpem9udGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnZlcnRpY2FsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0ZXh0RGlyZWN0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZShhZGRUYXJnZXQpLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIGlmICh0ZXh0RGlyZWN0aW9uID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGV4dERpcmVjdGlvblJ0bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uTHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuYmFzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkVG9vbHRpcChoYW5kbGUsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnRvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGhhbmRsZS5maXJzdENoaWxkLCBvcHRpb25zLmNzc0NsYXNzZXMudG9vbHRpcCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNTbGlkZXJEaXNhYmxlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9UYXJnZXQuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlzYWJsZSB0aGUgc2xpZGVyIGRyYWdnaW5nIGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICAgICAgZnVuY3Rpb24gaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlT3JpZ2luLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzKTtcbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50KHRvb2x0aXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSB0b29sdGlwcyBvcHRpb24gaXMgYSBzaG9ydGhhbmQgZm9yIHVzaW5nIHRoZSAndXBkYXRlJyBldmVudC5cbiAgICAgICAgZnVuY3Rpb24gdG9vbHRpcHMoKSB7XG4gICAgICAgICAgICByZW1vdmVUb29sdGlwcygpO1xuICAgICAgICAgICAgLy8gVG9vbHRpcHMgYXJlIGFkZGVkIHdpdGggb3B0aW9ucy50b29sdGlwcyBpbiBvcmlnaW5hbCBvcmRlci5cbiAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gc2NvcGVfSGFuZGxlcy5tYXAoYWRkVG9vbHRpcCk7XG4gICAgICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgICAgIGlmICghc2NvcGVfVG9vbHRpcHMgfHwgIW9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSB2YWx1ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdLnRvKHVuZW5jb2RlZFtoYW5kbGVOdW1iZXJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXS5pbm5lckhUTUwgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFyaWEoKSB7XG4gICAgICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLmFyaWEsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZU51bWJlciwgdW5lbmNvZGVkLCB0YXAsIHBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBBcmlhIFZhbHVlcyBmb3IgYWxsIGhhbmRsZXMsIGFzIGEgY2hhbmdlIGluIG9uZSBjaGFuZ2VzIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgdGhlIG5leHQuXG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlID0gc2NvcGVfSGFuZGxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAxMDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9ybWF0dGVkIHZhbHVlIGZvciBkaXNwbGF5XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gU3RyaW5nKG9wdGlvbnMuYXJpYUZvcm1hdC50byh1bmVuY29kZWRbaW5kZXhdKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hcCB0byBzbGlkZXIgcmFuZ2UgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtaW4pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIG1heCA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtYXgpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIG5vdyA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhub3cpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWluXCIsIG1pbik7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWF4XCIsIG1heCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbm93XCIsIG5vdyk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiLCB0ZXh0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEdyb3VwKHBpcHMpIHtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcmFuZ2UuXG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlJhbmdlIHx8IHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5TdGVwcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS54VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5Db3VudCkge1xuICAgICAgICAgICAgICAgIGlmIChwaXBzLnZhbHVlcyA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3ZhbHVlcycgKD49IDIpIHJlcXVpcmVkIGZvciBtb2RlICdjb3VudCcuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEaXZpZGUgMCAtIDEwMCBpbiAnY291bnQnIHBhcnRzLlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHBpcHMudmFsdWVzIC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgc3ByZWFkID0gMTAwIC8gaW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIExpc3QgdGhlc2UgcGFydHMgYW5kIGhhdmUgdGhlbSBoYW5kbGVkIGFzICdwb3NpdGlvbnMnLlxuICAgICAgICAgICAgICAgIHdoaWxlIChpbnRlcnZhbC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpbnRlcnZhbF0gPSBpbnRlcnZhbCAqIHNwcmVhZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goMTAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwVG9SYW5nZSh2YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIE1hcCBhbGwgcGVyY2VudGFnZXMgdG8gb24tcmFuZ2UgdmFsdWVzLlxuICAgICAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHBpcHMudmFsdWVzLCBwaXBzLnN0ZXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5WYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgbXVzdCBiZSBzdGVwcGVkLCBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBwZXJjZW50YWdlIGZpcnN0LlxuICAgICAgICAgICAgICAgIGlmIChwaXBzLnN0ZXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBpcHMudmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gcGVyY2VudGFnZSwgYXBwbHkgc3RlcCwgcmV0dXJuIHRvIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodmFsdWUpKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGNhbiBzaW1wbHkgdXNlIHRoZSB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpcHMudmFsdWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtdOyAvLyBwaXBzLm1vZGUgPSBuZXZlclxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1hcFRvUmFuZ2UodmFsdWVzLCBzdGVwcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHN0ZXBwZWQgPyBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHZhbHVlKSA6IHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlU3ByZWFkKHBpcHMpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhZmVJbmNyZW1lbnQodmFsdWUsIGluY3JlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIEF2b2lkIGZsb2F0aW5nIHBvaW50IHZhcmlhbmNlIGJ5IGRyb3BwaW5nIHRoZSBzbWFsbGVzdCBkZWNpbWFsIHBsYWNlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKCh2YWx1ZSArIGluY3JlbWVudCkudG9GaXhlZCg3KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZ3JvdXAgPSBnZXRHcm91cChwaXBzKTtcbiAgICAgICAgICAgIHZhciBpbmRleGVzID0ge307XG4gICAgICAgICAgICB2YXIgZmlyc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgICAgIHZhciBsYXN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbc2NvcGVfU3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBpZ25vcmVGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUxhc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBwcmV2UGN0ID0gMDtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGdyb3VwLCBzb3J0IGl0IGFuZCBmaWx0ZXIgYXdheSBhbGwgZHVwbGljYXRlcy5cbiAgICAgICAgICAgIGdyb3VwID0gdW5pcXVlKGdyb3VwLnNsaWNlKCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcmFuZ2Ugc3RhcnRzIHdpdGggdGhlIGZpcnN0IGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoZ3JvdXBbMF0gIT09IGZpcnN0SW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnVuc2hpZnQoZmlyc3RJblJhbmdlKTtcbiAgICAgICAgICAgICAgICBpZ25vcmVGaXJzdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMaWtld2lzZSBmb3IgdGhlIGxhc3Qgb25lLlxuICAgICAgICAgICAgaWYgKGdyb3VwW2dyb3VwLmxlbmd0aCAtIDFdICE9PSBsYXN0SW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnB1c2gobGFzdEluUmFuZ2UpO1xuICAgICAgICAgICAgICAgIGlnbm9yZUxhc3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGxvd2VyICsgdXBwZXIgcG9zaXRpb25zLlxuICAgICAgICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIHZhciBxO1xuICAgICAgICAgICAgICAgIHZhciBsb3cgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIHZhciBoaWdoID0gZ3JvdXBbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UGN0O1xuICAgICAgICAgICAgICAgIHZhciBwY3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgICAgIHZhciBwY3RQb3M7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGU7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzO1xuICAgICAgICAgICAgICAgIHZhciByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgIHZhciBpc1N0ZXBzID0gcGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlN0ZXBzO1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gdXNpbmcgJ3N0ZXBzJyBtb2RlLCB1c2UgdGhlIHByb3ZpZGVkIHN0ZXBzLlxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UnbGwgc3RlcCBvbiB0byB0aGUgbmV4dCBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBpZiAoaXNTdGVwcykge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0ueE51bVN0ZXBzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhICdmdWxsJyBzdGVwLlxuICAgICAgICAgICAgICAgIGlmICghc3RlcCkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gaGlnaCAtIGxvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgaGlnaCBpcyB1bmRlZmluZWQgd2UgYXJlIGF0IHRoZSBsYXN0IHN1YnJhbmdlLiBNYWtlIHN1cmUgaXQgaXRlcmF0ZXMgb25jZSAoIzEwODgpXG4gICAgICAgICAgICAgICAgaWYgKGhpZ2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBoaWdoID0gbG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgc3RlcCBpc24ndCAwLCB3aGljaCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wICgjNjU0KVxuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgICAgIC8vIEZpbmQgYWxsIHN0ZXBzIGluIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gaGlnaDsgaSA9IHNhZmVJbmNyZW1lbnQoaSwgc3RlcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBwZXJjZW50YWdlIHZhbHVlIGZvciB0aGUgY3VycmVudCBzdGVwLFxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHNpemUgZm9yIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgbmV3UGN0ID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyhpKTtcbiAgICAgICAgICAgICAgICAgICAgcGN0RGlmZmVyZW5jZSA9IG5ld1BjdCAtIHByZXZQY3Q7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzID0gcGN0RGlmZmVyZW5jZSAvIChwaXBzLmRlbnNpdHkgfHwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxTdGVwcyA9IE1hdGgucm91bmQoc3RlcHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHJhdGlvIHJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiBwZXJjZW50YWdlLXNwYWNlIGEgcG9pbnQgaW5kaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgYSBkZW5zaXR5IDEgdGhlIHBvaW50cy9wZXJjZW50YWdlID0gMS4gRm9yIGRlbnNpdHkgMiwgdGhhdCBwZXJjZW50YWdlIG5lZWRzIHRvIGJlIHJlLWRpdmlkZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJvdW5kIHRoZSBwZXJjZW50YWdlIG9mZnNldCB0byBhbiBldmVuIG51bWJlciwgdGhlbiBkaXZpZGUgYnkgdHdvXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIHNwcmVhZCB0aGUgb2Zmc2V0IG9uIGJvdGggc2lkZXMgb2YgdGhlIHJhbmdlLlxuICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZSA9IHBjdERpZmZlcmVuY2UgLyByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdmlkZSBhbGwgcG9pbnRzIGV2ZW5seSwgYWRkaW5nIHRoZSBjb3JyZWN0IG51bWJlciB0byB0aGlzIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgICAgICAvLyBSdW4gdXAgdG8gPD0gc28gdGhhdCAxMDAlIGdldHMgYSBwb2ludCwgZXZlbnQgaWYgaWdub3JlTGFzdCBpcyBzZXQuXG4gICAgICAgICAgICAgICAgICAgIGZvciAocSA9IDE7IHEgPD0gcmVhbFN0ZXBzOyBxICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByYXRpbyBiZXR3ZWVuIHRoZSByb3VuZGVkIHZhbHVlIGFuZCB0aGUgYWN0dWFsIHNpemUgbWlnaHQgYmUgfjElIG9mZi5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvcnJlY3QgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IGJ5IHRoZSBudW1iZXIgb2YgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXIgc3VicmFuZ2UuIGRlbnNpdHkgPSAxIHdpbGwgcmVzdWx0IGluIDEwMCBwb2ludHMgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmdWxsIHJhbmdlLCAyIGZvciA1MCwgNCBmb3IgMjUsIGV0Yy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBjdFBvcyA9IHByZXZQY3QgKyBxICogc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzW3BjdFBvcy50b0ZpeGVkKDUpXSA9IFtzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcocGN0UG9zKSwgMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBwb2ludCB0eXBlLlxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gZ3JvdXAuaW5kZXhPZihpKSA+IC0xID8gZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlIDogaXNTdGVwcyA/IGV4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZSA6IGV4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5mb3JjZSB0aGUgJ2lnbm9yZUZpcnN0JyBvcHRpb24gYnkgb3ZlcndyaXRpbmcgdGhlIHR5cGUgZm9yIDAuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5kZXggJiYgaWdub3JlRmlyc3QgJiYgaSAhPT0gaGlnaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaSA9PT0gaGlnaCAmJiBpZ25vcmVMYXN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgJ3R5cGUnIG9mIHRoaXMgcG9pbnQuIDAgPSBwbGFpbiwgMSA9IHJlYWwgdmFsdWUsIDIgPSBzdGVwIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1tuZXdQY3QudG9GaXhlZCg1KV0gPSBbaSwgdHlwZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBwZXJjZW50YWdlIGNvdW50LlxuICAgICAgICAgICAgICAgICAgICBwcmV2UGN0ID0gbmV3UGN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlckZ1bmMsIGZvcm1hdHRlcikge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGVfRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZVNpemVDbGFzc2VzID0gKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZU5vcm1hbCxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTGFyZ2UsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVN1YixcbiAgICAgICAgICAgICAgICBfYSk7XG4gICAgICAgICAgICB2YXIgbWFya2VyU2l6ZUNsYXNzZXMgPSAoX2IgPSB7fSxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLk5vbmVdID0gXCJcIixcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlck5vcm1hbCxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlckxhcmdlLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyU3ViLFxuICAgICAgICAgICAgICAgIF9iKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZU9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVWZXJ0aWNhbF07XG4gICAgICAgICAgICB2YXIgbWFya2VyT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyVmVydGljYWxdO1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHMpO1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5vcnQgPT09IDAgPyBvcHRpb25zLmNzc0NsYXNzZXMucGlwc0hvcml6b250YWwgOiBvcHRpb25zLmNzc0NsYXNzZXMucGlwc1ZlcnRpY2FsKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENsYXNzZXModHlwZSwgc291cmNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBzb3VyY2UgPT09IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZW50YXRpb25DbGFzc2VzID0gYSA/IHZhbHVlT3JpZW50YXRpb25DbGFzc2VzIDogbWFya2VyT3JpZW50YXRpb25DbGFzc2VzO1xuICAgICAgICAgICAgICAgIHZhciBzaXplQ2xhc3NlcyA9IGEgPyB2YWx1ZVNpemVDbGFzc2VzIDogbWFya2VyU2l6ZUNsYXNzZXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSArIFwiIFwiICsgb3JpZW50YXRpb25DbGFzc2VzW29wdGlvbnMub3J0XSArIFwiIFwiICsgc2l6ZUNsYXNzZXNbdHlwZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRTcHJlYWQob2Zmc2V0LCB2YWx1ZSwgdHlwZSkge1xuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBmaWx0ZXIgZnVuY3Rpb24sIGlmIGl0IGlzIHNldC5cbiAgICAgICAgICAgICAgICB0eXBlID0gZmlsdGVyRnVuYyA/IGZpbHRlckZ1bmModmFsdWUsIHR5cGUpIDogdHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5QaXBzVHlwZS5Ob25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgbWFya2VyIGZvciBldmVyeSBwb2ludFxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gYWRkTm9kZVRvKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlcik7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgICAgIC8vIFZhbHVlcyBhcmUgb25seSBhcHBlbmRlZCBmb3IgcG9pbnRzIG1hcmtlZCAnMScgb3IgJzInLlxuICAgICAgICAgICAgICAgIGlmICh0eXBlID4gZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gU3RyaW5nKGZvcm1hdHRlci50byh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFwcGVuZCBhbGwgcG9pbnRzLlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3ByZWFkKS5mb3JFYWNoKGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBhZGRTcHJlYWQob2Zmc2V0LCBzcHJlYWRbb2Zmc2V0XVswXSwgc3ByZWFkW29mZnNldF1bMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVQaXBzKCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlX1BpcHMpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50KHNjb3BlX1BpcHMpO1xuICAgICAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBpcHMocGlwcykge1xuICAgICAgICAgICAgLy8gRml4ICM2NjlcbiAgICAgICAgICAgIHJlbW92ZVBpcHMoKTtcbiAgICAgICAgICAgIHZhciBzcHJlYWQgPSBnZW5lcmF0ZVNwcmVhZChwaXBzKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBwaXBzLmZpbHRlcjtcbiAgICAgICAgICAgIHZhciBmb3JtYXQgPSBwaXBzLmZvcm1hdCB8fCB7XG4gICAgICAgICAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKE1hdGgucm91bmQodmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2NvcGVfUGlwcyA9IHNjb3BlX1RhcmdldC5hcHBlbmRDaGlsZChhZGRNYXJraW5nKHNwcmVhZCwgZmlsdGVyLCBmb3JtYXQpKTtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9QaXBzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNob3J0aGFuZCBmb3IgYmFzZSBkaW1lbnNpb25zLlxuICAgICAgICBmdW5jdGlvbiBiYXNlU2l6ZSgpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2NvcGVfQmFzZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHZhciBhbHQgPSAoXCJvZmZzZXRcIiArIFtcIldpZHRoXCIsIFwiSGVpZ2h0XCJdW29wdGlvbnMub3J0XSk7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vcnQgPT09IDAgPyByZWN0LndpZHRoIHx8IHNjb3BlX0Jhc2VbYWx0XSA6IHJlY3QuaGVpZ2h0IHx8IHNjb3BlX0Jhc2VbYWx0XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVyIGZvciBhdHRhY2hpbmcgZXZlbnRzIHRyb3VnaCBhIHByb3h5LlxuICAgICAgICBmdW5jdGlvbiBhdHRhY2hFdmVudChldmVudHMsIGVsZW1lbnQsIGNhbGxiYWNrLCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvICdmaWx0ZXInIGV2ZW50cyB0byB0aGUgc2xpZGVyLlxuICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhIG5vZGUsIG5vdCBhIG5vZGVMaXN0XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBmaXhFdmVudChldmVudCwgZGF0YS5wYWdlT2Zmc2V0LCBkYXRhLnRhcmdldCB8fCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyBmaXhFdmVudCByZXR1cm5zIGZhbHNlIGlmIHRoaXMgZXZlbnQgaGFzIGEgZGlmZmVyZW50IHRhcmdldFxuICAgICAgICAgICAgICAgIC8vIHdoZW4gaGFuZGxpbmcgKG11bHRpLSkgdG91Y2ggZXZlbnRzO1xuICAgICAgICAgICAgICAgIGlmICghZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRvTm90UmVqZWN0IGlzIHBhc3NlZCBieSBhbGwgZW5kIGV2ZW50cyB0byBtYWtlIHN1cmUgcmVsZWFzZWQgdG91Y2hlc1xuICAgICAgICAgICAgICAgIC8vIGFyZSBub3QgcmVqZWN0ZWQsIGxlYXZpbmcgdGhlIHNsaWRlciBcInN0dWNrXCIgdG8gdGhlIGN1cnNvcjtcbiAgICAgICAgICAgICAgICBpZiAoaXNTbGlkZXJEaXNhYmxlZCgpICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcCBpZiBhbiBhY3RpdmUgJ3RhcCcgdHJhbnNpdGlvbiBpcyB0YWtpbmcgcGxhY2UuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCkgJiYgIWRhdGEuZG9Ob3RSZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50cyA9PT0gYWN0aW9ucy5zdGFydCAmJiBlLmJ1dHRvbnMgIT09IHVuZGVmaW5lZCAmJiBlLmJ1dHRvbnMgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhvdmVyICYmIGUuYnV0dG9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICdzdXBwb3J0c1Bhc3NpdmUnIGlzIG9ubHkgdHJ1ZSBpZiBhIGJyb3dzZXIgYWxzbyBzdXBwb3J0cyB0b3VjaC1hY3Rpb246IG5vbmUgaW4gQ1NTLlxuICAgICAgICAgICAgICAgIC8vIGlPUyBzYWZhcmkgZG9lcyBub3QsIHNvIGl0IGRvZXNuJ3QgZ2V0IHRvIGJlbmVmaXQgZnJvbSBwYXNzaXZlIHNjcm9sbGluZy4gaU9TIGRvZXMgc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uLCBidXQgdGhhdCBhbGxvd3MgcGFubmluZywgd2hpY2ggYnJlYWtzXG4gICAgICAgICAgICAgICAgLy8gc2xpZGVycyBhZnRlciB6b29taW5nL29uIG5vbi1yZXNwb25zaXZlIHBhZ2VzLlxuICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzMzExMlxuICAgICAgICAgICAgICAgIGlmICghc3VwcG9ydHNQYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5jYWxjUG9pbnQgPSBlLnBvaW50c1tvcHRpb25zLm9ydF07XG4gICAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgZXZlbnQgaGFuZGxlciB3aXRoIHRoZSBldmVudCBbIGFuZCBhZGRpdGlvbmFsIGRhdGEgXS5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG1ldGhvZHMgPSBbXTtcbiAgICAgICAgICAgIC8vIEJpbmQgYSBjbG9zdXJlIG9uIHRoZSB0YXJnZXQgZm9yIGV2ZXJ5IGV2ZW50IHR5cGUuXG4gICAgICAgICAgICBldmVudHMuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG1ldGhvZCwgc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZSk7XG4gICAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKFtldmVudE5hbWUsIG1ldGhvZF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kcztcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm92aWRlIGEgY2xlYW4gZXZlbnQgd2l0aCBzdGFuZGFyZGl6ZWQgb2Zmc2V0IHZhbHVlcy5cbiAgICAgICAgZnVuY3Rpb24gZml4RXZlbnQoZSwgcGFnZU9mZnNldCwgZXZlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIC8vIEZpbHRlciB0aGUgZXZlbnQgdG8gcmVnaXN0ZXIgdGhlIHR5cGUsIHdoaWNoIGNhbiBiZVxuICAgICAgICAgICAgLy8gdG91Y2gsIG1vdXNlIG9yIHBvaW50ZXIuIE9mZnNldCBjaGFuZ2VzIG5lZWQgdG8gYmVcbiAgICAgICAgICAgIC8vIG1hZGUgb24gYW4gZXZlbnQgc3BlY2lmaWMgYmFzaXMuXG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBlLnR5cGUuaW5kZXhPZihcInRvdWNoXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIG1vdXNlID0gZS50eXBlLmluZGV4T2YoXCJtb3VzZVwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciBwb2ludGVyID0gZS50eXBlLmluZGV4T2YoXCJwb2ludGVyXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIHggPSAwO1xuICAgICAgICAgICAgdmFyIHkgPSAwO1xuICAgICAgICAgICAgLy8gSUUxMCBpbXBsZW1lbnRlZCBwb2ludGVyIGV2ZW50cyB3aXRoIGEgcHJlZml4O1xuICAgICAgICAgICAgaWYgKGUudHlwZS5pbmRleE9mKFwiTVNQb2ludGVyXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBFcnJvbmVvdXMgZXZlbnRzIHNlZW0gdG8gYmUgcGFzc2VkIGluIG9jY2FzaW9uYWxseSBvbiBpT1MvaVBhZE9TIGFmdGVyIHVzZXIgZmluaXNoZXMgaW50ZXJhY3Rpbmcgd2l0aFxuICAgICAgICAgICAgLy8gdGhlIHNsaWRlci4gVGhleSBhcHBlYXIgdG8gYmUgb2YgdHlwZSBNb3VzZUV2ZW50LCB5ZXQgdGhleSBkb24ndCBoYXZlIHVzdWFsIHByb3BlcnRpZXMgc2V0LiBJZ25vcmVcbiAgICAgICAgICAgIC8vIGV2ZW50cyB0aGF0IGhhdmUgbm8gdG91Y2hlcyBvciBidXR0b25zIGFzc29jaWF0ZWQgd2l0aCB0aGVtLiAoIzEwNTcsICMxMDc5LCAjMTA5NSlcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwibW91c2Vkb3duXCIgJiYgIWUuYnV0dG9ucyAmJiAhZS50b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIG9ubHkgdGhpbmcgb25lIGhhbmRsZSBzaG91bGQgYmUgY29uY2VybmVkIGFib3V0IGlzIHRoZSB0b3VjaGVzIHRoYXQgb3JpZ2luYXRlZCBvbiB0b3Agb2YgaXQuXG4gICAgICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm5zIHRydWUgaWYgYSB0b3VjaCBvcmlnaW5hdGVkIG9uIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICAgICAgdmFyIGlzVG91Y2hPblRhcmdldCA9IGZ1bmN0aW9uIChjaGVja1RvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBjaGVja1RvdWNoLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0YXJnZXQgPT09IGV2ZW50VGFyZ2V0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldC5jb250YWlucyh0YXJnZXQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5jb21wb3NlZCAmJiBlLmNvbXBvc2VkUGF0aCgpLnNoaWZ0KCkgPT09IGV2ZW50VGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgY2FzZSBvZiB0b3VjaHN0YXJ0IGV2ZW50cywgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlcmUgaXMgc3RpbGwgbm8gbW9yZSB0aGFuIG9uZVxuICAgICAgICAgICAgICAgIC8vIHRvdWNoIG9uIHRoZSB0YXJnZXQgc28gd2UgbG9vayBhbW9uZ3N0IGFsbCB0b3VjaGVzLlxuICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwidG91Y2hzdGFydFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaGVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGUudG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IHN1cHBvcnQgbW9yZSB0aGFuIG9uZSB0b3VjaCBwZXIgaGFuZGxlLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW4gdGhlIG90aGVyIGNhc2VzLCBmaW5kIG9uIGNoYW5nZWRUb3VjaGVzIGlzIGVub3VnaC5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFRvdWNoID0gQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChlLmNoYW5nZWRUb3VjaGVzLCBpc1RvdWNoT25UYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBDYW5jZWwgaWYgdGhlIHRhcmdldCB0b3VjaCBoYXMgbm90IG1vdmVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB5ID0gdGFyZ2V0VG91Y2gucGFnZVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQgfHwgZ2V0UGFnZU9mZnNldChzY29wZV9Eb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAobW91c2UgfHwgcG9pbnRlcikge1xuICAgICAgICAgICAgICAgIHggPSBlLmNsaWVudFggKyBwYWdlT2Zmc2V0Lng7XG4gICAgICAgICAgICAgICAgeSA9IGUuY2xpZW50WSArIHBhZ2VPZmZzZXQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQ7XG4gICAgICAgICAgICBlLnBvaW50cyA9IFt4LCB5XTtcbiAgICAgICAgICAgIGUuY3Vyc29yID0gbW91c2UgfHwgcG9pbnRlcjsgLy8gRml4ICM0MzVcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRyYW5zbGF0ZSBhIGNvb3JkaW5hdGUgaW4gdGhlIGRvY3VtZW50IHRvIGEgcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGNQb2ludFRvUGVyY2VudGFnZShjYWxjUG9pbnQpIHtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IGNhbGNQb2ludCAtIG9mZnNldChzY29wZV9CYXNlLCBvcHRpb25zLm9ydCk7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSAobG9jYXRpb24gKiAxMDApIC8gYmFzZVNpemUoKTtcbiAgICAgICAgICAgIC8vIENsYW1wIHByb3Bvc2FsIGJldHdlZW4gMCUgYW5kIDEwMCVcbiAgICAgICAgICAgIC8vIE91dC1vZi1ib3VuZCBjb29yZGluYXRlcyBtYXkgb2NjdXIgd2hlbiAubm9VaS1iYXNlIHBzZXVkby1lbGVtZW50c1xuICAgICAgICAgICAgLy8gYXJlIHVzZWQgKGUuZy4gY29udGFpbmVkIGhhbmRsZXMgZmVhdHVyZSlcbiAgICAgICAgICAgIHByb3Bvc2FsID0gbGltaXQocHJvcG9zYWwpO1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyID8gMTAwIC0gcHJvcG9zYWwgOiBwcm9wb3NhbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5kIGhhbmRsZSBjbG9zZXN0IHRvIGEgY2VydGFpbiBwZXJjZW50YWdlIG9uIHRoZSBzbGlkZXJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q2xvc2VzdEhhbmRsZShjbGlja2VkUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzbWFsbGVzdERpZmZlcmVuY2UgPSAxMDA7XG4gICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZmFsc2U7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlZCBoYW5kbGVzIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgaWYgKGlzSGFuZGxlRGlzYWJsZWQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZVBvc2l0aW9uID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlID0gTWF0aC5hYnMoaGFuZGxlUG9zaXRpb24gLSBjbGlja2VkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIC8vIEluaXRpYWwgc3RhdGVcbiAgICAgICAgICAgICAgICB2YXIgY2xpY2tBdEVkZ2UgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPT09IDEwMCAmJiBzbWFsbGVzdERpZmZlcmVuY2UgPT09IDEwMDtcbiAgICAgICAgICAgICAgICAvLyBEaWZmZXJlbmNlIHdpdGggdGhpcyBoYW5kbGUgaXMgc21hbGxlciB0aGFuIHRoZSBwcmV2aW91c2x5IGNoZWNrZWQgaGFuZGxlXG4gICAgICAgICAgICAgICAgdmFyIGlzQ2xvc2VyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDwgc21hbGxlc3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgICAgIHZhciBpc0Nsb3NlckFmdGVyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDw9IHNtYWxsZXN0RGlmZmVyZW5jZSAmJiBjbGlja2VkUG9zaXRpb24gPiBoYW5kbGVQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAoaXNDbG9zZXIgfHwgaXNDbG9zZXJBZnRlciB8fCBjbGlja0F0RWRnZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgc21hbGxlc3REaWZmZXJlbmNlID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJlICdlbmQnIHdoZW4gYSBtb3VzZSBvciBwZW4gbGVhdmVzIHRoZSBkb2N1bWVudC5cbiAgICAgICAgZnVuY3Rpb24gZG9jdW1lbnRMZWF2ZShldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2VvdXRcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gXCJIVE1MXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRFbmQoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBtb3ZlbWVudCBvbiBkb2N1bWVudCBmb3IgaGFuZGxlIGFuZCByYW5nZSBkcmFnLlxuICAgICAgICBmdW5jdGlvbiBldmVudE1vdmUoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIEZpeCAjNDk4XG4gICAgICAgICAgICAvLyBDaGVjayB2YWx1ZSBvZiAuYnV0dG9ucyBpbiAnc3RhcnQnIHRvIHdvcmsgYXJvdW5kIGEgYnVnIGluIElFMTAgbW9iaWxlIChkYXRhLmJ1dHRvbnNQcm9wZXJ0eSkuXG4gICAgICAgICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzkyNzAwNS9tb2JpbGUtaWUxMC13aW5kb3dzLXBob25lLWJ1dHRvbnMtcHJvcGVydHktb2YtcG9pbnRlcm1vdmUtZXZlbnQtYWx3YXlzLXplcm9cbiAgICAgICAgICAgIC8vIElFOSBoYXMgLmJ1dHRvbnMgYW5kIC53aGljaCB6ZXJvIG9uIG1vdXNlbW92ZS5cbiAgICAgICAgICAgIC8vIEZpcmVmb3ggYnJlYWtzIHRoZSBzcGVjIE1ETiBkZWZpbmVzLlxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNU0lFIDlcIikgPT09IC0xICYmIGV2ZW50LmJ1dHRvbnMgPT09IDAgJiYgZGF0YS5idXR0b25zUHJvcGVydHkgIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRFbmQoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgYXJlIG1vdmluZyB1cCBvciBkb3duXG4gICAgICAgICAgICB2YXIgbW92ZW1lbnQgPSAob3B0aW9ucy5kaXIgPyAtMSA6IDEpICogKGV2ZW50LmNhbGNQb2ludCAtIGRhdGEuc3RhcnRDYWxjUG9pbnQpO1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgbW92ZW1lbnQgaW50byBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHNsaWRlciB3aWR0aC9oZWlnaHRcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IChtb3ZlbWVudCAqIDEwMCkgLyBkYXRhLmJhc2VTaXplO1xuICAgICAgICAgICAgbW92ZUhhbmRsZXMobW92ZW1lbnQgPiAwLCBwcm9wb3NhbCwgZGF0YS5sb2NhdGlvbnMsIGRhdGEuaGFuZGxlTnVtYmVycywgZGF0YS5jb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVbmJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQsIGNhbGwgY2FsbGJhY2tzLlxuICAgICAgICBmdW5jdGlvbiBldmVudEVuZChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gVGhlIGhhbmRsZSBpcyBubyBsb25nZXIgYWN0aXZlLCBzbyByZW1vdmUgdGhlIGNsYXNzLlxuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZGF0YS5oYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVW5iaW5kIHRoZSBtb3ZlIGFuZCBlbmQgZXZlbnRzLCB3aGljaCBhcmUgYWRkZWQgb24gJ3N0YXJ0Jy5cbiAgICAgICAgICAgIGRhdGEubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9Eb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihjWzBdLCBjWzFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkcmFnZ2luZyBjbGFzcy5cbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnKTtcbiAgICAgICAgICAgICAgICBzZXRaaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY3Vyc29yIHN0eWxlcyBhbmQgdGV4dC1zZWxlY3Rpb24gZXZlbnRzIGJvdW5kIHRvIHRoZSBib2R5LlxuICAgICAgICAgICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfQm9keS5zdHlsZS5jdXJzb3IgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImVuZFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQmluZCBtb3ZlIGV2ZW50cyBvbiBkb2N1bWVudC5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRTdGFydChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gSWdub3JlIGV2ZW50IGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZU51bWJlcnMuc29tZShpc0hhbmRsZURpc2FibGVkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoYW5kbGU7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2RhdGEuaGFuZGxlTnVtYmVyc1swXV07XG4gICAgICAgICAgICAgICAgaGFuZGxlID0gaGFuZGxlT3JpZ2luLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIGhhbmRsZSBhcyAnYWN0aXZlJyBzbyBpdCBjYW4gYmUgc3R5bGVkLlxuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBIGRyYWcgc2hvdWxkIG5ldmVyIHByb3BhZ2F0ZSB1cCB0byB0aGUgJ3RhcCcgZXZlbnQuXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8vIFJlY29yZCB0aGUgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBtb3ZlIGFuZCBlbmQgZXZlbnRzLlxuICAgICAgICAgICAgdmFyIG1vdmVFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBldmVudE1vdmUsIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZXZlbnQgdGFyZ2V0IGhhcyBjaGFuZ2VkIHNvIHdlIG5lZWQgdG8gcHJvcGFnYXRlIHRoZSBvcmlnaW5hbCBvbmUgc28gdGhhdCB3ZSBrZWVwXG4gICAgICAgICAgICAgICAgLy8gcmVseWluZyBvbiBpdCB0byBleHRyYWN0IHRhcmdldCB0b3VjaGVzLlxuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGRhdGEuY29ubmVjdCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBzdGFydENhbGNQb2ludDogZXZlbnQuY2FsY1BvaW50LFxuICAgICAgICAgICAgICAgIGJhc2VTaXplOiBiYXNlU2l6ZSgpLFxuICAgICAgICAgICAgICAgIHBhZ2VPZmZzZXQ6IGV2ZW50LnBhZ2VPZmZzZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnNQcm9wZXJ0eTogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnM6IHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBlbmRFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMuZW5kLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGV2ZW50RW5kLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgZG9Ob3RSZWplY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBvdXRFdmVudCA9IGF0dGFjaEV2ZW50KFwibW91c2VvdXRcIiwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudExlYXZlLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgZG9Ob3RSZWplY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIHB1c2hlZCB0aGUgbGlzdGVuZXJzIGluIHRoZSBsaXN0ZW5lciBsaXN0IHJhdGhlciB0aGFuIGNyZWF0aW5nXG4gICAgICAgICAgICAvLyBhIG5ldyBvbmUgYXMgaXQgaGFzIGFscmVhZHkgYmVlbiBwYXNzZWQgdG8gdGhlIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2guYXBwbHkobGlzdGVuZXJzLCBtb3ZlRXZlbnQuY29uY2F0KGVuZEV2ZW50LCBvdXRFdmVudCkpO1xuICAgICAgICAgICAgLy8gVGV4dCBzZWxlY3Rpb24gaXNuJ3QgYW4gaXNzdWUgb24gdG91Y2ggZGV2aWNlcyxcbiAgICAgICAgICAgIC8vIHNvIGFkZGluZyBjdXJzb3Igc3R5bGVzIGNhbiBiZSBza2lwcGVkLlxuICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlICdJJyBjdXJzb3IgYW5kIGV4dGVuZCB0aGUgcmFuZ2UtZHJhZyBjdXJzb3IuXG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5zdHlsZS5jdXJzb3IgPSBnZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldCkuY3Vyc29yO1xuICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIHRhcmdldCB3aXRoIGEgZHJhZ2dpbmcgc3RhdGUuXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0ZXh0IHNlbGVjdGlvbiB3aGVuIGRyYWdnaW5nIHRoZSBoYW5kbGVzLlxuICAgICAgICAgICAgICAgIC8vIEluIG5vVWlTbGlkZXIgPD0gOS4yLjAsIHRoaXMgd2FzIGhhbmRsZWQgYnkgY2FsbGluZyBwcmV2ZW50RGVmYXVsdCBvbiBtb3VzZS90b3VjaCBzdGFydC9tb3ZlLFxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGlzIHNjcm9sbCBibG9ja2luZy4gVGhlIHNlbGVjdHN0YXJ0IGV2ZW50IGlzIHN1cHBvcnRlZCBieSBGaXJlRm94IHN0YXJ0aW5nIGZyb20gdmVyc2lvbiA1MixcbiAgICAgICAgICAgICAgICAvLyBtZWFuaW5nIHRoZSBvbmx5IGhvbGRvdXQgaXMgaU9TIFNhZmFyaS4gVGhpcyBkb2Vzbid0IG1hdHRlcjogdGV4dCBzZWxlY3Rpb24gaXNuJ3QgdHJpZ2dlcmVkIHRoZXJlLlxuICAgICAgICAgICAgICAgIC8vIFRoZSAnY3Vyc29yJyBmbGFnIGlzIGZhbHNlLlxuICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9c2VsZWN0c3RhcnRcbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInN0YXJ0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlIGNsb3Nlc3QgaGFuZGxlIHRvIHRhcHBlZCBsb2NhdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRUYXAoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFRoZSB0YXAgZXZlbnQgc2hvdWxkbid0IHByb3BhZ2F0ZSB1cFxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcbiAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBnZXRDbG9zZXN0SGFuZGxlKHByb3Bvc2FsKTtcbiAgICAgICAgICAgIC8vIFRhY2tsZSB0aGUgY2FzZSB0aGF0IGFsbCBoYW5kbGVzIGFyZSAnZGlzYWJsZWQnLlxuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGbGFnIHRoZSBzbGlkZXIgYXMgaXQgaXMgbm93IGluIGEgdHJhbnNpdGlvbmFsIHN0YXRlLlxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiB0YWtlcyBhIGNvbmZpZ3VyYWJsZSBhbW91bnQgb2YgbXMgKGRlZmF1bHQgMzAwKS4gUmUtZW5hYmxlIHRoZSBzbGlkZXIgYWZ0ZXIgdGhhdC5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5ldmVudHMuc25hcCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBwcm9wb3NhbCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRaaW5kZXgoKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5ldmVudHMuc25hcCkge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnRTdGFydChldmVudCwgeyBoYW5kbGVOdW1iZXJzOiBbaGFuZGxlTnVtYmVyXSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJlcyBhICdob3ZlcicgZXZlbnQgZm9yIGEgaG92ZXJlZCBtb3VzZS9wZW4gcG9zaXRpb24uXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50SG92ZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IGNhbGNQb2ludFRvUGVyY2VudGFnZShldmVudC5jYWxjUG9pbnQpO1xuICAgICAgICAgICAgdmFyIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcChwcm9wb3NhbCk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcImhvdmVyXCIgPT09IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXSkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHNjb3BlX1NlbGYsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlcyBrZXlkb3duIG9uIGZvY3VzZWQgaGFuZGxlc1xuICAgICAgICAvLyBEb24ndCBtb3ZlIHRoZSBkb2N1bWVudCB3aGVuIHByZXNzaW5nIGFycm93IGtleXMgb24gZm9jdXNlZCBoYW5kbGVzXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoaXNTbGlkZXJEaXNhYmxlZCgpIHx8IGlzSGFuZGxlRGlzYWJsZWQoaGFuZGxlTnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBob3Jpem9udGFsS2V5cyA9IFtcIkxlZnRcIiwgXCJSaWdodFwiXTtcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNhbEtleXMgPSBbXCJEb3duXCIsIFwiVXBcIl07XG4gICAgICAgICAgICB2YXIgbGFyZ2VTdGVwS2V5cyA9IFtcIlBhZ2VEb3duXCIsIFwiUGFnZVVwXCJdO1xuICAgICAgICAgICAgdmFyIGVkZ2VLZXlzID0gW1wiSG9tZVwiLCBcIkVuZFwiXTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRpciAmJiAhb3B0aW9ucy5vcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBPbiBhbiByaWdodC10by1sZWZ0IHNsaWRlciwgdGhlIGxlZnQgYW5kIHJpZ2h0IGtleXMgYWN0IGludmVydGVkXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbEtleXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5vcnQgJiYgIW9wdGlvbnMuZGlyKSB7XG4gICAgICAgICAgICAgICAgLy8gT24gYSB0b3AtdG8tYm90dG9tIHNsaWRlciwgdGhlIHVwIGFuZCBkb3duIGtleXMgYWN0IGludmVydGVkXG4gICAgICAgICAgICAgICAgdmVydGljYWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBsYXJnZVN0ZXBLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0cmlwIFwiQXJyb3dcIiBmb3IgSUUgY29tcGF0aWJpbGl0eS4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5XG4gICAgICAgICAgICB2YXIga2V5ID0gZXZlbnQua2V5LnJlcGxhY2UoXCJBcnJvd1wiLCBcIlwiKTtcbiAgICAgICAgICAgIHZhciBpc0xhcmdlRG93biA9IGtleSA9PT0gbGFyZ2VTdGVwS2V5c1swXTtcbiAgICAgICAgICAgIHZhciBpc0xhcmdlVXAgPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMV07XG4gICAgICAgICAgICB2YXIgaXNEb3duID0ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMF0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1swXSB8fCBpc0xhcmdlRG93bjtcbiAgICAgICAgICAgIHZhciBpc1VwID0ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMV0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1sxXSB8fCBpc0xhcmdlVXA7XG4gICAgICAgICAgICB2YXIgaXNNaW4gPSBrZXkgPT09IGVkZ2VLZXlzWzBdO1xuICAgICAgICAgICAgdmFyIGlzTWF4ID0ga2V5ID09PSBlZGdlS2V5c1sxXTtcbiAgICAgICAgICAgIGlmICghaXNEb3duICYmICFpc1VwICYmICFpc01pbiAmJiAhaXNNYXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgdG87XG4gICAgICAgICAgICBpZiAoaXNVcCB8fCBpc0Rvd24pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gaXNEb3duID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzID0gZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXAgPSBzdGVwc1tkaXJlY3Rpb25dO1xuICAgICAgICAgICAgICAgIC8vIEF0IHRoZSBlZGdlIG9mIGEgc2xpZGVyLCBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBzdGVwIHNldCwgdXNlIHRoZSBkZWZhdWx0IG9mIDEwJSBvZiB0aGUgc3ViLXJhbmdlXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBzY29wZV9TcGVjdHJ1bS5nZXREZWZhdWx0U3RlcChzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSwgaXNEb3duLCBvcHRpb25zLmtleWJvYXJkRGVmYXVsdFN0ZXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNMYXJnZVVwIHx8IGlzTGFyZ2VEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgKj0gb3B0aW9ucy5rZXlib2FyZFBhZ2VNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCAqPSBvcHRpb25zLmtleWJvYXJkTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RlcCBvdmVyIHplcm8tbGVuZ3RoIHJhbmdlcyAoIzk0OCk7XG4gICAgICAgICAgICAgICAgc3RlcCA9IE1hdGgubWF4KHN0ZXAsIDAuMDAwMDAwMSk7XG4gICAgICAgICAgICAgICAgLy8gRGVjcmVtZW50IGZvciBkb3duIHN0ZXBzXG4gICAgICAgICAgICAgICAgc3RlcCA9IChpc0Rvd24gPyAtMSA6IDEpICogc3RlcDtcbiAgICAgICAgICAgICAgICB0byA9IHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdICsgc3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzTWF4KSB7XG4gICAgICAgICAgICAgICAgLy8gRW5kIGtleVxuICAgICAgICAgICAgICAgIHRvID0gb3B0aW9ucy5zcGVjdHJ1bS54VmFsW29wdGlvbnMuc3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhvbWUga2V5XG4gICAgICAgICAgICAgICAgdG8gPSBvcHRpb25zLnNwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHRvKSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF0dGFjaCBldmVudHMgdG8gc2V2ZXJhbCBzbGlkZXIgcGFydHMuXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRTbGlkZXJFdmVudHMoYmVoYXZpb3VyKSB7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIHN0YW5kYXJkIGRyYWcgZXZlbnQgdG8gdGhlIGhhbmRsZXMuXG4gICAgICAgICAgICBpZiAoIWJlaGF2aW91ci5maXhlZCkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBldmVudHMgYXJlIG9ubHkgYm91bmQgdG8gdGhlIHZpc3VhbCBoYW5kbGVcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudCwgbm90IHRoZSAncmVhbCcgb3JpZ2luIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGhhbmRsZS5jaGlsZHJlblswXSwgZXZlbnRTdGFydCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogW2luZGV4XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgdGFwIGV2ZW50IHRvIHRoZSBzbGlkZXIgYmFzZS5cbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIudGFwKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgc2NvcGVfQmFzZSwgZXZlbnRUYXAsIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpcmUgaG92ZXIgZXZlbnRzXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmhvdmVyKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5tb3ZlLCBzY29wZV9CYXNlLCBldmVudEhvdmVyLCB7XG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHRoZSByYW5nZSBkcmFnZ2FibGUuXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWcpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9Db25uZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChjb25uZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29ubmVjdCA9PT0gZmFsc2UgfHwgaW5kZXggPT09IDAgfHwgaW5kZXggPT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQmVmb3JlID0gc2NvcGVfSGFuZGxlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQWZ0ZXIgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50SG9sZGVycyA9IFtjb25uZWN0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXNUb0RyYWcgPSBbaGFuZGxlQmVmb3JlLCBoYW5kbGVBZnRlcl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXJzVG9EcmFnID0gW2luZGV4IC0gMSwgaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhjb25uZWN0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZ2dhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgcmFuZ2UgaXMgZml4ZWQsIHRoZSBlbnRpcmUgcmFuZ2UgY2FuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlIGRyYWdnZWQgYnkgdGhlIGhhbmRsZXMuIFRoZSBoYW5kbGUgaW4gdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgIC8vIG9yaWdpbiB3aWxsIHByb3BhZ2F0ZSB0aGUgc3RhcnQgZXZlbnQgdXB3YXJkLFxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgaXQgbmVlZHMgdG8gYmUgYm91bmQgbWFudWFsbHkgb24gdGhlIG90aGVyLlxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMucHVzaChoYW5kbGVCZWZvcmUuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQWZ0ZXIuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZ0FsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlc1RvRHJhZyA9IHNjb3BlX0hhbmRsZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzVG9EcmFnID0gc2NvcGVfSGFuZGxlTnVtYmVycztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIb2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGV2ZW50SG9sZGVyLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogaGFuZGxlc1RvRHJhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBoYW5kbGVOdW1iZXJzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBdHRhY2ggYW4gZXZlbnQgdG8gdGhpcyBzbGlkZXIsIHBvc3NpYmx5IGluY2x1ZGluZyBhIG5hbWVzcGFjZVxuICAgICAgICBmdW5jdGlvbiBiaW5kRXZlbnQobmFtZXNwYWNlZEV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gPSBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XSB8fCBbXTtcbiAgICAgICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGV2ZW50IGJvdW5kIGlzICd1cGRhdGUsJyBmaXJlIGl0IGltbWVkaWF0ZWx5IGZvciBhbGwgaGFuZGxlcy5cbiAgICAgICAgICAgIGlmIChuYW1lc3BhY2VkRXZlbnQuc3BsaXQoXCIuXCIpWzBdID09PSBcInVwZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzSW50ZXJuYWxOYW1lc3BhY2UobmFtZXNwYWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZXNwYWNlID09PSBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhIHx8IG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5kbyBhdHRhY2htZW50IG9mIGV2ZW50XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5hbWVzcGFjZWRFdmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmFtZXNwYWNlZEV2ZW50ICYmIG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlID0gZXZlbnQgPyBuYW1lc3BhY2VkRXZlbnQuc3Vic3RyaW5nKGV2ZW50Lmxlbmd0aCkgOiBuYW1lc3BhY2VkRXZlbnQ7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGJpbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdEV2ZW50ID0gYmluZC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICAgICAgdmFyIHROYW1lc3BhY2UgPSBiaW5kLnN1YnN0cmluZyh0RXZlbnQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAoKCFldmVudCB8fCBldmVudCA9PT0gdEV2ZW50KSAmJiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgZGVsZXRlIHByb3RlY3RlZCBpbnRlcm5hbCBldmVudCBpZiBpbnRlbnRpb25hbFxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSW50ZXJuYWxOYW1lc3BhY2UodE5hbWVzcGFjZSkgfHwgbmFtZXNwYWNlID09PSB0TmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2NvcGVfRXZlbnRzW2JpbmRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRXh0ZXJuYWwgZXZlbnQgaGFuZGxpbmdcbiAgICAgICAgZnVuY3Rpb24gZmlyZUV2ZW50KGV2ZW50TmFtZSwgaGFuZGxlTnVtYmVyLCB0YXApIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRUeXBlID0gdGFyZ2V0RXZlbnQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09IGV2ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBzbGlkZXIgcHVibGljIEFQSSBhcyB0aGUgc2NvcGUgKCd0aGlzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1NlbGYsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIHZhbHVlcyBhcyBhcnJheSwgc28gYXJnXzFbYXJnXzJdIGlzIGFsd2F5cyB2YWxpZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBpbmRleCwgMCBvciAxXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW4tZm9ybWF0dGVkIHNsaWRlciB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV2ZW50IGlzIGZpcmVkIGJ5IHRhcCwgdHJ1ZSBvciBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFwIHx8IGZhbHNlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExlZnQgb2Zmc2V0IG9mIHRoZSBoYW5kbGUsIGluIHJlbGF0aW9uIHRvIHRoZSBzbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgdG8gYW4gYWNjZXNzaWJsZSBwYXJhbWV0ZXIgd2hlbiB0aGlzIGlzIHVuYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3BsaXQgb3V0IHRoZSBoYW5kbGUgcG9zaXRpb25pbmcgbG9naWMgc28gdGhlIE1vdmUgZXZlbnQgY2FuIHVzZSBpdCwgdG9vXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrSGFuZGxlUG9zaXRpb24ocmVmZXJlbmNlLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBnZXRWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlO1xuICAgICAgICAgICAgLy8gRm9yIHNsaWRlcnMgd2l0aCBtdWx0aXBsZSBoYW5kbGVzLCBsaW1pdCBtb3ZlbWVudCB0byB0aGUgb3RoZXIgaGFuZGxlLlxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIG1hcmdpbiBvcHRpb24gYnkgYWRkaW5nIGl0IHRvIHRoZSBoYW5kbGUgcG9zaXRpb25zLlxuICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSAmJiAhb3B0aW9ucy5ldmVudHMudW5jb25zdHJhaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChsb29rQmFja3dhcmQgJiYgaGFuZGxlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLm1hcmdpbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb29rRm9yd2FyZCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgKyAxXSwgb3B0aW9ucy5tYXJnaW4sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIGxpbWl0IG9wdGlvbiBoYXMgdGhlIG9wcG9zaXRlIGVmZmVjdCwgbGltaXRpbmcgaGFuZGxlcyB0byBhXG4gICAgICAgICAgICAvLyBtYXhpbXVtIGRpc3RhbmNlIGZyb20gYW5vdGhlci4gTGltaXQgbXVzdCBiZSA+IDAsIGFzIG90aGVyd2lzZVxuICAgICAgICAgICAgLy8gaGFuZGxlcyB3b3VsZCBiZSB1bm1vdmFibGUuXG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxICYmIG9wdGlvbnMubGltaXQpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9va0JhY2t3YXJkICYmIGhhbmRsZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSwgb3B0aW9ucy5saW1pdCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb29rRm9yd2FyZCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgKyAxXSwgb3B0aW9ucy5saW1pdCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgcGFkZGluZyBvcHRpb24ga2VlcHMgdGhlIGhhbmRsZXMgYSBjZXJ0YWluIGRpc3RhbmNlIGZyb20gdGhlXG4gICAgICAgICAgICAvLyBlZGdlcyBvZiB0aGUgc2xpZGVyLiBQYWRkaW5nIG11c3QgYmUgPiAwLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGFkZGluZykge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKDAsIG9wdGlvbnMucGFkZGluZ1swXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UoMTAwLCBvcHRpb25zLnBhZGRpbmdbMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHRvKTtcbiAgICAgICAgICAgIC8vIExpbWl0IHBlcmNlbnRhZ2UgdG8gdGhlIDAgLSAxMDAgcmFuZ2VcbiAgICAgICAgICAgIHRvID0gbGltaXQodG8pO1xuICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIGhhbmRsZSBjYW4ndCBtb3ZlXG4gICAgICAgICAgICBpZiAodG8gPT09IHJlZmVyZW5jZVtoYW5kbGVOdW1iZXJdICYmICFnZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfVxuICAgICAgICAvLyBVc2VzIHNsaWRlciBvcmllbnRhdGlvbiB0byBjcmVhdGUgQ1NTIHJ1bGVzLiBhID0gYmFzZSB2YWx1ZTtcbiAgICAgICAgZnVuY3Rpb24gaW5SdWxlT3JkZXIodiwgYSkge1xuICAgICAgICAgICAgdmFyIG8gPSBvcHRpb25zLm9ydDtcbiAgICAgICAgICAgIHJldHVybiAobyA/IGEgOiB2KSArIFwiLCBcIiArIChvID8gdiA6IGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmVzIGhhbmRsZShzKSBieSBhIHBlcmNlbnRhZ2VcbiAgICAgICAgLy8gKGJvb2wsICUgdG8gbW92ZSwgWyUgd2hlcmUgaGFuZGxlIHN0YXJ0ZWQsIC4uLl0sIFtpbmRleCBpbiBzY29wZV9IYW5kbGVzLCAuLi5dKVxuICAgICAgICBmdW5jdGlvbiBtb3ZlSGFuZGxlcyh1cHdhcmQsIHByb3Bvc2FsLCBsb2NhdGlvbnMsIGhhbmRsZU51bWJlcnMsIGNvbm5lY3QpIHtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbHMgPSBsb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgICAgIC8vIFN0b3JlIGZpcnN0IGhhbmRsZSBub3csIHNvIHdlIHN0aWxsIGhhdmUgaXQgaW4gY2FzZSBoYW5kbGVOdW1iZXJzIGlzIHJldmVyc2VkXG4gICAgICAgICAgICB2YXIgZmlyc3RIYW5kbGUgPSBoYW5kbGVOdW1iZXJzWzBdO1xuICAgICAgICAgICAgdmFyIGIgPSBbIXVwd2FyZCwgdXB3YXJkXTtcbiAgICAgICAgICAgIHZhciBmID0gW3Vwd2FyZCwgIXVwd2FyZF07XG4gICAgICAgICAgICAvLyBDb3B5IGhhbmRsZU51bWJlcnMgc28gd2UgZG9uJ3QgY2hhbmdlIHRoZSBkYXRhc2V0XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzID0gaGFuZGxlTnVtYmVycy5zbGljZSgpO1xuICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIHdoaWNoIGhhbmRsZSBpcyAnbGVhZGluZycuXG4gICAgICAgICAgICAvLyBJZiB0aGF0IG9uZSBjYW4ndCBtb3ZlIHRoZSBzZWNvbmQgY2FuJ3QgZWl0aGVyLlxuICAgICAgICAgICAgaWYgKHVwd2FyZCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RlcCAxOiBnZXQgdGhlIG1heGltdW0gcGVyY2VudGFnZSB0aGF0IGFueSBvZiB0aGUgaGFuZGxlcyBjYW4gbW92ZVxuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyLCBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0byA9IGNoZWNrSGFuZGxlUG9zaXRpb24ocHJvcG9zYWxzLCBoYW5kbGVOdW1iZXIsIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdICsgcHJvcG9zYWwsIGJbb10sIGZbb10sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCBpZiBvbmUgb2YgdGhlIGhhbmRsZXMgY2FuJ3QgbW92ZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSB0byAtIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gPSB0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXNpbmcgb25lIGhhbmRsZSwgY2hlY2sgYmFja3dhcmQgQU5EIGZvcndhcmRcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGIgPSBmID0gW3RydWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBTdGVwIDI6IFRyeSB0byBzZXQgdGhlIGhhbmRsZXMgd2l0aCB0aGUgZm91bmQgcGVyY2VudGFnZVxuICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIGxvY2F0aW9uc1toYW5kbGVOdW1iZXJdICsgcHJvcG9zYWwsIGJbb10sIGZbb10pIHx8IHN0YXRlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTdGVwIDM6IElmIGEgaGFuZGxlIG1vdmVkLCBmaXJlIGV2ZW50c1xuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgY29ubmVjdCwgdGhlbiBmaXJlIGRyYWcgZXZlbnRcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiZHJhZ1wiLCBmaXJzdEhhbmRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRha2VzIGEgYmFzZSB2YWx1ZSBhbmQgYW4gb2Zmc2V0LiBUaGlzIG9mZnNldCBpcyB1c2VkIGZvciB0aGUgY29ubmVjdCBiYXIgc2l6ZS5cbiAgICAgICAgLy8gSW4gdGhlIGluaXRpYWwgZGVzaWduIGZvciB0aGlzIGZlYXR1cmUsIHRoZSBvcmlnaW4gZWxlbWVudCB3YXMgMSUgd2lkZS5cbiAgICAgICAgLy8gVW5mb3J0dW5hdGVseSwgYSByb3VuZGluZyBidWcgaW4gQ2hyb21lIG1ha2VzIGl0IGltcG9zc2libGUgdG8gaW1wbGVtZW50IHRoaXMgZmVhdHVyZVxuICAgICAgICAvLyBpbiB0aGlzIG1hbm5lcjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Nzk4MjIzXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zZm9ybURpcmVjdGlvbihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXIgPyAxMDAgLSBhIC0gYiA6IGE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlcyBzY29wZV9Mb2NhdGlvbnMgYW5kIHNjb3BlX1ZhbHVlcywgdXBkYXRlcyB2aXN1YWwgc3RhdGVcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlSGFuZGxlUG9zaXRpb24oaGFuZGxlTnVtYmVyLCB0bykge1xuICAgICAgICAgICAgLy8gVXBkYXRlIGxvY2F0aW9ucy5cbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID0gdG87XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSB2YWx1ZSB0byB0aGUgc2xpZGVyIHN0ZXBwaW5nL3JhbmdlLlxuICAgICAgICAgICAgc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl0gPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0aW9uID0gdHJhbnNmb3JtRGlyZWN0aW9uKHRvLCAwKSAtIHNjb3BlX0Rpck9mZnNldDtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVSdWxlID0gXCJ0cmFuc2xhdGUoXCIgKyBpblJ1bGVPcmRlcih0cmFuc2xhdGlvbiArIFwiJVwiLCBcIjBcIikgKyBcIilcIjtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5zdHlsZVtvcHRpb25zLnRyYW5zZm9ybVJ1bGVdID0gdHJhbnNsYXRlUnVsZTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlcyBiZWZvcmUgdGhlIHNsaWRlciBtaWRkbGUgYXJlIHN0YWNrZWQgbGF0ZXIgPSBoaWdoZXIsXG4gICAgICAgIC8vIEhhbmRsZXMgYWZ0ZXIgdGhlIG1pZGRsZSBsYXRlciBpcyBsb3dlclxuICAgICAgICAvLyBbWzddIFs4XSAuLi4uLi4uLi4uIHwgLi4uLi4uLi4uLiBbNV0gWzRdXG4gICAgICAgIGZ1bmN0aW9uIHNldFppbmRleCgpIHtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpciA9IHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID4gNTAgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgdmFyIHpJbmRleCA9IDMgKyAoc2NvcGVfSGFuZGxlcy5sZW5ndGggKyBkaXIgKiBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5zdHlsZS56SW5kZXggPSBTdHJpbmcoekluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRlc3Qgc3VnZ2VzdGVkIHZhbHVlcyBhbmQgYXBwbHkgbWFyZ2luLCBzdGVwLlxuICAgICAgICAvLyBpZiBleGFjdElucHV0IGlzIHRydWUsIGRvbid0IHJ1biBjaGVja0hhbmRsZVBvc2l0aW9uLCB0aGVuIHRoZSBoYW5kbGUgY2FuIGJlIHBsYWNlZCBpbiBiZXR3ZWVuIHN0ZXBzICgjNDM2KVxuICAgICAgICBmdW5jdGlvbiBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgaWYgKCFleGFjdElucHV0KSB7XG4gICAgICAgICAgICAgICAgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZUhhbmRsZVBvc2l0aW9uKGhhbmRsZU51bWJlciwgdG8pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlcyBzdHlsZSBhdHRyaWJ1dGUgZm9yIGNvbm5lY3Qgbm9kZXNcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ29ubmVjdChpbmRleCkge1xuICAgICAgICAgICAgLy8gU2tpcCBjb25uZWN0cyBzZXQgdG8gZmFsc2VcbiAgICAgICAgICAgIGlmICghc2NvcGVfQ29ubmVjdHNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGwgPSAwO1xuICAgICAgICAgICAgdmFyIGggPSAxMDA7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICBsID0gc2NvcGVfTG9jYXRpb25zW2luZGV4IC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBoID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIHVzZSB0d28gcnVsZXM6XG4gICAgICAgICAgICAvLyAndHJhbnNsYXRlJyB0byBjaGFuZ2UgdGhlIGxlZnQvdG9wIG9mZnNldDtcbiAgICAgICAgICAgIC8vICdzY2FsZScgdG8gY2hhbmdlIHRoZSB3aWR0aCBvZiB0aGUgZWxlbWVudDtcbiAgICAgICAgICAgIC8vIEFzIHRoZSBlbGVtZW50IGhhcyBhIHdpZHRoIG9mIDEwMCUsIGEgdHJhbnNsYXRpb24gb2YgMTAwJSBpcyBlcXVhbCB0byAxMDAlIG9mIHRoZSBwYXJlbnQgKC5ub1VpLWJhc2UpXG4gICAgICAgICAgICB2YXIgY29ubmVjdFdpZHRoID0gaCAtIGw7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNmb3JtRGlyZWN0aW9uKGwsIGNvbm5lY3RXaWR0aCkgKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XG4gICAgICAgICAgICB2YXIgc2NhbGVSdWxlID0gXCJzY2FsZShcIiArIGluUnVsZU9yZGVyKGNvbm5lY3RXaWR0aCAvIDEwMCwgXCIxXCIpICsgXCIpXCI7XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0c1tpbmRleF0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlUnVsZSArIFwiIFwiICsgc2NhbGVSdWxlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFBhcnNlcyB2YWx1ZSBwYXNzZWQgdG8gLnNldCBtZXRob2QuIFJldHVybnMgY3VycmVudCB2YWx1ZSBpZiBub3QgcGFyc2UtYWJsZS5cbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZVRvVmFsdWUodG8sIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgLy8gU2V0dGluZyB3aXRoIG51bGwgaW5kaWNhdGVzIGFuICdpZ25vcmUnLlxuICAgICAgICAgICAgLy8gSW5wdXR0aW5nICdmYWxzZScgaXMgaW52YWxpZC5cbiAgICAgICAgICAgIGlmICh0byA9PT0gbnVsbCB8fCB0byA9PT0gZmFsc2UgfHwgdG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGEgZm9ybWF0dGVkIG51bWJlciB3YXMgcGFzc2VkLCBhdHRlbXB0IHRvIGRlY29kZSBpdC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB0byA9IFN0cmluZyh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byA9IG9wdGlvbnMuZm9ybWF0LmZyb20odG8pO1xuICAgICAgICAgICAgaWYgKHRvICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBwYXJzaW5nIHRoZSBudW1iZXIgZmFpbGVkLCB1c2UgdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlIHx8IGlzTmFOKHRvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICAgICAgZnVuY3Rpb24gdmFsdWVTZXQoaW5wdXQsIGZpcmVTZXRFdmVudCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGFzQXJyYXkoaW5wdXQpO1xuICAgICAgICAgICAgdmFyIGlzSW5pdCA9IHNjb3BlX0xvY2F0aW9uc1swXSA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgLy8gRXZlbnQgZmlyZXMgYnkgZGVmYXVsdFxuICAgICAgICAgICAgZmlyZVNldEV2ZW50ID0gZmlyZVNldEV2ZW50ID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmlyZVNldEV2ZW50O1xuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGlzIG9wdGlvbmFsLlxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbml0aWFsIHZhbHVlcyB3ZXJlIHNldCBiZWZvcmUgdXNpbmcgYW5pbWF0ZWQgcGxhY2VtZW50LlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0ZSAmJiAhaXNJbml0KSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NGb3Ioc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpcnN0IHBhc3MsIHdpdGhvdXQgbG9va0FoZWFkIGJ1dCB3aXRoIGxvb2tCYWNrd2FyZC4gVmFsdWVzIGFyZSBzZXQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCByZXNvbHZlVG9WYWx1ZSh2YWx1ZXNbaGFuZGxlTnVtYmVyXSwgaGFuZGxlTnVtYmVyKSwgdHJ1ZSwgZmFsc2UsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgaSA9IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID09PSAxID8gMCA6IDE7XG4gICAgICAgICAgICAvLyBTcHJlYWQgaGFuZGxlcyBldmVubHkgYWNyb3NzIHRoZSBzbGlkZXIgaWYgdGhlIHJhbmdlIGhhcyBubyBzaXplIChtaW49bWF4KVxuICAgICAgICAgICAgaWYgKGlzSW5pdCAmJiBzY29wZV9TcGVjdHJ1bS5oYXNOb1NpemUoKSkge1xuICAgICAgICAgICAgICAgIGV4YWN0SW5wdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1swXSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BhY2VfMSA9IDEwMCAvIChzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSBoYW5kbGVOdW1iZXIgKiBzcGFjZV8xO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZWNvbmRhcnkgcGFzc2VzLiBOb3cgdGhhdCBhbGwgYmFzZSB2YWx1ZXMgYXJlIHNldCwgYXBwbHkgY29uc3RyYWludHMuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIGFsbCBoYW5kbGVzIHRvIGVuc3VyZSBjb25zdHJhaW50cyBhcmUgYXBwbGllZCBmb3IgdGhlIGVudGlyZSBzbGlkZXIgKElzc3VlICMxMDA5KVxuICAgICAgICAgICAgZm9yICg7IGkgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIC8vIEZpcmUgdGhlIGV2ZW50IG9ubHkgZm9yIGhhbmRsZXMgdGhhdCByZWNlaXZlZCBhIG5ldyB2YWx1ZSwgYXMgcGVyICM1NzlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2hhbmRsZU51bWJlcl0gIT09IG51bGwgJiYgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHNsaWRlciB0byBpbml0aWFsIHZhbHVlc1xuICAgICAgICBmdW5jdGlvbiB2YWx1ZVJlc2V0KGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCwgZmlyZVNldEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdmFsdWUgZm9yIGEgc2luZ2xlIGhhbmRsZVxuICAgICAgICBmdW5jdGlvbiB2YWx1ZVNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHZhbHVlLCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBudW1lcmljIGlucHV0XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBOdW1iZXIoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGlmICghKGhhbmRsZU51bWJlciA+PSAwICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGludmFsaWQgaGFuZGxlIG51bWJlciwgZ290OiBcIiArIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb29rIGJvdGggYmFja3dhcmQgYW5kIGZvcndhcmQsIHNpbmNlIHdlIGRvbid0IHdhbnQgdGhpcyBoYW5kbGUgdG8gXCJwdXNoXCIgb3RoZXIgaGFuZGxlcyAoIzk2MCk7XG4gICAgICAgICAgICAvLyBUaGUgZXhhY3RJbnB1dCBhcmd1bWVudCBjYW4gYmUgdXNlZCB0byBpZ25vcmUgc2xpZGVyIHN0ZXBwaW5nICgjNDM2KVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWUsIGhhbmRsZU51bWJlciksIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBpZiAoZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlR2V0KHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgaWYgKHVuZW5jb2RlZCA9PT0gdm9pZCAwKSB7IHVuZW5jb2RlZCA9IGZhbHNlOyB9XG4gICAgICAgICAgICBpZiAodW5lbmNvZGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGEgY29weSBvZiB0aGUgcmF3IHZhbHVlc1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9WYWx1ZXMubGVuZ3RoID09PSAxID8gc2NvcGVfVmFsdWVzWzBdIDogc2NvcGVfVmFsdWVzLnNsaWNlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pO1xuICAgICAgICAgICAgLy8gSWYgb25seSBvbmUgaGFuZGxlIGlzIHVzZWQsIHJldHVybiBhIHNpbmdsZSB2YWx1ZS5cbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlcyBjbGFzc2VzIGZyb20gdGhlIHJvb3QgYW5kIGVtcHRpZXMgaXQuXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgcHJvdGVjdGVkIGludGVybmFsIGxpc3RlbmVyc1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgICAgICByZW1vdmVFdmVudChJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmNzc0NsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aGlsZSAoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9UYXJnZXQucmVtb3ZlQ2hpbGQoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIHNjb3BlX1RhcmdldC5ub1VpU2xpZGVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgdmFyIG5lYXJieVN0ZXBzID0gc2NvcGVfU3BlY3RydW0uZ2V0TmVhcmJ5U3RlcHMobG9jYXRpb24pO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB2YXIgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RlcDtcbiAgICAgICAgICAgIHZhciBkZWNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgLy8gSWYgc25hcHBlZCwgZGlyZWN0bHkgdXNlIGRlZmluZWQgc3RlcCB2YWx1ZVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc25hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGFydFZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlIC0gdmFsdWUgfHwgbnVsbFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgbmV4dCB2YWx1ZSBpbiB0aGlzIHN0ZXAgbW92ZXMgaW50byB0aGUgbmV4dCBzdGVwLFxuICAgICAgICAgICAgLy8gdGhlIGluY3JlbWVudCBpcyB0aGUgc3RhcnQgb2YgdGhlIG5leHQgc3RlcCAtIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSArIGluY3JlbWVudCA+IG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlIC0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGJleW9uZCB0aGUgc3RhcnRpbmcgcG9pbnRcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYSBoYW5kbGUgaXMgYXQgdGhlIHN0YXJ0IG9mIGEgc3RlcCwgaXQgYWx3YXlzIHN0ZXBzIGJhY2sgaW50byB0aGUgcHJldmlvdXMgc3RlcCBmaXJzdFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gdmFsdWUgLSBuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLmhpZ2hlc3RTdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm93LCBpZiBhdCB0aGUgc2xpZGVyIGVkZ2VzLCB0aGVyZSBpcyBubyBpbi9kZWNyZW1lbnRcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbiA9PT0gMTAwKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxvY2F0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFzIHBlciAjMzkxLCB0aGUgY29tcGFyaXNvbiBmb3IgdGhlIGRlY3JlbWVudCBzdGVwIGNhbiBoYXZlIHNvbWUgcm91bmRpbmcgaXNzdWVzLlxuICAgICAgICAgICAgdmFyIHN0ZXBEZWNpbWFscyA9IHNjb3BlX1NwZWN0cnVtLmNvdW50U3RlcERlY2ltYWxzKCk7XG4gICAgICAgICAgICAvLyBSb3VuZCBwZXIgIzM5MVxuICAgICAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gbnVsbCAmJiBpbmNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gTnVtYmVyKGluY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlY3JlbWVudCAhPT0gbnVsbCAmJiBkZWNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gTnVtYmVyKGRlY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtkZWNyZW1lbnQsIGluY3JlbWVudF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0ZXAgc2l6ZSBmb3IgdGhlIHNsaWRlci5cbiAgICAgICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZU51bWJlcnMubWFwKGdldE5leHRTdGVwc0ZvckhhbmRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRhYmxlOiBtYXJnaW4sIGxpbWl0LCBwYWRkaW5nLCBzdGVwLCByYW5nZSwgYW5pbWF0ZSwgc25hcFxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKG9wdGlvbnNUb1VwZGF0ZSwgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAvLyBTcGVjdHJ1bSBpcyBjcmVhdGVkIHVzaW5nIHRoZSByYW5nZSwgc25hcCwgZGlyZWN0aW9uIGFuZCBzdGVwIG9wdGlvbnMuXG4gICAgICAgICAgICAvLyAnc25hcCcgYW5kICdzdGVwJyBjYW4gYmUgdXBkYXRlZC5cbiAgICAgICAgICAgIC8vIElmICdzbmFwJyBhbmQgJ3N0ZXAnIGFyZSBub3QgcGFzc2VkLCB0aGV5IHNob3VsZCByZW1haW4gdW5jaGFuZ2VkLlxuICAgICAgICAgICAgdmFyIHYgPSB2YWx1ZUdldCgpO1xuICAgICAgICAgICAgdmFyIHVwZGF0ZUFibGUgPSBbXG4gICAgICAgICAgICAgICAgXCJtYXJnaW5cIixcbiAgICAgICAgICAgICAgICBcImxpbWl0XCIsXG4gICAgICAgICAgICAgICAgXCJwYWRkaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyYW5nZVwiLFxuICAgICAgICAgICAgICAgIFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwic25hcFwiLFxuICAgICAgICAgICAgICAgIFwic3RlcFwiLFxuICAgICAgICAgICAgICAgIFwiZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgXCJwaXBzXCIsXG4gICAgICAgICAgICAgICAgXCJ0b29sdGlwc1wiXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gT25seSBjaGFuZ2Ugb3B0aW9ucyB0aGF0IHdlJ3JlIGFjdHVhbGx5IHBhc3NlZCB0byB1cGRhdGUuXG4gICAgICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5kZWZpbmVkLiBudWxsIHJlbW92ZXMgdGhlIHZhbHVlLlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbE9wdGlvbnNbbmFtZV0gPSBvcHRpb25zVG9VcGRhdGVbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IHRlc3RPcHRpb25zKG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgICAgICAgICAvLyBMb2FkIG5ldyBvcHRpb25zIGludG8gdGhlIHNsaWRlciBzdGF0ZVxuICAgICAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSBuZXdPcHRpb25zW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NvcGVfU3BlY3RydW0gPSBuZXdPcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICAgICAgLy8gTGltaXQsIG1hcmdpbiBhbmQgcGFkZGluZyBkZXBlbmQgb24gdGhlIHNwZWN0cnVtIGJ1dCBhcmUgc3RvcmVkIG91dHNpZGUgb2YgaXQuICgjNjc3KVxuICAgICAgICAgICAgb3B0aW9ucy5tYXJnaW4gPSBuZXdPcHRpb25zLm1hcmdpbjtcbiAgICAgICAgICAgIG9wdGlvbnMubGltaXQgPSBuZXdPcHRpb25zLmxpbWl0O1xuICAgICAgICAgICAgb3B0aW9ucy5wYWRkaW5nID0gbmV3T3B0aW9ucy5wYWRkaW5nO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHBpcHMsIHJlbW92ZXMgZXhpc3RpbmcuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRvb2x0aXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEludmFsaWRhdGUgdGhlIGN1cnJlbnQgcG9zaXRpb25pbmcgc28gdmFsdWVTZXQgZm9yY2VzIGFuIHVwZGF0ZS5cbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdmFsdWVTZXQoaXNTZXQob3B0aW9uc1RvVXBkYXRlLnN0YXJ0KSA/IG9wdGlvbnNUb1VwZGF0ZS5zdGFydCA6IHYsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gc3RlcHNcbiAgICAgICAgZnVuY3Rpb24gc2V0dXBTbGlkZXIoKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGJhc2UgZWxlbWVudCwgaW5pdGlhbGl6ZSBIVE1MIGFuZCBzZXQgY2xhc3Nlcy5cbiAgICAgICAgICAgIC8vIEFkZCBoYW5kbGVzIGFuZCBjb25uZWN0IGVsZW1lbnRzLlxuICAgICAgICAgICAgc2NvcGVfQmFzZSA9IGFkZFNsaWRlcihzY29wZV9UYXJnZXQpO1xuICAgICAgICAgICAgYWRkRWxlbWVudHMob3B0aW9ucy5jb25uZWN0LCBzY29wZV9CYXNlKTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB1c2VyIGV2ZW50cy5cbiAgICAgICAgICAgIGJpbmRTbGlkZXJFdmVudHMob3B0aW9ucy5ldmVudHMpO1xuICAgICAgICAgICAgLy8gVXNlIHRoZSBwdWJsaWMgdmFsdWUgbWV0aG9kIHRvIHNldCB0aGUgc3RhcnQgdmFsdWVzLlxuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJpYSgpO1xuICAgICAgICB9XG4gICAgICAgIHNldHVwU2xpZGVyKCk7XG4gICAgICAgIHZhciBzY29wZV9TZWxmID0ge1xuICAgICAgICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgICAgICAgIHN0ZXBzOiBnZXROZXh0U3RlcHMsXG4gICAgICAgICAgICBvbjogYmluZEV2ZW50LFxuICAgICAgICAgICAgb2ZmOiByZW1vdmVFdmVudCxcbiAgICAgICAgICAgIGdldDogdmFsdWVHZXQsXG4gICAgICAgICAgICBzZXQ6IHZhbHVlU2V0LFxuICAgICAgICAgICAgc2V0SGFuZGxlOiB2YWx1ZVNldEhhbmRsZSxcbiAgICAgICAgICAgIHJlc2V0OiB2YWx1ZVJlc2V0LFxuICAgICAgICAgICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgX19tb3ZlSGFuZGxlczogZnVuY3Rpb24gKHVwd2FyZCwgcHJvcG9zYWwsIGhhbmRsZU51bWJlcnMpIHtcbiAgICAgICAgICAgICAgICBtb3ZlSGFuZGxlcyh1cHdhcmQsIHByb3Bvc2FsLCBzY29wZV9Mb2NhdGlvbnMsIGhhbmRsZU51bWJlcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9yaWdpbmFsT3B0aW9ucyxcbiAgICAgICAgICAgIHVwZGF0ZU9wdGlvbnM6IHVwZGF0ZU9wdGlvbnMsXG4gICAgICAgICAgICB0YXJnZXQ6IHNjb3BlX1RhcmdldCxcbiAgICAgICAgICAgIHJlbW92ZVBpcHM6IHJlbW92ZVBpcHMsXG4gICAgICAgICAgICByZW1vdmVUb29sdGlwczogcmVtb3ZlVG9vbHRpcHMsXG4gICAgICAgICAgICBnZXRQb3NpdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0VG9vbHRpcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0T3JpZ2luczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpcHM6IHBpcHMgLy8gSXNzdWUgIzU5NFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2NvcGVfU2VsZjtcbiAgICB9XG4gICAgLy8gUnVuIHRoZSBzdGFuZGFyZCBpbml0aWFsaXplclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUodGFyZ2V0LCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5ub2RlTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogY3JlYXRlIHJlcXVpcmVzIGEgc2luZ2xlIGVsZW1lbnQsIGdvdDogXCIgKyB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBzbGlkZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gICAgICAgIGlmICh0YXJnZXQubm9VaVNsaWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogU2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXN0IHRoZSBvcHRpb25zIGFuZCBjcmVhdGUgdGhlIHNsaWRlciBlbnZpcm9ubWVudDtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICB2YXIgYXBpID0gc2NvcGUodGFyZ2V0LCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICB0YXJnZXQubm9VaVNsaWRlciA9IGFwaTtcbiAgICAgICAgcmV0dXJuIGFwaTtcbiAgICB9XG4gICAgdmFyIG5vdWlzbGlkZXIgPSB7XG4gICAgICAgIC8vIEV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZywgZG9uJ3QgdXNlIHRoaXMgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgX19zcGVjdHJ1bTogU3BlY3RydW0sXG4gICAgICAgIC8vIEEgcmVmZXJlbmNlIHRvIHRoZSBkZWZhdWx0IGNsYXNzZXMsIGFsbG93cyBnbG9iYWwgY2hhbmdlcy5cbiAgICAgICAgLy8gVXNlIHRoZSBjc3NDbGFzc2VzIG9wdGlvbiBmb3IgY2hhbmdlcyB0byBvbmUgc2xpZGVyLlxuICAgICAgICBjc3NDbGFzc2VzOiBjc3NDbGFzc2VzLFxuICAgICAgICBjcmVhdGU6IGluaXRpYWxpemVcbiAgICB9O1xuXG4gICAgZXhwb3J0cy5jcmVhdGUgPSBpbml0aWFsaXplO1xuICAgIGV4cG9ydHMuY3NzQ2xhc3NlcyA9IGNzc0NsYXNzZXM7XG4gICAgZXhwb3J0c1snZGVmYXVsdCddID0gbm91aXNsaWRlcjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm91aXNsaWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vdWlzbGlkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgJGVsOiBIVE1MRWxlbWVudDtcclxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLiRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHsgfVxyXG4gIFxyXG4gIGhpZGUoKSB7XHJcbiAgICB0aGlzLiRlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgfVxyXG5cclxuICBzaG93KCkge1xyXG4gICAgdGhpcy4kZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBBcHAgfSBmcm9tICcuLi9hcHAvYXBwJztcclxuaW1wb3J0IHsgZmF2b3JpdGUgfSBmcm9tICcuLic7XHJcbmltcG9ydCB7IHRveXMgfSBmcm9tICcuLic7XHJcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2R1bGVzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IEdhcmxhbmQgfSBmcm9tICcuL2dhcmxhbmQuY29tcG9uZW50JztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hyaXN0bWFzVHJlZSBleHRlbmRzIEFwcCB7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBhbGxEYXRhVG95czogRGF0YVtdO1xyXG4gIGxlYXZlRmxhZzogYm9vbGVhbjtcclxuICBnYXJsYW5kOiBHYXJsYW5kO1xyXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGlkKTtcclxuICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgdGhpcy5hbGxEYXRhVG95cztcclxuICAgIHRoaXMubGVhdmVGbGFnO1xyXG4gICAgdGhpcy5nYXJsYW5kID0gbmV3IEdhcmxhbmQ7XHJcbiAgfVxyXG5cclxuICBpbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgdG95cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3lzLXBhZ2UnKVxyXG4gICAgY29uc3QgdHJlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmVlLXBhZ2UnKTtcclxuICAgIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJlYScpO1xyXG4gICAgY29uc3Qgc3RhcnRQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LXBhZ2UnKTtcclxuICAgIGNvbnN0IGdhcmxhbmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoIGlucHV0Jyk7XHJcblxyXG4gICAgZ2FybGFuZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuZ2FybGFuZEJ0bk9uLmJpbmQodGhpcykpO1xyXG4gICAgc3RhcnRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuU3RhcnRQYWdlLmJpbmQodGhpcykpO1xyXG4gICAgdHJlZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkNocmlzdG1hc1RyZWVQYWdlLmJpbmQodGhpcykpO1xyXG4gICAgdG95cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlblRveXNQYWdlcy5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRCYWNrZ3JvdW5kLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZFRyZWUuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLnN0YXJ0RHJhZyk7XHJcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5lbmREcmFnLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5lbnRlckRyYWcuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2FybGFuZE9uLmJpbmQodGhpcykpO1xyXG4gICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpKTtcclxuICAgIGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVyLmJpbmQodGhpcykpO1xyXG4gICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5kcm9wLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ0xlYXZlKGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgIGNvbnN0IHRyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJlZScpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmxlYXZlRmxhZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZW50ZXJEcmFnKGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgIGNvbnN0IHRyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJlZScpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhMSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdlbGVtRHJhZzEnKTtcclxuICAgIGNvbnN0IGRhdGEyID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2VsZW1EcmFnMicpO1xyXG4gICAgY29uc3QgdG95RWxlbWVudDI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRveS1vbi10cmVlW2RhdGEtYWN0aXZlPVwiJHtkYXRhMn1cIl1gKTsgICBcclxuICAgIGlmIChkYXRhMikge1xyXG4gICAgICBcclxuICAgICAgLy8gY29uc3QgdG95RWxlbWVudDI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRveS1vbi10cmVlW2RhdGEtYWN0aXZlPVwiJHtkYXRhMn1cIl1gKTtcclxuICAgICAgdG95RWxlbWVudDIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICB0b3lFbGVtZW50Mi5zdHlsZS53aWR0aCA9ICczMHB4JztcclxuICAgICAgdG95RWxlbWVudDIuc3R5bGUuaGVpZ2h0ID0gJzMwcHgnO1xyXG4gICAgICAoZXZlbnQudGFyZ2V0IGFzIGFueSkuYXBwZW5kQ2hpbGQodG95RWxlbWVudDIpO1xyXG4gICAgICBtb3ZlQXQoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSwgdG95RWxlbWVudDIpO1xyXG4gICAgICBjb25zb2xlLmxvZygnZHJvcCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhMSkge1xyXG4gICAgICBjb25zdCBlbGVtQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pdGVtY291bnQ9XCIke2RhdGExfVwiXWApO1xyXG4gICAgICBjb25zdCBlbGVtVG95ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaXRlbXRveT1cIiR7ZGF0YTF9XCJdYCkgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcclxuICAgICAgY29uc3QgY3VycmVudENvdW50ID0gK2VsZW1Db3VudC50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgIGlmIChlbGVtQ291bnQudGV4dENvbnRlbnQgIT09ICcwJykge1xyXG4gICAgICAgIGVsZW1Db3VudC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRDb3VudCAtIDF9YDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZWxlbUNvdW50LnRleHRDb250ZW50ID09PSAnMCcpIHtcclxuICAgICAgICBlbGVtVG95LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRveUVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRveUVsZW1lbnQxLmNsYXNzTGlzdC5hZGQoJ3RveS1vbi10cmVlJyk7XHJcbiAgICAgIHRveUVsZW1lbnQxLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcclxuICAgICAgdG95RWxlbWVudDEuc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsIGAke3RoaXMuY291bnR9YCk7XHJcbiAgICAgIHRveUVsZW1lbnQxLnNldEF0dHJpYnV0ZSgnZGF0YS10b3ljb3VudCcsIGAke2RhdGExfWApO1xyXG4gICAgICB0b3lFbGVtZW50MS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgIHRveUVsZW1lbnQxLnN0eWxlLndpZHRoID0gJzM1cHgnO1xyXG4gICAgICB0b3lFbGVtZW50MS5zdHlsZS5oZWlnaHQgPSAnMzVweCc7XHJcbiAgICAgIHRveUVsZW1lbnQxLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgICB0b3lFbGVtZW50MS5zdHlsZS5iYWNrZ3JvdW5kID0gYHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi9hc3NldHMvaW1hZ2VzL3RveXMvJHtkYXRhMX0ucG5nKWA7XHJcbiAgICAgIChldmVudC50YXJnZXQgYXMgYW55KS5hcHBlbmRDaGlsZCh0b3lFbGVtZW50MSk7XHJcbiAgICAgIG1vdmVBdChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZLCB0b3lFbGVtZW50MSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb3ZlQXQocGFnZVg6IGFueSwgcGFnZVk6IGFueSwgZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gcGFnZVggLSBlbGVtZW50Lm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gcGFnZVkgLSBlbGVtZW50Lm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhZ092ZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMubGVhdmVGbGFnID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHN0YXJ0RHJhZyhldmVudDogeyB0YXJnZXQ6IGFueTsgfSkge1xyXG4gICAgY29uc3QgZHJhZ0VsZW1lbnQxID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLmNsb3Nlc3QoJy50b3ktaWNvbicpO1xyXG4gICAgY29uc3QgZHJhZ0VsZW1lbnQyID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLmNsb3Nlc3QoJy50b3ktb24tdHJlZScpO1xyXG5cclxuICAgIGlmIChkcmFnRWxlbWVudDEpIHtcclxuICAgICAgKGV2ZW50IGFzIGFueSkuZGF0YVRyYW5zZmVyLnNldERhdGEoJ2VsZW1EcmFnMScsIGAke2RyYWdFbGVtZW50MS5kYXRhc2V0Lml0ZW10b3l9YCk7XHJcbiAgICAgIGRyYWdFbGVtZW50MS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRyYWdFbGVtZW50Mikge1xyXG4gICAgICAoZXZlbnQgYXMgYW55KS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnZWxlbURyYWcyJywgYCR7ZHJhZ0VsZW1lbnQyLmRhdGFzZXQuYWN0aXZlfWApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGVuZERyYWcoZXZlbnQ6IERyYWdFdmVudCkge1xyXG4gICAgY29uc3QgZHJhZ0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLmNsb3Nlc3QoJy50b3ktb24tdHJlZScpO1xyXG4gICAgY29uc3QgdXBJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaXRlbWNvdW50PVwiJHtkcmFnRWxlbWVudC5kYXRhc2V0LnRveWNvdW50fVwiXWApO1xyXG4gICAgY29uc3QgZWxlbUNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaXRlbXRveT1cIiR7ZHJhZ0VsZW1lbnQuZGF0YXNldC50b3ljb3VudH1cIl1gKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xyXG4gICAgY29uc29sZS5sb2coZWxlbUNvdW50KTtcclxuICAgIGlmIChkcmFnRWxlbWVudCkge1xyXG4gICAgICBpZiAoIXRoaXMubGVhdmVGbGFnKSB7XHJcbiAgICAgICAgZHJhZ0VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdXBJdGVtLnRleHRDb250ZW50ID0gYCR7K3VwSXRlbS50ZXh0Q29udGVudCArIDF9YDtcclxuICAgICAgICBlbGVtQ291bnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEFsbERhdGFUb3lzKCkge1xyXG4gICAgdGhpcy5hbGxEYXRhVG95cyA9IGF3YWl0IHRveXMuZ2V0RGF0YSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuYWxsRGF0YVRveXM7XHJcbiAgfVxyXG5cclxuICBhc3luYyBkcmF3Q3VycmVudGRhdGFUb3lzKCkge1xyXG4gICAgY29uc3QgYWxsRGF0YSA9IGF3YWl0IHRveXMuZ2V0RGF0YSgpO1xyXG4gICAgY29uc3QgY3VycmVudERhdGE6IERhdGFbXSA9IFtdO1xyXG4gICAgY29uc3QgYWN0aXZlVG95cyA9IHRoaXMuZ2V0QWN0aXZlRGF0YSgpO1xyXG5cclxuICAgIGFsbERhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGFjdGl2ZVRveXMuaW5jbHVkZXMoYWxsRGF0YVtpbmRleF0ubnVtKSkge1xyXG4gICAgICAgIGN1cnJlbnREYXRhLnB1c2goZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBhY3RpdmVUb3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG95LWZvci10cmVlJyk7XHJcblxyXG4gICAgaWYgKGFjdGl2ZVRveSkge1xyXG4gICAgICBhY3RpdmVUb3kuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYWN0aXZlRGF0YTogRGF0YVtdO1xyXG5cclxuICAgIGlmIChjdXJyZW50RGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5hbGxEYXRhVG95cyk7XHJcbiAgICAgIGFjdGl2ZURhdGEgPSB0aGlzLmFsbERhdGFUb3lzLnNsaWNlKDAsIDIwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFjdGl2ZURhdGEgPSBjdXJyZW50RGF0YTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRveXNUcmVlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRveXMtdHJlZS1jb250YWluZXInKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGl2ZURhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdG95ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRveS5jbGFzc0xpc3QuYWRkKCd0b3ktZm9yLXRyZWUnKTtcclxuICAgICAgdG95LnNldEF0dHJpYnV0ZSgnZGF0YS10cmVlVG95JywgYCR7YWN0aXZlRGF0YVtpXS5uYW1lfWApO1xyXG4gICAgICB0b3kuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3ktaWNvbiBpY29uJHtpfVwiIGRyYWdnYWJsZT1cInRydWVcIiBkYXRhLWl0ZW1Ub3k9XCIke2FjdGl2ZURhdGFbaV0ubnVtfVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3ktY291bnRcIiBkYXRhLWl0ZW1jb3VudD1cIiR7YWN0aXZlRGF0YVtpXS5udW19XCI+JHthY3RpdmVEYXRhW2ldLmNvdW50fTwvZGl2PlxyXG4gICAgICBgXHJcblxyXG4gICAgICB0b3lzVHJlZUNvbnRhaW5lci5hcHBlbmQodG95KTtcclxuICAgICAgY29uc3QgaWNvblRveSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pY29uJHtpfWApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgICAgaWNvblRveS5zdHlsZS5iYWNrZ3JvdW5kID0gYHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi9hc3NldHMvaW1hZ2VzL3RveXMvJHthY3RpdmVEYXRhW2ldLm51bX0ucG5nKWA7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0QWN0aXZlRGF0YSgpIHtcclxuICAgIGNvbnN0IHRveXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyLWNvbnRlbnQnKTtcclxuICAgIGNvbnN0IGFjdGl2ZVRveXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgdG95cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10b3knKSkge1xyXG4gICAgICAgIGFjdGl2ZVRveXMucHVzaChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zZXQnKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhY3RpdmVUb3lzO1xyXG4gIH1cclxuXHJcbiAgYWRkQmFja2dyb3VuZCgpIHtcclxuICAgIGNvbnN0IGJnQ29udGFpbmVycyA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5jb250ZWluZXItY29udGVudC1iZycpO1xyXG4gICAgY29uc3QgY3VycmVudEJnID0gKGJnQ29udGFpbmVycyBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KT8uZGF0YXNldC5iZztcclxuXHJcbiAgICBpZiAoY3VycmVudEJnKSB7XHJcbiAgICAgIHRoaXMuYWRkQWN0aXZlSXRlbShjdXJyZW50QmcsIGJnQ29udGFpbmVycywgJ2NocmlzdG1hcy1iZy1jdXJyZW50JywgJ2NvbnRlaW5lci1jb250ZW50LWJnJywgJ2NvbnRlaW5lci1jb250ZW50LWJnX19hY3RpdmUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFRyZWUoKSB7XHJcbiAgICBjb25zdCB0cmVlQ29udGFpbmVycyA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5jb250ZWluZXItaXRlbScpO1xyXG4gICAgY29uc3QgY3VycmVudFRyZWUgPSAodHJlZUNvbnRhaW5lcnMgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCk/LmRhdGFzZXQudHJlZTtcclxuXHJcbiAgICBpZiAoY3VycmVudFRyZWUpIHtcclxuICAgICAgdGhpcy5hZGRBY3RpdmVJdGVtKGN1cnJlbnRUcmVlLCB0cmVlQ29udGFpbmVycywgJ2NocmlzdG1hcy10cmVlLWNhcnJlbnQnLCAnY29udGVpbmVyLWl0ZW0nLCAnY29udGVpbmVyLWNvbnRlbnRfX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkQWN0aXZlSXRlbShkYXRhOiBzdHJpbmcsIGNsYXNzTmFtZTogRWxlbWVudCwgY3VycmVudEl0ZW06IHN0cmluZywgYWxsSXRlbXM6IHN0cmluZywgYWN0aXZlSXRlbTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjdXJyZW50RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2N1cnJlbnRJdGVtfWApO1xyXG4gICAgY29uc3QgYWxsRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2FsbEl0ZW1zfWApO1xyXG5cclxuICAgIGFsbEVsZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke2FjdGl2ZUl0ZW19YCk7ICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGFzc05hbWUuY2xhc3NMaXN0LmFkZChgJHthY3RpdmVJdGVtfWApO1xyXG5cclxuICAgIGlmIChjdXJyZW50RWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2NocmlzdG1hcy10cmVlLWNhcnJlbnQnKSkge1xyXG4gICAgICBjdXJyZW50RWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuL2Fzc2V0cy9pbWFnZXMvdHJlZS8ke2RhdGF9LnBuZ2ApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoY3VycmVudEVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaHJpc3RtYXMtYmctY3VycmVudCcpKSB7XHJcbiAgICAgIChjdXJyZW50RWxlbSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kID0gYGNlbnRlciAvIGNvdmVyIHVybCguL2Fzc2V0cy9pbWFnZXMvYmcvJHtkYXRhfS5qcGcpYDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdhcmxhbmRCdG5PbigpIHtcclxuICAgIGNvbnN0IGdhcmxhbmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoIGlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGdhcmxhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FybGFuZCcpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCByZWRHYXJsYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmxhbmQtMicpO1xyXG5cclxuICAgIGlmIChnYXJsYW5kQnRuLmNoZWNrZWQpIHtcclxuICAgICAgZ2FybGFuZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgcmVkR2FybGFuZC5jbGFzc0xpc3QuYWRkKCdnYXJsYW5kLWl0ZW1fX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2FybGFuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLmNsZWFuR2FybGFuZEFjdGl2ZUNsYXNzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnYXJsYW5kT24oKSB7XHJcbiAgICBjb25zdCBnYXJsYW5kcyA9IChldmVudCBhcyBhbnkpLnRhcmdldC5jbG9zZXN0KCcuZ2FybGFuZC1jb250YWluZXItaXRlbScpO1xyXG4gICAgY29uc3QgZ2FybGFuZEl0ZW0gPSBnYXJsYW5kcy5kYXRhc2V0LmdhcmxhbmQ7XHJcbiAgICBjb25zb2xlLmxvZyhnYXJsYW5kSXRlbSk7XHJcblxyXG4gICAgaWYgKGdhcmxhbmRzKSB7XHJcbiAgICAgIHRoaXMuY2xlYW5HYXJsYW5kQWN0aXZlQ2xhc3MoKTtcclxuICAgICAgc3dpdGNoIChnYXJsYW5kSXRlbSkge1xyXG4gICAgICAgIGNhc2UgJ3JlZCc6XHJcbiAgICAgICAgICB0aGlzLmdhcmxhbmQuYWRkQ29sb3JHYXJsYW5kKCdyZWRfMScsICdyZWRfMicpO1xyXG4gICAgICAgICAgZ2FybGFuZHMuY2xhc3NMaXN0LnRvZ2dsZSgnZ2FybGFuZC1pdGVtX19hY3RpdmUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdibHVlJzpcclxuICAgICAgICAgIHRoaXMuZ2FybGFuZC5hZGRDb2xvckdhcmxhbmQoJ2JsdWVfMScsICdibHVlXzInKTtcclxuICAgICAgICAgIGdhcmxhbmRzLmNsYXNzTGlzdC50b2dnbGUoJ2dhcmxhbmQtaXRlbV9fYWN0aXZlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneWVsbG93JzpcclxuICAgICAgICAgIHRoaXMuZ2FybGFuZC5hZGRDb2xvckdhcmxhbmQoJ3llbGxvd18xJywgJ3llbGxvd18yJyk7XHJcbiAgICAgICAgICBnYXJsYW5kcy5jbGFzc0xpc3QudG9nZ2xlKCdnYXJsYW5kLWl0ZW1fX2FjdGl2ZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2dyZWVuJzpcclxuICAgICAgICAgIHRoaXMuZ2FybGFuZC5hZGRDb2xvckdhcmxhbmQoJ2dyZWVuXzEnLCAnZ3JlZW5fMicpO1xyXG4gICAgICAgICAgZ2FybGFuZHMuY2xhc3NMaXN0LnRvZ2dsZSgnZ2FybGFuZC1pdGVtX19hY3RpdmUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhbGwnOlxyXG4gICAgICAgICAgdGhpcy5nYXJsYW5kLmFkZEFsbENvbG9yR2FybGFuZCgnZ3JlZW4nLCAneWVsbG93JywgJ3JlZCcsICdibHVlJyk7XHJcbiAgICAgICAgICBnYXJsYW5kcy5jbGFzc0xpc3QudG9nZ2xlKCdnYXJsYW5kLWl0ZW1fX2FjdGl2ZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhbkdhcmxhbmRBY3RpdmVDbGFzcygpIHtcclxuICAgIGNvbnN0IGdhcmxhbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhcmxhbmQtY29udGFpbmVyLWl0ZW0nKTtcclxuXHJcbiAgICBnYXJsYW5kcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dhcmxhbmQtaXRlbV9fYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5Ub3lzUGFnZXMoKSB7XHJcbiAgICB0aGlzLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIG9wZW5DaHJpc3RtYXNUcmVlUGFnZSgpIHtcclxuICAgIHRoaXMuc2hvdygpO1xyXG4gICAgdGhpcy5nZXRBbGxEYXRhVG95cygpO1xyXG4gICAgdGhpcy5kcmF3Q3VycmVudGRhdGFUb3lzKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuU3RhcnRQYWdlKCkge1xyXG4gICAgdGhpcy5oaWRlKCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgVG95cyB9IGZyb20gJy4vdG95cy5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlVG95cyBleHRlbmRzIFRveXMge1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgYWN0aXZlVG95czogc3RyaW5nW107XHJcbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xyXG4gICAgc3VwZXIoaWQpO1xyXG4gICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICB0aGlzLmFjdGl2ZVRveXMgPSBbXTtcclxuICB9XHJcblxyXG4gIGluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzdGFydDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuXHJcbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYnV0dG9uSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRGYXZvcml0ZVRveXMuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBhZGRGYXZvcml0ZVRveXMoKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuY29udGFpbmVyLWNvbnRlbnQnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSAodGFyZ2V0IGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQpPy5kYXRhc2V0LnNldDtcclxuICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgaWYgKHRoaXMuY291bnQgPT09IDIwICYmICEodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRveScpKSkge1xyXG4gICAgICAgIGFsZXJ0KFwi0JjQt9Cy0LjQvdC40YLQtSwg0LLRgdC1INGB0LvQvtGC0Ysg0LfQsNC/0L7Qu9C90LXQvdGLXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUtdG95Jyk7XHJcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10b3knKSkge1xyXG4gICAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVUb3lzLnB1c2godGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zZXQnKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY291bnQtLTtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hY3RpdmVUb3lzLmluZGV4T2YoKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2V0JykpKTtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlVG95cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0IGNvdW50VG95czogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQtdG95cycpO1xyXG4gICAgY291bnRUb3lzLnRleHRDb250ZW50ID0gYCR7dGhpcy5jb3VudH1gO1xyXG4gICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0RGF0YUxvY2FsU3RvcmFnZSgnZGF0YUZhdm9yaXRlJywgY3VycmVudFRhcmdldCk7XHJcbiAgICB0aGlzLnNldGZhdm9yaXRlQ291bnRUb0xvY2FsU3RvcmFnZSgnZGF0YUNvdW50JywgdGhpcy5jb3VudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRmYXZvcml0ZUNvdW50VG9Mb2NhbFN0b3JhZ2UoaW5kZXg6IHN0cmluZywgY291bnQ6IG51bWJlcikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaW5kZXgsIEpTT04uc3RyaW5naWZ5KGNvdW50KSk7XHJcbiAgfVxyXG5cclxuICBnZXRGYXZvcml0ZUNvdW50VG9MYWNhbFN0YW9yYWdlKGluZGV4OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5kZXgpO1xyXG4gICAgY29uc3QgY3VycmVudENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50LXRveXMnKTtcclxuICAgIGN1cnJlbnRDb3VudC50ZXh0Q29udGVudCA9IGAke2NvdW50fWA7XHJcbiAgICB0aGlzLmNvdW50ID0gK2NvdW50O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uSGFuZGxlcigpOiB2b2lkIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YUNvdW50JykpIHtcclxuICAgICAgdGhpcy5nZXRGYXZvcml0ZUNvdW50VG9MYWNhbFN0YW9yYWdlKCdkYXRhQ291bnQnLCAnY291bnQtdG95cycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkQ3VycmVudEZhdm90aXRlVG95cygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRveXNDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lci1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBjb3VudFRveXM6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50LXRveXMnKTtcclxuICAgIFxyXG5cclxuICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgdG95c0NvbnRhaW5lcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlVG95cy5pbmNsdWRlcyhlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zZXQnKSkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10b3knKTtcclxuICAgICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvdW50VG95cy50ZXh0Q29udGVudCA9IGAke3RoaXMuY291bnR9YDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdhcmxhbmQge1xyXG5cclxuICBhZGRDb2xvckdhcmxhbmQoY2xhc3MxOiBzdHJpbmcsIGNsYXNzMjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBnYXJsYW5kSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FybGFuZC1pdGVtJyk7XHJcblxyXG4gICAgZ2FybGFuZEl0ZW1zLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIChlbGVtZW50IGFzIGFueSkuY2xhc3NMaXN0ID0gJ2dhcmxhbmQtaXRlbSc7XHJcbiAgICAgIGlmIChpbmRleCAlIDIgPT09IDEpIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3MxfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzczJ9YCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkQWxsQ29sb3JHYXJsYW5kKGNsYXNzMTogc3RyaW5nLCBjbGFzczI6IHN0cmluZywgY2xhc3MzOiBzdHJpbmcsIGNsYXNzNDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBnYXJsYW5kSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FybGFuZC1pdGVtJyk7XHJcblxyXG4gICAgZ2FybGFuZEl0ZW1zLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIChlbGVtZW50IGFzIGFueSkuY2xhc3NMaXN0ID0gJ2dhcmxhbmQtaXRlbSc7XHJcbiAgICAgIGlmIChpbmRleCAlIDIgPT09IDEpIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3MxfWApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleCAlIDMgPT09IDEpICB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzMn1gKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXggJSA0ID09PSAxICYmIGluZGV4ID4gMikge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzczN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzNH1gKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZSB7XHJcblxyXG4gIHNldERhdGFMb2NhbFN0b3JhZ2UoaW5kZXg6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmRleCkpO1xyXG4gICAgaWYgKGN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICBpZiAoY3VycmVudFZhbHVlLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFZhbHVlLmluZGV4T2YodmFsdWUpO1xyXG4gICAgICAgIGN1cnJlbnRWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnRWYWx1ZS5wdXNoKHZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaW5kZXgsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRWYWx1ZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaW5kZXgsIEpTT04uc3RyaW5naWZ5KFt2YWx1ZV0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFJhbmdlVG9Mb2NhbFN0b3JhZ2UoaW5kZXg6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5kZXgpKTtcclxuICAgIGNvbnN0IGN1cnJlbnRSYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7Y2xhc3NOYW1lfWApO1xyXG4gICAgaWYgKGN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICBsZXQgY3VycmVudENvcHllcyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gK2N1cnJlbnRSYW5nZVswXS5hcmlhVmFsdWVOb3c7IGkgPD0gK2N1cnJlbnRSYW5nZVsxXS5hcmlhVmFsdWVOb3c7IGkrKykge1xyXG4gICAgICAgIGN1cnJlbnRDb3B5ZXMucHVzaChTdHJpbmcoaSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGluZGV4LCBKU09OLnN0cmluZ2lmeShjdXJyZW50Q29weWVzKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY3VycmVudENvcHllcyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gK2N1cnJlbnRSYW5nZVswXS5hcmlhVmFsdWVOb3c7IGkgPD0gK2N1cnJlbnRSYW5nZVsxXS5hcmlhVmFsdWVOb3c7IGkrKykge1xyXG4gICAgICAgIGN1cnJlbnRDb3B5ZXMucHVzaChTdHJpbmcoaSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGluZGV4LCBKU09OLnN0cmluZ2lmeShjdXJyZW50Q29weWVzKSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YUxvY2FsU3RvcmFnZShpbmRleDogc3RyaW5nLCBzZXQ6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcsIGFjdGl2ZUNsYXNzOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7Y2xhc3NOYW1lfWApO1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZGV4KTtcclxuICAgIHZhbHVlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudFZhbHVlcy5pbmNsdWRlcyhlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS0ke3NldH1gKSkpIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYCR7YWN0aXZlQ2xhc3N9YCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGdldENoZWNrZWRMb2NhbFN0b3JhZ2UoaW5kZXg6IHN0cmluZywgc2V0OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzaXplSXRlbTogTm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7Y2xhc3NOYW1lfWApO1xyXG4gICAgY29uc3QgY3VycmVudENoZWNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7aW5kZXh9YCk7XHJcblxyXG4gICAgc2l6ZUl0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnRDaGVjay5pbmNsdWRlcyhlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS0ke3NldH1gKSkpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtzZXR9YCkgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJjb25zdCBzbm93bWF4ID0gNDA7XHJcbmNvbnN0IHNub3djb2xvciA9IG5ldyBBcnJheSgnI2I5ZGZmNScsICcjN2ZjN2ZmJywgJyM3ZmIxZmYnLCAnIzdmYzdmZicsICcjYjlkZmY1Jyk7XHJcbmNvbnN0IHNub3d0eXBlID0gbmV3IEFycmF5KCdUaW1lcycpO1xyXG5jb25zdCBzbm93bGV0dGVyID0gJyYjMTAwNTI7JztcclxuY29uc3Qgc2lua3NwZWVkID0gMC40O1xyXG5jb25zdCBzbm93bWF4c2l6ZSA9IDIwO1xyXG5jb25zdCBzbm93bWluc2l6ZSA9IDU7XHJcbmNvbnN0IHNub3dpbmd6b25lID0gMztcclxuXHJcbi8vIGNvbnN0IHRyZWVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyZWUtcGFnZScpO1xyXG5jb25zdCB0b3lzUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3lzLXBhZ2UnKTtcclxuY29uc3Qgc25vd0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93Jyk7XHJcbmNvbnN0IGNocmlzdG1hc0JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNocmlzdG1hcy1iZy1jdXJyZW50Jyk7XHJcbmxldCBzbm93RmxhZyA9IGZhbHNlO1xyXG5sZXQgaW5pdCA9IHRydWU7XHJcblxyXG5jb25zdCBzbm93OiBhbnlbXSA9IG5ldyBBcnJheSgpO1xyXG5sZXQgbWFyZ2luYm90dG9tOiBudW1iZXI7XHJcbmxldCBtYXJnaW5yaWdodDogbnVtYmVyO1xyXG5sZXQgdGltZXI6IGFueTtcclxubGV0IGlfc25vdyA9IDA7XHJcbmxldCB4X212ID0gbmV3IEFycmF5KCk7XHJcbmxldCBjcmRzID0gbmV3IEFycmF5KCk7XHJcbmxldCBsZnRyZ2h0ID0gbmV3IEFycmF5KCk7XHJcbmNvbnN0IHJhbmRvbW1ha2VyICA9IChyYW5nZTogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgcmFuZDogbnVtYmVyID0gTWF0aC5mbG9vcihyYW5nZSAqIE1hdGgucmFuZG9tKCkpO1xyXG4gIHJldHVybiByYW5kO1xyXG59XHJcbmNvbnN0IGluaXRzbm93ID0gKCkgPT4ge1xyXG5cclxuICBpZiAoaW5pdCkge1xyXG4gICAgc25vd0ZsYWcgPSB0cnVlO1xyXG4gICAgaW5pdCA9IGZhbHNlO1xyXG4gICAgbWFyZ2luYm90dG9tID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArIDUwO1xyXG4gICAgbWFyZ2lucmlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIC0gMTU7XHJcbiAgICBsZXQgc25vd3NpemVyYW5nZSA9IHNub3dtYXhzaXplIC0gc25vd21pbnNpemU7XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDw9IHNub3dtYXg7IGkrKykge1xyXG4gICAgICBjcmRzW2ldID0gMDtcclxuICAgICAgbGZ0cmdodFtpXSA9IE1hdGgucmFuZG9tKCkgKiAxNTtcclxuICAgICAgeF9tdltpXSA9IDAuMDMgKyBNYXRoLnJhbmRvbSgpIC8gMTA7XHJcbiAgICAgIHNub3dbaV0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncycgKyBpKTtcclxuICAgICAgc25vd1tpXS5jbGFzc0xpc3QuYWRkKCdzbm93LWl0ZW0nKTtcclxuICAgICAgc25vd1tpXS5zdHlsZS5mb250RmFtaWx5ID0gc25vd3R5cGVbcmFuZG9tbWFrZXIoc25vd3R5cGUubGVuZ3RoKV07XHJcbiAgICAgIHNub3dbaV0uc2l6ZSA9IHJhbmRvbW1ha2VyKHNub3dzaXplcmFuZ2UpICsgc25vd21pbnNpemU7XHJcbiAgICAgIHNub3dbaV0uc3R5bGUuZm9udFNpemUgPSBzbm93W2ldLnNpemUgKyAncHgnO1xyXG4gICAgICBzbm93W2ldLnN0eWxlLmNvbG9yID0gc25vd2NvbG9yW3JhbmRvbW1ha2VyKHNub3djb2xvci5sZW5ndGgpXTtcclxuICAgICAgc25vd1tpXS5zdHlsZS56SW5kZXggPSAnMTAwMCc7XHJcbiAgICAgIHNub3dbaV0uc2luayA9IChzaW5rc3BlZWQgKiBzbm93W2ldLnNpemUpIC8gNTtcclxuICAgICAgc25vd1tpXS5wb3N4ID0gcmFuZG9tbWFrZXIobWFyZ2lucmlnaHQgLyAyIC0gc25vd1tpXS5zaXplKSArIG1hcmdpbnJpZ2h0IC8gNDtcclxuICAgICAgc25vd1tpXS5wb3N5ID0gcmFuZG9tbWFrZXIoMiAqIG1hcmdpbmJvdHRvbSAtIG1hcmdpbmJvdHRvbSAtIDIgKiBzbm93W2ldLnNpemUpO1xyXG4gICAgICBzbm93W2ldLnN0eWxlLmxlZnQgPSBzbm93W2ldLnBvc3ggKyAncHgnO1xyXG4gICAgICBzbm93W2ldLnN0eWxlLnRvcCA9IHNub3dbaV0ucG9zeSArICdweCc7XHJcbiAgICAgIGNocmlzdG1hc0JnLmFwcGVuZChzbm93W2ldKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZXNub3coKTtcclxufVxyXG5cclxuY29uc3QgbW92ZXNub3cgPSAoKSA9PiB7XHJcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8PSBzbm93bWF4OyBpKyspIHtcclxuICAgIGNyZHNbaV0gKz0geF9tdltpXTtcclxuICAgIHNub3dbaV0ucG9zeSArPSBzbm93W2ldLnNpbms7XHJcbiAgICBzbm93W2ldLnN0eWxlLmxlZnQgPSBzbm93W2ldLnBvc3ggKyBsZnRyZ2h0W2ldICogTWF0aC5zaW4oY3Jkc1tpXSkgKyAncHgnO1xyXG4gICAgc25vd1tpXS5zdHlsZS50b3AgPSBzbm93W2ldLnBvc3kgKyAncHgnO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgc25vd1tpXS5wb3N5ID49IG1hcmdpbmJvdHRvbSAtIDIgKiBzbm93W2ldLnNpemUgfHxcclxuICAgICAgcGFyc2VJbnQoc25vd1tpXS5zdHlsZS5sZWZ0KSA+IG1hcmdpbnJpZ2h0IC0gMyAqIGxmdHJnaHRbaV1cclxuICAgICkge1xyXG4gICAgICBzbm93W2ldLnBvc3ggPSByYW5kb21tYWtlcihtYXJnaW5yaWdodCAvIDIgLSBzbm93W2ldLnNpemUpICsgbWFyZ2lucmlnaHQgLyA0O1xyXG4gICAgICBzbm93W2ldLnBvc3kgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgbW92ZXNub3coKTtcclxuICB9LCA1MCk7XHJcbn1cclxuXHJcbmZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPD0gc25vd21heDsgaSsrKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAnYmVmb3JlZW5kJyxcclxuICAgIFwiPHNwYW4gaWQ9J3NcIiArIGkgKyBcIicgc3R5bGU9J3VzZXItc2VsZWN0Om5vbmU7cG9zaXRpb246Zml4ZWQ7dG9wOi1cIiArIHNub3dtYXhzaXplICsgXCInPlwiICsgc25vd2xldHRlciArICc8L3NwYW4+J1xyXG4gICk7XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBpbml0c25vdztcclxuXHJcbnNub3dCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBzbm93SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc25vdy1pdGVtJyk7XHJcbiAgT25PZmZTbm93KHNub3dJdGVtcyk7XHJcbn0pXHJcblxyXG5jb25zdCBPbk9mZlNub3cgPSAoaXRlbXM6IE5vZGVMaXN0T2Y8RWxlbWVudD4pID0+IHtcclxuICBpZiAoc25vd0ZsYWcpIHtcclxuICAgIHNub3dGbGFnID0gZmFsc2U7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgaXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgKGVsZW1lbnQgYXMgYW55KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNub3dGbGFnID0gdHJ1ZTtcclxuICAgIGluaXRzbm93KCk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAoZWxlbWVudCBhcyBhbnkpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyB0cmVlUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICBjb25zdCBzbm93SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc25vdy1pdGVtJyk7XHJcbi8vICAgT25PZmZTbm93KHNub3dJdGVtcyk7XHJcbi8vIH0pXHJcblxyXG50b3lzUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCBzbm93SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc25vdy1pdGVtJyk7XHJcbiAgc25vd0ZsYWcgPSBmYWxzZTtcclxuICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gIHNub3dJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgKGVsZW1lbnQgYXMgYW55KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0pO1xyXG59KVxyXG4vLyB3aW5kb3cub25sb2FkID0gaW5pdHNub3c7XHJcbiIsImV4cG9ydCBjbGFzcyBTb3J0VG95cyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBzb3J0VG9OYW1lKGRhdGE6IGFueVtdKSB7XHJcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcclxuICB9XHJcblxyXG4gIHNvcnRUb05hbWVSZXZlcnNlKGRhdGE6IGFueVtdKSB7XHJcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiBiLm5hbWUubG9jYWxlQ29tcGFyZShhLm5hbWUpKTtcclxuICB9XHJcblxyXG4gIHNvcnRUb0luY3JlYXNlKGRhdGE6IGFueVtdKSB7XHJcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiAoYS55ZWFyIC0gYi55ZWFyKSk7XHJcbiAgfVxyXG5cclxuICBzb3J0VG9JbmNyZWFzZVJldmVyc2UoZGF0YTogYW55W10pIHtcclxuICAgIHJldHVybiBkYXRhLnNvcnQoKGEsIGIpID0+IChiLnllYXIgLSBhLnllYXIpKTtcclxuICB9XHJcblxyXG4gIHNvcnRBTEwoZGF0YTogYW55W10pIHtcclxuICAgIHJldHVybiBkYXRhLnNvcnQoKGEsIGIpID0+IChhLm51bSAtIGIubnVtKSk7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50QWN0aXZlRWxlbWVudHMoKSB7XHJcbiAgICBjb25zdCBkYXRhQWN0aXZlSXRlbTogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBjb25zdCBtYXNzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWljb24nKTtcclxuICAgIGNvbnN0IGNvdW50Q29weWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3JhbmdlIC5ub1VpLWhhbmRsZScpO1xyXG4gICAgY29uc3QgeWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNyYW5nZS15ZWFyIC5ub1VpLWhhbmRsZScpO1xyXG4gICAgY29uc3QgY29sb3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sb3ItaXRlbScpO1xyXG4gICAgY29uc3Qgc2l6ZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2l6ZS1pdGVtJyk7XHJcbiAgICBjb25zdCBmYXZvcml0ZVRveXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGUtaXRlbScpO1xyXG5cclxuICAgIG1hc3NGb3JtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1pY29uX19hY3RpdmUnKSkge1xyXG4gICAgICAgIGRhdGFBY3RpdmVJdGVtLnB1c2goZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybScpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9ICtjb3VudENvcHllc1swXS5hcmlhVmFsdWVOb3c7IGkgPD0gK2NvdW50Q29weWVzWzFdLmFyaWFWYWx1ZU5vdzsgaSsrKSB7XHJcbiAgICAgIGRhdGFBY3RpdmVJdGVtLnB1c2goU3RyaW5nKGkpKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gK3llYXJbMF0uYXJpYVZhbHVlTm93OyBpIDw9ICt5ZWFyWzFdLmFyaWFWYWx1ZU5vdzsgaSsrKSB7XHJcbiAgICAgIGRhdGFBY3RpdmVJdGVtLnB1c2goU3RyaW5nKGkpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xvckNvbnRhaW5lci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbG9yLWl0ZW1fX2FjdGl2ZScpKSB7XHJcbiAgICAgICAgZGF0YUFjdGl2ZUl0ZW0ucHVzaChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2l6ZUl0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKChlbGVtZW50IGFzIGFueSkuY2hlY2tlZCkge1xyXG4gICAgICAgIGRhdGFBY3RpdmVJdGVtLnB1c2goZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hlY2snKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICgoZmF2b3JpdGVUb3lzIGFzIGFueSkuY2hlY2tlZCkge1xyXG4gICAgICAoZGF0YUFjdGl2ZUl0ZW0gYXMgYW55KS5wdXNoKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgKGRhdGFBY3RpdmVJdGVtIGFzIGFueSkucHVzaCh0cnVlKTtcclxuICAgICAgKGRhdGFBY3RpdmVJdGVtIGFzIGFueSkucHVzaChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGFBY3RpdmVJdGVtO1xyXG4gIH1cclxufSBcclxuIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi4vYXBwL2FwcCdcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFydEdhbWUgZXh0ZW5kcyBBcHAge1xyXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGlkKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBjb25zdCBzdGFydDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICAgIGNvbnN0IHRveXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG95cy1wYWdlJyk7XHJcbiAgICBjb25zdCBzdGFydFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtcGFnZScpO1xyXG4gICAgY29uc3QgdHJlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmVlLXBhZ2UnKTtcclxuXHJcbiAgICB0cmVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuQ2hyaXN0bWFzVHJlZVBhZ2UuYmluZCh0aGlzKSk7XHJcbiAgICB0b3lzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnV0dG9uSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnV0dG9uSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIHN0YXJ0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlblN0YXJ0UGFnZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIG9wZW5TdGFydFBhZ2UoKSB7XHJcbiAgICB0aGlzLnNob3coKTtcclxuICB9XHJcblxyXG4gIG9wZW5DaHJpc3RtYXNUcmVlUGFnZSgpIHtcclxuICAgIHRoaXMuaGlkZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1dHRvbkhhbmRsZXIoKSB7XHJcbiAgdGhpcy5oaWRlKCk7XHJcbiAgY29uc3Qgc2VhcmNoOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuICBzZWFyY2guZm9jdXMoKTtcclxufSIsImltcG9ydCB7IEFwcCB9IGZyb20gJy4uL2FwcC9hcHAnO1xyXG5pbXBvcnQgeyBTb3J0VG95cyB9IGZyb20gJy4vc29ydC10b3lzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyByYW5nZSB9IGZyb20gJy4vdWktc2xpZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHJhbmdlWWVhciB9IGZyb20gJy4vdWktc2xpZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGZhdm9yaXRlIH0gZnJvbSAnLi4nO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kdWxlcy9pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRveXMgZXh0ZW5kcyBBcHAge1xyXG4gIG5ld0RhdGE6IERhdGFbXTtcclxuICBkYXRhVG95czogRGF0YVtdO1xyXG4gIHNvcnRUb3lzOiBTb3J0VG95cztcclxuICBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZTtcclxuICBjb3VudENvcHk6IGFueTtcclxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihpZCk7XHJcbiAgICB0aGlzLmRhdGFUb3lzO1xyXG4gICAgdGhpcy5uZXdEYXRhO1xyXG4gICAgdGhpcy5zb3J0VG95cyA9IG5ldyBTb3J0VG95cygpO1xyXG4gICAgdGhpcy5sb2NhbFN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgY29uc3Qgc3RhcnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgICBjb25zdCBjaG9vc2VJdGVtOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtaXRlbScpO1xyXG4gICAgY29uc3Qgc2VhcmNoOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuICAgIGNvbnN0IHRyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJlZS1wYWdlJyk7XHJcbiAgICBjb25zdCB0b3lzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RveXMtcGFnZScpO1xyXG4gICAgY29uc3Qgc3RhcnRQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LXBhZ2UnKTtcclxuXHJcbiAgICB0b3lzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuVG95c1BhZ2VzLmJpbmQodGhpcykpO1xyXG4gICAgdHJlZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkNocmlzdG1hc1RyZWVQYWdlLmJpbmQodGhpcykpO1xyXG4gICAgc3RhcnRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuU3RhcnRQYWdlLmJpbmQodGhpcykpO1xyXG4gICAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5hZGRTZWFyY2guYmluZCh0aGlzKSk7XHJcbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYnV0dG9uSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIGNob29zZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZFNvcnRUb3lzLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldFNvcnRUb3lzLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldEZpbHRlckZvcm0uYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkQWN0aXZlQ29sb3IuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYXBwbHlTdWNzc2VzLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFwcGx5UmVzZXRGaWx0ZXJzLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFwcGx5UmVzZXRTZXR0aW5ncy5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRDbGVhblNlYXJjaC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldERhdGEoKSB7XHJcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9ICgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0JvZ2Rhbi1WUy9pbWFnZS1kYXRhL21hc3Rlci9kYXRhLmpzb24nKTtcclxuICAgIGNvbnN0IHJlczogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICB0aGlzLmRhdGFUb3lzID0gZGF0YTtcclxuICAgIHJldHVybiB0aGlzLmRhdGFUb3lzO1xyXG4gIH1cclxuXHJcbiAgZHJhd1RveXMoZGF0YTogYW55ID0gdGhpcy5kYXRhVG95cykge1xyXG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uLWNvbnRhaW5lci13cmFwcGVyJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XHJcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWNvbnRlbnQnKTtcclxuICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRveS0ke2l9YCk7XHJcbiAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXNldCcsIGAke2RhdGFbaV0ubnVtfWApO1xyXG4gICAgICBjb250ZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDQ+JHtkYXRhW2ldLm5hbWV9PC9oND5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi10b3ktY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi10b3kgdG95JHtpfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImRhdGEtdG95XCI+XHJcbiAgICAgICAgICA8bGk+0JrQvtC70LjRh9C10YHRgtCy0L46ICR7ZGF0YVtpXS5jb3VudH08L2xpPlxyXG4gICAgICAgICAgPGxpPtCT0L7QtCDQv9C+0LrRg9C/0LrQuDogJHtkYXRhW2ldLnllYXJ9PC9saT5cclxuICAgICAgICAgIDxsaT7QpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiAke2RhdGFbaV0uc2hhcGV9PC9saT5cclxuICAgICAgICAgIDxsaT7QptCy0LXRgiDQuNCz0YDRg9GI0LrQuDogJHtkYXRhW2ldLmNvbG9yfTwvbGk+XHJcbiAgICAgICAgICA8bGk+0KDQsNC30LzQtdGAINC40LPRgNGD0YjQutC4OiAke2RhdGFbaV0uc2l6ZX08L2xpPlxyXG4gICAgICAgICAgPGxpPtCb0Y7QsdC40LzQsNGPOiAke2RhdGFbaV0ubGlrZX08L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIGBcclxuICAgICAgY29sbGVjdGlvbi5hcHBlbmQoY29udGVudCk7XHJcbiAgICAgIGNvbnN0IGljb25Ub3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG95JHtpfWApIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICAgIGljb25Ub3kuc3R5bGUuYmFja2dyb3VuZCA9IGB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4vYXNzZXRzL2ltYWdlcy90b3lzLyR7ZGF0YVtpXS5udW19LnBuZylgO1xyXG5cclxuICAgICAgZmF2b3JpdGUuYWRkQ3VycmVudEZhdm90aXRlVG95cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkU29ydFRveXMoKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yeTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1jYXRlZ29yeScpO1xyXG4gICAgY2F0ZWdvcnkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U29ydFRveXMoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWNhdGVnb3JpZXMnKTtcclxuICAgIGNvbnN0IHRhcmdldCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5zb3J0LWl0ZW0nKTtcclxuXHJcbiAgICBzd2l0Y2godGFyZ2V0ICYmICh0YXJnZXQgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCkuZGF0YXNldC5zb3J0KSB7XHJcbiAgICAgIGNhc2UgJ9Cf0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjiDQs9C+0LTQsCDQstGL0L/Rg9GB0LrQsCc6XHJcbiAgICAgICAgY3VycmVudENhdGVnb3JpZXMudGV4dENvbnRlbnQgPSAn0J/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOINCz0L7QtNCwINCy0YvQv9GD0YHQutCwJztcclxuICAgICAgICB0aGlzLmFkZFNvcnRUb3lzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRSZXN1bHREYXRhKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ9Cf0L4g0YPQsdGL0LLQsNC90LjRjiDQs9C+0LTQsCDQstGL0L/Rg9GB0LrQsCc6XHJcbiAgICAgICAgY3VycmVudENhdGVnb3JpZXMudGV4dENvbnRlbnQgPSAn0J/QviDRg9Cx0YvQstCw0L3QuNGOINCz0L7QtNCwINCy0YvQv9GD0YHQutCwJztcclxuICAgICAgICB0aGlzLmFkZFNvcnRUb3lzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRSZXN1bHREYXRhKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ9CS0YHQtSDQuNCz0YDRg9GI0LrQuCc6XHJcbiAgICAgICAgY3VycmVudENhdGVnb3JpZXMudGV4dENvbnRlbnQgPSAn0JLRgdC1INC40LPRgNGD0YjQutC4JztcclxuICAgICAgICB0aGlzLmFkZFNvcnRUb3lzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRSZXN1bHREYXRhKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ9Cf0L4g0LjQvNC10L3QuCDQkC3Qryc6XHJcbiAgICAgICAgY3VycmVudENhdGVnb3JpZXMudGV4dENvbnRlbnQgPSAn0J/QviDQuNC80LXQvdC4INCQLdCvJztcclxuICAgICAgICB0aGlzLmFkZFNvcnRUb3lzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRSZXN1bHREYXRhKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ9Cf0L4g0LjQvNC10L3QuCDQry3QkCc6XHJcbiAgICAgICAgY3VycmVudENhdGVnb3JpZXMudGV4dENvbnRlbnQgPSAn0J/QviDQuNC80LXQvdC4INCvLdCQJztcclxuICAgICAgICB0aGlzLmFkZFNvcnRUb3lzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRSZXN1bHREYXRhKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRSZXN1bHREYXRhKCkge1xyXG4gICAgY29uc3QgbWFzc0ZpbHRlciA9IHRoaXMuc29ydFRveXMuZ2V0Q3VycmVudEFjdGl2ZUVsZW1lbnRzKCk7XHJcblxyXG4gICAgY29uc3Qgc3VjY3Nlc3NGaWx0ZXJGb3JtID0gdGhpcy5kYXRhVG95cy5maWx0ZXIoKGVsOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIG1hc3NGaWx0ZXIuaW5jbHVkZXMoZWwuc2hhcGUpICYmXHJcbiAgICAgICAgbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC5jb3VudCkgJiZcclxuICAgICAgICBtYXNzRmlsdGVyLmluY2x1ZGVzKGVsLnllYXIpICYmXHJcbiAgICAgICAgbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC5jb2xvcikgJiZcclxuICAgICAgICBtYXNzRmlsdGVyLmluY2x1ZGVzKGVsLnNpemUpICYmXHJcbiAgICAgICAgbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC5mYXZvcml0ZSk7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuZ2V0UmVzdWx0KHN1Y2NzZXNzRmlsdGVyRm9ybSk7XHJcbiAgfVxyXG5cclxuICBhcHBseVN1Y3NzZXMoKSB7XHJcbiAgICBjb25zdCBmb3JtVGFyZ2V0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnLmZvcm0taWNvbicpO1xyXG4gICAgY29uc3QgY29sb3JUYXJnZXQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuY29sb3ItaXRlbScpO1xyXG4gICAgY29uc3QgY2hlY2tUYXJnZXQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuY2hlY2tlZCcpO1xyXG4gICAgY29uc3QgY3VycmVudENoZWNrID0gKGNoZWNrVGFyZ2V0IGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQpPy5kYXRhc2V0LmNoZWNrO1xyXG5cclxuICAgIGlmIChmb3JtVGFyZ2V0IHx8XHJcbiAgICAgIGNvbG9yVGFyZ2V0IHx8XHJcbiAgICAgIGNoZWNrVGFyZ2V0KSB7XHJcbiAgICAgIGlmIChjdXJyZW50Q2hlY2spIHtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXREYXRhTG9jYWxTdG9yYWdlKCdkYXRhQ2hlY2tlZCcsIGN1cnJlbnRDaGVjayk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hZGRSZXN1bHREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0RmlsdGVyRm9ybSgpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5mb3JtLWljb24nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRGb3JtID0gKHRhcmdldCBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KT8uZGF0YXNldC5mb3JtO1xyXG5cclxuICAgIGlmIChjdXJyZW50Rm9ybSkge1xyXG4gICAgICBzd2l0Y2ggKGN1cnJlbnRGb3JtKSB7XHJcbiAgICAgICAgY2FzZSAn0LrQvtC70L7QutC+0LvRjNGH0LjQuic6XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS1pY29uX19hY3RpdmUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ9GI0LDRgCc6XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS1pY29uX19hY3RpdmUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ9GI0LjRiNC60LAnOlxyXG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm0taWNvbl9fYWN0aXZlJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICfRgdC90LXQttC40L3QutCwJzpcclxuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtLWljb25fX2FjdGl2ZScpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAn0YTQuNCz0YPRgNC60LAnOlxyXG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm0taWNvbl9fYWN0aXZlJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXREYXRhTG9jYWxTdG9yYWdlKCdkYXRhRm9ybScsIGN1cnJlbnRGb3JtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEFjdGl2ZUNvbG9yKCkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnLmNvbG9yLWl0ZW0nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRDb2xvciA9ICh0YXJnZXQgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCk/LmRhdGFzZXQuY29sb3I7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRDb2xvcikge1xyXG4gICAgICBzd2l0Y2ggKGN1cnJlbnRDb2xvcikge1xyXG4gICAgICAgIGNhc2UgXCLQsdC10LvRi9C5XCI6XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY29sb3ItaXRlbV9fYWN0aXZlJyk7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgXCLQttC10LvRgtGL0LlcIjpcclxuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjb2xvci1pdGVtX19hY3RpdmUnKTtcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBcItC60YDQsNGB0L3Ri9C5XCI6XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY29sb3ItaXRlbV9fYWN0aXZlJyk7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgXCLRgdC40L3QuNC5XCI6XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY29sb3ItaXRlbV9fYWN0aXZlJyk7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgXCLQt9C10LvRkdC90YvQuVwiOlxyXG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NvbG9yLWl0ZW1fX2FjdGl2ZScpO1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXREYXRhTG9jYWxTdG9yYWdlKCdkYXRhQ29sb3InLCBjdXJyZW50Q29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UmVzdWx0KGFyZzogYW55W10pIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG5cclxuICAgIGlmIChhcmcubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZV9hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbWVzc2FnZV9hY3RpdmUnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHNvcnREYXRhO1xyXG4gICAgY29uc3QgY3VycmVudENhdGVnb3JpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1jYXRlZ29yaWVzJyk7XHJcblxyXG4gICAgc3dpdGNoIChjdXJyZW50Q2F0ZWdvcmllcy50ZXh0Q29udGVudCkge1xyXG4gICAgICBjYXNlICfQn9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y4g0LPQvtC00LAg0LLRi9C/0YPRgdC60LAnOlxyXG4gICAgICAgIHNvcnREYXRhID0gdGhpcy5zb3J0VG95cy5zb3J0VG9JbmNyZWFzZShhcmcpO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ9Cf0L4g0YPQsdGL0LLQsNC90LjRjiDQs9C+0LTQsCDQstGL0L/Rg9GB0LrQsCc6XHJcbiAgICAgICAgc29ydERhdGEgPSB0aGlzLnNvcnRUb3lzLnNvcnRUb0luY3JlYXNlUmV2ZXJzZShhcmcpO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ9CS0YHQtSDQuNCz0YDRg9GI0LrQuCc6XHJcbiAgICAgICAgc29ydERhdGEgPSB0aGlzLnNvcnRUb3lzLnNvcnRBTEwoYXJnKTtcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICfQn9C+INC40LzQtdC90Lgg0JAt0K8nOlxyXG4gICAgICAgIHNvcnREYXRhID0gdGhpcy5zb3J0VG95cy5zb3J0VG9OYW1lKGFyZyk7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAn0J/QviDQuNC80LXQvdC4INCvLdCQJzpcclxuICAgICAgICBzb3J0RGF0YSA9IHRoaXMuc29ydFRveXMuc29ydFRvTmFtZVJldmVyc2UoYXJnKTtcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlRGF0YSgpO1xyXG4gICAgdGhpcy5kcmF3VG95cyhzb3J0RGF0YSk7XHJcbiAgfVxyXG5cclxuICBhcHBseVJlc2V0RmlsdGVycygpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJyNyZXNldC1maWx0ZXJzJyk7XHJcbiAgICBjb25zdCBjb2xvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvci1pdGVtJyk7XHJcbiAgICBjb25zdCBtYXNzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWljb24nKTtcclxuICAgIGNvbnN0IHNpemVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpemUtaXRlbScpO1xyXG4gICAgY29uc3QgZmF2b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGUtaXRlbScpO1xyXG5cclxuICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgKHJhbmdlIGFzIGFueSkubm9VaVNsaWRlci5yZXNldCgpO1xyXG4gICAgICAocmFuZ2VZZWFyIGFzIGFueSkubm9VaVNsaWRlci5yZXNldCgpO1xyXG5cclxuICAgICAgbWFzc0Zvcm0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taWNvbl9fYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29sb3JDb250YWluZXIuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbG9yLWl0ZW1fX2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNpemVJdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgKGVsZW1lbnQgYXMgYW55KS5jaGVja2VkID0gJ2NoZWNrZWQnO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIChmYXZvcml0ZSBhcyBhbnkpLmNoZWNrZWQgPSAnJztcclxuXHJcbiAgICAgIHRoaXMuYWRkUmVzdWx0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGFwcGx5UmVzZXRTZXR0aW5ncygpIHtcclxuICAgIGNvbnN0IHJlc2V0U2V0dGluZ3MgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcjcmVzZXQtc2V0dGluZycpO1xyXG4gICAgaWYgKHJlc2V0U2V0dGluZ3MpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRTZWFyY2goKSB7XHJcbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGxldCB2YWx1ZSA9IHNlYXJjaC52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBtYXNzRmlsdGVyOiBzdHJpbmdbXSA9IHRoaXMuc29ydFRveXMuZ2V0Q3VycmVudEFjdGl2ZUVsZW1lbnRzKCk7XHJcbiAgICBsZXQgbWFzc1JlcXVlc3Q6IERhdGFbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHN1Y2NzZXNzRmlsdGVyRm9ybSA9IHRoaXMuZGF0YVRveXMuZmlsdGVyKChlbDogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiBtYXNzRmlsdGVyLmluY2x1ZGVzKGVsLnNoYXBlKSAmJlxyXG4gICAgICAgIG1hc3NGaWx0ZXIuaW5jbHVkZXMoZWwuY291bnQpICYmXHJcbiAgICAgICAgbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC55ZWFyKSAmJlxyXG4gICAgICAgIG1hc3NGaWx0ZXIuaW5jbHVkZXMoZWwuY29sb3IpICYmXHJcbiAgICAgICAgbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC5zaXplKSAmJlxyXG4gICAgICAgIG1hc3NGaWx0ZXIuaW5jbHVkZXMoZWwuZmF2b3JpdGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICBpZiAodmFsdWUgIT0gJycpIHtcclxuICAgICAgc3VjY3Nlc3NGaWx0ZXJGb3JtLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUudG9Mb3dlckNhc2UoKS5zZWFyY2godmFsdWUudG9Mb3dlckNhc2UoKSkgIT0gLTEpIHtcclxuICAgICAgICAgIG1hc3NSZXF1ZXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hc3NSZXF1ZXN0ID0gc3VjY3Nlc3NGaWx0ZXJGb3JtO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0UmVzdWx0KG1hc3NSZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIGFkZENsZWFuU2VhcmNoKCkge1xyXG4gICAgY29uc3QgY2xlYW5TZWFyY2ggPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuY2xlYW4taWNvbicpO1xyXG4gICAgY29uc3Qgc2VhcmNoOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuXHJcbiAgICBpZiAoY2xlYW5TZWFyY2gpIHtcclxuICAgICAgKHNlYXJjaCBhcyBhbnkpLnZhbHVlID0gJyc7XHJcbiAgICAgIHRoaXMuYWRkU2VhcmNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVEYXRhKCkge1xyXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyLWNvbnRlbnQnKVxyXG4gICAgY2FyZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbkNocmlzdG1hc1RyZWVQYWdlKCkge1xyXG4gICAgdGhpcy5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuVG95c1BhZ2VzKCkge1xyXG4gICAgdGhpcy5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBvcGVuU3RhcnRQYWdlKCkge1xyXG4gICAgdGhpcy5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICBidXR0b25IYW5kbGVyKCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhQ29sb3InKSkge1xyXG4gICAgICB0aGlzLmxvY2FsU3RvcmFnZS5nZXREYXRhTG9jYWxTdG9yYWdlKCdkYXRhQ29sb3InLCAnY29sb3InLCAnLmNvbG9yLWl0ZW0nLCAnY29sb3ItaXRlbV9fYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFGb3JtJykpIHtcclxuICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0RGF0YUxvY2FsU3RvcmFnZSgnZGF0YUZvcm0nLCAnZm9ybScsICcuZm9ybS1pY29uJywgJ2Zvcm0taWNvbl9fYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFDaGVja2VkJykpIHtcclxuICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0Q2hlY2tlZExvY2FsU3RvcmFnZSgnZGF0YUNoZWNrZWQnLCAnY2hlY2snLCAnLmNoZWNrZWQnKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2hvdygpO1xyXG4gICAgdGhpcy5hZGRSZXN1bHREYXRhKCk7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFGYXZvcml0ZScpKSB7XHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlLmdldERhdGFMb2NhbFN0b3JhZ2UoJ2RhdGFGYXZvcml0ZScsICdzZXQnLCAnLmNvbnRhaW5lci1jb250ZW50JywgJ2FjdGl2ZS10b3knKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCBub1VpU2xpZGVyIGZyb20gJ25vVWlTbGlkZXInO1xyXG5pbXBvcnQgJ25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzcyc7XHJcbmltcG9ydCB7IHRveXMgfSBmcm9tICcuLi9pbmRleCc7XHJcblxyXG5cclxuY29uc3QgcmFuZ2VMb2NhbFN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlKCk7XHJcbmNvbnN0IFN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbmV4cG9ydCBjb25zdCByYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5nZScpO1xyXG5leHBvcnQgY29uc3QgcmFuZ2VZZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlLXllYXInKTtcclxuXHJcbm5vVWlTbGlkZXIuY3JlYXRlKHJhbmdlLCB7XHJcblxyXG4gIHN0YXJ0OiBbMSwgMTJdLFxyXG4gIGNvbm5lY3Q6IHRydWUsXHJcbiAgcmFuZ2U6IHtcclxuICAgICAgJ21pbic6IDEsXHJcbiAgICAgICdtYXgnOiAxMlxyXG4gIH0sXHJcbiAgc3RlcDogMSxcclxuICB0b29sdGlwczogdHJ1ZSxcclxuICBmb3JtYXQ6IHtcclxuICAgIHRvOiBmdW5jdGlvbiAodmFsdWU6IGFueSkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgfSxcclxuICAgIGZyb206IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5ub1VpU2xpZGVyLmNyZWF0ZShyYW5nZVllYXIsIHtcclxuXHJcbiAgc3RhcnQ6IFsxOTQwLCAyMDIxXSxcclxuICBjb25uZWN0OiB0cnVlLFxyXG4gIHJhbmdlOiB7XHJcbiAgICAgICdtaW4nOiAxOTQwLFxyXG4gICAgICAnbWF4JzogMjAyMVxyXG4gIH0sXHJcbiAgc3RlcDogMSxcclxuICB0b29sdGlwczogdHJ1ZSxcclxuICBmb3JtYXQ6IHtcclxuICAgIHRvOiBmdW5jdGlvbiAodmFsdWU6IGFueSkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgfSxcclxuICAgIGZyb206IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4ocmFuZ2UgYXMgYW55KS5ub1VpU2xpZGVyLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgcmFuZ2VMb2NhbFN0b3JhZ2Uuc2V0UmFuZ2VUb0xvY2FsU3RvcmFnZSgnZGF0YVJhbmdlQ291bnQnLCAnI3JhbmdlIC5ub1VpLWhhbmRsZScpO1xyXG4gIHRveXMuYWRkUmVzdWx0RGF0YSgpO1xyXG59KTtcclxuICBcclxuKHJhbmdlWWVhciBhcyBhbnkpLm5vVWlTbGlkZXIub24oJ2NoYW5nZScsICgpID0+IHtcclxuICByYW5nZUxvY2FsU3RvcmFnZS5zZXRSYW5nZVRvTG9jYWxTdG9yYWdlKCdkYXRhUmFuZ2VZZWFyJywgJyNyYW5nZS15ZWFyIC5ub1VpLWhhbmRsZScpO1xyXG4gIHRveXMuYWRkUmVzdWx0RGF0YSgpO1xyXG59KTtcclxuXHJcblN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YVJhbmdlQ291bnQnKSkge1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFSYW5nZUNvdW50JykpO1xyXG4gICAgKHJhbmdlIGFzIGFueSkubm9VaVNsaWRlci5zZXQoW2Ake2N1cnJlbnRWYWx1ZXNbMF19YCwgYCR7Y3VycmVudFZhbHVlc1tjdXJyZW50VmFsdWVzLmxlbmd0aCAtIDFdfWBdKTtcclxuICB9XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhUmFuZ2VZZWFyJykpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhUmFuZ2VZZWFyJykpO1xyXG4gICAgKHJhbmdlWWVhciBhcyBhbnkpLm5vVWlTbGlkZXIuc2V0KFtgJHtjdXJyZW50VmFsdWVzWzBdfWAsIGAke2N1cnJlbnRWYWx1ZXNbY3VycmVudFZhbHVlcy5sZW5ndGggLSAxXX1gXSk7XHJcbiAgfVxyXG59KSIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFN0YXJ0R2FtZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGFydC1nYW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRveXMgfSBmcm9tICcuL2NvbXBvbmVudHMvdG95cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYXZvcml0ZVRveXMgfSBmcm9tICcuL2NvbXBvbmVudHMvZmF2b3JpdGUtdG95cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaHJpc3RtYXNUcmVlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NocmlzdG1hcy10cmVlLmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3Nub3ctY29tcG9uZW50LnRzJztcclxuXHJcblxyXG5uZXcgU3RhcnRHYW1lKCdzdGFydCcpO1xyXG5leHBvcnQgY29uc3QgdG95czogVG95cyA9IG5ldyBUb3lzKCd0b3lzJyk7XHJcbmNvbnN0IGNocmlzdG1hc1RyZWUgPSBuZXcgQ2hyaXN0bWFzVHJlZSgnY2hyaXN0bWFzLXRyZWUnKTtcclxuZXhwb3J0IGNvbnN0IGZhdm9yaXRlID0gbmV3IEZhdm9yaXRlVG95cygnY29sbGVjdGlvbicpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=