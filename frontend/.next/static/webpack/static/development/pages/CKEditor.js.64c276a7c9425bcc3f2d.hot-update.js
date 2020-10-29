webpackHotUpdate("static\\development\\pages\\CKEditor.js",{

/***/ "./pages/CKEditor.js":
/*!***************************!*\
  !*** ./pages/CKEditor.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_emp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/emp */ "./reducers/emp.js");
var _this = undefined,
    _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\CKEditor.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Editor = function Editor() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.emp;
  }),
      imagePaths = _useSelector.imagePaths;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth;
  }),
      userInfo = _useSelector2.userInfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState[0],
      setContent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      title = _useState2[0],
      setTtile = _useState2[1];

  var blank_pattern = /^\s+|\s+&/g;
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

  var testSummit = function testSummit() {
    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_5__["TEST_REQUEST"]
    });
  }; //게시글 제출 


  var contentSummit = function contentSummit() {
    if (title.length === 0 || title.replace(blank_pattern, '') === "") {
      ref.current.focus();
      alert('제목을 입력 해 주세요');
      return;
    }

    if (content.length === 0 || content.replace(blank_pattern, '') === "") {
      alert('게시글을 작성해 주세요');
      return;
    }

    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_5__["EMP_INSERT_REQUEST"],
      data: {
        content: encodeURI(content),
        title: encodeURI(title),
        userNickName: encodeURI(userInfo)
      }
    });
  }; //제목 입력


  var onChangeTtitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setTtile(e.target.value);
  }, [title]); //이미지 업로드 창 

  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var imageFormData = new FormData();
    Array.prototype.forEach.call(e.target.files, function (f) {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData
    });
  }, []); //이미지 업로드 클릭 

  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  return (//<div className="demo-editor" >         
    __jsx("div", {
      style: {
        height: "400px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, "\uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD574 \uBCF4\uC138\uC694!"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",
      ref: ref,
      onChange: onChangeTtitle,
      style: {
        marginBottom: '1%'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }), __jsx(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default.a,
      config: {
        ckfinder: {
          uploadUrl: "http://captainryan.gonetis.com:3095/api/emp/ckeditor?postFlag=1001&user=".concat(userInfo),
          options: {}
        },
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'imageUpload'],
        placeholder: "글을 입력해보세요!"
      } //data="<p>Hello from CKEditor 5!</p>"
      //최소 실행시 보여줄 문구 
      ,
      onInit: function onInit(editor) {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor);
      },
      onChange: function onChange(event, editor) {
        var data = editor.getData();
        setContent(data);
        console.log({
          event: event,
          editor: editor,
          data: data
        });
      },
      onBlur: function onBlur(event, editor) {
        console.log('Blur.', editor);
      },
      onFocus: function onFocus(event, editor) {
        console.log('Focus.', editor);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "primary",
      onClick: contentSummit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }
    }, "\uC791\uC131"))
  );
};

_s(Editor, "n0Bu4pc9QXhpvfuYXYv6qw304p8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Editor;
/* harmony default export */ __webpack_exports__["default"] = (Editor);

var _c;

$RefreshReg$(_c, "Editor");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9DS0VkaXRvci5qcyJdLCJuYW1lcyI6WyJFZGl0b3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImVtcCIsImltYWdlUGF0aHMiLCJhdXRoIiwidXNlckluZm8iLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidGl0bGUiLCJzZXRUdGlsZSIsImJsYW5rX3BhdHRlcm4iLCJpbWFnZUlucHV0IiwidXNlUmVmIiwicmVmIiwiY3JlYXRlUmVmIiwidGVzdFN1bW1pdCIsInR5cGUiLCJURVNUX1JFUVVFU1QiLCJjb250ZW50U3VtbWl0IiwibGVuZ3RoIiwicmVwbGFjZSIsImN1cnJlbnQiLCJmb2N1cyIsImFsZXJ0IiwiRU1QX0lOU0VSVF9SRVFVRVNUIiwiZGF0YSIsImVuY29kZVVSSSIsInVzZXJOaWNrTmFtZSIsIm9uQ2hhbmdlVHRpdGxlIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZUltYWdlcyIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJmaWxlcyIsImYiLCJhcHBlbmQiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjbGljayIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsIkNsYXNzaWNFZGl0b3IiLCJja2ZpbmRlciIsInVwbG9hZFVybCIsIm9wdGlvbnMiLCJ0b29sYmFyIiwicGxhY2Vob2xkZXIiLCJlZGl0b3IiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJnZXREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFRQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFJO0FBQUE7O0FBRWYsTUFBTUMsUUFBUSxHQUFH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QTtBQUFqQixTQUFiO0FBQ0gsT0EvQkw7QUFnQ0ksWUFBTSxFQUFHLGdCQUFFZ0MsS0FBRixFQUFTSCxNQUFULEVBQXFCO0FBQzFCQyxlQUFPLENBQUNDLEdBQVIsQ0FBYSxPQUFiLEVBQXNCRixNQUF0QjtBQUNILE9BbENMO0FBbUNJLGFBQU8sRUFBRyxpQkFBRUcsS0FBRixFQUFTSCxNQUFULEVBQXFCO0FBQzNCQyxlQUFPLENBQUNDLEdBQVIsQ0FBYSxRQUFiLEVBQXVCRixNQUF2QjtBQUNILE9BckNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQQSxFQThDQSxNQUFDLDJDQUFEO0FBQVEsVUFBSSxFQUFDLFNBQWI7QUFBdUIsYUFBTyxFQUFFcEMsYUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE5Q0E7QUFISjtBQXVESCxDQWhJRDs7R0FBTXRCLE07VUFFZUUsdUQsRUFDSUMsdUQsRUFDRkEsdUQ7OztLQUpqQkgsTTtBQW1JU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXENLRWRpdG9yLmpzLjY0YzI3NmE3Yzk0MjViY2MzZjJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZixjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7QnV0dG9uLCBJbnB1dCwgQWxlcnR9IGZyb20gJ2FudGQnXHJcblxyXG5pbXBvcnQgQ0tFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1yZWFjdCc7XHJcbmltcG9ydCBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XHJcblxyXG5pbXBvcnQgXHJcbiAgICB7XHJcbiAgICAgICAgRU1QX0lOU0VSVF9SRVFVRVNULFxyXG4gICAgICAgIFRFU1RfUkVRVUVTVFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvZW1wJzsgXHJcblxyXG5cclxuY29uc3QgRWRpdG9yID0gKCk9PntcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gICAgY29uc3Qge2ltYWdlUGF0aHN9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuZW1wKTtcclxuICAgIGNvbnN0IHt1c2VySW5mb30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5hdXRoKTsgXHJcbiAgICBjb25zdCBbY29udGVudCxzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTsgICBcclxuICAgIGNvbnN0IFt0aXRsZSxzZXRUdGlsZV0gPSB1c2VTdGF0ZSgnJyk7IFxyXG4gICAgY29uc3QgYmxhbmtfcGF0dGVybiA9IC9eXFxzK3xcXHMrJi9nOyAgIFxyXG4gICAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpOyBcclxuICAgIGNvbnN0IHJlZiA9IGNyZWF0ZVJlZigpOyBcclxuXHJcbiAgICBjb25zdCB0ZXN0U3VtbWl0ID0gKCkgPT57XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVEVTVF9SRVFVRVNULFxyXG5cclxuXHJcbiAgICAgICB9KTsgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v6rKM7Iuc6riAIOygnOy2nCBcclxuICAgIGNvbnN0IGNvbnRlbnRTdW1taXQgPSAoKT0+e1xyXG5cclxuICAgICAgICAgICAgaWYodGl0bGUubGVuZ3RoID09PSAwIHx8IHRpdGxlLnJlcGxhY2UoYmxhbmtfcGF0dGVybiwnJyk9PT1cIlwiKXtcclxuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LmZvY3VzKCk7ICBcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfsoJzrqqnsnYQg7J6F66ClIO2VtCDso7zshLjsmpQnKTsgXHJcbiAgICAgICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihjb250ZW50Lmxlbmd0aCA9PT0gMCB8fCBjb250ZW50LnJlcGxhY2UoYmxhbmtfcGF0dGVybiwnJyk9PT1cIlwiKXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZW0IOyjvOyEuOyalCcpOyBcclxuICAgICAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICB0eXBlOiBFTVBfSU5TRVJUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgZGF0YToge2NvbnRlbnQ6ZW5jb2RlVVJJKGNvbnRlbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTplbmNvZGVVUkkodGl0bGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmlja05hbWU6ZW5jb2RlVVJJKHVzZXJJbmZvKSwgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIC8v7KCc66qpIOyeheugpVxyXG4gICAgY29uc3Qgb25DaGFuZ2VUdGl0bGUgID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0VHRpbGUoZS50YXJnZXQudmFsdWUpOyBcclxuICAgIH0sW3RpdGxlXSlcclxuXHJcbiAgICAvL+ydtOuvuOyngCDsl4XroZzrk5wg7LC9IFxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsgXHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcyAsKGYpPT57XHJcbiAgICAgICAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsZik7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6VVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTppbWFnZUZvcm1EYXRhLCAgICAgICAgICAgICBcclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgfSxbXSk7IFxyXG5cclxuXHJcbiAgICAvL+ydtOuvuOyngCDsl4XroZzrk5wg7YG066atIFxyXG4gICAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7IFxyXG5cclxuICAgIH0sW2ltYWdlSW5wdXQuY3VycmVudF0pOyBcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICAvLzxkaXYgY2xhc3NOYW1lPVwiZGVtby1lZGl0b3JcIiA+ICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpcIjQwMHB4XCJ9fT5cclxuICAgICAgICA8aDI+6rKM7Iuc6riA7J2EIOyekeyEse2VtCDrs7TshLjsmpQhPC9oMj5cclxuICAgICAgICB7LypcclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gaGlkZGVuIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICAqL31cclxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9J+ygnOuqqeydhCDsnoXroKXtlZjshLjsmpQnIHJlZj17cmVmfSBvbkNoYW5nZT17b25DaGFuZ2VUdGl0bGV9IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxJSd9fS8+XHJcbiAgICAgICAgPENLRWRpdG9yXHJcbiAgICAgICAgICAgIGVkaXRvcj17IENsYXNzaWNFZGl0b3IgfVxyXG4gICAgICAgICAgICBjb25maWc9e3tcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2tmaW5kZXI6e1xyXG4gICAgICAgICAgICAgICAgICAgICB1cGxvYWRVcmw6YGh0dHA6Ly9jYXB0YWlucnlhbi5nb25ldGlzLmNvbTozMDk1L2FwaS9lbXAvY2tlZGl0b3I/cG9zdEZsYWc9MTAwMSZ1c2VyPSR7dXNlckluZm99YCxcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA6e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiBbICdoZWFkaW5nJywgJ3wnLCAnYm9sZCcsICdpdGFsaWMnLCAnbGluaycsICdidWxsZXRlZExpc3QnLCdpbWFnZVVwbG9hZCddLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi6riA7J2EIOyeheugpe2VtOuztOyEuOyalCFcIixcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9fVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vZGF0YT1cIjxwPkhlbGxvIGZyb20gQ0tFZGl0b3IgNSE8L3A+XCJcclxuICAgICAgICAgICAgLy/stZzshowg7Iuk7ZaJ7IucIOuztOyXrOykhCDrrLjqtawgXHJcblxyXG4gICAgICAgICAgICBvbkluaXQ9eyBlZGl0b3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gWW91IGNhbiBzdG9yZSB0aGUgXCJlZGl0b3JcIiBhbmQgdXNlIHdoZW4gaXQgaXMgbmVlZGVkLlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdFZGl0b3IgaXMgcmVhZHkgdG8gdXNlIScsIGVkaXRvciApO1xyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyAoIGV2ZW50LCBlZGl0b3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZWRpdG9yLmdldERhdGEoKTtcclxuICAgICAgICAgICAgICAgIHNldENvbnRlbnQoZGF0YSk7IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIHsgZXZlbnQsIGVkaXRvciwgZGF0YSB9ICk7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICBvbkJsdXI9eyAoIGV2ZW50LCBlZGl0b3IgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ0JsdXIuJywgZWRpdG9yICk7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXsgKCBldmVudCwgZWRpdG9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdGb2N1cy4nLCBlZGl0b3IgKTtcclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17Y29udGVudFN1bW1pdH0gPuyekeyEsTwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcblxyXG4gICAgKVxyXG5cclxufSBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7ICJdLCJzb3VyY2VSb290IjoiIn0=