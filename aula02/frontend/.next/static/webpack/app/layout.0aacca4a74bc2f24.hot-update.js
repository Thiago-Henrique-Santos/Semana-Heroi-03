"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/contexts/SocketContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/SocketContext.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SocketContext: function() { return /* binding */ SocketContext; },\n/* harmony export */   SocketProvider: function() { return /* binding */ SocketProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ SocketContext,SocketProvider auto */ \nvar _s = $RefreshSig$();\n\n\nconst SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction SocketProvider(param) {\n    let { children } = param;\n    _s();\n    let [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Estou aqui. Formando uri para o Socket. = \".concat(\"http://localhost:3333\", \"/streams\"));\n        const newSocket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"\".concat(\"http://localhost:3333\", \"/streams\"), {\n            transports: [\n                \"websocket\"\n            ]\n        });\n        setSocket(newSocket);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocketContext.Provider, {\n        value: {\n            socket\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Thiago\\\\Projetos\\\\Pratica\\\\Semana-Heroi-03\\\\aula02\\\\frontend\\\\src\\\\contexts\\\\SocketContext.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(SocketProvider, \"jmM0SOH2S7qxnGwofg7KkXx2ngE=\");\n_c = SocketProvider;\nvar _c;\n$RefreshReg$(_c, \"SocketProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy9Tb2NrZXRDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNzRTtBQUN4QjtBQU12QyxNQUFNSSw4QkFBZ0JKLG9EQUFhQSxDQUFDLENBQUMsR0FBb0I7QUFFekQsU0FBU0ssZUFBZSxLQUFpQztRQUFqQyxFQUFDQyxRQUFRLEVBQXdCLEdBQWpDOztJQUMzQixJQUFJLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQVMsQ0FBQztJQUU1Q0QsZ0RBQVNBLENBQUM7UUFDTlEsUUFBUUMsR0FBRyxDQUFDLDZDQUE2RSxPQUFoQ0MsdUJBQStCLEVBQUM7UUFDekYsTUFBTUcsWUFBWVgsb0RBQUVBLENBQUMsR0FBbUMsT0FBaENRLHVCQUErQixFQUFDLGFBQVc7WUFDL0RJLFlBQVk7Z0JBQUM7YUFBWTtRQUM3QjtRQUNBUCxVQUFVTTtJQUNkLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDVixjQUFjWSxRQUFRO1FBQUNDLE9BQU87WUFBQ1Y7UUFBTTtrQkFDakNEOzs7Ozs7QUFHYjtHQWhCZ0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9Tb2NrZXRDb250ZXh0LnRzeD83YWVhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgUmVhY3ROb2RlLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNvY2tldCwgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIElTb2NrZXRDb250ZXh0IHtcclxuICAgIHNvY2tldDogU29ja2V0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTb2NrZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBJU29ja2V0Q29udGV4dClcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb2NrZXRQcm92aWRlcih7Y2hpbGRyZW59OiB7Y2hpbGRyZW46IFJlYWN0Tm9kZX0pIHtcclxuICAgIGxldCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGU8U29ja2V0Pih7fSBhcyBTb2NrZXQpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coYEVzdG91IGFxdWkuIEZvcm1hbmRvIHVyaSBwYXJhIG8gU29ja2V0LiA9ICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vc3RyZWFtc2ApO1xyXG4gICAgICAgIGNvbnN0IG5ld1NvY2tldCA9IGlvKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3N0cmVhbXNgLCB7XHJcbiAgICAgICAgICAgIHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0J11cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRTb2NrZXQobmV3U29ja2V0KTtcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U29ja2V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3NvY2tldH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Tb2NrZXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbyIsIlNvY2tldENvbnRleHQiLCJTb2NrZXRQcm92aWRlciIsImNoaWxkcmVuIiwic29ja2V0Iiwic2V0U29ja2V0IiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwibmV3U29ja2V0IiwidHJhbnNwb3J0cyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/SocketContext.tsx\n"));

/***/ })

});