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
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(authSag);





function APIJoin(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/auth', {
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
          alert('에렁레로', _context.t0);
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

function authSag() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function authSag$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchJoin)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

var _c;

$RefreshReg$(_c, "APIJoin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9hdXRoU2FnYS5qcyJdLCJuYW1lcyI6WyJzYWdhSm9pbiIsIndhdGNoSm9pbiIsImF1dGhTYWciLCJBUElKb2luIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkpPSU5fU1VDQ0VTUyIsImFsZXJ0IiwiSk9JTl9GQUlMVVJFIiwiZXJyb3IiLCJ0YWtlTGF0ZXN0IiwiSk9JTl9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBZ0JVQSxRO21HQXNCQUMsUzttR0FLZUMsTzs7QUEzQ3pCO0FBQ0E7QUFDQTs7QUFRQSxTQUFTQyxPQUFULENBQWlCQyxJQUFqQixFQUFzQjtBQUVsQixTQUFPQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsT0FBWCxFQUFtQjtBQUFDRixRQUFJLEVBQUpBO0FBQUQsR0FBbkIsRUFBMEI7QUFBQ0csbUJBQWUsRUFBQztBQUFqQixHQUExQixDQUFQO0FBRUg7O0tBSlFKLE87O0FBTVQsU0FBVUgsUUFBVixDQUFtQlEsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHT0MsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaLEVBQW9CQSxNQUFNLENBQUNKLElBQTNCO0FBSFA7QUFJdUIsaUJBQU1PLCtEQUFJLENBQUNSLE9BQUQsRUFBU0ssTUFBTSxDQUFDSixJQUFoQixDQUFWOztBQUp2QjtBQUljUSxnQkFKZDtBQUFBO0FBS1EsaUJBQU1DLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBQ0MsMkRBREM7QUFFTlgsZ0JBQUksRUFBRVE7QUFGQSxXQUFELENBQVQ7O0FBTFI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVlRSSxlQUFLLENBQUMsTUFBRCxjQUFMO0FBWlI7QUFjUSxpQkFBTUgsOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFDRywyREFEQztBQUVOQyxpQkFBSztBQUZDLFdBQUQsQ0FBVDs7QUFkUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFzQkEsU0FBVWpCLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1rQixxRUFBVSxDQUFDQywyREFBRCxFQUFjcEIsUUFBZCxDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLZSxTQUFVRSxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdYLGlCQUFNbUIsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDckIsU0FBRCxDQURFLENBQUQsQ0FBVDs7QUFIVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy44YjRlOTQ0YzIwZTBjMjQxZWYxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge2FsbCxmb3JrLHRha2VMYXRlc3QsdGFrZUV2ZXJ5ICxwdXQsIGRlbGF5LGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7IFxyXG5pbXBvcnQgXHJcbiAgICB7Sk9JTl9SRVFVRVNULFxyXG4gICAgIEpPSU5fU1VDQ0VTUyxcclxuICAgICBKT0lOX0ZBSUxVUkVcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2F1dGgnOyBcclxuXHJcblxyXG5mdW5jdGlvbiBBUElKb2luKGRhdGEpe1xyXG5cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aCcse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pOyBcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzYWdhSm9pbihhY3Rpb24pe1xyXG4gICAgXHJcbiAgICB0cnl7XHJcbiAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24sIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSUpvaW4sYWN0aW9uLmRhdGEpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkpPSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LFxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGFsZXJ0KCfsl5DroIHroIjroZwnLGUpOyBcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpKT0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOmUsIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hKb2luKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEpPSU5fUkVRVUVTVCxzYWdhSm9pbilcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBhdXRoU2FnKCl7XHJcblxyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEpvaW4pLCBcclxuICAgICAgICBcclxuICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9