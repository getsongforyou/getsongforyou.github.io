<template>
  <div class="navbar">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
      <div>

        <el-avatar :src="imgUrl"></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <span @click="handleProfile">profile</span>
        </el-dropdown-item>
        <el-dropdown-item><span @click="handleHome">home</span></el-dropdown-item>
        <el-dropdown-item ><span @click="handleLogout" >logout</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    
  </div>
</template>

<script>


export default {
  name: "QingMengNavbar",

  data() {
    return {
      // itemList: []
      imgUrl: require('@/assets/img/avator.jpg')
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
    handleHome(){
      console.log('home', this.$route)
      this.$router.push('/dashboard')
    },
    handleProfile(){
      this.$router.push('/profile')
    },
    handleLogout(){
      this.$store.dispatch('logOut').then(s =>{
        if(s){
          this.$router.push('/login')
        }else{
          this.$message({message:'error,logout again'})
        }
      })
    },
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
.navbar{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>