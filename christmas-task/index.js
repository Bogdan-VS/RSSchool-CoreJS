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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*Обнуление*/\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\n:focus, :active {\n  outline: none;\n}\n\na:focus, a:active {\n  outline: none;\n}\n\nnav, footer, header, aside {\n  display: block;\n}\n\nhtml, body {\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  font-size: 10px;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\ninput, button, textarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na, a:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: 400;\n}\n\n/*--------------------*/\n@font-face {\n  font-family: \"Neucha-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Steppe\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: normal;\n  font-style: normal;\n}\nheader {\n  width: 100vw;\n  height: 50px;\n  background-color: #192f2d;\n}\n\n.header-container {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 30px;\n       column-gap: 30px;\n  padding-top: 5px;\n}\n.header-container .logo {\n  width: 30px;\n  height: 40px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  cursor: pointer;\n}\n.header-container .logo:hover {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  transform: scale(1.05);\n}\n.header-container .page {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.header-container .page:hover {\n  color: #009688;\n  transform: scale(1.05);\n}\n\nmain {\n  position: relative;\n  width: 100vw;\n  height: calc(100vh - 150px);\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\n.start-game {\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper {\n  width: calc(100% - 100px);\n  height: 100%;\n  margin: 0 auto;\n}\n\n.start-game .toys-circle-left {\n  position: absolute;\n  top: 0;\n  left: 20%;\n  width: 21.771vw;\n  padding-bottom: 39.886%;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.start-game .toys-circle-right {\n  position: absolute;\n  top: 10%;\n  right: 28%;\n  width: 12.771vw;\n  padding-bottom: 23.334%;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.start-game .title-conteiner h1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: inline-flex;\n  padding: 67px 85px;\n  font-family: \"Neucha-Regular\", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 53px;\n  line-height: 58px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n  letter-spacing: 0.05em;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n}\n.start-game .start {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 320px;\n  height: 54px;\n  top: 70%;\n  left: 50%;\n  font-family: \"Steppe\";\n  font-size: 24px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  transform: translateX(-50%);\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.start-game .start:hover {\n  opacity: 80%;\n}\n\nfooter {\n  width: 100vw;\n  height: 100px;\n  background-color: #192f2d;\n}\n\n.footer-container {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n.footer-container .left-element p {\n  font-family: \"Steppe\";\n  font-size: 18px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  opacity: 70%;\n}\n.footer-container .left-element p span {\n  margin-left: 20px;\n}\n.footer-container .right-element a {\n  display: block;\n  width: 180px;\n  height: 60px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n\n.hide {\n  display: none;\n}\n\n@media (max-width: 1024px) {\n  .wrapper {\n    width: calc(100% - 40px);\n    height: 100%;\n    margin: 0 auto;\n  }\n}\n.toys {\n  width: 100%;\n  height: 100%;\n}\n\n.toys-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 450px 1fr;\n  grid-template-rows: 1fr;\n  grid-column-gap: 10px;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n}\n\n.filter-conteiner {\n  overflow: hidden;\n}\n\n.filter-container-wrapper {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.filter-container-wrapper::-webkit-scrollbar {\n  width: 6px;\n}\n\n.filter-container-wrapper::-webkit-scrollbar-track {\n  background: none;\n}\n\n.filter-container-wrapper::-webkit-scrollbar-thumb {\n  border-radius: 6px;\n}\n\n.filter-container-content {\n  margin-right: 10px;\n  padding: 10px;\n}\n\n.settings {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin: 20px 0;\n}\n.settings .audio {\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n}\n.settings .audio:hover {\n  opacity: 75%;\n}\n.settings .audio_active {\n  filter: invert(54%) sepia(107%) saturate(901%) hue-rotate(25deg) brightness(140%) contrast(93%);\n}\n.settings .snow {\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n}\n.settings .snow:hover {\n  opacity: 75%;\n}\n.settings .search {\n  position: relative;\n}\n.settings .search .search-item {\n  width: 260px;\n  height: 36px;\n  padding: 0 50px 0 20px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #fff;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n  border: 1px solid #03a9f4;\n}\n.settings .clean-icon {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n}\n.settings .search-icon:hover {\n  opacity: 75%;\n}\n\n.sort {\n  display: flex;\n  -moz-column-gap: 40px;\n       column-gap: 40px;\n  align-items: center;\n}\n.sort p {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.sort .sort-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 270px;\n  height: 36px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n  border: 1px solid #03a9f4;\n  z-index: 5;\n}\n.sort .sort-container p {\n  font-size: 16px;\n  text-transform: none;\n  padding-left: 20px;\n}\n.sort .sort-container .choose-item {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  width: 30px;\n  height: 20px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n}\n.sort .sort-container .choose-item:hover {\n  opacity: 75%;\n}\n.sort .sort-container .all-item {\n  position: absolute;\n  width: 90%;\n  left: 5%;\n  top: 110%;\n  border-radius: 6px;\n  border: 1px solid #2196f3;\n  background-color: #3e5857;\n}\n.sort .sort-container .all-item .sort-item {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #fff;\n  padding: 10px;\n  cursor: pointer;\n}\n.sort .sort-container .all-item .sort-item:hover {\n  background-color: #669396;\n}\n\n.sort-category {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.sort-category .category-container {\n  width: 24px;\n  height: 24px;\n  text-transform: none;\n}\n.sort-category .category-container .all {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.sort-category .category-container .all::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.sort-category .category-container .all:checked::before {\n  opacity: 1;\n}\n\n.toys-form {\n  margin: 20px 0;\n}\n.toys-form h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.toys-form .form-container {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.toys-form .form-container .form-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.toys-form .form-container .form-item .form-icon {\n  margin-bottom: 15px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.toys-form .form-container .form-item .form-icon:hover {\n  opacity: 85%;\n  transform: scale(1.1);\n}\n.toys-form .form-container .form-item .form-icon__active {\n  filter: invert(54%) sepia(107%) saturate(901%) hue-rotate(25deg) brightness(140%) contrast(93%);\n}\n.toys-form .form-container .form-item .icon-1 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n}\n.toys-form .form-container .form-item .icon-2 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n}\n.toys-form .form-container .form-item .icon-3 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n}\n.toys-form .form-container .form-item .icon-4 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n}\n.toys-form .form-container .form-item .icon-5 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n}\n.toys-form .form-container .form-item .icon-6 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\n}\n.toys-form .form-container .form-item .icon-name {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  color: #fff;\n}\n\n/*Slider*/\nmain .noUi-target {\n  background: #fafafa;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;\n  border: none;\n  cursor: pointer;\n}\n\nmain .noUi-horizontal {\n  height: 2px;\n}\n\nmain .noUi-handle:before,\n.noUi-handle:after {\n  content: none;\n  display: none !important;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  background: #e8e7e6;\n  left: 14px;\n  top: 6px;\n}\n\nmain .noUi-horizontal .noUi-handle {\n  width: 15px;\n  height: 15px;\n  right: -13px;\n  top: -6px;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), radial-gradient(57.23% 248.2% at 107.17%, at 104.02%, rgba(34, 153, 235, 0.92) 0%, rgba(34, 153, 235, 0.07) 100%), radial-gradient(104.22% 230.94% at -4.22%, at 0%, #24c5db 3.62%, rgba(36, 197, 219, 0.26) 55.1%);\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), radial-gradient(57.23% 248.2% at 107.17% 104.02%, rgba(34, 153, 235, 0.92) 0%, rgba(34, 153, 235, 0.07) 100%), radial-gradient(104.22% 230.94% at -4.22% 0%, #24c5db 3.62%, rgba(36, 197, 219, 0.26) 55.1%);\n  border-radius: 50%;\n  box-shadow: none;\n  border: none;\n  cursor: pointer;\n}\n\nmain .noUi-connect {\n  background: #24c5db;\n}\n\nmain .noUi-base,\n.noUi-connects {\n  width: 97%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\nmain .noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: none;\n  border-radius: none;\n  background: none;\n  color: #fff;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 14px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n}\n\n#range-year .noUi-tooltip {\n  left: 50%;\n}\n\n#range-year {\n  margin-top: 40px;\n}\n\n/*Slider-END*/\n.count-copy {\n  position: relative;\n  margin: 20px 0;\n}\n.count-copy h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.count-copy .count-copy-item {\n  margin-top: 40px;\n}\n.count-copy .min {\n  position: absolute;\n  top: 125%;\n  left: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n.count-copy .max {\n  position: absolute;\n  top: 125%;\n  right: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n\n.year-purchase {\n  position: relative;\n  margin: 40px 0 20px 0;\n}\n.year-purchase h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.year-purchase .year-purchase-item {\n  margin-top: 35px;\n}\n.year-purchase .min {\n  position: absolute;\n  top: 125%;\n  left: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n.year-purchase .max {\n  position: absolute;\n  top: 125%;\n  right: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n\n.color {\n  margin: 40px 0 20px 0;\n}\n.color h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.color .color-container {\n  display: flex;\n  -moz-column-gap: 25px;\n       column-gap: 25px;\n  margin-top: 15px;\n}\n.color .color-container .color-item {\n  width: 25px;\n  height: 25px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.color .color-container .color-item:hover {\n  opacity: 75%;\n}\n.color .color-container .color-item__active {\n  box-shadow: 0px 0px 6px 2px rgba(253, 215, 0, 0.8);\n}\n.color .color-container .item-1 {\n  background: #ffffff;\n}\n.color .color-container .item-2 {\n  background: #fdd700;\n}\n.color .color-container .item-3 {\n  background: #fd0000;\n}\n.color .color-container .item-4 {\n  background: #2299eb;\n}\n.color .color-container .item-5 {\n  background: #08aa05;\n}\n\n.size {\n  margin: 20px 0;\n}\n.size h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.size .size-container {\n  display: flex;\n  margin-top: 15px;\n  justify-content: space-between;\n}\n.size .size-container .container-item {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.size .size-container .size-item {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.size .size-container .size-item::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.size .size-container .size-item:checked::before {\n  opacity: 1;\n}\n\n.favorite {\n  margin: 20px 0;\n}\n.favorite .container-favorite {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.favorite .container-favorite .favorite-item {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.favorite .container-favorite .favorite-item::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.favorite .container-favorite .favorite-item:checked::before {\n  opacity: 1;\n}\n\n.sucsses {\n  display: flex;\n  margin: 25px 0;\n  justify-content: center;\n  -moz-column-gap: 40px;\n       column-gap: 40px;\n}\n.sucsses .apply-btn {\n  width: 180px;\n  height: 30px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.sucsses .apply-btn:hover {\n  opacity: 75%;\n}\n\n.toys-collection-container {\n  overflow: hidden;\n}\n.toys-collection-container .title {\n  display: flex;\n  -moz-column-gap: 50px;\n       column-gap: 50px;\n}\n.toys-collection-container .title h2 {\n  margin: 20px 0 20px 50px;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.toys-collection-container .collection-container {\n  position: relative;\n  height: calc(100% - 48px);\n  overflow: scroll;\n}\n.toys-collection-container .collection-container .message {\n  display: none;\n  width: 270px;\n  border-radius: 6px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .message .message-item {\n  padding: 30px;\n  background: rgba(67, 104, 106, 0.7);\n  color: #fafafa;\n  font-size: 20px;\n}\n.toys-collection-container .collection-container .collection-container-wrapper {\n  display: flex;\n  -moz-column-gap: 25px;\n       column-gap: 25px;\n  row-gap: 25px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-right: 10px;\n}\n.toys-collection-container .collection-container .container-content {\n  width: 225px;\n  padding: 10px;\n  margin: 10px 0 50px 0;\n  background: radial-gradient(109.56% 109.56% at 0%, at -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  border: rgba(121, 139, 144, 0.1) solid 5px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .container-content h4 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.toys-collection-container .collection-container .container-content .icon-toy-container {\n  margin-top: 15px;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n.toys-collection-container .collection-container .container-content .icon-toy-container .icon-toy {\n  width: 110px;\n  height: 110px;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .container-content .data-toy {\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n.toys-collection-container .collection-container .container-content .data-toy li {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  color: #ffffff;\n}\n.toys-collection-container .collection-container .active-toy {\n  box-sizing: border-box;\n  border: #4caf50 solid 5px;\n  background: radial-gradient(109.56% 109.56% at 0%, at -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(70, 109, 114, 0.4) 100%);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(70, 109, 114, 0.4) 100%);\n  box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\n}\n.toys-collection-container .collection-container .container-content:hover {\n  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.7);\n  background: radial-gradient(109.56% 109.56% at 0%, at -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(179, 246, 255, 0.4) 100%);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(179, 246, 255, 0.4) 100%);\n}\n.toys-collection-container .collection-container .container-content:hover .icon-toy-container .icon-toy {\n  transform: scale(1.1);\n}\n.toys-collection-container .collection-container .active-toy:hover {\n  box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\n}\n.toys-collection-container .collection-container .message_active {\n  display: block;\n  opacity: 1;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar {\n  width: 12px;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar-track {\n  background: none;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar-thumb {\n  background-color: #43686a;\n  border-radius: 6px;\n}\n\n.christmas-tree {\n  width: 100%;\n  height: 100%;\n}\n\n.christmas-tree-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2.3fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.settings-tree {\n  background: rgba(25, 47, 45, 0.7);\n  padding: 10px;\n  overflow: hidden;\n}\n\n.settings-container {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.settings-container::-webkit-scrollbar {\n  width: 6px;\n}\n\n.settings-container::-webkit-scrollbar-track {\n  background: none;\n}\n\n.settings-container::-webkit-scrollbar-thumb {\n  border-radius: 6px;\n}\n\n.settings-tree-page {\n  justify-content: center;\n  -moz-column-gap: 50px;\n       column-gap: 50px;\n}\n\n.christmas-tree-collection h2 {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.christmas-tree-collection .collection-continer {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 10px;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\n.christmas-tree-collection .collection-continer .conteiner-content {\n  padding-bottom: 100%;\n  background: radial-gradient(109.56% 109.56% at 0%, at -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-radius: 10px;\n  transition: 0.3s;\n  border: #172a29 2px solid;\n  cursor: pointer;\n}\n.christmas-tree-collection .collection-continer .conteiner-content .conteiner-item {\n  position: absolute;\n  width: 80%;\n  height: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-1 {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-2 {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-3 {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-4 {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-5 {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ");\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-6 {\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n}\n.christmas-tree-collection .collection-continer .conteiner-content:hover {\n  box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\n}\n.christmas-tree-background h2 {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.christmas-tree-background .background-continer {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 10px;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\n.christmas-tree-background .background-continer .conteiner-content-bg {\n  padding-bottom: 100%;\n  border-radius: 9px;\n  border: #172a29 2px solid;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.christmas-tree-background .background-continer .conteiner-content-bg:hover {\n  box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\n}\n.christmas-tree-background .background-continer .bg-1 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\n}\n.christmas-tree-background .background-continer .bg-2 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");\n}\n.christmas-tree-background .background-continer .bg-3 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ");\n}\n.christmas-tree-background .background-continer .bg-4 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ");\n}\n.christmas-tree-background .background-continer .bg-5 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ");\n}\n.christmas-tree-background .background-continer .bg-6 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ");\n}\n.christmas-tree-background .background-continer .bg-7 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ");\n}\n.christmas-tree-background .background-continer .bg-8 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ");\n}\n.christmas-tree-background .background-continer .bg-9 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ");\n}\n.christmas-tree-background .background-continer .bg-10 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + ");\n}\n.christmas-tree-background .background-continer .conteiner-content-bg__active {\n  border: #03a9f4 2px solid;\n}\n\n.christmas-tree-garland h2 {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.christmas-tree-garland .garland-conteiner {\n  display: flex;\n  justify-content: space-around;\n}\n.christmas-tree-garland .garland-conteiner .garland-container-item {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: 0.3s;\n  opacity: 0.5;\n}\n.christmas-tree-garland .garland-conteiner .garland-1 {\n  background: linear-gradient(45deg, #dd0d0d, #e5f210, #0ae511);\n  box-shadow: 0px 0px 10px 2px rgba(251, 251, 251, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-1:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #fbfbfb;\n}\n.christmas-tree-garland .garland-conteiner .garland-2 {\n  background: linear-gradient(45deg, #f60707, #cc4c3f, #df7048);\n  box-shadow: 0px 0px 10px 2px rgba(255, 1, 1, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-2:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #ff0101;\n}\n.christmas-tree-garland .garland-conteiner .garland-3 {\n  background: linear-gradient(45deg, #0f00ff, #252ac3, #1b0d6f);\n  box-shadow: 0px 0px 10px 2px rgba(11, 60, 247, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-3:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #0b3cf7;\n}\n.christmas-tree-garland .garland-conteiner .garland-4 {\n  background: linear-gradient(45deg, #0fff00, #25c32a, #0d6f37);\n  box-shadow: 0px 0px 10px 2px rgba(35, 247, 11, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-4:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #23f70b;\n}\n.christmas-tree-garland .garland-conteiner .garland-5 {\n  background: linear-gradient(45deg, #e5ff00, #b3c325, #6f6c0d);\n  box-shadow: 0px 0px 10px 2px rgba(215, 227, 16, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-5:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #d7e310;\n}\n.christmas-tree-garland .garland-conteiner .garland-item__active {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #fbfbfb;\n}\n.christmas-tree-garland .garland-conteiner .switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n}\n.christmas-tree-garland .garland-conteiner .switch input {\n  display: none;\n}\n.christmas-tree-garland .garland-conteiner .switch .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.christmas-tree-garland .garland-conteiner .switch .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 13px;\n  width: 13px;\n  left: 4px;\n  bottom: 4px;\n  background-color: #f6d209;\n  transition: 0.4s;\n}\n.christmas-tree-garland .garland-conteiner .switch input:checked + .slider {\n  background-color: #0e6a62;\n}\n.christmas-tree-garland .garland-conteiner .switch input:focus + .slider {\n  box-shadow: 0 0 1px #0e6a62;\n}\n.christmas-tree-garland .garland-conteiner .switch input:checked + .slider:before {\n  transform: translateX(20px);\n}\n.christmas-tree-garland .garland-conteiner .switch .slider.round {\n  border-radius: 34px;\n}\n.christmas-tree-garland .garland-conteiner .switch .slider.round:before {\n  border-radius: 50%;\n}\n\n.main-tree {\n  height: calc(100vh - 150px);\n  position: relative;\n}\n.main-tree .christmas-bg-current {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: center/cover url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\n}\n.main-tree .christmas-tree-carrent {\n  position: absolute;\n  bottom: 1%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 300px;\n  height: 450px;\n  z-index: 10;\n}\n\n.toys-tree {\n  background: rgba(25, 47, 45, 0.7);\n}\n.toys-tree .title h2 {\n  margin: 20px 0 20px 50px;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.toys-tree-container {\n  display: grid;\n  padding: 5px;\n  width: 100%;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  grid-column-gap: 5px;\n  -moz-column-gap: 5px;\n       column-gap: 5px;\n  grid-row-gap: 5px;\n  row-gap: 5px;\n}\n.toys-tree-container .toy-for-tree {\n  position: relative;\n  padding-bottom: 100%;\n  background: radial-gradient(109.56% 109.56% at 0%, at -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  transition: 0.3s;\n  cursor: pointer;\n  border: #172a29 2px solid;\n}\n.toys-tree-container .toy-for-tree .toy-icon {\n  position: absolute;\n  width: 65%;\n  height: 65%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.toys-tree-container .toy-for-tree .toy-count {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  right: 0;\n  bottom: 0;\n  width: 20px;\n  height: 20px;\n  border-top-left-radius: 50%;\n  background-color: crimson;\n  color: #fff;\n  font-size: 11px;\n}\n.toys-tree-container .toy-for-tree:hover {\n  box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\n}\n\n.hide {\n  display: none;\n}\n\n.garland {\n  display: none;\n  position: absolute;\n  bottom: -4%;\n  left: 50%;\n  transform: translateX(-50%);\n  --red: #ff2c2c;\n  --yellow: #ffeb00;\n  --green: #00ff5d;\n  --blue: #0095ff;\n  --speed: 2s;\n  z-index: 15;\n  pointer-events: none;\n}\n\n.red {\n  fill: #f80606;\n  -webkit-animation: var(--speed) alternate 0s infinite blinkRedRed;\n          animation: var(--speed) alternate 0s infinite blinkRedRed;\n}\n\n.red_1 {\n  fill: #f80606;\n  -webkit-animation: var(--speed) alternate 0s infinite blinkRed_1;\n          animation: var(--speed) alternate 0s infinite blinkRed_1;\n}\n\n.red_2 {\n  fill: #f7b1b1;\n  -webkit-animation: var(--speed) alternate 0s infinite blinkRed_2;\n          animation: var(--speed) alternate 0s infinite blinkRed_2;\n}\n\n.yellow {\n  fill: var(--yellow);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkYellow;\n          animation: var(--speed) alternate 0s infinite blinkYellow;\n}\n\n.yellow_1 {\n  fill: var(--yellow);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkYellow_1;\n          animation: var(--speed) alternate 0s infinite blinkYellow_1;\n}\n\n.yellow_2 {\n  fill: var(--yellow);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkYellow_2;\n          animation: var(--speed) alternate 0s infinite blinkYellow_2;\n}\n\n.blue {\n  fill: var(--blue);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkBlue;\n          animation: var(--speed) alternate 0s infinite blinkBlue;\n}\n\n.blue_1 {\n  fill: var(--blue);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkBlue_1;\n          animation: var(--speed) alternate 0s infinite blinkBlue_1;\n}\n\n.blue_2 {\n  fill: var(--blue);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkBlue_2;\n          animation: var(--speed) alternate 0s infinite blinkBlue_2;\n}\n\n.green {\n  fill: var(--green);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkGreen;\n          animation: var(--speed) alternate 0s infinite blinkGreen;\n}\n\n.green_1 {\n  fill: var(--green);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkGreen_1;\n          animation: var(--speed) alternate 0s infinite blinkGreen_1;\n}\n\n.green_2 {\n  fill: var(--green);\n  -webkit-animation: var(--speed) alternate 0s infinite blinkGreen_2;\n          animation: var(--speed) alternate 0s infinite blinkGreen_2;\n}\n\n@-webkit-keyframes blinkRed {\n  0% {\n    fill: var(--red);\n  }\n  25% {\n    fill: var(--blue);\n  }\n  50% {\n    fill: var(--green);\n  }\n  75% {\n    fill: var(--yellow);\n  }\n}\n\n@keyframes blinkRed {\n  0% {\n    fill: var(--red);\n  }\n  25% {\n    fill: var(--blue);\n  }\n  50% {\n    fill: var(--green);\n  }\n  75% {\n    fill: var(--yellow);\n  }\n}\n@-webkit-keyframes blinkRed_1 {\n  0% {\n    fill: #f80606;\n  }\n  25% {\n    fill: #f7b1b1;\n  }\n  50% {\n    fill: #f80606;\n  }\n  75% {\n    fill: #f7b1b1;\n  }\n}\n@keyframes blinkRed_1 {\n  0% {\n    fill: #f80606;\n  }\n  25% {\n    fill: #f7b1b1;\n  }\n  50% {\n    fill: #f80606;\n  }\n  75% {\n    fill: #f7b1b1;\n  }\n}\n@-webkit-keyframes blinkRed_2 {\n  0% {\n    fill: #f7b1b1;\n  }\n  25% {\n    fill: #f80606;\n  }\n  50% {\n    fill: #f7b1b1;\n  }\n  75% {\n    fill: #f80606;\n  }\n}\n@keyframes blinkRed_2 {\n  0% {\n    fill: #f7b1b1;\n  }\n  25% {\n    fill: #f80606;\n  }\n  50% {\n    fill: #f7b1b1;\n  }\n  75% {\n    fill: #f80606;\n  }\n}\n@-webkit-keyframes blinkYellow {\n  0% {\n    fill: var(--yellow);\n  }\n  25% {\n    fill: var(--red);\n  }\n  50% {\n    fill: var(--blue);\n  }\n  75% {\n    fill: var(--green);\n  }\n}\n@keyframes blinkYellow {\n  0% {\n    fill: var(--yellow);\n  }\n  25% {\n    fill: var(--red);\n  }\n  50% {\n    fill: var(--blue);\n  }\n  75% {\n    fill: var(--green);\n  }\n}\n@-webkit-keyframes blinkYellow_1 {\n  0% {\n    fill: #ffd904;\n  }\n  25% {\n    fill: #f7f3cd;\n  }\n  50% {\n    fill: #ffd904;\n  }\n  75% {\n    fill: #f7f3cd;\n  }\n}\n@keyframes blinkYellow_1 {\n  0% {\n    fill: #ffd904;\n  }\n  25% {\n    fill: #f7f3cd;\n  }\n  50% {\n    fill: #ffd904;\n  }\n  75% {\n    fill: #f7f3cd;\n  }\n}\n@-webkit-keyframes blinkYellow_2 {\n  0% {\n    fill: #f7f3cd;\n  }\n  25% {\n    fill: #ffd904;\n  }\n  50% {\n    fill: #f7f3cd;\n  }\n  75% {\n    fill: #ffd904;\n  }\n}\n@keyframes blinkYellow_2 {\n  0% {\n    fill: #f7f3cd;\n  }\n  25% {\n    fill: #ffd904;\n  }\n  50% {\n    fill: #f7f3cd;\n  }\n  75% {\n    fill: #ffd904;\n  }\n}\n@-webkit-keyframes blinkBlue {\n  0% {\n    fill: var(--blue);\n  }\n  25% {\n    fill: var(--green);\n  }\n  50% {\n    fill: var(--yellow);\n  }\n  75% {\n    fill: var(--red);\n  }\n}\n@keyframes blinkBlue {\n  0% {\n    fill: var(--blue);\n  }\n  25% {\n    fill: var(--green);\n  }\n  50% {\n    fill: var(--yellow);\n  }\n  75% {\n    fill: var(--red);\n  }\n}\n@-webkit-keyframes blinkBlue_1 {\n  0% {\n    fill: #1100ff;\n  }\n  25% {\n    fill: #92cdf7;\n  }\n  50% {\n    fill: #1100ff;\n  }\n  75% {\n    fill: #92cdf7;\n  }\n}\n@keyframes blinkBlue_1 {\n  0% {\n    fill: #1100ff;\n  }\n  25% {\n    fill: #92cdf7;\n  }\n  50% {\n    fill: #1100ff;\n  }\n  75% {\n    fill: #92cdf7;\n  }\n}\n@-webkit-keyframes blinkBlue_2 {\n  0% {\n    fill: #92cdf7;\n  }\n  25% {\n    fill: #1100ff;\n  }\n  50% {\n    fill: #92cdf7;\n  }\n  75% {\n    fill: #1100ff;\n  }\n}\n@keyframes blinkBlue_2 {\n  0% {\n    fill: #92cdf7;\n  }\n  25% {\n    fill: #1100ff;\n  }\n  50% {\n    fill: #92cdf7;\n  }\n  75% {\n    fill: #1100ff;\n  }\n}\n@-webkit-keyframes blinkGreen {\n  0% {\n    fill: var(--green);\n  }\n  25% {\n    fill: var(--yellow);\n  }\n  50% {\n    fill: var(--red);\n  }\n  75% {\n    fill: var(--blue);\n  }\n}\n@keyframes blinkGreen {\n  0% {\n    fill: var(--green);\n  }\n  25% {\n    fill: var(--yellow);\n  }\n  50% {\n    fill: var(--red);\n  }\n  75% {\n    fill: var(--blue);\n  }\n}\n@-webkit-keyframes blinkGreen_1 {\n  0% {\n    fill: #28c700;\n  }\n  25% {\n    fill: #bcffd5;\n  }\n  50% {\n    fill: #28c700;\n  }\n  75% {\n    fill: #bcffd5;\n  }\n}\n@keyframes blinkGreen_1 {\n  0% {\n    fill: #28c700;\n  }\n  25% {\n    fill: #bcffd5;\n  }\n  50% {\n    fill: #28c700;\n  }\n  75% {\n    fill: #bcffd5;\n  }\n}\n@-webkit-keyframes blinkGreen_2 {\n  0% {\n    fill: #bcffd5;\n  }\n  25% {\n    fill: #28c700;\n  }\n  50% {\n    fill: #bcffd5;\n  }\n  75% {\n    fill: #28c700;\n  }\n}\n@keyframes blinkGreen_2 {\n  0% {\n    fill: #bcffd5;\n  }\n  25% {\n    fill: #28c700;\n  }\n  50% {\n    fill: #bcffd5;\n  }\n  75% {\n    fill: #28c700;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/_reset.scss","webpack://./src/styles/_fonts.scss","webpack://./src/styles/_start-page.scss","webpack://./src/styles/_toys.scss","webpack://./src/styles/_tree.scss"],"names":[],"mappings":"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BA;IACE,aAAA;ELm6BF;AACF;AK/6BA;EACE;IACE,aAAA;ELm6BF;EKj6BA;IACE,aAAA;ELm6BF;EKj6BA;IACE,aAAA;ELm6BF;EKj6BA;IACE,aAAA;ELm6BF;AACF;AKh6BA;EACE;IACE,mBAAA;ELk6BF;EKh6BA;IACE,gBAAA;ELk6BF;EKh6BA;IACE,iBAAA;ELk6BF;EKh6BA;IACE,kBAAA;ELk6BF;AACF;AK96BA;EACE;IACE,mBAAA;ELk6BF;EKh6BA;IACE,gBAAA;ELk6BF;EKh6BA;IACE,iBAAA;ELk6BF;EKh6BA;IACE,kBAAA;ELk6BF;AACF;AK/5BA;EACE;IACE,aAAA;ELi6BF;EK/5BA;IACE,aAAA;ELi6BF;EK/5BA;IACE,aAAA;ELi6BF;EK/5BA;IACE,aAAA;ELi6BF;AACF;AK76BA;EACE;IACE,aAAA;ELi6BF;EK/5BA;IACE,aAAA;ELi6BF;EK/5BA;IACE,aAAA;ELi6BF;EK/5BA;IACE,aAAA;ELi6BF;AACF;AK95BA;EACE;IACE,aAAA;ELg6BF;EK95BA;IACE,aAAA;ELg6BF;EK95BA;IACE,aAAA;ELg6BF;EK95BA;IACE,aAAA;ELg6BF;AACF;AK56BA;EACE;IACE,aAAA;ELg6BF;EK95BA;IACE,aAAA;ELg6BF;EK95BA;IACE,aAAA;ELg6BF;EK95BA;IACE,aAAA;ELg6BF;AACF;AK75BA;EACE;IACE,iBAAA;EL+5BF;EK75BA;IACE,kBAAA;EL+5BF;EK75BA;IACE,mBAAA;EL+5BF;EK75BA;IACE,gBAAA;EL+5BF;AACF;AK36BA;EACE;IACE,iBAAA;EL+5BF;EK75BA;IACE,kBAAA;EL+5BF;EK75BA;IACE,mBAAA;EL+5BF;EK75BA;IACE,gBAAA;EL+5BF;AACF;AK55BA;EACE;IACE,aAAA;EL85BF;EK55BA;IACE,aAAA;EL85BF;EK55BA;IACE,aAAA;EL85BF;EK55BA;IACE,aAAA;EL85BF;AACF;AK16BA;EACE;IACE,aAAA;EL85BF;EK55BA;IACE,aAAA;EL85BF;EK55BA;IACE,aAAA;EL85BF;EK55BA;IACE,aAAA;EL85BF;AACF;AK35BA;EACE;IACE,aAAA;EL65BF;EK35BA;IACE,aAAA;EL65BF;EK35BA;IACE,aAAA;EL65BF;EK35BA;IACE,aAAA;EL65BF;AACF;AKz6BA;EACE;IACE,aAAA;EL65BF;EK35BA;IACE,aAAA;EL65BF;EK35BA;IACE,aAAA;EL65BF;EK35BA;IACE,aAAA;EL65BF;AACF;AK15BA;EACE;IACE,kBAAA;EL45BF;EK15BA;IACE,mBAAA;EL45BF;EK15BA;IACE,gBAAA;EL45BF;EK15BA;IACE,iBAAA;EL45BF;AACF;AKx6BA;EACE;IACE,kBAAA;EL45BF;EK15BA;IACE,mBAAA;EL45BF;EK15BA;IACE,gBAAA;EL45BF;EK15BA;IACE,iBAAA;EL45BF;AACF;AKz5BA;EACE;IACE,aAAA;EL25BF;EKz5BA;IACE,aAAA;EL25BF;EKz5BA;IACE,aAAA;EL25BF;EKz5BA;IACE,aAAA;EL25BF;AACF;AKv6BA;EACE;IACE,aAAA;EL25BF;EKz5BA;IACE,aAAA;EL25BF;EKz5BA;IACE,aAAA;EL25BF;EKz5BA;IACE,aAAA;EL25BF;AACF;AKx5BA;EACE;IACE,aAAA;EL05BF;EKx5BA;IACE,aAAA;EL05BF;EKx5BA;IACE,aAAA;EL05BF;EKx5BA;IACE,aAAA;EL05BF;AACF;AKt6BA;EACE;IACE,aAAA;EL05BF;EKx5BA;IACE,aAAA;EL05BF;EKx5BA;IACE,aAAA;EL05BF;EKx5BA;IACE,aAAA;EL05BF;AACF","sourcesContent":["@charset \"UTF-8\";\n/*Обнуление*/\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*, *:before, *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:focus, :active {\n  outline: none;\n}\n\na:focus, a:active {\n  outline: none;\n}\n\nnav, footer, header, aside {\n  display: block;\n}\n\nhtml, body {\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  font-size: 10px;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\ninput, button, textarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na, a:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: 400;\n}\n\n/*--------------------*/\n@font-face {\n  font-family: \"Neucha-Regular\";\n  src: url(\"../assets/fonts/Neucha-Regular.ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Steppe\";\n  src: url(\"../assets/fonts/Steppe.ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\nheader {\n  width: 100vw;\n  height: 50px;\n  background-color: #192f2d;\n}\n\n.header-container {\n  display: flex;\n  align-items: center;\n  column-gap: 30px;\n  padding-top: 5px;\n}\n.header-container .logo {\n  width: 30px;\n  height: 40px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/tree.svg);\n  cursor: pointer;\n}\n.header-container .logo:hover {\n  background: top 0 left 0/100% 100% url(../assets/images/svg/tree-active.svg);\n  transform: scale(1.05);\n}\n.header-container .page {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.header-container .page:hover {\n  color: #009688;\n  transform: scale(1.05);\n}\n\nmain {\n  position: relative;\n  width: 100vw;\n  height: calc(100vh - 150px);\n  background: top 0 left 0/100% 100% url(../assets/images/bg.jpg);\n}\n\n.start-game {\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper {\n  width: calc(100% - 100px);\n  height: 100%;\n  margin: 0 auto;\n}\n\n.start-game .toys-circle-left {\n  position: absolute;\n  top: 0;\n  left: 20%;\n  width: 21.771vw;\n  padding-bottom: 39.886%;\n  background: top 0 left 0/100% 100% url(../assets/images/1.png);\n}\n.start-game .toys-circle-right {\n  position: absolute;\n  top: 10%;\n  right: 28%;\n  width: 12.771vw;\n  padding-bottom: 23.334%;\n  background: top 0 left 0/100% 100% url(../assets/images/2.png);\n}\n.start-game .title-conteiner h1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: inline-flex;\n  padding: 67px 85px;\n  font-family: \"Neucha-Regular\", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 53px;\n  line-height: 58px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n  letter-spacing: 0.05em;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n}\n.start-game .start {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 320px;\n  height: 54px;\n  top: 70%;\n  left: 50%;\n  font-family: \"Steppe\";\n  font-size: 24px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  transform: translateX(-50%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.start-game .start:hover {\n  opacity: 80%;\n}\n\nfooter {\n  width: 100vw;\n  height: 100px;\n  background-color: #192f2d;\n}\n\n.footer-container {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n.footer-container .left-element p {\n  font-family: \"Steppe\";\n  font-size: 18px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  opacity: 70%;\n}\n.footer-container .left-element p span {\n  margin-left: 20px;\n}\n.footer-container .right-element a {\n  display: block;\n  width: 180px;\n  height: 60px;\n  background: top 0 left 0/100% 100% url(../assets/images/rs_school_js.png);\n}\n\n.hide {\n  display: none;\n}\n\n@media (max-width: 1024px) {\n  .wrapper {\n    width: calc(100% - 40px);\n    height: 100%;\n    margin: 0 auto;\n  }\n}\n.toys {\n  width: 100%;\n  height: 100%;\n}\n\n.toys-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 450px 1fr;\n  grid-template-rows: 1fr;\n  column-gap: 10px;\n}\n\n.filter-conteiner {\n  overflow: hidden;\n}\n\n.filter-container-wrapper {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.filter-container-wrapper::-webkit-scrollbar {\n  width: 6px;\n}\n\n.filter-container-wrapper::-webkit-scrollbar-track {\n  background: none;\n}\n\n.filter-container-wrapper::-webkit-scrollbar-thumb {\n  border-radius: 6px;\n}\n\n.filter-container-content {\n  margin-right: 10px;\n  padding: 10px;\n}\n\n.settings {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin: 20px 0;\n}\n.settings .audio {\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/audio.svg);\n}\n.settings .audio:hover {\n  opacity: 75%;\n}\n.settings .audio_active {\n  filter: invert(54%) sepia(107%) saturate(901%) hue-rotate(25deg) brightness(140%) contrast(93%);\n}\n.settings .snow {\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/snow.svg);\n}\n.settings .snow:hover {\n  opacity: 75%;\n}\n.settings .search {\n  position: relative;\n}\n.settings .search .search-item {\n  width: 260px;\n  height: 36px;\n  padding: 0 50px 0 20px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #fff;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n  border: 1px solid #03a9f4;\n}\n.settings .clean-icon {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/close.svg);\n}\n.settings .search-icon:hover {\n  opacity: 75%;\n}\n\n.sort {\n  display: flex;\n  column-gap: 40px;\n  align-items: center;\n}\n.sort p {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.sort .sort-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 270px;\n  height: 36px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n  border: 1px solid #03a9f4;\n  z-index: 5;\n}\n.sort .sort-container p {\n  font-size: 16px;\n  text-transform: none;\n  padding-left: 20px;\n}\n.sort .sort-container .choose-item {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  width: 30px;\n  height: 20px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/arrow-down.svg);\n}\n.sort .sort-container .choose-item:hover {\n  opacity: 75%;\n}\n.sort .sort-container .all-item {\n  position: absolute;\n  width: 90%;\n  left: 5%;\n  top: 110%;\n  border-radius: 6px;\n  border: 1px solid #2196f3;\n  background-color: #3e5857;\n}\n.sort .sort-container .all-item .sort-item {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #fff;\n  padding: 10px;\n  cursor: pointer;\n}\n.sort .sort-container .all-item .sort-item:hover {\n  background-color: #669396;\n}\n\n.sort-category {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.sort-category .category-container {\n  width: 24px;\n  height: 24px;\n  text-transform: none;\n}\n.sort-category .category-container .all {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.sort-category .category-container .all::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.sort-category .category-container .all:checked::before {\n  opacity: 1;\n}\n\n.toys-form {\n  margin: 20px 0;\n}\n.toys-form h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.toys-form .form-container {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.toys-form .form-container .form-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.toys-form .form-container .form-item .form-icon {\n  margin-bottom: 15px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.toys-form .form-container .form-item .form-icon:hover {\n  opacity: 85%;\n  transform: scale(1.1);\n}\n.toys-form .form-container .form-item .form-icon__active {\n  filter: invert(54%) sepia(107%) saturate(901%) hue-rotate(25deg) brightness(140%) contrast(93%);\n}\n.toys-form .form-container .form-item .icon-1 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/bell.svg);\n}\n.toys-form .form-container .form-item .icon-2 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/ball.svg);\n}\n.toys-form .form-container .form-item .icon-3 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/cone.svg);\n}\n.toys-form .form-container .form-item .icon-4 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/snowflake.svg);\n}\n.toys-form .form-container .form-item .icon-5 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% no-repeat url(../assets/images/svg/snow.svg);\n}\n.toys-form .form-container .form-item .icon-6 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/toy.svg);\n}\n.toys-form .form-container .form-item .icon-name {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  color: #fff;\n}\n\n/*Slider*/\nmain .noUi-target {\n  background: #fafafa;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;\n  border: none;\n  cursor: pointer;\n}\n\nmain .noUi-horizontal {\n  height: 2px;\n}\n\nmain .noUi-handle:before,\n.noUi-handle:after {\n  content: none;\n  display: none !important;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  background: #e8e7e6;\n  left: 14px;\n  top: 6px;\n}\n\nmain .noUi-horizontal .noUi-handle {\n  width: 15px;\n  height: 15px;\n  right: -13px;\n  top: -6px;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), radial-gradient(57.23% 248.2% at 107.17% 104.02%, rgba(34, 153, 235, 0.92) 0%, rgba(34, 153, 235, 0.07) 100%), radial-gradient(104.22% 230.94% at -4.22% 0%, #24c5db 3.62%, rgba(36, 197, 219, 0.26) 55.1%);\n  border-radius: 50%;\n  box-shadow: none;\n  border: none;\n  cursor: pointer;\n}\n\nmain .noUi-connect {\n  background: #24c5db;\n}\n\nmain .noUi-base,\n.noUi-connects {\n  width: 97%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\nmain .noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: none;\n  border-radius: none;\n  background: none;\n  color: #fff;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 14px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n}\n\n#range-year .noUi-tooltip {\n  left: 50%;\n}\n\n#range-year {\n  margin-top: 40px;\n}\n\n/*Slider-END*/\n.count-copy {\n  position: relative;\n  margin: 20px 0;\n}\n.count-copy h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.count-copy .count-copy-item {\n  margin-top: 40px;\n}\n.count-copy .min {\n  position: absolute;\n  top: 125%;\n  left: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n.count-copy .max {\n  position: absolute;\n  top: 125%;\n  right: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n\n.year-purchase {\n  position: relative;\n  margin: 40px 0 20px 0;\n}\n.year-purchase h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.year-purchase .year-purchase-item {\n  margin-top: 35px;\n}\n.year-purchase .min {\n  position: absolute;\n  top: 125%;\n  left: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n.year-purchase .max {\n  position: absolute;\n  top: 125%;\n  right: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n\n.color {\n  margin: 40px 0 20px 0;\n}\n.color h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.color .color-container {\n  display: flex;\n  column-gap: 25px;\n  margin-top: 15px;\n}\n.color .color-container .color-item {\n  width: 25px;\n  height: 25px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.color .color-container .color-item:hover {\n  opacity: 75%;\n}\n.color .color-container .color-item__active {\n  box-shadow: 0px 0px 6px 2px rgba(253, 215, 0, 0.8);\n}\n.color .color-container .item-1 {\n  background: #ffffff;\n}\n.color .color-container .item-2 {\n  background: #fdd700;\n}\n.color .color-container .item-3 {\n  background: #fd0000;\n}\n.color .color-container .item-4 {\n  background: #2299eb;\n}\n.color .color-container .item-5 {\n  background: #08aa05;\n}\n\n.size {\n  margin: 20px 0;\n}\n.size h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.size .size-container {\n  display: flex;\n  margin-top: 15px;\n  justify-content: space-between;\n}\n.size .size-container .container-item {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.size .size-container .size-item {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.size .size-container .size-item::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.size .size-container .size-item:checked::before {\n  opacity: 1;\n}\n\n.favorite {\n  margin: 20px 0;\n}\n.favorite .container-favorite {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.favorite .container-favorite .favorite-item {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.favorite .container-favorite .favorite-item::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.favorite .container-favorite .favorite-item:checked::before {\n  opacity: 1;\n}\n\n.sucsses {\n  display: flex;\n  margin: 25px 0;\n  justify-content: center;\n  column-gap: 40px;\n}\n.sucsses .apply-btn {\n  width: 180px;\n  height: 30px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.sucsses .apply-btn:hover {\n  opacity: 75%;\n}\n\n.toys-collection-container {\n  overflow: hidden;\n}\n.toys-collection-container .title {\n  display: flex;\n  column-gap: 50px;\n}\n.toys-collection-container .title h2 {\n  margin: 20px 0 20px 50px;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.toys-collection-container .collection-container {\n  position: relative;\n  height: calc(100% - 48px);\n  overflow: scroll;\n}\n.toys-collection-container .collection-container .message {\n  display: none;\n  width: 270px;\n  border-radius: 6px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .message .message-item {\n  padding: 30px;\n  background: rgba(67, 104, 106, 0.7);\n  color: #fafafa;\n  font-size: 20px;\n}\n.toys-collection-container .collection-container .collection-container-wrapper {\n  display: flex;\n  column-gap: 25px;\n  row-gap: 25px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-right: 10px;\n}\n.toys-collection-container .collection-container .container-content {\n  width: 225px;\n  padding: 10px;\n  margin: 10px 0 50px 0;\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  border: rgba(121, 139, 144, 0.1) solid 5px;\n  backdrop-filter: blur(4px);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .container-content h4 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.toys-collection-container .collection-container .container-content .icon-toy-container {\n  margin-top: 15px;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n.toys-collection-container .collection-container .container-content .icon-toy-container .icon-toy {\n  width: 110px;\n  height: 110px;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .container-content .data-toy {\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n.toys-collection-container .collection-container .container-content .data-toy li {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  color: #ffffff;\n}\n.toys-collection-container .collection-container .active-toy {\n  box-sizing: border-box;\n  border: #4caf50 solid 5px;\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(70, 109, 114, 0.4) 100%);\n  box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\n}\n.toys-collection-container .collection-container .container-content:hover {\n  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.7);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(179, 246, 255, 0.4) 100%);\n}\n.toys-collection-container .collection-container .container-content:hover .icon-toy-container .icon-toy {\n  transform: scale(1.1);\n}\n.toys-collection-container .collection-container .active-toy:hover {\n  box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\n}\n.toys-collection-container .collection-container .message_active {\n  display: block;\n  opacity: 1;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar {\n  width: 12px;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar-track {\n  background: none;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar-thumb {\n  background-color: #43686a;\n  border-radius: 6px;\n}\n\n.christmas-tree {\n  width: 100%;\n  height: 100%;\n}\n\n.christmas-tree-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2.3fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.settings-tree {\n  background: rgba(25, 47, 45, 0.7);\n  padding: 10px;\n  overflow: hidden;\n}\n\n.settings-container {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.settings-container::-webkit-scrollbar {\n  width: 6px;\n}\n\n.settings-container::-webkit-scrollbar-track {\n  background: none;\n}\n\n.settings-container::-webkit-scrollbar-thumb {\n  border-radius: 6px;\n}\n\n.settings-tree-page {\n  justify-content: center;\n  column-gap: 50px;\n}\n\n.christmas-tree-collection h2 {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.christmas-tree-collection .collection-continer {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  column-gap: 10px;\n  row-gap: 10px;\n}\n.christmas-tree-collection .collection-continer .conteiner-content {\n  padding-bottom: 100%;\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  backdrop-filter: blur(4px);\n  border-radius: 10px;\n  transition: 0.3s;\n  border: #172a29 2px solid;\n  cursor: pointer;\n}\n.christmas-tree-collection .collection-continer .conteiner-content .conteiner-item {\n  position: absolute;\n  width: 80%;\n  height: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-1 {\n  background: top 0 left 0/100% 100% url(../assets/images/tree/1.png);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-2 {\n  background: top 0 left 0/100% 100% url(../assets/images/tree/2.png);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-3 {\n  background: top 0 left 0/100% 100% url(../assets/images/tree/3.png);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-4 {\n  background: top 0 left 0/100% 100% url(../assets/images/tree/4.png);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-5 {\n  background: top 0 left 0/100% 100% url(../assets/images/tree/5.png);\n}\n.christmas-tree-collection .collection-continer .conteiner-content .tree-6 {\n  background: top 0 left 0/100% 100% url(../assets/images/tree/6.png);\n}\n.christmas-tree-collection .collection-continer .conteiner-content:hover {\n  box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\n}\n.christmas-tree-background h2 {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.christmas-tree-background .background-continer {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  column-gap: 10px;\n  row-gap: 10px;\n}\n.christmas-tree-background .background-continer .conteiner-content-bg {\n  padding-bottom: 100%;\n  border-radius: 9px;\n  border: #172a29 2px solid;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.christmas-tree-background .background-continer .conteiner-content-bg:hover {\n  box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\n}\n.christmas-tree-background .background-continer .bg-1 {\n  background: url(../assets/images/bg/1.jpg);\n}\n.christmas-tree-background .background-continer .bg-2 {\n  background: url(../assets/images/bg/2.jpg);\n}\n.christmas-tree-background .background-continer .bg-3 {\n  background: url(../assets/images/bg/3.jpg);\n}\n.christmas-tree-background .background-continer .bg-4 {\n  background: url(../assets/images/bg/4.jpg);\n}\n.christmas-tree-background .background-continer .bg-5 {\n  background: url(../assets/images/bg/5.jpg);\n}\n.christmas-tree-background .background-continer .bg-6 {\n  background: url(../assets/images/bg/6.jpg);\n}\n.christmas-tree-background .background-continer .bg-7 {\n  background: url(../assets/images/bg/7.jpg);\n}\n.christmas-tree-background .background-continer .bg-8 {\n  background: url(../assets/images/bg/8.jpg);\n}\n.christmas-tree-background .background-continer .bg-9 {\n  background: url(../assets/images/bg/9.jpg);\n}\n.christmas-tree-background .background-continer .bg-10 {\n  background: url(../assets/images/bg/10.jpg);\n}\n.christmas-tree-background .background-continer .conteiner-content-bg__active {\n  border: #03a9f4 2px solid;\n}\n\n.christmas-tree-garland h2 {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.christmas-tree-garland .garland-conteiner {\n  display: flex;\n  justify-content: space-around;\n}\n.christmas-tree-garland .garland-conteiner .garland-container-item {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: 0.3s;\n  opacity: 0.5;\n}\n.christmas-tree-garland .garland-conteiner .garland-1 {\n  background: linear-gradient(45deg, #dd0d0d, #e5f210, #0ae511);\n  box-shadow: 0px 0px 10px 2px rgba(251, 251, 251, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-1:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #fbfbfb;\n}\n.christmas-tree-garland .garland-conteiner .garland-2 {\n  background: linear-gradient(45deg, #f60707, #cc4c3f, #df7048);\n  box-shadow: 0px 0px 10px 2px rgba(255, 1, 1, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-2:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #ff0101;\n}\n.christmas-tree-garland .garland-conteiner .garland-3 {\n  background: linear-gradient(45deg, #0f00ff, #252ac3, #1b0d6f);\n  box-shadow: 0px 0px 10px 2px rgba(11, 60, 247, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-3:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #0b3cf7;\n}\n.christmas-tree-garland .garland-conteiner .garland-4 {\n  background: linear-gradient(45deg, #0fff00, #25c32a, #0d6f37);\n  box-shadow: 0px 0px 10px 2px rgba(35, 247, 11, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-4:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #23f70b;\n}\n.christmas-tree-garland .garland-conteiner .garland-5 {\n  background: linear-gradient(45deg, #e5ff00, #b3c325, #6f6c0d);\n  box-shadow: 0px 0px 10px 2px rgba(215, 227, 16, 0.3);\n}\n.christmas-tree-garland .garland-conteiner .garland-5:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #d7e310;\n}\n.christmas-tree-garland .garland-conteiner .garland-item__active {\n  opacity: 1;\n  box-shadow: 0px 0px 15px 2px #fbfbfb;\n}\n.christmas-tree-garland .garland-conteiner .switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n}\n.christmas-tree-garland .garland-conteiner .switch input {\n  display: none;\n}\n.christmas-tree-garland .garland-conteiner .switch .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.christmas-tree-garland .garland-conteiner .switch .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 13px;\n  width: 13px;\n  left: 4px;\n  bottom: 4px;\n  background-color: #f6d209;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.christmas-tree-garland .garland-conteiner .switch input:checked + .slider {\n  background-color: #0e6a62;\n}\n.christmas-tree-garland .garland-conteiner .switch input:focus + .slider {\n  box-shadow: 0 0 1px #0e6a62;\n}\n.christmas-tree-garland .garland-conteiner .switch input:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  -ms-transform: translateX(20px);\n  transform: translateX(20px);\n}\n.christmas-tree-garland .garland-conteiner .switch .slider.round {\n  border-radius: 34px;\n}\n.christmas-tree-garland .garland-conteiner .switch .slider.round:before {\n  border-radius: 50%;\n}\n\n.main-tree {\n  height: calc(100vh - 150px);\n  position: relative;\n}\n.main-tree .christmas-bg-current {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: center/cover url(../assets/images/bg/1.jpg);\n}\n.main-tree .christmas-tree-carrent {\n  position: absolute;\n  bottom: 1%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 300px;\n  height: 450px;\n  z-index: 10;\n}\n\n.toys-tree {\n  background: rgba(25, 47, 45, 0.7);\n}\n.toys-tree .title h2 {\n  margin: 20px 0 20px 50px;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.toys-tree-container {\n  display: grid;\n  padding: 5px;\n  width: 100%;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  column-gap: 5px;\n  row-gap: 5px;\n}\n.toys-tree-container .toy-for-tree {\n  position: relative;\n  padding-bottom: 100%;\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  backdrop-filter: blur(4px);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  transition: 0.3s;\n  cursor: pointer;\n  border: #172a29 2px solid;\n}\n.toys-tree-container .toy-for-tree .toy-icon {\n  position: absolute;\n  width: 65%;\n  height: 65%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.toys-tree-container .toy-for-tree .toy-count {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  right: 0;\n  bottom: 0;\n  width: 20px;\n  height: 20px;\n  border-top-left-radius: 50%;\n  background-color: crimson;\n  color: #fff;\n  font-size: 11px;\n}\n.toys-tree-container .toy-for-tree:hover {\n  box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\n}\n\n.hide {\n  display: none;\n}\n\n.garland {\n  display: none;\n  position: absolute;\n  bottom: -4%;\n  left: 50%;\n  transform: translateX(-50%);\n  --red: #ff2c2c;\n  --yellow: #ffeb00;\n  --green: #00ff5d;\n  --blue: #0095ff;\n  --speed: 2s;\n  z-index: 15;\n  pointer-events: none;\n}\n\n.red {\n  fill: #f80606;\n  animation: var(--speed) alternate 0s infinite blinkRedRed;\n}\n\n.red_1 {\n  fill: #f80606;\n  animation: var(--speed) alternate 0s infinite blinkRed_1;\n}\n\n.red_2 {\n  fill: #f7b1b1;\n  animation: var(--speed) alternate 0s infinite blinkRed_2;\n}\n\n.yellow {\n  fill: var(--yellow);\n  animation: var(--speed) alternate 0s infinite blinkYellow;\n}\n\n.yellow_1 {\n  fill: var(--yellow);\n  animation: var(--speed) alternate 0s infinite blinkYellow_1;\n}\n\n.yellow_2 {\n  fill: var(--yellow);\n  animation: var(--speed) alternate 0s infinite blinkYellow_2;\n}\n\n.blue {\n  fill: var(--blue);\n  animation: var(--speed) alternate 0s infinite blinkBlue;\n}\n\n.blue_1 {\n  fill: var(--blue);\n  animation: var(--speed) alternate 0s infinite blinkBlue_1;\n}\n\n.blue_2 {\n  fill: var(--blue);\n  animation: var(--speed) alternate 0s infinite blinkBlue_2;\n}\n\n.green {\n  fill: var(--green);\n  animation: var(--speed) alternate 0s infinite blinkGreen;\n}\n\n.green_1 {\n  fill: var(--green);\n  animation: var(--speed) alternate 0s infinite blinkGreen_1;\n}\n\n.green_2 {\n  fill: var(--green);\n  animation: var(--speed) alternate 0s infinite blinkGreen_2;\n}\n\n@keyframes blinkRed {\n  0% {\n    fill: var(--red);\n  }\n  25% {\n    fill: var(--blue);\n  }\n  50% {\n    fill: var(--green);\n  }\n  75% {\n    fill: var(--yellow);\n  }\n}\n@keyframes blinkRed_1 {\n  0% {\n    fill: #f80606;\n  }\n  25% {\n    fill: #f7b1b1;\n  }\n  50% {\n    fill: #f80606;\n  }\n  75% {\n    fill: #f7b1b1;\n  }\n}\n@keyframes blinkRed_2 {\n  0% {\n    fill: #f7b1b1;\n  }\n  25% {\n    fill: #f80606;\n  }\n  50% {\n    fill: #f7b1b1;\n  }\n  75% {\n    fill: #f80606;\n  }\n}\n@keyframes blinkYellow {\n  0% {\n    fill: var(--yellow);\n  }\n  25% {\n    fill: var(--red);\n  }\n  50% {\n    fill: var(--blue);\n  }\n  75% {\n    fill: var(--green);\n  }\n}\n@keyframes blinkYellow_1 {\n  0% {\n    fill: #ffd904;\n  }\n  25% {\n    fill: #f7f3cd;\n  }\n  50% {\n    fill: #ffd904;\n  }\n  75% {\n    fill: #f7f3cd;\n  }\n}\n@keyframes blinkYellow_2 {\n  0% {\n    fill: #f7f3cd;\n  }\n  25% {\n    fill: #ffd904;\n  }\n  50% {\n    fill: #f7f3cd;\n  }\n  75% {\n    fill: #ffd904;\n  }\n}\n@keyframes blinkBlue {\n  0% {\n    fill: var(--blue);\n  }\n  25% {\n    fill: var(--green);\n  }\n  50% {\n    fill: var(--yellow);\n  }\n  75% {\n    fill: var(--red);\n  }\n}\n@keyframes blinkBlue_1 {\n  0% {\n    fill: #1100ff;\n  }\n  25% {\n    fill: #92cdf7;\n  }\n  50% {\n    fill: #1100ff;\n  }\n  75% {\n    fill: #92cdf7;\n  }\n}\n@keyframes blinkBlue_2 {\n  0% {\n    fill: #92cdf7;\n  }\n  25% {\n    fill: #1100ff;\n  }\n  50% {\n    fill: #92cdf7;\n  }\n  75% {\n    fill: #1100ff;\n  }\n}\n@keyframes blinkGreen {\n  0% {\n    fill: var(--green);\n  }\n  25% {\n    fill: var(--yellow);\n  }\n  50% {\n    fill: var(--red);\n  }\n  75% {\n    fill: var(--blue);\n  }\n}\n@keyframes blinkGreen_1 {\n  0% {\n    fill: #28c700;\n  }\n  25% {\n    fill: #bcffd5;\n  }\n  50% {\n    fill: #28c700;\n  }\n  75% {\n    fill: #bcffd5;\n  }\n}\n@keyframes blinkGreen_2 {\n  0% {\n    fill: #bcffd5;\n  }\n  25% {\n    fill: #28c700;\n  }\n  50% {\n    fill: #bcffd5;\n  }\n  75% {\n    fill: #28c700;\n  }\n}","/*Обнуление*/\r\n*{\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n}\r\n*,*:before,*:after{\r\n\t-moz-box-sizing: border-box;\r\n\t-webkit-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,:active{outline: none;}\r\na:focus,a:active{outline: none;}\r\nnav,footer,header,aside{display: block;}\r\nhtml,body{\r\n\t// height: 100%;\r\n\twidth: 100%;\r\n\tfont-size: 100%;\r\n\tline-height: 1;\r\n\tfont-size: 10px;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n}\r\ninput,button,textarea{font-family:inherit;}\r\ninput::-ms-clear{display: none;}\r\nbutton{cursor: pointer;}\r\nbutton::-moz-focus-inner {padding:0;border:0;}\r\na, a:visited{text-decoration: none;}\r\na:hover{text-decoration: none;}\r\nul li{list-style: none;}\r\nimg{vertical-align: top;}\r\nh1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}\r\n/*--------------------*/","@font-face {\r\n  font-family: 'Neucha-Regular';\r\n  src: url('../assets/fonts/Neucha-Regular.ttf');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Steppe';\r\n  src: url('../assets/fonts/Steppe.ttf');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n","header {\r\n  width: 100vw;\r\n  height: 50px;\r\n  background-color: #192f2d;\r\n}\r\n\r\n.header-container {\r\n  display: flex;\r\n  align-items: center;\r\n  column-gap: 30px;\r\n  padding-top: 5px;\r\n  .logo {\r\n    width: 30px;\r\n    height: 40px;\r\n    transition: 0.3s;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/svg/tree.svg);\r\n    cursor: pointer;\r\n  }\r\n\r\n  .logo:hover {\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/svg/tree-active.svg);\r\n    transform: scale(1.05);\r\n  }\r\n\r\n  .page {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 25px;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .page:hover {\r\n    color: #009688;\r\n    transform: scale(1.05);\r\n  }\r\n}\r\n\r\nmain {\r\n  position: relative;\r\n  width: 100vw;\r\n  height: calc(100vh - 150px);\r\n  background: top 0 left 0 / 100% 100% url(../assets/images/bg.jpg);\r\n}\r\n\r\n.start-game {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n// .main-container {\r\n//   background: #192f2d;\r\n// }\r\n\r\n.wrapper {\r\n  width: calc(100% - 100px);\r\n  height: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.start-game {\r\n  .toys-circle-left {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 20%;\r\n    width: 21.771vw;\r\n    padding-bottom: 39.886%;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/1.png);\r\n  }\r\n\r\n  .toys-circle-right {\r\n    position: absolute;\r\n    top: 10%;\r\n    right: 28%;\r\n    width: 12.771vw;\r\n    padding-bottom: 23.334%;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/2.png);\r\n  }\r\n\r\n  .title-conteiner {\r\n    h1 {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      display: inline-flex;\r\n      padding: 67px 85px;\r\n      font-family: 'Neucha-Regular', sans-serif;\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 53px;\r\n      line-height: 58px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      color: #fff;\r\n      letter-spacing: 0.05em;\r\n      background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 30px;\r\n    }\r\n  }\r\n\r\n  .start {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 320px;\r\n    height: 54px;\r\n    top: 70%;\r\n    left: 50%;\r\n    font-family: 'Steppe';\r\n    font-size: 24px;\r\n    color: #fff;\r\n    letter-spacing: 0.05em;\r\n    transform: translateX(-50%);\r\n    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\r\n    backdrop-filter: blur(31px);\r\n    border-radius: 30px;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .start:hover {\r\n    opacity: 80%;\r\n  }\r\n}\r\n\r\nfooter {\r\n  width: 100vw;\r\n  height: 100px;\r\n  background-color: #192f2d;\r\n}\r\n\r\n.footer-container {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  .left-element {\r\n    p {\r\n      font-family: 'Steppe';\r\n      font-size: 18px;\r\n      color: #fff;\r\n      letter-spacing: 0.05em;\r\n      opacity: 70%;\r\n      span {\r\n        margin-left: 20px;\r\n      }\r\n    }\r\n  }\r\n  .right-element {\r\n    a {\r\n      display: block;\r\n      width: 180px;\r\n      height: 60px;\r\n      background: top 0 left 0 / 100% 100% url(../assets/images/rs_school_js.png);\r\n    }\r\n  }\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .wrapper {\r\n    width: calc(100% - 40px);\r\n    height: 100%;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n",".toys {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.toys-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: 450px 1fr;\r\n  grid-template-rows: 1fr;\r\n  column-gap: 10px;\r\n}\r\n\r\n.filter-conteiner {\r\n  overflow: hidden;\r\n}\r\n\r\n.filter-container-wrapper {\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.filter-container-wrapper::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.filter-container-wrapper::-webkit-scrollbar-track {\r\n  background: none;\r\n}\r\n\r\n.filter-container-wrapper::-webkit-scrollbar-thumb {\r\n  border-radius: 6px;\r\n}\r\n\r\n.filter-container-content {\r\n  margin-right: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.settings {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  margin: 20px 0;\r\n  .audio {\r\n    width: 36px;\r\n    height: 36px;\r\n    transition: 00.3s;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/svg/audio.svg);\r\n  }\r\n  .audio:hover {\r\n    opacity: 75%;\r\n  }\r\n\r\n  .audio_active {\r\n    filter: invert(54%) sepia(107%) saturate(901%) hue-rotate(25deg) brightness(140%) contrast(93%);\r\n  }\r\n\r\n  .snow {\r\n    width: 36px;\r\n    height: 36px;\r\n    transition: 00.3s;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/svg/snow.svg);\r\n  }\r\n  .snow:hover {\r\n    opacity: 75%;\r\n  }\r\n\r\n  .search {\r\n    position: relative;\r\n    .search-item {\r\n      width: 260px;\r\n      height: 36px;\r\n      padding: 0 50px 0 20px;\r\n      font-family: 'Steppe';\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 14px;\r\n      letter-spacing: 0.05em;\r\n      color: #fff;\r\n      background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 30px;\r\n      border: 1px solid #03a9f4;\r\n    }\r\n  }\r\n  .clean-icon {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 15px;\r\n    transform: translateY(-50%);\r\n    width: 15px;\r\n    height: 15px;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/svg/close.svg);\r\n  }\r\n  .search-icon:hover {\r\n    opacity: 75%;\r\n  }\r\n}\r\n\r\n.sort {\r\n  display: flex;\r\n  column-gap: 40px;\r\n  align-items: center;\r\n  p {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n  }\r\n\r\n  .sort-container {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    width: 270px;\r\n    height: 36px;\r\n    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\r\n    backdrop-filter: blur(31px);\r\n    border-radius: 30px;\r\n    border: 1px solid #03a9f4;\r\n    z-index: 5;\r\n    p {\r\n      font-size: 16px;\r\n      text-transform: none;\r\n      padding-left: 20px;\r\n    }\r\n\r\n    .choose-item {\r\n      position: absolute;\r\n      top: 50%;\r\n      right: 15px;\r\n      transform: translateY(-50%);\r\n      width: 30px;\r\n      height: 20px;\r\n      transition: 00.3s;\r\n      background: top 0 left 0 / 100% 100% url(../assets/images/svg/arrow-down.svg);\r\n    }\r\n    .choose-item:hover {\r\n      opacity: 75%;\r\n    }\r\n\r\n    .all-item {\r\n      position: absolute;\r\n      width: 90%;\r\n      left: 5%;\r\n      top: 110%;\r\n      border-radius: 6px;\r\n      border: 1px solid #2196f3;\r\n      background-color: #3e5857;\r\n      .sort-item {\r\n        font-family: 'Neucha-Regular';\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        font-size: 14px;\r\n        letter-spacing: 0.05em;\r\n        color: #fff;\r\n        padding: 10px;\r\n        cursor: pointer;\r\n      }\r\n\r\n      .sort-item:hover {\r\n        background-color: #669396;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.sort-category {\r\n  margin: 20px 0;\r\n  font-family: 'Neucha-Regular';\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 18px;\r\n  letter-spacing: 0.05em;\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n  .category-container {\r\n    width: 24px;\r\n    height: 24px;\r\n    text-transform: none;\r\n    .all {\r\n      -webkit-appearance: none;\r\n      -moz-appearance: none;\r\n      appearance: none;\r\n      border: 1px solid #d6d6cd;\r\n      width: 25px;\r\n      height: 25px;\r\n      margin-right: 15px;\r\n      cursor: pointer;\r\n      position: relative;\r\n      top: 7px;\r\n      background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 5px;\r\n    }\r\n    .all::before {\r\n      content: '🗸';\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n      position: absolute;\r\n      right: 50%;\r\n      bottom: 50%;\r\n      transform: translate(50%, 50%);\r\n      opacity: 0;\r\n      transition: 0.1s ease-in;\r\n    }\r\n    .all:checked::before {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n.toys-form {\r\n  margin: 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n\r\n  .form-container {\r\n    margin-top: 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    .form-item {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      .form-icon {\r\n        margin-bottom: 15px;\r\n        transition: 0.3s;\r\n        cursor: pointer;\r\n      }\r\n      .form-icon:hover {\r\n        opacity: 85%;\r\n        transform: scale(1.1);\r\n      }\r\n      .form-icon__active {\r\n        filter: invert(54%) sepia(107%) saturate(901%) hue-rotate(25deg) brightness(140%) contrast(93%);\r\n      }\r\n\r\n      .icon-1 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/bell.svg);\r\n      }\r\n      .icon-2 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/ball.svg);\r\n      }\r\n      .icon-3 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/cone.svg);\r\n      }\r\n      .icon-4 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/snowflake.svg);\r\n      }\r\n      .icon-5 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% no-repeat url(../assets/images/svg/snow.svg);\r\n      }\r\n      .icon-6 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/toy.svg);\r\n      }\r\n\r\n      .icon-name {\r\n        font-family: 'Steppe';\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        font-size: 12px;\r\n        line-height: 14px;\r\n        text-align: center;\r\n        color: #fff;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/*Slider*/\r\n\r\nmain .noUi-target {\r\n  background: #fafafa;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nmain .noUi-horizontal {\r\n  height: 2px;\r\n}\r\n\r\nmain .noUi-handle:before,\r\n.noUi-handle:after {\r\n  content: none;\r\n  display: none !important;\r\n  position: absolute;\r\n  height: 0px;\r\n  width: 0px;\r\n  background: #e8e7e6;\r\n  left: 14px;\r\n  top: 6px;\r\n}\r\n\r\nmain .noUi-horizontal .noUi-handle {\r\n  width: 15px;\r\n  height: 15px;\r\n  right: -13px;\r\n  top: -6px;\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),\r\n    radial-gradient(57.23% 248.2% at 107.17% 104.02%, rgba(34, 153, 235, 0.92) 0%, rgba(34, 153, 235, 0.07) 100%),\r\n    radial-gradient(104.22% 230.94% at -4.22% 0%, #24c5db 3.62%, rgba(36, 197, 219, 0.26) 55.1%);\r\n  border-radius: 50%;\r\n  box-shadow: none;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nmain .noUi-connect {\r\n  background: #24c5db;\r\n}\r\n\r\nmain .noUi-base,\r\n.noUi-connects {\r\n  width: 97%;\r\n  height: 100%;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\nmain .noUi-tooltip {\r\n  display: block;\r\n  position: absolute;\r\n  border: none;\r\n  border-radius: none;\r\n  background: none;\r\n  color: #fff;\r\n  padding: 5px;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  font-size: 14px;\r\n  font-family: 'Steppe';\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n#range-year .noUi-tooltip {\r\n  left: 50%;\r\n}\r\n\r\n#range-year {\r\n  margin-top: 40px;\r\n}\r\n\r\n/*Slider-END*/\r\n\r\n.count-copy {\r\n  position: relative;\r\n  margin: 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n  .count-copy-item {\r\n    margin-top: 40px;\r\n  }\r\n\r\n  .min {\r\n    position: absolute;\r\n    top: 125%;\r\n    left: 0;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.05em;\r\n    color: #ffffff;\r\n  }\r\n  .max {\r\n    position: absolute;\r\n    top: 125%;\r\n    right: 0;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.05em;\r\n    color: #ffffff;\r\n  }\r\n}\r\n\r\n.year-purchase {\r\n  position: relative;\r\n  margin: 40px 0 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n  .year-purchase-item {\r\n    margin-top: 35px;\r\n  }\r\n\r\n  .min {\r\n    position: absolute;\r\n    top: 125%;\r\n    left: 0;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.05em;\r\n    color: #ffffff;\r\n  }\r\n  .max {\r\n    position: absolute;\r\n    top: 125%;\r\n    right: 0;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.05em;\r\n    color: #ffffff;\r\n  }\r\n}\r\n\r\n.color {\r\n  margin: 40px 0 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n\r\n  .color-container {\r\n    display: flex;\r\n    column-gap: 25px;\r\n    margin-top: 15px;\r\n    .color-item {\r\n      width: 25px;\r\n      height: 25px;\r\n      border-radius: 5px;\r\n      cursor: pointer;\r\n      transition: 0.3s;\r\n    }\r\n    .color-item:hover {\r\n      opacity: 75%;\r\n    }\r\n\r\n    .color-item__active {\r\n      box-shadow: 0px 0px 6px 2px rgba(253, 215, 0, 0.8);\r\n    }\r\n    .item-1 {\r\n      background: #ffffff;\r\n    }\r\n    .item-2 {\r\n      background: #fdd700;\r\n    }\r\n    .item-3 {\r\n      background: #fd0000;\r\n    }\r\n    .item-4 {\r\n      background: #2299eb;\r\n    }\r\n    .item-5 {\r\n      background: #08aa05;\r\n    }\r\n  }\r\n}\r\n\r\n.size {\r\n  margin: 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n\r\n  .size-container {\r\n    display: flex;\r\n    margin-top: 15px;\r\n    justify-content: space-between;\r\n    .container-item {\r\n      font-family: 'Steppe';\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 14px;\r\n      letter-spacing: 0.02em;\r\n      text-align: center;\r\n      color: #ffffff;\r\n    }\r\n\r\n    .size-item {\r\n      -webkit-appearance: none;\r\n      -moz-appearance: none;\r\n      appearance: none;\r\n      border: 1px solid #d6d6cd;\r\n      width: 25px;\r\n      height: 25px;\r\n      margin-right: 15px;\r\n      cursor: pointer;\r\n      position: relative;\r\n      top: 7px;\r\n      background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 5px;\r\n    }\r\n    .size-item::before {\r\n      content: '🗸';\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n      position: absolute;\r\n      right: 50%;\r\n      bottom: 50%;\r\n      transform: translate(50%, 50%);\r\n      opacity: 0;\r\n      transition: 0.1s ease-in;\r\n    }\r\n    .size-item:checked::before {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n.favorite {\r\n  margin: 20px 0;\r\n  .container-favorite {\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.02em;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    .favorite-item {\r\n      -webkit-appearance: none;\r\n      -moz-appearance: none;\r\n      appearance: none;\r\n      border: 1px solid #d6d6cd;\r\n      width: 25px;\r\n      height: 25px;\r\n      margin-right: 15px;\r\n      cursor: pointer;\r\n      position: relative;\r\n      top: 7px;\r\n      background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 5px;\r\n    }\r\n    .favorite-item::before {\r\n      content: '🗸';\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n      position: absolute;\r\n      right: 50%;\r\n      bottom: 50%;\r\n      transform: translate(50%, 50%);\r\n      opacity: 0;\r\n      transition: 0.1s ease-in;\r\n    }\r\n    .favorite-item:checked::before {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n.sucsses {\r\n  display: flex;\r\n  margin: 25px 0;\r\n  justify-content: center;\r\n  column-gap: 40px;\r\n  .apply-btn {\r\n    width: 180px;\r\n    height: 30px;\r\n    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\r\n    backdrop-filter: blur(31px);\r\n    border-radius: 30px;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 12px;\r\n    letter-spacing: 0.02em;\r\n    text-align: center;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .apply-btn:hover {\r\n    opacity: 75%;\r\n  }\r\n}\r\n\r\n.toys-collection-container {\r\n  overflow: hidden;\r\n  .title {\r\n    display: flex;\r\n    column-gap: 50px;\r\n    h2 {\r\n      margin: 20px 0 20px 50px;\r\n      font-family: 'Neucha-Regular';\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 25px;\r\n      letter-spacing: 0.05em;\r\n      text-transform: uppercase;\r\n      color: #fff;\r\n      transition: 0.3s;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n  .collection-container {\r\n    position: relative;\r\n    height: calc(100% - 48px);\r\n    overflow: scroll;\r\n\r\n    .message {\r\n      display: none;\r\n      width: 270px;\r\n      border-radius: 6px;\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      transform: translate(-50%, -50%);\r\n      opacity: 0;\r\n      transition: 0.5s;\r\n      .message-item {\r\n        padding: 30px;\r\n        background: rgba(67, 104, 106, 0.7);\r\n        color: #fafafa;\r\n        font-size: 20px;\r\n      }\r\n    }\r\n    .collection-container-wrapper {\r\n      display: flex;\r\n      column-gap: 25px;\r\n      row-gap: 25px;\r\n      flex-wrap: wrap;\r\n      justify-content: center;\r\n      margin-right: 10px;\r\n    }\r\n    .container-content {\r\n      width: 225px;\r\n      padding: 10px;\r\n      margin: 10px 0 50px 0;\r\n      background: radial-gradient(\r\n        109.56% 109.56% at 0% -2.94%,\r\n        rgba(255, 255, 255, 0.5) 0%,\r\n        rgba(179, 246, 255, 0.5) 100%\r\n      );\r\n      border: rgba(121, 139, 144, 0.1) solid 5px;\r\n      backdrop-filter: blur(4px);\r\n      border-radius: 10px;\r\n      cursor: pointer;\r\n      transition: 0.5s;\r\n      h4 {\r\n        font-family: 'Neucha-Regular';\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        font-size: 16px;\r\n        letter-spacing: 0.05em;\r\n        color: #fff;\r\n      }\r\n      .icon-toy-container {\r\n        margin-top: 15px;\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: center;\r\n        .icon-toy {\r\n          width: 110px;\r\n          height: 110px;\r\n          transition: 0.5s;\r\n        }\r\n      }\r\n      .data-toy {\r\n        margin-top: 15px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        row-gap: 10px;\r\n        li {\r\n          font-family: 'Steppe';\r\n          font-style: normal;\r\n          font-weight: normal;\r\n          font-size: 14px;\r\n          letter-spacing: 0.02em;\r\n          color: #ffffff;\r\n        }\r\n      }\r\n    }\r\n\r\n    .active-toy {\r\n      box-sizing: border-box;\r\n      // padding: 5px 5px;\r\n      border: #4caf50 solid 5px;\r\n      background: radial-gradient(\r\n        109.56% 109.56% at 0% -2.94%,\r\n        rgba(255, 255, 255, 0.4) 0%,\r\n        rgba(70, 109, 114, 0.4) 100%\r\n      );\r\n      box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\r\n    }\r\n\r\n    .container-content:hover {\r\n      box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.7);\r\n      background: radial-gradient(\r\n        109.56% 109.56% at 0% -2.94%,\r\n        rgba(255, 255, 255, 0.4) 0%,\r\n        rgba(179, 246, 255, 0.4) 100%\r\n      );\r\n      .icon-toy-container {\r\n        .icon-toy {\r\n          transform: scale(1.1);\r\n        }\r\n      }\r\n    }\r\n    .active-toy:hover {\r\n      box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\r\n    }\r\n\r\n    .message_active {\r\n      display: block;\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  .collection-container::-webkit-scrollbar {\r\n    width: 12px;\r\n  }\r\n\r\n  .collection-container::-webkit-scrollbar-track {\r\n    background: none;\r\n  }\r\n\r\n  .collection-container::-webkit-scrollbar-thumb {\r\n    background-color: #43686a;\r\n    border-radius: 6px;\r\n  }\r\n}\r\n",".christmas-tree {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.christmas-tree-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 2.3fr 1fr;\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n.settings-tree {\r\n  background: rgba(25, 47, 45, 0.7);\r\n  padding: 10px;\r\n  overflow: hidden;\r\n}\r\n\r\n.settings-container {\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.settings-container::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.settings-container::-webkit-scrollbar-track {\r\n  background: none;\r\n}\r\n\r\n.settings-container::-webkit-scrollbar-thumb {\r\n  border-radius: 6px;\r\n}\r\n\r\n.settings-tree-page {\r\n  justify-content: center;\r\n  column-gap: 50px;\r\n}\r\n\r\n.christmas-tree-collection {\r\n  h2 {\r\n    margin: 20px 0;\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n  }\r\n  .collection-continer {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    column-gap: 10px;\r\n    row-gap: 10px;\r\n    .conteiner-content {\r\n      padding-bottom: 100%;\r\n      background: radial-gradient(\r\n        109.56% 109.56% at 0% -2.94%,\r\n        rgba(255, 255, 255, 0.5) 0%,\r\n        rgba(179, 246, 255, 0.5) 100%\r\n      );\r\n      backdrop-filter: blur(4px);\r\n      border-radius: 10px;\r\n      transition: 0.3s;\r\n      border: rgb(23 42 41) 2px solid;\r\n      cursor: pointer;\r\n      .conteiner-item {\r\n        position: absolute;\r\n        width: 80%;\r\n        height: 80%;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n      }\r\n\r\n      .tree-1 {\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/tree/1.png);\r\n      }\r\n      .tree-2 {\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/tree/2.png);\r\n      }\r\n      .tree-3 {\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/tree/3.png);\r\n      }\r\n      .tree-4 {\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/tree/4.png);\r\n      }\r\n      .tree-5 {\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/tree/5.png);\r\n      }\r\n      .tree-6 {\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/tree/6.png);\r\n      }\r\n    }\r\n\r\n    .conteiner-content:hover {\r\n      box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\r\n    }\r\n\r\n    .conteiner-content__active {\r\n    }\r\n  }\r\n}\r\n\r\n.christmas-tree-background {\r\n  h2 {\r\n    margin: 20px 0;\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n  }\r\n  .background-continer {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    column-gap: 10px;\r\n    row-gap: 10px;\r\n    .conteiner-content-bg {\r\n      padding-bottom: 100%;\r\n      border-radius: 9px;\r\n      border: rgb(23 42 41) 2px solid;\r\n      transition: 0.3s;\r\n      cursor: pointer;\r\n    }\r\n\r\n    .conteiner-content-bg:hover {\r\n      box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\r\n    }\r\n\r\n    .bg-1 {\r\n      background: url(../assets/images/bg/1.jpg);\r\n    }\r\n    .bg-2 {\r\n      background: url(../assets/images/bg/2.jpg);\r\n    }\r\n    .bg-3 {\r\n      background: url(../assets/images/bg/3.jpg);\r\n    }\r\n    .bg-4 {\r\n      background: url(../assets/images/bg/4.jpg);\r\n    }\r\n    .bg-5 {\r\n      background: url(../assets/images/bg/5.jpg);\r\n    }\r\n    .bg-6 {\r\n      background: url(../assets/images/bg/6.jpg);\r\n    }\r\n    .bg-7 {\r\n      background: url(../assets/images/bg/7.jpg);\r\n    }\r\n    .bg-8 {\r\n      background: url(../assets/images/bg/8.jpg);\r\n    }\r\n    .bg-9 {\r\n      background: url(../assets/images/bg/9.jpg);\r\n    }\r\n    .bg-10 {\r\n      background: url(../assets/images/bg/10.jpg);\r\n    }\r\n\r\n    .conteiner-content-bg__active {\r\n      border: #03a9f4 2px solid;\r\n    }\r\n  }\r\n}\r\n\r\n.christmas-tree-garland {\r\n  h2 {\r\n    margin: 20px 0;\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n  }\r\n  .garland-conteiner {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    .garland-container-item {\r\n      width: 20px;\r\n      height: 20px;\r\n      border-radius: 50%;\r\n      cursor: pointer;\r\n      transition: 0.3s;\r\n      opacity: 0.5;\r\n    }\r\n\r\n    .garland-1 {\r\n      background: linear-gradient(45deg, rgb(221, 13, 13), rgb(229, 242, 16), rgb(10, 229, 17));\r\n      box-shadow: 0px 0px 10px 2px rgba(251, 251, 251, 0.3);\r\n    }\r\n    .garland-1:hover {\r\n      opacity: 1;\r\n      box-shadow: 0px 0px 15px 2px rgba(251, 251, 251, 1);\r\n    }\r\n    .garland-2 {\r\n      background: linear-gradient(45deg, rgb(246, 7, 7), rgb(204, 76, 63), rgb(223, 112, 72));\r\n      box-shadow: 0px 0px 10px 2px rgba(255, 1, 1, 0.3);\r\n    }\r\n    .garland-2:hover {\r\n      opacity: 1;\r\n      box-shadow: 0px 0px 15px 2px rgb(255, 1, 1);\r\n    }\r\n    .garland-3 {\r\n      background: linear-gradient(45deg, rgb(15, 0, 255), rgb(37, 42, 195), rgb(27, 13, 111));\r\n      box-shadow: 0px 0px 10px 2px rgba(11, 60, 247, 0.3);\r\n    }\r\n    .garland-3:hover {\r\n      opacity: 1;\r\n      box-shadow: 0px 0px 15px 2px rgba(11, 60, 247, 1);\r\n    }\r\n    .garland-4 {\r\n      background: linear-gradient(45deg, rgb(15, 255, 0), rgb(37, 195, 42), rgb(13, 111, 55));\r\n      box-shadow: 0px 0px 10px 2px rgba(35, 247, 11, 0.3);\r\n    }\r\n    .garland-4:hover {\r\n      opacity: 1;\r\n      box-shadow: 0px 0px 15px 2px rgba(35, 247, 11, 1);\r\n    }\r\n    .garland-5 {\r\n      background: linear-gradient(45deg, rgb(229, 255, 0), rgb(179, 195, 37), rgb(111, 108, 13));\r\n      box-shadow: 0px 0px 10px 2px rgba(215, 227, 16, 0.3);\r\n    }\r\n    .garland-5:hover {\r\n      opacity: 1;\r\n      box-shadow: 0px 0px 15px 2px rgba(215, 227, 16, 1);\r\n    }\r\n\r\n    .garland-item__active {\r\n      opacity: 1;\r\n      box-shadow: 0px 0px 15px 2px rgba(251, 251, 251, 1);\r\n    }\r\n\r\n    .switch {\r\n      position: relative;\r\n      display: inline-block;\r\n      width: 40px;\r\n      height: 20px;\r\n      input {\r\n        display: none;\r\n      }\r\n\r\n      .slider {\r\n        position: absolute;\r\n        cursor: pointer;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        background-color: #ccc;\r\n        -webkit-transition: 0.4s;\r\n        transition: 0.4s;\r\n      }\r\n\r\n      .slider:before {\r\n        position: absolute;\r\n        content: '';\r\n        height: 13px;\r\n        width: 13px;\r\n        left: 4px;\r\n        bottom: 4px;\r\n        background-color: #f6d209;\r\n        -webkit-transition: 0.4s;\r\n        transition: 0.4s;\r\n      }\r\n\r\n      input:checked + .slider {\r\n        background-color: #0e6a62;\r\n      }\r\n\r\n      input:focus + .slider {\r\n        box-shadow: 0 0 1px #0e6a62;\r\n      }\r\n\r\n      input:checked + .slider:before {\r\n        -webkit-transform: translateX(20px);\r\n        -ms-transform: translateX(20px);\r\n        transform: translateX(20px);\r\n      }\r\n\r\n      .slider.round {\r\n        border-radius: 34px;\r\n      }\r\n\r\n      .slider.round:before {\r\n        border-radius: 50%;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.main-tree {\r\n  height: calc(100vh - 150px);\r\n  position: relative;\r\n  .christmas-bg-current {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: center / cover url(../assets/images/bg/1.jpg);\r\n  }\r\n\r\n  .christmas-tree-carrent {\r\n    position: absolute;\r\n    bottom: 1%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 300px;\r\n    height: 450px;\r\n    z-index: 10;\r\n  }\r\n}\r\n\r\n.toys-tree {\r\n  background: rgba(25, 47, 45, 0.7);\r\n  .title {\r\n    h2 {\r\n      margin: 20px 0 20px 50px;\r\n      font-family: 'Neucha-Regular';\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 25px;\r\n      letter-spacing: 0.05em;\r\n      text-transform: uppercase;\r\n      color: #fff;\r\n      transition: 0.3s;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n}\r\n\r\n.toys-tree-container {\r\n  display: grid;\r\n  padding: 5px;\r\n  width: 100%;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-template-rows: repeat(5, 1fr);\r\n  column-gap: 5px;\r\n  row-gap: 5px;\r\n  .toy-for-tree {\r\n    position: relative;\r\n    padding-bottom: 100%;\r\n    background: radial-gradient(\r\n      109.56% 109.56% at 0% -2.94%,\r\n      rgba(255, 255, 255, 0.5) 0%,\r\n      rgba(179, 246, 255, 0.5) 100%\r\n    );\r\n    backdrop-filter: blur(4px);\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    border-bottom-left-radius: 10px;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n    border: rgb(23 42 41) 2px solid;\r\n    .toy-icon {\r\n      position: absolute;\r\n      width: 65%;\r\n      height: 65%;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n    }\r\n\r\n    .toy-count {\r\n      position: absolute;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      right: 0;\r\n      bottom: 0;\r\n      width: 20px;\r\n      height: 20px;\r\n      border-top-left-radius: 50%;\r\n      background-color: crimson;\r\n      color: #fff;\r\n      font-size: 11px;\r\n    }\r\n  }\r\n\r\n  .toy-for-tree:hover {\r\n    box-shadow: 0px 0px 20px 4px rgba(1, 131, 85, 0.9) inset;\r\n  }\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.garland {\r\n  display: none;\r\n  position: absolute;\r\n  bottom: -4%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  --red: #ff2c2c;\r\n  --yellow: #ffeb00;\r\n  --green: #00ff5d;\r\n  --blue: #0095ff;\r\n  --speed: 2s;\r\n  z-index: 15;\r\n  pointer-events: none;\r\n}\r\n\r\n.red {\r\n  fill: #f80606;\r\n  animation: var(--speed) alternate 0s infinite blinkRedRed;\r\n}\r\n\r\n.red_1 {\r\n  fill: #f80606;\r\n  animation: var(--speed) alternate 0s infinite blinkRed_1;\r\n}\r\n.red_2 {\r\n  fill: #f7b1b1;\r\n  animation: var(--speed) alternate 0s infinite blinkRed_2;\r\n}\r\n\r\n.yellow {\r\n  fill: var(--yellow);\r\n  animation: var(--speed) alternate 0s infinite blinkYellow;\r\n}\r\n\r\n.yellow_1 {\r\n  fill: var(--yellow);\r\n  animation: var(--speed) alternate 0s infinite blinkYellow_1;\r\n}\r\n\r\n.yellow_2 {\r\n  fill: var(--yellow);\r\n  animation: var(--speed) alternate 0s infinite blinkYellow_2;\r\n}\r\n\r\n.blue {\r\n  fill: var(--blue);\r\n  animation: var(--speed) alternate 0s infinite blinkBlue;\r\n}\r\n\r\n.blue_1 {\r\n  fill: var(--blue);\r\n  animation: var(--speed) alternate 0s infinite blinkBlue_1;\r\n}\r\n\r\n.blue_2 {\r\n  fill: var(--blue);\r\n  animation: var(--speed) alternate 0s infinite blinkBlue_2;\r\n}\r\n\r\n.green {\r\n  fill: var(--green);\r\n  animation: var(--speed) alternate 0s infinite blinkGreen;\r\n}\r\n\r\n.green_1 {\r\n  fill: var(--green);\r\n  animation: var(--speed) alternate 0s infinite blinkGreen_1;\r\n}\r\n\r\n.green_2 {\r\n  fill: var(--green);\r\n  animation: var(--speed) alternate 0s infinite blinkGreen_2;\r\n}\r\n\r\n@keyframes blinkRed {\r\n  0% {\r\n    fill: var(--red);\r\n  }\r\n  25% {\r\n    fill: var(--blue);\r\n  }\r\n  50% {\r\n    fill: var(--green);\r\n  }\r\n  75% {\r\n    fill: var(--yellow);\r\n  }\r\n}\r\n\r\n@keyframes blinkRed_1 {\r\n  0% {\r\n    fill: #f80606;\r\n  }\r\n  25% {\r\n    fill: #f7b1b1;\r\n  }\r\n  50% {\r\n    fill: #f80606;\r\n  }\r\n  75% {\r\n    fill: #f7b1b1;\r\n  }\r\n}\r\n\r\n@keyframes blinkRed_2 {\r\n  0% {\r\n    fill: #f7b1b1;\r\n  }\r\n  25% {\r\n    fill: #f80606;\r\n  }\r\n  50% {\r\n    fill: #f7b1b1;\r\n  }\r\n  75% {\r\n    fill: #f80606;\r\n  }\r\n}\r\n\r\n@keyframes blinkYellow {\r\n  0% {\r\n    fill: var(--yellow);\r\n  }\r\n  25% {\r\n    fill: var(--red);\r\n  }\r\n  50% {\r\n    fill: var(--blue);\r\n  }\r\n  75% {\r\n    fill: var(--green);\r\n  }\r\n}\r\n\r\n@keyframes blinkYellow_1 {\r\n  0% {\r\n    fill: #ffd904;\r\n  }\r\n  25% {\r\n    fill: #f7f3cd;\r\n  }\r\n  50% {\r\n    fill: #ffd904;\r\n  }\r\n  75% {\r\n    fill: #f7f3cd;\r\n  }\r\n}\r\n\r\n@keyframes blinkYellow_2 {\r\n  0% {\r\n    fill: #f7f3cd;\r\n  }\r\n  25% {\r\n    fill: #ffd904;\r\n  }\r\n  50% {\r\n    fill: #f7f3cd;\r\n  }\r\n  75% {\r\n    fill: #ffd904;\r\n  }\r\n}\r\n\r\n@keyframes blinkBlue {\r\n  0% {\r\n    fill: var(--blue);\r\n  }\r\n  25% {\r\n    fill: var(--green);\r\n  }\r\n  50% {\r\n    fill: var(--yellow);\r\n  }\r\n  75% {\r\n    fill: var(--red);\r\n  }\r\n}\r\n\r\n@keyframes blinkBlue_1 {\r\n  0% {\r\n    fill: #1100ff;\r\n  }\r\n  25% {\r\n    fill: #92cdf7;\r\n  }\r\n  50% {\r\n    fill: #1100ff;\r\n  }\r\n  75% {\r\n    fill: #92cdf7;\r\n  }\r\n}\r\n\r\n@keyframes blinkBlue_2 {\r\n  0% {\r\n    fill: #92cdf7;\r\n  }\r\n  25% {\r\n    fill: #1100ff;\r\n  }\r\n  50% {\r\n    fill: #92cdf7;\r\n  }\r\n  75% {\r\n    fill: #1100ff;\r\n  }\r\n}\r\n\r\n@keyframes blinkGreen {\r\n  0% {\r\n    fill: var(--green);\r\n  }\r\n  25% {\r\n    fill: var(--yellow);\r\n  }\r\n  50% {\r\n    fill: var(--red);\r\n  }\r\n  75% {\r\n    fill: var(--blue);\r\n  }\r\n}\r\n\r\n@keyframes blinkGreen_1 {\r\n  0% {\r\n    fill: #28c700;\r\n  }\r\n  25% {\r\n    fill: #bcffd5;\r\n  }\r\n  50% {\r\n    fill: #28c700;\r\n  }\r\n  75% {\r\n    fill: #bcffd5;\r\n  }\r\n}\r\n\r\n@keyframes blinkGreen_2 {\r\n  0% {\r\n    fill: #bcffd5;\r\n  }\r\n  25% {\r\n    fill: #28c700;\r\n  }\r\n  50% {\r\n    fill: #bcffd5;\r\n  }\r\n  75% {\r\n    fill: #28c700;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/components/audio.component.ts":
/*!*******************************************!*\
  !*** ./src/components/audio.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Audio = void 0;
class Audio {
    constructor() {
        this.audioFlag = true;
    }
    playMusic() {
        const audioPlayer = document.getElementById('beep');
        this.audioFlag = false;
        if (audioPlayer.paused) {
            audioPlayer.play();
            this.addActiveBtn();
        }
        else {
            audioPlayer.pause();
            this.addActiveBtn();
        }
    }
    addActiveBtn() {
        const audioBtn = document.querySelectorAll('.audio');
        audioBtn.forEach(element => {
            element.classList.toggle('audio_active');
        });
    }
}
exports.Audio = Audio;


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
const audio_component_1 = __webpack_require__(/*! ./audio.component */ "./src/components/audio.component.ts");
const const_1 = __webpack_require__(/*! ../modules/const */ "./src/modules/const.ts");
class ChristmasTree extends app_1.App {
    constructor(id) {
        super(id);
        this.count = 0;
        this.allDataToys;
        this.leaveFlag;
        this.garland = new garland_component_1.Garland;
        this.audio = new audio_component_1.Audio;
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
        this.$el.addEventListener('click', this.playMusic.bind(this));
        this.$el.addEventListener('click', this.addBackground.bind(this));
        this.$el.addEventListener('click', this.addTree.bind(this));
        this.$el.addEventListener('dragstart', this.startDrag);
        this.$el.addEventListener('dragend', this.endDrag.bind(this));
        this.$el.addEventListener('click', this.garlandOn.bind(this));
        area.addEventListener('dragleave', this.dragLeave.bind(this));
        area.addEventListener('dragover', this.dragOver.bind(this));
        area.addEventListener('drop', this.drop.bind(this));
    }
    dragLeave() {
        this.leaveFlag = false;
    }
    drop(event) {
        event.preventDefault();
        const data1 = event.dataTransfer.getData('elemDrag1');
        const data2 = event.dataTransfer.getData('elemDrag2');
        const toyElement2 = document.querySelector(`.toy-on-tree[data-active="${data2}"]`);
        if (data2) {
            toyElement2.style.position = 'absolute';
            toyElement2.style.width = '30px';
            toyElement2.style.height = '30px';
            event.target.appendChild(toyElement2);
            moveAt(event.offsetX, event.offsetY, toyElement2);
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
        const dataInfo = dragElement === null || dragElement === void 0 ? void 0 : dragElement.dataset.toycount;
        if (!this.leaveFlag) {
            const upItem = document.querySelector(`[data-itemcount="${dataInfo}"]`);
            const elemCount = document.querySelector(`[data-itemtoy="${dataInfo}"]`);
            dragElement.remove();
            upItem.textContent = `${+upItem.textContent + 1}`;
            elemCount.style.display = 'block';
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
            const activeToys = this.getActiveData();
            allData.forEach((element, index) => {
                if (activeToys.includes(allData[index].num)) {
                    const_1.dataParametrs.currentData.push(element);
                }
            });
            const activeToy = document.querySelectorAll('.toy-for-tree');
            if (activeToy) {
                activeToy.forEach(element => {
                    element.remove();
                });
            }
            if (const_1.dataParametrs.currentData.length === 0) {
                const_1.dataParametrs.activeData = this.allDataToys.slice(0, 20);
            }
            else {
                const_1.dataParametrs.activeData = const_1.dataParametrs.currentData;
            }
            const toysTreeContainer = document.querySelector('.toys-tree-container');
            for (let i = 0; i < const_1.dataParametrs.activeData.length; i++) {
                const toy = document.createElement('div');
                toy.classList.add('toy-for-tree');
                toy.setAttribute('data-treeToy', `${const_1.dataParametrs.activeData[i].name}`);
                toy.innerHTML = `
        <div class="toy-icon icon${i}" draggable="true" data-itemToy="${const_1.dataParametrs.activeData[i].num}"></div>
        <div class="toy-count" data-itemcount="${const_1.dataParametrs.activeData[i].num}">${const_1.dataParametrs.activeData[i].count}</div>
      `;
                toysTreeContainer.append(toy);
                const iconToy = document.querySelector(`.icon${i}`);
                iconToy.style.background = `top 0 left 0 / 100% 100% url(./assets/images/toys/${const_1.dataParametrs.activeData[i].num}.png)`;
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
    playMusic() {
        const musicBtn = event.target.closest('.audio');
        const currentBtn = musicBtn === null || musicBtn === void 0 ? void 0 : musicBtn.dataset.audio;
        if (currentBtn === 'tree') {
            this.audio.playMusic();
        }
    }
    garlandOn() {
        const garlands = event.target.closest('.garland-container-item');
        const garlandItem = garlands === null || garlands === void 0 ? void 0 : garlands.dataset.garland;
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
        const garlandItems = document.querySelectorAll('.garland circle');
        garlandItems.forEach((element, index) => {
            element.removeAttribute('class');
            if (index % 2 === 1) {
                element.classList.add(`${class1}`);
            }
            else {
                element.classList.add(`${class2}`);
            }
        });
    }
    addAllColorGarland(class1, class2, class3, class4) {
        const garlandItems = document.querySelectorAll('.garland circle');
        garlandItems.forEach((element, index) => {
            element.removeAttribute('class');
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
            this.getCurrentCopyesToRange(currentRange, index);
        }
        else {
            this.getCurrentCopyesToRange(currentRange, index);
        }
    }
    getCurrentCopyesToRange(currentRange, index) {
        const currentCopyes = [];
        for (let i = +currentRange[0].ariaValueNow; i <= +currentRange[1].ariaValueNow; i++) {
            currentCopyes.push(String(i));
        }
        localStorage.setItem(index, JSON.stringify(currentCopyes));
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const const_1 = __webpack_require__(/*! ../modules/const */ "./src/modules/const.ts");
const const_2 = __webpack_require__(/*! ../modules/const */ "./src/modules/const.ts");
const toysPage = document.getElementById('toys-page');
const snowBtn = document.querySelector('.snow');
const christmasBg = document.querySelector('.christmas-bg-current');
const randommaker = (range) => {
    const rand = Math.floor(range * Math.random());
    return rand;
};
const initsnow = () => {
    if (const_2.snowProperties.init) {
        const_2.snowProperties.snowFlag = true;
        const_2.snowProperties.init = false;
        const_2.snowProperties.marginBottom = document.documentElement.clientHeight + 50;
        const_2.snowProperties.marginRight = document.body.clientWidth - 15;
        let snowsizerange = const_1.snowSettings.snowMaxSize - const_1.snowSettings.snowMinSize;
        for (let i = 0; i <= const_1.snowSettings.snowMax; i++) {
            const_2.snowProperties.crds[i] = 0;
            const_2.snowProperties.leftRight[i] = Math.random() * 15;
            const_2.snowProperties.xMv[i] = 0.03 + Math.random() / 10;
            const_1.snowSettings.snow[i] = document.getElementById('s' + i);
            const_1.snowSettings.snow[i].classList.add('snow-item');
            const_1.snowSettings.snow[i].style.fontFamily = const_1.snowSettings.snowType[randommaker(const_1.snowSettings.snowType.length)];
            const_1.snowSettings.snow[i].size = randommaker(snowsizerange) + const_1.snowSettings.snowMinSize;
            const_1.snowSettings.snow[i].style.fontSize = const_1.snowSettings.snow[i].size + 'px';
            const_1.snowSettings.snow[i].style.color = const_1.snowSettings.snowColor[randommaker(const_1.snowSettings.snowColor.length)];
            const_1.snowSettings.snow[i].style.zIndex = '1000';
            const_1.snowSettings.snow[i].sink = (const_1.snowSettings.sinkSpeed * const_1.snowSettings.snow[i].size) / 5;
            const_1.snowSettings.snow[i].posx = randommaker(const_2.snowProperties.marginRight / 2 - const_1.snowSettings.snow[i].size) + const_2.snowProperties.marginRight / 4;
            const_1.snowSettings.snow[i].posy = randommaker(2 * const_2.snowProperties.marginBottom - const_2.snowProperties.marginBottom - 2 * const_1.snowSettings.snow[i].size);
            const_1.snowSettings.snow[i].style.left = const_1.snowSettings.snow[i].posx + 'px';
            const_1.snowSettings.snow[i].style.top = const_1.snowSettings.snow[i].posy + 'px';
            christmasBg.append(const_1.snowSettings.snow[i]);
        }
    }
    movesnow();
};
const movesnow = () => {
    for (let i = 0; i <= const_1.snowSettings.snowMax; i++) {
        const_2.snowProperties.crds[i] += const_2.snowProperties.xMv[i];
        const_1.snowSettings.snow[i].posy += const_1.snowSettings.snow[i].sink;
        const_1.snowSettings.snow[i].style.left = const_1.snowSettings.snow[i].posx + const_2.snowProperties.leftRight[i] * Math.sin(const_2.snowProperties.crds[i]) + 'px';
        const_1.snowSettings.snow[i].style.top = const_1.snowSettings.snow[i].posy + 'px';
        const compareSnowPosY = const_1.snowSettings.snow[i].posy >= const_2.snowProperties.marginBottom - 2 * const_1.snowSettings.snow[i].size;
        const compareSnowStyleLeft = parseInt(const_1.snowSettings.snow[i].style.left) > const_2.snowProperties.marginRight - 3 * const_2.snowProperties.leftRight[i];
        if (compareSnowPosY || compareSnowStyleLeft) {
            const_1.snowSettings.snow[i].posx = randommaker(const_2.snowProperties.marginRight / 2 - const_1.snowSettings.snow[i].size) + const_2.snowProperties.marginRight / 4;
            const_1.snowSettings.snow[i].posy = 0;
        }
    }
    const_2.snowProperties.timer = setTimeout(() => {
        movesnow();
    }, 50);
};
for (let i = 0; i <= const_1.snowSettings.snowMax; i++) {
    document.body.insertAdjacentHTML('beforeend', "<span id='s" + i + "' style='user-select:none;position:fixed;top:-" + const_1.snowSettings.snowMaxSize + "'>" + const_1.snowSettings.snowLetter + '</span>');
}
window.onload = initsnow;
snowBtn.addEventListener('click', () => {
    const snowItems = document.querySelectorAll('.snow-item');
    OnOffSnow(snowItems);
});
const OnOffSnow = (items) => {
    if (const_2.snowProperties.snowFlag) {
        addClearTimeout(items);
    }
    else {
        const_2.snowProperties.snowFlag = true;
        initsnow();
        items.forEach(element => {
            element.style.display = 'block';
        });
    }
};
toysPage.addEventListener('click', () => {
    const snowItems = document.querySelectorAll('.snow-item');
    addClearTimeout(snowItems);
});
const addClearTimeout = (items) => {
    const_2.snowProperties.snowFlag = false;
    clearTimeout(const_2.snowProperties.timer);
    items.forEach(element => {
        element.style.display = 'none';
    });
};


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
        return data.sort((a, b) => (+(a.year) - +(b.year)));
    }
    sortToIncreaseReverse(data) {
        return data.sort((a, b) => (+(b.year) - +(a.year)));
    }
    sortALL(data) {
        return data.sort((a, b) => (+(a.num) - +(b.num)));
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
            dataActiveItem.push('true');
        }
        else {
            dataActiveItem.push('true');
            dataActiveItem.push('false');
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
const audio_component_1 = __webpack_require__(/*! ./audio.component */ "./src/components/audio.component.ts");
class StartGame extends app_1.App {
    constructor(id) {
        super(id);
        this.audioStart = new audio_component_1.Audio;
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
        this.$el.addEventListener('click', () => {
            if (this.audioStart.audioFlag)
                this.audioStart.playMusic();
        });
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
const audio_component_1 = __webpack_require__(/*! ./audio.component */ "./src/components/audio.component.ts");
const enum_1 = __webpack_require__(/*! ../modules/enum */ "./src/modules/enum.ts");
const enum_2 = __webpack_require__(/*! ../modules/enum */ "./src/modules/enum.ts");
const enum_3 = __webpack_require__(/*! ../modules/enum */ "./src/modules/enum.ts");
class Toys extends app_1.App {
    constructor(id) {
        super(id);
        this.dataToys;
        this.newData;
        this.sortToys = new sort_toys_component_1.SortToys();
        this.localStorage = new local_storage_component_1.LocalStorage;
        this.audio = new audio_component_1.Audio;
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
        this.$el.addEventListener('click', this.playMusic.bind(this));
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
        switch (target && (target.dataset.sort)) {
            case enum_1.Sort.ascending:
                currentCategories.textContent = `${enum_1.Sort.ascending}`;
                this.addSortToys();
                this.addResultData();
                break;
            case enum_1.Sort.descending:
                currentCategories.textContent = `${enum_1.Sort.descending}`;
                this.addSortToys();
                this.addResultData();
                break;
            case enum_1.Sort.all:
                currentCategories.textContent = `${enum_1.Sort.all}`;
                this.addSortToys();
                this.addResultData();
                break;
            case enum_1.Sort.fromAZ:
                currentCategories.textContent = `${enum_1.Sort.fromAZ}`;
                this.addSortToys();
                this.addResultData();
                break;
            case enum_1.Sort.fromZA:
                currentCategories.textContent = `${enum_1.Sort.fromZA}`;
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
    applySucsses(event) {
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
    getFilterForm(event) {
        var _a;
        const target = event.target.closest('.form-icon');
        const currentForm = (_a = target) === null || _a === void 0 ? void 0 : _a.dataset.form;
        if (currentForm) {
            switch (currentForm) {
                case enum_2.Shape.bell:
                    target.classList.toggle('form-icon__active');
                    break;
                case enum_2.Shape.ball:
                    target.classList.toggle('form-icon__active');
                    break;
                case enum_2.Shape.cone:
                    target.classList.toggle('form-icon__active');
                    break;
                case enum_2.Shape.snowflake:
                    target.classList.toggle('form-icon__active');
                    break;
                case enum_2.Shape.figurine:
                    target.classList.toggle('form-icon__active');
                    break;
            }
            this.localStorage.setDataLocalStorage('dataForm', currentForm);
        }
    }
    addActiveColor(event) {
        var _a;
        const target = event.target.closest('.color-item');
        const currentColor = (_a = target) === null || _a === void 0 ? void 0 : _a.dataset.color;
        if (currentColor) {
            switch (currentColor) {
                case enum_3.Color.white:
                    target.classList.toggle('color-item__active');
                    break;
                case enum_3.Color.yellow:
                    target.classList.toggle('color-item__active');
                    break;
                case enum_3.Color.red:
                    target.classList.toggle('color-item__active');
                    break;
                case enum_3.Color.blue:
                    target.classList.toggle('color-item__active');
                    break;
                case enum_3.Color.green:
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
            case enum_1.Sort.ascending:
                sortData = this.sortToys.sortToIncrease(arg);
                break;
            case enum_1.Sort.descending:
                sortData = this.sortToys.sortToIncreaseReverse(arg);
                break;
            case enum_1.Sort.all:
                sortData = this.sortToys.sortALL(arg);
                break;
            case enum_1.Sort.fromAZ:
                sortData = this.sortToys.sortToName(arg);
                break;
            case enum_1.Sort.fromZA:
                sortData = this.sortToys.sortToNameReverse(arg);
                break;
        }
        this.removeData();
        this.drawToys(sortData);
    }
    applyResetFilters(event) {
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
                element.checked = true;
            });
            favorite.checked = false;
            this.addResultData();
        }
    }
    applyResetSettings(event) {
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
    addCleanSearch(event) {
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
    playMusic(event) {
        const musicBtn = event.target.closest('.audio');
        const currentBtn = musicBtn === null || musicBtn === void 0 ? void 0 : musicBtn.dataset.audio;
        if (currentBtn === 'toys') {
            this.audio.playMusic();
        }
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
        min: 1,
        max: 12,
    },
    step: 1,
    tooltips: true,
    format: {
        to: function (value) {
            return parseInt(String(value));
        },
        from: function (value) {
            return parseInt(value);
        },
    },
});
noUiSlider_1.default.create(exports.rangeYear, {
    start: [1940, 2021],
    connect: true,
    range: {
        min: 1940,
        max: 2021,
    },
    step: 1,
    tooltips: true,
    format: {
        to: function (value) {
            return parseInt(String(value));
        },
        from: function (value) {
            return parseInt(value);
        },
    },
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
const audio_component_1 = __webpack_require__(/*! ./components/audio.component */ "./src/components/audio.component.ts");
new start_game_component_1.StartGame('start');
exports.toys = new toys_component_1.Toys('toys');
const christmasTree = new christmas_tree_component_1.ChristmasTree('christmas-tree');
exports.favorite = new favorite_toys_component_1.FavoriteToys('collection');
const audio = new audio_component_1.Audio();


/***/ }),

/***/ "./src/modules/const.ts":
/*!******************************!*\
  !*** ./src/modules/const.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.snowProperties = exports.snowSettings = exports.dataParametrs = void 0;
exports.dataParametrs = {
    activeData: null,
    currentData: []
};
exports.snowSettings = {
    snowMax: 40,
    snowColor: new Array('#b9dff5', '#7fc7ff', '#7fb1ff', '#7fc7ff', '#b9dff5'),
    snowType: new Array('Times'),
    snowLetter: '&#10052;',
    sinkSpeed: 0.4,
    snowMaxSize: 20,
    snowMinSize: 5,
    snow: new Array()
};
exports.snowProperties = {
    marginBottom: null,
    marginRight: null,
    timer: null,
    xMv: new Array(),
    crds: new Array(),
    leftRight: new Array(),
    snowFlag: false,
    init: true
};


/***/ }),

/***/ "./src/modules/enum.ts":
/*!*****************************!*\
  !*** ./src/modules/enum.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = exports.Shape = exports.Sort = void 0;
var Sort;
(function (Sort) {
    Sort["ascending"] = "\u041F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044E \u0433\u043E\u0434\u0430 \u0432\u044B\u043F\u0443\u0441\u043A\u0430";
    Sort["descending"] = "\u041F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E \u0433\u043E\u0434\u0430 \u0432\u044B\u043F\u0443\u0441\u043A\u0430";
    Sort["all"] = "\u0412\u0441\u0435 \u0438\u0433\u0440\u0443\u0448\u043A\u0438";
    Sort["fromAZ"] = "\u041F\u043E \u0438\u043C\u0435\u043D\u0438 \u0410-\u042F";
    Sort["fromZA"] = "\u041F\u043E \u0438\u043C\u0435\u043D\u0438 \u042F-\u0410";
})(Sort = exports.Sort || (exports.Sort = {}));
var Shape;
(function (Shape) {
    Shape["bell"] = "\u043A\u043E\u043B\u043E\u043A\u043E\u043B\u044C\u0447\u0438\u043A";
    Shape["ball"] = "\u0448\u0430\u0440";
    Shape["cone"] = "\u0448\u0438\u0448\u043A\u0430";
    Shape["snowflake"] = "\u0441\u043D\u0435\u0436\u0438\u043D\u043A\u0430";
    Shape["figurine"] = "\u0444\u0438\u0433\u0443\u0440\u043A\u0430";
})(Shape = exports.Shape || (exports.Shape = {}));
var Color;
(function (Color) {
    Color["white"] = "\u0431\u0435\u043B\u044B\u0439";
    Color["yellow"] = "\u0436\u0435\u043B\u0442\u044B\u0439";
    Color["red"] = "\u043A\u0440\u0430\u0441\u043D\u044B\u0439";
    Color["blue"] = "\u0441\u0438\u043D\u0438\u0439";
    Color["green"] = "\u0437\u0435\u043B\u0451\u043D\u044B\u0439";
})(Color = exports.Color || (exports.Color = {}));


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
module.exports = __webpack_require__.p + "assets/images/4e22717d6a534f81dfd2tree-active.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLFFBQVEsV0FBVyxPQUFPLE9BQU8sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxN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S0FBSyxHQUFHLE9BQU8sMlJBQTJSLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFFBQVEsTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksUUFBUSxZQUFZLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLFdBQVcsS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyw0Q0FBNEMsb0JBQW9CLGVBQWUsY0FBYyxjQUFjLEdBQUcsMEJBQTBCLGdDQUFnQyxtQ0FBbUMsMkJBQTJCLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyxnQ0FBZ0MsbUJBQW1CLEdBQUcsZ0JBQWdCLGdCQUFnQixvQkFBb0IsbUJBQW1CLG9CQUFvQiwrQkFBK0IsZ0NBQWdDLG1DQUFtQyxHQUFHLDZCQUE2Qix5QkFBeUIsR0FBRyxzQkFBc0Isa0JBQWtCLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyw4QkFBOEIsZUFBZSxjQUFjLEdBQUcsa0JBQWtCLDBCQUEwQixHQUFHLGFBQWEsMEJBQTBCLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxTQUFTLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIscUJBQXFCLEdBQUcsMENBQTBDLG9DQUFvQyxxREFBcUQsd0JBQXdCLHVCQUF1QixHQUFHLGNBQWMsNEJBQTRCLDZDQUE2Qyx3QkFBd0IsdUJBQXVCLEdBQUcsVUFBVSxpQkFBaUIsaUJBQWlCLDhCQUE4QixHQUFHLHVCQUF1QixrQkFBa0Isd0JBQXdCLHFCQUFxQixxQkFBcUIsR0FBRywyQkFBMkIsZ0JBQWdCLGlCQUFpQixxQkFBcUIsMEVBQTBFLG9CQUFvQixHQUFHLGlDQUFpQyxpRkFBaUYsMkJBQTJCLEdBQUcsMkJBQTJCLG9DQUFvQyx1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsOEJBQThCLGdCQUFnQixxQkFBcUIsb0JBQW9CLEdBQUcsaUNBQWlDLG1CQUFtQiwyQkFBMkIsR0FBRyxVQUFVLHVCQUF1QixpQkFBaUIsZ0NBQWdDLG9FQUFvRSxHQUFHLGlCQUFpQixnQkFBZ0IsaUJBQWlCLEdBQUcsY0FBYyw4QkFBOEIsaUJBQWlCLG1CQUFtQixHQUFHLG1DQUFtQyx1QkFBdUIsV0FBVyxjQUFjLG9CQUFvQiw0QkFBNEIsbUVBQW1FLEdBQUcsa0NBQWtDLHVCQUF1QixhQUFhLGVBQWUsb0JBQW9CLDRCQUE0QixtRUFBbUUsR0FBRyxtQ0FBbUMsdUJBQXVCLGFBQWEsY0FBYyxxQ0FBcUMseUJBQXlCLHVCQUF1QixnREFBZ0QsdUJBQXVCLHdCQUF3QixvQkFBb0Isc0JBQXNCLHVCQUF1Qiw4QkFBOEIsZ0JBQWdCLDJCQUEyQixtSEFBbUgsZ0NBQWdDLHdCQUF3QixHQUFHLHNCQUFzQix1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLGlCQUFpQixhQUFhLGNBQWMsNEJBQTRCLG9CQUFvQixnQkFBZ0IsMkJBQTJCLGdDQUFnQyxtSEFBbUgsZ0NBQWdDLHdCQUF3QixxQkFBcUIsb0JBQW9CLEdBQUcsNEJBQTRCLGlCQUFpQixHQUFHLFlBQVksaUJBQWlCLGtCQUFrQiw4QkFBOEIsR0FBRyx1QkFBdUIsa0JBQWtCLGlCQUFpQix3QkFBd0IsbUNBQW1DLEdBQUcscUNBQXFDLDRCQUE0QixvQkFBb0IsZ0JBQWdCLDJCQUEyQixpQkFBaUIsR0FBRywwQ0FBMEMsc0JBQXNCLEdBQUcsc0NBQXNDLG1CQUFtQixpQkFBaUIsaUJBQWlCLDhFQUE4RSxHQUFHLFdBQVcsa0JBQWtCLEdBQUcsZ0NBQWdDLGNBQWMsK0JBQStCLG1CQUFtQixxQkFBcUIsS0FBSyxHQUFHLFNBQVMsZ0JBQWdCLGlCQUFpQixHQUFHLHFCQUFxQixnQkFBZ0IsaUJBQWlCLGtCQUFrQixxQ0FBcUMsNEJBQTRCLHFCQUFxQixHQUFHLHVCQUF1QixxQkFBcUIsR0FBRywrQkFBK0IsaUJBQWlCLHFCQUFxQixHQUFHLGtEQUFrRCxlQUFlLEdBQUcsd0RBQXdELHFCQUFxQixHQUFHLHdEQUF3RCx1QkFBdUIsR0FBRywrQkFBK0IsdUJBQXVCLGtCQUFrQixHQUFHLGVBQWUsa0JBQWtCLGdCQUFnQixtQ0FBbUMsbUJBQW1CLEdBQUcsb0JBQW9CLGdCQUFnQixpQkFBaUIscUJBQXFCLDJFQUEyRSxHQUFHLDBCQUEwQixpQkFBaUIsR0FBRywyQkFBMkIsb0dBQW9HLEdBQUcsbUJBQW1CLGdCQUFnQixpQkFBaUIscUJBQXFCLDBFQUEwRSxHQUFHLHlCQUF5QixpQkFBaUIsR0FBRyxxQkFBcUIsdUJBQXVCLEdBQUcsa0NBQWtDLGlCQUFpQixpQkFBaUIsMkJBQTJCLDRCQUE0Qix1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsZ0JBQWdCLG1IQUFtSCxnQ0FBZ0Msd0JBQXdCLDhCQUE4QixHQUFHLHlCQUF5Qix1QkFBdUIsYUFBYSxnQkFBZ0IsZ0NBQWdDLGdCQUFnQixpQkFBaUIsb0JBQW9CLHFCQUFxQiwyRUFBMkUsR0FBRyxnQ0FBZ0MsaUJBQWlCLEdBQUcsV0FBVyxrQkFBa0IscUJBQXFCLHdCQUF3QixHQUFHLFdBQVcsb0NBQW9DLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDJCQUEyQiw4QkFBOEIsZ0JBQWdCLEdBQUcseUJBQXlCLHVCQUF1QixrQkFBa0Isd0JBQXdCLGlCQUFpQixpQkFBaUIsc0hBQXNILGdDQUFnQyx3QkFBd0IsOEJBQThCLGVBQWUsR0FBRywyQkFBMkIsb0JBQW9CLHlCQUF5Qix1QkFBdUIsR0FBRyxzQ0FBc0MsdUJBQXVCLGFBQWEsZ0JBQWdCLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLHFCQUFxQixnRkFBZ0YsR0FBRyw0Q0FBNEMsaUJBQWlCLEdBQUcsbUNBQW1DLHVCQUF1QixlQUFlLGFBQWEsY0FBYyx1QkFBdUIsOEJBQThCLDhCQUE4QixHQUFHLDhDQUE4QyxvQ0FBb0MsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLGdCQUFnQixrQkFBa0Isb0JBQW9CLEdBQUcsb0RBQW9ELDhCQUE4QixHQUFHLG9CQUFvQixtQkFBbUIsb0NBQW9DLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDJCQUEyQiw4QkFBOEIsZ0JBQWdCLEdBQUcsc0NBQXNDLGdCQUFnQixpQkFBaUIseUJBQXlCLEdBQUcsMkNBQTJDLDZCQUE2QiwwQkFBMEIscUJBQXFCLDhCQUE4QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixvQkFBb0IsdUJBQXVCLGFBQWEsc0hBQXNILGdDQUFnQyx1QkFBdUIsR0FBRyxtREFBbUQsb0JBQW9CLG1CQUFtQixvQkFBb0IsdUJBQXVCLGVBQWUsZ0JBQWdCLG1DQUFtQyxlQUFlLDZCQUE2QixHQUFHLDJEQUEyRCxlQUFlLEdBQUcsZ0JBQWdCLG1CQUFtQixHQUFHLGlCQUFpQixvQ0FBb0MsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLGdCQUFnQixHQUFHLDhCQUE4QixxQkFBcUIsa0JBQWtCLG1DQUFtQyxHQUFHLHlDQUF5QyxrQkFBa0IsMkJBQTJCLDRCQUE0QixHQUFHLG9EQUFvRCx3QkFBd0IscUJBQXFCLG9CQUFvQixHQUFHLDBEQUEwRCxpQkFBaUIsMEJBQTBCLEdBQUcsNERBQTRELG9HQUFvRyxHQUFHLGlEQUFpRCxnQkFBZ0IsaUJBQWlCLDBFQUEwRSxHQUFHLGlEQUFpRCxnQkFBZ0IsaUJBQWlCLDBFQUEwRSxHQUFHLGlEQUFpRCxnQkFBZ0IsaUJBQWlCLDBFQUEwRSxHQUFHLGlEQUFpRCxnQkFBZ0IsaUJBQWlCLCtFQUErRSxHQUFHLGlEQUFpRCxnQkFBZ0IsaUJBQWlCLG9GQUFvRixHQUFHLGlEQUFpRCxnQkFBZ0IsaUJBQWlCLHlFQUF5RSxHQUFHLG9EQUFvRCw0QkFBNEIsdUJBQXVCLHdCQUF3QixvQkFBb0Isc0JBQXNCLHVCQUF1QixnQkFBZ0IsR0FBRyxtQ0FBbUMsd0JBQXdCLHVCQUF1Qiw2REFBNkQsaUJBQWlCLG9CQUFvQixHQUFHLDJCQUEyQixnQkFBZ0IsR0FBRyxtREFBbUQsa0JBQWtCLDZCQUE2Qix1QkFBdUIsZ0JBQWdCLGVBQWUsd0JBQXdCLGVBQWUsYUFBYSxHQUFHLHdDQUF3QyxnQkFBZ0IsaUJBQWlCLGlCQUFpQixjQUFjLDJSQUEyUix1QkFBdUIscUJBQXFCLGlCQUFpQixvQkFBb0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsc0NBQXNDLGVBQWUsaUJBQWlCLHVCQUF1QixlQUFlLEdBQUcsd0JBQXdCLG1CQUFtQix1QkFBdUIsaUJBQWlCLHdCQUF3QixxQkFBcUIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsd0JBQXdCLG9CQUFvQiw0QkFBNEIsdUJBQXVCLHdCQUF3QixHQUFHLCtCQUErQixjQUFjLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLGlDQUFpQyx1QkFBdUIsbUJBQW1CLEdBQUcsa0JBQWtCLG9DQUFvQyx1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsZ0JBQWdCLEdBQUcsZ0NBQWdDLHFCQUFxQixHQUFHLG9CQUFvQix1QkFBdUIsY0FBYyxZQUFZLDRCQUE0Qix1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsbUJBQW1CLEdBQUcsb0JBQW9CLHVCQUF1QixjQUFjLGFBQWEsNEJBQTRCLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDJCQUEyQixtQkFBbUIsR0FBRyxvQkFBb0IsdUJBQXVCLDBCQUEwQixHQUFHLHFCQUFxQixvQ0FBb0MsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLGdCQUFnQixHQUFHLHNDQUFzQyxxQkFBcUIsR0FBRyx1QkFBdUIsdUJBQXVCLGNBQWMsWUFBWSw0QkFBNEIsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLG1CQUFtQixHQUFHLHVCQUF1Qix1QkFBdUIsY0FBYyxhQUFhLDRCQUE0Qix1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsbUJBQW1CLEdBQUcsWUFBWSwwQkFBMEIsR0FBRyxhQUFhLG9DQUFvQyx1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsZ0JBQWdCLEdBQUcsMkJBQTJCLGtCQUFrQixxQkFBcUIscUJBQXFCLEdBQUcsdUNBQXVDLGdCQUFnQixpQkFBaUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsR0FBRyw2Q0FBNkMsaUJBQWlCLEdBQUcsK0NBQStDLHVEQUF1RCxHQUFHLG1DQUFtQyx3QkFBd0IsR0FBRyxtQ0FBbUMsd0JBQXdCLEdBQUcsbUNBQW1DLHdCQUF3QixHQUFHLG1DQUFtQyx3QkFBd0IsR0FBRyxtQ0FBbUMsd0JBQXdCLEdBQUcsV0FBVyxtQkFBbUIsR0FBRyxZQUFZLG9DQUFvQyx1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsZ0JBQWdCLEdBQUcseUJBQXlCLGtCQUFrQixxQkFBcUIsbUNBQW1DLEdBQUcseUNBQXlDLDRCQUE0Qix1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsdUJBQXVCLG1CQUFtQixHQUFHLG9DQUFvQyw2QkFBNkIsMEJBQTBCLHFCQUFxQiw4QkFBOEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsb0JBQW9CLHVCQUF1QixhQUFhLHNIQUFzSCxnQ0FBZ0MsdUJBQXVCLEdBQUcsNENBQTRDLG9CQUFvQixtQkFBbUIsb0JBQW9CLHVCQUF1QixlQUFlLGdCQUFnQixtQ0FBbUMsZUFBZSw2QkFBNkIsR0FBRyxvREFBb0QsZUFBZSxHQUFHLGVBQWUsbUJBQW1CLEdBQUcsaUNBQWlDLDRCQUE0Qix1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsdUJBQXVCLG1CQUFtQixHQUFHLGdEQUFnRCw2QkFBNkIsMEJBQTBCLHFCQUFxQiw4QkFBOEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsb0JBQW9CLHVCQUF1QixhQUFhLHNIQUFzSCxnQ0FBZ0MsdUJBQXVCLEdBQUcsd0RBQXdELG9CQUFvQixtQkFBbUIsb0JBQW9CLHVCQUF1QixlQUFlLGdCQUFnQixtQ0FBbUMsZUFBZSw2QkFBNkIsR0FBRyxnRUFBZ0UsZUFBZSxHQUFHLGNBQWMsa0JBQWtCLG1CQUFtQiw0QkFBNEIscUJBQXFCLEdBQUcsdUJBQXVCLGlCQUFpQixpQkFBaUIsc0hBQXNILGdDQUFnQyx3QkFBd0IsNEJBQTRCLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDJCQUEyQix1QkFBdUIsbUJBQW1CLEdBQUcsNkJBQTZCLGlCQUFpQixHQUFHLGdDQUFnQyxxQkFBcUIsR0FBRyxxQ0FBcUMsa0JBQWtCLHFCQUFxQixHQUFHLHdDQUF3Qyw2QkFBNkIsb0NBQW9DLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDJCQUEyQiw4QkFBOEIsZ0JBQWdCLHFCQUFxQixvQkFBb0IsR0FBRyxvREFBb0QsdUJBQXVCLDhCQUE4QixxQkFBcUIsR0FBRyw2REFBNkQsa0JBQWtCLGlCQUFpQix1QkFBdUIsdUJBQXVCLGNBQWMsYUFBYSxxQ0FBcUMsZUFBZSxxQkFBcUIsR0FBRywyRUFBMkUsa0JBQWtCLHdDQUF3QyxtQkFBbUIsb0JBQW9CLEdBQUcsa0ZBQWtGLGtCQUFrQixxQkFBcUIsa0JBQWtCLG9CQUFvQiw0QkFBNEIsdUJBQXVCLEdBQUcsdUVBQXVFLGlCQUFpQixrQkFBa0IsMEJBQTBCLDBIQUEwSCwrQ0FBK0MsK0JBQStCLHdCQUF3QixvQkFBb0IscUJBQXFCLEdBQUcsMEVBQTBFLG9DQUFvQyx1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsZ0JBQWdCLEdBQUcsMkZBQTJGLHFCQUFxQixrQkFBa0IsZ0JBQWdCLDRCQUE0QixHQUFHLHFHQUFxRyxpQkFBaUIsa0JBQWtCLHFCQUFxQixHQUFHLGlGQUFpRixxQkFBcUIsa0JBQWtCLDJCQUEyQixrQkFBa0IsR0FBRyxvRkFBb0YsNEJBQTRCLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDJCQUEyQixtQkFBbUIsR0FBRyxnRUFBZ0UsMkJBQTJCLDhCQUE4Qix5SEFBeUgseURBQXlELEdBQUcsNkVBQTZFLDBEQUEwRCwwSEFBMEgsR0FBRywyR0FBMkcsMEJBQTBCLEdBQUcsc0VBQXNFLHlEQUF5RCxHQUFHLG9FQUFvRSxtQkFBbUIsZUFBZSxHQUFHLHVFQUF1RSxnQkFBZ0IsR0FBRyw2RUFBNkUscUJBQXFCLEdBQUcsNkVBQTZFLDhCQUE4Qix1QkFBdUIsR0FBRyxxQkFBcUIsZ0JBQWdCLGlCQUFpQixHQUFHLCtCQUErQixnQkFBZ0IsaUJBQWlCLGtCQUFrQix5Q0FBeUMsNEJBQTRCLEdBQUcsb0JBQW9CLHNDQUFzQyxrQkFBa0IscUJBQXFCLEdBQUcseUJBQXlCLGlCQUFpQixxQkFBcUIsR0FBRyw0Q0FBNEMsZUFBZSxHQUFHLGtEQUFrRCxxQkFBcUIsR0FBRyxrREFBa0QsdUJBQXVCLEdBQUcseUJBQXlCLDRCQUE0QixxQkFBcUIsR0FBRyxtQ0FBbUMsbUJBQW1CLG9DQUFvQyx1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsOEJBQThCLGdCQUFnQixHQUFHLG1EQUFtRCxnQkFBZ0Isa0JBQWtCLHVDQUF1QyxnQ0FBZ0MscUJBQXFCLGtCQUFrQixHQUFHLHNFQUFzRSx5QkFBeUIsMEhBQTBILCtCQUErQix3QkFBd0IscUJBQXFCLDhCQUE4QixvQkFBb0IsR0FBRyxzRkFBc0YsdUJBQXVCLGVBQWUsZ0JBQWdCLGFBQWEsY0FBYyxxQ0FBcUMsR0FBRyw4RUFBOEUsd0VBQXdFLEdBQUcsOEVBQThFLHdFQUF3RSxHQUFHLDhFQUE4RSx3RUFBd0UsR0FBRyw4RUFBOEUsd0VBQXdFLEdBQUcsOEVBQThFLHdFQUF3RSxHQUFHLDhFQUE4RSx3RUFBd0UsR0FBRyw0RUFBNEUsNkRBQTZELEdBQUcsaUNBQWlDLG1CQUFtQixvQ0FBb0MsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLDhCQUE4QixnQkFBZ0IsR0FBRyxtREFBbUQsZ0JBQWdCLGtCQUFrQiwrQ0FBK0MsZ0NBQWdDLHFCQUFxQixrQkFBa0IsR0FBRyx5RUFBeUUseUJBQXlCLHVCQUF1Qiw4QkFBOEIscUJBQXFCLG9CQUFvQixHQUFHLCtFQUErRSw2REFBNkQsR0FBRyx5REFBeUQsK0NBQStDLEdBQUcseURBQXlELCtDQUErQyxHQUFHLHlEQUF5RCwrQ0FBK0MsR0FBRyx5REFBeUQsK0NBQStDLEdBQUcseURBQXlELCtDQUErQyxHQUFHLHlEQUF5RCwrQ0FBK0MsR0FBRyx5REFBeUQsK0NBQStDLEdBQUcseURBQXlELCtDQUErQyxHQUFHLHlEQUF5RCwrQ0FBK0MsR0FBRywwREFBMEQsZ0RBQWdELEdBQUcsaUZBQWlGLDhCQUE4QixHQUFHLGdDQUFnQyxtQkFBbUIsb0NBQW9DLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDJCQUEyQiw4QkFBOEIsZ0JBQWdCLEdBQUcsOENBQThDLGtCQUFrQixrQ0FBa0MsR0FBRyxzRUFBc0UsZ0JBQWdCLGlCQUFpQix1QkFBdUIsb0JBQW9CLHFCQUFxQixpQkFBaUIsR0FBRyx5REFBeUQsa0VBQWtFLDBEQUEwRCxHQUFHLCtEQUErRCxlQUFlLHlDQUF5QyxHQUFHLHlEQUF5RCxrRUFBa0Usc0RBQXNELEdBQUcsK0RBQStELGVBQWUseUNBQXlDLEdBQUcseURBQXlELGtFQUFrRSx3REFBd0QsR0FBRywrREFBK0QsZUFBZSx5Q0FBeUMsR0FBRyx5REFBeUQsa0VBQWtFLHdEQUF3RCxHQUFHLCtEQUErRCxlQUFlLHlDQUF5QyxHQUFHLHlEQUF5RCxrRUFBa0UseURBQXlELEdBQUcsK0RBQStELGVBQWUseUNBQXlDLEdBQUcsb0VBQW9FLGVBQWUseUNBQXlDLEdBQUcsc0RBQXNELHVCQUF1QiwwQkFBMEIsZ0JBQWdCLGlCQUFpQixHQUFHLDREQUE0RCxrQkFBa0IsR0FBRyw4REFBOEQsdUJBQXVCLG9CQUFvQixXQUFXLFlBQVksYUFBYSxjQUFjLDJCQUEyQiw2QkFBNkIscUJBQXFCLEdBQUcscUVBQXFFLHVCQUF1QixrQkFBa0IsaUJBQWlCLGdCQUFnQixjQUFjLGdCQUFnQiw4QkFBOEIsNkJBQTZCLHFCQUFxQixHQUFHLDhFQUE4RSw4QkFBOEIsR0FBRyw0RUFBNEUsZ0NBQWdDLEdBQUcscUZBQXFGLHdDQUF3QyxvQ0FBb0MsZ0NBQWdDLEdBQUcsb0VBQW9FLHdCQUF3QixHQUFHLDJFQUEyRSx1QkFBdUIsR0FBRyxnQkFBZ0IsZ0NBQWdDLHVCQUF1QixHQUFHLG9DQUFvQyx1QkFBdUIsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIsNERBQTRELEdBQUcsc0NBQXNDLHVCQUF1QixlQUFlLGNBQWMsZ0NBQWdDLGlCQUFpQixrQkFBa0IsZ0JBQWdCLEdBQUcsZ0JBQWdCLHNDQUFzQyxHQUFHLHdCQUF3Qiw2QkFBNkIsb0NBQW9DLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDJCQUEyQiw4QkFBOEIsZ0JBQWdCLHFCQUFxQixvQkFBb0IsR0FBRywwQkFBMEIsa0JBQWtCLGlCQUFpQixnQkFBZ0IsMENBQTBDLHVDQUF1QyxvQkFBb0IsaUJBQWlCLEdBQUcsc0NBQXNDLHVCQUF1Qix5QkFBeUIsMEhBQTBILCtCQUErQixpQ0FBaUMsa0NBQWtDLG9DQUFvQyxxQkFBcUIsb0JBQW9CLDhCQUE4QixHQUFHLGdEQUFnRCx1QkFBdUIsZUFBZSxnQkFBZ0IsYUFBYSxjQUFjLHFDQUFxQyxHQUFHLGlEQUFpRCx1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsYUFBYSxjQUFjLGdCQUFnQixpQkFBaUIsZ0NBQWdDLDhCQUE4QixnQkFBZ0Isb0JBQW9CLEdBQUcsNENBQTRDLDZEQUE2RCxHQUFHLFdBQVcsa0JBQWtCLEdBQUcsY0FBYyxrQkFBa0IsdUJBQXVCLGdCQUFnQixjQUFjLGdDQUFnQyxtQkFBbUIsc0JBQXNCLHFCQUFxQixvQkFBb0IsZ0JBQWdCLGdCQUFnQix5QkFBeUIsR0FBRyxVQUFVLGtCQUFrQiw4REFBOEQsR0FBRyxZQUFZLGtCQUFrQiw2REFBNkQsR0FBRyxZQUFZLGtCQUFrQiw2REFBNkQsR0FBRyxhQUFhLHdCQUF3Qiw4REFBOEQsR0FBRyxlQUFlLHdCQUF3QixnRUFBZ0UsR0FBRyxlQUFlLHdCQUF3QixnRUFBZ0UsR0FBRyxXQUFXLHNCQUFzQiw0REFBNEQsR0FBRyxhQUFhLHNCQUFzQiw4REFBOEQsR0FBRyxhQUFhLHNCQUFzQiw4REFBOEQsR0FBRyxZQUFZLHVCQUF1Qiw2REFBNkQsR0FBRyxjQUFjLHVCQUF1QiwrREFBK0QsR0FBRyxjQUFjLHVCQUF1QiwrREFBK0QsR0FBRyx5QkFBeUIsUUFBUSx1QkFBdUIsS0FBSyxTQUFTLHdCQUF3QixLQUFLLFNBQVMseUJBQXlCLEtBQUssU0FBUywwQkFBMEIsS0FBSyxHQUFHLHlCQUF5QixRQUFRLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLEdBQUcseUJBQXlCLFFBQVEsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssR0FBRywwQkFBMEIsUUFBUSwwQkFBMEIsS0FBSyxTQUFTLHVCQUF1QixLQUFLLFNBQVMsd0JBQXdCLEtBQUssU0FBUyx5QkFBeUIsS0FBSyxHQUFHLDRCQUE0QixRQUFRLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLEdBQUcsNEJBQTRCLFFBQVEsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssR0FBRyx3QkFBd0IsUUFBUSx3QkFBd0IsS0FBSyxTQUFTLHlCQUF5QixLQUFLLFNBQVMsMEJBQTBCLEtBQUssU0FBUyx1QkFBdUIsS0FBSyxHQUFHLDBCQUEwQixRQUFRLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLEdBQUcsMEJBQTBCLFFBQVEsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssR0FBRyx5QkFBeUIsUUFBUSx5QkFBeUIsS0FBSyxTQUFTLDBCQUEwQixLQUFLLFNBQVMsdUJBQXVCLEtBQUssU0FBUyx3QkFBd0IsS0FBSyxHQUFHLDJCQUEyQixRQUFRLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLEdBQUcsMkJBQTJCLFFBQVEsb0JBQW9CLEtBQUssU0FBUyxvQkFBb0IsS0FBSyxTQUFTLG9CQUFvQixLQUFLLFNBQVMsb0JBQW9CLEtBQUssR0FBRyxzQkFBc0IsaUJBQWlCLGdCQUFnQixnQkFBZ0IsS0FBSyx1QkFBdUIsa0NBQWtDLHFDQUFxQyw2QkFBNkIsS0FBSyxtQkFBbUIsZUFBZSxxQkFBcUIsZUFBZSw0QkFBNEIsZ0JBQWdCLGNBQWMsc0JBQXNCLGtCQUFrQixzQkFBc0IscUJBQXFCLHNCQUFzQixpQ0FBaUMsa0NBQWtDLHFDQUFxQyxLQUFLLDBCQUEwQixxQkFBcUIscUJBQXFCLGVBQWUsV0FBVyxpQkFBaUIsOEJBQThCLFVBQVUsVUFBVSxpQkFBaUIsdUJBQXVCLFlBQVksdUJBQXVCLFVBQVUsa0JBQWtCLFFBQVEscUJBQXFCLHNCQUFzQixrQkFBa0Isa0JBQWtCLDJDQUEyQyxvQ0FBb0MscURBQXFELDBCQUEwQix5QkFBeUIsS0FBSyxvQkFBb0IsNEJBQTRCLDZDQUE2QywwQkFBMEIseUJBQXlCLEtBQUssZUFBZSxtQkFBbUIsbUJBQW1CLGdDQUFnQyxLQUFLLDJCQUEyQixvQkFBb0IsMEJBQTBCLHVCQUF1Qix1QkFBdUIsYUFBYSxvQkFBb0IscUJBQXFCLHlCQUF5QixnRkFBZ0Ysd0JBQXdCLE9BQU8sdUJBQXVCLHVGQUF1RiwrQkFBK0IsT0FBTyxpQkFBaUIsc0NBQXNDLDJCQUEyQiw0QkFBNEIsd0JBQXdCLCtCQUErQixrQ0FBa0Msb0JBQW9CLHlCQUF5Qix3QkFBd0IsT0FBTyx1QkFBdUIsdUJBQXVCLCtCQUErQixPQUFPLEtBQUssY0FBYyx5QkFBeUIsbUJBQW1CLGtDQUFrQyx3RUFBd0UsS0FBSyxxQkFBcUIsa0JBQWtCLG1CQUFtQixLQUFLLDRCQUE0Qiw2QkFBNkIsUUFBUSxrQkFBa0IsZ0NBQWdDLG1CQUFtQixxQkFBcUIsS0FBSyxxQkFBcUIseUJBQXlCLDJCQUEyQixlQUFlLGtCQUFrQix3QkFBd0IsZ0NBQWdDLHlFQUF5RSxPQUFPLDhCQUE4QiwyQkFBMkIsaUJBQWlCLG1CQUFtQix3QkFBd0IsZ0NBQWdDLHlFQUF5RSxPQUFPLDRCQUE0QixZQUFZLDZCQUE2QixtQkFBbUIsb0JBQW9CLDJDQUEyQywrQkFBK0IsNkJBQTZCLG9EQUFvRCw2QkFBNkIsOEJBQThCLDBCQUEwQiw0QkFBNEIsNkJBQTZCLG9DQUFvQyxzQkFBc0IsaUNBQWlDLHlIQUF5SCxzQ0FBc0MsOEJBQThCLFNBQVMsT0FBTyxrQkFBa0IsMkJBQTJCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLHFCQUFxQixxQkFBcUIsaUJBQWlCLGtCQUFrQiw4QkFBOEIsd0JBQXdCLG9CQUFvQiwrQkFBK0Isb0NBQW9DLHVIQUF1SCxvQ0FBb0MsNEJBQTRCLHlCQUF5Qix3QkFBd0IsT0FBTyx3QkFBd0IscUJBQXFCLE9BQU8sS0FBSyxnQkFBZ0IsbUJBQW1CLG9CQUFvQixnQ0FBZ0MsS0FBSywyQkFBMkIsb0JBQW9CLG1CQUFtQiwwQkFBMEIscUNBQXFDLHFCQUFxQixXQUFXLGdDQUFnQywwQkFBMEIsc0JBQXNCLGlDQUFpQyx1QkFBdUIsZ0JBQWdCLDhCQUE4QixXQUFXLFNBQVMsT0FBTyxzQkFBc0IsV0FBVyx5QkFBeUIsdUJBQXVCLHVCQUF1QixzRkFBc0YsU0FBUyxPQUFPLEtBQUssZUFBZSxvQkFBb0IsS0FBSyxvQ0FBb0MsZ0JBQWdCLGlDQUFpQyxxQkFBcUIsdUJBQXVCLE9BQU8sS0FBSyxjQUFjLGtCQUFrQixtQkFBbUIsS0FBSyx5QkFBeUIsa0JBQWtCLG1CQUFtQixvQkFBb0IsdUNBQXVDLDhCQUE4Qix1QkFBdUIsS0FBSywyQkFBMkIsdUJBQXVCLEtBQUssbUNBQW1DLG1CQUFtQix1QkFBdUIsS0FBSyxzREFBc0QsaUJBQWlCLEtBQUssNERBQTRELHVCQUF1QixLQUFLLDREQUE0RCx5QkFBeUIsS0FBSyxtQ0FBbUMseUJBQXlCLG9CQUFvQixLQUFLLG1CQUFtQixvQkFBb0Isa0JBQWtCLHFDQUFxQyxxQkFBcUIsY0FBYyxvQkFBb0IscUJBQXFCLDBCQUEwQixpRkFBaUYsT0FBTyxvQkFBb0IscUJBQXFCLE9BQU8seUJBQXlCLHdHQUF3RyxPQUFPLGlCQUFpQixvQkFBb0IscUJBQXFCLDBCQUEwQixnRkFBZ0YsT0FBTyxtQkFBbUIscUJBQXFCLE9BQU8sbUJBQW1CLDJCQUEyQixzQkFBc0IsdUJBQXVCLHVCQUF1QixpQ0FBaUMsZ0NBQWdDLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGlDQUFpQyxzQkFBc0IseUhBQXlILHNDQUFzQyw4QkFBOEIsb0NBQW9DLFNBQVMsT0FBTyxtQkFBbUIsMkJBQTJCLGlCQUFpQixvQkFBb0Isb0NBQW9DLG9CQUFvQixxQkFBcUIsd0JBQXdCLHlCQUF5QixpRkFBaUYsT0FBTywwQkFBMEIscUJBQXFCLE9BQU8sS0FBSyxlQUFlLG9CQUFvQix1QkFBdUIsMEJBQTBCLFNBQVMsc0NBQXNDLDJCQUEyQiw0QkFBNEIsd0JBQXdCLCtCQUErQixrQ0FBa0Msb0JBQW9CLE9BQU8sMkJBQTJCLDJCQUEyQixzQkFBc0IsNEJBQTRCLHFCQUFxQixxQkFBcUIsMEhBQTBILG9DQUFvQyw0QkFBNEIsa0NBQWtDLG1CQUFtQixXQUFXLDBCQUEwQiwrQkFBK0IsNkJBQTZCLFNBQVMsMEJBQTBCLDZCQUE2QixtQkFBbUIsc0JBQXNCLHNDQUFzQyxzQkFBc0IsdUJBQXVCLDRCQUE0Qix3RkFBd0YsU0FBUyw0QkFBNEIsdUJBQXVCLFNBQVMsdUJBQXVCLDZCQUE2QixxQkFBcUIsbUJBQW1CLG9CQUFvQiw2QkFBNkIsb0NBQW9DLG9DQUFvQyxzQkFBc0IsMENBQTBDLCtCQUErQixnQ0FBZ0MsNEJBQTRCLG1DQUFtQyx3QkFBd0IsMEJBQTBCLDRCQUE0QixXQUFXLGdDQUFnQyxzQ0FBc0MsV0FBVyxTQUFTLE9BQU8sS0FBSyx3QkFBd0IscUJBQXFCLG9DQUFvQyx5QkFBeUIsMEJBQTBCLHNCQUFzQiw2QkFBNkIsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsb0JBQW9CLHFCQUFxQiw2QkFBNkIsY0FBYyxtQ0FBbUMsZ0NBQWdDLDJCQUEyQixvQ0FBb0Msc0JBQXNCLHVCQUF1Qiw2QkFBNkIsMEJBQTBCLDZCQUE2QixtQkFBbUIsNEhBQTRILHNDQUFzQyw2QkFBNkIsU0FBUyxzQkFBc0Isd0JBQXdCLHlCQUF5QiwwQkFBMEIsNkJBQTZCLHFCQUFxQixzQkFBc0IseUNBQXlDLHFCQUFxQixtQ0FBbUMsU0FBUyw4QkFBOEIscUJBQXFCLFNBQVMsT0FBTyxLQUFLLG9CQUFvQixxQkFBcUIsVUFBVSxzQ0FBc0MsMkJBQTJCLDRCQUE0Qix3QkFBd0IsK0JBQStCLG9CQUFvQixPQUFPLDJCQUEyQix5QkFBeUIsc0JBQXNCLHVDQUF1QyxvQkFBb0Isd0JBQXdCLGlDQUFpQyxrQ0FBa0Msc0JBQXNCLGdDQUFnQyw2QkFBNkIsNEJBQTRCLFdBQVcsNEJBQTRCLHlCQUF5QixrQ0FBa0MsV0FBVyw4QkFBOEIsNEdBQTRHLFdBQVcsdUJBQXVCLHdCQUF3Qix5QkFBeUIsb0ZBQW9GLFdBQVcsbUJBQW1CLHdCQUF3Qix5QkFBeUIsb0ZBQW9GLFdBQVcsbUJBQW1CLHdCQUF3Qix5QkFBeUIsb0ZBQW9GLFdBQVcsbUJBQW1CLHdCQUF3Qix5QkFBeUIseUZBQXlGLFdBQVcsbUJBQW1CLHdCQUF3Qix5QkFBeUIsOEZBQThGLFdBQVcsbUJBQW1CLHdCQUF3Qix5QkFBeUIsbUZBQW1GLFdBQVcsMEJBQTBCLGtDQUFrQywrQkFBK0IsZ0NBQWdDLDRCQUE0Qiw4QkFBOEIsK0JBQStCLHdCQUF3QixXQUFXLFNBQVMsT0FBTyxLQUFLLDZDQUE2QywwQkFBMEIseUJBQXlCLCtEQUErRCxtQkFBbUIsc0JBQXNCLEtBQUssK0JBQStCLGtCQUFrQixLQUFLLHlEQUF5RCxvQkFBb0IsK0JBQStCLHlCQUF5QixrQkFBa0IsaUJBQWlCLDBCQUEwQixpQkFBaUIsZUFBZSxLQUFLLDRDQUE0QyxrQkFBa0IsbUJBQW1CLG1CQUFtQixnQkFBZ0IsMlNBQTJTLHlCQUF5Qix1QkFBdUIsbUJBQW1CLHNCQUFzQixLQUFLLDRCQUE0QiwwQkFBMEIsS0FBSyw0Q0FBNEMsaUJBQWlCLG1CQUFtQix5QkFBeUIsaUJBQWlCLEtBQUssNEJBQTRCLHFCQUFxQix5QkFBeUIsbUJBQW1CLDBCQUEwQix1QkFBdUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsMEJBQTBCLHNCQUFzQiw0QkFBNEIseUJBQXlCLDBCQUEwQixLQUFLLG1DQUFtQyxnQkFBZ0IsS0FBSyxxQkFBcUIsdUJBQXVCLEtBQUssMkNBQTJDLHlCQUF5QixxQkFBcUIsVUFBVSxzQ0FBc0MsMkJBQTJCLDRCQUE0Qix3QkFBd0IsK0JBQStCLG9CQUFvQixPQUFPLHdCQUF3Qix5QkFBeUIsT0FBTyxnQkFBZ0IsMkJBQTJCLGtCQUFrQixnQkFBZ0IsOEJBQThCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLCtCQUErQix1QkFBdUIsT0FBTyxZQUFZLDJCQUEyQixrQkFBa0IsaUJBQWlCLDhCQUE4QiwyQkFBMkIsNEJBQTRCLHdCQUF3QiwrQkFBK0IsdUJBQXVCLE9BQU8sS0FBSyx3QkFBd0IseUJBQXlCLDRCQUE0QixVQUFVLHNDQUFzQywyQkFBMkIsNEJBQTRCLHdCQUF3QiwrQkFBK0Isb0JBQW9CLE9BQU8sMkJBQTJCLHlCQUF5QixPQUFPLGdCQUFnQiwyQkFBMkIsa0JBQWtCLGdCQUFnQiw4QkFBOEIsMkJBQTJCLDRCQUE0Qix3QkFBd0IsK0JBQStCLHVCQUF1QixPQUFPLFlBQVksMkJBQTJCLGtCQUFrQixpQkFBaUIsOEJBQThCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLCtCQUErQix1QkFBdUIsT0FBTyxLQUFLLGdCQUFnQiw0QkFBNEIsVUFBVSxzQ0FBc0MsMkJBQTJCLDRCQUE0Qix3QkFBd0IsK0JBQStCLG9CQUFvQixPQUFPLDRCQUE0QixzQkFBc0IseUJBQXlCLHlCQUF5QixxQkFBcUIsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsMEJBQTBCLDJCQUEyQixTQUFTLDJCQUEyQix1QkFBdUIsU0FBUyxpQ0FBaUMsNkRBQTZELFNBQVMsaUJBQWlCLDhCQUE4QixTQUFTLGlCQUFpQiw4QkFBOEIsU0FBUyxpQkFBaUIsOEJBQThCLFNBQVMsaUJBQWlCLDhCQUE4QixTQUFTLGlCQUFpQiw4QkFBOEIsU0FBUyxPQUFPLEtBQUssZUFBZSxxQkFBcUIsVUFBVSxzQ0FBc0MsMkJBQTJCLDRCQUE0Qix3QkFBd0IsK0JBQStCLG9CQUFvQixPQUFPLDJCQUEyQixzQkFBc0IseUJBQXlCLHVDQUF1Qyx5QkFBeUIsZ0NBQWdDLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGlDQUFpQyw2QkFBNkIseUJBQXlCLFNBQVMsd0JBQXdCLG1DQUFtQyxnQ0FBZ0MsMkJBQTJCLG9DQUFvQyxzQkFBc0IsdUJBQXVCLDZCQUE2QiwwQkFBMEIsNkJBQTZCLG1CQUFtQiw0SEFBNEgsc0NBQXNDLDZCQUE2QixTQUFTLDRCQUE0Qix3QkFBd0IseUJBQXlCLDBCQUEwQiw2QkFBNkIscUJBQXFCLHNCQUFzQix5Q0FBeUMscUJBQXFCLG1DQUFtQyxTQUFTLG9DQUFvQyxxQkFBcUIsU0FBUyxPQUFPLEtBQUssbUJBQW1CLHFCQUFxQiwyQkFBMkIsOEJBQThCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLCtCQUErQiwyQkFBMkIsdUJBQXVCLHdCQUF3QixtQ0FBbUMsZ0NBQWdDLDJCQUEyQixvQ0FBb0Msc0JBQXNCLHVCQUF1Qiw2QkFBNkIsMEJBQTBCLDZCQUE2QixtQkFBbUIsNEhBQTRILHNDQUFzQyw2QkFBNkIsU0FBUyxnQ0FBZ0Msd0JBQXdCLHlCQUF5QiwwQkFBMEIsNkJBQTZCLHFCQUFxQixzQkFBc0IseUNBQXlDLHFCQUFxQixtQ0FBbUMsU0FBUyx3Q0FBd0MscUJBQXFCLFNBQVMsT0FBTyxLQUFLLGtCQUFrQixvQkFBb0IscUJBQXFCLDhCQUE4Qix1QkFBdUIsa0JBQWtCLHFCQUFxQixxQkFBcUIsMEhBQTBILG9DQUFvQyw0QkFBNEIsOEJBQThCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLCtCQUErQiwyQkFBMkIsdUJBQXVCLE9BQU8sNEJBQTRCLHFCQUFxQixPQUFPLEtBQUssb0NBQW9DLHVCQUF1QixjQUFjLHNCQUFzQix5QkFBeUIsWUFBWSxtQ0FBbUMsd0NBQXdDLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGlDQUFpQyxvQ0FBb0Msc0JBQXNCLDJCQUEyQiwwQkFBMEIsU0FBUyxPQUFPLDZCQUE2QiwyQkFBMkIsa0NBQWtDLHlCQUF5QixzQkFBc0Isd0JBQXdCLHVCQUF1Qiw2QkFBNkIsNkJBQTZCLG9CQUFvQixtQkFBbUIsMkNBQTJDLHFCQUFxQiwyQkFBMkIseUJBQXlCLDBCQUEwQixnREFBZ0QsMkJBQTJCLDRCQUE0QixXQUFXLFNBQVMsdUNBQXVDLHdCQUF3QiwyQkFBMkIsd0JBQXdCLDBCQUEwQixrQ0FBa0MsNkJBQTZCLFNBQVMsNEJBQTRCLHVCQUF1Qix3QkFBd0IsZ0NBQWdDLDRLQUE0SyxxREFBcUQscUNBQXFDLDhCQUE4QiwwQkFBMEIsMkJBQTJCLGNBQWMsMENBQTBDLCtCQUErQixnQ0FBZ0MsNEJBQTRCLG1DQUFtQyx3QkFBd0IsV0FBVywrQkFBK0IsNkJBQTZCLDBCQUEwQix3QkFBd0Isb0NBQW9DLHVCQUF1QiwyQkFBMkIsNEJBQTRCLCtCQUErQixhQUFhLFdBQVcscUJBQXFCLDZCQUE2QiwwQkFBMEIsbUNBQW1DLDBCQUEwQixnQkFBZ0Isb0NBQW9DLGlDQUFpQyxrQ0FBa0MsOEJBQThCLHFDQUFxQyw2QkFBNkIsYUFBYSxXQUFXLFNBQVMseUJBQXlCLGlDQUFpQyw4QkFBOEIsb0NBQW9DLDJLQUEySywrREFBK0QsU0FBUyxzQ0FBc0MsZ0VBQWdFLDRLQUE0SywrQkFBK0IsdUJBQXVCLG9DQUFvQyxhQUFhLFdBQVcsU0FBUywyQkFBMkIsK0RBQStELFNBQVMsNkJBQTZCLHlCQUF5QixxQkFBcUIsU0FBUyxPQUFPLG9EQUFvRCxvQkFBb0IsT0FBTywwREFBMEQseUJBQXlCLE9BQU8sMERBQTBELGtDQUFrQywyQkFBMkIsT0FBTyxLQUFLLHdCQUF3QixrQkFBa0IsbUJBQW1CLEtBQUssbUNBQW1DLGtCQUFrQixtQkFBbUIsb0JBQW9CLDJDQUEyQyw4QkFBOEIsS0FBSyx3QkFBd0Isd0NBQXdDLG9CQUFvQix1QkFBdUIsS0FBSyw2QkFBNkIsbUJBQW1CLHVCQUF1QixLQUFLLGdEQUFnRCxpQkFBaUIsS0FBSyxzREFBc0QsdUJBQXVCLEtBQUssc0RBQXNELHlCQUF5QixLQUFLLDZCQUE2Qiw4QkFBOEIsdUJBQXVCLEtBQUssb0NBQW9DLFVBQVUsdUJBQXVCLHNDQUFzQywyQkFBMkIsNEJBQTRCLHdCQUF3QiwrQkFBK0Isa0NBQWtDLG9CQUFvQixPQUFPLDRCQUE0QixvQkFBb0Isc0JBQXNCLDJDQUEyQyxvQ0FBb0MseUJBQXlCLHNCQUFzQiw0QkFBNEIsK0JBQStCLDRLQUE0SyxxQ0FBcUMsOEJBQThCLDJCQUEyQiwwQ0FBMEMsMEJBQTBCLDJCQUEyQiwrQkFBK0IsdUJBQXVCLHdCQUF3QixxQkFBcUIsc0JBQXNCLDZDQUE2QyxXQUFXLHVCQUF1QixrRkFBa0YsV0FBVyxtQkFBbUIsa0ZBQWtGLFdBQVcsbUJBQW1CLGtGQUFrRixXQUFXLG1CQUFtQixrRkFBa0YsV0FBVyxtQkFBbUIsa0ZBQWtGLFdBQVcsbUJBQW1CLGtGQUFrRixXQUFXLFNBQVMsc0NBQXNDLG1FQUFtRSxTQUFTLHdDQUF3QyxTQUFTLE9BQU8sS0FBSyxvQ0FBb0MsVUFBVSx1QkFBdUIsc0NBQXNDLDJCQUEyQiw0QkFBNEIsd0JBQXdCLCtCQUErQixrQ0FBa0Msb0JBQW9CLE9BQU8sNEJBQTRCLG9CQUFvQixzQkFBc0IsbURBQW1ELG9DQUFvQyx5QkFBeUIsc0JBQXNCLCtCQUErQiwrQkFBK0IsNkJBQTZCLDBDQUEwQywyQkFBMkIsMEJBQTBCLFNBQVMseUNBQXlDLG1FQUFtRSxTQUFTLG1CQUFtQixxREFBcUQsU0FBUyxlQUFlLHFEQUFxRCxTQUFTLGVBQWUscURBQXFELFNBQVMsZUFBZSxxREFBcUQsU0FBUyxlQUFlLHFEQUFxRCxTQUFTLGVBQWUscURBQXFELFNBQVMsZUFBZSxxREFBcUQsU0FBUyxlQUFlLHFEQUFxRCxTQUFTLGVBQWUscURBQXFELFNBQVMsZ0JBQWdCLHNEQUFzRCxTQUFTLDJDQUEyQyxvQ0FBb0MsU0FBUyxPQUFPLEtBQUssaUNBQWlDLFVBQVUsdUJBQXVCLHNDQUFzQywyQkFBMkIsNEJBQTRCLHdCQUF3QiwrQkFBK0Isa0NBQWtDLG9CQUFvQixPQUFPLDBCQUEwQixzQkFBc0Isc0NBQXNDLGlDQUFpQyxzQkFBc0IsdUJBQXVCLDZCQUE2QiwwQkFBMEIsMkJBQTJCLHVCQUF1QixTQUFTLHdCQUF3QixvR0FBb0csZ0VBQWdFLFNBQVMsMEJBQTBCLHFCQUFxQiw4REFBOEQsU0FBUyxvQkFBb0Isa0dBQWtHLDREQUE0RCxTQUFTLDBCQUEwQixxQkFBcUIsc0RBQXNELFNBQVMsb0JBQW9CLGtHQUFrRyw4REFBOEQsU0FBUywwQkFBMEIscUJBQXFCLDREQUE0RCxTQUFTLG9CQUFvQixrR0FBa0csOERBQThELFNBQVMsMEJBQTBCLHFCQUFxQiw0REFBNEQsU0FBUyxvQkFBb0IscUdBQXFHLCtEQUErRCxTQUFTLDBCQUEwQixxQkFBcUIsNkRBQTZELFNBQVMsbUNBQW1DLHFCQUFxQiw4REFBOEQsU0FBUyxxQkFBcUIsNkJBQTZCLGdDQUFnQyxzQkFBc0IsdUJBQXVCLGlCQUFpQiwwQkFBMEIsV0FBVyx1QkFBdUIsK0JBQStCLDRCQUE0QixtQkFBbUIsb0JBQW9CLHFCQUFxQixzQkFBc0IsbUNBQW1DLHFDQUFxQyw2QkFBNkIsV0FBVyw4QkFBOEIsK0JBQStCLHdCQUF3Qix5QkFBeUIsd0JBQXdCLHNCQUFzQix3QkFBd0Isc0NBQXNDLHFDQUFxQyw2QkFBNkIsV0FBVyx1Q0FBdUMsc0NBQXNDLFdBQVcscUNBQXFDLHdDQUF3QyxXQUFXLDhDQUE4QyxnREFBZ0QsNENBQTRDLHdDQUF3QyxXQUFXLDZCQUE2QixnQ0FBZ0MsV0FBVyxvQ0FBb0MsK0JBQStCLFdBQVcsU0FBUyxPQUFPLEtBQUssb0JBQW9CLGtDQUFrQyx5QkFBeUIsNkJBQTZCLDJCQUEyQixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLGtFQUFrRSxPQUFPLG1DQUFtQywyQkFBMkIsbUJBQW1CLGtCQUFrQixvQ0FBb0MscUJBQXFCLHNCQUFzQixvQkFBb0IsT0FBTyxLQUFLLG9CQUFvQix3Q0FBd0MsY0FBYyxZQUFZLG1DQUFtQyx3Q0FBd0MsNkJBQTZCLDhCQUE4QiwwQkFBMEIsaUNBQWlDLG9DQUFvQyxzQkFBc0IsMkJBQTJCLDBCQUEwQixTQUFTLE9BQU8sS0FBSyw4QkFBOEIsb0JBQW9CLG1CQUFtQixrQkFBa0IsNENBQTRDLHlDQUF5QyxzQkFBc0IsbUJBQW1CLHFCQUFxQiwyQkFBMkIsNkJBQTZCLGtLQUFrSyxtQ0FBbUMscUNBQXFDLHNDQUFzQyx3Q0FBd0MseUJBQXlCLHdCQUF3Qix3Q0FBd0MsbUJBQW1CLDZCQUE2QixxQkFBcUIsc0JBQXNCLG1CQUFtQixvQkFBb0IsMkNBQTJDLFNBQVMsd0JBQXdCLDZCQUE2Qix3QkFBd0IsOEJBQThCLGtDQUFrQyxtQkFBbUIsb0JBQW9CLHNCQUFzQix1QkFBdUIsc0NBQXNDLG9DQUFvQyxzQkFBc0IsMEJBQTBCLFNBQVMsT0FBTywrQkFBK0IsaUVBQWlFLE9BQU8sS0FBSyxlQUFlLG9CQUFvQixLQUFLLGtCQUFrQixvQkFBb0IseUJBQXlCLGtCQUFrQixnQkFBZ0Isa0NBQWtDLHFCQUFxQix3QkFBd0IsdUJBQXVCLHNCQUFzQixrQkFBa0Isa0JBQWtCLDJCQUEyQixLQUFLLGNBQWMsb0JBQW9CLGdFQUFnRSxLQUFLLGdCQUFnQixvQkFBb0IsK0RBQStELEtBQUssWUFBWSxvQkFBb0IsK0RBQStELEtBQUssaUJBQWlCLDBCQUEwQixnRUFBZ0UsS0FBSyxtQkFBbUIsMEJBQTBCLGtFQUFrRSxLQUFLLG1CQUFtQiwwQkFBMEIsa0VBQWtFLEtBQUssZUFBZSx3QkFBd0IsOERBQThELEtBQUssaUJBQWlCLHdCQUF3QixnRUFBZ0UsS0FBSyxpQkFBaUIsd0JBQXdCLGdFQUFnRSxLQUFLLGdCQUFnQix5QkFBeUIsK0RBQStELEtBQUssa0JBQWtCLHlCQUF5QixpRUFBaUUsS0FBSyxrQkFBa0IseUJBQXlCLGlFQUFpRSxLQUFLLDZCQUE2QixVQUFVLHlCQUF5QixPQUFPLFdBQVcsMEJBQTBCLE9BQU8sV0FBVywyQkFBMkIsT0FBTyxXQUFXLDRCQUE0QixPQUFPLEtBQUssK0JBQStCLFVBQVUsc0JBQXNCLE9BQU8sV0FBVyxzQkFBc0IsT0FBTyxXQUFXLHNCQUFzQixPQUFPLFdBQVcsc0JBQXNCLE9BQU8sS0FBSywrQkFBK0IsVUFBVSxzQkFBc0IsT0FBTyxXQUFXLHNCQUFzQixPQUFPLFdBQVcsc0JBQXNCLE9BQU8sV0FBVyxzQkFBc0IsT0FBTyxLQUFLLGdDQUFnQyxVQUFVLDRCQUE0QixPQUFPLFdBQVcseUJBQXlCLE9BQU8sV0FBVywwQkFBMEIsT0FBTyxXQUFXLDJCQUEyQixPQUFPLEtBQUssa0NBQWtDLFVBQVUsc0JBQXNCLE9BQU8sV0FBVyxzQkFBc0IsT0FBTyxXQUFXLHNCQUFzQixPQUFPLFdBQVcsc0JBQXNCLE9BQU8sS0FBSyxrQ0FBa0MsVUFBVSxzQkFBc0IsT0FBTyxXQUFXLHNCQUFzQixPQUFPLFdBQVcsc0JBQXNCLE9BQU8sV0FBVyxzQkFBc0IsT0FBTyxLQUFLLDhCQUE4QixVQUFVLDBCQUEwQixPQUFPLFdBQVcsMkJBQTJCLE9BQU8sV0FBVyw0QkFBNEIsT0FBTyxXQUFXLHlCQUF5QixPQUFPLEtBQUssZ0NBQWdDLFVBQVUsc0JBQXNCLE9BQU8sV0FBVyxzQkFBc0IsT0FBTyxXQUFXLHNCQUFzQixPQUFPLFdBQVcsc0JBQXNCLE9BQU8sS0FBSyxnQ0FBZ0MsVUFBVSxzQkFBc0IsT0FBTyxXQUFXLHNCQUFzQixPQUFPLFdBQVcsc0JBQXNCLE9BQU8sV0FBVyxzQkFBc0IsT0FBTyxLQUFLLCtCQUErQixVQUFVLDJCQUEyQixPQUFPLFdBQVcsNEJBQTRCLE9BQU8sV0FBVyx5QkFBeUIsT0FBTyxXQUFXLDBCQUEwQixPQUFPLEtBQUssaUNBQWlDLFVBQVUsc0JBQXNCLE9BQU8sV0FBVyxzQkFBc0IsT0FBTyxXQUFXLHNCQUFzQixPQUFPLFdBQVcsc0JBQXNCLE9BQU8sS0FBSyxpQ0FBaUMsVUFBVSxzQkFBc0IsT0FBTyxXQUFXLHNCQUFzQixPQUFPLFdBQVcsc0JBQXNCLE9BQU8sV0FBVyxzQkFBc0IsT0FBTyxLQUFLLHVCQUF1QjtBQUNqcC9IO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQzFFMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JCQTtBQUNBLElBQUksS0FBNEQ7QUFDaEUsSUFBSSxDQUMyRztBQUMvRyxDQUFDLDZCQUE2Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDRDQUE0QztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDRDQUE0QztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsNEJBQTRCLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUE4QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvQkFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDLHNDQUFzQyx5Q0FBeUM7QUFDL0Usa0NBQWtDLHFDQUFxQztBQUN2RSxtQ0FBbUMsc0NBQXNDO0FBQ3pFLHFCQUFxQix1QkFBdUI7QUFDNUMsdUJBQXVCLHlCQUF5QjtBQUNoRCx5QkFBeUIsMkJBQTJCO0FBQ3BELG9CQUFvQix1QkFBdUI7QUFDM0MsdUJBQXVCLDBCQUEwQjtBQUNqRCxpQ0FBaUMsb0NBQW9DO0FBQ3JFLHFCQUFxQix1QkFBdUI7QUFDNUMsMkJBQTJCLDhCQUE4QjtBQUN6RCxzQkFBc0IseUJBQXlCO0FBQy9DLHFCQUFxQix3QkFBd0I7QUFDN0MsdUJBQXVCLDBCQUEwQjtBQUNqRCx5QkFBeUIsMkJBQTJCO0FBQ3BELDBCQUEwQiw2QkFBNkI7QUFDdkQsc0JBQXNCLHlCQUF5QjtBQUMvQyx3QkFBd0IsMkJBQTJCO0FBQ25ELCtCQUErQixpQ0FBaUM7QUFDaEUsK0JBQStCLGtDQUFrQztBQUNqRSx5QkFBeUIsMkJBQTJCO0FBQ3BELDBCQUEwQiw0QkFBNEI7QUFDdEQsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0YsZ0JBQWdCO0FBQ2hHO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL25vVWlTbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzcz9jOGFkIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2FiODYiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL3NyYy9hcHAvYXBwLnRzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uY29tcG9uZW50LnRzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vc3JjL2NvbXBvbmVudHMvY2hyaXN0bWFzLXRyZWUuY29tcG9uZW50LnRzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vc3JjL2NvbXBvbmVudHMvZmF2b3JpdGUtdG95cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvY29tcG9uZW50cy9nYXJsYW5kLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL3NyYy9jb21wb25lbnRzL2xvY2FsLXN0b3JhZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vc3JjL2NvbXBvbmVudHMvc25vdy1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvY29tcG9uZW50cy9zb3J0LXRveXMuY29tcG9uZW50LnRzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vc3JjL2NvbXBvbmVudHMvc3RhcnQtZ2FtZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvY29tcG9uZW50cy90b3lzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL3NyYy9jb21wb25lbnRzL3VpLXNsaWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvbW9kdWxlcy9jb25zdC50cyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL3NyYy9tb2R1bGVzL2VudW0udHMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NocmlzdG1hcy10YXNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGdW5jdGlvbmFsIHN0eWxpbmc7XFxuICogVGhlc2Ugc3R5bGVzIGFyZSByZXF1aXJlZCBmb3Igbm9VaVNsaWRlciB0byBmdW5jdGlvbi5cXG4gKiBZb3UgZG9uJ3QgbmVlZCB0byBjaGFuZ2UgdGhlc2UgcnVsZXMgdG8gYXBwbHkgeW91ciBkZXNpZ24uXFxuICovXFxuLm5vVWktdGFyZ2V0LFxcbi5ub1VpLXRhcmdldCAqIHtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubm9VaS10YXJnZXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubm9VaS1iYXNlLFxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLyogV3JhcHBlciBmb3IgYWxsIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktY29ubmVjdHMge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbi5ub1VpLWNvbm5lY3QsXFxuLm5vVWktb3JpZ2luIHtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcXG59XFxuXFxuLyogT2Zmc2V0IGRpcmVjdGlvblxcbiAqL1xcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBHaXZlIG9yaWdpbnMgMCBoZWlnaHQvd2lkdGggc28gdGhleSBkb24ndCBpbnRlcmZlcmUgd2l0aCBjbGlja2luZyB0aGVcXG4gKiBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiB7XFxuICB0b3A6IC0xMDAlO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLm5vVWktaGFuZGxlIHtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubm9VaS10b3VjaC1hcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktY29ubmVjdCxcXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktb3JpZ2luIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4ubm9VaS1zdGF0ZS1kcmFnICoge1xcbiAgY3Vyc29yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFNsaWRlciBzaXplIGFuZCBoYW5kbGUgcGxhY2VtZW50O1xcbiAqL1xcbi5ub1VpLWhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHJpZ2h0OiAtMTdweDtcXG4gIHRvcDogLTZweDtcXG59XFxuXFxuLm5vVWktdmVydGljYWwge1xcbiAgd2lkdGg6IDE4cHg7XFxufVxcblxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIHJpZ2h0OiAtNnB4O1xcbiAgYm90dG9tOiAtMTdweDtcXG59XFxuXFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICBsZWZ0OiAtMTdweDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBTdHlsaW5nO1xcbiAqIEdpdmluZyB0aGUgY29ubmVjdCBlbGVtZW50IGEgYm9yZGVyIHJhZGl1cyBjYXVzZXMgaXNzdWVzIHdpdGggdXNpbmcgdHJhbnNmb3JtOiBzY2FsZVxcbiAqL1xcbi5ub1VpLXRhcmdldCB7XFxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0QzRDNEMztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjRjBGMEYwLCAwIDNweCA2cHggLTVweCAjQkJCO1xcbn1cXG5cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogIzNGQjhBRjtcXG59XFxuXFxuLyogSGFuZGxlcyBhbmQgY3Vyc29ycztcXG4gKi9cXG4ubm9VaS1kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcblxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuXFxuLm5vVWktaGFuZGxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0VCRUJFQiwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuXFxuLm5vVWktYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNEREQsIDAgM3B4IDZweCAtM3B4ICNCQkI7XFxufVxcblxcbi8qIEhhbmRsZSBzdHJpcGVzO1xcbiAqL1xcbi5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICB3aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZDogI0U4RTdFNjtcXG4gIGxlZnQ6IDE0cHg7XFxuICB0b3A6IDZweDtcXG59XFxuXFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGxlZnQ6IDE3cHg7XFxufVxcblxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBsZWZ0OiA2cHg7XFxuICB0b3A6IDE0cHg7XFxufVxcblxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuICB0b3A6IDE3cHg7XFxufVxcblxcbi8qIERpc2FibGVkIHN0YXRlO1xcbiAqL1xcbltkaXNhYmxlZF0gLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjQjhCOEI4O1xcbn1cXG5cXG5bZGlzYWJsZWRdLm5vVWktdGFyZ2V0LFxcbltkaXNhYmxlZF0ubm9VaS1oYW5kbGUsXFxuW2Rpc2FibGVkXSAubm9VaS1oYW5kbGUge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLyogQmFzZTtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMsXFxuLm5vVWktcGlwcyAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ub1VpLXBpcHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICM5OTk7XFxufVxcblxcbi8qIFZhbHVlcztcXG4gKlxcbiAqL1xcbi5ub1VpLXZhbHVlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ub1VpLXZhbHVlLXN1YiB7XFxuICBjb2xvcjogI2NjYztcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLyogTWFya2luZ3M7XFxuICpcXG4gKi9cXG4ubm9VaS1tYXJrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI0NDQztcXG59XFxuXFxuLm5vVWktbWFya2VyLXN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG5cXG4ubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgYmFja2dyb3VuZDogI0FBQTtcXG59XFxuXFxuLyogSG9yaXpvbnRhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLWhvcml6b250YWwge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxufVxcblxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG59XFxuXFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXIge1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcblxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLXN1YiB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuXFxuLyogVmVydGljYWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy12ZXJ0aWNhbCB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG5cXG4ubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxufVxcblxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlciB7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbn1cXG5cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi5ub1VpLXRvb2x0aXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS10b29sdGlwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgbGVmdDogNTAlO1xcbiAgYm90dG9tOiAxMjAlO1xcbn1cXG5cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS10b29sdGlwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTIwJTtcXG59XFxuXFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICBsZWZ0OiBhdXRvO1xcbiAgYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRvcDogYXV0bztcXG4gIHJpZ2h0OiAyOHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFBQTtBQUlBOztFQUVFLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBRUEsc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHRjs7QUFEQTtFQUFBO0FB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Y0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBa0RGOztBQWhEQTtFQUVFLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFtREY7O0FBakRBO0VBRUUsNkJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQW9ERjs7QUFsREE7RUFFRSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBcURGOztBQW5EQTtFQUVFLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFzREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRnVuY3Rpb25hbCBzdHlsaW5nO1xcbiAqIFRoZXNlIHN0eWxlcyBhcmUgcmVxdWlyZWQgZm9yIG5vVWlTbGlkZXIgdG8gZnVuY3Rpb24uXFxuICogWW91IGRvbid0IG5lZWQgdG8gY2hhbmdlIHRoZXNlIHJ1bGVzIHRvIGFwcGx5IHlvdXIgZGVzaWduLlxcbiAqL1xcbi5ub1VpLXRhcmdldCxcXG4ubm9VaS10YXJnZXQgKiB7XFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXRhcmdldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ub1VpLWJhc2UsXFxuLm5vVWktY29ubmVjdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4vKiBXcmFwcGVyIGZvciBhbGwgY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMDtcXG59XFxuLm5vVWktY29ubmVjdCxcXG4ubm9VaS1vcmlnaW4ge1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcbn1cXG4vKiBPZmZzZXQgZGlyZWN0aW9uXFxuICovXFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi8qIEdpdmUgb3JpZ2lucyAwIGhlaWdodC93aWR0aCBzbyB0aGV5IGRvbid0IGludGVyZmVyZSB3aXRoIGNsaWNraW5nIHRoZVxcbiAqIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luIHtcXG4gIHRvcDogLTEwMCU7XFxuICB3aWR0aDogMDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5ub1VpLXRvdWNoLWFyZWEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1jb25uZWN0LFxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1vcmlnaW4ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG4ubm9VaS1zdGF0ZS1kcmFnICoge1xcbiAgY3Vyc29yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxufVxcbi8qIFNsaWRlciBzaXplIGFuZCBoYW5kbGUgcGxhY2VtZW50O1xcbiAqL1xcbi5ub1VpLWhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHJpZ2h0OiAtMTdweDtcXG4gIHRvcDogLTZweDtcXG59XFxuLm5vVWktdmVydGljYWwge1xcbiAgd2lkdGg6IDE4cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIHJpZ2h0OiAtNnB4O1xcbiAgYm90dG9tOiAtMTdweDtcXG59XFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICBsZWZ0OiAtMTdweDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4vKiBTdHlsaW5nO1xcbiAqIEdpdmluZyB0aGUgY29ubmVjdCBlbGVtZW50IGEgYm9yZGVyIHJhZGl1cyBjYXVzZXMgaXNzdWVzIHdpdGggdXNpbmcgdHJhbnNmb3JtOiBzY2FsZVxcbiAqL1xcbi5ub1VpLXRhcmdldCB7XFxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0QzRDNEMztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjRjBGMEYwLCAwIDNweCA2cHggLTVweCAjQkJCO1xcbn1cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogIzNGQjhBRjtcXG59XFxuLyogSGFuZGxlcyBhbmQgY3Vyc29ycztcXG4gKi9cXG4ubm9VaS1kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuLm5vVWktaGFuZGxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0VCRUJFQiwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuLm5vVWktYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNEREQsIDAgM3B4IDZweCAtM3B4ICNCQkI7XFxufVxcbi8qIEhhbmRsZSBzdHJpcGVzO1xcbiAqL1xcbi5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICB3aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZDogI0U4RTdFNjtcXG4gIGxlZnQ6IDE0cHg7XFxuICB0b3A6IDZweDtcXG59XFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGxlZnQ6IDE3cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBsZWZ0OiA2cHg7XFxuICB0b3A6IDE0cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuICB0b3A6IDE3cHg7XFxufVxcbi8qIERpc2FibGVkIHN0YXRlO1xcbiAqL1xcbltkaXNhYmxlZF0gLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjQjhCOEI4O1xcbn1cXG5bZGlzYWJsZWRdLm5vVWktdGFyZ2V0LFxcbltkaXNhYmxlZF0ubm9VaS1oYW5kbGUsXFxuW2Rpc2FibGVkXSAubm9VaS1oYW5kbGUge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLyogQmFzZTtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMsXFxuLm5vVWktcGlwcyAqIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXBpcHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi8qIFZhbHVlcztcXG4gKlxcbiAqL1xcbi5ub1VpLXZhbHVlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ub1VpLXZhbHVlLXN1YiB7XFxuICBjb2xvcjogI2NjYztcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuLyogTWFya2luZ3M7XFxuICpcXG4gKi9cXG4ubm9VaS1tYXJrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI0NDQztcXG59XFxuLm5vVWktbWFya2VyLXN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG4ubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgYmFja2dyb3VuZDogI0FBQTtcXG59XFxuLyogSG9yaXpvbnRhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLWhvcml6b250YWwge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxufVxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlciB7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDVweDtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG4vKiBWZXJ0aWNhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLXZlcnRpY2FsIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcbi5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlciB7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcbi5ub1VpLXRvb2x0aXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJvdHRvbTogMTIwJTtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxMjAlO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gIGxlZnQ6IGF1dG87XFxuICBib3R0b206IDEwcHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMThweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMThweCk7XFxuICB0b3A6IGF1dG87XFxuICByaWdodDogMjhweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvTmV1Y2hhLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1N0ZXBwZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3N2Zy90cmVlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3RyZWUtYWN0aXZlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy8xLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3JzX3NjaG9vbF9qcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3N2Zy9hdWRpby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3N2Zy9zbm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3N2Zy9jbG9zZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9zdmcvYXJyb3ctZG93bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9zdmcvYmVsbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9zdmcvYmFsbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9zdmcvY29uZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9zdmcvc25vd2ZsYWtlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3N2Zy90b3kuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvdHJlZS8xLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3RyZWUvMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy90cmVlLzMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvdHJlZS80LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3RyZWUvNS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy90cmVlLzYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmcvMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9iZy8yLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2JnLzMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI2X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmcvNC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjdfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9iZy81LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2JnLzYuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmcvNy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9iZy84LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2JnLzkuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMyX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmcvMTAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKtCe0LHQvdGD0LvQtdC90LjQtSovXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46Zm9jdXMsIDphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYTpmb2N1cywgYTphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxubmF2LCBmb290ZXIsIGhlYWRlciwgYXNpZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbn1cXG5cXG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuaW5wdXQ6Oi1tcy1jbGVhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuYSwgYTp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyZjJkO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC1tb3otY29sdW1uLWdhcDogMzBweDtcXG4gICAgICAgY29sdW1uLWdhcDogMzBweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi5oZWFkZXItY29udGFpbmVyIC5sb2dvIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlci1jb250YWluZXIgLmxvZ286aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuLmhlYWRlci1jb250YWluZXIgLnBhZ2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oZWFkZXItY29udGFpbmVyIC5wYWdlOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDA5Njg4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxufVxcblxcbi5zdGFydC1nYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zdGFydC1nYW1lIC50b3lzLWNpcmNsZS1sZWZ0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDIwJTtcXG4gIHdpZHRoOiAyMS43NzF2dztcXG4gIHBhZGRpbmctYm90dG9tOiAzOS44ODYlO1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbn1cXG4uc3RhcnQtZ2FtZSAudG95cy1jaXJjbGUtcmlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMCU7XFxuICByaWdodDogMjglO1xcbiAgd2lkdGg6IDEyLjc3MXZ3O1xcbiAgcGFkZGluZy1ib3R0b206IDIzLjMzNCU7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxufVxcbi5zdGFydC1nYW1lIC50aXRsZS1jb250ZWluZXIgaDEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgcGFkZGluZzogNjdweCA4NXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiA1M3B4O1xcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSwgYXQgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuLnN0YXJ0LWdhbWUgLnN0YXJ0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICB0b3A6IDcwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUsIGF0IDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwKSAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3RhcnQtZ2FtZSAuc3RhcnQ6aG92ZXIge1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTJmMmQ7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZm9vdGVyLWNvbnRhaW5lciAubGVmdC1lbGVtZW50IHAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgb3BhY2l0eTogNzAlO1xcbn1cXG4uZm9vdGVyLWNvbnRhaW5lciAubGVmdC1lbGVtZW50IHAgc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuLmZvb3Rlci1jb250YWluZXIgLnJpZ2h0LWVsZW1lbnQgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxODBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLndyYXBwZXIge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxufVxcbi50b3lzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udG95cy1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NTBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcXG4gIC1tb3otY29sdW1uLWdhcDogMTBweDtcXG4gICAgICAgY29sdW1uLWdhcDogMTBweDtcXG59XFxuXFxuLmZpbHRlci1jb250ZWluZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZpbHRlci1jb250YWluZXItd3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5maWx0ZXItY29udGFpbmVyLWNvbnRlbnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNldHRpbmdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4uc2V0dGluZ3MgLmF1ZGlvIHtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKTtcXG59XFxuLnNldHRpbmdzIC5hdWRpbzpob3ZlciB7XFxuICBvcGFjaXR5OiA3NSU7XFxufVxcbi5zZXR0aW5ncyAuYXVkaW9fYWN0aXZlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDU0JSkgc2VwaWEoMTA3JSkgc2F0dXJhdGUoOTAxJSkgaHVlLXJvdGF0ZSgyNWRlZykgYnJpZ2h0bmVzcygxNDAlKSBjb250cmFzdCg5MyUpO1xcbn1cXG4uc2V0dGluZ3MgLnNub3cge1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpO1xcbn1cXG4uc2V0dGluZ3MgLnNub3c6aG92ZXIge1xcbiAgb3BhY2l0eTogNzUlO1xcbn1cXG4uc2V0dGluZ3MgLnNlYXJjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zZXR0aW5ncyAuc2VhcmNoIC5zZWFyY2gtaXRlbSB7XFxuICB3aWR0aDogMjYwcHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwIDUwcHggMCAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUsIGF0IDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwKSAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDNhOWY0O1xcbn1cXG4uc2V0dGluZ3MgLmNsZWFuLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIik7XFxufVxcbi5zZXR0aW5ncyAuc2VhcmNoLWljb246aG92ZXIge1xcbiAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG4uc29ydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1jb2x1bW4tZ2FwOiA0MHB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNvcnQgcCB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjcwcHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlLCBhdCAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzYTlmNDtcXG4gIHotaW5kZXg6IDU7XFxufVxcbi5zb3J0IC5zb3J0LWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIgLmNob29zZS1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpO1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIgLmNob29zZS1pdGVtOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDc1JTtcXG59XFxuLnNvcnQgLnNvcnQtY29udGFpbmVyIC5hbGwtaXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogOTAlO1xcbiAgbGVmdDogNSU7XFxuICB0b3A6IDExMCU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNTg1NztcXG59XFxuLnNvcnQgLnNvcnQtY29udGFpbmVyIC5hbGwtaXRlbSAuc29ydC1pdGVtIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zb3J0IC5zb3J0LWNvbnRhaW5lciAuYWxsLWl0ZW0gLnNvcnQtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY5Mzk2O1xcbn1cXG5cXG4uc29ydC1jYXRlZ29yeSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5zb3J0LWNhdGVnb3J5IC5jYXRlZ29yeS1jb250YWluZXIge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuLnNvcnQtY2F0ZWdvcnkgLmNhdGVnb3J5LWNvbnRhaW5lciAuYWxsIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmNkO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDdweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUsIGF0IDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNvcnQtY2F0ZWdvcnkgLmNhdGVnb3J5LWNvbnRhaW5lciAuYWxsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIvCfl7hcXFwiO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTAlO1xcbiAgYm90dG9tOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcbn1cXG4uc29ydC1jYXRlZ29yeSAuY2F0ZWdvcnktY29udGFpbmVyIC5hbGw6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50b3lzLWZvcm0ge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi50b3lzLWZvcm0gaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5mb3JtLWljb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmZvcm0taWNvbjpob3ZlciB7XFxuICBvcGFjaXR5OiA4NSU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmZvcm0taWNvbl9fYWN0aXZlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDU0JSkgc2VwaWEoMTA3JSkgc2F0dXJhdGUoOTAxJSkgaHVlLXJvdGF0ZSgyNWRlZykgYnJpZ2h0bmVzcygxNDAlKSBjb250cmFzdCg5MyUpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLTEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fICsgXCIpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLTIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fICsgXCIpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLTMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fICsgXCIpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLTQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fICsgXCIpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLTUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLTYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fICsgXCIpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLW5hbWUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qU2xpZGVyKi9cXG5tYWluIC5ub1VpLXRhcmdldCB7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNmMGYwZjAsIDAgM3B4IDZweCAtNXB4ICNiYmI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4gLm5vVWktaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDJweDtcXG59XFxuXFxubWFpbiAubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBjb250ZW50OiBub25lO1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAwcHg7XFxuICB3aWR0aDogMHB4O1xcbiAgYmFja2dyb3VuZDogI2U4ZTdlNjtcXG4gIGxlZnQ6IDE0cHg7XFxuICB0b3A6IDZweDtcXG59XFxuXFxubWFpbiAubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIHJpZ2h0OiAtMTNweDtcXG4gIHRvcDogLTZweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSksIHJhZGlhbC1ncmFkaWVudCg1Ny4yMyUgMjQ4LjIlIGF0IDEwNy4xNyUsIGF0IDEwNC4wMiUsIHJnYmEoMzQsIDE1MywgMjM1LCAwLjkyKSAwJSwgcmdiYSgzNCwgMTUzLCAyMzUsIDAuMDcpIDEwMCUpLCByYWRpYWwtZ3JhZGllbnQoMTA0LjIyJSAyMzAuOTQlIGF0IC00LjIyJSwgYXQgMCUsICMyNGM1ZGIgMy42MiUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjI2KSA1NS4xJSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLCByYWRpYWwtZ3JhZGllbnQoNTcuMjMlIDI0OC4yJSBhdCAxMDcuMTclIDEwNC4wMiUsIHJnYmEoMzQsIDE1MywgMjM1LCAwLjkyKSAwJSwgcmdiYSgzNCwgMTUzLCAyMzUsIDAuMDcpIDEwMCUpLCByYWRpYWwtZ3JhZGllbnQoMTA0LjIyJSAyMzAuOTQlIGF0IC00LjIyJSAwJSwgIzI0YzVkYiAzLjYyJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMjYpIDU1LjElKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4gLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjMjRjNWRiO1xcbn1cXG5cXG5tYWluIC5ub1VpLWJhc2UsXFxuLm5vVWktY29ubmVjdHMge1xcbiAgd2lkdGg6IDk3JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbm1haW4gLm5vVWktdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuI3JhbmdlLXllYXIgLm5vVWktdG9vbHRpcCB7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbiNyYW5nZS15ZWFyIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi8qU2xpZGVyLUVORCovXFxuLmNvdW50LWNvcHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi5jb3VudC1jb3B5IGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmNvdW50LWNvcHkgLmNvdW50LWNvcHktaXRlbSB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG4uY291bnQtY29weSAubWluIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTI1JTtcXG4gIGxlZnQ6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uY291bnQtY29weSAubWF4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTI1JTtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnllYXItcHVyY2hhc2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiA0MHB4IDAgMjBweCAwO1xcbn1cXG4ueWVhci1wdXJjaGFzZSBoMyB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi55ZWFyLXB1cmNoYXNlIC55ZWFyLXB1cmNoYXNlLWl0ZW0ge1xcbiAgbWFyZ2luLXRvcDogMzVweDtcXG59XFxuLnllYXItcHVyY2hhc2UgLm1pbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEyNSU7XFxuICBsZWZ0OiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnllYXItcHVyY2hhc2UgLm1heCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEyNSU7XFxuICByaWdodDogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5jb2xvciB7XFxuICBtYXJnaW46IDQwcHggMCAyMHB4IDA7XFxufVxcbi5jb2xvciBoMyB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWNvbHVtbi1nYXA6IDI1cHg7XFxuICAgICAgIGNvbHVtbi1nYXA6IDI1cHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuY29sb3ItaXRlbSB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5jb2xvci1pdGVtOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDc1JTtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLmNvbG9yLWl0ZW1fX2FjdGl2ZSB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAycHggcmdiYSgyNTMsIDIxNSwgMCwgMC44KTtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLml0ZW0tMSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuaXRlbS0yIHtcXG4gIGJhY2tncm91bmQ6ICNmZGQ3MDA7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5pdGVtLTMge1xcbiAgYmFja2dyb3VuZDogI2ZkMDAwMDtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLml0ZW0tNCB7XFxuICBiYWNrZ3JvdW5kOiAjMjI5OWViO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuaXRlbS01IHtcXG4gIGJhY2tncm91bmQ6ICMwOGFhMDU7XFxufVxcblxcbi5zaXplIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4uc2l6ZSBoMyB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5zaXplIC5zaXplLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNpemUgLnNpemUtY29udGFpbmVyIC5jb250YWluZXItaXRlbSB7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uc2l6ZSAuc2l6ZS1jb250YWluZXIgLnNpemUtaXRlbSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZjZDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA3cHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlLCBhdCAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5zaXplIC5zaXplLWNvbnRhaW5lciAuc2l6ZS1pdGVtOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIvCfl7hcXFwiO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTAlO1xcbiAgYm90dG9tOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcbn1cXG4uc2l6ZSAuc2l6ZS1jb250YWluZXIgLnNpemUtaXRlbTpjaGVja2VkOjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZhdm9yaXRlIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4uZmF2b3JpdGUgLmNvbnRhaW5lci1mYXZvcml0ZSB7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uZmF2b3JpdGUgLmNvbnRhaW5lci1mYXZvcml0ZSAuZmF2b3JpdGUtaXRlbSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZjZDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA3cHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlLCBhdCAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5mYXZvcml0ZSAuY29udGFpbmVyLWZhdm9yaXRlIC5mYXZvcml0ZS1pdGVtOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIvCfl7hcXFwiO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTAlO1xcbiAgYm90dG9tOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcbn1cXG4uZmF2b3JpdGUgLmNvbnRhaW5lci1mYXZvcml0ZSAuZmF2b3JpdGUtaXRlbTpjaGVja2VkOjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnN1Y3NzZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMjVweCAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtbW96LWNvbHVtbi1nYXA6IDQwcHg7XFxuICAgICAgIGNvbHVtbi1nYXA6IDQwcHg7XFxufVxcbi5zdWNzc2VzIC5hcHBseS1idG4ge1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSwgYXQgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5zdWNzc2VzIC5hcHBseS1idG46aG92ZXIge1xcbiAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAudGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otY29sdW1uLWdhcDogNTBweDtcXG4gICAgICAgY29sdW1uLWdhcDogNTBweDtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLnRpdGxlIGgyIHtcXG4gIG1hcmdpbjogMjBweCAwIDIwcHggNTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLm1lc3NhZ2UgLm1lc3NhZ2UtaXRlbSB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSg2NywgMTA0LCAxMDYsIDAuNyk7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWNvbHVtbi1nYXA6IDI1cHg7XFxuICAgICAgIGNvbHVtbi1nYXA6IDI1cHg7XFxuICByb3ctZ2FwOiAyNXB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQge1xcbiAgd2lkdGg6IDIyNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweCAwIDUwcHggMDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDkuNTYlIDEwOS41NiUgYXQgMCUsIGF0IC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJSk7XFxuICBib3JkZXI6IHJnYmEoMTIxLCAxMzksIDE0NCwgMC4xKSBzb2xpZCA1cHg7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50IGg0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCAuaWNvbi10b3ktY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCAuaWNvbi10b3ktY29udGFpbmVyIC5pY29uLXRveSB7XFxuICB3aWR0aDogMTEwcHg7XFxuICBoZWlnaHQ6IDExMHB4O1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCAuZGF0YS10b3kge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcm93LWdhcDogMTBweDtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCAuZGF0YS10b3kgbGkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5hY3RpdmUtdG95IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6ICM0Y2FmNTAgc29saWQgNXB4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSwgYXQgLTIuOTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsIHJnYmEoNzAsIDEwOSwgMTE0LCAwLjQpIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAwJSwgcmdiYSg3MCwgMTA5LCAxMTQsIDAuNCkgMTAwJSk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IHJnYmEoNzYsIDE3NSwgODAsIDAuNzUpO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSwgYXQgLTIuOTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsIHJnYmEoMTc5LCAyNDYsIDI1NSwgMC40KSAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsIHJnYmEoMTc5LCAyNDYsIDI1NSwgMC40KSAxMDAlKTtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudDpob3ZlciAuaWNvbi10b3ktY29udGFpbmVyIC5pY29uLXRveSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuYWN0aXZlLXRveTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IHJnYmEoNzYsIDE3NSwgODAsIDAuNzUpO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLm1lc3NhZ2VfYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTJweDtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzY4NmE7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5jaHJpc3RtYXMtdHJlZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNocmlzdG1hcy10cmVlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjNmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuLnNldHRpbmdzLXRyZWUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNSwgNDcsIDQ1LCAwLjcpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4uc2V0dGluZ3MtdHJlZS1wYWdlIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1vei1jb2x1bW4tZ2FwOiA1MHB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiA1MHB4O1xcbn1cXG5cXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiBoMiB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWNvbnRpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XFxuICAtbW96LWNvbHVtbi1nYXA6IDEwcHg7XFxuICAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICBncmlkLXJvdy1nYXA6IDEwcHg7XFxuICByb3ctZ2FwOiAxMHB4O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiAuY29sbGVjdGlvbi1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQge1xcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlLCBhdCAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCUpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJvcmRlcjogIzE3MmEyOSAycHggc29saWQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1jb2xsZWN0aW9uIC5jb2xsZWN0aW9uLWNvbnRpbmVyIC5jb250ZWluZXItY29udGVudCAuY29udGVpbmVyLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IC50cmVlLTEge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyArIFwiKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IC50cmVlLTIge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyArIFwiKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IC50cmVlLTMge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyArIFwiKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IC50cmVlLTQge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyArIFwiKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IC50cmVlLTUge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyArIFwiKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IC50cmVlLTYge1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyArIFwiKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA0cHggcmdiYSgxLCAxMzEsIDg1LCAwLjkpIGluc2V0O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCBoMiB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcXG4gIC1tb3otY29sdW1uLWdhcDogMTBweDtcXG4gICAgICAgY29sdW1uLWdhcDogMTBweDtcXG4gIGdyaWQtcm93LWdhcDogMTBweDtcXG4gIHJvdy1nYXA6IDEwcHg7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5jb250ZWluZXItY29udGVudC1iZyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGJvcmRlcjogIzE3MmEyOSAycHggc29saWQ7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQtYmc6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDRweCByZ2JhKDEsIDEzMSwgODUsIDAuOSkgaW5zZXQ7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy0xIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fICsgXCIpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctMiB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fXyArIFwiKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmJnLTMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjVfX18gKyBcIik7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy00IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19fICsgXCIpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctNSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yN19fXyArIFwiKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmJnLTYge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjhfX18gKyBcIik7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy03IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19fICsgXCIpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctOCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMF9fXyArIFwiKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmJnLTkge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzFfX18gKyBcIik7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy0xMCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMl9fXyArIFwiKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50LWJnX19hY3RpdmUge1xcbiAgYm9yZGVyOiAjMDNhOWY0IDJweCBzb2xpZDtcXG59XFxuXFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgaDIge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtY29udGFpbmVyLWl0ZW0ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtMSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNkZDBkMGQsICNlNWYyMTAsICMwYWU1MTEpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDI1MSwgMjUxLCAyNTEsIDAuMyk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC0xOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMnB4ICNmYmZiZmI7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC0yIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2Y2MDcwNywgI2NjNGMzZiwgI2RmNzA0OCk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMjU1LCAxLCAxLCAwLjMpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtMjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCAjZmYwMTAxO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtMyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwZjAwZmYsICMyNTJhYzMsICMxYjBkNmYpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDExLCA2MCwgMjQ3LCAwLjMpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtMzpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCAjMGIzY2Y3O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtNCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwZmZmMDAsICMyNWMzMmEsICMwZDZmMzcpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDM1LCAyNDcsIDExLCAwLjMpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtNDpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCAjMjNmNzBiO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtNSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlNWZmMDAsICNiM2MzMjUsICM2ZjZjMGQpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDIxNSwgMjI3LCAxNiwgMC4zKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLTU6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAycHggI2Q3ZTMxMDtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLWl0ZW1fX2FjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCAjZmJmYmZiO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5zd2l0Y2ggaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5zd2l0Y2ggLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5zd2l0Y2ggLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDEzcHg7XFxuICB3aWR0aDogMTNweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZDIwOTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZhNjI7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuc3dpdGNoIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMwZTZhNjI7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuc3dpdGNoIC5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5zd2l0Y2ggLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubWFpbi10cmVlIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1haW4tdHJlZSAuY2hyaXN0bWFzLWJnLWN1cnJlbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogY2VudGVyL2NvdmVyIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fICsgXCIpO1xcbn1cXG4ubWFpbi10cmVlIC5jaHJpc3RtYXMtdHJlZS1jYXJyZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMSU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi50b3lzLXRyZWUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNSwgNDcsIDQ1LCAwLjcpO1xcbn1cXG4udG95cy10cmVlIC50aXRsZSBoMiB7XFxuICBtYXJnaW46IDIwcHggMCAyMHB4IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRveXMtdHJlZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICBncmlkLWNvbHVtbi1nYXA6IDVweDtcXG4gIC1tb3otY29sdW1uLWdhcDogNXB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiA1cHg7XFxuICBncmlkLXJvdy1nYXA6IDVweDtcXG4gIHJvdy1nYXA6IDVweDtcXG59XFxuLnRveXMtdHJlZS1jb250YWluZXIgLnRveS1mb3ItdHJlZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDkuNTYlIDEwOS41NiUgYXQgMCUsIGF0IC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJSk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAjMTcyYTI5IDJweCBzb2xpZDtcXG59XFxuLnRveXMtdHJlZS1jb250YWluZXIgLnRveS1mb3ItdHJlZSAudG95LWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDY1JTtcXG4gIGhlaWdodDogNjUlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLnRveXMtdHJlZS1jb250YWluZXIgLnRveS1mb3ItdHJlZSAudG95LWNvdW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG4udG95cy10cmVlLWNvbnRhaW5lciAudG95LWZvci10cmVlOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA0cHggcmdiYSgxLCAxMzEsIDg1LCAwLjkpIGluc2V0O1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ2FybGFuZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtNCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtLXJlZDogI2ZmMmMyYztcXG4gIC0teWVsbG93OiAjZmZlYjAwO1xcbiAgLS1ncmVlbjogIzAwZmY1ZDtcXG4gIC0tYmx1ZTogIzAwOTVmZjtcXG4gIC0tc3BlZWQ6IDJzO1xcbiAgei1pbmRleDogMTU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnJlZCB7XFxuICBmaWxsOiAjZjgwNjA2O1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtSZWRSZWQ7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1JlZFJlZDtcXG59XFxuXFxuLnJlZF8xIHtcXG4gIGZpbGw6ICNmODA2MDY7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1JlZF8xO1xcbiAgICAgICAgICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtSZWRfMTtcXG59XFxuXFxuLnJlZF8yIHtcXG4gIGZpbGw6ICNmN2IxYjE7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1JlZF8yO1xcbiAgICAgICAgICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtSZWRfMjtcXG59XFxuXFxuLnllbGxvdyB7XFxuICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtZZWxsb3c7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1llbGxvdztcXG59XFxuXFxuLnllbGxvd18xIHtcXG4gIGZpbGw6IHZhcigtLXllbGxvdyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1llbGxvd18xO1xcbiAgICAgICAgICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtZZWxsb3dfMTtcXG59XFxuXFxuLnllbGxvd18yIHtcXG4gIGZpbGw6IHZhcigtLXllbGxvdyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1llbGxvd18yO1xcbiAgICAgICAgICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtZZWxsb3dfMjtcXG59XFxuXFxuLmJsdWUge1xcbiAgZmlsbDogdmFyKC0tYmx1ZSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0JsdWU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0JsdWU7XFxufVxcblxcbi5ibHVlXzEge1xcbiAgZmlsbDogdmFyKC0tYmx1ZSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0JsdWVfMTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rQmx1ZV8xO1xcbn1cXG5cXG4uYmx1ZV8yIHtcXG4gIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtCbHVlXzI7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0JsdWVfMjtcXG59XFxuXFxuLmdyZWVuIHtcXG4gIGZpbGw6IHZhcigtLWdyZWVuKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rR3JlZW47XFxuICAgICAgICAgIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0dyZWVuO1xcbn1cXG5cXG4uZ3JlZW5fMSB7XFxuICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0dyZWVuXzE7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0dyZWVuXzE7XFxufVxcblxcbi5ncmVlbl8yIHtcXG4gIGZpbGw6IHZhcigtLWdyZWVuKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rR3JlZW5fMjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rR3JlZW5fMjtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rUmVkIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogdmFyKC0tcmVkKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogdmFyKC0teWVsbG93KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBibGlua1JlZCB7XFxuICAwJSB7XFxuICAgIGZpbGw6IHZhcigtLXJlZCk7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6IHZhcigtLWdyZWVuKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6IHZhcigtLXllbGxvdyk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBibGlua1JlZF8xIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogI2Y4MDYwNjtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICNmN2IxYjE7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjZjgwNjA2O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogI2Y3YjFiMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua1JlZF8xIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogI2Y4MDYwNjtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICNmN2IxYjE7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjZjgwNjA2O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogI2Y3YjFiMTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rUmVkXzIge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjZjdiMWIxO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogI2Y4MDYwNjtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICNmN2IxYjE7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjZjgwNjA2O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rUmVkXzIge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjZjdiMWIxO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogI2Y4MDYwNjtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICNmN2IxYjE7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjZjgwNjA2O1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtZZWxsb3cge1xcbiAgMCUge1xcbiAgICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogdmFyKC0tcmVkKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rWWVsbG93IHtcXG4gIDAlIHtcXG4gICAgZmlsbDogdmFyKC0teWVsbG93KTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6IHZhcigtLXJlZCk7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6IHZhcigtLWdyZWVuKTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rWWVsbG93XzEge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjZmZkOTA0O1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogI2Y3ZjNjZDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICNmZmQ5MDQ7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjZjdmM2NkO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rWWVsbG93XzEge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjZmZkOTA0O1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogI2Y3ZjNjZDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICNmZmQ5MDQ7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjZjdmM2NkO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtZZWxsb3dfMiB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICNmN2YzY2Q7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjZmZkOTA0O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogI2Y3ZjNjZDtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICNmZmQ5MDQ7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtZZWxsb3dfMiB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICNmN2YzY2Q7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjZmZkOTA0O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogI2Y3ZjNjZDtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICNmZmQ5MDQ7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBibGlua0JsdWUge1xcbiAgMCUge1xcbiAgICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6IHZhcigtLWdyZWVuKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6IHZhcigtLXllbGxvdyk7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiB2YXIoLS1yZWQpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rQmx1ZSB7XFxuICAwJSB7XFxuICAgIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogdmFyKC0teWVsbG93KTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6IHZhcigtLXJlZCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBibGlua0JsdWVfMSB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICMxMTAwZmY7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjOTJjZGY3O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogIzExMDBmZjtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICM5MmNkZjc7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtCbHVlXzEge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjMTEwMGZmO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogIzkyY2RmNztcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICMxMTAwZmY7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjOTJjZGY3O1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtCbHVlXzIge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjOTJjZGY3O1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogIzExMDBmZjtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICM5MmNkZjc7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjMTEwMGZmO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rQmx1ZV8yIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogIzkyY2RmNztcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICMxMTAwZmY7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjOTJjZGY3O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogIzExMDBmZjtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rR3JlZW4ge1xcbiAgMCUge1xcbiAgICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogdmFyKC0tcmVkKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rR3JlZW4ge1xcbiAgMCUge1xcbiAgICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogdmFyKC0tcmVkKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtHcmVlbl8xIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogIzI4YzcwMDtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICNiY2ZmZDU7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjMjhjNzAwO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogI2JjZmZkNTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua0dyZWVuXzEge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjMjhjNzAwO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogI2JjZmZkNTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICMyOGM3MDA7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjYmNmZmQ1O1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtHcmVlbl8yIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogI2JjZmZkNTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICMyOGM3MDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjYmNmZmQ1O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogIzI4YzcwMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua0dyZWVuXzIge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjYmNmZmQ1O1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogIzI4YzcwMDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICNiY2ZmZDU7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjMjhjNzAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3N0YXJ0LXBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdG95cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL190cmVlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCLFlBQUE7QUFDQTtFQUNDLFVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBREVEOztBQ0FBO0VBR0Msc0JBQUE7QURHRDs7QUNEQTtFQUFlLGFBQUE7QURLZjs7QUNKQTtFQUFpQixhQUFBO0FEUWpCOztBQ1BBO0VBQXdCLGNBQUE7QURXeEI7O0FDVkE7RUFFQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FEWUQ7O0FDVkE7RUFBc0Isb0JBQUE7QURjdEI7O0FDYkE7RUFBaUIsYUFBQTtBRGlCakI7O0FDaEJBO0VBQU8sZUFBQTtBRG9CUDs7QUNuQkE7RUFBMEIsVUFBQTtFQUFVLFNBQUE7QUR3QnBDOztBQ3ZCQTtFQUFhLHFCQUFBO0FEMkJiOztBQzFCQTtFQUFRLHFCQUFBO0FEOEJSOztBQzdCQTtFQUFNLGdCQUFBO0FEaUNOOztBQ2hDQTtFQUFJLG1CQUFBO0FEb0NKOztBQ25DQTtFQUFrQixrQkFBQTtFQUFrQixn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RjtFS2w2QkE7SUFDRSxhQUFBO0VMbzZCRjtFS2w2QkE7SUFDRSxhQUFBO0VMbzZCRjtBQUNGO0FLajZCQTtFQUNFO0lBQ0UsYUFBQTtFTG02QkY7RUtqNkJBO0lBQ0UsYUFBQTtFTG02QkY7RUtqNkJBO0lBQ0UsYUFBQTtFTG02QkY7RUtqNkJBO0lBQ0UsYUFBQTtFTG02QkY7QUFDRjtBSy82QkE7RUFDRTtJQUNFLGFBQUE7RUxtNkJGO0VLajZCQTtJQUNFLGFBQUE7RUxtNkJGO0VLajZCQTtJQUNFLGFBQUE7RUxtNkJGO0VLajZCQTtJQUNFLGFBQUE7RUxtNkJGO0FBQ0Y7QUtoNkJBO0VBQ0U7SUFDRSxtQkFBQTtFTGs2QkY7RUtoNkJBO0lBQ0UsZ0JBQUE7RUxrNkJGO0VLaDZCQTtJQUNFLGlCQUFBO0VMazZCRjtFS2g2QkE7SUFDRSxrQkFBQTtFTGs2QkY7QUFDRjtBSzk2QkE7RUFDRTtJQUNFLG1CQUFBO0VMazZCRjtFS2g2QkE7SUFDRSxnQkFBQTtFTGs2QkY7RUtoNkJBO0lBQ0UsaUJBQUE7RUxrNkJGO0VLaDZCQTtJQUNFLGtCQUFBO0VMazZCRjtBQUNGO0FLLzVCQTtFQUNFO0lBQ0UsYUFBQTtFTGk2QkY7RUsvNUJBO0lBQ0UsYUFBQTtFTGk2QkY7RUsvNUJBO0lBQ0UsYUFBQTtFTGk2QkY7RUsvNUJBO0lBQ0UsYUFBQTtFTGk2QkY7QUFDRjtBSzc2QkE7RUFDRTtJQUNFLGFBQUE7RUxpNkJGO0VLLzVCQTtJQUNFLGFBQUE7RUxpNkJGO0VLLzVCQTtJQUNFLGFBQUE7RUxpNkJGO0VLLzVCQTtJQUNFLGFBQUE7RUxpNkJGO0FBQ0Y7QUs5NUJBO0VBQ0U7SUFDRSxhQUFBO0VMZzZCRjtFSzk1QkE7SUFDRSxhQUFBO0VMZzZCRjtFSzk1QkE7SUFDRSxhQUFBO0VMZzZCRjtFSzk1QkE7SUFDRSxhQUFBO0VMZzZCRjtBQUNGO0FLNTZCQTtFQUNFO0lBQ0UsYUFBQTtFTGc2QkY7RUs5NUJBO0lBQ0UsYUFBQTtFTGc2QkY7RUs5NUJBO0lBQ0UsYUFBQTtFTGc2QkY7RUs5NUJBO0lBQ0UsYUFBQTtFTGc2QkY7QUFDRjtBSzc1QkE7RUFDRTtJQUNFLGlCQUFBO0VMKzVCRjtFSzc1QkE7SUFDRSxrQkFBQTtFTCs1QkY7RUs3NUJBO0lBQ0UsbUJBQUE7RUwrNUJGO0VLNzVCQTtJQUNFLGdCQUFBO0VMKzVCRjtBQUNGO0FLMzZCQTtFQUNFO0lBQ0UsaUJBQUE7RUwrNUJGO0VLNzVCQTtJQUNFLGtCQUFBO0VMKzVCRjtFSzc1QkE7SUFDRSxtQkFBQTtFTCs1QkY7RUs3NUJBO0lBQ0UsZ0JBQUE7RUwrNUJGO0FBQ0Y7QUs1NUJBO0VBQ0U7SUFDRSxhQUFBO0VMODVCRjtFSzU1QkE7SUFDRSxhQUFBO0VMODVCRjtFSzU1QkE7SUFDRSxhQUFBO0VMODVCRjtFSzU1QkE7SUFDRSxhQUFBO0VMODVCRjtBQUNGO0FLMTZCQTtFQUNFO0lBQ0UsYUFBQTtFTDg1QkY7RUs1NUJBO0lBQ0UsYUFBQTtFTDg1QkY7RUs1NUJBO0lBQ0UsYUFBQTtFTDg1QkY7RUs1NUJBO0lBQ0UsYUFBQTtFTDg1QkY7QUFDRjtBSzM1QkE7RUFDRTtJQUNFLGFBQUE7RUw2NUJGO0VLMzVCQTtJQUNFLGFBQUE7RUw2NUJGO0VLMzVCQTtJQUNFLGFBQUE7RUw2NUJGO0VLMzVCQTtJQUNFLGFBQUE7RUw2NUJGO0FBQ0Y7QUt6NkJBO0VBQ0U7SUFDRSxhQUFBO0VMNjVCRjtFSzM1QkE7SUFDRSxhQUFBO0VMNjVCRjtFSzM1QkE7SUFDRSxhQUFBO0VMNjVCRjtFSzM1QkE7SUFDRSxhQUFBO0VMNjVCRjtBQUNGO0FLMTVCQTtFQUNFO0lBQ0Usa0JBQUE7RUw0NUJGO0VLMTVCQTtJQUNFLG1CQUFBO0VMNDVCRjtFSzE1QkE7SUFDRSxnQkFBQTtFTDQ1QkY7RUsxNUJBO0lBQ0UsaUJBQUE7RUw0NUJGO0FBQ0Y7QUt4NkJBO0VBQ0U7SUFDRSxrQkFBQTtFTDQ1QkY7RUsxNUJBO0lBQ0UsbUJBQUE7RUw0NUJGO0VLMTVCQTtJQUNFLGdCQUFBO0VMNDVCRjtFSzE1QkE7SUFDRSxpQkFBQTtFTDQ1QkY7QUFDRjtBS3o1QkE7RUFDRTtJQUNFLGFBQUE7RUwyNUJGO0VLejVCQTtJQUNFLGFBQUE7RUwyNUJGO0VLejVCQTtJQUNFLGFBQUE7RUwyNUJGO0VLejVCQTtJQUNFLGFBQUE7RUwyNUJGO0FBQ0Y7QUt2NkJBO0VBQ0U7SUFDRSxhQUFBO0VMMjVCRjtFS3o1QkE7SUFDRSxhQUFBO0VMMjVCRjtFS3o1QkE7SUFDRSxhQUFBO0VMMjVCRjtFS3o1QkE7SUFDRSxhQUFBO0VMMjVCRjtBQUNGO0FLeDVCQTtFQUNFO0lBQ0UsYUFBQTtFTDA1QkY7RUt4NUJBO0lBQ0UsYUFBQTtFTDA1QkY7RUt4NUJBO0lBQ0UsYUFBQTtFTDA1QkY7RUt4NUJBO0lBQ0UsYUFBQTtFTDA1QkY7QUFDRjtBS3Q2QkE7RUFDRTtJQUNFLGFBQUE7RUwwNUJGO0VLeDVCQTtJQUNFLGFBQUE7RUwwNUJGO0VLeDVCQTtJQUNFLGFBQUE7RUwwNUJGO0VLeDVCQTtJQUNFLGFBQUE7RUwwNUJGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKtCe0LHQvdGD0LvQtdC90LjQtSovXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46Zm9jdXMsIDphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYTpmb2N1cywgYTphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxubmF2LCBmb290ZXIsIGhlYWRlciwgYXNpZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbn1cXG5cXG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuaW5wdXQ6Oi1tcy1jbGVhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuYSwgYTp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL05ldWNoYS1SZWd1bGFyLnR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL1N0ZXBwZS50dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyZjJkO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbHVtbi1nYXA6IDMwcHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG4uaGVhZGVyLWNvbnRhaW5lciAubG9nbyB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy90cmVlLnN2Zyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oZWFkZXItY29udGFpbmVyIC5sb2dvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3RyZWUtYWN0aXZlLnN2Zyk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4uaGVhZGVyLWNvbnRhaW5lciAucGFnZSB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlci1jb250YWluZXIgLnBhZ2U6aG92ZXIge1xcbiAgY29sb3I6ICMwMDk2ODg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcuanBnKTtcXG59XFxuXFxuLnN0YXJ0LWdhbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnN0YXJ0LWdhbWUgLnRveXMtY2lyY2xlLWxlZnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMjAlO1xcbiAgd2lkdGg6IDIxLjc3MXZ3O1xcbiAgcGFkZGluZy1ib3R0b206IDM5Ljg4NiU7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzLzEucG5nKTtcXG59XFxuLnN0YXJ0LWdhbWUgLnRveXMtY2lyY2xlLXJpZ2h0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAlO1xcbiAgcmlnaHQ6IDI4JTtcXG4gIHdpZHRoOiAxMi43NzF2dztcXG4gIHBhZGRpbmctYm90dG9tOiAyMy4zMzQlO1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy8yLnBuZyk7XFxufVxcbi5zdGFydC1nYW1lIC50aXRsZS1jb250ZWluZXIgaDEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgcGFkZGluZzogNjdweCA4NXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiA1M3B4O1xcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG4uc3RhcnQtZ2FtZSAuc3RhcnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogNTRweDtcXG4gIHRvcDogNzAlO1xcbiAgbGVmdDogNTAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnN0YXJ0LWdhbWUgLnN0YXJ0OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyZjJkO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmZvb3Rlci1jb250YWluZXIgLmxlZnQtZWxlbWVudCBwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIG9wYWNpdHk6IDcwJTtcXG59XFxuLmZvb3Rlci1jb250YWluZXIgLmxlZnQtZWxlbWVudCBwIHNwYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbi5mb290ZXItY29udGFpbmVyIC5yaWdodC1lbGVtZW50IGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTgwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3JzX3NjaG9vbF9qcy5wbmcpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAud3JhcHBlciB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG59XFxuLnRveXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50b3lzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG59XFxuXFxuLmZpbHRlci1jb250ZWluZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZpbHRlci1jb250YWluZXItd3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5maWx0ZXItY29udGFpbmVyLWNvbnRlbnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNldHRpbmdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4uc2V0dGluZ3MgLmF1ZGlvIHtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2F1ZGlvLnN2Zyk7XFxufVxcbi5zZXR0aW5ncyAuYXVkaW86aG92ZXIge1xcbiAgb3BhY2l0eTogNzUlO1xcbn1cXG4uc2V0dGluZ3MgLmF1ZGlvX2FjdGl2ZSB7XFxuICBmaWx0ZXI6IGludmVydCg1NCUpIHNlcGlhKDEwNyUpIHNhdHVyYXRlKDkwMSUpIGh1ZS1yb3RhdGUoMjVkZWcpIGJyaWdodG5lc3MoMTQwJSkgY29udHJhc3QoOTMlKTtcXG59XFxuLnNldHRpbmdzIC5zbm93IHtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3Nub3cuc3ZnKTtcXG59XFxuLnNldHRpbmdzIC5zbm93OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDc1JTtcXG59XFxuLnNldHRpbmdzIC5zZWFyY2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2V0dGluZ3MgLnNlYXJjaCAuc2VhcmNoLWl0ZW0ge1xcbiAgd2lkdGg6IDI2MHB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCA1MHB4IDAgMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwKSAxMDAlKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDNhOWY0O1xcbn1cXG4uc2V0dGluZ3MgLmNsZWFuLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2Nsb3NlLnN2Zyk7XFxufVxcbi5zZXR0aW5ncyAuc2VhcmNoLWljb246aG92ZXIge1xcbiAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG4uc29ydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zb3J0IHAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnNvcnQgLnNvcnQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzYTlmNDtcXG4gIHotaW5kZXg6IDU7XFxufVxcbi5zb3J0IC5zb3J0LWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIgLmNob29zZS1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9hcnJvdy1kb3duLnN2Zyk7XFxufVxcbi5zb3J0IC5zb3J0LWNvbnRhaW5lciAuY2hvb3NlLWl0ZW06aG92ZXIge1xcbiAgb3BhY2l0eTogNzUlO1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIgLmFsbC1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA5MCU7XFxuICBsZWZ0OiA1JTtcXG4gIHRvcDogMTEwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U1ODU3O1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIgLmFsbC1pdGVtIC5zb3J0LWl0ZW0ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNvcnQgLnNvcnQtY29udGFpbmVyIC5hbGwtaXRlbSAuc29ydC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjkzOTY7XFxufVxcblxcbi5zb3J0LWNhdGVnb3J5IHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnNvcnQtY2F0ZWdvcnkgLmNhdGVnb3J5LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4uc29ydC1jYXRlZ29yeSAuY2F0ZWdvcnktY29udGFpbmVyIC5hbGwge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2Y2Q7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogN3B4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5zb3J0LWNhdGVnb3J5IC5jYXRlZ29yeS1jb250YWluZXIgLmFsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLwn5e4XFxcIjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUwJTtcXG4gIGJvdHRvbTogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcXG59XFxuLnNvcnQtY2F0ZWdvcnkgLmNhdGVnb3J5LWNvbnRhaW5lciAuYWxsOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udG95cy1mb3JtIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4udG95cy1mb3JtIGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuZm9ybS1pY29uIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5mb3JtLWljb246aG92ZXIge1xcbiAgb3BhY2l0eTogODUlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5mb3JtLWljb25fX2FjdGl2ZSB7XFxuICBmaWx0ZXI6IGludmVydCg1NCUpIHNlcGlhKDEwNyUpIHNhdHVyYXRlKDkwMSUpIGh1ZS1yb3RhdGUoMjVkZWcpIGJyaWdodG5lc3MoMTQwJSkgY29udHJhc3QoOTMlKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi0xIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvYmVsbC5zdmcpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLTIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9iYWxsLnN2Zyk7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tMyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2NvbmUuc3ZnKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi00IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvc25vd2ZsYWtlLnN2Zyk7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tNSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9zbm93LnN2Zyk7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tNiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3RveS5zdmcpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLW5hbWUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qU2xpZGVyKi9cXG5tYWluIC5ub1VpLXRhcmdldCB7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNmMGYwZjAsIDAgM3B4IDZweCAtNXB4ICNiYmI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4gLm5vVWktaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDJweDtcXG59XFxuXFxubWFpbiAubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBjb250ZW50OiBub25lO1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAwcHg7XFxuICB3aWR0aDogMHB4O1xcbiAgYmFja2dyb3VuZDogI2U4ZTdlNjtcXG4gIGxlZnQ6IDE0cHg7XFxuICB0b3A6IDZweDtcXG59XFxuXFxubWFpbiAubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIHJpZ2h0OiAtMTNweDtcXG4gIHRvcDogLTZweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSksIHJhZGlhbC1ncmFkaWVudCg1Ny4yMyUgMjQ4LjIlIGF0IDEwNy4xNyUgMTA0LjAyJSwgcmdiYSgzNCwgMTUzLCAyMzUsIDAuOTIpIDAlLCByZ2JhKDM0LCAxNTMsIDIzNSwgMC4wNykgMTAwJSksIHJhZGlhbC1ncmFkaWVudCgxMDQuMjIlIDIzMC45NCUgYXQgLTQuMjIlIDAlLCAjMjRjNWRiIDMuNjIlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4yNikgNTUuMSUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICMyNGM1ZGI7XFxufVxcblxcbm1haW4gLm5vVWktYmFzZSxcXG4ubm9VaS1jb25uZWN0cyB7XFxuICB3aWR0aDogOTclO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxubWFpbiAubm9VaS10b29sdGlwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4jcmFuZ2UteWVhciAubm9VaS10b29sdGlwIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuI3JhbmdlLXllYXIge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLypTbGlkZXItRU5EKi9cXG4uY291bnQtY29weSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLmNvdW50LWNvcHkgaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uY291bnQtY29weSAuY291bnQtY29weS1pdGVtIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi5jb3VudC1jb3B5IC5taW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMjUlO1xcbiAgbGVmdDogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5jb3VudC1jb3B5IC5tYXgge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMjUlO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ueWVhci1wdXJjaGFzZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDQwcHggMCAyMHB4IDA7XFxufVxcbi55ZWFyLXB1cmNoYXNlIGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnllYXItcHVyY2hhc2UgLnllYXItcHVyY2hhc2UtaXRlbSB7XFxuICBtYXJnaW4tdG9wOiAzNXB4O1xcbn1cXG4ueWVhci1wdXJjaGFzZSAubWluIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTI1JTtcXG4gIGxlZnQ6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4ueWVhci1wdXJjaGFzZSAubWF4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTI1JTtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmNvbG9yIHtcXG4gIG1hcmdpbjogNDBweCAwIDIwcHggMDtcXG59XFxuLmNvbG9yIGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDI1cHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuY29sb3ItaXRlbSB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5jb2xvci1pdGVtOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDc1JTtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLmNvbG9yLWl0ZW1fX2FjdGl2ZSB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAycHggcmdiYSgyNTMsIDIxNSwgMCwgMC44KTtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLml0ZW0tMSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuaXRlbS0yIHtcXG4gIGJhY2tncm91bmQ6ICNmZGQ3MDA7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5pdGVtLTMge1xcbiAgYmFja2dyb3VuZDogI2ZkMDAwMDtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLml0ZW0tNCB7XFxuICBiYWNrZ3JvdW5kOiAjMjI5OWViO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuaXRlbS01IHtcXG4gIGJhY2tncm91bmQ6ICMwOGFhMDU7XFxufVxcblxcbi5zaXplIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4uc2l6ZSBoMyB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5zaXplIC5zaXplLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNpemUgLnNpemUtY29udGFpbmVyIC5jb250YWluZXItaXRlbSB7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uc2l6ZSAuc2l6ZS1jb250YWluZXIgLnNpemUtaXRlbSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZjZDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA3cHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNpemUgLnNpemUtY29udGFpbmVyIC5zaXplLWl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi8J+XuFxcXCI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBib3R0b206IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxufVxcbi5zaXplIC5zaXplLWNvbnRhaW5lciAuc2l6ZS1pdGVtOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZmF2b3JpdGUge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi5mYXZvcml0ZSAuY29udGFpbmVyLWZhdm9yaXRlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5mYXZvcml0ZSAuY29udGFpbmVyLWZhdm9yaXRlIC5mYXZvcml0ZS1pdGVtIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmNkO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDdweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uZmF2b3JpdGUgLmNvbnRhaW5lci1mYXZvcml0ZSAuZmF2b3JpdGUtaXRlbTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLwn5e4XFxcIjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUwJTtcXG4gIGJvdHRvbTogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcXG59XFxuLmZhdm9yaXRlIC5jb250YWluZXItZmF2b3JpdGUgLmZhdm9yaXRlLWl0ZW06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zdWNzc2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDI1cHggMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogNDBweDtcXG59XFxuLnN1Y3NzZXMgLmFwcGx5LWJ0biB7XFxuICB3aWR0aDogMTgwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uc3Vjc3NlcyAuYXBwbHktYnRuOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDc1JTtcXG59XFxuXFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiA1MHB4O1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAudGl0bGUgaDIge1xcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCA1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMjcwcHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAubWVzc2FnZSAubWVzc2FnZS1pdGVtIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDY3LCAxMDQsIDEwNiwgMC43KTtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDI1cHg7XFxuICByb3ctZ2FwOiAyNXB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQge1xcbiAgd2lkdGg6IDIyNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweCAwIDUwcHggMDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMCUsIHJnYmEoMTc5LCAyNDYsIDI1NSwgMC41KSAxMDAlKTtcXG4gIGJvcmRlcjogcmdiYSgxMjEsIDEzOSwgMTQ0LCAwLjEpIHNvbGlkIDVweDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQgaDQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50IC5pY29uLXRveS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50IC5pY29uLXRveS1jb250YWluZXIgLmljb24tdG95IHtcXG4gIHdpZHRoOiAxMTBweDtcXG4gIGhlaWdodDogMTEwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50IC5kYXRhLXRveSB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICByb3ctZ2FwOiAxMHB4O1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50IC5kYXRhLXRveSBsaSB7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmFjdGl2ZS10b3kge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogIzRjYWY1MCBzb2xpZCA1cHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIDAlLCByZ2JhKDcwLCAxMDksIDExNCwgMC40KSAxMDAlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggcmdiYSg3NiwgMTc1LCA4MCwgMC43NSk7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNCkgMTAwJSk7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQ6aG92ZXIgLmljb24tdG95LWNvbnRhaW5lciAuaWNvbi10b3kge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmFjdGl2ZS10b3k6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjc1KTtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5tZXNzYWdlX2FjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEycHg7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2ODZhO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4uY2hyaXN0bWFzLXRyZWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jaHJpc3RtYXMtdHJlZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi4zZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbi5zZXR0aW5ncy10cmVlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjUsIDQ3LCA0NSwgMC43KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnNldHRpbmdzLXRyZWUtcGFnZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbHVtbi1nYXA6IDUwcHg7XFxufVxcblxcbi5jaHJpc3RtYXMtdHJlZS1jb2xsZWN0aW9uIGgyIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxuICByb3ctZ2FwOiAxMHB4O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiAuY29sbGVjdGlvbi1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQge1xcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYm9yZGVyOiAjMTcyYTI5IDJweCBzb2xpZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNocmlzdG1hcy10cmVlLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb24tY29udGluZXIgLmNvbnRlaW5lci1jb250ZW50IC5jb250ZWluZXItaXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiAuY29sbGVjdGlvbi1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQgLnRyZWUtMSB7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3RyZWUvMS5wbmcpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiAuY29sbGVjdGlvbi1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQgLnRyZWUtMiB7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3RyZWUvMi5wbmcpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiAuY29sbGVjdGlvbi1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQgLnRyZWUtMyB7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3RyZWUvMy5wbmcpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiAuY29sbGVjdGlvbi1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQgLnRyZWUtNCB7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3RyZWUvNC5wbmcpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiAuY29sbGVjdGlvbi1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQgLnRyZWUtNSB7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3RyZWUvNS5wbmcpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiAuY29sbGVjdGlvbi1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQgLnRyZWUtNiB7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3RyZWUvNi5wbmcpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiAuY29sbGVjdGlvbi1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDRweCByZ2JhKDEsIDEzMSwgODUsIDAuOSkgaW5zZXQ7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIGgyIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG4gIHJvdy1nYXA6IDEwcHg7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5jb250ZWluZXItY29udGVudC1iZyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGJvcmRlcjogIzE3MmEyOSAycHggc29saWQ7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQtYmc6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDRweCByZ2JhKDEsIDEzMSwgODUsIDAuOSkgaW5zZXQ7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy0xIHtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzEuanBnKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmJnLTIge1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvMi5qcGcpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctMyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy8zLmpwZyk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy00IHtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzQuanBnKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmJnLTUge1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvNS5qcGcpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctNiB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy82LmpwZyk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy03IHtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzcuanBnKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWJhY2tncm91bmQgLmJhY2tncm91bmQtY29udGluZXIgLmJnLTgge1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvOC5qcGcpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuYmctOSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy85LmpwZyk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kLWNvbnRpbmVyIC5iZy0xMCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy8xMC5qcGcpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCAuYmFja2dyb3VuZC1jb250aW5lciAuY29udGVpbmVyLWNvbnRlbnQtYmdfX2FjdGl2ZSB7XFxuICBib3JkZXI6ICMwM2E5ZjQgMnB4IHNvbGlkO1xcbn1cXG5cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCBoMiB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC1jb250YWluZXItaXRlbSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC0xIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2RkMGQwZCwgI2U1ZjIxMCwgIzBhZTUxMSk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMjUxLCAyNTEsIDI1MSwgMC4zKTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLTE6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAycHggI2ZiZmJmYjtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5nYXJsYW5kLTIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjYwNzA3LCAjY2M0YzNmLCAjZGY3MDQ4KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggcmdiYSgyNTUsIDEsIDEsIDAuMyk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC0yOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMnB4ICNmZjAxMDE7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC0zIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBmMDBmZiwgIzI1MmFjMywgIzFiMGQ2Zik7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMTEsIDYwLCAyNDcsIDAuMyk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC0zOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMnB4ICMwYjNjZjc7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC00IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBmZmYwMCwgIzI1YzMyYSwgIzBkNmYzNyk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMzUsIDI0NywgMTEsIDAuMyk7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC00OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMnB4ICMyM2Y3MGI7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuZ2FybGFuZC01IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2U1ZmYwMCwgI2IzYzMyNSwgIzZmNmMwZCk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMjE1LCAyMjcsIDE2LCAwLjMpO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtNTpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCAjZDdlMzEwO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLmdhcmxhbmQtaXRlbV9fYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMnB4ICNmYmZiZmI7XFxufVxcbi5jaHJpc3RtYXMtdHJlZS1nYXJsYW5kIC5nYXJsYW5kLWNvbnRlaW5lciAuc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLnN3aXRjaCBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLnN3aXRjaCAuc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLnN3aXRjaCAuc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMTNweDtcXG4gIHdpZHRoOiAxM3B4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZkMjA5O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmE2MjtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5zd2l0Y2ggaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzBlNmE2MjtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG59XFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQgLmdhcmxhbmQtY29udGVpbmVyIC5zd2l0Y2ggLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG4uY2hyaXN0bWFzLXRyZWUtZ2FybGFuZCAuZ2FybGFuZC1jb250ZWluZXIgLnN3aXRjaCAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5tYWluLXRyZWUge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWFpbi10cmVlIC5jaHJpc3RtYXMtYmctY3VycmVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIvY292ZXIgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvMS5qcGcpO1xcbn1cXG4ubWFpbi10cmVlIC5jaHJpc3RtYXMtdHJlZS1jYXJyZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMSU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi50b3lzLXRyZWUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNSwgNDcsIDQ1LCAwLjcpO1xcbn1cXG4udG95cy10cmVlIC50aXRsZSBoMiB7XFxuICBtYXJnaW46IDIwcHggMCAyMHB4IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRveXMtdHJlZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICBjb2x1bW4tZ2FwOiA1cHg7XFxuICByb3ctZ2FwOiA1cHg7XFxufVxcbi50b3lzLXRyZWUtY29udGFpbmVyIC50b3ktZm9yLXRyZWUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAjMTcyYTI5IDJweCBzb2xpZDtcXG59XFxuLnRveXMtdHJlZS1jb250YWluZXIgLnRveS1mb3ItdHJlZSAudG95LWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDY1JTtcXG4gIGhlaWdodDogNjUlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLnRveXMtdHJlZS1jb250YWluZXIgLnRveS1mb3ItdHJlZSAudG95LWNvdW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG4udG95cy10cmVlLWNvbnRhaW5lciAudG95LWZvci10cmVlOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA0cHggcmdiYSgxLCAxMzEsIDg1LCAwLjkpIGluc2V0O1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ2FybGFuZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtNCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtLXJlZDogI2ZmMmMyYztcXG4gIC0teWVsbG93OiAjZmZlYjAwO1xcbiAgLS1ncmVlbjogIzAwZmY1ZDtcXG4gIC0tYmx1ZTogIzAwOTVmZjtcXG4gIC0tc3BlZWQ6IDJzO1xcbiAgei1pbmRleDogMTU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnJlZCB7XFxuICBmaWxsOiAjZjgwNjA2O1xcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rUmVkUmVkO1xcbn1cXG5cXG4ucmVkXzEge1xcbiAgZmlsbDogI2Y4MDYwNjtcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1JlZF8xO1xcbn1cXG5cXG4ucmVkXzIge1xcbiAgZmlsbDogI2Y3YjFiMTtcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1JlZF8yO1xcbn1cXG5cXG4ueWVsbG93IHtcXG4gIGZpbGw6IHZhcigtLXllbGxvdyk7XFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtZZWxsb3c7XFxufVxcblxcbi55ZWxsb3dfMSB7XFxuICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rWWVsbG93XzE7XFxufVxcblxcbi55ZWxsb3dfMiB7XFxuICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rWWVsbG93XzI7XFxufVxcblxcbi5ibHVlIHtcXG4gIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rQmx1ZTtcXG59XFxuXFxuLmJsdWVfMSB7XFxuICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0JsdWVfMTtcXG59XFxuXFxuLmJsdWVfMiB7XFxuICBmaWxsOiB2YXIoLS1ibHVlKTtcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0JsdWVfMjtcXG59XFxuXFxuLmdyZWVuIHtcXG4gIGZpbGw6IHZhcigtLWdyZWVuKTtcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0dyZWVuO1xcbn1cXG5cXG4uZ3JlZW5fMSB7XFxuICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtHcmVlbl8xO1xcbn1cXG5cXG4uZ3JlZW5fMiB7XFxuICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtHcmVlbl8yO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rUmVkIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogdmFyKC0tcmVkKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogdmFyKC0teWVsbG93KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua1JlZF8xIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogI2Y4MDYwNjtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICNmN2IxYjE7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjZjgwNjA2O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogI2Y3YjFiMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua1JlZF8yIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogI2Y3YjFiMTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICNmODA2MDY7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjZjdiMWIxO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogI2Y4MDYwNjtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua1llbGxvdyB7XFxuICAwJSB7XFxuICAgIGZpbGw6IHZhcigtLXllbGxvdyk7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiB2YXIoLS1yZWQpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogdmFyKC0tYmx1ZSk7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtZZWxsb3dfMSB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICNmZmQ5MDQ7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjZjdmM2NkO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogI2ZmZDkwNDtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICNmN2YzY2Q7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtZZWxsb3dfMiB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICNmN2YzY2Q7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjZmZkOTA0O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogI2Y3ZjNjZDtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICNmZmQ5MDQ7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtCbHVlIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogdmFyKC0tYmx1ZSk7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogdmFyKC0tcmVkKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBibGlua0JsdWVfMSB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICMxMTAwZmY7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjOTJjZGY3O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogIzExMDBmZjtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICM5MmNkZjc7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtCbHVlXzIge1xcbiAgMCUge1xcbiAgICBmaWxsOiAjOTJjZGY3O1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgZmlsbDogIzExMDBmZjtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGZpbGw6ICM5MmNkZjc7XFxuICB9XFxuICA3NSUge1xcbiAgICBmaWxsOiAjMTEwMGZmO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rR3JlZW4ge1xcbiAgMCUge1xcbiAgICBmaWxsOiB2YXIoLS1ncmVlbik7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogdmFyKC0tcmVkKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rR3JlZW5fMSB7XFxuICAwJSB7XFxuICAgIGZpbGw6ICMyOGM3MDA7XFxuICB9XFxuICAyNSUge1xcbiAgICBmaWxsOiAjYmNmZmQ1O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgZmlsbDogIzI4YzcwMDtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGZpbGw6ICNiY2ZmZDU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmtHcmVlbl8yIHtcXG4gIDAlIHtcXG4gICAgZmlsbDogI2JjZmZkNTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGZpbGw6ICMyOGM3MDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBmaWxsOiAjYmNmZmQ1O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgZmlsbDogIzI4YzcwMDtcXG4gIH1cXG59XCIsXCIvKtCe0LHQvdGD0LvQtdC90LjQtSovXFxyXFxuKntcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxufVxcclxcbiosKjpiZWZvcmUsKjphZnRlcntcXHJcXG5cXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpmb2N1cyw6YWN0aXZle291dGxpbmU6IG5vbmU7fVxcclxcbmE6Zm9jdXMsYTphY3RpdmV7b3V0bGluZTogbm9uZTt9XFxyXFxubmF2LGZvb3RlcixoZWFkZXIsYXNpZGV7ZGlzcGxheTogYmxvY2s7fVxcclxcbmh0bWwsYm9keXtcXHJcXG5cXHQvLyBoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcblxcdGZvbnQtc2l6ZTogMTBweDtcXHJcXG5cXHQtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcbn1cXHJcXG5pbnB1dCxidXR0b24sdGV4dGFyZWF7Zm9udC1mYW1pbHk6aW5oZXJpdDt9XFxyXFxuaW5wdXQ6Oi1tcy1jbGVhcntkaXNwbGF5OiBub25lO31cXHJcXG5idXR0b257Y3Vyc29yOiBwb2ludGVyO31cXHJcXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge3BhZGRpbmc6MDtib3JkZXI6MDt9XFxyXFxuYSwgYTp2aXNpdGVke3RleHQtZGVjb3JhdGlvbjogbm9uZTt9XFxyXFxuYTpob3Zlcnt0ZXh0LWRlY29yYXRpb246IG5vbmU7fVxcclxcbnVsIGxpe2xpc3Qtc3R5bGU6IG5vbmU7fVxcclxcbmltZ3t2ZXJ0aWNhbC1hbGlnbjogdG9wO31cXHJcXG5oMSxoMixoMyxoNCxoNSxoNntmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDogNDAwO31cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cIixcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL05ldWNoYS1SZWd1bGFyLnR0ZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1N0ZXBwZS50dGYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblwiLFwiaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTJmMmQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sdW1uLWdhcDogMzBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAubG9nbyB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvdHJlZS5zdmcpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nbzpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvdHJlZS1hY3RpdmUuc3ZnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wYWdlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBhZ2U6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzAwOTY4ODtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XFxyXFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcuanBnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWdhbWUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8vIC5tYWluLWNvbnRhaW5lciB7XFxyXFxuLy8gICBiYWNrZ3JvdW5kOiAjMTkyZjJkO1xcclxcbi8vIH1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1nYW1lIHtcXHJcXG4gIC50b3lzLWNpcmNsZS1sZWZ0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDIwJTtcXHJcXG4gICAgd2lkdGg6IDIxLjc3MXZ3O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMzkuODg2JTtcXHJcXG4gICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzLzEucG5nKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3lzLWNpcmNsZS1yaWdodCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMCU7XFxyXFxuICAgIHJpZ2h0OiAyOCU7XFxyXFxuICAgIHdpZHRoOiAxMi43NzF2dztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIzLjMzNCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy8yLnBuZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGUtY29udGVpbmVyIHtcXHJcXG4gICAgaDEge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgICAgcGFkZGluZzogNjdweCA4NXB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogNTNweDtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogNThweDtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO1xcclxcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3RhcnQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIGhlaWdodDogNTRweDtcXHJcXG4gICAgdG9wOiA3MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zdGFydDpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDgwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyZjJkO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIC5sZWZ0LWVsZW1lbnQge1xcclxcbiAgICBwIHtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgICAgb3BhY2l0eTogNzAlO1xcclxcbiAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAucmlnaHQtZWxlbWVudCB7XFxyXFxuICAgIGEge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3JzX3NjaG9vbF9qcy5wbmcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIC53cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi50b3lzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG95cy1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NTBweCAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItY29udGVpbmVyIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItY29udGFpbmVyLXdyYXBwZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1jb250YWluZXItd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1jb250YWluZXItd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1jb250YWluZXItd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWNvbnRhaW5lci1jb250ZW50IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5ncyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIC5hdWRpbyB7XFxyXFxuICAgIHdpZHRoOiAzNnB4O1xcclxcbiAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAwLjNzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2F1ZGlvLnN2Zyk7XFxyXFxuICB9XFxyXFxuICAuYXVkaW86aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiA3NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXVkaW9fYWN0aXZlIHtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTQlKSBzZXBpYSgxMDclKSBzYXR1cmF0ZSg5MDElKSBodWUtcm90YXRlKDI1ZGVnKSBicmlnaHRuZXNzKDE0MCUpIGNvbnRyYXN0KDkzJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc25vdyB7XFxyXFxuICAgIHdpZHRoOiAzNnB4O1xcclxcbiAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAwLjNzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3Nub3cuc3ZnKTtcXHJcXG4gIH1cXHJcXG4gIC5zbm93OmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogNzUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlYXJjaCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLnNlYXJjaC1pdGVtIHtcXHJcXG4gICAgICB3aWR0aDogMjYwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICAgIHBhZGRpbmc6IDAgNTBweCAwIDIwcHg7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO1xcclxcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwM2E5ZjQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5jbGVhbi1pY29uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2Nsb3NlLnN2Zyk7XFxyXFxuICB9XFxyXFxuICAuc2VhcmNoLWljb246aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiA3NSU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zb3J0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjb2x1bW4tZ2FwOiA0MHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHAge1xcclxcbiAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNvcnQtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMjcwcHg7XFxyXFxuICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAzYTlmNDtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG4gICAgcCB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2hvb3NlLWl0ZW0ge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICByaWdodDogMTVweDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgIHRyYW5zaXRpb246IDAwLjNzO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvYXJyb3ctZG93bi5zdmcpO1xcclxcbiAgICB9XFxyXFxuICAgIC5jaG9vc2UtaXRlbTpob3ZlciB7XFxyXFxuICAgICAgb3BhY2l0eTogNzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hbGwtaXRlbSB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgbGVmdDogNSU7XFxyXFxuICAgICAgdG9wOiAxMTAlO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTU4NTc7XFxyXFxuICAgICAgLnNvcnQtaXRlbSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuc29ydC1pdGVtOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjkzOTY7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zb3J0LWNhdGVnb3J5IHtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIC5jYXRlZ29yeS1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgLmFsbCB7XFxyXFxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2Y2Q7XFxyXFxuICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHRvcDogN3B4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcclxcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFsbDo6YmVmb3JlIHtcXHJcXG4gICAgICBjb250ZW50OiAn8J+XuCc7XFxyXFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICByaWdodDogNTAlO1xcclxcbiAgICAgIGJvdHRvbTogNTAlO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcXHJcXG4gICAgfVxcclxcbiAgICAuYWxsOmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udG95cy1mb3JtIHtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbiAgaDMge1xcclxcbiAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAuZm9ybS1pdGVtIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgLmZvcm0taWNvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmZvcm0taWNvbjpob3ZlciB7XFxyXFxuICAgICAgICBvcGFjaXR5OiA4NSU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5mb3JtLWljb25fX2FjdGl2ZSB7XFxyXFxuICAgICAgICBmaWx0ZXI6IGludmVydCg1NCUpIHNlcGlhKDEwNyUpIHNhdHVyYXRlKDkwMSUpIGh1ZS1yb3RhdGUoMjVkZWcpIGJyaWdodG5lc3MoMTQwJSkgY29udHJhc3QoOTMlKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmljb24tMSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNDJweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvYmVsbC5zdmcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuaWNvbi0yIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9iYWxsLnN2Zyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5pY29uLTMge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2NvbmUuc3ZnKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmljb24tNCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNDJweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvc25vd2ZsYWtlLnN2Zyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5pY29uLTUge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgbm8tcmVwZWF0IHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9zbm93LnN2Zyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5pY29uLTYge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3RveS5zdmcpO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuaWNvbi1uYW1lIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU3RlcHBlJztcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKlNsaWRlciovXFxyXFxuXFxyXFxubWFpbiAubm9VaS10YXJnZXQge1xcclxcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjZjBmMGYwLCAwIDNweCA2cHggLTVweCAjYmJiO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5ub1VpLWhvcml6b250YWwge1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm5vVWktaGFuZGxlOmJlZm9yZSxcXHJcXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcclxcbiAgY29udGVudDogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogMHB4O1xcclxcbiAgd2lkdGg6IDBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNlOGU3ZTY7XFxyXFxuICBsZWZ0OiAxNHB4O1xcclxcbiAgdG9wOiA2cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICByaWdodDogLTEzcHg7XFxyXFxuICB0b3A6IC02cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLFxcclxcbiAgICByYWRpYWwtZ3JhZGllbnQoNTcuMjMlIDI0OC4yJSBhdCAxMDcuMTclIDEwNC4wMiUsIHJnYmEoMzQsIDE1MywgMjM1LCAwLjkyKSAwJSwgcmdiYSgzNCwgMTUzLCAyMzUsIDAuMDcpIDEwMCUpLFxcclxcbiAgICByYWRpYWwtZ3JhZGllbnQoMTA0LjIyJSAyMzAuOTQlIGF0IC00LjIyJSAwJSwgIzI0YzVkYiAzLjYyJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMjYpIDU1LjElKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm5vVWktY29ubmVjdCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjRjNWRiO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5ub1VpLWJhc2UsXFxyXFxuLm5vVWktY29ubmVjdHMge1xcclxcbiAgd2lkdGg6IDk3JTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm5vVWktdG9vbHRpcCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuI3JhbmdlLXllYXIgLm5vVWktdG9vbHRpcCB7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxufVxcclxcblxcclxcbiNyYW5nZS15ZWFyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi8qU2xpZGVyLUVORCovXFxyXFxuXFxyXFxuLmNvdW50LWNvcHkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICBoMyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxuICAuY291bnQtY29weS1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5taW4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTI1JTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB9XFxyXFxuICAubWF4IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEyNSU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnllYXItcHVyY2hhc2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luOiA0MHB4IDAgMjBweCAwO1xcclxcbiAgaDMge1xcclxcbiAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbiAgLnllYXItcHVyY2hhc2UtaXRlbSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWluIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEyNSU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU3RlcHBlJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgfVxcclxcbiAgLm1heCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMjUlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb2xvciB7XFxyXFxuICBtYXJnaW46IDQwcHggMCAyMHB4IDA7XFxyXFxuICBoMyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29sb3ItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sdW1uLWdhcDogMjVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgLmNvbG9yLWl0ZW0ge1xcclxcbiAgICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbG9yLWl0ZW06aG92ZXIge1xcclxcbiAgICAgIG9wYWNpdHk6IDc1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29sb3ItaXRlbV9fYWN0aXZlIHtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAycHggcmdiYSgyNTMsIDIxNSwgMCwgMC44KTtcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbS0xIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgICB9XFxyXFxuICAgIC5pdGVtLTIge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICNmZGQ3MDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLml0ZW0tMyB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogI2ZkMDAwMDtcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbS00IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjMjI5OWViO1xcclxcbiAgICB9XFxyXFxuICAgIC5pdGVtLTUge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICMwOGFhMDU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNpemUge1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICBoMyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2l6ZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIC5jb250YWluZXItaXRlbSB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l6ZS1pdGVtIHtcXHJcXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZjZDtcXHJcXG4gICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgdG9wOiA3cHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxyXFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc2l6ZS1pdGVtOjpiZWZvcmUge1xcclxcbiAgICAgIGNvbnRlbnQ6ICfwn5e4JztcXHJcXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgICAgYm90dG9tOiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcclxcbiAgICB9XFxyXFxuICAgIC5zaXplLWl0ZW06Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mYXZvcml0ZSB7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIC5jb250YWluZXItZmF2b3JpdGUge1xcclxcbiAgICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAuZmF2b3JpdGUtaXRlbSB7XFxyXFxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2Y2Q7XFxyXFxuICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHRvcDogN3B4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcclxcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZhdm9yaXRlLWl0ZW06OmJlZm9yZSB7XFxyXFxuICAgICAgY29udGVudDogJ/Cfl7gnO1xcclxcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgcmlnaHQ6IDUwJTtcXHJcXG4gICAgICBib3R0b206IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxyXFxuICAgIH1cXHJcXG4gICAgLmZhdm9yaXRlLWl0ZW06Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zdWNzc2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDI1cHggMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY29sdW1uLWdhcDogNDBweDtcXHJcXG4gIC5hcHBseS1idG4ge1xcclxcbiAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcHBseS1idG46aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiA3NSU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAudGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiA1MHB4O1xcclxcbiAgICBoMiB7XFxyXFxuICAgICAgbWFyZ2luOiAyMHB4IDAgMjBweCA1MHB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInO1xcclxcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5jb2xsZWN0aW9uLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG5cXHJcXG4gICAgLm1lc3NhZ2Uge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgd2lkdGg6IDI3MHB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgICAubWVzc2FnZS1pdGVtIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY3LCAxMDQsIDEwNiwgMC43KTtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmFmYWZhO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAuY29sbGVjdGlvbi1jb250YWluZXItd3JhcHBlciB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBjb2x1bW4tZ2FwOiAyNXB4O1xcclxcbiAgICAgIHJvdy1nYXA6IDI1cHg7XFxyXFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFpbmVyLWNvbnRlbnQge1xcclxcbiAgICAgIHdpZHRoOiAyMjVweDtcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgIG1hcmdpbjogMTBweCAwIDUwcHggMDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxyXFxuICAgICAgICAxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLFxcclxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLFxcclxcbiAgICAgICAgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCVcXHJcXG4gICAgICApO1xcclxcbiAgICAgIGJvcmRlcjogcmdiYSgxMjEsIDEzOSwgMTQ0LCAwLjEpIHNvbGlkIDVweDtcXHJcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICAgIGg0IHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInO1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmljb24tdG95LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAuaWNvbi10b3kge1xcclxcbiAgICAgICAgICB3aWR0aDogMTEwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogMTEwcHg7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5kYXRhLXRveSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICByb3ctZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgbGkge1xcclxcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFjdGl2ZS10b3kge1xcclxcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgICAgLy8gcGFkZGluZzogNXB4IDVweDtcXHJcXG4gICAgICBib3JkZXI6ICM0Y2FmNTAgc29saWQgNXB4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXHJcXG4gICAgICAgIDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsXFxyXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsXFxyXFxuICAgICAgICByZ2JhKDcwLCAxMDksIDExNCwgMC40KSAxMDAlXFxyXFxuICAgICAgKTtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IHJnYmEoNzYsIDE3NSwgODAsIDAuNzUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWluZXItY29udGVudDpob3ZlciB7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxyXFxuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICAgICAgMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSxcXHJcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAwJSxcXHJcXG4gICAgICAgIHJnYmEoMTc5LCAyNDYsIDI1NSwgMC40KSAxMDAlXFxyXFxuICAgICAgKTtcXHJcXG4gICAgICAuaWNvbi10b3ktY29udGFpbmVyIHtcXHJcXG4gICAgICAgIC5pY29uLXRveSB7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLmFjdGl2ZS10b3k6aG92ZXIge1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggcmdiYSg3NiwgMTc1LCA4MCwgMC43NSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lc3NhZ2VfYWN0aXZlIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29sbGVjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDEycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29sbGVjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb2xsZWN0aW9uLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2ODZhO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLmNocmlzdG1hcy10cmVlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hyaXN0bWFzLXRyZWUtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuM2ZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MtdHJlZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1LCA0NywgNDUsIDAuNyk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5ncy10cmVlLXBhZ2Uge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2x1bW4tZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hyaXN0bWFzLXRyZWUtY29sbGVjdGlvbiB7XFxyXFxuICBoMiB7XFxyXFxuICAgIG1hcmdpbjogMjBweCAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbiAgLmNvbGxlY3Rpb24tY29udGluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgICByb3ctZ2FwOiAxMHB4O1xcclxcbiAgICAuY29udGVpbmVyLWNvbnRlbnQge1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXHJcXG4gICAgICAgIDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsXFxyXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMCUsXFxyXFxuICAgICAgICByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJVxcclxcbiAgICAgICk7XFxyXFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICAgIGJvcmRlcjogcmdiKDIzIDQyIDQxKSAycHggc29saWQ7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIC5jb250ZWluZXItaXRlbSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAudHJlZS0xIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy90cmVlLzEucG5nKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLnRyZWUtMiB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvdHJlZS8yLnBuZyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC50cmVlLTMge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3RyZWUvMy5wbmcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAudHJlZS00IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy90cmVlLzQucG5nKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLnRyZWUtNSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvdHJlZS81LnBuZyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC50cmVlLTYge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3RyZWUvNi5wbmcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGVpbmVyLWNvbnRlbnQ6aG92ZXIge1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA0cHggcmdiYSgxLCAxMzEsIDg1LCAwLjkpIGluc2V0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250ZWluZXItY29udGVudF9fYWN0aXZlIHtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2hyaXN0bWFzLXRyZWUtYmFja2dyb3VuZCB7XFxyXFxuICBoMiB7XFxyXFxuICAgIG1hcmdpbjogMjBweCAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbiAgLmJhY2tncm91bmQtY29udGluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICAgIHJvdy1nYXA6IDEwcHg7XFxyXFxuICAgIC5jb250ZWluZXItY29udGVudC1iZyB7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbiAgICAgIGJvcmRlcjogcmdiKDIzIDQyIDQxKSAycHggc29saWQ7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRlaW5lci1jb250ZW50LWJnOmhvdmVyIHtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNHB4IHJnYmEoMSwgMTMxLCA4NSwgMC45KSBpbnNldDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYmctMSB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvMS5qcGcpO1xcclxcbiAgICB9XFxyXFxuICAgIC5iZy0yIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy8yLmpwZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJnLTMge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzMuanBnKTtcXHJcXG4gICAgfVxcclxcbiAgICAuYmctNCB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvNC5qcGcpO1xcclxcbiAgICB9XFxyXFxuICAgIC5iZy01IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy81LmpwZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJnLTYge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzYuanBnKTtcXHJcXG4gICAgfVxcclxcbiAgICAuYmctNyB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcvNy5qcGcpO1xcclxcbiAgICB9XFxyXFxuICAgIC5iZy04IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy84LmpwZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJnLTkge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzkuanBnKTtcXHJcXG4gICAgfVxcclxcbiAgICAuYmctMTAge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzEwLmpwZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRlaW5lci1jb250ZW50LWJnX19hY3RpdmUge1xcclxcbiAgICAgIGJvcmRlcjogIzAzYTlmNCAycHggc29saWQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNocmlzdG1hcy10cmVlLWdhcmxhbmQge1xcclxcbiAgaDIge1xcclxcbiAgICBtYXJnaW46IDIwcHggMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG4gIC5nYXJsYW5kLWNvbnRlaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAuZ2FybGFuZC1jb250YWluZXItaXRlbSB7XFxyXFxuICAgICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmdhcmxhbmQtMSB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMjIxLCAxMywgMTMpLCByZ2IoMjI5LCAyNDIsIDE2KSwgcmdiKDEwLCAyMjksIDE3KSk7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDI1MSwgMjUxLCAyNTEsIDAuMyk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhcmxhbmQtMTpob3ZlciB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMnB4IHJnYmEoMjUxLCAyNTEsIDI1MSwgMSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhcmxhbmQtMiB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMjQ2LCA3LCA3KSwgcmdiKDIwNCwgNzYsIDYzKSwgcmdiKDIyMywgMTEyLCA3MikpO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggcmdiYSgyNTUsIDEsIDEsIDAuMyk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhcmxhbmQtMjpob3ZlciB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMnB4IHJnYigyNTUsIDEsIDEpO1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXJsYW5kLTMge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE1LCAwLCAyNTUpLCByZ2IoMzcsIDQyLCAxOTUpLCByZ2IoMjcsIDEzLCAxMTEpKTtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMTEsIDYwLCAyNDcsIDAuMyk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhcmxhbmQtMzpob3ZlciB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMnB4IHJnYmEoMTEsIDYwLCAyNDcsIDEpO1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXJsYW5kLTQge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE1LCAyNTUsIDApLCByZ2IoMzcsIDE5NSwgNDIpLCByZ2IoMTMsIDExMSwgNTUpKTtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMzUsIDI0NywgMTEsIDAuMyk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhcmxhbmQtNDpob3ZlciB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMnB4IHJnYmEoMzUsIDI0NywgMTEsIDEpO1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXJsYW5kLTUge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDIyOSwgMjU1LCAwKSwgcmdiKDE3OSwgMTk1LCAzNyksIHJnYigxMTEsIDEwOCwgMTMpKTtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMjE1LCAyMjcsIDE2LCAwLjMpO1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXJsYW5kLTU6aG92ZXIge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDJweCByZ2JhKDIxNSwgMjI3LCAxNiwgMSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmdhcmxhbmQtaXRlbV9fYWN0aXZlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAycHggcmdiYSgyNTEsIDI1MSwgMjUxLCAxKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3dpdGNoIHtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICBpbnB1dCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuc2xpZGVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIGhlaWdodDogMTNweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxM3B4O1xcclxcbiAgICAgICAgbGVmdDogNHB4O1xcclxcbiAgICAgICAgYm90dG9tOiA0cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZkMjA5O1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmE2MjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzBlNmE2MjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcclxcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnNsaWRlci5yb3VuZCB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tYWluLXRyZWUge1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgLmNocmlzdG1hcy1iZy1jdXJyZW50IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLzEuanBnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jaHJpc3RtYXMtdHJlZS1jYXJyZW50IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDElO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRveXMtdHJlZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1LCA0NywgNDUsIDAuNyk7XFxyXFxuICAudGl0bGUge1xcclxcbiAgICBoMiB7XFxyXFxuICAgICAgbWFyZ2luOiAyMHB4IDAgMjBweCA1MHB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInO1xcclxcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRveXMtdHJlZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxyXFxuICBjb2x1bW4tZ2FwOiA1cHg7XFxyXFxuICByb3ctZ2FwOiA1cHg7XFxyXFxuICAudG95LWZvci10cmVlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICAgIDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsXFxyXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLFxcclxcbiAgICAgIHJnYmEoMTc5LCAyNDYsIDI1NSwgMC41KSAxMDAlXFxyXFxuICAgICk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IHJnYigyMyA0MiA0MSkgMnB4IHNvbGlkO1xcclxcbiAgICAudG95LWljb24ge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB3aWR0aDogNjUlO1xcclxcbiAgICAgIGhlaWdodDogNjUlO1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG95LWNvdW50IHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG95LWZvci10cmVlOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDRweCByZ2JhKDEsIDEzMSwgODUsIDAuOSkgaW5zZXQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5nYXJsYW5kIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IC00JTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gIC0tcmVkOiAjZmYyYzJjO1xcclxcbiAgLS15ZWxsb3c6ICNmZmViMDA7XFxyXFxuICAtLWdyZWVuOiAjMDBmZjVkO1xcclxcbiAgLS1ibHVlOiAjMDA5NWZmO1xcclxcbiAgLS1zcGVlZDogMnM7XFxyXFxuICB6LWluZGV4OiAxNTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkIHtcXHJcXG4gIGZpbGw6ICNmODA2MDY7XFxyXFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtSZWRSZWQ7XFxyXFxufVxcclxcblxcclxcbi5yZWRfMSB7XFxyXFxuICBmaWxsOiAjZjgwNjA2O1xcclxcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rUmVkXzE7XFxyXFxufVxcclxcbi5yZWRfMiB7XFxyXFxuICBmaWxsOiAjZjdiMWIxO1xcclxcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rUmVkXzI7XFxyXFxufVxcclxcblxcclxcbi55ZWxsb3cge1xcclxcbiAgZmlsbDogdmFyKC0teWVsbG93KTtcXHJcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua1llbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLnllbGxvd18xIHtcXHJcXG4gIGZpbGw6IHZhcigtLXllbGxvdyk7XFxyXFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtZZWxsb3dfMTtcXHJcXG59XFxyXFxuXFxyXFxuLnllbGxvd18yIHtcXHJcXG4gIGZpbGw6IHZhcigtLXllbGxvdyk7XFxyXFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtZZWxsb3dfMjtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdWUge1xcclxcbiAgZmlsbDogdmFyKC0tYmx1ZSk7XFxyXFxuICBhbmltYXRpb246IHZhcigtLXNwZWVkKSBhbHRlcm5hdGUgMHMgaW5maW5pdGUgYmxpbmtCbHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmx1ZV8xIHtcXHJcXG4gIGZpbGw6IHZhcigtLWJsdWUpO1xcclxcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rQmx1ZV8xO1xcclxcbn1cXHJcXG5cXHJcXG4uYmx1ZV8yIHtcXHJcXG4gIGZpbGw6IHZhcigtLWJsdWUpO1xcclxcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rQmx1ZV8yO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZW4ge1xcclxcbiAgZmlsbDogdmFyKC0tZ3JlZW4pO1xcclxcbiAgYW5pbWF0aW9uOiB2YXIoLS1zcGVlZCkgYWx0ZXJuYXRlIDBzIGluZmluaXRlIGJsaW5rR3JlZW47XFxyXFxufVxcclxcblxcclxcbi5ncmVlbl8xIHtcXHJcXG4gIGZpbGw6IHZhcigtLWdyZWVuKTtcXHJcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0dyZWVuXzE7XFxyXFxufVxcclxcblxcclxcbi5ncmVlbl8yIHtcXHJcXG4gIGZpbGw6IHZhcigtLWdyZWVuKTtcXHJcXG4gIGFuaW1hdGlvbjogdmFyKC0tc3BlZWQpIGFsdGVybmF0ZSAwcyBpbmZpbml0ZSBibGlua0dyZWVuXzI7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmtSZWQge1xcclxcbiAgMCUge1xcclxcbiAgICBmaWxsOiB2YXIoLS1yZWQpO1xcclxcbiAgfVxcclxcbiAgMjUlIHtcXHJcXG4gICAgZmlsbDogdmFyKC0tYmx1ZSk7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBmaWxsOiB2YXIoLS1ncmVlbik7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICBmaWxsOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rUmVkXzEge1xcclxcbiAgMCUge1xcclxcbiAgICBmaWxsOiAjZjgwNjA2O1xcclxcbiAgfVxcclxcbiAgMjUlIHtcXHJcXG4gICAgZmlsbDogI2Y3YjFiMTtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIGZpbGw6ICNmODA2MDY7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICBmaWxsOiAjZjdiMWIxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rUmVkXzIge1xcclxcbiAgMCUge1xcclxcbiAgICBmaWxsOiAjZjdiMWIxO1xcclxcbiAgfVxcclxcbiAgMjUlIHtcXHJcXG4gICAgZmlsbDogI2Y4MDYwNjtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIGZpbGw6ICNmN2IxYjE7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICBmaWxsOiAjZjgwNjA2O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rWWVsbG93IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZmlsbDogdmFyKC0teWVsbG93KTtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGZpbGw6IHZhcigtLXJlZCk7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBmaWxsOiB2YXIoLS1ibHVlKTtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGZpbGw6IHZhcigtLWdyZWVuKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGlua1llbGxvd18xIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZmlsbDogI2ZmZDkwNDtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGZpbGw6ICNmN2YzY2Q7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBmaWxsOiAjZmZkOTA0O1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgZmlsbDogI2Y3ZjNjZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGlua1llbGxvd18yIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZmlsbDogI2Y3ZjNjZDtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGZpbGw6ICNmZmQ5MDQ7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBmaWxsOiAjZjdmM2NkO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgZmlsbDogI2ZmZDkwNDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGlua0JsdWUge1xcclxcbiAgMCUge1xcclxcbiAgICBmaWxsOiB2YXIoLS1ibHVlKTtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGZpbGw6IHZhcigtLWdyZWVuKTtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIGZpbGw6IHZhcigtLXllbGxvdyk7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICBmaWxsOiB2YXIoLS1yZWQpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rQmx1ZV8xIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZmlsbDogIzExMDBmZjtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGZpbGw6ICM5MmNkZjc7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBmaWxsOiAjMTEwMGZmO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgZmlsbDogIzkyY2RmNztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGlua0JsdWVfMiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGZpbGw6ICM5MmNkZjc7XFxyXFxuICB9XFxyXFxuICAyNSUge1xcclxcbiAgICBmaWxsOiAjMTEwMGZmO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgZmlsbDogIzkyY2RmNztcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGZpbGw6ICMxMTAwZmY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmtHcmVlbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGZpbGw6IHZhcigtLWdyZWVuKTtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGZpbGw6IHZhcigtLXllbGxvdyk7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBmaWxsOiB2YXIoLS1yZWQpO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgZmlsbDogdmFyKC0tYmx1ZSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmtHcmVlbl8xIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZmlsbDogIzI4YzcwMDtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGZpbGw6ICNiY2ZmZDU7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBmaWxsOiAjMjhjNzAwO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgZmlsbDogI2JjZmZkNTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGlua0dyZWVuXzIge1xcclxcbiAgMCUge1xcclxcbiAgICBmaWxsOiAjYmNmZmQ1O1xcclxcbiAgfVxcclxcbiAgMjUlIHtcXHJcXG4gICAgZmlsbDogIzI4YzcwMDtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIGZpbGw6ICNiY2ZmZDU7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICBmaWxsOiAjMjhjNzAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLm5vVWlTbGlkZXIgPSB7fSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZXhwb3J0cy5QaXBzTW9kZSA9IHZvaWQgMDtcbiAgICAoZnVuY3Rpb24gKFBpcHNNb2RlKSB7XG4gICAgICAgIFBpcHNNb2RlW1wiUmFuZ2VcIl0gPSBcInJhbmdlXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiU3RlcHNcIl0gPSBcInN0ZXBzXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiUG9zaXRpb25zXCJdID0gXCJwb3NpdGlvbnNcIjtcbiAgICAgICAgUGlwc01vZGVbXCJDb3VudFwiXSA9IFwiY291bnRcIjtcbiAgICAgICAgUGlwc01vZGVbXCJWYWx1ZXNcIl0gPSBcInZhbHVlc1wiO1xuICAgIH0pKGV4cG9ydHMuUGlwc01vZGUgfHwgKGV4cG9ydHMuUGlwc01vZGUgPSB7fSkpO1xuICAgIGV4cG9ydHMuUGlwc1R5cGUgPSB2b2lkIDA7XG4gICAgKGZ1bmN0aW9uIChQaXBzVHlwZSkge1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vbmVcIl0gPSAtMV0gPSBcIk5vbmVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJOb1ZhbHVlXCJdID0gMF0gPSBcIk5vVmFsdWVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJMYXJnZVZhbHVlXCJdID0gMV0gPSBcIkxhcmdlVmFsdWVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJTbWFsbFZhbHVlXCJdID0gMl0gPSBcIlNtYWxsVmFsdWVcIjtcbiAgICB9KShleHBvcnRzLlBpcHNUeXBlIHx8IChleHBvcnRzLlBpcHNUeXBlID0ge30pKTtcbiAgICAvL3JlZ2lvbiBIZWxwZXIgTWV0aG9kc1xuICAgIGZ1bmN0aW9uIGlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSAmJiB0eXBlb2YgZW50cnkuZnJvbSA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkge1xuICAgICAgICAvLyBwYXJ0aWFsIGZvcm1hdHRlcnMgb25seSBuZWVkIGEgdG8gZnVuY3Rpb24gYW5kIG5vdCBhIGZyb20gZnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlbnRyeSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZW50cnkudG8gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbCkge1xuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNTZXQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEJpbmRhYmxlIHZlcnNpb25cbiAgICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlcyBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkuXG4gICAgZnVuY3Rpb24gdW5pcXVlKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpc1thXSA/ICh0aGlzW2FdID0gdHJ1ZSkgOiBmYWxzZTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICAvLyBSb3VuZCBhIHZhbHVlIHRvIHRoZSBjbG9zZXN0ICd0bycuXG4gICAgZnVuY3Rpb24gY2xvc2VzdCh2YWx1ZSwgdG8pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyB0bykgKiB0bztcbiAgICB9XG4gICAgLy8gQ3VycmVudCBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudC5cbiAgICBmdW5jdGlvbiBvZmZzZXQoZWxlbSwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciBwYWdlT2Zmc2V0ID0gZ2V0UGFnZU9mZnNldChkb2MpO1xuICAgICAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgY29udGFpbnMgbGVmdCBzY3JvbGwgaW4gQ2hyb21lIG9uIEFuZHJvaWQuXG4gICAgICAgIC8vIEkgaGF2ZW4ndCBmb3VuZCBhIGZlYXR1cmUgZGV0ZWN0aW9uIHRoYXQgcHJvdmVzIHRoaXMuIFdvcnN0IGNhc2VcbiAgICAgICAgLy8gc2NlbmFyaW8gb24gbWlzLW1hdGNoOiB0aGUgJ3RhcCcgZmVhdHVyZSBvbiBob3Jpem9udGFsIHNsaWRlcnMgYnJlYWtzLlxuICAgICAgICBpZiAoL3dlYmtpdC4qQ2hyb21lLipNb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBwYWdlT2Zmc2V0LnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmllbnRhdGlvbiA/IHJlY3QudG9wICsgcGFnZU9mZnNldC55IC0gZG9jRWxlbS5jbGllbnRUb3AgOiByZWN0LmxlZnQgKyBwYWdlT2Zmc2V0LnggLSBkb2NFbGVtLmNsaWVudExlZnQ7XG4gICAgfVxuICAgIC8vIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgbnVtZXJpY2FsLlxuICAgIGZ1bmN0aW9uIGlzTnVtZXJpYyhhKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4oYSkgJiYgaXNGaW5pdGUoYSk7XG4gICAgfVxuICAgIC8vIFNldHMgYSBjbGFzcyBhbmQgcmVtb3ZlcyBpdCBhZnRlciBbZHVyYXRpb25dIG1zLlxuICAgIGZ1bmN0aW9uIGFkZENsYXNzRm9yKGVsZW1lbnQsIGNsYXNzTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTGltaXRzIGEgdmFsdWUgdG8gMCAtIDEwMFxuICAgIGZ1bmN0aW9uIGxpbWl0KGEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGEsIDEwMCksIDApO1xuICAgIH1cbiAgICAvLyBXcmFwcyBhIHZhcmlhYmxlIGFzIGFuIGFycmF5LCBpZiBpdCBpc24ndCBvbmUgeWV0LlxuICAgIC8vIE5vdGUgdGhhdCBhbiBpbnB1dCBhcnJheSBpcyByZXR1cm5lZCBieSByZWZlcmVuY2UhXG4gICAgZnVuY3Rpb24gYXNBcnJheShhKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpID8gYSA6IFthXTtcbiAgICB9XG4gICAgLy8gQ291bnRzIGRlY2ltYWxzXG4gICAgZnVuY3Rpb24gY291bnREZWNpbWFscyhudW1TdHIpIHtcbiAgICAgICAgbnVtU3RyID0gU3RyaW5nKG51bVN0cik7XG4gICAgICAgIHZhciBwaWVjZXMgPSBudW1TdHIuc3BsaXQoXCIuXCIpO1xuICAgICAgICByZXR1cm4gcGllY2VzLmxlbmd0aCA+IDEgPyBwaWVjZXNbMV0ubGVuZ3RoIDogMDtcbiAgICB9XG4gICAgLy8gaHR0cDovL3lvdW1pZ2h0bm90bmVlZGpxdWVyeS5jb20vI2FkZF9jbGFzc1xuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaHR0cDovL3lvdW1pZ2h0bm90bmVlZGpxdWVyeS5jb20vI3JlbW92ZV9jbGFzc1xuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXGIpXCIgKyBjbGFzc05hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpICsgXCIoXFxcXGJ8JClcIiwgXCJnaVwiKSwgXCIgXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vcGxhaW5qcy5jb20vamF2YXNjcmlwdC9hdHRyaWJ1dGVzL2FkZGluZy1yZW1vdmluZy1hbmQtdGVzdGluZy1mb3ItY2xhc3Nlcy05L1xuICAgIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdCA/IGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpIDogbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBjbGFzc05hbWUgKyBcIlxcXFxiXCIpLnRlc3QoZWwuY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9zY3JvbGxZI05vdGVzXG4gICAgZnVuY3Rpb24gZ2V0UGFnZU9mZnNldChkb2MpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBpc0NTUzFDb21wYXQgPSAoZG9jLmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiO1xuICAgICAgICB2YXIgeCA9IHN1cHBvcnRQYWdlT2Zmc2V0XG4gICAgICAgICAgICA/IHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgICAgdmFyIHkgPSBzdXBwb3J0UGFnZU9mZnNldFxuICAgICAgICAgICAgPyB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgIDogaXNDU1MxQ29tcGF0XG4gICAgICAgICAgICAgICAgPyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gd2UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgY29uc3RhbnRzIGluc3RlYWRcbiAgICAvLyBvZiBhY2Nlc3Npbmcgd2luZG93LiogYXMgc29vbiBhcyB0aGUgbW9kdWxlIG5lZWRzIGl0XG4gICAgLy8gc28gdGhhdCB3ZSBkbyBub3QgY29tcHV0ZSBhbnl0aGluZyBpZiBub3QgbmVlZGVkXG4gICAgZnVuY3Rpb24gZ2V0QWN0aW9ucygpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBldmVudHMgdG8gYmluZC4gSUUxMSBpbXBsZW1lbnRzIHBvaW50ZXJFdmVudHMgd2l0aG91dFxuICAgICAgICAvLyBhIHByZWZpeCwgd2hpY2ggYnJlYWtzIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgSUUxMCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBcInBvaW50ZXJkb3duXCIsXG4gICAgICAgICAgICAgICAgbW92ZTogXCJwb2ludGVybW92ZVwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJwb2ludGVydXBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWRcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwiTVNQb2ludGVyRG93blwiLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlOiBcIk1TUG9pbnRlck1vdmVcIixcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBcIk1TUG9pbnRlclVwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIm1vdXNlZG93biB0b3VjaHN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IFwibW91c2Vtb3ZlIHRvdWNobW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwibW91c2V1cCB0b3VjaGVuZFwiXG4gICAgICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWRcbiAgICAvLyBJc3N1ZSAjNzg1XG4gICAgZnVuY3Rpb24gZ2V0U3VwcG9ydHNQYXNzaXZlKCkge1xuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBudWxsLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuQ1NTICYmIENTUy5zdXBwb3J0cyAmJiBDU1Muc3VwcG9ydHMoXCJ0b3VjaC1hY3Rpb25cIiwgXCJub25lXCIpO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIFJhbmdlIENhbGN1bGF0aW9uXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBzaXplIG9mIGEgc3ViLXJhbmdlIGluIHJlbGF0aW9uIHRvIGEgZnVsbCByYW5nZS5cbiAgICBmdW5jdGlvbiBzdWJSYW5nZVJhdGlvKHBhLCBwYikge1xuICAgICAgICByZXR1cm4gMTAwIC8gKHBiIC0gcGEpO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgSG93IG1hbnkgcGVyY2VudCBpcyB0aGlzIHZhbHVlIG9mIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gZnJvbVBlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlLCBzdGFydFJhbmdlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgKiAxMDApIC8gKHJhbmdlW3N0YXJ0UmFuZ2UgKyAxXSAtIHJhbmdlW3N0YXJ0UmFuZ2VdKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIFdoZXJlIGlzIHRoaXMgdmFsdWUgb24gdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiB0b1BlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmcm9tUGVyY2VudGFnZShyYW5nZSwgcmFuZ2VbMF0gPCAwID8gdmFsdWUgKyBNYXRoLmFicyhyYW5nZVswXSkgOiB2YWx1ZSAtIHJhbmdlWzBdLCAwKTtcbiAgICB9XG4gICAgLy8gKHZhbHVlKSBIb3cgbXVjaCBpcyB0aGlzIHBlcmNlbnRhZ2Ugb24gdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgKiAocmFuZ2VbMV0gLSByYW5nZVswXSkpIC8gMTAwICsgcmFuZ2VbMF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEoodmFsdWUsIGFycikge1xuICAgICAgICB2YXIgaiA9IDE7XG4gICAgICAgIHdoaWxlICh2YWx1ZSA+PSBhcnJbal0pIHtcbiAgICAgICAgICAgIGogKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gajtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIElucHV0IGEgdmFsdWUsIGZpbmQgd2hlcmUsIG9uIGEgc2NhbGUgb2YgMC0xMDAsIGl0IGFwcGxpZXMuXG4gICAgZnVuY3Rpb24gdG9TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPj0geFZhbC5zbGljZSgtMSlbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4VmFsKTtcbiAgICAgICAgdmFyIHZhID0geFZhbFtqIC0gMV07XG4gICAgICAgIHZhciB2YiA9IHhWYWxbal07XG4gICAgICAgIHZhciBwYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgcGIgPSB4UGN0W2pdO1xuICAgICAgICByZXR1cm4gcGEgKyB0b1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sIHZhbHVlKSAvIHN1YlJhbmdlUmF0aW8ocGEsIHBiKTtcbiAgICB9XG4gICAgLy8gKHZhbHVlKSBJbnB1dCBhIHBlcmNlbnRhZ2UsIGZpbmQgd2hlcmUgaXQgaXMgb24gdGhlIHNwZWNpZmllZCByYW5nZS5cbiAgICBmdW5jdGlvbiBmcm9tU3RlcHBpbmcoeFZhbCwgeFBjdCwgdmFsdWUpIHtcbiAgICAgICAgLy8gVGhlcmUgaXMgbm8gcmFuZ2UgZ3JvdXAgdGhhdCBmaXRzIDEwMFxuICAgICAgICBpZiAodmFsdWUgPj0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4geFZhbC5zbGljZSgtMSlbMF07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4UGN0KTtcbiAgICAgICAgdmFyIHZhID0geFZhbFtqIC0gMV07XG4gICAgICAgIHZhciB2YiA9IHhWYWxbal07XG4gICAgICAgIHZhciBwYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgcGIgPSB4UGN0W2pdO1xuICAgICAgICByZXR1cm4gaXNQZXJjZW50YWdlKFt2YSwgdmJdLCAodmFsdWUgLSBwYSkgKiBzdWJSYW5nZVJhdGlvKHBhLCBwYikpO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgR2V0IHRoZSBzdGVwIHRoYXQgYXBwbGllcyBhdCBhIGNlcnRhaW4gdmFsdWUuXG4gICAgZnVuY3Rpb24gZ2V0U3RlcCh4UGN0LCB4U3RlcHMsIHNuYXAsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4UGN0KTtcbiAgICAgICAgdmFyIGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIGIgPSB4UGN0W2pdO1xuICAgICAgICAvLyBJZiAnc25hcCcgaXMgc2V0LCBzdGVwcyBhcmUgdXNlZCBhcyBmaXhlZCBwb2ludHMgb24gdGhlIHNsaWRlci5cbiAgICAgICAgaWYgKHNuYXApIHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgcG9zaXRpb24sIGEgb3IgYi5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAtIGEgPiAoYiAtIGEpIC8gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF4U3RlcHNbaiAtIDFdKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhQY3RbaiAtIDFdICsgY2xvc2VzdCh2YWx1ZSAtIHhQY3RbaiAtIDFdLCB4U3RlcHNbaiAtIDFdKTtcbiAgICB9XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBTcGVjdHJ1bVxuICAgIHZhciBTcGVjdHJ1bSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gU3BlY3RydW0oZW50cnksIHNuYXAsIHNpbmdsZVN0ZXApIHtcbiAgICAgICAgICAgIHRoaXMueFBjdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54VmFsID0gW107XG4gICAgICAgICAgICB0aGlzLnhTdGVwcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy54TnVtU3RlcHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXAgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFN0ZXBzID0gW3NpbmdsZVN0ZXAgfHwgZmFsc2VdO1xuICAgICAgICAgICAgdGhpcy54TnVtU3RlcHMgPSBbZmFsc2VdO1xuICAgICAgICAgICAgdGhpcy5zbmFwID0gc25hcDtcbiAgICAgICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgICAgIHZhciBvcmRlcmVkID0gW107XG4gICAgICAgICAgICAvLyBNYXAgdGhlIG9iamVjdCBrZXlzIHRvIGFuIGFycmF5LlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW50cnkpLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgb3JkZXJlZC5wdXNoKFthc0FycmF5KGVudHJ5W2luZGV4XSksIGluZGV4XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFNvcnQgYWxsIGVudHJpZXMgYnkgdmFsdWUgKG51bWVyaWMgc29ydCkuXG4gICAgICAgICAgICBvcmRlcmVkLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYVswXVswXSAtIGJbMF1bMF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgYWxsIGVudHJpZXMgdG8gc3VicmFuZ2VzLlxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgb3JkZXJlZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVudHJ5UG9pbnQob3JkZXJlZFtpbmRleF1bMV0sIG9yZGVyZWRbaW5kZXhdWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBhY3R1YWwgc3RlcCB2YWx1ZXMuXG4gICAgICAgICAgICAvLyB4U3RlcHMgaXMgc29ydGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHhQY3QgYW5kIHhWYWwuXG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IHRoaXMueFN0ZXBzLnNsaWNlKDApO1xuICAgICAgICAgICAgLy8gQ29udmVydCBhbGwgbnVtZXJpYyBzdGVwcyB0byB0aGUgcGVyY2VudGFnZSBvZiB0aGUgc3VicmFuZ2UgdGhleSByZXByZXNlbnQuXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnhOdW1TdGVwcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0ZXBQb2ludChpbmRleCwgdGhpcy54TnVtU3RlcHNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0RGlzdGFuY2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnhOdW1TdGVwcy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VzW2luZGV4XSA9IGZyb21QZXJjZW50YWdlKHRoaXMueFZhbCwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZXM7XG4gICAgICAgIH07XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvdmVyIHRoZSB3aG9sZSBzY2FsZSBvZiByYW5nZXMuXG4gICAgICAgIC8vIGRpcmVjdGlvbjogMCA9IGJhY2t3YXJkcyAvIDEgPSBmb3J3YXJkc1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0QWJzb2x1dGVEaXN0YW5jZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZGlzdGFuY2VzLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciB4UGN0X2luZGV4ID0gMDtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSByYW5nZSB3aGVyZSB0byBzdGFydCBjYWxjdWxhdGlvblxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy54UGN0W3RoaXMueFBjdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgIHdoaWxlICh2YWx1ZSA+IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgeFBjdF9pbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID09PSB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgeFBjdF9pbmRleCA9IHRoaXMueFBjdC5sZW5ndGggLSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbG9va2luZyBiYWNrd2FyZHMgYW5kIHRoZSB2YWx1ZSBpcyBleGFjdGx5IGF0IGEgcmFuZ2Ugc2VwYXJhdG9yIHRoZW4gbG9vayBvbmUgcmFuZ2UgZnVydGhlclxuICAgICAgICAgICAgaWYgKCFkaXJlY3Rpb24gJiYgdmFsdWUgPT09IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2VzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhcnRfZmFjdG9yO1xuICAgICAgICAgICAgdmFyIHJlc3RfZmFjdG9yID0gMTtcbiAgICAgICAgICAgIHZhciByZXN0X3JlbF9kaXN0YW5jZSA9IGRpc3RhbmNlc1t4UGN0X2luZGV4XTtcbiAgICAgICAgICAgIHZhciByYW5nZV9wY3QgPSAwO1xuICAgICAgICAgICAgdmFyIHJlbF9yYW5nZV9kaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICB2YXIgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSAwO1xuICAgICAgICAgICAgdmFyIHJhbmdlX2NvdW50ZXIgPSAwO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHdoYXQgcGFydCBvZiB0aGUgc3RhcnQgcmFuZ2UgdGhlIHZhbHVlIGlzXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gKHZhbHVlIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKSAvICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9ICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdmFsdWUpIC8gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRG8gdW50aWwgdGhlIGNvbXBsZXRlIGRpc3RhbmNlIGFjcm9zcyByYW5nZXMgaXMgY2FsY3VsYXRlZFxuICAgICAgICAgICAgd2hpbGUgKHJlc3RfcmVsX2Rpc3RhbmNlID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcGVyY2VudGFnZSBvZiB0b3RhbCByYW5nZVxuICAgICAgICAgICAgICAgIHJhbmdlX3BjdCA9IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMSArIHJhbmdlX2NvdW50ZXJdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXTtcbiAgICAgICAgICAgICAgICAvLyBEZXRlY3QgaWYgdGhlIG1hcmdpbiwgcGFkZGluZyBvciBsaW1pdCBpcyBsYXJnZXIgdGhlbiB0aGUgY3VycmVudCByYW5nZSBhbmQgY2FsY3VsYXRlXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByZXN0X2ZhY3RvciArIDEwMCAtIHN0YXJ0X2ZhY3RvciAqIDEwMCA+IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBsYXJnZXIgdGhlbiB0YWtlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG9mIHRoZSB3aG9sZSByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZWxfcmFuZ2VfZGlzdGFuY2UgPSByYW5nZV9wY3QgKiBzdGFydF9mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc3QgZmFjdG9yIG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgICAgICAgICByZXN0X2ZhY3RvciA9IChyZXN0X3JlbF9kaXN0YW5jZSAtIDEwMCAqIHN0YXJ0X2ZhY3RvcikgLyBkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgc3RhcnQgZmFjdG9yIHRvIDEgYXMgZm9yIG5leHQgcmFuZ2UgaXQgZG9lcyBub3QgYXBwbHkuXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzbWFsbGVyIG9yIGVxdWFsIHRoZW4gdGFrZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvZiB0aGUgY2FsY3VsYXRlIHBlcmNlbnR1YWwgcGFydCBvZiB0aGF0IHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9ICgoZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJhbmdlX3BjdCkgLyAxMDApICogcmVzdF9mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIHJlc3QgbGVmdCBhcyB0aGUgcmVzdCBmaXRzIGluIGN1cnJlbnQgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVzdF9mYWN0b3IgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGFic19kaXN0YW5jZV9jb3VudGVyID0gYWJzX2Rpc3RhbmNlX2NvdW50ZXIgLSByZWxfcmFuZ2VfZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIExpbWl0IHJhbmdlIHRvIGZpcnN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1pbmltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueFBjdC5sZW5ndGggKyByYW5nZV9jb3VudGVyID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXItLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSBhYnNfZGlzdGFuY2VfY291bnRlciArIHJlbF9yYW5nZV9kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGltaXQgcmFuZ2UgdG8gbGFzdCByYW5nZSB3aGVuIGRpc3RhbmNlIGJlY29tZXMgb3V0c2lkZSBvZiBtYXhpbXVtIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhQY3QubGVuZ3RoIC0gcmFuZ2VfY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZV9jb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmVzdCBvZiByZWxhdGl2ZSBwZXJjZW50dWFsIGRpc3RhbmNlIHN0aWxsIHRvIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgICAgICByZXN0X3JlbF9kaXN0YW5jZSA9IGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByZXN0X2ZhY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSArIGFic19kaXN0YW5jZV9jb3VudGVyO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUudG9TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b1N0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5mcm9tU3RlcHBpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tU3RlcHBpbmcodGhpcy54VmFsLCB0aGlzLnhQY3QsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZ2V0U3RlcCh0aGlzLnhQY3QsIHRoaXMueFN0ZXBzLCB0aGlzLnNuYXAsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldERlZmF1bHRTdGVwID0gZnVuY3Rpb24gKHZhbHVlLCBpc0Rvd24sIHNpemUpIHtcbiAgICAgICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgdGhpcy54UGN0KTtcbiAgICAgICAgICAgIC8vIFdoZW4gYXQgdGhlIHRvcCBvciBzdGVwcGluZyBkb3duLCBsb29rIGF0IHRoZSBwcmV2aW91cyBzdWItcmFuZ2VcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMTAwIHx8IChpc0Rvd24gJiYgdmFsdWUgPT09IHRoaXMueFBjdFtqIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgaiA9IE1hdGgubWF4KGogLSAxLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAodGhpcy54VmFsW2pdIC0gdGhpcy54VmFsW2ogLSAxXSkgLyBzaXplO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0TmVhcmJ5U3RlcHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgdGhpcy54UGN0KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RlcEJlZm9yZToge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbaiAtIDJdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqIC0gMl0sXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ogLSAyXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpc1N0ZXA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDFdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqIC0gMV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0ZXBBZnRlcjoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbal0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2pdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5jb3VudFN0ZXBEZWNpbWFscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSB0aGlzLnhOdW1TdGVwcy5tYXAoY291bnREZWNpbWFscyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgc3RlcERlY2ltYWxzKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhc05vU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhWYWxbMF0gPT09IHRoaXMueFZhbFt0aGlzLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgIH07XG4gICAgICAgIC8vIE91dHNpZGUgdGVzdGluZ1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RlcCh0aGlzLnRvU3RlcHBpbmcodmFsdWUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZUVudHJ5UG9pbnQgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZTtcbiAgICAgICAgICAgIC8vIENvdmVydCBtaW4vbWF4IHN5bnRheCB0byAwIGFuZCAxMDAuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBwYXJzZUZsb2F0KGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBjb3JyZWN0IGlucHV0LlxuICAgICAgICAgICAgaWYgKCFpc051bWVyaWMocGVyY2VudGFnZSkgfHwgIWlzTnVtZXJpYyh2YWx1ZVswXSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncmFuZ2UnIHZhbHVlIGlzbid0IG51bWVyaWMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RvcmUgdmFsdWVzLlxuICAgICAgICAgICAgdGhpcy54UGN0LnB1c2gocGVyY2VudGFnZSk7XG4gICAgICAgICAgICB0aGlzLnhWYWwucHVzaCh2YWx1ZVswXSk7XG4gICAgICAgICAgICB2YXIgdmFsdWUxID0gTnVtYmVyKHZhbHVlWzFdKTtcbiAgICAgICAgICAgIC8vIE5hTiB3aWxsIGV2YWx1YXRlIHRvIGZhbHNlIHRvbywgYnV0IHRvIGtlZXBcbiAgICAgICAgICAgIC8vIGxvZ2dpbmcgY2xlYXIsIHNldCBzdGVwIGV4cGxpY2l0bHkuIE1ha2Ugc3VyZVxuICAgICAgICAgICAgLy8gbm90IHRvIG92ZXJyaWRlIHRoZSAnc3RlcCcgc2V0dGluZyB3aXRoIGZhbHNlLlxuICAgICAgICAgICAgaWYgKCFwZXJjZW50YWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2YWx1ZTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzWzBdID0gdmFsdWUxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzLnB1c2goaXNOYU4odmFsdWUxKSA/IGZhbHNlIDogdmFsdWUxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXAucHVzaCgwKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZVN0ZXBQb2ludCA9IGZ1bmN0aW9uIChpLCBuKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgJ2ZhbHNlJyBzdGVwcGluZy5cbiAgICAgICAgICAgIGlmICghbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICAgICAgaWYgKHRoaXMueFZhbFtpXSA9PT0gdGhpcy54VmFsW2kgKyAxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzW2ldID0gdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtpXSA9IHRoaXMueFZhbFtpXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGYWN0b3IgdG8gcmFuZ2UgcmF0aW9cbiAgICAgICAgICAgIHRoaXMueFN0ZXBzW2ldID1cbiAgICAgICAgICAgICAgICBmcm9tUGVyY2VudGFnZShbdGhpcy54VmFsW2ldLCB0aGlzLnhWYWxbaSArIDFdXSwgbiwgMCkgLyBzdWJSYW5nZVJhdGlvKHRoaXMueFBjdFtpXSwgdGhpcy54UGN0W2kgKyAxXSk7XG4gICAgICAgICAgICB2YXIgdG90YWxTdGVwcyA9ICh0aGlzLnhWYWxbaSArIDFdIC0gdGhpcy54VmFsW2ldKSAvIHRoaXMueE51bVN0ZXBzW2ldO1xuICAgICAgICAgICAgdmFyIGhpZ2hlc3RTdGVwID0gTWF0aC5jZWlsKE51bWJlcih0b3RhbFN0ZXBzLnRvRml4ZWQoMykpIC0gMSk7XG4gICAgICAgICAgICB2YXIgc3RlcCA9IHRoaXMueFZhbFtpXSArIHRoaXMueE51bVN0ZXBzW2ldICogaGlnaGVzdFN0ZXA7XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ldID0gc3RlcDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFNwZWN0cnVtO1xuICAgIH0oKSk7XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBPcHRpb25zXG4gICAgLypcdEV2ZXJ5IGlucHV0IG9wdGlvbiBpcyB0ZXN0ZWQgYW5kIHBhcnNlZC4gVGhpcyB3aWxsIHByZXZlbnRcbiAgICAgICAgZW5kbGVzcyB2YWxpZGF0aW9uIGluIGludGVybmFsIG1ldGhvZHMuIFRoZXNlIHRlc3RzIGFyZVxuICAgICAgICBzdHJ1Y3R1cmVkIHdpdGggYW4gaXRlbSBmb3IgZXZlcnkgb3B0aW9uIGF2YWlsYWJsZS4gQW5cbiAgICAgICAgb3B0aW9uIGNhbiBiZSBtYXJrZWQgYXMgcmVxdWlyZWQgYnkgc2V0dGluZyB0aGUgJ3InIGZsYWcuXG4gICAgICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICAgICAgICAgICAgLSBUaGUgcHJvdmlkZWQgdmFsdWUgZm9yIHRoZSBvcHRpb247XG4gICAgICAgICAgICAtIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIG9iamVjdDtcbiAgICAgICAgICAgIC0gVGhlIG5hbWUgZm9yIHRoZSBvcHRpb247XG5cbiAgICAgICAgVGhlIHRlc3RpbmcgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSB3aGVuIGFuIGVycm9yIGlzIGRldGVjdGVkLFxuICAgICAgICBvciB0cnVlIHdoZW4gZXZlcnl0aGluZyBpcyBPSy4gSXQgY2FuIGFsc28gbW9kaWZ5IHRoZSBvcHRpb25cbiAgICAgICAgb2JqZWN0LCB0byBtYWtlIHN1cmUgYWxsIHZhbHVlcyBjYW4gYmUgY29ycmVjdGx5IGxvb3BlZCBlbHNld2hlcmUuICovXG4gICAgLy9yZWdpb24gRGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdEZvcm1hdHRlciA9IHtcbiAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBcIlwiIDogdmFsdWUudG9GaXhlZCgyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnJvbTogTnVtYmVyXG4gICAgfTtcbiAgICB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAgICAgdGFyZ2V0OiBcInRhcmdldFwiLFxuICAgICAgICBiYXNlOiBcImJhc2VcIixcbiAgICAgICAgb3JpZ2luOiBcIm9yaWdpblwiLFxuICAgICAgICBoYW5kbGU6IFwiaGFuZGxlXCIsXG4gICAgICAgIGhhbmRsZUxvd2VyOiBcImhhbmRsZS1sb3dlclwiLFxuICAgICAgICBoYW5kbGVVcHBlcjogXCJoYW5kbGUtdXBwZXJcIixcbiAgICAgICAgdG91Y2hBcmVhOiBcInRvdWNoLWFyZWFcIixcbiAgICAgICAgaG9yaXpvbnRhbDogXCJob3Jpem9udGFsXCIsXG4gICAgICAgIHZlcnRpY2FsOiBcInZlcnRpY2FsXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwiYmFja2dyb3VuZFwiLFxuICAgICAgICBjb25uZWN0OiBcImNvbm5lY3RcIixcbiAgICAgICAgY29ubmVjdHM6IFwiY29ubmVjdHNcIixcbiAgICAgICAgbHRyOiBcImx0clwiLFxuICAgICAgICBydGw6IFwicnRsXCIsXG4gICAgICAgIHRleHREaXJlY3Rpb25MdHI6IFwidHh0LWRpci1sdHJcIixcbiAgICAgICAgdGV4dERpcmVjdGlvblJ0bDogXCJ0eHQtZGlyLXJ0bFwiLFxuICAgICAgICBkcmFnZ2FibGU6IFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgIGRyYWc6IFwic3RhdGUtZHJhZ1wiLFxuICAgICAgICB0YXA6IFwic3RhdGUtdGFwXCIsXG4gICAgICAgIGFjdGl2ZTogXCJhY3RpdmVcIixcbiAgICAgICAgdG9vbHRpcDogXCJ0b29sdGlwXCIsXG4gICAgICAgIHBpcHM6IFwicGlwc1wiLFxuICAgICAgICBwaXBzSG9yaXpvbnRhbDogXCJwaXBzLWhvcml6b250YWxcIixcbiAgICAgICAgcGlwc1ZlcnRpY2FsOiBcInBpcHMtdmVydGljYWxcIixcbiAgICAgICAgbWFya2VyOiBcIm1hcmtlclwiLFxuICAgICAgICBtYXJrZXJIb3Jpem9udGFsOiBcIm1hcmtlci1ob3Jpem9udGFsXCIsXG4gICAgICAgIG1hcmtlclZlcnRpY2FsOiBcIm1hcmtlci12ZXJ0aWNhbFwiLFxuICAgICAgICBtYXJrZXJOb3JtYWw6IFwibWFya2VyLW5vcm1hbFwiLFxuICAgICAgICBtYXJrZXJMYXJnZTogXCJtYXJrZXItbGFyZ2VcIixcbiAgICAgICAgbWFya2VyU3ViOiBcIm1hcmtlci1zdWJcIixcbiAgICAgICAgdmFsdWU6IFwidmFsdWVcIixcbiAgICAgICAgdmFsdWVIb3Jpem9udGFsOiBcInZhbHVlLWhvcml6b250YWxcIixcbiAgICAgICAgdmFsdWVWZXJ0aWNhbDogXCJ2YWx1ZS12ZXJ0aWNhbFwiLFxuICAgICAgICB2YWx1ZU5vcm1hbDogXCJ2YWx1ZS1ub3JtYWxcIixcbiAgICAgICAgdmFsdWVMYXJnZTogXCJ2YWx1ZS1sYXJnZVwiLFxuICAgICAgICB2YWx1ZVN1YjogXCJ2YWx1ZS1zdWJcIlxuICAgIH07XG4gICAgLy8gTmFtZXNwYWNlcyBvZiBpbnRlcm5hbCBldmVudCBsaXN0ZW5lcnNcbiAgICB2YXIgSU5URVJOQUxfRVZFTlRfTlMgPSB7XG4gICAgICAgIHRvb2x0aXBzOiBcIi5fX3Rvb2x0aXBzXCIsXG4gICAgICAgIGFyaWE6IFwiLl9fYXJpYVwiXG4gICAgfTtcbiAgICAvL2VuZHJlZ2lvblxuICAgIGZ1bmN0aW9uIHRlc3RTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSBzdGVwIG9wdGlvbiBjYW4gc3RpbGwgYmUgdXNlZCB0byBzZXQgc3RlcHBpbmdcbiAgICAgICAgLy8gZm9yIGxpbmVhciBzbGlkZXJzLiBPdmVyd3JpdHRlbiBpZiBzZXQgaW4gJ3JhbmdlJy5cbiAgICAgICAgcGFyc2VkLnNpbmdsZVN0ZXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZFBhZ2VNdWx0aXBsaWVyJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkUGFnZU11bHRpcGxpZXIgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkTXVsdGlwbGllcihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkTXVsdGlwbGllcicgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZE11bHRpcGxpZXIgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZERlZmF1bHRTdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkRGVmYXVsdFN0ZXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFJhbmdlKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gRmlsdGVyIGluY29ycmVjdCBpbnB1dC5cbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyBpcyBub3QgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYXRjaCBtaXNzaW5nIHN0YXJ0IG9yIGVuZC5cbiAgICAgICAgaWYgKGVudHJ5Lm1pbiA9PT0gdW5kZWZpbmVkIHx8IGVudHJ5Lm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBNaXNzaW5nICdtaW4nIG9yICdtYXgnIGluICdyYW5nZScuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5zcGVjdHJ1bSA9IG5ldyBTcGVjdHJ1bShlbnRyeSwgcGFyc2VkLnNuYXAgfHwgZmFsc2UsIHBhcnNlZC5zaW5nbGVTdGVwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFN0YXJ0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgLy8gVmFsaWRhdGUgaW5wdXQuIFZhbHVlcyBhcmVuJ3QgdGVzdGVkLCBhcyB0aGUgcHVibGljIC52YWwgbWV0aG9kXG4gICAgICAgIC8vIHdpbGwgYWx3YXlzIHByb3ZpZGUgYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RhcnQnIG9wdGlvbiBpcyBpbmNvcnJlY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0b3JlIHRoZSBudW1iZXIgb2YgaGFuZGxlcy5cbiAgICAgICAgcGFyc2VkLmhhbmRsZXMgPSBlbnRyeS5sZW5ndGg7XG4gICAgICAgIC8vIFdoZW4gdGhlIHNsaWRlciBpcyBpbml0aWFsaXplZCwgdGhlIC52YWwgbWV0aG9kIHdpbGxcbiAgICAgICAgLy8gYmUgY2FsbGVkIHdpdGggdGhlIHN0YXJ0IG9wdGlvbnMuXG4gICAgICAgIHBhcnNlZC5zdGFydCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U25hcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc25hcCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICAgICAgcGFyc2VkLnNuYXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFuaW1hdGUocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGUnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5mb3JjZSAxMDAlIHN0ZXBwaW5nIHdpdGhpbiBzdWJyYW5nZXMuXG4gICAgICAgIHBhcnNlZC5hbmltYXRlID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBbmltYXRpb25EdXJhdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRpb25EdXJhdGlvbicgb3B0aW9uIG11c3QgYmUgYSBudW1iZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5hbmltYXRpb25EdXJhdGlvbiA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q29ubmVjdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIHZhciBjb25uZWN0ID0gW2ZhbHNlXTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIC8vIE1hcCBsZWdhY3kgb3B0aW9uc1xuICAgICAgICBpZiAoZW50cnkgPT09IFwibG93ZXJcIikge1xuICAgICAgICAgICAgZW50cnkgPSBbdHJ1ZSwgZmFsc2VdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVudHJ5ID09PSBcInVwcGVyXCIpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW2ZhbHNlLCB0cnVlXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgYm9vbGVhbiBvcHRpb25zXG4gICAgICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdC5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbm5lY3QucHVzaChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVqZWN0IGludmFsaWQgaW5wdXRcbiAgICAgICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpIHx8ICFlbnRyeS5sZW5ndGggfHwgZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcyArIDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjb25uZWN0JyBvcHRpb24gZG9lc24ndCBtYXRjaCBoYW5kbGUgY291bnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29ubmVjdCA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5jb25uZWN0ID0gY29ubmVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdE9yaWVudGF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gU2V0IG9yaWVudGF0aW9uIHRvIGFuIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5XG4gICAgICAgIC8vIGFycmF5IHNlbGVjdGlvbi5cbiAgICAgICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQub3J0ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnb3JpZW50YXRpb24nIG9wdGlvbiBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0TWFyZ2luKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbWFyZ2luJyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJc3N1ZSAjNTgyXG4gICAgICAgIGlmIChlbnRyeSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5tYXJnaW4gPSBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0TGltaXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmxpbWl0ID0gcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5KTtcbiAgICAgICAgaWYgKCFwYXJzZWQubGltaXQgfHwgcGFyc2VkLmhhbmRsZXMgPCAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBpcyBvbmx5IHN1cHBvcnRlZCBvbiBsaW5lYXIgc2xpZGVycyB3aXRoIDIgb3IgbW9yZSBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0UGFkZGluZyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMgb3IgYXJyYXkgb2YgZXhhY3RseSAyIG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSAmJiAhKGVudHJ5Lmxlbmd0aCA9PT0gMiB8fCBpc051bWVyaWMoZW50cnlbMF0pIHx8IGlzTnVtZXJpYyhlbnRyeVsxXSkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgZW50cnkgPSBbZW50cnksIGVudHJ5XTtcbiAgICAgICAgfVxuICAgICAgICAvLyAnZ2V0RGlzdGFuY2UnIHJldHVybnMgZmFsc2UgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgICAgICBwYXJzZWQucGFkZGluZyA9IFtwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMF0pLCBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMV0pXTtcbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgcGFyc2VkLnNwZWN0cnVtLnhOdW1TdGVwcy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAvLyBsYXN0IFwicmFuZ2VcIiBjYW4ndCBjb250YWluIHN0ZXAgc2l6ZSBhcyBpdCBpcyBwdXJlbHkgYW4gZW5kcG9pbnQuXG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhZGRpbmdbMF1baW5kZXhdIDwgMCB8fCBwYXJzZWQucGFkZGluZ1sxXVtpbmRleF0gPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyKHMpLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdG90YWxQYWRkaW5nID0gZW50cnlbMF0gKyBlbnRyeVsxXTtcbiAgICAgICAgdmFyIGZpcnN0VmFsdWUgPSBwYXJzZWQuc3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgdmFyIGxhc3RWYWx1ZSA9IHBhcnNlZC5zcGVjdHJ1bS54VmFsW3BhcnNlZC5zcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodG90YWxQYWRkaW5nIC8gKGxhc3RWYWx1ZSAtIGZpcnN0VmFsdWUpID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IG5vdCBleGNlZWQgMTAwJSBvZiB0aGUgcmFuZ2UuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3REaXJlY3Rpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBTZXQgZGlyZWN0aW9uIGFzIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5IHBhcnNpbmcuXG4gICAgICAgIC8vIEludmVydCBjb25uZWN0aW9uIGZvciBSVEwgc2xpZGVycywgc28gdGhhdCB0aGUgcHJvcGVyXG4gICAgICAgIC8vIGhhbmRsZXMgZ2V0IHRoZSBjb25uZWN0L2JhY2tncm91bmQgY2xhc3Nlcy5cbiAgICAgICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICAgICAgY2FzZSBcImx0clwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJ0bFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZGlyZWN0aW9uJyBvcHRpb24gd2FzIG5vdCByZWNvZ25pemVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QmVoYXZpb3VyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbnB1dCBpcyBhIHN0cmluZy5cbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2JlaGF2aW91cicgbXVzdCBiZSBhIHN0cmluZyBjb250YWluaW5nIG9wdGlvbnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgYW55IGtleXdvcmRzLlxuICAgICAgICAvLyBOb25lIGFyZSByZXF1aXJlZC5cbiAgICAgICAgdmFyIHRhcCA9IGVudHJ5LmluZGV4T2YoXCJ0YXBcIikgPj0gMDtcbiAgICAgICAgdmFyIGRyYWcgPSBlbnRyeS5pbmRleE9mKFwiZHJhZ1wiKSA+PSAwO1xuICAgICAgICB2YXIgZml4ZWQgPSBlbnRyeS5pbmRleE9mKFwiZml4ZWRcIikgPj0gMDtcbiAgICAgICAgdmFyIHNuYXAgPSBlbnRyeS5pbmRleE9mKFwic25hcFwiKSA+PSAwO1xuICAgICAgICB2YXIgaG92ZXIgPSBlbnRyeS5pbmRleE9mKFwiaG92ZXJcIikgPj0gMDtcbiAgICAgICAgdmFyIHVuY29uc3RyYWluZWQgPSBlbnRyeS5pbmRleE9mKFwidW5jb25zdHJhaW5lZFwiKSA+PSAwO1xuICAgICAgICB2YXIgZHJhZ0FsbCA9IGVudHJ5LmluZGV4T2YoXCJkcmFnLWFsbFwiKSA+PSAwO1xuICAgICAgICBpZiAoZml4ZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWQuaGFuZGxlcyAhPT0gMikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdmaXhlZCcgYmVoYXZpb3VyIG11c3QgYmUgdXNlZCB3aXRoIDIgaGFuZGxlc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVzZSBtYXJnaW4gdG8gZW5mb3JjZSBmaXhlZCBzdGF0ZVxuICAgICAgICAgICAgdGVzdE1hcmdpbihwYXJzZWQsIHBhcnNlZC5zdGFydFsxXSAtIHBhcnNlZC5zdGFydFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVuY29uc3RyYWluZWQgJiYgKHBhcnNlZC5tYXJnaW4gfHwgcGFyc2VkLmxpbWl0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3VuY29uc3RyYWluZWQnIGJlaGF2aW91ciBjYW5ub3QgYmUgdXNlZCB3aXRoIG1hcmdpbiBvciBsaW1pdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuZXZlbnRzID0ge1xuICAgICAgICAgICAgdGFwOiB0YXAgfHwgc25hcCxcbiAgICAgICAgICAgIGRyYWc6IGRyYWcsXG4gICAgICAgICAgICBkcmFnQWxsOiBkcmFnQWxsLFxuICAgICAgICAgICAgZml4ZWQ6IGZpeGVkLFxuICAgICAgICAgICAgc25hcDogc25hcCxcbiAgICAgICAgICAgIGhvdmVyOiBob3ZlcixcbiAgICAgICAgICAgIHVuY29uc3RyYWluZWQ6IHVuY29uc3RyYWluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFRvb2x0aXBzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogbXVzdCBwYXNzIGEgZm9ybWF0dGVyIGZvciBhbGwgaGFuZGxlcy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZvcm1hdHRlciAhPT0gXCJib29sZWFuXCIgJiYgIWlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGZvcm1hdHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3Rvb2x0aXBzJyBtdXN0IGJlIHBhc3NlZCBhIGZvcm1hdHRlciBvciAnZmFsc2UnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcyA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RIYW5kbGVBdHRyaWJ1dGVzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IG11c3QgcGFzcyBhIGF0dHJpYnV0ZXMgZm9yIGFsbCBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuaGFuZGxlQXR0cmlidXRlcyA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QXJpYUZvcm1hdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYXJpYUZvcm1hdCcgcmVxdWlyZXMgJ3RvJyBtZXRob2QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5hcmlhRm9ybWF0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZm9ybWF0JyByZXF1aXJlcyAndG8nIGFuZCAnZnJvbScgbWV0aG9kcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmZvcm1hdCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRTdXBwb3J0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZFN1cHBvcnQnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkU3VwcG9ydCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0RG9jdW1lbnRFbGVtZW50KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBhbiBhZHZhbmNlZCBvcHRpb24uIFBhc3NlZCB2YWx1ZXMgYXJlIHVzZWQgd2l0aG91dCB2YWxpZGF0aW9uLlxuICAgICAgICBwYXJzZWQuZG9jdW1lbnRFbGVtZW50ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDc3NQcmVmaXgocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiICYmIGVudHJ5ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc1ByZWZpeCcgbXVzdCBiZSBhIHN0cmluZyBvciBgZmFsc2VgLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuY3NzUHJlZml4ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDc3NDbGFzc2VzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc0NsYXNzZXMnIG11c3QgYmUgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZC5jc3NQcmVmaXggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXNba2V5XSA9IHBhcnNlZC5jc3NQcmVmaXggKyBlbnRyeVtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFRlc3QgYWxsIGRldmVsb3BlciBzZXR0aW5ncyBhbmQgcGFyc2UgdG8gYXNzdW1wdGlvbi1zYWZlIHZhbHVlcy5cbiAgICBmdW5jdGlvbiB0ZXN0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIC8vIFRvIHByb3ZlIGEgZml4IGZvciAjNTM3LCBmcmVlemUgb3B0aW9ucyBoZXJlLlxuICAgICAgICAvLyBJZiB0aGUgb2JqZWN0IGlzIG1vZGlmaWVkLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAgICAgICAgLy8gT2JqZWN0LmZyZWV6ZShvcHRpb25zKTtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHtcbiAgICAgICAgICAgIG1hcmdpbjogbnVsbCxcbiAgICAgICAgICAgIGxpbWl0OiBudWxsLFxuICAgICAgICAgICAgcGFkZGluZzogbnVsbCxcbiAgICAgICAgICAgIGFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgYXJpYUZvcm1hdDogZGVmYXVsdEZvcm1hdHRlcixcbiAgICAgICAgICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdHRlclxuICAgICAgICB9O1xuICAgICAgICAvLyBUZXN0cyBhcmUgZXhlY3V0ZWQgaW4gdGhlIG9yZGVyIHRoZXkgYXJlIHByZXNlbnRlZCBoZXJlLlxuICAgICAgICB2YXIgdGVzdHMgPSB7XG4gICAgICAgICAgICBzdGVwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0U3RlcCB9LFxuICAgICAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIgfSxcbiAgICAgICAgICAgIGtleWJvYXJkTXVsdGlwbGllcjogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkTXVsdGlwbGllciB9LFxuICAgICAgICAgICAga2V5Ym9hcmREZWZhdWx0U3RlcDogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAgfSxcbiAgICAgICAgICAgIHN0YXJ0OiB7IHI6IHRydWUsIHQ6IHRlc3RTdGFydCB9LFxuICAgICAgICAgICAgY29ubmVjdDogeyByOiB0cnVlLCB0OiB0ZXN0Q29ubmVjdCB9LFxuICAgICAgICAgICAgZGlyZWN0aW9uOiB7IHI6IHRydWUsIHQ6IHRlc3REaXJlY3Rpb24gfSxcbiAgICAgICAgICAgIHNuYXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RTbmFwIH0sXG4gICAgICAgICAgICBhbmltYXRlOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0ZSB9LFxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRpb25EdXJhdGlvbiB9LFxuICAgICAgICAgICAgcmFuZ2U6IHsgcjogdHJ1ZSwgdDogdGVzdFJhbmdlIH0sXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogeyByOiBmYWxzZSwgdDogdGVzdE9yaWVudGF0aW9uIH0sXG4gICAgICAgICAgICBtYXJnaW46IHsgcjogZmFsc2UsIHQ6IHRlc3RNYXJnaW4gfSxcbiAgICAgICAgICAgIGxpbWl0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0TGltaXQgfSxcbiAgICAgICAgICAgIHBhZGRpbmc6IHsgcjogZmFsc2UsIHQ6IHRlc3RQYWRkaW5nIH0sXG4gICAgICAgICAgICBiZWhhdmlvdXI6IHsgcjogdHJ1ZSwgdDogdGVzdEJlaGF2aW91ciB9LFxuICAgICAgICAgICAgYXJpYUZvcm1hdDogeyByOiBmYWxzZSwgdDogdGVzdEFyaWFGb3JtYXQgfSxcbiAgICAgICAgICAgIGZvcm1hdDogeyByOiBmYWxzZSwgdDogdGVzdEZvcm1hdCB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHsgcjogZmFsc2UsIHQ6IHRlc3RUb29sdGlwcyB9LFxuICAgICAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB7IHI6IHRydWUsIHQ6IHRlc3RLZXlib2FyZFN1cHBvcnQgfSxcbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudDogeyByOiBmYWxzZSwgdDogdGVzdERvY3VtZW50RWxlbWVudCB9LFxuICAgICAgICAgICAgY3NzUHJlZml4OiB7IHI6IHRydWUsIHQ6IHRlc3RDc3NQcmVmaXggfSxcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IHsgcjogdHJ1ZSwgdDogdGVzdENzc0NsYXNzZXMgfSxcbiAgICAgICAgICAgIGhhbmRsZUF0dHJpYnV0ZXM6IHsgcjogZmFsc2UsIHQ6IHRlc3RIYW5kbGVBdHRyaWJ1dGVzIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgY29ubmVjdDogZmFsc2UsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibHRyXCIsXG4gICAgICAgICAgICBiZWhhdmlvdXI6IFwidGFwXCIsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICBrZXlib2FyZFN1cHBvcnQ6IHRydWUsXG4gICAgICAgICAgICBjc3NQcmVmaXg6IFwibm9VaS1cIixcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IGNzc0NsYXNzZXMsXG4gICAgICAgICAgICBrZXlib2FyZFBhZ2VNdWx0aXBsaWVyOiA1LFxuICAgICAgICAgICAga2V5Ym9hcmRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAga2V5Ym9hcmREZWZhdWx0U3RlcDogMTBcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQXJpYUZvcm1hdCBkZWZhdWx0cyB0byByZWd1bGFyIGZvcm1hdCwgaWYgYW55LlxuICAgICAgICBpZiAob3B0aW9ucy5mb3JtYXQgJiYgIW9wdGlvbnMuYXJpYUZvcm1hdCkge1xuICAgICAgICAgICAgb3B0aW9ucy5hcmlhRm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUnVuIGFsbCBvcHRpb25zIHRocm91Z2ggYSB0ZXN0aW5nIG1lY2hhbmlzbSB0byBlbnN1cmUgY29ycmVjdFxuICAgICAgICAvLyBpbnB1dC4gSXQgc2hvdWxkIGJlIG5vdGVkIHRoYXQgb3B0aW9ucyBtaWdodCBnZXQgbW9kaWZpZWQgdG9cbiAgICAgICAgLy8gYmUgaGFuZGxlZCBwcm9wZXJseS4gRS5nLiB3cmFwcGluZyBpbnRlZ2VycyBpbiBhcnJheXMuXG4gICAgICAgIE9iamVjdC5rZXlzKHRlc3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9uIGlzbid0IHNldCwgYnV0IGl0IGlzIHJlcXVpcmVkLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICAgIGlmICghaXNTZXQob3B0aW9uc1tuYW1lXSkgJiYgZGVmYXVsdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0c1tuYW1lXS5yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdcIiArIG5hbWUgKyBcIicgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXN0c1tuYW1lXS50KHBhcnNlZCwgIWlzU2V0KG9wdGlvbnNbbmFtZV0pID8gZGVmYXVsdHNbbmFtZV0gOiBvcHRpb25zW25hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZvcndhcmQgcGlwcyBvcHRpb25zXG4gICAgICAgIHBhcnNlZC5waXBzID0gb3B0aW9ucy5waXBzO1xuICAgICAgICAvLyBBbGwgcmVjZW50IGJyb3dzZXJzIGFjY2VwdCB1bnByZWZpeGVkIHRyYW5zZm9ybS5cbiAgICAgICAgLy8gV2UgbmVlZCAtbXMtIGZvciBJRTkgYW5kIC13ZWJraXQtIGZvciBvbGRlciBBbmRyb2lkO1xuICAgICAgICAvLyBBc3N1bWUgdXNlIG9mIC13ZWJraXQtIGlmIHVucHJlZml4ZWQgYW5kIC1tcy0gYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9dHJhbnNmb3JtczJkXG4gICAgICAgIHZhciBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG1zUHJlZml4ID0gZC5zdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgbm9QcmVmaXggPSBkLnN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBwYXJzZWQudHJhbnNmb3JtUnVsZSA9IG5vUHJlZml4ID8gXCJ0cmFuc2Zvcm1cIiA6IG1zUHJlZml4ID8gXCJtc1RyYW5zZm9ybVwiIDogXCJ3ZWJraXRUcmFuc2Zvcm1cIjtcbiAgICAgICAgLy8gUGlwcyBkb24ndCBtb3ZlLCBzbyB3ZSBjYW4gcGxhY2UgdGhlbSB1c2luZyBsZWZ0L3RvcC5cbiAgICAgICAgdmFyIHN0eWxlcyA9IFtcbiAgICAgICAgICAgIFtcImxlZnRcIiwgXCJ0b3BcIl0sXG4gICAgICAgICAgICBbXCJyaWdodFwiLCBcImJvdHRvbVwiXVxuICAgICAgICBdO1xuICAgICAgICBwYXJzZWQuc3R5bGUgPSBzdHlsZXNbcGFyc2VkLmRpcl1bcGFyc2VkLm9ydF07XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgZnVuY3Rpb24gc2NvcGUodGFyZ2V0LCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgICAgIHZhciBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSA9IGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCk7XG4gICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSAmJiBnZXRTdXBwb3J0c1Bhc3NpdmUoKTtcbiAgICAgICAgLy8gQWxsIHZhcmlhYmxlcyBsb2NhbCB0byAnc2NvcGUnIGFyZSBwcmVmaXhlZCB3aXRoICdzY29wZV8nXG4gICAgICAgIC8vIFNsaWRlciBET00gTm9kZXNcbiAgICAgICAgdmFyIHNjb3BlX1RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdmFyIHNjb3BlX0Jhc2U7XG4gICAgICAgIHZhciBzY29wZV9IYW5kbGVzO1xuICAgICAgICB2YXIgc2NvcGVfQ29ubmVjdHM7XG4gICAgICAgIHZhciBzY29wZV9QaXBzO1xuICAgICAgICB2YXIgc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgIC8vIFNsaWRlciBzdGF0ZSB2YWx1ZXNcbiAgICAgICAgdmFyIHNjb3BlX1NwZWN0cnVtID0gb3B0aW9ucy5zcGVjdHJ1bTtcbiAgICAgICAgdmFyIHNjb3BlX1ZhbHVlcyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfTG9jYXRpb25zID0gW107XG4gICAgICAgIHZhciBzY29wZV9IYW5kbGVOdW1iZXJzID0gW107XG4gICAgICAgIHZhciBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgPSAwO1xuICAgICAgICB2YXIgc2NvcGVfRXZlbnRzID0ge307XG4gICAgICAgIC8vIERvY3VtZW50IE5vZGVzXG4gICAgICAgIHZhciBzY29wZV9Eb2N1bWVudCA9IHRhcmdldC5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgc2NvcGVfRG9jdW1lbnRFbGVtZW50ID0gb3B0aW9ucy5kb2N1bWVudEVsZW1lbnQgfHwgc2NvcGVfRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgc2NvcGVfQm9keSA9IHNjb3BlX0RvY3VtZW50LmJvZHk7XG4gICAgICAgIC8vIEZvciBob3Jpem9udGFsIHNsaWRlcnMgaW4gc3RhbmRhcmQgbHRyIGRvY3VtZW50cyxcbiAgICAgICAgLy8gbWFrZSAubm9VaS1vcmlnaW4gb3ZlcmZsb3cgdG8gdGhlIGxlZnQgc28gdGhlIGRvY3VtZW50IGRvZXNuJ3Qgc2Nyb2xsLlxuICAgICAgICB2YXIgc2NvcGVfRGlyT2Zmc2V0ID0gc2NvcGVfRG9jdW1lbnQuZGlyID09PSBcInJ0bFwiIHx8IG9wdGlvbnMub3J0ID09PSAxID8gMCA6IDEwMDtcbiAgICAgICAgLy8gQ3JlYXRlcyBhIG5vZGUsIGFkZHMgaXQgdG8gdGFyZ2V0LCByZXR1cm5zIHRoZSBuZXcgbm9kZS5cbiAgICAgICAgZnVuY3Rpb24gYWRkTm9kZVRvKGFkZFRhcmdldCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2YXIgZGl2ID0gc2NvcGVfRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUYXJnZXQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIHJldHVybiBkaXY7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIGEgb3JpZ2luIHRvIHRoZSBiYXNlXG4gICAgICAgIGZ1bmN0aW9uIGFkZE9yaWdpbihiYXNlLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLm9yaWdpbik7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gYWRkTm9kZVRvKG9yaWdpbiwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZSk7XG4gICAgICAgICAgICBhZGROb2RlVG8oaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMudG91Y2hBcmVhKTtcbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhhbmRsZVwiLCBTdHJpbmcoaGFuZGxlTnVtYmVyKSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5rZXlib2FyZFN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0dsb2JhbF9hdHRyaWJ1dGVzL3RhYmluZGV4XG4gICAgICAgICAgICAgICAgLy8gMCA9IGZvY3VzYWJsZSBhbmQgcmVhY2hhYmxlXG4gICAgICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudEtleWRvd24oZXZlbnQsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oYW5kbGVBdHRyaWJ1dGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlc18xID0gb3B0aW9ucy5oYW5kbGVBdHRyaWJ1dGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlc18xKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNfMVthdHRyaWJ1dGVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwic2xpZGVyXCIpO1xuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImFyaWEtb3JpZW50YXRpb25cIiwgb3B0aW9ucy5vcnQgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlTG93ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFuZGxlTnVtYmVyID09PSBvcHRpb25zLmhhbmRsZXMgLSAxKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlVXBwZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbnNlcnQgbm9kZXMgZm9yIGNvbm5lY3QgZWxlbWVudHNcbiAgICAgICAgZnVuY3Rpb24gYWRkQ29ubmVjdChiYXNlLCBhZGQpIHtcbiAgICAgICAgICAgIGlmICghYWRkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMuY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGhhbmRsZXMgdG8gdGhlIHNsaWRlciBiYXNlLlxuICAgICAgICBmdW5jdGlvbiBhZGRFbGVtZW50cyhjb25uZWN0T3B0aW9ucywgYmFzZSkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3RCYXNlID0gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5jb25uZWN0cyk7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzID0gW107XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0cyA9IFtdO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMucHVzaChhZGRDb25uZWN0KGNvbm5lY3RCYXNlLCBjb25uZWN0T3B0aW9uc1swXSkpO1xuICAgICAgICAgICAgLy8gWzo6OjpPPT09PU89PT09Tz09PT1dXG4gICAgICAgICAgICAvLyBjb25uZWN0T3B0aW9ucyA9IFswLCAxLCAxLCAxXVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIEtlZXAgYSBsaXN0IG9mIGFsbCBhZGRlZCBoYW5kbGVzLlxuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMucHVzaChhZGRPcmlnaW4oYmFzZSwgaSkpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnNbaV0gPSBpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbaSArIDFdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhIHNpbmdsZSBzbGlkZXIuXG4gICAgICAgIGZ1bmN0aW9uIGFkZFNsaWRlcihhZGRUYXJnZXQpIHtcbiAgICAgICAgICAgIC8vIEFwcGx5IGNsYXNzZXMgYW5kIGRhdGEgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcmdldCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5sdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMucnRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9ydCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmhvcml6b250YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudmVydGljYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRleHREaXJlY3Rpb24gPSBnZXRDb21wdXRlZFN0eWxlKGFkZFRhcmdldCkuZGlyZWN0aW9uO1xuICAgICAgICAgICAgaWYgKHRleHREaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uUnRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRleHREaXJlY3Rpb25MdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5iYXNlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGRUb29sdGlwKGhhbmRsZSwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMudG9vbHRpcHMgfHwgIW9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oaGFuZGxlLmZpcnN0Q2hpbGQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50b29sdGlwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1NsaWRlckRpc2FibGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1RhcmdldC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEaXNhYmxlIHRoZSBzbGlkZXIgZHJhZ2dpbmcgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxuICAgICAgICBmdW5jdGlvbiBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIGhhbmRsZU9yaWdpbiA9IHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVPcmlnaW4uaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVG9vbHRpcHMoKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVfVG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMpO1xuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzLmZvckVhY2goZnVuY3Rpb24gKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQodG9vbHRpcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHRvb2x0aXBzIG9wdGlvbiBpcyBhIHNob3J0aGFuZCBmb3IgdXNpbmcgdGhlICd1cGRhdGUnIGV2ZW50LlxuICAgICAgICBmdW5jdGlvbiB0b29sdGlwcygpIHtcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgICAgICAvLyBUb29sdGlwcyBhcmUgYWRkZWQgd2l0aCBvcHRpb25zLnRvb2x0aXBzIGluIG9yaWdpbmFsIG9yZGVyLlxuICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMgPSBzY29wZV9IYW5kbGVzLm1hcChhZGRUb29sdGlwKTtcbiAgICAgICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZU51bWJlciwgdW5lbmNvZGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzY29wZV9Ub29sdGlwcyB8fCAhb3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzY29wZV9Ub29sdGlwc1toYW5kbGVOdW1iZXJdID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0udG8odW5lbmNvZGVkW2hhbmRsZU51bWJlcl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwc1toYW5kbGVOdW1iZXJdLmlubmVySFRNTCA9IGZvcm1hdHRlZFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXJpYSgpIHtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhKTtcbiAgICAgICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlTnVtYmVyLCB1bmVuY29kZWQsIHRhcCwgcG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIEFyaWEgVmFsdWVzIGZvciBhbGwgaGFuZGxlcywgYXMgYSBjaGFuZ2UgaW4gb25lIGNoYW5nZXMgbWluIGFuZCBtYXggdmFsdWVzIGZvciB0aGUgbmV4dC5cbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBpbmRleCwgMCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDEwMCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3JtYXR0ZWQgdmFsdWUgZm9yIGRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBTdHJpbmcob3B0aW9ucy5hcmlhRm9ybWF0LnRvKHVuZW5jb2RlZFtpbmRleF0pKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFwIHRvIHNsaWRlciByYW5nZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgbWluID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG1pbikudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG1heCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgbm93ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG5vdykudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtaW5cIiwgbWluKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtYXhcIiwgbWF4KTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVub3dcIiwgbm93KTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIsIHRleHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0R3JvdXAocGlwcykge1xuICAgICAgICAgICAgLy8gVXNlIHRoZSByYW5nZS5cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuUmFuZ2UgfHwgcGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLnhWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLkNvdW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBpcHMudmFsdWVzIDwgMikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndmFsdWVzJyAoPj0gMikgcmVxdWlyZWQgZm9yIG1vZGUgJ2NvdW50Jy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERpdmlkZSAwIC0gMTAwIGluICdjb3VudCcgcGFydHMuXG4gICAgICAgICAgICAgICAgdmFyIGludGVydmFsID0gcGlwcy52YWx1ZXMgLSAxO1xuICAgICAgICAgICAgICAgIHZhciBzcHJlYWQgPSAxMDAgLyBpbnRlcnZhbDtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgLy8gTGlzdCB0aGVzZSBwYXJ0cyBhbmQgaGF2ZSB0aGVtIGhhbmRsZWQgYXMgJ3Bvc2l0aW9ucycuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGludGVydmFsLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2ludGVydmFsXSA9IGludGVydmFsICogc3ByZWFkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCgxMDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHZhbHVlcywgcGlwcy5zdGVwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuUG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gTWFwIGFsbCBwZXJjZW50YWdlcyB0byBvbi1yYW5nZSB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcFRvUmFuZ2UocGlwcy52YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlZhbHVlcykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBtdXN0IGJlIHN0ZXBwZWQsIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZCB0byBhIHBlcmNlbnRhZ2UgZmlyc3QuXG4gICAgICAgICAgICAgICAgaWYgKHBpcHMuc3RlcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCB0byBwZXJjZW50YWdlLCBhcHBseSBzdGVwLCByZXR1cm4gdG8gdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAoc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh2YWx1ZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UgY2FuIHNpbXBseSB1c2UgdGhlIHZhbHVlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW107IC8vIHBpcHMubW9kZSA9IG5ldmVyXG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFwVG9SYW5nZSh2YWx1ZXMsIHN0ZXBwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcoc3RlcHBlZCA/IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAodmFsdWUpIDogdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVTcHJlYWQocGlwcykge1xuICAgICAgICAgICAgZnVuY3Rpb24gc2FmZUluY3JlbWVudCh2YWx1ZSwgaW5jcmVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gQXZvaWQgZmxvYXRpbmcgcG9pbnQgdmFyaWFuY2UgYnkgZHJvcHBpbmcgdGhlIHNtYWxsZXN0IGRlY2ltYWwgcGxhY2VzLlxuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoKHZhbHVlICsgaW5jcmVtZW50KS50b0ZpeGVkKDcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBncm91cCA9IGdldEdyb3VwKHBpcHMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ZXMgPSB7fTtcbiAgICAgICAgICAgIHZhciBmaXJzdEluUmFuZ2UgPSBzY29wZV9TcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICAgICAgdmFyIGxhc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFtzY29wZV9TcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgaWdub3JlTGFzdCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHByZXZQY3QgPSAwO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZ3JvdXAsIHNvcnQgaXQgYW5kIGZpbHRlciBhd2F5IGFsbCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgZ3JvdXAgPSB1bmlxdWUoZ3JvdXAuc2xpY2UoKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSByYW5nZSBzdGFydHMgd2l0aCB0aGUgZmlyc3QgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChncm91cFswXSAhPT0gZmlyc3RJblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAudW5zaGlmdChmaXJzdEluUmFuZ2UpO1xuICAgICAgICAgICAgICAgIGlnbm9yZUZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExpa2V3aXNlIGZvciB0aGUgbGFzdCBvbmUuXG4gICAgICAgICAgICBpZiAoZ3JvdXBbZ3JvdXAubGVuZ3RoIC0gMV0gIT09IGxhc3RJblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAucHVzaChsYXN0SW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgaWdub3JlTGFzdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGVwIGFuZCB0aGUgbG93ZXIgKyB1cHBlciBwb3NpdGlvbnMuXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgdmFyIHE7XG4gICAgICAgICAgICAgICAgdmFyIGxvdyA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGhpZ2ggPSBncm91cFtpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQY3Q7XG4gICAgICAgICAgICAgICAgdmFyIHBjdERpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgdmFyIHBjdFBvcztcbiAgICAgICAgICAgICAgICB2YXIgdHlwZTtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcHM7XG4gICAgICAgICAgICAgICAgdmFyIHJlYWxTdGVwcztcbiAgICAgICAgICAgICAgICB2YXIgc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgdmFyIGlzU3RlcHMgPSBwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuU3RlcHM7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiB1c2luZyAnc3RlcHMnIG1vZGUsIHVzZSB0aGUgcHJvdmlkZWQgc3RlcHMuXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSdsbCBzdGVwIG9uIHRvIHRoZSBuZXh0IHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgIGlmIChpc1N0ZXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBzY29wZV9TcGVjdHJ1bS54TnVtU3RlcHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgJ2Z1bGwnIHN0ZXAuXG4gICAgICAgICAgICAgICAgaWYgKCFzdGVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBoaWdoIC0gbG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiBoaWdoIGlzIHVuZGVmaW5lZCB3ZSBhcmUgYXQgdGhlIGxhc3Qgc3VicmFuZ2UuIE1ha2Ugc3VyZSBpdCBpdGVyYXRlcyBvbmNlICgjMTA4OClcbiAgICAgICAgICAgICAgICBpZiAoaGlnaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2ggPSBsb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBzdGVwIGlzbid0IDAsIHdoaWNoIHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AgKCM2NTQpXG4gICAgICAgICAgICAgICAgc3RlcCA9IE1hdGgubWF4KHN0ZXAsIDAuMDAwMDAwMSk7XG4gICAgICAgICAgICAgICAgLy8gRmluZCBhbGwgc3RlcHMgaW4gdGhlIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpID0gc2FmZUluY3JlbWVudChpLCBzdGVwKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHBlcmNlbnRhZ2UgdmFsdWUgZm9yIHRoZSBjdXJyZW50IHN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgc2l6ZSBmb3IgdGhlIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgICAgICBuZXdQY3QgPSBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKGkpO1xuICAgICAgICAgICAgICAgICAgICBwY3REaWZmZXJlbmNlID0gbmV3UGN0IC0gcHJldlBjdDtcbiAgICAgICAgICAgICAgICAgICAgc3RlcHMgPSBwY3REaWZmZXJlbmNlIC8gKHBpcHMuZGVuc2l0eSB8fCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhbFN0ZXBzID0gTWF0aC5yb3VuZChzdGVwcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgcmF0aW8gcmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHBlcmNlbnRhZ2Utc3BhY2UgYSBwb2ludCBpbmRpY2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBhIGRlbnNpdHkgMSB0aGUgcG9pbnRzL3BlcmNlbnRhZ2UgPSAxLiBGb3IgZGVuc2l0eSAyLCB0aGF0IHBlcmNlbnRhZ2UgbmVlZHMgdG8gYmUgcmUtZGl2aWRlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gUm91bmQgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IHRvIGFuIGV2ZW4gbnVtYmVyLCB0aGVuIGRpdmlkZSBieSB0d29cbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gc3ByZWFkIHRoZSBvZmZzZXQgb24gYm90aCBzaWRlcyBvZiB0aGUgcmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplID0gcGN0RGlmZmVyZW5jZSAvIHJlYWxTdGVwcztcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2aWRlIGFsbCBwb2ludHMgZXZlbmx5LCBhZGRpbmcgdGhlIGNvcnJlY3QgbnVtYmVyIHRvIHRoaXMgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1biB1cCB0byA8PSBzbyB0aGF0IDEwMCUgZ2V0cyBhIHBvaW50LCBldmVudCBpZiBpZ25vcmVMYXN0IGlzIHNldC5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChxID0gMTsgcSA8PSByZWFsU3RlcHM7IHEgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJhdGlvIGJldHdlZW4gdGhlIHJvdW5kZWQgdmFsdWUgYW5kIHRoZSBhY3R1YWwgc2l6ZSBtaWdodCBiZSB+MSUgb2ZmLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29ycmVjdCB0aGUgcGVyY2VudGFnZSBvZmZzZXQgYnkgdGhlIG51bWJlciBvZiBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlciBzdWJyYW5nZS4gZGVuc2l0eSA9IDEgd2lsbCByZXN1bHQgaW4gMTAwIHBvaW50cyBvbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZ1bGwgcmFuZ2UsIDIgZm9yIDUwLCA0IGZvciAyNSwgZXRjLlxuICAgICAgICAgICAgICAgICAgICAgICAgcGN0UG9zID0gcHJldlBjdCArIHEgKiBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXNbcGN0UG9zLnRvRml4ZWQoNSldID0gW3Njb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhwY3RQb3MpLCAwXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHBvaW50IHR5cGUuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBncm91cC5pbmRleE9mKGkpID4gLTEgPyBleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWUgOiBpc1N0ZXBzID8gZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlIDogZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBFbmZvcmNlIHRoZSAnaWdub3JlRmlyc3QnIG9wdGlvbiBieSBvdmVyd3JpdGluZyB0aGUgdHlwZSBmb3IgMC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmRleCAmJiBpZ25vcmVGaXJzdCAmJiBpICE9PSBoaWdoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIShpID09PSBoaWdoICYmIGlnbm9yZUxhc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSAndHlwZScgb2YgdGhpcyBwb2ludC4gMCA9IHBsYWluLCAxID0gcmVhbCB2YWx1ZSwgMiA9IHN0ZXAgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzW25ld1BjdC50b0ZpeGVkKDUpXSA9IFtpLCB0eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHBlcmNlbnRhZ2UgY291bnQuXG4gICAgICAgICAgICAgICAgICAgIHByZXZQY3QgPSBuZXdQY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlcztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGRNYXJraW5nKHNwcmVhZCwgZmlsdGVyRnVuYywgZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZV9Eb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlU2l6ZUNsYXNzZXMgPSAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLk5vbmVdID0gXCJcIixcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTm9ybWFsLFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVMYXJnZSxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLlNtYWxsVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlU3ViLFxuICAgICAgICAgICAgICAgIF9hKTtcbiAgICAgICAgICAgIHZhciBtYXJrZXJTaXplQ2xhc3NlcyA9IChfYiA9IHt9LFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTm9uZV0gPSBcIlwiLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTm9ybWFsLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTGFyZ2UsXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJTdWIsXG4gICAgICAgICAgICAgICAgX2IpO1xuICAgICAgICAgICAgdmFyIHZhbHVlT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVZlcnRpY2FsXTtcbiAgICAgICAgICAgIHZhciBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXMgPSBbb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlckhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJWZXJ0aWNhbF07XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBvcHRpb25zLmNzc0NsYXNzZXMucGlwcyk7XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBvcHRpb25zLm9ydCA9PT0gMCA/IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzSG9yaXpvbnRhbCA6IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzVmVydGljYWwpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Q2xhc3Nlcyh0eXBlLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHNvdXJjZSA9PT0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbkNsYXNzZXMgPSBhID8gdmFsdWVPcmllbnRhdGlvbkNsYXNzZXMgOiBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXM7XG4gICAgICAgICAgICAgICAgdmFyIHNpemVDbGFzc2VzID0gYSA/IHZhbHVlU2l6ZUNsYXNzZXMgOiBtYXJrZXJTaXplQ2xhc3NlcztcbiAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlICsgXCIgXCIgKyBvcmllbnRhdGlvbkNsYXNzZXNbb3B0aW9ucy5vcnRdICsgXCIgXCIgKyBzaXplQ2xhc3Nlc1t0eXBlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFNwcmVhZChvZmZzZXQsIHZhbHVlLCB0eXBlKSB7XG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGZpbHRlciBmdW5jdGlvbiwgaWYgaXQgaXMgc2V0LlxuICAgICAgICAgICAgICAgIHR5cGUgPSBmaWx0ZXJGdW5jID8gZmlsdGVyRnVuYyh2YWx1ZSwgdHlwZSkgOiB0eXBlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBleHBvcnRzLlBpcHNUeXBlLk5vbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgYSBtYXJrZXIgZm9yIGV2ZXJ5IHBvaW50XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyKTtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgLy8gVmFsdWVzIGFyZSBvbmx5IGFwcGVuZGVkIGZvciBwb2ludHMgbWFya2VkICcxJyBvciAnMicuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPiBleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGFkZE5vZGVUbyhlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbb3B0aW9ucy5zdHlsZV0gPSBvZmZzZXQgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBTdHJpbmcoZm9ybWF0dGVyLnRvKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXBwZW5kIGFsbCBwb2ludHMuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzcHJlYWQpLmZvckVhY2goZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICAgICAgICAgIGFkZFNwcmVhZChvZmZzZXQsIHNwcmVhZFtvZmZzZXRdWzBdLCBzcHJlYWRbb2Zmc2V0XVsxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVBpcHMoKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVfUGlwcykge1xuICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQoc2NvcGVfUGlwcyk7XG4gICAgICAgICAgICAgICAgc2NvcGVfUGlwcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcGlwcyhwaXBzKSB7XG4gICAgICAgICAgICAvLyBGaXggIzY2OVxuICAgICAgICAgICAgcmVtb3ZlUGlwcygpO1xuICAgICAgICAgICAgdmFyIHNwcmVhZCA9IGdlbmVyYXRlU3ByZWFkKHBpcHMpO1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHBpcHMuZmlsdGVyO1xuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IHBpcHMuZm9ybWF0IHx8IHtcbiAgICAgICAgICAgICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzY29wZV9QaXBzID0gc2NvcGVfVGFyZ2V0LmFwcGVuZENoaWxkKGFkZE1hcmtpbmcoc3ByZWFkLCBmaWx0ZXIsIGZvcm1hdCkpO1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1BpcHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2hvcnRoYW5kIGZvciBiYXNlIGRpbWVuc2lvbnMuXG4gICAgICAgIGZ1bmN0aW9uIGJhc2VTaXplKCkge1xuICAgICAgICAgICAgdmFyIHJlY3QgPSBzY29wZV9CYXNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdmFyIGFsdCA9IChcIm9mZnNldFwiICsgW1wiV2lkdGhcIiwgXCJIZWlnaHRcIl1bb3B0aW9ucy5vcnRdKTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm9ydCA9PT0gMCA/IHJlY3Qud2lkdGggfHwgc2NvcGVfQmFzZVthbHRdIDogcmVjdC5oZWlnaHQgfHwgc2NvcGVfQmFzZVthbHRdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXIgZm9yIGF0dGFjaGluZyBldmVudHMgdHJvdWdoIGEgcHJveHkuXG4gICAgICAgIGZ1bmN0aW9uIGF0dGFjaEV2ZW50KGV2ZW50cywgZWxlbWVudCwgY2FsbGJhY2ssIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gJ2ZpbHRlcicgZXZlbnRzIHRvIHRoZSBzbGlkZXIuXG4gICAgICAgICAgICAvLyBlbGVtZW50IGlzIGEgbm9kZSwgbm90IGEgbm9kZUxpc3RcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IGZpeEV2ZW50KGV2ZW50LCBkYXRhLnBhZ2VPZmZzZXQsIGRhdGEudGFyZ2V0IHx8IGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8vIGZpeEV2ZW50IHJldHVybnMgZmFsc2UgaWYgdGhpcyBldmVudCBoYXMgYSBkaWZmZXJlbnQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgLy8gd2hlbiBoYW5kbGluZyAobXVsdGktKSB0b3VjaCBldmVudHM7XG4gICAgICAgICAgICAgICAgaWYgKCFlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZG9Ob3RSZWplY3QgaXMgcGFzc2VkIGJ5IGFsbCBlbmQgZXZlbnRzIHRvIG1ha2Ugc3VyZSByZWxlYXNlZCB0b3VjaGVzXG4gICAgICAgICAgICAgICAgLy8gYXJlIG5vdCByZWplY3RlZCwgbGVhdmluZyB0aGUgc2xpZGVyIFwic3R1Y2tcIiB0byB0aGUgY3Vyc29yO1xuICAgICAgICAgICAgICAgIGlmIChpc1NsaWRlckRpc2FibGVkKCkgJiYgIWRhdGEuZG9Ob3RSZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIGFuIGFjdGl2ZSAndGFwJyB0cmFuc2l0aW9uIGlzIHRha2luZyBwbGFjZS5cbiAgICAgICAgICAgICAgICBpZiAoaGFzQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwKSAmJiAhZGF0YS5kb05vdFJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSByaWdodCBvciBtaWRkbGUgY2xpY2tzIG9uIHN0YXJ0ICM0NTRcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRzID09PSBhY3Rpb25zLnN0YXJ0ICYmIGUuYnV0dG9ucyAhPT0gdW5kZWZpbmVkICYmIGUuYnV0dG9ucyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaG92ZXIgJiYgZS5idXR0b25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gJ3N1cHBvcnRzUGFzc2l2ZScgaXMgb25seSB0cnVlIGlmIGEgYnJvd3NlciBhbHNvIHN1cHBvcnRzIHRvdWNoLWFjdGlvbjogbm9uZSBpbiBDU1MuXG4gICAgICAgICAgICAgICAgLy8gaU9TIHNhZmFyaSBkb2VzIG5vdCwgc28gaXQgZG9lc24ndCBnZXQgdG8gYmVuZWZpdCBmcm9tIHBhc3NpdmUgc2Nyb2xsaW5nLiBpT1MgZG9lcyBzdXBwb3J0XG4gICAgICAgICAgICAgICAgLy8gdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb24sIGJ1dCB0aGF0IGFsbG93cyBwYW5uaW5nLCB3aGljaCBicmVha3NcbiAgICAgICAgICAgICAgICAvLyBzbGlkZXJzIGFmdGVyIHpvb21pbmcvb24gbm9uLXJlc3BvbnNpdmUgcGFnZXMuXG4gICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTMzMTEyXG4gICAgICAgICAgICAgICAgaWYgKCFzdXBwb3J0c1Bhc3NpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLmNhbGNQb2ludCA9IGUucG9pbnRzW29wdGlvbnMub3J0XTtcbiAgICAgICAgICAgICAgICAvLyBDYWxsIHRoZSBldmVudCBoYW5kbGVyIHdpdGggdGhlIGV2ZW50IFsgYW5kIGFkZGl0aW9uYWwgZGF0YSBdLlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgbWV0aG9kcyA9IFtdO1xuICAgICAgICAgICAgLy8gQmluZCBhIGNsb3N1cmUgb24gdGhlIHRhcmdldCBmb3IgZXZlcnkgZXZlbnQgdHlwZS5cbiAgICAgICAgICAgIGV2ZW50cy5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbWV0aG9kLCBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBtZXRob2RzLnB1c2goW2V2ZW50TmFtZSwgbWV0aG9kXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2RzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByb3ZpZGUgYSBjbGVhbiBldmVudCB3aXRoIHN0YW5kYXJkaXplZCBvZmZzZXQgdmFsdWVzLlxuICAgICAgICBmdW5jdGlvbiBmaXhFdmVudChlLCBwYWdlT2Zmc2V0LCBldmVudFRhcmdldCkge1xuICAgICAgICAgICAgLy8gRmlsdGVyIHRoZSBldmVudCB0byByZWdpc3RlciB0aGUgdHlwZSwgd2hpY2ggY2FuIGJlXG4gICAgICAgICAgICAvLyB0b3VjaCwgbW91c2Ugb3IgcG9pbnRlci4gT2Zmc2V0IGNoYW5nZXMgbmVlZCB0byBiZVxuICAgICAgICAgICAgLy8gbWFkZSBvbiBhbiBldmVudCBzcGVjaWZpYyBiYXNpcy5cbiAgICAgICAgICAgIHZhciB0b3VjaCA9IGUudHlwZS5pbmRleE9mKFwidG91Y2hcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgbW91c2UgPSBlLnR5cGUuaW5kZXhPZihcIm1vdXNlXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIHBvaW50ZXIgPSBlLnR5cGUuaW5kZXhPZihcInBvaW50ZXJcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgICAgICAvLyBJRTEwIGltcGxlbWVudGVkIHBvaW50ZXIgZXZlbnRzIHdpdGggYSBwcmVmaXg7XG4gICAgICAgICAgICBpZiAoZS50eXBlLmluZGV4T2YoXCJNU1BvaW50ZXJcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBwb2ludGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEVycm9uZW91cyBldmVudHMgc2VlbSB0byBiZSBwYXNzZWQgaW4gb2NjYXNpb25hbGx5IG9uIGlPUy9pUGFkT1MgYWZ0ZXIgdXNlciBmaW5pc2hlcyBpbnRlcmFjdGluZyB3aXRoXG4gICAgICAgICAgICAvLyB0aGUgc2xpZGVyLiBUaGV5IGFwcGVhciB0byBiZSBvZiB0eXBlIE1vdXNlRXZlbnQsIHlldCB0aGV5IGRvbid0IGhhdmUgdXN1YWwgcHJvcGVydGllcyBzZXQuIElnbm9yZVxuICAgICAgICAgICAgLy8gZXZlbnRzIHRoYXQgaGF2ZSBubyB0b3VjaGVzIG9yIGJ1dHRvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZW0uICgjMTA1NywgIzEwNzksICMxMDk1KVxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIiAmJiAhZS5idXR0b25zICYmICFlLnRvdWNoZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgb25seSB0aGluZyBvbmUgaGFuZGxlIHNob3VsZCBiZSBjb25jZXJuZWQgYWJvdXQgaXMgdGhlIHRvdWNoZXMgdGhhdCBvcmlnaW5hdGVkIG9uIHRvcCBvZiBpdC5cbiAgICAgICAgICAgIGlmICh0b3VjaCkge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybnMgdHJ1ZSBpZiBhIHRvdWNoIG9yaWdpbmF0ZWQgb24gdGhlIHRhcmdldC5cbiAgICAgICAgICAgICAgICB2YXIgaXNUb3VjaE9uVGFyZ2V0ID0gZnVuY3Rpb24gKGNoZWNrVG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGNoZWNrVG91Y2gudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHRhcmdldCA9PT0gZXZlbnRUYXJnZXQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmNvbnRhaW5zKHRhcmdldCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLmNvbXBvc2VkICYmIGUuY29tcG9zZWRQYXRoKCkuc2hpZnQoKSA9PT0gZXZlbnRUYXJnZXQpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBjYXNlIG9mIHRvdWNoc3RhcnQgZXZlbnRzLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGVyZSBpcyBzdGlsbCBubyBtb3JlIHRoYW4gb25lXG4gICAgICAgICAgICAgICAgLy8gdG91Y2ggb24gdGhlIHRhcmdldCBzbyB3ZSBsb29rIGFtb25nc3QgYWxsIHRvdWNoZXMuXG4gICAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJ0b3VjaHN0YXJ0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFRvdWNoZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZS50b3VjaGVzLCBpc1RvdWNoT25UYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3Qgc3VwcG9ydCBtb3JlIHRoYW4gb25lIHRvdWNoIHBlciBoYW5kbGUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4ID0gdGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbiB0aGUgb3RoZXIgY2FzZXMsIGZpbmQgb24gY2hhbmdlZFRvdWNoZXMgaXMgZW5vdWdoLlxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VG91Y2ggPSBBcnJheS5wcm90b3R5cGUuZmluZC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGlzVG91Y2hPblRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbmNlbCBpZiB0aGUgdGFyZ2V0IHRvdWNoIGhhcyBub3QgbW92ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0VG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4ID0gdGFyZ2V0VG91Y2gucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaC5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWdlT2Zmc2V0ID0gcGFnZU9mZnNldCB8fCBnZXRQYWdlT2Zmc2V0KHNjb3BlX0RvY3VtZW50KTtcbiAgICAgICAgICAgIGlmIChtb3VzZSB8fCBwb2ludGVyKSB7XG4gICAgICAgICAgICAgICAgeCA9IGUuY2xpZW50WCArIHBhZ2VPZmZzZXQueDtcbiAgICAgICAgICAgICAgICB5ID0gZS5jbGllbnRZICsgcGFnZU9mZnNldC55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wYWdlT2Zmc2V0ID0gcGFnZU9mZnNldDtcbiAgICAgICAgICAgIGUucG9pbnRzID0gW3gsIHldO1xuICAgICAgICAgICAgZS5jdXJzb3IgPSBtb3VzZSB8fCBwb2ludGVyOyAvLyBGaXggIzQzNVxuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJhbnNsYXRlIGEgY29vcmRpbmF0ZSBpbiB0aGUgZG9jdW1lbnQgdG8gYSBwZXJjZW50YWdlIG9uIHRoZSBzbGlkZXJcbiAgICAgICAgZnVuY3Rpb24gY2FsY1BvaW50VG9QZXJjZW50YWdlKGNhbGNQb2ludCkge1xuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gY2FsY1BvaW50IC0gb2Zmc2V0KHNjb3BlX0Jhc2UsIG9wdGlvbnMub3J0KTtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IChsb2NhdGlvbiAqIDEwMCkgLyBiYXNlU2l6ZSgpO1xuICAgICAgICAgICAgLy8gQ2xhbXAgcHJvcG9zYWwgYmV0d2VlbiAwJSBhbmQgMTAwJVxuICAgICAgICAgICAgLy8gT3V0LW9mLWJvdW5kIGNvb3JkaW5hdGVzIG1heSBvY2N1ciB3aGVuIC5ub1VpLWJhc2UgcHNldWRvLWVsZW1lbnRzXG4gICAgICAgICAgICAvLyBhcmUgdXNlZCAoZS5nLiBjb250YWluZWQgaGFuZGxlcyBmZWF0dXJlKVxuICAgICAgICAgICAgcHJvcG9zYWwgPSBsaW1pdChwcm9wb3NhbCk7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXIgPyAxMDAgLSBwcm9wb3NhbCA6IHByb3Bvc2FsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpbmQgaGFuZGxlIGNsb3Nlc3QgdG8gYSBjZXJ0YWluIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgICAgICBmdW5jdGlvbiBnZXRDbG9zZXN0SGFuZGxlKGNsaWNrZWRQb3NpdGlvbikge1xuICAgICAgICAgICAgdmFyIHNtYWxsZXN0RGlmZmVyZW5jZSA9IDEwMDtcbiAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIERpc2FibGVkIGhhbmRsZXMgYXJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICBpZiAoaXNIYW5kbGVEaXNhYmxlZChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlUG9zaXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPSBNYXRoLmFicyhoYW5kbGVQb3NpdGlvbiAtIGNsaWNrZWRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbCBzdGF0ZVxuICAgICAgICAgICAgICAgIHZhciBjbGlja0F0RWRnZSA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9PT0gMTAwICYmIHNtYWxsZXN0RGlmZmVyZW5jZSA9PT0gMTAwO1xuICAgICAgICAgICAgICAgIC8vIERpZmZlcmVuY2Ugd2l0aCB0aGlzIGhhbmRsZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHByZXZpb3VzbHkgY2hlY2tlZCBoYW5kbGVcbiAgICAgICAgICAgICAgICB2YXIgaXNDbG9zZXIgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPCBzbWFsbGVzdERpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgdmFyIGlzQ2xvc2VyQWZ0ZXIgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPD0gc21hbGxlc3REaWZmZXJlbmNlICYmIGNsaWNrZWRQb3NpdGlvbiA+IGhhbmRsZVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGlmIChpc0Nsb3NlciB8fCBpc0Nsb3NlckFmdGVyIHx8IGNsaWNrQXRFZGdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlciA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBzbWFsbGVzdERpZmZlcmVuY2UgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlTnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcmUgJ2VuZCcgd2hlbiBhIG1vdXNlIG9yIHBlbiBsZWF2ZXMgdGhlIGRvY3VtZW50LlxuICAgICAgICBmdW5jdGlvbiBkb2N1bWVudExlYXZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZW91dFwiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSBcIkhUTUxcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBldmVudEVuZChldmVudCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIG1vdmVtZW50IG9uIGRvY3VtZW50IGZvciBoYW5kbGUgYW5kIHJhbmdlIGRyYWcuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50TW92ZShldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gRml4ICM0OThcbiAgICAgICAgICAgIC8vIENoZWNrIHZhbHVlIG9mIC5idXR0b25zIGluICdzdGFydCcgdG8gd29yayBhcm91bmQgYSBidWcgaW4gSUUxMCBtb2JpbGUgKGRhdGEuYnV0dG9uc1Byb3BlcnR5KS5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvOTI3MDA1L21vYmlsZS1pZTEwLXdpbmRvd3MtcGhvbmUtYnV0dG9ucy1wcm9wZXJ0eS1vZi1wb2ludGVybW92ZS1ldmVudC1hbHdheXMtemVyb1xuICAgICAgICAgICAgLy8gSUU5IGhhcyAuYnV0dG9ucyBhbmQgLndoaWNoIHplcm8gb24gbW91c2Vtb3ZlLlxuICAgICAgICAgICAgLy8gRmlyZWZveCBicmVha3MgdGhlIHNwZWMgTUROIGRlZmluZXMuXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgOVwiKSA9PT0gLTEgJiYgZXZlbnQuYnV0dG9ucyA9PT0gMCAmJiBkYXRhLmJ1dHRvbnNQcm9wZXJ0eSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudEVuZChldmVudCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBhcmUgbW92aW5nIHVwIG9yIGRvd25cbiAgICAgICAgICAgIHZhciBtb3ZlbWVudCA9IChvcHRpb25zLmRpciA/IC0xIDogMSkgKiAoZXZlbnQuY2FsY1BvaW50IC0gZGF0YS5zdGFydENhbGNQb2ludCk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBtb3ZlbWVudCBpbnRvIGEgcGVyY2VudGFnZSBvZiB0aGUgc2xpZGVyIHdpZHRoL2hlaWdodFxuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gKG1vdmVtZW50ICogMTAwKSAvIGRhdGEuYmFzZVNpemU7XG4gICAgICAgICAgICBtb3ZlSGFuZGxlcyhtb3ZlbWVudCA+IDAsIHByb3Bvc2FsLCBkYXRhLmxvY2F0aW9ucywgZGF0YS5oYW5kbGVOdW1iZXJzLCBkYXRhLmNvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuYmluZCBtb3ZlIGV2ZW50cyBvbiBkb2N1bWVudCwgY2FsbCBjYWxsYmFja3MuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50RW5kKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBUaGUgaGFuZGxlIGlzIG5vIGxvbmdlciBhY3RpdmUsIHNvIHJlbW92ZSB0aGUgY2xhc3MuXG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGUpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhkYXRhLmhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50IC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVbmJpbmQgdGhlIG1vdmUgYW5kIGVuZCBldmVudHMsIHdoaWNoIGFyZSBhZGRlZCBvbiAnc3RhcnQnLlxuICAgICAgICAgICAgZGF0YS5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHNjb3BlX0RvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGNbMF0sIGNbMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGRyYWdnaW5nIGNsYXNzLlxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWcpO1xuICAgICAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjdXJzb3Igc3R5bGVzIGFuZCB0ZXh0LXNlbGVjdGlvbiBldmVudHMgYm91bmQgdG8gdGhlIGJvZHkuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnN0eWxlLmN1cnNvciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIHByZXZlbnREZWZhdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiZW5kXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LlxuICAgICAgICBmdW5jdGlvbiBldmVudFN0YXJ0KGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgZXZlbnQgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5zb21lKGlzSGFuZGxlRGlzYWJsZWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhbmRsZTtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZU51bWJlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZU9yaWdpbiA9IHNjb3BlX0hhbmRsZXNbZGF0YS5oYW5kbGVOdW1iZXJzWzBdXTtcbiAgICAgICAgICAgICAgICBoYW5kbGUgPSBoYW5kbGVPcmlnaW4uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgaGFuZGxlIGFzICdhY3RpdmUnIHNvIGl0IGNhbiBiZSBzdHlsZWQuXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEEgZHJhZyBzaG91bGQgbmV2ZXIgcHJvcGFnYXRlIHVwIHRvIHRoZSAndGFwJyBldmVudC5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgLy8gUmVjb3JkIHRoZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIG1vdmUgYW5kIGVuZCBldmVudHMuXG4gICAgICAgICAgICB2YXIgbW92ZUV2ZW50ID0gYXR0YWNoRXZlbnQoYWN0aW9ucy5tb3ZlLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGV2ZW50TW92ZSwge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBldmVudCB0YXJnZXQgaGFzIGNoYW5nZWQgc28gd2UgbmVlZCB0byBwcm9wYWdhdGUgdGhlIG9yaWdpbmFsIG9uZSBzbyB0aGF0IHdlIGtlZXBcbiAgICAgICAgICAgICAgICAvLyByZWx5aW5nIG9uIGl0IHRvIGV4dHJhY3QgdGFyZ2V0IHRvdWNoZXMuXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgY29ubmVjdDogZGF0YS5jb25uZWN0LFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q2FsY1BvaW50OiBldmVudC5jYWxjUG9pbnQsXG4gICAgICAgICAgICAgICAgYmFzZVNpemU6IGJhc2VTaXplKCksXG4gICAgICAgICAgICAgICAgcGFnZU9mZnNldDogZXZlbnQucGFnZU9mZnNldCxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnMsXG4gICAgICAgICAgICAgICAgYnV0dG9uc1Byb3BlcnR5OiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uczogc2NvcGVfTG9jYXRpb25zLnNsaWNlKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGVuZEV2ZW50ID0gYXR0YWNoRXZlbnQoYWN0aW9ucy5lbmQsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRFbmQsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG91dEV2ZW50ID0gYXR0YWNoRXZlbnQoXCJtb3VzZW91dFwiLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50TGVhdmUsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gV2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgcHVzaGVkIHRoZSBsaXN0ZW5lcnMgaW4gdGhlIGxpc3RlbmVyIGxpc3QgcmF0aGVyIHRoYW4gY3JlYXRpbmdcbiAgICAgICAgICAgIC8vIGEgbmV3IG9uZSBhcyBpdCBoYXMgYWxyZWFkeSBiZWVuIHBhc3NlZCB0byB0aGUgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICBsaXN0ZW5lcnMucHVzaC5hcHBseShsaXN0ZW5lcnMsIG1vdmVFdmVudC5jb25jYXQoZW5kRXZlbnQsIG91dEV2ZW50KSk7XG4gICAgICAgICAgICAvLyBUZXh0IHNlbGVjdGlvbiBpc24ndCBhbiBpc3N1ZSBvbiB0b3VjaCBkZXZpY2VzLFxuICAgICAgICAgICAgLy8gc28gYWRkaW5nIGN1cnNvciBzdHlsZXMgY2FuIGJlIHNraXBwZWQuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgJ0knIGN1cnNvciBhbmQgZXh0ZW5kIHRoZSByYW5nZS1kcmFnIGN1cnNvci5cbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnN0eWxlLmN1cnNvciA9IGdldENvbXB1dGVkU3R5bGUoZXZlbnQudGFyZ2V0KS5jdXJzb3I7XG4gICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgdGFyZ2V0IHdpdGggYSBkcmFnZ2luZyBzdGF0ZS5cbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRleHQgc2VsZWN0aW9uIHdoZW4gZHJhZ2dpbmcgdGhlIGhhbmRsZXMuXG4gICAgICAgICAgICAgICAgLy8gSW4gbm9VaVNsaWRlciA8PSA5LjIuMCwgdGhpcyB3YXMgaGFuZGxlZCBieSBjYWxsaW5nIHByZXZlbnREZWZhdWx0IG9uIG1vdXNlL3RvdWNoIHN0YXJ0L21vdmUsXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggaXMgc2Nyb2xsIGJsb2NraW5nLiBUaGUgc2VsZWN0c3RhcnQgZXZlbnQgaXMgc3VwcG9ydGVkIGJ5IEZpcmVGb3ggc3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDUyLFxuICAgICAgICAgICAgICAgIC8vIG1lYW5pbmcgdGhlIG9ubHkgaG9sZG91dCBpcyBpT1MgU2FmYXJpLiBUaGlzIGRvZXNuJ3QgbWF0dGVyOiB0ZXh0IHNlbGVjdGlvbiBpc24ndCB0cmlnZ2VyZWQgdGhlcmUuXG4gICAgICAgICAgICAgICAgLy8gVGhlICdjdXJzb3InIGZsYWcgaXMgZmFsc2UuXG4gICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1zZWxlY3RzdGFydFxuICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic3RhcnRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgY2xvc2VzdCBoYW5kbGUgdG8gdGFwcGVkIGxvY2F0aW9uLlxuICAgICAgICBmdW5jdGlvbiBldmVudFRhcChldmVudCkge1xuICAgICAgICAgICAgLy8gVGhlIHRhcCBldmVudCBzaG91bGRuJ3QgcHJvcGFnYXRlIHVwXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IGNhbGNQb2ludFRvUGVyY2VudGFnZShldmVudC5jYWxjUG9pbnQpO1xuICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlciA9IGdldENsb3Nlc3RIYW5kbGUocHJvcG9zYWwpO1xuICAgICAgICAgICAgLy8gVGFja2xlIHRoZSBjYXNlIHRoYXQgYWxsIGhhbmRsZXMgYXJlICdkaXNhYmxlZCcuXG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZsYWcgdGhlIHNsaWRlciBhcyBpdCBpcyBub3cgaW4gYSB0cmFuc2l0aW9uYWwgc3RhdGUuXG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uIHRha2VzIGEgY29uZmlndXJhYmxlIGFtb3VudCBvZiBtcyAoZGVmYXVsdCAzMDApLiBSZS1lbmFibGUgdGhlIHNsaWRlciBhZnRlciB0aGF0LlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmV2ZW50cy5zbmFwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NGb3Ioc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHByb3Bvc2FsLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmV2ZW50cy5zbmFwKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudFN0YXJ0KGV2ZW50LCB7IGhhbmRsZU51bWJlcnM6IFtoYW5kbGVOdW1iZXJdIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZpcmVzIGEgJ2hvdmVyJyBldmVudCBmb3IgYSBob3ZlcmVkIG1vdXNlL3BlbiBwb3NpdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRIb3ZlcihldmVudCkge1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gY2FsY1BvaW50VG9QZXJjZW50YWdlKGV2ZW50LmNhbGNQb2ludCk7XG4gICAgICAgICAgICB2YXIgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHByb3Bvc2FsKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiaG92ZXJcIiA9PT0gdGFyZ2V0RXZlbnQuc3BsaXQoXCIuXCIpWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0V2ZW50c1t0YXJnZXRFdmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGVfU2VsZiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVzIGtleWRvd24gb24gZm9jdXNlZCBoYW5kbGVzXG4gICAgICAgIC8vIERvbid0IG1vdmUgdGhlIGRvY3VtZW50IHdoZW4gcHJlc3NpbmcgYXJyb3cga2V5cyBvbiBmb2N1c2VkIGhhbmRsZXNcbiAgICAgICAgZnVuY3Rpb24gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGlmIChpc1NsaWRlckRpc2FibGVkKCkgfHwgaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhvcml6b250YWxLZXlzID0gW1wiTGVmdFwiLCBcIlJpZ2h0XCJdO1xuICAgICAgICAgICAgdmFyIHZlcnRpY2FsS2V5cyA9IFtcIkRvd25cIiwgXCJVcFwiXTtcbiAgICAgICAgICAgIHZhciBsYXJnZVN0ZXBLZXlzID0gW1wiUGFnZURvd25cIiwgXCJQYWdlVXBcIl07XG4gICAgICAgICAgICB2YXIgZWRnZUtleXMgPSBbXCJIb21lXCIsIFwiRW5kXCJdO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlyICYmICFvcHRpb25zLm9ydCkge1xuICAgICAgICAgICAgICAgIC8vIE9uIGFuIHJpZ2h0LXRvLWxlZnQgc2xpZGVyLCB0aGUgbGVmdCBhbmQgcmlnaHQga2V5cyBhY3QgaW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLm9ydCAmJiAhb3B0aW9ucy5kaXIpIHtcbiAgICAgICAgICAgICAgICAvLyBPbiBhIHRvcC10by1ib3R0b20gc2xpZGVyLCB0aGUgdXAgYW5kIGRvd24ga2V5cyBhY3QgaW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEtleXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIGxhcmdlU3RlcEtleXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RyaXAgXCJBcnJvd1wiIGZvciBJRSBjb21wYXRpYmlsaXR5LiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvS2V5Ym9hcmRFdmVudC9rZXlcbiAgICAgICAgICAgIHZhciBrZXkgPSBldmVudC5rZXkucmVwbGFjZShcIkFycm93XCIsIFwiXCIpO1xuICAgICAgICAgICAgdmFyIGlzTGFyZ2VEb3duID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzBdO1xuICAgICAgICAgICAgdmFyIGlzTGFyZ2VVcCA9IGtleSA9PT0gbGFyZ2VTdGVwS2V5c1sxXTtcbiAgICAgICAgICAgIHZhciBpc0Rvd24gPSBrZXkgPT09IHZlcnRpY2FsS2V5c1swXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzBdIHx8IGlzTGFyZ2VEb3duO1xuICAgICAgICAgICAgdmFyIGlzVXAgPSBrZXkgPT09IHZlcnRpY2FsS2V5c1sxXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzFdIHx8IGlzTGFyZ2VVcDtcbiAgICAgICAgICAgIHZhciBpc01pbiA9IGtleSA9PT0gZWRnZUtleXNbMF07XG4gICAgICAgICAgICB2YXIgaXNNYXggPSBrZXkgPT09IGVkZ2VLZXlzWzFdO1xuICAgICAgICAgICAgaWYgKCFpc0Rvd24gJiYgIWlzVXAgJiYgIWlzTWluICYmICFpc01heCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciB0bztcbiAgICAgICAgICAgIGlmIChpc1VwIHx8IGlzRG93bikge1xuICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBpc0Rvd24gPyAwIDogMTtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcHMgPSBnZXROZXh0U3RlcHNGb3JIYW5kbGUoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcCA9IHN0ZXBzW2RpcmVjdGlvbl07XG4gICAgICAgICAgICAgICAgLy8gQXQgdGhlIGVkZ2Ugb2YgYSBzbGlkZXIsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIHN0ZXAgc2V0LCB1c2UgdGhlIGRlZmF1bHQgb2YgMTAlIG9mIHRoZSBzdWItcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IHNjb3BlX1NwZWN0cnVtLmdldERlZmF1bHRTdGVwKHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCBpc0Rvd24sIG9wdGlvbnMua2V5Ym9hcmREZWZhdWx0U3RlcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc0xhcmdlVXAgfHwgaXNMYXJnZURvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCAqPSBvcHRpb25zLmtleWJvYXJkUGFnZU11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdGVwIG92ZXIgemVyby1sZW5ndGggcmFuZ2VzICgjOTQ4KTtcbiAgICAgICAgICAgICAgICBzdGVwID0gTWF0aC5tYXgoc3RlcCwgMC4wMDAwMDAxKTtcbiAgICAgICAgICAgICAgICAvLyBEZWNyZW1lbnQgZm9yIGRvd24gc3RlcHNcbiAgICAgICAgICAgICAgICBzdGVwID0gKGlzRG93biA/IC0xIDogMSkgKiBzdGVwO1xuICAgICAgICAgICAgICAgIHRvID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl0gKyBzdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNNYXgpIHtcbiAgICAgICAgICAgICAgICAvLyBFbmQga2V5XG4gICAgICAgICAgICAgICAgdG8gPSBvcHRpb25zLnNwZWN0cnVtLnhWYWxbb3B0aW9ucy5zcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSG9tZSBrZXlcbiAgICAgICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodG8pLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXR0YWNoIGV2ZW50cyB0byBzZXZlcmFsIHNsaWRlciBwYXJ0cy5cbiAgICAgICAgZnVuY3Rpb24gYmluZFNsaWRlckV2ZW50cyhiZWhhdmlvdXIpIHtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgc3RhbmRhcmQgZHJhZyBldmVudCB0byB0aGUgaGFuZGxlcy5cbiAgICAgICAgICAgIGlmICghYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIGV2ZW50cyBhcmUgb25seSBib3VuZCB0byB0aGUgdmlzdWFsIGhhbmRsZVxuICAgICAgICAgICAgICAgICAgICAvLyBlbGVtZW50LCBub3QgdGhlICdyZWFsJyBvcmlnaW4gZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgaGFuZGxlLmNoaWxkcmVuWzBdLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBbaW5kZXhdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSB0YXAgZXZlbnQgdG8gdGhlIHNsaWRlciBiYXNlLlxuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci50YXApIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBzY29wZV9CYXNlLCBldmVudFRhcCwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyZSBob3ZlciBldmVudHNcbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuaG92ZXIpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0Jhc2UsIGV2ZW50SG92ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIHJhbmdlIGRyYWdnYWJsZS5cbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZykge1xuICAgICAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLmZvckVhY2goZnVuY3Rpb24gKGNvbm5lY3QsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ID09PSBmYWxzZSB8fCBpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gc2NvcGVfQ29ubmVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVCZWZvcmUgPSBzY29wZV9IYW5kbGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVBZnRlciA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRIb2xkZXJzID0gW2Nvbm5lY3RdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlc1RvRHJhZyA9IFtoYW5kbGVCZWZvcmUsIGhhbmRsZUFmdGVyXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBbaW5kZXggLSAxLCBpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKGNvbm5lY3QsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnZ2FibGUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSByYW5nZSBpcyBmaXhlZCwgdGhlIGVudGlyZSByYW5nZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgLy8gYmUgZHJhZ2dlZCBieSB0aGUgaGFuZGxlcy4gVGhlIGhhbmRsZSBpbiB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gb3JpZ2luIHdpbGwgcHJvcGFnYXRlIHRoZSBzdGFydCBldmVudCB1cHdhcmQsXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBpdCBuZWVkcyB0byBiZSBib3VuZCBtYW51YWxseSBvbiB0aGUgb3RoZXIuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5wdXNoKGhhbmRsZUJlZm9yZS5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMucHVzaChoYW5kbGVBZnRlci5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5kcmFnQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVzVG9EcmFnID0gc2NvcGVfSGFuZGxlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBzY29wZV9IYW5kbGVOdW1iZXJzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgZXZlbnRIb2xkZXIsIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVzOiBoYW5kbGVzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGhhbmRsZU51bWJlcnNUb0RyYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogY29ubmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEF0dGFjaCBhbiBldmVudCB0byB0aGlzIHNsaWRlciwgcG9zc2libHkgaW5jbHVkaW5nIGEgbmFtZXNwYWNlXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRFdmVudChuYW1lc3BhY2VkRXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XSA9IHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdIHx8IFtdO1xuICAgICAgICAgICAgc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZXZlbnQgYm91bmQgaXMgJ3VwZGF0ZSwnIGZpcmUgaXQgaW1tZWRpYXRlbHkgZm9yIGFsbCBoYW5kbGVzLlxuICAgICAgICAgICAgaWYgKG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF0gPT09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGEsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNJbnRlcm5hbE5hbWVzcGFjZShuYW1lc3BhY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc3BhY2UgPT09IElOVEVSTkFMX0VWRU5UX05TLmFyaWEgfHwgbmFtZXNwYWNlID09PSBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcztcbiAgICAgICAgfVxuICAgICAgICAvLyBVbmRvIGF0dGFjaG1lbnQgb2YgZXZlbnRcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnQobmFtZXNwYWNlZEV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuYW1lc3BhY2VkRXZlbnQgJiYgbmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSBldmVudCA/IG5hbWVzcGFjZWRFdmVudC5zdWJzdHJpbmcoZXZlbnQubGVuZ3RoKSA6IG5hbWVzcGFjZWRFdmVudDtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAoYmluZCkge1xuICAgICAgICAgICAgICAgIHZhciB0RXZlbnQgPSBiaW5kLnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgICAgICB2YXIgdE5hbWVzcGFjZSA9IGJpbmQuc3Vic3RyaW5nKHRFdmVudC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmICgoIWV2ZW50IHx8IGV2ZW50ID09PSB0RXZlbnQpICYmICghbmFtZXNwYWNlIHx8IG5hbWVzcGFjZSA9PT0gdE5hbWVzcGFjZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBkZWxldGUgcHJvdGVjdGVkIGludGVybmFsIGV2ZW50IGlmIGludGVudGlvbmFsXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNJbnRlcm5hbE5hbWVzcGFjZSh0TmFtZXNwYWNlKSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzY29wZV9FdmVudHNbYmluZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFeHRlcm5hbCBldmVudCBoYW5kbGluZ1xuICAgICAgICBmdW5jdGlvbiBmaXJlRXZlbnQoZXZlbnROYW1lLCBoYW5kbGVOdW1iZXIsIHRhcCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudFR5cGUgPSB0YXJnZXRFdmVudC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gZXZlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0V2ZW50c1t0YXJnZXRFdmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIHNsaWRlciBwdWJsaWMgQVBJIGFzIHRoZSBzY29wZSAoJ3RoaXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfU2VsZiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdmFsdWVzIGFzIGFycmF5LCBzbyBhcmdfMVthcmdfMl0gaXMgYWx3YXlzIHZhbGlkLlxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfVmFsdWVzLm1hcChvcHRpb25zLmZvcm1hdC50byksIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGluZGV4LCAwIG9yIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVbi1mb3JtYXR0ZWQgc2xpZGVyIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfVmFsdWVzLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXZlbnQgaXMgZmlyZWQgYnkgdGFwLCB0cnVlIG9yIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXAgfHwgZmFsc2UsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGVmdCBvZmZzZXQgb2YgdGhlIGhhbmRsZSwgaW4gcmVsYXRpb24gdG8gdGhlIHNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoZSBzbGlkZXIgcHVibGljIEFQSSB0byBhbiBhY2Nlc3NpYmxlIHBhcmFtZXRlciB3aGVuIHRoaXMgaXMgdW5hdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1NlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTcGxpdCBvdXQgdGhlIGhhbmRsZSBwb3NpdGlvbmluZyBsb2dpYyBzbyB0aGUgTW92ZSBldmVudCBjYW4gdXNlIGl0LCB0b29cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tIYW5kbGVQb3NpdGlvbihyZWZlcmVuY2UsIGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGdldFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2U7XG4gICAgICAgICAgICAvLyBGb3Igc2xpZGVycyB3aXRoIG11bHRpcGxlIGhhbmRsZXMsIGxpbWl0IG1vdmVtZW50IHRvIHRoZSBvdGhlciBoYW5kbGUuXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgbWFyZ2luIG9wdGlvbiBieSBhZGRpbmcgaXQgdG8gdGhlIGhhbmRsZSBwb3NpdGlvbnMuXG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxICYmICFvcHRpb25zLmV2ZW50cy51bmNvbnN0cmFpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyIC0gMV0sIG9wdGlvbnMubWFyZ2luLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLm1hcmdpbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgbGltaXQgb3B0aW9uIGhhcyB0aGUgb3Bwb3NpdGUgZWZmZWN0LCBsaW1pdGluZyBoYW5kbGVzIHRvIGFcbiAgICAgICAgICAgIC8vIG1heGltdW0gZGlzdGFuY2UgZnJvbSBhbm90aGVyLiBMaW1pdCBtdXN0IGJlID4gMCwgYXMgb3RoZXJ3aXNlXG4gICAgICAgICAgICAvLyBoYW5kbGVzIHdvdWxkIGJlIHVubW92YWJsZS5cbiAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgb3B0aW9ucy5saW1pdCkge1xuICAgICAgICAgICAgICAgIGlmIChsb29rQmFja3dhcmQgJiYgaGFuZGxlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLmxpbWl0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLmxpbWl0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBwYWRkaW5nIG9wdGlvbiBrZWVwcyB0aGUgaGFuZGxlcyBhIGNlcnRhaW4gZGlzdGFuY2UgZnJvbSB0aGVcbiAgICAgICAgICAgIC8vIGVkZ2VzIG9mIHRoZSBzbGlkZXIuIFBhZGRpbmcgbXVzdCBiZSA+IDAuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5wYWRkaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UoMCwgb3B0aW9ucy5wYWRkaW5nWzBdLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZSgxMDAsIG9wdGlvbnMucGFkZGluZ1sxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byA9IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAodG8pO1xuICAgICAgICAgICAgLy8gTGltaXQgcGVyY2VudGFnZSB0byB0aGUgMCAtIDEwMCByYW5nZVxuICAgICAgICAgICAgdG8gPSBsaW1pdCh0byk7XG4gICAgICAgICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgaGFuZGxlIGNhbid0IG1vdmVcbiAgICAgICAgICAgIGlmICh0byA9PT0gcmVmZXJlbmNlW2hhbmRsZU51bWJlcl0gJiYgIWdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVzZXMgc2xpZGVyIG9yaWVudGF0aW9uIHRvIGNyZWF0ZSBDU1MgcnVsZXMuIGEgPSBiYXNlIHZhbHVlO1xuICAgICAgICBmdW5jdGlvbiBpblJ1bGVPcmRlcih2LCBhKSB7XG4gICAgICAgICAgICB2YXIgbyA9IG9wdGlvbnMub3J0O1xuICAgICAgICAgICAgcmV0dXJuIChvID8gYSA6IHYpICsgXCIsIFwiICsgKG8gPyB2IDogYSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZXMgaGFuZGxlKHMpIGJ5IGEgcGVyY2VudGFnZVxuICAgICAgICAvLyAoYm9vbCwgJSB0byBtb3ZlLCBbJSB3aGVyZSBoYW5kbGUgc3RhcnRlZCwgLi4uXSwgW2luZGV4IGluIHNjb3BlX0hhbmRsZXMsIC4uLl0pXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIGxvY2F0aW9ucywgaGFuZGxlTnVtYmVycywgY29ubmVjdCkge1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FscyA9IGxvY2F0aW9ucy5zbGljZSgpO1xuICAgICAgICAgICAgLy8gU3RvcmUgZmlyc3QgaGFuZGxlIG5vdywgc28gd2Ugc3RpbGwgaGF2ZSBpdCBpbiBjYXNlIGhhbmRsZU51bWJlcnMgaXMgcmV2ZXJzZWRcbiAgICAgICAgICAgIHZhciBmaXJzdEhhbmRsZSA9IGhhbmRsZU51bWJlcnNbMF07XG4gICAgICAgICAgICB2YXIgYiA9IFshdXB3YXJkLCB1cHdhcmRdO1xuICAgICAgICAgICAgdmFyIGYgPSBbdXB3YXJkLCAhdXB3YXJkXTtcbiAgICAgICAgICAgIC8vIENvcHkgaGFuZGxlTnVtYmVycyBzbyB3ZSBkb24ndCBjaGFuZ2UgdGhlIGRhdGFzZXRcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMgPSBoYW5kbGVOdW1iZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgd2hpY2ggaGFuZGxlIGlzICdsZWFkaW5nJy5cbiAgICAgICAgICAgIC8vIElmIHRoYXQgb25lIGNhbid0IG1vdmUgdGhlIHNlY29uZCBjYW4ndCBlaXRoZXIuXG4gICAgICAgICAgICBpZiAodXB3YXJkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGVwIDE6IGdldCB0aGUgbWF4aW11bSBwZXJjZW50YWdlIHRoYXQgYW55IG9mIHRoZSBoYW5kbGVzIGNhbiBtb3ZlXG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvID0gY2hlY2tIYW5kbGVQb3NpdGlvbihwcm9wb3NhbHMsIGhhbmRsZU51bWJlciwgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIG9uZSBvZiB0aGUgaGFuZGxlcyBjYW4ndCBtb3ZlLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IHRvIC0gcHJvcG9zYWxzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1c2luZyBvbmUgaGFuZGxlLCBjaGVjayBiYWNrd2FyZCBBTkQgZm9yd2FyZFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYiA9IGYgPSBbdHJ1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFN0ZXAgMjogVHJ5IHRvIHNldCB0aGUgaGFuZGxlcyB3aXRoIHRoZSBmb3VuZCBwZXJjZW50YWdlXG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlciwgbykge1xuICAgICAgICAgICAgICAgIHN0YXRlID0gc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgbG9jYXRpb25zW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSkgfHwgc3RhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFN0ZXAgMzogSWYgYSBoYW5kbGUgbW92ZWQsIGZpcmUgZXZlbnRzXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBjb25uZWN0LCB0aGVuIGZpcmUgZHJhZyBldmVudFxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJkcmFnXCIsIGZpcnN0SGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGFrZXMgYSBiYXNlIHZhbHVlIGFuZCBhbiBvZmZzZXQuIFRoaXMgb2Zmc2V0IGlzIHVzZWQgZm9yIHRoZSBjb25uZWN0IGJhciBzaXplLlxuICAgICAgICAvLyBJbiB0aGUgaW5pdGlhbCBkZXNpZ24gZm9yIHRoaXMgZmVhdHVyZSwgdGhlIG9yaWdpbiBlbGVtZW50IHdhcyAxJSB3aWRlLlxuICAgICAgICAvLyBVbmZvcnR1bmF0ZWx5LCBhIHJvdW5kaW5nIGJ1ZyBpbiBDaHJvbWUgbWFrZXMgaXQgaW1wb3NzaWJsZSB0byBpbXBsZW1lbnQgdGhpcyBmZWF0dXJlXG4gICAgICAgIC8vIGluIHRoaXMgbWFubmVyOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03OTgyMjNcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNmb3JtRGlyZWN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIGEgLSBiIDogYTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGVzIHNjb3BlX0xvY2F0aW9ucyBhbmQgc2NvcGVfVmFsdWVzLCB1cGRhdGVzIHZpc3VhbCBzdGF0ZVxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25zLlxuICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSB0bztcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvIHRoZSBzbGlkZXIgc3RlcHBpbmcvcmFuZ2UuXG4gICAgICAgICAgICBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRpb24gPSB0cmFuc2Zvcm1EaXJlY3Rpb24odG8sIDApIC0gc2NvcGVfRGlyT2Zmc2V0O1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zbGF0aW9uICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPSB0cmFuc2xhdGVSdWxlO1xuICAgICAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVzIGJlZm9yZSB0aGUgc2xpZGVyIG1pZGRsZSBhcmUgc3RhY2tlZCBsYXRlciA9IGhpZ2hlcixcbiAgICAgICAgLy8gSGFuZGxlcyBhZnRlciB0aGUgbWlkZGxlIGxhdGVyIGlzIGxvd2VyXG4gICAgICAgIC8vIFtbN10gWzhdIC4uLi4uLi4uLi4gfCAuLi4uLi4uLi4uIFs1XSBbNF1cbiAgICAgICAgZnVuY3Rpb24gc2V0WmluZGV4KCkge1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlyID0gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPiA1MCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICB2YXIgekluZGV4ID0gMyArIChzY29wZV9IYW5kbGVzLmxlbmd0aCArIGRpciAqIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlLnpJbmRleCA9IFN0cmluZyh6SW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGVzdCBzdWdnZXN0ZWQgdmFsdWVzIGFuZCBhcHBseSBtYXJnaW4sIHN0ZXAuXG4gICAgICAgIC8vIGlmIGV4YWN0SW5wdXQgaXMgdHJ1ZSwgZG9uJ3QgcnVuIGNoZWNrSGFuZGxlUG9zaXRpb24sIHRoZW4gdGhlIGhhbmRsZSBjYW4gYmUgcGxhY2VkIGluIGJldHdlZW4gc3RlcHMgKCM0MzYpXG4gICAgICAgIGZ1bmN0aW9uIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBleGFjdElucHV0KSB7XG4gICAgICAgICAgICBpZiAoIWV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0byA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlSGFuZGxlUG9zaXRpb24oaGFuZGxlTnVtYmVyLCB0byk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGVzIHN0eWxlIGF0dHJpYnV0ZSBmb3IgY29ubmVjdCBub2Rlc1xuICAgICAgICBmdW5jdGlvbiB1cGRhdGVDb25uZWN0KGluZGV4KSB7XG4gICAgICAgICAgICAvLyBTa2lwIGNvbm5lY3RzIHNldCB0byBmYWxzZVxuICAgICAgICAgICAgaWYgKCFzY29wZV9Db25uZWN0c1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbCA9IDA7XG4gICAgICAgICAgICB2YXIgaCA9IDEwMDtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGwgPSBzY29wZV9Mb2NhdGlvbnNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gc2NvcGVfQ29ubmVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGggPSBzY29wZV9Mb2NhdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2UgdXNlIHR3byBydWxlczpcbiAgICAgICAgICAgIC8vICd0cmFuc2xhdGUnIHRvIGNoYW5nZSB0aGUgbGVmdC90b3Agb2Zmc2V0O1xuICAgICAgICAgICAgLy8gJ3NjYWxlJyB0byBjaGFuZ2UgdGhlIHdpZHRoIG9mIHRoZSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gQXMgdGhlIGVsZW1lbnQgaGFzIGEgd2lkdGggb2YgMTAwJSwgYSB0cmFuc2xhdGlvbiBvZiAxMDAlIGlzIGVxdWFsIHRvIDEwMCUgb2YgdGhlIHBhcmVudCAoLm5vVWktYmFzZSlcbiAgICAgICAgICAgIHZhciBjb25uZWN0V2lkdGggPSBoIC0gbDtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVSdWxlID0gXCJ0cmFuc2xhdGUoXCIgKyBpblJ1bGVPcmRlcih0cmFuc2Zvcm1EaXJlY3Rpb24obCwgY29ubmVjdFdpZHRoKSArIFwiJVwiLCBcIjBcIikgKyBcIilcIjtcbiAgICAgICAgICAgIHZhciBzY2FsZVJ1bGUgPSBcInNjYWxlKFwiICsgaW5SdWxlT3JkZXIoY29ubmVjdFdpZHRoIC8gMTAwLCBcIjFcIikgKyBcIilcIjtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzW2luZGV4XS5zdHlsZVtvcHRpb25zLnRyYW5zZm9ybVJ1bGVdID1cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVSdWxlICsgXCIgXCIgKyBzY2FsZVJ1bGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUGFyc2VzIHZhbHVlIHBhc3NlZCB0byAuc2V0IG1ldGhvZC4gUmV0dXJucyBjdXJyZW50IHZhbHVlIGlmIG5vdCBwYXJzZS1hYmxlLlxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlVG9WYWx1ZSh0bywgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAvLyBTZXR0aW5nIHdpdGggbnVsbCBpbmRpY2F0ZXMgYW4gJ2lnbm9yZScuXG4gICAgICAgICAgICAvLyBJbnB1dHRpbmcgJ2ZhbHNlJyBpcyBpbnZhbGlkLlxuICAgICAgICAgICAgaWYgKHRvID09PSBudWxsIHx8IHRvID09PSBmYWxzZSB8fCB0byA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYSBmb3JtYXR0ZWQgbnVtYmVyIHdhcyBwYXNzZWQsIGF0dGVtcHQgdG8gZGVjb2RlIGl0LlxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHRvID0gU3RyaW5nKHRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvID0gb3B0aW9ucy5mb3JtYXQuZnJvbSh0byk7XG4gICAgICAgICAgICBpZiAodG8gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdG8gPSBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHBhcnNpbmcgdGhlIG51bWJlciBmYWlsZWQsIHVzZSB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UgfHwgaXNOYU4odG8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCB0aGUgc2xpZGVyIHZhbHVlLlxuICAgICAgICBmdW5jdGlvbiB2YWx1ZVNldChpbnB1dCwgZmlyZVNldEV2ZW50LCBleGFjdElucHV0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gYXNBcnJheShpbnB1dCk7XG4gICAgICAgICAgICB2YXIgaXNJbml0ID0gc2NvcGVfTG9jYXRpb25zWzBdID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAvLyBFdmVudCBmaXJlcyBieSBkZWZhdWx0XG4gICAgICAgICAgICBmaXJlU2V0RXZlbnQgPSBmaXJlU2V0RXZlbnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmaXJlU2V0RXZlbnQ7XG4gICAgICAgICAgICAvLyBBbmltYXRpb24gaXMgb3B0aW9uYWwuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGluaXRpYWwgdmFsdWVzIHdlcmUgc2V0IGJlZm9yZSB1c2luZyBhbmltYXRlZCBwbGFjZW1lbnQuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRlICYmICFpc0luaXQpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc0ZvcihzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXAsIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyc3QgcGFzcywgd2l0aG91dCBsb29rQWhlYWQgYnV0IHdpdGggbG9va0JhY2t3YXJkLiBWYWx1ZXMgYXJlIHNldCBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHJlc29sdmVUb1ZhbHVlKHZhbHVlc1toYW5kbGVOdW1iZXJdLCBoYW5kbGVOdW1iZXIpLCB0cnVlLCBmYWxzZSwgZXhhY3RJbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBpID0gc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggPT09IDEgPyAwIDogMTtcbiAgICAgICAgICAgIC8vIFNwcmVhZCBoYW5kbGVzIGV2ZW5seSBhY3Jvc3MgdGhlIHNsaWRlciBpZiB0aGUgcmFuZ2UgaGFzIG5vIHNpemUgKG1pbj1tYXgpXG4gICAgICAgICAgICBpZiAoaXNJbml0ICYmIHNjb3BlX1NwZWN0cnVtLmhhc05vU2l6ZSgpKSB7XG4gICAgICAgICAgICAgICAgZXhhY3RJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zWzBdID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGFjZV8xID0gMTAwIC8gKHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA9IGhhbmRsZU51bWJlciAqIHNwYWNlXzE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNlY29uZGFyeSBwYXNzZXMuIE5vdyB0aGF0IGFsbCBiYXNlIHZhbHVlcyBhcmUgc2V0LCBhcHBseSBjb25zdHJhaW50cy5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgYWxsIGhhbmRsZXMgdG8gZW5zdXJlIGNvbnN0cmFpbnRzIGFyZSBhcHBsaWVkIGZvciB0aGUgZW50aXJlIHNsaWRlciAoSXNzdWUgIzEwMDkpXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSwgdHJ1ZSwgdHJ1ZSwgZXhhY3RJbnB1dCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRaaW5kZXgoKTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgLy8gRmlyZSB0aGUgZXZlbnQgb25seSBmb3IgaGFuZGxlcyB0aGF0IHJlY2VpdmVkIGEgbmV3IHZhbHVlLCBhcyBwZXIgIzU3OVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXNbaGFuZGxlTnVtYmVyXSAhPT0gbnVsbCAmJiBmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgc2xpZGVyIHRvIGluaXRpYWwgdmFsdWVzXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlUmVzZXQoZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICB2YWx1ZVNldChvcHRpb25zLnN0YXJ0LCBmaXJlU2V0RXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCB2YWx1ZSBmb3IgYSBzaW5nbGUgaGFuZGxlXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlU2V0SGFuZGxlKGhhbmRsZU51bWJlciwgdmFsdWUsIGZpcmVTZXRFdmVudCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIG51bWVyaWMgaW5wdXRcbiAgICAgICAgICAgIGhhbmRsZU51bWJlciA9IE51bWJlcihoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKCEoaGFuZGxlTnVtYmVyID49IDAgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogaW52YWxpZCBoYW5kbGUgbnVtYmVyLCBnb3Q6IFwiICsgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvb2sgYm90aCBiYWNrd2FyZCBhbmQgZm9yd2FyZCwgc2luY2Ugd2UgZG9uJ3Qgd2FudCB0aGlzIGhhbmRsZSB0byBcInB1c2hcIiBvdGhlciBoYW5kbGVzICgjOTYwKTtcbiAgICAgICAgICAgIC8vIFRoZSBleGFjdElucHV0IGFyZ3VtZW50IGNhbiBiZSB1c2VkIHRvIGlnbm9yZSBzbGlkZXIgc3RlcHBpbmcgKCM0MzYpXG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCByZXNvbHZlVG9WYWx1ZSh2YWx1ZSwgaGFuZGxlTnVtYmVyKSwgdHJ1ZSwgdHJ1ZSwgZXhhY3RJbnB1dCk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICAgICAgZnVuY3Rpb24gdmFsdWVHZXQodW5lbmNvZGVkKSB7XG4gICAgICAgICAgICBpZiAodW5lbmNvZGVkID09PSB2b2lkIDApIHsgdW5lbmNvZGVkID0gZmFsc2U7IH1cbiAgICAgICAgICAgIGlmICh1bmVuY29kZWQpIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gYSBjb3B5IG9mIHRoZSByYXcgdmFsdWVzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1ZhbHVlcy5sZW5ndGggPT09IDEgPyBzY29wZV9WYWx1ZXNbMF0gOiBzY29wZV9WYWx1ZXMuc2xpY2UoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gc2NvcGVfVmFsdWVzLm1hcChvcHRpb25zLmZvcm1hdC50byk7XG4gICAgICAgICAgICAvLyBJZiBvbmx5IG9uZSBoYW5kbGUgaXMgdXNlZCwgcmV0dXJuIGEgc2luZ2xlIHZhbHVlLlxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmVzIGNsYXNzZXMgZnJvbSB0aGUgcm9vdCBhbmQgZW1wdGllcyBpdC5cbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBwcm90ZWN0ZWQgaW50ZXJuYWwgbGlzdGVuZXJzXG4gICAgICAgICAgICByZW1vdmVFdmVudChJTlRFUk5BTF9FVkVOVF9OUy5hcmlhKTtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuY3NzQ2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdoaWxlIChzY29wZV9UYXJnZXQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIHNjb3BlX1RhcmdldC5yZW1vdmVDaGlsZChzY29wZV9UYXJnZXQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgc2NvcGVfVGFyZ2V0Lm5vVWlTbGlkZXI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB2YXIgbmVhcmJ5U3RlcHMgPSBzY29wZV9TcGVjdHJ1bS5nZXROZWFyYnlTdGVwcyhsb2NhdGlvbik7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHZhciBpbmNyZW1lbnQgPSBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGVwO1xuICAgICAgICAgICAgdmFyIGRlY3JlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAvLyBJZiBzbmFwcGVkLCBkaXJlY3RseSB1c2UgZGVmaW5lZCBzdGVwIHZhbHVlXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zbmFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgLSBuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLnN0YXJ0VmFsdWUgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZSB8fCBudWxsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBuZXh0IHZhbHVlIGluIHRoaXMgc3RlcCBtb3ZlcyBpbnRvIHRoZSBuZXh0IHN0ZXAsXG4gICAgICAgICAgICAvLyB0aGUgaW5jcmVtZW50IGlzIHRoZSBzdGFydCBvZiB0aGUgbmV4dCBzdGVwIC0gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIGlmIChpbmNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICsgaW5jcmVtZW50ID4gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYmV5b25kIHRoZSBzdGFydGluZyBwb2ludFxuICAgICAgICAgICAgaWYgKHZhbHVlID4gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RhcnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLnN0ZXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhIGhhbmRsZSBpcyBhdCB0aGUgc3RhcnQgb2YgYSBzdGVwLCBpdCBhbHdheXMgc3RlcHMgYmFjayBpbnRvIHRoZSBwcmV2aW91cyBzdGVwIGZpcnN0XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSB2YWx1ZSAtIG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuaGlnaGVzdFN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3csIGlmIGF0IHRoZSBzbGlkZXIgZWRnZXMsIHRoZXJlIGlzIG5vIGluL2RlY3JlbWVudFxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09PSAxMDApIHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobG9jYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXMgcGVyICMzOTEsIHRoZSBjb21wYXJpc29uIGZvciB0aGUgZGVjcmVtZW50IHN0ZXAgY2FuIGhhdmUgc29tZSByb3VuZGluZyBpc3N1ZXMuXG4gICAgICAgICAgICB2YXIgc3RlcERlY2ltYWxzID0gc2NvcGVfU3BlY3RydW0uY291bnRTdGVwRGVjaW1hbHMoKTtcbiAgICAgICAgICAgIC8vIFJvdW5kIHBlciAjMzkxXG4gICAgICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBudWxsICYmIGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBOdW1iZXIoaW5jcmVtZW50LnRvRml4ZWQoc3RlcERlY2ltYWxzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVjcmVtZW50ICE9PSBudWxsICYmIGRlY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBOdW1iZXIoZGVjcmVtZW50LnRvRml4ZWQoc3RlcERlY2ltYWxzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW2RlY3JlbWVudCwgaW5jcmVtZW50XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBzaXplIGZvciB0aGUgc2xpZGVyLlxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0U3RlcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfSGFuZGxlTnVtYmVycy5tYXAoZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGFibGU6IG1hcmdpbiwgbGltaXQsIHBhZGRpbmcsIHN0ZXAsIHJhbmdlLCBhbmltYXRlLCBzbmFwXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0aW9uc1RvVXBkYXRlLCBmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFNwZWN0cnVtIGlzIGNyZWF0ZWQgdXNpbmcgdGhlIHJhbmdlLCBzbmFwLCBkaXJlY3Rpb24gYW5kIHN0ZXAgb3B0aW9ucy5cbiAgICAgICAgICAgIC8vICdzbmFwJyBhbmQgJ3N0ZXAnIGNhbiBiZSB1cGRhdGVkLlxuICAgICAgICAgICAgLy8gSWYgJ3NuYXAnIGFuZCAnc3RlcCcgYXJlIG5vdCBwYXNzZWQsIHRoZXkgc2hvdWxkIHJlbWFpbiB1bmNoYW5nZWQuXG4gICAgICAgICAgICB2YXIgdiA9IHZhbHVlR2V0KCk7XG4gICAgICAgICAgICB2YXIgdXBkYXRlQWJsZSA9IFtcbiAgICAgICAgICAgICAgICBcIm1hcmdpblwiLFxuICAgICAgICAgICAgICAgIFwibGltaXRcIixcbiAgICAgICAgICAgICAgICBcInBhZGRpbmdcIixcbiAgICAgICAgICAgICAgICBcInJhbmdlXCIsXG4gICAgICAgICAgICAgICAgXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJzbmFwXCIsXG4gICAgICAgICAgICAgICAgXCJzdGVwXCIsXG4gICAgICAgICAgICAgICAgXCJmb3JtYXRcIixcbiAgICAgICAgICAgICAgICBcInBpcHNcIixcbiAgICAgICAgICAgICAgICBcInRvb2x0aXBzXCJcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBPbmx5IGNoYW5nZSBvcHRpb25zIHRoYXQgd2UncmUgYWN0dWFsbHkgcGFzc2VkIHRvIHVwZGF0ZS5cbiAgICAgICAgICAgIHVwZGF0ZUFibGUuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciB1bmRlZmluZWQuIG51bGwgcmVtb3ZlcyB0aGUgdmFsdWUuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsT3B0aW9uc1tuYW1lXSA9IG9wdGlvbnNUb1VwZGF0ZVtuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBuZXdPcHRpb25zID0gdGVzdE9wdGlvbnMob3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgICAgIC8vIExvYWQgbmV3IG9wdGlvbnMgaW50byB0aGUgc2xpZGVyIHN0YXRlXG4gICAgICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc1RvVXBkYXRlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tuYW1lXSA9IG5ld09wdGlvbnNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY29wZV9TcGVjdHJ1bSA9IG5ld09wdGlvbnMuc3BlY3RydW07XG4gICAgICAgICAgICAvLyBMaW1pdCwgbWFyZ2luIGFuZCBwYWRkaW5nIGRlcGVuZCBvbiB0aGUgc3BlY3RydW0gYnV0IGFyZSBzdG9yZWQgb3V0c2lkZSBvZiBpdC4gKCM2NzcpXG4gICAgICAgICAgICBvcHRpb25zLm1hcmdpbiA9IG5ld09wdGlvbnMubWFyZ2luO1xuICAgICAgICAgICAgb3B0aW9ucy5saW1pdCA9IG5ld09wdGlvbnMubGltaXQ7XG4gICAgICAgICAgICBvcHRpb25zLnBhZGRpbmcgPSBuZXdPcHRpb25zLnBhZGRpbmc7XG4gICAgICAgICAgICAvLyBVcGRhdGUgcGlwcywgcmVtb3ZlcyBleGlzdGluZy5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBpcHMpIHtcbiAgICAgICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgdG9vbHRpcHMsIHJlbW92ZXMgZXhpc3RpbmcuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgIHRvb2x0aXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUb29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSW52YWxpZGF0ZSB0aGUgY3VycmVudCBwb3NpdGlvbmluZyBzbyB2YWx1ZVNldCBmb3JjZXMgYW4gdXBkYXRlLlxuICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zID0gW107XG4gICAgICAgICAgICB2YWx1ZVNldChpc1NldChvcHRpb25zVG9VcGRhdGUuc3RhcnQpID8gb3B0aW9uc1RvVXBkYXRlLnN0YXJ0IDogdiwgZmlyZVNldEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBzdGVwc1xuICAgICAgICBmdW5jdGlvbiBzZXR1cFNsaWRlcigpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBlbGVtZW50LCBpbml0aWFsaXplIEhUTUwgYW5kIHNldCBjbGFzc2VzLlxuICAgICAgICAgICAgLy8gQWRkIGhhbmRsZXMgYW5kIGNvbm5lY3QgZWxlbWVudHMuXG4gICAgICAgICAgICBzY29wZV9CYXNlID0gYWRkU2xpZGVyKHNjb3BlX1RhcmdldCk7XG4gICAgICAgICAgICBhZGRFbGVtZW50cyhvcHRpb25zLmNvbm5lY3QsIHNjb3BlX0Jhc2UpO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHVzZXIgZXZlbnRzLlxuICAgICAgICAgICAgYmluZFNsaWRlckV2ZW50cyhvcHRpb25zLmV2ZW50cyk7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIHB1YmxpYyB2YWx1ZSBtZXRob2QgdG8gc2V0IHRoZSBzdGFydCB2YWx1ZXMuXG4gICAgICAgICAgICB2YWx1ZVNldChvcHRpb25zLnN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBpcHMpIHtcbiAgICAgICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgIHRvb2x0aXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmlhKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0dXBTbGlkZXIoKTtcbiAgICAgICAgdmFyIHNjb3BlX1NlbGYgPSB7XG4gICAgICAgICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgICAgICAgc3RlcHM6IGdldE5leHRTdGVwcyxcbiAgICAgICAgICAgIG9uOiBiaW5kRXZlbnQsXG4gICAgICAgICAgICBvZmY6IHJlbW92ZUV2ZW50LFxuICAgICAgICAgICAgZ2V0OiB2YWx1ZUdldCxcbiAgICAgICAgICAgIHNldDogdmFsdWVTZXQsXG4gICAgICAgICAgICBzZXRIYW5kbGU6IHZhbHVlU2V0SGFuZGxlLFxuICAgICAgICAgICAgcmVzZXQ6IHZhbHVlUmVzZXQsXG4gICAgICAgICAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICAgICAgICBfX21vdmVIYW5kbGVzOiBmdW5jdGlvbiAodXB3YXJkLCBwcm9wb3NhbCwgaGFuZGxlTnVtYmVycykge1xuICAgICAgICAgICAgICAgIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVycyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczogb3JpZ2luYWxPcHRpb25zLFxuICAgICAgICAgICAgdXBkYXRlT3B0aW9uczogdXBkYXRlT3B0aW9ucyxcbiAgICAgICAgICAgIHRhcmdldDogc2NvcGVfVGFyZ2V0LFxuICAgICAgICAgICAgcmVtb3ZlUGlwczogcmVtb3ZlUGlwcyxcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzOiByZW1vdmVUb29sdGlwcyxcbiAgICAgICAgICAgIGdldFBvc2l0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUb29sdGlwczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Ub29sdGlwcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRPcmlnaW5zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGlwczogcGlwcyAvLyBJc3N1ZSAjNTk0XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzY29wZV9TZWxmO1xuICAgIH1cbiAgICAvLyBSdW4gdGhlIHN0YW5kYXJkIGluaXRpYWxpemVyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZSh0YXJnZXQsIG9yaWdpbmFsT3B0aW9ucykge1xuICAgICAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0Lm5vZGVOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBjcmVhdGUgcmVxdWlyZXMgYSBzaW5nbGUgZWxlbWVudCwgZ290OiBcIiArIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgdGhlIHNsaWRlciB3YXMgYWxyZWFkeSBpbml0aWFsaXplZC5cbiAgICAgICAgaWYgKHRhcmdldC5ub1VpU2xpZGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBTbGlkZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRlc3QgdGhlIG9wdGlvbnMgYW5kIGNyZWF0ZSB0aGUgc2xpZGVyIGVudmlyb25tZW50O1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRlc3RPcHRpb25zKG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgICAgIHZhciBhcGkgPSBzY29wZSh0YXJnZXQsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgICAgIHRhcmdldC5ub1VpU2xpZGVyID0gYXBpO1xuICAgICAgICByZXR1cm4gYXBpO1xuICAgIH1cbiAgICB2YXIgbm91aXNsaWRlciA9IHtcbiAgICAgICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICBfX3NwZWN0cnVtOiBTcGVjdHJ1bSxcbiAgICAgICAgLy8gQSByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQgY2xhc3NlcywgYWxsb3dzIGdsb2JhbCBjaGFuZ2VzLlxuICAgICAgICAvLyBVc2UgdGhlIGNzc0NsYXNzZXMgb3B0aW9uIGZvciBjaGFuZ2VzIHRvIG9uZSBzbGlkZXIuXG4gICAgICAgIGNzc0NsYXNzZXM6IGNzc0NsYXNzZXMsXG4gICAgICAgIGNyZWF0ZTogaW5pdGlhbGl6ZVxuICAgIH07XG5cbiAgICBleHBvcnRzLmNyZWF0ZSA9IGluaXRpYWxpemU7XG4gICAgZXhwb3J0cy5jc3NDbGFzc2VzID0gY3NzQ2xhc3NlcztcbiAgICBleHBvcnRzWydkZWZhdWx0J10gPSBub3Vpc2xpZGVyO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpKTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi4vLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3Vpc2xpZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm91aXNsaWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgQXBwIHtcclxuICAkZWw6IEhUTUxFbGVtZW50O1xyXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuJGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkgeyB9XHJcbiAgXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICB0aGlzLiRlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBBdWRpbyB7XHJcbiAgYXVkaW9GbGFnOiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hdWRpb0ZsYWcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcGxheU11c2ljKCkge1xyXG4gICAgY29uc3QgYXVkaW9QbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVlcCcpIGFzIEhUTUxBdWRpb0VsZW1lbnQ7XHJcbiAgICB0aGlzLmF1ZGlvRmxhZyA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChhdWRpb1BsYXllci5wYXVzZWQpIHtcclxuICAgICAgYXVkaW9QbGF5ZXIucGxheSgpO1xyXG4gICAgICB0aGlzLmFkZEFjdGl2ZUJ0bigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXVkaW9QbGF5ZXIucGF1c2UoKTtcclxuICAgICAgdGhpcy5hZGRBY3RpdmVCdG4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEFjdGl2ZUJ0bigpIHtcclxuICAgIGNvbnN0IGF1ZGlvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1ZGlvJyk7XHJcblxyXG4gICAgYXVkaW9CdG4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdhdWRpb19hY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEFwcCB9IGZyb20gJy4uL2FwcC9hcHAnO1xyXG5pbXBvcnQgeyBmYXZvcml0ZSB9IGZyb20gJy4uJztcclxuaW1wb3J0IHsgdG95cyB9IGZyb20gJy4uJztcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZHVsZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgR2FybGFuZCB9IGZyb20gJy4vZ2FybGFuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdWRpbyB9IGZyb20gJy4vYXVkaW8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgZGF0YVBhcmFtZXRycyB9IGZyb20gJy4uL21vZHVsZXMvY29uc3QnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDaHJpc3RtYXNUcmVlIGV4dGVuZHMgQXBwIHtcclxuICBjb3VudDogbnVtYmVyO1xyXG4gIGFsbERhdGFUb3lzOiBEYXRhW107XHJcbiAgbGVhdmVGbGFnOiBib29sZWFuO1xyXG4gIGdhcmxhbmQ6IEdhcmxhbmQ7XHJcbiAgYXVkaW86IEF1ZGlvO1xyXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGlkKTtcclxuICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgdGhpcy5hbGxEYXRhVG95cztcclxuICAgIHRoaXMubGVhdmVGbGFnO1xyXG4gICAgdGhpcy5nYXJsYW5kID0gbmV3IEdhcmxhbmQ7XHJcbiAgICB0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRveXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG95cy1wYWdlJylcclxuICAgIGNvbnN0IHRyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJlZS1wYWdlJyk7XHJcbiAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFyZWEnKTtcclxuICAgIGNvbnN0IHN0YXJ0UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1wYWdlJyk7XHJcbiAgICBjb25zdCBnYXJsYW5kQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaCBpbnB1dCcpO1xyXG5cclxuICAgIGdhcmxhbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmdhcmxhbmRCdG5Pbi5iaW5kKHRoaXMpKTtcclxuICAgIHN0YXJ0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlblN0YXJ0UGFnZS5iaW5kKHRoaXMpKTtcclxuICAgIHRyZWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5DaHJpc3RtYXNUcmVlUGFnZS5iaW5kKHRoaXMpKTtcclxuICAgIHRveXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5Ub3lzUGFnZXMuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucGxheU11c2ljLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZEJhY2tncm91bmQuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkVHJlZS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuc3RhcnREcmFnKTtcclxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLmVuZERyYWcuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2FybGFuZE9uLmJpbmQodGhpcykpO1xyXG4gICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZS5iaW5kKHRoaXMpKTtcclxuICAgIGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVyLmJpbmQodGhpcykpO1xyXG4gICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5kcm9wLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ0xlYXZlKCkge1xyXG4gICAgdGhpcy5sZWF2ZUZsYWcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IERyYWdFdmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGExID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2VsZW1EcmFnMScpO1xyXG4gICAgY29uc3QgZGF0YTIgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnZWxlbURyYWcyJyk7XHJcbiAgICBjb25zdCB0b3lFbGVtZW50MjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG95LW9uLXRyZWVbZGF0YS1hY3RpdmU9XCIke2RhdGEyfVwiXWApOyAgXHJcbiAgICBcclxuICAgIGlmIChkYXRhMikge1xyXG4gICAgICB0b3lFbGVtZW50Mi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgIHRveUVsZW1lbnQyLnN0eWxlLndpZHRoID0gJzMwcHgnO1xyXG4gICAgICB0b3lFbGVtZW50Mi5zdHlsZS5oZWlnaHQgPSAnMzBweCc7XHJcbiAgICAgIChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmFwcGVuZENoaWxkKHRveUVsZW1lbnQyKTtcclxuICAgICAgbW92ZUF0KGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFksIHRveUVsZW1lbnQyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YTEpIHtcclxuICAgICAgY29uc3QgZWxlbUNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaXRlbWNvdW50PVwiJHtkYXRhMX1cIl1gKTtcclxuICAgICAgY29uc3QgZWxlbVRveSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWl0ZW10b3k9XCIke2RhdGExfVwiXWApIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9ICtlbGVtQ291bnQudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICBpZiAoZWxlbUNvdW50LnRleHRDb250ZW50ICE9PSAnMCcpIHtcclxuICAgICAgICBlbGVtQ291bnQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50Q291bnQgLSAxfWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbGVtQ291bnQudGV4dENvbnRlbnQgPT09ICcwJykge1xyXG4gICAgICAgIGVsZW1Ub3kuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdG95RWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdG95RWxlbWVudDEuY2xhc3NMaXN0LmFkZCgndG95LW9uLXRyZWUnKTtcclxuICAgICAgdG95RWxlbWVudDEuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xyXG4gICAgICB0b3lFbGVtZW50MS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgYCR7dGhpcy5jb3VudH1gKTtcclxuICAgICAgdG95RWxlbWVudDEuc2V0QXR0cmlidXRlKCdkYXRhLXRveWNvdW50JywgYCR7ZGF0YTF9YCk7XHJcbiAgICAgIHRveUVsZW1lbnQxLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgdG95RWxlbWVudDEuc3R5bGUud2lkdGggPSAnMzVweCc7XHJcbiAgICAgIHRveUVsZW1lbnQxLnN0eWxlLmhlaWdodCA9ICczNXB4JztcclxuICAgICAgdG95RWxlbWVudDEuc3R5bGUuekluZGV4ID0gJzEwMCc7XHJcbiAgICAgIHRveUVsZW1lbnQxLnN0eWxlLmJhY2tncm91bmQgPSBgdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguL2Fzc2V0cy9pbWFnZXMvdG95cy8ke2RhdGExfS5wbmcpYDtcclxuICAgICAgKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuYXBwZW5kQ2hpbGQodG95RWxlbWVudDEpO1xyXG4gICAgICBtb3ZlQXQoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSwgdG95RWxlbWVudDEpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmVBdChwYWdlWDogbnVtYmVyLCBwYWdlWTogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBwYWdlWCAtIGVsZW1lbnQub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBwYWdlWSAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMiArICdweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmFnT3ZlcihldmVudDogRHJhZ0V2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5sZWF2ZUZsYWcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc3RhcnREcmFnKGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgIGNvbnN0IGRyYWdFbGVtZW50MTogSFRNTEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcudG95LWljb24nKTtcclxuICAgIGNvbnN0IGRyYWdFbGVtZW50MjogSFRNTEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcudG95LW9uLXRyZWUnKTtcclxuXHJcbiAgICBpZiAoZHJhZ0VsZW1lbnQxKSB7XHJcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCdlbGVtRHJhZzEnLCBgJHtkcmFnRWxlbWVudDEuZGF0YXNldC5pdGVtdG95fWApO1xyXG4gICAgICBkcmFnRWxlbWVudDEuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZHJhZ0VsZW1lbnQyKSB7XHJcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCdlbGVtRHJhZzInLCBgJHtkcmFnRWxlbWVudDIuZGF0YXNldC5hY3RpdmV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmREcmFnKGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgIGNvbnN0IGRyYWdFbGVtZW50OiBIVE1MRWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy50b3ktb24tdHJlZScpO1xyXG4gICAgY29uc3QgZGF0YUluZm8gPSBkcmFnRWxlbWVudD8uZGF0YXNldC50b3ljb3VudDtcclxuXHJcbiAgICBpZiAoIXRoaXMubGVhdmVGbGFnKSB7XHJcbiAgICAgIGNvbnN0IHVwSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWl0ZW1jb3VudD1cIiR7ZGF0YUluZm99XCJdYCk7XHJcbiAgICAgIGNvbnN0IGVsZW1Db3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWl0ZW10b3k9XCIke2RhdGFJbmZvfVwiXWApIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcblxyXG4gICAgICBkcmFnRWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgdXBJdGVtLnRleHRDb250ZW50ID0gYCR7K3VwSXRlbS50ZXh0Q29udGVudCArIDF9YDtcclxuICAgICAgZWxlbUNvdW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0QWxsRGF0YVRveXMoKSB7XHJcbiAgICB0aGlzLmFsbERhdGFUb3lzID0gYXdhaXQgdG95cy5nZXREYXRhKCk7XHJcbiAgICByZXR1cm4gdGhpcy5hbGxEYXRhVG95cztcclxuICB9XHJcblxyXG4gIGFzeW5jIGRyYXdDdXJyZW50ZGF0YVRveXMoKSB7XHJcbiAgICBjb25zdCBhbGxEYXRhID0gYXdhaXQgdG95cy5nZXREYXRhKCk7XHJcbiAgICBjb25zdCBhY3RpdmVUb3lzID0gdGhpcy5nZXRBY3RpdmVEYXRhKCk7XHJcblxyXG4gICAgYWxsRGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoYWN0aXZlVG95cy5pbmNsdWRlcyhhbGxEYXRhW2luZGV4XS5udW0pKSB7XHJcbiAgICAgICAgZGF0YVBhcmFtZXRycy5jdXJyZW50RGF0YS5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgYWN0aXZlVG95ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRveS1mb3ItdHJlZScpO1xyXG5cclxuICAgIGlmIChhY3RpdmVUb3kpIHtcclxuICAgICAgYWN0aXZlVG95LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGFQYXJhbWV0cnMuY3VycmVudERhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGRhdGFQYXJhbWV0cnMuYWN0aXZlRGF0YSA9IHRoaXMuYWxsRGF0YVRveXMuc2xpY2UoMCwgMjApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF0YVBhcmFtZXRycy5hY3RpdmVEYXRhID0gZGF0YVBhcmFtZXRycy5jdXJyZW50RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b3lzVHJlZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3lzLXRyZWUtY29udGFpbmVyJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhUGFyYW1ldHJzLmFjdGl2ZURhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdG95ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRveS5jbGFzc0xpc3QuYWRkKCd0b3ktZm9yLXRyZWUnKTtcclxuICAgICAgdG95LnNldEF0dHJpYnV0ZSgnZGF0YS10cmVlVG95JywgYCR7ZGF0YVBhcmFtZXRycy5hY3RpdmVEYXRhW2ldLm5hbWV9YCk7XHJcbiAgICAgIHRveS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRveS1pY29uIGljb24ke2l9XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIGRhdGEtaXRlbVRveT1cIiR7ZGF0YVBhcmFtZXRycy5hY3RpdmVEYXRhW2ldLm51bX1cIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG95LWNvdW50XCIgZGF0YS1pdGVtY291bnQ9XCIke2RhdGFQYXJhbWV0cnMuYWN0aXZlRGF0YVtpXS5udW19XCI+JHtkYXRhUGFyYW1ldHJzLmFjdGl2ZURhdGFbaV0uY291bnR9PC9kaXY+XHJcbiAgICAgIGBcclxuXHJcbiAgICAgIHRveXNUcmVlQ29udGFpbmVyLmFwcGVuZCh0b3kpO1xyXG4gICAgICBjb25zdCBpY29uVG95ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmljb24ke2l9YCkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgIGljb25Ub3kuc3R5bGUuYmFja2dyb3VuZCA9IGB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4vYXNzZXRzL2ltYWdlcy90b3lzLyR7ZGF0YVBhcmFtZXRycy5hY3RpdmVEYXRhW2ldLm51bX0ucG5nKWA7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0QWN0aXZlRGF0YSgpIHtcclxuICAgIGNvbnN0IHRveXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyLWNvbnRlbnQnKTtcclxuICAgIGNvbnN0IGFjdGl2ZVRveXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgdG95cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10b3knKSkge1xyXG4gICAgICAgIGFjdGl2ZVRveXMucHVzaChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zZXQnKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhY3RpdmVUb3lzO1xyXG4gIH1cclxuXHJcbiAgYWRkQmFja2dyb3VuZCgpIHtcclxuICAgIGNvbnN0IGJnQ29udGFpbmVycyA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5jb250ZWluZXItY29udGVudC1iZycpO1xyXG4gICAgY29uc3QgY3VycmVudEJnID0gKGJnQ29udGFpbmVycyBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KT8uZGF0YXNldC5iZztcclxuXHJcbiAgICBpZiAoY3VycmVudEJnKSB7XHJcbiAgICAgIHRoaXMuYWRkQWN0aXZlSXRlbShjdXJyZW50QmcsIGJnQ29udGFpbmVycywgJ2NocmlzdG1hcy1iZy1jdXJyZW50JywgJ2NvbnRlaW5lci1jb250ZW50LWJnJywgJ2NvbnRlaW5lci1jb250ZW50LWJnX19hY3RpdmUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFRyZWUoKSB7XHJcbiAgICBjb25zdCB0cmVlQ29udGFpbmVycyA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5jb250ZWluZXItaXRlbScpO1xyXG4gICAgY29uc3QgY3VycmVudFRyZWUgPSAodHJlZUNvbnRhaW5lcnMgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCk/LmRhdGFzZXQudHJlZTtcclxuXHJcbiAgICBpZiAoY3VycmVudFRyZWUpIHtcclxuICAgICAgdGhpcy5hZGRBY3RpdmVJdGVtKGN1cnJlbnRUcmVlLCB0cmVlQ29udGFpbmVycywgJ2NocmlzdG1hcy10cmVlLWNhcnJlbnQnLCAnY29udGVpbmVyLWl0ZW0nLCAnY29udGVpbmVyLWNvbnRlbnRfX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkQWN0aXZlSXRlbShkYXRhOiBzdHJpbmcsIGNsYXNzTmFtZTogRWxlbWVudCwgY3VycmVudEl0ZW06IHN0cmluZywgYWxsSXRlbXM6IHN0cmluZywgYWN0aXZlSXRlbTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjdXJyZW50RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2N1cnJlbnRJdGVtfWApO1xyXG4gICAgY29uc3QgYWxsRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2FsbEl0ZW1zfWApO1xyXG5cclxuICAgIGFsbEVsZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke2FjdGl2ZUl0ZW19YCk7ICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGFzc05hbWUuY2xhc3NMaXN0LmFkZChgJHthY3RpdmVJdGVtfWApO1xyXG5cclxuICAgIGlmIChjdXJyZW50RWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2NocmlzdG1hcy10cmVlLWNhcnJlbnQnKSkge1xyXG4gICAgICBjdXJyZW50RWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuL2Fzc2V0cy9pbWFnZXMvdHJlZS8ke2RhdGF9LnBuZ2ApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoY3VycmVudEVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaHJpc3RtYXMtYmctY3VycmVudCcpKSB7XHJcbiAgICAgIChjdXJyZW50RWxlbSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kID0gYGNlbnRlciAvIGNvdmVyIHVybCguL2Fzc2V0cy9pbWFnZXMvYmcvJHtkYXRhfS5qcGcpYDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdhcmxhbmRCdG5PbigpIHtcclxuICAgIGNvbnN0IGdhcmxhbmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoIGlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGdhcmxhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FybGFuZCcpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCByZWRHYXJsYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmxhbmQtMicpO1xyXG5cclxuICAgIGlmIChnYXJsYW5kQnRuLmNoZWNrZWQpIHtcclxuICAgICAgZ2FybGFuZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgcmVkR2FybGFuZC5jbGFzc0xpc3QuYWRkKCdnYXJsYW5kLWl0ZW1fX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2FybGFuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLmNsZWFuR2FybGFuZEFjdGl2ZUNsYXNzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwbGF5TXVzaWMoKSB7XHJcbiAgICBjb25zdCBtdXNpY0J0bjogSFRNTEF1ZGlvRWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5hdWRpbycpO1xyXG4gICAgY29uc3QgY3VycmVudEJ0bjogc3RyaW5nID0gbXVzaWNCdG4/LmRhdGFzZXQuYXVkaW87XHJcblxyXG4gICAgaWYgKGN1cnJlbnRCdG4gPT09ICd0cmVlJykge1xyXG4gICAgICB0aGlzLmF1ZGlvLnBsYXlNdXNpYygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2FybGFuZE9uKCkge1xyXG4gICAgY29uc3QgZ2FybGFuZHM6IEhUTUxEaXZFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnLmdhcmxhbmQtY29udGFpbmVyLWl0ZW0nKTtcclxuICAgIGNvbnN0IGdhcmxhbmRJdGVtID0gZ2FybGFuZHM/LmRhdGFzZXQuZ2FybGFuZDtcclxuXHJcbiAgICBpZiAoZ2FybGFuZHMpIHtcclxuICAgICAgdGhpcy5jbGVhbkdhcmxhbmRBY3RpdmVDbGFzcygpO1xyXG4gICAgICBzd2l0Y2ggKGdhcmxhbmRJdGVtKSB7XHJcbiAgICAgICAgY2FzZSAncmVkJzpcclxuICAgICAgICAgIHRoaXMuZ2FybGFuZC5hZGRDb2xvckdhcmxhbmQoJ3JlZF8xJywgJ3JlZF8yJyk7XHJcbiAgICAgICAgICBnYXJsYW5kcy5jbGFzc0xpc3QudG9nZ2xlKCdnYXJsYW5kLWl0ZW1fX2FjdGl2ZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2JsdWUnOlxyXG4gICAgICAgICAgdGhpcy5nYXJsYW5kLmFkZENvbG9yR2FybGFuZCgnYmx1ZV8xJywgJ2JsdWVfMicpO1xyXG4gICAgICAgICAgZ2FybGFuZHMuY2xhc3NMaXN0LnRvZ2dsZSgnZ2FybGFuZC1pdGVtX19hY3RpdmUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd5ZWxsb3cnOlxyXG4gICAgICAgICAgdGhpcy5nYXJsYW5kLmFkZENvbG9yR2FybGFuZCgneWVsbG93XzEnLCAneWVsbG93XzInKTtcclxuICAgICAgICAgIGdhcmxhbmRzLmNsYXNzTGlzdC50b2dnbGUoJ2dhcmxhbmQtaXRlbV9fYWN0aXZlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZ3JlZW4nOlxyXG4gICAgICAgICAgdGhpcy5nYXJsYW5kLmFkZENvbG9yR2FybGFuZCgnZ3JlZW5fMScsICdncmVlbl8yJyk7XHJcbiAgICAgICAgICBnYXJsYW5kcy5jbGFzc0xpc3QudG9nZ2xlKCdnYXJsYW5kLWl0ZW1fX2FjdGl2ZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2FsbCc6XHJcbiAgICAgICAgICB0aGlzLmdhcmxhbmQuYWRkQWxsQ29sb3JHYXJsYW5kKCdncmVlbicsICd5ZWxsb3cnLCAncmVkJywgJ2JsdWUnKTtcclxuICAgICAgICAgIGdhcmxhbmRzLmNsYXNzTGlzdC50b2dnbGUoJ2dhcmxhbmQtaXRlbV9fYWN0aXZlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFuR2FybGFuZEFjdGl2ZUNsYXNzKCkge1xyXG4gICAgY29uc3QgZ2FybGFuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FybGFuZC1jb250YWluZXItaXRlbScpO1xyXG5cclxuICAgIGdhcmxhbmRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ2FybGFuZC1pdGVtX19hY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlblRveXNQYWdlcygpIHtcclxuICAgIHRoaXMuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgb3BlbkNocmlzdG1hc1RyZWVQYWdlKCkge1xyXG4gICAgdGhpcy5zaG93KCk7XHJcbiAgICB0aGlzLmdldEFsbERhdGFUb3lzKCk7XHJcbiAgICB0aGlzLmRyYXdDdXJyZW50ZGF0YVRveXMoKTtcclxuICB9XHJcblxyXG4gIG9wZW5TdGFydFBhZ2UoKSB7XHJcbiAgICB0aGlzLmhpZGUoKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBUb3lzIH0gZnJvbSAnLi90b3lzLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVUb3lzIGV4dGVuZHMgVG95cyB7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBhY3RpdmVUb3lzOiBzdHJpbmdbXTtcclxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihpZCk7XHJcbiAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgIHRoaXMuYWN0aXZlVG95cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHN0YXJ0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG5cclxuICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5idXR0b25IYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZEZhdm9yaXRlVG95cy5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGFkZEZhdm9yaXRlVG95cygpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5jb250YWluZXItY29udGVudCcpO1xyXG4gICAgY29uc3QgY3VycmVudFRhcmdldCA9ICh0YXJnZXQgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCk/LmRhdGFzZXQuc2V0O1xyXG4gICAgaWYgKHRhcmdldCkge1xyXG4gICAgICBpZiAodGhpcy5jb3VudCA9PT0gMjAgJiYgISh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtdG95JykpKSB7XHJcbiAgICAgICAgYWxlcnQoXCLQmNC30LLQuNC90LjRgtC1LCDQstGB0LUg0YHQu9C+0YLRiyDQt9Cw0L/QvtC70L3QtdC90YtcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS10b3knKTtcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRveScpKSB7XHJcbiAgICAgICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRveXMucHVzaCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNldCcpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jb3VudC0tO1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmFjdGl2ZVRveXMuaW5kZXhPZigodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zZXQnKSkpO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVUb3lzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY29uc3QgY291bnRUb3lzOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudC10b3lzJyk7XHJcbiAgICBjb3VudFRveXMudGV4dENvbnRlbnQgPSBgJHt0aGlzLmNvdW50fWA7XHJcbiAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXREYXRhTG9jYWxTdG9yYWdlKCdkYXRhRmF2b3JpdGUnLCBjdXJyZW50VGFyZ2V0KTtcclxuICAgIHRoaXMuc2V0ZmF2b3JpdGVDb3VudFRvTG9jYWxTdG9yYWdlKCdkYXRhQ291bnQnLCB0aGlzLmNvdW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldGZhdm9yaXRlQ291bnRUb0xvY2FsU3RvcmFnZShpbmRleDogc3RyaW5nLCBjb3VudDogbnVtYmVyKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpbmRleCwgSlNPTi5zdHJpbmdpZnkoY291bnQpKTtcclxuICB9XHJcblxyXG4gIGdldEZhdm9yaXRlQ291bnRUb0xhY2FsU3Rhb3JhZ2UoaW5kZXg6IHN0cmluZywgaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgY291bnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmRleCk7XHJcbiAgICBjb25zdCBjdXJyZW50Q291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQtdG95cycpO1xyXG4gICAgY3VycmVudENvdW50LnRleHRDb250ZW50ID0gYCR7Y291bnR9YDtcclxuICAgIHRoaXMuY291bnQgPSArY291bnQ7XHJcbiAgfVxyXG5cclxuICBidXR0b25IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhQ291bnQnKSkge1xyXG4gICAgICB0aGlzLmdldEZhdm9yaXRlQ291bnRUb0xhY2FsU3Rhb3JhZ2UoJ2RhdGFDb3VudCcsICdjb3VudC10b3lzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRDdXJyZW50RmF2b3RpdGVUb3lzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdG95c0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyLWNvbnRlbnQnKTtcclxuICAgIGNvbnN0IGNvdW50VG95czogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQtdG95cycpO1xyXG4gICAgXHJcblxyXG4gICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICB0b3lzQ29udGFpbmVycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZiAodGhpcy5hY3RpdmVUb3lzLmluY2x1ZGVzKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNldCcpKSkge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRveScpO1xyXG4gICAgICAgIHRoaXMuY291bnQrKztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY291bnRUb3lzLnRleHRDb250ZW50ID0gYCR7dGhpcy5jb3VudH1gO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgR2FybGFuZCB7XHJcblxyXG4gIGFkZENvbG9yR2FybGFuZChjbGFzczE6IHN0cmluZywgY2xhc3MyOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGdhcmxhbmRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYXJsYW5kIGNpcmNsZScpO1xyXG5cclxuICAgIGdhcmxhbmRJdGVtcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgaWYgKGluZGV4ICUgMiA9PT0gMSkge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzczF9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzMn1gKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRBbGxDb2xvckdhcmxhbmQoY2xhc3MxOiBzdHJpbmcsIGNsYXNzMjogc3RyaW5nLCBjbGFzczM6IHN0cmluZywgY2xhc3M0OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGdhcmxhbmRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYXJsYW5kIGNpcmNsZScpO1xyXG5cclxuICAgIGdhcmxhbmRJdGVtcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgaWYgKGluZGV4ICUgMiA9PT0gMSkge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzczF9YCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4ICUgMyA9PT0gMSkgIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3MyfWApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleCAlIDQgPT09IDEgJiYgaW5kZXggPiAyKSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzM31gKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3M0fWApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcclxuXHJcbiAgc2V0RGF0YUxvY2FsU3RvcmFnZShpbmRleDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWU6IHN0cmluZ1tdID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmRleCkpO1xyXG4gICAgaWYgKGN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICBpZiAoY3VycmVudFZhbHVlLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFZhbHVlLmluZGV4T2YodmFsdWUpO1xyXG4gICAgICAgIGN1cnJlbnRWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnRWYWx1ZS5wdXNoKHZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaW5kZXgsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRWYWx1ZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaW5kZXgsIEpTT04uc3RyaW5naWZ5KFt2YWx1ZV0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFJhbmdlVG9Mb2NhbFN0b3JhZ2UoaW5kZXg6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZTogc3RyaW5nW10gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZGV4KSk7XHJcbiAgICBjb25zdCBjdXJyZW50UmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke2NsYXNzTmFtZX1gKTtcclxuICAgIGlmIChjdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5nZXRDdXJyZW50Q29weWVzVG9SYW5nZShjdXJyZW50UmFuZ2UsIGluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0Q3VycmVudENvcHllc1RvUmFuZ2UoY3VycmVudFJhbmdlLCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50Q29weWVzVG9SYW5nZShjdXJyZW50UmFuZ2U6IE5vZGVMaXN0T2Y8RWxlbWVudD4sIGluZGV4OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRDb3B5ZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gK2N1cnJlbnRSYW5nZVswXS5hcmlhVmFsdWVOb3c7IGkgPD0gK2N1cnJlbnRSYW5nZVsxXS5hcmlhVmFsdWVOb3c7IGkrKykge1xyXG4gICAgICBjdXJyZW50Q29weWVzLnB1c2goU3RyaW5nKGkpKTtcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGluZGV4LCBKU09OLnN0cmluZ2lmeShjdXJyZW50Q29weWVzKSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhTG9jYWxTdG9yYWdlKGluZGV4OiBzdHJpbmcsIHNldDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZywgYWN0aXZlQ2xhc3M6IHN0cmluZykge1xyXG4gICAgY29uc3QgdmFsdWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtjbGFzc05hbWV9YCk7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5kZXgpO1xyXG4gICAgdmFsdWVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50VmFsdWVzLmluY2x1ZGVzKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLSR7c2V0fWApKSkge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHthY3RpdmVDbGFzc31gKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q2hlY2tlZExvY2FsU3RvcmFnZShpbmRleDogc3RyaW5nLCBzZXQ6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNpemVJdGVtOiBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtjbGFzc05hbWV9YCk7XHJcbiAgICBjb25zdCBjdXJyZW50Q2hlY2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtpbmRleH1gKTtcclxuXHJcbiAgICBzaXplSXRlbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudENoZWNrLmluY2x1ZGVzKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLSR7c2V0fWApKSkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS0ke3NldH1gKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSIsImltcG9ydCB7IHNub3dTZXR0aW5ncyB9IGZyb20gXCIuLi9tb2R1bGVzL2NvbnN0XCI7XHJcbmltcG9ydCB7IHNub3dQcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL21vZHVsZXMvY29uc3RcIjtcclxuXHJcbmNvbnN0IHRveXNQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RveXMtcGFnZScpO1xyXG5jb25zdCBzbm93QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3cnKTtcclxuY29uc3QgY2hyaXN0bWFzQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hyaXN0bWFzLWJnLWN1cnJlbnQnKTtcclxuXHJcbmNvbnN0IHJhbmRvbW1ha2VyID0gKHJhbmdlOiBudW1iZXIpID0+IHtcclxuICBjb25zdCByYW5kOiBudW1iZXIgPSBNYXRoLmZsb29yKHJhbmdlICogTWF0aC5yYW5kb20oKSk7XHJcbiAgcmV0dXJuIHJhbmQ7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRzbm93ID0gKCkgPT4ge1xyXG4gIGlmIChzbm93UHJvcGVydGllcy5pbml0KSB7XHJcbiAgICBzbm93UHJvcGVydGllcy5zbm93RmxhZyA9IHRydWU7XHJcbiAgICBzbm93UHJvcGVydGllcy5pbml0ID0gZmFsc2U7XHJcbiAgICBzbm93UHJvcGVydGllcy5tYXJnaW5Cb3R0b20gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgNTA7XHJcbiAgICBzbm93UHJvcGVydGllcy5tYXJnaW5SaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLSAxNTtcclxuICAgIGxldCBzbm93c2l6ZXJhbmdlID0gc25vd1NldHRpbmdzLnNub3dNYXhTaXplIC0gc25vd1NldHRpbmdzLnNub3dNaW5TaXplO1xyXG5cclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPD0gc25vd1NldHRpbmdzLnNub3dNYXg7IGkrKykge1xyXG4gICAgICBzbm93UHJvcGVydGllcy5jcmRzW2ldID0gMDtcclxuICAgICAgc25vd1Byb3BlcnRpZXMubGVmdFJpZ2h0W2ldID0gTWF0aC5yYW5kb20oKSAqIDE1O1xyXG4gICAgICBzbm93UHJvcGVydGllcy54TXZbaV0gPSAwLjAzICsgTWF0aC5yYW5kb20oKSAvIDEwO1xyXG4gICAgICBzbm93U2V0dGluZ3Muc25vd1tpXSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzJyArIGkpO1xyXG4gICAgICBzbm93U2V0dGluZ3Muc25vd1tpXS5jbGFzc0xpc3QuYWRkKCdzbm93LWl0ZW0nKTtcclxuICAgICAgc25vd1NldHRpbmdzLnNub3dbaV0uc3R5bGUuZm9udEZhbWlseSA9IHNub3dTZXR0aW5ncy5zbm93VHlwZVtyYW5kb21tYWtlcihzbm93U2V0dGluZ3Muc25vd1R5cGUubGVuZ3RoKV07XHJcbiAgICAgIHNub3dTZXR0aW5ncy5zbm93W2ldLnNpemUgPSByYW5kb21tYWtlcihzbm93c2l6ZXJhbmdlKSArIHNub3dTZXR0aW5ncy5zbm93TWluU2l6ZTtcclxuICAgICAgc25vd1NldHRpbmdzLnNub3dbaV0uc3R5bGUuZm9udFNpemUgPSBzbm93U2V0dGluZ3Muc25vd1tpXS5zaXplICsgJ3B4JztcclxuICAgICAgc25vd1NldHRpbmdzLnNub3dbaV0uc3R5bGUuY29sb3IgPSBzbm93U2V0dGluZ3Muc25vd0NvbG9yW3JhbmRvbW1ha2VyKHNub3dTZXR0aW5ncy5zbm93Q29sb3IubGVuZ3RoKV07XHJcbiAgICAgIHNub3dTZXR0aW5ncy5zbm93W2ldLnN0eWxlLnpJbmRleCA9ICcxMDAwJztcclxuICAgICAgc25vd1NldHRpbmdzLnNub3dbaV0uc2luayA9IChzbm93U2V0dGluZ3Muc2lua1NwZWVkICogc25vd1NldHRpbmdzLnNub3dbaV0uc2l6ZSkgLyA1O1xyXG4gICAgICBzbm93U2V0dGluZ3Muc25vd1tpXS5wb3N4ID0gcmFuZG9tbWFrZXIoc25vd1Byb3BlcnRpZXMubWFyZ2luUmlnaHQgLyAyIC0gc25vd1NldHRpbmdzLnNub3dbaV0uc2l6ZSkgKyBzbm93UHJvcGVydGllcy5tYXJnaW5SaWdodCAvIDQ7XHJcbiAgICAgIHNub3dTZXR0aW5ncy5zbm93W2ldLnBvc3kgPSByYW5kb21tYWtlcigyICogc25vd1Byb3BlcnRpZXMubWFyZ2luQm90dG9tIC0gc25vd1Byb3BlcnRpZXMubWFyZ2luQm90dG9tIC0gMiAqIHNub3dTZXR0aW5ncy5zbm93W2ldLnNpemUpO1xyXG4gICAgICBzbm93U2V0dGluZ3Muc25vd1tpXS5zdHlsZS5sZWZ0ID0gc25vd1NldHRpbmdzLnNub3dbaV0ucG9zeCArICdweCc7XHJcbiAgICAgIHNub3dTZXR0aW5ncy5zbm93W2ldLnN0eWxlLnRvcCA9IHNub3dTZXR0aW5ncy5zbm93W2ldLnBvc3kgKyAncHgnO1xyXG4gICAgICBjaHJpc3RtYXNCZy5hcHBlbmQoc25vd1NldHRpbmdzLnNub3dbaV0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3Zlc25vdygpO1xyXG59XHJcblxyXG5jb25zdCBtb3Zlc25vdyA9ICgpID0+IHtcclxuICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDw9IHNub3dTZXR0aW5ncy5zbm93TWF4OyBpKyspIHtcclxuICAgIHNub3dQcm9wZXJ0aWVzLmNyZHNbaV0gKz0gc25vd1Byb3BlcnRpZXMueE12W2ldO1xyXG4gICAgc25vd1NldHRpbmdzLnNub3dbaV0ucG9zeSArPSBzbm93U2V0dGluZ3Muc25vd1tpXS5zaW5rO1xyXG4gICAgc25vd1NldHRpbmdzLnNub3dbaV0uc3R5bGUubGVmdCA9IHNub3dTZXR0aW5ncy5zbm93W2ldLnBvc3ggKyBzbm93UHJvcGVydGllcy5sZWZ0UmlnaHRbaV0gKiBNYXRoLnNpbihzbm93UHJvcGVydGllcy5jcmRzW2ldKSArICdweCc7XHJcbiAgICBzbm93U2V0dGluZ3Muc25vd1tpXS5zdHlsZS50b3AgPSBzbm93U2V0dGluZ3Muc25vd1tpXS5wb3N5ICsgJ3B4JztcclxuICAgIGNvbnN0IGNvbXBhcmVTbm93UG9zWSA9IHNub3dTZXR0aW5ncy5zbm93W2ldLnBvc3kgPj0gc25vd1Byb3BlcnRpZXMubWFyZ2luQm90dG9tIC0gMiAqIHNub3dTZXR0aW5ncy5zbm93W2ldLnNpemU7XHJcbiAgICBjb25zdCBjb21wYXJlU25vd1N0eWxlTGVmdCA9IHBhcnNlSW50KHNub3dTZXR0aW5ncy5zbm93W2ldLnN0eWxlLmxlZnQpID4gc25vd1Byb3BlcnRpZXMubWFyZ2luUmlnaHQgLSAzICogc25vd1Byb3BlcnRpZXMubGVmdFJpZ2h0W2ldO1xyXG5cclxuICAgIGlmIChjb21wYXJlU25vd1Bvc1kgfHwgY29tcGFyZVNub3dTdHlsZUxlZnQpIHtcclxuICAgICAgc25vd1NldHRpbmdzLnNub3dbaV0ucG9zeCA9IHJhbmRvbW1ha2VyKHNub3dQcm9wZXJ0aWVzLm1hcmdpblJpZ2h0IC8gMiAtIHNub3dTZXR0aW5ncy5zbm93W2ldLnNpemUpICsgc25vd1Byb3BlcnRpZXMubWFyZ2luUmlnaHQgLyA0O1xyXG4gICAgICBzbm93U2V0dGluZ3Muc25vd1tpXS5wb3N5ID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgc25vd1Byb3BlcnRpZXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIG1vdmVzbm93KCk7XHJcbiAgfSwgNTApO1xyXG59XHJcblxyXG5mb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDw9IHNub3dTZXR0aW5ncy5zbm93TWF4OyBpKyspIHtcclxuICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICdiZWZvcmVlbmQnLFxyXG4gICAgXCI8c3BhbiBpZD0nc1wiICsgaSArIFwiJyBzdHlsZT0ndXNlci1zZWxlY3Q6bm9uZTtwb3NpdGlvbjpmaXhlZDt0b3A6LVwiICsgc25vd1NldHRpbmdzLnNub3dNYXhTaXplICsgXCInPlwiICsgc25vd1NldHRpbmdzLnNub3dMZXR0ZXIgKyAnPC9zcGFuPidcclxuICApO1xyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gaW5pdHNub3c7XHJcblxyXG5zbm93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IHNub3dJdGVtczogTm9kZUxpc3RPZjxIVE1MVGVtcGxhdGVFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbm93LWl0ZW0nKTtcclxuICBPbk9mZlNub3coc25vd0l0ZW1zKTtcclxufSlcclxuXHJcbmNvbnN0IE9uT2ZmU25vdyA9IChpdGVtczogTm9kZUxpc3RPZjxIVE1MVGVtcGxhdGVFbGVtZW50PikgPT4ge1xyXG4gIGlmIChzbm93UHJvcGVydGllcy5zbm93RmxhZykge1xyXG4gICAgYWRkQ2xlYXJUaW1lb3V0KGl0ZW1zKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc25vd1Byb3BlcnRpZXMuc25vd0ZsYWcgPSB0cnVlO1xyXG4gICAgaW5pdHNub3coKTtcclxuICAgIGl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIChlbGVtZW50IGFzIGFueSkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbnRveXNQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IHNub3dJdGVtczogTm9kZUxpc3RPZjxIVE1MVGVtcGxhdGVFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbm93LWl0ZW0nKTtcclxuICBhZGRDbGVhclRpbWVvdXQoc25vd0l0ZW1zKTtcclxufSlcclxuXHJcbmNvbnN0IGFkZENsZWFyVGltZW91dCA9IChpdGVtczpOb2RlTGlzdE9mPEhUTUxUZW1wbGF0ZUVsZW1lbnQ+KSA9PiB7XHJcbiAgc25vd1Byb3BlcnRpZXMuc25vd0ZsYWcgPSBmYWxzZTtcclxuICBjbGVhclRpbWVvdXQoc25vd1Byb3BlcnRpZXMudGltZXIpO1xyXG4gIGl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tIFwiLi4vbW9kdWxlcy9pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3J0VG95cyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBzb3J0VG9OYW1lKGRhdGE6IERhdGFbXSkge1xyXG4gICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XHJcbiAgfVxyXG5cclxuICBzb3J0VG9OYW1lUmV2ZXJzZShkYXRhOiBEYXRhW10pIHtcclxuICAgIHJldHVybiBkYXRhLnNvcnQoKGEsIGIpID0+IGIubmFtZS5sb2NhbGVDb21wYXJlKGEubmFtZSkpO1xyXG4gIH1cclxuXHJcbiAgc29ydFRvSW5jcmVhc2UoZGF0YTogRGF0YVtdKSB7XHJcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiAoKyhhLnllYXIpIC0gKyhiLnllYXIpKSk7XHJcbiAgfVxyXG5cclxuICBzb3J0VG9JbmNyZWFzZVJldmVyc2UoZGF0YTogRGF0YVtdKSB7XHJcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiAoKyhiLnllYXIpIC0gKyhhLnllYXIpKSk7XHJcbiAgfVxyXG5cclxuICBzb3J0QUxMKGRhdGE6IERhdGFbXSkge1xyXG4gICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4gKCsoYS5udW0pIC0gKyhiLm51bSkpKTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRBY3RpdmVFbGVtZW50cygpIHtcclxuICAgIGNvbnN0IGRhdGFBY3RpdmVJdGVtOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IG1hc3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0taWNvbicpO1xyXG4gICAgY29uc3QgY291bnRDb3B5ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcmFuZ2UgLm5vVWktaGFuZGxlJyk7XHJcbiAgICBjb25zdCB5ZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3JhbmdlLXllYXIgLm5vVWktaGFuZGxlJyk7XHJcbiAgICBjb25zdCBjb2xvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvci1pdGVtJyk7XHJcbiAgICBjb25zdCBzaXplSXRlbTogTm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaXplLWl0ZW0nKTtcclxuICAgIGNvbnN0IGZhdm9yaXRlVG95czogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZS1pdGVtJyk7XHJcblxyXG4gICAgbWFzc0Zvcm0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWljb25fX2FjdGl2ZScpKSB7XHJcbiAgICAgICAgZGF0YUFjdGl2ZUl0ZW0ucHVzaChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1mb3JtJykpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gK2NvdW50Q29weWVzWzBdLmFyaWFWYWx1ZU5vdzsgaSA8PSArY291bnRDb3B5ZXNbMV0uYXJpYVZhbHVlTm93OyBpKyspIHtcclxuICAgICAgZGF0YUFjdGl2ZUl0ZW0ucHVzaChTdHJpbmcoaSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAreWVhclswXS5hcmlhVmFsdWVOb3c7IGkgPD0gK3llYXJbMV0uYXJpYVZhbHVlTm93OyBpKyspIHtcclxuICAgICAgZGF0YUFjdGl2ZUl0ZW0ucHVzaChTdHJpbmcoaSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbG9yQ29udGFpbmVyLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY29sb3ItaXRlbV9fYWN0aXZlJykpIHtcclxuICAgICAgICBkYXRhQWN0aXZlSXRlbS5wdXNoKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJykpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaXplSXRlbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgZGF0YUFjdGl2ZUl0ZW0ucHVzaChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jaGVjaycpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGZhdm9yaXRlVG95cy5jaGVja2VkKSB7XHJcbiAgICAgIGRhdGFBY3RpdmVJdGVtLnB1c2goJ3RydWUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhdGFBY3RpdmVJdGVtLnB1c2goJ3RydWUnKTtcclxuICAgICAgZGF0YUFjdGl2ZUl0ZW0ucHVzaCgnZmFsc2UnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YUFjdGl2ZUl0ZW07XHJcbiAgfVxyXG59IFxyXG4iLCJpbXBvcnQgeyBBcHAgfSBmcm9tICcuLi9hcHAvYXBwJztcclxuaW1wb3J0IHsgQXVkaW8gfSBmcm9tICcuL2F1ZGlvLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhcnRHYW1lIGV4dGVuZHMgQXBwIHtcclxuICBhdWRpb1N0YXJ0OiBBdWRpbztcclxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihpZCk7XHJcbiAgICB0aGlzLmF1ZGlvU3RhcnQgPSBuZXcgQXVkaW87XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgY29uc3Qgc3RhcnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgICBjb25zdCB0b3lzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RveXMtcGFnZScpO1xyXG4gICAgY29uc3Qgc3RhcnRQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LXBhZ2UnKTtcclxuICAgIGNvbnN0IHRyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJlZS1wYWdlJyk7XHJcblxyXG4gICAgdHJlZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkNocmlzdG1hc1RyZWVQYWdlLmJpbmQodGhpcykpO1xyXG4gICAgdG95cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1dHRvbkhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1dHRvbkhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICBzdGFydFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5TdGFydFBhZ2UuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmF1ZGlvU3RhcnQuYXVkaW9GbGFnKVxyXG4gICAgICAgIHRoaXMuYXVkaW9TdGFydC5wbGF5TXVzaWMoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvcGVuU3RhcnRQYWdlKCkge1xyXG4gICAgdGhpcy5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ2hyaXN0bWFzVHJlZVBhZ2UoKSB7XHJcbiAgICB0aGlzLmhpZGUoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBidXR0b25IYW5kbGVyKCkge1xyXG4gIHRoaXMuaGlkZSgpO1xyXG4gIGNvbnN0IHNlYXJjaDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XHJcbiAgc2VhcmNoLmZvY3VzKCk7XHJcbn0iLCJpbXBvcnQgeyBBcHAgfSBmcm9tICcuLi9hcHAvYXBwJztcclxuaW1wb3J0IHsgU29ydFRveXMgfSBmcm9tICcuL3NvcnQtdG95cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICcuL3VpLXNsaWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyByYW5nZVllYXIgfSBmcm9tICcuL3VpLXNsaWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBmYXZvcml0ZSB9IGZyb20gJy4uJztcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZHVsZXMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQXVkaW8gfSBmcm9tICcuL2F1ZGlvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvcnQgfSBmcm9tICcuLi9tb2R1bGVzL2VudW0nO1xyXG5pbXBvcnQgeyBTaGFwZSB9IGZyb20gJy4uL21vZHVsZXMvZW51bSc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi4vbW9kdWxlcy9lbnVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUb3lzIGV4dGVuZHMgQXBwIHtcclxuICBuZXdEYXRhOiBEYXRhW107XHJcbiAgZGF0YVRveXM6IERhdGFbXTtcclxuICBzb3J0VG95czogU29ydFRveXM7XHJcbiAgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2U7XHJcbiAgYXVkaW86IEF1ZGlvO1xyXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGlkKTtcclxuICAgIHRoaXMuZGF0YVRveXM7XHJcbiAgICB0aGlzLm5ld0RhdGE7XHJcbiAgICB0aGlzLnNvcnRUb3lzID0gbmV3IFNvcnRUb3lzKCk7XHJcbiAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2U7XHJcbiAgICB0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgY29uc3Qgc3RhcnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgICBjb25zdCBjaG9vc2VJdGVtOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtaXRlbScpO1xyXG4gICAgY29uc3Qgc2VhcmNoOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuICAgIGNvbnN0IHRyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJlZS1wYWdlJyk7XHJcbiAgICBjb25zdCB0b3lzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RveXMtcGFnZScpO1xyXG4gICAgY29uc3Qgc3RhcnRQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LXBhZ2UnKTtcclxuXHJcbiAgICB0b3lzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuVG95c1BhZ2VzLmJpbmQodGhpcykpO1xyXG4gICAgdHJlZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkNocmlzdG1hc1RyZWVQYWdlLmJpbmQodGhpcykpO1xyXG4gICAgc3RhcnRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuU3RhcnRQYWdlLmJpbmQodGhpcykpO1xyXG4gICAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5hZGRTZWFyY2guYmluZCh0aGlzKSk7XHJcbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYnV0dG9uSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIGNob29zZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZFNvcnRUb3lzLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldFNvcnRUb3lzLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldEZpbHRlckZvcm0uYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkQWN0aXZlQ29sb3IuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYXBwbHlTdWNzc2VzLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFwcGx5UmVzZXRGaWx0ZXJzLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFwcGx5UmVzZXRTZXR0aW5ncy5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRDbGVhblNlYXJjaC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wbGF5TXVzaWMuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXREYXRhKCkge1xyXG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSAoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Cb2dkYW4tVlMvaW1hZ2UtZGF0YS9tYXN0ZXIvZGF0YS5qc29uJyk7XHJcbiAgICBjb25zdCByZXM6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGRhdGE6IERhdGFbXSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICB0aGlzLmRhdGFUb3lzID0gZGF0YTtcclxuICAgIHJldHVybiB0aGlzLmRhdGFUb3lzO1xyXG4gIH1cclxuXHJcbiAgZHJhd1RveXMoZGF0YSA9IHRoaXMuZGF0YVRveXMpIHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbi1jb250YWluZXItd3JhcHBlcicpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xyXG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1jb250ZW50Jyk7XHJcbiAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsIGB0b3ktJHtpfWApO1xyXG4gICAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zZXQnLCBgJHtkYXRhW2ldLm51bX1gKTtcclxuICAgICAgY29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGg0PiR7ZGF0YVtpXS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb24tdG95LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tdG95IHRveSR7aX1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dWwgY2xhc3M9XCJkYXRhLXRveVwiPlxyXG4gICAgICAgICAgPGxpPtCa0L7Qu9C40YfQtdGB0YLQstC+OiAke2RhdGFbaV0uY291bnR9PC9saT5cclxuICAgICAgICAgIDxsaT7Qk9C+0LQg0L/QvtC60YPQv9C60Lg6ICR7ZGF0YVtpXS55ZWFyfTwvbGk+XHJcbiAgICAgICAgICA8bGk+0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDogJHtkYXRhW2ldLnNoYXBlfTwvbGk+XHJcbiAgICAgICAgICA8bGk+0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6ICR7ZGF0YVtpXS5jb2xvcn08L2xpPlxyXG4gICAgICAgICAgPGxpPtCg0LDQt9C80LXRgCDQuNCz0YDRg9GI0LrQuDogJHtkYXRhW2ldLnNpemV9PC9saT5cclxuICAgICAgICAgIDxsaT7Qm9GO0LHQuNC80LDRjzogJHtkYXRhW2ldLmxpa2V9PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICBgXHJcbiAgICAgIGNvbGxlY3Rpb24uYXBwZW5kKGNvbnRlbnQpO1xyXG4gICAgICBjb25zdCBpY29uVG95ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRveSR7aX1gKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xyXG4gICAgICBpY29uVG95LnN0eWxlLmJhY2tncm91bmQgPSBgdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguL2Fzc2V0cy9pbWFnZXMvdG95cy8ke2RhdGFbaV0ubnVtfS5wbmcpYDtcclxuXHJcbiAgICAgIGZhdm9yaXRlLmFkZEN1cnJlbnRGYXZvdGl0ZVRveXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFNvcnRUb3lzKCkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnk6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tY2F0ZWdvcnknKTtcclxuICAgIGNhdGVnb3J5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICB9XHJcblxyXG4gIGdldFNvcnRUb3lzKGV2ZW50OiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5SW5pdCkge1xyXG4gICAgY29uc3QgY3VycmVudENhdGVnb3JpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1jYXRlZ29yaWVzJyk7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNvcnQtaXRlbScpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHN3aXRjaCh0YXJnZXQgJiYgKHRhcmdldC5kYXRhc2V0LnNvcnQpKSB7XHJcbiAgICAgIGNhc2UgU29ydC5hc2NlbmRpbmc6XHJcbiAgICAgICAgY3VycmVudENhdGVnb3JpZXMudGV4dENvbnRlbnQgPSBgJHtTb3J0LmFzY2VuZGluZ31gO1xyXG4gICAgICAgIHRoaXMuYWRkU29ydFRveXMoKTtcclxuICAgICAgICB0aGlzLmFkZFJlc3VsdERhdGEoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTb3J0LmRlc2NlbmRpbmc6XHJcbiAgICAgICAgY3VycmVudENhdGVnb3JpZXMudGV4dENvbnRlbnQgPSBgJHtTb3J0LmRlc2NlbmRpbmd9YDtcclxuICAgICAgICB0aGlzLmFkZFNvcnRUb3lzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRSZXN1bHREYXRhKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU29ydC5hbGw6XHJcbiAgICAgICAgY3VycmVudENhdGVnb3JpZXMudGV4dENvbnRlbnQgPSBgJHtTb3J0LmFsbH1gO1xyXG4gICAgICAgIHRoaXMuYWRkU29ydFRveXMoKTtcclxuICAgICAgICB0aGlzLmFkZFJlc3VsdERhdGEoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTb3J0LmZyb21BWjpcclxuICAgICAgICBjdXJyZW50Q2F0ZWdvcmllcy50ZXh0Q29udGVudCA9ICBgJHtTb3J0LmZyb21BWn1gO1xyXG4gICAgICAgIHRoaXMuYWRkU29ydFRveXMoKTtcclxuICAgICAgICB0aGlzLmFkZFJlc3VsdERhdGEoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTb3J0LmZyb21aQTpcclxuICAgICAgICBjdXJyZW50Q2F0ZWdvcmllcy50ZXh0Q29udGVudCA9IGAke1NvcnQuZnJvbVpBfWA7XHJcbiAgICAgICAgdGhpcy5hZGRTb3J0VG95cygpO1xyXG4gICAgICAgIHRoaXMuYWRkUmVzdWx0RGF0YSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkUmVzdWx0RGF0YSgpIHtcclxuICAgIGNvbnN0IG1hc3NGaWx0ZXI6IHN0cmluZ1tdID0gdGhpcy5zb3J0VG95cy5nZXRDdXJyZW50QWN0aXZlRWxlbWVudHMoKTtcclxuXHJcbiAgICBjb25zdCBzdWNjc2Vzc0ZpbHRlckZvcm0gPSB0aGlzLmRhdGFUb3lzLmZpbHRlcigoZWw6IERhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIG1hc3NGaWx0ZXIuaW5jbHVkZXMoZWwuc2hhcGUpICYmXHJcbiAgICAgICAgbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC5jb3VudCkgJiZcclxuICAgICAgICBtYXNzRmlsdGVyLmluY2x1ZGVzKGVsLnllYXIpICYmXHJcbiAgICAgICAgbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC5jb2xvcikgJiZcclxuICAgICAgICBtYXNzRmlsdGVyLmluY2x1ZGVzKGVsLnNpemUpICYmXHJcbiAgICAgICAgbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC5mYXZvcml0ZSk7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuZ2V0UmVzdWx0KHN1Y2NzZXNzRmlsdGVyRm9ybSk7XHJcbiAgfVxyXG5cclxuICBhcHBseVN1Y3NzZXMoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBmb3JtVGFyZ2V0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnLmZvcm0taWNvbicpO1xyXG4gICAgY29uc3QgY29sb3JUYXJnZXQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuY29sb3ItaXRlbScpO1xyXG4gICAgY29uc3QgY2hlY2tUYXJnZXQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuY2hlY2tlZCcpO1xyXG4gICAgY29uc3QgY3VycmVudENoZWNrID0gKGNoZWNrVGFyZ2V0IGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQpPy5kYXRhc2V0LmNoZWNrO1xyXG5cclxuICAgIGlmIChmb3JtVGFyZ2V0IHx8XHJcbiAgICAgIGNvbG9yVGFyZ2V0IHx8XHJcbiAgICAgIGNoZWNrVGFyZ2V0KSB7XHJcbiAgICAgIGlmIChjdXJyZW50Q2hlY2spIHtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXREYXRhTG9jYWxTdG9yYWdlKCdkYXRhQ2hlY2tlZCcsIGN1cnJlbnRDaGVjayk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hZGRSZXN1bHREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0RmlsdGVyRm9ybShldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5mb3JtLWljb24nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRGb3JtID0gKHRhcmdldCBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KT8uZGF0YXNldC5mb3JtO1xyXG5cclxuICAgIGlmIChjdXJyZW50Rm9ybSkge1xyXG4gICAgICBzd2l0Y2ggKGN1cnJlbnRGb3JtKSB7XHJcbiAgICAgICAgY2FzZSBTaGFwZS5iZWxsOlxyXG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm0taWNvbl9fYWN0aXZlJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNoYXBlLmJhbGw6XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS1pY29uX19hY3RpdmUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU2hhcGUuY29uZTpcclxuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtLWljb25fX2FjdGl2ZScpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTaGFwZS5zbm93Zmxha2U6XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS1pY29uX19hY3RpdmUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU2hhcGUuZmlndXJpbmU6XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS1pY29uX19hY3RpdmUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldERhdGFMb2NhbFN0b3JhZ2UoJ2RhdGFGb3JtJywgY3VycmVudEZvcm0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkQWN0aXZlQ29sb3IoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuY29sb3ItaXRlbScpO1xyXG4gICAgY29uc3QgY3VycmVudENvbG9yID0gKHRhcmdldCBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KT8uZGF0YXNldC5jb2xvcjtcclxuXHJcbiAgICBpZiAoY3VycmVudENvbG9yKSB7XHJcbiAgICAgIHN3aXRjaCAoY3VycmVudENvbG9yKSB7XHJcbiAgICAgICAgY2FzZSBDb2xvci53aGl0ZTpcclxuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjb2xvci1pdGVtX19hY3RpdmUnKTtcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBDb2xvci55ZWxsb3c6XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY29sb3ItaXRlbV9fYWN0aXZlJyk7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgQ29sb3IucmVkOlxyXG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NvbG9yLWl0ZW1fX2FjdGl2ZScpO1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIENvbG9yLmJsdWU6XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY29sb3ItaXRlbV9fYWN0aXZlJyk7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgQ29sb3IuZ3JlZW46XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY29sb3ItaXRlbV9fYWN0aXZlJyk7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldERhdGFMb2NhbFN0b3JhZ2UoJ2RhdGFDb2xvcicsIGN1cnJlbnRDb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSZXN1bHQoYXJnOiBEYXRhW10pIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG5cclxuICAgIGlmIChhcmcubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZV9hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbWVzc2FnZV9hY3RpdmUnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHNvcnREYXRhOiBEYXRhW107XHJcbiAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWNhdGVnb3JpZXMnKTtcclxuXHJcbiAgICBzd2l0Y2ggKGN1cnJlbnRDYXRlZ29yaWVzLnRleHRDb250ZW50KSB7XHJcbiAgICAgIGNhc2UgU29ydC5hc2NlbmRpbmc6XHJcbiAgICAgICAgc29ydERhdGEgPSB0aGlzLnNvcnRUb3lzLnNvcnRUb0luY3JlYXNlKGFyZyk7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBTb3J0LmRlc2NlbmRpbmc6XHJcbiAgICAgICAgc29ydERhdGEgPSB0aGlzLnNvcnRUb3lzLnNvcnRUb0luY3JlYXNlUmV2ZXJzZShhcmcpO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgU29ydC5hbGw6XHJcbiAgICAgICAgc29ydERhdGEgPSB0aGlzLnNvcnRUb3lzLnNvcnRBTEwoYXJnKTtcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIFNvcnQuZnJvbUFaOlxyXG4gICAgICAgIHNvcnREYXRhID0gdGhpcy5zb3J0VG95cy5zb3J0VG9OYW1lKGFyZyk7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBTb3J0LmZyb21aQTpcclxuICAgICAgICBzb3J0RGF0YSA9IHRoaXMuc29ydFRveXMuc29ydFRvTmFtZVJldmVyc2UoYXJnKTtcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlRGF0YSgpO1xyXG4gICAgdGhpcy5kcmF3VG95cyhzb3J0RGF0YSk7XHJcbiAgfVxyXG5cclxuICBhcHBseVJlc2V0RmlsdGVycyhldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJyNyZXNldC1maWx0ZXJzJyk7XHJcbiAgICBjb25zdCBjb2xvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvci1pdGVtJyk7XHJcbiAgICBjb25zdCBtYXNzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWljb24nKTtcclxuICAgIGNvbnN0IHNpemVJdGVtOiBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpemUtaXRlbScpO1xyXG4gICAgY29uc3QgZmF2b3JpdGU6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGUtaXRlbScpO1xyXG5cclxuICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgcmFuZ2Uubm9VaVNsaWRlci5yZXNldCgpO1xyXG4gICAgICByYW5nZVllYXIubm9VaVNsaWRlci5yZXNldCgpO1xyXG5cclxuICAgICAgbWFzc0Zvcm0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taWNvbl9fYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29sb3JDb250YWluZXIuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbG9yLWl0ZW1fX2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNpemVJdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmYXZvcml0ZS5jaGVja2VkID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmFkZFJlc3VsdERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBhcHBseVJlc2V0U2V0dGluZ3MoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCByZXNldFNldHRpbmdzID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnI3Jlc2V0LXNldHRpbmcnKTtcclxuICAgIGlmIChyZXNldFNldHRpbmdzKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkU2VhcmNoKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBsZXQgdmFsdWUgPSBzZWFyY2gudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgbWFzc0ZpbHRlcjogc3RyaW5nW10gPSB0aGlzLnNvcnRUb3lzLmdldEN1cnJlbnRBY3RpdmVFbGVtZW50cygpO1xyXG4gICAgbGV0IG1hc3NSZXF1ZXN0OiBEYXRhW10gPSBbXTtcclxuXHJcbiAgICBjb25zdCBzdWNjc2Vzc0ZpbHRlckZvcm0gPSB0aGlzLmRhdGFUb3lzLmZpbHRlcigoZWw6IERhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIG1hc3NGaWx0ZXIuaW5jbHVkZXMoZWwuc2hhcGUpICYmXHJcbiAgICAgICAgbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC5jb3VudCkgJiZcclxuICAgICAgICBtYXNzRmlsdGVyLmluY2x1ZGVzKGVsLnllYXIpICYmXHJcbiAgICAgICAgbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC5jb2xvcikgJiZcclxuICAgICAgICBtYXNzRmlsdGVyLmluY2x1ZGVzKGVsLnNpemUpICYmXHJcbiAgICAgICAgbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC5mYXZvcml0ZSk7XHJcbiAgICB9KVxyXG5cclxuICAgIGlmICh2YWx1ZSAhPSAnJykge1xyXG4gICAgICBzdWNjc2Vzc0ZpbHRlckZvcm0uZm9yRWFjaCgoZWxlbWVudDogRGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUudG9Mb3dlckNhc2UoKS5zZWFyY2godmFsdWUudG9Mb3dlckNhc2UoKSkgIT0gLTEpIHtcclxuICAgICAgICAgIG1hc3NSZXF1ZXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hc3NSZXF1ZXN0ID0gc3VjY3Nlc3NGaWx0ZXJGb3JtO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0UmVzdWx0KG1hc3NSZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIGFkZENsZWFuU2VhcmNoKGV2ZW50OiBFdmVudCkge1xyXG4gICAgY29uc3QgY2xlYW5TZWFyY2ggPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuY2xlYW4taWNvbicpO1xyXG4gICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGNsZWFuU2VhcmNoKSB7XHJcbiAgICAgIHNlYXJjaC52YWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLmFkZFNlYXJjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRGF0YSgpIHtcclxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lci1jb250ZW50JylcclxuICAgIGNhcmRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBsYXlNdXNpYyhldmVudDogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeUluaXQpIHtcclxuICAgIGNvbnN0IG11c2ljQnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5hdWRpbycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgY3VycmVudEJ0biA9IG11c2ljQnRuPy5kYXRhc2V0LmF1ZGlvO1xyXG5cclxuICAgIGlmIChjdXJyZW50QnRuID09PSAndG95cycpIHtcclxuICAgICAgdGhpcy5hdWRpby5wbGF5TXVzaWMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5DaHJpc3RtYXNUcmVlUGFnZSgpIHtcclxuICAgIHRoaXMuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgb3BlblRveXNQYWdlcygpIHtcclxuICAgIHRoaXMuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgb3BlblN0YXJ0UGFnZSgpIHtcclxuICAgIHRoaXMuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uSGFuZGxlcigpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YUNvbG9yJykpIHtcclxuICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0RGF0YUxvY2FsU3RvcmFnZSgnZGF0YUNvbG9yJywgJ2NvbG9yJywgJy5jb2xvci1pdGVtJywgJ2NvbG9yLWl0ZW1fX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhRm9ybScpKSB7XHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlLmdldERhdGFMb2NhbFN0b3JhZ2UoJ2RhdGFGb3JtJywgJ2Zvcm0nLCAnLmZvcm0taWNvbicsICdmb3JtLWljb25fX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhQ2hlY2tlZCcpKSB7XHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlLmdldENoZWNrZWRMb2NhbFN0b3JhZ2UoJ2RhdGFDaGVja2VkJywgJ2NoZWNrJywgJy5jaGVja2VkJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNob3coKTtcclxuICAgIHRoaXMuYWRkUmVzdWx0RGF0YSgpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhRmF2b3JpdGUnKSkge1xyXG4gICAgICB0aGlzLmxvY2FsU3RvcmFnZS5nZXREYXRhTG9jYWxTdG9yYWdlKCdkYXRhRmF2b3JpdGUnLCAnc2V0JywgJy5jb250YWluZXItY29udGVudCcsICdhY3RpdmUtdG95Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgbm9VaVNsaWRlciBmcm9tICdub1VpU2xpZGVyJztcclxuaW1wb3J0ICdub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3MnO1xyXG5pbXBvcnQgeyB0b3lzIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5pbXBvcnQgeyB0YXJnZXQgfSBmcm9tICdub1VpU2xpZGVyJztcclxuXHJcbmNvbnN0IHJhbmdlTG9jYWxTdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSgpO1xyXG5jb25zdCBTdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG5leHBvcnQgY29uc3QgcmFuZ2U6IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5nZScpO1xyXG5leHBvcnQgY29uc3QgcmFuZ2VZZWFyOiB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZ2UteWVhcicpO1xyXG5cclxubm9VaVNsaWRlci5jcmVhdGUocmFuZ2UsIHtcclxuICBzdGFydDogWzEsIDEyXSxcclxuICBjb25uZWN0OiB0cnVlLFxyXG4gIHJhbmdlOiB7XHJcbiAgICBtaW46IDEsXHJcbiAgICBtYXg6IDEyLFxyXG4gIH0sXHJcbiAgc3RlcDogMSxcclxuICB0b29sdGlwczogdHJ1ZSxcclxuICBmb3JtYXQ6IHtcclxuICAgIHRvOiBmdW5jdGlvbiAodmFsdWU6IG51bWJlcikge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQoU3RyaW5nKHZhbHVlKSk7XHJcbiAgICB9LFxyXG4gICAgZnJvbTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxubm9VaVNsaWRlci5jcmVhdGUocmFuZ2VZZWFyLCB7XHJcbiAgc3RhcnQ6IFsxOTQwLCAyMDIxXSxcclxuICBjb25uZWN0OiB0cnVlLFxyXG4gIHJhbmdlOiB7XHJcbiAgICBtaW46IDE5NDAsXHJcbiAgICBtYXg6IDIwMjEsXHJcbiAgfSxcclxuICBzdGVwOiAxLFxyXG4gIHRvb2x0aXBzOiB0cnVlLFxyXG4gIGZvcm1hdDoge1xyXG4gICAgdG86IGZ1bmN0aW9uICh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChTdHJpbmcodmFsdWUpKTtcclxuICAgIH0sXHJcbiAgICBmcm9tOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5yYW5nZS5ub1VpU2xpZGVyLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgcmFuZ2VMb2NhbFN0b3JhZ2Uuc2V0UmFuZ2VUb0xvY2FsU3RvcmFnZSgnZGF0YVJhbmdlQ291bnQnLCAnI3JhbmdlIC5ub1VpLWhhbmRsZScpO1xyXG4gIHRveXMuYWRkUmVzdWx0RGF0YSgpO1xyXG59KTtcclxuXHJcbnJhbmdlWWVhci5ub1VpU2xpZGVyLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgcmFuZ2VMb2NhbFN0b3JhZ2Uuc2V0UmFuZ2VUb0xvY2FsU3RvcmFnZSgnZGF0YVJhbmdlWWVhcicsICcjcmFuZ2UteWVhciAubm9VaS1oYW5kbGUnKTtcclxuICB0b3lzLmFkZFJlc3VsdERhdGEoKTtcclxufSk7XHJcblxyXG5TdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFSYW5nZUNvdW50JykpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXM6IHN0cmluZ1tdID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YVJhbmdlQ291bnQnKSk7XHJcbiAgICAocmFuZ2UgYXMgYW55KS5ub1VpU2xpZGVyLnNldChbYCR7Y3VycmVudFZhbHVlc1swXX1gLCBgJHtjdXJyZW50VmFsdWVzW2N1cnJlbnRWYWx1ZXMubGVuZ3RoIC0gMV19YF0pO1xyXG4gIH1cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFSYW5nZVllYXInKSkge1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlczogc3RyaW5nW10gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhUmFuZ2VZZWFyJykpO1xyXG4gICAgKHJhbmdlWWVhciBhcyBhbnkpLm5vVWlTbGlkZXIuc2V0KFtgJHtjdXJyZW50VmFsdWVzWzBdfWAsIGAke2N1cnJlbnRWYWx1ZXNbY3VycmVudFZhbHVlcy5sZW5ndGggLSAxXX1gXSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zY3NzJztcclxuaW1wb3J0IHsgU3RhcnRHYW1lIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXJ0LWdhbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG95cyB9IGZyb20gJy4vY29tcG9uZW50cy90b3lzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhdm9yaXRlVG95cyB9IGZyb20gJy4vY29tcG9uZW50cy9mYXZvcml0ZS10b3lzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENocmlzdG1hc1RyZWUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hyaXN0bWFzLXRyZWUuY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc25vdy1jb21wb25lbnQudHMnO1xyXG5pbXBvcnQgeyBBdWRpbyB9IGZyb20gJy4vY29tcG9uZW50cy9hdWRpby5jb21wb25lbnQnO1xyXG5cclxuXHJcbm5ldyBTdGFydEdhbWUoJ3N0YXJ0Jyk7XHJcbmV4cG9ydCBjb25zdCB0b3lzOiBUb3lzID0gbmV3IFRveXMoJ3RveXMnKTtcclxuY29uc3QgY2hyaXN0bWFzVHJlZSA9IG5ldyBDaHJpc3RtYXNUcmVlKCdjaHJpc3RtYXMtdHJlZScpO1xyXG5leHBvcnQgY29uc3QgZmF2b3JpdGUgPSBuZXcgRmF2b3JpdGVUb3lzKCdjb2xsZWN0aW9uJyk7XHJcbmNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IElEYXRhUGFyYW1ldHJzLCBJU25vd1Byb3BlcnRpZXMsIElTbm93U2V0dGluZ3MgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFQYXJhbWV0cnM6IElEYXRhUGFyYW1ldHJzID0ge1xyXG4gIGFjdGl2ZURhdGE6IG51bGwsXHJcbiAgY3VycmVudERhdGE6IFtdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzbm93U2V0dGluZ3M6IElTbm93U2V0dGluZ3MgPSB7XHJcbiAgc25vd01heDogNDAsXHJcbiAgc25vd0NvbG9yOiBuZXcgQXJyYXkoJyNiOWRmZjUnLCAnIzdmYzdmZicsICcjN2ZiMWZmJywgJyM3ZmM3ZmYnLCAnI2I5ZGZmNScpLFxyXG4gIHNub3dUeXBlOiBuZXcgQXJyYXkoJ1RpbWVzJyksXHJcbiAgc25vd0xldHRlcjogJyYjMTAwNTI7JyxcclxuICBzaW5rU3BlZWQ6IDAuNCxcclxuICBzbm93TWF4U2l6ZTogMjAsXHJcbiAgc25vd01pblNpemU6IDUsXHJcbiAgc25vdzogbmV3IEFycmF5KClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNub3dQcm9wZXJ0aWVzOiBJU25vd1Byb3BlcnRpZXMgPSB7XHJcbiAgbWFyZ2luQm90dG9tOiBudWxsLFxyXG4gIG1hcmdpblJpZ2h0OiBudWxsLFxyXG4gIHRpbWVyOiBudWxsLFxyXG4gIHhNdjogbmV3IEFycmF5KCksXHJcbiAgY3JkczogbmV3IEFycmF5KCksXHJcbiAgbGVmdFJpZ2h0OiBuZXcgQXJyYXkoKSxcclxuICBzbm93RmxhZzogZmFsc2UsXHJcbiAgaW5pdDogdHJ1ZVxyXG59IiwiZXhwb3J0IGVudW0gU29ydCB7XHJcbiAgYXNjZW5kaW5nID0gJ9Cf0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjiDQs9C+0LTQsCDQstGL0L/Rg9GB0LrQsCcsXHJcbiAgZGVzY2VuZGluZyA9ICfQn9C+INGD0LHRi9Cy0LDQvdC40Y4g0LPQvtC00LAg0LLRi9C/0YPRgdC60LAnLFxyXG4gIGFsbCA9ICfQktGB0LUg0LjQs9GA0YPRiNC60LgnLFxyXG4gIGZyb21BWiA9ICfQn9C+INC40LzQtdC90Lgg0JAt0K8nLFxyXG4gIGZyb21aQSA9ICfQn9C+INC40LzQtdC90Lgg0K8t0JAnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNoYXBlIHtcclxuICBiZWxsID0gJ9C60L7Qu9C+0LrQvtC70YzRh9C40LonLFxyXG4gIGJhbGwgPSAn0YjQsNGAJyxcclxuICBjb25lID0gJ9GI0LjRiNC60LAnLFxyXG4gIHNub3dmbGFrZSA9ICfRgdC90LXQttC40L3QutCwJyxcclxuICBmaWd1cmluZSA9ICfRhNC40LPRg9GA0LrQsCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29sb3Ige1xyXG4gIHdoaXRlID0gJ9Cx0LXQu9GL0LknLFxyXG4gIHllbGxvdyA9ICfQttC10LvRgtGL0LknLFxyXG4gIHJlZCA9ICfQutGA0LDRgdC90YvQuScsXHJcbiAgYmx1ZSA9ICfRgdC40L3QuNC5JyxcclxuICBncmVlbiA9ICfQt9C10LvRkdC90YvQuSdcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9