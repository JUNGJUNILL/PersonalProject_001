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
        width: '20%',
        height: '20px'
      },
      alt: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 14
      }
    }));
  })), __jsx("input", {
    type: "file",
    multiple: true,
    ref: imageInput,
    onChange: onChangeImages,
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 112,
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
      lineNumber: 113,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: editContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImNyZWF0ZUVtcHR5IiwiZWRpdG9yU3RhdGUiLCJzZXRFZGl0b3JTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwibWFpblBvc3RUaXRsZSIsInNldE1haW5Qb3N0VGl0bGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsInVzZXJJbmZvIiwiZW1wIiwiaW1hZ2VQYXRocyIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJlZGl0Q29udGVudCIsInVzZUNhbGxiYWNrIiwidHJpbSIsImFsZXJ0IiwidHlwZSIsIkVNUF9JTlNFUlRfUkVRVUVTVCIsImRhdGEiLCJ0aXRsZSIsIm5pY2tOYW1lIiwibWFpblBvc3RUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlSW1hZ2VzIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsImZpbGVzIiwiZiIsImFwcGVuZCIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJlZGl0U3RhdGUiLCJkcmFmdFRvSHRtbCIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwibWFwIiwidiIsImkiLCJ3aWR0aCIsImhlaWdodCIsImxvY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFRQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFLO0FBQUE7O0FBRWxCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7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O0FBU0UsdUJBQW1CLEVBQUVWLG1CQVR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEwsRUEwQlEsTUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBRTNCLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBMUJSLENBREE7QUErQkgsQ0FoSEQ7O0dBQU1wQixRO1VBRWVFLHVELEVBS0VVLHVELEVBQ0VBLHVEOzs7S0FSbkJaLFE7QUFrSFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxteUVkaXQuanMuMDYzYjRlM2JjMjU2MWViZjc0MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWRpdG9yfSBmcm9tICdyZWFjdC1kcmFmdC13eXNpd3lnJ1xyXG5pbXBvcnQgeyBFZGl0b3JTdGF0ZSxjb252ZXJ0VG9SYXcgfSBmcm9tICdkcmFmdC1qcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbiwgSW5wdXR9IGZyb20gJ2FudGQnXHJcbmltcG9ydCBkcmFmdFRvSHRtbCBmcm9tICdkcmFmdGpzLXRvLWh0bWwnO1xyXG5pbXBvcnQgaHRtbFRvRHJhZnQgZnJvbSAnaHRtbC10by1kcmFmdGpzJztcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFxyXG4gICAge0VNUF9JTlNFUlRfUkVRVUVTVCwgXHJcbiAgICAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvZW1wJzsgXHJcblxyXG5cclxuXHJcbmNvbnN0IE15ZWRpdG9yID0gKCkgPT57XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICAgIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKSk7XHJcblxyXG4gICAgY29uc3QgW2NvbnRlbnQgLCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCBbbWFpblBvc3RUaXRsZSAsIHNldE1haW5Qb3N0VGl0bGVdID0gdXNlU3RhdGUoJycpOyBcclxuICAgIGNvbnN0IHt1c2VySW5mb30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5hdXRoKTtcclxuICAgIGNvbnN0IHtpbWFnZVBhdGhzfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmVtcCk7IFxyXG4gICAgXHJcbiAgICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7IFxyXG5cclxuICAgIC8v7KCc7LacXHJcbiAgICBjb25zdCBlZGl0Q29udGVudCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcblxyXG4gICAgICAgIGlmKCFtYWluUG9zdFRpdGxlIHx8ICFtYWluUG9zdFRpdGxlLnRyaW0oKSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfsoJzrqqnsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC4nKTsgXHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighY29udGVudCB8fCAhY29udGVudC50cmltKCkpe1xyXG4gICAgICAgICAgICBhbGVydCgn6rKM7Iuc6riA7J2EIOyeheugpSDtlbQg7KO87IS47JqULicpOyBcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHsgIFxyXG4gICAgICAgICAgICB0eXBlOkVNUF9JTlNFUlRfUkVRVUVTVCwgXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgY29udGVudCA6IGNvbnRlbnQsIFxyXG4gICAgICAgICAgICAgICAgdGl0bGUgICA6IG1haW5Qb3N0VGl0bGUsIFxyXG4gICAgICAgICAgICAgICAgbmlja05hbWUgOiB1c2VySW5mbywgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSxbY29udGVudF0pOyBcclxuXHJcblxyXG4gICAgLy/qsozsi5zquIAg7KCc66qpIOyeheugpSBcclxuICAgIGNvbnN0IG1haW5Qb3N0VGl0bGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuXHJcbiAgICAgICAgc2V0TWFpblBvc3RUaXRsZShlLnRhcmdldC52YWx1ZSk7IFxyXG5cclxuICAgIH0sW21haW5Qb3N0VGl0bGVdKVxyXG5cclxuXHJcblxyXG4gICAgLy/snbTrr7jsp4Ag7JeF66Gc65OcIOywvSBcclxuICAgIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOyBcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzICwoZik9PntcclxuICAgICAgICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJyxmKTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOmltYWdlRm9ybURhdGEsICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICB9LFtdKTsgXHJcblxyXG5cclxuXHJcbiAgICAvL+ydtOuvuOyngCDsl4XroZzrk5wg7YG066atIFxyXG4gICAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7IFxyXG5cclxuICAgIH0sW2ltYWdlSW5wdXQuY3VycmVudF0pXHJcblxyXG5cclxuXHJcblxyXG4gICAvL+uzuOusuCDsnoXroKVcclxuICAgY29uc3Qgb25FZGl0b3JTdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChlZGl0U3RhdGUpPT57XHJcblxyXG4gICAgc2V0RWRpdG9yU3RhdGUoZWRpdFN0YXRlKTsgXHJcbiAgICBzZXRDb250ZW50KGRyYWZ0VG9IdG1sKGNvbnZlcnRUb1JhdyhlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKSkpOyBcclxuXHJcbiAgIH0sW2VkaXRvclN0YXRlXSk7XHJcblxyXG4gICAgcmV0dXJuICggICAgXHJcbiAgICA8PlxyXG4gICAgPGRpdj5cclxuICAgIHtpbWFnZVBhdGhzICYmIGltYWdlUGF0aHMubWFwKCh2LGkpPT57XHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXt2fSA+XHJcbiAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA5NS8ke3Z9YH0gc3R5bGU9e3t3aWR0aDonMjAlJyxoZWlnaHQ6JzIwcHgnIH19IGFsdD17dn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9IGhpZGRlbiAvPlxyXG4gICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgICA8SW5wdXQgbmFtZT1cIm1haW5Qb3N0VGl0bGVcIiB2YWx1ZT17bWFpblBvc3RUaXRsZX0gb25DaGFuZ2U9e21haW5Qb3N0VGl0bGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwi7KCc66qp7J2EIOyeheugpSDtlbQg7KO87IS47JqULlwiIHNpemU9XCIyNVwiLz5cclxuICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICBlZGl0U3RhdGU9e2VkaXRvclN0YXRlfVxyXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwiZGVtby13cmFwcGVyXCJcclxuICAgICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwiZGVtby1lZGl0b3JcIlxyXG4gICAgICAgICAgIGxvY2FsaXphdGlvbj17e1xyXG4gICAgICAgICAgICAgICBsb2NhbGU6J2tvJywgXHJcbiAgICAgICAgICAgfX1cclxuICAgIFxyXG5cclxuICAgICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXtvbkVkaXRvclN0YXRlQ2hhbmdlfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2VkaXRDb250ZW50fT7snpHshLE8L0J1dHRvbj5cclxuXHJcbiAgICA8Lz5cclxuICAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15ZWRpdG9yOyAiXSwic291cmNlUm9vdCI6IiJ9