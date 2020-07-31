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
    pageNumers.length = 0;

    for (var _i = nowPage - 1; _i < nowPage - 1 + groupPage; _i++) {
      pageNumers.push(_i);
    } //뒤로 그룹 이동

  } else if (groupPageArray[0] === nowPage) {
    pageNumers.length = 0;

    for (var _i2 = 0; _i2 < groupPageArray.length; _i2++) {
      pageNumers.push(groupPageArray[_i2] - groupPage);
    }
  } else {
    pageNumers.length = 0;

    for (var _i3 = 0; _i3 < groupPageArray.length; _i3++) {
      pageNumers.push(groupPageArray[_i3]);
    }
  } //마지막 페이지 처리


  if (dataLength === 0 || dataLength < postsPerPage) {
    var groupPageArrayFirstValue = groupPageArray[0];
  }

  console.log('nowPage==>', nowPage, 'groupPageArray[0]', groupPageArray[0]); // for(let i=0; i<groupPage; i++){
  //     pageNumers.push(i); 
  //     if(((nowPage % groupPage ===1)) && (nowPage !== 1)){
  //         pageNumers.length = 0; 
  //         for(let i=nowPage-1; i<(nowPage-1)+groupPage; i++ ){
  //         pageNumers.push(i); 
  //         }
  //     }
  // }
  // if((nowPage % groupPage ===1) && (nowPage !== 1)){
  //     pageNumers.length = 0; 
  //     for(let i=nowPage-1; i<(nowPage-1)+groupPage; i++ ){
  //     pageNumers.push(i); 
  //     }
  // }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, nowPage, __jsx("li", {
    style: {
      display: nowPage === 1 || nowPage === 0 ? "none" : ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 86
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage - 1, pageNumers, 'minus');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 103
    }
  }, "\u25C0"))), pageNumers.map(function (v, i, array) {
    return __jsx("li", {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 26
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: '#',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 30
      }
    }, __jsx("a", {
      onClick: function onClick() {
        return pagenate(v + 1, array);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 47
      }
    }, v + 1))));
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage + 1, pageNumers);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 32
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpIiwicHVzaCIsImxlbmd0aCIsImdyb3VwUGFnZUFycmF5Rmlyc3RWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5IiwibWFwIiwidiIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBd0U7QUFBQSxNQUF0RUMsUUFBc0UsUUFBdEVBLFFBQXNFO0FBQUEsTUFBN0RDLFVBQTZELFFBQTdEQSxVQUE2RDtBQUFBLE1BQWxEQyxZQUFrRCxRQUFsREEsWUFBa0Q7QUFBQSxNQUFyQ0MsT0FBcUMsUUFBckNBLE9BQXFDO0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLE1BQW5CQyxjQUFtQixRQUFuQkEsY0FBbUI7QUFFdkYsTUFBT0MsVUFBVSxHQUFFLEVBQW5COztBQUVBLE1BQUdILE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFBRTtBQUNULFNBQUksSUFBSUksQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDSCxTQUFmLEVBQTBCRyxDQUFDLEVBQTNCLEVBQThCO0FBRTFCRCxnQkFBVSxDQUFDRSxJQUFYLENBQWdCRCxDQUFoQjtBQUNILEtBSk0sQ0FNZjs7QUFDQyxHQVBELE1BT00sSUFBS0osT0FBTyxHQUFHQyxTQUFWLEtBQXVCLENBQXpCLElBQWlDRCxPQUFPLEtBQUssQ0FBaEQsRUFBb0Q7QUFFbERHLGNBQVUsQ0FBQ0csTUFBWCxHQUFvQixDQUFwQjs7QUFDQSxTQUFJLElBQUlGLEVBQUMsR0FBQ0osT0FBTyxHQUFDLENBQWxCLEVB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Z0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCO0FBQUcsV0FBTyxFQUFFO0FBQUEsYUFBSWYsUUFBUSxDQUFDRyxPQUFPLEdBQUMsQ0FBVCxFQUFXRyxVQUFYLENBQVo7QUFBQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBakIsQ0FBSixDQWJFLENBREosQ0FEQSxDQURKO0FBc0JILENBdEZEOztLQUFNUCxVO0FBd0ZTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZW1wLmpzLjBmNDkxOTViOTk1YmI0ZDQzOWMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUNhbGxiYWNrLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG51bWJlciB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBQYWdlbmF0aW9uID0gKHtwYWdlbmF0ZSxkYXRhTGVuZ3RoLHBvc3RzUGVyUGFnZSxub3dQYWdlLGdyb3VwUGFnZSxncm91cFBhZ2VBcnJheX0pID0+e1xyXG5cclxuICAgIGNvbnN0ICBwYWdlTnVtZXJzPSBbXTsgXHJcblxyXG4gICAgaWYobm93UGFnZT09PTApeyAvL+yyqyDroZzrk5zsi5wgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGdyb3VwUGFnZTsgaSsrKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgLy/slZ7snLzroZwg6re466O5IOydtOuPmVxyXG4gICAgfWVsc2UgaWYoKChub3dQYWdlICUgZ3JvdXBQYWdlID09PTEpKSAmJiAobm93UGFnZSAhPT0gMSkgKXtcclxuXHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT1ub3dQYWdlLTE7IGk8KG5vd1BhZ2UtMSkrZ3JvdXBQYWdlOyBpKysgKXtcclxuICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIC8v65Kk66GcIOq3uOujuSDsnbTrj5lcclxuICAgIH1lbHNlIGlmKGdyb3VwUGFnZUFycmF5WzBdID09PSBub3dQYWdlKXtcclxuXHJcbiAgICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Z3JvdXBQYWdlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGdyb3VwUGFnZUFycmF5W2ldLWdyb3VwUGFnZSk7IFxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICBmb3IobGV0IGk9MDsgaTwgZ3JvdXBQYWdlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goZ3JvdXBQYWdlQXJyYXlbaV0pOyBcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v66eI7KeA66eJIO2OmOydtOyngCDsspjrpqxcclxuICAgIGlmKGRhdGFMZW5ndGggPT09IDAgfHwgZGF0YUxlbmd0aCA8IHBvc3RzUGVyUGFnZSl7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBQYWdlQXJyYXlGaXJzdFZhbHVlID0gZ3JvdXBQYWdlQXJyYXlbMF07IFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ25vd1BhZ2U9PT4nLG5vd1BhZ2UsICdncm91cFBhZ2VBcnJheVswXScsIGdyb3VwUGFnZUFycmF5WzBdICk7IFxyXG5cclxuICAgICAgICAvLyBmb3IobGV0IGk9MDsgaTxncm91cFBhZ2U7IGkrKyl7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcblxyXG4gICAgICAgIC8vICAgICBpZigoKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT09MSkpICYmIChub3dQYWdlICE9PSAxKSl7XHJcbiAgICAgICAgLy8gICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgIC8vICAgICAgICAgZm9yKGxldCBpPW5vd1BhZ2UtMTsgaTwobm93UGFnZS0xKStncm91cFBhZ2U7IGkrKyApe1xyXG4gICAgICAgIC8vICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgXHJcblxyXG4gICAgICAgIC8vIGlmKChub3dQYWdlICUgZ3JvdXBQYWdlID09PTEpICYmIChub3dQYWdlICE9PSAxKSl7XHJcbiAgICAgICAgLy8gICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgLy8gICAgIGZvcihsZXQgaT1ub3dQYWdlLTE7IGk8KG5vd1BhZ2UtMSkrZ3JvdXBQYWdlOyBpKysgKXtcclxuICAgICAgICAvLyAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7bm93UGFnZX1cclxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e2Rpc3BsYXk6IG5vd1BhZ2UgPT09IDEgfHwgbm93UGFnZSA9PT0gMCAgPyBcIm5vbmVcIiA6IFwiXCJ9fT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlLTEscGFnZU51bWVycywnbWludXMnKX0+4peAPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7cGFnZU51bWVycy5tYXAoKHYsaSxhcnJheSk9PihcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZSh2KzEsYXJyYXkpfT57disxfTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUobm93UGFnZSsxLHBhZ2VOdW1lcnMpfT7ilrY8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlbmF0aW9uOyAiXSwic291cmNlUm9vdCI6IiJ9