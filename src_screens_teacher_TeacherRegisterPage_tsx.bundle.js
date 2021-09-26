"use strict";
(self["webpackChunkroundin_homepage"] = self["webpackChunkroundin_homepage"] || []).push([["src_screens_teacher_TeacherRegisterPage_tsx"],{

/***/ "./src/screens/teacher/TeacherRegisterPage.tsx":
/*!*****************************************************!*\
  !*** ./src/screens/teacher/TeacherRegisterPage.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _utils_common_widget_ImgWithSupportError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common/widget/ImgWithSupportError */ "./src/utils/common/widget/ImgWithSupportError.tsx");
/* harmony import */ var _utils_common_widget_VideoUploadButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/common/widget/VideoUploadButton */ "./src/utils/common/widget/VideoUploadButton.tsx");
/* harmony import */ var _utils_common_form_InputForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/common/form/InputForm */ "./src/utils/common/form/InputForm.tsx");
/* harmony import */ var _utils_common_form_TextareaForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/common/form/TextareaForm */ "./src/utils/common/form/TextareaForm.tsx");
/* harmony import */ var _utils_common_form_SelectInputForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/common/form/SelectInputForm */ "./src/utils/common/form/SelectInputForm.tsx");
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
- function: Teacher가 등록하는 페이지
- screen: [P_02]Pro-Auth
- comment: 로그인 후 등록되지 않은 Teacher면 여기로 안내
**/










const TeacherRegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
  const [highlightSwingVideo, sethighlightSwingVideo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const submitRegisterForm = data => {
    if ("proHistory-1" in data) {
      // proHistory 여러개일 경우 모아서 처리하는 추가 로직 필요
      console.log("ddddd");
    }

    console.log("submitRegisterForm", data);
  };

  const TeacherRegisterPageVAProp = {
    highlightSwingVideo: highlightSwingVideo,
    register: register,
    errors: errors,
    watch: watch,
    handleSubmit: handleSubmit,
    submitRegisterForm: submitRegisterForm,
    uploadHighlightVideo: video => sethighlightSwingVideo(video)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TeacherRegisterPageVAPropView, TeacherRegisterPageVAProp);
};

__signature__(TeacherRegisterPage, "useForm{{\n    register,\n    handleSubmit,\n    watch,\n    formState: { errors },\n  }}\nuseState{[highlightSwingVideo, sethighlightSwingVideo]}", () => [react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm]);

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default)(theme => ({
  TeacherRegisterPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    flexGrow: 1,
    maxWidth: "500px",
    width: "100%",
    "& > *": {
      width: "90%"
    },
    "& > div": {
      marginBlockEnd: "0.5rem"
    }
  },
  img: {
    width: "30%"
  },
  form: {
    width: "95%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  formLayout: {
    display: "flex",
    width: "95%",
    flexDirection: "column",
    "& > h4": {
      marginBlock: "5px"
    }
  },
  historyAddBtnLayout: {
    display: "flex",
    justifyContent: "flex-end",
    "& > button": {
      width: "100px",
      height: "2rem",
      border: "0px",
      maxWidth: "300px",
      marginBlockStart: "0.5rem",
      marginBlockEnd: "1rem",
      background: "#F5F6F8",
      color: "#363649",
      borderRadius: "5px"
    }
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

const TeacherRegisterPageVAPropView = ({
  highlightSwingVideo,
  register,
  errors,
  watch,
  handleSubmit,
  submitRegisterForm,
  uploadHighlightVideo
}) => {
  const classes = useStyles();
  const [historyFormGroup, setHistoryFormGroup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_form_SelectInputForm__WEBPACK_IMPORTED_MODULE_6__.default, {
    key: "proHistory-1",
    register: register,
    registerKey: "proHistory-1",
    errors: errors,
    option: ["자격증", "경력", "기타"]
  })]);

  const addHistoryForm = () => {
    const index = historyFormGroup.length + 1;
    setHistoryFormGroup([...historyFormGroup, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_form_SelectInputForm__WEBPACK_IMPORTED_MODULE_6__.default, {
      key: `proHistory-${index}`,
      register: register,
      registerKey: `proHistory-${index}`,
      errors: errors,
      option: ["자격증", "경력", "기타"]
    })]);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.TeacherRegisterPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "\uB77C\uC6B4\uB4DC\uC778 \uD504\uB85C \uB4F1\uB85D \uC2E0\uCCAD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\uD504\uB85C\uD544 \uC0AC\uC9C4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_widget_ImgWithSupportError__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: classes.img,
    imgSrc: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: classes.form,
    onSubmit: handleSubmit(submitRegisterForm)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.formLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\uAE30\uBCF8 \uC815\uBCF4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_form_InputForm__WEBPACK_IMPORTED_MODULE_4__.default, {
    register: register,
    registerKey: "teacheName",
    errors: errors,
    labelText: "이름",
    placeholder: "홍길동",
    errorText: "이름을 제대로 입력해주세요.",
    pattern: /^[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]+$/i
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_form_InputForm__WEBPACK_IMPORTED_MODULE_4__.default, {
    register: register,
    registerKey: "phoneNumber",
    errors: errors,
    labelText: "핸드폰 번호",
    placeholder: "010-1234-5678",
    errorText: "핸드폰 번호를 제대로 입력해주세요.",
    pattern: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_form_InputForm__WEBPACK_IMPORTED_MODULE_4__.default, {
    register: register,
    registerKey: "lessonHistory",
    errors: errors,
    labelText: "레슨 경력",
    placeholder: "3년"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.formLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\uACE8\uD504 \uD504\uB85C \uC774\uB825"), historyFormGroup, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.historyAddBtnLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
    variant: "outlined",
    onClick: () => {
      addHistoryForm();
    }
  }, "\uC774\uB825 \uCD94\uAC00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.formLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\uD504\uB85C\uB2D8\uC744 \uC18C\uAC1C\uD574\uC8FC\uC138\uC694"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_form_TextareaForm__WEBPACK_IMPORTED_MODULE_5__.default, {
    register: register,
    registerKey: "introduction",
    errors: errors,
    watch: watch,
    limit: 200,
    placeholder: "저는 OOOO한 골퍼입니다. 잘 가르칩니다 ㅎㅎ"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.formLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\uC2A4\uC719 \uD558\uC774\uB77C\uC774\uD2B8 \uC601\uC0C1\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_widget_VideoUploadButton__WEBPACK_IMPORTED_MODULE_3__.default, {
    swingType: "highlight",
    video: highlightSwingVideo,
    uploadVideo: uploadHighlightVideo
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.formLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "SNS \uC815\uBCF4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_form_InputForm__WEBPACK_IMPORTED_MODULE_4__.default, {
    register: register,
    registerKey: "youtube",
    defaultValue: "youtube.com/channel/",
    errors: errors,
    labelText: "유튜브",
    placeholder: "홍길동"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_form_InputForm__WEBPACK_IMPORTED_MODULE_4__.default, {
    register: register,
    registerKey: "instagram",
    defaultValue: "instagram.com/",
    errors: errors,
    labelText: "인스타그램",
    placeholder: "010-1234-5678"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: classes.applyBtn,
    type: "submit",
    value: "\uD504\uB85C \uB4F1\uB85D \uC2E0\uCCAD"
  })));
};

__signature__(TeacherRegisterPageVAPropView, "useStyles{classes}\nuseState{[historyFormGroup, setHistoryFormGroup]([\n    <SelectInputForm\n      key={\"proHistory-1\"}\n      register={register}\n      registerKey={\"proHistory-1\"}\n      errors={errors}\n      option={[\"\uC790\uACA9\uC99D\", \"\uACBD\uB825\", \"\uAE30\uD0C0\"]}\n    />,\n  ])}", () => [useStyles]);

const _default = TeacherRegisterPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TeacherRegisterPage, "TeacherRegisterPage", "/Users/gang/StudioProjects/roundin-web/src/screens/teacher/TeacherRegisterPage.tsx");
  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/screens/teacher/TeacherRegisterPage.tsx");
  reactHotLoader.register(TeacherRegisterPageVAPropView, "TeacherRegisterPageVAPropView", "/Users/gang/StudioProjects/roundin-web/src/screens/teacher/TeacherRegisterPage.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/screens/teacher/TeacherRegisterPage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/utils/common/form/InputForm.tsx":
/*!*********************************************!*\
  !*** ./src/utils/common/form/InputForm.tsx ***!
  \*********************************************/
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(theme => ({
  labelText: {
    marginBlock: "1px",
    color: "#69697C",
    marginBlockStart: "0.5rem"
  },
  input: {
    height: "1rem",
    resize: "none",
    padding: "1rem",
    borderRadius: "10px",
    border: "1px solid #E9EBF0",
    "&:focus": {
      borderColor: theme.palette.secondary.main,
      outline: "none !important"
    }
  },
  errorMsg: {
    paddingLeft: "1rem",
    fontSize: "0.75rem",
    color: "#de2020"
  }
}));

const InputForm = ({
  registerKey,
  register,
  errors,
  placeholder = "",
  defaultValue = undefined,
  labelText = undefined,
  errorText = undefined,
  pattern = undefined,
  required = false,
  style
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, labelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: classes.labelText
  }, labelText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
    className: classes.input
  }, register(registerKey, {
    required: required,
    pattern: pattern
  }), {
    defaultValue: defaultValue,
    placeholder: placeholder
  })), errorText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.errorMsg
  }, errors[registerKey] && errorText));
};

__signature__(InputForm, "useStyles{classes}", () => [useStyles]);

const _default = InputForm;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/utils/common/form/InputForm.tsx");
  reactHotLoader.register(InputForm, "InputForm", "/Users/gang/StudioProjects/roundin-web/src/utils/common/form/InputForm.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/utils/common/form/InputForm.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/utils/common/form/SelectInputForm.tsx":
/*!***************************************************!*\
  !*** ./src/utils/common/form/SelectInputForm.tsx ***!
  \***************************************************/
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(theme => ({
  labelText: {
    marginBlock: "1px",
    color: "#69697C",
    marginBlockStart: "0.5rem"
  },
  selectInput: {
    display: "flex",
    width: "100%",
    height: "2rem",
    "& > select": {
      flexGrow: "1",
      border: "1px solid #E9EBF0",
      borderRadius: "10px",
      textAlign: "center",
      "&:focus": {
        borderColor: theme.palette.secondary.main,
        outline: "none !important"
      }
    },
    "& > input": {
      flexGrow: "6",
      border: "1px solid #E9EBF0",
      borderRadius: "10px",
      marginInlineStart: "0.25rem",
      paddingInlineStart: "1rem",
      "&:focus": {
        borderColor: theme.palette.secondary.main,
        outline: "none !important"
      }
    }
  },
  errorMsg: {
    paddingLeft: "1rem",
    fontSize: "0.75rem",
    color: "#de2020"
  }
}));

const SelectInputForm = ({
  registerKey,
  register,
  errors,
  option,
  placeholder = "",
  labelText = undefined,
  errorText = undefined,
  style
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, labelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: classes.labelText
  }, labelText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.selectInput
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", register(registerKey), option.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: item,
      value: item
    }, item);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({}, register(`${registerKey}-input`), {
    placeholder: placeholder
  })), errorText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.errorMsg
  }, errors[registerKey] && errorText)));
};

__signature__(SelectInputForm, "useStyles{classes}", () => [useStyles]);

const _default = SelectInputForm;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/utils/common/form/SelectInputForm.tsx");
  reactHotLoader.register(SelectInputForm, "SelectInputForm", "/Users/gang/StudioProjects/roundin-web/src/utils/common/form/SelectInputForm.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/utils/common/form/SelectInputForm.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/utils/common/form/TextareaForm.tsx":
/*!************************************************!*\
  !*** ./src/utils/common/form/TextareaForm.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)(theme => ({
  labelText: {
    marginBlock: "1px",
    color: "#69697C",
    marginBlockStart: "0.5rem"
  },
  textarea: {
    height: "15vh",
    resize: "none",
    padding: "1rem",
    borderRadius: "10px",
    borderColor: "#E9EBF0",
    "&:focus": {
      borderColor: theme.palette.secondary.main,
      outline: "none !important"
    }
  },
  errorMsg: {
    paddingLeft: "1rem",
    fontSize: "0.75rem",
    color: "#de2020"
  },
  textLength: {
    position: "relative",
    top: "-2rem",
    display: "flex",
    justifyContent: "flex-end",
    paddingInlineEnd: "1rem",
    fontSize: "0.75rem",
    color: "#848496"
  },
  textLengthError: {
    color: "#de2020"
  }
}));

const TextareaForm = ({
  registerKey,
  register,
  errors,
  watch,
  limit = undefined,
  labelText = undefined,
  placeholder = undefined,
  errorText = undefined,
  pattern = undefined,
  required = false,
  style
}) => {
  const classes = useStyles();
  const watchTextarea = watch(registerKey, true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, labelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: classes.labelText
  }, labelText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", _extends({
    className: classes.textarea
  }, register(registerKey, _objectSpread({
    required: required
  }, limit && {
    maxLength: limit
  })), {
    placeholder: placeholder
  })), limit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)(classes.textLength, {
      [classes.textLengthError]: watchTextarea.length > limit
    })
  }, `${watchTextarea.length ? watchTextarea.length : 0}/${limit}`), errorText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.errorMsg
  }, errors[registerKey] && errorText));
};

__signature__(TextareaForm, "useStyles{classes}", () => [useStyles]);

const _default = TextareaForm;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/utils/common/form/TextareaForm.tsx");
  reactHotLoader.register(TextareaForm, "TextareaForm", "/Users/gang/StudioProjects/roundin-web/src/utils/common/form/TextareaForm.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/utils/common/form/TextareaForm.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmVlbnNfdGVhY2hlcl9UZWFjaGVyUmVnaXN0ZXJQYWdlX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFhQSxNQUFNVSxtQkFBbUIsR0FBRyxNQUFNO0FBQ2hDLFFBQU07QUFDSkMsSUFBQUEsUUFESTtBQUVKQyxJQUFBQSxZQUZJO0FBR0pDLElBQUFBLEtBSEk7QUFJSkMsSUFBQUEsU0FBUyxFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFKUCxNQUtGWix3REFBTyxFQUxYO0FBT0EsUUFBTSxDQUFDYSxtQkFBRCxFQUFzQkMsc0JBQXRCLElBQWdEaEIsK0NBQVEsRUFBOUQ7O0FBRUEsUUFBTWlCLGtCQUFrQixHQUFJQyxJQUFELElBQStCO0FBQ3hELFFBQUksa0JBQWtCQSxJQUF0QixFQUE0QjtBQUMxQjtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7O0FBQ0RELElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDRixJQUFsQztBQUNELEdBTkQ7O0FBUUEsUUFBTUcseUJBQW9ELEdBQUc7QUFDM0ROLElBQUFBLG1CQUFtQixFQUFFQSxtQkFEc0M7QUFFM0RMLElBQUFBLFFBQVEsRUFBRUEsUUFGaUQ7QUFHM0RJLElBQUFBLE1BQU0sRUFBRUEsTUFIbUQ7QUFJM0RGLElBQUFBLEtBQUssRUFBRUEsS0FKb0Q7QUFLM0RELElBQUFBLFlBQVksRUFBRUEsWUFMNkM7QUFNM0RNLElBQUFBLGtCQUFrQixFQUFFQSxrQkFOdUM7QUFPM0RLLElBQUFBLG9CQUFvQixFQUFHQyxLQUFELElBQTZCUCxzQkFBc0IsQ0FBQ08sS0FBRDtBQVBkLEdBQTdEO0FBVUEsc0JBQU8saURBQUMsNkJBQUQsRUFBbUNGLHlCQUFu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akI7QUFKSCxJQUpGLENBREQsZ0JBYUMsaUhBQ0U7QUFBTyxXQUFPLEVBQUcsY0FBYVAsU0FBVTtBQUF4QyxrQkFDRSxpREFBQywyREFBRDtBQUFTLGFBQVMsRUFBRW5ELE9BQU8sQ0FBQzhDO0FBQTVCLElBREYsQ0FERixlQUlFO0FBQ0UsTUFBRSxFQUFHLGNBQWFLLFNBQVUsRUFEOUI7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFNBQUssRUFBRTtBQUFFMUUsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FIVDtBQUlFLFlBQVEsRUFBR2tGLENBQUQsSUFBTztBQUNmLFVBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFiLEVBQW9CO0FBQ2xCVCxRQUFBQSxXQUFXLENBQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFELENBQVg7QUFDRDtBQUNGO0FBUkgsSUFKRixDQWRKLENBREY7QUFpQ0QsQ0E5Q0Q7O2NBQU16RyxnSEFDWW1COztpQkErQ0huQjtBQUFmLGlFQUFlOzs7Ozs7Ozs7OzBCQXZGVG1COzBCQXVDQW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm91bmRpbl9ob21lcGFnZS8uL3NyYy9zY3JlZW5zL3RlYWNoZXIvVGVhY2hlclJlZ2lzdGVyUGFnZS50c3giLCJ3ZWJwYWNrOi8vcm91bmRpbl9ob21lcGFnZS8uL3NyYy91dGlscy9jb21tb24vZm9ybS9JbnB1dEZvcm0udHN4Iiwid2VicGFjazovL3JvdW5kaW5faG9tZXBhZ2UvLi9zcmMvdXRpbHMvY29tbW9uL2Zvcm0vU2VsZWN0SW5wdXRGb3JtLnRzeCIsIndlYnBhY2s6Ly9yb3VuZGluX2hvbWVwYWdlLy4vc3JjL3V0aWxzL2NvbW1vbi9mb3JtL1RleHRhcmVhRm9ybS50c3giLCJ3ZWJwYWNrOi8vcm91bmRpbl9ob21lcGFnZS8uL3NyYy91dGlscy9jb21tb24vd2lkZ2V0L1ZpZGVvVXBsb2FkQnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbi0gb3duZXI6IEDqsJXqsr3shJ1cbi0gY29udHJpYnV0b3I6IEDqsJXqsr3shJ1cbi0gZnVuY3Rpb246IFRlYWNoZXLqsIAg65Ox66Gd7ZWY64qUIO2OmOydtOyngFxuLSBzY3JlZW46IFtQXzAyXVByby1BdXRoXG4tIGNvbW1lbnQ6IOuhnOq3uOyduCDtm4Qg65Ox66Gd65CY7KeAIOyViuydgCBUZWFjaGVy66m0IOyXrOq4sOuhnCDslYjrgrRcbioqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBGaWVsZEVycm9ycywgdXNlRm9ybSwgVXNlRm9ybUhhbmRsZVN1Ym1pdCwgVXNlRm9ybVJlZ2lzdGVyLCBVc2VGb3JtV2F0Y2ggfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBJbWdXaXRoU3VwcG9ydEVycm9yIGZyb20gXCJAc3JjL3V0aWxzL2NvbW1vbi93aWRnZXQvSW1nV2l0aFN1cHBvcnRFcnJvclwiO1xuaW1wb3J0IFZpZGVvVXBsb2FkQnV0dG9uIGZyb20gXCJAc3JjL3V0aWxzL2NvbW1vbi93aWRnZXQvVmlkZW9VcGxvYWRCdXR0b25cIjtcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIkBzcmMvdXRpbHMvY29tbW9uL2Zvcm0vSW5wdXRGb3JtXCI7XG5pbXBvcnQgVGV4dGFyZWFGb3JtIGZyb20gXCJAc3JjL3V0aWxzL2NvbW1vbi9mb3JtL1RleHRhcmVhRm9ybVwiO1xuaW1wb3J0IFNlbGVjdElucHV0Rm9ybSBmcm9tIFwiQHNyYy91dGlscy9jb21tb24vZm9ybS9TZWxlY3RJbnB1dEZvcm1cIjtcblxuaW50ZXJmYWNlIFRlYWNoZXJSZWdpc3RlckZvcm0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBob25lTnVtYmVyOiBzdHJpbmc7XG4gIGludHJvZHVjdGlvbjogc3RyaW5nO1xuICBoaWdobGlnaHRWaWRlbzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBzbnM6IHtcbiAgICB0eXBlOiBcInlvdXR1YmVcIiB8IFwiaW5zdGFncmFtXCI7XG4gICAgdXJsOiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IFRlYWNoZXJSZWdpc3RlclBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgd2F0Y2gsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybTxUZWFjaGVyUmVnaXN0ZXJGb3JtPigpO1xuXG4gIGNvbnN0IFtoaWdobGlnaHRTd2luZ1ZpZGVvLCBzZXRoaWdobGlnaHRTd2luZ1ZpZGVvXSA9IHVzZVN0YXRlPEZpbGUgfCB1bmRlZmluZWQ+KCk7XG5cbiAgY29uc3Qgc3VibWl0UmVnaXN0ZXJGb3JtID0gKGRhdGE6IFRlYWNoZXJSZWdpc3RlckZvcm0pID0+IHtcbiAgICBpZiAoXCJwcm9IaXN0b3J5LTFcIiBpbiBkYXRhKSB7XG4gICAgICAvLyBwcm9IaXN0b3J5IOyXrOufrOqwnOydvCDqsr3smrAg66qo7JWE7IScIOyymOumrO2VmOuKlCDstpTqsIAg66Gc7KeBIO2VhOyalFxuICAgICAgY29uc29sZS5sb2coXCJkZGRkZFwiKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJzdWJtaXRSZWdpc3RlckZvcm1cIiwgZGF0YSk7XG4gIH07XG5cbiAgY29uc3QgVGVhY2hlclJlZ2lzdGVyUGFnZVZBUHJvcDogVGVhY2hlclJlZ2lzdGVyUGFnZVZBUHJvcCA9IHtcbiAgICBoaWdobGlnaHRTd2luZ1ZpZGVvOiBoaWdobGlnaHRTd2luZ1ZpZGVvLFxuICAgIHJlZ2lzdGVyOiByZWdpc3RlcixcbiAgICBlcnJvcnM6IGVycm9ycyxcbiAgICB3YXRjaDogd2F0Y2gsXG4gICAgaGFuZGxlU3VibWl0OiBoYW5kbGVTdWJtaXQsXG4gICAgc3VibWl0UmVnaXN0ZXJGb3JtOiBzdWJtaXRSZWdpc3RlckZvcm0sXG4gICAgdXBsb2FkSGlnaGxpZ2h0VmlkZW86ICh2aWRlbzogRmlsZSB8IHVuZGVmaW5lZCkgPT4gc2V0aGlnaGxpZ2h0U3dpbmdWaWRlbyh2aWRlbyksXG4gIH07XG5cbiAgcmV0dXJuIDxUZWFjaGVyUmVnaXN0ZXJQYWdlVkFQcm9wVmlldyB7Li4uVGVhY2hlclJlZ2lzdGVyUGFnZVZBUHJvcH0gLz47XG59O1xuXG5pbnRlcmZhY2UgVGVhY2hlclJlZ2lzdGVyUGFnZVZBUHJvcCB7XG4gIGhpZ2hsaWdodFN3aW5nVmlkZW86IEZpbGUgfCB1bmRlZmluZWQ7XG4gIHJlZ2lzdGVyOiBVc2VGb3JtUmVnaXN0ZXI8YW55PjtcbiAgZXJyb3JzOiBGaWVsZEVycm9yczxhbnk+O1xuICB3YXRjaDogVXNlRm9ybVdhdGNoPGFueT47XG4gIGhhbmRsZVN1Ym1pdDogVXNlRm9ybUhhbmRsZVN1Ym1pdDxhbnk+O1xuICBzdWJtaXRSZWdpc3RlckZvcm06IChkYXRhOiBUZWFjaGVyUmVnaXN0ZXJGb3JtKSA9PiB2b2lkO1xuICB1cGxvYWRIaWdobGlnaHRWaWRlbzogKHZpZGVvOiBGaWxlIHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgVGVhY2hlclJlZ2lzdGVyUGFnZToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIFwiJiA+ICpcIjoge1xuICAgICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgfSxcbiAgICBcIiYgPiBkaXZcIjoge1xuICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiMC41cmVtXCIsXG4gICAgfSxcbiAgfSxcbiAgaW1nOiB7XG4gICAgd2lkdGg6IFwiMzAlXCIsXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogXCI5NSVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIGZvcm1MYXlvdXQ6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICB3aWR0aDogXCI5NSVcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIFwiJiA+IGg0XCI6IHtcbiAgICAgIG1hcmdpbkJsb2NrOiBcIjVweFwiLFxuICAgIH0sXG4gIH0sXG4gIGhpc3RvcnlBZGRCdG5MYXlvdXQ6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxuICAgIFwiJiA+IGJ1dHRvblwiOiB7XG4gICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjJyZW1cIixcbiAgICAgIGJvcmRlcjogXCIwcHhcIixcbiAgICAgIG1heFdpZHRoOiBcIjMwMHB4XCIsXG4gICAgICBtYXJnaW5CbG9ja1N0YXJ0OiBcIjAuNXJlbVwiLFxuICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiMXJlbVwiLFxuICAgICAgYmFja2dyb3VuZDogXCIjRjVGNkY4XCIsXG4gICAgICBjb2xvcjogXCIjMzYzNjQ5XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgfSxcbiAgfSxcbiAgYXBwbHlCdG46IHtcbiAgICB3aWR0aDogXCI5MCVcIixcbiAgICBoZWlnaHQ6IFwiMnJlbVwiLFxuICAgIGJvcmRlcjogXCIwcHhcIixcbiAgICBtYXhXaWR0aDogXCIzMDBweFwiLFxuICAgIG1hcmdpbkJsb2NrU3RhcnQ6IFwiMC41cmVtXCIsXG4gICAgbWFyZ2luQmxvY2tFbmQ6IFwiMXJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGJhY2tncm91bmQ6IFwiIzI1RDE1Q1wiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gIH0sXG59KSk7XG5cbmNvbnN0IFRlYWNoZXJSZWdpc3RlclBhZ2VWQVByb3BWaWV3ID0gKHtcbiAgaGlnaGxpZ2h0U3dpbmdWaWRlbyxcbiAgcmVnaXN0ZXIsXG4gIGVycm9ycyxcbiAgd2F0Y2gsXG4gIGhhbmRsZVN1Ym1pdCxcbiAgc3VibWl0UmVnaXN0ZXJGb3JtLFxuICB1cGxvYWRIaWdobGlnaHRWaWRlbyxcbn06IFRlYWNoZXJSZWdpc3RlclBhZ2VWQVByb3ApID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbaGlzdG9yeUZvcm1Hcm91cCwgc2V0SGlzdG9yeUZvcm1Hcm91cF0gPSB1c2VTdGF0ZTxhbnlbXT4oW1xuICAgIDxTZWxlY3RJbnB1dEZvcm1cbiAgICAgIGtleT17XCJwcm9IaXN0b3J5LTFcIn1cbiAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgIHJlZ2lzdGVyS2V5PXtcInByb0hpc3RvcnktMVwifVxuICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICBvcHRpb249e1tcIuyekOqyqeymnVwiLCBcIuqyveugpVwiLCBcIuq4sO2DgFwiXX1cbiAgICAvPixcbiAgXSk7XG5cbiAgY29uc3QgYWRkSGlzdG9yeUZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBoaXN0b3J5Rm9ybUdyb3VwLmxlbmd0aCArIDE7XG4gICAgc2V0SGlzdG9yeUZvcm1Hcm91cChbXG4gICAgICAuLi5oaXN0b3J5Rm9ybUdyb3VwLFxuICAgICAgPFNlbGVjdElucHV0Rm9ybVxuICAgICAgICBrZXk9e2Bwcm9IaXN0b3J5LSR7aW5kZXh9YH1cbiAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICByZWdpc3RlcktleT17YHByb0hpc3RvcnktJHtpbmRleH1gfVxuICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgb3B0aW9uPXtbXCLsnpDqsqnspp1cIiwgXCLqsr3roKVcIiwgXCLquLDtg4BcIl19XG4gICAgICAvPixcbiAgICBdKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5UZWFjaGVyUmVnaXN0ZXJQYWdlfT5cbiAgICAgIDxoMz7rnbzsmrTrk5zsnbgg7ZSE66GcIOuTseuhnSDsi6Dssq08L2gzPlxuICAgICAgPGg0Pu2UhOuhnO2VhCDsgqzsp4Q8L2g0PlxuICAgICAgPEltZ1dpdGhTdXBwb3J0RXJyb3IgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gaW1nU3JjPXtcIlwifSAvPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0UmVnaXN0ZXJGb3JtKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYXlvdXR9PlxuICAgICAgICAgIDxoND7quLDrs7gg7KCV67O0PC9oND5cbiAgICAgICAgICA8SW5wdXRGb3JtXG4gICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICByZWdpc3RlcktleT17XCJ0ZWFjaGVOYW1lXCJ9XG4gICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICAgIGxhYmVsVGV4dD17XCLsnbTrpoRcIn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIu2Zjeq4uOuPmVwifVxuICAgICAgICAgICAgZXJyb3JUZXh0PXtcIuydtOumhOydhCDsoJzrjIDroZwg7J6F66Cl7ZW07KO87IS47JqULlwifVxuICAgICAgICAgICAgcGF0dGVybj17L15bQS1aYS1644SxLeOFjuOFjy3jhaPqsIAt7Z6jXSskL2l9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW5wdXRGb3JtXG4gICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICByZWdpc3RlcktleT17XCJwaG9uZU51bWJlclwifVxuICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICBsYWJlbFRleHQ9e1wi7ZW465Oc7Y+wIOuyiO2YuFwifVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiMDEwLTEyMzQtNTY3OFwifVxuICAgICAgICAgICAgZXJyb3JUZXh0PXtcIu2VuOuTnO2PsCDrsojtmLjrpbwg7KCc64yA66GcIOyeheugpe2VtOyjvOyEuOyalC5cIn1cbiAgICAgICAgICAgIHBhdHRlcm49ey9eMDEoWzB8MXw2fDd8OHw5XSktPyhbMC05XXszLDR9KS0/KFswLTldezR9KSQvfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPElucHV0Rm9ybVxuICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgcmVnaXN0ZXJLZXk9e1wibGVzc29uSGlzdG9yeVwifVxuICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICBsYWJlbFRleHQ9e1wi66CI7IqoIOqyveugpVwifVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiM+uFhFwifVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGF5b3V0fT5cbiAgICAgICAgICA8aDQ+6rOo7ZSEIO2UhOuhnCDsnbTroKU8L2g0PlxuICAgICAgICAgIHtoaXN0b3J5Rm9ybUdyb3VwfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhpc3RvcnlBZGRCdG5MYXlvdXR9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkSGlzdG9yeUZvcm0oKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg7J2066ClIOy2lOqwgFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGF5b3V0fT5cbiAgICAgICAgICA8aDQ+7ZSE66Gc64uY7J2EIOyGjOqwnO2VtOyjvOyEuOyalDwvaDQ+XG4gICAgICAgICAgPFRleHRhcmVhRm9ybVxuICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgcmVnaXN0ZXJLZXk9e1wiaW50cm9kdWN0aW9uXCJ9XG4gICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICAgIHdhdGNoPXt3YXRjaH1cbiAgICAgICAgICAgIGxpbWl0PXsyMDB9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLsoIDripQgT09PT+2VnCDqs6jtjbzsnoXri4jri6QuIOyemCDqsIDrpbTsuanri4jri6Qg44WO44WOXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYXlvdXR9PlxuICAgICAgICAgIDxoND7siqTsnJkg7ZWY7J2065287J207Yq4IOyYgeyDgeydhCDrk7HroZ3tlbTso7zshLjsmpQ8L2g0PlxuICAgICAgICAgIDxWaWRlb1VwbG9hZEJ1dHRvbiBzd2luZ1R5cGU9e1wiaGlnaGxpZ2h0XCJ9IHZpZGVvPXtoaWdobGlnaHRTd2luZ1ZpZGVvfSB1cGxvYWRWaWRlbz17dXBsb2FkSGlnaGxpZ2h0VmlkZW99IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGF5b3V0fT5cbiAgICAgICAgICA8aDQ+U05TIOygleuztDwvaDQ+XG4gICAgICAgICAgPElucHV0Rm9ybVxuICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgcmVnaXN0ZXJLZXk9e1wieW91dHViZVwifVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcInlvdXR1YmUuY29tL2NoYW5uZWwvXCJ9XG4gICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICAgIGxhYmVsVGV4dD17XCLsnKDtipzruIxcIn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIu2Zjeq4uOuPmVwifVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPElucHV0Rm9ybVxuICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgcmVnaXN0ZXJLZXk9e1wiaW5zdGFncmFtXCJ9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiaW5zdGFncmFtLmNvbS9cIn1cbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgbGFiZWxUZXh0PXtcIuyduOyKpO2DgOq3uOueqFwifVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiMDEwLTEyMzQtNTY3OFwifVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcGx5QnRufSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLtlITroZwg65Ox66GdIOyLoOyyrVwiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZWFjaGVyUmVnaXN0ZXJQYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmllbGRFcnJvcnMsIFVzZUZvcm1SZWdpc3RlciwgVmFsaWRhdGlvblJ1bGUgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFJlZnJlc2hJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1JlZnJlc2hcIjtcblxuaW50ZXJmYWNlIElucHV0Rm9ybVByb3Age1xuICByZWdpc3RlcktleTogc3RyaW5nO1xuICByZWdpc3RlcjogVXNlRm9ybVJlZ2lzdGVyPGFueT47XG4gIGVycm9yczogRmllbGRFcnJvcnM8YW55PjtcbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuICBsYWJlbFRleHQ/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBlcnJvclRleHQ/OiBzdHJpbmc7XG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBwYXR0ZXJuPzogVmFsaWRhdGlvblJ1bGU8UmVnRXhwPiB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGxhYmVsVGV4dDoge1xuICAgIG1hcmdpbkJsb2NrOiBcIjFweFwiLFxuICAgIGNvbG9yOiBcIiM2OTY5N0NcIixcbiAgICBtYXJnaW5CbG9ja1N0YXJ0OiBcIjAuNXJlbVwiLFxuICB9LFxuICBpbnB1dDoge1xuICAgIGhlaWdodDogXCIxcmVtXCIsXG4gICAgcmVzaXplOiBcIm5vbmVcIixcbiAgICBwYWRkaW5nOiBcIjFyZW1cIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI0U5RUJGMFwiLFxuICAgIFwiJjpmb2N1c1wiOiB7XG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgIG91dGxpbmU6IFwibm9uZSAhaW1wb3J0YW50XCIsXG4gICAgfSxcbiAgfSxcbiAgZXJyb3JNc2c6IHtcbiAgICBwYWRkaW5nTGVmdDogXCIxcmVtXCIsXG4gICAgZm9udFNpemU6IFwiMC43NXJlbVwiLFxuICAgIGNvbG9yOiBcIiNkZTIwMjBcIixcbiAgfSxcbn0pKTtcblxuY29uc3QgSW5wdXRGb3JtID0gKHtcbiAgcmVnaXN0ZXJLZXksXG4gIHJlZ2lzdGVyLFxuICBlcnJvcnMsXG4gIHBsYWNlaG9sZGVyID0gXCJcIixcbiAgZGVmYXVsdFZhbHVlID0gdW5kZWZpbmVkLFxuICBsYWJlbFRleHQgPSB1bmRlZmluZWQsXG4gIGVycm9yVGV4dCA9IHVuZGVmaW5lZCxcbiAgcGF0dGVybiA9IHVuZGVmaW5lZCxcbiAgcmVxdWlyZWQgPSBmYWxzZSxcbiAgc3R5bGUsXG59OiBJbnB1dEZvcm1Qcm9wKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xhYmVsVGV4dCAmJiA8aDUgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsVGV4dH0+e2xhYmVsVGV4dH08L2g1Pn1cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG4gICAgICAgIHsuLi5yZWdpc3RlcihyZWdpc3RlcktleSwge1xuICAgICAgICAgIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICAgICAgICB9KX1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIC8+XG4gICAgICB7ZXJyb3JUZXh0ICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9yTXNnfT57ZXJyb3JzW3JlZ2lzdGVyS2V5XSAmJiBlcnJvclRleHR9PC9kaXY+fVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGb3JtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmllbGRFcnJvcnMsIFVzZUZvcm1SZWdpc3RlciwgVmFsaWRhdGlvblJ1bGUgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5pbnRlcmZhY2UgU2VsZWN0SW5wdXRGb3JtUHJvcCB7XG4gIHJlZ2lzdGVyS2V5OiBzdHJpbmc7XG4gIHJlZ2lzdGVyOiBVc2VGb3JtUmVnaXN0ZXI8YW55PjtcbiAgZXJyb3JzOiBGaWVsZEVycm9yczxhbnk+O1xuICBsYWJlbFRleHQ/OiBzdHJpbmc7XG4gIG9wdGlvbjogc3RyaW5nW107XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBlcnJvclRleHQ/OiBzdHJpbmc7XG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGxhYmVsVGV4dDoge1xuICAgIG1hcmdpbkJsb2NrOiBcIjFweFwiLFxuICAgIGNvbG9yOiBcIiM2OTY5N0NcIixcbiAgICBtYXJnaW5CbG9ja1N0YXJ0OiBcIjAuNXJlbVwiLFxuICB9LFxuICBzZWxlY3RJbnB1dDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMnJlbVwiLFxuICAgIFwiJiA+IHNlbGVjdFwiOiB7XG4gICAgICBmbGV4R3JvdzogXCIxXCIsXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFOUVCRjBcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICBcIiY6Zm9jdXNcIjoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgICAgb3V0bGluZTogXCJub25lICFpbXBvcnRhbnRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcIiYgPiBpbnB1dFwiOiB7XG4gICAgICBmbGV4R3JvdzogXCI2XCIsXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFOUVCRjBcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICBtYXJnaW5JbmxpbmVTdGFydDogXCIwLjI1cmVtXCIsXG4gICAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IFwiMXJlbVwiLFxuICAgICAgXCImOmZvY3VzXCI6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgICAgIG91dGxpbmU6IFwibm9uZSAhaW1wb3J0YW50XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGVycm9yTXNnOiB7XG4gICAgcGFkZGluZ0xlZnQ6IFwiMXJlbVwiLFxuICAgIGZvbnRTaXplOiBcIjAuNzVyZW1cIixcbiAgICBjb2xvcjogXCIjZGUyMDIwXCIsXG4gIH0sXG59KSk7XG5cbmNvbnN0IFNlbGVjdElucHV0Rm9ybSA9ICh7XG4gIHJlZ2lzdGVyS2V5LFxuICByZWdpc3RlcixcbiAgZXJyb3JzLFxuICBvcHRpb24sXG4gIHBsYWNlaG9sZGVyID0gXCJcIixcbiAgbGFiZWxUZXh0ID0gdW5kZWZpbmVkLFxuICBlcnJvclRleHQgPSB1bmRlZmluZWQsXG4gIHN0eWxlLFxufTogU2VsZWN0SW5wdXRGb3JtUHJvcCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsYWJlbFRleHQgJiYgPGg1IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbFRleHR9PntsYWJlbFRleHR9PC9oNT59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWxlY3RJbnB1dH0+XG4gICAgICAgIDxzZWxlY3Qgey4uLnJlZ2lzdGVyKHJlZ2lzdGVyS2V5KX0+XG4gICAgICAgICAge29wdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtfSB2YWx1ZT17aXRlbX0+XG4gICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoYCR7cmVnaXN0ZXJLZXl9LWlucHV0YCl9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cbiAgICAgICAge2Vycm9yVGV4dCAmJiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lcnJvck1zZ30+e2Vycm9yc1tyZWdpc3RlcktleV0gJiYgZXJyb3JUZXh0fTwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0SW5wdXRGb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWVsZEVycm9ycywgVXNlRm9ybVJlZ2lzdGVyLCBVc2VGb3JtV2F0Y2gsIFZhbGlkYXRpb25SdWxlIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5cbmludGVyZmFjZSBUZXh0YXJlYUZvcm1Qcm9wIHtcbiAgcmVnaXN0ZXJLZXk6IHN0cmluZztcbiAgcmVnaXN0ZXI6IFVzZUZvcm1SZWdpc3Rlcjxhbnk+O1xuICBlcnJvcnM6IEZpZWxkRXJyb3JzPGFueT47XG4gIHdhdGNoOiBVc2VGb3JtV2F0Y2g8YW55PjtcbiAgbGltaXQ/OiBudW1iZXI7XG4gIGxhYmVsVGV4dD86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGVycm9yVGV4dD86IHN0cmluZztcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICBwYXR0ZXJuPzogVmFsaWRhdGlvblJ1bGU8UmVnRXhwPiB8IHVuZGVmaW5lZDtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgbGFiZWxUZXh0OiB7XG4gICAgbWFyZ2luQmxvY2s6IFwiMXB4XCIsXG4gICAgY29sb3I6IFwiIzY5Njk3Q1wiLFxuICAgIG1hcmdpbkJsb2NrU3RhcnQ6IFwiMC41cmVtXCIsXG4gIH0sXG4gIHRleHRhcmVhOiB7XG4gICAgaGVpZ2h0OiBcIjE1dmhcIixcbiAgICByZXNpemU6IFwibm9uZVwiLFxuICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgYm9yZGVyQ29sb3I6IFwiI0U5RUJGMFwiLFxuICAgIFwiJjpmb2N1c1wiOiB7XG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgIG91dGxpbmU6IFwibm9uZSAhaW1wb3J0YW50XCIsXG4gICAgfSxcbiAgfSxcbiAgZXJyb3JNc2c6IHtcbiAgICBwYWRkaW5nTGVmdDogXCIxcmVtXCIsXG4gICAgZm9udFNpemU6IFwiMC43NXJlbVwiLFxuICAgIGNvbG9yOiBcIiNkZTIwMjBcIixcbiAgfSxcbiAgdGV4dExlbmd0aDoge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgdG9wOiBcIi0ycmVtXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgICBwYWRkaW5nSW5saW5lRW5kOiBcIjFyZW1cIixcbiAgICBmb250U2l6ZTogXCIwLjc1cmVtXCIsXG4gICAgY29sb3I6IFwiIzg0ODQ5NlwiLFxuICB9LFxuICB0ZXh0TGVuZ3RoRXJyb3I6IHtcbiAgICBjb2xvcjogXCIjZGUyMDIwXCIsXG4gIH0sXG59KSk7XG5cbmNvbnN0IFRleHRhcmVhRm9ybSA9ICh7XG4gIHJlZ2lzdGVyS2V5LFxuICByZWdpc3RlcixcbiAgZXJyb3JzLFxuICB3YXRjaCxcbiAgbGltaXQgPSB1bmRlZmluZWQsXG4gIGxhYmVsVGV4dCA9IHVuZGVmaW5lZCxcbiAgcGxhY2Vob2xkZXIgPSB1bmRlZmluZWQsXG4gIGVycm9yVGV4dCA9IHVuZGVmaW5lZCxcbiAgcGF0dGVybiA9IHVuZGVmaW5lZCxcbiAgcmVxdWlyZWQgPSBmYWxzZSxcbiAgc3R5bGUsXG59OiBUZXh0YXJlYUZvcm1Qcm9wKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qgd2F0Y2hUZXh0YXJlYSA9IHdhdGNoKHJlZ2lzdGVyS2V5LCB0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bGFiZWxUZXh0ICYmIDxoNSBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWxUZXh0fT57bGFiZWxUZXh0fTwvaDU+fVxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYX1cbiAgICAgICAgey4uLnJlZ2lzdGVyKHJlZ2lzdGVyS2V5LCB7XG4gICAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICAgICAgICAgIC4uLihsaW1pdCAmJiB7IG1heExlbmd0aDogbGltaXQgfSksXG4gICAgICAgIH0pfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAvPlxuICAgICAge2xpbWl0ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50ZXh0TGVuZ3RoLCB7IFtjbGFzc2VzLnRleHRMZW5ndGhFcnJvcl06IHdhdGNoVGV4dGFyZWEubGVuZ3RoID4gbGltaXQgfSl9PlxuICAgICAgICAgIHtgJHt3YXRjaFRleHRhcmVhLmxlbmd0aCA/IHdhdGNoVGV4dGFyZWEubGVuZ3RoIDogMH0vJHtsaW1pdH1gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7ZXJyb3JUZXh0ICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9yTXNnfT57ZXJyb3JzW3JlZ2lzdGVyS2V5XSAmJiBlcnJvclRleHR9PC9kaXY+fVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFGb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcbmltcG9ydCBDbGVhckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbGVhclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBWaWRlb1VwbG9hZEJ1dHRvbjoge1xuICAgIHdpZHRoOiBcIjdyZW1cIixcbiAgICBoZWlnaHQ6IFwiN3JlbVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9LFxuICB2aWRlbzoge1xuICAgIHdpZHRoOiBcIjZyZW1cIixcbiAgICBoZWlnaHQ6IFwiNnJlbVwiLFxuICAgIG1hcmdpbjogXCIwLjVyZW1cIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcbiAgfSxcbiAgYWRkSW1nQnRuOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNFOUVDRUZcIixcbiAgICBwYWRkaW5nOiBcIjEuNXJlbVwiLFxuICAgIG1hcmdpbjogXCIwLjVyZW1cIixcbiAgICBmb250U2l6ZTogXCIzcmVtXCIsXG4gICAgY29sb3I6IFwiI0FEQjVCRFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gIH0sXG4gIGNsZWFyVmlkZW9JY29uOiB7XG4gICAgZmxvYXQ6IFwicmlnaHRcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGxlZnQ6IFwiLTIwcHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcbiAgICBmb250U2l6ZTogXCIxLjI1cmVtXCIsXG4gICAgbWFyZ2luOiBcIjBweCAxcmVtIDFyZW0gMHB4XCIsXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBWaWRlb1VwbG9hZEJ1dHRvblByb3Age1xuICBzd2luZ1R5cGU6IFwiRnJvbnRcIiB8IFwiU2lkZVwiIHwgXCJoaWdobGlnaHRcIjtcbiAgdmlkZW86IEZpbGUgfCB1bmRlZmluZWQ7XG4gIHVwbG9hZFZpZGVvOiAodmlkZW86IEZpbGUgfCB1bmRlZmluZWQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFZpZGVvVXBsb2FkQnV0dG9uID0gKHsgc3dpbmdUeXBlLCB2aWRlbywgdXBsb2FkVmlkZW8gfTogVmlkZW9VcGxvYWRCdXR0b25Qcm9wKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3VwbG9hZGVkVmlkZW8sIHNldFVwbG9hZGVkVmlkZW9dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aWRlbyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gc2V0VXBsb2FkZWRWaWRlbyhcIlwiKTtcbiAgICBjb25zdCB2aWRlb1VSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwodmlkZW8pO1xuICAgIGlmICh2aWRlb1VSTCkgc2V0VXBsb2FkZWRWaWRlbyh2aWRlb1VSTCk7XG4gIH0sIFt2aWRlb10pO1xuXG4gIGNvbnN0IGNsZWFyVXBsb2FkVmlkZW8gPSAoKSA9PiB7XG4gICAgdXBsb2FkVmlkZW8odW5kZWZpbmVkKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5WaWRlb1VwbG9hZEJ1dHRvbn0+XG4gICAgICB7dXBsb2FkZWRWaWRlby5sZW5ndGggPiAwID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDx2aWRlbyBjbGFzc05hbWU9e2NsYXNzZXMudmlkZW99PlxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9e3VwbG9hZGVkVmlkZW99IC8+XG4gICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICA8Q2xlYXJJY29uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xlYXJWaWRlb0ljb259XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNsZWFyVXBsb2FkVmlkZW8oKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgdmlkZW9JbnB1dC0ke3N3aW5nVHlwZX1gfT5cbiAgICAgICAgICAgIDxBZGRJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRJbWdCdG59IC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPXtgdmlkZW9JbnB1dC0ke3N3aW5nVHlwZX1gfVxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICB1cGxvYWRWaWRlbyhlLnRhcmdldC5maWxlc1swXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9VcGxvYWRCdXR0b247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1ha2VTdHlsZXMiLCJ1c2VGb3JtIiwiQnV0dG9uIiwiSW1nV2l0aFN1cHBvcnRFcnJvciIsIlZpZGVvVXBsb2FkQnV0dG9uIiwiSW5wdXRGb3JtIiwiVGV4dGFyZWFGb3JtIiwiU2VsZWN0SW5wdXRGb3JtIiwiVGVhY2hlclJlZ2lzdGVyUGFnZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJoaWdobGlnaHRTd2luZ1ZpZGVvIiwic2V0aGlnaGxpZ2h0U3dpbmdWaWRlbyIsInN1Ym1pdFJlZ2lzdGVyRm9ybSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiVGVhY2hlclJlZ2lzdGVyUGFnZVZBUHJvcCIsInVwbG9hZEhpZ2hsaWdodFZpZGVvIiwidmlkZW8iLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIiwiZmxleEdyb3ciLCJtYXhXaWR0aCIsIndpZHRoIiwibWFyZ2luQmxvY2tFbmQiLCJpbWciLCJmb3JtIiwiZm9ybUxheW91dCIsIm1hcmdpbkJsb2NrIiwiaGlzdG9yeUFkZEJ0bkxheW91dCIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbkJsb2NrU3RhcnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJhcHBseUJ0biIsImZvbnRXZWlnaHQiLCJUZWFjaGVyUmVnaXN0ZXJQYWdlVkFQcm9wVmlldyIsImNsYXNzZXMiLCJoaXN0b3J5Rm9ybUdyb3VwIiwic2V0SGlzdG9yeUZvcm1Hcm91cCIsImFkZEhpc3RvcnlGb3JtIiwiaW5kZXgiLCJsZW5ndGgiLCJsYWJlbFRleHQiLCJpbnB1dCIsInJlc2l6ZSIsInBhZGRpbmciLCJib3JkZXJDb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwib3V0bGluZSIsImVycm9yTXNnIiwicGFkZGluZ0xlZnQiLCJmb250U2l6ZSIsInJlZ2lzdGVyS2V5IiwicGxhY2Vob2xkZXIiLCJkZWZhdWx0VmFsdWUiLCJ1bmRlZmluZWQiLCJlcnJvclRleHQiLCJwYXR0ZXJuIiwicmVxdWlyZWQiLCJzdHlsZSIsInNlbGVjdElucHV0IiwidGV4dEFsaWduIiwibWFyZ2luSW5saW5lU3RhcnQiLCJwYWRkaW5nSW5saW5lU3RhcnQiLCJvcHRpb24iLCJtYXAiLCJpdGVtIiwiY2xzeCIsInRleHRhcmVhIiwidGV4dExlbmd0aCIsInBvc2l0aW9uIiwidG9wIiwicGFkZGluZ0lubGluZUVuZCIsInRleHRMZW5ndGhFcnJvciIsImxpbWl0Iiwid2F0Y2hUZXh0YXJlYSIsIm1heExlbmd0aCIsIkFkZEljb24iLCJDbGVhckljb24iLCJ1c2VFZmZlY3QiLCJhZGRJbWdCdG4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGVhclZpZGVvSWNvbiIsImZsb2F0IiwibGVmdCIsInN3aW5nVHlwZSIsInVwbG9hZFZpZGVvIiwidXBsb2FkZWRWaWRlbyIsInNldFVwbG9hZGVkVmlkZW8iLCJ2aWRlb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNsZWFyVXBsb2FkVmlkZW8iLCJlIiwidGFyZ2V0IiwiZmlsZXMiXSwic291cmNlUm9vdCI6IiJ9