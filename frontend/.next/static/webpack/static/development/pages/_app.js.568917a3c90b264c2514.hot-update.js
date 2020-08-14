webpackHotUpdate("static\\development\\pages\\_app.js",{

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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppLayOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayOut */ "./components/AppLayOut.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CSS_antdMobile_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CSS/antdMobile.css */ "./CSS/antdMobile.css");
/* harmony import */ var _CSS_antdMobile_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_CSS_antdMobile_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");




var _this = undefined,
    _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;












 //프로젝트 고정 틀

var Project01_TodoList = function Project01_TodoList(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  })), __jsx(_components_AppLayOut__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }))));
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

              axios__WEBPACK_IMPORTED_MODULE_7___default.a.defaults.headers.Cookie = cookie;
            } //(새로고침)로그인 정보 유지
            // if(!state.auth.userInfo){
            //     console.log('잌??',state.auth.userInfo); 
            //     ctx.store.dispatch({
            //       type:LOAD_USER_REQUEST,
            //     });
            // }


            if (!Component.getInitialProps) {
              _context.next = 10;
              break;
            }

            _context.next = 9;
            return Component.getInitialProps(ctx);

          case 9:
            pageProps = _context.sent;

          case 10:
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 11:
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
  Component: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.elementType.isRequired
};

var configureStore = function configureStore() {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_14__["default"])();
  var middlewares = [sagaMiddleware]; // 미들웨어들을 넣으면 된다.

  var enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_13__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_11__["applyMiddleware"].apply(void 0, middlewares));
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_11__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_12__["default"], enhancer); //react에서 redux를 사용하기 위해서는 createStore로 store를 생성해 주어야 한다. 
  //redux-next-wapper 6 버전 부터는 Provider store={store}를 내부적으로 해 준다. 

  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_15__["default"]);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_15__["default"]);
  return store;
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__["createWrapper"])(configureStore, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIlByb2plY3QwMV9Ub2RvTGlzdCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjdHgiLCJzdGF0ZSIsInN0b3JlIiwiZ2V0U3RhdGUiLCJpc1NlcnZlciIsInJlcSIsImNvb2tpZSIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJkZWZhdWx0cyIsIkNvb2tpZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInJ1biIsInJvb3RTYWdhIiwic2FnYVRhc2siLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FNQTs7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BQTBCO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWRDLFNBQWMsUUFBZEEsU0FBYztBQUU3QyxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVB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QUs7QUFBTixDQUFqQixDQUE3QjtBQUNlLHFFQUFBRixPQUFPLENBQUNHLFNBQVIsQ0FBa0J0QyxrQkFBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy41Njg5MTdhM2M5MGIyNjRjMjUxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcExheU91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheU91dCc7XHJcbmltcG9ydCBIZWFkICAgICAgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnOyBcclxuXHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJzsgXHJcbmltcG9ydCAgJy4uL0NTUy9hbnRkTW9iaWxlLmNzcyc7XHJcblxyXG5cclxuXHJcbmltcG9ydCB3aXRoUmVkdXggLCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHJlZHVjZXIgIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnOyBcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9hdXRoJztcclxuXHJcblxyXG5cclxuXHJcbi8v7ZSE66Gc7KCd7Yq4IOqzoOyglSDti4BcclxuY29uc3QgUHJvamVjdDAxX1RvZG9MaXN0ID0gKHtDb21wb25lbnQscGFnZVByb3BzfSkgPT57XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+VG9kb0xpc3Q8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjE2LjIvYW50ZC5taW4uY3NzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC1tb2JpbGUvMi4zLjMvYW50ZC1tb2JpbGUuY3NzXCIgaW50ZWdyaXR5PVwic2hhMjU2LXVaYk5zcWdsc0h5YXBpWTZObGo4bzlrQW1saVkvcldOQ1RxdGhqSUhJWHc9XCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPEFwcExheU91dD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0FwcExheU91dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7IFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5Qcm9qZWN0MDFfVG9kb0xpc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ilrIgbmV4dOyXkOyEnCDsoJzqs7XtlbTspIxcclxuICBjb25zdCB7IGN0eCxDb21wb25lbnQgfSA9IGNvbnRleHQ7IFxyXG4gIGxldCBwYWdlUHJvcHMgPXt9OyBcclxuICBjb25zdCBzdGF0ZSA9IGN0eC5zdG9yZS5nZXRTdGF0ZSgpOyAgICAvL+2UhOuhnOygne2KuCDsoITssrQgc3RhdOulvCDqsIDsoLgg7JisIOyImCDsnojri6QuIFxyXG4gIGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgISFjb250ZXh0LnJlcSB8fCAhIWNvbnRleHQuY3R4LnJlcTtcclxuICBjb25zdCBjb29raWUgPSBpc1NlcnZlciA/IGN0eC5yZXEuaGVhZGVycy5jb29raWUgOiAnJzsgXHJcblxyXG4gIGlmKGlzU2VydmVyICYmIGNvb2tpZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfsm6k/JylcclxuICAgICAgLy/tgbTrnbzsnbTslrgg7ZmY6rK97JeQ7ISc64qUIOu4jOudvOyasOyggOqwgCDsv6DtgqTrpbwg64Sj7Ja07KO86rOgLCBcclxuICAgICAgLy9TU1Lsnbwg65WM64qUIOyasOumrOqwgCDsp4HsoJEg64Sj7Ja07KSY7JW8IO2VnOuLpC4gXHJcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llOyBcclxuICB9XHJcbiAgXHJcblxyXG4gIC8vKOyDiOuhnOqzoOy5qCnroZzqt7jsnbgg7KCV67O0IOycoOyngFxyXG4gIC8vIGlmKCFzdGF0ZS5hdXRoLnVzZXJJbmZvKXtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ+yejD8/JyxzdGF0ZS5hdXRoLnVzZXJJbmZvKTsgXHJcbiAgLy8gICAgIGN0eC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgLy8gICAgICAgdHlwZTpMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAvLyAgICAgfSk7XHJcblxyXG4gIC8vIH1cclxuXHJcblxyXG4gIGlmKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpe1xyXG4gIHBhZ2VQcm9wcyA9ICBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7IFxyXG4gIH1cclxuICBcclxuICByZXR1cm4ge3BhZ2VQcm9wc307IFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5Qcm9qZWN0MDFfVG9kb0xpc3QucHJvcFR5cGVzID0geyBcclxuICBDb21wb25lbnQ6UHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsIFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpOyBcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07IC8vIOuvuOuTpOybqOyWtOuTpOydhCDrhKPsnLzrqbQg65Cc64ukLlxyXG4gIFxyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcblxyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgICAgICAgICAgICAgLy9yZWFjdOyXkOyEnCByZWR1eOulvCDsgqzsmqntlZjquLAg7JyE7ZW07ISc64qUIGNyZWF0ZVN0b3Jl66GcIHN0b3Jl66W8IOyDneyEse2VtCDso7zslrTslbwg7ZWc64ukLiBcclxuICAgICAgICAgICAgICAgIC8vcmVkdXgtbmV4dC13YXBwZXIgNiDrsoTsoIQg67aA7YSw64qUIFByb3ZpZGVyIHN0b3JlPXtzdG9yZX3rpbwg64K067aA7KCB7Jy866GcIO2VtCDspIDri6QuIFxyXG5cclxuICAgc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTsgXHJcbiAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgcmV0dXJuIHN0b3JlO1xyXG5cclxufVxyXG4gIFxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge2RlYnVnOiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCd9KTsgXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFByb2plY3QwMV9Ub2RvTGlzdCk7ICJdLCJzb3VyY2VSb290IjoiIn0=