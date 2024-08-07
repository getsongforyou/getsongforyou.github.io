<template>
  <div class="aside">
    <el-menu
      class="aside__menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      default-active="/dashboard"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :routeItem="route"
        :base-path="route.path"
      >
      </sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem.vue";
export default {
  components: { SidebarItem },
  name: "QingMengSidebar",

  data() {
    return {};
  },
  computed: {
    // 获取路由表数组
    routes() {
      return this.$store.state.routes.filter((item)=>{

      
        if (item.hidden) {
          return false;
        } else {
          return true;
        }
      });
    },
    
  },

  created(){
    console.log('path', this.$route)
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.aside__menu {
  height: 100%;
}
</style>