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

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
    editState: editorState,
    wrapperClassName: "demo-wrapper",
    editorClassName: "demo-editor",
    localization: {
      locale: 'ko'
    },
    onContentStateChange: contentChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJ1c2VTdGF0ZSIsIkVkaXRvclN0YXRlIiwiY3JlYXRlRW1wdHkiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwiY29udGVudCIsImNvbnZlcnRGcm9tUmF3IiwiY29udGVudFN0YXRlIiwic2V0Q29udGVudFN0YXRlIiwiY29udGVudENoYW5nZSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImxvY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFLO0FBQUE7O0FBQUEsa0JBRW9CQyxzREFBUSxDQUFDO0FBQUEsV0FDL0NDLG9EQUFXLENBQUNDLFdBQVosRUFEK0M7QUFBQSxHQUFELENBRjVCO0FBQUEsTUFFWEMsV0FGVztBQUFBLE1BRUVDLGNBRkY7O0FBTWxCLE1BQU1DLE9BQU8sR0FBRztBQUFDLGlCQUFZLEVBQWI7QUFBZ0IsY0FBUyxDQUFDO0FBQUMsYUFBTSxPQUFQO0FBQWUsY0FBTyxpQ0FBdEI7QUFBd0QsY0FBTyxVQUEvRDtBQUEwRSxlQUFRLENBQWxGO0FBQW9GLDJCQUFvQixFQUF4RztBQUEyRyxzQkFBZSxFQUExSDtBQUE2SCxjQUFPO0FBQXBJLEtBQUQ7QUFBekIsR0FBaEI7O0FBTmtCLG1CQVF1Qkwsc0RBQVEsQ0FBQ00sK0RBQWMsQ0FBQ0QsT0FBRCxDQUFmLENBUi9CO0FBQUEsTUFRWEUsWUFSVztBQUFBLE1BUUlDLGVBUko7O0FBVWxCLE1BQU1DLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxVQUFDTCxPQUFELEVBQVc7QUFDekNNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxPQUFaO0FBQ0FHLG1CQUFlLENBQUNILE9BQUQsQ0FBZjtBQUVILEdBSmdDLEVBSS9CLEVBSitCLENBQWpDLENBVmtCLENBaUJsQjtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMERBQUQ7QUFDRyxhQUFTLEVBQUVGLFdBRGQ7QUFFRyxvQkFBZ0IsRUFBQyxjQUZwQjtBQUdHLG1CQUFlLEVBQUMsYUFIbkI7QUFJRSxnQkFBWSxFQUFFO0FBQ1ZVLFlBQU0sRUFBQztBQURHLEtBSmhCO0FBUUUsd0JBQW9CLEVBQUVKLGFBUnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQUZKO0FBZ0JILENBeENEOztHQUFNVixROztLQUFBQSxRO0FBMENTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbXlFZGl0LmpzLjkwMjEzM2ZlNTU1M2Y4MWQ0M2I4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VkaXRvcn0gZnJvbSAncmVhY3QtZHJhZnQtd3lzaXd5ZydcclxuaW1wb3J0IHtFZGl0b3JTdGF0ZX0gZnJvbSAnZHJhZnQtanMnXHJcbmltcG9ydCB7IGNvbnZlcnRGcm9tUmF3IH0gZnJvbSAnZHJhZnQtanMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IE15ZWRpdG9yID0gKCkgPT57XHJcblxyXG4gICAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PlxyXG4gICAgRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IHtcImVudGl0eU1hcFwiOnt9LFwiYmxvY2tzXCI6W3tcImtleVwiOlwiNjM3Z3JcIixcInRleHRcIjpcIkluaXRpYWxpemVkIGZyb20gY29udGVudCBzdGF0ZS5cIixcInR5cGVcIjpcInVuc3R5bGVkXCIsXCJkZXB0aFwiOjAsXCJpbmxpbmVTdHlsZVJhbmdlc1wiOltdLFwiZW50aXR5UmFuZ2VzXCI6W10sXCJkYXRhXCI6e319XX07XHJcblxyXG4gICAgY29uc3QgW2NvbnRlbnRTdGF0ZSAsIHNldENvbnRlbnRTdGF0ZV0gPSB1c2VTdGF0ZShjb252ZXJ0RnJvbVJhdyhjb250ZW50KSk7XHJcblxyXG4gICAgY29uc3QgY29udGVudENoYW5nZSA9IHVzZUNhbGxiYWNrKChjb250ZW50KT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpOyBcclxuICAgICAgICBzZXRDb250ZW50U3RhdGUoY29udGVudCk7IFxyXG5cclxuICAgIH0sW10pOyBcclxuXHJcblxyXG4gICAgLy8gb25FZGl0b3JTdGF0ZUNoYW5nZT17ZWRpdFN0YXRlQ2hhbmdlfVxyXG4gICAgLy8gY29uc3QgZWRpdFN0YXRlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGVkaXRTdGF0ZSk9PntcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhlZGl0U3RhdGUpOyBcclxuICAgIC8vICAgICBzZXRFZGl0b3JTdGF0ZShlZGl0U3RhdGUpOyBcclxuXHJcbiAgICAvLyB9LFtdKVxyXG5cclxuICAgIHJldHVybiAoICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgZWRpdFN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cImRlbW8td3JhcHBlclwiXHJcbiAgICAgICAgICAgIGVkaXRvckNsYXNzTmFtZT1cImRlbW8tZWRpdG9yXCJcclxuICAgICAgICAgICBsb2NhbGl6YXRpb249e3tcclxuICAgICAgICAgICAgICAgbG9jYWxlOidrbycsIFxyXG4gICAgICAgICAgIH19XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgb25Db250ZW50U3RhdGVDaGFuZ2U9e2NvbnRlbnRDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXllZGl0b3I7ICJdLCJzb3VyY2VSb290IjoiIn0=