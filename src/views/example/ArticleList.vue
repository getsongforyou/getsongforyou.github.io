<template>
  <div>
    <el-table
    :data="tableData"
    stripe
    height = '700'
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      width="40">
    </el-table-column>
    <el-table-column
    class-name="column-title"
      prop="title"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者">
    </el-table-column>
    <el-table-column
      prop="summary"
      label="简介">
    </el-table-column>
    <el-table-column
      prop="date"
      label="发布时间">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { getArticleList } from '@/api/example';

export default {
  name: 'QingMengArticleList',

  data() {
    return {
      tableData: []
    };
  },

  created(){
    getArticleList()
    .then(res=>{
        console.log('article list', res)
        if(res.data.success){
            this.tableData = res.data.tableData
            this.tableData.forEach(item=>{
                item.date = new Date(item.date).toISOString().slice(0, 19).replace('T', ' ');
            })
            console.log(this.tableData)
        }else{
            this.$message(res.data.message)
        }
    })
    .catch(e=>{
        this.$message({
            message: e,
            type: 'error'
        })
        throw e
    })
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style  scoped>
.column-title{
    color:aqua;
    font-size: 36px;
}
</style>
