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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-to-draftjs */ "./node_modules/html-to-draftjs/dist/html-to-draftjs.js");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_to_draftjs__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\myEdit.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Myeditor = function Myeditor() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createEmpty()),
      editorState = _useState[0],
      setEditorState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState2[0],
      setContent = _useState2[1];

  var editContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    console.log('끼잉끼잉==>', content);
  }, [content]); // const [editorState, setEditorState] = useState(
  //     () => EditorState.createEmpty(),
  //   );

  var onEditorStateChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (editState) {
    setEditorState(editState);
    setContent(draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent())));
    console.log('setContent', content);
  }, [editorState]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
    editState: editorState,
    wrapperClassName: "demo-wrapper",
    editorClassName: "demo-editor",
    localization: {
      locale: 'ko'
    },
    onEditorStateChange: onEditorStateChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: editContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "\uC791\uC131"));
};

_s(Myeditor, "2qx9P3XzINbeZZrkjng59Ov3xDs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJ1c2VTdGF0ZSIsIkVkaXRvclN0YXRlIiwiY3JlYXRlRW1wdHkiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJlZGl0Q29udGVudCIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJlZGl0U3RhdGUiLCJkcmFmdFRvSHRtbCIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwibG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUlBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUs7QUFBQTs7QUFBQSxrQkFFb0JDLHNEQUFRLENBQUNDLG9EQUFXLENBQUNDLFdBQVosRUFBRCxDQUY1QjtBQUFBLE1BRVhDLFdBRlc7QUFBQSxNQUVFQyxjQUZGOztBQUFBLG1CQUdhSixzREFBUSxDQUFDLEVBQUQsQ0FIckI7QUFBQSxNQUdYSyxPQUhXO0FBQUEsTUFHREMsVUFIQzs7QUFNbEIsTUFBTUMsV0FBVyxHQUFHQyx5REFBVyxDQUFDLFlBQUk7QUFDaENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBd0JMLE9BQXhCO0FBQ0gsR0FGOEIsRUFFN0IsQ0FBQ0EsT0FBRCxDQUY2QixDQUEvQixDQU5rQixDQVVsQjtBQUNBO0FBQ0E7O0FBRUQsTUFBTU0sbUJBQW1CLEdBQUdILHlEQUFXLENBQUMsVUFBQ0ksU0FBRCxFQUFhO0FBRXBEUixrQkFBYyxDQUFDUSxTQUFELENBQWQ7QUFDQU4sY0FBVSxDQUFDTyxzREFBVyxDQUFDQyw2REFBWSxDQUFDWCxXQUFXLENBQUNZLGlCQUFaLEVBQUQsQ0FBYixDQUFaLENBQVY7QUFDQU4sV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkwsT0FBMUI7QUFHQSxHQVBzQyxFQU9yQyxDQUFDRixXQUFELENBUHFDLENBQXZDO0FBU0MsU0FDQSxtRUFDSyxNQUFDLDBEQUFEO0FBQ0csYUFBUyxFQUFFQSxXQURkO0FBRUcsb0JBQWdCLEVBQUMsY0FGcEI7QUFHRyxtQkFBZSxFQUFDLGFBSG5CO0FBSUUsZ0JBQVksRUFBRTtBQUNWYSxZQUFNLEVBQUM7QUFERyxLQUpoQjtBQVFFLHVCQUFtQixFQUFFTCxtQkFSdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURMLEVBV1EsTUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBRUosV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFYUixDQURBO0FBZ0JILENBdkNEOztHQUFNUixROztLQUFBQSxRO0FBeUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbXlFZGl0LmpzLmQ4MjcxNTBkMGZiZTFiMjgyYjJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VkaXRvcn0gZnJvbSAncmVhY3QtZHJhZnQtd3lzaXd5ZydcclxuaW1wb3J0IHsgRWRpdG9yU3RhdGUsY29udmVydFRvUmF3IH0gZnJvbSAnZHJhZnQtanMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5cclxuaW1wb3J0IGRyYWZ0VG9IdG1sIGZyb20gJ2RyYWZ0anMtdG8taHRtbCc7XHJcbmltcG9ydCBodG1sVG9EcmFmdCBmcm9tICdodG1sLXRvLWRyYWZ0anMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBNeWVkaXRvciA9ICgpID0+e1xyXG5cclxuICAgIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKSk7XHJcbiAgICBjb25zdCBbY29udGVudCAsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpOyBcclxuXHJcblxyXG4gICAgY29uc3QgZWRpdENvbnRlbnQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfrgbzsnonrgbzsnok9PT4nICwgY29udGVudCk7IFxyXG4gICAgfSxbY29udGVudF0pOyBcclxuXHJcbiAgICAvLyBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKFxyXG4gICAgLy8gICAgICgpID0+IEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCksXHJcbiAgICAvLyAgICk7XHJcblxyXG4gICBjb25zdCBvbkVkaXRvclN0YXRlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGVkaXRTdGF0ZSk9PntcclxuXHJcbiAgICBzZXRFZGl0b3JTdGF0ZShlZGl0U3RhdGUpOyBcclxuICAgIHNldENvbnRlbnQoZHJhZnRUb0h0bWwoY29udmVydFRvUmF3KGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpKSk7IFxyXG4gICAgY29uc29sZS5sb2coJ3NldENvbnRlbnQnICxjb250ZW50KTsgXHJcblxyXG5cclxuICAgfSxbZWRpdG9yU3RhdGVdKVxyXG5cclxuICAgIHJldHVybiAoICAgIFxyXG4gICAgPD5cclxuICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICBlZGl0U3RhdGU9e2VkaXRvclN0YXRlfVxyXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwiZGVtby13cmFwcGVyXCJcclxuICAgICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwiZGVtby1lZGl0b3JcIlxyXG4gICAgICAgICAgIGxvY2FsaXphdGlvbj17e1xyXG4gICAgICAgICAgICAgICBsb2NhbGU6J2tvJywgXHJcbiAgICAgICAgICAgfX1cclxuICAgICAgICBcclxuICAgICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXtvbkVkaXRvclN0YXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2VkaXRDb250ZW50fT7snpHshLE8L0J1dHRvbj5cclxuXHJcbiAgICA8Lz5cclxuICAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15ZWRpdG9yOyAiXSwic291cmNlUm9vdCI6IiJ9