webpackHotUpdate("static\\development\\pages\\emp.js",{

/***/ "./utilComponent/Pagenation.js":
/*!*************************************!*\
  !*** ./utilComponent/Pagenation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\utilComponent\\Pagenation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




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
    alert("뭔데?");
    setPageNumers(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(groupPageArray));
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, nowPage, __jsx("li", {
    style: {
      display: nowPage === 1 || nowPage === 0 ? "none" : ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 86
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage - 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 103
    }
  }, "\u25C0"))), pageNumers.map(function (v, i) {
    return __jsx("li", {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 26
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: '#',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 30
      }
    }, __jsx("a", {
      onClick: function onClick() {
        return pagenate(v + 1, pageNumers);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 47
      }
    }, v + 1))));
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage + 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpIiwicHVzaCIsImxlbmd0aCIsImFsZXJ0Iiwic2V0UGFnZU51bWVycyIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5IiwibWFwIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXdFO0FBQUEsTUFBdEVDLFFBQXNFLFFBQXRFQSxRQUFzRTtBQUFBLE1BQTdEQyxVQUE2RCxRQUE3REEsVUFBNkQ7QUFBQSxNQUFsREMsWUFBa0QsUUFBbERBLFlBQWtEO0FBQUEsTUFBckNDLE9BQXFDLFFBQXJDQSxPQUFxQztBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFBQSxNQUFuQkMsY0FBbUIsUUFBbkJBLGNBQW1CO0FBRXZGO0FBQ0E7QUFDQyxNQUFPQyxVQUFVLEdBQUUsRUFBbkIsQ0FKc0YsQ0FLbkY7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLE1BQUdILE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFFWCxTQUFJLElBQUlJLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0gsU0FBZixFQUEwQkcsQ0FBQyxFQUEzQixFQUE4QjtBQUUxQkQsZ0JBQVUsQ0FBQ0UsSUFBWCxDQUFnQkQsQ0FBaEI7QUFDSDtBQUVKLEdBUEQsTUFPTSxJQUFLSixPQUFPLEdBQUdDLFNBQVYsS0FBdUIsQ0FBNUIsRUFBa0M7QUFFcENFLGNBQVUsQ0FBQ0csTUFBWCxHQUFvQixDQUFwQjs7QUFDQSxTQUFJLElBQUlGLEVBQUMsR0FBQ0osT0FBTyxHQUFDLENBQWxCLEVBQXFCSSxFQUFDLEdBQUVKLE9BQU8sR0FBQyxDQUFULEdBQVlDLFNBQW5DLEVBQThDRyxFQUFDLEVBQS9DLEVBQW1EO0FBQ25ERCxnQkFBVSxDQUFDRSxJQUFYLENBQWdCRCxFQUFoQjtBQUNDO0FBRUosR0FQSyxNQU9EO0FBQ0RHLFNBQUssQ0FBQyxLQUFELENBQUw7QUFFQUMsaUJBQWEsQ0FBQyw2RkFBSU4sY0FBTCxFQUFiO0FBQ0g7O0FBRURPLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLGdCQUFiLEVBQWtDUCxVQUFsQyxFQXBEbUYsQ0FxRG5GO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHSixTQUNJLG1FQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tILE9BREwsRUFFSTtBQUFJLFNBQUssRUFBRTtBQUFDVyxhQUFPLEVBQUVYLE9BQU8sS0FBSyxDQUFaLElBQWlCQSxPQUFPLEtBQUssQ0FBN0IsR0FBa0MsTUFBbEMsR0FBMkM7QUFBckQsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCO0FBQUcsV0FBTyxFQUFFO0FBQUEsYUFBSUgsUUFBUSxDQUFDRyxPQUFPLEdBQUMsQ0FBVCxDQUFaO0FBQUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpCLENBQXJFLENBRkosRUFLS0csVUFBVSxDQUFDUyxHQUFYLENBQWUsVUFBQ0MsQ0FBRCxFQUFHVCxDQUFIO0FBQUEsV0FDWjtBQUFJLFNBQUcsRUFBRVMsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCO0FBQUcsYUFBTyxFQUFFO0FBQUEsZUFBSWhCLFFBQVEsQ0FBQ2dCLENBQUMsR0FBQyxDQUFILEVBQUtWLFVBQUwsQ0FBWjtBQUFBLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEyQ1UsQ0FBQyxHQUFDLENBQTdDLENBQWpCLENBQUosQ0FETCxDQURZO0FBQUEsR0FBZixDQUxMLEVBYUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCO0FBQUcsV0FBTyxFQUFFO0FBQUEsYUFBSWhCLFFBQVEsQ0FBQ0csT0FBTyxHQUFDLENBQVQsQ0FBWjtBQUFBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFqQixDQUFKLENBYkosQ0FESixDQURBLENBREo7QUFzQkgsQ0FqR0Q7O0tBQU1KLFU7QUFtR1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxlbXAuanMuNTExZTU3MWNmNDFhYzYwNTVhNzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlQ2FsbGJhY2ssdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbnVtYmVyIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFBhZ2VuYXRpb24gPSAoe3BhZ2VuYXRlLGRhdGFMZW5ndGgscG9zdHNQZXJQYWdlLG5vd1BhZ2UsZ3JvdXBQYWdlLGdyb3VwUGFnZUFycmF5fSkgPT57XHJcblxyXG4gICAgLy9jb25zdCBwYWdlTnVtZXJzID0gW1tdLFtdXTtcclxuICAgIC8vY29uc3QgW3BhZ2VOdW1lcnMsIHNldFBhZ2VOdW1lcnMgXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgICBjb25zdCAgcGFnZU51bWVycz0gW107IFxyXG4gICAgICAgIC8v7J207LCo7JuQIOuwsOyXtCDtmZzsmqlcclxuICAgICAgICAvLyBpZihub3dQYWdlPT09MCl7XHJcblxyXG4gICAgICAgIC8vICAgICBmb3IobGV0IGk9MDsgIGk8cGFnZU51bWVycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgIGZvcihsZXQgaj0xOyBqPD1ncm91cFBhZ2U7IGorKyl7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKGk9PT0wKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcGFnZU51bWVyc1tpXS5wdXNoKGopOyBcclxuICAgICAgICAvLyAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcGFnZU51bWVyc1tpXS5wdXNoKGdyb3VwUGFnZStqKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4gICAgICAgIC8vIGlmKG5vd1BhZ2UgPT09MCB8fCAobm93UGFnZSAlIGdyb3VwUGFnZSA9PSEgMSkpe1xyXG5cclxuICAgICAgICAvLyAgICAgcGFnZU51bWVycy5sZW5ndGggPSAwOyBcclxuICAgICAgICAvLyAgICAgZm9yKGxldCBpID0wOyBpPGdyb3VwUGFnZTsgaSsrKXtcclxuICAgICAgICAvLyAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICBpZihub3dQYWdlPT09MCl7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxncm91cFBhZ2U7IGkrKyl7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1lbHNlIGlmKCgobm93UGFnZSAlIGdyb3VwUGFnZSA9PT0xKSkgICl7XHJcblxyXG4gICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9bm93UGFnZS0xOyBpPChub3dQYWdlLTEpK2dyb3VwUGFnZTsgaSsrICl7XHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi662U642wP1wiKTsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRQYWdlTnVtZXJzKFsuLi5ncm91cFBhZ2VBcnJheV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coICdwYWdlTnVtZXJzPT09PicgLCAgIHBhZ2VOdW1lcnMpOyBcclxuICAgICAgICAvLyBmb3IobGV0IGk9MDsgaTxncm91cFBhZ2U7IGkrKyl7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcblxyXG4gICAgICAgIC8vICAgICBpZigoKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT09MSkpICYmIChub3dQYWdlICE9PSAxKSl7XHJcbiAgICAgICAgLy8gICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgIC8vICAgICAgICAgZm9yKGxldCBpPW5vd1BhZ2UtMTsgaTwobm93UGFnZS0xKStncm91cFBhZ2U7IGkrKyApe1xyXG4gICAgICAgIC8vICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgXHJcblxyXG4gICAgICAgIC8vIGlmKChub3dQYWdlICUgZ3JvdXBQYWdlID09PTEpICYmIChub3dQYWdlICE9PSAxKSl7XHJcbiAgICAgICAgLy8gICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgLy8gICAgIGZvcihsZXQgaT1ub3dQYWdlLTE7IGk8KG5vd1BhZ2UtMSkrZ3JvdXBQYWdlOyBpKysgKXtcclxuICAgICAgICAvLyAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7bm93UGFnZX1cclxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e2Rpc3BsYXk6IG5vd1BhZ2UgPT09IDEgfHwgbm93UGFnZSA9PT0gMCAgPyBcIm5vbmVcIiA6IFwiXCJ9fT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlLTEpfT7il4A8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtwYWdlTnVtZXJzLm1hcCgodixpKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Z9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKHYrMSxwYWdlTnVtZXJzKX0+e3YrMX08L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKG5vd1BhZ2UrMSl9PuKWtjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD4gICAgICAgICAgICAgICBcclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VuYXRpb247ICJdLCJzb3VyY2VSb290IjoiIn0=