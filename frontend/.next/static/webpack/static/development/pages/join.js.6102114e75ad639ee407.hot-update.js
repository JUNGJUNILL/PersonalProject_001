webpackHotUpdate("static\\development\\pages\\join.js",{

/***/ "./pages/join.js":
/*!***********************!*\
  !*** ./pages/join.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\pages\\join.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Join = function Join() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth;
  }),
      isJoinng = _useSelector.isJoinng,
      joined = _useSelector.joined;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      nickName = _useState2[0],
      setNickName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      phone = _useState5[0],
      setPhone = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      address = _useState6[0],
      setAddress = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      passwordCheck = _useState7[0],
      setPasswordCheck = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      passwordErr = _useState8[0],
      setPasswordErr = _useState8[1];

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordErr(true);
    }

    dispatch({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_2__["JOIN_REQUEST"],
      data: {
        id: id,
        nickname: nickName,
        password: password,
        email: email,
        phone: phone,
        address: address
      }
    });
  }, [id, nickName, password, email, address]);
  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setId(e.target.value);
  }, [id]);
  var onChangeNickName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setNickName(e.target.value);
  }, [nickName]);
  var onChangPassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, [password]);
  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setPasswordErr(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [passwordCheck]);
  var onChangeEmail = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setEmail(e.target.value);
  }, [email]);
  var onChangePhone = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setPhone(e.target.value);
  }, [phone]);
  var onChangeAddress = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setAddress(e.target.value);
  }, [address]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divTable",
    style: {
      marginTop: '3%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, "\uC544\uC774\uB514:"), __jsx("input", {
    type: "text",
    name: "id",
    value: id,
    onChange: onChangeId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  }, "\uB2C9\uB124\uC784:"), __jsx("input", {
    type: "text",
    name: "nickname",
    value: nickName,
    onChange: onChangeNickName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  }, "\uBE44\uBC00\uBC88\uD638:"), __jsx("input", {
    type: "password",
    name: "nickname",
    value: password,
    onChange: onChangPassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, "\uBE44\uBC00\uBC88\uD638\uD655\uC778:"), __jsx("input", {
    type: "password",
    name: "nickname",
    value: passwordCheck,
    onChange: onChangePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, passwordErr && __jsx("div", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 45
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4.")), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 33
    }
  }, "\uC774\uBA54\uC77C:"), __jsx("input", {
    type: "text",
    name: "email",
    value: email,
    placeholder: "EX) aaa@naver.com",
    onChange: onChangeEmail,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 33
    }
  }, "\uC804\uD654\uBC88\uD638:"), __jsx("input", {
    type: "text",
    name: "phone",
    value: phone,
    onChange: onChangePhone,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, "\uC8FC\uC18C:"), __jsx("input", {
    type: "text",
    name: "adress",
    value: address,
    onChange: onChangeAddress,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onSubmit,
    loading: isJoinng,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, "\uAC00\uC785\uD558\uAE30")));
};

_s(Join, "bi39ljgPugEZi3MFLZOR1IocR1I=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Join;
/* harmony default export */ __webpack_exports__["default"] = (Join);

var _c;

$RefreshReg$(_c, "Join");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9qb2luLmpzIl0sIm5hbWVzIjpbIkpvaW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJpc0pvaW5uZyIsImpvaW5lZCIsInVzZVN0YXRlIiwiaWQiLCJzZXRJZCIsIm5pY2tOYW1lIiwic2V0Tmlja05hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZW1haWwiLCJzZXRFbWFpbCIsInBob25lIiwic2V0UGhvbmUiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInBhc3N3b3JkQ2hlY2siLCJzZXRQYXNzd29yZENoZWNrIiwicGFzc3dvcmRFcnIiLCJzZXRQYXNzd29yZEVyciIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiSk9JTl9SRVFVRVNUIiwiZGF0YSIsIm5pY2tuYW1lIiwib25DaGFuZ2VJZCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VOaWNrTmFtZSIsIm9uQ2hhbmdQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsIm9uQ2hhbmdlRW1haWwiLCJvbkNoYW5nZVBob25lIiwib25DaGFuZ2VBZGRyZXNzIiwibWFyZ2luVG9wIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQUk7QUFBQTs7QUFFYixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZhLHFCQUdlQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBSDFCO0FBQUEsTUFHTkMsUUFITSxnQkFHTkEsUUFITTtBQUFBLE1BR0tDLE1BSEwsZ0JBR0tBLE1BSEw7O0FBQUEsa0JBS01DLHNEQUFRLENBQUMsRUFBRCxDQUxkO0FBQUEsTUFL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aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcam9pbi5qcy42MTAyMTE0ZTc1YWQ2MzllZTQwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgXHJcbiAgICB7Sk9JTl9SRVFVRVNULH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2F1dGgnOyBcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnXHJcblxyXG5cclxuY29uc3QgSm9pbiA9ICgpPT57XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICAgIGNvbnN0IHtpc0pvaW5uZyAsIGpvaW5lZH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKTsgXHJcblxyXG4gICAgY29uc3QgW2lkLHNldElkXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCBbbmlja05hbWUsIHNldE5pY2tOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VtYWlsLHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCBbcGFzc3dvcmRFcnIsc2V0UGFzc3dvcmRFcnJdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spe1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNldFBhc3N3b3JkRXJyKHRydWUpOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOkpPSU5fUkVRVUVTVCwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOmlkLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6bmlja05hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDpwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6ZW1haWwsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZTpwaG9uZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6YWRkcmVzcywgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxbaWQsbmlja05hbWUscGFzc3dvcmQsZW1haWwsYWRkcmVzc10pOyBcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTsgXHJcbiAgICB9LFtpZF0pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VOaWNrTmFtZSA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIHNldE5pY2tOYW1lKGUudGFyZ2V0LnZhbHVlKTsgXHJcbiAgICB9LFtuaWNrTmFtZV0pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ1Bhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpOyBcclxuICAgIH0sW3Bhc3N3b3JkXSlcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBzZXRQYXNzd29yZEVycihlLnRhcmdldC52YWx1ZSAhPT0gcGFzc3dvcmQpOyBcclxuICAgICAgICBzZXRQYXNzd29yZENoZWNrKGUudGFyZ2V0LnZhbHVlKTsgXHJcbiAgICB9LFtwYXNzd29yZENoZWNrXSlcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUVtYWlsID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpOyBcclxuICAgIH0sW2VtYWlsXSlcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBob25lID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpOyBcclxuXHJcbiAgICB9LFtwaG9uZV0pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VBZGRyZXNzID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSk7IFxyXG4gICAgfSxbYWRkcmVzc10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGUnIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7JWE7J2065SUOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpZFwiIHZhbHVlPXtpZH0gb25DaGFuZ2U9e29uQ2hhbmdlSWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+64uJ64Sk7J6EOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuaWNrbmFtZVwiIHZhbHVlPXtuaWNrTmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlTmlja05hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuu5hOuwgOuyiO2YuDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cIm5pY2tuYW1lXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17b25DaGFuZ1Bhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7ruYTrsIDrsojtmLjtmZXsnbg6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJuaWNrbmFtZVwiIHZhbHVlPXtwYXNzd29yZENoZWNrfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXNzd29yZEVyciAmJiA8ZGl2IHN0eWxlPXt7Y29sb3I6J3JlZCd9fT7ruYTrsIDrsojtmLjqsIAg64uk66aF64uI64ukLjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7J2066mU7J28OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj1cIkVYKSBhYWFAbmF2ZXIuY29tXCIgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7KCE7ZmU67KI7Zi4OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgdmFsdWU9e3Bob25lfSAgb25DaGFuZ2U9e29uQ2hhbmdlUGhvbmV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7KO87IaMOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkcmVzc1wiIHZhbHVlPXthZGRyZXNzfSAgb25DaGFuZ2U9e29uQ2hhbmdlQWRkcmVzc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0gbG9hZGluZz17aXNKb2lubmd9PuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvaW47ICJdLCJzb3VyY2VSb290IjoiIn0=