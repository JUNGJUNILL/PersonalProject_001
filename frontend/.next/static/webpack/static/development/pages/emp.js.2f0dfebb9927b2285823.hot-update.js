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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpc0luVmlzaWJsZSIsImkiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImRpc3BsYXkiLCJtYXAiLCJ2IiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF3RTtBQUFBLE1BQXRFQyxRQUFzRSxRQUF0RUEsUUFBc0U7QUFBQSxNQUE3REMsVUFBNkQsUUFBN0RBLFVBQTZEO0FBQUEsTUFBbERDLFlBQWtELFFBQWxEQSxZQUFrRDtBQUFBLE1BQXJDQyxPQUFxQyxRQUFyQ0EsT0FBcUM7QUFBQSxNQUE3QkMsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQUEsTUFBbkJDLGNBQW1CLFFBQW5CQSxjQUFtQjtBQUV2RixNQUFPQyxVQUFVLEdBQUUsRUFBbkIsQ0FGdUYsQ0FJdkY7O0FBQ0EsTUFBS0MsV0FBVyxHQUFHLEtBQW5COztBQUNBLE1BQUdOLFVBQVUsS0FBSyxDQUFmLElBQW9CQSxVQUFVLEdBQUdDLFlBQXBDLEVBQWlEO0FBQzdDSyxlQUFXLEdBQUcsSUFBZDtBQUNIOztBQUVELE1BQUdKLE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFBRTtBQUNULFNBQUksSUFBSUssQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDSixTQUFmLEVBQTBCSSxDQUFDLEVBQTNCLEVBQThCO0FBRTFCRixnQkFBVSxDQUFDRyxJQUFYLENBQWdCRCxDQUFoQjtBQUNILEtBSk0sQ0FNZjs7QUFDQyxHQVBELE1BT00sSUFBS0wsT0FBTyxHQUFHQyxTQUFWLEtBQXVCLENBQXpC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QVcsS0FBRyxJQUFkLEdBQXFCLE1BQXJCLEdBQThCO0FBQXhDLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3RCxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQjtBQUFHLFdBQU8sRUFBRTtBQUFBLGFBQUlQLFFBQVEsQ0FBQ0csT0FBTyxHQUFDLENBQVQsRUFBV0csVUFBWCxDQUFaO0FBQUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpCLENBQXhELENBUEosQ0FESixDQURBLENBREo7QUFnQkgsQ0F6REQ7O0tBQU1QLFU7QUEyRFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxlbXAuanMuMmYwZGZlYmI5OTI3YjIyODU4MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlQ2FsbGJhY2ssdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbnVtYmVyIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFBhZ2VuYXRpb24gPSAoe3BhZ2VuYXRlLGRhdGFMZW5ndGgscG9zdHNQZXJQYWdlLG5vd1BhZ2UsZ3JvdXBQYWdlLGdyb3VwUGFnZUFycmF5fSkgPT57XHJcblxyXG4gICAgY29uc3QgIHBhZ2VOdW1lcnM9IFtdOyBcclxuXHJcbiAgICAvL+uniOyngOuniSDtjpjsnbTsp4Ag7LKY66asIFxyXG4gICAgbGV0ICBpc0luVmlzaWJsZSA9IGZhbHNlOyBcclxuICAgIGlmKGRhdGFMZW5ndGggPT09IDAgfHwgZGF0YUxlbmd0aCA8IHBvc3RzUGVyUGFnZSl7XHJcbiAgICAgICAgaXNJblZpc2libGUgPSB0cnVlOyBcclxuICAgIH1cclxuXHJcbiAgICBpZihub3dQYWdlPT09MCl7IC8v7LKrIOuhnOuTnOyLnCAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Z3JvdXBQYWdlOyBpKyspe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAvL+yVnuycvOuhnCDqt7jro7kg7J2064+ZXHJcbiAgICB9ZWxzZSBpZigoKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT09MSkpICYmIChub3dQYWdlICE9PSAxKSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfslZ7snLzroZwg6re466O5IOydtOuPmScpXHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT1ub3dQYWdlLTE7IGk8KG5vd1BhZ2UtMSkrZ3JvdXBQYWdlOyBpKysgKXtcclxuICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIC8v65Kk66GcIOq3uOujuSDsnbTrj5lcclxuICAgIH1lbHNlIGlmKChncm91cFBhZ2VBcnJheVswXSA9PT0gbm93UGFnZSkpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coJ+uSpOuhnCDqt7jro7kg7J2064+ZJyk7XHJcbiAgICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Z3JvdXBQYWdlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGdyb3VwUGFnZUFycmF5W2ldLWdyb3VwUGFnZSk7IFxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCfrsojtmLgg7YG066atJyk7IFxyXG4gICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgIGZvcihsZXQgaT0wOyBpPCBncm91cFBhZ2VBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChncm91cFBhZ2VBcnJheVtpXSk7IFxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGxpICBzdHlsZT17e2Rpc3BsYXk6IG5vd1BhZ2UgPT09IDEgfHwgbm93UGFnZSA9PT0gMCAgPyBcIm5vbmVcIiA6IFwiXCJ9fT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlLTEscGFnZU51bWVycyl9PuKXgDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIHtwYWdlTnVtZXJzLm1hcCgodixpLGFycmF5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Z9ICBzdHlsZT17e2Rpc3BsYXkgOiAoaXNJblZpc2libGU9PT10cnVlKSAmJiAodiA+PW5vd1BhZ2UpID8gXCJub25lXCIgOiBcIlwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKHYrMSxhcnJheSl9Pnt2KzF9PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e2Rpc3BsYXkgOmlzSW5WaXNpYmxlPT09dHJ1ZSA/IFwibm9uZVwiIDogXCJcIn19PjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKG5vd1BhZ2UrMSxwYWdlTnVtZXJzKX0+4pa2PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZW5hdGlvbjsgIl0sInNvdXJjZVJvb3QiOiIifQ==