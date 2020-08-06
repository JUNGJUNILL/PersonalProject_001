webpackHotUpdate("static\\development\\pages\\join.js",{

/***/ "./reducers/auth.js":
/*!**************************!*\
  !*** ./reducers/auth.js ***!
  \**************************/
/*! exports provided: initialState, JOIN_REQUEST, JOIN_SUCCESS, JOIN_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_REQUEST", function() { return JOIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_SUCCESS", function() { return JOIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_FAILURE", function() { return JOIN_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  isJoinng: false,
  //회원가입 시도중 
  joined: '' //회원가입 성공 

};
var JOIN_REQUEST = 'JOIN_REQUEST';
var JOIN_SUCCESS = 'JOIN_SUCCESS';
var JOIN_FAILURE = 'JOIN_FAILURE';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case JOIN_REQUEST:
        {
          draft.isJoinng = true;
          break;
        }

      case JOIN_SUCCESS:
        {
          draft.isJoinng = false;
          draft.joined = '회원가입 성공!';
          break;
        }

      case JOIN_FAILURE:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hdXRoLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzSm9pbm5nIiwiam9pbmVkIiwiSk9JTl9SRVFVRVNUIiwiSk9JTl9TVUNDRVNTIiwiSk9JTl9GQUlMVVJFIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sSUFBT0EsWUFBWSxHQUFHO0FBRXpCQyxVQUFRLEVBQUcsS0FGYztBQUVQO0FBQ2xCQyxRQUFNLEVBQUssRUFIYyxDQUdQOztBQUhPLENBQXRCO0FBT0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCOztBQUVQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWlDO0FBQUEsTUFBaENDLEtBQWdDLHVFQUF4QlAsWUFBd0I7QUFBQSxNQUFWUSxNQUFVO0FBRzdDLFNBQU9DLHFEQUFPLENBQUNGLEtBQUQsRUFBTyxVQUFDRyxLQUFELEVBQVM7QUFFMUIsWUFBT0YsTUFBTSxDQUFDRyxJQUFkO0FBRUksV0FBS1IsWUFBTDtBQUFtQjtBQUNmTyxlQUFLLENBQUNULFFBQU4sR0FBaUIsSUFBakI7QUFDQTtBQUNIOztBQUVELFdBQUtHLFlBQUw7QUFBbUI7QUFDZk0sZUFBSyxDQUFDVCxRQUFOLEdBQWlCLEtBQWpCO0FBQ0FTLGVBQUssQ0FBQ1IsTUFBTixHQUFpQixVQUFqQjtBQUNBO0FBQ0g7O0FBRUQsV0FBS0csWUFBTDtBQUFtQjtBQUNmO0FBQ0g7O0FBRUQ7QUFFQTtBQW5CSjtBQXNCSCxHQXhCYSxDQUFkO0FBMEJILENBN0JEOztBQWdDZUMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGpvaW4uanMuZWJjMjIxZTY3ZGFkY2E4MjAzNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCAgaW5pdGlhbFN0YXRlID0ge1xyXG5cclxuICAgIGlzSm9pbm5nIDogZmFsc2UsIC8v7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkSBcclxuICAgIGpvaW5lZCAgIDogJycgICAsIC8v7ZqM7JuQ6rCA7J6FIOyEseqztSBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBKT0lOX1JFUVVFU1QgPSAnSk9JTl9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBKT0lOX1NVQ0NFU1MgPSAnSk9JTl9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBKT0lOX0ZBSUxVUkUgPSAnSk9JTl9GQUlMVVJFJzsgXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG5cclxuXHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcblxyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEpPSU5fUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNKb2lubmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIEpPSU5fU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNKb2lubmcgPSBmYWxzZTsgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5qb2luZWQgICA9ICftmozsm5DqsIDsnoUg7ISx6rO1ISc7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIEpPSU5fRkFJTFVSRToge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0IDogXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7IFxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==