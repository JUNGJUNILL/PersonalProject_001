webpackHotUpdate("static\\development\\pages\\detailPage copy.js",{

/***/ "./pages/detailPage copy.js":
/*!**********************************!*\
  !*** ./pages/detailPage copy.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_mainPosts_1001_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/mainPosts_1001/mainPosts_1001 */ "./components/mainPosts_1001/mainPosts_1001.js");
/* harmony import */ var _components_mainPosts_1001_mainPosts_1001_comments_copy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/mainPosts_1001/mainPosts_1001_comments copy */ "./components/mainPosts_1001/mainPosts_1001_comments copy.js");
/* harmony import */ var _components_mainPosts_1001_mainPosts_1001_textArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/mainPosts_1001/mainPosts_1001_textArea */ "./components/mainPosts_1001/mainPosts_1001_textArea.js");
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilComponent/custumDateFormat */ "./utilComponent/custumDateFormat.js");



var _this = undefined,
    _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\detailPage copy.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var detailPage = function detailPage(_ref) {
  _s();

  var nickName = _ref.nickName,
      postFlag = _ref.postFlag,
      postId = _ref.postId,
      mainPosts_1001Info = _ref.mainPosts_1001Info;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // const {mainPosts_1001Info} = useSelector((state)=>state.mainPosts_1001); 
  //const {userInfo}      = useSelector((state)=>state.auth);

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
  var blank_pattern = /^\s+|\s+&/g;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      insertClick = _useState[0],
      setInsertClick = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      unfoldList = _useState2[0],
      setUnfoldList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      test = _useState3[0],
      setTest = _useState3[1]; // useEffect(()=>{
  //   setTest('hello Woorld'); 
  // },[])


  console.log('디테일 mainPosts_1001Info = >', mainPosts_1001Info); // useEffect(()=>{
  //   //상세 정보 
  //    dispatch({
  //         type:MAINPOSTS_1001_DETAIL_INFO_REQUEST, 
  //         data:{
  //           postId,
  //           nickName,
  //           postFlag,
  //         }
  //   });
  // },[]);
  //좋아요, 싫어요 버튼 
  // const likeBtn =useCallback((commentid,flag,likeDislike)=>{
  //     if(!userInfo){
  //       alert('로그인이 필요한 서비스 입니다.'); 
  //       return;
  //     }
  //     if(flag==="Y"){
  //       alert('이미 좋아요! 싫어요! 했습니다.'); 
  //       return; 
  //     }else{
  //       //댓글 좋아요!
  //       dispatch({
  //         type:MAINPOSTS_1001_COMMENTLIKE_REQUEST, 
  //         data:{
  //           commentid,
  //           postFlag,
  //           postId,
  //           flag: likeDislike ,
  //           who: userInfo,
  //           nickName,
  //           mainPosts_1001Comments:[...mainPosts_1001Comments],
  //         }
  //     }); 
  //   }
  //    alert(`${likeDislike}`); 
  //   },[mainPosts_1001Comments]); 
  //댓글 입력 
  //대댓글 리스트 
  // const commentByCommentList =useCallback((postFlag,nickName,postId,commentId,byCommentCount)=>{
  //          if(byCommentCount > 0 ){
  //           setUnfoldList('unfold'); 
  //           dispatch({
  //               type:MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST,
  //               data:{
  //                   postFlag,
  //                   nickName,
  //                   postId,
  //                   commentId,
  //               }
  //           });      
  //           }else{
  //               //setUnfoldList('333'); 
  //           }
  // },[mainPosts_1001CommentByComments,unfoldList]); 

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divTableCellTh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, mainPosts_1001Info[0].title, " [", 0, "]")), __jsx("div", {
    className: "divTableRow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["UserOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }), "  ", mainPosts_1001Info[0].userNickName, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 73
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["FieldTimeOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  }), "  ", Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_10__["default"])(mainPosts_1001Info[0].createdDate), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 95
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 19
    }
  }), " : ", mainPosts_1001Info[0].good, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
      lineNumber: 138,
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
      lineNumber: 144,
      columnNumber: 6
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: mainPosts_1001Info[0].content
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
      lineNumber: 150,
      columnNumber: 6
    }
  }, "\uAD11\uACE0\uC785\uB2C8\uB2E4."), __jsx("div", {
    className: "divTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
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
      lineNumber: 157,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  })), "\xA0\xA0\xA0\xA0", __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 90
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 98
    }
  })))), __jsx(_components_mainPosts_1001_mainPosts_1001_comments_copy__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }));
};

_s(detailPage, "eEHzBI14Swvv84yhBm0DNsAochY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

detailPage.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var postId, nickName, postFlag, mainPosts_1001Info;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            postId = context.query.postId;
            nickName = context.query.nickName;
            postFlag = context.query.postFlag;
            mainPosts_1001Info = JSON.parse(context.query.mainPosts_1001Info);
            return _context.abrupt("return", {
              nickName: nickName,
              postFlag: postFlag,
              postId: postId,
              mainPosts_1001Info: mainPosts_1001Info
            });

          case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlIGNvcHkuanMiXSwibmFtZXMiOlsiZGV0YWlsUGFnZSIsIm5pY2tOYW1lIiwicG9zdEZsYWciLCJwb3N0SWQiLCJtYWluUG9zdHNfMTAwMUluZm8iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicmVmIiwiY3JlYXRlUmVmIiwiYmxhbmtfcGF0dGVybiIsInVzZVN0YXRlIiwiaW5zZXJ0Q2xpY2siLCJzZXRJbnNlcnRDbGljayIsInVuZm9sZExpc3QiLCJzZXRVbmZvbGRMaXN0IiwidGVzdCIsInNldFRlc3QiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwidGl0bGUiLCJ1c2VyTmlja05hbWUiLCJjdXN0dW1EYXRlRm9ybWF0IiwiY3JlYXRlZERhdGUiLCJnb29kIiwiYmFkIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJfX2h0bWwiLCJjb250ZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5IiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxVQUFVLEdBQUksU0FBZEEsVUFBYyxPQUFrRDtBQUFBOztBQUFBLE1BQWhEQyxRQUFnRCxRQUFoREEsUUFBZ0Q7QUFBQSxNQUF2Q0MsUUFBdUMsUUFBdkNBLFFBQXVDO0FBQUEsTUFBOUJDLE1BQThCLFFBQTlCQSxNQUE4QjtBQUFBLE1BQXZCQyxrQkFBdUIsUUFBdkJBLGtCQUF1QjtBQUVwRSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCLENBRm9FLENBSXJFO0FBRUM7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyx1REFBUyxFQUFyQjtBQUNBLE1BQU1DLGFBQWEsR0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUixDQURuRixDQURGLENBbENBLEVBNkNFLE1BQUMsK0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdDRixDQUZBO0FBb0RILENBdkpEOztHQUFNaEMsVTtVQUVhTSx1RDs7O0FBd0puQk4sVUFBVSxDQUFDbUMsZUFBWDtBQUFBLCtMQUE2QixpQkFBT0MsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFckJqQyxrQkFGcUIsR0FFVmlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjbEMsTUFGSjtBQUdyQkYsb0JBSHFCLEdBR1ZtQyxPQUFPLENBQUNDLEtBQVIsQ0FBY3BDLFFBSEo7QUFJckJDLG9CQUpxQixHQUlWa0MsT0FBTyxDQUFDQyxLQUFSLENBQWNuQyxRQUpKO0FBS3JCRSw4QkFMcUIsR0FLQWtDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxPQUFPLENBQUNDLEtBQVIsQ0FBY2pDLGtCQUF6QixDQUxBO0FBQUEsNkNBUXBCO0FBQUNILHNCQUFRLEVBQVJBLFFBQUQ7QUFBVUMsc0JBQVEsRUFBUkEsUUFBVjtBQUFtQkMsb0JBQU0sRUFBTkEsTUFBbkI7QUFBMEJDLGdDQUFrQixFQUFsQkE7QUFBMUIsYUFSb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWVKLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkZXRhaWxQYWdlIGNvcHkuanMuMDQ3OGE2YjM0ODIyNTY5YmE1NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsIHVzZVN0YXRlLCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxJ1xyXG5pbXBvcnQgQ29tbWVudHMxMDAxIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFfY29tbWVudHMgY29weSdcclxuaW1wb3J0IENvbW1lbnRUZXh0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxX3RleHRBcmVhJ1xyXG5pbXBvcnQgXHJcbiAgICB7TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULCBcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1JFUVVFU1RcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxJzsgXHJcblxyXG5pbXBvcnQge0Rpc2xpa2VUd29Ub25lLExpa2VUd29Ub25lICwgVXNlck91dGxpbmVkLCBGaWVsZFRpbWVPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgY3VzdHVtRGF0ZUZvcm1hdCBmcm9tICAnLi4vdXRpbENvbXBvbmVudC9jdXN0dW1EYXRlRm9ybWF0JztcclxuXHJcblxyXG5cclxuY29uc3QgZGV0YWlsUGFnZSAgPSAoe25pY2tOYW1lLHBvc3RGbGFnLHBvc3RJZCxtYWluUG9zdHNfMTAwMUluZm99KSA9PntcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuXHJcbiAvLyBjb25zdCB7bWFpblBvc3RzXzEwMDFJbmZvfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLm1haW5Qb3N0c18xMDAxKTsgXHJcblxyXG4gIC8vY29uc3Qge3VzZXJJbmZvfSAgICAgID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgcmVmID0gY3JlYXRlUmVmKCk7IFxyXG4gIGNvbnN0IGJsYW5rX3BhdHRlcm4gPSAvXlxccyt8XFxzKyYvZzsgIFxyXG4gIGNvbnN0IFtpbnNlcnRDbGljaywgc2V0SW5zZXJ0Q2xpY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt1bmZvbGRMaXN0LHNldFVuZm9sZExpc3RdID0gdXNlU3RhdGUoJycpOyAgXHJcbiAgY29uc3QgW3Rlc3Qsc2V0VGVzdF0gPSB1c2VTdGF0ZSgnJyk7IFxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAvLyAgIHNldFRlc3QoJ2hlbGxvIFdvb3JsZCcpOyBcclxuICAvLyB9LFtdKVxyXG5cclxuICBjb25zb2xlLmxvZygn65SU7YWM7J28IG1haW5Qb3N0c18xMDAxSW5mbyA9ID4nICxtYWluUG9zdHNfMTAwMUluZm8pOyBcclxuICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAvLyAgIC8v7IOB7IS4IOygleuztCBcclxuICAvLyAgICBkaXNwYXRjaCh7XHJcbiAgLy8gICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsIFxyXG4gIC8vICAgICAgICAgZGF0YTp7XHJcbiAgLy8gICAgICAgICAgIHBvc3RJZCxcclxuICAvLyAgICAgICAgICAgbmlja05hbWUsXHJcbiAgLy8gICAgICAgICAgIHBvc3RGbGFnLFxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vIH0sW10pO1xyXG5cclxuXHJcbiAgLy/soovslYTsmpQsIOyLq+yWtOyalCDrsoTtirwgXHJcbiAgLy8gY29uc3QgbGlrZUJ0biA9dXNlQ2FsbGJhY2soKGNvbW1lbnRpZCxmbGFnLGxpa2VEaXNsaWtlKT0+e1xyXG4gIC8vICAgICBpZighdXNlckluZm8pe1xyXG4gIC8vICAgICAgIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWcIOyEnOu5hOyKpCDsnoXri4jri6QuJyk7IFxyXG4gIC8vICAgICAgIHJldHVybjtcclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgICAgaWYoZmxhZz09PVwiWVwiKXtcclxuICAgICAgICBcclxuICAvLyAgICAgICBhbGVydCgn7J2066+4IOyii+yVhOyalCEg7Iur7Ja07JqUISDtlojsirXri4jri6QuJyk7IFxyXG4gIC8vICAgICAgIHJldHVybjsgXHJcbiAgXHJcbiAgLy8gICAgIH1lbHNle1xyXG5cclxuICAvLyAgICAgICAvL+uMk+q4gCDsoovslYTsmpQhXHJcbiAgLy8gICAgICAgZGlzcGF0Y2goe1xyXG4gIC8vICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNULCBcclxuICAvLyAgICAgICAgIGRhdGE6e1xyXG4gIC8vICAgICAgICAgICBjb21tZW50aWQsXHJcbiAgLy8gICAgICAgICAgIHBvc3RGbGFnLFxyXG4gIC8vICAgICAgICAgICBwb3N0SWQsXHJcbiAgLy8gICAgICAgICAgIGZsYWc6IGxpa2VEaXNsaWtlICxcclxuICAvLyAgICAgICAgICAgd2hvOiB1c2VySW5mbyxcclxuICAvLyAgICAgICAgICAgbmlja05hbWUsXHJcbiAgLy8gICAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudHM6Wy4uLm1haW5Qb3N0c18xMDAxQ29tbWVudHNdLFxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICB9KTsgXHJcblxyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgICBhbGVydChgJHtsaWtlRGlzbGlrZX1gKTsgXHJcbiAgICBcclxuICAvLyAgIH0sW21haW5Qb3N0c18xMDAxQ29tbWVudHNdKTsgXHJcblxyXG5cclxuICAvL+uMk+q4gCDsnoXroKUgXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAvL+uMgOuMk+q4gCDrpqzsiqTtirggXHJcbiAgICAgIC8vIGNvbnN0IGNvbW1lbnRCeUNvbW1lbnRMaXN0ID11c2VDYWxsYmFjaygocG9zdEZsYWcsbmlja05hbWUscG9zdElkLGNvbW1lbnRJZCxieUNvbW1lbnRDb3VudCk9PntcclxuXHJcblxyXG4gICAgICAvLyAgICAgICAgICBpZihieUNvbW1lbnRDb3VudCA+IDAgKXtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgLy8gICAgICAgICAgIHNldFVuZm9sZExpc3QoJ3VuZm9sZCcpOyBcclxuICAgICAgLy8gICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgLy8gICAgICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgLy8gICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZCxcclxuICAgICAgLy8gICAgICAgICAgICAgICB9XHJcbiAgICAgIC8vICAgICAgICAgICB9KTsgICAgICBcclxuXHJcbiAgICAgIC8vICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgLy8gICAgICAgICAgICAgICAvL3NldFVuZm9sZExpc3QoJzMzMycpOyBcclxuICAgICAgLy8gICAgICAgICAgIH1cclxuICAgICAgLy8gfSxbbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cyx1bmZvbGRMaXN0XSk7IFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBcclxuICAgIDxkaXYgPlxyXG4gICAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIO2DgOydtO2LgC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZScgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3dUaCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPnttYWluUG9zdHNfMTAwMUluZm9bMF0udGl0bGV9IFt7MH1dPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPlxyXG4gICAgICAgICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+ICB7bWFpblBvc3RzXzEwMDFJbmZvWzBdLnVzZXJOaWNrTmFtZX08YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkVGltZU91dGxpbmVkIC8+ICB7Y3VzdHVtRGF0ZUZvcm1hdChtYWluUG9zdHNfMTAwMUluZm9bMF0uY3JlYXRlZERhdGUpfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGlrZVR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz4gOiB7bWFpblBvc3RzXzEwMDFJbmZvWzBdLmdvb2R9IDxEaXNsaWtlVHdvVG9uZSAgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz4gOiB7bWFpblBvc3RzXzEwMDFJbmZvWzBdLmJhZH0gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIO2DgOydtO2LgC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiYXV0b1wiLCBib3JkZXI6XCIxcHggc29saWRcIiwgYm9yZGVyQ29sb3I6XCIjOGNjNDljXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICAgICDqtJHqs6DsnoXri4jri6QuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIOy7qO2FkOy4oC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6bWFpblBvc3RzXzEwMDFJbmZvWzBdLmNvbnRlbnR9fS8+XHJcbiAgICAgPC9kaXY+IFxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDsu6jthZDsuKAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfSAgIFxyXG5cclxuXHJcbiAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcImF1dG9cIiwgYm9yZGVyOlwiMXB4IHNvbGlkXCIsIGJvcmRlckNvbG9yOlwiIzhjYzQ5Y1wiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAgIOq0keqzoOyeheuLiOuLpC5cclxuICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgey8q7KKL7JWE7JqUIOyLq+yWtOyalCDrsoTtirwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93VGgnIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgPEJ1dHRvbj48TGlrZVR3b1RvbmUgIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+PC9CdXR0b24+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PEJ1dHRvbj48RGlzbGlrZVR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz48L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKuyii+yVhOyalCDsi6vslrTsmpQg67KE7Yq8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcblxyXG5cclxuXHJcbiAgICB7LyrrjJPquIAg66as7Iqk7Yq4LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICAgPENvbW1lbnRzMTAwMSAvPlxyXG4gICAgey8q64yT6riAIOumrOyKpO2KuC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5cclxuZGV0YWlsUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT57XHJcblxyXG4gIGNvbnN0IHBvc3RJZCAgID0gY29udGV4dC5xdWVyeS5wb3N0SWQ7IFxyXG4gIGNvbnN0IG5pY2tOYW1lID0gY29udGV4dC5xdWVyeS5uaWNrTmFtZTsgXHJcbiAgY29uc3QgcG9zdEZsYWcgPSBjb250ZXh0LnF1ZXJ5LnBvc3RGbGFnOyBcclxuICBjb25zdCBtYWluUG9zdHNfMTAwMUluZm8gPSBKU09OLnBhcnNlKGNvbnRleHQucXVlcnkubWFpblBvc3RzXzEwMDFJbmZvKTsgXHJcblxyXG5cclxuICByZXR1cm4ge25pY2tOYW1lLHBvc3RGbGFnLHBvc3RJZCxtYWluUG9zdHNfMTAwMUluZm99OyBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWxQYWdlOyAiXSwic291cmNlUm9vdCI6IiJ9