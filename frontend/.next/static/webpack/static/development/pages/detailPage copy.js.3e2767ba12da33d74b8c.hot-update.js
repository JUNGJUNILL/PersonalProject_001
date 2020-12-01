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
            mainPosts_1001Info = [{}];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlIGNvcHkuanMiXSwibmFtZXMiOlsiZGV0YWlsUGFnZSIsIm5pY2tOYW1lIiwicG9zdEZsYWciLCJwb3N0SWQiLCJtYWluUG9zdHNfMTAwMUluZm8iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicmVmIiwiY3JlYXRlUmVmIiwiYmxhbmtfcGF0dGVybiIsInVzZVN0YXRlIiwiaW5zZXJ0Q2xpY2siLCJzZXRJbnNlcnRDbGljayIsInVuZm9sZExpc3QiLCJzZXRVbmZvbGRMaXN0IiwidGVzdCIsInNldFRlc3QiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwidGl0bGUiLCJ1c2VyTmlja05hbWUiLCJjdXN0dW1EYXRlRm9ybWF0IiwiY3JlYXRlZERhdGUiLCJnb29kIiwiYmFkIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJfX2h0bWwiLCJjb250ZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxVQUFVLEdBQUksU0FBZEEsVUFBYyxPQUFrRDtBQUFBOztBQUFBLE1BQWhEQyxRQUFnRCxRQUFoREEsUUFBZ0Q7QUFBQSxNQUF2Q0MsUUFBdUMsUUFBdkNBLFFBQXVDO0FBQUEsTUFBOUJDLE1BQThCLFFBQTlCQSxNQUE4QjtBQUFBLE1BQXZCQyxrQkFBdUIsUUFBdkJBLGtCQUF1QjtBQUVwRSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCLENBRm9FLENBSXJFO0FBRUM7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyx1REFBUyxFQUFyQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxZQUF0Qjs7QUFSb0Us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QTtBQUFBO0FBQUEsSUFBUixDQURuRixDQURGLENBbENBLEVBNkNFLE1BQUMsK0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdDRixDQUZBO0FBb0RILENBdkpEOztHQUFNaEMsVTtVQUVhTSx1RDs7O0FBd0puQk4sVUFBVSxDQUFDbUMsZUFBWDtBQUFBLCtMQUE2QixpQkFBT0MsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFckJqQyxrQkFGcUIsR0FFVmlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjbEMsTUFGSjtBQUdyQkYsb0JBSHFCLEdBR1ZtQyxPQUFPLENBQUNDLEtBQVIsQ0FBY3BDLFFBSEo7QUFJckJDLG9CQUpxQixHQUlWa0MsT0FBTyxDQUFDQyxLQUFSLENBQWNuQyxRQUpKO0FBS3JCRSw4QkFMcUIsR0FLQSxDQUFDLEVBQUQsQ0FMQTtBQUFBLDZDQVFwQjtBQUFDSCxzQkFBUSxFQUFSQSxRQUFEO0FBQVVDLHNCQUFRLEVBQVJBLFFBQVY7QUFBbUJDLG9CQUFNLEVBQU5BLE1BQW5CO0FBQTBCQyxnQ0FBa0IsRUFBbEJBO0FBQTFCLGFBUm9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlSix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGV0YWlsUGFnZSBjb3B5LmpzLjNlMjc2N2JhMTJkYTMzZDc0YjhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssdXNlRWZmZWN0LCB1c2VTdGF0ZSwgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMSdcclxuaW1wb3J0IENvbW1lbnRzMTAwMSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxX2NvbW1lbnRzIGNvcHknXHJcbmltcG9ydCBDb21tZW50VGV4dEFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMV90ZXh0QXJlYSdcclxuaW1wb3J0IFxyXG4gICAge01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCwgXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNUXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMSc7IFxyXG5cclxuaW1wb3J0IHtEaXNsaWtlVHdvVG9uZSxMaWtlVHdvVG9uZSAsIFVzZXJPdXRsaW5lZCwgRmllbGRUaW1lT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IGN1c3R1bURhdGVGb3JtYXQgZnJvbSAgJy4uL3V0aWxDb21wb25lbnQvY3VzdHVtRGF0ZUZvcm1hdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IGRldGFpbFBhZ2UgID0gKHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWQsbWFpblBvc3RzXzEwMDFJbmZvfSkgPT57XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTsgXHJcblxyXG4gLy8gY29uc3Qge21haW5Qb3N0c18xMDAxSW5mb30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5tYWluUG9zdHNfMTAwMSk7IFxyXG5cclxuICAvL2NvbnN0IHt1c2VySW5mb30gICAgICA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmF1dGgpO1xyXG4gIGNvbnN0IHJlZiA9IGNyZWF0ZVJlZigpOyBcclxuICBjb25zdCBibGFua19wYXR0ZXJuID0gL15cXHMrfFxccysmL2c7ICBcclxuICBjb25zdCBbaW5zZXJ0Q2xpY2ssIHNldEluc2VydENsaWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdW5mb2xkTGlzdCxzZXRVbmZvbGRMaXN0XSA9IHVzZVN0YXRlKCcnKTsgIFxyXG4gIGNvbnN0IFt0ZXN0LHNldFRlc3RdID0gdXNlU3RhdGUoJycpOyBcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgLy8gICBzZXRUZXN0KCdoZWxsbyBXb29ybGQnKTsgXHJcbiAgLy8gfSxbXSlcclxuXHJcbiAgY29uc29sZS5sb2coJ+uUlO2FjOydvCBtYWluUG9zdHNfMTAwMUluZm8gPSA+JyAsbWFpblBvc3RzXzEwMDFJbmZvKTsgXHJcbiAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgLy8gICAvL+yDgeyEuCDsoJXrs7QgXHJcbiAgLy8gICAgZGlzcGF0Y2goe1xyXG4gIC8vICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNULCBcclxuICAvLyAgICAgICAgIGRhdGE6e1xyXG4gIC8vICAgICAgICAgICBwb3N0SWQsXHJcbiAgLy8gICAgICAgICAgIG5pY2tOYW1lLFxyXG4gIC8vICAgICAgICAgICBwb3N0RmxhZyxcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgIH0pO1xyXG5cclxuICAvLyB9LFtdKTtcclxuXHJcblxyXG4gIC8v7KKL7JWE7JqULCDsi6vslrTsmpQg67KE7Yq8IFxyXG4gIC8vIGNvbnN0IGxpa2VCdG4gPXVzZUNhbGxiYWNrKChjb21tZW50aWQsZmxhZyxsaWtlRGlzbGlrZSk9PntcclxuICAvLyAgICAgaWYoIXVzZXJJbmZvKXtcclxuICAvLyAgICAgICBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VnCDshJzruYTsiqQg7J6F64uI64ukLicpOyBcclxuICAvLyAgICAgICByZXR1cm47XHJcbiAgLy8gICAgIH1cclxuXHJcbiAgLy8gICAgIGlmKGZsYWc9PT1cIllcIil7XHJcbiAgICAgICAgXHJcbiAgLy8gICAgICAgYWxlcnQoJ+ydtOuvuCDsoovslYTsmpQhIOyLq+yWtOyalCEg7ZaI7Iq164uI64ukLicpOyBcclxuICAvLyAgICAgICByZXR1cm47IFxyXG4gIFxyXG4gIC8vICAgICB9ZWxzZXtcclxuXHJcbiAgLy8gICAgICAgLy/rjJPquIAg7KKL7JWE7JqUIVxyXG4gIC8vICAgICAgIGRpc3BhdGNoKHtcclxuICAvLyAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCwgXHJcbiAgLy8gICAgICAgICBkYXRhOntcclxuICAvLyAgICAgICAgICAgY29tbWVudGlkLFxyXG4gIC8vICAgICAgICAgICBwb3N0RmxhZyxcclxuICAvLyAgICAgICAgICAgcG9zdElkLFxyXG4gIC8vICAgICAgICAgICBmbGFnOiBsaWtlRGlzbGlrZSAsXHJcbiAgLy8gICAgICAgICAgIHdobzogdXNlckluZm8sXHJcbiAgLy8gICAgICAgICAgIG5pY2tOYW1lLFxyXG4gIC8vICAgICAgICAgICBtYWluUG9zdHNfMTAwMUNvbW1lbnRzOlsuLi5tYWluUG9zdHNfMTAwMUNvbW1lbnRzXSxcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgfSk7IFxyXG5cclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICAgYWxlcnQoYCR7bGlrZURpc2xpa2V9YCk7IFxyXG4gICAgXHJcbiAgLy8gICB9LFttYWluUG9zdHNfMTAwMUNvbW1lbnRzXSk7IFxyXG5cclxuXHJcbiAgLy/rjJPquIAg7J6F66ClIFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgLy/rjIDrjJPquIAg66as7Iqk7Yq4IFxyXG4gICAgICAvLyBjb25zdCBjb21tZW50QnlDb21tZW50TGlzdCA9dXNlQ2FsbGJhY2soKHBvc3RGbGFnLG5pY2tOYW1lLHBvc3RJZCxjb21tZW50SWQsYnlDb21tZW50Q291bnQpPT57XHJcblxyXG5cclxuICAgICAgLy8gICAgICAgICAgaWYoYnlDb21tZW50Q291bnQgPiAwICl7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgIC8vICAgICAgICAgICBzZXRVbmZvbGRMaXN0KCd1bmZvbGQnKTsgXHJcbiAgICAgIC8vICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgIC8vICAgICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgIC8vICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICBjb21tZW50SWQsXHJcbiAgICAgIC8vICAgICAgICAgICAgICAgfVxyXG4gICAgICAvLyAgICAgICAgICAgfSk7ICAgICAgXHJcblxyXG4gICAgICAvLyAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgIC8vICAgICAgICAgICAgICAgLy9zZXRVbmZvbGRMaXN0KCczMzMnKTsgXHJcbiAgICAgIC8vICAgICAgICAgICB9XHJcbiAgICAgIC8vIH0sW21haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMsdW5mb2xkTGlzdF0pOyBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgXHJcbiAgICA8ZGl2ID5cclxuICAgICAgey8q7IOB7IS4IO2OmOydtOyngCDtg4DsnbTti4AtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGUnIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93VGgnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz57bWFpblBvc3RzXzEwMDFJbmZvWzBdLnRpdGxlfSBbezB9XTwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsJz5cclxuICAgICAgICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPiAge21haW5Qb3N0c18xMDAxSW5mb1swXS51c2VyTmlja05hbWV9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFRpbWVPdXRsaW5lZCAvPiAge2N1c3R1bURhdGVGb3JtYXQobWFpblBvc3RzXzEwMDFJbmZvWzBdLmNyZWF0ZWREYXRlKX08YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPExpa2VUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+IDoge21haW5Qb3N0c18xMDAxSW5mb1swXS5nb29kfSA8RGlzbGlrZVR3b1RvbmUgIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+IDoge21haW5Qb3N0c18xMDAxSW5mb1swXS5iYWR9IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDtg4DsnbTti4AtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcImF1dG9cIiwgYm9yZGVyOlwiMXB4IHNvbGlkXCIsIGJvcmRlckNvbG9yOlwiIzhjYzQ5Y1wiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAgICAg6rSR6rOg7J6F64uI64ukLlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDsu6jthZDsuKAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOm1haW5Qb3N0c18xMDAxSW5mb1swXS5jb250ZW50fX0vPlxyXG4gICAgIDwvZGl2PiBcclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7Luo7YWQ7LigLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL30gICBcclxuXHJcblxyXG4gICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCJhdXRvXCIsIGJvcmRlcjpcIjFweCBzb2xpZFwiLCBib3JkZXJDb2xvcjpcIiM4Y2M0OWNcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgICDqtJHqs6DsnoXri4jri6QuXHJcbiAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgIHsvKuyii+yVhOyalCDsi6vslrTsmpQg67KE7Yq8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZSc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJyBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgIDxCdXR0b24+PExpa2VUd29Ub25lICB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPjwvQnV0dG9uPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzxCdXR0b24+PERpc2xpa2VUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+PC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICB7LyrsoovslYTsmpQg7Iur7Ja07JqUIOuyhO2KvC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG5cclxuXHJcblxyXG4gICAgey8q64yT6riAIOumrOyKpO2KuC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgIDxDb21tZW50czEwMDEgLz5cclxuICAgIHsvKuuMk+q4gCDrpqzsiqTtirgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxufVxyXG5cclxuXHJcbmRldGFpbFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+e1xyXG5cclxuICBjb25zdCBwb3N0SWQgICA9IGNvbnRleHQucXVlcnkucG9zdElkOyBcclxuICBjb25zdCBuaWNrTmFtZSA9IGNvbnRleHQucXVlcnkubmlja05hbWU7IFxyXG4gIGNvbnN0IHBvc3RGbGFnID0gY29udGV4dC5xdWVyeS5wb3N0RmxhZzsgXHJcbiAgY29uc3QgbWFpblBvc3RzXzEwMDFJbmZvID0gW3t9XTsgXHJcblxyXG5cclxuICByZXR1cm4ge25pY2tOYW1lLHBvc3RGbGFnLHBvc3RJZCxtYWluUG9zdHNfMTAwMUluZm99OyBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWxQYWdlOyAiXSwic291cmNlUm9vdCI6IiJ9