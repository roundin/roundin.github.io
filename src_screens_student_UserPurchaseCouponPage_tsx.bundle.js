"use strict";
(self["webpackChunkroundin_homepage"] = self["webpackChunkroundin_homepage"] || []).push([["src_screens_student_UserPurchaseCouponPage_tsx"],{

/***/ "./src/screens/student/UserPurchaseCouponPage.tsx":
/*!********************************************************!*\
  !*** ./src/screens/student/UserPurchaseCouponPage.tsx ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _utils_common_widget_PageHeaderSubTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common/widget/PageHeaderSubTitle */ "./src/utils/common/widget/PageHeaderSubTitle.tsx");
/* harmony import */ var _utils_common_widget_PageHeaderTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common/widget/PageHeaderTitle */ "./src/utils/common/widget/PageHeaderTitle.tsx");
/* harmony import */ var _widget_CouponCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget/CouponCard */ "./src/screens/student/widget/CouponCard.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const UserPurchaseCouponPage = () => {
  const [selectedTextCount, setSelectedTextCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [selectedVideoCount, setSelectedVideoCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const buyLessonCoupon = () => {
    console.log("buyLessonCoupon click!");
    console.log(`문자 레슨권 : ${selectedTextCount}, 영상 레슨권 : ${selectedVideoCount} 구매 요청`);
  };

  const UserPurchaseCouponPageVAProp = {
    selectedTextCount: selectedTextCount,
    selectedVideoCount: selectedVideoCount,
    changeSelectedTextCount: count => setSelectedTextCount(count),
    changeSelectedVideoCount: count => setSelectedVideoCount(count),
    buyLessonCoupon: buyLessonCoupon
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserPurchaseCouponPageView, UserPurchaseCouponPageVAProp);
};

__signature__(UserPurchaseCouponPage, "useState{[selectedTextCount, setSelectedTextCount](1)}\nuseState{[selectedVideoCount, setSelectedVideoCount](0)}");

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    maxWidth: "500px",
    margin: "auto",
    padding: "0.5rem",
    "& > div": {
      marginBottom: "0.5rem"
    }
  },
  textContent: {
    fontSize: "0.8rem"
  },
  couponLayout: {
    width: "100%",
    margin: "0.1rem"
  },
  couponCardGroup: {
    display: "flex",
    margin: "0.5rem"
  },
  applyBtn: {
    position: "fixed",
    bottom: "10px",
    width: "90%",
    maxWidth: "300px",
    fontWeight: "bold"
  }
}));

const UserPurchaseCouponPageView = ({
  selectedTextCount,
  selectedVideoCount,
  changeSelectedTextCount,
  changeSelectedVideoCount,
  buyLessonCoupon
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_widget_PageHeaderTitle__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "레슨권 구매"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.couponLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_widget_PageHeaderSubTitle__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: "문자 레슨권"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.textContent
  }, "\uBCF4\uB0B4\uC8FC\uC2E0 \uC2A4\uC719 \uC601\uC0C1\uC5D0 \uBB38\uC790\uB85C \uD53C\uB4DC\uBC31\uC744 \uC804\uB2EC\uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.couponCardGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widget_CouponCard__WEBPACK_IMPORTED_MODULE_3__.default, {
    count: 1,
    price: 4500,
    selected: selectedTextCount,
    setSelected: changeSelectedTextCount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widget_CouponCard__WEBPACK_IMPORTED_MODULE_3__.default, {
    count: 5,
    price: 19800,
    selected: selectedTextCount,
    setSelected: changeSelectedTextCount
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.couponLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_widget_PageHeaderSubTitle__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: "영상 레슨권"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.textContent
  }, "\uD504\uB85C\uB2D8\uC774 \uB9DE\uCDA4 \uC601\uC0C1\uC744 \uCC0D\uC5B4\uC11C \uD53C\uB4DC\uBC31\uC744 \uC804\uB2EC\uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.couponCardGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widget_CouponCard__WEBPACK_IMPORTED_MODULE_3__.default, {
    count: 1,
    price: 4500,
    selected: selectedVideoCount,
    setSelected: changeSelectedVideoCount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widget_CouponCard__WEBPACK_IMPORTED_MODULE_3__.default, {
    count: 5,
    price: 19800,
    selected: selectedVideoCount,
    setSelected: changeSelectedVideoCount
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: classes.applyBtn,
    disabled: selectedTextCount + selectedVideoCount === 0,
    variant: "contained",
    onClick: buyLessonCoupon
  }, "\uB808\uC2A8\uAD8C \uAD6C\uB9E4\uD558\uAE30"));
};

__signature__(UserPurchaseCouponPageView, "useStyles{classes}", () => [useStyles]);

const _default = UserPurchaseCouponPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserPurchaseCouponPage, "UserPurchaseCouponPage", "/Users/gang/StudioProjects/roundin-web/src/screens/student/UserPurchaseCouponPage.tsx");
  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/screens/student/UserPurchaseCouponPage.tsx");
  reactHotLoader.register(UserPurchaseCouponPageView, "UserPurchaseCouponPageView", "/Users/gang/StudioProjects/roundin-web/src/screens/student/UserPurchaseCouponPage.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/screens/student/UserPurchaseCouponPage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/screens/student/widget/CouponCard.tsx":
/*!***************************************************!*\
  !*** ./src/screens/student/widget/CouponCard.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Radio/Radio.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "70px",
    height: "70px",
    margin: "0.5rem",
    padding: "1rem",
    backgroundColor: "#EEEEEE",
    borderRadius: "10px"
  }
}));

const CouponCard = ({
  count,
  price,
  selected,
  setSelected
}) => {
  const classes = useStyles();

  const onChangeSelected = changedCount => {
    if (changedCount === selected) return setSelected(0);
    setSelected(changedCount);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root,
    onClick: () => {
      onChangeSelected(count);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default, {
    checked: selected === count,
    value: count,
    name: "radio-button-demo",
    inputProps: {
      "aria-label": "B"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, count, "\uD68C\uAD8C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, price, "\uC6D0"));
};

__signature__(CouponCard, "useStyles{classes}", () => [useStyles]);

const _default = CouponCard;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/screens/student/widget/CouponCard.tsx");
  reactHotLoader.register(CouponCard, "CouponCard", "/Users/gang/StudioProjects/roundin-web/src/screens/student/widget/CouponCard.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/screens/student/widget/CouponCard.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/utils/common/widget/PageHeaderSubTitle.tsx":
/*!********************************************************!*\
  !*** ./src/utils/common/widget/PageHeaderSubTitle.tsx ***!
  \********************************************************/
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
    fontSize: "1rem",
    justifyContent: "flex-start",
    fontWeight: "bold"
  }
}));

const PageHeaderSubTitle = ({
  title
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.title
  }, " ", title);
};

__signature__(PageHeaderSubTitle, "useStyles{classes}", () => [useStyles]);

const _default = PageHeaderSubTitle;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/utils/common/widget/PageHeaderSubTitle.tsx");
  reactHotLoader.register(PageHeaderSubTitle, "PageHeaderSubTitle", "/Users/gang/StudioProjects/roundin-web/src/utils/common/widget/PageHeaderSubTitle.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/utils/common/widget/PageHeaderSubTitle.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmVlbnNfc3R1ZGVudF9Vc2VyUHVyY2hhc2VDb3Vwb25QYWdlX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTU8sc0JBQXNCLEdBQUcsTUFBTTtBQUNuQyxRQUFNLENBQUNDLGlCQUFELEVBQW9CQyxvQkFBcEIsSUFBNENSLCtDQUFRLENBQVMsQ0FBVCxDQUExRDtBQUNBLFFBQU0sQ0FBQ1Msa0JBQUQsRUFBcUJDLHFCQUFyQixJQUE4Q1YsK0NBQVEsQ0FBUyxDQUFULENBQTVEOztBQUVBLFFBQU1XLGVBQWUsR0FBRyxNQUFNO0FBQzVCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBRCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxZQUFXTixpQkFBa0IsY0FBYUUsa0JBQW1CLFFBQTFFO0FBQ0QsR0FIRDs7QUFJQSxRQUFNSyw0QkFBMEQsR0FBRztBQUNqRVAsSUFBQUEsaUJBQWlCLEVBQUVBLGlCQUQ4QztBQUVqRUUsSUFBQUEsa0JBQWtCLEVBQUVBLGtCQUY2QztBQUdqRU0sSUFBQUEsdUJBQXVCLEVBQUdDLEtBQUQsSUFBbUJSLG9CQUFvQixDQUFDUSxLQUFELENBSEM7QUFJakVDLElBQUFBLHdCQUF3QixFQUFHRCxLQUFELElBQW1CTixxQkFBcUIsQ0FBQ00sS0FBRCxDQUpEO0FBS2pFTCxJQUFBQSxlQUFlLEVBQUVBO0FBTGdELEdBQW5FO0FBT0Esc0JBQU8saURBQUMsMEJBQUQsRUFBZ0NHLDRCQUFoQyxDQUFQO0FBQ0QsQ0FoQkQ7O2NBQU1SOztBQTBCTixNQUFNWSxTQUFTLEdBQUdqQixpRUFBVSxDQUFFa0IsS0FBRCxLQUFZO0FBQ3ZDQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsT0FBTyxFQUFFLE1BREw7QUFFSkMsSUFBQUEsYUFBYSxFQUFFLFFBRlg7QUFHSkMsSUFBQUEsVUFB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LEVBQUU7QUFDTDdCLElBQUFBLE9BQU8sRUFBRSxNQURKO0FBRUxZLElBQUFBLEtBQUssRUFBRSxNQUZGO0FBR0xGLElBQUFBLFFBQVEsRUFBRSxTQUhMO0FBSUxQLElBQUFBLGNBQWMsRUFBRSxZQUpYO0FBS0xjLElBQUFBLFVBQVUsRUFBRTtBQUxQO0FBRGdDLENBQVosQ0FBRCxDQUE1Qjs7QUFjQSxNQUFNbEMsZUFBZSxHQUFHLENBQUM7QUFBRThDLEVBQUFBO0FBQUYsQ0FBRCxLQUFvQztBQUMxRCxRQUFNVixPQUFPLEdBQUd0QixTQUFTLEVBQXpCO0FBRUEsc0JBQU87QUFBSyxhQUFTLEVBQUVzQixPQUFPLENBQUNVO0FBQXhCLFVBQWlDQSxLQUFqQyxDQUFQO0FBQ0QsQ0FKRDs7Y0FBTTlDLDhDQUNZYzs7aUJBS0hkO0FBQWYsaUVBQWU7Ozs7Ozs7Ozs7MEJBcEJUYzswQkFjQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3VuZGluX2hvbWVwYWdlLy4vc3JjL3NjcmVlbnMvc3R1ZGVudC9Vc2VyUHVyY2hhc2VDb3Vwb25QYWdlLnRzeCIsIndlYnBhY2s6Ly9yb3VuZGluX2hvbWVwYWdlLy4vc3JjL3NjcmVlbnMvc3R1ZGVudC93aWRnZXQvQ291cG9uQ2FyZC50c3giLCJ3ZWJwYWNrOi8vcm91bmRpbl9ob21lcGFnZS8uL3NyYy91dGlscy9jb21tb24vd2lkZ2V0L1BhZ2VIZWFkZXJTdWJUaXRsZS50c3giLCJ3ZWJwYWNrOi8vcm91bmRpbl9ob21lcGFnZS8uL3NyYy91dGlscy9jb21tb24vd2lkZ2V0L1BhZ2VIZWFkZXJUaXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgUGFnZUhlYWRlclN1YlRpdGxlIGZyb20gXCJAc3JjL3V0aWxzL2NvbW1vbi93aWRnZXQvUGFnZUhlYWRlclN1YlRpdGxlXCI7XG5pbXBvcnQgUGFnZUhlYWRlclRpdGxlIGZyb20gXCJAc3JjL3V0aWxzL2NvbW1vbi93aWRnZXQvUGFnZUhlYWRlclRpdGxlXCI7XG5pbXBvcnQgQ291cG9uQ2FyZCBmcm9tIFwiLi93aWRnZXQvQ291cG9uQ2FyZFwiO1xuXG5jb25zdCBVc2VyUHVyY2hhc2VDb3Vwb25QYWdlID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRUZXh0Q291bnQsIHNldFNlbGVjdGVkVGV4dENvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGNvbnN0IFtzZWxlY3RlZFZpZGVvQ291bnQsIHNldFNlbGVjdGVkVmlkZW9Db3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIGNvbnN0IGJ1eUxlc3NvbkNvdXBvbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImJ1eUxlc3NvbkNvdXBvbiBjbGljayFcIik7XG4gICAgY29uc29sZS5sb2coYOusuOyekCDroIjsiqjqtowgOiAke3NlbGVjdGVkVGV4dENvdW50fSwg7JiB7IOBIOugiOyKqOq2jCA6ICR7c2VsZWN0ZWRWaWRlb0NvdW50fSDqtazrp6Qg7JqU7LKtYCk7XG4gIH07XG4gIGNvbnN0IFVzZXJQdXJjaGFzZUNvdXBvblBhZ2VWQVByb3A6IFVzZXJQdXJjaGFzZUNvdXBvblBhZ2VWQVByb3AgPSB7XG4gICAgc2VsZWN0ZWRUZXh0Q291bnQ6IHNlbGVjdGVkVGV4dENvdW50LFxuICAgIHNlbGVjdGVkVmlkZW9Db3VudDogc2VsZWN0ZWRWaWRlb0NvdW50LFxuICAgIGNoYW5nZVNlbGVjdGVkVGV4dENvdW50OiAoY291bnQ6IG51bWJlcikgPT4gc2V0U2VsZWN0ZWRUZXh0Q291bnQoY291bnQpLFxuICAgIGNoYW5nZVNlbGVjdGVkVmlkZW9Db3VudDogKGNvdW50OiBudW1iZXIpID0+IHNldFNlbGVjdGVkVmlkZW9Db3VudChjb3VudCksXG4gICAgYnV5TGVzc29uQ291cG9uOiBidXlMZXNzb25Db3Vwb24sXG4gIH07XG4gIHJldHVybiA8VXNlclB1cmNoYXNlQ291cG9uUGFnZVZpZXcgey4uLlVzZXJQdXJjaGFzZUNvdXBvblBhZ2VWQVByb3B9IC8+O1xufTtcblxuaW50ZXJmYWNlIFVzZXJQdXJjaGFzZUNvdXBvblBhZ2VWQVByb3Age1xuICBzZWxlY3RlZFRleHRDb3VudDogbnVtYmVyO1xuICBzZWxlY3RlZFZpZGVvQ291bnQ6IG51bWJlcjtcbiAgY2hhbmdlU2VsZWN0ZWRUZXh0Q291bnQ6IChjb3VudDogbnVtYmVyKSA9PiB2b2lkO1xuICBjaGFuZ2VTZWxlY3RlZFZpZGVvQ291bnQ6IChjb3VudDogbnVtYmVyKSA9PiB2b2lkO1xuICBidXlMZXNzb25Db3Vwb246ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxuICAgIFwiJiA+IGRpdlwiOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IFwiMC41cmVtXCIsXG4gICAgfSxcbiAgfSxcbiAgdGV4dENvbnRlbnQ6IHtcbiAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcbiAgfSxcbiAgY291cG9uTGF5b3V0OiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIG1hcmdpbjogXCIwLjFyZW1cIixcbiAgfSxcbiAgY291cG9uQ2FyZEdyb3VwOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgbWFyZ2luOiBcIjAuNXJlbVwiLFxuICB9LFxuICBhcHBseUJ0bjoge1xuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgYm90dG9tOiBcIjEwcHhcIixcbiAgICB3aWR0aDogXCI5MCVcIixcbiAgICBtYXhXaWR0aDogXCIzMDBweFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxufSkpO1xuXG5jb25zdCBVc2VyUHVyY2hhc2VDb3Vwb25QYWdlVmlldyA9ICh7XG4gIHNlbGVjdGVkVGV4dENvdW50LFxuICBzZWxlY3RlZFZpZGVvQ291bnQsXG4gIGNoYW5nZVNlbGVjdGVkVGV4dENvdW50LFxuICBjaGFuZ2VTZWxlY3RlZFZpZGVvQ291bnQsXG4gIGJ1eUxlc3NvbkNvdXBvbixcbn06IFVzZXJQdXJjaGFzZUNvdXBvblBhZ2VWQVByb3ApID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPFBhZ2VIZWFkZXJUaXRsZSB0aXRsZT17XCLroIjsiqjqtowg6rWs66ekXCJ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3Vwb25MYXlvdXR9PlxuICAgICAgICA8UGFnZUhlYWRlclN1YlRpdGxlIHRpdGxlPXtcIuusuOyekCDroIjsiqjqtoxcIn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dENvbnRlbnR9PuuztOuCtOyjvOyLoCDsiqTsnJkg7JiB7IOB7JeQIOusuOyekOuhnCDtlLzrk5zrsLHsnYQg7KCE64us65Oc66a964uI64ukLjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3Vwb25DYXJkR3JvdXB9PlxuICAgICAgICAgIDxDb3Vwb25DYXJkIGNvdW50PXsxfSBwcmljZT17NDUwMH0gc2VsZWN0ZWQ9e3NlbGVjdGVkVGV4dENvdW50fSBzZXRTZWxlY3RlZD17Y2hhbmdlU2VsZWN0ZWRUZXh0Q291bnR9IC8+XG4gICAgICAgICAgPENvdXBvbkNhcmQgY291bnQ9ezV9IHByaWNlPXsxOTgwMH0gc2VsZWN0ZWQ9e3NlbGVjdGVkVGV4dENvdW50fSBzZXRTZWxlY3RlZD17Y2hhbmdlU2VsZWN0ZWRUZXh0Q291bnR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3Vwb25MYXlvdXR9PlxuICAgICAgICA8UGFnZUhlYWRlclN1YlRpdGxlIHRpdGxlPXtcIuyYgeyDgSDroIjsiqjqtoxcIn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dENvbnRlbnR9Pu2UhOuhnOuLmOydtCDrp57stqQg7JiB7IOB7J2EIOywjeyWtOyEnCDtlLzrk5zrsLHsnYQg7KCE64us65Oc66a964uI64ukLjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3Vwb25DYXJkR3JvdXB9PlxuICAgICAgICAgIDxDb3Vwb25DYXJkIGNvdW50PXsxfSBwcmljZT17NDUwMH0gc2VsZWN0ZWQ9e3NlbGVjdGVkVmlkZW9Db3VudH0gc2V0U2VsZWN0ZWQ9e2NoYW5nZVNlbGVjdGVkVmlkZW9Db3VudH0gLz5cbiAgICAgICAgICA8Q291cG9uQ2FyZCBjb3VudD17NX0gcHJpY2U9ezE5ODAwfSBzZWxlY3RlZD17c2VsZWN0ZWRWaWRlb0NvdW50fSBzZXRTZWxlY3RlZD17Y2hhbmdlU2VsZWN0ZWRWaWRlb0NvdW50fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXBwbHlCdG59XG4gICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZFRleHRDb3VudCArIHNlbGVjdGVkVmlkZW9Db3VudCA9PT0gMH1cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIG9uQ2xpY2s9e2J1eUxlc3NvbkNvdXBvbn1cbiAgICAgID5cbiAgICAgICAg66CI7Iqo6raMIOq1rOunpO2VmOq4sFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHVyY2hhc2VDb3Vwb25QYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHdpZHRoOiBcIjcwcHhcIixcbiAgICBoZWlnaHQ6IFwiNzBweFwiLFxuICAgIG1hcmdpbjogXCIwLjVyZW1cIixcbiAgICBwYWRkaW5nOiBcIjFyZW1cIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VFRUVFRVwiLFxuICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBDb3Vwb25DYXJkUHJvcCB7XG4gIGNvdW50OiBudW1iZXI7XG4gIHByaWNlOiBudW1iZXI7XG4gIHNlbGVjdGVkOiBudW1iZXI7XG4gIHNldFNlbGVjdGVkOiAoY291bnQ6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuY29uc3QgQ291cG9uQ2FyZCA9ICh7IGNvdW50LCBwcmljZSwgc2VsZWN0ZWQsIHNldFNlbGVjdGVkIH06IENvdXBvbkNhcmRQcm9wKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qgb25DaGFuZ2VTZWxlY3RlZCA9IChjaGFuZ2VkQ291bnQ6IG51bWJlcikgPT4ge1xuICAgIGlmIChjaGFuZ2VkQ291bnQgPT09IHNlbGVjdGVkKSByZXR1cm4gc2V0U2VsZWN0ZWQoMCk7XG4gICAgc2V0U2VsZWN0ZWQoY2hhbmdlZENvdW50KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBvbkNoYW5nZVNlbGVjdGVkKGNvdW50KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFJhZGlvIGNoZWNrZWQ9e3NlbGVjdGVkID09PSBjb3VudH0gdmFsdWU9e2NvdW50fSBuYW1lPVwicmFkaW8tYnV0dG9uLWRlbW9cIiBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbFwiOiBcIkJcIiB9fSAvPlxuICAgICAgPGRpdj57Y291bnR97ZqM6raMPC9kaXY+XG4gICAgICA8ZGl2PntwcmljZX3sm5A8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdXBvbkNhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZm9udFNpemU6IFwiMXJlbVwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIFBhZ2VIZWFkZXJTdWJUaXRsZVByb3Age1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBQYWdlSGVhZGVyU3ViVGl0bGUgPSAoeyB0aXRsZSB9OiBQYWdlSGVhZGVyU3ViVGl0bGVQcm9wKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PiB7dGl0bGV9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlYWRlclN1YlRpdGxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vLi4vcmVzL2ltYWdlcy9sb2dvLnBuZ1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZm9udFNpemU6IFwiMS4yNXJlbVwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIFBhZ2VIZWFkZXJUaXRsZVByb3Age1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBQYWdlSGVhZGVyVGl0bGUgPSAoeyB0aXRsZSB9OiBQYWdlSGVhZGVyVGl0bGVQcm9wKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PiB7dGl0bGV9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlYWRlclRpdGxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtYWtlU3R5bGVzIiwiQnV0dG9uIiwiUGFnZUhlYWRlclN1YlRpdGxlIiwiUGFnZUhlYWRlclRpdGxlIiwiQ291cG9uQ2FyZCIsIlVzZXJQdXJjaGFzZUNvdXBvblBhZ2UiLCJzZWxlY3RlZFRleHRDb3VudCIsInNldFNlbGVjdGVkVGV4dENvdW50Iiwic2VsZWN0ZWRWaWRlb0NvdW50Iiwic2V0U2VsZWN0ZWRWaWRlb0NvdW50IiwiYnV5TGVzc29uQ291cG9uIiwiY29uc29sZSIsImxvZyIsIlVzZXJQdXJjaGFzZUNvdXBvblBhZ2VWQVByb3AiLCJjaGFuZ2VTZWxlY3RlZFRleHRDb3VudCIsImNvdW50IiwiY2hhbmdlU2VsZWN0ZWRWaWRlb0NvdW50IiwidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4R3JvdyIsIm1heFdpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsInRleHRDb250ZW50IiwiZm9udFNpemUiLCJjb3Vwb25MYXlvdXQiLCJ3aWR0aCIsImNvdXBvbkNhcmRHcm91cCIsImFwcGx5QnRuIiwicG9zaXRpb24iLCJib3R0b20iLCJmb250V2VpZ2h0IiwiVXNlclB1cmNoYXNlQ291cG9uUGFnZVZpZXciLCJjbGFzc2VzIiwiUmFkaW8iLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwcmljZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJvbkNoYW5nZVNlbGVjdGVkIiwiY2hhbmdlZENvdW50IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9