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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_emp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/emp */ "./reducers/emp.js");
var _this = undefined,
    _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\myEdit.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Myeditor = function Myeditor() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createEmpty()),
      editorState = _useState[0],
      setEditorState = _useState[1]; //<p></p>


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState2[0],
      setContent = _useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.auth;
  }),
      userInfo = _useSelector.userInfo; //제출


  var editContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!content || !content.trim()) {
      alert('게시글을 입력 해 주세요.');
      return;
    }

    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_7__["EMP_INSERT_REQUEST"],
      data: {
        content: content,
        nickName: userInfo
      }
    });
  }, [content]); //이미지 업로드 

  var onEditorStateChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (editState) {
    setEditorState(editState);
    setContent(draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent())));
  }, [editorState]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 10
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
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
      lineNumber: 55,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: editContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "\uC791\uC131"));
};

_s(Myeditor, "CmhCTkKUftZ7NzP/N6NZsNXvA6w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImNyZWF0ZUVtcHR5IiwiZWRpdG9yU3RhdGUiLCJzZXRFZGl0b3JTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJ1c2VySW5mbyIsImVkaXRDb250ZW50IiwidXNlQ2FsbGJhY2siLCJ0cmltIiwiYWxlcnQiLCJ0eXBlIiwiRU1QX0lOU0VSVF9SRVFVRVNUIiwiZGF0YSIsIm5pY2tOYW1lIiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsImVkaXRTdGF0ZSIsImRyYWZ0VG9IdG1sIiwiY29udmVydFRvUmF3IiwiZ2V0Q3VycmVudENvbnRlbnQiLCJsb2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBTUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBSztBQUFBOztBQUVsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZrQixrQkFHb0JDLHNEQUFRLENBQUNDLG9EQUFXLENBQUNDLFdBQVosRUFBRCxDQUg1QjtBQUFBLE1BR1hDLFdBSFc7QUFBQSxNQUdFQyxjQUhGLGlCQUlsQjs7O0FBSmtCLG1CQUthSixzREFBUSxDQUFDLEVBQUQsQ0FMckI7QUFBQSxNQUtYSyxPQUxXO0FBQUEsTUFLREMsVUFMQzs7QUFBQSxxQkFNQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxJQUFmO0FBQUEsR0FBRCxDQU5aO0FBQUEsTUFNWEMsUUFOVyxnQkFNWEEsUUFOVyxFQVFsQjs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyx5REFBVyxDQUFDLFlBQUk7QUFDaEMsUUFBRyxDQUFDUCxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDUSxJQUFSLEVBQWhCLEVBQStCO0FBQzNCQyxXQUFLLENBQUMsZ0JBQUQsQ0FBTDtBQUNBO0FBQ0g7O0FBQ0RoQixZQUFRLENBQUM7QUFDTGlCLFVBQUksRUFBQ0MsZ0VBREE7QUFFTEMsVUFBSSxFQUFDO0FBQ0RaLGVBQU8sRUFBR0EsT0FEVDtBQUVEYSxnQkFBUSxFQUFHUjtBQUZWO0FBRkEsS0FBRCxDQUFSO0FBU0gsR0FkOEIsRUFjN0IsQ0FBQ0wsT0FBRCxDQWQ2QixDQUEvQixDQVRrQixDQTJCbEI7O0FBR0QsTUFBTWMsbUJBQW1CLEdBQUdQLHlEQUFXLENBQUMsVUFBQ1EsU0FBRCxFQUFhO0FBRXBEaEIsa0JBQWMsQ0FBQ2dCLFNBQUQsQ0FBZDtBQUNBZCxjQUFVLENBQUNlLHNEQUFXLENBQUNDLDZEQUFZLENBQUNuQixXQUFXLENBQUNvQixpQkFBWixFQUFELENBQWIsQ0FBWixDQUFWO0FBRUEsR0FMc0MsRUFLckMsQ0FBQ3BCLFdBQUQsQ0FMcUMsQ0FBdkM7QUFPQyxTQUNBLG1FQUNLLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FETCxFQUVLLE1BQUMsMERBQUQ7QUFDRyxhQUFTLEVBQUVBLFdBRGQ7QUFFRyxvQkFBZ0IsRUFBQyxjQUZwQjtBQUdHLG1CQUFlLEVBQUMsYUFIbkI7QUFJRSxnQkFBWSxFQUFFO0FBQ1ZxQixZQUFNLEVBQUM7QUFERyxLQUpoQjtBQVFFLHVCQUFtQixFQUFFTCxtQkFSdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZMLEVBWVEsTUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBRVIsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFaUixDQURBO0FBaUJILENBdEREOztHQUFNZCxRO1VBRWVFLHVELEVBSUVRLHVEOzs7S0FOakJWLFE7QUF3RFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxteUVkaXQuanMuYjQ4ZjU0YzIyMzAxNTUzZjdiMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWRpdG9yfSBmcm9tICdyZWFjdC1kcmFmdC13eXNpd3lnJ1xyXG5pbXBvcnQgeyBFZGl0b3JTdGF0ZSxjb252ZXJ0VG9SYXcgfSBmcm9tICdkcmFmdC1qcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnXHJcbmltcG9ydCBkcmFmdFRvSHRtbCBmcm9tICdkcmFmdGpzLXRvLWh0bWwnO1xyXG5pbXBvcnQgaHRtbFRvRHJhZnQgZnJvbSAnaHRtbC10by1kcmFmdGpzJztcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFxyXG4gICAge0VNUF9JTlNFUlRfUkVRVUVTVCx9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9lbXAnOyBcclxuXHJcblxyXG5cclxuY29uc3QgTXllZGl0b3IgPSAoKSA9PntcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gICAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZShFZGl0b3JTdGF0ZS5jcmVhdGVFbXB0eSgpKTtcclxuICAgIC8vPHA+PC9wPlxyXG4gICAgY29uc3QgW2NvbnRlbnQgLCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCB7dXNlckluZm99ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuYXV0aCk7XHJcblxyXG4gICAgLy/soJzstpxcclxuICAgIGNvbnN0IGVkaXRDb250ZW50ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBpZighY29udGVudCB8fCAhY29udGVudC50cmltKCkpe1xyXG4gICAgICAgICAgICBhbGVydCgn6rKM7Iuc6riA7J2EIOyeheugpSDtlbQg7KO87IS47JqULicpOyBcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goeyAgXHJcbiAgICAgICAgICAgIHR5cGU6RU1QX0lOU0VSVF9SRVFVRVNULCBcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50IDogY29udGVudCwgXHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZSA6IHVzZXJJbmZvLCBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFtjb250ZW50XSk7IFxyXG5cclxuXHJcblxyXG4gICAgLy/snbTrr7jsp4Ag7JeF66Gc65OcIFxyXG4gICAgXHJcblxyXG4gICBjb25zdCBvbkVkaXRvclN0YXRlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGVkaXRTdGF0ZSk9PntcclxuXHJcbiAgICBzZXRFZGl0b3JTdGF0ZShlZGl0U3RhdGUpOyBcclxuICAgIHNldENvbnRlbnQoZHJhZnRUb0h0bWwoY29udmVydFRvUmF3KGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpKSk7IFxyXG5cclxuICAgfSxbZWRpdG9yU3RhdGVdKTtcclxuXHJcbiAgICByZXR1cm4gKCAgICBcclxuICAgIDw+XHJcbiAgICAgICAgIDxCdXR0b24+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgIGVkaXRTdGF0ZT17ZWRpdG9yU3RhdGV9XHJcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJkZW1vLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICBlZGl0b3JDbGFzc05hbWU9XCJkZW1vLWVkaXRvclwiXHJcbiAgICAgICAgICAgbG9jYWxpemF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgIGxvY2FsZTona28nLCBcclxuICAgICAgICAgICB9fVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9e29uRWRpdG9yU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZWRpdENvbnRlbnR9PuyekeyEsTwvQnV0dG9uPlxyXG5cclxuICAgIDwvPlxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXllZGl0b3I7ICJdLCJzb3VyY2VSb290IjoiIn0=