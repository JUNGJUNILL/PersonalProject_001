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
    router.push({
      pathname: '/detailPage copy',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluUG9zdHNfMTAwMS5qcyJdLCJuYW1lcyI6WyJtYWluUG9zdHNfMTAwMSIsInBhZ2VzIiwiZ3JvdXAiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm1haW5Qb3N0c18xMDAxSW5mbyIsImF1dGgiLCJ1c2VySW5mbyIsInVzZVN0YXRlIiwibm93UGFnZSIsInNldE5vd1BhZ2UiLCJwb3N0c1BlclBhZ2UiLCJncm91cFBhZ2UiLCJzZXRHcm91cFBhZ2UiLCJub3dHcm91cFBhZ2VBcnJheSIsInNldE5vd0dyb3VwUGFnZUFycmF5IiwicGFnZW5hdGUiLCJ1c2VDYWxsYmFjayIsInBhZ2VOdW1iZXIiLCJncm91cFBhZ2VBcnJheSIsImxlbmd0aCIsImNvbmNhdCIsImluZGV4T2ZMYXN0UG9zdCIsImluZGV4T2ZGaXJzdFBvc3QiLCJ0eXBlIiwiTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNUIiwiZGF0YSIsInBvc3RGbGFnIiwiY3VycmVudFBhZ2UiLCJtYXhQYWdlIiwidXNlRWZmZWN0IiwicGFnZUFycmF5IiwiQXJyYXkiLCJmcm9tIiwidiIsImkiLCJwdXNoIiwicGFyc2VJbnQiLCJnb3RvRGV0YWlsIiwicG9zdElkIiwidXNlck5pY2tOYW1lIiwicGF0aG5hbWUiLCJxdWVyeSIsIm5pY2tOYW1lIiwiZ290b0VkaXQiLCJtYXAiLCJpc0VtcHR5IiwidGl0bGUiLCJjb21tZW50Q291bnQiLCJnb29kIiwiYmFkIiwiaGl0IiwiY3VzdHVtRGF0ZUZvcm1hdCIsImNyZWF0ZWREYXRlIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFJQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsY0FBYyxHQUFHLDhCQUFpQjtBQUFBOztBQUFBLE1BQWZDLEtBQWUsUUFBZkEsS0FBZTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUV0QyxNQUFNQyxRQUFRLEdBQVdDLGdFQUFXLEVBQXBDO0FBQ0EsTUFBTUMsTUFBTSxHQUFhQyw2REFBUyxFQUFsQzs7QUFIc0MscUJBSU1DLGdFQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ1IsY0FBZjtBQUFBLEdBQUQsQ0FKakI7QUFBQSxNQUkvQkEsY0FKK0IsZ0JBSS9CQSxjQUorQjtBQUFBLE1BSWhCUyxrQkFKZ0IsZ0JBSWhCQSxrQkFKZ0I7O0FBQUEsc0JBS2JGLGdFQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0UsSUFBZjtBQUFBLEdBQUQsQ0FMRTtBQUFBLE1BSy9CQyxRQUwrQixpQkFLL0JBLFFBTCtCO0FBUXRDOzs7QUFSc0Msa0JBU1RDLHNEQUFRLENBQUMsQ0FBRCxDQVRDO0FBQUEsTUFTL0JDLE9BVCtCO0FBQUEsTUFTdkJDLFVBVHVCLGlCQVMwQjs7O0FBVDFCLG1CQVVmRixzREFBUSxDQUFDLENBQUQsQ0FWTztBQUFBLE1BVS9CRyxZQVYrQixrQkFVMEI7OztBQVYxQixtQkFXSEgsc0RBQVEsQ0FBQyxDQUFELENBWEw7QUFBQSxNQVcvQkksU0FYK0I7QUFBQSxNQVduQkMsWUFYbUIsa0JBVzBCOzs7QUFYMUIsbUJBWVVMLHNEQUFRLENBQUMsRUFBRCxDQVpsQjtBQUFBLE1BWS9CTSxpQkFaK0I7QUFBQSxNQVliQyxvQkFaYSxrQkFZMEI7OztBQUdoRSxNQUFNQyxRQUFRLEdBQUVDLHlEQUFXLENBQUMsVUFBQ0MsVUFBRCxFQUFhQyxjQUFiLEVBQThCO0FBRXhEVCxjQUFVLENBQUNRLFVBQUQsQ0FBVjtBQUVBSixxQkFBaUIsQ0FBQ00sTUFBbEIsR0FBeUIsQ0FBekI7QUFFQUwsd0JBQW9CLENBQUNELGlCQUFpQixDQUFDTyxNQUFsQixDQUF5QkYsY0FBekIsQ0FBRCxDQUFwQjtBQUVBLFFBQU1HLGVBQWUsR0FBR0osVUFBVSxHQUFHUCxZQUFyQztBQUNBLFFBQU1ZLGdCQUFnQixHQUFHRCxlQUFlLEdBQUdYLFlBQTNDO0FBRUNaLFlBQVEsQ0FBQztBQUNOeUIsVUFBSSxFQUFDQyxvRkFEQztBQUVOQyxVQUFJLEVBQUM7QUFBQ0MsZ0JBQVEsRUFBQyxNQUFWO0FBQ0NDLG1CQUFXLEVBQUNMLGdCQURiO0FBRUNNLGVBQU8sRUFBQ2xCO0FBRlQ7QUFGQyxLQUFELENBQVI7QUFRSixHQW5CNEIsRUFtQjNCLENBQUNGLE9BQUQsRUFBU0ssaUJBQVQsQ0FuQjJCLENBQTNCLENBZnNDLENBcUN0QztBQUNBO0FBQ0E7O0FBQ0FnQix5REFBUyxDQUFDLFlBQUk7QUFFVjtBQUNBLFFBQUlDLFNBQVMsR0FBRUMsS0FBSyxDQUFDQyxJQUFOLENBQVc7QUFBQ2IsWUFBTSxFQUFFUjtBQUFULEtBQVgsRUFBZ0MsVUFBQ3NCLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVVBLENBQVY7QUFBQSxLQUFoQyxDQUFmLENBSFUsQ0FNVjs7QUFDQSxRQUFJckMsS0FBSyxHQUFHYyxTQUFSLEtBQXNCLENBQTFCLEVBQThCO0FBQ3RCbUIsZUFBUyxDQUFDWCxNQUFWLEdBQWlCLENBQWpCOztBQUVFLFdBQUksSUFBSWUsQ0FBQyxHQUFDckMsS0FBVixFQUFpQnFDLENBQUMsR0FBQ3JDLEtBQUssR0FBQ2MsU0FBekIsRUFBb0N1QixDQUFDLEVBQXJDLEVBQXdDO0FBQ3RDSixpQkFBUyxDQUFDSyxJQUFWLENBQWVELENBQWY7QUFFRDtBQUNMOztBQUVGbkIsWUFBUSxDQUFDcUIsUUFBUSxDQUFDeEMsS0FBRCxDQUFULEVBQWlCa0MsU0FBakIsQ0FBUjtBQUVQLEdBbEJRLEVBa0JQLENBQUNsQyxLQUFELENBbEJPLENBQVQ7QUFvQkE7QUFHQTs7QUFDQSxNQUFNeUMsVUFBVSxHQUFHckIseURBQVcsQ0FBQyxVQUFDc0IsTUFBRCxFQUFRQyxZQUFSLEVBQXFCYixRQUFyQixFQUFnQztBQUU3RDFCLFVBQU0sQ0FBQ21DLElBQVAsQ0FBWTtBQUFDSyxjQUFRLEVBQUMsa0JBQVY7QUFDQ0MsV0FBSyxFQUFDO0FBQUNILGNBQU0sRUFBTkEsTUFBRDtBQUFRSSxnQkFBUSxFQUFDSCxZQUFqQjtBQUE4QmIsZ0JBQVEsRUFBUkE7QUFBOUI7QUFEUCxLQUFaO0FBR0QsR0FMNkIsRUFLNUIsRUFMNEIsQ0FBOUIsQ0FoRXNDLENBd0V0Qzs7QUFDQSxNQUFNaUIsUUFBUSxHQUFHM0IseURBQVcsQ0FBQyxZQUFJO0FBRS9CaEIsVUFBTSxDQUFDbUMsSUFBUCxDQUFZLFdBQVo7QUFDRCxHQUgyQixFQUcxQixFQUgwQixDQUE1QjtBQU1DLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNPeEMsY0FBYyxDQUFDaUQsR0FBZixDQUFtQixVQUFDWCxDQUFELEVBQUdDLENBQUg7QUFBQSxXQUNqQjtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQTZCLGFBQU8sRUFBRTtBQUFBLGVBQUlHLFVBQVUsQ0FBQ0osQ0FBQyxDQUFDSyxNQUFILEVBQVVMLENBQUMsQ0FBQ00sWUFBWixFQUF5QixNQUF6QixFQUFnQy9CLE9BQWhDLENBQWQ7QUFBQSxPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0c7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQThCO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE4QjtBQUFLLFNBQUcsRUFBQyxpRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTlCLENBQTlCLENBREgsRUFFRztBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0IsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRTtBQUFDZ0MsZ0JBQVEsRUFBQyxhQUFWO0FBQTBCQyxhQUFLLEVBQUM7QUFBQ0gsZ0JBQU0sRUFBQ0wsQ0FBQyxDQUFDSyxNQUFWO0FBQWlCSSxrQkFBUSxFQUFDVCxDQUFDLENBQUNNLFlBQTVCO0FBQXlDYixrQkFBUSxFQUFDO0FBQWxEO0FBQWhDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF5RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUltQix1RUFBTyxDQUFDWixDQUFDLENBQUNhLEtBQUgsQ0FBWCxRQUF3QmIsQ0FBQyxDQUFDYyxZQUExQixNQUF6RyxDQUEvQixFQUEyTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTNMLEVBQ0EsTUFBQyw2REFBRDtBQUFhLGtCQUFZLEVBQUMsU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLFNBQ3lDZCxDQUFDLENBQUNlLElBRDNDLE9BQ2lELE1BQUMsZ0VBQUQ7QUFBZ0Isa0JBQVksRUFBQyxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGpELFNBQzZGZixDQUFDLENBQUNnQixHQUQvRixRQUNxRyxNQUFDLDZEQUFEO0FBQWEsV0FBSyxFQUFDLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEckcsU0FDbUloQixDQUFDLENBQUNpQixHQURySSxFQUN5STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRHpJLEVBRUEsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkEsT0FFa0JMLHVFQUFPLENBQUNaLENBQUMsQ0FBQ00sWUFBSCxDQUZ6QixTQUU2QyxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGN0MsT0FFb0VZLGdGQUFnQixDQUFDbEIsQ0FBQyxDQUFDbUIsV0FBSCxDQUZwRixFQUVvRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRnBHLENBRkgsQ0FEaUI7QUFBQSxHQUFuQixDQURQLENBRkYsRUFlRzlDLFFBQVEsSUFBSyxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsV0FBTyxFQUFFcUMsUUFBaEM7QUFBMEMsU0FBSyxFQUFFO0FBQUNVLGVBQVMsRUFBQyxJQUFYO0FBQWdCQyxhQUFPLEVBQUMsT0FBeEI7QUFBZ0MsZUFBTTtBQUF0QyxLQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWZoQixFQWlCRSxNQUFDLGlFQUFEO0FBQVksWUFBUSxFQUFFdkMsUUFBdEI7QUFBZ0MsY0FBVSxFQUFFcEIsY0FBYyxDQUFDd0IsTUFBM0Q7QUFBbUUsZ0JBQVksRUFBRVQsWUFBakY7QUFBK0YsV0FBTyxFQUFFRixPQUF4RztBQUFpSCxhQUFTLEVBQUVHLFNBQTVIO0FBQXVJLGtCQUFjLEVBQUVFLGlCQUF2SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLENBREQ7QUFzQkYsQ0FyR0Q7O0dBQU1sQixjO1VBRXFCSSx3RCxFQUNBRSxxRCxFQUNtQkMsd0QsRUFDbkJBLHdEOzs7QUFrRzNCUCxjQUFjLENBQUM0RCxlQUFmO0FBQUEsK0xBQWlDLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV6QjVELGlCQUZ5QixHQUVqQjRELE9BQU8sQ0FBQ2YsS0FBUixDQUFjakMsT0FGRztBQUd6QlgsaUJBSHlCLEdBR2pCdUMsUUFBUSxDQUFDb0IsT0FBTyxDQUFDZixLQUFSLENBQWM1QyxLQUFmLENBSFM7QUFBQSw2Q0FJeEI7QUFBQ0QsbUJBQUssRUFBTEEsS0FBRDtBQUFRQyxtQkFBSyxFQUFMQTtBQUFSLGFBSndCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWpDOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFlRiw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbWFpblBvc3RzXzEwMDEuanMuYjJiNzdiYzI4ZTkxZTdkNDExMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgLCB7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNhbGxiYWNrfWZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IFJvdXRlciAseyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFBhZ2VuYXRpb24gZnJvbSAnLi4vdXRpbENvbXBvbmVudC9QYWdlbmF0aW9uJ1xyXG5pbXBvcnQge0Rpc2xpa2VUd29Ub25lLExpa2VUd29Ub25lICxFeWVPdXRsaW5lZCwgVXNlck91dGxpbmVkLCBGaWVsZFRpbWVPdXRsaW5lZCwgRm9sZGVyVHdvVG9uZX0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCBcclxuICAgIHtNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvbWFpblBvc3RzXzEwMDEnOyBcclxuXHJcblxyXG5pbXBvcnQgXHJcbiAgICB7TE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9hdXRoJzsgXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi4vdXRpbENvbXBvbmVudC9pc0VtcHR5JztcclxuaW1wb3J0IGN1c3R1bURhdGVGb3JtYXQgZnJvbSAgJy4uL3V0aWxDb21wb25lbnQvY3VzdHVtRGF0ZUZvcm1hdCc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBtYWluUG9zdHNfMTAwMSA9ICh7cGFnZXMsZ3JvdXB9KT0+e1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCAgICAgICAgID0gdXNlRGlzcGF0Y2goKTsgXHJcbiAgY29uc3Qgcm91dGVyICAgICAgICAgICA9IHVzZVJvdXRlcigpOyBcclxuICBjb25zdCB7bWFpblBvc3RzXzEwMDEsbWFpblBvc3RzXzEwMDFJbmZvfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLm1haW5Qb3N0c18xMDAxKTsgXHJcbiAgY29uc3Qge3VzZXJJbmZvfSAgICAgICA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmF1dGgpO1xyXG5cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t7Y6Y7J207KeVIOyymOumrCDroZzsp4Egc3RhcnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBjb25zdCBbbm93UGFnZSxzZXROb3dQYWdlXSA9IHVzZVN0YXRlKDApOyAgICAgICAgICAgICAgICAgICAgICAgLy/tmITsnqwg7Y6Y7J207KeAXHJcbiAgY29uc3QgW3Bvc3RzUGVyUGFnZV0gPSB1c2VTdGF0ZSgyKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v7ZWcIO2OmOydtOyngOuLuSBsaXN0IOyImCBcclxuICBjb25zdCBbZ3JvdXBQYWdlICwgc2V0R3JvdXBQYWdlXSA9IHVzZVN0YXRlKDUpOyAgICAgICAgICAgICAgICAgLy/tjpjsnbTsp5Ug6re466O5IOuLuSDsiJggIDF+NSAsIDZ+MTAgLCAxMX4xNSAuLi4gNeydmCDrsLDsiJjrp4wg7J6F66Cl6rCA64qlIFxyXG4gIGNvbnN0IFtub3dHcm91cFBhZ2VBcnJheSxzZXROb3dHcm91cFBhZ2VBcnJheV0gPXVzZVN0YXRlKFtdKTsgICAvL+2YhOyerCDtjpjsnbTsp5Ug6re466O5IOuwsOyXtFxyXG4gIFxyXG5cclxuICBjb25zdCBwYWdlbmF0ZSA9dXNlQ2FsbGJhY2soKHBhZ2VOdW1iZXIsIGdyb3VwUGFnZUFycmF5KT0+e1xyXG5cclxuICAgIHNldE5vd1BhZ2UocGFnZU51bWJlcik7IFxyXG5cclxuICAgIG5vd0dyb3VwUGFnZUFycmF5Lmxlbmd0aD0wOyBcclxuXHJcbiAgICBzZXROb3dHcm91cFBhZ2VBcnJheShub3dHcm91cFBhZ2VBcnJheS5jb25jYXQoZ3JvdXBQYWdlQXJyYXkpKTtcclxuXHJcbiAgICBjb25zdCBpbmRleE9mTGFzdFBvc3QgPSBwYWdlTnVtYmVyICogcG9zdHNQZXJQYWdlOyAgIFxyXG4gICAgY29uc3QgaW5kZXhPZkZpcnN0UG9zdCA9IGluZGV4T2ZMYXN0UG9zdCAtIHBvc3RzUGVyUGFnZTsgIFxyXG5cclxuICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QsIFxyXG4gICAgICAgIGRhdGE6e3Bvc3RGbGFnOicxMDAxJyxcclxuICAgICAgICAgICAgICBjdXJyZW50UGFnZTppbmRleE9mRmlyc3RQb3N0LFxyXG4gICAgICAgICAgICAgIG1heFBhZ2U6cG9zdHNQZXJQYWdlXHJcbiAgICAgICB9LCBcclxuICAgIH0pO1xyXG5cclxufSxbbm93UGFnZSxub3dHcm91cFBhZ2VBcnJheV0pOyBcclxuXHJcbiAgICAgIFxyXG4gIC8vMDEu7Y6Y7J207KeAIOyyqyDroZzrk5zsi5wuLiBcclxuICAvLzAyLuyDgeyEuCDsoJXrs7Qg67O4IO2bhCDrkqTroZwg6rCA6riwIOuIjOuggOydhCDqsr3smrAgXHJcbiAgLy8wMy7tjpjsnbTsp4Ag7J2064+ZIO2bhCDrkqTroZzqsIDquLAg64iM66CA7J2EIOqyveyasFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgLy/stIjquLDsl5AgZ3JvdXBQYWdlIOunjO2BvCDrsLDsl7TsnYQg7IOd7IOd7ZW0IOyjvOyWtOyVvCDtlZzri6QuIFxyXG4gICAgICBsZXQgcGFnZUFycmF5ID1BcnJheS5mcm9tKHtsZW5ndGg6IGdyb3VwUGFnZX0sICh2LCBpKSA9PiBpKTtcclxuXHJcblxyXG4gICAgICAvL2dyb3VwUGFnZSDtjpjsnbTsp4Ag6re466O5IOuzgOqyvSDsi5wg66Gc7KeBICg17JeQ7IScIOKWtiDriIzroIDsnYQg65WMKVxyXG4gICAgICBpZigoZ3JvdXAgJSBncm91cFBhZ2UgPT09IDAgKSl7XHJcbiAgICAgICAgICAgICAgcGFnZUFycmF5Lmxlbmd0aD0wOyBcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9Z3JvdXA7IGk8Z3JvdXArZ3JvdXBQYWdlOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICBwYWdlQXJyYXkucHVzaChpKTsgXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwYWdlbmF0ZShwYXJzZUludChwYWdlcykscGFnZUFycmF5KTtcclxuICAgICAgXHJcbiAgfSxbcGFnZXNdKTsgXHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLe2OmOydtOynlSDsspjrpqwg66Gc7KeBICAgZW5kLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuICAvL+qyjOyLnOq4gCDsg4HshLgg7Y6Y7J207KeAIFxyXG4gIGNvbnN0IGdvdG9EZXRhaWwgPSB1c2VDYWxsYmFjaygocG9zdElkLHVzZXJOaWNrTmFtZSxwb3N0RmxhZyk9PntcclxuXHJcbiAgICByb3V0ZXIucHVzaCh7cGF0aG5hbWU6Jy9kZXRhaWxQYWdlIGNvcHknLFxyXG4gICAgICAgICAgICAgICAgIHF1ZXJ5Ontwb3N0SWQsbmlja05hbWU6dXNlck5pY2tOYW1lLHBvc3RGbGFnfSxcclxuICAgICAgICAgICAgICB9KTsgXHJcbiAgfSxbXSk7IFxyXG5cclxuXHJcbiAgLy/qsozsi5zquIAg7JOw6riwXHJcbiAgY29uc3QgZ290b0VkaXQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG5cclxuICAgIHJvdXRlci5wdXNoKCcvQ0tFZGl0b3InKTsgXHJcbiAgfSxbXSk7IFxyXG4gIFxyXG5cclxuICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlRhYmxlXCI+XHJcbiAgICAgICAgICAgIHttYWluUG9zdHNfMTAwMS5tYXAoKHYsaSk9PihcclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93JyBvbkNsaWNrPXsoKT0+Z290b0RldGFpbCh2LnBvc3RJZCx2LnVzZXJOaWNrTmFtZSwnMTAwMScsbm93UGFnZSl9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz48ZGl2IGNsYXNzTmFtZT1cImRpdkltYWdlQ2VsbFwiPjxpbWcgc3JjPSdodHRwczovL2RpbWcuZG9uZ2EuY29tL3dwcy9ORVdTL0lNQUdFLzIwMTkvMTEvMjQvOTg1MTAwMTUuMS5qcGcnIC8+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2VGFibGVDZWxsXCIgPjxMaW5rIGhyZWY9e3twYXRobmFtZTonL2RldGFpbFBhZ2UnICwgcXVlcnk6e3Bvc3RJZDp2LnBvc3RJZCxuaWNrTmFtZTp2LnVzZXJOaWNrTmFtZSxwb3N0RmxhZzonMTAwMSd9fX0gPjxhPntpc0VtcHR5KHYudGl0bGUpfSBbe3YuY29tbWVudENvdW50fV08L2E+PC9MaW5rPjxici8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHt2Lmdvb2R9IDxEaXNsaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHt2LmJhZH0gIDxFeWVPdXRsaW5lZCBjb2xvcj1cInJlZFwiLz4gOiB7di5oaXR9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPiB7aXNFbXB0eSh2LnVzZXJOaWNrTmFtZSl9ICAgPEZpZWxkVGltZU91dGxpbmVkIC8+IHtjdXN0dW1EYXRlRm9ybWF0KHYuY3JlYXRlZERhdGUpfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIHt1c2VySW5mbyAmJiAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2dvdG9FZGl0fSBzdHlsZT17e21hcmdpblRvcDpcIjElXCIsZGlzcGxheTpcImJsb2NrXCIsZmxvYXQ6XCJyaWdodFwifX0+6riA7JOw6riwPC9CdXR0b24+fVxyXG4gIFxyXG4gICAgICA8UGFnZW5hdGlvbiBwYWdlbmF0ZT17cGFnZW5hdGV9IGRhdGFMZW5ndGg9e21haW5Qb3N0c18xMDAxLmxlbmd0aH0gcG9zdHNQZXJQYWdlPXtwb3N0c1BlclBhZ2V9IG5vd1BhZ2U9e25vd1BhZ2V9IGdyb3VwUGFnZT17Z3JvdXBQYWdlfSBncm91cFBhZ2VBcnJheT17bm93R3JvdXBQYWdlQXJyYXl9IC8+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG59OyBcclxuXHJcbm1haW5Qb3N0c18xMDAxLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PntcclxuXHJcbiAgY29uc3QgcGFnZXMgPSBjb250ZXh0LnF1ZXJ5Lm5vd1BhZ2U7IFxyXG4gIGNvbnN0IGdyb3VwICA9cGFyc2VJbnQoY29udGV4dC5xdWVyeS5ncm91cCk7IFxyXG4gIHJldHVybiB7cGFnZXMsIGdyb3VwfTsgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluUG9zdHNfMTAwMTsgIl0sInNvdXJjZVJvb3QiOiIifQ==