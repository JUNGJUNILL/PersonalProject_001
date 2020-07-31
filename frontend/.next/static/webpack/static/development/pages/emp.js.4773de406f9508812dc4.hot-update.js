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
    nowGroupPageArray.length = 0;
    setNowGroupPageArray(nowGroupPageArray.concat(groupPageArray));
    var indexOfLastPost = pageNumber * postsPerPage;
    var indexOfFirstPost = indexOfLastPost - postsPerPage;
    console.log('aarraayy==>', array);
    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_4__["EMP_LIST_REQUEST"],
      data: {
        name: '',
        job: '',
        currentPage: indexOfFirstPost,
        maxPage: postsPerPage
      }
    });
  }, [nowPage, array]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "divTable",
    style: {
      marginTop: '3%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBA85"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 22
    }
  }, "\uC9C1\uCC45"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 22
    }
  }, "\uB9E4\uB2C8\uC838\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 22
    }
  }, "\uC785\uC0AC\uC77C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 22
    }
  }, "\uAE09\uC5EC"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 22
    }
  }, "\uC778\uC13C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 22
    }
  }, "\uBD80\uC11C\uBC88\uD638")), emplist && emplist.map(function (v, i) {
    return __jsx("div", {
      className: "divTableRow",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 22
      }
    }, v.EMPNO), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 22
      }
    }, v.ENAME), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 22
      }
    }, v.JOB), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 22
      }
    }, v.MGR), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 22
      }
    }, v.HIREDATE), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 22
      }
    }, v.SAL), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 22
      }
    }, v.COMM), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
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
      lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lbXAuanMiXSwibmFtZXMiOlsiRW1wIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJlbXAiLCJlbXBsaXN0IiwidXNlU3RhdGUiLCJub3dQYWdlIiwic2V0Tm93UGFnZSIsInBvc3RzUGVyUGFnZSIsImdyb3VwUGFnZSIsInNldEdyb3VwUGFnZSIsIm5vd0dyb3VwUGFnZUFycmF5Iiwic2V0Tm93R3JvdXBQYWdlQXJyYXkiLCJnZXRFbXBsaXN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiRU1QX0xJU1RfUkVRVUVTVCIsImRhdGEiLCJuYW1lIiwiam9iIiwiY3VycmVudFBhZ2UiLCJtYXhQYWdlIiwicGFnZW5hdGUiLCJwYWdlTnVtYmVyIiwiZ3JvdXBQYWdlQXJyYXkiLCJsZW5ndGgiLCJjb25jYXQiLCJpbmRleE9mTGFzdFBvc3QiLCJpbmRleE9mRmlyc3RQb3N0IiwiY29uc29sZSIsImxvZyIsImFycmF5IiwibWFyZ2luVG9wIiwibWFwIiwidiIsImkiLCJFTVBOTyIsIkVOQU1FIiwiSk9CIiwiTUdSIiwiSElSRURBVEUiLCJTQUwiLCJDT01NIiwiREVQVE5PIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFLO0FBQUE7O0FBR2IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFIYSxxQkFJUUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxHQUFWO0FBQUEsR0FBTixDQUpuQjtBQUFBLE1BSU5DLE9BSk0sZ0JBSU5BLE9BSk0sRUFLZ0I7QUFDQTs7O0FBTmhCLGtCQU9nQkMsc0RBQVEsQ0FBQyxDQUFELENBUHhCO0FBQUEsTUFPTkMsT0FQTTtBQUFBLE1BT0VDLFVBUEYsaUJBT21DOzs7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RixDQURELEVBMkJBLE1BQUMsaUVBQUQ7QUFBWSxZQUFRLEVBQUVyQixRQUF0QjtBQUFnQyxjQUFVLEVBQUVuQixPQUFPLENBQUNzQixNQUFwRDtBQUE0RCxnQkFBWSxFQUFFbEIsWUFBMUU7QUFBd0YsV0FBTyxFQUFFRixPQUFqRztBQUEwRyxhQUFTLEVBQUVHLFNBQXJIO0FBQWdJLGtCQUFjLEVBQUVFLGlCQUFoSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JBLENBREo7QUFnQ0gsQ0E5RkQ7O0dBQU1iLEc7VUFHZUUsdUQsRUFDSUMsdUQ7OztLQUpuQkgsRztBQWdHU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVtcC5qcy40NzczZGU0MDZmOTUwODgxMmRjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGFnZW5hdGlvbiBmcm9tICcuLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24nXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFxyXG4gICAge0VNUF9MSVNUX1JFUVVFU1QsfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvZW1wJzsgXHJcblxyXG5cclxuY29uc3QgRW1wID0gKCkgPT57XHJcblxyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTsgXHJcbiAgICBjb25zdCB7ZW1wbGlzdH0gICAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5lbXApOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9yZeydmCBzdGF0ZeulvCDrtojrn6zsmKTripQgaG9vayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9yZeydmCBzdGF0ZSDspJHsl5DshJwgY291bnTsnZggc3RhdGXrpbwg67aI65+s7Jio64ukLlxyXG4gICAgY29uc3QgW25vd1BhZ2Usc2V0Tm93UGFnZV0gPSB1c2VTdGF0ZSgwKTsgICAgICAgLy/tmITsnqwg7Y6Y7J207KeAXHJcbiAgICBjb25zdCBbcG9zdHNQZXJQYWdlXSA9IHVzZVN0YXRlKDIpOyAgICAgICAgICAgICAvL+2VnCDtjpjsnbTsp4Dri7kgbGlzdCDsiJggXHJcbiAgICBjb25zdCBbZ3JvdXBQYWdlICwgc2V0R3JvdXBQYWdlXSA9IHVzZVN0YXRlKDUpOyAvL+2OmOydtOynlSDqt7jro7kg64u5IOyImCAgMX41ICwgNn4xMCAsIDExfjE1XHJcbiAgICBjb25zdCBbbm93R3JvdXBQYWdlQXJyYXksc2V0Tm93R3JvdXBQYWdlQXJyYXldID11c2VTdGF0ZShbXSk7ICBcclxuXHJcbiAgICBjb25zdCBnZXRFbXBsaXN0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICAgIFxyXG4gICAgfSxbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RU1QX0xJU1RfUkVRVUVTVCwgXHJcbiAgICAgICAgICAgIGRhdGE6e25hbWU6JycsXHJcbiAgICAgICAgICAgICAgICAgIGpvYjonJyxcclxuICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6bm93UGFnZSxcclxuICAgICAgICAgICAgICAgICAgbWF4UGFnZTpwb3N0c1BlclBhZ2VcclxuICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICB9KVxyXG4gICAgICB9LFtdKTsgXHJcblxyXG5cclxuICAgICAvLyBjb25zdCBjdXJyZW50UG9zdHMgPSBlbXBsaXN0LnNsaWNlKGluZGV4T2ZGaXJzdFBvc3QsaW5kZXhPZkxhc3RQb3N0KTsgLy8wfjVcclxuICAgICAgLypcclxuICAgICAgMSDtjpjsnbTsp4AgPSAxKjUgPTUgXHJcbiAgICAgICAgICAgICAgICA1LTUgPTAgXHJcbiAgICAgICAgICAgICAgICAwfjUgXHJcbiAgICAgIDIg7Y6Y7J207KeAID0gMio1PTEwIFxyXG4gICAgICAgICAgICAgICAgMTAtNT01IFxyXG4gICAgICAgICAgICAgICAgNX4xMFxyXG4gICAgICAzIO2OmOydtOyngCA9IDMqNT0xNSBcclxuICAgICAgKi9cclxuICAgIFxyXG5cclxuICAgICAgY29uc3QgcGFnZW5hdGUgPXVzZUNhbGxiYWNrKChwYWdlTnVtYmVyLCBncm91cFBhZ2VBcnJheSk9PntcclxuICAgICAgICBzZXROb3dQYWdlKHBhZ2VOdW1iZXIpOyBcclxuICAgICAgICBub3dHcm91cFBhZ2VBcnJheS5sZW5ndGg9MDsgXHJcbiAgICAgICAgc2V0Tm93R3JvdXBQYWdlQXJyYXkobm93R3JvdXBQYWdlQXJyYXkuY29uY2F0KGdyb3VwUGFnZUFycmF5KSk7XHJcbiAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4T2ZMYXN0UG9zdCA9IHBhZ2VOdW1iZXIgKiBwb3N0c1BlclBhZ2U7ICAgXHJcbiAgICAgICAgY29uc3QgaW5kZXhPZkZpcnN0UG9zdCA9IGluZGV4T2ZMYXN0UG9zdCAtIHBvc3RzUGVyUGFnZTsgIFxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnYWFycmFheXk9PT4nICwgYXJyYXkpOyBcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOkVNUF9MSVNUX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7bmFtZTonJyxcclxuICAgICAgICAgICAgICAgIGpvYjonJyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOmluZGV4T2ZGaXJzdFBvc3QsXHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlOnBvc3RzUGVyUGFnZVxyXG4gICAgICAgICAgICAgICB9LCBcclxuICAgICAgfSlcclxuXHJcbiAgICAgIH0sW25vd1BhZ2UsYXJyYXldKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJyBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQm9keSc+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7IKs7JuQ67KI7Zi4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyCrOybkOuqhTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7sp4HssYU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+66ek64uI7KC467KI7Zi4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyeheyCrOydvDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7quInsl6w8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7J247IS8PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuu2gOyEnOuyiO2YuDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZW1wbGlzdCAmJiBlbXBsaXN0Lm1hcCgodixpKT0+KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93JyBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5FTVBOT308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuRU5BTUV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkpPQn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuTUdSfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5ISVJFREFURX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuU0FMfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5DT01NfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5ERVBUTk99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UGFnZW5hdGlvbiBwYWdlbmF0ZT17cGFnZW5hdGV9IGRhdGFMZW5ndGg9e2VtcGxpc3QubGVuZ3RofSBwb3N0c1BlclBhZ2U9e3Bvc3RzUGVyUGFnZX0gbm93UGFnZT17bm93UGFnZX0gZ3JvdXBQYWdlPXtncm91cFBhZ2V9IGdyb3VwUGFnZUFycmF5PXtub3dHcm91cFBhZ2VBcnJheX0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wOyJdLCJzb3VyY2VSb290IjoiIn0=