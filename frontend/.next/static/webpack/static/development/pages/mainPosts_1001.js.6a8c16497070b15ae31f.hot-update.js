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
      mainPosts_1001 = _useSelector.mainPosts_1001,
      mainPosts_1001Info = _useSelector.mainPosts_1001Info;

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
    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_8__["MAINPOSTS_1001_DETAIL_INFO_REQUEST"],
      data: {
        postId: postId,
        nickName: userNickName,
        postFlag: postFlag
      }
    });
    console.log('mainPosts_1001Info===>', mainPosts_1001Info);
    router.push({
      pathname: '/detailPage copy',
      query: {
        postId: postId,
        nickName: userNickName,
        postFlag: postFlag,
        mainPosts_1001Info: JSON.stringify(mainPosts_1001Info)
      }
    });
  }, [mainPosts_1001Info.length]); //게시글 쓰기

  var gotoEdit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    router.push('/CKEditor');
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "divTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
        lineNumber: 118,
        columnNumber: 16
      }
    }, __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "divImageCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 49
      }
    }, __jsx("img", {
      src: "https://dimg.donga.com/wps/NEWS/IMAGE/2019/11/24/98510015.1.jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 79
      }
    }))), __jsx("div", {
      className: "divTableCell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
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
        lineNumber: 120,
        columnNumber: 50
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 155
      }
    }, Object(_utilComponent_isEmpty__WEBPACK_IMPORTED_MODULE_11__["default"])(v.title), " [", v.commentCount, "]")), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 206
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["LikeTwoTone"], {
      twoToneColor: "#1ba640",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 19
      }
    }), " : ", v.good, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["DislikeTwoTone"], {
      twoToneColor: "#1ba640",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 68
      }
    }), " : ", v.bad, "  ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["EyeOutlined"], {
      color: "red",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 120
      }
    }), " : ", v.hit, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 156
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["UserOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 19
      }
    }), " ", Object(_utilComponent_isEmpty__WEBPACK_IMPORTED_MODULE_11__["default"])(v.userNickName), "   ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["FieldTimeOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 64
      }
    }), " ", Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_12__["default"])(v.createdDate), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
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
      lineNumber: 129,
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
      lineNumber: 131,
      columnNumber: 7
    }
  }));
};

_s(mainPosts_1001, "ZAfJ99bmhMmsDccMmF7oB97bKkE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluUG9zdHNfMTAwMS5qcyJdLCJuYW1lcyI6WyJtYWluUG9zdHNfMTAwMSIsInBhZ2VzIiwiZ3JvdXAiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm1haW5Qb3N0c18xMDAxSW5mbyIsImF1dGgiLCJ1c2VySW5mbyIsInVzZVN0YXRlIiwibm93UGFnZSIsInNldE5vd1BhZ2UiLCJwb3N0c1BlclBhZ2UiLCJncm91cFBhZ2UiLCJzZXRHcm91cFBhZ2UiLCJub3dHcm91cFBhZ2VBcnJheSIsInNldE5vd0dyb3VwUGFnZUFycmF5IiwicGFnZW5hdGUiLCJ1c2VDYWxsYmFjayIsInBhZ2VOdW1iZXIiLCJncm91cFBhZ2VBcnJheSIsImxlbmd0aCIsImNvbmNhdCIsImluZGV4T2ZMYXN0UG9zdCIsImluZGV4T2ZGaXJzdFBvc3QiLCJ0eXBlIiwiTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNUIiwiZGF0YSIsInBvc3RGbGFnIiwiY3VycmVudFBhZ2UiLCJtYXhQYWdlIiwidXNlRWZmZWN0IiwicGFnZUFycmF5IiwiQXJyYXkiLCJmcm9tIiwidiIsImkiLCJwdXNoIiwicGFyc2VJbnQiLCJnb3RvRGV0YWlsIiwicG9zdElkIiwidXNlck5pY2tOYW1lIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCIsIm5pY2tOYW1lIiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIiwicXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ290b0VkaXQiLCJtYXAiLCJpc0VtcHR5IiwidGl0bGUiLCJjb21tZW50Q291bnQiLCJnb29kIiwiYmFkIiwiaGl0IiwiY3VzdHVtRGF0ZUZvcm1hdCIsImNyZWF0ZWREYXRlIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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VUFFcUJJLHdELEVBQ0FFLHFELEVBQ21CQyx3RCxFQUNuQkEsd0Q7OztBQTBHM0JQLGNBQWMsQ0FBQ2lFLGVBQWY7QUFBQSwrTEFBaUMsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXpCakUsaUJBRnlCLEdBRWpCaUUsT0FBTyxDQUFDaEIsS0FBUixDQUFjckMsT0FGRztBQUd6QlgsaUJBSHlCLEdBR2pCdUMsUUFBUSxDQUFDeUIsT0FBTyxDQUFDaEIsS0FBUixDQUFjaEQsS0FBZixDQUhTO0FBQUEsNkNBSXhCO0FBQUNELG1CQUFLLEVBQUxBLEtBQUQ7QUFBUUMsbUJBQUssRUFBTEE7QUFBUixhQUp3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFqQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRZUYsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1haW5Qb3N0c18xMDAxLmpzLjZhOGMxNjQ5NzA3MGIxNWFlMzFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0ICwge3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDYWxsYmFja31mcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnXHJcbmltcG9ydCBSb3V0ZXIgLHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBQYWdlbmF0aW9uIGZyb20gJy4uL3V0aWxDb21wb25lbnQvUGFnZW5hdGlvbidcclxuaW1wb3J0IHtEaXNsaWtlVHdvVG9uZSxMaWtlVHdvVG9uZSAsRXllT3V0bGluZWQsIFVzZXJPdXRsaW5lZCwgRmllbGRUaW1lT3V0bGluZWQsIEZvbGRlclR3b1RvbmV9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQgXHJcbiAgICB7TUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1RcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxJzsgXHJcblxyXG5cclxuaW1wb3J0IFxyXG4gICAge0xPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvYXV0aCc7IFxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBpc0VtcHR5IGZyb20gJy4uL3V0aWxDb21wb25lbnQvaXNFbXB0eSc7XHJcbmltcG9ydCBjdXN0dW1EYXRlRm9ybWF0IGZyb20gICcuLi91dGlsQ29tcG9uZW50L2N1c3R1bURhdGVGb3JtYXQnO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbWFpblBvc3RzXzEwMDEgPSAoe3BhZ2VzLGdyb3VwfSk9PntcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggICAgICAgICA9IHVzZURpc3BhdGNoKCk7IFxyXG4gIGNvbnN0IHJvdXRlciAgICAgICAgICAgPSB1c2VSb3V0ZXIoKTsgXHJcbiAgY29uc3Qge21haW5Qb3N0c18xMDAxLG1haW5Qb3N0c18xMDAxSW5mb30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5tYWluUG9zdHNfMTAwMSk7IFxyXG4gIGNvbnN0IHt1c2VySW5mb30gICAgICAgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5hdXRoKTtcclxuXHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLe2OmOydtOynlSDsspjrpqwg66Gc7KeBIHN0YXJ0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgY29uc3QgW25vd1BhZ2Usc2V0Tm93UGFnZV0gPSB1c2VTdGF0ZSgwKTsgICAgICAgICAgICAgICAgICAgICAgIC8v7ZiE7J6sIO2OmOydtOyngFxyXG4gIGNvbnN0IFtwb3N0c1BlclBhZ2VdID0gdXNlU3RhdGUoMik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+2VnCDtjpjsnbTsp4Dri7kgbGlzdCDsiJggXHJcbiAgY29uc3QgW2dyb3VwUGFnZSAsIHNldEdyb3VwUGFnZV0gPSB1c2VTdGF0ZSg1KTsgICAgICAgICAgICAgICAgIC8v7Y6Y7J207KeVIOq3uOujuSDri7kg7IiYICAxfjUgLCA2fjEwICwgMTF+MTUgLi4uIDXsnZgg67Cw7IiY66eMIOyeheugpeqwgOuKpSBcclxuICBjb25zdCBbbm93R3JvdXBQYWdlQXJyYXksc2V0Tm93R3JvdXBQYWdlQXJyYXldID11c2VTdGF0ZShbXSk7ICAgLy/tmITsnqwg7Y6Y7J207KeVIOq3uOujuSDrsLDsl7RcclxuICBcclxuXHJcbiAgY29uc3QgcGFnZW5hdGUgPXVzZUNhbGxiYWNrKChwYWdlTnVtYmVyLCBncm91cFBhZ2VBcnJheSk9PntcclxuXHJcbiAgICBzZXROb3dQYWdlKHBhZ2VOdW1iZXIpOyBcclxuXHJcbiAgICBub3dHcm91cFBhZ2VBcnJheS5sZW5ndGg9MDsgXHJcblxyXG4gICAgc2V0Tm93R3JvdXBQYWdlQXJyYXkobm93R3JvdXBQYWdlQXJyYXkuY29uY2F0KGdyb3VwUGFnZUFycmF5KSk7XHJcblxyXG4gICAgY29uc3QgaW5kZXhPZkxhc3RQb3N0ID0gcGFnZU51bWJlciAqIHBvc3RzUGVyUGFnZTsgICBcclxuICAgIGNvbnN0IGluZGV4T2ZGaXJzdFBvc3QgPSBpbmRleE9mTGFzdFBvc3QgLSBwb3N0c1BlclBhZ2U7ICBcclxuXHJcbiAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNULCBcclxuICAgICAgICBkYXRhOntwb3N0RmxhZzonMTAwMScsXHJcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U6aW5kZXhPZkZpcnN0UG9zdCxcclxuICAgICAgICAgICAgICBtYXhQYWdlOnBvc3RzUGVyUGFnZVxyXG4gICAgICAgfSwgXHJcbiAgICB9KTtcclxuXHJcbn0sW25vd1BhZ2Usbm93R3JvdXBQYWdlQXJyYXldKTsgXHJcblxyXG4gICAgICBcclxuICAvLzAxLu2OmOydtOyngCDssqsg66Gc65Oc7IucLi4gXHJcbiAgLy8wMi7sg4HshLgg7KCV67O0IOuzuCDtm4Qg65Kk66GcIOqwgOq4sCDriIzroIDsnYQg6rK97JqwIFxyXG4gIC8vMDMu7Y6Y7J207KeAIOydtOuPmSDtm4Qg65Kk66Gc6rCA6riwIOuIjOuggOydhCDqsr3smrBcclxuICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgIC8v7LSI6riw7JeQIGdyb3VwUGFnZSDrp4ztgbwg67Cw7Je07J2EIOyDneyDne2VtCDso7zslrTslbwg7ZWc64ukLiBcclxuICAgICAgbGV0IHBhZ2VBcnJheSA9QXJyYXkuZnJvbSh7bGVuZ3RoOiBncm91cFBhZ2V9LCAodiwgaSkgPT4gaSk7XHJcblxyXG5cclxuICAgICAgLy9ncm91cFBhZ2Ug7Y6Y7J207KeAIOq3uOujuSDrs4Dqsr0g7IucIOuhnOyngSAoNeyXkOyEnCDilrYg64iM66CA7J2EIOuVjClcclxuICAgICAgaWYoKGdyb3VwICUgZ3JvdXBQYWdlID09PSAwICkpe1xyXG4gICAgICAgICAgICAgIHBhZ2VBcnJheS5sZW5ndGg9MDsgXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPWdyb3VwOyBpPGdyb3VwK2dyb3VwUGFnZTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgcGFnZUFycmF5LnB1c2goaSk7IFxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcGFnZW5hdGUocGFyc2VJbnQocGFnZXMpLHBhZ2VBcnJheSk7XHJcbiAgICAgIFxyXG4gIH0sW3BhZ2VzXSk7IFxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3tjpjsnbTsp5Ug7LKY66asIOuhnOyngSAgIGVuZC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbiAgLy/qsozsi5zquIAg7IOB7IS4IO2OmOydtOyngCBcclxuICBjb25zdCBnb3RvRGV0YWlsID0gdXNlQ2FsbGJhY2soKHBvc3RJZCx1c2VyTmlja05hbWUscG9zdEZsYWcpPT57XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsIFxyXG4gICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgbmlja05hbWU6dXNlck5pY2tOYW1lLFxyXG4gICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgfVxyXG4gICAgIH0pO1xyXG4gICAgIGNvbnNvbGUubG9nKCdtYWluUG9zdHNfMTAwMUluZm89PT0+JyxtYWluUG9zdHNfMTAwMUluZm8pO1xyXG4gICAgcm91dGVyLnB1c2goe3BhdGhuYW1lOicvZGV0YWlsUGFnZSBjb3B5JyxcclxuICAgICAgICAgICAgICAgICBxdWVyeTp7cG9zdElkLG5pY2tOYW1lOnVzZXJOaWNrTmFtZSxwb3N0RmxhZyxtYWluUG9zdHNfMTAwMUluZm86SlNPTi5zdHJpbmdpZnkobWFpblBvc3RzXzEwMDFJbmZvKX0sXHJcbiAgICAgICAgICAgICAgfSk7IFxyXG4gIH0sW21haW5Qb3N0c18xMDAxSW5mby5sZW5ndGhdKTsgXHJcblxyXG5cclxuICAvL+qyjOyLnOq4gCDsk7DquLBcclxuICBjb25zdCBnb3RvRWRpdCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcblxyXG4gICAgcm91dGVyLnB1c2goJy9DS0VkaXRvcicpOyBcclxuICB9LFtdKTsgXHJcbiAgXHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2VGFibGVcIj5cclxuICAgICAgICAgICAge21haW5Qb3N0c18xMDAxLm1hcCgodixpKT0+KFxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnIG9uQ2xpY2s9eygpPT5nb3RvRGV0YWlsKHYucG9zdElkLHYudXNlck5pY2tOYW1lLCcxMDAxJyxub3dQYWdlKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPjxkaXYgY2xhc3NOYW1lPVwiZGl2SW1hZ2VDZWxsXCI+PGltZyBzcmM9J2h0dHBzOi8vZGltZy5kb25nYS5jb20vd3BzL05FV1MvSU1BR0UvMjAxOS8xMS8yNC85ODUxMDAxNS4xLmpwZycgLz48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZUYWJsZUNlbGxcIiA+PExpbmsgaHJlZj17e3BhdGhuYW1lOicvZGV0YWlsUGFnZScgLCBxdWVyeTp7cG9zdElkOnYucG9zdElkLG5pY2tOYW1lOnYudXNlck5pY2tOYW1lLHBvc3RGbGFnOicxMDAxJ319fSA+PGE+e2lzRW1wdHkodi50aXRsZSl9IFt7di5jb21tZW50Q291bnR9XTwvYT48L0xpbms+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgPExpa2VUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+IDoge3YuZ29vZH0gPERpc2xpa2VUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+IDoge3YuYmFkfSAgPEV5ZU91dGxpbmVkIGNvbG9yPVwicmVkXCIvPiA6IHt2LmhpdH08YnIvPlxyXG4gICAgICAgICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+IHtpc0VtcHR5KHYudXNlck5pY2tOYW1lKX0gICA8RmllbGRUaW1lT3V0bGluZWQgLz4ge2N1c3R1bURhdGVGb3JtYXQodi5jcmVhdGVkRGF0ZSl9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAge3VzZXJJbmZvICYmICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17Z290b0VkaXR9IHN0eWxlPXt7bWFyZ2luVG9wOlwiMSVcIixkaXNwbGF5OlwiYmxvY2tcIixmbG9hdDpcInJpZ2h0XCJ9fT7quIDsk7DquLA8L0J1dHRvbj59XHJcbiAgXHJcbiAgICAgIDxQYWdlbmF0aW9uIHBhZ2VuYXRlPXtwYWdlbmF0ZX0gZGF0YUxlbmd0aD17bWFpblBvc3RzXzEwMDEubGVuZ3RofSBwb3N0c1BlclBhZ2U9e3Bvc3RzUGVyUGFnZX0gbm93UGFnZT17bm93UGFnZX0gZ3JvdXBQYWdlPXtncm91cFBhZ2V9IGdyb3VwUGFnZUFycmF5PXtub3dHcm91cFBhZ2VBcnJheX0gLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07IFxyXG5cclxubWFpblBvc3RzXzEwMDEuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+e1xyXG5cclxuICBjb25zdCBwYWdlcyA9IGNvbnRleHQucXVlcnkubm93UGFnZTsgXHJcbiAgY29uc3QgZ3JvdXAgID1wYXJzZUludChjb250ZXh0LnF1ZXJ5Lmdyb3VwKTsgXHJcbiAgcmV0dXJuIHtwYWdlcywgZ3JvdXB9OyBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5Qb3N0c18xMDAxOyAiXSwic291cmNlUm9vdCI6IiJ9