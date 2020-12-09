import Vue from 'vue'
import Router from 'vue-router'
const login =()=>import('../pages/login/login')
const index =()=>import('../pages/index/index')
const menu =()=>import('../pages/menu/menu')
const home =()=>import('../pages/home/home')
const manger =()=>import('../pages/manger/manger')
const role =()=>import('../pages/role/role')
const classsift =()=>import('../pages/classsift/classsift')
const spec =()=>import('../pages/spec/spec')
const goods =()=>import('../pages/goods/goods')
const banner =()=>import('../pages/banner/banner')
const seckll =()=>import('../pages/seckll/seckll')
const vip =()=>import('../pages/vip/vip')

Vue.use(Router)

export const indexRouters=[
  {
    path:'menu',
    component:menu,
    name:"菜单管理"
  }, {
    path:'role',
    component:role,
    name:"角色管理" 
  }, {
    path:'manger',
    component:manger,
    name:"管理员管理"
  }, {
    path:'classsift',
    component:classsift,
    name:"商城分类"
  }, {
    path:'spec',
    component:spec,
    name:"商品规格"
  }, {
    path:'goods',
    component:goods,
    name:"商品管理"
  }, {
    path:'vip',
    component:vip,
    name:"会员管理"
  }, {
    path:'banner',
    component:banner,
    name:"轮播图管理"
  }, {
    path:'seckll',
    component:seckll,
    name:"秒杀活动"
  },
]
export default new Router({
  routes:[{ 
    path:'/index',
    component:index,
    children:[
      {
        path:'home',
        component:home
      },{
        path:"",
        redirect:'home'
      },
      ...indexRouters
    ]
  },
  {
    path:'/login',
    component:login
  }
]
})

