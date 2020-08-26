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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJ1c2VTdGF0ZSIsIkVkaXRvclN0YXRlIiwiY3JlYXRlRW1wdHkiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwiY29udGVudCIsImNvbnZlcnRGcm9tUmF3IiwiY29udGVudFN0YXRlIiwic2V0Q29udGVudFN0YXRlIiwiY29udGVudENoYW5nZSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFLO0FBQUE7O0FBQUEsa0JBRW9CQyxzREFBUSxDQUFDO0FBQUEsV0FDL0NDLG9EQUFXLENBQUNDLFdBQVosRUFEK0M7QUFBQSxHQUFELENBRjVCO0FBQUEsTUFFWEMsV0FGVztBQUFBLE1BRUVDLGNBRkY7O0FBTWxCLE1BQU1DLE9BQU8sR0FBRztBQUFDLGlCQUFZLEVBQWI7QUFBZ0IsY0FBUyxDQUFDO0FBQUMsYUFBTSxPQUFQO0FBQWUsY0FBTyxpQ0FBdEI7QUFBd0QsY0FBTyxVQUEvRDtBQUEwRSxlQUFRLENBQWxGO0FBQW9GLDJCQUFvQixFQUF4RztBQUEyRyxzQkFBZSxFQUExSDtBQUE2SCxjQUFPO0FBQXBJLEtBQUQ7QUFBekIsR0FBaEI7O0FBTmtCLG1CQVF1Qkwsc0RBQVEsQ0FBQ00sK0RBQWMsQ0FBQ0QsT0FBRCxDQUFmLENBUi9CO0FBQUEsTUFRWEUsWUFSVztBQUFBLE1BUUlDLGVBUko7O0FBVWxCLE1BQU1DLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxVQUFDTCxPQUFELEVBQVc7QUFDekNNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxPQUFaO0FBQ0FHLG1CQUFlLENBQUNILE9BQUQsQ0FBZjtBQUVILEdBSmdDLEVBSS9CLEVBSitCLENBQWpDLENBVmtCLENBaUJsQjtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQ0ksbUVBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURELEVBRUMsTUFBQywwREFBRDtBQUNHLGFBQVMsRUFBRUYsV0FEZDtBQUVFLG9CQUFnQixFQUFDLGtCQUZuQjtBQUdFLG9CQUFnQixFQUFDLGtCQUhuQjtBQUlFLG1CQUFlLEVBQUMsaUJBSmxCO0FBTUUsd0JBQW9CLEVBQUVNLGFBTnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQURKO0FBYUgsQ0FyQ0Q7O0dBQU1WLFE7O0tBQUFBLFE7QUF1Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxteUVkaXQuanMuOGUxMzBiYTc2MGZiYTI2MGNkODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWRpdG9yfSBmcm9tICdyZWFjdC1kcmFmdC13eXNpd3lnJ1xyXG5pbXBvcnQge0VkaXRvclN0YXRlfSBmcm9tICdkcmFmdC1qcydcclxuaW1wb3J0IHsgY29udmVydEZyb21SYXcgfSBmcm9tICdkcmFmdC1qcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuY29uc3QgTXllZGl0b3IgPSAoKSA9PntcclxuXHJcbiAgICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKCgpID0+XHJcbiAgICBFZGl0b3JTdGF0ZS5jcmVhdGVFbXB0eSgpLFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0ge1wiZW50aXR5TWFwXCI6e30sXCJibG9ja3NcIjpbe1wia2V5XCI6XCI2MzdnclwiLFwidGV4dFwiOlwiSW5pdGlhbGl6ZWQgZnJvbSBjb250ZW50IHN0YXRlLlwiLFwidHlwZVwiOlwidW5zdHlsZWRcIixcImRlcHRoXCI6MCxcImlubGluZVN0eWxlUmFuZ2VzXCI6W10sXCJlbnRpdHlSYW5nZXNcIjpbXSxcImRhdGFcIjp7fX1dfTtcclxuXHJcbiAgICBjb25zdCBbY29udGVudFN0YXRlICwgc2V0Q29udGVudFN0YXRlXSA9IHVzZVN0YXRlKGNvbnZlcnRGcm9tUmF3KGNvbnRlbnQpKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50Q2hhbmdlID0gdXNlQ2FsbGJhY2soKGNvbnRlbnQpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udGVudCk7IFxyXG4gICAgICAgIHNldENvbnRlbnRTdGF0ZShjb250ZW50KTsgXHJcblxyXG4gICAgfSxbXSk7IFxyXG5cclxuXHJcbiAgICAvLyBvbkVkaXRvclN0YXRlQ2hhbmdlPXtlZGl0U3RhdGVDaGFuZ2V9XHJcbiAgICAvLyBjb25zdCBlZGl0U3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZWRpdFN0YXRlKT0+e1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVkaXRTdGF0ZSk7IFxyXG4gICAgLy8gICAgIHNldEVkaXRvclN0YXRlKGVkaXRTdGF0ZSk7IFxyXG5cclxuICAgIC8vIH0sW10pXHJcblxyXG4gICAgcmV0dXJuICggICAgXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPHA+ZGRkPC9wPlxyXG4gICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgIGVkaXRTdGF0ZT17ZWRpdG9yU3RhdGV9XHJcbiAgICAgICAgICAgdG9vbGJhckNsYXNzTmFtZT1cInRvb2xiYXJDbGFzc05hbWVcIlxyXG4gICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJ3cmFwcGVyQ2xhc3NOYW1lXCJcclxuICAgICAgICAgICBlZGl0b3JDbGFzc05hbWU9XCJlZGl0b3JDbGFzc05hbWVcIlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIG9uQ29udGVudFN0YXRlQ2hhbmdlPXtjb250ZW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXllZGl0b3I7ICJdLCJzb3VyY2VSb290IjoiIn0=