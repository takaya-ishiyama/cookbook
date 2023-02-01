"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./components/Login.tsx":
/*!******************************!*\
  !*** ./components/Login.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_users_fetchUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/users/fetchUser */ \"./hooks/users/fetchUser.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst Login = ()=>{\n    const { register , getValues , setValue , handleSubmit , formState: { errors , isValid  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({\n        reValidateMode: \"onSubmit\"\n    });\n    const onSubmit = (data, e)=>console.log(data, e);\n    const onError = (errors, e)=>console.log(errors, e);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();\n    const getuser = async ()=>{\n        const resp = await (0,_hooks_users_fetchUser__WEBPACK_IMPORTED_MODULE_1__.GetUser)(getValues().username, getValues().password);\n        const user = await resp?.json();\n        if (user) {\n            console.log(\"sucsess\");\n            localStorage.setItem(\"id\", user.id.toString());\n            localStorage.setItem(\"name\", user.username);\n            router.push(`contents`);\n        } else {\n            toast({\n                title: \"login faild\",\n                status: \"error\",\n                position: \"top-right\",\n                isClosable: true\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit, onError),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                mx: \"1rem\",\n                w: \"40%\",\n                flexFlow: \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        children: \"名前\"\n                    }, void 0, false, {\n                        fileName: \"/home/takaya/MyPrograming/CookBook/frontend/components/Login.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        mb: 3,\n                        borderColor: errors.username ? \"red\" : \"glay\",\n                        ...register(\"username\", {\n                            required: \"入力してください\"\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/takaya/MyPrograming/CookBook/frontend/components/Login.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        children: \"パスワード\"\n                    }, void 0, false, {\n                        fileName: \"/home/takaya/MyPrograming/CookBook/frontend/components/Login.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        mb: 3,\n                        borderColor: errors.password ? \"red\" : \"glay\",\n                        ...register(\"password\", {\n                            required: \"入力してください\"\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/takaya/MyPrograming/CookBook/frontend/components/Login.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        w: \"15%\",\n                        display: \"inline-block\",\n                        type: \"submit\",\n                        bgColor: \"blue.300\",\n                        onClick: ()=>getuser(),\n                        children: \"送信\"\n                    }, void 0, false, {\n                        fileName: \"/home/takaya/MyPrograming/CookBook/frontend/components/Login.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/takaya/MyPrograming/CookBook/frontend/components/Login.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/takaya/MyPrograming/CookBook/frontend/components/Login.tsx\",\n            lineNumber: 55,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNvQjtBQUM5QjtBQUN1QjtBQUN0QjtBQVl6QyxNQUFNUyxRQUFRLElBQU07SUFDbEIsTUFBTSxFQUNKQyxTQUFRLEVBQ1JDLFVBQVMsRUFDVEMsU0FBUSxFQUNSQyxhQUFZLEVBQ1pDLFdBQVcsRUFBQ0MsT0FBTSxFQUFFQyxRQUFPLEVBQUMsR0FDN0IsR0FBR1Isd0RBQU9BLENBQUM7UUFDVlMsZ0JBQWdCO0lBQ2xCO0lBRUEsTUFBTUMsV0FBVyxDQUFDQyxNQUFXQyxJQUFXQyxRQUFRQyxHQUFHLENBQUNILE1BQU1DO0lBQzFELE1BQU1HLFVBQVUsQ0FBQ1IsUUFBYUssSUFBV0MsUUFBUUMsR0FBRyxDQUFDUCxRQUFRSztJQUM3RCxNQUFNSSxTQUFTbEIsc0RBQVNBO0lBRXhCLE1BQU1tQixRQUFRcEIsMERBQVFBO0lBQ3RCLE1BQU1xQixVQUFVLFVBQVc7UUFDekIsTUFBTUMsT0FBTyxNQUFNM0IsK0RBQU9BLENBQUNXLFlBQVlpQixRQUFRLEVBQUNqQixZQUFZa0IsUUFBUTtRQUNwRSxNQUFNQyxPQUFhLE1BQU1ILE1BQU1JO1FBQy9CLElBQUdELE1BQUs7WUFDTlQsUUFBUUMsR0FBRyxDQUFDO1lBQ1pVLGFBQWFDLE9BQU8sQ0FBQyxNQUFNSCxLQUFLSSxFQUFFLENBQUNDLFFBQVE7WUFDM0NILGFBQWFDLE9BQU8sQ0FBQyxRQUFRSCxLQUFLRixRQUFRO1lBQzFDSixPQUFPWSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDeEIsT0FBSztZQUNIWCxNQUFNO2dCQUNKWSxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxVQUFVO2dCQUNWQyxZQUFZLElBQUk7WUFDbEI7UUFDRixDQUFDO0lBQ0g7SUFJQSxxQkFDRTtrQkFDSSw0RUFBQ0M7WUFBS3ZCLFVBQVVMLGFBQWFLLFVBQVVLO3NCQUNuQyw0RUFBQ3BCLGtEQUFJQTtnQkFDSHVDLElBQUk7Z0JBQ0pDLEdBQUc7Z0JBQ0hDLFVBQVU7O2tDQUVWLDhEQUFDM0MsaURBQUdBO2tDQUFDOzs7Ozs7a0NBQ0wsOERBQUNHLG1EQUFLQTt3QkFDSnlDLElBQUk7d0JBQ0pDLGFBQWEvQixPQUFPYSxRQUFRLEdBQUUsUUFBTyxNQUFNO3dCQUMxQyxHQUFHbEIsU0FBUyxZQUFZOzRCQUFDcUMsVUFBVTt3QkFBVSxFQUFFOzs7Ozs7a0NBR2xELDhEQUFDOUMsaURBQUdBO2tDQUFDOzs7Ozs7a0NBQ0wsOERBQUNHLG1EQUFLQTt3QkFDSnlDLElBQUk7d0JBQ0pDLGFBQWEvQixPQUFPYyxRQUFRLEdBQUUsUUFBTyxNQUFNO3dCQUMxQyxHQUFHbkIsU0FBUyxZQUFXOzRCQUFDcUMsVUFBVTt3QkFBVSxFQUFFOzs7Ozs7a0NBR2pELDhEQUFDN0Msb0RBQU1BO3dCQUNMeUMsR0FBRzt3QkFDSEssU0FBUzt3QkFDVEMsTUFBSzt3QkFDTEMsU0FBUzt3QkFDVEMsU0FBUyxJQUFJekI7a0NBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0FBRUEsaUVBQWVqQixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL0xvZ2luLnRzeD83YWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFVzZXIgfSBmcm9tICdAL2hvb2tzL3VzZXJzL2ZldGNoVXNlcic7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmxleCwgSW5wdXQsIHVzZVRvYXN0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5cbnR5cGUgVXNlciA9IHtcbiAgaWQ6IG51bWJlcixcbiAgdXNlcm5hbWU6IHN0cmluZyxcbiAgZW1haWw/OiBzdHJpbmcsXG4gIHBhc3N3b3JkOiBzdHJpbmcsXG4gIGljb24/OiBhbnksXG4gIGJpcnRoPzogRGF0ZSxcbiAgc2V4PzogbnVtYmVyLFxufVxuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGdldFZhbHVlcyxcbiAgICBzZXRWYWx1ZSxcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgZm9ybVN0YXRlOiB7ZXJyb3JzLCBpc1ZhbGlkfSxcbiAgfSA9IHVzZUZvcm0oe1xuICAgIHJlVmFsaWRhdGVNb2RlOiBcIm9uU3VibWl0XCJcbiAgfSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogYW55LCBlOiBhbnkpID0+IGNvbnNvbGUubG9nKGRhdGEsIGUpO1xuICBjb25zdCBvbkVycm9yID0gKGVycm9yczogYW55LCBlOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9ycywgZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcbiAgY29uc3QgZ2V0dXNlciA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBHZXRVc2VyKGdldFZhbHVlcygpLnVzZXJuYW1lLGdldFZhbHVlcygpLnBhc3N3b3JkKTtcbiAgICBjb25zdCB1c2VyOiBVc2VyID0gYXdhaXQgcmVzcD8uanNvbigpXG4gICAgaWYodXNlcil7XG4gICAgICBjb25zb2xlLmxvZyhcInN1Y3Nlc3NcIik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCB1c2VyLmlkLnRvU3RyaW5nKCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25hbWUnLCB1c2VyLnVzZXJuYW1lKTtcbiAgICAgIHJvdXRlci5wdXNoKGBjb250ZW50c2ApO1xuICAgIH1lbHNle1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ2xvZ2luIGZhaWxkJyxcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1yaWdodCcsXG4gICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQsIG9uRXJyb3IpfT5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIG14PXtcIjFyZW1cIn1cbiAgICAgICAgICAgICAgdz17XCI0MCVcIn1cbiAgICAgICAgICAgICAgZmxleEZsb3c9e1wiY29sdW1uXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3g+5ZCN5YmNPC9Cb3g+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIG1iPXszfVxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPXtlcnJvcnMudXNlcm5hbWU/IFwicmVkXCI6IFwiZ2xheVwifVxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInVzZXJuYW1lXCIsIHtyZXF1aXJlZDogXCLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYRcIn0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7Lyoge2Vycm9ycy51c2VybmFtZSAmJiBlcnJvcnMudXNlcm5hbWUubWVzc2FnZX0gKi99XG4gICAgICAgICAgICAgIDxCb3g+44OR44K544Ov44O844OJPC9Cb3g+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIG1iPXszfVxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPXtlcnJvcnMucGFzc3dvcmQ/IFwicmVkXCI6IFwiZ2xheVwifVxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIse3JlcXVpcmVkOiBcIuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhFwifSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsvKiB7ZXJyb3JzLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZC5tZXNzYWdlfSAqL31cbiAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICB3PXtcIjE1JVwifVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9e1wiaW5saW5lLWJsb2NrXCJ9XG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgYmdDb2xvcj17XCJibHVlLjMwMFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5nZXR1c2VyKCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDpgIHkv6FcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwibmFtZXMiOlsiR2V0VXNlciIsIkJveCIsIkJ1dHRvbiIsIkZsZXgiLCJJbnB1dCIsInVzZVRvYXN0IiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VGb3JtIiwiTG9naW4iLCJyZWdpc3RlciIsImdldFZhbHVlcyIsInNldFZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiaXNWYWxpZCIsInJlVmFsaWRhdGVNb2RlIiwib25TdWJtaXQiLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvbkVycm9yIiwicm91dGVyIiwidG9hc3QiLCJnZXR1c2VyIiwicmVzcCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ1c2VyIiwianNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJpZCIsInRvU3RyaW5nIiwicHVzaCIsInRpdGxlIiwic3RhdHVzIiwicG9zaXRpb24iLCJpc0Nsb3NhYmxlIiwiZm9ybSIsIm14IiwidyIsImZsZXhGbG93IiwibWIiLCJib3JkZXJDb2xvciIsInJlcXVpcmVkIiwiZGlzcGxheSIsInR5cGUiLCJiZ0NvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Login.tsx\n");

/***/ }),

/***/ "./hooks/users/fetchUser.ts":
/*!**********************************!*\
  !*** ./hooks/users/fetchUser.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetUser\": () => (/* binding */ GetUser),\n/* harmony export */   \"UseTokenGetUser\": () => (/* binding */ UseTokenGetUser)\n/* harmony export */ });\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);\n\nconst base_url = \"http://localhost:8000/accounts/api\";\nconst makeUrl = (endpoint)=>{\n    return base_url + endpoint;\n};\nconst fetchToken = (username, password)=>{\n    const url = makeUrl(\"/token/\");\n    return fetch(url, {\n        method: \"POST\",\n        body: JSON.stringify({\n            username,\n            password\n        }),\n        headers: {\n            \"Accept\": \"application/json\",\n            \"Content-Type\": \"application/json\"\n        }\n    });\n};\nconst fetchNewToken = ()=>{\n    const url = makeUrl(\"/token/refresh/\");\n    const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_0__.parseCookies)();\n    return fetch(url, {\n        method: \"POST\",\n        body: JSON.stringify(cookies[\"refreshToken\"]),\n        headers: {\n            \"Accept\": \"application/json\",\n            \"Content-Type\": \"application/json\"\n        }\n    });\n};\nasync function fetchUser() {\n    const url = makeUrl(\"/detail/\");\n    const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_0__.parseCookies)();\n    return fetch(url, {\n        method: \"GET\",\n        headers: {\n            Authorization: `JWT ${cookies[\"accessToken\"]}`\n        }\n    });\n}\nconst GetUser = async (username, password)=>{\n    const resp = await fetchToken(username, password);\n    if (resp.ok) {\n        const tokenData = await resp.json();\n        (0,nookies__WEBPACK_IMPORTED_MODULE_0__.setCookie)(null, \"accessToken\", tokenData.access, {\n            maxAge: 30 * 60\n        });\n        (0,nookies__WEBPACK_IMPORTED_MODULE_0__.setCookie)(null, \"refreshToken\", tokenData.refresh, {\n            maxAge: 24 * 60 * 60\n        });\n        const user = await fetchUser();\n        return user;\n    } else {\n        console.log(\"error : fetch access token\");\n        return;\n    }\n};\nconst UseTokenGetUser = async ()=>{\n    const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_0__.parseCookies)();\n    if (cookies[\"accessToken\"]) {\n        // アクセストークンがあればユーザー認証\n        const resp = await fetchUser();\n        return resp;\n    } else if (cookies[\"refreshToken\"]) {\n        // リフレッシュトークンがあればアクセストークンをとってきてユーザー認証\n        const resp = await fetchNewToken();\n        console.log(resp);\n        const tokenData = await resp.json();\n        console.log(tokenData);\n        if (resp.ok) {\n            (0,nookies__WEBPACK_IMPORTED_MODULE_0__.setCookie)(null, \"accessToken\", tokenData.access, {\n                maxAge: 60 * 60\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_0__.setCookie)(null, \"refreshToken\", tokenData.refresh, {\n                maxAge: 30 * 24 * 60 * 60\n            });\n            const user = await fetchUser();\n            return user;\n        }\n        return;\n    } else {\n        // なければ何も返さない\n        console.log(\"error : fetch access token\");\n        return;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2Vycy9mZXRjaFVzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVpRTtBQUVqRSxNQUFNRSxXQUFXO0FBRWpCLE1BQU1DLFVBQVUsQ0FBQ0MsV0FBNkI7SUFDNUMsT0FBT0YsV0FBV0U7QUFDcEI7QUFFQSxNQUFNQyxhQUFhLENBQUNDLFVBQWtCQyxXQUF3QztJQUM1RSxNQUFNQyxNQUFNTCxRQUFRO0lBQ3BCLE9BQU9NLE1BQU1ELEtBQUs7UUFDaEJFLFFBQVE7UUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQUVQO1lBQVVDO1FBQVM7UUFDMUNPLFNBQVM7WUFDUCxVQUFVO1lBQ1YsZ0JBQWdCO1FBQ2xCO0lBQ0Y7QUFDRjtBQUVBLE1BQU1DLGdCQUFnQixJQUF5QjtJQUM3QyxNQUFNUCxNQUFNTCxRQUFRO0lBQ3BCLE1BQU1hLFVBQVVoQixxREFBWUE7SUFDNUIsT0FBT1MsTUFBTUQsS0FBSztRQUNoQkUsUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNHLE9BQU8sQ0FBQyxlQUFlO1FBQzVDRixTQUFTO1lBQ1AsVUFBVTtZQUNWLGdCQUFnQjtRQUNsQjtJQUNGO0FBQ0Y7QUFFQSxlQUFlRyxZQUErQjtJQUM1QyxNQUFNVCxNQUFNTCxRQUFRO0lBQ3BCLE1BQU1hLFVBQVVoQixxREFBWUE7SUFDNUIsT0FBT1MsTUFBTUQsS0FBSztRQUNoQkUsUUFBUTtRQUNSSSxTQUFTO1lBQ1BJLGVBQWUsQ0FBQyxJQUFJLEVBQUVGLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoRDtJQUNGO0FBQ0Y7QUFFTyxNQUFNRyxVQUFVLE9BQU9iLFVBQWtCQyxXQUFvRDtJQUNsRyxNQUFNYSxPQUFPLE1BQU1mLFdBQVdDLFVBQVVDO0lBQ3hDLElBQUlhLEtBQUtDLEVBQUUsRUFBRTtRQUNYLE1BQU1DLFlBQVksTUFBTUYsS0FBS0csSUFBSTtRQUNqQ3RCLGtEQUFTQSxDQUFDLElBQUksRUFBRSxlQUFlcUIsVUFBVUUsTUFBTSxFQUFFO1lBQzdDQyxRQUFRLEtBQUs7UUFDakI7UUFDQXhCLGtEQUFTQSxDQUFDLElBQUksRUFBRSxnQkFBZ0JxQixVQUFVSSxPQUFPLEVBQUU7WUFDL0NELFFBQVEsS0FBSyxLQUFLO1FBQ3RCO1FBQ0EsTUFBTUUsT0FBTyxNQUFNVjtRQUNuQixPQUFPVTtJQUNULE9BQU87UUFDTEMsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDRixDQUFDO0FBQ0gsRUFBRTtBQUVLLE1BQU1DLGtCQUFrQixVQUFZO0lBQ3pDLE1BQU1kLFVBQVVoQixxREFBWUE7SUFDNUIsSUFBR2dCLE9BQU8sQ0FBQyxjQUFjLEVBQUM7UUFDeEIscUJBQXFCO1FBQ3JCLE1BQU1JLE9BQU8sTUFBTUg7UUFDbkIsT0FBT0c7SUFDVCxPQUFNLElBQUdKLE9BQU8sQ0FBQyxlQUFlLEVBQUM7UUFDL0IscUNBQXFDO1FBQ3JDLE1BQU1JLE9BQU8sTUFBTUw7UUFDbkJhLFFBQVFDLEdBQUcsQ0FBQ1Q7UUFDWixNQUFNRSxZQUFZLE1BQU1GLEtBQUtHLElBQUk7UUFDakNLLFFBQVFDLEdBQUcsQ0FBQ1A7UUFDWixJQUFHRixLQUFLQyxFQUFFLEVBQUM7WUFDVHBCLGtEQUFTQSxDQUFDLElBQUksRUFBRSxlQUFlcUIsVUFBVUUsTUFBTSxFQUFFO2dCQUMvQ0MsUUFBUSxLQUFLO1lBQ2Y7WUFDQXhCLGtEQUFTQSxDQUFDLElBQUksRUFBRSxnQkFBZ0JxQixVQUFVSSxPQUFPLEVBQUU7Z0JBQ2pERCxRQUFRLEtBQUssS0FBSyxLQUFLO1lBQ3pCO1lBQ0EsTUFBTUUsT0FBTyxNQUFNVjtZQUNuQixPQUFPVTtRQUNULENBQUM7UUFDRDtJQUNGLE9BQUs7UUFDSCxhQUFhO1FBQ2JDLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0YsQ0FBQztBQUNILEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2hvb2tzL3VzZXJzL2ZldGNoVXNlci50cz82NTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGRlc3Ryb3lDb29raWUsIHBhcnNlQ29va2llcywgc2V0Q29va2llIH0gZnJvbSAnbm9va2llcyc7XG5cbmNvbnN0IGJhc2VfdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYWNjb3VudHMvYXBpXCI7XG5cbmNvbnN0IG1ha2VVcmwgPSAoZW5kcG9pbnQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBiYXNlX3VybCArIGVuZHBvaW50O1xufVxuXG5jb25zdCBmZXRjaFRva2VuID0gKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHVybCA9IG1ha2VVcmwoXCIvdG9rZW4vXCIpO1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gIH0pO1xufTtcblxuY29uc3QgZmV0Y2hOZXdUb2tlbiA9ICgpOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHVybCA9IG1ha2VVcmwoXCIvdG9rZW4vcmVmcmVzaC9cIik7XG4gIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoKVxuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb29raWVzW1wicmVmcmVzaFRva2VuXCJdKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gIH0pO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyKCk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgY29uc3QgdXJsID0gbWFrZVVybChcIi9kZXRhaWwvXCIpXG4gIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoKVxuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBKV1QgJHtjb29raWVzW1wiYWNjZXNzVG9rZW5cIl19YCxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IEdldFVzZXIgPSBhc3luYyAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoVG9rZW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgaWYgKHJlc3Aub2spIHtcbiAgICBjb25zdCB0b2tlbkRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICBzZXRDb29raWUobnVsbCwgJ2FjY2Vzc1Rva2VuJywgdG9rZW5EYXRhLmFjY2Vzcywge1xuICAgICAgICBtYXhBZ2U6IDMwICogNjAsLyozMG1pbiBYIDYwc2Vjb25kKi9cbiAgICB9KVxuICAgIHNldENvb2tpZShudWxsLCAncmVmcmVzaFRva2VuJywgdG9rZW5EYXRhLnJlZnJlc2gsIHtcbiAgICAgICAgbWF4QWdlOiAyNCAqIDYwICogNjAsLyogMjRoIFggNjBtaW4gWCA2MHNlY29uZCovXG4gICAgfSlcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZmV0Y2hVc2VyKCk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvciA6IGZldGNoIGFjY2VzcyB0b2tlblwiKTtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBVc2VUb2tlbkdldFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoKTtcbiAgaWYoY29va2llc1snYWNjZXNzVG9rZW4nXSl7XG4gICAgLy8g44Ki44Kv44K744K544OI44O844Kv44Oz44GM44GC44KM44Gw44Om44O844K244O86KqN6Ki8XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoVXNlcigpO1xuICAgIHJldHVybiByZXNwO1xuICB9ZWxzZSBpZihjb29raWVzWydyZWZyZXNoVG9rZW4nXSl7XG4gICAgLy8g44Oq44OV44Os44OD44K344Ol44OI44O844Kv44Oz44GM44GC44KM44Gw44Ki44Kv44K744K544OI44O844Kv44Oz44KS44Go44Gj44Gm44GN44Gm44Om44O844K244O86KqN6Ki8XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoTmV3VG9rZW4oKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICBjb25zdCB0b2tlbkRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh0b2tlbkRhdGEpO1xuICAgIGlmKHJlc3Aub2spe1xuICAgICAgc2V0Q29va2llKG51bGwsICdhY2Nlc3NUb2tlbicsIHRva2VuRGF0YS5hY2Nlc3MsIHtcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwLC8qNjBtaW4gWCA2MHNlY29uZCovXG4gICAgICB9KVxuICAgICAgc2V0Q29va2llKG51bGwsICdyZWZyZXNoVG9rZW4nLCB0b2tlbkRhdGEucmVmcmVzaCwge1xuICAgICAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLC8qIDI0aCBYIDYwbWluIFggNjBzZWNvbmQqL1xuICAgICAgfSlcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmZXRjaFVzZXIoKTtcbiAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1lbHNle1xuICAgIC8vIOOBquOBkeOCjOOBsOS9leOCgui/lOOBleOBquOBhFxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgOiBmZXRjaCBhY2Nlc3MgdG9rZW5cIik7XG4gICAgcmV0dXJuO1xuICB9XG59OyJdLCJuYW1lcyI6WyJwYXJzZUNvb2tpZXMiLCJzZXRDb29raWUiLCJiYXNlX3VybCIsIm1ha2VVcmwiLCJlbmRwb2ludCIsImZldGNoVG9rZW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXJsIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJmZXRjaE5ld1Rva2VuIiwiY29va2llcyIsImZldGNoVXNlciIsIkF1dGhvcml6YXRpb24iLCJHZXRVc2VyIiwicmVzcCIsIm9rIiwidG9rZW5EYXRhIiwianNvbiIsImFjY2VzcyIsIm1heEFnZSIsInJlZnJlc2giLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsIlVzZVRva2VuR2V0VXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/users/fetchUser.ts\n");

/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Login */ \"./components/Login.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Login__WEBPACK_IMPORTED_MODULE_2__]);\n_components_Login__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst login = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/takaya/MyPrograming/CookBook/frontend/pages/login.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNjO0FBRXZDLE1BQU1FLFFBQVEsSUFBTTtJQUNsQixxQkFDRSw4REFBQ0QseURBQUtBOzs7OztBQUVWO0FBRUEsaUVBQWVDLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2xvZ2luLnRzeD83MjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luJ1xuXG5jb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TG9naW4vPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luIl0sIm5hbWVzIjpbIlJlYWN0IiwiTG9naW4iLCJsb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.tsx"));
module.exports = __webpack_exports__;

})();