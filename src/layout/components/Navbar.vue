<template>
  <div class="navbar">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "QingMengNavbar",

  data() {
    return {
      // itemList: []
    };
  },

  computed: {
    levelList(){
      return this.getBreadcrumb()
    }
  },

  created(){
    this.getBreadcrumb()

  },
  mounted() {},

  methods: {
    getBreadcrumb(){
      // console.log(this.$route, 'this.$route')
      let matched = this.$route.matched.filter(item=>{
        if(Object.prototype.hasOwnProperty.call(item, 'meta')){
          if(Object.prototype.hasOwnProperty.call(item.meta, 'title')){
            return true
          }
        }
        return false
      })
      // console.log(matched, 'matched')
      const first = matched[0]
      // console.log('first',first)
      // console.log('lowercase', first.meta.title.toLowerCase())
      if(first.meta.title.toLowerCase()!=='dashboard'){
        // console.log('true')
        matched = [{ path:'/dashboard', meta: { title: 'dashboard'}}].concat(matched)
      }
      // console.log(matched, 'matched second')
      return matched

    }
  },
};
</script>

<style  scoped>
/* navbar{
  border-bottom: 1px solid #111;
  
}. */
</style>