<template>
  <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="roleid" label="用户编号" width="90">
      </el-table-column>
      <el-table-column prop="username" label="用户名称" width="250">
      </el-table-column>
      <el-table-column prop="rolename" label="所属角色" width="250">
      </el-table-column>
      <el-table-column prop="status" label="状态" width="250">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1"
            >启用</el-button
          >
          <el-button type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="操作" width="297">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.uid)"
            >编辑</el-button
          >
          <el-button type="danger" @click="del(scope.row.uid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination :page-size="2" layout="prev, pager, next" :total="total"
    @current-change="changeCurrenPage"> </el-pagination>
  </div>
</template>
<script>
import {
  roleDelete,
  requserinfo,
  requserDelete,
  requseRedite,
  requsercount,
} from "../../../util/request";
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    // 获取，暴露
    ...mapGetters({
      list: "manger/list",
      total: "manger/total",
    }),
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    Adds() {},
    edit(id) {
      this.$emit("edit", id);
    },
    // 方法
    del(id) {
      requserDelete({ uid: id }).then((res) => {
        alert("删除成功");
        this.requestserList();
        this.requestuserCount()
        this.changeCountPape(1)
      });
    },
    // 调方法的
    ...mapActions({
      requestserList: "manger/requestserList",
      requestuserCount: "manger/requestuserCount",
      changeCountPape:'manger/changeCountPape'
    }),
  changeCurrenPage(a){
     this.changeCountPape(a)
  }
  },
  mounted() {
    this.requestserList();
    this.requestuserCount();
  },
};
</script>
<style>
</style>