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

var Project01_TodoList = function Project01_TodoList(props) {
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
  }, __jsx(props.Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props.pageProps, {
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
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
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
    return _ref.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIlByb2plY3QwMV9Ub2RvTGlzdCIsInByb3BzIiwicGFnZVByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImN0eCIsIkNvbXBvbmVudCIsInN0YXRlIiwic3RvcmUiLCJnZXRTdGF0ZSIsImlzU2VydmVyIiwicmVxIiwiY29va2llIiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImRlZmF1bHRzIiwiQ29va2llIiwic2VydmVyU2lkZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsImNvbmZpZ3VyZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwib3B0aW9ucyIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJydW4iLCJyb290U2FnYSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQU1BOztBQUNBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsS0FBRCxFQUFVO0FBRTdCLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFSTtBQUFNLE9BQUcs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dGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYjI5ZDRjYmI3NjQwYTI1NzhhOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBMYXlPdXQgZnJvbSAnLi9BcHBMYXlPdXQnO1xyXG5pbXBvcnQgSGVhZCAgICAgIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJzsgXHJcblxyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7IFxyXG5pbXBvcnQgICcuLi9DU1MvYW50ZE1vYmlsZS5jc3MnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB3aXRoUmVkdXggLCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHJlZHVjZXIgIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnOyBcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9hdXRoJztcclxuXHJcblxyXG5cclxuXHJcbi8v7ZSE66Gc7KCd7Yq4IOqzoOyglSDti4BcclxuY29uc3QgUHJvamVjdDAxX1RvZG9MaXN0ID0gKHByb3BzKSA9PntcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Ub2RvTGlzdDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzMuMTYuMi9hbnRkLm1pbi5jc3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLW1vYmlsZS8yLjMuMy9hbnRkLW1vYmlsZS5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEyNTYtdVpiTnNxZ2xzSHlhcGlZNk5sajhvOWtBbWxpWS9yV05DVHF0aGpJSElYdz1cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8QXBwTGF5T3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwcm9wcy5Db21wb25lbnQgey4uLnByb3BzLnBhZ2VQcm9wc30vPlxyXG4gICAgICAgICAgICAgICAgPC9BcHBMYXlPdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApOyBcclxuXHJcblxyXG59XHJcblxyXG5cclxuUHJvamVjdDAxX1RvZG9MaXN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v4payIG5leHTsl5DshJwg7KCc6rO17ZW07KSMXHJcbiAgY29uc3QgeyBjdHgsQ29tcG9uZW50IH0gPSBjb250ZXh0OyBcclxuICBsZXQgcGFnZVByb3BzID17fTsgXHJcbiAgY29uc3Qgc3RhdGUgPSBjdHguc3RvcmUuZ2V0U3RhdGUoKTsgICAgLy/tlITroZzsoJ3tirgg7KCE7LK0IHN0YXTrpbwg6rCA7KC4IOyYrCDsiJgg7J6I64ukLiBcclxuICBjb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICEhY29udGV4dC5yZXEgfHwgISFjb250ZXh0LmN0eC5yZXE7XHJcbiAgY29uc3QgY29va2llID0gaXNTZXJ2ZXIgPyBjdHgucmVxLmhlYWRlcnMuY29va2llIDogJyc7IFxyXG5cclxuICBpZihpc1NlcnZlciAmJiBjb29raWUpe1xyXG4gICAgICBjb25zb2xlLmxvZygn7JupPycpXHJcbiAgICAgIC8v7YG065287J207Ja4IO2ZmOqyveyXkOyEnOuKlCDruIzrnbzsmrDsoIDqsIAg7L+g7YKk66W8IOuEo+yWtOyjvOqzoCwgXHJcbiAgICAgIC8vU1NS7J28IOuVjOuKlCDsmrDrpqzqsIAg7KeB7KCRIOuEo+yWtOykmOyVvCDtlZzri6QuIFxyXG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTsgXHJcbiAgfVxyXG4gIFxyXG5cclxuICAvLyAvLyjsg4jroZzqs6Dsuagp66Gc6re47J24IOygleuztCDsnKDsp4BcclxuICAvLyBpZighc3RhdGUuYXV0aC51c2VySW5mbyl7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKCfsnow/Pycsc3RhdGUuYXV0aC51c2VySW5mbyk7IFxyXG4gIC8vICAgICBjdHguc3RvcmUuZGlzcGF0Y2goe1xyXG4gIC8vICAgICAgIHR5cGU6TE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgLy8gICAgIH0pO1xyXG5cclxuICAvLyB9XHJcbiAgcGFnZVByb3BzLnNlcnZlclNpZGUgPSAhIWN0eC5yZXE7IFxyXG5cclxuICAvLyBpZihDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKXtcclxuICAvLyBwYWdlUHJvcHMgPSAgYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpOyBcclxuICAvLyB9XHJcbiAgXHJcbiAgLy8gcmV0dXJuIHtwYWdlUHJvcHN9OyBcclxuICByZXR1cm4gcGFnZVByb3BzO1xyXG5cclxufVxyXG5cclxuXHJcblByb2plY3QwMV9Ub2RvTGlzdC5wcm9wVHlwZXMgPSB7IFxyXG4gIENvbXBvbmVudDpQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCwgXHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoaW5pdGlhbFN0YXRlLCBvcHRpb25zKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpOyBcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07IC8vIOuvuOuTpOybqOyWtOuTpOydhCDrhKPsnLzrqbQg65Cc64ukLlxyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IFxyXG4gICAgY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSA6IFxyXG4gICAgICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoXHJcbiAgICAgICAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpXHJcbiAgICAgICAgKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xyXG4gICAgICAgICAgICAgICAgLy9yZWFjdOyXkOyEnCByZWR1eOulvCDsgqzsmqntlZjquLAg7JyE7ZW07ISc64qUIGNyZWF0ZVN0b3Jl66GcIHN0b3Jl66W8IOyDneyEse2VtCDso7zslrTslbwg7ZWc64ukLiBcclxuICAgICAgICAgICAgICAgIC8vcmVkdXgtbmV4dC13YXBwZXIgNiDrsoTsoIQg67aA7YSw64qUIFByb3ZpZGVyIHN0b3JlPXtzdG9yZX3rpbwg64K067aA7KCB7Jy866GcIO2VtCDspIDri6QuIFxyXG5cclxuICAgc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTsgXHJcbiAgIHJldHVybiBzdG9yZTtcclxuXHJcbn1cclxuICBcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtkZWJ1ZzogZmFsc2V9KTsgXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFByb2plY3QwMV9Ub2RvTGlzdCk7ICJdLCJzb3VyY2VSb290IjoiIn0=