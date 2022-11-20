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

/***/ "./pages/api/apartments/index.js":
/*!***************************************!*\
  !*** ./pages/api/apartments/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiApartmentsSlice\": function() { return /* binding */ apiApartmentsSlice; },\n/* harmony export */   \"useGetApartmentByIdQuery\": function() { return /* binding */ useGetApartmentByIdQuery; },\n/* harmony export */   \"useGetApartmentsQuery\": function() { return /* binding */ useGetApartmentsQuery; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n\n\nvar apiApartmentsSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"apiApartmentsSlice\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        // global configuration for the api\n        keepUnusedDataFor: 60,\n        // baseUrl: process.env.hostURL,\n        baseUrl: \"http://localhost:3001\"\n    }),\n    tagTypes: [\n        \"Apartment\"\n    ],\n    endpoints: function(builder) {\n        return {\n            getApartments: builder.query({\n                // configuration for an individual endpoint, overriding the api setting\n                keepUnusedDataFor: 60,\n                query: function(args) {\n                    console.info(\"args\", args);\n                    var newFilter = Object.keys(args.filters).reduce(function(ACC, filter) {\n                        var ref;\n                        if (Boolean((ref = args.filters) === null || ref === void 0 ? void 0 : ref[filter])) {\n                            ACC[filter] = args.filters[filter];\n                        }\n                        return ACC;\n                    }, {});\n                    var filters = newFilter.filters;\n                    return {\n                        url: \"/apartments\",\n                        params: (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, filters)\n                    };\n                },\n                providesTags: [\n                    \"Apartment\"\n                ]\n            }),\n            getApartmentById: builder.query({\n                // Endpoint to get a single apartment by id\n                query: function(args) {\n                    var id = args.id;\n                    return {\n                        url: \"/apartments/\".concat(id)\n                    };\n                },\n                providesTags: [\n                    \"Apartment\"\n                ]\n            })\n        };\n    }\n});\nvar useGetApartmentsQuery = apiApartmentsSlice.useGetApartmentsQuery, useGetApartmentByIdQuery = apiApartmentsSlice.useGetApartmentByIdQuery;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXBhcnRtZW50cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXlFO0FBRWxFLElBQU1FLHFCQUFxQkYsdUVBQVNBLENBQUM7SUFDMUNHLGFBQWE7SUFDYkMsV0FBV0gsNEVBQWNBLENBQUM7UUFDeEIsbUNBQW1DO1FBQ25DSSxtQkFBbUI7UUFDbkIsZ0NBQWdDO1FBQ2hDQyxTQUFTO0lBQ1g7SUFDQUMsVUFBVTtRQUFDO0tBQVk7SUFDdkJDLFdBQVcsU0FBQ0M7UUFBYTtZQUN2QkMsZUFBZUQsUUFBUUUsS0FBSyxDQUFDO2dCQUMzQix1RUFBdUU7Z0JBQ3ZFTixtQkFBbUI7Z0JBQ25CTSxPQUFPLFNBQUNDLE1BQVM7b0JBQ2ZDLFFBQVFDLElBQUksQ0FBQyxRQUFRRjtvQkFDckIsSUFBSUcsWUFBWUMsT0FBT0MsSUFBSSxDQUFDTCxLQUFLTSxPQUFPLEVBQUVDLE1BQU0sQ0FBQyxTQUFDQyxLQUFLQyxRQUFXOzRCQUNwRFQ7d0JBQVosSUFBSVUsUUFBUVYsQ0FBQUEsTUFBQUEsS0FBS00sT0FBTyxjQUFaTixpQkFBQUEsS0FBQUEsSUFBQUEsR0FBYyxDQUFDUyxPQUFPLEdBQUc7NEJBQ25DRCxHQUFHLENBQUNDLE9BQU8sR0FBR1QsS0FBS00sT0FBTyxDQUFDRyxPQUFPO3dCQUNwQyxDQUFDO3dCQUNELE9BQU9EO29CQUNULEdBQUcsQ0FBQztvQkFDSixJQUFNLFVBQWNMLFVBQVpHO29CQUNSLE9BQU87d0JBQ0xLLEtBQU07d0JBQ05DLFFBQVEsbUZBQUtOO29CQUNmO2dCQUNGO2dCQUNBTyxjQUFjO29CQUFDO2lCQUFZO1lBQzdCO1lBQ0FDLGtCQUFrQmpCLFFBQVFFLEtBQUssQ0FBQztnQkFDOUIsMkNBQTJDO2dCQUMzQ0EsT0FBTyxTQUFDQyxNQUFTO29CQUNmLElBQU0sS0FBU0EsS0FBUGU7b0JBQ1IsT0FBTzt3QkFDTEosS0FBSyxlQUFrQixPQUFISTtvQkFDdEI7Z0JBQ0Y7Z0JBQ0FGLGNBQWM7b0JBQUM7aUJBQVk7WUFDN0I7UUFDRjs7QUFDRixHQUFHO0FBRUksSUFBUUcsd0JBQW9EMUIsbUJBQXBEMEIsdUJBQXVCQywyQkFBNkIzQixtQkFBN0IyQix5QkFBZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2FwYXJ0bWVudHMvaW5kZXguanM/NTJhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGFwaUFwYXJ0bWVudHNTbGljZSA9IGNyZWF0ZUFwaSh7XG4gIHJlZHVjZXJQYXRoOiBcImFwaUFwYXJ0bWVudHNTbGljZVwiLFxuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHtcbiAgICAvLyBnbG9iYWwgY29uZmlndXJhdGlvbiBmb3IgdGhlIGFwaVxuICAgIGtlZXBVbnVzZWREYXRhRm9yOiA2MCxcbiAgICAvLyBiYXNlVXJsOiBwcm9jZXNzLmVudi5ob3N0VVJMLFxuICAgIGJhc2VVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCIsXG4gIH0pLFxuICB0YWdUeXBlczogW1wiQXBhcnRtZW50XCJdLFxuICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xuICAgIGdldEFwYXJ0bWVudHM6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgLy8gY29uZmlndXJhdGlvbiBmb3IgYW4gaW5kaXZpZHVhbCBlbmRwb2ludCwgb3ZlcnJpZGluZyB0aGUgYXBpIHNldHRpbmdcbiAgICAgIGtlZXBVbnVzZWREYXRhRm9yOiA2MCxcbiAgICAgIHF1ZXJ5OiAoYXJncykgPT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oXCJhcmdzXCIsIGFyZ3MpO1xuICAgICAgICBsZXQgbmV3RmlsdGVyID0gT2JqZWN0LmtleXMoYXJncy5maWx0ZXJzKS5yZWR1Y2UoKEFDQywgZmlsdGVyKSA9PiB7XG4gICAgICAgICAgaWYgKEJvb2xlYW4oYXJncy5maWx0ZXJzPy5bZmlsdGVyXSkpIHtcbiAgICAgICAgICAgIEFDQ1tmaWx0ZXJdID0gYXJncy5maWx0ZXJzW2ZpbHRlcl07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBBQ0M7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgY29uc3QgeyBmaWx0ZXJzIH0gPSBuZXdGaWx0ZXI7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXJsOiBgL2FwYXJ0bWVudHNgLFxuICAgICAgICAgIHBhcmFtczogeyAuLi5maWx0ZXJzIH0sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgcHJvdmlkZXNUYWdzOiBbXCJBcGFydG1lbnRcIl0sXG4gICAgfSksXG4gICAgZ2V0QXBhcnRtZW50QnlJZDogYnVpbGRlci5xdWVyeSh7XG4gICAgICAvLyBFbmRwb2ludCB0byBnZXQgYSBzaW5nbGUgYXBhcnRtZW50IGJ5IGlkXG4gICAgICBxdWVyeTogKGFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gYXJncztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1cmw6IGAvYXBhcnRtZW50cy8ke2lkfWAsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgcHJvdmlkZXNUYWdzOiBbXCJBcGFydG1lbnRcIl0sXG4gICAgfSksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHVzZUdldEFwYXJ0bWVudHNRdWVyeSwgdXNlR2V0QXBhcnRtZW50QnlJZFF1ZXJ5IH0gPSBhcGlBcGFydG1lbnRzU2xpY2U7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJhcGlBcGFydG1lbnRzU2xpY2UiLCJyZWR1Y2VyUGF0aCIsImJhc2VRdWVyeSIsImtlZXBVbnVzZWREYXRhRm9yIiwiYmFzZVVybCIsInRhZ1R5cGVzIiwiZW5kcG9pbnRzIiwiYnVpbGRlciIsImdldEFwYXJ0bWVudHMiLCJxdWVyeSIsImFyZ3MiLCJjb25zb2xlIiwiaW5mbyIsIm5ld0ZpbHRlciIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXJzIiwicmVkdWNlIiwiQUNDIiwiZmlsdGVyIiwiQm9vbGVhbiIsInVybCIsInBhcmFtcyIsInByb3ZpZGVzVGFncyIsImdldEFwYXJ0bWVudEJ5SWQiLCJpZCIsInVzZUdldEFwYXJ0bWVudHNRdWVyeSIsInVzZUdldEFwYXJ0bWVudEJ5SWRRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/apartments/index.js\n"));

/***/ })

});