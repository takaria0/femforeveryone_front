webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Forms.js":
/*!*****************************!*\
  !*** ./components/Forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Canvas */ "./components/Canvas.js");







var _jsxFileName = "/Users/takashimac/Documents/Node.js/FEMForEveryone/femfront/components/Forms.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");



var CoordinatesForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CoordinatesForm, _React$Component);

  function CoordinatesForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoordinatesForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CoordinatesForm).call(this, props));
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
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.postData = _this.postData.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CoordinatesForm, [{
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
      this.postData = {
        "geometries": [[newState.x1, newState.y1], [newState.x2, newState.y2], [newState.x3, newState.y3], [newState.x4, newState.y4]]
      };
      return axios.post('http://localhost:4000/geometry', postData).then(function (res) {
        var show = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(res.data);

        return {
          show: show
        };
      })["catch"](function (err) {
        console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(err));
      });
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
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(_Canvas__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: this.postData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
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
          lineNumber: 67
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
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
          lineNumber: 71
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
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
          lineNumber: 75
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
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
          lineNumber: 79
        },
        __self: this
      })), __jsx("br", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
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
          lineNumber: 83
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
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
          lineNumber: 87
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
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
          lineNumber: 91
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
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
          lineNumber: 95
        },
        __self: this
      })), __jsx("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2073007079",
        __self: this
      }, "label.jsx-2073007079{-webkit-text-decoration:none;text-decoration:none;color:blue;font-size:16px;margin:10px;}input[type=submit].jsx-2073007079{background-color:#4CAF50;border:none;color:white;padding:10px 10px;-webkit-text-decoration:none;text-decoration:none;margin:4px 2px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthc2hpbWFjL0RvY3VtZW50cy9Ob2RlLmpzL0ZFTUZvckV2ZXJ5b25lL2ZlbWZyb250L2NvbXBvbmVudHMvRm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0dvQixBQUdnQyxBQU9JLHlCQUNiLFlBQ0EsWUFDTSxDQVRQLFdBQ0ksTUFTTSxTQVJULFlBQ2QsNkJBUWlCLGVBQ0EsZUFDakIiLCJmaWxlIjoiL1VzZXJzL3Rha2FzaGltYWMvRG9jdW1lbnRzL05vZGUuanMvRkVNRm9yRXZlcnlvbmUvZmVtZnJvbnQvY29tcG9uZW50cy9Gb3Jtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xuXG5jbGFzcyBDb29yZGluYXRlc0Zvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIHgxOiAxMDAsXG4gICAgICB5MTogMTAwLFxuICAgICAgeDI6IDUwMCxcbiAgICAgIHkyOiAxMDAsXG4gICAgICB4MzogNTAwLFxuICAgICAgeTM6IDUwMCxcbiAgICAgIHg0OiAxMDAsXG4gICAgICB5NDogNTAwLFxuICAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wb3N0RGF0YSA9IHRoaXMucG9zdERhdGEuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgeDE6IGV2ZW50LnRhcmdldC54MSxcbiAgICAgIHkxOiBldmVudC50YXJnZXQueTEsXG4gICAgICB4MjogZXZlbnQudGFyZ2V0LngyLFxuICAgICAgeTI6IGV2ZW50LnRhcmdldC55MixcbiAgICAgIHgzOiBldmVudC50YXJnZXQueDMsXG4gICAgICB5MzogZXZlbnQudGFyZ2V0LnkzLFxuICAgICAgeDQ6IGV2ZW50LnRhcmdldC54NCxcbiAgICAgIHk0OiBldmVudC50YXJnZXQueTQsXG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICBcbiAgICB0aGlzLnBvc3REYXRhID0ge1xuICAgICAgXCJnZW9tZXRyaWVzXCI6IFtcbiAgICAgICAgW25ld1N0YXRlLngxLCBuZXdTdGF0ZS55MV0sXG4gICAgICAgIFtuZXdTdGF0ZS54MiwgbmV3U3RhdGUueTJdLFxuICAgICAgICBbbmV3U3RhdGUueDMsIG5ld1N0YXRlLnkzXSxcbiAgICAgICAgW25ld1N0YXRlLng0LCBuZXdTdGF0ZS55NF0sXG4gICAgICBdXG4gICAgfTtcblxuICAgIHJldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjQwMDAvZ2VvbWV0cnknLCBwb3N0RGF0YSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc3Qgc2hvdyA9IEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzaG93OiBzaG93XG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICB9KTtcbn1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBhbGVydCgn5bqn5qiZ44KS5YWl5Yqb44GX44G+44GX44Gf77yBJyk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj48Q2FudmFzIGRhdGE9e3RoaXMucG9zdERhdGF9IC8+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgeDE6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS54MX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBtaW49XCIxXCIgbWF4PVwiMTAwMFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICB5MTpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLnkxfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG1pbj1cIjFcIiBtYXg9XCIxMDAwXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHgyOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUueDJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbWluPVwiMVwiIG1heD1cIjEwMDBcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgeTI6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS55Mn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBtaW49XCIxXCIgbWF4PVwiMTAwMFwiIC8+XG4gICAgICAgIDwvbGFiZWw+PGJyPjwvYnI+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICB4MzpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLngzfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG1pbj1cIjFcIiBtYXg9XCIxMDAwXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHkzOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUueTN9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbWluPVwiMVwiIG1heD1cIjEwMDBcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgeDQ6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS54NH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBtaW49XCIxXCIgbWF4PVwiMTAwMFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICB5NDpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLnk0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG1pbj1cIjFcIiBtYXg9XCIxMDAwXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb3JkaW5hdGVzRm9ybTsiXX0= */\n/*@ sourceURL=/Users/takashimac/Documents/Node.js/FEMForEveryone/femfront/components/Forms.js */")));
    }
  }]);

  return CoordinatesForm;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CoordinatesForm);

/***/ })

})
//# sourceMappingURL=index.js.e38c9bd6d55ad23d029b.hot-update.js.map