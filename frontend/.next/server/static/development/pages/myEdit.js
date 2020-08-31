module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/myEdit.js":
/*!*************************!*\
  !*** ./pages/myEdit.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draft-wysiwyg */ "react-draft-wysiwyg");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draftjs-to-html */ "draftjs-to-html");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-to-draftjs */ "html-to-draftjs");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_to_draftjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_emp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/emp */ "./reducers/emp.js");
var _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\myEdit.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Myeditor = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const {
    0: editorState,
    1: setEditorState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createEmpty());
  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: mainPostTitle,
    1: setMainPostTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    userInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.auth);
  const {
    imagePaths
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.emp);
  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); //제출

  const editContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
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

  const mainPostTitleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setMainPostTitle(e.target.value);
  }, [mainPostTitle]); //이미지 업로드 창 

  const onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const imageFormData = new FormData();
    Array.prototype.forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_7__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []); //이미지 업로드 클릭 

  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    imageInput.current.click();
  }, [imageInput.current]); //이미지 본문 삽입 

  const insertContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    let b = "";
    b = content.concat(`<img src="http://localhost:3095/pictureTest1598882059100.jpg" alt="undefined" style="height: auto;width: auto"/>`);
    onEditorStateChange(b);
  }, [content]); //본문 입력

  const onEditorStateChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(editState => {
    console.log('editState==>', editState);
    setEditorState(editState);
    setContent(draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent())));
  }, [editorState]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, imagePaths && imagePaths.map((v, i) => {
    return __jsx("div", {
      key: v,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: `http://localhost:3095/${v}`,
      style: {
        width: '20%',
        height: '20%'
      },
      alt: v,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 14
      }
    }), __jsx("button", {
      onClick: insertContent,
      __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onClickImageUpload,
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: editContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, "\uC791\uC131"));
};

/* harmony default export */ __webpack_exports__["default"] = (Myeditor);

/***/ }),

/***/ "./reducers/emp.js":
/*!*************************!*\
  !*** ./reducers/emp.js ***!
  \*************************/
/*! exports provided: initialState, EMP_LIST_REQUEST, EMP_LIST_SUCCESS, EMP_LIST_FAILURE, EMP_INSERT_REQUEST, EMP_INSERT_SUCCESS, EMP_INSERT_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_LIST_REQUEST", function() { return EMP_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_LIST_SUCCESS", function() { return EMP_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_LIST_FAILURE", function() { return EMP_LIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_INSERT_REQUEST", function() { return EMP_INSERT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_INSERT_SUCCESS", function() { return EMP_INSERT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMP_INSERT_FAILURE", function() { return EMP_INSERT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  emplist: [],
  imagePaths: []
};
const EMP_LIST_REQUEST = 'EMP_LIST_REQUEST';
const EMP_LIST_SUCCESS = 'EMP_LIST_SUCCESS';
const EMP_LIST_FAILURE = 'EMP_LIST_FAILURE';
const EMP_INSERT_REQUEST = 'EMP_INSERT_REQUEST';
const EMP_INSERT_SUCCESS = 'EMP_INSERT_SUCCESS';
const EMP_INSERT_FAILURE = 'EMP_INSERT_FAILURE';
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case EMP_LIST_REQUEST:
        {
          break;
        }

      case EMP_LIST_SUCCESS:
        {
          draft.emplist.length = 0; //배열 초기화

          action.data.forEach(v => {
            draft.emplist.push(v);
          });
          break;
        }

      case EMP_LIST_FAILURE:
        {
          break;
        }

      case UPLOAD_IMAGES_REQUEST:
        {
          break;
        }

      case UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths.length = 0;
          action.data.forEach(v => {
            draft.imagePaths.push(v);
          });
          break;
        }

      case UPLOAD_IMAGES_FAILURE:
        {
          break;
        }

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/myEdit.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\git Repository\PersonalProject_001\frontend\pages\myEdit.js */"./pages/myEdit.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "draft-js":
/*!***************************!*\
  !*** external "draft-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ "draftjs-to-html":
/*!**********************************!*\
  !*** external "draftjs-to-html" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draftjs-to-html");

/***/ }),

/***/ "html-to-draftjs":
/*!**********************************!*\
  !*** external "html-to-draftjs" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-to-draftjs");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-draft-wysiwyg":
/*!**************************************!*\
  !*** external "react-draft-wysiwyg" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-draft-wysiwyg");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbXlFZGl0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2VtcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZHJhZnQtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkcmFmdGpzLXRvLWh0bWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodG1sLXRvLWRyYWZ0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZHJhZnQtd3lzaXd5Z1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZWRpdG9yU3RhdGUiLCJzZXRFZGl0b3JTdGF0ZSIsInVzZVN0YXRlIiwiRWRpdG9yU3RhdGUiLCJjcmVhdGVFbXB0eSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwibWFpblBvc3RUaXRsZSIsInNldE1haW5Qb3N0VGl0bGUiLCJ1c2VySW5mbyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhdXRoIiwiaW1hZ2VQYXRocyIsImVtcCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJlZGl0Q29udGVudCIsInVzZUNhbGxiYWNrIiwidHJpbSIsImFsZXJ0IiwidHlwZSIsIkVNUF9JTlNFUlRfUkVRVUVTVCIsImRhdGEiLCJ0aXRsZSIsIm5pY2tOYW1lIiwibWFpblBvc3RUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlSW1hZ2VzIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsImZpbGVzIiwiZiIsImFwcGVuZCIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsImluc2VydENvbnRlbnQiLCJiIiwiY29uY2F0Iiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsImVkaXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkcmFmdFRvSHRtbCIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwibWFwIiwidiIsImkiLCJ3aWR0aCIsImhlaWdodCIsImxvY2FsZSIsImluaXRpYWxTdGF0ZSIsImVtcGxpc3QiLCJFTVBfTElTVF9SRVFVRVNUIiwiRU1QX0xJU1RfU1VDQ0VTUyIsIkVNUF9MSVNUX0ZBSUxVUkUiLCJFTVBfSU5TRVJUX1NVQ0NFU1MiLCJFTVBfSU5TRVJUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwibGVuZ3RoIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIs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Z0RILEdBbERhLENBQWQ7QUFvREgsQ0F2REQ7O0FBMERlQyxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbXlFZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJ3JlYWN0LWRyYWZ0LXd5c2l3eWcnXHJcbmltcG9ydCB7IEVkaXRvclN0YXRlLGNvbnZlcnRUb1JhdyB9IGZyb20gJ2RyYWZ0LWpzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QnV0dG9uLCBJbnB1dH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IGRyYWZ0VG9IdG1sIGZyb20gJ2RyYWZ0anMtdG8taHRtbCc7XHJcbmltcG9ydCBodG1sVG9EcmFmdCBmcm9tICdodG1sLXRvLWRyYWZ0anMnO1xyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgXHJcbiAgICB7RU1QX0lOU0VSVF9SRVFVRVNULCBcclxuICAgICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9lbXAnOyBcclxuXHJcblxyXG5cclxuY29uc3QgTXllZGl0b3IgPSAoKSA9PntcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gICAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZShFZGl0b3JTdGF0ZS5jcmVhdGVFbXB0eSgpKTtcclxuXHJcbiAgICBjb25zdCBbY29udGVudCAsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpOyBcclxuICAgIGNvbnN0IFttYWluUG9zdFRpdGxlICwgc2V0TWFpblBvc3RUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7IFxyXG4gICAgY29uc3Qge3VzZXJJbmZvfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmF1dGgpO1xyXG4gICAgY29uc3Qge2ltYWdlUGF0aHN9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuZW1wKTsgXHJcbiAgICBcclxuICAgIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTsgXHJcblxyXG4gICAgLy/soJzstpxcclxuICAgIGNvbnN0IGVkaXRDb250ZW50ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuXHJcbiAgICAgICAgaWYoIW1haW5Qb3N0VGl0bGUgfHwgIW1haW5Qb3N0VGl0bGUudHJpbSgpKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+ygnOuqqeydhCDsnoXroKXtlbQg7KO87IS47JqULicpOyBcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFjb250ZW50IHx8ICFjb250ZW50LnRyaW0oKSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6F66ClIO2VtCDso7zshLjsmpQuJyk7IFxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goeyAgXHJcbiAgICAgICAgICAgIHR5cGU6RU1QX0lOU0VSVF9SRVFVRVNULCBcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50IDogY29udGVudCwgXHJcbiAgICAgICAgICAgICAgICB0aXRsZSAgIDogbWFpblBvc3RUaXRsZSwgXHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZSA6IHVzZXJJbmZvLCBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFtjb250ZW50XSk7IFxyXG5cclxuXHJcbiAgICAvL+qyjOyLnOq4gCDsoJzrqqkg7J6F66ClIFxyXG4gICAgY29uc3QgbWFpblBvc3RUaXRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG5cclxuICAgICAgICBzZXRNYWluUG9zdFRpdGxlKGUudGFyZ2V0LnZhbHVlKTsgXHJcblxyXG4gICAgfSxbbWFpblBvc3RUaXRsZV0pXHJcblxyXG5cclxuXHJcbiAgICAvL+ydtOuvuOyngCDsl4XroZzrk5wg7LC9IFxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7IFxyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMgLChmKT0+e1xyXG4gICAgICAgICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLGYpOyBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOlVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6aW1hZ2VGb3JtRGF0YSwgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH0sW10pOyBcclxuXHJcblxyXG5cclxuICAgIC8v7J2066+47KeAIOyXheuhnOuTnCDtgbTrpq0gXHJcbiAgICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTsgXHJcblxyXG4gICAgfSxbaW1hZ2VJbnB1dC5jdXJyZW50XSk7IFxyXG5cclxuXHJcbiAgICAvL+ydtOuvuOyngCDrs7jrrLgg7IK97J6FIFxyXG4gICAgY29uc3QgaW5zZXJ0Q29udGVudCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgbGV0IGIgPSBcIlwiOyBcclxuICAgICAgIGIgPSAgY29udGVudC5jb25jYXQoYDxpbWcgc3JjPVwiaHR0cDovL2xvY2FsaG9zdDozMDk1L3BpY3R1cmVUZXN0MTU5ODg4MjA1OTEwMC5qcGdcIiBhbHQ9XCJ1bmRlZmluZWRcIiBzdHlsZT1cImhlaWdodDogYXV0bzt3aWR0aDogYXV0b1wiLz5gKVxyXG4gICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZShiKTsgXHJcbiAgICB9LFtjb250ZW50XSk7IFxyXG5cclxuXHJcblxyXG5cclxuICAgLy/rs7jrrLgg7J6F66ClXHJcbiAgIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZWRpdFN0YXRlKT0+e1xyXG4gICAgY29uc29sZS5sb2coJ2VkaXRTdGF0ZT09PicsIGVkaXRTdGF0ZSk7IFxyXG4gICAgc2V0RWRpdG9yU3RhdGUoZWRpdFN0YXRlKTsgIFxyXG4gICAgc2V0Q29udGVudChkcmFmdFRvSHRtbChjb252ZXJ0VG9SYXcoZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSkpKTsgXHJcblxyXG4gICB9LFtlZGl0b3JTdGF0ZV0pO1xyXG5cclxuICAgIHJldHVybiAoICAgIFxyXG4gICAgPD5cclxuICAgIDxkaXY+XHJcbiAgICB7aW1hZ2VQYXRocyAmJiBpbWFnZVBhdGhzLm1hcCgodixpKT0+e1xyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGtleT17dn0gPlxyXG4gICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwOTUvJHt2fWB9IHN0eWxlPXt7d2lkdGg6JzIwJScsaGVpZ2h0OicyMCUnIH19IGFsdD17dn0gLz5cclxuICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aW5zZXJ0Q29udGVudH0+67O466y47IK97J6FPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSBoaWRkZW4gLz5cclxuICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICAgPElucHV0IG5hbWU9XCJtYWluUG9zdFRpdGxlXCIgdmFsdWU9e21haW5Qb3N0VGl0bGV9IG9uQ2hhbmdlPXttYWluUG9zdFRpdGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIuygnOuqqeydhCDsnoXroKUg7ZW0IOyjvOyEuOyalC5cIiBzaXplPVwiMjVcIi8+XHJcbiAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgZWRpdFN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cImRlbW8td3JhcHBlclwiXHJcbiAgICAgICAgICAgIGVkaXRvckNsYXNzTmFtZT1cImRlbW8tZWRpdG9yXCJcclxuICAgICAgICAgICBsb2NhbGl6YXRpb249e3tcclxuICAgICAgICAgICAgICAgbG9jYWxlOidrbycsIFxyXG4gICAgICAgICAgIH19XHJcbiAgICBcclxuXHJcbiAgICAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17b25FZGl0b3JTdGF0ZUNoYW5nZX1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlZGl0Q29udGVudH0+7J6R7ISxPC9CdXR0b24+XHJcblxyXG4gICAgPC8+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeWVkaXRvcjsgIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0ICBpbml0aWFsU3RhdGUgPSB7XHJcblxyXG4gICAgZW1wbGlzdCA6IFtdLCBcclxuICAgIGltYWdlUGF0aHMgOiBbXSxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFTVBfTElTVF9SRVFVRVNUID0gJ0VNUF9MSVNUX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IEVNUF9MSVNUX1NVQ0NFU1MgPSAnRU1QX0xJU1RfU1VDQ0VTUyc7IFxyXG5leHBvcnQgY29uc3QgRU1QX0xJU1RfRkFJTFVSRSA9ICdFTVBfTElTVF9GQUlMVVJFJzsgXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEVNUF9JTlNFUlRfUkVRVUVTVCA9ICdFTVBfSU5TRVJUX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IEVNUF9JTlNFUlRfU1VDQ0VTUyA9ICdFTVBfSU5TRVJUX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IEVNUF9JTlNFUlRfRkFJTFVSRSA9ICdFTVBfSU5TRVJUX0ZBSUxVUkUnOyBcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1Q9XCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUz1cIlVQTE9BRF9JTUFHRVNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFPVwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCI7XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PntcclxuXHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG5cclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG5cclxuICAgICAgICAgICAgY2FzZSBFTVBfTElTVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjYXNlIEVNUF9MSVNUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVtcGxpc3QubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgICAgICAgLy/rsLDsl7Qg7LSI6riw7ZmUXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uZGF0YS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmVtcGxpc3QucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgRU1QX0xJU1RfRkFJTFVSRToge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzLnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0IDogYnJlYWs7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTsgXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRyYWZ0LWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRyYWZ0anMtdG8taHRtbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLXRvLWRyYWZ0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZHJhZnQtd3lzaXd5Z1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9