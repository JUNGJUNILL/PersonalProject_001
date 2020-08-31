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
    var b = "";
    b = content.concat("<img src=\"http://localhost:3095/pictureTest1598882059100.jpg\" alt=\"undefined\" style=\"height: auto;width: auto\"/>");
    onEditorStateChange(b);
  }, [content]); //본문 입력

  var onEditorStateChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (editState) {
    console.log('editState==>', editState);
    setEditorState(editState);
    console.log(draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent())));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImNyZWF0ZUVtcHR5IiwiZWRpdG9yU3RhdGUiLCJzZXRFZGl0b3JTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwibWFpblBvc3RUaXRsZSIsInNldE1haW5Qb3N0VGl0bGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsInVzZXJJbmZvIiwiZW1wIiwiaW1hZ2VQYXRocyIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJlZGl0Q29udGVudCIsInVzZUNhbGxiYWNrIiwidHJpbSIsImFsZXJ0IiwidHlwZSIsIkVNUF9JTlNFUlRfUkVRVUVTVCIsImRhdGEiLCJ0aXRsZSIsIm5pY2tOYW1lIiwibWFpblBvc3RUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlSW1hZ2VzIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsImZpbGVzIiwiZiIsImFwcGVuZCIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsImluc2VydENvbnRlbnQiLCJiIiwiY29uY2F0Iiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsImVkaXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkcmFmdFRvSHRtbCIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwibWFwIiwidiIsImkiLCJ3aWR0aCIsImhlaWdodCIsImxvY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFRQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxH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LGNBQXZEO0FBQXVFLFVBQU0sTUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpMLEVBYUssTUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBRVcsa0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBYkwsRUFjSyxNQUFDLDBDQUFEO0FBQU8sUUFBSSxFQUFDLGVBQVo7QUFBNEIsU0FBSyxFQUFFbEMsYUFBbkM7QUFBa0QsWUFBUSxFQUFFbUIsbUJBQTVEO0FBQWlGLGVBQVcsRUFBQyw0REFBN0Y7QUFBNkcsUUFBSSxFQUFDLElBQWxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkTCxFQWVLLE1BQUMsMERBQUQ7QUFDRyxhQUFTLEVBQUV2QixXQURkO0FBRUcsb0JBQWdCLEVBQUMsY0FGcEI7QUFHRyxtQkFBZSxFQUFDLGFBSG5CO0FBSUUsZ0JBQVksRUFBRTtBQUNWd0QsWUFBTSxFQUFDO0FBREcsS0FKaEI7QUFTRSx1QkFBbUIsRUFBRVosbUJBVHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmTCxFQTJCUSxNQUFDLDJDQUFEO0FBQVEsV0FBTyxFQUFFOUIsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkEzQlIsQ0FEQTtBQWdDSCxDQTFIRDs7R0FBTXBCLFE7VUFFZUUsdUQsRUFLRVUsdUQsRUFDRUEsdUQ7OztLQVJuQlosUTtBQTRIU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG15RWRpdC5qcy5jMzljYzIzNTkwYzhkYTlkZWFhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFZGl0b3J9IGZyb20gJ3JlYWN0LWRyYWZ0LXd5c2l3eWcnXHJcbmltcG9ydCB7IEVkaXRvclN0YXRlLGNvbnZlcnRUb1JhdyB9IGZyb20gJ2RyYWZ0LWpzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QnV0dG9uLCBJbnB1dH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IGRyYWZ0VG9IdG1sIGZyb20gJ2RyYWZ0anMtdG8taHRtbCc7XHJcbmltcG9ydCBodG1sVG9EcmFmdCBmcm9tICdodG1sLXRvLWRyYWZ0anMnO1xyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgXHJcbiAgICB7RU1QX0lOU0VSVF9SRVFVRVNULCBcclxuICAgICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9lbXAnOyBcclxuXHJcblxyXG5cclxuY29uc3QgTXllZGl0b3IgPSAoKSA9PntcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gICAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZShFZGl0b3JTdGF0ZS5jcmVhdGVFbXB0eSgpKTtcclxuXHJcbiAgICBjb25zdCBbY29udGVudCAsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpOyBcclxuICAgIGNvbnN0IFttYWluUG9zdFRpdGxlICwgc2V0TWFpblBvc3RUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7IFxyXG4gICAgY29uc3Qge3VzZXJJbmZvfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmF1dGgpO1xyXG4gICAgY29uc3Qge2ltYWdlUGF0aHN9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuZW1wKTsgXHJcbiAgICBcclxuICAgIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTsgXHJcblxyXG4gICAgLy/soJzstpxcclxuICAgIGNvbnN0IGVkaXRDb250ZW50ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuXHJcbiAgICAgICAgaWYoIW1haW5Qb3N0VGl0bGUgfHwgIW1haW5Qb3N0VGl0bGUudHJpbSgpKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+ygnOuqqeydhCDsnoXroKXtlbQg7KO87IS47JqULicpOyBcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFjb250ZW50IHx8ICFjb250ZW50LnRyaW0oKSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6F66ClIO2VtCDso7zshLjsmpQuJyk7IFxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goeyAgXHJcbiAgICAgICAgICAgIHR5cGU6RU1QX0lOU0VSVF9SRVFVRVNULCBcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50IDogY29udGVudCwgXHJcbiAgICAgICAgICAgICAgICB0aXRsZSAgIDogbWFpblBvc3RUaXRsZSwgXHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZSA6IHVzZXJJbmZvLCBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFtjb250ZW50XSk7IFxyXG5cclxuXHJcbiAgICAvL+qyjOyLnOq4gCDsoJzrqqkg7J6F66ClIFxyXG4gICAgY29uc3QgbWFpblBvc3RUaXRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG5cclxuICAgICAgICBzZXRNYWluUG9zdFRpdGxlKGUudGFyZ2V0LnZhbHVlKTsgXHJcblxyXG4gICAgfSxbbWFpblBvc3RUaXRsZV0pXHJcblxyXG5cclxuXHJcbiAgICAvL+ydtOuvuOyngCDsl4XroZzrk5wg7LC9IFxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7IFxyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMgLChmKT0+e1xyXG4gICAgICAgICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLGYpOyBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOlVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6aW1hZ2VGb3JtRGF0YSwgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH0sW10pOyBcclxuXHJcblxyXG5cclxuICAgIC8v7J2066+47KeAIOyXheuhnOuTnCDtgbTrpq0gXHJcbiAgICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTsgXHJcblxyXG4gICAgfSxbaW1hZ2VJbnB1dC5jdXJyZW50XSk7IFxyXG5cclxuXHJcbiAgICAvL+ydtOuvuOyngCDrs7jrrLgg7IK97J6FIFxyXG4gICAgY29uc3QgaW5zZXJ0Q29udGVudCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgbGV0IGIgPSBcIlwiOyBcclxuICAgICAgIGIgPSAgY29udGVudC5jb25jYXQoYDxpbWcgc3JjPVwiaHR0cDovL2xvY2FsaG9zdDozMDk1L3BpY3R1cmVUZXN0MTU5ODg4MjA1OTEwMC5qcGdcIiBhbHQ9XCJ1bmRlZmluZWRcIiBzdHlsZT1cImhlaWdodDogYXV0bzt3aWR0aDogYXV0b1wiLz5gKVxyXG4gICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZShiKTsgXHJcbiAgICB9LFtjb250ZW50XSk7IFxyXG5cclxuXHJcblxyXG5cclxuICAgLy/rs7jrrLgg7J6F66ClXHJcbiAgIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZWRpdFN0YXRlKT0+e1xyXG4gICAgY29uc29sZS5sb2coJ2VkaXRTdGF0ZT09PicsIGVkaXRTdGF0ZSk7IFxyXG4gICAgc2V0RWRpdG9yU3RhdGUoZWRpdFN0YXRlKTsgIFxyXG4gICAgY29uc29sZS5sb2coZHJhZnRUb0h0bWwoY29udmVydFRvUmF3KGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpKSk7IFxyXG4gICAgc2V0Q29udGVudChkcmFmdFRvSHRtbChjb252ZXJ0VG9SYXcoZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSkpKTsgXHJcblxyXG4gICB9LFtlZGl0b3JTdGF0ZV0pO1xyXG5cclxuICAgIHJldHVybiAoICAgIFxyXG4gICAgPD5cclxuICAgIDxkaXY+XHJcbiAgICB7aW1hZ2VQYXRocyAmJiBpbWFnZVBhdGhzLm1hcCgodixpKT0+e1xyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGtleT17dn0gPlxyXG4gICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwOTUvJHt2fWB9IHN0eWxlPXt7d2lkdGg6JzIwJScsaGVpZ2h0OicyMCUnIH19IGFsdD17dn0gLz5cclxuICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aW5zZXJ0Q29udGVudH0+67O466y47IK97J6FPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSBoaWRkZW4gLz5cclxuICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICAgPElucHV0IG5hbWU9XCJtYWluUG9zdFRpdGxlXCIgdmFsdWU9e21haW5Qb3N0VGl0bGV9IG9uQ2hhbmdlPXttYWluUG9zdFRpdGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIuygnOuqqeydhCDsnoXroKUg7ZW0IOyjvOyEuOyalC5cIiBzaXplPVwiMjVcIi8+XHJcbiAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgZWRpdFN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cImRlbW8td3JhcHBlclwiXHJcbiAgICAgICAgICAgIGVkaXRvckNsYXNzTmFtZT1cImRlbW8tZWRpdG9yXCJcclxuICAgICAgICAgICBsb2NhbGl6YXRpb249e3tcclxuICAgICAgICAgICAgICAgbG9jYWxlOidrbycsIFxyXG4gICAgICAgICAgIH19XHJcbiAgICBcclxuXHJcbiAgICAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17b25FZGl0b3JTdGF0ZUNoYW5nZX1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlZGl0Q29udGVudH0+7J6R7ISxPC9CdXR0b24+XHJcblxyXG4gICAgPC8+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeWVkaXRvcjsgIl0sInNvdXJjZVJvb3QiOiIifQ==