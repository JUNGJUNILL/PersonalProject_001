webpackHotUpdate("static\\development\\pages\\emp.js",{

/***/ "./reducers/emp.js":
/*!*************************!*\
  !*** ./reducers/emp.js ***!
  \*************************/
/*! exports provided: initialState, EMP_LIST_REQUEST, EMP_LIST_SUCCESS, EMP_LIST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_LIST_REQUEST", function() { return EMP_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_LIST_SUCCESS", function() { return EMP_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_LIST_FAILURE", function() { return EMP_LIST_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  emplist: []
};
var EMP_LIST_REQUEST = 'EMP_LIST_REQUEST';
var EMP_LIST_SUCCESS = 'EMP_LIST_SUCCESS';
var EMP_LIST_FAILURE = 'EMP_LIST_FAILURE';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case EMP_LIST_REQUEST:
        {
          break;
        }

      case EMP_LIST_SUCCESS:
        {
          action.data.forEach(function (v) {
            if (emplist.length === 0) {
              draft.emplist.push(v);
            }
          });
          break;
        }

      case EMP_LIST_FAILURE:
        {
          break;
        }

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9lbXAuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiZW1wbGlzdCIsIkVNUF9MSVNUX1JFUVVFU1QiLCJFTVBfTElTVF9TVUNDRVNTIiwiRU1QX0xJU1RfRkFJTFVSRSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInR5cGUiLCJkYXRhIiwiZm9yRWFjaCIsInYiLCJsZW5ndGgiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHTyxJQUFPQSxZQUFZLEdBQUc7QUFFekJDLFNBQU8sRUFBRztBQUZlLENBQXRCO0FBS0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCOztBQUVQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWlDO0FBQUEsTUFBaENDLEtBQWdDLHVFQUF4Qk4sWUFBd0I7QUFBQSxNQUFWTyxNQUFVO0FBRzdDLFNBQU9DLHFEQUFPLENBQUNGLEtBQUQsRUFBTyxVQUFDRyxLQUFELEVBQVM7QUFFMUIsWUFBT0YsTUFBTSxDQUFDRyxJQUFkO0FBRUksV0FBS1IsZ0JBQUw7QUFBdUI7QUFDbkI7QUFDSDs7QUFFRCxXQUFLQyxnQkFBTDtBQUF1QjtBQUNuQkksZ0JBQU0sQ0FBQ0ksSUFBUCxDQUFZQyxPQUFaLENBQW9CLFVBQUNDLENBQUQsRUFBSztBQUNyQixnQkFBR1osT0FBTyxDQUFDYSxNQUFSLEtBQWtCLENBQXJCLEVBQXVCO0FBQ25CTCxtQkFBSyxDQUFDUixPQUFOLENBQWNjLElBQWQsQ0FBbUJGLENBQW5CO0FBQ0g7QUFFSixXQUxEO0FBTUE7QUFDSDs7QUFFRCxXQUFLVCxnQkFBTDtBQUF1QjtBQUNuQjtBQUNIOztBQUVEO0FBQVU7QUFwQmQ7QUF1QkgsR0F6QmEsQ0FBZDtBQTJCSCxDQTlCRDs7QUFpQ2VDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxlbXAuanMuYjQ0Yjc2ZDE3YWQ1YTc1MTZjMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCAgaW5pdGlhbFN0YXRlID0ge1xyXG5cclxuICAgIGVtcGxpc3QgOiBbXSwgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFTVBfTElTVF9SRVFVRVNUID0gJ0VNUF9MSVNUX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IEVNUF9MSVNUX1NVQ0NFU1MgPSAnRU1QX0xJU1RfU1VDQ0VTUyc7IFxyXG5leHBvcnQgY29uc3QgRU1QX0xJU1RfRkFJTFVSRSA9ICdFTVBfTElTVF9GQUlMVVJFJzsgXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG5cclxuXHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcblxyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEVNUF9MSVNUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBFTVBfTElTVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uZGF0YS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVtcGxpc3QubGVuZ3RoID09PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC5lbXBsaXN0LnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBFTVBfTElTVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQgOiBicmVhazsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pOyBcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=