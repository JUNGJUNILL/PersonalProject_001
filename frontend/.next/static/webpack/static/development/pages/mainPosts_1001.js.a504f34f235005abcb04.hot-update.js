webpackHotUpdate("static\\development\\pages\\mainPosts_1001.js",{

/***/ "./reducers/mainPosts_1001.js":
/*!************************************!*\
  !*** ./reducers/mainPosts_1001.js ***!
  \************************************/
/*! exports provided: initialState, MAINPOSTS_1001_LIST_REQUEST, MAINPOSTS_1001_LIST_SUCCESS, MAINPOSTS_1001_LIST_FAILURE, MAINPOSTS_1001_DETAIL_INFO_REQUEST, MAINPOSTS_1001_DETAIL_INFO_SUCCESS, MAINPOSTS_1001_DETAIL_INFO_FAILURE, TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_LIST_REQUEST", function() { return MAINPOSTS_1001_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_LIST_SUCCESS", function() { return MAINPOSTS_1001_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_LIST_FAILURE", function() { return MAINPOSTS_1001_LIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_DETAIL_INFO_REQUEST", function() { return MAINPOSTS_1001_DETAIL_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_DETAIL_INFO_SUCCESS", function() { return MAINPOSTS_1001_DETAIL_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_DETAIL_INFO_FAILURE", function() { return MAINPOSTS_1001_DETAIL_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_REQUEST", function() { return TEST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_SUCCESS", function() { return TEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_FAILURE", function() { return TEST_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  mainPosts_1001_list: [],
  imagePaths: []
};
var MAINPOSTS_1001_LIST_REQUEST = 'MAINPOSTS_1001_LIST_REQUEST';
var MAINPOSTS_1001_LIST_SUCCESS = 'MAINPOSTS_1001_LIST_SUCCESS';
var MAINPOSTS_1001_LIST_FAILURE = 'MAINPOSTS_1001_LIST_FAILURE';
var MAINPOSTS_1001_DETAIL_INFO_REQUEST = 'MAINPOSTS_1001_DETAIL_INFO_REQUEST';
var MAINPOSTS_1001_DETAIL_INFO_SUCCESS = 'MAINPOSTS_1001_DETAIL_INFO_SUCCESS';
var MAINPOSTS_1001_DETAIL_INFO_FAILURE = 'MAINPOSTS_1001_DETAIL_INFO_FAILURE';
var TEST_REQUEST = 'TEST_REQUEST';
var TEST_SUCCESS = 'TEST_SUCCESS';
var TEST_FAILURE = 'TEST_FAILURE';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      //게시글 리스트 가져오기       
      //----------------------------------------
      case MAINPOSTS_1001_LIST_REQUEST:
        {
          break;
        }

      case MAINPOSTS_1001_LIST_SUCCESS:
        {
          draft.mainPosts_1001_list.length = 0; //배열 초기화

          action.data.forEach(function (v) {
            draft.mainPosts_1001_list.push(v);
          });
          break;
        }

      case MAINPOSTS_1001_LIST_FAILURE:
        {
          break;
        }
      //----------------------------------------
      //게시글 상세 페이지 가져오기 
      //----------------------------------------

      case MAINPOSTS_1001_DETAIL_INFO_REQUEST:
        {
          break;
        }

      case MAINPOSTS_1001_DETAIL_INFO_SUCCESS:
        {
          break;
        }

      case MAINPOSTS_1001_DETAIL_INFO_FAILURE:
        {
          break;
        }
      //----------------------------------------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHNfMTAwMV9saXN0IiwiaW1hZ2VQYXRocyIsIk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCIsIk1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QiLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRSIsIlRFU1RfUkVRVUVTVCIsIlRFU1RfU1VDQ0VTUyIsIlRFU1RfRkFJTFVSRSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInR5cGUiLCJsZW5ndGgiLCJkYXRhIiwiZm9yRWFjaCIsInYiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHTyxJQUFPQSxZQUFZLEdBQUc7QUFFekJDLHFCQUFtQixFQUFHLEVBRkc7QUFHekJDLFlBQVUsRUFBRztBQUhZLENBQXRCO0FBT0EsSUFBTUMsMkJBQTJCLEdBQUMsNkJBQWxDO0FBQ0EsSUFBTUMsMkJBQTJCLEdBQUMsNkJBQWxDO0FBQ0EsSUFBTUMsMkJBQTJCLEdBQUMsNkJBQWxDO0FBRUEsSUFBTUMsa0NBQWtDLEdBQUUsb0NBQTFDO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUUsb0NBQTFDO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUUsb0NBQTFDO0FBR0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCOztBQUdQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWlDO0FBQUEsTUFBaENDLEtBQWdDLHVFQUF4QmIsWUFBd0I7QUFBQSxNQUFWYyxNQUFVO0FBRzdDLFNBQU9DLHFEQUFPLENBQUNGLEtBQUQsRUFBTyxVQUFDRyxLQUFELEVBQVM7QUFFMUIsWUFBT0YsTUFBTSxDQUFDRyxJQUFkO0FBRVI7QUFDQTtBQUNZLFdBQUtkLDJCQUFMO0FBQWtDO0FBQzlCO0FBQ0g7O0FBRUQsV0FBS0MsMkJBQUw7QUFBa0M7QUFDOUJZLGVBQUssQ0FBQ2YsbUJBQU4sQ0FBMEJpQixNQUExQixHQUFpQyxDQUFqQyxDQUQ4QixDQUU5Qjs7QUFDQUosZ0JBQU0sQ0FBQ0ssSUFBUCxDQUFZQyxPQUFaLENBQW9CLFVBQUNDLENBQUQsRUFBSztBQUNyQkwsaUJBQUssQ0FBQ2YsbUJBQU4sQ0FBMEJxQixJQUExQixDQUErQkQsQ0FBL0I7QUFDSCxXQUZEO0FBR0E7QUFDSDs7QUFFRCxXQUFLaEIsMkJBQUw7QUFBa0M7QUFDOUI7QUFDSDtBQUNiO0FBUUE7QUFDQTs7QUFDWSxXQUFLQyxrQ0FBTDtBQUF5QztBQUNyQztBQUNIOztBQUVELFdBQUtDLGtDQUFMO0FBQXlDO0FBR3JDO0FBQ0g7O0FBRUQsV0FBS0Msa0NBQUw7QUFBeUM7QUFDckM7QUFDSDtBQUNiOztBQU1ZO0FBQVU7QUFqRGQ7QUFvREgsR0F0RGEsQ0FBZDtBQXdESCxDQTNERDs7QUE4RGVJLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxtYWluUG9zdHNfMTAwMS5qcy5hNTA0ZjM0ZjIzNTAwNWFiY2IwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0ICBpbml0aWFsU3RhdGUgPSB7XHJcblxyXG4gICAgbWFpblBvc3RzXzEwMDFfbGlzdCA6IFtdLCBcclxuICAgIGltYWdlUGF0aHMgOiBbXSxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1Q9J01BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1M9J01BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkU9J01BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCA9J01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1NVQ0NFU1MgPSdNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFID0nTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRSc7IFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBURVNUX1JFUVVFU1QgPSAnVEVTVF9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBURVNUX1NVQ0NFU1MgPSAnVEVTVF9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBURVNUX0ZBSUxVUkUgPSAnVEVTVF9GQUlMVVJFJzsgXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PntcclxuXHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG5cclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG5cclxuLy/qsozsi5zquIAg66as7Iqk7Yq4IOqwgOyguOyYpOq4sCAgICAgICBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfTElTVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMV9saXN0Lmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIC8v67Cw7Je0IOy0iOq4sO2ZlFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMV9saXN0LnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRToge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy/qsozsi5zquIAg7IOB7IS4IO2OmOydtOyngCDqsIDsoLjsmKTquLAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19TVUNDRVNTOiB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdCA6IGJyZWFrOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7IFxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==