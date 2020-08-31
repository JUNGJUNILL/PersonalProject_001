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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImNyZWF0ZUVtcHR5IiwiZWRpdG9yU3RhdGUiLCJzZXRFZGl0b3JTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwibWFpblBvc3RUaXRsZSIsInNldE1haW5Qb3N0VGl0bGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsInVzZXJJbmZvIiwiZW1wIiwiaW1hZ2VQYXRocyIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJlZGl0Q29udGVudCIsInVzZUNhbGxiYWNrIiwidHJpbSIsImFsZXJ0IiwidHlwZSIsIkVNUF9JTlNFUlRfUkVRVUVTVCIsImRhdGEiLCJ0aXRsZSIsIm5pY2tOYW1lIiwibWFpblBvc3RUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlSW1hZ2VzIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsImZpbGVzIiwiZiIsImFwcGVuZCIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJlZGl0U3RhdGUiLCJkcmFmdFRvSHRtbCIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwibWFwIiwidiIsImkiLCJ3aWR0aCIsImxvY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFRQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFLO0FBQUE7O0FBRWxCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRmtCLGtC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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkTCxFQTBCUSxNQUFDLDJDQUFEO0FBQVEsV0FBTyxFQUFFM0IsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkExQlIsQ0FEQTtBQStCSCxDQWhIRDs7R0FBTXBCLFE7VUFFZUUsdUQsRUFLRVUsdUQsRUFDRUEsdUQ7OztLQVJuQlosUTtBQWtIU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG15RWRpdC5qcy5iMGZjYjEyZWVkNWE1NmJkMDIyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFZGl0b3J9IGZyb20gJ3JlYWN0LWRyYWZ0LXd5c2l3eWcnXHJcbmltcG9ydCB7IEVkaXRvclN0YXRlLGNvbnZlcnRUb1JhdyB9IGZyb20gJ2RyYWZ0LWpzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QnV0dG9uLCBJbnB1dH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IGRyYWZ0VG9IdG1sIGZyb20gJ2RyYWZ0anMtdG8taHRtbCc7XHJcbmltcG9ydCBodG1sVG9EcmFmdCBmcm9tICdodG1sLXRvLWRyYWZ0anMnO1xyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgXHJcbiAgICB7RU1QX0lOU0VSVF9SRVFVRVNULCBcclxuICAgICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9lbXAnOyBcclxuXHJcblxyXG5cclxuY29uc3QgTXllZGl0b3IgPSAoKSA9PntcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gICAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZShFZGl0b3JTdGF0ZS5jcmVhdGVFbXB0eSgpKTtcclxuXHJcbiAgICBjb25zdCBbY29udGVudCAsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpOyBcclxuICAgIGNvbnN0IFttYWluUG9zdFRpdGxlICwgc2V0TWFpblBvc3RUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7IFxyXG4gICAgY29uc3Qge3VzZXJJbmZvfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmF1dGgpO1xyXG4gICAgY29uc3Qge2ltYWdlUGF0aHN9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuZW1wKTsgXHJcbiAgICBcclxuICAgIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTsgXHJcblxyXG4gICAgLy/soJzstpxcclxuICAgIGNvbnN0IGVkaXRDb250ZW50ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuXHJcbiAgICAgICAgaWYoIW1haW5Qb3N0VGl0bGUgfHwgIW1haW5Qb3N0VGl0bGUudHJpbSgpKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+ygnOuqqeydhCDsnoXroKXtlbQg7KO87IS47JqULicpOyBcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFjb250ZW50IHx8ICFjb250ZW50LnRyaW0oKSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6F66ClIO2VtCDso7zshLjsmpQuJyk7IFxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goeyAgXHJcbiAgICAgICAgICAgIHR5cGU6RU1QX0lOU0VSVF9SRVFVRVNULCBcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50IDogY29udGVudCwgXHJcbiAgICAgICAgICAgICAgICB0aXRsZSAgIDogbWFpblBvc3RUaXRsZSwgXHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZSA6IHVzZXJJbmZvLCBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFtjb250ZW50XSk7IFxyXG5cclxuXHJcbiAgICAvL+qyjOyLnOq4gCDsoJzrqqkg7J6F66ClIFxyXG4gICAgY29uc3QgbWFpblBvc3RUaXRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG5cclxuICAgICAgICBzZXRNYWluUG9zdFRpdGxlKGUudGFyZ2V0LnZhbHVlKTsgXHJcblxyXG4gICAgfSxbbWFpblBvc3RUaXRsZV0pXHJcblxyXG5cclxuXHJcbiAgICAvL+ydtOuvuOyngCDsl4XroZzrk5wg7LC9IFxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7IFxyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMgLChmKT0+e1xyXG4gICAgICAgICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLGYpOyBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOlVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6aW1hZ2VGb3JtRGF0YSwgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH0sW10pOyBcclxuXHJcblxyXG5cclxuICAgIC8v7J2066+47KeAIOyXheuhnOuTnCDtgbTrpq0gXHJcbiAgICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTsgXHJcblxyXG4gICAgfSxbaW1hZ2VJbnB1dC5jdXJyZW50XSlcclxuXHJcblxyXG5cclxuXHJcbiAgIC8v67O466y4IOyeheugpVxyXG4gICBjb25zdCBvbkVkaXRvclN0YXRlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGVkaXRTdGF0ZSk9PntcclxuXHJcbiAgICBzZXRFZGl0b3JTdGF0ZShlZGl0U3RhdGUpOyBcclxuICAgIHNldENvbnRlbnQoZHJhZnRUb0h0bWwoY29udmVydFRvUmF3KGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpKSk7IFxyXG5cclxuICAgfSxbZWRpdG9yU3RhdGVdKTtcclxuXHJcbiAgICByZXR1cm4gKCAgICBcclxuICAgIDw+XHJcbiAgICA8ZGl2PlxyXG4gICAge2ltYWdlUGF0aHMgJiYgaW1hZ2VQYXRocy5tYXAoKHYsaSk9PntcclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPGRpdiBrZXk9e3Z9ID5cclxuICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDk1LyR7dn1gfSBzdHlsZT17e3dpZHRoOicyMDBweCcgfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gaGlkZGVuIC8+XHJcbiAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgIDxJbnB1dCBuYW1lPVwibWFpblBvc3RUaXRsZVwiIHZhbHVlPXttYWluUG9zdFRpdGxlfSBvbkNoYW5nZT17bWFpblBvc3RUaXRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCLsoJzrqqnsnYQg7J6F66ClIO2VtCDso7zshLjsmpQuXCIgc2l6ZT1cIjI1XCIvPlxyXG4gICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgIGVkaXRTdGF0ZT17ZWRpdG9yU3RhdGV9XHJcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJkZW1vLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICBlZGl0b3JDbGFzc05hbWU9XCJkZW1vLWVkaXRvclwiXHJcbiAgICAgICAgICAgbG9jYWxpemF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgIGxvY2FsZTona28nLCBcclxuICAgICAgICAgICB9fVxyXG4gICAgXHJcblxyXG4gICAgICAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9e29uRWRpdG9yU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZWRpdENvbnRlbnR9PuyekeyEsTwvQnV0dG9uPlxyXG5cclxuICAgIDwvPlxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXllZGl0b3I7ICJdLCJzb3VyY2VSb290IjoiIn0=