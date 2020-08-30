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

  var editContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    console.log('끼잉끼잉==>', draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent())));
  }, [editorState]); // const [editorState, setEditorState] = useState(
  //     () => EditorState.createEmpty(),
  //   );

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createEmpty()),
      editorState = _useState[0],
      setEditorState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState2[0],
      setContent = _useState2[1];

  var onEditorStateChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (editState) {
    console.log('editState====>', editState);
    setEditorState(editState);
    console.log('원본=>>', draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent())));
    setContent(draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent())));
    console.log('컨텐트=>>', content);
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
      lineNumber: 37,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: editContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "\uC791\uC131"));
};

_s(Myeditor, "khH0SjQjxgO9hZO41oab+ph1fGQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJlZGl0Q29udGVudCIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImRyYWZ0VG9IdG1sIiwiY29udmVydFRvUmF3IiwiZWRpdG9yU3RhdGUiLCJnZXRDdXJyZW50Q29udGVudCIsInVzZVN0YXRlIiwiRWRpdG9yU3RhdGUiLCJjcmVhdGVFbXB0eSIsInNldEVkaXRvclN0YXRlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkVkaXRvclN0YXRlQ2hhbmdlIiwiZWRpdFN0YXRlIiwibG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUlBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUs7QUFBQTs7QUFHbEIsTUFBTUMsV0FBVyxHQUFHQyx5REFBVyxDQUFDLFlBQUk7QUFDaENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBd0JDLHNEQUFXLENBQUNDLDZEQUFZLENBQUNDLFdBQVcsQ0FBQ0MsaUJBQVosRUFBRCxDQUFiLENBQW5DO0FBQ0gsR0FGOEIsRUFFN0IsQ0FBQ0QsV0FBRCxDQUY2QixDQUEvQixDQUhrQixDQU9sQjtBQUNBO0FBQ0E7O0FBVGtCLGtCQVdtQkUsc0RBQVEsQ0FBQ0Msb0RBQVcsQ0FBQ0MsV0FBWixFQUFELENBWDNCO0FBQUEsTUFXWkosV0FYWTtBQUFBLE1BV0NLLGNBWEQ7O0FBQUEsbUJBWVlILHNEQUFRLENBQUMsRUFBRCxDQVpwQjtBQUFBLE1BWVpJLE9BWlk7QUFBQSxNQVlGQyxVQVpFOztBQWNuQixNQUFNQyxtQkFBbUIsR0FBR2IseURBQVcsQ0FBQyxVQUFDYyxTQUFELEVBQWE7QUFFcERiLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQStCWSxTQUEvQjtBQUNBSixrQkFBYyxDQUFDSSxTQUFELENBQWQ7QUFDQWIsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFzQkMsc0RBQVcsQ0FBQ0MsNkRBQVksQ0FBQ0MsV0FBVyxDQUFDQyxpQkFBWixFQUFELENBQWIsQ0FBakM7QUFDQU0sY0FBVSxDQUFDVCxzREFBVyxDQUFDQyw2REFBWSxDQUFDQyxXQUFXLENBQUNDLGlCQUFaLEVBQUQsQ0FBYixDQUFaLENBQVY7QUFDQUwsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUF1QlMsT0FBdkI7QUFFQSxHQVJzQyxFQVFyQyxDQUFDTixXQUFELENBUnFDLENBQXZDO0FBVUMsU0FDQSxtRUFDSyxNQUFDLDBEQUFEO0FBQ0csYUFBUyxFQUFFQSxXQURkO0FBRUcsb0JBQWdCLEVBQUMsY0FGcEI7QUFHRyxtQkFBZSxFQUFDLGFBSG5CO0FBSUUsZ0JBQVksRUFBRTtBQUNWVSxZQUFNLEVBQUM7QUFERyxLQUpoQjtBQVFFLHVCQUFtQixFQUFFRixtQkFSdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURMLEVBV1EsTUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBRWQsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFYUixDQURBO0FBZ0JILENBeENEOztHQUFNRCxROztLQUFBQSxRO0FBMENTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbXlFZGl0LmpzLjRiMTk3Y2U3OWZkZGQ5ODhkMzZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VkaXRvcn0gZnJvbSAncmVhY3QtZHJhZnQtd3lzaXd5ZydcclxuaW1wb3J0IHsgRWRpdG9yU3RhdGUsY29udmVydFRvUmF3IH0gZnJvbSAnZHJhZnQtanMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5cclxuaW1wb3J0IGRyYWZ0VG9IdG1sIGZyb20gJ2RyYWZ0anMtdG8taHRtbCc7XHJcbmltcG9ydCBodG1sVG9EcmFmdCBmcm9tICdodG1sLXRvLWRyYWZ0anMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBNeWVkaXRvciA9ICgpID0+e1xyXG5cclxuXHJcbiAgICBjb25zdCBlZGl0Q29udGVudCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+uBvOyeieuBvOyeiT09PicgLCBkcmFmdFRvSHRtbChjb252ZXJ0VG9SYXcoZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSkpKTsgXHJcbiAgICB9LFtlZGl0b3JTdGF0ZV0pOyBcclxuXHJcbiAgICAvLyBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKFxyXG4gICAgLy8gICAgICgpID0+IEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCksXHJcbiAgICAvLyAgICk7XHJcblxyXG4gICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCkpO1xyXG4gICBjb25zdCBbY29udGVudCAsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpOyBcclxuXHJcbiAgIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZWRpdFN0YXRlKT0+e1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdlZGl0U3RhdGU9PT09PicgLCBlZGl0U3RhdGUpXHJcbiAgICBzZXRFZGl0b3JTdGF0ZShlZGl0U3RhdGUpOyBcclxuICAgIGNvbnNvbGUubG9nKCfsm5Drs7g9Pj4nICwgZHJhZnRUb0h0bWwoY29udmVydFRvUmF3KGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpKSk7IFxyXG4gICAgc2V0Q29udGVudChkcmFmdFRvSHRtbChjb252ZXJ0VG9SYXcoZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSkpKTsgXHJcbiAgICBjb25zb2xlLmxvZygn7Luo7YWQ7Yq4PT4+JyAsIGNvbnRlbnQpOyBcclxuXHJcbiAgIH0sW2VkaXRvclN0YXRlXSlcclxuXHJcbiAgICByZXR1cm4gKCAgICBcclxuICAgIDw+XHJcbiAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgZWRpdFN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cImRlbW8td3JhcHBlclwiXHJcbiAgICAgICAgICAgIGVkaXRvckNsYXNzTmFtZT1cImRlbW8tZWRpdG9yXCJcclxuICAgICAgICAgICBsb2NhbGl6YXRpb249e3tcclxuICAgICAgICAgICAgICAgbG9jYWxlOidrbycsIFxyXG4gICAgICAgICAgIH19XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17b25FZGl0b3JTdGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlZGl0Q29udGVudH0+7J6R7ISxPC9CdXR0b24+XHJcblxyXG4gICAgPC8+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeWVkaXRvcjsgIl0sInNvdXJjZVJvb3QiOiIifQ==