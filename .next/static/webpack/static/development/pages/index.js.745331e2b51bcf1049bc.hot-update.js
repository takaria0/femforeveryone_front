webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Forms.js":
/*!*****************************!*\
  !*** ./components/Forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
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
      y1: 50,
      x2: 600,
      y2: 50,
      x3: 600,
      y3: 300,
      x4: 100,
      y4: 300
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.postData = {
      "geometries": [[_this.state.x1, _this.state.y1], [_this.state.x2, _this.state.y2], [_this.state.x3, _this.state.y3], [_this.state.x4, _this.state.y4]]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CoordinatesForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      console.log('Here is the event!!!!!!');
      console.log(event.target);
      var name = event.target.name;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, event.target.value)); // this.setState(newState);

      console.log('set new state!!!!!!!!!!!!!!');
      console.log(newState);
      this.postData = {
        "geometries": [[newState.x1, newState.y1], [newState.x2, newState.y2], [newState.x3, newState.y3], [newState.x4, newState.y4]]
      };
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
          lineNumber: 58
        },
        __self: this
      }, __jsx(_Canvas__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: this.postData,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "x1:", __jsx("input", {
        type: "number",
        name: "x1",
        value: this.state.x1,
        onChange: this.handleChange,
        min: "0",
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
      }, "y1:", __jsx("input", {
        type: "number",
        name: "y1",
        value: this.state.y1,
        onChange: this.handleChange,
        min: "0",
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
      }, "x2:", __jsx("input", {
        type: "number",
        name: "x2",
        value: this.state.x2,
        onChange: this.handleChange,
        min: "0",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "y2:", __jsx("input", {
        type: "number",
        name: "y2",
        value: this.state.y2,
        onChange: this.handleChange,
        min: "0",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), __jsx("br", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "x3:", __jsx("input", {
        type: "number",
        name: "x3",
        value: this.state.x3,
        onChange: this.handleChange,
        min: "0",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "y3:", __jsx("input", {
        type: "number",
        name: "y3",
        value: this.state.y3,
        onChange: this.handleChange,
        min: "0",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "x4:", __jsx("input", {
        type: "number",
        name: "x4",
        value: this.state.x4,
        onChange: this.handleChange,
        min: "0",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), __jsx("label", {
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "y4:", __jsx("input", {
        type: "number",
        name: "y4",
        value: this.state.y4,
        onChange: this.handleChange,
        min: "0",
        max: "1000",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), __jsx("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-2073007079",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2073007079",
        __self: this
      }, "label.jsx-2073007079{-webkit-text-decoration:none;text-decoration:none;color:blue;font-size:16px;margin:10px;}input[type=submit].jsx-2073007079{background-color:#4CAF50;border:none;color:white;padding:10px 10px;-webkit-text-decoration:none;text-decoration:none;margin:4px 2px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthc2hpbWFjL0RvY3VtZW50cy9Ob2RlLmpzL0ZFTUZvckV2ZXJ5b25lL2ZlbWZyb250L2NvbXBvbmVudHMvRm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZvQixBQUdnQyxBQU9JLHlCQUNiLFlBQ0EsWUFDTSxDQVRQLFdBQ0ksTUFTTSxTQVJULFlBQ2QsNkJBUWlCLGVBQ0EsZUFDakIiLCJmaWxlIjoiL1VzZXJzL3Rha2FzaGltYWMvRG9jdW1lbnRzL05vZGUuanMvRkVNRm9yRXZlcnlvbmUvZmVtZnJvbnQvY29tcG9uZW50cy9Gb3Jtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xuXG5jbGFzcyBDb29yZGluYXRlc0Zvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIHgxOiAxMDAsXG4gICAgICB5MTogNTAsXG4gICAgICB4MjogNjAwLFxuICAgICAgeTI6IDUwLFxuICAgICAgeDM6IDYwMCxcbiAgICAgIHkzOiAzMDAsXG4gICAgICB4NDogMTAwLFxuICAgICAgeTQ6IDMwMCxcbiAgICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdERhdGEgPSB7XG4gICAgICBcImdlb21ldHJpZXNcIjogW1xuICAgICAgICBbdGhpcy5zdGF0ZS54MSwgdGhpcy5zdGF0ZS55MV0sXG4gICAgICAgIFt0aGlzLnN0YXRlLngyLCB0aGlzLnN0YXRlLnkyXSxcbiAgICAgICAgW3RoaXMuc3RhdGUueDMsIHRoaXMuc3RhdGUueTNdLFxuICAgICAgICBbdGhpcy5zdGF0ZS54NCwgdGhpcy5zdGF0ZS55NF0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG5cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnSGVyZSBpcyB0aGUgZXZlbnQhISEhISEnKVxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtuYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgY29uc29sZS5sb2coJ3NldCBuZXcgc3RhdGUhISEhISEhISEhISEhIScpXG4gICAgY29uc29sZS5sb2cobmV3U3RhdGUpXG4gICAgdGhpcy5wb3N0RGF0YSA9IHtcbiAgICAgIFwiZ2VvbWV0cmllc1wiOiBbXG4gICAgICAgIFtuZXdTdGF0ZS54MSwgbmV3U3RhdGUueTFdLFxuICAgICAgICBbbmV3U3RhdGUueDIsIG5ld1N0YXRlLnkyXSxcbiAgICAgICAgW25ld1N0YXRlLngzLCBuZXdTdGF0ZS55M10sXG4gICAgICAgIFtuZXdTdGF0ZS54NCwgbmV3U3RhdGUueTRdLFxuICAgICAgXVxuICAgIH07XG59XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgYWxlcnQoJ+W6p+aomeOCkuWFpeWKm+OBl+OBvuOBl+OBn++8gScpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+PENhbnZhcyBkYXRhPXt0aGlzLnBvc3REYXRhfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICB4MTpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJ4MVwiIHZhbHVlPXt0aGlzLnN0YXRlLngxfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG1pbj1cIjBcIiBtYXg9XCIxMDAwXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHkxOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInkxXCIgdmFsdWU9e3RoaXMuc3RhdGUueTF9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbWluPVwiMFwiIG1heD1cIjEwMDBcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgeDI6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwieDJcIiB2YWx1ZT17dGhpcy5zdGF0ZS54Mn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBtaW49XCIwXCIgbWF4PVwiMTAwMFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICB5MjpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJ5MlwiIHZhbHVlPXt0aGlzLnN0YXRlLnkyfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG1pbj1cIjBcIiBtYXg9XCIxMDAwXCIgLz5cbiAgICAgICAgPC9sYWJlbD48YnI+PC9icj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHgzOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIngzXCIgdmFsdWU9e3RoaXMuc3RhdGUueDN9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbWluPVwiMFwiIG1heD1cIjEwMDBcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgeTM6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwieTNcIiB2YWx1ZT17dGhpcy5zdGF0ZS55M30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBtaW49XCIwXCIgbWF4PVwiMTAwMFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICB4NDpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJ4NFwiIHZhbHVlPXt0aGlzLnN0YXRlLng0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG1pbj1cIjBcIiBtYXg9XCIxMDAwXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHk0OlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInk0XCIgdmFsdWU9e3RoaXMuc3RhdGUueTR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbWluPVwiMFwiIG1heD1cIjEwMDBcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiA0cHggMnB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29vcmRpbmF0ZXNGb3JtOyJdfQ== */\n/*@ sourceURL=/Users/takashimac/Documents/Node.js/FEMForEveryone/femfront/components/Forms.js */")));
    }
  }]);

  return CoordinatesForm;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CoordinatesForm);

/***/ })

})
//# sourceMappingURL=index.js.745331e2b51bcf1049bc.hot-update.js.map