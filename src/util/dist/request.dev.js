"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requsercount = exports.requseRedite = exports.requserinfo = exports.requserDelete = exports.requserList = exports.userAdd = exports.roleDelete = exports.reqUseredit = exports.reqRoleinfo = exports.reqRolelist = exports.reqRoleAdd = exports.reqMenuLisDel = exports.reqMenuListwo = exports.reqMenuListOne = exports.reqMenuList = exports.reqmenuAdd = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 发送ajax请求获取数据
var baseUrl = '/api';

_axios["default"].interceptors.response.use(function (res) {
  console.log('====请求路径:' + res.config.url + '======');
  console.log(res);
  return res;
}); // 拦截器


var reqmenuAdd = function reqmenuAdd(data) {
  return (0, _axios["default"])({
    url: baseUrl + '/api/menuadd',
    method: 'post',
    data: data
  });
};

exports.reqmenuAdd = reqmenuAdd;

var reqMenuList = function reqMenuList(data) {
  return (0, _axios["default"])({
    url: baseUrl + '/api/menulist',
    method: 'get',
    params: data
  });
};

exports.reqMenuList = reqMenuList;

var reqMenuListOne = function reqMenuListOne(data) {
  return (0, _axios["default"])({
    url: baseUrl + '/api/menuinfo',
    method: 'get',
    params: data
  });
};

exports.reqMenuListOne = reqMenuListOne;

var reqMenuListwo = function reqMenuListwo(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/menuedit",
    method: 'post',
    data: data
  });
}; // 菜单删除


exports.reqMenuListwo = reqMenuListwo;

var reqMenuLisDel = function reqMenuLisDel(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/menudelete",
    method: 'post',
    data: data
  });
}; ////////////////////////////////////////////////////////////////////////////////   
// 角色添加


exports.reqMenuLisDel = reqMenuLisDel;

var reqRoleAdd = function reqRoleAdd(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/roleadd",
    method: 'post',
    data: data
  });
}; // 角色列表


exports.reqRoleAdd = reqRoleAdd;

var reqRolelist = function reqRolelist() {
  return (0, _axios["default"])({
    url: baseUrl + "/api/rolelist",
    method: 'get'
  });
}; // 角色的一条数据


exports.reqRolelist = reqRolelist;

var reqRoleinfo = function reqRoleinfo(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/roleinfo",
    method: 'get',
    params: data
  });
}; // 角色修改


exports.reqRoleinfo = reqRoleinfo;

var reqUseredit = function reqUseredit(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/roleedit",
    method: 'post',
    data: data
  });
}; // 角色删除


exports.reqUseredit = reqUseredit;

var roleDelete = function roleDelete(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/roledelete",
    method: 'post',
    data: data
  });
}; ////////////////////////////////管理员
// 管理员管理


exports.roleDelete = roleDelete;

var userAdd = function userAdd(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/useradd",
    method: 'post',
    data: data
  });
}; // 管理员列表


exports.userAdd = userAdd;

var requserList = function requserList(params) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/userlist",
    method: 'get',
    params: params
  });
}; // 管理员删除


exports.requserList = requserList;

var requserDelete = function requserDelete(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/userdelete",
    method: 'post',
    data: data
  });
}; // 管理员编辑获取一条数据


exports.requserDelete = requserDelete;

var requserinfo = function requserinfo(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/userinfo",
    method: 'get',
    params: data
  });
}; // 管理员编辑


exports.requserinfo = requserinfo;

var requseRedite = function requseRedite(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/useredit",
    method: 'post',
    data: id
  });
}; // 管理员总数


exports.requseRedite = requseRedite;

var requsercount = function requsercount(data) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/usercount",
    method: 'get'
  });
};

exports.requsercount = requsercount;