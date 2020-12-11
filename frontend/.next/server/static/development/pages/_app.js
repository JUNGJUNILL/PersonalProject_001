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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./CSS/antdMobile.css":
/*!****************************!*\
  !*** ./CSS/antdMobile.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/AppLayOut.js":
/*!*********************************!*\
  !*** ./components/AppLayOut.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mobile */ "antd-mobile");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mobile__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\components\\AppLayOut.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const AppLayOut = ({
  children
}) => {
  const dummyList = ['카테코리01', '카테코리02', '카테코리03', '카테코리04', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05'];
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    userInfo,
    joined
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.auth);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //로그 아웃 후 메인 페이지로 이동
    if (!userInfo) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    }
  }, [userInfo]);
  const logOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    dispatch({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_8__["LOGOUT_REQUEST"]
    });
  }, [userInfo]);
  const {
    0: isClicked,
    1: setIsClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const inputEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const catergoriList = () => {
    setIsClicked(!isClicked);
  };

  const closeCatergoriList = () => {
    setIsClicked(false);
  }; //https://velog.io/@janghyoin/Jobshopper-project-NextJS%EC%97%90%EC%84%9C-styled-components-%EC%82%AC%EC%9A%A9-hwjzs423yw


  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "navul",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "navli",
    onClick: catergoriList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "\uBA54\uB274"), __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 61
    }
  }, "Home"))), __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/about',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 66
    }
  }, "About"))), __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/count',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 66
    }
  }, "Count"))), userInfo && __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 34
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/emp',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 56
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 77
    }
  }, "emp"))), !userInfo && __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/join',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 79
    }
  }, "\uD68C\uC6D0\uAC00\uC785"))), !userInfo && __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/login',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 80
    }
  }, "\uB85C\uADF8\uC778"))), userInfo && __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/userInfo',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 83
    }
  }, "\uD68C\uC6D0\uC815\uBCF4"))), userInfo && __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/detailPage',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 85
    }
  }, "\uC0C1\uC138\uD398\uC774\uC9C0"))), __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 24
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/mainPosts_1001',
      query: {
        nowPage: 1
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 46
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 107
    }
  }, "\uBA54\uC7781001"))), userInfo && __jsx("li", {
    className: "navli",
    onClick: logOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 36
    }
  }, "\uB85C\uADF8\uC544\uC6C3"), __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 22
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/test',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 44
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 66
    }
  }, "test"))), __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 22
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/test02',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 44
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 68
    }
  }, "memo"))), __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 22
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/movie',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 44
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 67
    }
  }, "movie"))), __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 22
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/useCallback',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 44
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 73
    }
  }, "useCallback"))), __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 22
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/useEffect',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 44
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 71
    }
  }, "useEffect"))), __jsx("li", {
    className: "navli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 22
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/inputBoxParent',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 44
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 76
    }
  }, "inputBoxParent")))), __jsx("div", {
    className: "sidenav",
    style: {
      width: isClicked ? "40%" : "0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "closebtn",
    onClick: closeCatergoriList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 16
    }
  }, "x"), dummyList.map((v, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/about',
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 16
    }
  }, __jsx("a", {
    onClick: closeCatergoriList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, v)))), children));
};

AppLayOut.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayOut);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css":
/*!***********************************************************************!*\
  !*** ./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayOut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayOut */ "./components/AppLayOut.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CSS_antdMobile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CSS/antdMobile.css */ "./CSS/antdMobile.css");
/* harmony import */ var _CSS_antdMobile_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CSS_antdMobile_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");
var _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














 //프로젝트 고정 틀

const Project01_TodoList = ({
  Component,
  pageProps
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "TodoList"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd-mobile/2.3.3/antd-mobile.css",
    integrity: "sha256-uZbNsqglsHyapiY6Nlj8o9kAmliY/rWNCTqthjIHIXw=",
    crossorigin: "anonymous",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  })), __jsx(_components_AppLayOut__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }))));
};

Project01_TodoList.getInitialProps = async context => {
  //▲ next에서 제공해줌
  const {
    ctx,
    Component
  } = context;
  let pageProps = {};
  const state = ctx.store.getState(); //프로젝트 전체 stat를 가져 올 수 있다. 

  const isServer =  true || false; //SSR로 접속

  const cookie = isServer ? ctx.req.headers.cookie : ''; //그냥 일반 접속자

  if (isServer) {
    console.log('hello==>', axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.Cookie);
  } //로그인 접속자


  if (isServer && cookie) {
    //클라이언 환경에서는 브라우저가 쿠키를 넣어주고, 
    //SSR일 때는 우리가 직접 넣어줘야 한다. 
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.Cookie = cookie;
  } //(새로고침)로그인 정보 유지


  if (!state.auth.userInfo) {
    ctx.store.dispatch({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_14__["LOAD_USER_REQUEST"]
    });
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

Project01_TodoList.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_12___default()();
  const middlewares = [sagaMiddleware]; // 미들웨어들을 넣으면 된다.
  //production

  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_11__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_9__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_9__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["default"], enhancer); //react에서 redux를 사용하기 위해서는 createStore로 store를 생성해 주어야 한다. 
  //redux-next-wapper 6 버전 부터는 Provider store={store}를 내부적으로 해 준다. 
  //sagaMiddleware.run(rootSaga);  이새끼때문에 REQUEST, SUCCESS 2번씩 실행됨 ㅅㅂ 

  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_13__["default"]);
  return store;
}; //const wrapper = createWrapper(configureStore, {debug:  process.env.NODE_ENV === 'development'}); 


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_8__["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper.withRedux(Project01_TodoList));

/***/ }),

/***/ "./reducers/auth.js":
/*!**************************!*\
  !*** ./reducers/auth.js ***!
  \**************************/
/*! exports provided: initialState, JOIN_REQUEST, JOIN_SUCCESS, JOIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOAD_LOGIN_REQUEST, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_REQUEST", function() { return JOIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_SUCCESS", function() { return JOIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_FAILURE", function() { return JOIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILURE", function() { return LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LOGIN_REQUEST", function() { return LOAD_LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_REQUEST", function() { return LOGOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_FAILURE", function() { return LOGOUT_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  isJoinng: false,
  //회원가입 시도중 
  joined: '',
  //회원가입 성공 
  isLogining: false,
  //로그인 시도 중
  userInfo: null //사용자 정보

};
const JOIN_REQUEST = 'JOIN_REQUEST';
const JOIN_SUCCESS = 'JOIN_SUCCESS';
const JOIN_FAILURE = 'JOIN_FAILURE';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOAD_LOGIN_REQUEST = 'LOAD_LOGIN_REQUEST';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      //회원가입
      //------------------------------------------------
      case JOIN_REQUEST:
        {
          draft.isJoinng = true;
          break;
        }

      case JOIN_SUCCESS:
        {
          draft.isJoinng = false;
          draft.joined = '회원가입 성공!';
          break;
        }

      case JOIN_FAILURE:
        {
          break;
        }
      //------------------------------------------------
      //로그인 창 화면전환
      //------------------------------------------------

      case LOAD_LOGIN_REQUEST:
        {
          draft.joined = '';
          break;
        }
      //------------------------------------------------
      //로그인
      //------------------------------------------------

      case LOGIN_REQUEST:
        {
          draft.isLogining = true;
          break;
        }

      case LOGIN_SUCCESS:
        {
          draft.isLogining = false;
          draft.userInfo = action.data;
          break;
        }

      case LOGIN_FAILURE:
        {
          break;
        }
      //------------------------------------------------
      //로그인 정보 유지 
      //------------------------------------------------

      case LOAD_USER_REQUEST:
        {
          break;
        }

      case LOAD_USER_SUCCESS:
        {
          draft.userInfo = action.data;
          break;
        }

      case LOAD_USER_FAILURE:
        {
          break;
        }
      //------------------------------------------------
      //로그아웃 
      //------------------------------------------------

      case LOGOUT_REQUEST:
        {
          break;
        }

      case LOGOUT_SUCCESS:
        {
          draft.userInfo = null;
          break;
        }

      case LOGOUT_FAILURE:
        {
          break;
        }
      //------------------------------------------------

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/***/ "./reducers/emp.js":
/*!*************************!*\
  !*** ./reducers/emp.js ***!
  \*************************/
/*! exports provided: initialState, EMP_LIST_REQUEST, EMP_LIST_SUCCESS, EMP_LIST_FAILURE, EMP_INSERT_REQUEST, EMP_INSERT_SUCCESS, EMP_INSERT_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, DETAIL_INFO_REQUEST, DETAIL_INFO_SUCCESS, DETAIL_INFO_FAILURE, TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_INFO_REQUEST", function() { return DETAIL_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_INFO_SUCCESS", function() { return DETAIL_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_INFO_FAILURE", function() { return DETAIL_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_REQUEST", function() { return TEST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_SUCCESS", function() { return TEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_FAILURE", function() { return TEST_FAILURE; });
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
const DETAIL_INFO_REQUEST = 'DETAIL_INFO_REQUEST';
const DETAIL_INFO_SUCCESS = 'DETAIL_INFO_SUCCESS';
const DETAIL_INFO_FAILURE = 'DETAIL_INFO_FAILURE';
const TEST_REQUEST = 'TEST_REQUEST';
const TEST_SUCCESS = 'TEST_SUCCESS';
const TEST_FAILURE = 'TEST_FAILURE';

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      //----------------------------------------
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
      //----------------------------------------
      //----------------------------------------

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
      //----------------------------------------
      //게시글 작성 
      //----------------------------------------

      case EMP_INSERT_REQUEST:
        {
          break;
        }

      case EMP_INSERT_SUCCESS:
        {
          break;
        }

      case EMP_INSERT_FAILURE:
        {
          break;
        }
      //----------------------------------------
      //게시글 상세 페이지 가져오기 
      //----------------------------------------

      case DETAIL_INFO_REQUEST:
        {
          break;
        }

      case DETAIL_INFO_SUCCESS:
        {
          break;
        }

      case DETAIL_INFO_FAILURE:
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

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count */ "./reducers/count.js");
/* harmony import */ var _emp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emp */ "./reducers/emp.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./reducers/auth.js");
/* harmony import */ var _mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainPosts_1001 */ "./reducers/mainPosts_1001.js");
 // 여러 리듀서들을 하나로 합쳐준다.





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  count: _count__WEBPACK_IMPORTED_MODULE_1__["default"],
  // 여기에 다른 리듀서들을 더 적으면 된다!
  emp: _emp__WEBPACK_IMPORTED_MODULE_2__["default"],
  auth: _auth__WEBPACK_IMPORTED_MODULE_3__["default"],
  mainPosts_1001: _mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer); // _app.js에서 reducer로 사용된다!

/***/ }),

/***/ "./reducers/mainPosts_1001.js":
/*!************************************!*\
  !*** ./reducers/mainPosts_1001.js ***!
  \************************************/
/*! exports provided: initialState, MAINPOSTS_1001_LIST_REQUEST, MAINPOSTS_1001_LIST_SUCCESS, MAINPOSTS_1001_LIST_FAILURE, MAINPOSTS_1001_DETAIL_INFO_REQUEST, MAINPOSTS_1001_DETAIL_INFO_SUCCESS, MAINPOSTS_1001_DETAIL_INFO_FAILURE, MAINPOSTS_1001_COMMENTS_REQUEST, MAINPOSTS_1001_COMMENTS_SUCCESS, MAINPOSTS_1001_COMMENTS_FAILURE, MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST, MAINPOSTS_1001_COMMENTBYCOMMENT_SUCCESS, MAINPOSTS_1001_COMMENTBYCOMMENT_FAILURE, MAINPOSTS_1001_COMMENTINSERT_REQUEST, MAINPOSTS_1001_COMMENTINSERT_SUCCESS, MAINPOSTS_1001_COMMENTINSERT_FAILURE, MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST, MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_SUCCESS, MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE, MAINPOSTS_1001_MAINPOSTLIKE_REQUEST, MAINPOSTS_1001_MAINPOSTLIKE_SUCCESS, MAINPOSTS_1001_MAINPOSTLIKE_FAILURE, MAINPOSTS_1001_COMMENTLIKE_REQUEST, MAINPOSTS_1001_COMMENTLIKE_SUCCESS, MAINPOSTS_1001_COMMENTLIKE_FAILURE, MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_REQUEST, MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_SUCCESS, MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_FAILURE, TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTS_REQUEST", function() { return MAINPOSTS_1001_COMMENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTS_SUCCESS", function() { return MAINPOSTS_1001_COMMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTS_FAILURE", function() { return MAINPOSTS_1001_COMMENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST", function() { return MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTBYCOMMENT_SUCCESS", function() { return MAINPOSTS_1001_COMMENTBYCOMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTBYCOMMENT_FAILURE", function() { return MAINPOSTS_1001_COMMENTBYCOMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTINSERT_REQUEST", function() { return MAINPOSTS_1001_COMMENTINSERT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTINSERT_SUCCESS", function() { return MAINPOSTS_1001_COMMENTINSERT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTINSERT_FAILURE", function() { return MAINPOSTS_1001_COMMENTINSERT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST", function() { return MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_SUCCESS", function() { return MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE", function() { return MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_MAINPOSTLIKE_REQUEST", function() { return MAINPOSTS_1001_MAINPOSTLIKE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_MAINPOSTLIKE_SUCCESS", function() { return MAINPOSTS_1001_MAINPOSTLIKE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_MAINPOSTLIKE_FAILURE", function() { return MAINPOSTS_1001_MAINPOSTLIKE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTLIKE_REQUEST", function() { return MAINPOSTS_1001_COMMENTLIKE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTLIKE_SUCCESS", function() { return MAINPOSTS_1001_COMMENTLIKE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTLIKE_FAILURE", function() { return MAINPOSTS_1001_COMMENTLIKE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_REQUEST", function() { return MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_SUCCESS", function() { return MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_FAILURE", function() { return MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_REQUEST", function() { return TEST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_SUCCESS", function() { return TEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_FAILURE", function() { return TEST_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts_1001: [],
  mainPosts_1001Info: [{}],
  //하 이것때매 몇시간을 날려 먹었는지.. 아크릴 새우님이 해결법을 알려주심
  mainPosts_1001Comments: [],
  mainPosts_1001CommentByComments: [{}],
  imagePaths: [],
  likeIsClicked: null,
  clickCommentId: null,
  commentByCommentCount: 0,
  //대댓글 입력 후 대댓글 숫자 변경 
  commentByCommentInsertCommentId: null //어떤 댓글에 대댓글을 달았는지 알기 위한 flag 값

}; //게시물 list

const MAINPOSTS_1001_LIST_REQUEST = 'MAINPOSTS_1001_LIST_REQUEST';
const MAINPOSTS_1001_LIST_SUCCESS = 'MAINPOSTS_1001_LIST_SUCCESS';
const MAINPOSTS_1001_LIST_FAILURE = 'MAINPOSTS_1001_LIST_FAILURE'; //게시물 상세 

const MAINPOSTS_1001_DETAIL_INFO_REQUEST = 'MAINPOSTS_1001_DETAIL_INFO_REQUEST';
const MAINPOSTS_1001_DETAIL_INFO_SUCCESS = 'MAINPOSTS_1001_DETAIL_INFO_SUCCESS';
const MAINPOSTS_1001_DETAIL_INFO_FAILURE = 'MAINPOSTS_1001_DETAIL_INFO_FAILURE'; //게시물 댓글 list 

const MAINPOSTS_1001_COMMENTS_REQUEST = 'MAINPOSTS_1001_COMMENTS_REQUEST';
const MAINPOSTS_1001_COMMENTS_SUCCESS = 'MAINPOSTS_1001_COMMENTS_SUCCESS';
const MAINPOSTS_1001_COMMENTS_FAILURE = 'MAINPOSTS_1001_COMMENTS_FAILURE'; //게시물 대댓글 list 

const MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST = 'MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST';
const MAINPOSTS_1001_COMMENTBYCOMMENT_SUCCESS = 'MAINPOSTS_1001_COMMENTBYCOMMENT_SUCCESS';
const MAINPOSTS_1001_COMMENTBYCOMMENT_FAILURE = 'MAINPOSTS_1001_COMMENTBYCOMMENT_FAILURE'; //게시물 댓글 insert 

const MAINPOSTS_1001_COMMENTINSERT_REQUEST = 'MAINPOSTS_1001_COMMENTINSERT_REQUEST';
const MAINPOSTS_1001_COMMENTINSERT_SUCCESS = 'MAINPOSTS_1001_COMMENTINSERT_SUCCESS';
const MAINPOSTS_1001_COMMENTINSERT_FAILURE = 'MAINPOSTS_1001_COMMENTINSERT_FAILURE'; //게시물 대댓글 insert 

const MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST = 'MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST';
const MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_SUCCESS = 'MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_SUCCESS';
const MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE = 'MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE'; //게시글 like / dislike

const MAINPOSTS_1001_MAINPOSTLIKE_REQUEST = 'MAINPOSTS_1001_MAINPOSTLIKE_REQUEST';
const MAINPOSTS_1001_MAINPOSTLIKE_SUCCESS = 'MAINPOSTS_1001_MAINPOSTLIKE_SUCCESS';
const MAINPOSTS_1001_MAINPOSTLIKE_FAILURE = 'MAINPOSTS_1001_MAINPOSTLIKE_FAILURE'; //게시글 댓글 like / dislike 

const MAINPOSTS_1001_COMMENTLIKE_REQUEST = 'MAINPOSTS_1001_COMMENTLIKE_REQUEST';
const MAINPOSTS_1001_COMMENTLIKE_SUCCESS = 'MAINPOSTS_1001_COMMENTLIKE_SUCCESS';
const MAINPOSTS_1001_COMMENTLIKE_FAILURE = 'MAINPOSTS_1001_COMMENTLIKE_FAILURE'; //게시글 대댓글 like / dislike 

const MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_REQUEST = 'MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_REQUEST';
const MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_SUCCESS = 'MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_SUCCESS';
const MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_FAILURE = 'MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_FAILURE';
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
      //게시글 댓글 INSERT   
      //----------------------------------------

      case MAINPOSTS_1001_COMMENTINSERT_REQUEST:
        {
          break;
        }

      case MAINPOSTS_1001_COMMENTINSERT_SUCCESS:
        {
          draft.mainPosts_1001Comments.length = 0;
          action.data.forEach((v, i) => {
            draft.mainPosts_1001Comments.push(v);
          });
          break;
        }

      case MAINPOSTS_1001_COMMENTINSERT_FAILURE:
        {
          break;
        }
      //----------------------------------------
      //게시글 대댓글 INSERT   
      //----------------------------------------

      case MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST:
        {
          break;
        }

      case MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_SUCCESS:
        {
          draft.mainPosts_1001CommentByComments.length = 0;
          draft.commentByCommentCount = action.data.array.length;
          draft.commentByCommentInsertCommentId = action.data.param.commentId;
          action.data.array.forEach(v => {
            draft.mainPosts_1001CommentByComments.push(v);
          });
          break;
        }

      case MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE:
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
          draft.mainPosts_1001Info.length = 0; //배열 초기화

          action.data.forEach(v => {
            draft.mainPosts_1001Info.push(v);
          });
          break;
        }

      case MAINPOSTS_1001_DETAIL_INFO_FAILURE:
        {
          break;
        }
      //----------------------------------------
      //게시글 댓글 가져오기  
      //----------------------------------------

      case MAINPOSTS_1001_COMMENTS_REQUEST:
        {
          break;
        }

      case MAINPOSTS_1001_COMMENTS_SUCCESS:
        {
          draft.mainPosts_1001Comments.length = 0;
          action.data.forEach(v => {
            draft.mainPosts_1001Comments.push(v);
          });
          break;
        }

      case MAINPOSTS_1001_COMMENTS_FAILURE:
        {
          break;
        }
      //----------------------------------------
      //게시글 대댓글 가져오기 clickCommentId
      //----------------------------------------

      case MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST:
        {
          break;
        }

      case MAINPOSTS_1001_COMMENTBYCOMMENT_SUCCESS:
        {
          draft.mainPosts_1001CommentByComments.length = 0;
          draft.clickCommentId = action.data.param.commentId;
          action.data.array.forEach(v => {
            draft.mainPosts_1001CommentByComments.push(v);
          });
          break;
        }

      case MAINPOSTS_1001_COMMENTBYCOMMENT_FAILURE:
        {
          break;
        }
      //----------------------------------------
      //게시글 like / dislike       
      //----------------------------------------

      case MAINPOSTS_1001_MAINPOSTLIKE_REQUEST:
        {
          break;
        }

      case MAINPOSTS_1001_MAINPOSTLIKE_SUCCESS:
        {
          draft.mainPosts_1001Info.length = 0;
          action.data.array.forEach(v => {
            draft.mainPosts_1001Info.push(v);
          });
          break;
        }

      case MAINPOSTS_1001_MAINPOSTLIKE_FAILURE:
        {
          break;
        }
      //----------------------------------------
      //게시글 댓글 like / dislike       
      //----------------------------------------

      case MAINPOSTS_1001_COMMENTLIKE_REQUEST:
        {
          break;
        }

      case MAINPOSTS_1001_COMMENTLIKE_SUCCESS:
        {
          draft.mainPosts_1001Comments.length = 0;
          action.data.forEach(v => {
            draft.mainPosts_1001Comments.push(v);
          });
          break;
        }

      case MAINPOSTS_1001_COMMENTLIKE_FAILURE:
        {
          break;
        }
      //----------------------------------------
      //게시글 대댓글 like / dislike       
      //----------------------------------------

      case MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_REQUEST:
        {
          break;
        }

      case MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_SUCCESS:
        {
          draft.mainPosts_1001CommentByComments.length = 0;
          action.data.forEach(v => {
            draft.mainPosts_1001CommentByComments.push(v);
          });
          break;
        }

      case MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_FAILURE:
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

/***/ "./sagas/authSaga.js":
/*!***************************!*\
  !*** ./sagas/authSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return authSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");



 //유저정보 유지 사이클 
//------------------------------------------------------------------------

function APILoadUser() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/auth/', {
    withCredentials: true
  });
}

function* sagaLoadUser() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(APILoadUser);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_SUCCESS"],
      data: result.data.nick
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_FAILURE"],
      error: e
    });
  }
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_REQUEST"], sagaLoadUser);
} //------------------------------------------------------------------------
//회원가입 사이클 
//------------------------------------------------------------------------


function APIJoin(data) {
  console.log('data==>', data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/auth/join', {
    data
  }, {
    withCredentials: true
  });
}

function* sagaJoin(action) {
  try {
    console.log(action, action.data);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(APIJoin, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["JOIN_SUCCESS"],
      data: result
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["JOIN_FAILURE"],
      error: e
    });
  }
}

function* watchJoin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_3__["JOIN_REQUEST"], sagaJoin);
} //------------------------------------------------------------------------
//로그아웃 사이클
//------------------------------------------------------------------------


function APILogOut() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/auth/logOut', {
    withCredentials: true
  });
}

function* sagaLogOut() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(APILogOut);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_SUCCESS"]
    });
  } catch (e) {
    alert('로그아웃 에러');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_FAILURE"],
      error: e
    });
  }
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_REQUEST"], sagaLogOut);
} //------------------------------------------------------------------------
//로그인 사이클
//------------------------------------------------------------------------


function APILogin(data) {
  //jwt 로그인
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/auth/login', {
    data
  }, {
    withCredentials: true
  }); //passport local 로그인
  //return axios.post('/auth/login',data,{withCredentials:true});
}

function* sagaLogin(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(APILogin, action.data);
    console.log('result', result.data.token);
    const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(result.data.token);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOGIN_SUCCESS"],
      data: decoded.nick
    });
  } catch (e) {
    alert('로그인 에러');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOGIN_FAILURE"],
      error: e
    });
  }
}

function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_auth__WEBPACK_IMPORTED_MODULE_3__["LOGIN_REQUEST"], sagaLogin);
} //------------------------------------------------------------------------


function* authSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchJoin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogOut)]);
}

/***/ }),

/***/ "./sagas/empListSaga.js":
/*!******************************!*\
  !*** ./sagas/empListSaga.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return empListSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_emp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/emp */ "./reducers/emp.js");


 //EMP SELECT
//-----------------------------------------------------------------------------------

function APIempList(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/emp', {
    data
  }, {
    withCredentials: true
  });
}

function* sagaEmpList(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(APIempList, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_2__["EMP_LIST_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    alert('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_2__["EMP_LIST_FAILURE"],
      error: e
    });
  }
}

function* watchempList() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_emp__WEBPACK_IMPORTED_MODULE_2__["EMP_LIST_REQUEST"], sagaEmpList);
} //-----------------------------------------------------------------------------------
//EMP INSERT 
//-----------------------------------------------------------------------------------


function APIempInsert(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/emp/empInsert', {
    data
  }, {
    withCredentials: true
  });
}

function* sagaEmpInsert(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(APIempInsert, action.data);
    console.log('saga', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_2__["EMP_INSERT_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    alert('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_2__["EMP_INSERT_FAILURE"],
      error: e
    });
  }
}

function* watchInsertEmp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_emp__WEBPACK_IMPORTED_MODULE_2__["EMP_INSERT_REQUEST"], sagaEmpInsert);
} //-----------------------------------------------------------------------------------
// FILE UPLOAD 
//-----------------------------------------------------------------------------------


function APIUploadImage(formData) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/emp/images', formData, {
    withCredentials: true
  });
}

function* upLoadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(APIUploadImage, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    alert('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: e
    });
  }
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_emp__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], upLoadImages);
} //-----------------------------------------------------------------------------------
//TEST
//-----------------------------------------------------------------------------------


function APItest(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/emp/select', {
    data
  }, {
    withCredentials: true
  });
}

function* sagaTest(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(APItest, action.data);
    console.log('sagasagates', result.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_2__["TEST_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    alert('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_emp__WEBPACK_IMPORTED_MODULE_2__["TEST_FAILURE"],
      error: e
    });
  }
}

function* watchTest() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_emp__WEBPACK_IMPORTED_MODULE_2__["TEST_REQUEST"], sagaTest);
} //-----------------------------------------------------------------------------------


function* empListSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchempList), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchInsertEmp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchTest)]);
}

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _studySaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studySaga */ "./sagas/studySaga.js");
/* harmony import */ var _empListSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empListSaga */ "./sagas/empListSaga.js");
/* harmony import */ var _mainPosts_1001Saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainPosts_1001Saga */ "./sagas/mainPosts_1001Saga.js");
/* harmony import */ var _authSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authSaga */ "./sagas/authSaga.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);





 //axios.defaults.baseURL = 'http://localhost:3095/api'; 

axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.baseURL = 'http://captainryan.gonetis.com:3095/api';
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_studySaga__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_empListSaga__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_authSaga__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_mainPosts_1001Saga__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/mainPosts_1001Saga.js":
/*!*************************************!*\
  !*** ./sagas/mainPosts_1001Saga.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mainPosts_1001Saga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //mainPost_1001 리스트 
//-----------------------------------------------------------------------------------

function APImainPosts_1001List(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/mainPosts_1001', {
    data
  }, {
    withCredentials: true
  });
}

function* sagaMainPosts_1001List(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(APImainPosts_1001List, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_LIST_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    alert('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_LIST_FAILURE"],
      error: e
    });
  }
}

function* watchMainPosts_1001() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_LIST_REQUEST"], sagaMainPosts_1001List);
} //-----------------------------------------------------------------------------------
//mainPost_1001 상세정보 
//-----------------------------------------------------------------------------------


function APImainPosts_1001Detail(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/mainPosts_1001/mainPosts_1001Detail', {
    data
  }, {
    withCredentials: true
  });
}

function* sagaMainPosts_1001Detail(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(APImainPosts_1001Detail, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_DETAIL_INFO_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    alert('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_DETAIL_INFO_FAILURE"],
      error: e
    });
  }
}

function* watchMainPosts_1001Detail() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_DETAIL_INFO_REQUEST"], sagaMainPosts_1001Detail);
} //-----------------------------------------------------------------------------------
//mainPost_1001 상세 정보 댓글 리스트
//-----------------------------------------------------------------------------------


function APImainPosts_1001CommentList(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/mainPosts_1001/mainPosts_1001Comments', {
    data
  }, {
    withCredentials: true
  });
}

function* sagaMainPosts_1001CommentList(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(APImainPosts_1001CommentList, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTS_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    alert('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTS_FAILURE"],
      error: e
    });
  }
}

function* watchMainPosts_1001CommentList() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTS_REQUEST"], sagaMainPosts_1001CommentList);
} //-----------------------------------------------------------------------------------
//mainPost_1001 상세 정보 대댓글 리스트
//-----------------------------------------------------------------------------------


function APImainPosts_1001CommentByCommentList(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/mainPosts_1001/mainPosts_1001CommentByComments', {
    data
  }, {
    withCredentials: true
  });
}

function* sagaMainPosts_1001CommentByCommentList(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(APImainPosts_1001CommentByCommentList, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTBYCOMMENT_SUCCESS"],
      data: {
        array: result.data,
        param: action.data
      }
    });
  } catch (e) {
    console.error(e);
    alert('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTBYCOMMENT_FAILURE"],
      error: e
    });
  }
}

function* watchMainPosts_1001CommentByCommentList() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST"], sagaMainPosts_1001CommentByCommentList);
} //-----------------------------------------------------------------------------------
//mainPost_1001 댓글 입력
//-----------------------------------------------------------------------------------


function APImainPosts_1001CommentInsert(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/mainPosts_1001/mainPosts_1001CommentInsert', {
    data
  }, {
    withCredentials: true
  });
}

function* sagaMainPosts_1001CommentInsert(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(APImainPosts_1001CommentInsert, action.data);
    const array = [];
    result.data.map((v, i) => {
      result.data[0].kk = 'addComment';
      array.push(v);
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTINSERT_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    alert('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTINSERT_FAILURE"],
      error: e
    });
  }
}

function* watchMainPosts_1001CommentInsert() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTINSERT_REQUEST"], sagaMainPosts_1001CommentInsert);
} //-----------------------------------------------------------------------------------
//mainPost_1001 대댓글 입력
//-----------------------------------------------------------------------------------


function APImainPosts_1001CommentByCommentInsert(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/mainPosts_1001/mainPosts_1001CommentByCommentInsert', {
    data
  }, {
    withCredentials: true
  });
}

function* sagaMainPosts_1001CommentByCommentInsert(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(APImainPosts_1001CommentByCommentInsert, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_SUCCESS"],
      data: {
        array: result.data,
        param: action.data
      }
    });
  } catch (e) {
    console.error(e);
    alert('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE"],
      error: e
    });
  }
}

function* watchMainPosts_1001CommentByCommentInsert() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST"], sagaMainPosts_1001CommentByCommentInsert);
} //-----------------------------------------------------------------------------------
//게시글 LIKE / DISLIKE 
//-----------------------------------------------------------------------------------


function APImainPosts_1001Like(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/mainPosts_1001/mainPosts_1001Like', {
    data
  }, {
    withCredentials: true
  });
}

function* sagaMainPosts_1001Like(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(APImainPosts_1001Like, action.data);
    action.data.mainPosts_1001Info[0] = _objectSpread(_objectSpread({}, action.data.mainPosts_1001Info[0]), {}, {
      flag: 'Y',
      good: action.data.flag === 'good' ? parseInt(action.data.mainPosts_1001Info[0].good) + 1 : action.data.mainPosts_1001Info[0].good,
      bad: action.data.flag === 'bad' ? parseInt(action.data.mainPosts_1001Info[0].bad) + 1 : action.data.mainPosts_1001Info[0].bad,
      clicked: action.data.flag === 'good' ? 'good' : 'bad'
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_MAINPOSTLIKE_SUCCESS"],
      //이런식으로도 리듀서에 데이터를 보낼 수 있다. 
      //data:{array : action.data.mainPosts_1001Comments, values :action.data.commentid },
      data: {
        array: action.data.mainPosts_1001Info
      }
    });
  } catch (e) {
    console.error(e);
    alert('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_MAINPOSTLIKE_FAILURE"],
      error: e
    });
  }
}

function* watchMainPosts_1001Like() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_MAINPOSTLIKE_REQUEST"], sagaMainPosts_1001Like);
} //-----------------------------------------------------------------------------------
//mainPost_1001 댓글 LIKE / DISLIKE 
//-----------------------------------------------------------------------------------


function APImainPosts_1001CommentLike(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/mainPosts_1001/mainPosts_1001CommentLike', {
    data
  }, {
    withCredentials: true
  });
}

function* sagaMainPosts_1001CommentLike(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(APImainPosts_1001CommentLike, action.data);
    action.data.mainPosts_1001Comments.map((v, i) => {
      if (v.commentId === action.data.commentid) {
        action.data.mainPosts_1001Comments[i] = _objectSpread(_objectSpread({}, action.data.mainPosts_1001Comments[i]), {}, {
          clickedComponent: action.data.commentid,
          flag: 'Y',
          likeDislikeflag: action.data.flag
        });
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTLIKE_SUCCESS"],
      //이런식으로도 리듀서에 데이터를 보낼 수 있다. 
      //data:{array : action.data.mainPosts_1001Comments, values :action.data.commentid },
      data: action.data.mainPosts_1001Comments
    });
  } catch (e) {
    console.error(e);
    alert('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTLIKE_FAILURE"],
      error: e
    });
  }
}

function* watchMainPosts_1001CommentLike() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTLIKE_REQUEST"], sagaMainPosts_1001CommentLike);
} //-----------------------------------------------------------------------------------
//mainPost_1001 대댓글 LIKE / DISLIKE 
//-----------------------------------------------------------------------------------


function APImainPosts_1001CommentByCommentsLike(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/mainPosts_1001/mainPosts_1001CommentByCommentsLike', {
    data
  }, {
    withCredentials: true
  });
}

function* sagaMainPosts_1001CommentByCommentsLike(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(APImainPosts_1001CommentByCommentsLike, action.data);
    console.log('mainPosts_1001CommentByComments=>', action.data.mainPosts_1001CommentByComments);
    action.data.mainPosts_1001CommentByComments.map((v, i) => {
      if (v.byCommentId === action.data.byCommentId) {
        action.data.mainPosts_1001CommentByComments[i] = _objectSpread(_objectSpread({}, action.data.mainPosts_1001CommentByComments[i]), {}, {
          clickedComponent: action.data.byCommentId,
          flag: 'Y',
          likeDislikeflag: action.data.flag
        });
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_SUCCESS"],
      data: action.data.mainPosts_1001CommentByComments
    });
  } catch (e) {
    console.error(e);
    alert('error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_FAILURE"],
      error: e
    });
  }
}

function* watchMainPosts_1001CommentByCommentsLike() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__["MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_REQUEST"], sagaMainPosts_1001CommentByCommentsLike);
} //-----------------------------------------------------------------------------------


function* mainPosts_1001Saga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchMainPosts_1001), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchMainPosts_1001Detail), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchMainPosts_1001CommentList), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchMainPosts_1001CommentInsert), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchMainPosts_1001CommentLike), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchMainPosts_1001CommentByCommentList), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchMainPosts_1001CommentByCommentInsert), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchMainPosts_1001CommentByCommentsLike), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchMainPosts_1001Like)]);
}

/***/ }),

/***/ "./sagas/studySaga.js":
/*!****************************!*\
  !*** ./sagas/studySaga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return studySaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/count */ "./reducers/count.js");



function* sagaPlus(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_count__WEBPACK_IMPORTED_MODULE_1__["COUNT_PLUS_SUCCESS"],
      data: 1
    });
  } catch (e) {
    console.error(e);
    alert('사가 에러');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_count__WEBPACK_IMPORTED_MODULE_1__["COUNT_PLUS_FAILURE"],
      error: e
    });
  }
}

function* watchSagaPlus() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_count__WEBPACK_IMPORTED_MODULE_1__["COUNT_PLUS_REQUEST"], sagaPlus);
}

function* sagaMinus(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_count__WEBPACK_IMPORTED_MODULE_1__["COUNT_MINUS_SUCCESS"],
      data: 1
    });
  } catch (e) {
    console.error(e);
    alert('사가 에러');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_count__WEBPACK_IMPORTED_MODULE_1__["COUNT_MINUS_FAILURE"],
      error: e
    });
  }
}

function* watchMinus() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_count__WEBPACK_IMPORTED_MODULE_1__["COUNT_MINUS_REQUEST"], sagaMinus);
}

function* studySaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSagaPlus), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchMinus)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd-mobile":
/*!******************************!*\
  !*** external "antd-mobile" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcExheU91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hdXRoLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2NvdW50LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2VtcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMS5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9hdXRoU2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9lbXBMaXN0U2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9tYWluUG9zdHNfMTAwMVNhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvc3R1ZHlTYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkLW1vYmlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqd3QtZGVjb2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiQXBwTGF5T3V0IiwiY2hpbGRyZW4iLCJkdW1teUxpc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlckluZm8iLCJqb2luZWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsInVzZUVmZmVjdCIsIlJvdXRlciIsInB1c2giLCJsb2dPdXQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0eXBlIiwiTE9HT1VUX1JFUVVFU1QiLCJpc0NsaWNrZWQiLCJzZXRJc0NsaWNrZWQiLCJ1c2VTdGF0ZSIsImlucHV0RWwiLCJ1c2VSZWYiLCJjYXRlcmdvcmlMaXN0IiwiY2xvc2VDYXRlcmdvcmlMaXN0IiwicGF0aG5hbWUiLCJxdWVyeSIsIm5vd1BhZ2UiLCJ3aWR0aCIsIm1hcCIsInYiLCJpIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc29sZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsInByb3BzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImVyciIsInJlbmRlciIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsImRhdGEiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIlByb2plY3QwMV9Ub2RvTGlzdCIsImNvbnRleHQiLCJzdG9yZSIsImdldFN0YXRlIiwiaXNTZXJ2ZXIiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwibG9nIiwiYXhpb3MiLCJkZWZhdWx0cyIsIkNvb2tpZSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJyb290U2FnYSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJ3aXRoUmVkdXgiLCJpbml0aWFsU3RhdGUiLCJpc0pvaW5uZyIsImlzTG9naW5pbmciLCJKT0lOX1JFUVVFU1QiLCJKT0lOX1NVQ0NFU1MiLCJKT0lOX0ZBSUxVUkUiLCJMT0dJTl9SRVFVRVNUIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUxVUkUiLCJMT0FEX0xPR0lOX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9HT1VUX1NVQ0NFU1MiLCJMT0dPVVRfRkFJTFVSRSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIm51bWJlciIsIkNPVU5UX1BMVVNfUkVRVUVTVCIsIkNPVU5UX1BMVVNfU1VDQ0VTUyIsIkNPVU5UX1BMVVNfRkFJTFVSRSIsIkNPVU5UX01JTlVTX1JFUVVFU1QiLCJDT1VOVF9NSU5VU19TVUNDRVNTIiwiQ09VTlRfTUlOVVNfRkFJTFVSRSIsImVtcGxpc3QiLCJpbWFnZVBhdGhzIiwiRU1QX0xJU1RfUkVRVUVTVCIsIkVNUF9MSVNUX1NVQ0NFU1MiLCJFTVBfTElTVF9GQUlMVVJFIiwiRU1QX0lOU0VSVF9SRVFVRVNUIiwiRU1QX0lOU0VSVF9TVUNDRVNTIiwiRU1QX0lOU0VSVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiREVUQUlMX0lORk9fUkVRVUVTVCIsIkRFVEFJTF9JTkZPX1NVQ0NFU1MiLCJERVRBSUxfSU5GT19GQUlMVVJFIiwiVEVTVF9SRVFVRVNUIiwiVEVTVF9TVUNDRVNTIiwiVEVTVF9GQUlMVVJFIiwibGVuZ3RoIiwiZm9yRWFjaCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY291bnQiLCJlbXAiLCJtYWluUG9zdHNfMTAwMSIsIm1haW5Qb3N0c18xMDAxSW5mbyIsIm1haW5Qb3N0c18xMDAxQ29tbWVudHMiLCJtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzIiwibGlrZUlzQ2xpY2tlZCIsImNsaWNrQ29tbWVudElkIiwiY29tbWVudEJ5Q29tbWVudENvdW50IiwiY29tbWVudEJ5Q29tbWVudEluc2VydENvbW1lbnRJZCIsIk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCIsIk1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QiLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVCIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfUkVRVUVTVCIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9SRVFVRVNUIiwiTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX1JFUVVFU1QiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfRkFJTFVSRSIsImFycmF5IiwiY29tbWVudElkIiwiQVBJTG9hZFVzZXIiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzYWdhTG9hZFVzZXIiLCJjYWxsIiwicHV0IiwibmljayIsIndhdGNoTG9hZFVzZXIiLCJ0YWtlRXZlcnkiLCJBUElKb2luIiwicG9zdCIsInNhZ2FKb2luIiwid2F0Y2hKb2luIiwidGFrZUxhdGVzdCIsIkFQSUxvZ091dCIsInNhZ2FMb2dPdXQiLCJhbGVydCIsIndhdGNoTG9nT3V0IiwiQVBJTG9naW4iLCJzYWdhTG9naW4iLCJ0b2tlbiIsImRlY29kZWQiLCJqd3REZUNvZGVyIiwid2F0Y2hMb2dpbiIsImF1dGhTYWdhIiwiZm9yayIsIkFQSWVtcExpc3QiLCJzYWdhRW1wTGlzdCIsIndhdGNoZW1wTGlzdCIsIkFQSWVtcEluc2VydCIsInNhZ2FFbXBJbnNlcnQiLCJ3YXRjaEluc2VydEVtcCIsIkFQSVVwbG9hZEltYWdlIiwiZm9ybURhdGEiLCJ1cExvYWRJbWFnZXMiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIkFQSXRlc3QiLCJzYWdhVGVzdCIsIndhdGNoVGVzdCIsImVtcExpc3RTYWdhIiwiYmFzZVVSTCIsInN0dWR5U2FnYSIsIm1haW5Qb3N0c18xMDAxU2FnYSIsIkFQSW1haW5Qb3N0c18xMDAxTGlzdCIsInNhZ2FNYWluUG9zdHNfMTAwMUxpc3QiLCJ3YXRjaE1haW5Qb3N0c18xMDAxIiwiQVBJbWFpblBvc3RzXzEwMDFEZXRhaWwiLCJzYWdhTWFpblBvc3RzXzEwMDFEZXRhaWwiLCJ3YXRjaE1haW5Qb3N0c18xMDAxRGV0YWlsIiwiQVBJbWFpblBvc3RzXzEwMDFDb21tZW50TGlzdCIsInNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRMaXN0Iiwid2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRMaXN0IiwiQVBJbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50TGlzdCIsInNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRMaXN0Iiwid2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRMaXN0IiwiQVBJbWFpblBvc3RzXzEwMDFDb21tZW50SW5zZXJ0Iiwic2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudEluc2VydCIsImtrIiwid2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRJbnNlcnQiLCJBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQiLCJzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50SW5zZXJ0Iiwid2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQiLCJBUEltYWluUG9zdHNfMTAwMUxpa2UiLCJzYWdhTWFpblBvc3RzXzEwMDFMaWtlIiwiZmxhZyIsImdvb2QiLCJwYXJzZUludCIsImJhZCIsImNsaWNrZWQiLCJ3YXRjaE1haW5Qb3N0c18xMDAxTGlrZSIsIkFQSW1haW5Qb3N0c18xMDAxQ29tbWVudExpa2UiLCJzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50TGlrZSIsImNvbW1lbnRpZCIsImNsaWNrZWRDb21wb25lbnQiLCJsaWtlRGlzbGlrZWZsYWciLCJ3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudExpa2UiLCJBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzTGlrZSIsInNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzTGlrZSIsImJ5Q29tbWVudElkIiwid2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzTGlrZSIsInNhZ2FQbHVzIiwid2F0Y2hTYWdhUGx1cyIsInNhZ2FNaW51cyIsIndhdGNoTWludXMiLCJsb2dnZXJNaWRkbGV3YXJlIiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztR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Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJcclxuaW1wb3J0IHt1c2VDYWxsYmFjayx1c2VTdGF0ZSx1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtSb3csQ29sLEJ1dHRvbn0gZnJvbSAgJ2FudGQnOyBcclxuaW1wb3J0IHsgUmVzdWx0LCBJY29uLCBXaGl0ZVNwYWNlIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInOyBcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICAgICAgIExPR09VVF9SRVFVRVNULFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL2F1dGgnO1xyXG5cclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcblxyXG5jb25zdCBBcHBMYXlPdXQgPSAoe2NoaWxkcmVufSkgPT57XHJcbiAgICBjb25zdCBkdW1teUxpc3QgPSBbJ+y5tO2FjOy9lOumrDAxJywn7Lm07YWM7L2U66asMDInLCfsubTthYzsvZTrpqwwMycsJ+y5tO2FjOy9lOumrDA0Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNSddOyBcclxuICAgXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gICAgY29uc3Qge3VzZXJJbmZvLCBqb2luZWR9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuYXV0aCk7IFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICAvL+uhnOq3uCDslYTsm4Mg7ZuEIOuplOyduCDtjpjsnbTsp4DroZwg7J2064+ZXHJcbiAgICAgICAgaWYoIXVzZXJJbmZvKXtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTsgXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sW3VzZXJJbmZvXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGxvZ091dCA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HT1VUX1JFUVVFU1QsIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sW3VzZXJJbmZvXSk7IFxyXG5cclxuICAgIGNvbnN0IFtpc0NsaWNrZWQsc2V0SXNDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcbiAgICBjb25zdCBpbnB1dEVsID0gdXNlUmVmKG51bGwpOyBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGNhdGVyZ29yaUxpc3QgPSAoKSA9PntcclxuICAgICAgICAgIHNldElzQ2xpY2tlZCghaXNDbGlja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZUNhdGVyZ29yaUxpc3QgPSAoKSA9PntcclxuICAgICAgICBzZXRJc0NsaWNrZWQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaHR0cHM6Ly92ZWxvZy5pby9AamFuZ2h5b2luL0pvYnNob3BwZXItcHJvamVjdC1OZXh0SlMlRUMlOTclOTAlRUMlODQlOUMtc3R5bGVkLWNvbXBvbmVudHMtJUVDJTgyJUFDJUVDJTlBJUE5LWh3anpzNDIzeXdcclxuICAgIHJldHVybihcclxuXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0+IFxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZ1bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiIG9uQ2xpY2s9e2NhdGVyZ29yaUxpc3R9PuuplOuJtDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCI+PExpbmsgaHJlZj17Jy8nfSA+PGE+SG9tZTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL2Fib3V0J30gPjxhPkFib3V0PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiPjxMaW5rIGhyZWY9eycvY291bnQnfSA+PGE+Q291bnQ8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvICYmIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiPjxMaW5rIGhyZWY9eycvZW1wJ30gPjxhPmVtcDwvYT48L0xpbms+PC9saT4gICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHshdXNlckluZm8gJiYgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCI+PExpbmsgaHJlZj17Jy9qb2luJ30gPjxhPu2ajOybkOqwgOyehTwvYT48L0xpbms+PC9saT4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHshdXNlckluZm8gJiYgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCI+PExpbmsgaHJlZj17Jy9sb2dpbid9ID48YT7roZzqt7jsnbg8L2E+PC9MaW5rPjwvbGk+ICB9XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvICYmICA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL3VzZXJJbmZvJ30gPjxhPu2ajOybkOygleuztDwvYT48L0xpbms+PC9saT4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VySW5mbyAmJiAgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCI+PExpbmsgaHJlZj17Jy9kZXRhaWxQYWdlJ30gPjxhPuyDgeyEuO2OmOydtOyngDwvYT48L0xpbms+PC9saT4gfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiPjxMaW5rIGhyZWY9e3twYXRobmFtZTonL21haW5Qb3N0c18xMDAxJyxxdWVyeTp7bm93UGFnZToxfX19ID48YT7rqZTsnbgxMDAxPC9hPjwvTGluaz48L2xpPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvICYmICAgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCIgb25DbGljaz17bG9nT3V0fSA+66Gc6re47JWE7JuDPC9saT59XHJcbiAgICAgICAgICAgICAgICAgICAgezxsaSBjbGFzc05hbWU9XCJuYXZsaVwiPjxMaW5rIGhyZWY9eycvdGVzdCd9ID48YT50ZXN0PC9hPjwvTGluaz48L2xpPiAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIHs8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL3Rlc3QwMid9ID48YT5tZW1vPC9hPjwvTGluaz48L2xpPiAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIHs8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL21vdmllJ30gPjxhPm1vdmllPC9hPjwvTGluaz48L2xpPiAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIHs8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL3VzZUNhbGxiYWNrJ30gPjxhPnVzZUNhbGxiYWNrPC9hPjwvTGluaz48L2xpPiAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIHs8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL3VzZUVmZmVjdCd9ID48YT51c2VFZmZlY3Q8L2E+PC9MaW5rPjwvbGk+ICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHs8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL2lucHV0Qm94UGFyZW50J30gPjxhPmlucHV0Qm94UGFyZW50PC9hPjwvTGluaz48L2xpPiAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlbmF2XCIgc3R5bGU9e3t3aWR0aCA6IGlzQ2xpY2tlZD8gXCI0MCVcIjpcIjBcIn19PlxyXG4gICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbG9zZWJ0blwiIG9uQ2xpY2s9e2Nsb3NlQ2F0ZXJnb3JpTGlzdH0+eDwvYT5cclxuICAgICAgICAgICAgICAge2R1bW15TGlzdC5tYXAoKHYsaSk9PihcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2Fib3V0J30ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZUNhdGVyZ29yaUxpc3R9ID57dn08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz4gXHJcbiAgICAgICAgKTsgXHJcblxyXG59XHJcblxyXG5BcHBMYXlPdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW4gOiBQcm9wVHlwZXMubm9kZSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlPdXQ7ICIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgIFwiZGVmYXVsdFwiOiBvYmpcclxuICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XHJcblxyXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XHJcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xyXG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcclxuICAgIHJldHVybiBjYWNoZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gY2FjaGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xyXG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcclxuXHJcbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XHJcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XHJcbiAgfVxyXG5cclxuICB2YXIgbmV3T2JqID0ge307XHJcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xyXG5cclxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xyXG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcclxuXHJcbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XHJcblxyXG4gIGlmIChjYWNoZSkge1xyXG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XHJcblxyXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gX3R5cGVvZihvYmopO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcclxuIiwiaW1wb3J0IEFwcExheU91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheU91dCc7XHJcbmltcG9ydCBIZWFkICAgICAgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnOyBcclxuXHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJzsgXHJcbmltcG9ydCAgJy4uL0NTUy9hbnRkTW9iaWxlLmNzcyc7XHJcbmltcG9ydCAncmVhY3QtZHJhZnQtd3lzaXd5Zy9kaXN0L3JlYWN0LWRyYWZ0LXd5c2l3eWcuY3NzJztcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHJlZHVjZXIgIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnOyBcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9hdXRoJztcclxuXHJcblxyXG5cclxuXHJcbi8v7ZSE66Gc7KCd7Yq4IOqzoOyglSDti4BcclxuY29uc3QgUHJvamVjdDAxX1RvZG9MaXN0ID0gKHtDb21wb25lbnQscGFnZVByb3BzfSkgPT57XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+VG9kb0xpc3Q8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjE2LjIvYW50ZC5taW4uY3NzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC1tb2JpbGUvMi4zLjMvYW50ZC1tb2JpbGUuY3NzXCIgaW50ZWdyaXR5PVwic2hhMjU2LXVaYk5zcWdsc0h5YXBpWTZObGo4bzlrQW1saVkvcldOQ1RxdGhqSUhJWHc9XCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPEFwcExheU91dD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0FwcExheU91dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7IFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5Qcm9qZWN0MDFfVG9kb0xpc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ilrIgbmV4dOyXkOyEnCDsoJzqs7XtlbTspIxcclxuICBjb25zdCB7IGN0eCxDb21wb25lbnQgfSA9IGNvbnRleHQ7IFxyXG4gIGxldCBwYWdlUHJvcHMgPXt9OyBcclxuICBjb25zdCBzdGF0ZSA9IGN0eC5zdG9yZS5nZXRTdGF0ZSgpOyAgICAvL+2UhOuhnOygne2KuCDsoITssrQgc3RhdOulvCDqsIDsoLgg7JisIOyImCDsnojri6QuIFxyXG4gIGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgISFjb250ZXh0LnJlcSB8fCAhIWNvbnRleHQuY3R4LnJlcTtcclxuICAvL1NTUuuhnCDsoJHsho1cclxuXHJcbiAgY29uc3QgY29va2llID0gaXNTZXJ2ZXIgPyBjdHgucmVxLmhlYWRlcnMuY29va2llIDogJyc7IFxyXG5cclxuICBcclxuICAvL+q3uOuDpSDsnbzrsJgg7KCR7IaN7J6QXHJcbiAgaWYoaXNTZXJ2ZXIpe1xyXG4gICBcclxuICAgIGNvbnNvbGUubG9nKCdoZWxsbz09PicsIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llKTsgXHJcblxyXG4gIH1cclxuXHJcbiAgLy/roZzqt7jsnbgg7KCR7IaN7J6QXHJcbiAgaWYoaXNTZXJ2ZXIgJiYgY29va2llKXtcclxuICAgICAgLy/tgbTrnbzsnbTslrgg7ZmY6rK97JeQ7ISc64qUIOu4jOudvOyasOyggOqwgCDsv6DtgqTrpbwg64Sj7Ja07KO86rOgLCBcclxuICAgICAgLy9TU1Lsnbwg65WM64qUIOyasOumrOqwgCDsp4HsoJEg64Sj7Ja07KSY7JW8IO2VnOuLpC4gXHJcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llOyBcclxuICB9XHJcblxyXG4gIC8vKOyDiOuhnOqzoOy5qCnroZzqt7jsnbgg7KCV67O0IOycoOyngFxyXG4gIGlmKCFzdGF0ZS5hdXRoLnVzZXJJbmZvKXtcclxuICAgICAgY3R4LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyl7XHJcbiAgcGFnZVByb3BzID0gIGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTsgXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiB7cGFnZVByb3BzfTsgXHJcblxyXG5cclxufVxyXG5cclxuXHJcblByb2plY3QwMV9Ub2RvTGlzdC5wcm9wVHlwZXMgPSB7IFxyXG4gIENvbXBvbmVudDpQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCwgXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7IFxyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTsgLy8g66+465Ok7Juo7Ja065Ok7J2EIOuEo+ycvOuptCDrkJzri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wcm9kdWN0aW9uXHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuXHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICAgICAgICAgICAgICAvL3JlYWN07JeQ7IScIHJlZHV466W8IOyCrOyaqe2VmOq4sCDsnITtlbTshJzripQgY3JlYXRlU3RvcmXroZwgc3RvcmXrpbwg7IOd7ISx7ZW0IOyjvOyWtOyVvCDtlZzri6QuIFxyXG4gICAgICAgICAgICAgICAgLy9yZWR1eC1uZXh0LXdhcHBlciA2IOuyhOyghCDrtoDthLDripQgUHJvdmlkZXIgc3RvcmU9e3N0b3JlfeulvCDrgrTrtoDsoIHsnLzroZwg7ZW0IOykgOuLpC4gXHJcblxyXG4gICAvL3NhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7ICDsnbTsg4jrgbzrlYzrrLjsl5AgUkVRVUVTVCwgU1VDQ0VTUyAy67KI7JSpIOyLpO2WieuQqCDjhYXjhYIgXHJcbiAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgcmV0dXJuIHN0b3JlO1xyXG5cclxufVxyXG4gIFxyXG4vL2NvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7ZGVidWc6ICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J30pOyBcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtkZWJ1ZzogIGZhbHNlfSk7IFxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChQcm9qZWN0MDFfVG9kb0xpc3QpOyAiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuXHJcblxyXG5leHBvcnQgY29uc3QgIGluaXRpYWxTdGF0ZSA9IHtcclxuXHJcbiAgICBpc0pvaW5uZyA6IGZhbHNlLCAvL+2ajOybkOqwgOyehSDsi5zrj4TspJEgXHJcbiAgICBqb2luZWQgICA6ICcnICAgLCAvL+2ajOybkOqwgOyehSDshLHqs7UgXHJcblxyXG4gICAgaXNMb2dpbmluZyA6IGZhbHNlLCAvL+uhnOq3uOyduCDsi5zrj4Qg7KSRXHJcbiAgICB1c2VySW5mbyA6IG51bGwsICAgICAgLy/sgqzsmqnsnpAg7KCV67O0XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBKT0lOX1JFUVVFU1QgPSAnSk9JTl9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBKT0lOX1NVQ0NFU1MgPSAnSk9JTl9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBKT0lOX0ZBSUxVUkUgPSAnSk9JTl9GQUlMVVJFJzsgXHJcblxyXG5leHBvcnQgY29uc3QgTE9HSU5fUkVRVUVTVCA9ICdMT0dJTl9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBMT0dJTl9TVUNDRVNTID0gJ0xPR0lOX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IExPR0lOX0ZBSUxVUkUgPSAnTE9HSU5fRkFJTFVSRSc7IFxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTE9HSU5fUkVRVUVTVCA9ICdMT0FEX0xPR0lOX1JFUVVFU1QnOyBcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJzsgXHJcblxyXG5leHBvcnQgY29uc3QgTE9HT1VUX1JFUVVFU1QgPSAnTE9HT1VUX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IExPR09VVF9TVUNDRVNTID0gJ0xPR09VVF9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBMT0dPVVRfRkFJTFVSRSA9ICdMT0dPVVRfRkFJTFVSRSc7IFxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PntcclxuXHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG5cclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG5cclxuLy/tmozsm5DqsIDsnoVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBKT0lOX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzSm9pbm5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBKT0lOX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzSm9pbm5nID0gZmFsc2U7IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuam9pbmVkICAgPSAn7ZqM7JuQ6rCA7J6FIOyEseqztSEnOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBKT0lOX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy/roZzqt7jsnbgg7LC9IO2ZlOuptOyghO2ZmFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIExPQURfTE9HSU5fUkVRVUVTVCA6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmpvaW5lZCA9Jyc7ICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8v66Gc6re47J24XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgTE9HSU5fUkVRVUVTVCA6e1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dpbmluZyA9IHRydWU7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR0lOX1NVQ0NFU1MgOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9naW5pbmcgPSBmYWxzZTsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HSU5fRkFJTFVSRSA6e1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8v66Gc6re47J24IOygleuztCDsnKDsp4AgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1QgOntcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUyA6e1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTsgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkUgOntcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8v66Gc6re47JWE7JuDIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIExPR09VVF9SRVFVRVNUIDp7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HT1VUX1NVQ0NFU1MgOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVzZXJJbmZvID1udWxsOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dPVVRfRkFJTFVSRSA6e1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0IDogIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7IFxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHJcbiAgICAgICAgbnVtYmVyIDogMCxcclxufSBcclxuXHJcbmV4cG9ydCBjb25zdCBDT1VOVF9QTFVTX1JFUVVFU1QgPSAnQ09VTlRfUExVU19SRVFVRVNUJzsgLy8gY291bnQgMeydhCDspp3qsIDsi5ztgqwg7JWh7IWYIO2DgOyeheydtOuLpC5cclxuZXhwb3J0IGNvbnN0IENPVU5UX1BMVVNfU1VDQ0VTUyA9ICdDT1VOVF9QTFVTX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IENPVU5UX1BMVVNfRkFJTFVSRSA9ICdDT1VOVF9QTFVTX0ZBSUxVUkUnOyBcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDT1VOVF9NSU5VU19SRVFVRVNUID0gJ0NPVU5UX01JTlVTX1JFUVVFU1QnOyAvLyBjb3VudCAx7J2EIOymneqwgOyLnO2CrCDslaHshZgg7YOA7J6F7J2064ukLlxyXG5leHBvcnQgY29uc3QgQ09VTlRfTUlOVVNfU1VDQ0VTUyA9ICdDT1VOVF9NSU5VU19TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBDT1VOVF9NSU5VU19GQUlMVVJFID0gJ0NPVU5UX01JTlVTX0ZBSUxVUkUnOyBcclxuXHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGNvdW50TWludXNBY3Rpb24gPSAoKSA9Pih7XHJcbi8vICAgICB0eXBlOkNPVU5UX01JTlVTLFxyXG4vLyB9KTtcclxuXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PntcclxuXHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcblxyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQ09VTlRfUExVU19SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ09VTlRfUExVU19TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5udW1iZXIgPSBzdGF0ZS5udW1iZXIgKyBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDT1VOVF9NSU5VU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubnVtYmVyID0gc3RhdGUubnVtYmVyIC0gYWN0aW9uLmRhdGE7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0IDogIGJyZWFrOyBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxufTsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCAgaW5pdGlhbFN0YXRlID0ge1xyXG5cclxuICAgIGVtcGxpc3QgOiBbXSwgXHJcbiAgICBpbWFnZVBhdGhzIDogW10sXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRU1QX0xJU1RfUkVRVUVTVCA9ICdFTVBfTElTVF9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBFTVBfTElTVF9TVUNDRVNTID0gJ0VNUF9MSVNUX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IEVNUF9MSVNUX0ZBSUxVUkUgPSAnRU1QX0xJU1RfRkFJTFVSRSc7IFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBFTVBfSU5TRVJUX1JFUVVFU1QgPSAnRU1QX0lOU0VSVF9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBFTVBfSU5TRVJUX1NVQ0NFU1MgPSAnRU1QX0lOU0VSVF9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBFTVBfSU5TRVJUX0ZBSUxVUkUgPSAnRU1QX0lOU0VSVF9GQUlMVVJFJzsgXHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUPVwiVVBMT0FEX0lNQUdFU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1M9XCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRT1cIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFVEFJTF9JTkZPX1JFUVVFU1QgPSdERVRBSUxfSU5GT19SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBERVRBSUxfSU5GT19TVUNDRVNTID0nREVUQUlMX0lORk9fU1VDQ0VTUyc7IFxyXG5leHBvcnQgY29uc3QgREVUQUlMX0lORk9fRkFJTFVSRSA9J0RFVEFJTF9JTkZPX0ZBSUxVUkUnOyBcclxuXHJcbmV4cG9ydCBjb25zdCBURVNUX1JFUVVFU1QgPSAnVEVTVF9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBURVNUX1NVQ0NFU1MgPSAnVEVTVF9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBURVNUX0ZBSUxVUkUgPSAnVEVTVF9GQUlMVVJFJzsgXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PntcclxuXHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG5cclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG5cclxuICAgICAgICAgICAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIEVNUF9MSVNUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgRU1QX0xJU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZW1wbGlzdC5sZW5ndGg9MDsgXHJcbiAgICAgICAgICAgICAgICAvL+uwsOyXtCDstIjquLDtmZRcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuZW1wbGlzdC5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBFTVBfTElTVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocy5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy/qsozsi5zquIAg7J6R7ISxIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBFTVBfSU5TRVJUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgRU1QX0lOU0VSVF9TVUNDRVNTOiB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBFTVBfSU5TRVJUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcbi8v6rKM7Iuc6riAIOyDgeyEuCDtjpjsnbTsp4Ag6rCA7KC47Jik6riwIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBERVRBSUxfSU5GT19SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjYXNlIERFVEFJTF9JTkZPX1NVQ0NFU1M6IHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIERFVEFJTF9JTkZPX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0IDogYnJlYWs7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTsgXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7IC8vIOyXrOufrCDrpqzrk4DshJzrk6TsnYQg7ZWY64KY66GcIO2VqeyzkOykgOuLpC5cclxuaW1wb3J0IGNvdW50IGZyb20gJy4vY291bnQnO1xyXG5pbXBvcnQgZW1wIGZyb20gJy4vZW1wJztcclxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0IG1haW5Qb3N0c18xMDAxIGZyb20gJy4vbWFpblBvc3RzXzEwMDEnIFxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY291bnQsIC8vIOyXrOq4sOyXkCDri6Trpbgg66as65OA7ISc65Ok7J2EIOuNlCDsoIHsnLzrqbQg65Cc64ukIVxyXG4gICAgZW1wLFxyXG4gICAgYXV0aCwgXHJcbiAgICBtYWluUG9zdHNfMTAwMSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsgLy8gX2FwcC5qc+yXkOyEnCByZWR1Y2Vy66GcIOyCrOyaqeuQnOuLpCEiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuXHJcblxyXG5leHBvcnQgY29uc3QgIGluaXRpYWxTdGF0ZSA9IHtcclxuXHJcbiAgICBcclxuICAgIG1haW5Qb3N0c18xMDAxICAgICA6IFtdLCBcclxuICAgIG1haW5Qb3N0c18xMDAxSW5mbyA6IFt7fV0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+2VmCDsnbTqsoPrlYzrp6Qg66qH7Iuc6rCE7J2EIOuCoOugpCDrqLnsl4jripTsp4AuLiDslYTtgazrprQg7IOI7Jqw64uY7J20IO2VtOqysOuyleydhCDslYzroKTso7zsi6xcclxuICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudHMgOiBbXSxcclxuICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHM6W3t9XSwgIFxyXG4gICAgaW1hZ2VQYXRocyAgICAgICAgIDogW10sXHJcbiAgICBsaWtlSXNDbGlja2VkIDpudWxsLCBcclxuICAgIGNsaWNrQ29tbWVudElkOm51bGwsIFxyXG4gICAgY29tbWVudEJ5Q29tbWVudENvdW50OjAsICAgICAgICAgICAgIC8v64yA64yT6riAIOyeheugpSDtm4Qg64yA64yT6riAIOyIq+yekCDrs4Dqsr0gXHJcbiAgICBjb21tZW50QnlDb21tZW50SW5zZXJ0Q29tbWVudElkOm51bGwsLy/slrTrlqQg64yT6riA7JeQIOuMgOuMk+q4gOydhCDri6zslZjripTsp4Ag7JWM6riwIOychO2VnCBmbGFnIOqwklxyXG5cclxuXHJcbn1cclxuXHJcbi8v6rKM7Iuc66y8IGxpc3RcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVD0nTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUz0nTUFJTlBPU1RTXzEwMDFfTElTVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRT0nTUFJTlBPU1RTXzEwMDFfTElTVF9GQUlMVVJFJztcclxuXHJcbi8v6rKM7Iuc66y8IOyDgeyEuCBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QgPSdNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19TVUNDRVNTID0nTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUyc7IFxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRSA9J01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkUnOyBcclxuXHJcbi8v6rKM7Iuc66y8IOuMk+q4gCBsaXN0IFxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1NVQ0NFU1MgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19GQUlMVVJFID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRTX0ZBSUxVUkUnOyBcclxuXHJcbi8v6rKM7Iuc66y8IOuMgOuMk+q4gCBsaXN0IFxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNUID0nTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1NVQ0NFU1MgPSdNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfRkFJTFVSRSA9J01BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfRkFJTFVSRSc7IFxyXG5cclxuLy/qsozsi5zrrLwg64yT6riAIGluc2VydCBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVCA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9TVUNDRVNTID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX0ZBSUxVUkUgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9GQUlMVVJFJzsgXHJcblxyXG4vL+qyjOyLnOusvCDrjIDrjJPquIAgaW5zZXJ0IFxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9SRVFVRVNUID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1NVQ0NFU1MgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfRkFJTFVSRSA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX0ZBSUxVUkUnOyBcclxuXHJcbi8v6rKM7Iuc6riAIGxpa2UgLyBkaXNsaWtlXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfUkVRVUVTVCA9ICdNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfU1VDQ0VTUyA9ICdNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfRkFJTFVSRSA9ICdNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfRkFJTFVSRSc7IFxyXG5cclxuLy/qsozsi5zquIAg64yT6riAIGxpa2UgLyBkaXNsaWtlIFxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1NVQ0NFU1MgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9GQUlMVVJFID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX0ZBSUxVUkUnOyBcclxuXHJcbi8v6rKM7Iuc6riAIOuMgOuMk+q4gCBsaWtlIC8gZGlzbGlrZSBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX1JFUVVFU1QgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9TVUNDRVNTID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfRkFJTFVSRSA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9GQUlMVVJFJzsgXHJcblxyXG5leHBvcnQgY29uc3QgVEVTVF9SRVFVRVNUID0gJ1RFU1RfUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgVEVTVF9TVUNDRVNTID0gJ1RFU1RfU1VDQ0VTUyc7IFxyXG5leHBvcnQgY29uc3QgVEVTVF9GQUlMVVJFID0gJ1RFU1RfRkFJTFVSRSc7IFxyXG5cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG5cclxuXHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcblxyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcblxyXG4vL+qyjOyLnOq4gCDrpqzsiqTtirgg6rCA7KC47Jik6riwICAgICAgIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIC8v67Cw7Je0IOy0iOq4sO2ZlFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMS5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vL+qyjOyLnOq4gCDrjJPquIAgSU5TRVJUICAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfU1VDQ0VTUzoge1xyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudHMubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudHMucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8v6rKM7Iuc6riAIOuMgOuMk+q4gCBJTlNFUlQgICBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNvbW1lbnRCeUNvbW1lbnRDb3VudCA9IGFjdGlvbi5kYXRhLmFycmF5Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNvbW1lbnRCeUNvbW1lbnRJbnNlcnRDb21tZW50SWQ9YWN0aW9uLmRhdGEucGFyYW0uY29tbWVudElkO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuYXJyYXkuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzLnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy/qsozsi5zquIAg7IOB7IS4IO2OmOydtOyngCDqsIDsoLjsmKTquLAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19TVUNDRVNTOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFJbmZvLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIC8v67Cw7Je0IOy0iOq4sO2ZlFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUluZm8ucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRToge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8v6rKM7Iuc6riAIOuMk+q4gCDqsIDsoLjsmKTquLAgIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfU1VDQ0VTUzogeyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFDb21tZW50cy5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8v6rKM7Iuc6riAIOuMgOuMk+q4gCDqsIDsoLjsmKTquLAgY2xpY2tDb21tZW50SWRcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9TVUNDRVNTOiB7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2xpY2tDb21tZW50SWQ9YWN0aW9uLmRhdGEucGFyYW0uY29tbWVudElkXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uZGF0YS5hcnJheS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vL+qyjOyLnOq4gCBsaWtlIC8gZGlzbGlrZSAgICAgICBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFJbmZvLmxlbmd0aCA9IDA7IFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuYXJyYXkuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUluZm8ucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8v6rKM7Iuc6riAIOuMk+q4gCBsaWtlIC8gZGlzbGlrZSAgICAgICBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudHMubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRzLnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vL+qyjOyLnOq4gCDrjIDrjJPquIAgbGlrZSAvIGRpc2xpa2UgICAgICAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzLmxlbmd0aCA9MDtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cy5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdCA6IGJyZWFrOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7IFxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgand0RGVDb2RlciBmcm9tICdqd3QtZGVjb2RlJ1xyXG5pbXBvcnQge2FsbCxmb3JrLHRha2VMYXRlc3QsdGFrZUV2ZXJ5ICxwdXQsIGRlbGF5LGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7IFxyXG5pbXBvcnQgXHJcbiAgICB7Sk9JTl9SRVFVRVNULFxyXG4gICAgIEpPSU5fU1VDQ0VTUyxcclxuICAgICBKT0lOX0ZBSUxVUkUsXHJcbiAgICAgTE9HSU5fUkVRVUVTVCxcclxuICAgICBMT0dJTl9TVUNDRVNTLFxyXG4gICAgIExPR0lOX0ZBSUxVUkUsIFxyXG4gICAgIExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgIExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgIExPR09VVF9SRVFVRVNULFxyXG4gICAgIExPR09VVF9TVUNDRVNTLFxyXG4gICAgIExPR09VVF9GQUlMVVJFLFxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvYXV0aCc7IFxyXG5cclxuXHJcbi8v7Jyg7KCA7KCV67O0IOycoOyngCDsgqzsnbTtgbQgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSUxvYWRVc2VyKCl7XHJcblxyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL2F1dGgvJyAsIHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pOyBcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FMb2FkVXNlcigpe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSUxvYWRVc2VyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpMT0FEX1VTRVJfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5uaWNrLCAgICAgICAgICAgXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjplLCBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KExPQURfVVNFUl9SRVFVRVNULHNhZ2FMb2FkVXNlcik7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcbi8v7ZqM7JuQ6rCA7J6FIOyCrOydtO2BtCBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJSm9pbihkYXRhKXtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhPT0+JyAsIGRhdGEpOyBcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9qb2luJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSk7IFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FKb2luKGFjdGlvbil7XHJcbiAgICBcclxuICAgIHRyeXtcclxuICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJSm9pbixhY3Rpb24uZGF0YSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Sk9JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQsXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkpPSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6ZSwgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoSm9pbigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChKT0lOX1JFUVVFU1Qsc2FnYUpvaW4pXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcbi8v66Gc6re47JWE7JuDIOyCrOydtO2BtFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUElMb2dPdXQoKXtcclxuXHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvYXV0aC9sb2dPdXQnLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTG9nT3V0KCl7XHJcblxyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gICB5aWVsZCBjYWxsKEFQSUxvZ091dCk7IFxyXG4gICAgXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7IFxyXG5cclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgYWxlcnQoJ+uhnOq3uOyVhOybgyDsl5Drn6wnKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dPVVRfRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOmUsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR09VVF9SRVFVRVNULHNhZ2FMb2dPdXQpOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8v66Gc6re47J24IOyCrOydtO2BtFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUElMb2dpbihkYXRhKXtcclxuXHJcbiAgICAvL2p3dCDroZzqt7jsnbhcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXV0aC9sb2dpbicse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG5cclxuICAgIC8vcGFzc3BvcnQgbG9jYWwg66Gc6re47J24XHJcbiAgICAvL3JldHVybiBheGlvcy5wb3N0KCcvYXV0aC9sb2dpbicsZGF0YSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FMb2dpbihhY3Rpb24pe1xyXG5cclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUElMb2dpbixhY3Rpb24uZGF0YSk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQnICwgcmVzdWx0LmRhdGEudG9rZW4pOyBcclxuICAgICAgICBjb25zdCBkZWNvZGVkID0gand0RGVDb2RlcihyZXN1bHQuZGF0YS50b2tlbik7IFxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGRlY29kZWQubmljayxcclxuICAgICAgICB9KTsgXHJcblxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICBhbGVydCgn66Gc6re47J24IOyXkOufrCcpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR0lOX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjplLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9HSU5fUkVRVUVTVCxzYWdhTG9naW4pOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBhdXRoU2FnYSgpe1xyXG5cclxuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hKb2luKSwgXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ2luKSwgXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyKSwgXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksIFxyXG4gICAgICAgIFxyXG4gICAgXSlcclxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHthbGwsZm9yayx0YWtlTGF0ZXN0LHRha2VFdmVyeSAscHV0LCBkZWxheSxjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnOyBcclxuaW1wb3J0IFxyXG4gICAge0VNUF9MSVNUX1JFUVVFU1QsXHJcbiAgICAgRU1QX0xJU1RfU1VDQ0VTUyxcclxuICAgICBFTVBfTElTVF9GQUlMVVJFLFxyXG4gICAgIEVNUF9JTlNFUlRfUkVRVUVTVCxcclxuICAgICBFTVBfSU5TRVJUX1NVQ0NFU1MsXHJcbiAgICAgRU1QX0lOU0VSVF9GQUlMVVJFLFxyXG4gICAgIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG5cclxuICAgIFRFU1RfUkVRVUVTVCxcclxuICAgIFRFU1RfU1VDQ0VTUyxcclxuICAgIFRFU1RfRkFJTFVSRVxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvZW1wJzsgXHJcblxyXG5cclxuXHJcbi8vRU1QIFNFTEVDVFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSWVtcExpc3QoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2VtcCcse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzYWdhRW1wTGlzdChhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEllbXBMaXN0LGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgIHlpZWxkICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkVNUF9MSVNUX1NVQ0NFU1MsIFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcbiAgICAgICAgYWxlcnQoJ2Vycm9yJywgZSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6RU1QX0xJU1RfRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOiBlLCBcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaGVtcExpc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRU1QX0xJU1RfUkVRVUVTVCxzYWdhRW1wTGlzdCk7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vL0VNUCBJTlNFUlQgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJZW1wSW5zZXJ0KGRhdGEpe1xyXG5cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvZW1wL2VtcEluc2VydCcse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiogc2FnYUVtcEluc2VydChhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEllbXBJbnNlcnQsYWN0aW9uLmRhdGEpOyBcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYScgLCByZXN1bHQpOyBcclxuICAgICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgICB0eXBlOkVNUF9JTlNFUlRfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICB9Y2F0Y2goZSl7XHJcbiAgXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgdHlwZTpFTVBfSU5TRVJUX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICAgIGVycm9yOiBlLCBcclxuICAgICAgICAgIH0pOyBcclxuICAgICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEluc2VydEVtcCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChFTVBfSU5TRVJUX1JFUVVFU1Qsc2FnYUVtcEluc2VydCk7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy8gRklMRSBVUExPQUQgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJVXBsb2FkSW1hZ2UoZm9ybURhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9lbXAvaW1hZ2VzJyxmb3JtRGF0YSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cExvYWRJbWFnZXMoYWN0aW9uKXtcclxuXHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJVXBsb2FkSW1hZ2UsYWN0aW9uLmRhdGEpOyBcclxuICAgICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgICB0eXBlOlVQTE9BRF9JTUFHRVNfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICB9Y2F0Y2goZSl7XHJcbiAgXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgdHlwZTpVUExPQURfSU1BR0VTX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICAgIGVycm9yOiBlLCBcclxuICAgICAgICAgIH0pOyBcclxuICAgICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULHVwTG9hZEltYWdlcyk7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL1RFU1RcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gQVBJdGVzdChkYXRhKXtcclxuXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2VtcC9zZWxlY3QnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FUZXN0KGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSXRlc3QsYWN0aW9uLmRhdGEpOyBcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYXNhZ2F0ZXMnICwgcmVzdWx0LmRhdGEpOyBcclxuICAgICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgICB0eXBlOlRFU1RfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICB9Y2F0Y2goZSl7XHJcbiAgXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgdHlwZTpURVNUX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICAgIGVycm9yOiBlLCBcclxuICAgICAgICAgIH0pOyBcclxuICAgICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFRlc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVEVTVF9SRVFVRVNULHNhZ2FUZXN0KTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGVtcExpc3RTYWdhKCl7XHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoZW1wTGlzdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hJbnNlcnRFbXApLCBcclxuICAgICAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSwgXHJcbiAgICAgICAgZm9yayh3YXRjaFRlc3QpLCBcclxuICAgICBdKVxyXG59IiwiaW1wb3J0IHthbGwsY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJzsgXHJcbmltcG9ydCBzdHVkeVNhZ2EgIGZyb20gJy4vc3R1ZHlTYWdhJztcclxuaW1wb3J0IGVtcExpc3RTYWdhIGZyb20gJy4vZW1wTGlzdFNhZ2EnXHJcbmltcG9ydCBtYWluUG9zdHNfMTAwMVNhZ2EgZnJvbSAnLi9tYWluUG9zdHNfMTAwMVNhZ2EnOyBcclxuaW1wb3J0IGF1dGhTYWdhIGZyb20gJy4vYXV0aFNhZ2EnOyBcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuLy9heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA5NS9hcGknOyBcclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vY2FwdGFpbnJ5YW4uZ29uZXRpcy5jb206MzA5NS9hcGknOyBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgY2FsbChzdHVkeVNhZ2EpLCBcclxuICAgICAgICBjYWxsKGVtcExpc3RTYWdhKSwgXHJcbiAgICAgICAgY2FsbChhdXRoU2FnYSksIFxyXG4gICAgICAgIGNhbGwobWFpblBvc3RzXzEwMDFTYWdhKSwgXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge2FsbCxmb3JrLHRha2VMYXRlc3QsdGFrZUV2ZXJ5ICxwdXQsIGRlbGF5LGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7IFxyXG5pbXBvcnQgXHJcbiAgICB7XHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNULFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkUsICAgIFxyXG5cclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNULFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRSxcclxuXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCwgXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfU1VDQ0VTUywgXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfRkFJTFVSRSwgXHJcblxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVCxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1NVQ0NFU1MsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9GQUlMVVJFLCBcclxuXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9TVUNDRVNTLFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX0ZBSUxVUkUsXHJcbiAgICAgICAgXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX0ZBSUxVUkUsXHJcblxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9SRVFVRVNULFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9TVUNDRVNTLFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9GQUlMVVJFLFxyXG5cclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1JFUVVFU1QsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9TVUNDRVNTLFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfRkFJTFVSRSwgXHJcblxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX1JFUVVFU1QsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfU1VDQ0VTUyxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9GQUlMVVJFLFxyXG5cclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxJzsgXHJcblxyXG5cclxuXHJcbi8vbWFpblBvc3RfMTAwMSDrpqzsiqTtirggXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJbWFpblBvc3RzXzEwMDFMaXN0KGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9tYWluUG9zdHNfMTAwMScse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTWFpblBvc3RzXzEwMDFMaXN0KGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSW1haW5Qb3N0c18xMDAxTGlzdCxhY3Rpb24uZGF0YSk7ICBcclxuXHJcbiAgICAgIHlpZWxkICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjogZSwgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hNYWluUG9zdHNfMTAwMSgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1Qsc2FnYU1haW5Qb3N0c18xMDAxTGlzdCk7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcbi8vbWFpblBvc3RfMTAwMSDsg4HshLjsoJXrs7QgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJbWFpblBvc3RzXzEwMDFEZXRhaWwoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxRGV0YWlsJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNYWluUG9zdHNfMTAwMURldGFpbChhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEltYWluUG9zdHNfMTAwMURldGFpbCxhY3Rpb24uZGF0YSk7IFxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19TVUNDRVNTLCBcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG4gICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjogZSwgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hNYWluUG9zdHNfMTAwMURldGFpbCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNULHNhZ2FNYWluUG9zdHNfMTAwMURldGFpbCk7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy9tYWluUG9zdF8xMDAxIOyDgeyEuCDsoJXrs7Qg64yT6riAIOumrOyKpO2KuFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudExpc3QoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxQ29tbWVudHMnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRMaXN0KGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudExpc3QsYWN0aW9uLmRhdGEpOyBcclxuICAgICAgeWllbGQgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudExpc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCxzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50TGlzdCk7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vL21haW5Qb3N0XzEwMDEg7IOB7IS4IOygleuztCDrjIDrjJPquIAg66as7Iqk7Yq4XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudExpc3QoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRMaXN0KGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudExpc3QsYWN0aW9uLmRhdGEpOyBcclxuICAgICAgeWllbGQgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9TVUNDRVNTLCBcclxuICAgICAgICAgICAgZGF0YTp7YXJyYXk6cmVzdWx0LmRhdGEsIHBhcmFtOmFjdGlvbi5kYXRhfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG4gICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOiBlLCBcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRMaXN0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCxzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50TGlzdCk7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9tYWluUG9zdF8xMDAxIOuMk+q4gCDsnoXroKVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRJbnNlcnQoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxQ29tbWVudEluc2VydCcse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogc2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudEluc2VydChhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRJbnNlcnQsYWN0aW9uLmRhdGEpOyBcclxuICAgICAgY29uc3QgYXJyYXk9W107IFxyXG4gICAgICByZXN1bHQuZGF0YS5tYXAoKHYsaSk9PntcclxuICAgICAgICByZXN1bHQuZGF0YVswXS5raz0nYWRkQ29tbWVudCc7IFxyXG4gICAgICAgIGFycmF5LnB1c2godik7IFxyXG4gICAgICB9KTsgXHJcbiAgICAgIFxyXG5cclxuICAgICAgeWllbGQgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9TVUNDRVNTLCBcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG4gICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOiBlLCBcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRJbnNlcnQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNULHNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRJbnNlcnQpOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vL21haW5Qb3N0XzEwMDEg64yA64yT6riAIOyeheugpVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudEluc2VydChkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50SW5zZXJ0Jyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50SW5zZXJ0KGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudEluc2VydCxhY3Rpb24uZGF0YSk7IFxyXG5cclxuICAgICAgeWllbGQgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOnthcnJheTpyZXN1bHQuZGF0YSwgcGFyYW06YWN0aW9uLmRhdGF9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcbiAgICAgICAgYWxlcnQoJ2Vycm9yJywgZSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOiBlLCBcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9SRVFVRVNULHNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQpOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy/qsozsi5zquIAgTElLRSAvIERJU0xJS0UgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJbWFpblBvc3RzXzEwMDFMaWtlKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMUxpa2UnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNYWluUG9zdHNfMTAwMUxpa2UoYWN0aW9uKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEltYWluUG9zdHNfMTAwMUxpa2UsYWN0aW9uLmRhdGEpOyBcclxuICAgICAgICBhY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUluZm9bMF0gPSB7Li4uYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFJbmZvWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnIDonWScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvb2QgOiBhY3Rpb24uZGF0YS5mbGFnID09PSAnZ29vZCcgPyBwYXJzZUludChhY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUluZm9bMF0uZ29vZCkgKyAxIDogYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFJbmZvWzBdLmdvb2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhZCAgOiBhY3Rpb24uZGF0YS5mbGFnID09PSAnYmFkJyAgPyBwYXJzZUludChhY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUluZm9bMF0uYmFkKSAgKyAxIDogYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFJbmZvWzBdLmJhZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZCA6IGFjdGlvbi5kYXRhLmZsYWcgPT09ICdnb29kJyA/ICdnb29kJyA6ICdiYWQnLCAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgIC8v7J2065+w7Iud7Jy866Gc64+EIOumrOuTgOyEnOyXkCDrjbDsnbTthLDrpbwg67O064K8IOyImCDsnojri6QuIFxyXG4gICAgICAgICAgICAvL2RhdGE6e2FycmF5IDogYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFDb21tZW50cywgdmFsdWVzIDphY3Rpb24uZGF0YS5jb21tZW50aWQgfSxcclxuICAgICAgICAgICAgZGF0YTp7YXJyYXk6YWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFJbmZvfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG4gICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1haW5Qb3N0c18xMDAxTGlrZSgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfUkVRVUVTVCxzYWdhTWFpblBvc3RzXzEwMDFMaWtlKTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vL21haW5Qb3N0XzEwMDEg64yT6riAIExJS0UgLyBESVNMSUtFIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudExpa2UoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxQ29tbWVudExpa2UnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRMaWtlKGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudExpa2UsYWN0aW9uLmRhdGEpOyBcclxuICAgICBcclxuICAgICAgICBhY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUNvbW1lbnRzLm1hcCgodixpKT0+e1xyXG4gICAgICAgICAgICBpZih2LmNvbW1lbnRJZCA9PT0gYWN0aW9uLmRhdGEuY29tbWVudGlkKXtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxQ29tbWVudHNbaV0gPSB7Li4uYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFDb21tZW50c1tpXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRDb21wb25lbnQ6YWN0aW9uLmRhdGEuY29tbWVudGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnOidZJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VEaXNsaWtlZmxhZzphY3Rpb24uZGF0YS5mbGFnfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIFxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9TVUNDRVNTLCBcclxuICAgICAgICAgICAgLy/snbTrn7Dsi53snLzroZzrj4Qg66as65OA7ISc7JeQIOuNsOydtO2EsOulvCDrs7Trgrwg7IiYIOyeiOuLpC4gXHJcbiAgICAgICAgICAgIC8vZGF0YTp7YXJyYXkgOiBhY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUNvbW1lbnRzLCB2YWx1ZXMgOmFjdGlvbi5kYXRhLmNvbW1lbnRpZCB9LFxyXG4gICAgICAgICAgICBkYXRhOmFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxQ29tbWVudHMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudExpa2UoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCxzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50TGlrZSk7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy9tYWluUG9zdF8xMDAxIOuMgOuMk+q4gCBMSUtFIC8gRElTTElLRSBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzTGlrZShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c0xpa2UnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzTGlrZShhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzTGlrZSxhY3Rpb24uZGF0YSk7IFxyXG4gICAgIGNvbnNvbGUubG9nKCdtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzPT4nLGFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMpOyBcclxuICAgICAgICBcclxuICAgICBhY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzLm1hcCgodixpKT0+e1xyXG4gICAgICAgIGlmKHYuYnlDb21tZW50SWQgPT09IGFjdGlvbi5kYXRhLmJ5Q29tbWVudElkKXtcclxuICAgICAgICAgICAgYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c1tpXSA9IHsuLi5hY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZENvbXBvbmVudDphY3Rpb24uZGF0YS5ieUNvbW1lbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWc6J1knLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZURpc2xpa2VmbGFnOmFjdGlvbi5kYXRhLmZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIHlpZWxkICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX1NVQ0NFU1MsIFxyXG4gICAgICAgICAgICBkYXRhOmFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNMaWtlKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX1JFUVVFU1Qsc2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNMaWtlKTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG1haW5Qb3N0c18xMDAxU2FnYSgpe1xyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaE1haW5Qb3N0c18xMDAxKSwgXHJcbiAgICAgICAgZm9yayh3YXRjaE1haW5Qb3N0c18xMDAxRGV0YWlsKSwgXHJcbiAgICAgICAgZm9yayh3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudExpc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50SW5zZXJ0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudExpa2UpLCBcclxuICAgICAgICBmb3JrKHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50TGlzdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQpLCBcclxuICAgICAgICBmb3JrKHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c0xpa2UpLCBcclxuICAgICAgICBmb3JrKHdhdGNoTWFpblBvc3RzXzEwMDFMaWtlKSxcclxuICAgICBdKVxyXG59IiwiaW1wb3J0IHthbGwsZm9yayx0YWtlTGF0ZXN0LHRha2VFdmVyeSAscHV0LCBkZWxheSxjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnOyBcclxuaW1wb3J0IHtDT1VOVF9QTFVTX1JFUVVFU1QsQ09VTlRfUExVU19TVUNDRVNTLCBDT1VOVF9QTFVTX0ZBSUxVUkUsIENPVU5UX01JTlVTX1JFUVVFU1QsIENPVU5UX01JTlVTX1NVQ0NFU1MsIENPVU5UX01JTlVTX0ZBSUxVUkV9IGZyb20gJy4uL3JlZHVjZXJzL2NvdW50JzsgXHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FQbHVzKGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpDT1VOVF9QTFVTX1NVQ0NFU1MsIFxyXG4gICAgICAgICAgICBkYXRhOiAxLCBcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcbiAgICAgICAgYWxlcnQoJ+yCrOqwgCDsl5Drn6wnKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpDT1VOVF9QTFVTX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjogZSwgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTYWdhUGx1cygpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KENPVU5UX1BMVVNfUkVRVUVTVCxzYWdhUGx1cyk7IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNaW51cyhhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgeWllbGQgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Q09VTlRfTUlOVVNfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgIGRhdGE6IDEsIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgn7IKs6rCAIOyXkOufrCcpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkNPVU5UX01JTlVTX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjogZSwgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hNaW51cygpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KENPVU5UX01JTlVTX1JFUVVFU1Qsc2FnYU1pbnVzKTsgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc3R1ZHlTYWdhKCl7XHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoU2FnYVBsdXMpLCBcclxuICAgICAgICBmb3JrKHdhdGNoTWludXMpLCBcclxuICAgICBdKVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC1tb2JpbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=