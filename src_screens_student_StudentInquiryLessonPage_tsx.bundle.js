"use strict";
(self["webpackChunkroundin_homepage"] = self["webpackChunkroundin_homepage"] || []).push([["src_screens_student_StudentInquiryLessonPage_tsx"],{

/***/ "./src/screens/student/StudentInquiryLessonPage.tsx":
/*!**********************************************************!*\
  !*** ./src/screens/student/StudentInquiryLessonPage.tsx ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _utils_common_widget_VideoUploadButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common/widget/VideoUploadButton */ "./src/utils/common/widget/VideoUploadButton.tsx");
/* harmony import */ var _stores_StudentStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/StudentStore */ "./src/stores/StudentStore.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _res_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../res/images/logo.png */ "./res/images/logo.png");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
- owner: @강경석
- contributor: @강경석
- function: 강의 요청 페이지
- screen: A_03
- comment: 선택한 선생님에게 강의를 요청하는 페이지
**/









const StudentInquiryLessonPage = () => {
  const clickedTeacher = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_stores_StudentStore__WEBPACK_IMPORTED_MODULE_2__.clickedTeacherState);
  let {
    params
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useRouteMatch)();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
  const [userFrontSwingVideo, setUserFrontSwingVideo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [userSideSwingVideo, setUserSideSwingVideo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  let history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();

  const submitLesson = data => {
    console.log("정면", userFrontSwingVideo);
    console.log("측면", userSideSwingVideo);
    console.log(`${clickedTeacher.teacherName} 에게 ${data.responseUserName}, ${data.responsePhoneNumber}가 요청`);
    console.log(`${data.message}`);
    history.push("/student/buyTicket"); // ToDo : 티켓 갯수 확인하는 과정 들어가야함
  };

  const StudentInquiryLessonPageProp = {
    teacherName: clickedTeacher.teacherName,
    teacherImg: clickedTeacher.profileImage,
    userFrontSwingVideo: userFrontSwingVideo,
    userSideSwingVideo: userSideSwingVideo,
    uploadFrontVideo: video => setUserFrontSwingVideo(video),
    uploadSideVideo: video => setUserSideSwingVideo(video),
    register: register,
    errors: errors,
    handleSubmit: handleSubmit,
    submitLesson: submitLesson
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StudentInquiryLessonPageView, StudentInquiryLessonPageProp);
};

__signature__(StudentInquiryLessonPage, "useRecoilValue{clickedTeacher}\nuseRouteMatch{{ params }}\nuseForm{{\n    register,\n    handleSubmit,\n    formState: { errors },\n  }}\nuseState{[userFrontSwingVideo, setUserFrontSwingVideo]}\nuseState{[userSideSwingVideo, setUserSideSwingVideo]}\nuseHistory{history}", () => [recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue, react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useRouteMatch, react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm, react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory]);

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default)(theme => ({
  studentInquiryLessonPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    flexGrow: 1,
    maxWidth: "500px",
    width: "100vw",
    "& > div": {
      marginBlockEnd: "0.5rem"
    }
  },
  headerLayout: {
    display: "flex",
    width: "95%",
    alignItems: "center",
    marginBlockStart: "0,5rem",
    "& > img": {
      width: "30px",
      height: "30px",
      borderRadius: "100%",
      marginRight: "0.5rem"
    },
    "& > h3": {
      marginBlock: "0px"
    }
  },
  form: {
    width: "95%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  uploadVideoLayout: {
    display: "flex",
    width: "95%",
    flexDirection: "column",
    "& > h4": {
      marginBlock: "5px"
    }
  },
  btnGroup: {
    display: "flex",
    justifyContent: "flex-start"
  },
  noti: {
    fontSize: "0.75rem",
    color: "gray",
    paddingInlineStart: "1rem"
  },
  messageLayout: {
    display: "flex",
    width: "95%",
    flexDirection: "column",
    "& > h4": {
      marginBlock: "5px"
    },
    "& > textarea": {
      height: "15vh",
      resize: "none",
      padding: "1rem",
      borderRadius: "15px",
      borderColor: "#E9EBF0",
      "&:focus": {
        borderColor: theme.palette.secondary.main,
        outline: "none !important"
      }
    }
  },
  feedbackLayout: {
    display: "flex",
    width: "95%",
    flexDirection: "column",
    "& > h4": {
      marginBlock: "5px"
    },
    "& > h5": {
      marginBlock: "1px",
      color: "#69697C",
      marginBlockStart: "0.5rem"
    },
    "& > input": {
      height: "1rem",
      resize: "none",
      padding: "1rem",
      borderRadius: "15px",
      border: "1px solid #E9EBF0",
      "&:focus": {
        borderColor: theme.palette.secondary.main,
        outline: "none !important"
      }
    }
  },
  errorMsg: {
    fontSize: "0.75rem",
    color: "#de2020"
  },
  applyBtn: {
    width: "90%",
    height: "2rem",
    border: "0px",
    maxWidth: "300px",
    marginBlockStart: "0.5rem",
    marginBlockEnd: "1rem",
    fontWeight: "bold",
    background: "#25D15C",
    color: "#fff",
    borderRadius: "5px"
  }
}));

const StudentInquiryLessonPageView = ({
  teacherName,
  teacherImg,
  userFrontSwingVideo,
  userSideSwingVideo,
  uploadFrontVideo,
  uploadSideVideo,
  register,
  errors,
  handleSubmit,
  submitLesson
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.studentInquiryLessonPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.headerLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: teacherImg,
    onError: e => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = `${_res_images_logo_png__WEBPACK_IMPORTED_MODULE_4__}`;
    },
    alt: `${teacherName} 프로 사진`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, `${teacherName} 프로님의 레슨 받기`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.uploadVideoLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "스윙 영상 업로드"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.noti
  }, "\uC601\uC0C1\uC740 \uCD5C\uB300 2\uAC1C\uAE4C\uC9C0 \uC5C5\uB85C\uB4DC \uD560 \uC218 \uC788\uC5B4\uC694. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "\uC790\uC138\uD55C \uD53C\uB4DC\uBC31\uC744 \uC704\uD574\uC11C \uC815\uBA74\uACFC \uCE21\uBA74 \uC601\uC0C1\uC744 \uCD94\uCC9C\uD574\uC694."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.btnGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_widget_VideoUploadButton__WEBPACK_IMPORTED_MODULE_1__.default, {
    swingType: "Front",
    video: userFrontSwingVideo,
    uploadVideo: uploadFrontVideo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_widget_VideoUploadButton__WEBPACK_IMPORTED_MODULE_1__.default, {
    swingType: "Side",
    video: userSideSwingVideo,
    uploadVideo: uploadSideVideo
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: classes.form,
    onSubmit: handleSubmit(submitLesson)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.messageLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "프로님에게 남길 메시지"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", _extends({}, register("message"), {
    placeholder: "\uC608\uC2DC) \uC548\uB155\uD558\uC138\uC694 \uD504\uB85C\uB2D8. \uC774\uB7EC\uC774\uB7EC\uD55C \uBD80\uBD84\uC774 \uACE0\uBBFC\uC785\uB2C8\uB2E4. \uC774\uB7EC\uC774\uB7EC\uD55C \uC870\uC5B8 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4."
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.feedbackLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "피드백 받을 연락처"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uC774\uB984"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({}, register("responseUserName", {
    required: true,
    maxLength: 10,
    pattern: /^[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]+$/i
  }), {
    placeholder: "\uD64D\uAE38\uB3D9"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.errorMsg
  }, errors.responseUserName && "이름을 제대로 입력해주세요."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uD578\uB4DC\uD3F0 \uBC88\uD638"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({}, register("responsePhoneNumber", {
    required: true,
    pattern: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
  }), {
    placeholder: "010-1234-5678"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.errorMsg
  }, errors.responsePhoneNumber && "핸드폰 번호를 제대로 입력해주세요.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: classes.applyBtn,
    type: "submit",
    value: "\uB808\uC2A8 \uC2E0\uCCAD"
  })));
};

__signature__(StudentInquiryLessonPageView, "useStyles{classes}", () => [useStyles]);

const _default = StudentInquiryLessonPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StudentInquiryLessonPage, "StudentInquiryLessonPage", "/Users/gang/StudioProjects/roundin-web/src/screens/student/StudentInquiryLessonPage.tsx");
  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/screens/student/StudentInquiryLessonPage.tsx");
  reactHotLoader.register(StudentInquiryLessonPageView, "StudentInquiryLessonPageView", "/Users/gang/StudioProjects/roundin-web/src/screens/student/StudentInquiryLessonPage.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/screens/student/StudentInquiryLessonPage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/utils/common/widget/VideoUploadButton.tsx":
/*!*******************************************************!*\
  !*** ./src/utils/common/widget/VideoUploadButton.tsx ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(theme => ({
  VideoUploadButton: {
    width: "7rem",
    height: "7rem",
    display: "flex"
  },
  video: {
    width: "6rem",
    height: "6rem",
    margin: "0.5rem",
    borderRadius: "10px",
    border: "1px solid"
  },
  addImgBtn: {
    backgroundColor: "#E9ECEF",
    padding: "1.5rem",
    margin: "0.5rem",
    fontSize: "3rem",
    color: "#ADB5BD",
    borderRadius: "10px"
  },
  clearVideoIcon: {
    float: "right",
    position: "relative",
    left: "-20px",
    backgroundColor: "white",
    border: "1px solid",
    borderRadius: "100%",
    fontSize: "1.25rem",
    margin: "0px 1rem 1rem 0px"
  }
}));

const VideoUploadButton = ({
  swingType,
  video,
  uploadVideo
}) => {
  const classes = useStyles();
  const [uploadedVideo, setUploadedVideo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (video === undefined) return setUploadedVideo("");
    const videoURL = URL.createObjectURL(video);
    if (videoURL) setUploadedVideo(videoURL);
  }, [video]);

  const clearUploadVideo = () => {
    uploadVideo(undefined);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.VideoUploadButton
  }, uploadedVideo.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
    className: classes.video
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    src: uploadedVideo
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: classes.clearVideoIcon,
    onClick: () => {
      clearUploadVideo();
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: `videoInput-${swingType}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: classes.addImgBtn
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: `videoInput-${swingType}`,
    type: "file",
    style: {
      display: "none"
    },
    onChange: e => {
      if (e.target.files) {
        uploadVideo(e.target.files[0]);
      }
    }
  })));
};

__signature__(VideoUploadButton, "useStyles{classes}\nuseState{[uploadedVideo, setUploadedVideo](\"\")}\nuseEffect{}", () => [useStyles]);

const _default = VideoUploadButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/utils/common/widget/VideoUploadButton.tsx");
  reactHotLoader.register(VideoUploadButton, "VideoUploadButton", "/Users/gang/StudioProjects/roundin-web/src/utils/common/widget/VideoUploadButton.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/utils/common/widget/VideoUploadButton.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmVlbnNfc3R1ZGVudF9TdHVkZW50SW5xdWlyeUxlc3NvblBhZ2VfdHN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBUUEsTUFBTVUsd0JBQXdCLEdBQUcsTUFBTTtBQUNyQyxRQUFNQyxjQUFjLEdBQUdKLHNEQUFjLENBQUNELHFFQUFELENBQXJDO0FBQ0EsTUFBSTtBQUFFTSxJQUFBQTtBQUFGLE1BQWFULCtEQUFhLEVBQTlCO0FBQ0EsUUFBTTtBQUNKVSxJQUFBQSxRQURJO0FBRUpDLElBQUFBLFlBRkk7QUFHSkMsSUFBQUEsU0FBUyxFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFIUCxNQUlGUCx3REFBTyxFQUpYO0FBTUEsUUFBTSxDQUFDUSxtQkFBRCxFQUFzQkMsc0JBQXRCLElBQWdEakIsK0NBQVEsRUFBOUQ7QUFDQSxRQUFNLENBQUNrQixrQkFBRCxFQUFxQkMscUJBQXJCLElBQThDbkIsK0NBQVEsRUFBNUQ7QUFDQSxNQUFJb0IsT0FBTyxHQUFHbkIsNERBQVUsRUFBeEI7O0FBRUEsUUFBTW9CLFlBQVksR0FBSUMsSUFBRCxJQUF1QjtBQUMxQ0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQlIsbUJBQWxCO0FBQ0FPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBa0JOLGtCQUFsQjtBQUNBSyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxHQUFFZCxjQUFjLENBQUNlLFdBQVksT0FBTUgsSUFBSSxDQUFDSSxnQkFBaUIsS0FBSUosSUFBSSxDQUFDSyxtQkFBb0IsTUFBbkc7QUFDQUosSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsR0FBRUYsSUFBSSxDQUFDTSxPQUFRLEVBQTVCO0FBQ0FSLElBQUFBLE9B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U0FBRCxDQUFYO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBRXJCLE9BQU8sQ0FBQ3hFO0FBQXhCLEtBQ0cyRixhQUFhLENBQUNPLE1BQWQsR0FBdUIsQ0FBdkIsZ0JBQ0MsaUhBQ0U7QUFBTyxhQUFTLEVBQUUxQixPQUFPLENBQUMxQztBQUExQixrQkFDRTtBQUFRLE9BQUcsRUFBRTZEO0FBQWIsSUFERixDQURGLGVBSUUsaURBQUMsNkRBQUQ7QUFDRSxhQUFTLEVBQUVuQixPQUFPLENBQUNhLGNBRHJCO0FBRUUsV0FBTyxFQUFFLE1BQU07QUFDYlksTUFBQUEsZ0JBQWdCO0FBQ2pCO0FBSkgsSUFKRixDQURELGdCQWFDLGlIQUNFO0FBQU8sV0FBTyxFQUFHLGNBQWFSLFNBQVU7QUFBeEMsa0JBQ0UsaURBQUMsMkRBQUQ7QUFBUyxhQUFTLEVBQUVqQixPQUFPLENBQUNXO0FBQTVCLElBREYsQ0FERixlQUlFO0FBQ0UsTUFBRSxFQUFHLGNBQWFNLFNBQVUsRUFEOUI7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFNBQUssRUFBRTtBQUFFdEQsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FIVDtBQUlFLFlBQVEsRUFBR3NDLENBQUQsSUFBTztBQUNmLFVBQUlBLENBQUMsQ0FBQzBCLE1BQUYsQ0FBU0MsS0FBYixFQUFvQjtBQUNsQlYsUUFBQUEsV0FBVyxDQUFDakIsQ0FBQyxDQUFDMEIsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFELENBQVg7QUFDRDtBQUNGO0FBUkgsSUFKRixDQWRKLENBREY7QUFpQ0QsQ0E5Q0Q7O2NBQU1wRyxnSEFDWWdDOztpQkErQ0hoQztBQUFmLGlFQUFlOzs7Ozs7Ozs7OzBCQXZGVGdDOzBCQXVDQWhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm91bmRpbl9ob21lcGFnZS8uL3NyYy9zY3JlZW5zL3N0dWRlbnQvU3R1ZGVudElucXVpcnlMZXNzb25QYWdlLnRzeCIsIndlYnBhY2s6Ly9yb3VuZGluX2hvbWVwYWdlLy4vc3JjL3V0aWxzL2NvbW1vbi93aWRnZXQvVmlkZW9VcGxvYWRCdXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuLSBvd25lcjogQOqwleqyveyEnVxuLSBjb250cmlidXRvcjogQOqwleqyveyEnVxuLSBmdW5jdGlvbjog6rCV7J2YIOyalOyyrSDtjpjsnbTsp4Bcbi0gc2NyZWVuOiBBXzAzXG4tIGNvbW1lbnQ6IOyEoO2Dne2VnCDshKDsg53ri5jsl5Dqsowg6rCV7J2Y66W8IOyalOyyre2VmOuKlCDtjpjsnbTsp4BcbioqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZVJvdXRlTWF0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IFZpZGVvVXBsb2FkQnV0dG9uIGZyb20gXCJAc3JjL3V0aWxzL2NvbW1vbi93aWRnZXQvVmlkZW9VcGxvYWRCdXR0b25cIjtcbmltcG9ydCB7IGNsaWNrZWRUZWFjaGVyU3RhdGUgfSBmcm9tIFwiQHNyYy9zdG9yZXMvU3R1ZGVudFN0b3JlXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiQHJlcy9pbWFnZXMvbG9nby5wbmdcIjtcbmltcG9ydCB7IEZpZWxkRXJyb3JzLCB1c2VGb3JtLCBVc2VGb3JtSGFuZGxlU3VibWl0LCBVc2VGb3JtUmVnaXN0ZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbmludGVyZmFjZSBJRm9ybUlucHV0cyB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgcmVzcG9uc2VVc2VyTmFtZTogc3RyaW5nO1xuICByZXNwb25zZVBob25lTnVtYmVyOiBzdHJpbmc7XG59XG5cbmNvbnN0IFN0dWRlbnRJbnF1aXJ5TGVzc29uUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY2xpY2tlZFRlYWNoZXIgPSB1c2VSZWNvaWxWYWx1ZShjbGlja2VkVGVhY2hlclN0YXRlKTtcbiAgbGV0IHsgcGFyYW1zIH0gPSB1c2VSb3V0ZU1hdGNoPHsgdGVhY2hlck5hbWU6IHN0cmluZyB9PigpO1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm08SUZvcm1JbnB1dHM+KCk7XG5cbiAgY29uc3QgW3VzZXJGcm9udFN3aW5nVmlkZW8sIHNldFVzZXJGcm9udFN3aW5nVmlkZW9dID0gdXNlU3RhdGU8RmlsZSB8IHVuZGVmaW5lZD4oKTtcbiAgY29uc3QgW3VzZXJTaWRlU3dpbmdWaWRlbywgc2V0VXNlclNpZGVTd2luZ1ZpZGVvXSA9IHVzZVN0YXRlPEZpbGUgfCB1bmRlZmluZWQ+KCk7XG4gIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gIGNvbnN0IHN1Ym1pdExlc3NvbiA9IChkYXRhOiBJRm9ybUlucHV0cykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwi7KCV66m0XCIsIHVzZXJGcm9udFN3aW5nVmlkZW8pO1xuICAgIGNvbnNvbGUubG9nKFwi7Lih66m0XCIsIHVzZXJTaWRlU3dpbmdWaWRlbyk7XG4gICAgY29uc29sZS5sb2coYCR7Y2xpY2tlZFRlYWNoZXIudGVhY2hlck5hbWV9IOyXkOqyjCAke2RhdGEucmVzcG9uc2VVc2VyTmFtZX0sICR7ZGF0YS5yZXNwb25zZVBob25lTnVtYmVyfeqwgCDsmpTssq1gKTtcbiAgICBjb25zb2xlLmxvZyhgJHtkYXRhLm1lc3NhZ2V9YCk7XG4gICAgaGlzdG9yeS5wdXNoKFwiL3N0dWRlbnQvYnV5VGlja2V0XCIpOyAvLyBUb0RvIDog7Yuw7LyTIOqwr+yImCDtmZXsnbjtlZjripQg6rO87KCVIOuTpOyWtOqwgOyVvO2VqFxuICB9O1xuXG4gIGNvbnN0IFN0dWRlbnRJbnF1aXJ5TGVzc29uUGFnZVByb3A6IFN0dWRlbnRJbnF1aXJ5TGVzc29uUGFnZVByb3AgPSB7XG4gICAgdGVhY2hlck5hbWU6IGNsaWNrZWRUZWFjaGVyLnRlYWNoZXJOYW1lLFxuICAgIHRlYWNoZXJJbWc6IGNsaWNrZWRUZWFjaGVyLnByb2ZpbGVJbWFnZSxcbiAgICB1c2VyRnJvbnRTd2luZ1ZpZGVvOiB1c2VyRnJvbnRTd2luZ1ZpZGVvLFxuICAgIHVzZXJTaWRlU3dpbmdWaWRlbzogdXNlclNpZGVTd2luZ1ZpZGVvLFxuICAgIHVwbG9hZEZyb250VmlkZW86ICh2aWRlbzogRmlsZSB8IHVuZGVmaW5lZCkgPT4gc2V0VXNlckZyb250U3dpbmdWaWRlbyh2aWRlbyksXG4gICAgdXBsb2FkU2lkZVZpZGVvOiAodmlkZW86IEZpbGUgfCB1bmRlZmluZWQpID0+IHNldFVzZXJTaWRlU3dpbmdWaWRlbyh2aWRlbyksXG4gICAgcmVnaXN0ZXI6IHJlZ2lzdGVyLFxuICAgIGVycm9yczogZXJyb3JzLFxuICAgIGhhbmRsZVN1Ym1pdDogaGFuZGxlU3VibWl0LFxuICAgIHN1Ym1pdExlc3Nvbjogc3VibWl0TGVzc29uLFxuICB9O1xuICByZXR1cm4gPFN0dWRlbnRJbnF1aXJ5TGVzc29uUGFnZVZpZXcgey4uLlN0dWRlbnRJbnF1aXJ5TGVzc29uUGFnZVByb3B9IC8+O1xufTtcblxuaW50ZXJmYWNlIFN0dWRlbnRJbnF1aXJ5TGVzc29uUGFnZVByb3Age1xuICB0ZWFjaGVyTmFtZTogc3RyaW5nO1xuICB0ZWFjaGVySW1nOiBzdHJpbmc7XG4gIHVzZXJGcm9udFN3aW5nVmlkZW86IEZpbGUgfCB1bmRlZmluZWQ7XG4gIHVzZXJTaWRlU3dpbmdWaWRlbzogRmlsZSB8IHVuZGVmaW5lZDtcbiAgdXBsb2FkRnJvbnRWaWRlbzogKHZpZGVvOiBGaWxlIHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xuICB1cGxvYWRTaWRlVmlkZW86ICh2aWRlbzogRmlsZSB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcbiAgcmVnaXN0ZXI6IFVzZUZvcm1SZWdpc3Rlcjxhbnk+O1xuICBlcnJvcnM6IEZpZWxkRXJyb3JzPGFueT47XG4gIGhhbmRsZVN1Ym1pdDogVXNlRm9ybUhhbmRsZVN1Ym1pdDxhbnk+O1xuICBzdWJtaXRMZXNzb246IChkYXRhOiBJRm9ybUlucHV0cykgPT4gdm9pZDtcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHN0dWRlbnRJbnF1aXJ5TGVzc29uUGFnZToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICBcIiYgPiBkaXZcIjoge1xuICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiMC41cmVtXCIsXG4gICAgfSxcbiAgfSxcbiAgaGVhZGVyTGF5b3V0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgd2lkdGg6IFwiOTUlXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5CbG9ja1N0YXJ0OiBcIjAsNXJlbVwiLFxuICAgIFwiJiA+IGltZ1wiOiB7XG4gICAgICB3aWR0aDogXCIzMHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMzBweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiLFxuICAgIH0sXG4gICAgXCImID4gaDNcIjoge1xuICAgICAgbWFyZ2luQmxvY2s6IFwiMHB4XCIsXG4gICAgfSxcbiAgfSxcbiAgZm9ybToge1xuICAgIHdpZHRoOiBcIjk1JVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgfSxcbiAgdXBsb2FkVmlkZW9MYXlvdXQ6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICB3aWR0aDogXCI5NSVcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIFwiJiA+IGg0XCI6IHtcbiAgICAgIG1hcmdpbkJsb2NrOiBcIjVweFwiLFxuICAgIH0sXG4gIH0sXG4gIGJ0bkdyb3VwOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICB9LFxuICBub3RpOiB7XG4gICAgZm9udFNpemU6IFwiMC43NXJlbVwiLFxuICAgIGNvbG9yOiBcImdyYXlcIixcbiAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IFwiMXJlbVwiLFxuICB9LFxuICBtZXNzYWdlTGF5b3V0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgd2lkdGg6IFwiOTUlXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBcIiYgPiBoNFwiOiB7XG4gICAgICBtYXJnaW5CbG9jazogXCI1cHhcIixcbiAgICB9LFxuICAgIFwiJiA+IHRleHRhcmVhXCI6IHtcbiAgICAgIGhlaWdodDogXCIxNXZoXCIsXG4gICAgICByZXNpemU6IFwibm9uZVwiLFxuICAgICAgcGFkZGluZzogXCIxcmVtXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxuICAgICAgYm9yZGVyQ29sb3I6IFwiI0U5RUJGMFwiLFxuICAgICAgXCImOmZvY3VzXCI6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgICAgIG91dGxpbmU6IFwibm9uZSAhaW1wb3J0YW50XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGZlZWRiYWNrTGF5b3V0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgd2lkdGg6IFwiOTUlXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBcIiYgPiBoNFwiOiB7XG4gICAgICBtYXJnaW5CbG9jazogXCI1cHhcIixcbiAgICB9LFxuICAgIFwiJiA+IGg1XCI6IHtcbiAgICAgIG1hcmdpbkJsb2NrOiBcIjFweFwiLFxuICAgICAgY29sb3I6IFwiIzY5Njk3Q1wiLFxuICAgICAgbWFyZ2luQmxvY2tTdGFydDogXCIwLjVyZW1cIixcbiAgICB9LFxuICAgIFwiJiA+IGlucHV0XCI6IHtcbiAgICAgIGhlaWdodDogXCIxcmVtXCIsXG4gICAgICByZXNpemU6IFwibm9uZVwiLFxuICAgICAgcGFkZGluZzogXCIxcmVtXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjRTlFQkYwXCIsXG4gICAgICBcIiY6Zm9jdXNcIjoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgICAgb3V0bGluZTogXCJub25lICFpbXBvcnRhbnRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZXJyb3JNc2c6IHtcbiAgICBmb250U2l6ZTogXCIwLjc1cmVtXCIsXG4gICAgY29sb3I6IFwiI2RlMjAyMFwiLFxuICB9LFxuICBhcHBseUJ0bjoge1xuICAgIHdpZHRoOiBcIjkwJVwiLFxuICAgIGhlaWdodDogXCIycmVtXCIsXG4gICAgYm9yZGVyOiBcIjBweFwiLFxuICAgIG1heFdpZHRoOiBcIjMwMHB4XCIsXG4gICAgbWFyZ2luQmxvY2tTdGFydDogXCIwLjVyZW1cIixcbiAgICBtYXJnaW5CbG9ja0VuZDogXCIxcmVtXCIsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgYmFja2dyb3VuZDogXCIjMjVEMTVDXCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgfSxcbn0pKTtcblxuY29uc3QgU3R1ZGVudElucXVpcnlMZXNzb25QYWdlVmlldyA9ICh7XG4gIHRlYWNoZXJOYW1lLFxuICB0ZWFjaGVySW1nLFxuICB1c2VyRnJvbnRTd2luZ1ZpZGVvLFxuICB1c2VyU2lkZVN3aW5nVmlkZW8sXG4gIHVwbG9hZEZyb250VmlkZW8sXG4gIHVwbG9hZFNpZGVWaWRlbyxcbiAgcmVnaXN0ZXIsXG4gIGVycm9ycyxcbiAgaGFuZGxlU3VibWl0LFxuICBzdWJtaXRMZXNzb24sXG59OiBTdHVkZW50SW5xdWlyeUxlc3NvblBhZ2VQcm9wKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHVkZW50SW5xdWlyeUxlc3NvblBhZ2V9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyTGF5b3V0fT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17dGVhY2hlckltZ31cbiAgICAgICAgICBvbkVycm9yPXsoZTogU3ludGhldGljRXZlbnQ8SFRNTEltYWdlRWxlbWVudCwgRXZlbnQ+KSA9PiB7XG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3JjID0gYCR7bG9nb31gO1xuICAgICAgICAgIH19XG4gICAgICAgICAgYWx0PXtgJHt0ZWFjaGVyTmFtZX0g7ZSE66GcIOyCrOynhGB9XG4gICAgICAgIC8+XG4gICAgICAgIDxoMz57YCR7dGVhY2hlck5hbWV9IO2UhOuhnOuLmOydmCDroIjsiqgg67Cb6riwYH08L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51cGxvYWRWaWRlb0xheW91dH0+XG4gICAgICAgIDxoND57XCLsiqTsnJkg7JiB7IOBIOyXheuhnOuTnFwifTwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGl9PlxuICAgICAgICAgIOyYgeyDgeydgCDstZzrjIAgMuqwnOq5jOyngCDsl4XroZzrk5wg7ZWgIOyImCDsnojslrTsmpQuIDxiciAvPlxuICAgICAgICAgIOyekOyEuO2VnCDtlLzrk5zrsLHsnYQg7JyE7ZW07IScIOygleuptOqzvCDsuKHrqbQg7JiB7IOB7J2EIOy2lOyynO2VtOyalC5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bkdyb3VwfT5cbiAgICAgICAgICA8VmlkZW9VcGxvYWRCdXR0b24gc3dpbmdUeXBlPXtcIkZyb250XCJ9IHZpZGVvPXt1c2VyRnJvbnRTd2luZ1ZpZGVvfSB1cGxvYWRWaWRlbz17dXBsb2FkRnJvbnRWaWRlb30gLz5cbiAgICAgICAgICA8VmlkZW9VcGxvYWRCdXR0b24gc3dpbmdUeXBlPXtcIlNpZGVcIn0gdmlkZW89e3VzZXJTaWRlU3dpbmdWaWRlb30gdXBsb2FkVmlkZW89e3VwbG9hZFNpZGVWaWRlb30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdExlc3Nvbil9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlTGF5b3V0fT5cbiAgICAgICAgICA8aDQ+e1wi7ZSE66Gc64uY7JeQ6rKMIOuCqOq4uCDrqZTsi5zsp4BcIn08L2g0PlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwibWVzc2FnZVwiKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7JiI7IucKSDslYjrhZXtlZjshLjsmpQg7ZSE66Gc64uYLiDsnbTrn6zsnbTrn6ztlZwg67aA67aE7J20IOqzoOuvvOyeheuLiOuLpC4g7J2065+s7J2065+s7ZWcIOyhsOyWuCDrtoDtg4Hrk5zrpr3ri4jri6QuXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmVlZGJhY2tMYXlvdXR9PlxuICAgICAgICAgIDxoND57XCLtlLzrk5zrsLEg67Cb7J2EIOyXsOudveyymFwifTwvaDQ+XG4gICAgICAgICAgPGg1PuydtOumhDwvaDU+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJyZXNwb25zZVVzZXJOYW1lXCIsIHsgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogMTAsIHBhdHRlcm46IC9eW0EtWmEteuOEsS3jhY7jhY8t44Wj6rCALe2eo10rJC9pIH0pfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtmY3quLjrj5lcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3JNc2d9PntlcnJvcnMucmVzcG9uc2VVc2VyTmFtZSAmJiBcIuydtOumhOydhCDsoJzrjIDroZwg7J6F66Cl7ZW07KO87IS47JqULlwifTwvZGl2PlxuICAgICAgICAgIDxoNT7tlbjrk5ztj7Ag67KI7Zi4PC9oNT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInJlc3BvbnNlUGhvbmVOdW1iZXJcIiwge1xuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgcGF0dGVybjogL14wMShbMHwxfDZ8N3w4fDldKS0/KFswLTldezMsNH0pLT8oWzAtOV17NH0pJC8sXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMDEwLTEyMzQtNTY3OFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lcnJvck1zZ30+e2Vycm9ycy5yZXNwb25zZVBob25lTnVtYmVyICYmIFwi7ZW465Oc7Y+wIOuyiO2YuOulvCDsoJzrjIDroZwg7J6F66Cl7ZW07KO87IS47JqULlwifTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBseUJ0bn0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi66CI7IqoIOyLoOyyrVwiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50SW5xdWlyeUxlc3NvblBhZ2U7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiO1xuaW1wb3J0IENsZWFySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NsZWFyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIFZpZGVvVXBsb2FkQnV0dG9uOiB7XG4gICAgd2lkdGg6IFwiN3JlbVwiLFxuICAgIGhlaWdodDogXCI3cmVtXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gIH0sXG4gIHZpZGVvOiB7XG4gICAgd2lkdGg6IFwiNnJlbVwiLFxuICAgIGhlaWdodDogXCI2cmVtXCIsXG4gICAgbWFyZ2luOiBcIjAuNXJlbVwiLFxuICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxuICB9LFxuICBhZGRJbWdCdG46IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0U5RUNFRlwiLFxuICAgIHBhZGRpbmc6IFwiMS41cmVtXCIsXG4gICAgbWFyZ2luOiBcIjAuNXJlbVwiLFxuICAgIGZvbnRTaXplOiBcIjNyZW1cIixcbiAgICBjb2xvcjogXCIjQURCNUJEXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgfSxcbiAgY2xlYXJWaWRlb0ljb246IHtcbiAgICBmbG9hdDogXCJyaWdodFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgbGVmdDogXCItMjBweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMTAwJVwiLFxuICAgIGZvbnRTaXplOiBcIjEuMjVyZW1cIixcbiAgICBtYXJnaW46IFwiMHB4IDFyZW0gMXJlbSAwcHhcIixcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIFZpZGVvVXBsb2FkQnV0dG9uUHJvcCB7XG4gIHN3aW5nVHlwZTogXCJGcm9udFwiIHwgXCJTaWRlXCIgfCBcImhpZ2hsaWdodFwiO1xuICB2aWRlbzogRmlsZSB8IHVuZGVmaW5lZDtcbiAgdXBsb2FkVmlkZW86ICh2aWRlbzogRmlsZSB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcbn1cblxuY29uc3QgVmlkZW9VcGxvYWRCdXR0b24gPSAoeyBzd2luZ1R5cGUsIHZpZGVvLCB1cGxvYWRWaWRlbyB9OiBWaWRlb1VwbG9hZEJ1dHRvblByb3ApID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbdXBsb2FkZWRWaWRlbywgc2V0VXBsb2FkZWRWaWRlb10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpZGVvID09PSB1bmRlZmluZWQpIHJldHVybiBzZXRVcGxvYWRlZFZpZGVvKFwiXCIpO1xuICAgIGNvbnN0IHZpZGVvVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh2aWRlbyk7XG4gICAgaWYgKHZpZGVvVVJMKSBzZXRVcGxvYWRlZFZpZGVvKHZpZGVvVVJMKTtcbiAgfSwgW3ZpZGVvXSk7XG5cbiAgY29uc3QgY2xlYXJVcGxvYWRWaWRlbyA9ICgpID0+IHtcbiAgICB1cGxvYWRWaWRlbyh1bmRlZmluZWQpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlZpZGVvVXBsb2FkQnV0dG9ufT5cbiAgICAgIHt1cGxvYWRlZFZpZGVvLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHZpZGVvIGNsYXNzTmFtZT17Y2xhc3Nlcy52aWRlb30+XG4gICAgICAgICAgICA8c291cmNlIHNyYz17dXBsb2FkZWRWaWRlb30gLz5cbiAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgIDxDbGVhckljb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbGVhclZpZGVvSWNvbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJVcGxvYWRWaWRlbygpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2B2aWRlb0lucHV0LSR7c3dpbmdUeXBlfWB9PlxuICAgICAgICAgICAgPEFkZEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmFkZEltZ0J0bn0gLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2B2aWRlb0lucHV0LSR7c3dpbmdUeXBlfWB9XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLnRhcmdldC5maWxlcykge1xuICAgICAgICAgICAgICAgIHVwbG9hZFZpZGVvKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlb1VwbG9hZEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlSGlzdG9yeSIsInVzZVJvdXRlTWF0Y2giLCJtYWtlU3R5bGVzIiwiVmlkZW9VcGxvYWRCdXR0b24iLCJjbGlja2VkVGVhY2hlclN0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJsb2dvIiwidXNlRm9ybSIsIlN0dWRlbnRJbnF1aXJ5TGVzc29uUGFnZSIsImNsaWNrZWRUZWFjaGVyIiwicGFyYW1zIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJ1c2VyRnJvbnRTd2luZ1ZpZGVvIiwic2V0VXNlckZyb250U3dpbmdWaWRlbyIsInVzZXJTaWRlU3dpbmdWaWRlbyIsInNldFVzZXJTaWRlU3dpbmdWaWRlbyIsImhpc3RvcnkiLCJzdWJtaXRMZXNzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRlYWNoZXJOYW1lIiwicmVzcG9uc2VVc2VyTmFtZSIsInJlc3BvbnNlUGhvbmVOdW1iZXIiLCJtZXNzYWdlIiwicHVzaCIsIlN0dWRlbnRJbnF1aXJ5TGVzc29uUGFnZVByb3AiLCJ0ZWFjaGVySW1nIiwicHJvZmlsZUltYWdlIiwidXBsb2FkRnJvbnRWaWRlbyIsInZpZGVvIiwidXBsb2FkU2lkZVZpZGVvIiwidXNlU3R5bGVzIiwidGhlbWUiLCJzdHVkZW50SW5xdWlyeUxlc3NvblBhZ2UiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImZsZXhHcm93IiwibWF4V2lkdGgiLCJ3aWR0aCIsIm1hcmdpbkJsb2NrRW5kIiwiaGVhZGVyTGF5b3V0IiwibWFyZ2luQmxvY2tTdGFydCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQmxvY2siLCJmb3JtIiwidXBsb2FkVmlkZW9MYXlvdXQiLCJidG5Hcm91cCIsIm5vdGkiLCJmb250U2l6ZSIsImNvbG9yIiwicGFkZGluZ0lubGluZVN0YXJ0IiwibWVzc2FnZUxheW91dCIsInJlc2l6ZSIsInBhZGRpbmciLCJib3JkZXJDb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwib3V0bGluZSIsImZlZWRiYWNrTGF5b3V0IiwiYm9yZGVyIiwiZXJyb3JNc2ciLCJhcHBseUJ0biIsImZvbnRXZWlnaHQiLCJiYWNrZ3JvdW5kIiwiU3R1ZGVudElucXVpcnlMZXNzb25QYWdlVmlldyIsImNsYXNzZXMiLCJlIiwiY3VycmVudFRhcmdldCIsIm9uZXJyb3IiLCJzcmMiLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsInBhdHRlcm4iLCJBZGRJY29uIiwiQ2xlYXJJY29uIiwidXNlRWZmZWN0IiwiYWRkSW1nQnRuIiwiYmFja2dyb3VuZENvbG9yIiwiY2xlYXJWaWRlb0ljb24iLCJmbG9hdCIsInBvc2l0aW9uIiwibGVmdCIsInN3aW5nVHlwZSIsInVwbG9hZFZpZGVvIiwidXBsb2FkZWRWaWRlbyIsInNldFVwbG9hZGVkVmlkZW8iLCJ1bmRlZmluZWQiLCJ2aWRlb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNsZWFyVXBsb2FkVmlkZW8iLCJsZW5ndGgiLCJ0YXJnZXQiLCJmaWxlcyJdLCJzb3VyY2VSb290IjoiIn0=