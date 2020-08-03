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
      groupPageArray = _ref.groupPageArray,
      valus = _ref.valus;
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

  } else if (nowPage % groupPage === 1 && nowPage !== 1 && valus === 'forward') {
    console.log('앞으로 그룹 이동');
    pageNumers.length = 0;

    for (var _i = nowPage - 1; _i < nowPage - 1 + groupPage; _i++) {
      pageNumers.push(_i);
    } //뒤로 그룹 이동

  } else if (groupPageArray[0] === nowPage && valus === 'backward') {
    console.log('뒤로 그룹 이동', groupPageArray[0], nowPage);
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
  }, nowPage, __jsx("li", {
    style: {
      display: nowPage === 1 || nowPage === 0 ? "none" : ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 86
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage - 1, pageNumers, 'backward');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 103
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
        lineNumber: 53,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 26
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: '#',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 30
      }
    }, __jsx("a", {
      onClick: function onClick() {
        return pagenate(v + 1, array, 'number');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
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
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 73
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage + 1, pageNumers, 'forward');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInZhbHVzIiwicGFnZU51bWVycyIsImlzSW5WaXNpYmxlIiwiaSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZGlzcGxheSIsIm1hcCIsInYiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQThFO0FBQUEsTUFBNUVDLFFBQTRFLFFBQTVFQSxRQUE0RTtBQUFBLE1BQW5FQyxVQUFtRSxRQUFuRUEsVUFBbUU7QUFBQSxNQUF4REMsWUFBd0QsUUFBeERBLFlBQXdEO0FBQUEsTUFBM0NDLE9BQTJDLFFBQTNDQSxPQUEyQztBQUFBLE1BQW5DQyxTQUFtQyxRQUFuQ0EsU0FBbUM7QUFBQSxNQUF6QkMsY0FBeUIsUUFBekJBLGNBQXlCO0FBQUEsTUFBVkMsS0FBVSxRQUFWQSxLQUFVO0FBRTdGLE1BQU9DLFVBQVUsR0FBRSxFQUFuQixDQUY2RixDQUk3Rjs7QUFDQSxNQUFLQyxXQUFXLEdBQUcsS0FBbkI7O0FBQ0EsTUFBR1AsVUFBVSxLQUFLLENBQWYsSUFBb0JBLFVBQVUsR0FBR0MsWUFBcEMsRUFBaUQ7QUFDN0NNLGVBQVcsR0FBRyxJQUFkO0FBQ0g7O0FBRUQsTUFBR0wsT0FBTyxLQUFHLENBQWIsRUFBZTtBQUFFO0FBQ1QsU0FBSSxJQUFJTSxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNMLFNBQWYsRUFBMEJLLENBQUMsRUFBM0IsRUFBOEI7QUFFMUJGLGdCQUFVLENBQUNHLElBQVgsQ0FBZ0JELENBQWhCO0FBQ0gsS0FKTSxDQU1mOztBQUNDLEdBUEQsTUFP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QVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQ0QsQ0FBQyxHQUFDLENBQWpELENBQWpCLENBQUosQ0FETCxDQURZO0FBQUEsR0FBZixDQUhMLEVBUUk7QUFBSSxTQUFLLEVBQUU7QUFBQ0YsYUFBTyxFQUFFTixXQUFXLEtBQUcsSUFBZCxHQUFxQixNQUFyQixHQUE4QjtBQUF4QyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0QsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUI7QUFBRyxXQUFPLEVBQUU7QUFBQSxhQUFJUixRQUFRLENBQUNHLE9BQU8sR0FBQyxDQUFULEVBQVdJLFVBQVgsRUFBc0IsU0FBdEIsQ0FBWjtBQUFBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFqQixDQUF4RCxDQVJKLENBREosQ0FEQSxDQURKO0FBaUJILENBMUREOztLQUFNUixVO0FBNERTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZW1wLmpzLjJkMWFiYTk4NzBkMmJjZGZkZDQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUNhbGxiYWNrLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG51bWJlciB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBQYWdlbmF0aW9uID0gKHtwYWdlbmF0ZSxkYXRhTGVuZ3RoLHBvc3RzUGVyUGFnZSxub3dQYWdlLGdyb3VwUGFnZSxncm91cFBhZ2VBcnJheSx2YWx1c30pID0+e1xyXG5cclxuICAgIGNvbnN0ICBwYWdlTnVtZXJzPSBbXTsgXHJcblxyXG4gICAgLy/rp4jsp4Drp4kg7Y6Y7J207KeAIOyymOumrCBcclxuICAgIGxldCAgaXNJblZpc2libGUgPSBmYWxzZTsgXHJcbiAgICBpZihkYXRhTGVuZ3RoID09PSAwIHx8IGRhdGFMZW5ndGggPCBwb3N0c1BlclBhZ2Upe1xyXG4gICAgICAgIGlzSW5WaXNpYmxlID0gdHJ1ZTsgXHJcbiAgICB9XHJcblxyXG4gICAgaWYobm93UGFnZT09PTApeyAvL+yyqyDroZzrk5zsi5wgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGdyb3VwUGFnZTsgaSsrKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgLy/slZ7snLzroZwg6re466O5IOydtOuPmVxyXG4gICAgfWVsc2UgaWYoKChub3dQYWdlICUgZ3JvdXBQYWdlID09PTEpKSAmJiAobm93UGFnZSAhPT0gMSkgJiYgKHZhbHVzPT09J2ZvcndhcmQnKSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfslZ7snLzroZwg6re466O5IOydtOuPmScpXHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT1ub3dQYWdlLTE7IGk8KG5vd1BhZ2UtMSkrZ3JvdXBQYWdlOyBpKysgKXtcclxuICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIC8v65Kk66GcIOq3uOujuSDsnbTrj5lcclxuICAgIH1lbHNlIGlmKChncm91cFBhZ2VBcnJheVswXSA9PT0gbm93UGFnZSkgJiYgKHZhbHVzPT09J2JhY2t3YXJkJykgKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfrkqTroZwg6re466O5IOydtOuPmScsZ3JvdXBQYWdlQXJyYXlbMF0sbm93UGFnZSk7XHJcbiAgICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Z3JvdXBQYWdlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGdyb3VwUGFnZUFycmF5W2ldLWdyb3VwUGFnZSk7IFxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCfrsojtmLgg7YG066atJyk7IFxyXG4gICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgIGZvcihsZXQgaT0wOyBpPCBncm91cFBhZ2VBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChncm91cFBhZ2VBcnJheVtpXSk7IFxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7bm93UGFnZX1cclxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e2Rpc3BsYXk6IG5vd1BhZ2UgPT09IDEgfHwgbm93UGFnZSA9PT0gMCAgPyBcIm5vbmVcIiA6IFwiXCJ9fT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlLTEscGFnZU51bWVycywnYmFja3dhcmQnKX0+4peAPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAge3BhZ2VOdW1lcnMubWFwKCh2LGksYXJyYXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dn0gc3R5bGU9e3tkaXNwbGF5IDogKGlzSW5WaXNpYmxlPT09dHJ1ZSkgJiYgKHYgPj1ub3dQYWdlKSA/IFwibm9uZVwiIDogXCJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZSh2KzEsYXJyYXksJ251bWJlcicpfT57disxfTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3tkaXNwbGF5IDppc0luVmlzaWJsZT09PXRydWUgPyBcIm5vbmVcIiA6IFwiXCJ9fT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlKzEscGFnZU51bWVycywnZm9yd2FyZCcpfT7ilrY8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlbmF0aW9uOyAiXSwic291cmNlUm9vdCI6IiJ9