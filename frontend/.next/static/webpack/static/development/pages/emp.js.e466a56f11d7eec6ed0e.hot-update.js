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
    nowGroupPageArray.length = 0;
    setNowGroupPageArray(nowGroupPageArray.concat(groupPageArray));
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
      lineNumber: 75,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBA85"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 22
    }
  }, "\uC9C1\uCC45"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 22
    }
  }, "\uB9E4\uB2C8\uC838\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 22
    }
  }, "\uC785\uC0AC\uC77C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 22
    }
  }, "\uAE09\uC5EC"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 22
    }
  }, "\uC778\uC13C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 22
    }
  }, "\uBD80\uC11C\uBC88\uD638")), emplist && emplist.map(function (v, i) {
    return __jsx("div", {
      className: "divTableRow",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 22
      }
    }, v.EMPNO), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 22
      }
    }, v.ENAME), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 22
      }
    }, v.JOB), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 22
      }
    }, v.MGR), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 22
      }
    }, v.HIREDATE), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 22
      }
    }, v.SAL), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 22
      }
    }, v.COMM), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
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
      lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lbXAuanMiXSwibmFtZXMiOlsiRW1wIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJlbXAiLCJlbXBsaXN0IiwidXNlU3RhdGUiLCJub3dQYWdlIiwic2V0Tm93UGFnZSIsInBvc3RzUGVyUGFnZSIsImdyb3VwUGFnZSIsInNldEdyb3VwUGFnZSIsIm5vd0dyb3VwUGFnZUFycmF5Iiwic2V0Tm93R3JvdXBQYWdlQXJyYXkiLCJnZXRFbXBsaXN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiRU1QX0xJU1RfUkVRVUVTVCIsImRhdGEiLCJuYW1lIiwiam9iIiwiY3VycmVudFBhZ2UiLCJtYXhQYWdlIiwicGFnZW5hdGUiLCJwYWdlTnVtYmVyIiwiZ3JvdXBQYWdlQXJyYXkiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiY29uY2F0IiwiaW5kZXhPZkxhc3RQb3N0IiwiaW5kZXhPZkZpcnN0UG9zdCIsIm1hcmdpblRvcCIsIm1hcCIsInYiLCJpIiwiRU1QTk8iLCJFTkFNRSIsIkpPQiIsIk1HUiIsIkhJUkVEQVRFIiwiU0FMIiwiQ09NTSIsIkRFUFROTyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBSztBQUFBOztBQUdiLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBSGEscUJBSVFDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsR0FBVjtBQUFBLEdBQU4sQ0FKbkI7QUFBQSxNQUlOQyxPQUpNLGdCQUlOQSxPQUpNLEVBS2dCO0FBQ0E7OztBQU5oQixrQkFPZ0JDLHNEQUFRLENBQUMsQ0FBRCxDQVB4QjtBQUFBLE1BT05DLE9BUE07QUFBQSxNQU9FQyxVQVBGLGlCQU9tQzs7O0FBUG5DLG1C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LEVBMkJBLE1BQUMsaUVBQUQ7QUFBWSxZQUFRLEVBQUVwQixRQUF0QjtBQUFnQyxjQUFVLEVBQUVuQixPQUFPLENBQUN3QixNQUFwRDtBQUE0RCxnQkFBWSxFQUFFcEIsWUFBMUU7QUFBd0YsV0FBTyxFQUFFRixPQUFqRztBQUEwRyxhQUFTLEVBQUVHLFNBQXJIO0FBQWdJLGtCQUFjLEVBQUVFLGlCQUFoSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JBLENBREo7QUFnQ0gsQ0EvRkQ7O0dBQU1iLEc7VUFHZUUsdUQsRUFDSUMsdUQ7OztLQUpuQkgsRztBQWlHU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVtcC5qcy5lNDY2YTU2ZjExZDdlZWM2ZWQwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGFnZW5hdGlvbiBmcm9tICcuLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24nXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFxyXG4gICAge0VNUF9MSVNUX1JFUVVFU1QsfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvZW1wJzsgXHJcblxyXG5cclxuY29uc3QgRW1wID0gKCkgPT57XHJcblxyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTsgXHJcbiAgICBjb25zdCB7ZW1wbGlzdH0gICAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5lbXApOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9yZeydmCBzdGF0ZeulvCDrtojrn6zsmKTripQgaG9vayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9yZeydmCBzdGF0ZSDspJHsl5DshJwgY291bnTsnZggc3RhdGXrpbwg67aI65+s7Jio64ukLlxyXG4gICAgY29uc3QgW25vd1BhZ2Usc2V0Tm93UGFnZV0gPSB1c2VTdGF0ZSgwKTsgICAgICAgLy/tmITsnqwg7Y6Y7J207KeAXHJcbiAgICBjb25zdCBbcG9zdHNQZXJQYWdlXSA9IHVzZVN0YXRlKDIpOyAgICAgICAgICAgICAvL+2VnCDtjpjsnbTsp4Dri7kgbGlzdCDsiJggXHJcbiAgICBjb25zdCBbZ3JvdXBQYWdlICwgc2V0R3JvdXBQYWdlXSA9IHVzZVN0YXRlKDUpOyAvL+2OmOydtOynlSDqt7jro7kg64u5IOyImCAgMX41ICwgNn4xMCAsIDExfjE1XHJcbiAgICBjb25zdCBbbm93R3JvdXBQYWdlQXJyYXksc2V0Tm93R3JvdXBQYWdlQXJyYXldID11c2VTdGF0ZShbXSk7ICBcclxuXHJcbiAgICBjb25zdCBnZXRFbXBsaXN0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICAgIFxyXG4gICAgfSxbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RU1QX0xJU1RfUkVRVUVTVCwgXHJcbiAgICAgICAgICAgIGRhdGE6e25hbWU6JycsXHJcbiAgICAgICAgICAgICAgICAgIGpvYjonJyxcclxuICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6bm93UGFnZSxcclxuICAgICAgICAgICAgICAgICAgbWF4UGFnZTpwb3N0c1BlclBhZ2VcclxuICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICB9KVxyXG4gICAgICB9LFtdKTsgXHJcblxyXG5cclxuICAgICAvLyBjb25zdCBjdXJyZW50UG9zdHMgPSBlbXBsaXN0LnNsaWNlKGluZGV4T2ZGaXJzdFBvc3QsaW5kZXhPZkxhc3RQb3N0KTsgLy8wfjVcclxuICAgICAgLypcclxuICAgICAgMSDtjpjsnbTsp4AgPSAxKjUgPTUgXHJcbiAgICAgICAgICAgICAgICA1LTUgPTAgXHJcbiAgICAgICAgICAgICAgICAwfjUgXHJcbiAgICAgIDIg7Y6Y7J207KeAID0gMio1PTEwIFxyXG4gICAgICAgICAgICAgICAgMTAtNT01IFxyXG4gICAgICAgICAgICAgICAgNX4xMFxyXG4gICAgICAzIO2OmOydtOyngCA9IDMqNT0xNSBcclxuICAgICAgKi9cclxuICAgIFxyXG5cclxuICAgICAgY29uc3QgcGFnZW5hdGUgPXVzZUNhbGxiYWNrKChwYWdlTnVtYmVyLCBncm91cFBhZ2VBcnJheSk9PntcclxuICAgICAgICBzZXROb3dQYWdlKHBhZ2VOdW1iZXIpOyBcclxuICAgICAgICBjb25zb2xlLmxvZygnZ3JvdXBQYWdlQXJyYXknLCBncm91cFBhZ2VBcnJheSk7IFxyXG4gICAgICAgIG5vd0dyb3VwUGFnZUFycmF5Lmxlbmd0aD0wOyBcclxuICAgICAgICBzZXROb3dHcm91cFBhZ2VBcnJheShub3dHcm91cFBhZ2VBcnJheS5jb25jYXQoZ3JvdXBQYWdlQXJyYXkpKTtcclxuICAgICBcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXhPZkxhc3RQb3N0ID0gcGFnZU51bWJlciAqIHBvc3RzUGVyUGFnZTsgICBcclxuICAgICAgICBjb25zdCBpbmRleE9mRmlyc3RQb3N0ID0gaW5kZXhPZkxhc3RQb3N0IC0gcG9zdHNQZXJQYWdlOyAgXHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6RU1QX0xJU1RfUkVRVUVTVCwgXHJcbiAgICAgICAgICBkYXRhOntuYW1lOicnLFxyXG4gICAgICAgICAgICAgICAgam9iOicnLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6aW5kZXhPZkZpcnN0UG9zdCxcclxuICAgICAgICAgICAgICAgIG1heFBhZ2U6cG9zdHNQZXJQYWdlXHJcbiAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgICB9LFtub3dQYWdlLG5vd0dyb3VwUGFnZUFycmF5XSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZScgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUJvZHknPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyCrOybkOuyiO2YuDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7sgqzsm5DrqoU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7KeB7LGFPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuunpOuLiOyguOuyiO2YuDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7snoXsgqzsnbw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+6riJ7JesPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyduOyEvDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7rtoDshJzrsojtmLg8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2VtcGxpc3QgJiYgZW1wbGlzdC5tYXAoKHYsaSk9PihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdycga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuRU1QTk99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkVOQU1FfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5KT0J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2Lk1HUn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuSElSRURBVEV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LlNBTH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuQ09NTX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuREVQVE5PfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBhZ2VuYXRpb24gcGFnZW5hdGU9e3BhZ2VuYXRlfSBkYXRhTGVuZ3RoPXtlbXBsaXN0Lmxlbmd0aH0gcG9zdHNQZXJQYWdlPXtwb3N0c1BlclBhZ2V9IG5vd1BhZ2U9e25vd1BhZ2V9IGdyb3VwUGFnZT17Z3JvdXBQYWdlfSBncm91cFBhZ2VBcnJheT17bm93R3JvdXBQYWdlQXJyYXl9Lz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcDsiXSwic291cmNlUm9vdCI6IiJ9