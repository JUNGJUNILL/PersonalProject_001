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

/***/ "./pages/detailPage.js":
/*!*****************************!*\
  !*** ./pages/detailPage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");
var _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\detailPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const detailPage = ({
  nickName,
  postFlag,
  postId
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: detailInfo,
    1: setDetailInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_DETAIL_INFO_REQUEST"],
      data: {
        postId,
        nickName,
        postFlag
      }
    });
  }, []);

  const abc = () => {
    return {
      __html: `
    <p>굿모닝 입니다.</p>
    <figure class="image"><img src="http://localhost:3095/pictureTest1599725512431.jpg" alt="ㄴㄹ"></figure>
    `
    };
  };

  const test = () => {
    return {
      __html: `<div style="background:#52D4FF;width: 100px;height: 100px;margin:auto;padding:10px; border: 3px solid #73AD21;">a</div>`
    };
  };

  return __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: abc(),
    style: {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }));
};

detailPage.getInitialProps = async context => {
  const postId = context.query.postId;
  const nickName = context.query.nickName;
  const postFlag = context.query.postFlag;
  return {
    nickName,
    postFlag,
    postId
  };
};

/* harmony default export */ __webpack_exports__["default"] = (detailPage);

/***/ }),

/***/ "./reducers/mainPosts_1001.js":
/*!************************************!*\
  !*** ./reducers/mainPosts_1001.js ***!
  \************************************/
/*! exports provided: initialState, MAINPOSTS_1001_LIST_REQUEST, MAINPOSTS_1001_LIST_SUCCESS, MAINPOSTS_1001_LIST_FAILURE, MAINPOSTS_1001_DETAIL_INFO_REQUEST, MAINPOSTS_1001_DETAIL_INFO_SUCCESS, MAINPOSTS_1001_DETAIL_INFO_FAILURE, TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_LIST_REQUEST", function() { return MAINPOSTS_1001_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_LIST_SUCCESS", function() { return MAINPOSTS_1001_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_LIST_FAILURE", function() { return MAINPOSTS_1001_LIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_DETAIL_INFO_REQUEST", function() { return MAINPOSTS_1001_DETAIL_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_DETAIL_INFO_SUCCESS", function() { return MAINPOSTS_1001_DETAIL_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_DETAIL_INFO_FAILURE", function() { return MAINPOSTS_1001_DETAIL_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_REQUEST", function() { return TEST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_SUCCESS", function() { return TEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_FAILURE", function() { return TEST_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts_1001: [],
  imagePaths: []
};
const MAINPOSTS_1001_LIST_REQUEST = 'MAINPOSTS_1001_LIST_REQUEST';
const MAINPOSTS_1001_LIST_SUCCESS = 'MAINPOSTS_1001_LIST_SUCCESS';
const MAINPOSTS_1001_LIST_FAILURE = 'MAINPOSTS_1001_LIST_FAILURE';
const MAINPOSTS_1001_DETAIL_INFO_REQUEST = 'MAINPOSTS_1001_DETAIL_INFO_REQUEST';
const MAINPOSTS_1001_DETAIL_INFO_SUCCESS = 'MAINPOSTS_1001_DETAIL_INFO_SUCCESS';
const MAINPOSTS_1001_DETAIL_INFO_FAILURE = 'MAINPOSTS_1001_DETAIL_INFO_FAILURE';
const TEST_REQUEST = 'TEST_REQUEST';
const TEST_SUCCESS = 'TEST_SUCCESS';
const TEST_FAILURE = 'TEST_FAILURE';

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      //게시글 리스트 가져오기       
      //----------------------------------------
      case MAINPOSTS_1001_LIST_REQUEST:
        {
          break;
        }

      case MAINPOSTS_1001_LIST_SUCCESS:
        {
          draft.mainPosts_1001.length = 0; //배열 초기화

          action.data.forEach(v => {
            draft.mainPosts_1001.push(v);
          });
          break;
        }

      case MAINPOSTS_1001_LIST_FAILURE:
        {
          break;
        }
      //----------------------------------------
      //게시글 상세 페이지 가져오기 
      //----------------------------------------

      case MAINPOSTS_1001_DETAIL_INFO_REQUEST:
        {
          break;
        }

      case MAINPOSTS_1001_DETAIL_INFO_SUCCESS:
        {
          break;
        }

      case MAINPOSTS_1001_DETAIL_INFO_FAILURE:
        {
          break;
        }
      //----------------------------------------

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 6:
/*!***********************************!*\
  !*** multi ./pages/detailPage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\git Repository\PersonalProject_001\frontend\pages\detailPage.js */"./pages/detailPage.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGV0YWlsUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJkZXRhaWxQYWdlIiwibmlja05hbWUiLCJwb3N0RmxhZyIsInBvc3RJZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJkZXRhaWxJbmZvIiwic2V0RGV0YWlsSW5mbyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidHlwZSIsIk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QiLCJkYXRhIiwiYWJjIiwiX19odG1sIiwidGVzdCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHNfMTAwMSIsImltYWdlUGF0aHMiLCJNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QiLCJNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRSIsIlRFU1RfUkVRVUVTVCIsIlRFU1RfU1VDQ0VTUyIsIlRFU1RfRkFJTFVSRSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImxlbmd0aCIsImZvckVhY2giLCJ2IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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QixrQ0FBa0MsR0FBRSxvQ0FBMUM7QUFDQSxNQUFNQyxrQ0FBa0MsR0FBRSxvQ0FBMUM7QUFHQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7O0FBSVAsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR1osWUFBVCxFQUF1QmEsTUFBdkIsS0FBaUM7QUFHN0MsU0FBT0MsNENBQU8sQ0FBQ0YsS0FBRCxFQUFRRyxLQUFELElBQVM7QUFFMUIsWUFBT0YsTUFBTSxDQUFDekIsSUFBZDtBQUVSO0FBQ0E7QUFDWSxXQUFLZSwyQkFBTDtBQUFrQztBQUM5QjtBQUNIOztBQUVELFdBQUtDLDJCQUFMO0FBQWtDO0FBQzlCVyxlQUFLLENBQUNkLGNBQU4sQ0FBcUJlLE1BQXJCLEdBQTRCLENBQTVCLENBRDhCLENBRTlCOztBQUNBSCxnQkFBTSxDQUFDdkIsSUFBUCxDQUFZMkIsT0FBWixDQUFxQkMsQ0FBRCxJQUFLO0FBRXJCSCxpQkFBSyxDQUFDZCxjQUFOLENBQXFCa0IsSUFBckIsQ0FBMEJELENBQTFCO0FBQ0gsV0FIRDtBQUlBO0FBQ0g7O0FBRUQsV0FBS2IsMkJBQUw7QUFBa0M7QUFDOUI7QUFDSDtBQUNiO0FBUUE7QUFDQTs7QUFDWSxXQUFLaEIsa0NBQUw7QUFBeUM7QUFDckM7QUFDSDs7QUFFRCxXQUFLaUIsa0NBQUw7QUFBeUM7QUFHckM7QUFDSDs7QUFFRCxXQUFLQyxrQ0FBTDtBQUF5QztBQUNyQztBQUNIO0FBQ2I7O0FBTVk7QUFBVTtBQWxEZDtBQXFESCxHQXZEYSxDQUFkO0FBeURILENBNUREOztBQStEZUksc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRldGFpbFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgXHJcbiAgICB7TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCx9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMSc7IFxyXG5cclxuXHJcblxyXG5jb25zdCBkZXRhaWxQYWdlICA9ICh7bmlja05hbWUscG9zdEZsYWcscG9zdElkfSkgPT57XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTsgXHJcbiAgY29uc3QgW2RldGFpbEluZm8sIHNldERldGFpbEluZm9dID0gdXNlU3RhdGUoJycpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gIFxyXG4gICAgXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgfSxbXSk7IFxyXG5cclxuICBjb25zdCBhYmMgPSAoKSA9PntcclxuICAgIHJldHVybiB7X19odG1sOmBcclxuICAgIDxwPuq1v+uqqOuLnSDsnoXri4jri6QuPC9wPlxyXG4gICAgPGZpZ3VyZSBjbGFzcz1cImltYWdlXCI+PGltZyBzcmM9XCJodHRwOi8vbG9jYWxob3N0OjMwOTUvcGljdHVyZVRlc3QxNTk5NzI1NTEyNDMxLmpwZ1wiIGFsdD1cIuOEtOOEuVwiPjwvZmlndXJlPlxyXG4gICAgYH07XHJcbiAgfSBcclxuXHJcbiAgY29uc3QgdGVzdCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHtfX2h0bWw6YDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiM1MkQ0RkY7d2lkdGg6IDEwMHB4O2hlaWdodDogMTAwcHg7bWFyZ2luOmF1dG87cGFkZGluZzoxMHB4OyBib3JkZXI6IDNweCBzb2xpZCAjNzNBRDIxO1wiPmE8L2Rpdj5gfTtcclxuICB9IFxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXthYmMoKX0gc3R5bGU9e3t9fT48L2Rpdj5cclxuICAgIDwvZGl2PiAgICAgICAgIFxyXG5cclxuICAgICAgICApXHJcbn1cclxuXHJcblxyXG5kZXRhaWxQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PntcclxuICBjb25zdCBwb3N0SWQgICA9IGNvbnRleHQucXVlcnkucG9zdElkOyBcclxuICBjb25zdCBuaWNrTmFtZSA9IGNvbnRleHQucXVlcnkubmlja05hbWU7IFxyXG4gIGNvbnN0IHBvc3RGbGFnID0gY29udGV4dC5xdWVyeS5wb3N0RmxhZzsgXHJcbiAgXHJcbiAgcmV0dXJuIHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWR9OyBcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWxQYWdlOyAiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuXHJcblxyXG5leHBvcnQgY29uc3QgIGluaXRpYWxTdGF0ZSA9IHtcclxuXHJcbiAgICBtYWluUG9zdHNfMTAwMSA6IFtdLCBcclxuICAgIGltYWdlUGF0aHMgOiBbXSxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1Q9J01BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1M9J01BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkU9J01BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCA9J01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1NVQ0NFU1MgPSdNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFID0nTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRSc7IFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBURVNUX1JFUVVFU1QgPSAnVEVTVF9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBURVNUX1NVQ0NFU1MgPSAnVEVTVF9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBURVNUX0ZBSUxVUkUgPSAnVEVTVF9GQUlMVVJFJzsgXHJcblxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcblxyXG5cclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuXHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuXHJcbi8v6rKM7Iuc6riAIOumrOyKpO2KuCDqsIDsoLjsmKTquLAgICAgICAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDEubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgICAgICAgLy/rsLDsl7Qg7LSI6riw7ZmUXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uZGF0YS5mb3JFYWNoKCh2KT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMS5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8v6rKM7Iuc6riAIOyDgeyEuCDtjpjsnbTsp4Ag6rCA7KC47Jik6riwIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUzoge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRToge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQgOiBicmVhazsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pOyBcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=