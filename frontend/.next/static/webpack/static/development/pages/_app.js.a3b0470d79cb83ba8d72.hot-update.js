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
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaLogin),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(authSag);




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
            data: result.data
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

_c3 = APILogin;

function sagaLogin(action) {
  var result, decoded;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaLogin$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APILogin, action.data);

        case 3:
          result = _context5.sent;
          console.log('result', result.data.token);
          decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(result.data.token);
          _context5.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOGIN_SUCCESS"],
            data: result.data
          });

        case 8:
          _context5.next = 15;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          alert('로그인 에러');
          _context5.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOGIN_FAILURE"],
            error: _context5.t0
          });

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 10]]);
}

function watchLogin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOGIN_REQUEST"], sagaLogin);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
} //------------------------------------------------------------------------


function authSag() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function authSag$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchJoin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchLoadUser)]);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

var _c, _c2, _c3;

$RefreshReg$(_c, "APILoadUser");
$RefreshReg$(_c2, "APIJoin");
$RefreshReg$(_c3, "APILogin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9hdXRoU2FnYS5qcyJdLCJuYW1lcyI6WyJzYWdhTG9hZFVzZXIiLCJ3YXRjaExvYWRVc2VyIiwic2FnYUpvaW4iLCJ3YXRjaEpvaW4iLCJzYWdhTG9naW4iLCJ3YXRjaExvZ2luIiwiYXV0aFNhZyIsIkFQSUxvYWRVc2VyIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkxPQURfVVNFUl9TVUNDRVNTIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsIkxPQURfVVNFUl9GQUlMVVJFIiwidGFrZUV2ZXJ5IiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJBUElKb2luIiwibG9nIiwicG9zdCIsImFjdGlvbiIsIkpPSU5fU1VDQ0VTUyIsIkpPSU5fRkFJTFVSRSIsInRha2VMYXRlc3QiLCJKT0lOX1JFUVVFU1QiLCJBUElMb2dpbiIsInRva2VuIiwiZGVjb2RlZCIsImp3dERlQ29kZXIiLCJMT0dJTl9TVUNDRVNTIiwiYWxlcnQiLCJMT0dJTl9GQUlMVVJFIiwiTE9HSU5fUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBd0JVQSxZO21HQXFCQUMsYTttR0FtQkFDLFE7bUdBd0JBQyxTO21HQWtCQUMsUzttR0F3QkFDLFU7bUdBTWVDLE87O0FBeEl6QjtBQUNBO0FBQ0E7Q0FlQTtBQUNBOztBQUNBLFNBQVNDLFdBQVQsR0FBc0I7QUFFbEIsU0FBT0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVLFFBQVYsRUFBcUI7QUFBQ0MsbUJBQWUsRUFBQztBQUFqQixHQUFyQixDQUFQO0FBQ0g7O0tBSFFILFc7O0FBS1QsU0FBVVAsWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR3VCLGlCQUFNVywrREFBSSxDQUFDSixXQUFELENBQVY7O0FBSHZCO0FBR2NLLGdCQUhkO0FBQUE7QUFLUSxpQkFBTUMs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QTs7QUFBQTtBQUFBO0FBQUE7QUFnQlFtQixlQUFLLENBQUMsUUFBRCxDQUFMO0FBaEJSO0FBaUJRLGlCQUFNdEIsOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFDc0IsNERBREM7QUFFTmxCLGlCQUFLO0FBRkMsV0FBRCxDQUFUOztBQWpCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF3QkEsU0FBVWIsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTWUsb0VBQVMsQ0FBQ2lCLDREQUFELEVBQWVqQyxTQUFmLENBQWY7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQUdBOzs7QUFHZSxTQUFVRSxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdYLGlCQUFNZ0MsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDcEMsU0FBRCxDQURFLEVBRU5vQywrREFBSSxDQUFDbEMsVUFBRCxDQUZFLEVBR05rQywrREFBSSxDQUFDdEMsYUFBRCxDQUhFLENBQUQsQ0FBVDs7QUFIVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5hM2IwNDcwZDc5Y2I4M2JhOGQ3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgand0RGVDb2RlciBmcm9tICdqd3QtZGVjb2RlJ1xyXG5pbXBvcnQge2FsbCxmb3JrLHRha2VMYXRlc3QsdGFrZUV2ZXJ5ICxwdXQsIGRlbGF5LGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7IFxyXG5pbXBvcnQgXHJcbiAgICB7Sk9JTl9SRVFVRVNULFxyXG4gICAgIEpPSU5fU1VDQ0VTUyxcclxuICAgICBKT0lOX0ZBSUxVUkUsXHJcbiAgICAgTE9HSU5fUkVRVUVTVCxcclxuICAgICBMT0dJTl9TVUNDRVNTLFxyXG4gICAgIExPR0lOX0ZBSUxVUkUsIFxyXG4gICAgIExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgIExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvYXV0aCc7IFxyXG5cclxuXHJcbi8v7Jyg7KCA7KCV67O0IOycoOyngCDsgqzsnbTtgbQgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSUxvYWRVc2VyKCl7XHJcblxyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL2F1dGgvJyAsIHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pOyBcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FMb2FkVXNlcigpe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSUxvYWRVc2VyKTtcclxuICAgIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOkxPQURfVVNFUl9TVUNDRVNTLCBcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAgICAgICAgICAgXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdMT0FEX1VTRVJfRkFJTFVSRT0+JyAsIGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjplLCBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KExPQURfVVNFUl9SRVFVRVNULHNhZ2FMb2FkVXNlcik7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcbi8v7ZqM7JuQ6rCA7J6FIOyCrOydtO2BtCBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJSm9pbihkYXRhKXtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhPT0+JyAsIGRhdGEpOyBcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9qb2luJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSk7IFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FKb2luKGFjdGlvbil7XHJcbiAgICBcclxuICAgIHRyeXtcclxuICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJSm9pbixhY3Rpb24uZGF0YSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Sk9JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQsXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkpPSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6ZSwgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoSm9pbigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChKT0lOX1JFUVVFU1Qsc2FnYUpvaW4pXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy/roZzqt7jsnbgg7IKs7J207YG0XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSUxvZ2luKGRhdGEpe1xyXG5cclxuICAgIC8vand0IOuhnOq3uOyduFxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL2xvZ2luJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcblxyXG4gICAgLy9wYXNzcG9ydCBsb2NhbCDroZzqt7jsnbhcclxuICAgIC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL2xvZ2luJyxkYXRhLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2FnYUxvZ2luKGFjdGlvbil7XHJcblxyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSUxvZ2luLGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCcgLCByZXN1bHQuZGF0YS50b2tlbik7IFxyXG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSBqd3REZUNvZGVyKHJlc3VsdC5kYXRhLnRva2VuKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dJTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTsgXHJcblxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICBhbGVydCgn66Gc6re47J24IOyXkOufrCcpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR0lOX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjplLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9HSU5fUkVRVUVTVCxzYWdhTG9naW4pOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBhdXRoU2FnKCl7XHJcblxyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEpvaW4pLCBcclxuICAgICAgICBmb3JrKHdhdGNoTG9naW4pLCBcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLCBcclxuICAgICAgICBcclxuICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9