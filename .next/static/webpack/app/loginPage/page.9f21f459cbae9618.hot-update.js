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

/***/ "(app-pages-browser)/./src/controllers/validationLoginRegister.js":
/*!****************************************************!*\
  !*** ./src/controllers/validationLoginRegister.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateEmailOrPhone: () => (/* binding */ validateEmailOrPhone),\n/* harmony export */   validatePassword: () => (/* binding */ validatePassword)\n/* harmony export */ });\nconst validateEmailOrPhone = (input)=>{\n    const isEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(input);\n    const isPhone = /^\\d{10,15}$/.test(input);\n    if (isEmail) return {\n        valid: true,\n        type: \"email\"\n    };\n    if (isPhone) return {\n        valid: true,\n        type: \"phone\"\n    };\n    return {\n        valid: false,\n        type: null\n    };\n};\nconst validatePassword = (password, rePassword)=>{\n    if (!password) {\n        return {\n            valid: false,\n            message: \"Password tidak boleh kosong.\"\n        };\n    }\n    if (password !== rePassword) {\n        return {\n            valid: false,\n            message: \"Password dan konfirmasi password tidak cocok.\"\n        };\n    }\n    return {\n        valid: true,\n        message: \"\"\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250cm9sbGVycy92YWxpZGF0aW9uTG9naW5SZWdpc3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLHVCQUF1QixDQUFDQztJQUNqQyxNQUFNQyxVQUFVLDZCQUE2QkMsSUFBSSxDQUFDRjtJQUNsRCxNQUFNRyxVQUFVLGNBQWNELElBQUksQ0FBQ0Y7SUFDbkMsSUFBSUMsU0FBUyxPQUFPO1FBQUVHLE9BQU87UUFBTUMsTUFBTTtJQUFRO0lBQ2pELElBQUlGLFNBQVMsT0FBTztRQUFFQyxPQUFPO1FBQU1DLE1BQU07SUFBUTtJQUNqRCxPQUFPO1FBQUVELE9BQU87UUFBT0MsTUFBTTtJQUFLO0FBQ3RDLEVBQUU7QUFFSyxNQUFNQyxtQkFBbUIsQ0FBQ0MsVUFBVUM7SUFDdkMsSUFBSSxDQUFDRCxVQUFVO1FBQ2IsT0FBTztZQUFFSCxPQUFPO1lBQU9LLFNBQVM7UUFBK0I7SUFDakU7SUFDQSxJQUFJRixhQUFhQyxZQUFZO1FBQzNCLE9BQU87WUFBRUosT0FBTztZQUFPSyxTQUFTO1FBQWdEO0lBQ2xGO0lBQ0EsT0FBTztRQUFFTCxPQUFPO1FBQU1LLFNBQVM7SUFBRztBQUN0QyxFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvaGFsaXphc3lhZmFva3RhdmlhbmkvRG9jdW1lbnRzL0dpdEh1Yi9mYXJtLWRpZ2l0YWxpemF0aW9uL3NyYy9jb250cm9sbGVycy92YWxpZGF0aW9uTG9naW5SZWdpc3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdmFsaWRhdGVFbWFpbE9yUGhvbmUgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCBpc0VtYWlsID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdChpbnB1dCk7XG4gICAgY29uc3QgaXNQaG9uZSA9IC9eXFxkezEwLDE1fSQvLnRlc3QoaW5wdXQpO1xuICAgIGlmIChpc0VtYWlsKSByZXR1cm4geyB2YWxpZDogdHJ1ZSwgdHlwZTogXCJlbWFpbFwiIH07XG4gICAgaWYgKGlzUGhvbmUpIHJldHVybiB7IHZhbGlkOiB0cnVlLCB0eXBlOiBcInBob25lXCIgfTtcbiAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIHR5cGU6IG51bGwgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVBhc3N3b3JkID0gKHBhc3N3b3JkLCByZVBhc3N3b3JkKSA9PiB7XG4gICAgaWYgKCFwYXNzd29yZCkge1xuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBtZXNzYWdlOiBcIlBhc3N3b3JkIHRpZGFrIGJvbGVoIGtvc29uZy5cIiB9O1xuICAgIH1cbiAgICBpZiAocGFzc3dvcmQgIT09IHJlUGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgbWVzc2FnZTogXCJQYXNzd29yZCBkYW4ga29uZmlybWFzaSBwYXNzd29yZCB0aWRhayBjb2Nvay5cIiB9O1xuICAgIH1cbiAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgbWVzc2FnZTogXCJcIiB9O1xufTsiXSwibmFtZXMiOlsidmFsaWRhdGVFbWFpbE9yUGhvbmUiLCJpbnB1dCIsImlzRW1haWwiLCJ0ZXN0IiwiaXNQaG9uZSIsInZhbGlkIiwidHlwZSIsInZhbGlkYXRlUGFzc3dvcmQiLCJwYXNzd29yZCIsInJlUGFzc3dvcmQiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/controllers/validationLoginRegister.js\n"));

/***/ })

});