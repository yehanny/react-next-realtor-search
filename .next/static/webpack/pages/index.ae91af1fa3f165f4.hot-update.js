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

/***/ "./components/pagination/usePagination.js":
/*!************************************************!*\
  !*** ./components/pagination/usePagination.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ usePagination; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _s = $RefreshSig$();\n\nfunction usePagination(param) {\n    var totalCount = param.totalCount, pageSize = param.pageSize, _siblingCount = param.siblingCount, siblingCount = _siblingCount === void 0 ? 1 : _siblingCount, currentPage = param.currentPage;\n    _s();\n    var paginationRange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {\n        var totalPageCount = Math.ceil(totalCount / pageSize);\n        var totalPageNumbers = siblingCount + 5;\n        var range = function(start, end) {\n            var length = end - start + 1;\n            return Array.from({\n                length: length\n            }, function(_, idx) {\n                return start + idx;\n            });\n        };\n        if (totalPageNumbers >= totalPageCount) {\n            return range(1, totalPageCount);\n        }\n        var leftSiblingIndex = Math.max(currentPage - siblingCount, 1);\n        var rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);\n        var shouldShowLeftDots = leftSiblingIndex > 2;\n        var shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;\n        var firstPageIndex = 1;\n        var lastPageIndex = totalPageCount;\n        if (!shouldShowLeftDots && shouldShowRightDots) {\n            var leftItemCount = 3 + 2 * siblingCount;\n            var leftRange = range(1, leftItemCount);\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(leftRange).concat([\n                \"...\",\n                totalPageCount\n            ]);\n        }\n        if (shouldShowLeftDots && !shouldShowRightDots) {\n            var rightItemCount = 3 + 2 * siblingCount;\n            var rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);\n            return [\n                firstPageIndex,\n                \"...\"\n            ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rightRange));\n        }\n        if (shouldShowLeftDots && shouldShowRightDots) {\n            var middleRange = range(leftSiblingIndex, rightSiblingIndex);\n            return [\n                firstPageIndex,\n                \"...\"\n            ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(middleRange), [\n                \"...\",\n                lastPageIndex\n            ]);\n        }\n    }, [\n        totalCount,\n        pageSize,\n        siblingCount,\n        currentPage\n    ]);\n    return paginationRange;\n}\n_s(usePagination, \"tLviJI6rwkyze3+kNwkFLwjvB48=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2luYXRpb24vdXNlUGFnaW5hdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWdDO0FBRWpCLFNBQVNDLGNBQWMsS0FBdUQsRUFBRTtRQUF2REMsYUFBRixNQUFFQSxZQUFZQyxXQUFkLE1BQWNBLDBCQUFkLE1BQXdCQyxjQUFBQSwwQ0FBZSxtQkFBR0MsY0FBMUMsTUFBMENBOztJQUM5RSxJQUFNQyxrQkFBa0JOLDhDQUFPQSxDQUFDLFdBQU07UUFDcEMsSUFBTU8saUJBQWlCQyxLQUFLQyxJQUFJLENBQUNQLGFBQWFDO1FBRTlDLElBQU1PLG1CQUFtQk4sZUFBZTtRQUV4QyxJQUFNTyxRQUFRLFNBQUNDLE9BQU9DLEtBQVE7WUFDNUIsSUFBSUMsU0FBU0QsTUFBTUQsUUFBUTtZQUMzQixPQUFPRyxNQUFNQyxJQUFJLENBQUM7Z0JBQUVGLFFBQUFBO1lBQU8sR0FBRyxTQUFDRyxHQUFHQzt1QkFBUU4sUUFBUU07O1FBQ3BEO1FBRUEsSUFBSVIsb0JBQW9CSCxnQkFBZ0I7WUFDdEMsT0FBT0ksTUFBTSxHQUFHSjtRQUNsQixDQUFDO1FBRUQsSUFBTVksbUJBQW1CWCxLQUFLWSxHQUFHLENBQUNmLGNBQWNELGNBQWM7UUFDOUQsSUFBTWlCLG9CQUFvQmIsS0FBS2MsR0FBRyxDQUFDakIsY0FBY0QsY0FBY0c7UUFFL0QsSUFBTWdCLHFCQUFxQkosbUJBQW1CO1FBQzlDLElBQU1LLHNCQUFzQkgsb0JBQW9CZCxpQkFBaUI7UUFFakUsSUFBTWtCLGlCQUFpQjtRQUN2QixJQUFNQyxnQkFBZ0JuQjtRQUV0QixJQUFJLENBQUNnQixzQkFBc0JDLHFCQUFxQjtZQUM5QyxJQUFJRyxnQkFBZ0IsSUFBSSxJQUFJdkI7WUFDNUIsSUFBSXdCLFlBQVlqQixNQUFNLEdBQUdnQjtZQUV6QixPQUFPLHFGQUFJQyxrQkFBSjtnQkFBZTtnQkFBT3JCO2FBQWU7UUFDOUMsQ0FBQztRQUVELElBQUlnQixzQkFBc0IsQ0FBQ0MscUJBQXFCO1lBQzlDLElBQUlLLGlCQUFpQixJQUFJLElBQUl6QjtZQUM3QixJQUFJMEIsYUFBYW5CLE1BQU1KLGlCQUFpQnNCLGlCQUFpQixHQUFHdEI7WUFFNUQsT0FBTztnQkFBQ2tCO2dCQUFnQjthQUFxQixDQUF0QyxPQUF3QixxRkFBR0s7UUFDcEMsQ0FBQztRQUVELElBQUlQLHNCQUFzQkMscUJBQXFCO1lBQzdDLElBQUlPLGNBQWNwQixNQUFNUSxrQkFBa0JFO1lBRTFDLE9BQU87Z0JBQUNJO2dCQUFnQjthQUE0QyxDQUE3RCxPQUF3QixxRkFBR00sY0FBM0I7Z0JBQXdDO2dCQUFPTDthQUFjO1FBQ3RFLENBQUM7SUFDSCxHQUFHO1FBQUN4QjtRQUFZQztRQUFVQztRQUFjQztLQUFZO0lBRXBELE9BQU9DO0FBQ1QsQ0FBQztHQTlDdUJMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi91c2VQYWdpbmF0aW9uLmpzP2I2NTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQYWdpbmF0aW9uKHsgdG90YWxDb3VudCwgcGFnZVNpemUsIHNpYmxpbmdDb3VudCA9IDEsIGN1cnJlbnRQYWdlIH0pIHtcbiAgY29uc3QgcGFnaW5hdGlvblJhbmdlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgdG90YWxQYWdlQ291bnQgPSBNYXRoLmNlaWwodG90YWxDb3VudCAvIHBhZ2VTaXplKTtcblxuICAgIGNvbnN0IHRvdGFsUGFnZU51bWJlcnMgPSBzaWJsaW5nQ291bnQgKyA1O1xuXG4gICAgY29uc3QgcmFuZ2UgPSAoc3RhcnQsIGVuZCkgPT4ge1xuICAgICAgbGV0IGxlbmd0aCA9IGVuZCAtIHN0YXJ0ICsgMTtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoIH0sIChfLCBpZHgpID0+IHN0YXJ0ICsgaWR4KTtcbiAgICB9O1xuXG4gICAgaWYgKHRvdGFsUGFnZU51bWJlcnMgPj0gdG90YWxQYWdlQ291bnQpIHtcbiAgICAgIHJldHVybiByYW5nZSgxLCB0b3RhbFBhZ2VDb3VudCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFNpYmxpbmdJbmRleCA9IE1hdGgubWF4KGN1cnJlbnRQYWdlIC0gc2libGluZ0NvdW50LCAxKTtcbiAgICBjb25zdCByaWdodFNpYmxpbmdJbmRleCA9IE1hdGgubWluKGN1cnJlbnRQYWdlICsgc2libGluZ0NvdW50LCB0b3RhbFBhZ2VDb3VudCk7XG5cbiAgICBjb25zdCBzaG91bGRTaG93TGVmdERvdHMgPSBsZWZ0U2libGluZ0luZGV4ID4gMjtcbiAgICBjb25zdCBzaG91bGRTaG93UmlnaHREb3RzID0gcmlnaHRTaWJsaW5nSW5kZXggPCB0b3RhbFBhZ2VDb3VudCAtIDI7XG5cbiAgICBjb25zdCBmaXJzdFBhZ2VJbmRleCA9IDE7XG4gICAgY29uc3QgbGFzdFBhZ2VJbmRleCA9IHRvdGFsUGFnZUNvdW50O1xuXG4gICAgaWYgKCFzaG91bGRTaG93TGVmdERvdHMgJiYgc2hvdWxkU2hvd1JpZ2h0RG90cykge1xuICAgICAgbGV0IGxlZnRJdGVtQ291bnQgPSAzICsgMiAqIHNpYmxpbmdDb3VudDtcbiAgICAgIGxldCBsZWZ0UmFuZ2UgPSByYW5nZSgxLCBsZWZ0SXRlbUNvdW50KTtcblxuICAgICAgcmV0dXJuIFsuLi5sZWZ0UmFuZ2UsIFwiLi4uXCIsIHRvdGFsUGFnZUNvdW50XTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkU2hvd0xlZnREb3RzICYmICFzaG91bGRTaG93UmlnaHREb3RzKSB7XG4gICAgICBsZXQgcmlnaHRJdGVtQ291bnQgPSAzICsgMiAqIHNpYmxpbmdDb3VudDtcbiAgICAgIGxldCByaWdodFJhbmdlID0gcmFuZ2UodG90YWxQYWdlQ291bnQgLSByaWdodEl0ZW1Db3VudCArIDEsIHRvdGFsUGFnZUNvdW50KTtcblxuICAgICAgcmV0dXJuIFtmaXJzdFBhZ2VJbmRleCwgXCIuLi5cIiwgLi4ucmlnaHRSYW5nZV07XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFNob3dMZWZ0RG90cyAmJiBzaG91bGRTaG93UmlnaHREb3RzKSB7XG4gICAgICBsZXQgbWlkZGxlUmFuZ2UgPSByYW5nZShsZWZ0U2libGluZ0luZGV4LCByaWdodFNpYmxpbmdJbmRleCk7XG5cbiAgICAgIHJldHVybiBbZmlyc3RQYWdlSW5kZXgsIFwiLi4uXCIsIC4uLm1pZGRsZVJhbmdlLCBcIi4uLlwiLCBsYXN0UGFnZUluZGV4XTtcbiAgICB9XG4gIH0sIFt0b3RhbENvdW50LCBwYWdlU2l6ZSwgc2libGluZ0NvdW50LCBjdXJyZW50UGFnZV0pO1xuXG4gIHJldHVybiBwYWdpbmF0aW9uUmFuZ2U7XG59XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsInVzZVBhZ2luYXRpb24iLCJ0b3RhbENvdW50IiwicGFnZVNpemUiLCJzaWJsaW5nQ291bnQiLCJjdXJyZW50UGFnZSIsInBhZ2luYXRpb25SYW5nZSIsInRvdGFsUGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJ0b3RhbFBhZ2VOdW1iZXJzIiwicmFuZ2UiLCJzdGFydCIsImVuZCIsImxlbmd0aCIsIkFycmF5IiwiZnJvbSIsIl8iLCJpZHgiLCJsZWZ0U2libGluZ0luZGV4IiwibWF4IiwicmlnaHRTaWJsaW5nSW5kZXgiLCJtaW4iLCJzaG91bGRTaG93TGVmdERvdHMiLCJzaG91bGRTaG93UmlnaHREb3RzIiwiZmlyc3RQYWdlSW5kZXgiLCJsYXN0UGFnZUluZGV4IiwibGVmdEl0ZW1Db3VudCIsImxlZnRSYW5nZSIsInJpZ2h0SXRlbUNvdW50IiwicmlnaHRSYW5nZSIsIm1pZGRsZVJhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pagination/usePagination.js\n"));

/***/ })

});