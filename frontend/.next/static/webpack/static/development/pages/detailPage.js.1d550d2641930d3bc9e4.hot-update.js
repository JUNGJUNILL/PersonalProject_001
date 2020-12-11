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
    if (mainPosts_1001Info[0].flag === 'Y') {
      alert('이미 좋아요! 싫어요! 했습니다.');
      return;
    } //게시글 좋아요!


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
      lineNumber: 196,
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
      lineNumber: 198,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, mainPosts_1001Info[0].title, " [", mainPosts_1001Comments.length, "]")), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["UserOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 19
    }
  }), "  ", mainPosts_1001Info[0].userNickName, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 73
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["FieldTimeOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 19
    }
  }), "  ", Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_11__["default"])(mainPosts_1001Info[0].createdDate), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 95
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 19
    }
  }), " : ", mainPosts_1001Info[0].good, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
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
      lineNumber: 212,
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
      lineNumber: 222,
      columnNumber: 6
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: mainPosts_1001Info[0].content
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
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
      lineNumber: 231,
      columnNumber: 5
    }
  }, "\uAD11\uACE0\uC785\uB2C8\uB2E4."), __jsx("div", {
    className: "divTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
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
      lineNumber: 241,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onClick: function onClick() {
      return postLikeBtn('good');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 53
    }
  })), "\xA0\xA0\xA0\xA0", __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onClick: function onClick() {
      return postLikeBtn('bad');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 124
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
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
      lineNumber: 252,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "divTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
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
        lineNumber: 270,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIl0sIm5hbWVzIjpbImRldGFpbFBhZ2UiLCJuaWNrTmFtZSIsInBvc3RGbGFnIiwicG9zdElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJtYWluUG9zdHNfMTAwMSIsIm1haW5Qb3N0c18xMDAxSW5mbyIsIm1haW5Qb3N0c18xMDAxQ29tbWVudHMiLCJtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzIiwiYXV0aCIsInVzZXJJbmZvIiwicmVmIiwiY3JlYXRlUmVmIiwiYmxhbmtfcGF0dGVybiIsInVzZVN0YXRlIiwidW5mb2xkTGlzdCIsInNldFVuZm9sZExpc3QiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCIsImRhdGEiLCJ3aG8iLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUIiwicG9zdExpa2VCdG4iLCJ1c2VDYWxsYmFjayIsImxpa2VGbGFnIiwiZmxhZyIsImFsZXJ0IiwiTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1QiLCJsaWtlQnRuIiwiY29tbWVudGlkIiwibGlrZURpc2xpa2UiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNUIiwiaW5zZXJ0Q29tbWVudCIsImNvbW1lbnQiLCJsZW5ndGgiLCJyZXBsYWNlIiwiY3VycmVudCIsImZvY3VzSW5wdXQiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QiLCJjbGVhcklucHV0IiwiY29tbWVudEJ5Q29tbWVudExpc3QiLCJjb21tZW50SWQiLCJjbGlja0NvbW1lbnRJZCIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCIsIm1hcmdpblRvcCIsInRpdGxlIiwidXNlck5pY2tOYW1lIiwiY3VzdHVtRGF0ZUZvcm1hdCIsImNyZWF0ZWREYXRlIiwiZ29vZCIsImJhZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiX19odG1sIiwiY29udGVudCIsIm1hcCIsInYiLCJpIiwiY2xpY2tlZENvbXBvbmVudCIsImxpa2VEaXNsaWtlZmxhZyIsImJ5Q29tbWVudENvdW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLFVBQVUsR0FBSSxTQUFkQSxVQUFjLE9BQStCO0FBQUE7O0FBQUEsTUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLE1BQXBCQyxRQUFvQixRQUFwQkEsUUFBb0I7QUFBQSxNQUFYQyxNQUFXLFFBQVhBLE1BQVc7QUFFakQsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGaUQscUJBTXZDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNDLGNBQWY7QUFBQSxHQUFELENBTjRCO0FBQUEsTUFHMUNDLGtCQUgwQyxnQkFHMUNBLGtCQUgwQztBQUFBLE1BSTFDQyxzQkFKMEMsZ0JBSTFDQSxzQkFKMEM7QUFBQSxNQUsxQ0MsK0JBTDBDLGdCQUsxQ0EsK0JBTDBDOztBQUFBLHNCQVF6QkwsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDSyxJQUFmO0FBQUEsR0FBRCxDQVJjO0FBQUEsTUFRMUNDLFFBUjBDLGlCQVExQ0EsUUFSMEM7O0FBU2pELE1BQU1DLEdBQUcsR0FBR0MsdURBQVMsRUFBckI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsWUFBdEI7O0FBVmlELGtCQVdkQyxzREFBUSxDQUFDLE1BQUQsQ0FYTTtBQUFBLE1BVzFDQyxVQVgwQztBQUFBLE1BVy9CQyxhQVgr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R1ZzRSxPQUFPLENBQUNDLEtBQVIsQ0FBY3ZFLFFBSEo7QUFJckJDLG9CQUpxQixHQUlWcUUsT0FBTyxDQUFDQyxLQUFSLENBQWN0RSxRQUpKO0FBQUEsNkNBS3BCO0FBQUNELHNCQUFRLEVBQVJBLFFBQUQ7QUFBVUMsc0JBQVEsRUFBUkEsUUFBVjtBQUFtQkMsb0JBQU0sRUFBTkE7QUFBbkIsYUFMb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT2VILHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkZXRhaWxQYWdlLmpzLjFkNTUwZDI2NDE5MzBkM2JjOWU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssdXNlRWZmZWN0LCB1c2VTdGF0ZSwgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMSdcclxuaW1wb3J0IENvbW1lbnRzMTAwMSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxX2NvbW1lbnRzJ1xyXG5pbXBvcnQgQ29tbWVudFRleHRBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFfdGV4dEFyZWEnXHJcbmltcG9ydCBcclxuICAgIHtNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QsIFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfUkVRVUVTVFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvbWFpblBvc3RzXzEwMDEnOyBcclxuXHJcbmltcG9ydCB7RGlzbGlrZVR3b1RvbmUsTGlrZVR3b1RvbmUgLCBVc2VyT3V0bGluZWQsIEZpZWxkVGltZU91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnXHJcbmltcG9ydCBjdXN0dW1EYXRlRm9ybWF0IGZyb20gICcuLi91dGlsQ29tcG9uZW50L2N1c3R1bURhdGVGb3JtYXQnO1xyXG5cclxuXHJcblxyXG5jb25zdCBkZXRhaWxQYWdlICA9ICh7bmlja05hbWUscG9zdEZsYWcscG9zdElkfSkgPT57XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTsgXHJcbiAgY29uc3Qge21haW5Qb3N0c18xMDAxSW5mbyAsIFxyXG4gICAgICAgICBtYWluUG9zdHNfMTAwMUNvbW1lbnRzLFxyXG4gICAgICAgICBtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzXHJcbiAgICAgICAgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLm1haW5Qb3N0c18xMDAxKTsgXHJcblxyXG4gIGNvbnN0IHt1c2VySW5mb30gICAgICA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmF1dGgpO1xyXG4gIGNvbnN0IHJlZiA9IGNyZWF0ZVJlZigpOyBcclxuICBjb25zdCBibGFua19wYXR0ZXJuID0gL15cXHMrfFxccysmL2c7ICBcclxuICBjb25zdCBbdW5mb2xkTGlzdCxzZXRVbmZvbGRMaXN0XSA9IHVzZVN0YXRlKCdmb2xkJyk7IFxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIFxyXG4gICAgLy/rjJPquIAg66as7Iqk7Yq4IFxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QsIFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgd2hvOnVzZXJJbmZvLCBcclxuICAgICAgfVxyXG4gICAgfSk7IFxyXG5cclxuICAgIC8v7IOB7IS4IOygleuztCBcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCwgXHJcbiAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgIHdobzp1c2VySW5mbyxcclxuICAgICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9LFtdKTtcclxuXHJcbiAgLy/qsozsi5zquIAg7KKL7JWE7JqULCDsi6TslrTsmpQg67KE7Yq8XHJcbiAgY29uc3QgcG9zdExpa2VCdG4gPSB1c2VDYWxsYmFjaygobGlrZUZsYWcpPT57XHJcblxyXG5cclxuICAgIGlmKG1haW5Qb3N0c18xMDAxSW5mb1swXS5mbGFnPT09J1knKXtcclxuICAgICAgXHJcbiAgICAgIGFsZXJ0KCfsnbTrr7gg7KKL7JWE7JqUISDsi6vslrTsmpQhIO2WiOyKteuLiOuLpC4nKTsgICAgICAgXHJcbiAgICAgIHJldHVybjsgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL+qyjOyLnOq4gCDsoovslYTsmpQhXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgICB3aG86IHVzZXJJbmZvLCBcclxuICAgICAgICAgICAgICBmbGFnOmxpa2VGbGFnLCBcclxuICAgICAgICAgICAgfVxyXG4gICAgfSk7IFxyXG4gIFxyXG5cclxuICB9LFttYWluUG9zdHNfMTAwMUluZm9dKVxyXG5cclxuXHJcbiAgLy/rjJPquIAg7KKL7JWE7JqULCDsi6vslrTsmpQg67KE7Yq8IFxyXG4gIGNvbnN0IGxpa2VCdG4gPXVzZUNhbGxiYWNrKChjb21tZW50aWQsZmxhZyxsaWtlRGlzbGlrZSk9PntcclxuICAgICAgaWYoIXVzZXJJbmZvKXtcclxuICAgICAgICBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VnCDshJzruYTsiqQg7J6F64uI64ukLicpOyBcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGZsYWc9PT1cIllcIil7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWxlcnQoJ+ydtOuvuCDsoovslYTsmpQhIOyLq+yWtOyalCEg7ZaI7Iq164uI64ukLicpOyBcclxuICAgICAgICByZXR1cm47IFxyXG4gIFxyXG4gICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgLy/rjJPquIAg7KKL7JWE7JqUIVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCwgXHJcbiAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgY29tbWVudGlkLFxyXG4gICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICBmbGFnOiBsaWtlRGlzbGlrZSAsXHJcbiAgICAgICAgICAgIHdobzogdXNlckluZm8sXHJcbiAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICBtYWluUG9zdHNfMTAwMUNvbW1lbnRzOlsuLi5tYWluUG9zdHNfMTAwMUNvbW1lbnRzXSxcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICAgYWxlcnQoYCR7bGlrZURpc2xpa2V9YCk7IFxyXG4gICAgXHJcbiAgICB9LFttYWluUG9zdHNfMTAwMUNvbW1lbnRzXSk7IFxyXG5cclxuXHJcbiAgLy/rjJPquIAg7J6F66ClIFxyXG4gIGNvbnN0IGluc2VydENvbW1lbnQgPSB1c2VDYWxsYmFjaygocG9zdEZsYWcscG9zdElkLG5pY2tOYW1lICxjb21tZW50KT0+e1xyXG4gICAgaWYoY29tbWVudC5sZW5ndGggPT09IDAgfHwgY29tbWVudC5yZXBsYWNlKGJsYW5rX3BhdHRlcm4sJycpPT09XCJcIil7XHJcbiAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICBhbGVydCgn64yT6riA7J2EIOyeheugpe2VtCDso7zshLjsmpQhJyk7IFxyXG4gICAgICAgIGlmKHJlZi5jdXJyZW50KXtcclxuICAgICAgICAgIHJlZi5jdXJyZW50LmZvY3VzSW5wdXQoKTsgXHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmKGNvbW1lbnQubGVuZ3RoID09PSAzMDApe1xyXG4gICAgICAgICAgYWxlcnQoJzMwMOyekCDsnbTsg4Eg7J6F66ClIO2VoCDsiJgg7JeG7Iq164uI64ukLicpOyBcclxuICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgIC8v64yT6riAIOyeheugpVxyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVCwgXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgICBuaWNrTmFtZSAsXHJcbiAgICAgICAgICAgICAgd2hvOnVzZXJJbmZvLCBcclxuICAgICAgICAgICAgICBjb21tZW50LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFVuZm9sZExpc3QoJ2ZvbGQnKTsgXHJcblxyXG5cclxuICAgICAgICAgLy/snbjtkosg7LSI6riw7ZmULCDtj6zsu6TsiqQgXHJcbiAgICAgICAgaWYocmVmLmN1cnJlbnQpe1xyXG4gICAgICAgICAgcmVmLmN1cnJlbnQuY2xlYXJJbnB1dCgpOyBcclxuICAgICAgICAgIHJlZi5jdXJyZW50LmZvY3VzSW5wdXQoKTsgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIH0sW21haW5Qb3N0c18xMDAxQ29tbWVudHMscmVmXSk7XHJcblxyXG5cclxuXHJcbiAgICAgIC8v64yA64yT6riAIOumrOyKpO2KuCBcclxuICAgICAgY29uc3QgY29tbWVudEJ5Q29tbWVudExpc3QgPXVzZUNhbGxiYWNrKChwb3N0RmxhZyxuaWNrTmFtZSxwb3N0SWQsY29tbWVudElkLGNsaWNrQ29tbWVudElkLHVuZm9sZExpc3QpPT57XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYodW5mb2xkTGlzdD09PSd1bmZvbGQnICYmIGNvbW1lbnRJZCA9PT0gY2xpY2tDb21tZW50SWQpe1xyXG4gICAgICAgICAgICAgICAgICBzZXRVbmZvbGRMaXN0KCdmb2xkJyk7IFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIHNldFVuZm9sZExpc3QoJ3VuZm9sZCcpOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdobzp1c2VySW5mbyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTsgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICB9LFttYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzLHVuZm9sZExpc3RdKTsgXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBcclxuICAgIDxkaXYgPlxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDtg4DsnbTti4AtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGUnIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93VGgnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz57bWFpblBvc3RzXzEwMDFJbmZvWzBdLnRpdGxlfSBbe21haW5Qb3N0c18xMDAxQ29tbWVudHMubGVuZ3RofV08L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+XHJcbiAgICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4gIHttYWluUG9zdHNfMTAwMUluZm9bMF0udXNlck5pY2tOYW1lfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGRUaW1lT3V0bGluZWQgLz4gIHtjdXN0dW1EYXRlRm9ybWF0KG1haW5Qb3N0c18xMDAxSW5mb1swXS5jcmVhdGVkRGF0ZSl9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHttYWluUG9zdHNfMTAwMUluZm9bMF0uZ29vZH0gPERpc2xpa2VUd29Ub25lICB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHttYWluUG9zdHNfMTAwMUluZm9bMF0uYmFkfSBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7YOA7J207YuALS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCJhdXRvXCIsIGJvcmRlcjpcIjFweCBzb2xpZFwiLCBib3JkZXJDb2xvcjpcIiM4Y2M0OWNcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgICAgIOq0keqzoOyeheuLiOuLpC5cclxuICAgICAgPC9kaXY+XHJcbiAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIOy7qO2FkOy4oC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6bWFpblBvc3RzXzEwMDFJbmZvWzBdLmNvbnRlbnR9fS8+XHJcbiAgICAgPC9kaXY+IFxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDsu6jthZDsuKAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfSAgIFxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcImF1dG9cIiwgYm9yZGVyOlwiMXB4IHNvbGlkXCIsIGJvcmRlckNvbG9yOlwiIzhjYzQ5Y1wiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAg6rSR6rOg7J6F64uI64ukLlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuyii+yVhOyalCDsi6vslrTsmpQg67KE7Yq8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZSc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJyBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PnBvc3RMaWtlQnRuKCdnb29kJyl9PjxMaWtlVHdvVG9uZSAgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz48L0J1dHRvbj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8QnV0dG9uIG9uQ2xpY2s9eygpPT5wb3N0TGlrZUJ0bignYmFkJyl9PjxEaXNsaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPjwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgey8q7KKL7JWE7JqUIOyLq+yWtOyalCDrsoTtirwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB7LyrrjJPquIAg7J6F66ClLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgPENvbW1lbnRUZXh0QXJlYSAgIFxyXG4gICAgICAgICAgICBwb3N0RmxhZz17cG9zdEZsYWd9IFxyXG4gICAgICAgICAgICBuaWNrTmFtZT17bmlja05hbWV9IFxyXG4gICAgICAgICAgICBwb3N0SWQ9e3Bvc3RJZH0gXHJcbiAgICAgICAgICAgIHVzZXJJbmZvPXt1c2VySW5mb31cclxuICAgICAgICAgICAgaW5zZXJ0Q29tbWVudD17aW5zZXJ0Q29tbWVudH1cclxuICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgIC8+XHJcbiAgICB7LyrrjJPquIAg7J6F66ClLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcblxyXG5cclxuXHJcbiAgICB7LyrrjJPquIAg66as7Iqk7Yq4LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlRhYmxlXCI+XHJcbiAgICAgIHttYWluUG9zdHNfMTAwMUNvbW1lbnRzICYmIG1haW5Qb3N0c18xMDAxQ29tbWVudHMubWFwKCh2LGkpPT5cclxuXHJcbiAgICAgICAgPENvbW1lbnRzMTAwMSBcclxuICAgICAgICAgICAgICBrZXk9e2l9IFxyXG4gICAgICAgICAgICAgIHBvc3RGbGFnPXtwb3N0RmxhZ30gXHJcbiAgICAgICAgICAgICAgbmlja05hbWU9e25pY2tOYW1lfSBcclxuICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3RJZH0gXHJcbiAgICAgICAgICAgICAgdXNlckluZm89e3VzZXJJbmZvfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgY29tbWVudElkPXt2LmNvbW1lbnRJZH0gXHJcbiAgICAgICAgICAgICAgY29tbWVudD17di5jb21tZW50fSBcclxuICAgICAgICAgICAgICB3aG89e3Yud2hvfSBcclxuICAgICAgICAgICAgICBmbGFnPXt2LmZsYWd9IFxyXG5cclxuICAgICAgICAgICAgICBnb29kPXt2Lmdvb2R9XHJcbiAgICAgICAgICAgICAgYmFkPXt2LmJhZH0gICAgICBcclxuICAgICAgICAgICAgICBjcmVhdGVkRGF0ZT17di5jcmVhdGVkRGF0ZX0gXHJcbiAgICBcclxuICAgICAgICAgICAgICBsaWtlQnRuPXtsaWtlQnRufVxyXG5cclxuICAgICAgICAgICAgICBjbGlja2VkQ29tcG9uZW50PXt2LmNsaWNrZWRDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgbGlrZURpc2xpa2VmbGFnPXt2Lmxpa2VEaXNsaWtlZmxhZ31cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBieUNvbW1lbnRDb3VudD17di5ieUNvbW1lbnRDb3VudH1cclxuICAgICAgICAgICAgICBjb21tZW50QnlDb21tZW50TGlzdD17Y29tbWVudEJ5Q29tbWVudExpc3R9XHJcbiAgICAgICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cz17bWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c1swXSAmJiBtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzWzBdLmNvbW1lbnRJZCA9PT0gdi5jb21tZW50SWQgPyBtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzIDogJyd9XHJcbiAgICAgICAgICAgICAgdW5mb2xkTGlzdD17dW5mb2xkTGlzdH1cclxuXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKuuMk+q4gCDrpqzsiqTtirgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxufVxyXG5cclxuXHJcbmRldGFpbFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+e1xyXG5cclxuICBjb25zdCBwb3N0SWQgICA9IGNvbnRleHQucXVlcnkucG9zdElkOyBcclxuICBjb25zdCBuaWNrTmFtZSA9IGNvbnRleHQucXVlcnkubmlja05hbWU7IFxyXG4gIGNvbnN0IHBvc3RGbGFnID0gY29udGV4dC5xdWVyeS5wb3N0RmxhZzsgXHJcbiAgcmV0dXJuIHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWR9OyBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWxQYWdlOyAiXSwic291cmNlUm9vdCI6IiJ9