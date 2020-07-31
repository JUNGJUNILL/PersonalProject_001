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
    console.log('groupPageArray', groupPageArray, 'groupPageArray[0]', groupPageArray[0]);

    if (groupPageArray[0] + 1 === nowPage) {
      console.log(groupPageArray[0] + 1, ':', nowPage);
      nowGroupPageArray.length = 0;
      var aaa = groupPageArray.map(function (v) {
        return v - 5;
      });
      setNowGroupPageArray(nowGroupPageArray.concat(aaa));
    } else {
      console.log("???");
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
      lineNumber: 85,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBA85"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 22
    }
  }, "\uC9C1\uCC45"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 22
    }
  }, "\uB9E4\uB2C8\uC838\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 22
    }
  }, "\uC785\uC0AC\uC77C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 22
    }
  }, "\uAE09\uC5EC"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 22
    }
  }, "\uC778\uC13C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 22
    }
  }, "\uBD80\uC11C\uBC88\uD638")), emplist && emplist.map(function (v, i) {
    return __jsx("div", {
      className: "divTableRow",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 22
      }
    }, v.EMPNO), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 22
      }
    }, v.ENAME), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 22
      }
    }, v.JOB), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 22
      }
    }, v.MGR), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 22
      }
    }, v.HIREDATE), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 22
      }
    }, v.SAL), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 22
      }
    }, v.COMM), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
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
      lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lbXAuanMiXSwibmFtZXMiOlsiRW1wIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJlbXAiLCJlbXBsaXN0IiwidXNlU3RhdGUiLCJub3dQYWdlIiwic2V0Tm93UGFnZSIsInBvc3RzUGVyUGFnZSIsImdyb3VwUGFnZSIsInNldEdyb3VwUGFnZSIsIm5vd0dyb3VwUGFnZUFycmF5Iiwic2V0Tm93R3JvdXBQYWdlQXJyYXkiLCJnZXRFbXBsaXN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiRU1QX0xJU1RfUkVRVUVTVCIsImRhdGEiLCJuYW1lIiwiam9iIiwiY3VycmVudFBhZ2UiLCJtYXhQYWdlIiwicGFnZW5hdGUiLCJwYWdlTnVtYmVyIiwiZ3JvdXBQYWdlQXJyYXkiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiYWFhIiwibWFwIiwidiIsImNvbmNhdCIsImluZGV4T2ZMYXN0UG9zdCIsImluZGV4T2ZGaXJzdFBvc3QiLCJtYXJnaW5Ub3AiLCJpIiwiRU1QTk8iLCJFTkFNRSIsIkpPQiIsIk1HUiIsIkhJUkVEQVRFIiwiU0FMIiwiQ09NTSIsIkRFUFROTyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBSztBQUFBOztBQUdiLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBSGEscUJBSVFDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsR0FBVjtBQUFBLEdBQU4sQ0FKbkI7QUFBQSxNQUlOQyxPQUpNLGdCQUlOQSxPQUpNLEVBS2dCO0FBQ0E7OztBQU5oQixrQkFPZ0JDLHNEQUFRLENBQUMsQ0FBRCxDQVB4QjtBQUFBLE1BT05DLE9BUE07QUFBQSxNQU9FQyxVQVBGLGlCQU9tQzs7O0FBUG5DLG1CQVFVRixzREFBUSxDQUFDLENBQUQsQ0FSbEI7QUFBQSxNQVFORyxZQVJNLGtCQVFtQzs7O0FBUm5DLG1CQVNzQkgsc0RBQVEsQ0FBQyxDQUFELENBVDlCO0FBQUEsTUFTTkksU0FUTTtBQUFBLE1BU01DLFlBVE4sa0JBU21DOzs7QUFUbkMsbUJBVW1DTCxzREFBUSxDQUFDLEVBQUQsQ0FWM0M7QUFBQSxNQVVOTSxpQkFWTTtBQUFBLE1BVVlDLG9CQVZaOztBQVliLE1BQU1DLFVBQVUsR0FBR0MseURBQVcsQ0FBQyxZQUFJLENBRWxDLENBRjZCLEVBRTVCLEVBRjRCLENBQTlCO0FBSUFDLHlEQUFTLENBQUMsWUFBSTtBQUNWaEIsWUFBUSxDQUFDO0FBQ0xpQixVQUFJLEVBQUNDLDhEQURBO0FBRUxDLFVBQUksRUFBQztBQUFDQyxZQUFJLEVBQUMsRUFBTjtBQUNDQyxXQUFHLEVBQUMsRUFETDtBQUVDQyxtQkFBVyxFQUFDZixPQUZiO0FBR0NnQixlQUFPLEVBQUNkO0FBSFQ7QUFGQSxLQUFELENBQVI7QUFRRCxHQVRNLEVBU0wsRUFUSyxDQUFULENBaEJhLENBNEJaOztBQUNDOzs7Ozs7Ozs7O0FBV0EsTUFBTWUsUUFBUSxHQUFFVCx5REFBVyxDQUFDLFVBQUNVLFVBQUQsRUFBYUMsY0FBYixFQUE4QjtBQUN4RGxCLGNBQVUsQ0FBQ2lCLFVBQUQsQ0FBVjtBQUVBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkYsY0FBOUIsRUFBNkMsbUJBQTdDLEVBQWtFQSxjQUFjLENBQUMsQ0FBRCxDQUFoRjs7QUFFRSxRQUFHQSxjQUFjLENBQUMsQ0FBRCxDQUFkLEdBQWtCLENBQWxCLEtBQXdCbkIsT0FBM0IsRUFBbUM7QUFDakNvQixhQUFPLENBQUNDLEdBQVIsQ0FBWUYsY0FBYyxDQUFDLENBQUQsQ0FBZCxHQUFrQixDQUE5QixFQUFnQyxHQUFoQyxFQUFvQ25CLE9BQXBDO0FBQ0FLLHVCQUFpQixDQUFDaUIsTUFBbEIsR0FBeUIsQ0FBekI7QUFDRCxVQUFNQyxHQUFHLEdBQUlKLGNBQWMsQ0FBQ0ssR0FBZixDQUFtQixVQUFBQyxDQUFDLEVBQUU7QUFBRSxlQUFPQSxDQUFDLEdBQUMsQ0FBVDtBQUFXLE9BQW5DLENBQWI7QUFDQ25CLDBCQUFvQixDQUFDRCxpQkFBaUIsQ0FBQ3FCLE1BQWxCLENBQXlCSCxHQUF6QixDQUFELENBQXBCO0FBQ0QsS0FMRCxNQUtLO0FBQ0hILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDQWhCLHVCQUFpQixDQUFDaUIsTUFBbEIsR0FBeUIsQ0FBekI7QUFDQWhCLDBCQUFvQixDQUFDRCxpQkFBaUIsQ0FBQ3FCLE1BQWxCLENBQXlCUCxjQUF6QixDQUFELENBQXBCO0FBQ0Q7O0FBR0gsUUFBTVEsZUFBZSxHQUFHVCxVQUFVLEdBQUdoQixZQUFyQztBQUNBLFFBQU0wQixnQkFBZ0IsR0FBR0QsZUFBZSxHQUFHekIsWUFBM0M7QUFFQVQsWUFBUSxDQUFDO0FBQ1BpQixVQUFJLEVBQUNDLDhEQURFO0FBRVBDLFVBQUksRUFBQztBQUFDQyxZQUFJLEVBQUMsRUFBTjtBQUNDQyxXQUFHLEVBQUMsRUFETDtBQUVDQyxtQkFBVyxFQUFDYSxnQkFGYjtBQUdDWixlQUFPLEVBQUNkO0FBSFQ7QUFGRSxLQUFELENBQVI7QUFVRCxHQTlCMEIsRUE4QnpCLENBQUNGLE9BQUQsRUFBU0ssaUJBQVQsQ0E5QnlCLENBQTNCO0FBaUNGLFNBQ0ksbUVBQ0M7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixTQUFLLEVBQUU7QUFBQ3dCLGVBQVMsRUFBQztBQUFYLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDVTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRFYsRUFFVTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRlYsRUFHVTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSFYsRUFJVTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBSlYsRUFLVTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTFYsRUFNVTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTlYsRUFPVTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUFYsRUFRVTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBUlYsQ0FEQSxFQVdFL0IsT0FBTyxJQUFJQSxPQUFPLENBQUMwQixHQUFSLENBQVksVUFBQ0MsQ0FBRCxFQUFHSyxDQUFIO0FBQUEsV0FDcEI7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUE2QixTQUFHLEVBQUVBLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSztBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0JMLENBQUMsQ0FBQ00sS0FBakMsQ0FETCxFQUVLO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQk4sQ0FBQyxDQUFDTyxLQUFqQyxDQUZMLEVBR0s7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCUCxDQUFDLENBQUNRLEdBQWpDLENBSEwsRUFJSztBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0JSLENBQUMsQ0FBQ1MsR0FBakMsQ0FKTCxFQUtLO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQlQsQ0FBQyxDQUFDVSxRQUFqQyxDQUxMLEVBTUs7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCVixDQUFDLENBQUNXLEdBQWpDLENBTkwsRUFPSztBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0JYLENBQUMsQ0FBQ1ksSUFBakMsQ0FQTCxFQVFLO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQlosQ0FBQyxDQUFDYSxNQUFqQyxDQVJMLENBRG9CO0FBQUEsR0FBWixDQVhiLENBREYsQ0FERCxFQTJCQSxNQUFDLGlFQUFEO0FBQVksWUFBUSxFQUFFckIsUUFBdEI7QUFBZ0MsY0FBVSxFQUFFbkIsT0FBTyxDQUFDd0IsTUFBcEQ7QUFBNEQsZ0JBQVksRUFBRXBCLFlBQTFFO0FBQXdGLFdBQU8sRUFBRUYsT0FBakc7QUFBMEcsYUFBUyxFQUFFRyxTQUFySDtBQUFnSSxrQkFBYyxFQUFFRSxpQkFBaEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCQSxDQURKO0FBZ0NILENBekdEOztHQUFNYixHO1VBR2VFLHVELEVBQ0lDLHVEOzs7S0FKbkJILEc7QUEyR1NBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxlbXAuanMuMmI2N2ZkYzczMDIxMDE5NzcxMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBhZ2VuYXRpb24gZnJvbSAnLi4vdXRpbENvbXBvbmVudC9QYWdlbmF0aW9uJ1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBcclxuICAgIHtFTVBfTElTVF9SRVFVRVNULH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2VtcCc7IFxyXG5cclxuXHJcbmNvbnN0IEVtcCA9ICgpID0+e1xyXG5cclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gICAgY29uc3Qge2VtcGxpc3R9ICAgID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZW1wKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcmXsnZggc3RhdGXrpbwg67aI65+s7Jik64qUIGhvb2sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcmXsnZggc3RhdGUg7KSR7JeQ7IScIGNvdW507J2YIHN0YXRl66W8IOu2iOufrOyYqOuLpC5cclxuICAgIGNvbnN0IFtub3dQYWdlLHNldE5vd1BhZ2VdID0gdXNlU3RhdGUoMCk7ICAgICAgIC8v7ZiE7J6sIO2OmOydtOyngFxyXG4gICAgY29uc3QgW3Bvc3RzUGVyUGFnZV0gPSB1c2VTdGF0ZSgyKTsgICAgICAgICAgICAgLy/tlZwg7Y6Y7J207KeA64u5IGxpc3Qg7IiYIFxyXG4gICAgY29uc3QgW2dyb3VwUGFnZSAsIHNldEdyb3VwUGFnZV0gPSB1c2VTdGF0ZSg1KTsgLy/tjpjsnbTsp5Ug6re466O5IOuLuSDsiJggIDF+NSAsIDZ+MTAgLCAxMX4xNVxyXG4gICAgY29uc3QgW25vd0dyb3VwUGFnZUFycmF5LHNldE5vd0dyb3VwUGFnZUFycmF5XSA9dXNlU3RhdGUoW10pOyAgXHJcblxyXG4gICAgY29uc3QgZ2V0RW1wbGlzdCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgICBcclxuICAgIH0sW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVNUF9MSVNUX1JFUVVFU1QsIFxyXG4gICAgICAgICAgICBkYXRhOntuYW1lOicnLFxyXG4gICAgICAgICAgICAgICAgICBqb2I6JycsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOm5vd1BhZ2UsXHJcbiAgICAgICAgICAgICAgICAgIG1heFBhZ2U6cG9zdHNQZXJQYWdlXHJcbiAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxbXSk7IFxyXG5cclxuXHJcbiAgICAgLy8gY29uc3QgY3VycmVudFBvc3RzID0gZW1wbGlzdC5zbGljZShpbmRleE9mRmlyc3RQb3N0LGluZGV4T2ZMYXN0UG9zdCk7IC8vMH41XHJcbiAgICAgIC8qXHJcbiAgICAgIDEg7Y6Y7J207KeAID0gMSo1ID01IFxyXG4gICAgICAgICAgICAgICAgNS01ID0wIFxyXG4gICAgICAgICAgICAgICAgMH41IFxyXG4gICAgICAyIO2OmOydtOyngCA9IDIqNT0xMCBcclxuICAgICAgICAgICAgICAgIDEwLTU9NSBcclxuICAgICAgICAgICAgICAgIDV+MTBcclxuICAgICAgMyDtjpjsnbTsp4AgPSAzKjU9MTUgXHJcbiAgICAgICovXHJcbiAgICBcclxuXHJcbiAgICAgIGNvbnN0IHBhZ2VuYXRlID11c2VDYWxsYmFjaygocGFnZU51bWJlciwgZ3JvdXBQYWdlQXJyYXkpPT57XHJcbiAgICAgICAgc2V0Tm93UGFnZShwYWdlTnVtYmVyKTsgXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdncm91cFBhZ2VBcnJheScsIGdyb3VwUGFnZUFycmF5LCdncm91cFBhZ2VBcnJheVswXScsIGdyb3VwUGFnZUFycmF5WzBdKTsgXHJcblxyXG4gICAgICAgICAgaWYoZ3JvdXBQYWdlQXJyYXlbMF0rMSA9PT0gbm93UGFnZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGdyb3VwUGFnZUFycmF5WzBdKzEsJzonLG5vd1BhZ2UpOyBcclxuICAgICAgICAgICAgbm93R3JvdXBQYWdlQXJyYXkubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgIGNvbnN0IGFhYSA9ICBncm91cFBhZ2VBcnJheS5tYXAodj0+eyByZXR1cm4gdi01fSlcclxuICAgICAgICAgICAgc2V0Tm93R3JvdXBQYWdlQXJyYXkobm93R3JvdXBQYWdlQXJyYXkuY29uY2F0KGFhYSkpO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPz8/XCIpOyBcclxuICAgICAgICAgICAgbm93R3JvdXBQYWdlQXJyYXkubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgICBzZXROb3dHcm91cFBhZ2VBcnJheShub3dHcm91cFBhZ2VBcnJheS5jb25jYXQoZ3JvdXBQYWdlQXJyYXkpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gIFxyXG4gICAgICAgIGNvbnN0IGluZGV4T2ZMYXN0UG9zdCA9IHBhZ2VOdW1iZXIgKiBwb3N0c1BlclBhZ2U7ICAgXHJcbiAgICAgICAgY29uc3QgaW5kZXhPZkZpcnN0UG9zdCA9IGluZGV4T2ZMYXN0UG9zdCAtIHBvc3RzUGVyUGFnZTsgIFxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOkVNUF9MSVNUX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7bmFtZTonJyxcclxuICAgICAgICAgICAgICAgIGpvYjonJyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOmluZGV4T2ZGaXJzdFBvc3QsXHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlOnBvc3RzUGVyUGFnZVxyXG4gICAgICAgICAgICAgICB9LCBcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgfSxbbm93UGFnZSxub3dHcm91cFBhZ2VBcnJheV0pOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGUnIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVCb2R5Jz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7sgqzsm5DrsojtmLg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7IKs7JuQ66qFPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyngeyxhTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7rp6Tri4jsoLjrsojtmLg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7J6F7IKs7J28PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuq4ieyXrDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7snbjshLw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+67aA7ISc67KI7Zi4PC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtlbXBsaXN0ICYmIGVtcGxpc3QubWFwKCh2LGkpPT4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkVNUE5PfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5FTkFNRX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuSk9CfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5NR1J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkhJUkVEQVRFfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5TQUx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkNPTU19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkRFUFROT308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQYWdlbmF0aW9uIHBhZ2VuYXRlPXtwYWdlbmF0ZX0gZGF0YUxlbmd0aD17ZW1wbGlzdC5sZW5ndGh9IHBvc3RzUGVyUGFnZT17cG9zdHNQZXJQYWdlfSBub3dQYWdlPXtub3dQYWdlfSBncm91cFBhZ2U9e2dyb3VwUGFnZX0gZ3JvdXBQYWdlQXJyYXk9e25vd0dyb3VwUGFnZUFycmF5fS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXA7Il0sInNvdXJjZVJvb3QiOiIifQ==