webpackHotUpdate("static\\development\\pages\\emp.js",{

/***/ "./pages/emp.js":
/*!**********************!*\
  !*** ./pages/emp.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      array = _useState4[0],
      setArray = _useState4[1];

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
    console.log('groupPageArray=>>', groupPageArray);
    setArray(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(groupPageArray));
    var indexOfLastPost = pageNumber * postsPerPage;
    var indexOfFirstPost = indexOfLastPost - postsPerPage;
    console.log('aarraayy==>', array);
    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_5__["EMP_LIST_REQUEST"],
      data: {
        name: '',
        job: '',
        currentPage: indexOfFirstPost,
        maxPage: postsPerPage
      }
    });
  }, [nowPage, array]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "divTable",
    style: {
      marginTop: '3%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBA85"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 22
    }
  }, "\uC9C1\uCC45"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 22
    }
  }, "\uB9E4\uB2C8\uC838\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 22
    }
  }, "\uC785\uC0AC\uC77C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 22
    }
  }, "\uAE09\uC5EC"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 22
    }
  }, "\uC778\uC13C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 22
    }
  }, "\uBD80\uC11C\uBC88\uD638")), emplist && emplist.map(function (v, i) {
    return __jsx("div", {
      className: "divTableRow",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 22
      }
    }, v.EMPNO), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 22
      }
    }, v.ENAME), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 22
      }
    }, v.JOB), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 22
      }
    }, v.MGR), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 22
      }
    }, v.HIREDATE), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 22
      }
    }, v.SAL), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 22
      }
    }, v.COMM), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
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
      lineNumber: 99,
      columnNumber: 9
    }
  }));
};

_s(Emp, "ihrsLp+YJ1UaTmxjFeaZPgnPbtA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lbXAuanMiXSwibmFtZXMiOlsiRW1wIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJlbXAiLCJlbXBsaXN0IiwidXNlU3RhdGUiLCJub3dQYWdlIiwic2V0Tm93UGFnZSIsInBvc3RzUGVyUGFnZSIsImdyb3VwUGFnZSIsInNldEdyb3VwUGFnZSIsImFycmF5Iiwic2V0QXJyYXkiLCJnZXRFbXBsaXN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiRU1QX0xJU1RfUkVRVUVTVCIsImRhdGEiLCJuYW1lIiwiam9iIiwiY3VycmVudFBhZ2UiLCJtYXhQYWdlIiwicGFnZW5hdGUiLCJwYWdlTnVtYmVyIiwiZ3JvdXBQYWdlQXJyYXkiLCJjb25zb2xlIiwibG9nIiwiaW5kZXhPZkxhc3RQb3N0IiwiaW5kZXhPZkZpcnN0UG9zdCIsIm1hcmdpblRvcCIsIm1hcCIsInYiLCJpIiwiRU1QTk8iLCJFTkFNRSIsIkpPQiIsIk1HUiIsIkhJUkVEQVRFIiwiU0FMIiwiQ09NTSIsIkRFUFROTyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBSztBQUFBOztBQUdiLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBSGEscUJBSVFDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsR0FBVjtBQUFBLEdBQU4sQ0FKbkI7QUFBQSxNQUlOQyxPQUpNLGdCQUlOQSxPQUpNLEVBS2dCO0FBQ0E7OztBQU5oQixrQkFPZ0JDLHNEQUFRLENBQUMsQ0FBRCxDQVB4QjtBQUFBLE1BT05DLE9BUE07QUFBQSxNQU9FQyxVQVBGLGlCQU9tQzs7O0FBUG5DLG1CQVFVRixzREFBUSxDQUFDLENBQUQsQ0FSbEI7QUFB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bkIsT0FBTyxDQUFDc0MsTUFBcEQ7QUFBNEQsZ0JBQVksRUFBRWxDLFlBQTFFO0FBQXdGLFdBQU8sRUFBRUYsT0FBakc7QUFBMEcsYUFBUyxFQUFFRyxTQUFySDtBQUFnSSxrQkFBYyxFQUFFRSxLQUFoSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JBLENBREo7QUFnQ0gsQ0E3RkQ7O0dBQU1iLEc7VUFHZUUsdUQsRUFDSUMsdUQ7OztLQUpuQkgsRztBQStGU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVtcC5qcy41ZjViMWExN2ZlYWQ0ZTdjY2Q3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGFnZW5hdGlvbiBmcm9tICcuLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24nXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFxyXG4gICAge0VNUF9MSVNUX1JFUVVFU1QsfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvZW1wJzsgXHJcblxyXG5cclxuY29uc3QgRW1wID0gKCkgPT57XHJcblxyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTsgXHJcbiAgICBjb25zdCB7ZW1wbGlzdH0gICAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5lbXApOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9yZeydmCBzdGF0ZeulvCDrtojrn6zsmKTripQgaG9vayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9yZeydmCBzdGF0ZSDspJHsl5DshJwgY291bnTsnZggc3RhdGXrpbwg67aI65+s7Jio64ukLlxyXG4gICAgY29uc3QgW25vd1BhZ2Usc2V0Tm93UGFnZV0gPSB1c2VTdGF0ZSgwKTsgICAgICAgLy/tmITsnqwg7Y6Y7J207KeAXHJcbiAgICBjb25zdCBbcG9zdHNQZXJQYWdlXSA9IHVzZVN0YXRlKDIpOyAgICAgICAgICAgICAvL+2VnCDtjpjsnbTsp4Dri7kgbGlzdCDsiJggXHJcbiAgICBjb25zdCBbZ3JvdXBQYWdlICwgc2V0R3JvdXBQYWdlXSA9IHVzZVN0YXRlKDUpOyAvL+2OmOydtOynlSDqt7jro7kg64u5IOyImCAgMX41ICwgNn4xMCAsIDExfjE1XHJcbiAgICBjb25zdCBbYXJyYXksc2V0QXJyYXldID11c2VTdGF0ZShbXSk7IFxyXG5cclxuICAgIGNvbnN0IGdldEVtcGxpc3QgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgICAgXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFTVBfTElTVF9SRVFVRVNULCBcclxuICAgICAgICAgICAgZGF0YTp7bmFtZTonJyxcclxuICAgICAgICAgICAgICAgICAgam9iOicnLFxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTpub3dQYWdlLFxyXG4gICAgICAgICAgICAgICAgICBtYXhQYWdlOnBvc3RzUGVyUGFnZVxyXG4gICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sW10pOyBcclxuXHJcblxyXG4gICAgIC8vIGNvbnN0IGN1cnJlbnRQb3N0cyA9IGVtcGxpc3Quc2xpY2UoaW5kZXhPZkZpcnN0UG9zdCxpbmRleE9mTGFzdFBvc3QpOyAvLzB+NVxyXG4gICAgICAvKlxyXG4gICAgICAxIO2OmOydtOyngCA9IDEqNSA9NSBcclxuICAgICAgICAgICAgICAgIDUtNSA9MCBcclxuICAgICAgICAgICAgICAgIDB+NSBcclxuICAgICAgMiDtjpjsnbTsp4AgPSAyKjU9MTAgXHJcbiAgICAgICAgICAgICAgICAxMC01PTUgXHJcbiAgICAgICAgICAgICAgICA1fjEwXHJcbiAgICAgIDMg7Y6Y7J207KeAID0gMyo1PTE1IFxyXG4gICAgICAqL1xyXG4gICAgXHJcblxyXG4gICAgICBjb25zdCBwYWdlbmF0ZSA9dXNlQ2FsbGJhY2soKHBhZ2VOdW1iZXIsIGdyb3VwUGFnZUFycmF5KT0+e1xyXG4gICAgICAgIHNldE5vd1BhZ2UocGFnZU51bWJlcik7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdncm91cFBhZ2VBcnJheT0+PicgLCBncm91cFBhZ2VBcnJheSk7IFxyXG4gICAgICAgIHNldEFycmF5KFsuLi5ncm91cFBhZ2VBcnJheV0pXHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4T2ZMYXN0UG9zdCA9IHBhZ2VOdW1iZXIgKiBwb3N0c1BlclBhZ2U7ICAgXHJcbiAgICAgICAgY29uc3QgaW5kZXhPZkZpcnN0UG9zdCA9IGluZGV4T2ZMYXN0UG9zdCAtIHBvc3RzUGVyUGFnZTsgIFxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnYWFycmFheXk9PT4nICwgYXJyYXkpOyBcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOkVNUF9MSVNUX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7bmFtZTonJyxcclxuICAgICAgICAgICAgICAgIGpvYjonJyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOmluZGV4T2ZGaXJzdFBvc3QsXHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlOnBvc3RzUGVyUGFnZVxyXG4gICAgICAgICAgICAgICB9LCBcclxuICAgICAgfSlcclxuXHJcbiAgICAgIH0sW25vd1BhZ2UsYXJyYXldKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJyBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQm9keSc+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7IKs7JuQ67KI7Zi4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyCrOybkOuqhTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7sp4HssYU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+66ek64uI7KC467KI7Zi4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyeheyCrOydvDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7quInsl6w8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7J247IS8PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuu2gOyEnOuyiO2YuDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZW1wbGlzdCAmJiBlbXBsaXN0Lm1hcCgodixpKT0+KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93JyBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5FTVBOT308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuRU5BTUV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkpPQn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuTUdSfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5ISVJFREFURX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuU0FMfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5DT01NfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5ERVBUTk99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UGFnZW5hdGlvbiBwYWdlbmF0ZT17cGFnZW5hdGV9IGRhdGFMZW5ndGg9e2VtcGxpc3QubGVuZ3RofSBwb3N0c1BlclBhZ2U9e3Bvc3RzUGVyUGFnZX0gbm93UGFnZT17bm93UGFnZX0gZ3JvdXBQYWdlPXtncm91cFBhZ2V9IGdyb3VwUGFnZUFycmF5PXthcnJheX0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wOyJdLCJzb3VyY2VSb290IjoiIn0=