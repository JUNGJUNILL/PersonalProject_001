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
    console.log('앞으로 그룹 이동');
    pageNumers.length = 0;

    for (var _i = nowPage - 1; _i < nowPage - 1 + groupPage; _i++) {
      pageNumers.push(_i);
    } //뒤로 그룹 이동

  } else if (groupPageArray[0] === nowPage) {
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
  } //마지막 페이지 처리


  if (dataLength === 0 || dataLength < postsPerPage) {
    console.log('마지막 페이지 처리', pageNumers);
    var values = [].concat(pageNumers);
    pageNumers.length = 0;
    values.map(function (v, i) {
      if (v < nowPage) {
        pageNumers.push(values[i]);
      }
    });
    console.log('values==>', values);
    var groupPageArrayFirstValue = groupPageArray[0];
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, nowPage, __jsx("li", {
    style: {
      display: nowPage === 1 || nowPage === 0 ? "none" : ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 86
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage - 1, pageNumers, 'minus');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 103
    }
  }, "\u25C0"))), pageNumers.map(function (v, i, array) {
    return __jsx("li", {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 26
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: '#',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 30
      }
    }, __jsx("a", {
      onClick: function onClick() {
        return pagenate(v + 1, array);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 47
      }
    }, v + 1))));
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage + 1, pageNumers);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 34
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ2YWx1ZXMiLCJtYXAiLCJ2IiwiZ3JvdXBQYWdlQXJyYXlGaXJzdFZhbHVlIiwiZGlzcGxheSIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBd0U7QUFBQSxNQUF0RUMsUUFBc0UsUUFBdEVBLFFBQXNFO0FBQUEsTUFBN0RDLFVBQTZELFFBQTdEQSxVQUE2RDtBQUFBLE1BQWxEQyxZQUFrRCxRQUFsREEsWUFBa0Q7QUFBQSxNQUFyQ0MsT0FBcUMsUUFBckNBLE9BQXFDO0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLE1BQW5CQyxjQUFtQixRQUFuQkEsY0FBbUI7QUFFdkYsTUFBT0MsVUFBVSxHQUFFLEVBQW5COztBQUVBLE1BQUdILE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFBRTtBQUNULFNBQUksSUFBSUksQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDSCxTQUFmLEVBQTBCRyxDQUFDLEVBQTNCLEVBQThCO0FBRTFCRCxnQkFBVSxDQUFDRSxJQUFYLENBQWdCRCxDQUFoQjtBQUNILEtBSk0sQ0FNZjs7QUFDQyxHQVBELE1BT00sSUFBS0osT0FBTyxHQUFHQyxTQUFWLEtBQXVCLENBQXpCLElBQWlDRCxPQUFPLEtBQUssQ0FBaEQsRUFBb0Q7QUFDbERNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQUosY0FBVSxDQUFDSyxNQUFYLEdBQW9CLENBQXBCOztBQUNB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O0FBQU0sVUFBSSxFQUFFLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQjtBQUFHLGFBQU8sRUFBRTtBQUFBLGVBQUlkLFFBQVEsQ0FBQ2MsQ0FBQyxHQUFDLENBQUgsRUFBS0csS0FBTCxDQUFaO0FBQUEsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXNDSCxDQUFDLEdBQUMsQ0FBeEMsQ0FBakIsQ0FBSixDQURMLENBRFk7QUFBQSxHQUFmLENBSEwsRUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUI7QUFBRyxXQUFPLEVBQUU7QUFBQSxhQUFJZCxRQUFRLENBQUNHLE9BQU8sR0FBQyxDQUFULEVBQVdHLFVBQVgsQ0FBWjtBQUFBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFqQixDQUFKLENBUkEsQ0FESixDQURBLENBREo7QUFpQkgsQ0FwRUQ7O0tBQU1QLFU7QUFzRVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxlbXAuanMuZDY5MjdlZThkMjlkM2IyZjNlOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlQ2FsbGJhY2ssdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbnVtYmVyIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFBhZ2VuYXRpb24gPSAoe3BhZ2VuYXRlLGRhdGFMZW5ndGgscG9zdHNQZXJQYWdlLG5vd1BhZ2UsZ3JvdXBQYWdlLGdyb3VwUGFnZUFycmF5fSkgPT57XHJcblxyXG4gICAgY29uc3QgIHBhZ2VOdW1lcnM9IFtdOyBcclxuXHJcbiAgICBpZihub3dQYWdlPT09MCl7IC8v7LKrIOuhnOuTnOyLnCAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Z3JvdXBQYWdlOyBpKyspe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAvL+yVnuycvOuhnCDqt7jro7kg7J2064+ZXHJcbiAgICB9ZWxzZSBpZigoKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT09MSkpICYmIChub3dQYWdlICE9PSAxKSApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7JWe7Jy866GcIOq3uOujuSDsnbTrj5knKVxyXG4gICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9bm93UGFnZS0xOyBpPChub3dQYWdlLTEpK2dyb3VwUGFnZTsgaSsrICl7XHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAvL+uSpOuhnCDqt7jro7kg7J2064+ZXHJcbiAgICB9ZWxzZSBpZihncm91cFBhZ2VBcnJheVswXSA9PT0gbm93UGFnZSl7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygn65Kk66GcIOq3uOujuSDsnbTrj5knLGdyb3VwUGFnZUFycmF5WzBdLG5vd1BhZ2UpO1xyXG4gICAgICAgICAgICAgcGFnZU51bWVycy5sZW5ndGggPSAwOyBcclxuICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGdyb3VwUGFnZUFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChncm91cFBhZ2VBcnJheVtpXS1ncm91cFBhZ2UpOyBcclxuICAgICAgICAgICAgIH1cclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAgICBjb25zb2xlLmxvZygn67KI7Zi4IO2BtOumrScpOyBcclxuICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICBmb3IobGV0IGk9MDsgaTwgZ3JvdXBQYWdlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goZ3JvdXBQYWdlQXJyYXlbaV0pOyBcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v66eI7KeA66eJIO2OmOydtOyngCDsspjrpqxcclxuICAgIGlmKGRhdGFMZW5ndGggPT09IDAgfHwgZGF0YUxlbmd0aCA8IHBvc3RzUGVyUGFnZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+uniOyngOuniSDtjpjsnbTsp4Ag7LKY66asJyAsIHBhZ2VOdW1lcnMpOyBcclxuICAgICAgICBsZXQgdmFsdWVzID0gWy4uLnBhZ2VOdW1lcnNdOyBcclxuICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aD0wOyBcclxuICAgICAgICB2YWx1ZXMubWFwKCh2LGkpPT57XHJcbiAgICAgICAgICAgIGlmKHYgPCBub3dQYWdlKXtcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaCh2YWx1ZXNbaV0pOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlcz09PicgLCB2YWx1ZXMpXHJcbiAgICAgICAgY29uc3QgZ3JvdXBQYWdlQXJyYXlGaXJzdFZhbHVlID0gZ3JvdXBQYWdlQXJyYXlbMF07IFxyXG4gICBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PiAgXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge25vd1BhZ2V9XHJcbiAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3tkaXNwbGF5OiBub3dQYWdlID09PSAxIHx8IG5vd1BhZ2UgPT09IDAgID8gXCJub25lXCIgOiBcIlwifX0+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUobm93UGFnZS0xLHBhZ2VOdW1lcnMsJ21pbnVzJyl9PuKXgDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIHtwYWdlTnVtZXJzLm1hcCgodixpLGFycmF5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Z9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKHYrMSxhcnJheSl9Pnt2KzF9PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKG5vd1BhZ2UrMSxwYWdlTnVtZXJzKX0+4pa2PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZW5hdGlvbjsgIl0sInNvdXJjZVJvb3QiOiIifQ==