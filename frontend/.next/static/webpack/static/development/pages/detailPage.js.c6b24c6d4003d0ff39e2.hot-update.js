webpackHotUpdate("static\\development\\pages\\detailPage.js",{

/***/ "./pages/detailPage.js":
/*!*****************************!*\
  !*** ./pages/detailPage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_emp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/emp */ "./reducers/emp.js");



var _this = undefined,
    _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\detailPage.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var detailPage = function detailPage(_ref) {
  _s();

  var postId = _ref.postId,
      nick = _ref.nick,
      flag = _ref.flag;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      detailInfo = _useState[0],
      setDetailInfo = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(postId, nick, flag);
    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_4__["DETAIL_INFO_REQUEST"],
      data: {}
    });
  }, []);

  var abc = function abc() {
    return {
      __html: "\n    <p>\uAD7F\uBAA8\uB2DD \uC785\uB2C8\uB2E4.</p>\n    <figure class=\"image\"><img src=\"http://localhost:3095/pictureTest1599725512431.jpg\" alt=\"\u3134\u3139\"></figure>\n    "
    };
  };

  var test = function test() {
    return {
      __html: "<div style=\"background:#52D4FF;width: 100px;height: 100px;margin:auto;padding:10px; border: 3px solid #73AD21;\">a</div>"
    };
  };

  return __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: abc(),
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }));
};

_s(detailPage, "eCxSH7HNer1lZQQ959fQOBobwHA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

detailPage.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var test;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            test = context.query.tag;
            console.log('tag', test);
            return _context.abrupt("return", {
              test: test
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (detailPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIl0sIm5hbWVzIjpbImRldGFpbFBhZ2UiLCJwb3N0SWQiLCJuaWNrIiwiZmxhZyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImRldGFpbEluZm8iLCJzZXREZXRhaWxJbmZvIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJERVRBSUxfSU5GT19SRVFVRVNUIiwiZGF0YSIsImFiYyIsIl9faHRtbCIsInRlc3QiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5IiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFNQSxJQUFNQSxVQUFVLEdBQUksU0FBZEEsVUFBYyxPQUF1QjtBQUFBOztBQUFBLE1BQXJCQyxNQUFxQixRQUFyQkEsTUFBcUI7QUFBQSxNQUFkQyxJQUFjLFFBQWRBLElBQWM7QUFBQSxNQUFUQyxJQUFTLFFBQVRBLElBQVM7QUFFekMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGeUMsa0JBR0xDLHNEQUFRLENBQUMsRUFBRCxDQUhIO0FBQUEsTUFHbENDLFVBSGtDO0FBQUEsTUFHdEJDLGFBSHNCOztBQUt6Q0MseURBQVMsQ0FBQyxZQUFJO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixNQUFaLEVBQW1CQyxJQUFuQixFQUF3QkMsSUFBeEI7QUFDQUMsWUFBUSxDQUFDO0FBQ0hRLFVBQUksRUFBQ0MsaUVBREY7QUFFSEMsVUFBSSxFQUFDO0FBRkYsS0FBRCxDQUFSO0FBT0QsR0FUUSxFQVNQLEVBVE8sQ0FBVDs7QUFXQSxNQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFLO0FBQ2YsV0FBTztBQUFDQyxZQUFNO0FBQVAsS0FBUDtBQUlELEdBTEQ7O0FBT0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBSztBQUNoQixXQUFPO0FBQUNELFlBQU07QUFBUCxLQUFQO0FBQ0QsR0FGRDs7QUFPRSxTQUNDO0FBQUssU0FBSyxFQUFFO0FBQUNFLGFBQU8sRUFBQyxNQUFUO0FBQWdCQyxvQkFBYyxFQUFDLFFBQS9CO0FBQXdDQyxnQkFBVSxFQUFDO0FBQW5ELEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUssMkJBQXVCLEVBQUVMLEdBQUcsRUFBakM7QUFBcUMsU0FBSyxFQUFFLEVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxDQUREO0FBTUgsQ0FwQ0Q7O0dBQU1mLFU7VUFFYUssdUQ7OztBQXFDbkJMLFVBQVUsQ0FBQ3FCLGVBQVg7QUFBQSwrTEFBNkIsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXJCTCxnQkFGcUIsR0FFZEssT0FBTyxDQUFDQyxLQUFSLENBQWNDLEdBRkE7QUFJM0JkLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW9CTSxJQUFwQjtBQUoyQiw2Q0FNcEI7QUFBQ0Esa0JBQUksRUFBSkE7QUFBRCxhQU5vQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXZWpCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkZXRhaWxQYWdlLmpzLmM2YjI0YzZkNDAwM2QwZmYzOWUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgXHJcbiAgICB7REVUQUlMX0lORk9fUkVRVUVTVCx9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9lbXAnOyBcclxuXHJcblxyXG5cclxuY29uc3QgZGV0YWlsUGFnZSAgPSAoe3Bvc3RJZCxuaWNrLGZsYWd9KSA9PntcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICBjb25zdCBbZGV0YWlsSW5mbywgc2V0RGV0YWlsSW5mb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhwb3N0SWQsbmljayxmbGFnKTsgXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOkRFVEFJTF9JTkZPX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgfSxbXSk7IFxyXG5cclxuICBjb25zdCBhYmMgPSAoKSA9PntcclxuICAgIHJldHVybiB7X19odG1sOmBcclxuICAgIDxwPuq1v+uqqOuLnSDsnoXri4jri6QuPC9wPlxyXG4gICAgPGZpZ3VyZSBjbGFzcz1cImltYWdlXCI+PGltZyBzcmM9XCJodHRwOi8vbG9jYWxob3N0OjMwOTUvcGljdHVyZVRlc3QxNTk5NzI1NTEyNDMxLmpwZ1wiIGFsdD1cIuOEtOOEuVwiPjwvZmlndXJlPlxyXG4gICAgYH07XHJcbiAgfSBcclxuXHJcbiAgY29uc3QgdGVzdCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHtfX2h0bWw6YDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiM1MkQ0RkY7d2lkdGg6IDEwMHB4O2hlaWdodDogMTAwcHg7bWFyZ2luOmF1dG87cGFkZGluZzoxMHB4OyBib3JkZXI6IDNweCBzb2xpZCAjNzNBRDIxO1wiPmE8L2Rpdj5gfTtcclxuICB9IFxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXthYmMoKX0gc3R5bGU9e3t9fT48L2Rpdj5cclxuICAgIDwvZGl2PiAgICAgICAgIFxyXG5cclxuICAgICAgICApXHJcbn1cclxuXHJcblxyXG5kZXRhaWxQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PntcclxuXHJcbiAgY29uc3QgdGVzdCA9IGNvbnRleHQucXVlcnkudGFnOyBcclxuICBcclxuICBjb25zb2xlLmxvZygndGFnJyAsIHRlc3QpOyBcclxuXHJcbiAgcmV0dXJuIHt0ZXN0fTsgXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGV0YWlsUGFnZTsgIl0sInNvdXJjZVJvb3QiOiIifQ==