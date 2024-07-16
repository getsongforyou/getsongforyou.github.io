<template>
  <div class="container">
    <!-- <div class="container__sidebar">
        <Sidebar :routeItem="routeList"></Sidebar>
    </div> -->
    <!-- <div class="container__main">
        <div class="container__main__nav">
            <Navbar></Navbar>
        </div>
        <AppMain></AppMain>
    </div> -->
    <navbar></navbar>
  </div>
</template>

<script>
// import AppMain from './components/AppMain.vue';
import Navbar from './components/Navbar.vue';
// import Sidebar from './components/Sidebar.vue';

export default {
  components: { Navbar },
  name: 'QingMengIndexLayout',

  data() {
    return {
      routeList: null
    };
  },

  created(){
    this.routeList = this.$router.options.routes
    console.log(this.routeList)
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>