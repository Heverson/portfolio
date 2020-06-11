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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: getStaticProps, Container, Header, Cards, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cards\", function() { return Cards; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Library/WebServer/Documents/portifolio/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst getStaticProps = async ({\n  params\n}) => {\n  const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.github.com/users/heverson/repos?sort=updated');\n  return {\n    props: {\n      repositories: response.data\n    }\n  };\n};\n\nconst Home = ({\n  repositories\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Heverson Damasceno - Fullstack Developer\"), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Meu portif\\xF3lio de trabalhos na web, conhe\\xE7a os projetos que participei e acesse meus contatos.\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  })), __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(Header, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"Heverson Damasceno\")), __jsx(\"section\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"my bio\"), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, \"Hi \\uD83D\\uDC4B  , welcome to my portfolio, you're know my works!\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, \"I'm brazilian \\uD83C\\uDDE7\\uD83C\\uDDF7 and like web and mobile projects, with stacks \", __jsx(\"strong\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 79\n    }\n  }, __jsx(\"i\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 87\n    }\n  }, \"ReactJS\")), \", \", __jsx(\"strong\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 112\n    }\n  }, __jsx(\"i\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 120\n    }\n  }, \"React Native\")), \" and \", __jsx(\"strong\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 153\n    }\n  }, __jsx(\"i\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 161\n    }\n  }, \"NodeJS\")), \" that is Full JavaScript, It\\u2019s these technologies that I\\u2019ve been working on for the past few years!\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, \"I have a good journey with PHP programming, mainly working with the darling of \", __jsx(\"strong\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 93\n    }\n  }, \"Wordpress\")), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: \"https://www.linkedin.com/in/heversondamasceno/\",\n    target: \"blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    alt: \"Linkedin - Heverson Damasceno\",\n    src: \"https://camo.githubusercontent.com/5a189abd87746872a77aaa7404a3748ad8585d5c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564696e2d2d2532334638393532443f7374796c653d736f6369616c266c6f676f3d6c696e6b6564696e\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 87\n    }\n  }))), \" \\xA0\", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: \"mailto:heversondamasceno@gmail.com\",\n    target: \"blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 16\n    }\n  }, __jsx(\"img\", {\n    alt: \"Email - Heverson Damasceno\",\n    src: \"https://camo.githubusercontent.com/0d6b8470c85771ff00c3d4449aac198c05e2e72a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f456d61696c2d2d2532334638393532443f7374796c653d736f6369616c266c6f676f3d676d61696c\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 76\n    }\n  })))))), __jsx(\"section\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, \"github my repos \"), __jsx(Cards, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, repositories.map(repo => __jsx(\"div\", {\n    key: repo.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, repo.name), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }, repo.description), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }, repo.language && __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 34\n    }\n  }, repo.language)))))), __jsx(\"footer\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, \"Powered by Me and with NextJS\")));\n};\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"pages__Container\",\n  componentId: \"fxyd84-0\"\n})([\"display:flex;justify-content:space-between;flex-direction:column;padding:20px;section{& > h2{color:#1AE8AA;}}footer{display:flex;justify-content:flex-end;flex-direction:row;}\"]);\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({\n  displayName: \"pages__Header\",\n  componentId: \"fxyd84-1\"\n})([\"flex:1;justify-content:space-between;flex-direction:row;img{max-width:200px;}h1{font-weight:'bold';font-size:50px;}\"]);\nconst Cards = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"pages__Cards\",\n  componentId: \"fxyd84-2\"\n})([\"flex-direction:row;align-items:stretch;justify-content:start;flex-wrap:wrap;display:flex;& > div{width:100%;color:#303030;background:#fff;padding:10px;flex:1 1 auto;margin:5px;align-items:inherit;justify-content:space-between;display:flex;flex-direction:column;@media (min-width:768px){width:45%;}@media (min-width:980px){width:32%;}span{background:#1AE8AA;padding:5px;font-size:14px;border-radius:4px;}}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJwcm9wcyIsInJlcG9zaXRvcmllcyIsImRhdGEiLCJIb21lIiwibWFwIiwicmVwbyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJDYXJkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUdBO0FBRUE7QUFVTyxNQUFNQSxjQUE4QixHQUFHLE9BQU07QUFBQ0M7QUFBRCxDQUFOLEtBQW1CO0FBQy9ELFFBQU1DLFFBQVEsR0FBSSxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQ3RCLDBEQURzQixDQUF4QjtBQUlBLFNBQU87QUFDTEMsU0FBSyxFQUFDO0FBQ0pDLGtCQUFZLEVBQUVKLFFBQVEsQ0FBQ0s7QUFEbkI7QUFERCxHQUFQO0FBS0QsQ0FWTTs7QUFZUCxNQUFNQyxJQUFzQixHQUFHLENBQUM7QUFBQ0Y7QUFBRCxDQUFELEtBQW9CO0FBQ2pELFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFERixFQUVFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFDLHNHQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURG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TUFBVjtBQUFBO0FBQUE7QUFBQSwySEFBWjtBQWFBLE1BQU1DLEtBQUssR0FBR0osd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0WkFBWDtBQW9DUVQsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHJlcG9zaXRvcmllczoge1xuICAgIGlkOm51bWJlcjtcbiAgICBuYW1lOnN0cmluZztcbiAgICBkZXNjcmlwdGlvbjpzdHJpbmc7XG4gIH1cbn18IGFueTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jKHtwYXJhbXN9KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlICA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9oZXZlcnNvbi9yZXBvcz9zb3J0PXVwZGF0ZWQnXG4gICk7XG4gXG4gIHJldHVybiB7XG4gICAgcHJvcHM6e1xuICAgICAgcmVwb3NpdG9yaWVzOiByZXNwb25zZS5kYXRhXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IEhvbWUgOiBSZWFjdC5GQzxQcm9wcz4gPSAoe3JlcG9zaXRvcmllc30pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5IZXZlcnNvbiBEYW1hc2Nlbm8gLSBGdWxsc3RhY2sgRGV2ZWxvcGVyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk1ldSBwb3J0aWbDs2xpbyBkZSB0cmFiYWxob3MgbmEgd2ViLCBjb25oZcOnYSBvcyBwcm9qZXRvcyBxdWUgcGFydGljaXBlaSBlIGFjZXNzZSBtZXVzIGNvbnRhdG9zLlwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGgxPkhldmVyc29uIERhbWFzY2VubzwvaDE+XG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDI+bXkgYmlvPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5IaSDwn5GLICAsIHdlbGNvbWUgdG8gbXkgcG9ydGZvbGlvLCB5b3UncmUga25vdyBteSB3b3JrcyE8L3A+XG4gICAgICAgICAgPHA+SSdtIGJyYXppbGlhbiDwn4en8J+HtyBhbmQgbGlrZSB3ZWIgYW5kIG1vYmlsZSBwcm9qZWN0cywgd2l0aCBzdGFja3MgPHN0cm9uZz48aT5SZWFjdEpTPC9pPjwvc3Ryb25nPiwgPHN0cm9uZz48aT5SZWFjdCBOYXRpdmU8L2k+PC9zdHJvbmc+IGFuZCA8c3Ryb25nPjxpPk5vZGVKUzwvaT48L3N0cm9uZz4gdGhhdCBpcyBGdWxsIEphdmFTY3JpcHQsIEl04oCZcyB0aGVzZSB0ZWNobm9sb2dpZXMgdGhhdCBJ4oCZdmUgYmVlbiB3b3JraW5nIG9uIGZvciB0aGUgcGFzdCBmZXcgeWVhcnMhPC9wPlxuICAgICAgICAgIDxwPkkgaGF2ZSBhIGdvb2Qgam91cm5leSB3aXRoIFBIUCBwcm9ncmFtbWluZywgbWFpbmx5IHdvcmtpbmcgd2l0aCB0aGUgZGFybGluZyBvZiA8c3Ryb25nPldvcmRwcmVzczwvc3Ryb25nPjwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2hldmVyc29uZGFtYXNjZW5vL1wiIHRhcmdldD1cImJsYW5rXCI+PGltZyBhbHQ9XCJMaW5rZWRpbiAtIEhldmVyc29uIERhbWFzY2Vub1wiIHNyYz1cImh0dHBzOi8vY2Ftby5naXRodWJ1c2VyY29udGVudC5jb20vNWExODlhYmQ4Nzc0Njg3MmE3N2FhYTc0MDRhMzc0OGFkODU4NWQ1Yy82ODc0NzQ3MDczM2EyZjJmNjk2ZDY3MmU3MzY4Njk2NTZjNjQ3MzJlNjk2ZjJmNjI2MTY0Njc2NTJmNGM2OTZlNmI2NTY0Njk2ZTJkMmQyNTMyMzM0NjM4MzkzNTMyNDQzZjczNzQ3OTZjNjUzZDczNmY2MzY5NjE2YzI2NmM2ZjY3NmYzZDZjNjk2ZTZiNjU2NDY5NmVcIi8+PC9hPlxuICAgICAgICAgICAgPC9zcGFuPiAmbmJzcDtcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpoZXZlcnNvbmRhbWFzY2Vub0BnbWFpbC5jb21cIiB0YXJnZXQ9XCJibGFua1wiPjxpbWcgYWx0PVwiRW1haWwgLSBIZXZlcnNvbiBEYW1hc2Nlbm9cIiBzcmM9XCJodHRwczovL2NhbW8uZ2l0aHVidXNlcmNvbnRlbnQuY29tLzBkNmI4NDcwYzg1NzcxZmYwMGMzZDQ0NDlhYWMxOThjMDVlMmU3MmEvNjg3NDc0NzA3MzNhMmYyZjY5NmQ2NzJlNzM2ODY5NjU2YzY0NzMyZTY5NmYyZjYyNjE2NDY3NjUyZjQ1NmQ2MTY5NmMyZDJkMjUzMjMzNDYzODM5MzUzMjQ0M2Y3Mzc0Nzk2YzY1M2Q3MzZmNjM2OTYxNmMyNjZjNmY2NzZmM2Q2NzZkNjE2OTZjXCIvPjwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPiAgXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyPmdpdGh1YiBteSByZXBvcyA8L2gyPlxuICAgICAgICA8Q2FyZHM+XG4gICAgICAgICAge3JlcG9zaXRvcmllcy5tYXAocmVwbyA9PihcbiAgICAgICAgICAgIDxkaXYga2V5PXtyZXBvLmlkfT5cbiAgICAgICAgICAgICAgPGgzPntyZXBvLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtyZXBvLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7cmVwby5sYW5ndWFnZSAmJiAoPHNwYW4+e3JlcG8ubGFuZ3VhZ2V9PC9zcGFuPil9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NhcmRzPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgUG93ZXJlZCBieSBNZSBhbmQgd2l0aCBOZXh0SlNcbiAgICAgIDwvZm9vdGVyPiAgXG4gICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gIClcbn1cblxuXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDIwcHg7XG5zZWN0aW9ue1xuICAmID4gaDJ7XG4gICAgY29sb3I6ICMxQUU4QUE7XG4gIH1cbn0gIFxuZm9vdGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuYDtcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBmbGV4OjE7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaW1ne1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cbiAgaDF7XG4gICAgZm9udC13ZWlnaHQ6ICdib2xkJztcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkcyA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gICYgPiBkaXZ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBjb2xvcjogIzMwMzAzMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBmbGV4OjEgMSBhdXRvO1xuICAgIG1hcmdpbjo1cHg7IFxuICAgIGFsaWduLWl0ZW1zOiBpbmhlcml0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICB3aWR0aDo0NSU7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkge1xuICAgICAgd2lkdGg6MzIlO1xuICAgIH1cbiAgICBcbiAgIFxuICAgIFxuICAgIHNwYW57XG4gICAgICBiYWNrZ3JvdW5kOiAjMUFFOEFBO1xuICAgICAgcGFkZGluZzo1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICB9XG4gIFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Library/WebServer/Documents/portifolio/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });