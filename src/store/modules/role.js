   import {
     reqRolelist
   } from '../../util/request'
   import Vue from 'vue'
   import Vuex from 'vuex'
   Vue.use(Vuex)
   const state = {
     list: [],
     /* 请求回来的数据 */
   }
   const mutations = {
     changeAdds(state, arr) {
       state.list = arr
     }
   }
   const actions = {
     requestRolelist(context) {
       reqRolelist({
         istree: true
       }).then(res => {
         context.commit('changeAdds', res.data.list)
       })
     }
   }
   const getters = {
     list(state) {
       return state.list
     }
   }
   export default {
     state,
     mutations,
     actions,
     getters,
     namespaced: true
   }
