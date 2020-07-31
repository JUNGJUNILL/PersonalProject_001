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
  //const pageNumers = [[],[]];
  //const [pageNumers, setPageNumers ] = useState([]);
  var pageNumers = []; //이차원 배열 활용
  // if(nowPage===0){
  //     for(let i=0;  i<pageNumers.length; i++){
  //         for(let j=1; j<=groupPage; j++){
  //             if(i===0){
  //                 pageNumers[i].push(j); 
  //             }else{
  //                 pageNumers[i].push(groupPage+j);
  //             }
  //         }
  //     }
  // }--------------------------------------------------
  // if(nowPage ===0 || (nowPage % groupPage ==! 1)){
  //     pageNumers.length = 0; 
  //     for(let i =0; i<groupPage; i++){
  //     pageNumers.push(i); 
  //     }
  // }

  if (nowPage === 0) {
    for (var i = 0; i < groupPage; i++) {
      pageNumers.push(i);
    }
  } else if (nowPage % groupPage === 1) {
    pageNumers.length = 0;

    for (var _i = nowPage - 1; _i < nowPage - 1 + groupPage; _i++) {
      pageNumers.push(_i);
    }
  } else {
    console.log(nowPage, ':', groupPageArray);
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
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, nowPage, __jsx("li", {
    style: {
      display: nowPage === 1 || nowPage === 0 ? "none" : ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 86
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage - 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 103
    }
  }, "\u25C0"))), pageNumers.map(function (v, i, array) {
    return __jsx("li", {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 26
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: '#',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 30
      }
    }, __jsx("a", {
      onClick: function onClick() {
        return pagenate(v + 1, array);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 47
      }
    }, v + 1))));
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage + 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 38
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpIiwicHVzaCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5IiwibWFwIiwidiIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBd0U7QUFBQSxNQUF0RUMsUUFBc0UsUUFBdEVBLFFBQXNFO0FBQUEsTUFBN0RDLFVBQTZELFFBQTdEQSxVQUE2RDtBQUFBLE1BQWxEQyxZQUFrRCxRQUFsREEsWUFBa0Q7QUFBQSxNQUFyQ0MsT0FBcUMsUUFBckNBLE9BQXFDO0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLE1BQW5CQyxjQUFtQixRQUFuQkEsY0FBbUI7QUFFdkY7QUFDQTtBQUNDLE1BQU9DLFVBQVUsR0FBRSxFQUFuQixDQUpzRixDQUtuRjtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0EsTUFBR0gsT0FBTyxLQUFHLENBQWIsRUFBZTtBQUVYLFNBQUksSUFBSUksQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDSCxTQUFmLEVBQTBCRyxDQUFDLEVBQTNCLEVBQThCO0FBRTFCRCxnQkFBVSxDQUFDRSxJQUFYLENBQWdCRCxDQUFoQjtBQUNIO0FBRUosR0FQRCxNQU9NLElBQUtKLE9BQU8sR0FBR0MsU0FBVixLQUF1QixDQUE1QixFQUFnQztBQUVsQ0UsY0FBVSxDQUFDRyxNQUFYLEdBQW9CLENBQXBCOztBQUNBLFNBQUksSUFBSUYsRUFBQyxHQUFDSixPQUFPLEdBQUMsQ0FBbEIsRUFBcUJJLEVBQUMsR0FBRUosT0FBTyxHQUFDLENBQVQsR0FBWUMsU0FBbkMsRUFBOENHLEVBQUMsRUFBL0MsRUFBbUQ7QUFDbkRELGdCQUFVLENBQUNFLElBQVgsQ0FBZ0JELEVBQWhCO0FBQ0M7QUFFSixHQVBLLE1BT0Q7QUFDRkcsV0FBTyxDQUFDQyxHQUFSLENBQVlSLE9BQVosRUFBcUIsR0FBckIsRUFBMkJFLGNBQTNCO0FBRUY7O0FBRURLLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLGdCQUFiLEVBQWtDTCxVQUFsQyxFQW5EbUYsQ0FvRG5GO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHSixTQUNJLG1FQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tILE9BREwsRUFFSTtBQUFJLFNBQUssRUFBRTtBQUFDUyxhQUFPLEVBQUVULE9BQU8sS0FBSyxDQUFaLElBQWlCQSxPQUFPLEtBQUssQ0FBN0IsR0FBa0MsTUFBbEMsR0FBMkM7QUFBckQsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCO0FBQUcsV0FBTyxFQUFFO0FBQUEsYUFBSUgsUUFBUSxDQUFDRyxPQUFPLEdBQUMsQ0FBVCxDQUFaO0FBQUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpCLENBQXJFLENBRkosRUFLS0csVUFBVSxDQUFDTyxHQUFYLENBQWUsVUFBQ0MsQ0FBRCxFQUFHUCxDQUFILEVBQUtRLEtBQUw7QUFBQSxXQUNaO0FBQUksU0FBRyxFQUFFRCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUksTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRSxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUI7QUFBRyxhQUFPLEVBQUU7QUFBQSxlQUFJZCxRQUFRLENBQUNjLENBQUMsR0FBQyxDQUFILEVBQUtDLEtBQUwsQ0FBWjtBQUFBLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFzQ0QsQ0FBQyxHQUFDLENBQXhDLENBQWpCLENBQUosQ0FETCxDQURZO0FBQUEsR0FBZixDQUxMLEVBYUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCO0FBQUcsV0FBTyxFQUFFO0FBQUEsYUFBSWQsUUFBUSxDQUFDRyxPQUFPLEdBQUMsQ0FBVCxDQUFaO0FBQUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpCLENBQUosQ0FiSixDQURKLENBREEsQ0FESjtBQXNCSCxDQWhHRDs7S0FBTUosVTtBQWtHU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVtcC5qcy45ODE5M2MzMzhjYzA5YTY4MzNkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VDYWxsYmFjayx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgUGFnZW5hdGlvbiA9ICh7cGFnZW5hdGUsZGF0YUxlbmd0aCxwb3N0c1BlclBhZ2Usbm93UGFnZSxncm91cFBhZ2UsZ3JvdXBQYWdlQXJyYXl9KSA9PntcclxuXHJcbiAgICAvL2NvbnN0IHBhZ2VOdW1lcnMgPSBbW10sW11dO1xyXG4gICAgLy9jb25zdCBbcGFnZU51bWVycywgc2V0UGFnZU51bWVycyBdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgIGNvbnN0ICBwYWdlTnVtZXJzPSBbXTsgXHJcbiAgICAgICAgLy/snbTssKjsm5Ag67Cw7Je0IO2ZnOyaqVxyXG4gICAgICAgIC8vIGlmKG5vd1BhZ2U9PT0wKXtcclxuXHJcbiAgICAgICAgLy8gICAgIGZvcihsZXQgaT0wOyAgaTxwYWdlTnVtZXJzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgZm9yKGxldCBqPTE7IGo8PWdyb3VwUGFnZTsgaisrKXtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYoaT09PTApe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBwYWdlTnVtZXJzW2ldLnB1c2goaik7IFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBwYWdlTnVtZXJzW2ldLnB1c2goZ3JvdXBQYWdlK2opO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgICAgICAgLy8gaWYobm93UGFnZSA9PT0wIHx8IChub3dQYWdlICUgZ3JvdXBQYWdlID09ISAxKSl7XHJcblxyXG4gICAgICAgIC8vICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgIC8vICAgICBmb3IobGV0IGkgPTA7IGk8Z3JvdXBQYWdlOyBpKyspe1xyXG4gICAgICAgIC8vICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIGlmKG5vd1BhZ2U9PT0wKXtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGdyb3VwUGFnZTsgaSsrKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2UgaWYoKChub3dQYWdlICUgZ3JvdXBQYWdlID09PTEpKSl7XHJcblxyXG4gICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9bm93UGFnZS0xOyBpPChub3dQYWdlLTEpK2dyb3VwUGFnZTsgaSsrICl7XHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2cobm93UGFnZSwgJzonICwgZ3JvdXBQYWdlQXJyYXkpOyBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggJ3BhZ2VOdW1lcnM9PT0+JyAsICAgcGFnZU51bWVycyk7IFxyXG4gICAgICAgIC8vIGZvcihsZXQgaT0wOyBpPGdyb3VwUGFnZTsgaSsrKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuXHJcbiAgICAgICAgLy8gICAgIGlmKCgobm93UGFnZSAlIGdyb3VwUGFnZSA9PT0xKSkgJiYgKG5vd1BhZ2UgIT09IDEpKXtcclxuICAgICAgICAvLyAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgLy8gICAgICAgICBmb3IobGV0IGk9bm93UGFnZS0xOyBpPChub3dQYWdlLTEpK2dyb3VwUGFnZTsgaSsrICl7XHJcbiAgICAgICAgLy8gICAgICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICBcclxuXHJcbiAgICAgICAgLy8gaWYoKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT09MSkgJiYgKG5vd1BhZ2UgIT09IDEpKXtcclxuICAgICAgICAvLyAgICAgcGFnZU51bWVycy5sZW5ndGggPSAwOyBcclxuICAgICAgICAvLyAgICAgZm9yKGxldCBpPW5vd1BhZ2UtMTsgaTwobm93UGFnZS0xKStncm91cFBhZ2U7IGkrKyApe1xyXG4gICAgICAgIC8vICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD4gIFxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtub3dQYWdlfVxyXG4gICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7ZGlzcGxheTogbm93UGFnZSA9PT0gMSB8fCBub3dQYWdlID09PSAwICA/IFwibm9uZVwiIDogXCJcIn19PjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKG5vd1BhZ2UtMSl9PuKXgDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge3BhZ2VOdW1lcnMubWFwKCh2LGksYXJyYXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUodisxLGFycmF5KX0+e3YrMX08L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKG5vd1BhZ2UrMSl9PuKWtjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD4gICAgICAgICAgICAgICBcclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VuYXRpb247ICJdLCJzb3VyY2VSb290IjoiIn0=