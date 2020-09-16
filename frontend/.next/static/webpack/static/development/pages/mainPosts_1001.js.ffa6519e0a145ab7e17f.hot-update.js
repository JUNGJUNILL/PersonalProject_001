webpackHotUpdate("static\\development\\pages\\mainPosts_1001.js",{

/***/ "./pages/mainPosts_1001.js":
/*!*********************************!*\
  !*** ./pages/mainPosts_1001.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilComponent_Pagenation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilComponent/Pagenation */ "./utilComponent/Pagenation.js");
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utilComponent_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilComponent/isEmpty */ "./utilComponent/isEmpty.js");
var _this = undefined,
    _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\mainPosts_1001.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var mainPosts_1001 = function mainPosts_1001() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.mainPosts_1001;
  }),
      mainPosts_1001 = _useSelector.mainPosts_1001;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_5__["MAINPOSTS_1001_LIST_REQUEST"],
      data: {
        postFlag: '1001',
        currentPage: nowPage,
        maxPage: postsPerPage
      }
    });
    dispatch({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_6__["LOAD_USER_REQUEST"]
    });
  }, []);
  /*-------------------------------------------페이징 처리 로직 start-------------------------------------------------------*/

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      nowPage = _useState[0],
      setNowPage = _useState[1]; //현재 페이지


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(5),
      postsPerPage = _useState2[0]; //한 페이지당 list 수 


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(5),
      groupPage = _useState3[0],
      setGroupPage = _useState3[1]; //페이징 그룹 당 수  1~5 , 6~10 , 11~15 ...


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      nowGroupPageArray = _useState4[0],
      setNowGroupPageArray = _useState4[1]; //현제 페이징 그룹 배열


  var pagenate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (pageNumber, groupPageArray) {
    setNowPage(pageNumber);
    nowGroupPageArray.length = 0;
    setNowGroupPageArray(nowGroupPageArray.concat(groupPageArray));
    var indexOfLastPost = pageNumber * postsPerPage;
    var indexOfFirstPost = indexOfLastPost - postsPerPage;
  }, [nowPage, nowGroupPageArray]);
  /*-------------------------------------------페이징 처리 로직   end-------------------------------------------------------*/

  var dummyList = ['헬로우월드01', '헬로우월드02', '헬로우월드03', '헬로우월드04', '헬로우월드05', '헬로우월드06'];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "divTable",
    style: {
      marginTop: '3%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 22
    }
  }, "\uC774\uBBF8\uC9C0"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 22
    }
  }, "\uC81C\uBAA9"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 22
    }
  }, "\uC791\uC131\uC790"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 22
    }
  }, "\uB4F1\uB85D\uC77C"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 22
    }
  }, "\uC870\uD68C"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 22
    }
  }, "\uCD94\uCC9C"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 22
    }
  }, "\uBC18\uB300")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 12
    }
  }), mainPosts_1001.map(function (v, i) {
    return __jsx("div", {
      className: "divTableRow",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 16
      }
    }, __jsx("div", {
      className: "divTableCell",
      style: {
        width: '80px',
        height: '80px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "https://dimg.donga.com/wps/NEWS/IMAGE/2019/11/24/98510015.1.jpg",
      style: {
        width: '80px',
        height: '80px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 84
      }
    })), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: '/detailPage',
        query: {
          postId: v.postId,
          nick: v.userNickName,
          flag: '1001'
        }
      },
      as: 'detailPage',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 48
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 162
      }
    }, Object(_utilComponent_isEmpty__WEBPACK_IMPORTED_MODULE_8__["default"])(v.title)))), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    }, Object(_utilComponent_isEmpty__WEBPACK_IMPORTED_MODULE_8__["default"])(v.title)), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }, '20200818 : 14:30'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, '125'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }, Object(_utilComponent_isEmpty__WEBPACK_IMPORTED_MODULE_8__["default"])(v.good)), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, Object(_utilComponent_isEmpty__WEBPACK_IMPORTED_MODULE_8__["default"])(v.bad)));
  }))), __jsx(_utilComponent_Pagenation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pagenate: pagenate,
    dataLength: dummyList.length,
    postsPerPage: postsPerPage,
    nowPage: nowPage,
    groupPage: groupPage,
    groupPageArray: nowGroupPageArray,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }));
};

_s(mainPosts_1001, "gWFHLWzTs3VEOoBgz5w1oZvWWMc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

/* harmony default export */ __webpack_exports__["default"] = (mainPosts_1001);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluUG9zdHNfMTAwMS5qcyJdLCJuYW1lcyI6WyJtYWluUG9zdHNfMTAwMSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlRWZmZWN0IiwidHlwZSIsIk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCIsImRhdGEiLCJwb3N0RmxhZyIsImN1cnJlbnRQYWdlIiwibm93UGFnZSIsIm1heFBhZ2UiLCJwb3N0c1BlclBhZ2UiLCJMT0FEX1VTRVJfUkVRVUVTVCIsInVzZVN0YXRlIiwic2V0Tm93UGFnZSIsImdyb3VwUGFnZSIsInNldEdyb3VwUGFnZSIsIm5vd0dyb3VwUGFnZUFycmF5Iiwic2V0Tm93R3JvdXBQYWdlQXJyYXkiLCJwYWdlbmF0ZSIsInVzZUNhbGxiYWNrIiwicGFnZU51bWJlciIsImdyb3VwUGFnZUFycmF5IiwibGVuZ3RoIiwiY29uY2F0IiwiaW5kZXhPZkxhc3RQb3N0IiwiaW5kZXhPZkZpcnN0UG9zdCIsImR1bW15TGlzdCIsIm1hcmdpblRvcCIsIm1hcCIsInYiLCJpIiwid2lkdGgiLCJoZWlnaHQiLCJwYXRobmFtZSIsInF1ZXJ5IiwicG9zdElkIiwibmljayIsInVzZXJOaWNrTmFtZSIsImZsYWciLCJpc0VtcHR5IiwidGl0bGUiLCJnb29kIiwiYmFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUNBOztBQUtBLElBQU1BLGNBQWMsR0FBRywwQkFBSTtBQUFBOztBQUV6QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZ5QixxQkFHQUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDSixjQUFmO0FBQUEsR0FBRCxDQUhYO0FBQUEsTUFHbEJBLGNBSGtCLGdCQUdsQkEsY0FIa0I7O0FBS3pCSyx5REFBUyxD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QVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0MsS0FBaEMsQ0FMRCxFQU1DO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQ0Qsc0VBQU8sQ0FBQ1YsQ0FBQyxDQUFDWSxJQUFILENBQXZDLENBTkQsRUFPQztBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0NGLHNFQUFPLENBQUNWLENBQUMsQ0FBQ2EsR0FBSCxDQUF2QyxDQVBELENBRFc7QUFBQSxHQUFuQixDQVhJLENBREgsQ0FESixFQTJCSSxNQUFDLGlFQUFEO0FBQVksWUFBUSxFQUFFeEIsUUFBdEI7QUFBZ0MsY0FBVSxFQUFFUSxTQUFTLENBQUNKLE1BQXREO0FBQThELGdCQUFZLEVBQUVaLFlBQTVFO0FBQTBGLFdBQU8sRUFBRUYsT0FBbkc7QUFBNEcsYUFBUyxFQUFFTSxTQUF2SDtBQUFrSSxrQkFBYyxFQUFFRSxpQkFBbEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCSixDQUREO0FBZ0NGLENBMUVEOztHQUFNbkIsYztVQUVhRSx1RCxFQUNRQyx1RDs7O0FBMEVaSCw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbWFpblBvc3RzXzEwMDEuanMuZmZhNjUxOWUwYTE0NWFiN2UxN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgLCB7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNhbGxiYWNrfWZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJzsgXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUGFnZW5hdGlvbiBmcm9tICcuLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24nXHJcbmltcG9ydCBcclxuICAgIHtNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QsfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvbWFpblBvc3RzXzEwMDEnOyBcclxuXHJcblxyXG5pbXBvcnQgXHJcbiAgICB7TE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9hdXRoJzsgXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi4vdXRpbENvbXBvbmVudC9pc0VtcHR5JztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IG1haW5Qb3N0c18xMDAxID0gKCk9PntcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICBjb25zdCB7bWFpblBvc3RzXzEwMDF9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUubWFpblBvc3RzXzEwMDEpOyBcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QsIFxyXG4gICAgICAgIGRhdGE6e3Bvc3RGbGFnOicxMDAxJyxcclxuICAgICAgICAgICAgICBjdXJyZW50UGFnZTpub3dQYWdlLFxyXG4gICAgICAgICAgICAgIG1heFBhZ2U6cG9zdHNQZXJQYWdlXHJcbiAgICAgICAgICAgICB9LCBcclxuICAgIH0pXHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICB9KTsgXHJcbiAgfSxbXSk7IFxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLe2OmOydtOynlSDsspjrpqwg66Gc7KeBIHN0YXJ0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgY29uc3QgW25vd1BhZ2Usc2V0Tm93UGFnZV0gPSB1c2VTdGF0ZSgwKTsgICAgICAgICAgICAgICAgICAgICAgIC8v7ZiE7J6sIO2OmOydtOyngFxyXG4gIGNvbnN0IFtwb3N0c1BlclBhZ2VdID0gdXNlU3RhdGUoNSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+2VnCDtjpjsnbTsp4Dri7kgbGlzdCDsiJggXHJcbiAgY29uc3QgW2dyb3VwUGFnZSAsIHNldEdyb3VwUGFnZV0gPSB1c2VTdGF0ZSg1KTsgICAgICAgICAgICAgICAgIC8v7Y6Y7J207KeVIOq3uOujuSDri7kg7IiYICAxfjUgLCA2fjEwICwgMTF+MTUgLi4uXHJcbiAgY29uc3QgW25vd0dyb3VwUGFnZUFycmF5LHNldE5vd0dyb3VwUGFnZUFycmF5XSA9dXNlU3RhdGUoW10pOyAgIC8v7ZiE7KCcIO2OmOydtOynlSDqt7jro7kg67Cw7Je0XHJcblxyXG4gIGNvbnN0IHBhZ2VuYXRlID11c2VDYWxsYmFjaygocGFnZU51bWJlciwgZ3JvdXBQYWdlQXJyYXkpPT57XHJcbiAgICBzZXROb3dQYWdlKHBhZ2VOdW1iZXIpOyBcclxuICAgIG5vd0dyb3VwUGFnZUFycmF5Lmxlbmd0aD0wOyBcclxuICAgIHNldE5vd0dyb3VwUGFnZUFycmF5KG5vd0dyb3VwUGFnZUFycmF5LmNvbmNhdChncm91cFBhZ2VBcnJheSkpO1xyXG4gICAgY29uc3QgaW5kZXhPZkxhc3RQb3N0ID0gcGFnZU51bWJlciAqIHBvc3RzUGVyUGFnZTsgICBcclxuICAgIGNvbnN0IGluZGV4T2ZGaXJzdFBvc3QgPSBpbmRleE9mTGFzdFBvc3QgLSBwb3N0c1BlclBhZ2U7ICBcclxuXHJcblxyXG59LFtub3dQYWdlLG5vd0dyb3VwUGFnZUFycmF5XSk7IFxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3tjpjsnbTsp5Ug7LKY66asIOuhnOyngSAgIGVuZC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IGR1bW15TGlzdCA9IFsn7Zes66Gc7Jqw7JuU65OcMDEnLCftl6zroZzsmrDsm5Trk5wwMicsJ+2XrOuhnOyasOyblOuTnDAzJywn7Zes66Gc7Jqw7JuU65OcMDQnLCftl6zroZzsmrDsm5Trk5wwNScsJ+2XrOuhnOyasOyblOuTnDA2J107IFxyXG5cclxuICBcclxuICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJyBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQm9keSc+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93VGgnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuydtOuvuOyngDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuygnOuqqTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuyekeyEseyekDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuuTseuhneydvDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuyhsO2ajDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuy2lOyynDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuuwmOuMgDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxici8+XHJcbiAgICAgIHttYWluUG9zdHNfMTAwMS5tYXAoKHYsaSk9PihcclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93JyAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCcgc3R5bGU9e3t3aWR0aDonODBweCcsaGVpZ2h0Oic4MHB4J319PjxpbWcgc3JjPSdodHRwczovL2RpbWcuZG9uZ2EuY29tL3dwcy9ORVdTL0lNQUdFLzIwMTkvMTEvMjQvOTg1MTAwMTUuMS5qcGcnIHN0eWxlPXt7d2lkdGg6JzgwcHgnLGhlaWdodDonODBweCd9fS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJyA+PExpbmsgaHJlZj17e3BhdGhuYW1lOicvZGV0YWlsUGFnZScgLCBxdWVyeTp7cG9zdElkOnYucG9zdElkLG5pY2s6di51c2VyTmlja05hbWUsZmxhZzonMTAwMSd9fX0gYXM9eydkZXRhaWxQYWdlJ30+PGE+e2lzRW1wdHkodi50aXRsZSl9PC9hPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID57aXNFbXB0eSh2LnRpdGxlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID57JzIwMjAwODE4IDogMTQ6MzAnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCcgPnsnMTI1J308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID57aXNFbXB0eSh2Lmdvb2QpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCcgPntpc0VtcHR5KHYuYmFkKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxQYWdlbmF0aW9uIHBhZ2VuYXRlPXtwYWdlbmF0ZX0gZGF0YUxlbmd0aD17ZHVtbXlMaXN0Lmxlbmd0aH0gcG9zdHNQZXJQYWdlPXtwb3N0c1BlclBhZ2V9IG5vd1BhZ2U9e25vd1BhZ2V9IGdyb3VwUGFnZT17Z3JvdXBQYWdlfSBncm91cFBhZ2VBcnJheT17bm93R3JvdXBQYWdlQXJyYXl9IC8+XHJcblxyXG4gICAgPC8+XHJcbiAgICApO1xyXG59OyBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluUG9zdHNfMTAwMTsgIl0sInNvdXJjZVJvb3QiOiIifQ==