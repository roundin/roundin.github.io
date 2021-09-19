"use strict";
(self["webpackChunkroundin_homepage"] = self["webpackChunkroundin_homepage"] || []).push([["src_screens_teacher_TeacherProfilePage_tsx"],{

/***/ "./src/screens/teacher/TeacherProfilePage.tsx":
/*!****************************************************!*\
  !*** ./src/screens/teacher/TeacherProfilePage.tsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _service_teacher_getTeacherProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/teacher/getTeacherProfile */ "./src/service/teacher/getTeacherProfile.ts");
/* harmony import */ var _utils_common_page_LandingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/common/page/LandingPage */ "./src/utils/common/page/LandingPage.tsx");
/* harmony import */ var _stores_TeacherStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stores/TeacherStore */ "./src/stores/TeacherStore.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









const TeacherProfilePage = () => {
  const {
    teacherId
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useParams)();
  const [teacherProfile, setTeacherProfile] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_stores_TeacherStore__WEBPACK_IMPORTED_MODULE_4__.teacherProfileState);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadTopicTutors = async () => {
      const response = await (0,_service_teacher_getTeacherProfile__WEBPACK_IMPORTED_MODULE_2__.getTeacherProfile)(teacherId);
      if (response) setTeacherProfile(response);
    };

    loadTopicTutors();
  }, []);
  const TeacherProfilePageVAProp = {
    teacherProfile: teacherProfile
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TeacherProfilePageVAPropView, TeacherProfilePageVAProp);
};

__signature__(TeacherProfilePage, "useParams{{ teacherId }}\nuseRecoilState{[teacherProfile, setTeacherProfile]}\nuseEffect{}", () => [react_router__WEBPACK_IMPORTED_MODULE_5__.useParams, recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState]);

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    maxWidth: "500px",
    margin: "auto",
    padding: "0.5rem"
  }
}));

const TeacherProfilePageVAPropView = ({
  teacherProfile
}) => {
  const classes = useStyles();
  if (teacherProfile === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_common_page_LandingPage__WEBPACK_IMPORTED_MODULE_3__.default, {
    landingTitle: "프로필 가져오는 중입니다...",
    wavtText: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, teacherProfile.name, " \uD504\uB85C\uD544 \uD398\uC774\uC9C0"));
};

__signature__(TeacherProfilePageVAPropView, "useStyles{classes}", () => [useStyles]);

const _default = TeacherProfilePage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TeacherProfilePage, "TeacherProfilePage", "/Users/gang/StudioProjects/roundin-web/src/screens/teacher/TeacherProfilePage.tsx");
  reactHotLoader.register(useStyles, "useStyles", "/Users/gang/StudioProjects/roundin-web/src/screens/teacher/TeacherProfilePage.tsx");
  reactHotLoader.register(TeacherProfilePageVAPropView, "TeacherProfilePageVAPropView", "/Users/gang/StudioProjects/roundin-web/src/screens/teacher/TeacherProfilePage.tsx");
  reactHotLoader.register(_default, "default", "/Users/gang/StudioProjects/roundin-web/src/screens/teacher/TeacherProfilePage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/service/teacher/getTeacherProfile.ts":
/*!**************************************************!*\
  !*** ./src/service/teacher/getTeacherProfile.ts ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTeacherProfile": () => (/* binding */ getTeacherProfile)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _serviceSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../serviceSetting */ "./src/service/serviceSetting.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



async function getTeacherProfile(teacherId) {
  let result = undefined;

  if (_serviceSetting__WEBPACK_IMPORTED_MODULE_1__.serviceOnOff === false) {
    result = testTeacherProfile;
    await (0,_serviceSetting__WEBPACK_IMPORTED_MODULE_1__.sleep)(3000);
    return result;
  } else {
    let response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "get",
      url: `${_serviceSetting__WEBPACK_IMPORTED_MODULE_1__.SERVER_URL}/tutors/${teacherId}`,
      headers: {
        Authorization: "userAuthorizationKey"
      }
    });

    if (response.status.toString() === "ok") {
      result = response.data.result;
    }
  }

  return result;
}
const testTeacherProfile = {
  id: "test id",
  name: "박세리",
  phoneNumber: "010-0000-0000",
  profileImageUrl: "testURl",
  shortIntro: "안녕하세요",
  longIntro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  snsList: [{
    channelType: "youtube",
    channelLink: "test-link",
    channellName: "youtube-name"
  }, {
    channelType: "instagram",
    channelLink: "test-link",
    channellName: "instagram-name"
  }],
  certificateList: ["KPGA", "KLPGA", "USPGA"],
  lessonCareerList: ["A 가르침 3년", "B 수료"],
  playerCareerList: ["A소속 선수", "B소속 선수"],
  extraCareerList: ["방송 3년차", "KPGA 스폰서"],
  swingList: ["A 스윙영상 url", "B 스윙영상 url"],
  body: {
    height: 180,
    weight: 75
  },
  limitedLessonPerDay: 5,
  limitedLessonPerWeek: 30,
  promotionLessonPerDay: 5,
  promotionLessonPerWeek: 30,
  availLesson: {
    letterStatus: true,
    videoStatus: false
  },
  completedLesson: {
    videoCount: 10,
    letterCount: 20
  },
  requestedLesson: {
    videoCount: 20,
    letterCount: 20
  },
  paidLesson: {
    letterCount: 30,
    VideoCount: 30
  },
  avgResponseTime: "23시 32분",
  recentBehavior: {
    login: "2021-09-10,15시 20분",
    response: "2021-09-10,15시 32분"
  },
  famousCount: {
    like: 1500,
    bookmark: 120,
    subscription: 200
  },
  homeCategoryCode: ["잘생김카테고리", "실력좋음카테고리", "가성비카테고리"]
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getTeacherProfile, "getTeacherProfile", "/Users/gang/StudioProjects/roundin-web/src/service/teacher/getTeacherProfile.ts");
  reactHotLoader.register(testTeacherProfile, "testTeacherProfile", "/Users/gang/StudioProjects/roundin-web/src/service/teacher/getTeacherProfile.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmVlbnNfdGVhY2hlcl9UZWFjaGVyUHJvZmlsZVBhZ2VfdHN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNUSxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFnQkwsdURBQVMsRUFBL0I7QUFDQSxRQUFNLENBQUNNLGNBQUQsRUFBaUJDLGlCQUFqQixJQUFzQ1Isc0RBQWMsQ0FBQ0kscUVBQUQsQ0FBMUQ7QUFFQU4sRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTVcsZUFBZSxHQUFHLFlBQVk7QUFDbEMsWUFBTUMsUUFBUSxHQUFHLE1BQU1SLHFGQUFpQixDQUFDSSxTQUFELENBQXhDO0FBQ0EsVUFBSUksUUFBSixFQUFjRixpQkFBaUIsQ0FBQ0UsUUFBRCxDQUFqQjtBQUNmLEtBSEQ7O0FBSUFELElBQUFBLGVBQWU7QUFDaEIsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFFBQU1FLHdCQUFrRCxHQUFHO0FBQ3pESixJQUFBQSxjQUFjLEVBQUVBO0FBRHlDLEdBQTNEO0FBSUEsc0JBQU8saURBQUMsNEJBQUQsRUFBa0NJLHdCQUFsQyxDQUFQO0FBQ0QsQ0FqQkQ7O2NBQU1OLHlIQUNrQkoscURBQ3NCRDs7QUFxQjlDLE1BQU1ZLFNBQVMsR0FBR2IsaUVBQVUsQ0FBRWMsS0FBRCxLQUFZO0FBQ3ZDQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsT0FBTyxFQUFFLE1BREw7QUFFSkMsSUFBQUEsYUFBYSxFQUFFLFFBRlg7QUFHSkMsSUFBQUEsVUFBVSxFQUFFLFFBSFI7QUFJSkMsSUFBQUEsY0FBYyxFQUFFLFFBSlo7QUFLSkMsSUFBQUEsUUFBUSxFQUFFLENBTE47QUFNSkMsSUFBQUEsUUFBUSxFQUFFLE9BTk47QUFPSkMsSUFBQUEsTUFBTSxFQUFFLE1BUEo7QUFRSkMsSUFBQUEsT0FBTyxFQUFFO0FBUkw7QUFEaUMsQ0FBWixDQUFELENBQTVCOztBQWFBLE1BQU1DLDRCQUE0QixHQUFHLENBQUM7QUFBRWhCLEVBQUFBO0FBQUYsQ0FBRCxLQUFrRDtBQUNyRixRQUFNaUIsT0FBTyxHQUFHWixTQUFTLEVBQXpCO0FBRUEsTUFBSUwsY0FBYyxLQUFLa0IsU0FBdkIsRUFBa0Msb0JBQU8saURBQUMsbUVBQUQ7QUFBYSxnQkFBWSxFQUFFLGtCQUEzQjtBQUErQyxZQUFRLEVBQUU7QUFBekQsSUFBUDtBQUVsQyxzQkFDRTtBQUFLLGFBQVMsRUFBRUQsT0FBTyxDQUFDVjtBQUF4QixrQkFDRSw4REFBTVAsY0FBYyxDQUFDbUIsSUFBckIsMkNBREYsQ0FERjtBQUtELENBVkQ7O2NBQU1ILDJEQUNZWDs7aUJBV0hQO0FBQWYsaUVBQWU7Ozs7Ozs7Ozs7MEJBaERUQTswQkF1QkFPOzBCQWFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNOO0FBQ0E7QUF3RE8sZUFBZXJCLGlCQUFmLENBQWlDSSxTQUFqQyxFQUEyRjtBQUNoRyxNQUFJeUIsTUFBb0MsR0FBR04sU0FBM0M7O0FBRUEsTUFBSUcseURBQVksS0FBSyxLQUFyQixFQUE0QjtBQUMxQkcsSUFBQUEsTUFBTSxHQUFHQyxrQkFBVDtBQUNBLFVBQU1ILHNEQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsV0FBT0UsTUFBUDtBQUNELEdBSkQsTUFJTztBQUNMLFFBQUlyQixRQUFRLEdBQUcsTUFBTWlCLDRDQUFLLENBQUM7QUFDekJNLE1BQUFBLE1BQU0sRUFBRSxLQURpQjtBQUV6QkMsTUFBQUEsR0FBRyxFQUFHLEdBQUVKLHVEQUFXLFdBQVV4QixTQUFVLEVBRmQ7QUFHekI2QixNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsYUFBYSxFQUFFO0FBRFI7QUFIZ0IsS0FBRCxDQUExQjs7QUFPQSxRQUFJMUIsUUFBUSxDQUFDMkIsTUFBVCxDQUFnQkMsUUFBaEIsT0FBK0IsSUFBbkMsRUFBeUM7QUFDdkNQLE1BQUFBLE1BQU0sR0FBR3JCLFFBQVEsQ0FBQzZCLElBQVQsQ0FBY1IsTUFBdkI7QUFDRDtBQUNGOztBQUVELFNBQU9BLE1BQVA7QUFDRDtBQUVELE1BQU1DLGtCQUFvQyxHQUFHO0FBQzNDUSxFQUFBQSxFQUFFLEVBQUUsU0FEdUM7QUFFM0NkLEVBQUFBLElBQUksRUFBRSxLQUZxQztBQUczQ2UsRUFBQUEsV0FBVyxFQUFFLGVBSDhCO0FBSTNDQyxFQUFBQSxlQUFlLEVBQUUsU0FKMEI7QUFLM0NDLEVBQUFBLFVBQVUsRUFBRSxPQUwrQjtBQU0zQ0MsRUFBQUEsU0FBUyxFQUNQLGdrQkFQeUM7QUFRM0NDLEVBQUFBLE9BQU8sRUFBRSxDQUNQO0FBQ0VDLElBQUFBLFdBQVcsRUFBRSxTQURmO0FBRUVDLElBQUFBLFdBQVcsRUFBRSxXQUZmO0FBR0VDLElBQUFBLFlBQVksRUFBRTtBQUhoQixHQURPLEVBTVA7QUFDRUYsSUFBQUEsV0FBVyxFQUFFLFdBRGY7QUFFRUMsSUFBQUEsV0FBVyxFQUFFLFdBRmY7QUFHRUMsSUFBQUEsWUFBWSxFQUFFO0FBSGhCLEdBTk8sQ0FSa0M7QUFvQjNDQyxFQUFBQSxlQUFlLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixPQUFsQixDQXBCMEI7QUFxQjNDQyxFQUFBQSxnQkFBZ0IsRUFBRSxDQUFDLFVBQUQsRUFBYSxNQUFiLENBckJ5QjtBQXNCM0NDLEVBQUFBLGdCQUFnQixFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0F0QnlCO0FBdUIzQ0MsRUFBQUEsZUFBZSxFQUFFLENBQUMsUUFBRCxFQUFXLFVBQVgsQ0F2QjBCO0FBd0IzQ0MsRUFBQUEsU0FBUyxFQUFFLENBQUMsWUFBRCxFQUFlLFlBQWYsQ0F4QmdDO0FBeUIzQ0MsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLE1BQU0sRUFBRSxHQURKO0FBRUpDLElBQUFBLE1BQU0sRUFBRTtBQUZKLEdBekJxQztBQTZCM0NDLEVBQUFBLG1CQUFtQixFQUFFLENBN0JzQjtBQThCM0NDLEVBQUFBLG9CQUFvQixFQUFFLEVBOUJxQjtBQStCM0NDLEVBQUFBLHFCQUFxQixFQUFFLENBL0JvQjtBQWdDM0NDLEVBQUFBLHNCQUFzQixFQUFFLEVBaENtQjtBQWlDM0NDLEVBQUFBLFdBQVcsRUFBRTtBQUNYQyxJQUFBQSxZQUFZLEVBQUUsSUFESDtBQUVYQyxJQUFBQSxXQUFXLEVBQUU7QUFGRixHQWpDOEI7QUFxQzNDQyxFQUFBQSxlQUFlLEVBQUU7QUFDZkMsSUFBQUEsVUFBVSxFQUFFLEVBREc7QUFFZkMsSUFBQUEsV0FBVyxFQUFFO0FBRkUsR0FyQzBCO0FBeUMzQ0MsRUFBQUEsZUFBZSxFQUFFO0FBQ2ZGLElBQUFBLFVBQVUsRUFBRSxFQURHO0FBRWZDLElBQUFBLFdBQVcsRUFBRTtBQUZFLEdBekMwQjtBQTZDM0NFLEVBQUFBLFVBQVUsRUFBRTtBQUNWRixJQUFBQSxXQUFXLEVBQUUsRUFESDtBQUVWRyxJQUFBQSxVQUFVLEVBQUU7QUFGRixHQTdDK0I7QUFpRDNDQyxFQUFBQSxlQUFlLEVBQUUsU0FqRDBCO0FBa0QzQ0MsRUFBQUEsY0FBYyxFQUFFO0FBQ2RDLElBQUFBLEtBQUssRUFBRSxvQkFETztBQUVkOUQsSUFBQUEsUUFBUSxFQUFFO0FBRkksR0FsRDJCO0FBc0QzQytELEVBQUFBLFdBQVcsRUFBRTtBQUNYQyxJQUFBQSxJQUFJLEVBQUUsSUFESztBQUVYQyxJQUFBQSxRQUFRLEVBQUUsR0FGQztBQUdYQyxJQUFBQSxZQUFZLEVBQUU7QUFISCxHQXREOEI7QUEyRDNDQyxFQUFBQSxnQkFBZ0IsRUFBRSxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLFNBQXhCO0FBM0R5QixDQUE3Qzs7Ozs7Ozs7OzswQkF2QnNCM0U7MEJBdUJoQjhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm91bmRpbl9ob21lcGFnZS8uL3NyYy9zY3JlZW5zL3RlYWNoZXIvVGVhY2hlclByb2ZpbGVQYWdlLnRzeCIsIndlYnBhY2s6Ly9yb3VuZGluX2hvbWVwYWdlLy4vc3JjL3NlcnZpY2UvdGVhY2hlci9nZXRUZWFjaGVyUHJvZmlsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBnZXRUZWFjaGVyUHJvZmlsZSwgVGVhY2hlclByb2ZpbGVETyB9IGZyb20gXCJAc3JjL3NlcnZpY2UvdGVhY2hlci9nZXRUZWFjaGVyUHJvZmlsZVwiO1xuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gXCJAc3JjL3V0aWxzL2NvbW1vbi9wYWdlL0xhbmRpbmdQYWdlXCI7XG5pbXBvcnQgeyB0ZWFjaGVyUHJvZmlsZVN0YXRlIH0gZnJvbSBcIkBzcmMvc3RvcmVzL1RlYWNoZXJTdG9yZVwiO1xuXG5jb25zdCBUZWFjaGVyUHJvZmlsZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdGVhY2hlcklkIH0gPSB1c2VQYXJhbXM8eyB0ZWFjaGVySWQ6IHN0cmluZyB9PigpO1xuICBjb25zdCBbdGVhY2hlclByb2ZpbGUsIHNldFRlYWNoZXJQcm9maWxlXSA9IHVzZVJlY29pbFN0YXRlKHRlYWNoZXJQcm9maWxlU3RhdGUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZFRvcGljVHV0b3JzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRUZWFjaGVyUHJvZmlsZSh0ZWFjaGVySWQpO1xuICAgICAgaWYgKHJlc3BvbnNlKSBzZXRUZWFjaGVyUHJvZmlsZShyZXNwb25zZSk7XG4gICAgfTtcbiAgICBsb2FkVG9waWNUdXRvcnMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFRlYWNoZXJQcm9maWxlUGFnZVZBUHJvcDogVGVhY2hlclByb2ZpbGVQYWdlVkFQcm9wID0ge1xuICAgIHRlYWNoZXJQcm9maWxlOiB0ZWFjaGVyUHJvZmlsZSxcbiAgfTtcblxuICByZXR1cm4gPFRlYWNoZXJQcm9maWxlUGFnZVZBUHJvcFZpZXcgey4uLlRlYWNoZXJQcm9maWxlUGFnZVZBUHJvcH0gLz47XG59O1xuXG5pbnRlcmZhY2UgVGVhY2hlclByb2ZpbGVQYWdlVkFQcm9wIHtcbiAgdGVhY2hlclByb2ZpbGU6IFRlYWNoZXJQcm9maWxlRE8gfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxuICB9LFxufSkpO1xuXG5jb25zdCBUZWFjaGVyUHJvZmlsZVBhZ2VWQVByb3BWaWV3ID0gKHsgdGVhY2hlclByb2ZpbGUgfTogVGVhY2hlclByb2ZpbGVQYWdlVkFQcm9wKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBpZiAodGVhY2hlclByb2ZpbGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIDxMYW5kaW5nUGFnZSBsYW5kaW5nVGl0bGU9e1wi7ZSE66Gc7ZWEIOqwgOyguOyYpOuKlCDspJHsnoXri4jri6QuLi5cIn0gd2F2dFRleHQ9e3RydWV9IC8+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2Pnt0ZWFjaGVyUHJvZmlsZS5uYW1lfSDtlITroZztlYQg7Y6Y7J207KeAPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZWFjaGVyUHJvZmlsZVBhZ2U7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBzZXJ2aWNlT25PZmYsIHNsZWVwLCBTRVJWRVJfVVJMIH0gZnJvbSBcIi4uL3NlcnZpY2VTZXR0aW5nXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVhY2hlclByb2ZpbGVETyB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcGhvbmVOdW1iZXI6IHN0cmluZztcbiAgcHJvZmlsZUltYWdlVXJsOiBzdHJpbmc7XG4gIHNob3J0SW50cm86IHN0cmluZztcbiAgbG9uZ0ludHJvOiBzdHJpbmc7XG4gIHNuc0xpc3Q6IHtcbiAgICBjaGFubmVsVHlwZTogc3RyaW5nO1xuICAgIGNoYW5uZWxMaW5rOiBzdHJpbmc7XG4gICAgY2hhbm5lbGxOYW1lOiBzdHJpbmc7XG4gIH1bXTtcbiAgY2VydGlmaWNhdGVMaXN0OiBzdHJpbmdbXTtcbiAgbGVzc29uQ2FyZWVyTGlzdDogc3RyaW5nW107XG4gIHBsYXllckNhcmVlckxpc3Q6IHN0cmluZ1tdO1xuICBleHRyYUNhcmVlckxpc3Q6IHN0cmluZ1tdO1xuICBzd2luZ0xpc3Q6IHN0cmluZ1tdO1xuICBib2R5OiB7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgd2VpZ2h0OiBudW1iZXI7XG4gIH07XG4gIGxpbWl0ZWRMZXNzb25QZXJEYXk/OiBudW1iZXI7XG4gIGxpbWl0ZWRMZXNzb25QZXJXZWVrPzogbnVtYmVyO1xuICBwcm9tb3Rpb25MZXNzb25QZXJEYXk/OiBudW1iZXI7XG4gIHByb21vdGlvbkxlc3NvblBlcldlZWs/OiBudW1iZXI7XG4gIGF2YWlsTGVzc29uOiB7XG4gICAgbGV0dGVyU3RhdHVzOiBib29sZWFuO1xuICAgIHZpZGVvU3RhdHVzOiBib29sZWFuO1xuICB9O1xuICBjb21wbGV0ZWRMZXNzb246IHtcbiAgICB2aWRlb0NvdW50OiBudW1iZXI7XG4gICAgbGV0dGVyQ291bnQ6IG51bWJlcjtcbiAgfTtcbiAgcmVxdWVzdGVkTGVzc29uOiB7XG4gICAgdmlkZW9Db3VudDogbnVtYmVyO1xuICAgIGxldHRlckNvdW50OiBudW1iZXI7XG4gIH07XG4gIHBhaWRMZXNzb246IHtcbiAgICBsZXR0ZXJDb3VudDogbnVtYmVyO1xuICAgIFZpZGVvQ291bnQ6IG51bWJlcjtcbiAgfTtcbiAgYXZnUmVzcG9uc2VUaW1lOiBzdHJpbmc7XG4gIHJlY2VudEJlaGF2aW9yOiB7XG4gICAgbG9naW46IHN0cmluZztcbiAgICByZXNwb25zZTogc3RyaW5nO1xuICB9O1xuICBmYW1vdXNDb3VudDoge1xuICAgIGxpa2U6IG51bWJlcjtcbiAgICBib29rbWFyazogbnVtYmVyO1xuICAgIHN1YnNjcmlwdGlvbjogbnVtYmVyO1xuICB9O1xuICBob21lQ2F0ZWdvcnlDb2RlOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRlYWNoZXJQcm9maWxlKHRlYWNoZXJJZDogc3RyaW5nKTogUHJvbWlzZTxUZWFjaGVyUHJvZmlsZURPIHwgdW5kZWZpbmVkPiB7XG4gIGxldCByZXN1bHQ6IFRlYWNoZXJQcm9maWxlRE8gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgaWYgKHNlcnZpY2VPbk9mZiA9PT0gZmFsc2UpIHtcbiAgICByZXN1bHQgPSB0ZXN0VGVhY2hlclByb2ZpbGU7XG4gICAgYXdhaXQgc2xlZXAoMzAwMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICB1cmw6IGAke1NFUlZFUl9VUkx9L3R1dG9ycy8ke3RlYWNoZXJJZH1gLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBcInVzZXJBdXRob3JpemF0aW9uS2V5XCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMudG9TdHJpbmcoKSA9PT0gXCJva1wiKSB7XG4gICAgICByZXN1bHQgPSByZXNwb25zZS5kYXRhLnJlc3VsdDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5jb25zdCB0ZXN0VGVhY2hlclByb2ZpbGU6IFRlYWNoZXJQcm9maWxlRE8gPSB7XG4gIGlkOiBcInRlc3QgaWRcIixcbiAgbmFtZTogXCLrsJXshLjrpqxcIixcbiAgcGhvbmVOdW1iZXI6IFwiMDEwLTAwMDAtMDAwMFwiLFxuICBwcm9maWxlSW1hZ2VVcmw6IFwidGVzdFVSbFwiLFxuICBzaG9ydEludHJvOiBcIuyViOuFle2VmOyEuOyalFwiLFxuICBsb25nSW50cm86XG4gICAgXCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uXCIsXG4gIHNuc0xpc3Q6IFtcbiAgICB7XG4gICAgICBjaGFubmVsVHlwZTogXCJ5b3V0dWJlXCIsXG4gICAgICBjaGFubmVsTGluazogXCJ0ZXN0LWxpbmtcIixcbiAgICAgIGNoYW5uZWxsTmFtZTogXCJ5b3V0dWJlLW5hbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNoYW5uZWxUeXBlOiBcImluc3RhZ3JhbVwiLFxuICAgICAgY2hhbm5lbExpbms6IFwidGVzdC1saW5rXCIsXG4gICAgICBjaGFubmVsbE5hbWU6IFwiaW5zdGFncmFtLW5hbWVcIixcbiAgICB9LFxuICBdLFxuICBjZXJ0aWZpY2F0ZUxpc3Q6IFtcIktQR0FcIiwgXCJLTFBHQVwiLCBcIlVTUEdBXCJdLFxuICBsZXNzb25DYXJlZXJMaXN0OiBbXCJBIOqwgOultOy5qCAz64WEXCIsIFwiQiDsiJjro4xcIl0sXG4gIHBsYXllckNhcmVlckxpc3Q6IFtcIkHshozsho0g7ISg7IiYXCIsIFwiQuyGjOyGjSDshKDsiJhcIl0sXG4gIGV4dHJhQ2FyZWVyTGlzdDogW1wi67Cp7IahIDPrhYTssKhcIiwgXCJLUEdBIOyKpO2PsOyEnFwiXSxcbiAgc3dpbmdMaXN0OiBbXCJBIOyKpOycmeyYgeyDgSB1cmxcIiwgXCJCIOyKpOycmeyYgeyDgSB1cmxcIl0sXG4gIGJvZHk6IHtcbiAgICBoZWlnaHQ6IDE4MCxcbiAgICB3ZWlnaHQ6IDc1LFxuICB9LFxuICBsaW1pdGVkTGVzc29uUGVyRGF5OiA1LFxuICBsaW1pdGVkTGVzc29uUGVyV2VlazogMzAsXG4gIHByb21vdGlvbkxlc3NvblBlckRheTogNSxcbiAgcHJvbW90aW9uTGVzc29uUGVyV2VlazogMzAsXG4gIGF2YWlsTGVzc29uOiB7XG4gICAgbGV0dGVyU3RhdHVzOiB0cnVlLFxuICAgIHZpZGVvU3RhdHVzOiBmYWxzZSxcbiAgfSxcbiAgY29tcGxldGVkTGVzc29uOiB7XG4gICAgdmlkZW9Db3VudDogMTAsXG4gICAgbGV0dGVyQ291bnQ6IDIwLFxuICB9LFxuICByZXF1ZXN0ZWRMZXNzb246IHtcbiAgICB2aWRlb0NvdW50OiAyMCxcbiAgICBsZXR0ZXJDb3VudDogMjAsXG4gIH0sXG4gIHBhaWRMZXNzb246IHtcbiAgICBsZXR0ZXJDb3VudDogMzAsXG4gICAgVmlkZW9Db3VudDogMzAsXG4gIH0sXG4gIGF2Z1Jlc3BvbnNlVGltZTogXCIyM+yLnCAzMuu2hFwiLFxuICByZWNlbnRCZWhhdmlvcjoge1xuICAgIGxvZ2luOiBcIjIwMjEtMDktMTAsMTXsi5wgMjDrtoRcIixcbiAgICByZXNwb25zZTogXCIyMDIxLTA5LTEwLDE17IucIDMy67aEXCIsXG4gIH0sXG4gIGZhbW91c0NvdW50OiB7XG4gICAgbGlrZTogMTUwMCxcbiAgICBib29rbWFyazogMTIwLFxuICAgIHN1YnNjcmlwdGlvbjogMjAwLFxuICB9LFxuICBob21lQ2F0ZWdvcnlDb2RlOiBbXCLsnpjsg53quYDsubTthYzqs6DrpqxcIiwgXCLsi6TroKXsoovsnYzsubTthYzqs6DrpqxcIiwgXCLqsIDshLHruYTsubTthYzqs6DrpqxcIl0sXG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwibWFrZVN0eWxlcyIsInVzZVJlY29pbFN0YXRlIiwidXNlUGFyYW1zIiwiZ2V0VGVhY2hlclByb2ZpbGUiLCJMYW5kaW5nUGFnZSIsInRlYWNoZXJQcm9maWxlU3RhdGUiLCJUZWFjaGVyUHJvZmlsZVBhZ2UiLCJ0ZWFjaGVySWQiLCJ0ZWFjaGVyUHJvZmlsZSIsInNldFRlYWNoZXJQcm9maWxlIiwibG9hZFRvcGljVHV0b3JzIiwicmVzcG9uc2UiLCJUZWFjaGVyUHJvZmlsZVBhZ2VWQVByb3AiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhHcm93IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiVGVhY2hlclByb2ZpbGVQYWdlVkFQcm9wVmlldyIsImNsYXNzZXMiLCJ1bmRlZmluZWQiLCJuYW1lIiwiYXhpb3MiLCJzZXJ2aWNlT25PZmYiLCJzbGVlcCIsIlNFUlZFUl9VUkwiLCJyZXN1bHQiLCJ0ZXN0VGVhY2hlclByb2ZpbGUiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInN0YXR1cyIsInRvU3RyaW5nIiwiZGF0YSIsImlkIiwicGhvbmVOdW1iZXIiLCJwcm9maWxlSW1hZ2VVcmwiLCJzaG9ydEludHJvIiwibG9uZ0ludHJvIiwic25zTGlzdCIsImNoYW5uZWxUeXBlIiwiY2hhbm5lbExpbmsiLCJjaGFubmVsbE5hbWUiLCJjZXJ0aWZpY2F0ZUxpc3QiLCJsZXNzb25DYXJlZXJMaXN0IiwicGxheWVyQ2FyZWVyTGlzdCIsImV4dHJhQ2FyZWVyTGlzdCIsInN3aW5nTGlzdCIsImJvZHkiLCJoZWlnaHQiLCJ3ZWlnaHQiLCJsaW1pdGVkTGVzc29uUGVyRGF5IiwibGltaXRlZExlc3NvblBlcldlZWsiLCJwcm9tb3Rpb25MZXNzb25QZXJEYXkiLCJwcm9tb3Rpb25MZXNzb25QZXJXZWVrIiwiYXZhaWxMZXNzb24iLCJsZXR0ZXJTdGF0dXMiLCJ2aWRlb1N0YXR1cyIsImNvbXBsZXRlZExlc3NvbiIsInZpZGVvQ291bnQiLCJsZXR0ZXJDb3VudCIsInJlcXVlc3RlZExlc3NvbiIsInBhaWRMZXNzb24iLCJWaWRlb0NvdW50IiwiYXZnUmVzcG9uc2VUaW1lIiwicmVjZW50QmVoYXZpb3IiLCJsb2dpbiIsImZhbW91c0NvdW50IiwibGlrZSIsImJvb2ttYXJrIiwic3Vic2NyaXB0aW9uIiwiaG9tZUNhdGVnb3J5Q29kZSJdLCJzb3VyY2VSb290IjoiIn0=