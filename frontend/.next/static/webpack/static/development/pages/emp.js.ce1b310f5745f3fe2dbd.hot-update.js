webpackHotUpdate("static\\development\\pages\\emp.js",{

/***/ "./pages/emp.js":
/*!**********************!*\
  !*** ./pages/emp.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utilComponent_Pagenation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilComponent/Pagenation */ "./utilComponent/Pagenation.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _reducers_emp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/emp */ "./reducers/emp.js");


var _this = undefined,
    _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\pages\\emp.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Emp = function Emp() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.emp;
  }),
      emplist = _useSelector.emplist; //store의 state를 불러오는 hook 
  //store의 state 중에서 count의 state를 불러온다.


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      nowPage = _useState[0],
      setNowPage = _useState[1]; //현재 페이지


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(2),
      postsPerPage = _useState2[0]; //한 페이지당 list 수 


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(5),
      groupPage = _useState3[0],
      setGroupPage = _useState3[1]; //페이징 그룹 당 수  1~5 , 6~10 , 11~15


  var array = [];
  var getEmplist = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {}, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_5__["EMP_LIST_REQUEST"],
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

  var pagenate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (pageNumber, groupPageArray) {
    setNowPage(pageNumber);
    array = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("array"), groupPageArray.slice());
    alert(array);
    var indexOfLastPost = pageNumber * postsPerPage;
    var indexOfFirstPost = indexOfLastPost - postsPerPage;
    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_5__["EMP_LIST_REQUEST"],
      data: {
        name: '',
        job: '',
        currentPage: indexOfFirstPost,
        maxPage: postsPerPage
      }
    });
  }, [nowPage]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "divTable",
    style: {
      marginTop: '3%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBA85"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 22
    }
  }, "\uC9C1\uCC45"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 22
    }
  }, "\uB9E4\uB2C8\uC838\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 22
    }
  }, "\uC785\uC0AC\uC77C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 22
    }
  }, "\uAE09\uC5EC"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 22
    }
  }, "\uC778\uC13C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 22
    }
  }, "\uBD80\uC11C\uBC88\uD638")), emplist && emplist.map(function (v, i) {
    return __jsx("div", {
      className: "divTableRow",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 22
      }
    }, v.EMPNO), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 22
      }
    }, v.ENAME), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 22
      }
    }, v.JOB), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 22
      }
    }, v.MGR), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 22
      }
    }, v.HIREDATE), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 22
      }
    }, v.SAL), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 22
      }
    }, v.COMM), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 22
      }
    }, v.DEPTNO));
  }))), __jsx(_utilComponent_Pagenation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pagenate: pagenate,
    dataLength: emplist.length,
    postsPerPage: postsPerPage,
    nowPage: nowPage,
    groupPage: groupPage,
    groupPageArray: array,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }));
};

_s(Emp, "FI1Nqhr141eJFs0qdqhq5wkHueo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lbXAuanMiXSwibmFtZXMiOlsiRW1wIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJlbXAiLCJlbXBsaXN0IiwidXNlU3RhdGUiLCJub3dQYWdlIiwic2V0Tm93UGFnZSIsInBvc3RzUGVyUGFnZSIsImdyb3VwUGFnZSIsInNldEdyb3VwUGFnZSIsImFycmF5IiwiZ2V0RW1wbGlzdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidHlwZSIsIkVNUF9MSVNUX1JFUVVFU1QiLCJkYXRhIiwibmFtZSIsImpvYiIsImN1cnJlbnRQYWdlIiwibWF4UGFnZSIsInBhZ2VuYXRlIiwicGFnZU51bWJlciIsImdyb3VwUGFnZUFycmF5Iiwic2xpY2UiLCJhbGVydCIsImluZGV4T2ZMYXN0UG9zdCIsImluZGV4T2ZGaXJzdFBvc3QiLCJtYXJnaW5Ub3AiLCJtYXAiLCJ2IiwiaSIsIkVNUE5PIiwiRU5BTUUiLCJKT0IiLCJNR1IiLCJISVJFREFURSIsIlNBTCIsIkNPTU0iLCJERVBUTk8iLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQUs7QUFBQTs7QUFHYixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUhhLHFCQUlRQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLEdBQVY7QUFBQSxHQUFOLENBSm5CO0FBQUEsTUFJTkMsT0FKTSxnQkFJTkEsT0FKTSxFQUtnQjtBQUNBOzs7QUFOaEIsa0JBT2dCQyxzREFBUSxDQUFDLENBQUQsQ0FQeEI7QUFBQSxNQU9OQyxPQVBNO0FBQUEsTUFPRUMsVUFQRixpQkFPbUM7OztBQVBuQyxtQkFRVUYsc0RBQVEsQ0FBQyxDQUFELENBUmxCO0FBQUEsTUFRTkcsWUFS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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JBLENBREo7QUFnQ0gsQ0E1RkQ7O0dBQU1iLEc7VUFHZUUsdUQsRUFDSUMsdUQ7OztLQUpuQkgsRztBQThGU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVtcC5qcy5jZTFiMzEwZjU3NDVmM2ZlMmRiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGFnZW5hdGlvbiBmcm9tICcuLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24nXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFxyXG4gICAge0VNUF9MSVNUX1JFUVVFU1QsfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvZW1wJzsgXHJcblxyXG5cclxuY29uc3QgRW1wID0gKCkgPT57XHJcblxyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTsgXHJcbiAgICBjb25zdCB7ZW1wbGlzdH0gICAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5lbXApOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9yZeydmCBzdGF0ZeulvCDrtojrn6zsmKTripQgaG9vayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9yZeydmCBzdGF0ZSDspJHsl5DshJwgY291bnTsnZggc3RhdGXrpbwg67aI65+s7Jio64ukLlxyXG4gICAgY29uc3QgW25vd1BhZ2Usc2V0Tm93UGFnZV0gPSB1c2VTdGF0ZSgwKTsgICAgICAgLy/tmITsnqwg7Y6Y7J207KeAXHJcbiAgICBjb25zdCBbcG9zdHNQZXJQYWdlXSA9IHVzZVN0YXRlKDIpOyAgICAgICAgICAgICAvL+2VnCDtjpjsnbTsp4Dri7kgbGlzdCDsiJggXHJcbiAgICBjb25zdCBbZ3JvdXBQYWdlICwgc2V0R3JvdXBQYWdlXSA9IHVzZVN0YXRlKDUpOyAvL+2OmOydtOynlSDqt7jro7kg64u5IOyImCAgMX41ICwgNn4xMCAsIDExfjE1XHJcbiAgICBjb25zdCBhcnJheSA9W107IFxyXG4gXHJcbiAgICBjb25zdCBnZXRFbXBsaXN0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICAgIFxyXG4gICAgfSxbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RU1QX0xJU1RfUkVRVUVTVCwgXHJcbiAgICAgICAgICAgIGRhdGE6e25hbWU6JycsXHJcbiAgICAgICAgICAgICAgICAgIGpvYjonJyxcclxuICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6bm93UGFnZSxcclxuICAgICAgICAgICAgICAgICAgbWF4UGFnZTpwb3N0c1BlclBhZ2VcclxuICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICB9KVxyXG4gICAgICB9LFtdKTsgXHJcblxyXG5cclxuICAgICAvLyBjb25zdCBjdXJyZW50UG9zdHMgPSBlbXBsaXN0LnNsaWNlKGluZGV4T2ZGaXJzdFBvc3QsaW5kZXhPZkxhc3RQb3N0KTsgLy8wfjVcclxuICAgICAgLypcclxuICAgICAgMSDtjpjsnbTsp4AgPSAxKjUgPTUgXHJcbiAgICAgICAgICAgICAgICA1LTUgPTAgXHJcbiAgICAgICAgICAgICAgICAwfjUgXHJcbiAgICAgIDIg7Y6Y7J207KeAID0gMio1PTEwIFxyXG4gICAgICAgICAgICAgICAgMTAtNT01IFxyXG4gICAgICAgICAgICAgICAgNX4xMFxyXG4gICAgICAzIO2OmOydtOyngCA9IDMqNT0xNSBcclxuICAgICAgKi9cclxuICAgIFxyXG5cclxuICAgICAgY29uc3QgcGFnZW5hdGUgPXVzZUNhbGxiYWNrKChwYWdlTnVtYmVyLGdyb3VwUGFnZUFycmF5KT0+e1xyXG4gICAgICAgIHNldE5vd1BhZ2UocGFnZU51bWJlcik7IFxyXG4gICAgICAgIGFycmF5ID0gZ3JvdXBQYWdlQXJyYXkuc2xpY2UoKTsgXHJcbiAgICAgICAgYWxlcnQoYXJyYXkpOyBcclxuICAgICAgICBjb25zdCBpbmRleE9mTGFzdFBvc3QgPSBwYWdlTnVtYmVyICogcG9zdHNQZXJQYWdlOyAgIFxyXG4gICAgICAgIGNvbnN0IGluZGV4T2ZGaXJzdFBvc3QgPSBpbmRleE9mTGFzdFBvc3QgLSBwb3N0c1BlclBhZ2U7ICBcclxuXHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6RU1QX0xJU1RfUkVRVUVTVCwgXHJcbiAgICAgICAgICBkYXRhOntuYW1lOicnLFxyXG4gICAgICAgICAgICAgICAgam9iOicnLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6aW5kZXhPZkZpcnN0UG9zdCxcclxuICAgICAgICAgICAgICAgIG1heFBhZ2U6cG9zdHNQZXJQYWdlXHJcbiAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgfSxbbm93UGFnZV0pOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGUnIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVCb2R5Jz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7sgqzsm5DrsojtmLg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7IKs7JuQ66qFPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyngeyxhTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7rp6Tri4jsoLjrsojtmLg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7J6F7IKs7J28PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuq4ieyXrDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7snbjshLw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+67aA7ISc67KI7Zi4PC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtlbXBsaXN0ICYmIGVtcGxpc3QubWFwKCh2LGkpPT4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkVNUE5PfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5FTkFNRX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuSk9CfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5NR1J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkhJUkVEQVRFfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5TQUx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkNPTU19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkRFUFROT308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQYWdlbmF0aW9uIHBhZ2VuYXRlPXtwYWdlbmF0ZX0gZGF0YUxlbmd0aD17ZW1wbGlzdC5sZW5ndGh9IHBvc3RzUGVyUGFnZT17cG9zdHNQZXJQYWdlfSBub3dQYWdlPXtub3dQYWdlfSBncm91cFBhZ2U9e2dyb3VwUGFnZX0gZ3JvdXBQYWdlQXJyYXk9e2FycmF5fS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXA7Il0sInNvdXJjZVJvb3QiOiIifQ==