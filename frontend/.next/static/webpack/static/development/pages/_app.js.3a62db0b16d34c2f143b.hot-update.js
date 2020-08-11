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
  })), __jsx(_components_AppLayOut__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
            cookie = ctx.req.headers.cookie;
            axios__WEBPACK_IMPORTED_MODULE_7___default.a.defaults.headers.Cookie = cookie; // if(isServer && cookie){
            //     console.log('웩?')
            //     //클라이언 환경에서는 브라우저가 쿠키를 넣어주고, 
            //     //SSR일 때는 우리가 직접 넣어줘야 한다. 
            // }
            //(새로고침)로그인 정보 유지

            if (state.auth.userInfo === null) {
              console.log('잌??');
              ctx.store.dispatch({
                type: _reducers_auth__WEBPACK_IMPORTED_MODULE_16__["LOAD_USER_REQUEST"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIlByb2plY3QwMV9Ub2RvTGlzdCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjdHgiLCJzdGF0ZSIsInN0b3JlIiwiZ2V0U3RhdGUiLCJpc1NlcnZlciIsInJlcSIsImNvb2tpZSIsImhlYWRlcnMiLCJheGlvcyIsImRlZmF1bHRzIiwiQ29va2llIiwiYXV0aCIsInVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwidHlwZSIsIkxPQURfVVNFUl9SRVFVRVNUIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwiY29uZmlndXJlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJvcHRpb25zIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInJ1biIsInJvb3RTYWdhIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBTUE7O0FBQ0EsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUEwQjtBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFkQyxTQUFjLFFBQWRBLFNBQWM7QUFFN0MsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFB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bUJDLCtDQUFuQjtBQUNBLFNBQU9qQyxLQUFQO0FBRUYsQ0FmRDs7QUFpQkEsSUFBTWtDLE9BQU8sR0FBR0MseUVBQWEsQ0FBQ2YsY0FBRCxFQUFpQjtBQUFDZ0IsT0FBSyxFQUFFO0FBQVIsQ0FBakIsQ0FBN0I7QUFDZSxxRUFBQUYsT0FBTyxDQUFDRyxTQUFSLENBQWtCNUMsa0JBQWxCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuM2E2MmRiMGIxNmQzNGMyZjE0M2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBMYXlPdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlPdXQnO1xyXG5pbXBvcnQgSGVhZCAgICAgIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJzsgXHJcblxyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7IFxyXG5pbXBvcnQgICcuLi9DU1MvYW50ZE1vYmlsZS5jc3MnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB3aXRoUmVkdXggLCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHJlZHVjZXIgIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnOyBcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9hdXRoJztcclxuXHJcblxyXG5cclxuXHJcbi8v7ZSE66Gc7KCd7Yq4IOqzoOyglSDti4BcclxuY29uc3QgUHJvamVjdDAxX1RvZG9MaXN0ID0gKHtDb21wb25lbnQscGFnZVByb3BzfSkgPT57XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+VG9kb0xpc3Q8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjE2LjIvYW50ZC5taW4uY3NzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC1tb2JpbGUvMi4zLjMvYW50ZC1tb2JpbGUuY3NzXCIgaW50ZWdyaXR5PVwic2hhMjU2LXVaYk5zcWdsc0h5YXBpWTZObGo4bzlrQW1saVkvcldOQ1RxdGhqSUhJWHc9XCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPEFwcExheU91dD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxuICAgICAgICAgICAgICAgIDwvQXBwTGF5T3V0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTsgXHJcblxyXG5cclxufVxyXG5cclxuXHJcblByb2plY3QwMV9Ub2RvTGlzdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+KWsiBuZXh07JeQ7IScIOygnOqzte2VtOykjFxyXG4gIGNvbnN0IHsgY3R4LENvbXBvbmVudCB9ID0gY29udGV4dDsgXHJcbiAgbGV0IHBhZ2VQcm9wcyA9e307IFxyXG5cclxuICBjb25zdCBzdGF0ZSA9IGN0eC5zdG9yZS5nZXRTdGF0ZSgpOyAgICAvL+2UhOuhnOygne2KuCDsoITssrQgc3RhdOulvCDqsIDsoLgg7JisIOyImCDsnojri6QuIFxyXG4gIGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgISFjb250ZXh0LnJlcSB8fCAhIWNvbnRleHQuY3R4LnJlcTtcclxuIFxyXG4gIGNvbnN0IGNvb2tpZSA9ICBjdHgucmVxLmhlYWRlcnMuY29va2llOyBcclxuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTsgXHJcbiAgLy8gaWYoaXNTZXJ2ZXIgJiYgY29va2llKXtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ+ybqT8nKVxyXG4gIC8vICAgICAvL+2BtOudvOydtOyWuCDtmZjqsr3sl5DshJzripQg67iM65287Jqw7KCA6rCAIOy/oO2CpOulvCDrhKPslrTso7zqs6AsIFxyXG4gIC8vICAgICAvL1NTUuydvCDrlYzripQg7Jqw66as6rCAIOyngeygkSDrhKPslrTspJjslbwg7ZWc64ukLiBcclxuICAgIFxyXG4gIC8vIH1cclxuICBcclxuXHJcbiAgLy8o7IOI66Gc6rOg7LmoKeuhnOq3uOyduCDsoJXrs7Qg7Jyg7KeAXHJcbiAgaWYoc3RhdGUuYXV0aC51c2VySW5mbz09PW51bGwpe1xyXG4gICAgICBjb25zb2xlLmxvZygn7J6MPz8nKTsgXHJcbiAgICAgIGN0eC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyl7XHJcbiAgcGFnZVByb3BzID0gIGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTsgXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiB7cGFnZVByb3BzfTsgXHJcblxyXG59XHJcblxyXG5cclxuUHJvamVjdDAxX1RvZG9MaXN0LnByb3BUeXBlcyA9IHsgXHJcbiAgQ29tcG9uZW50OlByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLCBcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChpbml0aWFsU3RhdGUsIG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7IFxyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTsgLy8g66+465Ok7Juo7Ja065Ok7J2EIOuEo+ycvOuptCDrkJzri6QuXHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gXHJcbiAgICBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpIDogXHJcbiAgICAgICAgY29tcG9zZVdpdGhEZXZUb29scyhcclxuICAgICAgICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcylcclxuICAgICAgICApO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XHJcbiAgICAgICAgICAgICAgICAvL3JlYWN07JeQ7IScIHJlZHV466W8IOyCrOyaqe2VmOq4sCDsnITtlbTshJzripQgY3JlYXRlU3RvcmXroZwgc3RvcmXrpbwg7IOd7ISx7ZW0IOyjvOyWtOyVvCDtlZzri6QuIFxyXG4gICAgICAgICAgICAgICAgLy9yZWR1eC1uZXh0LXdhcHBlciA2IOuyhOyghCDrtoDthLDripQgUHJvdmlkZXIgc3RvcmU9e3N0b3JlfeulvCDrgrTrtoDsoIHsnLzroZwg7ZW0IOykgOuLpC4gXHJcblxyXG4gICBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpOyBcclxuICAgcmV0dXJuIHN0b3JlO1xyXG5cclxufVxyXG4gIFxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge2RlYnVnOiBmYWxzZX0pOyBcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoUHJvamVjdDAxX1RvZG9MaXN0KTsgIl0sInNvdXJjZVJvb3QiOiIifQ==