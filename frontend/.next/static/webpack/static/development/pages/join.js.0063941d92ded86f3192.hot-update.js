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

  if (joined) {
    alert(joined);
  }

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
      lineNumber: 85,
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
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, __jsx("div", {
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
  }, "\uC544\uC774\uB514:"), __jsx("input", {
    type: "text",
    name: "id",
    value: id,
    onChange: onChangeId,
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
  }, "\uB2C9\uB124\uC784:"), __jsx("input", {
    type: "text",
    name: "nickname",
    value: nickName,
    onChange: onChangeNickName,
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
  }, "\uBE44\uBC00\uBC88\uD638:"), __jsx("input", {
    type: "password",
    name: "nickname",
    value: password,
    onChange: onChangPassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 102,
      columnNumber: 33
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, passwordErr && __jsx("div", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 45
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4.")), __jsx("div", {
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
  }, "\uC774\uBA54\uC77C:"), __jsx("input", {
    type: "text",
    name: "email",
    value: email,
    placeholder: "EX) aaa@naver.com",
    onChange: onChangeEmail,
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
  }, "\uC804\uD654\uBC88\uD638:"), __jsx("input", {
    type: "text",
    name: "phone",
    value: phone,
    onChange: onChangePhone,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 117,
      columnNumber: 29
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onSubmit,
    loading: isJoinng,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9qb2luLmpzIl0sIm5hbWVzIjpbIkpvaW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJpc0pvaW5uZyIsImpvaW5lZCIsInVzZVN0YXRlIiwiaWQiLCJzZXRJZCIsIm5pY2tOYW1lIiwic2V0Tmlja05hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZW1haWwiLCJzZXRFbWFpbCIsInBob25lIiwic2V0UGhvbmUiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInBhc3N3b3JkQ2hlY2siLCJzZXRQYXNzd29yZENoZWNrIiwicGFzc3dvcmRFcnIiLCJzZXRQYXNzd29yZEVyciIsImFsZXJ0Iiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJKT0lOX1JFUVVFU1QiLCJkYXRhIiwibmlja25hbWUiLCJvbkNoYW5nZUlkIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZU5pY2tOYW1lIiwib25DaGFuZ1Bhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwib25DaGFuZ2VFbWFpbCIsIm9uQ2hhbmdlUGhvbmUiLCJvbkNoYW5nZUFkZHJlc3MiLCJtYXJnaW5Ub3AiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBSTtBQUFBOztBQUViLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRmEscUJBR2VDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBQU4sQ0FIMUI7QUFBQSxNQUdOQyxRQUhNLGdCQUdOQSxRQUhNO0FBQUEsTUFHS0MsTUFITCxnQkFHS0EsTUFITDs7QUFBQSxrQkFLTUMsc0RBQVEsQ0FBQyxFQUFELENBTGQ7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QUVlRSx1RCxFQUNXQyx1RDs7O0tBSDFCSCxJO0FBd0hTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcam9pbi5qcy4wMDYzOTQxZDkyZGVkODZmMzE5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgXHJcbiAgICB7Sk9JTl9SRVFVRVNULH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2F1dGgnOyBcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnXHJcblxyXG5cclxuY29uc3QgSm9pbiA9ICgpPT57XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICAgIGNvbnN0IHtpc0pvaW5uZyAsIGpvaW5lZH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKTsgXHJcblxyXG4gICAgY29uc3QgW2lkLHNldElkXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCBbbmlja05hbWUsIHNldE5pY2tOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VtYWlsLHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCBbcGFzc3dvcmRFcnIsc2V0UGFzc3dvcmRFcnJdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuXHJcbiAgICBpZihqb2luZWQpe1xyXG4gICAgICAgIGFsZXJ0KGpvaW5lZCk7IFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihwYXNzd29yZCAhPT0gcGFzc3dvcmRDaGVjayl7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2V0UGFzc3dvcmRFcnIodHJ1ZSk7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6Sk9JTl9SRVFVRVNULCBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6aWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTpuaWNrTmFtZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDplbWFpbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lOnBob25lLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczphZGRyZXNzLCBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFtpZCxuaWNrTmFtZSxwYXNzd29yZCxlbWFpbCxhZGRyZXNzXSk7IFxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSWQgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICAgICAgc2V0SWQoZS50YXJnZXQudmFsdWUpOyBcclxuICAgIH0sW2lkXSlcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZU5pY2tOYW1lID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0Tmlja05hbWUoZS50YXJnZXQudmFsdWUpOyBcclxuICAgIH0sW25pY2tOYW1lXSlcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7IFxyXG4gICAgfSxbcGFzc3dvcmRdKVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIHNldFBhc3N3b3JkRXJyKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7IFxyXG4gICAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpOyBcclxuICAgIH0sW3Bhc3N3b3JkQ2hlY2tdKVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlRW1haWwgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7IFxyXG4gICAgfSxbZW1haWxdKVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlUGhvbmUgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSk7IFxyXG5cclxuICAgIH0sW3Bob25lXSlcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUFkZHJlc3MgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBzZXRBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKTsgXHJcbiAgICB9LFthZGRyZXNzXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZScgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319ID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVCb2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7slYTsnbTrlJQ6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlkXCIgdmFsdWU9e2lkfSBvbkNoYW5nZT17b25DaGFuZ2VJZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7ri4nrhKTsnoQ6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5pY2tuYW1lXCIgdmFsdWU9e25pY2tOYW1lfSBvbkNoYW5nZT17b25DaGFuZ2VOaWNrTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+67mE67CA67KI7Zi4OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwibmlja25hbWVcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nUGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuu5hOuwgOuyiO2YuO2ZleyduDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cIm5pY2tuYW1lXCIgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bhc3N3b3JkRXJyICYmIDxkaXYgc3R5bGU9e3tjb2xvcjoncmVkJ319Puu5hOuwgOuyiO2YuOqwgCDri6TrpoXri4jri6QuPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7snbTrqZTsnbw6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IHBsYWNlaG9sZGVyPVwiRVgpIGFhYUBuYXZlci5jb21cIiBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7soITtmZTrsojtmLg6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIiB2YWx1ZT17cGhvbmV9ICBvbkNoYW5nZT17b25DaGFuZ2VQaG9uZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7so7zshow6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRyZXNzXCIgdmFsdWU9e2FkZHJlc3N9ICBvbkNoYW5nZT17b25DaGFuZ2VBZGRyZXNzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fSBsb2FkaW5nPXtpc0pvaW5uZ30+6rCA7J6F7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9pbjsgIl0sInNvdXJjZVJvb3QiOiIifQ==