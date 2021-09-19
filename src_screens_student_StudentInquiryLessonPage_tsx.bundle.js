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
    history.push("/student/purChaseCoupon");
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
  root: {},
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
    className: classes.root
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmVlbnNfc3R1ZGVudF9TdHVkZW50SW5xdWlyeUxlc3NvblBhZ2VfdHN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBUUEsTUFBTVUsd0JBQXdCLEdBQUcsTUFBTTtBQUNyQyxRQUFNQyxjQUFjLEdBQUdKLHNEQUFjLENBQUNELHFFQUFELENBQXJDO0FBQ0EsTUFBSTtBQUFFTSxJQUFBQTtBQUFGLE1BQWFULCtEQUFhLEVBQTlCO0FBQ0EsUUFBTTtBQUNKVSxJQUFBQSxRQURJO0FBRUpDLElBQUFBLFlBRkk7QUFHSkMsSUFBQUEsU0FBUyxFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFIUCxNQUlGUCx3REFBTyxFQUpYO0FBTUEsUUFBTSxDQUFDUSxtQkFBRCxFQUFzQkMsc0JBQXRCLElBQWdEakIsK0NBQVEsRUFBOUQ7QUFDQSxRQUFNLENBQUNrQixrQkFBRCxFQUFxQkMscUJBQXJCLElBQThDbkIsK0NBQVEsRUFBNUQ7QUFDQSxNQUFJb0IsT0FBTyxHQUFHbkIsNERBQVUsRUFBeEI7O0FBRUEsUUFBTW9CLFlBQVksR0FBSUMsSUFBRCxJQUF1QjtBQUMxQ0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQlIsbUJBQWxCO0FBQ0FPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBa0JOLGtCQUFsQjtBQUNBSyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxHQUFFZCxjQUFjLENBQUNlLFdBQVksT0FBTUgsSUFBSSxDQUFDSSxnQkFBaUIsS0FBSUosSUFBSSxDQUFDSyxtQkFBb0IsTUFBbkc7QUFDQUosSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsR0FBRUYsSUFBSSxDQUFDTSxPQUFRLEVBQTVCO0FBQ0FSLElBQUFBLE9B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QixnQkFDQyxpSEFDRTtBQUFPLGFBQVMsRUFBRTNCLE9BQU8sQ0FBQzFDO0FBQTFCLGtCQUNFO0FBQVEsT0FBRyxFQUFFOEQ7QUFBYixJQURGLENBREYsZUFJRSxpREFBQyw2REFBRDtBQUNFLGFBQVMsRUFBRXBCLE9BQU8sQ0FBQ2MsY0FEckI7QUFFRSxXQUFPLEVBQUUsTUFBTTtBQUNiWSxNQUFBQSxnQkFBZ0I7QUFDakI7QUFKSCxJQUpGLENBREQsZ0JBYUMsaUhBQ0U7QUFBTyxXQUFPLEVBQUcsY0FBYVIsU0FBVTtBQUF4QyxrQkFDRSxpREFBQywyREFBRDtBQUFTLGFBQVMsRUFBRWxCLE9BQU8sQ0FBQ1k7QUFBNUIsSUFERixDQURGLGVBSUU7QUFDRSxNQUFFLEVBQUcsY0FBYU0sU0FBVSxFQUQ5QjtBQUVFLFFBQUksRUFBQyxNQUZQO0FBR0UsU0FBSyxFQUFFO0FBQUV2RCxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUhUO0FBSUUsWUFBUSxFQUFHc0MsQ0FBRCxJQUFPO0FBQ2YsVUFBSUEsQ0FBQyxDQUFDMkIsTUFBRixDQUFTQyxLQUFiLEVBQW9CO0FBQ2xCVixRQUFBQSxXQUFXLENBQUNsQixDQUFDLENBQUMyQixNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBQUQsQ0FBWDtBQUNEO0FBQ0Y7QUFSSCxJQUpGLENBZEosQ0FERjtBQWlDRCxDQTlDRDs7Y0FBTXJHLGdIQUNZZ0M7O2lCQStDSGhDO0FBQWYsaUVBQWU7Ozs7Ozs7Ozs7MEJBbkZUZ0M7MEJBbUNBaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3VuZGluX2hvbWVwYWdlLy4vc3JjL3NjcmVlbnMvc3R1ZGVudC9TdHVkZW50SW5xdWlyeUxlc3NvblBhZ2UudHN4Iiwid2VicGFjazovL3JvdW5kaW5faG9tZXBhZ2UvLi9zcmMvdXRpbHMvY29tbW9uL3dpZGdldC9WaWRlb1VwbG9hZEJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4tIG93bmVyOiBA6rCV6rK97ISdXG4tIGNvbnRyaWJ1dG9yOiBA6rCV6rK97ISdXG4tIGZ1bmN0aW9uOiDqsJXsnZgg7JqU7LKtIO2OmOydtOyngFxuLSBzY3JlZW46IEFfMDNcbi0gY29tbWVudDog7ISg7YOd7ZWcIOyEoOyDneuLmOyXkOqyjCDqsJXsnZjrpbwg7JqU7LKt7ZWY64qUIO2OmOydtOyngFxuKiovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlUm91dGVNYXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgVmlkZW9VcGxvYWRCdXR0b24gZnJvbSBcIkBzcmMvdXRpbHMvY29tbW9uL3dpZGdldC9WaWRlb1VwbG9hZEJ1dHRvblwiO1xuaW1wb3J0IHsgY2xpY2tlZFRlYWNoZXJTdGF0ZSB9IGZyb20gXCJAc3JjL3N0b3Jlcy9TdHVkZW50U3RvcmVcIjtcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgU3ludGhldGljRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBsb2dvIGZyb20gXCJAcmVzL2ltYWdlcy9sb2dvLnBuZ1wiO1xuaW1wb3J0IHsgRmllbGRFcnJvcnMsIHVzZUZvcm0sIFVzZUZvcm1IYW5kbGVTdWJtaXQsIFVzZUZvcm1SZWdpc3RlciB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuaW50ZXJmYWNlIElGb3JtSW5wdXRzIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICByZXNwb25zZVVzZXJOYW1lOiBzdHJpbmc7XG4gIHJlc3BvbnNlUGhvbmVOdW1iZXI6IHN0cmluZztcbn1cblxuY29uc3QgU3R1ZGVudElucXVpcnlMZXNzb25QYWdlID0gKCkgPT4ge1xuICBjb25zdCBjbGlja2VkVGVhY2hlciA9IHVzZVJlY29pbFZhbHVlKGNsaWNrZWRUZWFjaGVyU3RhdGUpO1xuICBsZXQgeyBwYXJhbXMgfSA9IHVzZVJvdXRlTWF0Y2g8eyB0ZWFjaGVyTmFtZTogc3RyaW5nIH0+KCk7XG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybTxJRm9ybUlucHV0cz4oKTtcblxuICBjb25zdCBbdXNlckZyb250U3dpbmdWaWRlbywgc2V0VXNlckZyb250U3dpbmdWaWRlb10gPSB1c2VTdGF0ZTxGaWxlIHwgdW5kZWZpbmVkPigpO1xuICBjb25zdCBbdXNlclNpZGVTd2luZ1ZpZGVvLCBzZXRVc2VyU2lkZVN3aW5nVmlkZW9dID0gdXNlU3RhdGU8RmlsZSB8IHVuZGVmaW5lZD4oKTtcbiAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgY29uc3Qgc3VibWl0TGVzc29uID0gKGRhdGE6IElGb3JtSW5wdXRzKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCLsoJXrqbRcIiwgdXNlckZyb250U3dpbmdWaWRlbyk7XG4gICAgY29uc29sZS5sb2coXCLsuKHrqbRcIiwgdXNlclNpZGVTd2luZ1ZpZGVvKTtcbiAgICBjb25zb2xlLmxvZyhgJHtjbGlja2VkVGVhY2hlci50ZWFjaGVyTmFtZX0g7JeQ6rKMICR7ZGF0YS5yZXNwb25zZVVzZXJOYW1lfSwgJHtkYXRhLnJlc3BvbnNlUGhvbmVOdW1iZXJ96rCAIOyalOyyrWApO1xuICAgIGNvbnNvbGUubG9nKGAke2RhdGEubWVzc2FnZX1gKTtcbiAgICBoaXN0b3J5LnB1c2goXCIvc3R1ZGVudC9wdXJDaGFzZUNvdXBvblwiKTtcbiAgfTtcblxuICBjb25zdCBTdHVkZW50SW5xdWlyeUxlc3NvblBhZ2VQcm9wOiBTdHVkZW50SW5xdWlyeUxlc3NvblBhZ2VQcm9wID0ge1xuICAgIHRlYWNoZXJOYW1lOiBjbGlja2VkVGVhY2hlci50ZWFjaGVyTmFtZSxcbiAgICB0ZWFjaGVySW1nOiBjbGlja2VkVGVhY2hlci5wcm9maWxlSW1hZ2UsXG4gICAgdXNlckZyb250U3dpbmdWaWRlbzogdXNlckZyb250U3dpbmdWaWRlbyxcbiAgICB1c2VyU2lkZVN3aW5nVmlkZW86IHVzZXJTaWRlU3dpbmdWaWRlbyxcbiAgICB1cGxvYWRGcm9udFZpZGVvOiAodmlkZW86IEZpbGUgfCB1bmRlZmluZWQpID0+IHNldFVzZXJGcm9udFN3aW5nVmlkZW8odmlkZW8pLFxuICAgIHVwbG9hZFNpZGVWaWRlbzogKHZpZGVvOiBGaWxlIHwgdW5kZWZpbmVkKSA9PiBzZXRVc2VyU2lkZVN3aW5nVmlkZW8odmlkZW8pLFxuICAgIHJlZ2lzdGVyOiByZWdpc3RlcixcbiAgICBlcnJvcnM6IGVycm9ycyxcbiAgICBoYW5kbGVTdWJtaXQ6IGhhbmRsZVN1Ym1pdCxcbiAgICBzdWJtaXRMZXNzb246IHN1Ym1pdExlc3NvbixcbiAgfTtcbiAgcmV0dXJuIDxTdHVkZW50SW5xdWlyeUxlc3NvblBhZ2VWaWV3IHsuLi5TdHVkZW50SW5xdWlyeUxlc3NvblBhZ2VQcm9wfSAvPjtcbn07XG5cbmludGVyZmFjZSBTdHVkZW50SW5xdWlyeUxlc3NvblBhZ2VQcm9wIHtcbiAgdGVhY2hlck5hbWU6IHN0cmluZztcbiAgdGVhY2hlckltZzogc3RyaW5nO1xuICB1c2VyRnJvbnRTd2luZ1ZpZGVvOiBGaWxlIHwgdW5kZWZpbmVkO1xuICB1c2VyU2lkZVN3aW5nVmlkZW86IEZpbGUgfCB1bmRlZmluZWQ7XG4gIHVwbG9hZEZyb250VmlkZW86ICh2aWRlbzogRmlsZSB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcbiAgdXBsb2FkU2lkZVZpZGVvOiAodmlkZW86IEZpbGUgfCB1bmRlZmluZWQpID0+IHZvaWQ7XG4gIHJlZ2lzdGVyOiBVc2VGb3JtUmVnaXN0ZXI8YW55PjtcbiAgZXJyb3JzOiBGaWVsZEVycm9yczxhbnk+O1xuICBoYW5kbGVTdWJtaXQ6IFVzZUZvcm1IYW5kbGVTdWJtaXQ8YW55PjtcbiAgc3VibWl0TGVzc29uOiAoZGF0YTogSUZvcm1JbnB1dHMpID0+IHZvaWQ7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBzdHVkZW50SW5xdWlyeUxlc3NvblBhZ2U6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICBmbGV4R3JvdzogMSxcbiAgICBtYXhXaWR0aDogXCI1MDBweFwiLFxuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgXCImID4gZGl2XCI6IHtcbiAgICAgIG1hcmdpbkJsb2NrRW5kOiBcIjAuNXJlbVwiLFxuICAgIH0sXG4gIH0sXG4gIGhlYWRlckxheW91dDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIHdpZHRoOiBcIjk1JVwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQmxvY2tTdGFydDogXCIwLDVyZW1cIixcbiAgICBcIiYgPiBpbWdcIjoge1xuICAgICAgd2lkdGg6IFwiMzBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMDAlXCIsXG4gICAgICBtYXJnaW5SaWdodDogXCIwLjVyZW1cIixcbiAgICB9LFxuICAgIFwiJiA+IGgzXCI6IHtcbiAgICAgIG1hcmdpbkJsb2NrOiBcIjBweFwiLFxuICAgIH0sXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogXCI5NSVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIHVwbG9hZFZpZGVvTGF5b3V0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgd2lkdGg6IFwiOTUlXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBcIiYgPiBoNFwiOiB7XG4gICAgICBtYXJnaW5CbG9jazogXCI1cHhcIixcbiAgICB9LFxuICB9LFxuICBidG5Hcm91cDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgfSxcbiAgbm90aToge1xuICAgIGZvbnRTaXplOiBcIjAuNzVyZW1cIixcbiAgICBjb2xvcjogXCJncmF5XCIsXG4gICAgcGFkZGluZ0lubGluZVN0YXJ0OiBcIjFyZW1cIixcbiAgfSxcbiAgbWVzc2FnZUxheW91dDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIHdpZHRoOiBcIjk1JVwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgXCImID4gaDRcIjoge1xuICAgICAgbWFyZ2luQmxvY2s6IFwiNXB4XCIsXG4gICAgfSxcbiAgICBcIiYgPiB0ZXh0YXJlYVwiOiB7XG4gICAgICBoZWlnaHQ6IFwiMTV2aFwiLFxuICAgICAgcmVzaXplOiBcIm5vbmVcIixcbiAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcbiAgICAgIGJvcmRlckNvbG9yOiBcIiNFOUVCRjBcIixcbiAgICAgIFwiJjpmb2N1c1wiOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgICBvdXRsaW5lOiBcIm5vbmUgIWltcG9ydGFudFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBmZWVkYmFja0xheW91dDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIHdpZHRoOiBcIjk1JVwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgXCImID4gaDRcIjoge1xuICAgICAgbWFyZ2luQmxvY2s6IFwiNXB4XCIsXG4gICAgfSxcbiAgICBcIiYgPiBoNVwiOiB7XG4gICAgICBtYXJnaW5CbG9jazogXCIxcHhcIixcbiAgICAgIGNvbG9yOiBcIiM2OTY5N0NcIixcbiAgICAgIG1hcmdpbkJsb2NrU3RhcnQ6IFwiMC41cmVtXCIsXG4gICAgfSxcbiAgICBcIiYgPiBpbnB1dFwiOiB7XG4gICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgcmVzaXplOiBcIm5vbmVcIixcbiAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI0U5RUJGMFwiLFxuICAgICAgXCImOmZvY3VzXCI6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgICAgIG91dGxpbmU6IFwibm9uZSAhaW1wb3J0YW50XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGVycm9yTXNnOiB7XG4gICAgZm9udFNpemU6IFwiMC43NXJlbVwiLFxuICAgIGNvbG9yOiBcIiNkZTIwMjBcIixcbiAgfSxcbiAgYXBwbHlCdG46IHtcbiAgICB3aWR0aDogXCI5MCVcIixcbiAgICBoZWlnaHQ6IFwiMnJlbVwiLFxuICAgIGJvcmRlcjogXCIwcHhcIixcbiAgICBtYXhXaWR0aDogXCIzMDBweFwiLFxuICAgIG1hcmdpbkJsb2NrU3RhcnQ6IFwiMC41cmVtXCIsXG4gICAgbWFyZ2luQmxvY2tFbmQ6IFwiMXJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGJhY2tncm91bmQ6IFwiIzI1RDE1Q1wiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gIH0sXG59KSk7XG5cbmNvbnN0IFN0dWRlbnRJbnF1aXJ5TGVzc29uUGFnZVZpZXcgPSAoe1xuICB0ZWFjaGVyTmFtZSxcbiAgdGVhY2hlckltZyxcbiAgdXNlckZyb250U3dpbmdWaWRlbyxcbiAgdXNlclNpZGVTd2luZ1ZpZGVvLFxuICB1cGxvYWRGcm9udFZpZGVvLFxuICB1cGxvYWRTaWRlVmlkZW8sXG4gIHJlZ2lzdGVyLFxuICBlcnJvcnMsXG4gIGhhbmRsZVN1Ym1pdCxcbiAgc3VibWl0TGVzc29uLFxufTogU3R1ZGVudElucXVpcnlMZXNzb25QYWdlUHJvcCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3R1ZGVudElucXVpcnlMZXNzb25QYWdlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckxheW91dH0+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3RlYWNoZXJJbWd9XG4gICAgICAgICAgb25FcnJvcj17KGU6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbWFnZUVsZW1lbnQsIEV2ZW50PikgPT4ge1xuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0Lm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnNyYyA9IGAke2xvZ299YDtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFsdD17YCR7dGVhY2hlck5hbWV9IO2UhOuhnCDsgqzsp4RgfVxuICAgICAgICAvPlxuICAgICAgICA8aDM+e2Ake3RlYWNoZXJOYW1lfSDtlITroZzri5jsnZgg66CI7IqoIOuwm+q4sGB9PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXBsb2FkVmlkZW9MYXlvdXR9PlxuICAgICAgICA8aDQ+e1wi7Iqk7JyZIOyYgeyDgSDsl4XroZzrk5xcIn08L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpfT5cbiAgICAgICAgICDsmIHsg4HsnYAg7LWc64yAIDLqsJzquYzsp4Ag7JeF66Gc65OcIO2VoCDsiJgg7J6I7Ja07JqULiA8YnIgLz5cbiAgICAgICAgICDsnpDshLjtlZwg7ZS865Oc67Cx7J2EIOychO2VtOyEnCDsoJXrqbTqs7wg7Lih66m0IOyYgeyDgeydhCDstpTsspztlbTsmpQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5Hcm91cH0+XG4gICAgICAgICAgPFZpZGVvVXBsb2FkQnV0dG9uIHN3aW5nVHlwZT17XCJGcm9udFwifSB2aWRlbz17dXNlckZyb250U3dpbmdWaWRlb30gdXBsb2FkVmlkZW89e3VwbG9hZEZyb250VmlkZW99IC8+XG4gICAgICAgICAgPFZpZGVvVXBsb2FkQnV0dG9uIHN3aW5nVHlwZT17XCJTaWRlXCJ9IHZpZGVvPXt1c2VyU2lkZVN3aW5nVmlkZW99IHVwbG9hZFZpZGVvPXt1cGxvYWRTaWRlVmlkZW99IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXRMZXNzb24pfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZUxheW91dH0+XG4gICAgICAgICAgPGg0PntcIu2UhOuhnOuLmOyXkOqyjCDrgqjquLgg66mU7Iuc7KeAXCJ9PC9oND5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcIm1lc3NhZ2VcIil9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyYiOyLnCkg7JWI64WV7ZWY7IS47JqUIO2UhOuhnOuLmC4g7J2065+s7J2065+s7ZWcIOu2gOu2hOydtCDqs6Drr7zsnoXri4jri6QuIOydtOufrOydtOufrO2VnCDsobDslrgg67aA7YOB65Oc66a964uI64ukLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZlZWRiYWNrTGF5b3V0fT5cbiAgICAgICAgICA8aDQ+e1wi7ZS865Oc67CxIOuwm+ydhCDsl7Drnb3ssphcIn08L2g0PlxuICAgICAgICAgIDxoNT7snbTrpoQ8L2g1PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwicmVzcG9uc2VVc2VyTmFtZVwiLCB7IHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDEwLCBwYXR0ZXJuOiAvXltBLVphLXrjhLEt44WO44WPLeOFo+qwgC3tnqNdKyQvaSB9KX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7ZmN6ri464+ZXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9yTXNnfT57ZXJyb3JzLnJlc3BvbnNlVXNlck5hbWUgJiYgXCLsnbTrpoTsnYQg7KCc64yA66GcIOyeheugpe2VtOyjvOyEuOyalC5cIn08L2Rpdj5cbiAgICAgICAgICA8aDU+7ZW465Oc7Y+wIOuyiO2YuDwvaDU+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJyZXNwb25zZVBob25lTnVtYmVyXCIsIHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgIHBhdHRlcm46IC9eMDEoWzB8MXw2fDd8OHw5XSktPyhbMC05XXszLDR9KS0/KFswLTldezR9KSQvLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAxMC0xMjM0LTU2NzhcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3JNc2d9PntlcnJvcnMucmVzcG9uc2VQaG9uZU51bWJlciAmJiBcIu2VuOuTnO2PsCDrsojtmLjrpbwg7KCc64yA66GcIOyeheugpe2VtOyjvOyEuOyalC5cIn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NsYXNzZXMuYXBwbHlCdG59IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIuugiOyKqCDsi6Dssq1cIiAvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudElucXVpcnlMZXNzb25QYWdlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcbmltcG9ydCBDbGVhckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbGVhclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7fSxcbiAgdmlkZW86IHtcbiAgICB3aWR0aDogXCI2cmVtXCIsXG4gICAgaGVpZ2h0OiBcIjZyZW1cIixcbiAgICBtYXJnaW46IFwiMC41cmVtXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXG4gIH0sXG4gIGFkZEltZ0J0bjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRTlFQ0VGXCIsXG4gICAgcGFkZGluZzogXCIxLjVyZW1cIixcbiAgICBtYXJnaW46IFwiMC41cmVtXCIsXG4gICAgZm9udFNpemU6IFwiM3JlbVwiLFxuICAgIGNvbG9yOiBcIiNBREI1QkRcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICB9LFxuICBjbGVhclZpZGVvSWNvbjoge1xuICAgIGZsb2F0OiBcInJpZ2h0XCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBsZWZ0OiBcIi0yMHB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIxMDAlXCIsXG4gICAgZm9udFNpemU6IFwiMS4yNXJlbVwiLFxuICAgIG1hcmdpbjogXCIwcHggMXJlbSAxcmVtIDBweFwiLFxuICB9LFxufSkpO1xuXG5pbnRlcmZhY2UgVmlkZW9VcGxvYWRCdXR0b25Qcm9wIHtcbiAgc3dpbmdUeXBlOiBcIkZyb250XCIgfCBcIlNpZGVcIjtcbiAgdmlkZW86IEZpbGUgfCB1bmRlZmluZWQ7XG4gIHVwbG9hZFZpZGVvOiAodmlkZW86IEZpbGUgfCB1bmRlZmluZWQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFZpZGVvVXBsb2FkQnV0dG9uID0gKHsgc3dpbmdUeXBlLCB2aWRlbywgdXBsb2FkVmlkZW8gfTogVmlkZW9VcGxvYWRCdXR0b25Qcm9wKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3VwbG9hZGVkVmlkZW8sIHNldFVwbG9hZGVkVmlkZW9dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aWRlbyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gc2V0VXBsb2FkZWRWaWRlbyhcIlwiKTtcbiAgICBjb25zdCB2aWRlb1VSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwodmlkZW8pO1xuICAgIGlmICh2aWRlb1VSTCkgc2V0VXBsb2FkZWRWaWRlbyh2aWRlb1VSTCk7XG4gIH0sIFt2aWRlb10pO1xuXG4gIGNvbnN0IGNsZWFyVXBsb2FkVmlkZW8gPSAoKSA9PiB7XG4gICAgdXBsb2FkVmlkZW8odW5kZWZpbmVkKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIHt1cGxvYWRlZFZpZGVvLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHZpZGVvIGNsYXNzTmFtZT17Y2xhc3Nlcy52aWRlb30+XG4gICAgICAgICAgICA8c291cmNlIHNyYz17dXBsb2FkZWRWaWRlb30gLz5cbiAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgIDxDbGVhckljb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbGVhclZpZGVvSWNvbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJVcGxvYWRWaWRlbygpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2B2aWRlb0lucHV0LSR7c3dpbmdUeXBlfWB9PlxuICAgICAgICAgICAgPEFkZEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmFkZEltZ0J0bn0gLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2B2aWRlb0lucHV0LSR7c3dpbmdUeXBlfWB9XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLnRhcmdldC5maWxlcykge1xuICAgICAgICAgICAgICAgIHVwbG9hZFZpZGVvKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlb1VwbG9hZEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlSGlzdG9yeSIsInVzZVJvdXRlTWF0Y2giLCJtYWtlU3R5bGVzIiwiVmlkZW9VcGxvYWRCdXR0b24iLCJjbGlja2VkVGVhY2hlclN0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJsb2dvIiwidXNlRm9ybSIsIlN0dWRlbnRJbnF1aXJ5TGVzc29uUGFnZSIsImNsaWNrZWRUZWFjaGVyIiwicGFyYW1zIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJ1c2VyRnJvbnRTd2luZ1ZpZGVvIiwic2V0VXNlckZyb250U3dpbmdWaWRlbyIsInVzZXJTaWRlU3dpbmdWaWRlbyIsInNldFVzZXJTaWRlU3dpbmdWaWRlbyIsImhpc3RvcnkiLCJzdWJtaXRMZXNzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRlYWNoZXJOYW1lIiwicmVzcG9uc2VVc2VyTmFtZSIsInJlc3BvbnNlUGhvbmVOdW1iZXIiLCJtZXNzYWdlIiwicHVzaCIsIlN0dWRlbnRJbnF1aXJ5TGVzc29uUGFnZVByb3AiLCJ0ZWFjaGVySW1nIiwicHJvZmlsZUltYWdlIiwidXBsb2FkRnJvbnRWaWRlbyIsInZpZGVvIiwidXBsb2FkU2lkZVZpZGVvIiwidXNlU3R5bGVzIiwidGhlbWUiLCJzdHVkZW50SW5xdWlyeUxlc3NvblBhZ2UiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImZsZXhHcm93IiwibWF4V2lkdGgiLCJ3aWR0aCIsIm1hcmdpbkJsb2NrRW5kIiwiaGVhZGVyTGF5b3V0IiwibWFyZ2luQmxvY2tTdGFydCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQmxvY2siLCJmb3JtIiwidXBsb2FkVmlkZW9MYXlvdXQiLCJidG5Hcm91cCIsIm5vdGkiLCJmb250U2l6ZSIsImNvbG9yIiwicGFkZGluZ0lubGluZVN0YXJ0IiwibWVzc2FnZUxheW91dCIsInJlc2l6ZSIsInBhZGRpbmciLCJib3JkZXJDb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwib3V0bGluZSIsImZlZWRiYWNrTGF5b3V0IiwiYm9yZGVyIiwiZXJyb3JNc2ciLCJhcHBseUJ0biIsImZvbnRXZWlnaHQiLCJiYWNrZ3JvdW5kIiwiU3R1ZGVudElucXVpcnlMZXNzb25QYWdlVmlldyIsImNsYXNzZXMiLCJlIiwiY3VycmVudFRhcmdldCIsIm9uZXJyb3IiLCJzcmMiLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsInBhdHRlcm4iLCJBZGRJY29uIiwiQ2xlYXJJY29uIiwidXNlRWZmZWN0Iiwicm9vdCIsImFkZEltZ0J0biIsImJhY2tncm91bmRDb2xvciIsImNsZWFyVmlkZW9JY29uIiwiZmxvYXQiLCJwb3NpdGlvbiIsImxlZnQiLCJzd2luZ1R5cGUiLCJ1cGxvYWRWaWRlbyIsInVwbG9hZGVkVmlkZW8iLCJzZXRVcGxvYWRlZFZpZGVvIiwidW5kZWZpbmVkIiwidmlkZW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjbGVhclVwbG9hZFZpZGVvIiwibGVuZ3RoIiwidGFyZ2V0IiwiZmlsZXMiXSwic291cmNlUm9vdCI6IiJ9