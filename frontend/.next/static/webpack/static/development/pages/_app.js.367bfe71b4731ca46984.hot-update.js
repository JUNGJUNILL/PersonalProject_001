webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/empListSaga.js":
/*!******************************!*\
  !*** ./sagas/empListSaga.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return empListSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_emp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/emp */ "./reducers/emp.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaEmpList),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchempList),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(empListSaga);





function APIempList(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/emp', {
    data: data
  }, {
    withCredentials: true
  });
}

_c = APIempList;

function sagaEmpList(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaEmpList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(APIempList, action.data);

        case 3:
          result = _context.sent;
          console.log('empList', result);
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_emp__WEBPACK_IMPORTED_MODULE_3__["EMP_LIST_SUCCESS"],
            data: result.data
          });

        case 7:
          _context.next = 15;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          alert('사가 에러', _context.t0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_emp__WEBPACK_IMPORTED_MODULE_3__["EMP_LIST_FAILURE"],
            error: _context.t0
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}

function watchempList() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchempList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('watchempList');
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_emp__WEBPACK_IMPORTED_MODULE_3__["EMP_LIST_REQUEST"], sagaEmpList);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function empListSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function empListSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchempList)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

var _c;

$RefreshReg$(_c, "APIempList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9lbXBMaXN0U2FnYS5qcyJdLCJuYW1lcyI6WyJzYWdhRW1wTGlzdCIsIndhdGNoZW1wTGlzdCIsImVtcExpc3RTYWdhIiwiQVBJZW1wTGlzdCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJhY3Rpb24iLCJjYWxsIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInB1dCIsInR5cGUiLCJFTVBfTElTVF9TVUNDRVNTIiwiZXJyb3IiLCJhbGVydCIsIkVNUF9MSVNUX0ZBSUxVUkUiLCJ0YWtlRXZlcnkiLCJFTVBfTElTVF9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBZVVBLFc7bUdBcUJBQyxZO21HQUtlQyxXOztBQXpDekI7QUFDQTtBQUNBOztBQVNBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQXlCO0FBQ3JCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxNQUFYLEVBQWtCO0FBQUNGLFFBQUksRUFBSkE7QUFBRCxHQUFsQixFQUF5QjtBQUFDRyxtQkFBZSxFQUFDO0FBQWpCLEdBQXpCLENBQVA7QUFDSDs7S0FGUUosVTs7QUFJVCxTQUFVSCxXQUFWLENBQXNCUSxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR3FCLGlCQUFNQywrREFBSSxDQUFDTixVQUFELEVBQVlLLE1BQU0sQ0FBQ0osSUFBbkIsQ0FBVjs7QUFIckI7QUFHWU0sZ0JBSFo7QUFJTUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBd0JGLE1BQXhCO0FBSk47QUFLTSxpQkFBT0csOERBQUcsQ0FBQztBQUNMQyxnQkFBSSxFQUFDQyw4REFEQTtBQUVMWCxnQkFBSSxFQUFFTSxNQUFNLENBQUNOO0FBRlIsV0FBRCxDQUFWOztBQUxOO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZUU8saUJBQU8sQ0FBQ0ssS0FBUjtBQUNBQyxlQUFLLENBQUMsT0FBRCxjQUFMO0FBYlI7QUFjUSxpQkFBTUosOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFDSSw4REFEQztBQUVORixpQkFBSztBQUZDLFdBQUQsQ0FBVDs7QUFkUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFxQkEsU0FBVWYsWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lVLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBREo7QUFFSSxpQkFBTU8sb0VBQVMsQ0FBQ0MsOERBQUQsRUFBa0JwQixXQUFsQixDQUFmOztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtlLFNBQVVFLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVgsaUJBQU1tQiw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNyQixZQUFELENBREUsQ0FBRCxDQUFUOztBQUZXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjM2N2JmZTcxYjQ3MzFjYTQ2OTg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7YWxsLGZvcmssdGFrZUxhdGVzdCx0YWtlRXZlcnkgLHB1dCwgZGVsYXksY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJzsgXHJcbmltcG9ydCBcclxuICAgIHtFTVBfTElTVF9SRVFVRVNULFxyXG4gICAgIEVNUF9MSVNUX1NVQ0NFU1MsXHJcbiAgICAgRU1QX0xJU1RfRkFJTFVSRVxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvZW1wJzsgXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEFQSWVtcExpc3QoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2VtcCcse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzYWdhRW1wTGlzdChhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEllbXBMaXN0LGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdlbXBMaXN0JyAsIHJlc3VsdCk7IFxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpFTVBfTElTVF9TVUNDRVNTLCBcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgn7IKs6rCAIOyXkOufrCcsZSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6RU1QX0xJU1RfRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOiBlLCBcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaGVtcExpc3QoKXtcclxuICAgIGNvbnNvbGUubG9nKCd3YXRjaGVtcExpc3QnKTsgXHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoRU1QX0xJU1RfUkVRVUVTVCxzYWdhRW1wTGlzdCk7IFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogZW1wTGlzdFNhZ2EoKXtcclxuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hlbXBMaXN0KSwgXHJcbiAgICAgXSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=