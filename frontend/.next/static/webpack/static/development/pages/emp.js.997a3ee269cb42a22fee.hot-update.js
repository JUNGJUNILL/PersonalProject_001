webpackHotUpdate("static\\development\\pages\\emp.js",{

/***/ "./utilComponent/Pagenation.js":
/*!*************************************!*\
  !*** ./utilComponent/Pagenation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\utilComponent\\Pagenation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Pagenation = function Pagenation(_ref) {
  var pagenate = _ref.pagenate,
      dataLength = _ref.dataLength,
      postsPerPage = _ref.postsPerPage,
      nowPage = _ref.nowPage,
      groupPage = _ref.groupPage,
      groupPageArray = _ref.groupPageArray;
  var pageNumers = []; //마지막 페이지 처리 

  var isInVisible = false;

  if (dataLength === 0 || dataLength < postsPerPage) {
    isInVisible = true;
  }

  if (nowPage === 0) {
    //첫 로드시    
    for (var i = 0; i < groupPage; i++) {
      pageNumers.push(i);
    } //앞으로 그룹 이동

  } else if (nowPage % groupPage === 1 && nowPage !== 1) {
    console.log('앞으로 그룹 이동');
    pageNumers.length = 0;

    for (var _i = nowPage - 1; _i < nowPage - 1 + groupPage; _i++) {
      pageNumers.push(_i);
    } //뒤로 그룹 이동

  } else if (groupPageArray[0] === nowPage) {
    console.log('뒤로 그룹 이동');
    pageNumers.length = 0;

    for (var _i2 = 0; _i2 < groupPageArray.length; _i2++) {
      pageNumers.push(groupPageArray[_i2] - groupPage);
    }
  } else {
    console.log('번호 클릭');
    pageNumers.length = 0;

    for (var _i3 = 0; _i3 < groupPageArray.length; _i3++) {
      pageNumers.push(groupPageArray[_i3]);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("li", {
    style: {
      display: nowPage === 1 || nowPage === 0 ? "none" : ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 87
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage - 1, pageNumers);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 104
    }
  }, "\u25C0"))), pageNumers.map(function (v, i, array) {
    return __jsx("li", {
      key: v,
      style: {
        display: isInVisible === true && v >= nowPage ? "none" : ""
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 26
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: '#',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 30
      }
    }, __jsx("a", {
      onClick: function onClick() {
        return pagenate(v + 1, array);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 47
      }
    }, v + 1))));
  }), __jsx("li", {
    style: {
      display: isInVisible === true ? "none" : ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 73
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage + 1, pageNumers);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 90
    }
  }, "\u25B6"))))));
};

_c = Pagenation;
/* harmony default export */ __webpack_exports__["default"] = (Pagenation);

var _c;

$RefreshReg$(_c, "Pagenation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpc0luVmlzaWJsZSIsImkiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImRpc3BsYXkiLCJtYXAiLCJ2IiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF3RTtBQUFBLE1BQXRFQyxRQUFzRSxRQUF0RUEsUUFBc0U7QUFBQSxNQUE3REMsVUFBNkQsUUFBN0RBLFVBQTZEO0FBQUEsTUFBbERDLFlBQWtELFFBQWxEQSxZQUFrRDtBQUFBLE1BQXJDQyxPQUFxQyxRQUFyQ0EsT0FBcUM7QUFBQSxNQUE3QkMsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQUEsTUFBbkJDLGNBQW1CLFFBQW5CQSxjQUFtQjtBQUV2RixNQUFPQyxVQUFVLEdBQUUsRUFBbkIsQ0FGdUYsQ0FJdkY7O0FBQ0EsTUFBS0MsV0FBVyxHQUFHLEtBQW5COztBQUNBLE1BQUdOLFVBQVUsS0FBSyxDQUFmLElBQW9CQSxVQUFVLEdBQUdDLFlBQXBDLEVBQWlEO0FBQzdDSyxlQUFXLEdBQUcsSUFBZDtBQUNIOztBQUVELE1BQUdKLE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFBRTtBQUNULFNBQUksSUFBSUssQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDSixTQUFmLEVBQTBCSSxDQUFDLEVBQTNCLEVBQThCO0FBRTFCRixnQkFBVSxDQUFDRyxJQUFYLENBQWdCRCxDQUFoQjtBQUNILEtBSk0sQ0FNZjs7QUFDQyxHQVBELE1BT00sSUFBS0wsT0FBTyxHQUFHQyxTQUFWLEtBQXVCLENBQXpC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QUFyQixHQUE4QjtBQUF4QyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0QsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUI7QUFBRyxXQUFPLEVBQUU7QUFBQSxhQUFJUCxRQUFRLENBQUNHLE9BQU8sR0FBQyxDQUFULEVBQVdHLFVBQVgsQ0FBWjtBQUFBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFqQixDQUF4RCxDQVBKLENBREosQ0FEQSxDQURKO0FBZ0JILENBekREOztLQUFNUCxVO0FBMkRTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZW1wLmpzLjk5N2EzZWUyNjljYjQyYTIyZmVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUNhbGxiYWNrLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG51bWJlciB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBQYWdlbmF0aW9uID0gKHtwYWdlbmF0ZSxkYXRhTGVuZ3RoLHBvc3RzUGVyUGFnZSxub3dQYWdlLGdyb3VwUGFnZSxncm91cFBhZ2VBcnJheX0pID0+e1xyXG5cclxuICAgIGNvbnN0ICBwYWdlTnVtZXJzPSBbXTsgXHJcblxyXG4gICAgLy/rp4jsp4Drp4kg7Y6Y7J207KeAIOyymOumrCBcclxuICAgIGxldCAgaXNJblZpc2libGUgPSBmYWxzZTsgXHJcbiAgICBpZihkYXRhTGVuZ3RoID09PSAwIHx8IGRhdGFMZW5ndGggPCBwb3N0c1BlclBhZ2Upe1xyXG4gICAgICAgIGlzSW5WaXNpYmxlID0gdHJ1ZTsgXHJcbiAgICB9XHJcblxyXG4gICAgaWYobm93UGFnZT09PTApeyAvL+yyqyDroZzrk5zsi5wgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGdyb3VwUGFnZTsgaSsrKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgLy/slZ7snLzroZwg6re466O5IOydtOuPmVxyXG4gICAgfWVsc2UgaWYoKChub3dQYWdlICUgZ3JvdXBQYWdlID09PTEpKSAmJiAobm93UGFnZSAhPT0gMSkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7JWe7Jy866GcIOq3uOujuSDsnbTrj5knKVxyXG4gICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9bm93UGFnZS0xOyBpPChub3dQYWdlLTEpK2dyb3VwUGFnZTsgaSsrICl7XHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAvL+uSpOuhnCDqt7jro7kg7J2064+ZXHJcbiAgICB9ZWxzZSBpZigoZ3JvdXBQYWdlQXJyYXlbMF0gPT09IG5vd1BhZ2UpKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfrkqTroZwg6re466O5IOydtOuPmScpO1xyXG4gICAgICAgICAgICAgcGFnZU51bWVycy5sZW5ndGggPSAwOyBcclxuICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGdyb3VwUGFnZUFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChncm91cFBhZ2VBcnJheVtpXS1ncm91cFBhZ2UpOyBcclxuICAgICAgICAgICAgIH1cclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAgICBjb25zb2xlLmxvZygn67KI7Zi4IO2BtOumrScpOyBcclxuICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICBmb3IobGV0IGk9MDsgaTwgZ3JvdXBQYWdlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goZ3JvdXBQYWdlQXJyYXlbaV0pOyBcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PiAgXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpICBzdHlsZT17e2Rpc3BsYXk6IG5vd1BhZ2UgPT09IDEgfHwgbm93UGFnZSA9PT0gMCAgPyBcIm5vbmVcIiA6IFwiXCJ9fT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlLTEscGFnZU51bWVycyl9PuKXgDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIHtwYWdlTnVtZXJzLm1hcCgodixpLGFycmF5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Z9ICBzdHlsZT17e2Rpc3BsYXkgOiAoaXNJblZpc2libGU9PT10cnVlKSAmJiAodiA+PW5vd1BhZ2UpID8gXCJub25lXCIgOiBcIlwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKHYrMSxhcnJheSl9Pnt2KzF9PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e2Rpc3BsYXkgOmlzSW5WaXNpYmxlPT09dHJ1ZSA/IFwibm9uZVwiIDogXCJcIn19PjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKG5vd1BhZ2UrMSxwYWdlTnVtZXJzKX0+4pa2PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZW5hdGlvbjsgIl0sInNvdXJjZVJvb3QiOiIifQ==