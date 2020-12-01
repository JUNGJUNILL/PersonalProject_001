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
            mainPosts_1001Info = context.query.mainPosts_1001Info;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlIGNvcHkuanMiXSwibmFtZXMiOlsiZGV0YWlsUGFnZSIsIm5pY2tOYW1lIiwicG9zdEZsYWciLCJwb3N0SWQiLCJtYWluUG9zdHNfMTAwMUluZm8iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicmVmIiwiY3JlYXRlUmVmIiwiYmxhbmtfcGF0dGVybiIsInVzZVN0YXRlIiwiaW5zZXJ0Q2xpY2siLCJzZXRJbnNlcnRDbGljayIsInVuZm9sZExpc3QiLCJzZXRVbmZvbGRMaXN0IiwidGVzdCIsInNldFRlc3QiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwidGl0bGUiLCJ1c2VyTmlja05hbWUiLCJjdXN0dW1EYXRlRm9ybWF0IiwiY3JlYXRlZERhdGUiLCJnb29kIiwiYmFkIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJfX2h0bWwiLCJjb250ZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxVQUFVLEdBQUksU0FBZEEsVUFBYyxPQUFrRDtBQUFBOztBQUFBLE1BQWhEQyxRQUFnRCxRQUFoREEsUUFBZ0Q7QUFBQSxNQUF2Q0MsUUFBdUMsUUFBdkNBLFFBQXVDO0FBQUEsTUFBOUJDLE1BQThCLFFBQTlCQSxNQUE4QjtBQUFBLE1BQXZCQyxrQkFBdUIsUUFBdkJBLGtCQUF1QjtBQUVwRSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCLENBRm9FLENBSXJFO0FBRUM7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyx1REFBUyxFQUFyQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxZQUF0Qjs7QUFSb0Us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QTtBQUFBO0FBQUEsSUFBUixDQURuRixDQURGLENBbENBLEVBNkNFLE1BQUMsK0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdDRixDQUZBO0FBb0RILENBdkpEOztHQUFNaEMsVTtVQUVhTSx1RDs7O0FBd0puQk4sVUFBVSxDQUFDbUMsZUFBWDtBQUFBLCtMQUE2QixpQkFBT0MsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFckJqQyxrQkFGcUIsR0FFVmlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjbEMsTUFGSjtBQUdyQkYsb0JBSHFCLEdBR1ZtQyxPQUFPLENBQUNDLEtBQVIsQ0FBY3BDLFFBSEo7QUFJckJDLG9CQUpxQixHQUlWa0MsT0FBTyxDQUFDQyxLQUFSLENBQWNuQyxRQUpKO0FBS3JCRSw4QkFMcUIsR0FLQWdDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjakMsa0JBTGQ7QUFBQSw2Q0FTcEI7QUFBQ0gsc0JBQVEsRUFBUkEsUUFBRDtBQUFVQyxzQkFBUSxFQUFSQSxRQUFWO0FBQW1CQyxvQkFBTSxFQUFOQSxNQUFuQjtBQUEwQkMsZ0NBQWtCLEVBQWxCQTtBQUExQixhQVRvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXZUoseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRldGFpbFBhZ2UgY29weS5qcy45NjM3YjUxNjYzODA4MGJjOTUyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDEnXHJcbmltcG9ydCBDb21tZW50czEwMDEgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMV9jb21tZW50cyBjb3B5J1xyXG5pbXBvcnQgQ29tbWVudFRleHRBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFfdGV4dEFyZWEnXHJcbmltcG9ydCBcclxuICAgIHtNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QsIFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVCxcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvbWFpblBvc3RzXzEwMDEnOyBcclxuXHJcbmltcG9ydCB7RGlzbGlrZVR3b1RvbmUsTGlrZVR3b1RvbmUgLCBVc2VyT3V0bGluZWQsIEZpZWxkVGltZU91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnXHJcbmltcG9ydCBjdXN0dW1EYXRlRm9ybWF0IGZyb20gICcuLi91dGlsQ29tcG9uZW50L2N1c3R1bURhdGVGb3JtYXQnO1xyXG5cclxuXHJcblxyXG5jb25zdCBkZXRhaWxQYWdlICA9ICh7bmlja05hbWUscG9zdEZsYWcscG9zdElkLG1haW5Qb3N0c18xMDAxSW5mb30pID0+e1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG5cclxuIC8vIGNvbnN0IHttYWluUG9zdHNfMTAwMUluZm99ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUubWFpblBvc3RzXzEwMDEpOyBcclxuXHJcbiAgLy9jb25zdCB7dXNlckluZm99ICAgICAgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5hdXRoKTtcclxuICBjb25zdCByZWYgPSBjcmVhdGVSZWYoKTsgXHJcbiAgY29uc3QgYmxhbmtfcGF0dGVybiA9IC9eXFxzK3xcXHMrJi9nOyAgXHJcbiAgY29uc3QgW2luc2VydENsaWNrLCBzZXRJbnNlcnRDbGlja10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3VuZm9sZExpc3Qsc2V0VW5mb2xkTGlzdF0gPSB1c2VTdGF0ZSgnJyk7ICBcclxuICBjb25zdCBbdGVzdCxzZXRUZXN0XSA9IHVzZVN0YXRlKCcnKTsgXHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKT0+e1xyXG4gIC8vICAgc2V0VGVzdCgnaGVsbG8gV29vcmxkJyk7IFxyXG4gIC8vIH0sW10pXHJcblxyXG4gIGNvbnNvbGUubG9nKCfrlJTthYzsnbwgbWFpblBvc3RzXzEwMDFJbmZvID0gPicgLG1haW5Qb3N0c18xMDAxSW5mbyk7IFxyXG4gIC8vIHVzZUVmZmVjdCgoKT0+e1xyXG4gIC8vICAgLy/sg4HshLgg7KCV67O0IFxyXG4gIC8vICAgIGRpc3BhdGNoKHtcclxuICAvLyAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCwgXHJcbiAgLy8gICAgICAgICBkYXRhOntcclxuICAvLyAgICAgICAgICAgcG9zdElkLFxyXG4gIC8vICAgICAgICAgICBuaWNrTmFtZSxcclxuICAvLyAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICB9KTtcclxuXHJcbiAgLy8gfSxbXSk7XHJcblxyXG5cclxuICAvL+yii+yVhOyalCwg7Iur7Ja07JqUIOuyhO2KvCBcclxuICAvLyBjb25zdCBsaWtlQnRuID11c2VDYWxsYmFjaygoY29tbWVudGlkLGZsYWcsbGlrZURpc2xpa2UpPT57XHJcbiAgLy8gICAgIGlmKCF1c2VySW5mbyl7XHJcbiAgLy8gICAgICAgYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlZwg7ISc67mE7IqkIOyeheuLiOuLpC4nKTsgXHJcbiAgLy8gICAgICAgcmV0dXJuO1xyXG4gIC8vICAgICB9XHJcblxyXG4gIC8vICAgICBpZihmbGFnPT09XCJZXCIpe1xyXG4gICAgICAgIFxyXG4gIC8vICAgICAgIGFsZXJ0KCfsnbTrr7gg7KKL7JWE7JqUISDsi6vslrTsmpQhIO2WiOyKteuLiOuLpC4nKTsgXHJcbiAgLy8gICAgICAgcmV0dXJuOyBcclxuICBcclxuICAvLyAgICAgfWVsc2V7XHJcblxyXG4gIC8vICAgICAgIC8v64yT6riAIOyii+yVhOyalCFcclxuICAvLyAgICAgICBkaXNwYXRjaCh7XHJcbiAgLy8gICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QsIFxyXG4gIC8vICAgICAgICAgZGF0YTp7XHJcbiAgLy8gICAgICAgICAgIGNvbW1lbnRpZCxcclxuICAvLyAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgLy8gICAgICAgICAgIHBvc3RJZCxcclxuICAvLyAgICAgICAgICAgZmxhZzogbGlrZURpc2xpa2UgLFxyXG4gIC8vICAgICAgICAgICB3aG86IHVzZXJJbmZvLFxyXG4gIC8vICAgICAgICAgICBuaWNrTmFtZSxcclxuICAvLyAgICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50czpbLi4ubWFpblBvc3RzXzEwMDFDb21tZW50c10sXHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgIH0pOyBcclxuXHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgIGFsZXJ0KGAke2xpa2VEaXNsaWtlfWApOyBcclxuICAgIFxyXG4gIC8vICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50c10pOyBcclxuXHJcblxyXG4gIC8v64yT6riAIOyeheugpSBcclxuXHJcblxyXG5cclxuXHJcbiAgICAgIC8v64yA64yT6riAIOumrOyKpO2KuCBcclxuICAgICAgLy8gY29uc3QgY29tbWVudEJ5Q29tbWVudExpc3QgPXVzZUNhbGxiYWNrKChwb3N0RmxhZyxuaWNrTmFtZSxwb3N0SWQsY29tbWVudElkLGJ5Q29tbWVudENvdW50KT0+e1xyXG5cclxuXHJcbiAgICAgIC8vICAgICAgICAgIGlmKGJ5Q29tbWVudENvdW50ID4gMCApe1xyXG4gICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAvLyAgICAgICAgICAgc2V0VW5mb2xkTGlzdCgndW5mb2xkJyk7IFxyXG4gICAgICAvLyAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAvLyAgICAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICAvLyAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgY29tbWVudElkLFxyXG4gICAgICAvLyAgICAgICAgICAgICAgIH1cclxuICAgICAgLy8gICAgICAgICAgIH0pOyAgICAgIFxyXG5cclxuICAgICAgLy8gICAgICAgICAgIH1lbHNle1xyXG4gICAgICAvLyAgICAgICAgICAgICAgIC8vc2V0VW5mb2xkTGlzdCgnMzMzJyk7IFxyXG4gICAgICAvLyAgICAgICAgICAgfVxyXG4gICAgICAvLyB9LFttYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzLHVuZm9sZExpc3RdKTsgXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIFxyXG4gICAgPGRpdiA+XHJcbiAgICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7YOA7J207YuALS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJyBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+e21haW5Qb3N0c18xMDAxSW5mb1swXS50aXRsZX0gW3swfV08L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+XHJcbiAgICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4gIHttYWluUG9zdHNfMTAwMUluZm9bMF0udXNlck5pY2tOYW1lfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGRUaW1lT3V0bGluZWQgLz4gIHtjdXN0dW1EYXRlRm9ybWF0KG1haW5Qb3N0c18xMDAxSW5mb1swXS5jcmVhdGVkRGF0ZSl9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHttYWluUG9zdHNfMTAwMUluZm9bMF0uZ29vZH0gPERpc2xpa2VUd29Ub25lICB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHttYWluUG9zdHNfMTAwMUluZm9bMF0uYmFkfSBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7YOA7J207YuALS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCJhdXRvXCIsIGJvcmRlcjpcIjFweCBzb2xpZFwiLCBib3JkZXJDb2xvcjpcIiM4Y2M0OWNcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgICAgIOq0keqzoOyeheuLiOuLpC5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7Luo7YWQ7LigLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDptYWluUG9zdHNfMTAwMUluZm9bMF0uY29udGVudH19Lz5cclxuICAgICA8L2Rpdj4gXHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIOy7qO2FkOy4oC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99ICAgXHJcblxyXG5cclxuICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiYXV0b1wiLCBib3JkZXI6XCIxcHggc29saWRcIiwgYm9yZGVyQ29sb3I6XCIjOGNjNDljXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICAg6rSR6rOg7J6F64uI64ukLlxyXG4gICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICB7LyrsoovslYTsmpQg7Iur7Ja07JqUIOuyhO2KvC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGUnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3dUaCcgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICA8QnV0dG9uPjxMaWtlVHdvVG9uZSAgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz48L0J1dHRvbj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8QnV0dG9uPjxEaXNsaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPjwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgey8q7KKL7JWE7JqUIOyLq+yWtOyalCDrsoTtirwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuuMk+q4gCDrpqzsiqTtirgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgICA8Q29tbWVudHMxMDAxIC8+XHJcbiAgICB7LyrrjJPquIAg66as7Iqk7Yq4LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbn1cclxuXHJcblxyXG5kZXRhaWxQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PntcclxuXHJcbiAgY29uc3QgcG9zdElkICAgPSBjb250ZXh0LnF1ZXJ5LnBvc3RJZDsgXHJcbiAgY29uc3Qgbmlja05hbWUgPSBjb250ZXh0LnF1ZXJ5Lm5pY2tOYW1lOyBcclxuICBjb25zdCBwb3N0RmxhZyA9IGNvbnRleHQucXVlcnkucG9zdEZsYWc7IFxyXG4gIGNvbnN0IG1haW5Qb3N0c18xMDAxSW5mbyA9IGNvbnRleHQucXVlcnkubWFpblBvc3RzXzEwMDFJbmZvXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWQsbWFpblBvc3RzXzEwMDFJbmZvfTsgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZGV0YWlsUGFnZTsgIl0sInNvdXJjZVJvb3QiOiIifQ==