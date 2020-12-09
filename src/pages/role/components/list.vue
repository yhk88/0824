<template>
  <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="角色编号" width="90">
      </el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="349">
      </el-table-column>
      <el-table-column prop="status" label="状态" width="349">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status==1">启用</el-button>
           <el-button type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="操作" width="349">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>


import { roleDelete } from "../../../util/request";
import{mapActions,mapGetters} from 'vuex'
export default {
  computed: {
    // 获取，暴露
   ...mapGetters({
     list:'role/list'
   })
  },
  components: {},
  data() {
    return {
    
    };
  },
  methods: {
    
    Adds() {},
    edit(id) {
      this.$emit('edit',id)
     
    },
    // 方法
    del(id) {
      roleDelete({id:id}).then(res=>{
        alert("删除成功")
        this.requestRolelist()
      })
    },
    // 调方法的
    ...mapActions({
     requestRolelist:'role/requestRolelist'
    })
  },
  mounted() {
    this.requestRolelist()
  },
};
</script>
<style>
</style>