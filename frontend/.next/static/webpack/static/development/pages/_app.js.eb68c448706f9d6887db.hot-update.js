webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/emp.js":
/*!*************************!*\
  !*** ./reducers/emp.js ***!
  \*************************/
/*! exports provided: initialState, EMP_LIST_REQUEST, EMP_LIST_SUCCESS, EMP_LIST_FAILURE, EMP_INSERT_REQUEST, EMP_INSERT_SUCCESS, EMP_INSERT_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, default */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9lbXAuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiZW1wbGlzdCIsImltYWdlUGF0aHMiLCJFTVBfTElTVF9SRVFVRVNUIiwiRU1QX0xJU1RfU1VDQ0VTUyIsIkVNUF9MSVNUX0ZBSUxVUkUiLCJFTVBfSU5TRVJUX1JFUVVFU1QiLCJFTVBfSU5TRVJUX1NVQ0NFU1MiLCJFTVBfSU5TRVJUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ0eXBlIiwibGVuZ3RoIiwiZGF0YSIsImZvckVhY2giLCJ2IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sSUFBT0EsWUFBWSxHQUFHO0FBRXpCQyxTQUFPLEVBQUcsRUFGZTtBQUd6QkMsWUFBVSxFQUFHO0FBSFksQ0FBdEI7QUFPQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFHQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFQSxJQUFNQyxxQkFBcUIsR0FBQyx1QkFBNUI7QUFDQSxJQUFNQyxxQkFBcUIsR0FBQyx1QkFBNUI7QUFDQSxJQUFNQyxxQkFBcUIsR0FBQyx1QkFBNUI7O0FBR1AsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBaUM7QUFBQSxNQUFoQ0MsS0FBZ0MsdUVBQXhCYixZQUF3QjtBQUFBLE1BQVZjLE1BQVU7QUFHN0MsU0FBT0MscURBQU8sQ0FBQ0YsS0FBRCxFQUFPLFVBQUNHLEtBQUQsRUFBUztBQUUxQixZQUFPRixNQUFNLENBQUNHLElBQWQ7QUFFSSxXQUFLZCxnQkFBTDtBQUF1QjtBQUNuQjtBQUNIOztBQUdELFdBQUtDLGdCQUFMO0FBQXVCO0FBQ25CWSxlQUFLLENBQUNmLE9BQU4sQ0FBY2lCLE1BQWQsR0FBcUIsQ0FBckIsQ0FEbUIsQ0FFbkI7O0FBQ0FKLGdCQUFNLENBQUNLLElBQVAsQ0FBWUMsT0FBWixDQUFvQixVQUFDQyxDQUFELEVBQUs7QUFDckJMLGlCQUFLLENBQUNmLE9BQU4sQ0FBY3FCLElBQWQsQ0FBbUJELENBQW5CO0FBQ0gsV0FGRDtBQUdBO0FBQ0g7O0FBRUQsV0FBS2hCLGdCQUFMO0FBQXVCO0FBQ25CO0FBQ0g7O0FBR0QsV0FBS0kscUJBQUw7QUFBNEI7QUFDeEI7QUFDSDs7QUFHRCxXQUFLQyxxQkFBTDtBQUE0QjtBQUV4Qk0sZUFBSyxDQUFDZCxVQUFOLENBQWlCZ0IsTUFBakIsR0FBd0IsQ0FBeEI7QUFDQUosZ0JBQU0sQ0FBQ0ssSUFBUCxDQUFZQyxPQUFaLENBQW9CLFVBQUNDLENBQUQsRUFBSztBQUNyQkwsaUJBQUssQ0FBQ2QsVUFBTixDQUFpQm9CLElBQWpCLENBQXNCRCxDQUF0QjtBQUNILFdBRkQ7QUFJQTtBQUNIOztBQUVELFdBQUtWLHFCQUFMO0FBQTRCO0FBQ3hCO0FBQ0g7O0FBT0Q7QUFBVTtBQTdDZDtBQWdESCxHQWxEYSxDQUFkO0FBb0RILENBdkREOztBQTBEZUMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZWI2OGM0NDg3MDZmOWQ2ODg3ZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCAgaW5pdGlhbFN0YXRlID0ge1xyXG5cclxuICAgIGVtcGxpc3QgOiBbXSwgXHJcbiAgICBpbWFnZVBhdGhzIDogW10sXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRU1QX0xJU1RfUkVRVUVTVCA9ICdFTVBfTElTVF9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBFTVBfTElTVF9TVUNDRVNTID0gJ0VNUF9MSVNUX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IEVNUF9MSVNUX0ZBSUxVUkUgPSAnRU1QX0xJU1RfRkFJTFVSRSc7IFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBFTVBfSU5TRVJUX1JFUVVFU1QgPSAnRU1QX0lOU0VSVF9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBFTVBfSU5TRVJUX1NVQ0NFU1MgPSAnRU1QX0lOU0VSVF9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBFTVBfSU5TRVJUX0ZBSUxVUkUgPSAnRU1QX0lOU0VSVF9GQUlMVVJFJzsgXHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUPVwiVVBMT0FEX0lNQUdFU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1M9XCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRT1cIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcblxyXG5cclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuXHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRU1QX0xJU1RfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgY2FzZSBFTVBfTElTVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5lbXBsaXN0Lmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIC8v67Cw7Je0IOy0iOq4sO2ZlFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5lbXBsaXN0LnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIEVNUF9MSVNUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocy5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdCA6IGJyZWFrOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7IFxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==