"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Top.tsx":
/*!****************************!*\
  !*** ./components/Top.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Top\": function() { return /* binding */ Top; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_fetchUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/fetchUser */ \"./hooks/fetchUser.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Top = ()=>{\n    _s();\n    const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const auth_check = async ()=>{\n        const resp = await (0,_hooks_fetchUser__WEBPACK_IMPORTED_MODULE_4__.UseTokenGetUser)();\n        const user = await (resp === null || resp === void 0 ? void 0 : resp.json());\n        if (user) {\n            console.log(\"sucsess\");\n            localStorage.setItem(\"id\", user.id.toString());\n            localStorage.setItem(\"name\", user.username);\n            router.push(\"contents\");\n        } else {\n            router.push(\"login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                fontSize: \"20px\",\n                onClick: ()=>{\n                    auth_check();\n                },\n                children: \"ホームへ\"\n            }, void 0, false, {\n                fileName: \"/home/takaya/MyPrograming/CookBook/frontend/components/Top.tsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/takaya/MyPrograming/CookBook/frontend/components/Top.tsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Top, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Top;\nvar _c;\n$RefreshReg$(_c, \"Top\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNTO0FBQ25CO0FBQ0Q7QUFDYTtBQVk3QyxNQUFNTSxNQUFNLElBQU07O0lBQ3JCLE1BQU1DLFVBQVVILHFEQUFZQTtJQUM1QixNQUFNSSxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTU0sYUFBYSxVQUFZO1FBQzNCLE1BQU1DLE9BQU8sTUFBTUwsaUVBQWVBO1FBQ2xDLE1BQU1NLE9BQWEsT0FBTUQsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNRSxJQUFJO1FBQ25DLElBQUdELE1BQUs7WUFDSkUsUUFBUUMsR0FBRyxDQUFDO1lBQ1pDLGFBQWFDLE9BQU8sQ0FBQyxNQUFNTCxLQUFLTSxFQUFFLENBQUNDLFFBQVE7WUFDM0NILGFBQWFDLE9BQU8sQ0FBQyxRQUFRTCxLQUFLUSxRQUFRO1lBQzFDWCxPQUFPWSxJQUFJLENBQUU7UUFDakIsT0FBSztZQUNEWixPQUFPWSxJQUFJLENBQUU7UUFDakIsQ0FBQztJQUNMO0lBQ0EscUJBQ0k7a0JBQ0ksNEVBQUNsQixrREFBSUE7c0JBQ0QsNEVBQUNELG9EQUFNQTtnQkFBQ29CLFVBQVU7Z0JBQVFDLFNBQVMsSUFBSTtvQkFBQ2I7Z0JBQVk7MEJBQUc7Ozs7Ozs7Ozs7OztBQUl2RSxFQUFDO0dBdEJZSDs7UUFFTUgsa0RBQVNBOzs7S0FGZkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub3AudHN4PzFmNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4LCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJztcbmltcG9ydCB7IFVzZVRva2VuR2V0VXNlciB9IGZyb20gJ0AvaG9va3MvZmV0Y2hVc2VyJztcblxudHlwZSBVc2VyID0ge1xuICAgIGlkOiBudW1iZXIsXG4gICAgdXNlcm5hbWU6IHN0cmluZyxcbiAgICBlbWFpbD86IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgIGljb24/OiBhbnksXG4gICAgYmlydGg/OiBEYXRlLFxuICAgIHNleD86IG51bWJlcixcbiAgfVxuXG5leHBvcnQgY29uc3QgVG9wID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBhdXRoX2NoZWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgVXNlVG9rZW5HZXRVc2VyKCk7XG4gICAgICAgIGNvbnN0IHVzZXI6IFVzZXIgPSBhd2FpdCByZXNwPy5qc29uKCk7XG4gICAgICAgIGlmKHVzZXIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNzZXNzXCIpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgdXNlci5pZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lJywgdXNlci51c2VybmFtZSk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChgY29udGVudHNgKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChgbG9naW5gKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZm9udFNpemU9e1wiMjBweFwifSBvbkNsaWNrPXsoKT0+e2F1dGhfY2hlY2soKX19PuODm+ODvOODoOOBuDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJGbGV4IiwidXNlUm91dGVyIiwicGFyc2VDb29raWVzIiwiVXNlVG9rZW5HZXRVc2VyIiwiVG9wIiwiY29va2llcyIsInJvdXRlciIsImF1dGhfY2hlY2siLCJyZXNwIiwidXNlciIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImlkIiwidG9TdHJpbmciLCJ1c2VybmFtZSIsInB1c2giLCJmb250U2l6ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Top.tsx\n"));

/***/ })

});