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
/* harmony import */ var _AppLayOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppLayOut */ "./pages/AppLayOut.js");
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
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "TodoList"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.min.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 32,
      columnNumber: 21
    }
  })), __jsx(_AppLayOut__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
            } // //(새로고침)로그인 정보 유지
            // if(!state.auth.userInfo){
            //     console.log('잌??',state.auth.userInfo); 
            //     ctx.store.dispatch({
            //       type:LOAD_USER_REQUEST,
            //     });
            // }


            pageProps.serverSide = !!ctx.req; // if(Component.getInitialProps){
            // pageProps =  await Component.getInitialProps(ctx); 
            // }
            // return {pageProps}; 

            return _context.abrupt("return", pageProps);

          case 8:
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

var configureStore = function configureStore(initialState, options) {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_14__["default"])();
  var middlewares = [sagaMiddleware]; // 미들웨어들을 넣으면 된다.

  var enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_13__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_11__["applyMiddleware"].apply(void 0, middlewares));
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_11__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_12__["default"], initialState, enhancer); //react에서 redux를 사용하기 위해서는 createStore로 store를 생성해 주어야 한다. 
  //redux-next-wapper 6 버전 부터는 Provider store={store}를 내부적으로 해 준다. 

  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_15__["default"]);
  return store;
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__["createWrapper"])(configureStore, {
  debug: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIlByb2plY3QwMV9Ub2RvTGlzdCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjdHgiLCJzdGF0ZSIsInN0b3JlIiwiZ2V0U3RhdGUiLCJpc1NlcnZlciIsInJlcSIsImNvb2tpZSIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJkZWZhdWx0cyIsIkNvb2tpZSIsInNlcnZlclNpZGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsIm9wdGlvbnMiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwicnVuIiwicm9vdFNhZ2EiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FNQTs7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BQTBCO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWRDLFNBQWMsUUFBZEEsU0FBYztBQUU3QyxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtB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QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjUyZDBmZDNkMDVlZWQ0OGEyNjI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwTGF5T3V0IGZyb20gJy4vQXBwTGF5T3V0JztcclxuaW1wb3J0IEhlYWQgICAgICBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7IFxyXG5cclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnOyBcclxuaW1wb3J0ICAnLi4vQ1NTL2FudGRNb2JpbGUuY3NzJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgd2l0aFJlZHV4ICwge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCByZWR1Y2VyICBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJzsgXHJcbmltcG9ydCB7IExPQURfVVNFUl9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvYXV0aCc7XHJcblxyXG5cclxuXHJcblxyXG4vL+2UhOuhnOygne2KuCDqs6DsoJUg7YuAXHJcbmNvbnN0IFByb2plY3QwMV9Ub2RvTGlzdCA9ICh7Q29tcG9uZW50LHBhZ2VQcm9wc30pID0+e1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlRvZG9MaXN0PC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvMy4xNi4yL2FudGQubWluLmNzc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQtbW9iaWxlLzIuMy4zL2FudGQtbW9iaWxlLmNzc1wiIGludGVncml0eT1cInNoYTI1Ni11WmJOc3FnbHNIeWFwaVk2TmxqOG85a0FtbGlZL3JXTkNUcXRoaklISVh3PVwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxBcHBMYXlPdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgICAgICAgICAgICA8L0FwcExheU91dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7IFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5Qcm9qZWN0MDFfVG9kb0xpc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ilrIgbmV4dOyXkOyEnCDsoJzqs7XtlbTspIxcclxuICBjb25zdCB7IGN0eCxDb21wb25lbnQgfSA9IGNvbnRleHQ7IFxyXG4gIGxldCBwYWdlUHJvcHMgPXt9OyBcclxuICBjb25zdCBzdGF0ZSA9IGN0eC5zdG9yZS5nZXRTdGF0ZSgpOyAgICAvL+2UhOuhnOygne2KuCDsoITssrQgc3RhdOulvCDqsIDsoLgg7JisIOyImCDsnojri6QuIFxyXG4gIGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgISFjb250ZXh0LnJlcSB8fCAhIWNvbnRleHQuY3R4LnJlcTtcclxuICBjb25zdCBjb29raWUgPSBpc1NlcnZlciA/IGN0eC5yZXEuaGVhZGVycy5jb29raWUgOiAnJzsgXHJcblxyXG4gIGlmKGlzU2VydmVyICYmIGNvb2tpZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfsm6k/JylcclxuICAgICAgLy/tgbTrnbzsnbTslrgg7ZmY6rK97JeQ7ISc64qUIOu4jOudvOyasOyggOqwgCDsv6DtgqTrpbwg64Sj7Ja07KO86rOgLCBcclxuICAgICAgLy9TU1Lsnbwg65WM64qUIOyasOumrOqwgCDsp4HsoJEg64Sj7Ja07KSY7JW8IO2VnOuLpC4gXHJcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llOyBcclxuICB9XHJcbiAgXHJcblxyXG4gIC8vIC8vKOyDiOuhnOqzoOy5qCnroZzqt7jsnbgg7KCV67O0IOycoOyngFxyXG4gIC8vIGlmKCFzdGF0ZS5hdXRoLnVzZXJJbmZvKXtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ+yejD8/JyxzdGF0ZS5hdXRoLnVzZXJJbmZvKTsgXHJcbiAgLy8gICAgIGN0eC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgLy8gICAgICAgdHlwZTpMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAvLyAgICAgfSk7XHJcblxyXG4gIC8vIH1cclxuICBwYWdlUHJvcHMuc2VydmVyU2lkZSA9ICEhY3R4LnJlcTsgXHJcblxyXG4gIC8vIGlmKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpe1xyXG4gIC8vIHBhZ2VQcm9wcyA9ICBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7IFxyXG4gIC8vIH1cclxuICBcclxuICAvLyByZXR1cm4ge3BhZ2VQcm9wc307IFxyXG4gIHJldHVybiBwYWdlUHJvcHM7XHJcblxyXG59XHJcblxyXG5cclxuUHJvamVjdDAxX1RvZG9MaXN0LnByb3BUeXBlcyA9IHsgXHJcbiAgQ29tcG9uZW50OlByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLCBcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChpbml0aWFsU3RhdGUsIG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7IFxyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTsgLy8g66+465Ok7Juo7Ja065Ok7J2EIOuEo+ycvOuptCDrkJzri6QuXHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gXHJcbiAgICBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpIDogXHJcbiAgICAgICAgY29tcG9zZVdpdGhEZXZUb29scyhcclxuICAgICAgICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcylcclxuICAgICAgICApO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XHJcbiAgICAgICAgICAgICAgICAvL3JlYWN07JeQ7IScIHJlZHV466W8IOyCrOyaqe2VmOq4sCDsnITtlbTshJzripQgY3JlYXRlU3RvcmXroZwgc3RvcmXrpbwg7IOd7ISx7ZW0IOyjvOyWtOyVvCDtlZzri6QuIFxyXG4gICAgICAgICAgICAgICAgLy9yZWR1eC1uZXh0LXdhcHBlciA2IOuyhOyghCDrtoDthLDripQgUHJvdmlkZXIgc3RvcmU9e3N0b3JlfeulvCDrgrTrtoDsoIHsnLzroZwg7ZW0IOykgOuLpC4gXHJcblxyXG4gICBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpOyBcclxuICAgcmV0dXJuIHN0b3JlO1xyXG5cclxufVxyXG4gIFxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge2RlYnVnOiBmYWxzZX0pOyBcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoUHJvamVjdDAxX1RvZG9MaXN0KTsgIl0sInNvdXJjZVJvb3QiOiIifQ==