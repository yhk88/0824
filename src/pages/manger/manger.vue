<template>
  <div>
    <el-button type="primary" @click="wellAdd()">添加</el-button>
    <v-add :info="info" ref="one"></v-add>
    <div class="box"><v-list @edit="edit3($event)"></v-list></div>
  </div>
</template>
<script>
import vAdd from "./components/add";
import vList from "./components/list";
export default {
  components: {
    vAdd,
    vList,
  },

  data() {
    return {
      info: {
        isShow: false,
        // ,
        name: "管理员管理",
        isAdd: true,
      },
    };
  },
  methods: {
    wellAdd() {
      this.info.isShow = !this.info.isShow;
      this.info.name = "管理员管理";

      this.info.isAdd = true;
    },
    edit3(id) {
      console.log(this.$refs.one);
      this.info.name = "管理员编辑";
      this.info.isAdd = false;
      this.info.isShow = true;
      this.$refs.one.look(id);
    },
  },
};
</script>
<style>
.box {
  margin-top: 20px;
}
</style>