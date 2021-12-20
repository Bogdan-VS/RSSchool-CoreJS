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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/bg.jpg */ "./src/assets/images/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/1.png */ "./src/assets/images/1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/2.png */ "./src/assets/images/2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/rs_school_js.png */ "./src/assets/images/rs_school_js.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/audio.svg */ "./src/assets/images/svg/audio.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/snow.svg */ "./src/assets/images/svg/snow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/close.svg */ "./src/assets/images/svg/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/arrow-down.svg */ "./src/assets/images/svg/arrow-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/bell.svg */ "./src/assets/images/svg/bell.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/ball.svg */ "./src/assets/images/svg/ball.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/cone.svg */ "./src/assets/images/svg/cone.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/snowflake.svg */ "./src/assets/images/svg/snowflake.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/svg/toy.svg */ "./src/assets/images/svg/toy.svg"), __webpack_require__.b);
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*Обнуление*/\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\n:focus, :active {\n  outline: none;\n}\n\na:focus, a:active {\n  outline: none;\n}\n\nnav, footer, header, aside {\n  display: block;\n}\n\nhtml, body {\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  font-size: 10px;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\ninput, button, textarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na, a:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: 400;\n}\n\n/*--------------------*/\n@font-face {\n  font-family: \"Neucha-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Steppe\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: normal;\n  font-style: normal;\n}\nmain {\n  position: relative;\n  width: 100vw;\n  height: calc(100vh - 100px);\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.start-game {\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper {\n  width: calc(100% - 100px);\n  height: 100%;\n  margin: 0 auto;\n}\n\n.start-game .toys-circle-left {\n  position: absolute;\n  top: 0;\n  left: 20%;\n  width: 21.771vw;\n  padding-bottom: 39.886%;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n.start-game .toys-circle-right {\n  position: absolute;\n  top: 10%;\n  right: 28%;\n  width: 12.771vw;\n  padding-bottom: 23.334%;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.start-game .title-conteiner h1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: inline-flex;\n  padding: 67px 85px;\n  font-family: \"Neucha-Regular\", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 53px;\n  line-height: 58px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n  letter-spacing: 0.05em;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n}\n.start-game .start {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 320px;\n  height: 54px;\n  top: 70%;\n  left: 50%;\n  font-family: \"Steppe\";\n  font-size: 24px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  transform: translateX(-50%);\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.start-game .start:hover {\n  opacity: 80%;\n}\n\nfooter {\n  width: 100vw;\n  height: 100px;\n  background-color: #192f2d;\n}\n\n.footer-container {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n.footer-container .left-element p {\n  font-family: \"Steppe\";\n  font-size: 18px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  opacity: 70%;\n}\n.footer-container .left-element p span {\n  margin-left: 20px;\n}\n.footer-container .right-element a {\n  display: block;\n  width: 180px;\n  height: 60px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n.hide {\n  display: none;\n}\n\n@media (max-width: 1024px) {\n  .wrapper {\n    width: calc(100% - 40px);\n    height: 100%;\n    margin: 0 auto;\n  }\n}\n.toys {\n  width: 100%;\n  height: 100%;\n}\n\n.toys-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 450px 1fr;\n  grid-template-rows: 1fr;\n  grid-column-gap: 10px;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n}\n\n.filter-conteiner {\n  overflow: hidden;\n}\n\n.filter-container-wrapper {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.filter-container-wrapper::-webkit-scrollbar {\n  width: 6px;\n}\n\n.filter-container-wrapper::-webkit-scrollbar-track {\n  background: none;\n}\n\n.filter-container-wrapper::-webkit-scrollbar-thumb {\n  border-radius: 6px;\n}\n\n.filter-container-content {\n  margin-right: 10px;\n  padding: 10px;\n}\n\n.settings {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin: 20px 0;\n}\n.settings .audio {\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.settings .audio:hover {\n  opacity: 75%;\n}\n.settings .snow {\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n.settings .snow:hover {\n  opacity: 75%;\n}\n.settings .search {\n  position: relative;\n}\n.settings .search .search-item {\n  width: 260px;\n  height: 36px;\n  padding: 0 50px 0 20px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #fff;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n  border: 1px solid #03a9f4;\n}\n.settings .clean-icon {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n}\n.settings .search-icon:hover {\n  opacity: 75%;\n}\n\n.sort {\n  display: flex;\n  -moz-column-gap: 40px;\n       column-gap: 40px;\n  align-items: center;\n}\n.sort p {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.sort .sort-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 270px;\n  height: 36px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n  border: 1px solid #03a9f4;\n  z-index: 5;\n}\n.sort .sort-container p {\n  font-size: 16px;\n  text-transform: none;\n  padding-left: 20px;\n}\n.sort .sort-container .choose-item {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  width: 30px;\n  height: 20px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n}\n.sort .sort-container .choose-item:hover {\n  opacity: 75%;\n}\n.sort .sort-container .all-item {\n  position: absolute;\n  width: 90%;\n  left: 5%;\n  top: 110%;\n  border-radius: 6px;\n  border: 1px solid #2196f3;\n  background-color: #3e5857;\n}\n.sort .sort-container .all-item .sort-item {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #fff;\n  padding: 10px;\n  cursor: pointer;\n}\n.sort .sort-container .all-item .sort-item:hover {\n  background-color: #669396;\n}\n\n.sort-category {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.sort-category .category-container {\n  width: 24px;\n  height: 24px;\n  text-transform: none;\n}\n.sort-category .category-container .all {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.sort-category .category-container .all::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.sort-category .category-container .all:checked::before {\n  opacity: 1;\n}\n\n.toys-form {\n  margin: 20px 0;\n}\n.toys-form h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.toys-form .form-container {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.toys-form .form-container .form-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.toys-form .form-container .form-item .form-icon {\n  margin-bottom: 15px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.toys-form .form-container .form-item .form-icon:hover {\n  opacity: 85%;\n  transform: scale(1.1);\n}\n.toys-form .form-container .form-item .form-icon__active {\n  filter: invert(54%) sepia(107%) saturate(901%) hue-rotate(25deg) brightness(140%) contrast(93%);\n}\n.toys-form .form-container .form-item .icon-1 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n}\n.toys-form .form-container .form-item .icon-2 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n}\n.toys-form .form-container .form-item .icon-3 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n}\n.toys-form .form-container .form-item .icon-4 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n}\n.toys-form .form-container .form-item .icon-5 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n.toys-form .form-container .form-item .icon-6 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n}\n.toys-form .form-container .form-item .icon-name {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  color: #fff;\n}\n\n/*Slider*/\nmain .noUi-target {\n  background: #fafafa;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;\n  border: none;\n  cursor: pointer;\n}\n\nmain .noUi-horizontal {\n  height: 2px;\n}\n\nmain .noUi-handle:before,\n.noUi-handle:after {\n  content: none;\n  display: none !important;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  background: #e8e7e6;\n  left: 14px;\n  top: 6px;\n}\n\nmain .noUi-horizontal .noUi-handle {\n  width: 15px;\n  height: 15px;\n  right: -13px;\n  top: -6px;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), radial-gradient(57.23% 248.2% at 107.17%, at 104.02%, rgba(34, 153, 235, 0.92) 0%, rgba(34, 153, 235, 0.07) 100%), radial-gradient(104.22% 230.94% at -4.22%, at 0%, #24c5db 3.62%, rgba(36, 197, 219, 0.26) 55.1%);\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), radial-gradient(57.23% 248.2% at 107.17% 104.02%, rgba(34, 153, 235, 0.92) 0%, rgba(34, 153, 235, 0.07) 100%), radial-gradient(104.22% 230.94% at -4.22% 0%, #24c5db 3.62%, rgba(36, 197, 219, 0.26) 55.1%);\n  border-radius: 50%;\n  box-shadow: none;\n  border: none;\n  cursor: pointer;\n}\n\nmain .noUi-connect {\n  background: #24c5db;\n}\n\nmain .noUi-base,\n.noUi-connects {\n  width: 97%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\nmain .noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: none;\n  border-radius: none;\n  background: none;\n  color: #fff;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 14px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n}\n\n#range-year .noUi-tooltip {\n  left: 50%;\n}\n\n#range-year {\n  margin-top: 40px;\n}\n\n/*Slider-END*/\n.count-copy {\n  position: relative;\n  margin: 20px 0;\n}\n.count-copy h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.count-copy .count-copy-item {\n  margin-top: 40px;\n}\n.count-copy .min {\n  position: absolute;\n  top: 125%;\n  left: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n.count-copy .max {\n  position: absolute;\n  top: 125%;\n  right: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n\n.year-purchase {\n  position: relative;\n  margin: 40px 0 20px 0;\n}\n.year-purchase h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.year-purchase .year-purchase-item {\n  margin-top: 35px;\n}\n.year-purchase .min {\n  position: absolute;\n  top: 125%;\n  left: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n.year-purchase .max {\n  position: absolute;\n  top: 125%;\n  right: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n\n.color {\n  margin: 40px 0 20px 0;\n}\n.color h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.color .color-container {\n  display: flex;\n  -moz-column-gap: 25px;\n       column-gap: 25px;\n  margin-top: 15px;\n}\n.color .color-container .color-item {\n  width: 25px;\n  height: 25px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.color .color-container .color-item:hover {\n  opacity: 75%;\n}\n.color .color-container .color-item__active {\n  box-shadow: 0px 0px 6px 2px rgba(253, 215, 0, 0.8);\n}\n.color .color-container .item-1 {\n  background: #ffffff;\n}\n.color .color-container .item-2 {\n  background: #fdd700;\n}\n.color .color-container .item-3 {\n  background: #fd0000;\n}\n.color .color-container .item-4 {\n  background: #2299eb;\n}\n.color .color-container .item-5 {\n  background: #08aa05;\n}\n\n.size {\n  margin: 20px 0;\n}\n.size h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.size .size-container {\n  display: flex;\n  margin-top: 15px;\n  justify-content: space-between;\n}\n.size .size-container .container-item {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.size .size-container .size-item {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.size .size-container .size-item::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.size .size-container .size-item:checked::before {\n  opacity: 1;\n}\n\n.favorite {\n  margin: 20px 0;\n}\n.favorite .container-favorite {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.favorite .container-favorite .favorite-item {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.favorite .container-favorite .favorite-item::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.favorite .container-favorite .favorite-item:checked::before {\n  opacity: 1;\n}\n\n.sucsses {\n  display: flex;\n  margin: 25px 0;\n  justify-content: center;\n  -moz-column-gap: 40px;\n       column-gap: 40px;\n}\n.sucsses .apply-btn {\n  width: 180px;\n  height: 30px;\n  background: radial-gradient(118.88% 606.86% at 0%, at 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  -webkit-backdrop-filter: blur(31px);\n          backdrop-filter: blur(31px);\n  border-radius: 30px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.sucsses .apply-btn:hover {\n  opacity: 75%;\n}\n\n.toys-collection-container {\n  overflow: hidden;\n}\n.toys-collection-container .title {\n  display: flex;\n  -moz-column-gap: 50px;\n       column-gap: 50px;\n}\n.toys-collection-container .title h2 {\n  margin: 20px 0 20px 50px;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.toys-collection-container .collection-container {\n  position: relative;\n  height: calc(100% - 48px);\n  overflow: scroll;\n}\n.toys-collection-container .collection-container .message {\n  display: none;\n  width: 270px;\n  border-radius: 6px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .message .message-item {\n  padding: 30px;\n  background: rgba(67, 104, 106, 0.7);\n  color: #fafafa;\n  font-size: 20px;\n}\n.toys-collection-container .collection-container .collection-container-wrapper {\n  display: flex;\n  -moz-column-gap: 25px;\n       column-gap: 25px;\n  row-gap: 25px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-right: 10px;\n}\n.toys-collection-container .collection-container .container-content {\n  width: 225px;\n  padding: 10px;\n  margin: 10px 0 50px 0;\n  background: radial-gradient(109.56% 109.56% at 0%, at -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .container-content h4 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.toys-collection-container .collection-container .container-content .icon-toy-container {\n  margin-top: 15px;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n.toys-collection-container .collection-container .container-content .icon-toy-container .icon-toy {\n  width: 110px;\n  height: 110px;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .container-content .data-toy {\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n.toys-collection-container .collection-container .container-content .data-toy li {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  color: #ffffff;\n}\n.toys-collection-container .collection-container .active-toy {\n  box-sizing: border-box;\n  padding: 5px 5px;\n  border: #4caf50 solid 5px;\n  background: radial-gradient(109.56% 109.56% at 0%, at -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(70, 109, 114, 0.4) 100%);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(70, 109, 114, 0.4) 100%);\n  box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\n}\n.toys-collection-container .collection-container .container-content:hover {\n  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.7);\n  background: radial-gradient(109.56% 109.56% at 0%, at -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(179, 246, 255, 0.4) 100%);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(179, 246, 255, 0.4) 100%);\n}\n.toys-collection-container .collection-container .container-content:hover .icon-toy-container .icon-toy {\n  transform: scale(1.1);\n}\n.toys-collection-container .collection-container .active-toy:hover {\n  box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\n}\n.toys-collection-container .collection-container .message_active {\n  display: block;\n  opacity: 1;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar {\n  width: 12px;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar-track {\n  background: none;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar-thumb {\n  background-color: #43686a;\n  border-radius: 6px;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/_reset.scss","webpack://./src/styles/_fonts.scss","webpack://./src/styles/_start-page.scss","webpack://./src/styles/_toys.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n/*Обнуление*/\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*, *:before, *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:focus, :active {\n  outline: none;\n}\n\na:focus, a:active {\n  outline: none;\n}\n\nnav, footer, header, aside {\n  display: block;\n}\n\nhtml, body {\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  font-size: 10px;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\ninput, button, textarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na, a:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: 400;\n}\n\n/*--------------------*/\n@font-face {\n  font-family: \"Neucha-Regular\";\n  src: url(\"../assets/fonts/Neucha-Regular.ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Steppe\";\n  src: url(\"../assets/fonts/Steppe.ttf\");\n  font-weight: normal;\n  font-style: normal;\n}\nmain {\n  position: relative;\n  width: 100vw;\n  height: calc(100vh - 100px);\n  background: top 0 left 0/100% 100% url(../assets/images/bg.jpg);\n}\n\n.start-game {\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper {\n  width: calc(100% - 100px);\n  height: 100%;\n  margin: 0 auto;\n}\n\n.start-game .toys-circle-left {\n  position: absolute;\n  top: 0;\n  left: 20%;\n  width: 21.771vw;\n  padding-bottom: 39.886%;\n  background: top 0 left 0/100% 100% url(../assets/images/1.png);\n}\n.start-game .toys-circle-right {\n  position: absolute;\n  top: 10%;\n  right: 28%;\n  width: 12.771vw;\n  padding-bottom: 23.334%;\n  background: top 0 left 0/100% 100% url(../assets/images/2.png);\n}\n.start-game .title-conteiner h1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: inline-flex;\n  padding: 67px 85px;\n  font-family: \"Neucha-Regular\", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 53px;\n  line-height: 58px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n  letter-spacing: 0.05em;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n}\n.start-game .start {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 320px;\n  height: 54px;\n  top: 70%;\n  left: 50%;\n  font-family: \"Steppe\";\n  font-size: 24px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  transform: translateX(-50%);\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.start-game .start:hover {\n  opacity: 80%;\n}\n\nfooter {\n  width: 100vw;\n  height: 100px;\n  background-color: #192f2d;\n}\n\n.footer-container {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n.footer-container .left-element p {\n  font-family: \"Steppe\";\n  font-size: 18px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  opacity: 70%;\n}\n.footer-container .left-element p span {\n  margin-left: 20px;\n}\n.footer-container .right-element a {\n  display: block;\n  width: 180px;\n  height: 60px;\n  background: top 0 left 0/100% 100% url(../assets/images/rs_school_js.png);\n}\n\n.hide {\n  display: none;\n}\n\n@media (max-width: 1024px) {\n  .wrapper {\n    width: calc(100% - 40px);\n    height: 100%;\n    margin: 0 auto;\n  }\n}\n.toys {\n  width: 100%;\n  height: 100%;\n}\n\n.toys-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 450px 1fr;\n  grid-template-rows: 1fr;\n  column-gap: 10px;\n}\n\n.filter-conteiner {\n  overflow: hidden;\n}\n\n.filter-container-wrapper {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.filter-container-wrapper::-webkit-scrollbar {\n  width: 6px;\n}\n\n.filter-container-wrapper::-webkit-scrollbar-track {\n  background: none;\n}\n\n.filter-container-wrapper::-webkit-scrollbar-thumb {\n  border-radius: 6px;\n}\n\n.filter-container-content {\n  margin-right: 10px;\n  padding: 10px;\n}\n\n.settings {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin: 20px 0;\n}\n.settings .audio {\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/audio.svg);\n}\n.settings .audio:hover {\n  opacity: 75%;\n}\n.settings .snow {\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/snow.svg);\n}\n.settings .snow:hover {\n  opacity: 75%;\n}\n.settings .search {\n  position: relative;\n}\n.settings .search .search-item {\n  width: 260px;\n  height: 36px;\n  padding: 0 50px 0 20px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #fff;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n  border: 1px solid #03a9f4;\n}\n.settings .clean-icon {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/close.svg);\n}\n.settings .search-icon:hover {\n  opacity: 75%;\n}\n\n.sort {\n  display: flex;\n  column-gap: 40px;\n  align-items: center;\n}\n.sort p {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.sort .sort-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 270px;\n  height: 36px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n  border: 1px solid #03a9f4;\n  z-index: 5;\n}\n.sort .sort-container p {\n  font-size: 16px;\n  text-transform: none;\n  padding-left: 20px;\n}\n.sort .sort-container .choose-item {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  width: 30px;\n  height: 20px;\n  transition: 0.3s;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/arrow-down.svg);\n}\n.sort .sort-container .choose-item:hover {\n  opacity: 75%;\n}\n.sort .sort-container .all-item {\n  position: absolute;\n  width: 90%;\n  left: 5%;\n  top: 110%;\n  border-radius: 6px;\n  border: 1px solid #2196f3;\n  background-color: #3e5857;\n}\n.sort .sort-container .all-item .sort-item {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #fff;\n  padding: 10px;\n  cursor: pointer;\n}\n.sort .sort-container .all-item .sort-item:hover {\n  background-color: #669396;\n}\n\n.sort-category {\n  margin: 20px 0;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.sort-category .category-container {\n  width: 24px;\n  height: 24px;\n  text-transform: none;\n}\n.sort-category .category-container .all {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.sort-category .category-container .all::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.sort-category .category-container .all:checked::before {\n  opacity: 1;\n}\n\n.toys-form {\n  margin: 20px 0;\n}\n.toys-form h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.toys-form .form-container {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.toys-form .form-container .form-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.toys-form .form-container .form-item .form-icon {\n  margin-bottom: 15px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.toys-form .form-container .form-item .form-icon:hover {\n  opacity: 85%;\n  transform: scale(1.1);\n}\n.toys-form .form-container .form-item .form-icon__active {\n  filter: invert(54%) sepia(107%) saturate(901%) hue-rotate(25deg) brightness(140%) contrast(93%);\n}\n.toys-form .form-container .form-item .icon-1 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/bell.svg);\n}\n.toys-form .form-container .form-item .icon-2 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/ball.svg);\n}\n.toys-form .form-container .form-item .icon-3 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/cone.svg);\n}\n.toys-form .form-container .form-item .icon-4 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/snowflake.svg);\n}\n.toys-form .form-container .form-item .icon-5 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% no-repeat url(../assets/images/svg/snow.svg);\n}\n.toys-form .form-container .form-item .icon-6 {\n  width: 100%;\n  height: 42px;\n  background: top 0 left 0/100% 100% url(../assets/images/svg/toy.svg);\n}\n.toys-form .form-container .form-item .icon-name {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  color: #fff;\n}\n\n/*Slider*/\nmain .noUi-target {\n  background: #fafafa;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;\n  border: none;\n  cursor: pointer;\n}\n\nmain .noUi-horizontal {\n  height: 2px;\n}\n\nmain .noUi-handle:before,\n.noUi-handle:after {\n  content: none;\n  display: none !important;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  background: #e8e7e6;\n  left: 14px;\n  top: 6px;\n}\n\nmain .noUi-horizontal .noUi-handle {\n  width: 15px;\n  height: 15px;\n  right: -13px;\n  top: -6px;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), radial-gradient(57.23% 248.2% at 107.17% 104.02%, rgba(34, 153, 235, 0.92) 0%, rgba(34, 153, 235, 0.07) 100%), radial-gradient(104.22% 230.94% at -4.22% 0%, #24c5db 3.62%, rgba(36, 197, 219, 0.26) 55.1%);\n  border-radius: 50%;\n  box-shadow: none;\n  border: none;\n  cursor: pointer;\n}\n\nmain .noUi-connect {\n  background: #24c5db;\n}\n\nmain .noUi-base,\n.noUi-connects {\n  width: 97%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\nmain .noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: none;\n  border-radius: none;\n  background: none;\n  color: #fff;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 14px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n}\n\n#range-year .noUi-tooltip {\n  left: 50%;\n}\n\n#range-year {\n  margin-top: 40px;\n}\n\n/*Slider-END*/\n.count-copy {\n  position: relative;\n  margin: 20px 0;\n}\n.count-copy h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.count-copy .count-copy-item {\n  margin-top: 40px;\n}\n.count-copy .min {\n  position: absolute;\n  top: 125%;\n  left: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n.count-copy .max {\n  position: absolute;\n  top: 125%;\n  right: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n\n.year-purchase {\n  position: relative;\n  margin: 40px 0 20px 0;\n}\n.year-purchase h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.year-purchase .year-purchase-item {\n  margin-top: 35px;\n}\n.year-purchase .min {\n  position: absolute;\n  top: 125%;\n  left: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n.year-purchase .max {\n  position: absolute;\n  top: 125%;\n  right: 0;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n}\n\n.color {\n  margin: 40px 0 20px 0;\n}\n.color h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.color .color-container {\n  display: flex;\n  column-gap: 25px;\n  margin-top: 15px;\n}\n.color .color-container .color-item {\n  width: 25px;\n  height: 25px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.color .color-container .color-item:hover {\n  opacity: 75%;\n}\n.color .color-container .color-item__active {\n  box-shadow: 0px 0px 6px 2px rgba(253, 215, 0, 0.8);\n}\n.color .color-container .item-1 {\n  background: #ffffff;\n}\n.color .color-container .item-2 {\n  background: #fdd700;\n}\n.color .color-container .item-3 {\n  background: #fd0000;\n}\n.color .color-container .item-4 {\n  background: #2299eb;\n}\n.color .color-container .item-5 {\n  background: #08aa05;\n}\n\n.size {\n  margin: 20px 0;\n}\n.size h3 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.size .size-container {\n  display: flex;\n  margin-top: 15px;\n  justify-content: space-between;\n}\n.size .size-container .container-item {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.size .size-container .size-item {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.size .size-container .size-item::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.size .size-container .size-item:checked::before {\n  opacity: 1;\n}\n\n.favorite {\n  margin: 20px 0;\n}\n.favorite .container-favorite {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.favorite .container-favorite .favorite-item {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid #d6d6cd;\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  top: 7px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 5px;\n}\n.favorite .container-favorite .favorite-item::before {\n  content: \"🗸\";\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  opacity: 0;\n  transition: 0.1s ease-in;\n}\n.favorite .container-favorite .favorite-item:checked::before {\n  opacity: 1;\n}\n\n.sucsses {\n  display: flex;\n  margin: 25px 0;\n  justify-content: center;\n  column-gap: 40px;\n}\n.sucsses .apply-btn {\n  width: 180px;\n  height: 30px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  backdrop-filter: blur(31px);\n  border-radius: 30px;\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  color: #ffffff;\n}\n.sucsses .apply-btn:hover {\n  opacity: 75%;\n}\n\n.toys-collection-container {\n  overflow: hidden;\n}\n.toys-collection-container .title {\n  display: flex;\n  column-gap: 50px;\n}\n.toys-collection-container .title h2 {\n  margin: 20px 0 20px 50px;\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n}\n.toys-collection-container .collection-container {\n  position: relative;\n  height: calc(100% - 48px);\n  overflow: scroll;\n}\n.toys-collection-container .collection-container .message {\n  display: none;\n  width: 270px;\n  border-radius: 6px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .message .message-item {\n  padding: 30px;\n  background: rgba(67, 104, 106, 0.7);\n  color: #fafafa;\n  font-size: 20px;\n}\n.toys-collection-container .collection-container .collection-container-wrapper {\n  display: flex;\n  column-gap: 25px;\n  row-gap: 25px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-right: 10px;\n}\n.toys-collection-container .collection-container .container-content {\n  width: 225px;\n  padding: 10px;\n  margin: 10px 0 50px 0;\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n  backdrop-filter: blur(4px);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .container-content h4 {\n  font-family: \"Neucha-Regular\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n  color: #fff;\n}\n.toys-collection-container .collection-container .container-content .icon-toy-container {\n  margin-top: 15px;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n.toys-collection-container .collection-container .container-content .icon-toy-container .icon-toy {\n  width: 110px;\n  height: 110px;\n  transition: 0.5s;\n}\n.toys-collection-container .collection-container .container-content .data-toy {\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n.toys-collection-container .collection-container .container-content .data-toy li {\n  font-family: \"Steppe\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  color: #ffffff;\n}\n.toys-collection-container .collection-container .active-toy {\n  box-sizing: border-box;\n  padding: 5px 5px;\n  border: #4caf50 solid 5px;\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(70, 109, 114, 0.4) 100%);\n  box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\n}\n.toys-collection-container .collection-container .container-content:hover {\n  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.7);\n  background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.4) 0%, rgba(179, 246, 255, 0.4) 100%);\n}\n.toys-collection-container .collection-container .container-content:hover .icon-toy-container .icon-toy {\n  transform: scale(1.1);\n}\n.toys-collection-container .collection-container .active-toy:hover {\n  box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\n}\n.toys-collection-container .collection-container .message_active {\n  display: block;\n  opacity: 1;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar {\n  width: 12px;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar-track {\n  background: none;\n}\n.toys-collection-container .collection-container::-webkit-scrollbar-thumb {\n  background-color: #43686a;\n  border-radius: 6px;\n}","/*Обнуление*/\r\n*{\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n}\r\n*,*:before,*:after{\r\n\t-moz-box-sizing: border-box;\r\n\t-webkit-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,:active{outline: none;}\r\na:focus,a:active{outline: none;}\r\nnav,footer,header,aside{display: block;}\r\nhtml,body{\r\n\t// height: 100%;\r\n\twidth: 100%;\r\n\tfont-size: 100%;\r\n\tline-height: 1;\r\n\tfont-size: 10px;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n}\r\ninput,button,textarea{font-family:inherit;}\r\ninput::-ms-clear{display: none;}\r\nbutton{cursor: pointer;}\r\nbutton::-moz-focus-inner {padding:0;border:0;}\r\na, a:visited{text-decoration: none;}\r\na:hover{text-decoration: none;}\r\nul li{list-style: none;}\r\nimg{vertical-align: top;}\r\nh1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}\r\n/*--------------------*/","@font-face {\r\n  font-family: 'Neucha-Regular';\r\n  src: url('../assets/fonts/Neucha-Regular.ttf');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Steppe';\r\n  src: url('../assets/fonts/Steppe.ttf');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n","main {\r\n  position: relative;\r\n  width: 100vw;\r\n  height: calc(100vh - 100px);\r\n  background: top 0 left 0 / 100% 100% url(../assets/images/bg.jpg);\r\n}\r\n\r\n.start-game {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n// .main-container {\r\n//   background: #192f2d;\r\n// }\r\n\r\n.wrapper {\r\n  width: calc(100% - 100px);\r\n  height: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.start-game {\r\n  .toys-circle-left {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 20%;\r\n    width: 21.771vw;\r\n    padding-bottom: 39.886%;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/1.png);\r\n  }\r\n\r\n  .toys-circle-right {\r\n    position: absolute;\r\n    top: 10%;\r\n    right: 28%;\r\n    width: 12.771vw;\r\n    padding-bottom: 23.334%;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/2.png);\r\n  }\r\n\r\n  .title-conteiner {\r\n    h1 {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      display: inline-flex;\r\n      padding: 67px 85px;\r\n      font-family: 'Neucha-Regular', sans-serif;\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 53px;\r\n      line-height: 58px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      color: #fff;\r\n      letter-spacing: 0.05em;\r\n      background: radial-gradient(\r\n        118.88% 606.86% at 0% 0%,\r\n        rgba(36, 197, 219, 0.15) 0%,\r\n        rgba(36, 197, 219, 0) 100%\r\n      );\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 30px;\r\n    }\r\n  }\r\n\r\n  .start {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 320px;\r\n    height: 54px;\r\n    top: 70%;\r\n    left: 50%;\r\n    font-family: 'Steppe';\r\n    font-size: 24px;\r\n    color: #fff;\r\n    letter-spacing: 0.05em;\r\n    transform: translateX(-50%);\r\n    background: radial-gradient(\r\n      118.88% 606.86% at 0% 0%,\r\n      rgba(36, 197, 219, 0.15) 0%,\r\n      rgba(36, 197, 219, 0) 100%\r\n    );\r\n    backdrop-filter: blur(31px);\r\n    border-radius: 30px;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .start:hover {\r\n    opacity: 80%;\r\n  }\r\n}\r\n\r\nfooter {\r\n  width: 100vw;\r\n  height: 100px;\r\n  background-color: #192f2d;\r\n}\r\n\r\n.footer-container {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  .left-element {\r\n    p {\r\n      font-family: 'Steppe';\r\n      font-size: 18px;\r\n      color: #fff;\r\n      letter-spacing: 0.05em;\r\n      opacity: 70%;\r\n      span {\r\n        margin-left: 20px;\r\n      }\r\n    }\r\n  }\r\n  .right-element {\r\n    a {\r\n      display: block;\r\n      width: 180px;\r\n      height: 60px;\r\n      background: top 0 left 0 / 100% 100%\r\n        url(../assets/images/rs_school_js.png);\r\n    }\r\n  }\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .wrapper {\r\n    width: calc(100% - 40px);\r\n    height: 100%;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n",".toys {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.toys-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: 450px 1fr;\r\n  grid-template-rows: 1fr;\r\n  column-gap: 10px;\r\n}\r\n\r\n.filter-conteiner {\r\n  overflow: hidden;\r\n}\r\n\r\n.filter-container-wrapper {\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.filter-container-wrapper::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.filter-container-wrapper::-webkit-scrollbar-track {\r\n  background: none;\r\n}\r\n\r\n.filter-container-wrapper::-webkit-scrollbar-thumb {\r\n  border-radius: 6px;\r\n}\r\n\r\n.filter-container-content {\r\n  margin-right: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.settings {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  margin: 20px 0;\r\n  .audio {\r\n    width: 36px;\r\n    height: 36px;\r\n    transition: 00.3s;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/svg/audio.svg);\r\n  }\r\n  .audio:hover {\r\n    opacity: 75%;\r\n  }\r\n\r\n  .snow {\r\n    width: 36px;\r\n    height: 36px;\r\n    transition: 00.3s;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/svg/snow.svg);\r\n  }\r\n  .snow:hover {\r\n    opacity: 75%;\r\n  }\r\n\r\n  .search {\r\n    position: relative;\r\n    .search-item {\r\n      width: 260px;\r\n      height: 36px;\r\n      padding: 0 50px 0 20px;\r\n      font-family: 'Steppe';\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 14px;\r\n      letter-spacing: 0.05em;\r\n      color: #fff;\r\n      background: radial-gradient(\r\n        118.88% 606.86% at 0% 0%,\r\n        rgba(36, 197, 219, 0.15) 0%,\r\n        rgba(36, 197, 219, 0) 100%\r\n      );\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 30px;\r\n      border: 1px solid #03a9f4;\r\n    }\r\n  }\r\n  .clean-icon {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 15px;\r\n    transform: translateY(-50%);\r\n    width: 15px;\r\n    height: 15px;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    background: top 0 left 0 / 100% 100% url(../assets/images/svg/close.svg);\r\n  }\r\n  .search-icon:hover {\r\n    opacity: 75%;\r\n  }\r\n}\r\n\r\n.sort {\r\n  display: flex;\r\n  column-gap: 40px;\r\n  align-items: center;\r\n  p {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n  }\r\n\r\n  .sort-container {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    width: 270px;\r\n    height: 36px;\r\n    background: radial-gradient(\r\n      118.88% 606.86% at 0% 0%,\r\n      rgba(255, 255, 255, 0.2) 0%,\r\n      rgba(157, 243, 255, 0.2) 100%\r\n    );\r\n    backdrop-filter: blur(31px);\r\n    border-radius: 30px;\r\n    border: 1px solid #03a9f4;\r\n    z-index: 5;\r\n    p {\r\n      font-size: 16px;\r\n      text-transform: none;\r\n      padding-left: 20px;\r\n    }\r\n\r\n    .choose-item {\r\n      position: absolute;\r\n      top: 50%;\r\n      right: 15px;\r\n      transform: translateY(-50%);\r\n      width: 30px;\r\n      height: 20px;\r\n      transition: 00.3s;\r\n      background: top 0 left 0 / 100% 100%\r\n        url(../assets/images/svg/arrow-down.svg);\r\n    }\r\n    .choose-item:hover {\r\n      opacity: 75%;\r\n    }\r\n\r\n    .all-item {\r\n      position: absolute;\r\n      width: 90%;\r\n      left: 5%;\r\n      top: 110%;\r\n      border-radius: 6px;\r\n      border: 1px solid #2196f3;\r\n      background-color: #3e5857;\r\n      .sort-item {\r\n        font-family: 'Neucha-Regular';\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        font-size: 14px;\r\n        letter-spacing: 0.05em;\r\n        color: #fff;\r\n        padding: 10px;\r\n        cursor: pointer;\r\n      }\r\n\r\n      .sort-item:hover {\r\n        background-color: #669396;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.sort-category {\r\n  margin: 20px 0;\r\n  font-family: 'Neucha-Regular';\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 18px;\r\n  letter-spacing: 0.05em;\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n  .category-container {\r\n    width: 24px;\r\n    height: 24px;\r\n    text-transform: none;\r\n    .all {\r\n      -webkit-appearance: none;\r\n      -moz-appearance: none;\r\n      appearance: none;\r\n      border: 1px solid #d6d6cd;\r\n      width: 25px;\r\n      height: 25px;\r\n      margin-right: 15px;\r\n      cursor: pointer;\r\n      position: relative;\r\n      top: 7px;\r\n      background: radial-gradient(\r\n        118.88% 606.86% at 0% 0%,\r\n        rgba(255, 255, 255, 0.2) 0%,\r\n        rgba(157, 243, 255, 0.2) 100%\r\n      );\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 5px;\r\n    }\r\n    .all::before {\r\n      content: '🗸';\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n      position: absolute;\r\n      right: 50%;\r\n      bottom: 50%;\r\n      transform: translate(50%, 50%);\r\n      opacity: 0;\r\n      transition: 0.1s ease-in;\r\n    }\r\n    .all:checked::before {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n.toys-form {\r\n  margin: 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n\r\n  .form-container {\r\n    margin-top: 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    .form-item {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      .form-icon {\r\n        margin-bottom: 15px;\r\n        transition: 0.3s;\r\n        cursor: pointer;\r\n      }\r\n      .form-icon:hover {\r\n        opacity: 85%;\r\n        transform: scale(1.1);\r\n      }\r\n      .form-icon__active {\r\n        filter: invert(54%) sepia(107%) saturate(901%) hue-rotate(25deg)\r\n          brightness(140%) contrast(93%);\r\n      }\r\n\r\n      .icon-1 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/bell.svg);\r\n      }\r\n      .icon-2 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/ball.svg);\r\n      }\r\n      .icon-3 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/cone.svg);\r\n      }\r\n      .icon-4 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100%\r\n          url(../assets/images/svg/snowflake.svg);\r\n      }\r\n      .icon-5 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% no-repeat\r\n          url(../assets/images/svg/snow.svg);\r\n      }\r\n      .icon-6 {\r\n        width: 100%;\r\n        height: 42px;\r\n        background: top 0 left 0 / 100% 100% url(../assets/images/svg/toy.svg);\r\n      }\r\n\r\n      .icon-name {\r\n        font-family: 'Steppe';\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        font-size: 12px;\r\n        line-height: 14px;\r\n        text-align: center;\r\n        color: #fff;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/*Slider*/\r\n\r\nmain .noUi-target {\r\n  background: #fafafa;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nmain .noUi-horizontal {\r\n  height: 2px;\r\n}\r\n\r\nmain .noUi-handle:before,\r\n.noUi-handle:after {\r\n  content: none;\r\n  display: none !important;\r\n  position: absolute;\r\n  height: 0px;\r\n  width: 0px;\r\n  background: #e8e7e6;\r\n  left: 14px;\r\n  top: 6px;\r\n}\r\n\r\nmain .noUi-horizontal .noUi-handle {\r\n  width: 15px;\r\n  height: 15px;\r\n  right: -13px;\r\n  top: -6px;\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),\r\n    radial-gradient(\r\n      57.23% 248.2% at 107.17% 104.02%,\r\n      rgba(34, 153, 235, 0.92) 0%,\r\n      rgba(34, 153, 235, 0.07) 100%\r\n    ),\r\n    radial-gradient(\r\n      104.22% 230.94% at -4.22% 0%,\r\n      #24c5db 3.62%,\r\n      rgba(36, 197, 219, 0.26) 55.1%\r\n    );\r\n  border-radius: 50%;\r\n  box-shadow: none;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nmain .noUi-connect {\r\n  background: #24c5db;\r\n}\r\n\r\nmain .noUi-base,\r\n.noUi-connects {\r\n  width: 97%;\r\n  height: 100%;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\nmain .noUi-tooltip {\r\n  display: block;\r\n  position: absolute;\r\n  border: none;\r\n  border-radius: none;\r\n  background: none;\r\n  color: #fff;\r\n  padding: 5px;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  font-size: 14px;\r\n  font-family: 'Steppe';\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n#range-year .noUi-tooltip {\r\n  left: 50%;\r\n}\r\n\r\n#range-year {\r\n  margin-top: 40px;\r\n}\r\n\r\n/*Slider-END*/\r\n\r\n.count-copy {\r\n  position: relative;\r\n  margin: 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n  .count-copy-item {\r\n    margin-top: 40px;\r\n  }\r\n\r\n  .min {\r\n    position: absolute;\r\n    top: 125%;\r\n    left: 0;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.05em;\r\n    color: #ffffff;\r\n  }\r\n  .max {\r\n    position: absolute;\r\n    top: 125%;\r\n    right: 0;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.05em;\r\n    color: #ffffff;\r\n  }\r\n}\r\n\r\n.year-purchase {\r\n  position: relative;\r\n  margin: 40px 0 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n  .year-purchase-item {\r\n    margin-top: 35px;\r\n  }\r\n\r\n  .min {\r\n    position: absolute;\r\n    top: 125%;\r\n    left: 0;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.05em;\r\n    color: #ffffff;\r\n  }\r\n  .max {\r\n    position: absolute;\r\n    top: 125%;\r\n    right: 0;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.05em;\r\n    color: #ffffff;\r\n  }\r\n}\r\n\r\n.color {\r\n  margin: 40px 0 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n\r\n  .color-container {\r\n    display: flex;\r\n    column-gap: 25px;\r\n    margin-top: 15px;\r\n    .color-item {\r\n      width: 25px;\r\n      height: 25px;\r\n      border-radius: 5px;\r\n      cursor: pointer;\r\n      transition: 0.3s;\r\n    }\r\n    .color-item:hover {\r\n      opacity: 75%;\r\n    }\r\n\r\n    .color-item__active {\r\n      box-shadow: 0px 0px 6px 2px rgba(253, 215, 0, 0.8);\r\n    }\r\n    .item-1 {\r\n      background: #ffffff;\r\n    }\r\n    .item-2 {\r\n      background: #fdd700;\r\n    }\r\n    .item-3 {\r\n      background: #fd0000;\r\n    }\r\n    .item-4 {\r\n      background: #2299eb;\r\n    }\r\n    .item-5 {\r\n      background: #08aa05;\r\n    }\r\n  }\r\n}\r\n\r\n.size {\r\n  margin: 20px 0;\r\n  h3 {\r\n    font-family: 'Neucha-Regular';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0.05em;\r\n    color: #fff;\r\n  }\r\n\r\n  .size-container {\r\n    display: flex;\r\n    margin-top: 15px;\r\n    justify-content: space-between;\r\n    .container-item {\r\n      font-family: 'Steppe';\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 14px;\r\n      letter-spacing: 0.02em;\r\n      text-align: center;\r\n      color: #ffffff;\r\n    }\r\n\r\n    .size-item {\r\n      -webkit-appearance: none;\r\n      -moz-appearance: none;\r\n      appearance: none;\r\n      border: 1px solid #d6d6cd;\r\n      width: 25px;\r\n      height: 25px;\r\n      margin-right: 15px;\r\n      cursor: pointer;\r\n      position: relative;\r\n      top: 7px;\r\n      background: radial-gradient(\r\n        118.88% 606.86% at 0% 0%,\r\n        rgba(255, 255, 255, 0.2) 0%,\r\n        rgba(157, 243, 255, 0.2) 100%\r\n      );\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 5px;\r\n    }\r\n    .size-item::before {\r\n      content: '🗸';\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n      position: absolute;\r\n      right: 50%;\r\n      bottom: 50%;\r\n      transform: translate(50%, 50%);\r\n      opacity: 0;\r\n      transition: 0.1s ease-in;\r\n    }\r\n    .size-item:checked::before {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n.favorite {\r\n  margin: 20px 0;\r\n  .container-favorite {\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    letter-spacing: 0.02em;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    .favorite-item {\r\n      -webkit-appearance: none;\r\n      -moz-appearance: none;\r\n      appearance: none;\r\n      border: 1px solid #d6d6cd;\r\n      width: 25px;\r\n      height: 25px;\r\n      margin-right: 15px;\r\n      cursor: pointer;\r\n      position: relative;\r\n      top: 7px;\r\n      background: radial-gradient(\r\n        118.88% 606.86% at 0% 0%,\r\n        rgba(255, 255, 255, 0.2) 0%,\r\n        rgba(157, 243, 255, 0.2) 100%\r\n      );\r\n      backdrop-filter: blur(31px);\r\n      border-radius: 5px;\r\n    }\r\n    .favorite-item::before {\r\n      content: '🗸';\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n      position: absolute;\r\n      right: 50%;\r\n      bottom: 50%;\r\n      transform: translate(50%, 50%);\r\n      opacity: 0;\r\n      transition: 0.1s ease-in;\r\n    }\r\n    .favorite-item:checked::before {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n.sucsses {\r\n  display: flex;\r\n  margin: 25px 0;\r\n  justify-content: center;\r\n  column-gap: 40px;\r\n  .apply-btn {\r\n    width: 180px;\r\n    height: 30px;\r\n    background: radial-gradient(\r\n      118.88% 606.86% at 0% 0%,\r\n      rgba(255, 255, 255, 0.2) 0%,\r\n      rgba(157, 243, 255, 0.2) 100%\r\n    );\r\n    backdrop-filter: blur(31px);\r\n    border-radius: 30px;\r\n    font-family: 'Steppe';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 12px;\r\n    letter-spacing: 0.02em;\r\n    text-align: center;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .apply-btn:hover {\r\n    opacity: 75%;\r\n  }\r\n}\r\n\r\n.toys-collection-container {\r\n  overflow: hidden;\r\n  .title {\r\n    display: flex;\r\n    column-gap: 50px;\r\n    h2 {\r\n      margin: 20px 0 20px 50px;\r\n      font-family: 'Neucha-Regular';\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 25px;\r\n      letter-spacing: 0.05em;\r\n      text-transform: uppercase;\r\n      color: #fff;\r\n    }\r\n  }\r\n  .collection-container {\r\n    position: relative;\r\n    height: calc(100% - 48px);\r\n    overflow: scroll;\r\n\r\n    .message {\r\n      display: none;\r\n      width: 270px;\r\n      border-radius: 6px;\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      transform: translate(-50%, -50%);\r\n      opacity: 0;\r\n      transition: 0.5s;\r\n      .message-item {\r\n        padding: 30px;\r\n        background: rgba(67, 104, 106, 0.7);\r\n        color: #fafafa;\r\n        font-size: 20px;\r\n      }\r\n    }\r\n    .collection-container-wrapper {\r\n      display: flex;\r\n      column-gap: 25px;\r\n      row-gap: 25px;\r\n      flex-wrap: wrap;\r\n      justify-content: center;\r\n      margin-right: 10px;\r\n    }\r\n    .container-content {\r\n      width: 225px;\r\n      padding: 10px;\r\n      margin: 10px 0 50px 0;\r\n      background: radial-gradient(\r\n        109.56% 109.56% at 0% -2.94%,\r\n        rgba(255, 255, 255, 0.5) 0%,\r\n        rgba(179, 246, 255, 0.5) 100%\r\n      );\r\n      backdrop-filter: blur(4px);\r\n      border-radius: 10px;\r\n      cursor: pointer;\r\n      transition: 0.5s;\r\n      h4 {\r\n        font-family: 'Neucha-Regular';\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        font-size: 16px;\r\n        letter-spacing: 0.05em;\r\n        color: #fff;\r\n      }\r\n      .icon-toy-container {\r\n        margin-top: 15px;\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: center;\r\n        .icon-toy {\r\n          width: 110px;\r\n          height: 110px;\r\n          transition: 0.5s;\r\n        }\r\n      }\r\n      .data-toy {\r\n        margin-top: 15px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        row-gap: 10px;\r\n        li {\r\n          font-family: 'Steppe';\r\n          font-style: normal;\r\n          font-weight: normal;\r\n          font-size: 14px;\r\n          letter-spacing: 0.02em;\r\n          color: #ffffff;\r\n        }\r\n      }\r\n    }\r\n\r\n    .active-toy {\r\n      box-sizing: border-box;\r\n      padding: 5px 5px;\r\n      border: #4caf50 solid 5px;\r\n      background: radial-gradient(\r\n        109.56% 109.56% at 0% -2.94%,\r\n        rgba(255, 255, 255, 0.4) 0%,\r\n        rgba(70, 109, 114, 0.4) 100%\r\n      );\r\n      box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\r\n    }\r\n\r\n    .container-content:hover {\r\n      box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.7);\r\n      background: radial-gradient(\r\n        109.56% 109.56% at 0% -2.94%,\r\n        rgba(255, 255, 255, 0.4) 0%,\r\n        rgba(179, 246, 255, 0.4) 100%\r\n      );\r\n      .icon-toy-container {\r\n        .icon-toy {\r\n          transform: scale(1.1);\r\n        }\r\n      }\r\n    }\r\n    .active-toy:hover {\r\n      box-shadow: 0px 0px 10px 3px rgba(76, 175, 80, 0.75);\r\n    }\r\n\r\n    .message_active {\r\n      display: block;\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  .collection-container::-webkit-scrollbar {\r\n    width: 12px;\r\n  }\r\n\r\n  .collection-container::-webkit-scrollbar-track {\r\n    background: none;\r\n  }\r\n\r\n  .collection-container::-webkit-scrollbar-thumb {\r\n    background-color: #43686a;\r\n    border-radius: 6px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
    applySucsses() {
        const toysContainers = document.querySelectorAll('.container-content');
        console.log(toysContainers);
        toysContainers.forEach(element => {
            if (this.activeToys.includes(element.getAttribute('data-set'))) {
                element.classList.toggle('active-toy');
            }
        });
    }
}
exports.FavoriteToys = FavoriteToys;


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
                    element.checked = 'checked';
                }
                else {
                    element.checked = '';
                }
            }
        });
    }
}
exports.LocalStorage = LocalStorage;


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
        start.addEventListener('click', buttonHandler.bind(this));
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
            content.setAttribute('data-set', `${data[i].name}`);
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
exports.toys = void 0;
__webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
const start_game_component_1 = __webpack_require__(/*! ./components/start-game.component */ "./src/components/start-game.component.ts");
const toys_component_1 = __webpack_require__(/*! ./components/toys.component */ "./src/components/toys.component.ts");
const favorite_toys_component_1 = __webpack_require__(/*! ./components/favorite-toys.component */ "./src/components/favorite-toys.component.ts");
new start_game_component_1.StartGame('start');
new favorite_toys_component_1.FavoriteToys('collection');
exports.toys = new toys_component_1.Toys('toys');


/***/ }),

/***/ "./src/assets/fonts/Neucha-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Neucha-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Neucha-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/Steppe.ttf":
/*!*************************************!*\
  !*** ./src/assets/fonts/Steppe.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Steppe.ttf";

/***/ }),

/***/ "./src/assets/images/1.png":
/*!*********************************!*\
  !*** ./src/assets/images/1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/1.png";

/***/ }),

/***/ "./src/assets/images/2.png":
/*!*********************************!*\
  !*** ./src/assets/images/2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/2.png";

/***/ }),

/***/ "./src/assets/images/bg.jpg":
/*!**********************************!*\
  !*** ./src/assets/images/bg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/bg.jpg";

/***/ }),

/***/ "./src/assets/images/rs_school_js.png":
/*!********************************************!*\
  !*** ./src/assets/images/rs_school_js.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/rs_school_js.png";

/***/ }),

/***/ "./src/assets/images/svg/arrow-down.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/svg/arrow-down.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/arrow-down.svg";

/***/ }),

/***/ "./src/assets/images/svg/audio.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/svg/audio.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/audio.svg";

/***/ }),

/***/ "./src/assets/images/svg/ball.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/ball.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/ball.svg";

/***/ }),

/***/ "./src/assets/images/svg/bell.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/bell.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/bell.svg";

/***/ }),

/***/ "./src/assets/images/svg/close.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/svg/close.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/close.svg";

/***/ }),

/***/ "./src/assets/images/svg/cone.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/cone.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/cone.svg";

/***/ }),

/***/ "./src/assets/images/svg/snow.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/snow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/snow.svg";

/***/ }),

/***/ "./src/assets/images/svg/snowflake.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/svg/snowflake.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/snowflake.svg";

/***/ }),

/***/ "./src/assets/images/svg/toy.svg":
/*!***************************************!*\
  !*** ./src/assets/images/svg/toy.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/toy.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLFFBQVEsV0FBVyxPQUFPLE9BQU8sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxN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LFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxXQUFXLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxXQUFXLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsNkNBQTZDLG9CQUFvQixlQUFlLGNBQWMsY0FBYyxHQUFHLDBCQUEwQixnQ0FBZ0MsbUNBQW1DLDJCQUEyQixHQUFHLHFCQUFxQixrQkFBa0IsR0FBRyx1QkFBdUIsa0JBQWtCLEdBQUcsZ0NBQWdDLG1CQUFtQixHQUFHLGdCQUFnQixnQkFBZ0Isb0JBQW9CLG1CQUFtQixvQkFBb0IsK0JBQStCLGdDQUFnQyxtQ0FBbUMsR0FBRyw2QkFBNkIseUJBQXlCLEdBQUcsc0JBQXNCLGtCQUFrQixHQUFHLFlBQVksb0JBQW9CLEdBQUcsOEJBQThCLGVBQWUsY0FBYyxHQUFHLGtCQUFrQiwwQkFBMEIsR0FBRyxhQUFhLDBCQUEwQixHQUFHLFdBQVcscUJBQXFCLEdBQUcsU0FBUyx3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLHFCQUFxQixHQUFHLDBDQUEwQyxvQ0FBb0MscURBQXFELHdCQUF3Qix1QkFBdUIsR0FBRyxjQUFjLDRCQUE0Qiw2Q0FBNkMsd0JBQXdCLHVCQUF1QixHQUFHLFFBQVEsdUJBQXVCLGlCQUFpQixnQ0FBZ0Msb0VBQW9FLEdBQUcsaUJBQWlCLGdCQUFnQixpQkFBaUIsR0FBRyxjQUFjLDhCQUE4QixpQkFBaUIsbUJBQW1CLEdBQUcsbUNBQW1DLHVCQUF1QixXQUFXLGNBQWMsb0JBQW9CLDRCQUE0QixtRUFBbUUsR0FBRyxrQ0FBa0MsdUJBQXVCLGFBQWEsZUFBZSxvQkFBb0IsNEJBQTRCLG1FQUFtRSxHQUFHLG1DQUFtQyx1QkFBdUIsYUFBYSxjQUFjLHFDQUFxQyx5QkFBeUIsdUJBQXVCLGdEQUFnRCx1QkFBdUIsd0JBQXdCLG9CQUFvQixzQkFBc0IsdUJBQXVCLDhCQUE4QixnQkFBZ0IsMkJBQTJCLG1IQUFtSCxnQ0FBZ0Msd0JBQXdCLEdBQUcsc0JBQXNCLHVCQUF1QixrQkFBa0Isd0JBQXdCLDRCQUE0QixpQkFBaUIsaUJBQWlCLGFBQWEsY0FBYyw0QkFBNEIsb0JBQW9CLGdCQUFnQiwyQkFBMkIsZ0NBQWdDLG1IQUFtSCxnQ0FBZ0Msd0JBQXdCLHFCQUFxQixvQkFBb0IsR0FBRyw0QkFBNEIsaUJBQWlCLEdBQUcsWUFBWSxpQkFBaUIsa0JBQWtCLDhCQUE4QixHQUFHLHVCQUF1QixrQkFBa0IsaUJBQWlCLHdCQUF3QixtQ0FBbUMsR0FBRyxxQ0FBcUMsNEJBQTRCLG9CQUFvQixnQkFBZ0IsMkJBQTJCLGlCQUFpQixHQUFHLDBDQUEwQyxzQkFBc0IsR0FBRyxzQ0FBc0MsbUJBQW1CLGlCQUFpQixpQkFBaUIsOEVBQThFLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxnQ0FBZ0MsY0FBYywrQkFBK0IsbUJBQW1CLHFCQUFxQixLQUFLLEdBQUcsU0FBUyxnQkFBZ0IsaUJBQWlCLEdBQUcscUJBQXFCLGdCQUFnQixpQkFBaUIsa0JBQWtCLHFDQUFxQyw0QkFBNEIscUJBQXFCLEdBQUcsdUJBQXVCLHFCQUFxQixHQUFHLCtCQUErQixpQkFBaUIscUJBQXFCLEdBQUcsa0RBQWtELGVBQWUsR0FBRyx3REFBd0QscUJBQXFCLEdBQUcsd0RBQXdELHVCQUF1QixHQUFHLCtCQUErQix1QkFBdUIsa0JBQWtCLEdBQUcsZUFBZSxrQkFBa0IsZ0JBQWdCLG1DQUFtQyxtQkFBbUIsR0FBRyxvQkFBb0IsZ0JBQWdCLGlCQUFpQixxQkFBcUIsMkVBQTJFLEdBQUcsMEJBQTBCLGlCQUFpQixHQUFHLG1CQUFtQixnQkFBZ0IsaUJBQWlCLHFCQUFxQiwwRUFBMEUsR0FBRyx5QkFBeUIsaUJBQWlCLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLGtDQUFrQyxpQkFBaUIsaUJBQWlCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLGdCQUFnQixtSEFBbUgsZ0NBQWdDLHdCQUF3Qiw4QkFBOEIsR0FBRyx5QkFBeUIsdUJBQXVCLGFBQWEsZ0JBQWdCLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLG9CQUFvQixxQkFBcUIsMkVBQTJFLEdBQUcsZ0NBQWdDLGlCQUFpQixHQUFHLFdBQVcsa0JBQWtCLHFCQUFxQix3QkFBd0IsR0FBRyxXQUFXLG9DQUFvQyx1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsOEJBQThCLGdCQUFnQixHQUFHLHlCQUF5Qix1QkFBdUIsa0JBQWtCLHdCQUF3QixpQkFBaUIsaUJBQWlCLHNIQUFzSCxnQ0FBZ0Msd0JBQXdCLDhCQUE4QixlQUFlLEdBQUcsMkJBQTJCLG9CQUFvQix5QkFBeUIsdUJBQXVCLEdBQUcsc0NBQXNDLHVCQUF1QixhQUFhLGdCQUFnQixnQ0FBZ0MsZ0JBQWdCLGlCQUFpQixxQkFBcUIsZ0ZBQWdGLEdBQUcsNENBQTRDLGlCQUFpQixHQUFHLG1DQUFtQyx1QkFBdUIsZUFBZSxhQUFhLGNBQWMsdUJBQXVCLDhCQUE4Qiw4QkFBOEIsR0FBRyw4Q0FBOEMsb0NBQW9DLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDJCQUEyQixnQkFBZ0Isa0JBQWtCLG9CQUFvQixHQUFHLG9EQUFvRCw4QkFBOEIsR0FBRyxvQkFBb0IsbUJBQW1CLG9DQUFvQyx1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsOEJBQThCLGdCQUFnQixHQUFHLHNDQUFzQyxnQkFBZ0IsaUJBQWlCLHlCQUF5QixHQUFHLDJDQUEyQyw2QkFBNkIsMEJBQTBCLHFCQUFxQiw4QkFBOEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsb0JBQW9CLHVCQUF1QixhQUFhLHNIQUFzSCxnQ0FBZ0MsdUJBQXVCLEdBQUcsbURBQW1ELG9CQUFvQixtQkFBbUIsb0JBQW9CLHVCQUF1QixlQUFlLGdCQUFnQixtQ0FBbUMsZUFBZSw2QkFBNkIsR0FBRywyREFBMkQsZUFBZSxHQUFHLGdCQUFnQixtQkFBbUIsR0FBRyxpQkFBaUIsb0NBQW9DLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDJCQUEyQixnQkFBZ0IsR0FBRyw4QkFBOEIscUJBQXFCLGtCQUFrQixtQ0FBbUMsR0FBRyx5Q0FBeUMsa0JBQWtCLDJCQUEyQiw0QkFBNEIsR0FBRyxvREFBb0Qsd0JBQXdCLHFCQUFxQixvQkFBb0IsR0FBRywwREFBMEQsaUJBQWlCLDBCQUEwQixHQUFHLDREQUE0RCxvR0FBb0csR0FBRyxpREFBaUQsZ0JBQWdCLGlCQUFpQiwwRUFBMEUsR0FBRyxpREFBaUQsZ0JBQWdCLGlCQUFpQiwwRUFBMEUsR0FBRyxpREFBaUQsZ0JBQWdCLGlCQUFpQiwwRUFBMEUsR0FBRyxpREFBaUQsZ0JBQWdCLGlCQUFpQiwrRUFBK0UsR0FBRyxpREFBaUQsZ0JBQWdCLGlCQUFpQixvRkFBb0YsR0FBRyxpREFBaUQsZ0JBQWdCLGlCQUFpQix5RUFBeUUsR0FBRyxvREFBb0QsNEJBQTRCLHVCQUF1Qix3QkFBd0Isb0JBQW9CLHNCQUFzQix1QkFBdUIsZ0JBQWdCLEdBQUcsbUNBQW1DLHdCQUF3Qix1QkFBdUIsNkRBQTZELGlCQUFpQixvQkFBb0IsR0FBRywyQkFBMkIsZ0JBQWdCLEdBQUcsbURBQW1ELGtCQUFrQiw2QkFBNkIsdUJBQXVCLGdCQUFnQixlQUFlLHdCQUF3QixlQUFlLGFBQWEsR0FBRyx3Q0FBd0MsZ0JBQWdCLGlCQUFpQixpQkFBaUIsY0FBYywyUkFBMlIsdUJBQXVCLHFCQUFxQixpQkFBaUIsb0JBQW9CLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHNDQUFzQyxlQUFlLGlCQUFpQix1QkFBdUIsZUFBZSxHQUFHLHdCQUF3QixtQkFBbUIsdUJBQXVCLGlCQUFpQix3QkFBd0IscUJBQXFCLGdCQUFnQixpQkFBaUIsdUJBQXVCLHdCQUF3QixvQkFBb0IsNEJBQTRCLHVCQUF1Qix3QkFBd0IsR0FBRywrQkFBK0IsY0FBYyxHQUFHLGlCQUFpQixxQkFBcUIsR0FBRyxpQ0FBaUMsdUJBQXVCLG1CQUFtQixHQUFHLGtCQUFrQixvQ0FBb0MsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLGdCQUFnQixHQUFHLGdDQUFnQyxxQkFBcUIsR0FBRyxvQkFBb0IsdUJBQXVCLGNBQWMsWUFBWSw0QkFBNEIsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLG1CQUFtQixHQUFHLG9CQUFvQix1QkFBdUIsY0FBYyxhQUFhLDRCQUE0Qix1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsbUJBQW1CLEdBQUcsb0JBQW9CLHVCQUF1QiwwQkFBMEIsR0FBRyxxQkFBcUIsb0NBQW9DLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDJCQUEyQixnQkFBZ0IsR0FBRyxzQ0FBc0MscUJBQXFCLEdBQUcsdUJBQXVCLHVCQUF1QixjQUFjLFlBQVksNEJBQTRCLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDJCQUEyQixtQkFBbUIsR0FBRyx1QkFBdUIsdUJBQXVCLGNBQWMsYUFBYSw0QkFBNEIsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLG1CQUFtQixHQUFHLFlBQVksMEJBQTBCLEdBQUcsYUFBYSxvQ0FBb0MsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLGdCQUFnQixHQUFHLDJCQUEyQixrQkFBa0IscUJBQXFCLHFCQUFxQixHQUFHLHVDQUF1QyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixvQkFBb0IscUJBQXFCLEdBQUcsNkNBQTZDLGlCQUFpQixHQUFHLCtDQUErQyx1REFBdUQsR0FBRyxtQ0FBbUMsd0JBQXdCLEdBQUcsbUNBQW1DLHdCQUF3QixHQUFHLG1DQUFtQyx3QkFBd0IsR0FBRyxtQ0FBbUMsd0JBQXdCLEdBQUcsbUNBQW1DLHdCQUF3QixHQUFHLFdBQVcsbUJBQW1CLEdBQUcsWUFBWSxvQ0FBb0MsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLGdCQUFnQixHQUFHLHlCQUF5QixrQkFBa0IscUJBQXFCLG1DQUFtQyxHQUFHLHlDQUF5Qyw0QkFBNEIsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLHVCQUF1QixtQkFBbUIsR0FBRyxvQ0FBb0MsNkJBQTZCLDBCQUEwQixxQkFBcUIsOEJBQThCLGdCQUFnQixpQkFBaUIsdUJBQXVCLG9CQUFvQix1QkFBdUIsYUFBYSxzSEFBc0gsZ0NBQWdDLHVCQUF1QixHQUFHLDRDQUE0QyxvQkFBb0IsbUJBQW1CLG9CQUFvQix1QkFBdUIsZUFBZSxnQkFBZ0IsbUNBQW1DLGVBQWUsNkJBQTZCLEdBQUcsb0RBQW9ELGVBQWUsR0FBRyxlQUFlLG1CQUFtQixHQUFHLGlDQUFpQyw0QkFBNEIsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLHVCQUF1QixtQkFBbUIsR0FBRyxnREFBZ0QsNkJBQTZCLDBCQUEwQixxQkFBcUIsOEJBQThCLGdCQUFnQixpQkFBaUIsdUJBQXVCLG9CQUFvQix1QkFBdUIsYUFBYSxzSEFBc0gsZ0NBQWdDLHVCQUF1QixHQUFHLHdEQUF3RCxvQkFBb0IsbUJBQW1CLG9CQUFvQix1QkFBdUIsZUFBZSxnQkFBZ0IsbUNBQW1DLGVBQWUsNkJBQTZCLEdBQUcsZ0VBQWdFLGVBQWUsR0FBRyxjQUFjLGtCQUFrQixtQkFBbUIsNEJBQTRCLHFCQUFxQixHQUFHLHVCQUF1QixpQkFBaUIsaUJBQWlCLHNIQUFzSCxnQ0FBZ0Msd0JBQXdCLDRCQUE0Qix1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsdUJBQXVCLG1CQUFtQixHQUFHLDZCQUE2QixpQkFBaUIsR0FBRyxnQ0FBZ0MscUJBQXFCLEdBQUcscUNBQXFDLGtCQUFrQixxQkFBcUIsR0FBRyx3Q0FBd0MsNkJBQTZCLG9DQUFvQyx1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsOEJBQThCLGdCQUFnQixHQUFHLG9EQUFvRCx1QkFBdUIsOEJBQThCLHFCQUFxQixHQUFHLDZEQUE2RCxrQkFBa0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsY0FBYyxhQUFhLHFDQUFxQyxlQUFlLHFCQUFxQixHQUFHLDJFQUEyRSxrQkFBa0Isd0NBQXdDLG1CQUFtQixvQkFBb0IsR0FBRyxrRkFBa0Ysa0JBQWtCLHFCQUFxQixrQkFBa0Isb0JBQW9CLDRCQUE0Qix1QkFBdUIsR0FBRyx1RUFBdUUsaUJBQWlCLGtCQUFrQiwwQkFBMEIsMEhBQTBILCtCQUErQix3QkFBd0Isb0JBQW9CLHFCQUFxQixHQUFHLDBFQUEwRSxvQ0FBb0MsdUJBQXVCLHdCQUF3QixvQkFBb0IsMkJBQTJCLGdCQUFnQixHQUFHLDJGQUEyRixxQkFBcUIsa0JBQWtCLGdCQUFnQiw0QkFBNEIsR0FBRyxxR0FBcUcsaUJBQWlCLGtCQUFrQixxQkFBcUIsR0FBRyxpRkFBaUYscUJBQXFCLGtCQUFrQiwyQkFBMkIsa0JBQWtCLEdBQUcsb0ZBQW9GLDRCQUE0Qix1QkFBdUIsd0JBQXdCLG9CQUFvQiwyQkFBMkIsbUJBQW1CLEdBQUcsZ0VBQWdFLDJCQUEyQixxQkFBcUIsOEJBQThCLHlIQUF5SCx5REFBeUQsR0FBRyw2RUFBNkUsMERBQTBELDBIQUEwSCxHQUFHLDJHQUEyRywwQkFBMEIsR0FBRyxzRUFBc0UseURBQXlELEdBQUcsb0VBQW9FLG1CQUFtQixlQUFlLEdBQUcsdUVBQXVFLGdCQUFnQixHQUFHLDZFQUE2RSxxQkFBcUIsR0FBRyw2RUFBNkUsOEJBQThCLHVCQUF1QixHQUFHLHNCQUFzQixpQkFBaUIsZ0JBQWdCLGdCQUFnQixLQUFLLHVCQUF1QixrQ0FBa0MscUNBQXFDLDZCQUE2QixLQUFLLG1CQUFtQixlQUFlLHFCQUFxQixlQUFlLDRCQUE0QixnQkFBZ0IsY0FBYyxzQkFBc0Isa0JBQWtCLHNCQUFzQixxQkFBcUIsc0JBQXNCLGlDQUFpQyxrQ0FBa0MscUNBQXFDLEtBQUssMEJBQTBCLHFCQUFxQixxQkFBcUIsZUFBZSxXQUFXLGlCQUFpQiw4QkFBOEIsVUFBVSxVQUFVLGlCQUFpQix1QkFBdUIsWUFBWSx1QkFBdUIsVUFBVSxrQkFBa0IsUUFBUSxxQkFBcUIsc0JBQXNCLGtCQUFrQixrQkFBa0IsMkNBQTJDLG9DQUFvQyxxREFBcUQsMEJBQTBCLHlCQUF5QixLQUFLLG9CQUFvQiw0QkFBNEIsNkNBQTZDLDBCQUEwQix5QkFBeUIsS0FBSyxhQUFhLHlCQUF5QixtQkFBbUIsa0NBQWtDLHdFQUF3RSxLQUFLLHFCQUFxQixrQkFBa0IsbUJBQW1CLEtBQUssNEJBQTRCLDZCQUE2QixRQUFRLGtCQUFrQixnQ0FBZ0MsbUJBQW1CLHFCQUFxQixLQUFLLHFCQUFxQix5QkFBeUIsMkJBQTJCLGVBQWUsa0JBQWtCLHdCQUF3QixnQ0FBZ0MseUVBQXlFLE9BQU8sOEJBQThCLDJCQUEyQixpQkFBaUIsbUJBQW1CLHdCQUF3QixnQ0FBZ0MseUVBQXlFLE9BQU8sNEJBQTRCLFlBQVksNkJBQTZCLG1CQUFtQixvQkFBb0IsMkNBQTJDLCtCQUErQiw2QkFBNkIsb0RBQW9ELDZCQUE2Qiw4QkFBOEIsMEJBQTBCLDRCQUE0Qiw2QkFBNkIsb0NBQW9DLHNCQUFzQixpQ0FBaUMscUtBQXFLLHNDQUFzQyw4QkFBOEIsU0FBUyxPQUFPLGtCQUFrQiwyQkFBMkIsc0JBQXNCLDRCQUE0QixnQ0FBZ0MscUJBQXFCLHFCQUFxQixpQkFBaUIsa0JBQWtCLDhCQUE4Qix3QkFBd0Isb0JBQW9CLCtCQUErQixvQ0FBb0MsMkpBQTJKLG9DQUFvQyw0QkFBNEIseUJBQXlCLHdCQUF3QixPQUFPLHdCQUF3QixxQkFBcUIsT0FBTyxLQUFLLGdCQUFnQixtQkFBbUIsb0JBQW9CLGdDQUFnQyxLQUFLLDJCQUEyQixvQkFBb0IsbUJBQW1CLDBCQUEwQixxQ0FBcUMscUJBQXFCLFdBQVcsZ0NBQWdDLDBCQUEwQixzQkFBc0IsaUNBQWlDLHVCQUF1QixnQkFBZ0IsOEJBQThCLFdBQVcsU0FBUyxPQUFPLHNCQUFzQixXQUFXLHlCQUF5Qix1QkFBdUIsdUJBQXVCLGlHQUFpRyxTQUFTLE9BQU8sS0FBSyxlQUFlLG9CQUFvQixLQUFLLG9DQUFvQyxnQkFBZ0IsaUNBQWlDLHFCQUFxQix1QkFBdUIsT0FBTyxLQUFLLGNBQWMsa0JBQWtCLG1CQUFtQixLQUFLLHlCQUF5QixrQkFBa0IsbUJBQW1CLG9CQUFvQix1Q0FBdUMsOEJBQThCLHVCQUF1QixLQUFLLDJCQUEyQix1QkFBdUIsS0FBSyxtQ0FBbUMsbUJBQW1CLHVCQUF1QixLQUFLLHNEQUFzRCxpQkFBaUIsS0FBSyw0REFBNEQsdUJBQXVCLEtBQUssNERBQTRELHlCQUF5QixLQUFLLG1DQUFtQyx5QkFBeUIsb0JBQW9CLEtBQUssbUJBQW1CLG9CQUFvQixrQkFBa0IscUNBQXFDLHFCQUFxQixjQUFjLG9CQUFvQixxQkFBcUIsMEJBQTBCLGlGQUFpRixPQUFPLG9CQUFvQixxQkFBcUIsT0FBTyxpQkFBaUIsb0JBQW9CLHFCQUFxQiwwQkFBMEIsZ0ZBQWdGLE9BQU8sbUJBQW1CLHFCQUFxQixPQUFPLG1CQUFtQiwyQkFBMkIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsaUNBQWlDLGdDQUFnQyw2QkFBNkIsOEJBQThCLDBCQUEwQixpQ0FBaUMsc0JBQXNCLHFLQUFxSyxzQ0FBc0MsOEJBQThCLG9DQUFvQyxTQUFTLE9BQU8sbUJBQW1CLDJCQUEyQixpQkFBaUIsb0JBQW9CLG9DQUFvQyxvQkFBb0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsaUZBQWlGLE9BQU8sMEJBQTBCLHFCQUFxQixPQUFPLEtBQUssZUFBZSxvQkFBb0IsdUJBQXVCLDBCQUEwQixTQUFTLHNDQUFzQywyQkFBMkIsNEJBQTRCLHdCQUF3QiwrQkFBK0Isa0NBQWtDLG9CQUFvQixPQUFPLDJCQUEyQiwyQkFBMkIsc0JBQXNCLDRCQUE0QixxQkFBcUIscUJBQXFCLDhKQUE4SixvQ0FBb0MsNEJBQTRCLGtDQUFrQyxtQkFBbUIsV0FBVywwQkFBMEIsK0JBQStCLDZCQUE2QixTQUFTLDBCQUEwQiw2QkFBNkIsbUJBQW1CLHNCQUFzQixzQ0FBc0Msc0JBQXNCLHVCQUF1Qiw0QkFBNEIsbUdBQW1HLFNBQVMsNEJBQTRCLHVCQUF1QixTQUFTLHVCQUF1Qiw2QkFBNkIscUJBQXFCLG1CQUFtQixvQkFBb0IsNkJBQTZCLG9DQUFvQyxvQ0FBb0Msc0JBQXNCLDBDQUEwQywrQkFBK0IsZ0NBQWdDLDRCQUE0QixtQ0FBbUMsd0JBQXdCLDBCQUEwQiw0QkFBNEIsV0FBVyxnQ0FBZ0Msc0NBQXNDLFdBQVcsU0FBUyxPQUFPLEtBQUssd0JBQXdCLHFCQUFxQixvQ0FBb0MseUJBQXlCLDBCQUEwQixzQkFBc0IsNkJBQTZCLGdDQUFnQyxrQkFBa0IsMkJBQTJCLG9CQUFvQixxQkFBcUIsNkJBQTZCLGNBQWMsbUNBQW1DLGdDQUFnQywyQkFBMkIsb0NBQW9DLHNCQUFzQix1QkFBdUIsNkJBQTZCLDBCQUEwQiw2QkFBNkIsbUJBQW1CLHdLQUF3SyxzQ0FBc0MsNkJBQTZCLFNBQVMsc0JBQXNCLHdCQUF3Qix5QkFBeUIsMEJBQTBCLDZCQUE2QixxQkFBcUIsc0JBQXNCLHlDQUF5QyxxQkFBcUIsbUNBQW1DLFNBQVMsOEJBQThCLHFCQUFxQixTQUFTLE9BQU8sS0FBSyxvQkFBb0IscUJBQXFCLFVBQVUsc0NBQXNDLDJCQUEyQiw0QkFBNEIsd0JBQXdCLCtCQUErQixvQkFBb0IsT0FBTywyQkFBMkIseUJBQXlCLHNCQUFzQix1Q0FBdUMsb0JBQW9CLHdCQUF3QixpQ0FBaUMsa0NBQWtDLHNCQUFzQixnQ0FBZ0MsNkJBQTZCLDRCQUE0QixXQUFXLDRCQUE0Qix5QkFBeUIsa0NBQWtDLFdBQVcsOEJBQThCLHlIQUF5SCxXQUFXLHVCQUF1Qix3QkFBd0IseUJBQXlCLG9GQUFvRixXQUFXLG1CQUFtQix3QkFBd0IseUJBQXlCLG9GQUFvRixXQUFXLG1CQUFtQix3QkFBd0IseUJBQXlCLG9GQUFvRixXQUFXLG1CQUFtQix3QkFBd0IseUJBQXlCLHNHQUFzRyxXQUFXLG1CQUFtQix3QkFBd0IseUJBQXlCLDJHQUEyRyxXQUFXLG1CQUFtQix3QkFBd0IseUJBQXlCLG1GQUFtRixXQUFXLDBCQUEwQixrQ0FBa0MsK0JBQStCLGdDQUFnQyw0QkFBNEIsOEJBQThCLCtCQUErQix3QkFBd0IsV0FBVyxTQUFTLE9BQU8sS0FBSyw2Q0FBNkMsMEJBQTBCLHlCQUF5QiwrREFBK0QsbUJBQW1CLHNCQUFzQixLQUFLLCtCQUErQixrQkFBa0IsS0FBSyx5REFBeUQsb0JBQW9CLCtCQUErQix5QkFBeUIsa0JBQWtCLGlCQUFpQiwwQkFBMEIsaUJBQWlCLGVBQWUsS0FBSyw0Q0FBNEMsa0JBQWtCLG1CQUFtQixtQkFBbUIsZ0JBQWdCLG1YQUFtWCx5QkFBeUIsdUJBQXVCLG1CQUFtQixzQkFBc0IsS0FBSyw0QkFBNEIsMEJBQTBCLEtBQUssNENBQTRDLGlCQUFpQixtQkFBbUIseUJBQXlCLGlCQUFpQixLQUFLLDRCQUE0QixxQkFBcUIseUJBQXlCLG1CQUFtQiwwQkFBMEIsdUJBQXVCLGtCQUFrQixtQkFBbUIseUJBQXlCLDBCQUEwQixzQkFBc0IsNEJBQTRCLHlCQUF5QiwwQkFBMEIsS0FBSyxtQ0FBbUMsZ0JBQWdCLEtBQUsscUJBQXFCLHVCQUF1QixLQUFLLDJDQUEyQyx5QkFBeUIscUJBQXFCLFVBQVUsc0NBQXNDLDJCQUEyQiw0QkFBNEIsd0JBQXdCLCtCQUErQixvQkFBb0IsT0FBTyx3QkFBd0IseUJBQXlCLE9BQU8sZ0JBQWdCLDJCQUEyQixrQkFBa0IsZ0JBQWdCLDhCQUE4QiwyQkFBMkIsNEJBQTRCLHdCQUF3QiwrQkFBK0IsdUJBQXVCLE9BQU8sWUFBWSwyQkFBMkIsa0JBQWtCLGlCQUFpQiw4QkFBOEIsMkJBQTJCLDRCQUE0Qix3QkFBd0IsK0JBQStCLHVCQUF1QixPQUFPLEtBQUssd0JBQXdCLHlCQUF5Qiw0QkFBNEIsVUFBVSxzQ0FBc0MsMkJBQTJCLDRCQUE0Qix3QkFBd0IsK0JBQStCLG9CQUFvQixPQUFPLDJCQUEyQix5QkFBeUIsT0FBTyxnQkFBZ0IsMkJBQTJCLGtCQUFrQixnQkFBZ0IsOEJBQThCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLCtCQUErQix1QkFBdUIsT0FBTyxZQUFZLDJCQUEyQixrQkFBa0IsaUJBQWlCLDhCQUE4QiwyQkFBMkIsNEJBQTRCLHdCQUF3QiwrQkFBK0IsdUJBQXVCLE9BQU8sS0FBSyxnQkFBZ0IsNEJBQTRCLFVBQVUsc0NBQXNDLDJCQUEyQiw0QkFBNEIsd0JBQXdCLCtCQUErQixvQkFBb0IsT0FBTyw0QkFBNEIsc0JBQXNCLHlCQUF5Qix5QkFBeUIscUJBQXFCLHNCQUFzQix1QkFBdUIsNkJBQTZCLDBCQUEwQiwyQkFBMkIsU0FBUywyQkFBMkIsdUJBQXVCLFNBQVMsaUNBQWlDLDZEQUE2RCxTQUFTLGlCQUFpQiw4QkFBOEIsU0FBUyxpQkFBaUIsOEJBQThCLFNBQVMsaUJBQWlCLDhCQUE4QixTQUFTLGlCQUFpQiw4QkFBOEIsU0FBUyxpQkFBaUIsOEJBQThCLFNBQVMsT0FBTyxLQUFLLGVBQWUscUJBQXFCLFVBQVUsc0NBQXNDLDJCQUEyQiw0QkFBNEIsd0JBQXdCLCtCQUErQixvQkFBb0IsT0FBTywyQkFBMkIsc0JBQXNCLHlCQUF5Qix1Q0FBdUMseUJBQXlCLGdDQUFnQyw2QkFBNkIsOEJBQThCLDBCQUEwQixpQ0FBaUMsNkJBQTZCLHlCQUF5QixTQUFTLHdCQUF3QixtQ0FBbUMsZ0NBQWdDLDJCQUEyQixvQ0FBb0Msc0JBQXNCLHVCQUF1Qiw2QkFBNkIsMEJBQTBCLDZCQUE2QixtQkFBbUIsd0tBQXdLLHNDQUFzQyw2QkFBNkIsU0FBUyw0QkFBNEIsd0JBQXdCLHlCQUF5QiwwQkFBMEIsNkJBQTZCLHFCQUFxQixzQkFBc0IseUNBQXlDLHFCQUFxQixtQ0FBbUMsU0FBUyxvQ0FBb0MscUJBQXFCLFNBQVMsT0FBTyxLQUFLLG1CQUFtQixxQkFBcUIsMkJBQTJCLDhCQUE4QiwyQkFBMkIsNEJBQTRCLHdCQUF3QiwrQkFBK0IsMkJBQTJCLHVCQUF1Qix3QkFBd0IsbUNBQW1DLGdDQUFnQywyQkFBMkIsb0NBQW9DLHNCQUFzQix1QkFBdUIsNkJBQTZCLDBCQUEwQiw2QkFBNkIsbUJBQW1CLHdLQUF3SyxzQ0FBc0MsNkJBQTZCLFNBQVMsZ0NBQWdDLHdCQUF3Qix5QkFBeUIsMEJBQTBCLDZCQUE2QixxQkFBcUIsc0JBQXNCLHlDQUF5QyxxQkFBcUIsbUNBQW1DLFNBQVMsd0NBQXdDLHFCQUFxQixTQUFTLE9BQU8sS0FBSyxrQkFBa0Isb0JBQW9CLHFCQUFxQiw4QkFBOEIsdUJBQXVCLGtCQUFrQixxQkFBcUIscUJBQXFCLDhKQUE4SixvQ0FBb0MsNEJBQTRCLDhCQUE4QiwyQkFBMkIsNEJBQTRCLHdCQUF3QiwrQkFBK0IsMkJBQTJCLHVCQUF1QixPQUFPLDRCQUE0QixxQkFBcUIsT0FBTyxLQUFLLG9DQUFvQyx1QkFBdUIsY0FBYyxzQkFBc0IseUJBQXlCLFlBQVksbUNBQW1DLHdDQUF3Qyw2QkFBNkIsOEJBQThCLDBCQUEwQixpQ0FBaUMsb0NBQW9DLHNCQUFzQixTQUFTLE9BQU8sNkJBQTZCLDJCQUEyQixrQ0FBa0MseUJBQXlCLHNCQUFzQix3QkFBd0IsdUJBQXVCLDZCQUE2Qiw2QkFBNkIsb0JBQW9CLG1CQUFtQiwyQ0FBMkMscUJBQXFCLDJCQUEyQix5QkFBeUIsMEJBQTBCLGdEQUFnRCwyQkFBMkIsNEJBQTRCLFdBQVcsU0FBUyx1Q0FBdUMsd0JBQXdCLDJCQUEyQix3QkFBd0IsMEJBQTBCLGtDQUFrQyw2QkFBNkIsU0FBUyw0QkFBNEIsdUJBQXVCLHdCQUF3QixnQ0FBZ0MsNEtBQTRLLHFDQUFxQyw4QkFBOEIsMEJBQTBCLDJCQUEyQixjQUFjLDBDQUEwQywrQkFBK0IsZ0NBQWdDLDRCQUE0QixtQ0FBbUMsd0JBQXdCLFdBQVcsK0JBQStCLDZCQUE2QiwwQkFBMEIsd0JBQXdCLG9DQUFvQyx1QkFBdUIsMkJBQTJCLDRCQUE0QiwrQkFBK0IsYUFBYSxXQUFXLHFCQUFxQiw2QkFBNkIsMEJBQTBCLG1DQUFtQywwQkFBMEIsZ0JBQWdCLG9DQUFvQyxpQ0FBaUMsa0NBQWtDLDhCQUE4QixxQ0FBcUMsNkJBQTZCLGFBQWEsV0FBVyxTQUFTLHlCQUF5QixpQ0FBaUMsMkJBQTJCLG9DQUFvQywyS0FBMkssK0RBQStELFNBQVMsc0NBQXNDLGdFQUFnRSw0S0FBNEssK0JBQStCLHVCQUF1QixvQ0FBb0MsYUFBYSxXQUFXLFNBQVMsMkJBQTJCLCtEQUErRCxTQUFTLDZCQUE2Qix5QkFBeUIscUJBQXFCLFNBQVMsT0FBTyxvREFBb0Qsb0JBQW9CLE9BQU8sMERBQTBELHlCQUF5QixPQUFPLDBEQUEwRCxrQ0FBa0MsMkJBQTJCLE9BQU8sS0FBSyx1QkFBdUI7QUFDMXh6RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUN0QzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyQkE7QUFDQSxJQUFJLEtBQTREO0FBQ2hFLElBQUksQ0FDMkc7QUFDL0csQ0FBQyw2QkFBNkI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0Q0FBNEM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0Q0FBNEM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBOEM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyxzQ0FBc0MseUNBQXlDO0FBQy9FLGtDQUFrQyxxQ0FBcUM7QUFDdkUsbUNBQW1DLHNDQUFzQztBQUN6RSxxQkFBcUIsdUJBQXVCO0FBQzVDLHVCQUF1Qix5QkFBeUI7QUFDaEQseUJBQXlCLDJCQUEyQjtBQUNwRCxvQkFBb0IsdUJBQXVCO0FBQzNDLHVCQUF1QiwwQkFBMEI7QUFDakQsaUNBQWlDLG9DQUFvQztBQUNyRSxxQkFBcUIsdUJBQXVCO0FBQzVDLDJCQUEyQiw4QkFBOEI7QUFDekQsc0JBQXNCLHlCQUF5QjtBQUMvQyxxQkFBcUIsd0JBQXdCO0FBQzdDLHVCQUF1QiwwQkFBMEI7QUFDakQseUJBQXlCLDJCQUEyQjtBQUNwRCwwQkFBMEIsNkJBQTZCO0FBQ3ZELHNCQUFzQix5QkFBeUI7QUFDL0Msd0JBQXdCLDJCQUEyQjtBQUNuRCwrQkFBK0IsaUNBQWlDO0FBQ2hFLCtCQUErQixrQ0FBa0M7QUFDakUseUJBQXlCLDJCQUEyQjtBQUNwRCwwQkFBMEIsNEJBQTRCO0FBQ3RELGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixXQUFXO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLGdCQUFnQjtBQUNoRztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywrQkFBK0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1EQUFtRCxhQUFhOztBQUVoRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5ckVELE1BQXFGO0FBQ3JGLE1BQTJFO0FBQzNFLE1BQWtGO0FBQ2xGLE1BQXFHO0FBQ3JHLE1BQThGO0FBQzlGLE1BQThGO0FBQzlGLE1BQXlM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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1ByQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL25vVWlTbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzcz9jOGFkIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2FiODYiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL3NyYy9hcHAvYXBwLnRzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vc3JjL2NvbXBvbmVudHMvZmF2b3JpdGUtdG95cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvY29tcG9uZW50cy9sb2NhbC1zdG9yYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL3NyYy9jb21wb25lbnRzL3NvcnQtdG95cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svLi9zcmMvY29tcG9uZW50cy9zdGFydC1nYW1lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL3NyYy9jb21wb25lbnRzL3RveXMuY29tcG9uZW50LnRzIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrLy4vc3JjL2NvbXBvbmVudHMvdWktc2xpZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NocmlzdG1hcy10YXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtdGFzay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXRhc2svd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZ1bmN0aW9uYWwgc3R5bGluZztcXG4gKiBUaGVzZSBzdHlsZXMgYXJlIHJlcXVpcmVkIGZvciBub1VpU2xpZGVyIHRvIGZ1bmN0aW9uLlxcbiAqIFlvdSBkb24ndCBuZWVkIHRvIGNoYW5nZSB0aGVzZSBydWxlcyB0byBhcHBseSB5b3VyIGRlc2lnbi5cXG4gKi9cXG4ubm9VaS10YXJnZXQsXFxuLm5vVWktdGFyZ2V0ICoge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ub1VpLXRhcmdldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ub1VpLWJhc2UsXFxuLm5vVWktY29ubmVjdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4vKiBXcmFwcGVyIGZvciBhbGwgY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLm5vVWktY29ubmVjdCxcXG4ubm9VaS1vcmlnaW4ge1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcbn1cXG5cXG4vKiBPZmZzZXQgZGlyZWN0aW9uXFxuICovXFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcblxcbi8qIEdpdmUgb3JpZ2lucyAwIGhlaWdodC93aWR0aCBzbyB0aGV5IGRvbid0IGludGVyZmVyZSB3aXRoIGNsaWNraW5nIHRoZVxcbiAqIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luIHtcXG4gIHRvcDogLTEwMCU7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4ubm9VaS1oYW5kbGUge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5ub1VpLXRvdWNoLWFyZWEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1jb25uZWN0LFxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1vcmlnaW4ge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbi5ub1VpLXN0YXRlLWRyYWcgKiB7XFxuICBjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU2xpZGVyIHNpemUgYW5kIGhhbmRsZSBwbGFjZW1lbnQ7XFxuICovXFxuLm5vVWktaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcblxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcmlnaHQ6IC0xN3B4O1xcbiAgdG9wOiAtNnB4O1xcbn1cXG5cXG4ubm9VaS12ZXJ0aWNhbCB7XFxuICB3aWR0aDogMThweDtcXG59XFxuXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgcmlnaHQ6IC02cHg7XFxuICBib3R0b206IC0xN3B4O1xcbn1cXG5cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIGxlZnQ6IC0xN3B4O1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcblxcbi8qIFN0eWxpbmc7XFxuICogR2l2aW5nIHRoZSBjb25uZWN0IGVsZW1lbnQgYSBib3JkZXIgcmFkaXVzIGNhdXNlcyBpc3N1ZXMgd2l0aCB1c2luZyB0cmFuc2Zvcm06IHNjYWxlXFxuICovXFxuLm5vVWktdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDNEM0QzO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNGMEYwRjAsIDAgM3B4IDZweCAtNXB4ICNCQkI7XFxufVxcblxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjM0ZCOEFGO1xcbn1cXG5cXG4vKiBIYW5kbGVzIGFuZCBjdXJzb3JzO1xcbiAqL1xcbi5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuXFxuLm5vVWktdmVydGljYWwgLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG5cXG4ubm9VaS1oYW5kbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRUJFQkVCLCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG5cXG4ubm9VaS1hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0RERCwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuXFxuLyogSGFuZGxlIHN0cmlwZXM7XFxuICovXFxuLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTRweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjRThFN0U2O1xcbiAgbGVmdDogMTRweDtcXG4gIHRvcDogNnB4O1xcbn1cXG5cXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgbGVmdDogMTdweDtcXG59XFxuXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGxlZnQ6IDZweDtcXG4gIHRvcDogMTRweDtcXG59XFxuXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHRvcDogMTdweDtcXG59XFxuXFxuLyogRGlzYWJsZWQgc3RhdGU7XFxuICovXFxuW2Rpc2FibGVkXSAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNCOEI4Qjg7XFxufVxcblxcbltkaXNhYmxlZF0ubm9VaS10YXJnZXQsXFxuW2Rpc2FibGVkXS5ub1VpLWhhbmRsZSxcXG5bZGlzYWJsZWRdIC5ub1VpLWhhbmRsZSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4vKiBCYXNlO1xcbiAqXFxuICovXFxuLm5vVWktcGlwcyxcXG4ubm9VaS1waXBzICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm5vVWktcGlwcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuXFxuLyogVmFsdWVzO1xcbiAqXFxuICovXFxuLm5vVWktdmFsdWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vVWktdmFsdWUtc3ViIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4vKiBNYXJraW5ncztcXG4gKlxcbiAqL1xcbi5ub1VpLW1hcmtlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjQ0NDO1xcbn1cXG5cXG4ubm9VaS1tYXJrZXItc3ViIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcblxcbi5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG5cXG4vKiBIb3Jpem9udGFsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtaG9yaXpvbnRhbCB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG59XFxuXFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbn1cXG5cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlciB7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDVweDtcXG59XFxuXFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuXFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG4vKiBWZXJ0aWNhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLXZlcnRpY2FsIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbi5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG59XFxuXFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyIHtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcblxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLm5vVWktdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLXRvb2x0aXAge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICBsZWZ0OiA1MCU7XFxuICBib3R0b206IDEyMCU7XFxufVxcblxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLXRvb2x0aXAge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxMjAlO1xcbn1cXG5cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gIGxlZnQ6IGF1dG87XFxuICBib3R0b206IDEwcHg7XFxufVxcblxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdG9wOiBhdXRvO1xcbiAgcmlnaHQ6IDI4cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUFBO0FBSUE7O0VBRUUsMkJBQUE7RUFDQSw2Q0FBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUdGOztBQURBO0VBQUE7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUlGOztBQUZBOztFQUVFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFIQTtFQUFBO0FBRUE7RUFDRSxPQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUpBOztFQUFBO0FBR0E7RUFDRSxVQUFBO0VBQ0EsUUFBQTtBQU9GOztBQUxBO0VBQ0UsU0FBQTtBQVFGOztBQU5BO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVVGOztBQVJBOztFQUdFLDBCQUFBO0FBV0Y7O0FBVEE7RUFDRSwwQkFBQTtBQVlGOztBQVZBO0VBQUE7QUFFQTtFQUNFLFlBQUE7QUFhRjs7QUFYQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFjRjs7QUFaQTtFQUNFLFdBQUE7QUFlRjs7QUFiQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFnQkY7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQWlCRjs7QUFmQTs7RUFBQTtBQUdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0RBQUE7QUFrQkY7O0FBaEJBO0VBQ0Usa0JBQUE7QUFtQkY7O0FBakJBO0VBQ0UsbUJBQUE7QUFvQkY7O0FBbEJBO0VBQUE7QUFFQTtFQUNFLGlCQUFBO0FBcUJGOztBQW5CQTtFQUNFLGlCQUFBO0FBc0JGOztBQXBCQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0RUFBQTtBQXVCRjs7QUFyQkE7RUFDRSx5RUFBQTtBQXdCRjs7QUF0QkE7RUFBQTtBQUVBOztFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUF5QkY7O0FBdkJBO0VBQ0UsVUFBQTtBQTBCRjs7QUF4QkE7O0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQTJCRjs7QUF6QkE7RUFDRSxTQUFBO0FBNEJGOztBQTFCQTtFQUFBO0FBRUE7RUFDRSxtQkFBQTtBQTZCRjs7QUEzQkE7OztFQUdFLG1CQUFBO0FBOEJGOztBQTVCQTs7RUFBQTtBQUdBOztFQUdFLHNCQUFBO0FBK0JGOztBQTdCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQWdDRjs7QUE5QkE7O0VBQUE7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWlDRjs7QUEvQkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQWtDRjs7QUFoQ0E7O0VBQUE7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFtQ0Y7O0FBakNBO0VBQ0UsZ0JBQUE7QUFvQ0Y7O0FBbENBO0VBQ0UsZ0JBQUE7QUFxQ0Y7O0FBbkNBOztFQUFBO0FBR0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQXNDRjs7QUFwQ0E7RUFFRSwrQkFBQTtBQXVDRjs7QUFyQ0E7RUFFRSw4QkFBQTtBQXdDRjs7QUF0Q0E7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBeUNGOztBQXZDQTtFQUNFLFlBQUE7QUEwQ0Y7O0FBeENBO0VBQ0UsWUFBQTtBQTJDRjs7QUF6Q0E7O0VBQUE7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUE0Q0Y7O0FBMUNBO0VBRUUsNkJBQUE7RUFDQSxrQkFBQTtBQTZDRjs7QUEzQ0E7RUFFRSw0QkFBQTtBQThDRjs7QUE1Q0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBK0NGOztBQTdDQTtFQUNFLFdBQUE7QUFnREY7O0FBOUNBO0VBQ0UsV0FBQTtBQWlERjs7QUEvQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFrREY7O0FBaERBO0VBRUUsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQW1ERjs7QUFqREE7RUFFRSw2QkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBb0RGOztBQWxEQTtFQUVFLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFxREY7O0FBbkRBO0VBRUUsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQXNERlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGdW5jdGlvbmFsIHN0eWxpbmc7XFxuICogVGhlc2Ugc3R5bGVzIGFyZSByZXF1aXJlZCBmb3Igbm9VaVNsaWRlciB0byBmdW5jdGlvbi5cXG4gKiBZb3UgZG9uJ3QgbmVlZCB0byBjaGFuZ2UgdGhlc2UgcnVsZXMgdG8gYXBwbHkgeW91ciBkZXNpZ24uXFxuICovXFxuLm5vVWktdGFyZ2V0LFxcbi5ub1VpLXRhcmdldCAqIHtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm5vVWktdGFyZ2V0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm5vVWktYmFzZSxcXG4ubm9VaS1jb25uZWN0cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi8qIFdyYXBwZXIgZm9yIGFsbCBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAwO1xcbn1cXG4ubm9VaS1jb25uZWN0LFxcbi5ub1VpLW9yaWdpbiB7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XFxufVxcbi8qIE9mZnNldCBkaXJlY3Rpb25cXG4gKi9cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG59XFxuLyogR2l2ZSBvcmlnaW5zIDAgaGVpZ2h0L3dpZHRoIHNvIHRoZXkgZG9uJ3QgaW50ZXJmZXJlIHdpdGggY2xpY2tpbmcgdGhlXFxuICogY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4ge1xcbiAgdG9wOiAtMTAwJTtcXG4gIHdpZHRoOiAwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLm5vVWktdG91Y2gtYXJlYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLWNvbm5lY3QsXFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLW9yaWdpbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcbi5ub1VpLXN0YXRlLWRyYWcgKiB7XFxuICBjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcXG59XFxuLyogU2xpZGVyIHNpemUgYW5kIGhhbmRsZSBwbGFjZW1lbnQ7XFxuICovXFxuLm5vVWktaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcmlnaHQ6IC0xN3B4O1xcbiAgdG9wOiAtNnB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCB7XFxuICB3aWR0aDogMThweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgcmlnaHQ6IC02cHg7XFxuICBib3R0b206IC0xN3B4O1xcbn1cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIGxlZnQ6IC0xN3B4O1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi8qIFN0eWxpbmc7XFxuICogR2l2aW5nIHRoZSBjb25uZWN0IGVsZW1lbnQgYSBib3JkZXIgcmFkaXVzIGNhdXNlcyBpc3N1ZXMgd2l0aCB1c2luZyB0cmFuc2Zvcm06IHNjYWxlXFxuICovXFxuLm5vVWktdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDNEM0QzO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNGMEYwRjAsIDAgM3B4IDZweCAtNXB4ICNCQkI7XFxufVxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjM0ZCOEFGO1xcbn1cXG4vKiBIYW5kbGVzIGFuZCBjdXJzb3JzO1xcbiAqL1xcbi5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRUJFQkVCLCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG4ubm9VaS1hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0RERCwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuLyogSGFuZGxlIHN0cmlwZXM7XFxuICovXFxuLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTRweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjRThFN0U2O1xcbiAgbGVmdDogMTRweDtcXG4gIHRvcDogNnB4O1xcbn1cXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgbGVmdDogMTdweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGxlZnQ6IDZweDtcXG4gIHRvcDogMTRweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHRvcDogMTdweDtcXG59XFxuLyogRGlzYWJsZWQgc3RhdGU7XFxuICovXFxuW2Rpc2FibGVkXSAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNCOEI4Qjg7XFxufVxcbltkaXNhYmxlZF0ubm9VaS10YXJnZXQsXFxuW2Rpc2FibGVkXS5ub1VpLWhhbmRsZSxcXG5bZGlzYWJsZWRdIC5ub1VpLWhhbmRsZSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4vKiBCYXNlO1xcbiAqXFxuICovXFxuLm5vVWktcGlwcyxcXG4ubm9VaS1waXBzICoge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm5vVWktcGlwcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuLyogVmFsdWVzO1xcbiAqXFxuICovXFxuLm5vVWktdmFsdWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm5vVWktdmFsdWUtc3ViIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4vKiBNYXJraW5ncztcXG4gKlxcbiAqL1xcbi5ub1VpLW1hcmtlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjQ0NDO1xcbn1cXG4ubm9VaS1tYXJrZXItc3ViIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcbi5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG4vKiBIb3Jpem9udGFsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtaG9yaXpvbnRhbCB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogNXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcbi8qIFZlcnRpY2FsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtdmVydGljYWwge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyIHtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuLm5vVWktdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgbGVmdDogNTAlO1xcbiAgYm90dG9tOiAxMjAlO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDEyMCU7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xcbiAgbGVmdDogYXV0bztcXG4gIGJvdHRvbTogMTBweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRvcDogYXV0bztcXG4gIHJpZ2h0OiAyOHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9OZXVjaGEtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvU3RlcHBlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy8xLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3JzX3NjaG9vbF9qcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3N2Zy9hdWRpby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3N2Zy9zbm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2Nsb3NlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2Fycm93LWRvd24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2JlbGwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2JhbGwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2NvbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3Nub3dmbGFrZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9zdmcvdG95LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyrQntCx0L3Rg9C70LXQvdC40LUqL1xcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOmZvY3VzLCA6YWN0aXZlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmE6Zm9jdXMsIGE6YWN0aXZlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbm5hdiwgZm9vdGVyLCBoZWFkZXIsIGFzaWRlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG59XFxuXFxuaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmlucHV0OjotbXMtY2xlYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbmEsIGE6dmlzaXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG51bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuLnN0YXJ0LWdhbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnN0YXJ0LWdhbWUgLnRveXMtY2lyY2xlLWxlZnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMjAlO1xcbiAgd2lkdGg6IDIxLjc3MXZ3O1xcbiAgcGFkZGluZy1ib3R0b206IDM5Ljg4NiU7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcbi5zdGFydC1nYW1lIC50b3lzLWNpcmNsZS1yaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwJTtcXG4gIHJpZ2h0OiAyOCU7XFxuICB3aWR0aDogMTIuNzcxdnc7XFxuICBwYWRkaW5nLWJvdHRvbTogMjMuMzM0JTtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG59XFxuLnN0YXJ0LWdhbWUgLnRpdGxlLWNvbnRlaW5lciBoMSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBwYWRkaW5nOiA2N3B4IDg1cHg7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDUzcHg7XFxuICBsaW5lLWhlaWdodDogNThweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlLCBhdCAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwKSAxMDAlKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG4uc3RhcnQtZ2FtZSAuc3RhcnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogNTRweDtcXG4gIHRvcDogNzAlO1xcbiAgbGVmdDogNTAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSwgYXQgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zdGFydC1nYW1lIC5zdGFydDpob3ZlciB7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MmYyZDtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5mb290ZXItY29udGFpbmVyIC5sZWZ0LWVsZW1lbnQgcCB7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBvcGFjaXR5OiA3MCU7XFxufVxcbi5mb290ZXItY29udGFpbmVyIC5sZWZ0LWVsZW1lbnQgcCBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG4uZm9vdGVyLWNvbnRhaW5lciAucmlnaHQtZWxlbWVudCBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAud3JhcHBlciB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG59XFxuLnRveXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50b3lzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRlaW5lciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5maWx0ZXItY29udGFpbmVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxufVxcblxcbi5maWx0ZXItY29udGFpbmVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5maWx0ZXItY29udGFpbmVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmZpbHRlci1jb250YWluZXItY29udGVudCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2V0dGluZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi5zZXR0aW5ncyAuYXVkaW8ge1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpO1xcbn1cXG4uc2V0dGluZ3MgLmF1ZGlvOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDc1JTtcXG59XFxuLnNldHRpbmdzIC5zbm93IHtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKTtcXG59XFxuLnNldHRpbmdzIC5zbm93OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDc1JTtcXG59XFxuLnNldHRpbmdzIC5zZWFyY2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2V0dGluZ3MgLnNlYXJjaCAuc2VhcmNoLWl0ZW0ge1xcbiAgd2lkdGg6IDI2MHB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCA1MHB4IDAgMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlLCBhdCAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwKSAxMDAlKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzYTlmNDtcXG59XFxuLnNldHRpbmdzIC5jbGVhbi1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIik7XFxufVxcbi5zZXR0aW5ncyAuc2VhcmNoLWljb246aG92ZXIge1xcbiAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG4uc29ydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1jb2x1bW4tZ2FwOiA0MHB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNvcnQgcCB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjcwcHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlLCBhdCAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzYTlmNDtcXG4gIHotaW5kZXg6IDU7XFxufVxcbi5zb3J0IC5zb3J0LWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIgLmNob29zZS1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gKyBcIik7XFxufVxcbi5zb3J0IC5zb3J0LWNvbnRhaW5lciAuY2hvb3NlLWl0ZW06aG92ZXIge1xcbiAgb3BhY2l0eTogNzUlO1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIgLmFsbC1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA5MCU7XFxuICBsZWZ0OiA1JTtcXG4gIHRvcDogMTEwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U1ODU3O1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIgLmFsbC1pdGVtIC5zb3J0LWl0ZW0ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNvcnQgLnNvcnQtY29udGFpbmVyIC5hbGwtaXRlbSAuc29ydC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjkzOTY7XFxufVxcblxcbi5zb3J0LWNhdGVnb3J5IHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnNvcnQtY2F0ZWdvcnkgLmNhdGVnb3J5LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4uc29ydC1jYXRlZ29yeSAuY2F0ZWdvcnktY29udGFpbmVyIC5hbGwge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2Y2Q7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogN3B4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSwgYXQgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc29ydC1jYXRlZ29yeSAuY2F0ZWdvcnktY29udGFpbmVyIC5hbGw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi8J+XuFxcXCI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBib3R0b206IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxufVxcbi5zb3J0LWNhdGVnb3J5IC5jYXRlZ29yeS1jb250YWluZXIgLmFsbDpjaGVja2VkOjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRveXMtZm9ybSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLnRveXMtZm9ybSBoMyB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmZvcm0taWNvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuZm9ybS1pY29uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDg1JTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuZm9ybS1pY29uX19hY3RpdmUge1xcbiAgZmlsdGVyOiBpbnZlcnQoNTQlKSBzZXBpYSgxMDclKSBzYXR1cmF0ZSg5MDElKSBodWUtcm90YXRlKDI1ZGVnKSBicmlnaHRuZXNzKDE0MCUpIGNvbnRyYXN0KDkzJSk7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tMSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIik7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tMiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gKyBcIik7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tMyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gKyBcIik7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tNCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gKyBcIik7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tNSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIik7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tNiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gKyBcIik7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tbmFtZSB7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLypTbGlkZXIqL1xcbm1haW4gLm5vVWktdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI2YwZjBmMCwgMCAzcHggNnB4IC01cHggI2JiYjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiAubm9VaS1ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogMnB4O1xcbn1cXG5cXG5tYWluIC5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDBweDtcXG4gIHdpZHRoOiAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZThlN2U2O1xcbiAgbGVmdDogMTRweDtcXG4gIHRvcDogNnB4O1xcbn1cXG5cXG5tYWluIC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgcmlnaHQ6IC0xM3B4O1xcbiAgdG9wOiAtNnB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSwgcmFkaWFsLWdyYWRpZW50KDU3LjIzJSAyNDguMiUgYXQgMTA3LjE3JSwgYXQgMTA0LjAyJSwgcmdiYSgzNCwgMTUzLCAyMzUsIDAuOTIpIDAlLCByZ2JhKDM0LCAxNTMsIDIzNSwgMC4wNykgMTAwJSksIHJhZGlhbC1ncmFkaWVudCgxMDQuMjIlIDIzMC45NCUgYXQgLTQuMjIlLCBhdCAwJSwgIzI0YzVkYiAzLjYyJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMjYpIDU1LjElKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSksIHJhZGlhbC1ncmFkaWVudCg1Ny4yMyUgMjQ4LjIlIGF0IDEwNy4xNyUgMTA0LjAyJSwgcmdiYSgzNCwgMTUzLCAyMzUsIDAuOTIpIDAlLCByZ2JhKDM0LCAxNTMsIDIzNSwgMC4wNykgMTAwJSksIHJhZGlhbC1ncmFkaWVudCgxMDQuMjIlIDIzMC45NCUgYXQgLTQuMjIlIDAlLCAjMjRjNWRiIDMuNjIlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4yNikgNTUuMSUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICMyNGM1ZGI7XFxufVxcblxcbm1haW4gLm5vVWktYmFzZSxcXG4ubm9VaS1jb25uZWN0cyB7XFxuICB3aWR0aDogOTclO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxubWFpbiAubm9VaS10b29sdGlwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4jcmFuZ2UteWVhciAubm9VaS10b29sdGlwIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuI3JhbmdlLXllYXIge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLypTbGlkZXItRU5EKi9cXG4uY291bnQtY29weSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLmNvdW50LWNvcHkgaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uY291bnQtY29weSAuY291bnQtY29weS1pdGVtIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi5jb3VudC1jb3B5IC5taW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMjUlO1xcbiAgbGVmdDogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5jb3VudC1jb3B5IC5tYXgge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMjUlO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ueWVhci1wdXJjaGFzZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDQwcHggMCAyMHB4IDA7XFxufVxcbi55ZWFyLXB1cmNoYXNlIGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnllYXItcHVyY2hhc2UgLnllYXItcHVyY2hhc2UtaXRlbSB7XFxuICBtYXJnaW4tdG9wOiAzNXB4O1xcbn1cXG4ueWVhci1wdXJjaGFzZSAubWluIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTI1JTtcXG4gIGxlZnQ6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4ueWVhci1wdXJjaGFzZSAubWF4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTI1JTtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmNvbG9yIHtcXG4gIG1hcmdpbjogNDBweCAwIDIwcHggMDtcXG59XFxuLmNvbG9yIGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otY29sdW1uLWdhcDogMjVweDtcXG4gICAgICAgY29sdW1uLWdhcDogMjVweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5jb2xvci1pdGVtIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLmNvbG9yLWl0ZW06aG92ZXIge1xcbiAgb3BhY2l0eTogNzUlO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuY29sb3ItaXRlbV9fYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDJweCByZ2JhKDI1MywgMjE1LCAwLCAwLjgpO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuaXRlbS0xIHtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5pdGVtLTIge1xcbiAgYmFja2dyb3VuZDogI2ZkZDcwMDtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLml0ZW0tMyB7XFxuICBiYWNrZ3JvdW5kOiAjZmQwMDAwO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuaXRlbS00IHtcXG4gIGJhY2tncm91bmQ6ICMyMjk5ZWI7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5pdGVtLTUge1xcbiAgYmFja2dyb3VuZDogIzA4YWEwNTtcXG59XFxuXFxuLnNpemUge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi5zaXplIGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnNpemUgLnNpemUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc2l6ZSAuc2l6ZS1jb250YWluZXIgLmNvbnRhaW5lci1pdGVtIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5zaXplIC5zaXplLWNvbnRhaW5lciAuc2l6ZS1pdGVtIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmNkO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDdweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUsIGF0IDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNpemUgLnNpemUtY29udGFpbmVyIC5zaXplLWl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi8J+XuFxcXCI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBib3R0b206IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxufVxcbi5zaXplIC5zaXplLWNvbnRhaW5lciAuc2l6ZS1pdGVtOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZmF2b3JpdGUge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi5mYXZvcml0ZSAuY29udGFpbmVyLWZhdm9yaXRlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5mYXZvcml0ZSAuY29udGFpbmVyLWZhdm9yaXRlIC5mYXZvcml0ZS1pdGVtIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmNkO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDdweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUsIGF0IDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmZhdm9yaXRlIC5jb250YWluZXItZmF2b3JpdGUgLmZhdm9yaXRlLWl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi8J+XuFxcXCI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBib3R0b206IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxufVxcbi5mYXZvcml0ZSAuY29udGFpbmVyLWZhdm9yaXRlIC5mYXZvcml0ZS1pdGVtOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3Vjc3NlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAyNXB4IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tb3otY29sdW1uLWdhcDogNDBweDtcXG4gICAgICAgY29sdW1uLWdhcDogNDBweDtcXG59XFxuLnN1Y3NzZXMgLmFwcGx5LWJ0biB7XFxuICB3aWR0aDogMTgwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlLCBhdCAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnN1Y3NzZXMgLmFwcGx5LWJ0bjpob3ZlciB7XFxuICBvcGFjaXR5OiA3NSU7XFxufVxcblxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1jb2x1bW4tZ2FwOiA1MHB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiA1MHB4O1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAudGl0bGUgaDIge1xcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCA1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDhweCk7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLm1lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5tZXNzYWdlIC5tZXNzYWdlLWl0ZW0ge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNjcsIDEwNCwgMTA2LCAwLjcpO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAyNXB4O1xcbiAgICAgICBjb2x1bW4tZ2FwOiAyNXB4O1xcbiAgcm93LWdhcDogMjVweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50IHtcXG4gIHdpZHRoOiAyMjVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMCA1MHB4IDA7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlLCBhdCAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCUpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCBoNCB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQgLmljb24tdG95LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQgLmljb24tdG95LWNvbnRhaW5lciAuaWNvbi10b3kge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgaGVpZ2h0OiAxMTBweDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQgLmRhdGEtdG95IHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJvdy1nYXA6IDEwcHg7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQgLmRhdGEtdG95IGxpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuYWN0aXZlLXRveSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGJvcmRlcjogIzRjYWY1MCBzb2xpZCA1cHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlLCBhdCAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAwJSwgcmdiYSg3MCwgMTA5LCAxMTQsIDAuNCkgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIDAlLCByZ2JhKDcwLCAxMDksIDExNCwgMC40KSAxMDAlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggcmdiYSg3NiwgMTc1LCA4MCwgMC43NSk7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWNvbnRlbnQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlLCBhdCAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjQpIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjQpIDEwMCUpO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50OmhvdmVyIC5pY29uLXRveS1jb250YWluZXIgLmljb24tdG95IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5hY3RpdmUtdG95OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggcmdiYSg3NiwgMTc1LCA4MCwgMC43NSk7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAubWVzc2FnZV9hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMnB4O1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNjg2YTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19zdGFydC1wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3RveXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEIsWUFBQTtBQUNBO0VBQ0MsVUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FERUQ7O0FDQUE7RUFHQyxzQkFBQTtBREdEOztBQ0RBO0VBQWUsYUFBQTtBREtmOztBQ0pBO0VBQWlCLGFBQUE7QURRakI7O0FDUEE7RUFBd0IsY0FBQTtBRFd4Qjs7QUNWQTtFQUVDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QURZRDs7QUNWQTtFQUFzQixvQkFBQTtBRGN0Qjs7QUNiQTtFQUFpQixhQUFBO0FEaUJqQjs7QUNoQkE7RUFBTyxlQUFBO0FEb0JQOztBQ25CQTtFQUEwQixVQUFBO0VBQVUsU0FBQTtBRHdCcEM7O0FDdkJBO0VBQWEscUJBQUE7QUQyQmI7O0FDMUJBO0VBQVEscUJBQUE7QUQ4QlI7O0FDN0JBO0VBQU0sZ0JBQUE7QURpQ047O0FDaENBO0VBQUksbUJBQUE7QURvQ0o7O0FDbkNBO0VBQWtCLGtCQUFBO0VBQWtCLGdCQUFBO0FEd0NwQzs7QUN2Q0EsdUJBQUE7QUNqQ0E7RUFDRSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRjRFRjtBRXpFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FGMkVGO0FHdEZBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwwRUFB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O0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBSm9KUjtBSW5KUTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUpxSlY7QUloSkk7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx3SEFBQTtFQUFBLG9IQUFBO0VBS0Esb0RBQUE7QUo4SU47QUkzSUk7RUFDRSxxREFBQTtFQUNBLHlIQUFBO0VBQUEscUhBQUE7QUo2SU47QUl2SVE7RUFDRSxxQkFBQTtBSnlJVjtBSXJJSTtFQUNFLG9EQUFBO0FKdUlOO0FJcElJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUpzSU47QUlsSUU7RUFDRSxXQUFBO0FKb0lKO0FJaklFO0VBQ0UsZ0JBQUE7QUptSUo7QUloSUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FKa0lKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyrQntCx0L3Rg9C70LXQvdC40LUqL1xcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOmZvY3VzLCA6YWN0aXZlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmE6Zm9jdXMsIGE6YWN0aXZlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbm5hdiwgZm9vdGVyLCBoZWFkZXIsIGFzaWRlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG59XFxuXFxuaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmlucHV0OjotbXMtY2xlYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbmEsIGE6dmlzaXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG51bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9OZXVjaGEtUmVndWxhci50dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9TdGVwcGUudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmcuanBnKTtcXG59XFxuXFxuLnN0YXJ0LWdhbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnN0YXJ0LWdhbWUgLnRveXMtY2lyY2xlLWxlZnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMjAlO1xcbiAgd2lkdGg6IDIxLjc3MXZ3O1xcbiAgcGFkZGluZy1ib3R0b206IDM5Ljg4NiU7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzLzEucG5nKTtcXG59XFxuLnN0YXJ0LWdhbWUgLnRveXMtY2lyY2xlLXJpZ2h0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAlO1xcbiAgcmlnaHQ6IDI4JTtcXG4gIHdpZHRoOiAxMi43NzF2dztcXG4gIHBhZGRpbmctYm90dG9tOiAyMy4zMzQlO1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy8yLnBuZyk7XFxufVxcbi5zdGFydC1nYW1lIC50aXRsZS1jb250ZWluZXIgaDEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgcGFkZGluZzogNjdweCA4NXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiA1M3B4O1xcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG4uc3RhcnQtZ2FtZSAuc3RhcnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogNTRweDtcXG4gIHRvcDogNzAlO1xcbiAgbGVmdDogNTAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnN0YXJ0LWdhbWUgLnN0YXJ0OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyZjJkO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmZvb3Rlci1jb250YWluZXIgLmxlZnQtZWxlbWVudCBwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIG9wYWNpdHk6IDcwJTtcXG59XFxuLmZvb3Rlci1jb250YWluZXIgLmxlZnQtZWxlbWVudCBwIHNwYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbi5mb290ZXItY29udGFpbmVyIC5yaWdodC1lbGVtZW50IGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTgwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3JzX3NjaG9vbF9qcy5wbmcpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAud3JhcHBlciB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG59XFxuLnRveXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50b3lzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG59XFxuXFxuLmZpbHRlci1jb250ZWluZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZpbHRlci1jb250YWluZXItd3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5maWx0ZXItY29udGFpbmVyLWNvbnRlbnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNldHRpbmdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4uc2V0dGluZ3MgLmF1ZGlvIHtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2F1ZGlvLnN2Zyk7XFxufVxcbi5zZXR0aW5ncyAuYXVkaW86aG92ZXIge1xcbiAgb3BhY2l0eTogNzUlO1xcbn1cXG4uc2V0dGluZ3MgLnNub3cge1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvc25vdy5zdmcpO1xcbn1cXG4uc2V0dGluZ3MgLnNub3c6aG92ZXIge1xcbiAgb3BhY2l0eTogNzUlO1xcbn1cXG4uc2V0dGluZ3MgLnNlYXJjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zZXR0aW5ncyAuc2VhcmNoIC5zZWFyY2gtaXRlbSB7XFxuICB3aWR0aDogMjYwcHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwIDUwcHggMCAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwM2E5ZjQ7XFxufVxcbi5zZXR0aW5ncyAuY2xlYW4taWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvY2xvc2Uuc3ZnKTtcXG59XFxuLnNldHRpbmdzIC5zZWFyY2gtaWNvbjpob3ZlciB7XFxuICBvcGFjaXR5OiA3NSU7XFxufVxcblxcbi5zb3J0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNvcnQgcCB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjcwcHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDNhOWY0O1xcbiAgei1pbmRleDogNTtcXG59XFxuLnNvcnQgLnNvcnQtY29udGFpbmVyIHAge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcbi5zb3J0IC5zb3J0LWNvbnRhaW5lciAuY2hvb3NlLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2Fycm93LWRvd24uc3ZnKTtcXG59XFxuLnNvcnQgLnNvcnQtY29udGFpbmVyIC5jaG9vc2UtaXRlbTpob3ZlciB7XFxuICBvcGFjaXR5OiA3NSU7XFxufVxcbi5zb3J0IC5zb3J0LWNvbnRhaW5lciAuYWxsLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGxlZnQ6IDUlO1xcbiAgdG9wOiAxMTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxOTZmMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTU4NTc7XFxufVxcbi5zb3J0IC5zb3J0LWNvbnRhaW5lciAuYWxsLWl0ZW0gLnNvcnQtaXRlbSB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc29ydCAuc29ydC1jb250YWluZXIgLmFsbC1pdGVtIC5zb3J0LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2OTM5NjtcXG59XFxuXFxuLnNvcnQtY2F0ZWdvcnkge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uc29ydC1jYXRlZ29yeSAuY2F0ZWdvcnktY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcbi5zb3J0LWNhdGVnb3J5IC5jYXRlZ29yeS1jb250YWluZXIgLmFsbCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZjZDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA3cHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNvcnQtY2F0ZWdvcnkgLmNhdGVnb3J5LWNvbnRhaW5lciAuYWxsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIvCfl7hcXFwiO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTAlO1xcbiAgYm90dG9tOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcbn1cXG4uc29ydC1jYXRlZ29yeSAuY2F0ZWdvcnktY29udGFpbmVyIC5hbGw6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50b3lzLWZvcm0ge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi50b3lzLWZvcm0gaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5mb3JtLWljb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmZvcm0taWNvbjpob3ZlciB7XFxuICBvcGFjaXR5OiA4NSU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmZvcm0taWNvbl9fYWN0aXZlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDU0JSkgc2VwaWEoMTA3JSkgc2F0dXJhdGUoOTAxJSkgaHVlLXJvdGF0ZSgyNWRlZykgYnJpZ2h0bmVzcygxNDAlKSBjb250cmFzdCg5MyUpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLTEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9iZWxsLnN2Zyk7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tMiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMC8xMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2JhbGwuc3ZnKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi0zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvY29uZS5zdmcpO1xcbn1cXG4udG95cy1mb3JtIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pdGVtIC5pY29uLTQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAvMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9zbm93Zmxha2Uuc3ZnKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi01IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3Nub3cuc3ZnKTtcXG59XFxuLnRveXMtZm9ybSAuZm9ybS1jb250YWluZXIgLmZvcm0taXRlbSAuaWNvbi02IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwLzEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvdG95LnN2Zyk7XFxufVxcbi50b3lzLWZvcm0gLmZvcm0tY29udGFpbmVyIC5mb3JtLWl0ZW0gLmljb24tbmFtZSB7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLypTbGlkZXIqL1xcbm1haW4gLm5vVWktdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI2YwZjBmMCwgMCAzcHggNnB4IC01cHggI2JiYjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiAubm9VaS1ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogMnB4O1xcbn1cXG5cXG5tYWluIC5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDBweDtcXG4gIHdpZHRoOiAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZThlN2U2O1xcbiAgbGVmdDogMTRweDtcXG4gIHRvcDogNnB4O1xcbn1cXG5cXG5tYWluIC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgcmlnaHQ6IC0xM3B4O1xcbiAgdG9wOiAtNnB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSwgcmFkaWFsLWdyYWRpZW50KDU3LjIzJSAyNDguMiUgYXQgMTA3LjE3JSAxMDQuMDIlLCByZ2JhKDM0LCAxNTMsIDIzNSwgMC45MikgMCUsIHJnYmEoMzQsIDE1MywgMjM1LCAwLjA3KSAxMDAlKSwgcmFkaWFsLWdyYWRpZW50KDEwNC4yMiUgMjMwLjk0JSBhdCAtNC4yMiUgMCUsICMyNGM1ZGIgMy42MiUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjI2KSA1NS4xJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIC5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogIzI0YzVkYjtcXG59XFxuXFxubWFpbiAubm9VaS1iYXNlLFxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIHdpZHRoOiA5NyU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5tYWluIC5ub1VpLXRvb2x0aXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbiNyYW5nZS15ZWFyIC5ub1VpLXRvb2x0aXAge1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4jcmFuZ2UteWVhciB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4vKlNsaWRlci1FTkQqL1xcbi5jb3VudC1jb3B5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4uY291bnQtY29weSBoMyB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jb3VudC1jb3B5IC5jb3VudC1jb3B5LWl0ZW0ge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuLmNvdW50LWNvcHkgLm1pbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEyNSU7XFxuICBsZWZ0OiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLmNvdW50LWNvcHkgLm1heCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEyNSU7XFxuICByaWdodDogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi55ZWFyLXB1cmNoYXNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogNDBweCAwIDIwcHggMDtcXG59XFxuLnllYXItcHVyY2hhc2UgaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ueWVhci1wdXJjaGFzZSAueWVhci1wdXJjaGFzZS1pdGVtIHtcXG4gIG1hcmdpbi10b3A6IDM1cHg7XFxufVxcbi55ZWFyLXB1cmNoYXNlIC5taW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMjUlO1xcbiAgbGVmdDogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi55ZWFyLXB1cmNoYXNlIC5tYXgge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMjUlO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlN0ZXBwZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uY29sb3Ige1xcbiAgbWFyZ2luOiA0MHB4IDAgMjBweCAwO1xcbn1cXG4uY29sb3IgaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXVjaGEtUmVndWxhclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogMjVweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5jb2xvci1pdGVtIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLmNvbG9yLWl0ZW06aG92ZXIge1xcbiAgb3BhY2l0eTogNzUlO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuY29sb3ItaXRlbV9fYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDJweCByZ2JhKDI1MywgMjE1LCAwLCAwLjgpO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuaXRlbS0xIHtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5pdGVtLTIge1xcbiAgYmFja2dyb3VuZDogI2ZkZDcwMDtcXG59XFxuLmNvbG9yIC5jb2xvci1jb250YWluZXIgLml0ZW0tMyB7XFxuICBiYWNrZ3JvdW5kOiAjZmQwMDAwO1xcbn1cXG4uY29sb3IgLmNvbG9yLWNvbnRhaW5lciAuaXRlbS00IHtcXG4gIGJhY2tncm91bmQ6ICMyMjk5ZWI7XFxufVxcbi5jb2xvciAuY29sb3ItY29udGFpbmVyIC5pdGVtLTUge1xcbiAgYmFja2dyb3VuZDogIzA4YWEwNTtcXG59XFxuXFxuLnNpemUge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi5zaXplIGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnNpemUgLnNpemUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc2l6ZSAuc2l6ZS1jb250YWluZXIgLmNvbnRhaW5lci1pdGVtIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5zaXplIC5zaXplLWNvbnRhaW5lciAuc2l6ZS1pdGVtIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmNkO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDdweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2l6ZSAuc2l6ZS1jb250YWluZXIgLnNpemUtaXRlbTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLwn5e4XFxcIjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUwJTtcXG4gIGJvdHRvbTogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcXG59XFxuLnNpemUgLnNpemUtY29udGFpbmVyIC5zaXplLWl0ZW06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5mYXZvcml0ZSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLmZhdm9yaXRlIC5jb250YWluZXItZmF2b3JpdGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLmZhdm9yaXRlIC5jb250YWluZXItZmF2b3JpdGUgLmZhdm9yaXRlLWl0ZW0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2Y2Q7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogN3B4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5mYXZvcml0ZSAuY29udGFpbmVyLWZhdm9yaXRlIC5mYXZvcml0ZS1pdGVtOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIvCfl7hcXFwiO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTAlO1xcbiAgYm90dG9tOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcbn1cXG4uZmF2b3JpdGUgLmNvbnRhaW5lci1mYXZvcml0ZSAuZmF2b3JpdGUtaXRlbTpjaGVja2VkOjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnN1Y3NzZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMjVweCAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiA0MHB4O1xcbn1cXG4uc3Vjc3NlcyAuYXBwbHktYnRuIHtcXG4gIHdpZHRoOiAxODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3RlcHBlXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5zdWNzc2VzIC5hcHBseS1idG46aG92ZXIge1xcbiAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAudGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDUwcHg7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC50aXRsZSBoMiB7XFxuICBtYXJnaW46IDIwcHggMCAyMHB4IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIk5ldWNoYS1SZWd1bGFyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLm1lc3NhZ2UgLm1lc3NhZ2UtaXRlbSB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSg2NywgMTA0LCAxMDYsIDAuNyk7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiAyNXB4O1xcbiAgcm93LWdhcDogMjVweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50IHtcXG4gIHdpZHRoOiAyMjVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMCA1MHB4IDA7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1jb250ZW50IGg0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmV1Y2hhLVJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCAuaWNvbi10b3ktY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCAuaWNvbi10b3ktY29udGFpbmVyIC5pY29uLXRveSB7XFxuICB3aWR0aDogMTEwcHg7XFxuICBoZWlnaHQ6IDExMHB4O1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCAuZGF0YS10b3kge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcm93LWdhcDogMTBweDtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudCAuZGF0YS10b3kgbGkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdGVwcGVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5hY3RpdmUtdG95IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgYm9yZGVyOiAjNGNhZjUwIHNvbGlkIDVweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsIHJnYmEoNzAsIDEwOSwgMTE0LCAwLjQpIDEwMCUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjc1KTtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsIHJnYmEoMTc5LCAyNDYsIDI1NSwgMC40KSAxMDAlKTtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyIC5jb250YWluZXItY29udGVudDpob3ZlciAuaWNvbi10b3ktY29udGFpbmVyIC5pY29uLXRveSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIC5jb2xsZWN0aW9uLWNvbnRhaW5lciAuYWN0aXZlLXRveTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IHJnYmEoNzYsIDE3NSwgODAsIDAuNzUpO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXIgLm1lc3NhZ2VfYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTJweDtcXG59XFxuLnRveXMtY29sbGVjdGlvbi1jb250YWluZXIgLmNvbGxlY3Rpb24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4udG95cy1jb2xsZWN0aW9uLWNvbnRhaW5lciAuY29sbGVjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzY4NmE7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVwiLFwiLyrQntCx0L3Rg9C70LXQvdC40LUqL1xcclxcbip7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcbn1cXHJcXG4qLCo6YmVmb3JlLCo6YWZ0ZXJ7XFxyXFxuXFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46Zm9jdXMsOmFjdGl2ZXtvdXRsaW5lOiBub25lO31cXHJcXG5hOmZvY3VzLGE6YWN0aXZle291dGxpbmU6IG5vbmU7fVxcclxcbm5hdixmb290ZXIsaGVhZGVyLGFzaWRle2Rpc3BsYXk6IGJsb2NrO31cXHJcXG5odG1sLGJvZHl7XFxyXFxuXFx0Ly8gaGVpZ2h0OiAxMDAlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRmb250LXNpemU6IDEwcHg7XFxyXFxuXFx0LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG59XFxyXFxuaW5wdXQsYnV0dG9uLHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7fVxcclxcbmlucHV0OjotbXMtY2xlYXJ7ZGlzcGxheTogbm9uZTt9XFxyXFxuYnV0dG9ue2N1cnNvcjogcG9pbnRlcjt9XFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtwYWRkaW5nOjA7Ym9yZGVyOjA7fVxcclxcbmEsIGE6dmlzaXRlZHt0ZXh0LWRlY29yYXRpb246IG5vbmU7fVxcclxcbmE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOiBub25lO31cXHJcXG51bCBsaXtsaXN0LXN0eWxlOiBub25lO31cXHJcXG5pbWd7dmVydGljYWwtYWxpZ246IHRvcDt9XFxyXFxuaDEsaDIsaDMsaDQsaDUsaDZ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6IDQwMDt9XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLSovXCIsXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInO1xcclxcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9OZXVjaGEtUmVndWxhci50dGYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9TdGVwcGUudHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cIixcIm1haW4ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xcclxcbiAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLmpwZyk7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1nYW1lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vLyAubWFpbi1jb250YWluZXIge1xcclxcbi8vICAgYmFja2dyb3VuZDogIzE5MmYyZDtcXHJcXG4vLyB9XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtZ2FtZSB7XFxyXFxuICAudG95cy1jaXJjbGUtbGVmdCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAyMCU7XFxyXFxuICAgIHdpZHRoOiAyMS43NzF2dztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDM5Ljg4NiU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy8xLnBuZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG95cy1jaXJjbGUtcmlnaHQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTAlO1xcclxcbiAgICByaWdodDogMjglO1xcclxcbiAgICB3aWR0aDogMTIuNzcxdnc7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMy4zMzQlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvMi5wbmcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlLWNvbnRlaW5lciB7XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICAgIHBhZGRpbmc6IDY3cHggODVweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXNpemU6IDUzcHg7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDU4cHg7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxyXFxuICAgICAgICAxMTguODglIDYwNi44NiUgYXQgMCUgMCUsXFxyXFxuICAgICAgICByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsXFxyXFxuICAgICAgICByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJVxcclxcbiAgICAgICk7XFxyXFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zdGFydCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA1NHB4O1xcclxcbiAgICB0b3A6IDcwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICAgIDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSxcXHJcXG4gICAgICByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsXFxyXFxuICAgICAgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCVcXHJcXG4gICAgKTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3RhcnQ6aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiA4MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MmYyZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAubGVmdC1lbGVtZW50IHtcXHJcXG4gICAgcCB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICAgIG9wYWNpdHk6IDcwJTtcXHJcXG4gICAgICBzcGFuIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLnJpZ2h0LWVsZW1lbnQge1xcclxcbiAgICBhIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJVxcclxcbiAgICAgICAgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvcnNfc2Nob29sX2pzLnBuZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgLndyYXBwZXIge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLnRveXMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b3lzLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ1MHB4IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgY29sdW1uLWdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1jb250ZWluZXIge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1jb250YWluZXItd3JhcHBlciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWNvbnRhaW5lci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItY29udGFpbmVyLWNvbnRlbnQge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbiAgLmF1ZGlvIHtcXHJcXG4gICAgd2lkdGg6IDM2cHg7XFxyXFxuICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMDAuM3M7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvYXVkaW8uc3ZnKTtcXHJcXG4gIH1cXHJcXG4gIC5hdWRpbzpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDc1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbm93IHtcXHJcXG4gICAgd2lkdGg6IDM2cHg7XFxyXFxuICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMDAuM3M7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvc25vdy5zdmcpO1xcclxcbiAgfVxcclxcbiAgLnNub3c6aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiA3NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VhcmNoIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAuc2VhcmNoLWl0ZW0ge1xcclxcbiAgICAgIHdpZHRoOiAyNjBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgICAgcGFkZGluZzogMCA1MHB4IDAgMjBweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICAgICAgMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLFxcclxcbiAgICAgICAgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLFxcclxcbiAgICAgICAgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCVcXHJcXG4gICAgICApO1xcclxcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwM2E5ZjQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5jbGVhbi1pY29uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2Nsb3NlLnN2Zyk7XFxyXFxuICB9XFxyXFxuICAuc2VhcmNoLWljb246aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiA3NSU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zb3J0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjb2x1bW4tZ2FwOiA0MHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHAge1xcclxcbiAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNvcnQtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMjcwcHg7XFxyXFxuICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICAgIDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSxcXHJcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsXFxyXFxuICAgICAgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCVcXHJcXG4gICAgKTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDNhOWY0O1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgICBwIHtcXHJcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jaG9vc2UtaXRlbSB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIHJpZ2h0OiAxNXB4O1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMDAuM3M7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlXFxyXFxuICAgICAgICB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvYXJyb3ctZG93bi5zdmcpO1xcclxcbiAgICB9XFxyXFxuICAgIC5jaG9vc2UtaXRlbTpob3ZlciB7XFxyXFxuICAgICAgb3BhY2l0eTogNzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hbGwtaXRlbSB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgbGVmdDogNSU7XFxyXFxuICAgICAgdG9wOiAxMTAlO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTU4NTc7XFxyXFxuICAgICAgLnNvcnQtaXRlbSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ05ldWNoYS1SZWd1bGFyJztcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuc29ydC1pdGVtOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjkzOTY7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zb3J0LWNhdGVnb3J5IHtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIC5jYXRlZ29yeS1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgLmFsbCB7XFxyXFxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2Y2Q7XFxyXFxuICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHRvcDogN3B4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXHJcXG4gICAgICAgIDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSxcXHJcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSxcXHJcXG4gICAgICAgIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlXFxyXFxuICAgICAgKTtcXHJcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hbGw6OmJlZm9yZSB7XFxyXFxuICAgICAgY29udGVudDogJ/Cfl7gnO1xcclxcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgcmlnaHQ6IDUwJTtcXHJcXG4gICAgICBib3R0b206IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxyXFxuICAgIH1cXHJcXG4gICAgLmFsbDpjaGVja2VkOjpiZWZvcmUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRveXMtZm9ybSB7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIGgzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgLmZvcm0taXRlbSB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIC5mb3JtLWljb24ge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5mb3JtLWljb246aG92ZXIge1xcclxcbiAgICAgICAgb3BhY2l0eTogODUlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuZm9ybS1pY29uX19hY3RpdmUge1xcclxcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoNTQlKSBzZXBpYSgxMDclKSBzYXR1cmF0ZSg5MDElKSBodWUtcm90YXRlKDI1ZGVnKVxcclxcbiAgICAgICAgICBicmlnaHRuZXNzKDE0MCUpIGNvbnRyYXN0KDkzJSk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5pY29uLTEge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCUgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2JlbGwuc3ZnKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmljb24tMiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNDJweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHRvcCAwIGxlZnQgMCAvIDEwMCUgMTAwJSB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvYmFsbC5zdmcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuaWNvbi0zIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy9jb25lLnN2Zyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5pY29uLTQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b3AgMCBsZWZ0IDAgLyAxMDAlIDEwMCVcXHJcXG4gICAgICAgICAgdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3Nub3dmbGFrZS5zdmcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuaWNvbi01IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIG5vLXJlcGVhdFxcclxcbiAgICAgICAgICB1cmwoLi4vYXNzZXRzL2ltYWdlcy9zdmcvc25vdy5zdmcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuaWNvbi02IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguLi9hc3NldHMvaW1hZ2VzL3N2Zy90b3kuc3ZnKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmljb24tbmFtZSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLypTbGlkZXIqL1xcclxcblxcclxcbm1haW4gLm5vVWktdGFyZ2V0IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI2YwZjBmMCwgMCAzcHggNnB4IC01cHggI2JiYjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubm9VaS1ob3Jpem9udGFsIHtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5ub1VpLWhhbmRsZTpiZWZvcmUsXFxyXFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDBweDtcXHJcXG4gIHdpZHRoOiAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZThlN2U2O1xcclxcbiAgbGVmdDogMTRweDtcXHJcXG4gIHRvcDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgcmlnaHQ6IC0xM3B4O1xcclxcbiAgdG9wOiAtNnB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSxcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICAgIDU3LjIzJSAyNDguMiUgYXQgMTA3LjE3JSAxMDQuMDIlLFxcclxcbiAgICAgIHJnYmEoMzQsIDE1MywgMjM1LCAwLjkyKSAwJSxcXHJcXG4gICAgICByZ2JhKDM0LCAxNTMsIDIzNSwgMC4wNykgMTAwJVxcclxcbiAgICApLFxcclxcbiAgICByYWRpYWwtZ3JhZGllbnQoXFxyXFxuICAgICAgMTA0LjIyJSAyMzAuOTQlIGF0IC00LjIyJSAwJSxcXHJcXG4gICAgICAjMjRjNWRiIDMuNjIlLFxcclxcbiAgICAgIHJnYmEoMzYsIDE5NywgMjE5LCAwLjI2KSA1NS4xJVxcclxcbiAgICApO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubm9VaS1jb25uZWN0IHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyNGM1ZGI7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm5vVWktYmFzZSxcXHJcXG4ubm9VaS1jb25uZWN0cyB7XFxyXFxuICB3aWR0aDogOTclO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubm9VaS10b29sdGlwIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4jcmFuZ2UteWVhciAubm9VaS10b29sdGlwIHtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3JhbmdlLXllYXIge1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLypTbGlkZXItRU5EKi9cXHJcXG5cXHJcXG4uY291bnQtY29weSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIGgzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG4gIC5jb3VudC1jb3B5LWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1pbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMjUlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIH1cXHJcXG4gIC5tYXgge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTI1JTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU3RlcHBlJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ueWVhci1wdXJjaGFzZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW46IDQwcHggMCAyMHB4IDA7XFxyXFxuICBoMyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxuICAueWVhci1wdXJjaGFzZS1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5taW4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTI1JTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB9XFxyXFxuICAubWF4IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEyNSU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbG9yIHtcXHJcXG4gIG1hcmdpbjogNDBweCAwIDIwcHggMDtcXHJcXG4gIGgzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb2xvci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICAuY29sb3ItaXRlbSB7XFxyXFxuICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgfVxcclxcbiAgICAuY29sb3ItaXRlbTpob3ZlciB7XFxyXFxuICAgICAgb3BhY2l0eTogNzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb2xvci1pdGVtX19hY3RpdmUge1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDJweCByZ2JhKDI1MywgMjE1LCAwLCAwLjgpO1xcclxcbiAgICB9XFxyXFxuICAgIC5pdGVtLTEge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxyXFxuICAgIH1cXHJcXG4gICAgLml0ZW0tMiB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogI2ZkZDcwMDtcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbS0zIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmQwMDAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5pdGVtLTQge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICMyMjk5ZWI7XFxyXFxuICAgIH1cXHJcXG4gICAgLml0ZW0tNSB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzA4YWEwNTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2l6ZSB7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIGgzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaXplLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgLmNvbnRhaW5lci1pdGVtIHtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXplLWl0ZW0ge1xcclxcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmNkO1xcclxcbiAgICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICB0b3A6IDdweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxyXFxuICAgICAgICAxMTguODglIDYwNi44NiUgYXQgMCUgMCUsXFxyXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsXFxyXFxuICAgICAgICByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJVxcclxcbiAgICAgICk7XFxyXFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc2l6ZS1pdGVtOjpiZWZvcmUge1xcclxcbiAgICAgIGNvbnRlbnQ6ICfwn5e4JztcXHJcXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgICAgYm90dG9tOiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcclxcbiAgICB9XFxyXFxuICAgIC5zaXplLWl0ZW06Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mYXZvcml0ZSB7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIC5jb250YWluZXItZmF2b3JpdGUge1xcclxcbiAgICBmb250LWZhbWlseTogJ1N0ZXBwZSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAuZmF2b3JpdGUtaXRlbSB7XFxyXFxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2Y2Q7XFxyXFxuICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHRvcDogN3B4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXHJcXG4gICAgICAgIDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSxcXHJcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSxcXHJcXG4gICAgICAgIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlXFxyXFxuICAgICAgKTtcXHJcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mYXZvcml0ZS1pdGVtOjpiZWZvcmUge1xcclxcbiAgICAgIGNvbnRlbnQ6ICfwn5e4JztcXHJcXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgICAgYm90dG9tOiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcclxcbiAgICB9XFxyXFxuICAgIC5mYXZvcml0ZS1pdGVtOmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3Vjc3NlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAyNXB4IDA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbHVtbi1nYXA6IDQwcHg7XFxyXFxuICAuYXBwbHktYnRuIHtcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXHJcXG4gICAgICAxMTguODglIDYwNi44NiUgYXQgMCUgMCUsXFxyXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLFxcclxcbiAgICAgIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlXFxyXFxuICAgICk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTdGVwcGUnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcHBseS1idG46aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiA3NSU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50b3lzLWNvbGxlY3Rpb24tY29udGFpbmVyIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAudGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiA1MHB4O1xcclxcbiAgICBoMiB7XFxyXFxuICAgICAgbWFyZ2luOiAyMHB4IDAgMjBweCA1MHB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhLVJlZ3VsYXInO1xcclxcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcclxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5jb2xsZWN0aW9uLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG5cXHJcXG4gICAgLm1lc3NhZ2Uge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgd2lkdGg6IDI3MHB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgICAubWVzc2FnZS1pdGVtIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY3LCAxMDQsIDEwNiwgMC43KTtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmFmYWZhO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAuY29sbGVjdGlvbi1jb250YWluZXItd3JhcHBlciB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBjb2x1bW4tZ2FwOiAyNXB4O1xcclxcbiAgICAgIHJvdy1nYXA6IDI1cHg7XFxyXFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFpbmVyLWNvbnRlbnQge1xcclxcbiAgICAgIHdpZHRoOiAyMjVweDtcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgIG1hcmdpbjogMTBweCAwIDUwcHggMDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxyXFxuICAgICAgICAxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLFxcclxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLFxcclxcbiAgICAgICAgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCVcXHJcXG4gICAgICApO1xcclxcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgICAgaDQge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOZXVjaGEtUmVndWxhcic7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuaWNvbi10b3ktY29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIC5pY29uLXRveSB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMTBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAxMTBweDtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmRhdGEtdG95IHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIHJvdy1nYXA6IDEwcHg7XFxyXFxuICAgICAgICBsaSB7XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3RlcHBlJztcXHJcXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWN0aXZlLXRveSB7XFxyXFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgICBwYWRkaW5nOiA1cHggNXB4O1xcclxcbiAgICAgIGJvcmRlcjogIzRjYWY1MCBzb2xpZCA1cHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICAgICAgMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSxcXHJcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAwJSxcXHJcXG4gICAgICAgIHJnYmEoNzAsIDEwOSwgMTE0LCAwLjQpIDEwMCVcXHJcXG4gICAgICApO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggcmdiYSg3NiwgMTc1LCA4MCwgMC43NSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhaW5lci1jb250ZW50OmhvdmVyIHtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxyXFxuICAgICAgICAxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLFxcclxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIDAlLFxcclxcbiAgICAgICAgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjQpIDEwMCVcXHJcXG4gICAgICApO1xcclxcbiAgICAgIC5pY29uLXRveS1jb250YWluZXIge1xcclxcbiAgICAgICAgLmljb24tdG95IHtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAuYWN0aXZlLXRveTpob3ZlciB7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjc1KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVzc2FnZV9hY3RpdmUge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb2xsZWN0aW9uLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb2xsZWN0aW9uLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbGxlY3Rpb24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzY4NmE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5ub1VpU2xpZGVyID0ge30pKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIGV4cG9ydHMuUGlwc01vZGUgPSB2b2lkIDA7XG4gICAgKGZ1bmN0aW9uIChQaXBzTW9kZSkge1xuICAgICAgICBQaXBzTW9kZVtcIlJhbmdlXCJdID0gXCJyYW5nZVwiO1xuICAgICAgICBQaXBzTW9kZVtcIlN0ZXBzXCJdID0gXCJzdGVwc1wiO1xuICAgICAgICBQaXBzTW9kZVtcIlBvc2l0aW9uc1wiXSA9IFwicG9zaXRpb25zXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiQ291bnRcIl0gPSBcImNvdW50XCI7XG4gICAgICAgIFBpcHNNb2RlW1wiVmFsdWVzXCJdID0gXCJ2YWx1ZXNcIjtcbiAgICB9KShleHBvcnRzLlBpcHNNb2RlIHx8IChleHBvcnRzLlBpcHNNb2RlID0ge30pKTtcbiAgICBleHBvcnRzLlBpcHNUeXBlID0gdm9pZCAwO1xuICAgIChmdW5jdGlvbiAoUGlwc1R5cGUpIHtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJOb25lXCJdID0gLTFdID0gXCJOb25lXCI7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTm9WYWx1ZVwiXSA9IDBdID0gXCJOb1ZhbHVlXCI7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTGFyZ2VWYWx1ZVwiXSA9IDFdID0gXCJMYXJnZVZhbHVlXCI7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiU21hbGxWYWx1ZVwiXSA9IDJdID0gXCJTbWFsbFZhbHVlXCI7XG4gICAgfSkoZXhwb3J0cy5QaXBzVHlwZSB8fCAoZXhwb3J0cy5QaXBzVHlwZSA9IHt9KSk7XG4gICAgLy9yZWdpb24gSGVscGVyIE1ldGhvZHNcbiAgICBmdW5jdGlvbiBpc1ZhbGlkRm9ybWF0dGVyKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkgJiYgdHlwZW9mIGVudHJ5LmZyb20gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpIHtcbiAgICAgICAgLy8gcGFydGlhbCBmb3JtYXR0ZXJzIG9ubHkgbmVlZCBhIHRvIGZ1bmN0aW9uIGFuZCBub3QgYSBmcm9tIGZ1bmN0aW9uXG4gICAgICAgIHJldHVybiB0eXBlb2YgZW50cnkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGVudHJ5LnRvID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWwpIHtcbiAgICAgICAgZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzU2V0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBCaW5kYWJsZSB2ZXJzaW9uXG4gICAgZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIFJlbW92ZXMgZHVwbGljYXRlcyBmcm9tIGFuIGFycmF5LlxuICAgIGZ1bmN0aW9uIHVuaXF1ZShhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXNbYV0gPyAodGhpc1thXSA9IHRydWUpIDogZmFsc2U7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgLy8gUm91bmQgYSB2YWx1ZSB0byB0aGUgY2xvc2VzdCAndG8nLlxuICAgIGZ1bmN0aW9uIGNsb3Nlc3QodmFsdWUsIHRvKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gdG8pICogdG87XG4gICAgfVxuICAgIC8vIEN1cnJlbnQgcG9zaXRpb24gb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXG4gICAgZnVuY3Rpb24gb2Zmc2V0KGVsZW0sIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIHZhciByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgICAgICAgdmFyIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgcGFnZU9mZnNldCA9IGdldFBhZ2VPZmZzZXQoZG9jKTtcbiAgICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGNvbnRhaW5zIGxlZnQgc2Nyb2xsIGluIENocm9tZSBvbiBBbmRyb2lkLlxuICAgICAgICAvLyBJIGhhdmVuJ3QgZm91bmQgYSBmZWF0dXJlIGRldGVjdGlvbiB0aGF0IHByb3ZlcyB0aGlzLiBXb3JzdCBjYXNlXG4gICAgICAgIC8vIHNjZW5hcmlvIG9uIG1pcy1tYXRjaDogdGhlICd0YXAnIGZlYXR1cmUgb24gaG9yaXpvbnRhbCBzbGlkZXJzIGJyZWFrcy5cbiAgICAgICAgaWYgKC93ZWJraXQuKkNocm9tZS4qTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcGFnZU9mZnNldC54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZW50YXRpb24gPyByZWN0LnRvcCArIHBhZ2VPZmZzZXQueSAtIGRvY0VsZW0uY2xpZW50VG9wIDogcmVjdC5sZWZ0ICsgcGFnZU9mZnNldC54IC0gZG9jRWxlbS5jbGllbnRMZWZ0O1xuICAgIH1cbiAgICAvLyBDaGVja3Mgd2hldGhlciBhIHZhbHVlIGlzIG51bWVyaWNhbC5cbiAgICBmdW5jdGlvbiBpc051bWVyaWMoYSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKGEpICYmIGlzRmluaXRlKGEpO1xuICAgIH1cbiAgICAvLyBTZXRzIGEgY2xhc3MgYW5kIHJlbW92ZXMgaXQgYWZ0ZXIgW2R1cmF0aW9uXSBtcy5cbiAgICBmdW5jdGlvbiBhZGRDbGFzc0ZvcihlbGVtZW50LCBjbGFzc05hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIExpbWl0cyBhIHZhbHVlIHRvIDAgLSAxMDBcbiAgICBmdW5jdGlvbiBsaW1pdChhKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihhLCAxMDApLCAwKTtcbiAgICB9XG4gICAgLy8gV3JhcHMgYSB2YXJpYWJsZSBhcyBhbiBhcnJheSwgaWYgaXQgaXNuJ3Qgb25lIHlldC5cbiAgICAvLyBOb3RlIHRoYXQgYW4gaW5wdXQgYXJyYXkgaXMgcmV0dXJuZWQgYnkgcmVmZXJlbmNlIVxuICAgIGZ1bmN0aW9uIGFzQXJyYXkoYSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSA/IGEgOiBbYV07XG4gICAgfVxuICAgIC8vIENvdW50cyBkZWNpbWFsc1xuICAgIGZ1bmN0aW9uIGNvdW50RGVjaW1hbHMobnVtU3RyKSB7XG4gICAgICAgIG51bVN0ciA9IFN0cmluZyhudW1TdHIpO1xuICAgICAgICB2YXIgcGllY2VzID0gbnVtU3RyLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgcmV0dXJuIHBpZWNlcy5sZW5ndGggPiAxID8gcGllY2VzWzFdLmxlbmd0aCA6IDA7XG4gICAgfVxuICAgIC8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNhZGRfY2xhc3NcbiAgICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QgJiYgIS9cXHMvLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NOYW1lICs9IFwiIFwiICsgY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNyZW1vdmVfY2xhc3NcbiAgICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QgJiYgIS9cXHMvLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxiKVwiICsgY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKSArIFwiKFxcXFxifCQpXCIsIFwiZ2lcIiksIFwiIFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBodHRwczovL3BsYWluanMuY29tL2phdmFzY3JpcHQvYXR0cmlidXRlcy9hZGRpbmctcmVtb3ZpbmctYW5kLXRlc3RpbmctZm9yLWNsYXNzZXMtOS9cbiAgICBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QgPyBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSA6IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgY2xhc3NOYW1lICsgXCJcXFxcYlwiKS50ZXN0KGVsLmNsYXNzTmFtZSk7XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvc2Nyb2xsWSNOb3Rlc1xuICAgIGZ1bmN0aW9uIGdldFBhZ2VPZmZzZXQoZG9jKSB7XG4gICAgICAgIHZhciBzdXBwb3J0UGFnZU9mZnNldCA9IHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgaXNDU1MxQ29tcGF0ID0gKGRvYy5jb21wYXRNb2RlIHx8IFwiXCIpID09PSBcIkNTUzFDb21wYXRcIjtcbiAgICAgICAgdmFyIHggPSBzdXBwb3J0UGFnZU9mZnNldFxuICAgICAgICAgICAgPyB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICAgICAgICAgIDogaXNDU1MxQ29tcGF0XG4gICAgICAgICAgICAgICAgPyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnRcbiAgICAgICAgICAgICAgICA6IGRvYy5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgIHZhciB5ID0gc3VwcG9ydFBhZ2VPZmZzZXRcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICA6IGlzQ1NTMUNvbXBhdFxuICAgICAgICAgICAgICAgID8gZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgICAgICAgICAgICA6IGRvYy5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIHdlIHByb3ZpZGUgYSBmdW5jdGlvbiB0byBjb21wdXRlIGNvbnN0YW50cyBpbnN0ZWFkXG4gICAgLy8gb2YgYWNjZXNzaW5nIHdpbmRvdy4qIGFzIHNvb24gYXMgdGhlIG1vZHVsZSBuZWVkcyBpdFxuICAgIC8vIHNvIHRoYXQgd2UgZG8gbm90IGNvbXB1dGUgYW55dGhpbmcgaWYgbm90IG5lZWRlZFxuICAgIGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZXZlbnRzIHRvIGJpbmQuIElFMTEgaW1wbGVtZW50cyBwb2ludGVyRXZlbnRzIHdpdGhvdXRcbiAgICAgICAgLy8gYSBwcmVmaXgsIHdoaWNoIGJyZWFrcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIElFMTAgaW1wbGVtZW50YXRpb24uXG4gICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBzdGFydDogXCJwb2ludGVyZG93blwiLFxuICAgICAgICAgICAgICAgIG1vdmU6IFwicG9pbnRlcm1vdmVcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwicG9pbnRlcnVwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIk1TUG9pbnRlckRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogXCJNU1BvaW50ZXJNb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCJNU1BvaW50ZXJVcFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJtb3VzZWRvd24gdG91Y2hzdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlOiBcIm1vdXNlbW92ZSB0b3VjaG1vdmVcIixcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBcIm1vdXNldXAgdG91Y2hlbmRcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4gICAgLy8gSXNzdWUgIzc4NVxuICAgIGZ1bmN0aW9uIGdldFN1cHBvcnRzUGFzc2l2ZSgpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgbnVsbCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LkNTUyAmJiBDU1Muc3VwcG9ydHMgJiYgQ1NTLnN1cHBvcnRzKFwidG91Y2gtYWN0aW9uXCIsIFwibm9uZVwiKTtcbiAgICB9XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBSYW5nZSBDYWxjdWxhdGlvblxuICAgIC8vIERldGVybWluZSB0aGUgc2l6ZSBvZiBhIHN1Yi1yYW5nZSBpbiByZWxhdGlvbiB0byBhIGZ1bGwgcmFuZ2UuXG4gICAgZnVuY3Rpb24gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpIHtcbiAgICAgICAgcmV0dXJuIDEwMCAvIChwYiAtIHBhKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIEhvdyBtYW55IHBlcmNlbnQgaXMgdGhpcyB2YWx1ZSBvZiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIGZyb21QZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSwgc3RhcnRSYW5nZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICogMTAwKSAvIChyYW5nZVtzdGFydFJhbmdlICsgMV0gLSByYW5nZVtzdGFydFJhbmdlXSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBXaGVyZSBpcyB0aGlzIHZhbHVlIG9uIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gdG9QZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnJvbVBlcmNlbnRhZ2UocmFuZ2UsIHJhbmdlWzBdIDwgMCA/IHZhbHVlICsgTWF0aC5hYnMocmFuZ2VbMF0pIDogdmFsdWUgLSByYW5nZVswXSwgMCk7XG4gICAgfVxuICAgIC8vICh2YWx1ZSkgSG93IG11Y2ggaXMgdGhpcyBwZXJjZW50YWdlIG9uIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICogKHJhbmdlWzFdIC0gcmFuZ2VbMF0pKSAvIDEwMCArIHJhbmdlWzBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRKKHZhbHVlLCBhcnIpIHtcbiAgICAgICAgdmFyIGogPSAxO1xuICAgICAgICB3aGlsZSAodmFsdWUgPj0gYXJyW2pdKSB7XG4gICAgICAgICAgICBqICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGo7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBJbnB1dCBhIHZhbHVlLCBmaW5kIHdoZXJlLCBvbiBhIHNjYWxlIG9mIDAtMTAwLCBpdCBhcHBsaWVzLlxuICAgIGZ1bmN0aW9uIHRvU3RlcHBpbmcoeFZhbCwgeFBjdCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID49IHhWYWwuc2xpY2UoLTEpWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gMTAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFZhbCk7XG4gICAgICAgIHZhciB2YSA9IHhWYWxbaiAtIDFdO1xuICAgICAgICB2YXIgdmIgPSB4VmFsW2pdO1xuICAgICAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIHBiID0geFBjdFtqXTtcbiAgICAgICAgcmV0dXJuIHBhICsgdG9QZXJjZW50YWdlKFt2YSwgdmJdLCB2YWx1ZSkgLyBzdWJSYW5nZVJhdGlvKHBhLCBwYik7XG4gICAgfVxuICAgIC8vICh2YWx1ZSkgSW5wdXQgYSBwZXJjZW50YWdlLCBmaW5kIHdoZXJlIGl0IGlzIG9uIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXG4gICAgZnVuY3Rpb24gZnJvbVN0ZXBwaW5nKHhWYWwsIHhQY3QsIHZhbHVlKSB7XG4gICAgICAgIC8vIFRoZXJlIGlzIG5vIHJhbmdlIGdyb3VwIHRoYXQgZml0cyAxMDBcbiAgICAgICAgaWYgKHZhbHVlID49IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHhWYWwuc2xpY2UoLTEpWzBdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgICAgIHZhciB2YSA9IHhWYWxbaiAtIDFdO1xuICAgICAgICB2YXIgdmIgPSB4VmFsW2pdO1xuICAgICAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIHBiID0geFBjdFtqXTtcbiAgICAgICAgcmV0dXJuIGlzUGVyY2VudGFnZShbdmEsIHZiXSwgKHZhbHVlIC0gcGEpICogc3ViUmFuZ2VSYXRpbyhwYSwgcGIpKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIEdldCB0aGUgc3RlcCB0aGF0IGFwcGxpZXMgYXQgYSBjZXJ0YWluIHZhbHVlLlxuICAgIGZ1bmN0aW9uIGdldFN0ZXAoeFBjdCwgeFN0ZXBzLCBzbmFwLCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgICAgIHZhciBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBiID0geFBjdFtqXTtcbiAgICAgICAgLy8gSWYgJ3NuYXAnIGlzIHNldCwgc3RlcHMgYXJlIHVzZWQgYXMgZml4ZWQgcG9pbnRzIG9uIHRoZSBzbGlkZXIuXG4gICAgICAgIGlmIChzbmFwKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IHBvc2l0aW9uLCBhIG9yIGIuXG4gICAgICAgICAgICBpZiAodmFsdWUgLSBhID4gKGIgLSBhKSAvIDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICAgIGlmICgheFN0ZXBzW2ogLSAxXSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4UGN0W2ogLSAxXSArIGNsb3Nlc3QodmFsdWUgLSB4UGN0W2ogLSAxXSwgeFN0ZXBzW2ogLSAxXSk7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gU3BlY3RydW1cbiAgICB2YXIgU3BlY3RydW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFNwZWN0cnVtKGVudHJ5LCBzbmFwLCBzaW5nbGVTdGVwKSB7XG4gICAgICAgICAgICB0aGlzLnhQY3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFZhbCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54U3RlcHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gW107XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwID0gW107XG4gICAgICAgICAgICB0aGlzLnhTdGVwcyA9IFtzaW5nbGVTdGVwIHx8IGZhbHNlXTtcbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gW2ZhbHNlXTtcbiAgICAgICAgICAgIHRoaXMuc25hcCA9IHNuYXA7XG4gICAgICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgICAgICB2YXIgb3JkZXJlZCA9IFtdO1xuICAgICAgICAgICAgLy8gTWFwIHRoZSBvYmplY3Qga2V5cyB0byBhbiBhcnJheS5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVudHJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIG9yZGVyZWQucHVzaChbYXNBcnJheShlbnRyeVtpbmRleF0pLCBpbmRleF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTb3J0IGFsbCBlbnRyaWVzIGJ5IHZhbHVlIChudW1lcmljIHNvcnQpLlxuICAgICAgICAgICAgb3JkZXJlZC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMF1bMF0gLSBiWzBdWzBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGFsbCBlbnRyaWVzIHRvIHN1YnJhbmdlcy5cbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IG9yZGVyZWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFbnRyeVBvaW50KG9yZGVyZWRbaW5kZXhdWzFdLCBvcmRlcmVkW2luZGV4XVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgYWN0dWFsIHN0ZXAgdmFsdWVzLlxuICAgICAgICAgICAgLy8geFN0ZXBzIGlzIHNvcnRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB4UGN0IGFuZCB4VmFsLlxuICAgICAgICAgICAgdGhpcy54TnVtU3RlcHMgPSB0aGlzLnhTdGVwcy5zbGljZSgwKTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgYWxsIG51bWVyaWMgc3RlcHMgdG8gdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIHN1YnJhbmdlIHRoZXkgcmVwcmVzZW50LlxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgdGhpcy54TnVtU3RlcHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGVwUG9pbnQoaW5kZXgsIHRoaXMueE51bVN0ZXBzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldERpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2VzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy54TnVtU3RlcHMubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlc1tpbmRleF0gPSBmcm9tUGVyY2VudGFnZSh0aGlzLnhWYWwsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VzO1xuICAgICAgICB9O1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb3ZlciB0aGUgd2hvbGUgc2NhbGUgb2YgcmFuZ2VzLlxuICAgICAgICAvLyBkaXJlY3Rpb246IDAgPSBiYWNrd2FyZHMgLyAxID0gZm9yd2FyZHNcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldEFic29sdXRlRGlzdGFuY2UgPSBmdW5jdGlvbiAodmFsdWUsIGRpc3RhbmNlcywgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgeFBjdF9pbmRleCA9IDA7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcmFuZ2Ugd2hlcmUgdG8gc3RhcnQgY2FsY3VsYXRpb25cbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAodmFsdWUgPiB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHhQY3RfaW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gdGhpcy54UGN0W3RoaXMueFBjdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgIHhQY3RfaW5kZXggPSB0aGlzLnhQY3QubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGxvb2tpbmcgYmFja3dhcmRzIGFuZCB0aGUgdmFsdWUgaXMgZXhhY3RseSBhdCBhIHJhbmdlIHNlcGFyYXRvciB0aGVuIGxvb2sgb25lIHJhbmdlIGZ1cnRoZXJcbiAgICAgICAgICAgIGlmICghZGlyZWN0aW9uICYmIHZhbHVlID09PSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgeFBjdF9pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgICAgIHZhciByZXN0X2ZhY3RvciA9IDE7XG4gICAgICAgICAgICB2YXIgcmVzdF9yZWxfZGlzdGFuY2UgPSBkaXN0YW5jZXNbeFBjdF9pbmRleF07XG4gICAgICAgICAgICB2YXIgcmFuZ2VfcGN0ID0gMDtcbiAgICAgICAgICAgIHZhciByZWxfcmFuZ2VfZGlzdGFuY2UgPSAwO1xuICAgICAgICAgICAgdmFyIGFic19kaXN0YW5jZV9jb3VudGVyID0gMDtcbiAgICAgICAgICAgIHZhciByYW5nZV9jb3VudGVyID0gMDtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB3aGF0IHBhcnQgb2YgdGhlIHN0YXJ0IHJhbmdlIHRoZSB2YWx1ZSBpc1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9ICh2YWx1ZSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHZhbHVlKSAvICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvIHVudGlsIHRoZSBjb21wbGV0ZSBkaXN0YW5jZSBhY3Jvc3MgcmFuZ2VzIGlzIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIHdoaWxlIChyZXN0X3JlbF9kaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnRhZ2Ugb2YgdG90YWwgcmFuZ2VcbiAgICAgICAgICAgICAgICByYW5nZV9wY3QgPSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDEgKyByYW5nZV9jb3VudGVyXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl07XG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IGlmIHRoZSBtYXJnaW4sIHBhZGRpbmcgb3IgbGltaXQgaXMgbGFyZ2VyIHRoZW4gdGhlIGN1cnJlbnQgcmFuZ2UgYW5kIGNhbGN1bGF0ZVxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3IgKyAxMDAgLSBzdGFydF9mYWN0b3IgKiAxMDAgPiAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbGFyZ2VyIHRoZW4gdGFrZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvZiB0aGUgd2hvbGUgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gcmFuZ2VfcGN0ICogc3RhcnRfZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXN0IGZhY3RvciBvZiByZWxhdGl2ZSBwZXJjZW50dWFsIGRpc3RhbmNlIHN0aWxsIHRvIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgcmVzdF9mYWN0b3IgPSAocmVzdF9yZWxfZGlzdGFuY2UgLSAxMDAgKiBzdGFydF9mYWN0b3IpIC8gZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHN0YXJ0IGZhY3RvciB0byAxIGFzIGZvciBuZXh0IHJhbmdlIGl0IGRvZXMgbm90IGFwcGx5LlxuICAgICAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc21hbGxlciBvciBlcXVhbCB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIGNhbGN1bGF0ZSBwZXJjZW50dWFsIHBhcnQgb2YgdGhhdCByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZWxfcmFuZ2VfZGlzdGFuY2UgPSAoKGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByYW5nZV9wY3QpIC8gMTAwKSAqIHJlc3RfZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAvLyBObyByZXN0IGxlZnQgYXMgdGhlIHJlc3QgZml0cyBpbiBjdXJyZW50IHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyIC0gcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBMaW1pdCByYW5nZSB0byBmaXJzdCByYW5nZSB3aGVuIGRpc3RhbmNlIGJlY29tZXMgb3V0c2lkZSBvZiBtaW5pbXVtIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhQY3QubGVuZ3RoICsgcmFuZ2VfY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZV9jb3VudGVyLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFic19kaXN0YW5jZV9jb3VudGVyID0gYWJzX2Rpc3RhbmNlX2NvdW50ZXIgKyByZWxfcmFuZ2VfZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIExpbWl0IHJhbmdlIHRvIGxhc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWF4aW11bSByYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCAtIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VfY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlc3Qgb2YgcmVsYXRpdmUgcGVyY2VudHVhbCBkaXN0YW5jZSBzdGlsbCB0byBiZSBjYWxjdWxhdGVkXG4gICAgICAgICAgICAgICAgcmVzdF9yZWxfZGlzdGFuY2UgPSBkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBhYnNfZGlzdGFuY2VfY291bnRlcjtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLnRvU3RlcHBpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZnJvbVN0ZXBwaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbVN0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXRTdGVwID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGdldFN0ZXAodGhpcy54UGN0LCB0aGlzLnhTdGVwcywgdGhpcy5zbmFwLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREZWZhdWx0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSwgaXNEb3duLCBzaXplKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgICAgICAvLyBXaGVuIGF0IHRoZSB0b3Agb3Igc3RlcHBpbmcgZG93biwgbG9vayBhdCB0aGUgcHJldmlvdXMgc3ViLXJhbmdlXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDEwMCB8fCAoaXNEb3duICYmIHZhbHVlID09PSB0aGlzLnhQY3RbaiAtIDFdKSkge1xuICAgICAgICAgICAgICAgIGogPSBNYXRoLm1heChqIC0gMSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMueFZhbFtqXSAtIHRoaXMueFZhbFtqIC0gMV0pIC8gc2l6ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldE5lYXJieVN0ZXBzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0ZXBCZWZvcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAyXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDJdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqIC0gMl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXNTdGVwOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2ogLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDFdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdGVwQWZ0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2pdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbal1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY291bnRTdGVwRGVjaW1hbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RlcERlY2ltYWxzID0gdGhpcy54TnVtU3RlcHMubWFwKGNvdW50RGVjaW1hbHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIHN0ZXBEZWNpbWFscyk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYXNOb1NpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy54VmFsWzBdID09PSB0aGlzLnhWYWxbdGhpcy54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICB9O1xuICAgICAgICAvLyBPdXRzaWRlIHRlc3RpbmdcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmNvbnZlcnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0ZXAodGhpcy50b1N0ZXBwaW5nKHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYW5kbGVFbnRyeVBvaW50ID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2U7XG4gICAgICAgICAgICAvLyBDb3ZlcnQgbWluL21heCBzeW50YXggdG8gMCBhbmQgMTAwLlxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gcGFyc2VGbG9hdChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgY29ycmVjdCBpbnB1dC5cbiAgICAgICAgICAgIGlmICghaXNOdW1lcmljKHBlcmNlbnRhZ2UpIHx8ICFpc051bWVyaWModmFsdWVbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyB2YWx1ZSBpc24ndCBudW1lcmljLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0b3JlIHZhbHVlcy5cbiAgICAgICAgICAgIHRoaXMueFBjdC5wdXNoKHBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgdGhpcy54VmFsLnB1c2godmFsdWVbMF0pO1xuICAgICAgICAgICAgdmFyIHZhbHVlMSA9IE51bWJlcih2YWx1ZVsxXSk7XG4gICAgICAgICAgICAvLyBOYU4gd2lsbCBldmFsdWF0ZSB0byBmYWxzZSB0b28sIGJ1dCB0byBrZWVwXG4gICAgICAgICAgICAvLyBsb2dnaW5nIGNsZWFyLCBzZXQgc3RlcCBleHBsaWNpdGx5LiBNYWtlIHN1cmVcbiAgICAgICAgICAgIC8vIG5vdCB0byBvdmVycmlkZSB0aGUgJ3N0ZXAnIHNldHRpbmcgd2l0aCBmYWxzZS5cbiAgICAgICAgICAgIGlmICghcGVyY2VudGFnZSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFsdWUxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnhTdGVwc1swXSA9IHZhbHVlMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhTdGVwcy5wdXNoKGlzTmFOKHZhbHVlMSkgPyBmYWxzZSA6IHZhbHVlMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwLnB1c2goMCk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYW5kbGVTdGVwUG9pbnQgPSBmdW5jdGlvbiAoaSwgbikge1xuICAgICAgICAgICAgLy8gSWdub3JlICdmYWxzZScgc3RlcHBpbmcuXG4gICAgICAgICAgICBpZiAoIW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGVwIG92ZXIgemVyby1sZW5ndGggcmFuZ2VzICgjOTQ4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnhWYWxbaV0gPT09IHRoaXMueFZhbFtpICsgMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhTdGVwc1tpXSA9IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSB0aGlzLnhWYWxbaV07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmFjdG9yIHRvIHJhbmdlIHJhdGlvXG4gICAgICAgICAgICB0aGlzLnhTdGVwc1tpXSA9XG4gICAgICAgICAgICAgICAgZnJvbVBlcmNlbnRhZ2UoW3RoaXMueFZhbFtpXSwgdGhpcy54VmFsW2kgKyAxXV0sIG4sIDApIC8gc3ViUmFuZ2VSYXRpbyh0aGlzLnhQY3RbaV0sIHRoaXMueFBjdFtpICsgMV0pO1xuICAgICAgICAgICAgdmFyIHRvdGFsU3RlcHMgPSAodGhpcy54VmFsW2kgKyAxXSAtIHRoaXMueFZhbFtpXSkgLyB0aGlzLnhOdW1TdGVwc1tpXTtcbiAgICAgICAgICAgIHZhciBoaWdoZXN0U3RlcCA9IE1hdGguY2VpbChOdW1iZXIodG90YWxTdGVwcy50b0ZpeGVkKDMpKSAtIDEpO1xuICAgICAgICAgICAgdmFyIHN0ZXAgPSB0aGlzLnhWYWxbaV0gKyB0aGlzLnhOdW1TdGVwc1tpXSAqIGhpZ2hlc3RTdGVwO1xuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtpXSA9IHN0ZXA7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBTcGVjdHJ1bTtcbiAgICB9KCkpO1xuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gT3B0aW9uc1xuICAgIC8qXHRFdmVyeSBpbnB1dCBvcHRpb24gaXMgdGVzdGVkIGFuZCBwYXJzZWQuIFRoaXMgd2lsbCBwcmV2ZW50XG4gICAgICAgIGVuZGxlc3MgdmFsaWRhdGlvbiBpbiBpbnRlcm5hbCBtZXRob2RzLiBUaGVzZSB0ZXN0cyBhcmVcbiAgICAgICAgc3RydWN0dXJlZCB3aXRoIGFuIGl0ZW0gZm9yIGV2ZXJ5IG9wdGlvbiBhdmFpbGFibGUuIEFuXG4gICAgICAgIG9wdGlvbiBjYW4gYmUgbWFya2VkIGFzIHJlcXVpcmVkIGJ5IHNldHRpbmcgdGhlICdyJyBmbGFnLlxuICAgICAgICBUaGUgdGVzdGluZyBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAgICAgICAgICAgIC0gVGhlIHByb3ZpZGVkIHZhbHVlIGZvciB0aGUgb3B0aW9uO1xuICAgICAgICAgICAgLSBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBvYmplY3Q7XG4gICAgICAgICAgICAtIFRoZSBuYW1lIGZvciB0aGUgb3B0aW9uO1xuXG4gICAgICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIHJldHVybnMgZmFsc2Ugd2hlbiBhbiBlcnJvciBpcyBkZXRlY3RlZCxcbiAgICAgICAgb3IgdHJ1ZSB3aGVuIGV2ZXJ5dGhpbmcgaXMgT0suIEl0IGNhbiBhbHNvIG1vZGlmeSB0aGUgb3B0aW9uXG4gICAgICAgIG9iamVjdCwgdG8gbWFrZSBzdXJlIGFsbCB2YWx1ZXMgY2FuIGJlIGNvcnJlY3RseSBsb29wZWQgZWxzZXdoZXJlLiAqL1xuICAgIC8vcmVnaW9uIERlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRGb3JtYXR0ZXIgPSB7XG4gICAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHZhbHVlLnRvRml4ZWQoMik7XG4gICAgICAgIH0sXG4gICAgICAgIGZyb206IE51bWJlclxuICAgIH07XG4gICAgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgICAgIHRhcmdldDogXCJ0YXJnZXRcIixcbiAgICAgICAgYmFzZTogXCJiYXNlXCIsXG4gICAgICAgIG9yaWdpbjogXCJvcmlnaW5cIixcbiAgICAgICAgaGFuZGxlOiBcImhhbmRsZVwiLFxuICAgICAgICBoYW5kbGVMb3dlcjogXCJoYW5kbGUtbG93ZXJcIixcbiAgICAgICAgaGFuZGxlVXBwZXI6IFwiaGFuZGxlLXVwcGVyXCIsXG4gICAgICAgIHRvdWNoQXJlYTogXCJ0b3VjaC1hcmVhXCIsXG4gICAgICAgIGhvcml6b250YWw6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICB2ZXJ0aWNhbDogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImJhY2tncm91bmRcIixcbiAgICAgICAgY29ubmVjdDogXCJjb25uZWN0XCIsXG4gICAgICAgIGNvbm5lY3RzOiBcImNvbm5lY3RzXCIsXG4gICAgICAgIGx0cjogXCJsdHJcIixcbiAgICAgICAgcnRsOiBcInJ0bFwiLFxuICAgICAgICB0ZXh0RGlyZWN0aW9uTHRyOiBcInR4dC1kaXItbHRyXCIsXG4gICAgICAgIHRleHREaXJlY3Rpb25SdGw6IFwidHh0LWRpci1ydGxcIixcbiAgICAgICAgZHJhZ2dhYmxlOiBcImRyYWdnYWJsZVwiLFxuICAgICAgICBkcmFnOiBcInN0YXRlLWRyYWdcIixcbiAgICAgICAgdGFwOiBcInN0YXRlLXRhcFwiLFxuICAgICAgICBhY3RpdmU6IFwiYWN0aXZlXCIsXG4gICAgICAgIHRvb2x0aXA6IFwidG9vbHRpcFwiLFxuICAgICAgICBwaXBzOiBcInBpcHNcIixcbiAgICAgICAgcGlwc0hvcml6b250YWw6IFwicGlwcy1ob3Jpem9udGFsXCIsXG4gICAgICAgIHBpcHNWZXJ0aWNhbDogXCJwaXBzLXZlcnRpY2FsXCIsXG4gICAgICAgIG1hcmtlcjogXCJtYXJrZXJcIixcbiAgICAgICAgbWFya2VySG9yaXpvbnRhbDogXCJtYXJrZXItaG9yaXpvbnRhbFwiLFxuICAgICAgICBtYXJrZXJWZXJ0aWNhbDogXCJtYXJrZXItdmVydGljYWxcIixcbiAgICAgICAgbWFya2VyTm9ybWFsOiBcIm1hcmtlci1ub3JtYWxcIixcbiAgICAgICAgbWFya2VyTGFyZ2U6IFwibWFya2VyLWxhcmdlXCIsXG4gICAgICAgIG1hcmtlclN1YjogXCJtYXJrZXItc3ViXCIsXG4gICAgICAgIHZhbHVlOiBcInZhbHVlXCIsXG4gICAgICAgIHZhbHVlSG9yaXpvbnRhbDogXCJ2YWx1ZS1ob3Jpem9udGFsXCIsXG4gICAgICAgIHZhbHVlVmVydGljYWw6IFwidmFsdWUtdmVydGljYWxcIixcbiAgICAgICAgdmFsdWVOb3JtYWw6IFwidmFsdWUtbm9ybWFsXCIsXG4gICAgICAgIHZhbHVlTGFyZ2U6IFwidmFsdWUtbGFyZ2VcIixcbiAgICAgICAgdmFsdWVTdWI6IFwidmFsdWUtc3ViXCJcbiAgICB9O1xuICAgIC8vIE5hbWVzcGFjZXMgb2YgaW50ZXJuYWwgZXZlbnQgbGlzdGVuZXJzXG4gICAgdmFyIElOVEVSTkFMX0VWRU5UX05TID0ge1xuICAgICAgICB0b29sdGlwczogXCIuX190b29sdGlwc1wiLFxuICAgICAgICBhcmlhOiBcIi5fX2FyaWFcIlxuICAgIH07XG4gICAgLy9lbmRyZWdpb25cbiAgICBmdW5jdGlvbiB0ZXN0U3RlcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3N0ZXAnIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgc3RlcCBvcHRpb24gY2FuIHN0aWxsIGJlIHVzZWQgdG8gc2V0IHN0ZXBwaW5nXG4gICAgICAgIC8vIGZvciBsaW5lYXIgc2xpZGVycy4gT3ZlcndyaXR0ZW4gaWYgc2V0IGluICdyYW5nZScuXG4gICAgICAgIHBhcnNlZC5zaW5nbGVTdGVwID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZFBhZ2VNdWx0aXBsaWVyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRQYWdlTXVsdGlwbGllcicgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZFBhZ2VNdWx0aXBsaWVyID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZE11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZE11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRNdWx0aXBsaWVyID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZERlZmF1bHRTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmREZWZhdWx0U3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZERlZmF1bHRTdGVwID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RSYW5nZShwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIEZpbHRlciBpbmNvcnJlY3QgaW5wdXQuXG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdyYW5nZScgaXMgbm90IGFuIG9iamVjdC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2F0Y2ggbWlzc2luZyBzdGFydCBvciBlbmQuXG4gICAgICAgIGlmIChlbnRyeS5taW4gPT09IHVuZGVmaW5lZCB8fCBlbnRyeS5tYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogTWlzc2luZyAnbWluJyBvciAnbWF4JyBpbiAncmFuZ2UnLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuc3BlY3RydW0gPSBuZXcgU3BlY3RydW0oZW50cnksIHBhcnNlZC5zbmFwIHx8IGZhbHNlLCBwYXJzZWQuc2luZ2xlU3RlcCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RTdGFydChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGVudHJ5ID0gYXNBcnJheShlbnRyeSk7XG4gICAgICAgIC8vIFZhbGlkYXRlIGlucHV0LiBWYWx1ZXMgYXJlbid0IHRlc3RlZCwgYXMgdGhlIHB1YmxpYyAudmFsIG1ldGhvZFxuICAgICAgICAvLyB3aWxsIGFsd2F5cyBwcm92aWRlIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgIWVudHJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3N0YXJ0JyBvcHRpb24gaXMgaW5jb3JyZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdG9yZSB0aGUgbnVtYmVyIG9mIGhhbmRsZXMuXG4gICAgICAgIHBhcnNlZC5oYW5kbGVzID0gZW50cnkubGVuZ3RoO1xuICAgICAgICAvLyBXaGVuIHRoZSBzbGlkZXIgaXMgaW5pdGlhbGl6ZWQsIHRoZSAudmFsIG1ldGhvZCB3aWxsXG4gICAgICAgIC8vIGJlIGNhbGxlZCB3aXRoIHRoZSBzdGFydCBvcHRpb25zLlxuICAgICAgICBwYXJzZWQuc3RhcnQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFNuYXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3NuYXAnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5mb3JjZSAxMDAlIHN0ZXBwaW5nIHdpdGhpbiBzdWJyYW5nZXMuXG4gICAgICAgIHBhcnNlZC5zbmFwID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBbmltYXRlKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRlJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxuICAgICAgICBwYXJzZWQuYW5pbWF0ZSA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYW5pbWF0aW9uRHVyYXRpb24nIG9wdGlvbiBtdXN0IGJlIGEgbnVtYmVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuYW5pbWF0aW9uRHVyYXRpb24gPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENvbm5lY3QocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICB2YXIgY29ubmVjdCA9IFtmYWxzZV07XG4gICAgICAgIHZhciBpO1xuICAgICAgICAvLyBNYXAgbGVnYWN5IG9wdGlvbnNcbiAgICAgICAgaWYgKGVudHJ5ID09PSBcImxvd2VyXCIpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW3RydWUsIGZhbHNlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbnRyeSA9PT0gXCJ1cHBlclwiKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFtmYWxzZSwgdHJ1ZV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIGJvb2xlYW4gb3B0aW9uc1xuICAgICAgICBpZiAoZW50cnkgPT09IHRydWUgfHwgZW50cnkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgcGFyc2VkLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbm5lY3QucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25uZWN0LnB1c2goZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlamVjdCBpbnZhbGlkIGlucHV0XG4gICAgICAgIGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoIHx8IGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMgKyAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY29ubmVjdCcgb3B0aW9uIGRvZXNuJ3QgbWF0Y2ggaGFuZGxlIGNvdW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbm5lY3QgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuY29ubmVjdCA9IGNvbm5lY3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RPcmllbnRhdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIFNldCBvcmllbnRhdGlvbiB0byBhbiBhIG51bWVyaWNhbCB2YWx1ZSBmb3IgZWFzeVxuICAgICAgICAvLyBhcnJheSBzZWxlY3Rpb24uXG4gICAgICAgIHN3aXRjaCAoZW50cnkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLm9ydCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidmVydGljYWxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQub3J0ID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ29yaWVudGF0aW9uJyBvcHRpb24gaXMgaW52YWxpZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdE1hcmdpbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ21hcmdpbicgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXNzdWUgIzU4MlxuICAgICAgICBpZiAoZW50cnkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQubWFyZ2luID0gcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdExpbWl0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5saW1pdCA9IHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeSk7XG4gICAgICAgIGlmICghcGFyc2VkLmxpbWl0IHx8IHBhcnNlZC5oYW5kbGVzIDwgMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2xpbWl0JyBvcHRpb24gaXMgb25seSBzdXBwb3J0ZWQgb24gbGluZWFyIHNsaWRlcnMgd2l0aCAyIG9yIG1vcmUgaGFuZGxlcy5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFBhZGRpbmcocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBudW1lcmljIG9yIGFycmF5IG9mIGV4YWN0bHkgMiBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkgJiYgIShlbnRyeS5sZW5ndGggPT09IDIgfHwgaXNOdW1lcmljKGVudHJ5WzBdKSB8fCBpc051bWVyaWMoZW50cnlbMV0pKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMgb3IgYXJyYXkgb2YgZXhhY3RseSAyIG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW2VudHJ5LCBlbnRyeV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gJ2dldERpc3RhbmNlJyByZXR1cm5zIGZhbHNlIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICAgICAgcGFyc2VkLnBhZGRpbmcgPSBbcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5WzBdKSwgcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5WzFdKV07XG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHBhcnNlZC5zcGVjdHJ1bS54TnVtU3RlcHMubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAgICAgLy8gbGFzdCBcInJhbmdlXCIgY2FuJ3QgY29udGFpbiBzdGVwIHNpemUgYXMgaXQgaXMgcHVyZWx5IGFuIGVuZHBvaW50LlxuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYWRkaW5nWzBdW2luZGV4XSA8IDAgfHwgcGFyc2VkLnBhZGRpbmdbMV1baW5kZXhdIDwgMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcihzKS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvdGFsUGFkZGluZyA9IGVudHJ5WzBdICsgZW50cnlbMV07XG4gICAgICAgIHZhciBmaXJzdFZhbHVlID0gcGFyc2VkLnNwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgIHZhciBsYXN0VmFsdWUgPSBwYXJzZWQuc3BlY3RydW0ueFZhbFtwYXJzZWQuc3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRvdGFsUGFkZGluZyAvIChsYXN0VmFsdWUgLSBmaXJzdFZhbHVlKSA+IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBub3QgZXhjZWVkIDEwMCUgb2YgdGhlIHJhbmdlLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0RGlyZWN0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gU2V0IGRpcmVjdGlvbiBhcyBhIG51bWVyaWNhbCB2YWx1ZSBmb3IgZWFzeSBwYXJzaW5nLlxuICAgICAgICAvLyBJbnZlcnQgY29ubmVjdGlvbiBmb3IgUlRMIHNsaWRlcnMsIHNvIHRoYXQgdGhlIHByb3BlclxuICAgICAgICAvLyBoYW5kbGVzIGdldCB0aGUgY29ubmVjdC9iYWNrZ3JvdW5kIGNsYXNzZXMuXG4gICAgICAgIHN3aXRjaCAoZW50cnkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJsdHJcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQuZGlyID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJydGxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQuZGlyID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2RpcmVjdGlvbicgb3B0aW9uIHdhcyBub3QgcmVjb2duaXplZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEJlaGF2aW91cihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW5wdXQgaXMgYSBzdHJpbmcuXG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdiZWhhdmlvdXInIG11c3QgYmUgYSBzdHJpbmcgY29udGFpbmluZyBvcHRpb25zLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIGFueSBrZXl3b3Jkcy5cbiAgICAgICAgLy8gTm9uZSBhcmUgcmVxdWlyZWQuXG4gICAgICAgIHZhciB0YXAgPSBlbnRyeS5pbmRleE9mKFwidGFwXCIpID49IDA7XG4gICAgICAgIHZhciBkcmFnID0gZW50cnkuaW5kZXhPZihcImRyYWdcIikgPj0gMDtcbiAgICAgICAgdmFyIGZpeGVkID0gZW50cnkuaW5kZXhPZihcImZpeGVkXCIpID49IDA7XG4gICAgICAgIHZhciBzbmFwID0gZW50cnkuaW5kZXhPZihcInNuYXBcIikgPj0gMDtcbiAgICAgICAgdmFyIGhvdmVyID0gZW50cnkuaW5kZXhPZihcImhvdmVyXCIpID49IDA7XG4gICAgICAgIHZhciB1bmNvbnN0cmFpbmVkID0gZW50cnkuaW5kZXhPZihcInVuY29uc3RyYWluZWRcIikgPj0gMDtcbiAgICAgICAgdmFyIGRyYWdBbGwgPSBlbnRyeS5pbmRleE9mKFwiZHJhZy1hbGxcIikgPj0gMDtcbiAgICAgICAgaWYgKGZpeGVkKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkLmhhbmRsZXMgIT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZml4ZWQnIGJlaGF2aW91ciBtdXN0IGJlIHVzZWQgd2l0aCAyIGhhbmRsZXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVc2UgbWFyZ2luIHRvIGVuZm9yY2UgZml4ZWQgc3RhdGVcbiAgICAgICAgICAgIHRlc3RNYXJnaW4ocGFyc2VkLCBwYXJzZWQuc3RhcnRbMV0gLSBwYXJzZWQuc3RhcnRbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmNvbnN0cmFpbmVkICYmIChwYXJzZWQubWFyZ2luIHx8IHBhcnNlZC5saW1pdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd1bmNvbnN0cmFpbmVkJyBiZWhhdmlvdXIgY2Fubm90IGJlIHVzZWQgd2l0aCBtYXJnaW4gb3IgbGltaXRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmV2ZW50cyA9IHtcbiAgICAgICAgICAgIHRhcDogdGFwIHx8IHNuYXAsXG4gICAgICAgICAgICBkcmFnOiBkcmFnLFxuICAgICAgICAgICAgZHJhZ0FsbDogZHJhZ0FsbCxcbiAgICAgICAgICAgIGZpeGVkOiBmaXhlZCxcbiAgICAgICAgICAgIHNuYXA6IHNuYXAsXG4gICAgICAgICAgICBob3ZlcjogaG92ZXIsXG4gICAgICAgICAgICB1bmNvbnN0cmFpbmVkOiB1bmNvbnN0cmFpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RUb29sdGlwcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmIChlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkgPT09IHRydWUgfHwgaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyc2VkLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVudHJ5ID0gYXNBcnJheShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IG11c3QgcGFzcyBhIGZvcm1hdHRlciBmb3IgYWxsIGhhbmRsZXMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW50cnkuZm9yRWFjaChmdW5jdGlvbiAoZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXR0ZXIgIT09IFwiYm9vbGVhblwiICYmICFpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihmb3JtYXR0ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd0b29sdGlwcycgbXVzdCBiZSBwYXNzZWQgYSBmb3JtYXR0ZXIgb3IgJ2ZhbHNlJy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0SGFuZGxlQXR0cmlidXRlcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmIChlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBtdXN0IHBhc3MgYSBhdHRyaWJ1dGVzIGZvciBhbGwgaGFuZGxlcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmhhbmRsZUF0dHJpYnV0ZXMgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFyaWFGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FyaWFGb3JtYXQnIHJlcXVpcmVzICd0bycgbWV0aG9kLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuYXJpYUZvcm1hdCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Rm9ybWF0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Zvcm1hdCcgcmVxdWlyZXMgJ3RvJyBhbmQgJ2Zyb20nIG1ldGhvZHMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5mb3JtYXQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkU3VwcG9ydChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRTdXBwb3J0JyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZFN1cHBvcnQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdERvY3VtZW50RWxlbWVudChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYW4gYWR2YW5jZWQgb3B0aW9uLiBQYXNzZWQgdmFsdWVzIGFyZSB1c2VkIHdpdGhvdXQgdmFsaWRhdGlvbi5cbiAgICAgICAgcGFyc2VkLmRvY3VtZW50RWxlbWVudCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q3NzUHJlZml4KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJzdHJpbmdcIiAmJiBlbnRyeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjc3NQcmVmaXgnIG11c3QgYmUgYSBzdHJpbmcgb3IgYGZhbHNlYC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmNzc1ByZWZpeCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q3NzQ2xhc3NlcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjc3NDbGFzc2VzJyBtdXN0IGJlIGFuIG9iamVjdC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWQuY3NzUHJlZml4ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW50cnkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzW2tleV0gPSBwYXJzZWQuY3NzUHJlZml4ICsgZW50cnlba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXMgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUZXN0IGFsbCBkZXZlbG9wZXIgc2V0dGluZ3MgYW5kIHBhcnNlIHRvIGFzc3VtcHRpb24tc2FmZSB2YWx1ZXMuXG4gICAgZnVuY3Rpb24gdGVzdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICAvLyBUbyBwcm92ZSBhIGZpeCBmb3IgIzUzNywgZnJlZXplIG9wdGlvbnMgaGVyZS5cbiAgICAgICAgLy8gSWYgdGhlIG9iamVjdCBpcyBtb2RpZmllZCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gICAgICAgIC8vIE9iamVjdC5mcmVlemUob3B0aW9ucyk7XG4gICAgICAgIHZhciBwYXJzZWQgPSB7XG4gICAgICAgICAgICBtYXJnaW46IG51bGwsXG4gICAgICAgICAgICBsaW1pdDogbnVsbCxcbiAgICAgICAgICAgIHBhZGRpbmc6IG51bGwsXG4gICAgICAgICAgICBhbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGFyaWFGb3JtYXQ6IGRlZmF1bHRGb3JtYXR0ZXIsXG4gICAgICAgICAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXR0ZXJcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVGVzdHMgYXJlIGV4ZWN1dGVkIGluIHRoZSBvcmRlciB0aGV5IGFyZSBwcmVzZW50ZWQgaGVyZS5cbiAgICAgICAgdmFyIHRlc3RzID0ge1xuICAgICAgICAgICAgc3RlcDogeyByOiBmYWxzZSwgdDogdGVzdFN0ZXAgfSxcbiAgICAgICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZFBhZ2VNdWx0aXBsaWVyIH0sXG4gICAgICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZE11bHRpcGxpZXIgfSxcbiAgICAgICAgICAgIGtleWJvYXJkRGVmYXVsdFN0ZXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZERlZmF1bHRTdGVwIH0sXG4gICAgICAgICAgICBzdGFydDogeyByOiB0cnVlLCB0OiB0ZXN0U3RhcnQgfSxcbiAgICAgICAgICAgIGNvbm5lY3Q6IHsgcjogdHJ1ZSwgdDogdGVzdENvbm5lY3QgfSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogeyByOiB0cnVlLCB0OiB0ZXN0RGlyZWN0aW9uIH0sXG4gICAgICAgICAgICBzbmFwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0U25hcCB9LFxuICAgICAgICAgICAgYW5pbWF0ZTogeyByOiBmYWxzZSwgdDogdGVzdEFuaW1hdGUgfSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24gfSxcbiAgICAgICAgICAgIHJhbmdlOiB7IHI6IHRydWUsIHQ6IHRlc3RSYW5nZSB9LFxuICAgICAgICAgICAgb3JpZW50YXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RPcmllbnRhdGlvbiB9LFxuICAgICAgICAgICAgbWFyZ2luOiB7IHI6IGZhbHNlLCB0OiB0ZXN0TWFyZ2luIH0sXG4gICAgICAgICAgICBsaW1pdDogeyByOiBmYWxzZSwgdDogdGVzdExpbWl0IH0sXG4gICAgICAgICAgICBwYWRkaW5nOiB7IHI6IGZhbHNlLCB0OiB0ZXN0UGFkZGluZyB9LFxuICAgICAgICAgICAgYmVoYXZpb3VyOiB7IHI6IHRydWUsIHQ6IHRlc3RCZWhhdmlvdXIgfSxcbiAgICAgICAgICAgIGFyaWFGb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RBcmlhRm9ybWF0IH0sXG4gICAgICAgICAgICBmb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RGb3JtYXQgfSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0VG9vbHRpcHMgfSxcbiAgICAgICAgICAgIGtleWJvYXJkU3VwcG9ydDogeyByOiB0cnVlLCB0OiB0ZXN0S2V5Ym9hcmRTdXBwb3J0IH0sXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQ6IHsgcjogZmFsc2UsIHQ6IHRlc3REb2N1bWVudEVsZW1lbnQgfSxcbiAgICAgICAgICAgIGNzc1ByZWZpeDogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzUHJlZml4IH0sXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiB7IHI6IHRydWUsIHQ6IHRlc3RDc3NDbGFzc2VzIH0sXG4gICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0SGFuZGxlQXR0cmlidXRlcyB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGNvbm5lY3Q6IGZhbHNlLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImx0clwiLFxuICAgICAgICAgICAgYmVoYXZpb3VyOiBcInRhcFwiLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB0cnVlLFxuICAgICAgICAgICAgY3NzUHJlZml4OiBcIm5vVWktXCIsXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiBjc3NDbGFzc2VzLFxuICAgICAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogNSxcbiAgICAgICAgICAgIGtleWJvYXJkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGtleWJvYXJkRGVmYXVsdFN0ZXA6IDEwXG4gICAgICAgIH07XG4gICAgICAgIC8vIEFyaWFGb3JtYXQgZGVmYXVsdHMgdG8gcmVndWxhciBmb3JtYXQsIGlmIGFueS5cbiAgICAgICAgaWYgKG9wdGlvbnMuZm9ybWF0ICYmICFvcHRpb25zLmFyaWFGb3JtYXQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYXJpYUZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIC8vIFJ1biBhbGwgb3B0aW9ucyB0aHJvdWdoIGEgdGVzdGluZyBtZWNoYW5pc20gdG8gZW5zdXJlIGNvcnJlY3RcbiAgICAgICAgLy8gaW5wdXQuIEl0IHNob3VsZCBiZSBub3RlZCB0aGF0IG9wdGlvbnMgbWlnaHQgZ2V0IG1vZGlmaWVkIHRvXG4gICAgICAgIC8vIGJlIGhhbmRsZWQgcHJvcGVybHkuIEUuZy4gd3JhcHBpbmcgaW50ZWdlcnMgaW4gYXJyYXlzLlxuICAgICAgICBPYmplY3Qua2V5cyh0ZXN0cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIG9wdGlvbiBpc24ndCBzZXQsIGJ1dCBpdCBpcyByZXF1aXJlZCwgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgICAgICBpZiAoIWlzU2V0KG9wdGlvbnNbbmFtZV0pICYmIGRlZmF1bHRzW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVzdHNbbmFtZV0ucikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnXCIgKyBuYW1lICsgXCInIGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVzdHNbbmFtZV0udChwYXJzZWQsICFpc1NldChvcHRpb25zW25hbWVdKSA/IGRlZmF1bHRzW25hbWVdIDogb3B0aW9uc1tuYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGb3J3YXJkIHBpcHMgb3B0aW9uc1xuICAgICAgICBwYXJzZWQucGlwcyA9IG9wdGlvbnMucGlwcztcbiAgICAgICAgLy8gQWxsIHJlY2VudCBicm93c2VycyBhY2NlcHQgdW5wcmVmaXhlZCB0cmFuc2Zvcm0uXG4gICAgICAgIC8vIFdlIG5lZWQgLW1zLSBmb3IgSUU5IGFuZCAtd2Via2l0LSBmb3Igb2xkZXIgQW5kcm9pZDtcbiAgICAgICAgLy8gQXNzdW1lIHVzZSBvZiAtd2Via2l0LSBpZiB1bnByZWZpeGVkIGFuZCAtbXMtIGFyZSBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAvLyBodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PXRyYW5zZm9ybXMyZFxuICAgICAgICB2YXIgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBtc1ByZWZpeCA9IGQuc3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIG5vUHJlZml4ID0gZC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgcGFyc2VkLnRyYW5zZm9ybVJ1bGUgPSBub1ByZWZpeCA/IFwidHJhbnNmb3JtXCIgOiBtc1ByZWZpeCA/IFwibXNUcmFuc2Zvcm1cIiA6IFwid2Via2l0VHJhbnNmb3JtXCI7XG4gICAgICAgIC8vIFBpcHMgZG9uJ3QgbW92ZSwgc28gd2UgY2FuIHBsYWNlIHRoZW0gdXNpbmcgbGVmdC90b3AuXG4gICAgICAgIHZhciBzdHlsZXMgPSBbXG4gICAgICAgICAgICBbXCJsZWZ0XCIsIFwidG9wXCJdLFxuICAgICAgICAgICAgW1wicmlnaHRcIiwgXCJib3R0b21cIl1cbiAgICAgICAgXTtcbiAgICAgICAgcGFyc2VkLnN0eWxlID0gc3R5bGVzW3BhcnNlZC5kaXJdW3BhcnNlZC5vcnRdO1xuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIGZ1bmN0aW9uIHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgICAgICB2YXIgc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgPSBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpO1xuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgJiYgZ2V0U3VwcG9ydHNQYXNzaXZlKCk7XG4gICAgICAgIC8vIEFsbCB2YXJpYWJsZXMgbG9jYWwgdG8gJ3Njb3BlJyBhcmUgcHJlZml4ZWQgd2l0aCAnc2NvcGVfJ1xuICAgICAgICAvLyBTbGlkZXIgRE9NIE5vZGVzXG4gICAgICAgIHZhciBzY29wZV9UYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHZhciBzY29wZV9CYXNlO1xuICAgICAgICB2YXIgc2NvcGVfSGFuZGxlcztcbiAgICAgICAgdmFyIHNjb3BlX0Nvbm5lY3RzO1xuICAgICAgICB2YXIgc2NvcGVfUGlwcztcbiAgICAgICAgdmFyIHNjb3BlX1Rvb2x0aXBzO1xuICAgICAgICAvLyBTbGlkZXIgc3RhdGUgdmFsdWVzXG4gICAgICAgIHZhciBzY29wZV9TcGVjdHJ1bSA9IG9wdGlvbnMuc3BlY3RydW07XG4gICAgICAgIHZhciBzY29wZV9WYWx1ZXMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfSGFuZGxlTnVtYmVycyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID0gMDtcbiAgICAgICAgdmFyIHNjb3BlX0V2ZW50cyA9IHt9O1xuICAgICAgICAvLyBEb2N1bWVudCBOb2Rlc1xuICAgICAgICB2YXIgc2NvcGVfRG9jdW1lbnQgPSB0YXJnZXQub3duZXJEb2N1bWVudDtcbiAgICAgICAgdmFyIHNjb3BlX0RvY3VtZW50RWxlbWVudCA9IG9wdGlvbnMuZG9jdW1lbnRFbGVtZW50IHx8IHNjb3BlX0RvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHNjb3BlX0JvZHkgPSBzY29wZV9Eb2N1bWVudC5ib2R5O1xuICAgICAgICAvLyBGb3IgaG9yaXpvbnRhbCBzbGlkZXJzIGluIHN0YW5kYXJkIGx0ciBkb2N1bWVudHMsXG4gICAgICAgIC8vIG1ha2UgLm5vVWktb3JpZ2luIG92ZXJmbG93IHRvIHRoZSBsZWZ0IHNvIHRoZSBkb2N1bWVudCBkb2Vzbid0IHNjcm9sbC5cbiAgICAgICAgdmFyIHNjb3BlX0Rpck9mZnNldCA9IHNjb3BlX0RvY3VtZW50LmRpciA9PT0gXCJydGxcIiB8fCBvcHRpb25zLm9ydCA9PT0gMSA/IDAgOiAxMDA7XG4gICAgICAgIC8vIENyZWF0ZXMgYSBub2RlLCBhZGRzIGl0IHRvIHRhcmdldCwgcmV0dXJucyB0aGUgbmV3IG5vZGUuXG4gICAgICAgIGZ1bmN0aW9uIGFkZE5vZGVUbyhhZGRUYXJnZXQsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdmFyIGRpdiA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoZGl2LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGVuZCBhIG9yaWdpbiB0byB0aGUgYmFzZVxuICAgICAgICBmdW5jdGlvbiBhZGRPcmlnaW4oYmFzZSwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5vcmlnaW4pO1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZE5vZGVUbyhvcmlnaW4sIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGUpO1xuICAgICAgICAgICAgYWRkTm9kZVRvKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnRvdWNoQXJlYSk7XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVcIiwgU3RyaW5nKGhhbmRsZU51bWJlcikpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMua2V5Ym9hcmRTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9HbG9iYWxfYXR0cmlidXRlcy90YWJpbmRleFxuICAgICAgICAgICAgICAgIC8vIDAgPSBmb2N1c2FibGUgYW5kIHJlYWNoYWJsZVxuICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXNfMSA9IG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXNfMSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzXzFbYXR0cmlidXRlXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInNsaWRlclwiKTtcbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLW9yaWVudGF0aW9uXCIsIG9wdGlvbnMub3J0ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZUxvd2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhbmRsZU51bWJlciA9PT0gb3B0aW9ucy5oYW5kbGVzIC0gMSkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZVVwcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5zZXJ0IG5vZGVzIGZvciBjb25uZWN0IGVsZW1lbnRzXG4gICAgICAgIGZ1bmN0aW9uIGFkZENvbm5lY3QoYmFzZSwgYWRkKSB7XG4gICAgICAgICAgICBpZiAoIWFkZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBoYW5kbGVzIHRvIHRoZSBzbGlkZXIgYmFzZS5cbiAgICAgICAgZnVuY3Rpb24gYWRkRWxlbWVudHMoY29ubmVjdE9wdGlvbnMsIGJhc2UpIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0QmFzZSA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMuY29ubmVjdHMpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcyA9IFtdO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMgPSBbXTtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbMF0pKTtcbiAgICAgICAgICAgIC8vIFs6Ojo6Tz09PT1PPT09PU89PT09XVxuICAgICAgICAgICAgLy8gY29ubmVjdE9wdGlvbnMgPSBbMCwgMSwgMSwgMV1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBLZWVwIGEgbGlzdCBvZiBhbGwgYWRkZWQgaGFuZGxlcy5cbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLnB1c2goYWRkT3JpZ2luKGJhc2UsIGkpKTtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzW2ldID0gaTtcbiAgICAgICAgICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3QoY29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zW2kgKyAxXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemUgYSBzaW5nbGUgc2xpZGVyLlxuICAgICAgICBmdW5jdGlvbiBhZGRTbGlkZXIoYWRkVGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBBcHBseSBjbGFzc2VzIGFuZCBkYXRhIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMubHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnJ0bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vcnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ob3Jpem9udGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnZlcnRpY2FsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0ZXh0RGlyZWN0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZShhZGRUYXJnZXQpLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIGlmICh0ZXh0RGlyZWN0aW9uID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGV4dERpcmVjdGlvblJ0bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uTHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuYmFzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkVG9vbHRpcChoYW5kbGUsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnRvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGhhbmRsZS5maXJzdENoaWxkLCBvcHRpb25zLmNzc0NsYXNzZXMudG9vbHRpcCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNTbGlkZXJEaXNhYmxlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9UYXJnZXQuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlzYWJsZSB0aGUgc2xpZGVyIGRyYWdnaW5nIGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICAgICAgZnVuY3Rpb24gaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlT3JpZ2luLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzKTtcbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50KHRvb2x0aXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSB0b29sdGlwcyBvcHRpb24gaXMgYSBzaG9ydGhhbmQgZm9yIHVzaW5nIHRoZSAndXBkYXRlJyBldmVudC5cbiAgICAgICAgZnVuY3Rpb24gdG9vbHRpcHMoKSB7XG4gICAgICAgICAgICByZW1vdmVUb29sdGlwcygpO1xuICAgICAgICAgICAgLy8gVG9vbHRpcHMgYXJlIGFkZGVkIHdpdGggb3B0aW9ucy50b29sdGlwcyBpbiBvcmlnaW5hbCBvcmRlci5cbiAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gc2NvcGVfSGFuZGxlcy5tYXAoYWRkVG9vbHRpcCk7XG4gICAgICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgICAgIGlmICghc2NvcGVfVG9vbHRpcHMgfHwgIW9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSB2YWx1ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdLnRvKHVuZW5jb2RlZFtoYW5kbGVOdW1iZXJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXS5pbm5lckhUTUwgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFyaWEoKSB7XG4gICAgICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLmFyaWEsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZU51bWJlciwgdW5lbmNvZGVkLCB0YXAsIHBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBBcmlhIFZhbHVlcyBmb3IgYWxsIGhhbmRsZXMsIGFzIGEgY2hhbmdlIGluIG9uZSBjaGFuZ2VzIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgdGhlIG5leHQuXG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlID0gc2NvcGVfSGFuZGxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAxMDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9ybWF0dGVkIHZhbHVlIGZvciBkaXNwbGF5XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gU3RyaW5nKG9wdGlvbnMuYXJpYUZvcm1hdC50byh1bmVuY29kZWRbaW5kZXhdKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hcCB0byBzbGlkZXIgcmFuZ2UgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtaW4pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIG1heCA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtYXgpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIG5vdyA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhub3cpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWluXCIsIG1pbik7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWF4XCIsIG1heCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbm93XCIsIG5vdyk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiLCB0ZXh0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEdyb3VwKHBpcHMpIHtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcmFuZ2UuXG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlJhbmdlIHx8IHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5TdGVwcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS54VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5Db3VudCkge1xuICAgICAgICAgICAgICAgIGlmIChwaXBzLnZhbHVlcyA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3ZhbHVlcycgKD49IDIpIHJlcXVpcmVkIGZvciBtb2RlICdjb3VudCcuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEaXZpZGUgMCAtIDEwMCBpbiAnY291bnQnIHBhcnRzLlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHBpcHMudmFsdWVzIC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgc3ByZWFkID0gMTAwIC8gaW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIExpc3QgdGhlc2UgcGFydHMgYW5kIGhhdmUgdGhlbSBoYW5kbGVkIGFzICdwb3NpdGlvbnMnLlxuICAgICAgICAgICAgICAgIHdoaWxlIChpbnRlcnZhbC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpbnRlcnZhbF0gPSBpbnRlcnZhbCAqIHNwcmVhZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goMTAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwVG9SYW5nZSh2YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIE1hcCBhbGwgcGVyY2VudGFnZXMgdG8gb24tcmFuZ2UgdmFsdWVzLlxuICAgICAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHBpcHMudmFsdWVzLCBwaXBzLnN0ZXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5WYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgbXVzdCBiZSBzdGVwcGVkLCBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBwZXJjZW50YWdlIGZpcnN0LlxuICAgICAgICAgICAgICAgIGlmIChwaXBzLnN0ZXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBpcHMudmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gcGVyY2VudGFnZSwgYXBwbHkgc3RlcCwgcmV0dXJuIHRvIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodmFsdWUpKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGNhbiBzaW1wbHkgdXNlIHRoZSB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpcHMudmFsdWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtdOyAvLyBwaXBzLm1vZGUgPSBuZXZlclxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1hcFRvUmFuZ2UodmFsdWVzLCBzdGVwcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHN0ZXBwZWQgPyBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHZhbHVlKSA6IHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlU3ByZWFkKHBpcHMpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhZmVJbmNyZW1lbnQodmFsdWUsIGluY3JlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIEF2b2lkIGZsb2F0aW5nIHBvaW50IHZhcmlhbmNlIGJ5IGRyb3BwaW5nIHRoZSBzbWFsbGVzdCBkZWNpbWFsIHBsYWNlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKCh2YWx1ZSArIGluY3JlbWVudCkudG9GaXhlZCg3KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZ3JvdXAgPSBnZXRHcm91cChwaXBzKTtcbiAgICAgICAgICAgIHZhciBpbmRleGVzID0ge307XG4gICAgICAgICAgICB2YXIgZmlyc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgICAgIHZhciBsYXN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbc2NvcGVfU3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBpZ25vcmVGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUxhc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBwcmV2UGN0ID0gMDtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGdyb3VwLCBzb3J0IGl0IGFuZCBmaWx0ZXIgYXdheSBhbGwgZHVwbGljYXRlcy5cbiAgICAgICAgICAgIGdyb3VwID0gdW5pcXVlKGdyb3VwLnNsaWNlKCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcmFuZ2Ugc3RhcnRzIHdpdGggdGhlIGZpcnN0IGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoZ3JvdXBbMF0gIT09IGZpcnN0SW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnVuc2hpZnQoZmlyc3RJblJhbmdlKTtcbiAgICAgICAgICAgICAgICBpZ25vcmVGaXJzdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMaWtld2lzZSBmb3IgdGhlIGxhc3Qgb25lLlxuICAgICAgICAgICAgaWYgKGdyb3VwW2dyb3VwLmxlbmd0aCAtIDFdICE9PSBsYXN0SW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnB1c2gobGFzdEluUmFuZ2UpO1xuICAgICAgICAgICAgICAgIGlnbm9yZUxhc3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGxvd2VyICsgdXBwZXIgcG9zaXRpb25zLlxuICAgICAgICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIHZhciBxO1xuICAgICAgICAgICAgICAgIHZhciBsb3cgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIHZhciBoaWdoID0gZ3JvdXBbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UGN0O1xuICAgICAgICAgICAgICAgIHZhciBwY3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgICAgIHZhciBwY3RQb3M7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGU7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzO1xuICAgICAgICAgICAgICAgIHZhciByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgIHZhciBpc1N0ZXBzID0gcGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlN0ZXBzO1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gdXNpbmcgJ3N0ZXBzJyBtb2RlLCB1c2UgdGhlIHByb3ZpZGVkIHN0ZXBzLlxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UnbGwgc3RlcCBvbiB0byB0aGUgbmV4dCBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBpZiAoaXNTdGVwcykge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0ueE51bVN0ZXBzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhICdmdWxsJyBzdGVwLlxuICAgICAgICAgICAgICAgIGlmICghc3RlcCkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gaGlnaCAtIGxvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgaGlnaCBpcyB1bmRlZmluZWQgd2UgYXJlIGF0IHRoZSBsYXN0IHN1YnJhbmdlLiBNYWtlIHN1cmUgaXQgaXRlcmF0ZXMgb25jZSAoIzEwODgpXG4gICAgICAgICAgICAgICAgaWYgKGhpZ2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBoaWdoID0gbG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgc3RlcCBpc24ndCAwLCB3aGljaCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wICgjNjU0KVxuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgICAgIC8vIEZpbmQgYWxsIHN0ZXBzIGluIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gaGlnaDsgaSA9IHNhZmVJbmNyZW1lbnQoaSwgc3RlcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBwZXJjZW50YWdlIHZhbHVlIGZvciB0aGUgY3VycmVudCBzdGVwLFxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHNpemUgZm9yIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgbmV3UGN0ID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyhpKTtcbiAgICAgICAgICAgICAgICAgICAgcGN0RGlmZmVyZW5jZSA9IG5ld1BjdCAtIHByZXZQY3Q7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzID0gcGN0RGlmZmVyZW5jZSAvIChwaXBzLmRlbnNpdHkgfHwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxTdGVwcyA9IE1hdGgucm91bmQoc3RlcHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHJhdGlvIHJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiBwZXJjZW50YWdlLXNwYWNlIGEgcG9pbnQgaW5kaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgYSBkZW5zaXR5IDEgdGhlIHBvaW50cy9wZXJjZW50YWdlID0gMS4gRm9yIGRlbnNpdHkgMiwgdGhhdCBwZXJjZW50YWdlIG5lZWRzIHRvIGJlIHJlLWRpdmlkZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJvdW5kIHRoZSBwZXJjZW50YWdlIG9mZnNldCB0byBhbiBldmVuIG51bWJlciwgdGhlbiBkaXZpZGUgYnkgdHdvXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIHNwcmVhZCB0aGUgb2Zmc2V0IG9uIGJvdGggc2lkZXMgb2YgdGhlIHJhbmdlLlxuICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZSA9IHBjdERpZmZlcmVuY2UgLyByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdmlkZSBhbGwgcG9pbnRzIGV2ZW5seSwgYWRkaW5nIHRoZSBjb3JyZWN0IG51bWJlciB0byB0aGlzIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgICAgICAvLyBSdW4gdXAgdG8gPD0gc28gdGhhdCAxMDAlIGdldHMgYSBwb2ludCwgZXZlbnQgaWYgaWdub3JlTGFzdCBpcyBzZXQuXG4gICAgICAgICAgICAgICAgICAgIGZvciAocSA9IDE7IHEgPD0gcmVhbFN0ZXBzOyBxICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByYXRpbyBiZXR3ZWVuIHRoZSByb3VuZGVkIHZhbHVlIGFuZCB0aGUgYWN0dWFsIHNpemUgbWlnaHQgYmUgfjElIG9mZi5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvcnJlY3QgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IGJ5IHRoZSBudW1iZXIgb2YgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXIgc3VicmFuZ2UuIGRlbnNpdHkgPSAxIHdpbGwgcmVzdWx0IGluIDEwMCBwb2ludHMgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmdWxsIHJhbmdlLCAyIGZvciA1MCwgNCBmb3IgMjUsIGV0Yy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBjdFBvcyA9IHByZXZQY3QgKyBxICogc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzW3BjdFBvcy50b0ZpeGVkKDUpXSA9IFtzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcocGN0UG9zKSwgMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBwb2ludCB0eXBlLlxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gZ3JvdXAuaW5kZXhPZihpKSA+IC0xID8gZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlIDogaXNTdGVwcyA/IGV4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZSA6IGV4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5mb3JjZSB0aGUgJ2lnbm9yZUZpcnN0JyBvcHRpb24gYnkgb3ZlcndyaXRpbmcgdGhlIHR5cGUgZm9yIDAuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5kZXggJiYgaWdub3JlRmlyc3QgJiYgaSAhPT0gaGlnaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaSA9PT0gaGlnaCAmJiBpZ25vcmVMYXN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgJ3R5cGUnIG9mIHRoaXMgcG9pbnQuIDAgPSBwbGFpbiwgMSA9IHJlYWwgdmFsdWUsIDIgPSBzdGVwIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1tuZXdQY3QudG9GaXhlZCg1KV0gPSBbaSwgdHlwZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBwZXJjZW50YWdlIGNvdW50LlxuICAgICAgICAgICAgICAgICAgICBwcmV2UGN0ID0gbmV3UGN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlckZ1bmMsIGZvcm1hdHRlcikge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGVfRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZVNpemVDbGFzc2VzID0gKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZU5vcm1hbCxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTGFyZ2UsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVN1YixcbiAgICAgICAgICAgICAgICBfYSk7XG4gICAgICAgICAgICB2YXIgbWFya2VyU2l6ZUNsYXNzZXMgPSAoX2IgPSB7fSxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLk5vbmVdID0gXCJcIixcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlck5vcm1hbCxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlckxhcmdlLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyU3ViLFxuICAgICAgICAgICAgICAgIF9iKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZU9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVWZXJ0aWNhbF07XG4gICAgICAgICAgICB2YXIgbWFya2VyT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyVmVydGljYWxdO1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHMpO1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5vcnQgPT09IDAgPyBvcHRpb25zLmNzc0NsYXNzZXMucGlwc0hvcml6b250YWwgOiBvcHRpb25zLmNzc0NsYXNzZXMucGlwc1ZlcnRpY2FsKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENsYXNzZXModHlwZSwgc291cmNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBzb3VyY2UgPT09IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZW50YXRpb25DbGFzc2VzID0gYSA/IHZhbHVlT3JpZW50YXRpb25DbGFzc2VzIDogbWFya2VyT3JpZW50YXRpb25DbGFzc2VzO1xuICAgICAgICAgICAgICAgIHZhciBzaXplQ2xhc3NlcyA9IGEgPyB2YWx1ZVNpemVDbGFzc2VzIDogbWFya2VyU2l6ZUNsYXNzZXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSArIFwiIFwiICsgb3JpZW50YXRpb25DbGFzc2VzW29wdGlvbnMub3J0XSArIFwiIFwiICsgc2l6ZUNsYXNzZXNbdHlwZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRTcHJlYWQob2Zmc2V0LCB2YWx1ZSwgdHlwZSkge1xuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBmaWx0ZXIgZnVuY3Rpb24sIGlmIGl0IGlzIHNldC5cbiAgICAgICAgICAgICAgICB0eXBlID0gZmlsdGVyRnVuYyA/IGZpbHRlckZ1bmModmFsdWUsIHR5cGUpIDogdHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5QaXBzVHlwZS5Ob25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgbWFya2VyIGZvciBldmVyeSBwb2ludFxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gYWRkTm9kZVRvKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlcik7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgICAgIC8vIFZhbHVlcyBhcmUgb25seSBhcHBlbmRlZCBmb3IgcG9pbnRzIG1hcmtlZCAnMScgb3IgJzInLlxuICAgICAgICAgICAgICAgIGlmICh0eXBlID4gZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gU3RyaW5nKGZvcm1hdHRlci50byh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFwcGVuZCBhbGwgcG9pbnRzLlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3ByZWFkKS5mb3JFYWNoKGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBhZGRTcHJlYWQob2Zmc2V0LCBzcHJlYWRbb2Zmc2V0XVswXSwgc3ByZWFkW29mZnNldF1bMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVQaXBzKCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlX1BpcHMpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50KHNjb3BlX1BpcHMpO1xuICAgICAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBpcHMocGlwcykge1xuICAgICAgICAgICAgLy8gRml4ICM2NjlcbiAgICAgICAgICAgIHJlbW92ZVBpcHMoKTtcbiAgICAgICAgICAgIHZhciBzcHJlYWQgPSBnZW5lcmF0ZVNwcmVhZChwaXBzKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBwaXBzLmZpbHRlcjtcbiAgICAgICAgICAgIHZhciBmb3JtYXQgPSBwaXBzLmZvcm1hdCB8fCB7XG4gICAgICAgICAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKE1hdGgucm91bmQodmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2NvcGVfUGlwcyA9IHNjb3BlX1RhcmdldC5hcHBlbmRDaGlsZChhZGRNYXJraW5nKHNwcmVhZCwgZmlsdGVyLCBmb3JtYXQpKTtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9QaXBzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNob3J0aGFuZCBmb3IgYmFzZSBkaW1lbnNpb25zLlxuICAgICAgICBmdW5jdGlvbiBiYXNlU2l6ZSgpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2NvcGVfQmFzZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHZhciBhbHQgPSAoXCJvZmZzZXRcIiArIFtcIldpZHRoXCIsIFwiSGVpZ2h0XCJdW29wdGlvbnMub3J0XSk7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vcnQgPT09IDAgPyByZWN0LndpZHRoIHx8IHNjb3BlX0Jhc2VbYWx0XSA6IHJlY3QuaGVpZ2h0IHx8IHNjb3BlX0Jhc2VbYWx0XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVyIGZvciBhdHRhY2hpbmcgZXZlbnRzIHRyb3VnaCBhIHByb3h5LlxuICAgICAgICBmdW5jdGlvbiBhdHRhY2hFdmVudChldmVudHMsIGVsZW1lbnQsIGNhbGxiYWNrLCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvICdmaWx0ZXInIGV2ZW50cyB0byB0aGUgc2xpZGVyLlxuICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhIG5vZGUsIG5vdCBhIG5vZGVMaXN0XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBmaXhFdmVudChldmVudCwgZGF0YS5wYWdlT2Zmc2V0LCBkYXRhLnRhcmdldCB8fCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyBmaXhFdmVudCByZXR1cm5zIGZhbHNlIGlmIHRoaXMgZXZlbnQgaGFzIGEgZGlmZmVyZW50IHRhcmdldFxuICAgICAgICAgICAgICAgIC8vIHdoZW4gaGFuZGxpbmcgKG11bHRpLSkgdG91Y2ggZXZlbnRzO1xuICAgICAgICAgICAgICAgIGlmICghZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRvTm90UmVqZWN0IGlzIHBhc3NlZCBieSBhbGwgZW5kIGV2ZW50cyB0byBtYWtlIHN1cmUgcmVsZWFzZWQgdG91Y2hlc1xuICAgICAgICAgICAgICAgIC8vIGFyZSBub3QgcmVqZWN0ZWQsIGxlYXZpbmcgdGhlIHNsaWRlciBcInN0dWNrXCIgdG8gdGhlIGN1cnNvcjtcbiAgICAgICAgICAgICAgICBpZiAoaXNTbGlkZXJEaXNhYmxlZCgpICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcCBpZiBhbiBhY3RpdmUgJ3RhcCcgdHJhbnNpdGlvbiBpcyB0YWtpbmcgcGxhY2UuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCkgJiYgIWRhdGEuZG9Ob3RSZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50cyA9PT0gYWN0aW9ucy5zdGFydCAmJiBlLmJ1dHRvbnMgIT09IHVuZGVmaW5lZCAmJiBlLmJ1dHRvbnMgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhvdmVyICYmIGUuYnV0dG9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICdzdXBwb3J0c1Bhc3NpdmUnIGlzIG9ubHkgdHJ1ZSBpZiBhIGJyb3dzZXIgYWxzbyBzdXBwb3J0cyB0b3VjaC1hY3Rpb246IG5vbmUgaW4gQ1NTLlxuICAgICAgICAgICAgICAgIC8vIGlPUyBzYWZhcmkgZG9lcyBub3QsIHNvIGl0IGRvZXNuJ3QgZ2V0IHRvIGJlbmVmaXQgZnJvbSBwYXNzaXZlIHNjcm9sbGluZy4gaU9TIGRvZXMgc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uLCBidXQgdGhhdCBhbGxvd3MgcGFubmluZywgd2hpY2ggYnJlYWtzXG4gICAgICAgICAgICAgICAgLy8gc2xpZGVycyBhZnRlciB6b29taW5nL29uIG5vbi1yZXNwb25zaXZlIHBhZ2VzLlxuICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzMzExMlxuICAgICAgICAgICAgICAgIGlmICghc3VwcG9ydHNQYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5jYWxjUG9pbnQgPSBlLnBvaW50c1tvcHRpb25zLm9ydF07XG4gICAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgZXZlbnQgaGFuZGxlciB3aXRoIHRoZSBldmVudCBbIGFuZCBhZGRpdGlvbmFsIGRhdGEgXS5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG1ldGhvZHMgPSBbXTtcbiAgICAgICAgICAgIC8vIEJpbmQgYSBjbG9zdXJlIG9uIHRoZSB0YXJnZXQgZm9yIGV2ZXJ5IGV2ZW50IHR5cGUuXG4gICAgICAgICAgICBldmVudHMuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG1ldGhvZCwgc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZSk7XG4gICAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKFtldmVudE5hbWUsIG1ldGhvZF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kcztcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm92aWRlIGEgY2xlYW4gZXZlbnQgd2l0aCBzdGFuZGFyZGl6ZWQgb2Zmc2V0IHZhbHVlcy5cbiAgICAgICAgZnVuY3Rpb24gZml4RXZlbnQoZSwgcGFnZU9mZnNldCwgZXZlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIC8vIEZpbHRlciB0aGUgZXZlbnQgdG8gcmVnaXN0ZXIgdGhlIHR5cGUsIHdoaWNoIGNhbiBiZVxuICAgICAgICAgICAgLy8gdG91Y2gsIG1vdXNlIG9yIHBvaW50ZXIuIE9mZnNldCBjaGFuZ2VzIG5lZWQgdG8gYmVcbiAgICAgICAgICAgIC8vIG1hZGUgb24gYW4gZXZlbnQgc3BlY2lmaWMgYmFzaXMuXG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBlLnR5cGUuaW5kZXhPZihcInRvdWNoXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIG1vdXNlID0gZS50eXBlLmluZGV4T2YoXCJtb3VzZVwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciBwb2ludGVyID0gZS50eXBlLmluZGV4T2YoXCJwb2ludGVyXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIHggPSAwO1xuICAgICAgICAgICAgdmFyIHkgPSAwO1xuICAgICAgICAgICAgLy8gSUUxMCBpbXBsZW1lbnRlZCBwb2ludGVyIGV2ZW50cyB3aXRoIGEgcHJlZml4O1xuICAgICAgICAgICAgaWYgKGUudHlwZS5pbmRleE9mKFwiTVNQb2ludGVyXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBFcnJvbmVvdXMgZXZlbnRzIHNlZW0gdG8gYmUgcGFzc2VkIGluIG9jY2FzaW9uYWxseSBvbiBpT1MvaVBhZE9TIGFmdGVyIHVzZXIgZmluaXNoZXMgaW50ZXJhY3Rpbmcgd2l0aFxuICAgICAgICAgICAgLy8gdGhlIHNsaWRlci4gVGhleSBhcHBlYXIgdG8gYmUgb2YgdHlwZSBNb3VzZUV2ZW50LCB5ZXQgdGhleSBkb24ndCBoYXZlIHVzdWFsIHByb3BlcnRpZXMgc2V0LiBJZ25vcmVcbiAgICAgICAgICAgIC8vIGV2ZW50cyB0aGF0IGhhdmUgbm8gdG91Y2hlcyBvciBidXR0b25zIGFzc29jaWF0ZWQgd2l0aCB0aGVtLiAoIzEwNTcsICMxMDc5LCAjMTA5NSlcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwibW91c2Vkb3duXCIgJiYgIWUuYnV0dG9ucyAmJiAhZS50b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIG9ubHkgdGhpbmcgb25lIGhhbmRsZSBzaG91bGQgYmUgY29uY2VybmVkIGFib3V0IGlzIHRoZSB0b3VjaGVzIHRoYXQgb3JpZ2luYXRlZCBvbiB0b3Agb2YgaXQuXG4gICAgICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm5zIHRydWUgaWYgYSB0b3VjaCBvcmlnaW5hdGVkIG9uIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICAgICAgdmFyIGlzVG91Y2hPblRhcmdldCA9IGZ1bmN0aW9uIChjaGVja1RvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBjaGVja1RvdWNoLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0YXJnZXQgPT09IGV2ZW50VGFyZ2V0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldC5jb250YWlucyh0YXJnZXQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5jb21wb3NlZCAmJiBlLmNvbXBvc2VkUGF0aCgpLnNoaWZ0KCkgPT09IGV2ZW50VGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgY2FzZSBvZiB0b3VjaHN0YXJ0IGV2ZW50cywgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlcmUgaXMgc3RpbGwgbm8gbW9yZSB0aGFuIG9uZVxuICAgICAgICAgICAgICAgIC8vIHRvdWNoIG9uIHRoZSB0YXJnZXQgc28gd2UgbG9vayBhbW9uZ3N0IGFsbCB0b3VjaGVzLlxuICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwidG91Y2hzdGFydFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaGVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGUudG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IHN1cHBvcnQgbW9yZSB0aGFuIG9uZSB0b3VjaCBwZXIgaGFuZGxlLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW4gdGhlIG90aGVyIGNhc2VzLCBmaW5kIG9uIGNoYW5nZWRUb3VjaGVzIGlzIGVub3VnaC5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFRvdWNoID0gQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChlLmNoYW5nZWRUb3VjaGVzLCBpc1RvdWNoT25UYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBDYW5jZWwgaWYgdGhlIHRhcmdldCB0b3VjaCBoYXMgbm90IG1vdmVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB5ID0gdGFyZ2V0VG91Y2gucGFnZVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQgfHwgZ2V0UGFnZU9mZnNldChzY29wZV9Eb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAobW91c2UgfHwgcG9pbnRlcikge1xuICAgICAgICAgICAgICAgIHggPSBlLmNsaWVudFggKyBwYWdlT2Zmc2V0Lng7XG4gICAgICAgICAgICAgICAgeSA9IGUuY2xpZW50WSArIHBhZ2VPZmZzZXQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQ7XG4gICAgICAgICAgICBlLnBvaW50cyA9IFt4LCB5XTtcbiAgICAgICAgICAgIGUuY3Vyc29yID0gbW91c2UgfHwgcG9pbnRlcjsgLy8gRml4ICM0MzVcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRyYW5zbGF0ZSBhIGNvb3JkaW5hdGUgaW4gdGhlIGRvY3VtZW50IHRvIGEgcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGNQb2ludFRvUGVyY2VudGFnZShjYWxjUG9pbnQpIHtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IGNhbGNQb2ludCAtIG9mZnNldChzY29wZV9CYXNlLCBvcHRpb25zLm9ydCk7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSAobG9jYXRpb24gKiAxMDApIC8gYmFzZVNpemUoKTtcbiAgICAgICAgICAgIC8vIENsYW1wIHByb3Bvc2FsIGJldHdlZW4gMCUgYW5kIDEwMCVcbiAgICAgICAgICAgIC8vIE91dC1vZi1ib3VuZCBjb29yZGluYXRlcyBtYXkgb2NjdXIgd2hlbiAubm9VaS1iYXNlIHBzZXVkby1lbGVtZW50c1xuICAgICAgICAgICAgLy8gYXJlIHVzZWQgKGUuZy4gY29udGFpbmVkIGhhbmRsZXMgZmVhdHVyZSlcbiAgICAgICAgICAgIHByb3Bvc2FsID0gbGltaXQocHJvcG9zYWwpO1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyID8gMTAwIC0gcHJvcG9zYWwgOiBwcm9wb3NhbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5kIGhhbmRsZSBjbG9zZXN0IHRvIGEgY2VydGFpbiBwZXJjZW50YWdlIG9uIHRoZSBzbGlkZXJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q2xvc2VzdEhhbmRsZShjbGlja2VkUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzbWFsbGVzdERpZmZlcmVuY2UgPSAxMDA7XG4gICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZmFsc2U7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlZCBoYW5kbGVzIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgaWYgKGlzSGFuZGxlRGlzYWJsZWQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZVBvc2l0aW9uID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlID0gTWF0aC5hYnMoaGFuZGxlUG9zaXRpb24gLSBjbGlja2VkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIC8vIEluaXRpYWwgc3RhdGVcbiAgICAgICAgICAgICAgICB2YXIgY2xpY2tBdEVkZ2UgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPT09IDEwMCAmJiBzbWFsbGVzdERpZmZlcmVuY2UgPT09IDEwMDtcbiAgICAgICAgICAgICAgICAvLyBEaWZmZXJlbmNlIHdpdGggdGhpcyBoYW5kbGUgaXMgc21hbGxlciB0aGFuIHRoZSBwcmV2aW91c2x5IGNoZWNrZWQgaGFuZGxlXG4gICAgICAgICAgICAgICAgdmFyIGlzQ2xvc2VyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDwgc21hbGxlc3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgICAgIHZhciBpc0Nsb3NlckFmdGVyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDw9IHNtYWxsZXN0RGlmZmVyZW5jZSAmJiBjbGlja2VkUG9zaXRpb24gPiBoYW5kbGVQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAoaXNDbG9zZXIgfHwgaXNDbG9zZXJBZnRlciB8fCBjbGlja0F0RWRnZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgc21hbGxlc3REaWZmZXJlbmNlID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJlICdlbmQnIHdoZW4gYSBtb3VzZSBvciBwZW4gbGVhdmVzIHRoZSBkb2N1bWVudC5cbiAgICAgICAgZnVuY3Rpb24gZG9jdW1lbnRMZWF2ZShldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2VvdXRcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gXCJIVE1MXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRFbmQoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBtb3ZlbWVudCBvbiBkb2N1bWVudCBmb3IgaGFuZGxlIGFuZCByYW5nZSBkcmFnLlxuICAgICAgICBmdW5jdGlvbiBldmVudE1vdmUoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIEZpeCAjNDk4XG4gICAgICAgICAgICAvLyBDaGVjayB2YWx1ZSBvZiAuYnV0dG9ucyBpbiAnc3RhcnQnIHRvIHdvcmsgYXJvdW5kIGEgYnVnIGluIElFMTAgbW9iaWxlIChkYXRhLmJ1dHRvbnNQcm9wZXJ0eSkuXG4gICAgICAgICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzkyNzAwNS9tb2JpbGUtaWUxMC13aW5kb3dzLXBob25lLWJ1dHRvbnMtcHJvcGVydHktb2YtcG9pbnRlcm1vdmUtZXZlbnQtYWx3YXlzLXplcm9cbiAgICAgICAgICAgIC8vIElFOSBoYXMgLmJ1dHRvbnMgYW5kIC53aGljaCB6ZXJvIG9uIG1vdXNlbW92ZS5cbiAgICAgICAgICAgIC8vIEZpcmVmb3ggYnJlYWtzIHRoZSBzcGVjIE1ETiBkZWZpbmVzLlxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNU0lFIDlcIikgPT09IC0xICYmIGV2ZW50LmJ1dHRvbnMgPT09IDAgJiYgZGF0YS5idXR0b25zUHJvcGVydHkgIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRFbmQoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgYXJlIG1vdmluZyB1cCBvciBkb3duXG4gICAgICAgICAgICB2YXIgbW92ZW1lbnQgPSAob3B0aW9ucy5kaXIgPyAtMSA6IDEpICogKGV2ZW50LmNhbGNQb2ludCAtIGRhdGEuc3RhcnRDYWxjUG9pbnQpO1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgbW92ZW1lbnQgaW50byBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHNsaWRlciB3aWR0aC9oZWlnaHRcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IChtb3ZlbWVudCAqIDEwMCkgLyBkYXRhLmJhc2VTaXplO1xuICAgICAgICAgICAgbW92ZUhhbmRsZXMobW92ZW1lbnQgPiAwLCBwcm9wb3NhbCwgZGF0YS5sb2NhdGlvbnMsIGRhdGEuaGFuZGxlTnVtYmVycywgZGF0YS5jb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVbmJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQsIGNhbGwgY2FsbGJhY2tzLlxuICAgICAgICBmdW5jdGlvbiBldmVudEVuZChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gVGhlIGhhbmRsZSBpcyBubyBsb25nZXIgYWN0aXZlLCBzbyByZW1vdmUgdGhlIGNsYXNzLlxuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZGF0YS5oYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVW5iaW5kIHRoZSBtb3ZlIGFuZCBlbmQgZXZlbnRzLCB3aGljaCBhcmUgYWRkZWQgb24gJ3N0YXJ0Jy5cbiAgICAgICAgICAgIGRhdGEubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9Eb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihjWzBdLCBjWzFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkcmFnZ2luZyBjbGFzcy5cbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnKTtcbiAgICAgICAgICAgICAgICBzZXRaaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY3Vyc29yIHN0eWxlcyBhbmQgdGV4dC1zZWxlY3Rpb24gZXZlbnRzIGJvdW5kIHRvIHRoZSBib2R5LlxuICAgICAgICAgICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfQm9keS5zdHlsZS5jdXJzb3IgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImVuZFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQmluZCBtb3ZlIGV2ZW50cyBvbiBkb2N1bWVudC5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRTdGFydChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gSWdub3JlIGV2ZW50IGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZU51bWJlcnMuc29tZShpc0hhbmRsZURpc2FibGVkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoYW5kbGU7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2RhdGEuaGFuZGxlTnVtYmVyc1swXV07XG4gICAgICAgICAgICAgICAgaGFuZGxlID0gaGFuZGxlT3JpZ2luLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIGhhbmRsZSBhcyAnYWN0aXZlJyBzbyBpdCBjYW4gYmUgc3R5bGVkLlxuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBIGRyYWcgc2hvdWxkIG5ldmVyIHByb3BhZ2F0ZSB1cCB0byB0aGUgJ3RhcCcgZXZlbnQuXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8vIFJlY29yZCB0aGUgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBtb3ZlIGFuZCBlbmQgZXZlbnRzLlxuICAgICAgICAgICAgdmFyIG1vdmVFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBldmVudE1vdmUsIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZXZlbnQgdGFyZ2V0IGhhcyBjaGFuZ2VkIHNvIHdlIG5lZWQgdG8gcHJvcGFnYXRlIHRoZSBvcmlnaW5hbCBvbmUgc28gdGhhdCB3ZSBrZWVwXG4gICAgICAgICAgICAgICAgLy8gcmVseWluZyBvbiBpdCB0byBleHRyYWN0IHRhcmdldCB0b3VjaGVzLlxuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGRhdGEuY29ubmVjdCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBzdGFydENhbGNQb2ludDogZXZlbnQuY2FsY1BvaW50LFxuICAgICAgICAgICAgICAgIGJhc2VTaXplOiBiYXNlU2l6ZSgpLFxuICAgICAgICAgICAgICAgIHBhZ2VPZmZzZXQ6IGV2ZW50LnBhZ2VPZmZzZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnNQcm9wZXJ0eTogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnM6IHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBlbmRFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMuZW5kLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGV2ZW50RW5kLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgZG9Ob3RSZWplY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBvdXRFdmVudCA9IGF0dGFjaEV2ZW50KFwibW91c2VvdXRcIiwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudExlYXZlLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgZG9Ob3RSZWplY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIHB1c2hlZCB0aGUgbGlzdGVuZXJzIGluIHRoZSBsaXN0ZW5lciBsaXN0IHJhdGhlciB0aGFuIGNyZWF0aW5nXG4gICAgICAgICAgICAvLyBhIG5ldyBvbmUgYXMgaXQgaGFzIGFscmVhZHkgYmVlbiBwYXNzZWQgdG8gdGhlIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2guYXBwbHkobGlzdGVuZXJzLCBtb3ZlRXZlbnQuY29uY2F0KGVuZEV2ZW50LCBvdXRFdmVudCkpO1xuICAgICAgICAgICAgLy8gVGV4dCBzZWxlY3Rpb24gaXNuJ3QgYW4gaXNzdWUgb24gdG91Y2ggZGV2aWNlcyxcbiAgICAgICAgICAgIC8vIHNvIGFkZGluZyBjdXJzb3Igc3R5bGVzIGNhbiBiZSBza2lwcGVkLlxuICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlICdJJyBjdXJzb3IgYW5kIGV4dGVuZCB0aGUgcmFuZ2UtZHJhZyBjdXJzb3IuXG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5zdHlsZS5jdXJzb3IgPSBnZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldCkuY3Vyc29yO1xuICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIHRhcmdldCB3aXRoIGEgZHJhZ2dpbmcgc3RhdGUuXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0ZXh0IHNlbGVjdGlvbiB3aGVuIGRyYWdnaW5nIHRoZSBoYW5kbGVzLlxuICAgICAgICAgICAgICAgIC8vIEluIG5vVWlTbGlkZXIgPD0gOS4yLjAsIHRoaXMgd2FzIGhhbmRsZWQgYnkgY2FsbGluZyBwcmV2ZW50RGVmYXVsdCBvbiBtb3VzZS90b3VjaCBzdGFydC9tb3ZlLFxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGlzIHNjcm9sbCBibG9ja2luZy4gVGhlIHNlbGVjdHN0YXJ0IGV2ZW50IGlzIHN1cHBvcnRlZCBieSBGaXJlRm94IHN0YXJ0aW5nIGZyb20gdmVyc2lvbiA1MixcbiAgICAgICAgICAgICAgICAvLyBtZWFuaW5nIHRoZSBvbmx5IGhvbGRvdXQgaXMgaU9TIFNhZmFyaS4gVGhpcyBkb2Vzbid0IG1hdHRlcjogdGV4dCBzZWxlY3Rpb24gaXNuJ3QgdHJpZ2dlcmVkIHRoZXJlLlxuICAgICAgICAgICAgICAgIC8vIFRoZSAnY3Vyc29yJyBmbGFnIGlzIGZhbHNlLlxuICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9c2VsZWN0c3RhcnRcbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInN0YXJ0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlIGNsb3Nlc3QgaGFuZGxlIHRvIHRhcHBlZCBsb2NhdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRUYXAoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFRoZSB0YXAgZXZlbnQgc2hvdWxkbid0IHByb3BhZ2F0ZSB1cFxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcbiAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBnZXRDbG9zZXN0SGFuZGxlKHByb3Bvc2FsKTtcbiAgICAgICAgICAgIC8vIFRhY2tsZSB0aGUgY2FzZSB0aGF0IGFsbCBoYW5kbGVzIGFyZSAnZGlzYWJsZWQnLlxuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGbGFnIHRoZSBzbGlkZXIgYXMgaXQgaXMgbm93IGluIGEgdHJhbnNpdGlvbmFsIHN0YXRlLlxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiB0YWtlcyBhIGNvbmZpZ3VyYWJsZSBhbW91bnQgb2YgbXMgKGRlZmF1bHQgMzAwKS4gUmUtZW5hYmxlIHRoZSBzbGlkZXIgYWZ0ZXIgdGhhdC5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5ldmVudHMuc25hcCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBwcm9wb3NhbCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRaaW5kZXgoKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5ldmVudHMuc25hcCkge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnRTdGFydChldmVudCwgeyBoYW5kbGVOdW1iZXJzOiBbaGFuZGxlTnVtYmVyXSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJlcyBhICdob3ZlcicgZXZlbnQgZm9yIGEgaG92ZXJlZCBtb3VzZS9wZW4gcG9zaXRpb24uXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50SG92ZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IGNhbGNQb2ludFRvUGVyY2VudGFnZShldmVudC5jYWxjUG9pbnQpO1xuICAgICAgICAgICAgdmFyIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcChwcm9wb3NhbCk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcImhvdmVyXCIgPT09IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXSkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHNjb3BlX1NlbGYsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlcyBrZXlkb3duIG9uIGZvY3VzZWQgaGFuZGxlc1xuICAgICAgICAvLyBEb24ndCBtb3ZlIHRoZSBkb2N1bWVudCB3aGVuIHByZXNzaW5nIGFycm93IGtleXMgb24gZm9jdXNlZCBoYW5kbGVzXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoaXNTbGlkZXJEaXNhYmxlZCgpIHx8IGlzSGFuZGxlRGlzYWJsZWQoaGFuZGxlTnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBob3Jpem9udGFsS2V5cyA9IFtcIkxlZnRcIiwgXCJSaWdodFwiXTtcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNhbEtleXMgPSBbXCJEb3duXCIsIFwiVXBcIl07XG4gICAgICAgICAgICB2YXIgbGFyZ2VTdGVwS2V5cyA9IFtcIlBhZ2VEb3duXCIsIFwiUGFnZVVwXCJdO1xuICAgICAgICAgICAgdmFyIGVkZ2VLZXlzID0gW1wiSG9tZVwiLCBcIkVuZFwiXTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRpciAmJiAhb3B0aW9ucy5vcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBPbiBhbiByaWdodC10by1sZWZ0IHNsaWRlciwgdGhlIGxlZnQgYW5kIHJpZ2h0IGtleXMgYWN0IGludmVydGVkXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbEtleXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5vcnQgJiYgIW9wdGlvbnMuZGlyKSB7XG4gICAgICAgICAgICAgICAgLy8gT24gYSB0b3AtdG8tYm90dG9tIHNsaWRlciwgdGhlIHVwIGFuZCBkb3duIGtleXMgYWN0IGludmVydGVkXG4gICAgICAgICAgICAgICAgdmVydGljYWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBsYXJnZVN0ZXBLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0cmlwIFwiQXJyb3dcIiBmb3IgSUUgY29tcGF0aWJpbGl0eS4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5XG4gICAgICAgICAgICB2YXIga2V5ID0gZXZlbnQua2V5LnJlcGxhY2UoXCJBcnJvd1wiLCBcIlwiKTtcbiAgICAgICAgICAgIHZhciBpc0xhcmdlRG93biA9IGtleSA9PT0gbGFyZ2VTdGVwS2V5c1swXTtcbiAgICAgICAgICAgIHZhciBpc0xhcmdlVXAgPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMV07XG4gICAgICAgICAgICB2YXIgaXNEb3duID0ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMF0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1swXSB8fCBpc0xhcmdlRG93bjtcbiAgICAgICAgICAgIHZhciBpc1VwID0ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMV0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1sxXSB8fCBpc0xhcmdlVXA7XG4gICAgICAgICAgICB2YXIgaXNNaW4gPSBrZXkgPT09IGVkZ2VLZXlzWzBdO1xuICAgICAgICAgICAgdmFyIGlzTWF4ID0ga2V5ID09PSBlZGdlS2V5c1sxXTtcbiAgICAgICAgICAgIGlmICghaXNEb3duICYmICFpc1VwICYmICFpc01pbiAmJiAhaXNNYXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgdG87XG4gICAgICAgICAgICBpZiAoaXNVcCB8fCBpc0Rvd24pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gaXNEb3duID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzID0gZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXAgPSBzdGVwc1tkaXJlY3Rpb25dO1xuICAgICAgICAgICAgICAgIC8vIEF0IHRoZSBlZGdlIG9mIGEgc2xpZGVyLCBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBzdGVwIHNldCwgdXNlIHRoZSBkZWZhdWx0IG9mIDEwJSBvZiB0aGUgc3ViLXJhbmdlXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBzY29wZV9TcGVjdHJ1bS5nZXREZWZhdWx0U3RlcChzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSwgaXNEb3duLCBvcHRpb25zLmtleWJvYXJkRGVmYXVsdFN0ZXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNMYXJnZVVwIHx8IGlzTGFyZ2VEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgKj0gb3B0aW9ucy5rZXlib2FyZFBhZ2VNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCAqPSBvcHRpb25zLmtleWJvYXJkTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RlcCBvdmVyIHplcm8tbGVuZ3RoIHJhbmdlcyAoIzk0OCk7XG4gICAgICAgICAgICAgICAgc3RlcCA9IE1hdGgubWF4KHN0ZXAsIDAuMDAwMDAwMSk7XG4gICAgICAgICAgICAgICAgLy8gRGVjcmVtZW50IGZvciBkb3duIHN0ZXBzXG4gICAgICAgICAgICAgICAgc3RlcCA9IChpc0Rvd24gPyAtMSA6IDEpICogc3RlcDtcbiAgICAgICAgICAgICAgICB0byA9IHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdICsgc3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzTWF4KSB7XG4gICAgICAgICAgICAgICAgLy8gRW5kIGtleVxuICAgICAgICAgICAgICAgIHRvID0gb3B0aW9ucy5zcGVjdHJ1bS54VmFsW29wdGlvbnMuc3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhvbWUga2V5XG4gICAgICAgICAgICAgICAgdG8gPSBvcHRpb25zLnNwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHRvKSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF0dGFjaCBldmVudHMgdG8gc2V2ZXJhbCBzbGlkZXIgcGFydHMuXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRTbGlkZXJFdmVudHMoYmVoYXZpb3VyKSB7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIHN0YW5kYXJkIGRyYWcgZXZlbnQgdG8gdGhlIGhhbmRsZXMuXG4gICAgICAgICAgICBpZiAoIWJlaGF2aW91ci5maXhlZCkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBldmVudHMgYXJlIG9ubHkgYm91bmQgdG8gdGhlIHZpc3VhbCBoYW5kbGVcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudCwgbm90IHRoZSAncmVhbCcgb3JpZ2luIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGhhbmRsZS5jaGlsZHJlblswXSwgZXZlbnRTdGFydCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogW2luZGV4XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgdGFwIGV2ZW50IHRvIHRoZSBzbGlkZXIgYmFzZS5cbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIudGFwKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgc2NvcGVfQmFzZSwgZXZlbnRUYXAsIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpcmUgaG92ZXIgZXZlbnRzXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmhvdmVyKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5tb3ZlLCBzY29wZV9CYXNlLCBldmVudEhvdmVyLCB7XG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHRoZSByYW5nZSBkcmFnZ2FibGUuXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWcpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9Db25uZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChjb25uZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29ubmVjdCA9PT0gZmFsc2UgfHwgaW5kZXggPT09IDAgfHwgaW5kZXggPT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQmVmb3JlID0gc2NvcGVfSGFuZGxlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQWZ0ZXIgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50SG9sZGVycyA9IFtjb25uZWN0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXNUb0RyYWcgPSBbaGFuZGxlQmVmb3JlLCBoYW5kbGVBZnRlcl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXJzVG9EcmFnID0gW2luZGV4IC0gMSwgaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhjb25uZWN0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZ2dhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgcmFuZ2UgaXMgZml4ZWQsIHRoZSBlbnRpcmUgcmFuZ2UgY2FuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlIGRyYWdnZWQgYnkgdGhlIGhhbmRsZXMuIFRoZSBoYW5kbGUgaW4gdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgIC8vIG9yaWdpbiB3aWxsIHByb3BhZ2F0ZSB0aGUgc3RhcnQgZXZlbnQgdXB3YXJkLFxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgaXQgbmVlZHMgdG8gYmUgYm91bmQgbWFudWFsbHkgb24gdGhlIG90aGVyLlxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMucHVzaChoYW5kbGVCZWZvcmUuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQWZ0ZXIuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZ0FsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlc1RvRHJhZyA9IHNjb3BlX0hhbmRsZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzVG9EcmFnID0gc2NvcGVfSGFuZGxlTnVtYmVycztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIb2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGV2ZW50SG9sZGVyLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogaGFuZGxlc1RvRHJhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBoYW5kbGVOdW1iZXJzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBdHRhY2ggYW4gZXZlbnQgdG8gdGhpcyBzbGlkZXIsIHBvc3NpYmx5IGluY2x1ZGluZyBhIG5hbWVzcGFjZVxuICAgICAgICBmdW5jdGlvbiBiaW5kRXZlbnQobmFtZXNwYWNlZEV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gPSBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XSB8fCBbXTtcbiAgICAgICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGV2ZW50IGJvdW5kIGlzICd1cGRhdGUsJyBmaXJlIGl0IGltbWVkaWF0ZWx5IGZvciBhbGwgaGFuZGxlcy5cbiAgICAgICAgICAgIGlmIChuYW1lc3BhY2VkRXZlbnQuc3BsaXQoXCIuXCIpWzBdID09PSBcInVwZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzSW50ZXJuYWxOYW1lc3BhY2UobmFtZXNwYWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZXNwYWNlID09PSBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhIHx8IG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5kbyBhdHRhY2htZW50IG9mIGV2ZW50XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5hbWVzcGFjZWRFdmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmFtZXNwYWNlZEV2ZW50ICYmIG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlID0gZXZlbnQgPyBuYW1lc3BhY2VkRXZlbnQuc3Vic3RyaW5nKGV2ZW50Lmxlbmd0aCkgOiBuYW1lc3BhY2VkRXZlbnQ7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGJpbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdEV2ZW50ID0gYmluZC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICAgICAgdmFyIHROYW1lc3BhY2UgPSBiaW5kLnN1YnN0cmluZyh0RXZlbnQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAoKCFldmVudCB8fCBldmVudCA9PT0gdEV2ZW50KSAmJiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgZGVsZXRlIHByb3RlY3RlZCBpbnRlcm5hbCBldmVudCBpZiBpbnRlbnRpb25hbFxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSW50ZXJuYWxOYW1lc3BhY2UodE5hbWVzcGFjZSkgfHwgbmFtZXNwYWNlID09PSB0TmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2NvcGVfRXZlbnRzW2JpbmRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRXh0ZXJuYWwgZXZlbnQgaGFuZGxpbmdcbiAgICAgICAgZnVuY3Rpb24gZmlyZUV2ZW50KGV2ZW50TmFtZSwgaGFuZGxlTnVtYmVyLCB0YXApIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRUeXBlID0gdGFyZ2V0RXZlbnQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09IGV2ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBzbGlkZXIgcHVibGljIEFQSSBhcyB0aGUgc2NvcGUgKCd0aGlzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1NlbGYsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIHZhbHVlcyBhcyBhcnJheSwgc28gYXJnXzFbYXJnXzJdIGlzIGFsd2F5cyB2YWxpZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBpbmRleCwgMCBvciAxXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW4tZm9ybWF0dGVkIHNsaWRlciB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV2ZW50IGlzIGZpcmVkIGJ5IHRhcCwgdHJ1ZSBvciBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFwIHx8IGZhbHNlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExlZnQgb2Zmc2V0IG9mIHRoZSBoYW5kbGUsIGluIHJlbGF0aW9uIHRvIHRoZSBzbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgdG8gYW4gYWNjZXNzaWJsZSBwYXJhbWV0ZXIgd2hlbiB0aGlzIGlzIHVuYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3BsaXQgb3V0IHRoZSBoYW5kbGUgcG9zaXRpb25pbmcgbG9naWMgc28gdGhlIE1vdmUgZXZlbnQgY2FuIHVzZSBpdCwgdG9vXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrSGFuZGxlUG9zaXRpb24ocmVmZXJlbmNlLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBnZXRWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlO1xuICAgICAgICAgICAgLy8gRm9yIHNsaWRlcnMgd2l0aCBtdWx0aXBsZSBoYW5kbGVzLCBsaW1pdCBtb3ZlbWVudCB0byB0aGUgb3RoZXIgaGFuZGxlLlxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIG1hcmdpbiBvcHRpb24gYnkgYWRkaW5nIGl0IHRvIHRoZSBoYW5kbGUgcG9zaXRpb25zLlxuICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSAmJiAhb3B0aW9ucy5ldmVudHMudW5jb25zdHJhaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChsb29rQmFja3dhcmQgJiYgaGFuZGxlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLm1hcmdpbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb29rRm9yd2FyZCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgKyAxXSwgb3B0aW9ucy5tYXJnaW4sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIGxpbWl0IG9wdGlvbiBoYXMgdGhlIG9wcG9zaXRlIGVmZmVjdCwgbGltaXRpbmcgaGFuZGxlcyB0byBhXG4gICAgICAgICAgICAvLyBtYXhpbXVtIGRpc3RhbmNlIGZyb20gYW5vdGhlci4gTGltaXQgbXVzdCBiZSA+IDAsIGFzIG90aGVyd2lzZVxuICAgICAgICAgICAgLy8gaGFuZGxlcyB3b3VsZCBiZSB1bm1vdmFibGUuXG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxICYmIG9wdGlvbnMubGltaXQpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9va0JhY2t3YXJkICYmIGhhbmRsZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSwgb3B0aW9ucy5saW1pdCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb29rRm9yd2FyZCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgKyAxXSwgb3B0aW9ucy5saW1pdCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgcGFkZGluZyBvcHRpb24ga2VlcHMgdGhlIGhhbmRsZXMgYSBjZXJ0YWluIGRpc3RhbmNlIGZyb20gdGhlXG4gICAgICAgICAgICAvLyBlZGdlcyBvZiB0aGUgc2xpZGVyLiBQYWRkaW5nIG11c3QgYmUgPiAwLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGFkZGluZykge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKDAsIG9wdGlvbnMucGFkZGluZ1swXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UoMTAwLCBvcHRpb25zLnBhZGRpbmdbMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHRvKTtcbiAgICAgICAgICAgIC8vIExpbWl0IHBlcmNlbnRhZ2UgdG8gdGhlIDAgLSAxMDAgcmFuZ2VcbiAgICAgICAgICAgIHRvID0gbGltaXQodG8pO1xuICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIGhhbmRsZSBjYW4ndCBtb3ZlXG4gICAgICAgICAgICBpZiAodG8gPT09IHJlZmVyZW5jZVtoYW5kbGVOdW1iZXJdICYmICFnZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfVxuICAgICAgICAvLyBVc2VzIHNsaWRlciBvcmllbnRhdGlvbiB0byBjcmVhdGUgQ1NTIHJ1bGVzLiBhID0gYmFzZSB2YWx1ZTtcbiAgICAgICAgZnVuY3Rpb24gaW5SdWxlT3JkZXIodiwgYSkge1xuICAgICAgICAgICAgdmFyIG8gPSBvcHRpb25zLm9ydDtcbiAgICAgICAgICAgIHJldHVybiAobyA/IGEgOiB2KSArIFwiLCBcIiArIChvID8gdiA6IGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmVzIGhhbmRsZShzKSBieSBhIHBlcmNlbnRhZ2VcbiAgICAgICAgLy8gKGJvb2wsICUgdG8gbW92ZSwgWyUgd2hlcmUgaGFuZGxlIHN0YXJ0ZWQsIC4uLl0sIFtpbmRleCBpbiBzY29wZV9IYW5kbGVzLCAuLi5dKVxuICAgICAgICBmdW5jdGlvbiBtb3ZlSGFuZGxlcyh1cHdhcmQsIHByb3Bvc2FsLCBsb2NhdGlvbnMsIGhhbmRsZU51bWJlcnMsIGNvbm5lY3QpIHtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbHMgPSBsb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgICAgIC8vIFN0b3JlIGZpcnN0IGhhbmRsZSBub3csIHNvIHdlIHN0aWxsIGhhdmUgaXQgaW4gY2FzZSBoYW5kbGVOdW1iZXJzIGlzIHJldmVyc2VkXG4gICAgICAgICAgICB2YXIgZmlyc3RIYW5kbGUgPSBoYW5kbGVOdW1iZXJzWzBdO1xuICAgICAgICAgICAgdmFyIGIgPSBbIXVwd2FyZCwgdXB3YXJkXTtcbiAgICAgICAgICAgIHZhciBmID0gW3Vwd2FyZCwgIXVwd2FyZF07XG4gICAgICAgICAgICAvLyBDb3B5IGhhbmRsZU51bWJlcnMgc28gd2UgZG9uJ3QgY2hhbmdlIHRoZSBkYXRhc2V0XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzID0gaGFuZGxlTnVtYmVycy5zbGljZSgpO1xuICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIHdoaWNoIGhhbmRsZSBpcyAnbGVhZGluZycuXG4gICAgICAgICAgICAvLyBJZiB0aGF0IG9uZSBjYW4ndCBtb3ZlIHRoZSBzZWNvbmQgY2FuJ3QgZWl0aGVyLlxuICAgICAgICAgICAgaWYgKHVwd2FyZCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RlcCAxOiBnZXQgdGhlIG1heGltdW0gcGVyY2VudGFnZSB0aGF0IGFueSBvZiB0aGUgaGFuZGxlcyBjYW4gbW92ZVxuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyLCBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0byA9IGNoZWNrSGFuZGxlUG9zaXRpb24ocHJvcG9zYWxzLCBoYW5kbGVOdW1iZXIsIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdICsgcHJvcG9zYWwsIGJbb10sIGZbb10sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCBpZiBvbmUgb2YgdGhlIGhhbmRsZXMgY2FuJ3QgbW92ZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSB0byAtIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gPSB0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXNpbmcgb25lIGhhbmRsZSwgY2hlY2sgYmFja3dhcmQgQU5EIGZvcndhcmRcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGIgPSBmID0gW3RydWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBTdGVwIDI6IFRyeSB0byBzZXQgdGhlIGhhbmRsZXMgd2l0aCB0aGUgZm91bmQgcGVyY2VudGFnZVxuICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIGxvY2F0aW9uc1toYW5kbGVOdW1iZXJdICsgcHJvcG9zYWwsIGJbb10sIGZbb10pIHx8IHN0YXRlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTdGVwIDM6IElmIGEgaGFuZGxlIG1vdmVkLCBmaXJlIGV2ZW50c1xuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgY29ubmVjdCwgdGhlbiBmaXJlIGRyYWcgZXZlbnRcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiZHJhZ1wiLCBmaXJzdEhhbmRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRha2VzIGEgYmFzZSB2YWx1ZSBhbmQgYW4gb2Zmc2V0LiBUaGlzIG9mZnNldCBpcyB1c2VkIGZvciB0aGUgY29ubmVjdCBiYXIgc2l6ZS5cbiAgICAgICAgLy8gSW4gdGhlIGluaXRpYWwgZGVzaWduIGZvciB0aGlzIGZlYXR1cmUsIHRoZSBvcmlnaW4gZWxlbWVudCB3YXMgMSUgd2lkZS5cbiAgICAgICAgLy8gVW5mb3J0dW5hdGVseSwgYSByb3VuZGluZyBidWcgaW4gQ2hyb21lIG1ha2VzIGl0IGltcG9zc2libGUgdG8gaW1wbGVtZW50IHRoaXMgZmVhdHVyZVxuICAgICAgICAvLyBpbiB0aGlzIG1hbm5lcjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Nzk4MjIzXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zZm9ybURpcmVjdGlvbihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXIgPyAxMDAgLSBhIC0gYiA6IGE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlcyBzY29wZV9Mb2NhdGlvbnMgYW5kIHNjb3BlX1ZhbHVlcywgdXBkYXRlcyB2aXN1YWwgc3RhdGVcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlSGFuZGxlUG9zaXRpb24oaGFuZGxlTnVtYmVyLCB0bykge1xuICAgICAgICAgICAgLy8gVXBkYXRlIGxvY2F0aW9ucy5cbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID0gdG87XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSB2YWx1ZSB0byB0aGUgc2xpZGVyIHN0ZXBwaW5nL3JhbmdlLlxuICAgICAgICAgICAgc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl0gPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0aW9uID0gdHJhbnNmb3JtRGlyZWN0aW9uKHRvLCAwKSAtIHNjb3BlX0Rpck9mZnNldDtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVSdWxlID0gXCJ0cmFuc2xhdGUoXCIgKyBpblJ1bGVPcmRlcih0cmFuc2xhdGlvbiArIFwiJVwiLCBcIjBcIikgKyBcIilcIjtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5zdHlsZVtvcHRpb25zLnRyYW5zZm9ybVJ1bGVdID0gdHJhbnNsYXRlUnVsZTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlcyBiZWZvcmUgdGhlIHNsaWRlciBtaWRkbGUgYXJlIHN0YWNrZWQgbGF0ZXIgPSBoaWdoZXIsXG4gICAgICAgIC8vIEhhbmRsZXMgYWZ0ZXIgdGhlIG1pZGRsZSBsYXRlciBpcyBsb3dlclxuICAgICAgICAvLyBbWzddIFs4XSAuLi4uLi4uLi4uIHwgLi4uLi4uLi4uLiBbNV0gWzRdXG4gICAgICAgIGZ1bmN0aW9uIHNldFppbmRleCgpIHtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpciA9IHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID4gNTAgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgdmFyIHpJbmRleCA9IDMgKyAoc2NvcGVfSGFuZGxlcy5sZW5ndGggKyBkaXIgKiBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5zdHlsZS56SW5kZXggPSBTdHJpbmcoekluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRlc3Qgc3VnZ2VzdGVkIHZhbHVlcyBhbmQgYXBwbHkgbWFyZ2luLCBzdGVwLlxuICAgICAgICAvLyBpZiBleGFjdElucHV0IGlzIHRydWUsIGRvbid0IHJ1biBjaGVja0hhbmRsZVBvc2l0aW9uLCB0aGVuIHRoZSBoYW5kbGUgY2FuIGJlIHBsYWNlZCBpbiBiZXR3ZWVuIHN0ZXBzICgjNDM2KVxuICAgICAgICBmdW5jdGlvbiBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgaWYgKCFleGFjdElucHV0KSB7XG4gICAgICAgICAgICAgICAgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZUhhbmRsZVBvc2l0aW9uKGhhbmRsZU51bWJlciwgdG8pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlcyBzdHlsZSBhdHRyaWJ1dGUgZm9yIGNvbm5lY3Qgbm9kZXNcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ29ubmVjdChpbmRleCkge1xuICAgICAgICAgICAgLy8gU2tpcCBjb25uZWN0cyBzZXQgdG8gZmFsc2VcbiAgICAgICAgICAgIGlmICghc2NvcGVfQ29ubmVjdHNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGwgPSAwO1xuICAgICAgICAgICAgdmFyIGggPSAxMDA7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICBsID0gc2NvcGVfTG9jYXRpb25zW2luZGV4IC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBoID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIHVzZSB0d28gcnVsZXM6XG4gICAgICAgICAgICAvLyAndHJhbnNsYXRlJyB0byBjaGFuZ2UgdGhlIGxlZnQvdG9wIG9mZnNldDtcbiAgICAgICAgICAgIC8vICdzY2FsZScgdG8gY2hhbmdlIHRoZSB3aWR0aCBvZiB0aGUgZWxlbWVudDtcbiAgICAgICAgICAgIC8vIEFzIHRoZSBlbGVtZW50IGhhcyBhIHdpZHRoIG9mIDEwMCUsIGEgdHJhbnNsYXRpb24gb2YgMTAwJSBpcyBlcXVhbCB0byAxMDAlIG9mIHRoZSBwYXJlbnQgKC5ub1VpLWJhc2UpXG4gICAgICAgICAgICB2YXIgY29ubmVjdFdpZHRoID0gaCAtIGw7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNmb3JtRGlyZWN0aW9uKGwsIGNvbm5lY3RXaWR0aCkgKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XG4gICAgICAgICAgICB2YXIgc2NhbGVSdWxlID0gXCJzY2FsZShcIiArIGluUnVsZU9yZGVyKGNvbm5lY3RXaWR0aCAvIDEwMCwgXCIxXCIpICsgXCIpXCI7XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0c1tpbmRleF0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlUnVsZSArIFwiIFwiICsgc2NhbGVSdWxlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFBhcnNlcyB2YWx1ZSBwYXNzZWQgdG8gLnNldCBtZXRob2QuIFJldHVybnMgY3VycmVudCB2YWx1ZSBpZiBub3QgcGFyc2UtYWJsZS5cbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZVRvVmFsdWUodG8sIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgLy8gU2V0dGluZyB3aXRoIG51bGwgaW5kaWNhdGVzIGFuICdpZ25vcmUnLlxuICAgICAgICAgICAgLy8gSW5wdXR0aW5nICdmYWxzZScgaXMgaW52YWxpZC5cbiAgICAgICAgICAgIGlmICh0byA9PT0gbnVsbCB8fCB0byA9PT0gZmFsc2UgfHwgdG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGEgZm9ybWF0dGVkIG51bWJlciB3YXMgcGFzc2VkLCBhdHRlbXB0IHRvIGRlY29kZSBpdC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB0byA9IFN0cmluZyh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byA9IG9wdGlvbnMuZm9ybWF0LmZyb20odG8pO1xuICAgICAgICAgICAgaWYgKHRvICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBwYXJzaW5nIHRoZSBudW1iZXIgZmFpbGVkLCB1c2UgdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlIHx8IGlzTmFOKHRvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICAgICAgZnVuY3Rpb24gdmFsdWVTZXQoaW5wdXQsIGZpcmVTZXRFdmVudCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGFzQXJyYXkoaW5wdXQpO1xuICAgICAgICAgICAgdmFyIGlzSW5pdCA9IHNjb3BlX0xvY2F0aW9uc1swXSA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgLy8gRXZlbnQgZmlyZXMgYnkgZGVmYXVsdFxuICAgICAgICAgICAgZmlyZVNldEV2ZW50ID0gZmlyZVNldEV2ZW50ID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmlyZVNldEV2ZW50O1xuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGlzIG9wdGlvbmFsLlxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbml0aWFsIHZhbHVlcyB3ZXJlIHNldCBiZWZvcmUgdXNpbmcgYW5pbWF0ZWQgcGxhY2VtZW50LlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0ZSAmJiAhaXNJbml0KSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NGb3Ioc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpcnN0IHBhc3MsIHdpdGhvdXQgbG9va0FoZWFkIGJ1dCB3aXRoIGxvb2tCYWNrd2FyZC4gVmFsdWVzIGFyZSBzZXQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCByZXNvbHZlVG9WYWx1ZSh2YWx1ZXNbaGFuZGxlTnVtYmVyXSwgaGFuZGxlTnVtYmVyKSwgdHJ1ZSwgZmFsc2UsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgaSA9IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID09PSAxID8gMCA6IDE7XG4gICAgICAgICAgICAvLyBTcHJlYWQgaGFuZGxlcyBldmVubHkgYWNyb3NzIHRoZSBzbGlkZXIgaWYgdGhlIHJhbmdlIGhhcyBubyBzaXplIChtaW49bWF4KVxuICAgICAgICAgICAgaWYgKGlzSW5pdCAmJiBzY29wZV9TcGVjdHJ1bS5oYXNOb1NpemUoKSkge1xuICAgICAgICAgICAgICAgIGV4YWN0SW5wdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1swXSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BhY2VfMSA9IDEwMCAvIChzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSBoYW5kbGVOdW1iZXIgKiBzcGFjZV8xO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZWNvbmRhcnkgcGFzc2VzLiBOb3cgdGhhdCBhbGwgYmFzZSB2YWx1ZXMgYXJlIHNldCwgYXBwbHkgY29uc3RyYWludHMuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIGFsbCBoYW5kbGVzIHRvIGVuc3VyZSBjb25zdHJhaW50cyBhcmUgYXBwbGllZCBmb3IgdGhlIGVudGlyZSBzbGlkZXIgKElzc3VlICMxMDA5KVxuICAgICAgICAgICAgZm9yICg7IGkgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIC8vIEZpcmUgdGhlIGV2ZW50IG9ubHkgZm9yIGhhbmRsZXMgdGhhdCByZWNlaXZlZCBhIG5ldyB2YWx1ZSwgYXMgcGVyICM1NzlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2hhbmRsZU51bWJlcl0gIT09IG51bGwgJiYgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHNsaWRlciB0byBpbml0aWFsIHZhbHVlc1xuICAgICAgICBmdW5jdGlvbiB2YWx1ZVJlc2V0KGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCwgZmlyZVNldEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdmFsdWUgZm9yIGEgc2luZ2xlIGhhbmRsZVxuICAgICAgICBmdW5jdGlvbiB2YWx1ZVNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHZhbHVlLCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBudW1lcmljIGlucHV0XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBOdW1iZXIoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGlmICghKGhhbmRsZU51bWJlciA+PSAwICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGludmFsaWQgaGFuZGxlIG51bWJlciwgZ290OiBcIiArIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb29rIGJvdGggYmFja3dhcmQgYW5kIGZvcndhcmQsIHNpbmNlIHdlIGRvbid0IHdhbnQgdGhpcyBoYW5kbGUgdG8gXCJwdXNoXCIgb3RoZXIgaGFuZGxlcyAoIzk2MCk7XG4gICAgICAgICAgICAvLyBUaGUgZXhhY3RJbnB1dCBhcmd1bWVudCBjYW4gYmUgdXNlZCB0byBpZ25vcmUgc2xpZGVyIHN0ZXBwaW5nICgjNDM2KVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWUsIGhhbmRsZU51bWJlciksIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBpZiAoZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlR2V0KHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgaWYgKHVuZW5jb2RlZCA9PT0gdm9pZCAwKSB7IHVuZW5jb2RlZCA9IGZhbHNlOyB9XG4gICAgICAgICAgICBpZiAodW5lbmNvZGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGEgY29weSBvZiB0aGUgcmF3IHZhbHVlc1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9WYWx1ZXMubGVuZ3RoID09PSAxID8gc2NvcGVfVmFsdWVzWzBdIDogc2NvcGVfVmFsdWVzLnNsaWNlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pO1xuICAgICAgICAgICAgLy8gSWYgb25seSBvbmUgaGFuZGxlIGlzIHVzZWQsIHJldHVybiBhIHNpbmdsZSB2YWx1ZS5cbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlcyBjbGFzc2VzIGZyb20gdGhlIHJvb3QgYW5kIGVtcHRpZXMgaXQuXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgcHJvdGVjdGVkIGludGVybmFsIGxpc3RlbmVyc1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgICAgICByZW1vdmVFdmVudChJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmNzc0NsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aGlsZSAoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9UYXJnZXQucmVtb3ZlQ2hpbGQoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIHNjb3BlX1RhcmdldC5ub1VpU2xpZGVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgdmFyIG5lYXJieVN0ZXBzID0gc2NvcGVfU3BlY3RydW0uZ2V0TmVhcmJ5U3RlcHMobG9jYXRpb24pO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB2YXIgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RlcDtcbiAgICAgICAgICAgIHZhciBkZWNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgLy8gSWYgc25hcHBlZCwgZGlyZWN0bHkgdXNlIGRlZmluZWQgc3RlcCB2YWx1ZVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc25hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGFydFZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlIC0gdmFsdWUgfHwgbnVsbFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgbmV4dCB2YWx1ZSBpbiB0aGlzIHN0ZXAgbW92ZXMgaW50byB0aGUgbmV4dCBzdGVwLFxuICAgICAgICAgICAgLy8gdGhlIGluY3JlbWVudCBpcyB0aGUgc3RhcnQgb2YgdGhlIG5leHQgc3RlcCAtIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSArIGluY3JlbWVudCA+IG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlIC0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGJleW9uZCB0aGUgc3RhcnRpbmcgcG9pbnRcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYSBoYW5kbGUgaXMgYXQgdGhlIHN0YXJ0IG9mIGEgc3RlcCwgaXQgYWx3YXlzIHN0ZXBzIGJhY2sgaW50byB0aGUgcHJldmlvdXMgc3RlcCBmaXJzdFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gdmFsdWUgLSBuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLmhpZ2hlc3RTdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm93LCBpZiBhdCB0aGUgc2xpZGVyIGVkZ2VzLCB0aGVyZSBpcyBubyBpbi9kZWNyZW1lbnRcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbiA9PT0gMTAwKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxvY2F0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFzIHBlciAjMzkxLCB0aGUgY29tcGFyaXNvbiBmb3IgdGhlIGRlY3JlbWVudCBzdGVwIGNhbiBoYXZlIHNvbWUgcm91bmRpbmcgaXNzdWVzLlxuICAgICAgICAgICAgdmFyIHN0ZXBEZWNpbWFscyA9IHNjb3BlX1NwZWN0cnVtLmNvdW50U3RlcERlY2ltYWxzKCk7XG4gICAgICAgICAgICAvLyBSb3VuZCBwZXIgIzM5MVxuICAgICAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gbnVsbCAmJiBpbmNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gTnVtYmVyKGluY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlY3JlbWVudCAhPT0gbnVsbCAmJiBkZWNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gTnVtYmVyKGRlY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtkZWNyZW1lbnQsIGluY3JlbWVudF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0ZXAgc2l6ZSBmb3IgdGhlIHNsaWRlci5cbiAgICAgICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZU51bWJlcnMubWFwKGdldE5leHRTdGVwc0ZvckhhbmRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRhYmxlOiBtYXJnaW4sIGxpbWl0LCBwYWRkaW5nLCBzdGVwLCByYW5nZSwgYW5pbWF0ZSwgc25hcFxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKG9wdGlvbnNUb1VwZGF0ZSwgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAvLyBTcGVjdHJ1bSBpcyBjcmVhdGVkIHVzaW5nIHRoZSByYW5nZSwgc25hcCwgZGlyZWN0aW9uIGFuZCBzdGVwIG9wdGlvbnMuXG4gICAgICAgICAgICAvLyAnc25hcCcgYW5kICdzdGVwJyBjYW4gYmUgdXBkYXRlZC5cbiAgICAgICAgICAgIC8vIElmICdzbmFwJyBhbmQgJ3N0ZXAnIGFyZSBub3QgcGFzc2VkLCB0aGV5IHNob3VsZCByZW1haW4gdW5jaGFuZ2VkLlxuICAgICAgICAgICAgdmFyIHYgPSB2YWx1ZUdldCgpO1xuICAgICAgICAgICAgdmFyIHVwZGF0ZUFibGUgPSBbXG4gICAgICAgICAgICAgICAgXCJtYXJnaW5cIixcbiAgICAgICAgICAgICAgICBcImxpbWl0XCIsXG4gICAgICAgICAgICAgICAgXCJwYWRkaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyYW5nZVwiLFxuICAgICAgICAgICAgICAgIFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwic25hcFwiLFxuICAgICAgICAgICAgICAgIFwic3RlcFwiLFxuICAgICAgICAgICAgICAgIFwiZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgXCJwaXBzXCIsXG4gICAgICAgICAgICAgICAgXCJ0b29sdGlwc1wiXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gT25seSBjaGFuZ2Ugb3B0aW9ucyB0aGF0IHdlJ3JlIGFjdHVhbGx5IHBhc3NlZCB0byB1cGRhdGUuXG4gICAgICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5kZWZpbmVkLiBudWxsIHJlbW92ZXMgdGhlIHZhbHVlLlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbE9wdGlvbnNbbmFtZV0gPSBvcHRpb25zVG9VcGRhdGVbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IHRlc3RPcHRpb25zKG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgICAgICAgICAvLyBMb2FkIG5ldyBvcHRpb25zIGludG8gdGhlIHNsaWRlciBzdGF0ZVxuICAgICAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSBuZXdPcHRpb25zW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NvcGVfU3BlY3RydW0gPSBuZXdPcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICAgICAgLy8gTGltaXQsIG1hcmdpbiBhbmQgcGFkZGluZyBkZXBlbmQgb24gdGhlIHNwZWN0cnVtIGJ1dCBhcmUgc3RvcmVkIG91dHNpZGUgb2YgaXQuICgjNjc3KVxuICAgICAgICAgICAgb3B0aW9ucy5tYXJnaW4gPSBuZXdPcHRpb25zLm1hcmdpbjtcbiAgICAgICAgICAgIG9wdGlvbnMubGltaXQgPSBuZXdPcHRpb25zLmxpbWl0O1xuICAgICAgICAgICAgb3B0aW9ucy5wYWRkaW5nID0gbmV3T3B0aW9ucy5wYWRkaW5nO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHBpcHMsIHJlbW92ZXMgZXhpc3RpbmcuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRvb2x0aXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEludmFsaWRhdGUgdGhlIGN1cnJlbnQgcG9zaXRpb25pbmcgc28gdmFsdWVTZXQgZm9yY2VzIGFuIHVwZGF0ZS5cbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdmFsdWVTZXQoaXNTZXQob3B0aW9uc1RvVXBkYXRlLnN0YXJ0KSA/IG9wdGlvbnNUb1VwZGF0ZS5zdGFydCA6IHYsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gc3RlcHNcbiAgICAgICAgZnVuY3Rpb24gc2V0dXBTbGlkZXIoKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGJhc2UgZWxlbWVudCwgaW5pdGlhbGl6ZSBIVE1MIGFuZCBzZXQgY2xhc3Nlcy5cbiAgICAgICAgICAgIC8vIEFkZCBoYW5kbGVzIGFuZCBjb25uZWN0IGVsZW1lbnRzLlxuICAgICAgICAgICAgc2NvcGVfQmFzZSA9IGFkZFNsaWRlcihzY29wZV9UYXJnZXQpO1xuICAgICAgICAgICAgYWRkRWxlbWVudHMob3B0aW9ucy5jb25uZWN0LCBzY29wZV9CYXNlKTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB1c2VyIGV2ZW50cy5cbiAgICAgICAgICAgIGJpbmRTbGlkZXJFdmVudHMob3B0aW9ucy5ldmVudHMpO1xuICAgICAgICAgICAgLy8gVXNlIHRoZSBwdWJsaWMgdmFsdWUgbWV0aG9kIHRvIHNldCB0aGUgc3RhcnQgdmFsdWVzLlxuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJpYSgpO1xuICAgICAgICB9XG4gICAgICAgIHNldHVwU2xpZGVyKCk7XG4gICAgICAgIHZhciBzY29wZV9TZWxmID0ge1xuICAgICAgICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgICAgICAgIHN0ZXBzOiBnZXROZXh0U3RlcHMsXG4gICAgICAgICAgICBvbjogYmluZEV2ZW50LFxuICAgICAgICAgICAgb2ZmOiByZW1vdmVFdmVudCxcbiAgICAgICAgICAgIGdldDogdmFsdWVHZXQsXG4gICAgICAgICAgICBzZXQ6IHZhbHVlU2V0LFxuICAgICAgICAgICAgc2V0SGFuZGxlOiB2YWx1ZVNldEhhbmRsZSxcbiAgICAgICAgICAgIHJlc2V0OiB2YWx1ZVJlc2V0LFxuICAgICAgICAgICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgX19tb3ZlSGFuZGxlczogZnVuY3Rpb24gKHVwd2FyZCwgcHJvcG9zYWwsIGhhbmRsZU51bWJlcnMpIHtcbiAgICAgICAgICAgICAgICBtb3ZlSGFuZGxlcyh1cHdhcmQsIHByb3Bvc2FsLCBzY29wZV9Mb2NhdGlvbnMsIGhhbmRsZU51bWJlcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9yaWdpbmFsT3B0aW9ucyxcbiAgICAgICAgICAgIHVwZGF0ZU9wdGlvbnM6IHVwZGF0ZU9wdGlvbnMsXG4gICAgICAgICAgICB0YXJnZXQ6IHNjb3BlX1RhcmdldCxcbiAgICAgICAgICAgIHJlbW92ZVBpcHM6IHJlbW92ZVBpcHMsXG4gICAgICAgICAgICByZW1vdmVUb29sdGlwczogcmVtb3ZlVG9vbHRpcHMsXG4gICAgICAgICAgICBnZXRQb3NpdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0VG9vbHRpcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0T3JpZ2luczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpcHM6IHBpcHMgLy8gSXNzdWUgIzU5NFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2NvcGVfU2VsZjtcbiAgICB9XG4gICAgLy8gUnVuIHRoZSBzdGFuZGFyZCBpbml0aWFsaXplclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUodGFyZ2V0LCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5ub2RlTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogY3JlYXRlIHJlcXVpcmVzIGEgc2luZ2xlIGVsZW1lbnQsIGdvdDogXCIgKyB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBzbGlkZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gICAgICAgIGlmICh0YXJnZXQubm9VaVNsaWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogU2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXN0IHRoZSBvcHRpb25zIGFuZCBjcmVhdGUgdGhlIHNsaWRlciBlbnZpcm9ubWVudDtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICB2YXIgYXBpID0gc2NvcGUodGFyZ2V0LCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICB0YXJnZXQubm9VaVNsaWRlciA9IGFwaTtcbiAgICAgICAgcmV0dXJuIGFwaTtcbiAgICB9XG4gICAgdmFyIG5vdWlzbGlkZXIgPSB7XG4gICAgICAgIC8vIEV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZywgZG9uJ3QgdXNlIHRoaXMgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgX19zcGVjdHJ1bTogU3BlY3RydW0sXG4gICAgICAgIC8vIEEgcmVmZXJlbmNlIHRvIHRoZSBkZWZhdWx0IGNsYXNzZXMsIGFsbG93cyBnbG9iYWwgY2hhbmdlcy5cbiAgICAgICAgLy8gVXNlIHRoZSBjc3NDbGFzc2VzIG9wdGlvbiBmb3IgY2hhbmdlcyB0byBvbmUgc2xpZGVyLlxuICAgICAgICBjc3NDbGFzc2VzOiBjc3NDbGFzc2VzLFxuICAgICAgICBjcmVhdGU6IGluaXRpYWxpemVcbiAgICB9O1xuXG4gICAgZXhwb3J0cy5jcmVhdGUgPSBpbml0aWFsaXplO1xuICAgIGV4cG9ydHMuY3NzQ2xhc3NlcyA9IGNzc0NsYXNzZXM7XG4gICAgZXhwb3J0c1snZGVmYXVsdCddID0gbm91aXNsaWRlcjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm91aXNsaWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vdWlzbGlkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgJGVsOiBIVE1MRWxlbWVudDtcclxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLiRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHsgfVxyXG4gIFxyXG4gIGhpZGUoKSB7XHJcbiAgICB0aGlzLiRlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgfVxyXG5cclxuICBzaG93KCkge1xyXG4gICAgdGhpcy4kZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBUb3lzIH0gZnJvbSAnLi90b3lzLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVUb3lzIGV4dGVuZHMgVG95cyB7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBhY3RpdmVUb3lzOiBzdHJpbmdbXTtcclxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihpZCk7XHJcbiAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgIHRoaXMuYWN0aXZlVG95cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHN0YXJ0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG5cclxuICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5idXR0b25IYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZEZhdm9yaXRlVG95cy5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGFkZEZhdm9yaXRlVG95cygpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5jb250YWluZXItY29udGVudCcpO1xyXG4gICAgY29uc3QgY3VycmVudFRhcmdldCA9ICh0YXJnZXQgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCk/LmRhdGFzZXQuc2V0O1xyXG4gICAgaWYgKHRhcmdldCkge1xyXG4gICAgICBpZiAodGhpcy5jb3VudCA9PT0gMjAgJiYgISh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtdG95JykpKSB7XHJcbiAgICAgICAgYWxlcnQoXCLQmNC30LLQuNC90LjRgtC1LCDQstGB0LUg0YHQu9C+0YLRiyDQt9Cw0L/QvtC70L3QtdC90YtcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS10b3knKTtcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRveScpKSB7XHJcbiAgICAgICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRveXMucHVzaCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNldCcpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jb3VudC0tO1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmFjdGl2ZVRveXMuaW5kZXhPZigodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zZXQnKSkpO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVUb3lzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvdW50VG95czogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQtdG95cycpO1xyXG4gICAgY291bnRUb3lzLnRleHRDb250ZW50ID0gYCR7dGhpcy5jb3VudH1gO1xyXG4gICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0RGF0YUxvY2FsU3RvcmFnZSgnZGF0YUZhdm9yaXRlJywgY3VycmVudFRhcmdldCk7XHJcbiAgICB0aGlzLnNldGZhdm9yaXRlQ291bnRUb0xvY2FsU3RvcmFnZSgnZGF0YUNvdW50JywgdGhpcy5jb3VudCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0ZmF2b3JpdGVDb3VudFRvTG9jYWxTdG9yYWdlKGluZGV4OiBzdHJpbmcsIGNvdW50OiBudW1iZXIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGluZGV4LCBKU09OLnN0cmluZ2lmeShjb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmF2b3JpdGVDb3VudFRvTGFjYWxTdGFvcmFnZShpbmRleDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZGV4KTtcclxuICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudC10b3lzJyk7XHJcbiAgICBjdXJyZW50Q291bnQudGV4dENvbnRlbnQgPSBgJHtjb3VudH1gO1xyXG4gICAgdGhpcy5jb3VudCA9ICtjb3VudDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbkhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFDb3VudCcpKSB7XHJcbiAgICAgIHRoaXMuZ2V0RmF2b3JpdGVDb3VudFRvTGFjYWxTdGFvcmFnZSgnZGF0YUNvdW50JywgJ2NvdW50LXRveXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGx5U3Vjc3NlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRveXNDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lci1jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc29sZS5sb2codG95c0NvbnRhaW5lcnMpO1xyXG4gICAgdG95c0NvbnRhaW5lcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlVG95cy5pbmNsdWRlcyhlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zZXQnKSkpIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS10b3knKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2Uge1xyXG5cclxuICBzZXREYXRhTG9jYWxTdG9yYWdlKGluZGV4OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5kZXgpKTtcclxuICAgIGlmIChjdXJyZW50VmFsdWUpIHtcclxuICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRWYWx1ZS5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgICBjdXJyZW50VmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50VmFsdWUucHVzaCh2YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGluZGV4LCBKU09OLnN0cmluZ2lmeShjdXJyZW50VmFsdWUpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGluZGV4LCBKU09OLnN0cmluZ2lmeShbdmFsdWVdKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRSYW5nZVRvTG9jYWxTdG9yYWdlKGluZGV4OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZGV4KSk7XHJcbiAgICBjb25zdCBjdXJyZW50UmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke2NsYXNzTmFtZX1gKTtcclxuICAgIGlmIChjdXJyZW50VmFsdWUpIHtcclxuICAgICAgbGV0IGN1cnJlbnRDb3B5ZXMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9ICtjdXJyZW50UmFuZ2VbMF0uYXJpYVZhbHVlTm93OyBpIDw9ICtjdXJyZW50UmFuZ2VbMV0uYXJpYVZhbHVlTm93OyBpKyspIHtcclxuICAgICAgICBjdXJyZW50Q29weWVzLnB1c2goU3RyaW5nKGkpKTtcclxuICAgICAgfVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpbmRleCwgSlNPTi5zdHJpbmdpZnkoY3VycmVudENvcHllcykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGN1cnJlbnRDb3B5ZXMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9ICtjdXJyZW50UmFuZ2VbMF0uYXJpYVZhbHVlTm93OyBpIDw9ICtjdXJyZW50UmFuZ2VbMV0uYXJpYVZhbHVlTm93OyBpKyspIHtcclxuICAgICAgICBjdXJyZW50Q29weWVzLnB1c2goU3RyaW5nKGkpKTtcclxuICAgICAgfVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpbmRleCwgSlNPTi5zdHJpbmdpZnkoY3VycmVudENvcHllcykpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldERhdGFMb2NhbFN0b3JhZ2UoaW5kZXg6IHN0cmluZywgc2V0OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nLCBhY3RpdmVDbGFzczogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke2NsYXNzTmFtZX1gKTtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmRleCk7XHJcbiAgICB2YWx1ZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnRWYWx1ZXMuaW5jbHVkZXMoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtzZXR9YCkpKSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke2FjdGl2ZUNsYXNzfWApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBnZXRDaGVja2VkTG9jYWxTdG9yYWdlKGluZGV4OiBzdHJpbmcsIHNldDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2l6ZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke2NsYXNzTmFtZX1gKTtcclxuICAgIGNvbnN0IGN1cnJlbnRDaGVjayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2luZGV4fWApO1xyXG5cclxuICAgIHNpemVJdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50Q2hlY2suaW5jbHVkZXMoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtzZXR9YCkpKSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLSR7c2V0fWApID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgIChlbGVtZW50IGFzIGFueSkuY2hlY2tlZCA9ICdjaGVja2VkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgKGVsZW1lbnQgYXMgYW55KS5jaGVja2VkID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU29ydFRveXMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgc29ydFRvTmFtZShkYXRhOiBhbnlbXSkge1xyXG4gICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XHJcbiAgfVxyXG5cclxuICBzb3J0VG9OYW1lUmV2ZXJzZShkYXRhOiBhbnlbXSkge1xyXG4gICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4gYi5uYW1lLmxvY2FsZUNvbXBhcmUoYS5uYW1lKSk7XHJcbiAgfVxyXG5cclxuICBzb3J0VG9JbmNyZWFzZShkYXRhOiBhbnlbXSkge1xyXG4gICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4gKGEueWVhciAtIGIueWVhcikpO1xyXG4gIH1cclxuXHJcbiAgc29ydFRvSW5jcmVhc2VSZXZlcnNlKGRhdGE6IGFueVtdKSB7XHJcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiAoYi55ZWFyIC0gYS55ZWFyKSk7XHJcbiAgfVxyXG5cclxuICBzb3J0QUxMKGRhdGE6IGFueVtdKSB7XHJcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiAoYS5udW0gLSBiLm51bSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudEFjdGl2ZUVsZW1lbnRzKCkge1xyXG4gICAgY29uc3QgZGF0YUFjdGl2ZUl0ZW06IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgY29uc3QgbWFzc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1pY29uJyk7XHJcbiAgICBjb25zdCBjb3VudENvcHllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNyYW5nZSAubm9VaS1oYW5kbGUnKTtcclxuICAgIGNvbnN0IHllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcmFuZ2UteWVhciAubm9VaS1oYW5kbGUnKTtcclxuICAgIGNvbnN0IGNvbG9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbG9yLWl0ZW0nKTtcclxuICAgIGNvbnN0IHNpemVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpemUtaXRlbScpO1xyXG4gICAgY29uc3QgZmF2b3JpdGVUb3lzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdm9yaXRlLWl0ZW0nKTtcclxuXHJcbiAgICBtYXNzRm9ybS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0taWNvbl9fYWN0aXZlJykpIHtcclxuICAgICAgICBkYXRhQWN0aXZlSXRlbS5wdXNoKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWZvcm0nKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSArY291bnRDb3B5ZXNbMF0uYXJpYVZhbHVlTm93OyBpIDw9ICtjb3VudENvcHllc1sxXS5hcmlhVmFsdWVOb3c7IGkrKykge1xyXG4gICAgICBkYXRhQWN0aXZlSXRlbS5wdXNoKFN0cmluZyhpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9ICt5ZWFyWzBdLmFyaWFWYWx1ZU5vdzsgaSA8PSAreWVhclsxXS5hcmlhVmFsdWVOb3c7IGkrKykge1xyXG4gICAgICBkYXRhQWN0aXZlSXRlbS5wdXNoKFN0cmluZyhpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sb3JDb250YWluZXIuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xvci1pdGVtX19hY3RpdmUnKSkge1xyXG4gICAgICAgIGRhdGFBY3RpdmVJdGVtLnB1c2goZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNpemVJdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmICgoZWxlbWVudCBhcyBhbnkpLmNoZWNrZWQpIHtcclxuICAgICAgICBkYXRhQWN0aXZlSXRlbS5wdXNoKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNoZWNrJykpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoKGZhdm9yaXRlVG95cyBhcyBhbnkpLmNoZWNrZWQpIHtcclxuICAgICAgKGRhdGFBY3RpdmVJdGVtIGFzIGFueSkucHVzaCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIChkYXRhQWN0aXZlSXRlbSBhcyBhbnkpLnB1c2godHJ1ZSk7XHJcbiAgICAgIChkYXRhQWN0aXZlSXRlbSBhcyBhbnkpLnB1c2goZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhQWN0aXZlSXRlbTtcclxuICB9XHJcbn0gXHJcbiIsImltcG9ydCB7IEFwcCB9IGZyb20gJy4uL2FwcC9hcHAnXHJcblxyXG5leHBvcnQgY2xhc3MgU3RhcnRHYW1lIGV4dGVuZHMgQXBwIHtcclxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihpZCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgY29uc3Qgc3RhcnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1dHRvbkhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYnV0dG9uSGFuZGxlcigpIHtcclxuICB0aGlzLmhpZGUoKTtcclxuICBjb25zdCBzZWFyY2g6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xyXG4gIHNlYXJjaC5mb2N1cygpO1xyXG59IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi4vYXBwL2FwcCc7XHJcbmltcG9ydCB7IFNvcnRUb3lzIH0gZnJvbSAnLi9zb3J0LXRveXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSAnLi91aS1zbGlkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcmFuZ2VZZWFyIH0gZnJvbSAnLi91aS1zbGlkZXIuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUb3lzIGV4dGVuZHMgQXBwIHtcclxuICBuZXdEYXRhOiBhbnk7XHJcbiAgZGF0YVRveXM6IGFueTtcclxuICBzb3J0VG95czogU29ydFRveXM7XHJcbiAgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2U7XHJcbiAgY291bnRDb3B5OiBhbnk7XHJcbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xyXG4gICAgc3VwZXIoaWQpO1xyXG4gICAgdGhpcy5kYXRhVG95cztcclxuICAgIHRoaXMubmV3RGF0YTtcclxuICAgIHRoaXMuc29ydFRveXMgPSBuZXcgU29ydFRveXMoKTtcclxuICAgIHRoaXMubG9jYWxTdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmdldERhdGEoKTtcclxuICAgIGNvbnN0IHN0YXJ0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG4gICAgY29uc3QgY2hvb3NlSXRlbTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hvb3NlLWl0ZW0nKTtcclxuICAgIGNvbnN0IHNlYXJjaDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XHJcblxyXG4gICAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5hZGRTZWFyY2guYmluZCh0aGlzKSk7XHJcbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYnV0dG9uSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIGNob29zZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZFNvcnRUb3lzLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldFNvcnRUb3lzLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldEZpbHRlckZvcm0uYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkQWN0aXZlQ29sb3IuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYXBwbHlTdWNzc2VzLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFwcGx5UmVzZXRGaWx0ZXJzLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFwcGx5UmVzZXRTZXR0aW5ncy5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRDbGVhblNlYXJjaC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldERhdGEoKSB7XHJcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9ICgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0JvZ2Rhbi1WUy9pbWFnZS1kYXRhL21hc3Rlci9kYXRhLmpzb24nKTtcclxuICAgIGNvbnN0IHJlczogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICB0aGlzLmRhdGFUb3lzID0gZGF0YTtcclxuICAgIHJldHVybiB0aGlzLmRhdGFUb3lzO1xyXG4gIH1cclxuXHJcbiAgZHJhd1RveXMoZGF0YTogYW55ID0gdGhpcy5kYXRhVG95cykge1xyXG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uLWNvbnRhaW5lci13cmFwcGVyJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XHJcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWNvbnRlbnQnKTtcclxuICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRveS0ke2l9YCk7XHJcbiAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXNldCcsIGAke2RhdGFbaV0ubmFtZX1gKTtcclxuICAgICAgY29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGg0PiR7ZGF0YVtpXS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb24tdG95LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tdG95IHRveSR7aX1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dWwgY2xhc3M9XCJkYXRhLXRveVwiPlxyXG4gICAgICAgICAgPGxpPtCa0L7Qu9C40YfQtdGB0YLQstC+OiAke2RhdGFbaV0uY291bnR9PC9saT5cclxuICAgICAgICAgIDxsaT7Qk9C+0LQg0L/QvtC60YPQv9C60Lg6ICR7ZGF0YVtpXS55ZWFyfTwvbGk+XHJcbiAgICAgICAgICA8bGk+0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDogJHtkYXRhW2ldLnNoYXBlfTwvbGk+XHJcbiAgICAgICAgICA8bGk+0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6ICR7ZGF0YVtpXS5jb2xvcn08L2xpPlxyXG4gICAgICAgICAgPGxpPtCg0LDQt9C80LXRgCDQuNCz0YDRg9GI0LrQuDogJHtkYXRhW2ldLnNpemV9PC9saT5cclxuICAgICAgICAgIDxsaT7Qm9GO0LHQuNC80LDRjzogJHtkYXRhW2ldLmxpa2V9PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICBgXHJcbiAgICAgIGNvbGxlY3Rpb24uYXBwZW5kKGNvbnRlbnQpO1xyXG4gICAgICBjb25zdCBpY29uVG95ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRveSR7aX1gKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xyXG4gICAgICBpY29uVG95LnN0eWxlLmJhY2tncm91bmQgPSBgdG9wIDAgbGVmdCAwIC8gMTAwJSAxMDAlIHVybCguL2Fzc2V0cy9pbWFnZXMvdG95cy8ke2RhdGFbaV0ubnVtfS5wbmcpYDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFNvcnRUb3lzKCkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnk6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tY2F0ZWdvcnknKTtcclxuICAgIGNhdGVnb3J5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICB9XHJcblxyXG4gIGdldFNvcnRUb3lzKGV2ZW50OiBFdmVudCkge1xyXG4gICAgY29uc3QgY3VycmVudENhdGVnb3JpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1jYXRlZ29yaWVzJyk7XHJcbiAgICBjb25zdCB0YXJnZXQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuc29ydC1pdGVtJyk7XHJcblxyXG4gICAgc3dpdGNoKHRhcmdldCAmJiAodGFyZ2V0IGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQpLmRhdGFzZXQuc29ydCkge1xyXG4gICAgICBjYXNlICfQn9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y4g0LPQvtC00LAg0LLRi9C/0YPRgdC60LAnOlxyXG4gICAgICAgIGN1cnJlbnRDYXRlZ29yaWVzLnRleHRDb250ZW50ID0gJ9Cf0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjiDQs9C+0LTQsCDQstGL0L/Rg9GB0LrQsCc7XHJcbiAgICAgICAgdGhpcy5hZGRTb3J0VG95cygpO1xyXG4gICAgICAgIHRoaXMuYWRkUmVzdWx0RGF0YSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICfQn9C+INGD0LHRi9Cy0LDQvdC40Y4g0LPQvtC00LAg0LLRi9C/0YPRgdC60LAnOlxyXG4gICAgICAgIGN1cnJlbnRDYXRlZ29yaWVzLnRleHRDb250ZW50ID0gJ9Cf0L4g0YPQsdGL0LLQsNC90LjRjiDQs9C+0LTQsCDQstGL0L/Rg9GB0LrQsCc7XHJcbiAgICAgICAgdGhpcy5hZGRTb3J0VG95cygpO1xyXG4gICAgICAgIHRoaXMuYWRkUmVzdWx0RGF0YSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICfQktGB0LUg0LjQs9GA0YPRiNC60LgnOlxyXG4gICAgICAgIGN1cnJlbnRDYXRlZ29yaWVzLnRleHRDb250ZW50ID0gJ9CS0YHQtSDQuNCz0YDRg9GI0LrQuCc7XHJcbiAgICAgICAgdGhpcy5hZGRTb3J0VG95cygpO1xyXG4gICAgICAgIHRoaXMuYWRkUmVzdWx0RGF0YSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICfQn9C+INC40LzQtdC90Lgg0JAt0K8nOlxyXG4gICAgICAgIGN1cnJlbnRDYXRlZ29yaWVzLnRleHRDb250ZW50ID0gJ9Cf0L4g0LjQvNC10L3QuCDQkC3Qryc7XHJcbiAgICAgICAgdGhpcy5hZGRTb3J0VG95cygpO1xyXG4gICAgICAgIHRoaXMuYWRkUmVzdWx0RGF0YSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICfQn9C+INC40LzQtdC90Lgg0K8t0JAnOlxyXG4gICAgICAgIGN1cnJlbnRDYXRlZ29yaWVzLnRleHRDb250ZW50ID0gJ9Cf0L4g0LjQvNC10L3QuCDQry3QkCc7XHJcbiAgICAgICAgdGhpcy5hZGRTb3J0VG95cygpO1xyXG4gICAgICAgIHRoaXMuYWRkUmVzdWx0RGF0YSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkUmVzdWx0RGF0YSgpIHtcclxuICAgIGNvbnN0IG1hc3NGaWx0ZXI6IHN0cmluZ1tdID0gdGhpcy5zb3J0VG95cy5nZXRDdXJyZW50QWN0aXZlRWxlbWVudHMoKTtcclxuXHJcbiAgICBjb25zdCBzdWNjc2Vzc0ZpbHRlckZvcm0gPSB0aGlzLmRhdGFUb3lzLmZpbHRlcigoZWw6IGFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC5zaGFwZSkgJiZcclxuICAgICAgICBtYXNzRmlsdGVyLmluY2x1ZGVzKGVsLmNvdW50KSAmJlxyXG4gICAgICAgIG1hc3NGaWx0ZXIuaW5jbHVkZXMoZWwueWVhcikgJiZcclxuICAgICAgICBtYXNzRmlsdGVyLmluY2x1ZGVzKGVsLmNvbG9yKSAmJlxyXG4gICAgICAgIG1hc3NGaWx0ZXIuaW5jbHVkZXMoZWwuc2l6ZSkgJiZcclxuICAgICAgICBtYXNzRmlsdGVyLmluY2x1ZGVzKGVsLmZhdm9yaXRlKTtcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5nZXRSZXN1bHQoc3VjY3Nlc3NGaWx0ZXJGb3JtKTtcclxuICB9XHJcblxyXG4gIGFwcGx5U3Vjc3NlcygpIHtcclxuICAgIGNvbnN0IGZvcm1UYXJnZXQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuZm9ybS1pY29uJyk7XHJcbiAgICBjb25zdCBjb2xvclRhcmdldCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5jb2xvci1pdGVtJyk7XHJcbiAgICBjb25zdCBjaGVja1RhcmdldCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5jaGVja2VkJyk7XHJcbiAgICBjb25zdCBjdXJyZW50Q2hlY2sgPSAoY2hlY2tUYXJnZXQgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCk/LmRhdGFzZXQuY2hlY2s7XHJcblxyXG4gICAgaWYgKGZvcm1UYXJnZXQgfHxcclxuICAgICAgY29sb3JUYXJnZXQgfHxcclxuICAgICAgY2hlY2tUYXJnZXQpIHtcclxuICAgICAgaWYgKGN1cnJlbnRDaGVjaykge1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldERhdGFMb2NhbFN0b3JhZ2UoJ2RhdGFDaGVja2VkJywgY3VycmVudENoZWNrKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFkZFJlc3VsdERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXRGaWx0ZXJGb3JtKCkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnLmZvcm0taWNvbicpO1xyXG4gICAgY29uc3QgY3VycmVudEZvcm0gPSAodGFyZ2V0IGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQpPy5kYXRhc2V0LmZvcm07XHJcblxyXG4gICAgaWYgKGN1cnJlbnRGb3JtKSB7XHJcbiAgICAgIHN3aXRjaCAoY3VycmVudEZvcm0pIHtcclxuICAgICAgICBjYXNlICfQutC+0LvQvtC60L7Qu9GM0YfQuNC6JzpcclxuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtLWljb25fX2FjdGl2ZScpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAn0YjQsNGAJzpcclxuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtLWljb25fX2FjdGl2ZScpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAn0YjQuNGI0LrQsCc6XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS1pY29uX19hY3RpdmUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ9GB0L3QtdC20LjQvdC60LAnOlxyXG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm0taWNvbl9fYWN0aXZlJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICfRhNC40LPRg9GA0LrQsCc6XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS1pY29uX19hY3RpdmUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldERhdGFMb2NhbFN0b3JhZ2UoJ2RhdGFGb3JtJywgY3VycmVudEZvcm0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkQWN0aXZlQ29sb3IoKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuY29sb3ItaXRlbScpO1xyXG4gICAgY29uc3QgY3VycmVudENvbG9yID0gKHRhcmdldCBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KT8uZGF0YXNldC5jb2xvcjtcclxuXHJcbiAgICBpZiAoY3VycmVudENvbG9yKSB7XHJcbiAgICAgIHN3aXRjaCAoY3VycmVudENvbG9yKSB7XHJcbiAgICAgICAgY2FzZSBcItCx0LXQu9GL0LlcIjpcclxuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjb2xvci1pdGVtX19hY3RpdmUnKTtcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBcItC20LXQu9GC0YvQuVwiOlxyXG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NvbG9yLWl0ZW1fX2FjdGl2ZScpO1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIFwi0LrRgNCw0YHQvdGL0LlcIjpcclxuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjb2xvci1pdGVtX19hY3RpdmUnKTtcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBcItGB0LjQvdC40LlcIjpcclxuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjb2xvci1pdGVtX19hY3RpdmUnKTtcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBcItC30LXQu9GR0L3Ri9C5XCI6XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY29sb3ItaXRlbV9fYWN0aXZlJyk7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldERhdGFMb2NhbFN0b3JhZ2UoJ2RhdGFDb2xvcicsIGN1cnJlbnRDb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSZXN1bHQoYXJnOiBhbnlbXSkge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcblxyXG4gICAgaWYgKGFyZy5sZW5ndGggPT09IDApIHtcclxuICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdtZXNzYWdlX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgc29ydERhdGE7XHJcbiAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWNhdGVnb3JpZXMnKTtcclxuXHJcbiAgICBzd2l0Y2ggKGN1cnJlbnRDYXRlZ29yaWVzLnRleHRDb250ZW50KSB7XHJcbiAgICAgIGNhc2UgJ9Cf0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjiDQs9C+0LTQsCDQstGL0L/Rg9GB0LrQsCc6XHJcbiAgICAgICAgc29ydERhdGEgPSB0aGlzLnNvcnRUb3lzLnNvcnRUb0luY3JlYXNlKGFyZyk7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAn0J/QviDRg9Cx0YvQstCw0L3QuNGOINCz0L7QtNCwINCy0YvQv9GD0YHQutCwJzpcclxuICAgICAgICBzb3J0RGF0YSA9IHRoaXMuc29ydFRveXMuc29ydFRvSW5jcmVhc2VSZXZlcnNlKGFyZyk7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAn0JLRgdC1INC40LPRgNGD0YjQutC4JzpcclxuICAgICAgICBzb3J0RGF0YSA9IHRoaXMuc29ydFRveXMuc29ydEFMTChhcmcpO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ9Cf0L4g0LjQvNC10L3QuCDQkC3Qryc6XHJcbiAgICAgICAgc29ydERhdGEgPSB0aGlzLnNvcnRUb3lzLnNvcnRUb05hbWUoYXJnKTtcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICfQn9C+INC40LzQtdC90Lgg0K8t0JAnOlxyXG4gICAgICAgIHNvcnREYXRhID0gdGhpcy5zb3J0VG95cy5zb3J0VG9OYW1lUmV2ZXJzZShhcmcpO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmVEYXRhKCk7XHJcbiAgICB0aGlzLmRyYXdUb3lzKHNvcnREYXRhKTtcclxuICB9XHJcblxyXG4gIGFwcGx5UmVzZXRGaWx0ZXJzKCkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnI3Jlc2V0LWZpbHRlcnMnKTtcclxuICAgIGNvbnN0IGNvbG9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbG9yLWl0ZW0nKTtcclxuICAgIGNvbnN0IG1hc3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0taWNvbicpO1xyXG4gICAgY29uc3Qgc2l6ZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2l6ZS1pdGVtJyk7XHJcbiAgICBjb25zdCBmYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZS1pdGVtJyk7XHJcblxyXG4gICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAocmFuZ2UgYXMgYW55KS5ub1VpU2xpZGVyLnJlc2V0KCk7XHJcbiAgICAgIChyYW5nZVllYXIgYXMgYW55KS5ub1VpU2xpZGVyLnJlc2V0KCk7XHJcblxyXG4gICAgICBtYXNzRm9ybS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pY29uX19hY3RpdmUnKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb2xvckNvbnRhaW5lci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29sb3ItaXRlbV9fYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2l6ZUl0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAoZWxlbWVudCBhcyBhbnkpLmNoZWNrZWQgPSAnY2hlY2tlZCc7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgKGZhdm9yaXRlIGFzIGFueSkuY2hlY2tlZCA9ICcnO1xyXG5cclxuICAgICAgdGhpcy5hZGRSZXN1bHREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgYXBwbHlSZXNldFNldHRpbmdzKCkge1xyXG4gICAgY29uc3QgcmVzZXRTZXR0aW5ncyA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJyNyZXNldC1zZXR0aW5nJyk7XHJcbiAgICBpZiAocmVzZXRTZXR0aW5ncykge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFNlYXJjaCgpIHtcclxuICAgIGNvbnN0IHNlYXJjaDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XHJcbiAgICBsZXQgdmFsdWUgPSAoc2VhcmNoIGFzIGFueSkudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgbWFzc0ZpbHRlcjogc3RyaW5nW10gPSB0aGlzLnNvcnRUb3lzLmdldEN1cnJlbnRBY3RpdmVFbGVtZW50cygpO1xyXG4gICAgbGV0IG1hc3NSZXF1ZXN0OiBTdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHN1Y2NzZXNzRmlsdGVyRm9ybSA9IHRoaXMuZGF0YVRveXMuZmlsdGVyKChlbDogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiBtYXNzRmlsdGVyLmluY2x1ZGVzKGVsLnNoYXBlKSAmJlxyXG4gICAgICAgIG1hc3NGaWx0ZXIuaW5jbHVkZXMoZWwuY291bnQpICYmXHJcbiAgICAgICAgbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC55ZWFyKSAmJlxyXG4gICAgICAgIG1hc3NGaWx0ZXIuaW5jbHVkZXMoZWwuY29sb3IpICYmXHJcbiAgICAgICAgbWFzc0ZpbHRlci5pbmNsdWRlcyhlbC5zaXplKSAmJlxyXG4gICAgICAgIG1hc3NGaWx0ZXIuaW5jbHVkZXMoZWwuZmF2b3JpdGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICBpZiAodmFsdWUgIT0gJycpIHtcclxuICAgICAgc3VjY3Nlc3NGaWx0ZXJGb3JtLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUudG9Mb3dlckNhc2UoKS5zZWFyY2godmFsdWUudG9Mb3dlckNhc2UoKSkgIT0gLTEpIHtcclxuICAgICAgICAgIG1hc3NSZXF1ZXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hc3NSZXF1ZXN0ID0gc3VjY3Nlc3NGaWx0ZXJGb3JtO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0UmVzdWx0KG1hc3NSZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIGFkZENsZWFuU2VhcmNoKCkge1xyXG4gICAgY29uc3QgY2xlYW5TZWFyY2ggPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuY2xlYW4taWNvbicpO1xyXG4gICAgY29uc3Qgc2VhcmNoOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuXHJcbiAgICBpZiAoY2xlYW5TZWFyY2gpIHtcclxuICAgICAgKHNlYXJjaCBhcyBhbnkpLnZhbHVlID0gJyc7XHJcbiAgICAgIHRoaXMuYWRkU2VhcmNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVEYXRhKCkge1xyXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyLWNvbnRlbnQnKVxyXG4gICAgY2FyZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uSGFuZGxlcigpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YUNvbG9yJykpIHtcclxuICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0RGF0YUxvY2FsU3RvcmFnZSgnZGF0YUNvbG9yJywgJ2NvbG9yJywgJy5jb2xvci1pdGVtJywgJ2NvbG9yLWl0ZW1fX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhRm9ybScpKSB7XHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlLmdldERhdGFMb2NhbFN0b3JhZ2UoJ2RhdGFGb3JtJywgJ2Zvcm0nLCAnLmZvcm0taWNvbicsICdmb3JtLWljb25fX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhQ2hlY2tlZCcpKSB7XHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlLmdldENoZWNrZWRMb2NhbFN0b3JhZ2UoJ2RhdGFDaGVja2VkJywgJ2NoZWNrJywgJy5jaGVja2VkJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNob3coKTtcclxuICAgIHRoaXMuYWRkUmVzdWx0RGF0YSgpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhRmF2b3JpdGUnKSkge1xyXG4gICAgICB0aGlzLmxvY2FsU3RvcmFnZS5nZXREYXRhTG9jYWxTdG9yYWdlKCdkYXRhRmF2b3JpdGUnLCAnc2V0JywgJy5jb250YWluZXItY29udGVudCcsICdhY3RpdmUtdG95Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgbm9VaVNsaWRlciBmcm9tICdub1VpU2xpZGVyJztcclxuaW1wb3J0ICdub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3MnO1xyXG5pbXBvcnQgeyB0b3lzIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5cclxuXHJcbmNvbnN0IHJhbmdlTG9jYWxTdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSgpO1xyXG5jb25zdCBTdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG5leHBvcnQgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZ2UnKTtcclxuZXhwb3J0IGNvbnN0IHJhbmdlWWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5nZS15ZWFyJyk7XHJcblxyXG5ub1VpU2xpZGVyLmNyZWF0ZShyYW5nZSwge1xyXG5cclxuICBzdGFydDogWzEsIDEyXSxcclxuICBjb25uZWN0OiB0cnVlLFxyXG4gIHJhbmdlOiB7XHJcbiAgICAgICdtaW4nOiAxLFxyXG4gICAgICAnbWF4JzogMTJcclxuICB9LFxyXG4gIHN0ZXA6IDEsXHJcbiAgdG9vbHRpcHM6IHRydWUsXHJcbiAgZm9ybWF0OiB7XHJcbiAgICB0bzogZnVuY3Rpb24gKHZhbHVlOiBhbnkpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBmcm9tOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxubm9VaVNsaWRlci5jcmVhdGUocmFuZ2VZZWFyLCB7XHJcblxyXG4gIHN0YXJ0OiBbMTk0MCwgMjAyMV0sXHJcbiAgY29ubmVjdDogdHJ1ZSxcclxuICByYW5nZToge1xyXG4gICAgICAnbWluJzogMTk0MCxcclxuICAgICAgJ21heCc6IDIwMjFcclxuICB9LFxyXG4gIHN0ZXA6IDEsXHJcbiAgdG9vbHRpcHM6IHRydWUsXHJcbiAgZm9ybWF0OiB7XHJcbiAgICB0bzogZnVuY3Rpb24gKHZhbHVlOiBhbnkpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBmcm9tOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuKHJhbmdlIGFzIGFueSkubm9VaVNsaWRlci5vbignY2hhbmdlJywgKCkgPT4ge1xyXG4gIHJhbmdlTG9jYWxTdG9yYWdlLnNldFJhbmdlVG9Mb2NhbFN0b3JhZ2UoJ2RhdGFSYW5nZUNvdW50JywgJyNyYW5nZSAubm9VaS1oYW5kbGUnKTtcclxuICB0b3lzLmFkZFJlc3VsdERhdGEoKTtcclxufSk7XHJcbiAgXHJcbihyYW5nZVllYXIgYXMgYW55KS5ub1VpU2xpZGVyLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgcmFuZ2VMb2NhbFN0b3JhZ2Uuc2V0UmFuZ2VUb0xvY2FsU3RvcmFnZSgnZGF0YVJhbmdlWWVhcicsICcjcmFuZ2UteWVhciAubm9VaS1oYW5kbGUnKTtcclxuICB0b3lzLmFkZFJlc3VsdERhdGEoKTtcclxufSk7XHJcblxyXG5TdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFSYW5nZUNvdW50JykpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhUmFuZ2VDb3VudCcpKTtcclxuICAgIChyYW5nZSBhcyBhbnkpLm5vVWlTbGlkZXIuc2V0KFtgJHtjdXJyZW50VmFsdWVzWzBdfWAsIGAke2N1cnJlbnRWYWx1ZXNbY3VycmVudFZhbHVlcy5sZW5ndGggLSAxXX1gXSk7XHJcbiAgfVxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YVJhbmdlWWVhcicpKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YVJhbmdlWWVhcicpKTtcclxuICAgIChyYW5nZVllYXIgYXMgYW55KS5ub1VpU2xpZGVyLnNldChbYCR7Y3VycmVudFZhbHVlc1swXX1gLCBgJHtjdXJyZW50VmFsdWVzW2N1cnJlbnRWYWx1ZXMubGVuZ3RoIC0gMV19YF0pO1xyXG4gIH1cclxufSkiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBTdGFydEdhbWUgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhcnQtZ2FtZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb3lzIH0gZnJvbSAnLi9jb21wb25lbnRzL3RveXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmF2b3JpdGVUb3lzIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zhdm9yaXRlLXRveXMuY29tcG9uZW50JztcclxuXHJcbm5ldyBTdGFydEdhbWUoJ3N0YXJ0Jyk7XHJcbm5ldyBGYXZvcml0ZVRveXMoJ2NvbGxlY3Rpb24nKTtcclxuZXhwb3J0IGNvbnN0IHRveXMgPSBuZXcgVG95cygndG95cycpO1xyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9