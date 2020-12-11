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
      mainPosts_1001Comments = _useSelector.mainPosts_1001Comments,
      mainPosts_1001CommentByComments = _useSelector.mainPosts_1001CommentByComments;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth;
  }),
      userInfo = _useSelector2.userInfo;

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["createRef"])();
  var blank_pattern = /^\s+|\s+&/g;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('fold'),
      unfoldList = _useState[0],
      setUnfoldList = _useState[1];

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
        postFlag: postFlag,
        who: userInfo
      }
    });
  }, []); //게시글 좋아요, 실어요 버튼

  var postLikeBtn = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (likeFlag) {
    //게시글 좋아요!
    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_8__["MAINPOSTS_1001_MAINPOSTLIKE_REQUEST"],
      data: {
        postId: postId,
        nickName: nickName,
        postFlag: postFlag,
        who: userInfo,
        flag: likeFlag
      }
    });
  }, [mainPosts_1001Info]); //댓글 좋아요, 싫어요 버튼 

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

      if (ref.current) {
        ref.current.focusInput();
      }

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
    setUnfoldList('fold'); //인풋 초기화, 포커스 

    if (ref.current) {
      ref.current.clearInput();
      ref.current.focusInput();
    }
  }, [mainPosts_1001Comments, ref]); //대댓글 리스트 

  var commentByCommentList = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (postFlag, nickName, postId, commentId, clickCommentId, unfoldList) {
    if (unfoldList === 'unfold' && commentId === clickCommentId) {
      setUnfoldList('fold');
    } else {
      setUnfoldList('unfold');
    }

    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_8__["MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST"],
      data: {
        postFlag: postFlag,
        nickName: nickName,
        postId: postId,
        commentId: commentId,
        who: userInfo
      }
    });
  }, [mainPosts_1001CommentByComments, unfoldList]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
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
      lineNumber: 191,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, mainPosts_1001Info[0].title, " [", mainPosts_1001Comments.length, "]")), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["UserOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 19
    }
  }), "  ", mainPosts_1001Info[0].userNickName, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 73
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["FieldTimeOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 19
    }
  }), "  ", Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_11__["default"])(mainPosts_1001Info[0].createdDate), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 95
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  }), " : ", mainPosts_1001Info[0].good, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
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
      lineNumber: 205,
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
      lineNumber: 215,
      columnNumber: 6
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: mainPosts_1001Info[0].content
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
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
      lineNumber: 224,
      columnNumber: 5
    }
  }, "\uAD11\uACE0\uC785\uB2C8\uB2E4."), __jsx("div", {
    className: "divTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
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
      lineNumber: 234,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onClick: function onClick() {
      return postLikeBtn('good');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 53
    }
  })), "\xA0\xA0\xA0\xA0", __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onClick: function onClick() {
      return postLikeBtn('bad');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 124
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 165
    }
  })))), __jsx(_components_mainPosts_1001_mainPosts_1001_textArea__WEBPACK_IMPORTED_MODULE_7__["default"], {
    postFlag: postFlag,
    nickName: nickName,
    postId: postId,
    userInfo: userInfo,
    insertComment: insertComment,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "divTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
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
      byCommentCount: v.byCommentCount,
      commentByCommentList: commentByCommentList,
      mainPosts_1001CommentByComments: mainPosts_1001CommentByComments[0] && mainPosts_1001CommentByComments[0].commentId === v.commentId ? mainPosts_1001CommentByComments : '',
      unfoldList: unfoldList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 9
      }
    });
  })));
};

_s(detailPage, "ePNCNE3auzKMvRJxsCgRT1VM1to=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIl0sIm5hbWVzIjpbImRldGFpbFBhZ2UiLCJuaWNrTmFtZSIsInBvc3RGbGFnIiwicG9zdElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJtYWluUG9zdHNfMTAwMSIsIm1haW5Qb3N0c18xMDAxSW5mbyIsIm1haW5Qb3N0c18xMDAxQ29tbWVudHMiLCJtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzIiwiYXV0aCIsInVzZXJJbmZvIiwicmVmIiwiY3JlYXRlUmVmIiwiYmxhbmtfcGF0dGVybiIsInVzZVN0YXRlIiwidW5mb2xkTGlzdCIsInNldFVuZm9sZExpc3QiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCIsImRhdGEiLCJ3aG8iLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUIiwicG9zdExpa2VCdG4iLCJ1c2VDYWxsYmFjayIsImxpa2VGbGFnIiwiTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1QiLCJmbGFnIiwibGlrZUJ0biIsImNvbW1lbnRpZCIsImxpa2VEaXNsaWtlIiwiYWxlcnQiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNUIiwiaW5zZXJ0Q29tbWVudCIsImNvbW1lbnQiLCJsZW5ndGgiLCJyZXBsYWNlIiwiY3VycmVudCIsImZvY3VzSW5wdXQiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QiLCJjbGVhcklucHV0IiwiY29tbWVudEJ5Q29tbWVudExpc3QiLCJjb21tZW50SWQiLCJjbGlja0NvbW1lbnRJZCIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCIsIm1hcmdpblRvcCIsInRpdGxlIiwidXNlck5pY2tOYW1lIiwiY3VzdHVtRGF0ZUZvcm1hdCIsImNyZWF0ZWREYXRlIiwiZ29vZCIsImJhZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiX19odG1sIiwiY29udGVudCIsIm1hcCIsInYiLCJpIiwiY2xpY2tlZENvbXBvbmVudCIsImxpa2VEaXNsaWtlZmxhZyIsImJ5Q29tbWVudENvdW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLFVBQVUsR0FBSSxTQUFkQSxVQUFjLE9BQStCO0FBQUE7O0FBQUEsTUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLE1BQXBCQyxRQUFvQixRQUFwQkEsUUFBb0I7QUFBQSxNQUFYQyxNQUFXLFFBQVhBLE1BQVc7QUFFakQsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGaUQscUJBTXZDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNDLGNBQWY7QUFBQSxHQUFELENBTjRCO0FBQUEsTUFHMUNDLGtCQUgwQyxnQkFHMUNBLGtCQUgwQztBQUFBLE1BSTFDQyxzQkFKMEMsZ0JBSTFDQSxzQkFKMEM7QUFBQSxNQUsxQ0MsK0JBTDBDLGdCQUsxQ0EsK0JBTDBDOztBQUFBLHNCQVF6QkwsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDSyxJQUFmO0FBQUEsR0FBRCxDQVJjO0FBQUEsTUFRMUNDLFFBUjBDLGlCQVExQ0EsUUFSMEM7O0FBU2pELE1BQU1DLEdBQUcsR0FBR0MsdURBQVMsRUFBckI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsWUFBdEI7O0FBVmlELGtCQVdkQyxzREFBUSxDQUFDLE1BQUQsQ0FYTTtBQUFBLE1BVzFDQyxVQVgwQztBQUFBLE1BVy9CQyxhQVgr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QUFEO0FBQVVDLHNCQUFRLEVBQVJBLFFBQVY7QUFBbUJDLG9CQUFNLEVBQU5BO0FBQW5CLGFBTG9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9lSCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGV0YWlsUGFnZS5qcy5jZmNhNGEzMjc1YzU1Mzc2MGEwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDEnXHJcbmltcG9ydCBDb21tZW50czEwMDEgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMV9jb21tZW50cydcclxuaW1wb3J0IENvbW1lbnRUZXh0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxX3RleHRBcmVhJ1xyXG5pbXBvcnQgXHJcbiAgICB7TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULCBcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1RcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxJzsgXHJcblxyXG5pbXBvcnQge0Rpc2xpa2VUd29Ub25lLExpa2VUd29Ub25lICwgVXNlck91dGxpbmVkLCBGaWVsZFRpbWVPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgY3VzdHVtRGF0ZUZvcm1hdCBmcm9tICAnLi4vdXRpbENvbXBvbmVudC9jdXN0dW1EYXRlRm9ybWF0JztcclxuXHJcblxyXG5cclxuY29uc3QgZGV0YWlsUGFnZSAgPSAoe25pY2tOYW1lLHBvc3RGbGFnLHBvc3RJZH0pID0+e1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gIGNvbnN0IHttYWluUG9zdHNfMTAwMUluZm8gLCBcclxuICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50cyxcclxuICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c1xyXG4gICAgICAgIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5tYWluUG9zdHNfMTAwMSk7IFxyXG5cclxuICBjb25zdCB7dXNlckluZm99ICAgICAgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5hdXRoKTtcclxuICBjb25zdCByZWYgPSBjcmVhdGVSZWYoKTsgXHJcbiAgY29uc3QgYmxhbmtfcGF0dGVybiA9IC9eXFxzK3xcXHMrJi9nOyAgXHJcbiAgY29uc3QgW3VuZm9sZExpc3Qsc2V0VW5mb2xkTGlzdF0gPSB1c2VTdGF0ZSgnZm9sZCcpOyBcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBcclxuICAgIC8v64yT6riAIOumrOyKpO2KuCBcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULCBcclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgcG9zdElkLFxyXG4gICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgIHdobzp1c2VySW5mbywgXHJcbiAgICAgIH1cclxuICAgIH0pOyBcclxuXHJcbiAgICAvL+yDgeyEuCDsoJXrs7QgXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICB3aG86dXNlckluZm8sXHJcbiAgICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSxbXSk7XHJcblxyXG4gIC8v6rKM7Iuc6riAIOyii+yVhOyalCwg7Iuk7Ja07JqUIOuyhO2KvFxyXG4gIGNvbnN0IHBvc3RMaWtlQnRuID0gdXNlQ2FsbGJhY2soKGxpa2VGbGFnKT0+e1xyXG5cclxuXHJcbiAgICAvL+qyjOyLnOq4gCDsoovslYTsmpQhXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgICB3aG86IHVzZXJJbmZvLCBcclxuICAgICAgICAgICAgICBmbGFnOmxpa2VGbGFnLCBcclxuICAgICAgICAgICAgfVxyXG4gICAgfSk7IFxyXG4gIFxyXG5cclxuICB9LFttYWluUG9zdHNfMTAwMUluZm9dKVxyXG5cclxuXHJcbiAgLy/rjJPquIAg7KKL7JWE7JqULCDsi6vslrTsmpQg67KE7Yq8IFxyXG4gIGNvbnN0IGxpa2VCdG4gPXVzZUNhbGxiYWNrKChjb21tZW50aWQsZmxhZyxsaWtlRGlzbGlrZSk9PntcclxuICAgICAgaWYoIXVzZXJJbmZvKXtcclxuICAgICAgICBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VnCDshJzruYTsiqQg7J6F64uI64ukLicpOyBcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGZsYWc9PT1cIllcIil7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWxlcnQoJ+ydtOuvuCDsoovslYTsmpQhIOyLq+yWtOyalCEg7ZaI7Iq164uI64ukLicpOyBcclxuICAgICAgICByZXR1cm47IFxyXG4gIFxyXG4gICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgLy/rjJPquIAg7KKL7JWE7JqUIVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCwgXHJcbiAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgY29tbWVudGlkLFxyXG4gICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICBmbGFnOiBsaWtlRGlzbGlrZSAsXHJcbiAgICAgICAgICAgIHdobzogdXNlckluZm8sXHJcbiAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICBtYWluUG9zdHNfMTAwMUNvbW1lbnRzOlsuLi5tYWluUG9zdHNfMTAwMUNvbW1lbnRzXSxcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICAgYWxlcnQoYCR7bGlrZURpc2xpa2V9YCk7IFxyXG4gICAgXHJcbiAgICB9LFttYWluUG9zdHNfMTAwMUNvbW1lbnRzXSk7IFxyXG5cclxuXHJcbiAgLy/rjJPquIAg7J6F66ClIFxyXG4gIGNvbnN0IGluc2VydENvbW1lbnQgPSB1c2VDYWxsYmFjaygocG9zdEZsYWcscG9zdElkLG5pY2tOYW1lICxjb21tZW50KT0+e1xyXG4gICAgaWYoY29tbWVudC5sZW5ndGggPT09IDAgfHwgY29tbWVudC5yZXBsYWNlKGJsYW5rX3BhdHRlcm4sJycpPT09XCJcIil7XHJcbiAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICBhbGVydCgn64yT6riA7J2EIOyeheugpe2VtCDso7zshLjsmpQhJyk7IFxyXG4gICAgICAgIGlmKHJlZi5jdXJyZW50KXtcclxuICAgICAgICAgIHJlZi5jdXJyZW50LmZvY3VzSW5wdXQoKTsgXHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmKGNvbW1lbnQubGVuZ3RoID09PSAzMDApe1xyXG4gICAgICAgICAgYWxlcnQoJzMwMOyekCDsnbTsg4Eg7J6F66ClIO2VoCDsiJgg7JeG7Iq164uI64ukLicpOyBcclxuICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgIC8v64yT6riAIOyeheugpVxyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVCwgXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgICBuaWNrTmFtZSAsXHJcbiAgICAgICAgICAgICAgd2hvOnVzZXJJbmZvLCBcclxuICAgICAgICAgICAgICBjb21tZW50LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFVuZm9sZExpc3QoJ2ZvbGQnKTsgXHJcblxyXG5cclxuICAgICAgICAgLy/snbjtkosg7LSI6riw7ZmULCDtj6zsu6TsiqQgXHJcbiAgICAgICAgaWYocmVmLmN1cnJlbnQpe1xyXG4gICAgICAgICAgcmVmLmN1cnJlbnQuY2xlYXJJbnB1dCgpOyBcclxuICAgICAgICAgIHJlZi5jdXJyZW50LmZvY3VzSW5wdXQoKTsgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIH0sW21haW5Qb3N0c18xMDAxQ29tbWVudHMscmVmXSk7XHJcblxyXG5cclxuXHJcbiAgICAgIC8v64yA64yT6riAIOumrOyKpO2KuCBcclxuICAgICAgY29uc3QgY29tbWVudEJ5Q29tbWVudExpc3QgPXVzZUNhbGxiYWNrKChwb3N0RmxhZyxuaWNrTmFtZSxwb3N0SWQsY29tbWVudElkLGNsaWNrQ29tbWVudElkLHVuZm9sZExpc3QpPT57XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYodW5mb2xkTGlzdD09PSd1bmZvbGQnICYmIGNvbW1lbnRJZCA9PT0gY2xpY2tDb21tZW50SWQpe1xyXG4gICAgICAgICAgICAgICAgICBzZXRVbmZvbGRMaXN0KCdmb2xkJyk7IFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIHNldFVuZm9sZExpc3QoJ3VuZm9sZCcpOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdobzp1c2VySW5mbyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTsgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICB9LFttYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzLHVuZm9sZExpc3RdKTsgXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBcclxuICAgIDxkaXYgPlxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDtg4DsnbTti4AtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGUnIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93VGgnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz57bWFpblBvc3RzXzEwMDFJbmZvWzBdLnRpdGxlfSBbe21haW5Qb3N0c18xMDAxQ29tbWVudHMubGVuZ3RofV08L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+XHJcbiAgICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4gIHttYWluUG9zdHNfMTAwMUluZm9bMF0udXNlck5pY2tOYW1lfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGRUaW1lT3V0bGluZWQgLz4gIHtjdXN0dW1EYXRlRm9ybWF0KG1haW5Qb3N0c18xMDAxSW5mb1swXS5jcmVhdGVkRGF0ZSl9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHttYWluUG9zdHNfMTAwMUluZm9bMF0uZ29vZH0gPERpc2xpa2VUd29Ub25lICB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHttYWluUG9zdHNfMTAwMUluZm9bMF0uYmFkfSBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7YOA7J207YuALS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCJhdXRvXCIsIGJvcmRlcjpcIjFweCBzb2xpZFwiLCBib3JkZXJDb2xvcjpcIiM4Y2M0OWNcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgICAgIOq0keqzoOyeheuLiOuLpC5cclxuICAgICAgPC9kaXY+XHJcbiAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIOy7qO2FkOy4oC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6bWFpblBvc3RzXzEwMDFJbmZvWzBdLmNvbnRlbnR9fS8+XHJcbiAgICAgPC9kaXY+IFxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDsu6jthZDsuKAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfSAgIFxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcImF1dG9cIiwgYm9yZGVyOlwiMXB4IHNvbGlkXCIsIGJvcmRlckNvbG9yOlwiIzhjYzQ5Y1wiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAg6rSR6rOg7J6F64uI64ukLlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuyii+yVhOyalCDsi6vslrTsmpQg67KE7Yq8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZSc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJyBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PnBvc3RMaWtlQnRuKCdnb29kJyl9PjxMaWtlVHdvVG9uZSAgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz48L0J1dHRvbj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8QnV0dG9uIG9uQ2xpY2s9eygpPT5wb3N0TGlrZUJ0bignYmFkJyl9PjxEaXNsaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPjwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgey8q7KKL7JWE7JqUIOyLq+yWtOyalCDrsoTtirwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB7LyrrjJPquIAg7J6F66ClLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgPENvbW1lbnRUZXh0QXJlYSAgIFxyXG4gICAgICAgICAgICBwb3N0RmxhZz17cG9zdEZsYWd9IFxyXG4gICAgICAgICAgICBuaWNrTmFtZT17bmlja05hbWV9IFxyXG4gICAgICAgICAgICBwb3N0SWQ9e3Bvc3RJZH0gXHJcbiAgICAgICAgICAgIHVzZXJJbmZvPXt1c2VySW5mb31cclxuICAgICAgICAgICAgaW5zZXJ0Q29tbWVudD17aW5zZXJ0Q29tbWVudH1cclxuICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgIC8+XHJcbiAgICB7LyrrjJPquIAg7J6F66ClLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcblxyXG5cclxuXHJcbiAgICB7LyrrjJPquIAg66as7Iqk7Yq4LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlRhYmxlXCI+XHJcbiAgICAgIHttYWluUG9zdHNfMTAwMUNvbW1lbnRzICYmIG1haW5Qb3N0c18xMDAxQ29tbWVudHMubWFwKCh2LGkpPT5cclxuXHJcbiAgICAgICAgPENvbW1lbnRzMTAwMSBcclxuICAgICAgICAgICAgICBrZXk9e2l9IFxyXG4gICAgICAgICAgICAgIHBvc3RGbGFnPXtwb3N0RmxhZ30gXHJcbiAgICAgICAgICAgICAgbmlja05hbWU9e25pY2tOYW1lfSBcclxuICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3RJZH0gXHJcbiAgICAgICAgICAgICAgdXNlckluZm89e3VzZXJJbmZvfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgY29tbWVudElkPXt2LmNvbW1lbnRJZH0gXHJcbiAgICAgICAgICAgICAgY29tbWVudD17di5jb21tZW50fSBcclxuICAgICAgICAgICAgICB3aG89e3Yud2hvfSBcclxuICAgICAgICAgICAgICBmbGFnPXt2LmZsYWd9IFxyXG5cclxuICAgICAgICAgICAgICBnb29kPXt2Lmdvb2R9XHJcbiAgICAgICAgICAgICAgYmFkPXt2LmJhZH0gICAgICBcclxuICAgICAgICAgICAgICBjcmVhdGVkRGF0ZT17di5jcmVhdGVkRGF0ZX0gXHJcbiAgICBcclxuICAgICAgICAgICAgICBsaWtlQnRuPXtsaWtlQnRufVxyXG5cclxuICAgICAgICAgICAgICBjbGlja2VkQ29tcG9uZW50PXt2LmNsaWNrZWRDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgbGlrZURpc2xpa2VmbGFnPXt2Lmxpa2VEaXNsaWtlZmxhZ31cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBieUNvbW1lbnRDb3VudD17di5ieUNvbW1lbnRDb3VudH1cclxuICAgICAgICAgICAgICBjb21tZW50QnlDb21tZW50TGlzdD17Y29tbWVudEJ5Q29tbWVudExpc3R9XHJcbiAgICAgICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cz17bWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c1swXSAmJiBtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzWzBdLmNvbW1lbnRJZCA9PT0gdi5jb21tZW50SWQgPyBtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzIDogJyd9XHJcbiAgICAgICAgICAgICAgdW5mb2xkTGlzdD17dW5mb2xkTGlzdH1cclxuXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKuuMk+q4gCDrpqzsiqTtirgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxufVxyXG5cclxuXHJcbmRldGFpbFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+e1xyXG5cclxuICBjb25zdCBwb3N0SWQgICA9IGNvbnRleHQucXVlcnkucG9zdElkOyBcclxuICBjb25zdCBuaWNrTmFtZSA9IGNvbnRleHQucXVlcnkubmlja05hbWU7IFxyXG4gIGNvbnN0IHBvc3RGbGFnID0gY29udGV4dC5xdWVyeS5wb3N0RmxhZzsgXHJcbiAgcmV0dXJuIHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWR9OyBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWxQYWdlOyAiXSwic291cmNlUm9vdCI6IiJ9