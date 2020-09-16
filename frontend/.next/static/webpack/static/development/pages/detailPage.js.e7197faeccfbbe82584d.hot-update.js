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
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");



var _this = undefined,
    _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\detailPage.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var detailPage = function detailPage(_ref) {
  _s();

  var nickName = _ref.nickName,
      postFlag = _ref.postFlag,
      postId = _ref.postId;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      detailInfo = _useState[0],
      setDetailInfo = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_DETAIL_INFO_REQUEST"],
      data: {
        nickName: nickName,
        postFlag: postFlag,
        postId: postId
      }
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
      lineNumber: 42,
      columnNumber: 6
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: abc(),
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }));
};

_s(detailPage, "eCxSH7HNer1lZQQ959fQOBobwHA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

detailPage.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var postId, nickName, postFlag;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            postId = context.query.postId;
            nickName = context.query.nickName;
            postFlag = context.query.postFlag;
            return _context.abrupt("return", {
              nickName: nickName,
              postFlag: postFlag,
              postId: postId
            });

          case 4:
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

/***/ }),

/***/ "./reducers/emp.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIl0sIm5hbWVzIjpbImRldGFpbFBhZ2UiLCJuaWNrTmFtZSIsInBvc3RGbGFnIiwicG9zdElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiZGV0YWlsSW5mbyIsInNldERldGFpbEluZm8iLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCIsImRhdGEiLCJhYmMiLCJfX2h0bWwiLCJ0ZXN0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBTUEsSUFBTUEsVUFBVSxHQUFJLFNBQWRBLFVBQWMsT0FBK0I7QUFBQTs7QUFBQSxNQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsTUFBcEJDLFFBQW9CLFFBQXBCQSxRQUFvQjtBQUFBLE1BQVhDLE1BQVcsUUFBWEEsTUFBVztBQUVqRCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZpRCxrQkFHYkMsc0RBQVEsQ0FBQyxFQUFELENBSEs7QUFBQSxNQUcxQ0MsVUFIMEM7QUFBQSxNQUc5QkMsYUFIOEI7O0FBS2pEQyx5REFBUyxDQUFDLFlBQUk7QUFDWkwsWUFBUSxDQUFDO0FBQ0hNLFVBQUksRUFBQ0MsMkZBREY7QUFFSEMsVUFBSSxFQUFDO0FBQ0hYLGdCQUFRLEVBQVJBLFFBREc7QUFFSEMsZ0JBQVEsRUFBUkEsUUFGRztBQUdIQyxjQUFNLEVBQU5BO0FBSEc7QUFGRixLQUFELENBQVI7QUFTRCxHQVZRLEVBVVAsRUFWTyxDQUFUOztBQVlBLE1BQU1VLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQUs7QUFDZixXQUFPO0FBQUNDLFlBQU07QUFBUCxLQUFQO0FBSUQsR0FMRDs7QUFPQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFLO0FBQ2hCLFdBQU87QUFBQ0QsWUFBTTtBQUFQLEtBQVA7QUFDRCxHQUZEOztBQU9FLFNBQ0M7QUFBSyxTQUFLLEVBQUU7QUFBQ0UsYUFBTyxFQUFDLE1BQVQ7QUFBZ0JDLG9CQUFjLEVBQUMsUUFBL0I7QUFBd0NDLGdCQUFVLEVBQUM7QUFBbkQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c7QUFBSywyQkFBdUIsRUFBRUwsR0FBRyxFQUFqQztBQUFxQyxTQUFLLEVBQUUsRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURILENBREQ7QUFNSCxDQXJDRDs7R0FBTWIsVTtVQUVhSyx1RDs7O0FBc0NuQkwsVUFBVSxDQUFDbUIsZUFBWDtBQUFBLCtMQUE2QixpQkFBT0MsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckJqQixrQkFEcUIsR0FDVmlCLE9BQU8sQ0FBQ0MsS0FBUixDQUFjbEIsTUFESjtBQUVyQkYsb0JBRnFCLEdBRVZtQixPQUFPLENBQUNDLEtBQVIsQ0FBY3BCLFFBRko7QUFHckJDLG9CQUhxQixHQUdWa0IsT0FBTyxDQUFDQyxLQUFSLENBQWNuQixRQUhKO0FBQUEsNkNBS3BCO0FBQUNELHNCQUFRLEVBQVJBLFFBQUQ7QUFBVUMsc0JBQVEsRUFBUkEsUUFBVjtBQUFtQkMsb0JBQU0sRUFBTkE7QUFBbkIsYUFMb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWVILHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkZXRhaWxQYWdlLmpzLmU3MTk3ZmFlY2NmYmJlODI1ODRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgXHJcbiAgICB7TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCx9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMSc7IFxyXG5cclxuXHJcblxyXG5jb25zdCBkZXRhaWxQYWdlICA9ICh7bmlja05hbWUscG9zdEZsYWcscG9zdElkfSkgPT57XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTsgXHJcbiAgY29uc3QgW2RldGFpbEluZm8sIHNldERldGFpbEluZm9dID0gdXNlU3RhdGUoJycpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNULCBcclxuICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgIHBvc3RJZFxyXG4gICAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgfSxbXSk7IFxyXG5cclxuICBjb25zdCBhYmMgPSAoKSA9PntcclxuICAgIHJldHVybiB7X19odG1sOmBcclxuICAgIDxwPuq1v+uqqOuLnSDsnoXri4jri6QuPC9wPlxyXG4gICAgPGZpZ3VyZSBjbGFzcz1cImltYWdlXCI+PGltZyBzcmM9XCJodHRwOi8vbG9jYWxob3N0OjMwOTUvcGljdHVyZVRlc3QxNTk5NzI1NTEyNDMxLmpwZ1wiIGFsdD1cIuOEtOOEuVwiPjwvZmlndXJlPlxyXG4gICAgYH07XHJcbiAgfSBcclxuXHJcbiAgY29uc3QgdGVzdCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHtfX2h0bWw6YDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiM1MkQ0RkY7d2lkdGg6IDEwMHB4O2hlaWdodDogMTAwcHg7bWFyZ2luOmF1dG87cGFkZGluZzoxMHB4OyBib3JkZXI6IDNweCBzb2xpZCAjNzNBRDIxO1wiPmE8L2Rpdj5gfTtcclxuICB9IFxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXthYmMoKX0gc3R5bGU9e3t9fT48L2Rpdj5cclxuICAgIDwvZGl2PiAgICAgICAgIFxyXG5cclxuICAgICAgICApXHJcbn1cclxuXHJcblxyXG5kZXRhaWxQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PntcclxuICBjb25zdCBwb3N0SWQgICA9IGNvbnRleHQucXVlcnkucG9zdElkOyBcclxuICBjb25zdCBuaWNrTmFtZSA9IGNvbnRleHQucXVlcnkubmlja05hbWU7IFxyXG4gIGNvbnN0IHBvc3RGbGFnID0gY29udGV4dC5xdWVyeS5wb3N0RmxhZzsgXHJcbiAgXHJcbiAgcmV0dXJuIHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWR9OyBcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWxQYWdlOyAiXSwic291cmNlUm9vdCI6IiJ9