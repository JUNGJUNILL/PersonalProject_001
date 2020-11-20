webpackHotUpdate("static\\development\\pages\\detailPage.js",{

/***/ "./pages/detailPage.js":
/*!*****************************!*\
  !*** ./pages/detailPage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_mainPosts_1001_mainPosts_1001__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/mainPosts_1001/mainPosts_1001 */ "./components/mainPosts_1001/mainPosts_1001.js");
/* harmony import */ var _components_mainPosts_1001_mainPosts_1001_comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/mainPosts_1001/mainPosts_1001_comments */ "./components/mainPosts_1001/mainPosts_1001_comments.js");
/* harmony import */ var _components_mainPosts_1001_mainPosts_1001_textArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mainPosts_1001/mainPosts_1001_textArea */ "./components/mainPosts_1001/mainPosts_1001_textArea.js");
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utilComponent/custumDateFormat */ "./utilComponent/custumDateFormat.js");




var _this = undefined,
    _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\detailPage.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










var detailPage = function detailPage(_ref) {
  _s();

  var nickName = _ref.nickName,
      postFlag = _ref.postFlag,
      postId = _ref.postId;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.mainPosts_1001;
  }),
      mainPosts_1001Info = _useSelector.mainPosts_1001Info,
      mainPosts_1001Comments = _useSelector.mainPosts_1001Comments;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth;
  }),
      userInfo = _useSelector2.userInfo;

  var blank_pattern = /^\s+|\s+&/g;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      insertClick = _useState[0],
      setInsertClick = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //댓글 리스트 
    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_8__["MAINPOSTS_1001_COMMENTS_REQUEST"],
      data: {
        postId: postId,
        nickName: nickName,
        postFlag: postFlag,
        who: userInfo
      }
    }); //상세 정보 

    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_8__["MAINPOSTS_1001_DETAIL_INFO_REQUEST"],
      data: {
        postId: postId,
        nickName: nickName,
        postFlag: postFlag
      }
    });
  }, []); //좋아요, 싫어요 버튼 

  var likeBtn = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (commentid, flag, likeDislike) {
    if (!userInfo) {
      alert('로그인이 필요한 서비스 입니다.');
      return;
    }

    if (flag === "Y") {
      alert('이미 좋아요! 싫어요! 했습니다.');
      return;
    } else {
      //댓글 좋아요!
      dispatch({
        type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_8__["MAINPOSTS_1001_COMMENTLIKE_REQUEST"],
        data: {
          commentid: commentid,
          postFlag: postFlag,
          postId: postId,
          flag: likeDislike,
          who: userInfo,
          nickName: nickName,
          mainPosts_1001Comments: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(mainPosts_1001Comments)
        }
      });
    }

    alert("".concat(likeDislike));
  }, [mainPosts_1001Comments]); //댓글 입력 

  var insertComment = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (postFlag, postId, nickName, comment) {
    if (comment.length === 0 || comment.replace(blank_pattern, '') === "") {
      alert('댓글을 입력해 주세요!');
      return;
    }

    if (comment.length === 300) {
      alert('300자 이상 입력 할 수 없습니다.');
      return;
    } //댓글 입력


    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_8__["MAINPOSTS_1001_COMMENTINSERT_REQUEST"],
      data: {
        postId: postId,
        postFlag: postFlag,
        nickName: nickName,
        who: userInfo,
        comment: comment
      }
    });
    console.log('댓글 입력 후 ', mainPosts_1001Comments); //setMainPosts_1001_commentsArray([...mainPosts_1001Comments]); 
    //console.log('mainPosts_1001Comments=>' , mainPosts_1001Comments); 
    //
    //댓글 리스트 
    //   dispatch({
    //     type:MAINPOSTS_1001_COMMENTS_REQUEST, 
    //     data:{
    //       postId,
    //       nickName,
    //       postFlag,
    //       who:userInfo,
    //     }
    // }); 
    // console.log('빠락스 비어 Array=>' , mainPosts_1001_commentsArray); 
    // setMainPosts_1001_commentsArray([mainPosts_1001Comments[0],...mainPosts_1001_commentsArray]);
    //
  }, [mainPosts_1001Comments]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "divTable",
    style: {
      marginTop: '3%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }, mainPosts_1001Info[0].title, " [", mainPosts_1001Comments.length, "]")), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["UserOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }), "  ", mainPosts_1001Info[0].userNickName, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 73
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["FieldTimeOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }), "  ", Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_11__["default"])(mainPosts_1001Info[0].createdDate), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 95
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }), " : ", mainPosts_1001Info[0].good, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 88
    }
  }), " : ", mainPosts_1001Info[0].bad))), __jsx("div", {
    style: {
      width: "100%",
      height: "auto",
      border: "1px solid",
      borderColor: "#8cc49c",
      marginTop: "1%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }, "\uAD11\uACE0\uC785\uB2C8\uB2E4."), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "1%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 6
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: mainPosts_1001Info[0].content
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      width: "100%",
      height: "auto",
      border: "1px solid",
      borderColor: "#8cc49c",
      marginTop: "1%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 5
    }
  }, "\uAD11\uACE0\uC785\uB2C8\uB2E4."), __jsx("div", {
    className: "divTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  })), "\xA0\xA0\xA0\xA0", __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 90
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 98
    }
  })))), __jsx(_components_mainPosts_1001_mainPosts_1001_textArea__WEBPACK_IMPORTED_MODULE_7__["default"], {
    postFlag: postFlag,
    nickName: nickName,
    postId: postId,
    userInfo: userInfo,
    insertComment: insertComment,
    insertClick: insertClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "divTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 5
    }
  }, mainPosts_1001Comments && mainPosts_1001Comments.map(function (v, i) {
    return __jsx(_components_mainPosts_1001_mainPosts_1001_comments__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: i,
      postFlag: postFlag,
      nickName: nickName,
      postId: postId,
      userInfo: userInfo,
      commentId: v.commentId,
      comment: v.comment,
      who: v.who,
      flag: v.flag,
      good: v.good,
      bad: v.bad,
      createdDate: v.createdDate,
      likeBtn: likeBtn,
      clickedComponent: v.clickedComponent,
      likeDislikeflag: v.likeDislikeflag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 9
      }
    });
  })));
};

_s(detailPage, "7rp9nXxRJWFFHqiaUuntfic5WFM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

detailPage.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var postId, nickName, postFlag;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            postId = context.query.postId;
            nickName = context.query.nickName;
            postFlag = context.query.postFlag;
            return _context.abrupt("return", {
              nickName: nickName,
              postFlag: postFlag,
              postId: postId
            });

          case 4:
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

/* harmony default export */ __webpack_exports__["default"] = (detailPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIl0sIm5hbWVzIjpbImRldGFpbFBhZ2UiLCJuaWNrTmFtZSIsInBvc3RGbGFnIiwicG9zdElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJtYWluUG9zdHNfMTAwMSIsIm1haW5Qb3N0c18xMDAxSW5mbyIsIm1haW5Qb3N0c18xMDAxQ29tbWVudHMiLCJhdXRoIiwidXNlckluZm8iLCJibGFua19wYXR0ZXJuIiwidXNlU3RhdGUiLCJpbnNlcnRDbGljayIsInNldEluc2VydENsaWNrIiwidXNlRWZmZWN0IiwidHlwZSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QiLCJkYXRhIiwid2hvIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCIsImxpa2VCdG4iLCJ1c2VDYWxsYmFjayIsImNvbW1lbnRpZCIsImZsYWciLCJsaWtlRGlzbGlrZSIsImFsZXJ0IiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCIsImluc2VydENvbW1lbnQiLCJjb21tZW50IiwibGVuZ3RoIiwicmVwbGFjZSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiLCJ0aXRsZSIsInVzZXJOaWNrTmFtZSIsImN1c3R1bURhdGVGb3JtYXQiLCJjcmVhdGVkRGF0ZSIsImdvb2QiLCJiYWQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIl9faHRtbCIsImNvbnRlbnQiLCJtYXAiLCJ2IiwiaSIsImNvbW1lbnRJZCIsImNsaWNrZWRDb21wb25lbnQiLCJsaWtlRGlzbGlrZWZsYWciLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7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QUFBQTtBQUFBO0FBQUE7QUFFckJ6RCxrQkFGcUIsR0FFVnlELE9BQU8sQ0FBQ0MsS0FBUixDQUFjMUQsTUFGSjtBQUdyQkYsb0JBSHFCLEdBR1YyRCxPQUFPLENBQUNDLEtBQVIsQ0FBYzVELFFBSEo7QUFJckJDLG9CQUpxQixHQUlWMEQsT0FBTyxDQUFDQyxLQUFSLENBQWMzRCxRQUpKO0FBQUEsNkNBS3BCO0FBQUNELHNCQUFRLEVBQVJBLFFBQUQ7QUFBVUMsc0JBQVEsRUFBUkEsUUFBVjtBQUFtQkMsb0JBQU0sRUFBTkE7QUFBbkIsYUFMb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT2VILHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkZXRhaWxQYWdlLmpzLjg0ZWZlNWExMmYzMGY4NWQ2ODc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssdXNlRWZmZWN0LCB1c2VTdGF0ZSwgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMSdcclxuaW1wb3J0IENvbW1lbnRzMTAwMSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxX2NvbW1lbnRzJ1xyXG5pbXBvcnQgQ29tbWVudFRleHRBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFfdGV4dEFyZWEnXHJcbmltcG9ydCBcclxuICAgIHtNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QsIFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNUXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMSc7IFxyXG5cclxuaW1wb3J0IHtEaXNsaWtlVHdvVG9uZSxMaWtlVHdvVG9uZSAsIFVzZXJPdXRsaW5lZCwgRmllbGRUaW1lT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IGN1c3R1bURhdGVGb3JtYXQgZnJvbSAgJy4uL3V0aWxDb21wb25lbnQvY3VzdHVtRGF0ZUZvcm1hdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IGRldGFpbFBhZ2UgID0gKHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWR9KSA9PntcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICBjb25zdCB7bWFpblBvc3RzXzEwMDFJbmZvICwgXHJcbiAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudHMsXHJcbiAgICAgICAgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLm1haW5Qb3N0c18xMDAxKTsgXHJcblxyXG4gIGNvbnN0IHt1c2VySW5mb30gICAgICA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmF1dGgpO1xyXG5cclxuICBjb25zdCBibGFua19wYXR0ZXJuID0gL15cXHMrfFxccysmL2c7ICBcclxuICBjb25zdCBbaW5zZXJ0Q2xpY2ssIHNldEluc2VydENsaWNrXSA9IHVzZVN0YXRlKCcnKTsgXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICBcclxuICAgIC8v64yT6riAIOumrOyKpO2KuCBcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULCBcclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgcG9zdElkLFxyXG4gICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgIHdobzp1c2VySW5mbywgXHJcbiAgICAgIH1cclxuICAgIH0pOyBcclxuXHJcbiAgICAvL+yDgeyEuCDsoJXrs7QgXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH0sW10pO1xyXG5cclxuXHJcbiAgLy/soovslYTsmpQsIOyLq+yWtOyalCDrsoTtirwgXHJcbiAgY29uc3QgbGlrZUJ0biA9dXNlQ2FsbGJhY2soKGNvbW1lbnRpZCxmbGFnLGxpa2VEaXNsaWtlKT0+e1xyXG4gICAgICBpZighdXNlckluZm8pe1xyXG4gICAgICAgIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWcIOyEnOu5hOyKpCDsnoXri4jri6QuJyk7IFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoZmxhZz09PVwiWVwiKXtcclxuICAgICAgICBcclxuICAgICAgICBhbGVydCgn7J2066+4IOyii+yVhOyalCEg7Iur7Ja07JqUISDtlojsirXri4jri6QuJyk7IFxyXG4gICAgICAgIHJldHVybjsgXHJcbiAgXHJcbiAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAvL+uMk+q4gCDsoovslYTsmpQhXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNULCBcclxuICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICBjb21tZW50aWQsXHJcbiAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgIGZsYWc6IGxpa2VEaXNsaWtlICxcclxuICAgICAgICAgICAgd2hvOiB1c2VySW5mbyxcclxuICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudHM6Wy4uLm1haW5Qb3N0c18xMDAxQ29tbWVudHNdLFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgICBhbGVydChgJHtsaWtlRGlzbGlrZX1gKTsgXHJcbiAgICBcclxuICAgIH0sW21haW5Qb3N0c18xMDAxQ29tbWVudHNdKTsgXHJcblxyXG5cclxuXHJcblxyXG4gIC8v64yT6riAIOyeheugpSBcclxuICBjb25zdCBpbnNlcnRDb21tZW50ID0gdXNlQ2FsbGJhY2soKHBvc3RGbGFnLHBvc3RJZCxuaWNrTmFtZSAsY29tbWVudCk9PntcclxuICAgIGlmKGNvbW1lbnQubGVuZ3RoID09PSAwIHx8IGNvbW1lbnQucmVwbGFjZShibGFua19wYXR0ZXJuLCcnKT09PVwiXCIpe1xyXG4gICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgYWxlcnQoJ+uMk+q4gOydhCDsnoXroKXtlbQg7KO87IS47JqUIScpOyBcclxuICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYoY29tbWVudC5sZW5ndGggPT09IDMwMCl7XHJcbiAgICAgICAgICBhbGVydCgnMzAw7J6QIOydtOyDgSDsnoXroKUg7ZWgIOyImCDsl4bsirXri4jri6QuJyk7IFxyXG4gICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy/rjJPquIAg7J6F66ClXHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNULCBcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICAgIG5pY2tOYW1lICxcclxuICAgICAgICAgICAgICB3aG86dXNlckluZm8sIFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygn64yT6riAIOyeheugpSDtm4QgJyxtYWluUG9zdHNfMTAwMUNvbW1lbnRzICk7IFxyXG4gICAgICAgIC8vc2V0TWFpblBvc3RzXzEwMDFfY29tbWVudHNBcnJheShbLi4ubWFpblBvc3RzXzEwMDFDb21tZW50c10pOyBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdtYWluUG9zdHNfMTAwMUNvbW1lbnRzPT4nICwgbWFpblBvc3RzXzEwMDFDb21tZW50cyk7IFxyXG4gICAgICAgIC8vXHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgICAvL+uMk+q4gCDrpqzsiqTtirggXHJcbiAgICAgICAgLy8gICBkaXNwYXRjaCh7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCwgXHJcbiAgICAgICAgLy8gICAgIGRhdGE6e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgcG9zdElkLFxyXG4gICAgICAgIC8vICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgIC8vICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgIC8vICAgICAgIHdobzp1c2VySW5mbyxcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pOyBcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKCfruaDrnb3siqQg67mE7Ja0IEFycmF5PT4nICwgbWFpblBvc3RzXzEwMDFfY29tbWVudHNBcnJheSk7IFxyXG4gICAgICAgIC8vIHNldE1haW5Qb3N0c18xMDAxX2NvbW1lbnRzQXJyYXkoW21haW5Qb3N0c18xMDAxQ29tbWVudHNbMF0sLi4ubWFpblBvc3RzXzEwMDFfY29tbWVudHNBcnJheV0pO1xyXG5cclxuICAgICAgIC8vXHJcblxyXG5cclxuICAgICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50c10pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIFxyXG4gICAgPGRpdiA+XHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIO2DgOydtO2LgC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZScgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3dUaCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPnttYWluUG9zdHNfMTAwMUluZm9bMF0udGl0bGV9IFt7bWFpblBvc3RzXzEwMDFDb21tZW50cy5sZW5ndGh9XTwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz5cclxuICAgICAgICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPiAge21haW5Qb3N0c18xMDAxSW5mb1swXS51c2VyTmlja05hbWV9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFRpbWVPdXRsaW5lZCAvPiAge2N1c3R1bURhdGVGb3JtYXQobWFpblBvc3RzXzEwMDFJbmZvWzBdLmNyZWF0ZWREYXRlKX08YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpa2VUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+IDoge21haW5Qb3N0c18xMDAxSW5mb1swXS5nb29kfSA8RGlzbGlrZVR3b1RvbmUgIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+IDoge21haW5Qb3N0c18xMDAxSW5mb1swXS5iYWR9IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDtg4DsnbTti4AtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcImF1dG9cIiwgYm9yZGVyOlwiMXB4IHNvbGlkXCIsIGJvcmRlckNvbG9yOlwiIzhjYzQ5Y1wiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAgICAg6rSR6rOg7J6F64uI64ukLlxyXG4gICAgICA8L2Rpdj5cclxuICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7Luo7YWQ7LigLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDptYWluUG9zdHNfMTAwMUluZm9bMF0uY29udGVudH19Lz5cclxuICAgICA8L2Rpdj4gXHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIOy7qO2FkOy4oC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99ICAgXHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiYXV0b1wiLCBib3JkZXI6XCIxcHggc29saWRcIiwgYm9yZGVyQ29sb3I6XCIjOGNjNDljXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICDqtJHqs6DsnoXri4jri6QuXHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgIHsvKuyii+yVhOyalCDsi6vslrTsmpQg67KE7Yq8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZSc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJyBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgIDxCdXR0b24+PExpa2VUd29Ub25lICB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPjwvQnV0dG9uPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzxCdXR0b24+PERpc2xpa2VUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+PC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICB7LyrsoovslYTsmpQg7Iur7Ja07JqUIOuyhO2KvC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuuMk+q4gCDsnoXroKUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICA8Q29tbWVudFRleHRBcmVhICAgXHJcbiAgICAgICAgICAgIHBvc3RGbGFnPXtwb3N0RmxhZ30gXHJcbiAgICAgICAgICAgIG5pY2tOYW1lPXtuaWNrTmFtZX0gXHJcbiAgICAgICAgICAgIHBvc3RJZD17cG9zdElkfSBcclxuICAgICAgICAgICAgdXNlckluZm89e3VzZXJJbmZvfVxyXG4gICAgICAgICAgICBpbnNlcnRDb21tZW50PXtpbnNlcnRDb21tZW50fVxyXG4gICAgICAgICAgICBpbnNlcnRDbGljaz17aW5zZXJ0Q2xpY2t9XHJcbiAgIC8+XHJcbiAgICB7LyrrjJPquIAg7J6F66ClLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcblxyXG5cclxuXHJcbiAgICB7LyrrjJPquIAg66as7Iqk7Yq4LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlRhYmxlXCI+XHJcbiAgICAgIHttYWluUG9zdHNfMTAwMUNvbW1lbnRzICYmIG1haW5Qb3N0c18xMDAxQ29tbWVudHMubWFwKCh2LGkpPT5cclxuXHJcbiAgICAgICAgPENvbW1lbnRzMTAwMSBcclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgcG9zdEZsYWc9e3Bvc3RGbGFnfSBcclxuICAgICAgICAgICAgICBuaWNrTmFtZT17bmlja05hbWV9IFxyXG4gICAgICAgICAgICAgIHBvc3RJZD17cG9zdElkfSBcclxuICAgICAgICAgICAgICB1c2VySW5mbz17dXNlckluZm99XHJcbiAgICBcclxuICAgICAgICAgICAgICBjb21tZW50SWQ9e3YuY29tbWVudElkfSBcclxuICAgICAgICAgICAgICBjb21tZW50PXt2LmNvbW1lbnR9IFxyXG4gICAgICAgICAgICAgIHdobz17di53aG99IFxyXG4gICAgICAgICAgICAgIGZsYWc9e3YuZmxhZ30gXHJcblxyXG4gICAgICAgICAgICAgIGdvb2Q9e3YuZ29vZH1cclxuICAgICAgICAgICAgICBiYWQ9e3YuYmFkfSAgICAgIFxyXG4gICAgICAgICAgICAgIGNyZWF0ZWREYXRlPXt2LmNyZWF0ZWREYXRlfSBcclxuICAgIFxyXG4gICAgICAgICAgICAgIGxpa2VCdG49e2xpa2VCdG59XHJcblxyXG4gICAgICAgICAgICAgIGNsaWNrZWRDb21wb25lbnQ9e3YuY2xpY2tlZENvbXBvbmVudH1cclxuICAgICAgICAgICAgICBsaWtlRGlzbGlrZWZsYWc9e3YubGlrZURpc2xpa2VmbGFnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgIFxyXG4gICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgICB7LyrrjJPquIAg66as7Iqk7Yq4LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbn1cclxuXHJcblxyXG5kZXRhaWxQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PntcclxuXHJcbiAgY29uc3QgcG9zdElkICAgPSBjb250ZXh0LnF1ZXJ5LnBvc3RJZDsgXHJcbiAgY29uc3Qgbmlja05hbWUgPSBjb250ZXh0LnF1ZXJ5Lm5pY2tOYW1lOyBcclxuICBjb25zdCBwb3N0RmxhZyA9IGNvbnRleHQucXVlcnkucG9zdEZsYWc7IFxyXG4gIHJldHVybiB7bmlja05hbWUscG9zdEZsYWcscG9zdElkfTsgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZGV0YWlsUGFnZTsgIl0sInNvdXJjZVJvb3QiOiIifQ==