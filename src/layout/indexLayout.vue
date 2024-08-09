<template>
  <div class="container">
    <div class="container__sidebar">
        <Sidebar :routeItem="routeList" class="container__sidebar"></Sidebar>
    </div>
    <div class="container__main">
        <div class="container__main__nav">
            <Navbar></Navbar>
        </div>
        <keep-alive>
          
          <app-main></app-main>
        </keep-alive>
    </div>
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: { Navbar, AppMain, Sidebar },
  name: 'QingMengIndexLayout',

  data() {
    return {
      routeList: null
    };
  },

  created(){
    console.log('create layout')
    this.routeList = this.$router.options.routes
    console.log(this.routeList)
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style  scoped>
.container{
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
}
.container__sidebar{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  height: 100vh;
}
.container__main{
  position: absolute;
  left: 210px;
  right: 0;
  bottom: 0;
  top: 0;
  min-width: 650px;
}
.container__main__nav{
  height: 50px;
  display: flex;
  padding: 0 25px;
  margin-bottom: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>