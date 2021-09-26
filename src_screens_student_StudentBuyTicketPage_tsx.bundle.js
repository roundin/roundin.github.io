"use strict";
(self["webpackChunkroundin_homepage"] = self["webpackChunkroundin_homepage"] || []).push([["src_screens_student_StudentBuyTicketPage_tsx"],{

/***/ "./src/screens/student/StudentBuyTicketPage.tsx":
/*!******************************************************!*\
  !*** ./src/screens/student/StudentBuyTicketPage.tsx ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _widget_CouponCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget/CouponCard */ "./src/screens/student/widget/CouponCard.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _utils_common_widget_ImgWithSupportError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common/widget/ImgWithSupportError */ "./src/utils/common/widget/ImgWithSupportError.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const StudentBuyTicketPage = () => {
  const [selectedTextCount, setSelectedTextCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [selectedVideoCount, setSelectedVideoCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const buyLessonCoupon = () => {
    console.log("buyLessonCoupon click!");
    console.log(`문자 레슨권 : ${selectedTextCount}, 영상 레슨권 : ${selectedVideoCount} 구매 요청`);
  };

  const StudentBuyTicketPageVAProp = {
    selectedTextCount: selectedTextCount,
    selectedVideoCount: selectedVideoCount,
    changeSelectedTextCount: count => setSelectedTextCount(count),
    changeSelectedVideoCount: count => setSelectedVideoCount(count),
    buyLessonCoupon: buyLessonCoupon
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StudentBuyTicketPageView, StudentBuyTicketPageVAProp);
};

__signature__(StudentBuyTicketPage, "useState{[selectedTextCount, setSelectedTextCount](1)}\nuseState{[selectedVideoCount, setSelectedVideoCount](0)}");

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(theme => ({
  studentBuyTicketPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    flexGrow: 1,
    maxWidth: "500px",
    width: "100vw",
    "& > div": {
      width: "95%"
    }
  },
  textContent: {
    fontSize: "0.8rem",
    color: "#727283"
  },
  img: {
    width: "100%",
    height: "15vh"
  },
  couponLayout: {
    width: "100%",
    margin: "0.1rem"
  },
  couponCardGroup: {
    margin: "0.5rem"
  },
  buyBtn: {
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

const StudentBuyTicketPageView = ({
  selectedTextCount,
  selectedVideoCount,
  changeSelectedTextCount,
  changeSelectedVideoCount,
  buyLessonCoupon
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.studentBuyTicketPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
    variant: "h6",
    gutterBottom: true,
    component: "div"
  }, "\uB808\uC2A8\uAD8C \uAD6C\uB9E4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.couponLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
    variant: "subtitle2",
    gutterBottom: true,
    component: "div"
  }, "\uBB38\uC790 \uB808\uC2A8\uAD8C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.textContent,
    variant: "subtitle2",
    gutterBottom: true,
    component: "div"
  }, "\uBCF4\uB0B4\uC8FC\uC2E0 \uC2A4\uC719 \uC601\uC0C1\uC5D0 \uBB38\uC790\uB85C \uD53C\uB4DC\uBC31\uC744 \uC804\uB2EC\uB4DC\uB824\uC694."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.couponCardGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_widget_ImgWithSupportError__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: classes.img,
    imgSrc: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widget_CouponCard__WEBPACK_IMPORTED_MODULE_1__.default, {
    count: 1,
    price: 4500,
    selected: selectedTextCount,
    setSelected: changeSelectedTextCount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widget_CouponCard__WEBPACK_IMPORTED_MODULE_1__.default, {
    count: 5,
    price: 19800,
    extraText: "33% 저렴해요",
    selected: selectedTextCount,
    setSelected: changeSelectedTextCount
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.couponLayout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
    variant: "subtitle2",
    gutterBottom: true,
    component: "div"
  }, "\uC601\uC0C1 \uB808\uC2A8\uAD8C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.textContent,
    variant: "subtitle2",
    gutterBottom: true,
    component: "div"
  }, "\uD504\uB85C\uB2D8\uC774 \uB9DE\uCDA4 \uC601\uC0C1\uC744 \uCC0D\uC5B4\uC11C \uD53C\uB4DC\uBC31\uC744 \uC804\uB2EC\uB4DC\uB824\uC694."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.couponCardGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_widget_ImgWithSupportError__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: classes.img,
    imgSrc: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widget_CouponCard__WEBPACK_IMPORTED_MODULE_1__.default, {
    count: 1,
    price: 4500,
    selected: selectedVideoCount,
    setSelected: changeSelectedVideoCount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widget_CouponCard__WEBPACK_IMPORTED_MODULE_1__.default, {
    count: 5,
    price: 19800,
    extraText: "33% 저렴해요",
    selected: selectedVideoCount,
    setSelected: changeSelectedVideoCount
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: classes.buyBtn,
    disabled: selectedTextCount + selectedVideoCount === 0,
    variant: "contained",
    onClick: buyLessonCoupon
  }, "\uB808\uC2A8\uAD8C \uAD6C\uB9E4\uD558\uAE30"));
};

__signature__(StudentBuyTicketPageView, "useStyles{classes}", () => [useStyles]);

const _default = StudentBuyTicketPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StudentBuyTicketPage, "StudentBuyTicketPage", "/Users/gang/StudioProjects/roundin-web/src/screens/student/StudentBuyTicketPage.tsx");
  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/screens/student/StudentBuyTicketPage.tsx");
  reactHotLoader.register(StudentBuyTicketPageView, "StudentBuyTicketPageView", "/Users/gang/StudioProjects/roundin-web/src/screens/student/StudentBuyTicketPage.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/screens/student/StudentBuyTicketPage.tsx");
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
  CouponCard: {
    display: "flex",
    alignItems: "center"
  },
  priceText: {
    fontSize: "0.75rem",
    color: "#727283"
  },
  extraText: {
    fontSize: "0.75rem",
    color: "#28B8B2",
    backgroundColor: "#DBF6F5",
    borderRadius: "5px",
    padding: "0.2rem",
    marginInlineStart: "0.25rem"
  }
}));

const CouponCard = ({
  count,
  price,
  extraText,
  selected,
  setSelected
}) => {
  const classes = useStyles();

  const onChangeSelected = changedCount => {
    if (changedCount === selected) return setSelected(0);
    setSelected(changedCount);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.CouponCard,
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, count, "\uD68C ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: classes.priceText
  }, "/ ", price, "\uC6D0"), extraText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: classes.extraText
  }, extraText)));
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmVlbnNfc3R1ZGVudF9TdHVkZW50QnV5VGlja2V0UGFnZV90c3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUdBLE1BQU1PLG9CQUFvQixHQUFHLE1BQU07QUFDakMsUUFBTSxDQUFDQyxpQkFBRCxFQUFvQkMsb0JBQXBCLElBQTRDUiwrQ0FBUSxDQUFTLENBQVQsQ0FBMUQ7QUFDQSxRQUFNLENBQUNTLGtCQUFELEVBQXFCQyxxQkFBckIsSUFBOENWLCtDQUFRLENBQVMsQ0FBVCxDQUE1RDs7QUFFQSxRQUFNVyxlQUFlLEdBQUcsTUFBTTtBQUM1QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7QUFDQUQsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsWUFBV04saUJBQWtCLGNBQWFFLGtCQUFtQixRQUExRTtBQUNELEdBSEQ7O0FBSUEsUUFBTUssMEJBQXNELEdBQUc7QUFDN0RQLElBQUFBLGlCQUFpQixFQUFFQSxpQkFEMEM7QUFFN0RFLElBQUFBLGtCQUFrQixFQUFFQSxrQkFGeUM7QUFHN0RNLElBQUFBLHVCQUF1QixFQUFHQyxLQUFELElBQW1CUixvQkFBb0IsQ0FBQ1EsS0FBRCxDQUhIO0FBSTdEQyxJQUFBQSx3QkFBd0IsRUFBR0QsS0FBRCxJQUFtQk4scUJBQXFCLENBQUNNLEtBQUQsQ0FKTDtBQUs3REwsSUFBQUEsZUFBZSxFQUFFQTtBQUw0QyxHQUEvRDtBQU9BLHNCQUFPLGlEQUFDLHdCQUFELEVBQThCRywwQkFBOUIsQ0FBUDtBQUNELENBaEJEOztjQUFNUjs7QUEwQk4sTUFBTVksU0FBUyxHQUFHakIsaUVBQVUsQ0FBRWtCLEtBQUQsS0FBWTtBQUN2Q0MsRUFBQUEsb0JBQW9CLEVBQUU7QUFDcEJDLElBQUFBLE9BQU8sRUFBRSxNQURXO0FBRXBCQyxJQUFBQSxhQUFhLEVBQUUsUUFGSztBQUdwQkMsSUFBQUEs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RSxjQUFVLEVBQUU7QUFBRSxvQkFBYztBQUFoQjtBQUF2RixJQU5GLGVBT0UsOERBQ0dBLEtBREgsMEJBQ1c7QUFBTSxhQUFTLEVBQUU0QixPQUFPLENBQUNFO0FBQXpCLFdBQXVDSyxLQUF2QyxXQURYLEVBRUdKLFNBQVMsaUJBQUk7QUFBTSxhQUFTLEVBQUVILE9BQU8sQ0FBQ0c7QUFBekIsS0FBcUNBLFNBQXJDLENBRmhCLENBUEYsQ0FERjtBQWNELENBckJEOztjQUFNNUMseUNBQ1llOztpQkFzQkhmO0FBQWYsaUVBQWU7Ozs7Ozs7Ozs7MEJBbERUZTswQkEyQkFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm91bmRpbl9ob21lcGFnZS8uL3NyYy9zY3JlZW5zL3N0dWRlbnQvU3R1ZGVudEJ1eVRpY2tldFBhZ2UudHN4Iiwid2VicGFjazovL3JvdW5kaW5faG9tZXBhZ2UvLi9zcmMvc2NyZWVucy9zdHVkZW50L3dpZGdldC9Db3Vwb25DYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgU3ludGhldGljRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgUGFnZUhlYWRlclN1YlRpdGxlIGZyb20gXCJAc3JjL3V0aWxzL2NvbW1vbi93aWRnZXQvUGFnZUhlYWRlclN1YlRpdGxlXCI7XG5pbXBvcnQgQ291cG9uQ2FyZCBmcm9tIFwiLi93aWRnZXQvQ291cG9uQ2FyZFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBJbWdXaXRoU3VwcG9ydEVycm9yIGZyb20gXCJAc3JjL3V0aWxzL2NvbW1vbi93aWRnZXQvSW1nV2l0aFN1cHBvcnRFcnJvclwiO1xuaW1wb3J0IGJyYW5kTG9nbyBmcm9tIFwiQHJlcy9pbWFnZXMvcm91bmRpbl9sb2dvLnBuZ1wiO1xuXG5jb25zdCBTdHVkZW50QnV5VGlja2V0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkVGV4dENvdW50LCBzZXRTZWxlY3RlZFRleHRDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbc2VsZWN0ZWRWaWRlb0NvdW50LCBzZXRTZWxlY3RlZFZpZGVvQ291bnRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBidXlMZXNzb25Db3Vwb24gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJidXlMZXNzb25Db3Vwb24gY2xpY2shXCIpO1xuICAgIGNvbnNvbGUubG9nKGDrrLjsnpAg66CI7Iqo6raMIDogJHtzZWxlY3RlZFRleHRDb3VudH0sIOyYgeyDgSDroIjsiqjqtowgOiAke3NlbGVjdGVkVmlkZW9Db3VudH0g6rWs66ekIOyalOyyrWApO1xuICB9O1xuICBjb25zdCBTdHVkZW50QnV5VGlja2V0UGFnZVZBUHJvcDogU3R1ZGVudEJ1eVRpY2tldFBhZ2VWQVByb3AgPSB7XG4gICAgc2VsZWN0ZWRUZXh0Q291bnQ6IHNlbGVjdGVkVGV4dENvdW50LFxuICAgIHNlbGVjdGVkVmlkZW9Db3VudDogc2VsZWN0ZWRWaWRlb0NvdW50LFxuICAgIGNoYW5nZVNlbGVjdGVkVGV4dENvdW50OiAoY291bnQ6IG51bWJlcikgPT4gc2V0U2VsZWN0ZWRUZXh0Q291bnQoY291bnQpLFxuICAgIGNoYW5nZVNlbGVjdGVkVmlkZW9Db3VudDogKGNvdW50OiBudW1iZXIpID0+IHNldFNlbGVjdGVkVmlkZW9Db3VudChjb3VudCksXG4gICAgYnV5TGVzc29uQ291cG9uOiBidXlMZXNzb25Db3Vwb24sXG4gIH07XG4gIHJldHVybiA8U3R1ZGVudEJ1eVRpY2tldFBhZ2VWaWV3IHsuLi5TdHVkZW50QnV5VGlja2V0UGFnZVZBUHJvcH0gLz47XG59O1xuXG5pbnRlcmZhY2UgU3R1ZGVudEJ1eVRpY2tldFBhZ2VWQVByb3Age1xuICBzZWxlY3RlZFRleHRDb3VudDogbnVtYmVyO1xuICBzZWxlY3RlZFZpZGVvQ291bnQ6IG51bWJlcjtcbiAgY2hhbmdlU2VsZWN0ZWRUZXh0Q291bnQ6IChjb3VudDogbnVtYmVyKSA9PiB2b2lkO1xuICBjaGFuZ2VTZWxlY3RlZFZpZGVvQ291bnQ6IChjb3VudDogbnVtYmVyKSA9PiB2b2lkO1xuICBidXlMZXNzb25Db3Vwb246ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBzdHVkZW50QnV5VGlja2V0UGFnZToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICBcIiYgPiBkaXZcIjoge1xuICAgICAgd2lkdGg6IFwiOTUlXCIsXG4gICAgfSxcbiAgfSxcbiAgdGV4dENvbnRlbnQ6IHtcbiAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcbiAgICBjb2xvcjogXCIjNzI3MjgzXCIsXG4gIH0sXG4gIGltZzoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMTV2aFwiLFxuICB9LFxuICBjb3Vwb25MYXlvdXQ6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgbWFyZ2luOiBcIjAuMXJlbVwiLFxuICB9LFxuICBjb3Vwb25DYXJkR3JvdXA6IHtcbiAgICBtYXJnaW46IFwiMC41cmVtXCIsXG4gIH0sXG4gIGJ1eUJ0bjoge1xuICAgIHdpZHRoOiBcIjkwJVwiLFxuICAgIGhlaWdodDogXCIycmVtXCIsXG4gICAgYm9yZGVyOiBcIjBweFwiLFxuICAgIG1heFdpZHRoOiBcIjMwMHB4XCIsXG4gICAgbWFyZ2luQmxvY2tTdGFydDogXCIwLjVyZW1cIixcbiAgICBtYXJnaW5CbG9ja0VuZDogXCIxcmVtXCIsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgYmFja2dyb3VuZDogXCIjMjVEMTVDXCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgfSxcbn0pKTtcblxuY29uc3QgU3R1ZGVudEJ1eVRpY2tldFBhZ2VWaWV3ID0gKHtcbiAgc2VsZWN0ZWRUZXh0Q291bnQsXG4gIHNlbGVjdGVkVmlkZW9Db3VudCxcbiAgY2hhbmdlU2VsZWN0ZWRUZXh0Q291bnQsXG4gIGNoYW5nZVNlbGVjdGVkVmlkZW9Db3VudCxcbiAgYnV5TGVzc29uQ291cG9uLFxufTogU3R1ZGVudEJ1eVRpY2tldFBhZ2VWQVByb3ApID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN0dWRlbnRCdXlUaWNrZXRQYWdlfT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbSBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAg66CI7Iqo6raMIOq1rOunpFxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY291cG9uTGF5b3V0fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGd1dHRlckJvdHRvbSBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICDrrLjsnpAg66CI7Iqo6raMXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRDb250ZW50fSB2YXJpYW50PVwic3VidGl0bGUyXCIgZ3V0dGVyQm90dG9tIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgIOuztOuCtOyjvOyLoCDsiqTsnJkg7JiB7IOB7JeQIOusuOyekOuhnCDtlLzrk5zrsLHsnYQg7KCE64us65Oc66Ck7JqULlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdXBvbkNhcmRHcm91cH0+XG4gICAgICAgICAgPEltZ1dpdGhTdXBwb3J0RXJyb3IgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gaW1nU3JjPXtcIlwifSAvPlxuICAgICAgICAgIDxDb3Vwb25DYXJkIGNvdW50PXsxfSBwcmljZT17NDUwMH0gc2VsZWN0ZWQ9e3NlbGVjdGVkVGV4dENvdW50fSBzZXRTZWxlY3RlZD17Y2hhbmdlU2VsZWN0ZWRUZXh0Q291bnR9IC8+XG4gICAgICAgICAgPENvdXBvbkNhcmRcbiAgICAgICAgICAgIGNvdW50PXs1fVxuICAgICAgICAgICAgcHJpY2U9ezE5ODAwfVxuICAgICAgICAgICAgZXh0cmFUZXh0PXtcIjMzJSDsoIDroLTtlbTsmpRcIn1cbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZFRleHRDb3VudH1cbiAgICAgICAgICAgIHNldFNlbGVjdGVkPXtjaGFuZ2VTZWxlY3RlZFRleHRDb3VudH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY291cG9uTGF5b3V0fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGd1dHRlckJvdHRvbSBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICDsmIHsg4Eg66CI7Iqo6raMXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRDb250ZW50fSB2YXJpYW50PVwic3VidGl0bGUyXCIgZ3V0dGVyQm90dG9tIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgIO2UhOuhnOuLmOydtCDrp57stqQg7JiB7IOB7J2EIOywjeyWtOyEnCDtlLzrk5zrsLHsnYQg7KCE64us65Oc66Ck7JqULlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdXBvbkNhcmRHcm91cH0+XG4gICAgICAgICAgPEltZ1dpdGhTdXBwb3J0RXJyb3IgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gaW1nU3JjPXtcIlwifSAvPlxuICAgICAgICAgIDxDb3Vwb25DYXJkIGNvdW50PXsxfSBwcmljZT17NDUwMH0gc2VsZWN0ZWQ9e3NlbGVjdGVkVmlkZW9Db3VudH0gc2V0U2VsZWN0ZWQ9e2NoYW5nZVNlbGVjdGVkVmlkZW9Db3VudH0gLz5cbiAgICAgICAgICA8Q291cG9uQ2FyZFxuICAgICAgICAgICAgY291bnQ9ezV9XG4gICAgICAgICAgICBwcmljZT17MTk4MDB9XG4gICAgICAgICAgICBleHRyYVRleHQ9e1wiMzMlIOyggOugtO2VtOyalFwifVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkVmlkZW9Db3VudH1cbiAgICAgICAgICAgIHNldFNlbGVjdGVkPXtjaGFuZ2VTZWxlY3RlZFZpZGVvQ291bnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1eUJ0bn1cbiAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkVGV4dENvdW50ICsgc2VsZWN0ZWRWaWRlb0NvdW50ID09PSAwfVxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgb25DbGljaz17YnV5TGVzc29uQ291cG9ufVxuICAgICAgPlxuICAgICAgICDroIjsiqjqtowg6rWs66ek7ZWY6riwXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnRCdXlUaWNrZXRQYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBDb3Vwb25DYXJkOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgcHJpY2VUZXh0OiB7XG4gICAgZm9udFNpemU6IFwiMC43NXJlbVwiLFxuICAgIGNvbG9yOiBcIiM3MjcyODNcIixcbiAgfSxcbiAgZXh0cmFUZXh0OiB7XG4gICAgZm9udFNpemU6IFwiMC43NXJlbVwiLFxuICAgIGNvbG9yOiBcIiMyOEI4QjJcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0RCRjZGNVwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBwYWRkaW5nOiBcIjAuMnJlbVwiLFxuICAgIG1hcmdpbklubGluZVN0YXJ0OiBcIjAuMjVyZW1cIixcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIENvdXBvbkNhcmRQcm9wIHtcbiAgY291bnQ6IG51bWJlcjtcbiAgcHJpY2U6IG51bWJlcjtcbiAgZXh0cmFUZXh0Pzogc3RyaW5nO1xuICBzZWxlY3RlZDogbnVtYmVyO1xuICBzZXRTZWxlY3RlZDogKGNvdW50OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENvdXBvbkNhcmQgPSAoeyBjb3VudCwgcHJpY2UsIGV4dHJhVGV4dCwgc2VsZWN0ZWQsIHNldFNlbGVjdGVkIH06IENvdXBvbkNhcmRQcm9wKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qgb25DaGFuZ2VTZWxlY3RlZCA9IChjaGFuZ2VkQ291bnQ6IG51bWJlcikgPT4ge1xuICAgIGlmIChjaGFuZ2VkQ291bnQgPT09IHNlbGVjdGVkKSByZXR1cm4gc2V0U2VsZWN0ZWQoMCk7XG4gICAgc2V0U2VsZWN0ZWQoY2hhbmdlZENvdW50KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5Db3Vwb25DYXJkfVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBvbkNoYW5nZVNlbGVjdGVkKGNvdW50KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFJhZGlvIGNoZWNrZWQ9e3NlbGVjdGVkID09PSBjb3VudH0gdmFsdWU9e2NvdW50fSBuYW1lPVwicmFkaW8tYnV0dG9uLWRlbW9cIiBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbFwiOiBcIkJcIiB9fSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAge2NvdW50fe2ajCA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucHJpY2VUZXh0fT4vIHtwcmljZX3sm5A8L3NwYW4+XG4gICAgICAgIHtleHRyYVRleHQgJiYgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmV4dHJhVGV4dH0+e2V4dHJhVGV4dH08L3NwYW4+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3Vwb25DYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtYWtlU3R5bGVzIiwiQnV0dG9uIiwiQ291cG9uQ2FyZCIsIlR5cG9ncmFwaHkiLCJJbWdXaXRoU3VwcG9ydEVycm9yIiwiU3R1ZGVudEJ1eVRpY2tldFBhZ2UiLCJzZWxlY3RlZFRleHRDb3VudCIsInNldFNlbGVjdGVkVGV4dENvdW50Iiwic2VsZWN0ZWRWaWRlb0NvdW50Iiwic2V0U2VsZWN0ZWRWaWRlb0NvdW50IiwiYnV5TGVzc29uQ291cG9uIiwiY29uc29sZSIsImxvZyIsIlN0dWRlbnRCdXlUaWNrZXRQYWdlVkFQcm9wIiwiY2hhbmdlU2VsZWN0ZWRUZXh0Q291bnQiLCJjb3VudCIsImNoYW5nZVNlbGVjdGVkVmlkZW9Db3VudCIsInVzZVN0eWxlcyIsInRoZW1lIiwic3R1ZGVudEJ1eVRpY2tldFBhZ2UiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImZsZXhHcm93IiwibWF4V2lkdGgiLCJ3aWR0aCIsInRleHRDb250ZW50IiwiZm9udFNpemUiLCJjb2xvciIsImltZyIsImhlaWdodCIsImNvdXBvbkxheW91dCIsImNvdXBvbkNhcmRHcm91cCIsImJ1eUJ0biIsImJvcmRlciIsIm1hcmdpbkJsb2NrU3RhcnQiLCJtYXJnaW5CbG9ja0VuZCIsImZvbnRXZWlnaHQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiU3R1ZGVudEJ1eVRpY2tldFBhZ2VWaWV3IiwiY2xhc3NlcyIsIlJhZGlvIiwicHJpY2VUZXh0IiwiZXh0cmFUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsIm1hcmdpbklubGluZVN0YXJ0IiwicHJpY2UiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwib25DaGFuZ2VTZWxlY3RlZCIsImNoYW5nZWRDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=