webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/AppLayOut.js":
/*!*********************************!*\
  !*** ./components/AppLayOut.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _this = undefined,
    _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\components\\AppLayOut.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var AppLayOut = function AppLayOut(_ref) {
  _s();

  var children = _ref.children;
  var dummyList = ['카테코리01', '카테코리02', '카테코리03', '카테코리04', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05'];
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth;
  }),
      userInfo = _useSelector.userInfo,
      joined = _useSelector.joined;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_8__["LOAD_USER_REQUEST"]
    });
  }, [userInfo]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isClicked = _useState[0],
      setIsClicked = _useState[1];

  var inputEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var catergoriList = function catergoriList() {
    setIsClicked(!isClicked);
  };

  var closeCatergoriList = function closeCatergoriList() {
    setIsClicked(false);
  }; //https://velog.io/@janghyoin/Jobshopper-project-NextJS%EC%97%90%EC%84%9C-styled-components-%EC%82%AC%EC%9A%A9-hwjzs423yw


  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "navul",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "navli",
    onClick: catergoriList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "\uBA54\uB274"), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 61
    }
  }, "Home"))), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/about',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 66
    }
  }, "About"))), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/count',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 66
    }
  }, "Count"))), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/emp',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 64
    }
  }, "emp"))), !userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/join',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 79
    }
  }, "\uD68C\uC6D0\uAC00\uC785"))), !userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/login',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 80
    }
  }, "\uB85C\uADF8\uC778"))), userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/userInfo',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 83
    }
  }, "\uD68C\uC6D0\uC815\uBCF4"))), userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/userInfo',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 83
    }
  }, "\uB85C\uADF8\uC544\uC6C3")))), __jsx("div", {
    className: "sidenav",
    style: {
      width: isClicked ? "40%" : "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "closebtn",
    onClick: closeCatergoriList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 16
    }
  }, "x"), dummyList.map(function (v, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: '/about',
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 16
      }
    }, __jsx("a", {
      onClick: closeCatergoriList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, v));
  })), children));
};

_s(AppLayOut, "UqyaU6RuAZr7DxxGYKzGreCyCQY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = AppLayOut;
AppLayOut.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayOut);

var _c;

$RefreshReg$(_c, "AppLayOut");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcExheU91dC5qcyJdLCJuYW1lcyI6WyJBcHBMYXlPdXQiLCJjaGlsZHJlbiIsImR1bW15TGlzdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsInVzZXJJbmZvIiwiam9pbmVkIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfVVNFUl9SRVFVRVNUIiwidXNlU3RhdGUiLCJpc0NsaWNrZWQiLCJzZXRJc0NsaWNrZWQiLCJpbnB1dEVsIiwidXNlUmVmIiwiY2F0ZXJnb3JpTGlzdCIsImNsb3NlQ2F0ZXJnb3JpTGlzdCIsIndpZHRoIiwibWFwIiwidiIsImkiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBOztBQUFBLE1BQWJDLFFBQWEsUUFBYkEsUUFBYTtBQUM3QixNQUFNQyxTQUFTLEdBQUcsQ0FBQyxRQUFELEVBQVUsUUFBVixFQUFtQixRQUFuQixFQUE0QixRQUE1QixFQUFxQyxRQUFyQyxFQUE4QyxRQUE5QyxFQUF1RCxRQUF2RCxFQUFnRSxRQUFoRSxFQUF5RSxRQUF6RSxFQUFrRixRQUFsRixFQUEyRixRQUEzRixFQUFvRyxRQUFwRyxFQUE2RyxRQUE3RyxFQUFzSCxRQUF0SCxFQUErSCxRQUEvSCxFQUF3SSxRQUF4SSxFQUFpSixRQUFqSixFQUEwSixRQUExSixFQUFtSyxRQUFuSyxFQUE0SyxRQUE1SyxFQUFxTCxRQUFyTCxDQUFsQjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBSDZCLHFCQUlGQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUND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O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSztBQUFHLGFBQU8sRUFBRUosa0JBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFrQ0csQ0FBbEMsQ0FETCxDQUZlO0FBQUEsR0FBZCxDQUZKLENBZEksRUF3QkVyQixRQXhCRixDQURKLENBRlI7QUFrQ0gsQ0EzREQ7O0dBQU1ELFM7VUFHZUksdUQsRUFDVUMsdUQ7OztLQUp6QkwsUztBQTZETkEsU0FBUyxDQUFDd0IsU0FBVixHQUFzQjtBQUNsQnZCLFVBQVEsRUFBR3dCLGlEQUFTLENBQUNDO0FBREgsQ0FBdEI7QUFHZTFCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjZmYTBlNzdjNjgxNDllNjk4Y2Q0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHt1c2VDYWxsYmFjayx1c2VTdGF0ZSx1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtSb3csQ29sfSBmcm9tICAnYW50ZCc7IFxyXG5pbXBvcnQgeyBSZXN1bHQsIEljb24sIFdoaXRlU3BhY2UgfSBmcm9tICdhbnRkLW1vYmlsZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7IFxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBMT0FEX1VTRVJfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL2F1dGgnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5cclxuY29uc3QgQXBwTGF5T3V0ID0gKHtjaGlsZHJlbn0pID0+e1xyXG4gICAgY29uc3QgZHVtbXlMaXN0ID0gWyfsubTthYzsvZTrpqwwMScsJ+y5tO2FjOy9lOumrDAyJywn7Lm07YWM7L2U66asMDMnLCfsubTthYzsvZTrpqwwNCcsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnXTsgXHJcbiAgIFxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICAgIGNvbnN0IHt1c2VySW5mbywgam9pbmVkfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmF1dGgpOyBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9VU0VSX1JFUVVFU1QsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH0sW3VzZXJJbmZvXSlcclxuXHJcbiAgICBjb25zdCBbaXNDbGlja2VkLHNldElzQ2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG4gICAgY29uc3QgaW5wdXRFbCA9IHVzZVJlZihudWxsKTsgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjYXRlcmdvcmlMaXN0ID0gKCkgPT57XHJcbiAgICAgICAgICBzZXRJc0NsaWNrZWQoIWlzQ2xpY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VDYXRlcmdvcmlMaXN0ID0gKCkgPT57XHJcbiAgICAgICAgc2V0SXNDbGlja2VkKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2h0dHBzOi8vdmVsb2cuaW8vQGphbmdoeW9pbi9Kb2JzaG9wcGVyLXByb2plY3QtTmV4dEpTJUVDJTk3JTkwJUVDJTg0JTlDLXN0eWxlZC1jb21wb25lbnRzLSVFQyU4MiVBQyVFQyU5QSVBOS1od2p6czQyM3l3XHJcbiAgICByZXR1cm4oXHJcblxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9PiBcclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2dWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIiBvbkNsaWNrPXtjYXRlcmdvcmlMaXN0fT7rqZTribQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiPjxMaW5rIGhyZWY9eycvJ30gPjxhPkhvbWU8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCI+PExpbmsgaHJlZj17Jy9hYm91dCd9ID48YT5BYm91dDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL2NvdW50J30gPjxhPkNvdW50PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiPjxMaW5rIGhyZWY9eycvZW1wJ30gPjxhPmVtcDwvYT48L0xpbms+PC9saT4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgeyF1c2VySW5mbyAmJiA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL2pvaW4nfSA+PGE+7ZqM7JuQ6rCA7J6FPC9hPjwvTGluaz48L2xpPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyF1c2VySW5mbyAmJiA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL2xvZ2luJ30gPjxhPuuhnOq3uOyduDwvYT48L0xpbms+PC9saT4gIH1cclxuICAgICAgICAgICAgICAgICAgICB7dXNlckluZm8gJiYgIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiPjxMaW5rIGhyZWY9eycvdXNlckluZm8nfSA+PGE+7ZqM7JuQ7KCV67O0PC9hPjwvTGluaz48L2xpPiB9XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvICYmICA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL3VzZXJJbmZvJ30gPjxhPuuhnOq3uOyVhOybgzwvYT48L0xpbms+PC9saT4gfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVuYXZcIiBzdHlsZT17e3dpZHRoIDogaXNDbGlja2VkPyBcIjQwJVwiOlwiMFwifX0+XHJcbiAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlYnRuXCIgb25DbGljaz17Y2xvc2VDYXRlcmdvcmlMaXN0fT54PC9hPlxyXG4gICAgICAgICAgICAgICB7ZHVtbXlMaXN0Lm1hcCgodixpKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYWJvdXQnfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2Nsb3NlQ2F0ZXJnb3JpTGlzdH0gPnt2fTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+IFxyXG5cclxuXHJcbiAgICAgICAgKTsgXHJcblxyXG59XHJcblxyXG5BcHBMYXlPdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW4gOiBQcm9wVHlwZXMubm9kZSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlPdXQ7ICJdLCJzb3VyY2VSb290IjoiIn0=