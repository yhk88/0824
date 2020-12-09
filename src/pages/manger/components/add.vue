<template>
  <div>
    <el-dialog :title="info.name" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="所属角色">
          <el-select v-model="form.roleid" placeholder="--请选择菜单--">
            <el-option label="请选择" :value="0" disabled></el-option>
            <el-option
              v-for="item in roleList"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" label-width="66px">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码" label-width="66px">
          <el-input v-model="form.password" autocomplete="off"></el-input>
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
        <el-button @click="hide()">取 消</el-button>
        <el-button type="primary" v-if="info.isAdd" @click="add()"
          >添 加</el-button
        >
        <el-button type="primary" v-else @click="updata() ">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// 引入vuex的方法和属性值
import { userAdd, requserinfo,requseRedite } from "../../../util/request";
// 发送请求，点击添加把数据存起来

// 引入路由
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      roleList: "role/list",
      // 调用menu里面的list方法
    }),
  },
  components: {},
  data() {
    return {
      isShow: true,
      width: "160px",
      form: {
        roleid: "",
        username: "",
        password: "",
        status: 1,
      },
    };
  },
  methods: {
    hide() {
      this.info.isShow = false;
       this.requestserList()
    },

    add() {
      userAdd(this.form).then((res) => {
        this.requestserList()
        this.hide()
      });
    },
    emply() {
      this.form = {
        form: {
          roleid: "",
          username: "",
          password: "",
          status: 1,
        },
      };
    },
    ...mapActions({
      // requestMenuList: "menu/requestMenuList",
      requestRolelist: "role/requestRolelist",
      requestserList:'manger/requestserList'
    }),
    // 由于后端要的是字符串数组，而获取的是数组，所以要转
      // 获取一条数据的方法
  look(uid) {
    requserinfo({ uid: uid }).then((res) => {
      this.form = res.data.list;
      this.form.password=""
      this.form.uid = uid;
    });
  },
  updata() {
  requseRedite(this.form).then(res=>{
     this.requestserList();
     this.hide()
    })
  },
  },


  mounted() {
    // 调用方法

    if (this.roleList.length == 0) {
      this.requestRolelist();
    }
  },
};
</script>
<style>
</style>