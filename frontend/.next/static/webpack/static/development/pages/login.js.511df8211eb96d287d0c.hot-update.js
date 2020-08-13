webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./reducers/auth.js":
/*!**************************!*\
  !*** ./reducers/auth.js ***!
  \**************************/
/*! exports provided: initialState, JOIN_REQUEST, JOIN_SUCCESS, JOIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOAD_LOGIN_REQUEST, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_REQUEST", function() { return LOGOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_FAILURE", function() { return LOGOUT_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  isJoinng: false,
  //회원가입 시도중 
  joined: '',
  //회원가입 성공 
  isLogining: false,
  //로그인 시도 중
  userInfo: null //사용자 정보

};
var JOIN_REQUEST = 'JOIN_REQUEST';
var JOIN_SUCCESS = 'JOIN_SUCCESS';
var JOIN_FAILURE = 'JOIN_FAILURE';
var LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = 'LOGIN_FAILURE';
var LOAD_LOGIN_REQUEST = 'LOAD_LOGIN_REQUEST';
var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
var LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
var LOGOUT_REQUEST = 'LOGOUT_REQUEST';
var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
var LOGOUT_FAILURE = 'LOGOUT_FAILURE';

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
      //로그인 정보 유지 
      //------------------------------------------------

      case LOAD_USER_REQUEST:
        {
          break;
        }

      case LOAD_USER_SUCCESS:
        {
          draft.userInfo = action.data;
          break;
        }

      case LOAD_USER_FAILURE:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hdXRoLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzSm9pbm5nIiwiam9pbmVkIiwiaXNMb2dpbmluZyIsInVzZXJJbmZvIiwiSk9JTl9SRVFVRVNUIiwiSk9JTl9TVUNDRVNTIiwiSk9JTl9GQUlMVVJFIiwiTE9HSU5fUkVRVUVTVCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMVVJFIiwiTE9BRF9MT0dJTl9SRVFVRVNUIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9HT1VUX1JFUVVFU1QiLCJMT0dPVVRfU1VDQ0VTUyIsIkxPR09VVF9GQUlMVVJFIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidHlwZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sSUFBT0EsWUFBWSxHQUFHO0FBRXpCQyxVQUFRLEVBQUcsS0FGYztBQUVQO0FBQ2xCQyxRQUFNLEVBQUssRUFIYztBQUdQO0FBRWxCQyxZQUFVLEVBQUcsS0FMWTtBQUtMO0FBQ3BCQyxVQUFRLEVBQUcsSUFOYyxDQU1IOztBQU5HLENBQXRCO0FBWUEsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBRUEsSUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCOztBQUVQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWlDO0FBQUEsTUFBaENDLEtBQWdDLHVFQUF4Qm5CLFlBQXdCO0FBQUEsTUFBVm9CLE1BQVU7QUFHN0MsU0FBT0MscURBQU8sQ0FBQ0YsS0FBRCxFQUFPLFVBQUNHLEtBQUQsRUFBUztBQUUxQixZQUFPRixNQUFNLENBQUNHLElBQWQ7QUFFUjtBQUNBO0FBQ1ksV0FBS2xCLFlBQUw7QUFBbUI7QUFDZmlCLGVBQUssQ0FBQ3JCLFFBQU4sR0FBaUIsSUFBakI7QUFDQTtBQUNIOztBQUVELFdBQUtLLFlBQUw7QUFBbUI7QUFDZmdCLGVBQUssQ0FBQ3JCLFFBQU4sR0FBaUIsS0FBakI7QUFDQXFCLGVBQUssQ0FBQ3BCLE1BQU4sR0FBaUIsVUFBakI7QUFDQTtBQUNIOztBQUVELFdBQUtLLFlBQUw7QUFBbUI7QUFDZjtBQUNIO0FBQ2I7QUFFQTtBQUNBOztBQUNZLFdBQUtJLGtCQUFMO0FBQTBCO0FBQ3RCVyxlQUFLLENBQUNwQixNQUFOLEdBQWMsRUFBZDtBQUNBO0FBQ0g7QUFDYjtBQUlBO0FBQ0E7O0FBQ1ksV0FBS00sYUFBTDtBQUFvQjtBQUNoQmMsZUFBSyxDQUFDbkIsVUFBTixHQUFtQixJQUFuQjtBQUNBO0FBQ0g7O0FBRUQsV0FBS00sYUFBTDtBQUFvQjtBQUNoQmEsZUFBSyxDQUFDbkIsVUFBTixHQUFtQixLQUFuQjtBQUNBbUIsZUFBSyxDQUFDbEIsUUFBTixHQUFpQmdCLE1BQU0sQ0FBQ0ksSUFBeEI7QUFDQTtBQUNIOztBQUVELFdBQUtkLGFBQUw7QUFBb0I7QUFFaEI7QUFDSDtBQUNiO0FBR0E7QUFDQTs7QUFDWSxXQUFLRSxpQkFBTDtBQUF3QjtBQUNwQjtBQUNIOztBQUVELFdBQUtDLGlCQUFMO0FBQXdCO0FBQ3BCUyxlQUFLLENBQUNsQixRQUFOLEdBQWlCZ0IsTUFBTSxDQUFDSSxJQUF4QjtBQUNBO0FBQ0g7O0FBRUQsV0FBS1YsaUJBQUw7QUFBd0I7QUFFcEI7QUFDSDtBQUNiOztBQUVZO0FBQVc7QUFuRWY7QUF3RUgsR0ExRWEsQ0FBZDtBQTRFSCxDQS9FRDs7QUFrRmVJLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsb2dpbi5qcy41MTFkZjgyMTFlYjk2ZDI4N2QwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0ICBpbml0aWFsU3RhdGUgPSB7XHJcblxyXG4gICAgaXNKb2lubmcgOiBmYWxzZSwgLy/tmozsm5DqsIDsnoUg7Iuc64+E7KSRIFxyXG4gICAgam9pbmVkICAgOiAnJyAgICwgLy/tmozsm5DqsIDsnoUg7ISx6rO1IFxyXG5cclxuICAgIGlzTG9naW5pbmcgOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+EIOykkVxyXG4gICAgdXNlckluZm8gOiBudWxsLCAgICAgIC8v7IKs7Jqp7J6QIOygleuztFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgSk9JTl9SRVFVRVNUID0gJ0pPSU5fUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgSk9JTl9TVUNDRVNTID0gJ0pPSU5fU1VDQ0VTUyc7IFxyXG5leHBvcnQgY29uc3QgSk9JTl9GQUlMVVJFID0gJ0pPSU5fRkFJTFVSRSc7IFxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOX1JFUVVFU1QgPSAnTE9HSU5fUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgTE9HSU5fU1VDQ0VTUyA9ICdMT0dJTl9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMVVJFID0gJ0xPR0lOX0ZBSUxVUkUnOyBcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0xPR0lOX1JFUVVFU1QgPSAnTE9BRF9MT0dJTl9SRVFVRVNUJzsgXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSc7IFxyXG5cclxuZXhwb3J0IGNvbnN0IExPR09VVF9SRVFVRVNUID0gJ0xPR09VVF9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBMT0dPVVRfU1VDQ0VTUyA9ICdMT0dPVVRfU1VDQ0VTUyc7IFxyXG5leHBvcnQgY29uc3QgTE9HT1VUX0ZBSUxVUkUgPSAnTE9HT1VUX0ZBSUxVUkUnOyBcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcblxyXG5cclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuXHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuXHJcbi8v7ZqM7JuQ6rCA7J6FXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgSk9JTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0pvaW5uZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgSk9JTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0pvaW5uZyA9IGZhbHNlOyBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmpvaW5lZCAgID0gJ+2ajOybkOqwgOyehSDshLHqs7UhJzsgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgSk9JTl9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8v66Gc6re47J24IOywvSDtmZTrqbTsoITtmZhcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0xPR0lOX1JFUVVFU1QgOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5qb2luZWQgPScnOyAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vL+uhnOq3uOyduFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIExPR0lOX1JFUVVFU1QgOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9naW5pbmcgPSB0cnVlOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dJTl9TVUNDRVNTIDp7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2luaW5nID0gZmFsc2U7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPR0lOX0ZBSUxVUkUgOntcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vL+uhnOq3uOyduCDsoJXrs7Qg7Jyg7KeAIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUIDp7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1MgOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFIDp7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0IDogIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7IFxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==