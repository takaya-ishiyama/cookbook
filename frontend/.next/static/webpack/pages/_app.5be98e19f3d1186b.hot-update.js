"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _src_components_HeaderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/HeaderComponent */ \"./src/components/HeaderComponent.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_hooks_users_fetchUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/src/hooks/users/fetchUser */ \"./src/hooks/users/fetchUser.ts\");\n/* harmony import */ var _src_components_Top__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/src/components/Top */ \"./src/components/Top.tsx\");\n\n\n\n\n\n\n\n\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    var _s = $RefreshSig$();\n    // const [user, setUser] = useState<User>();\n    // useEffect(() => {\n    //   if (typeof window !== 'undefined') {\n    //     const user_json = localStorage.getItem('user');\n    //     // @ts-ignore\n    //     setUser(JSON.parse(user_json));\n    //   }\n    // }, []);\n    /** 表示制御用コンポーネント */ function DisplayController(param) {\n        let { unauthorize , authorized  } = param;\n        _s();\n        const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n        const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)();\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n        const auth_check = async ()=>{\n            const resp = await (0,_src_hooks_users_fetchUser__WEBPACK_IMPORTED_MODULE_6__.UseTokenGetUser)();\n            const user = await (resp === null || resp === void 0 ? void 0 : resp.json());\n            if (user) {\n                console.log(\"sucsess\");\n                localStorage.setItem(\"user\", JSON.stringify(user));\n                setUser(user);\n            } else {\n                // router.push(`login`);\n                console.log(\"faild\");\n            }\n        };\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n            auth_check();\n        }, []);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: user ? authorized : unauthorize\n        }, void 0, false);\n    }\n    _s(DisplayController, \"vM+0cQpbmcqvR1155uZ1Pw51794=\", false, function() {\n        return [\n            next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n            client: queryClient,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_HeaderComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/frontend/pages/_app.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DisplayController, {\n                    unauthorize: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Top__WEBPACK_IMPORTED_MODULE_7__.Top, {}, void 0, false, void 0, void 0),\n                    authorized: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, {\n                    fileName: \"/frontend/pages/_app.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/frontend/pages/_app.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/frontend/pages/_app.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0Q7QUFDRjtBQUNFO0FBQ25CO0FBR0w7QUFDQztBQUNzQjtBQUNuQjtBQUczQyxNQUFNVSxjQUFjLElBQUlWLG9EQUFXQTtBQUVwQixTQUFTVyxJQUFJLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksR0FBbEM7O0lBQzFCLDRDQUE0QztJQUM1QyxvQkFBb0I7SUFDcEIseUNBQXlDO0lBQ3pDLHNEQUFzRDtJQUN0RCxvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLE1BQU07SUFDTixVQUFVO0lBRVYsaUJBQWlCLEdBQ2pCLFNBQVNDLGtCQUFrQixLQVExQixFQUFFO1lBUndCLEVBQ3pCQyxZQUFXLEVBQ1hDLFdBQVUsRUFNWCxHQVIwQjs7UUFTekIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQTtRQUNoQyxNQUFNYyxVQUFVYixxREFBWUE7UUFDNUIsTUFBTWMsU0FBU2Isc0RBQVNBO1FBQ3hCLE1BQU1jLGFBQWEsVUFBWTtZQUM3QixNQUFNQyxPQUFPLE1BQU1kLDJFQUFlQTtZQUNsQyxNQUFNUyxPQUFhLE9BQU1LLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUMsSUFBSTtZQUNuQyxJQUFJTixNQUFNO2dCQUNSTyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pDLGFBQWFDLE9BQU8sQ0FBQyxRQUFRQyxLQUFLQyxTQUFTLENBQUNaO2dCQUM1Q0MsUUFBUUQ7WUFDVixPQUFPO2dCQUNMLHdCQUF3QjtnQkFDeEJPLFFBQVFDLEdBQUcsQ0FBQztZQUNkLENBQUM7UUFDSDtRQUNBckIsZ0RBQVNBLENBQUMsSUFBTTtZQUNkaUI7UUFDRixHQUFHLEVBQUU7UUFDTCxxQkFBTztzQkFBR0osT0FBT0QsYUFBYUQsV0FBVzs7SUFDM0M7T0E1QlNEOztZQVdRUCxrREFBU0E7OztJQW1CMUIscUJBQ0UsOERBQUNMLDREQUFjQTtrQkFDYiw0RUFBQ0QsNERBQW1CQTtZQUFDNkIsUUFBUXBCOzs4QkFDM0IsOERBQUNQLHVFQUFlQTs7Ozs7OEJBQ2hCLDhEQUFDVztvQkFDQ0MsMkJBQWEsOERBQUNOLG9EQUFHQTtvQkFDakJPLDBCQUFZLDhEQUFDSjt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUMsQ0FBQztLQXBEdUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgQm94LCBDaGFrcmFQcm92aWRlciwgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IEhlYWRlckNvbXBvbmVudCBmcm9tICdAL3NyYy9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0Avc3JjL3R5cGUvVXNlclR5cGUnO1xuaW1wb3J0IExvZ2luIGZyb20gJ0Avc3JjL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBVc2VUb2tlbkdldFVzZXIgfSBmcm9tICdAL3NyYy9ob29rcy91c2Vycy9mZXRjaFVzZXInO1xuaW1wb3J0IHsgVG9wIH0gZnJvbSAnQC9zcmMvY29tcG9uZW50cy9Ub3AnO1xuaW1wb3J0IFNpbmdVcCBmcm9tICdAL3NyYy9jb21wb25lbnRzL1NpbmdVcCc7XG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIC8vIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXI+KCk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vICAgICBjb25zdCB1c2VyX2pzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuICAvLyAgICAgLy8gQHRzLWlnbm9yZVxuICAvLyAgICAgc2V0VXNlcihKU09OLnBhcnNlKHVzZXJfanNvbikpO1xuICAvLyAgIH1cbiAgLy8gfSwgW10pO1xuXG4gIC8qKiDooajnpLrliLblvqHnlKjjgrPjg7Pjg53jg7zjg43jg7Pjg4ggKi9cbiAgZnVuY3Rpb24gRGlzcGxheUNvbnRyb2xsZXIoe1xuICAgIHVuYXV0aG9yaXplLFxuICAgIGF1dGhvcml6ZWQsXG4gIH06IHtcbiAgICAvKiog5pyq6KqN6Ki85pmC44Gu6KGo56S6ICovXG4gICAgdW5hdXRob3JpemU6IEpTWC5FbGVtZW50O1xuICAgIC8qKiDoqo3oqLzmuIjjgb/mmYLjga7ooajnpLogKi9cbiAgICBhdXRob3JpemVkOiBKU1guRWxlbWVudDtcbiAgfSkge1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXI+KCk7XG4gICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcygpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGF1dGhfY2hlY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgVXNlVG9rZW5HZXRVc2VyKCk7XG4gICAgICBjb25zdCB1c2VyOiBVc2VyID0gYXdhaXQgcmVzcD8uanNvbigpO1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y3Nlc3MnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByb3V0ZXIucHVzaChgbG9naW5gKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxkJyk7XG4gICAgICB9XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgYXV0aF9jaGVjaygpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gPD57dXNlciA/IGF1dGhvcml6ZWQgOiB1bmF1dGhvcml6ZX08Lz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgICA8SGVhZGVyQ29tcG9uZW50IC8+XG4gICAgICAgIDxEaXNwbGF5Q29udHJvbGxlclxuICAgICAgICAgIHVuYXV0aG9yaXplPXs8VG9wIC8+fVxuICAgICAgICAgIGF1dGhvcml6ZWQ9ezxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XG4gICAgICAgIC8+XG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJDaGFrcmFQcm92aWRlciIsIkhlYWRlckNvbXBvbmVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicGFyc2VDb29raWVzIiwidXNlUm91dGVyIiwiVXNlVG9rZW5HZXRVc2VyIiwiVG9wIiwicXVlcnlDbGllbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJEaXNwbGF5Q29udHJvbGxlciIsInVuYXV0aG9yaXplIiwiYXV0aG9yaXplZCIsInVzZXIiLCJzZXRVc2VyIiwiY29va2llcyIsInJvdXRlciIsImF1dGhfY2hlY2siLCJyZXNwIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});