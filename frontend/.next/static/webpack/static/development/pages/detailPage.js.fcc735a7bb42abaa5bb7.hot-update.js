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
    twoToneColor: "#1ba640",
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
      columnNumber: 124
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIl0sIm5hbWVzIjpbImRldGFpbFBhZ2UiLCJuaWNrTmFtZSIsInBvc3RGbGFnIiwicG9zdElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJtYWluUG9zdHNfMTAwMSIsIm1haW5Qb3N0c18xMDAxSW5mbyIsIm1haW5Qb3N0c18xMDAxQ29tbWVudHMiLCJtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzIiwiYXV0aCIsInVzZXJJbmZvIiwicmVmIiwiY3JlYXRlUmVmIiwiYmxhbmtfcGF0dGVybiIsInVzZVN0YXRlIiwidW5mb2xkTGlzdCIsInNldFVuZm9sZExpc3QiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCIsImRhdGEiLCJ3aG8iLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUIiwicG9zdExpa2VCdG4iLCJ1c2VDYWxsYmFjayIsImxpa2VGbGFnIiwiYWxlcnQiLCJmbGFnIiwiTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1QiLCJsaWtlQnRuIiwiY29tbWVudGlkIiwibGlrZURpc2xpa2UiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNUIiwiaW5zZXJ0Q29tbWVudCIsImNvbW1lbnQiLCJsZW5ndGgiLCJyZXBsYWNlIiwiY3VycmVudCIsImZvY3VzSW5wdXQiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QiLCJjbGVhcklucHV0IiwiY29tbWVudEJ5Q29tbWVudExpc3QiLCJjb21tZW50SWQiLCJjbGlja0NvbW1lbnRJZCIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCIsIm1hcmdpblRvcCIsInRpdGxlIiwidXNlck5pY2tOYW1lIiwiY3VzdHVtRGF0ZUZvcm1hdCIsImNyZWF0ZWREYXRlIiwiZ29vZCIsImJhZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiX19odG1sIiwiY29udGVudCIsIm1hcCIsInYiLCJpIiwiY2xpY2tlZENvbXBvbmVudCIsImxpa2VEaXNsaWtlZmxhZyIsImJ5Q29tbWVudENvdW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLFVBQVUsR0FBSSxTQUFkQSxVQUFjLE9BQStCO0FBQUE7O0FBQUEsTUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLE1BQXBCQyxRQUFvQixRQUFwQkEsUUFBb0I7QUFBQSxNQUFYQyxNQUFXLFFBQVhBLE1BQVc7QUFFakQsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGaUQscUJBTXZDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNDLGNBQWY7QUFBQSxHQUFELENBTjRCO0FBQUEsTUFHMUNDLGtCQUgwQyxnQkFHMUNBLGtCQUgwQztBQUFBLE1BSTFDQyxzQkFKMEMsZ0JBSTFDQSxzQkFKMEM7QUFBQSxNQUsxQ0MsK0JBTDBDLGdCQUsxQ0EsK0JBTDBDOztBQUFBLHNCQVF6QkwsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDSyxJQUFmO0FBQUEsR0FBRCxDQVJjO0FBQUEsTUFRMUNDLFFBUjBDLGlCQVExQ0EsUUFSMEM7O0FBU2pELE1BQU1DLEdBQUcsR0FBR0MsdURBQVMsRUFBckI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsWUFBdEI7O0FBVmlELGtCQVdkQyxzREFBUSxDQUFDLE1BQUQsQ0FYTTtBQUFBLE1BVzFDQyxVQVgwQztBQUFBLE1BVy9CQyxhQVgr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QUEyUjFCTixVQUFVLENBQUNzRSxlQUFYO0FBQUEsK0xBQTZCLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVyQnBFLGtCQUZxQixHQUVWb0UsT0FBTyxDQUFDQyxLQUFSLENBQWNyRSxNQUZKO0FBR3JCRixvQkFIcUIsR0FHVnNFLE9BQU8sQ0FBQ0MsS0FBUixDQUFjdkUsUUFISjtBQUlyQkMsb0JBSnFCLEdBSVZxRSxPQUFPLENBQUNDLEtBQVIsQ0FBY3RFLFFBSko7QUFBQSw2Q0FLcEI7QUFBQ0Qsc0JBQVEsRUFBUkEsUUFBRDtBQUFVQyxzQkFBUSxFQUFSQSxRQUFWO0FBQW1CQyxvQkFBTSxFQUFOQTtBQUFuQixhQUxvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPZUgseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRldGFpbFBhZ2UuanMuZmNjNzM1YTdiYjQyYWJhYTViYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsIHVzZVN0YXRlLCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxJ1xyXG5pbXBvcnQgQ29tbWVudHMxMDAxIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFfY29tbWVudHMnXHJcbmltcG9ydCBDb21tZW50VGV4dEFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMV90ZXh0QXJlYSdcclxuaW1wb3J0IFxyXG4gICAge01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCwgXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9SRVFVRVNUXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMSc7IFxyXG5cclxuaW1wb3J0IHtEaXNsaWtlVHdvVG9uZSxMaWtlVHdvVG9uZSAsIFVzZXJPdXRsaW5lZCwgRmllbGRUaW1lT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IGN1c3R1bURhdGVGb3JtYXQgZnJvbSAgJy4uL3V0aWxDb21wb25lbnQvY3VzdHVtRGF0ZUZvcm1hdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IGRldGFpbFBhZ2UgID0gKHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWR9KSA9PntcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICBjb25zdCB7bWFpblBvc3RzXzEwMDFJbmZvICwgXHJcbiAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudHMsXHJcbiAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNcclxuICAgICAgICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUubWFpblBvc3RzXzEwMDEpOyBcclxuXHJcbiAgY29uc3Qge3VzZXJJbmZvfSAgICAgID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgcmVmID0gY3JlYXRlUmVmKCk7IFxyXG4gIGNvbnN0IGJsYW5rX3BhdHRlcm4gPSAvXlxccyt8XFxzKyYvZzsgIFxyXG4gIGNvbnN0IFt1bmZvbGRMaXN0LHNldFVuZm9sZExpc3RdID0gdXNlU3RhdGUoJ2ZvbGQnKTsgXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgXHJcbiAgICAvL+uMk+q4gCDrpqzsiqTtirggXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCwgXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIHBvc3RJZCxcclxuICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICB3aG86dXNlckluZm8sIFxyXG4gICAgICB9XHJcbiAgICB9KTsgXHJcblxyXG4gICAgLy/sg4HshLgg7KCV67O0IFxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNULCBcclxuICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgd2hvOnVzZXJJbmZvLFxyXG4gICAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH0sW10pO1xyXG5cclxuICAvL+qyjOyLnOq4gCDsoovslYTsmpQsIOyLpOyWtOyalCDrsoTtirxcclxuICBjb25zdCBwb3N0TGlrZUJ0biA9IHVzZUNhbGxiYWNrKChsaWtlRmxhZyk9PntcclxuXHJcbiAgICBpZighdXNlckluZm8pe1xyXG4gICAgICBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VnCDshJzruYTsiqQg7J6F64uI64ukLicpOyBcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG1haW5Qb3N0c18xMDAxSW5mb1swXS5mbGFnPT09J1knKXtcclxuICAgICAgXHJcbiAgICAgIGFsZXJ0KCfsnbTrr7gg7KKL7JWE7JqUISDsi6vslrTsmpQhIO2WiOyKteuLiOuLpC4nKTsgICAgICAgXHJcbiAgICAgIHJldHVybjsgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL+qyjOyLnOq4gCDsoovslYTsmpQhXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgICB3aG86IHVzZXJJbmZvLCBcclxuICAgICAgICAgICAgICBmbGFnOmxpa2VGbGFnLCBcclxuICAgICAgICAgICAgICBtYWluUG9zdHNfMTAwMUluZm86Wy4uLm1haW5Qb3N0c18xMDAxSW5mb10sIFxyXG4gICAgICAgICAgICB9XHJcbiAgICB9KTsgXHJcbiAgXHJcblxyXG4gIH0sW21haW5Qb3N0c18xMDAxSW5mb10pXHJcblxyXG5cclxuICAvL+uMk+q4gCDsoovslYTsmpQsIOyLq+yWtOyalCDrsoTtirwgXHJcbiAgY29uc3QgbGlrZUJ0biA9dXNlQ2FsbGJhY2soKGNvbW1lbnRpZCxmbGFnLGxpa2VEaXNsaWtlKT0+e1xyXG4gICAgICBpZighdXNlckluZm8pe1xyXG4gICAgICAgIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWcIOyEnOu5hOyKpCDsnoXri4jri6QuJyk7IFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoZmxhZz09PVwiWVwiKXtcclxuICAgICAgICBcclxuICAgICAgICBhbGVydCgn7J2066+4IOyii+yVhOyalCEg7Iur7Ja07JqUISDtlojsirXri4jri6QuJyk7IFxyXG4gICAgICAgIHJldHVybjsgXHJcbiAgXHJcbiAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAvL+uMk+q4gCDsoovslYTsmpQhXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNULCBcclxuICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICBjb21tZW50aWQsXHJcbiAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgIGZsYWc6IGxpa2VEaXNsaWtlICxcclxuICAgICAgICAgICAgd2hvOiB1c2VySW5mbyxcclxuICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudHM6Wy4uLm1haW5Qb3N0c18xMDAxQ29tbWVudHNdLFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgICBhbGVydChgJHtsaWtlRGlzbGlrZX1gKTsgXHJcbiAgICBcclxuICAgIH0sW21haW5Qb3N0c18xMDAxQ29tbWVudHNdKTsgXHJcblxyXG5cclxuICAvL+uMk+q4gCDsnoXroKUgXHJcbiAgY29uc3QgaW5zZXJ0Q29tbWVudCA9IHVzZUNhbGxiYWNrKChwb3N0RmxhZyxwb3N0SWQsbmlja05hbWUgLGNvbW1lbnQpPT57XHJcbiAgICBpZihjb21tZW50Lmxlbmd0aCA9PT0gMCB8fCBjb21tZW50LnJlcGxhY2UoYmxhbmtfcGF0dGVybiwnJyk9PT1cIlwiKXtcclxuICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIGFsZXJ0KCfrjJPquIDsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalCEnKTsgXHJcbiAgICAgICAgaWYocmVmLmN1cnJlbnQpe1xyXG4gICAgICAgICAgcmVmLmN1cnJlbnQuZm9jdXNJbnB1dCgpOyBcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYoY29tbWVudC5sZW5ndGggPT09IDMwMCl7XHJcbiAgICAgICAgICBhbGVydCgnMzAw7J6QIOydtOyDgSDsnoXroKUg7ZWgIOyImCDsl4bsirXri4jri6QuJyk7IFxyXG4gICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgLy/rjJPquIAg7J6F66ClXHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNULCBcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICAgIG5pY2tOYW1lICxcclxuICAgICAgICAgICAgICB3aG86dXNlckluZm8sIFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VW5mb2xkTGlzdCgnZm9sZCcpOyBcclxuXHJcblxyXG4gICAgICAgICAvL+yduO2SiyDstIjquLDtmZQsIO2PrOy7pOyKpCBcclxuICAgICAgICBpZihyZWYuY3VycmVudCl7XHJcbiAgICAgICAgICByZWYuY3VycmVudC5jbGVhcklucHV0KCk7IFxyXG4gICAgICAgICAgcmVmLmN1cnJlbnQuZm9jdXNJbnB1dCgpOyBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50cyxyZWZdKTtcclxuXHJcblxyXG5cclxuICAgICAgLy/rjIDrjJPquIAg66as7Iqk7Yq4IFxyXG4gICAgICBjb25zdCBjb21tZW50QnlDb21tZW50TGlzdCA9dXNlQ2FsbGJhY2soKHBvc3RGbGFnLG5pY2tOYW1lLHBvc3RJZCxjb21tZW50SWQsY2xpY2tDb21tZW50SWQsdW5mb2xkTGlzdCk9PntcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZih1bmZvbGRMaXN0PT09J3VuZm9sZCcgJiYgY29tbWVudElkID09PSBjbGlja0NvbW1lbnRJZCl7XHJcbiAgICAgICAgICAgICAgICAgIHNldFVuZm9sZExpc3QoJ2ZvbGQnKTsgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgc2V0VW5mb2xkTGlzdCgndW5mb2xkJyk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hvOnVzZXJJbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pOyAgICAgIFxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgIH0sW21haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMsdW5mb2xkTGlzdF0pOyBcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIFxyXG4gICAgPGRpdiA+XHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIO2DgOydtO2LgC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZScgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3dUaCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPnttYWluUG9zdHNfMTAwMUluZm9bMF0udGl0bGV9IFt7bWFpblBvc3RzXzEwMDFDb21tZW50cy5sZW5ndGh9XXttYWluUG9zdHNfMTAwMUluZm9bMF0uZmxhZ308L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+XHJcbiAgICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4gIHttYWluUG9zdHNfMTAwMUluZm9bMF0udXNlck5pY2tOYW1lfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGRUaW1lT3V0bGluZWQgLz4gIHtjdXN0dW1EYXRlRm9ybWF0KG1haW5Qb3N0c18xMDAxSW5mb1swXS5jcmVhdGVkRGF0ZSl9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHttYWluUG9zdHNfMTAwMUluZm9bMF0uZ29vZH0gPERpc2xpa2VUd29Ub25lICB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHttYWluUG9zdHNfMTAwMUluZm9bMF0uYmFkfSBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7YOA7J207YuALS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCJhdXRvXCIsIGJvcmRlcjpcIjFweCBzb2xpZFwiLCBib3JkZXJDb2xvcjpcIiM4Y2M0OWNcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgICAgIOq0keqzoOyeheuLiOuLpC5cclxuICAgICAgPC9kaXY+XHJcbiAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIOy7qO2FkOy4oC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6bWFpblBvc3RzXzEwMDFJbmZvWzBdLmNvbnRlbnR9fS8+XHJcbiAgICAgPC9kaXY+IFxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDsu6jthZDsuKAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfSAgIFxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcImF1dG9cIiwgYm9yZGVyOlwiMXB4IHNvbGlkXCIsIGJvcmRlckNvbG9yOlwiIzhjYzQ5Y1wiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAg6rSR6rOg7J6F64uI64ukLlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuyii+yVhOyalCDsi6vslrTsmpQg67KE7Yq8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZSc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJyBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PnBvc3RMaWtlQnRuKCdnb29kJyl9PjxMaWtlVHdvVG9uZSAgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz48L0J1dHRvbj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8QnV0dG9uIG9uQ2xpY2s9eygpPT5wb3N0TGlrZUJ0bignYmFkJyl9PjxEaXNsaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPjwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgey8q7KKL7JWE7JqUIOyLq+yWtOyalCDrsoTtirwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB7LyrrjJPquIAg7J6F66ClLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgPENvbW1lbnRUZXh0QXJlYSAgIFxyXG4gICAgICAgICAgICBwb3N0RmxhZz17cG9zdEZsYWd9IFxyXG4gICAgICAgICAgICBuaWNrTmFtZT17bmlja05hbWV9IFxyXG4gICAgICAgICAgICBwb3N0SWQ9e3Bvc3RJZH0gXHJcbiAgICAgICAgICAgIHVzZXJJbmZvPXt1c2VySW5mb31cclxuICAgICAgICAgICAgaW5zZXJ0Q29tbWVudD17aW5zZXJ0Q29tbWVudH1cclxuICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgIC8+XHJcbiAgICB7LyrrjJPquIAg7J6F66ClLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcblxyXG5cclxuXHJcbiAgICB7LyrrjJPquIAg66as7Iqk7Yq4LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlRhYmxlXCI+XHJcbiAgICAgIHttYWluUG9zdHNfMTAwMUNvbW1lbnRzICYmIG1haW5Qb3N0c18xMDAxQ29tbWVudHMubWFwKCh2LGkpPT5cclxuXHJcbiAgICAgICAgPENvbW1lbnRzMTAwMSBcclxuICAgICAgICAgICAgICBrZXk9e2l9IFxyXG4gICAgICAgICAgICAgIHBvc3RGbGFnPXtwb3N0RmxhZ30gXHJcbiAgICAgICAgICAgICAgbmlja05hbWU9e25pY2tOYW1lfSBcclxuICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3RJZH0gXHJcbiAgICAgICAgICAgICAgdXNlckluZm89e3VzZXJJbmZvfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgY29tbWVudElkPXt2LmNvbW1lbnRJZH0gXHJcbiAgICAgICAgICAgICAgY29tbWVudD17di5jb21tZW50fSBcclxuICAgICAgICAgICAgICB3aG89e3Yud2hvfSBcclxuICAgICAgICAgICAgICBmbGFnPXt2LmZsYWd9IFxyXG5cclxuICAgICAgICAgICAgICBnb29kPXt2Lmdvb2R9XHJcbiAgICAgICAgICAgICAgYmFkPXt2LmJhZH0gICAgICBcclxuICAgICAgICAgICAgICBjcmVhdGVkRGF0ZT17di5jcmVhdGVkRGF0ZX0gXHJcbiAgICBcclxuICAgICAgICAgICAgICBsaWtlQnRuPXtsaWtlQnRufVxyXG5cclxuICAgICAgICAgICAgICBjbGlja2VkQ29tcG9uZW50PXt2LmNsaWNrZWRDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgbGlrZURpc2xpa2VmbGFnPXt2Lmxpa2VEaXNsaWtlZmxhZ31cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBieUNvbW1lbnRDb3VudD17di5ieUNvbW1lbnRDb3VudH1cclxuICAgICAgICAgICAgICBjb21tZW50QnlDb21tZW50TGlzdD17Y29tbWVudEJ5Q29tbWVudExpc3R9XHJcbiAgICAgICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cz17bWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c1swXSAmJiBtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzWzBdLmNvbW1lbnRJZCA9PT0gdi5jb21tZW50SWQgPyBtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzIDogJyd9XHJcbiAgICAgICAgICAgICAgdW5mb2xkTGlzdD17dW5mb2xkTGlzdH1cclxuXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKuuMk+q4gCDrpqzsiqTtirgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxufVxyXG5cclxuXHJcbmRldGFpbFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+e1xyXG5cclxuICBjb25zdCBwb3N0SWQgICA9IGNvbnRleHQucXVlcnkucG9zdElkOyBcclxuICBjb25zdCBuaWNrTmFtZSA9IGNvbnRleHQucXVlcnkubmlja05hbWU7IFxyXG4gIGNvbnN0IHBvc3RGbGFnID0gY29udGV4dC5xdWVyeS5wb3N0RmxhZzsgXHJcbiAgcmV0dXJuIHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWR9OyBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWxQYWdlOyAiXSwic291cmNlUm9vdCI6IiJ9