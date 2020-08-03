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
      border: "3px"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpc0luVmlzaWJsZSIsImkiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImJvcmRlciIsImRpc3BsYXkiLCJtYXAiLCJ2IiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF3RTtBQUFBLE1BQXRFQyxRQUFzRSxRQUF0RUEsUUFBc0U7QUFBQSxNQUE3REMsVUFBNkQsUUFBN0RBLFVBQTZEO0FBQUEsTUFBbERDLFlBQWtELFFBQWxEQSxZQUFrRDtBQUFBLE1BQXJDQyxPQUFxQyxRQUFyQ0EsT0FBcUM7QUFBQSxNQUE3QkMsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQUEsTUFBbkJDLGNBQW1CLFFBQW5CQSxjQUFtQjtBQUV2RixNQUFPQyxVQUFVLEdBQUUsRUFBbkIsQ0FGdUYsQ0FJdkY7O0FBQ0EsTUFBS0MsV0FBVyxHQUFHLEtBQW5COztBQUNBLE1BQUdOLFVBQVUsS0FBSyxDQUFmLElBQW9CQSxVQUFVLEdBQUdDLFlBQXBDLEVBQWlEO0FBQzdDSyxlQUFXLEdBQUcsSUFBZDtBQUNIOztBQUVELE1BQUdKLE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFBRTtBQUNULFNBQUksSUFBSUssQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDSixTQUFmLEVBQTBCSSxDQUFDLEVBQTNCLEVBQThCO0FBRTFCRixnQkFBVSxDQUFDRyxJQUFYLENBQWdCRCxDQUFoQjtBQUNILEtBSk0sQ0FNZjs7QUFDQyxHQVBELE1BT00sSUFBS0wsT0FBTyxHQUFHQyxTQUFWLEtB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlGRCxDQUFDLEdBQUMsQ0FBbkYsQ0FBakIsQ0FBSixDQURMLENBRFk7QUFBQSxHQUFmLENBRkwsRUFPSTtBQUFJLFNBQUssRUFBRTtBQUFDRixhQUFPLEVBQUVQLFdBQVcsS0FBRyxJQUFkLEdBQXFCLE1BQXJCLEdBQThCO0FBQXhDLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3RCxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQjtBQUFHLFdBQU8sRUFBRTtBQUFBLGFBQUlQLFFBQVEsQ0FBQ0csT0FBTyxHQUFDLENBQVQsRUFBV0csVUFBWCxDQUFaO0FBQUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpCLENBQXhELENBUEosQ0FESixDQURBLENBREo7QUFpQkgsQ0ExREQ7O0tBQU1QLFU7QUE0RFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxlbXAuanMuODU2YmViMjQxNjQzMzY3ODk5ZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlQ2FsbGJhY2ssdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbnVtYmVyIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFBhZ2VuYXRpb24gPSAoe3BhZ2VuYXRlLGRhdGFMZW5ndGgscG9zdHNQZXJQYWdlLG5vd1BhZ2UsZ3JvdXBQYWdlLGdyb3VwUGFnZUFycmF5fSkgPT57XHJcblxyXG4gICAgY29uc3QgIHBhZ2VOdW1lcnM9IFtdOyBcclxuXHJcbiAgICAvL+uniOyngOuniSDtjpjsnbTsp4Ag7LKY66asIFxyXG4gICAgbGV0ICBpc0luVmlzaWJsZSA9IGZhbHNlOyBcclxuICAgIGlmKGRhdGFMZW5ndGggPT09IDAgfHwgZGF0YUxlbmd0aCA8IHBvc3RzUGVyUGFnZSl7XHJcbiAgICAgICAgaXNJblZpc2libGUgPSB0cnVlOyBcclxuICAgIH1cclxuXHJcbiAgICBpZihub3dQYWdlPT09MCl7IC8v7LKrIOuhnOuTnOyLnCAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Z3JvdXBQYWdlOyBpKyspe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAvL+yVnuycvOuhnCDqt7jro7kg7J2064+ZXHJcbiAgICB9ZWxzZSBpZigoKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT09MSkpICYmIChub3dQYWdlICE9PSAxKSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfslZ7snLzroZwg6re466O5IOydtOuPmScpXHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT1ub3dQYWdlLTE7IGk8KG5vd1BhZ2UtMSkrZ3JvdXBQYWdlOyBpKysgKXtcclxuICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIC8v65Kk66GcIOq3uOujuSDsnbTrj5lcclxuICAgIH1lbHNlIGlmKChncm91cFBhZ2VBcnJheVswXSA9PT0gbm93UGFnZSkpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coJ+uSpOuhnCDqt7jro7kg7J2064+ZJyk7XHJcbiAgICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Z3JvdXBQYWdlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGdyb3VwUGFnZUFycmF5W2ldLWdyb3VwUGFnZSk7IFxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCfrsojtmLgg7YG066atJyk7IFxyXG4gICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgIGZvcihsZXQgaT0wOyBpPCBncm91cFBhZ2VBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChncm91cFBhZ2VBcnJheVtpXSk7IFxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyOlwiM3B4XCJ9fT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxsaSAgc3R5bGU9e3tkaXNwbGF5OiBub3dQYWdlID09PSAxIHx8IG5vd1BhZ2UgPT09IDAgID8gXCJub25lXCIgOiBcIlwifX0+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUobm93UGFnZS0xLHBhZ2VOdW1lcnMpfT7il4A8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICB7cGFnZU51bWVycy5tYXAoKHYsaSxhcnJheSk9PihcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt2fSAgIHN0eWxlPXt7ZGlzcGxheSA6IChpc0luVmlzaWJsZT09PXRydWUpICYmICh2ID49bm93UGFnZSkgPyBcIm5vbmVcIiA6IFwiXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17JyMnfT48YSBjbGFzc05hbWU9e25vd1BhZ2UgPT09IHYrMT8gXCJhY3RpdmVcIiA6IFwiXCJ9IG9uQ2xpY2s9eygpPT5wYWdlbmF0ZSh2KzEsYXJyYXkpfT57disxfTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3tkaXNwbGF5IDppc0luVmlzaWJsZT09PXRydWUgPyBcIm5vbmVcIiA6IFwiXCJ9fT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlKzEscGFnZU51bWVycyl9PuKWtjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD4gICBcclxuICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlbmF0aW9uOyAiXSwic291cmNlUm9vdCI6IiJ9