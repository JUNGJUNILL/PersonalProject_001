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
var _this = undefined,
    _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\components\\AppLayOut.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var AppLayOut = function AppLayOut(_ref) {
  _s();

  var children = _ref.children;
  var dummyList = ['카테코리01', '카테코리02', '카테코리03', '카테코리04', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05'];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth;
  }),
      userInfo = _useSelector.userInfo;

  console.log('AppLayOut userInfo==>', userInfo); // useEffect(()=>{
  //     //console.log('userInfo==>' , userInfo); 
  //     if(userInfo){
  //      //   alert(joined); 
  //         Router.push('/'); 
  //     }
  // },[])

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isClicked = _useState[0],
      setIsClicked = _useState[1];

  var inputEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var colorFilledBtn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    alert(test);
  }, []);

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
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "navul",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "navli",
    onClick: catergoriList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "\uBA54\uB274"), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 61
    }
  }, "Home"))), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/about',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 66
    }
  }, "About"))), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/count',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 66
    }
  }, "Count"))), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/emp',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 64
    }
  }, "emp"))), !userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/join',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 79
    }
  }, "\uD68C\uC6D0\uAC00\uC785"))), !userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/login',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 80
    }
  }, "\uB85C\uADF8\uC778"))), userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/login',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 80
    }
  }, "\uD68C\uC6D0\uC815\uBCF4")))), __jsx("div", {
    className: "sidenav",
    style: {
      width: isClicked ? "40%" : "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "closebtn",
    onClick: closeCatergoriList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 16
    }
  }, "x"), dummyList.map(function (v, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: '/about',
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 16
      }
    }, __jsx("a", {
      onClick: closeCatergoriList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    }, v));
  })), children));
};

_s(AppLayOut, "J+4fdoWvcJsuE4IklyK9Zj2Jr9A=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcExheU91dC5qcyJdLCJuYW1lcyI6WyJBcHBMYXlPdXQiLCJjaGlsZHJlbiIsImR1bW15TGlzdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhdXRoIiwidXNlckluZm8iLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJpc0NsaWNrZWQiLCJzZXRJc0NsaWNrZWQiLCJpbnB1dEVsIiwidXNlUmVmIiwiY29sb3JGaWxsZWRCdG4iLCJ1c2VDYWxsYmFjayIsImFsZXJ0IiwidGVzdCIsImNhdGVyZ29yaUxpc3QiLCJjbG9zZUNhdGVyZ29yaUxpc3QiLCJ3aWR0aCIsIm1hcCIsInYiLCJpIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWU7QUFBQTs7QUFBQSxNQUFiQyxRQUFhLFFBQWJBLFFBQWE7QUFDN0IsTUFBTUMsU0FBUyxHQUFHLENBQUMsUUFBRCxFQUFVLFFBQVYsRUFBbUIsUUFBbkIsRUFBNEIsUUFBNUIsRUFBcUMsUUFBckMsRUFBOEMsUUFBOUMsRUFBdUQsUUFBdkQsRUFBZ0UsUUFBaEUsRUFBeUUsUUFBekUsRUFBa0YsUUFBbEYsRUFBMkYsUUFBM0YsRUFBb0csUUFBcEcsRUFBNkcsUUFBN0csRUFBc0gsUUFBdEgsRUFBK0gsUUFBL0gsRUFBd0ksUUFBeEksRUFBaUosUUFBakosRUFBMEosUUFBMUosRUFBbUssUUFBbkssRUFBNEssUUFBNUssRUFBcUwsUUFBckwsQ0FBbEI7O0FBRDZCLHFCQUdWQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFHQSxLQUFLLENBQUNDLElBQVQ7QUFBQSxHQUFOLENBSEQ7QUFBQSxNQUd0QkMsUUFIc0IsZ0JBR3RCQSxRQUhzQjs7QUFJ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QjtBQUNsQnZCLFVBQVEsRUFBR3dCLGlEQUFTLENBQUNDO0FBREgsQ0FBdEI7QUFJZTFCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmY3N2QwMjMwMzNkYmJjMTQwOWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHt1c2VDYWxsYmFjayx1c2VTdGF0ZSx1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtSb3csQ29sfSBmcm9tICAnYW50ZCc7IFxyXG5pbXBvcnQgeyBSZXN1bHQsIEljb24sIFdoaXRlU3BhY2UgfSBmcm9tICdhbnRkLW1vYmlsZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7IFxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuXHJcbmNvbnN0IEFwcExheU91dCA9ICh7Y2hpbGRyZW59KSA9PntcclxuICAgIGNvbnN0IGR1bW15TGlzdCA9IFsn7Lm07YWM7L2U66asMDEnLCfsubTthYzsvZTrpqwwMicsJ+y5tO2FjOy9lOumrDAzJywn7Lm07YWM7L2U66asMDQnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1J107IFxyXG5cclxuICAgIGNvbnN0IHt1c2VySW5mb30gPSB1c2VTZWxlY3RvcihzdGF0ZT0+IHN0YXRlLmF1dGgpOyBcclxuICAgIGNvbnNvbGUubG9nKCdBcHBMYXlPdXQgdXNlckluZm89PT4nICx1c2VySW5mbyk7IFxyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZygndXNlckluZm89PT4nICwgdXNlckluZm8pOyBcclxuICAgIC8vICAgICBpZih1c2VySW5mbyl7XHJcbiAgICAvLyAgICAgIC8vICAgYWxlcnQoam9pbmVkKTsgXHJcbiAgICAvLyAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7IFxyXG4gICAgLy8gICAgIH1cclxuICAgICAgICBcclxuICAgIC8vIH0sW10pXHJcblxyXG4gICAgY29uc3QgW2lzQ2xpY2tlZCxzZXRJc0NsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIGNvbnN0IGlucHV0RWwgPSB1c2VSZWYobnVsbCk7IFxyXG4gICAgY29uc3QgY29sb3JGaWxsZWRCdG4gPSB1c2VDYWxsYmFjaygoKT0+e1xyXG5cclxuXHJcbiAgICAgICAgYWxlcnQodGVzdCk7IFxyXG5cclxuICAgIH0sW10pXHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgY2F0ZXJnb3JpTGlzdCA9ICgpID0+e1xyXG4gICAgICAgICAgc2V0SXNDbGlja2VkKCFpc0NsaWNrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlQ2F0ZXJnb3JpTGlzdCA9ICgpID0+e1xyXG4gICAgICAgIHNldElzQ2xpY2tlZChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9odHRwczovL3ZlbG9nLmlvL0BqYW5naHlvaW4vSm9ic2hvcHBlci1wcm9qZWN0LU5leHRKUyVFQyU5NyU5MCVFQyU4NCU5Qy1zdHlsZWQtY29tcG9uZW50cy0lRUMlODIlQUMlRUMlOUElQTktaHdqenM0MjN5d1xyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fT4gXHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdnVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCIgb25DbGljaz17Y2F0ZXJnb3JpTGlzdH0+66mU64m0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnLyd9ID48YT5Ib21lPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiPjxMaW5rIGhyZWY9eycvYWJvdXQnfSA+PGE+QWJvdXQ8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCI+PExpbmsgaHJlZj17Jy9jb3VudCd9ID48YT5Db3VudDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL2VtcCd9ID48YT5lbXA8L2E+PC9MaW5rPjwvbGk+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHshdXNlckluZm8gJiYgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCI+PExpbmsgaHJlZj17Jy9qb2luJ30gPjxhPu2ajOybkOqwgOyehTwvYT48L0xpbms+PC9saT4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHshdXNlckluZm8gJiYgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCI+PExpbmsgaHJlZj17Jy9sb2dpbid9ID48YT7roZzqt7jsnbg8L2E+PC9MaW5rPjwvbGk+ICB9XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvICYmICA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL2xvZ2luJ30gPjxhPu2ajOybkOygleuztDwvYT48L0xpbms+PC9saT4gfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVuYXZcIiBzdHlsZT17e3dpZHRoIDogaXNDbGlja2VkPyBcIjQwJVwiOlwiMFwifX0+XHJcbiAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlYnRuXCIgb25DbGljaz17Y2xvc2VDYXRlcmdvcmlMaXN0fT54PC9hPlxyXG4gICAgICAgICAgICAgICB7ZHVtbXlMaXN0Lm1hcCgodixpKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYWJvdXQnfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2Nsb3NlQ2F0ZXJnb3JpTGlzdH0gPnt2fTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+IFxyXG5cclxuXHJcbiAgICAgICAgKTsgXHJcblxyXG59XHJcblxyXG5BcHBMYXlPdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW4gOiBQcm9wVHlwZXMubm9kZSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5T3V0OyAiXSwic291cmNlUm9vdCI6IiJ9