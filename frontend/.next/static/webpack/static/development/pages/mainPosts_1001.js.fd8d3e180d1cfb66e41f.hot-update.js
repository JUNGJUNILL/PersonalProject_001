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
        columnNumber: 145
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluUG9zdHNfMTAwMS5qcyJdLCJuYW1lcyI6WyJtYWluUG9zdHNfMTAwMSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlRWZmZWN0IiwidHlwZSIsIk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCIsImRhdGEiLCJwb3N0RmxhZyIsImN1cnJlbnRQYWdlIiwibm93UGFnZSIsIm1heFBhZ2UiLCJwb3N0c1BlclBhZ2UiLCJMT0FEX1VTRVJfUkVRVUVTVCIsInVzZVN0YXRlIiwic2V0Tm93UGFnZSIsImdyb3VwUGFnZSIsInNldEdyb3VwUGFnZSIsIm5vd0dyb3VwUGFnZUFycmF5Iiwic2V0Tm93R3JvdXBQYWdlQXJyYXkiLCJwYWdlbmF0ZSIsInVzZUNhbGxiYWNrIiwicGFnZU51bWJlciIsImdyb3VwUGFnZUFycmF5IiwibGVuZ3RoIiwiY29uY2F0IiwiaW5kZXhPZkxhc3RQb3N0IiwiaW5kZXhPZkZpcnN0UG9zdCIsImR1bW15TGlzdCIsIm1hcmdpblRvcCIsIm1hcCIsInYiLCJpIiwid2lkdGgiLCJoZWlnaHQiLCJwYXRobmFtZSIsInF1ZXJ5IiwicG9zdElkIiwibmljayIsInVzZXJOaWNrTmFtZSIsImZsYWciLCJpc0VtcHR5IiwidGl0bGUiLCJnb29kIiwiYmFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUNBOztBQUtBLElBQU1BLGNBQWMsR0FBRywwQkFBSTtBQUFBOztBQUV6QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZ5QixxQkFHQUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDSixjQUFmO0FBQUEsR0FBRCxDQUhYO0FBQUEsTUFHbEJBLGNBSGtCLGdCQUdsQkEsY0FIa0I7O0FBS3pCSyx5REFBUyxD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQyxLQUFoQyxDQUxELEVBTUM7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdDRCxzRUFBTyxDQUFDVixDQUFDLENBQUNZLElBQUgsQ0FBdkMsQ0FORCxFQU9DO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQ0Ysc0VBQU8sQ0FBQ1YsQ0FBQyxDQUFDYSxHQUFILENBQXZDLENBUEQsQ0FEVztBQUFBLEdBQW5CLENBWEksQ0FESCxDQURKLEVBMkJJLE1BQUMsaUVBQUQ7QUFBWSxZQUFRLEVBQUV4QixRQUF0QjtBQUFnQyxjQUFVLEVBQUVRLFNBQVMsQ0FBQ0osTUFBdEQ7QUFBOEQsZ0JBQVksRUFBRVosWUFBNUU7QUFBMEYsV0FBTyxFQUFFRixPQUFuRztBQUE0RyxhQUFTLEVBQUVNLFNBQXZIO0FBQWtJLGtCQUFjLEVBQUVFLGlCQUFsSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JKLENBREQ7QUFnQ0YsQ0ExRUQ7O0dBQU1uQixjO1VBRWFFLHVELEVBQ1FDLHVEOzs7QUEwRVpILDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxtYWluUG9zdHNfMTAwMS5qcy5mZDhkM2UxODBkMWNmYjY2ZTQxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCAsIHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlQ2FsbGJhY2t9ZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnOyBcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBQYWdlbmF0aW9uIGZyb20gJy4uL3V0aWxDb21wb25lbnQvUGFnZW5hdGlvbidcclxuaW1wb3J0IFxyXG4gICAge01BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCx9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMSc7IFxyXG5cclxuXHJcbmltcG9ydCBcclxuICAgIHtMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2F1dGgnOyBcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgaXNFbXB0eSBmcm9tICcuLi91dGlsQ29tcG9uZW50L2lzRW1wdHknO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbWFpblBvc3RzXzEwMDEgPSAoKT0+e1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gIGNvbnN0IHttYWluUG9zdHNfMTAwMX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5tYWluUG9zdHNfMTAwMSk7IFxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCwgXHJcbiAgICAgICAgZGF0YTp7cG9zdEZsYWc6JzEwMDEnLFxyXG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlOm5vd1BhZ2UsXHJcbiAgICAgICAgICAgICAgbWF4UGFnZTpwb3N0c1BlclBhZ2VcclxuICAgICAgICAgICAgIH0sIFxyXG4gICAgfSlcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgIH0pOyBcclxuICB9LFtdKTsgXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t7Y6Y7J207KeVIOyymOumrCDroZzsp4Egc3RhcnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBjb25zdCBbbm93UGFnZSxzZXROb3dQYWdlXSA9IHVzZVN0YXRlKDApOyAgICAgICAgICAgICAgICAgICAgICAgLy/tmITsnqwg7Y6Y7J207KeAXHJcbiAgY29uc3QgW3Bvc3RzUGVyUGFnZV0gPSB1c2VTdGF0ZSg1KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v7ZWcIO2OmOydtOyngOuLuSBsaXN0IOyImCBcclxuICBjb25zdCBbZ3JvdXBQYWdlICwgc2V0R3JvdXBQYWdlXSA9IHVzZVN0YXRlKDUpOyAgICAgICAgICAgICAgICAgLy/tjpjsnbTsp5Ug6re466O5IOuLuSDsiJggIDF+NSAsIDZ+MTAgLCAxMX4xNSAuLi5cclxuICBjb25zdCBbbm93R3JvdXBQYWdlQXJyYXksc2V0Tm93R3JvdXBQYWdlQXJyYXldID11c2VTdGF0ZShbXSk7ICAgLy/tmITsoJwg7Y6Y7J207KeVIOq3uOujuSDrsLDsl7RcclxuXHJcbiAgY29uc3QgcGFnZW5hdGUgPXVzZUNhbGxiYWNrKChwYWdlTnVtYmVyLCBncm91cFBhZ2VBcnJheSk9PntcclxuICAgIHNldE5vd1BhZ2UocGFnZU51bWJlcik7IFxyXG4gICAgbm93R3JvdXBQYWdlQXJyYXkubGVuZ3RoPTA7IFxyXG4gICAgc2V0Tm93R3JvdXBQYWdlQXJyYXkobm93R3JvdXBQYWdlQXJyYXkuY29uY2F0KGdyb3VwUGFnZUFycmF5KSk7XHJcbiAgICBjb25zdCBpbmRleE9mTGFzdFBvc3QgPSBwYWdlTnVtYmVyICogcG9zdHNQZXJQYWdlOyAgIFxyXG4gICAgY29uc3QgaW5kZXhPZkZpcnN0UG9zdCA9IGluZGV4T2ZMYXN0UG9zdCAtIHBvc3RzUGVyUGFnZTsgIFxyXG5cclxuXHJcbn0sW25vd1BhZ2Usbm93R3JvdXBQYWdlQXJyYXldKTsgXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLe2OmOydtOynlSDsspjrpqwg66Gc7KeBICAgZW5kLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuXHJcbiAgY29uc3QgZHVtbXlMaXN0ID0gWyftl6zroZzsmrDsm5Trk5wwMScsJ+2XrOuhnOyasOyblOuTnDAyJywn7Zes66Gc7Jqw7JuU65OcMDMnLCftl6zroZzsmrDsm5Trk5wwNCcsJ+2XrOuhnOyasOyblOuTnDA1Jywn7Zes66Gc7Jqw7JuU65OcMDYnXTsgXHJcblxyXG4gIFxyXG4gICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGUnIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVCb2R5Jz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3dUaCc+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+7J2066+47KeAPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+7KCc66qpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+7J6R7ISx7J6QPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+65Ox66Gd7J28PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+7KGw7ZqMPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+7LaU7LKcPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+67CY64yAPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGJyLz5cclxuICAgICAge21haW5Qb3N0c18xMDAxLm1hcCgodixpKT0+KFxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJyBzdHlsZT17e3dpZHRoOic4MHB4JyxoZWlnaHQ6JzgwcHgnfX0+PGltZyBzcmM9J2h0dHBzOi8vZGltZy5kb25nYS5jb20vd3BzL05FV1MvSU1BR0UvMjAxOS8xMS8yNC85ODUxMDAxNS4xLmpwZycgc3R5bGU9e3t3aWR0aDonODBweCcsaGVpZ2h0Oic4MHB4J319Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID48TGluayBocmVmPXt7cGF0aG5hbWU6Jy9kZXRhaWxQYWdlJyAsIHF1ZXJ5Ontwb3N0SWQ6di5wb3N0SWQsbmljazp2LnVzZXJOaWNrTmFtZSxmbGFnOicxMDAxJ319fSA+PGE+e2lzRW1wdHkodi50aXRsZSl9PC9hPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID57aXNFbXB0eSh2LnRpdGxlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID57JzIwMjAwODE4IDogMTQ6MzAnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCcgPnsnMTI1J308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID57aXNFbXB0eSh2Lmdvb2QpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCcgPntpc0VtcHR5KHYuYmFkKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxQYWdlbmF0aW9uIHBhZ2VuYXRlPXtwYWdlbmF0ZX0gZGF0YUxlbmd0aD17ZHVtbXlMaXN0Lmxlbmd0aH0gcG9zdHNQZXJQYWdlPXtwb3N0c1BlclBhZ2V9IG5vd1BhZ2U9e25vd1BhZ2V9IGdyb3VwUGFnZT17Z3JvdXBQYWdlfSBncm91cFBhZ2VBcnJheT17bm93R3JvdXBQYWdlQXJyYXl9IC8+XHJcblxyXG4gICAgPC8+XHJcbiAgICApO1xyXG59OyBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluUG9zdHNfMTAwMTsgIl0sInNvdXJjZVJvb3QiOiIifQ==