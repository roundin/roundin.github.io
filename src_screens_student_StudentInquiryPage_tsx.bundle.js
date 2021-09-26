"use strict";
(self["webpackChunkroundin_homepage"] = self["webpackChunkroundin_homepage"] || []).push([["src_screens_student_StudentInquiryPage_tsx"],{

/***/ "./src/screens/student/StudentInquiryPage.tsx":
/*!****************************************************!*\
  !*** ./src/screens/student/StudentInquiryPage.tsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _stores_StudentStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/StudentStore */ "./src/stores/StudentStore.ts");
/* harmony import */ var _widget_TeacherInquiryProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget/TeacherInquiryProfile */ "./src/screens/student/widget/TeacherInquiryProfile.tsx");
/* harmony import */ var _widget_ToastText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget/ToastText */ "./src/screens/student/widget/ToastText.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
- owner: @강경석
- contributor: @강경석
- function: Student 메인 홈
- screen: A_02
- comment: 학생 기준으로 선생에게 문의하는 페이지
**/









const StudentInquiryPage = ({}) => {
  const clickedTeacher = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_stores_StudentStore__WEBPACK_IMPORTED_MODULE_2__.clickedTeacherState);
  let history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();

  const openNewLessonPage = () => {
    history.push(`/student/inquiryLesson/${clickedTeacher.teacherName}`);
  };

  const StudentInquiryPageVAProp = {
    targetTeacher: clickedTeacher,
    openNewLessonPage: openNewLessonPage
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StudentInquiryPageView, StudentInquiryPageVAProp);
};

__signature__(StudentInquiryPage, "useRecoilValue{clickedTeacher}\nuseHistory{history}", () => [recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue, react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory]);

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)(theme => ({
  StudentInquiryPage: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    maxWidth: "500px",
    margin: "auto"
  },
  toastLayout: {
    display: "flex",
    width: "90%"
  },
  buttonLayout: {
    display: "flex",
    "& > button": {
      margin: "0.5rem",
      padding: "0.5rem 2.5rem",
      background: "#F5F6F8",
      color: "#4C5464",
      "& > .MuiButton-label": {
        whiteSpace: "nowrap"
      }
    }
  }
}));

const StudentInquiryPageView = ({
  targetTeacher,
  openNewLessonPage
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.StudentInquiryPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widget_TeacherInquiryProfile__WEBPACK_IMPORTED_MODULE_3__.default, targetTeacher), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.toastLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widget_ToastText__WEBPACK_IMPORTED_MODULE_4__.default, {
    type: "close"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.buttonLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
    variant: "contained",
    onClick: openNewLessonPage,
    disableElevation: true
  }, "\uBB38\uC790 \uB808\uC2A8 \uC2E0\uCCAD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
    variant: "contained",
    onClick: openNewLessonPage,
    disableElevation: true
  }, "\uC601\uC0C1 \uB808\uC2A8 \uC2E0\uCCAD")));
};

__signature__(StudentInquiryPageView, "useStyles{classes}", () => [useStyles]);

const _default = StudentInquiryPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StudentInquiryPage, "StudentInquiryPage", "/Users/gang/StudioProjects/roundin-web/src/screens/student/StudentInquiryPage.tsx");
  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/screens/student/StudentInquiryPage.tsx");
  reactHotLoader.register(StudentInquiryPageView, "StudentInquiryPageView", "/Users/gang/StudioProjects/roundin-web/src/screens/student/StudentInquiryPage.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/screens/student/StudentInquiryPage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/screens/student/widget/TeacherInquiryProfile.tsx":
/*!**************************************************************!*\
  !*** ./src/screens/student/widget/TeacherInquiryProfile.tsx ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _res_images_student_teacherProfileDefaultBackground_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../res/images/student/teacherProfileDefaultBackground.png */ "./res/images/student/teacherProfileDefaultBackground.png");
/* harmony import */ var _utils_common_customHook_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/common/customHook/useWindowDimensions */ "./src/utils/common/customHook/useWindowDimensions.tsx");
/* harmony import */ var _mui_icons_material_HistoryEdu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/HistoryEdu */ "./node_modules/@mui/icons-material/HistoryEdu.js");
/* harmony import */ var _utils_common_widget_ImgWithSupportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/common/widget/ImgWithSupportError */ "./src/utils/common/widget/ImgWithSupportError.tsx");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/YouTube */ "./node_modules/@mui/icons-material/YouTube.js");
/* harmony import */ var _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Instagram */ "./node_modules/@mui/icons-material/Instagram.js");
/* harmony import */ var _mui_icons_material_CallMade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/CallMade */ "./node_modules/@mui/icons-material/CallMade.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};














const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default)(theme => ({
  teacherInquiryProfile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    maxWidth: "500px",
    width: "100%"
  },
  profileBackground: {
    width: "100%"
  },
  profileImg: {
    display: "flex",
    width: "90%",
    position: "relative",
    "& > img": {
      borderRadius: "100%",
      width: "20%",
      maxWidth: "100px",
      backgroundColor: "#fff",
      padding: "5px"
    },
    "& > div": {
      display: "flex",
      alignItems: "flex-end",
      padding: "0.2rem",
      "& > span": {
        fontSize: "1.25rem",
        fontWeight: "bold"
      }
    }
  },
  introductionLayout: {
    display: "flex",
    width: "90%",
    flexDirection: "column",
    marginBlockEnd: "1rem",
    "& > h5": {
      marginBlock: "5px"
    },
    "& > div": {
      fontSize: "0.75rem",
      marginBlock: "0.5rem"
    }
  },
  historyLayout: {
    display: "flex",
    width: "90%",
    marginBlockEnd: "1rem",
    flexDirection: "column",
    "& > h5": {
      marginBlock: "5px"
    }
  },
  recommendLayout: {
    display: "flex",
    width: "90%",
    flexDirection: "column",
    marginBlockEnd: "1rem",
    "& > h5": {
      marginBlock: "5px"
    },
    "& > div": {
      fontSize: "0.75rem",
      marginBlock: "0.5rem"
    }
  },
  snsLayout: {
    display: "flex",
    width: "90%",
    flexDirection: "column",
    marginBlockEnd: "1rem",
    "& > h5": {
      marginBlock: "5px"
    },
    "& > div": {
      fontSize: "0.75rem",
      marginBlock: "0.5rem"
    }
  }
}));
const StyledListItem = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.default)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6__.default)({
  "& .MuiTypography-root": {
    fontSize: "0.75rem"
  },
  "& .MuiListItemIcon-root": {
    minWidth: "2rem"
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.25rem"
  }
});

const TeacherInquiryProfile = teacher => {
  const classes = useStyles();
  const windowDimensions = (0,_utils_common_customHook_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__.default)();
  const tempHistoryList = ["골프스포츠지도사 골프등급 2급", "골프 자격증 멋진 골프", "나의근육사용설명서 해부학적 운동 골프마스터"];
  const tempRecommendText = "이용희프로님 너무 잘가르치시고 너무 좋습니다 이용희프로님 너무 잘가르치시고 너무 좋습니다 필드에서 바로 적용할수 있는 내용을 모태로 만들어졌습니다 용아저씨 채널을 통해서 여러분의 골프실력이 한발더 싱글로 가까이 가기를 기원합니다 ~~^^^";

  const openSNS = url => {
    window.open(url);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.teacherInquiryProfile
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_widget_ImgWithSupportError__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: classes.profileBackground,
    imgSrc: _res_images_student_teacherProfileDefaultBackground_png__WEBPACK_IMPORTED_MODULE_1__,
    altText: `${teacher.teacherName} 배경 사진`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.profileImg,
    style: {
      top: windowDimensions.width < 500 ? "calc(-10vw - 5px)" : "-50px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_widget_ImgWithSupportError__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: classes.profileBackground,
    imgSrc: teacher.profileImage,
    altText: `${teacher.teacherName} 프로 사진`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, teacher.teacherName), "\xA0\uD504\uB85C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.introductionLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uC18C\uAC1C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, teacher.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.historyLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uACBD\uB825"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_7__.default, {
    sx: {
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper"
    },
    dense: true
  }, tempHistoryList.map(history => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledListItem, {
      disableGutters: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_HistoryEdu__WEBPACK_IMPORTED_MODULE_9__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__.default, {
      primary: history
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.recommendLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uCD94\uCC9C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, tempRecommendText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.snsLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "SNS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_7__.default, {
    sx: {
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper"
    },
    dense: true
  }, teacher.links.map(link => {
    var _link$url;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledListItem, {
      disableGutters: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.default, null, link.service === "youtube" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_11__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_12__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__.default, {
      primary: link.url
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__.default, {
      color: "primary",
      component: "span",
      disabled: (link === null || link === void 0 ? void 0 : (_link$url = link.url) === null || _link$url === void 0 ? void 0 : _link$url.length) == 0,
      onClick: () => {
        openSNS(link.url);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CallMade__WEBPACK_IMPORTED_MODULE_14__.default, null)));
  }))));
};

__signature__(TeacherInquiryProfile, "useStyles{classes}\nuseWindowDimensions{windowDimensions}", () => [useStyles, _utils_common_customHook_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__.default]);

const _default = TeacherInquiryProfile;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/screens/student/widget/TeacherInquiryProfile.tsx");
  reactHotLoader.register(StyledListItem, "StyledListItem", "/Users/gang/StudioProjects/roundin-web/src/screens/student/widget/TeacherInquiryProfile.tsx");
  reactHotLoader.register(TeacherInquiryProfile, "TeacherInquiryProfile", "/Users/gang/StudioProjects/roundin-web/src/screens/student/widget/TeacherInquiryProfile.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/screens/student/widget/TeacherInquiryProfile.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/screens/student/widget/ToastText.tsx":
/*!**************************************************!*\
  !*** ./src/screens/student/widget/ToastText.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Timer */ "./node_modules/@mui/icons-material/Timer.js");
/* harmony import */ var _mui_icons_material_Lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Lock */ "./node_modules/@mui/icons-material/Lock.js");
/* harmony import */ var _mui_icons_material_AllInclusive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/AllInclusive */ "./node_modules/@mui/icons-material/AllInclusive.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)(theme => ({
  toastText: {
    display: "flex",
    marginBlock: "0.25rem",
    width: "100%"
  },
  toastDefault: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    padding: "0.5rem",
    marginInline: "0.1rem",
    borderRadius: "5px",
    fontSize: "0.75rem"
  },
  toastEnough: {
    color: "#D87D3C",
    background: "#FFF8D3"
  },
  toastCloseSoon: {
    color: "#BF3F3F",
    background: "#FFF2F2"
  },
  toastClose: {
    color: "#FFF",
    background: "#4F5057"
  }
}));

const ToastText = ({
  type
}) => {
  const classes = useStyles();
  const textByType = {
    close: "마감했어요. 다음 레슨은 9/13 월요일에 신청 가능해요.",
    closeSoon: "마감 임박! 이번주 레슨권이 세장 남았어요.",
    enough: "36명이 이 레슨을 보고있어요."
  };
  const IconByType = {
    close: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Lock__WEBPACK_IMPORTED_MODULE_3__.default, {
      fontSize: "small"
    }),
    closeSoon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Timer__WEBPACK_IMPORTED_MODULE_4__.default, {
      fontSize: "small"
    }),
    enough: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_AllInclusive__WEBPACK_IMPORTED_MODULE_5__.default, {
      fontSize: "small"
    })
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.toastText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)(classes.toastDefault, {
      [classes.toastEnough]: type === "enough",
      [classes.toastCloseSoon]: type === "closeSoon",
      [classes.toastClose]: type === "close"
    })
  }, IconByType[type], textByType[type]));
};

__signature__(ToastText, "useStyles{classes}", () => [useStyles]);

const _default = ToastText;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/screens/student/widget/ToastText.tsx");
  reactHotLoader.register(ToastText, "ToastText", "/Users/gang/StudioProjects/roundin-web/src/screens/student/widget/ToastText.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/screens/student/widget/ToastText.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/utils/common/customHook/useWindowDimensions.tsx":
/*!*************************************************************!*\
  !*** ./src/utils/common/customHook/useWindowDimensions.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useWindowDimensions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getWindowDimensions());
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}

__signature__(useWindowDimensions, "useState{[windowDimensions, setWindowDimensions](getWindowDimensions())}\nuseEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getWindowDimensions, "getWindowDimensions", "/Users/gang/StudioProjects/roundin-web/src/utils/common/customHook/useWindowDimensions.tsx");
  reactHotLoader.register(useWindowDimensions, "useWindowDimensions", "/Users/gang/StudioProjects/roundin-web/src/utils/common/customHook/useWindowDimensions.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./res/images/student/teacherProfileDefaultBackground.png":
/*!****************************************************************!*\
  !*** ./res/images/student/teacherProfileDefaultBackground.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84da3edec9077059c36f.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmVlbnNfc3R1ZGVudF9TdHVkZW50SW5xdWlyeVBhZ2VfdHN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUlBLE1BQU1RLGtCQUFrQixHQUFHLENBQUMsRUFBRCxLQUFnQztBQUN6RCxRQUFNQyxjQUFjLEdBQUdQLHNEQUFjLENBQUNHLHFFQUFELENBQXJDO0FBQ0EsTUFBSUssT0FBTyxHQUFHVCw0REFBVSxFQUF4Qjs7QUFDQSxRQUFNVSxpQkFBaUIsR0FBRyxNQUFNO0FBQzlCRCxJQUFBQSxPQUFPLENBQUNFLElBQVIsQ0FBYywwQkFBeUJILGNBQWMsQ0FBQ0ksV0FBWSxFQUFsRTtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsd0JBQWtELEdBQUc7QUFDekRDLElBQUFBLGFBQWEsRUFBRU4sY0FEMEM7QUFFekRFLElBQUFBLGlCQUFpQixFQUFFQTtBQUZzQyxHQUEzRDtBQUtBLHNCQUFPLGlEQUFDLHNCQUFELEVBQTRCRyx3QkFBNUIsQ0FBUDtBQUNELENBYkQ7O2NBQU1OLGtGQUNtQk4sb0RBQ1REOztBQWlCaEIsTUFBTWUsU0FBUyxHQUFHYixpRUFBVSxDQUFFYyxLQUFELEtBQVk7QUFDdkNULEVBQUFBLGtCQUFrQixFQUFFO0FBQ2xCVSxJQUFBQSxLQUFLLEVBQUUsTUFEVztBQUVsQkMsSUFBQUEsT0FBTyxFQUFFLE1BRlM7QUFHbEJDLElBQUFBLGFBQWEsRUFBRSxRQUhHO0FBSWxCQyxJQUFBQSxVQUFVLEVBQUUsUUFKTTtBQUtsQkMsSUFBQUEsY0FBYyxFQUFFLFFBTEU7QUFNbEJDLElBQUFBLFFBQVEsRUFBRSxDQU5RO0FBT2xCQyxJQUFBQSxRQUFRLEVBQUUsT0FQUTtBQVFsQkMsSUFBQUEsTUFBTSxFQUFFO0FBUlUsR0FEbUI7QUFXdkNDLEVBQUFBLFdBQVcsRUFBRTtBQUNYUCxJQUFBQSxPQUFPLEVBQUUsTUFERTtBQUVYRCxJQUFBQSxLQUFLLEVBQUU7QUFGSSxHQVgwQjtBQWV2Q1MsRUFBQUEsWUFBWSxFQUFFO0FBQ1pSLElBQUFBLE9BQU8sRUFBRSxNQURHO0FBRVosa0JBQWM7QUFDWk0sTUFBQUEsTUFBTSxFQUFFLFFBREk7QUFFWkcsTUFBQUEsT0FBTyxFQUFFLGVBRkc7QUFHWkMsTUFBQUEsVUFBVSxFQUFFLFNBSEE7QUFJWkMsTUFBQUEsS0FBSyxFQUFFLFNBSks7QUFLWiw4QkFBd0I7QUFDdEJDLFFBQUFBLFVBQVUsRUFBRTtBQURVO0FBTFo7QUFGRjtBQWZ5QixDQUFaLENBQUQsQ0FBNUI7O0FBNkJBLE1BQU1DLHNCQUFzQixHQUFHLENBQUM7QUFBRWpCLEVBQUFBLGFBQUY7QUFBaUJKLEVBQUFBO0FBQWpCLENBQUQsS0FBb0U7QUFDakcsUUFBTXNCLE9BQU8sR0FBR2pCLFNBQVMsRUFBekI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWlCLE9BQU8sQ0FBQ3pCO0FBQXhCLGtCQUNFLGlEQUFDLGtFQUFELEVBQTJCTyxhQUEzQixDQURGLGVBRUU7QUFBSyxhQUFTLEVBQUVrQixPQUFPLENBQUNQO0FBQXhCLGtCQUNFLGlEQUFDLHNEQUFEO0FBQVcsUUFBSSxFQUFFO0FBQWpCLElBREYsQ0FGRixlQUtFO0FBQUssYUFBUyxFQUFFTyxPQUFPLENBQUNOO0FBQXhCLGtCQUNFLGlEQUFDLDZEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQU8sRUFBRWhCLGlCQUFyQztBQUF3RCxvQkFBZ0IsRUFBRTtBQUExRSw4Q0FERixlQUlFLGlEQUFDLDZEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQU8sRUFBRUEsaUJBQXJDO0FBQXdELG9CQUFnQixFQUFFO0FBQTFFLDhDQUpGLENBTEYsQ0FERjtBQWdCRCxDQWxCRDs7Y0FBTXFCLHFEQUNZaEI7O2lCQW1CSFI7QUFBZixpRUFBZTs7Ozs7Ozs7OzswQkFwRVRBOzBCQW1CQVE7MEJBNkJBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFTjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1oQixTQUFTLEdBQUdiLGlFQUFVLENBQUVjLEtBQUQsS0FBWTtBQUN2QzhCLEVBQUFBLHFCQUFxQixFQUFFO0FBQ3JCNUIsSUFBQUEsT0FBTyxFQUFFLE1BRFk7QUFFckJDLElBQUFBLGFBQWEsRUFBRSxRQUZNO0FBR3JCQyxJQUFBQSxVQUFVLEVBQUUsUUFIUztBQUlyQkMsSUFBQUEsY0FBYyxFQUFFLFFBSks7QUFLckJDLElBQUFBLFFBQVEsRUFBRSxDQUxXO0FBTXJCQyxJQUFBQSxRQUFRLEVBQUUsT0FOVztBQU9yQk4sSUFBQUEsS0FBSyxFQUFFO0FBUGMsR0FEZ0I7QUFVdkM4QixFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQjlCLElBQUFBLEtBQUssRUFBRTtBQURVLEdBVm9CO0FBYXZDK0IsRUFBQUEsVUFBVSxFQUFFO0FBQ1Y5QixJQUFBQSxPQUFPLEVBQUUsTUFEQztBQUVWRCxJQUFBQSxLQUFLLEVBQUUsS0FGRztBQUdWZ0MsSUFBQUEsUUFBUSxFQUFFLFVBSEE7QUFJVixlQUFXO0FBQ1RDLE1BQUFBLFlBQVksRUFBRSxNQURMO0FBRVRqQyxNQUFBQSxLQUFLLEVBQUUsS0FGRTtBQUdUTSxNQUFBQSxRQUFRLEVBQUUsT0FIRDtBQUlUNEIsTUFBQUEsZUFBZSxFQUFFLE1BSlI7QUFLVHhCLE1BQUFBLE9BQU8sRUFBRTtBQUxBLEtBSkQ7QUFXVixlQUFXO0FBQ1RULE1BQUFBLE9BQU8sRUFBRSxNQURBO0FBRVRFLE1BQUFBLFVBQVUsRUFBRSxVQUZIO0FBR1RPLE1BQUFBLE9BQU8sRUFBRSxRQUhBO0FBSVQsa0JBQVk7QUFDVnlCLFFBQUFBLFFBQVEsRUFBRSxTQURBO0FBRVZDLFFBQUFBLFVBQVUsRUFBRTtBQUZGO0FBSkg7QUFYRCxHQWIyQjtBQWtDdkNDLEVBQUFBLGtCQUFrQixFQUFFO0FBQ2xCcEMsSUFBQUEsT0FBTyxFQUFFLE1BRFM7QUFFbEJELElBQUFBLEtBQUssRUFBRSxLQUZXO0FBR2xCRSxJQUFBQSxhQUFhLEVBQUUsUUFIRztBQUlsQm9DLElBQUFBLGNBQWMsRUFBRSxNQUpFO0FBS2xCLGNBQVU7QUFDUkMsTUFBQUEsV0FBVyxFQUFFO0FBREwsS0FMUTtBQVFsQixlQUFXO0FBQ1RKLE1BQUFBLFFBQVEsRUFBRSxTQUREO0FBRVRJLE1BQUFBLFdBQVcsRUFBRTtBQUZKO0FBUk8sR0FsQ21CO0FBZ0R2Q0MsRUFBQUEsYUFBYSxFQUFFO0FBQ2J2QyxJQUFBQSxPQUFPLEVBQUUsTUFESTtBQUViRCxJQUFBQSxLQUFLLEVBQUUsS0FGTTtBQUdic0MsSUFBQUEsY0FBYyxFQUFFLE1BSEg7QUFJYnBDLElBQUFBLGFBQWEsRUFBRSxRQUpGO0FBS2IsY0FBVTtBQUNScUMsTUFBQUEsV0FBVyxFQUFFO0FBREw7QUFMRyxHQWhEd0I7QUF5RHZDRSxFQUFBQSxlQUFlLEVBQUU7QUFDZnhDLElBQUFBLE9BQU8sRUFBRSxNQURNO0FBRWZELElBQUFBLEtBQUssRUFBRSxLQUZRO0FBR2ZFLElBQUFBLGFBQWEsRUFBRSxRQUhBO0FBSWZvQyxJQUFBQSxjQUFjLEVBQUUsTUFKRDtBQUtmLGNBQVU7QUFDUkMsTUFBQUEsV0FBVyxFQUFFO0FBREwsS0FMSztBQVFmLGVBQVc7QUFDVEosTUFBQUEsUUFBUSxFQUFFLFNBREQ7QUFFVEksTUFBQUEsV0FBVyxFQUFFO0FBRko7QUFSSSxHQXpEc0I7QUFzRXZDRyxFQUFBQSxTQUFTLEVBQUU7QUFDVHpDLElBQUFBLE9BQU8sRUFBRSxNQURBO0FBRVRELElBQUFBLEtBQUssRUFBRSxLQUZFO0FBR1RFLElBQUFBLGFBQWEsRUFBRSxRQUhOO0FBSVRvQyxJQUFBQSxjQUFjLEVBQUUsTUFKUDtBQUtULGNBQVU7QUFDUkMsTUFBQUEsV0FBVyxFQUFFO0FBREwsS0FMRDtBQVFULGVBQVc7QUFDVEosTUFBQUEsUUFBUSxFQUFFLFNBREQ7QUFFVEksTUFBQUEsV0FBVyxFQUFFO0FBRko7QUFSRjtBQXRFNEIsQ0FBWixDQUFELENBQTVCO0FBcUZBLE1BQU1JLGNBQWMsR0FBRzNCLDZEQUFNLENBQUNNLDJEQUFELENBQU4sQ0FBb0Q7QUFDekUsMkJBQXlCO0FBQ3ZCYSxJQUFBQSxRQUFRLEVBQUU7QUFEYSxHQURnRDtBQUl6RSw2QkFBMkI7QUFDekJTLElBQUFBLFFBQVEsRUFBRTtBQURlLEdBSjhDO0FBT3pFLHdCQUFzQjtBQUNwQlQsSUFBQUEsUUFBUSxFQUFFO0FBRFU7QUFQbUQsQ0FBcEQsQ0FBdkI7O0FBWUEsTUFBTS9DLHFCQUFxQixHQUFJeUQsT0FBRCxJQUFzQjtBQUNsRCxRQUFNOUIsT0FBTyxHQUFHakIsU0FBUyxFQUF6QjtBQUNBLFFBQU1nRCxnQkFBZ0IsR0FBRzVCLHFGQUFtQixFQUE1QztBQUNBLFFBQU02QixlQUFlLEdBQUcsQ0FDdEIsa0JBRHNCLEVBRXRCLGNBRnNCLEVBR3RCLHlCQUhzQixDQUF4QjtBQUtBLFFBQU1DLGlCQUFpQixHQUNyQix1SUFERjs7QUFHQSxRQUFNQyxPQUFPLEdBQUlDLEdBQUQsSUFBaUI7QUFDL0JDLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixHQUFaO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBRW5DLE9BQU8sQ0FBQ2M7QUFBeEIsa0JBQ0UsaURBQUMsNkVBQUQ7QUFDRSxhQUFTLEVBQUVkLE9BQU8sQ0FBQ2UsaUJBRHJCO0FBRUUsVUFBTSxFQUFFYixvRkFGVjtBQUdFLFdBQU8sRUFBRyxHQUFFNEIsT0FBTyxDQUFDbEQsV0FBWTtBQUhsQyxJQURGLGVBTUU7QUFDRSxhQUFTLEVBQUVvQixPQUFPLENBQUNnQixVQURyQjtBQUVFLFNBQUssRUFBRTtBQUNMc0IsTUFBQUEsR0FBRyxFQUFFUCxnQkFBZ0IsQ0FBQzlDLEtBQWpCLEdBQXlCLEdBQXpCLEdBQStCLG1CQUEvQixHQUFxRDtBQURyRDtBQUZULGtCQU1FLGlEQUFDLDZFQUFEO0FBQ0UsYUFBUyxFQUFFZSxPQUFPLENBQUNlLGlCQURyQjtBQUVFLFVBQU0sRUFBRWUsT0FBTyxDQUFDUyxZQUZsQjtBQUdFLFdBQU8sRUFBRyxHQUFFVCxPQUFPLENBQUNsRCxXQUFZO0FBSGxDLElBTkYsZUFXRSwyRUFDRSwrREFBT2tELE9BQU8sQ0FBQ2xELFdBQWYsQ0FERixxQkFYRixDQU5GLGVBcUJFO0FBQUssYUFBUyxFQUFFb0IsT0FBTyxDQUFDc0I7QUFBeEIsa0JBQ0UsNEVBREYsZUFFRSw4REFBTVEsT0FBTyxDQUFDVSxXQUFkLENBRkYsQ0FyQkYsZUF5QkU7QUFBSyxhQUFTLEVBQUV4QyxPQUFPLENBQUN5QjtBQUF4QixrQkFDRSw0RUFERixlQUVFLGlEQUFDLHVEQUFEO0FBQU0sTUFBRSxFQUFFO0FBQUV4QyxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQk0sTUFBQUEsUUFBUSxFQUFFLEdBQTNCO0FBQWdDa0QsTUFBQUEsT0FBTyxFQUFFO0FBQXpDLEtBQVY7QUFBeUUsU0FBSyxFQUFFO0FBQWhGLEtBQ0dULGVBQWUsQ0FBQ1UsR0FBaEIsQ0FBcUJqRSxPQUFELElBQWE7QUFDaEMsd0JBQ0UsaURBQUMsY0FBRDtBQUFnQixvQkFBYztBQUE5QixvQkFDRSxpREFBQyxrREFBRCxxQkFDRSxpREFBQyxtRUFBRCxPQURGLENBREYsZUFJRSxpREFBQyxtREFBRDtBQUFjLGFBQU8sRUFBRUE7QUFBdkIsTUFKRixDQURGO0FBUUQsR0FUQSxDQURILENBRkYsQ0F6QkYsZUF3Q0U7QUFBSyxhQUFTLEVBQUV1QixPQUFPLENBQUMwQjtBQUF4QixrQkFDRSw0RUFERixlQUVFLDhEQUFNTyxpQkFBTixDQUZGLENBeENGLGVBNENFO0FBQUssYUFBUyxFQUFFakMsT0FBTyxDQUFDMkI7QUFBeEIsa0JBQ0UsbUVBREYsZUFFRSxpREFBQyx1REFBRDtBQUFNLE1BQUUsRUFBRTtBQUFFMUMsTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJNLE1BQUFBLFFBQVEsRUFBRSxHQUEzQjtBQUFnQ2tELE1BQUFBLE9BQU8sRUFBRTtBQUF6QyxLQUFWO0FBQXlFLFNBQUssRUFBRTtBQUFoRixLQUNHWCxPQUFPLENBQUNhLEtBQVIsQ0FBY0QsR0FBZCxDQUFtQkUsSUFBRCxJQUFVO0FBQUE7O0FBQzNCLHdCQUNFLGlEQUFDLGNBQUQ7QUFBZ0Isb0JBQWM7QUFBOUIsb0JBQ0UsaURBQUMsa0RBQUQsUUFBZUEsSUFBSSxDQUFDQyxPQUFMLEtBQWlCLFNBQWpCLGdCQUE2QixpREFBQyxpRUFBRCxPQUE3QixnQkFBK0MsaURBQUMsbUVBQUQsT0FBOUQsQ0FERixlQUVFLGlEQUFDLG1EQUFEO0FBQWMsYUFBTyxFQUFFRCxJQUFJLENBQUNUO0FBQTVCLE1BRkYsZUFHRSxpREFBQyxtREFBRDtBQUNFLFdBQUssRUFBQyxTQURSO0FBRUUsZUFBUyxFQUFDLE1BRlo7QUFHRSxjQUFRLEVBQUUsQ0FBQVMsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSix5QkFBQUEsSUFBSSxDQUFFVCxHQUFOLHdEQUFXVyxNQUFYLEtBQXFCLENBSGpDO0FBSUUsYUFBTyxFQUFFLE1BQU07QUFDYlosUUFBQUEsT0FBTyxDQUFDVSxJQUFJLENBQUNULEdBQU4sQ0FBUDtBQUNEO0FBTkgsb0JBUUUsaURBQUMsa0VBQUQsT0FSRixDQUhGLENBREY7QUFnQkQsR0FqQkEsQ0FESCxDQUZGLENBNUNGLENBREY7QUFzRUQsQ0FwRkQ7O2NBQU05RCwyRkFDWVUsV0FDU29COztpQkFvRlo5QjtBQUFmLGlFQUFlOzs7Ozs7Ozs7OzBCQXZMVFU7MEJBcUZBNkM7MEJBWUF2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEhOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1VLFNBQVMsR0FBR2IsaUVBQVUsQ0FBRWMsS0FBRCxLQUFZO0FBQ3ZDbUUsRUFBQUEsU0FBUyxFQUFFO0FBQ1RqRSxJQUFBQSxPQUFPLEVBQUUsTUFEQTtBQUVUc0MsSUFBQUEsV0FBVyxFQUFFLFNBRko7QUFHVHZDLElBQUFBLEtBQUssRUFBRTtBQUhFLEdBRDRCO0FBTXZDbUUsRUFBQUEsWUFBWSxFQUFFO0FBQ1puRSxJQUFBQSxLQUFLLEVBQUUsTUFESztBQUVaQyxJQUFBQSxPQUFPLEVBQUUsTUFGRztBQUdaRyxJQUFBQSxjQUFjLEVBQUUsUUFISjtBQUlaRCxJQUFBQSxVQUFVLEVBQUUsUUFKQTtBQUtaUyxJQUFBQSxLQUFLLEVBQUUsTUFMSztBQU1aRixJQUFBQSxPQUFPLEVBQUUsUUFORztBQU9aMEQsSUFBQUEsWUFBWSxFQUFFLFFBUEY7QUFRWm5DLElBQUFBLFlBQVksRUFBRSxLQVJGO0FBU1pFLElBQUFBLFFBQVEsRUFBRTtBQVRFLEdBTnlCO0FBaUJ2Q2tDLEVBQUFBLFdBQVcsRUFBRTtBQUNYekQsSUFBQUEsS0FBSyxFQUFFLFNBREk7QUFFWEQsSUFBQUEsVUFBVSxFQUFFO0FBRkQsR0FqQjBCO0FBcUJ2QzJELEVBQUFBLGNBQWMsRUFBRTtBQUNkMUQsSUFBQUEsS0FBSyxFQUFFLFNBRE87QUFFZEQsSUFBQUEsVUFBVSxFQUFFO0FBRkUsR0FyQnVCO0FBeUJ2QzRELEVBQUFBLFVBQVUsRUFBRTtBQUNWM0QsSUFBQUEsS0FBSyxFQUFFLE1BREc7QUFFVkQsSUFBQUEsVUFBVSxFQUFFO0FBRkY7QUF6QjJCLENBQVosQ0FBRCxDQUE1Qjs7QUFrQ0EsTUFBTXRCLFNBQVMsR0FBRyxDQUFDO0FBQUVtRixFQUFBQTtBQUFGLENBQUQsS0FBNkI7QUFDN0MsUUFBTXpELE9BQU8sR0FBR2pCLFNBQVMsRUFBekI7QUFDQSxRQUFNMkUsVUFBVSxHQUFHO0FBQ2pCQyxJQUFBQSxLQUFLLEVBQUUsa0NBRFU7QUFFakJDLElBQUFBLFNBQVMsRUFBRSwwQkFGTTtBQUdqQkMsSUFBQUEsTUFBTSxFQUFFO0FBSFMsR0FBbkI7QUFLQSxRQUFNQyxVQUFVLEdBQUc7QUFDakJILElBQUFBLEtBQUssZUFBRSxpREFBQyw2REFBRDtBQUFVLGNBQVEsRUFBRTtBQUFwQixNQURVO0FBRWpCQyxJQUFBQSxTQUFTLGVBQUUsaURBQUMsOERBQUQ7QUFBVyxjQUFRLEVBQUU7QUFBckIsTUFGTTtBQUdqQkMsSUFBQUEsTUFBTSxlQUFFLGlEQUFDLHFFQUFEO0FBQWtCLGNBQVEsRUFBRTtBQUE1QjtBQUhTLEdBQW5CO0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUU3RCxPQUFPLENBQUNtRDtBQUF4QixrQkFDRTtBQUNFLGFBQVMsRUFBRUosNkNBQUksQ0FBQy9DLE9BQU8sQ0FBQ29ELFlBQVQsRUFBdUI7QUFDcEMsT0FBQ3BELE9BQU8sQ0FBQ3NELFdBQVQsR0FBdUJHLElBQUksS0FBSyxRQURJO0FBRXBDLE9BQUN6RCxPQUFPLENBQUN1RCxjQUFULEdBQTBCRSxJQUFJLEtBQUssV0FGQztBQUdwQyxPQUFDekQsT0FBTyxDQUFDd0QsVUFBVCxHQUFzQkMsSUFBSSxLQUFLO0FBSEssS0FBdkI7QUFEakIsS0FPR0ssVUFBVSxDQUFDTCxJQUFELENBUGIsRUFRR0MsVUFBVSxDQUFDRCxJQUFELENBUmIsQ0FERixDQURGO0FBY0QsQ0ExQkQ7O2NBQU1uRix3Q0FDWVM7O2lCQTJCSFQ7QUFBZixpRUFBZTs7Ozs7Ozs7OzswQkE5RFRTOzBCQWtDQVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q047O0FBRUEsU0FBUzJGLG1CQUFULEdBQStCO0FBQzdCLFFBQU07QUFBRUMsSUFBQUEsVUFBVSxFQUFFakYsS0FBZDtBQUFxQmtGLElBQUFBLFdBQVcsRUFBRUM7QUFBbEMsTUFBNkNoQyxNQUFuRDtBQUNBLFNBQU87QUFDTG5ELElBQUFBLEtBREs7QUFFTG1GLElBQUFBO0FBRkssR0FBUDtBQUlEOztBQUVjLFNBQVNqRSxtQkFBVCxHQUErQjtBQUM1QyxRQUFNLENBQUM0QixnQkFBRCxFQUFtQnNDLG1CQUFuQixJQUEwQ04sK0NBQVEsQ0FBQ0UsbUJBQW1CLEVBQXBCLENBQXhEO0FBRUFELEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLGFBQVNNLFlBQVQsR0FBd0I7QUFDdEJELE1BQUFBLG1CQUFtQixDQUFDSixtQkFBbUIsRUFBcEIsQ0FBbkI7QUFDRDs7QUFFRDdCLElBQUFBLE1BQU0sQ0FBQ21DLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRCxZQUFsQztBQUNBLFdBQU8sTUFBTWxDLE1BQU0sQ0FBQ29DLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRixZQUFyQyxDQUFiO0FBQ0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLFNBQU92QyxnQkFBUDtBQUNEOztjQWJ1QjVCOzs7Ozs7Ozs7OzswQkFSZjhEOzBCQVFlOUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3VuZGluX2hvbWVwYWdlLy4vc3JjL3NjcmVlbnMvc3R1ZGVudC9TdHVkZW50SW5xdWlyeVBhZ2UudHN4Iiwid2VicGFjazovL3JvdW5kaW5faG9tZXBhZ2UvLi9zcmMvc2NyZWVucy9zdHVkZW50L3dpZGdldC9UZWFjaGVySW5xdWlyeVByb2ZpbGUudHN4Iiwid2VicGFjazovL3JvdW5kaW5faG9tZXBhZ2UvLi9zcmMvc2NyZWVucy9zdHVkZW50L3dpZGdldC9Ub2FzdFRleHQudHN4Iiwid2VicGFjazovL3JvdW5kaW5faG9tZXBhZ2UvLi9zcmMvdXRpbHMvY29tbW9uL2N1c3RvbUhvb2svdXNlV2luZG93RGltZW5zaW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4tIG93bmVyOiBA6rCV6rK97ISdXG4tIGNvbnRyaWJ1dG9yOiBA6rCV6rK97ISdXG4tIGZ1bmN0aW9uOiBTdHVkZW50IOuplOyduCDtmYhcbi0gc2NyZWVuOiBBXzAyXG4tIGNvbW1lbnQ6IO2VmeyDnSDquLDspIDsnLzroZwg7ISg7IOd7JeQ6rKMIOusuOydmO2VmOuKlCDtjpjsnbTsp4BcbioqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IHsgY2xpY2tlZFRlYWNoZXJTdGF0ZSB9IGZyb20gXCJAc3JjL3N0b3Jlcy9TdHVkZW50U3RvcmVcIjtcbmltcG9ydCB7IFRlYWNoZXIgfSBmcm9tIFwiQHNyYy9zZXJ2aWNlL3N0dWRlbnQvZ2V0VG9waWNUZWFjaGVyR3JvdXBcIjtcbmltcG9ydCBUZWFjaGVySW5xdWlyeVByb2ZpbGUgZnJvbSBcIi4vd2lkZ2V0L1RlYWNoZXJJbnF1aXJ5UHJvZmlsZVwiO1xuaW1wb3J0IFRvYXN0VGV4dCBmcm9tIFwiLi93aWRnZXQvVG9hc3RUZXh0XCI7XG5cbmludGVyZmFjZSBTdHVkZW50SW5xdWlyeVBhZ2VQcm9wIHt9XG5cbmNvbnN0IFN0dWRlbnRJbnF1aXJ5UGFnZSA9ICh7fTogU3R1ZGVudElucXVpcnlQYWdlUHJvcCkgPT4ge1xuICBjb25zdCBjbGlja2VkVGVhY2hlciA9IHVzZVJlY29pbFZhbHVlKGNsaWNrZWRUZWFjaGVyU3RhdGUpO1xuICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3Qgb3Blbk5ld0xlc3NvblBhZ2UgPSAoKSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKGAvc3R1ZGVudC9pbnF1aXJ5TGVzc29uLyR7Y2xpY2tlZFRlYWNoZXIudGVhY2hlck5hbWV9YCk7XG4gIH07XG5cbiAgY29uc3QgU3R1ZGVudElucXVpcnlQYWdlVkFQcm9wOiBTdHVkZW50SW5xdWlyeVBhZ2VWQVByb3AgPSB7XG4gICAgdGFyZ2V0VGVhY2hlcjogY2xpY2tlZFRlYWNoZXIsXG4gICAgb3Blbk5ld0xlc3NvblBhZ2U6IG9wZW5OZXdMZXNzb25QYWdlLFxuICB9O1xuXG4gIHJldHVybiA8U3R1ZGVudElucXVpcnlQYWdlVmlldyB7Li4uU3R1ZGVudElucXVpcnlQYWdlVkFQcm9wfSAvPjtcbn07XG5cbmludGVyZmFjZSBTdHVkZW50SW5xdWlyeVBhZ2VWQVByb3Age1xuICB0YXJnZXRUZWFjaGVyOiBUZWFjaGVyO1xuICBvcGVuTmV3TGVzc29uUGFnZTogKCkgPT4gdm9pZDtcbn1cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBTdHVkZW50SW5xdWlyeVBhZ2U6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgbWFyZ2luOiBcImF1dG9cIixcbiAgfSxcbiAgdG9hc3RMYXlvdXQ6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICB3aWR0aDogXCI5MCVcIixcbiAgfSxcbiAgYnV0dG9uTGF5b3V0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgXCImID4gYnV0dG9uXCI6IHtcbiAgICAgIG1hcmdpbjogXCIwLjVyZW1cIixcbiAgICAgIHBhZGRpbmc6IFwiMC41cmVtIDIuNXJlbVwiLFxuICAgICAgYmFja2dyb3VuZDogXCIjRjVGNkY4XCIsXG4gICAgICBjb2xvcjogXCIjNEM1NDY0XCIsXG4gICAgICBcIiYgPiAuTXVpQnV0dG9uLWxhYmVsXCI6IHtcbiAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgU3R1ZGVudElucXVpcnlQYWdlVmlldyA9ICh7IHRhcmdldFRlYWNoZXIsIG9wZW5OZXdMZXNzb25QYWdlIH06IFN0dWRlbnRJbnF1aXJ5UGFnZVZBUHJvcCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU3R1ZGVudElucXVpcnlQYWdlfT5cbiAgICAgIDxUZWFjaGVySW5xdWlyeVByb2ZpbGUgey4uLnRhcmdldFRlYWNoZXJ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b2FzdExheW91dH0+XG4gICAgICAgIDxUb2FzdFRleHQgdHlwZT17XCJjbG9zZVwifSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25MYXlvdXR9PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtvcGVuTmV3TGVzc29uUGFnZX0gZGlzYWJsZUVsZXZhdGlvbj17dHJ1ZX0+XG4gICAgICAgICAg66y47J6QIOugiOyKqCDsi6Dssq1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e29wZW5OZXdMZXNzb25QYWdlfSBkaXNhYmxlRWxldmF0aW9uPXt0cnVlfT5cbiAgICAgICAgICDsmIHsg4Eg66CI7IqoIOyLoOyyrVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudElucXVpcnlQYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IHRlYWNoZXJQcm9maWxlRGVmYXVsdEJhY2tncm91bmQgZnJvbSBcIkByZXMvaW1hZ2VzL3N0dWRlbnQvdGVhY2hlclByb2ZpbGVEZWZhdWx0QmFja2dyb3VuZC5wbmdcIjtcbmltcG9ydCB7IFRlYWNoZXIgfSBmcm9tIFwiQHNyYy9zZXJ2aWNlL3N0dWRlbnQvZ2V0VG9waWNUZWFjaGVyR3JvdXBcIjtcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCJAc3JjL3V0aWxzL2NvbW1vbi9jdXN0b21Ib29rL3VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcbmltcG9ydCBIaXN0b3J5RWR1SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9IaXN0b3J5RWR1XCI7XG5pbXBvcnQgSW1nV2l0aFN1cHBvcnRFcnJvciBmcm9tIFwiQHNyYy91dGlscy9jb21tb24vd2lkZ2V0L0ltZ1dpdGhTdXBwb3J0RXJyb3JcIjtcbmltcG9ydCBMaXN0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVwiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFlvdVR1YmVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1lvdVR1YmVcIjtcbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0luc3RhZ3JhbVwiO1xuaW1wb3J0IENhbGxNYWRlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9DYWxsTWFkZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgdGVhY2hlcklucXVpcnlQcm9maWxlOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxuICBwcm9maWxlQmFja2dyb3VuZDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgcHJvZmlsZUltZzoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIHdpZHRoOiBcIjkwJVwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgXCImID4gaW1nXCI6IHtcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMDAlXCIsXG4gICAgICB3aWR0aDogXCIyMCVcIixcbiAgICAgIG1heFdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgcGFkZGluZzogXCI1cHhcIixcbiAgICB9LFxuICAgIFwiJiA+IGRpdlwiOiB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1lbmRcIixcbiAgICAgIHBhZGRpbmc6IFwiMC4ycmVtXCIsXG4gICAgICBcIiYgPiBzcGFuXCI6IHtcbiAgICAgICAgZm9udFNpemU6IFwiMS4yNXJlbVwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgaW50cm9kdWN0aW9uTGF5b3V0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtYXJnaW5CbG9ja0VuZDogXCIxcmVtXCIsXG4gICAgXCImID4gaDVcIjoge1xuICAgICAgbWFyZ2luQmxvY2s6IFwiNXB4XCIsXG4gICAgfSxcbiAgICBcIiYgPiBkaXZcIjoge1xuICAgICAgZm9udFNpemU6IFwiMC43NXJlbVwiLFxuICAgICAgbWFyZ2luQmxvY2s6IFwiMC41cmVtXCIsXG4gICAgfSxcbiAgfSxcblxuICBoaXN0b3J5TGF5b3V0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgbWFyZ2luQmxvY2tFbmQ6IFwiMXJlbVwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgXCImID4gaDVcIjoge1xuICAgICAgbWFyZ2luQmxvY2s6IFwiNXB4XCIsXG4gICAgfSxcbiAgfSxcbiAgcmVjb21tZW5kTGF5b3V0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtYXJnaW5CbG9ja0VuZDogXCIxcmVtXCIsXG4gICAgXCImID4gaDVcIjoge1xuICAgICAgbWFyZ2luQmxvY2s6IFwiNXB4XCIsXG4gICAgfSxcbiAgICBcIiYgPiBkaXZcIjoge1xuICAgICAgZm9udFNpemU6IFwiMC43NXJlbVwiLFxuICAgICAgbWFyZ2luQmxvY2s6IFwiMC41cmVtXCIsXG4gICAgfSxcbiAgfSxcbiAgc25zTGF5b3V0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtYXJnaW5CbG9ja0VuZDogXCIxcmVtXCIsXG4gICAgXCImID4gaDVcIjoge1xuICAgICAgbWFyZ2luQmxvY2s6IFwiNXB4XCIsXG4gICAgfSxcbiAgICBcIiYgPiBkaXZcIjoge1xuICAgICAgZm9udFNpemU6IFwiMC43NXJlbVwiLFxuICAgICAgbWFyZ2luQmxvY2s6IFwiMC41cmVtXCIsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgU3R5bGVkTGlzdEl0ZW0gPSBzdHlsZWQoTGlzdEl0ZW0pPHsgY29tcG9uZW50PzogUmVhY3QuRWxlbWVudFR5cGUgfT4oe1xuICBcIiYgLk11aVR5cG9ncmFwaHktcm9vdFwiOiB7XG4gICAgZm9udFNpemU6IFwiMC43NXJlbVwiLFxuICB9LFxuICBcIiYgLk11aUxpc3RJdGVtSWNvbi1yb290XCI6IHtcbiAgICBtaW5XaWR0aDogXCIycmVtXCIsXG4gIH0sXG4gIFwiJiAuTXVpU3ZnSWNvbi1yb290XCI6IHtcbiAgICBmb250U2l6ZTogXCIxLjI1cmVtXCIsXG4gIH0sXG59KTtcblxuY29uc3QgVGVhY2hlcklucXVpcnlQcm9maWxlID0gKHRlYWNoZXI6IFRlYWNoZXIpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB3aW5kb3dEaW1lbnNpb25zID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuICBjb25zdCB0ZW1wSGlzdG9yeUxpc3QgPSBbXG4gICAgXCLqs6jtlITsiqTtj6zsuKDsp4Drj4Tsgqwg6rOo7ZSE65Ox6riJIDLquIlcIixcbiAgICBcIuqzqO2UhCDsnpDqsqnspp0g66mL7KeEIOqzqO2UhFwiLFxuICAgIFwi64KY7J2Y6re87Jyh7IKs7Jqp7ISk66qF7IScIO2VtOu2gO2VmeyggSDsmrTrj5kg6rOo7ZSE66eI7Iqk7YSwXCIsXG4gIF07XG4gIGNvbnN0IHRlbXBSZWNvbW1lbmRUZXh0ID1cbiAgICBcIuydtOyaqe2drO2UhOuhnOuLmCDrhIjrrLQg7J6Y6rCA66W07LmY7Iuc6rOgIOuEiOustCDsoovsirXri4jri6Qg7J207Jqp7Z2s7ZSE66Gc64uYIOuEiOustCDsnpjqsIDrpbTsuZjsi5zqs6Ag64SI66y0IOyii+yKteuLiOuLpCDtlYTrk5zsl5DshJwg67CU66GcIOyggeyaqe2VoOyImCDsnojripQg64K07Jqp7J2EIOuqqO2DnOuhnCDrp4zrk6TslrTsoYzsirXri4jri6Qg7Jqp7JWE7KCA7JSoIOyxhOuEkOydhCDthrXtlbTshJwg7Jes65+s67aE7J2YIOqzqO2UhOyLpOugpeydtCDtlZzrsJzrjZQg7Iux6riA66GcIOqwgOq5jOydtCDqsIDquLDrpbwg6riw7JuQ7ZWp64uI64ukIH5+Xl5eXCI7XG5cbiAgY29uc3Qgb3BlblNOUyA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgIHdpbmRvdy5vcGVuKHVybCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGVhY2hlcklucXVpcnlQcm9maWxlfT5cbiAgICAgIDxJbWdXaXRoU3VwcG9ydEVycm9yXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlQmFja2dyb3VuZH1cbiAgICAgICAgaW1nU3JjPXt0ZWFjaGVyUHJvZmlsZURlZmF1bHRCYWNrZ3JvdW5kfVxuICAgICAgICBhbHRUZXh0PXtgJHt0ZWFjaGVyLnRlYWNoZXJOYW1lfSDrsLDqsr0g7IKs7KeEYH1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlSW1nfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRvcDogd2luZG93RGltZW5zaW9ucy53aWR0aCA8IDUwMCA/IFwiY2FsYygtMTB2dyAtIDVweClcIiA6IFwiLTUwcHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEltZ1dpdGhTdXBwb3J0RXJyb3JcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucHJvZmlsZUJhY2tncm91bmR9XG4gICAgICAgICAgaW1nU3JjPXt0ZWFjaGVyLnByb2ZpbGVJbWFnZX1cbiAgICAgICAgICBhbHRUZXh0PXtgJHt0ZWFjaGVyLnRlYWNoZXJOYW1lfSDtlITroZwg7IKs7KeEYH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj57dGVhY2hlci50ZWFjaGVyTmFtZX08L3NwYW4+Jm5ic3A77ZSE66GcXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnRyb2R1Y3Rpb25MYXlvdXR9PlxuICAgICAgICA8aDU+7IaM6rCcPC9oNT5cbiAgICAgICAgPGRpdj57dGVhY2hlci5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGlzdG9yeUxheW91dH0+XG4gICAgICAgIDxoNT7qsr3roKU8L2g1PlxuICAgICAgICA8TGlzdCBzeD17eyB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiAzNjAsIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiIH19IGRlbnNlPXt0cnVlfT5cbiAgICAgICAgICB7dGVtcEhpc3RvcnlMaXN0Lm1hcCgoaGlzdG9yeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFN0eWxlZExpc3RJdGVtIGRpc2FibGVHdXR0ZXJzPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICA8SGlzdG9yeUVkdUljb24gLz5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2hpc3Rvcnl9IC8+XG4gICAgICAgICAgICAgIDwvU3R5bGVkTGlzdEl0ZW0+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlY29tbWVuZExheW91dH0+XG4gICAgICAgIDxoNT7stpTsspw8L2g1PlxuICAgICAgICA8ZGl2Pnt0ZW1wUmVjb21tZW5kVGV4dH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc25zTGF5b3V0fT5cbiAgICAgICAgPGg1PlNOUzwvaDU+XG4gICAgICAgIDxMaXN0IHN4PXt7IHdpZHRoOiBcIjEwMCVcIiwgbWF4V2lkdGg6IDM2MCwgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIgfX0gZGVuc2U9e3RydWV9PlxuICAgICAgICAgIHt0ZWFjaGVyLmxpbmtzLm1hcCgobGluaykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFN0eWxlZExpc3RJdGVtIGRpc2FibGVHdXR0ZXJzPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+e2xpbmsuc2VydmljZSA9PT0gXCJ5b3V0dWJlXCIgPyA8WW91VHViZUljb24gLz4gOiA8SW5zdGFncmFtSWNvbiAvPn08L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2xpbmsudXJsfSAvPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bGluaz8udXJsPy5sZW5ndGggPT0gMH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3BlblNOUyhsaW5rLnVybCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxDYWxsTWFkZUljb24gLz5cbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgIDwvU3R5bGVkTGlzdEl0ZW0+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlYWNoZXJJbnF1aXJ5UHJvZmlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IFRpbWVySWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9UaW1lclwiO1xuaW1wb3J0IExvY2tJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xvY2tcIjtcbmltcG9ydCBBbGxJbmNsdXNpdmVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FsbEluY2x1c2l2ZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgdG9hc3RUZXh0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgbWFyZ2luQmxvY2s6IFwiMC4yNXJlbVwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgdG9hc3REZWZhdWx0OiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgY29sb3I6IFwiI0ZGRlwiLFxuICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXG4gICAgbWFyZ2luSW5saW5lOiBcIjAuMXJlbVwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBmb250U2l6ZTogXCIwLjc1cmVtXCIsXG4gIH0sXG4gIHRvYXN0RW5vdWdoOiB7XG4gICAgY29sb3I6IFwiI0Q4N0QzQ1wiLFxuICAgIGJhY2tncm91bmQ6IFwiI0ZGRjhEM1wiLFxuICB9LFxuICB0b2FzdENsb3NlU29vbjoge1xuICAgIGNvbG9yOiBcIiNCRjNGM0ZcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNGRkYyRjJcIixcbiAgfSxcbiAgdG9hc3RDbG9zZToge1xuICAgIGNvbG9yOiBcIiNGRkZcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiM0RjUwNTdcIixcbiAgfSxcbn0pKTtcbmludGVyZmFjZSBUb2FzdFRleHRQcm9wIHtcbiAgdHlwZTogXCJjbG9zZVwiIHwgXCJjbG9zZVNvb25cIiB8IFwiZW5vdWdoXCI7XG59XG5cbmNvbnN0IFRvYXN0VGV4dCA9ICh7IHR5cGUgfTogVG9hc3RUZXh0UHJvcCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHRleHRCeVR5cGUgPSB7XG4gICAgY2xvc2U6IFwi66eI6rCQ7ZaI7Ja07JqULiDri6TsnYwg66CI7Iqo7J2AIDkvMTMg7JuU7JqU7J287JeQIOyLoOyyrSDqsIDriqXtlbTsmpQuXCIsXG4gICAgY2xvc2VTb29uOiBcIuuniOqwkCDsnoTrsJUhIOydtOuyiOyjvCDroIjsiqjqtozsnbQg7IS47J6lIOuCqOyVmOyWtOyalC5cIixcbiAgICBlbm91Z2g6IFwiMzbrqoXsnbQg7J20IOugiOyKqOydhCDrs7Tqs6DsnojslrTsmpQuXCIsXG4gIH07XG4gIGNvbnN0IEljb25CeVR5cGUgPSB7XG4gICAgY2xvc2U6IDxMb2NrSWNvbiBmb250U2l6ZT17XCJzbWFsbFwifSAvPixcbiAgICBjbG9zZVNvb246IDxUaW1lckljb24gZm9udFNpemU9e1wic21hbGxcIn0gLz4sXG4gICAgZW5vdWdoOiA8QWxsSW5jbHVzaXZlSWNvbiBmb250U2l6ZT17XCJzbWFsbFwifSAvPixcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b2FzdFRleHR9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50b2FzdERlZmF1bHQsIHtcbiAgICAgICAgICBbY2xhc3Nlcy50b2FzdEVub3VnaF06IHR5cGUgPT09IFwiZW5vdWdoXCIsXG4gICAgICAgICAgW2NsYXNzZXMudG9hc3RDbG9zZVNvb25dOiB0eXBlID09PSBcImNsb3NlU29vblwiLFxuICAgICAgICAgIFtjbGFzc2VzLnRvYXN0Q2xvc2VdOiB0eXBlID09PSBcImNsb3NlXCIsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICB7SWNvbkJ5VHlwZVt0eXBlXX1cbiAgICAgICAge3RleHRCeVR5cGVbdHlwZV19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0VGV4dDtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gZ2V0V2luZG93RGltZW5zaW9ucygpIHtcbiAgY29uc3QgeyBpbm5lcldpZHRoOiB3aWR0aCwgaW5uZXJIZWlnaHQ6IGhlaWdodCB9ID0gd2luZG93O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2luZG93RGltZW5zaW9ucygpIHtcbiAgY29uc3QgW3dpbmRvd0RpbWVuc2lvbnMsIHNldFdpbmRvd0RpbWVuc2lvbnNdID0gdXNlU3RhdGUoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIHNldFdpbmRvd0RpbWVuc2lvbnMoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHdpbmRvd0RpbWVuc2lvbnM7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VIaXN0b3J5IiwidXNlUmVjb2lsVmFsdWUiLCJtYWtlU3R5bGVzIiwiQnV0dG9uIiwiY2xpY2tlZFRlYWNoZXJTdGF0ZSIsIlRlYWNoZXJJbnF1aXJ5UHJvZmlsZSIsIlRvYXN0VGV4dCIsIlN0dWRlbnRJbnF1aXJ5UGFnZSIsImNsaWNrZWRUZWFjaGVyIiwiaGlzdG9yeSIsIm9wZW5OZXdMZXNzb25QYWdlIiwicHVzaCIsInRlYWNoZXJOYW1lIiwiU3R1ZGVudElucXVpcnlQYWdlVkFQcm9wIiwidGFyZ2V0VGVhY2hlciIsInVzZVN0eWxlcyIsInRoZW1lIiwid2lkdGgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhHcm93IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0b2FzdExheW91dCIsImJ1dHRvbkxheW91dCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJ3aGl0ZVNwYWNlIiwiU3R1ZGVudElucXVpcnlQYWdlVmlldyIsImNsYXNzZXMiLCJzdHlsZWQiLCJ0ZWFjaGVyUHJvZmlsZURlZmF1bHRCYWNrZ3JvdW5kIiwidXNlV2luZG93RGltZW5zaW9ucyIsIkhpc3RvcnlFZHVJY29uIiwiSW1nV2l0aFN1cHBvcnRFcnJvciIsIkxpc3QiLCJMaXN0SXRlbSIsIkljb25CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJZb3VUdWJlSWNvbiIsIkluc3RhZ3JhbUljb24iLCJDYWxsTWFkZUljb24iLCJ0ZWFjaGVySW5xdWlyeVByb2ZpbGUiLCJwcm9maWxlQmFja2dyb3VuZCIsInByb2ZpbGVJbWciLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImludHJvZHVjdGlvbkxheW91dCIsIm1hcmdpbkJsb2NrRW5kIiwibWFyZ2luQmxvY2siLCJoaXN0b3J5TGF5b3V0IiwicmVjb21tZW5kTGF5b3V0Iiwic25zTGF5b3V0IiwiU3R5bGVkTGlzdEl0ZW0iLCJtaW5XaWR0aCIsInRlYWNoZXIiLCJ3aW5kb3dEaW1lbnNpb25zIiwidGVtcEhpc3RvcnlMaXN0IiwidGVtcFJlY29tbWVuZFRleHQiLCJvcGVuU05TIiwidXJsIiwid2luZG93Iiwib3BlbiIsInRvcCIsInByb2ZpbGVJbWFnZSIsImRlc2NyaXB0aW9uIiwiYmdjb2xvciIsIm1hcCIsImxpbmtzIiwibGluayIsInNlcnZpY2UiLCJsZW5ndGgiLCJjbHN4IiwiVGltZXJJY29uIiwiTG9ja0ljb24iLCJBbGxJbmNsdXNpdmVJY29uIiwidG9hc3RUZXh0IiwidG9hc3REZWZhdWx0IiwibWFyZ2luSW5saW5lIiwidG9hc3RFbm91Z2giLCJ0b2FzdENsb3NlU29vbiIsInRvYXN0Q2xvc2UiLCJ0eXBlIiwidGV4dEJ5VHlwZSIsImNsb3NlIiwiY2xvc2VTb29uIiwiZW5vdWdoIiwiSWNvbkJ5VHlwZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0V2luZG93RGltZW5zaW9ucyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImhlaWdodCIsInNldFdpbmRvd0RpbWVuc2lvbnMiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=