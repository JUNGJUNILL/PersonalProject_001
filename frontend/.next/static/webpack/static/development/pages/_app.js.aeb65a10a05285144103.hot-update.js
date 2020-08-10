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
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");


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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/auth", {
    withCredentials: true
  });
}

_c = APILoadUser;

function sagaLoadUser(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaLoadUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(APILoadUser, action.data);

        case 3:
          result = _context.sent;
          console.log('result====>', result);
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_SUCCESS"]
          });

        case 7:
          _context.next = 14;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_FAILURE"],
            error: _context.t0
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}

function watchLoadUser() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_REQUEST"], sagaLoadUser);

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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(APIJoin, action.data);

        case 4:
          result = _context3.sent;
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["JOIN_SUCCESS"],
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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["JOIN_FAILURE"],
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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_3__["JOIN_REQUEST"], sagaJoin);

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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/login', data, {
    withCredentials: true
  });
}

_c3 = APILogin;

function sagaLogin(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaLogin$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(APILogin, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOGIN_SUCCESS"],
            data: result.data[0]
          });

        case 6:
          _context5.next = 13;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          alert('로그인 에러');
          _context5.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOGIN_FAILURE"],
            error: _context5.t0
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

function watchLogin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOGIN_REQUEST"], sagaLogin);

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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchJoin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadUser)]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9hdXRoU2FnYS5qcyJdLCJuYW1lcyI6WyJzYWdhTG9hZFVzZXIiLCJ3YXRjaExvYWRVc2VyIiwic2FnYUpvaW4iLCJ3YXRjaEpvaW4iLCJzYWdhTG9naW4iLCJ3YXRjaExvZ2luIiwiYXV0aFNhZyIsIkFQSUxvYWRVc2VyIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJhY3Rpb24iLCJjYWxsIiwiZGF0YSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJ0eXBlIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJlcnJvciIsIkxPQURfVVNFUl9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkxPQURfVVNFUl9SRVFVRVNUIiwiQVBJSm9pbiIsInBvc3QiLCJKT0lOX1NVQ0NFU1MiLCJKT0lOX0ZBSUxVUkUiLCJKT0lOX1JFUVVFU1QiLCJBUElMb2dpbiIsIkxPR0lOX1NVQ0NFU1MiLCJhbGVydCIsIkxPR0lOX0ZBSUxVUkUiLCJ0YWtlRXZlcnkiLCJMT0dJTl9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBdUJVQSxZO21HQXNCQUMsYTttR0FtQkFDLFE7bUdBd0JBQyxTO21HQWFBQyxTO21HQXFCQUMsVTttR0FNZUMsTzs7QUFoSXpCO0FBQ0E7Q0FlQTtBQUNBOztBQUNBLFNBQVNDLFdBQVQsR0FBc0I7QUFFbEIsU0FBT0MsNENBQUssQ0FBQ0MsR0FBTixVQUFvQjtBQUFDQyxtQkFBZSxFQUFDO0FBQWpCLEdBQXBCLENBQVA7QUFDSDs7S0FIUUgsVzs7QUFLVCxTQUFVUCxZQUFWLENBQXVCVyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR3VCLGlCQUFNQywrREFBSSxDQUFDTCxXQUFELEVBQWFJLE1BQU0sQ0FBQ0UsSUFBcEIsQ0FBVjs7QUFIdkI7QUFHY0MsZ0JBSGQ7QUFJUUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFB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QSxTQUFVZixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNNEIsb0VBQVMsQ0FBQ0MsNERBQUQsRUFBZTlCLFNBQWYsQ0FBZjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBR0E7OztBQUdlLFNBQVVFLE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR1gsaUJBQU02Qiw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNqQyxTQUFELENBREUsRUFFTmlDLCtEQUFJLENBQUMvQixVQUFELENBRkUsRUFHTitCLCtEQUFJLENBQUNuQyxhQUFELENBSEUsQ0FBRCxDQUFUOztBQUhXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmFlYjY1YTEwYTA1Mjg1MTQ0MTAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7YWxsLGZvcmssdGFrZUxhdGVzdCx0YWtlRXZlcnkgLHB1dCwgZGVsYXksY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJzsgXHJcbmltcG9ydCBcclxuICAgIHtKT0lOX1JFUVVFU1QsXHJcbiAgICAgSk9JTl9TVUNDRVNTLFxyXG4gICAgIEpPSU5fRkFJTFVSRSxcclxuICAgICBMT0dJTl9SRVFVRVNULFxyXG4gICAgIExPR0lOX1NVQ0NFU1MsXHJcbiAgICAgTE9HSU5fRkFJTFVSRSwgXHJcbiAgICAgTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICAgTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9hdXRoJzsgXHJcblxyXG5cclxuLy/snKDsoIDsoJXrs7Qg7Jyg7KeAIOyCrOydtO2BtCBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJTG9hZFVzZXIoKXtcclxuXHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvYXV0aGAgLCB7d2l0aENyZWRlbnRpYWxzOnRydWV9KTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTG9hZFVzZXIoYWN0aW9uKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUElMb2FkVXNlcixhY3Rpb24uZGF0YSk7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQ9PT09PicgLCByZXN1bHQpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpMT0FEX1VTRVJfU1VDQ0VTUywgXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOmUsIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULHNhZ2FMb2FkVXNlcik7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcbi8v7ZqM7JuQ6rCA7J6FIOyCrOydtO2BtCBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJSm9pbihkYXRhKXtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhPT0+JyAsIGRhdGEpOyBcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9qb2luJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSk7IFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FKb2luKGFjdGlvbil7XHJcbiAgICBcclxuICAgIHRyeXtcclxuICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJSm9pbixhY3Rpb24uZGF0YSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Sk9JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQsXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkpPSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6ZSwgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoSm9pbigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChKT0lOX1JFUVVFU1Qsc2FnYUpvaW4pXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy/roZzqt7jsnbgg7IKs7J207YG0XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSUxvZ2luKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL2xvZ2luJyxkYXRhLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pOyBcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FMb2dpbihhY3Rpb24pe1xyXG5cclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUElMb2dpbixhY3Rpb24uZGF0YSk7IFxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhWzBdLFxyXG4gICAgICAgIH0pOyBcclxuXHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG4gICAgICAgIGFsZXJ0KCfroZzqt7jsnbgg7JeQ65+sJyk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HSU5fRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOmUsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0dJTl9SRVFVRVNULHNhZ2FMb2dpbik7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGF1dGhTYWcoKXtcclxuXHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoSm9pbiksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dpbiksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkVXNlciksIFxyXG4gICAgICAgIFxyXG4gICAgXSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=