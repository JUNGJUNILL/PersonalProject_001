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
  flag,
  createdDate,
  commentByCommentLikeBtn,
  clickedComponent,
  likeDislikeflag
}) => {
  return __jsx("div", {
    className: "divTableRow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "divTableCell02",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "\u2514\xA0", __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 28
    }
  }, who), " \xA0 ", __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 48
    }
  }, Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_1__["default"])(createdDate)), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LikeTwoTone"], {
    onClick: () => commentByCommentLikeBtn(byCommentId, flag, 'good'),
    twoToneColor: clickedComponent && likeDislikeflag === 'good' ? "#ff0000" : "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }), clickedComponent && likeDislikeflag === 'good' ? parseInt(good) + 1 : good, "\xA0\xA0\xA0", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DislikeTwoTone"], {
    onClick: () => commentByCommentLikeBtn(byCommentId, flag, 'bad'),
    twoToneColor: clickedComponent && likeDislikeflag === 'bad' ? "#ff0000" : "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), clickedComponent && likeDislikeflag === 'bad' ? parseInt(bad) + 1 : bad, "\xA0\xA0\xA0", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Comment1001ByComments));

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
    clickCommentId,
    commentByCommentCount,
    commentByCommentInsertCommentId
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.mainPosts_1001);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  const blank_pattern = /^\s+|\s+&/g; //대댓글 입력 

  const insertComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((postFlag, postId, nickName, comment) => {
    if (comment.length === 0 || comment.replace(blank_pattern, '') === "") {
      alert('댓글을 입력해 주세요!');

      if (ref.current) {
        ref.current.focusInput();
      }

      return;
    }

    if (comment.length === 300) {
      alert('300자 이상 입력 할 수 없습니다.');
      return;
    } //대댓글 입력


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
    }); //인풋 초기화, 포커스 

    if (ref.current) {
      ref.current.clearInput();
      ref.current.focusInput();
    }
  }, [mainPosts_1001CommentByComments, ref, commentByCommentInsertCommentId, commentByCommentCount]); //대댓글 좋아요, 싫어요 버든 

  const commentByCommentLikeBtn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((byCommentId, flag, likeDislike) => {
    if (flag === "Y") {
      alert('이미 좋아요! 싫어요! 했습니다.');
      return;
    } else {
      dispatch({
        type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_6__["MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_REQUEST"],
        data: {
          byCommentId,
          commentId,
          postId,
          postFlag,
          nickName,
          who: userInfo,
          flag: likeDislike,
          mainPosts_1001CommentByComments: [...mainPosts_1001CommentByComments]
        }
      });
    }

    alert(`${likeDislike}`);
  }, [mainPosts_1001CommentByComments]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "divTableRow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, who), " \xA0 ", __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 41
    }
  }, Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_2__["default"])(createdDate)), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 87
    }
  }), comment, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 30
    }
  }), __jsx("a", {
    onClick: () => commentByCommentList(postFlag, nickName, postId, commentId, clickCommentId, unfoldList),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, `댓글[${commentByCommentInsertCommentId === commentId ? commentByCommentCount : byCommentCount}]`), " ", commentId, __jsx("div", {
    style: {
      marginTop: "1%",
      display: "block",
      float: "right"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["LikeTwoTone"], {
    onClick: () => likeBtn(commentId, flag, 'good'),
    twoToneColor: clickedComponent && likeDislikeflag === 'good' ? "#ff0000" : "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 29
    }
  }), clickedComponent && likeDislikeflag === 'good' ? parseInt(good) + 1 : good, "\xA0\xA0\xA0\xA0", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["DislikeTwoTone"], {
    onClick: () => likeBtn(commentId, flag, 'bad'),
    twoToneColor: clickedComponent && likeDislikeflag === 'bad' ? "#ff0000" : "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  }), clickedComponent && likeDislikeflag === 'bad' ? parseInt(bad) + 1 : bad, "\xA0\xA0\xA0\xA0", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  })))), unfoldList === 'unfold' && commentId === clickCommentId && mainPosts_1001CommentByComments && mainPosts_1001CommentByComments.map((v, i) => __jsx(_mainPosts_1001_commentByComments__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    flag: v.flag,
    createdDate: v.createdDate,
    commentByCommentLikeBtn: commentByCommentLikeBtn,
    clickedComponent: v.clickedComponent,
    likeDislikeflag: v.likeDislikeflag,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  })), unfoldList === 'unfold' && clickCommentId === commentId && byCommentCount >= 0 && __jsx(_mainPosts_1001_textArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    postFlag: postFlag,
    nickName: nickName,
    postId: postId,
    userInfo: userInfo,
    insertComment: insertComment,
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
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
  unfoldList
}, ref) => {
  const focusRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  const {
    0: comment,
    1: setComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); //input box clear , focus

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, () => ({
    clearInput: () => setComment(''),
    focusInput: () => focusRef.current.focus()
  })); //댓글 입력 textArea 

  const onChageComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    if (comment.length === 300) {
      alert('300자 이상 입력 할 수 없습니다.');
      return;
    }

    setComment(e.target.value);
  }, [comment]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("textarea", {
    value: comment,
    ref: focusRef,
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
      lineNumber: 40,
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
      lineNumber: 42,
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
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    onClick: () => insertComment(postFlag, postId, nickName, comment),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
    0: unfoldList,
    1: setUnfoldList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('fold');
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
        postFlag,
        who: userInfo
      }
    });
  }, []); //게시글 좋아요, 실어요 버튼

  const postLikeBtn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(likeFlag => {
    if (!userInfo) {
      alert('로그인이 필요한 서비스 입니다.');
      return;
    }

    if (mainPosts_1001Info[0].flag === 'Y') {
      alert('이미 좋아요! 싫어요! 했습니다.');
      return;
    } //게시글 좋아요!


    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_5__["MAINPOSTS_1001_MAINPOSTLIKE_REQUEST"],
      data: {
        postId,
        nickName,
        postFlag,
        who: userInfo,
        flag: likeFlag,
        mainPosts_1001Info: [...mainPosts_1001Info]
      }
    });
  }, [mainPosts_1001Info]); //댓글 좋아요, 싫어요 버튼 

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

      if (ref.current) {
        ref.current.focusInput();
      }

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
    });
    setUnfoldList('fold'); //인풋 초기화, 포커스 

    if (ref.current) {
      ref.current.clearInput();
      ref.current.focusInput();
    }
  }, [mainPosts_1001Comments, ref]); //대댓글 리스트 

  const commentByCommentList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((postFlag, nickName, postId, commentId, clickCommentId, unfoldList) => {
    if (unfoldList === 'unfold' && commentId === clickCommentId) {
      setUnfoldList('fold');
    } else {
      setUnfoldList('unfold');
    }

    dispatch({
      type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_5__["MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST"],
      data: {
        postFlag,
        nickName,
        postId,
        commentId,
        who: userInfo
      }
    });
  }, [mainPosts_1001CommentByComments, unfoldList]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
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
      lineNumber: 203,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divTableCellTh",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }, mainPosts_1001Info[0].title, " [", mainPosts_1001Comments.length, "]", mainPosts_1001Info[0].flag)), __jsx("div", {
    className: "divTableRow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["UserOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 19
    }
  }), "  ", mainPosts_1001Info[0].userNickName, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 73
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["FieldTimeOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }), "  ", Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_8__["default"])(mainPosts_1001Info[0].createdDate), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 95
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 19
    }
  }), " : ", mainPosts_1001Info[0].good, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
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
      lineNumber: 217,
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
      lineNumber: 227,
      columnNumber: 6
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: mainPosts_1001Info[0].content
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
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
      lineNumber: 236,
      columnNumber: 5
    }
  }, "\uAD11\uACE0\uC785\uB2C8\uB2E4."), __jsx("div", {
    className: "divTable",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
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
      lineNumber: 246,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: () => postLikeBtn('good'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LikeTwoTone"], {
    twoToneColor: mainPosts_1001Info[0].clicked === 'good' ? "#ff0000" : "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 53
    }
  })), "\xA0\xA0\xA0\xA0", __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: () => postLikeBtn('bad'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 179
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["DislikeTwoTone"], {
    twoToneColor: mainPosts_1001Info[0].clicked === 'bad' ? "#ff0000" : "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 220
    }
  })))), __jsx(_components_mainPosts_1001_mainPosts_1001_textArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    postFlag: postFlag,
    nickName: nickName,
    postId: postId,
    userInfo: userInfo,
    insertComment: insertComment,
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "divTable",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
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
    mainPosts_1001CommentByComments: mainPosts_1001CommentByComments[0] && mainPosts_1001CommentByComments[0].commentId === v.commentId ? mainPosts_1001CommentByComments : '',
    unfoldList: unfoldList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
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

/***/ 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxX2NvbW1lbnRCeUNvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFfY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMV90ZXh0QXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxQYWdlLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxLmpzIiwid2VicGFjazovLy8uL3V0aWxDb21wb25lbnQvY3VzdHVtRGF0ZUZvcm1hdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJIb21lIiwiQ29tbWVudDEwMDFCeUNvbW1lbnRzIiwia2V5IiwicG9zdEZsYWciLCJuaWNrTmFtZSIsInBvc3RJZCIsInVzZXJJbmZvIiwiY29tbWVudElkIiwiYnlDb21tZW50SWQiLCJjb21tZW50Iiwid2hvIiwiZ29vZCIsImJhZCIsImZsYWciLCJjcmVhdGVkRGF0ZSIsImNvbW1lbnRCeUNvbW1lbnRMaWtlQnRuIiwiY2xpY2tlZENvbXBvbmVudCIsImxpa2VEaXNsaWtlZmxhZyIsImN1c3R1bURhdGVGb3JtYXQiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZmxvYXQiLCJwYXJzZUludCIsIm1lbW8iLCJDb21tZW50czEwMDEiLCJsaWtlQnRuIiwiYnlDb21tZW50Q291bnQiLCJjb21tZW50QnlDb21tZW50TGlzdCIsIm1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMiLCJ1bmZvbGRMaXN0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNsaWNrQ29tbWVudElkIiwiY29tbWVudEJ5Q29tbWVudENvdW50IiwiY29tbWVudEJ5Q29tbWVudEluc2VydENvbW1lbnRJZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJtYWluUG9zdHNfMTAwMSIsInJlZiIsImNyZWF0ZVJlZiIsImJsYW5rX3BhdHRlcm4iLCJpbnNlcnRDb21tZW50IiwidXNlQ2FsbGJhY2siLCJsZW5ndGgiLCJyZXBsYWNlIiwiYWxlcnQiLCJjdXJyZW50IiwiZm9jdXNJbnB1dCIsInR5cGUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1JFUVVFU1QiLCJkYXRhIiwiY2xlYXJJbnB1dCIsImxpa2VEaXNsaWtlIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfUkVRVUVTVCIsIm1hcCIsInYiLCJpIiwiQ29tbWVudFRleHRBcmVhIiwiZm9yd2FyZFJlZiIsImZvY3VzUmVmIiwic2V0Q29tbWVudCIsInVzZVN0YXRlIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsImZvY3VzIiwib25DaGFnZUNvbW1lbnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImRldGFpbFBhZ2UiLCJtYWluUG9zdHNfMTAwMUluZm8iLCJtYWluUG9zdHNfMTAwMUNvbW1lbnRzIiwiYXV0aCIsInNldFVuZm9sZExpc3QiLCJ1c2VFZmZlY3QiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNUIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCIsInBvc3RMaWtlQnRuIiwibGlrZUZsYWciLCJNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfUkVRVUVTVCIsImNvbW1lbnRpZCIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1JFUVVFU1QiLCJ0aXRsZSIsInVzZXJOaWNrTmFtZSIsImJvcmRlciIsImJvcmRlckNvbG9yIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiX19odG1sIiwiY29udGVudCIsImNsaWNrZWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiLCJpbml0aWFsU3RhdGUiLCJpbWFnZVBhdGhzIiwibGlrZUlzQ2xpY2tlZCIsIk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCIsIk1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9GQUlMVVJFIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfRkFJTFVSRSIsIlRFU1RfUkVRVUVTVCIsIlRFU1RfU1VDQ0VTUyIsIlRFU1RfRkFJTFVSRSIsInJlZHVjZXIiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJmb3JFYWNoIiwicHVzaCIsImFycmF5IiwicGFyYW0iLCJ2YWx1ZXMiLCJkYXkiLCJEYXRlIiwiZGF0ZSIsInRvTG9jYWxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQSxNQUFNQSxJQUFJLEdB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QUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRldGFpbFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJcclxuY29uc3QgSG9tZSA9ICgpID0+e1xyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2PjxoMT5oZWxsbzwvaDE+PC9kaXY+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsgIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZVJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IGN1c3R1bURhdGVGb3JtYXQgZnJvbSAgJy4uLy4uL3V0aWxDb21wb25lbnQvY3VzdHVtRGF0ZUZvcm1hdCc7XHJcbmltcG9ydCB7RGlzbGlrZVR3b1RvbmUsTGlrZVR3b1RvbmUgLCBVc2VyT3V0bGluZWQsIEZpZWxkVGltZU91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuXHJcbmNvbnN0IENvbW1lbnQxMDAxQnlDb21tZW50cyA9ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5mbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50SWQsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5Q29tbWVudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRCeUNvbW1lbnRMaWtlQnRuLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2VkQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VEaXNsaWtlZmxhZ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZUYWJsZUNlbGwwMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOKUlCZuYnNwOzxiPnt3aG99PC9iPiAmbmJzcDsgPHNtYWxsPntjdXN0dW1EYXRlRm9ybWF0KGNyZWF0ZWREYXRlKX08L3NtYWxsPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO3tjb21tZW50fVxyXG4gICAgICAgICAgICAgICAgPGRpdiAgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxJVwiLGRpc3BsYXk6XCJibG9ja1wiLGZsb2F0OlwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaWtlVHdvVG9uZSBvbkNsaWNrPXsoKT0+Y29tbWVudEJ5Q29tbWVudExpa2VCdG4oYnlDb21tZW50SWQsZmxhZywnZ29vZCcpfSB0d29Ub25lQ29sb3I9e2NsaWNrZWRDb21wb25lbnQgJiYgbGlrZURpc2xpa2VmbGFnPT09J2dvb2QnID8gXCIjZmYwMDAwXCIgOiBcIiMxYmE2NDBcIn0vPntjbGlja2VkQ29tcG9uZW50ICYmIGxpa2VEaXNsaWtlZmxhZz09PSdnb29kJyA/IHBhcnNlSW50KGdvb2QpKzE6Z29vZH1cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8RGlzbGlrZVR3b1RvbmUgb25DbGljaz17KCk9PmNvbW1lbnRCeUNvbW1lbnRMaWtlQnRuKGJ5Q29tbWVudElkLGZsYWcsJ2JhZCcpfSB0d29Ub25lQ29sb3I9e2NsaWNrZWRDb21wb25lbnQgJiYgbGlrZURpc2xpa2VmbGFnPT09J2JhZCcgPyBcIiNmZjAwMDBcIiA6IFwiIzFiYTY0MFwifSAvPntjbGlja2VkQ29tcG9uZW50ICYmIGxpa2VEaXNsaWtlZmxhZz09PSdiYWQnID8gcGFyc2VJbnQoYmFkKSsxOmJhZH1cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ29tbWVudDEwMDFCeUNvbW1lbnRzKTsgIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZVJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgY3VzdHVtRGF0ZUZvcm1hdCBmcm9tICAnLi4vLi4vdXRpbENvbXBvbmVudC9jdXN0dW1EYXRlRm9ybWF0JztcclxuXHJcbmltcG9ydCBDb21tZW50MTAwMUJ5Q29tbWVudHMgZnJvbSAnLi9tYWluUG9zdHNfMTAwMV9jb21tZW50QnlDb21tZW50cydcclxuaW1wb3J0IENvbW1lbnRUZXh0QXJlYSAgICAgICBmcm9tICcuL21haW5Qb3N0c18xMDAxX3RleHRBcmVhJ1xyXG5pbXBvcnQge0Rpc2xpa2VUd29Ub25lLExpa2VUd29Ub25lfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuaW1wb3J0IFxyXG4gICAge1xyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfUkVRVUVTVCxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9SRVFVRVNULFxyXG4gICAgfSBcclxuZnJvbSAnLi4vLi4vcmVkdWNlcnMvbWFpblBvc3RzXzEwMDEnOyBcclxuXHJcbmNvbnN0IENvbW1lbnRzMTAwMSA9ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlckluZm8sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgIHdobyxcclxuICAgICAgICAgICAgICAgICAgICAgIGZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGdvb2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkRGF0ZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaWtlQnRuLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaWtlRGlzbGlrZWZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBieUNvbW1lbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRCeUNvbW1lbnRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cyxcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZm9sZExpc3QsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHtjbGlja0NvbW1lbnRJZCxcclxuICAgICAgICAgICAgY29tbWVudEJ5Q29tbWVudENvdW50LFxyXG4gICAgICAgICAgICBjb21tZW50QnlDb21tZW50SW5zZXJ0Q29tbWVudElkfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLm1haW5Qb3N0c18xMDAxKTsgXHJcbiAgY29uc3QgcmVmID0gY3JlYXRlUmVmKCk7IFxyXG4gIGNvbnN0IGJsYW5rX3BhdHRlcm4gPSAvXlxccyt8XFxzKyYvZzsgIFxyXG4gICAgICAgIFxyXG4gIC8v64yA64yT6riAIOyeheugpSBcclxuICBjb25zdCBpbnNlcnRDb21tZW50ID0gdXNlQ2FsbGJhY2soKHBvc3RGbGFnLHBvc3RJZCxuaWNrTmFtZSAsY29tbWVudCk9PntcclxuXHJcbiAgICAgICAgaWYoY29tbWVudC5sZW5ndGggPT09IDAgfHwgY29tbWVudC5yZXBsYWNlKGJsYW5rX3BhdHRlcm4sJycpPT09XCJcIil7XHJcbiBcclxuICAgICAgICAgICAgYWxlcnQoJ+uMk+q4gOydhCDsnoXroKXtlbQg7KO87IS47JqUIScpOyBcclxuICAgICAgICAgICAgaWYocmVmLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuZm9jdXNJbnB1dCgpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGNvbW1lbnQubGVuZ3RoID09PSAzMDApe1xyXG4gICAgICAgICAgICBhbGVydCgnMzAw7J6QIOydtOyDgSDsnoXroKUg7ZWgIOyImCDsl4bsirXri4jri6QuJyk7IFxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLy/rjIDrjJPquIAg7J6F66ClXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfUkVRVUVTVCwgXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRJZCxcclxuICAgICAgICAgICAgICAgIHdobzp1c2VySW5mbyxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQsICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgICAgIC8v7J247ZKLIOy0iOq4sO2ZlCwg7Y+s7Luk7IqkIFxyXG4gICAgICAgIGlmKHJlZi5jdXJyZW50KXtcclxuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LmNsZWFySW5wdXQoKTsgXHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5mb2N1c0lucHV0KCk7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0sW21haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMscmVmLGNvbW1lbnRCeUNvbW1lbnRJbnNlcnRDb21tZW50SWQsY29tbWVudEJ5Q29tbWVudENvdW50XSk7XHJcblxyXG5cclxuXHJcbiAgICAgIC8v64yA64yT6riAIOyii+yVhOyalCwg7Iur7Ja07JqUIOuyhOuToCBcclxuICAgICAgY29uc3QgY29tbWVudEJ5Q29tbWVudExpa2VCdG4gPXVzZUNhbGxiYWNrKChieUNvbW1lbnRJZCxmbGFnLGxpa2VEaXNsaWtlKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZmxhZz09PVwiWVwiKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+ydtOuvuCDsoovslYTsmpQhIOyLq+yWtOyalCEg7ZaI7Iq164uI64ukLicpOyBcclxuICAgICAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNleyAgXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBieUNvbW1lbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hvOnVzZXJJbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFnIDogbGlrZURpc2xpa2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHM6Wy4uLm1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNdLCBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhbGVydChgJHtsaWtlRGlzbGlrZX1gKTsgXHJcblxyXG4gICAgICB9LFttYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9J2RpdlRhYmxlUm93JyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiZGl2VGFibGVDZWxsXCI+ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8Yj57d2hvfTwvYj4gJm5ic3A7IDxzbWFsbD57Y3VzdHVtRGF0ZUZvcm1hdChjcmVhdGVkRGF0ZSl9PC9zbWFsbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21tZW50fTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpPT5jb21tZW50QnlDb21tZW50TGlzdChwb3N0RmxhZyxuaWNrTmFtZSxwb3N0SWQsY29tbWVudElkLGNsaWNrQ29tbWVudElkLHVuZm9sZExpc3QpfT57YOuMk+q4gFske2NvbW1lbnRCeUNvbW1lbnRJbnNlcnRDb21tZW50SWQ9PT1jb21tZW50SWQgPyBjb21tZW50QnlDb21tZW50Q291bnQgOiBieUNvbW1lbnRDb3VudH1dYCAgIH08L2E+IHtjb21tZW50SWR9ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBzdHlsZT17e21hcmdpblRvcDpcIjElXCIsZGlzcGxheTpcImJsb2NrXCIsZmxvYXQ6XCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlrZVR3b1RvbmUgb25DbGljaz17KCk9Pmxpa2VCdG4oY29tbWVudElkLGZsYWcsJ2dvb2QnKX0gdHdvVG9uZUNvbG9yPXtjbGlja2VkQ29tcG9uZW50ICYmIGxpa2VEaXNsaWtlZmxhZz09PSdnb29kJyA/IFwiI2ZmMDAwMFwiIDogXCIjMWJhNjQwXCJ9Lz57Y2xpY2tlZENvbXBvbmVudCAmJiBsaWtlRGlzbGlrZWZsYWc9PT0nZ29vZCcgPyBwYXJzZUludChnb29kKSsxOmdvb2R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNsaWtlVHdvVG9uZSBvbkNsaWNrPXsoKT0+bGlrZUJ0bihjb21tZW50SWQsZmxhZywnYmFkJyl9IHR3b1RvbmVDb2xvcj17Y2xpY2tlZENvbXBvbmVudCAmJiBsaWtlRGlzbGlrZWZsYWc9PT0nYmFkJyA/IFwiI2ZmMDAwMFwiIDogXCIjMWJhNjQwXCJ9IC8+e2NsaWNrZWRDb21wb25lbnQgJiYgbGlrZURpc2xpa2VmbGFnPT09J2JhZCcgPyBwYXJzZUludChiYWQpKzE6YmFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuXHJcbiAgICAgICAgICAgICAgICB7LyrrjIDrjJPquIAg66as7Iqk7Yq4Ki99XHJcbiAgICAgICAgICAgICAgICB7dW5mb2xkTGlzdCA9PT0ndW5mb2xkJyAmJiBjb21tZW50SWQgPT09IGNsaWNrQ29tbWVudElkICYmIG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMgJiYgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cy5tYXAoKHYsaSk9PihcclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudDEwMDFCeUNvbW1lbnRzICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0RmxhZz17cG9zdEZsYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZT17bmlja05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3RJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvPXt1c2VySW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZD17Y29tbWVudElkfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5Q29tbWVudElkPXt2LmJ5Q29tbWVudElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17di5jb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvPXt2Lndob31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29kPXt2Lmdvb2R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWQ9e3YuYmFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZz17di5mbGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZERhdGU9e3YuY3JlYXRlZERhdGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudEJ5Q29tbWVudExpa2VCdG49e2NvbW1lbnRCeUNvbW1lbnRMaWtlQnRufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRDb21wb25lbnQ9e3YuY2xpY2tlZENvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VEaXNsaWtlZmxhZz17di5saWtlRGlzbGlrZWZsYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHsvKuuMgOuMk+q4gCDsnoXroKUg7LC9Ki99XHJcbiAgICAgICAgICAgICAgIHt1bmZvbGRMaXN0ID09PSd1bmZvbGQnICYmIGNsaWNrQ29tbWVudElkID09PSBjb21tZW50SWQgJiYgYnlDb21tZW50Q291bnQgPj0gMCAmJiBcclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFRleHRBcmVhICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0RmxhZz17cG9zdEZsYWd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU9e25pY2tOYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdElkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvPXt1c2VySW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydENvbW1lbnQ9e2luc2VydENvbW1lbnR9XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+ICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDb21tZW50czEwMDEpOyAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssdXNlRWZmZWN0LCB1c2VTdGF0ZSwgY3JlYXRlUmVmICxmb3J3YXJkUmVmLHVzZUltcGVyYXRpdmVIYW5kbGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCdcclxuXHJcbi8vZm9yd2FyZFJlZlxyXG4vL2h0dHBzOi8va28ucmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGZvcndhcmRyZWZcclxuXHJcbmNvbnN0ICBDb21tZW50VGV4dEFyZWE9IGZvcndhcmRSZWYoKHtwb3N0RmxhZyxuaWNrTmFtZSxwb3N0SWQsdXNlckluZm8saW5zZXJ0Q29tbWVudCx1bmZvbGRMaXN0fSAscmVmKSA9PntcclxuXHJcbiAgICBjb25zdCBmb2N1c1JlZiA9IGNyZWF0ZVJlZigpOyBcclxuICAgIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKCcnKTsgXHJcblxyXG4gIFxyXG4gIC8vaW5wdXQgYm94IGNsZWFyICwgZm9jdXNcclxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcclxuICAgIGNsZWFySW5wdXQgOiAoKSA9PiBzZXRDb21tZW50KCcnKSxcclxuICAgIGZvY3VzSW5wdXQgOiAoKSA9PiBmb2N1c1JlZi5jdXJyZW50LmZvY3VzKCksXHJcbiAgfSkpO1xyXG5cclxuXHJcbiAgLy/rjJPquIAg7J6F66ClIHRleHRBcmVhIFxyXG4gIGNvbnN0IG9uQ2hhZ2VDb21tZW50ID11c2VDYWxsYmFjaygoZSk9PntcclxuXHJcbiAgICBpZihjb21tZW50Lmxlbmd0aCA9PT0gMzAwKXtcclxuICAgICAgYWxlcnQoJzMwMOyekCDsnbTsg4Eg7J6F66ClIO2VoCDsiJgg7JeG7Iq164uI64ukLicpOyBcclxuICAgICAgcmV0dXJuOyBcclxuICAgIH1cclxuICAgIHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpOyBcclxuXHJcbiAgfSxbY29tbWVudF0pOyBcclxuICBcclxuXHJcblxyXG4gICAgXHJcblxyXG5cclxuXHJcbnJldHVybiAoXHJcbiAgICA8PlxyXG4gIFxyXG4gICAgPHRleHRhcmVhIHZhbHVlPXtjb21tZW50fSByZWY9e2ZvY3VzUmVmfSBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjgwcHhcIixtYXJnaW5Ub3A6XCIzJVwifX0gb25DaGFuZ2U9e29uQ2hhZ2VDb21tZW50fSBwbGFjZWhvbGRlcj17IHVzZXJJbmZvID8gXCLrjJPquIDsnYQg7J6R7ISx7ZW0IOuztOyEuOyalCFcIiA6IFwi66Gc6re47J247J20IO2VhOyalO2VnCDshJzruYTsiqQg7J6F64uI64ukLlwifSByZWFkT25seT17dXNlckluZm8gPyBmYWxzZSA6IHRydWV9Lz5cclxuICAgXHJcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiMSVcIixkaXNwbGF5OlwiYmxvY2tcIixmbG9hdDpcImxlZnRcIn19PlxyXG4gICAgICB7Y29tbWVudCA/IGNvbW1lbnQubGVuZ3RoICA6IDAgfSAmIzQ3OyAzMDBcclxuICAgIDwvZGl2PlxyXG5cclxuICAgIHt1c2VySW5mbyAmJiBcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiMSVcIixkaXNwbGF5OlwiYmxvY2tcIixmbG9hdDpcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpPT5pbnNlcnRDb21tZW50KHBvc3RGbGFnLHBvc3RJZCxuaWNrTmFtZSxjb21tZW50KX0+64yT6riA64us6riwPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgPC8+XHJcbilcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50VGV4dEFyZWE7ICIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsIHVzZVN0YXRlLCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxJ1xyXG5pbXBvcnQgQ29tbWVudHMxMDAxIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFfY29tbWVudHMnXHJcbmltcG9ydCBDb21tZW50VGV4dEFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMV90ZXh0QXJlYSdcclxuaW1wb3J0IFxyXG4gICAge01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCwgXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9SRVFVRVNUXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMSc7IFxyXG5cclxuaW1wb3J0IHtEaXNsaWtlVHdvVG9uZSxMaWtlVHdvVG9uZSAsIFVzZXJPdXRsaW5lZCwgRmllbGRUaW1lT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IGN1c3R1bURhdGVGb3JtYXQgZnJvbSAgJy4uL3V0aWxDb21wb25lbnQvY3VzdHVtRGF0ZUZvcm1hdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IGRldGFpbFBhZ2UgID0gKHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWR9KSA9PntcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuICBjb25zdCB7bWFpblBvc3RzXzEwMDFJbmZvICwgXHJcbiAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudHMsXHJcbiAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNcclxuICAgICAgICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUubWFpblBvc3RzXzEwMDEpOyBcclxuXHJcbiAgY29uc3Qge3VzZXJJbmZvfSAgICAgID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgcmVmID0gY3JlYXRlUmVmKCk7IFxyXG4gIGNvbnN0IGJsYW5rX3BhdHRlcm4gPSAvXlxccyt8XFxzKyYvZzsgIFxyXG4gIGNvbnN0IFt1bmZvbGRMaXN0LHNldFVuZm9sZExpc3RdID0gdXNlU3RhdGUoJ2ZvbGQnKTsgXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgXHJcbiAgICAvL+uMk+q4gCDrpqzsiqTtirggXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCwgXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIHBvc3RJZCxcclxuICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICB3aG86dXNlckluZm8sIFxyXG4gICAgICB9XHJcbiAgICB9KTsgXHJcblxyXG4gICAgLy/sg4HshLgg7KCV67O0IFxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNULCBcclxuICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgd2hvOnVzZXJJbmZvLFxyXG4gICAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH0sW10pO1xyXG5cclxuICAvL+qyjOyLnOq4gCDsoovslYTsmpQsIOyLpOyWtOyalCDrsoTtirxcclxuICBjb25zdCBwb3N0TGlrZUJ0biA9IHVzZUNhbGxiYWNrKChsaWtlRmxhZyk9PntcclxuXHJcbiAgICBpZighdXNlckluZm8pe1xyXG4gICAgICBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VnCDshJzruYTsiqQg7J6F64uI64ukLicpOyBcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG1haW5Qb3N0c18xMDAxSW5mb1swXS5mbGFnPT09J1knKXtcclxuICAgICAgXHJcbiAgICAgIGFsZXJ0KCfsnbTrr7gg7KKL7JWE7JqUISDsi6vslrTsmpQhIO2WiOyKteuLiOuLpC4nKTsgICAgICAgXHJcbiAgICAgIHJldHVybjsgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL+qyjOyLnOq4gCDsoovslYTsmpQhXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgICBwb3N0RmxhZyxcclxuICAgICAgICAgICAgICB3aG86IHVzZXJJbmZvLCBcclxuICAgICAgICAgICAgICBmbGFnOmxpa2VGbGFnLCBcclxuICAgICAgICAgICAgICBtYWluUG9zdHNfMTAwMUluZm86Wy4uLm1haW5Qb3N0c18xMDAxSW5mb10sIFxyXG4gICAgICAgICAgICB9XHJcbiAgICB9KTsgXHJcbiAgXHJcblxyXG4gIH0sW21haW5Qb3N0c18xMDAxSW5mb10pXHJcblxyXG5cclxuICAvL+uMk+q4gCDsoovslYTsmpQsIOyLq+yWtOyalCDrsoTtirwgXHJcbiAgY29uc3QgbGlrZUJ0biA9dXNlQ2FsbGJhY2soKGNvbW1lbnRpZCxmbGFnLGxpa2VEaXNsaWtlKT0+e1xyXG4gICAgICBpZighdXNlckluZm8pe1xyXG4gICAgICAgIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWcIOyEnOu5hOyKpCDsnoXri4jri6QuJyk7IFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoZmxhZz09PVwiWVwiKXtcclxuICAgICAgICBcclxuICAgICAgICBhbGVydCgn7J2066+4IOyii+yVhOyalCEg7Iur7Ja07JqUISDtlojsirXri4jri6QuJyk7IFxyXG4gICAgICAgIHJldHVybjsgXHJcbiAgXHJcbiAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAvL+uMk+q4gCDsoovslYTsmpQhXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNULCBcclxuICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICBjb21tZW50aWQsXHJcbiAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgIGZsYWc6IGxpa2VEaXNsaWtlICxcclxuICAgICAgICAgICAgd2hvOiB1c2VySW5mbyxcclxuICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudHM6Wy4uLm1haW5Qb3N0c18xMDAxQ29tbWVudHNdLFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgICBhbGVydChgJHtsaWtlRGlzbGlrZX1gKTsgXHJcbiAgICBcclxuICAgIH0sW21haW5Qb3N0c18xMDAxQ29tbWVudHNdKTsgXHJcblxyXG5cclxuICAvL+uMk+q4gCDsnoXroKUgXHJcbiAgY29uc3QgaW5zZXJ0Q29tbWVudCA9IHVzZUNhbGxiYWNrKChwb3N0RmxhZyxwb3N0SWQsbmlja05hbWUgLGNvbW1lbnQpPT57XHJcbiAgICBpZihjb21tZW50Lmxlbmd0aCA9PT0gMCB8fCBjb21tZW50LnJlcGxhY2UoYmxhbmtfcGF0dGVybiwnJyk9PT1cIlwiKXtcclxuICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIGFsZXJ0KCfrjJPquIDsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalCEnKTsgXHJcbiAgICAgICAgaWYocmVmLmN1cnJlbnQpe1xyXG4gICAgICAgICAgcmVmLmN1cnJlbnQuZm9jdXNJbnB1dCgpOyBcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYoY29tbWVudC5sZW5ndGggPT09IDMwMCl7XHJcbiAgICAgICAgICBhbGVydCgnMzAw7J6QIOydtOyDgSDsnoXroKUg7ZWgIOyImCDsl4bsirXri4jri6QuJyk7IFxyXG4gICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgLy/rjJPquIAg7J6F66ClXHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNULCBcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICAgIG5pY2tOYW1lICxcclxuICAgICAgICAgICAgICB3aG86dXNlckluZm8sIFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VW5mb2xkTGlzdCgnZm9sZCcpOyBcclxuXHJcblxyXG4gICAgICAgICAvL+yduO2SiyDstIjquLDtmZQsIO2PrOy7pOyKpCBcclxuICAgICAgICBpZihyZWYuY3VycmVudCl7XHJcbiAgICAgICAgICByZWYuY3VycmVudC5jbGVhcklucHV0KCk7IFxyXG4gICAgICAgICAgcmVmLmN1cnJlbnQuZm9jdXNJbnB1dCgpOyBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50cyxyZWZdKTtcclxuXHJcblxyXG5cclxuICAgICAgLy/rjIDrjJPquIAg66as7Iqk7Yq4IFxyXG4gICAgICBjb25zdCBjb21tZW50QnlDb21tZW50TGlzdCA9dXNlQ2FsbGJhY2soKHBvc3RGbGFnLG5pY2tOYW1lLHBvc3RJZCxjb21tZW50SWQsY2xpY2tDb21tZW50SWQsdW5mb2xkTGlzdCk9PntcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZih1bmZvbGRMaXN0PT09J3VuZm9sZCcgJiYgY29tbWVudElkID09PSBjbGlja0NvbW1lbnRJZCl7XHJcbiAgICAgICAgICAgICAgICAgIHNldFVuZm9sZExpc3QoJ2ZvbGQnKTsgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgc2V0VW5mb2xkTGlzdCgndW5mb2xkJyk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hvOnVzZXJJbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pOyAgICAgIFxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgIH0sW21haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMsdW5mb2xkTGlzdF0pOyBcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIFxyXG4gICAgPGRpdiA+XHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIO2DgOydtO2LgC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZScgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3dUaCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVDZWxsVGgnPnttYWluUG9zdHNfMTAwMUluZm9bMF0udGl0bGV9IFt7bWFpblBvc3RzXzEwMDFDb21tZW50cy5sZW5ndGh9XXttYWluUG9zdHNfMTAwMUluZm9bMF0uZmxhZ308L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlQ2VsbCc+XHJcbiAgICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4gIHttYWluUG9zdHNfMTAwMUluZm9bMF0udXNlck5pY2tOYW1lfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGRUaW1lT3V0bGluZWQgLz4gIHtjdXN0dW1EYXRlRm9ybWF0KG1haW5Qb3N0c18xMDAxSW5mb1swXS5jcmVhdGVkRGF0ZSl9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHttYWluUG9zdHNfMTAwMUluZm9bMF0uZ29vZH0gPERpc2xpa2VUd29Ub25lICB0d29Ub25lQ29sb3I9XCIjMWJhNjQwXCIvPiA6IHttYWluUG9zdHNfMTAwMUluZm9bMF0uYmFkfSBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7YOA7J207YuALS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCJhdXRvXCIsIGJvcmRlcjpcIjFweCBzb2xpZFwiLCBib3JkZXJDb2xvcjpcIiM4Y2M0OWNcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgICAgIOq0keqzoOyeheuLiOuLpC5cclxuICAgICAgPC9kaXY+XHJcbiAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIOy7qO2FkOy4oC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6bWFpblBvc3RzXzEwMDFJbmZvWzBdLmNvbnRlbnR9fS8+XHJcbiAgICAgPC9kaXY+IFxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDsu6jthZDsuKAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfSAgIFxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcImF1dG9cIiwgYm9yZGVyOlwiMXB4IHNvbGlkXCIsIGJvcmRlckNvbG9yOlwiIzhjYzQ5Y1wiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAg6rSR6rOg7J6F64uI64ukLlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuyii+yVhOyalCDsi6vslrTsmpQg67KE7Yq8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZSc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJyBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PnBvc3RMaWtlQnRuKCdnb29kJyl9PjxMaWtlVHdvVG9uZSAgdHdvVG9uZUNvbG9yPXttYWluUG9zdHNfMTAwMUluZm9bMF0uY2xpY2tlZCA9PT0gJ2dvb2QnID8gXCIjZmYwMDAwXCI6XCIjMWJhNjQwXCJ9Lz48L0J1dHRvbj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8QnV0dG9uIG9uQ2xpY2s9eygpPT5wb3N0TGlrZUJ0bignYmFkJyl9PjxEaXNsaWtlVHdvVG9uZSB0d29Ub25lQ29sb3I9e21haW5Qb3N0c18xMDAxSW5mb1swXS5jbGlja2VkID09PSdiYWQnID8gXCIjZmYwMDAwXCI6XCIjMWJhNjQwXCJ9Lz48L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKuyii+yVhOyalCDsi6vslrTsmpQg67KE7Yq8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgey8q64yT6riAIOyeheugpS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgIDxDb21tZW50VGV4dEFyZWEgICBcclxuICAgICAgICAgICAgcG9zdEZsYWc9e3Bvc3RGbGFnfSBcclxuICAgICAgICAgICAgbmlja05hbWU9e25pY2tOYW1lfSBcclxuICAgICAgICAgICAgcG9zdElkPXtwb3N0SWR9IFxyXG4gICAgICAgICAgICB1c2VySW5mbz17dXNlckluZm99XHJcbiAgICAgICAgICAgIGluc2VydENvbW1lbnQ9e2luc2VydENvbW1lbnR9XHJcbiAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAvPlxyXG4gICAgey8q64yT6riAIOyeheugpS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG5cclxuXHJcblxyXG4gICAgey8q64yT6riAIOumrOyKpO2KuC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkaXZUYWJsZVwiPlxyXG4gICAgICB7bWFpblBvc3RzXzEwMDFDb21tZW50cyAmJiBtYWluUG9zdHNfMTAwMUNvbW1lbnRzLm1hcCgodixpKT0+XHJcblxyXG4gICAgICAgIDxDb21tZW50czEwMDEgXHJcbiAgICAgICAgICAgICAga2V5PXtpfSBcclxuICAgICAgICAgICAgICBwb3N0RmxhZz17cG9zdEZsYWd9IFxyXG4gICAgICAgICAgICAgIG5pY2tOYW1lPXtuaWNrTmFtZX0gXHJcbiAgICAgICAgICAgICAgcG9zdElkPXtwb3N0SWR9IFxyXG4gICAgICAgICAgICAgIHVzZXJJbmZvPXt1c2VySW5mb31cclxuICAgIFxyXG4gICAgICAgICAgICAgIGNvbW1lbnRJZD17di5jb21tZW50SWR9IFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQ9e3YuY29tbWVudH0gXHJcbiAgICAgICAgICAgICAgd2hvPXt2Lndob30gXHJcbiAgICAgICAgICAgICAgZmxhZz17di5mbGFnfSBcclxuXHJcbiAgICAgICAgICAgICAgZ29vZD17di5nb29kfVxyXG4gICAgICAgICAgICAgIGJhZD17di5iYWR9ICAgICAgXHJcbiAgICAgICAgICAgICAgY3JlYXRlZERhdGU9e3YuY3JlYXRlZERhdGV9IFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgbGlrZUJ0bj17bGlrZUJ0bn1cclxuXHJcbiAgICAgICAgICAgICAgY2xpY2tlZENvbXBvbmVudD17di5jbGlja2VkQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgIGxpa2VEaXNsaWtlZmxhZz17di5saWtlRGlzbGlrZWZsYWd9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYnlDb21tZW50Q291bnQ9e3YuYnlDb21tZW50Q291bnR9XHJcbiAgICAgICAgICAgICAgY29tbWVudEJ5Q29tbWVudExpc3Q9e2NvbW1lbnRCeUNvbW1lbnRMaXN0fVxyXG4gICAgICAgICAgICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHM9e21haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNbMF0gJiYgbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c1swXS5jb21tZW50SWQgPT09IHYuY29tbWVudElkID8gbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cyA6ICcnfVxyXG4gICAgICAgICAgICAgIHVuZm9sZExpc3Q9e3VuZm9sZExpc3R9XHJcblxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgIFxyXG4gICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgICB7LyrrjJPquIAg66as7Iqk7Yq4LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbn1cclxuXHJcblxyXG5kZXRhaWxQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PntcclxuXHJcbiAgY29uc3QgcG9zdElkICAgPSBjb250ZXh0LnF1ZXJ5LnBvc3RJZDsgXHJcbiAgY29uc3Qgbmlja05hbWUgPSBjb250ZXh0LnF1ZXJ5Lm5pY2tOYW1lOyBcclxuICBjb25zdCBwb3N0RmxhZyA9IGNvbnRleHQucXVlcnkucG9zdEZsYWc7IFxyXG4gIHJldHVybiB7bmlja05hbWUscG9zdEZsYWcscG9zdElkfTsgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZGV0YWlsUGFnZTsgIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0ICBpbml0aWFsU3RhdGUgPSB7XHJcblxyXG4gICAgXHJcbiAgICBtYWluUG9zdHNfMTAwMSAgICAgOiBbXSwgXHJcbiAgICBtYWluUG9zdHNfMTAwMUluZm8gOiBbe31dLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/tlZgg7J206rKD65WM66ekIOuqh+yLnOqwhOydhCDrgqDroKQg66i57JeI64qU7KeALi4g7JWE7YGs66a0IOyDiOyasOuLmOydtCDtlbTqsrDrspXsnYQg7JWM66Ck7KO87IusXHJcbiAgICBtYWluUG9zdHNfMTAwMUNvbW1lbnRzIDogW10sXHJcbiAgICBtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzOlt7fV0sICBcclxuICAgIGltYWdlUGF0aHMgICAgICAgICA6IFtdLFxyXG4gICAgbGlrZUlzQ2xpY2tlZCA6bnVsbCwgXHJcbiAgICBjbGlja0NvbW1lbnRJZDpudWxsLCBcclxuICAgIGNvbW1lbnRCeUNvbW1lbnRDb3VudDowLCAgICAgICAgICAgICAvL+uMgOuMk+q4gCDsnoXroKUg7ZuEIOuMgOuMk+q4gCDsiKvsnpAg67OA6rK9IFxyXG4gICAgY29tbWVudEJ5Q29tbWVudEluc2VydENvbW1lbnRJZDpudWxsLC8v7Ja065akIOuMk+q4gOyXkCDrjIDrjJPquIDsnYQg64us7JWY64qU7KeAIOyVjOq4sCDsnITtlZwgZmxhZyDqsJJcclxuXHJcblxyXG59XHJcblxyXG4vL+qyjOyLnOusvCBsaXN0XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1Q9J01BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1M9J01BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkU9J01BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSc7XHJcblxyXG4vL+qyjOyLnOusvCDsg4HshLggXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUID0nTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUyA9J01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkUgPSdNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFJzsgXHJcblxyXG4vL+qyjOyLnOusvCDrjJPquIAgbGlzdCBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19TVUNDRVNTID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfRkFJTFVSRSA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19GQUlMVVJFJzsgXHJcblxyXG4vL+qyjOyLnOusvCDrjIDrjJPquIAgbGlzdCBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCA9J01BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9TVUNDRVNTID0nTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9TVUNDRVNTJzsgXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX0ZBSUxVUkUgPSdNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX0ZBSUxVUkUnOyBcclxuXHJcbi8v6rKM7Iuc66y8IOuMk+q4gCBpbnNlcnQgXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfU1VDQ0VTUyA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9GQUlMVVJFID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfRkFJTFVSRSc7IFxyXG5cclxuLy/qsozsi5zrrLwg64yA64yT6riAIGluc2VydCBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfUkVRVUVTVCA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9TVUNDRVNTID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX0ZBSUxVUkUgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9GQUlMVVJFJzsgXHJcblxyXG4vL+qyjOyLnOq4gCBsaWtlIC8gZGlzbGlrZVxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1QgPSAnTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1NVQ0NFU1MgPSAnTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX0ZBSUxVUkUgPSAnTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX0ZBSUxVUkUnOyBcclxuXHJcbi8v6rKM7Iuc6riAIOuMk+q4gCBsaWtlIC8gZGlzbGlrZSBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9TVUNDRVNTID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfRkFJTFVSRSA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9GQUlMVVJFJzsgXHJcblxyXG4vL+qyjOyLnOq4gCDrjIDrjJPquIAgbGlrZSAvIGRpc2xpa2UgXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9SRVFVRVNUID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfU1VDQ0VTUyA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX0ZBSUxVUkUgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfRkFJTFVSRSc7IFxyXG5cclxuZXhwb3J0IGNvbnN0IFRFU1RfUkVRVUVTVCA9ICdURVNUX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IFRFU1RfU1VDQ0VTUyA9ICdURVNUX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IFRFU1RfRkFJTFVSRSA9ICdURVNUX0ZBSUxVUkUnOyBcclxuXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PntcclxuXHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG5cclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG5cclxuLy/qsozsi5zquIAg66as7Iqk7Yq4IOqwgOyguOyYpOq4sCAgICAgICBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfTElTVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMS5sZW5ndGg9MDsgXHJcbiAgICAgICAgICAgICAgICAvL+uwsOyXtCDstIjquLDtmZRcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDEucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfTElTVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy/qsozsi5zquIAg64yT6riAIElOU0VSVCAgIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1NVQ0NFU1M6IHtcclxuXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYsaSk9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRzLnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vL+qyjOyLnOq4gCDrjIDrjJPquIAgSU5TRVJUICAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cy5sZW5ndGg9MDsgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jb21tZW50QnlDb21tZW50Q291bnQgPSBhY3Rpb24uZGF0YS5hcnJheS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jb21tZW50QnlDb21tZW50SW5zZXJ0Q29tbWVudElkPWFjdGlvbi5kYXRhLnBhcmFtLmNvbW1lbnRJZDtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmFycmF5LmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cy5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8v6rKM7Iuc6riAIOyDgeyEuCDtjpjsnbTsp4Ag6rCA7KC47Jik6riwIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUzoge1xyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxSW5mby5sZW5ndGg9MDsgXHJcbiAgICAgICAgICAgICAgICAvL+uwsOyXtCDstIjquLDtmZRcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFJbmZvLnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vL+qyjOyLnOq4gCDrjJPquIAg6rCA7KC47Jik6riwICBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1NVQ0NFU1M6IHsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFDb21tZW50cy5sZW5ndGg9MDsgXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uZGF0YS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudHMucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfRkFJTFVSRToge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vL+qyjOyLnOq4gCDrjIDrjJPquIAg6rCA7KC47Jik6riwIGNsaWNrQ29tbWVudElkXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfU1VDQ0VTUzogeyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNsaWNrQ29tbWVudElkPWFjdGlvbi5kYXRhLnBhcmFtLmNvbW1lbnRJZFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuYXJyYXkuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzLnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy/qsozsi5zquIAgbGlrZSAvIGRpc2xpa2UgICAgICAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxSW5mby5sZW5ndGggPSAwOyBcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmFycmF5LmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFJbmZvLnB1c2godik7IFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfRkFJTFVSRToge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vL+qyjOyLnOq4gCDrjJPquIAgbGlrZSAvIGRpc2xpa2UgICAgICAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFDb21tZW50cy5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy/qsozsi5zquIAg64yA64yT6riAIGxpa2UgLyBkaXNsaWtlICAgICAgIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cy5sZW5ndGggPTA7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uZGF0YS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfRkFJTFVSRToge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQgOiBicmVhazsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pOyBcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImV4cG9ydCBjb25zdCAgY3VzdHVtRGF0ZUZvcm1hdCA9ICh2YWx1ZXM9JzIwMjAtMDktMjIgMTA6MjM6MTEnKT0+e1xyXG5cclxuICAgIGNvbnN0IGRheSA9IG5ldyBEYXRlKHZhbHVlcyk7IFxyXG4gICAgLy9jb25zdCBkYXlPZldlZWtBcnJheSA9Wyco7J28KScsICco7JuUKScsICco7ZmUKScsICco7IiYKScsICco66qpKScsICco6riIKScsICco7YagKSddOyBcclxuICAgIC8vY29uc3QgZGF5T2ZXZWVrID0gZGF5T2ZXZWVrQXJyYXlbbmV3IERhdGUodmFsdWVzKS5nZXREYXkoKV07IFxyXG4gICAgLy9sZXQgZGF0ZSA9IGRheS50b0xvY2FsZVN0cmluZygpKycgJytkYXlPZldlZWs7IFxyXG4gICAgbGV0IGRhdGUgPSBkYXkudG9Mb2NhbGVTdHJpbmcoKTsgXHJcbiAgICBcclxuICAgIHJldHVybiBkYXRlOyBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1c3R1bURhdGVGb3JtYXQ7ICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==