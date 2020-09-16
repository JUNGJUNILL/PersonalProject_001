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
var _this = undefined,
    _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\mainPosts_1001.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var mainPosts_1001 = function mainPosts_1001() {
  _s();

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
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 22
    }
  }, "\uC774\uBBF8\uC9C0"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 22
    }
  }, "\uC81C\uBAA9"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 22
    }
  }, "\uC791\uC131\uC790"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 22
    }
  }, "\uB4F1\uB85D\uC77C"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 22
    }
  }, "\uC870\uD68C"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 22
    }
  }, "\uCD94\uCC9C"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 22
    }
  }, "\uBC18\uB300")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 12
    }
  }), dummyList.map(function (v, i) {
    return __jsx("div", {
      className: "divTableRow",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
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
        lineNumber: 72,
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
        lineNumber: 72,
        columnNumber: 84
      }
    })), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: '/detailPage',
        query: {
          postId: '1001',
          nick: 'abc',
          flag: '2222'
        }
      },
      as: 'detailPage',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 48
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 151
      }
    }, v))), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }, '운영자'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, '20200818 : 14:30'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, '125'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, '10'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, '0'));
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
      lineNumber: 83,
      columnNumber: 9
    }
  }));
};

_s(mainPosts_1001, "n27IaKpM86AGbfSraW5zH+QweNQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluUG9zdHNfMTAwMS5qcyJdLCJuYW1lcyI6WyJtYWluUG9zdHNfMTAwMSIsInVzZUVmZmVjdCIsImRpc3BhdGNoIiwidHlwZSIsIk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCIsImRhdGEiLCJwb3N0RmxhZyIsImN1cnJlbnRQYWdlIiwibm93UGFnZSIsIm1heFBhZ2UiLCJwb3N0c1BlclBhZ2UiLCJMT0FEX1VTRVJfUkVRVUVTVCIsInVzZVN0YXRlIiwic2V0Tm93UGFnZSIsImdyb3VwUGFnZSIsInNldEdyb3VwUGFnZSIsIm5vd0dyb3VwUGFnZUFycmF5Iiwic2V0Tm93R3JvdXBQYWdlQXJyYXkiLCJwYWdlbmF0ZSIsInVzZUNhbGxiYWNrIiwicGFnZU51bWJlciIsImdyb3VwUGFnZUFycmF5IiwibGVuZ3RoIiwiY29uY2F0IiwiaW5kZXhPZkxhc3RQb3N0IiwiaW5kZXhPZkZpcnN0UG9zdCIsImR1bW15TGlzdCIsIm1hcmdpblRvcCIsIm1hcCIsInYiLCJpIiwid2lkdGgiLCJoZWlnaHQiLCJwYXRobmFtZSIsInF1ZXJ5IiwicG9zdElkIiwibmljayIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBUUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFJO0FBQUE7O0FBR3pCQyx5REFBUyxDQUFDLFlBQUk7QUFDWkMsWUFBUSxDQUFDO0FBQ0xDLFVBQUksRUFBQ0Msb0ZBREE7QUFFTEMsVUFBSSxFQUFDO0FBQUNDLGdCQUFRLEVBQUMsTUFBVjtBQUNDQyxtQkFBVyxFQUFDQyxPQURiO0FBRUNDLGVBQU8sRUFBQ0M7QUFGVDtBQUZBLEtBQUQsQ0FBUjtBQVFBUixZQUFRLENBQUM7QUFDTEMsVUFBSSxFQUFDUSxnRUFBaUJBO0FBRGpCLEtBQUQsQ0FBUjtBQUdELEdBWlEsRUFZUCxFQVpPLENBQVQ7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Q0osTUFBdEQ7QUFBOEQsZ0JBQVksRUFBRVosWUFBNUU7QUFBMEYsV0FBTyxFQUFFRixPQUFuRztBQUE0RyxhQUFTLEVBQUVNLFNBQXZIO0FBQWtJLGtCQUFjLEVBQUVFLGlCQUFsSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJKLENBREQ7QUErQkYsQ0FuRUQ7O0dBQU1oQixjOztBQXNFU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1haW5Qb3N0c18xMDAxLmpzLjNhZjA4N2YwOWExOWYyYjMwYWUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0ICwge3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDYWxsYmFja31mcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7IFxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFBhZ2VuYXRpb24gZnJvbSAnLi4vdXRpbENvbXBvbmVudC9QYWdlbmF0aW9uJ1xyXG5pbXBvcnQgXHJcbiAgICB7TUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNULH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxJzsgXHJcblxyXG5cclxuaW1wb3J0IFxyXG4gICAge0xPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvYXV0aCc7IFxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbWFpblBvc3RzXzEwMDEgPSAoKT0+e1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QsIFxyXG4gICAgICAgIGRhdGE6e3Bvc3RGbGFnOicxMDAxJyxcclxuICAgICAgICAgICAgICBjdXJyZW50UGFnZTpub3dQYWdlLFxyXG4gICAgICAgICAgICAgIG1heFBhZ2U6cG9zdHNQZXJQYWdlXHJcbiAgICAgICAgICAgICB9LCBcclxuICAgIH0pXHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICB9KTsgXHJcbiAgfSxbXSk7IFxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3tjpjsnbTsp5Ug7LKY66asIOuhnOyngSBzdGFydC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIGNvbnN0IFtub3dQYWdlLHNldE5vd1BhZ2VdID0gdXNlU3RhdGUoMCk7ICAgICAgICAgICAgICAgICAgICAgICAvL+2YhOyerCDtjpjsnbTsp4BcclxuICBjb25zdCBbcG9zdHNQZXJQYWdlXSA9IHVzZVN0YXRlKDUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/tlZwg7Y6Y7J207KeA64u5IGxpc3Qg7IiYIFxyXG4gIGNvbnN0IFtncm91cFBhZ2UgLCBzZXRHcm91cFBhZ2VdID0gdXNlU3RhdGUoNSk7ICAgICAgICAgICAgICAgICAvL+2OmOydtOynlSDqt7jro7kg64u5IOyImCAgMX41ICwgNn4xMCAsIDExfjE1IC4uLlxyXG4gIGNvbnN0IFtub3dHcm91cFBhZ2VBcnJheSxzZXROb3dHcm91cFBhZ2VBcnJheV0gPXVzZVN0YXRlKFtdKTsgICAvL+2YhOygnCDtjpjsnbTsp5Ug6re466O5IOuwsOyXtFxyXG5cclxuICBjb25zdCBwYWdlbmF0ZSA9dXNlQ2FsbGJhY2soKHBhZ2VOdW1iZXIsIGdyb3VwUGFnZUFycmF5KT0+e1xyXG4gICAgc2V0Tm93UGFnZShwYWdlTnVtYmVyKTsgXHJcbiAgICBub3dHcm91cFBhZ2VBcnJheS5sZW5ndGg9MDsgXHJcbiAgICBzZXROb3dHcm91cFBhZ2VBcnJheShub3dHcm91cFBhZ2VBcnJheS5jb25jYXQoZ3JvdXBQYWdlQXJyYXkpKTtcclxuICAgIGNvbnN0IGluZGV4T2ZMYXN0UG9zdCA9IHBhZ2VOdW1iZXIgKiBwb3N0c1BlclBhZ2U7ICAgXHJcbiAgICBjb25zdCBpbmRleE9mRmlyc3RQb3N0ID0gaW5kZXhPZkxhc3RQb3N0IC0gcG9zdHNQZXJQYWdlOyAgXHJcblxyXG5cclxufSxbbm93UGFnZSxub3dHcm91cFBhZ2VBcnJheV0pOyBcclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t7Y6Y7J207KeVIOyymOumrCDroZzsp4EgICBlbmQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgY29uc3QgZHVtbXlMaXN0ID0gWyftl6zroZzsmrDsm5Trk5wwMScsJ+2XrOuhnOyasOyblOuTnDAyJywn7Zes66Gc7Jqw7JuU65OcMDMnLCftl6zroZzsmrDsm5Trk5wwNCcsJ+2XrOuhnOyasOyblOuTnDA1Jywn7Zes66Gc7Jqw7JuU65OcMDYnXTsgXHJcblxyXG4gIFxyXG4gICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGUnIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVCb2R5Jz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3dUaCc+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+7J2066+47KeAPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+7KCc66qpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+7J6R7ISx7J6QPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+65Ox66Gd7J28PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+7KGw7ZqMPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+7LaU7LKcPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+67CY64yAPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGJyLz5cclxuICAgICAge2R1bW15TGlzdC5tYXAoKHYsaSk9PihcclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93JyAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCcgc3R5bGU9e3t3aWR0aDonODBweCcsaGVpZ2h0Oic4MHB4J319PjxpbWcgc3JjPSdodHRwczovL2RpbWcuZG9uZ2EuY29tL3dwcy9ORVdTL0lNQUdFLzIwMTkvMTEvMjQvOTg1MTAwMTUuMS5qcGcnIHN0eWxlPXt7d2lkdGg6JzgwcHgnLGhlaWdodDonODBweCd9fS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJyA+PExpbmsgaHJlZj17e3BhdGhuYW1lOicvZGV0YWlsUGFnZScgLCBxdWVyeTp7cG9zdElkOicxMDAxJyxuaWNrOidhYmMnLGZsYWc6JzIyMjInfX19IGFzPXsnZGV0YWlsUGFnZSd9PjxhPnt2fTwvYT48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJyA+eyfsmrTsmIHsnpAnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCcgPnsnMjAyMDA4MTggOiAxNDozMCd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJyA+eycxMjUnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCcgPnsnMTAnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCcgPnsnMCd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQYWdlbmF0aW9uIHBhZ2VuYXRlPXtwYWdlbmF0ZX0gZGF0YUxlbmd0aD17ZHVtbXlMaXN0Lmxlbmd0aH0gcG9zdHNQZXJQYWdlPXtwb3N0c1BlclBhZ2V9IG5vd1BhZ2U9e25vd1BhZ2V9IGdyb3VwUGFnZT17Z3JvdXBQYWdlfSBncm91cFBhZ2VBcnJheT17bm93R3JvdXBQYWdlQXJyYXl9IC8+XHJcblxyXG4gICAgPC8+XHJcbiAgICApO1xyXG59OyBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluUG9zdHNfMTAwMTsgIl0sInNvdXJjZVJvb3QiOiIifQ==