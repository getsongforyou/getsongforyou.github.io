<template>
  <div class="aside">
    <el-menu class="el-menu-demo"  >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :routeItem="route"
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
      return this.$router.options.routes.filter(item=>{
        if(item.hidden){
          return false
        }else{
          return true
        }
      });
    },
  },

  mounted() {},

  methods: {},
};
</script>