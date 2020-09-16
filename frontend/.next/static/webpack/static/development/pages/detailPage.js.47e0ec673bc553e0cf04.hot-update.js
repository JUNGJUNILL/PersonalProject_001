webpackHotUpdate("static\\development\\pages\\detailPage.js",{

/***/ "./pages/detailPage.js":
/*!*****************************!*\
  !*** ./pages/detailPage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_emp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/emp */ "./reducers/emp.js");
var _this = undefined,
    _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\detailPage.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var detailPage = function detailPage(_ref) {
  _s();

  var postId = _ref.postId,
      nick = _ref.nick,
      flag = _ref.flag;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      detailInfo = _useState[0],
      setDetailInfo = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(postId, nick, flag);
    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_2__["DETAIL_INFO_REQUEST"],
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
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIl0sIm5hbWVzIjpbImRldGFpbFBhZ2UiLCJwb3N0SWQiLCJuaWNrIiwiZmxhZyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImRldGFpbEluZm8iLCJzZXREZXRhaWxJbmZvIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJERVRBSUxfSU5GT19SRVFVRVNUIiwiZGF0YSIsImFiYyIsIl9faHRtbCIsInRlc3QiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFNQSxJQUFNQSxVQUFVLEdBQUksU0FBZEEsVUFBYyxPQUF1QjtBQUFBOztBQUFBLE1BQXJCQyxNQUFxQixRQUFyQkEsTUFBcUI7QUFBQSxNQUFkQyxJQUFjLFFBQWRBLElBQWM7QUFBQSxNQUFUQyxJQUFTLFFBQVRBLElBQVM7QUFFekMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGeUMsa0JBR0xDLHNEQUFRLENBQUMsRUFBRCxDQUhIO0FBQUEsTUFHbENDLFVBSGtDO0FBQUEsTUFHdEJDLGFBSHNCOztBQUt6Q0MseURBQVMsQ0FBQyxZQUFJO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixNQUFaLEVBQW1CQyxJQUFuQixFQUF3QkMsSUFBeEI7QUFDQUMsWUFBUSxDQUFDO0FBQ0hRLFVBQUksRUFBQ0MsaUVBREY7QUFFSEMsVUFBSSxFQUFDO0FBRkYsS0FBRCxDQUFSO0FBT0QsR0FUUSxFQVNQLEVBVE8sQ0FBVDs7QUFXQSxNQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFLO0FBQ2YsV0FBTztBQUFDQyxZQUFNO0FBQVAsS0FBUDtBQUlELEdBTEQ7O0FBT0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBSztBQUNoQixXQUFPO0FBQUNELFlBQU07QUFBUCxLQUFQO0FBQ0QsR0FGRDs7QUFPRSxTQUNDO0FBQUssU0FBSyxFQUFFO0FBQUNFLGFBQU8sRUFBQyxNQUFUO0FBQWdCQyxvQkFBYyxFQUFDLFFBQS9CO0FBQXdDQyxnQkFBVSxFQUFDO0FBQW5ELEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUssMkJBQXVCLEVBQUVMLEdBQUcsRUFBakM7QUFBcUMsU0FBSyxFQUFFLEVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxDQUREO0FBTUgsQ0FwQ0Q7O0dBQU1mLFU7VUFFYUssdUQ7OztBQXFDSkwseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRldGFpbFBhZ2UuanMuNDdlMGVjNjczYmM1NTNlMGNmMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBcclxuICAgIHtERVRBSUxfSU5GT19SRVFVRVNULH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2VtcCc7IFxyXG5cclxuXHJcblxyXG5jb25zdCBkZXRhaWxQYWdlICA9ICh7cG9zdElkLG5pY2ssZmxhZ30pID0+e1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gIGNvbnN0IFtkZXRhaWxJbmZvLCBzZXREZXRhaWxJbmZvXSA9IHVzZVN0YXRlKCcnKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnNvbGUubG9nKHBvc3RJZCxuaWNrLGZsYWcpOyBcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6REVUQUlMX0lORk9fUkVRVUVTVCwgXHJcbiAgICAgICAgICBkYXRhOntcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICB9LFtdKTsgXHJcblxyXG4gIGNvbnN0IGFiYyA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHtfX2h0bWw6YFxyXG4gICAgPHA+6rW/66qo64udIOyeheuLiOuLpC48L3A+XHJcbiAgICA8ZmlndXJlIGNsYXNzPVwiaW1hZ2VcIj48aW1nIHNyYz1cImh0dHA6Ly9sb2NhbGhvc3Q6MzA5NS9waWN0dXJlVGVzdDE1OTk3MjU1MTI0MzEuanBnXCIgYWx0PVwi44S044S5XCI+PC9maWd1cmU+XHJcbiAgICBgfTtcclxuICB9IFxyXG5cclxuICBjb25zdCB0ZXN0ID0gKCkgPT57XHJcbiAgICByZXR1cm4ge19faHRtbDpgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6IzUyRDRGRjt3aWR0aDogMTAwcHg7aGVpZ2h0OiAxMDBweDttYXJnaW46YXV0bztwYWRkaW5nOjEwcHg7IGJvcmRlcjogM3B4IHNvbGlkICM3M0FEMjE7XCI+YTwvZGl2PmB9O1xyXG4gIH0gXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2FiYygpfSBzdHlsZT17e319PjwvZGl2PlxyXG4gICAgPC9kaXY+ICAgICAgICAgXHJcblxyXG4gICAgICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRldGFpbFBhZ2U7ICJdLCJzb3VyY2VSb290IjoiIn0=