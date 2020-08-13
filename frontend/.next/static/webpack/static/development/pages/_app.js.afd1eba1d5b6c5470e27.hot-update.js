webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/authSaga.js":
/*!***************************!*\
  !*** ./sagas/authSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return authSag; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaLoadUser),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUser),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaJoin),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchJoin),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaLogOut),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaLogin),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(authSag);




 //유저정보 유지 사이클 
//------------------------------------------------------------------------

function APILoadUser() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/auth/', {
    withCredentials: true
  });
}

_c = APILoadUser;

function sagaLoadUser() {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaLoadUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APILoadUser);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOAD_USER_SUCCESS"],
            data: result.data.nick
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error('LOAD_USER_FAILURE=>', _context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOAD_USER_FAILURE"],
            error: _context.t0
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function watchLoadUser() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOAD_USER_REQUEST"], sagaLoadUser);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
} //------------------------------------------------------------------------
//회원가입 사이클 
//------------------------------------------------------------------------


function APIJoin(data) {
  console.log('data==>', data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/join', {
    data: data
  }, {
    withCredentials: true
  });
}

_c2 = APIJoin;

function sagaJoin(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaJoin$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          console.log(action, action.data);
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APIJoin, action.data);

        case 4:
          result = _context3.sent;
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__["JOIN_SUCCESS"],
            data: result
          });

        case 7:
          _context3.next = 14;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__["JOIN_FAILURE"],
            error: _context3.t0
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function watchJoin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchJoin$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_4__["JOIN_REQUEST"], sagaJoin);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
} //------------------------------------------------------------------------
//로그아웃 사이클
//------------------------------------------------------------------------


function APILogOut(data) {
  //jwt 로그인
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/auth/logOut', {
    withCredentials: true
  }); //passport local 로그인
  //return axios.post('/auth/login',data,{withCredentials:true});
}

_c3 = APILogOut;

function sagaLogOut() {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaLogOut$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APILogOut);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_SUCCESS"]
          });

        case 6:
          _context5.next = 13;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          alert('로그아웃 에러');
          _context5.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_FAILURE"],
            error: _context5.t0
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_REQUEST"], sagaLogOut);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
} //------------------------------------------------------------------------
//로그인 사이클
//------------------------------------------------------------------------


function APILogin(data) {
  //jwt 로그인
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/login', {
    data: data
  }, {
    withCredentials: true
  }); //passport local 로그인
  //return axios.post('/auth/login',data,{withCredentials:true});
}

_c4 = APILogin;

function sagaLogin(action) {
  var result, decoded;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaLogin$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APILogin, action.data);

        case 3:
          result = _context7.sent;
          console.log('result', result.data.token);
          decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(result.data.token);
          _context7.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOGIN_SUCCESS"],
            data: decoded.nick
          });

        case 8:
          _context7.next = 15;
          break;

        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          alert('로그인 에러');
          _context7.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOGIN_FAILURE"],
            error: _context7.t0
          });

        case 15:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 10]]);
}

function watchLogin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOGIN_REQUEST"], sagaLogin);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
} //------------------------------------------------------------------------


function authSag() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function authSag$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchJoin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchLogOut)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "APILoadUser");
$RefreshReg$(_c2, "APIJoin");
$RefreshReg$(_c3, "APILogOut");
$RefreshReg$(_c4, "APILogin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9hdXRoU2FnYS5qcyJdLCJuYW1lcyI6WyJzYWdhTG9hZFVzZXIiLCJ3YXRjaExvYWRVc2VyIiwic2FnYUpvaW4iLCJ3YXRjaEpvaW4iLCJzYWdhTG9nT3V0Iiwid2F0Y2hMb2dPdXQiLCJzYWdhTG9naW4iLCJ3YXRjaExvZ2luIiwiYXV0aFNhZyIsIkFQSUxvYWRVc2VyIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkxPQURfVVNFUl9TVUNDRVNTIiwiZGF0YSIsIm5pY2siLCJjb25zb2xlIiwiZXJyb3IiLCJMT0FEX1VTRVJfRkFJTFVSRSIsInRha2VFdmVyeSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiQVBJSm9pbiIsImxvZyIsInBvc3QiLCJhY3Rpb24iLCJKT0lOX1NVQ0NFU1MiLCJKT0lOX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiSk9JTl9SRVFVRVNUIiwiQVBJTG9nT3V0IiwiTE9HT1VUX1NVQ0NFU1MiLCJhbGVydCIsIkxPR09VVF9GQUlMVVJFIiwiTE9HT1VUX1JFUVVFU1QiLCJBUElMb2dpbiIsInRva2VuIiwiZGVjb2RlZCIsImp3dERlQ29kZXIiLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTFVSRSIsIkxPR0lOX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQTJCVUEsWTttR0FvQkFDLGE7bUdBbUJBQyxRO21HQXdCQUMsUzttR0FtQkFDLFU7bUdBcUJBQyxXO21HQWlCQUMsUzttR0F3QkFDLFU7bUdBTWVDLE87O0FBakx6QjtBQUNBO0FBQ0E7Q0FrQkE7QUFDQTs7QUFDQSxTQUFTQyxXQUFULEdBQXNCO0FBRWxCLFNBQU9DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxRQUFWLEVBQXFCO0FBQUNDLG1CQUFlLEVBQUM7QUFBakIsR0FBckIsQ0FBUDtBQUNIOztLQUhRSCxXOztBQUtU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aUJBQUs7QUFGQyxXQUFELENBQVQ7O0FBakJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXdCQSxTQUFVZCxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNZ0Isb0VBQVMsQ0FBQ3FCLDREQUFELEVBQWV0QyxTQUFmLENBQWY7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQUdBOzs7QUFHZSxTQUFVRSxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdYLGlCQUFNcUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDM0MsU0FBRCxDQURFLEVBRU4yQywrREFBSSxDQUFDdkMsVUFBRCxDQUZFLEVBR051QywrREFBSSxDQUFDN0MsYUFBRCxDQUhFLEVBSU42QywrREFBSSxDQUFDekMsV0FBRCxDQUpFLENBQUQsQ0FBVDs7QUFIVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5hZmQxZWJhMWQ1YjZjNTQ3MGUyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgand0RGVDb2RlciBmcm9tICdqd3QtZGVjb2RlJ1xyXG5pbXBvcnQge2FsbCxmb3JrLHRha2VMYXRlc3QsdGFrZUV2ZXJ5ICxwdXQsIGRlbGF5LGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7IFxyXG5pbXBvcnQgXHJcbiAgICB7Sk9JTl9SRVFVRVNULFxyXG4gICAgIEpPSU5fU1VDQ0VTUyxcclxuICAgICBKT0lOX0ZBSUxVUkUsXHJcbiAgICAgTE9HSU5fUkVRVUVTVCxcclxuICAgICBMT0dJTl9TVUNDRVNTLFxyXG4gICAgIExPR0lOX0ZBSUxVUkUsIFxyXG4gICAgIExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgIExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgIExPR09VVF9SRVFVRVNULFxyXG4gICAgIExPR09VVF9TVUNDRVNTLFxyXG4gICAgIExPR09VVF9GQUlMVVJFLFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvYXV0aCc7IFxyXG5cclxuXHJcbi8v7Jyg7KCA7KCV67O0IOycoOyngCDsgqzsnbTtgbQgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSUxvYWRVc2VyKCl7XHJcblxyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL2F1dGgvJyAsIHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pOyBcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FMb2FkVXNlcigpe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSUxvYWRVc2VyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpMT0FEX1VTRVJfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5uaWNrLCAgICAgICAgICAgXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdMT0FEX1VTRVJfRkFJTFVSRT0+JyAsIGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjplLCBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KExPQURfVVNFUl9SRVFVRVNULHNhZ2FMb2FkVXNlcik7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcbi8v7ZqM7JuQ6rCA7J6FIOyCrOydtO2BtCBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJSm9pbihkYXRhKXtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhPT0+JyAsIGRhdGEpOyBcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9qb2luJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSk7IFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FKb2luKGFjdGlvbil7XHJcbiAgICBcclxuICAgIHRyeXtcclxuICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJSm9pbixhY3Rpb24uZGF0YSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Sk9JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQsXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkpPSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6ZSwgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoSm9pbigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChKT0lOX1JFUVVFU1Qsc2FnYUpvaW4pXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcbi8v66Gc6re47JWE7JuDIOyCrOydtO2BtFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUElMb2dPdXQoZGF0YSl7XHJcblxyXG4gICAgLy9qd3Qg66Gc6re47J24XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvYXV0aC9sb2dPdXQnLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG5cclxuICAgIC8vcGFzc3BvcnQgbG9jYWwg66Gc6re47J24XHJcbiAgICAvL3JldHVybiBheGlvcy5wb3N0KCcvYXV0aC9sb2dpbicsZGF0YSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FMb2dPdXQoKXtcclxuXHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSAgIHlpZWxkIGNhbGwoQVBJTG9nT3V0KTsgXHJcbiAgICBcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dPVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTsgXHJcblxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICBhbGVydCgn66Gc6re47JWE7JuDIOyXkOufrCcpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR09VVF9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6ZSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HT1VUX1JFUVVFU1Qsc2FnYUxvZ091dCk7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy/roZzqt7jsnbgg7IKs7J207YG0XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSUxvZ2luKGRhdGEpe1xyXG5cclxuICAgIC8vand0IOuhnOq3uOyduFxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL2xvZ2luJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcblxyXG4gICAgLy9wYXNzcG9ydCBsb2NhbCDroZzqt7jsnbhcclxuICAgIC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL2xvZ2luJyxkYXRhLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2FnYUxvZ2luKGFjdGlvbil7XHJcblxyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSUxvZ2luLGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCcgLCByZXN1bHQuZGF0YS50b2tlbik7IFxyXG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSBqd3REZUNvZGVyKHJlc3VsdC5kYXRhLnRva2VuKTsgXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogZGVjb2RlZC5uaWNrLFxyXG4gICAgICAgIH0pOyBcclxuXHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG4gICAgICAgIGFsZXJ0KCfroZzqt7jsnbgg7JeQ65+sJyk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HSU5fRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOmUsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0dJTl9SRVFVRVNULHNhZ2FMb2dpbik7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGF1dGhTYWcoKXtcclxuXHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoSm9pbiksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dpbiksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkVXNlciksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLCBcclxuICAgICAgICBcclxuICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9