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
    }
  } else if (nowPage % groupPage === 1) {
    pageNumers.length = 0;

    for (var _i = nowPage - 1; _i < nowPage - 1 + groupPage; _i++) {
      pageNumers.push(_i);
    }
  } else {
    pageNumers.length = 0;

    for (var _i2 = 0; _i2 < groupPageArray.length; _i2++) {
      pageNumers.push(groupPageArray[_i2]);
    }
  }

  if (dataLength === 0 || dataLength < postsPerPage) {
    var groupPageArrayFirstValue = groupPageArray[0];
  }

  console.log('pageNumers===>', pageNumers); // for(let i=0; i<groupPage; i++){
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
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, nowPage, __jsx("li", {
    style: {
      display: nowPage === 1 || nowPage === 0 ? "none" : ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 86
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage - 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 103
    }
  }, "\u25C0"))), pageNumers.map(function (v, i, array) {
    return __jsx("li", {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 26
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: '#',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 30
      }
    }, __jsx("a", {
      onClick: function onClick() {
        return pagenate(v + 1, array);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 47
      }
    }, v + 1))));
  }), pageNumers && __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 32
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 36
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage + 1, pageNumers);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 53
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpIiwicHVzaCIsImxlbmd0aCIsImdyb3VwUGFnZUFycmF5Rmlyc3RWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5IiwibWFwIiwidiIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBd0U7QUFBQSxNQUF0RUMsUUFBc0UsUUFBdEVBLFFBQXNFO0FBQUEsTUFBN0RDLFVBQTZELFFBQTdEQSxVQUE2RDtBQUFBLE1BQWxEQyxZQUFrRCxRQUFsREEsWUFBa0Q7QUFBQSxNQUFyQ0MsT0FBcUMsUUFBckNBLE9BQXFDO0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLE1BQW5CQyxjQUFtQixRQUFuQkEsY0FBbUI7QUFFdkYsTUFBT0MsVUFBVSxHQUFFLEVBQW5COztBQUVBLE1BQUdILE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFBRTtBQUVULFNBQUksSUFBSUksQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDSCxTQUFmLEVBQTBCRyxDQUFDLEVBQTNCLEVBQThCO0FBRTFCRCxnQkFBVSxDQUFDRSxJQUFYLENBQWdCRCxDQUFoQjtBQUNIO0FBRVIsR0FQRCxNQU9NLElBQUtKLE9BQU8sR0FBR0MsU0FBVixLQUF1QixDQUE1QixFQUFnQztBQUU5QkUsY0FBVSxDQUFDRyxNQUFYLEdBQW9CLENBQXBCOztBQUNBLFNBQUksSUFBSUYsRUFBQyxHQUFDSixPQUFPLEdBQUMsQ0FBbEIsRUFBcUJJLEVBQUMsR0FBRUosT0FBTyxHQUFDLENBQVQsR0FBWUMsU0FBbkMsRUFBOENHLEVBQUMsRUFBL0MsRUFBbUQ7QUFDbkRELGdCQUFVLENBQUNFLElBQVgsQ0FBZ0JELEVBQWhCO0FBQ0M7QUFFUixHQVBLLE1BT0Q7QUFFRUQsY0FBVSxDQUFDRyxNQUFYLEdBQWtCLENBQWxCOztBQUNBLFNBQUksSUFBSUYsR0FBQyxHQUFDLENBQVYsRUFBYUEsR0FBQyxHQUFFRixjQUFjLENBQUNJLE1BQS9CLEVBQXVDRixHQUFDLEVBQXhDLEVBQTJDO0FBQ3ZDRCxnQkFBVSxDQUFDRSxJQUFYLENBQWdCSCxjQUFjLENBQUNFLEdBQUQsQ0FBOUI7QUFDSDtBQUVQOztBQUVELE1BQUdOLFVBQVUsS0FBSyxDQUFmLElBQW9CQSxVQUFVLEdBQUdDLFlBQXBDLEVBQWlEO0FBQzdDLFFBQU1RLHdCQUF3QixHQUFHTCxjQUFjLENBQUMsQ0FBRCxDQUEvQztBQUVIOztBQUVHTSxTQUFPLENBQUNDLEdBQVIsQ0FBYSxnQkFBYixFQUFrQ04sVUFBbEMsRUFoQ21GLENBaUNuRjtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0osU0FDSSxtRUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSCxPQURMLEVBRUk7QUFBSSxTQUFLLEVBQUU7QUFBQ1UsYUFBTyxFQUFFVixPQUFPLEtBQUssQ0FBWixJQUFpQkEsT0FBTyxLQUFLLENBQTdCLEdBQWtDLE1BQWxDLEdBQTJDO0FBQXJELEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQjtBQUFHLFdBQU8sRUFBRTtBQUFBLGFBQUlILFFBQVEsQ0FBQ0csT0FBTyxHQUFDLENBQVQsQ0FBWjtBQUFBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFqQixDQUFyRSxDQUZKLEVBS0tHLFVBQVUsQ0FBQ1EsR0FBWCxDQUFlLFVBQUNDLENBQUQsRUFBR1IsQ0FBSCxFQUFLUyxLQUFMO0FBQUEsV0FDWjtBQUFJLFNBQUcsRUFBRUQsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCO0FBQUcsYUFBTyxFQUFFO0FBQUEsZUFBSWYsUUFBUSxDQUFDZSxDQUFDLEdBQUMsQ0FBSCxFQUFLQyxLQUFMLENBQVo7QUFBQSxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0NELENBQUMsR0FBQyxDQUF4QyxDQUFqQixDQUFKLENBREwsQ0FEWTtBQUFBLEdBQWYsQ0FMTCxFQWFLVCxVQUFVLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCO0FBQUcsV0FBTyxFQUFFO0FBQUEsYUFBSU4sUUFBUSxDQUFDRyxPQUFPLEdBQUMsQ0FBVCxFQUFXRyxVQUFYLENBQVo7QUFBQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBakIsQ0FBSixDQWJuQixDQURKLENBREEsQ0FESjtBQXNCSCxDQTdFRDs7S0FBTVAsVTtBQStFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVtcC5qcy5hNGZiYTY2N2E2ZDE3ZmE2MjlhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VDYWxsYmFjayx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgUGFnZW5hdGlvbiA9ICh7cGFnZW5hdGUsZGF0YUxlbmd0aCxwb3N0c1BlclBhZ2Usbm93UGFnZSxncm91cFBhZ2UsZ3JvdXBQYWdlQXJyYXl9KSA9PntcclxuXHJcbiAgICBjb25zdCAgcGFnZU51bWVycz0gW107IFxyXG5cclxuICAgIGlmKG5vd1BhZ2U9PT0wKXsgLy/ssqsg66Gc65Oc7IucIFxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Z3JvdXBQYWdlOyBpKyspe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIH1lbHNlIGlmKCgobm93UGFnZSAlIGdyb3VwUGFnZSA9PT0xKSkpe1xyXG5cclxuICAgICAgICAgICAgcGFnZU51bWVycy5sZW5ndGggPSAwOyBcclxuICAgICAgICAgICAgZm9yKGxldCBpPW5vd1BhZ2UtMTsgaTwobm93UGFnZS0xKStncm91cFBhZ2U7IGkrKyApe1xyXG4gICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgIGZvcihsZXQgaT0wOyBpPCBncm91cFBhZ2VBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChncm91cFBhZ2VBcnJheVtpXSk7IFxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYoZGF0YUxlbmd0aCA9PT0gMCB8fCBkYXRhTGVuZ3RoIDwgcG9zdHNQZXJQYWdlKXtcclxuICAgICAgICBjb25zdCBncm91cFBhZ2VBcnJheUZpcnN0VmFsdWUgPSBncm91cFBhZ2VBcnJheVswXTsgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCAncGFnZU51bWVycz09PT4nICwgICBwYWdlTnVtZXJzKTsgXHJcbiAgICAgICAgLy8gZm9yKGxldCBpPTA7IGk8Z3JvdXBQYWdlOyBpKyspe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG5cclxuICAgICAgICAvLyAgICAgaWYoKChub3dQYWdlICUgZ3JvdXBQYWdlID09PTEpKSAmJiAobm93UGFnZSAhPT0gMSkpe1xyXG4gICAgICAgIC8vICAgICAgICAgcGFnZU51bWVycy5sZW5ndGggPSAwOyBcclxuICAgICAgICAvLyAgICAgICAgIGZvcihsZXQgaT1ub3dQYWdlLTE7IGk8KG5vd1BhZ2UtMSkrZ3JvdXBQYWdlOyBpKysgKXtcclxuICAgICAgICAvLyAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gIFxyXG5cclxuICAgICAgICAvLyBpZigobm93UGFnZSAlIGdyb3VwUGFnZSA9PT0xKSAmJiAobm93UGFnZSAhPT0gMSkpe1xyXG4gICAgICAgIC8vICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgIC8vICAgICBmb3IobGV0IGk9bm93UGFnZS0xOyBpPChub3dQYWdlLTEpK2dyb3VwUGFnZTsgaSsrICl7XHJcbiAgICAgICAgLy8gICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PiAgXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge25vd1BhZ2V9XHJcbiAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3tkaXNwbGF5OiBub3dQYWdlID09PSAxIHx8IG5vd1BhZ2UgPT09IDAgID8gXCJub25lXCIgOiBcIlwifX0+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUobm93UGFnZS0xKX0+4peAPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7cGFnZU51bWVycy5tYXAoKHYsaSxhcnJheSk9PihcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZSh2KzEsYXJyYXkpfT57disxfTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7cGFnZU51bWVycyAmJiA8bGk+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUobm93UGFnZSsxLHBhZ2VOdW1lcnMpfT7ilrY8L2E+PC9MaW5rPjwvbGk+IH1cclxuICAgICAgICAgICAgPC91bD4gICAgICAgICAgICAgICBcclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VuYXRpb247ICJdLCJzb3VyY2VSb290IjoiIn0=