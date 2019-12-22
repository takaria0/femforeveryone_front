webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Canvas.js":
/*!******************************!*\
  !*** ./components/Canvas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/takashimac/Documents/Node.js/FEMForEveryone/femfront/components/Canvas.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

var Canvas =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Canvas, _React$Component);

  function Canvas() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Canvas);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Canvas).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Canvas, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var rawCoordinates = this.props.data;
      rawCoordinates = {
        "geometries": [[rawCoordinates.x1, rawCoordinates.y1], [rawCoordinates.x2, rawCoordinates.y2], [rawCoordinates.x3, rawCoordinates.y3], [rawCoordinates.x4, rawCoordinates.y4]]
      };
      var coords = rawCoordinates.geometries;
      var canvas = this.refs.canvas;
      var ctx = canvas.getContext("2d");
      ctx.font = "40px Courier black";
      ctx.beginPath();
      ctx.clearRect(0, 0, ctx.width, ctx.height);

      for (var i = 0; i < coords.length; i++) {
        ctx.lineTo(coords[i][0], coords[i][1]);
      }

      ctx.lineTo(coords[0][0], coords[0][1]);
      ctx.stroke();
      ctx.clearRect(0, 0, ctx.width, ctx.height);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var rawCoordinates = this.props.data;
      rawCoordinates = {
        "geometries": [[rawCoordinates.x1, rawCoordinates.y1], [rawCoordinates.x2, rawCoordinates.y2], [rawCoordinates.x3, rawCoordinates.y3], [rawCoordinates.x4, rawCoordinates.y4]]
      };
      var coords = rawCoordinates.geometries;
      var canvas = this.refs.canvas;
      var ctx = canvas.getContext("2d");
      ctx.font = "40px Courier black";
      ctx.beginPath();
      ctx.clearRect(0, 0, ctx.width, ctx.height);

      for (var i = 0; i < coords.length; i++) {
        ctx.lineTo(coords[i][0], coords[i][1]);
      }

      ctx.lineTo(coords[0][0], coords[0][1]);
      ctx.stroke();
      ctx.clearRect(0, 0, ctx.width, ctx.height);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("canvas", {
        ref: "canvas",
        width: 1000,
        height: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }));
    }
  }]);

  return Canvas;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ })

})
//# sourceMappingURL=index.js.765938c51ae85e603479.hot-update.js.map