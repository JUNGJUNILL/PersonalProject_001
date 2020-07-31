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

  var pagenate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (pageNumber, groupPageArray, flag) {
    setNowPage(pageNumber);
    console.log('groupPageArray', groupPageArray, 'groupPageArray[0]', groupPageArray[0]);

    if (flag === 'plus') {
      console.log('flag', flag);
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
      lineNumber: 80,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 22
    }
  }, "\uC0AC\uC6D0\uBA85"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 22
    }
  }, "\uC9C1\uCC45"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 22
    }
  }, "\uB9E4\uB2C8\uC838\uBC88\uD638"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 22
    }
  }, "\uC785\uC0AC\uC77C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 22
    }
  }, "\uAE09\uC5EC"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 22
    }
  }, "\uC778\uC13C"), __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 22
    }
  }, "\uBD80\uC11C\uBC88\uD638")), emplist && emplist.map(function (v, i) {
    return __jsx("div", {
      className: "divTableRow",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 22
      }
    }, v.EMPNO), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 22
      }
    }, v.ENAME), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 22
      }
    }, v.JOB), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 22
      }
    }, v.MGR), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 22
      }
    }, v.HIREDATE), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 22
      }
    }, v.SAL), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 22
      }
    }, v.COMM), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
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
      lineNumber: 106,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lbXAuanMiXSwibmFtZXMiOlsiRW1wIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJlbXAiLCJlbXBsaXN0IiwidXNlU3RhdGUiLCJub3dQYWdlIiwic2V0Tm93UGFnZSIsInBvc3RzUGVyUGFnZSIsImdyb3VwUGFnZSIsInNldEdyb3VwUGFnZSIsIm5vd0dyb3VwUGFnZUFycmF5Iiwic2V0Tm93R3JvdXBQYWdlQXJyYXkiLCJnZXRFbXBsaXN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiRU1QX0xJU1RfUkVRVUVTVCIsImRhdGEiLCJuYW1lIiwiam9iIiwiY3VycmVudFBhZ2UiLCJtYXhQYWdlIiwicGFnZW5hdGUiLCJwYWdlTnVtYmVyIiwiZ3JvdXBQYWdlQXJyYXkiLCJmbGFnIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImNvbmNhdCIsImluZGV4T2ZMYXN0UG9zdCIsImluZGV4T2ZGaXJzdFBvc3QiLCJtYXJnaW5Ub3AiLCJtYXAiLCJ2IiwiaSIsIkVNUE5PIiwiRU5BTUUiLCJKT0IiLCJNR1IiLCJISVJFREFURSIsIlNBTCIsIkNPTU0iLCJERVBUTk8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQUs7QUFBQTs7QUFHYixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUhhLHFCQUlRQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLEdBQVY7QUFBQSxHQUFOLENBSm5CO0FBQUEsTUFJTkMsT0FKTSxnQkFJTkEsT0FKTSxFQUtnQjtBQUNBOzs7QUFOaEIsa0JBT2dCQyxzREFBUSxDQUFDLENBQUQsQ0FQeEI7QUFBQSxNQU9OQyxPQVBNO0FBQUEsTUFPRUMsVUFQRixpQkFPbUM7OztB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K0JQLENBQUMsQ0FBQ1EsSUFBakMsQ0FQTCxFQVFLO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQlIsQ0FBQyxDQUFDUyxNQUFqQyxDQVJMLENBRG9CO0FBQUEsR0FBWixDQVhiLENBREYsQ0FERCxFQTJCQSxNQUFDLGlFQUFEO0FBQVksWUFBUSxFQUFFckIsUUFBdEI7QUFBZ0MsY0FBVSxFQUFFbkIsT0FBTyxDQUFDeUIsTUFBcEQ7QUFBNEQsZ0JBQVksRUFBRXJCLFlBQTFFO0FBQXdGLFdBQU8sRUFBRUYsT0FBakc7QUFBMEcsYUFBUyxFQUFFRyxTQUFySDtBQUFnSSxrQkFBYyxFQUFFRSxpQkFBaEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCQSxDQURKO0FBZ0NILENBcEdEOztHQUFNYixHO1VBR2VFLHVELEVBQ0lDLHVEOzs7S0FKbkJILEc7QUFzR1NBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxlbXAuanMuMzM4Y2E4NTYxNzVkOTNjNjQ3ODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBhZ2VuYXRpb24gZnJvbSAnLi4vdXRpbENvbXBvbmVudC9QYWdlbmF0aW9uJ1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBcclxuICAgIHtFTVBfTElTVF9SRVFVRVNULH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2VtcCc7IFxyXG5cclxuXHJcbmNvbnN0IEVtcCA9ICgpID0+e1xyXG5cclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gICAgY29uc3Qge2VtcGxpc3R9ICAgID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZW1wKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcmXsnZggc3RhdGXrpbwg67aI65+s7Jik64qUIGhvb2sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcmXsnZggc3RhdGUg7KSR7JeQ7IScIGNvdW507J2YIHN0YXRl66W8IOu2iOufrOyYqOuLpC5cclxuICAgIGNvbnN0IFtub3dQYWdlLHNldE5vd1BhZ2VdID0gdXNlU3RhdGUoMCk7ICAgICAgIC8v7ZiE7J6sIO2OmOydtOyngFxyXG4gICAgY29uc3QgW3Bvc3RzUGVyUGFnZV0gPSB1c2VTdGF0ZSgyKTsgICAgICAgICAgICAgLy/tlZwg7Y6Y7J207KeA64u5IGxpc3Qg7IiYIFxyXG4gICAgY29uc3QgW2dyb3VwUGFnZSAsIHNldEdyb3VwUGFnZV0gPSB1c2VTdGF0ZSg1KTsgLy/tjpjsnbTsp5Ug6re466O5IOuLuSDsiJggIDF+NSAsIDZ+MTAgLCAxMX4xNVxyXG4gICAgY29uc3QgW25vd0dyb3VwUGFnZUFycmF5LHNldE5vd0dyb3VwUGFnZUFycmF5XSA9dXNlU3RhdGUoW10pOyAgXHJcblxyXG4gICAgY29uc3QgZ2V0RW1wbGlzdCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgICBcclxuICAgIH0sW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVNUF9MSVNUX1JFUVVFU1QsIFxyXG4gICAgICAgICAgICBkYXRhOntuYW1lOicnLFxyXG4gICAgICAgICAgICAgICAgICBqb2I6JycsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOm5vd1BhZ2UsXHJcbiAgICAgICAgICAgICAgICAgIG1heFBhZ2U6cG9zdHNQZXJQYWdlXHJcbiAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxbXSk7IFxyXG5cclxuXHJcbiAgICAgLy8gY29uc3QgY3VycmVudFBvc3RzID0gZW1wbGlzdC5zbGljZShpbmRleE9mRmlyc3RQb3N0LGluZGV4T2ZMYXN0UG9zdCk7IC8vMH41XHJcbiAgICAgIC8qXHJcbiAgICAgIDEg7Y6Y7J207KeAID0gMSo1ID01IFxyXG4gICAgICAgICAgICAgICAgNS01ID0wIFxyXG4gICAgICAgICAgICAgICAgMH41IFxyXG4gICAgICAyIO2OmOydtOyngCA9IDIqNT0xMCBcclxuICAgICAgICAgICAgICAgIDEwLTU9NSBcclxuICAgICAgICAgICAgICAgIDV+MTBcclxuICAgICAgMyDtjpjsnbTsp4AgPSAzKjU9MTUgXHJcbiAgICAgICovXHJcbiAgICBcclxuXHJcbiAgICAgIGNvbnN0IHBhZ2VuYXRlID11c2VDYWxsYmFjaygocGFnZU51bWJlciwgZ3JvdXBQYWdlQXJyYXksZmxhZyk9PntcclxuICAgICAgICBzZXROb3dQYWdlKHBhZ2VOdW1iZXIpOyBcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dyb3VwUGFnZUFycmF5JywgZ3JvdXBQYWdlQXJyYXksJ2dyb3VwUGFnZUFycmF5WzBdJywgZ3JvdXBQYWdlQXJyYXlbMF0pOyBcclxuXHJcbiAgICAgICAgaWYoZmxhZz09PSdwbHVzJyl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZmxhZycgLCBmbGFnKTsgXHJcbiAgICAgICAgICBub3dHcm91cFBhZ2VBcnJheS5sZW5ndGg9MDsgXHJcbiAgICAgICAgICBzZXROb3dHcm91cFBhZ2VBcnJheShub3dHcm91cFBhZ2VBcnJheS5jb25jYXQoZ3JvdXBQYWdlQXJyYXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgaW5kZXhPZkxhc3RQb3N0ID0gcGFnZU51bWJlciAqIHBvc3RzUGVyUGFnZTsgICBcclxuICAgICAgICBjb25zdCBpbmRleE9mRmlyc3RQb3N0ID0gaW5kZXhPZkxhc3RQb3N0IC0gcG9zdHNQZXJQYWdlOyAgXHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6RU1QX0xJU1RfUkVRVUVTVCwgXHJcbiAgICAgICAgICBkYXRhOntuYW1lOicnLFxyXG4gICAgICAgICAgICAgICAgam9iOicnLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6aW5kZXhPZkZpcnN0UG9zdCxcclxuICAgICAgICAgICAgICAgIG1heFBhZ2U6cG9zdHNQZXJQYWdlXHJcbiAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgICB9LFtub3dQYWdlLG5vd0dyb3VwUGFnZUFycmF5XSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZScgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUJvZHknPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyCrOybkOuyiO2YuDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7sgqzsm5DrqoU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+7KeB7LGFPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuunpOuLiOyguOuyiO2YuDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7snoXsgqzsnbw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+6riJ7JesPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPuyduOyEvDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz7rtoDshJzrsojtmLg8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2VtcGxpc3QgJiYgZW1wbGlzdC5tYXAoKHYsaSk9PihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdycga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuRU1QTk99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LkVOQU1FfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz57di5KT0J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2Lk1HUn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuSElSRURBVEV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPnt2LlNBTH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuQ09NTX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+e3YuREVQVE5PfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBhZ2VuYXRpb24gcGFnZW5hdGU9e3BhZ2VuYXRlfSBkYXRhTGVuZ3RoPXtlbXBsaXN0Lmxlbmd0aH0gcG9zdHNQZXJQYWdlPXtwb3N0c1BlclBhZ2V9IG5vd1BhZ2U9e25vd1BhZ2V9IGdyb3VwUGFnZT17Z3JvdXBQYWdlfSBncm91cFBhZ2VBcnJheT17bm93R3JvdXBQYWdlQXJyYXl9Lz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcDsiXSwic291cmNlUm9vdCI6IiJ9