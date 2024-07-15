<template>
  <div class="aside">
    <el-menu class="el-menu-demo" @select="handleSelect" >
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
    routes() {
      return this.$router.options.routes;
    },
  },

  mounted() {},

  methods: {},
};
</script>