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


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaJoin),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchJoin),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaLogin),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(authSag);





function APIJoin(data) {
  console.log('data==>', data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/join', {
    data: data
  }, {
    withCredentials: true
  });
}

_c = APIJoin;

function sagaJoin(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaJoin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log(action, action.data);
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(APIJoin, action.data);

        case 4:
          result = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["JOIN_SUCCESS"],
            data: result
          });

        case 7:
          _context.next = 14;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          alert('에러발생');
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["JOIN_FAILURE"],
            error: _context.t0
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}

function watchJoin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchJoin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_3__["JOIN_REQUEST"], sagaJoin);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function APILogin(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth/login', data, {
    withCredentials: true
  });
}

_c2 = APILogin;

function sagaLogin(action) {
  var result, obj;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaLogin$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(APILogin, action.data);

        case 3:
          result = _context3.sent;
          obj = result.data[0];
          console.log('obj =>', obj);
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOGIN_SUCCESS"],
            data: result.data[0]
          });

        case 8:
          _context3.next = 15;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          alert('로그인 에러');
          _context3.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOGIN_FAILURE"],
            error: _context3.t0
          });

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 10]]);
}

function watchLogin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOGIN_REQUEST"], sagaLogin);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function authSag() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function authSag$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchJoin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogin)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

var _c, _c2;

$RefreshReg$(_c, "APIJoin");
$RefreshReg$(_c2, "APILogin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9hdXRoU2FnYS5qcyJdLCJuYW1lcyI6WyJzYWdhSm9pbiIsIndhdGNoSm9pbiIsInNhZ2FMb2dpbiIsIndhdGNoTG9naW4iLCJhdXRoU2FnIiwiQVBJSm9pbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJKT0lOX1NVQ0NFU1MiLCJhbGVydCIsIkpPSU5fRkFJTFVSRSIsImVycm9yIiwidGFrZUxhdGVzdCIsIkpPSU5fUkVRVUVTVCIsIkFQSUxvZ2luIiwib2JqIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUxVUkUiLCJ0YWtlRXZlcnkiLCJMT0dJTl9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBbUJVQSxRO21HQXdCQUMsUzttR0FTQUMsUzttR0FzQkFDLFU7bUdBS2VDLE87O0FBL0V6QjtBQUNBO0FBQ0E7O0FBV0EsU0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBc0I7QUFDbEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBd0JGLElBQXhCO0FBQ0EsU0FBT0csNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBd0I7QUFBQ0osUUFBSSxFQUFKQTtBQUFELEdBQXhCLEVBQStCO0FBQUNLLG1CQUFlLEVBQUM7QUFBakIsR0FBL0IsQ0FBUDtBQUVIOztLQUpRTixPOztBQU1ULFNBQVVMLFFBQVYsQ0FBbUJZLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR09MLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUksTUFBWixFQUFvQkEsTUFBTSxDQUFDTixJQUEzQjtBQUhQO0FBSXVCLGlCQUFNTywrREFBSSxDQUFDUixPQUFELEVBQVNPLE1BQU0sQ0FBQ04sSUFBaEIsQ0FBVjs7QUFKdkI7QUFJY1EsZ0JBSmQ7QUFBQTtBQUtRLGlCQUFNQyw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUNDLDJEQURDO0FBRU5YLGdCQUFJLEVBQUVRO0FBRkEsV0FBRCxDQUFUOztBQUxSO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZUUksZUFBSyxDQUFDLE1BQUQsQ0FBTDtBQVpSO0FBY1EsaUJBQU1ILDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBQ0csMkRBREM7QUFFTkMsaUJBQUs7QUFGQyxXQUFELENBQVQ7O0FBZFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0JBLFNBQVVuQixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNb0IscUVBQVUsQ0FBQ0MsMkRBQUQsRUFBY3RCLFFBQWQsQ0FBaEI7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBU3VCLFFBQVQsQ0FBa0JqQixJQUFsQixFQUF1QjtBQUNuQixTQUFPRyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxFQUF5QkosSUFBekIsRUFBOEI7QUFBQ0ssbUJBQWUsRUFBQztBQUFqQixHQUE5QixDQUFQO0FBQ0g7O01BRlFZLFE7O0FBS1QsU0FBVXJCLFNBQVYsQ0FBb0JVLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJdUIsaUJBQU1DLCtEQUFJLENBQUNVLFFBQUQsRUFBVVgsTUFBTSxDQUFDTixJQUFqQixDQUFWOztBQUp2QjtBQUljUSxnQkFKZDtBQUtjVSxhQUxkLEdBS29CVixNQUFNLENBQUNSLElBQVAsQ0FBWSxDQUFaLENBTHBCO0FBTVFDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXVCZ0IsR0FBdkI7QUFOUjtBQU9RLGlCQUFNVCw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUNTLDREQURDO0FBRU5uQixnQkFBSSxFQUFFUSxNQUFNLENBQUNSLElBQVAsQ0FBWSxDQUFaO0FBRkEsV0FBRCxDQUFUOztBQVBSO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFjUVksZUFBSyxDQUFDLFFBQUQsQ0FBTDtBQWRSO0FBZVEsaUJBQU1ILDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBQ1UsNERBREM7QUFFTk4saUJBQUs7QUFGQyxXQUFELENBQVQ7O0FBZlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBc0JBLFNBQVVqQixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNd0Isb0VBQVMsQ0FBQ0MsNERBQUQsRUFBZTFCLFNBQWYsQ0FBZjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLZSxTQUFVRSxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdYLGlCQUFNeUIsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDN0IsU0FBRCxDQURFLEVBRU42QiwrREFBSSxDQUFDM0IsVUFBRCxDQUZFLENBQUQsQ0FBVDs7QUFIVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5jYjc1YzlmODY0OTQ3NTE2MjU0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge2FsbCxmb3JrLHRha2VMYXRlc3QsdGFrZUV2ZXJ5ICxwdXQsIGRlbGF5LGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7IFxyXG5pbXBvcnQgXHJcbiAgICB7Sk9JTl9SRVFVRVNULFxyXG4gICAgIEpPSU5fU1VDQ0VTUyxcclxuICAgICBKT0lOX0ZBSUxVUkUsXHJcbiAgICAgTE9HSU5fUkVRVUVTVCxcclxuICAgICBMT0dJTl9TVUNDRVNTLFxyXG4gICAgIExPR0lOX0ZBSUxVUkUsIFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvYXV0aCc7IFxyXG5cclxuXHJcbmZ1bmN0aW9uIEFQSUpvaW4oZGF0YSl7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YT09PicgLCBkYXRhKTsgXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvam9pbicse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pOyBcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzYWdhSm9pbihhY3Rpb24pe1xyXG4gICAgXHJcbiAgICB0cnl7XHJcbiAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24sIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSUpvaW4sYWN0aW9uLmRhdGEpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkpPSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LFxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGFsZXJ0KCfsl5Drn6zrsJzsg50nKTsgXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Sk9JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjplLCBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hKb2luKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEpPSU5fUkVRVUVTVCxzYWdhSm9pbilcclxufVxyXG5cclxuZnVuY3Rpb24gQVBJTG9naW4oZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2F1dGgvbG9naW4nLGRhdGEse3dpdGhDcmVkZW50aWFsczp0cnVlfSk7IFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FMb2dpbihhY3Rpb24pe1xyXG5cclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUElMb2dpbixhY3Rpb24uZGF0YSk7IFxyXG4gICAgICAgIGNvbnN0IG9iaiA9IHJlc3VsdC5kYXRhWzBdOyBcclxuICAgICAgICBjb25zb2xlLmxvZygnb2JqID0+JyAsIG9iaik7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFbMF0sXHJcbiAgICAgICAgfSk7IFxyXG5cclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgYWxlcnQoJ+uhnOq3uOyduCDsl5Drn6wnKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dJTl9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6ZSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KExPR0lOX1JFUVVFU1Qsc2FnYUxvZ2luKTsgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogYXV0aFNhZygpe1xyXG5cclxuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hKb2luKSwgXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ2luKSwgXHJcbiAgICAgICAgXHJcbiAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==