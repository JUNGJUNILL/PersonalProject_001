webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/emp.js":
/*!*************************!*\
  !*** ./reducers/emp.js ***!
  \*************************/
/*! exports provided: initialState, EMP_LIST_REQUEST, EMP_LIST_SUCCESS, EMP_LIST_FAILURE, EMP_INSERT_REQUEST, EMP_INSERT_SUCCESS, EMP_INSERT_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, DETAIL_INFO_REQUEST, DETAIL_INFO_SUCCESS, DETAIL_INFO_FAILURE, TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_LIST_REQUEST", function() { return EMP_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_LIST_SUCCESS", function() { return EMP_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_LIST_FAILURE", function() { return EMP_LIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_INSERT_REQUEST", function() { return EMP_INSERT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_INSERT_SUCCESS", function() { return EMP_INSERT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_INSERT_FAILURE", function() { return EMP_INSERT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_INFO_REQUEST", function() { return DETAIL_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_INFO_SUCCESS", function() { return DETAIL_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_INFO_FAILURE", function() { return DETAIL_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_REQUEST", function() { return TEST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_SUCCESS", function() { return TEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_FAILURE", function() { return TEST_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  emplist: [],
  imagePaths: []
};
var EMP_LIST_REQUEST = 'EMP_LIST_REQUEST';
var EMP_LIST_SUCCESS = 'EMP_LIST_SUCCESS';
var EMP_LIST_FAILURE = 'EMP_LIST_FAILURE';
var EMP_INSERT_REQUEST = 'EMP_INSERT_REQUEST';
var EMP_INSERT_SUCCESS = 'EMP_INSERT_SUCCESS';
var EMP_INSERT_FAILURE = 'EMP_INSERT_FAILURE';
var UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
var UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
var UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
var DETAIL_INFO_REQUEST = 'DETAIL_INFO_REQUEST';
var DETAIL_INFO_SUCCESS = 'DETAIL_INFO_SUCCESS';
var DETAIL_INFO_FAILURE = 'DETAIL_INFO_FAILURE';
var TEST_REQUEST = 'TEST_REQUEST';
var TEST_SUCCESS = 'TEST_SUCCESS';
var TEST_FAILURE = 'TEST_FAILURE';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      //----------------------------------------
      case EMP_LIST_REQUEST:
        {
          break;
        }

      case EMP_LIST_SUCCESS:
        {
          draft.emplist.length = 0; //배열 초기화

          action.data.forEach(function (v) {
            draft.emplist.push(v);
          });
          break;
        }

      case EMP_LIST_FAILURE:
        {
          break;
        }
      //----------------------------------------
      //----------------------------------------

      case UPLOAD_IMAGES_REQUEST:
        {
          break;
        }

      case UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths.length = 0;
          action.data.forEach(function (v) {
            draft.imagePaths.push(v);
          });
          break;
        }

      case UPLOAD_IMAGES_FAILURE:
        {
          break;
        }
      //----------------------------------------
      //게시글 작성 
      //----------------------------------------

      case EMP_INSERT_REQUEST:
        {
          break;
        }

      case EMP_INSERT_SUCCESS:
        {
          break;
        }

      case EMP_INSERT_FAILURE:
        {
          break;
        }
      //----------------------------------------
      //게시글 상세 페이지 가져오기 
      //----------------------------------------

      case DETAIL_INFO_REQUEST:
        {
          break;
        }

      case DETAIL_INFO_SUCCESS:
        {
          break;
        }

      case DETAIL_INFO_FAILURE:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9lbXAuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiZW1wbGlzdCIsImltYWdlUGF0aHMiLCJFTVBfTElTVF9SRVFVRVNUIiwiRU1QX0xJU1RfU1VDQ0VTUyIsIkVNUF9MSVNUX0ZBSUxVUkUiLCJFTVBfSU5TRVJUX1JFUVVFU1QiLCJFTVBfSU5TRVJUX1NVQ0NFU1MiLCJFTVBfSU5TRVJUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJERVRBSUxfSU5GT19SRVFVRVNUIiwiREVUQUlMX0lORk9fU1VDQ0VTUyIsIkRFVEFJTF9JTkZPX0ZBSUxVUkUiLCJURVNUX1JFUVVFU1QiLCJURVNUX1NVQ0NFU1MiLCJURVNUX0ZBSUxVUkUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ0eXBlIiwibGVuZ3RoIiwiZGF0YSIsImZvckVhY2giLCJ2IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sSUFBT0EsWUFBWSxHQUFHO0FBRXpCQyxTQUFPLEVBQUcsRUFGZTtBQUd6QkMsWUFBVSxFQUFHO0FBSFksQ0FBdEI7QUFPQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFHQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFQSxJQUFNQyxxQkFBcUIsR0FBQyx1QkFBNUI7QUFDQSxJQUFNQyxxQkFBcUIsR0FBQyx1QkFBNUI7QUFDQSxJQUFNQyxxQkFBcUIsR0FBQyx1QkFBNUI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRSxxQkFBM0I7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRSxxQkFBM0I7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRSxxQkFBM0I7QUFFQSxJQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsY0FBckI7O0FBR1AsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBaUM7QUFBQSxNQUFoQ0MsS0FBZ0MsdUVBQXhCbkIsWUFBd0I7QUFBQSxNQUFWb0IsTUFBVTtBQUc3QyxTQUFPQyxxREFBTyxDQUFDRixLQUFELEVBQU8sVUFBQ0csS0FBRCxFQUFTO0FBRTFCLFlBQU9GLE1BQU0sQ0FBQ0csSUFBZDtBQUdSO0FBQ1ksV0FBS3BCLGdCQUFMO0FBQXVCO0FBQ25CO0FBQ0g7O0FBR0QsV0FBS0MsZ0JBQUw7QUFBdUI7QUFDbkJrQixlQUFLLENBQUNyQixPQUFOLENBQWN1QixNQUFkLEdBQXFCLENBQXJCLENBRG1CLENBRW5COztBQUNBSixnQkFBTSxDQUFDSyxJQUFQLENBQVlDLE9BQVosQ0FBb0IsVUFBQ0MsQ0FBRCxFQUFLO0FBQ3JCTCxpQkFBSyxDQUFDckIsT0FBTixDQUFjMkIsSUFBZCxDQUFtQkQsQ0FBbkI7QUFDSCxXQUZEO0FBR0E7QUFDSDs7QUFFRCxXQUFLdEIsZ0JBQUw7QUFBdUI7QUFDbkI7QUFDSDtBQUNiO0FBR0E7O0FBQ1ksV0FBS0kscUJBQUw7QUFBNEI7QUFDeEI7QUFDSDs7QUFHRCxXQUFLQyxxQkFBTDtBQUE0QjtBQUV4QlksZUFBSyxDQUFDcEIsVUFBTixDQUFpQnNCLE1BQWpCLEdBQXdCLENBQXhCO0FBQ0FKLGdCQUFNLENBQUNLLElBQVAsQ0FBWUMsT0FBWixDQUFvQixVQUFDQyxDQUFELEVBQUs7QUFDckJMLGlCQUFLLENBQUNwQixVQUFOLENBQWlCMEIsSUFBakIsQ0FBc0JELENBQXRCO0FBQ0gsV0FGRDtBQUlBO0FBQ0g7O0FBRUQsV0FBS2hCLHFCQUFMO0FBQTRCO0FBQ3hCO0FBQ0g7QUFDYjtBQUVBO0FBQ0E7O0FBQ1ksV0FBS0wsa0JBQUw7QUFBeUI7QUFDckI7QUFDSDs7QUFHRCxXQUFLQyxrQkFBTDtBQUF5QjtBQUdyQjtBQUNIOztBQUVELFdBQUtDLGtCQUFMO0FBQXlCO0FBQ3JCO0FBQ0g7QUFDYjtBQUtBO0FBQ0E7O0FBQ1ksV0FBS0ksbUJBQUw7QUFBMEI7QUFDdEI7QUFDSDs7QUFHRCxXQUFLQyxtQkFBTDtBQUEwQjtBQUd0QjtBQUNIOztBQUVELFdBQUtDLG1CQUFMO0FBQTBCO0FBQ3RCO0FBQ0g7QUFDYjs7QUFNWTtBQUFVO0FBeEZkO0FBMkZILEdBN0ZhLENBQWQ7QUErRkgsQ0FsR0Q7O0FBcUdlSSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy40NGY5Yjk4ZDBkOTQwZTE3NTE5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0ICBpbml0aWFsU3RhdGUgPSB7XHJcblxyXG4gICAgZW1wbGlzdCA6IFtdLCBcclxuICAgIGltYWdlUGF0aHMgOiBbXSxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFTVBfTElTVF9SRVFVRVNUID0gJ0VNUF9MSVNUX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IEVNUF9MSVNUX1NVQ0NFU1MgPSAnRU1QX0xJU1RfU1VDQ0VTUyc7IFxyXG5leHBvcnQgY29uc3QgRU1QX0xJU1RfRkFJTFVSRSA9ICdFTVBfTElTVF9GQUlMVVJFJzsgXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEVNUF9JTlNFUlRfUkVRVUVTVCA9ICdFTVBfSU5TRVJUX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IEVNUF9JTlNFUlRfU1VDQ0VTUyA9ICdFTVBfSU5TRVJUX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IEVNUF9JTlNFUlRfRkFJTFVSRSA9ICdFTVBfSU5TRVJUX0ZBSUxVUkUnOyBcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1Q9XCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUz1cIlVQTE9BRF9JTUFHRVNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFPVwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgREVUQUlMX0lORk9fUkVRVUVTVCA9J0RFVEFJTF9JTkZPX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IERFVEFJTF9JTkZPX1NVQ0NFU1MgPSdERVRBSUxfSU5GT19TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBERVRBSUxfSU5GT19GQUlMVVJFID0nREVUQUlMX0lORk9fRkFJTFVSRSc7IFxyXG5cclxuZXhwb3J0IGNvbnN0IFRFU1RfUkVRVUVTVCA9ICdURVNUX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IFRFU1RfU1VDQ0VTUyA9ICdURVNUX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IFRFU1RfRkFJTFVSRSA9ICdURVNUX0ZBSUxVUkUnOyBcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG5cclxuXHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcblxyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcblxyXG4gICAgICAgICAgICBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgRU1QX0xJU1RfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgY2FzZSBFTVBfTElTVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5lbXBsaXN0Lmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIC8v67Cw7Je0IOy0iOq4sO2ZlFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5lbXBsaXN0LnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIEVNUF9MSVNUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzLnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8v6rKM7Iuc6riAIOyekeyEsSBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgRU1QX0lOU0VSVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjYXNlIEVNUF9JTlNFUlRfU1VDQ0VTUzoge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgRU1QX0lOU0VSVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG4vL+qyjOyLnOq4gCDsg4HshLgg7Y6Y7J207KeAIOqwgOyguOyYpOq4sCBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgREVUQUlMX0lORk9fUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgY2FzZSBERVRBSUxfSU5GT19TVUNDRVNTOiB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBERVRBSUxfSU5GT19GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdCA6IGJyZWFrOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7IFxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==