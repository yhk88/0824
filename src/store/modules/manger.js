import Vue from 'vue'
import Vuex from 'vuex'
import {
    requserList,requsercount
} from '../../util/request'

Vue.use(Vuex)
const state = {
  list: [],
  total:0, /* 请求回来的总数 */
  /* 请求回来的数据 */
  page:1,

  size:2,
}
const mutations = {
  changelist(state, arr) {
    state.list = arr
  },
  // 获取总数
  changeCount(state,num){
state.total=num
  },
  changePage(state,page){ 
state.page=page
}
}

const actions = {
    requestserList(context) {
    requserList({
        page:context.state.page,
        size:context.state.size,
    
    }).then(res => {
      context.commit('changelist', res.data.list)
    })
  },
  requestuserCount(context){
    requsercount().then(res=>{
      context.commit("changeCount",res.data.list[0].total)
    })
  }, 
  changeCountPape(context,page){
    context.commit("changePage",page)
    context.dispatch("requestserList")
    
  }
}
const getters = { 
  list(state) {
    return state.list
  },
  total(state){
return state.total
  },
  page(state){
    return state.page
  }
}
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
