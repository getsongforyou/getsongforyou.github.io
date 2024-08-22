<template>
  <div>
    <h3>name</h3>
    <el-input
  placeholder="请输入内容"
  v-model="name"
  clearable>
</el-input>
    <h3>email</h3>
    <el-input
  placeholder="请输入内容"
  v-model="email"
  clearable>
</el-input>
<el-button type="primary" @click="handleSubmit">提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'QingMengAccount',

  data() {
    return {
      name: 'super admin',
      email: 'moshi@outlook.com'
    };
  },

  mounted() {
    
  },

  methods: {
    handleSubmit(){
        console.log('submit')
    }
  },
};
</script>
<style scoped>
*{
    margin-bottom: 10px;
}
</style>