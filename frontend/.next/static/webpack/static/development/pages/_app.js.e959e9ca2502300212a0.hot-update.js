webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/studySaga.js":
/*!****************************!*\
  !*** ./sagas/studySaga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return studySaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_count__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/count */ "./reducers/count.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaPlus),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSagaPlus),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaMinus),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchMinus),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(studySaga);




function sagaPlus(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaPlus$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_count__WEBPACK_IMPORTED_MODULE_2__["COUNT_PLUS_SUCCESS"],
            data: 1
          });

        case 3:
          _context.next = 11;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          alert('사가 에러');
          _context.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_count__WEBPACK_IMPORTED_MODULE_2__["COUNT_PLUS_FAILURE"],
            error: _context.t0
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 5]]);
}

function watchSagaPlus() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSagaPlus$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_count__WEBPACK_IMPORTED_MODULE_2__["COUNT_PLUS_REQUEST"], sagaPlus);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function sagaMinus(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaMinus$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_count__WEBPACK_IMPORTED_MODULE_2__["COUNT_MINUS_SUCCESS"],
            data: 1
          });

        case 3:
          _context3.next = 11;
          break;

        case 5:
          _context3.prev = 5;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          alert('사가 에러');
          _context3.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_count__WEBPACK_IMPORTED_MODULE_2__["COUNT_MINUS_FAILURE"],
            error: _context3.t0
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 5]]);
}

function watchMinus() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchMinus$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_count__WEBPACK_IMPORTED_MODULE_2__["COUNT_MINUS_REQUEST"], sagaMinus);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function studySaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function studySaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSagaPlus), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchMinus)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9zdHVkeVNhZ2EuanMiXSwibmFtZXMiOlsic2FnYVBsdXMiLCJ3YXRjaFNhZ2FQbHVzIiwic2FnYU1pbnVzIiwid2F0Y2hNaW51cyIsInN0dWR5U2FnYSIsImFjdGlvbiIsInB1dCIsInR5cGUiLCJDT1VOVF9QTFVTX1NVQ0NFU1MiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwiYWxlcnQiLCJDT1VOVF9QTFVTX0ZBSUxVUkUiLCJ0YWtlRXZlcnkiLCJDT1VOVF9QTFVTX1JFUVVFU1QiLCJDT1VOVF9NSU5VU19TVUNDRVNTIiwiQ09VTlRfTUlOVVNfRkFJTFVSRSIsIkNPVU5UX01JTlVTX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBT1VBLFE7bUdBbUJBQyxhO21HQVFBQyxTO21HQW1CQUMsVTttR0FLZUMsUzs7QUExRHpCO0FBQ0E7O0FBTUEsU0FBVUosUUFBVixDQUFtQkssTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHTSxpQkFBT0MsOERBQUcsQ0FBQztBQUNMQyxnQkFBSSxFQUFDQyxrRUFEQTtBQUVMQyxnQkFBSSxFQUFFO0FBRkQsV0FBRCxDQUFWOztBQUhOO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVUUMsaUJBQU8sQ0FBQ0MsS0FBUjtBQUNBQyxlQUFLLENBQUMsT0FBRCxDQUFMO0FBWFI7QUFZUSxpQkFBTU4sOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFDTSxrRUFEQztBQUVORixpQkFBSztBQUZDLFdBQUQsQ0FBVDs7QUFaUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFtQkEsU0FBVVYsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTWEsb0VBQVMsQ0FBQ0Msa0VBQUQsRUFBb0JmLFFBQXBCLENBQWY7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUUEsU0FBVUUsU0FBVixDQUFvQkcsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHTSxpQkFBT0MsOERBQUcsQ0FBQztBQUNMQyxnQkFBSSxFQUFDUyxtRUFEQTtBQUVMUCxnQkFBSSxFQUFFO0FBRkQsV0FBRCxDQUFWOztBQUhOO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVUUMsaUJBQU8sQ0FBQ0MsS0FBUjtBQUNBQyxlQUFLLENBQUMsT0FBRCxDQUFMO0FBWFI7QUFZUSxpQkFBTU4sOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFDVSxtRUFEQztBQUVOTixpQkFBSztBQUZDLFdBQUQsQ0FBVDs7QUFaUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFtQkEsU0FBVVIsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTVcsb0VBQVMsQ0FBQ0ksbUVBQUQsRUFBcUJoQixTQUFyQixDQUFmOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtlLFNBQVVFLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVgsaUJBQU1lLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ25CLGFBQUQsQ0FERSxFQUVObUIsK0RBQUksQ0FBQ2pCLFVBQUQsQ0FGRSxDQUFELENBQVQ7O0FBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZTk1OWU5Y2EyNTAyMzAwMjEyYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YWxsLGZvcmssdGFrZUxhdGVzdCx0YWtlRXZlcnkgLHB1dCwgZGVsYXksY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJzsgXHJcbmltcG9ydCB7Q09VTlRfUExVU19SRVFVRVNULENPVU5UX1BMVVNfU1VDQ0VTUywgQ09VTlRfUExVU19GQUlMVVJFLCBDT1VOVF9NSU5VU19SRVFVRVNULCBDT1VOVF9NSU5VU19TVUNDRVNTLCBDT1VOVF9NSU5VU19GQUlMVVJFfSBmcm9tICcuLi9yZWR1Y2Vycy9jb3VudCc7IFxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uKiBzYWdhUGx1cyhhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgeWllbGQgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Q09VTlRfUExVU19TVUNDRVNTLCBcclxuICAgICAgICAgICAgZGF0YTogMSwgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG4gICAgICAgIGFsZXJ0KCfsgqzqsIAg7JeQ65+sJyk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Q09VTlRfUExVU19GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2FnYVBsdXMoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShDT1VOVF9QTFVTX1JFUVVFU1Qsc2FnYVBsdXMpOyBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTWludXMoYWN0aW9uKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgIHlpZWxkICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkNPVU5UX01JTlVTX1NVQ0NFU1MsIFxyXG4gICAgICAgICAgICBkYXRhOiAxLCBcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcbiAgICAgICAgYWxlcnQoJ+yCrOqwgCDsl5Drn6wnKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpDT1VOVF9NSU5VU19GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTWludXMoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShDT1VOVF9NSU5VU19SRVFVRVNULHNhZ2FNaW51cyk7IFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHN0dWR5U2FnYSgpe1xyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaFNhZ2FQbHVzKSwgXHJcbiAgICAgICAgZm9yayh3YXRjaE1pbnVzKSwgXHJcbiAgICAgXSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=