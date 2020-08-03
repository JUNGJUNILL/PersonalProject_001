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
  var pageNumers = [];

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
    } //마지막 페이지 처리 

  } else if (dataLength === 0 || dataLength < postsPerPage) {
    console.log('마지막 페이지 처리');
    var index; //console.log("마지막 페이지",groupPageArrayFirstValue,":", pageNumers); 

    pageNumers.map(function (v, i) {
      if (v === nowPage) {
        index = i;
      }
    });
    pageNumers.length = 0;
    pageNumers.slice(0, index); //번호클릭
  } else {
    console.log('번호 클릭');
    pageNumers.length = 0;

    for (var _i3 = 0; _i3 < groupPageArray.length; _i3++) {
      pageNumers.push(groupPageArray[_i3]);
    }
  } //마지막 페이지 처리
  // if(dataLength === 0 || dataLength < postsPerPage){
  //     const groupPageArrayFirstValue = groupPageArray[0]; 
  // }


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, nowPage, __jsx("li", {
    style: {
      display: nowPage === 1 || nowPage === 0 ? "none" : ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 86
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage - 1, pageNumers, 'minus');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 103
    }
  }, "\u25C0"))), pageNumers.map(function (v, i, array) {
    return __jsx("li", {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 26
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: '#',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 30
      }
    }, __jsx("a", {
      onClick: function onClick() {
        return pagenate(v + 1, array);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 47
      }
    }, v + 1))));
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage + 1, pageNumers);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 34
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJpbmRleCIsIm1hcCIsInYiLCJzbGljZSIsImRpc3BsYXkiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXdFO0FBQUEsTUFBdEVDLFFBQXNFLFFBQXRFQSxRQUFzRTtBQUFBLE1BQTdEQyxVQUE2RCxRQUE3REEsVUFBNkQ7QUFBQSxNQUFsREMsWUFBa0QsUUFBbERBLFlBQWtEO0FBQUEsTUFBckNDLE9BQXFDLFFBQXJDQSxPQUFxQztBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFBQSxNQUFuQkMsY0FBbUIsUUFBbkJBLGNBQW1CO0FBRXZGLE1BQU9DLFVBQVUsR0FBRSxFQUFuQjs7QUFFQSxNQUFHSCxPQUFPLEtBQUcsQ0FBYixFQUFlO0FBQUU7QUFDVCxTQUFJLElBQUlJLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0gsU0FBZixFQUEwQkcsQ0FBQyxFQUEzQixFQUE4QjtBQUUxQkQsZ0JBQVUsQ0FBQ0UsSUFBWCxDQUFnQkQsQ0FBaEI7QUFDSCxLQUpNLENBTWY7O0FBQ0MsR0FQRCxNQU9NLElBQUtKLE9BQU8sR0FBR0MsU0FBVixLQUF1QixDQUF6QixJQUFpQ0QsT0FBTyxLQUFLLENBQWhELEVBQW9EO0FBQ2xETSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FKLGNBQVUsQ0FBQ0ssTUFBWCxHQUFvQixDQUFwQjs7QUFDQSxTQUFJLElBQUlKLEVBQUMsR0FB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R0FBQyxDQUFILEVBQUtHLEtBQUwsQ0FBWjtBQUFBLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFzQ0gsQ0FBQyxHQUFDLENBQXhDLENBQWpCLENBQUosQ0FETCxDQURZO0FBQUEsR0FBZixDQUhMLEVBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCO0FBQUcsV0FBTyxFQUFFO0FBQUEsYUFBSWQsUUFBUSxDQUFDRyxPQUFPLEdBQUMsQ0FBVCxFQUFXRyxVQUFYLENBQVo7QUFBQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBakIsQ0FBSixDQVJBLENBREosQ0FEQSxDQURKO0FBaUJILENBekVEOztLQUFNUCxVO0FBMkVTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZW1wLmpzLjA5ZWI3NWU1OTliMTI1MjA0YjdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUNhbGxiYWNrLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG51bWJlciB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBQYWdlbmF0aW9uID0gKHtwYWdlbmF0ZSxkYXRhTGVuZ3RoLHBvc3RzUGVyUGFnZSxub3dQYWdlLGdyb3VwUGFnZSxncm91cFBhZ2VBcnJheX0pID0+e1xyXG5cclxuICAgIGNvbnN0ICBwYWdlTnVtZXJzPSBbXTsgXHJcblxyXG4gICAgaWYobm93UGFnZT09PTApeyAvL+yyqyDroZzrk5zsi5wgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGdyb3VwUGFnZTsgaSsrKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgLy/slZ7snLzroZwg6re466O5IOydtOuPmVxyXG4gICAgfWVsc2UgaWYoKChub3dQYWdlICUgZ3JvdXBQYWdlID09PTEpKSAmJiAobm93UGFnZSAhPT0gMSkgKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+yVnuycvOuhnCDqt7jro7kg7J2064+ZJylcclxuICAgICAgICAgICAgcGFnZU51bWVycy5sZW5ndGggPSAwOyBcclxuICAgICAgICAgICAgZm9yKGxldCBpPW5vd1BhZ2UtMTsgaTwobm93UGFnZS0xKStncm91cFBhZ2U7IGkrKyApe1xyXG4gICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgLy/rkqTroZwg6re466O5IOydtOuPmVxyXG4gICAgfWVsc2UgaWYoZ3JvdXBQYWdlQXJyYXlbMF0gPT09IG5vd1BhZ2Upe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coJ+uSpOuhnCDqt7jro7kg7J2064+ZJylcclxuICAgICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxncm91cFBhZ2VBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goZ3JvdXBQYWdlQXJyYXlbaV0tZ3JvdXBQYWdlKTsgXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAvL+uniOyngOuniSDtjpjsnbTsp4Ag7LKY66asIFxyXG4gICAgfWVsc2UgaWYoZGF0YUxlbmd0aCA9PT0gMCB8fCBkYXRhTGVuZ3RoIDwgcG9zdHNQZXJQYWdlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn66eI7KeA66eJIO2OmOydtOyngCDsspjrpqwnKTsgXHJcbiAgICAgICAgbGV0IGluZGV4OyBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwi66eI7KeA66eJIO2OmOydtOyngFwiLGdyb3VwUGFnZUFycmF5Rmlyc3RWYWx1ZSxcIjpcIiwgcGFnZU51bWVycyk7IFxyXG4gICAgICAgIHBhZ2VOdW1lcnMubWFwKCh2LGkpPT57XHJcbiAgICAgICAgICAgIGlmKHYgPT09IG5vd1BhZ2Upe1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgcGFnZU51bWVycy5zbGljZSgwLGluZGV4KTsgXHJcblxyXG4gICAgLy/rsojtmLjtgbTrpq1cclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn67KI7Zi4IO2BtOumrScpOyBcclxuICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICBmb3IobGV0IGk9MDsgaTwgZ3JvdXBQYWdlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goZ3JvdXBQYWdlQXJyYXlbaV0pOyBcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v66eI7KeA66eJIO2OmOydtOyngCDsspjrpqxcclxuICAgIC8vIGlmKGRhdGFMZW5ndGggPT09IDAgfHwgZGF0YUxlbmd0aCA8IHBvc3RzUGVyUGFnZSl7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgY29uc3QgZ3JvdXBQYWdlQXJyYXlGaXJzdFZhbHVlID0gZ3JvdXBQYWdlQXJyYXlbMF07IFxyXG4gICBcclxuICAgIFxyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PiAgXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge25vd1BhZ2V9XHJcbiAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3tkaXNwbGF5OiBub3dQYWdlID09PSAxIHx8IG5vd1BhZ2UgPT09IDAgID8gXCJub25lXCIgOiBcIlwifX0+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUobm93UGFnZS0xLHBhZ2VOdW1lcnMsJ21pbnVzJyl9PuKXgDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIHtwYWdlTnVtZXJzLm1hcCgodixpLGFycmF5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Z9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKHYrMSxhcnJheSl9Pnt2KzF9PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKG5vd1BhZ2UrMSxwYWdlTnVtZXJzKX0+4pa2PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZW5hdGlvbjsgIl0sInNvdXJjZVJvb3QiOiIifQ==