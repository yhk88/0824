<template>
<div>
  <!-- 首页 -->
  <el-button type="primary" @click="adds">添加</el-button>
    <v-add :info="info" ref="one"></v-add>
    <v-list @edit="edit($event)"></v-list>
 
  
</div>

</template>
<script>
import vAdd from './components/add'
import vList from './components/list'
export default {
components:{
    vAdd,
    vList
},
data(){
return{
  info:{
    isShow:false,
    issd:true,
     name:'菜单管理',
  }
}
},
methods:{
  adds(){
    this.info.isShow=!this.info.isShow
     this.info.issd=true
     this.info.name="菜单管理"
      this.$refs.one.cz()
  },
  edit(e){
  console.log(e);
 this.info.isShow=true
 console.log(this.$refs.one);
 this.$refs.one.lok(e)
 this.info.issd=false
 this.info.name="菜单编辑"
}
},

}
</script>
<style>
</style>