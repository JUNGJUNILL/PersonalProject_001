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
      lineNumber: 200,
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
      lineNumber: 202,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }, mainPosts_1001Info[0].title, " [", mainPosts_1001Comments.length, "]")), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["UserOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 19
    }
  }), "  ", mainPosts_1001Info[0].userNickName, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 73
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["FieldTimeOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 19
    }
  }), "  ", Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_11__["default"])(mainPosts_1001Info[0].createdDate), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 95
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }), " : ", mainPosts_1001Info[0].good, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
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
      lineNumber: 216,
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
      lineNumber: 226,
      columnNumber: 6
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: mainPosts_1001Info[0].content
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
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
      lineNumber: 235,
      columnNumber: 5
    }
  }, "\uAD11\uACE0\uC785\uB2C8\uB2E4."), __jsx("div", {
    className: "divTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
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
      lineNumber: 245,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onClick: function onClick() {
      return postLikeBtn('good');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 53
    }
  })), "\xA0\xA0\xA0\xA0", __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onClick: function onClick() {
      return postLikeBtn('bad');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 124
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
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
      lineNumber: 256,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "divTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
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
        lineNumber: 274,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIl0sIm5hbWVzIjpbImRldGFpbFBhZ2UiLCJuaWNrTmFtZSIsInBvc3RGbGFnIiwicG9zdElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJtYWluUG9zdHNfMTAwMSIsIm1haW5Qb3N0c18xMDAxSW5mbyIsIm1haW5Qb3N0c18xMDAxQ29tbWVudHMiLCJtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzIiwiYXV0aCIsInVzZXJJbmZvIiwicmVmIiwiY3JlYXRlUmVmIiwiYmxhbmtfcGF0dGVybiIsInVzZVN0YXRlIiwidW5mb2xkTGlzdCIsInNldFVuZm9sZExpc3QiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCIsImRhdGEiLCJ3aG8iLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUIiwicG9zdExpa2VCdG4iLCJ1c2VDYWxsYmFjayIsImxpa2VGbGFnIiwiYWxlcnQiLCJmbGFnIiwiTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1QiLCJsaWtlQnRuIiwiY29tbWVudGlkIiwibGlrZURpc2xpa2UiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNUIiwiaW5zZXJ0Q29tbWVudCIsImNvbW1lbnQiLCJsZW5ndGgiLCJyZXBsYWNlIiwiY3VycmVudCIsImZvY3VzSW5wdXQiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QiLCJjbGVhcklucHV0IiwiY29tbWVudEJ5Q29tbWVudExpc3QiLCJjb21tZW50SWQiLCJjbGlja0NvbW1lbnRJZCIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCIsIm1hcmdpblRvcCIsInRpdGxlIiwidXNlck5pY2tOYW1lIiwiY3VzdHVtRGF0ZUZvcm1hdCIsImNyZWF0ZWREYXRlIiwiZ29vZCIsImJhZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiX19odG1sIiwiY29udGVudCIsIm1hcCIsInYiLCJpIiwiY2xpY2tlZENvbXBvbmVudCIsImxpa2VEaXNsaWtlZmxhZyIsImJ5Q29tbWVudENvdW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLFVBQVUsR0FBSSxTQUFkQSxVQUFjLE9BQStCO0FBQUE7O0FBQUEsTUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLE1BQXBCQyxRQUFvQixRQUFwQkEsUUFBb0I7QUFBQSxNQUFYQyxNQUFXLFFBQVhBLE1BQVc7QUFFakQsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGaUQscUJBTXZDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNDLGNBQWY7QUFBQSxHQUFELENBTjRCO0FBQUEsTUFHMUNDLGtCQUgwQyxnQkFHMUNBLGtCQUgwQztBQUFBLE1BSTFDQyxzQkFKMEMsZ0JBSTFDQSxzQkFKMEM7QUFBQSxNQUsxQ0MsK0JBTDBDLGdCQUsxQ0EsK0JBTDBDOztBQUFBLHNCQVF6QkwsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDSyxJQUFmO0FBQUEsR0FBRCxDQVJjO0FBQUEsTUFRMUNDLFFBUjBDLGlCQVExQ0EsUUFSMEM7O0FBU2pELE1BQU1DLEdBQUcsR0FBR0MsdURBQVMsRUFBckI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsWUFBdEI7O0FBVmlELGtCQVdkQyxzREFBUSxDQUFDLE1BQUQsQ0FYTTtBQUFBLE1BVzFDQyxVQVgwQztBQUFBLE1BVy9CQyxhQVgr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RXJCcEUsa0JBRnFCLEdBRVZvRSxPQUFPLENBQUNDLEtBQVIsQ0FBY3JFLE1BRko7QUFHckJGLG9CQUhxQixHQUdWc0UsT0FBTyxDQUFDQyxLQUFSLENBQWN2RSxRQUhKO0FBSXJCQyxvQkFKcUIsR0FJVnFFLE9BQU8sQ0FBQ0MsS0FBUixDQUFjdEUsUUFKSjtBQUFBLDZDQUtwQjtBQUFDRCxzQkFBUSxFQUFSQSxRQUFEO0FBQVVDLHNCQUFRLEVBQVJBLFFBQVY7QUFBbUJDLG9CQUFNLEVBQU5BO0FBQW5CLGFBTG9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9lSCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGV0YWlsUGFnZS5qcy4xNDI5ZmU0OTIxZWY5NjNhYTFiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDEnXHJcbmltcG9ydCBDb21tZW50czEwMDEgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMV9jb21tZW50cydcclxuaW1wb3J0IENvbW1lbnRUZXh0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxX3RleHRBcmVhJ1xyXG5pbXBvcnQgXHJcbiAgICB7TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULCBcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1RcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxJzsgXHJcblxyXG5pbXBvcnQge0Rpc2xpa2VUd29Ub25lLExpa2VUd29Ub25lICwgVXNlck91dGxpbmVkLCBGaWVsZFRpbWVPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgY3VzdHVtRGF0ZUZvcm1hdCBmcm9tICAnLi4vdXRpbENvbXBvbmVudC9jdXN0dW1EYXRlRm9ybWF0JztcclxuXHJcblxyXG5cclxuY29uc3QgZGV0YWlsUGFnZSAgPSAoe25pY2tOYW1lLHBvc3RGbGFnLHBvc3RJZH0pID0+e1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gIGNvbnN0IHttYWluUG9zdHNfMTAwMUluZm8gLCBcclxuICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50cyxcclxuICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c1xyXG4gICAgICAgIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5tYWluUG9zdHNfMTAwMSk7IFxyXG5cclxuICBjb25zdCB7dXNlckluZm99ICAgICAgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5hdXRoKTtcclxuICBjb25zdCByZWYgPSBjcmVhdGVSZWYoKTsgXHJcbiAgY29uc3QgYmxhbmtfcGF0dGVybiA9IC9eXFxzK3xcXHMrJi9nOyAgXHJcbiAgY29uc3QgW3VuZm9sZExpc3Qsc2V0VW5mb2xkTGlzdF0gPSB1c2VTdGF0ZSgnZm9sZCcpOyBcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBcclxuICAgIC8v64yT6riAIOumrOyKpO2KuCBcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULCBcclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgcG9zdElkLFxyXG4gICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgIHdobzp1c2VySW5mbywgXHJcbiAgICAgIH1cclxuICAgIH0pOyBcclxuXHJcbiAgICAvL+yDgeyEuCDsoJXrs7QgXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICB3aG86dXNlckluZm8sXHJcbiAgICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSxbXSk7XHJcblxyXG4gIC8v6rKM7Iuc6riAIOyii+yVhOyalCwg7Iuk7Ja07JqUIOuyhO2KvFxyXG4gIGNvbnN0IHBvc3RMaWtlQnRuID0gdXNlQ2FsbGJhY2soKGxpa2VGbGFnKT0+e1xyXG5cclxuICAgIGlmKCF1c2VySW5mbyl7XHJcbiAgICAgIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWcIOyEnOu5hOyKpCDsnoXri4jri6QuJyk7IFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYobWFpblBvc3RzXzEwMDFJbmZvWzBdLmZsYWc9PT0nWScpe1xyXG4gICAgICBcclxuICAgICAgYWxlcnQoJ+ydtOuvuCDsoovslYTsmpQhIOyLq+yWtOyalCEg7ZaI7Iq164uI64ukLicpOyAgICAgICBcclxuICAgICAgcmV0dXJuOyBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8v6rKM7Iuc6riAIOyii+yVhOyalCFcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICAgIHdobzogdXNlckluZm8sIFxyXG4gICAgICAgICAgICAgIGZsYWc6bGlrZUZsYWcsIFxyXG4gICAgICAgICAgICB9XHJcbiAgICB9KTsgXHJcbiAgXHJcblxyXG4gIH0sW21haW5Qb3N0c18xMDAxSW5mb10pXHJcblxyXG5cclxuICAvL+uMk+q4gCDsoovslYTsmpQsIOyLq+yWtOyalCDrsoTtirwgXHJcbiAgY29uc3QgbGlrZUJ0biA9dXNlQ2FsbGJhY2soKGNvbW1lbnRpZCxmbGFnLGxpa2VEaXNsaWtlKT0+e1xyXG4gICAgICBpZighdXNlckluZm8pe1xyXG4gICAgICAgIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWcIOyEnOu5hOyKpCDsnoXri4jri6QuJyk7IFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoZmxhZz09PVwiWVwiKXtcclxuICAgICAgICBcclxuICAgICAgICBhbGVydCgn7J2066+4IOyii+yVhOyalCEg7Iur7Ja07JqUISDtlojsirXri4jri6QuJyk7IFxyXG4gICAgICAgIHJldHVybjsgXHJcbiAgXHJcbiAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAvL+uMk+q4gCDsoovslYTsmpQhXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNULCBcclxuICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICBjb21tZW50aWQsXHJcbiAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgIGZsYWc6IGxpa2VEaXNsaWtlICxcclxuICAgICAgICAgICAgd2hvOiB1c2VySW5mbyxcclxuICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudHM6Wy4uLm1haW5Qb3N0c18xMDAxQ29tbWVudHNdLFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgICBhbGVydChgJHtsaWtlRGlzbGlrZX1gKTsgXHJcbiAgICBcclxuICAgIH0sW21haW5Qb3N0c18xMDAxQ29tbWVudHNdKTsgXHJcblxyXG5cclxuICAvL+uMk+q4gCDsnoXroKUgXHJcbiAgY29uc3QgaW5zZXJ0Q29tbWVudCA9IHVzZUNhbGxiYWNrKChwb3N0RmxhZyxwb3N0SWQsbmlja05hbWUgLGNvbW1lbnQpPT57XHJcbiAgICBpZihjb21tZW50Lmxlbmd0aCA9PT0gMCB8fCBjb21tZW50LnJlcGxhY2UoYmxhbmtfcGF0dGVybiwnJyk9PT1cIlwiKXtcclxuICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIGFsZXJ0KCfrjJPquIDsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalCEnKTsgXHJcbiAgICAgICAgaWYocmVmLmN1cnJlbnQpe1xyXG4gICAgICAgICAgcmVmLmN1cnJlbnQuZm9jdXNJbnB1dCgpOyBcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYoY29tbWVudC5sZW5ndGggPT09IDMwMCl7XHJcbiAgICAgICAgICBhbGVydCgnMzAw7J6QIOydtOyDgSDsnoXroKUg7ZWgIOyImCDsl4bsirXri4jri6QuJyk7IFxyXG4gICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgLy/rjJPquIAg7J6F66ClXHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNULCBcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICAgIG5pY2tOYW1lICxcclxuICAgICAgICAgICAgICB3aG86dXNlckluZm8sIFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VW5mb2xkTGlzdCgnZm9sZCcpOyBcclxuXHJcblxyXG4gICAgICAgICAvL+yduO2SiyDstIjquLDtmZQsIO2PrOy7pOyKpCBcclxuICAgICAgICBpZihyZWYuY3VycmVudCl7XHJcbiAgICAgICAgICByZWYuY3VycmVudC5jbGVhcklucHV0KCk7IFxyXG4gICAgICAgICAgcmVmLmN1cnJlbnQuZm9jdXNJbnB1dCgpOyBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50cyxyZWZdKTtcclxuXHJcblxyXG5cclxuICAgICAgLy/rjIDrjJPquIAg66as7Iqk7Yq4IFxyXG4gICAgICBjb25zdCBjb21tZW50QnlDb21tZW50TGlzdCA9dXNlQ2FsbGJhY2soKHBvc3RGbGFnLG5pY2tOYW1lLHBvc3RJZCxjb21tZW50SWQsY2xpY2tDb21tZW50SWQsdW5mb2xkTGlzdCk9PntcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZih1bmZvbGRMaXN0PT09J3VuZm9sZCcgJiYgY29tbWVudElkID09PSBjbGlja0NvbW1lbnRJZCl7XHJcbiAgICAgICAgICAgICAgICAgIHNldFVuZm9sZExpc3QoJ2ZvbGQnKTsgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgc2V0VW5mb2xkTGlzdCgndW5mb2xkJyk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hvOnVzZXJJbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pOyAgICAgIFxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgIH0sW21haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMsdW5mb2xkTGlzdF0pOyBcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIFxyXG4gICAgPGRpdiA+XHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIO2DgOydtO2LgC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZScgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3dUaCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPnttYWluUG9zdHNfMTAwMUluZm9bMF0udGl0bGV9IFt7bWFpblBvc3RzXzEwMDFDb21tZW50cy5sZW5ndGh9XTwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz5cclxuICAgICAgICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPiAge21haW5Qb3N0c18xMDAxSW5mb1swXS51c2VyTmlja05hbWV9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFRpbWVPdXRsaW5lZCAvPiAge2N1c3R1bURhdGVGb3JtYXQobWFpblBvc3RzXzEwMDFJbmZvWzBdLmNyZWF0ZWREYXRlKX08YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpa2VUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+IDoge21haW5Qb3N0c18xMDAxSW5mb1swXS5nb29kfSA8RGlzbGlrZVR3b1RvbmUgIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+IDoge21haW5Qb3N0c18xMDAxSW5mb1swXS5iYWR9IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDtg4DsnbTti4AtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcImF1dG9cIiwgYm9yZGVyOlwiMXB4IHNvbGlkXCIsIGJvcmRlckNvbG9yOlwiIzhjYzQ5Y1wiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAgICAg6rSR6rOg7J6F64uI64ukLlxyXG4gICAgICA8L2Rpdj5cclxuICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7Luo7YWQ7LigLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDptYWluUG9zdHNfMTAwMUluZm9bMF0uY29udGVudH19Lz5cclxuICAgICA8L2Rpdj4gXHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIOy7qO2FkOy4oC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99ICAgXHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiYXV0b1wiLCBib3JkZXI6XCIxcHggc29saWRcIiwgYm9yZGVyQ29sb3I6XCIjOGNjNDljXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICDqtJHqs6DsnoXri4jri6QuXHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgey8q7KKL7JWE7JqUIOyLq+yWtOyalCDrsoTtirwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93VGgnIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+cG9zdExpa2VCdG4oJ2dvb2QnKX0+PExpa2VUd29Ub25lICB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPjwvQnV0dG9uPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzxCdXR0b24gb25DbGljaz17KCk9PnBvc3RMaWtlQnRuKCdiYWQnKX0+PERpc2xpa2VUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+PC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICB7LyrsoovslYTsmpQg7Iur7Ja07JqUIOuyhO2KvC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuuMk+q4gCDsnoXroKUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICA8Q29tbWVudFRleHRBcmVhICAgXHJcbiAgICAgICAgICAgIHBvc3RGbGFnPXtwb3N0RmxhZ30gXHJcbiAgICAgICAgICAgIG5pY2tOYW1lPXtuaWNrTmFtZX0gXHJcbiAgICAgICAgICAgIHBvc3RJZD17cG9zdElkfSBcclxuICAgICAgICAgICAgdXNlckluZm89e3VzZXJJbmZvfVxyXG4gICAgICAgICAgICBpbnNlcnRDb21tZW50PXtpbnNlcnRDb21tZW50fVxyXG4gICAgICAgICAgICByZWY9e3JlZn1cclxuICAgLz5cclxuICAgIHsvKuuMk+q4gCDsnoXroKUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuuMk+q4gCDrpqzsiqTtirgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2VGFibGVcIj5cclxuICAgICAge21haW5Qb3N0c18xMDAxQ29tbWVudHMgJiYgbWFpblBvc3RzXzEwMDFDb21tZW50cy5tYXAoKHYsaSk9PlxyXG5cclxuICAgICAgICA8Q29tbWVudHMxMDAxIFxyXG4gICAgICAgICAgICAgIGtleT17aX0gXHJcbiAgICAgICAgICAgICAgcG9zdEZsYWc9e3Bvc3RGbGFnfSBcclxuICAgICAgICAgICAgICBuaWNrTmFtZT17bmlja05hbWV9IFxyXG4gICAgICAgICAgICAgIHBvc3RJZD17cG9zdElkfSBcclxuICAgICAgICAgICAgICB1c2VySW5mbz17dXNlckluZm99XHJcbiAgICBcclxuICAgICAgICAgICAgICBjb21tZW50SWQ9e3YuY29tbWVudElkfSBcclxuICAgICAgICAgICAgICBjb21tZW50PXt2LmNvbW1lbnR9IFxyXG4gICAgICAgICAgICAgIHdobz17di53aG99IFxyXG4gICAgICAgICAgICAgIGZsYWc9e3YuZmxhZ30gXHJcblxyXG4gICAgICAgICAgICAgIGdvb2Q9e3YuZ29vZH1cclxuICAgICAgICAgICAgICBiYWQ9e3YuYmFkfSAgICAgIFxyXG4gICAgICAgICAgICAgIGNyZWF0ZWREYXRlPXt2LmNyZWF0ZWREYXRlfSBcclxuICAgIFxyXG4gICAgICAgICAgICAgIGxpa2VCdG49e2xpa2VCdG59XHJcblxyXG4gICAgICAgICAgICAgIGNsaWNrZWRDb21wb25lbnQ9e3YuY2xpY2tlZENvbXBvbmVudH1cclxuICAgICAgICAgICAgICBsaWtlRGlzbGlrZWZsYWc9e3YubGlrZURpc2xpa2VmbGFnfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGJ5Q29tbWVudENvdW50PXt2LmJ5Q29tbWVudENvdW50fVxyXG4gICAgICAgICAgICAgIGNvbW1lbnRCeUNvbW1lbnRMaXN0PXtjb21tZW50QnlDb21tZW50TGlzdH1cclxuICAgICAgICAgICAgICBtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzPXttYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzWzBdICYmIG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNbMF0uY29tbWVudElkID09PSB2LmNvbW1lbnRJZCA/IG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMgOiAnJ31cclxuICAgICAgICAgICAgICB1bmZvbGRMaXN0PXt1bmZvbGRMaXN0fVxyXG5cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICApXHJcbiAgICBcclxuICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgey8q64yT6riAIOumrOyKpO2KuC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5cclxuZGV0YWlsUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT57XHJcblxyXG4gIGNvbnN0IHBvc3RJZCAgID0gY29udGV4dC5xdWVyeS5wb3N0SWQ7IFxyXG4gIGNvbnN0IG5pY2tOYW1lID0gY29udGV4dC5xdWVyeS5uaWNrTmFtZTsgXHJcbiAgY29uc3QgcG9zdEZsYWcgPSBjb250ZXh0LnF1ZXJ5LnBvc3RGbGFnOyBcclxuICByZXR1cm4ge25pY2tOYW1lLHBvc3RGbGFnLHBvc3RJZH07IFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGRldGFpbFBhZ2U7ICJdLCJzb3VyY2VSb290IjoiIn0=