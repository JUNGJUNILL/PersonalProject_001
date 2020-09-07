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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/CKEditor.js":
/*!***************************!*\
  !*** ./pages/CKEditor.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "@ckeditor/ckeditor5-react");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "@ckeditor/ckeditor5-build-classic");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_emp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/emp */ "./reducers/emp.js");
var _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\CKEditor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Editor = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    imagePaths
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.emp);
  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  const abc = () => {
    console.log('content=>', content);
    alert(content);
  }; //이미지 업로드 창 


  const onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const imageFormData = new FormData();
    Array.prototype.forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_5__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []); //이미지 업로드 클릭 

  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  return __jsx("div", {
    className: "demo-editor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "\uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD574 \uBCF4\uC138\uC694!"), __jsx(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
    editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default.a,
    config: {
      ckfinder: {
        uploadUrl: 'http://localhost:3095/api/emp/ckeditor' //  headers:{
        //     "X-CSRF-TOKEN": "CSFR-Token",
        //     "Access-Control-Allow-Origin":"*", 
        // }

      },
      toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'imageUpload'],
      placeholder: "글을 입력해보세요!"
    } //data="<p>Hello from CKEditor 5!</p>"
    //최소 실행시 보여줄 문구 
    ,
    onInit: editor => {
      // You can store the "editor" and use when it is needed.
      console.log('Editor is ready to use!', editor);
    },
    onChange: (event, editor) => {
      const data = editor.getData();
      setContent(data);
      console.log({
        event,
        editor,
        data
      });
    },
    onBlur: (event, editor) => {
      console.log('Blur.', editor);
    },
    onFocus: (event, editor) => {
      console.log('Focus.', editor);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: abc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "\uBC97\uC740"));
};

/* harmony default export */ __webpack_exports__["default"] = (Editor);

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

/***/ 6:
/*!*********************************!*\
  !*** multi ./pages/CKEditor.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\git Repository\PersonalProject_001\frontend\pages\CKEditor.js */"./pages/CKEditor.js");


/***/ }),

/***/ "@ckeditor/ckeditor5-build-classic":
/*!****************************************************!*\
  !*** external "@ckeditor/ckeditor5-build-classic" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ckeditor/ckeditor5-build-classic");

/***/ }),

/***/ "@ckeditor/ckeditor5-react":
/*!********************************************!*\
  !*** external "@ckeditor/ckeditor5-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ckeditor/ckeditor5-react");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQ0tFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvZW1wLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBja2VkaXRvci9ja2VkaXRvcjUtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsiRWRpdG9yIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlUGF0aHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZW1wIiwiY29udGVudCIsInNldENvbnRlbnQiLCJ1c2VTdGF0ZSIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJhYmMiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJvbkNoYW5nZUltYWdlcyIsInVzZUNhbGxiYWNrIiwiZSIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJ0YXJnZXQiLCJmaWxlcyIsImYiLCJhcHBlbmQiLCJ0eXBlIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiZGF0YSIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIkNsYXNzaWNFZGl0b3IiLCJja2ZpbmRlciIsInVwbG9hZFVybCIsInRvb2xiYXIiLCJwbGFjZWhvbGRlciIsImVkaXRvciIsImV2ZW50IiwiZ2V0RGF0YSIsImluaXRpYWxTdGF0ZSIsImVtcGxpc3QiLCJFTVBfTElTVF9SRVFVRVNUIiwiRU1QX0xJU1RfU1VDQ0VTUyIsIkVNUF9MSVNUX0ZBSUxVUkUiLCJFTVBfSU5TRVJUX1JFUVVFU1QiLCJFTVBfSU5TRVJUX1NVQ0NFU1MiLCJFTVBfSU5TRVJUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwibGVuZ3RoIiwidiIsInB1c2giXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQU9BLE1BQU1BLE1BQU0sR0FBRyxNQUFJO0FBRWYsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU07QUFBQ0M7QUFBRCxNQUFlQywrREFBVyxDQUFFQyxLQUFELElBQVNBLEtBQUssQ0FBQ0MsR0FBaEIsQ0FBaEM7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LGdCQUFNLENBQUN2QixJQUFQLENBQVlSLE9BQVosQ0FBcUJtQyxDQUFELElBQUs7QUFDckJGLGlCQUFLLENBQUNyRCxVQUFOLENBQWlCd0QsSUFBakIsQ0FBc0JELENBQXRCO0FBQ0gsV0FGRDtBQUlBO0FBQ0g7O0FBRUQsV0FBS04scUJBQUw7QUFBNEI7QUFDeEI7QUFDSDs7QUFPRDtBQUFVO0FBN0NkO0FBZ0RILEdBbERhLENBQWQ7QUFvREgsQ0F2REQ7O0FBMERlQyxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcQ0tFZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtCdXR0b24sIElucHV0LCBBbGVydH0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCBDS0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXJlYWN0JztcclxuaW1wb3J0IENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcclxuXHJcbmltcG9ydCBcclxuICAgIHtFTVBfSU5TRVJUX1JFUVVFU1QsIFxyXG4gICAgIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL2VtcCc7IFxyXG5cclxuXHJcbmNvbnN0IEVkaXRvciA9ICgpPT57XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICAgIGNvbnN0IHtpbWFnZVBhdGhzfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmVtcCk7IFxyXG4gICAgY29uc3QgW2NvbnRlbnQsc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7ICAgXHJcbiAgICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7IFxyXG5cclxuICAgIGNvbnN0IGFiYyA9ICgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnRlbnQ9PicgLCBjb250ZW50KTsgXHJcbiAgICAgICAgYWxlcnQoY29udGVudCk7IFxyXG4gICAgfVxyXG5cclxuICAgICAgICAvL+ydtOuvuOyngCDsl4XroZzrk5wg7LC9IFxyXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsgXHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMgLChmKT0+e1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJyxmKTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6VVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6aW1hZ2VGb3JtRGF0YSwgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgIFxyXG4gICAgICAgIH0sW10pOyBcclxuICAgIFxyXG5cclxuXHJcbiAgICAvL+ydtOuvuOyngCDsl4XroZzrk5wg7YG066atIFxyXG4gICAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7IFxyXG5cclxuICAgIH0sW2ltYWdlSW5wdXQuY3VycmVudF0pOyBcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tZWRpdG9yXCI+XHJcbiAgICAgICAgPGgyPuqyjOyLnOq4gOydhCDsnpHshLHtlbQg67O07IS47JqUITwvaDI+XHJcbiAgICAgICAgey8qXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9IGhpZGRlbiAvPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgKi99XHJcbiAgICAgICAgPENLRWRpdG9yXHJcbiAgICAgICAgICAgIGVkaXRvcj17IENsYXNzaWNFZGl0b3IgfVxyXG4gICAgICAgICAgICBjb25maWc9e3tcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2tmaW5kZXI6e1xyXG4gICAgICAgICAgICAgICAgICAgICB1cGxvYWRVcmw6J2h0dHA6Ly9sb2NhbGhvc3Q6MzA5NS9hcGkvZW1wL2NrZWRpdG9yJyxcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiWC1DU1JGLVRPS0VOXCI6IFwiQ1NGUi1Ub2tlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOlwiKlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjogWyAnaGVhZGluZycsICd8JywgJ2JvbGQnLCAnaXRhbGljJywgJ2xpbmsnLCAnYnVsbGV0ZWRMaXN0JywnaW1hZ2VVcGxvYWQnXSxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIuq4gOydhCDsnoXroKXtlbTrs7TshLjsmpQhXCIsXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfX1cclxuXHJcblxyXG4gICAgICAgICAgICAvL2RhdGE9XCI8cD5IZWxsbyBmcm9tIENLRWRpdG9yIDUhPC9wPlwiXHJcbiAgICAgICAgICAgIC8v7LWc7IaMIOyLpO2WieyLnCDrs7Tsl6zspIQg66y46rWsIFxyXG5cclxuICAgICAgICAgICAgb25Jbml0PXsgZWRpdG9yID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gc3RvcmUgdGhlIFwiZWRpdG9yXCIgYW5kIHVzZSB3aGVuIGl0IGlzIG5lZWRlZC5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnRWRpdG9yIGlzIHJlYWR5IHRvIHVzZSEnLCBlZGl0b3IgKTtcclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCBldmVudCwgZWRpdG9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGVkaXRvci5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50KGRhdGEpOyBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCB7IGV2ZW50LCBlZGl0b3IsIGRhdGEgfSApO1xyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgb25CbHVyPXsgKCBldmVudCwgZWRpdG9yICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdCbHVyLicsIGVkaXRvciApO1xyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgb25Gb2N1cz17ICggZXZlbnQsIGVkaXRvciApID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnRm9jdXMuJywgZWRpdG9yICk7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthYmN9Puuyl+ydgDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcblxyXG4gICAgKVxyXG5cclxufSBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7ICIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCAgaW5pdGlhbFN0YXRlID0ge1xyXG5cclxuICAgIGVtcGxpc3QgOiBbXSwgXHJcbiAgICBpbWFnZVBhdGhzIDogW10sXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRU1QX0xJU1RfUkVRVUVTVCA9ICdFTVBfTElTVF9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBFTVBfTElTVF9TVUNDRVNTID0gJ0VNUF9MSVNUX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IEVNUF9MSVNUX0ZBSUxVUkUgPSAnRU1QX0xJU1RfRkFJTFVSRSc7IFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBFTVBfSU5TRVJUX1JFUVVFU1QgPSAnRU1QX0lOU0VSVF9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBFTVBfSU5TRVJUX1NVQ0NFU1MgPSAnRU1QX0lOU0VSVF9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBFTVBfSU5TRVJUX0ZBSUxVUkUgPSAnRU1QX0lOU0VSVF9GQUlMVVJFJzsgXHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUPVwiVVBMT0FEX0lNQUdFU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1M9XCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRT1cIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcblxyXG5cclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuXHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRU1QX0xJU1RfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgY2FzZSBFTVBfTElTVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5lbXBsaXN0Lmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIC8v67Cw7Je0IOy0iOq4sO2ZlFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5lbXBsaXN0LnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIEVNUF9MSVNUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocy5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdCA6IGJyZWFrOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7IFxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBja2VkaXRvci9ja2VkaXRvcjUtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9