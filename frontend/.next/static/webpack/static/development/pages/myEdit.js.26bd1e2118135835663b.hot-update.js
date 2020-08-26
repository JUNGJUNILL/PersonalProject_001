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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
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

_s(Myeditor, "ZEJ4fP1tBHJoYUCgVLNrvYUiJys=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJ1c2VTdGF0ZSIsIkVkaXRvclN0YXRlIiwiY3JlYXRlRW1wdHkiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwiY29udGVudCIsImNvbnRlbnRTdGF0ZSIsInNldENvbnRlbnRTdGF0ZSIsImNvbnRlbnRDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBSztBQUFBOztBQUFBLGtCQUVvQkMsc0RBQVEsQ0FBQztBQUFBLFdBQy9DQyxvREFBVyxDQUFDQyxXQUFaLEVBRCtDO0FBQUEsR0FBRCxDQUY1QjtBQUFBLE1BRVhDLFdBRlc7QUFBQSxNQUVFQyxjQUZGOztBQU1sQixNQUFNQyxPQUFPLEdBQUc7QUFBQyxpQkFBWSxFQUFiO0FBQWdCLGNBQVMsQ0FBQztBQUFDLGFBQU0sT0FBUDtBQUFlLGNBQU8saUNBQXRCO0FBQXdELGNBQU8sVUFBL0Q7QUFBMEUsZUFBUSxDQUFsRjtBQUFvRiwyQkFBb0IsRUFBeEc7QUFBMkcsc0JBQWUsRUFBMUg7QUFBNkgsY0FBTztBQUFwSSxLQUFEO0FBQXpCLEdBQWhCOztBQU5rQixtQkFRdUJMLHNEQUFRLENBQUMsRUFBRCxDQVIvQjtBQUFBLE1BUVhNLFlBUlc7QUFBQSxNQVFJQyxlQVJKOztBQVVsQixNQUFNQyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0osT0FBRCxFQUFXO0FBQ3pDSyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sT0FBWjtBQUNBRSxtQkFBZSxDQUFDRixPQUFELENBQWY7QUFFSCxHQUpnQyxFQUkvQixFQUorQixDQUFqQyxDQVZrQixDQWlCbEI7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUNJLG1FQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERCxFQUVDLE1BQUMsMERBQUQ7QUFDRyxhQUFTLEVBQUVGLFdBRGQ7QUFFRSxvQkFBZ0IsRUFBQyxrQkFGbkI7QUFHRSxvQkFBZ0IsRUFBQyxrQkFIbkI7QUFJRSxtQkFBZSxFQUFDLGlCQUpsQjtBQU1FLHdCQUFvQixFQUFFSyxhQU54QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FESjtBQWFILENBckNEOztHQUFNVCxROztLQUFBQSxRO0FBdUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbXlFZGl0LmpzLjI2YmQxZTIxMTgxMzU4MzU2NjNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VkaXRvcn0gZnJvbSAncmVhY3QtZHJhZnQtd3lzaXd5ZydcclxuaW1wb3J0IHtFZGl0b3JTdGF0ZX0gZnJvbSAnZHJhZnQtanMnXHJcbmltcG9ydCB7IGNvbnZlcnRGcm9tUmF3IH0gZnJvbSAnZHJhZnQtanMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IE15ZWRpdG9yID0gKCkgPT57XHJcblxyXG4gICAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PlxyXG4gICAgRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IHtcImVudGl0eU1hcFwiOnt9LFwiYmxvY2tzXCI6W3tcImtleVwiOlwiNjM3Z3JcIixcInRleHRcIjpcIkluaXRpYWxpemVkIGZyb20gY29udGVudCBzdGF0ZS5cIixcInR5cGVcIjpcInVuc3R5bGVkXCIsXCJkZXB0aFwiOjAsXCJpbmxpbmVTdHlsZVJhbmdlc1wiOltdLFwiZW50aXR5UmFuZ2VzXCI6W10sXCJkYXRhXCI6e319XX07XHJcblxyXG4gICAgY29uc3QgW2NvbnRlbnRTdGF0ZSAsIHNldENvbnRlbnRTdGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgY29udGVudENoYW5nZSA9IHVzZUNhbGxiYWNrKChjb250ZW50KT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpOyBcclxuICAgICAgICBzZXRDb250ZW50U3RhdGUoY29udGVudCk7IFxyXG5cclxuICAgIH0sW10pOyBcclxuXHJcblxyXG4gICAgLy8gb25FZGl0b3JTdGF0ZUNoYW5nZT17ZWRpdFN0YXRlQ2hhbmdlfVxyXG4gICAgLy8gY29uc3QgZWRpdFN0YXRlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGVkaXRTdGF0ZSk9PntcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhlZGl0U3RhdGUpOyBcclxuICAgIC8vICAgICBzZXRFZGl0b3JTdGF0ZShlZGl0U3RhdGUpOyBcclxuXHJcbiAgICAvLyB9LFtdKVxyXG5cclxuICAgIHJldHVybiAoICAgIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxwPmRkZDwvcD5cclxuICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICBlZGl0U3RhdGU9e2VkaXRvclN0YXRlfVxyXG4gICAgICAgICAgIHRvb2xiYXJDbGFzc05hbWU9XCJ0b29sYmFyQ2xhc3NOYW1lXCJcclxuICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwid3JhcHBlckNsYXNzTmFtZVwiXHJcbiAgICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwiZWRpdG9yQ2xhc3NOYW1lXCJcclxuICAgICAgICBcclxuICAgICAgICAgICBvbkNvbnRlbnRTdGF0ZUNoYW5nZT17Y29udGVudENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15ZWRpdG9yOyAiXSwic291cmNlUm9vdCI6IiJ9