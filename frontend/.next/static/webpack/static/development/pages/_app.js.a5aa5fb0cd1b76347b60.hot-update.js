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
          console.log('회원정보 유지 , ', result);
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOAD_USER_SUCCESS"],
            data: result.data.nick
          });

        case 7:
          _context.next = 14;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error('LOAD_USER_FAILURE=>', _context.t0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__["LOAD_USER_FAILURE"],
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
            data: decoded.nick
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9hdXRoU2FnYS5qcyJdLCJuYW1lcyI6WyJzYWdhTG9hZFVzZXIiLCJ3YXRjaExvYWRVc2VyIiwic2FnYUpvaW4iLCJ3YXRjaEpvaW4iLCJzYWdhTG9naW4iLCJ3YXRjaExvZ2luIiwiYXV0aFNhZyIsIkFQSUxvYWRVc2VyIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjYWxsIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInB1dCIsInR5cGUiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsImRhdGEiLCJuaWNrIiwiZXJyb3IiLCJMT0FEX1VTRVJfRkFJTFVSRSIsInRha2VFdmVyeSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiQVBJSm9pbiIsInBvc3QiLCJhY3Rpb24iLCJKT0lOX1NVQ0NFU1MiLCJKT0lOX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiSk9JTl9SRVFVRVNUIiwiQVBJTG9naW4iLCJ0b2tlbiIsImRlY29kZWQiLCJqd3REZUNvZGVyIiwiTE9HSU5fU1VDQ0VTUyIsImFsZXJ0IiwiTE9HSU5fRkFJTFVSRSIsIkxPR0lOX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQXdCVUEsWTttR0FxQkFDLGE7bUdBbUJBQyxRO21HQXdCQUMsUzttR0FrQkFDLFM7bUdBd0JBQyxVO21HQU1lQyxPOztBQXhJekI7QUFDQTtBQUNBO0NBZUE7QUFDQTs7QUFDQSxTQUFTQyxXQUFULEdBQXNCO0FBRWxCLFNBQU9DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxRQUFWLEVBQXFCO0FBQUNDLG1CQUFlLEVBQUM7QUFBakIsR0FBckIsQ0FBUDtBQUNIOztLQUhRSCxXOztBQUtULFNBQVVQLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUd1QixpQkFBTVcsK0RBQUksQ0FBQ0osV0FBRCxDQUFWOztBQUh2QjtBQUdjSyxnQkFIZDtBQUlRQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUE0QkYsTUFBNUI7QUFKUjtBQUtRLGlCQUFNRyw4REFBRyxDQUFDO0FBQ0ZDLGdCQUFJLEVBQUNDLGdFQURIO0FBRUZDLGdCQUFJLEVBQUVOLE1BQU0sQ0FBQ00sSUFBUCxDQUFZQztBQUZoQixXQUFELENBQVQ7O0FBTFI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdRTixpQkFBTyxDQUFDTyxLQUFSLENBQWMscUJBQWQ7QUFYUjtBQVlRLGlCQUFNTCw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUNLLGdFQURDO0FBRU5ELGlCQUFLO0FBRkMsV0FBRCxDQUFUOztBQVpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFCQSxTQUFVbkIsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTXFCLG9FQUFTLENBQUNDLGdFQUFELEVBQW1CdkIsWUFBbkIsQ0FBZjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBR0E7QUFLQTtBQUNBOzs7QUFDQSxTQUFTd0IsT0FBVCxDQUFpQk4sSUFBakIsRUFBc0I7QUFDbEJMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBd0JJLElBQXhCO0FBQ0EsU0FBT1YsNENBQUssQ0FBQ2lCLElBQU4sQ0FBVyxZQUFYLEVBQXdCO0FBQUNQLFFBQUksRUFBSkE7QUFBRCxHQUF4QixFQUErQjtBQUFDUixtQkFBZSxFQUFDO0FBQWpCLEdBQS9CLENBQVA7QUFFSDs7TUFKUWMsTzs7QUFTVCxTQUFVdEIsUUFBVixDQUFtQndCLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR09iLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVksTUFBWixFQUFvQkEsTUFBTSxDQUFDUixJQUEzQjtBQUhQO0FBSXVCLGlCQUFNUCwrREFBSSxDQUFDYSxPQUFELEVBQVNFLE1BQU0sQ0FBQ1IsSUFBaEIsQ0FBVjs7QUFKdkI7QUFJY04sZ0JBSmQ7QUFBQTtBQUtRLGlCQUFNRyw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUNXLDJEQURDO0FBRU5ULGdCQUFJLEVBQUVOO0FBRkEsV0FBRCxDQUFUOztBQUxSO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZTUMsaUJBQU8sQ0FBQ08sS0FBUjtBQVpOO0FBY1EsaUJBQU1MLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBQ1ksMkRBREM7QUFFTlIsaUJBQUs7QUFGQyxXQUFELENBQVQ7O0FBZFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0JBLFNBQVVqQixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNMEIscUVBQVUsQ0FBQ0MsMkRBQUQsRUFBYzVCLFFBQWQsQ0FBaEI7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQUdBO0FBSUE7QUFDQTs7O0FBQ0EsU0FBUzZCLFFBQVQsQ0FBa0JiLElBQWxCLEVBQXVCO0FBRW5CO0FBQ0EsU0FBT1YsNENBQUssQ0FBQ2lCLElBQU4sQ0FBVyxhQUFYLEVBQXlCO0FBQUNQLFFBQUksRUFBSkE7QUFBRCxHQUF6QixFQUFnQztBQUFDUixtQkFBZSxFQUFDO0FBQWpCLEdBQWhDLENBQVAsQ0FIbUIsQ0FLbkI7QUFDQTtBQUNIOztNQVBRcUIsUTs7QUFTVCxTQUFVM0IsU0FBVixDQUFvQnNCLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJdUIsaUJBQU1mLCtEQUFJLENBQUNvQixRQUFELEVBQVVMLE1BQU0sQ0FBQ1IsSUFBakIsQ0FBVjs7QUFKdkI7QUFJY04sZ0JBSmQ7QUFNUUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBdUJGLE1BQU0sQ0FBQ00sSUFBUCxDQUFZYyxLQUFuQztBQUNNQyxpQkFQZCxHQU93QkMsaURBQVUsQ0FBQ3RCLE1BQU0sQ0FBQ00sSUFBUCxDQUFZYyxLQUFiLENBUGxDO0FBQUE7QUFTUSxpQkFBTWpCLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBQ21CLDREQURDO0FBRU5qQixnQkFBSSxFQUFFZSxPQUFPLENBQUNkO0FBRlIsV0FBRCxDQUFUOztBQVRSO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFnQlFpQixlQUFLLENBQUMsUUFBRCxDQUFMO0FBaEJSO0FBaUJRLGlCQUFNckIsOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFDcUIsNERBREM7QUFFTmpCLGlCQUFLO0FBRkMsV0FBRCxDQUFUOztBQWpCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF3QkEsU0FBVWYsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTWlCLG9FQUFTLENBQUNnQiw0REFBRCxFQUFlbEMsU0FBZixDQUFmOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FHQTs7O0FBR2UsU0FBVUUsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHWCxpQkFBTWlDLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ3JDLFNBQUQsQ0FERSxFQUVOcUMsK0RBQUksQ0FBQ25DLFVBQUQsQ0FGRSxFQUdObUMsK0RBQUksQ0FBQ3ZDLGFBQUQsQ0FIRSxDQUFELENBQVQ7O0FBSFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYTVhYTVmYjBjZDFiNzYzNDdiNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IGp3dERlQ29kZXIgZnJvbSAnand0LWRlY29kZSdcclxuaW1wb3J0IHthbGwsZm9yayx0YWtlTGF0ZXN0LHRha2VFdmVyeSAscHV0LCBkZWxheSxjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnOyBcclxuaW1wb3J0IFxyXG4gICAge0pPSU5fUkVRVUVTVCxcclxuICAgICBKT0lOX1NVQ0NFU1MsXHJcbiAgICAgSk9JTl9GQUlMVVJFLFxyXG4gICAgIExPR0lOX1JFUVVFU1QsXHJcbiAgICAgTE9HSU5fU1VDQ0VTUyxcclxuICAgICBMT0dJTl9GQUlMVVJFLCBcclxuICAgICBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgICBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2F1dGgnOyBcclxuXHJcblxyXG4vL+ycoOyggOygleuztCDsnKDsp4Ag7IKs7J207YG0IFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUElMb2FkVXNlcigpe1xyXG5cclxuICAgIHJldHVybiBheGlvcy5nZXQoJy9hdXRoLycgLCB7d2l0aENyZWRlbnRpYWxzOnRydWV9KTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTG9hZFVzZXIoKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUElMb2FkVXNlcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+2ajOybkOygleuztCDsnKDsp4AgLCAnICAsIHJlc3VsdCk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOkxPQURfVVNFUl9TVUNDRVNTLCBcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLm5pY2ssICAgICAgICAgICBcclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xPQURfVVNFUl9GQUlMVVJFPT4nICwgZSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOmUsIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9VU0VSX1JFUVVFU1Qsc2FnYUxvYWRVc2VyKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuLy/tmozsm5DqsIDsnoUg7IKs7J207YG0IFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUElKb2luKGRhdGEpe1xyXG4gICAgY29uc29sZS5sb2coJ2RhdGE9PT4nICwgZGF0YSk7IFxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hdXRoL2pvaW4nLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTsgXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiogc2FnYUpvaW4oYWN0aW9uKXtcclxuICAgIFxyXG4gICAgdHJ5e1xyXG4gICAgICAgY29uc29sZS5sb2coYWN0aW9uLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUElKb2luLGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpKT0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdCxcclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Sk9JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjplLCBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hKb2luKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEpPSU5fUkVRVUVTVCxzYWdhSm9pbilcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vL+uhnOq3uOyduCDsgqzsnbTtgbRcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJTG9naW4oZGF0YSl7XHJcblxyXG4gICAgLy9qd3Qg66Gc6re47J24XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvbG9naW4nLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuXHJcbiAgICAvL3Bhc3Nwb3J0IGxvY2FsIOuhnOq3uOyduFxyXG4gICAgLy9yZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvbG9naW4nLGRhdGEse3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTG9naW4oYWN0aW9uKXtcclxuXHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJTG9naW4sYWN0aW9uLmRhdGEpOyBcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0JyAsIHJlc3VsdC5kYXRhLnRva2VuKTsgXHJcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dERlQ29kZXIocmVzdWx0LmRhdGEudG9rZW4pOyBcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dJTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBkZWNvZGVkLm5pY2ssXHJcbiAgICAgICAgfSk7IFxyXG5cclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgYWxlcnQoJ+uhnOq3uOyduCDsl5Drn6wnKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dJTl9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6ZSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KExPR0lOX1JFUVVFU1Qsc2FnYUxvZ2luKTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogYXV0aFNhZygpe1xyXG5cclxuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hKb2luKSwgXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ2luKSwgXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyKSwgXHJcbiAgICAgICAgXHJcbiAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==