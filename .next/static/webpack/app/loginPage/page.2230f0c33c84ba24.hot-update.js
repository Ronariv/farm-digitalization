"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/loginPage/page",{

/***/ "(app-pages-browser)/./src/app/loginPage/page.tsx":
/*!************************************!*\
  !*** ./src/app/loginPage/page.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InputDemo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _controllers_validationLoginRegister__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/controllers/validationLoginRegister */ \"(app-pages-browser)/./src/controllers/validationLoginRegister.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction InputDemo() {\n    _s();\n    const [emailOrPhone, setEmailOrPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleValidationAndSubmit = ()=>{\n        const validation = (0,_controllers_validationLoginRegister__WEBPACK_IMPORTED_MODULE_4__.validateEmailOrPhone)(emailOrPhone);\n        if (!validation.valid) {\n            setErrorMessage(\"Masukkan email atau nomor HP yang valid.\");\n        } else if (!password) {\n            setErrorMessage(\"Password tidak boleh kosong.\");\n        } else {\n            setErrorMessage(\"\");\n            alert(\"Login berhasil!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 bg-gray-200\"\n            }, void 0, false, {\n                fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/loginPage/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end items-center flex-2 p-4 pr-20 mr-20 pl-20 ml-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col space-y-7\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"emailOrPhone\",\n                                    className: \"block mb-2 text-sm\",\n                                    children: \"Email / Nomor HP\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/loginPage/page.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"emailOrPhone\",\n                                    type: \"text\",\n                                    value: emailOrPhone,\n                                    onChange: (e)=>setEmailOrPhone(e.target.value),\n                                    className: \"rounded-[3px]\",\n                                    placeholder: \"Email atau Nomor HP\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/loginPage/page.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/loginPage/page.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"password\",\n                                    className: \"block mb-2 text-sm\",\n                                    children: \"Kata Sandi\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/loginPage/page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"password\",\n                                    type: \"password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    className: \"rounded-[3px]\",\n                                    placeholder: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/loginPage/page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/loginPage/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-red-500 text-sm mt-1\",\n                            children: errorMessage\n                        }, void 0, false, {\n                            fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/loginPage/page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                className: \"w-[15.5625rem] h-[3.25rem] rounded-[10px] bg-[#248543] text-white hover:text-[#248543]\",\n                                onClick: handleValidationAndSubmit,\n                                disabled: !emailOrPhone && !password,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/loginPage/page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/loginPage/page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/loginPage/page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/loginPage/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/halizasyafaoktaviani/Documents/GitHub/farm-digitalization/src/app/loginPage/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(InputDemo, \"7eiEftn93ndlhuU4FUIHqZNpK4I=\");\n_c = InputDemo;\nvar _c;\n$RefreshReg$(_c, \"InputDemo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW5QYWdlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVpQztBQUNhO0FBQ0U7QUFDNkI7QUFFOUQsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNVyw0QkFBNEI7UUFDaEMsTUFBTUMsYUFBYVQsMEZBQW9CQSxDQUFDRTtRQUV4QyxJQUFJLENBQUNPLFdBQVdDLEtBQUssRUFBRTtZQUNyQkgsZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDSCxVQUFVO1lBQ3BCRyxnQkFBZ0I7UUFDbEIsT0FBTztZQUNMQSxnQkFBZ0I7WUFDaEJJLE1BQU07UUFDUjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs7OENBQ0MsOERBQUNFO29DQUFNQyxTQUFRO29DQUFlRixXQUFVOzhDQUFxQjs7Ozs7OzhDQUc3RCw4REFBQ2YsdURBQUtBO29DQUNKa0IsSUFBRztvQ0FDSEMsTUFBSztvQ0FDTEMsT0FBT2hCO29DQUNQaUIsVUFBVSxDQUFDQyxJQUFNakIsZ0JBQWdCaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUMvQ0wsV0FBVTtvQ0FDVlMsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ1Y7OzhDQUNDLDhEQUFDRTtvQ0FBTUMsU0FBUTtvQ0FBV0YsV0FBVTs4Q0FBcUI7Ozs7Ozs4Q0FHekQsOERBQUNmLHVEQUFLQTtvQ0FDSmtCLElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xDLE9BQU9kO29DQUNQZSxVQUFVLENBQUNDLElBQU1mLFlBQVllLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDM0NMLFdBQVU7b0NBQ1ZTLGFBQVk7Ozs7Ozs7Ozs7Ozt3QkFHZmhCLDhCQUNDLDhEQUFDaUI7NEJBQUVWLFdBQVU7c0NBQTZCUDs7Ozs7O3NDQUU1Qyw4REFBQ007c0NBQ0MsNEVBQUNiLHlEQUFNQTtnQ0FDTGMsV0FBVTtnQ0FDVlcsU0FBU2hCO2dDQUNUaUIsVUFBVSxDQUFDdkIsZ0JBQWdCLENBQUNFOzBDQUM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBakV3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWxpemFzeWFmYW9rdGF2aWFuaS9Eb2N1bWVudHMvR2l0SHViL2Zhcm0tZGlnaXRhbGl6YXRpb24vc3JjL2FwcC9sb2dpblBhZ2UvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUVtYWlsT3JQaG9uZSB9IGZyb20gXCJAL2NvbnRyb2xsZXJzL3ZhbGlkYXRpb25Mb2dpblJlZ2lzdGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RGVtbygpIHtcbiAgY29uc3QgW2VtYWlsT3JQaG9uZSwgc2V0RW1haWxPclBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlVmFsaWRhdGlvbkFuZFN1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gdmFsaWRhdGVFbWFpbE9yUGhvbmUoZW1haWxPclBob25lKTtcblxuICAgIGlmICghdmFsaWRhdGlvbi52YWxpZCkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiTWFzdWtrYW4gZW1haWwgYXRhdSBub21vciBIUCB5YW5nIHZhbGlkLlwiKTtcbiAgICB9IGVsc2UgaWYgKCFwYXNzd29yZCkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiUGFzc3dvcmQgdGlkYWsgYm9sZWgga29zb25nLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgICAgYWxlcnQoXCJMb2dpbiBiZXJoYXNpbCFcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBiZy1ncmF5LTIwMFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBmbGV4LTIgcC00IHByLTIwIG1yLTIwIHBsLTIwIG1sLTIwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTdcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbE9yUGhvbmVcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgRW1haWwgLyBOb21vciBIUFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cImVtYWlsT3JQaG9uZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsT3JQaG9uZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbE9yUGhvbmUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLVszcHhdXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhdGF1IE5vbW9yIEhQXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgS2F0YSBTYW5kaVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1bM3B4XVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIG10LTFcIj57ZXJyb3JNZXNzYWdlfTwvcD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzE1LjU2MjVyZW1dIGgtWzMuMjVyZW1dIHJvdW5kZWQtWzEwcHhdIGJnLVsjMjQ4NTQzXSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtWyMyNDg1NDNdXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVmFsaWRhdGlvbkFuZFN1Ym1pdH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbWFpbE9yUGhvbmUgJiYgIXBhc3N3b3JkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW5wdXQiLCJCdXR0b24iLCJ2YWxpZGF0ZUVtYWlsT3JQaG9uZSIsIklucHV0RGVtbyIsImVtYWlsT3JQaG9uZSIsInNldEVtYWlsT3JQaG9uZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJoYW5kbGVWYWxpZGF0aW9uQW5kU3VibWl0IiwidmFsaWRhdGlvbiIsInZhbGlkIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpZCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicCIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/loginPage/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/controllers/validationLoginRegister.js":
/*!****************************************************!*\
  !*** ./src/controllers/validationLoginRegister.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateEmailOrPhone: () => (/* binding */ validateEmailOrPhone),\n/* harmony export */   validatePassword: () => (/* binding */ validatePassword)\n/* harmony export */ });\nconst validateEmailOrPhone = (input)=>{\n    const isEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(input);\n    const isPhone = /^\\d{10,15}$/.test(input);\n    if (isEmail) return {\n        valid: true,\n        type: \"email\"\n    };\n    if (isPhone) return {\n        valid: true,\n        type: \"phone\"\n    };\n    return {\n        valid: false,\n        type: null\n    };\n};\nconst validatePassword = (password, rePassword)=>{\n    if (!password) {\n        return {\n            valid: false,\n            message: \"Password tidak boleh kosong.\"\n        };\n    }\n    if (password !== rePassword) {\n        return {\n            valid: false,\n            message: \"Password dan konfirmasi password tidak cocok.\"\n        };\n    }\n    return {\n        valid: true,\n        message: \"\"\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250cm9sbGVycy92YWxpZGF0aW9uTG9naW5SZWdpc3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLHVCQUF1QixDQUFDQztJQUNqQyxNQUFNQyxVQUFVLDZCQUE2QkMsSUFBSSxDQUFDRjtJQUNsRCxNQUFNRyxVQUFVLGNBQWNELElBQUksQ0FBQ0Y7SUFDbkMsSUFBSUMsU0FBUyxPQUFPO1FBQUVHLE9BQU87UUFBTUMsTUFBTTtJQUFRO0lBQ2pELElBQUlGLFNBQVMsT0FBTztRQUFFQyxPQUFPO1FBQU1DLE1BQU07SUFBUTtJQUNqRCxPQUFPO1FBQUVELE9BQU87UUFBT0MsTUFBTTtJQUFLO0FBQ3BDLEVBQUU7QUFFSyxNQUFNQyxtQkFBbUIsQ0FBQ0MsVUFBVUM7SUFDekMsSUFBSSxDQUFDRCxVQUFVO1FBQ2IsT0FBTztZQUFFSCxPQUFPO1lBQU9LLFNBQVM7UUFBK0I7SUFDakU7SUFDQSxJQUFJRixhQUFhQyxZQUFZO1FBQzNCLE9BQU87WUFBRUosT0FBTztZQUFPSyxTQUFTO1FBQWdEO0lBQ2xGO0lBQ0EsT0FBTztRQUFFTCxPQUFPO1FBQU1LLFNBQVM7SUFBRztBQUNwQyxFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvaGFsaXphc3lhZmFva3RhdmlhbmkvRG9jdW1lbnRzL0dpdEh1Yi9mYXJtLWRpZ2l0YWxpemF0aW9uL3NyYy9jb250cm9sbGVycy92YWxpZGF0aW9uTG9naW5SZWdpc3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdmFsaWRhdGVFbWFpbE9yUGhvbmUgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCBpc0VtYWlsID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdChpbnB1dCk7XG4gICAgY29uc3QgaXNQaG9uZSA9IC9eXFxkezEwLDE1fSQvLnRlc3QoaW5wdXQpO1xuICAgIGlmIChpc0VtYWlsKSByZXR1cm4geyB2YWxpZDogdHJ1ZSwgdHlwZTogXCJlbWFpbFwiIH07XG4gICAgaWYgKGlzUGhvbmUpIHJldHVybiB7IHZhbGlkOiB0cnVlLCB0eXBlOiBcInBob25lXCIgfTtcbiAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIHR5cGU6IG51bGwgfTtcbiAgfTtcblxuICBleHBvcnQgY29uc3QgdmFsaWRhdGVQYXNzd29yZCA9IChwYXNzd29yZCwgcmVQYXNzd29yZCkgPT4ge1xuICAgIGlmICghcGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgbWVzc2FnZTogXCJQYXNzd29yZCB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcbiAgICB9XG4gICAgaWYgKHBhc3N3b3JkICE9PSByZVBhc3N3b3JkKSB7XG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIG1lc3NhZ2U6IFwiUGFzc3dvcmQgZGFuIGtvbmZpcm1hc2kgcGFzc3dvcmQgdGlkYWsgY29jb2suXCIgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIG1lc3NhZ2U6IFwiXCIgfTtcbiAgfTsiXSwibmFtZXMiOlsidmFsaWRhdGVFbWFpbE9yUGhvbmUiLCJpbnB1dCIsImlzRW1haWwiLCJ0ZXN0IiwiaXNQaG9uZSIsInZhbGlkIiwidHlwZSIsInZhbGlkYXRlUGFzc3dvcmQiLCJwYXNzd29yZCIsInJlUGFzc3dvcmQiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/controllers/validationLoginRegister.js\n"));

/***/ })

});