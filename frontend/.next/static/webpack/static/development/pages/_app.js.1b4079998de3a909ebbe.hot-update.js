webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _studySaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./studySaga */ "./sagas/studySaga.js");
/* harmony import */ var _empListSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empListSaga */ "./sagas/empListSaga.js");
/* harmony import */ var _mainPosts_1001Sage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainPosts_1001Sage */ "./sagas/mainPosts_1001Sage.js");
/* harmony import */ var _authSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authSaga */ "./sagas/authSaga.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);







axios__WEBPACK_IMPORTED_MODULE_6___default.a.defaults.baseURL = 'http://localhost:3095/api';
function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_studySaga__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_empListSaga__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_authSaga__WEBPACK_IMPORTED_MODULE_5__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_mainPosts_1001Sage__WEBPACK_IMPORTED_MODULE_4__["default"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyb290U2FnYSIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiYWxsIiwiY2FsbCIsInN0dWR5U2FnYSIsImVtcExpc3RTYWdhIiwiYXV0aFNhZ2EiLCJtYWluUG9zdHNfMTAwMVNhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQVN5QkEsUTs7QUFUekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF5QiwyQkFBekI7QUFFZSxTQUFVSCxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNSSw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNDLGtEQUFELENBREUsRUFFTkQsK0RBQUksQ0FBQ0Usb0RBQUQsQ0FGRSxFQUdORiwrREFBSSxDQUFDRyxpREFBRCxDQUhFLEVBSU5ILCtEQUFJLENBQUNJLDJEQUFELENBSkUsQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjFiNDA3OTk5OGRlM2E5MDllYmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FsbCxjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnOyBcclxuaW1wb3J0IHN0dWR5U2FnYSAgZnJvbSAnLi9zdHVkeVNhZ2EnO1xyXG5pbXBvcnQgZW1wTGlzdFNhZ2EgZnJvbSAnLi9lbXBMaXN0U2FnYSdcclxuaW1wb3J0IG1haW5Qb3N0c18xMDAxU2FnZSBmcm9tICcuL21haW5Qb3N0c18xMDAxU2FnZSc7IFxyXG5pbXBvcnQgYXV0aFNhZ2EgZnJvbSAnLi9hdXRoU2FnYSc7IFxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA5NS9hcGknOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBjYWxsKHN0dWR5U2FnYSksIFxyXG4gICAgICAgIGNhbGwoZW1wTGlzdFNhZ2EpLCBcclxuICAgICAgICBjYWxsKGF1dGhTYWdhKSwgXHJcbiAgICAgICAgY2FsbChtYWluUG9zdHNfMTAwMVNhZ2UpLCBcclxuICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9