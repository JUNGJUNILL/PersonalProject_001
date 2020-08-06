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
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_emp__WEBPACK_IMPORTED_MODULE_3__["EMP_LIST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 15;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          console.log('eeee', _context.t0);
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
  }, _marked, null, [[0, 8]]);
}

function watchempList() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchempList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_emp__WEBPACK_IMPORTED_MODULE_3__["EMP_LIST_REQUEST"], sagaEmpList);

        case 2:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9lbXBMaXN0U2FnYS5qcyJdLCJuYW1lcyI6WyJzYWdhRW1wTGlzdCIsIndhdGNoZW1wTGlzdCIsImVtcExpc3RTYWdhIiwiQVBJZW1wTGlzdCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJhY3Rpb24iLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkVNUF9MSVNUX1NVQ0NFU1MiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJhbGVydCIsIkVNUF9MSVNUX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiRU1QX0xJU1RfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQWVVQSxXO21HQXNCQUMsWTttR0FJZUMsVzs7QUF6Q3pCO0FBQ0E7QUFDQTs7QUFTQSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUF5QjtBQUNyQixTQUFPQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsTUFBWCxFQUFrQjtBQUFDRixRQUFJLEVBQUpBO0FBQUQsR0FBbEIsRUFBeUI7QUFBQ0csbUJBQWUsRUFBQztBQUFqQixHQUF6QixDQUFQO0FBQ0g7O0tBRlFKLFU7O0FBSVQsU0FBVUgsV0FBVixDQUFzQlEsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdxQixpQkFBTUMsK0RBQUksQ0FBQ04sVUFBRCxFQUFZSyxNQUFNLENBQUNKLElBQW5CLENBQVY7O0FBSHJCO0FBR1lNLGdCQUhaO0FBQUE7QUFLTSxpQkFBT0MsOERBQUcsQ0FBQztBQUNMQyxnQkFBSSxFQUFDQyw4REFEQTtBQUVMVCxnQkFBSSxFQUFFTSxNQUFNLENBQUNOO0FBRlIsV0FBRCxDQUFWOztBQUxOO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZUVUsaUJBQU8sQ0FBQ0MsS0FBUjtBQUNBRCxpQkFBTyxDQUFDRSxHQUFSLENBQVksTUFBWjtBQUNBQyxlQUFLLENBQUMsT0FBRCxjQUFMO0FBZFI7QUFlUSxpQkFBTU4sOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFDTSw4REFEQztBQUVOSCxpQkFBSztBQUZDLFdBQUQsQ0FBVDs7QUFmUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFzQkEsU0FBVWQsWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTWtCLHFFQUFVLENBQUNDLDhEQUFELEVBQWtCcEIsV0FBbEIsQ0FBaEI7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUUsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWCxpQkFBTW1CLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ3JCLFlBQUQsQ0FERSxDQUFELENBQVQ7O0FBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuMTBiMmUxZWNkY2U3M2FiZmQ0OTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHthbGwsZm9yayx0YWtlTGF0ZXN0LHRha2VFdmVyeSAscHV0LCBkZWxheSxjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnOyBcclxuaW1wb3J0IFxyXG4gICAge0VNUF9MSVNUX1JFUVVFU1QsXHJcbiAgICAgRU1QX0xJU1RfU1VDQ0VTUyxcclxuICAgICBFTVBfTElTVF9GQUlMVVJFXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9lbXAnOyBcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQVBJZW1wTGlzdChkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvZW1wJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FFbXBMaXN0KGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSWVtcExpc3QsYWN0aW9uLmRhdGEpOyBcclxuIFxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpFTVBfTElTVF9TVUNDRVNTLCBcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBjb25zb2xlLmxvZygnZWVlZScsZSk7IFxyXG4gICAgICAgIGFsZXJ0KCfsgqzqsIAg7JeQ65+sJyxlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpFTVBfTElTVF9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoZW1wTGlzdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChFTVBfTElTVF9SRVFVRVNULHNhZ2FFbXBMaXN0KTsgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBlbXBMaXN0U2FnYSgpe1xyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaGVtcExpc3QpLCBcclxuICAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==