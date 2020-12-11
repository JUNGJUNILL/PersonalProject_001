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
        mainPosts_1001Info: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(mainPosts_1001Info[0])
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
  }, mainPosts_1001Info[0].title, " [", mainPosts_1001Comments.length, "]")), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIl0sIm5hbWVzIjpbImRldGFpbFBhZ2UiLCJuaWNrTmFtZSIsInBvc3RGbGFnIiwicG9zdElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJtYWluUG9zdHNfMTAwMSIsIm1haW5Qb3N0c18xMDAxSW5mbyIsIm1haW5Qb3N0c18xMDAxQ29tbWVudHMiLCJtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzIiwiYXV0aCIsInVzZXJJbmZvIiwicmVmIiwiY3JlYXRlUmVmIiwiYmxhbmtfcGF0dGVybiIsInVzZVN0YXRlIiwidW5mb2xkTGlzdCIsInNldFVuZm9sZExpc3QiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCIsImRhdGEiLCJ3aG8iLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUIiwicG9zdExpa2VCdG4iLCJ1c2VDYWxsYmFjayIsImxpa2VGbGFnIiwiYWxlcnQiLCJmbGFnIiwiTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1QiLCJsaWtlQnRuIiwiY29tbWVudGlkIiwibGlrZURpc2xpa2UiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNUIiwiaW5zZXJ0Q29tbWVudCIsImNvbW1lbnQiLCJsZW5ndGgiLCJyZXBsYWNlIiwiY3VycmVudCIsImZvY3VzSW5wdXQiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QiLCJjbGVhcklucHV0IiwiY29tbWVudEJ5Q29tbWVudExpc3QiLCJjb21tZW50SWQiLCJjbGlja0NvbW1lbnRJZCIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCIsIm1hcmdpblRvcCIsInRpdGxlIiwidXNlck5pY2tOYW1lIiwiY3VzdHVtRGF0ZUZvcm1hdCIsImNyZWF0ZWREYXRlIiwiZ29vZCIsImJhZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiX19odG1sIiwiY29udGVudCIsIm1hcCIsInYiLCJpIiwiY2xpY2tlZENvbXBvbmVudCIsImxpa2VEaXNsaWtlZmxhZyIsImJ5Q29tbWVudENvdW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLFVBQVUsR0FBSSxTQUFkQSxVQUFjLE9BQStCO0FBQUE7O0FBQUEsTUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLE1BQXBCQyxRQUFvQixRQUFwQkEsUUFBb0I7QUFBQSxNQUFYQyxNQUFXLFFBQVhBLE1BQVc7QUFFakQsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGaUQscUJBTXZDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNDLGNBQWY7QUFBQSxHQUFELENBTjRCO0FBQUEsTUFHMUNDLGtCQUgwQyxnQkFHMUNBLGtCQUgwQztBQUFBLE1BSTFDQyxzQkFKMEMsZ0JBSTFDQSxzQkFKMEM7QUFBQSxNQUsxQ0MsK0JBTDBDLGdCQUsxQ0EsK0JBTDBDOztBQUFBLHNCQVF6QkwsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDSyxJQUFmO0FBQUEsR0FBRCxDQVJjO0FBQUEsTUFRMUNDLFFBUjBDLGlCQVExQ0EsUUFSMEM7O0FBU2pELE1BQU1DLEdBQUcsR0FBR0MsdURBQVMsRUFBckI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsWUFBdEI7O0FBVmlELGtCQVdkQyxzREFBUSxDQUFDLE1BQUQsQ0FYTTtBQUFBLE1BVzFDQyxVQVgwQztBQUFBLE1BVy9CQyxhQVgr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QSwrTEFBNkIsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXJCcEUsa0JBRnFCLEdBRVZvRSxPQUFPLENBQUNDLEtBQVIsQ0FBY3JFLE1BRko7QUFHckJGLG9CQUhxQixHQUdWc0UsT0FBTyxDQUFDQyxLQUFSLENBQWN2RSxRQUhKO0FBSXJCQyxvQkFKcUIsR0FJVnFFLE9BQU8sQ0FBQ0MsS0FBUixDQUFjdEUsUUFKSjtBQUFBLDZDQUtwQjtBQUFDRCxzQkFBUSxFQUFSQSxRQUFEO0FBQVVDLHNCQUFRLEVBQVJBLFFBQVY7QUFBbUJDLG9CQUFNLEVBQU5BO0FBQW5CLGFBTG9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9lSCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGV0YWlsUGFnZS5qcy44ZDdiZThkNjhmNjYxMjEwNTI1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDEnXHJcbmltcG9ydCBDb21tZW50czEwMDEgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMV9jb21tZW50cydcclxuaW1wb3J0IENvbW1lbnRUZXh0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxX3RleHRBcmVhJ1xyXG5pbXBvcnQgXHJcbiAgICB7TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULCBcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1RcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxJzsgXHJcblxyXG5pbXBvcnQge0Rpc2xpa2VUd29Ub25lLExpa2VUd29Ub25lICwgVXNlck91dGxpbmVkLCBGaWVsZFRpbWVPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgY3VzdHVtRGF0ZUZvcm1hdCBmcm9tICAnLi4vdXRpbENvbXBvbmVudC9jdXN0dW1EYXRlRm9ybWF0JztcclxuXHJcblxyXG5cclxuY29uc3QgZGV0YWlsUGFnZSAgPSAoe25pY2tOYW1lLHBvc3RGbGFnLHBvc3RJZH0pID0+e1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gIGNvbnN0IHttYWluUG9zdHNfMTAwMUluZm8gLCBcclxuICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50cyxcclxuICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c1xyXG4gICAgICAgIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5tYWluUG9zdHNfMTAwMSk7IFxyXG5cclxuICBjb25zdCB7dXNlckluZm99ICAgICAgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5hdXRoKTtcclxuICBjb25zdCByZWYgPSBjcmVhdGVSZWYoKTsgXHJcbiAgY29uc3QgYmxhbmtfcGF0dGVybiA9IC9eXFxzK3xcXHMrJi9nOyAgXHJcbiAgY29uc3QgW3VuZm9sZExpc3Qsc2V0VW5mb2xkTGlzdF0gPSB1c2VTdGF0ZSgnZm9sZCcpOyBcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBcclxuICAgIC8v64yT6riAIOumrOyKpO2KuCBcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULCBcclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgcG9zdElkLFxyXG4gICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgIHdobzp1c2VySW5mbywgXHJcbiAgICAgIH1cclxuICAgIH0pOyBcclxuXHJcbiAgICAvL+yDgeyEuCDsoJXrs7QgXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICB3aG86dXNlckluZm8sXHJcbiAgICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSxbXSk7XHJcblxyXG4gIC8v6rKM7Iuc6riAIOyii+yVhOyalCwg7Iuk7Ja07JqUIOuyhO2KvFxyXG4gIGNvbnN0IHBvc3RMaWtlQnRuID0gdXNlQ2FsbGJhY2soKGxpa2VGbGFnKT0+e1xyXG5cclxuICAgIGlmKCF1c2VySW5mbyl7XHJcbiAgICAgIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWcIOyEnOu5hOyKpCDsnoXri4jri6QuJyk7IFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYobWFpblBvc3RzXzEwMDFJbmZvWzBdLmZsYWc9PT0nWScpe1xyXG4gICAgICBcclxuICAgICAgYWxlcnQoJ+ydtOuvuCDsoovslYTsmpQhIOyLq+yWtOyalCEg7ZaI7Iq164uI64ukLicpOyAgICAgICBcclxuICAgICAgcmV0dXJuOyBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8v6rKM7Iuc6riAIOyii+yVhOyalCFcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICAgIHdobzogdXNlckluZm8sIFxyXG4gICAgICAgICAgICAgIGZsYWc6bGlrZUZsYWcsIFxyXG4gICAgICAgICAgICAgIG1haW5Qb3N0c18xMDAxSW5mbzpbLi4ubWFpblBvc3RzXzEwMDFJbmZvWzBdXSwgXHJcbiAgICAgICAgICAgIH1cclxuICAgIH0pOyBcclxuICBcclxuXHJcbiAgfSxbbWFpblBvc3RzXzEwMDFJbmZvXSlcclxuXHJcblxyXG4gIC8v64yT6riAIOyii+yVhOyalCwg7Iur7Ja07JqUIOuyhO2KvCBcclxuICBjb25zdCBsaWtlQnRuID11c2VDYWxsYmFjaygoY29tbWVudGlkLGZsYWcsbGlrZURpc2xpa2UpPT57XHJcbiAgICAgIGlmKCF1c2VySW5mbyl7XHJcbiAgICAgICAgYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlZwg7ISc67mE7IqkIOyeheuLiOuLpC4nKTsgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihmbGFnPT09XCJZXCIpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFsZXJ0KCfsnbTrr7gg7KKL7JWE7JqUISDsi6vslrTsmpQhIO2WiOyKteuLiOuLpC4nKTsgXHJcbiAgICAgICAgcmV0dXJuOyBcclxuICBcclxuICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgIC8v64yT6riAIOyii+yVhOyalCFcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIGNvbW1lbnRpZCxcclxuICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgZmxhZzogbGlrZURpc2xpa2UgLFxyXG4gICAgICAgICAgICB3aG86IHVzZXJJbmZvLFxyXG4gICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50czpbLi4ubWFpblBvc3RzXzEwMDFDb21tZW50c10sXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgIGFsZXJ0KGAke2xpa2VEaXNsaWtlfWApOyBcclxuICAgIFxyXG4gICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50c10pOyBcclxuXHJcblxyXG4gIC8v64yT6riAIOyeheugpSBcclxuICBjb25zdCBpbnNlcnRDb21tZW50ID0gdXNlQ2FsbGJhY2soKHBvc3RGbGFnLHBvc3RJZCxuaWNrTmFtZSAsY29tbWVudCk9PntcclxuICAgIGlmKGNvbW1lbnQubGVuZ3RoID09PSAwIHx8IGNvbW1lbnQucmVwbGFjZShibGFua19wYXR0ZXJuLCcnKT09PVwiXCIpe1xyXG4gICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgYWxlcnQoJ+uMk+q4gOydhCDsnoXroKXtlbQg7KO87IS47JqUIScpOyBcclxuICAgICAgICBpZihyZWYuY3VycmVudCl7XHJcbiAgICAgICAgICByZWYuY3VycmVudC5mb2N1c0lucHV0KCk7IFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZihjb21tZW50Lmxlbmd0aCA9PT0gMzAwKXtcclxuICAgICAgICAgIGFsZXJ0KCczMDDsnpAg7J207IOBIOyeheugpSDtlaAg7IiYIOyXhuyKteuLiOuLpC4nKTsgXHJcbiAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAvL+uMk+q4gCDsnoXroKVcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QsIFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgICAgbmlja05hbWUgLFxyXG4gICAgICAgICAgICAgIHdobzp1c2VySW5mbywgXHJcbiAgICAgICAgICAgICAgY29tbWVudCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRVbmZvbGRMaXN0KCdmb2xkJyk7IFxyXG5cclxuXHJcbiAgICAgICAgIC8v7J247ZKLIOy0iOq4sO2ZlCwg7Y+s7Luk7IqkIFxyXG4gICAgICAgIGlmKHJlZi5jdXJyZW50KXtcclxuICAgICAgICAgIHJlZi5jdXJyZW50LmNsZWFySW5wdXQoKTsgXHJcbiAgICAgICAgICByZWYuY3VycmVudC5mb2N1c0lucHV0KCk7IFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICB9LFttYWluUG9zdHNfMTAwMUNvbW1lbnRzLHJlZl0pO1xyXG5cclxuXHJcblxyXG4gICAgICAvL+uMgOuMk+q4gCDrpqzsiqTtirggXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRCeUNvbW1lbnRMaXN0ID11c2VDYWxsYmFjaygocG9zdEZsYWcsbmlja05hbWUscG9zdElkLGNvbW1lbnRJZCxjbGlja0NvbW1lbnRJZCx1bmZvbGRMaXN0KT0+e1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHVuZm9sZExpc3Q9PT0ndW5mb2xkJyAmJiBjb21tZW50SWQgPT09IGNsaWNrQ29tbWVudElkKXtcclxuICAgICAgICAgICAgICAgICAgc2V0VW5mb2xkTGlzdCgnZm9sZCcpOyBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICBzZXRVbmZvbGRMaXN0KCd1bmZvbGQnKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aG86dXNlckluZm8sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7ICAgICAgXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cyx1bmZvbGRMaXN0XSk7IFxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgXHJcbiAgICA8ZGl2ID5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7YOA7J207YuALS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJyBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+e21haW5Qb3N0c18xMDAxSW5mb1swXS50aXRsZX0gW3ttYWluUG9zdHNfMTAwMUNvbW1lbnRzLmxlbmd0aH1dPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPlxyXG4gICAgICAgICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+ICB7bWFpblBvc3RzXzEwMDFJbmZvWzBdLnVzZXJOaWNrTmFtZX08YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkVGltZU91dGxpbmVkIC8+ICB7Y3VzdHVtRGF0ZUZvcm1hdChtYWluUG9zdHNfMTAwMUluZm9bMF0uY3JlYXRlZERhdGUpfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGlrZVR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz4gOiB7bWFpblBvc3RzXzEwMDFJbmZvWzBdLmdvb2R9IDxEaXNsaWtlVHdvVG9uZSAgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz4gOiB7bWFpblBvc3RzXzEwMDFJbmZvWzBdLmJhZH0gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIO2DgOydtO2LgC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiYXV0b1wiLCBib3JkZXI6XCIxcHggc29saWRcIiwgYm9yZGVyQ29sb3I6XCIjOGNjNDljXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICAgICDqtJHqs6DsnoXri4jri6QuXHJcbiAgICAgIDwvZGl2PlxyXG4gICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDsu6jthZDsuKAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOm1haW5Qb3N0c18xMDAxSW5mb1swXS5jb250ZW50fX0vPlxyXG4gICAgIDwvZGl2PiBcclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7Luo7YWQ7LigLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL30gICBcclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCJhdXRvXCIsIGJvcmRlcjpcIjFweCBzb2xpZFwiLCBib3JkZXJDb2xvcjpcIiM4Y2M0OWNcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgIOq0keqzoOyeheuLiOuLpC5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB7LyrsoovslYTsmpQg7Iur7Ja07JqUIOuyhO2KvC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGUnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3dUaCcgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5wb3N0TGlrZUJ0bignZ29vZCcpfT48TGlrZVR3b1RvbmUgIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+PC9CdXR0b24+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PEJ1dHRvbiBvbkNsaWNrPXsoKT0+cG9zdExpa2VCdG4oJ2JhZCcpfT48RGlzbGlrZVR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz48L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKuyii+yVhOyalCDsi6vslrTsmpQg67KE7Yq8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgey8q64yT6riAIOyeheugpS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgIDxDb21tZW50VGV4dEFyZWEgICBcclxuICAgICAgICAgICAgcG9zdEZsYWc9e3Bvc3RGbGFnfSBcclxuICAgICAgICAgICAgbmlja05hbWU9e25pY2tOYW1lfSBcclxuICAgICAgICAgICAgcG9zdElkPXtwb3N0SWR9IFxyXG4gICAgICAgICAgICB1c2VySW5mbz17dXNlckluZm99XHJcbiAgICAgICAgICAgIGluc2VydENvbW1lbnQ9e2luc2VydENvbW1lbnR9XHJcbiAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAvPlxyXG4gICAgey8q64yT6riAIOyeheugpS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG5cclxuXHJcblxyXG4gICAgey8q64yT6riAIOumrOyKpO2KuC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkaXZUYWJsZVwiPlxyXG4gICAgICB7bWFpblBvc3RzXzEwMDFDb21tZW50cyAmJiBtYWluUG9zdHNfMTAwMUNvbW1lbnRzLm1hcCgodixpKT0+XHJcblxyXG4gICAgICAgIDxDb21tZW50czEwMDEgXHJcbiAgICAgICAgICAgICAga2V5PXtpfSBcclxuICAgICAgICAgICAgICBwb3N0RmxhZz17cG9zdEZsYWd9IFxyXG4gICAgICAgICAgICAgIG5pY2tOYW1lPXtuaWNrTmFtZX0gXHJcbiAgICAgICAgICAgICAgcG9zdElkPXtwb3N0SWR9IFxyXG4gICAgICAgICAgICAgIHVzZXJJbmZvPXt1c2VySW5mb31cclxuICAgIFxyXG4gICAgICAgICAgICAgIGNvbW1lbnRJZD17di5jb21tZW50SWR9IFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQ9e3YuY29tbWVudH0gXHJcbiAgICAgICAgICAgICAgd2hvPXt2Lndob30gXHJcbiAgICAgICAgICAgICAgZmxhZz17di5mbGFnfSBcclxuXHJcbiAgICAgICAgICAgICAgZ29vZD17di5nb29kfVxyXG4gICAgICAgICAgICAgIGJhZD17di5iYWR9ICAgICAgXHJcbiAgICAgICAgICAgICAgY3JlYXRlZERhdGU9e3YuY3JlYXRlZERhdGV9IFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgbGlrZUJ0bj17bGlrZUJ0bn1cclxuXHJcbiAgICAgICAgICAgICAgY2xpY2tlZENvbXBvbmVudD17di5jbGlja2VkQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgIGxpa2VEaXNsaWtlZmxhZz17di5saWtlRGlzbGlrZWZsYWd9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYnlDb21tZW50Q291bnQ9e3YuYnlDb21tZW50Q291bnR9XHJcbiAgICAgICAgICAgICAgY29tbWVudEJ5Q29tbWVudExpc3Q9e2NvbW1lbnRCeUNvbW1lbnRMaXN0fVxyXG4gICAgICAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHM9e21haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNbMF0gJiYgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c1swXS5jb21tZW50SWQgPT09IHYuY29tbWVudElkID8gbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cyA6ICcnfVxyXG4gICAgICAgICAgICAgIHVuZm9sZExpc3Q9e3VuZm9sZExpc3R9XHJcblxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgIFxyXG4gICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgICB7LyrrjJPquIAg66as7Iqk7Yq4LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbn1cclxuXHJcblxyXG5kZXRhaWxQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PntcclxuXHJcbiAgY29uc3QgcG9zdElkICAgPSBjb250ZXh0LnF1ZXJ5LnBvc3RJZDsgXHJcbiAgY29uc3Qgbmlja05hbWUgPSBjb250ZXh0LnF1ZXJ5Lm5pY2tOYW1lOyBcclxuICBjb25zdCBwb3N0RmxhZyA9IGNvbnRleHQucXVlcnkucG9zdEZsYWc7IFxyXG4gIHJldHVybiB7bmlja05hbWUscG9zdEZsYWcscG9zdElkfTsgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZGV0YWlsUGFnZTsgIl0sInNvdXJjZVJvb3QiOiIifQ==