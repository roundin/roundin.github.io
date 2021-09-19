"use strict";
(self["webpackChunkroundin_homepage"] = self["webpackChunkroundin_homepage"] || []).push([["src_utils_common_page_LessonListPage_tsx"],{

/***/ "./src/service/student/getLessonList.ts":
/*!**********************************************!*\
  !*** ./src/service/student/getLessonList.ts ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLessonList": () => (/* binding */ getLessonList)
/* harmony export */ });
/* harmony import */ var _serviceSetting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../serviceSetting */ "./src/service/serviceSetting.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


async function getLessonList(type) {
  let result = undefined;

  if (_serviceSetting__WEBPACK_IMPORTED_MODULE_0__.serviceOnOff === false) {
    if (type === "user") {
      result = testLessonSummaryAma;
      result = result.map(item => {
        return _objectSpread(_objectSpread({}, item), {}, {
          kind: "user"
        });
      });
    } else {
      result = testLessonSummaryPro;
      result = result.map(item => {
        return _objectSpread(_objectSpread({}, item), {}, {
          kind: "pro"
        });
      });
    }

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
const testLessonSummaryAma = [{
  image: "url~",
  connectProName: "박세리",
  lessonType: "letter",
  latestFeedbackContent: "리버스 피봇팅 관련 피드백을 받고 연습을 계속했는데, 여전히 공이 잘 .안맞아요리버스 피봇팅 관련 피드백을 받고 연습을 계속했는데, 여전히 공이 잘 .안맞아요리버스 피봇팅 관련 피드백을 받고 연습을 계속했는데, 여전히 공이 잘 .안맞아요",
  latestFeedbackDate: "2021.08.28 12:28",
  responseStatus: "complete"
}, {
  image: "url~",
  connectProName: "최경주",
  lessonType: "video",
  latestFeedbackContent: "리버스 피봇팅 관련 피드백을 받고 연습을 계속했는데, 여전히 공이 잘 .안맞아요",
  latestFeedbackDate: "2021.08.28 12:28",
  responseStatus: "progress"
}, {
  image: "url~",
  connectProName: "박보검",
  lessonType: "video",
  latestFeedbackContent: "리버스 피봇팅 관련 피드백을 받고 연습을 계속했는데, 여전히 공이 잘 .안맞아요",
  latestFeedbackDate: "2021.08.28 12:28",
  responseStatus: "request"
}];
const testLessonSummaryPro = [{
  image: "url~",
  connectAmaName: "강경석",
  lessonType: "letter",
  latestFeedbackContent: "리버스 피봇팅 관련 피드백을 받고 연습을 계속했는데, 여전히 공이 잘 .안맞아요",
  latestFeedbackDate: "2021.08.28 12:28",
  responseWaitCount: 2
}, {
  image: "url~",
  connectAmaName: "유원상",
  lessonType: "video",
  latestFeedbackContent: "리버스 피봇팅 관련 피드백을 받고 연습을 계속했는데, 여전히 공이 잘 .안맞아요",
  latestFeedbackDate: "2021.08.28 12:28",
  responseWaitCount: 1
}, {
  image: "url~",
  connectAmaName: "최경민",
  lessonType: "video",
  latestFeedbackContent: "리버스 피봇팅 관련 피드백을 받고 연습을 계속했는데, 여전히 공이 잘 .안맞아요",
  latestFeedbackDate: "2021.08.28 12:28",
  responseWaitCount: 0
}];
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getLessonList, "getLessonList", "/Users/gang/StudioProjects/roundin-web/src/service/student/getLessonList.ts");
  reactHotLoader.register(testLessonSummaryAma, "testLessonSummaryAma", "/Users/gang/StudioProjects/roundin-web/src/service/student/getLessonList.ts");
  reactHotLoader.register(testLessonSummaryPro, "testLessonSummaryPro", "/Users/gang/StudioProjects/roundin-web/src/service/student/getLessonList.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/utils/common/page/LessonListPage.tsx":
/*!**************************************************!*\
  !*** ./src/utils/common/page/LessonListPage.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/Chip.js");
/* harmony import */ var _widget_PageHeaderTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widget/PageHeaderTitle */ "./src/utils/common/widget/PageHeaderTitle.tsx");
/* harmony import */ var _LandingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LandingPage */ "./src/utils/common/page/LandingPage.tsx");
/* harmony import */ var _service_student_getLessonList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/student/getLessonList */ "./src/service/student/getLessonList.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









const LessonListPage = () => {
  const {
    params
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useRouteMatch)();
  const [pageHeaderTitle, setPageHeaderTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [lessonSummaryList, setLessonSummaryList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const type = params.type;
    if (type === "user") setPageHeaderTitle("내 지난 레슨 목록");else setPageHeaderTitle("레슨 요청 목록");
  }, [params.type]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadLessonList = async () => {
      const response = await (0,_service_student_getLessonList__WEBPACK_IMPORTED_MODULE_3__.getLessonList)("user");
      if (response) setLessonSummaryList(response);
    };

    loadLessonList();
  }, []); // 미래에 user or pro 정보가 들어감

  const LessonListPageVAProp = {
    pageHeaderTitle: pageHeaderTitle,
    lessonSummaryList: lessonSummaryList
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LessonListPageView, LessonListPageVAProp);
};

__signature__(LessonListPage, "useRouteMatch{{ params }}\nuseState{[pageHeaderTitle, setPageHeaderTitle](\"\")}\nuseState{[lessonSummaryList, setLessonSummaryList]}\nuseEffect{}\nuseEffect{}", () => [react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useRouteMatch]);

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
  }
}));

const LessonListPageView = ({
  pageHeaderTitle,
  lessonSummaryList
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widget_PageHeaderTitle__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: pageHeaderTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.lessonListLayout
  }, lessonSummaryList ? lessonSummaryList.map(item => {
    if (item.kind === "pro") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LessonCardForPro, _extends({
      key: item.connectAmaName
    }, item));else if (item.kind === "user") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LessonCardForAma, _extends({
      key: item.connectProName
    }, item));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LandingPage__WEBPACK_IMPORTED_MODULE_2__.default, {
    landingTitle: "레슨 목록을 가져오는 중입니다..."
  })));
};

__signature__(LessonListPageView, "useStyles{classes}", () => [useStyles]);

const cardStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.default)(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    maxWidth: "500px",
    width: "95vw",
    border: "1px solid",
    borderRadius: "5px",
    marginBottom: "1rem"
  },
  image: {
    backgroundColor: "#E9ECEF",
    width: "25vw",
    height: "25vw",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0.5rem"
  },
  contentLayout: {
    width: "70vw"
  },
  statusLayout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  statusChip: {
    margin: "0px 0.2rem 0px 0.2rem"
  },
  feedbackContent: {
    fontSize: "0.8rem",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    margin: "0.25rem"
  }
}));

const LessonCardForPro = item => {
  const classes = cardStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, item.connectAmaName));
};

const LessonCardForAma = item => {
  const classes = cardStyles();
  let lessonTypeText = "레슨";

  if (item.lessonType === "letter") {
    lessonTypeText = "영상레슨";
  } else if (item.lessonType === "video") {
    lessonTypeText = "문자레슨";
  }

  let responseStatusText = "답변";

  if (item.responseStatus === "complete") {
    responseStatusText = "답변완료";
  } else if (item.responseStatus === "progress") {
    responseStatusText = "답변중";
  } else if (item.responseStatus === "request") {
    responseStatusText = "답변대기";
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.image
  }, item.image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.contentLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, item.latestFeedbackDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.statusLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, item.connectProName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: classes.statusChip,
    size: "small",
    label: lessonTypeText,
    variant: "outlined"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: classes.statusChip,
    size: "small",
    label: responseStatusText,
    variant: "outlined"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.feedbackContent
  }, item.latestFeedbackContent)));
};

const _default = LessonListPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LessonListPage, "LessonListPage", "/Users/gang/StudioProjects/roundin-web/src/utils/common/page/LessonListPage.tsx");
  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/utils/common/page/LessonListPage.tsx");
  reactHotLoader.register(LessonListPageView, "LessonListPageView", "/Users/gang/StudioProjects/roundin-web/src/utils/common/page/LessonListPage.tsx");
  reactHotLoader.register(cardStyles, "cardStyles", "/Users/gang/StudioProjects/roundin-web/src/utils/common/page/LessonListPage.tsx");
  reactHotLoader.register(LessonCardForPro, "LessonCardForPro", "/Users/gang/StudioProjects/roundin-web/src/utils/common/page/LessonListPage.tsx");
  reactHotLoader.register(LessonCardForAma, "LessonCardForAma", "/Users/gang/StudioProjects/roundin-web/src/utils/common/page/LessonListPage.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/utils/common/page/LessonListPage.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3V0aWxzX2NvbW1vbl9wYWdlX0xlc3Nvbkxpc3RQYWdlX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFtQk8sZUFBZUUsYUFBZixDQUNMQyxJQURLLEVBRXlEO0FBQzlELE1BQUlDLE1BQTJELEdBQUdDLFNBQWxFOztBQUVBLE1BQUlMLHlEQUFZLEtBQUssS0FBckIsRUFBNEI7QUFDMUIsUUFBSUcsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkJDLE1BQUFBLE1BQU0sR0FBR0Usb0JBQVQ7QUFDQUYsTUFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUNHLEdBQVAsQ0FBWUMsSUFBRCxJQUFVO0FBQzVCLCtDQUFZQSxJQUFaO0FBQWtCQyxVQUFBQSxJQUFJLEVBQUU7QUFBeEI7QUFDRCxPQUZRLENBQVQ7QUFHRCxLQUxELE1BS087QUFDTEwsTUFBQUEsTUFBTSxHQUFHTSxvQkFBVDtBQUNBTixNQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0csR0FBUCxDQUFZQyxJQUFELElBQVU7QUFDNUIsK0NBQVlBLElBQVo7QUFBa0JDLFVBQUFBLElBQUksRUFBRTtBQUF4QjtBQUNELE9BRlEsQ0FBVDtBQUdEOztBQUNELFVBQU1SLHNEQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsV0FBT0csTUFBUDtBQUNELEdBakI2RCxDQW1COUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBT0EsTUFBUDtBQUNEO0FBRUQsTUFBTUUsb0JBQXdDLEdBQUcsQ0FDL0M7QUFDRUssRUFBQUEsS0FBSyxFQUFFLE1BRFQ7QUFFRUMsRUFBQUEsY0FBYyxFQUFFLEtBRmxCO0FBR0VDLEVBQUFBLFVBQVUsRUFBRSxRQUhkO0FBSUVDLEVBQUFBLHFCQUFxQixFQUNuQixzSUFMSjtBQU1FQyxFQUFBQSxrQkFBa0IsRUFBRSxrQkFOdEI7QUFPRUMs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dkNnQyxFQUFBQSxLQUFLLEVBQUU7QUFDTDlCLElBQUFBLE9BQU8sRUFBRSxNQURKO0FBRUxZLElBQUFBLEtBQUssRUFBRSxNQUZGO0FBR0xVLElBQUFBLFFBQVEsRUFBRSxTQUhMO0FBSUxuQixJQUFBQSxjQUFjLEVBQUUsWUFKWDtBQUtMNEIsSUFBQUEsVUFBVSxFQUFFO0FBTFA7QUFEZ0MsQ0FBWixDQUFELENBQTVCOztBQWNBLE1BQU03QyxlQUFlLEdBQUcsQ0FBQztBQUFFNEMsRUFBQUE7QUFBRixDQUFELEtBQW9DO0FBQzFELFFBQU1wQixPQUFPLEdBQUdiLFNBQVMsRUFBekI7QUFFQSxzQkFBTztBQUFLLGFBQVMsRUFBRWEsT0FBTyxDQUFDb0I7QUFBeEIsVUFBaUNBLEtBQWpDLENBQVA7QUFDRCxDQUpEOztjQUFNNUMsOENBQ1lXOztpQkFLSFg7QUFBZixpRUFBZTs7Ozs7Ozs7OzswQkFwQlRXOzBCQWNBWCIsInNvdXJjZXMiOlsid2VicGFjazovL3JvdW5kaW5faG9tZXBhZ2UvLi9zcmMvc2VydmljZS9zdHVkZW50L2dldExlc3Nvbkxpc3QudHMiLCJ3ZWJwYWNrOi8vcm91bmRpbl9ob21lcGFnZS8uL3NyYy91dGlscy9jb21tb24vcGFnZS9MZXNzb25MaXN0UGFnZS50c3giLCJ3ZWJwYWNrOi8vcm91bmRpbl9ob21lcGFnZS8uL3NyYy91dGlscy9jb21tb24vd2lkZ2V0L1BhZ2VIZWFkZXJUaXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgc2VydmljZU9uT2ZmLCBzbGVlcCB9IGZyb20gXCIuLi9zZXJ2aWNlU2V0dGluZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExlc3NvblN1bW1hcnkge1xuICBpbWFnZTogc3RyaW5nO1xuICBsZXNzb25UeXBlOiBcImxldHRlclwiIHwgXCJ2aWRlb1wiO1xuICBsYXRlc3RGZWVkYmFja0NvbnRlbnQ6IHN0cmluZztcbiAgbGF0ZXN0RmVlZGJhY2tEYXRlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIExlc3NvblN1bW1hcnlBbWEgZXh0ZW5kcyBMZXNzb25TdW1tYXJ5IHtcbiAgcmVzcG9uc2VTdGF0dXM6IFwicmVxdWVzdFwiIHwgXCJwcm9ncmVzc1wiIHwgXCJjb21wbGV0ZVwiO1xuICBjb25uZWN0UHJvTmFtZTogc3RyaW5nO1xuICBraW5kPzogXCJ1c2VyXCI7XG59XG5leHBvcnQgaW50ZXJmYWNlIExlc3NvblN1bW1hcnlQcm8gZXh0ZW5kcyBMZXNzb25TdW1tYXJ5IHtcbiAgcmVzcG9uc2VXYWl0Q291bnQ6IG51bWJlcjtcbiAgY29ubmVjdEFtYU5hbWU6IHN0cmluZztcbiAga2luZD86IFwicHJvXCI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMZXNzb25MaXN0KFxuICB0eXBlOiBcInVzZXJcIiB8IFwicHJvXCJcbik6IFByb21pc2U8TGVzc29uU3VtbWFyeUFtYVtdIHwgTGVzc29uU3VtbWFyeVByb1tdIHwgdW5kZWZpbmVkPiB7XG4gIGxldCByZXN1bHQ6IExlc3NvblN1bW1hcnlBbWFbXSB8IExlc3NvblN1bW1hcnlQcm9bXSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBpZiAoc2VydmljZU9uT2ZmID09PSBmYWxzZSkge1xuICAgIGlmICh0eXBlID09PSBcInVzZXJcIikge1xuICAgICAgcmVzdWx0ID0gdGVzdExlc3NvblN1bW1hcnlBbWE7XG4gICAgICByZXN1bHQgPSByZXN1bHQubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGtpbmQ6IFwidXNlclwiIH07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gdGVzdExlc3NvblN1bW1hcnlQcm87XG4gICAgICByZXN1bHQgPSByZXN1bHQubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGtpbmQ6IFwicHJvXCIgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBhd2FpdCBzbGVlcCgyMDAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gYXdhaXQgYXhpb3Moe1xuICAvLyAgIG1ldGhvZDogXCJwb3N0XCIsXG4gIC8vICAgdXJsOiBcIlwiLFxuICAvLyAgIGhlYWRlcnM6IHtcbiAgLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAvLyAgIH0sXG4gIC8vICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe30pLFxuICAvLyB9KVxuICAvLyAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAvLyAgICAgcmVzdWx0ID0gcmVzcG9uc2UuZGF0YTtcbiAgLy8gICB9KVxuICAvLyAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5jb25zdCB0ZXN0TGVzc29uU3VtbWFyeUFtYTogTGVzc29uU3VtbWFyeUFtYVtdID0gW1xuICB7XG4gICAgaW1hZ2U6IFwidXJsflwiLFxuICAgIGNvbm5lY3RQcm9OYW1lOiBcIuuwleyEuOumrFwiLFxuICAgIGxlc3NvblR5cGU6IFwibGV0dGVyXCIsXG4gICAgbGF0ZXN0RmVlZGJhY2tDb250ZW50OlxuICAgICAgXCLrpqzrsoTsiqQg7ZS867SH7YyFIOq0gOugqCDtlLzrk5zrsLHsnYQg67Cb6rOgIOyXsOyKteydhCDqs4Tsho3tlojripTrjbAsIOyXrOyghO2eiCDqs7XsnbQg7J6YIC7slYjrp57slYTsmpTrpqzrsoTsiqQg7ZS867SH7YyFIOq0gOugqCDtlLzrk5zrsLHsnYQg67Cb6rOgIOyXsOyKteydhCDqs4Tsho3tlojripTrjbAsIOyXrOyghO2eiCDqs7XsnbQg7J6YIC7slYjrp57slYTsmpTrpqzrsoTsiqQg7ZS867SH7YyFIOq0gOugqCDtlLzrk5zrsLHsnYQg67Cb6rOgIOyXsOyKteydhCDqs4Tsho3tlojripTrjbAsIOyXrOyghO2eiCDqs7XsnbQg7J6YIC7slYjrp57slYTsmpRcIixcbiAgICBsYXRlc3RGZWVkYmFja0RhdGU6IFwiMjAyMS4wOC4yOCAxMjoyOFwiLFxuICAgIHJlc3BvbnNlU3RhdHVzOiBcImNvbXBsZXRlXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogXCJ1cmx+XCIsXG4gICAgY29ubmVjdFByb05hbWU6IFwi7LWc6rK97KO8XCIsXG4gICAgbGVzc29uVHlwZTogXCJ2aWRlb1wiLFxuICAgIGxhdGVzdEZlZWRiYWNrQ29udGVudDogXCLrpqzrsoTsiqQg7ZS867SH7YyFIOq0gOugqCDtlLzrk5zrsLHsnYQg67Cb6rOgIOyXsOyKteydhCDqs4Tsho3tlojripTrjbAsIOyXrOyghO2eiCDqs7XsnbQg7J6YIC7slYjrp57slYTsmpRcIixcbiAgICBsYXRlc3RGZWVkYmFja0RhdGU6IFwiMjAyMS4wOC4yOCAxMjoyOFwiLFxuICAgIHJlc3BvbnNlU3RhdHVzOiBcInByb2dyZXNzXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogXCJ1cmx+XCIsXG4gICAgY29ubmVjdFByb05hbWU6IFwi67CV67O06rKAXCIsXG4gICAgbGVzc29uVHlwZTogXCJ2aWRlb1wiLFxuICAgIGxhdGVzdEZlZWRiYWNrQ29udGVudDogXCLrpqzrsoTsiqQg7ZS867SH7YyFIOq0gOugqCDtlLzrk5zrsLHsnYQg67Cb6rOgIOyXsOyKteydhCDqs4Tsho3tlojripTrjbAsIOyXrOyghO2eiCDqs7XsnbQg7J6YIC7slYjrp57slYTsmpRcIixcbiAgICBsYXRlc3RGZWVkYmFja0RhdGU6IFwiMjAyMS4wOC4yOCAxMjoyOFwiLFxuICAgIHJlc3BvbnNlU3RhdHVzOiBcInJlcXVlc3RcIixcbiAgfSxcbl07XG5cbmNvbnN0IHRlc3RMZXNzb25TdW1tYXJ5UHJvOiBMZXNzb25TdW1tYXJ5UHJvW10gPSBbXG4gIHtcbiAgICBpbWFnZTogXCJ1cmx+XCIsXG4gICAgY29ubmVjdEFtYU5hbWU6IFwi6rCV6rK97ISdXCIsXG4gICAgbGVzc29uVHlwZTogXCJsZXR0ZXJcIixcbiAgICBsYXRlc3RGZWVkYmFja0NvbnRlbnQ6IFwi66as67KE7IqkIO2UvOu0h+2MhSDqtIDroKgg7ZS865Oc67Cx7J2EIOuwm+qzoCDsl7DsirXsnYQg6rOE7IaN7ZaI64qU642wLCDsl6zsoITtnogg6rO17J20IOyemCAu7JWI66ee7JWE7JqUXCIsXG4gICAgbGF0ZXN0RmVlZGJhY2tEYXRlOiBcIjIwMjEuMDguMjggMTI6MjhcIixcbiAgICByZXNwb25zZVdhaXRDb3VudDogMixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBcInVybH5cIixcbiAgICBjb25uZWN0QW1hTmFtZTogXCLsnKDsm5Dsg4FcIixcbiAgICBsZXNzb25UeXBlOiBcInZpZGVvXCIsXG4gICAgbGF0ZXN0RmVlZGJhY2tDb250ZW50OiBcIuumrOuyhOyKpCDtlLzrtIftjIUg6rSA66CoIO2UvOuTnOuwseydhCDrsJvqs6Ag7Jew7Iq17J2EIOqzhOyGje2WiOuKlOuNsCwg7Jes7KCE7Z6IIOqzteydtCDsnpggLuyViOunnuyVhOyalFwiLFxuICAgIGxhdGVzdEZlZWRiYWNrRGF0ZTogXCIyMDIxLjA4LjI4IDEyOjI4XCIsXG4gICAgcmVzcG9uc2VXYWl0Q291bnQ6IDEsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogXCJ1cmx+XCIsXG4gICAgY29ubmVjdEFtYU5hbWU6IFwi7LWc6rK966+8XCIsXG4gICAgbGVzc29uVHlwZTogXCJ2aWRlb1wiLFxuICAgIGxhdGVzdEZlZWRiYWNrQ29udGVudDogXCLrpqzrsoTsiqQg7ZS867SH7YyFIOq0gOugqCDtlLzrk5zrsLHsnYQg67Cb6rOgIOyXsOyKteydhCDqs4Tsho3tlojripTrjbAsIOyXrOyghO2eiCDqs7XsnbQg7J6YIC7slYjrp57slYTsmpRcIixcbiAgICBsYXRlc3RGZWVkYmFja0RhdGU6IFwiMjAyMS4wOC4yOCAxMjoyOFwiLFxuICAgIHJlc3BvbnNlV2FpdENvdW50OiAwLFxuICB9LFxuXTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVNYXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQ2hpcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcFwiO1xuaW1wb3J0IFBhZ2VIZWFkZXJUaXRsZSBmcm9tIFwiLi4vd2lkZ2V0L1BhZ2VIZWFkZXJUaXRsZVwiO1xuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gXCIuL0xhbmRpbmdQYWdlXCI7XG5pbXBvcnQgeyBMZXNzb25TdW1tYXJ5QW1hLCBMZXNzb25TdW1tYXJ5UHJvLCBnZXRMZXNzb25MaXN0IH0gZnJvbSBcIkBzcmMvc2VydmljZS9zdHVkZW50L2dldExlc3Nvbkxpc3RcIjtcblxuY29uc3QgTGVzc29uTGlzdFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcGFyYW1zIH0gPSB1c2VSb3V0ZU1hdGNoPHsgdHlwZTogc3RyaW5nIH0+KCk7XG4gIGNvbnN0IFtwYWdlSGVhZGVyVGl0bGUsIHNldFBhZ2VIZWFkZXJUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbbGVzc29uU3VtbWFyeUxpc3QsIHNldExlc3NvblN1bW1hcnlMaXN0XSA9IHVzZVN0YXRlPExlc3NvblN1bW1hcnlBbWFbXSB8IExlc3NvblN1bW1hcnlQcm9bXT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbXMudHlwZTtcbiAgICBpZiAodHlwZSA9PT0gXCJ1c2VyXCIpIHNldFBhZ2VIZWFkZXJUaXRsZShcIuuCtCDsp4Drgpwg66CI7IqoIOuqqeuhnVwiKTtcbiAgICBlbHNlIHNldFBhZ2VIZWFkZXJUaXRsZShcIuugiOyKqCDsmpTssq0g66qp66GdXCIpO1xuICB9LCBbcGFyYW1zLnR5cGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRMZXNzb25MaXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRMZXNzb25MaXN0KFwidXNlclwiKTtcbiAgICAgIGlmIChyZXNwb25zZSkgc2V0TGVzc29uU3VtbWFyeUxpc3QocmVzcG9uc2UpO1xuICAgIH07XG4gICAgbG9hZExlc3Nvbkxpc3QoKTtcbiAgfSwgW10pOyAvLyDrr7jrnpjsl5AgdXNlciBvciBwcm8g7KCV67O06rCAIOuTpOyWtOqwkFxuXG4gIGNvbnN0IExlc3Nvbkxpc3RQYWdlVkFQcm9wOiBMZXNzb25MaXN0UGFnZVZBUHJvcCA9IHtcbiAgICBwYWdlSGVhZGVyVGl0bGU6IHBhZ2VIZWFkZXJUaXRsZSxcbiAgICBsZXNzb25TdW1tYXJ5TGlzdDogbGVzc29uU3VtbWFyeUxpc3QsXG4gIH07XG4gIHJldHVybiA8TGVzc29uTGlzdFBhZ2VWaWV3IHsuLi5MZXNzb25MaXN0UGFnZVZBUHJvcH0gLz47XG59O1xuXG5pbnRlcmZhY2UgTGVzc29uTGlzdFBhZ2VWQVByb3Age1xuICBwYWdlSGVhZGVyVGl0bGU6IHN0cmluZztcbiAgbGVzc29uU3VtbWFyeUxpc3Q6IExlc3NvblN1bW1hcnlBbWFbXSB8IExlc3NvblN1bW1hcnlQcm9bXSB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgbWF4V2lkdGg6IFwiNTAwcHhcIixcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXG4gIH0sXG4gIGxlc3Nvbkxpc3RMYXlvdXQ6IHtcbiAgICBtYXJnaW46IFwiMXJlbVwiLFxuICB9LFxufSkpO1xuXG5jb25zdCBMZXNzb25MaXN0UGFnZVZpZXcgPSAoeyBwYWdlSGVhZGVyVGl0bGUsIGxlc3NvblN1bW1hcnlMaXN0IH06IExlc3Nvbkxpc3RQYWdlVkFQcm9wKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPFBhZ2VIZWFkZXJUaXRsZSB0aXRsZT17cGFnZUhlYWRlclRpdGxlfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGVzc29uTGlzdExheW91dH0+XG4gICAgICAgIHtsZXNzb25TdW1tYXJ5TGlzdCA/IChcbiAgICAgICAgICBsZXNzb25TdW1tYXJ5TGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmtpbmQgPT09IFwicHJvXCIpIHJldHVybiA8TGVzc29uQ2FyZEZvclBybyBrZXk9e2l0ZW0uY29ubmVjdEFtYU5hbWV9IHsuLi5pdGVtfSAvPjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0ua2luZCA9PT0gXCJ1c2VyXCIpIHJldHVybiA8TGVzc29uQ2FyZEZvckFtYSBrZXk9e2l0ZW0uY29ubmVjdFByb05hbWV9IHsuLi5pdGVtfSAvPjtcbiAgICAgICAgICB9KVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxMYW5kaW5nUGFnZSBsYW5kaW5nVGl0bGU9e1wi66CI7IqoIOuqqeuhneydhCDqsIDsoLjsmKTripQg7KSR7J6F64uI64ukLi4uXCJ9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGNhcmRTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgbWF4V2lkdGg6IFwiNTAwcHhcIixcbiAgICB3aWR0aDogXCI5NXZ3XCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxuICB9LFxuICBpbWFnZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRTlFQ0VGXCIsXG4gICAgd2lkdGg6IFwiMjV2d1wiLFxuICAgIGhlaWdodDogXCIyNXZ3XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIG1hcmdpbjogXCIwLjVyZW1cIixcbiAgfSxcbiAgY29udGVudExheW91dDoge1xuICAgIHdpZHRoOiBcIjcwdndcIixcbiAgfSxcbiAgc3RhdHVzTGF5b3V0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9LFxuICBzdGF0dXNDaGlwOiB7XG4gICAgbWFyZ2luOiBcIjBweCAwLjJyZW0gMHB4IDAuMnJlbVwiLFxuICB9LFxuICBmZWVkYmFja0NvbnRlbnQ6IHtcbiAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcbiAgICBkaXNwbGF5OiBcIi13ZWJraXQtYm94XCIsXG4gICAgV2Via2l0TGluZUNsYW1wOiAzLFxuICAgIFdlYmtpdEJveE9yaWVudDogXCJ2ZXJ0aWNhbFwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIG1hcmdpbjogXCIwLjI1cmVtXCIsXG4gIH0sXG59KSk7XG5cbmNvbnN0IExlc3NvbkNhcmRGb3JQcm8gPSAoaXRlbTogTGVzc29uU3VtbWFyeVBybykgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gY2FyZFN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdj57aXRlbS5jb25uZWN0QW1hTmFtZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IExlc3NvbkNhcmRGb3JBbWEgPSAoaXRlbTogTGVzc29uU3VtbWFyeUFtYSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gY2FyZFN0eWxlcygpO1xuICBsZXQgbGVzc29uVHlwZVRleHQgPSBcIuugiOyKqFwiO1xuICBpZiAoaXRlbS5sZXNzb25UeXBlID09PSBcImxldHRlclwiKSB7XG4gICAgbGVzc29uVHlwZVRleHQgPSBcIuyYgeyDgeugiOyKqFwiO1xuICB9IGVsc2UgaWYgKGl0ZW0ubGVzc29uVHlwZSA9PT0gXCJ2aWRlb1wiKSB7XG4gICAgbGVzc29uVHlwZVRleHQgPSBcIuusuOyekOugiOyKqFwiO1xuICB9XG5cbiAgbGV0IHJlc3BvbnNlU3RhdHVzVGV4dCA9IFwi64u167OAXCI7XG4gIGlmIChpdGVtLnJlc3BvbnNlU3RhdHVzID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICByZXNwb25zZVN0YXR1c1RleHQgPSBcIuuLteuzgOyZhOujjFwiO1xuICB9IGVsc2UgaWYgKGl0ZW0ucmVzcG9uc2VTdGF0dXMgPT09IFwicHJvZ3Jlc3NcIikge1xuICAgIHJlc3BvbnNlU3RhdHVzVGV4dCA9IFwi64u167OA7KSRXCI7XG4gIH0gZWxzZSBpZiAoaXRlbS5yZXNwb25zZVN0YXR1cyA9PT0gXCJyZXF1ZXN0XCIpIHtcbiAgICByZXNwb25zZVN0YXR1c1RleHQgPSBcIuuLteuzgOuMgOq4sFwiO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT57aXRlbS5pbWFnZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRMYXlvdXR9PlxuICAgICAgICA8ZGl2PntpdGVtLmxhdGVzdEZlZWRiYWNrRGF0ZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3RhdHVzTGF5b3V0fT5cbiAgICAgICAgICA8ZGl2PntpdGVtLmNvbm5lY3RQcm9OYW1lfTwvZGl2PlxuICAgICAgICAgIDxDaGlwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGF0dXNDaGlwfSBzaXplPVwic21hbGxcIiBsYWJlbD17bGVzc29uVHlwZVRleHR9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XG4gICAgICAgICAgPENoaXAgY2xhc3NOYW1lPXtjbGFzc2VzLnN0YXR1c0NoaXB9IHNpemU9XCJzbWFsbFwiIGxhYmVsPXtyZXNwb25zZVN0YXR1c1RleHR9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mZWVkYmFja0NvbnRlbnR9PntpdGVtLmxhdGVzdEZlZWRiYWNrQ29udGVudH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IExlc3Nvbkxpc3RQYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vLi4vcmVzL2ltYWdlcy9sb2dvLnBuZ1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZm9udFNpemU6IFwiMS4yNXJlbVwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIFBhZ2VIZWFkZXJUaXRsZVByb3Age1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBQYWdlSGVhZGVyVGl0bGUgPSAoeyB0aXRsZSB9OiBQYWdlSGVhZGVyVGl0bGVQcm9wKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PiB7dGl0bGV9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlYWRlclRpdGxlO1xuIl0sIm5hbWVzIjpbInNlcnZpY2VPbk9mZiIsInNsZWVwIiwiZ2V0TGVzc29uTGlzdCIsInR5cGUiLCJyZXN1bHQiLCJ1bmRlZmluZWQiLCJ0ZXN0TGVzc29uU3VtbWFyeUFtYSIsIm1hcCIsIml0ZW0iLCJraW5kIiwidGVzdExlc3NvblN1bW1hcnlQcm8iLCJpbWFnZSIsImNvbm5lY3RQcm9OYW1lIiwibGVzc29uVHlwZSIsImxhdGVzdEZlZWRiYWNrQ29udGVudCIsImxhdGVzdEZlZWRiYWNrRGF0ZSIsInJlc3BvbnNlU3RhdHVzIiwiY29ubmVjdEFtYU5hbWUiLCJyZXNwb25zZVdhaXRDb3VudCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtYWtlU3R5bGVzIiwidXNlUm91dGVNYXRjaCIsIkNoaXAiLCJQYWdlSGVhZGVyVGl0bGUiLCJMYW5kaW5nUGFnZSIsIkxlc3Nvbkxpc3RQYWdlIiwicGFyYW1zIiwicGFnZUhlYWRlclRpdGxlIiwic2V0UGFnZUhlYWRlclRpdGxlIiwibGVzc29uU3VtbWFyeUxpc3QiLCJzZXRMZXNzb25TdW1tYXJ5TGlzdCIsImxvYWRMZXNzb25MaXN0IiwicmVzcG9uc2UiLCJMZXNzb25MaXN0UGFnZVZBUHJvcCIsInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleEdyb3ciLCJtYXhXaWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJsZXNzb25MaXN0TGF5b3V0IiwiTGVzc29uTGlzdFBhZ2VWaWV3IiwiY2xhc3NlcyIsImNhcmRTdHlsZXMiLCJ3aWR0aCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImNvbnRlbnRMYXlvdXQiLCJzdGF0dXNMYXlvdXQiLCJzdGF0dXNDaGlwIiwiZmVlZGJhY2tDb250ZW50IiwiZm9udFNpemUiLCJXZWJraXRMaW5lQ2xhbXAiLCJXZWJraXRCb3hPcmllbnQiLCJvdmVyZmxvdyIsIkxlc3NvbkNhcmRGb3JQcm8iLCJMZXNzb25DYXJkRm9yQW1hIiwibGVzc29uVHlwZVRleHQiLCJyZXNwb25zZVN0YXR1c1RleHQiLCJ0aXRsZSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9