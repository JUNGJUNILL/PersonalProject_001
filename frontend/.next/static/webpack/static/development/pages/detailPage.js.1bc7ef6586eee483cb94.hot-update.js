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

  var nick = _ref.nick;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      detailInfo = _useState[0],
      setDetailInfo = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log('nick', nick);
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
            test = context.query.nick;
            console.log('nick', test);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIl0sIm5hbWVzIjpbImRldGFpbFBhZ2UiLCJuaWNrIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiZGV0YWlsSW5mbyIsInNldERldGFpbEluZm8iLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIkRFVEFJTF9JTkZPX1JFUVVFU1QiLCJkYXRhIiwiYWJjIiwiX19odG1sIiwidGVzdCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQU1BLElBQU1BLFVBQVUsR0FBSSxTQUFkQSxVQUFjLE9BQVc7QUFBQTs7QUFBQSxNQUFUQyxJQUFTLFFBQVRBLElBQVM7QUFFN0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGNkIsa0JBR09DLHNEQUFRLENBQUMsRUFBRCxDQUhmO0FBQUEsTUFHdEJDLFVBSHNCO0FBQUEsTUFHVkMsYUFIVTs7QUFLN0JDLHlEQUFTLENBQUMsWUFBSTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CUixJQUFwQjtBQUNBQyxZQUFRLENBQUM7QUFDSFEsVUFBSSxFQUFDQyxpRUFERjtBQUVIQyxVQUFJLEVBQUM7QUFGRixLQUFELENBQVI7QUFPRCxHQVRRLEVBU1AsRUFUTyxDQUFUOztBQVdBLE1BQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQUs7QUFDZixXQUFPO0FBQUNDLFlBQU07QUFBUCxLQUFQO0FBSUQsR0FMRDs7QUFPQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFLO0FBQ2hCLFdBQU87QUFBQ0QsWUFBTTtBQUFQLEtBQVA7QUFDRCxHQUZEOztBQU9FLFNBQ0M7QUFBSyxTQUFLLEVBQUU7QUFBQ0UsYUFBTyxFQUFDLE1BQVQ7QUFBZ0JDLG9CQUFjLEVBQUMsUUFBL0I7QUFBd0NDLGdCQUFVLEVBQUM7QUFBbkQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c7QUFBSywyQkFBdUIsRUFBRUwsR0FBRyxFQUFqQztBQUFxQyxTQUFLLEVBQUUsRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURILENBREQ7QUFNSCxDQXBDRDs7R0FBTWIsVTtVQUVhRyx1RDs7O0FBcUNuQkgsVUFBVSxDQUFDbUIsZUFBWDtBQUFBLCtMQUE2QixpQkFBT0MsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFckJMLGdCQUZxQixHQUVkSyxPQUFPLENBQUNDLEtBQVIsQ0FBY3BCLElBRkE7QUFJM0JPLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQXFCTSxJQUFyQjtBQUoyQiw2Q0FNcEI7QUFBQ0Esa0JBQUksRUFBSkE7QUFBRCxhQU5vQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXZWYseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRldGFpbFBhZ2UuanMuMWJjN2VmNjU4NmVlZTQ4M2NiOTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBcclxuICAgIHtERVRBSUxfSU5GT19SRVFVRVNULH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2VtcCc7IFxyXG5cclxuXHJcblxyXG5jb25zdCBkZXRhaWxQYWdlICA9ICh7bmlja30pID0+e1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gIGNvbnN0IFtkZXRhaWxJbmZvLCBzZXREZXRhaWxJbmZvXSA9IHVzZVN0YXRlKCcnKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnNvbGUubG9nKCduaWNrJywgbmljayk7IFxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTpERVRBSUxfSU5GT19SRVFVRVNULCBcclxuICAgICAgICAgIGRhdGE6e1xyXG5cclxuICAgICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIH0sW10pOyBcclxuXHJcbiAgY29uc3QgYWJjID0gKCkgPT57XHJcbiAgICByZXR1cm4ge19faHRtbDpgXHJcbiAgICA8cD7qtb/rqqjri50g7J6F64uI64ukLjwvcD5cclxuICAgIDxmaWd1cmUgY2xhc3M9XCJpbWFnZVwiPjxpbWcgc3JjPVwiaHR0cDovL2xvY2FsaG9zdDozMDk1L3BpY3R1cmVUZXN0MTU5OTcyNTUxMjQzMS5qcGdcIiBhbHQ9XCLjhLTjhLlcIj48L2ZpZ3VyZT5cclxuICAgIGB9O1xyXG4gIH0gXHJcblxyXG4gIGNvbnN0IHRlc3QgPSAoKSA9PntcclxuICAgIHJldHVybiB7X19odG1sOmA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDojNTJENEZGO3dpZHRoOiAxMDBweDtoZWlnaHQ6IDEwMHB4O21hcmdpbjphdXRvO3BhZGRpbmc6MTBweDsgYm9yZGVyOiAzcHggc29saWQgIzczQUQyMTtcIj5hPC9kaXY+YH07XHJcbiAgfSBcclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwifX0+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17YWJjKCl9IHN0eWxlPXt7fX0+PC9kaXY+XHJcbiAgICA8L2Rpdj4gICAgICAgICBcclxuXHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5cclxuZGV0YWlsUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT57XHJcblxyXG4gIGNvbnN0IHRlc3QgPSBjb250ZXh0LnF1ZXJ5Lm5pY2s7IFxyXG4gIFxyXG4gIGNvbnNvbGUubG9nKCduaWNrJyAsIHRlc3QpOyBcclxuXHJcbiAgcmV0dXJuIHt0ZXN0fTsgXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGV0YWlsUGFnZTsgIl0sInNvdXJjZVJvb3QiOiIifQ==