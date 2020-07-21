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

/***/ "./pages/count.js":
/*!************************!*\
  !*** ./pages/count.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_count__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/count */ "./reducers/count.js");
var _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\pages\\count.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Count = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const count = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.count); //store의 state를 불러오는 hook 
  //store의 state 중에서 count의 state를 불러온다.

  const toggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(param => () => {
    if (param === 'plus') {
      return dispatch({
        type: _reducers_count__WEBPACK_IMPORTED_MODULE_2__["COUNT_PLUS_REQUEST"]
      });
    } else if (param === 'minus') {
      return dispatch({
        type: _reducers_count__WEBPACK_IMPORTED_MODULE_2__["COUNT_MINUS_REQUEST"]
      });
    } else {
      return;
    }
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "\uCE74\uC6B4\uB4DC : ", count.number, __jsx("button", {
    onClick: toggle('plus'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "\uB354\uD558\uAE30"), __jsx("button", {
    onClick: toggle('minus'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "\uBE7C \uAE30"));
};

/* harmony default export */ __webpack_exports__["default"] = (Count);

/***/ }),

/***/ "./reducers/count.js":
/*!***************************!*\
  !*** ./reducers/count.js ***!
  \***************************/
/*! exports provided: initialState, COUNT_PLUS_REQUEST, COUNT_PLUS_SUCCESS, COUNT_PLUS_FAILURE, COUNT_MINUS_REQUEST, COUNT_MINUS_SUCCESS, COUNT_MINUS_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_PLUS_REQUEST", function() { return COUNT_PLUS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_PLUS_SUCCESS", function() { return COUNT_PLUS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_PLUS_FAILURE", function() { return COUNT_PLUS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_MINUS_REQUEST", function() { return COUNT_MINUS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_MINUS_SUCCESS", function() { return COUNT_MINUS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_MINUS_FAILURE", function() { return COUNT_MINUS_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  number: 0
};
const COUNT_PLUS_REQUEST = 'COUNT_PLUS_REQUEST'; // count 1을 증가시킬 액션 타입이다.

const COUNT_PLUS_SUCCESS = 'COUNT_PLUS_SUCCESS';
const COUNT_PLUS_FAILURE = 'COUNT_PLUS_FAILURE';
const COUNT_MINUS_REQUEST = 'COUNT_MINUS_REQUEST'; // count 1을 증가시킬 액션 타입이다.

const COUNT_MINUS_SUCCESS = 'COUNT_MINUS_SUCCESS';
const COUNT_MINUS_FAILURE = 'COUNT_MINUS_FAILURE'; // export const countMinusAction = () =>({
//     type:COUNT_MINUS,
// });

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case COUNT_PLUS_REQUEST:
        {
          break;
        }

      case COUNT_PLUS_SUCCESS:
        {
          draft.number = state.number + action.data;
          break;
        }

      case COUNT_MINUS_SUCCESS:
        draft.number = state.number - action.data;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/count.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\git Repository\PersonalProject_001\frontend\pages\count.js */"./pages/count.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvY291bnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsiQ291bnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY291bnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidG9nZ2xlIiwidXNlQ2FsbGJhY2siLCJwYXJhbSIsInR5cGUiLCJDT1VOVF9QTFVTX1JFUVVFU1QiLCJDT1VOVF9NSU5VU19SRVFVRVNUIiwibnVtYmVyIiwiaW5pdGlhbFN0YXRlIiwiQ09VTlRfUExVU19TVUNDRVNTIiwiQ09VTlRfUExVU19GQUlMVVJFIiwiQ09VTlRfTUlOVVNfU1VDQ0VTUyIsIkNPVU5UX01JTlVTX0ZBSUxVUkUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMx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IFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtDT1VOVF9QTFVTX1JFUVVFU1QsY291bnRNaW51c0FjdGlvbm0sQ09VTlRfTUlOVVNfUkVRVUVTVH1mcm9tICcuLi9yZWR1Y2Vycy9jb3VudCc7XHJcblxyXG5cclxuY29uc3QgQ291bnQgPSAoKSA9PntcclxuXHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICAgIGNvbnN0IGNvdW50ICAgID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY291bnQpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9yZeydmCBzdGF0ZeulvCDrtojrn6zsmKTripQgaG9vayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9yZeydmCBzdGF0ZSDspJHsl5DshJwgY291bnTsnZggc3RhdGXrpbwg67aI65+s7Jio64ukLlxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZSA9IHVzZUNhbGxiYWNrKHBhcmFtPT4oKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHBhcmFtID09PSdwbHVzJyl7XHJcbiAgICAgICAgICAgcmV0dXJuICBkaXNwYXRjaCh7dHlwZTpDT1VOVF9QTFVTX1JFUVVFU1R9KTsgXHJcbiAgICAgICAgfWVsc2UgaWYocGFyYW0gPT09J21pbnVzJyl7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7dHlwZTpDT1VOVF9NSU5VU19SRVFVRVNUfSk7ICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcbiAgICB9LFtdKTsgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICDsubTsmrTrk5wgOiB7Y291bnQubnVtYmVyfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZSgncGx1cycpfT7rjZTtlZjquLA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGUoJ21pbnVzJyl9Puu5vCDquLA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50OyIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblxyXG4gICAgICAgIG51bWJlciA6IDAsXHJcbn0gXHJcblxyXG5leHBvcnQgY29uc3QgQ09VTlRfUExVU19SRVFVRVNUID0gJ0NPVU5UX1BMVVNfUkVRVUVTVCc7IC8vIGNvdW50IDHsnYQg7Kad6rCA7Iuc7YKsIOyVoeyFmCDtg4DsnoXsnbTri6QuXHJcbmV4cG9ydCBjb25zdCBDT1VOVF9QTFVTX1NVQ0NFU1MgPSAnQ09VTlRfUExVU19TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBDT1VOVF9QTFVTX0ZBSUxVUkUgPSAnQ09VTlRfUExVU19GQUlMVVJFJzsgXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ09VTlRfTUlOVVNfUkVRVUVTVCA9ICdDT1VOVF9NSU5VU19SRVFVRVNUJzsgLy8gY291bnQgMeydhCDspp3qsIDsi5ztgqwg7JWh7IWYIO2DgOyeheydtOuLpC5cclxuZXhwb3J0IGNvbnN0IENPVU5UX01JTlVTX1NVQ0NFU1MgPSAnQ09VTlRfTUlOVVNfU1VDQ0VTUyc7IFxyXG5leHBvcnQgY29uc3QgQ09VTlRfTUlOVVNfRkFJTFVSRSA9ICdDT1VOVF9NSU5VU19GQUlMVVJFJzsgXHJcblxyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjb3VudE1pbnVzQWN0aW9uID0gKCkgPT4oe1xyXG4vLyAgICAgdHlwZTpDT1VOVF9NSU5VUyxcclxuLy8gfSk7XHJcblxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIENPVU5UX1BMVVNfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIENPVU5UX1BMVVNfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubnVtYmVyID0gc3RhdGUubnVtYmVyICsgYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQ09VTlRfTUlOVVNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm51bWJlciA9IHN0YXRlLm51bWJlciAtIGFjdGlvbi5kYXRhOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgZGVmYXVsdCA6ICBicmVhazsgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcbn07IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9