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
    if (!userInfo) {
      alert('로그인이 필요한 서비스 입니다.');
      return;
    }

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
        flag: likeFlag,
        mainPosts_1001Info: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(mainPosts_1001Info)
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
      lineNumber: 201,
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
      lineNumber: 203,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }, mainPosts_1001Info[0].title, " [", mainPosts_1001Comments.length, "]", mainPosts_1001Info[0].flag)), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["UserOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 19
    }
  }), "  ", mainPosts_1001Info[0].userNickName, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 73
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["FieldTimeOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }), "  ", Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_11__["default"])(mainPosts_1001Info[0].createdDate), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 95
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 19
    }
  }), " : ", mainPosts_1001Info[0].good, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
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
      lineNumber: 217,
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
      lineNumber: 227,
      columnNumber: 6
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: mainPosts_1001Info[0].content
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
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
      lineNumber: 236,
      columnNumber: 5
    }
  }, "\uAD11\uACE0\uC785\uB2C8\uB2E4."), __jsx("div", {
    className: "divTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
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
      lineNumber: 246,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onClick: function onClick() {
      return postLikeBtn('good');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LikeTwoTone"], {
    twoToneColor: mainPosts_1001Info[0].clicked === 'good' ? "#ff0000" : "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 53
    }
  })), "\xA0\xA0\xA0\xA0", __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onClick: function onClick() {
      return postLikeBtn('bad');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 179
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DislikeTwoTone"], {
    twoToneColor: mainPosts_1001Info[0].clicked === 'bad' ? "#ff0000" : "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 220
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
      lineNumber: 257,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "divTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
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
        lineNumber: 275,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIl0sIm5hbWVzIjpbImRldGFpbFBhZ2UiLCJuaWNrTmFtZSIsInBvc3RGbGFnIiwicG9zdElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJtYWluUG9zdHNfMTAwMSIsIm1haW5Qb3N0c18xMDAxSW5mbyIsIm1haW5Qb3N0c18xMDAxQ29tbWVudHMiLCJtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzIiwiYXV0aCIsInVzZXJJbmZvIiwicmVmIiwiY3JlYXRlUmVmIiwiYmxhbmtfcGF0dGVybiIsInVzZVN0YXRlIiwidW5mb2xkTGlzdCIsInNldFVuZm9sZExpc3QiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCIsImRhdGEiLCJ3aG8iLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUIiwicG9zdExpa2VCdG4iLCJ1c2VDYWxsYmFjayIsImxpa2VGbGFnIiwiYWxlcnQiLCJmbGFnIiwiTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1QiLCJsaWtlQnRuIiwiY29tbWVudGlkIiwibGlrZURpc2xpa2UiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNUIiwiaW5zZXJ0Q29tbWVudCIsImNvbW1lbnQiLCJsZW5ndGgiLCJyZXBsYWNlIiwiY3VycmVudCIsImZvY3VzSW5wdXQiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QiLCJjbGVhcklucHV0IiwiY29tbWVudEJ5Q29tbWVudExpc3QiLCJjb21tZW50SWQiLCJjbGlja0NvbW1lbnRJZCIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCIsIm1hcmdpblRvcCIsInRpdGxlIiwidXNlck5pY2tOYW1lIiwiY3VzdHVtRGF0ZUZvcm1hdCIsImNyZWF0ZWREYXRlIiwiZ29vZCIsImJhZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiX19odG1sIiwiY29udGVudCIsImNsaWNrZWQiLCJtYXAiLCJ2IiwiaSIsImNsaWNrZWRDb21wb25lbnQiLCJsaWtlRGlzbGlrZWZsYWciLCJieUNvbW1lbnRDb3VudCIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxVQUFVLEdBQUksU0FBZEEsVUFBYyxPQUErQjtBQUFBOztBQUFBLE1BQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxNQUFwQkMsUUFBb0IsUUFBcEJBLFFBQW9CO0FBQUEsTUFBWEMsTUFBVyxRQUFYQSxNQUFXO0FBRWpELE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRmlELHFCQU12Q0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxjQUFmO0FBQUEsR0FBRCxDQU40QjtBQUFBLE1BRzFDQyxrQkFIMEMsZ0JBRzFDQSxrQkFIMEM7QUFBQSxNQUkxQ0Msc0JBSjBDLGdCQUkxQ0Esc0JBSjBDO0FBQUEsTUFLMUNDLCtCQUwwQyxnQkFLMUNBLCtCQUwwQzs7QUFBQSxzQkFRekJMLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0ssSUFBZjtBQUFBLEdBQUQsQ0FSYztBQUFBLE1BUTFDQyxRQVIwQyxpQkFRMUNBLFFBUjBDOztBQVNqRCxNQUFNQyxHQUFHLEdBQUdDLHVEQUFTLEVBQXJCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLFlBQXRCOztBQVZpRCxrQkFXZEMsc0RBQVEsQ0FBQyxNQUFELENBWE07QUFBQSxNQVcxQ0MsVUFYMEM7QUFBQSxN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QjlLO0FBd0JNLGdCQUFVLEVBQUVPLFVBeEJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRm9EO0FBQUEsR0FBM0IsQ0FEN0IsQ0F2RUEsQ0FGQTtBQStHSCxDQWhTRDs7R0FBTWxCLFU7VUFFYUssdUQsRUFJUEMsdUQsRUFFY0EsdUQ7OztBQTJSMUJOLFVBQVUsQ0FBQ3VFLGVBQVg7QUFBQSwrTEFBNkIsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXJCckUsa0JBRnFCLEdBRVZxRSxPQUFPLENBQUNDLEtBQVIsQ0FBY3RFLE1BRko7QUFHckJGLG9CQUhxQixHQUdWdUUsT0FBTyxDQUFDQyxLQUFSLENBQWN4RSxRQUhKO0FBSXJCQyxvQkFKcUIsR0FJVnNFLE9BQU8sQ0FBQ0MsS0FBUixDQUFjdkUsUUFKSjtBQUFBLDZDQUtwQjtBQUFDRCxzQkFBUSxFQUFSQSxRQUFEO0FBQVVDLHNCQUFRLEVBQVJBLFFBQVY7QUFBbUJDLG9CQUFNLEVBQU5BO0FBQW5CLGFBTG9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9lSCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGV0YWlsUGFnZS5qcy44MjA4N2VlNDRlZGQ5OTQ5NjQ1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDEnXHJcbmltcG9ydCBDb21tZW50czEwMDEgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMV9jb21tZW50cydcclxuaW1wb3J0IENvbW1lbnRUZXh0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxX3RleHRBcmVhJ1xyXG5pbXBvcnQgXHJcbiAgICB7TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULCBcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1RcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxJzsgXHJcblxyXG5pbXBvcnQge0Rpc2xpa2VUd29Ub25lLExpa2VUd29Ub25lICwgVXNlck91dGxpbmVkLCBGaWVsZFRpbWVPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgY3VzdHVtRGF0ZUZvcm1hdCBmcm9tICAnLi4vdXRpbENvbXBvbmVudC9jdXN0dW1EYXRlRm9ybWF0JztcclxuXHJcblxyXG5cclxuY29uc3QgZGV0YWlsUGFnZSAgPSAoe25pY2tOYW1lLHBvc3RGbGFnLHBvc3RJZH0pID0+e1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gIGNvbnN0IHttYWluUG9zdHNfMTAwMUluZm8gLCBcclxuICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50cyxcclxuICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c1xyXG4gICAgICAgIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5tYWluUG9zdHNfMTAwMSk7IFxyXG5cclxuICBjb25zdCB7dXNlckluZm99ICAgICAgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5hdXRoKTtcclxuICBjb25zdCByZWYgPSBjcmVhdGVSZWYoKTsgXHJcbiAgY29uc3QgYmxhbmtfcGF0dGVybiA9IC9eXFxzK3xcXHMrJi9nOyAgXHJcbiAgY29uc3QgW3VuZm9sZExpc3Qsc2V0VW5mb2xkTGlzdF0gPSB1c2VTdGF0ZSgnZm9sZCcpOyBcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBcclxuICAgIC8v64yT6riAIOumrOyKpO2KuCBcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULCBcclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgcG9zdElkLFxyXG4gICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgIHdobzp1c2VySW5mbywgXHJcbiAgICAgIH1cclxuICAgIH0pOyBcclxuXHJcbiAgICAvL+yDgeyEuCDsoJXrs7QgXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICB3aG86dXNlckluZm8sXHJcbiAgICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSxbXSk7XHJcblxyXG4gIC8v6rKM7Iuc6riAIOyii+yVhOyalCwg7Iuk7Ja07JqUIOuyhO2KvFxyXG4gIGNvbnN0IHBvc3RMaWtlQnRuID0gdXNlQ2FsbGJhY2soKGxpa2VGbGFnKT0+e1xyXG5cclxuICAgIGlmKCF1c2VySW5mbyl7XHJcbiAgICAgIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWcIOyEnOu5hOyKpCDsnoXri4jri6QuJyk7IFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYobWFpblBvc3RzXzEwMDFJbmZvWzBdLmZsYWc9PT0nWScpe1xyXG4gICAgICBcclxuICAgICAgYWxlcnQoJ+ydtOuvuCDsoovslYTsmpQhIOyLq+yWtOyalCEg7ZaI7Iq164uI64ukLicpOyAgICAgICBcclxuICAgICAgcmV0dXJuOyBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8v6rKM7Iuc6riAIOyii+yVhOyalCFcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICAgIHdobzogdXNlckluZm8sIFxyXG4gICAgICAgICAgICAgIGZsYWc6bGlrZUZsYWcsIFxyXG4gICAgICAgICAgICAgIG1haW5Qb3N0c18xMDAxSW5mbzpbLi4ubWFpblBvc3RzXzEwMDFJbmZvXSwgXHJcbiAgICAgICAgICAgIH1cclxuICAgIH0pOyBcclxuICBcclxuXHJcbiAgfSxbbWFpblBvc3RzXzEwMDFJbmZvXSlcclxuXHJcblxyXG4gIC8v64yT6riAIOyii+yVhOyalCwg7Iur7Ja07JqUIOuyhO2KvCBcclxuICBjb25zdCBsaWtlQnRuID11c2VDYWxsYmFjaygoY29tbWVudGlkLGZsYWcsbGlrZURpc2xpa2UpPT57XHJcbiAgICAgIGlmKCF1c2VySW5mbyl7XHJcbiAgICAgICAgYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlZwg7ISc67mE7IqkIOyeheuLiOuLpC4nKTsgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihmbGFnPT09XCJZXCIpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFsZXJ0KCfsnbTrr7gg7KKL7JWE7JqUISDsi6vslrTsmpQhIO2WiOyKteuLiOuLpC4nKTsgXHJcbiAgICAgICAgcmV0dXJuOyBcclxuICBcclxuICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgIC8v64yT6riAIOyii+yVhOyalCFcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIGNvbW1lbnRpZCxcclxuICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgZmxhZzogbGlrZURpc2xpa2UgLFxyXG4gICAgICAgICAgICB3aG86IHVzZXJJbmZvLFxyXG4gICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50czpbLi4ubWFpblBvc3RzXzEwMDFDb21tZW50c10sXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgIGFsZXJ0KGAke2xpa2VEaXNsaWtlfWApOyBcclxuICAgIFxyXG4gICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50c10pOyBcclxuXHJcblxyXG4gIC8v64yT6riAIOyeheugpSBcclxuICBjb25zdCBpbnNlcnRDb21tZW50ID0gdXNlQ2FsbGJhY2soKHBvc3RGbGFnLHBvc3RJZCxuaWNrTmFtZSAsY29tbWVudCk9PntcclxuICAgIGlmKGNvbW1lbnQubGVuZ3RoID09PSAwIHx8IGNvbW1lbnQucmVwbGFjZShibGFua19wYXR0ZXJuLCcnKT09PVwiXCIpe1xyXG4gICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgYWxlcnQoJ+uMk+q4gOydhCDsnoXroKXtlbQg7KO87IS47JqUIScpOyBcclxuICAgICAgICBpZihyZWYuY3VycmVudCl7XHJcbiAgICAgICAgICByZWYuY3VycmVudC5mb2N1c0lucHV0KCk7IFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZihjb21tZW50Lmxlbmd0aCA9PT0gMzAwKXtcclxuICAgICAgICAgIGFsZXJ0KCczMDDsnpAg7J207IOBIOyeheugpSDtlaAg7IiYIOyXhuyKteuLiOuLpC4nKTsgXHJcbiAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAvL+uMk+q4gCDsnoXroKVcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QsIFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgICAgbmlja05hbWUgLFxyXG4gICAgICAgICAgICAgIHdobzp1c2VySW5mbywgXHJcbiAgICAgICAgICAgICAgY29tbWVudCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRVbmZvbGRMaXN0KCdmb2xkJyk7IFxyXG5cclxuXHJcbiAgICAgICAgIC8v7J247ZKLIOy0iOq4sO2ZlCwg7Y+s7Luk7IqkIFxyXG4gICAgICAgIGlmKHJlZi5jdXJyZW50KXtcclxuICAgICAgICAgIHJlZi5jdXJyZW50LmNsZWFySW5wdXQoKTsgXHJcbiAgICAgICAgICByZWYuY3VycmVudC5mb2N1c0lucHV0KCk7IFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICB9LFttYWluUG9zdHNfMTAwMUNvbW1lbnRzLHJlZl0pO1xyXG5cclxuXHJcblxyXG4gICAgICAvL+uMgOuMk+q4gCDrpqzsiqTtirggXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRCeUNvbW1lbnRMaXN0ID11c2VDYWxsYmFjaygocG9zdEZsYWcsbmlja05hbWUscG9zdElkLGNvbW1lbnRJZCxjbGlja0NvbW1lbnRJZCx1bmZvbGRMaXN0KT0+e1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHVuZm9sZExpc3Q9PT0ndW5mb2xkJyAmJiBjb21tZW50SWQgPT09IGNsaWNrQ29tbWVudElkKXtcclxuICAgICAgICAgICAgICAgICAgc2V0VW5mb2xkTGlzdCgnZm9sZCcpOyBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICBzZXRVbmZvbGRMaXN0KCd1bmZvbGQnKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aG86dXNlckluZm8sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7ICAgICAgXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cyx1bmZvbGRMaXN0XSk7IFxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgXHJcbiAgICA8ZGl2ID5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7YOA7J207YuALS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJyBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+e21haW5Qb3N0c18xMDAxSW5mb1swXS50aXRsZX0gW3ttYWluUG9zdHNfMTAwMUNvbW1lbnRzLmxlbmd0aH1de21haW5Qb3N0c18xMDAxSW5mb1swXS5mbGFnfTwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz5cclxuICAgICAgICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPiAge21haW5Qb3N0c18xMDAxSW5mb1swXS51c2VyTmlja05hbWV9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFRpbWVPdXRsaW5lZCAvPiAge2N1c3R1bURhdGVGb3JtYXQobWFpblBvc3RzXzEwMDFJbmZvWzBdLmNyZWF0ZWREYXRlKX08YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpa2VUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+IDoge21haW5Qb3N0c18xMDAxSW5mb1swXS5nb29kfSA8RGlzbGlrZVR3b1RvbmUgIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+IDoge21haW5Qb3N0c18xMDAxSW5mb1swXS5iYWR9IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDtg4DsnbTti4AtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcImF1dG9cIiwgYm9yZGVyOlwiMXB4IHNvbGlkXCIsIGJvcmRlckNvbG9yOlwiIzhjYzQ5Y1wiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAgICAg6rSR6rOg7J6F64uI64ukLlxyXG4gICAgICA8L2Rpdj5cclxuICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7Luo7YWQ7LigLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDptYWluUG9zdHNfMTAwMUluZm9bMF0uY29udGVudH19Lz5cclxuICAgICA8L2Rpdj4gXHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIOy7qO2FkOy4oC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99ICAgXHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiYXV0b1wiLCBib3JkZXI6XCIxcHggc29saWRcIiwgYm9yZGVyQ29sb3I6XCIjOGNjNDljXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICDqtJHqs6DsnoXri4jri6QuXHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgey8q7KKL7JWE7JqUIOyLq+yWtOyalCDrsoTtirwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93VGgnIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+cG9zdExpa2VCdG4oJ2dvb2QnKX0+PExpa2VUd29Ub25lICB0d29Ub25lQ29sb3I9e21haW5Qb3N0c18xMDAxSW5mb1swXS5jbGlja2VkID09PSAnZ29vZCcgPyBcIiNmZjAwMDBcIjpcIiMxYmE2NDBcIn0vPjwvQnV0dG9uPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzxCdXR0b24gb25DbGljaz17KCk9PnBvc3RMaWtlQnRuKCdiYWQnKX0+PERpc2xpa2VUd29Ub25lIHR3b1RvbmVDb2xvcj17bWFpblBvc3RzXzEwMDFJbmZvWzBdLmNsaWNrZWQgPT09J2JhZCcgPyBcIiNmZjAwMDBcIjpcIiMxYmE2NDBcIn0vPjwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgey8q7KKL7JWE7JqUIOyLq+yWtOyalCDrsoTtirwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB7LyrrjJPquIAg7J6F66ClLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgPENvbW1lbnRUZXh0QXJlYSAgIFxyXG4gICAgICAgICAgICBwb3N0RmxhZz17cG9zdEZsYWd9IFxyXG4gICAgICAgICAgICBuaWNrTmFtZT17bmlja05hbWV9IFxyXG4gICAgICAgICAgICBwb3N0SWQ9e3Bvc3RJZH0gXHJcbiAgICAgICAgICAgIHVzZXJJbmZvPXt1c2VySW5mb31cclxuICAgICAgICAgICAgaW5zZXJ0Q29tbWVudD17aW5zZXJ0Q29tbWVudH1cclxuICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgIC8+XHJcbiAgICB7LyrrjJPquIAg7J6F66ClLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcblxyXG5cclxuXHJcbiAgICB7LyrrjJPquIAg66as7Iqk7Yq4LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlRhYmxlXCI+XHJcbiAgICAgIHttYWluUG9zdHNfMTAwMUNvbW1lbnRzICYmIG1haW5Qb3N0c18xMDAxQ29tbWVudHMubWFwKCh2LGkpPT5cclxuXHJcbiAgICAgICAgPENvbW1lbnRzMTAwMSBcclxuICAgICAgICAgICAgICBrZXk9e2l9IFxyXG4gICAgICAgICAgICAgIHBvc3RGbGFnPXtwb3N0RmxhZ30gXHJcbiAgICAgICAgICAgICAgbmlja05hbWU9e25pY2tOYW1lfSBcclxuICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3RJZH0gXHJcbiAgICAgICAgICAgICAgdXNlckluZm89e3VzZXJJbmZvfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgY29tbWVudElkPXt2LmNvbW1lbnRJZH0gXHJcbiAgICAgICAgICAgICAgY29tbWVudD17di5jb21tZW50fSBcclxuICAgICAgICAgICAgICB3aG89e3Yud2hvfSBcclxuICAgICAgICAgICAgICBmbGFnPXt2LmZsYWd9IFxyXG5cclxuICAgICAgICAgICAgICBnb29kPXt2Lmdvb2R9XHJcbiAgICAgICAgICAgICAgYmFkPXt2LmJhZH0gICAgICBcclxuICAgICAgICAgICAgICBjcmVhdGVkRGF0ZT17di5jcmVhdGVkRGF0ZX0gXHJcbiAgICBcclxuICAgICAgICAgICAgICBsaWtlQnRuPXtsaWtlQnRufVxyXG5cclxuICAgICAgICAgICAgICBjbGlja2VkQ29tcG9uZW50PXt2LmNsaWNrZWRDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgbGlrZURpc2xpa2VmbGFnPXt2Lmxpa2VEaXNsaWtlZmxhZ31cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBieUNvbW1lbnRDb3VudD17di5ieUNvbW1lbnRDb3VudH1cclxuICAgICAgICAgICAgICBjb21tZW50QnlDb21tZW50TGlzdD17Y29tbWVudEJ5Q29tbWVudExpc3R9XHJcbiAgICAgICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cz17bWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c1swXSAmJiBtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzWzBdLmNvbW1lbnRJZCA9PT0gdi5jb21tZW50SWQgPyBtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzIDogJyd9XHJcbiAgICAgICAgICAgICAgdW5mb2xkTGlzdD17dW5mb2xkTGlzdH1cclxuXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKuuMk+q4gCDrpqzsiqTtirgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxufVxyXG5cclxuXHJcbmRldGFpbFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+e1xyXG5cclxuICBjb25zdCBwb3N0SWQgICA9IGNvbnRleHQucXVlcnkucG9zdElkOyBcclxuICBjb25zdCBuaWNrTmFtZSA9IGNvbnRleHQucXVlcnkubmlja05hbWU7IFxyXG4gIGNvbnN0IHBvc3RGbGFnID0gY29udGV4dC5xdWVyeS5wb3N0RmxhZzsgXHJcbiAgcmV0dXJuIHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWR9OyBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWxQYWdlOyAiXSwic291cmNlUm9vdCI6IiJ9