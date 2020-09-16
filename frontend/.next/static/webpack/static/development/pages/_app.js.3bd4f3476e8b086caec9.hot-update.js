webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count */ "./reducers/count.js");
/* harmony import */ var _emp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emp */ "./reducers/emp.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./reducers/auth.js");
/* harmony import */ var _mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainPosts_1001 */ "./reducers/mainPosts_1001.js");
 // 여러 리듀서들을 하나로 합쳐준다.





var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  count: _count__WEBPACK_IMPORTED_MODULE_1__["default"],
  // 여기에 다른 리듀서들을 더 적으면 된다!
  emp: _emp__WEBPACK_IMPORTED_MODULE_2__["default"],
  auth: _auth__WEBPACK_IMPORTED_MODULE_3__["default"],
  mainPosts_1001: _mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer); // _app.js에서 reducer로 사용된다!

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImNvdW50IiwiZW1wIiwiYXV0aCIsIm1haW5Qb3N0c18xMDAxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQXlDOztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNoQ0MsT0FBSyxFQUFMQSw4Q0FEZ0M7QUFDekI7QUFDUEMsS0FBRyxFQUFIQSw0Q0FGZ0M7QUFHaENDLE1BQUksRUFBSkEsNkNBSGdDO0FBSWhDQyxnQkFBYyxFQUFkQSx1REFBY0E7QUFKa0IsQ0FBRCxDQUFuQztBQU9lTCwwRUFBZixFLENBQTRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjNiZDRmMzQ3NmU4YjA4NmNhZWM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7IC8vIOyXrOufrCDrpqzrk4DshJzrk6TsnYQg7ZWY64KY66GcIO2VqeyzkOykgOuLpC5cclxuaW1wb3J0IGNvdW50IGZyb20gJy4vY291bnQnO1xyXG5pbXBvcnQgZW1wIGZyb20gJy4vZW1wJztcclxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0IG1haW5Qb3N0c18xMDAxIGZyb20gJy4vbWFpblBvc3RzXzEwMDEnIFxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY291bnQsIC8vIOyXrOq4sOyXkCDri6Trpbgg66as65OA7ISc65Ok7J2EIOuNlCDsoIHsnLzrqbQg65Cc64ukIVxyXG4gICAgZW1wLFxyXG4gICAgYXV0aCwgXHJcbiAgICBtYWluUG9zdHNfMTAwMSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsgLy8gX2FwcC5qc+yXkOyEnCByZWR1Y2Vy66GcIOyCrOyaqeuQnOuLpCEiXSwic291cmNlUm9vdCI6IiJ9