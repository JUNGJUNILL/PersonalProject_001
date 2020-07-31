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
    console.log(nowPage);
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
  }, "\u25C0"))), pageNumers.map(function (v, i) {
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
        return pagenate(v + 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpIiwicHVzaCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5IiwibWFwIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXdFO0FBQUEsTUFBdEVDLFFBQXNFLFFBQXRFQSxRQUFzRTtBQUFBLE1BQTdEQyxVQUE2RCxRQUE3REEsVUFBNkQ7QUFBQSxNQUFsREMsWUFBa0QsUUFBbERBLFlBQWtEO0FBQUEsTUFBckNDLE9BQXFDLFFBQXJDQSxPQUFxQztBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFBQSxNQUFuQkMsY0FBbUIsUUFBbkJBLGNBQW1CO0FBRXZGO0FBQ0E7QUFDQyxNQUFPQyxVQUFVLEdBQUUsRUFBbkIsQ0FKc0YsQ0FLbkY7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLE1BQUdILE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFFWCxTQUFJLElBQUlJLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0gsU0FBZixFQUEwQkcsQ0FBQyxFQUEzQixFQUE4QjtBQUUxQkQsZ0JBQVUsQ0FBQ0UsSUFBWCxDQUFnQkQsQ0FBaEI7QUFDSDtBQUVKLEdBUEQsTUFPTSxJQUFLSixPQUFPLEdBQUdDLFNBQVYsS0FBdUIsQ0FBNUIsRUFBZ0M7QUFFbENFLGNBQVUsQ0FBQ0csTUFBWCxHQUFvQixDQUFwQjs7QUFDQSxTQUFJLElBQUlGLEVBQUMsR0FBQ0osT0FBTyxHQUFDLENBQWxCLEVBQXFCSSxFQUFDLEdBQUVKLE9BQU8sR0FBQyxDQUFULEdBQVlDLFNBQW5DLEVBQThDRyxFQUFDLEVBQS9DLEVBQW1EO0FBQ25ERCxnQkFBVSxDQUFDRSxJQUFYLENBQWdCRCxFQUFoQjtBQUNDO0FBRUosR0FQSyxNQU9EO0FBQ0ZHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixPQUFaO0FBRUY7O0FBRURPLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLGdCQUFiLEVBQWtDTCxVQUFsQyxFQW5EbUYsQ0FvRG5GO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHSixTQUNJLG1FQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tILE9BREwsRUFFSTtBQUFJLFNBQUssRUFBRTtBQUFDUyxhQUFPLEVBQUVULE9BQU8sS0FBSyxDQUFaLElBQWlCQSxPQUFPLEtBQUssQ0FBN0IsR0FBa0MsTUFBbEMsR0FBMkM7QUFBckQsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCO0FBQUcsV0FBTyxFQUFFO0FBQUEsYUFBSUgsUUFBUSxDQUFDRyxPQUFPLEdBQUMsQ0FBVCxDQUFaO0FBQUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpCLENBQXJFLENBRkosRUFLS0csVUFBVSxDQUFDTyxHQUFYLENBQWUsVUFBQ0MsQ0FBRCxFQUFHUCxDQUFIO0FBQUEsV0FDWjtBQUFJLFNBQUcsRUFBRU8sQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCO0FBQUcsYUFBTyxFQUFFO0FBQUEsZUFBSWQsUUFBUSxDQUFDYyxDQUFDLEdBQUMsQ0FBSCxDQUFaO0FBQUEsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdDQSxDQUFDLEdBQUMsQ0FBbEMsQ0FBakIsQ0FBSixDQURMLENBRFk7QUFBQSxHQUFmLENBTEwsRUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUI7QUFBRyxXQUFPLEVBQUU7QUFBQSxhQUFJZCxRQUFRLENBQUNHLE9BQU8sR0FBQyxDQUFULENBQVo7QUFBQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBakIsQ0FBSixDQWJKLENBREosQ0FEQSxDQURKO0FBc0JILENBaEdEOztLQUFNSixVO0FBa0dTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZW1wLmpzLmI0MzRhM2FiYzZiZWUxNjgyNDg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUNhbGxiYWNrLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG51bWJlciB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBQYWdlbmF0aW9uID0gKHtwYWdlbmF0ZSxkYXRhTGVuZ3RoLHBvc3RzUGVyUGFnZSxub3dQYWdlLGdyb3VwUGFnZSxncm91cFBhZ2VBcnJheX0pID0+e1xyXG5cclxuICAgIC8vY29uc3QgcGFnZU51bWVycyA9IFtbXSxbXV07XHJcbiAgICAvL2NvbnN0IFtwYWdlTnVtZXJzLCBzZXRQYWdlTnVtZXJzIF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAgY29uc3QgIHBhZ2VOdW1lcnM9IFtdOyBcclxuICAgICAgICAvL+ydtOywqOybkCDrsLDsl7Qg7Zmc7JqpXHJcbiAgICAgICAgLy8gaWYobm93UGFnZT09PTApe1xyXG5cclxuICAgICAgICAvLyAgICAgZm9yKGxldCBpPTA7ICBpPHBhZ2VOdW1lcnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICBmb3IobGV0IGo9MTsgajw9Z3JvdXBQYWdlOyBqKyspe1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICBpZihpPT09MCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnNbaV0ucHVzaChqKTsgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnNbaV0ucHVzaChncm91cFBhZ2Uraik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAgICAgICAvLyBpZihub3dQYWdlID09PTAgfHwgKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT0hIDEpKXtcclxuXHJcbiAgICAgICAgLy8gICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgLy8gICAgIGZvcihsZXQgaSA9MDsgaTxncm91cFBhZ2U7IGkrKyl7XHJcbiAgICAgICAgLy8gICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgaWYobm93UGFnZT09PTApe1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Z3JvdXBQYWdlOyBpKyspe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZSBpZigoKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT09MSkpKXtcclxuXHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT1ub3dQYWdlLTE7IGk8KG5vd1BhZ2UtMSkrZ3JvdXBQYWdlOyBpKysgKXtcclxuICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhub3dQYWdlKTsgXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coICdwYWdlTnVtZXJzPT09PicgLCAgIHBhZ2VOdW1lcnMpOyBcclxuICAgICAgICAvLyBmb3IobGV0IGk9MDsgaTxncm91cFBhZ2U7IGkrKyl7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcblxyXG4gICAgICAgIC8vICAgICBpZigoKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT09MSkpICYmIChub3dQYWdlICE9PSAxKSl7XHJcbiAgICAgICAgLy8gICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgIC8vICAgICAgICAgZm9yKGxldCBpPW5vd1BhZ2UtMTsgaTwobm93UGFnZS0xKStncm91cFBhZ2U7IGkrKyApe1xyXG4gICAgICAgIC8vICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgXHJcblxyXG4gICAgICAgIC8vIGlmKChub3dQYWdlICUgZ3JvdXBQYWdlID09PTEpICYmIChub3dQYWdlICE9PSAxKSl7XHJcbiAgICAgICAgLy8gICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgLy8gICAgIGZvcihsZXQgaT1ub3dQYWdlLTE7IGk8KG5vd1BhZ2UtMSkrZ3JvdXBQYWdlOyBpKysgKXtcclxuICAgICAgICAvLyAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7bm93UGFnZX1cclxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e2Rpc3BsYXk6IG5vd1BhZ2UgPT09IDEgfHwgbm93UGFnZSA9PT0gMCAgPyBcIm5vbmVcIiA6IFwiXCJ9fT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlLTEpfT7il4A8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtwYWdlTnVtZXJzLm1hcCgodixpKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Z9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKHYrMSl9Pnt2KzF9PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlKzEpfT7ilrY8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlbmF0aW9uOyAiXSwic291cmNlUm9vdCI6IiJ9