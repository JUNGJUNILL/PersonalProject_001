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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9hdXRoU2FnYS5qcyJdLCJuYW1lcyI6WyJzYWdhTG9hZFVzZXIiLCJ3YXRjaExvYWRVc2VyIiwic2FnYUpvaW4iLCJ3YXRjaEpvaW4iLCJzYWdhTG9naW4iLCJ3YXRjaExvZ2luIiwiYXV0aFNhZyIsIkFQSUxvYWRVc2VyIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkxPQURfVVNFUl9TVUNDRVNTIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsIkxPQURfVVNFUl9GQUlMVVJFIiwidGFrZUV2ZXJ5IiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJBUElKb2luIiwibG9nIiwicG9zdCIsImFjdGlvbiIsIkpPSU5fU1VDQ0VTUyIsIkpPSU5fRkFJTFVSRSIsInRha2VMYXRlc3QiLCJKT0lOX1JFUVVFU1QiLCJBUElMb2dpbiIsInRva2VuIiwiZGVjb2RlZCIsImp3dERlQ29kZXIiLCJMT0dJTl9TVUNDRVNTIiwibmljayIsImFsZXJ0IiwiTE9HSU5fRkFJTFVSRSIsIkxPR0lOX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQXdCVUEsWTttR0FxQkFDLGE7bUdBbUJBQyxRO21HQXdCQUMsUzttR0FrQkFDLFM7bUdBd0JBQyxVO21HQU1lQyxPOztBQXhJekI7QUFDQTtBQUNBO0NBZUE7QUFDQTs7QUFDQSxTQUFTQyxXQUFULEdBQXNCO0FBRWxCLFNBQU9DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxRQUFWLEVBQXFCO0FBQUNDLG1CQUFlLEVBQUM7QUFBakIsR0FBckIsQ0FBUDtBQUNIOztLQUhRSCxXOztBQUtULFNBQVVQLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUd1QixpQkFBTVcsK0RBQUksQ0FBQ0osV0FBRCxDQUFWOztBQUh2QjtBQUdjSyxnQkFIZDtBQUFBO0FBS1Es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QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWdCUUMsZUFBSyxDQUFDLFFBQUQsQ0FBTDtBQWhCUjtBQWlCUSxpQkFBTXZCLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBQ3VCLDREQURDO0FBRU5uQixpQkFBSztBQUZDLFdBQUQsQ0FBVDs7QUFqQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0JBLFNBQVViLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1lLG9FQUFTLENBQUNrQiw0REFBRCxFQUFlbEMsU0FBZixDQUFmOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FHQTs7O0FBR2UsU0FBVUUsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHWCxpQkFBTWlDLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ3JDLFNBQUQsQ0FERSxFQUVOcUMsK0RBQUksQ0FBQ25DLFVBQUQsQ0FGRSxFQUdObUMsK0RBQUksQ0FBQ3ZDLGFBQUQsQ0FIRSxDQUFELENBQVQ7O0FBSFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYzVkYmMxNDk0YjUwYmQ5ZGFlMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IGp3dERlQ29kZXIgZnJvbSAnand0LWRlY29kZSdcclxuaW1wb3J0IHthbGwsZm9yayx0YWtlTGF0ZXN0LHRha2VFdmVyeSAscHV0LCBkZWxheSxjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnOyBcclxuaW1wb3J0IFxyXG4gICAge0pPSU5fUkVRVUVTVCxcclxuICAgICBKT0lOX1NVQ0NFU1MsXHJcbiAgICAgSk9JTl9GQUlMVVJFLFxyXG4gICAgIExPR0lOX1JFUVVFU1QsXHJcbiAgICAgTE9HSU5fU1VDQ0VTUyxcclxuICAgICBMT0dJTl9GQUlMVVJFLCBcclxuICAgICBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgICBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2F1dGgnOyBcclxuXHJcblxyXG4vL+ycoOyggOygleuztCDsnKDsp4Ag7IKs7J207YG0IFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUElMb2FkVXNlcigpe1xyXG5cclxuICAgIHJldHVybiBheGlvcy5nZXQoJy9hdXRoLycgLCB7d2l0aENyZWRlbnRpYWxzOnRydWV9KTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTG9hZFVzZXIoKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUElMb2FkVXNlcik7XHJcbiAgICBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpMT0FEX1VTRVJfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSwgICAgICAgICAgIFxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTE9BRF9VU0VSX0ZBSUxVUkU9PicgLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6ZSwgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0FEX1VTRVJfUkVRVUVTVCxzYWdhTG9hZFVzZXIpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG4vL+2ajOybkOqwgOyehSDsgqzsnbTtgbQgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSUpvaW4oZGF0YSl7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YT09PicgLCBkYXRhKTsgXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvam9pbicse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pOyBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uKiBzYWdhSm9pbihhY3Rpb24pe1xyXG4gICAgXHJcbiAgICB0cnl7XHJcbiAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24sIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSUpvaW4sYWN0aW9uLmRhdGEpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkpPSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LFxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpKT0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOmUsIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEpvaW4oKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoSk9JTl9SRVFVRVNULHNhZ2FKb2luKVxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8v66Gc6re47J24IOyCrOydtO2BtFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUElMb2dpbihkYXRhKXtcclxuXHJcbiAgICAvL2p3dCDroZzqt7jsnbhcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9sb2dpbicse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG5cclxuICAgIC8vcGFzc3BvcnQgbG9jYWwg66Gc6re47J24XHJcbiAgICAvL3JldHVybiBheGlvcy5wb3N0KCcvYXV0aC9sb2dpbicsZGF0YSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FMb2dpbihhY3Rpb24pe1xyXG5cclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUElMb2dpbixhY3Rpb24uZGF0YSk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQnICwgcmVzdWx0LmRhdGEudG9rZW4pOyBcclxuICAgICAgICBjb25zdCBkZWNvZGVkID0gand0RGVDb2RlcihyZXN1bHQuZGF0YS50b2tlbik7IFxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGRlY29kZWQubmljayxcclxuICAgICAgICB9KTsgXHJcblxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICBhbGVydCgn66Gc6re47J24IOyXkOufrCcpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR0lOX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjplLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9HSU5fUkVRVUVTVCxzYWdhTG9naW4pOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBhdXRoU2FnKCl7XHJcblxyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEpvaW4pLCBcclxuICAgICAgICBmb3JrKHdhdGNoTG9naW4pLCBcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLCBcclxuICAgICAgICBcclxuICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9