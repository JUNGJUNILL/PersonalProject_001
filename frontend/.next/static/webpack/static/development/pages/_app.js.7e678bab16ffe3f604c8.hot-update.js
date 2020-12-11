webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/mainPosts_1001Saga.js":
/*!*************************************!*\
  !*** ./sagas/mainPosts_1001Saga.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mainPosts_1001Saga; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/mainPosts_1001 */ "./reducers/mainPosts_1001.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(sagaMainPosts_1001List),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(watchMainPosts_1001),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(sagaMainPosts_1001Detail),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(watchMainPosts_1001Detail),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(sagaMainPosts_1001CommentList),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(watchMainPosts_1001CommentList),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(sagaMainPosts_1001CommentByCommentList),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(watchMainPosts_1001CommentByCommentList),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(sagaMainPosts_1001CommentInsert),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(watchMainPosts_1001CommentInsert),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(sagaMainPosts_1001CommentByCommentInsert),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(watchMainPosts_1001CommentByCommentInsert),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(sagaMainPosts_1001Like),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(watchMainPosts_1001Like),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(sagaMainPosts_1001CommentLike),
    _marked16 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(watchMainPosts_1001CommentLike),
    _marked17 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(sagaMainPosts_1001CommentByCommentsLike),
    _marked18 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(watchMainPosts_1001CommentByCommentsLike),
    _marked19 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(mainPosts_1001Saga);



 //mainPost_1001 리스트 
//-----------------------------------------------------------------------------------

function APImainPosts_1001List(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/mainPosts_1001', {
    data: data
  }, {
    withCredentials: true
  });
}

_c = APImainPosts_1001List;

function sagaMainPosts_1001List(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function sagaMainPosts_1001List$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APImainPosts_1001List, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_LIST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 14;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          alert('error', _context.t0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_LIST_FAILURE"],
            error: _context.t0
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function watchMainPosts_1001() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function watchMainPosts_1001$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_LIST_REQUEST"], sagaMainPosts_1001List);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
} //-----------------------------------------------------------------------------------
//mainPost_1001 상세정보 
//-----------------------------------------------------------------------------------


function APImainPosts_1001Detail(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/mainPosts_1001/mainPosts_1001Detail', {
    data: data
  }, {
    withCredentials: true
  });
}

_c2 = APImainPosts_1001Detail;

function sagaMainPosts_1001Detail(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function sagaMainPosts_1001Detail$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APImainPosts_1001Detail, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_DETAIL_INFO_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 14;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          alert('error', _context3.t0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_DETAIL_INFO_FAILURE"],
            error: _context3.t0
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function watchMainPosts_1001Detail() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function watchMainPosts_1001Detail$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_DETAIL_INFO_REQUEST"], sagaMainPosts_1001Detail);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
} //-----------------------------------------------------------------------------------
//mainPost_1001 상세 정보 댓글 리스트
//-----------------------------------------------------------------------------------


function APImainPosts_1001CommentList(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/mainPosts_1001/mainPosts_1001Comments', {
    data: data
  }, {
    withCredentials: true
  });
}

_c3 = APImainPosts_1001CommentList;

function sagaMainPosts_1001CommentList(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function sagaMainPosts_1001CommentList$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APImainPosts_1001CommentList, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context5.next = 14;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          alert('error', _context5.t0);
          _context5.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTS_FAILURE"],
            error: _context5.t0
          });

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

function watchMainPosts_1001CommentList() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function watchMainPosts_1001CommentList$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTS_REQUEST"], sagaMainPosts_1001CommentList);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
} //-----------------------------------------------------------------------------------
//mainPost_1001 상세 정보 대댓글 리스트
//-----------------------------------------------------------------------------------


function APImainPosts_1001CommentByCommentList(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/mainPosts_1001/mainPosts_1001CommentByComments', {
    data: data
  }, {
    withCredentials: true
  });
}

_c4 = APImainPosts_1001CommentByCommentList;

function sagaMainPosts_1001CommentByCommentList(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function sagaMainPosts_1001CommentByCommentList$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APImainPosts_1001CommentByCommentList, action.data);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTBYCOMMENT_SUCCESS"],
            data: {
              array: result.data,
              param: action.data
            }
          });

        case 6:
          _context7.next = 14;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          alert('error', _context7.t0);
          _context7.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTBYCOMMENT_FAILURE"],
            error: _context7.t0
          });

        case 14:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

function watchMainPosts_1001CommentByCommentList() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function watchMainPosts_1001CommentByCommentList$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST"], sagaMainPosts_1001CommentByCommentList);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
} //-----------------------------------------------------------------------------------
//mainPost_1001 댓글 입력
//-----------------------------------------------------------------------------------


function APImainPosts_1001CommentInsert(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/mainPosts_1001/mainPosts_1001CommentInsert', {
    data: data
  }, {
    withCredentials: true
  });
}

_c5 = APImainPosts_1001CommentInsert;

function sagaMainPosts_1001CommentInsert(action) {
  var result, array;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function sagaMainPosts_1001CommentInsert$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APImainPosts_1001CommentInsert, action.data);

        case 3:
          result = _context9.sent;
          array = [];
          result.data.map(function (v, i) {
            result.data[0].kk = 'addComment';
            array.push(v);
          });
          _context9.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTINSERT_SUCCESS"],
            data: result.data
          });

        case 8:
          _context9.next = 16;
          break;

        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          alert('error', _context9.t0);
          _context9.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTINSERT_FAILURE"],
            error: _context9.t0
          });

        case 16:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 10]]);
}

function watchMainPosts_1001CommentInsert() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function watchMainPosts_1001CommentInsert$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTINSERT_REQUEST"], sagaMainPosts_1001CommentInsert);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
} //-----------------------------------------------------------------------------------
//mainPost_1001 대댓글 입력
//-----------------------------------------------------------------------------------


function APImainPosts_1001CommentByCommentInsert(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/mainPosts_1001/mainPosts_1001CommentByCommentInsert', {
    data: data
  }, {
    withCredentials: true
  });
}

_c6 = APImainPosts_1001CommentByCommentInsert;

function sagaMainPosts_1001CommentByCommentInsert(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function sagaMainPosts_1001CommentByCommentInsert$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APImainPosts_1001CommentByCommentInsert, action.data);

        case 3:
          result = _context11.sent;
          _context11.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_SUCCESS"],
            data: {
              array: result.data,
              param: action.data
            }
          });

        case 6:
          _context11.next = 14;
          break;

        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          alert('error', _context11.t0);
          _context11.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE"],
            error: _context11.t0
          });

        case 14:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 8]]);
}

function watchMainPosts_1001CommentByCommentInsert() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function watchMainPosts_1001CommentByCommentInsert$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST"], sagaMainPosts_1001CommentByCommentInsert);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
} //-----------------------------------------------------------------------------------
//게시글 LIKE / DISLIKE 
//-----------------------------------------------------------------------------------


function APImainPosts_1001Like(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/mainPosts_1001/mainPosts_1001Like', {
    data: data
  }, {
    withCredentials: true
  });
}

_c7 = APImainPosts_1001Like;

function sagaMainPosts_1001Like(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function sagaMainPosts_1001Like$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APImainPosts_1001Like, action.data);

        case 3:
          result = _context13.sent;
          action.data.mainPosts_1001Info[0] = _objectSpread(_objectSpread({}, action.data.mainPosts_1001Info[0]), {}, {
            flag: 'Y',
            good: action.data.flag === 'good' ? parseInt(action.data.mainPosts_1001Info[0].good) + 1 : action.data.mainPosts_1001Info[0].good,
            bad: action.data.flag === 'bad' ? parseInt(action.data.mainPosts_1001Info[0].bad) + 1 : action.data.mainPosts_1001Info[0].bad,
            clicked: 'clicked'
          });
          _context13.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_MAINPOSTLIKE_SUCCESS"],
            //이런식으로도 리듀서에 데이터를 보낼 수 있다. 
            //data:{array : action.data.mainPosts_1001Comments, values :action.data.commentid },
            data: {
              array: action.data.mainPosts_1001Info
            }
          });

        case 7:
          _context13.next = 15;
          break;

        case 9:
          _context13.prev = 9;
          _context13.t0 = _context13["catch"](0);
          console.error(_context13.t0);
          alert('error', _context13.t0);
          _context13.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_MAINPOSTLIKE_FAILURE"],
            error: _context13.t0
          });

        case 15:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13, null, [[0, 9]]);
}

function watchMainPosts_1001Like() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function watchMainPosts_1001Like$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_MAINPOSTLIKE_REQUEST"], sagaMainPosts_1001Like);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
} //-----------------------------------------------------------------------------------
//mainPost_1001 댓글 LIKE / DISLIKE 
//-----------------------------------------------------------------------------------


function APImainPosts_1001CommentLike(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/mainPosts_1001/mainPosts_1001CommentLike', {
    data: data
  }, {
    withCredentials: true
  });
}

_c8 = APImainPosts_1001CommentLike;

function sagaMainPosts_1001CommentLike(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function sagaMainPosts_1001CommentLike$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APImainPosts_1001CommentLike, action.data);

        case 3:
          result = _context15.sent;
          action.data.mainPosts_1001Comments.map(function (v, i) {
            if (v.commentId === action.data.commentid) {
              action.data.mainPosts_1001Comments[i] = _objectSpread(_objectSpread({}, action.data.mainPosts_1001Comments[i]), {}, {
                clickedComponent: action.data.commentid,
                flag: 'Y',
                likeDislikeflag: action.data.flag
              });
            }
          });
          _context15.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTLIKE_SUCCESS"],
            //이런식으로도 리듀서에 데이터를 보낼 수 있다. 
            //data:{array : action.data.mainPosts_1001Comments, values :action.data.commentid },
            data: action.data.mainPosts_1001Comments
          });

        case 7:
          _context15.next = 15;
          break;

        case 9:
          _context15.prev = 9;
          _context15.t0 = _context15["catch"](0);
          console.error(_context15.t0);
          alert('error', _context15.t0);
          _context15.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTLIKE_FAILURE"],
            error: _context15.t0
          });

        case 15:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15, null, [[0, 9]]);
}

function watchMainPosts_1001CommentLike() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function watchMainPosts_1001CommentLike$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTLIKE_REQUEST"], sagaMainPosts_1001CommentLike);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
} //-----------------------------------------------------------------------------------
//mainPost_1001 대댓글 LIKE / DISLIKE 
//-----------------------------------------------------------------------------------


function APImainPosts_1001CommentByCommentsLike(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/mainPosts_1001/mainPosts_1001CommentByCommentsLike', {
    data: data
  }, {
    withCredentials: true
  });
}

_c9 = APImainPosts_1001CommentByCommentsLike;

function sagaMainPosts_1001CommentByCommentsLike(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function sagaMainPosts_1001CommentByCommentsLike$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(APImainPosts_1001CommentByCommentsLike, action.data);

        case 3:
          result = _context17.sent;
          console.log('mainPosts_1001CommentByComments=>', action.data.mainPosts_1001CommentByComments);
          action.data.mainPosts_1001CommentByComments.map(function (v, i) {
            if (v.byCommentId === action.data.byCommentId) {
              action.data.mainPosts_1001CommentByComments[i] = _objectSpread(_objectSpread({}, action.data.mainPosts_1001CommentByComments[i]), {}, {
                clickedComponent: action.data.byCommentId,
                flag: 'Y',
                likeDislikeflag: action.data.flag
              });
            }
          });
          _context17.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_SUCCESS"],
            data: action.data.mainPosts_1001CommentByComments
          });

        case 8:
          _context17.next = 16;
          break;

        case 10:
          _context17.prev = 10;
          _context17.t0 = _context17["catch"](0);
          console.error(_context17.t0);
          alert('error', _context17.t0);
          _context17.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_FAILURE"],
            error: _context17.t0
          });

        case 16:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17, null, [[0, 10]]);
}

function watchMainPosts_1001CommentByCommentsLike() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function watchMainPosts_1001CommentByCommentsLike$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_COMMENTBYCOMMENTLIKE_REQUEST"], sagaMainPosts_1001CommentByCommentsLike);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
} //-----------------------------------------------------------------------------------


function mainPosts_1001Saga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function mainPosts_1001Saga$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchMainPosts_1001), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchMainPosts_1001Detail), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchMainPosts_1001CommentList), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchMainPosts_1001CommentInsert), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchMainPosts_1001CommentLike), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchMainPosts_1001CommentByCommentList), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchMainPosts_1001CommentByCommentInsert), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchMainPosts_1001CommentByCommentsLike), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchMainPosts_1001Like)]);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "APImainPosts_1001List");
$RefreshReg$(_c2, "APImainPosts_1001Detail");
$RefreshReg$(_c3, "APImainPosts_1001CommentList");
$RefreshReg$(_c4, "APImainPosts_1001CommentByCommentList");
$RefreshReg$(_c5, "APImainPosts_1001CommentInsert");
$RefreshReg$(_c6, "APImainPosts_1001CommentByCommentInsert");
$RefreshReg$(_c7, "APImainPosts_1001Like");
$RefreshReg$(_c8, "APImainPosts_1001CommentLike");
$RefreshReg$(_c9, "APImainPosts_1001CommentByCommentsLike");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9tYWluUG9zdHNfMTAwMVNhZ2EuanMiXSwibmFtZXMiOlsic2FnYU1haW5Qb3N0c18xMDAxTGlzdCIsIndhdGNoTWFpblBvc3RzXzEwMDEiLCJzYWdhTWFpblBvc3RzXzEwMDFEZXRhaWwiLCJ3YXRjaE1haW5Qb3N0c18xMDAxRGV0YWlsIiwic2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudExpc3QiLCJ3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudExpc3QiLCJzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50TGlzdCIsIndhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50TGlzdCIsInNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRJbnNlcnQiLCJ3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudEluc2VydCIsInNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQiLCJ3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudEluc2VydCIsInNhZ2FNYWluUG9zdHNfMTAwMUxpa2UiLCJ3YXRjaE1haW5Qb3N0c18xMDAxTGlrZSIsInNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRMaWtlIiwid2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRMaWtlIiwic2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNMaWtlIiwid2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzTGlrZSIsIm1haW5Qb3N0c18xMDAxU2FnYSIsIkFQSW1haW5Qb3N0c18xMDAxTGlzdCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJhY3Rpb24iLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIk1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyIsImNvbnNvbGUiLCJlcnJvciIsImFsZXJ0IiwiTUFJTlBPU1RTXzEwMDFfTElTVF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCIsIkFQSW1haW5Qb3N0c18xMDAxRGV0YWlsIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUIiwiQVBJbWFpblBvc3RzXzEwMDFDb21tZW50TGlzdCIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19GQUlMVVJFIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCIsIkFQSW1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudExpc3QiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1NVQ0NFU1MiLCJhcnJheSIsInBhcmFtIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9GQUlMVVJFIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNUIiwiQVBJbWFpblBvc3RzXzEwMDFDb21tZW50SW5zZXJ0IiwibWFwIiwidiIsImkiLCJrayIsInB1c2giLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QiLCJBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1JFUVVFU1QiLCJBUEltYWluUG9zdHNfMTAwMUxpa2UiLCJtYWluUG9zdHNfMTAwMUluZm8iLCJmbGFnIiwiZ29vZCIsInBhcnNlSW50IiwiYmFkIiwiY2xpY2tlZCIsIk1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfUkVRVUVTVCIsIkFQSW1haW5Qb3N0c18xMDAxQ29tbWVudExpa2UiLCJtYWluUG9zdHNfMTAwMUNvbW1lbnRzIiwiY29tbWVudElkIiwiY29tbWVudGlkIiwiY2xpY2tlZENvbXBvbmVudCIsImxpa2VEaXNsaWtlZmxhZyIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9GQUlMVVJFIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCIsIkFQSW1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNMaWtlIiwibG9nIiwibWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cyIsImJ5Q29tbWVudElkIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBbURVQSxzQjttR0FxQkFDLG1CO21HQWNBQyx3QjttR0FvQkFDLHlCO21HQWNBQyw2QjttR0FxQkFDLDhCO21HQWNBQyxzQzttR0FxQkFDLHVDO21HQWlCQUMsK0I7b0dBNEJBQyxnQztvR0FZQUMsd0M7b0dBdUJBQyx5QztvR0FnQkFDLHNCO29HQTZCQUMsdUI7b0dBY0FDLDZCO29HQWlDQUMsOEI7b0dBY0FDLHVDO29HQWtDQUMsd0M7b0dBUWVDLGtCOztBQXBaekI7QUFDQTtDQTRDQTtBQUNBOztBQUNBLFNBQVND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Q0FBQy9FLHlDQUFELENBUEUsRUFRTitFLCtEQUFJLENBQUN6RSx3Q0FBRCxDQVJFLEVBU055RSwrREFBSSxDQUFDN0UsdUJBQUQsQ0FURSxDQUFELENBQVQ7O0FBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuN2U2NzhiYWIxNmZmZTNmNjA0YzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHthbGwsZm9yayx0YWtlTGF0ZXN0LHRha2VFdmVyeSAscHV0LCBkZWxheSxjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnOyBcclxuaW1wb3J0IFxyXG4gICAge1xyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1MsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfTElTVF9GQUlMVVJFLCAgICBcclxuXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19TVUNDRVNTLFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkUsXHJcblxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1QsIFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1NVQ0NFU1MsIFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX0ZBSUxVUkUsIFxyXG5cclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9TVUNDRVNTLFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfRkFJTFVSRSwgXHJcblxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1JFUVVFU1QsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfU1VDQ0VTUyxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9GQUlMVVJFLFxyXG4gICAgICAgIFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9GQUlMVVJFLFxyXG5cclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfUkVRVUVTVCxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfU1VDQ0VTUyxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfRkFJTFVSRSxcclxuXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9SRVFVRVNULFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfU1VDQ0VTUyxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX0ZBSUxVUkUsIFxyXG5cclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9SRVFVRVNULFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX1NVQ0NFU1MsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfRkFJTFVSRSxcclxuXHJcbiAgICB9IFxyXG5mcm9tICcuLi9yZWR1Y2Vycy9tYWluUG9zdHNfMTAwMSc7IFxyXG5cclxuXHJcblxyXG4vL21haW5Qb3N0XzEwMDEg66as7Iqk7Yq4IFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSW1haW5Qb3N0c18xMDAxTGlzdChkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFpblBvc3RzXzEwMDEnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2FnYU1haW5Qb3N0c18xMDAxTGlzdChhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEltYWluUG9zdHNfMTAwMUxpc3QsYWN0aW9uLmRhdGEpOyAgXHJcblxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9MSVNUX1NVQ0NFU1MsIFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcbiAgICAgICAgYWxlcnQoJ2Vycm9yJywgZSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfTElTVF9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTWFpblBvc3RzXzEwMDEoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTUFJTlBPU1RTXzEwMDFfTElTVF9SRVFVRVNULHNhZ2FNYWluUG9zdHNfMTAwMUxpc3QpOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG4vL21haW5Qb3N0XzEwMDEg7IOB7IS47KCV67O0IFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSW1haW5Qb3N0c18xMDAxRGV0YWlsKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMURldGFpbCcse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTWFpblBvc3RzXzEwMDFEZXRhaWwoYWN0aW9uKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJbWFpblBvc3RzXzEwMDFEZXRhaWwsYWN0aW9uLmRhdGEpOyBcclxuICAgICAgeWllbGQgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUywgXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTWFpblBvc3RzXzEwMDFEZXRhaWwoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fUkVRVUVTVCxzYWdhTWFpblBvc3RzXzEwMDFEZXRhaWwpOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8vbWFpblBvc3RfMTAwMSDsg4HshLgg7KCV67O0IOuMk+q4gCDrpqzsiqTtirhcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRMaXN0KGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMUNvbW1lbnRzJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50TGlzdChhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRMaXN0LGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgIHlpZWxkICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1NVQ0NFU1MsIFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcbiAgICAgICAgYWxlcnQoJ2Vycm9yJywgZSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOiBlLCBcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRMaXN0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KE1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1JFUVVFU1Qsc2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudExpc3QpOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy9tYWluUG9zdF8xMDAxIOyDgeyEuCDsoJXrs7Qg64yA64yT6riAIOumrOyKpO2KuFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRMaXN0KGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50TGlzdChhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRMaXN0LGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgIHlpZWxkICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgIGRhdGE6e2FycmF5OnJlc3VsdC5kYXRhLCBwYXJhbTphY3Rpb24uZGF0YX0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjogZSwgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50TGlzdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1JFUVVFU1Qsc2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudExpc3QpOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vbWFpblBvc3RfMTAwMSDrjJPquIAg7J6F66ClXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJbWFpblBvc3RzXzEwMDFDb21tZW50SW5zZXJ0KGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMUNvbW1lbnRJbnNlcnQnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRJbnNlcnQoYWN0aW9uKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJbWFpblBvc3RzXzEwMDFDb21tZW50SW5zZXJ0LGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgIGNvbnN0IGFycmF5PVtdOyBcclxuICAgICAgcmVzdWx0LmRhdGEubWFwKCh2LGkpPT57XHJcbiAgICAgICAgcmVzdWx0LmRhdGFbMF0ua2s9J2FkZENvbW1lbnQnOyBcclxuICAgICAgICBhcnJheS5wdXNoKHYpOyBcclxuICAgICAgfSk7IFxyXG4gICAgICBcclxuXHJcbiAgICAgIHlpZWxkICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjogZSwgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50SW5zZXJ0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfUkVRVUVTVCxzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50SW5zZXJ0KTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy9tYWluUG9zdF8xMDAxIOuMgOuMk+q4gCDsnoXroKVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudEluc2VydCcse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogc2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudEluc2VydChhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQsYWN0aW9uLmRhdGEpOyBcclxuXHJcbiAgICAgIHlpZWxkICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTp7YXJyYXk6cmVzdWx0LmRhdGEsIHBhcmFtOmFjdGlvbi5kYXRhfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG4gICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjogZSwgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50SW5zZXJ0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfUkVRVUVTVCxzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50SW5zZXJ0KTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8v6rKM7Iuc6riAIExJS0UgLyBESVNMSUtFIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSW1haW5Qb3N0c18xMDAxTGlrZShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFMaWtlJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTWFpblBvc3RzXzEwMDFMaWtlKGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJbWFpblBvc3RzXzEwMDFMaWtlLGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgICAgYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFJbmZvWzBdID0gey4uLmFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxSW5mb1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA6J1knLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29kIDogYWN0aW9uLmRhdGEuZmxhZyA9PT0gJ2dvb2QnID8gcGFyc2VJbnQoYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFJbmZvWzBdLmdvb2QpICsgMSA6IGFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxSW5mb1swXS5nb29kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWQgIDogYWN0aW9uLmRhdGEuZmxhZyA9PT0gJ2JhZCcgID8gcGFyc2VJbnQoYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFJbmZvWzBdLmJhZCkgICsgMSA6IGFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxSW5mb1swXS5iYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWQgOiAnY2xpY2tlZCcsICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgIHlpZWxkICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9TVUNDRVNTLCBcclxuICAgICAgICAgICAgLy/snbTrn7Dsi53snLzroZzrj4Qg66as65OA7ISc7JeQIOuNsOydtO2EsOulvCDrs7Trgrwg7IiYIOyeiOuLpC4gXHJcbiAgICAgICAgICAgIC8vZGF0YTp7YXJyYXkgOiBhY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUNvbW1lbnRzLCB2YWx1ZXMgOmFjdGlvbi5kYXRhLmNvbW1lbnRpZCB9LFxyXG4gICAgICAgICAgICBkYXRhOnthcnJheTphY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUluZm99LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcbiAgICAgICAgYWxlcnQoJ2Vycm9yJywgZSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjogZSwgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTWFpblBvc3RzXzEwMDFMaWtlKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KE1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9SRVFVRVNULHNhZ2FNYWluUG9zdHNfMTAwMUxpa2UpOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8vbWFpblBvc3RfMTAwMSDrjJPquIAgTElLRSAvIERJU0xJS0UgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJbWFpblBvc3RzXzEwMDFDb21tZW50TGlrZShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFDb21tZW50TGlrZScse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogc2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudExpa2UoYWN0aW9uKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJbWFpblBvc3RzXzEwMDFDb21tZW50TGlrZSxhY3Rpb24uZGF0YSk7IFxyXG4gICAgIFxyXG4gICAgICAgIGFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxQ29tbWVudHMubWFwKCh2LGkpPT57XHJcbiAgICAgICAgICAgIGlmKHYuY29tbWVudElkID09PSBhY3Rpb24uZGF0YS5jb21tZW50aWQpe1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFDb21tZW50c1tpXSA9IHsuLi5hY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUNvbW1lbnRzW2ldLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZENvbXBvbmVudDphY3Rpb24uZGF0YS5jb21tZW50aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWc6J1knLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZURpc2xpa2VmbGFnOmFjdGlvbi5kYXRhLmZsYWd9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgXHJcbiAgICAgIHlpZWxkICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1NVQ0NFU1MsIFxyXG4gICAgICAgICAgICAvL+ydtOufsOyLneycvOuhnOuPhCDrpqzrk4DshJzsl5Ag642w7J207YSw66W8IOuztOuCvCDsiJgg7J6I64ukLiBcclxuICAgICAgICAgICAgLy9kYXRhOnthcnJheSA6IGFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxQ29tbWVudHMsIHZhbHVlcyA6YWN0aW9uLmRhdGEuY29tbWVudGlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6YWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFDb21tZW50cyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG4gICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjogZSwgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50TGlrZSgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNULHNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRMaWtlKTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vL21haW5Qb3N0XzEwMDEg64yA64yT6riAIExJS0UgLyBESVNMSUtFIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNMaWtlKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzTGlrZScse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogc2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNMaWtlKGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNMaWtlLGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgY29uc29sZS5sb2coJ21haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHM9PicsYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cyk7IFxyXG4gICAgICAgIFxyXG4gICAgIGFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMubWFwKCh2LGkpPT57XHJcbiAgICAgICAgaWYodi5ieUNvbW1lbnRJZCA9PT0gYWN0aW9uLmRhdGEuYnlDb21tZW50SWQpe1xyXG4gICAgICAgICAgICBhY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzW2ldID0gey4uLmFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2VkQ29tcG9uZW50OmFjdGlvbi5kYXRhLmJ5Q29tbWVudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZzonWScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlRGlzbGlrZWZsYWc6YWN0aW9uLmRhdGEuZmxhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgfSk7XHJcblxyXG5cclxuICAgICAgeWllbGQgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgIGRhdGE6YWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG4gICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjogZSwgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c0xpa2UoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfUkVRVUVTVCxzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c0xpa2UpOyBcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogbWFpblBvc3RzXzEwMDFTYWdhKCl7XHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTWFpblBvc3RzXzEwMDEpLCBcclxuICAgICAgICBmb3JrKHdhdGNoTWFpblBvc3RzXzEwMDFEZXRhaWwpLCBcclxuICAgICAgICBmb3JrKHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50TGlzdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRJbnNlcnQpLCBcclxuICAgICAgICBmb3JrKHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50TGlrZSksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRMaXN0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudEluc2VydCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzTGlrZSksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hNYWluUG9zdHNfMTAwMUxpa2UpLFxyXG4gICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9