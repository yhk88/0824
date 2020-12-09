<template>
  <div>
    <el-dialog :title="info.name" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="角色名称">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="角色权限">
          <el-tree
            :data="menuList"
            show-checkbox
            node-key="id"
            ref="tree"
            :props="{ children: 'children',
          label: 'title'}"
          >
          </el-tree>
       
        </el-form-item>

        <el-form-item label="状态">
          <el-switch
            v-model="form.status"
            active-color="#409eff"
            inactive-color="#dde1e5"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="hide">取 消</el-button>
        <el-button type="primary" @click="add"  v-if="info.isAdd">添 加</el-button>
        <el-button type="primary" @click="updata" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// 引入vuex的方法和属性值
import { reqRoleAdd,reqRoleinfo,reqUseredit,reqUserdeletet } from "../../../util/request";
// 发送请求，点击添加把数据存起来
import {indexRouters} from '../../../router/index'
// 引入路由
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      menuList: "menu/list",
      // 调用menu里面的list方法
    }),
  },
  components: {},
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "label",
      },
      width: "160px",
      form: {
        rolename: "",
        menus: [],
        status: 1,
      },
    };
  },
  methods: {
    emply(){
      this.form= {
        rolename: "",
        menus: [],
        status: 1,
      };
      this.$nextTick(()=>{
           this.$refs.tree.setCheckedKeys([]);
      })
    
    },

    add() {
      // 由于后端要的是字符串数组，而获取的是数组，所以要转
     this.form.menus=JSON.stringify(this.$refs.tree.getCheckedKeys()) 
      reqRoleAdd(this.form).then(res=>{ 
        // 发送到数据库
      this.hide()   
      this.emply()
     this.requestRolelist()
   
      })
       
    },
   
    hide(){
      this.info.isShow=false
    },
    ...mapActions({
      requestMenuList: "menu/requestMenuList",
      requestRolelist:'role/requestRolelist'
    }),
    // 获取一条数据的方法
    look(id){
      reqRoleinfo({id:id}).then(res=>{
        this.form=res.data.list
        this.form.menus=this.$refs.tree.setCheckedKeys(JSON.parse(res.data.list.menus))
        this.form.id=id
      })
    },
     updata() {
       this.form.menus=JSON.stringify(this.$refs.tree.getCheckedKeys()) 
  reqUseredit(this.form).then(res=>{
    this.requestRolelist()
    this.hide()
  })
    },
  },
  mounted() {
    // 调用方法
    if (this.menuList.length == 0) {
      this.requestMenuList();
    }
  },
};
</script>
<style>
</style>