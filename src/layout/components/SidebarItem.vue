<template>
  <aside class="sidebar">
    <!-- 子路由仅有一个或没有时，作为选项，多个时，作为下拉菜单 -->
    <template v-if="isMenuItem(routeItem)">
      <el-menu-item>
        {{ routeItem.meta.title }}
      </el-menu-item>
    </template>
    <el-sub-menu v-else>
      <template slot="title">
        {{ routeItem.meta.title }}
      </template>
      <sidebar v-for="child in routeItem.children"
      :key="child.path"
      :routeItem="child">
    </sidebar>
    </el-sub-menu>
  </aside>
</template>

<script>
export default {
  name: 'QingMengSidebar',
  props: {
    routeItem: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    isMenuItem(route){
      // if((route.hasOwnProperty('children')&&route.children.length<2)||!route.hasOwnproperty('children')){
      //   return true
      // }else{
      //   return false
      // }
      // let children = route.children || []
      // const showChildren = children.filter(item=>{
      //   if(item.hidden){
      //     return true
      //   }else{
      //     this.onlyChildren = route
      //     return false
      //   }
      // })
      return route
    }
  },
};
</script>