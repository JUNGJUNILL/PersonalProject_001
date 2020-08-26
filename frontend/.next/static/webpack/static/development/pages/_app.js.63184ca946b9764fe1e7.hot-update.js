webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/AppLayOut.js":
/*!*********************************!*\
  !*** ./components/AppLayOut.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _this = undefined,
    _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\components\\AppLayOut.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var AppLayOut = function AppLayOut(_ref) {
  _s();

  var children = _ref.children;
  var dummyList = ['카테코리01', '카테코리02', '카테코리03', '카테코리04', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05', '카테코리05'];
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth;
  }),
      userInfo = _useSelector.userInfo,
      joined = _useSelector.joined;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //로그 아웃 후 메인 페이지로 이동
    if (!userInfo) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    }
  }, [userInfo]);
  var logOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    dispatch({
      type: _reducers_auth__WEBPACK_IMPORTED_MODULE_8__["LOGOUT_REQUEST"]
    });
  }, [userInfo]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isClicked = _useState[0],
      setIsClicked = _useState[1];

  var inputEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var catergoriList = function catergoriList() {
    setIsClicked(!isClicked);
  };

  var closeCatergoriList = function closeCatergoriList() {
    setIsClicked(false);
  }; //https://velog.io/@janghyoin/Jobshopper-project-NextJS%EC%97%90%EC%84%9C-styled-components-%EC%82%AC%EC%9A%A9-hwjzs423yw


  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "navul",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "navli",
    onClick: catergoriList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "\uBA54\uB274"), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 61
    }
  }, "Home"))), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/about',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 66
    }
  }, "About"))), __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/count',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 66
    }
  }, "Count"))), userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 34
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/emp',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 56
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 77
    }
  }, "emp"))), !userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/join',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 79
    }
  }, "\uD68C\uC6D0\uAC00\uC785"))), !userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/login',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 80
    }
  }, "\uB85C\uADF8\uC778"))), userInfo && __jsx("li", {
    className: "navli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/userInfo',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 57
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 83
    }
  }, "\uD68C\uC6D0\uC815\uBCF4"))), userInfo && __jsx("li", {
    className: "navli",
    onClick: logOut,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 36
    }
  }, "\uB85C\uADF8\uC544\uC6C3")), __jsx("div", {
    className: "sidenav",
    style: {
      width: isClicked ? "40%" : "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "closebtn",
    onClick: closeCatergoriList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 16
    }
  }, "x"), dummyList.map(function (v, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: '/about',
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 16
      }
    }, __jsx("a", {
      onClick: closeCatergoriList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    }, v));
  })), children));
};

_s(AppLayOut, "vwAKp1hJt2EBcaNwqppaBsLW1sQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = AppLayOut;
AppLayOut.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayOut);

var _c;

$RefreshReg$(_c, "AppLayOut");

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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/draft-js/dist/Draft.css":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/draft-js/dist/Draft.css ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * Draft v0.11.7\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n.DraftEditor-editorContainer,.DraftEditor-root,.public-DraftEditor-content{height:inherit;text-align:left;text-align:initial}.public-DraftEditor-content[contenteditable=true]{-webkit-user-modify:read-write-plaintext-only}.DraftEditor-root{position:relative}.DraftEditor-editorContainer{background-color:rgba(255,255,255,0);border-left:.1px solid transparent;position:relative;z-index:1}.public-DraftEditor-block{position:relative}.DraftEditor-alignLeft .public-DraftStyleDefault-block{text-align:left}.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root{left:0;text-align:left}.DraftEditor-alignCenter .public-DraftStyleDefault-block{text-align:center}.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root{margin:0 auto;text-align:center;width:100%}.DraftEditor-alignRight .public-DraftStyleDefault-block{text-align:right}.DraftEditor-alignRight .public-DraftEditorPlaceholder-root{right:0;text-align:right}.public-DraftEditorPlaceholder-root{color:#9197a3;position:absolute;width:100%;z-index:1}.public-DraftEditorPlaceholder-hasFocus{color:#bdc1c9}.DraftEditorPlaceholder-hidden{display:none}.public-DraftStyleDefault-block{position:relative;white-space:pre-wrap}.public-DraftStyleDefault-ltr{direction:ltr;text-align:left}.public-DraftStyleDefault-rtl{direction:rtl;text-align:right}.public-DraftStyleDefault-listLTR{direction:ltr}.public-DraftStyleDefault-listRTL{direction:rtl}.public-DraftStyleDefault-ol,.public-DraftStyleDefault-ul{margin:16px 0;padding:0}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR{margin-left:1.5em}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL{margin-right:1.5em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR{margin-left:3em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL{margin-right:3em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR{margin-left:4.5em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL{margin-right:4.5em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR{margin-left:6em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL{margin-right:6em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR{margin-left:7.5em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL{margin-right:7.5em}.public-DraftStyleDefault-unorderedListItem{list-style-type:square;position:relative}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0{list-style-type:disc}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1{list-style-type:circle}.public-DraftStyleDefault-orderedListItem{list-style-type:none;position:relative}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before{left:-36px;position:absolute;text-align:right;width:30px}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before{position:absolute;right:-36px;text-align:left;width:30px}.public-DraftStyleDefault-orderedListItem:before{content:counter(ol0) \". \";counter-increment:ol0}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before{content:counter(ol1,lower-alpha) \". \";counter-increment:ol1}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before{content:counter(ol2,lower-roman) \". \";counter-increment:ol2}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before{content:counter(ol3) \". \";counter-increment:ol3}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before{content:counter(ol4,lower-alpha) \". \";counter-increment:ol4}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset{counter-reset:ol0}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset{counter-reset:ol1}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset{counter-reset:ol2}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset{counter-reset:ol3}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset{counter-reset:ol4}", "",{"version":3,"sources":["C:/git Repository/PersonalProject_001/frontend/node_modules/draft-js/dist/Draft.css"],"names":[],"mappings":"AAAA;;;;;;;EAOE;AACF,2EAA2E,cAAc,CAAC,eAAiB,CAAjB,kBAAkB,CAAC,kDAAkD,6CAA6C,CAAC,kBAAkB,iBAAiB,CAAC,6BAA6B,oCAAoC,CAAC,kCAAkC,CAAC,iBAAiB,CAAC,SAAS,CAAC,0BAA0B,iBAAiB,CAAC,uDAAuD,eAAe,CAAC,2DAA2D,MAAM,CAAC,eAAe,CAAC,yDAAyD,iBAAiB,CAAC,6DAA6D,aAAa,CAAC,iBAAiB,CAAC,UAAU,CAAC,wDAAwD,gBAAgB,CAAC,4DAA4D,OAAO,CAAC,gBAAgB,CAAC,oCAAoC,aAAa,CAAC,iBAAiB,CAAC,UAAU,CAAC,SAAS,CAAC,wCAAwC,aAAa,CAAC,+BAA+B,YAAY,CAAC,gCAAgC,iBAAiB,CAAC,oBAAoB,CAAC,8BAA8B,aAAa,CAAC,eAAe,CAAC,8BAA8B,aAAa,CAAC,gBAAgB,CAAC,kCAAkC,aAAa,CAAC,kCAAkC,aAAa,CAAC,0DAA0D,aAAa,CAAC,SAAS,CAAC,kEAAkE,iBAAiB,CAAC,kEAAkE,kBAAkB,CAAC,kEAAkE,eAAe,CAAC,kEAAkE,gBAAgB,CAAC,kEAAkE,iBAAiB,CAAC,kEAAkE,kBAAkB,CAAC,kEAAkE,eAAe,CAAC,kEAAkE,gBAAgB,CAAC,kEAAkE,iBAAiB,CAAC,kEAAkE,kBAAkB,CAAC,4CAA4C,sBAAsB,CAAC,iBAAiB,CAAC,4EAA4E,oBAAoB,CAAC,4EAA4E,sBAAsB,CAAC,0CAA0C,oBAAoB,CAAC,iBAAiB,CAAC,kFAAkF,UAAU,CAAC,iBAAiB,CAAC,gBAAgB,CAAC,UAAU,CAAC,kFAAkF,iBAAiB,CAAC,WAAW,CAAC,eAAe,CAAC,UAAU,CAAC,iDAAiD,yBAAyB,CAAC,qBAAqB,CAAC,iFAAiF,qCAAqC,CAAC,qBAAqB,CAAC,iFAAiF,qCAAqC,CAAC,qBAAqB,CAAC,iFAAiF,yBAAyB,CAAC,qBAAqB,CAAC,iFAAiF,qCAAqC,CAAC,qBAAqB,CAAC,gEAAgE,iBAAiB,CAAC,gEAAgE,iBAAiB,CAAC,gEAAgE,iBAAiB,CAAC,gEAAgE,iBAAiB,CAAC,gEAAgE,iBAAiB","file":"Draft.css","sourcesContent":["/**\n * Draft v0.11.7\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n.DraftEditor-editorContainer,.DraftEditor-root,.public-DraftEditor-content{height:inherit;text-align:initial}.public-DraftEditor-content[contenteditable=true]{-webkit-user-modify:read-write-plaintext-only}.DraftEditor-root{position:relative}.DraftEditor-editorContainer{background-color:rgba(255,255,255,0);border-left:.1px solid transparent;position:relative;z-index:1}.public-DraftEditor-block{position:relative}.DraftEditor-alignLeft .public-DraftStyleDefault-block{text-align:left}.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root{left:0;text-align:left}.DraftEditor-alignCenter .public-DraftStyleDefault-block{text-align:center}.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root{margin:0 auto;text-align:center;width:100%}.DraftEditor-alignRight .public-DraftStyleDefault-block{text-align:right}.DraftEditor-alignRight .public-DraftEditorPlaceholder-root{right:0;text-align:right}.public-DraftEditorPlaceholder-root{color:#9197a3;position:absolute;width:100%;z-index:1}.public-DraftEditorPlaceholder-hasFocus{color:#bdc1c9}.DraftEditorPlaceholder-hidden{display:none}.public-DraftStyleDefault-block{position:relative;white-space:pre-wrap}.public-DraftStyleDefault-ltr{direction:ltr;text-align:left}.public-DraftStyleDefault-rtl{direction:rtl;text-align:right}.public-DraftStyleDefault-listLTR{direction:ltr}.public-DraftStyleDefault-listRTL{direction:rtl}.public-DraftStyleDefault-ol,.public-DraftStyleDefault-ul{margin:16px 0;padding:0}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR{margin-left:1.5em}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL{margin-right:1.5em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR{margin-left:3em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL{margin-right:3em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR{margin-left:4.5em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL{margin-right:4.5em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR{margin-left:6em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL{margin-right:6em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR{margin-left:7.5em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL{margin-right:7.5em}.public-DraftStyleDefault-unorderedListItem{list-style-type:square;position:relative}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0{list-style-type:disc}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1{list-style-type:circle}.public-DraftStyleDefault-orderedListItem{list-style-type:none;position:relative}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before{left:-36px;position:absolute;text-align:right;width:30px}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before{position:absolute;right:-36px;text-align:left;width:30px}.public-DraftStyleDefault-orderedListItem:before{content:counter(ol0) \". \";counter-increment:ol0}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before{content:counter(ol1,lower-alpha) \". \";counter-increment:ol1}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before{content:counter(ol2,lower-roman) \". \";counter-increment:ol2}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before{content:counter(ol3) \". \";counter-increment:ol3}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before{content:counter(ol4,lower-alpha) \". \";counter-increment:ol4}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset{counter-reset:ol0}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset{counter-reset:ol1}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset{counter-reset:ol2}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset{counter-reset:ol3}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset{counter-reset:ol4}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/draft-js/dist/Draft.css":
/*!**********************************************!*\
  !*** ./node_modules/draft-js/dist/Draft.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./Draft.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/draft-js/dist/Draft.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./Draft.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/draft-js/dist/Draft.css",
      function () {
        content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./Draft.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/draft-js/dist/Draft.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppLayOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayOut */ "./components/AppLayOut.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CSS_antdMobile_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CSS/antdMobile.css */ "./CSS/antdMobile.css");
/* harmony import */ var _CSS_antdMobile_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_CSS_antdMobile_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var draft_js_dist_Draft_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! draft-js/dist/Draft.css */ "./node_modules/draft-js/dist/Draft.css");
/* harmony import */ var draft_js_dist_Draft_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(draft_js_dist_Draft_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../reducers/auth */ "./reducers/auth.js");




var _this = undefined,
    _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;













 //프로젝트 고정 틀

var Project01_TodoList = function Project01_TodoList(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "TodoList"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.min.css",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  })), __jsx(_components_AppLayOut__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }))));
};

_c = Project01_TodoList;

Project01_TodoList.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var ctx, Component, pageProps, state, isServer, cookie;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //▲ next에서 제공해줌
            ctx = context.ctx, Component = context.Component;
            pageProps = {};
            state = ctx.store.getState(); //프로젝트 전체 stat를 가져 올 수 있다. 

            isServer =  false || !!context.req || !!context.ctx.req;
            cookie = isServer ? ctx.req.headers.cookie : '';

            if (isServer && cookie) {
              //클라이언 환경에서는 브라우저가 쿠키를 넣어주고, 
              //SSR일 때는 우리가 직접 넣어줘야 한다. 
              axios__WEBPACK_IMPORTED_MODULE_7___default.a.defaults.headers.Cookie = cookie;
            } //(새로고침)로그인 정보 유지


            if (!state.auth.userInfo) {
              ctx.store.dispatch({
                type: _reducers_auth__WEBPACK_IMPORTED_MODULE_17__["LOAD_USER_REQUEST"]
              });
            }

            if (!Component.getInitialProps) {
              _context.next = 11;
              break;
            }

            _context.next = 10;
            return Component.getInitialProps(ctx);

          case 10:
            pageProps = _context.sent;

          case 11:
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

Project01_TodoList.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.elementType.isRequired
};

var configureStore = function configureStore() {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_15__["default"])();
  var middlewares = [sagaMiddleware]; // 미들웨어들을 넣으면 된다.

  var enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_14__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_12__["applyMiddleware"].apply(void 0, middlewares));
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_12__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_13__["default"], enhancer); //react에서 redux를 사용하기 위해서는 createStore로 store를 생성해 주어야 한다. 
  //redux-next-wapper 6 버전 부터는 Provider store={store}를 내부적으로 해 준다. 

  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_16__["default"]);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_16__["default"]);
  return store;
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (_c2 = wrapper.withRedux(Project01_TodoList));

var _c, _c2;

$RefreshReg$(_c, "Project01_TodoList");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcExheU91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZHJhZnQtanMvZGlzdC9EcmFmdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RyYWZ0LWpzL2Rpc3QvRHJhZnQuY3NzP2RiNjAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJBcHBMYXlPdXQiLCJjaGlsZHJlbiIsImR1bW15TGlzdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsInVzZXJJbmZvIiwiam9pbmVkIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicHVzaCIsImxvZ091dCIsInVzZUNhbGxiYWNrIiwiZSIsInR5cGUiLCJMT0dPVVRfUkVRVUVTVCIsInVzZVN0YXRlIiwiaXNDbGlja2VkIiwic2V0SXNDbGlja2VkIiwiaW5wdXRFbCIsInVzZVJlZiIsImNhdGVyZ29yaUxpc3QiLCJjbG9zZUNhdGVyZ29yaUxpc3QiLCJ3aWR0aCIsIm1hcCIsInYiLCJpIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsIlByb2plY3QwMV9Ub2RvTGlzdCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjdHgiLCJzdG9yZSIsImdldFN0YXRlIiwiaXNTZXJ2ZXIiLCJyZXEiLCJjb29raWUiLCJoZWFkZXJzIiwiYXhpb3MiLCJkZWZhdWx0cyIsIkNvb2tpZSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwicnVuIiwicm9vdFNhZ2EiLCJzYWdhVGFzayIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFlO0FBQUE7O0FBQUEsTUFBYkMsUUFBYSxRQUFiQSxRQUFhO0FBQzdCLE1BQU1DLFNBQVMsR0FBRyxDQUFDLFFBQUQsRUFBVSxRQUFWLEVBQW1CLFFBQW5CLEVBQTRCLFFBQTVCLEVBQXFDLFFBQXJDLEVBQThDLFFBQTlDLEVBQXVELFFBQXZELEVBQWdFLFFBQWhFLEVBQXlFLFFBQXpFLEVBQWtGLFFBQWxGLEVBQTJGLFFBQTNGLEVBQW9HLFFBQXBHLEVBQTZHLFFBQTdHLEVBQXNILFFBQXRILEVBQStILFFBQS9ILEVBQXdJLFFBQXhJLEVBQWlKLFFBQWpKLEVBQTBKLFFBQTFKLEVBQW1LLFFBQW5LLEVBQTRLLFFBQTVLLEVBQXFMLFFBQXJMLENBQWxCO0FBRUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFINkIscUJBSUZDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsSUFBZjtBQUFBLEdBQUQsQ0FKVDtBQUFBLE1BSXRCQyxRQUpzQixnQkFJdEJBLFFBSnNCO0FBQUEsTUFJWkMsTUFKWSxnQkFJWkEsTUFKWTs7QUFNN0JDLHlEQUFTLENBQUMsWUFBSTtBQUVWO0FBQ0EsUUFBRyxDQUFDRixRQUFKLEVBQWE7QUFDVEcsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFFSDtBQUNKLEdBUFEsRUFPUCxDQUFDSixRQUFELENBUE8sQ0FBVDtBQVVBLE1BQU1LLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQUs7QUFFNUJaLFlBQVEsQ0FBQztBQUNMYSxV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QW5CO0FBQ0F2QixPQUFLLENBQUN3QixRQUFOLEdBQWlCWCxjQUFjLENBQUNTLEdBQWYsQ0FBbUJDLCtDQUFuQixDQUFqQjtBQUNBLFNBQU92QixLQUFQO0FBRUYsQ0FoQkQ7O0FBa0JBLElBQU15QixPQUFPLEdBQUdDLHlFQUFhLENBQUNkLGNBQUQsRUFBaUI7QUFBQ2UsT0FBSztBQUFOLENBQWpCLENBQTdCO0FBQ2UscUVBQUFGLE9BQU8sQ0FBQ0csU0FBUixDQUFrQmxDLGtCQUFsQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjYzMTg0Y2E5NDZiOTc2NGZlMWU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHt1c2VDYWxsYmFjayx1c2VTdGF0ZSx1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtSb3csQ29sfSBmcm9tICAnYW50ZCc7IFxyXG5pbXBvcnQgeyBSZXN1bHQsIEljb24sIFdoaXRlU3BhY2UsQnV0dG9uIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInOyBcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICAgICAgIExPR09VVF9SRVFVRVNULFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL2F1dGgnO1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5cclxuXHJcbmNvbnN0IEFwcExheU91dCA9ICh7Y2hpbGRyZW59KSA9PntcclxuICAgIGNvbnN0IGR1bW15TGlzdCA9IFsn7Lm07YWM7L2U66asMDEnLCfsubTthYzsvZTrpqwwMicsJ+y5tO2FjOy9lOumrDAzJywn7Lm07YWM7L2U66asMDQnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1Jywn7Lm07YWM7L2U66asMDUnLCfsubTthYzsvZTrpqwwNScsJ+y5tO2FjOy9lOumrDA1J107IFxyXG4gICBcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTsgXHJcbiAgICBjb25zdCB7dXNlckluZm8sIGpvaW5lZH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5hdXRoKTsgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIC8v66Gc6re4IOyVhOybgyDtm4Qg66mU7J24IO2OmOydtOyngOuhnCDsnbTrj5lcclxuICAgICAgICBpZighdXNlckluZm8pe1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpOyBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxbdXNlckluZm9dKTtcclxuXHJcblxyXG4gICAgY29uc3QgbG9nT3V0ID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpMT0dPVVRfUkVRVUVTVCwgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSxbdXNlckluZm9dKTsgXHJcblxyXG4gICAgY29uc3QgW2lzQ2xpY2tlZCxzZXRJc0NsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIGNvbnN0IGlucHV0RWwgPSB1c2VSZWYobnVsbCk7IFxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgY2F0ZXJnb3JpTGlzdCA9ICgpID0+e1xyXG4gICAgICAgICAgc2V0SXNDbGlja2VkKCFpc0NsaWNrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlQ2F0ZXJnb3JpTGlzdCA9ICgpID0+e1xyXG4gICAgICAgIHNldElzQ2xpY2tlZChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9odHRwczovL3ZlbG9nLmlvL0BqYW5naHlvaW4vSm9ic2hvcHBlci1wcm9qZWN0LU5leHRKUyVFQyU5NyU5MCVFQyU4NCU5Qy1zdHlsZWQtY29tcG9uZW50cy0lRUMlODIlQUMlRUMlOUElQTktaHdqenM0MjN5d1xyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fT4gXHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdnVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCIgb25DbGljaz17Y2F0ZXJnb3JpTGlzdH0+66mU64m0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnLyd9ID48YT5Ib21lPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiPjxMaW5rIGhyZWY9eycvYWJvdXQnfSA+PGE+QWJvdXQ8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCI+PExpbmsgaHJlZj17Jy9jb3VudCd9ID48YT5Db3VudDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlckluZm8gJiYgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCI+PExpbmsgaHJlZj17Jy9lbXAnfSA+PGE+ZW1wPC9hPjwvTGluaz48L2xpPiAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgeyF1c2VySW5mbyAmJiA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL2pvaW4nfSA+PGE+7ZqM7JuQ6rCA7J6FPC9hPjwvTGluaz48L2xpPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyF1c2VySW5mbyAmJiA8bGkgY2xhc3NOYW1lPVwibmF2bGlcIj48TGluayBocmVmPXsnL2xvZ2luJ30gPjxhPuuhnOq3uOyduDwvYT48L0xpbms+PC9saT4gIH1cclxuICAgICAgICAgICAgICAgICAgICB7dXNlckluZm8gJiYgIDxsaSBjbGFzc05hbWU9XCJuYXZsaVwiPjxMaW5rIGhyZWY9eycvdXNlckluZm8nfSA+PGE+7ZqM7JuQ7KCV67O0PC9hPjwvTGluaz48L2xpPiB9XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvICYmICAgPGxpIGNsYXNzTmFtZT1cIm5hdmxpXCIgb25DbGljaz17bG9nT3V0fSA+66Gc6re47JWE7JuDPC9saT59XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZW5hdlwiIHN0eWxlPXt7d2lkdGggOiBpc0NsaWNrZWQ/IFwiNDAlXCI6XCIwXCJ9fT5cclxuICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2xvc2VidG5cIiBvbkNsaWNrPXtjbG9zZUNhdGVyZ29yaUxpc3R9Png8L2E+XHJcbiAgICAgICAgICAgICAgIHtkdW1teUxpc3QubWFwKCh2LGkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9hYm91dCd9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17Y2xvc2VDYXRlcmdvcmlMaXN0fSA+e3Z9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz4gXHJcblxyXG5cclxuICAgICAgICApOyBcclxuXHJcbn1cclxuXHJcbkFwcExheU91dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbiA6IFByb3BUeXBlcy5ub2RlLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheU91dDsgIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBEcmFmdCB2MC4xMS43XFxuICpcXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG4uRHJhZnRFZGl0b3ItZWRpdG9yQ29udGFpbmVyLC5EcmFmdEVkaXRvci1yb290LC5wdWJsaWMtRHJhZnRFZGl0b3ItY29udGVudHtoZWlnaHQ6aW5oZXJpdDt0ZXh0LWFsaWduOmxlZnQ7dGV4dC1hbGlnbjppbml0aWFsfS5wdWJsaWMtRHJhZnRFZGl0b3ItY29udGVudFtjb250ZW50ZWRpdGFibGU9dHJ1ZV17LXdlYmtpdC11c2VyLW1vZGlmeTpyZWFkLXdyaXRlLXBsYWludGV4dC1vbmx5fS5EcmFmdEVkaXRvci1yb290e3Bvc2l0aW9uOnJlbGF0aXZlfS5EcmFmdEVkaXRvci1lZGl0b3JDb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDApO2JvcmRlci1sZWZ0Oi4xcHggc29saWQgdHJhbnNwYXJlbnQ7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxfS5wdWJsaWMtRHJhZnRFZGl0b3ItYmxvY2t7cG9zaXRpb246cmVsYXRpdmV9LkRyYWZ0RWRpdG9yLWFsaWduTGVmdCAucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWJsb2Nre3RleHQtYWxpZ246bGVmdH0uRHJhZnRFZGl0b3ItYWxpZ25MZWZ0IC5wdWJsaWMtRHJhZnRFZGl0b3JQbGFjZWhvbGRlci1yb290e2xlZnQ6MDt0ZXh0LWFsaWduOmxlZnR9LkRyYWZ0RWRpdG9yLWFsaWduQ2VudGVyIC5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtYmxvY2t7dGV4dC1hbGlnbjpjZW50ZXJ9LkRyYWZ0RWRpdG9yLWFsaWduQ2VudGVyIC5wdWJsaWMtRHJhZnRFZGl0b3JQbGFjZWhvbGRlci1yb290e21hcmdpbjowIGF1dG87dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTAwJX0uRHJhZnRFZGl0b3ItYWxpZ25SaWdodCAucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWJsb2Nre3RleHQtYWxpZ246cmlnaHR9LkRyYWZ0RWRpdG9yLWFsaWduUmlnaHQgLnB1YmxpYy1EcmFmdEVkaXRvclBsYWNlaG9sZGVyLXJvb3R7cmlnaHQ6MDt0ZXh0LWFsaWduOnJpZ2h0fS5wdWJsaWMtRHJhZnRFZGl0b3JQbGFjZWhvbGRlci1yb290e2NvbG9yOiM5MTk3YTM7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTt6LWluZGV4OjF9LnB1YmxpYy1EcmFmdEVkaXRvclBsYWNlaG9sZGVyLWhhc0ZvY3Vze2NvbG9yOiNiZGMxYzl9LkRyYWZ0RWRpdG9yUGxhY2Vob2xkZXItaGlkZGVue2Rpc3BsYXk6bm9uZX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWJsb2Nre3Bvc2l0aW9uOnJlbGF0aXZlO3doaXRlLXNwYWNlOnByZS13cmFwfS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtbHRye2RpcmVjdGlvbjpsdHI7dGV4dC1hbGlnbjpsZWZ0fS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtcnRse2RpcmVjdGlvbjpydGw7dGV4dC1hbGlnbjpyaWdodH0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWxpc3RMVFJ7ZGlyZWN0aW9uOmx0cn0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWxpc3RSVEx7ZGlyZWN0aW9uOnJ0bH0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9sLC5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtdWx7bWFyZ2luOjE2cHggMDtwYWRkaW5nOjB9LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1kZXB0aDAucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWxpc3RMVFJ7bWFyZ2luLWxlZnQ6MS41ZW19LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1kZXB0aDAucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWxpc3RSVEx7bWFyZ2luLXJpZ2h0OjEuNWVtfS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgxLnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1saXN0TFRSe21hcmdpbi1sZWZ0OjNlbX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoMS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtbGlzdFJUTHttYXJnaW4tcmlnaHQ6M2VtfS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgyLnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1saXN0TFRSe21hcmdpbi1sZWZ0OjQuNWVtfS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgyLnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1saXN0UlRMe21hcmdpbi1yaWdodDo0LjVlbX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoMy5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtbGlzdExUUnttYXJnaW4tbGVmdDo2ZW19LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1kZXB0aDMucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWxpc3RSVEx7bWFyZ2luLXJpZ2h0OjZlbX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoNC5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtbGlzdExUUnttYXJnaW4tbGVmdDo3LjVlbX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoNC5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtbGlzdFJUTHttYXJnaW4tcmlnaHQ6Ny41ZW19LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC11bm9yZGVyZWRMaXN0SXRlbXtsaXN0LXN0eWxlLXR5cGU6c3F1YXJlO3Bvc2l0aW9uOnJlbGF0aXZlfS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtdW5vcmRlcmVkTGlzdEl0ZW0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoMHtsaXN0LXN0eWxlLXR5cGU6ZGlzY30ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LXVub3JkZXJlZExpc3RJdGVtLnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1kZXB0aDF7bGlzdC1zdHlsZS10eXBlOmNpcmNsZX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9yZGVyZWRMaXN0SXRlbXtsaXN0LXN0eWxlLXR5cGU6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9yZGVyZWRMaXN0SXRlbS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtbGlzdExUUjpiZWZvcmV7bGVmdDotMzZweDtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOnJpZ2h0O3dpZHRoOjMwcHh9LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1vcmRlcmVkTGlzdEl0ZW0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWxpc3RSVEw6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi0zNnB4O3RleHQtYWxpZ246bGVmdDt3aWR0aDozMHB4fS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtb3JkZXJlZExpc3RJdGVtOmJlZm9yZXtjb250ZW50OmNvdW50ZXIob2wwKSBcXFwiLiBcXFwiO2NvdW50ZXItaW5jcmVtZW50Om9sMH0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9yZGVyZWRMaXN0SXRlbS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgxOmJlZm9yZXtjb250ZW50OmNvdW50ZXIob2wxLGxvd2VyLWFscGhhKSBcXFwiLiBcXFwiO2NvdW50ZXItaW5jcmVtZW50Om9sMX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9yZGVyZWRMaXN0SXRlbS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgyOmJlZm9yZXtjb250ZW50OmNvdW50ZXIob2wyLGxvd2VyLXJvbWFuKSBcXFwiLiBcXFwiO2NvdW50ZXItaW5jcmVtZW50Om9sMn0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9yZGVyZWRMaXN0SXRlbS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgzOmJlZm9yZXtjb250ZW50OmNvdW50ZXIob2wzKSBcXFwiLiBcXFwiO2NvdW50ZXItaW5jcmVtZW50Om9sM30ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9yZGVyZWRMaXN0SXRlbS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGg0OmJlZm9yZXtjb250ZW50OmNvdW50ZXIob2w0LGxvd2VyLWFscGhhKSBcXFwiLiBcXFwiO2NvdW50ZXItaW5jcmVtZW50Om9sNH0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoMC5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtcmVzZXR7Y291bnRlci1yZXNldDpvbDB9LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1kZXB0aDEucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LXJlc2V0e2NvdW50ZXItcmVzZXQ6b2wxfS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgyLnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1yZXNldHtjb3VudGVyLXJlc2V0Om9sMn0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoMy5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtcmVzZXR7Y291bnRlci1yZXNldDpvbDN9LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1kZXB0aDQucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LXJlc2V0e2NvdW50ZXItcmVzZXQ6b2w0fVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L2dpdCBSZXBvc2l0b3J5L1BlcnNvbmFsUHJvamVjdF8wMDEvZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2RyYWZ0LWpzL2Rpc3QvRHJhZnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0VBT0U7QUFDRiwyRUFBMkUsY0FBYyxDQUFDLGVBQWlCLENBQWpCLGtCQUFrQixDQUFDLGtEQUFrRCw2Q0FBNkMsQ0FBQyxrQkFBa0IsaUJBQWlCLENBQUMsNkJBQTZCLG9DQUFvQyxDQUFDLGtDQUFrQyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQywwQkFBMEIsaUJBQWlCLENBQUMsdURBQXVELGVBQWUsQ0FBQywyREFBMkQsTUFBTSxDQUFDLGVBQWUsQ0FBQyx5REFBeUQsaUJBQWlCLENBQUMsNkRBQTZELGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsd0RBQXdELGdCQUFnQixDQUFDLDREQUE0RCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsb0NBQW9DLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLHdDQUF3QyxhQUFhLENBQUMsK0JBQStCLFlBQVksQ0FBQyxnQ0FBZ0MsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsOEJBQThCLGFBQWEsQ0FBQyxlQUFlLENBQUMsOEJBQThCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQ0FBa0MsYUFBYSxDQUFDLGtDQUFrQyxhQUFhLENBQUMsMERBQTBELGFBQWEsQ0FBQyxTQUFTLENBQUMsa0VBQWtFLGlCQUFpQixDQUFDLGtFQUFrRSxrQkFBa0IsQ0FBQyxrRUFBa0UsZUFBZSxDQUFDLGtFQUFrRSxnQkFBZ0IsQ0FBQyxrRUFBa0UsaUJBQWlCLENBQUMsa0VBQWtFLGtCQUFrQixDQUFDLGtFQUFrRSxlQUFlLENBQUMsa0VBQWtFLGdCQUFnQixDQUFDLGtFQUFrRSxpQkFBaUIsQ0FBQyxrRUFBa0Usa0JBQWtCLENBQUMsNENBQTRDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLDRFQUE0RSxvQkFBb0IsQ0FBQyw0RUFBNEUsc0JBQXNCLENBQUMsMENBQTBDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGtGQUFrRixVQUFVLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGtGQUFrRixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxpREFBaUQseUJBQXlCLENBQUMscUJBQXFCLENBQUMsaUZBQWlGLHFDQUFxQyxDQUFDLHFCQUFxQixDQUFDLGlGQUFpRixxQ0FBcUMsQ0FBQyxxQkFBcUIsQ0FBQyxpRkFBaUYseUJBQXlCLENBQUMscUJBQXFCLENBQUMsaUZBQWlGLHFDQUFxQyxDQUFDLHFCQUFxQixDQUFDLGdFQUFnRSxpQkFBaUIsQ0FBQyxnRUFBZ0UsaUJBQWlCLENBQUMsZ0VBQWdFLGlCQUFpQixDQUFDLGdFQUFnRSxpQkFBaUIsQ0FBQyxnRUFBZ0UsaUJBQWlCXCIsXCJmaWxlXCI6XCJEcmFmdC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogRHJhZnQgdjAuMTEuN1xcbiAqXFxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLkRyYWZ0RWRpdG9yLWVkaXRvckNvbnRhaW5lciwuRHJhZnRFZGl0b3Itcm9vdCwucHVibGljLURyYWZ0RWRpdG9yLWNvbnRlbnR7aGVpZ2h0OmluaGVyaXQ7dGV4dC1hbGlnbjppbml0aWFsfS5wdWJsaWMtRHJhZnRFZGl0b3ItY29udGVudFtjb250ZW50ZWRpdGFibGU9dHJ1ZV17LXdlYmtpdC11c2VyLW1vZGlmeTpyZWFkLXdyaXRlLXBsYWludGV4dC1vbmx5fS5EcmFmdEVkaXRvci1yb290e3Bvc2l0aW9uOnJlbGF0aXZlfS5EcmFmdEVkaXRvci1lZGl0b3JDb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDApO2JvcmRlci1sZWZ0Oi4xcHggc29saWQgdHJhbnNwYXJlbnQ7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxfS5wdWJsaWMtRHJhZnRFZGl0b3ItYmxvY2t7cG9zaXRpb246cmVsYXRpdmV9LkRyYWZ0RWRpdG9yLWFsaWduTGVmdCAucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWJsb2Nre3RleHQtYWxpZ246bGVmdH0uRHJhZnRFZGl0b3ItYWxpZ25MZWZ0IC5wdWJsaWMtRHJhZnRFZGl0b3JQbGFjZWhvbGRlci1yb290e2xlZnQ6MDt0ZXh0LWFsaWduOmxlZnR9LkRyYWZ0RWRpdG9yLWFsaWduQ2VudGVyIC5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtYmxvY2t7dGV4dC1hbGlnbjpjZW50ZXJ9LkRyYWZ0RWRpdG9yLWFsaWduQ2VudGVyIC5wdWJsaWMtRHJhZnRFZGl0b3JQbGFjZWhvbGRlci1yb290e21hcmdpbjowIGF1dG87dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTAwJX0uRHJhZnRFZGl0b3ItYWxpZ25SaWdodCAucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWJsb2Nre3RleHQtYWxpZ246cmlnaHR9LkRyYWZ0RWRpdG9yLWFsaWduUmlnaHQgLnB1YmxpYy1EcmFmdEVkaXRvclBsYWNlaG9sZGVyLXJvb3R7cmlnaHQ6MDt0ZXh0LWFsaWduOnJpZ2h0fS5wdWJsaWMtRHJhZnRFZGl0b3JQbGFjZWhvbGRlci1yb290e2NvbG9yOiM5MTk3YTM7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTt6LWluZGV4OjF9LnB1YmxpYy1EcmFmdEVkaXRvclBsYWNlaG9sZGVyLWhhc0ZvY3Vze2NvbG9yOiNiZGMxYzl9LkRyYWZ0RWRpdG9yUGxhY2Vob2xkZXItaGlkZGVue2Rpc3BsYXk6bm9uZX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWJsb2Nre3Bvc2l0aW9uOnJlbGF0aXZlO3doaXRlLXNwYWNlOnByZS13cmFwfS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtbHRye2RpcmVjdGlvbjpsdHI7dGV4dC1hbGlnbjpsZWZ0fS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtcnRse2RpcmVjdGlvbjpydGw7dGV4dC1hbGlnbjpyaWdodH0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWxpc3RMVFJ7ZGlyZWN0aW9uOmx0cn0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWxpc3RSVEx7ZGlyZWN0aW9uOnJ0bH0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9sLC5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtdWx7bWFyZ2luOjE2cHggMDtwYWRkaW5nOjB9LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1kZXB0aDAucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWxpc3RMVFJ7bWFyZ2luLWxlZnQ6MS41ZW19LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1kZXB0aDAucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWxpc3RSVEx7bWFyZ2luLXJpZ2h0OjEuNWVtfS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgxLnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1saXN0TFRSe21hcmdpbi1sZWZ0OjNlbX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoMS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtbGlzdFJUTHttYXJnaW4tcmlnaHQ6M2VtfS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgyLnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1saXN0TFRSe21hcmdpbi1sZWZ0OjQuNWVtfS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgyLnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1saXN0UlRMe21hcmdpbi1yaWdodDo0LjVlbX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoMy5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtbGlzdExUUnttYXJnaW4tbGVmdDo2ZW19LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1kZXB0aDMucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWxpc3RSVEx7bWFyZ2luLXJpZ2h0OjZlbX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoNC5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtbGlzdExUUnttYXJnaW4tbGVmdDo3LjVlbX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoNC5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtbGlzdFJUTHttYXJnaW4tcmlnaHQ6Ny41ZW19LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC11bm9yZGVyZWRMaXN0SXRlbXtsaXN0LXN0eWxlLXR5cGU6c3F1YXJlO3Bvc2l0aW9uOnJlbGF0aXZlfS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtdW5vcmRlcmVkTGlzdEl0ZW0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoMHtsaXN0LXN0eWxlLXR5cGU6ZGlzY30ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LXVub3JkZXJlZExpc3RJdGVtLnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1kZXB0aDF7bGlzdC1zdHlsZS10eXBlOmNpcmNsZX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9yZGVyZWRMaXN0SXRlbXtsaXN0LXN0eWxlLXR5cGU6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9yZGVyZWRMaXN0SXRlbS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtbGlzdExUUjpiZWZvcmV7bGVmdDotMzZweDtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOnJpZ2h0O3dpZHRoOjMwcHh9LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1vcmRlcmVkTGlzdEl0ZW0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWxpc3RSVEw6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi0zNnB4O3RleHQtYWxpZ246bGVmdDt3aWR0aDozMHB4fS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtb3JkZXJlZExpc3RJdGVtOmJlZm9yZXtjb250ZW50OmNvdW50ZXIob2wwKSBcXFwiLiBcXFwiO2NvdW50ZXItaW5jcmVtZW50Om9sMH0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9yZGVyZWRMaXN0SXRlbS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgxOmJlZm9yZXtjb250ZW50OmNvdW50ZXIob2wxLGxvd2VyLWFscGhhKSBcXFwiLiBcXFwiO2NvdW50ZXItaW5jcmVtZW50Om9sMX0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9yZGVyZWRMaXN0SXRlbS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgyOmJlZm9yZXtjb250ZW50OmNvdW50ZXIob2wyLGxvd2VyLXJvbWFuKSBcXFwiLiBcXFwiO2NvdW50ZXItaW5jcmVtZW50Om9sMn0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9yZGVyZWRMaXN0SXRlbS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgzOmJlZm9yZXtjb250ZW50OmNvdW50ZXIob2wzKSBcXFwiLiBcXFwiO2NvdW50ZXItaW5jcmVtZW50Om9sM30ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LW9yZGVyZWRMaXN0SXRlbS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGg0OmJlZm9yZXtjb250ZW50OmNvdW50ZXIob2w0LGxvd2VyLWFscGhhKSBcXFwiLiBcXFwiO2NvdW50ZXItaW5jcmVtZW50Om9sNH0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoMC5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtcmVzZXR7Y291bnRlci1yZXNldDpvbDB9LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1kZXB0aDEucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LXJlc2V0e2NvdW50ZXItcmVzZXQ6b2wxfS5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtZGVwdGgyLnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1yZXNldHtjb3VudGVyLXJlc2V0Om9sMn0ucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LWRlcHRoMy5wdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtcmVzZXR7Y291bnRlci1yZXNldDpvbDN9LnB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1kZXB0aDQucHVibGljLURyYWZ0U3R5bGVEZWZhdWx0LXJlc2V0e2NvdW50ZXItcmVzZXQ6b2w0fVwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL0RyYWZ0LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxyXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXHJcbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XHJcbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XHJcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cclxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KS8vIFJlbWVtYmVyOiB0aGlzIGlzIGRldmVsb3BtZW50IG9ubHkgY29kZS5cclxuLy9cclxuLy8gQWZ0ZXIgc3R5bGVzIGFyZSBpbmplY3RlZCwgd2UgbmVlZCB0byByZW1vdmUgdGhlXHJcbi8vIDxzdHlsZT4gdGFncyB0aGF0IHNldCBgYm9keSB7IGRpc3BsYXk6IG5vbmU7IH1gLlxyXG4vL1xyXG4vLyBXZSB1c2UgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgYXMgYSB3YXkgdG8gZGVmZXJcclxuLy8gdGhpcyBvcGVyYXRpb24gc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlIHN0eWxlXHJcbi8vIHRhZ3MuXHJcbjsoc2VsZi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQpKGZ1bmN0aW9uKCl7Zm9yKHZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLGk9eC5sZW5ndGg7aS0tOyl7eFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO319KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XHJcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdmFyIHA7XHJcblxyXG4gIGZvciAocCBpbiBhKSB7XHJcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKHAgaW4gYikge1xyXG4gICAgaWYgKCFhW3BdKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vRHJhZnQuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL0RyYWZ0LmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgQXBwTGF5T3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5T3V0JztcclxuaW1wb3J0IEhlYWQgICAgICBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7IFxyXG5cclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnOyBcclxuaW1wb3J0ICAnLi4vQ1NTL2FudGRNb2JpbGUuY3NzJztcclxuaW1wb3J0ICdkcmFmdC1qcy9kaXN0L0RyYWZ0LmNzcyc7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgd2l0aFJlZHV4ICwge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCByZWR1Y2VyICBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJzsgXHJcbmltcG9ydCB7IExPQURfVVNFUl9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvYXV0aCc7XHJcblxyXG5cclxuXHJcblxyXG4vL+2UhOuhnOygne2KuCDqs6DsoJUg7YuAXHJcbmNvbnN0IFByb2plY3QwMV9Ub2RvTGlzdCA9ICh7Q29tcG9uZW50LHBhZ2VQcm9wc30pID0+e1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlRvZG9MaXN0PC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvMy4xNi4yL2FudGQubWluLmNzc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQtbW9iaWxlLzIuMy4zL2FudGQtbW9iaWxlLmNzc1wiIGludGVncml0eT1cInNoYTI1Ni11WmJOc3FnbHNIeWFwaVk2TmxqOG85a0FtbGlZL3JXTkNUcXRoaklISVh3PVwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxBcHBMYXlPdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9BcHBMYXlPdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApOyBcclxuXHJcblxyXG59XHJcblxyXG5cclxuUHJvamVjdDAxX1RvZG9MaXN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v4payIG5leHTsl5DshJwg7KCc6rO17ZW07KSMXHJcbiAgY29uc3QgeyBjdHgsQ29tcG9uZW50IH0gPSBjb250ZXh0OyBcclxuICBsZXQgcGFnZVByb3BzID17fTsgXHJcbiAgY29uc3Qgc3RhdGUgPSBjdHguc3RvcmUuZ2V0U3RhdGUoKTsgICAgLy/tlITroZzsoJ3tirgg7KCE7LK0IHN0YXTrpbwg6rCA7KC4IOyYrCDsiJgg7J6I64ukLiBcclxuICBjb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICEhY29udGV4dC5yZXEgfHwgISFjb250ZXh0LmN0eC5yZXE7XHJcbiAgY29uc3QgY29va2llID0gaXNTZXJ2ZXIgPyBjdHgucmVxLmhlYWRlcnMuY29va2llIDogJyc7IFxyXG5cclxuICBpZihpc1NlcnZlciAmJiBjb29raWUpe1xyXG4gICAgICAvL+2BtOudvOydtOyWuCDtmZjqsr3sl5DshJzripQg67iM65287Jqw7KCA6rCAIOy/oO2CpOulvCDrhKPslrTso7zqs6AsIFxyXG4gICAgICAvL1NTUuydvCDrlYzripQg7Jqw66as6rCAIOyngeygkSDrhKPslrTspJjslbwg7ZWc64ukLiBcclxuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7IFxyXG4gIH1cclxuICBcclxuXHJcbiAgLy8o7IOI66Gc6rOg7LmoKeuhnOq3uOyduCDsoJXrs7Qg7Jyg7KeAXHJcbiAgaWYoIXN0YXRlLmF1dGgudXNlckluZm8pe1xyXG4gIFxyXG4gICAgICBjdHguc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBpZihDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKXtcclxuICBwYWdlUHJvcHMgPSAgYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpOyBcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHtwYWdlUHJvcHN9OyBcclxuXHJcblxyXG59XHJcblxyXG5cclxuUHJvamVjdDAxX1RvZG9MaXN0LnByb3BUeXBlcyA9IHsgXHJcbiAgQ29tcG9uZW50OlByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLCBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTsgXHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdOyAvLyDrr7jrk6Tsm6jslrTrk6TsnYQg64Sj7Jy866m0IOuQnOuLpC5cclxuICBcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG5cclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgICAgICAgICAgICAgIC8vcmVhY3Tsl5DshJwgcmVkdXjrpbwg7IKs7Jqp7ZWY6riwIOychO2VtOyEnOuKlCBjcmVhdGVTdG9yZeuhnCBzdG9yZeulvCDsg53shLHtlbQg7KO87Ja07JW8IO2VnOuLpC4gXHJcbiAgICAgICAgICAgICAgICAvL3JlZHV4LW5leHQtd2FwcGVyIDYg67KE7KCEIOu2gO2EsOuKlCBQcm92aWRlciBzdG9yZT17c3RvcmV966W8IOuCtOu2gOyggeycvOuhnCDtlbQg7KSA64ukLiBcclxuXHJcbiAgIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7IFxyXG4gICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgIHJldHVybiBzdG9yZTtcclxuXHJcbn1cclxuICBcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtkZWJ1ZzogIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnfSk7IFxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChQcm9qZWN0MDFfVG9kb0xpc3QpOyAiXSwic291cmNlUm9vdCI6IiJ9