/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Clients/Clients.jsx":
/*!****************************************!*\
  !*** ./components/Clients/Clients.jsx ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   About: function() { return /* reexport safe */ _About_About__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; },\n/* harmony export */   Clients: function() { return /* reexport default from dynamic */ _Clients_Clients__WEBPACK_IMPORTED_MODULE_6___default.a; },\n/* harmony export */   Contact: function() { return /* reexport safe */ _Contact_Contact__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; },\n/* harmony export */   ContactInfo: function() { return /* reexport safe */ _Contact_ContactInfo__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; },\n/* harmony export */   Cursor: function() { return /* reexport safe */ _UI_Cursor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; },\n/* harmony export */   Footer: function() { return /* reexport safe */ _Footer_Footer__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; },\n/* harmony export */   Header: function() { return /* reexport safe */ _Header_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; },\n/* harmony export */   Lightbox: function() { return /* reexport safe */ _UI_Lightbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; },\n/* harmony export */   LoadingScreen: function() { return /* reexport safe */ _UI_LoadingScreen__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   Map: function() { return /* reexport safe */ _Map_Map__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; },\n/* harmony export */   Portfolio: function() { return /* reexport safe */ _Portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; },\n/* harmony export */   Resume: function() { return /* reexport safe */ _Resume_Resume__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; },\n/* harmony export */   Services: function() { return /* reexport safe */ _Services_Services__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _UI_LoadingScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/LoadingScreen */ \"./components/UI/LoadingScreen.jsx\");\n/* harmony import */ var _UI_Cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/Cursor */ \"./components/UI/Cursor.jsx\");\n/* harmony import */ var _UI_Lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/Lightbox */ \"./components/UI/Lightbox.jsx\");\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header/Header */ \"./components/Header/Header.jsx\");\n/* harmony import */ var _About_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About/About */ \"./components/About/About.jsx\");\n/* harmony import */ var _Services_Services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/Services */ \"./components/Services/Services.jsx\");\n/* harmony import */ var _Clients_Clients__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Clients/Clients */ \"./components/Clients/Clients.jsx\");\n/* harmony import */ var _Clients_Clients__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Clients_Clients__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Portfolio/Portfolio */ \"./components/Portfolio/Portfolio.jsx\");\n/* harmony import */ var _Resume_Resume__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Resume/Resume */ \"./components/Resume/Resume.jsx\");\n/* harmony import */ var _Contact_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Contact/Contact */ \"./components/Contact/Contact.jsx\");\n/* harmony import */ var _Contact_ContactInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Contact/ContactInfo */ \"./components/Contact/ContactInfo.jsx\");\n/* harmony import */ var _Map_Map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Map/Map */ \"./components/Map/Map.jsx\");\n/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Footer/Footer */ \"./components/Footer/Footer.jsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNkO0FBQ0k7QUFDQTtBQUNIO0FBQ1M7QUFDSDtBQUNNO0FBQ1Q7QUFDRztBQUNRO0FBQ3BCO0FBQ1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC5qcz81MGQzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ1NjcmVlbiB9IGZyb20gXCIuL1VJL0xvYWRpbmdTY3JlZW5cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3Vyc29yIH0gZnJvbSBcIi4vVUkvQ3Vyc29yXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpZ2h0Ym94IH0gZnJvbSBcIi4vVUkvTGlnaHRib3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyL0hlYWRlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBYm91dCB9IGZyb20gXCIuL0Fib3V0L0Fib3V0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VzIH0gZnJvbSBcIi4vU2VydmljZXMvU2VydmljZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xpZW50cyB9IGZyb20gXCIuL0NsaWVudHMvQ2xpZW50c1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQb3J0Zm9saW8gfSBmcm9tIFwiLi9Qb3J0Zm9saW8vUG9ydGZvbGlvXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlc3VtZSB9IGZyb20gXCIuL1Jlc3VtZS9SZXN1bWVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFjdCB9IGZyb20gXCIuL0NvbnRhY3QvQ29udGFjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250YWN0SW5mbyB9IGZyb20gXCIuL0NvbnRhY3QvQ29udGFjdEluZm9cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFwIH0gZnJvbSBcIi4vTWFwL01hcFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb290ZXIgfSBmcm9tIFwiLi9Gb290ZXIvRm9vdGVyXCI7XG4iXSwibmFtZXMiOlsiZGVmYXVsdCIsIkxvYWRpbmdTY3JlZW4iLCJDdXJzb3IiLCJMaWdodGJveCIsIkhlYWRlciIsIkFib3V0IiwiU2VydmljZXMiLCJDbGllbnRzIiwiUG9ydGZvbGlvIiwiUmVzdW1lIiwiQ29udGFjdCIsIkNvbnRhY3RJbmZvIiwiTWFwIiwiRm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/index.js\n"));

/***/ })

});