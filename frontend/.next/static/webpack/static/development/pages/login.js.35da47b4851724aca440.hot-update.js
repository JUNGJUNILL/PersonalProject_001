webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./reducers/auth.js":
/*!**************************!*\
  !*** ./reducers/auth.js ***!
  \**************************/
/*! exports provided: initialState, JOIN_REQUEST, JOIN_SUCCESS, JOIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOAD_LOGIN_REQUEST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_REQUEST", function() { return JOIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_SUCCESS", function() { return JOIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_FAILURE", function() { return JOIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILURE", function() { return LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LOGIN_REQUEST", function() { return LOAD_LOGIN_REQUEST; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  isJoinng: false,
  //회원가입 시도중 
  joined: '',
  //회원가입 성공 
  isLogining: false,
  //로그인 시도 중
  userInfo: [] //사용자 정보

};
var JOIN_REQUEST = 'JOIN_REQUEST';
var JOIN_SUCCESS = 'JOIN_SUCCESS';
var JOIN_FAILURE = 'JOIN_FAILURE';
var LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = 'LOGIN_FAILURE';
var LOAD_LOGIN_REQUEST = 'LOAD_LOGIN_REQUEST';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      //회원가입
      //------------------------------------------------
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
      //------------------------------------------------
      //로그인 창 화면전환
      //------------------------------------------------

      case LOAD_LOGIN_REQUEST:
        {
          draft.joined = '';
          break;
        }
      //------------------------------------------------
      //로그인
      //------------------------------------------------

      case LOGIN_REQUEST:
        {
          draft.isLogining = true;
          break;
        }

      case LOGIN_SUCCESS:
        {
          draft.isLogining = false;
          draft.userInfo = action.data;
          break;
        }

      case LOGIN_FAILURE:
        {
          break;
        }
      //------------------------------------------------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hdXRoLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzSm9pbm5nIiwiam9pbmVkIiwiaXNMb2dpbmluZyIsInVzZXJJbmZvIiwiSk9JTl9SRVFVRVNUIiwiSk9JTl9TVUNDRVNTIiwiSk9JTl9GQUlMVVJFIiwiTE9HSU5fUkVRVUVTVCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMVVJFIiwiTE9BRF9MT0dJTl9SRVFVRVNUIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidHlwZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sSUFBT0EsWUFBWSxHQUFHO0FBRXpCQyxVQUFRLEVBQUcsS0FGYztBQUVQO0FBQ2xCQyxRQUFNLEVBQUssRUFIYztBQUdQO0FBRWxCQyxZQUFVLEVBQUcsS0FMWTtBQUtMO0FBQ3BCQyxVQUFRLEVBQUcsRUFOYyxDQU1MOztBQU5LLENBQXRCO0FBV0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBRUEsSUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCOztBQUVQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWlDO0FBQUEsTUFBaENDLEtBQWdDLHVFQUF4QmIsWUFBd0I7QUFBQSxNQUFWYyxNQUFVO0FBRzdDLFNBQU9DLHFEQUFPLENBQUNGLEtBQUQsRUFBTyxVQUFDRyxLQUFELEVBQVM7QUFFMUIsWUFBT0YsTUFBTSxDQUFDRyxJQUFkO0FBRVI7QUFDQTtBQUNZLFdBQUtaLFlBQUw7QUFBbUI7QUFDZlcsZUFBSyxDQUFDZixRQUFOLEdBQWlCLElBQWpCO0FBQ0E7QUFDSDs7QUFFRCxXQUFLSyxZQUFMO0FBQW1CO0FBQ2ZVLGVBQUssQ0FBQ2YsUUFBTixHQUFpQixLQUFqQjtBQUNBZSxlQUFLLENBQUNkLE1BQU4sR0FBaUIsVUFBakI7QUFDQTtBQUNIOztBQUVELFdBQUtLLFlBQUw7QUFBbUI7QUFDZjtBQUNIO0FBQ2I7QUFFQTtBQUNBOztBQUNZLFdBQUtJLGtCQUFMO0FBQTBCO0FBQ3RCSyxlQUFLLENBQUNkLE1BQU4sR0FBYyxFQUFkO0FBQ0E7QUFDSDtBQUNiO0FBSUE7QUFDQTs7QUFDWSxXQUFLTSxhQUFMO0FBQW9CO0FBQ2hCUSxlQUFLLENBQUNiLFVBQU4sR0FBbUIsSUFBbkI7QUFDQTtBQUNIOztBQUVELFdBQUtNLGFBQUw7QUFBb0I7QUFDaEJPLGVBQUssQ0FBQ2IsVUFBTixHQUFtQixLQUFuQjtBQUNBYSxlQUFLLENBQUNaLFFBQU4sR0FBaUJVLE1BQU0sQ0FBQ0ksSUFBeEI7QUFDQTtBQUNIOztBQUVELFdBQUtSLGFBQUw7QUFBb0I7QUFFaEI7QUFDSDtBQUNiOztBQUVZO0FBQWdCO0FBakRwQjtBQXNESCxHQXhEYSxDQUFkO0FBMERILENBN0REOztBQWdFZUUsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvZ2luLmpzLjM1ZGE0N2I0ODUxNzI0YWNhNDQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuXHJcblxyXG5leHBvcnQgY29uc3QgIGluaXRpYWxTdGF0ZSA9IHtcclxuXHJcbiAgICBpc0pvaW5uZyA6IGZhbHNlLCAvL+2ajOybkOqwgOyehSDsi5zrj4TspJEgXHJcbiAgICBqb2luZWQgICA6ICcnICAgLCAvL+2ajOybkOqwgOyehSDshLHqs7UgXHJcblxyXG4gICAgaXNMb2dpbmluZyA6IGZhbHNlLCAvL+uhnOq3uOyduCDsi5zrj4Qg7KSRXHJcbiAgICB1c2VySW5mbyA6IFtdLCAgICAgIC8v7IKs7Jqp7J6QIOygleuztFxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBKT0lOX1JFUVVFU1QgPSAnSk9JTl9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBKT0lOX1NVQ0NFU1MgPSAnSk9JTl9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBKT0lOX0ZBSUxVUkUgPSAnSk9JTl9GQUlMVVJFJzsgXHJcblxyXG5leHBvcnQgY29uc3QgTE9HSU5fUkVRVUVTVCA9ICdMT0dJTl9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBMT0dJTl9TVUNDRVNTID0gJ0xPR0lOX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IExPR0lOX0ZBSUxVUkUgPSAnTE9HSU5fRkFJTFVSRSc7IFxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTE9HSU5fUkVRVUVTVCA9ICdMT0FEX0xPR0lOX1JFUVVFU1QnOyBcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcblxyXG5cclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuXHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuXHJcbi8v7ZqM7JuQ6rCA7J6FXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgSk9JTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0pvaW5uZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgSk9JTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0pvaW5uZyA9IGZhbHNlOyBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmpvaW5lZCAgID0gJ+2ajOybkOqwgOyehSDshLHqs7UhJzsgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgSk9JTl9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8v66Gc6re47J24IOywvSDtmZTrqbTsoITtmZhcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0xPR0lOX1JFUVVFU1QgOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5qb2luZWQgPScnOyAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vL+uhnOq3uOyduFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIExPR0lOX1JFUVVFU1QgOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9naW5pbmcgPSB0cnVlOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dJTl9TVUNDRVNTIDp7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2luaW5nID0gZmFsc2U7IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTsgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0dJTl9GQUlMVVJFIDp7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0IDogICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTsgXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9