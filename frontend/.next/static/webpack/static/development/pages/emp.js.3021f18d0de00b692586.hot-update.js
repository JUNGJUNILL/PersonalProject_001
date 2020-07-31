webpackHotUpdate("static\\development\\pages\\emp.js",{

/***/ "./pages/emp.js":
/*!**********************!*\
  !*** ./pages/emp.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utilComponent_Pagenation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilComponent/Pagenation */ "./utilComponent/Pagenation.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _reducers_emp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/emp */ "./reducers/emp.js");
var _this = undefined,
    _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\pages\\emp.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Emp = function Emp() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.emp;
  }),
      emplist = _useSelector.emplist; //store의 state를 불러오는 hook 
  //store의 state 중에서 count의 state를 불러온다.


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      nowPage = _useState[0],
      setNowPage = _useState[1]; //현재 페이지


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(2),
      postsPerPage = _useState2[0]; //한 페이지당 list 수 


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(5),
      groupPage = _useState3[0],
      setGroupPage = _useState3[1]; //페이징 그룹 당 수  1~5 , 6~10 , 11~15


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      nowGroupPageArray = _useState4[0],
      setNowGroupPageArray = _useState4[1];

  var getEmplist = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {}, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_4__["EMP_LIST_REQUEST"],
      data: {
        name: '',
        job: '',
        currentPage: nowPage,
        maxPage: postsPerPage
      }
    });
  }, []); // const currentPosts = emplist.slice(indexOfFirstPost,indexOfLastPost); //0~5

  /*
  1 페이지 = 1*5 =5 
            5-5 =0 
            0~5 
  2 페이지 = 2*5=10 
            10-5=5 
            5~10
  3 페이지 = 3*5=15 
  */

  var pagenate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (pageNumber, groupPageArray) {
    setNowPage(pageNumber);
    console.log('groupPageArray', groupPageArray);

    if (groupPageArray[0] + 1 > nowPage) {
      nowGroupPageArray.length = 0;
      var aaaa = groupPageArray.map(function (v) {
        return v - 5;
      });
      setNowGroupPageArray(nowGroupPageArray.concat(aaaa));
    } else {
      nowGroupPageArray.length = 0;
      setNowGroupPageArray(nowGroupPageArray.concat(groupPageArray));
    }

    var indexOfLastPost = pageNumber * postsPerPage;
    var indexOfFirstPost = indexOfLastPost - postsPerPage;
    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_4__["EMP_LIST_REQUEST"],
      data: {
        name: '',
        job: '',
        currentPage: indexOfFirstPost,
        maxPage: postsPerPage
      }
    });
  }, [nowPage, nowGroupPageArray]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "divTable",
    style: {
      marginTop: '3%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBA85"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 22
    }
  }, "\uC9C1\uCC45"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 22
    }
  }, "\uB9E4\uB2C8\uC838\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 22
    }
  }, "\uC785\uC0AC\uC77C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 22
    }
  }, "\uAE09\uC5EC"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 22
    }
  }, "\uC778\uC13C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 22
    }
  }, "\uBD80\uC11C\uBC88\uD638")), emplist && emplist.map(function (v, i) {
    return __jsx("div", {
      className: "divTableRow",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 22
      }
    }, v.EMPNO), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 22
      }
    }, v.ENAME), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 22
      }
    }, v.JOB), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 22
      }
    }, v.MGR), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 22
      }
    }, v.HIREDATE), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 22
      }
    }, v.SAL), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 22
      }
    }, v.COMM), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 22
      }
    }, v.DEPTNO));
  }))), __jsx(_utilComponent_Pagenation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pagenate: pagenate,
    dataLength: emplist.length,
    postsPerPage: postsPerPage,
    nowPage: nowPage,
    groupPage: groupPage,
    groupPageArray: nowGroupPageArray,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }));
};

_s(Emp, "csGm+8V0aMRrcZZtysODTxEqiXk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Emp;
/* harmony default export */ __webpack_exports__["default"] = (Emp);

var _c;

$RefreshReg$(_c, "Emp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lbXAuanMiXSwibmFtZXMiOlsiRW1wIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJlbXAiLCJlbXBsaXN0IiwidXNlU3RhdGUiLCJub3dQYWdlIiwic2V0Tm93UGFnZSIsInBvc3RzUGVyUGFnZSIsImdyb3VwUGFnZSIsInNldEdyb3VwUGFnZSIsIm5vd0dyb3VwUGFnZUFycmF5Iiwic2V0Tm93R3JvdXBQYWdlQXJyYXkiLCJnZXRFbXBsaXN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiRU1QX0xJU1RfUkVRVUVTVCIsImRhdGEiLCJuYW1lIiwiam9iIiwiY3VycmVudFBhZ2UiLCJtYXhQYWdlIiwicGFnZW5hdGUiLCJwYWdlTnVtYmVyIiwiZ3JvdXBQYWdlQXJyYXkiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiYWFhYSIsIm1hcCIsInYiLCJjb25jYXQiLCJpbmRleE9mTGFzdFBvc3QiLCJpbmRleE9mRmlyc3RQb3N0IiwibWFyZ2luVG9wIiwiaSIsIkVNUE5PIiwiRU5BTUUiLCJKT0IiLCJNR1IiLCJISVJFREFURSIsIlNBTCIsIkNPTU0iLCJERVBUTk8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQUs7QUFBQTs7QUFHYixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUhhLHFCQUlRQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLEdBQVY7QUFBQSxHQUFOLENBSm5CO0FBQUEsTUFJTkMsT0FKTSxnQkFJTkEsT0FKTSxFQUtnQjtBQUNBOzs7QUFOaEIsa0JBT2dCQyxzREFBUSxDQUFDLENBQUQsQ0FQeEI7QUFBQSxNQU9OQyxPQVBNO0FBQUEsTUFPRUMsVUFQRixpQkFPbUM7OztB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LEVBTUs7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCVixDQUFDLENBQUNXLEdBQWpDLENBTkwsRUFPSztBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0JYLENBQUMsQ0FBQ1ksSUFBakMsQ0FQTCxFQVFLO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQlosQ0FBQyxDQUFDYSxNQUFqQyxDQVJMLENBRG9CO0FBQUEsR0FBWixDQVhiLENBREYsQ0FERCxFQTJCQSxNQUFDLGlFQUFEO0FBQVksWUFBUSxFQUFFckIsUUFBdEI7QUFBZ0MsY0FBVSxFQUFFbkIsT0FBTyxDQUFDd0IsTUFBcEQ7QUFBNEQsZ0JBQVksRUFBRXBCLFlBQTFFO0FBQXdGLFdBQU8sRUFBRUYsT0FBakc7QUFBMEcsYUFBUyxFQUFFRyxTQUFySDtBQUFnSSxrQkFBYyxFQUFFRSxpQkFBaEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCQSxDQURKO0FBZ0NILENBeEdEOztHQUFNYixHO1VBR2VFLHVELEVBQ0lDLHVEOzs7S0FKbkJILEc7QUEwR1NBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxlbXAuanMuMzAyMWYxOGQwZGUwMGI2OTI1ODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBhZ2VuYXRpb24gZnJvbSAnLi4vdXRpbENvbXBvbmVudC9QYWdlbmF0aW9uJ1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBcclxuICAgIHtFTVBfTElTVF9SRVFVRVNULH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2VtcCc7IFxyXG5cclxuXHJcbmNvbnN0IEVtcCA9ICgpID0+e1xyXG5cclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gICAgY29uc3Qge2VtcGxpc3R9ICAgID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZW1wKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcmXsnZggc3RhdGXrpbwg67aI65+s7Jik64qUIGhvb2sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcmXsnZggc3RhdGUg7KSR7JeQ7IScIGNvdW507J2YIHN0YXRl66W8IOu2iOufrOyYqOuLpC5cclxuICAgIGNvbnN0IFtub3dQYWdlLHNldE5vd1BhZ2VdID0gdXNlU3RhdGUoMCk7ICAgICAgIC8v7ZiE7J6sIO2OmOydtOyngFxyXG4gICAgY29uc3QgW3Bvc3RzUGVyUGFnZV0gPSB1c2VTdGF0ZSgyKTsgICAgICAgICAgICAgLy/tlZwg7Y6Y7J207KeA64u5IGxpc3Qg7IiYIFxyXG4gICAgY29uc3QgW2dyb3VwUGFnZSAsIHNldEdyb3VwUGFnZV0gPSB1c2VTdGF0ZSg1KTsgLy/tjpjsnbTsp5Ug6re466O5IOuLuSDsiJggIDF+NSAsIDZ+MTAgLCAxMX4xNVxyXG4gICAgY29uc3QgW25vd0dyb3VwUGFnZUFycmF5LHNldE5vd0dyb3VwUGFnZUFycmF5XSA9dXNlU3RhdGUoW10pOyAgXHJcblxyXG4gICAgY29uc3QgZ2V0RW1wbGlzdCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgICBcclxuICAgIH0sW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVNUF9MSVNUX1JFUVVFU1QsIFxyXG4gICAgICAgICAgICBkYXRhOntuYW1lOicnLFxyXG4gICAgICAgICAgICAgICAgICBqb2I6JycsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOm5vd1BhZ2UsXHJcbiAgICAgICAgICAgICAgICAgIG1heFBhZ2U6cG9zdHNQZXJQYWdlXHJcbiAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxbXSk7IFxyXG5cclxuXHJcbiAgICAgLy8gY29uc3QgY3VycmVudFBvc3RzID0gZW1wbGlzdC5zbGljZShpbmRleE9mRmlyc3RQb3N0LGluZGV4T2ZMYXN0UG9zdCk7IC8vMH41XHJcbiAgICAgIC8qXHJcbiAgICAgIDEg7Y6Y7J207KeAID0gMSo1ID01IFxyXG4gICAgICAgICAgICAgICAgNS01ID0wIFxyXG4gICAgICAgICAgICAgICAgMH41IFxyXG4gICAgICAyIO2OmOydtOyngCA9IDIqNT0xMCBcclxuICAgICAgICAgICAgICAgIDEwLTU9NSBcclxuICAgICAgICAgICAgICAgIDV+MTBcclxuICAgICAgMyDtjpjsnbTsp4AgPSAzKjU9MTUgXHJcbiAgICAgICovXHJcbiAgICBcclxuXHJcbiAgICAgIGNvbnN0IHBhZ2VuYXRlID11c2VDYWxsYmFjaygocGFnZU51bWJlciwgZ3JvdXBQYWdlQXJyYXkpPT57XHJcbiAgICAgICAgc2V0Tm93UGFnZShwYWdlTnVtYmVyKTsgXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdncm91cFBhZ2VBcnJheScsIGdyb3VwUGFnZUFycmF5KTsgXHJcbiAgICAgICAgaWYoZ3JvdXBQYWdlQXJyYXlbMF0rMSA+IG5vd1BhZ2Upe1xyXG4gICAgICAgICAgbm93R3JvdXBQYWdlQXJyYXkubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgY29uc3QgYWFhYSA9IGdyb3VwUGFnZUFycmF5Lm1hcCh2PT57cmV0dXJuIHYtNX0pOyBcclxuICAgICAgICAgIHNldE5vd0dyb3VwUGFnZUFycmF5KG5vd0dyb3VwUGFnZUFycmF5LmNvbmNhdChhYWFhKSk7XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgbm93R3JvdXBQYWdlQXJyYXkubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgc2V0Tm93R3JvdXBQYWdlQXJyYXkobm93R3JvdXBQYWdlQXJyYXkuY29uY2F0KGdyb3VwUGFnZUFycmF5KSk7XHJcbiAgICAgICBcclxuICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBpbmRleE9mTGFzdFBvc3QgPSBwYWdlTnVtYmVyICogcG9zdHNQZXJQYWdlOyAgIFxyXG4gICAgICAgIGNvbnN0IGluZGV4T2ZGaXJzdFBvc3QgPSBpbmRleE9mTGFzdFBvc3QgLSBwb3N0c1BlclBhZ2U7ICBcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTpFTVBfTElTVF9SRVFVRVNULCBcclxuICAgICAgICAgIGRhdGE6e25hbWU6JycsXHJcbiAgICAgICAgICAgICAgICBqb2I6JycsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTppbmRleE9mRmlyc3RQb3N0LFxyXG4gICAgICAgICAgICAgICAgbWF4UGFnZTpwb3N0c1BlclBhZ2VcclxuICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIH0sW25vd1BhZ2Usbm93R3JvdXBQYWdlQXJyYXldKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJyBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQm9keSc+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7IKs7JuQ67KI7Zi4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyCrOybkOuqhTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7sp4HssYU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+66ek64uI7KC467KI7Zi4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyeheyCrOydvDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7quInsl6w8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7J247IS8PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuu2gOyEnOuyiO2YuDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZW1wbGlzdCAmJiBlbXBsaXN0Lm1hcCgodixpKT0+KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93JyBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5FTVBOT308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuRU5BTUV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkpPQn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuTUdSfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5ISVJFREFURX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuU0FMfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5DT01NfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5ERVBUTk99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UGFnZW5hdGlvbiBwYWdlbmF0ZT17cGFnZW5hdGV9IGRhdGFMZW5ndGg9e2VtcGxpc3QubGVuZ3RofSBwb3N0c1BlclBhZ2U9e3Bvc3RzUGVyUGFnZX0gbm93UGFnZT17bm93UGFnZX0gZ3JvdXBQYWdlPXtncm91cFBhZ2V9IGdyb3VwUGFnZUFycmF5PXtub3dHcm91cFBhZ2VBcnJheX0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wOyJdLCJzb3VyY2VSb290IjoiIn0=