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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_fetchJson__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/fetchJson */ \"./pages/api/fetchJson.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_8__]);\nswr__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n // Importing Provider\n\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        document.body.className = pageProps.isDark ? \"w-full antialiased dark-mode\" : \"w-full antialiased light-mode\";\n    }), /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_5___default().StrictMode), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n            store: _store__WEBPACK_IMPORTED_MODULE_3__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__.PersistGate, {\n                loading: null,\n                persistor: _store__WEBPACK_IMPORTED_MODULE_3__.persistor,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"/home/yehanny/test/react-next-realtor-search/pages/_app.js\",\n                            lineNumber: 20,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/yehanny/test/react-next-realtor-search/pages/_app.js\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_8__.SWRConfig, {\n                        value: {\n                            fetcher: _api_fetchJson__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                            onError: (err)=>{\n                                console.error(err);\n                            }\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/home/yehanny/test/react-next-realtor-search/pages/_app.js\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/yehanny/test/react-next-realtor-search/pages/_app.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this),\n                    \";\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yehanny/test/react-next-realtor-search/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/yehanny/test/react-next-realtor-search/pages/_app.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/yehanny/test/react-next-realtor-search/pages/_app.js\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF1QyxDQUFDLHFCQUFxQjtBQUM5QjtBQUNhO0FBQ2tCO0FBQ3JCO0FBQ1o7QUFDTztBQUNKO0FBRWpCLFNBQVNTLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxPQUNFTixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxHQUFHSCxVQUFVSSxNQUFNLEdBQUcsaUNBQWlDLCtCQUErQjtJQUMvRyxrQkFFRSw4REFBQ1gseURBQWdCO2tCQUNmLDRFQUFDSixpREFBUUE7WUFBQ0MsT0FBT0EseUNBQUtBO3NCQUNwQiw0RUFBQ0Usd0VBQVdBO2dCQUFDYyxTQUFTLElBQUk7Z0JBQUVmLFdBQVdBLDZDQUFTQTs7a0NBQzlDLDhEQUFDSSxrREFBSUE7a0NBQ0gsNEVBQUNZOzRCQUFLQyxNQUFLOzRCQUFXQyxTQUFROzs7Ozs7Ozs7OztrQ0FFaEMsOERBQUNaLDBDQUFTQTt3QkFDUmEsT0FBTzs0QkFDTEMsU0FBU2Ysc0RBQUtBOzRCQUNkZ0IsU0FBUyxDQUFDQyxNQUFRO2dDQUNoQkMsUUFBUUMsS0FBSyxDQUFDRjs0QkFDaEI7d0JBQ0Y7a0NBQ0EsNEVBQUNkOzRCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O29CQUNkOzs7Ozs7Ozs7Ozs7Ozs7O1lBS25CO0FBRUwsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5leHQtcmVhbHRvci1zZWFyY2gvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjsgLy8gSW1wb3J0aW5nIFByb3ZpZGVyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IHN0b3JlLCBwZXJzaXN0b3IgfSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiLi9hcGkvZmV0Y2hKc29uXCI7XG5pbXBvcnQgeyBTV1JDb25maWcgfSBmcm9tIFwic3dyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBwYWdlUHJvcHMuaXNEYXJrID8gXCJ3LWZ1bGwgYW50aWFsaWFzZWQgZGFyay1tb2RlXCIgOiBcInctZnVsbCBhbnRpYWxpYXNlZCBsaWdodC1tb2RlXCI7XG4gICAgfSksXG4gICAgKFxuICAgICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIDxQZXJzaXN0R2F0ZSBsb2FkaW5nPXtudWxsfSBwZXJzaXN0b3I9e3BlcnNpc3Rvcn0+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxTV1JDb25maWdcbiAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICBmZXRjaGVyOiBmZXRjaCxcbiAgICAgICAgICAgICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvU1dSQ29uZmlnPlxuICAgICAgICAgICAgO1xuICAgICAgICAgIDwvUGVyc2lzdEdhdGU+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gICAgKVxuICApO1xufVxuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJwZXJzaXN0b3IiLCJQZXJzaXN0R2F0ZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwiSGVhZCIsImZldGNoIiwiU1dSQ29uZmlnIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NOYW1lIiwiaXNEYXJrIiwiU3RyaWN0TW9kZSIsImxvYWRpbmciLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJ2YWx1ZSIsImZldGNoZXIiLCJvbkVycm9yIiwiZXJyIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/api/apartments/index.js":
/*!***************************************!*\
  !*** ./pages/api/apartments/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiApartmentsSlice\": () => (/* binding */ apiApartmentsSlice),\n/* harmony export */   \"useGetApartmentByIdQuery\": () => (/* binding */ useGetApartmentByIdQuery),\n/* harmony export */   \"useGetApartmentsQuery\": () => (/* binding */ useGetApartmentsQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst apiApartmentsSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"apiApartmentsSlice\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        // global configuration for the api\n        keepUnusedDataFor: 60,\n        // baseUrl: process.env.hostURL,\n        baseUrl: \"http://localhost:3001\"\n    }),\n    tagTypes: [\n        \"Apartment\"\n    ],\n    endpoints: (builder)=>({\n            getApartments: builder.query({\n                // configuration for an individual endpoint, overriding the api setting\n                keepUnusedDataFor: 60,\n                query: (args)=>{\n                    const { filters  } = args;\n                    let newFilter = Object.keys(filters).reduce((ACC, filter)=>{\n                        if (Boolean(filters?.[filter])) {\n                            ACC[filter] = filters[filter];\n                        }\n                        return ACC;\n                    }, {});\n                    return {\n                        url: `/apartments`,\n                        params: newFilter\n                    };\n                },\n                transformResponse: (response, meta, args)=>{\n                    let newResponse = {\n                        response,\n                        total: meta.response.headers.get(\"x-total-count\")\n                    };\n                    return newResponse;\n                },\n                providesTags: [\n                    \"Apartment\"\n                ]\n            }),\n            getApartmentById: builder.query({\n                // Endpoint to get a single apartment by id\n                query: (args)=>{\n                    const { id  } = args;\n                    return {\n                        url: `/apartments/${id}`\n                    };\n                },\n                providesTags: [\n                    \"Apartment\"\n                ]\n            })\n        })\n});\nconst { useGetApartmentsQuery , useGetApartmentByIdQuery  } = apiApartmentsSlice;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXBhcnRtZW50cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5RTtBQUVsRSxNQUFNRSxxQkFBcUJGLHVFQUFTQSxDQUFDO0lBQzFDRyxhQUFhO0lBQ2JDLFdBQVdILDRFQUFjQSxDQUFDO1FBQ3hCLG1DQUFtQztRQUNuQ0ksbUJBQW1CO1FBQ25CLGdDQUFnQztRQUNoQ0MsU0FBUztJQUNYO0lBQ0FDLFVBQVU7UUFBQztLQUFZO0lBQ3ZCQyxXQUFXLENBQUNDLFVBQWE7WUFDdkJDLGVBQWVELFFBQVFFLEtBQUssQ0FBQztnQkFDM0IsdUVBQXVFO2dCQUN2RU4sbUJBQW1CO2dCQUNuQk0sT0FBTyxDQUFDQyxPQUFTO29CQUNmLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdEO29CQUNwQixJQUFJRSxZQUFZQyxPQUFPQyxJQUFJLENBQUNILFNBQVNJLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxTQUFXO3dCQUMzRCxJQUFJQyxRQUFRUCxTQUFTLENBQUNNLE9BQU8sR0FBRzs0QkFDOUJELEdBQUcsQ0FBQ0MsT0FBTyxHQUFHTixPQUFPLENBQUNNLE9BQU87d0JBQy9CLENBQUM7d0JBQ0QsT0FBT0Q7b0JBQ1QsR0FBRyxDQUFDO29CQUNKLE9BQU87d0JBQ0xHLEtBQUssQ0FBQyxXQUFXLENBQUM7d0JBQ2xCQyxRQUFRUjtvQkFDVjtnQkFDRjtnQkFDQVMsbUJBQW1CLENBQUNDLFVBQVVDLE1BQU1iLE9BQVM7b0JBQzNDLElBQUljLGNBQWM7d0JBQUVGO3dCQUFVRyxPQUFPRixLQUFLRCxRQUFRLENBQUNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO29CQUFpQjtvQkFDaEYsT0FBT0g7Z0JBQ1Q7Z0JBQ0FJLGNBQWM7b0JBQUM7aUJBQVk7WUFDN0I7WUFDQUMsa0JBQWtCdEIsUUFBUUUsS0FBSyxDQUFDO2dCQUM5QiwyQ0FBMkM7Z0JBQzNDQSxPQUFPLENBQUNDLE9BQVM7b0JBQ2YsTUFBTSxFQUFFb0IsR0FBRSxFQUFFLEdBQUdwQjtvQkFDZixPQUFPO3dCQUNMUyxLQUFLLENBQUMsWUFBWSxFQUFFVyxHQUFHLENBQUM7b0JBQzFCO2dCQUNGO2dCQUNBRixjQUFjO29CQUFDO2lCQUFZO1lBQzdCO1FBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFFRyxzQkFBcUIsRUFBRUMseUJBQXdCLEVBQUUsR0FBR2hDLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5leHQtcmVhbHRvci1zZWFyY2gvLi9wYWdlcy9hcGkvYXBhcnRtZW50cy9pbmRleC5qcz81MmFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgYXBpQXBhcnRtZW50c1NsaWNlID0gY3JlYXRlQXBpKHtcbiAgcmVkdWNlclBhdGg6IFwiYXBpQXBhcnRtZW50c1NsaWNlXCIsXG4gIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoe1xuICAgIC8vIGdsb2JhbCBjb25maWd1cmF0aW9uIGZvciB0aGUgYXBpXG4gICAga2VlcFVudXNlZERhdGFGb3I6IDYwLFxuICAgIC8vIGJhc2VVcmw6IHByb2Nlc3MuZW52Lmhvc3RVUkwsXG4gICAgYmFzZVVybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIixcbiAgfSksXG4gIHRhZ1R5cGVzOiBbXCJBcGFydG1lbnRcIl0sXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICAgZ2V0QXBhcnRtZW50czogYnVpbGRlci5xdWVyeSh7XG4gICAgICAvLyBjb25maWd1cmF0aW9uIGZvciBhbiBpbmRpdmlkdWFsIGVuZHBvaW50LCBvdmVycmlkaW5nIHRoZSBhcGkgc2V0dGluZ1xuICAgICAga2VlcFVudXNlZERhdGFGb3I6IDYwLFxuICAgICAgcXVlcnk6IChhcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZmlsdGVycyB9ID0gYXJncztcbiAgICAgICAgbGV0IG5ld0ZpbHRlciA9IE9iamVjdC5rZXlzKGZpbHRlcnMpLnJlZHVjZSgoQUNDLCBmaWx0ZXIpID0+IHtcbiAgICAgICAgICBpZiAoQm9vbGVhbihmaWx0ZXJzPy5bZmlsdGVyXSkpIHtcbiAgICAgICAgICAgIEFDQ1tmaWx0ZXJdID0gZmlsdGVyc1tmaWx0ZXJdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gQUNDO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXJsOiBgL2FwYXJ0bWVudHNgLFxuICAgICAgICAgIHBhcmFtczogbmV3RmlsdGVyLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzcG9uc2UsIG1ldGEsIGFyZ3MpID0+IHtcbiAgICAgICAgbGV0IG5ld1Jlc3BvbnNlID0geyByZXNwb25zZSwgdG90YWw6IG1ldGEucmVzcG9uc2UuaGVhZGVycy5nZXQoXCJ4LXRvdGFsLWNvdW50XCIpIH07XG4gICAgICAgIHJldHVybiBuZXdSZXNwb25zZTtcbiAgICAgIH0sXG4gICAgICBwcm92aWRlc1RhZ3M6IFtcIkFwYXJ0bWVudFwiXSxcbiAgICB9KSxcbiAgICBnZXRBcGFydG1lbnRCeUlkOiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgIC8vIEVuZHBvaW50IHRvIGdldCBhIHNpbmdsZSBhcGFydG1lbnQgYnkgaWRcbiAgICAgIHF1ZXJ5OiAoYXJncykgPT4ge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBhcmdzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVybDogYC9hcGFydG1lbnRzLyR7aWR9YCxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBwcm92aWRlc1RhZ3M6IFtcIkFwYXJ0bWVudFwiXSxcbiAgICB9KSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0QXBhcnRtZW50c1F1ZXJ5LCB1c2VHZXRBcGFydG1lbnRCeUlkUXVlcnkgfSA9IGFwaUFwYXJ0bWVudHNTbGljZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsImFwaUFwYXJ0bWVudHNTbGljZSIsInJlZHVjZXJQYXRoIiwiYmFzZVF1ZXJ5Iiwia2VlcFVudXNlZERhdGFGb3IiLCJiYXNlVXJsIiwidGFnVHlwZXMiLCJlbmRwb2ludHMiLCJidWlsZGVyIiwiZ2V0QXBhcnRtZW50cyIsInF1ZXJ5IiwiYXJncyIsImZpbHRlcnMiLCJuZXdGaWx0ZXIiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiQUNDIiwiZmlsdGVyIiwiQm9vbGVhbiIsInVybCIsInBhcmFtcyIsInRyYW5zZm9ybVJlc3BvbnNlIiwicmVzcG9uc2UiLCJtZXRhIiwibmV3UmVzcG9uc2UiLCJ0b3RhbCIsImhlYWRlcnMiLCJnZXQiLCJwcm92aWRlc1RhZ3MiLCJnZXRBcGFydG1lbnRCeUlkIiwiaWQiLCJ1c2VHZXRBcGFydG1lbnRzUXVlcnkiLCJ1c2VHZXRBcGFydG1lbnRCeUlkUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/apartments/index.js\n");

/***/ }),

/***/ "./pages/api/fetchJson.js":
/*!********************************!*\
  !*** ./pages/api/fetchJson.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchJson)\n/* harmony export */ });\nasync function fetchJson(...args) {\n    try {\n        const response = await fetch(...args);\n        // if the server replies, there's always some data in json\n        // if there's a network error, it will throw at the previous line\n        const data = await response.json();\n        if (response.ok) {\n            return data;\n        }\n        const error = new Error(response.statusText);\n        error.response = response;\n        error.data = data;\n        throw error;\n    } catch (error1) {\n        if (!error1.data) {\n            error1.data = {\n                message: error1.message\n            };\n        }\n        throw error1;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmV0Y2hKc29uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxVQUFVLEdBQUdDLElBQUksRUFBRTtJQUMvQyxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNQyxTQUFTRjtRQUVoQywwREFBMEQ7UUFDMUQsaUVBQWlFO1FBQ2pFLE1BQU1HLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtRQUVoQyxJQUFJSCxTQUFTSSxFQUFFLEVBQUU7WUFDZixPQUFPRjtRQUNULENBQUM7UUFFRCxNQUFNRyxRQUFRLElBQUlDLE1BQU1OLFNBQVNPLFVBQVU7UUFDM0NGLE1BQU1MLFFBQVEsR0FBR0E7UUFDakJLLE1BQU1ILElBQUksR0FBR0E7UUFDYixNQUFNRyxNQUFNO0lBQ2QsRUFBRSxPQUFPQSxRQUFPO1FBQ2QsSUFBSSxDQUFDQSxPQUFNSCxJQUFJLEVBQUU7WUFDZkcsT0FBTUgsSUFBSSxHQUFHO2dCQUFFTSxTQUFTSCxPQUFNRyxPQUFPO1lBQUM7UUFDeEMsQ0FBQztRQUNELE1BQU1ILE9BQU07SUFDZDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1uZXh0LXJlYWx0b3Itc2VhcmNoLy4vcGFnZXMvYXBpL2ZldGNoSnNvbi5qcz84MTAwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoSnNvbiguLi5hcmdzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCguLi5hcmdzKTtcblxuICAgIC8vIGlmIHRoZSBzZXJ2ZXIgcmVwbGllcywgdGhlcmUncyBhbHdheXMgc29tZSBkYXRhIGluIGpzb25cbiAgICAvLyBpZiB0aGVyZSdzIGEgbmV0d29yayBlcnJvciwgaXQgd2lsbCB0aHJvdyBhdCB0aGUgcHJldmlvdXMgbGluZVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgZXJyb3IuZGF0YSA9IGRhdGE7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKCFlcnJvci5kYXRhKSB7XG4gICAgICBlcnJvci5kYXRhID0geyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmV0Y2hKc29uIiwiYXJncyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9rIiwiZXJyb3IiLCJFcnJvciIsInN0YXR1c1RleHQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/fetchJson.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"persistor\": () => (/* binding */ persistor),\n/* harmony export */   \"rootReducers\": () => (/* binding */ rootReducers),\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_apartments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/api/apartments */ \"./pages/api/apartments/index.js\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst persistConfig = {\n    key: \"root\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0___default()),\n    blacklist: [\n        \"apiProductListSlice\"\n    ]\n};\nconst rootReducers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({\n    [_pages_api_apartments__WEBPACK_IMPORTED_MODULE_2__.apiApartmentsSlice.reducerPath]: _pages_api_apartments__WEBPACK_IMPORTED_MODULE_2__.apiApartmentsSlice.reducer\n});\nconst persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistReducer)(persistConfig, rootReducers);\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({\n    reducer: persistedReducer,\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: {\n                ignoredActions: [\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.FLUSH,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.REHYDRATE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.PAUSE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.PERSIST,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.PURGE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.REGISTER\n                ]\n            }\n        }).concat(_pages_api_apartments__WEBPACK_IMPORTED_MODULE_2__.apiApartmentsSlice.middleware)\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistStore)(store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ21CO0FBQ047QUFDbUQ7QUFFaEgsTUFBTVksZ0JBQWdCO0lBQ3BCQyxLQUFLO0lBQ0xiLFNBQVNBLGtFQUFPQTtJQUNoQmMsV0FBVztRQUFDO0tBQXNCO0FBQ3BDO0FBRU8sTUFBTUMsZUFBZWIsaUVBQWVBLENBQUM7SUFDMUMsQ0FBQ0MsaUZBQThCLENBQUMsRUFBRUEsNkVBQTBCO0FBQzlELEdBQUc7QUFFSCxNQUFNZSxtQkFBbUJkLDZEQUFjQSxDQUFDUSxlQUFlRztBQUVoRCxNQUFNSSxRQUFRbEIsZ0VBQWNBLENBQUM7SUFDbENnQixTQUFTQztJQUNURSxZQUFZLENBQUNDLHVCQUNYQSxxQkFBcUI7WUFDbkJDLG1CQUFtQjtnQkFDakJDLGdCQUFnQjtvQkFBQ2pCLGdEQUFLQTtvQkFBRUMsb0RBQVNBO29CQUFFQyxnREFBS0E7b0JBQUVDLGtEQUFPQTtvQkFBRUMsZ0RBQUtBO29CQUFFQyxtREFBUUE7aUJBQUM7WUFDckU7UUFDRixHQUFHYSxNQUFNLENBQUNyQixnRkFBNkI7QUFDM0MsR0FBRztBQUVJLE1BQU1zQixZQUFZcEIsMkRBQVlBLENBQUNjLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1uZXh0LXJlYWx0b3Itc2VhcmNoLy4vc3RvcmUvaW5kZXguanM/NTZhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiO1xuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBhcGlBcGFydG1lbnRzU2xpY2UgfSBmcm9tIFwiLi4vcGFnZXMvYXBpL2FwYXJ0bWVudHNcIjtcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyLCBwZXJzaXN0U3RvcmUsIEZMVVNILCBSRUhZRFJBVEUsIFBBVVNFLCBQRVJTSVNULCBQVVJHRSwgUkVHSVNURVIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xuXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICBrZXk6IFwicm9vdFwiLFxuICBzdG9yYWdlOiBzdG9yYWdlLFxuICBibGFja2xpc3Q6IFtcImFwaVByb2R1Y3RMaXN0U2xpY2VcIl0sXG59O1xuXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgW2FwaUFwYXJ0bWVudHNTbGljZS5yZWR1Y2VyUGF0aF06IGFwaUFwYXJ0bWVudHNTbGljZS5yZWR1Y2VyLFxufSk7XG5cbmNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcnMpO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHBlcnNpc3RlZFJlZHVjZXIsXG4gIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cbiAgICBnZXREZWZhdWx0TWlkZGxld2FyZSh7XG4gICAgICBzZXJpYWxpemFibGVDaGVjazoge1xuICAgICAgICBpZ25vcmVkQWN0aW9uczogW0ZMVVNILCBSRUhZRFJBVEUsIFBBVVNFLCBQRVJTSVNULCBQVVJHRSwgUkVHSVNURVJdLFxuICAgICAgfSxcbiAgICB9KS5jb25jYXQoYXBpQXBhcnRtZW50c1NsaWNlLm1pZGRsZXdhcmUpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xuIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJjb25maWd1cmVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsImFwaUFwYXJ0bWVudHNTbGljZSIsInBlcnNpc3RSZWR1Y2VyIiwicGVyc2lzdFN0b3JlIiwiRkxVU0giLCJSRUhZRFJBVEUiLCJQQVVTRSIsIlBFUlNJU1QiLCJQVVJHRSIsIlJFR0lTVEVSIiwicGVyc2lzdENvbmZpZyIsImtleSIsImJsYWNrbGlzdCIsInJvb3RSZWR1Y2VycyIsInJlZHVjZXJQYXRoIiwicmVkdWNlciIsInBlcnNpc3RlZFJlZHVjZXIiLCJzdG9yZSIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIiwiaWdub3JlZEFjdGlvbnMiLCJjb25jYXQiLCJwZXJzaXN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();