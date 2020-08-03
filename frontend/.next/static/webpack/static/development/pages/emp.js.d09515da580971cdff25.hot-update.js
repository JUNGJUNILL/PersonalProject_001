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
    console.log('뒤로 그룹 이동');
    pageNumers.length = 0;

    for (var _i2 = 0; _i2 < groupPageArray.length; _i2++) {
      pageNumers.push(groupPageArray[_i2] - groupPage);
    } //번호클릭

  } else {
    console.log('번호 클릭');
    pageNumers.length = 0;

    for (var _i3 = 0; _i3 < groupPageArray.length; _i3++) {
      pageNumers.push(groupPageArray[_i3]);
    }
  } //마지막 페이지 처리


  if (dataLength === 0 || dataLength < postsPerPage) {
    var groupPageArrayFirstValue = groupPageArray[0];
    var index;
    console.log("마지막 페이지", groupPageArrayFirstValue, ":", pageNumers);
    pageNumers.map(function (v, i) {
      if (v === nowPage) {
        index = i;
      }
    });
    pageNumers.length = 0;
    pageNumers.slice(0, index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJncm91cFBhZ2VBcnJheUZpcnN0VmFsdWUiLCJpbmRleCIsIm1hcCIsInYiLCJzbGljZSIsImRpc3BsYXkiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXdFO0FBQUEsTUFBdEVDLFFBQXNFLFFBQXRFQSxRQUFzRTtBQUFBLE1BQTdEQyxVQUE2RCxRQUE3REEsVUFBNkQ7QUFBQSxNQUFsREMsWUFBa0QsUUFBbERBLFlBQWtEO0FBQUEsTUFBckNDLE9BQXFDLFFBQXJDQSxPQUFxQztBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFBQSxNQUFuQkMsY0FBbUIsUUFBbkJBLGNBQW1CO0FBRXZGLE1BQU9DLFVBQVUsR0FBRSxFQUFuQjs7QUFFQSxNQUFHSCxPQUFPLEtBQUcsQ0FBYixFQUFlO0FBQUU7QUFDVCxTQUFJLElBQUlJLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0gsU0FBZixFQUEwQkcsQ0FBQyxFQUEzQixFQUE4QjtBQUUxQkQsZ0JBQVUsQ0FBQ0UsSUFBWCxDQUFnQkQsQ0FBaEI7QUFDSCxLQUpNLENBTWY7O0FBQ0MsR0FQRCxNQU9NLElBQUtKLE9BQU8sR0FBR0MsU0FBVixLQUF1QixDQUF6QixJQUFpQ0QsT0FBTyxLQUFLLENBQWhELEVBQW9EO0FBQ2xETSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FKLGNBQVUsQ0FBQ0ssTUFBWCxHQUFvQixDQUFw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QUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCO0FBQUcsYUFBTyxFQUFFO0FBQUEsZUFBSWYsUUFBUSxDQUFDZSxDQUFDLEdBQUMsQ0FBSCxFQUFLRyxLQUFMLENBQVo7QUFBQSxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0NILENBQUMsR0FBQyxDQUF4QyxDQUFqQixDQUFKLENBREwsQ0FEWTtBQUFBLEdBQWYsQ0FITCxFQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQjtBQUFHLFdBQU8sRUFBRTtBQUFBLGFBQUlmLFFBQVEsQ0FBQ0csT0FBTyxHQUFDLENBQVQsRUFBV0csVUFBWCxDQUFaO0FBQUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpCLENBQUosQ0FSQSxDQURKLENBREEsQ0FESjtBQWlCSCxDQXBFRDs7S0FBTVAsVTtBQXNFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVtcC5qcy5kMDk1MTVkYTU4MDk3MWNkZmYyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VDYWxsYmFjayx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgUGFnZW5hdGlvbiA9ICh7cGFnZW5hdGUsZGF0YUxlbmd0aCxwb3N0c1BlclBhZ2Usbm93UGFnZSxncm91cFBhZ2UsZ3JvdXBQYWdlQXJyYXl9KSA9PntcclxuXHJcbiAgICBjb25zdCAgcGFnZU51bWVycz0gW107IFxyXG5cclxuICAgIGlmKG5vd1BhZ2U9PT0wKXsgLy/ssqsg66Gc65Oc7IucICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxncm91cFBhZ2U7IGkrKyl7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgIC8v7JWe7Jy866GcIOq3uOujuSDsnbTrj5lcclxuICAgIH1lbHNlIGlmKCgobm93UGFnZSAlIGdyb3VwUGFnZSA9PT0xKSkgJiYgKG5vd1BhZ2UgIT09IDEpICl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfslZ7snLzroZwg6re466O5IOydtOuPmScpXHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT1ub3dQYWdlLTE7IGk8KG5vd1BhZ2UtMSkrZ3JvdXBQYWdlOyBpKysgKXtcclxuICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIC8v65Kk66GcIOq3uOujuSDsnbTrj5lcclxuICAgIH1lbHNlIGlmKGdyb3VwUGFnZUFycmF5WzBdID09PSBub3dQYWdlKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfrkqTroZwg6re466O5IOydtOuPmScpXHJcbiAgICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Z3JvdXBQYWdlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGdyb3VwUGFnZUFycmF5W2ldLWdyb3VwUGFnZSk7IFxyXG4gICAgICAgICAgICAgfVxyXG4gICAgLy/rsojtmLjtgbTrpq1cclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn67KI7Zi4IO2BtOumrScpOyBcclxuICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICBmb3IobGV0IGk9MDsgaTwgZ3JvdXBQYWdlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goZ3JvdXBQYWdlQXJyYXlbaV0pOyBcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v66eI7KeA66eJIO2OmOydtOyngCDsspjrpqxcclxuICAgIGlmKGRhdGFMZW5ndGggPT09IDAgfHwgZGF0YUxlbmd0aCA8IHBvc3RzUGVyUGFnZSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZ3JvdXBQYWdlQXJyYXlGaXJzdFZhbHVlID0gZ3JvdXBQYWdlQXJyYXlbMF07IFxyXG4gICAgICAgIGxldCBpbmRleDsgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLrp4jsp4Drp4kg7Y6Y7J207KeAXCIsZ3JvdXBQYWdlQXJyYXlGaXJzdFZhbHVlLFwiOlwiLCBwYWdlTnVtZXJzKTsgXHJcbiAgICAgICAgcGFnZU51bWVycy5tYXAoKHYsaSk9PntcclxuICAgICAgICAgICAgaWYodiA9PT0gbm93UGFnZSl7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDtcclxuICAgICAgICBwYWdlTnVtZXJzLnNsaWNlKDAsaW5kZXgpOyBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PiAgXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge25vd1BhZ2V9XHJcbiAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3tkaXNwbGF5OiBub3dQYWdlID09PSAxIHx8IG5vd1BhZ2UgPT09IDAgID8gXCJub25lXCIgOiBcIlwifX0+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUobm93UGFnZS0xLHBhZ2VOdW1lcnMsJ21pbnVzJyl9PuKXgDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIHtwYWdlTnVtZXJzLm1hcCgodixpLGFycmF5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Z9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKHYrMSxhcnJheSl9Pnt2KzF9PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKG5vd1BhZ2UrMSxwYWdlTnVtZXJzKX0+4pa2PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZW5hdGlvbjsgIl0sInNvdXJjZVJvb3QiOiIifQ==