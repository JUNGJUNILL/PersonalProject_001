webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/mainPosts_1001Saga.js":
/*!*************************************!*\
  !*** ./sagas/mainPosts_1001Saga.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mainPosts_1001Saga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaMainPosts_1001List),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchMainPosts_1001),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(mainPosts_1001Saga);



 //mainPost_1001 SELECT
//-----------------------------------------------------------------------------------

function APImainPosts_1001List(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/mainPosts_1001', {
    data: data
  }, {
    withCredentials: true
  });
}

_c = APImainPosts_1001List;

function sagaMainPosts_1001List(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaMainPosts_1001List$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(APImainPosts_1001List, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__["MAINPOSTS_1001_LIST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 14;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          alert('error', _context.t0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__["MAINPOSTS_1001_LIST_FAILURE"],
            error: _context.t0
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function watchMainPosts_1001() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchMainPosts_1001$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__["MAINPOSTS_1001_LIST_REQUEST"], sagaMainPosts_1001List);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
} //-----------------------------------------------------------------------------------


function mainPosts_1001Saga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function mainPosts_1001Saga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchMainPosts_1001)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

var _c;

$RefreshReg$(_c, "APImainPosts_1001List");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9tYWluUG9zdHNfMTAwMVNhZ2EuanMiXSwibmFtZXMiOlsic2FnYU1haW5Qb3N0c18xMDAxTGlzdCIsIndhdGNoTWFpblBvc3RzXzEwMDEiLCJtYWluUG9zdHNfMTAwMVNhZ2EiLCJBUEltYWluUG9zdHNfMTAwMUxpc3QiLCJkYXRhIiwiYXhpb3MiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1MiLCJjb25zb2xlIiwiZXJyb3IiLCJhbGVydCIsIk1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FrQlVBLHNCO21HQW9CQUMsbUI7bUdBVWVDLGtCOztBQWhEekI7QUFDQTtDQVdBO0FBQ0E7O0FBQ0EsU0FBU0MscUJBQVQsQ0FBK0JDLElBQS9CLEVBQW9DO0FBQ2hDLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxpQkFBWCxFQUE2QjtBQUFDRixRQUFJLEVBQUpBO0FBQUQsR0FBN0IsRUFBb0M7QUFBQ0csbUJBQWUsRUFBQztBQUFqQixHQUFwQyxDQUFQO0FBQ0g7O0tBRlFKLHFCOztBQUlULFNBQVVILHNCQUFWLENBQWlDUSxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR3FCLGlCQUFNQywrREFBSSxDQUFDTixxQkFBRCxFQUF1QkssTUFBTSxDQUFDSixJQUE5QixDQUFWOztBQUhyQjtBQUdZTSxnQkFIWjtBQUFBO0FBSU0saUJBQU9DLDhEQUFHLENBQUM7QUFDTEMsZ0JBQUksRUFBQ0Msb0ZBREE7QUFFTFQsZ0JBQUksRUFBQ00sTUFBTSxDQUFDTjtBQUZQLFdBQUQsQ0FBVjs7QUFKTjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV1FVLGlCQUFPLENBQUNDLEtBQVI7QUFDQUMsZUFBSyxDQUFDLE9BQUQsY0FBTDtBQVpSO0FBYVEsaUJBQU1MLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBQ0ssb0ZBREM7QUFFTkYsaUJBQUs7QUFGQyxXQUFELENBQVQ7O0FBYlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0JBLFNBQVVkLG1CQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNaUIscUVBQVUsQ0FBQ0Msb0ZBQUQsRUFBNkJuQixzQkFBN0IsQ0FBaEI7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQUdBOzs7QUFPZSxTQUFVRSxrQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWCxpQkFBTWtCLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ3BCLG1CQUFELENBREUsQ0FBRCxDQUFUOztBQUZXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjgzZmY5ZGQ2Y2RlNjE5MzVhMGEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7YWxsLGZvcmssdGFrZUxhdGVzdCx0YWtlRXZlcnkgLHB1dCwgZGVsYXksY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJzsgXHJcbmltcG9ydCBcclxuICAgIHtcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfTElTVF9TVUNDRVNTLFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSwgICAgXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMSc7IFxyXG5cclxuXHJcblxyXG4vL21haW5Qb3N0XzEwMDEgU0VMRUNUXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJbWFpblBvc3RzXzEwMDFMaXN0KGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9tYWluUG9zdHNfMTAwMScse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTWFpblBvc3RzXzEwMDFMaXN0KGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSW1haW5Qb3N0c18xMDAxTGlzdCxhY3Rpb24uZGF0YSk7IFxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1MsIFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcbiAgICAgICAgYWxlcnQoJ2Vycm9yJywgZSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfTElTVF9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTWFpblBvc3RzXzEwMDEoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNULHNhZ2FNYWluUG9zdHNfMTAwMUxpc3QpOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBtYWluUG9zdHNfMTAwMVNhZ2EoKXtcclxuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hNYWluUG9zdHNfMTAwMSksIFxyXG4gICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9