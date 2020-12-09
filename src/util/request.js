// 发送ajax请求获取数据
import  axios from 'axios'
 import qs from 'qs'
const baseUrl='/api'
axios.interceptors.response.use(res=>{
    console.log('====请求路径:'+res.config.url+'======');
    console.log(res);
    return res
})
// 拦截器

export const reqmenuAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/menuadd',
        method:'post',
        data:data
    })
}
export const reqMenuList=(data)=>{
    return axios({
        url:baseUrl+'/api/menulist',
        method:'get',
        params:data
    })
} 
export const reqMenuListOne=(data)=>{
    return axios({
        url:baseUrl+'/api/menuinfo',
        method:'get',
        params:data
    })
} 
export const reqMenuListwo=(data)=>{
    return axios({
        url:baseUrl+"/api/menuedit",
        method:'post',
        data:data
    })
} 
// 菜单删除
export const reqMenuLisDel=(data)=>{
    return axios({
        url:baseUrl+"/api/menudelete",
        method:'post',
        data:data
    })
} 
////////////////////////////////////////////////////////////////////////////////   
// 角色添加
export const reqRoleAdd=(data)=>{
    return axios({
        url:baseUrl+"/api/roleadd",
        method:'post',
        data:data
    })
} 
// 角色列表
export const reqRolelist=()=>{
    return axios({
        url:baseUrl+"/api/rolelist",
        method:'get'
    })
} 
// 角色的一条数据
export const reqRoleinfo=(data)=>{
    return axios({
        url:baseUrl+"/api/roleinfo",
        method:'get',
        params:data
    })
} 
// 角色修改
export const reqUseredit=(data)=>{
    return axios({
        url:baseUrl+"/api/roleedit",
        method:'post',
        data:data 
    })
} 
// 角色删除
export const roleDelete=(data)=>{
    return axios({
        url:baseUrl+"/api/roledelete",
        method:'post',
        data:data 
    })
} 
////////////////////////////////管理员
// 管理员管理
export const userAdd=(data)=>{
    return axios({
        url:baseUrl+"/api/useradd",
        method:'post',
        data:data 
    })
} 
// 管理员列表

export const requserList=(params)=>{
    return axios({
        url:baseUrl+"/api/userlist",
        method:'get',
        params:params 
    })
}
// 管理员删除
export const requserDelete=(data)=>{
    return axios({
        url:baseUrl+"/api/userdelete",
        method:'post',
        data:data 
    })
}
// 管理员编辑获取一条数据
export const requserinfo=(data)=>{
    return axios({
        url:baseUrl+"/api/userinfo",
        method:'get',
        params:data 
    })
}
// 管理员编辑
export const requseRedite=(id)=>{
    return axios({
        url:baseUrl+"/api/useredit",
        method:'post',
        data:id 
    })
}
// 管理员总数
export const requsercount=(data)=>{
    return axios({
        url:baseUrl+"/api/usercount",
        method:'get',
     
    })
}