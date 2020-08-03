webpackHotUpdate("static\\development\\pages\\emp.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false,

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
    pageNumers.length = 0;

    for (var _i = nowPage - 1; _i < nowPage - 1 + groupPage; _i++) {
      pageNumers.push(_i);
    } //뒤로 그룹 이동

  } else if (groupPageArray[0] === nowPage) {
    pageNumers.length = 0;

    for (var _i2 = 0; _i2 < groupPageArray.length; _i2++) {
      pageNumers.push(groupPageArray[_i2] - groupPage);
    } //번호클릭

  } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInBhZ2VOdW1lcnMiLCJpIiwicHVzaCIsImxlbmd0aCIsImdyb3VwUGFnZUFycmF5Rmlyc3RWYWx1ZSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIm1hcCIsInYiLCJzbGljZSIsImRpc3BsYXkiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXdFO0FBQUEsTUFBdEVDLFFBQXNFLFFBQXRFQSxRQUFzRTtBQUFBLE1BQTdEQyxVQUE2RCxRQUE3REEsVUFBNkQ7QUFBQSxNQUFsREMsWUFBa0QsUUFBbERBLFlBQWtEO0FBQUEsTUFBckNDLE9BQXFDLFFBQXJDQSxPQUFxQztBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFBQSxNQUFuQkMsY0FBbUIsUUFBbkJBLGNBQW1CO0FBRXZGLE1BQU9DLFVBQVUsR0FBRSxFQUFuQjs7QUFFQSxNQUFHSCxPQUFPLEtBQUcsQ0FBYixFQUFlO0FBQUU7QUFDVCxTQUFJLElBQUlJLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0gsU0FBZixFQUEwQkcsQ0FBQyxFQUEzQixFQUE4QjtBQUUxQkQsZ0JBQVUsQ0FBQ0UsSUFBWCxDQUFnQkQsQ0FBaEI7QUFDSCxLQUpNLENBTWY7O0FBQ0MsR0FQRCxNQU9NLElBQUtKLE9BQU8sR0FBR0MsU0FBVixLQUF1QixDQUF6QixJQUFpQ0QsT0FBTyxLQUFLLENBQWhELEVBQW9EO0FBRWxERyxjQUFVLENBQUNHLE1BQVgsR0FBb0IsQ0FBcEI7O0FBQ0EsU0FBSSxJQUFJRixFQUFDLEdBQUNK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QUFBQSxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0NILENBQUMsR0FBQyxDQUF4QyxDQUFqQixDQUFKLENBREwsQ0FEWTtBQUFBLEdBQWYsQ0FITCxFQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQjtBQUFHLFdBQU8sRUFBRTtBQUFBLGFBQUlmLFFBQVEsQ0FBQ0csT0FBTyxHQUFDLENBQVQsRUFBV0csVUFBWCxDQUFaO0FBQUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpCLENBQUosQ0FSQSxDQURKLENBREEsQ0FESjtBQWlCSCxDQXBFRDs7S0FBTVAsVTtBQXNFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVtcC5qcy45NDJkNDFhZGEyZTk0YmE0MTBlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VDYWxsYmFjayx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgUGFnZW5hdGlvbiA9ICh7cGFnZW5hdGUsZGF0YUxlbmd0aCxwb3N0c1BlclBhZ2Usbm93UGFnZSxncm91cFBhZ2UsZ3JvdXBQYWdlQXJyYXl9KSA9PntcclxuXHJcbiAgICBjb25zdCAgcGFnZU51bWVycz0gW107IFxyXG5cclxuICAgIGlmKG5vd1BhZ2U9PT0wKXsgLy/ssqsg66Gc65Oc7IucICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxncm91cFBhZ2U7IGkrKyl7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgIC8v7JWe7Jy866GcIOq3uOujuSDsnbTrj5lcclxuICAgIH1lbHNlIGlmKCgobm93UGFnZSAlIGdyb3VwUGFnZSA9PT0xKSkgJiYgKG5vd1BhZ2UgIT09IDEpICl7XHJcblxyXG4gICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9bm93UGFnZS0xOyBpPChub3dQYWdlLTEpK2dyb3VwUGFnZTsgaSsrICl7XHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAvL+uSpOuhnCDqt7jro7kg7J2064+ZXHJcbiAgICB9ZWxzZSBpZihncm91cFBhZ2VBcnJheVswXSA9PT0gbm93UGFnZSl7XHJcblxyXG4gICAgICAgICAgICAgcGFnZU51bWVycy5sZW5ndGggPSAwOyBcclxuICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGdyb3VwUGFnZUFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChncm91cFBhZ2VBcnJheVtpXS1ncm91cFBhZ2UpOyBcclxuICAgICAgICAgICAgIH1cclxuICAgIC8v67KI7Zi47YG066atXHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgcGFnZU51bWVycy5sZW5ndGg9MDsgXHJcbiAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8IGdyb3VwUGFnZUFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGdyb3VwUGFnZUFycmF5W2ldKTsgXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+uniOyngOuniSDtjpjsnbTsp4Ag7LKY66asXHJcbiAgICBpZihkYXRhTGVuZ3RoID09PSAwIHx8IGRhdGFMZW5ndGggPCBwb3N0c1BlclBhZ2Upe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGdyb3VwUGFnZUFycmF5Rmlyc3RWYWx1ZSA9IGdyb3VwUGFnZUFycmF5WzBdOyBcclxuICAgICAgICBsZXQgaW5kZXg7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi66eI7KeA66eJIO2OmOydtOyngFwiLGdyb3VwUGFnZUFycmF5Rmlyc3RWYWx1ZSxcIjpcIiwgcGFnZU51bWVycyk7IFxyXG4gICAgICAgIHBhZ2VOdW1lcnMubWFwKCh2LGkpPT57XHJcbiAgICAgICAgICAgIGlmKHYgPT09IG5vd1BhZ2Upe1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgcGFnZU51bWVycy5zbGljZSgwLGluZGV4KTsgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD4gIFxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtub3dQYWdlfVxyXG4gICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7ZGlzcGxheTogbm93UGFnZSA9PT0gMSB8fCBub3dQYWdlID09PSAwICA/IFwibm9uZVwiIDogXCJcIn19PjxMaW5rIGhyZWY9eycjJ30+PGEgb25DbGljaz17KCk9PnBhZ2VuYXRlKG5vd1BhZ2UtMSxwYWdlTnVtZXJzLCdtaW51cycpfT7il4A8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICB7cGFnZU51bWVycy5tYXAoKHYsaSxhcnJheSk9PihcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZSh2KzEsYXJyYXkpfT57disxfTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlKzEscGFnZU51bWVycyl9PuKWtjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD4gICAgICAgICAgICAgICBcclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VuYXRpb247ICJdLCJzb3VyY2VSb290IjoiIn0=