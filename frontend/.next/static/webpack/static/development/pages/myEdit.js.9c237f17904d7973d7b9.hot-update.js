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
  }, [imageInput.current]); //이미지 본문 삽입 

  var insertContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    content.concat("<img src=\"http://localhost:3095/pictureTest1598882059100.jpg\" alt=\"undefined\" style=\"height: auto;width: auto\"/>");
    setContent(content);
  }, []); //본문 입력

  var onEditorStateChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (editState) {
    setEditorState(editState);
    setContent(draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent())));
  }, [editorState]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, imagePaths && imagePaths.map(function (v, i) {
    return __jsx("div", {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "http://localhost:3095/".concat(v),
      style: {
        width: '20%',
        height: '20%'
      },
      alt: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 14
      }
    }), __jsx("button", {
      onClick: insertContent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 14
      }
    }, "\uBCF8\uBB38\uC0BD\uC785"));
  })), __jsx("input", {
    type: "file",
    multiple: true,
    ref: imageInput,
    onChange: onChangeImages,
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
      lineNumber: 121,
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
      lineNumber: 122,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: editContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, "\uC791\uC131"));
};

_s(Myeditor, "ymUS50bCp+5b4i4LBYr82+JNC8s=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImNyZWF0ZUVtcHR5IiwiZWRpdG9yU3RhdGUiLCJzZXRFZGl0b3JTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwibWFpblBvc3RUaXRsZSIsInNldE1haW5Qb3N0VGl0bGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsInVzZXJJbmZvIiwiZW1wIiwiaW1hZ2VQYXRocyIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJlZGl0Q29udGVudCIsInVzZUNhbGxiYWNrIiwidHJpbSIsImFsZXJ0IiwidHlwZSIsIkVNUF9JTlNFUlRfUkVRVUVTVCIsImRhdGEiLCJ0aXRsZSIsIm5pY2tOYW1lIiwibWFpblBvc3RUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlSW1hZ2VzIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsImZpbGVzIiwiZiIsImFwcGVuZCIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsImluc2VydENvbnRlbnQiLCJjb25jYXQiLCJvbkVkaXRvclN0YXRlQ2hhbmdlIiwiZWRpdFN0YXRlIiwiZHJhZnRUb0h0bWwiLCJjb252ZXJ0VG9SYXciLCJnZXRDdXJyZW50Q29udGVudCIsIm1hcCIsInYiLCJpIiwid2lkdGgiLCJoZWlnaHQiLCJsb2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBUUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBSztBQUFBOztBQUVsQixNQUFN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QUFRLEVBQUVtQixtQkFBNUQ7QUFBaUYsZUFBVyxFQUFDLDREQUE3RjtBQUE2RyxRQUFJLEVBQUMsSUFBbEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRMLEVBZUssTUFBQywwREFBRDtBQUNHLGFBQVMsRUFBRXZCLFdBRGQ7QUFFRyxvQkFBZ0IsRUFBQyxjQUZwQjtBQUdHLG1CQUFlLEVBQUMsYUFIbkI7QUFJRSxnQkFBWSxFQUFFO0FBQ1ZxRCxZQUFNLEVBQUM7QUFERyxLQUpoQjtBQVNFLHVCQUFtQixFQUFFVixtQkFUdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZMLEVBMkJRLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUU3QixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTNCUixDQURBO0FBZ0NILENBekhEOztHQUFNcEIsUTtVQUVlRSx1RCxFQUtFVSx1RCxFQUNFQSx1RDs7O0tBUm5CWixRO0FBMkhTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbXlFZGl0LmpzLjljMjM3ZjE3OTA0ZDc5NzNkN2I5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VkaXRvcn0gZnJvbSAncmVhY3QtZHJhZnQtd3lzaXd5ZydcclxuaW1wb3J0IHsgRWRpdG9yU3RhdGUsY29udmVydFRvUmF3IH0gZnJvbSAnZHJhZnQtanMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b24sIElucHV0fSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgZHJhZnRUb0h0bWwgZnJvbSAnZHJhZnRqcy10by1odG1sJztcclxuaW1wb3J0IGh0bWxUb0RyYWZ0IGZyb20gJ2h0bWwtdG8tZHJhZnRqcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBcclxuICAgIHtFTVBfSU5TRVJUX1JFUVVFU1QsIFxyXG4gICAgIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2VtcCc7IFxyXG5cclxuXHJcblxyXG5jb25zdCBNeWVkaXRvciA9ICgpID0+e1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTsgXHJcbiAgICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCkpO1xyXG5cclxuICAgIGNvbnN0IFtjb250ZW50ICwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7IFxyXG4gICAgY29uc3QgW21haW5Qb3N0VGl0bGUgLCBzZXRNYWluUG9zdFRpdGxlXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCB7dXNlckluZm99ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuYXV0aCk7XHJcbiAgICBjb25zdCB7aW1hZ2VQYXRoc30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5lbXApOyBcclxuICAgIFxyXG4gICAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpOyBcclxuXHJcbiAgICAvL+ygnOy2nFxyXG4gICAgY29uc3QgZWRpdENvbnRlbnQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG5cclxuICAgICAgICBpZighbWFpblBvc3RUaXRsZSB8fCAhbWFpblBvc3RUaXRsZS50cmltKCkpe1xyXG4gICAgICAgICAgICBhbGVydCgn7KCc66qp7J2EIOyeheugpe2VtCDso7zshLjsmpQuJyk7IFxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIWNvbnRlbnQgfHwgIWNvbnRlbnQudHJpbSgpKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+qyjOyLnOq4gOydhCDsnoXroKUg7ZW0IOyjvOyEuOyalC4nKTsgXHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7ICBcclxuICAgICAgICAgICAgdHlwZTpFTVBfSU5TRVJUX1JFUVVFU1QsIFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBjb250ZW50LCBcclxuICAgICAgICAgICAgICAgIHRpdGxlICAgOiBtYWluUG9zdFRpdGxlLCBcclxuICAgICAgICAgICAgICAgIG5pY2tOYW1lIDogdXNlckluZm8sIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sW2NvbnRlbnRdKTsgXHJcblxyXG5cclxuICAgIC8v6rKM7Iuc6riAIOygnOuqqSDsnoXroKUgXHJcbiAgICBjb25zdCBtYWluUG9zdFRpdGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcblxyXG4gICAgICAgIHNldE1haW5Qb3N0VGl0bGUoZS50YXJnZXQudmFsdWUpOyBcclxuXHJcbiAgICB9LFttYWluUG9zdFRpdGxlXSlcclxuXHJcblxyXG5cclxuICAgIC8v7J2066+47KeAIOyXheuhnOuTnCDssL0gXHJcbiAgICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsgXHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcyAsKGYpPT57XHJcbiAgICAgICAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsZik7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6VVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTppbWFnZUZvcm1EYXRhLCAgICAgICAgICAgICBcclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgfSxbXSk7IFxyXG5cclxuXHJcblxyXG4gICAgLy/snbTrr7jsp4Ag7JeF66Gc65OcIO2BtOumrSBcclxuICAgIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpOyBcclxuXHJcbiAgICB9LFtpbWFnZUlucHV0LmN1cnJlbnRdKTsgXHJcblxyXG5cclxuICAgIC8v7J2066+47KeAIOuzuOusuCDsgr3snoUgXHJcbiAgICBjb25zdCBpbnNlcnRDb250ZW50ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuXHJcbiAgICAgICAgY29udGVudC5jb25jYXQoYDxpbWcgc3JjPVwiaHR0cDovL2xvY2FsaG9zdDozMDk1L3BpY3R1cmVUZXN0MTU5ODg4MjA1OTEwMC5qcGdcIiBhbHQ9XCJ1bmRlZmluZWRcIiBzdHlsZT1cImhlaWdodDogYXV0bzt3aWR0aDogYXV0b1wiLz5gKVxyXG4gICAgICAgIHNldENvbnRlbnQoY29udGVudCk7IFxyXG4gICAgfSxbXSk7IFxyXG5cclxuXHJcblxyXG5cclxuICAgLy/rs7jrrLgg7J6F66ClXHJcbiAgIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZWRpdFN0YXRlKT0+e1xyXG5cclxuICAgIHNldEVkaXRvclN0YXRlKGVkaXRTdGF0ZSk7IFxyXG4gICAgc2V0Q29udGVudChkcmFmdFRvSHRtbChjb252ZXJ0VG9SYXcoZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSkpKTsgXHJcblxyXG4gICB9LFtlZGl0b3JTdGF0ZV0pO1xyXG5cclxuICAgIHJldHVybiAoICAgIFxyXG4gICAgPD5cclxuICAgIDxkaXY+XHJcbiAgICB7aW1hZ2VQYXRocyAmJiBpbWFnZVBhdGhzLm1hcCgodixpKT0+e1xyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGtleT17dn0gPlxyXG4gICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwOTUvJHt2fWB9IHN0eWxlPXt7d2lkdGg6JzIwJScsaGVpZ2h0OicyMCUnIH19IGFsdD17dn0gLz5cclxuICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aW5zZXJ0Q29udGVudH0+67O466y47IK97J6FPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSBoaWRkZW4gLz5cclxuICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICAgPElucHV0IG5hbWU9XCJtYWluUG9zdFRpdGxlXCIgdmFsdWU9e21haW5Qb3N0VGl0bGV9IG9uQ2hhbmdlPXttYWluUG9zdFRpdGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIuygnOuqqeydhCDsnoXroKUg7ZW0IOyjvOyEuOyalC5cIiBzaXplPVwiMjVcIi8+XHJcbiAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgZWRpdFN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cImRlbW8td3JhcHBlclwiXHJcbiAgICAgICAgICAgIGVkaXRvckNsYXNzTmFtZT1cImRlbW8tZWRpdG9yXCJcclxuICAgICAgICAgICBsb2NhbGl6YXRpb249e3tcclxuICAgICAgICAgICAgICAgbG9jYWxlOidrbycsIFxyXG4gICAgICAgICAgIH19XHJcbiAgICBcclxuXHJcbiAgICAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17b25FZGl0b3JTdGF0ZUNoYW5nZX1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlZGl0Q29udGVudH0+7J6R7ISxPC9CdXR0b24+XHJcblxyXG4gICAgPC8+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeWVkaXRvcjsgIl0sInNvdXJjZVJvb3QiOiIifQ==