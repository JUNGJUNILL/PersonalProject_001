webpackHotUpdate("static\\development\\pages\\_app.js",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHNfMTAwMV9saXN0IiwiaW1hZ2VQYXRocyIsIk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCIsIk1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QiLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRSIsIlRFU1RfUkVRVUVTVCIsIlRFU1RfU1VDQ0VTUyIsIlRFU1RfRkFJTFVSRSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInR5cGUiLCJsZW5ndGgiLCJkYXRhIiwiZm9yRWFjaCIsInYiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHTyxJQUFPQSxZQUFZLEdBQUc7QUFFekJDLHFCQUFtQixFQUFHLEVBRkc7QUFHekJDLFlBQVUsRUFBRztBQUhZLENBQXRCO0FBT0EsSUFBTUMsMkJBQTJCLEdBQUMsNkJBQWxDO0FBQ0EsSUFBTUMsMkJBQTJCLEdBQUMsNkJBQWxDO0FBQ0EsSUFBTUMsMkJBQTJCLEdBQUMsNkJBQWxDO0FBRUEsSUFBTUMsa0NBQWtDLEdBQUUsb0NBQTFDO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUUsb0NBQTFDO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUUsb0NBQTFDO0FBR0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCOztBQUdQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWlDO0FBQUEsTUFBaENDLEtBQWdDLHVFQUF4QmIsWUFBd0I7QUFBQSxNQUFWYyxNQUFVO0FBRzdDLFNBQU9DLHFEQUFPLENBQUNGLEtBQUQsRUFBTyxVQUFDRyxLQUFELEVBQVM7QUFFMUIsWUFBT0YsTUFBTSxDQUFDRyxJQUFkO0FBRVI7QUFDQTtBQUNZLFdBQUtkLDJCQUFMO0FBQWtDO0FBQzlCO0FBQ0g7O0FBRUQsV0FBS0MsMkJBQUw7QUFBa0M7QUFDOUJZLGVBQUssQ0FBQ2YsbUJBQU4sQ0FBMEJpQixNQUExQixHQUFpQyxDQUFqQyxDQUQ4QixDQUU5Qjs7QUFDQUosZ0JBQU0sQ0FBQ0ssSUFBUCxDQUFZQyxPQUFaLENBQW9CLFVBQUNDLENBQUQsRUFBSztBQUNyQkwsaUJBQUssQ0FBQ2YsbUJBQU4sQ0FBMEJxQixJQUExQixDQUErQkQsQ0FBL0I7QUFDSCxXQUZEO0FBR0E7QUFDSDs7QUFFRCxXQUFLaEIsMkJBQUw7QUFBa0M7QUFDOUI7QUFDSDtBQUNiO0FBUUE7QUFDQTs7QUFDWSxXQUFLQyxrQ0FBTDtBQUF5QztBQUNyQztBQUNIOztBQUVELFdBQUtDLGtDQUFMO0FBQXlDO0FBR3JDO0FBQ0g7O0FBRUQsV0FBS0Msa0NBQUw7QUFBeUM7QUFDckM7QUFDSDtBQUNiOztBQU1ZO0FBQVU7QUFqRGQ7QUFvREgsR0F0RGEsQ0FBZDtBQXdESCxDQTNERDs7QUE4RGVJLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmE1MDRmMzRmMjM1MDA1YWJjYjA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuXHJcblxyXG5leHBvcnQgY29uc3QgIGluaXRpYWxTdGF0ZSA9IHtcclxuXHJcbiAgICBtYWluUG9zdHNfMTAwMV9saXN0IDogW10sIFxyXG4gICAgaW1hZ2VQYXRocyA6IFtdLFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVD0nTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUz0nTUFJTlBPU1RTXzEwMDFfTElTVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRT0nTUFJTlBPU1RTXzEwMDFfTElTVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUID0nTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUyA9J01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkUgPSdNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFJzsgXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFRFU1RfUkVRVUVTVCA9ICdURVNUX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IFRFU1RfU1VDQ0VTUyA9ICdURVNUX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IFRFU1RfRkFJTFVSRSA9ICdURVNUX0ZBSUxVUkUnOyBcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG5cclxuXHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcblxyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcblxyXG4vL+qyjOyLnOq4gCDrpqzsiqTtirgg6rCA7KC47Jik6riwICAgICAgIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxX2xpc3QubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgICAgICAgLy/rsLDsl7Qg7LSI6riw7ZmUXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uZGF0YS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxX2xpc3QucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfTElTVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL+qyjOyLnOq4gCDsg4HshLgg7Y6Y7J207KeAIOqwgOyguOyYpOq4sCBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1NVQ0NFU1M6IHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0IDogYnJlYWs7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTsgXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9