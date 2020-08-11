webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AppLayOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppLayOut */ "./pages/AppLayOut.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CSS_antdMobile_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CSS/antdMobile.css */ "./CSS/antdMobile.css");
/* harmony import */ var _CSS_antdMobile_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CSS_antdMobile_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");



var _this = undefined,
    _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












 //프로젝트 고정 틀

var Project01_TodoList = function Project01_TodoList(_ref) {
  var Component = _ref.Component;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "TodoList"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.min.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd-mobile/2.3.3/antd-mobile.css",
    integrity: "sha256-uZbNsqglsHyapiY6Nlj8o9kAmliY/rWNCTqthjIHIXw=",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  })), __jsx(_AppLayOut__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(Component, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  })));
};

_c = Project01_TodoList;

Project01_TodoList.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var ctx, Component, pageProps, state, isServer, cookie;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //▲ next에서 제공해줌
            ctx = context.ctx, Component = context.Component;
            pageProps = {};
            state = ctx.store.getState(); //프로젝트 전체 stat를 가져 올 수 있다. 

            isServer =  false || !!context.req || !!context.ctx.req;
            cookie = isServer ? ctx.req.headers.cookie : '';

            if (isServer && cookie) {
              console.log('웩?'); //클라이언 환경에서는 브라우저가 쿠키를 넣어주고, 
              //SSR일 때는 우리가 직접 넣어줘야 한다. 

              axios__WEBPACK_IMPORTED_MODULE_6___default.a.defaults.headers.Cookie = cookie;
            } //(새로고침)로그인 정보 유지


            if (!state.auth.userInfo) {
              console.log('잌??', state.auth.userInfo);
              ctx.store.dispatch({
                type: _reducers_auth__WEBPACK_IMPORTED_MODULE_15__["LOAD_USER_REQUEST"]
              });
            }

            if (!Component.getInitialProps) {
              _context.next = 11;
              break;
            }

            _context.next = 10;
            return Component.getInitialProps(ctx);

          case 10:
            pageProps = _context.sent;

          case 11:
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

Project01_TodoList.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.elementType.isRequired
};

var loggerMiddleware = function loggerMiddleware(_ref3) {
  var dispatch = _ref3.dispatch,
      getState = _ref3.getState;
  return function (next) {
    return function (action) {
      console.log(action);
      return next(action);
    };
  };
};

var configureStore = function configureStore() {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_13__["default"])();
  var middlewares = [sagaMiddleware, loggerMiddleware]; // 미들웨어들을 넣으면 된다.

  var enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_12__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_10__["applyMiddleware"].apply(void 0, middlewares));
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_10__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_11__["default"], enhancer); //react에서 redux를 사용하기 위해서는 createStore로 store를 생성해 주어야 한다. 
  //redux-next-wapper 6 버전 부터는 Provider store={store}를 내부적으로 해 준다. 

  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_14__["default"]);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_14__["default"]);
  return store;
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (_c2 = wrapper.withRedux(Project01_TodoList));

var _c, _c2;

$RefreshReg$(_c, "Project01_TodoList");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiUHJvamVjdDAxX1RvZG9MaXN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImN0eCIsInBhZ2VQcm9wcyIsInN0YXRlIiwic3RvcmUiLCJnZXRTdGF0ZSIsImlzU2VydmVyIiwicmVxIiwiY29va2llIiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImRlZmF1bHRzIiwiQ29va2llIiwiYXV0aCIsInVzZXJJbmZvIiwiZGlzcGF0Y2giLCJ0eXBlIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJsb2dnZXJNaWRkbGV3YXJlIiwibmV4dCIsImFjdGlvbiIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInJ1biIsInJvb3RTYWdhIiwic2FnYVRhc2siLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsY0FBYyxtQkFBTyxDQUFDLCtDQUFPOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0JBQXdCLGFBQWEsRUFBRTtBQUN2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FB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R1AsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBYVosUUFBYixTQUFhQSxRQUFiO0FBQUEsU0FBNEIsVUFBQ29CLElBQUQ7QUFBQSxXQUFVLFVBQUNDLE1BQUQsRUFBWTtBQUN6RWhCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZSxNQUFaO0FBQ0EsYUFBT0QsSUFBSSxDQUFDQyxNQUFELENBQVg7QUFDRCxLQUhvRDtBQUFBLEdBQTVCO0FBQUEsQ0FBekI7O0FBT0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLE1BQU1DLGNBQWMsR0FBR0MsMkRBQW9CLEVBQTNDO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsRUFBZ0JKLGdCQUFoQixDQUFwQixDQUYyQixDQUU0Qjs7QUFFdkQsTUFBTU8sUUFBUSxHQUFHLFFBQ2JDLFNBRGEsR0FFYkMscUZBQW1CLENBQUNDLHNEQUFlLE1BQWYsU0FBbUJKLFdBQW5CLENBQUQsQ0FGdkI7QUFJQSxNQUFNMUIsS0FBSyxHQUFHK0IsMERBQVcsQ0FBQ0Msa0RBQUQsRUFBVUwsUUFBVixDQUF6QixDQVIyQixDQVNiO0FBQ0E7O0FBRWJILGdCQUFjLENBQUNTLEdBQWYsQ0FBbUJDLCtDQUFuQjtBQUNBbEMsT0FBSyxDQUFDbUMsUUFBTixHQUFpQlgsY0FBYyxDQUFDUyxHQUFmLENBQW1CQywrQ0FBbkIsQ0FBakI7QUFDQSxTQUFPbEMsS0FBUDtBQUVGLENBaEJEOztBQWtCQSxJQUFNb0MsT0FBTyxHQUFHQyx3RUFBYSxDQUFDZCxjQUFELEVBQWlCO0FBQUNlLE9BQUs7QUFBTixDQUFqQixDQUE3QjtBQUNlLHFFQUFBRixPQUFPLENBQUNHLFNBQVIsQ0FBa0I5QyxrQkFBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5hM2ZmODBhNDNhN2E3N2RhZWI0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjb21wb3NlID0gcmVxdWlyZSgncmVkdXgnKS5jb21wb3NlO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb21wb3NlV2l0aERldlRvb2xzID0gKFxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID9cbiAgICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIDpcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSByZXR1cm4gY29tcG9zZTtcbiAgICAgIHJldHVybiBjb21wb3NlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuKTtcblxuZXhwb3J0cy5kZXZUb29sc0VuaGFuY2VyID0gKFxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyA/XG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gOlxuICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24obm9vcCkgeyByZXR1cm4gbm9vcDsgfSB9XG4pO1xuIiwiaW1wb3J0IEFwcExheU91dCBmcm9tICcuL0FwcExheU91dCc7XHJcbmltcG9ydCBIZWFkICAgICAgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnOyBcclxuXHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJzsgXHJcbmltcG9ydCAgJy4uL0NTUy9hbnRkTW9iaWxlLmNzcyc7XHJcblxyXG5cclxuXHJcbmltcG9ydCB3aXRoUmVkdXggLCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHJlZHVjZXIgIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnOyBcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9hdXRoJztcclxuXHJcblxyXG5cclxuXHJcbi8v7ZSE66Gc7KCd7Yq4IOqzoOyglSDti4BcclxuY29uc3QgUHJvamVjdDAxX1RvZG9MaXN0ID0gKHtDb21wb25lbnR9KSA9PntcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Ub2RvTGlzdDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzMuMTYuMi9hbnRkLm1pbi5jc3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLW1vYmlsZS8yLjMuMy9hbnRkLW1vYmlsZS5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEyNTYtdVpiTnNxZ2xzSHlhcGlZNk5sajhvOWtBbWxpWS9yV05DVHF0aGpJSElYdz1cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8QXBwTGF5T3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgIDwvQXBwTGF5T3V0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTsgXHJcblxyXG5cclxufVxyXG5cclxuXHJcblByb2plY3QwMV9Ub2RvTGlzdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+KWsiBuZXh07JeQ7IScIOygnOqzte2VtOykjFxyXG4gIGNvbnN0IHsgY3R4LENvbXBvbmVudCB9ID0gY29udGV4dDsgXHJcbiAgbGV0IHBhZ2VQcm9wcyA9e307IFxyXG4gIGNvbnN0IHN0YXRlID0gY3R4LnN0b3JlLmdldFN0YXRlKCk7ICAgIC8v7ZSE66Gc7KCd7Yq4IOyghOyytCBzdGF066W8IOqwgOyguCDsmKwg7IiYIOyeiOuLpC4gXHJcbiAgY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhIWNvbnRleHQucmVxIHx8ICEhY29udGV4dC5jdHgucmVxO1xyXG4gIGNvbnN0IGNvb2tpZSA9IGlzU2VydmVyID8gY3R4LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnOyBcclxuXHJcbiAgaWYoaXNTZXJ2ZXIgJiYgY29va2llKXtcclxuICAgICAgY29uc29sZS5sb2coJ+ybqT8nKVxyXG4gICAgICAvL+2BtOudvOydtOyWuCDtmZjqsr3sl5DshJzripQg67iM65287Jqw7KCA6rCAIOy/oO2CpOulvCDrhKPslrTso7zqs6AsIFxyXG4gICAgICAvL1NTUuydvCDrlYzripQg7Jqw66as6rCAIOyngeygkSDrhKPslrTspJjslbwg7ZWc64ukLiBcclxuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7IFxyXG4gIH1cclxuICBcclxuXHJcbiAgLy8o7IOI66Gc6rOg7LmoKeuhnOq3uOyduCDsoJXrs7Qg7Jyg7KeAXHJcbiAgaWYoIXN0YXRlLmF1dGgudXNlckluZm8pe1xyXG4gICAgICBjb25zb2xlLmxvZygn7J6MPz8nLHN0YXRlLmF1dGgudXNlckluZm8pOyBcclxuICAgICAgY3R4LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyl7XHJcbiAgcGFnZVByb3BzID0gIGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTsgXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiB7cGFnZVByb3BzfTsgXHJcblxyXG5cclxufVxyXG5cclxuXHJcblByb2plY3QwMV9Ub2RvTGlzdC5wcm9wVHlwZXMgPSB7IFxyXG4gIENvbXBvbmVudDpQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCwgXHJcblxyXG59XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7IFxyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLGxvZ2dlck1pZGRsZXdhcmVdOyAvLyDrr7jrk6Tsm6jslrTrk6TsnYQg64Sj7Jy866m0IOuQnOuLpC5cclxuICBcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG5cclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgICAgICAgICAgICAgIC8vcmVhY3Tsl5DshJwgcmVkdXjrpbwg7IKs7Jqp7ZWY6riwIOychO2VtOyEnOuKlCBjcmVhdGVTdG9yZeuhnCBzdG9yZeulvCDsg53shLHtlbQg7KO87Ja07JW8IO2VnOuLpC4gXHJcbiAgICAgICAgICAgICAgICAvL3JlZHV4LW5leHQtd2FwcGVyIDYg67KE7KCEIOu2gO2EsOuKlCBQcm92aWRlciBzdG9yZT17c3RvcmV966W8IOuCtOu2gOyggeycvOuhnCDtlbQg7KSA64ukLiBcclxuXHJcbiAgIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7IFxyXG4gICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgIHJldHVybiBzdG9yZTtcclxuXHJcbn1cclxuICBcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtkZWJ1ZzogIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnfSk7IFxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChQcm9qZWN0MDFfVG9kb0xpc3QpOyAiXSwic291cmNlUm9vdCI6IiJ9