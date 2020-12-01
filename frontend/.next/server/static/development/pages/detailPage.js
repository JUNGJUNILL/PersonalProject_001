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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/mainPosts_1001/mainPosts_1001.js":
/*!*****************************************************!*\
  !*** ./components/mainPosts_1001/mainPosts_1001.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\components\\mainPosts_1001\\mainPosts_1001.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 14
    }
  }, "hello")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/mainPosts_1001/mainPosts_1001_commentByComments.js":
/*!***********************************************************************!*\
  !*** ./components/mainPosts_1001/mainPosts_1001_commentByComments.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilComponent/custumDateFormat */ "./utilComponent/custumDateFormat.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\components\\mainPosts_1001\\mainPosts_1001_commentByComments.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Comment1001ByComments = ({
  key,
  postFlag,
  nickName,
  postId,
  userInfo,
  commentId,
  byCommentId,
  comment,
  who,
  good,
  bad,
  createdDate
}) => {
  console.log('대댓글');
  return __jsx("div", {
    className: "divTableRow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "divTableCell02",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "\u2514\xA0", __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 28
    }
  }, who), " \xA0 ", __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 48
    }
  }, Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_1__["default"])(createdDate)), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 94
    }
  }), "\xA0\xA0\xA0\xA0", comment, __jsx("div", {
    style: {
      marginTop: "1%",
      display: "block",
      float: "right"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }), good, "\xA0\xA0\xA0", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }), bad, "\xA0\xA0\xA0", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Comment1001ByComments));

/***/ }),

/***/ "./components/mainPosts_1001/mainPosts_1001_comments.js":
/*!**************************************************************!*\
  !*** ./components/mainPosts_1001/mainPosts_1001_comments.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilComponent/custumDateFormat */ "./utilComponent/custumDateFormat.js");
/* harmony import */ var _mainPosts_1001_commentByComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainPosts_1001_commentByComments */ "./components/mainPosts_1001/mainPosts_1001_commentByComments.js");
/* harmony import */ var _mainPosts_1001_textArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainPosts_1001_textArea */ "./components/mainPosts_1001/mainPosts_1001_textArea.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\components\\mainPosts_1001\\mainPosts_1001_comments.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Comments1001 = ({
  postFlag,
  nickName,
  postId,
  userInfo,
  commentId,
  comment,
  who,
  flag,
  good,
  bad,
  createdDate,
  likeBtn,
  clickedComponent,
  likeDislikeflag,
  byCommentCount,
  commentByCommentList,
  mainPosts_1001CommentByComments,
  unfoldList
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    clickCommentId
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.mainPosts_1001);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  const blank_pattern = /^\s+|\s+&/g; //대댓글 입력 

  const insertComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((postFlag, postId, nickName, comment) => {
    if (comment.length === 0 || comment.replace(blank_pattern, '') === "") {
      alert('댓글을 입력해 주세요!');
      ref.current.focus();
      return;
    }

    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_6__["MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST"],
      data: {
        postFlag,
        nickName,
        postId,
        commentId,
        who: userInfo,
        comment
      }
    });
  }, [mainPosts_1001CommentByComments]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "divTableRow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, who), " \xA0 ", __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  }, Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_2__["default"])(createdDate)), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 87
    }
  }), comment, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 30
    }
  }), __jsx("a", {
    onClick: () => commentByCommentList(postFlag, nickName, postId, commentId, byCommentCount),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, byCommentCount === 0 ? `댓글달기` : `댓글[${byCommentCount}]`), " ", commentId, __jsx("div", {
    style: {
      marginTop: "1%",
      display: "block",
      float: "right"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["LikeTwoTone"], {
    onClick: () => likeBtn(commentId, flag, 'good'),
    twoToneColor: clickedComponent && likeDislikeflag === 'good' ? "#ff0000" : "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }), clickedComponent && likeDislikeflag === 'good' ? parseInt(good) + 1 : good, "\xA0\xA0\xA0\xA0", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["DislikeTwoTone"], {
    onClick: () => likeBtn(commentId, flag, 'bad'),
    twoToneColor: clickedComponent && likeDislikeflag === 'bad' ? "#ff0000" : "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }), clickedComponent && likeDislikeflag === 'bad' ? parseInt(bad) + 1 : bad, "\xA0\xA0\xA0\xA0", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  })))), unfoldList === 'unfold' && clickCommentId === commentId && mainPosts_1001CommentByComments && mainPosts_1001CommentByComments.map((v, i) => __jsx(_mainPosts_1001_commentByComments__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: i,
    postFlag: postFlag,
    nickName: nickName,
    postId: postId,
    userInfo: userInfo,
    commentId: commentId,
    byCommentId: v.byCommentId,
    comment: v.comment,
    who: v.who,
    good: v.good,
    bad: v.bad,
    createdDate: v.createdDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  })), unfoldList === 'unfold' && clickCommentId === commentId && byCommentCount > 0 && __jsx(_mainPosts_1001_textArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    postFlag: postFlag,
    nickName: nickName,
    postId: postId,
    userInfo: userInfo,
    insertComment: insertComment,
    insertClick: 'good',
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Comments1001));

/***/ }),

/***/ "./components/mainPosts_1001/mainPosts_1001_textArea.js":
/*!**************************************************************!*\
  !*** ./components/mainPosts_1001/mainPosts_1001_textArea.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\components\\mainPosts_1001\\mainPosts_1001_textArea.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //forwardRef
//https://ko.reactjs.org/docs/react-api.html#reactforwardref

const CommentTextArea = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(({
  postFlag,
  nickName,
  postId,
  userInfo,
  insertComment,
  insertClick
}, ref) => {
  // const ref = createRef(); 
  const {
    0: comment,
    1: setComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (insertClick === 'clicked') {
      setComment('');
    }
  }, [insertClick.length > 0]); //댓글 입력 textArea 

  const onChageComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    if (comment.length === 300) {
      alert('300자 이상 입력 할 수 없습니다.');
      return;
    }

    setComment(e.target.value);
  }, [comment]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("textarea", {
    value: comment,
    ref: ref,
    style: {
      width: "100%",
      height: "80px",
      marginTop: "3%"
    },
    onChange: onChageComment,
    placeholder: userInfo ? "댓글을 작성해 보세요!" : "로그인이 필요한 서비스 입니다.",
    readOnly: userInfo ? false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), __jsx("div", {
    style: {
      margin: "1%",
      display: "block",
      float: "left"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, comment ? comment.length : 0, " / 300"), userInfo && __jsx("div", {
    style: {
      margin: "1%",
      display: "block",
      float: "right"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    onClick: () => insertComment(postFlag, postId, nickName, comment),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "\uB313\uAE00\uB2EC\uAE30")));
});
/* harmony default export */ __webpack_exports__["default"] = (CommentTextArea);

/***/ }),

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
/* harmony import */ var _components_mainPosts_1001_mainPosts_1001__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/mainPosts_1001/mainPosts_1001 */ "./components/mainPosts_1001/mainPosts_1001.js");
/* harmony import */ var _components_mainPosts_1001_mainPosts_1001_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/mainPosts_1001/mainPosts_1001_comments */ "./components/mainPosts_1001/mainPosts_1001_comments.js");
/* harmony import */ var _components_mainPosts_1001_mainPosts_1001_textArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/mainPosts_1001/mainPosts_1001_textArea */ "./components/mainPosts_1001/mainPosts_1001_textArea.js");
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilComponent/custumDateFormat */ "./utilComponent/custumDateFormat.js");
var _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\pages\\detailPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const detailPage = ({
  nickName,
  postFlag,
  postId
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    mainPosts_1001Info,
    mainPosts_1001Comments,
    mainPosts_1001CommentByComments
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.mainPosts_1001);
  const {
    userInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.auth);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  const blank_pattern = /^\s+|\s+&/g;
  const {
    0: insertClick,
    1: setInsertClick
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: unfoldList,
    1: setUnfoldList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //댓글 리스트 
    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_5__["MAINPOSTS_1001_COMMENTS_REQUEST"],
      data: {
        postId,
        nickName,
        postFlag,
        who: userInfo
      }
    }); //상세 정보 

    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_5__["MAINPOSTS_1001_DETAIL_INFO_REQUEST"],
      data: {
        postId,
        nickName,
        postFlag
      }
    });
  }, []); //좋아요, 싫어요 버튼 

  const likeBtn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((commentid, flag, likeDislike) => {
    if (!userInfo) {
      alert('로그인이 필요한 서비스 입니다.');
      return;
    }

    if (flag === "Y") {
      alert('이미 좋아요! 싫어요! 했습니다.');
      return;
    } else {
      //댓글 좋아요!
      dispatch({
        type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_5__["MAINPOSTS_1001_COMMENTLIKE_REQUEST"],
        data: {
          commentid,
          postFlag,
          postId,
          flag: likeDislike,
          who: userInfo,
          nickName,
          mainPosts_1001Comments: [...mainPosts_1001Comments]
        }
      });
    }

    alert(`${likeDislike}`);
  }, [mainPosts_1001Comments]); //댓글 입력 

  const insertComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((postFlag, postId, nickName, comment) => {
    if (comment.length === 0 || comment.replace(blank_pattern, '') === "") {
      alert('댓글을 입력해 주세요!');
      ref.current.focus();
      return;
    }

    if (comment.length === 300) {
      alert('300자 이상 입력 할 수 없습니다.');
      return;
    } //댓글 입력


    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_5__["MAINPOSTS_1001_COMMENTINSERT_REQUEST"],
      data: {
        postId,
        postFlag,
        nickName,
        who: userInfo,
        comment
      }
    }); //clear the input 

    setInsertClick('clicked');
  }, [mainPosts_1001Comments]); //대댓글 리스트 

  const commentByCommentList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((postFlag, nickName, postId, commentId, byCommentCount) => {
    if (byCommentCount > 0) {
      setUnfoldList('unfold');
      dispatch({
        type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_5__["MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST"],
        data: {
          postFlag,
          nickName,
          postId,
          commentId
        }
      });
    } else {//setUnfoldList('333'); 
    }
  }, [mainPosts_1001CommentByComments, unfoldList]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "divTable",
    style: {
      marginTop: '3%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divTableCellTh",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, mainPosts_1001Info[0].title, " [", mainPosts_1001Comments.length, "]")), __jsx("div", {
    className: "divTableRow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["UserOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 19
    }
  }), "  ", mainPosts_1001Info[0].userNickName, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 73
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["FieldTimeOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 19
    }
  }), "  ", Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_8__["default"])(mainPosts_1001Info[0].createdDate), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 95
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 19
    }
  }), " : ", mainPosts_1001Info[0].good, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 88
    }
  }), " : ", mainPosts_1001Info[0].bad))), __jsx("div", {
    style: {
      width: "100%",
      height: "auto",
      border: "1px solid",
      borderColor: "#8cc49c",
      marginTop: "1%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, "\uAD11\uACE0\uC785\uB2C8\uB2E4."), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "1%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 6
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: mainPosts_1001Info[0].content
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      width: "100%",
      height: "auto",
      border: "1px solid",
      borderColor: "#8cc49c",
      marginTop: "1%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }
  }, "\uAD11\uACE0\uC785\uB2C8\uB2E4."), __jsx("div", {
    className: "divTable",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 19
    }
  })), "\xA0\xA0\xA0\xA0", __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 90
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 98
    }
  })))), __jsx(_components_mainPosts_1001_mainPosts_1001_textArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    postFlag: postFlag,
    nickName: nickName,
    postId: postId,
    userInfo: userInfo,
    insertComment: insertComment,
    insertClick: insertClick,
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "divTable",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 5
    }
  }, mainPosts_1001Comments && mainPosts_1001Comments.map((v, i) => __jsx(_components_mainPosts_1001_mainPosts_1001_comments__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: i,
    postFlag: postFlag,
    nickName: nickName,
    postId: postId,
    userInfo: userInfo,
    commentId: v.commentId,
    comment: v.comment,
    who: v.who,
    flag: v.flag,
    good: v.good,
    bad: v.bad,
    createdDate: v.createdDate,
    likeBtn: likeBtn,
    clickedComponent: v.clickedComponent,
    likeDislikeflag: v.likeDislikeflag,
    byCommentCount: v.byCommentCount,
    commentByCommentList: commentByCommentList,
    mainPosts_1001CommentByComments: mainPosts_1001CommentByComments[0].commentId === v.commentId ? mainPosts_1001CommentByComments : '',
    unfoldList: unfoldList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }
  }))));
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
/*! exports provided: initialState, MAINPOSTS_1001_LIST_REQUEST, MAINPOSTS_1001_LIST_SUCCESS, MAINPOSTS_1001_LIST_FAILURE, MAINPOSTS_1001_DETAIL_INFO_REQUEST, MAINPOSTS_1001_DETAIL_INFO_SUCCESS, MAINPOSTS_1001_DETAIL_INFO_FAILURE, MAINPOSTS_1001_COMMENTS_REQUEST, MAINPOSTS_1001_COMMENTS_SUCCESS, MAINPOSTS_1001_COMMENTS_FAILURE, MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST, MAINPOSTS_1001_COMMENTBYCOMMENT_SUCCESS, MAINPOSTS_1001_COMMENTBYCOMMENT_FAILURE, MAINPOSTS_1001_COMMENTINSERT_REQUEST, MAINPOSTS_1001_COMMENTINSERT_SUCCESS, MAINPOSTS_1001_COMMENTINSERT_FAILURE, MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST, MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_SUCCESS, MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE, MAINPOSTS_1001_COMMENTLIKE_REQUEST, MAINPOSTS_1001_COMMENTLIKE_SUCCESS, MAINPOSTS_1001_COMMENTLIKE_FAILURE, TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTLIKE_REQUEST", function() { return MAINPOSTS_1001_COMMENTLIKE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTLIKE_SUCCESS", function() { return MAINPOSTS_1001_COMMENTLIKE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTLIKE_FAILURE", function() { return MAINPOSTS_1001_COMMENTLIKE_FAILURE; });
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
  clickedInfo: [{}]
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
const MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE = 'MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE'; //게시글 댓글 like / dislike 

const MAINPOSTS_1001_COMMENTLIKE_REQUEST = 'MAINPOSTS_1001_COMMENTLIKE_REQUEST';
const MAINPOSTS_1001_COMMENTLIKE_SUCCESS = 'MAINPOSTS_1001_COMMENTLIKE_SUCCESS';
const MAINPOSTS_1001_COMMENTLIKE_FAILURE = 'MAINPOSTS_1001_COMMENTLIKE_FAILURE';
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
          action.data.forEach(v => {
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

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./utilComponent/custumDateFormat.js":
/*!*******************************************!*\
  !*** ./utilComponent/custumDateFormat.js ***!
  \*******************************************/
/*! exports provided: custumDateFormat, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custumDateFormat", function() { return custumDateFormat; });
const custumDateFormat = (values = '2020-09-22 10:23:11') => {
  const day = new Date(values); //const dayOfWeekArray =['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)']; 
  //const dayOfWeek = dayOfWeekArray[new Date(values).getDay()]; 
  //let date = day.toLocaleString()+' '+dayOfWeek; 

  let date = day.toLocaleString();
  return date;
};
/* harmony default export */ __webpack_exports__["default"] = (custumDateFormat);

/***/ }),

/***/ 7:
/*!***********************************!*\
  !*** multi ./pages/detailPage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\git Repository\PersonalProject_001\frontend\pages\detailPage.js */"./pages/detailPage.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxX2NvbW1lbnRCeUNvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFfY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMV90ZXh0QXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxLmpzIiwid2VicGFjazovLy8uL3V0aWxDb21wb25lbnQvY3VzdHVtRGF0ZUZvcm1hdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJIb21lIiwiQ29tbWVudDEwMDFCeUNvbW1lbnRzIiwia2V5IiwicG9zdEZsYWciLCJuaWNrTmFtZSIsInBvc3RJZCIsInVzZXJJbmZvIiwiY29tbWVudElkIiwiYnlDb21tZW50SWQiLCJjb21tZW50Iiwid2hvIiwiZ29vZCIsImJhZCIsImNyZWF0ZWREYXRlIiwiY29uc29sZSIsImxvZyIsImN1c3R1bURhdGVGb3JtYXQiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZmxvYXQiLCJSZWFjdCIsIm1lbW8iLCJDb21tZW50czEwMDEiLCJmbGFnIiwibGlrZUJ0biIsImNsaWNrZWRDb21wb25lbnQiLCJsaWtlRGlzbGlrZWZsYWciLCJieUNvbW1lbnRDb3VudCIsImNvbW1lbnRCeUNvbW1lbnRMaXN0IiwibWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cyIsInVuZm9sZExpc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2xpY2tDb21tZW50SWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibWFpblBvc3RzXzEwMDEiLCJyZWYiLCJjcmVhdGVSZWYiLCJibGFua19wYXR0ZXJuIiwiaW5zZXJ0Q29tbWVudCIsInVzZUNhbGxiYWNrIiwibGVuZ3RoIiwicmVwbGFjZSIsImFsZXJ0IiwiY3VycmVudCIsImZvY3VzIiwidHlwZSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfUkVRVUVTVCIsImRhdGEiLCJwYXJzZUludCIsIm1hcCIsInYiLCJpIiwiQ29tbWVudFRleHRBcmVhIiwiZm9yd2FyZFJlZiIsImluc2VydENsaWNrIiwic2V0Q29tbWVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwib25DaGFnZUNvbW1lbnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImRldGFpbFBhZ2UiLCJtYWluUG9zdHNfMTAwMUluZm8iLCJtYWluUG9zdHNfMTAwMUNvbW1lbnRzIiwiYXV0aCIsInNldEluc2VydENsaWNrIiwic2V0VW5mb2xkTGlzdCIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QiLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUIiwiY29tbWVudGlkIiwibGlrZURpc2xpa2UiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNUIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNUIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNUIiwidGl0bGUiLCJ1c2VyTmlja05hbWUiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIl9faHRtbCIsImNvbnRlbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiLCJpbml0aWFsU3RhdGUiLCJpbWFnZVBhdGhzIiwibGlrZUlzQ2xpY2tlZCIsImNsaWNrZWRJbmZvIiwiTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNUIiwiTUFJTlBPU1RTXzEwMDFfTElTVF9TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfTElTVF9GQUlMVVJFIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9GQUlMVVJFIiwiVEVTVF9SRVFVRVNUIiwiVEVTVF9TVUNDRVNTIiwiVEVTVF9GQUlMVVJFIiwicmVkdWNlciIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImZvckVhY2giLCJwdXNoIiwicGFyYW0iLCJhcnJheSIsInZhbHVlcyIsImRheSIsIkRhdGUiLCJkYXRlIiwidG9Mb2NhbGVTdHJpbmciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7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aWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRldGFpbFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG4iLCJcclxuY29uc3QgSG9tZSA9ICgpID0+e1xyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2PjxoMT5oZWxsbzwvaDE+PC9kaXY+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsgIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZVJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IGN1c3R1bURhdGVGb3JtYXQgZnJvbSAgJy4uLy4uL3V0aWxDb21wb25lbnQvY3VzdHVtRGF0ZUZvcm1hdCc7XHJcbmltcG9ydCB7RGlzbGlrZVR3b1RvbmUsTGlrZVR3b1RvbmUgLCBVc2VyT3V0bGluZWQsIEZpZWxkVGltZU91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuXHJcbmNvbnN0IENvbW1lbnQxMDAxQnlDb21tZW50cyA9ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50SWQsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieUNvbW1lbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29vZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfrjIDrjJPquIAnKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZUYWJsZUNlbGwwMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOKUlCZuYnNwOzxiPnt3aG99PC9iPiAmbmJzcDsgPHNtYWxsPntjdXN0dW1EYXRlRm9ybWF0KGNyZWF0ZWREYXRlKX08L3NtYWxsPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO3tjb21tZW50fVxyXG4gICAgICAgICAgICAgICAgPGRpdiAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxJVwiLGRpc3BsYXk6XCJibG9ja1wiLGZsb2F0OlwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9e1wiIzFiYTY0MFwifS8+e2dvb2R9XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc2xpa2VUd29Ub25lICB0d29Ub25lQ29sb3I9e1wiIzFiYTY0MFwifSAvPntiYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgIFxyXG4gICAgKVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ29tbWVudDEwMDFCeUNvbW1lbnRzKTsgIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZVJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgY3VzdHVtRGF0ZUZvcm1hdCBmcm9tICAnLi4vLi4vdXRpbENvbXBvbmVudC9jdXN0dW1EYXRlRm9ybWF0JztcclxuXHJcbmltcG9ydCBDb21tZW50MTAwMUJ5Q29tbWVudHMgZnJvbSAnLi9tYWluUG9zdHNfMTAwMV9jb21tZW50QnlDb21tZW50cydcclxuaW1wb3J0IENvbW1lbnRUZXh0QXJlYSAgICAgICBmcm9tICcuL21haW5Qb3N0c18xMDAxX3RleHRBcmVhJ1xyXG5pbXBvcnQge0Rpc2xpa2VUd29Ub25lLExpa2VUd29Ub25lfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuaW1wb3J0IFxyXG4gICAge1xyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfUkVRVUVTVCxcclxuICAgIH0gXHJcbmZyb20gJy4uLy4uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxJzsgXHJcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBDb21tZW50czEwMDEgPSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBnb29kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZERhdGUsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgbGlrZUJ0bixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2VkQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGlrZURpc2xpa2VmbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYnlDb21tZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21tZW50QnlDb21tZW50TGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmZvbGRMaXN0LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgICAgICBjb25zdCB7Y2xpY2tDb21tZW50SWR9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUubWFpblBvc3RzXzEwMDEpOyBcclxuICAgICAgICBjb25zdCByZWYgPSBjcmVhdGVSZWYoKTsgXHJcbiAgICAgICAgY29uc3QgYmxhbmtfcGF0dGVybiA9IC9eXFxzK3xcXHMrJi9nOyAgXHJcbiAgICAgICAgXHJcbiAgICAvL+uMgOuMk+q4gCDsnoXroKUgXHJcbiAgY29uc3QgaW5zZXJ0Q29tbWVudCA9IHVzZUNhbGxiYWNrKChwb3N0RmxhZyxwb3N0SWQsbmlja05hbWUgLGNvbW1lbnQpPT57XHJcbiAgIFxyXG4gICAgaWYoY29tbWVudC5sZW5ndGggPT09IDAgfHwgY29tbWVudC5yZXBsYWNlKGJsYW5rX3BhdHRlcm4sJycpPT09XCJcIil7XHJcbiAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICBhbGVydCgn64yT6riA7J2EIOyeheugpe2VtCDso7zshLjsmpQhJyk7IFxyXG4gICAgICAgIHJlZi5jdXJyZW50LmZvY3VzKCk7ICBcclxuICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1JFUVVFU1QsIFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50SWQsXHJcbiAgICAgICAgICAgICAgICB3aG86dXNlckluZm8sXHJcbiAgICAgICAgICAgICAgICBjb21tZW50LCAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c10pO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPSdkaXZUYWJsZVJvdycgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImRpdlRhYmxlQ2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGI+e3dob308L2I+ICZuYnNwOyA8c21hbGw+e2N1c3R1bURhdGVGb3JtYXQoY3JlYXRlZERhdGUpfTwvc21hbGw+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tbWVudH08YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKT0+Y29tbWVudEJ5Q29tbWVudExpc3QocG9zdEZsYWcsbmlja05hbWUscG9zdElkLGNvbW1lbnRJZCxieUNvbW1lbnRDb3VudCl9PntieUNvbW1lbnRDb3VudCA9PT0gMCA/IGDrjJPquIDri6zquLBgIDogYOuMk+q4gFske2J5Q29tbWVudENvdW50fV1gIH08L2E+IHtjb21tZW50SWR9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxJVwiLGRpc3BsYXk6XCJibG9ja1wiLGZsb2F0OlwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpa2VUd29Ub25lIG9uQ2xpY2s9eygpPT5saWtlQnRuKGNvbW1lbnRJZCxmbGFnLCdnb29kJyl9IHR3b1RvbmVDb2xvcj17Y2xpY2tlZENvbXBvbmVudCAmJiBsaWtlRGlzbGlrZWZsYWc9PT0nZ29vZCcgPyBcIiNmZjAwMDBcIiA6IFwiIzFiYTY0MFwifS8+e2NsaWNrZWRDb21wb25lbnQgJiYgbGlrZURpc2xpa2VmbGFnPT09J2dvb2QnID8gcGFyc2VJbnQoZ29vZCkrMTpnb29kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzbGlrZVR3b1RvbmUgb25DbGljaz17KCk9Pmxpa2VCdG4oY29tbWVudElkLGZsYWcsJ2JhZCcpfSB0d29Ub25lQ29sb3I9e2NsaWNrZWRDb21wb25lbnQgJiYgbGlrZURpc2xpa2VmbGFnPT09J2JhZCcgPyBcIiNmZjAwMDBcIiA6IFwiIzFiYTY0MFwifSAvPntjbGlja2VkQ29tcG9uZW50ICYmIGxpa2VEaXNsaWtlZmxhZz09PSdiYWQnID8gcGFyc2VJbnQoYmFkKSsxOmJhZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICB7dW5mb2xkTGlzdCA9PT0ndW5mb2xkJyAmJiBjbGlja0NvbW1lbnRJZCA9PT0gY29tbWVudElkICYmIG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMgJiYgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cy5tYXAoKHYsaSk9PihcclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudDEwMDFCeUNvbW1lbnRzICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0RmxhZz17cG9zdEZsYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZT17bmlja05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3RJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvPXt1c2VySW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZD17Y29tbWVudElkfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5Q29tbWVudElkPXt2LmJ5Q29tbWVudElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17di5jb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvPXt2Lndob31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29kPXt2Lmdvb2R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWQ9e3YuYmFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZERhdGU9e3YuY3JlYXRlZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICB7dW5mb2xkTGlzdCA9PT0ndW5mb2xkJyAmJiBjbGlja0NvbW1lbnRJZCA9PT1jb21tZW50SWQgJiYgYnlDb21tZW50Q291bnQgPiAwICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21tZW50VGV4dEFyZWEgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0RmxhZz17cG9zdEZsYWd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lPXtuaWNrTmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0SWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvPXt1c2VySW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRDb21tZW50PXtpbnNlcnRDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydENsaWNrPXsnZ29vZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPiAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ29tbWVudHMxMDAxKTsgIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZVJlZiAsZm9yd2FyZFJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5cclxuLy9mb3J3YXJkUmVmXHJcbi8vaHR0cHM6Ly9rby5yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Zm9yd2FyZHJlZlxyXG5cclxuY29uc3QgIENvbW1lbnRUZXh0QXJlYT0gZm9yd2FyZFJlZigoe3Bvc3RGbGFnLG5pY2tOYW1lLHBvc3RJZCx1c2VySW5mbyxpbnNlcnRDb21tZW50LGluc2VydENsaWNrfSAscmVmKSA9PntcclxuXHJcbiAgIC8vIGNvbnN0IHJlZiA9IGNyZWF0ZVJlZigpOyBcclxuICAgIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKCcnKTsgXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICBpZihpbnNlcnRDbGljayA9PT0nY2xpY2tlZCcpe1xyXG4gICAgICBzZXRDb21tZW50KCcnKTsgXHJcbiAgICB9XHJcblxyXG4gIH0sW2luc2VydENsaWNrLmxlbmd0aCA+IDAgXSk7IFxyXG5cclxuXHJcbiAgLy/rjJPquIAg7J6F66ClIHRleHRBcmVhIFxyXG4gIGNvbnN0IG9uQ2hhZ2VDb21tZW50ID11c2VDYWxsYmFjaygoZSk9PntcclxuXHJcbiAgICBpZihjb21tZW50Lmxlbmd0aCA9PT0gMzAwKXtcclxuICAgICAgYWxlcnQoJzMwMOyekCDsnbTsg4Eg7J6F66ClIO2VoCDsiJgg7JeG7Iq164uI64ukLicpOyBcclxuICAgICAgcmV0dXJuOyBcclxuICAgIH1cclxuICAgIHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpOyBcclxuXHJcbiAgfSxbY29tbWVudF0pOyBcclxuICBcclxuXHJcblxyXG4gICAgXHJcblxyXG5cclxuXHJcbnJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPHRleHRhcmVhICB2YWx1ZT17Y29tbWVudH0gIHJlZj17cmVmfSBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjgwcHhcIixtYXJnaW5Ub3A6XCIzJVwifX0gb25DaGFuZ2U9e29uQ2hhZ2VDb21tZW50fSBwbGFjZWhvbGRlcj17IHVzZXJJbmZvID8gXCLrjJPquIDsnYQg7J6R7ISx7ZW0IOuztOyEuOyalCFcIiA6IFwi66Gc6re47J247J20IO2VhOyalO2VnCDshJzruYTsiqQg7J6F64uI64ukLlwifSByZWFkT25seT17dXNlckluZm8gPyBmYWxzZSA6IHRydWV9Lz5cclxuICAgXHJcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiMSVcIixkaXNwbGF5OlwiYmxvY2tcIixmbG9hdDpcImxlZnRcIn19PlxyXG4gICAgICB7Y29tbWVudCA/IGNvbW1lbnQubGVuZ3RoICA6IDAgfSAmIzQ3OyAzMDBcclxuICAgIDwvZGl2PlxyXG5cclxuICAgIHt1c2VySW5mbyAmJiBcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiMSVcIixkaXNwbGF5OlwiYmxvY2tcIixmbG9hdDpcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpPT5pbnNlcnRDb21tZW50KHBvc3RGbGFnLHBvc3RJZCxuaWNrTmFtZSxjb21tZW50KX0+64yT6riA64us6riwPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgPC8+XHJcbilcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50VGV4dEFyZWE7ICIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsIHVzZVN0YXRlLCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxJ1xyXG5pbXBvcnQgQ29tbWVudHMxMDAxIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFfY29tbWVudHMnXHJcbmltcG9ydCBDb21tZW50VGV4dEFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMV90ZXh0QXJlYSdcclxuaW1wb3J0IFxyXG4gICAge01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCwgXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNUXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMSc7IFxyXG5cclxuaW1wb3J0IHtEaXNsaWtlVHdvVG9uZSxMaWtlVHdvVG9uZSAsIFVzZXJPdXRsaW5lZCwgRmllbGRUaW1lT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IGN1c3R1bURhdGVGb3JtYXQgZnJvbSAgJy4uL3V0aWxDb21wb25lbnQvY3VzdHVtRGF0ZUZvcm1hdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IGRldGFpbFBhZ2UgID0gKHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWR9KSA9PntcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICBjb25zdCB7bWFpblBvc3RzXzEwMDFJbmZvICwgXHJcbiAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudHMsXHJcbiAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNcclxuICAgICAgICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUubWFpblBvc3RzXzEwMDEpOyBcclxuXHJcbiAgY29uc3Qge3VzZXJJbmZvfSAgICAgID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgcmVmID0gY3JlYXRlUmVmKCk7IFxyXG4gIGNvbnN0IGJsYW5rX3BhdHRlcm4gPSAvXlxccyt8XFxzKyYvZzsgIFxyXG4gIGNvbnN0IFtpbnNlcnRDbGljaywgc2V0SW5zZXJ0Q2xpY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt1bmZvbGRMaXN0LHNldFVuZm9sZExpc3RdID0gdXNlU3RhdGUoJycpOyAgXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgXHJcbiAgICAvL+uMk+q4gCDrpqzsiqTtirggXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCwgXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIHBvc3RJZCxcclxuICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICB3aG86dXNlckluZm8sIFxyXG4gICAgICB9XHJcbiAgICB9KTsgXHJcblxyXG4gICAgLy/sg4HshLgg7KCV67O0IFxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNULCBcclxuICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9LFtdKTtcclxuXHJcblxyXG4gIC8v7KKL7JWE7JqULCDsi6vslrTsmpQg67KE7Yq8IFxyXG4gIGNvbnN0IGxpa2VCdG4gPXVzZUNhbGxiYWNrKChjb21tZW50aWQsZmxhZyxsaWtlRGlzbGlrZSk9PntcclxuICAgICAgaWYoIXVzZXJJbmZvKXtcclxuICAgICAgICBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VnCDshJzruYTsiqQg7J6F64uI64ukLicpOyBcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGZsYWc9PT1cIllcIil7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWxlcnQoJ+ydtOuvuCDsoovslYTsmpQhIOyLq+yWtOyalCEg7ZaI7Iq164uI64ukLicpOyBcclxuICAgICAgICByZXR1cm47IFxyXG4gIFxyXG4gICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgLy/rjJPquIAg7KKL7JWE7JqUIVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCwgXHJcbiAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgY29tbWVudGlkLFxyXG4gICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICBmbGFnOiBsaWtlRGlzbGlrZSAsXHJcbiAgICAgICAgICAgIHdobzogdXNlckluZm8sXHJcbiAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICBtYWluUG9zdHNfMTAwMUNvbW1lbnRzOlsuLi5tYWluUG9zdHNfMTAwMUNvbW1lbnRzXSxcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICAgYWxlcnQoYCR7bGlrZURpc2xpa2V9YCk7IFxyXG4gICAgXHJcbiAgICB9LFttYWluUG9zdHNfMTAwMUNvbW1lbnRzXSk7IFxyXG5cclxuXHJcbiAgLy/rjJPquIAg7J6F66ClIFxyXG4gIGNvbnN0IGluc2VydENvbW1lbnQgPSB1c2VDYWxsYmFjaygocG9zdEZsYWcscG9zdElkLG5pY2tOYW1lICxjb21tZW50KT0+e1xyXG4gICAgaWYoY29tbWVudC5sZW5ndGggPT09IDAgfHwgY29tbWVudC5yZXBsYWNlKGJsYW5rX3BhdHRlcm4sJycpPT09XCJcIil7XHJcbiAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICBhbGVydCgn64yT6riA7J2EIOyeheugpe2VtCDso7zshLjsmpQhJyk7IFxyXG4gICAgICAgIHJlZi5jdXJyZW50LmZvY3VzKCk7ICBcclxuICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmKGNvbW1lbnQubGVuZ3RoID09PSAzMDApe1xyXG4gICAgICAgICAgYWxlcnQoJzMwMOyekCDsnbTsg4Eg7J6F66ClIO2VoCDsiJgg7JeG7Iq164uI64ukLicpOyBcclxuICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8v64yT6riAIOyeheugpVxyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVCwgXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgICBuaWNrTmFtZSAsXHJcbiAgICAgICAgICAgICAgd2hvOnVzZXJJbmZvLCBcclxuICAgICAgICAgICAgICBjb21tZW50LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vY2xlYXIgdGhlIGlucHV0IFxyXG4gICAgICAgIHNldEluc2VydENsaWNrKCdjbGlja2VkJykgICAgICAgIFxyXG5cclxuICAgICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50c10pO1xyXG5cclxuXHJcblxyXG4gICAgICAvL+uMgOuMk+q4gCDrpqzsiqTtirggXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRCeUNvbW1lbnRMaXN0ID11c2VDYWxsYmFjaygocG9zdEZsYWcsbmlja05hbWUscG9zdElkLGNvbW1lbnRJZCxieUNvbW1lbnRDb3VudCk9PntcclxuXHJcblxyXG4gICAgICAgICAgICAgICBpZihieUNvbW1lbnRDb3VudCA+IDAgKXtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldFVuZm9sZExpc3QoJ3VuZm9sZCcpOyBcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTsgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvL3NldFVuZm9sZExpc3QoJzMzMycpOyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cyx1bmZvbGRMaXN0XSk7IFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBcclxuICAgIDxkaXYgPlxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDtg4DsnbTti4AtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGUnIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93VGgnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbFRoJz57bWFpblBvc3RzXzEwMDFJbmZvWzBdLnRpdGxlfSBbe21haW5Qb3N0c18xMDAxQ29tbWVudHMubGVuZ3RofV08L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+XHJcbiAgICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4gIHttYWluUG9zdHNfMTAwMUluZm9bMF0udXNlck5pY2tOYW1lfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGRUaW1lT3V0bGluZWQgLz4gIHtjdXN0dW1EYXRlRm9ybWF0KG1haW5Qb3N0c18xMDAxSW5mb1swXS5jcmVhdGVkRGF0ZSl9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHttYWluUG9zdHNfMTAwMUluZm9bMF0uZ29vZH0gPERpc2xpa2VUd29Ub25lICB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHttYWluUG9zdHNfMTAwMUluZm9bMF0uYmFkfSBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7YOA7J207YuALS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCJhdXRvXCIsIGJvcmRlcjpcIjFweCBzb2xpZFwiLCBib3JkZXJDb2xvcjpcIiM4Y2M0OWNcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgICAgIOq0keqzoOyeheuLiOuLpC5cclxuICAgICAgPC9kaXY+XHJcbiAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIOy7qO2FkOy4oC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6bWFpblBvc3RzXzEwMDFJbmZvWzBdLmNvbnRlbnR9fS8+XHJcbiAgICAgPC9kaXY+IFxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDsu6jthZDsuKAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfSAgIFxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcImF1dG9cIiwgYm9yZGVyOlwiMXB4IHNvbGlkXCIsIGJvcmRlckNvbG9yOlwiIzhjYzQ5Y1wiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAg6rSR6rOg7J6F64uI64ukLlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuyii+yVhOyalCDsi6vslrTsmpQg67KE7Yq8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZSc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJyBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgIDxCdXR0b24+PExpa2VUd29Ub25lICB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPjwvQnV0dG9uPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzxCdXR0b24+PERpc2xpa2VUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+PC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICB7LyrsoovslYTsmpQg7Iur7Ja07JqUIOuyhO2KvC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuuMk+q4gCDsnoXroKUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICA8Q29tbWVudFRleHRBcmVhICAgXHJcbiAgICAgICAgICAgIHBvc3RGbGFnPXtwb3N0RmxhZ30gXHJcbiAgICAgICAgICAgIG5pY2tOYW1lPXtuaWNrTmFtZX0gXHJcbiAgICAgICAgICAgIHBvc3RJZD17cG9zdElkfSBcclxuICAgICAgICAgICAgdXNlckluZm89e3VzZXJJbmZvfVxyXG4gICAgICAgICAgICBpbnNlcnRDb21tZW50PXtpbnNlcnRDb21tZW50fVxyXG4gICAgICAgICAgICBpbnNlcnRDbGljaz17aW5zZXJ0Q2xpY2t9XHJcbiAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAvPlxyXG4gICAgey8q64yT6riAIOyeheugpS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG5cclxuXHJcblxyXG4gICAgey8q64yT6riAIOumrOyKpO2KuC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkaXZUYWJsZVwiPlxyXG4gICAgICB7bWFpblBvc3RzXzEwMDFDb21tZW50cyAmJiBtYWluUG9zdHNfMTAwMUNvbW1lbnRzLm1hcCgodixpKT0+XHJcblxyXG4gICAgICAgIDxDb21tZW50czEwMDEgXHJcbiAgICAgICAgICAgICAga2V5PXtpfSBcclxuICAgICAgICAgICAgICBwb3N0RmxhZz17cG9zdEZsYWd9IFxyXG4gICAgICAgICAgICAgIG5pY2tOYW1lPXtuaWNrTmFtZX0gXHJcbiAgICAgICAgICAgICAgcG9zdElkPXtwb3N0SWR9IFxyXG4gICAgICAgICAgICAgIHVzZXJJbmZvPXt1c2VySW5mb31cclxuICAgIFxyXG4gICAgICAgICAgICAgIGNvbW1lbnRJZD17di5jb21tZW50SWR9IFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQ9e3YuY29tbWVudH0gXHJcbiAgICAgICAgICAgICAgd2hvPXt2Lndob30gXHJcbiAgICAgICAgICAgICAgZmxhZz17di5mbGFnfSBcclxuXHJcbiAgICAgICAgICAgICAgZ29vZD17di5nb29kfVxyXG4gICAgICAgICAgICAgIGJhZD17di5iYWR9ICAgICAgXHJcbiAgICAgICAgICAgICAgY3JlYXRlZERhdGU9e3YuY3JlYXRlZERhdGV9IFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgbGlrZUJ0bj17bGlrZUJ0bn1cclxuXHJcbiAgICAgICAgICAgICAgY2xpY2tlZENvbXBvbmVudD17di5jbGlja2VkQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgIGxpa2VEaXNsaWtlZmxhZz17di5saWtlRGlzbGlrZWZsYWd9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYnlDb21tZW50Q291bnQ9e3YuYnlDb21tZW50Q291bnR9XHJcbiAgICAgICAgICAgICAgY29tbWVudEJ5Q29tbWVudExpc3Q9e2NvbW1lbnRCeUNvbW1lbnRMaXN0fVxyXG4gICAgICAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHM9e21haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNbMF0uY29tbWVudElkID09PSB2LmNvbW1lbnRJZCA/IG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMgOiAnJ31cclxuICAgICAgICAgICAgICB1bmZvbGRMaXN0PXt1bmZvbGRMaXN0fVxyXG5cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICApXHJcbiAgICBcclxuICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgey8q64yT6riAIOumrOyKpO2KuC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5cclxuZGV0YWlsUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT57XHJcblxyXG4gIGNvbnN0IHBvc3RJZCAgID0gY29udGV4dC5xdWVyeS5wb3N0SWQ7IFxyXG4gIGNvbnN0IG5pY2tOYW1lID0gY29udGV4dC5xdWVyeS5uaWNrTmFtZTsgXHJcbiAgY29uc3QgcG9zdEZsYWcgPSBjb250ZXh0LnF1ZXJ5LnBvc3RGbGFnOyBcclxuICByZXR1cm4ge25pY2tOYW1lLHBvc3RGbGFnLHBvc3RJZH07IFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGRldGFpbFBhZ2U7ICIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCAgaW5pdGlhbFN0YXRlID0ge1xyXG5cclxuICAgIFxyXG4gICAgbWFpblBvc3RzXzEwMDEgICAgIDogW10sIFxyXG4gICAgbWFpblBvc3RzXzEwMDFJbmZvIDogW3t9XSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v7ZWYIOydtOqyg+uVjOunpCDrqofsi5zqsITsnYQg64Kg66CkIOuoueyXiOuKlOyngC4uIOyVhO2BrOumtCDsg4jsmrDri5jsnbQg7ZW06rKw67KV7J2EIOyVjOugpOyjvOyLrFxyXG4gICAgbWFpblBvc3RzXzEwMDFDb21tZW50cyA6IFtdLFxyXG4gICAgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50czpbe31dLCAgXHJcbiAgICBpbWFnZVBhdGhzICAgICAgICAgOiBbXSxcclxuICAgIGxpa2VJc0NsaWNrZWQgOm51bGwsIFxyXG4gICAgY2xpY2tDb21tZW50SWQ6bnVsbCwgXHJcbiAgICBjbGlja2VkSW5mbzpbe31dLCBcclxuXHJcblxyXG59XHJcblxyXG4vL+qyjOyLnOusvCBsaXN0XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1Q9J01BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1M9J01BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkU9J01BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSc7XHJcblxyXG4vL+qyjOyLnOusvCDsg4HshLggXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUID0nTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUyA9J01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkUgPSdNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFJzsgXHJcblxyXG4vL+qyjOyLnOusvCDrjJPquIAgbGlzdCBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19TVUNDRVNTID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfRkFJTFVSRSA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19GQUlMVVJFJzsgXHJcblxyXG4vL+qyjOyLnOusvCDrjIDrjJPquIAgbGlzdCBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCA9J01BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9TVUNDRVNTID0nTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX0ZBSUxVUkUgPSdNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX0ZBSUxVUkUnOyBcclxuXHJcbi8v6rKM7Iuc66y8IOuMk+q4gCBpbnNlcnQgXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfU1VDQ0VTUyA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9GQUlMVVJFID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfRkFJTFVSRSc7IFxyXG5cclxuLy/qsozsi5zrrLwg64yA64yT6riAIGluc2VydCBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfUkVRVUVTVCA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9TVUNDRVNTID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX0ZBSUxVUkUgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9GQUlMVVJFJzsgXHJcblxyXG4vL+qyjOyLnOq4gCDrjJPquIAgbGlrZSAvIGRpc2xpa2UgXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNUID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfU1VDQ0VTUyA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX0ZBSUxVUkUgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfRkFJTFVSRSc7IFxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVEVTVF9SRVFVRVNUID0gJ1RFU1RfUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgVEVTVF9TVUNDRVNTID0gJ1RFU1RfU1VDQ0VTUyc7IFxyXG5leHBvcnQgY29uc3QgVEVTVF9GQUlMVVJFID0gJ1RFU1RfRkFJTFVSRSc7IFxyXG5cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG5cclxuXHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcblxyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcblxyXG4vL+qyjOyLnOq4gCDrpqzsiqTtirgg6rCA7KC47Jik6riwICAgICAgIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIC8v67Cw7Je0IOy0iOq4sO2ZlFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMS5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vL+qyjOyLnOq4gCDrjJPquIAgSU5TRVJUICAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfU1VDQ0VTUzoge1xyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudHMubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudHMucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8v6rKM7Iuc6riAIOuMgOuMk+q4gCBJTlNFUlQgICBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cy5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8v6rKM7Iuc6riAIOyDgeyEuCDtjpjsnbTsp4Ag6rCA7KC47Jik6riwIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUzoge1xyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxSW5mby5sZW5ndGg9MDsgXHJcbiAgICAgICAgICAgICAgICAvL+uwsOyXtCDstIjquLDtmZRcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFJbmZvLnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vL+qyjOyLnOq4gCDrjJPquIAg6rCA7KC47Jik6riwICBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1NVQ0NFU1M6IHsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFDb21tZW50cy5sZW5ndGg9MDsgXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uZGF0YS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudHMucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfRkFJTFVSRToge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vL+qyjOyLnOq4gCDrjIDrjJPquIAg6rCA7KC47Jik6riwIGNsaWNrQ29tbWVudElkXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfU1VDQ0VTUzogeyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNsaWNrQ29tbWVudElkPWFjdGlvbi5kYXRhLnBhcmFtLmNvbW1lbnRJZFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuYXJyYXkuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzLnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy/qsozsi5zquIAg64yT6riAIGxpa2UgLyBkaXNsaWtlICAgICAgIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFDb21tZW50cy5sZW5ndGg9MDsgXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uZGF0YS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudHMucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0IDogYnJlYWs7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTsgXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJleHBvcnQgY29uc3QgIGN1c3R1bURhdGVGb3JtYXQgPSAodmFsdWVzPScyMDIwLTA5LTIyIDEwOjIzOjExJyk9PntcclxuXHJcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh2YWx1ZXMpOyBcclxuICAgIC8vY29uc3QgZGF5T2ZXZWVrQXJyYXkgPVsnKOydvCknLCAnKOyblCknLCAnKO2ZlCknLCAnKOyImCknLCAnKOuqqSknLCAnKOq4iCknLCAnKO2GoCknXTsgXHJcbiAgICAvL2NvbnN0IGRheU9mV2VlayA9IGRheU9mV2Vla0FycmF5W25ldyBEYXRlKHZhbHVlcykuZ2V0RGF5KCldOyBcclxuICAgIC8vbGV0IGRhdGUgPSBkYXkudG9Mb2NhbGVTdHJpbmcoKSsnICcrZGF5T2ZXZWVrOyBcclxuICAgIGxldCBkYXRlID0gZGF5LnRvTG9jYWxlU3RyaW5nKCk7IFxyXG4gICAgXHJcbiAgICByZXR1cm4gZGF0ZTsgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXN0dW1EYXRlRm9ybWF0OyAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=