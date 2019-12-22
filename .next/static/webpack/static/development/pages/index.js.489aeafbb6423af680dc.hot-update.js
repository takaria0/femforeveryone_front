webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Forms.js":
/*!*****************************!*\
  !*** ./components/Forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/Users/takashimac/Documents/Node.js/FEMForEveryone/femfront/components/Forms.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

var CoordinatesForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CoordinatesForm, _React$Component);

  function CoordinatesForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoordinatesForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CoordinatesForm).call(this, props));
    _this.state = {
      x1: 100,
      y1: 100,
      x2: 500,
      y2: 100,
      x3: 500,
      y3: 500,
      x4: 100,
      y4: 500
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoordinatesForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      var newState = {
        x1: event.target.x1,
        y1: event.target.y1,
        x2: event.target.x2,
        y2: event.target.y2,
        x3: event.target.x3,
        y3: event.target.y3,
        x4: event.target.x4,
        y4: event.target.y4
      };
      this.setState(newState);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      alert('座標を入力しました！');
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "x1:", __jsx("input", {
        type: "number",
        value: this.state.x1,
        onChange: this.handleChange,
        min: "1",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "y1:", __jsx("input", {
        type: "number",
        value: this.state.y1,
        onChange: this.handleChange,
        min: "1",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "x2:", __jsx("input", {
        type: "number",
        value: this.state.x2,
        onChange: this.handleChange,
        min: "1",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "y2:", __jsx("input", {
        type: "number",
        value: this.state.y2,
        onChange: this.handleChange,
        min: "1",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), __jsx("br", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "x3:", __jsx("input", {
        type: "number",
        value: this.state.x3,
        onChange: this.handleChange,
        min: "1",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "y3:", __jsx("input", {
        type: "number",
        value: this.state.y3,
        onChange: this.handleChange,
        min: "1",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "x4:", __jsx("input", {
        type: "number",
        value: this.state.x4,
        onChange: this.handleChange,
        min: "1",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "y4:", __jsx("input", {
        type: "number",
        value: this.state.y4,
        onChange: this.handleChange,
        min: "1",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), __jsx("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2073007079",
        __self: this
      }, "label.jsx-2073007079{-webkit-text-decoration:none;text-decoration:none;color:blue;font-size:16px;margin:10px;}input[type=submit].jsx-2073007079{background-color:#4CAF50;border:none;color:white;padding:10px 10px;-webkit-text-decoration:none;text-decoration:none;margin:4px 2px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthc2hpbWFjL0RvY3VtZW50cy9Ob2RlLmpzL0ZFTUZvckV2ZXJ5b25lL2ZlbWZyb250L2NvbXBvbmVudHMvRm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVvQixBQUdnQyxBQU9JLHlCQUNiLFlBQ0EsWUFDTSxDQVRQLFdBQ0ksTUFTTSxTQVJULFlBQ2QsNkJBUWlCLGVBQ0EsZUFDakIiLCJmaWxlIjoiL1VzZXJzL3Rha2FzaGltYWMvRG9jdW1lbnRzL05vZGUuanMvRkVNRm9yRXZlcnlvbmUvZmVtZnJvbnQvY29tcG9uZW50cy9Gb3Jtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvb3JkaW5hdGVzRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgeDE6IDEwMCxcbiAgICAgIHkxOiAxMDAsXG4gICAgICB4MjogNTAwLFxuICAgICAgeTI6IDEwMCxcbiAgICAgIHgzOiA1MDAsXG4gICAgICB5MzogNTAwLFxuICAgICAgeDQ6IDEwMCxcbiAgICAgIHk0OiA1MDAsXG4gICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgeDE6IGV2ZW50LnRhcmdldC54MSxcbiAgICAgIHkxOiBldmVudC50YXJnZXQueTEsXG4gICAgICB4MjogZXZlbnQudGFyZ2V0LngyLFxuICAgICAgeTI6IGV2ZW50LnRhcmdldC55MixcbiAgICAgIHgzOiBldmVudC50YXJnZXQueDMsXG4gICAgICB5MzogZXZlbnQudGFyZ2V0LnkzLFxuICAgICAgeDQ6IGV2ZW50LnRhcmdldC54NCxcbiAgICAgIHk0OiBldmVudC50YXJnZXQueTQsXG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbn1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBhbGVydCgn5bqn5qiZ44KS5YWl5Yqb44GX44G+44GX44Gf77yBJyk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHgxOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUueDF9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbWluPVwiMVwiIG1heD1cIjEwMDBcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgeTE6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS55MX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBtaW49XCIxXCIgbWF4PVwiMTAwMFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICB4MjpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLngyfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG1pbj1cIjFcIiBtYXg9XCIxMDAwXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHkyOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUueTJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbWluPVwiMVwiIG1heD1cIjEwMDBcIiAvPlxuICAgICAgICA8L2xhYmVsPjxicj48L2JyPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgeDM6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS54M30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBtaW49XCIxXCIgbWF4PVwiMTAwMFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICB5MzpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLnkzfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG1pbj1cIjFcIiBtYXg9XCIxMDAwXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHg0OlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUueDR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbWluPVwiMVwiIG1heD1cIjEwMDBcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgeTQ6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS55NH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBtaW49XCIxXCIgbWF4PVwiMTAwMFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDRweCAycHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Zvcm0+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb3JkaW5hdGVzRm9ybTsiXX0= */\n/*@ sourceURL=/Users/takashimac/Documents/Node.js/FEMForEveryone/femfront/components/Forms.js */"));
    }
  }]);

  return CoordinatesForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CoordinatesForm);

/***/ })

})
//# sourceMappingURL=index.js.489aeafbb6423af680dc.hot-update.js.map