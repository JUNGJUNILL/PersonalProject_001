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
var _this = undefined,
    _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\mainPosts_1001.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var MainPosts_1001 = function MainPosts_1001() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('dispatch 후에 데이터 가져오는 로직');
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
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "divTableBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 22
    }
  }, "\uC774\uBBF8\uC9C0"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 22
    }
  }, "\uC81C\uBAA9"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 22
    }
  }, "\uC791\uC131\uC790"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 22
    }
  }, "\uB4F1\uB85D\uC77C"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 22
    }
  }, "\uC870\uD68C"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 22
    }
  }, "\uCD94\uCC9C"), __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 22
    }
  }, "\uBC18\uB300")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 12
    }
  }), dummyList.map(function (v, i) {
    return __jsx("div", {
      className: "divTableRow",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
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
        lineNumber: 48,
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
        lineNumber: 48,
        columnNumber: 84
      }
    })), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
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
        lineNumber: 49,
        columnNumber: 48
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 151
      }
    }, v))), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, '운영자'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, '20200818 : 14:30'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, '125'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, '10'), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
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
      lineNumber: 59,
      columnNumber: 9
    }
  }));
};

_s(MainPosts_1001, "n27IaKpM86AGbfSraW5zH+QweNQ=");

_c = MainPosts_1001;
/* harmony default export */ __webpack_exports__["default"] = (MainPosts_1001);

var _c;

$RefreshReg$(_c, "MainPosts_1001");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluUG9zdHNfMTAwMS5qcyJdLCJuYW1lcyI6WyJNYWluUG9zdHNfMTAwMSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsIm5vd1BhZ2UiLCJzZXROb3dQYWdlIiwicG9zdHNQZXJQYWdlIiwiZ3JvdXBQYWdlIiwic2V0R3JvdXBQYWdlIiwibm93R3JvdXBQYWdlQXJyYXkiLCJzZXROb3dHcm91cFBhZ2VBcnJheSIsInBhZ2VuYXRlIiwidXNlQ2FsbGJhY2siLCJwYWdlTnVtYmVyIiwiZ3JvdXBQYWdlQXJyYXkiLCJsZW5ndGgiLCJjb25jYXQiLCJpbmRleE9mTGFzdFBvc3QiLCJpbmRleE9mRmlyc3RQb3N0IiwiZHVtbXlMaXN0IiwibWFyZ2luVG9wIiwibWFwIiwidiIsImkiLCJ3aWR0aCIsImhlaWdodCIsInBhdGhuYW1lIiwicXVlcnkiLCJwb3N0SWQiLCJuaWNrIiwiZmxhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQUk7QUFBQTs7QUFFekJDLHlEQUFTLENBQUMsWUFBSTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNELEdBRlEsRUFFUCxFQUZPLENBQVQ7O0FBRnlCLGtCQU1JQyxzREFBUSxDQUFDLENBQUQsQ0FOWjtBQUFBLE1BTWxCQyxPQU5rQjtBQUFBLE1BTVZDLFVBTlUsaUJBTXVDOzs7QUFOdkMsbUJBT0ZGLHNEQUFRLENBQUMsQ0FBRCxDQVBOO0FBQUEsTUFPbEJHLFlBUGtCLGtCQU91Qzs7O0FBUHZDLG1CQVFVSCxzREFBUSxDQUFDLENBQUQsQ0FSbEI7QUFBQSxNQVFsQkksU0FSa0I7QUFBQSxNQVFOQyxZQVJNLGtCQVF1Qzs7O0FBUnZDLG1CQVN1Qkwsc0RBQVEsQ0FBQyxFQUFELENBVC9CO0FBQUEsTUFTbEJNLGlC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RSxZQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSVIsQ0FBSixDQUF2RyxDQUEvQixDQUZELEVBR0M7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdDLEtBQWhDLENBSEQsRUFJQztBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0Msa0JBQWhDLENBSkQsRUFLQztBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0MsS0FBaEMsQ0FMRCxFQU1DO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQyxJQUFoQyxDQU5ELEVBT0M7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdDLEdBQWhDLENBUEQsQ0FETTtBQUFBLEdBQWQsQ0FYSSxDQURILENBREosRUEwQkksTUFBQyxpRUFBRDtBQUFZLFlBQVEsRUFBRVgsUUFBdEI7QUFBZ0MsY0FBVSxFQUFFUSxTQUFTLENBQUNKLE1BQXREO0FBQThELGdCQUFZLEVBQUVULFlBQTVFO0FBQTBGLFdBQU8sRUFBRUYsT0FBbkc7QUFBNEcsYUFBUyxFQUFFRyxTQUF2SDtBQUFrSSxrQkFBYyxFQUFFRSxpQkFBbEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCSixDQUREO0FBK0JGLENBeEREOztHQUFNVixjOztLQUFBQSxjO0FBMkRTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbWFpblBvc3RzXzEwMDEuanMuZDRiNGI0OTI0ZmZlMjU5NWY5ODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgLCB7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNhbGxiYWNrfWZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJzsgXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUGFnZW5hdGlvbiBmcm9tICcuLi91dGlsQ29tcG9uZW50L1BhZ2VuYXRpb24nXHJcbmNvbnN0IE1haW5Qb3N0c18xMDAxID0gKCk9PntcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zb2xlLmxvZygnZGlzcGF0Y2gg7ZuE7JeQIOuNsOydtO2EsCDqsIDsoLjsmKTripQg66Gc7KeBJyk7IFxyXG4gIH0sW10pXHJcblxyXG4gIGNvbnN0IFtub3dQYWdlLHNldE5vd1BhZ2VdID0gdXNlU3RhdGUoMCk7ICAgICAgICAgICAgICAgICAgICAgICAvL+2YhOyerCDtjpjsnbTsp4BcclxuICBjb25zdCBbcG9zdHNQZXJQYWdlXSA9IHVzZVN0YXRlKDUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/tlZwg7Y6Y7J207KeA64u5IGxpc3Qg7IiYIFxyXG4gIGNvbnN0IFtncm91cFBhZ2UgLCBzZXRHcm91cFBhZ2VdID0gdXNlU3RhdGUoNSk7ICAgICAgICAgICAgICAgICAvL+2OmOydtOynlSDqt7jro7kg64u5IOyImCAgMX41ICwgNn4xMCAsIDExfjE1IC4uLlxyXG4gIGNvbnN0IFtub3dHcm91cFBhZ2VBcnJheSxzZXROb3dHcm91cFBhZ2VBcnJheV0gPXVzZVN0YXRlKFtdKTsgICAvL+2YhOygnCDtjpjsnbTsp5Ug6re466O5IOuwsOyXtFxyXG5cclxuICBjb25zdCBwYWdlbmF0ZSA9dXNlQ2FsbGJhY2soKHBhZ2VOdW1iZXIsIGdyb3VwUGFnZUFycmF5KT0+e1xyXG4gICAgc2V0Tm93UGFnZShwYWdlTnVtYmVyKTsgXHJcbiAgICBub3dHcm91cFBhZ2VBcnJheS5sZW5ndGg9MDsgXHJcbiAgICBzZXROb3dHcm91cFBhZ2VBcnJheShub3dHcm91cFBhZ2VBcnJheS5jb25jYXQoZ3JvdXBQYWdlQXJyYXkpKTtcclxuICAgIGNvbnN0IGluZGV4T2ZMYXN0UG9zdCA9IHBhZ2VOdW1iZXIgKiBwb3N0c1BlclBhZ2U7ICAgXHJcbiAgICBjb25zdCBpbmRleE9mRmlyc3RQb3N0ID0gaW5kZXhPZkxhc3RQb3N0IC0gcG9zdHNQZXJQYWdlOyAgXHJcblxyXG5cclxufSxbbm93UGFnZSxub3dHcm91cFBhZ2VBcnJheV0pOyBcclxuXHJcblxyXG4gIGNvbnN0IGR1bW15TGlzdCA9IFsn7Zes66Gc7Jqw7JuU65OcMDEnLCftl6zroZzsmrDsm5Trk5wwMicsJ+2XrOuhnOyasOyblOuTnDAzJywn7Zes66Gc7Jqw7JuU65OcMDQnLCftl6zroZzsmrDsm5Trk5wwNScsJ+2XrOuhnOyasOyblOuTnDA2J107IFxyXG5cclxuICBcclxuICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJyBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQm9keSc+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93VGgnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuydtOuvuOyngDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuygnOuqqTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuyekeyEseyekDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuuTseuhneydvDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuyhsO2ajDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuy2lOyynDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPuuwmOuMgDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxici8+XHJcbiAgICAgIHtkdW1teUxpc3QubWFwKCh2LGkpPT4oXHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdycgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnIHN0eWxlPXt7d2lkdGg6JzgwcHgnLGhlaWdodDonODBweCd9fT48aW1nIHNyYz0naHR0cHM6Ly9kaW1nLmRvbmdhLmNvbS93cHMvTkVXUy9JTUFHRS8yMDE5LzExLzI0Lzk4NTEwMDE1LjEuanBnJyBzdHlsZT17e3dpZHRoOic4MHB4JyxoZWlnaHQ6JzgwcHgnfX0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCcgPjxMaW5rIGhyZWY9e3twYXRobmFtZTonL2RldGFpbFBhZ2UnICwgcXVlcnk6e3Bvc3RJZDonMTAwMScsbmljazonYWJjJyxmbGFnOicyMjIyJ319fSBhcz17J2RldGFpbFBhZ2UnfT48YT57dn08L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCcgPnsn7Jq07JiB7J6QJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID57JzIwMjAwODE4IDogMTQ6MzAnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCcgPnsnMTI1J308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID57JzEwJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnID57JzAnfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UGFnZW5hdGlvbiBwYWdlbmF0ZT17cGFnZW5hdGV9IGRhdGFMZW5ndGg9e2R1bW15TGlzdC5sZW5ndGh9IHBvc3RzUGVyUGFnZT17cG9zdHNQZXJQYWdlfSBub3dQYWdlPXtub3dQYWdlfSBncm91cFBhZ2U9e2dyb3VwUGFnZX0gZ3JvdXBQYWdlQXJyYXk9e25vd0dyb3VwUGFnZUFycmF5fSAvPlxyXG5cclxuICAgIDwvPlxyXG4gICAgKTtcclxufTsgXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblBvc3RzXzEwMDE7ICJdLCJzb3VyY2VSb290IjoiIn0=