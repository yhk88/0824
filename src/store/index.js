import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import role from './modules/role'
import manger from './modules/manger'
Vue.use(Vuex)
export default new Vuex.Store({
     modules:{
         menu,
         role,
         manger
     }
}) 
// 往列表里渲染东西，要先引入列表的路由，在在vuex里创一个manger.js，在再这里引入