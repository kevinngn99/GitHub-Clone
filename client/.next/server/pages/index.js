module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/InputField.jsx":
/*!***********************************!*\
  !*** ./components/InputField.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/kevin/Documents/GitHubClone/client/components/InputField.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction InputField(props) {\n  const {\n    0: input,\n    1: setInput\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const onInput = event => {\n    setInput(event.target.value);\n  };\n\n  const validate = (input, error) => {\n    if (input === \"\") {\n      return \"border-gray-300 focus:ring-blue-500 focus:border-blue-500\";\n    } else if (error) {\n      return \"text-red-900 border-red-300 focus:ring-red-500 focus:border-red-500\";\n    } else {\n      return \"text-green-900 border-green-300 focus:ring-green-500 focus:border-green-500\";\n    }\n  };\n\n  const Icon = () => {\n    if (input !== \"\") {\n      if (error) {\n        return __jsx(\"svg\", {\n          className: \"absolute right-0 h-5 w-5 mr-2 text-red-500\",\n          viewBox: \"0 0 20 20\",\n          fill: \"currentColor\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 11\n          }\n        }, __jsx(\"path\", {\n          \"fill-rule\": \"evenodd\",\n          d: \"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z\",\n          \"clip-rule\": \"evenodd\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }\n        }));\n      } else {\n        return __jsx(\"svg\", {\n          className: \"absolute right-0 h-5 w-5 mr-2 text-green-500\",\n          viewBox: \"0 0 20 20\",\n          fill: \"currentColor\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 11\n          }\n        }, __jsx(\"path\", {\n          \"fill-rule\": \"evenodd\",\n          d: \"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\",\n          \"clip-rule\": \"evenodd\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }\n        }));\n      }\n    }\n\n    return null;\n  };\n\n  const Message = () => {\n    if (input !== \"\") {\n      if (error) {\n        return __jsx(\"label\", {\n          className: \"mt-2 text-red-600\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 16\n          }\n        }, props.message);\n      } else {\n        return __jsx(\"label\", {\n          className: \"mt-2 text-green-600\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 16\n          }\n        }, props.message);\n      }\n    }\n\n    return null;\n  };\n\n  return __jsx(\"div\", {\n    className: \"flex flex-col text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"flex space-x-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    className: \"mb-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, props.label), __jsx(\"label\", {\n    className: \"text-red-600\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, props.required ? \"*\" : \"\")), __jsx(\"div\", {\n    className: \"relative flex items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    onChange: onInput,\n    value: input,\n    type: props.type,\n    className: `w-full pr-8 rounded-md shadow-sm text-sm ${validate(input, error)}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }), __jsx(Icon, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  })), __jsx(Message, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputField);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0RmllbGQuanN4P2JhMjYiXSwibmFtZXMiOlsiSW5wdXRGaWVsZCIsInByb3BzIiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidmFsaWRhdGUiLCJJY29uIiwiTWVzc2FnZSIsIm1lc3NhZ2UiLCJsYWJlbCIsInJlcXVpcmVkIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN6QixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsc0RBQVEsQ0FBQyxLQUFELENBQWxDOztBQUVBLFFBQU1HLE9BQU8sR0FBSUMsS0FBRCxJQUFXO0FBQ3pCTCxZQUFRLENBQUNLLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVI7QUFDRCxHQUZEOztBQUlBLFFBQU1DLFFBQVEsR0FBRyxDQUFDVCxLQUFELEVBQVFHLEtBQVIsS0FBa0I7QUFDakMsUUFBSUgsS0FBSyxLQUFLLEVBQWQsRUFBa0I7QUFDaEIsYUFBTywyREFBUDtBQUNELEtBRkQsTUFHSyxJQUFJRyxLQUFKLEVBQVc7QUFDZCxhQUFPLHFFQUFQO0FBQ0QsS0FGSSxNQUdBO0FBQ0gsYUFBTyw2RUFBUDtBQUNEO0FBQ0YsR0FWRDs7QUFZQSxRQUFNTyxJQUFJLEdBQUcsTUFBTTtBQUNqQixRQUFJVixLQUFLLEtBQUssRUFBZCxFQUFrQjtBQUNoQixVQUFJRyxLQUFKLEVBQVc7QUFDVCxlQUNFO0FBQUssbUJBQVMsRUFBQyw0Q0FBZjtBQUE0RCxpQkFBTyxFQUFDLFdBQXBFO0FBQWdGLGNBQUksRUFBQyxjQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBTSx1QkFBVSxTQUFoQjtBQUEwQixXQUFDLEVBQUMsbUhBQTVCO0FBQWdKLHVCQUFVLFNBQTFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQURGO0FBS0QsT0FORCxNQU9LO0FBQ0gsZUFDRTtBQUFLLG1CQUFTLEVBQUMsOENBQWY7QUFBOEQsaUJBQU8sRUFBQyxXQUF0RTtBQUFrRixjQUFJLEVBQUMsY0FBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQU0sdUJBQVUsU0FBaEI7QUFBMEIsV0FBQyxFQUFDLHVJQUE1QjtBQUFvSyx1QkFBVSxTQUE5SztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FERjtBQUtEO0FBQ0Y7O0FBRUQsV0FBTyxJQUFQO0FBQ0QsR0FuQkQ7O0FBcUJBLFFBQU1RLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQUlYLEtBQUssS0FBSyxFQUFkLEVBQWtCO0FBQ2hCLFVBQUlHLEtBQUosRUFBVztBQUNULGVBQU87QUFBTyxtQkFBUyxFQUFDLG1CQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXNDSixLQUFLLENBQUNhLE9BQTVDLENBQVA7QUFDRCxPQUZELE1BR0s7QUFDSCxlQUFPO0FBQU8sbUJBQVMsRUFBQyxxQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF3Q2IsS0FBSyxDQUFDYSxPQUE5QyxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPLElBQVA7QUFDRCxHQVhEOztBQWFBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLGFBQVMsRUFBQyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tiLEtBQUssQ0FBQ2MsS0FEWCxDQURGLEVBSUU7QUFBTyxhQUFTLEVBQUMsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLZCxLQUFLLENBQUNlLFFBQU4sR0FBaUIsR0FBakIsR0FBdUIsRUFENUIsQ0FKRixDQURGLEVBU0U7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sWUFBUSxFQUFFVCxPQUFqQjtBQUEwQixTQUFLLEVBQUVMLEtBQWpDO0FBQXdDLFFBQUksRUFBRUQsS0FBSyxDQUFDZ0IsSUFBcEQ7QUFBMEQsYUFBUyxFQUFHLDRDQUEyQ04sUUFBUSxDQUFDVCxLQUFELEVBQVFHLEtBQVIsQ0FBZSxFQUF4STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBVEYsRUFhRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBREY7QUFpQkQ7O0FBRWNMLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbnB1dEZpZWxkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uSW5wdXQgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRJbnB1dChldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlID0gKGlucHV0LCBlcnJvcikgPT4ge1xuICAgIGlmIChpbnB1dCA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIFwiYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gXCJ0ZXh0LXJlZC05MDAgYm9yZGVyLXJlZC0zMDAgZm9jdXM6cmluZy1yZWQtNTAwIGZvY3VzOmJvcmRlci1yZWQtNTAwXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIFwidGV4dC1ncmVlbi05MDAgYm9yZGVyLWdyZWVuLTMwMCBmb2N1czpyaW5nLWdyZWVuLTUwMCBmb2N1czpib3JkZXItZ3JlZW4tNTAwXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEljb24gPSAoKSA9PiB7XG4gICAgaWYgKGlucHV0ICE9PSBcIlwiKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgaC01IHctNSBtci0yIHRleHQtcmVkLTUwMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTcgNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bS0xLTlhMSAxIDAgMDAtMSAxdjRhMSAxIDAgMTAyIDBWNmExIDEgMCAwMC0xLTF6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBoLTUgdy01IG1yLTIgdGV4dC1ncmVlbi01MDBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMy43MDctOS4yOTNhMSAxIDAgMDAtMS40MTQtMS40MTRMOSAxMC41ODYgNy43MDcgOS4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMiAyYTEgMSAwIDAwMS40MTQgMGw0LTR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBNZXNzYWdlID0gKCkgPT4ge1xuICAgIGlmIChpbnB1dCAhPT0gXCJcIikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiA8bGFiZWwgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXJlZC02MDBcIj57cHJvcHMubWVzc2FnZX08L2xhYmVsPjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gPGxhYmVsIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1ncmVlbi02MDBcIj57cHJvcHMubWVzc2FnZX08L2xhYmVsPjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXNtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0xXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0xXCI+XG4gICAgICAgICAgICB7cHJvcHMubGFiZWx9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIj5cbiAgICAgICAgICAgIHtwcm9wcy5yZXF1aXJlZCA/IFwiKlwiIDogXCJcIn1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uSW5wdXR9IHZhbHVlPXtpbnB1dH0gdHlwZT17cHJvcHMudHlwZX0gY2xhc3NOYW1lPXtgdy1mdWxsIHByLTggcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC1zbSAke3ZhbGlkYXRlKGlucHV0LCBlcnJvcil9YH0vPlxuICAgICAgICA8SWNvbi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNZXNzYWdlLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGaWVsZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InputField.jsx\n");

/***/ }),

/***/ "./components/ToggleButton.jsx":
/*!*************************************!*\
  !*** ./components/ToggleButton.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/kevin/Documents/GitHubClone/client/components/ToggleButton.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction ToggleButton(props) {\n  const {\n    0: toggle,\n    1: setToggle\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.toggle);\n\n  const onToggle = () => {\n    setToggle(!toggle);\n  };\n\n  return __jsx(\"div\", {\n    onClick: onToggle,\n    className: `flex items-center h-8 w-14 p-1 rounded-full duration-300 ease-in-out cursor-pointer ${!toggle ? \"bg-gray-200\" : \"bg-green-500\"}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: `h-6 w-6 rounded-full bg-white shadow-md duration-300 ease-in-out transform ${!toggle ? \"\" : \"translate-x-6\"}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZ2dsZUJ1dHRvbi5qc3g/MzRlZCJdLCJuYW1lcyI6WyJUb2dnbGVCdXR0b24iLCJwcm9wcyIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInVzZVN0YXRlIiwib25Ub2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0IsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQyxzREFBUSxDQUFDSCxLQUFLLENBQUNDLE1BQVAsQ0FBcEM7O0FBRUEsUUFBTUcsUUFBUSxHQUFHLE1BQU07QUFDckJGLGFBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDRCxHQUZEOztBQUlBLFNBQ0U7QUFDRSxXQUFPLEVBQUVHLFFBRFg7QUFFRSxhQUFTLEVBQUcsdUZBQXNGLENBQUNILE1BQUQsR0FBVSxhQUFWLEdBQTBCLGNBQWUsRUFGN0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUssYUFBUyxFQUFHLDhFQUE2RSxDQUFDQSxNQUFELEdBQVUsRUFBVixHQUFlLGVBQWdCLEVBQTdIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGO0FBUUQ7O0FBRWNGLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ub2dnbGVCdXR0b24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFRvZ2dsZUJ1dHRvbihwcm9wcykge1xuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUocHJvcHMudG9nZ2xlKTtcblxuICBjb25zdCBvblRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRUb2dnbGUoIXRvZ2dsZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbkNsaWNrPXtvblRvZ2dsZX1cbiAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGgtOCB3LTE0IHAtMSByb3VuZGVkLWZ1bGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGN1cnNvci1wb2ludGVyICR7IXRvZ2dsZSA/IFwiYmctZ3JheS0yMDBcIiA6IFwiYmctZ3JlZW4tNTAwXCJ9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtNiB3LTYgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvdy1tZCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtICR7IXRvZ2dsZSA/IFwiXCIgOiBcInRyYW5zbGF0ZS14LTZcIn1gfS8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUJ1dHRvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ToggleButton.jsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InputField */ \"./components/InputField.jsx\");\n/* harmony import */ var _components_ToggleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ToggleButton */ \"./components/ToggleButton.jsx\");\nvar _jsxFileName = \"/home/kevin/Documents/GitHubClone/client/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction IndexPage() {\n  return __jsx(\"div\", {\n    className: \"h-screen w-screen bg-white flex items-center justify-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"w-80 space-y-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    className: \"flex justify-center text-lg font-semibold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"Sign Up\"), __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    type: \"text\",\n    required: true,\n    label: \"Email\",\n    message: \"This email is valid.\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }), __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    type: \"text\",\n    required: true,\n    label: \"Username\",\n    message: \"This username is available.\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }), __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    type: \"password\",\n    required: true,\n    label: \"Password\",\n    message: \"This password is weak.\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQ2xDLFNBQ0U7QUFBSyxhQUFTLEVBQUMsNkRBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLGFBQVMsRUFBQywyQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBSUUsTUFBQyw4REFBRDtBQUFZLFFBQUksRUFBQyxNQUFqQjtBQUF3QixZQUFRLEVBQUUsSUFBbEM7QUFBd0MsU0FBSyxFQUFDLE9BQTlDO0FBQXNELFdBQU8sRUFBQyxzQkFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsTUFBQyw4REFBRDtBQUFZLFFBQUksRUFBQyxNQUFqQjtBQUF3QixZQUFRLEVBQUUsSUFBbEM7QUFBd0MsU0FBSyxFQUFDLFVBQTlDO0FBQXlELFdBQU8sRUFBQyw2QkFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsTUFBQyw4REFBRDtBQUFZLFFBQUksRUFBQyxVQUFqQjtBQUE0QixZQUFRLEVBQUUsSUFBdEM7QUFBNEMsU0FBSyxFQUFDLFVBQWxEO0FBQTZELFdBQU8sRUFBQyx3QkFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsQ0FERjtBQVlEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZCc7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL1RvZ2dsZUJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBiZy13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTgwIHNwYWNlLXktNVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICBTaWduIFVwXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxJbnB1dEZpZWxkIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ9e3RydWV9IGxhYmVsPVwiRW1haWxcIiBtZXNzYWdlPVwiVGhpcyBlbWFpbCBpcyB2YWxpZC5cIi8+XG4gICAgICAgIDxJbnB1dEZpZWxkIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ9e3RydWV9IGxhYmVsPVwiVXNlcm5hbWVcIiBtZXNzYWdlPVwiVGhpcyB1c2VybmFtZSBpcyBhdmFpbGFibGUuXCIvPlxuICAgICAgICA8SW5wdXRGaWVsZCB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZD17dHJ1ZX0gbGFiZWw9XCJQYXNzd29yZFwiIG1lc3NhZ2U9XCJUaGlzIHBhc3N3b3JkIGlzIHdlYWsuXCIvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });