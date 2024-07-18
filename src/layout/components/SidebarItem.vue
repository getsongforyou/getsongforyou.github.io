<template>
  <aside class="sidebar">
    <!-- 子路由仅有一个或没有时，作为选项，多个时，作为下拉菜单 -->
    <template v-if="isMenuItem(routeItem)">
      <router-link :to="resolvePath(onlyChild.path)">
        <el-menu-item :index="resolvePath(onlyChild.path)">
          {{ onlyChild.meta.title }}
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else :index="routeItem.path">
      <template slot="title">
        <div v-if="routeItem.meta">{{ routeItem.meta.title }}</div>
      </template>
      <qing-meng-sidebar
        v-for="child in routeItem.children"
        :key="child.path"
        :routeItem="child"
        :base-path="resolvePath(child.path)"
      >
      </qing-meng-sidebar>
    </el-submenu>
  </aside>
</template>

<script>
export default {
  name: "QingMengSidebar",
  props: {
    routeItem: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: ''
    }
  },

  data() {
    this.onlyChild = null;
    return {};
  },

  created() {
    // console.log("onlychild path", this.onlyChild);
  },

  mounted() {},

  methods: {
    resolvePath(routePath){
      let result
      
      if(this.basePath == '/'){
        result=this.basePath+routePath
      }else{
        result=this.basePath+'/'+routePath
      }
      return result
    },
    isMenuItem(route) {
      // if((route.hasOwnProperty('children')&&route.children.length<2)||!route.hasOwnproperty('children')){
      //   return true
      // }else{
      //   return false
      // }
      let children = route.children || [];
      const showChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyChild = item;
          return true;
        }
      });
      if (showChildren.length === 1) {
        return true;
      }
      if (showChildren.length === 0) {
        this.onlyChild = { ...route,path: '' };
        return true;
      }
      return false;
    },
  },
};
</script>