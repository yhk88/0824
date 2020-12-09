"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _request = require("../../util/request");

var state = {
  list: []
  /* 请求回来的数据 */

};
var mutations = {
  changelist: function changelist(state, arr) {
    state.list = arr;
  }
};
var actions = {
  requestMenuList: function requestMenuList(context) {
    (0, _request.reqMenuList)({
      istree: true
    }).then(function (res) {
      context.commit('changelist', res.data.list);
    });
  }
};
var getters = {
  list: function list(state) {
    return state.list;
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