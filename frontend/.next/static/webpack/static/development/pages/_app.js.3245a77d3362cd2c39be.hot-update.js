webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/mainPosts_1001Saga.js":
/*!*************************************!*\
  !*** ./sagas/mainPosts_1001Saga.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mainPosts_1001Saga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaMainPosts_1001List),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchMainPosts_1001),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaMainPosts_1001Detail),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchMainPosts_1001Detail),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(mainPosts_1001Saga);



 //mainPost_1001 리스트 
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
//mainPost_1001 상세정보 
//-----------------------------------------------------------------------------------


function APImainPosts_1001Detail(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/mainPosts_1001/mainPosts_1001Detail', {
    data: data
  }, {
    withCredentials: true
  });
}

_c2 = APImainPosts_1001Detail;

function sagaMainPosts_1001Detail(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaMainPosts_1001Detail$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(APImainPosts_1001Detail, action.data);

        case 3:
          result = _context3.sent;
          console.log('detail-->', result.data);
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__["MAINPOSTS_1001_DETAIL_INFO_SUCCESS"],
            data: result.data
          });

        case 7:
          _context3.next = 15;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          alert('error', _context3.t0);
          _context3.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__["MAINPOSTS_1001_DETAIL_INFO_FAILURE"],
            error: _context3.t0
          });

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function watchMainPosts_1001Detail() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchMainPosts_1001Detail$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__["MAINPOSTS_1001_DETAIL_INFO_REQUEST"], sagaMainPosts_1001Detail);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
} //-----------------------------------------------------------------------------------


function mainPosts_1001Saga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function mainPosts_1001Saga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchMainPosts_1001), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchMainPosts_1001Detail)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

var _c, _c2;

$RefreshReg$(_c, "APImainPosts_1001List");
$RefreshReg$(_c2, "APImainPosts_1001Detail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9tYWluUG9zdHNfMTAwMVNhZ2EuanMiXSwibmFtZXMiOlsic2FnYU1haW5Qb3N0c18xMDAxTGlzdCIsIndhdGNoTWFpblBvc3RzXzEwMDEiLCJzYWdhTWFpblBvc3RzXzEwMDFEZXRhaWwiLCJ3YXRjaE1haW5Qb3N0c18xMDAxRGV0YWlsIiwibWFpblBvc3RzXzEwMDFTYWdhIiwiQVBJbWFpblBvc3RzXzEwMDFMaXN0IiwiZGF0YSIsImF4aW9zIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsImFjdGlvbiIsImNhbGwiLCJyZXN1bHQiLCJwdXQiLCJ0eXBlIiwiTUFJTlBPU1RTXzEwMDFfTElTVF9TVUNDRVNTIiwiY29uc29sZSIsImVycm9yIiwiYWxlcnQiLCJNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNUIiwiQVBJbWFpblBvc3RzXzEwMDFEZXRhaWwiLCJsb2ciLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FzQlVBLHNCO21HQW9CQUMsbUI7bUdBY0FDLHdCO21HQXFCQUMseUI7bUdBU2VDLGtCOztBQXRGekI7QUFDQTtDQWVBO0FBQ0E7O0FBQ0EsU0FBU0MscUJBQVQsQ0FBK0JDLElBQS9CLEVBQW9DO0FBQ2hDLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxpQkFBWCxFQUE2QjtBQUFDRixRQUFJLEVBQUpBO0FBQUQsR0FBN0IsRUFBb0M7QUFBQ0csbUJBQWUsRUFBQztBQUFqQixHQUFwQyxDQUFQO0FBQ0g7O0tBRlFKLHFCOztBQUlULFNBQVVMLHNCQUFWLENBQWlDVSxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR3FCLGlCQUFNQywrREFBSSxDQUFDTixxQkFBRCxFQUF1QkssTUFBTSxDQUFDSixJQUE5QixDQUFWOztBQUhyQjtBQUdZTSxnQkFIWjtBQUFBO0FBSU0saUJBQU9DLDhEQUFHLENBQUM7QUFDTEMsZ0JBQUksRUFBQ0Msb0ZBREE7QUFFTFQsZ0JBQUksRUFBQ00sTUFBTSxDQUFDTjtBQUZQLFdBQUQsQ0FBVjs7QUFKTjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV1FVLGlCQUFPLENBQUNDLEtBQVI7QUFDQUMsZUFBSyxDQUFDLE9BQUQsY0FBTDtBQVpSO0FBYVEsaUJBQU1MLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBQ0ssb0ZBREM7QUFFTkYsaUJBQUs7QUFGQyxXQUFELENBQVQ7O0FBYlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0JBLFNBQVVoQixtQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTW1CLHFFQUFVLENBQUNDLG9GQUFELEVBQTZCckIsc0JBQTdCLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FHQTtBQUtBO0FBQ0E7OztBQUNBLFNBQVNzQix1QkFBVCxDQUFpQ2hCLElBQWpDLEVBQXNDO0FBQ2xDLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxzQ0FBWCxFQUFrRDtBQUFDRixRQUFJLEVBQUpBO0FBQUQsR0FBbEQsRUFBeUQ7QUFBQ0csbUJBQWUsRUFBQztBQUFqQixHQUF6RCxDQUFQO0FBQ0g7O01BRlFhLHVCOztBQUlULFNBQVVwQix3QkFBVixDQUFtQ1EsTUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdxQixpQkFBTUMsK0RBQUksQ0FBQ1csdUJBQUQsRUFBeUJaLE1BQU0sQ0FBQ0osSUFBaEMsQ0FBVjs7QUFIckI7QUFHWU0sZ0JBSFo7QUFJTUksaUJBQU8sQ0FBQ08sR0FBUixDQUFZLFdBQVosRUFBMEJYLE1BQU0sQ0FBQ04sSUFBakM7QUFKTjtBQUtNLGlCQUFPTyw4REFBRyxDQUFDO0FBQ0xDLGdCQUFJLEVBQUNVLDJGQURBO0FBRUxsQixnQkFBSSxFQUFDTSxNQUFNLENBQUNOO0FBRlAsV0FBRCxDQUFWOztBQUxOO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZUVUsaUJBQU8sQ0FBQ0MsS0FBUjtBQUNBQyxlQUFLLENBQUMsT0FBRCxlQUFMO0FBYlI7QUFjUSxpQkFBTUwsOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFDVywyRkFEQztBQUVOUixpQkFBSztBQUZDLFdBQUQsQ0FBVDs7QUFkUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFxQkEsU0FBVWQseUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1pQixxRUFBVSxDQUFDTSwyRkFBRCxFQUFvQ3hCLHdCQUFwQyxDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBR0E7OztBQU1lLFNBQVVFLGtCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVYLGlCQUFNdUIsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDM0IsbUJBQUQsQ0FERSxFQUVOMkIsK0RBQUksQ0FBQ3pCLHlCQUFELENBRkUsQ0FBRCxDQUFUOztBQUZXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjMyNDVhNzdkMzM2MmNkMmMzOWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7YWxsLGZvcmssdGFrZUxhdGVzdCx0YWtlRXZlcnkgLHB1dCwgZGVsYXksY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJzsgXHJcbmltcG9ydCBcclxuICAgIHtcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfTElTVF9TVUNDRVNTLFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSwgICAgXHJcblxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFLFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvbWFpblBvc3RzXzEwMDEnOyBcclxuXHJcblxyXG5cclxuLy9tYWluUG9zdF8xMDAxIOumrOyKpO2KuCBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUEltYWluUG9zdHNfMTAwMUxpc3QoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL21haW5Qb3N0c18xMDAxJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNYWluUG9zdHNfMTAwMUxpc3QoYWN0aW9uKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJbWFpblBvc3RzXzEwMDFMaXN0LGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgIHlpZWxkICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjogZSwgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hNYWluUG9zdHNfMTAwMSgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1Qsc2FnYU1haW5Qb3N0c18xMDAxTGlzdCk7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcbi8vbWFpblBvc3RfMTAwMSDsg4HshLjsoJXrs7QgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJbWFpblBvc3RzXzEwMDFEZXRhaWwoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxRGV0YWlsJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNYWluUG9zdHNfMTAwMURldGFpbChhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEltYWluUG9zdHNfMTAwMURldGFpbCxhY3Rpb24uZGF0YSk7IFxyXG4gICAgICBjb25zb2xlLmxvZygnZGV0YWlsLS0+JyAsIHJlc3VsdC5kYXRhKTtcclxuICAgICAgeWllbGQgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUywgXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTWFpblBvc3RzXzEwMDFEZXRhaWwoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCxzYWdhTWFpblBvc3RzXzEwMDFEZXRhaWwpOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG1haW5Qb3N0c18xMDAxU2FnYSgpe1xyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaE1haW5Qb3N0c18xMDAxKSwgXHJcbiAgICAgICAgZm9yayh3YXRjaE1haW5Qb3N0c18xMDAxRGV0YWlsKSwgXHJcbiAgICAgXSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=