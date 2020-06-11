webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/styles.tsx":
/*!**************************!*\
  !*** ./pages/styles.tsx ***!
  \**************************/
/*! exports provided: Container, Header, Cards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cards\", function() { return Cards; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-1j4w6av-0\"\n})([\"section{& > h2{color:#1AE8AA;}}\"]);\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header.withConfig({\n  displayName: \"styles__Header\",\n  componentId: \"sc-1j4w6av-1\"\n})([\"flex:1;justify-content:space-between;flex-direction:row;img{max-width:200px;}h1{font-weight:'bold';font-size:50px;}\"]);\nvar Cards = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Cards\",\n  componentId: \"sc-1j4w6av-2\"\n})([\"flex-direction:row;align-items:stretch;justify-content:start;flex-wrap:wrap;display:flex;& > div{color:#303030;background:#fff;max-width:310px;width:100%;padding:10px;margin:10px;align-items:inherit;justify-content:space-between;display:flex;flex-direction:column;span{background:#1AE8AA;padding:2px;font-size:14px;border-radius:4px;display:flex;flex:1;}}\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZXMudHN4Pzg4MmIiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSGVhZGVyIiwiaGVhZGVyIiwiQ2FyZHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1Q0FBZjtBQU9BLElBQU1DLE1BQU0sR0FBR0YseURBQU0sQ0FBQ0csTUFBVjtBQUFBO0FBQUE7QUFBQSwySEFBWjtBQWFBLElBQU1DLEtBQUssR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyV0FBWCIsImZpbGUiOiIuL3BhZ2VzL3N0eWxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5zZWN0aW9ue1xuICAmID4gaDJ7XG4gICAgY29sb3I6ICMxQUU4QUE7XG4gIH1cbn0gIFxuYDtcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBmbGV4OjE7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaW1ne1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cbiAgaDF7XG4gICAgZm9udC13ZWlnaHQ6ICdib2xkJztcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkcyA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gICYgPiBkaXZ7XG4gICAgY29sb3I6ICMzMDMwMzA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXgtd2lkdGg6MzEwcHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGluaGVyaXQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIHNwYW57XG4gICAgICBiYWNrZ3JvdW5kOiAjMUFFOEFBO1xuICAgICAgcGFkZGluZzoycHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDoxO1xuICAgIH1cbiAgfVxuICBcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/styles.tsx\n");

/***/ })

})