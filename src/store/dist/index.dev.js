"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _menu = _interopRequireDefault(require("./modules/menu"));

var _role = _interopRequireDefault(require("./modules/role"));

var _manger = _interopRequireDefault(require("./modules/manger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  modules: {
    menu: _menu["default"],
    role: _role["default"],
    manger: _manger["default"]
  }
}); // 往列表里渲染东西，要先引入列表的路由，在在vuex里创一个manger.js，在再这里引入


exports["default"] = _default;