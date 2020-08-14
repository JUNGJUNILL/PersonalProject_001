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
    //로그 아웃 후 메인 페이지로 이동
    if (!userInfo) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    }
  }, [userInfo]);
  var logOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    dispatch({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_8__["LOGOUT_REQUEST"]
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
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "navul",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "navli",
    onClick: catergoriList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "\uBA54\uB274"), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 61
    }
  }, "Home"))), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/about',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 66
    }
  }, "About"))), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/count',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 66
    }
  }, "Count"))), userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 34
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/emp',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 56
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 77
    }
  }, "emp"))), !userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/join',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 79
    }
  }, "\uD68C\uC6D0\uAC00\uC785"))), !userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/login',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 80
    }
  }, "\uB85C\uADF8\uC778"))), userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/userInfo',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 83
    }
  }, "\uD68C\uC6D0\uC815\uBCF4"))), userInfo && __jsx("li", {
    className: "navli",
    onClick: logOut,
    color: "blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 36
    }
  }, "\uB85C\uADF8\uC544\uC6C3")), __jsx("div", {
    className: "sidenav",
    style: {
      width: isClicked ? "40%" : "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "closebtn",
    onClick: closeCatergoriList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 16
    }
  }, "x"), dummyList.map(function (v, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: '/about',
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 16
      }
    }, __jsx("a", {
      onClick: closeCatergoriList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }, v));
  })), children));
};

_s(AppLayOut, "vwAKp1hJt2EBcaNwqppaBsLW1sQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcExheU91dC5qcyJdLCJuYW1lcyI6WyJBcHBMYXlPdXQiLCJjaGlsZHJlbiIsImR1bW15TGlzdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsInVzZXJJbmZvIiwiam9pbmVkIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicHVzaCIsImxvZ091dCIsInVzZUNhbGxiYWNrIiwiZSIsInR5cGUiLCJMT0dPVVRfUkVRVUVTVCIsInVzZVN0YXRlIiwiaXNDbGlja2VkIiwic2V0SXNDbGlja2VkIiwiaW5wdXRFbCIsInVzZVJlZiIsImNhdGVyZ29yaUxpc3QiLCJjbG9zZUNhdGVyZ29yaUxpc3QiLCJ3aWR0aCIsIm1hcCIsInYiLCJpIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWU7QUFBQTs7QUFBQSxNQUFiQyxRQUFhLFFBQWJBLFFBQWE7QUFDN0IsTUFBTUMsU0FBUyxHQUFHLENBQUMsUUFBRCxFQUFVLFFBQVYsRUFBbUIsUUFBbkIsRUFBNEIsUUFBNUIsRUFBcUMsUUFBckMsRUFBOEMsUUFBOUMsRUFBdUQsUUFBdkQsRUFBZ0UsUUFBaEUsRUFBeUUsUUFBekUsRUFBa0YsUUFBbEYsRUFBMkYsUUFBM0YsRUFBb0csUUFBcEcsRUFBNkcsUUFBN0csRUFBc0gsUUFBdEgsRUFBK0gsUUFBL0gsRUFBd0ksUUFBeEksRUFBaUosUUFBakosRUFBMEosUUFBMUosRUFBbUssUUFBbkssRUFBNEssUUFBNUssRUFBcUwsUUFBckwsQ0FBbEI7QUFFQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUg2QixxQkFJRkMsK0RB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QUEsU0FESCxFQUVJdEIsU0FBUyxDQUFDd0IsR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBR0MsQ0FBSDtBQUFBLFdBRWYsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRSxRQUFaO0FBQXNCLFNBQUcsRUFBRUEsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLO0FBQUcsYUFBTyxFQUFFSixrQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWtDRyxDQUFsQyxDQURMLENBRmU7QUFBQSxHQUFkLENBRkosQ0FkSSxFQXdCRTFCLFFBeEJGLENBREosQ0FGUjtBQWtDSCxDQXZFRDs7R0FBTUQsUztVQUdlSSx1RCxFQUNVQyx1RDs7O0tBSnpCTCxTO0FBeUVOQSxTQUFTLENBQUM2QixTQUFWLEdBQXNCO0FBQ2xCNUIsVUFBUSxFQUFHNkIsaURBQVMsQ0FBQ0M7QUFESCxDQUF0QjtBQUdlL0Isd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYWI2MzlmYWIzYzdiYjU4YjAwY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge3VzZUNhbGxiYWNrLHVzZVN0YXRlLHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge1JvdyxDb2x9IGZyb20gICdhbnRkJzsgXHJcbmltcG9ydCB7IFJlc3VsdCwgSWNvbiwgV2hpdGVTcGFjZSxCdXR0b24gfSBmcm9tICdhbnRkLW1vYmlsZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7IFxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICAgTE9HT1VUX1JFUVVFU1QsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvYXV0aCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcblxyXG5jb25zdCBBcHBMYXlPdXQgPSAoe2NoaWxkcmVufSkgPT57XHJcbiAgICBjb25zdCBkdW1teUxpc3QgPSBbJ+y5tO2FjOy9lOumrDAxJywn7Lm07YWM7L2U66asMDInLCfsubTthYzsvZTrpqwwMycsJ+y5tO2FjOy9lOumrDA0Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNSddOyBcclxuICAgXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gICAgY29uc3Qge3VzZXJJbmZvLCBqb2luZWR9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuYXV0aCk7IFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICAvL+uhnOq3uCDslYTsm4Mg7ZuEIOuplOyduCDtjpjsnbTsp4DroZwg7J2064+ZXHJcbiAgICAgICAgaWYoIXVzZXJJbmZvKXtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTsgXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sW3VzZXJJbmZvXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGxvZ091dCA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HT1VUX1JFUVVFU1QsIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sW3VzZXJJbmZvXSk7IFxyXG5cclxuICAgIGNvbnN0IFtpc0NsaWNrZWQsc2V0SXNDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcbiAgICBjb25zdCBpbnB1dEVsID0gdXNlUmVmKG51bGwpOyBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGNhdGVyZ29yaUxpc3QgPSAoKSA9PntcclxuICAgICAgICAgIHNldElzQ2xpY2tlZCghaXNDbGlja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZUNhdGVyZ29yaUxpc3QgPSAoKSA9PntcclxuICAgICAgICBzZXRJc0NsaWNrZWQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaHR0cHM6Ly92ZWxvZy5pby9AamFuZ2h5b2luL0pvYnNob3BwZXItcHJvamVjdC1OZXh0SlMlRUMlOTclOTAlRUMlODQlOUMtc3R5bGVkLWNvbXBvbmVudHMtJUVDJTgyJUFDJUVDJTlBJUE5LWh3anpzNDIzeXdcclxuICAgIHJldHVybihcclxuXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0+IFxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZ1bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiIG9uQ2xpY2s9e2NhdGVyZ29yaUxpc3R9PuuplOuJtDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCI+PExpbmsgaHJlZj17Jy8nfSA+PGE+SG9tZTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL2Fib3V0J30gPjxhPkFib3V0PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiPjxMaW5rIGhyZWY9eycvY291bnQnfSA+PGE+Q291bnQ8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvICYmIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiPjxMaW5rIGhyZWY9eycvZW1wJ30gPjxhPmVtcDwvYT48L0xpbms+PC9saT4gICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHshdXNlckluZm8gJiYgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCI+PExpbmsgaHJlZj17Jy9qb2luJ30gPjxhPu2ajOybkOqwgOyehTwvYT48L0xpbms+PC9saT4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHshdXNlckluZm8gJiYgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCI+PExpbmsgaHJlZj17Jy9sb2dpbid9ID48YT7roZzqt7jsnbg8L2E+PC9MaW5rPjwvbGk+ICB9XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvICYmICA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL3VzZXJJbmZvJ30gPjxhPu2ajOybkOygleuztDwvYT48L0xpbms+PC9saT4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VySW5mbyAmJiAgIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiIG9uQ2xpY2s9e2xvZ091dH0gY29sb3I9e1wiYmx1ZVwifT7roZzqt7jslYTsm4M8L2xpPn1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlbmF2XCIgc3R5bGU9e3t3aWR0aCA6IGlzQ2xpY2tlZD8gXCI0MCVcIjpcIjBcIn19PlxyXG4gICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbG9zZWJ0blwiIG9uQ2xpY2s9e2Nsb3NlQ2F0ZXJnb3JpTGlzdH0+eDwvYT5cclxuICAgICAgICAgICAgICAge2R1bW15TGlzdC5tYXAoKHYsaSk9PihcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2Fib3V0J30ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZUNhdGVyZ29yaUxpc3R9ID57dn08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PiBcclxuXHJcblxyXG4gICAgICAgICk7IFxyXG5cclxufVxyXG5cclxuQXBwTGF5T3V0LnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuIDogUHJvcFR5cGVzLm5vZGUsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5T3V0OyAiXSwic291cmNlUm9vdCI6IiJ9