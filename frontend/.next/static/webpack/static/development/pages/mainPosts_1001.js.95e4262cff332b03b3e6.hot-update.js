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
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 22
    }
  }, "\uC774\uBBF8\uC9C0"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 22
    }
  }, "\uC81C\uBAA9"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 22
    }
  }, "\uC791\uC131\uC790"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 22
    }
  }, "\uB4F1\uB85D\uC77C"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 22
    }
  }, "\uC870\uD68C"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 22
    }
  }, "\uCD94\uCC9C"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 22
    }
  }, "\uBC18\uB300")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 12
    }
  }), dummyList.map(function (v, i) {
    return __jsx("div", {
      className: "divTableRow",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
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
        lineNumber: 79,
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
        lineNumber: 79,
        columnNumber: 84
      }
    })), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
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
        lineNumber: 80,
        columnNumber: 48
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 151
      }
    }, v))), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, '운영자'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    }, '20200818 : 14:30'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }, '125'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, '10'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
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
      lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluUG9zdHNfMTAwMS5qcyJdLCJuYW1lcyI6WyJtYWluUG9zdHNfMTAwMSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlRWZmZWN0IiwidHlwZSIsIk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCIsImRhdGEiLCJwb3N0RmxhZyIsImN1cnJlbnRQYWdlIiwibm93UGFnZSIsIm1heFBhZ2UiLCJwb3N0c1BlclBhZ2UiLCJMT0FEX1VTRVJfUkVRVUVTVCIsInVzZVN0YXRlIiwic2V0Tm93UGFnZSIsImdyb3VwUGFnZSIsInNldEdyb3VwUGFnZSIsIm5vd0dyb3VwUGFnZUFycmF5Iiwic2V0Tm93R3JvdXBQYWdlQXJyYXkiLCJwYWdlbmF0ZSIsInVzZUNhbGxiYWNrIiwicGFnZU51bWJlciIsImdyb3VwUGFnZUFycmF5IiwibGVuZ3RoIiwiY29uY2F0IiwiaW5kZXhPZkxhc3RQb3N0IiwiaW5kZXhPZkZpcnN0UG9zdCIsImR1bW15TGlzdCIsIm1hcmdpblRvcCIsIm1hcCIsInYiLCJpIiwid2lkdGgiLCJoZWlnaHQiLCJwYXRobmFtZSIsInF1ZXJ5IiwicG9zdElkIiwibmljayIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBSUE7O0FBS0EsSUFBTUEsY0FBYyxHQUFHLDBCQUFJO0FBQUE7O0FBRXpCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRnlCLHFCQUdBQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNKLGNBQWY7QUFBQSxHQUFELENBSFg7QUFBQSxNQUdsQkEsY0FIa0IsZ0JBR2xCQSxjQUhrQjs7QUFLekJLLHlEQUFTLENBQUMsWUFBSTtBQUNaSixZQUFRLENBQUM7QUFDTEssVUFBSSxFQUFDQyxvRkFEQTtBQUVM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Q0FORCxFQU9DO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQyxHQUFoQyxDQVBELENBRE07QUFBQSxHQUFkLENBWEksQ0FESCxDQURKLEVBMkJJLE1BQUMsaUVBQUQ7QUFBWSxZQUFRLEVBQUVYLFFBQXRCO0FBQWdDLGNBQVUsRUFBRVEsU0FBUyxDQUFDSixNQUF0RDtBQUE4RCxnQkFBWSxFQUFFWixZQUE1RTtBQUEwRixXQUFPLEVBQUVGLE9BQW5HO0FBQTRHLGFBQVMsRUFBRU0sU0FBdkg7QUFBa0ksa0JBQWMsRUFBRUUsaUJBQWxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkosQ0FERDtBQWdDRixDQTFFRDs7R0FBTW5CLGM7VUFFYUUsdUQsRUFDUUMsdUQ7OztBQTBFWkgsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1haW5Qb3N0c18xMDAxLmpzLjk1ZTQyNjJjZmYzMzJiMDNiM2U2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0ICwge3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDYWxsYmFja31mcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7IFxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFBhZ2VuYXRpb24gZnJvbSAnLi4vdXRpbENvbXBvbmVudC9QYWdlbmF0aW9uJ1xyXG5pbXBvcnQgXHJcbiAgICB7TUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNULH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxJzsgXHJcblxyXG5cclxuaW1wb3J0IFxyXG4gICAge0xPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvYXV0aCc7IFxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBtYWluUG9zdHNfMTAwMSA9ICgpPT57XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTsgXHJcbiAgY29uc3Qge21haW5Qb3N0c18xMDAxfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLm1haW5Qb3N0c18xMDAxKTsgXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNULCBcclxuICAgICAgICBkYXRhOntwb3N0RmxhZzonMTAwMScsXHJcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U6bm93UGFnZSxcclxuICAgICAgICAgICAgICBtYXhQYWdlOnBvc3RzUGVyUGFnZVxyXG4gICAgICAgICAgICAgfSwgXHJcbiAgICB9KVxyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgfSk7IFxyXG4gIH0sW10pOyBcclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3tjpjsnbTsp5Ug7LKY66asIOuhnOyngSBzdGFydC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIGNvbnN0IFtub3dQYWdlLHNldE5vd1BhZ2VdID0gdXNlU3RhdGUoMCk7ICAgICAgICAgICAgICAgICAgICAgICAvL+2YhOyerCDtjpjsnbTsp4BcclxuICBjb25zdCBbcG9zdHNQZXJQYWdlXSA9IHVzZVN0YXRlKDUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/tlZwg7Y6Y7J207KeA64u5IGxpc3Qg7IiYIFxyXG4gIGNvbnN0IFtncm91cFBhZ2UgLCBzZXRHcm91cFBhZ2VdID0gdXNlU3RhdGUoNSk7ICAgICAgICAgICAgICAgICAvL+2OmOydtOynlSDqt7jro7kg64u5IOyImCAgMX41ICwgNn4xMCAsIDExfjE1IC4uLlxyXG4gIGNvbnN0IFtub3dHcm91cFBhZ2VBcnJheSxzZXROb3dHcm91cFBhZ2VBcnJheV0gPXVzZVN0YXRlKFtdKTsgICAvL+2YhOygnCDtjpjsnbTsp5Ug6re466O5IOuwsOyXtFxyXG5cclxuICBjb25zdCBwYWdlbmF0ZSA9dXNlQ2FsbGJhY2soKHBhZ2VOdW1iZXIsIGdyb3VwUGFnZUFycmF5KT0+e1xyXG4gICAgc2V0Tm93UGFnZShwYWdlTnVtYmVyKTsgXHJcbiAgICBub3dHcm91cFBhZ2VBcnJheS5sZW5ndGg9MDsgXHJcbiAgICBzZXROb3dHcm91cFBhZ2VBcnJheShub3dHcm91cFBhZ2VBcnJheS5jb25jYXQoZ3JvdXBQYWdlQXJyYXkpKTtcclxuICAgIGNvbnN0IGluZGV4T2ZMYXN0UG9zdCA9IHBhZ2VOdW1iZXIgKiBwb3N0c1BlclBhZ2U7ICAgXHJcbiAgICBjb25zdCBpbmRleE9mRmlyc3RQb3N0ID0gaW5kZXhPZkxhc3RQb3N0IC0gcG9zdHNQZXJQYWdlOyAgXHJcblxyXG5cclxufSxbbm93UGFnZSxub3dHcm91cFBhZ2VBcnJheV0pOyBcclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t7Y6Y7J207KeVIOyymOumrCDroZzsp4EgICBlbmQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG5cclxuICBjb25zdCBkdW1teUxpc3QgPSBbJ+2XrOuhnOyasOyblOuTnDAxJywn7Zes66Gc7Jqw7JuU65OcMDInLCftl6zroZzsmrDsm5Trk5wwMycsJ+2XrOuhnOyasOyblOuTnDA0Jywn7Zes66Gc7Jqw7JuU65OcMDUnLCftl6zroZzsmrDsm5Trk5wwNiddOyBcclxuXHJcbiAgXHJcbiAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZScgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUJvZHknPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJz5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7snbTrr7jsp4A8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7soJzrqqk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7snpHshLHsnpA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7rk7HroZ3snbw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7sobDtmow8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7stpTsspw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7rsJjrjIA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8YnIvPlxyXG4gICAgICB7ZHVtbXlMaXN0Lm1hcCgodixpKT0+KFxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJyBzdHlsZT17e3dpZHRoOic4MHB4JyxoZWlnaHQ6JzgwcHgnfX0+PGltZyBzcmM9J2h0dHBzOi8vZGltZy5kb25nYS5jb20vd3BzL05FV1MvSU1BR0UvMjAxOS8xMS8yNC85ODUxMDAxNS4xLmpwZycgc3R5bGU9e3t3aWR0aDonODBweCcsaGVpZ2h0Oic4MHB4J319Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID48TGluayBocmVmPXt7cGF0aG5hbWU6Jy9kZXRhaWxQYWdlJyAsIHF1ZXJ5Ontwb3N0SWQ6JzEwMDEnLG5pY2s6J2FiYycsZmxhZzonMjIyMid9fX0gYXM9eydkZXRhaWxQYWdlJ30+PGE+e3Z9PC9hPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID57J+yatOyYgeyekCd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJyA+eycyMDIwMDgxOCA6IDE0OjMwJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID57JzEyNSd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJyA+eycxMCd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJyA+eycwJ308L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxQYWdlbmF0aW9uIHBhZ2VuYXRlPXtwYWdlbmF0ZX0gZGF0YUxlbmd0aD17ZHVtbXlMaXN0Lmxlbmd0aH0gcG9zdHNQZXJQYWdlPXtwb3N0c1BlclBhZ2V9IG5vd1BhZ2U9e25vd1BhZ2V9IGdyb3VwUGFnZT17Z3JvdXBQYWdlfSBncm91cFBhZ2VBcnJheT17bm93R3JvdXBQYWdlQXJyYXl9IC8+XHJcblxyXG4gICAgPC8+XHJcbiAgICApO1xyXG59OyBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluUG9zdHNfMTAwMTsgIl0sInNvdXJjZVJvb3QiOiIifQ==