webpackHotUpdate("static\\development\\pages\\join.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false,

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
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
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
  }

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordErr(true);
    }

    dispatch({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["JOIN_REQUEST"],
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
      lineNumber: 87,
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
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 96,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 100,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 104,
      columnNumber: 33
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, passwordErr && __jsx("div", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 45
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4.")), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
      lineNumber: 111,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 115,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 119,
      columnNumber: 29
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: onSubmit,
    loading: isJoinng,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9qb2luLmpzIl0sIm5hbWVzIjpbIkpvaW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJpc0pvaW5uZyIsImpvaW5lZCIsInVzZVN0YXRlIiwiaWQiLCJzZXRJZCIsIm5pY2tOYW1lIiwic2V0Tmlja05hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZW1haWwiLCJzZXRFbWFpbCIsInBob25lIiwic2V0UGhvbmUiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInBhc3N3b3JkQ2hlY2siLCJzZXRQYXNzd29yZENoZWNrIiwicGFzc3dvcmRFcnIiLCJzZXRQYXNzd29yZEVyciIsImFsZXJ0IiwiUm91dGVyIiwicHVzaCIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiSk9JTl9SRVFVRVNUIiwiZGF0YSIsIm5pY2tuYW1lIiwib25DaGFuZ2VJZCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VOaWNrTmFtZSIsIm9uQ2hhbmdQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsIm9uQ2hhbmdlRW1haWwiLCJvbkNoYW5nZVBob25lIiwib25DaGFuZ2VBZGRyZXNzIiwibWFyZ2luVG9wIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFJO0FBQUE7O0FBRWIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGYSxxQkFHZUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUgxQjtBQUFBLE1BR05DLFFBSE0sZ0JBR05BLFFBSE07QUFBQSxNQUdLQyxNQUhMLGdCQUdLQSxNQUhMOztBQUFBLGtC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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBcENKLENBREEsQ0FEUjtBQTRDSCxDQXZIRDs7R0FBTU4sSTtVQUVlRSx1RCxFQUNXQyx1RDs7O0tBSDFCSCxJO0FBeUhTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcam9pbi5qcy5hZGUzNzlhYzQxODBjYTgwOTk1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJzsgXHJcbmltcG9ydCBcclxuICAgIHtKT0lOX1JFUVVFU1QsfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvYXV0aCc7IFxyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCdcclxuXHJcblxyXG5jb25zdCBKb2luID0gKCk9PntcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gICAgY29uc3Qge2lzSm9pbm5nICwgam9pbmVkfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmF1dGgpOyBcclxuXHJcbiAgICBjb25zdCBbaWQsc2V0SWRdID0gdXNlU3RhdGUoJycpOyBcclxuICAgIGNvbnN0IFtuaWNrTmFtZSwgc2V0Tmlja05hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZW1haWwsc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoJycpOyBcclxuICAgIGNvbnN0IFtwYXNzd29yZEVycixzZXRQYXNzd29yZEVycl0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG5cclxuICAgIGlmKGpvaW5lZCl7XHJcbiAgICAgICAgYWxlcnQoam9pbmVkKTsgXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpOyBcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spe1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNldFBhc3N3b3JkRXJyKHRydWUpOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOkpPSU5fUkVRVUVTVCwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOmlkLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6bmlja05hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDpwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6ZW1haWwsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZTpwaG9uZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6YWRkcmVzcywgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxbaWQsbmlja05hbWUscGFzc3dvcmQsZW1haWwsYWRkcmVzc10pOyBcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTsgXHJcbiAgICB9LFtpZF0pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VOaWNrTmFtZSA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIHNldE5pY2tOYW1lKGUudGFyZ2V0LnZhbHVlKTsgXHJcbiAgICB9LFtuaWNrTmFtZV0pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ1Bhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpOyBcclxuICAgIH0sW3Bhc3N3b3JkXSlcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBzZXRQYXNzd29yZEVycihlLnRhcmdldC52YWx1ZSAhPT0gcGFzc3dvcmQpOyBcclxuICAgICAgICBzZXRQYXNzd29yZENoZWNrKGUudGFyZ2V0LnZhbHVlKTsgXHJcbiAgICB9LFtwYXNzd29yZENoZWNrXSlcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUVtYWlsID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpOyBcclxuICAgIH0sW2VtYWlsXSlcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBob25lID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpOyBcclxuXHJcbiAgICB9LFtwaG9uZV0pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VBZGRyZXNzID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSk7IFxyXG4gICAgfSxbYWRkcmVzc10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGUnIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7JWE7J2065SUOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpZFwiIHZhbHVlPXtpZH0gb25DaGFuZ2U9e29uQ2hhbmdlSWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+64uJ64Sk7J6EOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuaWNrbmFtZVwiIHZhbHVlPXtuaWNrTmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlTmlja05hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuu5hOuwgOuyiO2YuDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cIm5pY2tuYW1lXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17b25DaGFuZ1Bhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7ruYTrsIDrsojtmLjtmZXsnbg6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJuaWNrbmFtZVwiIHZhbHVlPXtwYXNzd29yZENoZWNrfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXNzd29yZEVyciAmJiA8ZGl2IHN0eWxlPXt7Y29sb3I6J3JlZCd9fT7ruYTrsIDrsojtmLjqsIAg64uk66aF64uI64ukLjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7J2066mU7J28OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj1cIkVYKSBhYWFAbmF2ZXIuY29tXCIgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7KCE7ZmU67KI7Zi4OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgdmFsdWU9e3Bob25lfSAgb25DaGFuZ2U9e29uQ2hhbmdlUGhvbmV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7KO87IaMOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkcmVzc1wiIHZhbHVlPXthZGRyZXNzfSAgb25DaGFuZ2U9e29uQ2hhbmdlQWRkcmVzc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0gbG9hZGluZz17aXNKb2lubmd9PuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvaW47ICJdLCJzb3VyY2VSb290IjoiIn0=