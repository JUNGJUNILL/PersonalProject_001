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
    console.log(content);
    setContent(content);
  }, [content]); //본문 입력

  var onEditorStateChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (editState) {
    setEditorState(editState);
    setContent(draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent())));
  }, [editorState]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, imagePaths && imagePaths.map(function (v, i) {
    return __jsx("div", {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
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
        lineNumber: 114,
        columnNumber: 14
      }
    }), __jsx("button", {
      onClick: insertContent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
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
      lineNumber: 120,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
      lineNumber: 122,
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
      lineNumber: 123,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: editContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImNyZWF0ZUVtcHR5IiwiZWRpdG9yU3RhdGUiLCJzZXRFZGl0b3JTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwibWFpblBvc3RUaXRsZSIsInNldE1haW5Qb3N0VGl0bGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsInVzZXJJbmZvIiwiZW1wIiwiaW1hZ2VQYXRocyIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJlZGl0Q29udGVudCIsInVzZUNhbGxiYWNrIiwidHJpbSIsImFsZXJ0IiwidHlwZSIsIkVNUF9JTlNFUlRfUkVRVUVTVCIsImRhdGEiLCJ0aXRsZSIsIm5pY2tOYW1lIiwibWFpblBvc3RUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlSW1hZ2VzIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsImZpbGVzIiwiZiIsImFwcGVuZCIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsImluc2VydENvbnRlbnQiLCJjb25jYXQiLCJjb25zb2xlIiwibG9nIiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsImVkaXRTdGF0ZSIsImRyYWZ0VG9IdG1sIiwiY29udmVydFRvUmF3IiwiZ2V0Q3VycmVudENvbnRlbnQiLCJtYXAiLCJ2IiwiaSIsIndpZHRoIiwiaGVpZ2h0IiwibG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVFBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUs7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QUMsMENBQUQ7QUFBTyxRQUFJLEVBQUMsZUFBWjtBQUE0QixTQUFLLEVBQUVsQyxhQUFuQztBQUFrRCxZQUFRLEVBQUVtQixtQkFBNUQ7QUFBaUYsZUFBVyxFQUFDLDREQUE3RjtBQUE2RyxRQUFJLEVBQUMsSUFBbEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRMLEVBZUssTUFBQywwREFBRDtBQUNHLGFBQVMsRUFBRXZCLFdBRGQ7QUFFRyxvQkFBZ0IsRUFBQyxjQUZwQjtBQUdHLG1CQUFlLEVBQUMsYUFIbkI7QUFJRSxnQkFBWSxFQUFFO0FBQ1Z1RCxZQUFNLEVBQUM7QUFERyxLQUpoQjtBQVNFLHVCQUFtQixFQUFFVixtQkFUdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZMLEVBMkJRLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUUvQixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTNCUixDQURBO0FBZ0NILENBMUhEOztHQUFNcEIsUTtVQUVlRSx1RCxFQUtFVSx1RCxFQUNFQSx1RDs7O0tBUm5CWixRO0FBNEhTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbXlFZGl0LmpzLjBmY2Q3Y2ZiM2VjZTllNWVhMWNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VkaXRvcn0gZnJvbSAncmVhY3QtZHJhZnQtd3lzaXd5ZydcclxuaW1wb3J0IHsgRWRpdG9yU3RhdGUsY29udmVydFRvUmF3IH0gZnJvbSAnZHJhZnQtanMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b24sIElucHV0fSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgZHJhZnRUb0h0bWwgZnJvbSAnZHJhZnRqcy10by1odG1sJztcclxuaW1wb3J0IGh0bWxUb0RyYWZ0IGZyb20gJ2h0bWwtdG8tZHJhZnRqcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBcclxuICAgIHtFTVBfSU5TRVJUX1JFUVVFU1QsIFxyXG4gICAgIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2VtcCc7IFxyXG5cclxuXHJcblxyXG5jb25zdCBNeWVkaXRvciA9ICgpID0+e1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTsgXHJcbiAgICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCkpO1xyXG5cclxuICAgIGNvbnN0IFtjb250ZW50ICwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7IFxyXG4gICAgY29uc3QgW21haW5Qb3N0VGl0bGUgLCBzZXRNYWluUG9zdFRpdGxlXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCB7dXNlckluZm99ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuYXV0aCk7XHJcbiAgICBjb25zdCB7aW1hZ2VQYXRoc30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5lbXApOyBcclxuICAgIFxyXG4gICAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpOyBcclxuXHJcbiAgICAvL+ygnOy2nFxyXG4gICAgY29uc3QgZWRpdENvbnRlbnQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG5cclxuICAgICAgICBpZighbWFpblBvc3RUaXRsZSB8fCAhbWFpblBvc3RUaXRsZS50cmltKCkpe1xyXG4gICAgICAgICAgICBhbGVydCgn7KCc66qp7J2EIOyeheugpe2VtCDso7zshLjsmpQuJyk7IFxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIWNvbnRlbnQgfHwgIWNvbnRlbnQudHJpbSgpKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+qyjOyLnOq4gOydhCDsnoXroKUg7ZW0IOyjvOyEuOyalC4nKTsgXHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7ICBcclxuICAgICAgICAgICAgdHlwZTpFTVBfSU5TRVJUX1JFUVVFU1QsIFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBjb250ZW50LCBcclxuICAgICAgICAgICAgICAgIHRpdGxlICAgOiBtYWluUG9zdFRpdGxlLCBcclxuICAgICAgICAgICAgICAgIG5pY2tOYW1lIDogdXNlckluZm8sIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sW2NvbnRlbnRdKTsgXHJcblxyXG5cclxuICAgIC8v6rKM7Iuc6riAIOygnOuqqSDsnoXroKUgXHJcbiAgICBjb25zdCBtYWluUG9zdFRpdGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcblxyXG4gICAgICAgIHNldE1haW5Qb3N0VGl0bGUoZS50YXJnZXQudmFsdWUpOyBcclxuXHJcbiAgICB9LFttYWluUG9zdFRpdGxlXSlcclxuXHJcblxyXG5cclxuICAgIC8v7J2066+47KeAIOyXheuhnOuTnCDssL0gXHJcbiAgICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsgXHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcyAsKGYpPT57XHJcbiAgICAgICAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsZik7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6VVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTppbWFnZUZvcm1EYXRhLCAgICAgICAgICAgICBcclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgfSxbXSk7IFxyXG5cclxuXHJcblxyXG4gICAgLy/snbTrr7jsp4Ag7JeF66Gc65OcIO2BtOumrSBcclxuICAgIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpOyBcclxuXHJcbiAgICB9LFtpbWFnZUlucHV0LmN1cnJlbnRdKTsgXHJcblxyXG5cclxuICAgIC8v7J2066+47KeAIOuzuOusuCDsgr3snoUgXHJcbiAgICBjb25zdCBpbnNlcnRDb250ZW50ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuXHJcbiAgICAgICAgY29udGVudC5jb25jYXQoYDxpbWcgc3JjPVwiaHR0cDovL2xvY2FsaG9zdDozMDk1L3BpY3R1cmVUZXN0MTU5ODg4MjA1OTEwMC5qcGdcIiBhbHQ9XCJ1bmRlZmluZWRcIiBzdHlsZT1cImhlaWdodDogYXV0bzt3aWR0aDogYXV0b1wiLz5gKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpOyBcclxuICAgICAgICBzZXRDb250ZW50KGNvbnRlbnQpOyBcclxuICAgIH0sW2NvbnRlbnRdKTsgXHJcblxyXG5cclxuXHJcblxyXG4gICAvL+uzuOusuCDsnoXroKVcclxuICAgY29uc3Qgb25FZGl0b3JTdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChlZGl0U3RhdGUpPT57XHJcblxyXG4gICAgc2V0RWRpdG9yU3RhdGUoZWRpdFN0YXRlKTsgXHJcbiAgICBzZXRDb250ZW50KGRyYWZ0VG9IdG1sKGNvbnZlcnRUb1JhdyhlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKSkpOyBcclxuXHJcbiAgIH0sW2VkaXRvclN0YXRlXSk7XHJcblxyXG4gICAgcmV0dXJuICggICAgXHJcbiAgICA8PlxyXG4gICAgPGRpdj5cclxuICAgIHtpbWFnZVBhdGhzICYmIGltYWdlUGF0aHMubWFwKCh2LGkpPT57XHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXt2fSA+XHJcbiAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA5NS8ke3Z9YH0gc3R5bGU9e3t3aWR0aDonMjAlJyxoZWlnaHQ6JzIwJScgfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbnNlcnRDb250ZW50fT7rs7jrrLjsgr3snoU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9IGhpZGRlbiAvPlxyXG4gICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgICA8SW5wdXQgbmFtZT1cIm1haW5Qb3N0VGl0bGVcIiB2YWx1ZT17bWFpblBvc3RUaXRsZX0gb25DaGFuZ2U9e21haW5Qb3N0VGl0bGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwi7KCc66qp7J2EIOyeheugpSDtlbQg7KO87IS47JqULlwiIHNpemU9XCIyNVwiLz5cclxuICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICBlZGl0U3RhdGU9e2VkaXRvclN0YXRlfVxyXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwiZGVtby13cmFwcGVyXCJcclxuICAgICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwiZGVtby1lZGl0b3JcIlxyXG4gICAgICAgICAgIGxvY2FsaXphdGlvbj17e1xyXG4gICAgICAgICAgICAgICBsb2NhbGU6J2tvJywgXHJcbiAgICAgICAgICAgfX1cclxuICAgIFxyXG5cclxuICAgICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXtvbkVkaXRvclN0YXRlQ2hhbmdlfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2VkaXRDb250ZW50fT7snpHshLE8L0J1dHRvbj5cclxuXHJcbiAgICA8Lz5cclxuICAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15ZWRpdG9yOyAiXSwic291cmNlUm9vdCI6IiJ9