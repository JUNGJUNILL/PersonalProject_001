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
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaEmpInsert),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchInsertEmp),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(empListSaga);





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
          console.log(result);
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
          alert('error', _context.t0);
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
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_emp__WEBPACK_IMPORTED_MODULE_3__["EMP_LIST_REQUEST"], sagaEmpList);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function APIempInsert(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/');
}

_c2 = APIempInsert;

function sagaEmpInsert(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaEmpInsert$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          console.log('sagaEmpInsert==>', action.data); // const result = yield call(APIempInsert,action.data); 
          // yield  put({
          //       type:EMP_INSERT_SUCCESS, 
          //       data:result.data,
          //   });

          _context3.next = 10;
          break;

        case 4:
          _context3.prev = 4;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          alert('error', _context3.t0);
          _context3.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_emp__WEBPACK_IMPORTED_MODULE_3__["EMP_INSERT_FAILURE"],
            error: _context3.t0
          });

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 4]]);
}

function watchInsertEmp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchInsertEmp$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_emp__WEBPACK_IMPORTED_MODULE_3__["EMP_INSERT_REQUEST"], sagaEmpInsert);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function empListSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function empListSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchempList)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

var _c, _c2;

$RefreshReg$(_c, "APIempList");
$RefreshReg$(_c2, "APIempInsert");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9lbXBMaXN0U2FnYS5qcyJdLCJuYW1lcyI6WyJzYWdhRW1wTGlzdCIsIndhdGNoZW1wTGlzdCIsInNhZ2FFbXBJbnNlcnQiLCJ3YXRjaEluc2VydEVtcCIsImVtcExpc3RTYWdhIiwiQVBJZW1wTGlzdCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJhY3Rpb24iLCJjYWxsIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInB1dCIsInR5cGUiLCJFTVBfTElTVF9TVUNDRVNTIiwiZXJyb3IiLCJhbGVydCIsIkVNUF9MSVNUX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiRU1QX0xJU1RfUkVRVUVTVCIsIkFQSWVtcEluc2VydCIsIkVNUF9JTlNFUlRfRkFJTFVSRSIsIkVNUF9JTlNFUlRfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQWtCVUEsVzttR0FxQkFDLFk7bUdBV0FDLGE7bUdBeUJBQyxjO21HQUllQyxXOztBQS9FekI7QUFDQTtBQUNBOztBQVlBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQXlCO0FBQ3JCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxNQUFYLEVBQWtCO0FBQUNGLFFBQUksRUFBSkE7QUFBRCxHQUFsQixFQUF5QjtBQUFDRyxtQkFBZSxFQUFDO0FBQWpCLEdBQXpCLENBQVA7QUFDSDs7S0FGUUosVTs7QUFJVCxTQUFVTCxXQUFWLENBQXNCVSxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR3FCLGlCQUFNQywrREFBSSxDQUFDTixVQUFELEVBQVlLLE1BQU0sQ0FBQ0osSUFBbkIsQ0FBVjs7QUFIckI7QUFHWU0sZ0JBSFo7QUFJUUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBSlI7QUFLTSxpQkFBT0csOERBQUcsQ0FBQztBQUNMQyxnQkFBSSxFQUFDQyw4REFEQTtBQUVMWCxnQkFBSSxFQUFDTSxNQUFNLENBQUNOO0FBRlAsV0FBRCxDQUFWOztBQUxOO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZUU8saUJBQU8sQ0FBQ0ssS0FBUjtBQUNBQyxlQUFLLENBQUMsT0FBRCxjQUFMO0FBYlI7QUFjUSxpQkFBTUosOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFDSSw4REFEQztBQUVORixpQkFBSztBQUZDLFdBQUQsQ0FBVDs7QUFkUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFxQkEsU0FBVWpCLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1vQixxRUFBVSxDQUFDQyw4REFBRCxFQUFrQnRCLFdBQWxCLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtBLFNBQVN1QixZQUFULENBQXNCakIsSUFBdEIsRUFBMkI7QUFFdkIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLEdBQVgsQ0FBUDtBQUVIOztNQUpRZSxZOztBQU1ULFNBQVVyQixhQUFWLENBQXdCUSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJUUcsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWlDSixNQUFNLENBQUNKLElBQXhDLEVBSlIsQ0FNUTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVZSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBY1VPLGlCQUFPLENBQUNLLEtBQVI7QUFDQUMsZUFBSyxDQUFDLE9BQUQsZUFBTDtBQWZWO0FBZ0JVLGlCQUFNSiw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUNRLGdFQURDO0FBRU5OLGlCQUFLO0FBRkMsV0FBRCxDQUFUOztBQWhCVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF5QkEsU0FBVWYsY0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTWtCLHFFQUFVLENBQUNJLGdFQUFELEVBQW9CdkIsYUFBcEIsQ0FBaEI7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUUsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWCxpQkFBTXNCLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQzFCLFlBQUQsQ0FERSxDQUFELENBQVQ7O0FBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuODljMmQ1MzU1ZDAzZGJjODM0YTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHthbGwsZm9yayx0YWtlTGF0ZXN0LHRha2VFdmVyeSAscHV0LCBkZWxheSxjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnOyBcclxuaW1wb3J0IFxyXG4gICAge0VNUF9MSVNUX1JFUVVFU1QsXHJcbiAgICAgRU1QX0xJU1RfU1VDQ0VTUyxcclxuICAgICBFTVBfTElTVF9GQUlMVVJFLFxyXG4gICAgIEVNUF9JTlNFUlRfUkVRVUVTVCxcclxuICAgICBFTVBfSU5TRVJUX1NVQ0NFU1MsXHJcbiAgICAgRU1QX0lOU0VSVF9GQUlMVVJFXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9lbXAnOyBcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQVBJZW1wTGlzdChkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvZW1wJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FFbXBMaXN0KGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSWVtcExpc3QsYWN0aW9uLmRhdGEpOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpOyBcclxuICAgICAgeWllbGQgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6RU1QX0xJU1RfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpFTVBfTElTVF9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoZW1wTGlzdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChFTVBfTElTVF9SRVFVRVNULHNhZ2FFbXBMaXN0KTsgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBBUEllbXBJbnNlcnQoZGF0YSl7XHJcblxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy8nKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FFbXBJbnNlcnQoYWN0aW9uKXtcclxuXHJcbiAgICB0cnl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhRW1wSW5zZXJ0PT0+JyAsIGFjdGlvbi5kYXRhKTsgXHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJZW1wSW5zZXJ0LGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgICAgLy8geWllbGQgIHB1dCh7XHJcbiAgICAgICAgLy8gICAgICAgdHlwZTpFTVBfSU5TRVJUX1NVQ0NFU1MsIFxyXG4gICAgICAgIC8vICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgLy8gICB9KTtcclxuICBcclxuICAgICAgfWNhdGNoKGUpe1xyXG4gIFxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcbiAgICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgIHR5cGU6RU1QX0lOU0VSVF9GQUlMVVJFLCBcclxuICAgICAgICAgICAgICBlcnJvcjogZSwgXHJcbiAgICAgICAgICB9KTsgXHJcbiAgICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hJbnNlcnRFbXAoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRU1QX0lOU0VSVF9SRVFVRVNULHNhZ2FFbXBJbnNlcnQpOyBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGVtcExpc3RTYWdhKCl7XHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoZW1wTGlzdCksIFxyXG4gICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9