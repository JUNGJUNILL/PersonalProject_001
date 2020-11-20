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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\components\\mainPosts_1001\\mainPosts_1001_comments.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Comments1001 = ({
  key,
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
  likeDislikeflag
}) => {
  const gggg = () => {
    alert(clickedComponent);
    return;
  };

  console.log('clickedComponent=>', clickedComponent, 'likeDislikeflag=>', likeDislikeflag);
  return __jsx("div", {
    className: "divTableRow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, who), " \xA0 ", __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 41
    }
  }, Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_2__["default"])(createdDate)), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 87
    }
  }), comment, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 30
    }
  }), "\uB2F5\uAE00 [9] ", commentId, " ", __jsx("input", {
    type: "button",
    value: "ttt",
    onClick: gggg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 40
    }
  }), __jsx("div", {
    style: {
      marginTop: "1%",
      display: "block",
      float: "right"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LikeTwoTone"], {
    onClick: () => likeBtn(commentId, flag, 'good'),
    twoToneColor: clickedComponent && likeDislikeflag === 'good' ? "#ff0000" : "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }), clickedComponent && likeDislikeflag === 'good' ? parseInt(good) + 1 : good, "\xA0\xA0\xA0\xA0", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["DislikeTwoTone"], {
    onClick: () => likeBtn(commentId, flag, 'bad'),
    twoToneColor: clickedComponent && likeDislikeflag === 'bad' ? "#ff0000" : "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }), clickedComponent && likeDislikeflag === 'bad' ? parseInt(bad) + 1 : bad, "\xA0\xA0\xA0\xA0", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Comments1001));

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");
var _jsxFileName = "D:\\git Repository\\PersonalProject_001\\frontend\\components\\mainPosts_1001\\mainPosts_1001_textArea.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CommentTextArea = ({
  postFlag,
  nickName,
  postId,
  userInfo,
  insertComment,
  insertClick
}) => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  const {
    0: comment,
    1: setComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (insertClick === 'clicked') {
      setComment('');
    }

    if (insertClick === 'focus') {
      ref.current.focus();
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
      lineNumber: 50,
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
      lineNumber: 52,
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
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    onClick: () => insertComment(postFlag, postId, nickName, comment),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "\uB313\uAE00\uB2EC\uAE30")));
};

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
    mainPosts_1001Comments
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.mainPosts_1001);
  const {
    userInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.auth);
  const blank_pattern = /^\s+|\s+&/g;
  const {
    0: insertClick,
    1: setInsertClick
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
    console.log('댓글 입력 후 ', mainPosts_1001Comments); //setMainPosts_1001_commentsArray([...mainPosts_1001Comments]); 
    //console.log('mainPosts_1001Comments=>' , mainPosts_1001Comments); 
    //
    //댓글 리스트 
    //   dispatch({
    //     type:MAINPOSTS_1001_COMMENTS_REQUEST, 
    //     data:{
    //       postId,
    //       nickName,
    //       postFlag,
    //       who:userInfo,
    //     }
    // }); 
    // console.log('빠락스 비어 Array=>' , mainPosts_1001_commentsArray); 
    // setMainPosts_1001_commentsArray([mainPosts_1001Comments[0],...mainPosts_1001_commentsArray]);
    //
  }, [mainPosts_1001Comments]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
      lineNumber: 166,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divTableRowTh",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divTableCellTh",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }, mainPosts_1001Info[0].title, " [", mainPosts_1001Comments.length, "]")), __jsx("div", {
    className: "divTableRow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "divTableCell",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["UserOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }), "  ", mainPosts_1001Info[0].userNickName, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 73
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["FieldTimeOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }), "  ", Object(_utilComponent_custumDateFormat__WEBPACK_IMPORTED_MODULE_8__["default"])(mainPosts_1001Info[0].createdDate), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 95
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }), " : ", mainPosts_1001Info[0].good, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
      lineNumber: 180,
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
      lineNumber: 190,
      columnNumber: 6
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: mainPosts_1001Info[0].content
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
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
      lineNumber: 199,
      columnNumber: 5
    }
  }, "\uAD11\uACE0\uC785\uB2C8\uB2E4."), __jsx("div", {
    className: "divTable",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
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
      lineNumber: 209,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  })), "\xA0\xA0\xA0\xA0", __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 90
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["DislikeTwoTone"], {
    twoToneColor: "#1ba640",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 98
    }
  })))), __jsx(_components_mainPosts_1001_mainPosts_1001_textArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    postFlag: postFlag,
    nickName: nickName,
    postId: postId,
    userInfo: userInfo,
    insertComment: insertComment,
    insertClick: insertClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "divTable",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
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
/*! exports provided: initialState, MAINPOSTS_1001_LIST_REQUEST, MAINPOSTS_1001_LIST_SUCCESS, MAINPOSTS_1001_LIST_FAILURE, MAINPOSTS_1001_DETAIL_INFO_REQUEST, MAINPOSTS_1001_DETAIL_INFO_SUCCESS, MAINPOSTS_1001_DETAIL_INFO_FAILURE, MAINPOSTS_1001_COMMENTS_REQUEST, MAINPOSTS_1001_COMMENTS_SUCCESS, MAINPOSTS_1001_COMMENTS_FAILURE, MAINPOSTS_1001_COMMENTINSERT_REQUEST, MAINPOSTS_1001_COMMENTINSERT_SUCCESS, MAINPOSTS_1001_COMMENTINSERT_FAILURE, MAINPOSTS_1001_COMMENTLIKE_REQUEST, MAINPOSTS_1001_COMMENTLIKE_SUCCESS, MAINPOSTS_1001_COMMENTLIKE_FAILURE, TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTINSERT_REQUEST", function() { return MAINPOSTS_1001_COMMENTINSERT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTINSERT_SUCCESS", function() { return MAINPOSTS_1001_COMMENTINSERT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAINPOSTS_1001_COMMENTINSERT_FAILURE", function() { return MAINPOSTS_1001_COMMENTINSERT_FAILURE; });
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
const MAINPOSTS_1001_COMMENTS_FAILURE = 'MAINPOSTS_1001_COMMENTS_FAILURE'; //게시물 댓글 insert 

const MAINPOSTS_1001_COMMENTINSERT_REQUEST = 'MAINPOSTS_1001_COMMENTINSERT_REQUEST';
const MAINPOSTS_1001_COMMENTINSERT_SUCCESS = 'MAINPOSTS_1001_COMMENTINSERT_SUCCESS';
const MAINPOSTS_1001_COMMENTINSERT_FAILURE = 'MAINPOSTS_1001_COMMENTINSERT_FAILURE'; //게시글 댓글 like / dislike 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxX2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFfdGV4dEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGV0YWlsUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsQ29tcG9uZW50L2N1c3R1bURhdGVGb3JtYXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsiSG9tZSIsIkNvbW1lbnRzMTAwMSIsImtleSIsInBvc3RGbGFnIiwibmlja05hbWUiLCJwb3N0SWQiLCJ1c2VySW5mbyIsImNvbW1lbnRJZCIsImNvbW1lbnQiLCJ3aG8iLCJmbGFnIiwiZ29vZCIsImJhZCIsImNyZWF0ZWREYXRlIiwibGlrZUJ0biIsImNsaWNrZWRDb21wb25lbnQiLCJsaWtlRGlzbGlrZWZsYWciLCJnZ2dnIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwiY3VzdHVtRGF0ZUZvcm1hdCIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJmbG9hdCIsInBhcnNlSW50IiwiUmVhY3QiLCJtZW1vIiwiQ29tbWVudFRleHRBcmVhIiwiaW5zZXJ0Q29tbWVudCIsImluc2VydENsaWNrIiwicmVmIiwiY3JlYXRlUmVmIiwic2V0Q29tbWVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImZvY3VzIiwibGVuZ3RoIiwib25DaGFnZUNvbW1lbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwiZGV0YWlsUGFnZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtYWluUG9zdHNfMTAwMUluZm8iLCJtYWluUG9zdHNfMTAwMUNvbW1lbnRzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm1haW5Qb3N0c18xMDAxIiwiYXV0aCIsImJsYW5rX3BhdHRlcm4iLCJzZXRJbnNlcnRDbGljayIsInR5cGUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNUIiwiZGF0YSIsIk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QiLCJjb21tZW50aWQiLCJsaWtlRGlzbGlrZSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QiLCJyZXBsYWNlIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNUIiwidGl0bGUiLCJ1c2VyTmlja05hbWUiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIl9faHRtbCIsImNvbnRlbnQiLCJtYXAiLCJ2IiwiaSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsImluaXRpYWxTdGF0ZSIsImltYWdlUGF0aHMiLCJsaWtlSXNDbGlja2VkIiwiY2xpY2tDb21tZW50SWQiLCJjbGlja2VkSW5mbyIsIk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCIsIk1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfRkFJTFVSRSIsIlRFU1RfUkVRVUVTVCIsIlRFU1RfU1VDQ0VTUyIsIlRFU1RfRkFJTFVSRSIsInJlZHVjZXIiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJmb3JFYWNoIiwicHVzaCIsInZhbHVlcyIsImRheSIsIkRhdGUiLCJkYXRlIiwidG9Mb2NhbGVTdHJpbmciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsIlxyXG5jb25zdCBIb21lID0gKCkgPT57XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXY+PGgxPmhlbGxvPC9oMT48L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssdXNlRWZmZWN0LCB1c2VTdGF0ZSwgY3JlYXRlUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBjdXN0dW1EYXRlRm9ybWF0IGZyb20gICcuLi8uLi91dGlsQ29tcG9uZW50L2N1c3R1bURhdGVGb3JtYXQnO1xyXG5pbXBvcnQge0Rpc2xpa2VUd29Ub25lLExpa2VUd29Ub25lfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuaW1wb3J0IFxyXG4gICAge1xyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QsIFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QsXHJcbiAgICB9IFxyXG5mcm9tICcuLi8uLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMSc7IFxyXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgQ29tbWVudHMxMDAxID0gKHtcclxuICAgICAgICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3RGbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VySW5mbyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21tZW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2hvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmxhZyxcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZ29vZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGJhZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWREYXRlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGxpa2VCdG4sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgICAgIGxpa2VEaXNsaWtlZmxhZ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KT0+e1xyXG5cclxuICAgIGNvbnN0IGdnZ2cgPSAoKT0+e1xyXG4gICAgICAgIGFsZXJ0KGNsaWNrZWRDb21wb25lbnQpO1xyXG4gICAgICAgIHJldHVybjsgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkQ29tcG9uZW50PT4nICxjbGlja2VkQ29tcG9uZW50ICwgJ2xpa2VEaXNsaWtlZmxhZz0+JywgbGlrZURpc2xpa2VmbGFnKTsgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT0nZGl2VGFibGVSb3cnID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJkaXZUYWJsZUNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yj57d2hvfTwvYj4gJm5ic3A7IDxzbWFsbD57Y3VzdHVtRGF0ZUZvcm1hdChjcmVhdGVkRGF0ZSl9PC9zbWFsbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21tZW50fTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIOuLteq4gCBbOV0ge2NvbW1lbnRJZH0gPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInR0dFwiIG9uQ2xpY2s9e2dnZ2d9Lz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIHN0eWxlPXt7bWFyZ2luVG9wOlwiMSVcIixkaXNwbGF5OlwiYmxvY2tcIixmbG9hdDpcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWtlVHdvVG9uZSBvbkNsaWNrPXsoKT0+bGlrZUJ0bihjb21tZW50SWQsZmxhZywnZ29vZCcpfSB0d29Ub25lQ29sb3I9e2NsaWNrZWRDb21wb25lbnQgJiYgbGlrZURpc2xpa2VmbGFnPT09J2dvb2QnID8gXCIjZmYwMDAwXCIgOiBcIiMxYmE2NDBcIn0vPntjbGlja2VkQ29tcG9uZW50ICYmIGxpa2VEaXNsaWtlZmxhZz09PSdnb29kJyA/IHBhcnNlSW50KGdvb2QpKzE6Z29vZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2xpa2VUd29Ub25lIG9uQ2xpY2s9eygpPT5saWtlQnRuKGNvbW1lbnRJZCxmbGFnLCdiYWQnKX0gdHdvVG9uZUNvbG9yPXtjbGlja2VkQ29tcG9uZW50ICYmIGxpa2VEaXNsaWtlZmxhZz09PSdiYWQnID8gXCIjZmYwMDAwXCIgOiBcIiMxYmE2NDBcIn0gLz57Y2xpY2tlZENvbXBvbmVudCAmJiBsaWtlRGlzbGlrZWZsYWc9PT0nYmFkJyA/IHBhcnNlSW50KGJhZCkrMTpiYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENvbW1lbnRzMTAwMSk7ICIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsIHVzZVN0YXRlLCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCBcclxuICAgIHtcclxuICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVFxyXG4gICAgfSBcclxuZnJvbSAnLi4vLi4vcmVkdWNlcnMvbWFpblBvc3RzXzEwMDEnOyBcclxuXHJcbmNvbnN0ICBDb21tZW50VGV4dEFyZWE9ICh7cG9zdEZsYWcsbmlja05hbWUscG9zdElkLHVzZXJJbmZvLGluc2VydENvbW1lbnQsaW5zZXJ0Q2xpY2t9KSA9PntcclxuXHJcbiAgICBjb25zdCByZWYgPSBjcmVhdGVSZWYoKTsgXHJcbiAgICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7IFxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgaWYoaW5zZXJ0Q2xpY2sgPT09J2NsaWNrZWQnKXtcclxuICAgICAgc2V0Q29tbWVudCgnJyk7IFxyXG4gICAgfVxyXG5cclxuICAgIGlmKGluc2VydENsaWNrID09PSdmb2N1cycpe1xyXG4gICAgICByZWYuY3VycmVudC5mb2N1cygpOyAgXHJcbiAgICB9XHJcbiAgfSxbaW5zZXJ0Q2xpY2subGVuZ3RoID4gMCBdKTsgXHJcbiAgXHJcblxyXG5cclxuICAvL+uMk+q4gCDsnoXroKUgdGV4dEFyZWEgXHJcbiAgY29uc3Qgb25DaGFnZUNvbW1lbnQgPXVzZUNhbGxiYWNrKChlKT0+e1xyXG5cclxuICAgIGlmKGNvbW1lbnQubGVuZ3RoID09PSAzMDApe1xyXG4gICAgICBhbGVydCgnMzAw7J6QIOydtOyDgSDsnoXroKUg7ZWgIOyImCDsl4bsirXri4jri6QuJyk7IFxyXG4gICAgICByZXR1cm47IFxyXG4gICAgfVxyXG4gICAgc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSk7IFxyXG5cclxuICB9LFtjb21tZW50XSk7IFxyXG4gIFxyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG5cclxucmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8dGV4dGFyZWEgIHZhbHVlPXtjb21tZW50fSAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCI4MHB4XCIsbWFyZ2luVG9wOlwiMyVcIn19IG9uQ2hhbmdlPXtvbkNoYWdlQ29tbWVudH0gcGxhY2Vob2xkZXI9eyB1c2VySW5mbyA/IFwi64yT6riA7J2EIOyekeyEse2VtCDrs7TshLjsmpQhXCIgOiBcIuuhnOq3uOyduOydtCDtlYTsmpTtlZwg7ISc67mE7IqkIOyeheuLiOuLpC5cIn0gcmVhZE9ubHk9e3VzZXJJbmZvID8gZmFsc2UgOiB0cnVlfS8+XHJcbiAgIFxyXG4gICAgPGRpdiBzdHlsZT17e21hcmdpbjpcIjElXCIsZGlzcGxheTpcImJsb2NrXCIsZmxvYXQ6XCJsZWZ0XCJ9fT5cclxuICAgICAge2NvbW1lbnQgPyBjb21tZW50Lmxlbmd0aCAgOiAwIH0gJiM0NzsgMzAwXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICB7dXNlckluZm8gJiYgXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjpcIjElXCIsZGlzcGxheTpcImJsb2NrXCIsZmxvYXQ6XCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKT0+aW5zZXJ0Q29tbWVudChwb3N0RmxhZyxwb3N0SWQsbmlja05hbWUsY29tbWVudCl9PuuMk+q4gOuLrOq4sDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIDwvPlxyXG4pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50VGV4dEFyZWE7ICIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsIHVzZVN0YXRlLCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxJ1xyXG5pbXBvcnQgQ29tbWVudHMxMDAxIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFfY29tbWVudHMnXHJcbmltcG9ydCBDb21tZW50VGV4dEFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMV90ZXh0QXJlYSdcclxuaW1wb3J0IFxyXG4gICAge01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCwgXHJcbiAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNULFxyXG4gICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1RcclxuICAgIH0gXHJcbmZyb20gJy4uL3JlZHVjZXJzL21haW5Qb3N0c18xMDAxJzsgXHJcblxyXG5pbXBvcnQge0Rpc2xpa2VUd29Ub25lLExpa2VUd29Ub25lICwgVXNlck91dGxpbmVkLCBGaWVsZFRpbWVPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgY3VzdHVtRGF0ZUZvcm1hdCBmcm9tICAnLi4vdXRpbENvbXBvbmVudC9jdXN0dW1EYXRlRm9ybWF0JztcclxuXHJcblxyXG5cclxuY29uc3QgZGV0YWlsUGFnZSAgPSAoe25pY2tOYW1lLHBvc3RGbGFnLHBvc3RJZH0pID0+e1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IFxyXG4gIGNvbnN0IHttYWluUG9zdHNfMTAwMUluZm8gLCBcclxuICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50cyxcclxuICAgICAgICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUubWFpblBvc3RzXzEwMDEpOyBcclxuXHJcbiAgY29uc3Qge3VzZXJJbmZvfSAgICAgID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuYXV0aCk7XHJcblxyXG4gIGNvbnN0IGJsYW5rX3BhdHRlcm4gPSAvXlxccyt8XFxzKyYvZzsgIFxyXG4gIGNvbnN0IFtpbnNlcnRDbGljaywgc2V0SW5zZXJ0Q2xpY2tdID0gdXNlU3RhdGUoJycpOyBcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gIFxyXG4gICAgLy/rjJPquIAg66as7Iqk7Yq4IFxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QsIFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgd2hvOnVzZXJJbmZvLCBcclxuICAgICAgfVxyXG4gICAgfSk7IFxyXG5cclxuICAgIC8v7IOB7IS4IOygleuztCBcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCwgXHJcbiAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgcG9zdElkLFxyXG4gICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSxbXSk7XHJcblxyXG5cclxuICAvL+yii+yVhOyalCwg7Iur7Ja07JqUIOuyhO2KvCBcclxuICBjb25zdCBsaWtlQnRuID11c2VDYWxsYmFjaygoY29tbWVudGlkLGZsYWcsbGlrZURpc2xpa2UpPT57XHJcbiAgICAgIGlmKCF1c2VySW5mbyl7XHJcbiAgICAgICAgYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlZwg7ISc67mE7IqkIOyeheuLiOuLpC4nKTsgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihmbGFnPT09XCJZXCIpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFsZXJ0KCfsnbTrr7gg7KKL7JWE7JqUISDsi6vslrTsmpQhIO2WiOyKteuLiOuLpC4nKTsgXHJcbiAgICAgICAgcmV0dXJuOyBcclxuICBcclxuICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgIC8v64yT6riAIOyii+yVhOyalCFcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QsIFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIGNvbW1lbnRpZCxcclxuICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgZmxhZzogbGlrZURpc2xpa2UgLFxyXG4gICAgICAgICAgICB3aG86IHVzZXJJbmZvLFxyXG4gICAgICAgICAgICBuaWNrTmFtZSxcclxuICAgICAgICAgICAgbWFpblBvc3RzXzEwMDFDb21tZW50czpbLi4ubWFpblBvc3RzXzEwMDFDb21tZW50c10sXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgIGFsZXJ0KGAke2xpa2VEaXNsaWtlfWApOyBcclxuICAgIFxyXG4gICAgfSxbbWFpblBvc3RzXzEwMDFDb21tZW50c10pOyBcclxuXHJcblxyXG5cclxuXHJcbiAgLy/rjJPquIAg7J6F66ClIFxyXG4gIGNvbnN0IGluc2VydENvbW1lbnQgPSB1c2VDYWxsYmFjaygocG9zdEZsYWcscG9zdElkLG5pY2tOYW1lICxjb21tZW50KT0+e1xyXG4gICAgaWYoY29tbWVudC5sZW5ndGggPT09IDAgfHwgY29tbWVudC5yZXBsYWNlKGJsYW5rX3BhdHRlcm4sJycpPT09XCJcIil7XHJcbiAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICBhbGVydCgn64yT6riA7J2EIOyeheugpe2VtCDso7zshLjsmpQhJyk7IFxyXG4gICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZihjb21tZW50Lmxlbmd0aCA9PT0gMzAwKXtcclxuICAgICAgICAgIGFsZXJ0KCczMDDsnpAg7J207IOBIOyeheugpSDtlaAg7IiYIOyXhuyKteuLiOuLpC4nKTsgXHJcbiAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL+uMk+q4gCDsnoXroKVcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QsIFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgICAgICAgbmlja05hbWUgLFxyXG4gICAgICAgICAgICAgIHdobzp1c2VySW5mbywgXHJcbiAgICAgICAgICAgICAgY29tbWVudCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfrjJPquIAg7J6F66ClIO2bhCAnLG1haW5Qb3N0c18xMDAxQ29tbWVudHMgKTsgXHJcbiAgICAgICAgLy9zZXRNYWluUG9zdHNfMTAwMV9jb21tZW50c0FycmF5KFsuLi5tYWluUG9zdHNfMTAwMUNvbW1lbnRzXSk7IFxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ21haW5Qb3N0c18xMDAxQ29tbWVudHM9PicgLCBtYWluUG9zdHNfMTAwMUNvbW1lbnRzKTsgXHJcbiAgICAgICAgLy9cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgIC8v64yT6riAIOumrOyKpO2KuCBcclxuICAgICAgICAvLyAgIGRpc3BhdGNoKHtcclxuICAgICAgICAvLyAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULCBcclxuICAgICAgICAvLyAgICAgZGF0YTp7XHJcbiAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICBwb3N0SWQsXHJcbiAgICAgICAgLy8gICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgLy8gICAgICAgcG9zdEZsYWcsXHJcbiAgICAgICAgLy8gICAgICAgd2hvOnVzZXJJbmZvLFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7IFxyXG4gICAgICAgLy8gY29uc29sZS5sb2coJ+u5oOudveyKpCDruYTslrQgQXJyYXk9PicgLCBtYWluUG9zdHNfMTAwMV9jb21tZW50c0FycmF5KTsgXHJcbiAgICAgICAgLy8gc2V0TWFpblBvc3RzXzEwMDFfY29tbWVudHNBcnJheShbbWFpblBvc3RzXzEwMDFDb21tZW50c1swXSwuLi5tYWluUG9zdHNfMTAwMV9jb21tZW50c0FycmF5XSk7XHJcblxyXG4gICAgICAgLy9cclxuXHJcblxyXG4gICAgICB9LFttYWluUG9zdHNfMTAwMUNvbW1lbnRzXSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgXHJcbiAgICA8ZGl2ID5cclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7YOA7J207YuALS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJyBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZVJvd1RoJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGxUaCc+e21haW5Qb3N0c18xMDAxSW5mb1swXS50aXRsZX0gW3ttYWluUG9zdHNfMTAwMUNvbW1lbnRzLmxlbmd0aH1dPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZUYWJsZUNlbGwnPlxyXG4gICAgICAgICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+ICB7bWFpblBvc3RzXzEwMDFJbmZvWzBdLnVzZXJOaWNrTmFtZX08YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkVGltZU91dGxpbmVkIC8+ICB7Y3VzdHVtRGF0ZUZvcm1hdChtYWluUG9zdHNfMTAwMUluZm9bMF0uY3JlYXRlZERhdGUpfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGlrZVR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz4gOiB7bWFpblBvc3RzXzEwMDFJbmZvWzBdLmdvb2R9IDxEaXNsaWtlVHdvVG9uZSAgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz4gOiB7bWFpblBvc3RzXzEwMDFJbmZvWzBdLmJhZH0gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICB7Lyrsg4HshLgg7Y6Y7J207KeAIO2DgOydtO2LgC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiYXV0b1wiLCBib3JkZXI6XCIxcHggc29saWRcIiwgYm9yZGVyQ29sb3I6XCIjOGNjNDljXCIsbWFyZ2luVG9wOlwiMSVcIn19PlxyXG4gICAgICAgICDqtJHqs6DsnoXri4jri6QuXHJcbiAgICAgIDwvZGl2PlxyXG4gICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgey8q7IOB7IS4IO2OmOydtOyngCDsu6jthZDsuKAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLG1hcmdpblRvcDpcIjElXCJ9fT5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOm1haW5Qb3N0c18xMDAxSW5mb1swXS5jb250ZW50fX0vPlxyXG4gICAgIDwvZGl2PiBcclxuICAgIHsvKuyDgeyEuCDtjpjsnbTsp4Ag7Luo7YWQ7LigLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL30gICBcclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCJhdXRvXCIsIGJvcmRlcjpcIjFweCBzb2xpZFwiLCBib3JkZXJDb2xvcjpcIiM4Y2M0OWNcIixtYXJnaW5Ub3A6XCIxJVwifX0+XHJcbiAgICAgIOq0keqzoOyeheuLiOuLpC5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgey8q7KKL7JWE7JqUIOyLq+yWtOyalCDrsoTtirwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdlRhYmxlUm93VGgnIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgPEJ1dHRvbj48TGlrZVR3b1RvbmUgIHR3b1RvbmVDb2xvcj1cIiMxYmE2NDBcIi8+PC9CdXR0b24+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PEJ1dHRvbj48RGlzbGlrZVR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiIzFiYTY0MFwiLz48L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKuyii+yVhOyalCDsi6vslrTsmpQg67KE7Yq8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgey8q64yT6riAIOyeheugpS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgIDxDb21tZW50VGV4dEFyZWEgICBcclxuICAgICAgICAgICAgcG9zdEZsYWc9e3Bvc3RGbGFnfSBcclxuICAgICAgICAgICAgbmlja05hbWU9e25pY2tOYW1lfSBcclxuICAgICAgICAgICAgcG9zdElkPXtwb3N0SWR9IFxyXG4gICAgICAgICAgICB1c2VySW5mbz17dXNlckluZm99XHJcbiAgICAgICAgICAgIGluc2VydENvbW1lbnQ9e2luc2VydENvbW1lbnR9XHJcbiAgICAgICAgICAgIGluc2VydENsaWNrPXtpbnNlcnRDbGlja31cclxuICAgLz5cclxuICAgIHsvKuuMk+q4gCDsnoXroKUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHsvKuuMk+q4gCDrpqzsiqTtirgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2VGFibGVcIj5cclxuICAgICAge21haW5Qb3N0c18xMDAxQ29tbWVudHMgJiYgbWFpblBvc3RzXzEwMDFDb21tZW50cy5tYXAoKHYsaSk9PlxyXG5cclxuICAgICAgICA8Q29tbWVudHMxMDAxIFxyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICBwb3N0RmxhZz17cG9zdEZsYWd9IFxyXG4gICAgICAgICAgICAgIG5pY2tOYW1lPXtuaWNrTmFtZX0gXHJcbiAgICAgICAgICAgICAgcG9zdElkPXtwb3N0SWR9IFxyXG4gICAgICAgICAgICAgIHVzZXJJbmZvPXt1c2VySW5mb31cclxuICAgIFxyXG4gICAgICAgICAgICAgIGNvbW1lbnRJZD17di5jb21tZW50SWR9IFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQ9e3YuY29tbWVudH0gXHJcbiAgICAgICAgICAgICAgd2hvPXt2Lndob30gXHJcbiAgICAgICAgICAgICAgZmxhZz17di5mbGFnfSBcclxuXHJcbiAgICAgICAgICAgICAgZ29vZD17di5nb29kfVxyXG4gICAgICAgICAgICAgIGJhZD17di5iYWR9ICAgICAgXHJcbiAgICAgICAgICAgICAgY3JlYXRlZERhdGU9e3YuY3JlYXRlZERhdGV9IFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgbGlrZUJ0bj17bGlrZUJ0bn1cclxuXHJcbiAgICAgICAgICAgICAgY2xpY2tlZENvbXBvbmVudD17di5jbGlja2VkQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgIGxpa2VEaXNsaWtlZmxhZz17di5saWtlRGlzbGlrZWZsYWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKuuMk+q4gCDrpqzsiqTtirgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxufVxyXG5cclxuXHJcbmRldGFpbFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+e1xyXG5cclxuICBjb25zdCBwb3N0SWQgICA9IGNvbnRleHQucXVlcnkucG9zdElkOyBcclxuICBjb25zdCBuaWNrTmFtZSA9IGNvbnRleHQucXVlcnkubmlja05hbWU7IFxyXG4gIGNvbnN0IHBvc3RGbGFnID0gY29udGV4dC5xdWVyeS5wb3N0RmxhZzsgXHJcbiAgcmV0dXJuIHtuaWNrTmFtZSxwb3N0RmxhZyxwb3N0SWR9OyBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWxQYWdlOyAiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuXHJcblxyXG5leHBvcnQgY29uc3QgIGluaXRpYWxTdGF0ZSA9IHtcclxuXHJcbiAgICBcclxuICAgIG1haW5Qb3N0c18xMDAxICAgICA6IFtdLCBcclxuICAgIG1haW5Qb3N0c18xMDAxSW5mbyA6IFt7fV0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+2VmCDsnbTqsoPrlYzrp6Qg66qH7Iuc6rCE7J2EIOuCoOugpCDrqLnsl4jripTsp4AuLiDslYTtgazrprQg7IOI7Jqw64uY7J20IO2VtOqysOuyleydhCDslYzroKTso7zsi6xcclxuICAgIG1haW5Qb3N0c18xMDAxQ29tbWVudHMgOiBbXSwgXHJcbiAgICBpbWFnZVBhdGhzICAgICAgICAgOiBbXSxcclxuICAgIGxpa2VJc0NsaWNrZWQgOm51bGwsIFxyXG4gICAgY2xpY2tDb21tZW50SWQ6bnVsbCwgXHJcbiAgICBjbGlja2VkSW5mbzpbe31dLCBcclxuXHJcblxyXG59XHJcblxyXG4vL+qyjOyLnOusvCBsaXN0XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1Q9J01BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1M9J01BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkU9J01BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSc7XHJcblxyXG4vL+qyjOyLnOusvCDsg4HshLggXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUID0nTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUyA9J01BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1NVQ0NFU1MnOyBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkUgPSdNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFJzsgXHJcblxyXG4vL+qyjOyLnOusvCDrjJPquIAgbGlzdCBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19TVUNDRVNTID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfRkFJTFVSRSA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19GQUlMVVJFJzsgXHJcblxyXG5cclxuLy/qsozsi5zrrLwg64yT6riAIGluc2VydCBcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVCA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9TVUNDRVNTID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX0ZBSUxVUkUgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9GQUlMVVJFJzsgXHJcblxyXG4vL+qyjOyLnOq4gCDrjJPquIAgbGlrZSAvIGRpc2xpa2UgXHJcbmV4cG9ydCBjb25zdCBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNUID0gJ01BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfU1VDQ0VTUyA9ICdNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX0ZBSUxVUkUgPSAnTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfRkFJTFVSRSc7IFxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVEVTVF9SRVFVRVNUID0gJ1RFU1RfUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgVEVTVF9TVUNDRVNTID0gJ1RFU1RfU1VDQ0VTUyc7IFxyXG5leHBvcnQgY29uc3QgVEVTVF9GQUlMVVJFID0gJ1RFU1RfRkFJTFVSRSc7IFxyXG5cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG5cclxuXHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcblxyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcblxyXG4vL+qyjOyLnOq4gCDrpqzsiqTtirgg6rCA7KC47Jik6riwICAgICAgIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIC8v67Cw7Je0IOy0iOq4sO2ZlFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMS5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9MSVNUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vL+qyjOyLnOq4gCDrjJPquIAgSU5TRVJUICAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfU1VDQ0VTUzoge1xyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudHMubGVuZ3RoPTA7IFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudHMucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8v6rKM7Iuc6riAIOyDgeyEuCDtjpjsnbTsp4Ag6rCA7KC47Jik6riwIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFJbmZvLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIC8v67Cw7Je0IOy0iOq4sO2ZlFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUluZm8ucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRToge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8v6rKM7Iuc6riAIOuMk+q4gCDqsIDsoLjsmKTquLAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNfMTAwMUNvbW1lbnRzLmxlbmd0aD0wOyBcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFDb21tZW50cy5wdXNoKHYpOyBcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG4vL+qyjOyLnOq4gCDrjJPquIAgbGlrZSAvIGRpc2xpa2UgICAgICAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjYXNlIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9TVUNDRVNTOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzXzEwMDFDb21tZW50cy5sZW5ndGg9MDsgXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uZGF0YS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c18xMDAxQ29tbWVudHMucHVzaCh2KTsgXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdCA6IGJyZWFrOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7IFxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiZXhwb3J0IGNvbnN0ICBjdXN0dW1EYXRlRm9ybWF0ID0gKHZhbHVlcz0nMjAyMC0wOS0yMiAxMDoyMzoxMScpPT57XHJcblxyXG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUodmFsdWVzKTsgXHJcbiAgICAvL2NvbnN0IGRheU9mV2Vla0FycmF5ID1bJyjsnbwpJywgJyjsm5QpJywgJyjtmZQpJywgJyjsiJgpJywgJyjrqqkpJywgJyjquIgpJywgJyjthqApJ107IFxyXG4gICAgLy9jb25zdCBkYXlPZldlZWsgPSBkYXlPZldlZWtBcnJheVtuZXcgRGF0ZSh2YWx1ZXMpLmdldERheSgpXTsgXHJcbiAgICAvL2xldCBkYXRlID0gZGF5LnRvTG9jYWxlU3RyaW5nKCkrJyAnK2RheU9mV2VlazsgXHJcbiAgICBsZXQgZGF0ZSA9IGRheS50b0xvY2FsZVN0cmluZygpOyBcclxuICAgIFxyXG4gICAgcmV0dXJuIGRhdGU7IFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VzdHVtRGF0ZUZvcm1hdDsgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9