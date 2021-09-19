"use strict";
(self["webpackChunkroundin_homepage"] = self["webpackChunkroundin_homepage"] || []).push([["src_utils_common_page_CouponListPage_tsx"],{

/***/ "./src/service/student/getCouponList.ts":
/*!**********************************************!*\
  !*** ./src/service/student/getCouponList.ts ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCouponList": () => (/* binding */ getCouponList)
/* harmony export */ });
/* harmony import */ var _serviceSetting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../serviceSetting */ "./src/service/serviceSetting.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


async function getCouponList() {
  let result = [];

  if (_serviceSetting__WEBPACK_IMPORTED_MODULE_0__.serviceOnOff === false) {
    result = testCouponSummary;
    await (0,_serviceSetting__WEBPACK_IMPORTED_MODULE_0__.sleep)(2000);
    return result;
  } // await axios({
  //   method: "post",
  //   url: "",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: JSON.stringify({}),
  // })
  //   .then(function (response) {
  //     result = response.data;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });


  return result;
}
const testCouponSummary = [{
  proName: "박세리",
  couponLessonType: "letter",
  remainingCount: 5
}, {
  proName: "박세리",
  couponLessonType: "video",
  remainingCount: 5
}, {
  proName: "최경주",
  couponLessonType: "letter",
  remainingCount: 5
}, {
  proName: "최경주",
  couponLessonType: "video",
  remainingCount: 5
}];
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getCouponList, "getCouponList", "/Users/gang/StudioProjects/roundin-web/src/service/student/getCouponList.ts");
  reactHotLoader.register(testCouponSummary, "testCouponSummary", "/Users/gang/StudioProjects/roundin-web/src/service/student/getCouponList.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/utils/common/page/CouponListPage.tsx":
/*!**************************************************!*\
  !*** ./src/utils/common/page/CouponListPage.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _service_student_getCouponList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/student/getCouponList */ "./src/service/student/getCouponList.ts");
/* harmony import */ var _widget_PageHeaderTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widget/PageHeaderTitle */ "./src/utils/common/widget/PageHeaderTitle.tsx");
/* harmony import */ var _LandingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LandingPage */ "./src/utils/common/page/LandingPage.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const CouponListPage = () => {
  const {
    params
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useRouteMatch)();
  const [conponList, setConponList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadCouponList = async () => {
      const response = await (0,_service_student_getCouponList__WEBPACK_IMPORTED_MODULE_1__.getCouponList)();
      console.log(response);
      if (response) setConponList(response);
    };

    loadCouponList();
  }, []); // 미래에 user or pro 정보가 들어감

  const CouponListPageVAProp = {
    conponList: conponList
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CouponListPageView, CouponListPageVAProp);
};

__signature__(CouponListPage, "useRouteMatch{{ params }}\nuseState{[conponList, setConponList]}\nuseEffect{}", () => [react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useRouteMatch]);

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.default)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    maxWidth: "500px",
    margin: "auto",
    padding: "0.5rem"
  },
  lessonListLayout: {
    margin: "1rem"
  },
  conponCard: {
    display: "flex",
    justifyContent: "space-around",
    width: "90vw",
    backgroundColor: "#F4F4F4",
    margin: "1rem 0px 1rem 0px",
    padding: "0.5rem 0px 0.5rem 0px",
    borderRadius: "10px"
  }
}));

const CouponListPageView = ({
  conponList
}) => {
  const classes = useStyles();

  const CouponCard = item => {
    const couponLessonTypeText = item.couponLessonType === "letter" ? "문자" : "영상";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classes.conponCard
    }, `${item.proName} 프로님 ${couponLessonTypeText} 레슨권`, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, `${item.remainingCount}회`));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widget_PageHeaderTitle__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "내 쿠폰"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.lessonListLayout
  }, conponList ? conponList.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CouponCard, _extends({
      key: `${item.proName}-${item.couponLessonType}`
    }, item));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LandingPage__WEBPACK_IMPORTED_MODULE_3__.default, {
    landingTitle: "쿠폰 목록을 가져오는 중입니다..."
  })));
};

__signature__(CouponListPageView, "useStyles{classes}", () => [useStyles]);

const _default = CouponListPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CouponListPage, "CouponListPage", "/Users/gang/StudioProjects/roundin-web/src/utils/common/page/CouponListPage.tsx");
  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/utils/common/page/CouponListPage.tsx");
  reactHotLoader.register(CouponListPageView, "CouponListPageView", "/Users/gang/StudioProjects/roundin-web/src/utils/common/page/CouponListPage.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/utils/common/page/CouponListPage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/utils/common/widget/PageHeaderTitle.tsx":
/*!*****************************************************!*\
  !*** ./src/utils/common/widget/PageHeaderTitle.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(theme => ({
  title: {
    display: "flex",
    width: "100%",
    fontSize: "1.25rem",
    justifyContent: "flex-start",
    fontWeight: "bold"
  }
}));

const PageHeaderTitle = ({
  title
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.title
  }, " ", title);
};

__signature__(PageHeaderTitle, "useStyles{classes}", () => [useStyles]);

const _default = PageHeaderTitle;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/utils/common/widget/PageHeaderTitle.tsx");
  reactHotLoader.register(PageHeaderTitle, "PageHeaderTitle", "/Users/gang/StudioProjects/roundin-web/src/utils/common/widget/PageHeaderTitle.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/utils/common/widget/PageHeaderTitle.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3V0aWxzX2NvbW1vbl9wYWdlX0NvdXBvbkxpc3RQYWdlX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFRTyxlQUFlRSxhQUFmLEdBQXlEO0FBQzlELE1BQUlDLE1BQXVCLEdBQUcsRUFBOUI7O0FBRUEsTUFBSUgseURBQVksS0FBSyxLQUFyQixFQUE0QjtBQUMxQkcsSUFBQUEsTUFBTSxHQUFHQyxpQkFBVDtBQUNBLFVBQU1ILHNEQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsV0FBT0UsTUFBUDtBQUNELEdBUDZELENBUzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQU9BLE1BQVA7QUFDRDtBQUVELE1BQU1DLGlCQUFrQyxHQUFHLENBQ3pDO0FBQUVDLEVBQUFBLE9BQU8sRUFBRSxLQUFYO0FBQWtCQyxFQUFBQSxnQkFBZ0IsRUFBRSxRQUFwQztBQUE4Q0MsRUFBQUEsY0FBYyxFQUFFO0FBQTlELENBRHlDLEVBRXpDO0FBQUVGLEVBQUFBLE9BQU8sRUFBRSxLQUFYO0FBQWtCQyxFQUFBQSxnQkFBZ0IsRUFBRSxPQUFwQztBQUE2Q0MsRUFBQUEsY0FBYyxFQUFFO0FBQTdELENBRnlDLEVBR3pDO0FBQUVGLEVBQUFBLE9BQU8sRUFBRSxLQUFYO0FBQWtCQyxFQUFBQSxnQkFBZ0IsRUFBRSxRQUFwQztBQUE4Q0MsRUFBQUEsY0FBYyxFQUFFO0FBQTlELENBSHlDLEVBSXpDO0FBQUVGLEVBQUFBLE9BQU8sRUFBRSxLQUFYO0FBQWtCQyxFQUFBQSxnQkFBZ0IsRUFBRSxPQUFwQztBQUE2Q0MsRUFBQUEsY0FBYyxFQUFFO0FBQTdELENBSnlDLENBQTNDOzs7Ozs7Ozs7OzBCQTNCc0JMOzBCQTJCaEJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LENBRkYsQ0FERjtBQWNELENBNUJEOztjQUFNSCxpREFDWWhCOztpQkE2QkhUO0FBQWYsaUVBQWU7Ozs7Ozs7Ozs7MEJBOUVUQTswQkF1QkFTOzBCQXlCQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZETjtBQUNBO0FBSUEsTUFBTWhCLFNBQVMsR0FBR2IsaUVBQVUsQ0FBRWMsS0FBRCxLQUFZO0FBQ3ZDcUIsRUFBQUEsS0FBSyxFQUFFO0FBQ0xuQixJQUFBQSxPQUFPLEVBQUUsTUFESjtBQUVMVSxJQUFBQSxLQUFLLEVBQUUsTUFGRjtBQUdMVSxJQUFBQSxRQUFRLEVBQUUsU0FITDtBQUlMakIsSUFBQUEsY0FBYyxFQUFFLFlBSlg7QUFLTGtCLElBQUFBLFVBQVUsRUFBRTtBQUxQO0FBRGdDLENBQVosQ0FBRCxDQUE1Qjs7QUFjQSxNQUFNbkMsZUFBZSxHQUFHLENBQUM7QUFBRWlDLEVBQUFBO0FBQUYsQ0FBRCxLQUFvQztBQUMxRCxRQUFNTCxPQUFPLEdBQUdqQixTQUFTLEVBQXpCO0FBRUEsc0JBQU87QUFBSyxhQUFTLEVBQUVpQixPQUFPLENBQUNLO0FBQXhCLFVBQWlDQSxLQUFqQyxDQUFQO0FBQ0QsQ0FKRDs7Y0FBTWpDLDhDQUNZVzs7aUJBS0hYO0FBQWYsaUVBQWU7Ozs7Ozs7Ozs7MEJBcEJUVzswQkFjQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3VuZGluX2hvbWVwYWdlLy4vc3JjL3NlcnZpY2Uvc3R1ZGVudC9nZXRDb3Vwb25MaXN0LnRzIiwid2VicGFjazovL3JvdW5kaW5faG9tZXBhZ2UvLi9zcmMvdXRpbHMvY29tbW9uL3BhZ2UvQ291cG9uTGlzdFBhZ2UudHN4Iiwid2VicGFjazovL3JvdW5kaW5faG9tZXBhZ2UvLi9zcmMvdXRpbHMvY29tbW9uL3dpZGdldC9QYWdlSGVhZGVyVGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHNlcnZpY2VPbk9mZiwgc2xlZXAgfSBmcm9tIFwiLi4vc2VydmljZVNldHRpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb3Vwb25TdW1tYXJ5IHtcbiAgcHJvTmFtZTogc3RyaW5nO1xuICBjb3Vwb25MZXNzb25UeXBlOiBcImxldHRlclwiIHwgXCJ2aWRlb1wiO1xuICByZW1haW5pbmdDb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291cG9uTGlzdCgpOiBQcm9taXNlPENvdXBvblN1bW1hcnlbXT4ge1xuICBsZXQgcmVzdWx0OiBDb3Vwb25TdW1tYXJ5W10gPSBbXTtcblxuICBpZiAoc2VydmljZU9uT2ZmID09PSBmYWxzZSkge1xuICAgIHJlc3VsdCA9IHRlc3RDb3Vwb25TdW1tYXJ5O1xuICAgIGF3YWl0IHNsZWVwKDIwMDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBhd2FpdCBheGlvcyh7XG4gIC8vICAgbWV0aG9kOiBcInBvc3RcIixcbiAgLy8gICB1cmw6IFwiXCIsXG4gIC8vICAgaGVhZGVyczoge1xuICAvLyAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIC8vICAgfSxcbiAgLy8gICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7fSksXG4gIC8vIH0pXG4gIC8vICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gIC8vICAgICByZXN1bHQgPSByZXNwb25zZS5kYXRhO1xuICAvLyAgIH0pXG4gIC8vICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAvLyAgIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmNvbnN0IHRlc3RDb3Vwb25TdW1tYXJ5OiBDb3Vwb25TdW1tYXJ5W10gPSBbXG4gIHsgcHJvTmFtZTogXCLrsJXshLjrpqxcIiwgY291cG9uTGVzc29uVHlwZTogXCJsZXR0ZXJcIiwgcmVtYWluaW5nQ291bnQ6IDUgfSxcbiAgeyBwcm9OYW1lOiBcIuuwleyEuOumrFwiLCBjb3Vwb25MZXNzb25UeXBlOiBcInZpZGVvXCIsIHJlbWFpbmluZ0NvdW50OiA1IH0sXG4gIHsgcHJvTmFtZTogXCLstZzqsr3so7xcIiwgY291cG9uTGVzc29uVHlwZTogXCJsZXR0ZXJcIiwgcmVtYWluaW5nQ291bnQ6IDUgfSxcbiAgeyBwcm9OYW1lOiBcIuy1nOqyveyjvFwiLCBjb3Vwb25MZXNzb25UeXBlOiBcInZpZGVvXCIsIHJlbWFpbmluZ0NvdW50OiA1IH0sXG5dO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZU1hdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IENvdXBvblN1bW1hcnksIGdldENvdXBvbkxpc3QgfSBmcm9tIFwiQHNyYy9zZXJ2aWNlL3N0dWRlbnQvZ2V0Q291cG9uTGlzdFwiO1xuaW1wb3J0IFBhZ2VIZWFkZXJUaXRsZSBmcm9tIFwiLi4vd2lkZ2V0L1BhZ2VIZWFkZXJUaXRsZVwiO1xuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gXCIuL0xhbmRpbmdQYWdlXCI7XG5cbmNvbnN0IENvdXBvbkxpc3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHBhcmFtcyB9ID0gdXNlUm91dGVNYXRjaDx7IHR5cGU6IHN0cmluZyB9PigpO1xuICBjb25zdCBbY29ucG9uTGlzdCwgc2V0Q29ucG9uTGlzdF0gPSB1c2VTdGF0ZTxDb3Vwb25TdW1tYXJ5W10+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQ291cG9uTGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0Q291cG9uTGlzdCgpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgaWYgKHJlc3BvbnNlKSBzZXRDb25wb25MaXN0KHJlc3BvbnNlKTtcbiAgICB9O1xuICAgIGxvYWRDb3Vwb25MaXN0KCk7XG4gIH0sIFtdKTsgLy8g66+4656Y7JeQIHVzZXIgb3IgcHJvIOygleuztOqwgCDrk6TslrTqsJBcblxuICBjb25zdCBDb3Vwb25MaXN0UGFnZVZBUHJvcDogQ291cG9uTGlzdFBhZ2VWQVByb3AgPSB7XG4gICAgY29ucG9uTGlzdDogY29ucG9uTGlzdCxcbiAgfTtcbiAgcmV0dXJuIDxDb3Vwb25MaXN0UGFnZVZpZXcgey4uLkNvdXBvbkxpc3RQYWdlVkFQcm9wfSAvPjtcbn07XG5cbmludGVyZmFjZSBDb3Vwb25MaXN0UGFnZVZBUHJvcCB7XG4gIGNvbnBvbkxpc3Q6IENvdXBvblN1bW1hcnlbXSB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgbWF4V2lkdGg6IFwiNTAwcHhcIixcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXG4gIH0sXG4gIGxlc3Nvbkxpc3RMYXlvdXQ6IHtcbiAgICBtYXJnaW46IFwiMXJlbVwiLFxuICB9LFxuICBjb25wb25DYXJkOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgd2lkdGg6IFwiOTB2d1wiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjRGNEY0XCIsXG4gICAgbWFyZ2luOiBcIjFyZW0gMHB4IDFyZW0gMHB4XCIsXG4gICAgcGFkZGluZzogXCIwLjVyZW0gMHB4IDAuNXJlbSAwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICB9LFxufSkpO1xuXG5jb25zdCBDb3Vwb25MaXN0UGFnZVZpZXcgPSAoeyBjb25wb25MaXN0IH06IENvdXBvbkxpc3RQYWdlVkFQcm9wKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBDb3Vwb25DYXJkID0gKGl0ZW06IENvdXBvblN1bW1hcnkpID0+IHtcbiAgICBjb25zdCBjb3Vwb25MZXNzb25UeXBlVGV4dCA9IGl0ZW0uY291cG9uTGVzc29uVHlwZSA9PT0gXCJsZXR0ZXJcIiA/IFwi66y47J6QXCIgOiBcIuyYgeyDgVwiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnBvbkNhcmR9PlxuICAgICAgICB7YCR7aXRlbS5wcm9OYW1lfSDtlITroZzri5ggJHtjb3Vwb25MZXNzb25UeXBlVGV4dH0g66CI7Iqo6raMYH1cbiAgICAgICAgPGRpdj57YCR7aXRlbS5yZW1haW5pbmdDb3VudH3tmoxgfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPFBhZ2VIZWFkZXJUaXRsZSB0aXRsZT17XCLrgrQg7L+g7Y+wXCJ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZXNzb25MaXN0TGF5b3V0fT5cbiAgICAgICAge2NvbnBvbkxpc3QgPyAoXG4gICAgICAgICAgY29ucG9uTGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8Q291cG9uQ2FyZCBrZXk9e2Ake2l0ZW0ucHJvTmFtZX0tJHtpdGVtLmNvdXBvbkxlc3NvblR5cGV9YH0gey4uLml0ZW19IC8+O1xuICAgICAgICAgIH0pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPExhbmRpbmdQYWdlIGxhbmRpbmdUaXRsZT17XCLsv6Dtj7Ag66qp66Gd7J2EIOqwgOyguOyYpOuKlCDspJHsnoXri4jri6QuLi5cIn0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291cG9uTGlzdFBhZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi8uLi9yZXMvaW1hZ2VzL2xvZ28ucG5nXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICB0aXRsZToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBmb250U2l6ZTogXCIxLjI1cmVtXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxufSkpO1xuXG5pbnRlcmZhY2UgUGFnZUhlYWRlclRpdGxlUHJvcCB7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IFBhZ2VIZWFkZXJUaXRsZSA9ICh7IHRpdGxlIH06IFBhZ2VIZWFkZXJUaXRsZVByb3ApID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+IHt0aXRsZX08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyVGl0bGU7XG4iXSwibmFtZXMiOlsic2VydmljZU9uT2ZmIiwic2xlZXAiLCJnZXRDb3Vwb25MaXN0IiwicmVzdWx0IiwidGVzdENvdXBvblN1bW1hcnkiLCJwcm9OYW1lIiwiY291cG9uTGVzc29uVHlwZSIsInJlbWFpbmluZ0NvdW50IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1ha2VTdHlsZXMiLCJ1c2VSb3V0ZU1hdGNoIiwiUGFnZUhlYWRlclRpdGxlIiwiTGFuZGluZ1BhZ2UiLCJDb3Vwb25MaXN0UGFnZSIsInBhcmFtcyIsImNvbnBvbkxpc3QiLCJzZXRDb25wb25MaXN0IiwibG9hZENvdXBvbkxpc3QiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJDb3Vwb25MaXN0UGFnZVZBUHJvcCIsInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleEdyb3ciLCJtYXhXaWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJsZXNzb25MaXN0TGF5b3V0IiwiY29ucG9uQ2FyZCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiQ291cG9uTGlzdFBhZ2VWaWV3IiwiY2xhc3NlcyIsIkNvdXBvbkNhcmQiLCJpdGVtIiwiY291cG9uTGVzc29uVHlwZVRleHQiLCJtYXAiLCJ0aXRsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=