webpackHotUpdate("static\\development\\pages\\emp.js",{

/***/ "./utilComponent/Pagenation.js":
/*!*************************************!*\
  !*** ./utilComponent/Pagenation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
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
      groupPageArray = _ref.groupPageArray,
      valus = _ref.valus;
  var pageNumers = [];
  var isVisible = false;

  if (dataLength === 0 || dataLength < postsPerPage) {
    isVisible = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("isVisible"), true);
  }

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


  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, nowPage, __jsx("li", {
    style: {
      display: nowPage === 1 || nowPage === 0 ? "none" : ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 86
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage - 1, pageNumers, 'backward');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 103
    }
  }, "\u25C0"))), pageNumers.map(function (v, i, array) {
    return __jsx("li", {
      key: v,
      style: {
        display: isVisible && v <= nowPage ? "" : "none"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 26
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: '#',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 30
      }
    }, __jsx("a", {
      onClick: function onClick() {
        return pagenate(v + 1, array, 'number');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 47
      }
    }, v + 1))));
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return pagenate(nowPage + 1, pageNumers, 'forward');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24uanMiXSwibmFtZXMiOlsiUGFnZW5hdGlvbiIsInBhZ2VuYXRlIiwiZGF0YUxlbmd0aCIsInBvc3RzUGVyUGFnZSIsIm5vd1BhZ2UiLCJncm91cFBhZ2UiLCJncm91cFBhZ2VBcnJheSIsInZhbHVzIiwicGFnZU51bWVycyIsImlzVmlzaWJsZSIsImkiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImRpc3BsYXkiLCJtYXAiLCJ2IiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUE4RTtBQUFBLE1BQTVFQyxRQUE0RSxRQUE1RUEsUUFBNEU7QUFBQSxNQUFuRUMsVUFBbUUsUUFBbkVBLFVBQW1FO0FBQUEsTUFBeERDLFlBQXdELFFBQXhEQSxZQUF3RDtBQUFBLE1BQTNDQyxPQUEyQyxRQUEzQ0EsT0FBMkM7QUFBQSxNQUFuQ0MsU0FBbUMsUUFBbkNBLFNBQW1DO0FBQUEsTUFBekJDLGNBQXlCLFFBQXpCQSxjQUF5QjtBQUFBLE1BQVZDLEtBQVUsUUFBVkEsS0FBVTtBQUU3RixNQUFPQyxVQUFVLEdBQUUsRUFBbkI7QUFDQSxNQUFPQyxTQUFTLEdBQUcsS0FBbkI7O0FBQ0EsTUFBR1AsVUFBVSxLQUFLLENBQWYsSUFBb0JBLFVBQVUsR0FBR0MsWUFBcEMsRUFBaUQ7QUFDN0NNLGFBQVMsMkdBQUcsSUFBSCxDQUFUO0FBQ0g7O0FBRUQsTUFBR0wsT0FBTyxLQUFHLENBQWIsRUFBZTtBQUFFO0FBQ1QsU0FBSSxJQUFJTSxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNMLFNBQWYsRUFBMEJLLENBQUMsRUFBM0IsRUFBOEI7QUFFMUJGLGdCQUFVLENBQUNHLElBQVgsQ0FBZ0JELENBQWhCO0FBQ0gsS0FKTSxDQU1mOztBQUNDLEdBUEQsTUFPTSxJQUFLTixPQUFPLEdBQUdDLFNBQVYsS0FBdUIsQ0FBekIsSUFBaUNELE9BQU8sS0FBSyxDQUE3QyxJQUFvREcsS0FBSyxLQUFHLFNBQS9ELEVBQTBFO0FBQ3hFSyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FMLGNBQVUsQ0FBQ00sTUFBWCxHQUFvQixDQUFwQjs7QUFDQSxTQUFJLElBQUlKLEVBQUMsR0FBQ04sT0FBTyxHQUFDLENBQWxCLEVBQXFCTSxFQUFDLEdBQUVOLE9BQU8sR0FBQyxDQUFULEdBQVlDLFNBQW5DLEVBQThDSyxFQUFDLEVBQS9DLEVBQW1EO0FBQ25ERixnQkFBVSxDQUFDRyxJQUFYLENBQWdCRCxFQUFoQjtBQUNDLEtBTHVFLENBT2hGOztBQUNDLEdBUkssTUFRQSxJQUFJSixjQUFjLENBQUMsQ0FBRCxDQUFkLEtBQXNCRixPQUF2QixJQUFvQ0csS0FBSyxLQUFHLFVBQS9DLEVBQTREO0FBQ3pESyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXVCUCxjQUFjLENBQUMsQ0FBRCxDQUFyQyxFQUF5Q0YsT0FBekM7QUFDQUksY0FBVSxDQUFDTSxNQUFYLEdBQW9CLENBQXBCOztBQUNBLFNBQUksSUFBSUosR0FBQyxHQUFDLENBQVYsRUFBYUEsR0FBQyxHQUFDSixjQUFjLENBQUNRLE1BQTlCLEVBQXNDSixHQUFDLEVBQXZDLEVBQTBDO0FBQ3ZDRixnQkFBVSxDQUFDRyxJQUFYLENBQWdCTCxjQUFjLENBQUNJLEdBQUQsQ0FBZCxHQUFrQkwsU0FBbEM7QUFDRjtBQUVULEdBUEssTUFPRDtBQUNFTyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FMLGNBQVUsQ0FBQ00sTUFBWCxHQUFrQixDQUFsQjs7QUFDQSxTQUFJLElBQUlKLEdBQUMsR0FBQyxDQUFWLEVBQWFBLEdBQUMsR0FBRUosY0FBYyxDQUFDUSxNQUEvQixFQUF1Q0osR0FBQyxFQUF4QyxFQUEyQztBQUN2Q0YsZ0JBQVUsQ0FBQ0csSUFBWCxDQUFnQkwsY0FBYyxDQUFDSSxHQUFELENBQTlCO0FBQ0g7QUFFUCxHQXJDNEYsQ0F1QzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBLFNBQ0ksbUVBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS04sT0FETCxFQUVJO0FBQUksU0FBSyxFQUFFO0FBQUNXLGFBQU8sRUFBRVgsT0FBTyxLQUFLLENBQVosSUFBaUJBLE9BQU8sS0FBSyxDQUE3QixHQUFrQyxNQUFsQyxHQUEyQztBQUFyRCxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUI7QUFBRyxXQUFPLEVBQUU7QUFBQSxhQUFJSCxRQUFRLENBQUNHLE9BQU8sR0FBQyxDQUFULEVBQVdJLFVBQVgsRUFBc0IsVUFBdEIsQ0FBWjtBQUFBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFqQixDQUFyRSxDQUZKLEVBR0tBLFVBQVUsQ0FBQ1EsR0FBWCxDQUFlLFVBQUNDLENBQUQsRUFBR1AsQ0FBSCxFQUFLUSxLQUFMO0FBQUEsV0FDWjtBQUFJLFNBQUcsRUFBRUQsQ0FBVDtBQUFZLFdBQUssRUFBRTtBQUFDRixlQUFPLEVBQUdOLFNBQVMsSUFBSVEsQ0FBQyxJQUFHYixPQUFqQixHQUEyQixFQUEzQixHQUFnQztBQUEzQyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCO0FBQUcsYUFBTyxFQUFFO0FBQUEsZUFBSUgsUUFBUSxDQUFDZ0IsQ0FBQyxHQUFDLENBQUgsRUFBS0MsS0FBTCxFQUFXLFFBQVgsQ0FBWjtBQUFBLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQ0QsQ0FBQyxHQUFDLENBQWpELENBQWpCLENBQUosQ0FETCxDQURZO0FBQUEsR0FBZixDQUhMLEVBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCO0FBQUcsV0FBTyxFQUFFO0FBQUEsYUFBSWhCLFFBQVEsQ0FBQ0csT0FBTyxHQUFDLENBQVQsRUFBV0ksVUFBWCxFQUFzQixTQUF0QixDQUFaO0FBQUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpCLENBQUosQ0FSQSxDQURKLENBREEsQ0FESjtBQWlCSCxDQXJFRDs7S0FBTVIsVTtBQXVFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVtcC5qcy44ZTc2ZmJmODYyMzk2OGNkMjExNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VDYWxsYmFjayx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgUGFnZW5hdGlvbiA9ICh7cGFnZW5hdGUsZGF0YUxlbmd0aCxwb3N0c1BlclBhZ2Usbm93UGFnZSxncm91cFBhZ2UsZ3JvdXBQYWdlQXJyYXksdmFsdXN9KSA9PntcclxuXHJcbiAgICBjb25zdCAgcGFnZU51bWVycz0gW107IFxyXG4gICAgY29uc3QgIGlzVmlzaWJsZSA9IGZhbHNlOyBcclxuICAgIGlmKGRhdGFMZW5ndGggPT09IDAgfHwgZGF0YUxlbmd0aCA8IHBvc3RzUGVyUGFnZSl7XHJcbiAgICAgICAgaXNWaXNpYmxlID0gdHJ1ZTsgXHJcbiAgICB9XHJcblxyXG4gICAgaWYobm93UGFnZT09PTApeyAvL+yyqyDroZzrk5zsi5wgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGdyb3VwUGFnZTsgaSsrKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgLy/slZ7snLzroZwg6re466O5IOydtOuPmVxyXG4gICAgfWVsc2UgaWYoKChub3dQYWdlICUgZ3JvdXBQYWdlID09PTEpKSAmJiAobm93UGFnZSAhPT0gMSkgJiYgKHZhbHVzPT09J2ZvcndhcmQnKSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfslZ7snLzroZwg6re466O5IOydtOuPmScpXHJcbiAgICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoID0gMDsgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT1ub3dQYWdlLTE7IGk8KG5vd1BhZ2UtMSkrZ3JvdXBQYWdlOyBpKysgKXtcclxuICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGkpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIC8v65Kk66GcIOq3uOujuSDsnbTrj5lcclxuICAgIH1lbHNlIGlmKChncm91cFBhZ2VBcnJheVswXSA9PT0gbm93UGFnZSkgJiYgKHZhbHVzPT09J2JhY2t3YXJkJykgKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfrkqTroZwg6re466O5IOydtOuPmScsZ3JvdXBQYWdlQXJyYXlbMF0sbm93UGFnZSk7XHJcbiAgICAgICAgICAgICBwYWdlTnVtZXJzLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Z3JvdXBQYWdlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKGdyb3VwUGFnZUFycmF5W2ldLWdyb3VwUGFnZSk7IFxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCfrsojtmLgg7YG066atJyk7IFxyXG4gICAgICAgICAgIHBhZ2VOdW1lcnMubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgIGZvcihsZXQgaT0wOyBpPCBncm91cFBhZ2VBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIHBhZ2VOdW1lcnMucHVzaChncm91cFBhZ2VBcnJheVtpXSk7IFxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gLy/rp4jsp4Drp4kg7Y6Y7J207KeAIOyymOumrFxyXG4gICAgLy8gaWYoZGF0YUxlbmd0aCA9PT0gMCB8fCBkYXRhTGVuZ3RoIDwgcG9zdHNQZXJQYWdlKXtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygn66eI7KeA66eJIO2OmOydtOyngCDsspjrpqwnICwgcGFnZU51bWVycyk7IFxyXG4gICAgLy8gICAgIGxldCB2YWx1ZXMgPSBbLi4ucGFnZU51bWVyc107IFxyXG4gICAgLy8gICAgIHBhZ2VOdW1lcnMubGVuZ3RoPTA7IFxyXG4gICAgLy8gICAgIHZhbHVlcy5tYXAoKHYsaSk9PntcclxuICAgIC8vICAgICAgICAgaWYodiA8IG5vd1BhZ2Upe1xyXG4gICAgLy8gICAgICAgICAgICAgcGFnZU51bWVycy5wdXNoKHZhbHVlc1tpXSk7IFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSlcclxuICAgIFxyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PiAgXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge25vd1BhZ2V9XHJcbiAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3tkaXNwbGF5OiBub3dQYWdlID09PSAxIHx8IG5vd1BhZ2UgPT09IDAgID8gXCJub25lXCIgOiBcIlwifX0+PExpbmsgaHJlZj17JyMnfT48YSBvbkNsaWNrPXsoKT0+cGFnZW5hdGUobm93UGFnZS0xLHBhZ2VOdW1lcnMsJ2JhY2t3YXJkJyl9PuKXgDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIHtwYWdlTnVtZXJzLm1hcCgodixpLGFycmF5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Z9IHN0eWxlPXt7ZGlzcGxheSA6IGlzVmlzaWJsZSAmJiB2IDw9bm93UGFnZSA/IFwiXCIgOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZSh2KzEsYXJyYXksJ251bWJlcicpfT57disxfTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXsnIyd9PjxhIG9uQ2xpY2s9eygpPT5wYWdlbmF0ZShub3dQYWdlKzEscGFnZU51bWVycywnZm9yd2FyZCcpfT7ilrY8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlbmF0aW9uOyAiXSwic291cmNlUm9vdCI6IiJ9