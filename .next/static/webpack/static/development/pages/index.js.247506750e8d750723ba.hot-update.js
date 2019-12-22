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
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Canvas */ "./components/Canvas.js");






var _jsxFileName = "/Users/takashimac/Documents/Node.js/FEMForEveryone/femfront/components/Forms.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");



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
      y1: 50,
      x2: 600,
      y2: 50,
      x3: 600,
      y3: 300,
      x4: 100,
      y4: 300
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.postData = {
      "geometries": [[100, 50], [600, 50], [600, 300], [100, 300]]
    };
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
      console.log('set new state!!!!!!!!!!!!!!');
      this.postData = {
        "geometries": [[newState.x1, newState.y1], [newState.x2, newState.y2], [newState.x3, newState.y3], [newState.x4, newState.y4]]
      }; // return axios.post('http://localhost:4000/geometry', postData)
      //   .then(function (res) {
      //     const show = JSON.stringify(res.data);
      //     return {
      //       show: show
      //     };
      //   })
      //   .catch(function (err) {
      //     console.log(JSON.stringify(err));
      //   });
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
          lineNumber: 71
        },
        __self: this
      }, __jsx(_Canvas__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: this.postData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "x1:", __jsx("input", {
        type: "number",
        value: this.state.x1,
        onChange: this.handleChange,
        min: "0",
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
      }, "y1:", __jsx("input", {
        type: "number",
        value: this.state.y1,
        onChange: this.handleChange,
        min: "0",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "x2:", __jsx("input", {
        type: "number",
        value: this.state.x2,
        onChange: this.handleChange,
        min: "0",
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
      }, "y2:", __jsx("input", {
        type: "number",
        value: this.state.y2,
        onChange: this.handleChange,
        min: "0",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), __jsx("br", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "x3:", __jsx("input", {
        type: "number",
        value: this.state.x3,
        onChange: this.handleChange,
        min: "0",
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
      }, "y3:", __jsx("input", {
        type: "number",
        value: this.state.y3,
        onChange: this.handleChange,
        min: "0",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "x4:", __jsx("input", {
        type: "number",
        value: this.state.x4,
        onChange: this.handleChange,
        min: "0",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "y4:", __jsx("input", {
        type: "number",
        value: this.state.y4,
        onChange: this.handleChange,
        min: "0",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), __jsx("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2073007079",
        __self: this
      }, "label.jsx-2073007079{-webkit-text-decoration:none;text-decoration:none;color:blue;font-size:16px;margin:10px;}input[type=submit].jsx-2073007079{background-color:#4CAF50;border:none;color:white;padding:10px 10px;-webkit-text-decoration:none;text-decoration:none;margin:4px 2px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthc2hpbWFjL0RvY3VtZW50cy9Ob2RlLmpzL0ZFTUZvckV2ZXJ5b25lL2ZlbWZyb250L2NvbXBvbmVudHMvRm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEdvQixBQUdnQyxBQU9JLHlCQUNiLFlBQ0EsWUFDTSxDQVRQLFdBQ0ksTUFTTSxTQVJULFlBQ2QsNkJBUWlCLGVBQ0EsZUFDakIiLCJmaWxlIjoiL1VzZXJzL3Rha2FzaGltYWMvRG9jdW1lbnRzL05vZGUuanMvRkVNRm9yRXZlcnlvbmUvZmVtZnJvbnQvY29tcG9uZW50cy9Gb3Jtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xuXG5jbGFzcyBDb29yZGluYXRlc0Zvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIHgxOiAxMDAsXG4gICAgICB5MTogNTAsXG4gICAgICB4MjogNjAwLFxuICAgICAgeTI6IDUwLFxuICAgICAgeDM6IDYwMCxcbiAgICAgIHkzOiAzMDAsXG4gICAgICB4NDogMTAwLFxuICAgICAgeTQ6IDMwMCxcbiAgICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdERhdGEgPSB7XG4gICAgICBcImdlb21ldHJpZXNcIjogW1xuICAgICAgICBbMTAwLCA1MF0sXG4gICAgICAgIFs2MDAsIDUwXSxcbiAgICAgICAgWzYwMCwgMzAwXSxcbiAgICAgICAgWzEwMCwgMzAwXVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgIHgxOiBldmVudC50YXJnZXQueDEsXG4gICAgICB5MTogZXZlbnQudGFyZ2V0LnkxLFxuICAgICAgeDI6IGV2ZW50LnRhcmdldC54MixcbiAgICAgIHkyOiBldmVudC50YXJnZXQueTIsXG4gICAgICB4MzogZXZlbnQudGFyZ2V0LngzLFxuICAgICAgeTM6IGV2ZW50LnRhcmdldC55MyxcbiAgICAgIHg0OiBldmVudC50YXJnZXQueDQsXG4gICAgICB5NDogZXZlbnQudGFyZ2V0Lnk0LFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgY29uc29sZS5sb2coJ3NldCBuZXcgc3RhdGUhISEhISEhISEhISEhIScpXG4gICAgXG4gICAgdGhpcy5wb3N0RGF0YSA9IHtcbiAgICAgIFwiZ2VvbWV0cmllc1wiOiBbXG4gICAgICAgIFtuZXdTdGF0ZS54MSwgbmV3U3RhdGUueTFdLFxuICAgICAgICBbbmV3U3RhdGUueDIsIG5ld1N0YXRlLnkyXSxcbiAgICAgICAgW25ld1N0YXRlLngzLCBuZXdTdGF0ZS55M10sXG4gICAgICAgIFtuZXdTdGF0ZS54NCwgbmV3U3RhdGUueTRdLFxuICAgICAgXVxuICAgIH07XG5cbiAgICAvLyByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dlb21ldHJ5JywgcG9zdERhdGEpXG4gICAgLy8gICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgLy8gICAgIGNvbnN0IHNob3cgPSBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSk7XG4gICAgLy8gICAgIHJldHVybiB7XG4gICAgLy8gICAgICAgc2hvdzogc2hvd1xuICAgIC8vICAgICB9O1xuICAgIC8vICAgfSlcbiAgICAvLyAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgIC8vICAgfSk7XG59XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgYWxlcnQoJ+W6p+aomeOCkuWFpeWKm+OBl+OBvuOBl+OBn++8gScpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+PENhbnZhcyBkYXRhPXt0aGlzLnBvc3REYXRhfSAvPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHgxOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUueDF9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbWluPVwiMFwiIG1heD1cIjEwMDBcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgeTE6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS55MX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBtaW49XCIwXCIgbWF4PVwiMTAwMFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICB4MjpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLngyfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG1pbj1cIjBcIiBtYXg9XCIxMDAwXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHkyOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUueTJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbWluPVwiMFwiIG1heD1cIjEwMDBcIiAvPlxuICAgICAgICA8L2xhYmVsPjxicj48L2JyPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgeDM6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS54M30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBtaW49XCIwXCIgbWF4PVwiMTAwMFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICB5MzpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLnkzfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG1pbj1cIjBcIiBtYXg9XCIxMDAwXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHg0OlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUueDR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbWluPVwiMFwiIG1heD1cIjEwMDBcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgeTQ6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS55NH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBtaW49XCIwXCIgbWF4PVwiMTAwMFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDRweCAycHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29yZGluYXRlc0Zvcm07Il19 */\n/*@ sourceURL=/Users/takashimac/Documents/Node.js/FEMForEveryone/femfront/components/Forms.js */")));
    }
  }]);

  return CoordinatesForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CoordinatesForm);

/***/ })

})
//# sourceMappingURL=index.js.247506750e8d750723ba.hot-update.js.map