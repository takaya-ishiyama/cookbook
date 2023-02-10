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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _src_components_HeaderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/HeaderComponent */ \"./src/components/HeaderComponent.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_hooks_users_fetchUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/src/hooks/users/fetchUser */ \"./src/hooks/users/fetchUser.ts\");\n/* harmony import */ var _src_components_Top__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/src/components/Top */ \"./src/components/Top.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    var _s1 = $RefreshSig$();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (true) {\n            const user_json = localStorage.getItem(\"user\");\n            // @ts-ignore\n            setUser(JSON.parse(user_json));\n        }\n    }, []);\n    /** 表示制御用コンポーネント */ function DisplayController(param) {\n        let { unauthorize , authorized  } = param;\n        _s1();\n        const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n        // useEffect(() => {\n        //   if (typeof window !== 'undefined') {\n        //     const user_json = localStorage.getItem('user');\n        //     // @ts-ignore\n        //     setUser(JSON.parse(user_json));\n        //   }\n        // }, []);\n        const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)();\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n        const auth_check = async ()=>{\n            const resp = await (0,_src_hooks_users_fetchUser__WEBPACK_IMPORTED_MODULE_6__.UseTokenGetUser)();\n            const user = await (resp === null || resp === void 0 ? void 0 : resp.json());\n            if (user) {\n                console.log(\"sucsess\");\n                localStorage.setItem(\"user\", JSON.stringify(user));\n                setUser(user);\n            // router.push(`contents`);\n            } else {\n            // router.push(`login`);\n            }\n        };\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n            auth_check().then(async (data)=>{\n                console.log(data);\n            });\n        }, []);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: user ? authorized : unauthorize\n        }, void 0, false);\n    }\n    _s1(DisplayController, \"vM+0cQpbmcqvR1155uZ1Pw51794=\", false, function() {\n        return [\n            next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n            client: queryClient,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_HeaderComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/frontend/pages/_app.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DisplayController, {\n                    unauthorize: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Top__WEBPACK_IMPORTED_MODULE_7__.Top, {}, void 0, false, void 0, void 0),\n                    authorized: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, {\n                    fileName: \"/frontend/pages/_app.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/frontend/pages/_app.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/frontend/pages/_app.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytEO0FBQ0Y7QUFDRTtBQUNuQjtBQUdMO0FBQ0M7QUFDc0I7QUFDbkI7QUFFM0MsTUFBTVUsY0FBYyxJQUFJVixvREFBV0E7QUFFcEIsU0FBU1csSUFBSSxLQUFrQyxFQUFFO1FBQXBDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEdBQWxDOzs7SUFDMUIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQTtJQUNoQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUksSUFBa0IsRUFBYTtZQUNqQyxNQUFNWSxZQUFZQyxhQUFhQyxPQUFPLENBQUM7WUFDdkMsYUFBYTtZQUNiSCxRQUFRSSxLQUFLQyxLQUFLLENBQUNKO1FBQ3JCLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxpQkFBaUIsR0FDakIsU0FBU0ssa0JBQWtCLEtBUTFCLEVBQUU7WUFSd0IsRUFDekJDLFlBQVcsRUFDWEMsV0FBVSxFQU1YLEdBUjBCOztRQVN6QixNQUFNLENBQUNULE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBO1FBQ2hDLG9CQUFvQjtRQUNwQix5Q0FBeUM7UUFDekMsc0RBQXNEO1FBQ3RELG9CQUFvQjtRQUNwQixzQ0FBc0M7UUFDdEMsTUFBTTtRQUNOLFVBQVU7UUFDVixNQUFNbUIsVUFBVWxCLHFEQUFZQTtRQUM1QixNQUFNbUIsU0FBU2xCLHNEQUFTQTtRQUN4QixNQUFNbUIsYUFBYSxVQUFZO1lBQzdCLE1BQU1DLE9BQU8sTUFBTW5CLDJFQUFlQTtZQUNsQyxNQUFNTSxPQUFhLE9BQU1hLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUMsSUFBSTtZQUNuQyxJQUFJZCxNQUFNO2dCQUNSZSxRQUFRQyxHQUFHLENBQUM7Z0JBQ1piLGFBQWFjLE9BQU8sQ0FBQyxRQUFRWixLQUFLYSxTQUFTLENBQUNsQjtnQkFDNUNDLFFBQVFEO1lBQ1IsMkJBQTJCO1lBQzdCLE9BQU87WUFDTCx3QkFBd0I7WUFDMUIsQ0FBQztRQUNIO1FBQ0FWLGdEQUFTQSxDQUFDLElBQU07WUFDZHNCLGFBQWFPLElBQUksQ0FBQyxPQUFPQyxPQUFTO2dCQUNoQ0wsUUFBUUMsR0FBRyxDQUFDSTtZQUNkO1FBQ0YsR0FBRyxFQUFFO1FBQ0wscUJBQU87c0JBQUdwQixPQUFPUyxhQUFhRCxXQUFXOztJQUMzQztRQXJDU0Q7O1lBa0JRZCxrREFBU0E7OztJQXFCMUIscUJBQ0UsOERBQUNMLDREQUFjQTtrQkFDYiw0RUFBQ0QsNERBQW1CQTtZQUFDa0MsUUFBUXpCOzs4QkFDM0IsOERBQUNQLHVFQUFlQTs7Ozs7OEJBQ2hCLDhEQUFDa0I7b0JBQ0NDLDJCQUFhLDhEQUFDYixvREFBR0E7b0JBQ2pCYywwQkFBWSw4REFBQ1g7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlDLENBQUM7R0E3RHVCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IEJveCwgQ2hha3JhUHJvdmlkZXIsIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBIZWFkZXJDb21wb25lbnQgZnJvbSAnQC9zcmMvY29tcG9uZW50cy9IZWFkZXJDb21wb25lbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAL3NyYy90eXBlL1VzZXJUeXBlJztcbmltcG9ydCBMb2dpbiBmcm9tICdAL3NyYy9jb21wb25lbnRzL0xvZ2luJztcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgVXNlVG9rZW5HZXRVc2VyIH0gZnJvbSAnQC9zcmMvaG9va3MvdXNlcnMvZmV0Y2hVc2VyJztcbmltcG9ydCB7IFRvcCB9IGZyb20gJ0Avc3JjL2NvbXBvbmVudHMvVG9wJztcblxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlcj4oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IHVzZXJfanNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBzZXRVc2VyKEpTT04ucGFyc2UodXNlcl9qc29uKSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLyoqIOihqOekuuWItuW+oeeUqOOCs+ODs+ODneODvOODjeODs+ODiCAqL1xuICBmdW5jdGlvbiBEaXNwbGF5Q29udHJvbGxlcih7XG4gICAgdW5hdXRob3JpemUsXG4gICAgYXV0aG9yaXplZCxcbiAgfToge1xuICAgIC8qKiDmnKroqo3oqLzmmYLjga7ooajnpLogKi9cbiAgICB1bmF1dGhvcml6ZTogSlNYLkVsZW1lbnQ7XG4gICAgLyoqIOiqjeiovOa4iOOBv+aZguOBruihqOekuiAqL1xuICAgIGF1dGhvcml6ZWQ6IEpTWC5FbGVtZW50O1xuICB9KSB7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlcj4oKTtcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gICAgIGNvbnN0IHVzZXJfanNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG4gICAgLy8gICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyAgICAgc2V0VXNlcihKU09OLnBhcnNlKHVzZXJfanNvbikpO1xuICAgIC8vICAgfVxuICAgIC8vIH0sIFtdKTtcbiAgICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgYXV0aF9jaGVjayA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBVc2VUb2tlbkdldFVzZXIoKTtcbiAgICAgIGNvbnN0IHVzZXI6IFVzZXIgPSBhd2FpdCByZXNwPy5qc29uKCk7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnc3Vjc2VzcycpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICAgICAgLy8gcm91dGVyLnB1c2goYGNvbnRlbnRzYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByb3V0ZXIucHVzaChgbG9naW5gKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBhdXRoX2NoZWNrKCkudGhlbihhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gPD57dXNlciA/IGF1dGhvcml6ZWQgOiB1bmF1dGhvcml6ZX08Lz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgICA8SGVhZGVyQ29tcG9uZW50IC8+XG4gICAgICAgIDxEaXNwbGF5Q29udHJvbGxlclxuICAgICAgICAgIHVuYXV0aG9yaXplPXs8VG9wIC8+fVxuICAgICAgICAgIGF1dGhvcml6ZWQ9ezxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XG4gICAgICAgIC8+XG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJDaGFrcmFQcm92aWRlciIsIkhlYWRlckNvbXBvbmVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicGFyc2VDb29raWVzIiwidXNlUm91dGVyIiwiVXNlVG9rZW5HZXRVc2VyIiwiVG9wIiwicXVlcnlDbGllbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJfanNvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJEaXNwbGF5Q29udHJvbGxlciIsInVuYXV0aG9yaXplIiwiYXV0aG9yaXplZCIsImNvb2tpZXMiLCJyb3V0ZXIiLCJhdXRoX2NoZWNrIiwicmVzcCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInRoZW4iLCJkYXRhIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});