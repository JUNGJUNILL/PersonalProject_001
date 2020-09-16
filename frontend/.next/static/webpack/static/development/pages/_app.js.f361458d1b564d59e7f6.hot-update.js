webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _studySaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./studySaga */ "./sagas/studySaga.js");
/* harmony import */ var _empListSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empListSaga */ "./sagas/empListSaga.js");
/* harmony import */ var _mainPosts_1001Saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainPosts_1001Saga */ "./sagas/mainPosts_1001Saga.js");
/* harmony import */ var _authSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authSaga */ "./sagas/authSaga.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);







axios__WEBPACK_IMPORTED_MODULE_6___default.a.defaults.baseURL = 'http://localhost:3095/api';
function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_studySaga__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_empListSaga__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_authSaga__WEBPACK_IMPORTED_MODULE_5__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_mainPosts_1001Saga__WEBPACK_IMPORTED_MODULE_4__["default"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

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

/***/ }),

/***/ "./sagas/mainPosts_1001Saga.js":
/*!*************************************!*\
  !*** ./sagas/mainPosts_1001Saga.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mainPosts_1001Sage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaMainPosts_1001List),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchMainPosts_1001),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(mainPosts_1001Sage);



 //mainPost_1001 SELECT
//-----------------------------------------------------------------------------------

function APImainPosts_1001List(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/mainPosts_1001', {
    data: data
  }, {
    withCredentials: true
  });
}

_c = APImainPosts_1001List;

function sagaMainPosts_1001List(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaMainPosts_1001List$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(APImainPosts_1001List, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__["MAINPOSTS_1001_LIST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 14;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          alert('error', _context.t0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__["MAINPOSTS_1001_LIST_FAILURE"],
            error: _context.t0
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function watchMainPosts_1001() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchMainPosts_1001$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__["MAINPOSTS_1001_LIST_REQUEST"], sagaMainPosts_1001List);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
} //-----------------------------------------------------------------------------------


function mainPosts_1001Sage() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function mainPosts_1001Sage$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchMainPosts_1001)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

var _c;

$RefreshReg$(_c, "APImainPosts_1001List");

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

/***/ }),

/***/ "./sagas/mainPosts_1001Sage.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9tYWluUG9zdHNfMTAwMVNhZ2EuanMiXSwibmFtZXMiOlsicm9vdFNhZ2EiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImFsbCIsImNhbGwiLCJzdHVkeVNhZ2EiLCJlbXBMaXN0U2FnYSIsImF1dGhTYWdhIiwibWFpblBvc3RzXzEwMDFTYWdhIiwic2FnYU1haW5Qb3N0c18xMDAxTGlzdCIsIndhdGNoTWFpblBvc3RzXzEwMDEiLCJtYWluUG9zdHNfMTAwMVNhZ2UiLCJBUEltYWluUG9zdHNfMTAwMUxpc3QiLCJkYXRhIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsImFjdGlvbiIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1MiLCJjb25zb2xlIiwiZXJyb3IiLCJhbGVydCIsIk1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FTeUJBLFE7O0FBVHpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBeUIsMkJBQXpCO0FBRWUsU0FBVUgsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxpQkFBTUksOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDQyxrREFBRCxDQURFLEVBRU5ELCtEQUFJLENBQUNFLG9EQUFELENBRkUsRUFHTkYsK0RBQUksQ0FBQ0csaURBQUQsQ0FIRSxFQUlOSCwrREFBSSxDQUFDSSwyREFBRCxDQUpFLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0NTTEMsc0I7bUdBb0JBQyxtQjttR0FVZUMsa0I7O0FBaER6QjtBQUNBO0NBV0E7QUFDQTs7QUFDQSxTQUFTQyxxQkFBVCxDQUErQkMsSUFBL0IsRUFBb0M7QUFDaEMsU0FBT2IsNENBQUssQ0FBQ2MsSUFBTixDQUFXLGlCQUFYLEVBQTZCO0FBQUNELFFBQUksRUFBSkE7QUFBRCxHQUE3QixFQUFvQztBQUFDRSxtQkFBZSxFQUFDO0FBQWpCLEdBQXBDLENBQVA7QUFDSDs7S0FGUUgscUI7O0FBSVQsU0FBVUgsc0JBQVYsQ0FBaUNPLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHcUIsaUJBQU1aLCtEQUFJLENBQUNRLHFCQUFELEVBQXVCSSxNQUFNLENBQUNILElBQTlCLENBQVY7O0FBSHJCO0FBR1lJLGdCQUhaO0FBQUE7QUFJTSxpQkFBT0MsOERBQUcsQ0FBQztBQUNMQyxnQkFBSSxFQUFDQyxvRkFEQTtBQUVMUCxnQkFBSSxFQUFDSSxNQUFNLENBQUNKO0FBRlAsV0FBRCxDQUFWOztBQUpOO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFXUVEsaUJBQU8sQ0FBQ0MsS0FBUjtBQUNBQyxlQUFLLENBQUMsT0FBRCxjQUFMO0FBWlI7QUFhUSxpQkFBTUwsOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFDSyxvRkFEQztBQUVORixpQkFBSztBQUZDLFdBQUQsQ0FBVDs7QUFiUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFvQkEsU0FBVVosbUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1lLHFFQUFVLENBQUNDLG9GQUFELEVBQTZCakIsc0JBQTdCLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FHQTs7O0FBT2UsU0FBVUUsa0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVgsaUJBQU1SLDhEQUFHLENBQUMsQ0FDTndCLCtEQUFJLENBQUNqQixtQkFBRCxDQURFLENBQUQsQ0FBVDs7QUFGVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5mMzYxNDU4ZDFiNTY0ZDU5ZTdmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthbGwsY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJzsgXHJcbmltcG9ydCBzdHVkeVNhZ2EgIGZyb20gJy4vc3R1ZHlTYWdhJztcclxuaW1wb3J0IGVtcExpc3RTYWdhIGZyb20gJy4vZW1wTGlzdFNhZ2EnXHJcbmltcG9ydCBtYWluUG9zdHNfMTAwMVNhZ2EgZnJvbSAnLi9tYWluUG9zdHNfMTAwMVNhZ2EnOyBcclxuaW1wb3J0IGF1dGhTYWdhIGZyb20gJy4vYXV0aFNhZ2EnOyBcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwOTUvYXBpJzsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgY2FsbChzdHVkeVNhZ2EpLCBcclxuICAgICAgICBjYWxsKGVtcExpc3RTYWdhKSwgXHJcbiAgICAgICAgY2FsbChhdXRoU2FnYSksIFxyXG4gICAgICAgIGNhbGwobWFpblBvc3RzXzEwMDFTYWdhKSwgXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge2FsbCxmb3JrLHRha2VMYXRlc3QsdGFrZUV2ZXJ5ICxwdXQsIGRlbGF5LGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7IFxyXG5pbXBvcnQgXHJcbiAgICB7XHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNULFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkUsICAgIFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvbWFpblBvc3RzXzEwMDEnOyBcclxuXHJcblxyXG5cclxuLy9tYWluUG9zdF8xMDAxIFNFTEVDVFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSW1haW5Qb3N0c18xMDAxTGlzdChkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFpblBvc3RzXzEwMDEnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2FnYU1haW5Qb3N0c18xMDAxTGlzdChhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEltYWluUG9zdHNfMTAwMUxpc3QsYWN0aW9uLmRhdGEpOyBcclxuICAgICAgeWllbGQgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfTElTVF9TVUNDRVNTLCBcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG4gICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOiBlLCBcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1haW5Qb3N0c18xMDAxKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KE1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCxzYWdhTWFpblBvc3RzXzEwMDFMaXN0KTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogbWFpblBvc3RzXzEwMDFTYWdlKCl7XHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTWFpblBvc3RzXzEwMDEpLCBcclxuICAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==