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
            flag: 'Y'
          });
          _context13.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: _reducers_mainPosts_1001__WEBPACK_IMPORTED_MODULE_4__["MAINPOSTS_1001_MAINPOSTLIKE_SUCCESS"],
            //이런식으로도 리듀서에 데이터를 보낼 수 있다. 
            //data:{array : action.data.mainPosts_1001Comments, values :action.data.commentid },
            data: {
              array: action.data.mainPosts_1001Info[0]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9tYWluUG9zdHNfMTAwMVNhZ2EuanMiXSwibmFtZXMiOlsic2FnYU1haW5Qb3N0c18xMDAxTGlzdCIsIndhdGNoTWFpblBvc3RzXzEwMDEiLCJzYWdhTWFpblBvc3RzXzEwMDFEZXRhaWwiLCJ3YXRjaE1haW5Qb3N0c18xMDAxRGV0YWlsIiwic2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudExpc3QiLCJ3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudExpc3QiLCJzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50TGlzdCIsIndhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50TGlzdCIsInNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRJbnNlcnQiLCJ3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudEluc2VydCIsInNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQiLCJ3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudEluc2VydCIsInNhZ2FNYWluUG9zdHNfMTAwMUxpa2UiLCJ3YXRjaE1haW5Qb3N0c18xMDAxTGlrZSIsInNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRMaWtlIiwid2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRMaWtlIiwic2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNMaWtlIiwid2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzTGlrZSIsIm1haW5Qb3N0c18xMDAxU2FnYSIsIkFQSW1haW5Qb3N0c18xMDAxTGlzdCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJhY3Rpb24iLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIk1BSU5QT1NUU18xMDAxX0xJU1RfU1VDQ0VTUyIsImNvbnNvbGUiLCJlcnJvciIsImFsZXJ0IiwiTUFJTlBPU1RTXzEwMDFfTElTVF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIk1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCIsIkFQSW1haW5Qb3N0c18xMDAxRGV0YWlsIiwiTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19SRVFVRVNUIiwiQVBJbWFpblBvc3RzXzEwMDFDb21tZW50TGlzdCIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19GQUlMVVJFIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVFNfUkVRVUVTVCIsIkFQSW1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudExpc3QiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1NVQ0NFU1MiLCJhcnJheSIsInBhcmFtIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9GQUlMVVJFIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNUIiwiQVBJbWFpblBvc3RzXzEwMDFDb21tZW50SW5zZXJ0IiwibWFwIiwidiIsImkiLCJrayIsInB1c2giLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1QiLCJBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1JFUVVFU1QiLCJBUEltYWluUG9zdHNfMTAwMUxpa2UiLCJtYWluUG9zdHNfMTAwMUluZm8iLCJmbGFnIiwiTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1NVQ0NFU1MiLCJNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9SRVFVRVNUIiwiQVBJbWFpblBvc3RzXzEwMDFDb21tZW50TGlrZSIsIm1haW5Qb3N0c18xMDAxQ29tbWVudHMiLCJjb21tZW50SWQiLCJjb21tZW50aWQiLCJjbGlja2VkQ29tcG9uZW50IiwibGlrZURpc2xpa2VmbGFnIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfU1VDQ0VTUyIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX0ZBSUxVUkUiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNUIiwiQVBJbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c0xpa2UiLCJsb2ciLCJtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzIiwiYnlDb21tZW50SWQiLCJNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9TVUNDRVNTIiwiTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfRkFJTFVSRSIsIk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FtRFVBLHNCO21HQXFCQUMsbUI7bUdBY0FDLHdCO21HQW9CQUMseUI7bUdBY0FDLDZCO21HQXFCQUMsOEI7bUdBY0FDLHNDO21HQXFCQUMsdUM7bUdBaUJBQywrQjtvR0E0QkFDLGdDO29HQVlBQyx3QztvR0F1QkFDLHlDO29HQWdCQUMsc0I7b0dBMkJBQyx1QjtvR0FjQUMsNkI7b0dBaUNBQyw4QjtvR0FjQUMsdUM7b0dBa0NBQyx3QztvR0FRZUMsa0I7O0FBbFp6QjtBQUNBO0NBNENBO0FBQ0E7O0FBQ0EsU0FBU0MscUJBQVQsQ0FBK0JDLElBQS9CLEVBQW9DO0FBQ2hDLFNB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0NBLFNBQVVkLHdDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNaUIscUVBQVUsQ0FBQ2tELG9HQUFELEVBQTZDcEUsdUNBQTdDLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FHQTs7O0FBS2UsU0FBVUUsa0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVgsaUJBQU1tRSw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNyRixtQkFBRCxDQURFLEVBRU5xRiwrREFBSSxDQUFDbkYseUJBQUQsQ0FGRSxFQUdObUYsK0RBQUksQ0FBQ2pGLDhCQUFELENBSEUsRUFJTmlGLCtEQUFJLENBQUM3RSxnQ0FBRCxDQUpFLEVBS042RSwrREFBSSxDQUFDdkUsOEJBQUQsQ0FMRSxFQU1OdUUsK0RBQUksQ0FBQy9FLHVDQUFELENBTkUsRUFPTitFLCtEQUFJLENBQUMzRSx5Q0FBRCxDQVBFLEVBUU4yRSwrREFBSSxDQUFDckUsd0NBQUQsQ0FSRSxFQVNOcUUsK0RBQUksQ0FBQ3pFLHVCQUFELENBVEUsQ0FBRCxDQUFUOztBQUZXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmQ2OTU4MDUwYTE0ZGE2MmVkNDBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7YWxsLGZvcmssdGFrZUxhdGVzdCx0YWtlRXZlcnkgLHB1dCwgZGVsYXksY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJzsgXHJcbmltcG9ydCBcclxuICAgIHtcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9MSVNUX1JFUVVFU1QsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfTElTVF9TVUNDRVNTLFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSwgICAgXHJcblxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1QsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9ERVRBSUxfSU5GT19GQUlMVVJFLFxyXG5cclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULCBcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19TVUNDRVNTLCBcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19GQUlMVVJFLCBcclxuXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9SRVFVRVNULFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRJTlNFUlRfU1VDQ0VTUyxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX0ZBSUxVUkUsIFxyXG5cclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9SRVFVRVNULFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRMSUtFX1NVQ0NFU1MsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfRkFJTFVSRSxcclxuICAgICAgICBcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRfRkFJTFVSRSxcclxuXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1JFUVVFU1QsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX1NVQ0NFU1MsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfTUFJTlBPU1RMSUtFX0ZBSUxVUkUsXHJcblxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRJTlNFUlRfUkVRVUVTVCxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1NVQ0NFU1MsXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9GQUlMVVJFLCBcclxuXHJcbiAgICAgICAgTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVExJS0VfUkVRVUVTVCxcclxuICAgICAgICBNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9TVUNDRVNTLFxyXG4gICAgICAgIE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX0ZBSUxVUkUsXHJcblxyXG4gICAgfSBcclxuZnJvbSAnLi4vcmVkdWNlcnMvbWFpblBvc3RzXzEwMDEnOyBcclxuXHJcblxyXG5cclxuLy9tYWluUG9zdF8xMDAxIOumrOyKpO2KuCBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUEltYWluUG9zdHNfMTAwMUxpc3QoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL21haW5Qb3N0c18xMDAxJyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNYWluUG9zdHNfMTAwMUxpc3QoYWN0aW9uKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJbWFpblBvc3RzXzEwMDFMaXN0LGFjdGlvbi5kYXRhKTsgIFxyXG5cclxuICAgICAgeWllbGQgIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfTElTVF9TVUNDRVNTLCBcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG4gICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0xJU1RfRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOiBlLCBcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1haW5Qb3N0c18xMDAxKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KE1BSU5QT1NUU18xMDAxX0xJU1RfUkVRVUVTVCxzYWdhTWFpblBvc3RzXzEwMDFMaXN0KTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuLy9tYWluUG9zdF8xMDAxIOyDgeyEuOygleuztCBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUEltYWluUG9zdHNfMTAwMURldGFpbChkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFEZXRhaWwnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2FnYU1haW5Qb3N0c18xMDAxRGV0YWlsKGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSW1haW5Qb3N0c18xMDAxRGV0YWlsLGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgIHlpZWxkICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1NVQ0NFU1MsIFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcbiAgICAgICAgYWxlcnQoJ2Vycm9yJywgZSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfREVUQUlMX0lORk9fRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOiBlLCBcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1haW5Qb3N0c18xMDAxRGV0YWlsKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KE1BSU5QT1NUU18xMDAxX0RFVEFJTF9JTkZPX1JFUVVFU1Qsc2FnYU1haW5Qb3N0c18xMDAxRGV0YWlsKTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vL21haW5Qb3N0XzEwMDEg7IOB7IS4IOygleuztCDrjJPquIAg66as7Iqk7Yq4XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJbWFpblBvc3RzXzEwMDFDb21tZW50TGlzdChkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFDb21tZW50cycse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogc2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudExpc3QoYWN0aW9uKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJbWFpblBvc3RzXzEwMDFDb21tZW50TGlzdCxhY3Rpb24uZGF0YSk7IFxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19TVUNDRVNTLCBcclxuICAgICAgICAgICAgZGF0YTpyZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG4gICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRTX0ZBSUxVUkUsIFxyXG4gICAgICAgICAgICBlcnJvcjogZSwgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50TGlzdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChNQUlOUE9TVFNfMTAwMV9DT01NRU5UU19SRVFVRVNULHNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRMaXN0KTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vbWFpblBvc3RfMTAwMSDsg4HshLgg7KCV67O0IOuMgOuMk+q4gCDrpqzsiqTtirhcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gQVBJbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50TGlzdChkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50cycse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogc2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudExpc3QoYWN0aW9uKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50TGlzdCxhY3Rpb24uZGF0YSk7IFxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UX1NVQ0NFU1MsIFxyXG4gICAgICAgICAgICBkYXRhOnthcnJheTpyZXN1bHQuZGF0YSwgcGFyYW06YWN0aW9uLmRhdGF9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcbiAgICAgICAgYWxlcnQoJ2Vycm9yJywgZSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudExpc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVF9SRVFVRVNULHNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRMaXN0KTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL21haW5Qb3N0XzEwMDEg64yT6riAIOyeheugpVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudEluc2VydChkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFDb21tZW50SW5zZXJ0Jyx7ZGF0YX0se3dpdGhDcmVkZW50aWFsczp0cnVlfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiBzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50SW5zZXJ0KGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudEluc2VydCxhY3Rpb24uZGF0YSk7IFxyXG4gICAgICBjb25zdCBhcnJheT1bXTsgXHJcbiAgICAgIHJlc3VsdC5kYXRhLm1hcCgodixpKT0+e1xyXG4gICAgICAgIHJlc3VsdC5kYXRhWzBdLmtrPSdhZGRDb21tZW50JzsgXHJcbiAgICAgICAgYXJyYXkucHVzaCh2KTsgXHJcbiAgICAgIH0pOyBcclxuICAgICAgXHJcblxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1NVQ0NFU1MsIFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1jYXRjaChlKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgXHJcbiAgICAgICAgYWxlcnQoJ2Vycm9yJywgZSk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVElOU0VSVF9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudEluc2VydCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChNQUlOUE9TVFNfMTAwMV9DT01NRU5USU5TRVJUX1JFUVVFU1Qsc2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudEluc2VydCk7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vbWFpblBvc3RfMTAwMSDrjIDrjJPquIAg7J6F66ClXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gQVBJbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50SW5zZXJ0KGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9tYWluUG9zdHNfMTAwMS9tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQoYWN0aW9uKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQVBJbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50SW5zZXJ0LGFjdGlvbi5kYXRhKTsgXHJcblxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6e2FycmF5OnJlc3VsdC5kYXRhLCBwYXJhbTphY3Rpb24uZGF0YX0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHR5cGU6TUFJTlBPU1RTXzEwMDFfQ09NTUVOVEJZQ09NTUVOVElOU0VSVF9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudEluc2VydCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5USU5TRVJUX1JFUVVFU1Qsc2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudEluc2VydCk7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL+qyjOyLnOq4gCBMSUtFIC8gRElTTElLRSBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUEltYWluUG9zdHNfMTAwMUxpa2UoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxTGlrZScse2RhdGF9LHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogc2FnYU1haW5Qb3N0c18xMDAxTGlrZShhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEltYWluUG9zdHNfMTAwMUxpa2UsYWN0aW9uLmRhdGEpOyBcclxuICAgICBcclxuICAgICAgYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFJbmZvWzBdID0gey4uLmFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxSW5mb1swXSxmbGFnIDonWSd9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfU1VDQ0VTUywgXHJcbiAgICAgICAgICAgIC8v7J2065+w7Iud7Jy866Gc64+EIOumrOuTgOyEnOyXkCDrjbDsnbTthLDrpbwg67O064K8IOyImCDsnojri6QuIFxyXG4gICAgICAgICAgICAvL2RhdGE6e2FycmF5IDogYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFDb21tZW50cywgdmFsdWVzIDphY3Rpb24uZGF0YS5jb21tZW50aWQgfSxcclxuICAgICAgICAgICAgZGF0YTp7YXJyYXk6YWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFJbmZvWzBdfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9Y2F0Y2goZSl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IFxyXG4gICAgICAgIGFsZXJ0KCdlcnJvcicsIGUpOyBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX01BSU5QT1NUTElLRV9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1haW5Qb3N0c18xMDAxTGlrZSgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChNQUlOUE9TVFNfMTAwMV9NQUlOUE9TVExJS0VfUkVRVUVTVCxzYWdhTWFpblBvc3RzXzEwMDFMaWtlKTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vL21haW5Qb3N0XzEwMDEg64yT6riAIExJS0UgLyBESVNMSUtFIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudExpa2UoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL21haW5Qb3N0c18xMDAxL21haW5Qb3N0c18xMDAxQ29tbWVudExpa2UnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRMaWtlKGFjdGlvbil7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFQSW1haW5Qb3N0c18xMDAxQ29tbWVudExpa2UsYWN0aW9uLmRhdGEpOyBcclxuICAgICBcclxuICAgICAgICBhY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUNvbW1lbnRzLm1hcCgodixpKT0+e1xyXG4gICAgICAgICAgICBpZih2LmNvbW1lbnRJZCA9PT0gYWN0aW9uLmRhdGEuY29tbWVudGlkKXtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxQ29tbWVudHNbaV0gPSB7Li4uYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFDb21tZW50c1tpXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRDb21wb25lbnQ6YWN0aW9uLmRhdGEuY29tbWVudGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnOidZJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VEaXNsaWtlZmxhZzphY3Rpb24uZGF0YS5mbGFnfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIFxyXG4gICAgICB5aWVsZCAgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9TVUNDRVNTLCBcclxuICAgICAgICAgICAgLy/snbTrn7Dsi53snLzroZzrj4Qg66as65OA7ISc7JeQIOuNsOydtO2EsOulvCDrs7Trgrwg7IiYIOyeiOuLpC4gXHJcbiAgICAgICAgICAgIC8vZGF0YTp7YXJyYXkgOiBhY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUNvbW1lbnRzLCB2YWx1ZXMgOmFjdGlvbi5kYXRhLmNvbW1lbnRpZCB9LFxyXG4gICAgICAgICAgICBkYXRhOmFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxQ29tbWVudHMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UTElLRV9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudExpa2UoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTUFJTlBPU1RTXzEwMDFfQ09NTUVOVExJS0VfUkVRVUVTVCxzYWdhTWFpblBvc3RzXzEwMDFDb21tZW50TGlrZSk7IFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy9tYWluUG9zdF8xMDAxIOuMgOuMk+q4gCBMSUtFIC8gRElTTElLRSBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzTGlrZShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFpblBvc3RzXzEwMDEvbWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c0xpa2UnLHtkYXRhfSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHNhZ2FNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzTGlrZShhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChBUEltYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzTGlrZSxhY3Rpb24uZGF0YSk7IFxyXG4gICAgIGNvbnNvbGUubG9nKCdtYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzPT4nLGFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMpOyBcclxuICAgICAgICBcclxuICAgICBhY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzLm1hcCgodixpKT0+e1xyXG4gICAgICAgIGlmKHYuYnlDb21tZW50SWQgPT09IGFjdGlvbi5kYXRhLmJ5Q29tbWVudElkKXtcclxuICAgICAgICAgICAgYWN0aW9uLmRhdGEubWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c1tpXSA9IHsuLi5hY3Rpb24uZGF0YS5tYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZENvbXBvbmVudDphY3Rpb24uZGF0YS5ieUNvbW1lbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWc6J1knLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZURpc2xpa2VmbGFnOmFjdGlvbi5kYXRhLmZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIHlpZWxkICBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOk1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX1NVQ0NFU1MsIFxyXG4gICAgICAgICAgICBkYXRhOmFjdGlvbi5kYXRhLm1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyBcclxuICAgICAgICBhbGVydCgnZXJyb3InLCBlKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpNQUlOUE9TVFNfMTAwMV9DT01NRU5UQllDT01NRU5UTElLRV9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGUsIFxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNMaWtlKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KE1BSU5QT1NUU18xMDAxX0NPTU1FTlRCWUNPTU1FTlRMSUtFX1JFUVVFU1Qsc2FnYU1haW5Qb3N0c18xMDAxQ29tbWVudEJ5Q29tbWVudHNMaWtlKTsgXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG1haW5Qb3N0c18xMDAxU2FnYSgpe1xyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaE1haW5Qb3N0c18xMDAxKSwgXHJcbiAgICAgICAgZm9yayh3YXRjaE1haW5Qb3N0c18xMDAxRGV0YWlsKSwgXHJcbiAgICAgICAgZm9yayh3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudExpc3QpLCBcclxuICAgICAgICBmb3JrKHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50SW5zZXJ0KSwgXHJcbiAgICAgICAgZm9yayh3YXRjaE1haW5Qb3N0c18xMDAxQ29tbWVudExpa2UpLCBcclxuICAgICAgICBmb3JrKHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50TGlzdCksIFxyXG4gICAgICAgIGZvcmsod2F0Y2hNYWluUG9zdHNfMTAwMUNvbW1lbnRCeUNvbW1lbnRJbnNlcnQpLCBcclxuICAgICAgICBmb3JrKHdhdGNoTWFpblBvc3RzXzEwMDFDb21tZW50QnlDb21tZW50c0xpa2UpLCBcclxuICAgICAgICBmb3JrKHdhdGNoTWFpblBvc3RzXzEwMDFMaWtlKSxcclxuICAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==