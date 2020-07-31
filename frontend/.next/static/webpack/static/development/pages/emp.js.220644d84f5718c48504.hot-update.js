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
    console.log('첫 로드시');

    for (var i = 0; i < groupPage; i++) {
      pageNumers.push(i);
    }
  } else if (nowPage % groupPage === 1 || nowPage == !1) {
    console.log('페이지 인덱스 변경');
    pageNumers.length = 0;

    for (var _i = nowPage - 1; _i < nowPage - 1 + groupPage; _i++) {
      pageNumers.push(_i);
    }
  } else {
    console.log('뭐 임마?');
    pageNumers.length = 0;

    for (var _i2 = 0; _i2 < groupPageArray.length; _i2++) {
      pageNumers.push(groupPageArray[_i2]);
    }
  }

  if (dataLength === 0 || dataLength < postsPerPage) {
    var groupPageArrayFirstValue = groupPageArray[0];
  } // for(let i=0; i<groupPage; i++){
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
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, nowPage, __jsx("li", {
    style: {
      display: nowPage === 1 || nowPage === 0 ? "none" : ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 86
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage - 1, pageNumers);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage + 1, pageNumers);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJjb25zb2xlIiwibG9nIiwiaSIsInB1c2giLCJsZW5ndGgiLCJncm91cFBhZ2VBcnJheUZpcnN0VmFsdWUiLCJkaXNwbGF5IiwibWFwIiwidiIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBd0U7QUFBQSxNQUF0RUMsUUFBc0UsUUFBdEVBLFFBQXNFO0FBQUEsTUFBN0RDLFVBQTZELFFBQTdEQSxVQUE2RDtBQUFBLE1BQWxEQyxZQUFrRCxRQUFsREEsWUFBa0Q7QUFBQSxNQUFyQ0MsT0FBcUMsUUFBckNBLE9BQXFDO0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLE1BQW5CQyxjQUFtQixRQUFuQkEsY0FBbUI7QUFFdkYsTUFBT0MsVUFBVSxHQUFFLEVBQW5COztBQUVBLE1BQUdILE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFBRTtBQUNUSSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaOztBQUNBLFNBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDTCxTQUFmLEVBQTBCSyxDQUFDLEVBQTNCLEVBQThCO0FBRTFCSCxnQkFBVSxDQUFDSSxJQUFYLENBQWdCRCxDQUFoQjtBQUNIO0FBRVIsR0FQRCxNQU9NLElBQUtOLE9BQU8sR0FBR0MsU0FBVixLQUF1QixDQUF6QixJQUFnQ0QsT0FBTyxJQUFFLENBQUMsQ0FBN0MsRUFBK0M7QUFDN0NJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQUYsY0FBVSxDQUFDSyxNQUFYLEdBQW9CLENBQXBCOztBQUNBLFNBQUksSUFBSUYsRUFBQyxHQUFDTixPQUFPLEdBQUMsQ0FBbEIsRUFBcUJNLEVBQUMsR0FBRU4sT0FBTyxHQUFDLENBQVQsR0FBWUMsU0FBbkMsRUFBOENLLEVBQUMsRUFBL0MsRUFBbUQ7QUFDbkRILGdCQUFVLENBQUNJLElBQVgsQ0FBZ0JELEVBQWhCO0FBQ0M7QUFFUixHQVBLLE1BT0Q7QUFDR0YsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNERixjQUFVLENBQUNLLE1BQVgsR0FBa0IsQ0FBbEI7O0FBQ0EsU0FBSSxJQUFJRixHQUFDLEdBQUMsQ0FBVixFQUFhQSxHQUFDLEdBQUVKLGNBQWMsQ0FBQ00sTUFBL0IsRUFBdUNGLEdBQUMsRUFBeEMsRUFBMkM7QUFDdkNILGdCQUFVLENBQUNJLElBQVgsQ0FBZ0JMLGNBQWMsQ0FBQ0ksR0FBRCxDQUE5QjtBQUNIO0FBRVA7O0FBRUQsTUFBR1IsVUFBVSxLQUFLLENBQWYsSUFBb0JBLFVBQVUsR0FBR0MsWUFBcEMsRUFBaUQ7QUFDN0MsUUFBTVUsd0JBQXdCLEdBQUdQLGNBQWMsQ0FBQyxDQUFELENBQS9DO0FBRUgsR0E5QnNGLENBZ0NuRjtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdKLFNBQ0ksbUVBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0YsT0FETCxFQUVJO0FBQUksU0FBSyxFQUFFO0FBQUNVLGFBQU8sRUFBRVYsT0FBTyxLQUFLLENBQVosSUFBaUJBLE9BQU8sS0FBSyxDQUE3QixHQUFrQyxNQUFsQyxHQUEyQztBQUFyRCxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUI7QUFBRyxXQUFPLEVBQUU7QUFBQSxhQUFJSCxRQUFRLENBQUNHLE9BQU8sR0FBQyxDQUFULEVBQVdHLFVBQVgsQ0FBWjtBQUFBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFqQixDQUFyRSxDQUZKLEVBS0tBLFVBQVUsQ0FBQ1EsR0FBWCxDQUFlLFVBQUNDLENBQUQsRUFBR04sQ0FBSCxFQUFLTyxLQUFMO0FBQUEsV0FDWjtBQUFJLFNBQUcsRUFBRUQsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCO0FBQUcsYUFBTyxFQUFFO0FBQUEsZUFBSWYsUUFBUSxDQUFDZSxDQUFDLEdBQUMsQ0FBSCxFQUFLQyxLQUFMLENBQVo7QUFBQSxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0NELENBQUMsR0FBQyxDQUF4QyxDQUFqQixDQUFKLENBREwsQ0FEWTtBQUFBLEdBQWYsQ0FMTCxFQWFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQjtBQUFHLFdBQU8sRUFBRTtBQUFBLGFBQUlmLFFBQVEsQ0FBQ0csT0FBTyxHQUFDLENBQVQsRUFBV0csVUFBWCxDQUFaO0FBQUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpCLENBQUosQ0FiRSxDQURKLENBREEsQ0FESjtBQXNCSCxDQTVFRDs7S0FBTVAsVTtBQThFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVtcC5qcy4yMjA2NDRkODRmNTcxOGM0ODUwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VDYWxsYmFjayx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgUGFnZW5hdGlvbiA9ICh7cGFnZW5hdGUsZGF0YUxlbmd0aCxwb3N0c1BlclBhZ2Usbm93UGFnZSxncm91cFBhZ2UsZ3JvdXBQYWdlQXJyYXl9KSA9PntcclxuXHJcbiAgICBjb25zdCAgcGFnZU51bWVycz0gW107IFxyXG5cclxuICAgIGlmKG5vd1BhZ2U9PT0wKXsgLy/ssqsg66Gc65Oc7IucICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7LKrIOuhnOuTnOyLnCcpXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGdyb3VwUGFnZTsgaSsrKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICB9ZWxzZSBpZigoKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT09MSkpIHx8IG5vd1BhZ2U9PSExKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+2OmOydtOyngCDsnbjrjbHsiqQg67OA6rK9Jyk7IFxyXG4gICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9bm93UGFnZS0xOyBpPChub3dQYWdlLTEpK2dyb3VwUGFnZTsgaSsrICl7XHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+utkCDsnoTrp4g/Jyk7IFxyXG4gICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgIGZvcihsZXQgaT0wOyBpPCBncm91cFBhZ2VBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChncm91cFBhZ2VBcnJheVtpXSk7IFxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYoZGF0YUxlbmd0aCA9PT0gMCB8fCBkYXRhTGVuZ3RoIDwgcG9zdHNQZXJQYWdlKXtcclxuICAgICAgICBjb25zdCBncm91cFBhZ2VBcnJheUZpcnN0VmFsdWUgPSBncm91cFBhZ2VBcnJheVswXTsgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgICAgIC8vIGZvcihsZXQgaT0wOyBpPGdyb3VwUGFnZTsgaSsrKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuXHJcbiAgICAgICAgLy8gICAgIGlmKCgobm93UGFnZSAlIGdyb3VwUGFnZSA9PT0xKSkgJiYgKG5vd1BhZ2UgIT09IDEpKXtcclxuICAgICAgICAvLyAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgLy8gICAgICAgICBmb3IobGV0IGk9bm93UGFnZS0xOyBpPChub3dQYWdlLTEpK2dyb3VwUGFnZTsgaSsrICl7XHJcbiAgICAgICAgLy8gICAgICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICBcclxuXHJcbiAgICAgICAgLy8gaWYoKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT09MSkgJiYgKG5vd1BhZ2UgIT09IDEpKXtcclxuICAgICAgICAvLyAgICAgcGFnZU51bWVycy5sZW5ndGggPSAwOyBcclxuICAgICAgICAvLyAgICAgZm9yKGxldCBpPW5vd1BhZ2UtMTsgaTwobm93UGFnZS0xKStncm91cFBhZ2U7IGkrKyApe1xyXG4gICAgICAgIC8vICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD4gIFxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtub3dQYWdlfVxyXG4gICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7ZGlzcGxheTogbm93UGFnZSA9PT0gMSB8fCBub3dQYWdlID09PSAwICA/IFwibm9uZVwiIDogXCJcIn19PjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKG5vd1BhZ2UtMSxwYWdlTnVtZXJzKX0+4peAPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7cGFnZU51bWVycy5tYXAoKHYsaSxhcnJheSk9PihcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZSh2KzEsYXJyYXkpfT57disxfTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUobm93UGFnZSsxLHBhZ2VOdW1lcnMpfT7ilrY8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlbmF0aW9uOyAiXSwic291cmNlUm9vdCI6IiJ9