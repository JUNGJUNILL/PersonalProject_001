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
  } else if (nowPage % groupPage === 1 || nowPage == !1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpIiwicHVzaCIsImxlbmd0aCIsImdyb3VwUGFnZUFycmF5Rmlyc3RWYWx1ZSIsImRpc3BsYXkiLCJtYXAiLCJ2IiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF3RTtBQUFBLE1BQXRFQyxRQUFzRSxRQUF0RUEsUUFBc0U7QUFBQSxNQUE3REMsVUFBNkQsUUFBN0RBLFVBQTZEO0FBQUEsTUFBbERDLFlBQWtELFFBQWxEQSxZQUFrRDtBQUFBLE1BQXJDQyxPQUFxQyxRQUFyQ0EsT0FBcUM7QUFBQSxNQUE3QkMsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQUEsTUFBbkJDLGNBQW1CLFFBQW5CQSxjQUFtQjtBQUV2RixNQUFPQyxVQUFVLEdBQUUsRUFBbkI7O0FBRUEsTUFBR0gsT0FBTyxLQUFHLENBQWIsRUFBZTtBQUFFO0FBRVQsU0FBSSxJQUFJSSxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNILFNBQWYsRUFBMEJHLENBQUMsRUFBM0IsRUFBOEI7QUFFMUJELGdCQUFVLENBQUNFLElBQVgsQ0FBZ0JELENBQWhCO0FBQ0g7QUFFUixHQVBELE1BT00sSUFBS0osT0FBTyxHQUFHQyxTQUFWLEtBQXVCLENBQXpCLElBQWdDRCxPQUFPLElBQUUsQ0FBQyxDQUE3QyxFQUErQztBQUU3Q0csY0FBVSxDQUFDRyxNQUFYLEdBQW9CLENBQXBCOztBQUNBLFNBQUksSUFBSUYsRUFBQyxHQUFDSixPQUFPLEdBQUMsQ0FBbEIsRUFBcUJJLEVBQUMsR0FBRUosT0FBTyxHQUFDLENBQVQsR0FBWUMsU0FBbkMsRUFBOENHLEVBQUMsRUFBL0MsRUFBbUQ7QUFDbkRELGdCQUFVLENBQUNFLElBQVgsQ0FBZ0JELEVBQWhCO0FBQ0M7QUFFUixHQVBLLE1BT0Q7QUFFRUQsY0FBVSxDQUFDRyxNQUFYLEdBQWtCLENBQWxCOztBQUNBLFNBQUksSUFBSUYsR0FBQyxHQUFDLENBQVYsRUFBYUEsR0FBQyxHQUFFRixjQUFjLENBQUNJLE1BQS9CLEVBQXVDRixHQUFDLEVBQXhDLEVBQTJDO0FBQ3ZDRCxnQkFBVSxDQUFDRSxJQUFYLENBQWdCSCxjQUFjLENBQUNFLEdBQUQsQ0FBOUI7QUFDSDtBQUVQOztBQUVELE1BQUdOLFVBQVUsS0FBSyxDQUFmLElBQW9CQSxVQUFVLEdBQUdDLFlBQXBDLEVBQWlEO0FBQzdDLFFBQU1RLHdCQUF3QixHQUFHTCxjQUFjLENBQUMsQ0FBRCxDQUEvQztBQUVILEdBOUJzRixDQWdDbkY7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHSixTQUNJLG1FQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tGLE9BREwsRUFFSTtBQUFJLFNBQUssRUFBRTtBQUFDUSxhQUFPLEVBQUVSLE9BQU8sS0FBSyxDQUFaLElBQWlCQSxPQUFPLEtBQUssQ0FBN0IsR0FBa0MsTUFBbEMsR0FBMkM7QUFBckQsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCO0FBQUcsV0FBTyxFQUFFO0FBQUEsYUFBSUgsUUFBUSxDQUFDRyxPQUFPLEdBQUMsQ0FBVCxFQUFXRyxVQUFYLENBQVo7QUFBQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBakIsQ0FBckUsQ0FGSixFQUtLQSxVQUFVLENBQUNNLEdBQVgsQ0FBZSxVQUFDQyxDQUFELEVBQUdOLENBQUgsRUFBS08sS0FBTDtBQUFBLFdBQ1o7QUFBSSxTQUFHLEVBQUVELENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQjtBQUFHLGFBQU8sRUFBRTtBQUFBLGVBQUliLFFBQVEsQ0FBQ2EsQ0FBQyxHQUFDLENBQUgsRUFBS0MsS0FBTCxDQUFaO0FBQUEsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXNDRCxDQUFDLEdBQUMsQ0FBeEMsQ0FBakIsQ0FBSixDQURMLENBRFk7QUFBQSxHQUFmLENBTEwsRUFhRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUI7QUFBRyxXQUFPLEVBQUU7QUFBQSxhQUFJYixRQUFRLENBQUNHLE9BQU8sR0FBQyxDQUFULEVBQVdHLFVBQVgsQ0FBWjtBQUFBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFqQixDQUFKLENBYkUsQ0FESixDQURBLENBREo7QUFzQkgsQ0E1RUQ7O0tBQU1QLFU7QUE4RVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxlbXAuanMuNWYwOWFjYjhlNWE2YjgyMWNkNDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlQ2FsbGJhY2ssdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbnVtYmVyIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFBhZ2VuYXRpb24gPSAoe3BhZ2VuYXRlLGRhdGFMZW5ndGgscG9zdHNQZXJQYWdlLG5vd1BhZ2UsZ3JvdXBQYWdlLGdyb3VwUGFnZUFycmF5fSkgPT57XHJcblxyXG4gICAgY29uc3QgIHBhZ2VOdW1lcnM9IFtdOyBcclxuXHJcbiAgICBpZihub3dQYWdlPT09MCl7IC8v7LKrIOuhnOuTnOyLnCBcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGdyb3VwUGFnZTsgaSsrKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICB9ZWxzZSBpZigoKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT09MSkpIHx8IG5vd1BhZ2U9PSExKXtcclxuXHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT1ub3dQYWdlLTE7IGk8KG5vd1BhZ2UtMSkrZ3JvdXBQYWdlOyBpKysgKXtcclxuICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICBmb3IobGV0IGk9MDsgaTwgZ3JvdXBQYWdlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goZ3JvdXBQYWdlQXJyYXlbaV0pOyBcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmKGRhdGFMZW5ndGggPT09IDAgfHwgZGF0YUxlbmd0aCA8IHBvc3RzUGVyUGFnZSl7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBQYWdlQXJyYXlGaXJzdFZhbHVlID0gZ3JvdXBQYWdlQXJyYXlbMF07IFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICAgICAvLyBmb3IobGV0IGk9MDsgaTxncm91cFBhZ2U7IGkrKyl7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcblxyXG4gICAgICAgIC8vICAgICBpZigoKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT09MSkpICYmIChub3dQYWdlICE9PSAxKSl7XHJcbiAgICAgICAgLy8gICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgIC8vICAgICAgICAgZm9yKGxldCBpPW5vd1BhZ2UtMTsgaTwobm93UGFnZS0xKStncm91cFBhZ2U7IGkrKyApe1xyXG4gICAgICAgIC8vICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgXHJcblxyXG4gICAgICAgIC8vIGlmKChub3dQYWdlICUgZ3JvdXBQYWdlID09PTEpICYmIChub3dQYWdlICE9PSAxKSl7XHJcbiAgICAgICAgLy8gICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgLy8gICAgIGZvcihsZXQgaT1ub3dQYWdlLTE7IGk8KG5vd1BhZ2UtMSkrZ3JvdXBQYWdlOyBpKysgKXtcclxuICAgICAgICAvLyAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7bm93UGFnZX1cclxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e2Rpc3BsYXk6IG5vd1BhZ2UgPT09IDEgfHwgbm93UGFnZSA9PT0gMCAgPyBcIm5vbmVcIiA6IFwiXCJ9fT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlLTEscGFnZU51bWVycyl9PuKXgDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge3BhZ2VOdW1lcnMubWFwKCh2LGksYXJyYXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUodisxLGFycmF5KX0+e3YrMX08L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgPGxpPjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKG5vd1BhZ2UrMSxwYWdlTnVtZXJzKX0+4pa2PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZW5hdGlvbjsgIl0sInNvdXJjZVJvb3QiOiIifQ==