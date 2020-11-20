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

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(detailPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIl0sIm5hbWVzIjpbImRldGFpbFBhZ2UiLCJuaWNrTmFtZSIsInBvc3RGbGFnIiwicG9zdElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJtYWluUG9zdHNfMTAwMSIsIm1haW5Qb3N0c18xMDAxSW5mbyIsIm1haW5Qb3N0c18xMDAxQ29tbWVudHMiLCJhdXRoIiwidXNlckluZm8iLCJibGFua19wYXR0ZXJuIiwidXNlU3RhdGUiLCJpbnNlcnRDbGljayIsInNldEluc2VydENsaWNrIiwidXNlRWZmZWN0IiwidHlwZSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QiLCJkYXRhIiwid2hvIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCIsImxpa2VCdG4iLCJ1c2VDYWxsYmFjayIsImNvbW1lbnRpZCIsImZsYWciLCJsaWtlRGlzbGlrZSIsImFsZXJ0IiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCIsImluc2VydENvbW1lbnQiLCJjb21tZW50IiwibGVuZ3RoIiwicmVwbGFjZSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiLCJ0aXRsZSIsInVzZXJOaWNrTmFtZSIsImN1c3R1bURhdGVGb3JtYXQiLCJjcmVhdGVkRGF0ZSIsImdvb2QiLCJiYWQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIl9faHRtbCIsImNvbnRlbnQiLCJtYXAiLCJ2IiwiaSIsImNvbW1lbnRJZCIsImNsaWNrZWRDb21wb25lbnQiLCJsaWtlRGlzbGlrZWZsYWciLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiLCJSZWFjdCIsIm1lbW8iXSwi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T0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFckJ6RCxrQkFGcUIsR0FFVnlELE9BQU8sQ0FBQ0MsS0FBUixDQUFjMUQsTUFGSjtBQUdyQkYsb0JBSHFCLEdBR1YyRCxPQUFPLENBQUNDLEtBQVIsQ0FBYzVELFFBSEo7QUFJckJDLG9CQUpxQixHQUlWMEQsT0FBTyxDQUFDQyxLQUFSLENBQWMzRCxRQUpKO0FBQUEsNkNBS3BCO0FBQUNELHNCQUFRLEVBQVJBLFFBQUQ7QUFBVUMsc0JBQVEsRUFBUkEsUUFBVjtBQUFtQkMsb0JBQU0sRUFBTkE7QUFBbkIsYUFMb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT2UyRCwyR0FBSyxDQUFDQyxJQUFOLENBQVcvRCxVQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRldGFpbFBhZ2UuanMuNTgwYmFhMzIwYzE4N2MyMmY3MzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsIHVzZVN0YXRlLCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxJ1xyXG5pbXBvcnQgQ29tbWVudHMxMDAxIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFfY29tbWVudHMnXHJcbmltcG9ydCBDb21tZW50VGV4dEFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMV90ZXh0QXJlYSdcclxuaW1wb3J0IFxyXG4gICAge01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCwgXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1RcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxJzsgXHJcblxyXG5pbXBvcnQge0Rpc2xpa2VUd29Ub25lLExpa2VUd29Ub25lICwgVXNlck91dGxpbmVkLCBGaWVsZFRpbWVPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgY3VzdHVtRGF0ZUZvcm1hdCBmcm9tICAnLi4vdXRpbENvbXBvbmVudC9jdXN0dW1EYXRlRm9ybWF0JztcclxuXHJcblxyXG5cclxuY29uc3QgZGV0YWlsUGFnZSAgPSAoe25pY2tOYW1lLHBvc3RGbGFnLHBvc3RJZH0pID0+e1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gIGNvbnN0IHttYWluUG9zdHNfMTAwMUluZm8gLCBcclxuICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50cyxcclxuICAgICAgICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUubWFpblBvc3RzXzEwMDEpOyBcclxuXHJcbiAgY29uc3Qge3VzZXJJbmZvfSAgICAgID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuYXV0aCk7XHJcblxyXG4gIGNvbnN0IGJsYW5rX3BhdHRlcm4gPSAvXlxccyt8XFxzKyYvZzsgIFxyXG4gIGNvbnN0IFtpbnNlcnRDbGljaywgc2V0SW5zZXJ0Q2xpY2tdID0gdXNlU3RhdGUoJycpOyBcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gIFxyXG4gICAgLy/rjJPquIAg66as7Iqk7Yq4IFxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QsIFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgd2hvOnVzZXJJbmZvLCBcclxuICAgICAgfVxyXG4gICAgfSk7IFxyXG5cclxuICAgIC8v7IOB7IS4IOygleuztCBcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCwgXHJcbiAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSxbXSk7XHJcblxyXG5cclxuICAvL+yii+yVhOyalCwg7Iur7Ja07JqUIOuyhO2KvCBcclxuICBjb25zdCBsaWtlQnRuID11c2VDYWxsYmFjaygoY29tbWVudGlkLGZsYWcsbGlrZURpc2xpa2UpPT57XHJcbiAgICAgIGlmKCF1c2VySW5mbyl7XHJcbiAgICAgICAgYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlZwg7ISc67mE7IqkIOyeheuLiOuLpC4nKTsgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihmbGFnPT09XCJZXCIpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFsZXJ0KCfsnbTrr7gg7KKL7JWE7JqUISDsi6vslrTsmpQhIO2WiOyKteuLiOuLpC4nKTsgXHJcbiAgICAgICAgcmV0dXJuOyBcclxuICBcclxuICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgIC8v64yT6riAIOyii+yVhOyalCFcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIGNvbW1lbnRpZCxcclxuICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgZmxhZzogbGlrZURpc2xpa2UgLFxyXG4gICAgICAgICAgICB3aG86IHVzZXJJbmZvLFxyXG4gICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50czpbLi4ubWFpblBvc3RzXzEwMDFDb21tZW50c10sXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgIGFsZXJ0KGAke2xpa2VEaXNsaWtlfWApOyBcclxuICAgIFxyXG4gICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50c10pOyBcclxuXHJcblxyXG5cclxuXHJcbiAgLy/rjJPquIAg7J6F66ClIFxyXG4gIGNvbnN0IGluc2VydENvbW1lbnQgPSB1c2VDYWxsYmFjaygocG9zdEZsYWcscG9zdElkLG5pY2tOYW1lICxjb21tZW50KT0+e1xyXG4gICAgaWYoY29tbWVudC5sZW5ndGggPT09IDAgfHwgY29tbWVudC5yZXBsYWNlKGJsYW5rX3BhdHRlcm4sJycpPT09XCJcIil7XHJcbiAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICBhbGVydCgn64yT6riA7J2EIOyeheugpe2VtCDso7zshLjsmpQhJyk7IFxyXG4gICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZihjb21tZW50Lmxlbmd0aCA9PT0gMzAwKXtcclxuICAgICAgICAgIGFsZXJ0KCczMDDsnpAg7J207IOBIOyeheugpSDtlaAg7IiYIOyXhuyKteuLiOuLpC4nKTsgXHJcbiAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL+uMk+q4gCDsnoXroKVcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QsIFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgICAgbmlja05hbWUgLFxyXG4gICAgICAgICAgICAgIHdobzp1c2VySW5mbywgXHJcbiAgICAgICAgICAgICAgY29tbWVudCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfrjJPquIAg7J6F66ClIO2bhCAnLG1haW5Qb3N0c18xMDAxQ29tbWVudHMgKTsgXHJcbiAgICAgICAgLy9zZXRNYWluUG9zdHNfMTAwMV9jb21tZW50c0FycmF5KFsuLi5tYWluUG9zdHNfMTAwMUNvbW1lbnRzXSk7IFxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ21haW5Qb3N0c18xMDAxQ29tbWVudHM9PicgLCBtYWluUG9zdHNfMTAwMUNvbW1lbnRzKTsgXHJcbiAgICAgICAgLy9cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgIC8v64yT6riAIOumrOyKpO2KuCBcclxuICAgICAgICAvLyAgIGRpc3BhdGNoKHtcclxuICAgICAgICAvLyAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULCBcclxuICAgICAgICAvLyAgICAgZGF0YTp7XHJcbiAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgLy8gICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgLy8gICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgLy8gICAgICAgd2hvOnVzZXJJbmZvLFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7IFxyXG4gICAgICAgLy8gY29uc29sZS5sb2coJ+u5oOudveyKpCDruYTslrQgQXJyYXk9PicgLCBtYWluUG9zdHNfMTAwMV9jb21tZW50c0FycmF5KTsgXHJcbiAgICAgICAgLy8gc2V0TWFpblBvc3RzXzEwMDFfY29tbWVudHNBcnJheShbbWFpblBvc3RzXzEwMDFDb21tZW50c1swXSwuLi5tYWluUG9zdHNfMTAwMV9jb21tZW50c0FycmF5XSk7XHJcblxyXG4gICAgICAgLy9cclxuXHJcblxyXG4gICAgICB9LFttYWluUG9zdHNfMTAwMUNvbW1lbnRzXSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgXHJcbiAgICA8ZGl2ID5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7YOA7J207YuALS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJyBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+e21haW5Qb3N0c18xMDAxSW5mb1swXS50aXRsZX0gW3ttYWluUG9zdHNfMTAwMUNvbW1lbnRzLmxlbmd0aH1dPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPlxyXG4gICAgICAgICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+ICB7bWFpblBvc3RzXzEwMDFJbmZvWzBdLnVzZXJOaWNrTmFtZX08YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkVGltZU91dGxpbmVkIC8+ICB7Y3VzdHVtRGF0ZUZvcm1hdChtYWluUG9zdHNfMTAwMUluZm9bMF0uY3JlYXRlZERhdGUpfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGlrZVR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz4gOiB7bWFpblBvc3RzXzEwMDFJbmZvWzBdLmdvb2R9IDxEaXNsaWtlVHdvVG9uZSAgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz4gOiB7bWFpblBvc3RzXzEwMDFJbmZvWzBdLmJhZH0gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIO2DgOydtO2LgC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiYXV0b1wiLCBib3JkZXI6XCIxcHggc29saWRcIiwgYm9yZGVyQ29sb3I6XCIjOGNjNDljXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICAgICDqtJHqs6DsnoXri4jri6QuXHJcbiAgICAgIDwvZGl2PlxyXG4gICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDsu6jthZDsuKAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOm1haW5Qb3N0c18xMDAxSW5mb1swXS5jb250ZW50fX0vPlxyXG4gICAgIDwvZGl2PiBcclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7Luo7YWQ7LigLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL30gICBcclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCJhdXRvXCIsIGJvcmRlcjpcIjFweCBzb2xpZFwiLCBib3JkZXJDb2xvcjpcIiM4Y2M0OWNcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgIOq0keqzoOyeheuLiOuLpC5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgey8q7KKL7JWE7JqUIOyLq+yWtOyalCDrsoTtirwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93VGgnIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgPEJ1dHRvbj48TGlrZVR3b1RvbmUgIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+PC9CdXR0b24+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PEJ1dHRvbj48RGlzbGlrZVR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz48L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKuyii+yVhOyalCDsi6vslrTsmpQg67KE7Yq8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgey8q64yT6riAIOyeheugpS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgIDxDb21tZW50VGV4dEFyZWEgICBcclxuICAgICAgICAgICAgcG9zdEZsYWc9e3Bvc3RGbGFnfSBcclxuICAgICAgICAgICAgbmlja05hbWU9e25pY2tOYW1lfSBcclxuICAgICAgICAgICAgcG9zdElkPXtwb3N0SWR9IFxyXG4gICAgICAgICAgICB1c2VySW5mbz17dXNlckluZm99XHJcbiAgICAgICAgICAgIGluc2VydENvbW1lbnQ9e2luc2VydENvbW1lbnR9XHJcbiAgICAgICAgICAgIGluc2VydENsaWNrPXtpbnNlcnRDbGlja31cclxuICAgLz5cclxuICAgIHsvKuuMk+q4gCDsnoXroKUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuuMk+q4gCDrpqzsiqTtirgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2VGFibGVcIj5cclxuICAgICAge21haW5Qb3N0c18xMDAxQ29tbWVudHMgJiYgbWFpblBvc3RzXzEwMDFDb21tZW50cy5tYXAoKHYsaSk9PlxyXG5cclxuICAgICAgICA8Q29tbWVudHMxMDAxIFxyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICBwb3N0RmxhZz17cG9zdEZsYWd9IFxyXG4gICAgICAgICAgICAgIG5pY2tOYW1lPXtuaWNrTmFtZX0gXHJcbiAgICAgICAgICAgICAgcG9zdElkPXtwb3N0SWR9IFxyXG4gICAgICAgICAgICAgIHVzZXJJbmZvPXt1c2VySW5mb31cclxuICAgIFxyXG4gICAgICAgICAgICAgIGNvbW1lbnRJZD17di5jb21tZW50SWR9IFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQ9e3YuY29tbWVudH0gXHJcbiAgICAgICAgICAgICAgd2hvPXt2Lndob30gXHJcbiAgICAgICAgICAgICAgZmxhZz17di5mbGFnfSBcclxuXHJcbiAgICAgICAgICAgICAgZ29vZD17di5nb29kfVxyXG4gICAgICAgICAgICAgIGJhZD17di5iYWR9ICAgICAgXHJcbiAgICAgICAgICAgICAgY3JlYXRlZERhdGU9e3YuY3JlYXRlZERhdGV9IFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgbGlrZUJ0bj17bGlrZUJ0bn1cclxuXHJcbiAgICAgICAgICAgICAgY2xpY2tlZENvbXBvbmVudD17di5jbGlja2VkQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgIGxpa2VEaXNsaWtlZmxhZz17di5saWtlRGlzbGlrZWZsYWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKuuMk+q4gCDrpqzsiqTtirgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxufVxyXG5cclxuXHJcbmRldGFpbFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+e1xyXG5cclxuICBjb25zdCBwb3N0SWQgICA9IGNvbnRleHQucXVlcnkucG9zdElkOyBcclxuICBjb25zdCBuaWNrTmFtZSA9IGNvbnRleHQucXVlcnkubmlja05hbWU7IFxyXG4gIGNvbnN0IHBvc3RGbGFnID0gY29udGV4dC5xdWVyeS5wb3N0RmxhZzsgXHJcbiAgcmV0dXJuIHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWR9OyBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKGRldGFpbFBhZ2UpOyAiXSwic291cmNlUm9vdCI6IiJ9