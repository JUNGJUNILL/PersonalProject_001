webpackHotUpdate("static\\development\\pages\\mainPosts_1001.js",{

/***/ "./pages/mainPosts_1001.js":
/*!*********************************!*\
  !*** ./pages/mainPosts_1001.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utilComponent_Pagenation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilComponent/Pagenation */ "./utilComponent/Pagenation.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utilComponent_isEmpty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utilComponent/isEmpty */ "./utilComponent/isEmpty.js");
/* harmony import */ var _utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utilComponent/custumDateFormat */ "./utilComponent/custumDateFormat.js");



var _this = undefined,
    _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\mainPosts_1001.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












var mainPosts_1001 = function mainPosts_1001(_ref) {
  _s();

  var pages = _ref.pages,
      group = _ref.group;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.mainPosts_1001;
  }),
      mainPosts_1001 = _useSelector.mainPosts_1001;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.auth;
  }),
      userInfo = _useSelector2.userInfo;
  /*-------------------------------------------페이징 처리 로직 start-------------------------------------------------------*/


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      nowPage = _useState[0],
      setNowPage = _useState[1]; //현재 페이지


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(2),
      postsPerPage = _useState2[0]; //한 페이지당 list 수 


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(5),
      groupPage = _useState3[0],
      setGroupPage = _useState3[1]; //페이징 그룹 당 수  1~5 , 6~10 , 11~15 ... 5의 배수만 입력가능 


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      nowGroupPageArray = _useState4[0],
      setNowGroupPageArray = _useState4[1]; //현재 페이징 그룹 배열


  var pagenate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (pageNumber, groupPageArray) {
    setNowPage(pageNumber);
    nowGroupPageArray.length = 0;
    setNowGroupPageArray(nowGroupPageArray.concat(groupPageArray));
    var indexOfLastPost = pageNumber * postsPerPage;
    var indexOfFirstPost = indexOfLastPost - postsPerPage;
    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_8__["MAINPOSTS_1001_LIST_REQUEST"],
      data: {
        postFlag: '1001',
        currentPage: indexOfFirstPost,
        maxPage: postsPerPage
      }
    });
  }, [nowPage, nowGroupPageArray]); //01.페이지 첫 로드시.. 
  //02.상세 정보 본 후 뒤로 가기 눌렀을 경우 
  //03.페이지 이동 후 뒤로가기 눌렀을 경우

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //초기에 groupPage 만큼 배열을 생생해 주어야 한다. 
    var pageArray = Array.from({
      length: groupPage
    }, function (v, i) {
      return i;
    }); //groupPage 페이지 그룹 변경 시 로직 (5에서 ▶ 눌렀을 때)

    if (group % groupPage === 0) {
      pageArray.length = 0;

      for (var i = group; i < group + groupPage; i++) {
        pageArray.push(i);
      }
    }

    pagenate(parseInt(pages), pageArray);
  }, [pages]);
  /*-------------------------------------------페이징 처리 로직   end-------------------------------------------------------*/
  //게시글 상세 페이지 

  var gotoDetail = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (postId, userNickName, postFlag) {
    router.push({
      pathname: '/detailPage',
      query: {
        postId: postId,
        nickName: userNickName,
        postFlag: postFlag
      }
    });
  }, []); //게시글 쓰기

  var gotoEdit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    router.push('/CKEditor');
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "divTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, mainPosts_1001.map(function (v, i) {
    return __jsx("div", {
      className: "divTableRow",
      onClick: function onClick() {
        return gotoDetail(v.postId, v.userNickName, '1001', nowPage);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 16
      }
    }, __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "divImageCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 49
      }
    }, __jsx("img", {
      src: "https://dimg.donga.com/wps/NEWS/IMAGE/2019/11/24/98510015.1.jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 79
      }
    }))), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: {
        pathname: '/detailPage',
        query: {
          postId: v.postId,
          nickName: v.userNickName,
          postFlag: '1001'
        }
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 50
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 155
      }
    }, Object(_utilComponent_isEmpty__WEBPACK_IMPORTED_MODULE_11__["default"])(v.title), " [", v.commentCount, "]")), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 206
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["LikeTwoTone"], {
      twoToneColor: "#1ba640",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 19
      }
    }), " : ", v.good, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["DislikeTwoTone"], {
      twoToneColor: "#1ba640",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 68
      }
    }), " : ", v.bad, "  ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["EyeOutlined"], {
      color: "red",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 120
      }
    }), " : ", v.hit, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 156
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["UserOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }), " ", Object(_utilComponent_isEmpty__WEBPACK_IMPORTED_MODULE_11__["default"])(v.userNickName), "   ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["FieldTimeOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 64
      }
    }), " ", Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_12__["default"])(v.createdDate), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 119
      }
    })));
  })), userInfo && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    onClick: gotoEdit,
    style: {
      marginTop: "1%",
      display: "block",
      "float": "right"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, "\uAE00\uC4F0\uAE30"), __jsx(_utilComponent_Pagenation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    pagenate: pagenate,
    dataLength: mainPosts_1001.length,
    postsPerPage: postsPerPage,
    nowPage: nowPage,
    groupPage: groupPage,
    groupPageArray: nowGroupPageArray,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }));
};

_s(mainPosts_1001, "N4GjilVDQ8UnAs2aFhgWCxhz6QM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"]];
});

mainPosts_1001.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var pages, group;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pages = context.query.nowPage;
            group = parseInt(context.query.group);
            return _context.abrupt("return", {
              pages: pages,
              group: group
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluUG9zdHNfMTAwMS5qcyJdLCJuYW1lcyI6WyJtYWluUG9zdHNfMTAwMSIsInBhZ2VzIiwiZ3JvdXAiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJ1c2VySW5mbyIsInVzZVN0YXRlIiwibm93UGFnZSIsInNldE5vd1BhZ2UiLCJwb3N0c1BlclBhZ2UiLCJncm91cFBhZ2UiLCJzZXRHcm91cFBhZ2UiLCJub3dHcm91cFBhZ2VBcnJheSIsInNldE5vd0dyb3VwUGFnZUFycmF5IiwicGFnZW5hdGUiLCJ1c2VDYWxsYmFjayIsInBhZ2VOdW1iZXIiLCJncm91cFBhZ2VBcnJheSIsImxlbmd0aCIsImNvbmNhdCIsImluZGV4T2ZMYXN0UG9zdCIsImluZGV4T2ZGaXJzdFBvc3QiLCJ0eXBlIiwiTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNUIiwiZGF0YSIsInBvc3RGbGFnIiwiY3VycmVudFBhZ2UiLCJtYXhQYWdlIiwidXNlRWZmZWN0IiwicGFnZUFycmF5IiwiQXJyYXkiLCJmcm9tIiwidiIsImkiLCJwdXNoIiwicGFyc2VJbnQiLCJnb3RvRGV0YWlsIiwicG9zdElkIiwidXNlck5pY2tOYW1lIiwicGF0aG5hbWUiLCJxdWVyeSIsIm5pY2tOYW1lIiwiZ290b0VkaXQiLCJtYXAiLCJpc0VtcHR5IiwidGl0bGUiLCJjb21tZW50Q291bnQiLCJnb29kIiwiYmFkIiwiaGl0IiwiY3VzdHVtRGF0ZUZvcm1hdCIsImNyZWF0ZWREYXRlIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFJQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEs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ZW50XFxwYWdlc1xcbWFpblBvc3RzXzEwMDEuanMuNjRkYTYyZjI1YTllM2QyNmY2YzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgLCB7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNhbGxiYWNrfWZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IFJvdXRlciAseyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFBhZ2VuYXRpb24gZnJvbSAnLi4vdXRpbENvbXBvbmVudC9QYWdlbmF0aW9uJ1xyXG5pbXBvcnQge0Rpc2xpa2VUd29Ub25lLExpa2VUd29Ub25lICxFeWVPdXRsaW5lZCwgVXNlck91dGxpbmVkLCBGaWVsZFRpbWVPdXRsaW5lZCwgRm9sZGVyVHdvVG9uZX0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCBcclxuICAgIHtNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvbWFpblBvc3RzXzEwMDEnOyBcclxuXHJcblxyXG5pbXBvcnQgXHJcbiAgICB7TE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9hdXRoJzsgXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi4vdXRpbENvbXBvbmVudC9pc0VtcHR5JztcclxuaW1wb3J0IGN1c3R1bURhdGVGb3JtYXQgZnJvbSAgJy4uL3V0aWxDb21wb25lbnQvY3VzdHVtRGF0ZUZvcm1hdCc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBtYWluUG9zdHNfMTAwMSA9ICh7cGFnZXMsZ3JvdXB9KT0+e1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCAgICAgICAgID0gdXNlRGlzcGF0Y2goKTsgXHJcbiAgY29uc3Qgcm91dGVyICAgICAgICAgICA9IHVzZVJvdXRlcigpOyBcclxuICBjb25zdCB7bWFpblBvc3RzXzEwMDF9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUubWFpblBvc3RzXzEwMDEpOyBcclxuICBjb25zdCB7dXNlckluZm99ICAgICAgID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuYXV0aCk7XHJcblxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3tjpjsnbTsp5Ug7LKY66asIOuhnOyngSBzdGFydC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIGNvbnN0IFtub3dQYWdlLHNldE5vd1BhZ2VdID0gdXNlU3RhdGUoMCk7ICAgICAgICAgICAgICAgICAgICAgICAvL+2YhOyerCDtjpjsnbTsp4BcclxuICBjb25zdCBbcG9zdHNQZXJQYWdlXSA9IHVzZVN0YXRlKDIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/tlZwg7Y6Y7J207KeA64u5IGxpc3Qg7IiYIFxyXG4gIGNvbnN0IFtncm91cFBhZ2UgLCBzZXRHcm91cFBhZ2VdID0gdXNlU3RhdGUoNSk7ICAgICAgICAgICAgICAgICAvL+2OmOydtOynlSDqt7jro7kg64u5IOyImCAgMX41ICwgNn4xMCAsIDExfjE1IC4uLiA17J2YIOuwsOyImOunjCDsnoXroKXqsIDriqUgXHJcbiAgY29uc3QgW25vd0dyb3VwUGFnZUFycmF5LHNldE5vd0dyb3VwUGFnZUFycmF5XSA9dXNlU3RhdGUoW10pOyAgIC8v7ZiE7J6sIO2OmOydtOynlSDqt7jro7kg67Cw7Je0XHJcbiAgXHJcblxyXG4gIGNvbnN0IHBhZ2VuYXRlID11c2VDYWxsYmFjaygocGFnZU51bWJlciwgZ3JvdXBQYWdlQXJyYXkpPT57XHJcblxyXG4gICAgc2V0Tm93UGFnZShwYWdlTnVtYmVyKTsgXHJcblxyXG4gICAgbm93R3JvdXBQYWdlQXJyYXkubGVuZ3RoPTA7IFxyXG5cclxuICAgIHNldE5vd0dyb3VwUGFnZUFycmF5KG5vd0dyb3VwUGFnZUFycmF5LmNvbmNhdChncm91cFBhZ2VBcnJheSkpO1xyXG5cclxuICAgIGNvbnN0IGluZGV4T2ZMYXN0UG9zdCA9IHBhZ2VOdW1iZXIgKiBwb3N0c1BlclBhZ2U7ICAgXHJcbiAgICBjb25zdCBpbmRleE9mRmlyc3RQb3N0ID0gaW5kZXhPZkxhc3RQb3N0IC0gcG9zdHNQZXJQYWdlOyAgXHJcblxyXG4gICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCwgXHJcbiAgICAgICAgZGF0YTp7cG9zdEZsYWc6JzEwMDEnLFxyXG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlOmluZGV4T2ZGaXJzdFBvc3QsXHJcbiAgICAgICAgICAgICAgbWF4UGFnZTpwb3N0c1BlclBhZ2VcclxuICAgICAgIH0sIFxyXG4gICAgfSk7XHJcblxyXG59LFtub3dQYWdlLG5vd0dyb3VwUGFnZUFycmF5XSk7IFxyXG5cclxuICAgICAgXHJcbiAgLy8wMS7tjpjsnbTsp4Ag7LKrIOuhnOuTnOyLnC4uIFxyXG4gIC8vMDIu7IOB7IS4IOygleuztCDrs7gg7ZuEIOuSpOuhnCDqsIDquLAg64iM66CA7J2EIOqyveyasCBcclxuICAvLzAzLu2OmOydtOyngCDsnbTrj5kg7ZuEIOuSpOuhnOqwgOq4sCDriIzroIDsnYQg6rK97JqwXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAvL+y0iOq4sOyXkCBncm91cFBhZ2Ug66eM7YG8IOuwsOyXtOydhCDsg53sg53tlbQg7KO87Ja07JW8IO2VnOuLpC4gXHJcbiAgICAgIGxldCBwYWdlQXJyYXkgPUFycmF5LmZyb20oe2xlbmd0aDogZ3JvdXBQYWdlfSwgKHYsIGkpID0+IGkpO1xyXG5cclxuXHJcbiAgICAgIC8vZ3JvdXBQYWdlIO2OmOydtOyngCDqt7jro7kg67OA6rK9IOyLnCDroZzsp4EgKDXsl5DshJwg4pa2IOuIjOuggOydhCDrlYwpXHJcbiAgICAgIGlmKChncm91cCAlIGdyb3VwUGFnZSA9PT0gMCApKXtcclxuICAgICAgICAgICAgICBwYWdlQXJyYXkubGVuZ3RoPTA7IFxyXG5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT1ncm91cDsgaTxncm91cCtncm91cFBhZ2U7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgIHBhZ2VBcnJheS5wdXNoKGkpOyBcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHBhZ2VuYXRlKHBhcnNlSW50KHBhZ2VzKSxwYWdlQXJyYXkpO1xyXG4gICAgICBcclxuICB9LFtwYWdlc10pOyBcclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t7Y6Y7J207KeVIOyymOumrCDroZzsp4EgICBlbmQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4gIC8v6rKM7Iuc6riAIOyDgeyEuCDtjpjsnbTsp4AgXHJcbiAgY29uc3QgZ290b0RldGFpbCA9IHVzZUNhbGxiYWNrKChwb3N0SWQsdXNlck5pY2tOYW1lLHBvc3RGbGFnKT0+e1xyXG5cclxuICAgIHJvdXRlci5wdXNoKHtwYXRobmFtZTonL2RldGFpbFBhZ2UnLFxyXG4gICAgICAgICAgICAgICAgIHF1ZXJ5Ontwb3N0SWQsbmlja05hbWU6dXNlck5pY2tOYW1lLHBvc3RGbGFnfSxcclxuICAgICAgICAgICAgICB9KTsgXHJcbiAgfSxbXSk7IFxyXG5cclxuXHJcbiAgLy/qsozsi5zquIAg7JOw6riwXHJcbiAgY29uc3QgZ290b0VkaXQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG5cclxuICAgIHJvdXRlci5wdXNoKCcvQ0tFZGl0b3InKTsgXHJcbiAgfSxbXSk7IFxyXG4gIFxyXG5cclxuICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlRhYmxlXCI+XHJcbiAgICAgICAgICAgIHttYWluUG9zdHNfMTAwMS5tYXAoKHYsaSk9PihcclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93JyBvbkNsaWNrPXsoKT0+Z290b0RldGFpbCh2LnBvc3RJZCx2LnVzZXJOaWNrTmFtZSwnMTAwMScsbm93UGFnZSl9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz48ZGl2IGNsYXNzTmFtZT1cImRpdkltYWdlQ2VsbFwiPjxpbWcgc3JjPSdodHRwczovL2RpbWcuZG9uZ2EuY29tL3dwcy9ORVdTL0lNQUdFLzIwMTkvMTEvMjQvOTg1MTAwMTUuMS5qcGcnIC8+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2VGFibGVDZWxsXCIgPjxMaW5rIGhyZWY9e3twYXRobmFtZTonL2RldGFpbFBhZ2UnICwgcXVlcnk6e3Bvc3RJZDp2LnBvc3RJZCxuaWNrTmFtZTp2LnVzZXJOaWNrTmFtZSxwb3N0RmxhZzonMTAwMSd9fX0gPjxhPntpc0VtcHR5KHYudGl0bGUpfSBbe3YuY29tbWVudENvdW50fV08L2E+PC9MaW5rPjxici8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHt2Lmdvb2R9IDxEaXNsaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHt2LmJhZH0gIDxFeWVPdXRsaW5lZCBjb2xvcj1cInJlZFwiLz4gOiB7di5oaXR9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPiB7aXNFbXB0eSh2LnVzZXJOaWNrTmFtZSl9ICAgPEZpZWxkVGltZU91dGxpbmVkIC8+IHtjdXN0dW1EYXRlRm9ybWF0KHYuY3JlYXRlZERhdGUpfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIHt1c2VySW5mbyAmJiAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2dvdG9FZGl0fSBzdHlsZT17e21hcmdpblRvcDpcIjElXCIsZGlzcGxheTpcImJsb2NrXCIsZmxvYXQ6XCJyaWdodFwifX0+6riA7JOw6riwPC9CdXR0b24+fVxyXG4gIFxyXG4gICAgICA8UGFnZW5hdGlvbiBwYWdlbmF0ZT17cGFnZW5hdGV9IGRhdGFMZW5ndGg9e21haW5Qb3N0c18xMDAxLmxlbmd0aH0gcG9zdHNQZXJQYWdlPXtwb3N0c1BlclBhZ2V9IG5vd1BhZ2U9e25vd1BhZ2V9IGdyb3VwUGFnZT17Z3JvdXBQYWdlfSBncm91cFBhZ2VBcnJheT17bm93R3JvdXBQYWdlQXJyYXl9IC8+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG59OyBcclxuXHJcbm1haW5Qb3N0c18xMDAxLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PntcclxuXHJcbiAgY29uc3QgcGFnZXMgPSBjb250ZXh0LnF1ZXJ5Lm5vd1BhZ2U7IFxyXG4gIGNvbnN0IGdyb3VwICA9cGFyc2VJbnQoY29udGV4dC5xdWVyeS5ncm91cCk7IFxyXG4gIHJldHVybiB7cGFnZXMsIGdyb3VwfTsgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluUG9zdHNfMTAwMTsgIl0sInNvdXJjZVJvb3QiOiIifQ==