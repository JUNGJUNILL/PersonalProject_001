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
    console.log('끼잉끼잉==>', content);
  }, [content]); // const [editorState, setEditorState] = useState(
  //     () => EditorState.createEmpty(),
  //   );

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createEmpty()),
      editorState = _useState[0],
      setEditorState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState2[0],
      setContent = _useState2[1];

  var onEditorStateChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (editState) {
    setEditorState(editState);
    setContent(draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent())));
    console.log('setContent', content);
  }, [editorState, content]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJlZGl0Q29udGVudCIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJ1c2VTdGF0ZSIsIkVkaXRvclN0YXRlIiwiY3JlYXRlRW1wdHkiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwic2V0Q29udGVudCIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJlZGl0U3RhdGUiLCJkcmFmdFRvSHRtbCIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwibG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUlBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUs7QUFBQTs7QUFHbEIsTUFBTUMsV0FBVyxHQUFHQyx5REFBVyxDQUFDLFlBQUk7QUFDaENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBd0JDLE9BQXhCO0FBQ0gsR0FGOEIsRUFFN0IsQ0FBQ0EsT0FBRCxDQUY2QixDQUEvQixDQUhrQixDQU9sQjtBQUNBO0FBQ0E7O0FBVGtCLGtCQVdtQkMsc0RBQVEsQ0FBQ0Msb0RBQVcsQ0FBQ0MsV0FBWixFQUFELENBWDNCO0FBQUEsTUFXWkMsV0FYWTtBQUFBLE1BV0NDLGNBWEQ7O0FBQUEsbUJBWVlKLHNEQUFRLENBQUMsRUFBRCxDQVpwQjtBQUFBLE1BWVpELE9BWlk7QUFBQSxNQVlGTSxVQVpFOztBQWNuQixNQUFNQyxtQkFBbUIsR0FBR1YseURBQVcsQ0FBQyxVQUFDVyxTQUFELEVBQWE7QUFFcERILGtCQUFjLENBQUNHLFNBQUQsQ0FBZDtBQUNBRixjQUFVLENBQUNHLHNEQUFXLENBQUNDLDZEQUFZLENBQUNOLFdBQVcsQ0FBQ08saUJBQVosRUFBRCxDQUFiLENBQVosQ0FBVjtBQUNBYixXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCQyxPQUExQjtBQUdBLEdBUHNDLEVBT3JDLENBQUNJLFdBQUQsRUFBYUosT0FBYixDQVBxQyxDQUF2QztBQVNDLFNBQ0EsbUVBQ0ssTUFBQywwREFBRDtBQUNHLGFBQVMsRUFBRUksV0FEZDtBQUVHLG9CQUFnQixFQUFDLGNBRnBCO0FBR0csbUJBQWUsRUFBQyxhQUhuQjtBQUlFLGdCQUFZLEVBQUU7QUFDVlEsWUFBTSxFQUFDO0FBREcsS0FKaEI7QUFRRSx1QkFBbUIsRUFBRUwsbUJBUnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETCxFQVdRLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUVYLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWFIsQ0FEQTtBQWdCSCxDQXZDRDs7R0FBTUQsUTs7S0FBQUEsUTtBQXlDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG15RWRpdC5qcy5kODE4ZjUzZWNlM2RmN2I3MWU3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFZGl0b3J9IGZyb20gJ3JlYWN0LWRyYWZ0LXd5c2l3eWcnXHJcbmltcG9ydCB7IEVkaXRvclN0YXRlLGNvbnZlcnRUb1JhdyB9IGZyb20gJ2RyYWZ0LWpzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCBkcmFmdFRvSHRtbCBmcm9tICdkcmFmdGpzLXRvLWh0bWwnO1xyXG5pbXBvcnQgaHRtbFRvRHJhZnQgZnJvbSAnaHRtbC10by1kcmFmdGpzJztcclxuXHJcblxyXG5cclxuY29uc3QgTXllZGl0b3IgPSAoKSA9PntcclxuXHJcblxyXG4gICAgY29uc3QgZWRpdENvbnRlbnQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfrgbzsnonrgbzsnok9PT4nICwgY29udGVudCk7IFxyXG4gICAgfSxbY29udGVudF0pOyBcclxuXHJcbiAgICAvLyBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKFxyXG4gICAgLy8gICAgICgpID0+IEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCksXHJcbiAgICAvLyAgICk7XHJcblxyXG4gICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCkpO1xyXG4gICBjb25zdCBbY29udGVudCAsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpOyBcclxuXHJcbiAgIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZWRpdFN0YXRlKT0+e1xyXG5cclxuICAgIHNldEVkaXRvclN0YXRlKGVkaXRTdGF0ZSk7IFxyXG4gICAgc2V0Q29udGVudChkcmFmdFRvSHRtbChjb252ZXJ0VG9SYXcoZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSkpKTsgXHJcbiAgICBjb25zb2xlLmxvZygnc2V0Q29udGVudCcgLGNvbnRlbnQpOyBcclxuXHJcblxyXG4gICB9LFtlZGl0b3JTdGF0ZSxjb250ZW50XSlcclxuXHJcbiAgICByZXR1cm4gKCAgICBcclxuICAgIDw+XHJcbiAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgZWRpdFN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cImRlbW8td3JhcHBlclwiXHJcbiAgICAgICAgICAgIGVkaXRvckNsYXNzTmFtZT1cImRlbW8tZWRpdG9yXCJcclxuICAgICAgICAgICBsb2NhbGl6YXRpb249e3tcclxuICAgICAgICAgICAgICAgbG9jYWxlOidrbycsIFxyXG4gICAgICAgICAgIH19XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17b25FZGl0b3JTdGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlZGl0Q29udGVudH0+7J6R7ISxPC9CdXR0b24+XHJcblxyXG4gICAgPC8+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeWVkaXRvcjsgIl0sInNvdXJjZVJvb3QiOiIifQ==