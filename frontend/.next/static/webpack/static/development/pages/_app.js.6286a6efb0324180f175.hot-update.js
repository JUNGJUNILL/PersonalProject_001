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
          console.log('mainPosts_1001 result==>', result.data);
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__["MAINPOSTS_1001_LIST_SUCCESS"],
            data: result.data
          });

        case 7:
          _context.next = 15;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          alert('error', _context.t0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__["MAINPOSTS_1001_LIST_FAILURE"],
            error: _context.t0
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9tYWluUG9zdHNfMTAwMVNhZ2EuanMiXSwibmFtZXMiOlsic2FnYU1haW5Qb3N0c18xMDAxTGlzdCIsIndhdGNoTWFpblBvc3RzXzEwMDEiLCJtYWluUG9zdHNfMTAwMVNhZ2EiLCJBUEltYWluUG9zdHNfMTAwMUxpc3QiLCJkYXRhIiwiYXhpb3MiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJ0eXBlIiwiTUFJTlBPU1RTXzEwMDFfTElTVF9TVUNDRVNTIiwiZXJyb3IiLCJhbGVydCIsIk1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FrQlVBLHNCO21HQXFCQUMsbUI7bUdBVWVDLGtCOztBQWpEekI7QUFDQTtDQVdBO0FBQ0E7O0FBQ0EsU0FBU0MscUJBQVQsQ0FBK0JDLElBQS9CLEVBQW9DO0FBQ2hDLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxpQkFBWCxFQUE2QjtBQUFDRixRQUFJLEVBQUpBO0FBQUQsR0FBN0IsRUFBb0M7QUFBQ0csbUJBQWUsRUFBQztBQUFqQixHQUFwQyxDQUFQO0FBQ0g7O0tBRlFKLHFCOztBQUlULFNBQVVILHNCQUFWLENBQWlDUSxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR3FCLGlCQUFNQywrREFBSSxDQUFDTixxQkFBRCxFQUF1QkssTUFBTSxDQUFDSixJQUE5QixDQUFWOztBQUhyQjtBQUdZTSxnQkFIWjtBQUlNQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksMEJBQVosRUFBeUNGLE1BQU0sQ0FBQ04sSUFBaEQ7QUFKTjtBQUtNLGlCQUFPUyw4REFBRyxDQUFDO0FBQ0xDLGdCQUFJLEVBQUNDLG9GQURBO0FBRUxYLGdCQUFJLEVBQUNNLE1BQU0sQ0FBQ047QUFGUCxXQUFELENBQVY7O0FBTE47QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVlRTyxpQkFBTyxDQUFDSyxLQUFSO0FBQ0FDLGVBQUssQ0FBQyxPQUFELGNBQUw7QUFiUjtBQWNRLGlCQUFNSiw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUNJLG9GQURDO0FBRU5GLGlCQUFLO0FBRkMsV0FBRCxDQUFUOztBQWRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFCQSxTQUFVZixtQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTWtCLHFFQUFVLENBQUNDLG9GQUFELEVBQTZCcEIsc0JBQTdCLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FHQTs7O0FBT2UsU0FBVUUsa0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVgsaUJBQU1tQiw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNyQixtQkFBRCxDQURFLENBQUQsQ0FBVDs7QUFGVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy42Mjg2YTZlZmIwMzI0MTgwZjE3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge2FsbCxmb3JrLHRha2VMYXRlc3QsdGFrZUV2ZXJ5ICxwdXQsIGRlbGF5LGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7IFxyXG5pbXBvcnQgXHJcbiAgICB7XHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNULFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkUsICAgIFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvbWFpblBvc3RzXzEwMDEnOyBcclxuXHJcblxyXG5cclxuLy9tYWluUG9zdF8xMDAxIFNFTEVDVFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSW1haW5Qb3N0c18xMDAxTGlzdChkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFpblBvc3RzXzEwMDEnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2FnYU1haW5Qb3N0c18xMDAxTGlzdChhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEltYWluUG9zdHNfMTAwMUxpc3QsYWN0aW9uLmRhdGEpOyBcclxuICAgICAgY29uc29sZS5sb2coJ21haW5Qb3N0c18xMDAxIHJlc3VsdD09PicgLCByZXN1bHQuZGF0YSk7IFxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1MsIFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcbiAgICAgICAgYWxlcnQoJ2Vycm9yJywgZSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfTElTVF9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTWFpblBvc3RzXzEwMDEoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNULHNhZ2FNYWluUG9zdHNfMTAwMUxpc3QpOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBtYWluUG9zdHNfMTAwMVNhZ2EoKXtcclxuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hNYWluUG9zdHNfMTAwMSksIFxyXG4gICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9