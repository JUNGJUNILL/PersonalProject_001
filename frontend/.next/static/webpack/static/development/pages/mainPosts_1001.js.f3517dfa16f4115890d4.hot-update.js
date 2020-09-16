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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluUG9zdHNfMTAwMS5qcyJdLCJuYW1lcyI6WyJtYWluUG9zdHNfMTAwMSIsInVzZUVmZmVjdCIsImRpc3BhdGNoIiwidHlwZSIsIk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCIsImRhdGEiLCJwb3N0RmxhZyIsImN1cnJlbnRQYWdlIiwibm93UGFnZSIsIm1heFBhZ2UiLCJwb3N0c1BlclBhZ2UiLCJMT0FEX1VTRVJfUkVRVUVTVCIsInVzZVN0YXRlIiwic2V0Tm93UGFnZSIsImdyb3VwUGFnZSIsInNldEdyb3VwUGFnZSIsIm5vd0dyb3VwUGFnZUFycmF5Iiwic2V0Tm93R3JvdXBQYWdlQXJyYXkiLCJwYWdlbmF0ZSIsInVzZUNhbGxiYWNrIiwicGFnZU51bWJlciIsImdyb3VwUGFnZUFycmF5IiwibGVuZ3RoIiwiY29uY2F0IiwiaW5kZXhPZkxhc3RQb3N0IiwiaW5kZXhPZkZpcnN0UG9zdCIsImR1bW15TGlzdCIsIm1hcmdpblRvcCIsIm1hcCIsInYiLCJpIiwid2lkdGgiLCJoZWlnaHQiLCJwYXRobmFtZSIsInF1ZXJ5IiwicG9zdElkIiwibmljayIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBUUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFJO0FBQUE7O0FBR3pCQyx5REFBUyxDQUFDLFlBQUk7QUFDWkMsWUFBUSxDQUFDO0FBQ0xDLFVBQUksRUFBQ0Msb0ZBREE7QUFFTEMsVUFBSSxFQUFDO0FBQUNDLGdCQUFRLEVBQUMsTUFBVjtBQUNDQyxtQkFBVyxFQUFDQyxPQURiO0FBRUNDLGVBQU8sRUFBQ0M7QUFGVDtBQUZBLEtBQUQsQ0FBUjtBQVFBUixZQUFRLENBQUM7QUFDTEMsVUFBSSxFQUFDUSxnRUFBaUJBO0FBRGpCLEtBQUQsQ0FBUjtBQUdELEdBWlEsRUFZUCxFQVpPLENBQVQ7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OEQsZ0JBQVksRUFBRVosWUFBNUU7QUFBMEYsV0FBTyxFQUFFRixPQUFuRztBQUE0RyxhQUFTLEVBQUVNLFNBQXZIO0FBQWtJLGtCQUFjLEVBQUVFLGlCQUFsSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJKLENBREQ7QUErQkYsQ0FuRUQ7O0dBQU1oQixjOztBQXNFU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1haW5Qb3N0c18xMDAxLmpzLmYzNTE3ZGZhMTZmNDExNTg5MGQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0ICwge3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDYWxsYmFja31mcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7IFxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFBhZ2VuYXRpb24gZnJvbSAnLi4vdXRpbENvbXBvbmVudC9QYWdlbmF0aW9uJ1xyXG5pbXBvcnQgXHJcbiAgICB7TUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNULH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxJzsgXHJcblxyXG5cclxuaW1wb3J0IFxyXG4gICAge0xPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvYXV0aCc7IFxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbWFpblBvc3RzXzEwMDEgPSAoKT0+e1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QsIFxyXG4gICAgICAgIGRhdGE6e3Bvc3RGbGFnOicxMDAxJyxcclxuICAgICAgICAgICAgICBjdXJyZW50UGFnZTpub3dQYWdlLFxyXG4gICAgICAgICAgICAgIG1heFBhZ2U6cG9zdHNQZXJQYWdlXHJcbiAgICAgICAgICAgICB9LCBcclxuICAgIH0pXHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICB9KTsgXHJcbiAgfSxbXSk7IFxyXG5cclxuICBjb25zdCBbbm93UGFnZSxzZXROb3dQYWdlXSA9IHVzZVN0YXRlKDApOyAgICAgICAgICAgICAgICAgICAgICAgLy/tmITsnqwg7Y6Y7J207KeAXHJcbiAgY29uc3QgW3Bvc3RzUGVyUGFnZV0gPSB1c2VTdGF0ZSg1KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v7ZWcIO2OmOydtOyngOuLuSBsaXN0IOyImCBcclxuICBjb25zdCBbZ3JvdXBQYWdlICwgc2V0R3JvdXBQYWdlXSA9IHVzZVN0YXRlKDUpOyAgICAgICAgICAgICAgICAgLy/tjpjsnbTsp5Ug6re466O5IOuLuSDsiJggIDF+NSAsIDZ+MTAgLCAxMX4xNSAuLi5cclxuICBjb25zdCBbbm93R3JvdXBQYWdlQXJyYXksc2V0Tm93R3JvdXBQYWdlQXJyYXldID11c2VTdGF0ZShbXSk7ICAgLy/tmITsoJwg7Y6Y7J207KeVIOq3uOujuSDrsLDsl7RcclxuXHJcbiAgY29uc3QgcGFnZW5hdGUgPXVzZUNhbGxiYWNrKChwYWdlTnVtYmVyLCBncm91cFBhZ2VBcnJheSk9PntcclxuICAgIHNldE5vd1BhZ2UocGFnZU51bWJlcik7IFxyXG4gICAgbm93R3JvdXBQYWdlQXJyYXkubGVuZ3RoPTA7IFxyXG4gICAgc2V0Tm93R3JvdXBQYWdlQXJyYXkobm93R3JvdXBQYWdlQXJyYXkuY29uY2F0KGdyb3VwUGFnZUFycmF5KSk7XHJcbiAgICBjb25zdCBpbmRleE9mTGFzdFBvc3QgPSBwYWdlTnVtYmVyICogcG9zdHNQZXJQYWdlOyAgIFxyXG4gICAgY29uc3QgaW5kZXhPZkZpcnN0UG9zdCA9IGluZGV4T2ZMYXN0UG9zdCAtIHBvc3RzUGVyUGFnZTsgIFxyXG5cclxuXHJcbn0sW25vd1BhZ2Usbm93R3JvdXBQYWdlQXJyYXldKTsgXHJcblxyXG5cclxuICBjb25zdCBkdW1teUxpc3QgPSBbJ+2XrOuhnOyasOyblOuTnDAxJywn7Zes66Gc7Jqw7JuU65OcMDInLCftl6zroZzsmrDsm5Trk5wwMycsJ+2XrOuhnOyasOyblOuTnDA0Jywn7Zes66Gc7Jqw7JuU65OcMDUnLCftl6zroZzsmrDsm5Trk5wwNiddOyBcclxuXHJcbiAgXHJcbiAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZScgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUJvZHknPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJz5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7snbTrr7jsp4A8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7soJzrqqk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7snpHshLHsnpA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7rk7HroZ3snbw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7sobDtmow8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7stpTsspw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz7rsJjrjIA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8YnIvPlxyXG4gICAgICB7ZHVtbXlMaXN0Lm1hcCgodixpKT0+KFxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJyBzdHlsZT17e3dpZHRoOic4MHB4JyxoZWlnaHQ6JzgwcHgnfX0+PGltZyBzcmM9J2h0dHBzOi8vZGltZy5kb25nYS5jb20vd3BzL05FV1MvSU1BR0UvMjAxOS8xMS8yNC85ODUxMDAxNS4xLmpwZycgc3R5bGU9e3t3aWR0aDonODBweCcsaGVpZ2h0Oic4MHB4J319Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID48TGluayBocmVmPXt7cGF0aG5hbWU6Jy9kZXRhaWxQYWdlJyAsIHF1ZXJ5Ontwb3N0SWQ6JzEwMDEnLG5pY2s6J2FiYycsZmxhZzonMjIyMid9fX0gYXM9eydkZXRhaWxQYWdlJ30+PGE+e3Z9PC9hPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID57J+yatOyYgeyekCd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJyA+eycyMDIwMDgxOCA6IDE0OjMwJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID57JzEyNSd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJyA+eycxMCd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJyA+eycwJ308L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBhZ2VuYXRpb24gcGFnZW5hdGU9e3BhZ2VuYXRlfSBkYXRhTGVuZ3RoPXtkdW1teUxpc3QubGVuZ3RofSBwb3N0c1BlclBhZ2U9e3Bvc3RzUGVyUGFnZX0gbm93UGFnZT17bm93UGFnZX0gZ3JvdXBQYWdlPXtncm91cFBhZ2V9IGdyb3VwUGFnZUFycmF5PXtub3dHcm91cFBhZ2VBcnJheX0gLz5cclxuXHJcbiAgICA8Lz5cclxuICAgICk7XHJcbn07IFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5Qb3N0c18xMDAxOyAiXSwic291cmNlUm9vdCI6IiJ9