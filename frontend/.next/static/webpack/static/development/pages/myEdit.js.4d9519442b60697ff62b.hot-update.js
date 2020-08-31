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
      setEditorState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState2[0],
      setContent = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      mainPostTitle = _useState3[0],
      setMainPostTitle = _useState3[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.auth;
  }),
      userInfo = _useSelector.userInfo;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.emp;
  }),
      imagePaths = _useSelector2.imagePaths;

  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); //제출

  var editContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!mainPostTitle || !mainPostTitle.trim()) {
      alert('제목을 입력해 주세요.');
      return;
    }

    if (!content || !content.trim()) {
      alert('게시글을 입력 해 주세요.');
      return;
    }

    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_7__["EMP_INSERT_REQUEST"],
      data: {
        content: content,
        title: mainPostTitle,
        nickName: userInfo
      }
    });
  }, [content]); //게시글 제목 입력 

  var mainPostTitleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setMainPostTitle(e.target.value);
  }, [mainPostTitle]); //이미지 업로드 창 

  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var imageFormData = new FormData();
    Array.prototype.forEach.call(e.target.files, function (f) {
      imageFormData.append('image', f);
    });
    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_7__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []); //이미지 업로드 클릭 

  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]); //본문 입력

  var onEditorStateChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (editState) {
    setEditorState(editState);
    setContent(draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent())));
  }, [editorState]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, imagePaths && imagePaths.map(function (v, i) {
    return __jsx("div", {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "http://localhost:3095/".concat(v),
      style: {
        width: '200px'
      },
      alt: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 14
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: onRemoveImage(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, "\uC81C\uAC70")));
  })), __jsx("input", {
    type: "file",
    multiple: true,
    ref: imageInput,
    onChange: onChangeImages,
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 10
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "mainPostTitle",
    value: mainPostTitle,
    onChange: mainPostTitleChange,
    placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825 \uD574 \uC8FC\uC138\uC694.",
    size: "25",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 10
    }
  }), __jsx(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
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
      lineNumber: 116,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: editContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, "\uC791\uC131"));
};

_s(Myeditor, "us+yDiRZJmtrdnDT5TOrTDwYT9s=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImNyZWF0ZUVtcHR5IiwiZWRpdG9yU3RhdGUiLCJzZXRFZGl0b3JTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwibWFpblBvc3RUaXRsZSIsInNldE1haW5Qb3N0VGl0bGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsInVzZXJJbmZvIiwiZW1wIiwiaW1hZ2VQYXRocyIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJlZGl0Q29udGVudCIsInVzZUNhbGxiYWNrIiwidHJpbSIsImFsZXJ0IiwidHlwZSIsIkVNUF9JTlNFUlRfUkVRVUVTVCIsImRhdGEiLCJ0aXRsZSIsIm5pY2tOYW1lIiwibWFpblBvc3RUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlSW1hZ2VzIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsImZpbGVzIiwiZiIsImFwcGVuZCIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJlZGl0U3RhdGUiLCJkcmFmdFRvSHRtbCIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwibWFwIiwidiIsImkiLCJ3aWR0aCIsIm9uUmVtb3ZlSW1hZ2UiLCJsb2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBUUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBSztBQUFBOztBQUVsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFX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LEVBaUJLLE1BQUMsMERBQUQ7QUFDRyxhQUFTLEVBQUV2QixXQURkO0FBRUcsb0JBQWdCLEVBQUMsY0FGcEI7QUFHRyxtQkFBZSxFQUFDLGFBSG5CO0FBSUUsZ0JBQVksRUFBRTtBQUNWbUQsWUFBTSxFQUFDO0FBREcsS0FKaEI7QUFTRSx1QkFBbUIsRUFBRVYsbUJBVHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkwsRUE2QlEsTUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBRTNCLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBN0JSLENBREE7QUFrQ0gsQ0FuSEQ7O0dBQU1wQixRO1VBRWVFLHVELEVBS0VVLHVELEVBQ0VBLHVEOzs7S0FSbkJaLFE7QUFxSFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxteUVkaXQuanMuNGQ5NTE5NDQyYjYwNjk3ZmY2MmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWRpdG9yfSBmcm9tICdyZWFjdC1kcmFmdC13eXNpd3lnJ1xyXG5pbXBvcnQgeyBFZGl0b3JTdGF0ZSxjb252ZXJ0VG9SYXcgfSBmcm9tICdkcmFmdC1qcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbiwgSW5wdXR9IGZyb20gJ2FudGQnXHJcbmltcG9ydCBkcmFmdFRvSHRtbCBmcm9tICdkcmFmdGpzLXRvLWh0bWwnO1xyXG5pbXBvcnQgaHRtbFRvRHJhZnQgZnJvbSAnaHRtbC10by1kcmFmdGpzJztcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFxyXG4gICAge0VNUF9JTlNFUlRfUkVRVUVTVCwgXHJcbiAgICAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvZW1wJzsgXHJcblxyXG5cclxuXHJcbmNvbnN0IE15ZWRpdG9yID0gKCkgPT57XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICAgIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKSk7XHJcblxyXG4gICAgY29uc3QgW2NvbnRlbnQgLCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCBbbWFpblBvc3RUaXRsZSAsIHNldE1haW5Qb3N0VGl0bGVdID0gdXNlU3RhdGUoJycpOyBcclxuICAgIGNvbnN0IHt1c2VySW5mb30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5hdXRoKTtcclxuICAgIGNvbnN0IHtpbWFnZVBhdGhzfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmVtcCk7IFxyXG4gICAgXHJcbiAgICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7IFxyXG5cclxuICAgIC8v7KCc7LacXHJcbiAgICBjb25zdCBlZGl0Q29udGVudCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcblxyXG4gICAgICAgIGlmKCFtYWluUG9zdFRpdGxlIHx8ICFtYWluUG9zdFRpdGxlLnRyaW0oKSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfsoJzrqqnsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC4nKTsgXHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighY29udGVudCB8fCAhY29udGVudC50cmltKCkpe1xyXG4gICAgICAgICAgICBhbGVydCgn6rKM7Iuc6riA7J2EIOyeheugpSDtlbQg7KO87IS47JqULicpOyBcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHsgIFxyXG4gICAgICAgICAgICB0eXBlOkVNUF9JTlNFUlRfUkVRVUVTVCwgXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgY29udGVudCA6IGNvbnRlbnQsIFxyXG4gICAgICAgICAgICAgICAgdGl0bGUgICA6IG1haW5Qb3N0VGl0bGUsIFxyXG4gICAgICAgICAgICAgICAgbmlja05hbWUgOiB1c2VySW5mbywgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSxbY29udGVudF0pOyBcclxuXHJcblxyXG4gICAgLy/qsozsi5zquIAg7KCc66qpIOyeheugpSBcclxuICAgIGNvbnN0IG1haW5Qb3N0VGl0bGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuXHJcbiAgICAgICAgc2V0TWFpblBvc3RUaXRsZShlLnRhcmdldC52YWx1ZSk7IFxyXG5cclxuICAgIH0sW21haW5Qb3N0VGl0bGVdKVxyXG5cclxuXHJcblxyXG4gICAgLy/snbTrr7jsp4Ag7JeF66Gc65OcIOywvSBcclxuICAgIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOyBcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzICwoZik9PntcclxuICAgICAgICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJyxmKTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOmltYWdlRm9ybURhdGEsICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICB9LFtdKTsgXHJcblxyXG5cclxuXHJcbiAgICAvL+ydtOuvuOyngCDsl4XroZzrk5wg7YG066atIFxyXG4gICAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7IFxyXG5cclxuICAgIH0sW2ltYWdlSW5wdXQuY3VycmVudF0pXHJcblxyXG5cclxuXHJcblxyXG4gICAvL+uzuOusuCDsnoXroKVcclxuICAgY29uc3Qgb25FZGl0b3JTdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChlZGl0U3RhdGUpPT57XHJcblxyXG4gICAgc2V0RWRpdG9yU3RhdGUoZWRpdFN0YXRlKTsgXHJcbiAgICBzZXRDb250ZW50KGRyYWZ0VG9IdG1sKGNvbnZlcnRUb1JhdyhlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKSkpOyBcclxuXHJcbiAgIH0sW2VkaXRvclN0YXRlXSk7XHJcblxyXG4gICAgcmV0dXJuICggICAgXHJcbiAgICA8PlxyXG4gICAgPGRpdj5cclxuICAgIHtpbWFnZVBhdGhzICYmIGltYWdlUGF0aHMubWFwKCh2LGkpPT57XHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXt2fSA+XHJcbiAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA5NS8ke3Z9YH0gc3R5bGU9e3t3aWR0aDonMjAwcHgnIH19IGFsdD17dn0gLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gaGlkZGVuIC8+XHJcbiAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgIDxJbnB1dCBuYW1lPVwibWFpblBvc3RUaXRsZVwiIHZhbHVlPXttYWluUG9zdFRpdGxlfSBvbkNoYW5nZT17bWFpblBvc3RUaXRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCLsoJzrqqnsnYQg7J6F66ClIO2VtCDso7zshLjsmpQuXCIgc2l6ZT1cIjI1XCIvPlxyXG4gICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgIGVkaXRTdGF0ZT17ZWRpdG9yU3RhdGV9XHJcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJkZW1vLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICBlZGl0b3JDbGFzc05hbWU9XCJkZW1vLWVkaXRvclwiXHJcbiAgICAgICAgICAgbG9jYWxpemF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgIGxvY2FsZTona28nLCBcclxuICAgICAgICAgICB9fVxyXG4gICAgXHJcblxyXG4gICAgICAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9e29uRWRpdG9yU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZWRpdENvbnRlbnR9PuyekeyEsTwvQnV0dG9uPlxyXG5cclxuICAgIDwvPlxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXllZGl0b3I7ICJdLCJzb3VyY2VSb290IjoiIn0=