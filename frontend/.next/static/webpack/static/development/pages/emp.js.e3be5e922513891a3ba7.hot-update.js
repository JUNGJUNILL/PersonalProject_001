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


  var array = [1, 2, 3, 4, 5];
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
    console.log('groupPageArray=>>', groupPageArray);

    for (var i = 0; i < groupPageArray.length; i++) {
      array.push(groupPageArray[i]);
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
    groupPageArray: array,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }));
};

_s(Emp, "FI1Nqhr141eJFs0qdqhq5wkHueo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lbXAuanMiXSwibmFtZXMiOlsiRW1wIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJlbXAiLCJlbXBsaXN0IiwidXNlU3RhdGUiLCJub3dQYWdlIiwic2V0Tm93UGFnZSIsInBvc3RzUGVyUGFnZSIsImdyb3VwUGFnZSIsInNldEdyb3VwUGFnZSIsImFycmF5IiwiZ2V0RW1wbGlzdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidHlwZSIsIkVNUF9MSVNUX1JFUVVFU1QiLCJkYXRhIiwibmFtZSIsImpvYiIsImN1cnJlbnRQYWdlIiwibWF4UGFnZSIsInBhZ2VuYXRlIiwicGFnZU51bWJlciIsImdyb3VwUGFnZUFycmF5IiwiY29uc29sZSIsImxvZyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiaW5kZXhPZkxhc3RQb3N0IiwiaW5kZXhPZkZpcnN0UG9zdCIsIm1hcmdpblRvcCIsIm1hcCIsInYiLCJFTVBOTyIsIkVOQU1FIiwiSk9CIiwiTUdSIiwiSElSRURBVEUiLCJTQUwiLCJDT01NIiwiREVQVE5PIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFLO0FBQUE7O0FBR2IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFIYSxxQkFJUUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxHQUFWO0FBQUEsR0FBTixDQUpuQjtBQUFBLE1BSU5DLE9BSk0sZ0JBSU5BLE9BSk0sRUFLZ0I7QUFDQTs7O0FBTmhCLGtCQU9nQkMsc0RBQVEsQ0FBQyxDQUFELENBUHhCO0FBQUEsTUFPTkMsT0FQTTtBQUFBLE1BT0VDLFVBUEYsaUJBT21DOzs7QUFQbkMsbUJBUVVGLHNEQUFRLENBQUMsQ0FBRCxDQVJsQjtBQUFBLE1BUU5H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WGIsQ0FERixDQURELEVBMkJBLE1BQUMsaUVBQUQ7QUFBWSxZQUFRLEVBQUVwQixRQUF0QjtBQUFnQyxjQUFVLEVBQUVsQixPQUFPLENBQUN3QixNQUFwRDtBQUE0RCxnQkFBWSxFQUFFcEIsWUFBMUU7QUFBd0YsV0FBTyxFQUFFRixPQUFqRztBQUEwRyxhQUFTLEVBQUVHLFNBQXJIO0FBQWdJLGtCQUFjLEVBQUVFLEtBQWhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkEsQ0FESjtBQWdDSCxDQTlGRDs7R0FBTWIsRztVQUdlRSx1RCxFQUNJQyx1RDs7O0tBSm5CSCxHO0FBZ0dTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZW1wLmpzLmUzYmU1ZTkyMjUxMzg5MWEzYmE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQYWdlbmF0aW9uIGZyb20gJy4uL3V0aWxDb21wb25lbnQvUGFnZW5hdGlvbidcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgXHJcbiAgICB7RU1QX0xJU1RfUkVRVUVTVCx9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9lbXAnOyBcclxuXHJcblxyXG5jb25zdCBFbXAgPSAoKSA9PntcclxuXHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICAgIGNvbnN0IHtlbXBsaXN0fSAgICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmVtcCk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N0b3Jl7J2YIHN0YXRl66W8IOu2iOufrOyYpOuKlCBob29rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N0b3Jl7J2YIHN0YXRlIOykkeyXkOyEnCBjb3VudOydmCBzdGF0ZeulvCDrtojrn6zsmKjri6QuXHJcbiAgICBjb25zdCBbbm93UGFnZSxzZXROb3dQYWdlXSA9IHVzZVN0YXRlKDApOyAgICAgICAvL+2YhOyerCDtjpjsnbTsp4BcclxuICAgIGNvbnN0IFtwb3N0c1BlclBhZ2VdID0gdXNlU3RhdGUoMik7ICAgICAgICAgICAgIC8v7ZWcIO2OmOydtOyngOuLuSBsaXN0IOyImCBcclxuICAgIGNvbnN0IFtncm91cFBhZ2UgLCBzZXRHcm91cFBhZ2VdID0gdXNlU3RhdGUoNSk7IC8v7Y6Y7J207KeVIOq3uOujuSDri7kg7IiYICAxfjUgLCA2fjEwICwgMTF+MTVcclxuICAgIGNvbnN0IGFycmF5ID1bMSwyLDMsNCw1XTsgXHJcbiBcclxuICAgIGNvbnN0IGdldEVtcGxpc3QgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgICAgXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFTVBfTElTVF9SRVFVRVNULCBcclxuICAgICAgICAgICAgZGF0YTp7bmFtZTonJyxcclxuICAgICAgICAgICAgICAgICAgam9iOicnLFxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTpub3dQYWdlLFxyXG4gICAgICAgICAgICAgICAgICBtYXhQYWdlOnBvc3RzUGVyUGFnZVxyXG4gICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sW10pOyBcclxuXHJcblxyXG4gICAgIC8vIGNvbnN0IGN1cnJlbnRQb3N0cyA9IGVtcGxpc3Quc2xpY2UoaW5kZXhPZkZpcnN0UG9zdCxpbmRleE9mTGFzdFBvc3QpOyAvLzB+NVxyXG4gICAgICAvKlxyXG4gICAgICAxIO2OmOydtOyngCA9IDEqNSA9NSBcclxuICAgICAgICAgICAgICAgIDUtNSA9MCBcclxuICAgICAgICAgICAgICAgIDB+NSBcclxuICAgICAgMiDtjpjsnbTsp4AgPSAyKjU9MTAgXHJcbiAgICAgICAgICAgICAgICAxMC01PTUgXHJcbiAgICAgICAgICAgICAgICA1fjEwXHJcbiAgICAgIDMg7Y6Y7J207KeAID0gMyo1PTE1IFxyXG4gICAgICAqL1xyXG4gICAgXHJcblxyXG4gICAgICBjb25zdCBwYWdlbmF0ZSA9dXNlQ2FsbGJhY2soKHBhZ2VOdW1iZXIsIGdyb3VwUGFnZUFycmF5KT0+e1xyXG4gICAgICAgIHNldE5vd1BhZ2UocGFnZU51bWJlcik7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdncm91cFBhZ2VBcnJheT0+PicgLCBncm91cFBhZ2VBcnJheSk7IFxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPCBncm91cFBhZ2VBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICBhcnJheS5wdXNoKGdyb3VwUGFnZUFycmF5W2ldKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGluZGV4T2ZMYXN0UG9zdCA9IHBhZ2VOdW1iZXIgKiBwb3N0c1BlclBhZ2U7ICAgXHJcbiAgICAgICAgY29uc3QgaW5kZXhPZkZpcnN0UG9zdCA9IGluZGV4T2ZMYXN0UG9zdCAtIHBvc3RzUGVyUGFnZTsgIFxyXG5cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTpFTVBfTElTVF9SRVFVRVNULCBcclxuICAgICAgICAgIGRhdGE6e25hbWU6JycsXHJcbiAgICAgICAgICAgICAgICBqb2I6JycsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTppbmRleE9mRmlyc3RQb3N0LFxyXG4gICAgICAgICAgICAgICAgbWF4UGFnZTpwb3N0c1BlclBhZ2VcclxuICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB9LFtub3dQYWdlLGFycmF5XSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZScgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUJvZHknPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyCrOybkOuyiO2YuDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7sgqzsm5DrqoU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7KeB7LGFPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuunpOuLiOyguOuyiO2YuDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7snoXsgqzsnbw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+6riJ7JesPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyduOyEvDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7rtoDshJzrsojtmLg8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2VtcGxpc3QgJiYgZW1wbGlzdC5tYXAoKHYsaSk9PihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdycga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuRU1QTk99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkVOQU1FfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5KT0J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2Lk1HUn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuSElSRURBVEV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LlNBTH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuQ09NTX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuREVQVE5PfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBhZ2VuYXRpb24gcGFnZW5hdGU9e3BhZ2VuYXRlfSBkYXRhTGVuZ3RoPXtlbXBsaXN0Lmxlbmd0aH0gcG9zdHNQZXJQYWdlPXtwb3N0c1BlclBhZ2V9IG5vd1BhZ2U9e25vd1BhZ2V9IGdyb3VwUGFnZT17Z3JvdXBQYWdlfSBncm91cFBhZ2VBcnJheT17YXJyYXl9Lz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcDsiXSwic291cmNlUm9vdCI6IiJ9