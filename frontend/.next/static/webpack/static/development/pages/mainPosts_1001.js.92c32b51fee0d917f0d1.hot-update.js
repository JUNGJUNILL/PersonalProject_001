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
  mainPosts_1001: [],
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

function isEmpty(value) {
  if (value == null || value.length === 0) {
    return "";
  } else {
    return value;
  }
}

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
          draft.mainPosts_1001.length = 0; //배열 초기화

          action.data.forEach(function (v) {
            draft.mainPosts_1001.push(isEmpty(v));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHNfMTAwMSIsImltYWdlUGF0aHMiLCJNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QiLCJNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkUiLCJURVNUX1JFUVVFU1QiLCJURVNUX1NVQ0NFU1MiLCJURVNUX0ZBSUxVUkUiLCJpc0VtcHR5IiwidmFsdWUiLCJsZW5ndGgiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ0eXBlIiwiZGF0YSIsImZvckVhY2giLCJ2IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sSUFBT0EsWUFBWSxHQUFHO0FBRXpCQyxnQkFBYyxFQUFHLEVBRlE7QUFHekJDLFlBQVUsRUFBRztBQUhZLENBQXRCO0FBT0EsSUFBTUMsMkJBQTJCLEdBQUMsNkJBQWxDO0FBQ0EsSUFBTUMsMkJBQTJCLEdBQUMsNkJBQWxDO0FBQ0EsSUFBTUMsMkJBQTJCLEdBQUMsNkJBQWxDO0FBRUEsSUFBTUMsa0NBQWtDLEdBQUUsb0NBQTFDO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUUsb0NBQTFDO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUUsb0NBQTFDO0FBR0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGNBQXJCOztBQUVQLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXVCO0FBRW5CLE1BQUdBLEtBQUssSUFBSSxJQUFULElBQWlCQSxLQUFLLENBQUNDLE1BQU4sS0FBaUIsQ0FBckMsRUFBd0M7QUFFakMsV0FBTyxFQUFQO0FBRUwsR0FKRixNQUlPO0FBRUMsV0FBT0QsS0FBUDtBQUVOO0FBRUw7O0FBRUQsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBaUM7QUFBQSxNQUFoQ0MsS0FBZ0MsdUVBQXhCaEIsWUFBd0I7QUFBQSxNQUFWaUIsTUFBVTtBQUc3QyxTQUFPQyxxREFBTyxDQUFDRixLQUFELEVBQU8sVUFBQ0csS0FBRCxFQUFTO0FBRTFCLFlBQU9GLE1BQU0sQ0FBQ0csSUFBZDtBQUVSO0FBQ0E7QUFDWSxXQUFLakIsMkJBQUw7QUFBa0M7QUFDOUI7QUFDSDs7QUFFRCxXQUFLQywyQkFBTDtBQUFrQztBQUM5QmUsZUFBSyxDQUFDbEIsY0FBTixDQUFxQmEsTUFBckIsR0FBNEIsQ0FBNUIsQ0FEOEIsQ0FFOUI7O0FBQ0FHLGdCQUFNLENBQUNJLElBQVAsQ0FBWUMsT0FBWixDQUFvQixVQUFDQyxDQUFELEVBQUs7QUFFckJKLGlCQUFLLENBQUNsQixjQUFOLENBQXFCdUIsSUFBckIsQ0FBMEJaLE9BQU8sQ0FBQ1csQ0FBRCxDQUFqQztBQUNILFdBSEQ7QUFJQTtBQUNIOztBQUVELFdBQUtsQiwyQkFBTDtBQUFrQztBQUM5QjtBQUNIO0FBQ2I7QUFRQTtBQUNBOztBQUNZLFdBQUtDLGtDQUFMO0FBQXlDO0FBQ3JDO0FBQ0g7O0FBRUQsV0FBS0Msa0NBQUw7QUFBeUM7QUFHckM7QUFDSDs7QUFFRCxXQUFLQyxrQ0FBTDtBQUF5QztBQUNyQztBQUNIO0FBQ2I7O0FBTVk7QUFBVTtBQWxEZDtBQXFESCxHQXZEYSxDQUFkO0FBeURILENBNUREOztBQStEZU8sc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1haW5Qb3N0c18xMDAxLmpzLjkyYzMyYjUxZmVlMGQ5MTdmMGQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuXHJcblxyXG5leHBvcnQgY29uc3QgIGluaXRpYWxTdGF0ZSA9IHtcclxuXHJcbiAgICBtYWluUG9zdHNfMTAwMSA6IFtdLCBcclxuICAgIGltYWdlUGF0aHMgOiBbXSxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1Q9J01BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1M9J01BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkU9J01BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCA9J01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1NVQ0NFU1MgPSdNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFID0nTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRSc7IFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBURVNUX1JFUVVFU1QgPSAnVEVTVF9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBURVNUX1NVQ0NFU1MgPSAnVEVTVF9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBURVNUX0ZBSUxVUkUgPSAnVEVTVF9GQUlMVVJFJzsgXHJcblxyXG5mdW5jdGlvbiBpc0VtcHR5KHZhbHVlKXtcclxuXHJcbiAgICBpZih2YWx1ZSA9PSBudWxsIHx8IHZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAgfSBlbHNle1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG5cclxuICAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG5cclxuXHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcblxyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcblxyXG4vL+qyjOyLnOq4gCDrpqzsiqTtirgg6rCA7KC47Jik6riwICAgICAgIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIC8v67Cw7Je0IOy0iOq4sO2ZlFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodik9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDEucHVzaChpc0VtcHR5KHYpKTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfTElTVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL+qyjOyLnOq4gCDsg4HshLgg7Y6Y7J207KeAIOqwgOyguOyYpOq4sCBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1NVQ0NFU1M6IHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0IDogYnJlYWs7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTsgXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9