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
      groupPageArray = _ref.groupPageArray,
      valus = _ref.valus;
  var pageNumers = [];
  console.log(valus);

  if (nowPage === 0) {
    //첫 로드시    
    for (var i = 0; i < groupPage; i++) {
      pageNumers.push(i);
    } //앞으로 그룹 이동

  } else if (nowPage % groupPage === 1 && nowPage !== 1 && valus === 'forward') {
    console.log('앞으로 그룹 이동');
    pageNumers.length = 0;

    for (var _i = nowPage - 1; _i < nowPage - 1 + groupPage; _i++) {
      pageNumers.push(_i);
    } //뒤로 그룹 이동

  } else if (groupPageArray[0] === nowPage && valus === 'backward') {
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
  } // //마지막 페이지 처리
  // if(dataLength === 0 || dataLength < postsPerPage){
  //     console.log('마지막 페이지 처리' , pageNumers); 
  //     let values = [...pageNumers]; 
  //     pageNumers.length=0; 
  //     values.map((v,i)=>{
  //         if(v < nowPage){
  //             pageNumers.push(values[i]); 
  //         }
  //     })
  // }


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, nowPage, __jsx("li", {
    style: {
      display: nowPage === 1 || nowPage === 0 ? "none" : ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 86
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage - 1, pageNumers, 'backward');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 103
    }
  }, "\u25C0"))), pageNumers.map(function (v, i, array) {
    return __jsx("li", {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 26
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: '#',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 30
      }
    }, __jsx("a", {
      onClick: function onClick() {
        return pagenate(v + 1, array, 'number');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 47
      }
    }, v + 1))));
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage + 1, pageNumers, 'forward');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInZhbHVzIiwicGFnZU51bWVycyIsImNvbnNvbGUiLCJsb2ciLCJpIiwicHVzaCIsImxlbmd0aCIsImRpc3BsYXkiLCJtYXAiLCJ2IiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUE4RTtBQUFBLE1BQTVFQyxRQUE0RSxRQUE1RUEsUUFBNEU7QUFBQSxNQUFuRUMsVUFBbUUsUUFBbkVBLFVBQW1FO0FBQUEsTUFBeERDLFlBQXdELFFBQXhEQSxZQUF3RDtBQUFBLE1BQTNDQyxPQUEyQyxRQUEzQ0EsT0FBMkM7QUFBQSxNQUFuQ0MsU0FBbUMsUUFBbkNBLFNBQW1DO0FBQUEsTUFBekJDLGNBQXlCLFFBQXpCQSxjQUF5QjtBQUFBLE1BQVZDLEtBQVUsUUFBVkEsS0FBVTtBQUU3RixNQUFPQyxVQUFVLEdBQUUsRUFBbkI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7O0FBQ0EsTUFBR0gsT0FBTyxLQUFHLENBQWIsRUFBZTtBQUFFO0FBQ1QsU0FBSSxJQUFJTyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNOLFNBQWYsRUFBMEJNLENBQUMsRUFBM0IsRUFBOEI7QUFFMUJILGdCQUFVLENBQUNJLElBQVgsQ0FBZ0JELENBQWhCO0FBQ0gsS0FKTSxDQU1mOztBQUNDLEdBUEQsTUFPTSxJQUFLUCxPQUFPLEdBQUdDLFNBQVYsS0FBdUIsQ0FBekIsSUFBaUNELE9BQU8sS0FBSyxDQUE3QyxJQUFvREcsS0FBSyxLQUFHLFNBQS9ELEVBQTBFO0FBQ3hFRSxXQUFPLENBQUND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TUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUI7QUFBRyxXQUFPLEVBQUU7QUFBQSxhQUFJZixRQUFRLENBQUNHLE9BQU8sR0FBQyxDQUFULEVBQVdJLFVBQVgsRUFBc0IsU0FBdEIsQ0FBWjtBQUFBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFqQixDQUFKLENBUkEsQ0FESixDQURBLENBREo7QUFpQkgsQ0FqRUQ7O0tBQU1SLFU7QUFtRVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxlbXAuanMuYzRlYjQxY2NhYWI1OTZmNDZiODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlQ2FsbGJhY2ssdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbnVtYmVyIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFBhZ2VuYXRpb24gPSAoe3BhZ2VuYXRlLGRhdGFMZW5ndGgscG9zdHNQZXJQYWdlLG5vd1BhZ2UsZ3JvdXBQYWdlLGdyb3VwUGFnZUFycmF5LHZhbHVzfSkgPT57XHJcblxyXG4gICAgY29uc3QgIHBhZ2VOdW1lcnM9IFtdOyBcclxuICAgIGNvbnNvbGUubG9nKHZhbHVzKTsgXHJcbiAgICBpZihub3dQYWdlPT09MCl7IC8v7LKrIOuhnOuTnOyLnCAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Z3JvdXBQYWdlOyBpKyspe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAvL+yVnuycvOuhnCDqt7jro7kg7J2064+ZXHJcbiAgICB9ZWxzZSBpZigoKG5vd1BhZ2UgJSBncm91cFBhZ2UgPT09MSkpICYmIChub3dQYWdlICE9PSAxKSAmJiAodmFsdXM9PT0nZm9yd2FyZCcpKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+yVnuycvOuhnCDqt7jro7kg7J2064+ZJylcclxuICAgICAgICAgICAgcGFnZU51bWVycy5sZW5ndGggPSAwOyBcclxuICAgICAgICAgICAgZm9yKGxldCBpPW5vd1BhZ2UtMTsgaTwobm93UGFnZS0xKStncm91cFBhZ2U7IGkrKyApe1xyXG4gICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goaSk7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgLy/rkqTroZwg6re466O5IOydtOuPmVxyXG4gICAgfWVsc2UgaWYoKGdyb3VwUGFnZUFycmF5WzBdID09PSBub3dQYWdlKSAmJiAodmFsdXM9PT0nYmFja3dhcmQnKSApe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coJ+uSpOuhnCDqt7jro7kg7J2064+ZJyxncm91cFBhZ2VBcnJheVswXSxub3dQYWdlKTtcclxuICAgICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxncm91cFBhZ2VBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2goZ3JvdXBQYWdlQXJyYXlbaV0tZ3JvdXBQYWdlKTsgXHJcbiAgICAgICAgICAgICB9XHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coJ+uyiO2YuCDtgbTrpq0nKTsgXHJcbiAgICAgICAgICAgcGFnZU51bWVycy5sZW5ndGg9MDsgXHJcbiAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8IGdyb3VwUGFnZUFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGdyb3VwUGFnZUFycmF5W2ldKTsgXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyAvL+uniOyngOuniSDtjpjsnbTsp4Ag7LKY66asXHJcbiAgICAvLyBpZihkYXRhTGVuZ3RoID09PSAwIHx8IGRhdGFMZW5ndGggPCBwb3N0c1BlclBhZ2Upe1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCfrp4jsp4Drp4kg7Y6Y7J207KeAIOyymOumrCcgLCBwYWdlTnVtZXJzKTsgXHJcbiAgICAvLyAgICAgbGV0IHZhbHVlcyA9IFsuLi5wYWdlTnVtZXJzXTsgXHJcbiAgICAvLyAgICAgcGFnZU51bWVycy5sZW5ndGg9MDsgXHJcbiAgICAvLyAgICAgdmFsdWVzLm1hcCgodixpKT0+e1xyXG4gICAgLy8gICAgICAgICBpZih2IDwgbm93UGFnZSl7XHJcbiAgICAvLyAgICAgICAgICAgICBwYWdlTnVtZXJzLnB1c2godmFsdWVzW2ldKTsgXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KVxyXG4gICAgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7bm93UGFnZX1cclxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e2Rpc3BsYXk6IG5vd1BhZ2UgPT09IDEgfHwgbm93UGFnZSA9PT0gMCAgPyBcIm5vbmVcIiA6IFwiXCJ9fT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlLTEscGFnZU51bWVycywnYmFja3dhcmQnKX0+4peAPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAge3BhZ2VOdW1lcnMubWFwKCh2LGksYXJyYXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUodisxLGFycmF5LCdudW1iZXInKX0+e3YrMX08L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUobm93UGFnZSsxLHBhZ2VOdW1lcnMsJ2ZvcndhcmQnKX0+4pa2PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZW5hdGlvbjsgIl0sInNvdXJjZVJvb3QiOiIifQ==