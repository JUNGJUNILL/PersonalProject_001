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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      alignItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "pagination",
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
      className: nowPage === v + 1 ? "active" : "",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpc0luVmlzaWJsZSIsImkiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImFsaWduSXRlbXMiLCJkaXNwbGF5IiwibWFwIiwidiIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBd0U7QUFBQSxNQUF0RUMsUUFBc0UsUUFBdEVBLFFBQXNFO0FBQUEsTUFBN0RDLFVBQTZELFFBQTdEQSxVQUE2RDtBQUFBLE1BQWxEQyxZQUFrRCxRQUFsREEsWUFBa0Q7QUFBQSxNQUFyQ0MsT0FBcUMsUUFBckNBLE9BQXFDO0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLE1BQW5CQyxjQUFtQixRQUFuQkEsY0FBbUI7QUFFdkYsTUFBT0MsVUFBVSxHQUFFLEVBQW5CLENBRnVGLENBSXZGOztBQUNBLE1BQUtDLFdBQVcsR0FBRyxLQUFuQjs7QUFDQSxNQUFHTixVQUFVLEtBQUssQ0FBZixJQUFvQkEsVUFBVSxHQUFHQyxZQUFwQyxFQUFpRDtBQUM3Q0ssZUFBVyxHQUFHLElBQWQ7QUFDSDs7QUFFRCxNQUFHSixPQUFPLEtBQUcsQ0FBYixFQUFlO0FBQUU7QUFDVCxTQUFJLElBQUlLLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0osU0FBZixFQUEwQkksQ0FBQyxFQUEzQixFQUE4QjtBQUUxQkYsZ0JBQVUsQ0FBQ0csSUFBWCxDQUFnQkQsQ0FBaEI7QUFDSCxLQUpNLENBTWY7O0FBQ0MsR0FQRCxNQU9NLElBQUtMLE9BQU8sR0FBR0MsU0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUZELENBQUMsR0FBQyxDQUFuRixDQUFqQixDQUFKLENBREwsQ0FEWTtBQUFBLEdBQWYsQ0FGTCxFQU9JO0FBQUksU0FBSyxFQUFFO0FBQUNGLGFBQU8sRUFBRVAsV0FBVyxLQUFHLElBQWQsR0FBcUIsTUFBckIsR0FBOEI7QUFBeEMsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdELE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCO0FBQUcsV0FBTyxFQUFFO0FBQUEsYUFBSVAsUUFBUSxDQUFDRyxPQUFPLEdBQUMsQ0FBVCxFQUFXRyxVQUFYLENBQVo7QUFBQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBakIsQ0FBeEQsQ0FQSixDQURKLENBREEsQ0FESjtBQWlCSCxDQTFERDs7S0FBTVAsVTtBQTREU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVtcC5qcy5hMTA3YjFiNTJjOGY2MDIxNjgzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VDYWxsYmFjayx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgUGFnZW5hdGlvbiA9ICh7cGFnZW5hdGUsZGF0YUxlbmd0aCxwb3N0c1BlclBhZ2Usbm93UGFnZSxncm91cFBhZ2UsZ3JvdXBQYWdlQXJyYXl9KSA9PntcclxuXHJcbiAgICBjb25zdCAgcGFnZU51bWVycz0gW107IFxyXG5cclxuICAgIC8v66eI7KeA66eJIO2OmOydtOyngCDsspjrpqwgXHJcbiAgICBsZXQgIGlzSW5WaXNpYmxlID0gZmFsc2U7IFxyXG4gICAgaWYoZGF0YUxlbmd0aCA9PT0gMCB8fCBkYXRhTGVuZ3RoIDwgcG9zdHNQZXJQYWdlKXtcclxuICAgICAgICBpc0luVmlzaWJsZSA9IHRydWU7IFxyXG4gICAgfVxyXG5cclxuICAgIGlmKG5vd1BhZ2U9PT0wKXsgLy/ssqsg66Gc65Oc7IucICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxncm91cFBhZ2U7IGkrKyl7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgIC8v7JWe7Jy866GcIOq3uOujuSDsnbTrj5lcclxuICAgIH1lbHNlIGlmKCgobm93UGFnZSAlIGdyb3VwUGFnZSA9PT0xKSkgJiYgKG5vd1BhZ2UgIT09IDEpKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+yVnuycvOuhnCDqt7jro7kg7J2064+ZJylcclxuICAgICAgICAgICAgcGFnZU51bWVycy5sZW5ndGggPSAwOyBcclxuICAgICAgICAgICAgZm9yKGxldCBpPW5vd1BhZ2UtMTsgaTwobm93UGFnZS0xKStncm91cFBhZ2U7IGkrKyApe1xyXG4gICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgLy/rkqTroZwg6re466O5IOydtOuPmVxyXG4gICAgfWVsc2UgaWYoKGdyb3VwUGFnZUFycmF5WzBdID09PSBub3dQYWdlKSl7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygn65Kk66GcIOq3uOujuSDsnbTrj5knKTtcclxuICAgICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxncm91cFBhZ2VBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goZ3JvdXBQYWdlQXJyYXlbaV0tZ3JvdXBQYWdlKTsgXHJcbiAgICAgICAgICAgICB9XHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coJ+uyiO2YuCDtgbTrpq0nKTsgXHJcbiAgICAgICAgICAgcGFnZU51bWVycy5sZW5ndGg9MDsgXHJcbiAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8IGdyb3VwUGFnZUFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGdyb3VwUGFnZUFycmF5W2ldKTsgXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD4gIFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3thbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxsaSAgc3R5bGU9e3tkaXNwbGF5OiBub3dQYWdlID09PSAxIHx8IG5vd1BhZ2UgPT09IDAgID8gXCJub25lXCIgOiBcIlwifX0+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUobm93UGFnZS0xLHBhZ2VOdW1lcnMpfT7il4A8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICB7cGFnZU51bWVycy5tYXAoKHYsaSxhcnJheSk9PihcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt2fSAgIHN0eWxlPXt7ZGlzcGxheSA6IChpc0luVmlzaWJsZT09PXRydWUpICYmICh2ID49bm93UGFnZSkgPyBcIm5vbmVcIiA6IFwiXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17JyMnfT48YSBjbGFzc05hbWU9e25vd1BhZ2UgPT09IHYrMT8gXCJhY3RpdmVcIiA6IFwiXCJ9IG9uQ2xpY2s9eygpPT5wYWdlbmF0ZSh2KzEsYXJyYXkpfT57disxfTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3tkaXNwbGF5IDppc0luVmlzaWJsZT09PXRydWUgPyBcIm5vbmVcIiA6IFwiXCJ9fT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlKzEscGFnZU51bWVycyl9PuKWtjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD4gICBcclxuICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlbmF0aW9uOyAiXSwic291cmNlUm9vdCI6IiJ9