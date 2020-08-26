webpackHotUpdate("static\\development\\pages\\myEdit.js",{

/***/ "./pages/myEdit.js":
/*!*************************!*\
  !*** ./pages/myEdit.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\pages\\myEdit.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Myeditor = function Myeditor() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createEmpty();
  }),
      editorState = _useState[0],
      setEditorState = _useState[1];

  var content = {
    "entityMap": {},
    "blocks": [{
      "key": "637gr",
      "text": "Initialized from content state.",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    }]
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertFromRaw"])(content)),
      contentState = _useState2[0],
      setContentState = _useState2[1];

  var contentChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (content) {
    console.log(content);
    setContentState(content);
  }, []); // onEditorStateChange={editStateChange}
  // const editStateChange = useCallback((editState)=>{
  //     console.log(editState); 
  //     setEditorState(editState); 
  // },[])

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }
  }, "ddd"), __jsx(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
    editState: editorState,
    toolbarClassName: "toolbarClassName",
    wrapperClassName: "wrapperClassName",
    editorClassName: "editorClassName",
    localization: {
      locale: 'ko'
    },
    onContentStateChange: contentChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }
  }), __jsx("textarea", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }));
};

_s(Myeditor, "KUxMQJmLUJLkckCJxoS7LAh+1Co=");

_c = Myeditor;
/* harmony default export */ __webpack_exports__["default"] = (Myeditor);

var _c;

$RefreshReg$(_c, "Myeditor");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJ1c2VTdGF0ZSIsIkVkaXRvclN0YXRlIiwiY3JlYXRlRW1wdHkiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwiY29udGVudCIsImNvbnZlcnRGcm9tUmF3IiwiY29udGVudFN0YXRlIiwic2V0Q29udGVudFN0YXRlIiwiY29udGVudENoYW5nZSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImxvY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFLO0FBQUE7O0FBQUEsa0JBRW9CQyxzREFBUSxDQUFDO0FBQUEsV0FDL0NDLG9EQUFXLENBQUNDLFdBQVosRUFEK0M7QUFBQSxHQUFELENBRjVCO0FBQUEsTUFFWEMsV0FGVztBQUFBLE1BRUVDLGNBRkY7O0FBTWxCLE1BQU1DLE9BQU8sR0FBRztBQUFDLGlCQUFZLEVBQWI7QUFBZ0IsY0FBUyxDQUFDO0FBQUMsYUFBTSxPQUFQO0FBQWUsY0FBTyxpQ0FBdEI7QUFBd0QsY0FBTyxVQUEvRDtBQUEwRSxlQUFRLENBQWxGO0FBQW9GLDJCQUFvQixFQUF4RztBQUEyRyxzQkFBZSxFQUExSDtBQUE2SCxjQUFPO0FBQXBJLEtBQUQ7QUFBekIsR0FBaEI7O0FBTmtCLG1CQVF1Qkwsc0RBQVEsQ0FBQ00sK0RBQWMsQ0FBQ0QsT0FBRCxDQUFmLENBUi9CO0FBQUEsTUFRWEUsWUFSVztBQUFBLE1BUUlDLGVBUko7O0FBVWxCLE1BQU1DLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxVQUFDTCxPQUFELEVBQVc7QUFDekNNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxPQUFaO0FBQ0FHLG1CQUFlLENBQUNILE9BQUQsQ0FBZjtBQUVILEdBSmdDLEVBSS9CLEVBSitCLENBQWpDLENBVmtCLENBaUJsQjtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQ0ksbUVBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURELEVBR0MsTUFBQywwREFBRDtBQUNHLGFBQVMsRUFBRUYsV0FEZDtBQUVFLG9CQUFnQixFQUFDLGtCQUZuQjtBQUdFLG9CQUFnQixFQUFDLGtCQUhuQjtBQUlFLG1CQUFlLEVBQUMsaUJBSmxCO0FBS0UsZ0JBQVksRUFBRTtBQUNWVSxZQUFNLEVBQUM7QUFERyxLQUxoQjtBQVNFLHdCQUFvQixFQUFFSixhQVR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEQsRUFjSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEosQ0FESjtBQWtCSCxDQTFDRDs7R0FBTVYsUTs7S0FBQUEsUTtBQTRDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG15RWRpdC5qcy43NTAzYjkyM2RmZmNjMDc4YjgxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFZGl0b3J9IGZyb20gJ3JlYWN0LWRyYWZ0LXd5c2l3eWcnXHJcbmltcG9ydCB7RWRpdG9yU3RhdGV9IGZyb20gJ2RyYWZ0LWpzJ1xyXG5pbXBvcnQgeyBjb252ZXJ0RnJvbVJhdyB9IGZyb20gJ2RyYWZ0LWpzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG5jb25zdCBNeWVkaXRvciA9ICgpID0+e1xyXG5cclxuICAgIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoKCkgPT5cclxuICAgIEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCksXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSB7XCJlbnRpdHlNYXBcIjp7fSxcImJsb2Nrc1wiOlt7XCJrZXlcIjpcIjYzN2dyXCIsXCJ0ZXh0XCI6XCJJbml0aWFsaXplZCBmcm9tIGNvbnRlbnQgc3RhdGUuXCIsXCJ0eXBlXCI6XCJ1bnN0eWxlZFwiLFwiZGVwdGhcIjowLFwiaW5saW5lU3R5bGVSYW5nZXNcIjpbXSxcImVudGl0eVJhbmdlc1wiOltdLFwiZGF0YVwiOnt9fV19O1xyXG5cclxuICAgIGNvbnN0IFtjb250ZW50U3RhdGUgLCBzZXRDb250ZW50U3RhdGVdID0gdXNlU3RhdGUoY29udmVydEZyb21SYXcoY29udGVudCkpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRDaGFuZ2UgPSB1c2VDYWxsYmFjaygoY29udGVudCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTsgXHJcbiAgICAgICAgc2V0Q29udGVudFN0YXRlKGNvbnRlbnQpOyBcclxuXHJcbiAgICB9LFtdKTsgXHJcblxyXG5cclxuICAgIC8vIG9uRWRpdG9yU3RhdGVDaGFuZ2U9e2VkaXRTdGF0ZUNoYW5nZX1cclxuICAgIC8vIGNvbnN0IGVkaXRTdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChlZGl0U3RhdGUpPT57XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZWRpdFN0YXRlKTsgXHJcbiAgICAvLyAgICAgc2V0RWRpdG9yU3RhdGUoZWRpdFN0YXRlKTsgXHJcblxyXG4gICAgLy8gfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKCAgICBcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8cD5kZGQ8L3A+XHJcblxyXG4gICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgIGVkaXRTdGF0ZT17ZWRpdG9yU3RhdGV9XHJcbiAgICAgICAgICAgdG9vbGJhckNsYXNzTmFtZT1cInRvb2xiYXJDbGFzc05hbWVcIlxyXG4gICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJ3cmFwcGVyQ2xhc3NOYW1lXCJcclxuICAgICAgICAgICBlZGl0b3JDbGFzc05hbWU9XCJlZGl0b3JDbGFzc05hbWVcIlxyXG4gICAgICAgICAgIGxvY2FsaXphdGlvbj17e1xyXG4gICAgICAgICAgICAgICBsb2NhbGU6J2tvJywgXHJcbiAgICAgICAgICAgfX1cclxuICAgICAgICBcclxuICAgICAgICAgICBvbkNvbnRlbnRTdGF0ZUNoYW5nZT17Y29udGVudENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHRleHRhcmVhIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeWVkaXRvcjsgIl0sInNvdXJjZVJvb3QiOiIifQ==