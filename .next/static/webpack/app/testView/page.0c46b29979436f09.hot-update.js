/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/testView/page",{

/***/ "(app-pages-browser)/./src/app/testView/page.tsx":
/*!***********************************!*\
  !*** ./src/app/testView/page.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_PhaseLabel_PhaseLabelButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/PhaseLabel/PhaseLabelButton */ \"(app-pages-browser)/./src/components/ui/PhaseLabel/PhaseLabelButton.tsx\");\n/* harmony import */ var _data_phaseLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/phaseLabels */ \"(app-pages-browser)/./src/data/phaseLabels.ts\");\n/* harmony import */ var _components_ui_healthStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/healthStatus */ \"(app-pages-browser)/./src/components/ui/healthStatus.tsx\");\n/* harmony import */ var _components_ui_healthStatus__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_ui_healthStatus__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n // Import komponen\nconst App = ()=>{\n    _s();\n    const [phases, setPhases] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_phaseLabels__WEBPACK_IMPORTED_MODULE_3__.phaseLabels);\n    const kondisi = \"sehat\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_PhaseLabel_PhaseLabelButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                phases: phases,\n                filterId: \"4\"\n            }, void 0, false, {\n                fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/testView/page.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ui_healthStatus__WEBPACK_IMPORTED_MODULE_4___default()), {\n                status: kondisi\n            }, void 0, false, {\n                fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/testView/page.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/testView/page.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"gjix22Q8pG0VLvDKQHkwHirzP1k=\");\n_c = App;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGVzdFZpZXcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV3QztBQUNtQztBQUMxQjtBQUNPLENBQUMsa0JBQWtCO0FBRzNFLE1BQU1LLE1BQWdCOztJQUNwQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUNFLDBEQUFXQTtJQUNoRCxNQUFNSyxVQUFzQjtJQUU1QixxQkFDRSw4REFBQ0M7OzBCQUVDLDhEQUFDUCxrRkFBZ0JBO2dCQUFDSSxRQUFRQTtnQkFBU0ksVUFBUzs7Ozs7OzBCQUM1Qyw4REFBQ04sb0VBQVlBO2dCQUFDTyxRQUFRSDs7Ozs7Ozs7Ozs7O0FBSTVCO0dBWk1IO0tBQUFBO0FBY04saUVBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWxpemFzeWFmYW9rdGF2aWFuaS9Eb2N1bWVudHMvR2l0SHViL2Zhcm0tZGlnaXRhbGl6YXRpb24vc3JjL2FwcC90ZXN0Vmlldy9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBoYXNlTGFiZWxCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy91aS9QaGFzZUxhYmVsL1BoYXNlTGFiZWxCdXR0b25cIjtcbmltcG9ydCB7IHBoYXNlTGFiZWxzIH0gZnJvbSBcIkAvZGF0YS9waGFzZUxhYmVsc1wiO1xuaW1wb3J0IEhlYWx0aFN0YXR1cyBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2hlYWx0aFN0YXR1c1wiOyAvLyBJbXBvcnQga29tcG9uZW5cbmltcG9ydCB7IFN0YXR1c1R5cGUgfSBmcm9tIFwiQC9tb2RlbHMvaGVhbHRoU3RhdHVzTW9kZWxcIlxuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbcGhhc2VzLCBzZXRQaGFzZXNdID0gdXNlU3RhdGUocGhhc2VMYWJlbHMpO1xuICBjb25zdCBrb25kaXNpOiBTdGF0dXNUeXBlID0gXCJzZWhhdFwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiBIYW55YSBtZW5hbXBpbGthbiBsYWJlbCBDZW1wZSAqL31cbiAgICAgIDxQaGFzZUxhYmVsQnV0dG9uIHBoYXNlcz17cGhhc2VzfSAgZmlsdGVySWQ9XCI0XCIgLz5cbiAgICAgIDxIZWFsdGhTdGF0dXMgc3RhdHVzPXtrb25kaXNpfSAvPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBoYXNlTGFiZWxCdXR0b24iLCJwaGFzZUxhYmVscyIsIkhlYWx0aFN0YXR1cyIsIkFwcCIsInBoYXNlcyIsInNldFBoYXNlcyIsImtvbmRpc2kiLCJkaXYiLCJmaWx0ZXJJZCIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/testView/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ui/healthStatus.tsx":
/*!********************************************!*\
  !*** ./src/components/ui/healthStatus.tsx ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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


/***/ })

});