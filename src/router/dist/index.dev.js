"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexRouters = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var login = function login() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/login/login'));
  });
};

var index = function index() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/index/index'));
  });
};

var menu = function menu() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/menu/menu'));
  });
};

var home = function home() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/home/home'));
  });
};

var manger = function manger() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/manger/manger'));
  });
};

var role = function role() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/role/role'));
  });
};

var classsift = function classsift() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/classsift/classsift'));
  });
};

var spec = function spec() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/spec/spec'));
  });
};

var goods = function goods() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/goods/goods'));
  });
};

var banner = function banner() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/banner/banner'));
  });
};

var seckll = function seckll() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/seckll/seckll'));
  });
};

var vip = function vip() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/vip/vip'));
  });
};

_vue["default"].use(_vueRouter["default"]);

var indexRouters = [{
  path: 'menu',
  component: menu,
  name: "菜单管理"
}, {
  path: 'role',
  component: role,
  name: "角色管理"
}, {
  path: 'manger',
  component: manger,
  name: "管理员管理"
}, {
  path: 'classsift',
  component: classsift,
  name: "商城分类"
}, {
  path: 'spec',
  component: spec,
  name: "商品规格"
}, {
  path: 'goods',
  component: goods,
  name: "商品管理"
}, {
  path: 'vip',
  component: vip,
  name: "会员管理"
}, {
  path: 'banner',
  component: banner,
  name: "轮播图管理"
}, {
  path: 'seckll',
  component: seckll,
  name: "秒杀活动"
}];
exports.indexRouters = indexRouters;

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/index',
    component: index,
    children: [{
      path: 'home',
      component: home
    }, {
      path: "",
      redirect: 'home'
    }].concat(indexRouters)
  }, {
    path: '/login',
    component: login
  }]
});

exports["default"] = _default;