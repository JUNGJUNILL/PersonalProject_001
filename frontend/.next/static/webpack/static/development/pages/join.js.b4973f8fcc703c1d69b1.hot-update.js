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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9qb2luLmpzIl0sIm5hbWVzIjpbIkpvaW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJpc0pvaW5uZyIsImpvaW5lZCIsInVzZVN0YXRlIiwiaWQiLCJzZXRJZCIsIm5pY2tOYW1lIiwic2V0Tmlja05hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZW1haWwiLCJzZXRFbWFpbCIsInBob25lIiwic2V0UGhvbmUiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInBhc3N3b3JkQ2hlY2siLCJzZXRQYXNzd29yZENoZWNrIiwicGFzc3dvcmRFcnIiLCJzZXRQYXNzd29yZEVyciIsImFsZXJ0IiwiUm91dGVyIiwicHVzaCIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiSk9JTl9SRVFVRVNUIiwiZGF0YSIsIm5pY2tuYW1lIiwib25DaGFuZ2VJZCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VOaWNrTmFtZSIsIm9uQ2hhbmdQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsIm9uQ2hhbmdlRW1haWwiLCJvbkNoYW5nZVBob25lIiwib25DaGFuZ2VBZGRyZXNzIiwibWFyZ2luVG9wIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFJO0FBQUE7O0FBRWIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGYSxxQkFHZUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUgxQjtBQUFBLE1BR05DLFFBSE0sZ0JBR05BLFFBSE07QUFBQSxNQUdLQyxNQUhMLGdCQUdLQSxNQUhMOztBQUFBLGtCQUtN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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQXBDSixDQURBLENBRFI7QUE0Q0gsQ0F2SEQ7O0dBQU1OLEk7VUFFZUUsdUQsRUFDV0MsdUQ7OztLQUgxQkgsSTtBQXlIU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGpvaW4uanMuYjQ5NzNmOGZjYzcwM2MxZDY5YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7IFxyXG5pbXBvcnQgXHJcbiAgICB7Sk9JTl9SRVFVRVNULH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2F1dGgnOyBcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnXHJcblxyXG5cclxuY29uc3QgSm9pbiA9ICgpPT57XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICAgIGNvbnN0IHtpc0pvaW5uZyAsIGpvaW5lZH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKTsgXHJcblxyXG4gICAgY29uc3QgW2lkLHNldElkXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCBbbmlja05hbWUsIHNldE5pY2tOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VtYWlsLHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCBbcGFzc3dvcmRFcnIsc2V0UGFzc3dvcmRFcnJdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuXHJcblxyXG4gICAgaWYoam9pbmVkKXtcclxuICAgICAgICBhbGVydChqb2luZWQpOyBcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7IFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKHBhc3N3b3JkICE9PSBwYXNzd29yZENoZWNrKXtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRQYXNzd29yZEVycih0cnVlKTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpKT0lOX1JFUVVFU1QsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDppZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOm5pY2tOYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6cGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOmVtYWlsLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6cGhvbmUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOmFkZHJlc3MsIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sW2lkLG5pY2tOYW1lLHBhc3N3b3JkLGVtYWlsLGFkZHJlc3NdKTsgXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7IFxyXG4gICAgfSxbaWRdKVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlTmlja05hbWUgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBzZXROaWNrTmFtZShlLnRhcmdldC52YWx1ZSk7IFxyXG4gICAgfSxbbmlja05hbWVdKVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdQYXNzd29yZCA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTsgXHJcbiAgICB9LFtwYXNzd29yZF0pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZENoZWNrID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0UGFzc3dvcmRFcnIoZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkKTsgXHJcbiAgICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSk7IFxyXG4gICAgfSxbcGFzc3dvcmRDaGVja10pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VFbWFpbCA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTsgXHJcbiAgICB9LFtlbWFpbF0pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VQaG9uZSA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIHNldFBob25lKGUudGFyZ2V0LnZhbHVlKTsgXHJcblxyXG4gICAgfSxbcGhvbmVdKVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlQWRkcmVzcyA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIHNldEFkZHJlc3MoZS50YXJnZXQudmFsdWUpOyBcclxuICAgIH0sW2FkZHJlc3NdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJyBzdHlsZT17e21hcmdpblRvcDonMyUnfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyVhOydtOuUlDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaWRcIiB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuuLieuEpOyehDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmlja25hbWVcIiB2YWx1ZT17bmlja05hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tOYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7ruYTrsIDrsojtmLg6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJuaWNrbmFtZVwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e29uQ2hhbmdQYXNzd29yZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+67mE67CA67KI7Zi47ZmV7J24OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwibmlja25hbWVcIiB2YWx1ZT17cGFzc3dvcmRDaGVja30gb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFzc3dvcmRFcnIgJiYgPGRpdiBzdHlsZT17e2NvbG9yOidyZWQnfX0+67mE67CA67KI7Zi46rCAIOuLpOumheuLiOuLpC48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuydtOuplOydvDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gcGxhY2Vob2xkZXI9XCJFWCkgYWFhQG5hdmVyLmNvbVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyghO2ZlOuyiO2YuDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaG9uZVwiIHZhbHVlPXtwaG9uZX0gIG9uQ2hhbmdlPXtvbkNoYW5nZVBob25lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyjvOyGjDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZHJlc3NcIiB2YWx1ZT17YWRkcmVzc30gIG9uQ2hhbmdlPXtvbkNoYW5nZUFkZHJlc3N9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25TdWJtaXR9IGxvYWRpbmc9e2lzSm9pbm5nfT7qsIDsnoXtlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2luOyAiXSwic291cmNlUm9vdCI6IiJ9