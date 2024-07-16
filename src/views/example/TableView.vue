<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getTable } from '@/api/tableapi';
export default {
  name: 'QingMengTableView',

  data() {
    return {
      tableData: null
    };
  },
  created(){
    getTable().then(res=>{
        this.tableData = res.data.data.tableData
    })
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>