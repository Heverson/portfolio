webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./pages/styles.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Library/WebServer/Documents/portifolio/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Home = function Home(_ref) {\n  var repositories = _ref.repositories;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, \"Heverson Damasceno - Fullstack\"), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Meu portif\\xF3lio de trabalhos na web, conhe\\xE7a os projetos que participei e acesse meus contatos.\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"Heverson Damasceno\")), __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"github my repos \"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, repositories && repositories.map(function (repo) {\n    return __jsx(\"div\", {\n      key: repo.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }\n    }, __jsx(\"h3\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 15\n      }\n    }, repo.name), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 15\n      }\n    }, repo.description));\n  }))));\n};\n\n_c = Home;\nHome.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var data;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          // const response  = await axios.get(\n          //   'https://api.github.com/users/heverson/repos'\n          // );\n          data = [{\n            id: 1,\n            name: 'Go barber',\n            description: 'lorem ipsum',\n            owner: {\n              url: 'https://google.com'\n            }\n          }, {\n            id: 2,\n            name: 'Go barber',\n            description: 'lorem ipsum',\n            owner: {\n              url: 'https://google.com'\n            }\n          }, {\n            id: 3,\n            name: 'Go barber',\n            description: 'lorem ipsum',\n            owner: {\n              url: 'https://google.com'\n            }\n          }, {\n            id: 4,\n            name: 'Go barber',\n            description: 'lorem ipsum',\n            owner: {\n              url: 'http://google.com'\n            }\n          }, {\n            id: 5,\n            name: 'Go barber',\n            description: 'lorem ipsum',\n            owner: {\n              url: 'https://google.com'\n            }\n          }];\n          return _context.abrupt(\"return\", {\n            repositories: data\n          });\n\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwicmVwb3NpdG9yaWVzIiwibWFwIiwicmVwbyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZ2V0SW5pdGlhbFByb3BzIiwiZGF0YSIsIm93bmVyIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBOztBQVNBLElBQU1BLElBQXNCLEdBQUcsU0FBekJBLElBQXlCLE9BQW9CO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjtBQUNqRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUMsc0dBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQUxGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLFlBQVksSUFBSUEsWUFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQUFDLElBQUk7QUFBQSxXQUNwQztBQUFLLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELElBQUksQ0FBQ0UsSUFBVixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRixJQUFJLENBQUNHLFdBRFIsQ0FGRixDQURvQztBQUFBLEdBQXJCLENBRG5CLENBRkYsQ0FSRixDQURGO0FBeUJELENBMUJEOztLQUFNTixJO0FBNEJOQSxJQUFJLENBQUNPLGVBQUwsaU1BQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QjtBQUNFO0FBQ0E7QUFDTUMsY0FKZSxHQUlSLENBQ1g7QUFDRUosY0FBRSxFQUFFLENBRE47QUFFRUMsZ0JBQUksRUFBRSxXQUZSO0FBR0VDLHVCQUFXLEVBQUUsYUFIZjtBQUlFRyxpQkFBSyxFQUFFO0FBQ0xDLGlCQUFHLEVBQUU7QUFEQTtBQUpULFdBRFcsRUFTWDtBQUNFTixjQUFFLEVBQUUsQ0FETjtBQUVFQyxnQkFBSSxFQUFFLFdBRlI7QUFHRUMsdUJBQVcsRUFBRSxhQUhmO0FBSUVHLGlCQUFLLEVBQUU7QUFDTEMsaUJBQUcsRUFBRTtBQURBO0FBSlQsV0FUVyxFQWlCWDtBQUNFTixjQUFFLEVBQUUsQ0FETjtBQUVFQyxnQkFBSSxFQUFFLFdBRlI7QUFHRUMsdUJBQVcsRUFBRSxhQUhmO0FBSUVHLGlCQUFLLEVBQUU7QUFDTEMsaUJBQUcsRUFBRTtBQURBO0FBSlQsV0FqQlcsRUF5Qlg7QUFDRU4sY0FBRSxFQUFFLENBRE47QUFFRUMsZ0JBQUksRUFBRSxXQUZSO0FBR0VDLHVCQUFXLEVBQUUsYUFIZjtBQUlFRyxpQkFBSyxFQUFFO0FBQ0xDLGlCQUFHLEVBQUU7QUFEQTtBQUpULFdBekJXLEVBaUNYO0FBQ0VOLGNBQUUsRUFBRSxDQUROO0FBRUVDLGdCQUFJLEVBQUUsV0FGUjtBQUdFQyx1QkFBVyxFQUFFLGFBSGY7QUFJRUcsaUJBQUssRUFBRTtBQUNMQyxpQkFBRyxFQUFFO0FBREE7QUFKVCxXQWpDVyxDQUpRO0FBQUEsMkNBOENkO0FBQUNULHdCQUFZLEVBQUVPO0FBQWYsV0E5Q2M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUFnRGVSLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkZXIgfSBmcm9tICcuL3N0eWxlcyc7XG50eXBlIFByb3BzID0ge1xuICByZXBvc2l0b3JpZXM6IHtcbiAgICBpZDpudW1iZXI7XG4gICAgbmFtZTpzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246c3RyaW5nO1xuICB9XG59XG5cbmNvbnN0IEhvbWUgOiBSZWFjdC5GQzxQcm9wcz4gPSAoe3JlcG9zaXRvcmllc30pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5IZXZlcnNvbiBEYW1hc2Nlbm8gLSBGdWxsc3RhY2s8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTWV1IHBvcnRpZsOzbGlvIGRlIHRyYWJhbGhvcyBuYSB3ZWIsIGNvbmhlw6dhIG9zIHByb2pldG9zIHF1ZSBwYXJ0aWNpcGVpIGUgYWNlc3NlIG1ldXMgY29udGF0b3MuXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxoMT5IZXZlcnNvbiBEYW1hc2Nlbm88L2gxPlxuICAgICAgPC9IZWFkZXI+ICBcbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDI+Z2l0aHViIG15IHJlcG9zIDwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3JlcG9zaXRvcmllcyAmJiByZXBvc2l0b3JpZXMubWFwKHJlcG8gPT4oXG4gICAgICAgICAgICA8ZGl2IGtleT17cmVwby5pZH0+XG4gICAgICAgICAgICAgIDxoMz57cmVwby5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHtyZXBvLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPiAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYygpID0+e1xuLy8gY29uc3QgcmVzcG9uc2UgID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAvLyAgICdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2hldmVyc29uL3JlcG9zJ1xuICAvLyApO1xuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ0dvIGJhcmJlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ2xvcmVtIGlwc3VtJyxcbiAgICAgIG93bmVyOiB7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vZ29vZ2xlLmNvbSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogJ0dvIGJhcmJlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ2xvcmVtIGlwc3VtJyxcbiAgICAgIG93bmVyOiB7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vZ29vZ2xlLmNvbSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgbmFtZTogJ0dvIGJhcmJlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ2xvcmVtIGlwc3VtJyxcbiAgICAgIG93bmVyOiB7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vZ29vZ2xlLmNvbSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA0LFxuICAgICAgbmFtZTogJ0dvIGJhcmJlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ2xvcmVtIGlwc3VtJyxcbiAgICAgIG93bmVyOiB7XG4gICAgICAgIHVybDogJ2h0dHA6Ly9nb29nbGUuY29tJ1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICBuYW1lOiAnR28gYmFyYmVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnbG9yZW0gaXBzdW0nLFxuICAgICAgb3duZXI6IHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9nb29nbGUuY29tJ1xuICAgICAgfVxuICAgIH0sXG4gIF1cbiAgcmV0dXJuIHtyZXBvc2l0b3JpZXM6IGRhdGF9ICBcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})