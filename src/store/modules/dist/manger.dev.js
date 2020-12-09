"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _request = require("../../util/request");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var state = {
  list: [],
  total: 0,

  /* 请求回来的总数 */

  /* 请求回来的数据 */
  page: 1,
  size: 2
};
var mutations = {
  changelist: function changelist(state, arr) {
    state.list = arr;
  },
  // 获取总数
  changeCount: function changeCount(state, num) {
    state.total = num;
  },
  changePage: function changePage(state, page) {
    state.page = page;
  }
};
var actions = {
  requestserList: function requestserList(context) {
    (0, _request.requserList)({
      page: context.state.page,
      size: context.state.size
    }).then(function (res) {
      context.commit('changelist', res.data.list);
    });
  },
  requestuserCount: function requestuserCount(context) {
    (0, _request.requsercount)().then(function (res) {
      context.commit("changeCount", res.data.list[0].total);
    });
  },
  changeCountPape: function changeCountPape(context, page) {
    context.commit("changePage", page);
    context.dispatch("requestserList");
  }
};
var getters = {
  list: function list(state) {
    return state.list;
  },
  total: function total(state) {
    return state.total;
  },
  page: function page(state) {
    return state.page;
  }
};
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  namespaced: true
};
exports["default"] = _default;