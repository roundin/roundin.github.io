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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _stores_StudentStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/StudentStore */ "./src/stores/StudentStore.ts");
/* harmony import */ var _widget_TeacherInquiryProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget/TeacherInquiryProfile */ "./src/screens/student/widget/TeacherInquiryProfile.tsx");
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
  let history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();

  const openNewLessonPage = () => {
    history.push(`/student/inquiryLesson/${clickedTeacher.teacherName}`);
  };

  const StudentInquiryPageVAProp = {
    targetTeacher: clickedTeacher,
    openNewLessonPage: openNewLessonPage
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StudentInquiryPageView, StudentInquiryPageVAProp);
};

__signature__(StudentInquiryPage, "useRecoilValue{clickedTeacher}\nuseHistory{history}", () => [recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue, react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory]);

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.default)(theme => ({
  StudentInquiryPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    maxWidth: "500px",
    margin: "auto"
  },
  buttonGroup: {
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
    className: classes.buttonGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
    variant: "contained",
    onClick: openNewLessonPage,
    disableElevation: true
  }, "\uBB38\uC790 \uB808\uC2A8 \uBB38\uC758"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
    variant: "contained",
    onClick: openNewLessonPage,
    disableElevation: true
  }, "\uC601\uC0C1 \uB808\uC2A8 \uBB38\uC758")));
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _res_images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../res/images/logo.png */ "./res/images/logo.png");
/* harmony import */ var _res_images_youtube_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../res/images/youtube_logo.png */ "./res/images/youtube_logo.png");
/* harmony import */ var _res_images_instagram_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../res/images/instagram_logo.png */ "./res/images/instagram_logo.png");
/* harmony import */ var _res_images_student_teacherProfileDefaultBackground_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../res/images/student/teacherProfileDefaultBackground.png */ "./res/images/student/teacherProfileDefaultBackground.png");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.default)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    maxWidth: "500px",
    width: "100vw"
  },
  profileBackground: {
    width: "100%"
  },
  profileImg: {
    display: "flex",
    width: "100%",
    paddingLeft: "3rem",
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
  textBody: {
    margin: "0px 1rem",
    display: "flex",
    flexDirection: "column"
  },
  textBodyContent: {
    fontSize: "0.75rem",
    height: "20vh"
  },
  snsLogoLayout: {
    display: "flex",
    "& > img": {
      margin: "1rem"
    }
  }
}));

const TeacherInquiryProfile = teacher => {
  const classes = useStyles();
  const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", reportWindowSize);
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: classes.profileBackground,
    src: _res_images_student_teacherProfileDefaultBackground_png__WEBPACK_IMPORTED_MODULE_4__,
    onError: e => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = `${_res_images_student_teacherProfileDefaultBackground_png__WEBPACK_IMPORTED_MODULE_4__}`;
    },
    alt: `${teacher.teacherName} 배경 사진`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.profileImg,
    style: {
      top: windowWidth < 500 ? "calc(-10vw - 5px)" : "-50px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: teacher.profileImage,
    onError: e => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = `${_res_images_logo_png__WEBPACK_IMPORTED_MODULE_1__}`;
    },
    alt: `${teacher.teacherName} 프로 사진`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, teacher.teacherName), "\xA0\uD504\uB85C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.textBody
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.textBodyContent
  }, teacher.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "SNS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.snsLogoLayout
  }, teacher.links.map(link => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      width: "30px",
      height: "30px",
      src: link.service === "youtube" ? _res_images_youtube_logo_png__WEBPACK_IMPORTED_MODULE_2__ : _res_images_instagram_logo_png__WEBPACK_IMPORTED_MODULE_3__,
      alt: `${link.service}`
    });
  }))));
};

__signature__(TeacherInquiryProfile, "useStyles{classes}\nuseState{[windowWidth, setWindowWidth](window.innerWidth)}\nuseEffect{}", () => [useStyles]);

const _default = TeacherInquiryProfile;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/screens/student/widget/TeacherInquiryProfile.tsx");
  reactHotLoader.register(TeacherInquiryProfile, "TeacherInquiryProfile", "/Users/gang/StudioProjects/roundin-web/src/screens/student/widget/TeacherInquiryProfile.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/screens/student/widget/TeacherInquiryProfile.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./res/images/instagram_logo.png":
/*!***************************************!*\
  !*** ./res/images/instagram_logo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0468ccf7c251d5b3027b.png";

/***/ }),

/***/ "./res/images/student/teacherProfileDefaultBackground.png":
/*!****************************************************************!*\
  !*** ./res/images/student/teacherProfileDefaultBackground.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84da3edec9077059c36f.png";

/***/ }),

/***/ "./res/images/youtube_logo.png":
/*!*************************************!*\
  !*** ./res/images/youtube_logo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c51005deab592851ec64.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmVlbnNfc3R1ZGVudF9TdHVkZW50SW5xdWlyeVBhZ2VfdHN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUlBLE1BQU1PLGtCQUFrQixHQUFHLENBQUMsRUFBRCxLQUFnQztBQUN6RCxRQUFNQyxjQUFjLEdBQUdOLHNEQUFjLENBQUNHLHFFQUFELENBQXJDO0FBQ0EsTUFBSUksT0FBTyxHQUFHUiw0REFBVSxFQUF4Qjs7QUFDQSxRQUFNUyxpQkFBaUIsR0FBRyxNQUFNO0FBQzlCRCxJQUFBQSxPQUFPLENBQUNFLElBQVIsQ0FBYywwQkFBeUJILGNBQWMsQ0FBQ0ksV0FBWSxFQUFsRTtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsd0JBQWtELEdBQUc7QUFDekRDLElBQUFBLGFBQWEsRUFBRU4sY0FEMEM7QUFFekRFLElBQUFBLGlCQUFpQixFQUFFQTtBQUZzQyxHQUEzRDtBQUtBLHNCQUFPLGlEQUFDLHNCQUFELEVBQTRCRyx3QkFBNUIsQ0FBUDtBQUNELENBYkQ7O2NBQU1OLGtGQUNtQkwsb0RBQ1REOztBQWlCaEIsTUFBTWMsU0FBUyxHQUFHWixpRUFBVSxDQUFFYSxLQUFELEtBQVk7QUFDdkNULEVBQUFBLGtCQUFrQixFQUFFO0FBQ2xCVSxJQUFBQSxPQUFPLEVBQUUsTUFEUztBQUVsQkMsSUFBQUEsYUFBYSxFQUFFLFFBRkc7QUFHbEJDLElBQUFBLFVBQVUsRUFBRSxRQUhNO0FBSWxCQyxJQUFBQSxjQUFjLEVBQUUsUUFKRTtBQUtsQkMsSUFBQUEsUUFBUSxFQUFFLENBTFE7QUFNbEJDLElBQUFBLFFBQVEsRUFBRSxPQU5RO0FBT2xCQyxJQUFBQSxNQUFNLEVBQUU7QUFQVSxHQURtQjtBQVV2Q0MsRUFBQUEsV0FBVyxFQUFFO0FBQ1hQLElBQUFBLE9BQU8sRUFBRSxNQURF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LGtCQU1FO0FBQ0UsT0FBRyxFQUFFRCxPQUFPLENBQUNhLFlBRGY7QUFFRSxXQUFPLEVBQUdMLENBQUQsSUFBZ0Q7QUFDdkRBLE1BQUFBLENBQUMsQ0FBQ0MsYUFBRixDQUFnQkMsT0FBaEIsR0FBMEIsSUFBMUI7QUFDQUYsTUFBQUEsQ0FBQyxDQUFDQyxhQUFGLENBQWdCRSxHQUFoQixHQUF1QixHQUFFN0IsaURBQUssRUFBOUI7QUFDRCxLQUxIO0FBTUUsT0FBRyxFQUFHLEdBQUVrQixPQUFPLENBQUN2QyxXQUFZO0FBTjlCLElBTkYsZUFjRSwyRUFDRSwrREFBT3VDLE9BQU8sQ0FBQ3ZDLFdBQWYsQ0FERixxQkFkRixDQVZGLGVBNEJFO0FBQUssYUFBUyxFQUFFa0IsT0FBTyxDQUFDaUI7QUFBeEIsa0JBQ0U7QUFBSyxhQUFTLEVBQUVqQixPQUFPLENBQUNrQjtBQUF4QixLQUEwQ0csT0FBTyxDQUFDYyxXQUFsRCxDQURGLGVBRUUsb0VBRkYsZUFHRTtBQUFLLGFBQVMsRUFBRW5DLE9BQU8sQ0FBQ29CO0FBQXhCLEtBQ0dDLE9BQU8sQ0FBQ2UsS0FBUixDQUFjQyxHQUFkLENBQW1CQyxJQUFELElBQVU7QUFDM0Isd0JBQ0U7QUFDRSxXQUFLLEVBQUUsTUFEVDtBQUVFLFlBQU0sRUFBRSxNQUZWO0FBR0UsU0FBRyxFQUFFQSxJQUFJLENBQUNDLE9BQUwsS0FBaUIsU0FBakIsR0FBNkJuQyx5REFBN0IsR0FBMkNDLDJEQUhsRDtBQUlFLFNBQUcsRUFBRyxHQUFFaUMsSUFBSSxDQUFDQyxPQUFRO0FBSnZCLE1BREY7QUFRRCxHQVRBLENBREgsQ0FIRixDQTVCRixDQURGO0FBK0NELENBMUREOztjQUFNL0QsNkhBQ1lTOztpQkEyREhUO0FBQWYsaUVBQWU7Ozs7Ozs7Ozs7MEJBaEhUUzswQkFvREFUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm91bmRpbl9ob21lcGFnZS8uL3NyYy9zY3JlZW5zL3N0dWRlbnQvU3R1ZGVudElucXVpcnlQYWdlLnRzeCIsIndlYnBhY2s6Ly9yb3VuZGluX2hvbWVwYWdlLy4vc3JjL3NjcmVlbnMvc3R1ZGVudC93aWRnZXQvVGVhY2hlcklucXVpcnlQcm9maWxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbi0gb3duZXI6IEDqsJXqsr3shJ1cbi0gY29udHJpYnV0b3I6IEDqsJXqsr3shJ1cbi0gZnVuY3Rpb246IFN0dWRlbnQg66mU7J24IO2ZiFxuLSBzY3JlZW46IEFfMDJcbi0gY29tbWVudDog7ZWZ7IOdIOq4sOykgOycvOuhnCDshKDsg53sl5Dqsowg66y47J2Y7ZWY64qUIO2OmOydtOyngFxuKiovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgeyBjbGlja2VkVGVhY2hlclN0YXRlIH0gZnJvbSBcIkBzcmMvc3RvcmVzL1N0dWRlbnRTdG9yZVwiO1xuaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gXCJAc3JjL3NlcnZpY2Uvc3R1ZGVudC9nZXRUb3BpY1RlYWNoZXJHcm91cFwiO1xuaW1wb3J0IFRlYWNoZXJJbnF1aXJ5UHJvZmlsZSBmcm9tIFwiLi93aWRnZXQvVGVhY2hlcklucXVpcnlQcm9maWxlXCI7XG5cbmludGVyZmFjZSBTdHVkZW50SW5xdWlyeVBhZ2VQcm9wIHt9XG5cbmNvbnN0IFN0dWRlbnRJbnF1aXJ5UGFnZSA9ICh7fTogU3R1ZGVudElucXVpcnlQYWdlUHJvcCkgPT4ge1xuICBjb25zdCBjbGlja2VkVGVhY2hlciA9IHVzZVJlY29pbFZhbHVlKGNsaWNrZWRUZWFjaGVyU3RhdGUpO1xuICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3Qgb3Blbk5ld0xlc3NvblBhZ2UgPSAoKSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKGAvc3R1ZGVudC9pbnF1aXJ5TGVzc29uLyR7Y2xpY2tlZFRlYWNoZXIudGVhY2hlck5hbWV9YCk7XG4gIH07XG5cbiAgY29uc3QgU3R1ZGVudElucXVpcnlQYWdlVkFQcm9wOiBTdHVkZW50SW5xdWlyeVBhZ2VWQVByb3AgPSB7XG4gICAgdGFyZ2V0VGVhY2hlcjogY2xpY2tlZFRlYWNoZXIsXG4gICAgb3Blbk5ld0xlc3NvblBhZ2U6IG9wZW5OZXdMZXNzb25QYWdlLFxuICB9O1xuXG4gIHJldHVybiA8U3R1ZGVudElucXVpcnlQYWdlVmlldyB7Li4uU3R1ZGVudElucXVpcnlQYWdlVkFQcm9wfSAvPjtcbn07XG5cbmludGVyZmFjZSBTdHVkZW50SW5xdWlyeVBhZ2VWQVByb3Age1xuICB0YXJnZXRUZWFjaGVyOiBUZWFjaGVyO1xuICBvcGVuTmV3TGVzc29uUGFnZTogKCkgPT4gdm9pZDtcbn1cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBTdHVkZW50SW5xdWlyeVBhZ2U6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgbWF4V2lkdGg6IFwiNTAwcHhcIixcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxuICB9LFxuICBidXR0b25Hcm91cDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIFwiJiA+IGJ1dHRvblwiOiB7XG4gICAgICBtYXJnaW46IFwiMC41cmVtXCIsXG4gICAgICBwYWRkaW5nOiBcIjAuNXJlbSAyLjVyZW1cIixcbiAgICAgIGJhY2tncm91bmQ6IFwiI0Y1RjZGOFwiLFxuICAgICAgY29sb3I6IFwiIzRDNTQ2NFwiLFxuICAgICAgXCImID4gLk11aUJ1dHRvbi1sYWJlbFwiOiB7XG4gICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IFN0dWRlbnRJbnF1aXJ5UGFnZVZpZXcgPSAoeyB0YXJnZXRUZWFjaGVyLCBvcGVuTmV3TGVzc29uUGFnZSB9OiBTdHVkZW50SW5xdWlyeVBhZ2VWQVByb3ApID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlN0dWRlbnRJbnF1aXJ5UGFnZX0+XG4gICAgICA8VGVhY2hlcklucXVpcnlQcm9maWxlIHsuLi50YXJnZXRUZWFjaGVyfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uR3JvdXB9PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtvcGVuTmV3TGVzc29uUGFnZX0gZGlzYWJsZUVsZXZhdGlvbj17dHJ1ZX0+XG4gICAgICAgICAg66y47J6QIOugiOyKqCDrrLjsnZhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e29wZW5OZXdMZXNzb25QYWdlfSBkaXNhYmxlRWxldmF0aW9uPXt0cnVlfT5cbiAgICAgICAgICDsmIHsg4Eg66CI7IqoIOusuOydmFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudElucXVpcnlQYWdlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFN5bnRoZXRpY0V2ZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uLy4uLy4uL3Jlcy9pbWFnZXMvbG9nby5wbmdcIjtcbmltcG9ydCB5b3V0dWJlTG9nbyBmcm9tIFwiLi4vLi4vLi4vLi4vcmVzL2ltYWdlcy95b3V0dWJlX2xvZ28ucG5nXCI7XG5pbXBvcnQgSW5zdGFMb2dvIGZyb20gXCIuLi8uLi8uLi8uLi9yZXMvaW1hZ2VzL2luc3RhZ3JhbV9sb2dvLnBuZ1wiO1xuaW1wb3J0IHRlYWNoZXJQcm9maWxlRGVmYXVsdEJhY2tncm91bmQgZnJvbSBcIkByZXMvaW1hZ2VzL3N0dWRlbnQvdGVhY2hlclByb2ZpbGVEZWZhdWx0QmFja2dyb3VuZC5wbmdcIjtcbmltcG9ydCB7IFRlYWNoZXIgfSBmcm9tIFwiQHNyYy9zZXJ2aWNlL3N0dWRlbnQvZ2V0VG9waWNUZWFjaGVyR3JvdXBcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgbWF4V2lkdGg6IFwiNTAwcHhcIixcbiAgICB3aWR0aDogXCIxMDB2d1wiLFxuICB9LFxuICBwcm9maWxlQmFja2dyb3VuZDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgcHJvZmlsZUltZzoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBwYWRkaW5nTGVmdDogXCIzcmVtXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBcIiYgPiBpbWdcIjoge1xuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcbiAgICAgIHdpZHRoOiBcIjIwJVwiLFxuICAgICAgbWF4V2lkdGg6IFwiMTAwcHhcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICBwYWRkaW5nOiBcIjVweFwiLFxuICAgIH0sXG4gICAgXCImID4gZGl2XCI6IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLFxuICAgICAgcGFkZGluZzogXCIwLjJyZW1cIixcbiAgICAgIFwiJiA+IHNwYW5cIjoge1xuICAgICAgICBmb250U2l6ZTogXCIxLjI1cmVtXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB0ZXh0Qm9keToge1xuICAgIG1hcmdpbjogXCIwcHggMXJlbVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIHRleHRCb2R5Q29udGVudDoge1xuICAgIGZvbnRTaXplOiBcIjAuNzVyZW1cIixcbiAgICBoZWlnaHQ6IFwiMjB2aFwiLFxuICB9LFxuICBzbnNMb2dvTGF5b3V0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgXCImID4gaW1nXCI6IHtcbiAgICAgIG1hcmdpbjogXCIxcmVtXCIsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgVGVhY2hlcklucXVpcnlQcm9maWxlID0gKHRlYWNoZXI6IFRlYWNoZXIpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiByZXBvcnRXaW5kb3dTaXplKCkge1xuICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXBvcnRXaW5kb3dTaXplKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVwb3J0V2luZG93U2l6ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucHJvZmlsZUJhY2tncm91bmR9XG4gICAgICAgIHNyYz17dGVhY2hlclByb2ZpbGVEZWZhdWx0QmFja2dyb3VuZH1cbiAgICAgICAgb25FcnJvcj17KGU6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbWFnZUVsZW1lbnQsIEV2ZW50PikgPT4ge1xuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3JjID0gYCR7dGVhY2hlclByb2ZpbGVEZWZhdWx0QmFja2dyb3VuZH1gO1xuICAgICAgICB9fVxuICAgICAgICBhbHQ9e2Ake3RlYWNoZXIudGVhY2hlck5hbWV9IOuwsOqyvSDsgqzsp4RgfVxuICAgICAgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2ZpbGVJbWd9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdG9wOiB3aW5kb3dXaWR0aCA8IDUwMCA/IFwiY2FsYygtMTB2dyAtIDVweClcIiA6IFwiLTUwcHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17dGVhY2hlci5wcm9maWxlSW1hZ2V9XG4gICAgICAgICAgb25FcnJvcj17KGU6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbWFnZUVsZW1lbnQsIEV2ZW50PikgPT4ge1xuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0Lm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnNyYyA9IGAke2xvZ299YDtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFsdD17YCR7dGVhY2hlci50ZWFjaGVyTmFtZX0g7ZSE66GcIOyCrOynhGB9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4+e3RlYWNoZXIudGVhY2hlck5hbWV9PC9zcGFuPiZuYnNwO+2UhOuhnFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEJvZHl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0Qm9keUNvbnRlbnR9Pnt0ZWFjaGVyLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICA8ZGl2PlNOUzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbnNMb2dvTGF5b3V0fT5cbiAgICAgICAgICB7dGVhY2hlci5saW5rcy5tYXAoKGxpbmspID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICB3aWR0aD17XCIzMHB4XCJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjMwcHhcIn1cbiAgICAgICAgICAgICAgICBzcmM9e2xpbmsuc2VydmljZSA9PT0gXCJ5b3V0dWJlXCIgPyB5b3V0dWJlTG9nbyA6IEluc3RhTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9e2Ake2xpbmsuc2VydmljZX1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlYWNoZXJJbnF1aXJ5UHJvZmlsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUhpc3RvcnkiLCJ1c2VSZWNvaWxWYWx1ZSIsIm1ha2VTdHlsZXMiLCJCdXR0b24iLCJjbGlja2VkVGVhY2hlclN0YXRlIiwiVGVhY2hlcklucXVpcnlQcm9maWxlIiwiU3R1ZGVudElucXVpcnlQYWdlIiwiY2xpY2tlZFRlYWNoZXIiLCJoaXN0b3J5Iiwib3Blbk5ld0xlc3NvblBhZ2UiLCJwdXNoIiwidGVhY2hlck5hbWUiLCJTdHVkZW50SW5xdWlyeVBhZ2VWQVByb3AiLCJ0YXJnZXRUZWFjaGVyIiwidXNlU3R5bGVzIiwidGhlbWUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhHcm93IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJidXR0b25Hcm91cCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJ3aGl0ZVNwYWNlIiwiU3R1ZGVudElucXVpcnlQYWdlVmlldyIsImNsYXNzZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImxvZ28iLCJ5b3V0dWJlTG9nbyIsIkluc3RhTG9nbyIsInRlYWNoZXJQcm9maWxlRGVmYXVsdEJhY2tncm91bmQiLCJyb290Iiwid2lkdGgiLCJwcm9maWxlQmFja2dyb3VuZCIsInByb2ZpbGVJbWciLCJwYWRkaW5nTGVmdCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dEJvZHkiLCJ0ZXh0Qm9keUNvbnRlbnQiLCJoZWlnaHQiLCJzbnNMb2dvTGF5b3V0IiwidGVhY2hlciIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVwb3J0V2luZG93U2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJvbmVycm9yIiwic3JjIiwidG9wIiwicHJvZmlsZUltYWdlIiwiZGVzY3JpcHRpb24iLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJzZXJ2aWNlIl0sInNvdXJjZVJvb3QiOiIifQ==