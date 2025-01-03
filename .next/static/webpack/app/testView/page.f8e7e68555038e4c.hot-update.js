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
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_PrintButton_printButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/PrintButton/printButton */ \"(app-pages-browser)/./src/components/ui/PrintButton/printButton.tsx\");\n/* harmony import */ var _components_ui_PrintButton_printButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ui_PrintButton_printButton__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst App = ()=>{\n    //   const [phases, setPhases] = useState(phaseLabels);\n    //   const kondisi: StatusType = \"sehat\";\n    // const handleClick = () => {\n    //     alert(\"Tombol Ubah Data diklik!\");\n    // };\n    // const handleAdd = () => {\n    //     alert(\"Tombol Hapus Ternak diklik!\");\n    // };\n    // const handleInvite = () => {\n    //     alert(\"Tombol Invite Ternak diklik!\");\n    // };\n    const handleUpdate = ()=>{\n        alert(\"Tombol Invite Ternak diklik!\");\n    };\n    const handlePrint = ()=>{\n        alert(\"Tombol print sudah diklik!\");\n    };\n    return(// <div className=\"icon-gender\">\n    //   {/* <HealthStatus status=\"tidakSehat\" /> */}\n    //   {/* <GenderIcon gender=\"betina\" /> */}\n    // </div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            height: '100vh'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ui_PrintButton_printButton__WEBPACK_IMPORTED_MODULE_2___default()), {\n            onClick: handlePrint\n        }, void 0, false, {\n            fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/testView/page.tsx\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/testView/page.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, undefined));\n};\n_c = App;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGVzdFZpZXcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV3QztBQVMwQjtBQUVsRSxNQUFNRSxNQUFnQjtJQUN0Qix1REFBdUQ7SUFDdkQseUNBQXlDO0lBQ3JDLDhCQUE4QjtJQUM5Qix5Q0FBeUM7SUFDekMsS0FBSztJQUVMLDRCQUE0QjtJQUM1Qiw0Q0FBNEM7SUFDNUMsS0FBSztJQUVMLCtCQUErQjtJQUMvQiw2Q0FBNkM7SUFDN0MsS0FBSztJQUNMLE1BQU1DLGVBQWU7UUFDakJDLE1BQU07SUFDVjtJQUVBLE1BQU1DLGNBQWM7UUFDaEJELE1BQU07SUFDVjtJQUVBLE9BQ0ksZ0NBQWdDO0lBQ2hDLGlEQUFpRDtJQUNqRCwyQ0FBMkM7SUFDM0MsU0FBUztrQkFDVCw4REFBQ0U7UUFBSUMsT0FBTztZQUFFQyxTQUFTO1lBQVFDLGdCQUFnQjtZQUFVQyxZQUFZO1lBQVVDLFFBQVE7UUFBUTtrQkFJL0YsNEVBQUNWLCtFQUFXQTtZQUFDVyxTQUFTUDs7Ozs7Ozs7Ozs7QUFJOUI7S0FuQ01IO0FBcUNOLGlFQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvaGFsaXphc3lhZmFva3RhdmlhbmkvRG9jdW1lbnRzL0dpdEh1Yi9mYXJtLWRpZ2l0YWxpemF0aW9uL3NyYy9hcHAvdGVzdFZpZXcvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBQaGFzZUxhYmVsQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvdWkvUGhhc2VMYWJlbC9QaGFzZUxhYmVsQnV0dG9uXCI7XG4vLyBpbXBvcnQgeyBwaGFzZUxhYmVscyB9IGZyb20gXCJAL2RhdGEvcGhhc2VMYWJlbHNcIjtcbi8vIGltcG9ydCBIZWFsdGhTdGF0dXMgZnJvbSBcIkAvY29tcG9uZW50cy91aS9oZWFsdGhTdGF0dXNcIjsgXG4vLyBpbXBvcnQgR2VuZGVySWNvbiBmcm9tICdAL2NvbXBvbmVudHMvdWkvZ2VuZGVySWNvbic7XG5pbXBvcnQgRWRpdEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvdWkvRWRpdEJ1dHRvbi9lZGl0QnV0dG9uJztcbmltcG9ydCBBZGRCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL3VpL0FkZEJ1dHRvbi9hZGRCdXR0b24nO1xuaW1wb3J0IEludml0ZU9wZXJhdG9yQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy91aS9JbnZpdGVPcGVyYXRvckJ1dHRvbi9pbnZpdGVPcGVyYXRvckJ1dHRvbic7XG5pbXBvcnQgVXBkYXRlQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy91aS9VcGRhdGVCdXR0b24vdXBkYXRlQnV0dG9uJztcbmltcG9ydCBQcmludEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvdWkvUHJpbnRCdXR0b24vcHJpbnRCdXR0b24nO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuLy8gICBjb25zdCBbcGhhc2VzLCBzZXRQaGFzZXNdID0gdXNlU3RhdGUocGhhc2VMYWJlbHMpO1xuLy8gICBjb25zdCBrb25kaXNpOiBTdGF0dXNUeXBlID0gXCJzZWhhdFwiO1xuICAgIC8vIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIC8vICAgICBhbGVydChcIlRvbWJvbCBVYmFoIERhdGEgZGlrbGlrIVwiKTtcbiAgICAvLyB9O1xuXG4gICAgLy8gY29uc3QgaGFuZGxlQWRkID0gKCkgPT4ge1xuICAgIC8vICAgICBhbGVydChcIlRvbWJvbCBIYXB1cyBUZXJuYWsgZGlrbGlrIVwiKTtcbiAgICAvLyB9O1xuXG4gICAgLy8gY29uc3QgaGFuZGxlSW52aXRlID0gKCkgPT4ge1xuICAgIC8vICAgICBhbGVydChcIlRvbWJvbCBJbnZpdGUgVGVybmFrIGRpa2xpayFcIik7XG4gICAgLy8gfTtcbiAgICBjb25zdCBoYW5kbGVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiVG9tYm9sIEludml0ZSBUZXJuYWsgZGlrbGlrIVwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlUHJpbnQgPSAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiVG9tYm9sIHByaW50IHN1ZGFoIGRpa2xpayFcIik7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1nZW5kZXJcIj5cbiAgICAgICAgLy8gICB7LyogPEhlYWx0aFN0YXR1cyBzdGF0dXM9XCJ0aWRha1NlaGF0XCIgLz4gKi99XG4gICAgICAgIC8vICAgey8qIDxHZW5kZXJJY29uIGdlbmRlcj1cImJldGluYVwiIC8+ICovfVxuICAgICAgICAvLyA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgICAgey8qIDxFZGl0QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPiAqL31cbiAgICAgICAgey8qIDxJbnZpdGVPcGVyYXRvckJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVJbnZpdGV9IC8+ICovfVxuICAgICAgICB7LyogPFVwZGF0ZUJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVVcGRhdGV9IC8+ICovfVxuICAgICAgICA8UHJpbnRCdXR0b24gb25DbGljaz17aGFuZGxlUHJpbnR9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcmludEJ1dHRvbiIsIkFwcCIsImhhbmRsZVVwZGF0ZSIsImFsZXJ0IiwiaGFuZGxlUHJpbnQiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/testView/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ui/PrintButton/printButton.tsx":
/*!*******************************************************!*\
  !*** ./src/components/ui/PrintButton/printButton.tsx ***!
  \*******************************************************/
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